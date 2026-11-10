import { g as ut, p as l, a0 as _t, l as F, j as e, B as i, i as n, k as pt, m as dt, q as ee, c as _, a1 as _a, r as h, s as R, I as ot, Y as Ut, a8 as ya, u as G, A as o, v as Oa, aC as wa, t as xe, a as We, d as m, ci as Zt, n as ge, T as Dt, b as nt, e as gt, cP as Ta, Z as it, U as Wt, a3 as Gt, a2 as Aa, w as ct, z as b, H as Z, f as re, ch as aa, aU as la, y as Mt, cz as Fa, _ as Ea, o as ra, cQ as Vt, $ as Xt, x as Ze, cR as Va, cS as xa, cT as Ca, cU as La, aG as qt, a4 as St, a5 as Rt, E as ft, at as Kt, V as $t, cV as na, aa as wt, aT as sa, bM as Pa, cj as Sa, D as Ra, G as ka, aN as st, bx as oa, bE as Na, cm as ia, ag as ua, cW as zt, ay as da, ak as xt, b5 as C, cX as Ba, cY as Ma, bn as It, h as kt, b4 as za, au as Ia, cZ as ea, aj as Da, cI as Wa, ck as Ct, F as Ga, bm as Ua, c_ as qa, ar as ja, cu as Ha, C as Ya, av as Qa, ai as Ja, c$ as Za, d0 as Xa } from "./index-quCB9sGT.js";
import { f as Ka, D as $a } from "./users-DLoTEo_4.js";
import { M as el } from "./Multiselect-CjqdfLDG.js";
import tl from "./Button-D2gH_afQ.js";
var al = re('<li role="option" aria-selected="true" tabindex="0"><span class="spectrum-Menu-itemLabel svelte-1mzui26"> </span> <div class="check svelte-1mzui26"><!></div></li>'), ll = re('<li class="spectrum-Menu-item empty svelte-1mzui26">No results</li>'), rl = re('<div><ul class="spectrum-Menu" role="listbox"><!></ul></div>'), nl = re('<div><div><input type="text" class="spectrum-Textfield-input spectrum-InputGroup-input svelte-1mzui26"/></div> <button class="spectrum-Picker spectrum-Picker--sizeM spectrum-InputGroup-button" tabindex="-1" aria-haspopup="true"><!></button></div> <!>', 1);
function sl(ne, t) {
  ut(t, !1);
  const u = b();
  let g = l(t, "value", 24, () => {
  }), X = l(t, "id", 24, () => {
  }), D = l(t, "placeholder", 8, "Choose an option or type"), P = l(t, "disabled", 8, !1), a = l(t, "readonly", 8, !1), U = l(t, "options", 24, () => []), d = l(t, "getOptionLabel", 8, (x) => `${x}`), k = l(t, "getOptionValue", 8, (x) => `${x}`), W = l(t, "popoverAutoWidth", 8, !1), K = l(t, "wrapText", 8, !1);
  const q = _t();
  let E = b(!1), B = b(!1), M = b(), f = b("");
  const z = (x) => x == null ? "" : String(x).toLowerCase(), se = (x, A = !0) => {
    q("change", x), i(E, !A);
  }, j = (x) => {
    i(f, x.currentTarget.value), q("type", e(f)), i(E, !0);
  }, y = (x) => {
    i(f, x), q("pick", x), se(x);
  };
  F(() => (e(B), n(g())), () => {
    e(B) || i(f, g() || "");
  }), F(
    () => (e(f), n(U()), n(d()), n(k())),
    () => {
      i(u, !e(f).trim() || !U()?.length ? U() : U().filter((x) => {
        const A = z(d()(x)), ie = z(k()(x)), O = z(e(f));
        return A.includes(O) || ie.includes(O);
      }));
    }
  ), pt(), dt();
  var N = nl(), V = ee(N);
  let c;
  var T = _(V);
  let I;
  var p = _(T);
  _a(p), h(T);
  var me = R(T, 2), we = _(me);
  ot(we, { name: "caret-down", size: "S" }), h(me), h(V), Ut(V, (x) => i(M, x), () => e(M));
  var Ce = R(V, 2);
  {
    let x = Z(() => W() ? "min-to-anchor" : "fixed-to-anchor"), A = Z(() => W() ? 400 : void 0);
    ya(Ce, {
      get anchor() {
        return e(M);
      },
      get open() {
        return e(E);
      },
      get align() {
        return n(Zt), o(() => Zt.Left);
      },
      get widthMode() {
        return e(x);
      },
      get maxWidth() {
        return e(A);
      },
      closeOnScroll: !0,
      $$events: { close: () => i(E, !1) },
      children: (ie, O) => {
        var w = rl();
        let $;
        var fe = _(w), ue = _(fe);
        {
          var Te = (de) => {
            var Ae = ge(), at = ee(Ae);
            Dt(at, 1, () => e(u), Wt, (Xe, Ge) => {
              var Ve = al();
              let s;
              var v = _(Ve), te = _(v, !0);
              h(v);
              var ce = R(v, 2), ve = _(ce);
              ot(ve, { name: "check", size: "S" }), h(ce), h(Ve), xe(
                (Q, ke) => {
                  s = We(Ve, 1, "spectrum-Menu-item svelte-1mzui26", null, s, Q), nt(te, ke);
                },
                [
                  () => ({ "is-selected": k()(e(Ge)) === g() }),
                  () => (n(d()), e(Ge), o(() => d()(e(Ge))))
                ]
              ), gt("mousedown", Ve, Ta(function(Q) {
                it.call(this, t, Q);
              })), gt("click", Ve, () => y(k()(e(Ge)))), m(Xe, Ve);
            }), m(de, Ae);
          }, be = (de) => {
            var Ae = ll();
            m(de, Ae);
          };
          G(ue, (de) => {
            e(u), o(() => e(u) && Array.isArray(e(u)) && e(u).length) ? de(Te) : de(be, !1);
          });
        }
        h(fe), h(w), Oa(w, (de, Ae) => wa?.(de, Ae), () => () => {
          i(E, !1);
        }), xe((de) => $ = We(w, 1, "popover-content svelte-1mzui26", null, $, de), [
          () => ({ "auto-width": W(), "wrap-text": K() })
        ]), m(ie, w);
      },
      $$slots: { default: !0 }
    });
  }
  xe(
    (x, A) => {
      c = We(V, 1, "spectrum-InputGroup svelte-1mzui26", null, c, x), I = We(T, 1, "spectrum-Textfield spectrum-InputGroup-textfield svelte-1mzui26", null, I, A), Gt(p, "id", X()), Aa(p, e(f)), Gt(p, "placeholder", D() || ""), p.disabled = P(), p.readOnly = a(), me.disabled = P();
    },
    [
      () => ({
        "is-focused": e(E) || e(B),
        "is-disabled": P()
      }),
      () => ({
        "is-disabled": P(),
        "is-focused": e(E) || e(B)
      })
    ]
  ), gt("focus", p, () => i(B, !0)), gt("blur", p, () => {
    i(B, !1), e(f) !== (g() || "") && q("change", e(f)), q("blur");
  }), gt("input", p, j), gt("click", me, () => i(E, !e(E))), m(ne, N), ct();
}
function ta(ne, t) {
  ut(t, !1);
  let u = l(t, "value", 28, () => {
  }), g = l(t, "label", 24, () => {
  }), X = l(t, "disabled", 8, !1), D = l(t, "readonly", 8, !1), P = l(t, "labelPosition", 8, "above"), a = l(t, "error", 24, () => {
  }), U = l(t, "placeholder", 8, "Choose an option or type"), d = l(t, "options", 24, () => []), k = l(t, "helpText", 24, () => {
  }), W = l(t, "required", 8, !1), K = l(t, "popoverAutoWidth", 8, !1), q = l(t, "wrapText", 8, !1);
  const E = (y, N) => {
    if (y && typeof y == "object" && N in y) {
      const c = y[N];
      return typeof c == "string" ? c : typeof c == "number" || typeof c == "boolean" ? String(c) : "";
    }
    return y == null ? "" : String(y);
  }, B = (y) => E(y, "label"), M = (y) => E(y, "value");
  let f = l(t, "getOptionLabel", 8, B), z = l(t, "getOptionValue", 8, M);
  const se = _t(), j = (y) => {
    u(y.detail), se("change", y.detail);
  };
  dt(), aa(ne, {
    get helpText() {
      return k();
    },
    get label() {
      return g();
    },
    get labelPosition() {
      return P();
    },
    get error() {
      return a();
    },
    get required() {
      return W();
    },
    children: (y, N) => {
      sl(y, {
        get disabled() {
          return X();
        },
        get value() {
          return u();
        },
        get options() {
          return d();
        },
        get placeholder() {
          return U();
        },
        get readonly() {
          return D();
        },
        get getOptionLabel() {
          return f();
        },
        get getOptionValue() {
          return z();
        },
        get popoverAutoWidth() {
          return K();
        },
        get wrapText() {
          return q();
        },
        $$events: {
          change: j,
          pick(V) {
            it.call(this, t, V);
          },
          type(V) {
            it.call(this, t, V);
          },
          blur(V) {
            it.call(this, t, V);
          }
        }
      });
    },
    $$slots: { default: !0 }
  }), ct();
}
function ca(ne, t) {
  ut(t, !1);
  const u = b();
  let g = l(t, "value", 28, () => []), X = l(t, "label", 24, () => {
  }), D = l(t, "disabled", 8, !1), P = l(t, "readonly", 8, !1), a = l(t, "labelPosition", 8, "above"), U = l(t, "error", 24, () => {
  }), d = l(t, "placeholder", 24, () => {
  }), k = l(t, "options", 24, () => []), W = l(t, "getOptionLabel", 8, (T) => T), K = l(t, "getOptionValue", 8, (T) => T), q = l(t, "sort", 8, !1), E = l(t, "autoWidth", 8, !1), B = l(t, "popoverAutoWidth", 8, !1), M = l(t, "autocomplete", 8, !1), f = l(t, "searchTerm", 28, () => {
  }), z = l(t, "customPopoverHeight", 24, () => {
  }), se = l(t, "helpText", 24, () => {
  }), j = l(t, "onOptionMouseenter", 8, () => {
  }), y = l(t, "onOptionMouseleave", 8, () => {
  }), N = l(t, "searchPlaceholder", 24, () => {
  });
  const V = _t(), c = (T) => {
    g(T.detail), V("change", T.detail);
  };
  F(() => n(g()), () => {
    i(u, g() && !Array.isArray(g()) ? [g()] : g());
  }), pt(), dt(), aa(ne, {
    get helpText() {
      return se();
    },
    get label() {
      return X();
    },
    get labelPosition() {
      return a();
    },
    get error() {
      return U();
    },
    children: (T, I) => {
      el(T, {
        get disabled() {
          return D();
        },
        get readonly() {
          return P();
        },
        get options() {
          return k();
        },
        get placeholder() {
          return d();
        },
        get sort() {
          return q();
        },
        get getOptionLabel() {
          return W();
        },
        get getOptionValue() {
          return K();
        },
        get autoWidth() {
          return E();
        },
        get popoverAutoWidth() {
          return B();
        },
        get autocomplete() {
          return M();
        },
        get customPopoverHeight() {
          return z();
        },
        get onOptionMouseenter() {
          return j();
        },
        get onOptionMouseleave() {
          return y();
        },
        get searchPlaceholder() {
          return N();
        },
        get value() {
          return e(u);
        },
        set value(p) {
          i(u, p);
        },
        get searchTerm() {
          return f();
        },
        set searchTerm(p) {
          f(p);
        },
        $$events: {
          change: c,
          click(p) {
            it.call(this, t, p);
          }
        },
        $$legacy: !0
      });
    },
    $$slots: { default: !0 }
  }), ct();
}
const ol = "drawer-container", Lt = wt([]), yt = wt(!1), Pt = wt(!0), Nt = wt(null), Bt = wt(null);
let Ot = null;
const il = () => {
  const ne = document.getElementsByClassName(ol)[0];
  if (Ot || !(ne instanceof HTMLElement))
    return;
  Ot = new ResizeObserver((u) => {
    if (!u?.[0])
      return;
    const g = u[0].target.getBoundingClientRect();
    Nt.set(g.left), Bt.set(g.width);
  }), Ot.observe(ne);
  const t = ne.getBoundingClientRect();
  Nt.set(t.left), Bt.set(t.width);
}, ul = () => {
  sa(Lt).length || (Ot?.disconnect(), Ot = null, yt.set(!1), Pt.set(!0), Nt.set(null), Bt.set(null));
};
var dl = re('<div class="text svelte-1189ub1"> </div>'), cl = re('<div class="drawer-wrapper"><div></div> <div><header class="svelte-1189ub1"><!> <div class="buttons svelte-1189ub1"><!> <!> <!></div></header> <!> <div></div></div></div>');
function vl(ne, t) {
  const u = la(t);
  ut(t, !1);
  const g = () => Ze(Lt, "$openDrawers", d), X = () => Ze(Va, "$overlayStack", d), D = () => Ze(Nt, "$drawerLeft", d), P = () => Ze(Bt, "$drawerWidth", d), a = () => Ze(yt, "$modal", d), U = () => Ze(Pt, "$resizable", d), [d, k] = Mt();
  let W = l(t, "title", 8, ""), K = l(t, "forceModal", 8, !1), q = l(t, "zIndex", 24, () => {
  });
  const E = _t(), B = 11;
  let M = b(!1), f = Fa(), z = b(0), se = b(-1), j = b(Vt), y = b("");
  const N = (O, w, $, fe, ue) => {
    let Te = `
      --scale-factor: ${me(O)};
      --spacing: ${B}px;
      ${ue != null ? `z-index: ${ue};` : ""}
    `;
    return fe || w == null || $ == null ? Te : `
      ${Te}
      left: ${w + B}px;
      width: ${$ - 2 * B}px;
    `;
  };
  function V() {
    e(M) || (K() && (yt.set(!0), Pt.set(!1)), il(), i(M, !0), E("drawerShow", f), Lt.update((O) => [...O, f]), xa(f));
  }
  function c() {
    e(M) && (i(M, !1), E("drawerHide", f), Lt.update((O) => O.filter((w) => w !== f)), Ca(f), ul());
  }
  Ea("drawer", { hide: c, show: V, modal: yt, resizable: Pt });
  const T = (O) => O < 0.5 ? 2 * O * O : 1 - Math.pow(-2 * O + 2, 2) / 2, I = (O) => ({
    duration: 260,
    css: (w) => {
      const $ = T(w);
      return `
          transform: translateY(calc(${(1 - $) * 200}px - 800px * (1 - var(--scale-factor))));
          opacity: ${$};
        `;
    }
  }), p = (O) => ({
    duration: 260,
    css: (w) => `opacity: ${T(w)};`
  }), me = (O) => 1 - (1 - 1 / (O * O + 1)) * 0.1;
  ra(() => {
    e(M) && c();
  }), F(() => g(), () => {
    i(z, g().length - g().indexOf(f) - 1);
  }), F(() => X(), () => {
    i(se, X().indexOf(f));
  }), F(() => (n(q()), e(se), Vt), () => {
    i(j, q() ?? (e(se) === -1 ? Vt : Vt + e(se)));
  }), F(
    () => (e(z), D(), P(), a(), e(j)),
    () => {
      i(y, N(e(z), D(), P(), a(), e(j)));
    }
  ), pt();
  var we = { show: V, hide: c };
  dt();
  var Ce = ge(), x = ee(Ce);
  {
    var A = (O) => {
      La(O, {
        target: ".modal-container",
        children: (w, $) => {
          var fe = cl(), ue = _(fe);
          let Te;
          var be = R(ue, 2);
          let de;
          var Ae = _(be), at = _(Ae);
          {
            var Xe = (H) => {
              var J = ge(), _e = ee(J);
              ft(_e, t, "title", {}, null), m(H, J);
            }, Ge = (H) => {
              var J = dl(), _e = _(J, !0);
              h(J), xe(() => nt(_e, W() || "Bindings")), m(H, J);
            };
            G(at, (H) => {
              o(() => u.title) ? H(Xe) : H(Ge, !1);
            });
          }
          var Ve = R(at, 2), s = _(Ve);
          qt(s, {
            secondary: !0,
            quiet: !0,
            $$events: { click: c },
            children: (H, J) => {
              St();
              var _e = Rt("Cancel");
              m(H, _e);
            },
            $$slots: { default: !0 }
          });
          var v = R(s, 2);
          ft(v, t, "buttons", {}, null);
          var te = R(v, 2);
          {
            var ce = (H) => {
              na(H, {
                size: "M",
                quiet: !0,
                get selected() {
                  return a();
                },
                $$events: { click: () => yt.set(!a()) },
                children: (J, _e) => {
                  {
                    let Ne = Z(() => a() ? "arrows-in-simple" : "arrows-out-simple");
                    ot(J, {
                      get name() {
                        return e(Ne);
                      },
                      size: "S"
                    });
                  }
                },
                $$slots: { default: !0 }
              });
            };
            G(te, (H) => {
              U() && H(ce);
            });
          }
          h(Ve), h(Ae);
          var ve = R(Ae, 2);
          ft(ve, t, "body", {}, null);
          var Q = R(ve, 2);
          let ke;
          h(be), h(fe), xe(
            (H, J, _e) => {
              Te = We(ue, 1, "underlay svelte-1189ub1", null, Te, H), Kt(ue, `z-index: ${e(j) - 1}`), de = We(be, 1, "drawer svelte-1189ub1", null, de, J), Kt(be, e(y)), ke = We(Q, 1, "overlay svelte-1189ub1", null, ke, _e);
            },
            [
              () => ({ hidden: !a() }),
              () => ({ stacked: e(z) > 0, modal: a() }),
              () => ({ hidden: a() || e(z) === 0 })
            ]
          ), $t(3, ue, () => p), $t(3, be, () => I), m(w, fe);
        },
        $$slots: { default: !0 }
      });
    };
    G(x, (O) => {
      e(M) && O(A);
    });
  }
  m(ne, Ce), Xt(t, "show", V), Xt(t, "hide", c);
  var ie = ct(we);
  return k(), ie;
}
var gl = re('<div class="user-control"><!></div>');
function fl(ne, t) {
  ut(t, !1);
  const u = () => Ze(e(D), "$fetch", g), [g, X] = Mt(), D = b(), P = b(), a = b(), U = b(), d = b();
  let k = l(t, "API", 24, Pa), W = l(t, "value", 8, null), K = l(t, "disabled", 8, !1), q = l(t, "multiselect", 8, !1), E = b(null), B = "", M = b({}), f = /* @__PURE__ */ new Set();
  const z = Sa("picker"), se = Na(
    (c) => {
      c !== B && (B = c, e(D).update({ query: c ? { string: { email: c } } : {} }));
    },
    250
  ), j = async (c) => {
    const T = c.filter((p) => !f.has(p));
    if (!T.length)
      return;
    T.forEach((p) => f.add(p));
    const I = await Ka(k(), T);
    T.forEach((p) => f.delete(p)), Object.keys(I).length && i(M, { ...e(M), ...I });
  }, y = (c, T) => {
    const I = new Set(T);
    return [...c].sort((p, me) => {
      const we = I.has(p._id), Ce = I.has(me._id);
      return we !== Ce ? we ? -1 : 1 : (p.email || "").localeCompare(me.email || "");
    });
  };
  F(() => n(k()), () => {
    Ra(
      i(D, ka({
        API: k(),
        datasource: { type: "user" },
        options: { limit: 100 }
      })),
      "$fetch",
      g
    );
  }), F(() => e(E), () => {
    se(e(E) || "");
  }), F(() => n(W()), () => {
    i(P, W() ? Array.isArray(W()) ? W() : [W()] : []);
  }), F(() => u(), () => {
    i(a, new Set((u().rows || []).map((c) => c._id)));
  }), F(() => (e(P), e(a), e(M)), () => {
    j(e(P).filter((c) => !e(a).has(c) && !e(M)[c]));
  }), F(
    () => (u(), e(M), e(P), e(a)),
    () => {
      i(U, y(
        [
          ...u().rows || [],
          ...Object.values(e(M)).filter((c) => e(P).includes(c._id) && !e(a).has(c._id))
        ],
        e(P)
      ));
    }
  ), F(() => (n(q()), st), () => {
    i(d, q() ? ca : st);
  }), pt(), dt();
  var N = gl(), V = _(N);
  oa(V, () => e(d), (c, T) => {
    T(c, {
      get value() {
        return W();
      },
      autocomplete: !0,
      get options() {
        return e(U);
      },
      getOptionLabel: (I) => I.email,
      getOptionValue: (I) => I._id,
      get disabled() {
        return K();
      },
      get searchPlaceholder() {
        return o(() => z.searchPlaceholder);
      },
      popoverAutoWidth: !0,
      get searchTerm() {
        return e(E);
      },
      set searchTerm(I) {
        i(E, I);
      },
      $$events: {
        change(I) {
          it.call(this, t, I);
        }
      },
      $$legacy: !0
    });
  }), h(N), m(ne, N), ct(), X();
}
var pl = re("<div><!></div>"), hl = re("<div><!></div>"), ml = re('<div><!> <div><div class="field svelte-1alme8h"><!></div> <div class="binding-control svelte-1alme8h"><!></div></div></div>');
function bl(ne, t) {
  ut(t, !1);
  const u = b(), g = b(), X = b(), D = b(), P = b();
  let a = l(t, "filter", 8), U = l(t, "disabled", 8, !1), d = l(t, "bindings", 24, () => []), k = l(t, "allowBindings", 8, !1), W = l(t, "schemaFields", 8), K = l(t, "panel", 8, void 0), q = l(t, "drawerTitle", 8, void 0), E = l(t, "toReadable", 8, void 0), B = l(t, "toRuntime", 8, void 0), M = l(t, "evaluationContext", 24, () => ({})), f = l(t, "bindingValueType", 24, () => ia.BINDING), z = l(t, "useConditionValueControls", 8, !1), se = l(t, "calendarLabels", 24, () => ua("calendar"));
  const j = _t(), { OperatorOptions: y, FilterValueType: N } = da;
  let V = b();
  const c = (s) => W().find((te) => te.name === s)?.constraints?.inclusion || [], T = (s) => W().find((v) => v.name === s.field), I = (s) => {
    i(X, s.detail);
  }, p = (s) => {
    i(u, s.detail), j("change", {
      value: B() ? B()(d(), e(u)) : e(u)
    });
  }, me = () => {
    j("change", {
      value: B() ? B()(d(), e(X)) : e(X),
      valueType: e(X) ? f() : N.VALUE
    });
  }, we = (s) => !s || !isNaN(new Date(s).valueOf()), Ce = (s) => {
    let v = [];
    if (Array.isArray(s))
      v = s;
    else if (s && typeof s == "string")
      v = s.split(",");
    else
      return !s;
    const te = T(a())?.constraints?.inclusion;
    return te?.length ? v.every((ce) => te.includes(ce)) : !0;
  }, x = (s) => s === "false" || s === "true" || s == "", A = (s) => {
    let v = [];
    if (Array.isArray(s))
      v = s;
    else if (s && typeof s == "string")
      v = s.split(",");
    else
      return !s;
    return v.every((te) => te.startsWith("ro_"));
  }, ie = {
    date: we,
    datetime: we,
    bb_reference: A,
    bb_reference_single: A,
    array: Ce,
    longform: (s) => !zt(s),
    options: (s) => !zt(s) && !Ba(s)?.length,
    boolean: x
  }, O = (s) => {
    const v = ie[a().type];
    return v ? v(s) : !0;
  }, w = (s) => (Array.isArray(s) ? s.join(",") : e(g)) ?? "";
  F(() => n(a()), () => {
    i(u, a()?.value);
  }), F(
    () => (n(E()), n(d()), e(u)),
    () => {
      i(g, E() ? E()(d(), e(u)) : e(u));
    }
  ), F(() => e(u), () => {
    i(X, w(e(u)));
  }), F(() => e(u), () => {
    i(D, zt(e(u)));
  }), F(() => e(u), () => {
    i(P, O(e(u)));
  }), pt(), dt();
  var $ = ml(), fe = _($);
  {
    let s = Z(() => (n(q()), n(a()), o(() => q() || a().field)));
    Ut(
      vl(fe, {
        get title() {
          return e(s);
        },
        forceModal: !0,
        $$events: {
          drawerHide(v) {
            it.call(this, t, v);
          },
          drawerShow(v) {
            it.call(this, t, v);
          }
        },
        $$slots: {
          buttons: (v, te) => {
            qt(v, {
              cta: !0,
              slot: "buttons",
              $$events: {
                click: () => {
                  me(), e(V).hide();
                }
              },
              children: (ce, ve) => {
                St();
                var Q = Rt("Confirm");
                m(ce, Q);
              },
              $$slots: { default: !0 }
            });
          },
          body: (v, te) => {
            var ce = ge(), ve = ee(ce);
            oa(ve, K, (Q, ke) => {
              ke(Q, {
                slot: "body",
                get value() {
                  return e(X);
                },
                allowJS: !0,
                allowHelpers: !0,
                allowHBS: !0,
                get bindings() {
                  return d();
                },
                get context() {
                  return M();
                },
                $$events: { change: I }
              });
            }), m(v, ce);
          }
        },
        $$legacy: !0
      }),
      (v) => i(V, v),
      () => e(V)
    );
  }
  var ue = R(fe, 2);
  let Te;
  var be = _(ue), de = _(be);
  {
    var Ae = (s) => {
      {
        let v = Z(() => e(D) ? "(JavaScript function)" : e(g));
        xt(s, {
          get disabled() {
            return n(a()), o(() => a().noValue);
          },
          get readonly() {
            return e(D);
          },
          get value() {
            return e(v);
          },
          $$events: { change: p }
        });
      }
    }, at = (s) => {
      var v = pl(), te = _(v);
      {
        var ce = (Q) => {
          xt(Q, {
            type: "number",
            get disabled() {
              return n(a()), o(() => a().noValue);
            },
            get value() {
              return e(g);
            },
            $$events: { change: p }
          });
        }, ve = (Q) => {
          var ke = ge(), H = ee(ke);
          {
            var J = (Ne) => {
              xt(Ne, {
                get disabled() {
                  return n(a()), o(() => a().noValue);
                },
                get value() {
                  return e(g);
                },
                $$events: { change: p }
              });
            }, _e = (Ne) => {
              var Tt = ge(), r = ee(Tt);
              {
                var L = (ye) => {
                  {
                    let Ke = Z(() => (e(g), o(() => Array.isArray(e(g)) ? e(g) : [])));
                    Ma(ye, {
                      get disabled() {
                        return n(a()), o(() => a().noValue);
                      },
                      get value() {
                        return e(Ke);
                      },
                      onchange: (vt) => p({ detail: vt })
                    });
                  }
                }, pe = (ye) => {
                  var Ke = ge(), vt = ee(Ke);
                  {
                    var Ue = (Le) => {
                      {
                        let Pe = Z(() => (n(a()), o(() => c(a().field))));
                        ca(Le, {
                          get disabled() {
                            return n(a()), o(() => a().noValue);
                          },
                          get options() {
                            return e(Pe);
                          },
                          get value() {
                            return e(g);
                          },
                          popoverAutoWidth: !0,
                          $$events: { change: p }
                        });
                      }
                    }, lt = (Le) => {
                      var Pe = ge(), ht = ee(Pe);
                      {
                        var ae = (qe) => {
                          {
                            let mt = Z(() => (n(a()), o(() => c(a().field))));
                            ta(qe, {
                              get disabled() {
                                return n(a()), o(() => a().noValue);
                              },
                              get options() {
                                return e(mt);
                              },
                              get value() {
                                return e(g);
                              },
                              popoverAutoWidth: !0,
                              wrapText: !0,
                              $$events: { change: p }
                            });
                          }
                        }, Be = (qe) => {
                          var mt = ge(), Me = ee(mt);
                          {
                            var je = (he) => {
                              st(he, {
                                placeholder: !1,
                                get disabled() {
                                  return n(a()), o(() => a().noValue);
                                },
                                options: [
                                  { label: "True", value: "true" },
                                  { label: "False", value: "false" }
                                ],
                                get value() {
                                  return e(g);
                                },
                                popoverAutoWidth: !0,
                                $$events: { change: p }
                              });
                            }, He = (he) => {
                              var Y = ge(), Ye = ee(Y);
                              {
                                var ze = (Fe) => {
                                  ta(Fe, {
                                    get disabled() {
                                      return n(a()), o(() => a().noValue);
                                    },
                                    options: [
                                      { label: "True", value: "true" },
                                      { label: "False", value: "false" }
                                    ],
                                    get value() {
                                      return e(g);
                                    },
                                    popoverAutoWidth: !0,
                                    $$events: { change: p }
                                  });
                                }, $e = (Fe) => {
                                  var le = ge(), Oe = ee(le);
                                  {
                                    var Se = (Ie) => {
                                      {
                                        let et = Z(() => (n(a()), o(() => !T(a())?.dateOnly))), rt = Z(() => (n(a()), o(() => T(a())?.timeOnly)));
                                        $a(Ie, {
                                          get disabled() {
                                            return n(a()), o(() => a().noValue);
                                          },
                                          get enableTime() {
                                            return e(et);
                                          },
                                          get timeOnly() {
                                            return e(rt);
                                          },
                                          get calendarLabels() {
                                            return se();
                                          },
                                          get value() {
                                            return e(g);
                                          },
                                          $$events: { change: p }
                                        });
                                      }
                                    }, bt = (Ie) => {
                                      var et = ge(), rt = ee(et);
                                      {
                                        var tt = (Re) => {
                                          {
                                            let S = Z(() => (n(a()), o(() => [y.In.value, y.ContainsAny.value].includes(a().operator))));
                                            fl(Re, {
                                              get multiselect() {
                                                return e(S);
                                              },
                                              get disabled() {
                                                return n(a()), o(() => a().noValue);
                                              },
                                              get value() {
                                                return e(g);
                                              },
                                              $$events: { change: p }
                                            });
                                          }
                                        }, At = (Re) => {
                                          xt(Re, { disabled: !0 });
                                        };
                                        G(
                                          rt,
                                          (Re) => {
                                            n(C), n(a()), o(() => [C.BB_REFERENCE, C.BB_REFERENCE_SINGLE].includes(a().type)) ? Re(tt) : Re(At, !1);
                                          },
                                          !0
                                        );
                                      }
                                      m(Ie, et);
                                    };
                                    G(
                                      Oe,
                                      (Ie) => {
                                        n(a()), n(C), o(() => a().type === C.DATETIME) ? Ie(Se) : Ie(bt, !1);
                                      },
                                      !0
                                    );
                                  }
                                  m(Fe, le);
                                };
                                G(
                                  Ye,
                                  (Fe) => {
                                    n(a()), n(C), o(() => a().type === C.BOOLEAN) ? Fe(ze) : Fe($e, !1);
                                  },
                                  !0
                                );
                              }
                              m(he, Y);
                            };
                            G(
                              Me,
                              (he) => {
                                n(a()), n(C), n(z()), o(() => a().type === C.BOOLEAN && z()) ? he(je) : he(He, !1);
                              },
                              !0
                            );
                          }
                          m(qe, mt);
                        };
                        G(
                          ht,
                          (qe) => {
                            n(a()), n(C), o(() => a().type === C.OPTIONS) ? qe(ae) : qe(Be, !1);
                          },
                          !0
                        );
                      }
                      m(Le, Pe);
                    };
                    G(
                      vt,
                      (Le) => {
                        n(a()), n(C), n(It), o(() => a().type === C.ARRAY || a().type === C.OPTIONS && (a().operator === It.ONE_OF || a().operator === It.NOT_ONE_OF)) ? Le(Ue) : Le(lt, !1);
                      },
                      !0
                    );
                  }
                  m(ye, Ke);
                };
                G(
                  r,
                  (ye) => {
                    n(a()), n(C), n(z()), o(() => a().type === C.ARRAY && z() && !c(a().field).length) ? ye(L) : ye(pe, !1);
                  },
                  !0
                );
              }
              m(Ne, Tt);
            };
            G(
              H,
              (Ne) => {
                n(C), n(a()), o(() => [
                  C.STRING,
                  C.LONGFORM,
                  C.NUMBER,
                  C.BIGINT,
                  C.FORMULA,
                  C.AI,
                  C.BARCODEQR
                ].includes(a().type)) ? Ne(J) : Ne(_e, !1);
              },
              !0
            );
          }
          m(Q, ke);
        };
        G(te, (Q) => {
          n(a()), n(C), n(z()), o(() => a().type === C.NUMBER && z()) ? Q(ce) : Q(ve, !1);
        });
      }
      h(v), m(s, v);
    };
    G(de, (s) => {
      n(a()), o(() => a().valueType === N.BINDING) ? s(Ae) : s(at, !1);
    });
  }
  h(be);
  var Xe = R(be, 2), Ge = _(Xe);
  {
    var Ve = (s) => {
      var v = hl();
      let te;
      var ce = _(v);
      ot(ce, { size: "S", weight: "fill", name: "lightning" }), h(v), xe((ve) => te = We(v, 1, "icon svelte-1alme8h", null, te, ve), [() => ({ binding: a().valueType === "Binding" })]), gt("click", v, () => {
        e(V).show();
      }), m(s, v);
    };
    G(Ge, (s) => {
      n(U()), n(k()), n(a()), o(() => !U() && k() && !a().noValue) && s(Ve);
    });
  }
  h(Xe), h(ue), h($), xe((s) => Te = We(ue, 1, "field-wrap svelte-1alme8h", null, Te, s), [
    () => ({ bindings: k(), valid: e(P) })
  ]), m(ne, $), ct();
}
var _l = re('<div class="global-filter-header svelte-1bn7luf"><span> </span> <span class="operator-picker svelte-1bn7luf"><!></span> <span> </span></div>'), yl = re("<div><!> <!> <!> <!> <!></div>"), Ol = re('<div class="group svelte-1bn7luf"><div class="group-header svelte-1bn7luf"><div class="group-options svelte-1bn7luf"><span> </span> <span class="operator-picker svelte-1bn7luf"><!></span> <span> </span></div> <div class="group-actions svelte-1bn7luf"><!> <!></div></div> <div class="filters svelte-1bn7luf"></div></div>'), wl = re('<div class="filter-groups svelte-1bn7luf"></div>'), Tl = re('<div class="empty-filter svelte-1bn7luf"><span>Return</span> <span class="empty-filter-picker svelte-1bn7luf"><!></span> <span> </span></div>'), Al = re('<a target="_blank"><!></a>'), Fl = re('<!> <div class="add-group svelte-1bn7luf"><!> <!></div>', 1), El = re('<!> <!> <!> <div class="filters-footer svelte-1bn7luf"><!></div>', 1), Vl = re("<div><!></div>");
function xl(ne, t) {
  const u = la(t);
  ut(t, !1);
  const g = () => Ze(fe, "$appStore", D), X = () => Ze(Ae, "$context", D), [D, P] = Mt(), a = b(), U = b(), d = b(), k = b(), W = _t(), {
    OperatorOptions: K,
    DEFAULT_BB_DATASOURCE_ID: q,
    FilterOperator: E,
    OnEmptyFilter: B,
    FilterValueType: M
  } = da;
  let f = l(t, "schemaFields", 12), z = l(t, "filters", 8), se = l(t, "tables", 24, () => []), j = l(t, "datasource", 8), y = l(t, "behaviourFilters", 8, !1), N = l(t, "allowBindings", 8, !1), V = l(t, "allowOnEmpty", 8, !0), c = l(t, "docsURL", 8, "https://docs.budibase.com/docs/searchfilter-data"), T = l(t, "prefix", 8, "Show data which matches"), I = l(t, "filterTypeLabel", 8, "filter"), p = l(t, "drawerTitle", 8, null), me = l(t, "bindingValueType", 24, () => ia.BINDING), we = l(t, "useConditionValueControls", 8, !1), Ce = l(t, "flagInvalidFields", 8, !1), x = l(t, "bindings", 8), A = l(t, "panel", 8), ie = l(t, "toReadable", 8), O = l(t, "toRuntime", 8), w = l(t, "evaluationContext", 24, () => ({}));
  const $ = kt("sdk") || {}, { appStore: fe } = $, ue = (r) => Array.isArray(r) ? Wa(r) : Ct(r), Te = Object.values(E).map((r) => ({ value: r, label: za(r) })), be = {
    [B.RETURN_ALL]: "All rows",
    [B.RETURN_NONE]: "No rows"
  }, de = Object.values(B).map((r) => ({ value: r, label: be[r] })), Ae = kt("context"), at = "This field may have been deleted or renamed. No rows will be returned until it is updated or removed", Xe = (r, L) => Ce() && !!r.field && !L.some((pe) => pe.value === r.field), Ge = (r, L) => Xe(r, L) ? [
    {
      label: r.field,
      value: r.field,
      icon: {
        component: ot,
        props: {
          name: "warning",
          size: "M",
          color: "var(--spectrum-global-color-yellow-600)"
        }
      }
    },
    ...L
  ] : L, Ve = (r) => {
    const L = r.type;
    ce(r), ve(r), Q(r, L);
  }, s = (r) => {
    ve(r), Q(r, r.type);
  }, v = (r) => f().find((L) => L.name === r.field), te = (r) => Ha(r?.type ? r : { ...r, type: C.STRING }, r?.field || r?.name, j()), ce = (r) => {
    const L = f().find((pe) => pe.name === r.field);
    r.type = L?.type, r.subtype = L?.subtype, r.formulaType = L?.formulaType, r.constraints = L?.constraints, r.externalType = v(r)?.externalType;
  }, ve = (r) => {
    const L = te(r).map((ye) => ye.value);
    L.includes(r.operator) || (r.operator = L[0] ?? K.Equals.value);
    const pe = [K.Empty.value, K.NotEmpty.value];
    r.noValue = pe.includes(r.operator);
  }, Q = (r, L) => {
    if (r.noValue) {
      r.value = null;
      return;
    }
    Array.isArray(r.value) ? (r.valueType !== "Value" || r.type !== C.ARRAY) && (r.value = null) : r.type === C.ARRAY && r.valueType === "Value" ? r.value = [] : L !== r.type && (L === C.BB_REFERENCE || r.type === C.BB_REFERENCE) && (r.value = r.type === C.ARRAY ? [] : null);
  }, ke = (r) => r == 0 ? "When" : { [E.ANY]: "or", [E.ALL]: "and" }[e(d).logicalOperator], H = (r, L, pe) => {
    const ye = Ct(r);
    J({ groupIdx: L, filterIdx: pe, filter: { ...ye } });
  }, J = (r) => {
    const {
      groupIdx: L,
      filterIdx: pe,
      filter: ye,
      group: Ke,
      addFilter: vt,
      addGroup: Ue,
      deleteGroup: lt,
      deleteFilter: Le,
      logicalOperator: Pe,
      onEmptyFilter: ht
    } = r;
    let ae = Ct(e(d)), Be = ae?.groups?.[L];
    Be?.filters?.[pe] ? Le ? (Be.filters.splice(pe, 1), Be.filters.length === 0 && ae.groups.splice(L, 1)) : ye && (Be.filters[pe] = ye) : Be ? lt ? ae.groups.splice(L, 1) : vt ? Be.filters.push({ valueType: M.VALUE }) : Ke && (ae.groups[L] = { ...Be, ...Ke }) : Ue ? (ae?.groups?.length || (ae = {
      logicalOperator: Ua.ALL,
      onEmptyFilter: Ga.RETURN_NONE,
      groups: []
    }), ae.groups.push({
      logicalOperator: qa.ANY,
      filters: [{ valueType: M.VALUE }]
    })) : Pe ? ae = { ...ae, logicalOperator: Pe } : ht && (ae = { ...ae, onEmptyFilter: ht }), ae = ae.groups.length ? ae : null, W("change", ae);
  };
  F(() => g(), () => {
    i(a, Ia(fe ? g().application?.translationOverrides : void 0));
  }), F(() => e(a), () => {
    i(U, ua("calendar", e(a)));
  }), F(() => n(z()), () => {
    i(d, ue(z()));
  }), F(
    () => (n(se()), n(j()), n(f())),
    () => {
      se().find((r) => r._id === j()?.tableId && r.sourceId === q) && !f().some((r) => r.name === "_id") && f([...f(), { name: "_id", type: "string" }]);
    }
  ), F(() => n(f()), () => {
    i(k, (f() || []).filter((r) => !r.calculationType).map((r) => ({ label: r.displayName || r.name, value: r.name })));
  }), pt(), dt();
  var _e = Vl();
  let Ne;
  var Tt = _(_e);
  ea(Tt, {
    noPadding: !0,
    children: (r, L) => {
      var pe = ge(), ye = ee(pe);
      {
        var Ke = (Ue) => {
          var lt = El(), Le = ee(lt);
          ft(Le, t, "filtering-hero-content", {}, null);
          var Pe = R(Le, 2);
          {
            var ht = (Me) => {
              var je = _l(), He = _(je), he = _(He, !0);
              h(He);
              var Y = R(He, 2), Ye = _(Y);
              {
                let Fe = Z(() => (e(d), o(() => e(d)?.logicalOperator)));
                st(Ye, {
                  get value() {
                    return e(Fe);
                  },
                  get options() {
                    return Te;
                  },
                  getOptionLabel: (le) => le.label,
                  getOptionValue: (le) => le.value,
                  placeholder: !1,
                  popoverAutoWidth: !0,
                  $$events: {
                    change: (le) => {
                      J({ logicalOperator: le.detail });
                    }
                  }
                });
              }
              h(Y);
              var ze = R(Y, 2), $e = _(ze);
              h(ze), h(je), xe(() => {
                nt(he, T()), nt($e, `of the following ${I() ?? ""} groups:`);
              }), m(Me, je);
            };
            G(Pe, (Me) => {
              e(d), o(() => e(d)?.groups?.length) && Me(ht);
            });
          }
          var ae = R(Pe, 2);
          {
            var Be = (Me) => {
              var je = wl();
              Dt(
                je,
                5,
                () => (e(d), o(() => e(d)?.groups)),
                Wt,
                (He, he, Y) => {
                  var Ye = Ol(), ze = _(Ye), $e = _(ze), Fe = _($e), le = _(Fe, !0);
                  h(Fe);
                  var Oe = R(Fe, 2), Se = _(Oe);
                  {
                    let Re = Z(() => (e(he), o(() => e(he)?.logicalOperator)));
                    st(Se, {
                      get value() {
                        return e(Re);
                      },
                      get options() {
                        return Te;
                      },
                      getOptionLabel: (S) => S.label,
                      getOptionValue: (S) => S.value,
                      placeholder: !1,
                      popoverAutoWidth: !0,
                      $$events: {
                        change: (S) => {
                          J({ groupIdx: Y, group: { logicalOperator: S.detail } });
                        }
                      }
                    });
                  }
                  h(Oe);
                  var bt = R(Oe, 2), Ie = _(bt);
                  h(bt), h($e);
                  var et = R($e, 2), rt = _(et);
                  ot(rt, {
                    name: "plus",
                    hoverable: !0,
                    hoverColor: "var(--ink)",
                    $$events: {
                      click: () => {
                        J({ groupIdx: Y, addFilter: !0 });
                      }
                    }
                  });
                  var tt = R(rt, 2);
                  ot(tt, {
                    name: "trash",
                    hoverable: !0,
                    hoverColor: "var(--ink)",
                    $$events: {
                      click: () => {
                        J({ groupIdx: Y, deleteGroup: !0 });
                      }
                    }
                  }), h(et), h(ze);
                  var At = R(ze, 2);
                  Dt(At, 5, () => (e(he), o(() => e(he).filters)), Wt, (Re, S, Qe) => {
                    var Ft = yl();
                    We(Ft, 1, "filter svelte-1bn7luf", null, {}, { "has-extra-column": !!u["extra-column"] });
                    var jt = _(Ft);
                    {
                      var va = (oe) => {
                        var Ee = ge(), De = ee(Ee);
                        ft(
                          De,
                          t,
                          "field-column",
                          {
                            get filter() {
                              return e(S);
                            },
                            groupIdx: Y,
                            filterIdx: Qe,
                            onUpdate: (Je) => H(Je, Y, Qe),
                            sanitizeOperator: ve,
                            sanitizeValue: Q
                          },
                          null
                        ), m(oe, Ee);
                      }, ga = (oe) => {
                        {
                          let Ee = Z(() => (e(S), e(k), o(() => Xe(e(S), e(k)) ? at : "")));
                          ja(oe, {
                            get text() {
                              return e(Ee);
                            },
                            children: (De, Je) => {
                              {
                                let Et = Z(() => (e(S), e(k), o(() => Ge(e(S), e(k)))));
                                st(De, {
                                  get value() {
                                    return e(S), o(() => e(S).field);
                                  },
                                  get options() {
                                    return e(Et);
                                  },
                                  placeholder: "Column",
                                  popoverAutoWidth: !0,
                                  $$events: {
                                    change: (ba) => {
                                      const Jt = { ...e(S), field: ba.detail };
                                      Ve(Jt), H(Jt, Y, Qe);
                                    }
                                  }
                                });
                              }
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      };
                      G(jt, (oe) => {
                        o(() => u["field-column"]) ? oe(va) : oe(ga, !1);
                      });
                    }
                    var Ht = R(jt, 2);
                    {
                      let oe = Z(() => (e(S), o(() => e(S).operator || K.Equals.value))), Ee = Z(() => (e(S), o(() => !e(S).field && !u["field-column"]))), De = Z(() => (e(S), o(() => te(e(S)))));
                      st(Ht, {
                        get value() {
                          return e(oe);
                        },
                        get disabled() {
                          return e(Ee);
                        },
                        get options() {
                          return e(De);
                        },
                        placeholder: !1,
                        popoverAutoWidth: !0,
                        $$events: {
                          change: (Je) => {
                            const Et = { ...e(S), operator: Je.detail };
                            s(Et), H(Et, Y, Qe);
                          }
                        }
                      });
                    }
                    var Yt = R(Ht, 2);
                    {
                      var fa = (oe) => {
                        var Ee = ge(), De = ee(Ee);
                        ft(
                          De,
                          t,
                          "extra-column",
                          {
                            get filter() {
                              return e(S);
                            },
                            groupIdx: Y,
                            filterIdx: Qe,
                            onUpdate: (Je) => H(Je, Y, Qe),
                            sanitizeOperator: ve,
                            sanitizeValue: Q
                          },
                          null
                        ), m(oe, Ee);
                      };
                      G(Yt, (oe) => {
                        o(() => u["extra-column"]) && oe(fa);
                      });
                    }
                    var Qt = R(Yt, 2);
                    {
                      var pa = (oe) => {
                        var Ee = ge(), De = ee(Ee);
                        ft(
                          De,
                          t,
                          "value-column",
                          {
                            get filter() {
                              return e(S);
                            },
                            groupIdx: Y,
                            filterIdx: Qe,
                            onUpdate: (Je) => H(Je, Y, Qe),
                            sanitizeOperator: ve,
                            sanitizeValue: Q
                          },
                          null
                        ), m(oe, Ee);
                      }, ha = (oe) => {
                        {
                          let Ee = Z(() => (e(S), o(() => !e(S).field && !u["field-column"]))), De = Z(() => (e(S), o(() => ({ ...e(S) }))));
                          bl(oe, {
                            placeholder: "Value",
                            get disabled() {
                              return e(Ee);
                            },
                            get drawerTitle() {
                              return p();
                            },
                            get allowBindings() {
                              return N();
                            },
                            get filter() {
                              return e(De);
                            },
                            get schemaFields() {
                              return f();
                            },
                            get calendarLabels() {
                              return e(U);
                            },
                            get bindings() {
                              return x();
                            },
                            get panel() {
                              return A();
                            },
                            get toReadable() {
                              return ie();
                            },
                            get toRuntime() {
                              return O();
                            },
                            get evaluationContext() {
                              return w();
                            },
                            get bindingValueType() {
                              return me();
                            },
                            get useConditionValueControls() {
                              return we();
                            },
                            $$events: {
                              change: (Je) => {
                                H({ ...e(S), ...Je.detail }, Y, Qe);
                              }
                            }
                          });
                        }
                      };
                      G(Qt, (oe) => {
                        o(() => u["value-column"]) ? oe(pa) : oe(ha, !1);
                      });
                    }
                    var ma = R(Qt, 2);
                    na(ma, {
                      size: "M",
                      icon: "trash",
                      $$events: {
                        click: () => {
                          J({ groupIdx: Y, filterIdx: Qe, deleteFilter: !0 });
                        }
                      }
                    }), h(Ft), m(Re, Ft);
                  }), h(At), h(Ye), xe(
                    (Re) => {
                      nt(le, Re), nt(Ie, `of the following ${I() ?? ""}s are matched:`);
                    },
                    [
                      () => (e(d), o(() => ke(Y, e(d).logicalOperator)))
                    ]
                  ), m(He, Ye);
                }
              ), h(je), m(Me, je);
            };
            G(ae, (Me) => {
              e(d), o(() => e(d)?.groups?.length) && Me(Be);
            });
          }
          var qe = R(ae, 2), mt = _(qe);
          ea(mt, {
            noPadding: !0,
            children: (Me, je) => {
              var He = Fl(), he = ee(He);
              {
                var Y = (le) => {
                  var Oe = Tl(), Se = R(_(Oe), 2), bt = _(Se);
                  {
                    let rt = Z(() => (e(d), o(() => e(d)?.onEmptyFilter)));
                    st(bt, {
                      get value() {
                        return e(rt);
                      },
                      get options() {
                        return de;
                      },
                      getOptionLabel: (tt) => tt.label,
                      getOptionValue: (tt) => tt.value,
                      placeholder: !1,
                      popoverAutoWidth: !0,
                      $$events: {
                        change: (tt) => {
                          J({ onEmptyFilter: tt.detail });
                        }
                      }
                    });
                  }
                  h(Se);
                  var Ie = R(Se, 2), et = _(Ie);
                  h(Ie), h(Oe), xe(() => nt(et, `when all ${I() ?? ""}s are empty`)), m(le, Oe);
                };
                G(he, (le) => {
                  n(y()), n(V()), e(d), o(() => y() && V() && e(d)?.groups?.length) && le(Y);
                });
              }
              var Ye = R(he, 2), ze = _(Ye);
              qt(ze, {
                icon: "plus-circle",
                size: "M",
                secondary: !0,
                $$events: {
                  click: () => {
                    J({ addGroup: !0 });
                  }
                },
                children: (le, Oe) => {
                  St();
                  var Se = Rt();
                  xe(() => nt(Se, `Add ${I() ?? ""} group`)), m(le, Se);
                },
                $$slots: { default: !0 }
              });
              var $e = R(ze, 2);
              {
                var Fe = (le) => {
                  var Oe = Al(), Se = _(Oe);
                  ot(Se, {
                    name: "question",
                    color: "var(--spectrum-global-color-gray-600)"
                  }), h(Oe), xe(() => Gt(Oe, "href", c())), m(le, Oe);
                };
                G($e, (le) => {
                  c() && le(Fe);
                });
              }
              h(Ye), m(Me, He);
            },
            $$slots: { default: !0 }
          }), h(qe), m(Ue, lt);
        }, vt = (Ue) => {
          Da(Ue, {
            size: "S",
            children: (lt, Le) => {
              St();
              var Pe = Rt("None of the table column can be used for filtering.");
              m(lt, Pe);
            },
            $$slots: { default: !0 }
          });
        };
        G(ye, (Ue) => {
          e(k), o(() => e(k)?.length) ? Ue(Ke) : Ue(vt, !1);
        });
      }
      m(r, pe);
    },
    $$slots: { default: !0 }
  }), h(_e), xe((r) => Ne = We(_e, 1, "container svelte-1bn7luf", null, Ne, r), [() => ({ mobile: X()?.device?.mobile })]), m(ne, _e), ct(), P();
}
var Cl = re("<!> <!>", 1);
function kl(ne, t) {
  ut(t, !1);
  const u = () => Ze(B, "$component", g), [g, X] = Mt(), D = b(), P = b(), a = b(), U = b(), d = b(), k = b(), W = b();
  let K = l(t, "dataProvider", 8), q = l(t, "allowedFields", 8), E = l(t, "size", 8, "M");
  const B = kt("component"), { builderStore: M, ActionTypes: f, getAction: z, fetchDatasourceSchema: se } = kt("sdk");
  let j = b(), y = b(), N = b(), V = b(!1), c = b();
  async function T(A) {
    A && i(c, await se(A, { enrichRelationships: !0 })), i(V, !0);
  }
  function I(A, ie) {
    if (!e(V))
      return {};
    let O = {};
    return ie?.length ? ie?.forEach((w) => {
      A?.[w.name] ? (O[w.name] = A[w.name], O[w.name].displayName = w.displayName) : A?.[w] && (O[w] = A[w]);
    }) : O = A || {}, Object.values(O || {}).filter((w) => !Za.includes(w.type)).concat(e(a) ? [{ name: "_id", type: "string" }] : []);
  }
  const p = () => {
    sa(M).inBuilder || (i(y, e(N) ? Ct(e(N)) : null), e(j).show());
  }, me = () => {
    i(N, Xa(e(y)));
  };
  ra(() => {
    e(d)?.(u().id);
  }), F(() => n(K()), () => {
    i(D, K()?.id);
  }), F(() => n(K()), () => {
    i(P, K()?.datasource);
  }), F(() => e(P), () => {
    i(a, ["table", "link", "viewV2"].includes(e(P)?.type));
  }), F(() => e(D), () => {
    i(U, z(e(D), f.AddDataProviderQueryExtension));
  }), F(() => e(D), () => {
    i(d, z(e(D), f.RemoveDataProviderQueryExtension));
  }), F(() => e(P), () => {
    T(e(P));
  }), F(() => (e(c), n(q())), () => {
    i(k, I(e(c), q()));
  }), F(() => e(N), () => {
    i(W, e(N)?.groups?.reduce(
      (A, ie) => (A += ie?.filters?.length || 0, A),
      0
    ));
  }), F(
    () => (e(W), e(N), e(U), u(), e(d)),
    () => {
      if (e(W)) {
        const A = Ya(e(N));
        delete A.onEmptyFilter, e(U)?.(u().id, A);
      } else
        e(d)?.(u().id);
    }
  ), pt(), dt();
  var we = ge(), Ce = ee(we);
  {
    var x = (A) => {
      var ie = Cl(), O = ee(ie);
      {
        let $ = Z(() => (e(N), o(() => e(N)?.groups?.length > 0)));
        tl(O, {
          onClick: p,
          icon: "ri-filter-3-line",
          text: "Filter",
          get size() {
            return E();
          },
          type: "secondary",
          quiet: !0,
          get active() {
            return e($);
          }
        });
      }
      var w = R(O, 2);
      Ut(
        Qa(w, {
          children: ($, fe) => {
            Ja($, {
              title: "Edit filters",
              size: "XL",
              onConfirm: me,
              children: (ue, Te) => {
                xl(ue, {
                  get filters() {
                    return e(y);
                  },
                  get schemaFields() {
                    return e(k);
                  },
                  get datasource() {
                    return e(P);
                  },
                  filtersLabel: null,
                  $$events: {
                    change: (be) => {
                      i(y, be.detail);
                    }
                  }
                });
              },
              $$slots: { default: !0 }
            });
          },
          $$slots: { default: !0 },
          $$legacy: !0
        }),
        ($) => i(j, $),
        () => e(j)
      ), m(A, ie);
    };
    G(Ce, (A) => {
      e(V) && A(x);
    });
  }
  m(ne, we), ct(), X();
}
export {
  kl as default
};
