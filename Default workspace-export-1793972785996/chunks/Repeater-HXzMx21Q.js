import { g as W, h as b, p as t, l as y, i as R, k as X, m as Y, n as c, q as d, u as m, d as n, w as Z, y as $, A as p, j as a, x as ee, z as C, B as q, T as te, E as ae, H as se, U as re, s as oe, c as ne, r as le, t as ie, b as ce, f as de } from "./index-quCB9sGT.js";
import fe from "./Placeholder-DUu9yTu1.js";
import ge from "./Container-BSV9mSav.js";
var ve = de('<div class="noRows svelte-1kdie20"><i class="ri-list-check-2 svelte-1kdie20"></i> </div>');
function ke(M, e) {
  W(e, !1);
  const h = () => ee(H, "$component", j), [j, z] = $(), f = C(), k = C(), { Provider: B, ContextScopes: E } = b("sdk"), H = b("component");
  let g = t(e, "dataProvider", 8), x = t(e, "noRowsMessage", 8), L = t(e, "direction", 8), S = t(e, "hAlign", 8), T = t(e, "vAlign", 8), U = t(e, "gap", 8), D = t(e, "scope", 24, () => E.Local);
  y(() => R(g()), () => {
    q(f, g()?.rows ?? []);
  }), y(() => R(g()), () => {
    q(k, g()?.loaded ?? !0);
  }), X(), Y(), ge(M, {
    get direction() {
      return L();
    },
    get hAlign() {
      return S();
    },
    get vAlign() {
      return T();
    },
    get gap() {
      return U();
    },
    wrap: !0,
    children: (F, ue) => {
      var A = c(), G = d(A);
      {
        var I = (s) => {
          fe(s, {});
        }, J = (s) => {
          var w = c(), K = d(w);
          {
            var N = (r) => {
              var l = c(), v = d(l);
              te(v, 1, () => a(f), re, (u, o, i) => {
                {
                  let _ = se(() => (a(o), p(() => ({ ...a(o), index: i }))));
                  B(u, {
                    get data() {
                      return a(_);
                    },
                    get scope() {
                      return D();
                    },
                    children: (Q, _e) => {
                      var P = c(), V = d(P);
                      ae(V, e, "default", {}, null), n(Q, P);
                    },
                    $$slots: { default: !0 }
                  });
                }
              }), n(r, l);
            }, O = (r) => {
              var l = c(), v = d(l);
              {
                var u = (o) => {
                  var i = ve(), _ = oe(ne(i), 1, !0);
                  le(i), ie(() => ce(_, x())), n(o, i);
                };
                m(
                  v,
                  (o) => {
                    a(k) && x() && o(u);
                  },
                  !0
                );
              }
              n(r, l);
            };
            m(
              K,
              (r) => {
                a(f), p(() => a(f).length > 0) ? r(N) : r(O, !1);
              },
              !0
            );
          }
          n(s, w);
        };
        m(G, (s) => {
          h(), p(() => h().empty) ? s(I) : s(J, !1);
        });
      }
      n(F, A);
    },
    $$slots: { default: !0 }
  }), Z(), z();
}
export {
  ke as default
};
