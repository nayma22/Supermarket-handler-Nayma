import { g as it, p as o, h as ee, cz as st, l as m, i as t, j as e, k as dt, m as ct, n as ke, q as k, u as _, d as B, $ as ut, w as ft, x as mt, y as pt, z as n, aT as gt, B as l, cA as p, R as vt, S as u, A as h, s as T, H as g, T as ht, cB as Be, cC as Te, f as te } from "./index-quCB9sGT.js";
import { e as wt, a as bt } from "./blocks-CWLfm2_o.js";
var yt = te("<!> <!>", 1), _t = te("<!> <!>", 1), Ct = te("<!> <!> <!> <!>", 1);
function Bt(De, a) {
  it(a, !1);
  const ae = () => mt(He, "$component", $e), [$e, Re] = pt(), D = n(), C = n(), S = n(), oe = n(), U = n(), P = n(), j = n(), re = n();
  let $ = o(a, "title", 8), s = o(a, "dataSource", 8), le = o(a, "searchColumns", 8), ne = o(a, "filter", 8), Ae = o(a, "sortColumn", 8), Le = o(a, "sortOrder", 8), Oe = o(a, "paginate", 8), ie = o(a, "tableColumns", 8), E = o(a, "rowCount", 8), se = o(a, "quiet", 8), de = o(a, "compact", 8), V = o(a, "size", 8), ce = o(a, "allowSelectRows", 8), G = o(a, "clickBehaviour", 8), ue = o(a, "onClick", 8), R = o(a, "showTitleButton", 8), Ie = o(a, "titleButtonText", 8), K = o(a, "titleButtonClickBehaviour", 8), fe = o(a, "onClickTitleButton", 8), me = o(a, "noRowsMessage", 8), A = o(a, "sidePanelFields", 8), W = o(a, "sidePanelShowDelete", 8), pe = o(a, "sidePanelSaveLabel", 8), ge = o(a, "sidePanelDeleteLabel", 8), L = o(a, "notificationOverride", 8), Fe = o(a, "autoRefresh", 8);
  const { fetchDatasourceSchema: ze, API: qe, generateGoldenSample: Me } = ee("sdk"), He = ee("component"), Ne = ee("context"), ve = `ID_${st()}`;
  let O = n(), x = n(), I = n(), F = n(), z = n(), b = n(), q = n(), f = n(), he = n(!1);
  const we = () => {
    const r = gt(Ne)[e(x)]?.rows;
    return { eventContext: { row: Me(r) } };
  }, Ue = (r) => {
    let i = W() === !1 ? "" : r;
    return i?.trim() === "" ? "" : i || "Delete";
  }, je = async (r) => {
    if (r?.type === "table") {
      const i = await qe.fetchTableDefinition(r?.tableId);
      l(b, i.schema), l(q, i.primaryDisplay);
    } else r && l(b, await ze(r, { enrichRelationships: !0 }));
    l(he, !0);
  }, Ee = (r) => r ? Object.entries(r).filter((i) => !i[1].autocolumn).map((i) => i[0]) : [], Ve = (r, i) => {
    if (!i || !r)
      return "Edit";
    const M = `${p(r + "-repeater")}.${p(i)}`;
    return `{{#if ${M}}}{{${M}}}{{else}}Details{{/if}}`;
  };
  m(
    () => (t(ge()), t(W())),
    () => {
      l(D, Ue(ge(), W()));
    }
  ), m(() => ae(), () => {
    l(C, ae().id);
  }), m(() => t(s()), () => {
    l(S, s()?.type === "table" || s()?.type === "viewV2");
  }), m(() => t(s()), () => {
    je(s());
  }), m(
    () => (t(le()), e(b)),
    () => {
      wt(le(), e(b)).then((r) => l(f, r));
    }
  ), m(
    () => (t(ne()), e(f), e(O)),
    () => {
      l(oe, bt(ne(), e(f), e(O)));
    }
  ), m(() => (e(I), e(q)), () => {
    l(U, Ve(e(I), e(q)));
  }), m(() => e(b), () => {
    l(P, Ee(e(b)));
  }), m(
    () => (t(G()), e(S), t(ue()), e(F)),
    () => {
      l(j, G() === "actions" || !e(S) ? ue() : [
        {
          id: 0,
          "##eventHandlerType": "Update State",
          parameters: {
            key: ve,
            type: "set",
            persist: !1,
            value: `{{ ${p("eventContext")}.${p("row")}._id }}`
          }
        },
        {
          id: 1,
          "##eventHandlerType": "Open Side Panel",
          parameters: { id: e(F) }
        }
      ]);
    }
  ), m(
    () => (t(K()), e(S), t(fe()), e(z)),
    () => {
      l(re, K() === "actions" || !e(S) ? fe() : [
        {
          id: 0,
          "##eventHandlerType": "Open Side Panel",
          parameters: { id: e(z) }
        }
      ]);
    }
  ), dt();
  var Ge = { getAdditionalDataContext: we };
  ct();
  var be = ke(), Ke = k(be);
  {
    var We = (r) => {
      vt(r, {
        children: (i, Qe) => {
          {
            let M = g(() => ({
              dataSource: s(),
              disableSchemaValidation: !0,
              editAutoColumns: !0,
              size: V()
            }));
            u(i, {
              type: "form",
              get props() {
                return e(M);
              },
              get id() {
                return e(O);
              },
              set id(J) {
                l(O, J);
              },
              children: (J, St) => {
                var ye = Ct(), _e = k(ye);
                {
                  var Xe = (d) => {
                    u(d, {
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
                      children: (c, Q) => {
                        var v = _t(), H = k(v);
                        {
                          let X = g(() => ({ text: $() ? `## ${$()}` : "" }));
                          u(H, {
                            type: "textv2",
                            get props() {
                              return e(X);
                            },
                            order: 0
                          });
                        }
                        var tt = T(H, 2);
                        u(tt, {
                          type: "container",
                          props: {
                            direction: "row",
                            hAlign: "left",
                            vAlign: "center",
                            gap: "M",
                            wrap: !0
                          },
                          order: 1,
                          children: (X, Pt) => {
                            var Pe = yt(), xe = k(Pe);
                            {
                              var at = (w) => {
                                var N = ke(), Y = k(N);
                                ht(Y, 3, () => e(f), (Z) => Z.name, (Z, y, lt) => {
                                  {
                                    let nt = g(() => (e(y), h(() => ({
                                      field: e(y).name,
                                      placeholder: e(y).name,
                                      text: e(y).name,
                                      autoWidth: !0
                                    }))));
                                    u(Z, {
                                      get type() {
                                        return e(y), h(() => e(y).componentType);
                                      },
                                      get props() {
                                        return e(nt);
                                      },
                                      styles: { normal: { width: "192px" } },
                                      get order() {
                                        return e(lt);
                                      }
                                    });
                                  }
                                }), B(w, N);
                              };
                              _(xe, (w) => {
                                e(f), h(() => e(f)?.length) && w(at);
                              });
                            }
                            var ot = T(xe, 2);
                            {
                              var rt = (w) => {
                                {
                                  let N = g(() => ({
                                    onClick: e(re),
                                    text: Ie(),
                                    type: "cta"
                                  })), Y = g(() => (e(f), h(() => e(f)?.length ?? 0)));
                                  u(w, {
                                    type: "button",
                                    get props() {
                                      return e(N);
                                    },
                                    get order() {
                                      return e(Y);
                                    }
                                  });
                                }
                              };
                              _(ot, (w) => {
                                R() && w(rt);
                              });
                            }
                            B(X, Pe);
                          },
                          $$slots: { default: !0 }
                        }), B(c, v);
                      },
                      $$slots: { default: !0 }
                    });
                  };
                  _(_e, (d) => {
                    t($()), e(f), t(R()), h(() => $() || e(f)?.length || R()) && d(Xe);
                  });
                }
                var Ce = T(_e, 2);
                {
                  let d = g(() => ({
                    dataSource: s(),
                    filter: e(oe),
                    sortColumn: Ae() || e(q),
                    sortOrder: Le(),
                    paginate: Oe(),
                    limit: E(),
                    autoRefresh: Fe()
                  }));
                  u(Ce, {
                    type: "dataprovider",
                    get props() {
                      return e(d);
                    },
                    context: "provider",
                    order: 1,
                    get id() {
                      return e(x);
                    },
                    set id(c) {
                      l(x, c);
                    },
                    children: (c, Q) => {
                      {
                        let v = g(() => (t(p), e(x), t(ie()), t(E()), t(se()), t(de()), t(ce()), t(V()), e(j), t(me()), h(() => ({
                          dataProvider: `{{ literal ${p(e(x))} }}`,
                          columns: ie(),
                          rowCount: E(),
                          quiet: se(),
                          compact: de(),
                          allowSelectRows: ce(),
                          size: V(),
                          onClick: e(j),
                          noRowsMessage: me() || "No rows found"
                        }))));
                        u(c, {
                          type: "table",
                          context: "table",
                          get props() {
                            return e(v);
                          }
                        });
                      }
                    },
                    $$slots: { default: !0 },
                    $$legacy: !0
                  });
                }
                var Se = T(Ce, 2);
                {
                  var Ye = (d) => {
                    u(d, {
                      name: "Details side panel",
                      type: "sidepanel",
                      context: "details-side-panel",
                      order: 2,
                      get id() {
                        return e(F);
                      },
                      set id(c) {
                        l(F, c);
                      },
                      children: (c, Q) => {
                        {
                          let v = g(() => (t(s()), t(Be), e(C), e(D), t(pe()), t(L()), t(p), t(A()), e(P), e(U), h(() => ({
                            dataSource: s(),
                            buttonPosition: "top",
                            buttons: Te({
                              _id: e(C) + "-form-edit",
                              showDeleteButton: e(D) !== "",
                              showSaveButton: !0,
                              saveButtonLabel: pe() || "Save",
                              deleteButtonLabel: e(D),
                              notificationOverride: L(),
                              actionType: "Update",
                              dataSource: s()
                            }),
                            actionType: "Update",
                            rowId: `{{ ${p("state")}.${p(ve)} }}`,
                            fields: A() || e(P),
                            title: e(U),
                            labelPosition: "left"
                          }))));
                          u(c, {
                            name: "Details form block",
                            type: "formblock",
                            context: "form-edit",
                            get props() {
                              return e(v);
                            },
                            get id() {
                              return e(I);
                            },
                            set id(H) {
                              l(I, H);
                            },
                            $$legacy: !0
                          });
                        }
                      },
                      $$slots: { default: !0 },
                      $$legacy: !0
                    });
                  };
                  _(Se, (d) => {
                    G() === "details" && d(Ye);
                  });
                }
                var Ze = T(Se, 2);
                {
                  var et = (d) => {
                    u(d, {
                      name: "New row side panel",
                      type: "sidepanel",
                      context: "new-side-panel",
                      order: 3,
                      get id() {
                        return e(z);
                      },
                      set id(c) {
                        l(z, c);
                      },
                      children: (c, Q) => {
                        {
                          let v = g(() => (t(s()), t(Be), e(C), t(L()), t(A()), e(P), h(() => ({
                            dataSource: s(),
                            buttonPosition: "top",
                            buttons: Te({
                              _id: e(C) + "-form-new",
                              showDeleteButton: !1,
                              showSaveButton: !0,
                              saveButtonLabel: "Save",
                              notificationOverride: L(),
                              actionType: "Create",
                              dataSource: s()
                            }),
                            actionType: "Create",
                            fields: A() || e(P),
                            title: "Create Row",
                            labelPosition: "left"
                          }))));
                          u(c, {
                            name: "New row form block",
                            type: "formblock",
                            context: "form-new",
                            get props() {
                              return e(v);
                            }
                          });
                        }
                      },
                      $$slots: { default: !0 },
                      $$legacy: !0
                    });
                  };
                  _(Ze, (d) => {
                    R() && K() === "new" && d(et);
                  });
                }
                B(J, ye);
              },
              $$slots: { default: !0 },
              $$legacy: !0
            });
          }
        },
        $$slots: { default: !0 }
      });
    };
    _(Ke, (r) => {
      e(he) && r(We);
    });
  }
  B(De, be), ut(a, "getAdditionalDataContext", we);
  var Je = ft(Ge);
  return Re(), Je;
}
export {
  Bt as default
};
