import { g as j, h as f, p as z, m as D, n as u, q as _, u as b, d as o, w as F, y as G, c as h, aK as H, r as g, v as y, A as I, f as k, x as $ } from "./index-quCB9sGT.js";
import J from "./Placeholder-DUu9yTu1.js";
var L = k('<div class="embed svelte-g2wi45"><!></div>'), M = k("<div><!></div>");
function Q(x, d) {
  j(d, !1);
  const i = () => $(q, "$component", m), l = () => $(w, "$builderStore", m), [m, S] = G(), { styleable: v, builderStore: w } = f("sdk"), q = f("component");
  let c = z(d, "embed", 8);
  D();
  var p = u(), A = _(p);
  {
    var B = (t) => {
      var e = L(), r = h(e);
      H(r, c), g(e), y(e, (n, a) => v?.(n, a), () => i().styles), o(t, e);
    }, C = (t) => {
      var e = u(), r = _(e);
      {
        var n = (a) => {
          var s = M(), E = h(s);
          J(E, {}), g(s), y(s, (K, P) => v?.(K, P), () => ({ ...i().styles, empty: !0 })), o(a, s);
        };
        b(
          r,
          (a) => {
            l(), I(() => l().inBuilder) && a(n);
          },
          !0
        );
      }
      o(t, e);
    };
    b(A, (t) => {
      c() ? t(B) : t(C, !1);
    });
  }
  o(x, p), F(), S();
}
export {
  Q as default
};
