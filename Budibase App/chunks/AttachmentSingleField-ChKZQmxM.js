import { bL as s, g as l, m as o, cx as d, i as c, b5 as a, A as m, w as A } from "./index-quCB9sGT.js";
import f from "./AttachmentField-DbcKQIT7.js";
function g(r, t) {
  const p = s(t, ["children", "$$slots", "$$events", "$$legacy"]), i = s(p, []);
  l(t, !1);
  const n = {
    get: (e) => (!Array.isArray(e) && e ? [e] : e) || [],
    set: (e) => e[0] || null
  };
  o(), f(r, d(() => i, {
    get type() {
      return c(a), m(() => a.ATTACHMENT_SINGLE);
    },
    maximum: 1,
    defaultValue: null,
    get fieldApiMapper() {
      return n;
    }
  })), A();
}
export {
  g as default
};
