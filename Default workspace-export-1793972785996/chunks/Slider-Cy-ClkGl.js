import { g as $, p as a, a0 as be, m as ee, c as M, a1 as _e, r as B, t as te, a3 as z, a2 as xe, e as ye, d as C, w as ae, f as D, z as c, l as k, i as y, j as e, k as Ve, u as I, B as f, b5 as X, A as Y, s as q, I as Z, b as Se, H as p } from "./index-quCB9sGT.js";
import { F as Ne } from "./Field-Dj4x-6nw.js";
var ze = D('<div class="svelte-jcxieg"><input type="range" class="svelte-jcxieg"/></div>');
function ke(R, t) {
  $(t, !1);
  let o = a(t, "value", 8, 0), m = a(t, "id", 8, null), h = a(t, "disabled", 8, !1), A = a(t, "min", 8, 0), L = a(t, "max", 8, 100), d = a(t, "step", 8, 1);
  const v = be(), b = (T) => {
    const j = T.target;
    v("change", j.value);
  };
  ee();
  var g = ze(), i = M(g);
  _e(i), B(g), te(() => {
    z(i, "min", A()), z(i, "max", L()), z(i, "step", d()), xe(i, o()), i.disabled = h(), z(i, "id", m());
  }), ye("change", i, b), C(R, g), ae();
}
var Ie = D('<div class="slider svelte-7n16nn"><!></div>'), Me = D('<p class="value-text svelte-7n16nn"> </p>'), Be = D('<div class="field svelte-7n16nn"><!> <!> <!> <!></div>');
function Re(R, t) {
  $(t, !1);
  const o = c(), m = c(), h = c();
  let A = a(t, "field", 8), L = a(t, "label", 8), d = a(t, "min", 8, 0), v = a(t, "max", 8, 100), b = a(t, "step", 8, 1), g = a(t, "defValue", 8), i = a(t, "value", 24, () => g() === 0 || g() ? g() : Math.floor((v() + d()) / 2)), T = a(t, "disabled", 8, !1), j = a(t, "readonly", 8, !1), le = a(t, "validation", 8), H = a(t, "onChange", 8), ne = a(t, "span", 8, 6), ie = a(t, "helpText", 24, () => {
  }), P = a(t, "iconLeft", 8), U = a(t, "iconRight", 8), V = a(t, "iconIncDec", 8, !0), re = a(t, "displayValue", 8), se = a(t, "iconLeftSize", 8, "M"), de = a(t, "iconRightSize", 8, "M"), r = c(), S = c(), G = c(), _ = c(d()), N = c(v());
  const F = (l) => {
    if (typeof l == "number" && !Number.isNaN(l))
      return l;
    if (typeof l == "string") {
      const u = Number(l);
      if (!Number.isNaN(u))
        return u;
    }
    return e(_);
  }, w = (l) => l < e(_) ? e(_) : l > e(N) ? e(N) : l, J = (l) => {
    const u = w(l), x = e(S)?.setValue(u);
    H() && x && H()({ value: u });
  }, ue = (l) => {
    const u = F(l.detail);
    J(u);
  }, K = (l) => {
    !e(S) || e(h) || J(e(m) + l);
  }, ce = () => K(-b()), fe = () => K(b());
  k(() => (y(d()), y(v())), () => {
    f(_, Math.min(d(), v())), f(N, Math.max(d(), v()));
  }), k(() => (y(i()), y(d())), () => {
    f(o, w(i() != null ? F(i()) : d()));
  }), k(() => (e(r), e(o)), () => {
    f(m, e(r) ? w(F(e(r).value ?? e(o))) : e(o));
  }), k(() => e(r), () => {
    f(h, !!(e(r)?.disabled || e(r)?.readonly));
  }), Ve(), ee(), Ne(R, {
    get label() {
      return L();
    },
    get field() {
      return A();
    },
    get disabled() {
      return T();
    },
    get readonly() {
      return j();
    },
    get validation() {
      return le();
    },
    get span() {
      return ne();
    },
    get helpText() {
      return ie();
    },
    get type() {
      return y(X), Y(() => X.NUMBER);
    },
    get defaultValue() {
      return e(o);
    },
    get fieldState() {
      return e(r);
    },
    set fieldState(l) {
      f(r, l);
    },
    get fieldApi() {
      return e(S);
    },
    set fieldApi(l) {
      f(S, l);
    },
    get fieldSchema() {
      return e(G);
    },
    set fieldSchema(l) {
      f(G, l);
    },
    children: (l, u) => {
      var x = Be(), O = M(x);
      {
        var oe = (n) => {
          {
            let s = p(() => !V());
            Z(n, {
              get name() {
                return P();
              },
              get size() {
                return se();
              },
              get hoverable() {
                return V();
              },
              get disabled() {
                return e(s);
              },
              $$events: { click: ce }
            });
          }
        };
        I(O, (n) => {
          P() && n(oe);
        });
      }
      var Q = q(O, 2);
      {
        var ve = (n) => {
          var s = Ie(), E = M(s);
          ke(E, {
            get min() {
              return e(_);
            },
            get max() {
              return e(N);
            },
            get step() {
              return b();
            },
            get value() {
              return e(m);
            },
            get disabled() {
              return e(h);
            },
            get id() {
              return e(r), Y(() => e(r).fieldId);
            },
            $$events: { change: ue }
          }), B(s), C(n, s);
        };
        I(Q, (n) => {
          e(r) && n(ve);
        });
      }
      var W = q(Q, 2);
      {
        var ge = (n) => {
          {
            let s = p(() => !V());
            Z(n, {
              get name() {
                return U();
              },
              get size() {
                return de();
              },
              get hoverable() {
                return V();
              },
              get disabled() {
                return e(s);
              },
              $$events: { click: fe }
            });
          }
        };
        I(W, (n) => {
          U() && n(ge);
        });
      }
      var me = q(W, 2);
      {
        var he = (n) => {
          var s = Me(), E = M(s, !0);
          B(s), te(() => Se(E, e(m))), C(n, s);
        };
        I(me, (n) => {
          re() && n(he);
        });
      }
      B(x), C(l, x);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), ae();
}
export {
  Re as default
};
