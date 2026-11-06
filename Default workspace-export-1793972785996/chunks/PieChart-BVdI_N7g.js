import { g as H, p as a, l as d, i as e, j as s, k as J, m as K, w as M, z as h, B as g } from "./index-quCB9sGT.js";
import { A as O, p as Q, f as R } from "./ApexChart-C1ZggDsg.js";
function Y(j, t) {
  H(t, !1);
  const C = h(), y = h(), _ = h(), v = h(), A = h();
  let F = a(t, "title", 8), l = a(t, "dataProvider", 8), f = a(t, "labelColumn", 8), u = a(t, "valueColumn", 8), w = a(t, "height", 8), b = a(t, "width", 8), P = a(t, "animate", 8), V = a(t, "dataLabels", 8), L = a(t, "legend", 8), x = a(t, "palette", 8), z = a(t, "c1", 8), N = a(t, "c2", 8), p = a(t, "c3", 8), D = a(t, "c4", 8), I = a(t, "c5", 8), S = a(t, "onClick", 8);
  function B(o, i, c) {
    S()?.({ segment: o, index: i, percentage: c });
  }
  const T = (o, i) => (o.rows ?? []).map((m) => {
    const n = m?.[i];
    if (o?.schema?.[i]?.type === "datetime" && n)
      return Date.parse(n);
    const r = parseFloat(n);
    return isNaN(r) ? 0 : r;
  }), Z = (o, i, c) => (o.rows ?? []).map((n) => {
    const r = n?.[i];
    if (["string", "number", "boolean"].includes(typeof r)) {
      if (c === "datetime")
        return R.Datetime(r);
    } else return "";
    return r;
  });
  d(
    () => (e(l()), e(f())),
    () => {
      g(C, l()?.schema?.[f()]?.type === "datetime" ? "datetime" : "category");
    }
  ), d(
    () => (e(l()), e(u())),
    () => {
      g(y, T(l(), u()));
    }
  ), d(
    () => (e(l()), e(f()), s(C)),
    () => {
      g(_, Z(l(), f(), s(C)));
    }
  ), d(() => e(S()), () => {
    g(v, typeof S() == "function");
  }), d(
    () => (s(y), s(_), e(x()), e(z()), e(N()), e(p()), e(D()), e(I()), e(L()), e(F()), e(V()), e(w()), e(b()), e(P()), e(l()), e(u())),
    () => {
      g(A, {
        series: s(y),
        labels: s(_),
        colors: x() === "Custom" ? [z(), N(), p(), D(), I()] : [],
        theme: { palette: Q(x()) },
        legend: {
          show: L(),
          position: "right",
          horizontalAlign: "right",
          showForSingleSeries: !0,
          showForNullSeries: !0,
          showForZeroSeries: !0
        },
        title: { text: F() },
        dataLabels: { enabled: V() },
        chart: {
          height: w() == null || w() === "" ? "auto" : w(),
          width: b() == null || b() === "" ? "100%" : b(),
          type: "pie",
          animations: { enabled: P() },
          toolbar: { show: !1 },
          zoom: { enabled: !1 },
          events: {
            dataPointSelection(o, i, c) {
              const m = c.dataPointIndex, n = l().rows[m], q = l().rows.map((k) => k[u()]).reduce((k, G) => k + G, 0), E = (n[u()] / q * 100).toFixed(1);
              B(n, m + 1, E);
            }
          }
        }
      });
    }
  ), J(), K(), O(j, {
    get options() {
      return s(A);
    },
    get hasClickAction() {
      return s(v);
    }
  }), M();
}
export {
  Y as default
};
