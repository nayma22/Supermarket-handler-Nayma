import { g as X, p as n, a0 as Y, l as c, i as f, j as t, k as $, m as ee, cJ as te, Z as le, w as ne, z as u, H as re, A as oe, B as g } from "./index-quCB9sGT.js";
function se(w, l) {
  X(l, !1);
  const o = u(), m = u(), A = u(), p = u(), S = u(), T = u(), M = u(), _ = u(), x = u();
  let O = n(l, "value", 24, () => []), L = n(l, "id", 24, () => {
  }), b = n(l, "placeholder", 8, null), W = n(l, "disabled", 8, !1), s = n(l, "options", 24, () => []), k = n(l, "getOptionLabel", 8, (e, r) => e), h = n(l, "getOptionValue", 8, (e, r) => e), H = n(l, "readonly", 8, !1), V = n(l, "autocomplete", 8, !1), E = n(l, "sort", 8, !1), j = n(l, "autoWidth", 8, !1), q = n(l, "popoverAutoWidth", 8, !1), v = n(l, "searchTerm", 12, null), z = n(l, "customPopoverHeight", 24, () => {
  }), P = n(l, "open", 12, !1), B = n(l, "loading", 8, !1), C = n(l, "onOptionMouseenter", 8, () => {
  }), D = n(l, "onOptionMouseleave", 8, () => {
  }), F = n(l, "searchPlaceholder", 8, "Search"), J = n(l, "showSelectAll", 8, !1), Z = n(l, "selectAllText", 8, "Select all"), G = n(l, "wrapText", 8, !1);
  const y = Y(), I = (e, r, a) => {
    if (Array.isArray(e) && e.length > 0) {
      if (!r)
        return "";
      const d = e.map((i) => {
        const U = typeof i == "string" ? i : i.toString();
        return r[U] || i;
      }).join(", ");
      return `(${e.length}) ${d}`;
    } else
      return a || "Choose some options";
  }, K = (e) => {
    const r = {};
    return Array.isArray(e) && e.length > 0 && e.forEach((a) => {
      if (a) {
        const d = typeof a == "string" ? a : a.toString();
        r[d] = !0;
      }
    }), r;
  }, N = (e) => {
    if (!e?.length)
      return null;
    const r = {};
    return e.forEach((a, d) => {
      const i = h()(a, d);
      i != null && (r[i] = k()(a, d) || "");
    }), r;
  }, Q = (e, r) => (a) => {
    if (e[a]) {
      const d = r.filter((i) => i.toString() !== a.toString());
      y("change", d);
    } else
      y("change", [...r, a]);
  }, R = () => {
    if (t(p))
      y("change", []);
    else {
      const e = s().map((r) => h()(r));
      y("change", e);
    }
  };
  c(() => f(O()), () => {
    g(o, Array.isArray(O()) ? O() : [O()].filter((e) => !!e));
  }), c(() => t(o), () => {
    g(m, K(t(o)));
  }), c(() => f(s()), () => {
    g(A, N(s()));
  }), c(
    () => (f(s()), t(o), f(h())),
    () => {
      g(p, s().length > 0 && s().every((e) => t(o).includes(h()(e))));
    }
  ), c(
    () => (f(s()), t(o), f(h())),
    () => {
      g(S, s().length === 0 || s().every((e) => !t(o).includes(h()(e))));
    }
  ), c(() => (t(p), t(S)), () => {
    g(T, !t(p) && !t(S));
  }), c(
    () => (t(o), t(A), f(b())),
    () => {
      g(M, I(t(o), t(A), b()));
    }
  ), c(() => t(m), () => {
    g(_, (e) => t(m)[e] === !0);
  }), c(() => (t(m), t(o)), () => {
    g(x, Q(t(m), t(o)));
  }), $(), ee();
  {
    let e = re(() => (t(o), oe(() => !t(o).length)));
    te(w, {
      get id() {
        return L();
      },
      get disabled() {
        return W();
      },
      get readonly() {
        return H();
      },
      get fieldText() {
        return t(M);
      },
      get options() {
        return s();
      },
      get isPlaceholder() {
        return t(e);
      },
      get autocomplete() {
        return V();
      },
      get isOptionSelected() {
        return t(_);
      },
      get getOptionLabel() {
        return k();
      },
      get getOptionValue() {
        return h();
      },
      get onSelectOption() {
        return t(x);
      },
      get sort() {
        return E();
      },
      get autoWidth() {
        return j();
      },
      get popoverAutoWidth() {
        return q();
      },
      get customPopoverHeight() {
        return z();
      },
      get loading() {
        return B();
      },
      get onOptionMouseenter() {
        return C();
      },
      get onOptionMouseleave() {
        return D();
      },
      get searchPlaceholder() {
        return F();
      },
      get showSelectAll() {
        return J();
      },
      get selectAllText() {
        return Z();
      },
      get indeterminate() {
        return t(T);
      },
      get allSelected() {
        return t(p);
      },
      toggleSelectAll: R,
      get wrapText() {
        return G();
      },
      get searchTerm() {
        return v();
      },
      set searchTerm(r) {
        v(r);
      },
      get open() {
        return P();
      },
      set open(r) {
        P(r);
      },
      $$events: {
        loadMore(r) {
          le.call(this, l, r);
        }
      },
      $$legacy: !0
    });
  }
  ne();
}
export {
  se as M
};
