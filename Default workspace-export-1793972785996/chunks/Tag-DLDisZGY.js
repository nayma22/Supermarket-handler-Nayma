import { g as F, p as a, h as _, l as b, i as c, k as G, m as H, u as I, v as J, t as K, d as L, w as N, x as v, y as Q, s as R, f as U, c as k, r as x, j as h, a as V, b as W, z as C, B as y, aO as X } from "./index-quCB9sGT.js";
var Y = U('<div><span class="spectrum-Tag-label svelte-1g7kpdk"> </span> <!></div>');
function $(T, s) {
  F(s, !1);
  const l = () => v(j, "$component", u), i = () => v(O, "$builderStore", u), [u, z] = Q(), d = C(), m = C();
  let w = a(s, "onClick", 8), p = a(s, "text", 8, ""), f = a(s, "color", 8), g = a(s, "textColor", 8), B = a(s, "closable", 8, !1), S = a(s, "size", 8, "M");
  const j = _("component"), { styleable: M, builderStore: O } = _("sdk"), P = (e, t, r) => !t.inBuilder || r.editing ? e || " " : e || r.name || "Placeholder text", q = (e, t, r) => t ? {
    ...e,
    normal: {
      ...e?.normal,
      "background-color": t,
      "border-color": t,
      color: r || "white",
      "--spectrum-clearbutton-medium-icon-color": "white"
    }
  } : e;
  b(
    () => (l(), c(f()), c(g())),
    () => {
      y(d, q(l().styles, f(), g()));
    }
  ), b(() => (c(p()), i(), l()), () => {
    y(m, P(p(), i(), l()));
  }), G(), H();
  var o = Y(), n = k(o), A = k(n, !0);
  x(n);
  var D = R(n, 2);
  {
    var E = (e) => {
      X(e, {
        $$events: {
          click(...t) {
            w()?.apply(this, t);
          }
        }
      });
    };
    I(D, (e) => {
      B() && e(E);
    });
  }
  x(o), J(o, (e, t) => M?.(e, t), () => h(d)), K(() => {
    V(o, 1, `spectrum-Tag spectrum-Tag--size${S() ?? ""}`, "svelte-1g7kpdk"), W(A, h(m));
  }), L(T, o), N(), z();
}
export {
  $ as default
};
