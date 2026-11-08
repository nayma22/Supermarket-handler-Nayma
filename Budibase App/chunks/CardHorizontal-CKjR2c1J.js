import { g as Y, h as b, p as t, l as Z, i as $, k as ee, m as te, u as ae, v as p, t as C, d as H, $ as se, w as le, y as ie, f as W, c as a, s as n, r as s, j as re, at as g, b as c, a3 as y, z as oe, x as ne, B as ce } from "./index-quCB9sGT.js";
var ve = W('<img class="image svelte-jj0hac" alt=""/>'), de = W('<div class="container svelte-jj0hac"><!> <div class="content svelte-jj0hac"><main><h2 class="heading svelte-jj0hac"> </h2> <p class="text svelte-jj0hac"> </p></main> <footer class="svelte-jj0hac"><p class="subtext svelte-jj0hac"> </p> <a class="svelte-jj0hac"> </a></footer></div></div>');
function me(U, e) {
  Y(e, !1);
  const w = () => ne(I, "$component", z), [z, N] = ie(), _ = oe(), { styleable: T, linkable: B } = b("sdk"), I = b("component"), f = "";
  let v = t(e, "imageUrl", 8, ""), q = t(e, "heading", 8, ""), A = t(e, "description", 8, ""), D = t(e, "subtext", 8, ""), E = t(e, "linkText", 8, ""), F = t(e, "linkUrl", 8), G = t(e, "linkColor", 8), J = t(e, "linkHoverColor", 8), K = t(e, "cardWidth", 8), L = t(e, "imageWidth", 8), M = t(e, "imageHeight", 8);
  Z(() => $(v()), () => {
    ce(_, !!v());
  }), ee();
  var O = { className: f };
  te();
  var i = de(), j = a(i);
  {
    var P = (l) => {
      var o = ve();
      C(() => {
        g(o, `--imageWidth: ${L() ?? ""}; --imageHeight: ${M() ?? ""}`), y(o, "src", v());
      }), H(l, o);
    };
    ae(j, (l) => {
      re(_) && l(P);
    });
  }
  var u = n(j, 2), d = a(u), h = a(d), Q = a(h, !0);
  s(h);
  var x = n(h, 2), R = a(x, !0);
  s(x), s(d);
  var k = n(d, 2), m = a(k), S = a(m, !0);
  s(m);
  var r = n(m, 2), V = a(r, !0);
  s(r), p(r, (l) => B?.(l)), s(k), s(u), s(i), p(i, (l, o) => T?.(l, o), () => w().styles), C(() => {
    g(i, `--cardWidth: ${K() ?? ""}`), c(Q, q()), c(R, A()), c(S, D()), g(r, `--linkColor: ${G() ?? ""}; --linkHoverColor: ${J() ?? ""}`), y(r, "href", F() || "/"), c(V, E());
  }), H(U, i), se(e, "className", f);
  var X = le(O);
  return N(), X;
}
export {
  me as default
};
