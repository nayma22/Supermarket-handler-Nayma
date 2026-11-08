import { g as E, p as a, z as L, I as D, j as s, E as P, t as F, i as G, A as J, a3 as k, a as q, at as A, b as K, e as Q, d as y, $ as z, w as R, B as S, c as l, H as C, s as w, f as T, r, n as U, q as V } from "./index-quCB9sGT.js";
var W = T('<div class="spectrum-Accordion"><div><h3 class="spectrum-Accordion-itemHeading"><button type="button"><!> </button></h3> <div class="spectrum-Accordion-itemContent svelte-qflk65"><!></div></div></div>');
function X(v, e) {
  E(e, !1);
  let d = a(e, "itemName", 24, () => {
  }), b = a(e, "initialOpen", 8, !1), _ = a(e, "header", 8), o = a(e, "headerSize", 8, "S"), g = a(e, "bold", 8, !0), h = a(e, "noPadding", 8, !1), t = L(b());
  function c() {
    S(t, !0);
  }
  function x() {
    S(t, !1);
  }
  function I(i) {
    return i === "S" ? "spectrum-Accordion-itemHeaderS" : i === "M" ? "spectrum-Accordion-itemHeaderM" : "spectrum-Accordion-itemHeaderL";
  }
  var M = { open: c, close: x }, u = W(), p = l(u);
  let H;
  var m = l(p), n = l(m), O = l(n);
  {
    let i = C(() => s(t) ? "caret-down" : "caret-right");
    D(O, {
      get name() {
        return s(i);
      },
      size: "S"
    });
  }
  var N = w(O);
  r(n), r(m);
  var f = w(m, 2), j = l(f);
  return P(j, e, "default", {}, null), r(f), r(p), r(u), F(
    (i, B) => {
      k(u, "role", d()), H = q(p, 1, "spectrum-Accordion-item svelte-qflk65", null, H, i), A(m, h() ? "margin-bottom: -10px;" : ""), q(n, 1, B, "svelte-qflk65"), A(n, `--font-weight: ${g() ? "bold" : "normal"}`), K(N, ` ${_() ?? ""}`), k(f, "role", d()), A(f, h() ? "padding-left: 0; padding-bottom: 0;" : "padding-left: 30px;");
    },
    [
      () => ({ "is-open": s(t) }),
      () => (G(o()), J(() => `spectrum-Accordion-itemHeader ${I(o())}`))
    ]
  ), Q("click", n, () => S(t, !s(t))), y(v, u), z(e, "open", c), z(e, "close", x), R(M);
}
function Z(v, e) {
  let d = a(e, "bold", 8), b = a(e, "initialOpen", 8), _ = a(e, "label", 8);
  {
    let o = C(() => _() || "");
    X(v, {
      get header() {
        return s(o);
      },
      get bold() {
        return d();
      },
      get initialOpen() {
        return b();
      },
      children: (g, h) => {
        var t = U(), c = V(t);
        P(c, e, "default", {}, null), y(g, t);
      },
      $$slots: { default: !0 }
    });
  }
}
export {
  Z as default
};
