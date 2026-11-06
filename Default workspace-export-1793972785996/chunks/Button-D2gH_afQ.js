import { g as et, h as M, p as l, l as u, i as m, j as t, k as at, m as st, n as nt, q as ot, aq as it, A as N, d as v, w as lt, x as O, y as ct, z as c, c as rt, u as ut, s as dt, r as ft, v as mt, Y as gt, B as i, a7 as y, e as k, t as W, a as A, a3 as pt, b as _t, f as Y } from "./index-quCB9sGT.js";
import { l as L } from "./phosphorIconLoader-BKB9PScS.js";
var bt = Y("<i></i>"), ht = Y("<button><!> </button>");
function kt(D, o) {
  et(o, !1);
  const e = () => O(G, "$component", C), x = () => O(z, "$builderStore", C), [C, E] = ct(), _ = c(), d = c(), B = c(), q = c(), w = c(), { styleable: F, builderStore: z } = M("sdk"), G = M("component");
  let H = l(o, "disabled", 8, !1), P = l(o, "text", 8, ""), j = l(o, "onClick", 8), I = l(o, "size", 8, "M"), J = l(o, "type", 8, "cta"), K = l(o, "quiet", 8, !1), a = l(o, "icon", 8, null), Q = l(o, "gap", 8, "M"), R = l(o, "active", 8, !1), g = c(), b = c(!1), h = c(!1);
  const U = (r, s, f) => f.editing ? r || " " : r || f.name || "Placeholder text", V = (r) => {
    t(b) && z.actions.updateProp("text", r.target.textContent), i(b, !1);
  }, X = async () => {
    i(h, !0), j() && await j()(), i(h, !1);
  };
  u(() => m(a()), () => {
    i(_, a() && (a().startsWith("ri-") || a().includes("remix")));
  }), u(() => (m(a()), t(_)), () => {
    i(d, a() && !t(_));
  }), u(() => (t(d), L), () => {
    t(d) && L("regular");
  }), u(() => (t(d), m(a())), () => {
    i(B, t(d) ? `ph ph-${a().replace(/^ph-/, "")}` : a());
  }), u(() => (e(), t(g)), () => {
    e().editing && t(g)?.focus();
  }), u(() => (m(P()), x(), e()), () => {
    i(q, U(P(), x(), e()));
  }), u(() => e(), () => {
    i(w, e().styles?.normal?.background || e().styles?.normal?.["background-image"]);
  }), at(), st();
  var S = nt(), Z = ot(S);
  it(Z, () => (e(), N(() => e().editing)), (r) => {
    var s = ht();
    let f;
    var T = rt(s);
    {
      var $ = (n) => {
        var p = bt();
        W(() => A(p, 1, `${t(B) ?? ""} ${I() ?? ""}`, "svelte-1iwj5yk")), v(n, p);
      };
      ut(T, (n) => {
        a() && n($);
      });
    }
    var tt = dt(T);
    ft(s), mt(s, (n, p) => F?.(n, p), () => e().styles), gt(s, (n) => i(g, n), () => t(g)), y(() => k("click", s, X)), y(() => k("blur", s, function(...n) {
      (e().editing ? V : null)?.apply(this, n);
    })), y(() => k("input", s, () => i(b, !0))), W(
      (n) => {
        f = A(s, 1, `spectrum-Button spectrum-Button--size${I()} spectrum-Button--${J()} gap-${Q()}`, "svelte-1iwj5yk", f, n), s.disabled = H() || t(h), pt(s, "contenteditable", (e(), m(a()), N(() => e().editing && !a()))), _t(tt, ` ${t(q) ?? ""}`);
      },
      [
        () => ({
          "spectrum-Button--quiet": K(),
          custom: t(w),
          active: R()
        })
      ]
    ), v(r, s);
  }), v(D, S), lt(), E();
}
export {
  kt as default
};
