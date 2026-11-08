import { g as G, h as b, p as o, l as H, i as J, k as K, m as M, u as N, v as m, t as f, d as u, w as O, y as P, s as p, f as y, c as a, r as s, j as Q, a3 as k, b as x, z as R, x as T, B as V } from "./index-quCB9sGT.js";
var W = y('<div class="image-block svelte-16vobh5"><img class="image svelte-16vobh5" alt=""/></div>'), X = y('<div class="container svelte-16vobh5"><a class="svelte-16vobh5"><div class="stackedlist svelte-16vobh5"><!> <div class="content svelte-16vobh5"><div class="heading svelte-16vobh5"> </div> <div class="subheading svelte-16vobh5"> </div></div></div></a></div>');
function Z(U, t) {
  G(t, !1);
  const w = () => T(I, "$component", j), [j, z] = P(), d = R(), { styleable: B, linkable: C } = b("sdk"), I = b("component");
  let n = o(t, "imageUrl", 8, ""), L = o(t, "heading", 8, ""), S = o(t, "subheading", 8, ""), q = o(t, "destinationUrl", 8, "/");
  H(() => J(n()), () => {
    V(d, !!n());
  }), K(), M();
  var v = X(), l = a(v), c = a(l), _ = a(c);
  {
    var A = (e) => {
      var i = W(), F = a(i);
      s(i), f(() => k(F, "src", n())), u(e, i);
    };
    N(_, (e) => {
      Q(d) && e(A);
    });
  }
  var g = p(_, 2), r = a(g), D = a(r, !0);
  s(r);
  var h = p(r, 2), E = a(h, !0);
  s(h), s(g), s(c), s(l), m(l, (e) => C?.(e)), s(v), m(v, (e, i) => B?.(e, i), () => w().styles), f(() => {
    k(l, "href", q()), x(D, L()), x(E, S());
  }), u(U, v), O(), z();
}
export {
  Z as default
};
