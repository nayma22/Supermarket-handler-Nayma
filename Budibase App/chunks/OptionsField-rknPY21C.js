import { g as ie, p as a, cj as oe, l as H, i as s, j as e, k as ue, m as de, n as S, q as x, u as C, d as V, B as c, w as se, z as f, cH as ge, A as n, H as m } from "./index-quCB9sGT.js";
import { R as ce } from "./RadioGroup-zVihoO2D.js";
import { F as fe } from "./Field-Dj4x-6nw.js";
import { g as me } from "./optionsParser-DQ1Z-lLz.js";
function _e(I, l) {
  ie(l, !1);
  const u = f(), b = f();
  let R = a(l, "field", 8), z = a(l, "label", 8), D = a(l, "placeholder", 8), E = a(l, "disabled", 8, !1), J = a(l, "readonly", 8, !1), p = a(l, "optionsType", 8, "select"), K = a(l, "validation", 8), M = a(l, "defaultValue", 8), g = a(l, "optionsSource", 8, "schema"), k = a(l, "dataProvider", 8), P = a(l, "labelColumn", 8), w = a(l, "valueColumn", 8), A = a(l, "customOptions", 8), N = a(l, "autocomplete", 8, !1), Q = a(l, "direction", 8, "vertical"), F = a(l, "onChange", 8), L = a(l, "sort", 8, !0), U = a(l, "span", 8), W = a(l, "helpText", 8, null), X = a(l, "wrapText", 8, !1), t = f(), _ = f(), v = f();
  const Y = oe("picker"), j = (i) => {
    const q = e(_).setValue(i.detail);
    F() && q && F()({ value: i.detail });
  };
  H(() => s(g()), () => {
    c(u, g() == null || g() === "schema");
  }), H(
    () => (s(g()), e(v), s(k()), s(P()), s(w()), s(A())),
    () => {
      c(b, me(g(), e(v), k(), P(), w(), A()));
    }
  ), ue(), de(), fe(I, {
    get field() {
      return R();
    },
    get label() {
      return z();
    },
    get disabled() {
      return E();
    },
    get readonly() {
      return J();
    },
    get validation() {
      return K();
    },
    get defaultValue() {
      return M();
    },
    get span() {
      return U();
    },
    get helpText() {
      return W();
    },
    type: "options",
    get fieldState() {
      return e(t);
    },
    set fieldState(i) {
      c(t, i);
    },
    get fieldApi() {
      return e(_);
    },
    set fieldApi(i) {
      c(_, i);
    },
    get fieldSchema() {
      return e(v);
    },
    set fieldSchema(i) {
      c(v, i);
    },
    children: (i, q) => {
      var B = S(), Z = x(B);
      {
        var $ = (y) => {
          var G = S(), ee = x(G);
          {
            var te = (d) => {
              {
                let h = m(() => e(u) ? (o) => o : (o) => o.label), O = m(() => e(u) ? (o) => o : (o) => o.value);
                ge(d, {
                  get value() {
                    return e(t), n(() => e(t).value);
                  },
                  get id() {
                    return e(t), n(() => e(t).fieldId);
                  },
                  get disabled() {
                    return e(t), n(() => e(t).disabled);
                  },
                  get readonly() {
                    return e(t), n(() => e(t).readonly);
                  },
                  get error() {
                    return e(t), n(() => e(t).error);
                  },
                  get options() {
                    return e(b);
                  },
                  get placeholder() {
                    return D();
                  },
                  get getOptionLabel() {
                    return e(h);
                  },
                  get getOptionValue() {
                    return e(O);
                  },
                  get autocomplete() {
                    return N();
                  },
                  get sort() {
                    return L();
                  },
                  get searchPlaceholder() {
                    return n(() => Y.searchPlaceholder);
                  },
                  get wrapText() {
                    return X();
                  },
                  $$events: { change: j }
                });
              }
            }, le = (d) => {
              var h = S(), O = x(h);
              {
                var o = (T) => {
                  {
                    let ae = m(() => e(u) ? (r) => r : (r) => r.label), re = m(() => e(u) ? (r) => r : (r) => r.label), ne = m(() => e(u) ? (r) => r : (r) => r.value);
                    ce(T, {
                      get value() {
                        return e(t), n(() => e(t).value);
                      },
                      get id() {
                        return e(t), n(() => e(t).fieldId);
                      },
                      get disabled() {
                        return e(t), n(() => e(t).disabled);
                      },
                      get readonly() {
                        return e(t), n(() => e(t).readonly);
                      },
                      get error() {
                        return e(t), n(() => e(t).error);
                      },
                      get options() {
                        return e(b);
                      },
                      get direction() {
                        return Q();
                      },
                      get getOptionLabel() {
                        return e(ae);
                      },
                      get getOptionTitle() {
                        return e(re);
                      },
                      get getOptionValue() {
                        return e(ne);
                      },
                      get sort() {
                        return L();
                      },
                      $$events: { change: j }
                    });
                  }
                };
                C(
                  O,
                  (T) => {
                    p() === "radio" && T(o);
                  },
                  !0
                );
              }
              V(d, h);
            };
            C(ee, (d) => {
              !p() || p() === "select" ? d(te) : d(le, !1);
            });
          }
          V(y, G);
        };
        C(Z, (y) => {
          e(t) && y($);
        });
      }
      V(i, B);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), se();
}
export {
  _e as default
};
