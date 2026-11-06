import { g as U, p as t, l as Y, i as f, k as $, m as ee, c as L, u as Z, s as E, a1 as ie, r as q, Y as te, t as J, a as K, a3 as X, a2 as se, j as l, e as oe, Z as M, d as D, w as ae, z as k, I as N, f as V, B as v, cp as ue, ci as ce, cf as de, ag as ve, X as fe, q as Q, a8 as ge, n as me, cG as be, H as R, cg as he } from "./index-quCB9sGT.js";
var _e = V('<div class="error-icon svelte-1rlhaz8"><!></div>'), ye = V('<button type="button" tabindex="-1"><!></button>'), Te = V('<div aria-required="false" aria-haspopup="true"><div><!> <input data-input="" type="text"/></div> <!></div>');
function ke(C, e) {
  U(e, !1);
  const O = k();
  let g = t(e, "anchor", 12), u = t(e, "disabled", 8), m = t(e, "readonly", 8), b = t(e, "error", 8), j = t(e, "focused", 8), h = t(e, "placeholder", 8), z = t(e, "id", 8), P = t(e, "value", 8), _ = t(e, "icon", 8), y = t(e, "enableTime", 8), x = t(e, "timeOnly", 8);
  Y(
    () => (f(P()), f(y()), f(x())),
    () => {
      v(O, ue(P(), { enableTime: y(), timeOnly: x() }));
    }
  ), $(), ee();
  var i = Te();
  let I;
  var T = L(i);
  let w;
  var G = L(T);
  {
    var S = (a) => {
      var r = _e(), o = L(r);
      N(o, {
        name: "warning",
        color: "var(--spectrum-semantic-negative-color-icon)"
      }), q(r), D(a, r);
    };
    Z(G, (a) => {
      b() && a(S);
    });
  }
  var s = E(G, 2);
  ie(s);
  let c;
  q(T);
  var p = E(T, 2);
  {
    var d = (a) => {
      var r = ye();
      let o;
      var W = L(r);
      N(W, {
        get name() {
          return _();
        }
      }), q(r), J((A) => o = K(r, 1, "spectrum-Picker spectrum-Picker--sizeM spectrum-InputGroup-button", null, o, A), [() => ({ "is-invalid": !!b() })]), D(a, r);
    };
    Z(p, (a) => {
      !u() && !m() && a(d);
    });
  }
  q(i), te(i, (a) => g(a), () => g()), J(
    (a, r, o) => {
      I = K(i, 1, "spectrum-InputGroup spectrum-Datepicker svelte-1rlhaz8", null, I, a), X(i, "aria-readonly", m()), w = K(T, 1, "spectrum-Textfield spectrum-InputGroup-textfield svelte-1rlhaz8", null, w, r), s.disabled = u(), s.readOnly = m(), c = K(s, 1, "spectrum-Textfield-input spectrum-InputGroup-input svelte-1rlhaz8", null, c, o), X(s, "placeholder", h()), X(s, "id", z()), se(s, l(O));
    },
    [
      () => ({
        "is-disabled": u() || m(),
        "is-invalid": !!b(),
        "is-focused": j()
      }),
      () => ({ "is-disabled": u(), "is-invalid": !!b() }),
      () => ({ "is-disabled": u() })
    ]
  ), oe("click", i, function(a) {
    M.call(this, e, a);
  }), D(C, i), ae();
}
var Oe = V("<!> <!>", 1);
function ze(C, e) {
  U(e, !1);
  const O = k(), g = k();
  let u = t(e, "id", 8, null), m = t(e, "disabled", 8, !1), b = t(e, "readonly", 8, !1), j = t(e, "error", 8, null), h = t(e, "enableTime", 8, !0), z = t(e, "value", 8, null), P = t(e, "placeholder", 8, null), _ = t(e, "timeOnly", 8, !1), y = t(e, "setTimeTo", 24, () => {
  }), x = t(e, "ignoreTimezones", 8, !1), i = t(e, "useKeyboardShortcuts", 8, !0), I = t(e, "appendTo", 24, () => {
  }), T = t(e, "api", 12, null), w = t(e, "align", 24, () => ce.Left);
  const G = de();
  let S = t(e, "startDayOfWeek", 24, () => {
  }), s = t(e, "calendarLabels", 24, () => ve("calendar")), c = k(!1), p = k(), d = k();
  const a = () => {
    v(c, !0);
  }, r = () => {
    v(c, !1);
  };
  fe(() => {
    T({
      open: () => l(d)?.show(),
      close: () => l(d)?.hide()
    });
  }), Y(() => f(S()), () => {
    v(O, S() ?? G);
  }), Y(
    () => (f(z()), f(h()), f(y())),
    () => {
      v(g, he(z(), { enableTime: h(), setTimeTo: y() }));
    }
  ), $(), ee();
  var o = Oe(), W = Q(o);
  {
    let B = R(() => _() ? "clock" : "calendar");
    ke(W, {
      get disabled() {
        return m();
      },
      get readonly() {
        return b();
      },
      get error() {
        return j();
      },
      get placeholder() {
        return P();
      },
      get id() {
        return u();
      },
      get enableTime() {
        return h();
      },
      get timeOnly() {
        return _();
      },
      get focused() {
        return l(c);
      },
      get value() {
        return l(g);
      },
      get icon() {
        return l(B);
      },
      get anchor() {
        return l(p);
      },
      set anchor(n) {
        v(p, n);
      },
      $$events: {
        click(...n) {
          l(d)?.show?.apply(this, n);
        }
      },
      $$legacy: !0
    });
  }
  var A = E(W, 2);
  {
    let B = R(() => _() ? "fixed-to-anchor" : "no-anchor");
    te(
      ge(A, {
        get portalTarget() {
          return I();
        },
        get anchor() {
          return l(p);
        },
        get align() {
          return w();
        },
        get widthMode() {
          return l(B);
        },
        resizable: !1,
        $$events: {
          open: [
            function(n) {
              M.call(this, e, n);
            },
            a
          ],
          close: [
            function(n) {
              M.call(this, e, n);
            },
            r
          ]
        },
        children: (n, pe) => {
          var F = me(), le = Q(F);
          {
            var re = (H) => {
              be(H, {
                get useKeyboardShortcuts() {
                  return i();
                },
                get ignoreTimezones() {
                  return x();
                },
                get enableTime() {
                  return h();
                },
                get timeOnly() {
                  return _();
                },
                get setTimeTo() {
                  return y();
                },
                get startDayOfWeek() {
                  return l(O);
                },
                get calendarLabels() {
                  return s();
                },
                get value() {
                  return l(g);
                },
                $$events: {
                  change(ne) {
                    M.call(this, e, ne);
                  }
                }
              });
            };
            Z(le, (H) => {
              l(c) && H(re);
            });
          }
          D(n, F);
        },
        $$slots: { default: !0 },
        $$legacy: !0
      }),
      (n) => v(d, n),
      () => l(d)
    );
  }
  D(C, o), ae();
}
export {
  ze as D
};
