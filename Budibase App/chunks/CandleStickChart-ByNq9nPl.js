import { g as E, p as a, l as C, i as e, j as f, k as G, m as H, w as J, z as g, B as y } from "./index-quCB9sGT.js";
import { A as K, f as z } from "./ApexChart-C1ZggDsg.js";
function R(j, t) {
  E(t, !1);
  const h = g(), N = g(), A = g();
  let b = a(t, "title", 8), o = a(t, "dataProvider", 8), k = a(t, "dateColumn", 8), w = a(t, "openColumn", 8), _ = a(t, "highColumn", 8), p = a(t, "lowColumn", 8), v = a(t, "closeColumn", 8), F = a(t, "xAxisLabel", 8), L = a(t, "yAxisLabel", 8), m = a(t, "height", 8), d = a(t, "width", 8), S = a(t, "animate", 8), D = a(t, "yAxisUnits", 8), x = a(t, "onClick", 8);
  function B(l) {
    x()?.({ candlestick: l });
  }
  const V = (l, r, c) => {
    const n = c[r];
    if (o()?.schema?.[r]?.type === "datetime")
      return Date.parse(n);
    if (typeof n == "number")
      return n;
    const s = typeof n == "string";
    if (s && n.includes("-")) {
      const i = Date.parse(n);
      return isNaN(i) ? null : i;
    }
    if (s) {
      const i = parseInt(n, 10);
      return isNaN(i) ? null : i;
    }
    return null;
  }, q = (l, r, c, n, s, i) => [
    {
      data: (l.rows ?? []).map((u) => {
        const I = parseFloat(u[c]), P = parseFloat(u[n]), T = parseFloat(u[s]), U = parseFloat(u[i]);
        return [
          V(l, r, u),
          isNaN(I) ? 0 : I,
          isNaN(P) ? 0 : P,
          isNaN(T) ? 0 : T,
          isNaN(U) ? 0 : U
        ];
      })
    }
  ];
  C(
    () => (e(o()), e(k()), e(w()), e(_()), e(p()), e(v())),
    () => {
      y(h, q(o(), k(), w(), _(), p(), v()));
    }
  ), C(() => e(x()), () => {
    y(N, typeof x() == "function");
  }), C(
    () => (f(h), e(b()), e(m()), e(d()), e(S()), e(o()), e(F()), e(D()), e(L())),
    () => {
      y(A, {
        series: f(h),
        title: { text: b() },
        chart: {
          height: m() == null || m() === "" ? "auto" : m(),
          width: d() == null || d() === "" ? "100%" : d(),
          type: "candlestick",
          animations: { enabled: S() },
          toolbar: { show: !1 },
          zoom: { enabled: !1 },
          events: {
            dataPointSelection(l, r, c) {
              const n = c.dataPointIndex, s = o().rows[n];
              B(s);
            }
          }
        },
        xaxis: {
          tooltip: { formatter: z.Datetime },
          type: "datetime",
          title: { text: F() }
        },
        yaxis: {
          labels: { formatter: z[D()] },
          title: { text: L() }
        }
      });
    }
  ), G(), H(), K(j, {
    get options() {
      return f(A);
    },
    get hasClickAction() {
      return f(N);
    }
  }), J();
}
export {
  R as default
};
