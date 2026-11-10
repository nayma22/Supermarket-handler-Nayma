// n8n Code node "Build Department Emails" (mode: Run Once for All Items)
// Readable copy of the code inside n8n/notifications.json. Edit here, then paste into the node.
// Input: one item per employee from "Get Department Items" (optionally passed through "Gemini Tip").
// Output: one item per employee { email, full_name, department, subject, html } for the Gmail node.

const DASHBOARD_URL = 'https://YOUR-APP.budibase.app'; // TODO: Budibase link to /employee/stock (ask Sachini)

const rows = $('Get Department Items').all();
const geminiItems = $input.all();

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rupee = (n) => '&#8377;' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 2 });
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const shortDate = (iso) => {
  const [, m, d] = String(iso).slice(0, 10).split('-').map(Number);
  return d + ' ' + MONTHS[m - 1];
};
const whenText = (days) => {
  if (days < -1) return 'expired ' + (-days) + ' days ago';
  if (days === -1) return 'expired yesterday';
  if (days === 0) return 'expires today';
  if (days === 1) return 'expires tomorrow';
  return 'expires in ' + days + ' days';
};

// Same rule as the SQL in expiry-check.json
const GROUPS = [
  { title: 'Remove from shelf now', bar: '#D92D20', text: '#912018', box: '#B42318', test: (d) => d < 0 },
  { title: 'Put 30% off labels', bar: '#EF6820', text: '#7E2410', box: '#C4320A', test: (d) => d >= 0 && d <= 1 },
  { title: 'Put 20% off labels', bar: '#EAAA08', text: '#713B12', box: '#CA8504', test: (d) => d >= 2 && d <= 3 },
];

const FONT = "-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const today = $now.toFormat('cccc, d LLLL yyyy');

function itemRow(item, group, expired) {
  const days = Number(item.days_left);
  const right = expired
    ? '<span style="display:inline-block;background:#FEF3F2;color:#B42318;font-size:12px;line-height:16px;font-weight:700;padding:4px 8px;border-radius:4px;">REMOVE</span>'
    : '<span style="font-size:20px;line-height:22px;font-weight:700;color:#1C2A22;">' + rupee(item.new_price) + '</span><br>' +
      '<span style="font-size:12px;color:#7A8A80;">was <span style="text-decoration:line-through;">' + rupee(item.price) + '</span></span>';
  return '<tr>' +
    '<td width="26" valign="top" style="padding:14px 0;border-bottom:1px solid #EEF2EF;"><div style="width:16px;height:16px;border:2px solid ' + group.box + ';border-radius:4px;">&nbsp;</div></td>' +
    '<td valign="top" style="padding:13px 0;border-bottom:1px solid #EEF2EF;font-size:15px;line-height:20px;"><strong>' + esc(item.product_name) + '</strong><br>' +
      '<span style="font-size:13px;line-height:18px;color:#5B6B62;">' + Number(item.quantity) + ' units &middot; ' + whenText(days) + ' (' + shortDate(item.expiry_date) + ')</span></td>' +
    '<td align="right" valign="top" style="padding:13px 0;border-bottom:1px solid #EEF2EF;white-space:nowrap;">' + right + '</td>' +
    '</tr>';
}

function section(stepNo, group, items, expired) {
  return '<tr><td style="padding:24px 28px 0;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-left:4px solid ' + group.bar + ';padding:1px 0 1px 10px;font-size:15px;line-height:20px;font-weight:700;color:' + group.text + ';">' + stepNo + '. ' + group.title + '</td></tr></table>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:8px;">' +
    items.map((it) => itemRow(it, group, expired)).join('') +
    '</table></td></tr>';
}

function aiBlock(tip) {
  if (!tip) return '';
  return '<tr><td style="padding:24px 28px 0;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#EEF4F8" style="background:#EEF4F8;border:1px solid #D3E0EA;border-radius:8px;"><tr><td style="padding:14px 16px;">' +
    '<div style="font-size:11px;line-height:14px;letter-spacing:0.8px;text-transform:uppercase;font-weight:700;color:#2E5A7A;">AI suggestion &middot; Gemini</div>' +
    '<div style="font-size:14px;line-height:20px;color:#1F3445;padding-top:6px;">' + esc(tip) + '</div>' +
    '<div style="font-size:12px;line-height:16px;color:#5A7184;padding-top:6px;">Only a suggestion. The prices above are the ones saved in the system. Ask the manager before changing a price.</div>' +
    '</td></tr></table></td></tr>';
}

