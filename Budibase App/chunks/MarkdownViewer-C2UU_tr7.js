import { g as x, p as S, h as c, m as M, u as d, v as V, d as u, w as q, x as m, y as A, f as B, c as C, r as P, ce as j, n as z, q as D, A as E } from "./index-quCB9sGT.js";
import F from "./Placeholder-DUu9yTu1.js";
var G = B("<div><!></div>");
function J(p, o) {
  x(o, !1);
  const r = () => m(f, "$component", i), n = () => m(h, "$builderStore", i), [i, v] = A();
  let l = S(o, "value", 8);
  const f = c("component"), { builderStore: h, styleable: g } = c("sdk"), _ = r().styles?.normal?.height;
  M();
  var t = G(), b = C(t);
  {
    var k = (e) => {
      j(e, {
        get value() {
          return l();
        },
        get height() {
          return _;
        }
      });
    }, w = (e) => {
      var a = z(), y = D(a);
      {
        var $ = (s) => {
          F(s, {});
        };
        d(
          y,
          (s) => {
            n(), E(() => n().inBuilder) && s($);
          },
          !0
        );
      }
      u(e, a);
    };
    d(b, (e) => {
      l() ? e(k) : e(w, !1);
    });
  }
  P(t), V(t, (e, a) => g?.(e, a), () => r().styles), u(p, t), q(), v();
}
export {
  J as default
};
