import { g as P, h as f, p as j, m as D, n as u, q as _, u as g, d as r, w as E, y as F, v as h, t as G, a3 as y, A as b, aJ as H, f as $, x, c as K, r as L } from "./index-quCB9sGT.js";
import M from "./Placeholder-DUu9yTu1.js";
var N = $("<img/>"), O = $('<div class="placeholder svelte-q8zycx"><!></div>');
function T(k, c) {
  P(c, !1);
  const a = () => x(w, "$component", m), i = () => x(q, "$builderStore", m), [m, S] = F(), { styleable: p, builderStore: q } = f("sdk"), w = f("component");
  let v = j(c, "url", 8);
  D();
  var d = u(), z = _(d);
  {
    var A = (t) => {
      var e = N();
      h(e, (o, n) => p?.(o, n), () => a().styles), G(() => {
        y(e, "src", v()), y(e, "alt", (a(), b(() => a().name)));
      }), H(e), r(t, e);
    }, B = (t) => {
      var e = u(), o = _(e);
      {
        var n = (l) => {
          var s = O(), C = K(s);
          M(C, {}), L(s), h(s, (I, J) => p?.(I, J), () => ({ ...a().styles, empty: !0 })), r(l, s);
        };
        g(
          o,
          (l) => {
            i(), b(() => i().inBuilder) && l(n);
          },
          !0
        );
      }
      r(t, e);
    };
    g(z, (t) => {
      v() ? t(A) : t(B, !1);
    });
  }
  r(k, d), E(), S();
}
export {
  T as default
};
