import { g as be, p as i, a0 as _e, l as y, B as C, i as a, j as e, k as ge, m as xe, c as n, u as Y, A as g, s as A, r as o, t as V, a as G, at as fe, d as q, w as ke, z, a1 as Z, I as $, a3 as ee, cE as se, b as ae, e as le, n as ye, q as Ce, T as Ae, H as j, U as Ge, f as D } from "./index-quCB9sGT.js";
var ze = D('<div><label class="spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-FieldGroup-item svelte-1srh935"><input type="checkbox" class="spectrum-Checkbox-input svelte-1srh935"/> <span class="spectrum-Checkbox-box"><span><!></span></span> <span class="spectrum-Checkbox-label"> </span></label></div>'), Fe = D('<div><label class="spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-FieldGroup-item svelte-1srh935"><input type="checkbox" class="spectrum-Checkbox-input svelte-1srh935"/> <span class="spectrum-Checkbox-box"><span><!></span></span> <span class="spectrum-Checkbox-label"> </span></label></div>'), Se = D("<div><!> <!></div>");
function Oe(te, r) {
  be(r, !1);
  const b = z(), B = z(), E = z(), F = z(), H = z();
  let I = i(r, "direction", 8, "vertical"), u = i(r, "value", 24, () => []), t = i(r, "options", 24, () => []), U = i(r, "disabled", 8, !1), J = i(r, "readonly", 8, !1), M = i(r, "columns", 8, 1), S = i(r, "getOptionLabel", 8, (s) => `${s}`), v = i(r, "getOptionValue", 8, (s) => s), K = i(r, "showSelectAll", 8, !1), N = i(r, "selectAllText", 8, "Select all");
  const w = _e(), ce = (s) => {
    u().includes(s) ? w("change", u().filter((l) => l !== s)) : w("change", [...u(), s]);
  }, re = () => {
    if (e(b))
      w("change", []);
    else {
      const s = t().map((l) => v()(l));
      w("change", s);
    }
  };
  y(
    () => (a(t()), a(u()), a(v())),
    () => {
      C(b, t().length > 0 && t().every((s) => u().includes(v()(s))));
    }
  ), y(
    () => (a(t()), a(u()), a(v())),
    () => {
      C(B, t().length === 0 || t().every((s) => !u().includes(v()(s))));
    }
  ), y(() => (e(b), e(B)), () => {
    C(E, !e(b) && !e(B));
  }), y(() => (a(I()), a(M())), () => {
    C(F, I() === "horizontal" && M() > 1 ? `repeat(${M()}, minmax(0, 1fr))` : void 0);
  }), y(() => e(F), () => {
    C(H, !!e(F));
  }), ge(), xe();
  var x = Se();
  let P, Q;
  var R = n(x);
  {
    var ne = (s) => {
      var l = ze();
      let O;
      var L = n(l), c = n(L);
      Z(c);
      var h = A(c, 2), _ = n(h);
      let d;
      var T = n(_);
      {
        let m = j(() => e(E) ? "minus" : "check");
        $(T, {
          get name() {
            return e(m);
          },
          weight: "bold",
          color: "var(--spectrum-global-color-gray-50)"
        });
      }
      o(_), o(h);
      var f = A(h, 2), p = n(f, !0);
      o(f), o(L), o(l), V(
        (m, k) => {
          ee(l, "title", N()), O = G(l, 1, "spectrum-Checkbox spectrum-FieldGroup-item select-all-checkbox svelte-1srh935", null, O, m), se(c, e(b)), c.disabled = U(), d = G(_, 1, "icon svelte-1srh935", null, d, k), ae(p, N());
        },
        [
          () => ({ readonly: J() }),
          () => ({ checked: e(b) || e(E) })
        ]
      ), le("change", c, re), q(s, l);
    };
    Y(R, (s) => {
      a(K()), a(t()), g(() => K() && t()?.length > 0) && s(ne);
    });
  }
  var oe = A(R, 2);
  {
    var ie = (s) => {
      var l = ye(), O = Ce(l);
      Ae(O, 1, t, Ge, (L, c) => {
        const h = j(() => (a(v()), e(c), g(() => v()(e(c))))), _ = j(() => (a(u()), a(e(h)), g(() => u().includes(e(h)))));
        var d = Fe();
        let T;
        var f = n(d), p = n(f);
        Z(p);
        var m = A(p, 2), k = n(m);
        let W;
        var ue = n(k);
        $(ue, {
          name: "check",
          weight: "bold",
          color: "var(--spectrum-global-color-gray-50)"
        }), o(k), o(m);
        var X = A(m, 2), de = n(X, !0);
        o(X), o(f), o(d), V(
          (ve, he, pe, me) => {
            ee(d, "title", ve), T = G(d, 1, "spectrum-Checkbox spectrum-FieldGroup-item svelte-1srh935", null, T, he), se(p, e(_)), p.disabled = U(), W = G(k, 1, "icon svelte-1srh935", null, W, pe), ae(de, me);
          },
          [
            () => (a(S()), e(c), g(() => S()(e(c)))),
            () => ({ readonly: J() }),
            () => ({ checked: e(_) }),
            () => (a(S()), e(c), g(() => S()(e(c))))
          ]
        ), le("change", p, () => ce(e(h))), q(L, d);
      }), q(s, l);
    };
    Y(oe, (s) => {
      a(t()), g(() => t() && Array.isArray(t())) && s(ie);
    });
  }
  o(x), V(
    (s, l) => {
      P = G(x, 1, `spectrum-FieldGroup spectrum-FieldGroup--${I()}`, "svelte-1srh935", P, s), Q = fe(x, "", Q, l);
    },
    [
      () => ({ horizontal: e(H) }),
      () => ({ "grid-template-columns": e(F) })
    ]
  ), q(te, x), ke();
}
export {
  Oe as C
};
