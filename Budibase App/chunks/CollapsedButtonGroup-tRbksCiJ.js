import { p as r, q as _, aG as Y, a4 as x, a5 as $, t as b, b as k, d as u, j as t, Z as i, B as q, s as Z, Y as D, a8 as E, n as F, T as J, U as K, z as y, H as z, f as L, A as f } from "./index-quCB9sGT.js";
import { M as N, I as O } from "./Item-ymok-NiS.js";
var Q = L("<!> <!>", 1);
function X(P, a) {
  let w = r(a, "buttons", 8), B = r(a, "text", 8, "Action"), C = r(a, "size", 8, "M"), A = r(a, "align", 8, "left"), M = r(a, "offset", 24, () => {
  }), G = r(a, "animate", 24, () => {
  }), o = r(a, "quiet", 8, !1), d = y(), c = y();
  const I = async (e) => {
    t(c)?.hide(), await e.onClick?.();
  };
  var g = Q(), m = _(g);
  {
    let e = z(() => !o()), v = z(() => !o());
    Y(m, {
      get size() {
        return C();
      },
      icon: "caret-down",
      get quiet() {
        return o();
      },
      get primary() {
        return o();
      },
      get cta() {
        return t(e);
      },
      get newStyles() {
        return t(v);
      },
      reverse: !0,
      get ref() {
        return t(d);
      },
      set ref(s) {
        q(d, s);
      },
      $$events: {
        click: [
          () => t(c)?.show(),
          function(s) {
            i.call(this, a, s);
          }
        ]
      },
      children: (s, H) => {
        x();
        var n = $();
        b(() => k(n, B() || "Action")), u(s, n);
      },
      $$slots: { default: !0 },
      $$legacy: !0
    });
  }
  var j = Z(m, 2);
  D(
    E(j, {
      get align() {
        return A();
      },
      get anchor() {
        return t(d);
      },
      get offset() {
        return M();
      },
      get animate() {
        return G();
      },
      resizable: !1,
      $$events: {
        close(e) {
          i.call(this, a, e);
        },
        open(e) {
          i.call(this, a, e);
        },
        mouseenter(e) {
          i.call(this, a, e);
        },
        mouseleave(e) {
          i.call(this, a, e);
        }
      },
      children: (e, v) => {
        N(e, {
          children: (s, H) => {
            var n = F(), S = _(n);
            J(S, 1, w, K, (T, l) => {
              O(T, {
                get icon() {
                  return t(l), f(() => t(l).icon);
                },
                get disabled() {
                  return t(l), f(() => t(l).disabled);
                },
                $$events: { click: () => I(t(l)) },
                children: (U, R) => {
                  x();
                  var h = $();
                  b(() => k(h, (t(l), f(() => t(l).text || "Button")))), u(U, h);
                },
                $$slots: { default: !0 }
              });
            }), u(s, n);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 },
      $$legacy: !0
    }),
    (e) => q(c, e),
    () => t(c)
  ), u(P, g);
}
export {
  X as C
};