function geminiText(json) {
  const t = json && json.candidates && json.candidates[0] && json.candidates[0].content &&
    json.candidates[0].content.parts && json.candidates[0].content.parts[0] && json.candidates[0].content.parts[0].text;
  return t ? String(t).replace(/[*_#`]/g, '').trim().slice(0, 400) : '';
}

return rows.map((row, i) => {
  const r = row.json;
  const items = Array.isArray(r.items) ? r.items : JSON.parse(r.items || '[]');
  const firstName = String(r.full_name || '').split(' ')[0] || 'there';
  const dept = esc(r.department);

  let step = 0;
  let sections = '';
  const counts = [];
  GROUPS.forEach((g, gi) => {
    const list = items.filter((it) => g.test(Number(it.days_left)));
    counts.push(list.length);
    if (list.length) sections += section(++step, g, list, gi === 0);
  });

  const expiredCount = counts[0];
  const labelCount = counts[1] + counts[2];
  const pre = [];
  if (expiredCount) pre.push('Remove ' + expiredCount + ' expired item' + (expiredCount > 1 ? 's' : ''));
  if (labelCount) pre.push((pre.length ? 'put' : 'Put') + ' new price labels on ' + labelCount + ' item' + (labelCount > 1 ? 's' : ''));

  const total = items.length;
  const noun = total === 1 ? 'product needs' : 'products need';
  const tip = geminiText(geminiItems[i] && geminiItems[i].json);

  const html =
    '<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">' + pre.join(', ') + '</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F2F4F1" style="background:#F2F4F1;"><tr><td align="center" style="padding:24px 12px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="max-width:600px;background:#FFFFFF;border:1px solid #DDE4DF;border-radius:10px;font-family:' + FONT + ';color:#1C2A22;">' +
    '<tr><td bgcolor="#123B2C" style="background:#123B2C;padding:24px 28px 22px;border-radius:10px 10px 0 0;">' +
      '<div style="font-size:12px;line-height:16px;letter-spacing:1.2px;text-transform:uppercase;font-weight:700;color:#9FD3B2;">Expiry Monitor &middot; ' + dept + ' department</div>' +
      '<div style="font-size:24px;line-height:30px;font-weight:700;color:#FFFFFF;padding-top:8px;">Hi ' + esc(firstName) + ', ' + total + ' ' + dept + ' ' + noun + ' you today</div>' +
      '<div style="font-size:14px;line-height:20px;color:#CFE3D6;padding-top:4px;">' + today + ' &middot; work through the list from the top</div>' +
    '</td></tr>' +
    sections +
    aiBlock(tip) +
    '<tr><td style="padding:24px 28px 4px;">' +
      '<div style="font-size:14px;line-height:20px;color:#4A5B51;">When you are done, update the quantities in the employee dashboard so the manager sees the right stock.</div>' +
      '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;"><tr><td bgcolor="#1E6B47" style="background:#1E6B47;border-radius:6px;">' +
      '<a href="' + DASHBOARD_URL + '" style="display:inline-block;padding:12px 22px;font-size:15px;line-height:20px;font-weight:600;color:#FFFFFF;text-decoration:none;">Update my stock</a>' +
      '</td></tr></table>' +
    '</td></tr>' +
    '<tr><td style="padding:22px 28px 26px;"><div style="border-top:1px solid #DDE4DF;padding-top:14px;font-size:12px;line-height:18px;color:#6B7A71;">' +
      'You get this email because you work in the ' + dept + ' department. Customers already see these discounts on the offers page.<br>' +
      'Sent automatically by Expiry Monitor (n8n). The store manager gets a full report for all departments.' +
    '</div></td></tr>' +
    '</table></td></tr></table>';

  return {
    json: {
      email: r.email,
      full_name: r.full_name,
      department: r.department,
      subject: r.department + ': ' + total + ' product' + (total === 1 ? '' : 's') + ' to handle today',
      html,
    },
  };
});
