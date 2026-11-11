import { g as J, p as n, h as g, l as m, i as o, k as M, m as N, ce as O, j as _, v as S, d as V, w as q, x as A, y as D, z as v, c as E, f as F, r as G, B as y } from "./index-quCB9sGT.js";
var H = F('<div class="svelte-a67ia9"><!></div>');
function K(x, t) {
  J(t, !1);
  const r = () => A(k, "$component", h), [h, z] = D(), i = v(), l = v();
  let c = n(t, "text", 8, ""), f = n(t, "color", 24, () => {
  }), d = n(t, "align", 8, "left"), u = n(t, "size", 8, "14px");
  const k = g("component"), { styleable: w } = g("sdk"), b = (e, s, B, C) => {
    let p = { "text-align": B, "font-size": C || "14px" };
    return s && (p.color = s), { ...e, normal: { ...e.normal, ...p } };
  }, T = (e) => {
    if (e == null)
      return "";
    if (typeof e != "string")
      try {
        return JSON.stringify(e);
      } catch {
        return "";
      }
    return e;
  };
  m(
    () => (r(), o(f()), o(d()), o(u())),
    () => {
      y(i, b(r().styles, f(), d(), u()));
    }
  ), m(() => o(c()), () => {
    y(l, T(c()));
  }), M(), N();
  var a = H(), j = E(a);
  O(j, {
    get value() {
      return _(l);
    }
  }), G(a), S(a, (e, s) => w?.(e, s), () => _(i)), V(x, a), q(), z();
}
export {
  K as default
};
