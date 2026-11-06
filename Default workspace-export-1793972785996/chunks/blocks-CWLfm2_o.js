import { aw as g, cA as d, bl as c, bm as y, cN as m } from "./index-quCB9sGT.js";
const h = {
  string: "stringfield",
  options: "optionsfield",
  number: "numberfield",
  bigint: "bigintfield",
  datetime: "datetimefield",
  boolean: "booleanfield",
  formula: "stringfield"
}, b = async (a, n) => {
  if (!a?.length || !n)
    return [];
  let r = [];
  for (let t of a) {
    let e = n[t]?.type;
    if (t.includes(".")) {
      const o = t.split("."), l = o[0], i = o.slice(1).join("."), f = n[l];
      f?.type === "link" && (e = (await g.fetchTableDefinition(f.tableId))?.schema?.[i]?.type, !e && i === "_id" && (e = "string"));
    }
    const s = h[e];
    s && r.push({
      name: t,
      componentType: s,
      type: e
    });
  }
  return r.slice(0, 5);
}, T = (a, n, r) => {
  if (!n?.length)
    return a;
  const t = [];
  return n?.forEach((e) => {
    const s = e.name.split(".").map(d).join("."), o = e.type === "string" || e.type === "formula", l = e.type === "datetime", i = `${d(r)}.${s}`;
    if (l) {
      t.push({
        field: e.name,
        type: e.type,
        operator: "rangeLow",
        valueType: "Binding",
        value: `{{ ${i} }}`
      });
      let p = `{{ date (add (date ${i} "x") 86399999) "YYYY-MM-DDTHH:mm:ss.SSSZ" }}`;
      p = `{{#if ${i} }}${p}{{/if}}`, t.push({
        field: e.name,
        type: e.type,
        operator: "rangeHigh",
        valueType: "Binding",
        value: p
      });
    } else
      t.push({
        field: e.name,
        type: e.type,
        operator: o ? c.STRING : c.EQUAL,
        valueType: "Binding",
        value: `{{ ${i} }}`
      });
  }), {
    logicalOperator: y.ALL,
    onEmptyFilter: m.RETURN_ALL,
    groups: [
      ...a?.groups || [],
      {
        logicalOperator: y.ALL,
        filters: t
      }
    ]
  };
};
export {
  T as a,
  b as e
};
