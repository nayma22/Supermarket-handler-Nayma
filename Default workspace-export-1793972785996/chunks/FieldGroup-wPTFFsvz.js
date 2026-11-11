import { g as A, p as m, h as p, _ as E, m as G, u as S, v as j, t as z, a as B, d as n, w as D, y as H, c as d, f as I, r as u, x as J, n as f, q as _, E as b } from "./index-quCB9sGT.js";
import K from "./Section-BjkEeJ0I.js";
var L = I('<div class="wrapper svelte-penoqt"><div><!></div></div>');
function O(g, s) {
  A(s, !1);
  const h = () => J(P, "$component", y), [y, x] = H();
  let o = m(s, "labelPosition", 8, "above"), r = m(s, "type", 8, "oneColumn");
  const { styleable: C } = p("sdk"), P = p("component");
  E("field-group", { labelPosition: o() }), G();
  var a = L(), l = d(a);
  let i;
  var q = d(l);
  {
    var F = (e) => {
      K(e, {
        get type() {
          return r();
        },
        children: (t, c) => {
          var v = f(), w = _(v);
          b(w, s, "default", {}, null), n(t, v);
        },
        $$slots: { default: !0 }
      });
    }, k = (e) => {
      var t = f(), c = _(t);
      b(c, s, "default", {}, null), n(e, t);
    };
    S(q, (e) => {
      o() === "above" && r() !== "oneColumn" ? e(F) : e(k, !1);
    });
  }
  u(l), u(a), j(a, (e, t) => C?.(e, t), () => h().styles), z((e) => i = B(l, 1, "spectrum-Form svelte-penoqt", null, i, e), [
    () => ({ "spectrum-Form--labelsAbove": o() === "above" })
  ]), n(g, a), D(), x();
}
export {
  O as default
};
