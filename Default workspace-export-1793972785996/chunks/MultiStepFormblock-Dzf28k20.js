import { g as wt, p as u, h as q, _ as Ct, l as m, i as Z, j as t, k as kt, m as Pt, S as a, n as Mt, q as O, T as tt, d as P, H as g, $ as Tt, w as At, x as G, ao as Ft, y as zt, z as v, aa as Bt, aT as et, B as b, s as M, u as ot, A as S, r as Dt, t as It, a as Rt, cO as jt, aQ as qt, f as H } from "./index-quCB9sGT.js";
import { a as Ot, F as Gt } from "./FormBlockComponent-D0xmqYxu.js";
var Ht = H("<!> <!>", 1), Nt = H("<div></div>"), Qt = H("<!> <!> <!> <!>", 1);
function Jt(rt, s) {
  wt(s, !1);
  const y = () => G(V, "$component", T), N = () => G(Ft, "$builderStore", T), at = () => G(W, "$context", T), [T, st] = zt(), A = v(), F = v(), z = v(), x = v();
  let w = u(s, "actionType", 8), nt = u(s, "rowId", 8), lt = u(s, "noRowsMessage", 8), Q = u(s, "steps", 8), f = u(s, "dataSource", 8), U = u(s, "buttonPosition", 8, "bottom"), ct = u(s, "size", 8);
  const { fetchDatasourceSchema: it, generateGoldenSample: ut } = q("sdk"), V = q("component"), W = q("context"), E = Bt(1);
  Ct("current-step", E);
  let C = v();
  const J = () => {
    const e = et(V).id, c = et(W)[`${e}-provider`]?.rows || [], r = ut(c);
    return { [`${e}-repeater`]: r };
  }, dt = (e, c, r) => {
    if (!c)
      return;
    let i = Math.min(r || 0, e.length - 1);
    i = Math.max(i, 0), E.set(i + 1);
  }, pt = async (e) => {
    b(C, await it(e) || {});
  }, mt = (e, c) => e?.length ? e.filter((r) => r.active) : Object.values(c || {}).filter((r) => !r.autocolumn).map((r) => ({ name: r.name, active: !0 })), gt = (e, c, r) => {
    const i = e?.length ? e : [{}];
    return i.map((B, k) => {
      const { title: D, fields: $, buttons: o } = B, _ = jt({
        _id: r,
        stepCount: i.length,
        currentStep: k,
        actionType: w(),
        dataSource: f()
      });
      return {
        ...B,
        _stepId: qt(),
        fields: mt($ || [], c),
        title: D ?? _.title,
        buttons: o || _.buttons
      };
    });
  };
  m(() => y(), () => {
    b(A, y().id);
  }), m(() => y(), () => {
    b(F, y().selected);
  }), m(() => N(), () => {
    b(z, N().metadata?.step);
  }), m(() => Z(f()), () => {
    pt(f());
  }), m(() => (Z(Q()), t(C), t(A)), () => {
    b(x, gt(Q(), t(C), t(A)));
  }), m(() => (t(x), t(F), t(z)), () => {
    dt(t(x), t(F), t(z));
  }), kt();
  var ft = { getAdditionalDataContext: J };
  Pt(), Ot(rt, {
    get actionType() {
      return w();
    },
    get dataSource() {
      return f();
    },
    get rowId() {
      return nt();
    },
    get noRowsMessage() {
      return lt();
    },
    children: (e, c) => {
      {
        let r = g(() => ({
          size: ct(),
          dataSource: f(),
          actionType: w() === "Create" ? "Create" : "Update",
          readonly: w() === "View"
        }));
        a(e, {
          type: "form",
          context: "form",
          get props() {
            return t(r);
          },
          styles: {
            normal: {
              width: "600px",
              "margin-left": "auto",
              "margin-right": "auto"
            }
          },
          children: (i, B) => {
            var k = Mt(), D = O(k);
            tt(D, 3, () => t(x), ($) => $._stepId, ($, o, _) => {
              {
                let _t = g(() => ({
                  step: t(_) + 1,
                  _instanceName: `Step ${t(_) + 1}`
                }));
                a($, {
                  type: "formstep",
                  get props() {
                    return t(_t);
                  },
                  children: (ht, Ut) => {
                    a(ht, {
                      type: "container",
                      props: {
                        gap: "M",
                        direction: "column",
                        hAlign: "stretch",
                        vAlign: "top",
                        size: "shrink"
                      },
                      children: (vt, Vt) => {
                        var K = Qt(), L = O(K);
                        a(L, {
                          type: "container",
                          props: { direction: "column", gap: "S" },
                          order: 0,
                          children: (n, I) => {
                            a(n, {
                              type: "container",
                              props: {
                                direction: "row",
                                hAlign: "stretch",
                                vAlign: "center",
                                gap: "M",
                                wrap: !0
                              },
                              order: 0,
                              children: (d, R) => {
                                var l = Ht(), p = O(l);
                                {
                                  let h = g(() => (t(o), S(() => ({ text: `## ${t(o).title}` }))));
                                  a(p, {
                                    type: "textv2",
                                    get props() {
                                      return t(h);
                                    }
                                  });
                                }
                                var j = M(p, 2);
                                {
                                  var yt = (h) => {
                                    {
                                      let xt = g(() => (t(o), S(() => ({ buttons: t(o).buttons }))));
                                      a(h, {
                                        type: "buttongroup",
                                        get props() {
                                          return t(xt);
                                        }
                                      });
                                    }
                                  };
                                  ot(j, (h) => {
                                    U() === "top" && h(yt);
                                  });
                                }
                                P(d, l);
                              },
                              $$slots: { default: !0 }
                            });
                          },
                          $$slots: { default: !0 }
                        });
                        var X = M(L, 2);
                        {
                          let n = g(() => (t(o), S(() => ({ text: t(o).desc }))));
                          a(X, {
                            type: "textv2",
                            get props() {
                              return t(n);
                            },
                            order: 1
                          });
                        }
                        var Y = M(X, 2);
                        a(Y, {
                          type: "container",
                          order: 2,
                          children: (n, I) => {
                            var d = Nt();
                            let R;
                            tt(d, 7, () => (t(o), S(() => t(o).fields)), (l, p) => `${l.field || l.name}_${p}`, (l, p, j) => {
                              Gt(l, {
                                get field() {
                                  return t(p);
                                },
                                get schema() {
                                  return t(C);
                                },
                                get order() {
                                  return t(j);
                                }
                              });
                            }), Dt(d), It((l) => R = Rt(d, 1, "form-block fields svelte-6gdv45", null, R, l), [() => ({ mobile: at().device.mobile })]), P(n, d);
                          },
                          $$slots: { default: !0 }
                        });
                        var bt = M(Y, 2);
                        {
                          var St = (n) => {
                            {
                              let I = g(() => (t(o), S(() => ({
                                buttons: t(o).buttons,
                                collapsed: t(o).buttonsCollapsed,
                                collapsedText: t(o).buttonsCollapsedText
                              }))));
                              a(n, {
                                type: "buttongroup",
                                get props() {
                                  return t(I);
                                },
                                order: 3
                              });
                            }
                          };
                          ot(bt, (n) => {
                            U() === "bottom" && n(St);
                          });
                        }
                        P(vt, K);
                      },
                      $$slots: { default: !0 }
                    });
                  },
                  $$slots: { default: !0 }
                });
              }
            }), P(i, k);
          },
          $$slots: { default: !0 }
        });
      }
    },
    $$slots: { default: !0 }
  }), Tt(s, "getAdditionalDataContext", J);
  var $t = At(ft);
  return st(), $t;
}
export {
  Jt as default
};
