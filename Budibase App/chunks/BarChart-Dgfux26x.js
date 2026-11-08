import { g as R, p as a, l as c, i as e, j as l, k as V, m as W, w as X, z as u, B as d } from "./index-quCB9sGT.js";
import { A as Y, p, f as S } from "./ApexChart-C1ZggDsg.js";
function te(J, t) {
  R(t, !1);
  const y = u(), A = u(), b = u(), C = u(), k = u(), F = u(), z = u();
  let o = a(t, "dataProvider", 8), f = a(t, "labelColumn", 8), P = a(t, "valueColumns", 8), B = a(t, "title", 8), D = a(t, "xAxisLabel", 8), I = a(t, "yAxisLabel", 8), x = a(t, "height", 8), g = a(t, "width", 8), U = a(t, "dataLabels", 8), j = a(t, "animate", 8), N = a(t, "legend", 8), O = a(t, "stacked", 8), w = a(t, "yAxisUnits", 8), L = a(t, "palette", 8), T = a(t, "c1", 8), Z = a(t, "c2", 8), q = a(t, "c3", 8), E = a(t, "c4", 8), G = a(t, "c5", 8), m = a(t, "horizontal", 8), _ = a(t, "onClick", 8);
  function K(n) {
    _()?.({ bar: n });
  }
  const M = (n, h = []) => {
    const r = n.rows ?? [];
    return h.map((s) => ({
      name: s,
      data: r.map((i) => {
        const v = i?.[s];
        return n?.schema?.[s]?.type === "datetime" && v ? Date.parse(v) : v;
      })
    }));
  }, Q = (n, h) => (n.rows ?? []).map((s) => {
    const i = s?.[h];
    return ["string", "number", "boolean"].includes(typeof i) ? i : "";
  }), H = (n, h, r, s) => {
    const i = s === "y" && r || s === "x" && !r;
    return n === "datetime" && i ? S.Datetime : i ? S.Default : S[h];
  };
  c(
    () => (e(o()), e(P())),
    () => {
      d(y, M(o(), P()));
    }
  ), c(
    () => (e(o()), e(f())),
    () => {
      d(A, Q(o(), f()));
    }
  ), c(
    () => (e(o()), e(f())),
    () => {
      d(b, o()?.schema?.[f()]?.type === "datetime" ? "datetime" : "category");
    }
  ), c(
    () => (l(b), e(w()), e(m())),
    () => {
      d(C, H(l(b), w(), m(), "x"));
    }
  ), c(
    () => (l(b), e(w()), e(m())),
    () => {
      d(k, H(l(b), w(), m(), "y"));
    }
  ), c(() => e(_()), () => {
    d(F, typeof _() == "function");
  }), c(
    () => (l(y), e(L()), e(T()), e(Z()), e(q()), e(E()), e(G()), e(N()), e(B()), e(U()), e(x()), e(g()), e(O()), e(j()), e(o()), e(m()), l(A), l(C), e(D()), l(k), e(I())),
    () => {
      d(z, {
        series: l(y),
        colors: L() === "Custom" ? [T(), Z(), q(), E(), G()] : [],
        theme: { palette: p(L()) },
        legend: {
          show: N(),
          position: "top",
          horizontalAlign: "right",
          showForSingleSeries: !0,
          showForNullSeries: !0,
          showForZeroSeries: !0
        },
        title: { text: B() },
        dataLabels: { enabled: U(), dropShadow: { enabled: !0 } },
        chart: {
          height: x() == null || x() === "" ? "auto" : x(),
          width: g() == null || g() === "" ? "100%" : g(),
          type: "bar",
          stacked: O(),
          animations: { enabled: j() },
          toolbar: { show: !1 },
          zoom: { enabled: !1 },
          events: {
            dataPointSelection(n, h, r) {
              const s = r.dataPointIndex, i = o().rows[s];
              K(i);
            }
          }
        },
        plotOptions: { bar: { horizontal: m() } },
        // We can just always provide the categories to the xaxis and horizontal mode automatically handles "tranposing" the categories to the yaxis, but certain things like labels need to be manually put on a certain axis based on the selected mode. Titles do not need to be handled this way, they are exposed to the user as "X axis" and Y Axis" so flipping them would be confusing.
        xaxis: {
          categories: l(A),
          labels: { formatter: l(C) },
          title: { text: D() }
        },
        // Providing `type: "datetime"` normally makes Apex Charts parse unix time nicely with no additonal config, but bar charts in horizontal mode don't have a default setting for parsing the labels of dates, and will just spit out the unix time value. It also doesn't seem to respect any date based formatting properties passed in. So we'll just manually format the labels, the chart still sorts the dates correctly in any case
        yaxis: {
          labels: { formatter: l(k) },
          title: { text: I() }
        }
      });
    }
  ), V(), W(), Y(J, {
    get options() {
      return l(z);
    },
    get hasClickAction() {
      return l(F);
    }
  }), X();
}
export {
  te as default
};
