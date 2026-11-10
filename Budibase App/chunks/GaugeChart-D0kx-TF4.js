import { g as ae, p as a, l as f, i as e, j as m, k as ne, m as le, w as re, z as b, B as x } from "./index-quCB9sGT.js";
import { A as ie, p as se } from "./ApexChart-C1ZggDsg.js";
function ue(p, t) {
  ae(t, !1);
  const k = b(), w = b(), C = b(), A = b();
  let c = a(t, "dataProvider", 8), V = a(t, "labelColumn", 8), M = a(t, "valueColumn", 8), P = a(t, "autoMaxValue", 8), z = a(t, "maxValue", 8), S = a(t, "onClick", 8), L = a(t, "title", 8), y = a(t, "palette", 8), _ = a(t, "c1", 8), N = a(t, "c2", 8), I = a(t, "c3", 8), W = a(t, "c4", 8), B = a(t, "c5", 8), h = a(t, "animate", 8), E = a(t, "startAngle", 8), F = a(t, "endAngle", 8), H = a(t, "showTrack", 8), X = a(t, "lineCap", 8), Y = a(t, "dataLabels", 8), q = a(t, "offsetX", 8), G = a(t, "offsetY", 8), R = a(t, "textSize", 8), T = a(t, "showImage", 8), U = a(t, "imageURL", 8), j = a(t, "imageWidth", 8), D = a(t, "imageHeight", 8), O = a(t, "height", 8), J = a(t, "width", 8), K = a(t, "titleSize", 8), v = a(t, "showPercentage", 8);
  const Q = (n) => {
    const l = Number(n);
    return Number.isFinite(l) ? `${l.toFixed(2)}%` : "";
  }, Z = (n, l) => {
    if (!v() || !(Array.isArray(n?.config?.series) && n.config.series.length === 1))
      return;
    const r = n?.globals?.dom?.baseEl?.querySelector(".apexcharts-datalabels-group");
    if (!r)
      return;
    const s = r.querySelector(".apexcharts-datalabel-value");
    s && (s.textContent = l == null ? "" : Q(l));
  }, $ = (n, l, i, r) => {
    const o = (n?.rows ?? []).map((u) => {
      const g = u?.[l];
      if (n?.schema?.[l]?.type === "datetime" && g)
        return Date.parse(g);
      const d = parseFloat(g);
      return isNaN(d) || d <= 0 ? 0 : d;
    });
    if (i) {
      let u = Math.max(...o);
      return u <= 0 && (u = 1), o.map((d) => d / u * 100);
    }
    return !i && Number(r) ? o.map((g) => g / r * 100) : o;
  }, ee = (n, l) => (n?.rows ?? []).map((s) => {
    const o = s?.[l];
    return ["string", "number", "boolean"].includes(typeof o) ? o : "";
  });
  function te(n, l) {
    S()?.({ line: n, index: l });
  }
  f(() => e(S()), () => {
    x(k, typeof S() == "function");
  }), f(
    () => (e(c()), e(M()), e(P()), e(z())),
    () => {
      x(w, $(c(), M(), P(), z()));
    }
  ), f(
    () => (e(c()), e(V())),
    () => {
      x(C, ee(c(), V()));
    }
  ), f(
    () => (m(w), e(O()), e(J()), e(h()), e(c()), e(E()), e(F()), e(v()), e(L()), e(K()), e(Y()), e(q()), e(G()), e(R()), e(H()), e(T()), e(U()), e(j()), e(D()), m(C), e(y()), e(_()), e(N()), e(I()), e(W()), e(B()), e(X())),
    () => {
      x(A, {
        series: m(w),
        chart: {
          height: Number(O()),
          width: J(),
          type: "radialBar",
          animations: {
            enabled: h() ?? !0,
            animateGradually: { enabled: h() ?? !0 },
            dynamicAnimation: { enabled: h() ?? !0 }
          },
          events: {
            dataPointSelection(n, l, i) {
              const r = i?.dataPointIndex, s = c()?.rows?.[r];
              te(s, r);
            },
            dataPointMouseEnter(n, l, i) {
              const r = i?.w, s = i?.seriesIndex, o = r?.config?.series?.[s];
              Z(r, o);
            },
            dataPointMouseLeave(n, l, i) {
              Z(i?.w, null);
            }
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: E(),
            endAngle: F(),
            dataLabels: {
              name: { show: !0, fontSize: "22px" },
              value: {
                show: v(),
                fontSize: "16px",
                formatter(n) {
                  return Q(n);
                },
                color: "var(--spectrum-global-color-gray-600)"
              },
              total: {
                show: !0,
                label: L(),
                // Nothingburger function to override default behaviour
                formatter() {
                },
                fontSize: `${K()}px`,
                color: "var(--spectrum-global-color-gray-600)"
              }
            },
            barLabels: {
              enabled: Y(),
              useSeriesColors: !0,
              offsetX: q(),
              offsetY: G(),
              fontSize: `${R()}px`
            },
            track: {
              show: H(),
              strokeWidth: "25%",
              background: "#808080",
              opacity: 0.5
            },
            hollow: {
              margin: 15,
              image: T() ? U() : "",
              imageClipped: !1,
              imageWidth: j(),
              imageHeight: D(),
              position: "back"
            }
          }
        },
        labels: m(C),
        colors: y() === "Custom" ? [_(), N(), I(), W(), B()] : [],
        theme: { palette: se(y()) },
        stroke: { lineCap: X() }
      });
    }
  ), ne(), le(), ie(p, {
    get options() {
      return m(A);
    },
    get hasClickAction() {
      return m(k);
    }
  }), re();
}
export {
  ue as default
};
