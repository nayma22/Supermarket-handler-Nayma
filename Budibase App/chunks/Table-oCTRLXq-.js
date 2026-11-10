import { g as _e, p as l, l as m, i as r, B as d, k as qe, m as be, c as S, E as Oe, r as z, t as q, a as ve, at as Ve, j as e, e as Xe, Z as ot, d as v, w as we, z as f, f as T, A as x, b as ge, a1 as Bt, s as te, I as Be, cE as Ot, aM as Ct, a0 as Tt, q as ae, T as Ue, U as We, n as he, u as Y, a4 as gt, a5 as Ke, de as xt, a3 as rt, aI as jt, bg as It, af as pt, bU as Nt, bx as Yt, bH as bt, cV as Ft, X as Gt, aq as Vt, Y as Xt, P as Ut, H as Je, cM as kt, ck as Wt, h as vt, o as Jt, df as Kt, v as Zt, $ as Qt, x as Rt, y as $t, aL as el } from "./index-quCB9sGT.js";
import { c as tl } from "./table-q73-JEeP.js";
var ll = T("<span><!></span>");
function Et(B, t) {
  _e(t, !1);
  const i = f();
  let a = l(t, "size", 8, "M"), o = l(t, "grey", 8, !1), b = l(t, "red", 8, !1), h = l(t, "orange", 8, !1), w = l(t, "yellow", 8, !1), k = l(t, "seafoam", 8, !1), H = l(t, "green", 8, !1), O = l(t, "active", 8, !1), R = l(t, "inactive", 8, !1), y = l(t, "hoverable", 8, !1), g = l(t, "outlineColor", 8, null), u = l(t, "backgroundColor", 8, null), D = l(t, "textColor", 8, null);
  m(
    () => (r(g()), r(u()), r(D())),
    () => {
      d(i, [
        g() ? `border: 2px solid ${g()}` : "",
        u() ? `background-color: ${u()}` : "",
        D() ? `color: ${D()}` : ""
      ].filter(Boolean).join("; "));
    }
  ), qe(), be();
  var j = ll();
  let C;
  var E = S(j);
  Oe(E, t, "default", {}, null), z(j), q(
    (A) => {
      C = ve(j, 1, "spectrum-Label svelte-1n3ntwl", null, C, A), Ve(j, e(i));
    },
    [
      () => ({
        hoverable: y(),
        "spectrum-Label--small": a() === "S",
        "spectrum-Label--large": a() === "L",
        "spectrum-Label--grey": o(),
        "spectrum-Label--red": b(),
        "spectrum-Label--green": H(),
        "spectrum-Label--orange": h(),
        "spectrum-Label--yellow": w(),
        "spectrum-Label--seafoam": k(),
        "spectrum-Label--active": O(),
        "spectrum-Label--inactive": R()
      })
    ]
  ), Xe("click", j, function(A) {
    ot.call(this, t, A);
  }), v(B, j), we();
}
var al = T("<div> </div>");
function Ge(B, t) {
  _e(t, !1);
  let i = l(t, "value", 8), a = l(t, "schema", 8);
  be();
  var o = al();
  let b;
  var h = S(o, !0);
  z(o), q(
    (w, k) => {
      b = ve(o, 1, "svelte-sc2tmf", null, b, w), ge(h, k);
    },
    [
      () => ({ capitalise: a()?.capitalise }),
      () => (r(i()), x(() => typeof i() == "object" ? JSON.stringify(i()) : i()))
    ]
  ), v(B, o), we();
}
var rl = T('<label class="spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-Checkbox--emphasized svelte-1pzamsw"><input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-1" disabled/> <span class="spectrum-Checkbox-box svelte-1pzamsw"><!> <!></span></label>');
function ol(B, t) {
  let i = l(t, "value", 8);
  var a = rl(), o = S(a);
  Bt(o);
  var b = te(o, 2), h = S(b);
  Be(h, { name: "check", size: "S" });
  var w = te(h, 2);
  Be(w, { name: "minus", size: "S" }), z(b), z(a), q(() => Ot(o, !!i())), v(B, a);
}
var nl = T('<div class="svelte-q68b7"> </div>');
function sl(B, t) {
  _e(t, !1);
  const i = f(), a = f(), o = f(), b = f();
  let h = l(t, "value", 8), w = l(t, "schema", 8);
  m(() => r(h()), () => {
    d(i, /* @__PURE__ */ new Date(`0-${h()}`));
  }), m(() => (e(i), r(w())), () => {
    d(a, !isNaN(e(i)) || w()?.timeOnly);
  }), m(() => r(w()), () => {
    d(o, w()?.dateOnly);
  }), m(() => (e(a), e(o)), () => {
    d(b, e(a) ? "HH:mm:ss" : e(o) ? "MMMM D YYYY" : "MMMM D YYYY, HH:mm");
  }), qe(), be();
  var k = nl(), H = S(k, !0);
  z(k), q((O) => ge(H, O), [
    () => (r(Ct), e(a), e(i), r(h()), e(b), x(() => Ct(e(a) ? e(i) : h()).format(e(b))))
  ]), v(B, k), we();
}
var il = T("<div> </div>"), cl = T("<!> <!>", 1);
function St(B, t) {
  _e(t, !1);
  const i = f(), a = f();
  let o = l(t, "row", 8), b = l(t, "value", 8), h = l(t, "schema", 8);
  const w = Tt(), k = 5, H = (u) => {
    u.stopPropagation(), w("clickrelationship", {
      tableId: o().tableId,
      rowId: o()._id,
      fieldName: h()?.name
    });
  };
  m(() => r(b()), () => {
    d(i, b()?.slice(0, k) ?? []);
  }), m(() => (r(b()), e(i)), () => {
    d(a, (b()?.length ?? 0) - e(i).length);
  }), qe(), be();
  var O = cl(), R = ae(O);
  Ue(R, 1, () => e(i), We, (u, D) => {
    var j = he(), C = ae(j);
    {
      var E = (A) => {
        Et(A, {
          hoverable: !0,
          grey: !0,
          $$events: { click: H },
          children: (ne, ee) => {
            gt();
            var W = Ke();
            q(() => ge(W, (e(D), x(() => e(D).primaryDisplay)))), v(ne, W);
          },
          $$slots: { default: !0 }
        });
      };
      Y(C, (A) => {
        e(D), x(() => e(D)?.primaryDisplay) && A(E);
      });
    }
    v(u, j);
  });
  var y = te(R, 2);
  {
    var g = (u) => {
      var D = il(), j = S(D);
      z(D), q(() => ge(j, `+${e(a) ?? ""} more`)), v(u, D);
    };
    Y(y, (u) => {
      e(a) && u(g);
    });
  }
  v(B, O), we();
}
var dl = T('<div class="center svelte-1ho6t7f"><img class="svelte-1ho6t7f"/></div>'), ul = T('<div class="file svelte-1ho6t7f"><!></div>'), vl = T("<div> </div>"), gl = T("<!> <!>", 1);
function fl(B, t) {
  _e(t, !1);
  const i = f(), a = f();
  let o = l(t, "value", 8);
  const b = 5, h = ["png", "tiff", "gif", "raw", "jpg", "jpeg"], w = (y) => h.includes(y?.toLowerCase() ?? "");
  m(() => r(o()), () => {
    d(i, o()?.slice(0, b) ?? []);
  }), m(() => (r(o()), e(i)), () => {
    d(a, (o()?.length ?? 0) - e(i).length);
  }), qe(), be();
  var k = gl(), H = ae(k);
  Ue(H, 1, () => e(i), We, (y, g) => {
    var u = he(), D = ae(u);
    {
      var j = (E) => {
        xt(E, {
          quiet: !0,
          target: "_blank",
          get download() {
            return e(g), x(() => e(g).name);
          },
          get href() {
            return e(g), x(() => e(g).url);
          },
          $$events: {
            click: (A) => {
              A.stopPropagation();
            }
          },
          children: (A, ne) => {
            var ee = dl(), W = S(ee);
            z(ee), q(() => {
              rt(ee, "title", (e(g), x(() => e(g).name))), rt(W, "src", (e(g), x(() => e(g).url))), rt(W, "alt", (e(g), x(() => e(g).extension)));
            }), v(A, ee);
          },
          $$slots: { default: !0 }
        });
      }, C = (E) => {
        var A = ul(), ne = S(A);
        xt(ne, {
          quiet: !0,
          target: "_blank",
          get download() {
            return e(g), x(() => e(g).name);
          },
          get href() {
            return e(g), x(() => e(g).url);
          },
          $$events: {
            click: (ee) => {
              ee.stopPropagation();
            }
          },
          children: (ee, W) => {
            gt();
            var Ae = Ke();
            q(() => ge(Ae, (e(g), x(() => e(g).extension)))), v(ee, Ae);
          },
          $$slots: { default: !0 }
        }), z(A), q(() => rt(A, "title", (e(g), x(() => e(g).name)))), v(E, A);
      };
      Y(D, (E) => {
        e(g), x(() => w(e(g).extension)) ? E(j) : E(C, !1);
      });
    }
    v(y, u);
  });
  var O = te(H, 2);
  {
    var R = (y) => {
      var g = vl(), u = S(g);
      z(g), q(() => ge(u, `+${e(a) ?? ""} more`)), v(y, g);
    };
    Y(O, (y) => {
      e(a) && y(R);
    });
  }
  v(B, k), we();
}
var ml = T("<div> </div>"), hl = T("<!> <!>", 1);
function _l(B, t) {
  _e(t, !1);
  const i = f(), a = f(), o = f();
  let b = l(t, "value", 8);
  const h = 5;
  m(() => r(b()), () => {
    d(i, Array.isArray(b()) ? b() : [b()].filter((R) => !!R));
  }), m(() => e(i), () => {
    d(a, e(i).slice(0, h));
  }), m(() => (e(i), e(a)), () => {
    d(o, e(i).length - e(a).length);
  }), qe(), be();
  var w = hl(), k = ae(w);
  Ue(k, 1, () => e(a), We, (R, y) => {
    Et(R, {
      size: "S",
      grey: !0,
      children: (g, u) => {
        gt();
        var D = Ke();
        q(() => ge(D, e(y))), v(g, D);
      },
      $$slots: { default: !0 }
    });
  });
  var H = te(k, 2);
  {
    var O = (R) => {
      var y = ml(), g = S(y);
      z(y), q(() => ge(g, `+${e(o) ?? ""} more`)), v(R, y);
    };
    Y(H, (R) => {
      e(o) && R(O);
    });
  }
  v(B, w), we();
}
var bl = T("<div><!></div>");
function wl(B, t) {
  _e(t, !1);
  let i = l(t, "value", 8);
  const a = async (h) => {
    h.stopPropagation();
    try {
      await It(i()), pt.success("Copied to clipboard");
    } catch {
      pt.error("Failed to copy to clipboard. Check the dev console for the value."), console.warn("Failed to copy the value", i());
    }
  };
  be();
  var o = bl(), b = S(o);
  Be(b, { size: "S", name: "copy" }), z(o), Xe("click", o, jt(a)), v(B, o), we();
}
var yl = T('<div class="svelte-10fvnlm"><!></div>');
function Cl(B, t) {
  _e(t, !1);
  const i = f(), a = f(), o = f();
  let b = l(t, "row", 8), h = l(t, "schema", 8), w = l(t, "value", 8), k = l(t, "customRenderers", 24, () => []), H = l(t, "snippets", 8), O = f();
  const R = {
    boolean: ol,
    datetime: sl,
    link: St,
    attachment: fl,
    string: Ge,
    options: Ge,
    number: Ge,
    longform: Ge,
    array: _l,
    internal: wl,
    bb_reference: St
  }, y = (C) => C?.type === "datetime" && C?.template ? "string" : C?.type || "string", g = (C, E) => E ? Nt(E, { value: C, snippets: H() }) : C;
  m(() => r(h()), () => {
    d(i, y(h()));
  }), m(
    () => (r(k()), r(h())),
    () => {
      d(a, k()?.find((C) => C.column === h()?.name));
    }
  ), m(() => (e(a), e(i), Ge), () => {
    d(O, e(a)?.component ?? R[e(i)] ?? Ge);
  }), m(() => (r(w()), r(h())), () => {
    d(o, g(w(), h().template));
  }), qe(), be();
  var u = he(), D = ae(u);
  {
    var j = (C) => {
      var E = yl(), A = S(E);
      Yt(A, () => e(O), (ne, ee) => {
        ee(ne, {
          get row() {
            return b();
          },
          get schema() {
            return h();
          },
          get value() {
            return e(o);
          },
          $$events: {
            clickrelationship(W) {
              ot.call(this, t, W);
            },
            buttonclick(W) {
              ot.call(this, t, W);
            }
          },
          children: (W, Ae) => {
            var G = he(), Ze = ae(G);
            Oe(Ze, t, "default", {}, null), v(W, G);
          },
          $$slots: { default: !0 }
        });
      }), z(E), q(() => Ve(E, `--max-cell-width: ${r(h()), x(() => h().width ? "none" : "200px") ?? ""};`)), v(C, E);
    };
    Y(D, (C) => {
      e(O) && (e(a) || e(o) != null && e(o) !== "") && C(j);
    });
  }
  v(B, u), we();
}
var xl = T('<div class="svelte-34xm6e"><!> <!></div>');
function zt(B, t) {
  _e(t, !1);
  let i = l(t, "selected", 8), a = l(t, "onEdit", 8), o = l(t, "allowSelectRows", 8, !1), b = l(t, "allowEditRows", 8, !1), h = l(t, "data", 8);
  be();
  var w = xl(), k = S(w);
  {
    var H = (y) => {
      bt(y, {
        get value() {
          return i();
        },
        get disabled() {
          return r(h()), x(() => h().__disabled);
        }
      });
    };
    Y(k, (y) => {
      r(o()), r(h()), x(() => o() && h().__selectable !== !1) && y(H);
    });
  }
  var O = te(k, 2);
  {
    var R = (y) => {
      Ft(y, {
        size: "S",
        $$events: {
          click(...g) {
            a()?.apply(this, g);
          }
        },
        children: (g, u) => {
          gt();
          var D = Ke("Edit");
          v(g, D);
        },
        $$slots: { default: !0 }
      });
    };
    Y(O, (y) => {
      b() && y(R);
    });
  }
  z(w), v(B, w), we();
}
var pl = T('<div class="loading svelte-1qzi7hd"><!></div>'), kl = T("<div><!></div>"), Rl = T('<div><div class="title svelte-1qzi7hd"> <!> <!> <!></div></div>'), Sl = T("<div><!></div>"), zl = T('<div class="spectrum-Table-head svelte-1qzi7hd"><!> <!> <!></div>'), Tl = T("<div><!></div>"), El = T("<div><!></div>"), Pl = T("<div><!></div>"), ql = T("<div><!> <!> <!></div>"), Al = T('<div class="placeholder-content svelte-1qzi7hd"><!> <div class="svelte-1qzi7hd"> </div></div>'), Ll = T("<div><!></div>"), Ml = T("<div><!> <!></div>"), Dl = T("<div><!></div>");
function Hl(B, t) {
  _e(t, !1);
  const i = f(), a = f(), o = f(), b = f(), h = f(), w = f(), k = f(), H = f(), O = f(), R = f(), y = f();
  let g = l(t, "data", 24, () => []), u = l(t, "schema", 28, () => ({})), D = l(t, "showAutoColumns", 8, !1), j = l(t, "rowCount", 8, 0), C = l(t, "quiet", 8, !1), E = l(t, "loading", 8, !1), A = l(t, "allowSelectRows", 8, !1), ne = l(t, "allowEditRows", 8, !0), ee = l(t, "allowEditColumns", 8, !0), W = l(t, "allowClickRows", 8, !0), Ae = l(t, "selectOnRowClick", 8, !0), G = l(t, "selectedRows", 28, () => []), Ze = l(t, "customRenderers", 24, () => []), nt = l(t, "disableSorting", 8, !1), st = l(t, "autoSortColumns", 8, !0), Qe = l(t, "compact", 8, !1), it = l(t, "customPlaceholder", 8, !1), ze = l(t, "showHeaderBorder", 8, !0), pe = l(t, "hideHeader", 8, !1), ft = l(t, "placeholderText", 8, "No rows found"), ct = l(t, "snippets", 24, () => []), mt = l(t, "defaultSortColumn", 24, () => {
  }), X = l(t, "defaultSortOrder", 8, "Ascending"), dt = l(t, "rounded", 8, !1), ht = l(t, "stickyHeader", 8, !0), Te = l(t, "editColumnPosition", 8, "left"), je = l(t, "editColumnHeader", 8, "Edit");
  const Ie = Tt();
  let $e = f();
  const ut = 36;
  let re = f(), ye = f(), et = f(0), tt = f(!1), Le = f(!1);
  const L = (c) => {
    let n = {};
    return Object.entries(c || {}).forEach(([s, M]) => {
      typeof M == "string" ? n[s] = { type: M, name: s } : n[s] = { ...M, name: s };
      const F = n[s].width;
      F != null && `${F}`.trim().match(/^[0-9]+$/) && delete n[s].width;
    }), n;
  }, Q = (c, n, s, M, F) => c ? M ? Math.min(s, M) : Math.min(s, Math.ceil(n / F)) : M || 0, Ee = (c, n, s, M, F, U) => F ? `height: ${U + c * M}px;` : !n || !c || s <= n ? "" : `height: ${U + c * M}px;`, se = (c, n, s, M) => {
    let F = "grid-template-columns:";
    return s && M === "left" && (F += " auto"), c?.forEach((U) => {
      const P = n[U];
      P.width && typeof P.width == "string" ? F += ` ${P.width}` : F += " minmax(auto, 1fr)";
    }), s && M === "right" && (F += " auto"), F += ";", F;
  }, fe = (c, n, s) => (n = n ?? mt(), s = s ?? X(), !n || !s || nt() ? c : c.slice().sort((M, F) => {
    const U = M[n], P = F[n];
    return s === "Descending" ? U > P ? -1 : 1 : U > P ? 1 : -1;
  })), le = (c) => {
    nt() || c.sortable !== !1 && (c.name === e(re) ? d(ye, e(ye) === "Descending" ? "Ascending" : "Descending") : (d(re, c.name), d(ye, "Descending")), Ie("sort", { column: e(re), order: e(ye) }));
  }, lt = (c) => {
    let n = c?.displayName;
    return c && n === void 0 && (n = c.name), n || "";
  }, ke = (c, n, s) => {
    let M = [], F = [];
    return Object.entries(c || {}).forEach(([U, P]) => {
      !U || !P || (!s || !P?.autocolumn ? M.push(P) : n && F.push(P));
    }), M.sort((U, P) => {
      if (U.divider)
        return U;
      if (P.divider)
        return P;
      const ie = U.order || Number.MAX_SAFE_INTEGER, De = P.order || Number.MAX_SAFE_INTEGER, Ye = lt(U), _t = lt(P);
      return ie !== De ? ie < De ? U : P : Ye < _t ? U : P;
    }).concat(F).map((U) => U.name);
  }, Re = (c, n) => {
    c.stopPropagation(), Ie("editcolumn", n);
  }, Ne = (c, n) => {
    c.stopPropagation(), Ie("editrow", Wt(n));
  }, Me = (c) => {
    A() && (G().some((n) => n._id === c._id) ? G(G().filter((n) => n._id !== c._id)) : G([...G(), c]));
  }, wt = (c) => {
    if (!!c.detail) {
      const s = [...G()];
      e(o).forEach((M) => {
        M.__selectable !== !1 && s.findIndex((F) => F._id === M._id) === -1 && s.push(M);
      }), G(s);
    } else
      G(G().filter((s) => e(o).every((M) => M._id !== s._id)));
  }, Pt = (c) => {
    let n = {};
    return Object.keys(c || {}).forEach((s) => {
      n[s] = "", c[s].color && (n[s] += `color: ${c[s].color};`), c[s].background && (n[s] += `background-color: ${c[s].background};`), c[s].align === "Center" && (n[s] += "justify-content: center; text-align: center;"), c[s].align === "Right" && (n[s] += "justify-content: flex-end; text-align: right;"), c[s].borderLeft && (n[s] += "border-left: 1px solid var(--spectrum-global-color-gray-200);"), c[s].borderLeft && (n[s] += "border-right: 1px solid var(--spectrum-global-color-gray-200);"), c[s].minWidth && (n[s] += `min-width: ${c[s].minWidth};`);
    }), n;
  }, qt = (c) => {
    const n = new ResizeObserver((s) => {
      if (!s?.[0])
        return;
      const M = s[0].target.getBoundingClientRect();
      d(et, M.height);
    });
    return n.observe(c), n;
  };
  Gt(() => {
    let c = qt(e($e));
    return () => {
      c.disconnect();
    };
  }), m(() => r(Qe()), () => {
    d(i, Qe() ? 46 : 55);
  }), m(() => r(u()), () => {
    u(L(u()));
  }), m(() => r(E()), () => {
    E() || d(tt, !0);
  }), m(
    () => (r(u()), r(D()), r(st())),
    () => {
      d(a, ke(u(), D(), st()));
    }
  ), m(() => (e(a), r(g())), () => {
    d(o, e(a)?.length ? g() || [] : []);
  }), m(() => e(o), () => {
    d(b, e(o)?.length || 0);
  }), m(
    () => (e(tt), e(et), e(o), r(j()), e(i)),
    () => {
      d(h, Q(e(tt), e(et), e(o).length, j(), e(i)));
    }
  ), m(() => r(pe()), () => {
    d(w, pe() ? 0 : ut);
  }), m(
    () => (e(h), r(j()), e(b), e(i), r(E()), e(w)),
    () => {
      d(k, Ee(e(h), j(), e(b), e(i), E(), e(w)));
    }
  ), m(() => (e(o), e(re), e(ye)), () => {
    d(H, fe(e(o), e(re), e(ye)));
  }), m(
    () => (r(ne()), r(A())),
    () => {
      d(R, ne() || A());
    }
  ), m(
    () => (e(a), r(u()), e(R), r(Te())),
    () => {
      d(O, se(e(a), u(), e(R), Te()));
    }
  ), m(() => r(u()), () => {
    d(y, Pt(u()));
  }), m(() => (e(o), r(G())), () => {
    e(o).filter((n) => G().some((s) => n._id === s._id)).length === 0 && d(Le, !1);
  }), qe(), be();
  var yt = he(), At = ae(yt);
  Vt(At, () => (e(a), x(() => e(a)?.length)), (c) => {
    var n = Dl();
    let s;
    var M = S(n);
    {
      var F = (P) => {
        var ie = pl(), De = S(ie);
        Oe(De, t, "loadingIndicator", {}, (Ye) => {
          Ut(Ye, {});
        }), z(ie), q(() => Ve(ie, e(k))), v(P, ie);
      }, U = (P) => {
        var ie = Ml();
        let De;
        var Ye = S(ie);
        {
          var _t = (me) => {
            var Ce = zl(), He = S(Ce);
            {
              var at = (J) => {
                var p = kl();
                let $;
                var xe = S(p);
                {
                  var Se = (_) => {
                    bt(_, {
                      get value() {
                        return e(Le);
                      },
                      set value(N) {
                        d(Le, N);
                      },
                      $$events: { change: wt },
                      $$legacy: !0
                    });
                  }, Z = (_) => {
                    var N = he(), de = ae(N);
                    {
                      var K = (V) => {
                        var ue = Ke();
                        q(() => ge(ue, je())), v(V, ue);
                      };
                      Y(
                        de,
                        (V) => {
                          je() && V(K);
                        },
                        !0
                      );
                    }
                    v(_, N);
                  };
                  Y(xe, (_) => {
                    A() ? _(Se) : _(Z, !1);
                  });
                }
                z(p), q((_) => $ = ve(p, 1, "spectrum-Table-headCell spectrum-Table-headCell--divider spectrum-Table-headCell--edit spectrum-Table-headCell--editLeft svelte-1qzi7hd", null, $, _), [() => ({ noBorderHeader: !ze() })]), v(J, p);
              };
              Y(He, (J) => {
                e(R) && Te() === "left" && J(at);
              });
            }
            var I = te(He, 2);
            Ue(I, 1, () => e(a), We, (J, p) => {
              var $ = Rl();
              let xe;
              var Se = S($), Z = S(Se), _ = te(Z);
              {
                var N = (oe) => {
                  Be(oe, {
                    name: "magic-wand",
                    size: "S",
                    color: "var(--spectrum-global-color-gray-600)"
                  });
                };
                Y(_, (oe) => {
                  r(u()), e(p), x(() => u()[e(p)]?.autocolumn) && oe(N);
                });
              }
              var de = te(_, 2);
              {
                var K = (oe) => {
                  Be(oe, {
                    name: "caret-down",
                    size: "S",
                    color: "var(--spectrum-global-color-gray-700)"
                  });
                };
                Y(de, (oe) => {
                  e(re) === e(p) && oe(K);
                });
              }
              var V = te(de, 2);
              {
                var ue = (oe) => {
                  Be(oe, {
                    name: "pencil",
                    size: "S",
                    hoverable: !0,
                    color: "var(--spectrum-global-color-gray-600)",
                    hoverColor: "var(--spectrum-global-color-gray-900)",
                    $$events: { click: (Fe) => Re(Fe, e(p)) }
                  });
                };
                Y(V, (oe) => {
                  r(ee()), r(u()), e(p), x(() => ee() && u()[e(p)]?.editable !== !1) && oe(ue);
                });
              }
              z(Se), z($), q(
                (oe, Fe) => {
                  xe = ve($, 1, "spectrum-Table-headCell svelte-1qzi7hd", null, xe, oe), rt(Se, "title", e(p)), ge(Z, `${Fe ?? ""} `);
                },
                [
                  () => ({
                    noBorderHeader: !ze(),
                    "spectrum-Table-headCell--alignCenter": u()[e(p)].align === "Center",
                    "spectrum-Table-headCell--alignRight": u()[e(p)].align === "Right",
                    "is-sortable": u()[e(p)].sortable !== !1,
                    "is-sorted-desc": e(re) === e(p) && e(ye) === "Descending",
                    "is-sorted-asc": e(re) === e(p) && e(ye) === "Ascending"
                  }),
                  () => (r(u()), e(p), x(() => lt(u()[e(p)])))
                ]
              ), Xe("click", $, () => le(u()[e(p)])), v(J, $);
            });
            var Pe = te(I, 2);
            {
              var ce = (J) => {
                var p = Sl();
                let $;
                var xe = S(p);
                {
                  var Se = (_) => {
                    bt(_, {
                      get value() {
                        return e(Le);
                      },
                      set value(N) {
                        d(Le, N);
                      },
                      $$events: { change: wt },
                      $$legacy: !0
                    });
                  }, Z = (_) => {
                    var N = he(), de = ae(N);
                    {
                      var K = (V) => {
                        var ue = Ke();
                        q(() => ge(ue, je())), v(V, ue);
                      };
                      Y(
                        de,
                        (V) => {
                          je() && V(K);
                        },
                        !0
                      );
                    }
                    v(_, N);
                  };
                  Y(xe, (_) => {
                    A() ? _(Se) : _(Z, !1);
                  });
                }
                z(p), q((_) => $ = ve(p, 1, "spectrum-Table-headCell spectrum-Table-headCell--divider spectrum-Table-headCell--edit spectrum-Table-headCell--editRight svelte-1qzi7hd", null, $, _), [() => ({ noBorderHeader: !ze() })]), v(J, p);
              };
              Y(Pe, (J) => {
                e(R) && Te() === "right" && J(ce);
              });
            }
            z(Ce), v(me, Ce);
          };
          Y(Ye, (me) => {
            e(a), r(pe()), x(() => e(a).length && !pe()) && me(_t);
          });
        }
        var Lt = te(Ye, 2);
        {
          var Mt = (me) => {
            var Ce = he(), He = ae(Ce);
            Ue(He, 1, () => e(H), We, (at, I) => {
              var Pe = ql();
              let ce;
              var J = S(Pe);
              {
                var p = (Z) => {
                  var _ = Tl();
                  let N;
                  var de = S(_);
                  {
                    let K = Je(() => (r(G()), e(I), x(() => G().findIndex((V) => V._id === e(I)._id) !== -1)));
                    zt(de, {
                      get data() {
                        return e(I);
                      },
                      get selected() {
                        return e(K);
                      },
                      onEdit: (V) => Ne(V, e(I)),
                      get allowSelectRows() {
                        return A();
                      },
                      get allowEditRows() {
                        return ne();
                      }
                    });
                  }
                  z(_), q((K) => N = ve(_, 1, "spectrum-Table-cell spectrum-Table-cell--divider spectrum-Table-cell--edit spectrum-Table-cell--editLeft svelte-1qzi7hd", null, N, K), [() => ({ noBorderCheckbox: !ze() })]), Xe("click", _, (K) => {
                    e(I).__selectable !== !1 && (Me(e(I)), K.stopPropagation());
                  }), v(Z, _);
                };
                Y(J, (Z) => {
                  e(R) && Te() === "left" && Z(p);
                });
              }
              var $ = te(J, 2);
              Ue($, 1, () => e(a), We, (Z, _) => {
                var N = El();
                let de;
                var K = S(N);
                {
                  let V = Je(() => (r(kt), e(I), e(_), x(() => kt(e(I), e(_)))));
                  Cl(K, {
                    get customRenderers() {
                      return Ze();
                    },
                    get row() {
                      return e(I);
                    },
                    get snippets() {
                      return ct();
                    },
                    get schema() {
                      return r(u()), e(_), x(() => u()[e(_)]);
                    },
                    get value() {
                      return e(V);
                    },
                    $$events: {
                      clickrelationship(ue) {
                        ot.call(this, t, ue);
                      },
                      buttonclick(ue) {
                        ot.call(this, t, ue);
                      }
                    },
                    children: (ue, oe) => {
                      var Fe = he(), Ht = ae(Fe);
                      Oe(Ht, t, "default", {}, null), v(ue, Fe);
                    },
                    $$slots: { default: !0 }
                  });
                }
                z(N), q(
                  (V) => {
                    de = ve(N, 1, "spectrum-Table-cell svelte-1qzi7hd", null, de, V), Ve(N, (e(y), e(_), x(() => e(y)[e(_)])));
                  },
                  [
                    () => ({
                      "spectrum-Table-cell--divider": !!u()[e(_)].divider
                    })
                  ]
                ), Xe("click", N, () => {
                  !u()[e(_)]?.preventSelectRow && (W() || e(I).__clickable) && (Ie("click", e(I)), Ae() && Me(e(I)));
                }), v(Z, N);
              });
              var xe = te($, 2);
              {
                var Se = (Z) => {
                  var _ = Pl();
                  let N;
                  var de = S(_);
                  {
                    let K = Je(() => (r(G()), e(I), x(() => G().some((V) => V._id === e(I)._id))));
                    zt(de, {
                      get data() {
                        return e(I);
                      },
                      get selected() {
                        return e(K);
                      },
                      onEdit: (V) => Ne(V, e(I)),
                      get allowSelectRows() {
                        return A();
                      },
                      get allowEditRows() {
                        return ne();
                      }
                    });
                  }
                  z(_), q((K) => N = ve(_, 1, "spectrum-Table-cell spectrum-Table-cell--divider spectrum-Table-cell--edit spectrum-Table-cell--editRight svelte-1qzi7hd", null, N, K), [() => ({ noBorderCheckbox: !ze() })]), Xe("click", _, (K) => {
                    e(I).__selectable !== !1 && (Me(e(I)), K.stopPropagation());
                  }), v(Z, _);
                };
                Y(xe, (Z) => {
                  e(R) && Te() === "right" && Z(Se);
                });
              }
              z(Pe), q((Z) => ce = ve(Pe, 1, "spectrum-Table-row svelte-1qzi7hd", null, ce, Z), [
                () => ({ clickable: W() || !!e(I).__clickable })
              ]), v(at, Pe);
            }), v(me, Ce);
          }, Dt = (me) => {
            var Ce = Ll();
            let He;
            var at = S(Ce);
            {
              var I = (ce) => {
                var J = he(), p = ae(J);
                Oe(p, t, "placeholder", {}, null), v(ce, J);
              }, Pe = (ce) => {
                var J = Al(), p = S(J);
                Be(p, {
                  name: "table",
                  size: "XXL",
                  color: "var(--spectrum-global-color-gray-600)"
                });
                var $ = te(p, 2), xe = S($, !0);
                z($), z(J), q(() => ge(xe, ft())), v(ce, J);
              };
              Y(at, (ce) => {
                it() ? ce(I) : ce(Pe, !1);
              });
            }
            z(Ce), q((ce) => He = ve(Ce, 1, "placeholder svelte-1qzi7hd", null, He, ce), [
              () => ({
                "placeholder--custom": it(),
                "placeholder--no-fields": !e(a)?.length
              })
            ]), v(me, Ce);
          };
          Y(Lt, (me) => {
            e(H), x(() => e(H)?.length) ? me(Mt) : me(Dt, !1);
          });
        }
        z(ie), q(
          (me) => {
            De = ve(ie, 1, "spectrum-Table svelte-1qzi7hd", null, De, me), Ve(ie, `${e(k)}${e(O)}`);
          },
          [
            () => ({
              "no-scroll": !j(),
              rounded: dt(),
              "show-header": !pe()
            })
          ]
        ), v(P, ie);
      };
      Y(M, (P) => {
        E() ? P(F) : P(U, !1);
      });
    }
    z(n), Xt(n, (P) => d($e, P), () => e($e)), q(
      (P) => {
        s = ve(n, 1, "wrapper svelte-1qzi7hd", null, s, P), Ve(n, `--row-height: ${e(i)}px; --header-height: ${pe() ? 0 : ut}px;`);
      },
      [
        () => ({
          "wrapper--quiet": C(),
          "wrapper--compact": Qe(),
          "wrapper--sticky-header": ht()
        })
      ]
    ), v(c, n);
  }), v(B, yt), we();
}
function Bl(B, t) {
  _e(t, !1);
  let i = l(t, "row", 8);
  const { Provider: a, ContextScopes: o } = vt("sdk");
  be(), a(B, {
    get data() {
      return i();
    },
    get scope() {
      return x(() => o.Local);
    },
    children: (b, h) => {
      var w = he(), k = ae(w);
      Oe(k, t, "default", {}, null), v(b, w);
    },
    $$slots: { default: !0 }
  }), we();
}
var Ol = T('<div class="row-count svelte-90j9v3"> </div>'), jl = T("<div><!> <!></div>");
function Yl(B, t) {
  _e(t, !1);
  const i = () => Rt(st, "$context", o), a = () => Rt(nt, "$component", o), [o, b] = $t(), h = f(), w = f(), k = f(), H = f(), O = f(), R = f(), y = f(), g = f(), u = f(), D = f(), j = f();
  let C = l(t, "dataProvider", 8), E = l(t, "columns", 8), A = l(t, "rowCount", 8), ne = l(t, "quiet", 8), ee = l(t, "size", 8), W = l(t, "allowSelectRows", 8), Ae = l(t, "compact", 8), G = l(t, "onClick", 8), Ze = l(t, "noRowsMessage", 8);
  const nt = vt("component"), st = vt("context"), {
    styleable: Qe,
    getAction: it,
    ActionTypes: ze,
    rowSelectionStore: pe,
    generateGoldenSample: ft
  } = vt("sdk"), ct = `custom-${Math.random()}`, mt = [{ column: ct, component: Bl }];
  let X = f([]);
  const dt = () => ({ eventContext: { row: ft(e(H)) } }), ht = (L, Q, Ee, se) => {
    if (Q?.length)
      return Q;
    let fe = [], le = [];
    return Object.entries(L).forEach(([ke, Re]) => {
      Re.visible !== !1 && (Re?.autocolumn || fe.push(ke));
    }), fe.concat(le).sort((ke, Re) => {
      if (ke === se)
        return -1;
      if (Re === se)
        return 1;
      const Ne = L[ke].order, Me = L[Re].order;
      return Ne === Me ? 0 : Ne == null ? 1 : Me == null || Ne < Me ? -1 : 1;
    });
  }, Te = (L, Q, Ee) => {
    let se = {};
    return Ee && (se[ct] = {
      displayName: null,
      order: 0,
      sortable: !1,
      divider: !0,
      width: "auto",
      preventSelectRow: !0
    }), Q.forEach((fe) => {
      const le = typeof fe == "string" ? fe : fe.name;
      L[le] && (se[le] = L[le], tl(L[le]) || (se[le].sortable = !1), typeof fe == "object" && (se[le] = { ...se[le], ...fe }));
    }), se;
  }, je = (L) => {
    e(u)({ column: L.detail.column, order: L.detail.order });
  }, Ie = (L) => {
    G() && G()({ row: L.detail });
  }, $e = [
    {
      type: ze.ClearRowSelection,
      callback: () => d(X, [])
    }
  ];
  Jt(() => {
    pe.actions.updateSelection(a().id, []);
  }), m(() => i(), () => {
    d(h, i().snippets);
  }), m(() => a(), () => {
    d(w, a().children);
  }), m(() => r(C()), () => {
    d(k, C()?.loading ?? !1);
  }), m(() => r(C()), () => {
    d(H, C()?.rows || []);
  }), m(() => r(C()), () => {
    d(O, C()?.schema ?? {});
  }), m(() => r(C()), () => {
    d(R, C()?.primaryDisplay);
  }), m(
    () => (e(O), r(E()), e(R)),
    () => {
      d(y, ht(e(O), E(), !1, e(R)));
    }
  ), m(() => (e(O), e(y), e(w)), () => {
    d(g, Te(e(O), e(y), e(w)));
  }), m(() => r(C()), () => {
    d(u, it(C()?.id, ze.SetDataProviderSorting));
  }), m(() => r(C()), () => {
    d(D, C()?.datasource?.type === "table");
  }), m(() => (e(H), e(X)), () => {
    if (e(H)) {
      let L = e(H).map((Q) => Q._id);
      L.length && d(X, e(X).filter((Q) => L.includes(Q._id)));
    }
  }), m(() => (a(), e(X)), () => {
    pe.actions.updateSelection(a().id, e(X).length ? e(X)[0].tableId : "", e(X).map((L) => L._id));
  }), m(() => e(X), () => {
    d(j, { selectedRows: e(X) });
  }), qe();
  var ut = { getAdditionalDataContext: dt };
  be();
  var re = jl(), ye = S(re);
  Kt(ye, {
    get actions() {
      return $e;
    },
    get data() {
      return e(j);
    },
    children: (L, Q) => {
      {
        let Ee = Je(() => W() && e(D)), se = Je(() => (r(E()), x(() => !E()?.length))), fe = Je(() => Ze() || "No rows found");
        Hl(L, {
          get data() {
            return e(H);
          },
          get schema() {
            return e(g);
          },
          get loading() {
            return e(k);
          },
          get rowCount() {
            return A();
          },
          get quiet() {
            return ne();
          },
          get compact() {
            return Ae();
          },
          get customRenderers() {
            return mt;
          },
          get snippets() {
            return e(h);
          },
          get allowSelectRows() {
            return e(Ee);
          },
          allowEditRows: !1,
          allowEditColumns: !1,
          showAutoColumns: !0,
          disableSorting: !0,
          get autoSortColumns() {
            return e(se);
          },
          get placeholderText() {
            return e(fe);
          },
          get selectedRows() {
            return e(X);
          },
          set selectedRows(le) {
            d(X, le);
          },
          $$events: { sort: je, click: Ie },
          children: (le, lt) => {
            var ke = he(), Re = ae(ke);
            Oe(Re, t, "default", {}, null), v(le, ke);
          },
          $$slots: { default: !0 },
          $$legacy: !0
        });
      }
    },
    $$slots: { default: !0 }
  });
  var et = te(ye, 2);
  {
    var tt = (L) => {
      var Q = Ol(), Ee = S(Q);
      z(Q), q(() => ge(Ee, `${e(X), x(() => e(X).length) ?? ""} row${e(X), x(() => e(X).length === 1 ? "" : "s") ?? ""} selected`)), v(L, Q);
    };
    Y(et, (L) => {
      r(W()), e(X), x(() => W() && e(X).length) && L(tt);
    });
  }
  z(re), Zt(re, (L, Q) => Qe?.(L, Q), () => a().styles), q(() => ve(re, 1, el(ee()), "svelte-90j9v3")), v(B, re), Qt(t, "getAdditionalDataContext", dt);
  var Le = we(ut);
  return b(), Le;
}
export {
  Yl as default
};
