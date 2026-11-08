import { g as B, p as r, h as H, l as I, k as P, m as D, n as E, q as G, u as K, d as m, B as c, j as e, w as L, x as M, y as Q, z as f, c as R, A as n, r as U, t as W, at as X, f as Y, H as Z } from "./index-quCB9sGT.js";
import { T as $ } from "./TextArea-Dujoz1vW.js";
import { F as ee } from "./Field-Dj4x-6nw.js";
var te = Y("<div><!></div>");
function ne(_, l) {
  B(l, !1);
  const g = () => M(C, "$component", v), [v, y] = Q(), h = f();
  let b = r(l, "field", 8), x = r(l, "label", 8), S = r(l, "placeholder", 8), V = r(l, "disabled", 8, !1), A = r(l, "readonly", 8, !1), T = r(l, "defaultValue", 8, ""), p = r(l, "onChange", 8), j = r(l, "helpText", 8, null);
  const C = H("component"), J = [
    {
      constraint: "json",
      type: "json",
      error: "JSON syntax is invalid"
    }
  ];
  let t = f(), i = f();
  const N = (a) => JSON.stringify(a || void 0, null, 4) || "", O = (a) => {
    try {
      return JSON.parse(a);
    } catch {
      return a;
    }
  }, k = (a) => {
    const s = O(a.detail), d = e(i).setValue(s);
    p() && d && p()({ value: s });
  };
  I(() => g(), () => {
    c(h, g().styles?.normal?.height || "124px");
  }), P(), D(), ee(_, {
    get label() {
      return x();
    },
    get field() {
      return b();
    },
    get disabled() {
      return V();
    },
    get readonly() {
      return A();
    },
    get validation() {
      return J;
    },
    get defaultValue() {
      return T();
    },
    get helpText() {
      return j();
    },
    type: "json",
    get fieldState() {
      return e(t);
    },
    set fieldState(a) {
      c(t, a);
    },
    get fieldApi() {
      return e(i);
    },
    set fieldApi(a) {
      c(i, a);
    },
    children: (a, s) => {
      var d = E(), F = G(d);
      {
        var q = (u) => {
          var o = te(), w = R(o);
          {
            let z = Z(() => (e(t), n(() => N(e(t).value))));
            $(w, {
              get value() {
                return e(z);
              },
              get disabled() {
                return e(t), n(() => e(t).disabled);
              },
              get readonly() {
                return e(t), n(() => e(t).readonly);
              },
              get error() {
                return e(t), n(() => e(t).error);
              },
              get id() {
                return e(t), n(() => e(t).fieldId);
              },
              get placeholder() {
                return S();
              },
              $$events: { change: k }
            });
          }
          U(o), W(() => X(o, `--height: ${e(h) ?? ""};`)), m(u, o);
        };
        K(F, (u) => {
          e(t) && u(q);
        });
      }
      m(a, d);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), L(), y();
}
export {
  ne as default
};
