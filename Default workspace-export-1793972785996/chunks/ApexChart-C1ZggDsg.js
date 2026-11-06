import { g as G, h as D, p as y, l as h, i as H, j as e, k as J, m as Q, n as R, q as M, aq as V, A as S, d as _, w as W, y as X, z as b, v as F, Y as Z, B as g, s as tt, u as et, t as at, a as st, c as ot, I as nt, a4 as rt, r as ct, f as q, x as T } from "./index-quCB9sGT.js";
const ut = {
  Default: (t) => t,
  Thousands: (t) => `${Math.round(t / 1e3)}K`,
  Millions: (t) => `${Math.round(t / 1e6)}M`,
  Datetime: (t) => new Date(t).toLocaleString()
}, pt = (t) => {
  if (t === "Custom")
    return null;
  const [c, o] = t.split(" ");
  return `palette${o}`;
}, C = (t) => {
  const c = ["string", "boolean", "number", "function", "symbol"];
  if (t === null)
    return null;
  if (t !== void 0) {
    if (c.includes(typeof t))
      return t;
    if (Array.isArray(t))
      return t.map((o) => C(o));
    if (typeof t == "object" && t.constructor.name === "Object") {
      const o = {};
      return Object.entries(t).forEach(([p, f]) => {
        o[p] = C(f);
      }), o;
    }
    throw `Unsupported value: "${t}" of type: "${typeof t}"`;
  }
};
var it = q('<div class="component-placeholder svelte-mbw0de"><!> Add rows to your data source to start using your component</div>'), lt = q("<div></div> <!>", 1);
function ft(t, c) {
  G(c, !1);
  const o = () => T(O, "$component", f), p = () => T(I, "$builderStore", f), [f, B] = X(), i = b(), { styleable: v, builderStore: I } = D("sdk"), O = D("component");
  let x = y(c, "options", 8), A = y(c, "hasClickAction", 8, !1), U = y(c, "fullCursor", 8, !1), s = b(), u = b(), m, w = null;
  const z = async (a) => {
    if (a?.xaxis?.type && a.xaxis.type !== w)
      await k(e(u));
    else {
      const n = a?.chart?.animations?.enabled ?? !0;
      await m?.updateOptions(a, !1, n);
    }
  }, k = async (a) => {
    if (a)
      try {
        await m?.destroy();
        const { default: n } = await import("./apexcharts.common-BZmmxB5Y.js").then((l) => l.a);
        m = new n(a, e(s)), w = e(s)?.xaxis?.type, await m.render();
      } catch (n) {
        if (n.message !== "Cannot read properties of undefined (reading 'parentNode')")
          throw n;
      }
  };
  h(() => H(x()), () => {
    const a = C(x());
    g(s, a && {
      ...a,
      chart: {
        ...a.chart,
        fontFamily: a.chart?.fontFamily || "var(--font-sans)"
      }
    });
  }), h(() => e(s), () => {
    g(i, e(s) == null || e(s)?.series?.length === 0);
  }), h(() => (e(u), e(i)), () => {
    k(e(u), e(i));
  }), h(() => e(s), () => {
    z(e(s));
  }), J(), Q();
  var $ = R(), E = M($);
  V(
    E,
    () => (e(s), S(() => e(s)?.customColor)),
    (a) => {
      var n = lt(), l = M(n);
      let j;
      F(l, (r, d) => v?.(r, d), () => o().styles), Z(l, (r) => g(u, r), () => e(u));
      var K = tt(l, 2);
      {
        var L = (r) => {
          var d = it(), N = ot(d);
          nt(N, {
            name: "warning",
            color: "var(--spectrum-global-color-static-red-600)"
          }), rt(), ct(d), F(d, (P, Y) => v?.(P, Y), () => ({
            ...o().styles,
            normal: {},
            custom: null,
            empty: !0
          })), _(r, d);
        };
        et(K, (r) => {
          p(), e(i), S(() => p().inBuilder && e(i)) && r(L);
        });
      }
      at((r) => j = st(l, 1, "svelte-mbw0de", null, j, r), [
        () => ({
          hide: e(i),
          hasClickAction: A(),
          hasClickActionFull: A() && U()
        })
      ]), _(a, n);
    }
  ), _(t, $), W(), B();
}
export {
  ft as A,
  ut as f,
  pt as p
};
