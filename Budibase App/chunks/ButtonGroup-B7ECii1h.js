import { J, K, M as N, N as O, O as Q, Q as R, g as F, p as l, h as m, l as I, i as k, k as L, m as V, R as W, S as B, n as x, q as A, u as X, d as y, j as n, H as h, w as Y, x as Z, y as $, T as tt, U as et, z as nt, B as st, A as it } from "./index-quCB9sGT.js";
import { C as ot } from "./CollapsedButtonGroup-tRbksCiJ.js";
let d;
const at = () => {
  if (d)
    return d;
  const e = J.actions.getComponentDefinition(
    "@budibase/standard-components/button"
  );
  if (!e)
    return d = {}, d;
  const t = K(e);
  let s = {};
  return t?.forEach((o) => {
    s[o.key] = o;
  }), d = s, d;
}, lt = (e) => {
  if (!e?.length)
    return { visible: !0, settingUpdates: {} };
  const t = O(e);
  let s = !t.find(
    (c) => c.action === "show"
  );
  const o = Q(t), a = R(o);
  return a.visible != null && (s = a.visible), { visible: s, settingUpdates: a.settingUpdates };
}, ct = (e, t, s, o) => {
  const a = e?._conditions || e?.conditions, c = N(
    {
      ...e,
      _conditions: a
    },
    t,
    o
  ), { visible: p, settingUpdates: f } = lt(
    c._conditions
  );
  if (!p)
    return null;
  const u = {
    ...c,
    ...f
  };
  return {
    ...u,
    onClick: async () => {
      await (typeof u.onClick == "function" ? u.onClick : s(e.onClick, t))?.();
    }
  };
}, rt = (e, t, s) => {
  if (!e?.length)
    return [];
  const o = at();
  return e.map(
    (a) => ct(
      a,
      t,
      s,
      o
    )
  ).filter(Boolean);
};
function ft(e, t) {
  F(t, !1);
  const s = () => Z(D, "$context", o), [o, a] = $(), c = nt();
  let p = l(t, "buttons", 24, () => []), f = l(t, "direction", 8, "row"), u = l(t, "hAlign", 8, "left"), v = l(t, "vAlign", 8, "top"), S = l(t, "gap", 8, "S"), _ = l(t, "collapsed", 8, !1), b = l(t, "collapsedText", 8, "Action"), w = l(t, "collapsedSize", 8, "M");
  const { enrichButtonActions: z } = m("sdk"), D = m("context");
  I(
    () => (k(_()), k(p()), s()),
    () => {
      st(c, _() ? rt(p(), s(), z) : null);
    }
  ), L(), V(), W(e, {
    children: (M, dt) => {
      {
        let U = h(() => ({
          direction: f(),
          hAlign: u(),
          vAlign: v(),
          gap: S(),
          wrap: !0
        }));
        B(M, {
          type: "container",
          get props() {
            return n(U);
          },
          styles: { normal: { height: "100%" } },
          children: (q, pt) => {
            var C = x(), P = A(C);
            {
              var T = (r) => {
                {
                  let g = h(() => b() || "Action");
                  ot(r, {
                    get text() {
                      return n(g);
                    },
                    get buttons() {
                      return n(c);
                    },
                    get size() {
                      return w();
                    }
                  });
                }
              }, E = (r) => {
                var g = x(), G = A(g);
                tt(G, 1, p, et, (j, i) => {
                  {
                    let H = h(() => (n(i), it(() => ({
                      text: n(i)?.text || "Button",
                      onClick: n(i)?.onClick,
                      type: n(i)?.type,
                      quiet: n(i)?.quiet,
                      disabled: n(i)?.disabled,
                      icon: n(i)?.icon,
                      gap: n(i)?.gap,
                      size: n(i)?.size || "M",
                      _conditions: n(i)?._conditions || n(i)?.conditions
                    }))));
                    B(j, {
                      type: "button",
                      get props() {
                        return n(H);
                      }
                    });
                  }
                }), y(r, g);
              };
              X(P, (r) => {
                _() ? r(T) : r(E, !1);
              });
            }
            y(q, C);
          },
          $$slots: { default: !0 }
        });
      }
    },
    $$slots: { default: !0 }
  }), Y(), a();
}
export {
  ft as default
};
