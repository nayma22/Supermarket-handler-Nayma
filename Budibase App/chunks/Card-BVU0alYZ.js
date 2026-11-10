import { g as Y, h as b, p as t, l as y, i as C, k as Z, m as $, u as ee, v as p, t as H, d as U, $ as te, w as ae, x as se, y as le, f as z, c as i, s as d, r, j as w, b as m, at as N, a3 as T, z as W, B as j } from "./index-quCB9sGT.js";
var ie = z('<img class="image svelte-1l8fiug" alt=""/>'), re = z('<div class="container svelte-1l8fiug"><!> <div class="content svelte-1l8fiug"><h2 class="heading svelte-1l8fiug"> </h2> <h4 class="text svelte-1l8fiug"> </h4> <a class="svelte-1l8fiug"> </a></div></div>');
function ne(B, e) {
  Y(e, !1);
  const n = () => se(D, "$component", I), [I, S] = le(), f = W(), h = W(), { styleable: q, linkable: A } = b("sdk"), D = b("component"), _ = "";
  let c = t(e, "imageUrl", 8, ""), E = t(e, "heading", 8, ""), F = t(e, "description", 8, ""), G = t(e, "linkText", 8, ""), J = t(e, "linkUrl", 8), K = t(e, "linkColor", 8), L = t(e, "linkHoverColor", 8), M = t(e, "imageHeight", 8), u = t(e, "cardWidth", 8);
  y(() => (n(), C(u())), () => {
    j(f, {
      ...n().styles,
      normal: { ...n().styles.normal, width: u() }
    });
  }), y(() => C(c()), () => {
    j(h, !!c());
  }), Z();
  var O = { className: _ };
  $();
  var o = re(), k = i(o);
  {
    var P = (a) => {
      var l = ie();
      H(() => {
        N(l, `--imageHeight: ${M() ?? ""}`), T(l, "src", c());
      }), U(a, l);
    };
    ee(k, (a) => {
      w(h) && a(P);
    });
  }
  var x = d(k, 2), v = i(x), Q = i(v, !0);
  r(v);
  var g = d(v, 2), R = i(g, !0);
  r(g);
  var s = d(g, 2), V = i(s, !0);
  r(s), p(s, (a) => A?.(a)), r(x), r(o), p(o, (a, l) => q?.(a, l), () => w(f)), H(() => {
    m(Q, E()), m(R, F()), N(s, `--linkColor: ${K() ?? ""}; --linkHoverColor: ${L() ?? ""}`), T(s, "href", J() || "/"), m(V, G());
  }), U(B, o), te(e, "className", _);
  var X = ae(O);
  return S(), X;
}
export {
  ne as default
};
