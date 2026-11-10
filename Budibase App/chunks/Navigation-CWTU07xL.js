import { g as C, h as v, p as c, m as E, u as N, E as q, v as d, d as m, w as z, y as A, s as B, c as o, f, r as l, x as D, t as F, a3 as G } from "./index-quCB9sGT.js";
var H = f('<div class="nav__top svelte-rjmfhw"><a href="/"><img class="logo svelte-rjmfhw" alt="logo" height="48"/></a></div>'), I = f('<div class="nav svelte-rjmfhw"><!> <div class="nav__menu svelte-rjmfhw"><!></div></div>');
function K(g, t) {
  C(t, !1);
  const _ = () => D(w, "$component", h), [h, p] = A(), { linkable: u, styleable: b } = v("sdk"), w = v("component");
  let j = c(t, "logoUrl", 8), k = c(t, "hideLogo", 8);
  E();
  var e = I(), i = o(e);
  {
    var x = (a) => {
      var s = H(), n = o(s), L = o(n);
      l(n), d(n, (U) => u?.(U)), l(s), F(() => G(L, "src", j() || "/builder/bblogo.png")), m(a, s);
    };
    N(i, (a) => {
      k() || a(x);
    });
  }
  var r = B(i, 2), y = o(r);
  q(y, t, "default", {}, null), l(r), l(e), d(e, (a, s) => b?.(a, s), () => _().styles), m(g, e), z(), p();
}
export {
  K as default
};
