import { g as Z, p as s, h as w, m as $, u as m, v as ee, a7 as te, t as c, a as B, b as f, e as D, d as o, w as ae, y as se, s as _, c as i, f as d, r, x as ie, at as re, aG as le, a4 as ne, a5 as oe } from "./index-quCB9sGT.js";
var ve = d('<div class="spectrum-Card-coverPhoto svelte-eemyhf"></div>'), ce = d('<div class="spectrum-Card-content"><div class="spectrum-Card-subtitle spectrum-Detail spectrum-Detail--sizeS svelte-eemyhf"> </div></div>'), de = d('<div class="spectrum-Card-footer svelte-eemyhf"> </div>'), ue = d('<div class="spectrum-Card-footer button-container svelte-eemyhf"><!></div>'), me = d('<div tabindex="0" role="figure"><!> <div class="spectrum-Card-container svelte-eemyhf"><div class="spectrum-Card-body"><div class="spectrum-Card-header"><div> </div></div> <!></div> <!> <!></div></div>');
function he(T, a) {
  Z(a, !1);
  const H = () => ie(I, "$component", O), [O, G] = se();
  let X = s(a, "title", 8), y = s(a, "subtitle", 8), g = s(a, "description", 8), x = s(a, "imageURL", 8), h = s(a, "linkURL", 8), j = s(a, "linkPeek", 8), q = s(a, "horizontal", 8), p = s(a, "showButton", 8), A = s(a, "buttonText", 8), k = s(a, "buttonOnClick", 8);
  const { styleable: E, routeStore: F } = w("sdk"), I = w("component"), J = (e) => {
    if (!h())
      return !1;
    e.preventDefault(), e.stopPropagation(), F.actions.navigate(h(), j());
  };
  $();
  var l = me();
  let z;
  var L = i(l);
  {
    var K = (e) => {
      var t = ve();
      c(() => re(t, `background-image: url(${x() ?? ""})`)), o(e, t);
    };
    m(L, (e) => {
      x() && e(K);
    });
  }
  var P = _(L, 2), b = i(P), C = i(b), u = i(C);
  let R;
  var M = i(u, !0);
  r(u), r(C);
  var N = _(C, 2);
  {
    var Q = (e) => {
      var t = ce(), n = i(t), v = i(n, !0);
      r(n), r(t), c(() => f(v, y())), o(e, t);
    };
    m(N, (e) => {
      y() && e(Q);
    });
  }
  r(b);
  var S = _(b, 2);
  {
    var V = (e) => {
      var t = de(), n = i(t, !0);
      r(t), c(() => f(n, g())), o(e, t);
    };
    m(S, (e) => {
      g() && e(V);
    });
  }
  var W = _(S, 2);
  {
    var Y = (e) => {
      var t = ue(), n = i(t);
      le(n, {
        secondary: !0,
        $$events: {
          click(...v) {
            k()?.apply(this, v);
          }
        },
        children: (v, fe) => {
          ne();
          var U = oe();
          c(() => f(U, A() || "Click me")), o(v, U);
        },
        $$slots: { default: !0 }
      }), r(t), o(e, t);
    };
    m(W, (e) => {
      p() && e(Y);
    });
  }
  r(P), r(l), ee(l, (e, t) => E?.(e, t), () => H().styles), te(() => D("click", l, function(...e) {
    (p() ? null : k())?.apply(this, e);
  })), c(
    (e, t) => {
      z = B(l, 1, "spectrum-Card svelte-eemyhf", null, z, e), R = B(u, 1, "spectrum-Card-title spectrum-Heading spectrum-Heading--sizeXS svelte-eemyhf", null, R, t), f(M, X() || "Card Title");
    },
    [
      () => ({
        horizontal: q(),
        clickable: k() && !p()
      }),
      () => ({ link: h() })
    ]
  ), D("click", u, J), o(T, l), ae(), G();
}
export {
  he as default
};
