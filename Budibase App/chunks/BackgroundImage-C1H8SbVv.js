import { g as x, h as r, p as c, l as q, i, j as a, k as B, m as $, E as j, v as w, t as z, d as C, w as E, y as I, z as A, c as d, f as D, r as p, at as F, x as G, B as u } from "./index-quCB9sGT.js";
var H = D('<div class="outer svelte-162qrll"><div class="inner svelte-162qrll"><!></div></div>');
function K(f, t) {
  x(t, !1);
  const _ = () => G(y, "$component", m), [m, v] = I(), { styleable: g } = r("sdk"), y = r("component");
  let o = c(t, "url", 8), l = c(t, "position", 8), e = A("");
  q(
    () => (i(o()), a(e), i(l())),
    () => {
      o() && u(e, a(e) + `background-image: url("${o()}");`), l() && u(e, a(e) + `background-position: ${l()};`);
    }
  ), B(), $();
  var s = H(), n = d(s), k = d(n);
  j(k, t, "default", {}, null), p(n), p(s), w(s, (b, h) => g?.(b, h), () => _().styles), z(() => F(n, a(e))), C(f, s), E(), v();
}
export {
  K as default
};
