import { g as O, h as P, p as m, l as n, i as p, j as s, k as Q, m as R, n as S, q as B, u as N, d, w as T, x as W, y as U, z as u, B as v, v as j, a7 as V, e as X, t as Y, a as Z, A as ee, f as w, c as se, r as ae } from "./index-quCB9sGT.js";
import te from "./Placeholder-DUu9yTu1.js";
import { l as q } from "./phosphorIconLoader-BKB9PScS.js";
var oe = w("<i></i>"), re = w("<div><!></div>");
function ie(A, r) {
  O(r, !1);
  const _ = () => W(D, "$component", b), y = () => W($, "$builderStore", b), [b, L] = U(), h = u(), c = u(), k = u(), g = u(), { styleable: x, builderStore: $ } = P("sdk"), D = P("component");
  let e = m(r, "icon", 8), E = m(r, "size", 8), C = m(r, "color", 8), I = m(r, "onClick", 8);
  n(() => p(e()), () => {
    v(h, e() && (e().startsWith("ri-") || e().includes("remix")));
  }), n(() => (p(e()), s(h)), () => {
    v(c, e() && !s(h));
  }), n(() => (s(c), q), () => {
    s(c) && q("regular");
  }), n(() => (s(c), p(e())), () => {
    v(k, s(c) ? `ph ph-${e().replace(/^ph-/, "")}` : e());
  }), n(() => (_(), p(C())), () => {
    v(g, {
      ..._().styles,
      normal: {
        ..._().styles.normal,
        color: C() || "var(--spectrum-global-color-gray-900)"
      }
    });
  }), Q(), R();
  var z = S(), F = B(z);
  {
    var G = (a) => {
      var t = oe();
      let i;
      j(t, (o, l) => x?.(o, l), () => s(g)), V(() => X("click", t, function(...o) {
        I()?.apply(this, o);
      })), Y((o) => i = Z(t, 1, `${s(k) ?? ""} ${E() ?? ""}`, "svelte-1oybrp7", i, o), [() => ({ hoverable: I() != null })]), d(a, t);
    }, H = (a) => {
      var t = S(), i = B(t);
      {
        var o = (l) => {
          var f = re(), J = se(f);
          te(J, {}), ae(f), j(f, (K, M) => x?.(K, M), () => s(g)), d(l, f);
        };
        N(
          i,
          (l) => {
            y(), ee(() => y().inBuilder) && l(o);
          },
          !0
        );
      }
      d(a, t);
    };
    N(F, (a) => {
      e() ? a(G) : a(H, !1);
    });
  }
  d(A, z), T(), L();
}
export {
  ie as default
};
