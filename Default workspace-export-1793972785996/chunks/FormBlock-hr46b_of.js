import { g as it, p as e, h as J, l as T, i as r, k as ct, m as ut, n as vt, q as G, u as O, d as V, w as dt, y as gt, A as lt, B as p, S as f, j as n, s as W, T as bt, U as pt, r as ht, t as _t, a as yt, z as h, f as at, x as ft, H as b, $ as xt, aT as st, cC as wt } from "./index-quCB9sGT.js";
import { F as Bt, a as Ct } from "./FormBlockComponent-D0xmqYxu.js";
import Tt from "./Placeholder-DUu9yTu1.js";
var St = at("<!> <!>", 1), Pt = at("<div></div> <!>", 1), kt = at("<!> <!> <!>", 1);
function Ft(K, t) {
  it(t, !1);
  const L = () => ft(Y, "$context", N), [N, Q] = gt(), _ = h();
  let S = e(t, "dataSource", 8), P = e(t, "actionType", 8), I = e(t, "size", 8), m = e(t, "disabled", 8), l = e(t, "fields", 8), y = e(t, "title", 8), M = e(t, "description", 8), v = e(t, "buttons", 8), x = e(t, "buttonPosition", 8, "bottom"), U = e(t, "buttonsCollapsed", 8), R = e(t, "buttonsCollapsedText", 8), X = e(t, "schema", 8);
  const Y = J("context");
  let k = h();
  T(() => (r(v()), r(y())), () => {
    p(_, v() || y());
  }), ct(), ut();
  var j = vt(), q = G(j);
  {
    var Z = (u) => {
      {
        let H = b(() => ({
          actionType: P() === "Create" ? "Create" : "Update",
          dataSource: S(),
          size: I(),
          disabled: m(),
          readonly: !m() && P() === "View"
        }));
        f(u, {
          type: "form",
          get props() {
            return n(H);
          },
          styles: {
            normal: {
              width: "600px",
              "margin-left": "auto",
              "margin-right": "auto"
            }
          },
          context: "form",
          get id() {
            return n(k);
          },
          set id(w) {
            p(k, w);
          },
          children: (w, tt) => {
            f(w, {
              type: "container",
              props: {
                direction: "column",
                hAlign: "stretch",
                vAlign: "top",
                gap: "M"
              },
              children: (et, rt) => {
                var F = kt(), E = G(F);
                {
                  var B = (s) => {
                    f(s, {
                      type: "container",
                      props: { direction: "column", gap: "S" },
                      order: 0,
                      children: (C, D) => {
                        f(C, {
                          type: "container",
                          props: {
                            direction: "row",
                            hAlign: "stretch",
                            vAlign: "center",
                            gap: "M",
                            wrap: !0
                          },
                          order: 0,
                          children: (o, a) => {
                            var i = St(), c = G(i);
                            {
                              let g = b(() => ({ text: y() ? `## ${y()}` : "" }));
                              f(c, {
                                type: "textv2",
                                get props() {
                                  return n(g);
                                },
                                order: 0
                              });
                            }
                            var d = W(c, 2);
                            {
                              var z = (g) => {
                                {
                                  let mt = b(() => ({
                                    buttons: v(),
                                    collapsed: U(),
                                    collapsedText: R()
                                  }));
                                  f(g, {
                                    type: "buttongroup",
                                    get props() {
                                      return n(mt);
                                    },
                                    order: 0
                                  });
                                }
                              };
                              O(d, (g) => {
                                x() === "top" && g(z);
                              });
                            }
                            V(o, i);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  };
                  O(E, (s) => {
                    n(_) && s(B);
                  });
                }
                var A = W(E, 2);
                {
                  var ot = (s) => {
                    {
                      let C = b(() => ({ text: M() }));
                      f(s, {
                        type: "textv2",
                        get props() {
                          return n(C);
                        },
                        order: 1
                      });
                    }
                  };
                  O(A, (s) => {
                    M() && s(ot);
                  });
                }
                var nt = W(A, 2);
                f(nt, {
                  type: "container",
                  props: { direction: "column", hAlign: "stretch", vAlign: "top" },
                  children: (s, C) => {
                    var D = Pt(), o = G(D);
                    let a;
                    bt(o, 5, l, pt, (d, z, g) => {
                      Bt(d, {
                        get field() {
                          return n(z);
                        },
                        get schema() {
                          return X();
                        },
                        order: g
                      });
                    }), ht(o);
                    var i = W(o, 2);
                    {
                      var c = (d) => {
                        {
                          let z = b(() => ({
                            buttons: v(),
                            collapsed: U(),
                            collapsedText: R()
                          })), g = b(() => (r(l()), lt(() => l().length + 1)));
                          f(d, {
                            type: "buttongroup",
                            get props() {
                              return n(z);
                            },
                            styles: { normal: { "margin-top": "20px" } },
                            get order() {
                              return n(g);
                            }
                          });
                        }
                      };
                      O(i, (d) => {
                        x() === "bottom" && d(c);
                      });
                    }
                    _t((d) => a = yt(o, 1, "form-block fields svelte-1s49e3f", null, a, d), [() => ({ mobile: L().device.mobile })]), V(s, D);
                  },
                  $$slots: { default: !0 }
                }), V(et, F);
              },
              $$slots: { default: !0 }
            });
          },
          $$slots: { default: !0 },
          $$legacy: !0
        });
      }
    }, $ = (u) => {
      Tt(u, {
        text: "Choose your table and add some fields to your form to get started"
      });
    };
    O(q, (u) => {
      r(l()), lt(() => l()?.length) ? u(Z) : u($, !1);
    });
  }
  V(K, j), dt(), Q();
}
function Ot(K, t) {
  it(t, !1);
  const L = () => ft(F, "$component", N), [N, Q] = gt(), _ = h(), S = h(), P = h(), I = h();
  let m = e(t, "actionType", 8), l = e(t, "dataSource", 8), y = e(t, "size", 8), M = e(t, "disabled", 8), v = e(t, "fields", 8), x = e(t, "buttons", 8), U = e(t, "buttonPosition", 8), R = e(t, "title", 8), X = e(t, "description", 8), Y = e(t, "rowId", 8), k = e(t, "actionUrl", 8), j = e(t, "noRowsMessage", 8), q = e(t, "notificationOverride", 8), Z = e(t, "buttonsCollapsed", 8), $ = e(t, "buttonsCollapsedText", 8), u = e(t, "showDeleteButton", 8), H = e(t, "showSaveButton", 8), w = e(t, "saveButtonLabel", 8), tt = e(t, "deleteButtonLabel", 8);
  const { fetchDatasourceSchema: et, generateGoldenSample: rt } = J("sdk"), F = J("component"), E = J("context");
  let B = h();
  const A = () => {
    const o = st(F).id, a = st(E)[`${o}-provider`]?.rows || [], i = rt(a);
    return { [`${o}-repeater`]: i };
  }, ot = (o) => o ? o.map((a) => typeof a == "string" ? { name: a, active: !0 } : {
    ...a,
    active: typeof a?.active != "boolean" ? !0 : a?.active
  }) : [], nt = (o, a) => {
    if (!a)
      return [];
    let i = [];
    return (!o || o.length === 0) && Object.values(a).filter((c) => !c.autocolumn).forEach((c) => {
      i.push({ name: c.name, active: !0 });
    }), [...o, ...i].filter((c) => c.active);
  }, s = async (o) => {
    p(B, await et(o) || {});
  };
  T(() => r(l()), () => {
    s(l());
  }), T(() => L(), () => {
    p(_, L().id);
  }), T(() => r(v()), () => {
    p(S, ot(v()));
  }), T(() => (n(S), n(B)), () => {
    p(P, nt(n(S), n(B)));
  }), T(
    () => (r(x()), n(_), r(u()), r(H()), r(w()), r(tt()), r(q()), r(m()), r(k()), r(l())),
    () => {
      p(I, x() || wt({
        _id: n(_),
        showDeleteButton: u(),
        showSaveButton: H(),
        saveButtonLabel: w(),
        deleteButtonLabel: tt(),
        notificationOverride: q(),
        actionType: m(),
        actionUrl: k(),
        dataSource: l()
      }));
    }
  ), ct();
  var C = { getAdditionalDataContext: A };
  ut(), Ct(K, {
    get actionType() {
      return m();
    },
    get dataSource() {
      return l();
    },
    get rowId() {
      return Y();
    },
    get noRowsMessage() {
      return j();
    },
    children: (o, a) => {
      {
        let i = b(() => x() ? U() : "top");
        Ft(o, {
          get dataSource() {
            return l();
          },
          get actionType() {
            return m();
          },
          get size() {
            return y();
          },
          get disabled() {
            return M();
          },
          get fields() {
            return n(P);
          },
          get title() {
            return R();
          },
          get description() {
            return X();
          },
          get schema() {
            return n(B);
          },
          get buttons() {
            return n(I);
          },
          get buttonPosition() {
            return n(i);
          },
          get buttonsCollapsed() {
            return Z();
          },
          get buttonsCollapsedText() {
            return $();
          }
        });
      }
    },
    $$slots: { default: !0 }
  }), xt(t, "getAdditionalDataContext", A);
  var D = dt(C);
  return Q(), D;
}
export {
  Ot as default
};
