import { g as $, h as s, p as k, m as g, n as S, q as P, u as q, d, w, y, A as i, x as p, c as A, r as B, t as C, b as j, i as z, f as D } from "./index-quCB9sGT.js";
var E = D('<div class="svelte-1s9p0c1"> </div>');
function G(m, a) {
  $(a, !1);
  const o = () => p(u, "$builderStore", r), n = () => p(_, "$component", r), [r, f] = y(), { builderStore: u } = s("sdk"), _ = s("component"), v = s("block");
  let c = k(a, "text", 8, void 0);
  g();
  var l = S(), b = P(l);
  {
    var h = (e) => {
      var t = E(), x = A(t, !0);
      B(t), C(() => j(x, (z(c()), n(), i(() => c() || v?.name || n().name || "Placeholder")))), d(e, t);
    };
    q(b, (e) => {
      o(), i(() => o().inBuilder) && e(h);
    });
  }
  d(m, l), w(), f();
}
export {
  G as default
};
