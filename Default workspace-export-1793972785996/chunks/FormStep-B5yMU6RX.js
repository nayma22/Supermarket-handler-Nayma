import { g as L, p as M, h as f, aa as N, _ as O, l as r, i as h, k as Q, m as R, n as $, q as x, u as y, d as l, w as T, x as n, j as C, y as U, z as k, D as V, B as w, c as W, E as X, r as Y, v as Z, f as ee } from "./index-quCB9sGT.js";
import te from "./Placeholder-DUu9yTu1.js";
var oe = ee("<div><!></div>");
function re(B, c) {
  L(c, !1);
  const i = () => n(C(_), "$formState", o), d = () => n(j, "$builderStore", o), u = () => n(q, "$componentStore", o), m = () => n(z, "$component", o), [o, F] = U(), _ = k(), S = k();
  let e = M(c, "step", 8, 1);
  const { styleable: P, builderStore: j, componentStore: q } = f("sdk"), z = f("component"), s = f("form"), v = N(e() || 1);
  O("form-step", v), r(() => h(e()), () => {
    v.set(e() || 1);
  }), r(() => {
  }, () => {
    V(w(_, s?.formState), "$formState", o);
  }), r(() => i(), () => {
    w(S, i()?.currentStep);
  }), r(
    () => (d(), u(), m(), h(e())),
    () => {
      s && d().inBuilder && u().selectedComponentPath?.includes(m().id) && s.formApi.setStep(e());
    }
  ), Q(), R();
  var b = $(), A = x(b);
  {
    var D = (t) => {
      te(t, { text: "Form steps need to be wrapped in a form" });
    }, E = (t) => {
      var g = $(), G = x(g);
      {
        var H = (p) => {
          var a = oe(), I = W(a);
          X(I, c, "default", {}, null), Y(a), Z(a, (J, K) => P?.(J, K), () => m().styles), l(p, a);
        };
        y(
          G,
          (p) => {
            e() === C(S) && p(H);
          },
          !0
        );
      }
      l(t, g);
    };
    y(A, (t) => {
      s ? t(E, !1) : t(D);
    });
  }
  l(B, b), T(), F();
}
export {
  re as default
};
