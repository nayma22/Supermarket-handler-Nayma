import { g as se, p as n, h as V, l as z, j as e, k as ie, m as de, q as C, Y as oe, d9 as ue, n as D, u as H, d as g, B as o, w as ce, x as R, y as fe, z as u, H as S, i as ge, A as c, s as ve, f as W, cV as he, a4 as me, a5 as _e, t as be, b as pe, c as Se, da as xe, r as ye } from "./index-quCB9sGT.js";
import { F as Ae } from "./Field-Dj4x-6nw.js";
var $e = W('<div class="signature-field svelte-14vadym"><!></div>'), ke = W("<!> <!>", 1);
function Fe(Y, l) {
  se(l, !1);
  const B = () => R(Z, "$context", M), x = () => R(X, "$builderStore", M), [M, E] = fe(), y = u(), A = u();
  let G = n(l, "field", 8), $ = n(l, "label", 8), J = n(l, "disabled", 8, !1), K = n(l, "readonly", 8, !1), L = n(l, "validation", 8), v = n(l, "onChange", 8), N = n(l, "span", 8), O = n(l, "helpText", 8, null), q = n(l, "buttonText", 8, "Add signature"), t = u(), h = u(), m = u(), k = u();
  const { API: Q, notificationStore: U, builderStore: X } = V("sdk"), Z = V("context"), T = V("form"), ee = async (a) => {
    try {
      const s = a.toFile();
      let r;
      if (s) {
        let _ = new FormData();
        _.append("file", s);
        let i = T?.dataSource?.tableId;
        T?.dataSource?.type === "viewV2" && (i = T.dataSource.id);
        const b = await Q.uploadAttachment(i, _), [F] = b;
        r = F;
      } else
        r = null;
      const w = e(h).setValue(r);
      v() && w && v()({ value: r });
    } catch (s) {
      U.actions.error("There was a problem saving your signature"), console.error(s);
    }
  }, te = async () => {
    const a = e(h).setValue(null);
    v() && a && v()({ value: null });
  };
  z(() => B(), () => {
    o(y, B()?.device?.theme);
  }), z(() => e(y), () => {
    o(A, !e(y)?.includes("light"));
  }), ie(), de();
  var I = ke(), P = C(I);
  {
    let a = S(() => (ge($()), e(m), c(() => $() || e(m)?.name || ""))), s = S(() => (e(t), c(() => e(t)?.value)));
    oe(
      ue(P, {
        onConfirm: ee,
        get title() {
          return e(a);
        },
        get value() {
          return e(s);
        },
        get darkMode() {
          return e(A);
        },
        $$legacy: !0
      }),
      (r) => o(k, r),
      () => e(k)
    );
  }
  var ae = ve(P, 2);
  Ae(ae, {
    get label() {
      return $();
    },
    get field() {
      return G();
    },
    get disabled() {
      return J();
    },
    get readonly() {
      return K();
    },
    get validation() {
      return L();
    },
    get span() {
      return N();
    },
    get helpText() {
      return O();
    },
    type: "signature_single",
    defaultValue: [],
    get fieldState() {
      return e(t);
    },
    set fieldState(a) {
      o(t, a);
    },
    get fieldApi() {
      return e(h);
    },
    set fieldApi(a) {
      o(h, a);
    },
    get fieldSchema() {
      return e(m);
    },
    set fieldSchema(a) {
      o(m, a);
    },
    children: (a, s) => {
      var r = D(), w = C(r);
      {
        var _ = (i) => {
          var b = D(), F = C(b);
          {
            var le = (d) => {
              he(d, {
                fullWidth: !0,
                get disabled() {
                  return e(t), c(() => e(t).disabled);
                },
                $$events: {
                  click: () => {
                    x().inBuilder || e(k).show();
                  }
                },
                children: (f, j) => {
                  me();
                  var p = _e();
                  be(() => pe(p, q() ? q() : "Add signature")), g(f, p);
                },
                $$slots: { default: !0 }
              });
            }, re = (d) => {
              var f = $e(), j = Se(f);
              {
                let p = S(() => (x(), e(t), c(() => x().inBuilder || e(t).disabled))), ne = S(() => (e(t), c(() => e(t)?.value)));
                xe(j, {
                  get darkMode() {
                    return e(A);
                  },
                  get disabled() {
                    return e(p);
                  },
                  editable: !1,
                  get value() {
                    return e(ne);
                  },
                  $$events: { clear: te }
                });
              }
              ye(f), g(d, f);
            };
            H(F, (d) => {
              e(t), c(() => Array.isArray(e(t)?.value) && !e(t)?.value?.length || !e(t)?.value) ? d(le) : d(re, !1);
            });
          }
          g(i, b);
        };
        H(w, (i) => {
          e(t) && i(_);
        });
      }
      g(a, r);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), g(Y, I), ce(), E();
}
export {
  Fe as default
};
