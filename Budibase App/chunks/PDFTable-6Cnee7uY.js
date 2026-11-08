import { g as re, p as v, h as H, l as i, i as m, j as e, k as oe, m as ne, u as le, v as ie, t as A, at as ce, a as de, d as _, w as ve, x as J, y as me, z as u, c as O, f as x, r as C, B as f, C as ue, D as fe, dd as _e, q as K, T as F, b as L, A as k, U as P, s as ye, n as he, G as pe } from "./index-quCB9sGT.js";
var be = x('<div class="cell header svelte-mdsd2n"> </div>'), ge = x('<div class="cell svelte-mdsd2n"> </div>'), Oe = x("<!> <!>", 1), Ce = x('<div class="vars svelte-mdsd2n"><div><!></div></div>');
function xe(M, l) {
  re(l, !1);
  const c = () => J(e(h), "$fetch", j), S = () => J(W, "$component", j), [j, V] = me(), y = u(), h = u(), s = u(), R = u(), T = u(), B = u();
  let E = v(l, "datasource", 8), G = v(l, "filter", 24, () => {
  }), w = v(l, "sortColumn", 24, () => {
  }), N = v(l, "sortOrder", 24, () => {
  }), I = v(l, "columns", 24, () => {
  }), q = v(l, "limit", 8, 20);
  const W = H("component"), { styleable: X, API: Y } = H("sdk"), Z = (t) => pe({
    API: Y,
    datasource: t,
    options: {
      query: e(y),
      sortColumn: w(),
      sortOrder: N(),
      limit: q(),
      paginate: !1
    }
  }), $ = (t, o) => {
    if (!t)
      return {};
    let r = {};
    Object.entries(t).forEach(([a, n]) => {
      n.visible !== !1 && (r[a] = { ...n, displayName: a });
    }), o?.length || (o = Object.values(r).slice(0, 3));
    let g = {};
    for (let a of o)
      r[a.name] && (g[a.name] = {
        ...r[a.name],
        displayName: a.displayName || r[a.name].displayName
      });
    return r = g, r;
  };
  i(() => m(G()), () => {
    f(y, ue(G()));
  }), i(() => m(E()), () => {
    fe(f(h, Z(E())), "$fetch", j);
  }), i(
    () => (e(h), e(y), m(w()), m(N()), m(q())),
    () => {
      e(h).update({
        query: e(y),
        sortColumn: w(),
        sortOrder: N(),
        limit: q()
      });
    }
  ), i(() => (c(), m(I())), () => {
    f(s, $(c().schema, I()));
  }), i(() => e(s), () => {
    f(R, Object.keys(e(s)).length);
  }), i(() => c(), () => {
    f(T, c().rows?.length || 0);
  }), i(() => (c(), e(s)), () => {
    f(B, (c()?.rows || []).map((t) => _e(t, e(s))));
  }), oe(), ne();
  var p = Ce(), b = O(p);
  let Q;
  var ee = O(b);
  {
    var te = (t) => {
      var o = Oe(), r = K(o);
      F(r, 1, () => (e(s), k(() => Object.keys(e(s)))), P, (a, n) => {
        var d = be(), z = O(d, !0);
        C(d), A(() => L(z, (e(s), e(n), k(() => e(s)[e(n)].displayName)))), _(a, d);
      });
      var g = ye(r, 2);
      F(g, 1, () => e(B), P, (a, n) => {
        var d = he(), z = K(d);
        F(z, 1, () => (e(s), k(() => Object.keys(e(s)))), P, (se, U) => {
          var D = ge(), ae = O(D, !0);
          C(D), A(() => L(ae, (e(n), e(U), k(() => e(n)[e(U)])))), _(se, D);
        }), _(a, d);
      }), _(t, o);
    };
    le(ee, (t) => {
      e(s) && t(te);
    });
  }
  C(b), ie(b, (t, o) => X?.(t, o), () => S().styles), C(p), A(
    (t) => {
      ce(p, `--cols:${e(R) ?? ""}; --rows:${e(T) ?? ""};`), Q = de(b, 1, "table svelte-mdsd2n", null, Q, t);
    },
    [() => ({ valid: !!e(s) })]
  ), _(M, p), ve(), V();
}
export {
  xe as default
};
