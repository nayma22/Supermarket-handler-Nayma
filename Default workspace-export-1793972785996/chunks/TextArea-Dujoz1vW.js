import { g as G, p as i, a0 as I, l as g, i as B, j as a, k as J, m as K, c as L, d6 as M, Y as Q, B as n, s as R, E as U, r as W, t as X, at as N, a as $, a3 as P, a2 as ee, e as d, Z as j, d as te, $ as _, w as ae, z as u, f as se } from "./index-quCB9sGT.js";
var le = se('<div><textarea class="spectrum-Textfield-input svelte-1xssmuf"></textarea> <!></div>');
function ne(w, e) {
  G(e, !1);
  const m = u(), v = u();
  let z = i(e, "value", 8, ""), A = i(e, "placeholder", 24, () => {
  }), o = i(e, "disabled", 8, !1), b = i(e, "readonly", 8, !1), D = i(e, "id", 24, () => {
  }), x = i(e, "height", 24, () => {
  }), y = i(e, "minHeight", 24, () => {
  }), C = i(e, "align", 8, null), F = i(e, "updateOnChange", 8, !1);
  const H = () => ({
    start: a(l).selectionStart,
    end: a(l).selectionEnd
  }), S = I();
  let f = u(!1), l = u(), h = u(!1);
  function T() {
    a(l).focus();
  }
  function p() {
    return a(l).value;
  }
  const V = () => {
    n(f, !1), E();
  }, Y = () => {
    n(h, a(l).clientHeight < a(l).scrollHeight), F() && E();
  }, E = () => {
    b() || o() || S("change", a(l).value);
  }, O = (s, c) => c == null ? "" : typeof c != "number" || isNaN(c) ? `${s}:${c};` : `${s}:${c}px;`;
  g(() => B(x()), () => {
    n(m, O("height", x()));
  }), g(() => B(y()), () => {
    n(v, O("min-height", y()));
  }), g(() => a(h), () => {
    S("scrollable", a(h));
  }), J();
  var Z = { getCaretPosition: H, focus: T, contents: p };
  K();
  var r = le();
  let k;
  var t = L(r);
  M(t), Q(t, (s) => n(l, s), () => a(l));
  var q = R(t, 2);
  return U(q, e, "default", {}, null), W(r), X(
    (s) => {
      N(r, `${a(m)}${a(v)}`), k = $(r, 1, "spectrum-Textfield spectrum-Textfield--multiline svelte-1xssmuf", null, k, s), P(t, "placeholder", A() || ""), N(t, C() ? `text-align: ${C()}` : ""), t.disabled = o(), t.readOnly = b(), P(t, "id", D()), ee(t, z() || "");
    },
    [
      () => ({ "is-disabled": o(), "is-focused": a(f) })
    ]
  ), d("input", t, Y), d("focus", t, () => n(f, !0)), d("blur", t, V), d("blur", t, function(s) {
    j.call(this, e, s);
  }), d("keypress", t, function(s) {
    j.call(this, e, s);
  }), te(w, r), _(e, "getCaretPosition", H), _(e, "focus", T), _(e, "contents", p), ae(Z);
}
export {
  ne as T
};
