import { g as Q, h as H, p as o, l as c, j as s, i as u, k as R, m as U, n as V, q as W, aq as X, A as S, d as T, w as Z, x as q, y as $, z as r, c as ee, r as te, Y as ae, B as l, v as se, a7 as P, e as j, t as ne, a3 as le, a as ie, b as oe, f as re } from "./index-quCB9sGT.js";
var ce = re("<h1> </h1>");
function ue(A, n) {
  Q(n, !1);
  const t = () => q(D, "$component", p), f = () => q(z, "$builderStore", p), [p, M] = $(), h = r(), b = r(), x = r(), v = r(), y = r(), { styleable: Y, builderStore: z } = H("sdk"), D = H("component");
  let g = o(n, "text", 8), C = o(n, "color", 8), k = o(n, "align", 8), E = o(n, "bold", 8), F = o(n, "italic", 8), G = o(n, "underline", 8), w = o(n, "size", 8), m = r(), _ = r(!1);
  const I = (a, e, d) => !e.inBuilder || d.editing ? a || "" : a || d.name || "Placeholder text", J = (a, e) => e ? { ...a, normal: { ...a?.normal, color: e } } : a, K = (a) => {
    s(_) && z.actions.updateProp("text", a.target.textContent), l(_, !1);
  };
  c(() => (t(), s(m)), () => {
    t().editing && s(m)?.focus();
  }), c(() => (f(), u(g()), t()), () => {
    l(h, f().inBuilder && !g() && !t().editing);
  }), c(() => (u(g()), f(), t()), () => {
    l(b, I(g(), f(), t()));
  }), c(() => u(w()), () => {
    l(x, `spectrum-Heading--size${w() || "M"}`);
  }), c(() => u(k()), () => {
    l(v, `align--${k() || "left"}`);
  }), c(() => (t(), u(C())), () => {
    l(y, J(t().styles, C()));
  }), R(), U();
  var B = V(), L = W(B);
  X(L, () => (t(), S(() => t().editing)), (a) => {
    var e = ce();
    let d;
    var N = ee(e, !0);
    te(e), ae(e, (i) => l(m, i), () => s(m)), se(e, (i, O) => Y?.(i, O), () => s(y)), P(() => j("blur", e, function(...i) {
      (t().editing ? K : null)?.apply(this, i);
    })), P(() => j("input", e, () => l(_, !0))), ne(
      (i) => {
        le(e, "contenteditable", (t(), S(() => t().editing))), d = ie(e, 1, `spectrum-Heading ${s(x) ?? ""} ${s(v) ?? ""}`, "svelte-w2bvtw", d, i), oe(N, s(b));
      },
      [
        () => ({
          placeholder: s(h),
          bold: E(),
          italic: F(),
          underline: G()
        })
      ]
    ), T(a, e);
  }), T(A, B), Z(), M();
}
export {
  ue as default
};
