import { g as Y, p as a, l as n, i as e, j as l, k as p, m as $, w as ee, z as r, B as o } from "./index-quCB9sGT.js";
import { A as te, p as ae, f as S } from "./ApexChart-C1ZggDsg.js";
function ie(Q, t) {
  Y(t, !1);
  const C = r(), w = r(), f = r(), A = r(), k = r(), v = r(), g = r(), P = r(), z = r();
  let D = a(t, "title", 8), c = a(t, "dataProvider", 8), h = a(t, "labelColumn", 8), I = a(t, "valueColumns", 8), T = a(t, "xAxisLabel", 8), U = a(t, "yAxisLabel", 8), x = a(t, "height", 8), y = a(t, "width", 8), j = a(t, "animate", 8), B = a(t, "dataLabels", 8), N = a(t, "curve", 8), Z = a(t, "legend", 8), b = a(t, "yAxisUnits", 8), L = a(t, "palette", 8), q = a(t, "c1", 8), E = a(t, "c2", 8), G = a(t, "c3", 8), H = a(t, "c4", 8), J = a(t, "c5", 8), K = a(t, "stacked", 8), M = a(t, "gradient", 8), F = a(t, "onClick", 8);
  function R(s) {
    F()?.({ marker: s });
  }
  const V = (s, u = []) => {
    const d = s.rows ?? [];
    return u.map((i) => ({
      name: i,
      data: d.map((m) => {
        const _ = m?.[i];
        return s?.schema?.[i]?.type === "datetime" && _ ? Date.parse(_) : _;
      })
    }));
  }, W = (s, u) => (s.rows ?? []).map((i) => {
    const m = i?.[u];
    return ["string", "number", "boolean"].includes(typeof m) ? m : "";
  }), O = (s, u, d) => {
    const i = d === "x";
    return s === "datetime" && i ? S.Datetime : i ? S.Default : S[u];
  }, X = (s) => s ? {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  } : { type: "solid" };
  n(
    () => (e(c()), e(I())),
    () => {
      o(C, V(c(), I()));
    }
  ), n(
    () => (e(c()), e(h())),
    () => {
      o(w, W(c(), h()));
    }
  ), n(
    () => (e(c()), e(h())),
    () => {
      o(f, c()?.schema?.[h()]?.type === "datetime" ? "datetime" : "category");
    }
  ), n(() => (l(f), e(b())), () => {
    o(A, O(l(f), b(), "x"));
  }), n(() => (l(f), e(b())), () => {
    o(k, O(l(f), b(), "y"));
  }), n(() => e(M()), () => {
    o(v, X(M()));
  }), n(() => e(F()), () => {
    o(g, typeof F() == "function");
  }), n(() => l(g), () => {
    o(P, l(g));
  }), n(
    () => (l(C), e(N()), e(L()), e(q()), e(E()), e(G()), e(H()), e(J()), l(v), e(Z()), e(D()), e(B()), e(x()), e(y()), e(K()), e(j()), e(c()), l(w), l(A), e(T()), l(k), e(U())),
    () => {
      o(z, {
        series: l(C),
        stroke: { curve: N().toLowerCase() },
        colors: L() === "Custom" ? [q(), E(), G(), H(), J()] : [],
        theme: { palette: ae(L()) },
        fill: l(v),
        legend: {
          show: Z(),
          position: "top",
          horizontalAlign: "right",
          showForSingleSeries: !0,
          showForNullSeries: !0,
          showForZeroSeries: !0
        },
        title: { text: D() },
        dataLabels: { enabled: B() },
        chart: {
          height: x() == null || x() === "" ? "auto" : x(),
          width: y() == null || y() === "" ? "100%" : y(),
          type: "area",
          stacked: K(),
          animations: { enabled: j() },
          toolbar: { show: !1 },
          zoom: { enabled: !1 },
          events: {
            markerClick(s, u, d) {
              const i = d.dataPointIndex, m = c().rows[i];
              R(m);
            }
          }
        },
        xaxis: {
          categories: l(w),
          labels: { formatter: l(A) },
          title: { text: T() }
        },
        yaxis: {
          labels: { formatter: l(k) },
          title: { text: U() }
        }
      });
    }
  ), p(), $(), te(Q, {
    get options() {
      return l(z);
    },
    get hasClickAction() {
      return l(g);
    },
    get fullCursor() {
      return l(P);
    }
  }), ee();
}
export {
  ie as default
};
