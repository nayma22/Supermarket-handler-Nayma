import { g as ge, p as l, cj as fe, l as T, i as o, j as e, k as me, m as ve, n as C, q as w, u as O, d as k, B as c, b5 as I, A as i, w as he, z as g, H as f } from "./index-quCB9sGT.js";
import { C as be } from "./CheckboxGroup-0mUXpk8l.js";
import { M as pe } from "./Multiselect-CjqdfLDG.js";
import { F as ye } from "./Field-Dj4x-6nw.js";
import { g as _e } from "./optionsParser-DQ1Z-lLz.js";
function we(Y, t) {
  ge(t, !1);
  const m = g(), V = g(), p = g();
  let E = l(t, "field", 8), J = l(t, "label", 24, () => {
  }), K = l(t, "placeholder", 24, () => {
  }), N = l(t, "disabled", 8, !1), Q = l(t, "readonly", 8, !1), U = l(t, "validation", 24, () => {
  }), P = l(t, "defaultValue", 24, () => {
  }), v = l(t, "optionsSource", 8, "schema"), F = l(t, "dataProvider", 24, () => {
  }), L = l(t, "labelColumn", 24, () => {
  }), M = l(t, "valueColumn", 24, () => {
  }), j = l(t, "customOptions", 8), W = l(t, "autocomplete", 8, !1), q = l(t, "onChange", 24, () => {
  }), y = l(t, "optionsType", 8, "select"), X = l(t, "direction", 8, "vertical"), Z = l(t, "columns", 8, 1), $ = l(t, "span", 24, () => {
  }), ee = l(t, "helpText", 24, () => {
  }), B = l(t, "showSelectAll", 8, !1), G = l(t, "selectAllText", 8, "Select all"), te = l(t, "wrapText", 8, !1), a = g(), _ = g(), h = g();
  const le = fe("picker"), ae = (r) => r ? Array.isArray(r) ? r.slice() : r.split(",").map((u) => u.trim()) : [], R = (r, u) => u[r], z = (r) => {
    const u = e(_)?.setValue(r.detail);
    q() && u && q()({ value: r.detail });
  };
  T(() => o(v()), () => {
    c(m, v() == null || v() === "schema");
  }), T(() => o(P()), () => {
    c(V, ae(P()));
  }), T(
    () => (o(v()), e(h), o(F()), o(L()), o(M()), o(j())),
    () => {
      c(p, _e(v(), e(h), F(), L(), M(), j()));
    }
  ), me(), ve(), ye(Y, {
    get field() {
      return E();
    },
    get label() {
      return J();
    },
    get disabled() {
      return N();
    },
    get readonly() {
      return Q();
    },
    get validation() {
      return U();
    },
    get span() {
      return $();
    },
    get helpText() {
      return ee();
    },
    get defaultValue() {
      return e(V);
    },
    get type() {
      return o(I), i(() => I.ARRAY);
    },
    get fieldState() {
      return e(a);
    },
    set fieldState(r) {
      c(a, r);
    },
    get fieldApi() {
      return e(_);
    },
    set fieldApi(r) {
      c(_, r);
    },
    get fieldSchema() {
      return e(h);
    },
    set fieldSchema(r) {
      c(h, r);
    },
    children: (r, u) => {
      var D = C(), re = w(D);
      {
        var ne = (A) => {
          var H = C(), ie = w(H);
          {
            var oe = (s) => {
              {
                let b = f(() => (e(a), i(() => e(a).value || []))), x = f(() => e(m) ? (n) => n : (n) => n.label), S = f(() => e(m) ? (n) => n : (n) => n.value);
                pe(s, {
                  get value() {
                    return e(b);
                  },
                  get getOptionLabel() {
                    return e(x);
                  },
                  get getOptionValue() {
                    return e(S);
                  },
                  get id() {
                    return e(a), i(() => e(a).fieldId);
                  },
                  get disabled() {
                    return e(a), i(() => e(a).disabled);
                  },
                  get readonly() {
                    return e(a), i(() => e(a).readonly);
                  },
                  get placeholder() {
                    return K();
                  },
                  get options() {
                    return e(p);
                  },
                  get autocomplete() {
                    return W();
                  },
                  get searchPlaceholder() {
                    return i(() => le.searchPlaceholder);
                  },
                  get showSelectAll() {
                    return B();
                  },
                  get selectAllText() {
                    return G();
                  },
                  get wrapText() {
                    return te();
                  },
                  $$events: { change: z }
                });
              }
            }, de = (s) => {
              var b = C(), x = w(b);
              {
                var S = (n) => {
                  {
                    let ue = f(() => (e(a), i(() => e(a).value || []))), se = f(() => e(m) ? (d) => d : (d) => R("label", d)), ce = f(() => e(m) ? (d) => d : (d) => R("value", d));
                    be(n, {
                      get value() {
                        return e(ue);
                      },
                      get disabled() {
                        return e(a), i(() => e(a).disabled);
                      },
                      get readonly() {
                        return e(a), i(() => e(a).readonly);
                      },
                      get options() {
                        return e(p);
                      },
                      get direction() {
                        return X();
                      },
                      get columns() {
                        return Z();
                      },
                      get getOptionLabel() {
                        return e(se);
                      },
                      get getOptionValue() {
                        return e(ce);
                      },
                      get showSelectAll() {
                        return B();
                      },
                      get selectAllText() {
                        return G();
                      },
                      $$events: { change: z }
                    });
                  }
                };
                O(
                  x,
                  (n) => {
                    y() === "checkbox" && n(S);
                  },
                  !0
                );
              }
              k(s, b);
            };
            O(ie, (s) => {
              !y() || y() === "select" ? s(oe) : s(de, !1);
            });
          }
          k(A, H);
        };
        O(re, (A) => {
          e(a) && A(ne);
        });
      }
      k(r, D);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), he();
}
export {
  we as default
};
