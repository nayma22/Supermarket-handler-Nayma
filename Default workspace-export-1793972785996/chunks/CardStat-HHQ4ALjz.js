import { g as j, h as v, p as r, m as q, v as z, t as A, d as B, $ as D, w as E, y as F, f as G, c as a, r as s, s as i, b as n, x as H } from "./index-quCB9sGT.js";
var I = G('<div class="container svelte-20bmpo"><p class="title svelte-20bmpo"> </p> <h3 class="value svelte-20bmpo"> </h3> <p class="label svelte-20bmpo"> </p></div>');
function K(m, t) {
  j(t, !1);
  const u = () => H(f, "$component", b), [b, d] = F(), { styleable: _ } = v("sdk"), f = v("component"), p = "";
  let x = r(t, "title", 8, ""), h = r(t, "value", 8, ""), g = r(t, "label", 8, "");
  var y = { className: p };
  q();
  var e = I(), l = a(e), $ = a(l, !0);
  s(l);
  var o = i(l, 2), C = a(o, !0);
  s(o);
  var c = i(o, 2), N = a(c, !0);
  s(c), s(e), z(e, (w, S) => _?.(w, S), () => u().styles), A(() => {
    n($, x()), n(C, h()), n(N, g());
  }), B(m, e), D(t, "className", p);
  var k = E(y);
  return d(), k;
}
export {
  K as default
};
