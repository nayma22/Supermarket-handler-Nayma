import { g as Ce, p as t, m as fe, R as be, S as ee, n as xe, q as ve, u as Ae, d as we, B as ke, j as a, H as te, w as Le, z as ye, i as l, cA as le, A as Se } from "./index-quCB9sGT.js";
function _e(ae, e) {
  Ce(e, !1);
  let ie = t(e, "filter", 8), ne = t(e, "sortColumn", 8), ue = t(e, "sortOrder", 8), me = t(e, "limit", 8), ce = t(e, "autoRefresh", 8), m = t(e, "chartTitle", 8), c = t(e, "chartType", 8), de = t(e, "dataSource", 8), d = t(e, "palette", 8), o = t(e, "c1", 8), h = t(e, "c2", 8), g = t(e, "c3", 8), s = t(e, "c4", 8), r = t(e, "c5", 8), C = t(e, "labelColumn", 8), f = t(e, "legend", 8), b = t(e, "animate", 8), x = t(e, "dataLabels", 8), v = t(e, "height", 8), A = t(e, "width", 8), w = t(e, "valueColumn", 8), k = t(e, "stacked", 8), L = t(e, "horizontal", 8), y = t(e, "valueColumns", 8), S = t(e, "valueUnits", 8), z = t(e, "yAxisLabel", 8), U = t(e, "xAxisLabel", 8), P = t(e, "yAxisUnits", 8), _ = t(e, "curve", 8), R = t(e, "gradient", 8), T = t(e, "closeColumn", 8), V = t(e, "openColumn", 8), B = t(e, "highColumn", 8), H = t(e, "lowColumn", 8), I = t(e, "dateColumn", 8), M = t(e, "bucketCount", 8), O = t(e, "autoMaxValue", 8), W = t(e, "maxValue", 8), X = t(e, "startAngle", 8), Y = t(e, "endAngle", 8), q = t(e, "showTrack", 8), j = t(e, "lineCap", 8), D = t(e, "barLabels", 8), E = t(e, "offsetX", 8), F = t(e, "offsetY", 8), G = t(e, "textSize", 8), J = t(e, "showImage", 8), K = t(e, "imageURL", 8), N = t(e, "imageWidth", 8), Q = t(e, "imageHeight", 8), Z = t(e, "titleSize", 8), p = t(e, "showPercentage", 8), i = ye();
  fe(), be(ae, {
    children: (oe, ze) => {
      {
        let he = te(() => ({
          dataSource: de(),
          filter: ie(),
          sortColumn: ne(),
          sortOrder: ue(),
          limit: me(),
          autoRefresh: ce()
        }));
        ee(oe, {
          type: "dataprovider",
          context: "provider",
          get props() {
            return a(he);
          },
          get id() {
            return a(i);
          },
          set id(n) {
            ke(i, n);
          },
          children: (n, Ue) => {
            var $ = xe(), ge = ve($);
            {
              var se = (u) => {
                {
                  let re = te(() => (l(le), a(i), l(v()), l(A()), l(m()), l(C()), l(w()), l(y()), l(d()), l(x()), l(f()), l(b()), l(S()), l(z()), l(U()), l(P()), l(k()), l(L()), l(_()), l(R()), l(T()), l(V()), l(B()), l(H()), l(I()), l(M()), l(o()), l(h()), l(g()), l(s()), l(r()), l(O()), l(W()), l(X()), l(Y()), l(q()), l(j()), l(D()), l(E()), l(F()), l(G()), l(J()), l(K()), l(N()), l(Q()), l(Z()), l(p()), Se(() => ({
                    dataProvider: `{{ literal ${le(a(i))} }}`,
                    height: v(),
                    width: A(),
                    title: m(),
                    labelColumn: C(),
                    valueColumn: w(),
                    valueColumns: y(),
                    palette: d(),
                    dataLabels: x(),
                    legend: f(),
                    animate: b(),
                    valueUnits: S(),
                    yAxisLabel: z(),
                    xAxisLabel: U(),
                    yAxisUnits: P(),
                    stacked: k(),
                    horizontal: L(),
                    curve: _(),
                    gradient: R(),
                    closeColumn: T(),
                    openColumn: V(),
                    highColumn: B(),
                    lowColumn: H(),
                    dateColumn: I(),
                    bucketCount: M(),
                    c1: o(),
                    c2: h(),
                    c3: g(),
                    c4: s(),
                    c5: r(),
                    autoMaxValue: O(),
                    maxValue: W(),
                    startAngle: X(),
                    endAngle: Y(),
                    showTrack: q(),
                    lineCap: j(),
                    barLabels: D(),
                    offsetX: E(),
                    offsetY: F(),
                    textSize: G(),
                    showImage: J(),
                    imageURL: K(),
                    imageWidth: N(),
                    imageHeight: Q(),
                    titleSize: Z(),
                    showPercentage: p()
                  }))));
                  ee(u, {
                    get type() {
                      return c();
                    },
                    get props() {
                      return a(re);
                    }
                  });
                }
              };
              Ae(ge, (u) => {
                a(i) && c() && u(se);
              });
            }
            we(n, $);
          },
          $$slots: { default: !0 },
          $$legacy: !0
        });
      }
    },
    $$slots: { default: !0 }
  }), Le();
}
export {
  _e as default
};
