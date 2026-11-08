import { g as Z, p as l, cz as ee, h as j, m as te, R as re, S as o, q as _, j as r, B as E, d as w, H as s, i as t, cA as e, A as n, s as h, $ as ae, w as oe, z as G, aT as le, f as S } from "./index-quCB9sGT.js";
var se = S("<!> <!>", 1), ie = S("<!> <!>", 1), ne = S("<!> <!>", 1), de = S("<!> <!> <!>", 1);
function ue(K, a) {
  Z(a, !1);
  let x = l(a, "dataSource", 8), N = l(a, "height", 8), R = l(a, "cardTitle", 8), P = l(a, "cardSubtitle", 8), T = l(a, "cardDescription", 8), z = l(a, "cardImageURL", 8), A = l(a, "cardSearchField", 8), C = l(a, "detailFields", 8), U = l(a, "detailTitle", 8), B = l(a, "noRowsMessage", 8), I = l(a, "autoRefresh", 8);
  const i = ee(), O = j("context"), { generateGoldenSample: V } = j("sdk");
  let u = G(), g = G();
  const D = () => {
    const k = le(O)[r(u)]?.rows || [], F = V(k);
    return { [r(g)]: F };
  };
  var J = { getAdditionalDataContext: D };
  return te(), re(K, {
    children: (k, F) => {
      {
        let Q = s(() => ({
          custom: `
        height: ${N()} !important;
      `
        }));
        o(k, {
          type: "container",
          props: { direction: "row", gap: "M" },
          get styles() {
            return r(Q);
          },
          children: (W, ce) => {
            var H = de(), M = _(H);
            {
              let m = s(() => (t(x()), t(A()), t(e), t(I()), n(() => ({
                dataSource: x(),
                paginate: !0,
                limit: 10,
                filter: [
                  {
                    id: 0,
                    field: A(),
                    operator: "fuzzy",
                    type: "string",
                    value: `{{ ${e("state")}.${e(i + "-search")} }}`,
                    valueType: "Binding",
                    noValue: !1
                  }
                ],
                autoRefresh: I()
              })))), f = s(() => (t(e), n(() => ({
                custom: `
          flex: 3;
          overflow: scroll;
          {{#if (and ${e("state")}.${e(i)} ${e("device")}.${e("mobile")}) }}
            display: none;
          {{/if}}
        `
              }))));
              o(M, {
                type: "dataprovider",
                order: 0,
                get props() {
                  return r(m);
                },
                get styles() {
                  return r(f);
                },
                get id() {
                  return r(u);
                },
                set id(v) {
                  E(u, v);
                },
                children: (v, c) => {
                  var d = se(), p = _(d);
                  o(p, {
                    type: "form",
                    order: 0,
                    styles: { normal: { "margin-bottom": "12px" } },
                    children: ($, b) => {
                      {
                        let q = s(() => (t(e), n(() => ({
                          placeholder: "Search...",
                          field: `${i}-search`,
                          onChange: [
                            {
                              parameters: {
                                key: `${i}-search`,
                                type: "set",
                                persist: null,
                                value: `{{ ${e("eventContext")}.${e("value")} }}`
                              },
                              "##eventHandlerType": "Update State",
                              id: 0
                            }
                          ]
                        }))));
                        o($, {
                          type: "stringfield",
                          get props() {
                            return r(q);
                          }
                        });
                      }
                    },
                    $$slots: { default: !0 }
                  });
                  var y = h(p, 2);
                  {
                    let $ = s(() => (t(e), r(u), t(B()), n(() => ({
                      dataProvider: `{{ literal ${e(r(u))} }}`,
                      direction: "column",
                      gap: "S",
                      noRowsMessage: B() || "No data"
                    }))));
                    o(y, {
                      type: "repeater",
                      order: 1,
                      context: "repeater",
                      get props() {
                        return r($);
                      },
                      get id() {
                        return r(g);
                      },
                      set id(b) {
                        E(g, b);
                      },
                      children: (b, q) => {
                        {
                          let Y = s(() => (t(R()), t(P()), t(T()), t(z()), t(e), r(g), n(() => ({
                            title: R(),
                            subtitle: P(),
                            description: T(),
                            imageURL: z(),
                            horizontal: !0,
                            buttonOnClick: [
                              {
                                parameters: {
                                  key: i,
                                  type: "set",
                                  persist: null,
                                  value: `{{ ${e(r(g))}.${e("_id")} }}`
                                },
                                "##eventHandlerType": "Update State",
                                id: 0
                              }
                            ]
                          }))));
                          o(b, {
                            type: "spectrumcard",
                            context: "repeater",
                            get props() {
                              return r(Y);
                            },
                            styles: { normal: { width: "auto" } }
                          });
                        }
                      },
                      $$slots: { default: !0 },
                      $$legacy: !0
                    });
                  }
                  w(v, d);
                },
                $$slots: { default: !0 },
                $$legacy: !0
              });
            }
            var L = h(M, 2);
            {
              let m = s(() => (t(e), n(() => ({
                custom: `
          padding: 20px;
          background-color: var(--spectrum-global-color-gray-50));
          border: 1px solid var(--spectrum-global-color-gray-300);
          border-radius: 4px;
          flex: 4;
          {{#if (or ${e("state")}.${e(i)} ${e("device")}.${e("mobile")}) }}
            display: none;
          {{/if}}
          `
              }))));
              o(L, {
                type: "container",
                order: 1,
                props: {
                  hAlign: "center",
                  vAlign: "middle",
                  size: "grow",
                  direction: "column"
                },
                get styles() {
                  return r(m);
                },
                children: (f, v) => {
                  var c = ie(), d = _(c);
                  o(d, {
                    type: "icon",
                    order: 0,
                    props: {
                      icon: "ri-list-check-2",
                      size: "ri-2x",
                      color: "var(--spectrum-global-color-gray-700)"
                    },
                    styles: { normal: { "margin-bottom": "12px" } }
                  });
                  var p = h(d, 2);
                  o(p, {
                    type: "textv2",
                    order: 1,
                    props: {
                      text: "Select a row to view its fields",
                      color: "var(--spectrum-global-color-gray-700)"
                    }
                  }), w(f, c);
                },
                $$slots: { default: !0 }
              });
            }
            var X = h(L, 2);
            {
              let m = s(() => (t(e), n(() => ({
                custom: `
          background-color: var(--spectrum-global-color-gray-50));
          border: 1px solid var(--spectrum-global-color-gray-300);
          border-radius: 4px;
          padding: 20px;
          overflow-y: scroll;
          flex: 4;
          {{#if (isFalsey ${e("state")}.${e(i)}) }}
            display: none;
          {{/if}}
          `
              }))));
              o(X, {
                type: "container",
                order: 2,
                props: {
                  hAlign: "center",
                  vAlign: "top",
                  size: "grow",
                  direction: "column"
                },
                get styles() {
                  return r(m);
                },
                children: (f, v) => {
                  var c = ne(), d = _(c);
                  {
                    let y = s(() => ({
                      text: "← Back",
                      onClick: [
                        {
                          parameters: { key: i, type: "set", persist: null, value: "" },
                          "##eventHandlerType": "Update State",
                          id: 0
                        }
                      ]
                    })), $ = s(() => (t(e), n(() => ({
                      custom: `
            align-self: flex-end;
            margin-bottom: 16px;
            {{#if (not ${e("device")}.${e("mobile")}) }}
              display: none;
            {{/if}}
            `
                    }))));
                    o(d, {
                      type: "button",
                      order: 0,
                      get props() {
                        return r(y);
                      },
                      get styles() {
                        return r($);
                      }
                    });
                  }
                  var p = h(d, 2);
                  {
                    let y = s(() => (t(x()), t(e), t(C()), t(U()), n(() => ({
                      showSaveButton: !0,
                      dataSource: x(),
                      actionType: "Update",
                      rowId: `{{ ${e("state")}.${e(i)} }}`,
                      fields: C(),
                      title: U()
                    }))));
                    o(p, {
                      type: "formblock",
                      order: 1,
                      get props() {
                        return r(y);
                      }
                    });
                  }
                  w(f, c);
                },
                $$slots: { default: !0 }
              });
            }
            w(W, H);
          },
          $$slots: { default: !0 }
        });
      }
    },
    $$slots: { default: !0 }
  }), ae(a, "getAdditionalDataContext", D), oe(J);
}
export {
  ue as default
};
