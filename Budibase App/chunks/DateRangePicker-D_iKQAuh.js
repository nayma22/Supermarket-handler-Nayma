import { g as $, aM as s, p, h as E, z as r, o as q, l as d, i as P, j as t, k as z, m as B, aN as C, B as c, v as I, d as M, w as N, x as S, y as T, c as F, f as G, r as H } from "./index-quCB9sGT.js";
import { u as J } from "./utc-Dp-rEtpA.js";
var K = G("<div><!></div>");
function W(D, i) {
  $(i, !1);
  const l = () => S(A, "$component", k), [k, w] = T(), n = r(), f = r(), h = r(), m = r();
  s.extend(J);
  let g = p(i, "dataProvider", 8), v = p(i, "field", 8), L = p(i, "defaultValue", 8);
  const A = E("component"), { styleable: Q, ActionTypes: _, getAction: x } = E("sdk"), b = [
    "Last 1 day",
    "Last 7 days",
    "Last 30 days",
    "Last 3 months",
    "Last 6 months",
    "Last 1 year"
  ];
  let u = r(b.includes(L()) ? L() : "Last 30 days");
  const j = (a, e) => {
    if (!a || !e)
      return null;
    let o = s.utc().subtract(1, "year"), V = s.utc().add(1, "day");
    return e === "Last 1 day" ? o = s.utc().subtract(1, "day") : e === "Last 7 days" ? o = s.utc().subtract(7, "days") : e === "Last 30 days" ? o = s.utc().subtract(30, "days") : e === "Last 3 months" ? o = s.utc().subtract(3, "months") : e === "Last 6 months" && (o = s.utc().subtract(6, "months")), {
      range: { [a]: { low: o.format(), high: V.format() } }
    };
  };
  q(() => {
    t(h)?.(l().id);
  }), d(() => P(g()), () => {
    c(n, g()?.id);
  }), d(() => t(n), () => {
    c(f, x(t(n), _.AddDataProviderQueryExtension));
  }), d(() => t(n), () => {
    c(h, x(t(n), _.RemoveDataProviderQueryExtension));
  }), d(() => (P(v()), t(u)), () => {
    c(m, j(v(), t(u)));
  }), d(() => (t(f), l(), t(m)), () => {
    t(f)?.(l().id, t(m));
  }), z(), B();
  var y = K(), R = F(y);
  C(R, {
    placeholder: null,
    get options() {
      return b;
    },
    get value() {
      return t(u);
    },
    $$events: { change: (a) => c(u, a.detail) }
  }), H(y), I(y, (a, e) => Q?.(a, e), () => l().styles), M(D, y), N(), w();
}
export {
  W as default
};
