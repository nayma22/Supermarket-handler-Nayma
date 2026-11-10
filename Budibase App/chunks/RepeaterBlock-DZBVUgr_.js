import { g as W, p as t, h as i, m as X, R as Y, S as R, n as k, q as w, u as Z, d as C, B as $, j as o, H as S, $ as ee, w as te, y as ae, z as oe, aT as P, A as y, E as re, i as r, cA as B, x as se } from "./index-quCB9sGT.js";
import ne from "./Placeholder-DUu9yTu1.js";
function ue(b, e) {
  W(e, !1);
  const d = () => se(p, "$component", M), [M, O] = ae();
  let q = t(e, "dataSource", 8), D = t(e, "filter", 8), j = t(e, "sortColumn", 8), z = t(e, "sortOrder", 8), E = t(e, "limit", 8), G = t(e, "paginate", 8), c = t(e, "noRowsMessage", 8), u = t(e, "direction", 8), g = t(e, "hAlign", 8), m = t(e, "vAlign", 8), f = t(e, "gap", 8), H = t(e, "autoRefresh", 8);
  const p = i("component"), I = i("context"), { generateGoldenSample: T } = i("sdk");
  let s = oe();
  const v = () => {
    const n = P(I)[o(s)]?.rows || [], h = T(n);
    return { [`${P(p).id}-repeater`]: h };
  };
  var F = { getAdditionalDataContext: v };
  X(), Y(b, {
    children: (n, h) => {
      {
        let _ = S(() => ({
          dataSource: q(),
          filter: D(),
          sortColumn: j(),
          sortOrder: z(),
          limit: E(),
          paginate: G(),
          autoRefresh: H()
        }));
        R(n, {
          type: "dataprovider",
          context: "provider",
          get props() {
            return o(_);
          },
          get id() {
            return o(s);
          },
          set id(l) {
            $(s, l);
          },
          children: (l, le) => {
            var x = k(), K = w(x);
            {
              var L = (a) => {
                ne(a, {});
              }, N = (a) => {
                {
                  let Q = S(() => (r(B), o(s), r(c()), r(u()), r(g()), r(m()), r(f()), y(() => ({
                    dataProvider: `{{ literal ${B(o(s))} }}`,
                    noRowsMessage: c(),
                    direction: u(),
                    hAlign: g(),
                    vAlign: m(),
                    gap: f()
                  }))));
                  R(a, {
                    type: "repeater",
                    context: "repeater",
                    containsSlot: !0,
                    get props() {
                      return o(Q);
                    },
                    children: (U, ie) => {
                      var A = k(), V = w(A);
                      re(V, e, "default", {}, null), C(U, A);
                    },
                    $$slots: { default: !0 }
                  });
                }
              };
              Z(K, (a) => {
                d(), y(() => d().empty) ? a(L) : a(N, !1);
              });
            }
            C(l, x);
          },
          $$slots: { default: !0 },
          $$legacy: !0
        });
      }
    },
    $$slots: { default: !0 }
  }), ee(e, "getAdditionalDataContext", v);
  var J = te(F);
  return O(), J;
}
export {
  ue as default
};
