import { g as D, p as c, h as H, l as k, j as s, cA as h, i as m, k as K, m as j, R as Q, n as N, q as S, u as U, d as A, w as W, x as Y, y as V, z as x, S as B, E as q, H as T, A as _, B as G, b5 as t } from "./index-quCB9sGT.js";
function ee(R, n) {
  D(n, !1);
  const r = () => Y(F, "$component", v), [v, I] = V(), u = x(), i = x(), g = x();
  let b = c(n, "actionType", 8), C = c(n, "dataSource", 8), d = c(n, "rowId", 8), y = c(n, "noRowsMessage", 8);
  const F = H("component"), { ContextScopes: e } = H("sdk");
  k(() => r(), () => {
    G(u, `${r().id}-provider`);
  }), k(() => s(u), () => {
    G(i, `{{ literal ${h(s(u))} }}`);
  }), k(() => (m(d()), h), () => {
    G(g, [
      {
        field: "_id",
        operator: "equal",
        type: "string",
        value: d() ? d() : `{{ ${h("url")}.${h("id")} }}`,
        valueType: "Binding"
      }
    ]);
  }), K(), j(), Q(R, {
    children: (a, l) => {
      var o = N(), M = S(o);
      {
        var p = (f) => {
          B(f, {
            type: "container",
            props: { direction: "column", hAlign: "left", vAlign: "stretch" },
            children: (P, w) => {
              var $ = N(), O = S($);
              q(O, n, "default", {}, null), A(P, $);
            },
            $$slots: { default: !0 }
          });
        }, E = (f) => {
          {
            let P = T(() => ({
              dataSource: C(),
              filter: s(g),
              limit: 1,
              paginate: !1
            }));
            B(f, {
              type: "dataprovider",
              context: "provider",
              get props() {
                return s(P);
              },
              children: (w, $) => {
                {
                  let O = T(() => (s(i), m(y()), _(() => ({
                    dataProvider: s(i),
                    noRowsMessage: y() || "We couldn't find a row to display",
                    direction: "column",
                    hAlign: "center",
                    scope: e.Global
                  }))));
                  B(w, {
                    type: "repeater",
                    context: "repeater",
                    get props() {
                      return s(O);
                    },
                    children: (z, X) => {
                      var L = N(), J = S(L);
                      q(J, n, "default", {}, null), A(z, L);
                    },
                    $$slots: { default: !0 }
                  });
                }
              },
              $$slots: { default: !0 }
            });
          }
        };
        U(M, (f) => {
          b() === "Create" ? f(p) : f(E, !1);
        });
      }
      A(a, o);
    },
    $$slots: { default: !0 }
  }), W(), I();
}
function te(R, n) {
  D(n, !1);
  let r = c(n, "field", 8), v = c(n, "schema", 8), I = c(n, "order", 8);
  const u = {
    [t.STRING]: "stringfield",
    [t.NUMBER]: "numberfield",
    [t.BIGINT]: "bigintfield",
    [t.OPTIONS]: "optionsfield",
    [t.ARRAY]: "multifieldselect",
    [t.BOOLEAN]: "booleanfield",
    [t.LONGFORM]: "longformfield",
    [t.DATETIME]: "datetimefield",
    [t.SIGNATURE_SINGLE]: "signaturesinglefield",
    [t.ATTACHMENTS]: "attachmentfield",
    [t.ATTACHMENT_SINGLE]: "attachmentsinglefield",
    [t.LINK]: "relationshipfield",
    [t.JSON]: "jsonfield",
    [t.BARCODEQR]: "codescanner",
    [t.BB_REFERENCE]: "bbreferencefield",
    [t.BB_REFERENCE_SINGLE]: "bbreferencesinglefield"
  }, i = (e) => {
    const a = e.field || e.name;
    return !a || !v()?.[a] ? null : v()[a];
  }, g = (e) => {
    const a = i(e);
    if (!a)
      return null;
    const { type: l } = a;
    return u[l];
  }, b = (e) => {
    const l = i(e)?.displayName || e.name;
    let o = e._component ? { ...e } : {
      field: e.name,
      label: l,
      placeholder: l,
      _instanceName: e.name
    };
    return o = { ...C(e), ...o }, o;
  };
  function C(e) {
    const a = {
      [t.ATTACHMENTS]: (M, p) => ({ maximum: p?.constraints?.length?.maximum }),
      [t.DATETIME]: (M, p) => {
        const E = { valueAsTimestamp: !p?.timeOnly };
        return p?.dateOnly && (E.enableTime = !1), E;
      }
    }, l = i(e), o = a[l.type];
    if (o)
      return o(e, l);
  }
  j();
  var d = N(), y = S(d);
  {
    var F = (e) => {
      {
        let a = T(() => (m(r()), _(() => g(r())))), l = T(() => (m(r()), _(() => b(r())))), o = T(() => (m(r()), _(() => r()?.field)));
        B(e, {
          get type() {
            return s(a);
          },
          get props() {
            return s(l);
          },
          get order() {
            return I();
          },
          interactive: !0,
          get name() {
            return s(o);
          }
        });
      }
    };
    U(y, (e) => {
      m(r()), _(() => g(r()) && r().active) && e(F);
    });
  }
  A(R, d), W();
}
export {
  te as F,
  ee as a
};
