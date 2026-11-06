import { g as R, h as x, p as h, l as i, j as e, i as C, k as U, m as V, aq as W, v as q, t as X, a as Y, d as K, w as Z, x as b, y as ee, z as f, c as te, f as ne, r as se, n as oe, q as ie, E as ae, aS as le, aT as re, B as u } from "./index-quCB9sGT.js";
var ce = ne("<div><!></div>");
function fe(M, g) {
  R(g, !1);
  const n = () => b(A, "$component", k), m = () => b(G, "$builderStore", k), a = () => b(l, "$sidePanelStore", k), z = () => b(H, "$dndIsDragging", k), [k, T] = ee(), o = f(), d = f(), y = f(), P = f(), I = f(), D = f(), A = x("component"), { styleable: F, sidePanelStore: l, builderStore: G, dndIsDragging: H } = x("sdk");
  let O = h(g, "onClose", 8), j = h(g, "ignoreClicksOutside", 8), B = h(g, "size", 8), _ = h(g, "position", 8);
  const J = _() === ":default" ? null : _();
  l.actions.registerDefaultPosition(n().id, J);
  let E = f(null);
  const L = async () => {
    O() && await O()();
  };
  function $(t, s, r) {
    const c = document.getElementById("side-panel-container");
    c && (t && (s || r) ? (s ? c.style.background = s : c.style.removeProperty("background"), r ? c.style.backgroundImage = r : c.style.removeProperty("background-image")) : (c.style.removeProperty("background"), c.style.removeProperty("background-image")));
  }
  const N = (t, s) => {
    const r = (c) => {
      const v = document.getElementById("side-panel-container"), S = t;
      c ? v.contains(S) || v.appendChild(S) : v.contains(S) && (v.removeChild(S), L(), le().then(() => {
        re(l).contentId || $(!1, "", "");
      }));
    };
    return r(s), { update: r, destroy: () => r(!1) };
  };
  i(
    () => (m(), n(), a(), z()),
    () => {
      m().inBuilder && (n().inSelectedPath && a().contentId !== n().id ? l.actions.open(n().id) : !n().inSelectedPath && a().contentId === n().id && !z() && l.actions.close());
    }
  ), i(() => (a(), n()), () => {
    u(o, a().contentId === n().id);
  }), i(() => (e(o), C(j())), () => {
    e(o) && (l.actions.setIgnoreClicksOutside(j()), u(E, Math.random()));
  }), i(
    () => (C(B()), e(o), m(), a()),
    () => {
      const t = B() === ":default" ? null : B();
      e(o) && t && (m().inBuilder ? a().size !== t && l.actions.setSize(t) : a().size == null && l.actions.setSize(t));
    }
  ), i(
    () => (C(_()), n(), e(o), m(), a()),
    () => {
      const t = _() === ":default" ? null : _();
      l.actions.registerDefaultPosition(n().id, t), e(o) && t && m().inBuilder && a().position !== t && l.actions.setPosition(t);
    }
  ), i(() => n(), () => {
    u(d, n().styles?.normal || {});
  }), i(() => e(d), () => {
    u(y, e(d).background || "");
  }), i(() => e(d), () => {
    u(P, (e(d)["background-image"] || "").replace(/;\s*$/, ""));
  }), i(() => (e(y), e(P)), () => {
    u(I, !!(e(y) || e(P)));
  }), i(() => (e(I), n(), e(d)), () => {
    u(D, e(I) ? {
      ...n().styles,
      normal: Object.fromEntries(Object.entries(e(d)).filter(([t]) => t !== "background" && t !== "background-image"))
    } : n().styles);
  }), i(() => (e(o), e(y), e(P)), () => {
    $(e(o), e(y), e(P));
  }), U(), V();
  var p = ce();
  let w;
  var Q = te(p);
  W(Q, () => e(E), (t) => {
    var s = oe(), r = ie(s);
    ae(r, g, "default", {}, null), K(t, s);
  }), se(p), q(p, (t, s) => F?.(t, s), () => e(D)), q(p, (t, s) => N?.(t, s), () => e(o)), X((t) => w = Y(p, 1, "side-panel svelte-hyrpaj", null, w, t), [() => ({ open: e(o) })]), K(M, p), Z(), T();
}
export {
  fe as default
};
