import { g as V, h as O, p as h, l as _, i as y, j as e, k as W, m as X, n as Z, q as ee, u as P, d as q, w as se, x as g, y as te, z as S, A as H, B as k, Y as ae, av as ne, c as p, r as $, s as oe, E as le, v as ie, t as de, a as ce, I as re, f as ve, H as me } from "./index-quCB9sGT.js";
var ue = ve('<div><div class="modal-header svelte-hh44mt"><!></div> <div class="modal-main svelte-hh44mt"><div class="modal-main-inner svelte-hh44mt"><!></div></div></div>');
function _e(j, t) {
  V(t, !1);
  const a = () => g(F, "$builderStore", r), s = () => g(E, "$component", r), n = () => g(m, "$modalStore", r), x = () => g(G, "$dndIsDragging", r), [r, A] = te(), o = S(), v = S(), E = O("component"), { styleable: Y, modalStore: m, builderStore: F, dndIsDragging: G } = O("sdk");
  let z = h(t, "onClose", 8), u = h(t, "ignoreClicksOutside", 8), I = h(t, "hideCloseIcon", 8), J = h(t, "size", 8), f = S();
  const B = async () => {
    z() && await z()(), m.actions.close();
  }, K = (l, i) => {
    i && (l ? i.show() : i.hide());
  };
  _(
    () => (a(), s(), n(), x()),
    () => {
      a().inBuilder && (s().inSelectedPath && n().contentId !== s().id ? m.actions.open(s().id) : !s().inSelectedPath && n().contentId === s().id && !x() && m.actions.close());
    }
  ), _(() => (n(), s()), () => {
    k(o, n().contentId === s().id);
  }), _(
    () => (y(I()), y(u())),
    () => {
      k(v, I() === void 0 ? !!u() : I());
    }
  ), _(() => (e(o), e(f)), () => {
    K(e(o), e(f));
  }), W(), X();
  var w = Z(), L = ee(w);
  {
    var N = (l) => {
      {
        let i = me(() => (a(), y(u()), e(v), H(() => a().inBuilder || u() || e(v))));
        ae(
          ne(l, {
            get disableCancel() {
              return e(i);
            },
            zIndex: 2,
            $$events: { cancel: B },
            children: (b, fe) => {
              var d = ue(), C = p(d), Q = p(C);
              {
                var R = (c) => {
                  re(c, {
                    color: "var(--spectrum-global-color-gray-800)",
                    name: "x",
                    hoverable: !0,
                    $$events: { click: B }
                  });
                };
                P(Q, (c) => {
                  e(v) || c(R);
                });
              }
              $(C);
              var D = oe(C, 2), M = p(D), T = p(M);
              le(T, t, "default", {}, null), $(M), $(D), $(d), ie(d, (c, U) => Y?.(c, U), () => s().styles), de(() => ce(d, 1, `modal-content ${J()}`, "svelte-hh44mt")), q(b, d);
            },
            $$slots: { default: !0 },
            $$legacy: !0
          }),
          (b) => k(f, b),
          () => e(f)
        );
      }
    };
    P(L, (l) => {
      a(), e(o), H(() => !a().inBuilder || e(o)) && l(N);
    });
  }
  q(j, w), se(), A();
}
export {
  _e as default
};
