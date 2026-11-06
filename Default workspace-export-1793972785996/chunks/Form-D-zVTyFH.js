import { g as Y, p as r, h as p, aa as Z, l as y, i as d, j as a, k as $, m as ee, n as I, q as V, u as te, d as w, w as ae, x as D, y as ne, z as l, B as i, d1 as re, aq as se, E as ie } from "./index-quCB9sGT.js";
import { I as oe } from "./InnerForm-N1gFHgUV.js";
function ue(K, n) {
  Y(n, !1);
  const F = () => D(J, "$component", C), k = () => D(E, "$context", C), [C, N] = ne(), h = l(), f = l(), x = l();
  let c = r(n, "dataSource", 8), T = r(n, "size", 8), _ = r(n, "disabled", 8, !1), b = r(n, "readonly", 8, !1), z = r(n, "actionType", 8, "Create"), q = r(n, "initialFormStep", 8, 1), O = r(n, "disableSchemaValidation", 8, !1), B = r(n, "editAutoColumns", 8, !1);
  const E = p("context"), J = p("component"), { fetchDatasourceSchema: P, fetchDatasourceDefinition: R } = p("sdk"), U = () => {
    const e = parseInt(q().toString());
    return isNaN(e) ? 1 : e;
  };
  let S = l(), m = l(), v = l(!1), G = p("current-step") || Z(U());
  const H = (e, t, s, o) => {
    if (e !== "Update")
      return {};
    const g = t?.type;
    if (g !== "table" && g !== "viewV2")
      return {};
    for (let u of s.toReversed().slice(1))
      if (t.type === "viewV2" && o[u]?._viewId === t.id || t.type === "table" && o[u]?.tableId === t.tableId)
        return o[u];
    return {};
  }, L = async (e) => {
    try {
      i(S, await R(e));
    } catch {
      i(S, void 0);
    }
    const t = await P(e);
    i(m, t || {}), a(v) || i(v, !0);
  }, M = (e) => {
    if (!e)
      return null;
    const t = Object.keys(e);
    return t.sort(), t.map((s) => `${s}:${e[s].type}`).join("-");
  };
  y(() => d(c()), () => {
    L(c());
  }), y(() => a(m), () => {
    i(h, M(a(m)));
  }), y(
    () => (d(z()), d(c()), F(), k()),
    () => {
      i(f, H(z(), c(), F().path, k()));
    }
  ), y(
    () => (a(h), a(f), d(_()), d(b())),
    () => {
      i(x, re(a(h) + JSON.stringify(a(f)) + _() + b()));
    }
  ), $(), ee();
  var j = I(), Q = V(j);
  {
    var W = (e) => {
      var t = I(), s = V(t);
      se(s, () => a(x), (o) => {
        oe(o, {
          get dataSource() {
            return c();
          },
          get size() {
            return T();
          },
          get disabled() {
            return _();
          },
          get readonly() {
            return b();
          },
          get schema() {
            return a(m);
          },
          get definition() {
            return a(S);
          },
          get initialValues() {
            return a(f);
          },
          get disableSchemaValidation() {
            return O();
          },
          get editAutoColumns() {
            return B();
          },
          get currentStep() {
            return G;
          },
          children: (g, u) => {
            var A = I(), X = V(A);
            ie(X, n, "default", {}, null), w(g, A);
          },
          $$slots: { default: !0 }
        });
      }), w(e, t);
    };
    te(Q, (e) => {
      a(v) && e(W);
    });
  }
  w(K, j), ae(), N();
}
export {
  ue as default
};
