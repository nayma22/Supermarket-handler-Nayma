import { c as r, E as A, r as d, d as u, f as _, aU as V, g as Y, a0 as $, h as ee, p as i, l as te, B as ae, i as se, k as le, m as ne, u as y, s as M, j as l, A as C, t as w, a as j, e as h, Z as z, w as ie, z as oe, I as q, at as ce, T as re, a5 as de, b as ue, U as ve, H as ge } from "./index-quCB9sGT.js";
var fe = _('<ul class="spectrum-Menu" role="menu"><!></ul>');
function xe(m, t) {
  var v = fe(), o = r(v);
  A(o, t, "default", {}, null), d(v), u(m, v);
}
var _e = _("<div><!></div>"), he = _('<div class="key svelte-1gnt6t5"><!></div>'), me = _('<div class="keys svelte-1gnt6t5"><!> <!></div>'), be = _('<li role="menuitem" tabindex="0"><!> <span class="spectrum-Menu-itemLabel svelte-1gnt6t5"><!></span> <!></li>');
function ye(m, t) {
  const v = V(t);
  Y(t, !1);
  const o = oe(), D = $(), H = ee("actionMenu");
  let I = i(t, "icon", 24, () => {
  }), W = i(t, "iconWeight", 8, "regular"), K = i(t, "iconColour", 24, () => {
  }), T = i(t, "iconHidden", 8, !1), X = i(t, "iconAlign", 8, "center"), B = i(t, "disabled", 24, () => {
  }), Z = i(t, "noClose", 8, !1), E = i(t, "keyBind", 24, () => {
  });
  const p = (e) => {
    let a = e?.split("+") || [];
    for (let s = 0; s < a.length; s++)
      a[s].toLowerCase() === "ctrl" && navigator.platform.startsWith("Mac") && (a[s] = "⌘");
    return a;
  }, F = () => {
    H && !Z() && H.hideAll(), D("click");
  };
  te(() => se(E()), () => {
    ae(o, p(E()));
  }), le(), ne();
  var n = be();
  let L;
  var S = r(n);
  {
    var G = (e) => {
      var a = _e();
      let s;
      var k = r(a);
      {
        let g = ge(() => K() || "var(--spectrum-global-color-gray-700)");
        q(k, {
          get name() {
            return I();
          },
          get weight() {
            return W();
          },
          size: "S",
          get color() {
            return l(g);
          }
        });
      }
      d(a), w(
        (g) => {
          s = j(a, 1, "icon svelte-1gnt6t5", null, s, g), ce(a, `align-self: ${X() ?? ""}`);
        },
        [() => ({ iconHidden: T() })]
      ), u(e, a);
    };
    y(S, (e) => {
      I() && e(G);
    });
  }
  var b = M(S, 2), J = r(b);
  A(J, t, "default", {}, null), d(b);
  var N = M(b, 2);
  {
    var O = (e) => {
      var a = me(), s = r(a);
      A(s, t, "right", {}, null);
      var k = M(s, 2);
      re(k, 1, () => l(o), ve, (g, f) => {
        var x = he(), P = r(x);
        {
          var Q = (c) => {
            q(c, {
              size: "XS",
              get weight() {
                return W();
              },
              get name() {
                return l(f), C(() => l(f).split("!")[1]);
              }
            });
          }, R = (c) => {
            var U = de();
            w(() => ue(U, l(f))), u(c, U);
          };
          y(P, (c) => {
            l(f), C(() => l(f).startsWith("!")) ? c(Q) : c(R, !1);
          });
        }
        d(x), u(g, x);
      }), d(a), u(e, a);
    };
    y(N, (e) => {
      l(o), C(() => l(o)?.length || v.right) && e(O);
    });
  }
  d(n), w((e) => L = j(n, 1, "spectrum-Menu-item svelte-1gnt6t5", null, L, e), [() => ({ "is-disabled": B() })]), h("click", n, function(...e) {
    (B() ? null : F)?.apply(this, e);
  }), h("auxclick", n, function(e) {
    z.call(this, t, e);
  }), h("contextmenu", n, function(e) {
    z.call(this, t, e);
  }), h("keydown", n, function(e) {
    z.call(this, t, e);
  }), u(m, n), ie();
}
export {
  ye as I,
  xe as M
};
