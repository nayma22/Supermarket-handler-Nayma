import { g as W, p as n, l as C, i as m, j as e, k as Y, m as Z, T as $, d as P, B as s, b5 as V, A as B, w as ee, z as c, f as I, r as k, U as te, c as E, I as ae, t as le, a as H, at as re, e as f, H as ne } from "./index-quCB9sGT.js";
import { F as se } from "./Field-Dj4x-6nw.js";
var ie = I('<button type="button"><div><!></div></button>'), oe = I('<div class="rating-container svelte-1np9d43"></div>');
function fe(O, l) {
  W(l, !1);
  const w = c(), z = c(), d = c();
  let y = n(l, "colour", 8, ""), T = n(l, "disabled", 8, !1), U = n(l, "readonly", 8, !1), X = n(l, "field", 8), j = n(l, "label", 8), q = n(l, "numberOfStars", 8, 5), p = n(l, "size", 8, "L"), G = n(l, "type", 8, "star"), b = n(l, "variant", 8, "Primary"), N = n(l, "validation", 8), R = n(l, "onChange", 8), u = c(null), i = c(), h = c(), A = c();
  const D = {
    Primary: "var(--primaryColor)",
    Secondary: "var(--primaryColorHover)",
    Mono: "var(--spectrum-global-color-gray-900)",
    Gold: "var(--spectrum-global-color-yellow-500)",
    Red: "var(--spectrum-global-color-red-500)",
    Custom: "var(--primaryColor)"
  }, F = { XS: 0.25, S: 0.5, M: 1, L: 1.5, XL: 2 }, M = (t) => {
    if (e(d)) {
      const v = e(h)?.setValue(t);
      R() && v && R()({ value: t });
    }
  }, g = (t, v) => typeof t == "number" && t >= v + 1;
  C(() => (m(b()), m(y())), () => {
    s(w, b() === "Custom" && y() ? y() : D[b()] || "var(--primaryColor)");
  }), C(() => m(p()), () => {
    s(z, F[p()] || F.M);
  }), C(() => e(i), () => {
    s(d, !e(i)?.disabled && !e(i)?.readonly);
  }), Y(), Z(), se(O, {
    get label() {
      return j();
    },
    get field() {
      return X();
    },
    get disabled() {
      return T();
    },
    get readonly() {
      return U();
    },
    get validation() {
      return N();
    },
    get type() {
      return m(V), B(() => V.NUMBER);
    },
    defaultValue: "0",
    get fieldState() {
      return e(i);
    },
    set fieldState(t) {
      s(i, t);
    },
    get fieldApi() {
      return e(h);
    },
    set fieldApi(t) {
      s(h, t);
    },
    get fieldSchema() {
      return e(A);
    },
    set fieldSchema(t) {
      s(A, t);
    },
    children: (t, v) => {
      var _ = oe();
      $(_, 5, () => ({ length: q() }), te, (J, de, o) => {
        var r = ie();
        let x;
        var S = E(r);
        let L;
        var K = E(S);
        {
          let a = ne(() => (e(u), e(i), B(() => g(e(u), o) || g(e(i)?.value, o) ? "fill" : "regular")));
          ae(K, {
            get name() {
              return G();
            },
            get size() {
              return p();
            },
            get color() {
              return e(w);
            },
            get weight() {
              return e(a);
            }
          });
        }
        k(S), k(r), le(
          (a, Q) => {
            x = H(r, 1, "rating-icon-wrapper svelte-1np9d43", null, x, a), re(r, `padding: 0 ${e(z) ?? ""}px;`), L = H(S, 1, "icon-container svelte-1np9d43", null, L, Q);
          },
          [
            () => ({ disabled: e(i)?.disabled }),
            () => ({
              "hover-preview": g(e(u), o) && !g(e(i)?.value, o)
            })
          ]
        ), f("mouseover", r, function(...a) {
          (e(d) ? () => s(u, o + 1) : null)?.apply(this, a);
        }), f("mouseleave", r, function(...a) {
          (e(d) ? () => s(u, null) : null)?.apply(this, a);
        }), f("focus", r, function(...a) {
          (e(d) ? () => s(u, o + 1) : null)?.apply(this, a);
        }), f("blur", r, function(...a) {
          (e(d) ? () => s(u, null) : null)?.apply(this, a);
        }), f("keydown", r, (a) => e(d) && a.key === "Enter" && M(o + 1)), f("click", r, () => M(o + 1)), P(J, r);
      }), k(_), P(t, _);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), ee();
}
export {
  fe as default
};
