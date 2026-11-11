import { g as G, p as a, h as H, l as y, j as e, k as J, m as K, n as Q, q as R, u as U, d as X, B as o, i as Y, b5 as p, A as d, w as Z, x as $, y as ee, z as u, au as te, ag as ae } from "./index-quCB9sGT.js";
import { D as le } from "./DatePicker-D06Pmr3Y.js";
import { F as re } from "./Field-Dj4x-6nw.js";
function de(S, t) {
  G(t, !1);
  const m = () => $(L, "$appStore", _), [_, D] = ee(), f = u(), v = u();
  let O = a(t, "field", 24, () => {
  }), k = a(t, "label", 24, () => {
  }), A = a(t, "placeholder", 8, null), x = a(t, "disabled", 8, !1), V = a(t, "readonly", 8, !1), z = a(t, "enableTime", 8, !0), T = a(t, "timeOnly", 8, !1), C = a(t, "setTimeTo", 24, () => {
  }), F = a(t, "ignoreTimezones", 8, !1), I = a(t, "startDayOfWeek", 24, () => {
  }), W = a(t, "validation", 24, () => {
  }), w = a(t, "defaultValue", 24, () => {
  }), h = a(t, "onChange", 24, () => {
  }), M = a(t, "span", 8, 6), N = a(t, "helpText", 24, () => {
  }), E = a(t, "valueAsTimestamp", 8, !1), r = u(), g = u(), b = u();
  const { appStore: L } = H("sdk"), P = (l) => {
    let n = l.detail;
    T() && E() && (j(n) || (n = n ? q(n) : null));
    const i = e(g)?.setValue(n) ?? !1;
    h() && i && h()({ value: n });
  }, j = (l) => l !== null && !isNaN(new Date(l).valueOf()), q = (l) => {
    const [n, i] = l.split(":").map(Number), s = /* @__PURE__ */ new Date();
    return s.setHours(n), s.setMinutes(i), s.setSeconds(0), s.setMilliseconds(0), s.toISOString();
  };
  y(() => m(), () => {
    o(f, te(m().application?.translationOverrides));
  }), y(() => e(f), () => {
    o(v, ae("calendar", e(f)));
  }), J(), K(), re(S, {
    get label() {
      return k();
    },
    get field() {
      return O();
    },
    get disabled() {
      return x();
    },
    get readonly() {
      return V();
    },
    get validation() {
      return W();
    },
    get defaultValue() {
      return w();
    },
    get span() {
      return M();
    },
    get helpText() {
      return N();
    },
    get type() {
      return Y(p), d(() => p.DATETIME);
    },
    get fieldState() {
      return e(r);
    },
    set fieldState(l) {
      o(r, l);
    },
    get fieldApi() {
      return e(g);
    },
    set fieldApi(l) {
      o(g, l);
    },
    get fieldSchema() {
      return e(b);
    },
    set fieldSchema(l) {
      o(b, l);
    },
    children: (l, n) => {
      var i = Q(), s = R(i);
      {
        var B = (c) => {
          le(c, {
            get value() {
              return e(r), d(() => e(r).value);
            },
            get disabled() {
              return e(r), d(() => e(r).disabled);
            },
            get readonly() {
              return e(r), d(() => e(r).readonly);
            },
            get error() {
              return e(r), d(() => e(r).error);
            },
            get id() {
              return e(r), d(() => e(r).fieldId);
            },
            get enableTime() {
              return z();
            },
            get timeOnly() {
              return T();
            },
            get setTimeTo() {
              return C();
            },
            get ignoreTimezones() {
              return F();
            },
            get startDayOfWeek() {
              return I();
            },
            get placeholder() {
              return A();
            },
            get calendarLabels() {
              return e(v);
            },
            $$events: { change: P }
          });
        };
        U(s, (c) => {
          e(r) && c(B);
        });
      }
      X(l, i);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), Z(), D();
}
export {
  de as default
};
