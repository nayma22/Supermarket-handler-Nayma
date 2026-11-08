import { g as jt, p as r, h as q, l as m, i as a, j as t, k as Gt, m as Vt, n as dt, q as C, u as L, d as y, $ as Et, w as Jt, z as o, aT as ct, B as i, R as Kt, S as s, A as h, s as N, H as d, cA as U, T as Qt, f as W } from "./index-quCB9sGT.js";
import { e as Xt, a as Yt } from "./blocks-CWLfm2_o.js";
var Zt = W("<!> <!>", 1), $t = W("<!> <!>", 1), te = W("<!> <!>", 1);
function ae(ut, e) {
  jt(e, !1);
  const j = o(), G = o(), V = o(), E = o();
  let w = r(e, "title", 8), x = r(e, "dataSource", 8), J = r(e, "searchColumns", 8), K = r(e, "filter", 8), gt = r(e, "sortColumn", 8), mt = r(e, "sortOrder", 8), ht = r(e, "paginate", 8), ft = r(e, "limit", 8), M = r(e, "showTitleButton", 8), pt = r(e, "titleButtonText", 8), Q = r(e, "titleButtonURL", 8), X = r(e, "titleButtonPeek", 8), vt = r(e, "cardTitle", 8), _t = r(e, "cardSubtitle", 8), kt = r(e, "cardDescription", 8), Ct = r(e, "cardImageURL", 8), Y = r(e, "linkCardTitle", 8), Z = r(e, "cardURL", 8), yt = r(e, "cardPeek", 8), O = r(e, "cardHorizontal", 8), wt = r(e, "showCardButton", 8), xt = r(e, "cardButtonText", 8), Bt = r(e, "cardButtonOnClick", 8), $ = r(e, "linkColumn", 8), tt = r(e, "noRowsMessage", 8), Rt = r(e, "autoRefresh", 8);
  const Tt = q("context"), { fetchDatasourceSchema: Pt, generateGoldenSample: bt } = q("sdk"), St = q("component");
  let B = o(), f = o(), R = o(), D = o(), n = o(), et = o(!1);
  const rt = () => {
    const l = ct(Tt)[t(f)]?.rows || [], c = bt(l);
    return { [`${ct(St).id}-repeater`]: c };
  }, At = (l, c, T, z) => {
    if (!l || !c || !T)
      return null;
    const p = z || "_id", H = c.split("/:");
    return H.length > 1 ? `${H[0]}/{{ ${U(T)}.${U(p)} }}` : c;
  }, Lt = async (l) => {
    l && i(D, await Pt(l, { enrichRelationships: !0 })), i(et, !0);
  };
  m(() => a(x()), () => {
    Lt(x());
  }), m(
    () => (a(J()), t(D)),
    () => {
      Xt(J(), t(D)).then((l) => i(n, l));
    }
  ), m(
    () => (a(K()), t(n), t(B)),
    () => {
      i(j, Yt(K(), t(n), t(B)));
    }
  ), m(() => a(O()), () => {
    i(G, O() ? 420 : 300);
  }), m(
    () => (a(Y()), a(Z()), t(R), a($())),
    () => {
      i(V, At(Y(), Z(), t(R), $()));
    }
  ), m(
    () => (a(X()), a(Q())),
    () => {
      i(E, [
        {
          "##eventHandlerType": "Navigate To",
          parameters: { peek: X(), url: Q() }
        }
      ]);
    }
  ), Gt();
  var Ut = { getAdditionalDataContext: rt };
  Vt();
  var at = dt(), Mt = C(at);
  {
    var Ot = (l) => {
      Kt(l, {
        children: (c, T) => {
          {
            let z = d(() => ({ dataSource: x(), disableSchemaValidation: !0 }));
            s(c, {
              type: "form",
              get props() {
                return t(z);
              },
              get id() {
                return t(B);
              },
              set id(p) {
                i(B, p);
              },
              children: (p, H) => {
                var lt = te(), nt = C(lt);
                {
                  var Dt = (v) => {
                    s(v, {
                      type: "container",
                      props: {
                        direction: "row",
                        hAlign: "stretch",
                        vAlign: "middle",
                        gap: "M",
                        wrap: !0
                      },
                      styles: { normal: { "margin-bottom": "20px" } },
                      order: 0,
                      children: (_, Ht) => {
                        var P = $t(), b = C(P);
                        {
                          let S = d(() => ({ text: w() ? `## ${w()}` : "" }));
                          s(b, {
                            type: "textv2",
                            get props() {
                              return t(S);
                            },
                            order: 0
                          });
                        }
                        var k = N(b, 2);
                        s(k, {
                          type: "container",
                          props: {
                            direction: "row",
                            hAlign: "left",
                            vAlign: "middle",
                            gap: "M",
                            wrap: !0
                          },
                          order: 1,
                          children: (S, ot) => {
                            var it = Zt(), st = C(it);
                            {
                              var It = (u) => {
                                var A = dt(), I = C(A);
                                Qt(I, 3, () => t(n), (F) => F.name, (F, g, Nt) => {
                                  {
                                    let Wt = d(() => (t(g), h(() => ({
                                      field: t(g).name,
                                      placeholder: t(g).name,
                                      text: t(g).name,
                                      autoWidth: !0
                                    }))));
                                    s(F, {
                                      get type() {
                                        return t(g), h(() => t(g).componentType);
                                      },
                                      get props() {
                                        return t(Wt);
                                      },
                                      get order() {
                                        return t(Nt);
                                      },
                                      styles: { normal: { width: "192px" } }
                                    });
                                  }
                                }), y(u, A);
                              };
                              L(st, (u) => {
                                t(n), h(() => t(n)?.length) && u(It);
                              });
                            }
                            var Ft = N(st, 2);
                            {
                              var qt = (u) => {
                                {
                                  let A = d(() => ({
                                    onClick: t(E),
                                    text: pt(),
                                    type: "cta"
                                  })), I = d(() => (t(n), h(() => t(n)?.length ?? 0)));
                                  s(u, {
                                    type: "button",
                                    get props() {
                                      return t(A);
                                    },
                                    get order() {
                                      return t(I);
                                    }
                                  });
                                }
                              };
                              L(Ft, (u) => {
                                M() && u(qt);
                              });
                            }
                            y(S, it);
                          },
                          $$slots: { default: !0 }
                        }), y(_, P);
                      },
                      $$slots: { default: !0 }
                    });
                  };
                  L(nt, (v) => {
                    a(w()), t(n), a(M()), h(() => w() || t(n)?.length || M()) && v(Dt);
                  });
                }
                var zt = N(nt, 2);
                {
                  let v = d(() => ({
                    dataSource: x(),
                    filter: t(j),
                    sortColumn: gt(),
                    sortOrder: mt(),
                    paginate: ht(),
                    limit: ft(),
                    autoRefresh: Rt()
                  }));
                  s(zt, {
                    type: "dataprovider",
                    get props() {
                      return t(v);
                    },
                    order: 1,
                    get id() {
                      return t(f);
                    },
                    set id(_) {
                      i(f, _);
                    },
                    children: (_, Ht) => {
                      {
                        let P = d(() => (a(U), t(f), a(tt()), h(() => ({
                          dataProvider: `{{ literal ${U(t(f))} }}`,
                          direction: "row",
                          hAlign: "stretch",
                          vAlign: "top",
                          gap: "M",
                          noRowsMessage: tt() || "No rows found"
                        })))), b = d(() => ({
                          custom: `display: grid;
grid-template-columns: repeat(auto-fill, minmax(min(${t(G)}px, 100%), 1fr));`
                        }));
                        s(_, {
                          type: "repeater",
                          context: "repeater",
                          get props() {
                            return t(P);
                          },
                          get styles() {
                            return t(b);
                          },
                          order: 0,
                          get id() {
                            return t(R);
                          },
                          set id(k) {
                            i(R, k);
                          },
                          children: (k, S) => {
                            {
                              let ot = d(() => ({
                                title: vt(),
                                subtitle: _t(),
                                description: kt(),
                                imageURL: Ct(),
                                horizontal: O(),
                                showButton: wt(),
                                buttonText: xt(),
                                buttonOnClick: Bt(),
                                linkURL: t(V),
                                linkPeek: yt()
                              }));
                              s(k, {
                                type: "spectrumcard",
                                get props() {
                                  return t(ot);
                                },
                                styles: { normal: { width: "auto" } },
                                order: 0
                              });
                            }
                          },
                          $$slots: { default: !0 },
                          $$legacy: !0
                        });
                      }
                    },
                    $$slots: { default: !0 },
                    $$legacy: !0
                  });
                }
                y(p, lt);
              },
              $$slots: { default: !0 },
              $$legacy: !0
            });
          }
        },
        $$slots: { default: !0 }
      });
    };
    L(Mt, (l) => {
      t(et) && l(Ot);
    });
  }
  return y(ut, at), Et(e, "getAdditionalDataContext", rt), Jt(Ut);
}
export {
  ae as default
};
