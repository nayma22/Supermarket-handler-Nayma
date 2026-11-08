import { g as j, p as t, m as w, n as z, q as B, u as H, d as P, B as o, j as l, w as D, z as c, H as E, d2 as G, A as r } from "./index-quCB9sGT.js";
import { F as J } from "./Field-Dj4x-6nw.js";
function N(h, e) {
  j(e, !1);
  let m = t(e, "field", 8), v = t(e, "label", 8), b = t(e, "placeholder", 8), g = t(e, "type", 8, "text"), y = t(e, "disabled", 8, !1), p = t(e, "readonly", 8, !1), x = t(e, "validation", 8), _ = t(e, "defaultValue", 8, ""), A = t(e, "align", 8), s = t(e, "onChange", 8), C = t(e, "runOnInput", 8, !1), F = t(e, "span", 8), I = t(e, "helpText", 8, null), S = t(e, "autocomplete", 8), a = c(), u = c();
  const T = (n) => {
    l(u).setValue(n.detail) && s()?.({ value: n.detail });
  }, V = (n) => {
    s()?.({ value: n.target.value });
  };
  w();
  {
    let n = E(() => g() === "number" ? "number" : "string");
    J(h, {
      get label() {
        return v();
      },
      get field() {
        return m();
      },
      get disabled() {
        return y();
      },
      get readonly() {
        return p();
      },
      get validation() {
        return x();
      },
      get defaultValue() {
        return _();
      },
      get span() {
        return F();
      },
      get helpText() {
        return I();
      },
      get type() {
        return l(n);
      },
      get fieldState() {
        return l(a);
      },
      set fieldState(d) {
        o(a, d);
      },
      get fieldApi() {
        return l(u);
      },
      set fieldApi(d) {
        o(u, d);
      },
      children: (d, K) => {
        var f = z(), O = B(f);
        {
          var k = (i) => {
            G(i, {
              updateOnChange: !1,
              get value() {
                return l(a), r(() => l(a).value);
              },
              get disabled() {
                return l(a), r(() => l(a).disabled);
              },
              get readonly() {
                return l(a), r(() => l(a).readonly);
              },
              get id() {
                return l(a), r(() => l(a).fieldId);
              },
              get placeholder() {
                return b();
              },
              get type() {
                return g();
              },
              get align() {
                return A();
              },
              get autocomplete() {
                return S();
              },
              $$events: {
                change: T,
                input(...q) {
                  (C() ? V : void 0)?.apply(this, q);
                }
              }
            });
          };
          H(O, (i) => {
            l(a) && i(k);
          });
        }
        P(d, f);
      },
      $$slots: { default: !0 },
      $$legacy: !0
    });
  }
  D();
}
export {
  N as default
};
