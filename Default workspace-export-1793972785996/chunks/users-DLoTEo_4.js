import { g as P, p as t, ag as D, a0 as _, m as w, ch as x, w as O } from "./index-quCB9sGT.js";
import { D as z } from "./DatePicker-D06Pmr3Y.js";
function F(o, e) {
  P(e, !1);
  let r = t(e, "value", 12, null), a = t(e, "label", 24, () => {
  }), n = t(e, "labelPosition", 8, "above"), l = t(e, "disabled", 8, !1), d = t(e, "readonly", 8, !1), s = t(e, "error", 24, () => {
  }), u = t(e, "enableTime", 8, !0), c = t(e, "timeOnly", 8, !1), g = t(e, "setTimeTo", 24, () => {
  }), f = t(e, "placeholder", 8, null), m = t(e, "appendTo", 24, () => {
  }), h = t(e, "ignoreTimezones", 8, !1), T = t(e, "helpText", 24, () => {
  }), b = t(e, "calendarLabels", 24, () => D("calendar"));
  const v = _(), y = (i) => {
    r(i.detail), v("change", i.detail);
  };
  w(), x(o, {
    get helpText() {
      return T();
    },
    get label() {
      return a();
    },
    get labelPosition() {
      return n();
    },
    get error() {
      return s();
    },
    children: (i, L) => {
      z(i, {
        get error() {
          return s();
        },
        get disabled() {
          return l();
        },
        get readonly() {
          return d();
        },
        get value() {
          return r();
        },
        get placeholder() {
          return f();
        },
        get enableTime() {
          return u();
        },
        get timeOnly() {
          return c();
        },
        get setTimeTo() {
          return g();
        },
        get appendTo() {
          return m();
        },
        get ignoreTimezones() {
          return h();
        },
        get calendarLabels() {
          return b();
        },
        $$events: { change: y }
      });
    },
    $$slots: { default: !0 }
  }), O();
}
const U = async (o, e) => {
  const r = Array.from(new Set(e.filter(Boolean))), a = {};
  if (!r.length)
    return a;
  try {
    const n = await o.searchUsers({
      query: { oneOf: { _id: r } },
      limit: r.length
    });
    for (const l of n?.data || [])
      l?._id && (a[l._id] = l);
    for (const l of r)
      a[l] || (a[l] = { _id: l, email: l });
  } catch (n) {
    console.error("Failed to load users by id", n);
  }
  return a;
};
export {
  F as D,
  U as f
};
