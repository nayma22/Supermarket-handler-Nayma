import { p as i, c as y, I as K, r as b, s as G, t as he, a as V, b as Pe, e as W, d as k, f as R, g as _e, h as X, o as ye, l as v, i as l, j as e, k as be, m as xe, n as Ne, q as Y, u as Z, v as Ae, w as ke, x as U, y as Ee, z as f, A as _, B as g, C as Oe, D as De, P as Be, E as qe, L as $, F as Ce, G as Re, H as Se } from "./index-quCB9sGT.js";
import { c as je } from "./autoRefresh-DITnPTDZ.js";
var Te = R('<nav class="spectrum-Pagination spectrum-Pagination--explicit"><div><!></div> <span class="spectrum-Body--secondary spectrum-Pagination-counter svelte-1hbel5n"> </span> <div><!></div></nav>');
function we(F, n) {
  let t = i(n, "page", 8), E = i(n, "goToPrevPage", 8), O = i(n, "goToNextPage", 8), m = i(n, "hasPrevPage", 8, !0), S = i(n, "hasNextPage", 8, !0);
  var p = Te(), c = y(p);
  let r;
  var D = y(c);
  K(D, { name: "caret-left", size: "M" }), b(c);
  var h = G(c, 2), j = y(h);
  b(h);
  var P = G(h, 2);
  let u;
  var T = y(P);
  K(T, { name: "caret-right", size: "M" }), b(P), b(p), he(
    (d, B) => {
      r = V(c, 1, "spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet spectrum-Pagination-prevButton svelte-1hbel5n", null, r, d), Pe(j, `Page ${t() ?? ""}`), u = V(P, 1, "spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet spectrum-Pagination-nextButton svelte-1hbel5n", null, u, B);
    },
    [
      () => ({ "is-disabled": !m() }),
      () => ({ "is-disabled": !S() })
    ]
  ), W("click", c, function(...d) {
    (m() ? E() : null)?.apply(this, d);
  }), W("click", P, function(...d) {
    (S() ? O() : null)?.apply(this, d);
  }), k(F, p);
}
var ze = R('<div class="loading svelte-1o2jk3v"><!></div>'), Qe = R('<div class="pagination svelte-1o2jk3v"><!></div>'), Fe = R("<!> <!>", 1), Ie = R('<div class="container svelte-1o2jk3v"><!></div>');
function Ue(F, n) {
  _e(n, !1);
  const t = () => U(e(r), "$fetch", m), E = () => U(se, "$builderStore", m), O = () => U(re, "$component", m), [m, S] = Ee(), p = f(), c = f(), r = f(), D = f(), h = f(), j = f(), P = f();
  let u = i(n, "dataSource", 8), T = i(n, "filter", 8), d = i(n, "sortColumn", 8), B = i(n, "sortOrder", 8), q = i(n, "limit", 8), C = i(n, "paginate", 8), H = i(n, "autoRefresh", 8);
  const { styleable: ee, Provider: te, ActionTypes: w, API: ae, builderStore: se } = X("sdk"), re = X("component"), J = je();
  let x = f({});
  const ne = (a) => Re({
    API: ae,
    datasource: a,
    options: {
      query: e(c),
      sortColumn: d(),
      sortOrder: B(),
      limit: q(),
      paginate: C()
    }
  }), oe = (a) => {
    if (!a)
      return a;
    let s = { ...a };
    return Object.entries(s).forEach(([o, I]) => {
      I.visible === !1 && delete s[o];
    }), s;
  }, ie = (a, s) => {
    !a || !s || g(x, { ...e(x), [a]: s });
  }, le = (a) => {
    if (!a)
      return;
    const s = { ...e(x) };
    delete s[a], g(x, s);
  }, ce = (a, s) => {
    if (!Object.keys(s).length)
      return a;
    const o = {
      [$.AND]: {
        conditions: [
          ...a ? [a] : [],
          ...Object.values(s || {})
        ]
      },
      onEmptyFilter: Ce.RETURN_NONE
    };
    return (o[$.AND]?.conditions?.length ?? 0) > 0 ? o : {};
  };
  ye(() => {
    J.clear();
  }), v(() => l(T()), () => {
    g(p, Oe(T()));
  }), v(() => (e(p), e(x)), () => {
    g(c, ce(e(p), e(x)));
  }), v(() => l(u()), () => {
    De(g(r, ne(u())), "$fetch", m);
  }), v(
    () => (e(r), e(c), l(d()), l(B()), l(q()), l(C())),
    () => {
      e(r).update({
        query: e(c),
        sortColumn: d(),
        sortOrder: B(),
        limit: q(),
        paginate: C()
      });
    }
  ), v(() => t(), () => {
    g(D, oe(t().schema));
  }), v(() => E(), () => {
    g(h, !E().inBuilder || !E().selectedComponentId);
  }), v(
    () => (e(h), l(H()), e(r)),
    () => {
      J.setUp(e(h) ? H() : null, e(r).refresh);
    }
  ), v(() => (e(r), l(u())), () => {
    g(j, [
      {
        type: w.RefreshDatasource,
        callback: () => e(r).refresh(),
        metadata: { dataSource: u() }
      },
      {
        type: w.AddDataProviderQueryExtension,
        callback: ie
      },
      {
        type: w.RemoveDataProviderQueryExtension,
        callback: le
      },
      {
        type: w.SetDataProviderSorting,
        callback: ({ column: a, order: s }) => {
          let o = {};
          a && (o.sortColumn = a), s && (o.sortOrder = s), Object.keys(o)?.length && e(r).update(o);
        }
      }
    ]);
  }), v(
    () => (t(), l(u()), e(D), O(), l(q())),
    () => {
      g(P, {
        rows: t().rows,
        info: t().info,
        datasource: u() || {},
        schema: e(D),
        rowsLength: t().rows.length,
        pageNumber: t().pageNumber + 1,
        id: O()?.id,
        state: { query: t().query },
        limit: q(),
        primaryDisplay: t().definition?.primaryDisplay,
        loaded: t().loaded
      });
    }
  ), be(), xe();
  var z = Ie(), ue = y(z);
  te(ue, {
    get actions() {
      return e(j);
    },
    get data() {
      return e(P);
    },
    children: (a, s) => {
      var o = Ne(), I = Y(o);
      {
        var de = (N) => {
          var A = ze(), Q = y(A);
          Be(Q, {}), b(A), k(N, A);
        }, ve = (N) => {
          var A = Fe(), Q = Y(A);
          qe(Q, n, "default", {}, null);
          var ge = G(Q, 2);
          {
            var fe = (M) => {
              var L = Qe(), me = y(L);
              {
                let pe = Se(() => (t(), _(() => t().pageNumber + 1)));
                we(me, {
                  get page() {
                    return e(pe);
                  },
                  get hasPrevPage() {
                    return t(), _(() => t().hasPrevPage);
                  },
                  get hasNextPage() {
                    return t(), _(() => t().hasNextPage);
                  },
                  get goToPrevPage() {
                    return e(r), _(() => e(r).prevPage);
                  },
                  get goToNextPage() {
                    return e(r), _(() => e(r).nextPage);
                  }
                });
              }
              b(L), k(M, L);
            };
            Z(ge, (M) => {
              l(C()), t(), _(() => C() && t().supportsPagination) && M(fe);
            });
          }
          k(N, A);
        };
        Z(I, (N) => {
          t(), _(() => !t().loaded) ? N(de) : N(ve, !1);
        });
      }
      k(a, o);
    },
    $$slots: { default: !0 }
  }), b(z), Ae(z, (a, s) => ee?.(a, s), () => O().styles), k(F, z), ke(), S();
}
export {
  Ue as default
};
