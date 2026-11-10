import { g as H, p as a, l as m, i as e, j as o, k as J, m as K, w as M, z as h, B as g } from "./index-quCB9sGT.js";
import { A as O, p as Q, f as R } from "./ApexChart-C1ZggDsg.js";
function Y(p, t) {
  H(t, !1);
  const C = h(), y = h(), _ = h(), v = h(), A = h();
  let F = a(t, "title", 8), l = a(t, "dataProvider", 8), f = a(t, "labelColumn", 8), u = a(t, "valueColumn", 8), w = a(t, "height", 8), b = a(t, "width", 8), V = a(t, "animate", 8), L = a(t, "dataLabels", 8), P = a(t, "legend", 8), x = a(t, "palette", 8), z = a(t, "c1", 8), D = a(t, "c2", 8), N = a(t, "c3", 8), I = a(t, "c4", 8), j = a(t, "c5", 8), S = a(t, "onClick", 8);
  function B(s, i, c) {
    S()?.({ segment: s, index: i, percentage: c });
  }
  const T = (s, i) => (s.rows ?? []).map((d) => {
    const n = d?.[i];
    if (s?.schema?.[i]?.type === "datetime" && n)
      return Date.parse(n);
    const r = parseFloat(n);
    return isNaN(r) ? 0 : r;
  }), Z = (s, i, c) => (s.rows ?? []).map((n) => {
    const r = n?.[i];
    if (["string", "number", "boolean"].includes(typeof r)) {
      if (c === "datetime")
        return R.Datetime(r);
    } else return "";
    return r;
  });
  m(
    () => (e(l()), e(f())),
    () => {
      g(C, l()?.schema?.[f()]?.type === "datetime" ? "datetime" : "category");
    }
  ), m(
    () => (e(l()), e(u())),
    () => {
      g(y, T(l(), u()));
    }
  ), m(
    () => (e(l()), e(f()), o(C)),
    () => {
      g(_, Z(l(), f(), o(C)));
    }
  ), m(() => e(S()), () => {
    g(v, typeof S() == "function");
  }), m(
    () => (o(y), o(_), e(x()), e(z()), e(D()), e(N()), e(I()), e(j()), e(P()), e(F()), e(L()), e(w()), e(b()), e(V()), e(l()), e(u())),
    () => {
      g(A, {
        series: o(y),
        labels: o(_),
        colors: x() === "Custom" ? [z(), D(), N(), I(), j()] : [],
        theme: { palette: Q(x()) },
        legend: {
          show: P(),
          position: "right",
          horizontalAlign: "right",
          showForSingleSeries: !0,
          showForNullSeries: !0,
          showForZeroSeries: !0
        },
        title: { text: F() },
        dataLabels: { enabled: L() },
        chart: {
          height: w() == null || w() === "" ? "auto" : w(),
          width: b() == null || b() === "" ? "100%" : b(),
          type: "donut",
          animations: { enabled: V() },
          toolbar: { show: !1 },
          zoom: { enabled: !1 },
          events: {
            dataPointSelection(s, i, c) {
              const d = c.dataPointIndex, n = l().rows[d], q = l().rows.map((k) => k[u()]).reduce((k, G) => k + G, 0), E = (n[u()] / q * 100).toFixed(1);
              B(n, d + 1, E);
            }
          }
        }
      });
    }
  ), J(), K(), O(p, {
    get options() {
      return o(A);
    },
    get hasClickAction() {
      return o(v);
    }
  }), M();
}
export {
  Y as default
};
