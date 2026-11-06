import { g as F, h as g, p as S, X as G, j as r, l as H, k as I, m as J, E as K, u as L, Y as N, v as Q, t as z, d as f, w as V, y as Z, z as v, B as _, c as C, s as ee, f as $, r as O, i as w, A as k, a as x, x as M, n as te, q as se, T as ae, U as ne } from "./index-quCB9sGT.js";
import re from "./Placeholder-DUu9yTu1.js";
var oe = $("<div><!></div>"), le = $("<div><!> <!></div>");
function ue(j, o) {
  F(o, !1);
  const n = () => M(q, "$component", p), A = () => M(W, "$builderStore", p), [p, B] = Z(), b = v(), { styleable: R, builderStore: W } = g("sdk"), q = g("component");
  let s = S(o, "type", 8, "mainSidebar"), D = S(o, "minSize", 8, 250), l = {
    mainSidebar: 2,
    sidebarMain: 2,
    oneColumn: 1,
    twoColumns: 2,
    threeColumns: 3
  }, d = v(), u = v();
  const E = (e) => {
    const t = new ResizeObserver((i) => {
      if (!i?.[0])
        return;
      const m = i[0].target;
      _(u, m.clientWidth);
    });
    return t.observe(e), t;
  };
  function P(e) {
    const t = Math.floor(e / D()) || 100;
    if (l[s()] <= t)
      return !1;
    if (l[s()] > t)
      return t;
  }
  G(() => {
    let e = E(r(d));
    return () => {
      e.disconnect();
    };
  }), H(() => r(u), () => {
    _(b, P(r(u)));
  }), I(), J();
  var a = le(), h = C(a);
  K(h, o, "default", {}, null);
  var T = ee(h, 2);
  {
    var U = (e) => {
      var t = te(), i = se(t);
      ae(
        i,
        1,
        () => (w(s()), n(), k(() => new Array(l[s()] - n().children))),
        ne,
        (m, ie) => {
          var c = oe();
          let y;
          var X = C(c);
          re(X, {}), O(c), z((Y) => y = x(c, 1, "svelte-145y9cj", null, y, Y), [() => ({ placeholder: A().inBuilder })]), f(m, c);
        }
      ), f(e, t);
    };
    L(T, (e) => {
      w(s()), n(), k(() => l[s()] - n().children > 0) && e(U);
    });
  }
  O(a), N(a, (e) => _(d, e), () => r(d)), Q(a, (e, t) => R?.(e, t), () => n().styles), z(() => x(a, 1, `${s() ?? ""} columns-${r(b) ?? ""}`, "svelte-145y9cj")), f(j, a), V(), B();
}
export {
  ue as default
};
