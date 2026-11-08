import { bL as Ke, g as Oe, p as i, h as L, bj as Qe, o as Re, l as F, i as s, j as r, k as Ue, m as We, n as T, q as k, u as V, d, w as Ze, x as le, y as $e, z as A, aa as se, H as he, A as f, B as p, cx as et, E as ye, c as _, aq as tt, r as b, Y as at, t as N, a3 as Se, a as xe, b as re, e as Fe, s as X, v as lt, f as q, I as ke } from "./index-quCB9sGT.js";
import Ae from "./Placeholder-DUu9yTu1.js";
import { I as st } from "./InnerForm-N1gFHgUV.js";
var rt = q("<label> </label>"), ot = q('<div class="error svelte-16ch0tk"><!> <span class="svelte-16ch0tk"> </span></div>'), it = q('<div class="helpText svelte-16ch0tk"><!> <span class="svelte-16ch0tk"> </span></div>'), nt = q("<!> <!>", 1), dt = q('<div><!> <div class="spectrum-Form-itemField svelte-16ch0tk"><!></div></div>');
function ct(Ie, e) {
  const Pe = Ke(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Oe(e, !1);
  const n = () => le(ze, "$component", J), Y = () => le(Be, "$formStep", J), oe = () => le(ve, "$fieldInfo", J), [J, Ce] = $e(), w = A(), ie = A(), ne = A();
  let de = i(e, "label", 24, () => {
  }), K = i(e, "field", 24, () => {
  }), o = i(e, "fieldState", 12), z = i(e, "fieldApi", 12), v = i(e, "fieldSchema", 12), O = i(e, "defaultValue", 24, () => {
  }), g = i(e, "type", 8), j = i(e, "disabled", 8, !1), I = i(e, "readonly", 8, !1), Q = i(e, "validation", 8), B = i(e, "span", 8, 6), ce = i(e, "helpText", 24, () => {
  });
  const fe = L("form"), Le = L("form-step"), Te = L("field-group"), { styleable: Ve, builderStore: qe, Provider: we } = L("sdk"), ze = L("component"), je = fe?.formApi, R = Te?.labelPosition || "above";
  let U = A(), W = A(!1), D = A();
  const Be = Le || se(1), ve = Qe({
    field: K() || n().name,
    type: g(),
    defaultValue: O(),
    disabled: j(),
    readonly: I(),
    validation: Q(),
    formStep: Y() || 1
  }), De = (a) => {
    p(U, je?.registerField(a.field, a.type, a.defaultValue, a.disabled, a.readonly, a.validation, a.formStep));
  }, Ee = (a) => {
    if (r(W)) {
      const Z = a.target;
      qe.actions.updateProp("label", Z.textContent);
    }
    p(W, !1);
  };
  Re(() => {
    z()?.deregister(), r(ie)?.();
  }), F(
    () => (s(K()), n(), s(g()), s(O()), s(j()), s(I()), s(Q()), Y()),
    () => {
      ve.set({
        field: K() || n().name,
        type: g(),
        defaultValue: O(),
        disabled: j(),
        readonly: I(),
        validation: Q(),
        formStep: Y() || 1
      });
    }
  ), F(() => oe(), () => {
    De(oe());
  }), F(() => r(U), () => {
    p(ie, r(U)?.subscribe((a) => {
      o(a?.fieldState), z(a?.fieldApi), v(a?.fieldSchema);
    }));
  }), F(() => s(v()), () => {
    p(w, v()?.type !== "formula" && v()?.type !== "bigint" ? v()?.type : "string");
  }), F(() => (n(), r(D)), () => {
    n().editing && r(D)?.focus();
  }), F(() => {
  }, () => {
    p(ne, R === "above" ? "" : `spectrum-FieldLabel--${R}`);
  }), Ue(), We();
  {
    let a = he(() => (s(o()), f(() => ({ value: o()?.value }))));
    we(Ie, {
      get data() {
        return r(a);
      },
      children: (Z, ft) => {
        var ue = T(), Ge = k(ue);
        {
          var He = (h) => {
            {
              let u = he(() => (s(se), f(() => se(1))));
              st(h, {
                get disabled() {
                  return j();
                },
                get readonly() {
                  return I();
                },
                get currentStep() {
                  return r(u);
                },
                provideContext: !1,
                children: (E, $) => {
                  var P = T(), ee = k(P);
                  ct(ee, et(() => Pe, {
                    get fieldState() {
                      return o();
                    },
                    set fieldState(c) {
                      o(c);
                    },
                    get fieldApi() {
                      return z();
                    },
                    set fieldApi(c) {
                      z(c);
                    },
                    get fieldSchema() {
                      return v();
                    },
                    set fieldSchema(c) {
                      v(c);
                    },
                    children: (c, me) => {
                      var l = T(), t = k(l);
                      ye(t, e, "default", {}, null), d(c, l);
                    },
                    $$slots: { default: !0 },
                    $$legacy: !0
                  })), d(E, P);
                },
                $$slots: { default: !0 }
              });
            }
          }, Me = (h) => {
            var u = dt();
            let E;
            var $ = _(u);
            tt($, () => (n(), f(() => n().editing)), (l) => {
              var t = rt();
              let G;
              var te = _(t, !0);
              b(t), at(t, (m) => p(D, m), () => r(D)), N(
                (m) => {
                  Se(t, "contenteditable", (n(), f(() => n().editing))), Se(t, "for", (s(o()), f(() => o()?.fieldId))), G = xe(t, 1, `spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel ${r(ne)}`, "svelte-16ch0tk", G, m), re(te, de() || " ");
                },
                [() => ({ hidden: !de(), readonly: I() })]
              ), Fe("blur", t, function(...m) {
                (n().editing ? Ee : null)?.apply(this, m);
              }), Fe("input", t, () => p(W, !0)), d(l, t);
            });
            var P = X($, 2), ee = _(P);
            {
              var c = (l) => {
                Ae(l, {});
              }, me = (l) => {
                var t = T(), G = k(t);
                {
                  var te = (y) => {
                    Ae(y, {
                      text: "This Field setting is the wrong data type for this component"
                    });
                  }, m = (y) => {
                    var pe = nt(), _e = k(pe);
                    ye(_e, e, "default", {}, null);
                    var Ne = X(_e, 2);
                    {
                      var Xe = (S) => {
                        var x = ot(), H = _(x);
                        ke(H, {
                          name: "warning",
                          size: "XS",
                          color: "var(--spectrum-semantic-negative-color-default, var(--spectrum-global-color-red-500))"
                        });
                        var M = X(H, 2), C = _(M, !0);
                        b(M), b(x), N(() => re(C, (s(o()), f(() => o().error)))), d(S, x);
                      }, Ye = (S) => {
                        var x = T(), H = k(x);
                        {
                          var M = (C) => {
                            var ae = it(), be = _(ae);
                            ke(be, { name: "question" });
                            var ge = X(be, 2), Je = _(ge, !0);
                            b(ge), b(ae), N(() => re(Je, ce())), d(C, ae);
                          };
                          V(
                            H,
                            (C) => {
                              ce() && C(M);
                            },
                            !0
                          );
                        }
                        d(S, x);
                      };
                      V(Ne, (S) => {
                        s(o()), f(() => o().error) ? S(Xe) : S(Ye, !1);
                      });
                    }
                    d(y, pe);
                  };
                  V(
                    G,
                    (y) => {
                      r(w), s(g()), f(() => r(w) && r(w) !== g() && !["options", "longform"].includes(g())) ? y(te) : y(m, !1);
                    },
                    !0
                  );
                }
                d(l, t);
              };
              V(ee, (l) => {
                o() ? l(me, !1) : l(c);
              });
            }
            b(P), b(u), lt(u, (l, t) => Ve?.(l, t), () => n().styles), N((l) => E = xe(u, 1, "spectrum-Form-item svelte-16ch0tk", null, E, l), [
              () => ({
                "span-2": B() === 2,
                "span-3": B() === 3,
                "span-6": B() === 6 || !B(),
                above: R === "above"
              })
            ]), d(h, u);
          };
          V(Ge, (h) => {
            fe ? h(Me, !1) : h(He);
          });
        }
        d(Z, ue);
      },
      $$slots: { default: !0 }
    });
  }
  Ze(), Ce();
}
export {
  ct as F
};
