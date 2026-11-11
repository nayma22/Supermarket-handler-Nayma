import { g as re, p as n, a0 as fe, z as U, o as se, l as ee, B as N, i as Y, k as me, m as ie, c as F, a1 as pe, r as z, s as te, u as $, t as le, j as u, a as he, a3 as D, bB as be, e as a, Z as M, d as X, w as de, I as ne, cP as P, f as ce, n as ae, q as ue, H as ge, A as _, d2 as ve } from "./index-quCB9sGT.js";
import { F as _e } from "./Field-Dj4x-6nw.js";
var ye = ce('<span class="spectrum-Stepper-buttons"><button class="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-Stepper-stepUp" type="button" tabindex="-1"><!></button> <button class="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-Stepper-stepDown" type="button" tabindex="-1"><!></button></span>'), xe = ce('<div><div class="spectrum-Textfield spectrum-Stepper-textfield"><input type="number" class="spectrum-Textfield-input spectrum-Stepper-input"/></div> <!></div>');
function Se(j, t) {
  re(t, !1);
  let f = n(t, "value", 8, null), Z = n(t, "placeholder", 8, null), h = n(t, "disabled", 8, !1), G = n(t, "id", 8, null), m = n(t, "readonly", 8, !1), J = n(t, "updateOnChange", 8, !0), E = n(t, "quiet", 8, !1), g = n(t, "min", 8), v = n(t, "max", 8), c = n(t, "step", 12), K = n(t, "hideButtons", 8, !1);
  const L = fe();
  let x = U(!1), T, I, k = U(f());
  const l = (e) => {
    if (m())
      return;
    const b = parseFloat(e);
    e = isNaN(b) ? null : b, e != null && (g() != null && e < g() ? e = g() : v() != null && e > v() && (e = v())), L("change", e), N(k, e);
  }, A = () => {
    m() || N(x, !0);
  }, S = (e) => {
    m() || (N(x, !1), l(e.target.value));
  }, Q = (e) => {
    m() || !J() || l(e.target.value);
  }, R = (e) => {
    m() || e.key === "Enter" && l(e.target.value);
  }, B = () => {
    m() || h() || (f() == null || isNaN(f()) ? l(c()) : l(f() + c()));
  }, C = () => {
    m() || h() || (f() == null || isNaN(f()) ? l(c()) : l(f() - c()));
  }, o = () => {
    T && (clearTimeout(T), T = void 0), I && (clearInterval(I), I = void 0);
  }, r = (e) => {
    m() || h() || (e(), T = setTimeout(
      () => {
        I = setInterval(e, 75);
      },
      300
    ));
  }, p = (e, b) => {
    e.detail === 0 && b();
  };
  se(() => {
    o();
  }), ee(() => Y(f()), () => {
    N(k, f());
  }), ee(() => Y(c()), () => {
    c(c() == null || isNaN(c()) ? 1 : c());
  }), me(), ie();
  var O = xe();
  let V;
  var q = F(O), s = F(q);
  pe(s), z(q);
  var w = te(q, 2);
  {
    var H = (e) => {
      var b = ye(), d = F(b), y = F(d);
      ne(y, { name: "caret-up", size: "XS" }), z(d);
      var i = te(d, 2), oe = F(i);
      ne(oe, { name: "caret-down", size: "XS" }), z(i), z(b), le(() => {
        d.disabled = h(), i.disabled = h();
      }), a("mousedown", d, P(() => r(B))), a("mouseup", d, o), a("mouseleave", d, o), a("touchstart", d, P(() => r(B))), a("touchend", d, o), a("touchcancel", d, o), a("click", d, (W) => p(W, B)), a("mousedown", i, P(() => r(C))), a("mouseup", i, o), a("mouseleave", i, o), a("touchstart", i, P(() => r(C))), a("touchend", i, o), a("touchcancel", i, o), a("click", i, (W) => p(W, C)), X(e, b);
    };
    $(w, (e) => {
      K() || e(H);
    });
  }
  z(O), le(
    (e) => {
      V = he(O, 1, "spectrum-Stepper svelte-q400ii", null, V, e), s.disabled = h(), s.readOnly = m(), D(s, "id", G()), D(s, "placeholder", Z() || ""), D(s, "min", g()), D(s, "max", v()), D(s, "step", c());
    },
    [
      () => ({
        "spectrum-Stepper--quiet": E(),
        "is-disabled": h(),
        "is-focused": u(x)
      })
    ]
  ), be(s, () => u(k), (e) => N(k, e)), a("click", s, function(e) {
    M.call(this, t, e);
  }), a("blur", s, function(e) {
    M.call(this, t, e);
  }), a("focus", s, function(e) {
    M.call(this, t, e);
  }), a("input", s, function(e) {
    M.call(this, t, e);
  }), a("keyup", s, function(e) {
    M.call(this, t, e);
  }), a("blur", s, S), a("focus", s, A), a("input", s, Q), a("keyup", s, R), X(j, O), de();
}
function Ie(j, t) {
  re(t, !1);
  let f = n(t, "field", 8), Z = n(t, "label", 8), h = n(t, "placeholder", 8), G = n(t, "disabled", 8, !1), m = n(t, "readonly", 8, !1), J = n(t, "validation", 8), E = n(t, "defaultValue", 8), g = n(t, "min", 8), v = n(t, "max", 8), c = n(t, "step", 8, 1), K = n(t, "enableStepper", 8, !1), L = n(t, "onChange", 8), x = n(t, "runOnInput", 8, !1), T = n(t, "debounceMs", 8, 500), I = n(t, "span", 8), k = n(t, "helpText", 8, null), l = U(), A = U(), S;
  const Q = (r) => r == null || isNaN(r) ? null : parseFloat(r), R = (r) => r == null ? r : g() != null && r < g() ? g() : v() != null && r > v() ? v() : r, B = (r) => {
    const p = R(r.detail);
    u(A).setValue(p) && C(p);
  }, C = (r) => {
    S && clearTimeout(S), S = setTimeout(
      () => {
        L()?.({ value: r });
      },
      Number(T()) || 0
    );
  }, o = (r) => {
    x() && C(r.target.value);
  };
  se(() => {
    S && clearTimeout(S);
  }), ie();
  {
    let r = ge(() => (Y(E()), _(() => Q(E()))));
    _e(j, {
      get label() {
        return Z();
      },
      get field() {
        return f();
      },
      get disabled() {
        return G();
      },
      get readonly() {
        return m();
      },
      get validation() {
        return J();
      },
      get defaultValue() {
        return u(r);
      },
      get span() {
        return I();
      },
      get helpText() {
        return k();
      },
      type: "number",
      get fieldState() {
        return u(l);
      },
      set fieldState(p) {
        N(l, p);
      },
      get fieldApi() {
        return u(A);
      },
      set fieldApi(p) {
        N(A, p);
      },
      children: (p, O) => {
        var V = ae(), q = ue(V);
        {
          var s = (w) => {
            var H = ae(), e = ue(H);
            {
              var b = (y) => {
                Se(y, {
                  updateOnChange: !1,
                  get value() {
                    return u(l), _(() => u(l).value);
                  },
                  get disabled() {
                    return u(l), _(() => u(l).disabled);
                  },
                  get readonly() {
                    return u(l), _(() => u(l).readonly);
                  },
                  get id() {
                    return u(l), _(() => u(l).fieldId);
                  },
                  get placeholder() {
                    return h();
                  },
                  get min() {
                    return g();
                  },
                  get max() {
                    return v();
                  },
                  get step() {
                    return c();
                  },
                  $$events: {
                    change: B,
                    input(...i) {
                      (x() ? o : void 0)?.apply(this, i);
                    }
                  }
                });
              }, d = (y) => {
                ve(y, {
                  updateOnChange: !1,
                  get value() {
                    return u(l), _(() => u(l).value);
                  },
                  get disabled() {
                    return u(l), _(() => u(l).disabled);
                  },
                  get readonly() {
                    return u(l), _(() => u(l).readonly);
                  },
                  get id() {
                    return u(l), _(() => u(l).fieldId);
                  },
                  get placeholder() {
                    return h();
                  },
                  type: "number",
                  $$events: {
                    change: B,
                    input(...i) {
                      (x() ? o : void 0)?.apply(this, i);
                    }
                  }
                });
              };
              $(e, (y) => {
                K() ? y(b) : y(d, !1);
              });
            }
            X(w, H);
          };
          $(q, (w) => {
            u(l) && w(s);
          });
        }
        X(p, V);
      },
      $$slots: { default: !0 },
      $$legacy: !0
    });
  }
  de();
}
export {
  Ie as default
};
