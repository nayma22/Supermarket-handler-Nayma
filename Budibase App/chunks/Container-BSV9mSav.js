import { g as K, y as ve, p as b, h as F, bj as Re, X as ze, j as e, B as a, l, cv as j, cw as H, k as Q, m as ue, c as fe, u as le, s as ie, r as T, Y as $e, v as me, a7 as pe, e as ge, t as he, a as be, a3 as Y, d as C, w as V, x as N, z as n, aa as Ae, q as U, T as re, U as ce, n as J, E as Z, f as I, i as S, aL as Ee, bL as qe, bx as Le, cx as Me } from "./index-quCB9sGT.js";
var Oe = I('<div class="placeholder-h svelte-18tp3wn"></div>'), je = I('<div class="placeholder-v svelte-18tp3wn"></div>'), Ne = I('<div class="underlay-h svelte-18tp3wn"></div> <div class="underlay-v svelte-18tp3wn"></div>', 1), Se = I("<div><!> <!></div>");
function Be(B, o) {
  K(o, !1);
  const L = () => N(k, "$builderStore", d), c = () => N(W, "$component", d), R = () => N(X, "$children", d), p = () => N(P, "$context", d), z = () => N(te, "$styles", d), [d, $] = ve(), u = n(), A = n(), v = n(), E = n(), q = n(), _ = n(), w = n(), y = n();
  let M = b(o, "onClick", 8);
  const W = F("component"), { styleable: D, builderStore: k } = F("sdk"), P = F("context");
  let G = n(), g = n(), x = n(), X = Ae({}), ee = n(!1), te = Re({});
  const _e = (t, s, i) => {
    const m = s ? "mobileRowEnd" : "desktopRowEnd";
    let r = 2;
    for (let h of Object.keys(t))
      t[h][m] > r && (r = t[h][m]);
    let O = r - 1;
    return i ? Math.ceil((O + 10) / 10) * 10 : O;
  }, se = (t) => {
    X.update((s) => ({
      ...s,
      [t.dataset.id]: {
        desktopRowEnd: parseInt(t.dataset.gridDesktopRowEnd),
        mobileRowEnd: parseInt(t.dataset.gridMobileRowEnd)
      }
    }));
  }, we = (t) => {
    X.update((s) => (delete s[t.dataset.id], { ...s }));
  }, ye = (t) => {
    const s = new ResizeObserver((i) => {
      if (!i?.[0])
        return;
      const m = i[0].target;
      a(G, m.clientWidth), a(g, m.clientHeight);
    });
    return s.observe(t), s;
  };
  ze(() => {
    let t, s;
    return s = ye(e(x)), t = new MutationObserver((i) => {
      for (let m of i) {
        const { target: r, type: O, addedNodes: h, removedNodes: oe } = m;
        r === e(x) ? h[0]?.classList?.contains("component") ? se(h[0]) : oe[0]?.classList?.contains("component") && we(oe[0]) : O === "attributes" && r.parentNode === e(x) && r.classList.contains("component") && se(r);
      }
    }), t.observe(e(x), {
      childList: !0,
      attributes: !0,
      subtree: !0,
      attributeFilter: ["data-grid-desktop-row-end", "data-grid-mobile-row-end"]
    }), a(ee, !0), () => {
      t?.disconnect(), s?.disconnect();
    };
  }), l(() => L(), () => {
    a(u, L().inBuilder);
  }), l(() => (c(), e(u)), () => {
    a(A, c().isRoot && e(u));
  }), l(() => p(), () => {
    a(w, p().device.mobile);
  }), l(() => (R(), e(w), e(A)), () => {
    a(v, _e(R(), e(w), e(A)));
  }), l(() => (e(v), j), () => {
    a(E, e(v) * j);
  }), l(() => (e(g), j), () => {
    a(q, Math.floor(e(g) / j));
  }), l(() => (e(v), e(q)), () => {
    a(_, Math.max(e(v), e(q)));
  }), l(() => (e(G), H), () => {
    a(y, e(G) / H);
  }), l(
    () => (c(), e(E), e(_), e(y), j),
    () => {
      te.set({
        ...c().styles,
        normal: {
          ...c().styles?.normal,
          "--height": `${e(E)}px`,
          "--min-height": c().styles?.normal?.height || 0,
          "--cols": H,
          "--rows": e(_),
          "--col-size": e(y),
          "--row-size": j
        }
      });
    }
  ), Q(), ue();
  var f = Se();
  let ae;
  var ne = fe(f);
  {
    var ke = (t) => {
      var s = Ne(), i = U(s);
      re(i, 5, () => ({ length: e(_) }), ce, (r, O) => {
        var h = Oe();
        C(r, h);
      }), T(i);
      var m = ie(i, 2);
      re(m, 5, () => ({ length: H }), ce, (r, O) => {
        var h = je();
        C(r, h);
      }), T(m), C(t, s);
    };
    le(ne, (t) => {
      e(u) && t(ke);
    });
  }
  var xe = ie(ne, 2);
  {
    var Ce = (t) => {
      var s = J(), i = U(s);
      Z(i, o, "default", {}, null), C(t, s);
    };
    le(xe, (t) => {
      e(ee) && t(Ce);
    });
  }
  T(f), $e(f, (t) => a(x, t), () => e(x)), me(f, (t, s) => D?.(t, s), z), pe(() => ge("click", f, function(...t) {
    M()?.apply(this, t);
  })), he(
    (t) => {
      ae = be(f, 1, "grid svelte-18tp3wn", null, ae, t), Y(f, "data-cols", H), Y(f, "data-col-size", e(y)), Y(f, "data-required-rows", e(v));
    },
    [() => ({ mobile: e(w), clickable: !!M() })]
  ), C(B, f), V(), $();
}
var Ge = I("<div><!></div>");
function de(B, o) {
  K(o, !1);
  const L = () => N(E, "$component", c), [c, R] = ve(), p = n(), z = n(), d = n(), $ = n(), u = n(), A = n(), { styleable: v } = F("sdk"), E = F("component");
  let q = b(o, "direction", 8), _ = b(o, "hAlign", 8), w = b(o, "vAlign", 8), y = b(o, "size", 8), M = b(o, "gap", 8), W = b(o, "wrap", 8), D = b(o, "onClick", 8);
  l(() => S(q()), () => {
    a(p, q() ? `flex-container direction-${q()}` : "");
  }), l(() => S(_()), () => {
    a(z, _() ? `hAlign-${_()}` : "");
  }), l(() => S(w()), () => {
    a(d, w() ? `vAlign-${w()}` : "");
  }), l(() => S(y()), () => {
    a($, y() ? `size-${y()}` : "");
  }), l(() => S(M()), () => {
    a(u, M() ? `gap-${M()}` : "");
  }), l(
    () => (e(p), e(z), e(d), e($), e(u)),
    () => {
      a(A, [
        e(p),
        e(z),
        e(d),
        e($),
        e(u)
      ].join(" "));
    }
  ), Q(), ue();
  var k = Ge();
  let P;
  var G = fe(k);
  Z(G, o, "default", {}, null), T(k), me(k, (g, x) => v?.(g, x), () => L().styles), pe(() => ge("click", k, function(...g) {
    D()?.apply(this, g);
  })), he((g) => P = be(k, 1, Ee(e(A)), "svelte-11rnque", P, g), [() => ({ clickable: !!D(), wrap: W() })]), C(B, k), V(), R();
}
function Fe(B, o) {
  const L = qe(o, ["children", "$$slots", "$$events", "$$legacy"]);
  K(o, !1);
  const c = n();
  let R = b(o, "layout", 8, "flex");
  l(() => (S(R()), de), () => {
    a(c, R() === "grid" ? Be : de);
  }), Q();
  var p = J(), z = U(p);
  Le(z, () => e(c), (d, $) => {
    $(d, Me(() => L, {
      children: (u, A) => {
        var v = J(), E = U(v);
        Z(E, o, "default", {}, null), C(u, v);
      },
      $$slots: { default: !0 }
    }));
  }), C(B, p), V();
}
export {
  Fe as default
};
