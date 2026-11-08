import { g as R, p as a, l as r, i as e, j as l, k as V, m as W, w as X, z as o, B as c } from "./index-quCB9sGT.js";
import { A as Y, p, f as F } from "./ApexChart-C1ZggDsg.js";
function te(K, t) {
  R(t, !1);
  const w = o(), y = o(), h = o(), A = o(), L = o(), f = o(), S = o(), P = o();
  let z = a(t, "title", 8), n = a(t, "dataProvider", 8), x = a(t, "labelColumn", 8), D = a(t, "valueColumns", 8), I = a(t, "xAxisLabel", 8), U = a(t, "yAxisLabel", 8), g = a(t, "height", 8), b = a(t, "width", 8), j = a(t, "animate", 8), B = a(t, "dataLabels", 8), N = a(t, "curve", 8), T = a(t, "legend", 8), C = a(t, "yAxisUnits", 8), v = a(t, "palette", 8), Z = a(t, "c1", 8), q = a(t, "c2", 8), E = a(t, "c3", 8), G = a(t, "c4", 8), H = a(t, "c5", 8), k = a(t, "onClick", 8);
  function M(i) {
    k()?.({ marker: i });
  }
  const O = (i, u = []) => {
    const m = i.rows ?? [];
    return u.map((s) => ({
      name: s,
      data: m.map((d) => {
        const _ = d?.[s];
        return i?.schema?.[s]?.type === "datetime" && _ ? Date.parse(_) : _;
      })
    }));
  }, Q = (i, u) => (i.rows ?? []).map((s) => {
    const d = s?.[u];
    return ["string", "number", "boolean"].includes(typeof d) ? d : "";
  }), J = (i, u, m) => {
    const s = m === "x";
    return i === "datetime" && s ? F.Datetime : s ? F.Default : F[u];
  };
  r(
    () => (e(n()), e(D())),
    () => {
      c(w, O(n(), D()));
    }
  ), r(
    () => (e(n()), e(x())),
    () => {
      c(y, Q(n(), x()));
    }
  ), r(
    () => (e(n()), e(x())),
    () => {
      c(h, n()?.schema?.[x()]?.type === "datetime" ? "datetime" : "category");
    }
  ), r(() => (l(h), e(C())), () => {
    c(A, J(l(h), C(), "x"));
  }), r(() => (l(h), e(C())), () => {
    c(L, J(l(h), C(), "y"));
  }), r(() => e(k()), () => {
    c(f, typeof k() == "function");
  }), r(() => l(f), () => {
    c(S, l(f));
  }), r(
    () => (l(w), e(N()), e(v()), e(Z()), e(q()), e(E()), e(G()), e(H()), e(T()), e(z()), e(B()), e(g()), e(b()), e(j()), e(n()), l(y), l(A), e(I()), l(L), e(U())),
    () => {
      c(P, {
        series: l(w),
        stroke: { curve: N().toLowerCase() },
        colors: v() === "Custom" ? [Z(), q(), E(), G(), H()] : [],
        theme: { palette: p(v()) },
        legend: {
          show: T(),
          position: "top",
          horizontalAlign: "right",
          showForSingleSeries: !0,
          showForNullSeries: !0,
          showForZeroSeries: !0
        },
        title: { text: z() },
        dataLabels: { enabled: B() },
        chart: {
          height: g() == null || g() === "" ? "auto" : g(),
          width: b() == null || b() === "" ? "100%" : b(),
          type: "line",
          animations: { enabled: j() },
          toolbar: { show: !1 },
          zoom: { enabled: !1 },
          events: {
            markerClick(i, u, m) {
              const s = m.dataPointIndex, d = n().rows[s];
              M(d);
            }
          }
        },
        xaxis: {
          categories: l(y),
          labels: { formatter: l(A) },
          title: { text: I() }
        },
        yaxis: {
          labels: { formatter: l(L) },
          title: { text: U() }
        }
      });
    }
  ), V(), W(), Y(K, {
    get options() {
      return l(P);
    },
    get hasClickAction() {
      return l(f);
    },
    get fullCursor() {
      return l(S);
    }
  }), X();
}
export {
  te as default
};
