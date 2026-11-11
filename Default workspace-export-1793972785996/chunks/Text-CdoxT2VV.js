import { g as Q, h as S, p as o, l as c, j as a, i as u, k as R, m as U, n as V, q as W, aq as X, A as j, d as q, w as Z, x as P, y as $, z as r, c as ee, r as te, Y as se, B as l, v as ae, a7 as w, e as A, t as ne, a3 as le, a as ie, b as oe, f as re } from "./index-quCB9sGT.js";
var ce = re("<p> </p>");
function ue(M, n) {
  Q(n, !1);
  const t = () => P(E, "$component", g), f = () => P(z, "$builderStore", g), [g, Y] = $(), b = r(), x = r(), h = r(), y = r(), v = r(), { styleable: D, builderStore: z } = S("sdk"), E = S("component");
  let m = o(n, "text", 8), B = o(n, "color", 8), C = o(n, "align", 8), F = o(n, "bold", 8), G = o(n, "italic", 8), H = o(n, "underline", 8), k = o(n, "size", 8), p = r(), _ = r(!1);
  const I = (s, e, d) => !e.inBuilder || d.editing ? s || "" : s || d.name || "Placeholder text", J = (s, e) => e ? { ...s, normal: { ...s?.normal, color: e } } : s, K = (s) => {
    a(_) && z.actions.updateProp("text", s.target.textContent), l(_, !1);
  };
  c(() => (t(), a(p)), () => {
    t().editing && a(p)?.focus();
  }), c(() => (f(), u(m()), t()), () => {
    l(b, f().inBuilder && !m() && !t().editing);
  }), c(() => (u(m()), f(), t()), () => {
    l(x, I(m(), f(), t()));
  }), c(() => u(k()), () => {
    l(h, `spectrum-Body--size${k() || "M"}`);
  }), c(() => u(C()), () => {
    l(y, `align--${C() || "left"}`);
  }), c(() => (t(), u(B())), () => {
    l(v, J(t().styles, B()));
  }), R(), U();
  var T = V(), L = W(T);
  X(L, () => (t(), j(() => t().editing)), (s) => {
    var e = ce();
    let d;
    var N = ee(e, !0);
    te(e), se(e, (i) => l(p, i), () => a(p)), ae(e, (i, O) => D?.(i, O), () => a(v)), w(() => A("blur", e, function(...i) {
      (t().editing ? K : null)?.apply(this, i);
    })), w(() => A("input", e, () => l(_, !0))), ne(
      (i) => {
        le(e, "contenteditable", (t(), j(() => t().editing))), d = ie(e, 1, `spectrum-Body ${a(h) ?? ""} ${a(y) ?? ""}`, "svelte-ji8sc1", d, i), oe(N, a(x));
      },
      [
        () => ({
          placeholder: a(b),
          bold: F(),
          italic: G(),
          underline: H()
        })
      ]
    ), q(s, e);
  }), q(M, T), Z(), Y();
}
export {
  ue as default
};
