import { g as S, p as l, m as p, n as q, q as w, u as B, d as j, B as o, j as e, w as H, z as c, H as I, i as L, A as d, d4 as P } from "./index-quCB9sGT.js";
import { F as D } from "./Field-Dj4x-6nw.js";
function K(h, a) {
  S(a, !1);
  let b = l(a, "field", 8), m = l(a, "label", 8), y = l(a, "text", 8), v = l(a, "disabled", 8, !1), x = l(a, "readonly", 8, !1), _ = l(a, "size", 8), C = l(a, "validation", 8), s = l(a, "defaultValue", 8), f = l(a, "onChange", 8), z = l(a, "span", 8), A = l(a, "helpText", 8, null), t = c(), i = c();
  const T = (r) => r ? r === !0 || typeof r == "string" && r.toLowerCase() === "true" : !1, V = (r) => {
    const n = e(i).setValue(r.detail);
    f() && n && f()({ value: r.detail });
  };
  p();
  {
    let r = I(() => (L(s()), d(() => T(s()))));
    D(h, {
      get label() {
        return m();
      },
      get field() {
        return b();
      },
      get disabled() {
        return v();
      },
      get readonly() {
        return x();
      },
      get validation() {
        return C();
      },
      get span() {
        return z();
      },
      get helpText() {
        return A();
      },
      get defaultValue() {
        return e(r);
      },
      type: "boolean",
      get fieldState() {
        return e(t);
      },
      set fieldState(n) {
        o(t, n);
      },
      get fieldApi() {
        return e(i);
      },
      set fieldApi(n) {
        o(i, n);
      },
      children: (n, E) => {
        var g = q(), k = w(g);
        {
          var F = (u) => {
            P(u, {
              get value() {
                return e(t), d(() => e(t).value);
              },
              get disabled() {
                return e(t), d(() => e(t).disabled);
              },
              get readonly() {
                return e(t), d(() => e(t).readonly);
              },
              get error() {
                return e(t), d(() => e(t).error);
              },
              get id() {
                return e(t), d(() => e(t).fieldId);
              },
              get size() {
                return _();
              },
              get text() {
                return y();
              },
              $$events: { change: V }
            });
          };
          B(k, (u) => {
            e(t) && u(F);
          });
        }
        j(n, g);
      },
      $$slots: { default: !0 },
      $$legacy: !0
    });
  }
  H();
}
export {
  K as default
};
