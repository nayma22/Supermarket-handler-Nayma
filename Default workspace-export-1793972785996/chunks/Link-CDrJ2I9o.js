import { g as qe, h as ne, p as c, l as u, j as e, i as _, k as Te, m as Be, n as w, q as M, u as F, d as v, w as Ce, x as le, y as we, z as f, A as se, B as d, c as G, r as H, Y as Me, v as P, a7 as J, e as K, t as O, a as Q, b as R, f as X, a3 as V, aq as Pe } from "./index-quCB9sGT.js";
var Ue = X('<div contenteditable=""> </div>'), Ie = X("<a> </a>"), Ne = X("<a> </a>");
function Ae(re, s) {
  qe(s, !1);
  const i = () => le(fe, "$component", Z), g = () => le(ee, "$builderStore", Z), [Z, ie] = we(), k = f(), $ = f(), U = f(), m = f(), y = f(), z = f(), {
    linkable: oe,
    styleable: I,
    builderStore: ee,
    sidePanelStore: ce,
    modalStore: de
  } = ne("sdk"), fe = ne("component");
  let b = c(s, "url", 8), S = c(s, "text", 8), h = c(s, "openInNewTab", 8), te = c(s, "color", 8), N = c(s, "align", 8), j = c(s, "bold", 8), A = c(s, "italic", 8), L = c(s, "underline", 8), W = c(s, "size", 8), q = f(), Y = f(!1);
  const ue = () => {
    ce.actions.close(), de.actions.close();
  }, _e = (t, a, o) => t ? a ? t : h() ? `#${t}` : t : a || o ? "#/" : "/", ve = (t, a, o) => !a.inBuilder || o.editing ? t || "" : t || o.name || "Placeholder text", ge = (t, a) => a ? { ...t, normal: { ...t?.normal, color: a } } : t, me = (t) => {
    e(Y) && ee.actions.updateProp("text", t.target.textContent), d(Y, !1);
  };
  u(() => (i(), e(q)), () => {
    i().editing && e(q)?.focus();
  }), u(() => _(b()), () => {
    d(k, b() && typeof b() == "string" && !b().startsWith("/"));
  }), u(() => _(h()), () => {
    d($, h() ? "_blank" : "_self");
  }), u(() => (g(), _(S())), () => {
    d(U, g().inBuilder && !S());
  }), u(() => (_(S()), g(), i()), () => {
    d(m, ve(S(), g(), i()));
  }), u(
    () => (_(b()), e(k), _(h())),
    () => {
      d(y, _e(b(), e(k), h()));
    }
  ), u(() => (i(), _(te())), () => {
    d(z, ge(i().styles, te()));
  }), Te(), Be();
  var ae = w(), be = M(ae);
  {
    var he = (t) => {
      var a = Ue();
      let o;
      var D = G(a, !0);
      H(a), Me(a, (l) => d(q, l), () => e(q)), P(a, (l, T) => I?.(l, T), () => e(z)), J(() => K("blur", a, function(...l) {
        (i().editing ? me : null)?.apply(this, l);
      })), J(() => K("input", a, () => d(Y, !0))), O(
        (l) => {
          o = Q(a, 1, `align--${(N() || "left") ?? ""} size--${(W() || "M") ?? ""}`, "svelte-p8qgcc", o, l), R(D, e(m));
        },
        [
          () => ({ bold: j(), italic: A(), underline: L() })
        ]
      ), v(t, a);
    }, pe = (t) => {
      var a = w(), o = M(a);
      {
        var D = (l) => {
          var T = w(), xe = M(T);
          {
            var ke = (p) => {
              var r = Ie();
              let B;
              var E = G(r, !0);
              H(r), P(r, (n, C) => I?.(n, C), () => e(z)), O(
                (n) => {
                  V(r, "target", e($)), V(r, "href", e(y)), B = Q(r, 1, `align--${(N() || "left") ?? ""} size--${(W() || "M") ?? ""}`, "svelte-p8qgcc", B, n), R(E, e(m));
                },
                [
                  () => ({
                    placeholder: e(U),
                    bold: j(),
                    italic: A(),
                    underline: L()
                  })
                ]
              ), v(p, r);
            }, ye = (p) => {
              var r = w(), B = M(r);
              Pe(B, () => e(y), (E) => {
                var n = Ne();
                let C;
                var ze = G(n, !0);
                H(n), P(n, (x) => oe?.(x)), P(n, (x, Se) => I?.(x, Se), () => e(z)), J(() => K("click", n, ue)), O(
                  (x) => {
                    V(n, "href", e(y)), C = Q(n, 1, `align--${(N() || "left") ?? ""} size--${(W() || "M") ?? ""}`, "svelte-p8qgcc", C, x), R(ze, e(m));
                  },
                  [
                    () => ({
                      placeholder: e(U),
                      bold: j(),
                      italic: A(),
                      underline: L()
                    })
                  ]
                ), v(E, n);
              }), v(p, r);
            };
            F(xe, (p) => {
              e(k) || h() ? p(ke) : p(ye, !1);
            });
          }
          v(l, T);
        };
        F(
          o,
          (l) => {
            g(), e(m), se(() => g().inBuilder || e(m)) && l(D);
          },
          !0
        );
      }
      v(t, a);
    };
    F(be, (t) => {
      i(), se(() => i().editing) ? t(he) : t(pe, !1);
    });
  }
  v(re, ae), Ce(), ie();
}
export {
  Ae as default
};
