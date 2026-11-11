import { g as ge, p as o, X as Ee, j as e, o as ke, l as z, B as m, i as A, k as he, m as me, q as $, c as ce, Y as Se, r as ue, s as Me, aq as Te, d5 as we, A as h, t as Ae, at as Ce, a as Pe, a3 as Ne, d as G, w as ye, z as y, f as _e, aS as De, a0 as Ie, n as de, H as fe, Z as Ve, h as se, aa as Fe, _ as Re, u as pe, x as ie, y as qe } from "./index-quCB9sGT.js";
import { T as He } from "./TextArea-Dujoz1vW.js";
import { F as ze } from "./Field-Dj4x-6nw.js";
var Le = _e('<div><textarea disabled></textarea></div> <div class="budibase-color-picker-anchor svelte-gyxjiz"><!></div>', 1);
function je(D, r) {
  ge(r, !1);
  const f = y();
  let x = o(r, "height", 12, null), E = o(r, "scroll", 8, !0), M = o(r, "easyMDEOptions", 8, null), i = o(r, "mde", 12, null), b = o(r, "id", 8, null), k = o(r, "fullScreenOffset", 8, null), P = o(r, "disabled", 8, !1), v = y(void 0), T = y(void 0), u = y(0), _ = y(0), I = y(0), O = y("text"), B = y({ text: "#d73f09", highlight: "#fff59d" }), w = null, n = null, d = null;
  const c = {
    text: {
      toolbarButtonName: "text-color",
      wrapperTag: "span",
      stylePrefix: "color",
      className: "fa fa-font",
      title: "Text Color"
    },
    highlight: {
      toolbarButtonName: "text-highlight",
      wrapperTag: "mark",
      stylePrefix: "background-color",
      className: "fa fa-paint-brush",
      title: "Highlight Color"
    }
  }, q = (t) => t.map((l) => ({ anchor: { ...l.anchor }, head: { ...l.head } })), J = (t) => t.codemirror.getSelections().some((l) => l.length > 0), Q = (t) => q(t.codemirror.listSelections()), L = (t, l) => {
    const a = t.trim();
    if (!a)
      return null;
    const s = c[l].stylePrefix;
    return typeof CSS > "u" || typeof CSS.supports != "function" || !CSS.supports(s, a) ? null : a;
  }, V = (t, l) => {
    const a = new RegExp(`${c[l].stylePrefix}\\s*:\\s*([^;"']+)`, "i"), s = t.match(a);
    return s?.[1] ? L(s[1], l) : null;
  }, U = (t) => {
    const l = { text: [], highlight: [] }, a = /<(\/?)(span|mark)\b[^>]*>/gi;
    for (const s of t.matchAll(a)) {
      const C = s[0], p = s[1] === "/", g = s[2].toLowerCase() === "mark" ? "highlight" : "text";
      if (p) {
        l[g].pop();
        continue;
      }
      const F = V(C, g);
      F && l[g].push(F);
    }
    return {
      text: l.text.length ? l.text[l.text.length - 1] : null,
      highlight: l.highlight.length ? l.highlight[l.highlight.length - 1] : null
    };
  }, S = (t, l) => {
    const a = { text: null, highlight: null }, s = t.lastIndexOf("<", l);
    if (s < 0 || t.lastIndexOf(">", l - 1) > s)
      return a;
    const p = t.indexOf(">", s);
    if (p < 0)
      return a;
    const g = t.slice(s, p + 1);
    return /^<span\b/i.test(g) && (a.text = V(g, "text")), /^<mark\b/i.test(g) && (a.highlight = V(g, "highlight")), a;
  }, j = (t, l, a) => {
    const C = t.toolbarElements?.[c[l].toolbarButtonName]?.querySelector("i");
    if (C) {
      if (!a) {
        C.style.removeProperty("color");
        return;
      }
      C.style.color = a;
    }
  }, H = (t) => {
    const l = t.codemirror.getCursor("head"), a = t.codemirror.indexFromPos(l), s = t.codemirror.getValue(), C = s.slice(0, a), p = U(C), g = S(s, a), F = g.text || p.text, R = g.highlight || p.highlight;
    j(t, "text", F), j(t, "highlight", R);
  }, ee = () => {
    !i() || !J(i()) || (n = Q(i()));
  }, X = () => {
    i() && (ee(), H(i()));
  }, Y = (t) => {
    d !== t && (d && d.codemirror.off("cursorActivity", X), t.codemirror.on("cursorActivity", X), d = t);
  }, K = async (t, l) => {
    const a = t, s = Q(a), C = J(a) ? s : n || s;
    w = q(C), m(O, l);
    const p = c[l].toolbarButtonName, g = a.toolbarElements?.[p];
    if (g) {
      const R = g.getBoundingClientRect();
      m(u, Math.round(R.left + R.width / 2)), m(_, Math.round(R.bottom));
    }
    m(I, e(I) + 1), await De(), e(T)?.querySelector(".preview")?.click();
  }, te = (t, l) => {
    if (!w || !i())
      return;
    const a = L(t, l);
    if (!a)
      return;
    i().codemirror.focus(), i().codemirror.setSelections(w);
    const s = i().codemirror.getSelections(), C = s?.some((ae) => ae.length > 0);
    if (!s?.length || !C) {
      w = null;
      return;
    }
    const { wrapperTag: p, stylePrefix: g } = c[l], F = `${g}: ${a};`, R = s.map((ae) => `<${p} style="${F}">${ae}</${p}>`);
    i().codemirror.replaceSelections(R), w = null;
  }, le = (t) => {
    const l = t.detail?.trim();
    l && (m(B, { ...e(B), [e(O)]: l }), te(l, e(O)), i() && H(i()));
  }, re = {
    name: c.text.toolbarButtonName,
    action: (t) => K(t, "text"),
    className: c.text.className,
    title: c.text.title
  }, N = {
    name: c.highlight.toolbarButtonName,
    action: (t) => K(t, "highlight"),
    className: c.highlight.className,
    title: c.highlight.title
  }, oe = [
    "bold",
    "italic",
    "heading",
    "|",
    "quote",
    "unordered-list",
    "ordered-list",
    "|",
    "link",
    "image",
    "|",
    re,
    N,
    "|",
    "preview",
    "side-by-side",
    "fullscreen",
    "|",
    "guide"
  ], ne = (t) => t?.toolbar !== void 0 ? t.toolbar : oe;
  Ee(async () => {
    x(x() || "200px");
    const { default: t } = await import("./easymde-ecun7Iud.js").then((l) => l.e);
    i(new t({
      element: e(v),
      spellChecker: !1,
      status: !1,
      unorderedListStyle: "-",
      maxHeight: E() ? x() : void 0,
      minHeight: E() ? void 0 : x(),
      ...M(),
      toolbar: ne(M())
    })), Y(i()), H(i());
  }), ke(() => {
    d && d.codemirror.off("cursorActivity", X), i()?.toTextArea();
  });
  const Oe = (t) => {
    let l = "";
    return l += `--fullscreen-offset-x:${t?.x || "0px"};`, l += `--fullscreen-offset-y:${t?.y || "0px"};`, l;
  };
  z(() => A(k()), () => {
    m(f, Oe(k()));
  }), he(), me();
  var xe = Le(), Z = $(xe);
  let be;
  var ve = ce(Z);
  Se(ve, (t) => m(v, t), () => e(v)), ue(Z);
  var W = Me(Z, 2), Be = ce(W);
  Te(Be, () => e(I), (t) => {
    we(t, {
      get value() {
        return e(B), e(O), h(() => e(B)[e(O)]);
      },
      size: "S",
      $$events: { change: le }
    });
  }), ue(W), Se(W, (t) => m(T, t), () => e(T)), Ae(
    (t) => {
      Ce(Z, e(f)), be = Pe(Z, 1, "svelte-gyxjiz", null, be, t), Ne(ve, "id", b()), Ce(W, `left:${e(u)}px;top:${e(_)}px;`);
    },
    [() => ({ disabled: P() })]
  ), G(D, xe), ye();
}
function Xe(D, r) {
  ge(r, !1);
  let f = o(r, "value", 8, null), x = o(r, "height", 8, null), E = o(r, "placeholder", 8, null), M = o(r, "id", 8, null), i = o(r, "fullScreenOffset", 8, null), b = o(r, "disabled", 8, !1), k = o(r, "readonly", 8, !1), P = o(r, "easyMDEOptions", 24, () => ({}));
  const v = Ie();
  let T, u = y(null), _ = null;
  const I = (d) => {
    _ !== d && (_ && _.codemirror.off("blur", B), d.codemirror.on("blur", B), _ = d);
  }, O = (d, c) => {
    d && c !== T && d.value(c ?? "");
  }, B = () => {
    e(u) && (T = e(u).value(), v("change", T));
  };
  ke(() => {
    _ && _.codemirror.off("blur", B);
  }), z(() => (e(u), A(f())), () => {
    O(e(u), f());
  }), z(() => e(u), () => {
    e(u) && I(e(u));
  }), z(
    () => (A(k()), A(b()), e(u)),
    () => {
      (k() || b()) && e(u) && e(u).togglePreview?.();
    }
  ), he(), me();
  var w = de(), n = $(w);
  Te(n, x, (d) => {
    {
      let c = fe(() => (A(f()), A(E()), A(P()), A(b()), A(k()), h(() => ({
        initialValue: f(),
        placeholder: E(),
        ...P(),
        toolbar: b() || k() ? !1 : P()?.toolbar
      }))));
      je(d, {
        scroll: !0,
        get height() {
          return x();
        },
        get id() {
          return M();
        },
        get fullScreenOffset() {
          return i();
        },
        get disabled() {
          return b();
        },
        get easyMDEOptions() {
          return e(c);
        },
        get mde() {
          return e(u);
        },
        set mde(q) {
          m(u, q);
        },
        $$legacy: !0
      });
    }
  }), G(D, w), ye();
}
var Ye = _e("<div><!></div>");
function Ke(D, r) {
  let f = o(r, "value", 8, ""), x = o(r, "placeholder", 8, null), E = o(r, "disabled", 8, !1), M = o(r, "readonly", 8, !1), i = o(r, "height", 8, null), b = o(r, "id", 8, null), k = o(r, "fullScreenOffset", 8, null), P = o(r, "easyMDEOptions", 8, null);
  var v = Ye(), T = ce(v);
  Xe(T, {
    get value() {
      return f();
    },
    get placeholder() {
      return x();
    },
    get height() {
      return i();
    },
    get id() {
      return b();
    },
    get fullScreenOffset() {
      return k();
    },
    get disabled() {
      return E();
    },
    get easyMDEOptions() {
      return P();
    },
    get readonly() {
      return M();
    },
    $$events: {
      change(u) {
        Ve.call(this, r, u);
      }
    }
  }), ue(v), G(D, v);
}
function Qe(D, r) {
  ge(r, !1);
  const f = () => ie(J, "$component", M), x = () => ie(Q, "$layout", M), E = () => ie(q, "$context", M), [M, i] = qe(), b = y();
  let k = o(r, "field", 8), P = o(r, "label", 8), v = o(r, "placeholder", 8), T = o(r, "disabled", 8, !1), u = o(r, "readonly", 8, !1), _ = o(r, "validation", 8), I = o(r, "defaultValue", 8, ""), O = o(r, "format", 8, "auto"), B = o(r, "onChange", 8), w = o(r, "helpText", 8, null), n = y(), d = y(), c = y();
  const q = se("context"), J = se("component"), Q = se("layout"), L = Fe(f());
  Re("component", L);
  let V = y();
  const U = (S) => {
    const j = e(d).setValue(S.detail);
    B() && j && B()({ value: S.detail });
  };
  z(() => (A(O()), e(c)), () => {
    m(b, O() === "rich" || O() !== "plain" && e(c)?.useRichText);
  }), z(() => f(), () => {
    m(V, f().styles?.normal?.height || "150px"), L.set({
      ...f(),
      styles: {
        ...f().styles,
        normal: { ...f().styles.normal, height: void 0 }
      }
    });
  }), he(), me(), ze(D, {
    get label() {
      return P();
    },
    get field() {
      return k();
    },
    get disabled() {
      return T();
    },
    get readonly() {
      return u();
    },
    get validation() {
      return _();
    },
    get defaultValue() {
      return I();
    },
    get helpText() {
      return w();
    },
    type: "longform",
    get fieldState() {
      return e(n);
    },
    set fieldState(S) {
      m(n, S);
    },
    get fieldApi() {
      return e(d);
    },
    set fieldApi(S) {
      m(d, S);
    },
    get fieldSchema() {
      return e(c);
    },
    set fieldSchema(S) {
      m(c, S);
    },
    children: (S, j) => {
      var H = de(), ee = $(H);
      {
        var X = (Y) => {
          var K = de(), te = $(K);
          {
            var le = (N) => {
              {
                let oe = fe(() => (x(), h(() => ({ x: x().screenXOffset, y: x().screenYOffset })))), ne = fe(() => (E(), h(() => ({
                  hideIcons: E().device.mobile ? ["side-by-side", "guide"] : []
                }))));
                Ke(N, {
                  get value() {
                    return e(n), h(() => e(n).value);
                  },
                  get disabled() {
                    return e(n), h(() => e(n).disabled);
                  },
                  get readonly() {
                    return e(n), h(() => e(n).readonly);
                  },
                  get error() {
                    return e(n), h(() => e(n).error);
                  },
                  get id() {
                    return e(n), h(() => e(n).fieldId);
                  },
                  get placeholder() {
                    return v();
                  },
                  get height() {
                    return e(V);
                  },
                  get fullScreenOffset() {
                    return e(oe);
                  },
                  get easyMDEOptions() {
                    return e(ne);
                  },
                  $$events: { change: U }
                });
              }
            }, re = (N) => {
              He(N, {
                get value() {
                  return e(n), h(() => e(n).value);
                },
                get disabled() {
                  return e(n), h(() => e(n).disabled);
                },
                get readonly() {
                  return e(n), h(() => e(n).readonly);
                },
                get error() {
                  return e(n), h(() => e(n).error);
                },
                get id() {
                  return e(n), h(() => e(n).fieldId);
                },
                get placeholder() {
                  return v();
                },
                get minHeight() {
                  return e(V);
                },
                $$events: { change: U }
              });
            };
            pe(te, (N) => {
              e(b) ? N(le) : N(re, !1);
            });
          }
          G(Y, K);
        };
        pe(ee, (Y) => {
          e(n) && Y(X);
        });
      }
      G(S, H);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), ye(), i();
}
export {
  Qe as default
};
