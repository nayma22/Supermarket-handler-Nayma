import { g as O, h as z, p as f, l as u, i as n, k as Q, m as R, n as C, q as $, u as S, d as h, w as T, x as j, y as U, B, v as I, j as _, a7 as X, e as Y, t as P, a as Z, aL as ee, at as q, A as te, z as A, f as N, c as ae, r as se } from "./index-quCB9sGT.js";
import oe from "./Placeholder-DUu9yTu1.js";
import { l as L } from "./phosphorIconLoader-BKB9PScS.js";
var le = N("<i></i>"), re = N("<div><!></div>");
function fe(V, s) {
  O(s, !1);
  const m = () => j(E, "$component", g), v = () => j(D, "$builderStore", g), [g, W] = U(), d = A(), y = A(), { styleable: x, builderStore: D } = z("sdk"), E = z("component");
  let o = f(s, "icon", 8), l = f(s, "size", 8, 24), r = f(s, "weight", 8, "regular"), b = f(s, "color", 8), k = f(s, "onClick", 8);
  u(
    () => (n(r()), n(o()), L),
    () => {
      r() && o() && L(r());
    }
  ), u(
    () => (m(), n(b()), n(l())),
    () => {
      B(d, {
        ...m().styles,
        normal: {
          ...m().styles.normal,
          color: b() || "var(--spectrum-global-color-gray-900)",
          "font-size": `${l()}px`
        }
      });
    }
  ), u(() => (n(o()), n(r())), () => {
    B(y, o() ? (() => {
      const e = o().replace(/^ph-/, "");
      return r() === "regular" ? `ph ph-${e}` : `ph-${r()} ph-${e}`;
    })() : "");
  }), Q(), R();
  var w = C(), F = $(w);
  {
    var G = (e) => {
      var t = le();
      let p;
      I(t, (a, c) => x?.(a, c), () => _(d)), X(() => Y("click", t, function(...a) {
        k()?.apply(this, a);
      })), P(
        (a) => {
          p = Z(t, 1, ee(_(y)), "svelte-n5dl3n", p, a), q(t, `width: ${l() ?? ""}px; height: ${l() ?? ""}px; display: inline-flex; align-items: center; justify-content: center;`);
        },
        [() => ({ hoverable: k() != null })]
      ), h(e, t);
    }, H = (e) => {
      var t = C(), p = $(t);
      {
        var a = (c) => {
          var i = re(), J = ae(i);
          oe(J, {}), se(i), I(i, (K, M) => x?.(K, M), () => _(d)), P(() => q(i, `width: ${l() ?? ""}px; height: ${l() ?? ""}px;`)), h(c, i);
        };
        S(
          p,
          (c) => {
            v(), te(() => v().inBuilder) && c(a);
          },
          !0
        );
      }
      h(e, t);
    };
    S(F, (e) => {
      o() ? e(G) : e(H, !1);
    });
  }
  h(V, w), T(), W();
}
export {
  fe as default
};
