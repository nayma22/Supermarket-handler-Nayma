import { g as O, p as g, h as x, l as w, i as _, j as t, k as Q, m as U, n as P, q as I, u as q, d as m, w as V, y as W, z as f, B as e, c as A, r as M, v as X, f as S, x as Y, s as Z, t as ee, b as te, E as ae, H as se } from "./index-quCB9sGT.js";
var oe = S('<div class="noRows svelte-b5lk4t"><i class="ri-list-check-2 svelte-b5lk4t"></i> </div>'), le = S('<div class="svelte-b5lk4t"><!></div>');
function ce(j, n) {
  O(n, !1);
  const z = () => Y(E, "$component", B), [B, C] = W(), c = f(), b = f();
  let l = g(n, "datasource", 8), u = g(n, "rowId", 8), D = g(n, "noRowMessage", 8);
  const E = x("component"), { styleable: F, API: H, Provider: N, ActionTypes: T } = x("sdk");
  let i = f(), v = f(!0), d = f(!1);
  const h = async (r, s) => {
    if (!r || !s) {
      e(i, void 0), e(d, !0), e(v, !1);
      return;
    }
    e(v, !0), e(d, !1);
    try {
      e(i, await H.fetchRow(r, s, !0)), e(d, t(i) == null);
    } catch {
      e(i, void 0), e(d, !0);
    } finally {
      e(v, !1);
    }
  };
  w(() => _(l()), () => {
    e(c, l().type === "table" ? l().tableId : l().id);
  }), w(() => (t(c), _(u())), () => {
    h(t(c), u());
  }), w(
    () => (t(c), _(u()), _(l())),
    () => {
      e(b, [
        {
          type: T.RefreshDatasource,
          callback: () => h(t(c), u()),
          metadata: { dataSource: l() }
        }
      ]);
    }
  ), Q(), U();
  var y = P(), $ = I(y);
  {
    var G = (r) => {
      var s = le(), k = A(s);
      {
        var J = (a) => {
          var o = oe(), p = Z(A(o), 1, !0);
          M(o), ee(() => te(p, D() ?? "No row found")), m(a, o);
        }, K = (a) => {
          {
            let o = se(() => t(i) ?? null);
            N(a, {
              get actions() {
                return t(b);
              },
              get data() {
                return t(o);
              },
              children: (p, re) => {
                var R = P(), L = I(R);
                ae(L, n, "default", {}, null), m(p, R);
              },
              $$slots: { default: !0 }
            });
          }
        };
        q(k, (a) => {
          t(d) ? a(J) : a(K, !1);
        });
      }
      M(s), X(s, (a, o) => F?.(a, o), () => z().styles), m(r, s);
    };
    q($, (r) => {
      t(v) || r(G);
    });
  }
  m(j, y), V(), C();
}
export {
  ce as default
};
