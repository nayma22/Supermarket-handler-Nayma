import { g as Y, p as n, l as g, i as t, j as m, k as Z, m as p, w as $, z as k, B as y } from "./index-quCB9sGT.js";
import { A as tt, p as et } from "./ApexChart-C1ZggDsg.js";
function st(U, a) {
  Y(a, !1);
  const L = k(), F = k(), I = k(), B = k(), N = k();
  let w = n(a, "dataProvider", 8), A = n(a, "valueColumn", 8), S = n(a, "title", 8), R = n(a, "xAxisLabel", 8), E = n(a, "yAxisLabel", 8), v = n(a, "height", 8), M = n(a, "width", 8), H = n(a, "dataLabels", 8), O = n(a, "animate", 8), V = n(a, "stacked", 8), P = n(a, "palette", 8), j = n(a, "c1", 8), q = n(a, "c2", 8), D = n(a, "c3", 8), G = n(a, "c4", 8), J = n(a, "c5", 8), x = n(a, "horizontal", 8), _ = n(a, "bucketCount", 8, 10), z = n(a, "onClick", 8);
  function W(l, o, e) {
    z()?.({ rowsInBucket: l, lowerLimit: o, upperLimit: e });
  }
  const X = (l, o, e) => {
    const u = (l.rows ?? []).map((i) => parseFloat(i[o])).filter((i) => !isNaN(i)), [h, c] = K(u), r = Q(h, c, e), f = Array(e).fill(0);
    return u.forEach((i) => {
      const s = r.findIndex((C) => C.min <= i && i <= C.max);
      f[s]++;
    }), [{ data: r.map((i, s) => ({ x: `${i.min} – ${i.max}`, y: f[s] })) }];
  }, K = (l) => {
    const o = Math.floor(Math.min(...l)), e = Math.ceil(Math.max(...l));
    return [o, e];
  }, Q = (l, o, e) => {
    e = e < 2 ? 2 : Math.floor(e);
    const b = o - l, u = Math.floor(b / e), h = b - u * e, c = [];
    for (let r = 0; r < e; r++) {
      const f = c?.[c.length - 1]?.max ?? l, d = r < h ? 1 : 0;
      c.push({
        min: f,
        max: f + u + d
      });
    }
    return c;
  }, T = (l, o) => l && o === "x" || !l && o === "y" ? (e) => Math.floor(e) === e ? e : " " : (e) => e;
  g(
    () => (t(w()), t(A()), t(_())),
    () => {
      y(L, X(w(), A(), _()));
    }
  ), g(() => t(x()), () => {
    y(F, T(x(), "x"));
  }), g(() => t(x()), () => {
    y(I, T(x(), "y"));
  }), g(() => t(z()), () => {
    y(B, typeof z() == "function");
  }), g(
    () => (m(L), t(P()), t(j()), t(q()), t(D()), t(G()), t(J()), t(S()), t(H()), t(v()), t(M()), t(V()), t(O()), t(w()), t(A()), t(_()), t(x()), t(R()), m(F), t(E()), m(I)),
    () => {
      y(N, {
        series: m(L),
        colors: P() === "Custom" ? [j(), q(), D(), G(), J()] : [],
        theme: { palette: et(P()) },
        title: { text: S() },
        dataLabels: { enabled: H(), dropShadow: { enabled: !0 } },
        chart: {
          height: v() == null || v() === "" ? "auto" : v(),
          width: M() == null || M() === "" ? "100%" : M(),
          type: "bar",
          stacked: V(),
          animations: { enabled: O() },
          toolbar: { show: !1 },
          zoom: { enabled: !1 },
          events: {
            dataPointSelection(l, o, e) {
              const b = e.dataPointIndex, h = (w().rows || []).map((s, C) => ({ row: s, value: parseFloat(s[A()]), i: C })).filter((s) => !isNaN(s.value)), [c, r] = K(h.map((s) => s.value)), d = Q(c, r, _())[b], i = h.filter((s) => s.value >= d.min && s.value <= d.max).map((s) => s.row);
              W(i, d.min, d.max);
            }
          }
        },
        plotOptions: { bar: { horizontal: x() } },
        xaxis: {
          type: "category",
          title: { text: R() },
          labels: { formatter: m(F) }
        },
        yaxis: {
          decimalsInFloat: 0,
          title: { text: E() },
          labels: { formatter: m(I) }
        }
      });
    }
  ), Z(), p(), tt(U, {
    get options() {
      return m(N);
    },
    get hasClickAction() {
      return m(B);
    }
  }), $();
}
export {
  st as default
};
