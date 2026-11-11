import { bL as w, g as B, p as a, b5 as D, l as i, i as n, k as h, m as E, cx as F, Z as V, j as o, w as I, z as f, B as c } from "./index-quCB9sGT.js";
import U from "./RelationshipField-DkKlrnGU.js";
import { c as x, g as d } from "./users-BbsM5o3P.js";
function j(p, t) {
  const s = w(t, ["children", "$$slots", "$$events", "$$legacy"]);
  B(t, !1);
  const r = f(), l = f();
  let u = a(t, "defaultValue", 8), m = a(t, "type", 24, () => D.BB_REFERENCE), _ = a(t, "multi", 24, () => {
  }), y = a(t, "defaultRows", 24, () => []);
  function g(e) {
    return Array.isArray(e) ? e.map((b) => d(b)) : d(e);
  }
  function R(e) {
    return x(e) ? g(e) : e;
  }
  i(() => n(u()), () => {
    c(r, R(u()));
  }), i(() => n(s), () => {
    c(l, s);
  }), h(), E(), U(p, F(() => o(l), {
    get type() {
      return m();
    },
    datasourceType: "user",
    primaryDisplay: "email",
    get defaultValue() {
      return o(r);
    },
    get defaultRows() {
      return y();
    },
    get multi() {
      return _();
    },
    $$events: {
      rows(e) {
        V.call(this, t, e);
      }
    }
  })), I();
}
export {
  j as default
};
