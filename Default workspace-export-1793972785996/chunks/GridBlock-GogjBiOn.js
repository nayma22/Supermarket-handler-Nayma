import { g as Ue, p as F, l as W, B as R, i as O, k as gt, m as qe, c as de, I as Tt, j as e, s as Y, r as le, E as Ct, n as ft, q as xe, T as Nt, U as Ht, t as Me, b as vt, d as L, u as ge, a as nt, w as We, z, aG as uo, a4 as Fe, a5 as et, a3 as fo, f as Q, H as re, aU as Ro, at as Et, A as H, o as So, ar as Jo, aV as Qo, aW as ho, a0 as To, a9 as we, aa as Oe, aT as b, aX as Oo, aY as Jt, aZ as po, a_ as zo, aQ as Zo, a$ as Fo, aS as Qt, G as es, b0 as ts, ax as os, b1 as ss, b2 as to, b3 as Lt, b4 as ns, b5 as _t, b6 as rs, b7 as lo, b8 as ls, b9 as No, ba as Wt, bb as Ut, bc as as, bd as is, be as cs, bf as ds, bg as Ho, bh as us, bi as jo, bj as eo, bk as kt, bl as wo, bm as $o, bn as fs, af as vo, bo as vs, bp as gs, bq as ms, br as hs, bs as ws, h as Ye, X as zt, Y as Ot, av as no, ai as ro, x as w, y as rt, e as Se, bt as ps, bu as bo, Z as jt, bv as $s, bw as bs, D as _o, bx as _s, ac as tt, by as Yt, bz as xo, ak as Cs, bA as ys, a1 as Rs, bB as Ss, bC as xs, bD as Is, bE as Vo, bF as Io, aq as Bo, bG as Co, bH as ks, V as Vt, a6 as Bt, aE as Ms, bI as As, bJ as ko, bK as so, bL as Ls, bM as Es, _ as Ps, bN as Zt, bO as Ds, bP as Mo, $ as Uo, bQ as Ts, P as Os, v as qo, aC as zs, bR as Fs, bS as Ao, bT as Ns, F as Hs, bU as js } from "./index-quCB9sGT.js";
import { c as Vs } from "./autoRefresh-DITnPTDZ.js";
import { C as Bs } from "./CollapsedButtonGroup-tRbksCiJ.js";
import { c as ao, a as Lo } from "./table-q73-JEeP.js";
import { M as Wo, I as at } from "./Item-ymok-NiS.js";
import { U as Us } from "./UserAvatar-BJdD6nVV.js";
var qs = Q('<div class="spectrum-InLineAlert-content"> </div>'), Ws = Q('<div class="spectrum-InLineAlert-footer button svelte-1lbp5qh"><!></div>'), Gs = Q('<div id="docs-link" class="svelte-1lbp5qh"><a target="_blank" rel="noopener noreferrer" class="docs-link svelte-1lbp5qh"> <!></a></div>'), Ks = Q('<div><!> <div class="spectrum-InLineAlert-header"> </div> <!> <!> <!></div>');
function Xs(d, t) {
  Ue(t, !1);
  const o = z(), r = z();
  let c = F(t, "type", 8, "info"), u = F(t, "header", 8, ""), a = F(t, "message", 8, ""), s = F(t, "onConfirm", 24, () => {
  }), n = F(t, "buttonText", 8, ""), l = F(t, "cta", 8, !1), i = F(t, "link", 8, ""), h = F(t, "linkText", 8, "");
  function p(C) {
    switch (C) {
      case "error":
      case "negative":
        return "warning";
      case "success":
        return "check-circle";
      case "help":
        return "question";
      default:
        return "info";
    }
  }
  W(() => O(c()), () => {
    R(o, p(c()));
  }), W(() => O(a()), () => {
    R(r, a().split(`
`));
  }), gt(), qe();
  var x = Ks(), I = de(x);
  Tt(I, {
    get name() {
      return e(o);
    },
    size: "M"
  });
  var _ = Y(I, 2), g = de(_, !0);
  le(_);
  var m = Y(_, 2);
  Ct(m, t, "default", {}, (C) => {
    var A = ft(), S = xe(A);
    Nt(S, 1, () => e(r), Ht, (M, P) => {
      var y = qs(), T = de(y, !0);
      le(y), Me(() => vt(T, e(P))), L(M, y);
    }), L(C, A);
  });
  var v = Y(m, 2);
  {
    var $ = (C) => {
      var A = Ws(), S = de(A);
      {
        let M = re(() => !l());
        uo(S, {
          get cta() {
            return l();
          },
          get secondary() {
            return e(M);
          },
          $$events: {
            click(...P) {
              s()?.apply(this, P);
            }
          },
          children: (P, y) => {
            Fe();
            var T = et();
            Me(() => vt(T, n() || "OK")), L(P, T);
          },
          $$slots: { default: !0 }
        });
      }
      le(A), L(C, A);
    };
    ge(v, (C) => {
      s() && C($);
    });
  }
  var k = Y(v, 2);
  {
    var f = (C) => {
      var A = Gs(), S = de(A), M = de(S), P = Y(M);
      Tt(P, { name: "arrow-square-out", size: "XS" }), le(S), le(A), Me(() => {
        fo(S, "href", i()), vt(M, `${h() ?? ""} `);
      }), L(C, A);
    };
    ge(k, (C) => {
      i() && h() && C(f);
    });
  }
  le(x), Me(() => {
    nt(x, 1, `spectrum-InLineAlert spectrum-InLineAlert--${c() ?? ""}`, "svelte-1lbp5qh"), vt(g, u());
  }), L(d, x), We();
}
var Ys = Q("<div><!></div>"), Js = Q("<div> </div>"), Qs = Q('<div role="progressbar" aria-valuemin="0" aria-valuemax="100"><!> <!> <div class="spectrum-ProgressBar-track"><div></div></div> <div class="spectrum-ProgressBar-label"></div></div>');
function go(d, t) {
  const o = Ro(t);
  let r = F(t, "value", 8, !1), c = F(t, "duration", 8, 1e3), u = F(t, "width", 8, !1), a = F(t, "sideLabel", 8, !1), s = F(t, "hidePercentage", 8, !0), n = F(t, "color", 24, () => {
  }), l = F(t, "size", 8, "M");
  var i = Qs();
  let h;
  var p = de(i);
  {
    var x = (k) => {
      var f = Ys(), C = de(f);
      Ct(C, t, "default", {}, null), le(f), Me(() => nt(f, 1, `spectrum-FieldLabel spectrum-ProgressBar-label spectrum-FieldLabel--size${l() ?? ""}`, "svelte-9qxmzd")), L(k, f);
    };
    ge(p, (k) => {
      o && k(x);
    });
  }
  var I = Y(p, 2);
  {
    var _ = (k) => {
      var f = Js(), C = de(f);
      le(f), Me(
        (A) => {
          nt(f, 1, `spectrum-FieldLabel spectrum-ProgressBar-percentage spectrum-FieldLabel--size${l() ?? ""}`, "svelte-9qxmzd"), vt(C, `${A ?? ""}%`);
        },
        [
          () => (O(r()), H(() => Math.round(Number(r()))))
        ]
      ), L(k, f);
    };
    ge(I, (k) => {
      !s() && (r() || r() === 0) && k(_);
    });
  }
  var g = Y(I, 2), m = de(g);
  let v;
  le(g);
  var $ = Y(g, 2);
  fo($, "hidden", !1), le(i), Me(
    (k, f) => {
      h = nt(i, 1, `spectrum-ProgressBar spectrum-ProgressBar--size${l() ?? ""}`, "svelte-9qxmzd", h, k), fo(i, "aria-valuenow", typeof r() == "number" ? r() : void 0), Et(i, u() ? `width: ${typeof u() == "string" ? u() : ""};` : ""), v = nt(m, 1, "spectrum-ProgressBar-fill svelte-9qxmzd", null, v, f), Et(m, `width: ${(typeof r() == "number" ? r() : 0) ?? ""}%; --duration: ${c() ?? ""}ms;`);
    },
    [
      () => ({
        "spectrum-ProgressBar--indeterminate": !r() && r() !== 0,
        "spectrum-ProgressBar--sideLabel": a()
      }),
      () => ({
        "color-green": n() === "green",
        "color-red": n() === "red"
      })
    ]
  ), L(d, i);
}
function Go(d, t) {
  Ue(t, !1);
  let o = F(t, "text", 8, null), r = F(t, "condition", 8, !0), c = F(t, "duration", 8, 5e3), u = F(t, "position", 8), a = F(t, "type", 8), s = z(!1), n;
  const l = () => {
    R(s, !0), n = setTimeout(
      () => {
        R(s, !1);
      },
      c()
    );
  }, i = () => {
    R(s, !1), clearTimeout(n);
  };
  So(i), W(() => O(r()), () => {
    r() ? l() : i();
  }), gt(), qe();
  {
    let h = re(() => e(s) ? o() : null);
    Jo(d, {
      get position() {
        return u();
      },
      get type() {
        return a();
      },
      get text() {
        return e(h);
      },
      get fixed() {
        return e(s);
      },
      children: (p, x) => {
        var I = ft(), _ = xe(I);
        Ct(_, t, "default", {}, null), L(p, I);
      },
      $$slots: { default: !0 }
    });
  }
  We();
}
const Eo = (d) => {
  if (d.schema.icon && !d.schema.icon.startsWith("ri-"))
    return d.schema.icon;
  if (d.calculationType)
    return "calculator";
  if (d.schema.autocolumn)
    return "shapes";
  if (Qo(d.schema))
    return "user";
  const { type: t, subtype: o } = d.schema;
  return (typeof ho[t] == "object" && o ? ho[t][o] : ho[t]) || "article";
}, Zs = () => {
  const d = To();
  let t = {};
  return { dispatch: (c, u) => {
    d(c, u);
    const a = t[c] || [];
    for (let s = 0; s < a.length; s++)
      a[s](u);
  }, subscribe: (c, u) => {
    const a = t[c] || [];
    return t[c] = [...a, u], () => {
      t[c] = t[c].filter((s) => s !== u);
    };
  } };
}, en = () => {
  const d = Oe({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), t = we(d, (r) => r.width, 0), o = we(d, (r) => r.height, 0);
  return { bounds: d, height: o, width: t };
}, tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createStores: en
}, Symbol.toStringTag, { value: "Module" })), on = () => {
  const d = Oe([]), t = we(d, (o) => {
    let r = Jt, c = 0;
    return o.map((u) => {
      const a = {
        ...u,
        __idx: c,
        __left: r
      };
      return u.visible && (c++, r += u.width ?? 0), a;
    });
  });
  return {
    columns: {
      ...d,
      subscribe: t.subscribe
    }
  };
}, sn = (d) => {
  const { columns: t } = d, o = we(t, (n) => {
    let l = {};
    return n.forEach((i) => {
      l[i.name] = i;
    }), l;
  }), r = we(t, (n) => n.filter((l) => !l.related)), c = we(t, (n) => n.filter((l) => l.visible)), u = we(c, (n) => n.find((l) => l.primaryDisplay)), a = we(c, (n) => n.filter((l) => !l.primaryDisplay)), s = we(t, (n) => n.filter((i) => !i.schema?.autocolumn).length > 0);
  return {
    tableColumns: r,
    displayColumn: u,
    columnLookupMap: o,
    visibleColumns: c,
    scrollableColumns: a,
    hasNonAutoColumn: s
  };
}, nn = (d) => {
  const { columns: t, datasource: o } = d;
  return {
    columns: {
      ...t,
      actions: {
        changeAllColumnWidths: async (u) => {
          b(t).forEach((s) => {
            const { related: n } = s, l = { width: u };
            n ? o.actions.addSubSchemaMutation(
              n.subField,
              n.field,
              l
            ) : o.actions.addSchemaMutation(s.name, l);
          }), await o.actions.saveSchemaMutations();
        },
        isReadonly: (u) => u?.schema ? u.schema.autocolumn || u.schema.disabled || u.schema.type === "formula" || u.schema.type === "ai" || u.schema.readonly : !1
      }
    }
  };
}, rn = (d) => {
  const { definition: t, columns: o, displayColumn: r, enrichedSchema: c } = d, u = (a) => {
    const s = b(t);
    if (!a || !s) {
      o.set([]);
      return;
    }
    const n = b(r);
    let l;
    const i = s.primaryDisplay || n?.name;
    i && a[i] && (l = i), o.set(
      Object.keys(a).map((h) => {
        const p = a[h], x = {
          type: p.type,
          name: h,
          label: p.displayName || h,
          schema: p,
          width: p.width || Oo,
          visible: p.visible ?? !0,
          readonly: p.readonly,
          order: p.order,
          conditions: p.conditions,
          related: p.related,
          calculationType: p.calculationType,
          format: p.format,
          __left: void 0,
          // TODO
          __idx: void 0
          // TODO
        };
        return h === l && (x.order = 0, x.primaryDisplay = !0), x;
      }).sort((h, p) => {
        if (h.name === l)
          return -1;
        if (p.name === l)
          return 1;
        const x = h.order, I = p.order;
        if (x != null && I != null)
          return x < I ? -1 : 1;
        if (x != null)
          return -1;
        if (I != null)
          return 1;
        const _ = h.schema?.autocolumn, g = p.schema?.autocolumn;
        return _ === g ? 0 : _ ? 1 : -1;
      })
    );
  };
  c.subscribe(u);
}, ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: nn,
  createStores: on,
  deriveStores: sn,
  initialise: rn
}, Symbol.toStringTag, { value: "Module" })), Pt = (d) => {
  if (!d)
    return { rowId: void 0, field: void 0 };
  const t = d.split(po), o = t.pop();
  return { rowId: t.join(po), field: o };
}, pt = (d, t) => `${d}${po}${t}`, Xt = (d) => {
  const t = d;
  return {
    x: t.clientX ?? t.touches?.[0]?.clientX,
    y: t.clientY ?? t.touches?.[0]?.clientY
  };
}, an = () => `${zo}${Zo()}`, cn = (d) => d?.startsWith(zo), dn = () => ({
  menu: Oe({
    left: 0,
    top: 0,
    visible: !1,
    multiRowMode: !1,
    multiCellMode: !1
  })
}), un = (d) => {
  const {
    menu: t,
    focusedCellId: o,
    gridID: r,
    selectedRows: c,
    selectedRowCount: u,
    selectedCellMap: a,
    selectedCellCount: s
  } = d;
  return {
    menu: {
      ...t,
      actions: {
        open: (i, h) => {
          h.preventDefault(), h.stopPropagation();
          const x = document.getElementById(r)?.getElementsByClassName("grid-data-outer")?.[0];
          if (!x)
            return;
          const I = h.target.getBoundingClientRect(), _ = x.getBoundingClientRect();
          let g = !1;
          if (b(u) > 1) {
            const { rowId: v } = Pt(i);
            v !== void 0 && b(c)[v] && (g = !0);
          }
          let m = !1;
          !g && b(s) > 1 && b(a)[i] && (m = !0), !g && !m && o.set(i), t.set({
            left: I.left - _.left + h.offsetX,
            top: I.top - _.top + h.offsetY,
            visible: !0,
            multiRowMode: g,
            multiCellMode: m
          });
        },
        close: () => {
          t.update((i) => ({
            ...i,
            visible: !1
          }));
        }
      }
    }
  };
}, fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: un,
  createStores: dn
}, Symbol.toStringTag, { value: "Module" })), vn = (d) => {
  const { scrolledRowCount: t, rows: o, visualRowCapacity: r } = d, c = we(o, (s) => s.length, 0), u = we(
    [t, c, r],
    ([s, n, l]) => Math.max(0, n - s - l)
  );
  we(
    [u, c],
    ([s, n]) => s < 25 && n
  ).subscribe((s) => {
    s && o.actions.loadNextPage();
  });
}, gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initialise: vn
}, Symbol.toStringTag, { value: "Module" })), Ko = {
  sourceColumn: null,
  targetColumn: null,
  insertAfter: !1,
  breakpoints: [],
  gridLeft: 0,
  width: 0,
  increment: 0
}, mn = () => {
  const d = Oe(Ko), t = we(
    d,
    (o) => !!o.sourceColumn,
    !1
  );
  return {
    reorder: d,
    isReordering: t
  };
}, hn = (d) => {
  const {
    reorder: t,
    columns: o,
    columnLookupMap: r,
    scrollableColumns: c,
    scroll: u,
    bounds: a,
    visibleColumns: s,
    datasource: n,
    stickyWidth: l,
    width: i,
    scrollLeft: h,
    maxScrollLeft: p
  } = d;
  let x = 0, I, _;
  const g = (M, P) => {
    const y = b(c), T = b(a), V = b(l), te = y.map((Z) => ({
      x: Z.__left - V,
      column: Z.name,
      insertAfter: !1
    })), j = y[y.length - 1];
    j && te.push({
      x: j.__left + j.width - V,
      column: j.name,
      insertAfter: !0
    }), t.set({
      sourceColumn: M,
      targetColumn: null,
      breakpoints: te,
      gridLeft: T.left,
      width: T.width
    }), document.addEventListener("mousemove", m), document.addEventListener("mouseup", f), document.addEventListener("touchmove", m), document.addEventListener("touchend", f), document.addEventListener("touchcancel", f), m(P);
  }, m = (M) => {
    const { x: P } = Xt(M);
    x = P, v();
    const y = b(h), T = b(p), V = b(t), te = Math.min(140, b(i) / 6), j = 16, Z = Math.max(0, V.gridLeft + V.width - P), ae = Math.max(0, P - V.gridLeft);
    if (Z < te && y < T) {
      const fe = (te - Z) / te * j;
      t.update((ue) => ({ ...ue, increment: fe })), $();
    } else if (ae < te && y > 0) {
      const fe = -1 * (te - ae) / te * j;
      t.update((ue) => ({ ...ue, increment: fe })), $();
    } else
      k();
  }, v = () => {
    const M = b(t), P = b(h);
    let y, T = Number.MAX_SAFE_INTEGER;
    const V = x - M.gridLeft + P;
    M.breakpoints.forEach((te) => {
      const j = Math.abs(te.x - V);
      j < T && (T = j, y = te);
    }), y && (y.column !== M.targetColumn || y.insertAfter !== M.insertAfter) && t.update((te) => ({
      ...te,
      targetColumn: y.column,
      insertAfter: y.insertAfter
    }));
  }, $ = () => {
    _ || (_ = !0, I = setInterval(() => {
      const M = b(p), { increment: P } = b(t);
      u.update((y) => ({
        ...y,
        left: Math.max(0, Math.min(M, y.left + P))
      })), v();
    }, 10));
  }, k = () => {
    _ = !1, clearInterval(I);
  }, f = async () => {
    k(), document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", f), document.removeEventListener("touchmove", m), document.removeEventListener("touchend", f), document.removeEventListener("touchcancel", f);
    const { sourceColumn: M, targetColumn: P, insertAfter: y } = b(t);
    t.set(Ko), M !== P && await C({
      sourceColumn: M,
      targetColumn: P,
      insertAfter: y
    });
  }, C = async ({
    sourceColumn: M,
    targetColumn: P,
    insertAfter: y = !1
  }) => {
    const T = b(o);
    let V = T.findIndex((j) => j.name === M), te = T.findIndex((j) => j.name === P);
    y && te++, o.update((j) => {
      const Z = j.splice(V, 1);
      return --te < V && te++, j.toSpliced(te, 0, Z[0]);
    }), b(o).forEach((j, Z) => {
      const { related: ae } = j, oe = { order: Z };
      ae ? n.actions.addSubSchemaMutation(
        ae.subField,
        ae.field,
        oe
      ) : n.actions.addSchemaMutation(j.name, oe);
    }), await n.actions.saveSchemaMutations();
  };
  return {
    reorder: {
      ...t,
      actions: {
        startReordering: g,
        stopReordering: f,
        moveColumnLeft: async (M) => {
          const P = b(s), T = b(r)[M].__idx;
          await C({
            sourceColumn: M,
            targetColumn: P[T - 1]?.name
          });
        },
        moveColumnRight: async (M) => {
          const P = b(s), T = b(r)[M].__idx;
          T !== P.length - 1 && await C({
            sourceColumn: M,
            targetColumn: P[T + 1]?.name,
            insertAfter: !0
          });
        }
      }
    }
  };
}, wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: hn,
  createStores: mn
}, Symbol.toStringTag, { value: "Module" })), Xo = {
  initialMouseX: null,
  initialWidth: null,
  column: null,
  width: 0,
  left: 0
}, pn = () => {
  const d = Oe(Xo), t = we(d, (o) => o.column != null, !1);
  return {
    resize: d,
    isResizing: t
  };
}, $n = (d) => {
  const { resize: t, ui: o, datasource: r } = d, c = (n, l) => {
    const { x: i } = Xt(l);
    l.stopPropagation(), l.preventDefault(), o.actions.blur(), t.set({
      width: n.width,
      left: n.__left,
      initialWidth: n.width,
      initialMouseX: i,
      column: n.name,
      related: n.related
    }), document.addEventListener("mousemove", u), document.addEventListener("mouseup", a), document.addEventListener("touchmove", u), document.addEventListener("touchend", a), document.addEventListener("touchcancel", a);
  }, u = (n) => {
    const { initialMouseX: l, initialWidth: i, width: h, column: p, related: x } = b(t), { x: I } = Xt(n), _ = I - l, g = Math.round(Math.max(Fo, i + _));
    Math.abs(h - g) < 5 || (x ? r.actions.addSubSchemaMutation(x.subField, x.field, {
      width: h
    }) : r.actions.addSchemaMutation(p, { width: h }), t.update((m) => ({
      ...m,
      width: g
    })));
  }, a = async () => {
    const n = b(t);
    t.set(Xo), document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", a), document.removeEventListener("touchmove", u), document.removeEventListener("touchend", a), document.removeEventListener("touchcancel", a), n.width !== n.initialWidth && await r.actions.saveSchemaMutations();
  };
  return {
    resize: {
      ...t,
      actions: {
        startResizing: c,
        resetSize: async (n) => {
          r.actions.addSchemaMutation(n.name, {
            width: Oo
          }), await r.actions.saveSchemaMutations();
        }
      }
    }
  };
}, bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: $n,
  createStores: pn
}, Symbol.toStringTag, { value: "Module" })), _n = () => {
  const d = Oe([]), t = Oe(!1), o = Oe(!1), r = Oe(!1), c = Oe({}), u = Oe({}), a = Oe(!1), s = Oe(null), n = Oe(!1), l = Oe(null);
  let i = !1;
  return t.subscribe((h) => {
    h ? i = !0 : i && o.set(!0);
  }), {
    rows: d,
    fetch: l,
    loaded: o,
    refreshing: r,
    loading: t,
    rowChangeCache: c,
    inProgressChanges: u,
    hasNextPage: a,
    error: s,
    definitionMissing: n
  };
}, Cn = (d) => {
  const { rows: t, enrichedSchema: o } = d, r = we(
    [t, o],
    ([a, s]) => {
      const n = Object.values(s || {}), l = n.filter((h) => h.related), i = n.filter((h) => h.format);
      return a.map((h, p) => {
        const x = l.reduce(
          (_, g) => {
            const m = s[g.related.field];
            return _[g.name] = rs(
              h,
              { ...g, related: g.related },
              m
            ), _;
          },
          {}
        ), I = i.reduce(
          (_, g) => (_[g.name] = g.format(h), _),
          {}
        );
        return {
          ...h,
          ...x,
          __formatted: I,
          __idx: p
        };
      });
    }
  ), c = we(r, (a) => {
    let s = {};
    for (let n = 0; n < a.length; n++)
      s[a[n]._id] = a[n];
    return s;
  }), u = we(t, (a) => a.length);
  return {
    rows: {
      ...t,
      subscribe: r.subscribe
    },
    rowLookupMap: c,
    rowCount: u
  };
}, yn = (d) => {
  const {
    rows: t,
    rowLookupMap: o,
    definition: r,
    allFilters: c,
    loading: u,
    sort: a,
    datasource: s,
    API: n,
    scroll: l,
    validation: i,
    focusedCellId: h,
    columns: p,
    rowChangeCache: x,
    inProgressChanges: I,
    hasNextPage: _,
    error: g,
    definitionMissing: m,
    notifications: v,
    fetch: $,
    hasBudibaseIdentifiers: k,
    refreshing: f,
    columnLookupMap: C
  } = d, A = Oe(!1);
  let S = {}, M = null, P = null;
  s.subscribe(async (E) => {
    if (M?.(), M = null, $.set(null), A.set(!1), u.set(!0), x.set({}), !s.actions.isDatasourceValid(E)) {
      g.set("Datasource is invalid");
      return;
    }
    await Qt();
    const D = b(c), J = b(a).map((G) => ({
      field: G.column,
      order: G.order
    })), U = es({
      API: n,
      datasource: E,
      options: {
        filter: D,
        sorts: J,
        limit: ss,
        paginate: !0,
        // Disable client side limiting, so that for queries and custom data
        // sources we don't impose fake row limits. We want all the data.
        clientSideLimiting: !1
      }
    });
    M = U.subscribe(async (G) => {
      if (G.error) {
        (G.error.status === 401 || G.error.status === 403) && ts.set({
          text: "Session not authenticated",
          variant: "session-not-authenticated",
          action: {
            label: "Log in",
            onClick: () => os()
          }
        });
        let ie = "An unknown error occurred";
        G.error.status === 403 ? ie = "You don't have access to this data" : G.error.status === 404 && G.error.url && G.error.url.includes("/api/tables/") || G.error.url.includes("/api/v2/views/") ? (m.set(!0), ie = G.error.message) : G.error.message && (ie = G.error.message), g.set(ie);
      } else if (G.loaded && !G.loading) {
        g.set(null), _.set(G.hasNextPage);
        const ie = b(A), be = G.resetKey !== P, ne = P;
        P = G.resetKey, !ie && ne && (t.set([]), await Qt()), (!ie || be) && r.set(G.definition ?? null), ie ? be && l.update((K) => ({ ...K, top: 0 })) : (A.set(!0), l.set({ top: 0, left: 0 })), $e(G.rows, be), u.set(!1);
      }
      f.set(G.loading);
    }), $.set(U);
  });
  const y = (E, D) => {
    let B;
    if (typeof D == "string" ? B = D : typeof D?.message == "string" && (B = D.message), typeof D != "string" && !D?.json?.validationErrors && B) {
      const { field: J } = Pt(b(h));
      J && (D = {
        json: {
          validationErrors: {
            [J]: D.message
          }
        }
      });
    }
    if (typeof D != "string" && D?.json?.validationErrors) {
      const J = Object.keys(D.json.validationErrors), U = b(p);
      let N = [], G = [];
      for (let be of J)
        s.actions.canUseColumn(be) ? N.push(be) : G.push(be);
      const { json: ie } = D;
      for (let be of N) {
        let ne = ie.validationErrors[be];
        Array.isArray(ne) && (ne = ne[0]), (typeof ne != "string" || !ne.length) && (D = "Something went wrong"), i.actions.setError(
          pt(E, be),
          ns(ne)
        );
        const K = U.findIndex((se) => se.name === be);
        K !== -1 && !U[K].visible && p.update((se) => (se[K].visible = !0, se.slice()));
      }
      for (let be of G)
        b(v).error(`${be} is required but is missing`);
    } else
      b(v).error(B || "An unknown error occurred");
  }, T = async ({
    row: E,
    idx: D,
    bubble: B = !1,
    notify: J = !0
  }) => {
    try {
      const U = await s.actions.addRow(E);
      return D != null ? (S[U._id] = !0, t.update((N) => (N.splice(D, 0, U), N.slice()))) : $e([U]), J && b(v).success("Row created successfully"), U;
    } catch (U) {
      if (B)
        throw U;
      y(Lt, U), i.actions.focusFirstRowError(Lt);
    }
  }, V = async (E) => {
    let D = ee(E);
    delete D._id, delete D._rev;
    try {
      const B = await T({
        row: D,
        idx: E.__idx + 1,
        bubble: !0,
        notify: !1
      });
      return b(v).success("Duplicated 1 row"), B;
    } catch (B) {
      y(E._id, B), i.actions.focusFirstRowError(E._id);
    }
  }, te = async (E, D) => {
    const B = b(o), J = E.map((ne) => B[ne._id]?.__idx), U = Math.max(...J), N = E.length, G = E.map((ne) => {
      let K = ee(ne);
      return delete K._id, delete K._rev, K;
    });
    let ie = [], be = 0;
    for (let ne = 0; ne < N; ne++) {
      try {
        const K = await s.actions.addRow(G[ne]);
        ie.push(K), S[K._id] = !0, await to(50);
      } catch (K) {
        be++, console.error("Duplicating row failed", K);
      }
      D?.((ne + 1) / N);
    }
    return ie.length && t.update((ne) => ne.toSpliced(U + 1, 0, ...ie)), be ? b(v).error(`Failed to duplicate ${be} of ${N} rows`) : ie.length && b(v).success(`Duplicated ${ie.length} rows`), ie;
  }, j = (E, D) => {
    const B = b(t), U = b(o)[E]?.__idx;
    D ? U != null ? t.update((N) => (N[U] = { ...D }, N)) : $e([D]) : U != null && q([B[U]]);
  }, Z = async (E) => {
    try {
      const D = await s.actions.getRow(E);
      j(E, D);
    } catch {
    }
  }, ae = async () => {
    await b($)?.getInitialData();
  }, oe = (E, D) => {
    const B = Object.keys(D || {});
    return !E || !B.length ? !1 : B.some((J) => E[J] !== D[J]);
  }, fe = (E, D) => {
    const B = b(o), J = b(C), U = B[E];
    for (let N of Object.keys(D || {})) {
      const G = J[N]?.schema?.type;
      (G === _t.STRING || G == _t.LONGFORM) && D[N] != null && typeof D[N] != "string" && (D[N] = JSON.stringify(D[N]));
    }
    return !U || !oe(U, D) ? !1 : (x.update((N) => ({
      ...N,
      [E]: {
        ...N[E],
        ...D
      }
    })), !0);
  }, ue = async ({
    rowId: E,
    changes: D = null,
    updateState: B = !0,
    handleErrors: J = !0
  }) => {
    const N = b(o)[E];
    if (N == null)
      return;
    let G;
    try {
      I.update((K) => ({
        ...K,
        [E]: (K[E] || 0) + 1
      }));
      const ie = b(x)[E], be = { ...ee(N), ...ie, ...D };
      G = await s.actions.updateRow(be), G?._id ? B && t.update((K) => (K[N.__idx] = G, K.slice())) : G?.id && await Z(G.id);
      const ne = b(x)[E];
      x.update((K) => (Object.keys(ie || {}).forEach((se) => {
        ie[se] === ne?.[se] && delete K[E][se];
      }), K));
    } catch (ie) {
      J && (y(E, ie), i.actions.focusFirstRowError(E));
    }
    return I.update((ie) => ({
      ...ie,
      [E]: (ie[E] || 1) - 1
    })), G;
  }, Ie = async ({
    rowId: E,
    column: D,
    value: B,
    apply: J = !0
  }) => {
    fe(E, { [D]: B }) && J && await ue({ rowId: E });
  }, _e = async (E, D) => {
    const B = Object.keys(E || {}), J = B.length;
    if (!J)
      return;
    const U = b(C);
    let N = [], G = 0;
    for (let ie = 0; ie < J; ie++) {
      const be = B[ie];
      let ne = E[be] || {};
      for (let K of Object.keys(ne)) {
        const se = U[K];
        p.actions.isReadonly(se) && delete ne[K];
      }
      if (!Object.keys(ne).length) {
        D?.((ie + 1) / J);
        continue;
      }
      try {
        const K = await ue({
          rowId: be,
          changes: E[be],
          updateState: !1,
          handleErrors: !1
        });
        K ? N.push(K) : G++, await to(50);
      } catch (K) {
        G++, console.error("Failed to update row", K);
      }
      D?.((ie + 1) / J);
    }
    if (N.length) {
      const ie = b(o);
      t.update((be) => {
        for (let ne of N) {
          const K = ie[ne._id].__idx;
          be[K] = ne;
        }
        return be.slice();
      });
    }
    if (G) {
      const ie = `row${J === 1 ? "" : "s"}`;
      b(v).error(`Failed to update ${G} of ${J} ${ie}`);
    } else if (N.length) {
      const ie = `row${N.length === 1 ? "" : "s"}`;
      b(v).success(`Updated ${N.length} ${ie}`);
    }
  }, pe = async (E) => {
    E?.length && (E.forEach((D) => delete D.__idx), await s.actions.deleteRows(E), q(E));
  }, $e = (E, D) => {
    D && (S = {});
    let B = [], J;
    const U = b(k);
    for (let N = 0; N < E.length; N++)
      J = E[N], !U && !J._id?.length && (J._id = an()), S[J._id] || (S[J._id] = !0, B.push(J));
    D ? t.set(B) : B.length && t.update((N) => [...N, ...B]);
  }, q = (E) => {
    const D = E.map((B) => B._id);
    t.update((B) => B.filter((J) => !D.includes(J._id)));
  }, ce = () => {
    b($)?.nextPage();
  }, ee = (E) => {
    let D = { ...E };
    return delete D.__idx, delete D.__metadata, delete D.__formatted, !b(k) && cn(D._id) && delete D._id, D;
  };
  return {
    rows: {
      ...t,
      actions: {
        addRow: T,
        duplicateRow: V,
        bulkDuplicate: te,
        updateValue: Ie,
        applyRowChanges: ue,
        deleteRows: pe,
        loadNextPage: ce,
        refreshRow: Z,
        replaceRow: j,
        refreshData: ae,
        cleanRow: ee,
        bulkUpdate: _e
      }
    }
  };
}, Rn = (d) => {
  const {
    rowChangeCache: t,
    inProgressChanges: o,
    previousFocusedRowId: r,
    previousFocusedCellId: c,
    rows: u,
    validation: a
  } = d;
  r.subscribe((s) => {
    s && !b(o)[s] && Object.keys(b(t)[s] || {}).length && t.update((n) => (delete n[s], n));
  }), c.subscribe(async (s) => {
    if (!s)
      return;
    let { rowId: n, field: l } = Pt(s);
    n = n, l = l;
    const i = l in (b(t)[n] || {}), h = a.actions.rowHasErrors(n), p = b(o)[n];
    n && !h && i && !p && await u.actions.applyRowChanges({ rowId: n });
  });
}, Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: yn,
  createStores: _n,
  deriveStores: Cn,
  initialise: Rn
}, Symbol.toStringTag, { value: "Module" })), xn = () => {
  const d = Oe({
    left: 0,
    top: 0
  }), t = we(d, (r) => Math.round(r.top)), o = we(d, (r) => Math.round(r.left));
  return {
    scroll: d,
    scrollTop: t,
    scrollLeft: o
  };
}, In = (d) => {
  const {
    rows: t,
    visibleColumns: o,
    displayColumn: r,
    rowHeight: c,
    width: u,
    height: a,
    buttonColumnWidth: s,
    config: n
  } = d, l = we(r, (m) => (m?.width || 0) + Jt), i = we(
    [o, s],
    ([m, v]) => {
      let $ = Jt + Math.max(v, ls);
      return m.forEach((k) => {
        $ += k.width;
      }), $;
    }
  ), h = we(
    [u, l],
    ([m, v]) => m + v
  ), p = we(
    [i, h],
    ([m, v]) => Math.round(Math.max(m - v, 0))
  ), x = we(
    [i, h],
    ([m, v]) => m > v
  ), I = we(
    [t, c, x, n],
    ([m, v, $, k]) => {
      let f = m.length * v + No;
      return $ && (f += Wt * 3), k.canAddRows && (f += v), f;
    }
  ), _ = we(
    [a, I],
    ([m, v]) => Math.round(Math.max(v - m, 0))
  ), g = we(
    [I, a],
    ([m, v]) => m > v
  );
  return {
    stickyWidth: l,
    contentHeight: I,
    contentWidth: i,
    screenWidth: h,
    maxScrollTop: _,
    maxScrollLeft: p,
    showHScrollbar: x,
    showVScrollbar: g
  };
}, kn = (d) => {
  const {
    focusedCellId: t,
    focusedRow: o,
    scroll: r,
    bounds: c,
    rowHeight: u,
    stickyWidth: a,
    scrollTop: s,
    maxScrollTop: n,
    scrollLeft: l,
    maxScrollLeft: i,
    buttonColumnWidth: h,
    columnLookupMap: p
  } = d, x = we(
    [s, n],
    ([_, g]) => _ > g,
    !1
  ), I = we(
    [l, i],
    ([_, g]) => _ > g,
    !1
  );
  x.subscribe((_) => {
    _ && r.update((g) => ({
      ...g,
      top: b(n)
    }));
  }), I.subscribe((_) => {
    _ && r.update((g) => ({
      ...g,
      left: b(i)
    }));
  }), t.subscribe(async (_) => {
    await Qt();
    const g = b(o), m = b(r), v = b(c), $ = b(u);
    if (g) {
      const S = g.__idx * $, M = m.top + v.height - $ - lo;
      let P = S - M;
      if (P > 0)
        r.update((y) => ({
          ...y,
          top: y.top + P
        }));
      else {
        const y = m.top - S + lo;
        y > 0 && r.update((T) => ({
          ...T,
          top: Math.max(0, T.top - y)
        }));
      }
    }
    const { field: k } = Pt(_), f = b(p)[k];
    if (!f || f.primaryDisplay)
      return;
    const C = b(a);
    let A = m.left - f.__left + lo + C;
    if (A > 0)
      r.update((S) => ({
        ...S,
        left: Math.max(0, S.left - A)
      }));
    else {
      const S = b(h), M = f.__left + f.width, P = v.width + m.left - lo - S;
      A = M - P - C, A > 0 && r.update((y) => ({
        ...y,
        left: y.left + A
      }));
    }
  });
}, Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createStores: xn,
  deriveStores: In,
  initialise: kn
}, Symbol.toStringTag, { value: "Module" })), An = (d) => {
  const { props: t } = d, o = Oe(null), r = Oe(null), c = Oe({}), u = Oe(null), a = Oe(b(t).fixedRowHeight || Ut), s = Oe(null), n = Oe(null), l = Oe(!1), i = Oe(!1), h = Oe(!1), p = Oe(0), x = Oe({
    active: !1,
    sourceCellId: null,
    targetCellId: null
  });
  return {
    focusedCellId: o,
    focusedCellAPI: r,
    previousFocusedRowId: s,
    previousFocusedCellId: n,
    hoveredRowId: u,
    rowHeight: a,
    gridFocused: l,
    keyboardBlocked: i,
    isDragging: h,
    buttonColumnWidth: p,
    selectedRows: c,
    cellSelection: x
  };
}, Ln = (d) => {
  const {
    focusedCellId: t,
    rows: o,
    rowLookupMap: r,
    rowHeight: c,
    width: u,
    selectedRows: a,
    cellSelection: s,
    columnLookupMap: n,
    visibleColumns: l
  } = d, i = we(t, ($) => Pt($).rowId ?? null), h = we(
    [i, r],
    ([$, k]) => {
      if ($ !== null)
        return $ === Lt ? { _id: Lt } : k[$];
    }
  ), p = we(c, ($) => $ >= as ? 3 : $ >= is ? 2 : 1), x = we(u, ($) => $ < 600), I = we(a, ($) => Object.keys($).length), _ = we(s, ($) => $.active), g = we(
    [s, r, n],
    ([$, k, f]) => {
      const { sourceCellId: C, targetCellId: A } = $;
      if (!C || !A || C === A)
        return [];
      const S = b(o), M = b(l), P = Pt(C), y = Pt(A);
      if (P.rowId === Lt)
        return [];
      const T = k[P.rowId]?.__idx, V = k[y.rowId]?.__idx;
      if (T == null || V == null)
        return [];
      const te = Math.min(T, V);
      let j = Math.max(T, V);
      j = Math.min(j, te + 49);
      const Z = f[P.field].__idx || 0, ae = f[y.field].__idx || 0, oe = Math.min(Z, ae), fe = Math.max(Z, ae);
      let ue = [], Ie, _e;
      for (let pe = te; pe <= j; pe++) {
        let $e = [];
        for (let q = oe; q <= fe; q++)
          Ie = S[pe]._id, _e = M[q].name, $e.push(pt(Ie, _e));
        ue.push($e);
      }
      return ue;
    }
  ), m = we(g, ($) => {
    let k = {};
    for (let f of $)
      for (let C of f)
        k[C] = !0;
    return k;
  }), v = we(m, ($) => Object.keys($).length);
  return {
    focusedRowId: i,
    focusedRow: h,
    contentLines: p,
    compact: x,
    selectedRowCount: I,
    isSelectingCells: _,
    selectedCells: g,
    selectedCellMap: m,
    selectedCellCount: v
  };
}, En = (d) => {
  const {
    focusedCellId: t,
    hoveredRowId: o,
    selectedRows: r,
    rowLookupMap: c,
    rows: u,
    selectedRowCount: a,
    cellSelection: s,
    selectedCells: n
  } = d;
  let l = null;
  const i = () => {
    t.set(null), o.set(null), m();
  }, h = (v) => {
    r.update(($) => {
      let k = {
        ...$,
        [v]: !$[v]
      };
      return k[v] ? l = b(c)[v].__idx : delete k[v], k;
    });
  }, p = (v) => {
    if (!b(a)) {
      h(v);
      return;
    }
    if (l == null)
      return;
    const $ = b(c)[v].__idx;
    if (l === $)
      return;
    const k = Math.min(l, $), f = Math.max(l, $), C = b(u);
    r.update((A) => {
      for (let S = k; S <= f; S++)
        A[C[S]._id] = !0;
      return A;
    });
  }, x = (v) => {
    s.set({
      active: !0,
      sourceCellId: v,
      targetCellId: v
    });
  }, I = (v) => {
    s.update(($) => ({
      ...$,
      targetCellId: v
    }));
  }, _ = () => {
    s.update((v) => ({
      ...v,
      active: !1
    }));
  }, g = (v, $) => {
    s.set({
      active: !1,
      sourceCellId: v,
      targetCellId: $
    });
  }, m = () => {
    s.set({
      active: !1,
      sourceCellId: null,
      targetCellId: null
    });
  };
  return {
    ui: {
      actions: {
        blur: i
      }
    },
    selectedRows: {
      ...r,
      actions: {
        toggleRow: h,
        bulkSelectRows: p
      }
    },
    selectedCells: {
      ...n,
      actions: {
        startSelecting: x,
        updateTarget: I,
        stopSelecting: _,
        selectRange: g,
        clear: m
      }
    }
  };
}, Pn = (d) => {
  const {
    focusedRowId: t,
    previousFocusedRowId: o,
    previousFocusedCellId: r,
    rowLookupMap: c,
    focusedCellId: u,
    selectedRows: a,
    hoveredRowId: s,
    definition: n,
    rowHeight: l,
    fixedRowHeight: i,
    selectedRowCount: h,
    menu: p,
    selectedCellCount: x,
    selectedCells: I,
    cellSelection: _
  } = d;
  c.subscribe(async (v) => {
    await Qt();
    const $ = b(t), k = b(a), f = b(s), C = (S) => v[S] != null;
    $ && !C($) && u.set(null), f && !C(f) && s.set(null);
    const A = Object.keys(k);
    if (A.length) {
      let S = { ...k }, M = !1;
      for (let P = 0; P < A.length; P++)
        C(A[P]) || (delete S[A[P]], M = !0);
      M && a.set(S);
    }
  });
  let g = null;
  t.subscribe((v) => {
    o.set(g), g = v;
  });
  let m = null;
  u.subscribe((v) => {
    r.set(m), m = v, v && b(s) && s.set(null), v && b(h) && a.set({}), v && b(x) && I.actions.clear(), p.actions.close();
  }), n.subscribe((v) => {
    b(i) || l.set(v?.rowHeight || Ut);
  }), i.subscribe((v) => {
    v ? l.set(v) : l.set(b(n)?.rowHeight || Ut);
  }), h.subscribe((v) => {
    v && (b(u) && u.set(null), b(x) && I.actions.clear());
  }), x.subscribe((v) => {
    v && b(h) && a.set({});
  }), _.subscribe(async ({ sourceCellId: v, targetCellId: $ }) => {
    v && v !== $ && b(u) !== v && u.set(v);
  });
}, Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: En,
  createStores: An,
  deriveStores: Ln,
  initialise: Pn
}, Symbol.toStringTag, { value: "Module" })), Tn = () => {
  const d = Oe([]), t = we(d, (o) => o.map((r) => ({
    ...r,
    color: ds(r),
    label: cs(r)
  })));
  return {
    users: {
      ...d,
      subscribe: t.subscribe
    }
  };
}, On = (d) => {
  const { users: t, focusedCellId: o } = d;
  return {
    userCellMap: we(
      [t, o],
      ([c, u]) => {
        let a = {};
        return c.forEach((s) => {
          const n = s.gridMetadata?.focusedCellId;
          n && n !== u && (a[n] = s);
        }), a;
      }
    )
  };
}, zn = (d) => {
  const { users: t } = d;
  return {
    users: {
      ...t,
      actions: {
        updateUser: (c) => {
          const u = b(t);
          u.some((a) => a.sessionId === c.sessionId) ? t.update((a) => {
            const s = a.findIndex((n) => n.sessionId === c.sessionId);
            return a[s] = c, a.slice();
          }) : t.set([...u, c]);
        },
        removeUser: (c) => {
          t.update((u) => u.filter((a) => a.sessionId !== c));
        }
      }
    }
  };
}, Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: zn,
  createStores: Tn,
  deriveStores: On
}, Symbol.toStringTag, { value: "Module" })), Nn = () => ({
  validation: Oe({})
}), Hn = (d) => {
  const { validation: t } = d;
  return {
    validationRowLookupMap: we(t, (r) => {
      const c = {};
      return Object.entries(r).forEach(([u, a]) => {
        if (a) {
          const { rowId: s } = Pt(u);
          s !== void 0 && (c[s] || (c[s] = []), c[s].push(u));
        }
      }), c;
    })
  };
}, jn = (d) => {
  const { validation: t, focusedCellId: o, validationRowLookupMap: r } = d;
  return {
    validation: {
      ...t,
      actions: {
        setError: (s, n) => {
          s && t.update((l) => ({
            ...l,
            [s]: n
          }));
        },
        rowHasErrors: (s) => b(r)[s]?.length > 0,
        focusFirstRowError: (s) => {
          const l = b(r)[s]?.[0];
          l && o.set(l);
        }
      }
    }
  };
}, Vn = (d) => {
  const { validation: t, previousFocusedRowId: o, validationRowLookupMap: r } = d;
  o.subscribe((c) => {
    if (c) {
      const u = b(r)[c];
      u?.length && t.update((a) => {
        for (let s of u)
          delete a[s];
        return a;
      });
    }
  });
}, Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: jn,
  createStores: Nn,
  deriveStores: Hn,
  initialise: Vn
}, Symbol.toStringTag, { value: "Module" })), Un = (d) => {
  const {
    rowHeight: t,
    scrollableColumns: o,
    rows: r,
    scrollTop: c,
    scrollLeft: u,
    width: a,
    height: s,
    rowChangeCache: n,
    metadata: l
  } = d, i = we(
    [c, t],
    ([_, g]) => Math.floor(_ / g)
  ), h = we(
    [s, t],
    ([_, g]) => Math.ceil(_ / g) + 1
  ), p = we(
    [r, i, h, n, l],
    ([
      _,
      g,
      m,
      v,
      $
    ]) => _.slice(g, g + m).map((k) => ({
      ...k,
      ...v[k._id],
      __metadata: $[k._id]
    }))
  ), x = we(u, (_) => {
    const g = Fo;
    return Math.round(_ / g) * g;
  }), I = we(
    [o, x, a],
    ([_, g, m]) => {
      if (!_.length)
        return {};
      let v = 0, $ = _[0].width;
      for (; $ < g && v < _.length - 1; )
        v++, $ += _[v].width;
      let k = v + 1, f = $;
      for (; f < m + g && k < _.length; )
        f += _[k].width, k++;
      let C = {};
      return _.slice(Math.max(0, v), k).forEach((A) => {
        C[A.name] = !0;
      }), C;
    }
  );
  return {
    scrolledRowCount: i,
    visualRowCapacity: h,
    renderedRows: p,
    columnRenderMap: I
  };
}, qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  deriveStores: Un
}, Symbol.toStringTag, { value: "Module" })), Wn = (d) => {
  let t;
  if (d?.externalClipboard?.clipboard) {
    const r = d.externalClipboard.clipboard.get();
    r.multiCellCopy ? t = {
      value: r.value,
      multiCellCopy: !0
    } : t = {
      value: r.value,
      multiCellCopy: !1
    };
  } else
    t = {
      value: void 0,
      multiCellCopy: !1
    };
  return {
    clipboard: Oe(t)
  };
}, Gn = (d) => {
  const {
    clipboard: t,
    focusedCellAPI: o,
    selectedCellCount: r,
    config: c,
    focusedRowId: u,
    props: a
  } = d, s = we(o, (l) => l != null), n = we(
    [t, o, r, c, u, a],
    ([
      l,
      i,
      h,
      p,
      x,
      I
    ]) => {
      let _ = l.value != null;
      if (!_ && I.externalClipboard?.clipboard && (_ = I.externalClipboard.clipboard.get().value != null), !_ || !p.canEditRows || !i || x === Lt)
        return !1;
      const g = h > 1;
      return !(!l.multiCellCopy && !g && i.isReadonly());
    }
  );
  return {
    copyAllowed: s,
    pasteAllowed: n
  };
}, Kn = (d) => {
  const {
    clipboard: t,
    focusedCellAPI: o,
    copyAllowed: r,
    pasteAllowed: c,
    selectedCells: u,
    selectedCellCount: a,
    rowLookupMap: s,
    rowChangeCache: n,
    rows: l,
    focusedCellId: i,
    columnLookupMap: h,
    visibleColumns: p,
    props: x
  } = d, I = () => {
    if (!b(r))
      return;
    const m = b(u), v = b(o), k = b(a) > 1;
    if (k) {
      const f = b(s), C = b(n), A = [];
      for (const M of m) {
        const P = [];
        for (const y of M) {
          const { rowId: T = "", field: V = "" } = Pt(y), te = {
            ...f[T],
            ...C[T]
          };
          P.push(te[V]);
        }
        A.push(P);
      }
      t.set({
        value: A,
        multiCellCopy: !0
      });
      const { externalClipboard: S } = b(x);
      S?.onCopy && S.onCopy({
        value: A,
        multiCellCopy: !0,
        tableId: S.tableId,
        viewId: S.viewId
      });
    } else {
      const f = v?.getValue();
      t.set({
        value: f,
        multiCellCopy: k
      });
      const { externalClipboard: C } = b(x);
      C?.onCopy && C.onCopy({
        value: f,
        multiCellCopy: !1,
        tableId: C.tableId,
        viewId: C.viewId
      });
      let A = "";
      f != null && f !== "" && (A = typeof f == "object" ? JSON.stringify(f) : f), Ho(A);
    }
  }, _ = async (m) => {
    if (!b(c))
      return;
    const { externalClipboard: v } = b(x);
    let $ = b(t);
    if (v?.clipboard) {
      const A = v.clipboard.get();
      A.value !== void 0 && (A.multiCellCopy ? $ = {
        value: A.value,
        multiCellCopy: !0
      } : $ = {
        value: A.value,
        multiCellCopy: !1
      });
    }
    const { value: k, multiCellCopy: f } = $, C = b(a) > 1;
    if (f)
      if (C) {
        let A = k;
        const S = b(u), M = S.length, P = S[0].length, y = k.length, T = k[0].length;
        if (M > y && P === T) {
          A = [];
          for (let V = 0; V < M; V++)
            A.push(k[V % y]);
        }
        await g(A, m);
      } else {
        const A = b(i), { rowId: S, field: M } = Pt(A), P = b(s), y = b(h), T = P[S].__idx, V = y[M].__idx || 0, te = b(l), j = b(p), Z = j.length, ae = te.length, oe = k.length, fe = k[0].length, ue = Math.min(oe, ae - T) - 1, Ie = Math.min(fe, Z - V) - 1, _e = te[T + ue]._id, pe = j[V + Ie].name, $e = pt(_e, pe);
        $e === A ? b(o)?.setValue(k[0][0]) : (u.actions.selectRange(A, $e), await g(k, m));
      }
    else if (C) {
      const A = b(u).map((S) => S.map(() => k));
      await g(A, m);
    } else
      b(o)?.setValue(k ?? null);
  }, g = async (m, v) => {
    const $ = b(u), k = Math.min(m.length, $.length), f = Math.min(m[0].length, $[0].length);
    let C = {};
    for (let A = 0; A < k; A++)
      for (let S = 0; S < f; S++) {
        const M = $[A][S];
        let { rowId: P, field: y } = Pt(M);
        P = P, y = y, C[P] || (C[P] = {}), C[P][y] = m[A][S];
      }
    await l.actions.bulkUpdate(C, v);
  };
  return {
    clipboard: {
      ...t,
      actions: {
        copy: I,
        paste: _
      }
    }
  };
}, Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: Kn,
  createStores: Wn,
  deriveStores: Gn
}, Symbol.toStringTag, { value: "Module" })), Yn = (d) => {
  const { props: t } = d, o = (h) => us(t, (p) => p[h]), r = o("datasource"), c = o("initialSortColumn"), u = o("initialSortOrder"), a = o("initialFilter"), s = o("fixedRowHeight"), n = o("schemaOverrides"), l = o("notifySuccess"), i = o("notifyError");
  return {
    datasource: r,
    initialSortColumn: c,
    initialSortOrder: u,
    initialFilter: a,
    fixedRowHeight: s,
    schemaOverrides: n,
    notifySuccess: l,
    notifyError: i
  };
}, Jn = (d) => {
  const { props: t, definition: o, hasNonAutoColumn: r } = d;
  return {
    config: we(
      [t, o, r],
      ([u, a, s]) => {
        let n = { ...u, canSelectRows: !1 };
        const l = u.datasource?.type;
        return l === "viewV2" && (n.canEditColumns = !1, a?.type === jo.CALCULATION && (n.canAddRows = !1, n.canEditRows = !1, n.canDeleteRows = !1, n.canExpandRows = !1)), s || (n.canAddRows = !1), l && !["table", "viewV2"].includes(l) && (n.canAddRows = !1, n.canEditRows = !1, n.canDeleteRows = !1, n.canExpandRows = !1, n.canSaveSchema = !1, n.canEditColumns = !1), n.canSelectRows = u.canSelectRows !== !1, n;
      }
    )
  };
}, Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createStores: Yn,
  deriveStores: Jn
}, Symbol.toStringTag, { value: "Module" })), Zn = (d) => {
  const { props: t } = d, o = b(t);
  return {
    sort: eo(
      o.initialSortColumn ? [
        {
          column: o.initialSortColumn,
          order: o.initialSortOrder || kt.ASCENDING
        }
      ] : []
    )
  };
}, er = (d) => {
  const { sort: t, initialSortColumn: o, initialSortOrder: r, schema: c } = d;
  o.subscribe((a) => {
    t.set(
      a ? [
        {
          column: a,
          order: b(r) || kt.ASCENDING
        }
      ] : []
    );
  }), r.subscribe((a) => {
    t.update((s) => s.length ? [
      {
        ...s[0],
        order: a || kt.ASCENDING
      },
      ...s.slice(1)
    ] : s);
  }), we([t, c], ([a, s]) => s ? a.filter((n) => s[n.column] != null) : a).subscribe((a) => {
    const s = b(t);
    JSON.stringify(a) !== JSON.stringify(s) && t.set(a);
  });
}, tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createStores: Zn,
  initialise: er
}, Symbol.toStringTag, { value: "Module" })), or = (d) => {
  const { props: t } = d, o = eo(b(t).initialFilter ?? void 0), r = eo([]);
  return {
    filter: o,
    inlineFilters: r
  };
}, sr = (d) => {
  const { filter: t, inlineFilters: o } = d;
  return {
    allFilters: we(
      [t, o],
      ([c, u]) => {
        if (!u?.length)
          return c;
        const a = {
          logicalOperator: $o.ALL,
          groups: [
            {
              logicalOperator: $o.ALL,
              filters: u
            }
          ]
        };
        return c?.groups?.length && (a.groups = [...a.groups, ...c.groups]), a;
      }
    )
  };
}, nr = (d) => {
  const { filter: t, inlineFilters: o } = d;
  return {
    filter: {
      ...t,
      actions: {
        addInlineFilter: (c, u) => {
          const a = `inline-${c.name}`, s = c.schema.type, n = {
            field: c.name,
            id: a,
            operator: wo.STRING,
            valueType: "value",
            type: s,
            value: u
          };
          s === _t.NUMBER ? (n.value = parseFloat(u), n.operator = wo.EQUAL) : s === _t.BIGINT ? n.operator = wo.EQUAL : s === _t.ARRAY && (n.operator = fs.CONTAINS), o.update((l) => (l = l?.filter((i) => i.id !== a), u && l.push(n), l));
        }
      }
    }
  };
}, rr = (d) => {
  const { filter: t, initialFilter: o } = d;
  o.subscribe(
    (r) => t.set(r ?? void 0)
  );
}, lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: nr,
  createStores: or,
  deriveStores: sr,
  initialise: rr
}, Symbol.toStringTag, { value: "Module" })), ar = (d) => {
  const { notifySuccess: t, notifyError: o } = d;
  return {
    notifications: we(
      [t, o],
      ([c, u]) => ({
        success: c || vo.success,
        error: u || vo.error
      })
    )
  };
}, ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createStores: ar
}, Symbol.toStringTag, { value: "Module" })), cr = () => {
  const d = eo(null), t = eo({}), o = eo({});
  return {
    definition: d,
    schemaMutations: t,
    subSchemaMutations: o
  };
}, dr = (d) => {
  const {
    API: t,
    definition: o,
    schemaOverrides: r,
    datasource: c,
    schemaMutations: u,
    subSchemaMutations: a
  } = d, s = we(o, (i) => {
    const h = ms({
      API: t,
      datasource: b(c),
      definition: i ?? void 0
    });
    return h ? (Object.keys(h).forEach((p) => {
      typeof h[p] != "object" && (h[p] = { name: p, type: h[p] });
    }), h) : null;
  }), n = we(
    [s, r, u, a],
    ([i, h, p, x]) => {
      if (!i)
        return null;
      const I = hs(i), _ = {};
      return Object.keys(I || {}).forEach((g) => {
        if (_[g] = {
          ...I?.[g],
          ...h?.[g],
          ...p[g]
        }, x[g]) {
          _[g].columns ??= {};
          for (const m of Object.keys(x[g])) {
            const v = x[g][m];
            _[g].columns[m] = {
              ..._[g].columns[m],
              ...v
            };
          }
        }
      }), _;
    }
  ), l = we(
    [c, o],
    ([i, h]) => {
      let p = i?.type;
      return p === "provider" && (p = i.value?.datasource?.type), p === "viewV2" && h && "type" in h && h.type === jo.CALCULATION ? !1 : !!p && ["table", "viewV2", "link"].includes(p);
    }
  );
  return {
    schema: s,
    enrichedSchema: n,
    hasBudibaseIdentifiers: l
  };
}, ur = (d) => {
  const {
    API: t,
    datasource: o,
    definition: r,
    config: c,
    dispatch: u,
    table: a,
    viewV2: s,
    nonPlus: n,
    schemaMutations: l,
    subSchemaMutations: i,
    schema: h,
    notifications: p
  } = d, x = () => {
    const T = b(o)?.type;
    if (!T)
      return null;
    switch (T) {
      case "table":
        return a;
      case "viewV2":
        return s;
      default:
        return n;
    }
  }, I = async () => {
    const y = await gs({
      API: t,
      datasource: b(o)
    });
    r.set(y ?? null);
  }, _ = async (y) => {
    const T = b(r);
    if (r.set(y), b(c).canSaveSchema)
      try {
        await x()?.actions.saveDefinition(y), u("updatedatasource", y);
      } catch (V) {
        const te = V?.message || V || "Unknown error";
        b(p).error(`Error saving schema: ${te}`), r.set(T);
      }
  }, g = async (y) => {
    let T = vs(b(r));
    return T.primaryDisplay = y, T.schema && (T.schema[y].constraints || (T.schema[y].constraints = {}), T.schema[y].constraints.presence = { allowEmpty: !1 }, "default" in T.schema[y] && delete T.schema[y].default), await _(T);
  }, m = (y, T) => {
    !y || !T || l.update((V) => ({
      ...V,
      [y]: {
        ...V[y],
        ...T
      }
    }));
  }, v = (y, T, V) => {
    !y || !T || !V || i.update((te) => ({
      ...te,
      [T]: {
        ...te[T],
        [y]: {
          ...(te[T] || {})[y],
          ...V
        }
      }
    }));
  }, $ = async () => {
    if (!b(c).canSaveSchema)
      return;
    const y = b(r), T = b(l), V = b(i), te = b(h) || {};
    let j = {};
    Object.keys(te).forEach((Z) => {
      if (j[Z] = {
        ...te[Z],
        ...T[Z]
      }, V[Z]) {
        j[Z].columns ??= {};
        for (const ae of Object.keys(V[Z])) {
          const oe = V[Z][ae];
          j[Z].columns[ae] = {
            ...j[Z].columns[ae],
            ...oe
          };
        }
      }
    }), await _({
      ...y,
      schema: j
    }), k();
  }, k = () => {
    l.set({}), i.set({});
  };
  return {
    datasource: {
      ...o,
      actions: {
        refreshDefinition: I,
        saveDefinition: _,
        addRow: async (y) => await x()?.actions.addRow(y),
        updateRow: async (y) => await x()?.actions.updateRow(y),
        deleteRows: async (y) => await x()?.actions.deleteRows(y),
        getRow: async (y) => await x()?.actions.getRow(y),
        isDatasourceValid: (y) => x()?.actions.isDatasourceValid(y),
        canUseColumn: (y) => x()?.actions.canUseColumn(y),
        changePrimaryDisplay: g,
        addSchemaMutation: m,
        addSubSchemaMutation: v,
        saveSchemaMutations: $,
        resetSchemaMutations: k
      }
    }
  };
}, fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: ur,
  createStores: cr,
  deriveStores: dr
}, Symbol.toStringTag, { value: "Module" })), vr = !0, gr = (d) => {
  const { API: t, datasource: o, columns: r } = d, c = async (i) => {
    await t.saveTable(i);
  }, u = async (i) => {
    i = {
      ...i,
      tableId: b(o)?.tableId
    };
    const h = await t.saveRow(i, vr);
    return { ...h, _id: h._id };
  };
  return {
    table: {
      actions: {
        saveDefinition: c,
        addRow: u,
        updateRow: u,
        deleteRows: async (i) => {
          await t.deleteRows(b(o).tableId, i);
        },
        getRow: async (i) => {
          const p = (await t.searchTable(b(o).tableId, {
            limit: 1,
            query: {
              equal: {
                _id: i
              }
            },
            paginate: !1
          }))?.rows?.[0];
          if (p)
            return { ...p, _id: p._id };
        },
        isDatasourceValid: (i) => i?.type === "table" && !!i?.tableId,
        canUseColumn: (i) => b(r).some((h) => h.name === i)
      }
    }
  };
}, mr = (d) => {
  const {
    datasource: t,
    fetch: o,
    filter: r,
    inlineFilters: c,
    allFilters: u,
    sort: a,
    table: s,
    initialFilter: n,
    initialSortColumn: l,
    initialSortOrder: i
  } = d;
  let h = [];
  t.subscribe((p) => {
    if (h?.forEach((I) => I()), h = [], !s.actions.isDatasourceValid(p))
      return;
    r.set(b(n) ?? void 0), c.set([]);
    const x = b(l);
    a.set(
      x ? [
        {
          column: x,
          order: b(i) || kt.ASCENDING
        }
      ] : []
    ), h.push(
      u.subscribe((I) => {
        const _ = b(o);
        _?.options?.datasource?.tableId === p.tableId && _.update({
          filter: I
        });
      })
    ), h.push(
      a.subscribe((I) => {
        const _ = b(o);
        if (_?.options?.datasource?.tableId !== p.tableId)
          return;
        const g = I.map((m) => ({
          field: m.column,
          order: m.order
        }));
        _.update({
          sorts: g
        });
      })
    );
  });
}, hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: gr,
  initialise: mr
}, Symbol.toStringTag, { value: "Module" })), wr = !0, Po = (d) => d ? (Array.isArray(d) ? d : [d]).filter((o) => o?.field).map((o) => ({
  column: o.field,
  order: o.order || kt.ASCENDING
})) : [], pr = (d) => {
  const t = d.filter((o) => o.column).map((o) => ({
    field: o.column,
    order: o.order || kt.ASCENDING
  }));
  return t.length ? t : void 0;
}, $r = (d, t) => d.length !== t.length ? !1 : d.every(
  (o, r) => o.column === t[r]?.column && o.order === t[r]?.order
), br = (d) => {
  const { API: t, datasource: o, columns: r } = d, c = async (i) => {
    await t.viewV2.update(i);
  }, u = async (i) => {
    const h = b(o);
    i = {
      ...i,
      tableId: h?.tableId,
      _viewId: h?.id
    };
    const p = await t.saveRow(i, wr);
    return {
      ...p,
      _id: p._id,
      _viewId: i._viewId
    };
  };
  return {
    viewV2: {
      actions: {
        saveDefinition: c,
        addRow: u,
        updateRow: u,
        deleteRows: async (i) => {
          await t.deleteRows(b(o).id, i);
        },
        getRow: async (i) => {
          const p = (await t.viewV2.fetch(b(o).id, {
            limit: 1,
            query: {
              equal: {
                _id: i
              }
            },
            paginate: !1
          }))?.rows?.[0];
          if (p)
            return { ...p, _id: p._id };
        },
        isDatasourceValid: (i) => i?.type === "viewV2" && !!i?.id && !!i?.tableId,
        canUseColumn: (i) => b(r).some((h) => h.name === i && h.visible)
      }
    }
  };
}, _r = (d) => {
  const {
    definition: t,
    datasource: o,
    sort: r,
    rows: c,
    filter: u,
    inlineFilters: a,
    allFilters: s,
    subscribe: n,
    viewV2: l,
    initialFilter: i,
    initialSortColumn: h,
    initialSortOrder: p,
    config: x,
    fetch: I
  } = d;
  let _ = [];
  o.subscribe((g) => {
    if (_?.forEach((v) => v()), _ = [], !l.actions.isDatasourceValid(g))
      return;
    u.set(b(i) ?? void 0), a.set([]);
    const m = b(h);
    r.set(
      m ? [
        {
          column: m,
          order: b(p) || kt.ASCENDING
        }
      ] : []
    ), _.push(
      t.subscribe((v) => {
        b(x).canSaveSchema && (!v || !("id" in v) || v?.id === g.id && (b(h) || r.set(Po(v.sort)), b(i) || u.set(v.queryUI)));
      })
    ), _.push(
      r.subscribe(async (v) => {
        const $ = b(t);
        if (!$ || !("id" in $) || $?.id !== g.id)
          return;
        const k = Po($.sort);
        if ($r(v, k))
          return;
        b(x).canSaveSchema && await o.actions.saveDefinition({
          ...$,
          sort: pr(v)
        });
        const f = b(I);
        if (f?.options?.datasource?.id !== g.id)
          return;
        const C = v.map((A) => ({
          field: A.column,
          order: A.order
        }));
        f.update({
          sorts: C
        });
      })
    ), _?.push(
      u.subscribe(async (v) => {
        if (!b(x).canSaveSchema)
          return;
        const $ = b(t);
        !$ || !("id" in $) || $?.id === g.id && JSON.stringify(v) !== JSON.stringify($.queryUI) && (await o.actions.saveDefinition({
          ...$,
          queryUI: v
        }), await c.actions.refreshData());
      })
    ), _.push(
      a.subscribe((v) => {
        if (!b(x).canSaveSchema)
          return;
        const $ = b(I);
        $?.options?.datasource?.id === g.id && $.update({
          filter: v
        });
      })
    ), _.push(
      s.subscribe((v) => {
        if (b(x).canSaveSchema)
          return;
        const $ = b(I);
        $?.options?.datasource?.id === g.id && $.update({
          filter: v
        });
      })
    ), _.push(
      n("show-column", async () => {
        await c.actions.refreshData();
      })
    );
  });
}, Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: br,
  initialise: _r
}, Symbol.toStringTag, { value: "Module" })), yr = (d) => {
  const { columns: t, table: o, viewV2: r } = d, c = async () => {
    throw "This datasource does not support updating the definition";
  }, u = async () => {
    throw "This datasource does not support saving rows";
  };
  return {
    nonPlus: {
      actions: {
        saveDefinition: c,
        addRow: u,
        updateRow: u,
        deleteRows: async () => {
          throw "This datasource does not support deleting rows";
        },
        getRow: () => {
          throw "This datasource does not support fetching individual rows";
        },
        isDatasourceValid: (i) => !o.actions.isDatasourceValid(i) && !r.actions.isDatasourceValid(i) && i?.type != null,
        canUseColumn: (i) => b(t).some((h) => h.name === i)
      }
    }
  };
}, Do = (d, t) => JSON.stringify(d) === JSON.stringify(t), Rr = (d) => {
  const {
    datasource: t,
    sort: o,
    filter: r,
    inlineFilters: c,
    allFilters: u,
    nonPlus: a,
    initialFilter: s,
    initialSortColumn: n,
    initialSortOrder: l,
    fetch: i
  } = d;
  let h = [];
  t.subscribe((p) => {
    if (h?.forEach((I) => I()), h = [], !a.actions.isDatasourceValid(p))
      return;
    r.set(b(s) ?? void 0), c.set([]);
    const x = b(n);
    o.set(
      x ? [
        {
          column: x,
          order: b(l) || kt.ASCENDING
        }
      ] : []
    ), h.push(
      u.subscribe((I) => {
        const _ = b(i);
        Do(_?.options?.datasource, p) && _?.update({
          filter: I
        });
      })
    ), h.push(
      o.subscribe((I) => {
        const _ = b(i);
        if (!Do(_?.options?.datasource, p))
          return;
        const g = I.map((m) => ({
          field: m.column,
          order: m.order
        }));
        _?.update({
          sorts: g
        });
      })
    );
  });
}, Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: yr,
  initialise: Rr
}, Symbol.toStringTag, { value: "Module" })), xr = (d) => {
  const { API: t } = d;
  let o = {};
  const r = () => {
    o = {};
  }, c = async (s) => (o[s] || (o[s] = t.fetchTableDefinition(s)), await o[s]);
  return {
    cache: {
      actions: {
        getPrimaryDisplayForTableId: async (s) => {
          const n = await c(s), l = Object.keys(n?.schema || {})[0];
          return n?.primaryDisplay || l;
        },
        getTable: async (s) => await c(s),
        resetCache: r
      }
    }
  };
}, Ir = (d) => {
  const { datasource: t, cache: o } = d;
  t.subscribe(o.actions.resetCache);
}, kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createActions: xr,
  initialise: Ir
}, Symbol.toStringTag, { value: "Module" })), io = [
  tr,
  lr,
  tn,
  hr,
  Cr,
  Sr,
  fr,
  ln,
  Qn,
  Mn,
  Bn,
  Sn,
  ws,
  Dn,
  bn,
  qn,
  wn,
  Fn,
  fn,
  gn,
  Xn,
  ir,
  kr
], Mr = (d) => {
  for (let t of io)
    "createStores" in t && (d = { ...d, ...t.createStores?.(d) });
  for (let t of io)
    "deriveStores" in t && (d = { ...d, ...t.deriveStores?.(d) });
  for (let t of io)
    "createActions" in t && (d = { ...d, ...t.createActions?.(d) });
  for (let t of io)
    "initialise" in t && t.initialise?.(d);
  return d;
};
var Ar = Q(" <!>", 1), Lr = Q(" <!>", 1), Er = Q("<!> <!>", 1);
function Pr(d, t) {
  Ue(t, !1);
  const o = () => w(p, "$selectedRows", l), r = () => w(k, "$rowLookupMap", l), c = () => w(v, "$selectedRowCount", l), u = () => w(f, "$config", l), a = () => w(m, "$selectedCellCount", l), s = () => w(_, "$notifications", l), n = () => w($, "$selectedCells", l), [l, i] = rt(), h = z(), {
    selectedRows: p,
    rows: x,
    subscribe: I,
    notifications: _,
    menu: g,
    selectedCellCount: m,
    selectedRowCount: v,
    selectedCells: $,
    rowLookupMap: k,
    config: f
  } = Ye("grid"), C = 260;
  let A = z(), S = z(), M = z(!1), P = z(0), y = z(0);
  const T = () => {
    R(P, 0), g.actions.close(), c() && u().canDeleteRows ? c() === 1 ? V() : (R(y, c()), e(A)?.show()) : a() && u().canEditRows && (R(y, a()), e(S)?.show());
  }, V = async () => {
    R(M, !0);
    const oe = e(h).length;
    await x.actions.deleteRows(e(h)), R(P, 100), await to(C), s().success(`Deleted ${oe} row${oe === 1 ? "" : "s"}`), R(M, !1);
  }, te = async () => {
    R(M, !0);
    let oe = {};
    for (let fe of n())
      for (let ue of fe) {
        const { rowId: Ie, field: _e } = Pt(ue);
        oe[Ie] || (oe[Ie] = {}), oe[Ie][_e] = null;
      }
    await x.actions.bulkUpdate(oe, (fe) => {
      R(P, fe * 100);
    }), await to(C), R(M, !1);
  };
  zt(() => I("request-bulk-delete", T)), W(() => (o(), r()), () => {
    R(h, Object.keys(o()).map((oe) => r()[oe]).filter((oe) => oe != null));
  }), gt(), qe();
  var j = Er(), Z = xe(j);
  Ot(
    no(Z, {
      children: (oe, fe) => {
        ro(oe, {
          title: "Delete rows",
          confirmText: "Continue",
          cancelText: "Cancel",
          onConfirm: V,
          size: "M",
          children: (ue, Ie) => {
            Fe();
            var _e = Ar(), pe = xe(_e), $e = Y(pe);
            {
              var q = (ce) => {
                go(ce, {
                  size: "L",
                  get value() {
                    return e(P);
                  },
                  duration: C,
                  width: "100%"
                });
              };
              ge($e, (ce) => {
                e(M) && ce(q);
              });
            }
            Me(() => vt(pe, `Are you sure you want to delete ${e(y) ?? ""} rows? `)), L(ue, _e);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 },
      $$legacy: !0
    }),
    (oe) => R(A, oe),
    () => e(A)
  );
  var ae = Y(Z, 2);
  Ot(
    no(ae, {
      children: (oe, fe) => {
        ro(oe, {
          title: "Delete cells",
          confirmText: "Continue",
          cancelText: "Cancel",
          onConfirm: te,
          size: "M",
          children: (ue, Ie) => {
            Fe();
            var _e = Lr(), pe = xe(_e), $e = Y(pe);
            {
              var q = (ce) => {
                go(ce, {
                  size: "L",
                  get value() {
                    return e(P);
                  },
                  duration: C,
                  width: "100%"
                });
              };
              ge($e, (ce) => {
                e(M) && ce(q);
              });
            }
            Me(() => vt(pe, `Are you sure you want to delete ${e(y) ?? ""} cells? `)), L(ue, _e);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 },
      $$legacy: !0
    }),
    (oe) => R(S, oe),
    () => e(S)
  ), L(d, j), We(), i();
}
var Dr = Q(" <!>", 1);
function Tr(d, t) {
  Ue(t, !1);
  const o = () => w(n, "$selectedRows", a), r = () => w(I, "$rowLookupMap", a), c = () => w(p, "$visibleColumns", a), u = () => w(h, "$selectedRowCount", a), [a, s] = rt(), {
    selectedRows: n,
    rows: l,
    subscribe: i,
    selectedRowCount: h,
    visibleColumns: p,
    selectedCells: x,
    rowLookupMap: I
  } = Ye("grid"), _ = 260;
  let g = z(), m = z(0), v = z(!1), $ = z(0);
  const k = async () => {
    R(m, 0), R(v, !0);
    const C = Object.keys(o()).map((S) => r()[S]), A = await l.actions.bulkDuplicate(C, (S) => {
      R(m, S * 100);
    });
    if (await to(_), A.length) {
      const S = A[0], M = A[A.length - 1], P = c()[0], y = c()[c().length - 1], T = pt(S._id, P.name), V = pt(M._id, y.name);
      x.actions.selectRange(T, V);
    }
    R(v, !1);
  }, f = () => {
    R($, u()), e(g)?.show();
  };
  zt(() => i("request-bulk-duplicate", f)), qe(), Ot(
    no(d, {
      children: (C, A) => {
        ro(C, {
          title: "Duplicate rows",
          confirmText: "Continue",
          cancelText: "Cancel",
          onConfirm: k,
          size: "M",
          children: (S, M) => {
            Fe();
            var P = Dr(), y = xe(P), T = Y(y);
            {
              var V = (te) => {
                go(te, {
                  size: "L",
                  get value() {
                    return e(m);
                  },
                  duration: _,
                  width: "100%"
                });
              };
              ge(T, (te) => {
                e(v) && te(V);
              });
            }
            Me(() => vt(y, `Are you sure you want to duplicate ${e($) ?? ""} rows? `)), L(S, P);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 },
      $$legacy: !0
    }),
    (C) => R(g, C),
    () => e(g)
  ), We(), s();
}
var Or = Q("Are you sure you want to paste? This will update multiple values. <!>", 1);
function zr(d, t) {
  Ue(t, !1);
  const o = () => w(i, "$copyAllowed", a), r = () => w(h, "$pasteAllowed", a), c = () => w(p, "$selectedCellCount", a), u = () => w(n, "$clipboard", a), [a, s] = rt(), {
    clipboard: n,
    subscribe: l,
    copyAllowed: i,
    pasteAllowed: h,
    selectedCellCount: p,
    focusedCellAPI: x
  } = Ye("grid"), I = 260;
  let _ = z(), g = z(0), m = z(!1);
  const v = () => {
    o() && n.actions.copy();
  }, $ = async () => {
    if (b(x)?.isActive() || (R(g, 0), !r()))
      return;
    const f = c() > 1;
    u().multiCellCopy || f ? e(_)?.show() : n.actions.paste();
  }, k = async () => {
    R(m, !0), await n.actions.paste((f) => {
      R(g, f * 100);
    }), await to(I), R(m, !1);
  };
  zt(() => l("copy", v)), zt(() => l("paste", $)), qe(), Ot(
    no(d, {
      children: (f, C) => {
        ro(f, {
          title: "Confirm paste",
          confirmText: "Continue",
          cancelText: "Cancel",
          onConfirm: k,
          size: "M",
          children: (A, S) => {
            Fe();
            var M = Or(), P = Y(xe(M));
            {
              var y = (T) => {
                go(T, {
                  size: "L",
                  get value() {
                    return e(g);
                  },
                  duration: I,
                  width: "100%"
                });
              };
              ge(P, (T) => {
                e(m) && T(y);
              });
            }
            L(A, M);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 },
      $$legacy: !0
    }),
    (f) => R(_, f),
    () => e(_)
  ), We(), s();
}
var Fr = Q('<div class="outer svelte-1fiqqlr"><div class="inner svelte-1fiqqlr"><!></div></div>');
function oo(d, t) {
  Ue(t, !1);
  const o = () => w(P, "$scrollLeft", p), r = () => w(M, "$scrollTop", p), c = () => w(_, "$rowHeight", p), u = () => w(S, "$focusedCellAPI", p), a = () => w(A, "$menu", p), s = () => w(g, "$scroll", p), n = () => w($, "$maxScrollTop", p), l = () => w(k, "$maxScrollLeft", p), i = () => w(f, "$bounds", p), h = () => w(v, "$renderedRows", p), [p, x] = rt(), I = z(), {
    rowHeight: _,
    scroll: g,
    ui: m,
    renderedRows: v,
    maxScrollTop: $,
    maxScrollLeft: k,
    bounds: f,
    hoveredRowId: C,
    menu: A,
    focusedCellAPI: S,
    scrollTop: M,
    scrollLeft: P
  } = Ye("grid");
  let y = F(t, "scrollVertically", 8, !1), T = F(t, "scrollHorizontally", 8, !1), V = F(t, "attachHandlers", 8, !1), te = F(t, "ref", 12), j, Z;
  const ae = (q, ce, ee) => {
    const E = T() ? -1 * q : 0, D = y() ? -1 * (ce % ee) : 0;
    return `transform: translate(${E}px, ${D}px);`;
  }, oe = (q) => {
    q.preventDefault(), Ie(q.deltaX, q.deltaY, q.clientY), u()?.blur(), a().visible && A.actions.close();
  }, fe = (q) => {
    q.touches?.[0] && (j = q.touches[0].clientX, Z = q.touches[0].clientY);
  }, ue = (q) => {
    if (!q.touches?.[0]) return;
    q.preventDefault();
    const ce = j - q.touches[0].clientX, ee = Z - q.touches[0].clientY;
    Ie(ce, ee), j = q.touches[0].clientX, Z = q.touches[0].clientY, a().visible && A.actions.close();
  }, Ie = bo((q, ce, ee) => {
    const { top: E, left: D } = s();
    let B = E + ce;
    B = Math.max(0, Math.min(B, n()));
    let J = D + q;
    if (J = Math.max(0, Math.min(J, l())), g.set({
      left: T() ? J : D,
      top: y() ? B : E
    }), ee != null) {
      const U = ee - i().top + B % c(), N = h()[Math.floor(U / c())];
      C.set(N?._id);
    }
  });
  W(() => (o(), r(), c()), () => {
    R(I, ae(o(), r(), c()));
  }), gt(), qe();
  var _e = Fr(), pe = de(_e), $e = de(pe);
  Ct($e, t, "default", {}, null), le(pe), Ot(pe, (q) => te(q), () => te()), le(_e), Me(() => Et(pe, e(I))), Se("wheel", _e, function(...q) {
    (V() ? oe : null)?.apply(this, q);
  }), Se("touchstart", _e, function(...q) {
    (V() ? fe : null)?.apply(this, q);
  }), Se("touchmove", _e, function(...q) {
    (V() ? ue : null)?.apply(this, q);
  }), Se("click", _e, ps(function(...q) {
    m.actions.blur?.apply(this, q);
  })), L(d, _e), We(), x();
}
var Nr = Q('<div class="label svelte-k838y2"> </div>'), Hr = Q('<div class="label svelte-k838y2"> </div>'), jr = Q("<div><!> <!> <!></div>");
function Gt(d, t) {
  Ue(t, !1);
  const o = z();
  let r = F(t, "focused", 8, !1), c = F(t, "selected", 8, !1), u = F(t, "highlighted", 8, !1), a = F(t, "width", 8, ""), s = F(t, "selectedUser", 8, null), n = F(t, "error", 8, null), l = F(t, "rowIdx", 8), i = F(t, "topRow", 8, !1), h = F(t, "defaultHeight", 8, !1), p = F(t, "center", 8, !1), x = F(t, "readonly", 8, !1), I = F(t, "hidden", 8, !1), _ = F(t, "metadata", 8, null);
  const g = (S, M, P) => {
    let y;
    return S === "auto" || S === "100%" ? y = `width: ${S};` : y = `flex: 0 0 ${S}px;`, M && (y += `--user-color :${M.color};`), P?.backgroundColor && (y += `--cell-background: ${P.backgroundColor};`), P?.textColor && (y += `--cell-font-color: ${P.textColor};`), y;
  };
  W(
    () => (O(a()), O(s()), O(_())),
    () => {
      R(o, g(a(), s(), _()));
    }
  ), gt(), qe();
  var m = jr();
  let v;
  var $ = de(m);
  {
    var k = (S) => {
      var M = Nr(), P = de(M, !0);
      le(M), Me(() => vt(P, n())), L(S, M);
    };
    ge($, (S) => {
      n() && S(k);
    });
  }
  var f = Y($, 2);
  Ct(f, t, "default", {}, null);
  var C = Y(f, 2);
  {
    var A = (S) => {
      var M = Hr(), P = de(M, !0);
      le(M), Me(() => vt(P, (O(s()), H(() => s().label)))), L(S, M);
    };
    ge(C, (S) => {
      s() && !r() && S(A);
    });
  }
  le(m), Me(
    (S) => {
      v = nt(m, 1, "cell svelte-k838y2", null, v, S), Et(m, e(o));
    },
    [
      () => ({
        selected: c(),
        highlighted: u(),
        focused: r(),
        error: n(),
        center: p(),
        readonly: x(),
        hidden: I(),
        "default-height": h(),
        "selected-other": s() != null,
        alt: l() % 2 === 1,
        top: i()
      })
    ]
  ), Se("focus", m, function(S) {
    jt.call(this, t, S);
  }), Se("mousedown", m, function(S) {
    jt.call(this, t, S);
  }), Se("mouseup", m, function(S) {
    jt.call(this, t, S);
  }), Se("click", m, function(S) {
    jt.call(this, t, S);
  }), Se("contextmenu", m, function(S) {
    jt.call(this, t, S);
  }), Se(
    "touchstart",
    m,
    function(S) {
      jt.call(this, t, S);
    },
    void 0,
    !0
  ), Se("touchend", m, function(S) {
    jt.call(this, t, S);
  }), Se("touchcancel", m, function(S) {
    jt.call(this, t, S);
  }), Se("mouseenter", m, function(S) {
    jt.call(this, t, S);
  }), L(d, m), We();
}
var Vr = Q("<!> <!>", 1);
function mo(d, t) {
  Ue(t, !1);
  const o = () => w(k, "$config", a), r = () => w(m, "$focusedCellId", a), c = () => w(A, "$selectedCellCount", a), u = () => w(e(h), "$error", a), [a, s] = rt(), n = z(), l = z(), i = z(), h = z(), p = z(), x = z(), I = z(), {
    rows: _,
    columns: g,
    focusedCellId: m,
    focusedCellAPI: v,
    menu: $,
    config: k,
    validation: f,
    selectedCells: C,
    selectedCellCount: A
  } = Ye("grid");
  let S = F(t, "highlighted", 8), M = F(t, "rowFocused", 8), P = F(t, "rowSelected", 8), y = F(t, "rowIdx", 8), T = F(t, "topRow", 8, !1), V = F(t, "focused", 8), te = F(t, "selectedUser", 8), j = F(t, "column", 8), Z = F(t, "row", 8), ae = F(t, "cellId", 8), oe = F(t, "updateValue", 24, () => _.actions.updateValue), fe = F(t, "contentLines", 8, 1), ue = F(t, "hidden", 8, !1), Ie = F(t, "isSelectingCells", 8, !1), _e = F(t, "cellSelected", 8, !1);
  const pe = Oe(null);
  let $e = z();
  const q = (J, U) => J ? we(f, (N) => N[U]) : pe, ce = {
    focus: () => e($e)?.focus?.(),
    blur: () => e($e)?.blur?.(),
    isActive: () => e($e)?.isActive?.() ?? !1,
    onKeyDown: (...J) => e($e)?.onKeyDown?.(...J),
    isReadonly: () => e(p),
    getType: () => j().schema.type,
    getValue: () => e(i),
    setValue: (J, U = { apply: !0 }) => {
      f.actions.setError(ae(), null), oe()({
        rowId: Z()._id,
        column: j().name,
        value: J,
        apply: U?.apply
      });
    }
  }, ee = (J) => {
    J.button !== 0 || J.shiftKey || C.actions.startSelecting(ae());
  }, E = (J) => {
    if (J.buttons !== 1) {
      C.actions.stopSelecting();
      return;
    }
    C.actions.updateTarget(ae());
  }, D = () => {
    C.actions.stopSelecting();
  }, B = (J) => {
    J.shiftKey && r() ? C.actions.selectRange(r(), ae()) : J.shiftKey && c() ? C.actions.updateTarget(ae()) : m.set(ae());
  };
  W(() => (O(j()), O(Z())), () => {
    R(n, j().format && !Z()._isNewRow);
  }), W(
    () => (e(n), O(j())),
    () => {
      R(l, e(n) ? $s : bs(j()));
    }
  ), W(
    () => (e(n), O(Z()), O(j())),
    () => {
      R(i, e(n) ? Z().__formatted?.[j().name] : Z()[j().name]);
    }
  ), W(() => (O(M()), O(ae())), () => {
    _o(R(h, q(M(), ae())), "$error", a);
  }), W(
    () => (e(n), O(j()), o(), O(Z())),
    () => {
      R(p, e(n) || g.actions.isReadonly(j()) || !o().canEditRows && !Z()._isNewRow);
    }
  ), W(() => O(V()), () => {
    V() && v.set(ce);
  }), W(() => O(Ie()), () => {
    R(x, Ie() ? E : null);
  }), W(() => O(Ie()), () => {
    R(I, Ie() ? D : null);
  }), gt(), qe();
  {
    let J = re(() => P() || _e()), U = re(() => (O(Z()), O(j()), H(() => ({
      ...Z().__metadata?.row,
      ...Z().__metadata?.cell[j().name]
    }))));
    Gt(d, {
      get highlighted() {
        return S();
      },
      get rowIdx() {
        return y();
      },
      get topRow() {
        return T();
      },
      get focused() {
        return V();
      },
      get selectedUser() {
        return te();
      },
      get readonly() {
        return e(p);
      },
      get hidden() {
        return ue();
      },
      get selected() {
        return e(J);
      },
      get error() {
        return u();
      },
      get width() {
        return O(j()), H(() => j().width);
      },
      get metadata() {
        return e(U);
      },
      $$events: {
        contextmenu: (N) => $.actions.open(ae(), N),
        mousedown: ee,
        mouseenter(...N) {
          e(x)?.apply(this, N);
        },
        mouseup(...N) {
          e(I)?.apply(this, N);
        },
        click: B
      },
      children: (N, G) => {
        var ie = Vr(), be = xe(ie);
        _s(be, () => e(l), (K, se) => {
          se(K, {
            get value() {
              return e(i);
            },
            get schema() {
              return O(j()), H(() => j().schema);
            },
            get onChange() {
              return H(() => ce.setValue);
            },
            get focused() {
              return V();
            },
            get readonly() {
              return e(p);
            },
            get contentLines() {
              return fe();
            },
            get api() {
              return e($e);
            },
            set api(Ae) {
              R($e, Ae);
            },
            $$legacy: !0
          });
        });
        var ne = Y(be, 2);
        Ct(ne, t, "default", {}, null), L(N, ie);
      },
      $$slots: { default: !0 }
    });
  }
  We(), s();
}
var Br = Q('<div class="row svelte-58itob"><!> <!></div>');
function Ur(d, t) {
  Ue(t, !1);
  const o = () => w(V, "$selectedRows", m), r = () => w(j, "$hoveredRowId", m), c = () => w(q, "$selectedCellCount", m), u = () => w(pe, "$isSelectingCells", m), a = () => w(Z, "$focusedRow", m), s = () => w(T, "$reorder", m), n = () => w(ce, "$gridProps", m), l = () => w(ee, "$buttonColumnWidth", m), i = () => w(oe, "$isDragging", m), h = () => w(te, "$scrollableColumns", m), p = () => w($e, "$selectedCellMap", m), x = () => w(y, "$focusedCellId", m), I = () => w(_e, "$userCellMap", m), _ = () => w(ae, "$contentLines", m), g = () => w(Ie, "$columnRenderMap", m), [m, v] = rt(), $ = z(), k = z(), f = z(), C = z(), A = z(), S = z();
  let M = F(t, "row", 8), P = F(t, "top", 8, !1);
  const {
    focusedCellId: y,
    reorder: T,
    selectedRows: V,
    scrollableColumns: te,
    hoveredRowId: j,
    focusedRow: Z,
    contentLines: ae,
    isDragging: oe,
    dispatch: fe,
    rows: ue,
    columnRenderMap: Ie,
    userCellMap: _e,
    isSelectingCells: pe,
    selectedCellMap: $e,
    selectedCellCount: q,
    props: ce,
    buttonColumnWidth: ee
  } = Ye("grid");
  W(() => (o(), O(M())), () => {
    R($, !!o()[M()._id]);
  }), W(
    () => (r(), O(M()), c(), u()),
    () => {
      R(k, r() === M()._id && (!c() || !u()));
    }
  ), W(() => (a(), O(M())), () => {
    R(f, a()?._id === M()._id);
  }), W(() => s(), () => {
    R(C, s().sourceColumn);
  }), W(() => n(), () => {
    R(A, n()?.buttons?.length > 0);
  }), W(() => (e(A), l()), () => {
    R(S, e(A) && l() > 0);
  }), gt(), qe();
  var E = Br(), D = de(E);
  Nt(D, 1, h, Ht, (U, N) => {
    const G = re(() => (O(pt), O(M()), e(N), H(() => pt(M()._id, e(N).name))));
    {
      let ie = re(() => (e(k), e(f), e(C), e(N), H(() => e(k) || e(f) || e(C) === e(N).name))), be = re(() => x() === e(G)), ne = re(() => (g(), e(N), H(() => !g()[e(N).name])));
      mo(U, {
        get cellId() {
          return e(G);
        },
        get column() {
          return e(N);
        },
        get row() {
          return M();
        },
        get rowFocused() {
          return e(f);
        },
        get rowSelected() {
          return e($);
        },
        get cellSelected() {
          return p(), O(e(G)), H(() => p()[e(G)]);
        },
        get highlighted() {
          return e(ie);
        },
        get rowIdx() {
          return O(M()), H(() => M().__idx);
        },
        get topRow() {
          return P();
        },
        get focused() {
          return e(be);
        },
        get selectedUser() {
          return I(), O(e(G)), H(() => I()[e(G)]);
        },
        get width() {
          return e(N), H(() => e(N).width);
        },
        get contentLines() {
          return _();
        },
        get hidden() {
          return e(ne);
        },
        get isSelectingCells() {
          return u();
        }
      });
    }
  });
  var B = Y(D, 2);
  {
    var J = (U) => {
      {
        let N = re(() => e(k) || e(f));
        Gt(U, {
          get width() {
            return l();
          },
          get selected() {
            return e($);
          },
          get highlighted() {
            return e(N);
          },
          get rowIdx() {
            return O(M()), H(() => M().__idx);
          }
        });
      }
    };
    ge(B, (U) => {
      e(S) && U(J);
    });
  }
  le(E), Se("focus", E, function(U) {
    jt.call(this, t, U);
  }), Se("mouseenter", E, function(...U) {
    (i() ? null : () => tt(j, M()._id))?.apply(this, U);
  }), Se("mouseleave", E, function(...U) {
    (i() ? null : () => tt(j, null))?.apply(this, U);
  }), Se("click", E, () => fe("rowclick", ue.actions.cleanRow(M()))), L(d, E), We(), v();
}
var qr = Q('<div class="button-placeholder-collapsed svelte-g8kt2l"></div>'), Wr = Q('<div class="button-placeholder svelte-g8kt2l"></div>'), Gr = Q("<!> <!>", 1), Kr = Q("<div><!></div>"), Xr = Q('<div class="row svelte-g8kt2l"><!></div>'), Yr = Q('<div class="row blank svelte-g8kt2l"><!></div>'), Jr = Q("<!> <!>", 1), Qr = Q('<div><div class="content svelte-g8kt2l"><!></div></div>');
function Zr(d, t) {
  Ue(t, !1);
  const o = () => w(M, "$gridProps", g), r = () => w(te, "$scrollableColumns", g), c = () => w(j, "$scrollLeft", g), u = () => w(P, "$width", g), a = () => w(ae, "$buttonColumnWidth", g), s = () => w(_e, "$metadata", g), n = () => w(S, "$hoveredRowId", g), l = () => w(A, "$renderedRows", g), i = () => w(V, "$selectedRows", g), h = () => w(T, "$focusedRow", g), p = () => w(Z, "$isDragging", g), x = () => w(oe, "$showVScrollbar", g), I = () => w(fe, "$showHScrollbar", g), _ = () => w(Ie, "$config", g), [g, m] = rt(), v = z(), $ = z(), k = z(), f = z(), C = z(), {
    renderedRows: A,
    hoveredRowId: S,
    props: M,
    width: P,
    rows: y,
    focusedRow: T,
    selectedRows: V,
    scrollableColumns: te,
    scrollLeft: j,
    isDragging: Z,
    buttonColumnWidth: ae,
    showVScrollbar: oe,
    showHScrollbar: fe,
    dispatch: ue,
    config: Ie,
    metadata: _e
  } = Ye("grid");
  let pe = z();
  const $e = ({ buttons: U, buttonsCollapsed: N }) => {
    let G = U || [];
    return N ? G : G.slice(0, 3);
  }, q = (U, N) => {
    if (!U || !N) return U;
    const G = s()?.[N._id]?.button || {};
    return U.map((ie, be) => {
      const ne = G[be];
      return ne ? ne.hidden ? null : { ...ie, ...ne } : ie;
    }).filter((ie) => ie !== null);
  }, ce = async (U, N) => {
    await U.onClick?.(y.actions.cleanRow(N)), await y.actions.refreshRow(N._id);
  }, ee = (U, N) => U.map((G) => ({ ...G, onClick: () => ce(G, N) }));
  zt(() => {
    new ResizeObserver((N) => {
      const G = N?.[0]?.contentRect?.width ?? 0;
      ae.set(G - 1);
    }).observe(e(pe));
  }), W(() => o(), () => {
    R(v, $e(o()));
  }), W(() => r(), () => {
    R($, r().reduce((U, N) => U += N.width, 0));
  }), W(() => (e($), c()), () => {
    R(k, e($) - c() - 1);
  }), W(() => (u(), a()), () => {
    R(f, u() - a() - 1);
  }), W(() => (e(k), e(f)), () => {
    R(C, Math.min(e(k), e(f)));
  }), gt(), qe();
  var E = Qr();
  let D;
  var B = de(E), J = de(B);
  oo(J, {
    scrollVertically: !0,
    attachHandlers: !0,
    get ref() {
      return e(pe);
    },
    set ref(U) {
      R(pe, U);
    },
    children: (U, N) => {
      var G = Jr(), ie = xe(G);
      Nt(ie, 1, l, Ht, (K, se) => {
        const Ae = re(() => (i(), e(se), H(() => !!i()[e(se)._id]))), ye = re(() => (n(), e(se), H(() => n() === e(se)._id))), Le = re(() => (h(), e(se), H(() => h()?._id === e(se)._id))), Ee = re(() => (e(v), e(se), H(() => q(e(v), e(se)))));
        var Ve = Xr(), Be = de(Ve);
        {
          let Ne = re(() => e(ye) || e(Le)), Je = re(() => (e(se), H(() => e(se).__metadata?.row)));
          Gt(Be, {
            width: "100%",
            get rowIdx() {
              return e(se), H(() => e(se).__idx);
            },
            get selected() {
              return e(Ae);
            },
            get highlighted() {
              return e(Ne);
            },
            get metadata() {
              return e(Je);
            },
            children: (it, Ge) => {
              var mt = Kr();
              let Qe;
              var Ft = de(mt);
              {
                var Dt = (ve) => {
                  var De = ft(), Te = xe(De);
                  {
                    var yt = (he) => {
                      {
                        let X = re(() => (O(e(Ee)), e(se), H(() => ee(e(Ee), e(se))))), Re = re(() => (o(), H(() => o().buttonsCollapsedText || "Action")));
                        Bs(he, {
                          get buttons() {
                            return e(X);
                          },
                          get text() {
                            return e(Re);
                          },
                          align: "right",
                          offset: 5,
                          size: "S",
                          animate: !1,
                          $$events: { mouseenter: () => tt(S, e(se)._id) }
                        });
                      }
                    }, me = (he) => {
                      var X = qr();
                      L(he, X);
                    };
                    ge(Te, (he) => {
                      O(e(Ee)), H(() => e(Ee).length > 0) ? he(yt) : he(me, !1);
                    });
                  }
                  L(ve, De);
                }, ke = (ve) => {
                  var De = Gr(), Te = xe(De);
                  Nt(Te, 1, () => e(Ee), Ht, (he, X) => {
                    {
                      let Re = re(() => (e(X), H(() => e(X).type === "cta"))), Ce = re(() => (e(X), H(() => e(X).type === "primary"))), Pe = re(() => (e(X), H(() => e(X).type === "secondary"))), ht = re(() => (e(X), H(() => e(X).type === "warning"))), Rt = re(() => (e(X), H(() => e(X).type === "overBackground")));
                      uo(he, {
                        newStyles: !0,
                        size: "S",
                        get icon() {
                          return e(X), H(() => e(X).icon);
                        },
                        get cta() {
                          return e(Re);
                        },
                        get primary() {
                          return e(Ce);
                        },
                        get secondary() {
                          return e(Pe);
                        },
                        get warning() {
                          return e(ht);
                        },
                        get overBackground() {
                          return e(Rt);
                        },
                        $$events: { click: () => ce(e(X), e(se)) },
                        children: (Mt, ot) => {
                          Fe();
                          var St = et();
                          Me(() => vt(St, (e(X), H(() => e(X).text || "Button")))), L(Mt, St);
                        },
                        $$slots: { default: !0 }
                      });
                    }
                  });
                  var yt = Y(Te, 2);
                  {
                    var me = (he) => {
                      var X = Wr();
                      L(he, X);
                    };
                    ge(yt, (he) => {
                      O(e(Ee)), H(() => e(Ee).length === 0) && he(me);
                    });
                  }
                  L(ve, De);
                };
                ge(Ft, (ve) => {
                  o(), H(() => o().buttonsCollapsed) ? ve(Dt) : ve(ke, !1);
                });
              }
              le(mt), Me((ve) => Qe = nt(mt, 1, "buttons svelte-g8kt2l", null, Qe, ve), [() => ({ offset: x() && I() })]), L(it, mt);
            },
            $$slots: { default: !0 }
          });
        }
        le(Ve), Se("mouseenter", Ve, function(...Ne) {
          (p() ? null : () => tt(S, e(se)._id))?.apply(this, Ne);
        }), Se("mouseleave", Ve, function(...Ne) {
          (p() ? null : () => tt(S, null))?.apply(this, Ne);
        }), L(K, Ve);
      });
      var be = Y(ie, 2);
      {
        var ne = (K) => {
          var se = Yr(), Ae = de(se);
          {
            let ye = re(() => n() === Yt);
            Gt(Ae, {
              width: "100%",
              get highlighted() {
                return e(ye);
              },
              $$events: { click: () => ue("add-row-inline") }
            });
          }
          le(se), Se("mouseenter", se, function(...ye) {
            (p() ? null : () => tt(S, Yt))?.apply(this, ye);
          }), Se("mouseleave", se, function(...ye) {
            (p() ? null : () => tt(S, null))?.apply(this, ye);
          }), L(K, se);
        };
        ge(be, (K) => {
          _(), H(() => _().canAddRows) && K(ne);
        });
      }
      L(U, G);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), le(B), le(E), Me(
    (U) => {
      D = nt(E, 1, "button-column svelte-g8kt2l", null, D, U), Et(E, `left:${e(C) ?? ""}px`);
    },
    [() => ({ hidden: a() === 0 })]
  ), Se("mouseleave", B, () => tt(S, null)), L(d, E), We(), m();
}
var el = Q('<div class="row blank svelte-sq75hb"><!></div>'), tl = Q("<!> <!>", 1), ol = Q('<div class="grid-body svelte-sq75hb"><!> <!></div>');
function sl(d, t) {
  Ue(t, !1);
  const o = () => w(x, "$scrollableColumns", n), r = () => w(p, "$renderedRows", n), c = () => w(m, "$config", n), u = () => w(g, "$isDragging", n), a = () => w(I, "$hoveredRowId", n), s = () => w(v, "$gridProps", n), [n, l] = rt(), i = z(), {
    bounds: h,
    renderedRows: p,
    scrollableColumns: x,
    hoveredRowId: I,
    dispatch: _,
    isDragging: g,
    config: m,
    props: v
  } = Ye("grid");
  let $ = z();
  const k = () => {
    h.set(e($).getBoundingClientRect());
  };
  zt(() => {
    const M = new ResizeObserver(k);
    return M.observe(e($)), window.addEventListener("wheel", k, !0), () => {
      M.disconnect(), window.removeEventListener("wheel", k, !0);
    };
  }), W(() => o(), () => {
    R(i, o().reduce((M, P) => M += P.width, 0));
  }), gt(), qe();
  var f = ol(), C = de(f);
  oo(C, {
    scrollHorizontally: !0,
    scrollVertically: !0,
    attachHandlers: !0,
    children: (M, P) => {
      var y = tl(), T = xe(y);
      Nt(T, 1, r, Ht, (j, Z, ae) => {
        Ur(j, {
          get row() {
            return e(Z);
          },
          top: ae === 0
        });
      });
      var V = Y(T, 2);
      {
        var te = (j) => {
          var Z = el(), ae = de(Z);
          {
            let oe = re(() => a() === Yt);
            Gt(ae, {
              get width() {
                return e(i);
              },
              get highlighted() {
                return e(oe);
              },
              $$events: { click: () => _("add-row-inline") }
            });
          }
          le(Z), Se("mouseenter", Z, function(...oe) {
            (u() ? null : () => tt(I, Yt))?.apply(this, oe);
          }), Se("mouseleave", Z, function(...oe) {
            (u() ? null : () => tt(I, null))?.apply(this, oe);
          }), L(j, Z);
        };
        ge(V, (j) => {
          c(), H(() => c().canAddRows) && j(te);
        });
      }
      L(M, y);
    },
    $$slots: { default: !0 }
  });
  var A = Y(C, 2);
  {
    var S = (M) => {
      Zr(M, {});
    };
    ge(A, (M) => {
      s(), H(() => s().buttons?.length) && M(S);
    });
  }
  le(f), Ot(f, (M) => R($, M), () => e($)), L(d, f), We(), l();
}
var nl = Q('<div><div class="resize-indicator svelte-d0ro6a"></div></div>');
function rl(d, t) {
  Ue(t, !1);
  const o = () => w(i, "$isReordering", a), r = () => w(l, "$visibleColumns", a), c = () => w(n, "$resize", a), u = () => w(h, "$scrollLeft", a), [a, s] = rt(), { resize: n, visibleColumns: l, isReordering: i, scrollLeft: h } = Ye("grid"), p = (g, m) => {
    let v = g.__left + g.width;
    return g.primaryDisplay || (v -= m), `left:${v}px;`;
  };
  qe();
  var x = ft(), I = xe(x);
  {
    var _ = (g) => {
      var m = ft(), v = xe(m);
      Nt(v, 1, r, Ht, ($, k) => {
        var f = nl();
        let C;
        Me(
          (A, S) => {
            C = nt(f, 1, "resize-slider svelte-d0ro6a", null, C, A), Et(f, S);
          },
          [
            () => ({ visible: c().column === e(k).name }),
            () => p(e(k), u())
          ]
        ), Se("mousedown", f, (A) => n.actions.startResizing(e(k), A)), Se("touchstart", f, (A) => n.actions.startResizing(e(k), A)), Se("dblclick", f, () => n.actions.resetSize(e(k))), L($, f);
      }), L(g, m);
    };
    ge(I, (g) => {
      o() || g(_);
    });
  }
  L(d, x), We(), s();
}
var ll = Q('<div class="reorder-overlay svelte-44y6yr"></div>'), al = Q('<div class="reorder-wrapper svelte-44y6yr"><!></div>');
function il(d, t) {
  Ue(t, !1);
  const o = () => w($, "$columnLookupMap", l), r = () => w(v, "$reorder", l), c = () => w(C, "$scrollLeft", l), u = () => w(k, "$rowHeight", l), a = () => w(f, "$renderedRows", l), s = () => w(m, "$isReordering", l), n = () => w(A, "$stickyWidth", l), [l, i] = rt(), h = z(), p = z(), x = z(), I = z(), _ = z(), g = z(), {
    isReordering: m,
    reorder: v,
    columnLookupMap: $,
    rowHeight: k,
    renderedRows: f,
    scrollLeft: C,
    stickyWidth: A
  } = Ye("grid"), S = (T, V, te) => {
    if (!T)
      return 0;
    let j = T.__left - te;
    return V && (j += T.width), j;
  };
  W(() => (o(), r()), () => {
    R(h, o()[r().targetColumn]);
  }), W(() => r(), () => {
    R(p, r().insertAfter);
  }), W(() => (e(h), e(p), c()), () => {
    R(x, S(e(h), e(p), c()));
  }), W(() => (u(), a(), Ut), () => {
    R(I, u() * a().length + Ut);
  }), W(() => (e(x), e(I)), () => {
    R(_, `left:${e(x)}px; height:${e(I)}px;`);
  }), W(() => (s(), e(x), n()), () => {
    R(g, s() && e(x) >= n());
  }), gt(), qe();
  var M = ft(), P = xe(M);
  {
    var y = (T) => {
      var V = al(), te = de(V);
      oo(te, {
        scrollVertically: !0,
        children: (j, Z) => {
          var ae = ll();
          Me(() => Et(ae, e(_))), L(j, ae);
        },
        $$slots: { default: !0 }
      }), le(V), L(T, V);
    };
    ge(P, (T) => {
      e(g) && T(y);
    });
  }
  L(d, M), We(), i();
}
var cl = Q('<div class="grid-popover-container svelte-13wuvvd"></div>');
function dl(d) {
  var t = cl();
  L(d, t);
}
var ul = Q('<div class="content svelte-1nq234b"><!></div>'), fl = Q('<div id="add-column-button" class="add svelte-1nq234b"><!></div> <!>', 1);
function vl(d, t) {
  Ue(t, !1);
  const o = () => w(i, "$scrollableColumns", u), r = () => w(h, "$scrollLeft", u), c = () => w(p, "$width", u), [u, a] = rt(), s = z(), n = z(), l = z(), {
    scrollableColumns: i,
    scrollLeft: h,
    width: p,
    subscribe: x,
    ui: I,
    keyboardBlocked: _
  } = Ye("grid");
  let g = z(), m = z(!1);
  const v = () => {
    I.actions.blur(), R(m, !0);
  }, $ = () => {
    R(m, !1);
  };
  zt(() => x("close-edit-column", $)), W(() => o(), () => {
    R(s, o().reduce((M, P) => M += P.width, 0));
  }), W(() => (e(s), r()), () => {
    R(n, e(s) - 1 - r());
  }), W(() => (c(), e(n)), () => {
    R(l, Math.min(c() - 40, e(n)));
  }), W(() => e(m), () => {
    _.set(e(m));
  }), gt(), qe();
  var k = fl(), f = xe(k), C = de(f);
  Tt(C, { name: "plus" }), le(f), Ot(f, (M) => R(g, M), () => e(g));
  var A = Y(f, 2);
  {
    var S = (M) => {
      {
        let P = re(() => (o(), H(() => o().length ? "right" : "left")));
        xo(M, {
          get anchor() {
            return e(g);
          },
          get align() {
            return e(P);
          },
          maxHeight: null,
          resizable: !0,
          minWidth: 360,
          $$events: { close: $ },
          children: (y, T) => {
            var V = ul(), te = de(V);
            Ct(te, t, "default", {}, null), le(V), L(y, V);
          },
          $$slots: { default: !0 }
        });
      }
    };
    ge(A, (M) => {
      e(m) && M(S);
    });
  }
  Me(() => Et(f, `left:${e(l) ?? ""}px`)), Se("click", f, v), L(d, k), We(), a();
}
var gl = Q(" <!> <!>", 1);
function ml(d, t) {
  Ue(t, !1);
  const o = () => w(s, "$definition", r), [r, c] = rt(), u = z(), { API: a, definition: s, rows: n } = Ye("grid");
  let l = F(t, "column", 8), i = z(`${l().schema.name} migrated`);
  const h = (x) => {
    if (x === "")
      return "Column name can't be empty.";
    if (x in o().schema)
      return "New column name can't be the same as an existing column name.";
    if (x.match(ys) === null)
      return "Illegal character; must be alpha-numeric.";
  }, p = async () => {
    try {
      await a.migrateColumn(o()._id, l().schema.name, e(i)), vo.success("Column migrated");
    } catch (x) {
      vo.error(`Failed to migrate: ${x.message}`);
    }
    await n.actions.refreshData();
  };
  W(() => e(i), () => {
    R(u, h(e(i)));
  }), gt(), qe();
  {
    let x = re(() => e(u) !== void 0);
    ro(d, {
      title: "Migrate column",
      confirmText: "Continue",
      cancelText: "Cancel",
      onConfirm: p,
      get disabled() {
        return e(x);
      },
      size: "M",
      children: (I, _) => {
        Fe();
        var g = gl(), m = xe(g), v = Y(m);
        Xs(v, {
          type: "error",
          header: "Are you sure?",
          message: "This will leave bindings which utilised the user relationship column in a state where they will need to be updated to use the new column instead."
        });
        var $ = Y(v, 2);
        Cs($, {
          label: "New column name",
          get error() {
            return e(u);
          },
          get value() {
            return e(i);
          },
          set value(k) {
            R(i, k);
          },
          $$legacy: !0
        }), Me(() => vt(m, `This operation will kick off a migration of the column "${O(l()), H(() => l().schema.name) ?? ""}"
  to a new column, with the name provided - this operation may take a moment to
  complete. `)), L(I, g);
      },
      $$slots: { default: !0 }
    });
  }
  We(), c();
}
var hl = Q('<input type="text" data-grid-ignore="" class="svelte-16y79dd"/>'), wl = Q('<div class="column-icon svelte-16y79dd"><!></div>'), pl = Q('<div class="clear-icon svelte-16y79dd"><!></div>'), $l = Q('<div class="sort-indicator svelte-16y79dd"><!></div>'), bl = Q('<!> <div class="more-icon svelte-16y79dd"><!></div>', 1), _l = Q('<!> <!> <div class="search-icon svelte-16y79dd"><!></div> <div class="name svelte-16y79dd"> </div> <!>', 1), Cl = Q('<div class="content svelte-16y79dd"><!></div>'), yl = Q("<!> <!> <!>", 1), Rl = Q("<!> <!> <!> <!>", 1), Sl = Q("<!> <!> <!> <!>", 1), xl = Q("<!>  <div><!></div> <!>", 1);
function Yo(d, t) {
  Ue(t, !1);
  const o = () => w(P, "$sort", i), r = () => w(y, "$scrollableColumns", i), c = () => w(te, "$config", i), u = () => w(Ie, "$inlineFilters", i), a = () => w(oe, "$schema", i), s = () => w(Z, "$definition", i), n = () => w(S, "$isReordering", i), l = () => w(M, "$isResizing", i), [i, h] = rt(), p = z(), x = z(), I = z(), _ = z(), g = z(), m = z(), v = z(), $ = z(), k = z();
  let f = F(t, "column", 8), C = F(t, "idx", 8);
  const {
    reorder: A,
    isReordering: S,
    isResizing: M,
    sort: P,
    scrollableColumns: y,
    dispatch: T,
    subscribe: V,
    config: te,
    ui: j,
    definition: Z,
    datasource: ae,
    schema: oe,
    focusedCellId: fe,
    filter: ue,
    inlineFilters: Ie,
    keyboardBlocked: _e
  } = Ye("grid"), pe = [
    _t.STRING,
    _t.OPTIONS,
    _t.NUMBER,
    _t.BIGINT,
    _t.ARRAY,
    _t.LONGFORM
  ];
  let $e = z(), q = z(!1), ce = z(!1), ee, E = z(), D = z(), B = z();
  const J = () => {
    R(q, !1), R(ce, !1);
  }, U = (X) => {
    if (X.calculationType)
      return { ascending: "low-high", descending: "high-low" };
    let Re = X.schema?.type;
    switch (xs(X.schema) && (Re = X.schema.responseType), Re) {
      case _t.NUMBER:
      case _t.BIGINT:
        return { ascending: "low-high", descending: "high-low" };
      case _t.DATETIME:
        return { ascending: "old-new", descending: "new-old" };
      default:
        return { ascending: "A-Z", descending: "Z-A" };
    }
  }, N = (X) => {
    R(D, u()?.find((Re) => Re.id === `inline-${X}`)?.value);
  }, G = (X) => {
    const { type: Re, formulaType: Ce } = X.schema;
    return pe.includes(Re) || Re === _t.FORMULA && Ce === Is.STATIC || Re === _t.AI;
  }, ie = async () => {
    R(ce, !0), await Qt(), T("edit-column", f().schema);
  }, be = (X) => {
    j.actions.blur(), (X.touches?.length || X.button === 0) && e($) && (ee = setTimeout(
      () => {
        A.actions.startReordering(f().name, X);
      },
      200
    ));
  }, ne = () => {
    ee && (clearTimeout(ee), ee = null);
  }, K = (X) => {
    X.preventDefault(), setTimeout(
      () => {
        j.actions.blur(), R(q, !e(q));
      },
      10
    );
  }, se = () => {
    P.set([{ column: f().name, order: kt.ASCENDING }]), R(q, !1);
  }, Ae = () => {
    P.set([{ column: f().name, order: kt.DESCENDING }]), R(q, !1);
  }, ye = () => {
    A.actions.moveColumnLeft(f().name), R(q, !1);
  }, Le = () => {
    A.actions.moveColumnRight(f().name), R(q, !1);
  }, Ee = () => {
    ae.actions.changePrimaryDisplay(f().name), R(q, !1);
  }, Ve = () => {
    const { related: X } = f(), Re = { visible: !1 };
    X ? ae.actions.addSubSchemaMutation(X.subField, X.field, Re) : ae.actions.addSchemaMutation(f().name, Re), ae.actions.saveSchemaMutations(), R(q, !1);
  }, Be = async () => {
    R(q, !1);
    let X = `${f().name} copy`, Re = 2;
    for (; a()[X]; )
      X = `${f().name} copy ${Re++}`;
    const Ce = a()[f().name];
    await ae.actions.saveDefinition({
      ...s(),
      schema: {
        ...a(),
        [X]: {
          ...Ce,
          name: X,
          schema: { ...Ce.schema }
        }
      }
    });
  }, Ne = () => {
    e(E).show(), R(q, !1);
  }, Je = async () => {
    tt(fe, null), R(D, ""), await Qt(), e(B)?.focus();
  }, it = (X) => {
    X.key === "Enter" ? Qe() : X.key === "Escape" && e(B)?.blur();
  }, Ge = () => {
    R(D, null), Qe();
  }, mt = () => {
    e(D) === "" && R(D, null), Qe();
  }, Qe = () => {
    ue.actions.addInlineFilter(f(), e(D));
  }, Ft = Vo(Qe, 250), Dt = () => {
    !e(k) || e(v) || (R(q, !0), ie());
  };
  zt(() => V("close-edit-column", J)), W(() => (o(), O(f())), () => {
    R(p, o().find((X) => X.column === f().name));
  }), W(() => e(p), () => {
    R(x, !!e(p));
  }), W(() => O(f()), () => {
    R($, !f().primaryDisplay);
  }), W(() => (e($), O(C())), () => {
    R(I, e($) && C() > 0);
  }), W(
    () => (e($), O(C()), r()),
    () => {
      R(_, e($) && C() < r().length - 1);
    }
  ), W(() => O(f()), () => {
    R(g, U(f()));
  }), W(() => O(f()), () => {
    R(m, G(f()));
  }), W(() => O(f()), () => {
    N(f().name);
  }), W(() => e(D), () => {
    R(v, e(D) != null);
  }), W(() => e(D), () => {
    Ft(e(D));
  }), W(() => (c(), O(f())), () => {
    R(k, c().canEditColumns && !f().schema.disabled);
  }), W(() => e(q), () => {
    _e.set(e(q));
  }), gt(), qe();
  var ke = xl(), ve = xe(ke);
  Ot(
    no(ve, {
      children: (X, Re) => {
        ml(X, {
          get column() {
            return f();
          }
        });
      },
      $$slots: { default: !0 },
      $$legacy: !0
    }),
    (X) => R(E, X),
    () => e(E)
  );
  var De = Y(ve, 2);
  let Te;
  var yt = de(De);
  Gt(yt, {
    get width() {
      return O(f()), H(() => f().width);
    },
    get left() {
      return O(f()), H(() => f().__left);
    },
    defaultHeight: !0,
    center: !0,
    $$events: {
      mousedown: be,
      mouseup: ne,
      touchstart: be,
      touchend: ne,
      touchcancel: ne,
      contextmenu: K
    },
    children: (X, Re) => {
      var Ce = _l(), Pe = xe(Ce);
      {
        var ht = (Xe) => {
          var ze = hl();
          Rs(ze), Ot(ze, (st) => R(B, st), () => e(B)), Ss(ze, () => e(D), (st) => R(D, st)), Se("blur", ze, mt), Se("click", ze, () => fe.set(null)), Se("keydown", ze, it), L(Xe, ze);
        };
        ge(Pe, (Xe) => {
          e(v) && Xe(ht);
        });
      }
      var Rt = Y(Pe, 2);
      {
        var Mt = (Xe) => {
          var ze = wl(), st = de(ze);
          {
            let lt = re(() => (O(Eo), O(f()), H(() => Eo(f()))));
            Tt(st, {
              get name() {
                return e(lt);
              },
              size: "M",
              color: "var(--spectrum-global-color-gray-600)",
              hoverable: !0,
              hoverColor: "var(--spectrum-global-color-gray-800)"
            });
          }
          le(ze), L(Xe, ze);
        };
        ge(Rt, (Xe) => {
          c(), H(() => !c().quiet) && Xe(Mt);
        });
      }
      var ot = Y(Rt, 2), St = de(ot);
      Tt(St, { hoverable: !0, size: "S", name: "magnifying-glass" }), le(ot);
      var Ke = Y(ot, 2), ct = de(Ke, !0);
      le(Ke);
      var Ze = Y(Ke, 2);
      {
        var xt = (Xe) => {
          var ze = pl(), st = de(ze);
          Tt(st, { hoverable: !0, size: "S", name: "x" }), le(ze), Se("click", ze, Ge), L(Xe, ze);
        }, dt = (Xe) => {
          var ze = bl(), st = xe(ze);
          {
            var lt = (He) => {
              var je = $l(), It = de(je);
              {
                let $t = re(() => (e(p), O(kt), H(() => e(p)?.order === kt.DESCENDING ? "sort-descending" : "sort-ascending")));
                Tt(It, {
                  hoverable: !0,
                  size: "S",
                  get name() {
                    return e($t);
                  }
                });
              }
              le(je), L(He, je);
            };
            ge(st, (He) => {
              e(x) && He(lt);
            });
          }
          var wt = Y(st, 2), At = de(wt);
          Tt(At, { hoverable: !0, size: "S", name: "dots-three-vertical" }), le(wt), Se("click", wt, () => R(q, !0)), L(Xe, ze);
        };
        ge(Ze, (Xe) => {
          e(v) ? Xe(xt) : Xe(dt, !1);
        });
      }
      Me(() => vt(ct, (O(f()), H(() => f().label)))), Se("click", ot, Je), L(X, Ce);
    },
    $$slots: { default: !0 }
  }), le(De), Ot(De, (X) => R($e, X), () => e($e));
  var me = Y(De, 2);
  {
    var he = (X) => {
      xo(X, {
        get anchor() {
          return e($e);
        },
        align: "left",
        maxHeight: null,
        resizable: !0,
        $$events: { close: J },
        children: (Re, Ce) => {
          var Pe = ft(), ht = xe(Pe);
          {
            var Rt = (ot) => {
              var St = Cl(), Ke = de(St);
              Ct(Ke, t, "default", {}, null), le(St), L(ot, St);
            }, Mt = (ot) => {
              Wo(ot, {
                children: (St, Ke) => {
                  var ct = Sl(), Ze = xe(ct);
                  {
                    var xt = (lt) => {
                      var wt = yl(), At = xe(wt);
                      {
                        let It = re(() => !e(k));
                        at(At, {
                          icon: "pencil",
                          get disabled() {
                            return e(It);
                          },
                          $$events: { click: ie },
                          children: ($t, ut) => {
                            Fe();
                            var bt = et("Edit column");
                            L($t, bt);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                      var He = Y(At, 2);
                      at(He, {
                        icon: "copy",
                        $$events: { click: Be },
                        children: (It, $t) => {
                          Fe();
                          var ut = et("Duplicate column");
                          L(It, ut);
                        },
                        $$slots: { default: !0 }
                      });
                      var je = Y(He, 2);
                      {
                        let It = re(() => (c(), O(f()), O(Lo), H(() => !c().canEditColumns || f().primaryDisplay || !Lo(f().schema))));
                        at(je, {
                          icon: "tag",
                          get disabled() {
                            return e(It);
                          },
                          $$events: { click: Ee },
                          children: ($t, ut) => {
                            Fe();
                            var bt = et("Use as display column");
                            L($t, bt);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                      L(lt, wt);
                    };
                    ge(Ze, (lt) => {
                      c(), H(() => c().canEditColumns) && lt(xt);
                    });
                  }
                  var dt = Y(Ze, 2);
                  {
                    let lt = re(() => (O(ao), O(f()), e(p), O(kt), H(() => !ao(f().schema) || e(p)?.order === kt.ASCENDING)));
                    at(dt, {
                      icon: "sort-ascending",
                      get disabled() {
                        return e(lt);
                      },
                      $$events: { click: se },
                      children: (wt, At) => {
                        Fe();
                        var He = et();
                        Me(() => vt(He, `Sort ${e(g), H(() => e(g).ascending) ?? ""}`)), L(wt, He);
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var Xe = Y(dt, 2);
                  {
                    let lt = re(() => (O(ao), O(f()), e(p), O(kt), H(() => !ao(f().schema) || e(p)?.order === kt.DESCENDING)));
                    at(Xe, {
                      icon: "sort-descending",
                      get disabled() {
                        return e(lt);
                      },
                      $$events: { click: Ae },
                      children: (wt, At) => {
                        Fe();
                        var He = et();
                        Me(() => vt(He, `Sort ${e(g), H(() => e(g).descending) ?? ""}`)), L(wt, He);
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var ze = Y(Xe, 2);
                  {
                    var st = (lt) => {
                      var wt = Rl(), At = xe(wt);
                      {
                        let ut = re(() => !e(I));
                        at(At, {
                          get disabled() {
                            return e(ut);
                          },
                          icon: "caret-left",
                          $$events: { click: ye },
                          children: (bt, qt) => {
                            Fe();
                            var Kt = et("Move left");
                            L(bt, Kt);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                      var He = Y(At, 2);
                      {
                        let ut = re(() => !e(_));
                        at(He, {
                          get disabled() {
                            return e(ut);
                          },
                          icon: "caret-right",
                          $$events: { click: Le },
                          children: (bt, qt) => {
                            Fe();
                            var Kt = et("Move right");
                            L(bt, Kt);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                      var je = Y(He, 2);
                      {
                        let ut = re(() => (c(), O(f()), H(() => !c().canEditColumns || f().primaryDisplay || !c().canHideColumns)));
                        at(je, {
                          get disabled() {
                            return e(ut);
                          },
                          icon: "eye-slash",
                          $$events: { click: Ve },
                          children: (bt, qt) => {
                            Fe();
                            var Kt = et("Hide column");
                            L(bt, Kt);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                      var It = Y(je, 2);
                      {
                        var $t = (ut) => {
                          at(ut, {
                            icon: "user",
                            $$events: { click: Ne },
                            children: (bt, qt) => {
                              Fe();
                              var Kt = et("Migrate to user column");
                              L(bt, Kt);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        ge(It, (ut) => {
                          c(), O(f()), O(Io), H(() => c().canEditColumns && f().schema.type === "link" && f().schema.tableId === Io.USERS && !f().schema.autocolumn) && ut($t);
                        });
                      }
                      L(lt, wt);
                    };
                    ge(ze, (lt) => {
                      c(), H(() => c().canEditColumns) && lt(st);
                    });
                  }
                  L(St, ct);
                },
                $$slots: { default: !0 }
              });
            };
            ge(ht, (ot) => {
              e(ce) ? ot(Rt) : ot(Mt, !1);
            });
          }
          L(Re, Pe);
        },
        $$slots: { default: !0 }
      });
    };
    ge(me, (X) => {
      e(q) && X(he);
    });
  }
  Me(
    (X) => {
      Te = nt(De, 1, "header-cell svelte-16y79dd", null, Te, X), Et(De, `flex: 0 0 ${O(f()), H(() => f().width) ?? ""}px;`);
    },
    [
      () => ({
        open: e(q),
        searchable: e(m),
        searching: e(v),
        disabled: n() || l(),
        sticky: C() === "sticky"
      })
    ]
  ), Se("dblclick", De, Dt), L(d, ke), We(), h();
}
var Il = Q('<div class="row svelte-faf6sa"></div>'), kl = Q('<div class="header svelte-faf6sa"><!> <!></div>');
function Ml(d, t) {
  Ue(t, !1);
  const o = () => w(l, "$scrollableColumns", s), r = () => w(i, "$config", s), c = () => w(p, "$datasource", s), u = () => w(h, "$hasNonAutoColumn", s), a = () => w(x, "$loading", s), [s, n] = rt(), {
    scrollableColumns: l,
    config: i,
    hasNonAutoColumn: h,
    datasource: p,
    loading: x
  } = Ye("grid");
  qe();
  var I = kl(), _ = de(I);
  oo(_, {
    scrollHorizontally: !0,
    children: (v, $) => {
      var k = Il();
      Nt(k, 5, o, Ht, (f, C, A) => {
        Yo(f, {
          get column() {
            return e(C);
          },
          idx: A,
          children: (S, M) => {
            var P = ft(), y = xe(P);
            Ct(y, t, "edit-column", {}, null), L(S, P);
          },
          $$slots: { default: !0 }
        });
      }), le(k), L(v, k);
    },
    $$slots: { default: !0 }
  });
  var g = Y(_, 2);
  {
    var m = (v) => {
      var $ = ft(), k = xe($);
      Bo(k, c, (f) => {
        {
          let C = re(() => !u() && !a());
          Go(f, {
            text: "Click here to create your first column",
            get type() {
              return Co.Info;
            },
            get condition() {
              return e(C);
            },
            children: (A, S) => {
              vl(A, {
                children: (M, P) => {
                  var y = ft(), T = xe(y);
                  Ct(T, t, "add-column", {}, null), L(M, y);
                },
                $$slots: { default: !0 }
              });
            },
            $$slots: { default: !0 }
          });
        }
      }), L(v, $);
    };
    ge(g, (v) => {
      r().canEditColumns && v(m);
    });
  }
  le(I), L(d, I), We(), n();
}
var Al = Q("<div></div>"), Ll = Q("<div></div>"), El = Q("<!> <!>", 1);
function Pl(d, t) {
  Ue(t, !1);
  const o = () => w(oe, "$height", I), r = () => w(M, "$contentHeight", I), c = () => w(ae, "$scrollTop", I), u = () => w(P, "$maxScrollTop", I), a = () => w(V, "$screenWidth", I), s = () => w(y, "$contentWidth", I), n = () => w(Z, "$scrollLeft", I), l = () => w(T, "$maxScrollLeft", I), i = () => w(ue, "$menu", I), h = () => w(Ie, "$focusedCellAPI", I), p = () => w(j, "$showVScrollbar", I), x = () => w(te, "$showHScrollbar", I), [I, _] = rt(), g = z(), m = z(), v = z(), $ = z(), k = z(), f = z(), C = z(), A = z(), {
    scroll: S,
    contentHeight: M,
    maxScrollTop: P,
    contentWidth: y,
    maxScrollLeft: T,
    screenWidth: V,
    showHScrollbar: te,
    showVScrollbar: j,
    scrollLeft: Z,
    scrollTop: ae,
    height: oe,
    isDragging: fe,
    menu: ue,
    focusedCellAPI: Ie
  } = Ye("grid");
  let _e, pe, $e = z(!1), q = z(!1);
  const ce = () => {
    i().visible && ue.actions.close(), h()?.blur();
  }, ee = (K) => {
    K.preventDefault(), _e = Xt(K).y, pe = c(), document.addEventListener("mousemove", E), document.addEventListener("touchmove", E), document.addEventListener("mouseup", D), document.addEventListener("touchend", D), R($e, !0), ce();
  }, E = bo((K) => {
    const Ae = (Xt(K).y - _e) / e(v), ye = pe + Ae * u();
    S.update((Le) => ({
      ...Le,
      top: Math.max(0, Math.min(ye, u()))
    }));
  }), D = () => {
    document.removeEventListener("mousemove", E), document.removeEventListener("touchmove", E), document.removeEventListener("mouseup", D), document.removeEventListener("touchend", D), R($e, !1);
  }, B = (K) => {
    K.preventDefault(), _e = Xt(K).x, pe = n(), document.addEventListener("mousemove", J), document.addEventListener("touchmove", J), document.addEventListener("mouseup", U), document.addEventListener("touchend", U), R(q, !0), ce();
  }, J = bo((K) => {
    const Ae = (Xt(K).x - _e) / e(C), ye = pe + Ae * l();
    S.update((Le) => ({
      ...Le,
      left: Math.max(0, Math.min(ye, l()))
    }));
  }), U = () => {
    document.removeEventListener("mousemove", J), document.removeEventListener("touchmove", J), document.removeEventListener("mouseup", U), document.removeEventListener("touchend", U), R(q, !1);
  };
  W(() => (e($e), e(q)), () => {
    fe.set(e($e) || e(q));
  }), W(() => (o(), Wt), () => {
    R(g, o() - 2 * Wt);
  }), W(() => (o(), r(), e(g)), () => {
    R(m, Math.max(50, o() / r() * e(g)));
  }), W(() => (e(g), e(m)), () => {
    R(v, e(g) - e(m));
  }), W(
    () => (e(v), c(), u()),
    () => {
      R($, Wt + Ut + e(v) * (c() / u()));
    }
  ), W(() => (a(), Wt), () => {
    R(k, a() - 2 * Wt);
  }), W(() => (a(), s(), e(k)), () => {
    R(f, Math.max(50, a() / s() * e(k)));
  }), W(() => (e(k), e(f)), () => {
    R(C, e(k) - e(f));
  }), W(
    () => (e(C), n(), l()),
    () => {
      R(A, Wt + e(C) * (n() / l()));
    }
  ), gt(), qe();
  var N = El(), G = xe(N);
  {
    var ie = (K) => {
      var se = Al();
      let Ae;
      Me(
        (ye) => {
          Ae = nt(se, 1, "v-scrollbar svelte-vcympb", null, Ae, ye), Et(se, `top:${e($) ?? ""}px; height:${e(m) ?? ""}px;`);
        },
        [() => ({ dragging: e($e) })]
      ), Se("mousedown", se, ee), Se("touchstart", se, ee), L(K, se);
    };
    ge(G, (K) => {
      p() && K(ie);
    });
  }
  var be = Y(G, 2);
  {
    var ne = (K) => {
      var se = Ll();
      let Ae;
      Me(
        (ye) => {
          Ae = nt(se, 1, "h-scrollbar svelte-vcympb", null, Ae, ye), Et(se, `left:${e(A) ?? ""}px; width:${e(f) ?? ""}px;`);
        },
        [() => ({ dragging: e(q) })]
      ), Se("mousedown", se, B), Se("touchstart", se, B), L(K, se);
    };
    ge(be, (K) => {
      x() && K(ne);
    });
  }
  L(d, N), We(), _();
}
var Dl = Q("<!> <!>", 1), Tl = Q("<!> <!> <!>", 1), Ol = Q("<!> <!> <!> <!> <!> <!> <!> <!>", 1), zl = Q('<div class="menu-anchor svelte-16xtmtp"></div> <!>', 1);
function Fl(d, t) {
  Ue(t, !1);
  const o = () => w($, "$menu", x), r = () => w(A, "$focusedRowId", x), c = () => w(te, "$visibleColumns", x), u = () => w(v, "$focusedRow", x), a = () => w(S, "$notifications", x), s = () => w(f, "$config", x), n = () => w(P, "$selectedRowCount", x), l = () => w(y, "$copyAllowed", x), i = () => w(T, "$pasteAllowed", x), h = () => w(V, "$selectedCellCount", x), p = () => w(M, "$hasBudibaseIdentifiers", x), [x, I] = rt(), _ = z(), g = z(), m = z(), {
    focusedRow: v,
    menu: $,
    rows: k,
    config: f,
    dispatch: C,
    focusedRowId: A,
    notifications: S,
    hasBudibaseIdentifiers: M,
    selectedRowCount: P,
    copyAllowed: y,
    pasteAllowed: T,
    selectedCellCount: V,
    visibleColumns: te,
    selectedCells: j
  } = Ye("grid");
  let Z = z();
  const ae = (ce) => `left:${ce.left}px; top:${ce.top}px;`, oe = () => {
    $.actions.close(), k.actions.deleteRows([u()]), a().success("Deleted 1 row");
  }, fe = async () => {
    $.actions.close();
    const ce = await k.actions.duplicateRow(u());
    if (ce) {
      const ee = c()[0], E = c()[c().length - 1], D = pt(ce._id, ee.name), B = pt(ce._id, E.name);
      j.actions.selectRange(D, B);
    }
  }, ue = async (ce) => {
    await Ho(ce), a().success("Copied to clipboard");
  }, Ie = async () => {
    $.actions.close(), await k.actions.applyRowChanges({ rowId: r() }), a().success("Generated AI columns");
  };
  W(() => o(), () => {
    R(_, ae(o()));
  }), W(() => (r(), Lt), () => {
    R(g, r() === Lt);
  }), W(() => (c(), _t), () => {
    R(m, c().some((ce) => ce.schema.type === _t.AI));
  }), gt(), qe();
  var _e = zl(), pe = xe(_e);
  Ot(pe, (ce) => R(Z, ce), () => e(Z));
  var $e = Y(pe, 2);
  {
    var q = (ce) => {
      var ee = ft(), E = xe(ee);
      Bo(E, () => e(_), (D) => {
        xo(D, {
          get anchor() {
            return e(Z);
          },
          maxHeight: null,
          $$events: {
            close(...B) {
              $.actions.close?.apply(this, B);
            }
          },
          children: (B, J) => {
            Wo(B, {
              children: (U, N) => {
                var G = ft(), ie = xe(G);
                {
                  var be = (K) => {
                    var se = Dl(), Ae = xe(se);
                    {
                      let Le = re(() => (s(), n(), H(() => !s().canAddRows || n() > 50)));
                      at(Ae, {
                        icon: "copy",
                        get disabled() {
                          return e(Le);
                        },
                        $$events: {
                          click: [
                            () => C("request-bulk-duplicate"),
                            function(...Ee) {
                              $.actions.close?.apply(this, Ee);
                            }
                          ]
                        },
                        children: (Ee, Ve) => {
                          Fe();
                          var Be = et();
                          Me(() => vt(Be, `Duplicate ${n() ?? ""} rows`)), L(Ee, Be);
                        },
                        $$slots: { default: !0 }
                      });
                    }
                    var ye = Y(Ae, 2);
                    {
                      let Le = re(() => (s(), H(() => !s().canDeleteRows)));
                      at(ye, {
                        icon: "trash",
                        get disabled() {
                          return e(Le);
                        },
                        $$events: {
                          click: [
                            () => C("request-bulk-delete"),
                            function(...Ee) {
                              $.actions.close?.apply(this, Ee);
                            }
                          ]
                        },
                        children: (Ee, Ve) => {
                          Fe();
                          var Be = et();
                          Me(() => vt(Be, `Delete ${n() ?? ""} rows`)), L(Ee, Be);
                        },
                        $$slots: { default: !0 }
                      });
                    }
                    L(K, se);
                  }, ne = (K) => {
                    var se = ft(), Ae = xe(se);
                    {
                      var ye = (Ee) => {
                        var Ve = Tl(), Be = xe(Ve);
                        {
                          let it = re(() => !l());
                          at(Be, {
                            icon: "copy",
                            get disabled() {
                              return e(it);
                            },
                            $$events: {
                              click: [
                                () => C("copy"),
                                function(...Ge) {
                                  $.actions.close?.apply(this, Ge);
                                }
                              ]
                            },
                            children: (Ge, mt) => {
                              Fe();
                              var Qe = et("Copy");
                              L(Ge, Qe);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        var Ne = Y(Be, 2);
                        {
                          let it = re(() => !i());
                          at(Ne, {
                            icon: "clipboard-text",
                            get disabled() {
                              return e(it);
                            },
                            $$events: {
                              click: [
                                () => C("paste"),
                                function(...Ge) {
                                  $.actions.close?.apply(this, Ge);
                                }
                              ]
                            },
                            children: (Ge, mt) => {
                              Fe();
                              var Qe = et("Paste");
                              L(Ge, Qe);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        var Je = Y(Ne, 2);
                        {
                          let it = re(() => (s(), H(() => !s().canEditRows)));
                          at(Je, {
                            icon: "trash",
                            get disabled() {
                              return e(it);
                            },
                            $$events: { click: () => C("request-bulk-delete") },
                            children: (Ge, mt) => {
                              Fe();
                              var Qe = et();
                              Me(() => vt(Qe, `Delete ${h() ?? ""} cells`)), L(Ge, Qe);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        L(Ee, Ve);
                      }, Le = (Ee) => {
                        var Ve = Ol(), Be = xe(Ve);
                        {
                          let ke = re(() => !l());
                          at(Be, {
                            icon: "copy",
                            get disabled() {
                              return e(ke);
                            },
                            $$events: {
                              click: [
                                () => C("copy"),
                                function(...ve) {
                                  $.actions.close?.apply(this, ve);
                                }
                              ]
                            },
                            children: (ve, De) => {
                              Fe();
                              var Te = et("Copy");
                              L(ve, Te);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        var Ne = Y(Be, 2);
                        {
                          let ke = re(() => !i());
                          at(Ne, {
                            icon: "clipboard-text",
                            get disabled() {
                              return e(ke);
                            },
                            $$events: {
                              click: [
                                () => C("paste"),
                                function(...ve) {
                                  $.actions.close?.apply(this, ve);
                                }
                              ]
                            },
                            children: (ve, De) => {
                              Fe();
                              var Te = et("Paste");
                              L(ve, Te);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        var Je = Y(Ne, 2);
                        {
                          let ke = re(() => (e(g), s(), H(() => e(g) || !s().canEditRows || !s().canExpandRows)));
                          at(Je, {
                            icon: "arrows-out-simple",
                            get disabled() {
                              return e(ke);
                            },
                            $$events: {
                              click: [
                                () => C("edit-row", u()),
                                function(...ve) {
                                  $.actions.close?.apply(this, ve);
                                }
                              ]
                            },
                            children: (ve, De) => {
                              Fe();
                              var Te = et("Edit row in modal");
                              L(ve, Te);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        var it = Y(Je, 2);
                        {
                          let ke = re(() => (e(g), u(), p(), H(() => e(g) || !u()?._id || !p())));
                          at(it, {
                            icon: "copy",
                            get disabled() {
                              return e(ke);
                            },
                            $$events: {
                              click: [
                                () => ue(u()?._id),
                                function(...ve) {
                                  $.actions.close?.apply(this, ve);
                                }
                              ]
                            },
                            children: (ve, De) => {
                              Fe();
                              var Te = et("Copy row _id");
                              L(ve, Te);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        var Ge = Y(it, 2);
                        {
                          let ke = re(() => (e(g), u(), p(), H(() => e(g) || !u()?._rev || !p())));
                          at(Ge, {
                            icon: "copy",
                            get disabled() {
                              return e(ke);
                            },
                            $$events: {
                              click: [
                                () => ue(u()?._rev),
                                function(...ve) {
                                  $.actions.close?.apply(this, ve);
                                }
                              ]
                            },
                            children: (ve, De) => {
                              Fe();
                              var Te = et("Copy row _rev");
                              L(ve, Te);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        var mt = Y(Ge, 2);
                        {
                          let ke = re(() => (e(g), s(), H(() => e(g) || !s().canAddRows)));
                          at(mt, {
                            icon: "copy",
                            get disabled() {
                              return e(ke);
                            },
                            $$events: { click: fe },
                            children: (ve, De) => {
                              Fe();
                              var Te = et("Duplicate row");
                              L(ve, Te);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        var Qe = Y(mt, 2);
                        {
                          let ke = re(() => (e(g), s(), H(() => e(g) || !s().canDeleteRows)));
                          at(Qe, {
                            icon: "trash",
                            get disabled() {
                              return e(ke);
                            },
                            $$events: { click: oe },
                            children: (ve, De) => {
                              Fe();
                              var Te = et("Delete row");
                              L(ve, Te);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                        var Ft = Y(Qe, 2);
                        {
                          var Dt = (ke) => {
                            {
                              let ve = re(() => e(g) || !e(m));
                              at(ke, {
                                icon: "magic-wand",
                                get disabled() {
                                  return e(ve);
                                },
                                $$events: { click: Ie },
                                children: (De, Te) => {
                                  Fe();
                                  var yt = et("Generate AI Columns");
                                  L(De, yt);
                                },
                                $$slots: { default: !0 }
                              });
                            }
                          };
                          ge(Ft, (ke) => {
                            s(), H(() => s().aiEnabled) && ke(Dt);
                          });
                        }
                        L(Ee, Ve);
                      };
                      ge(
                        Ae,
                        (Ee) => {
                          o(), H(() => o().multiCellMode) ? Ee(ye) : Ee(Le, !1);
                        },
                        !0
                      );
                    }
                    L(K, se);
                  };
                  ge(ie, (K) => {
                    o(), H(() => o().multiRowMode) ? K(be) : K(ne, !1);
                  });
                }
                L(U, G);
              },
              $$slots: { default: !0 }
            });
          },
          $$slots: { default: !0 }
        });
      }), L(ce, ee);
    };
    ge($e, (ce) => {
      o(), H(() => o().visible) && ce(q);
    });
  }
  Me(() => Et(pe, e(_))), L(d, _e), We(), I();
}
var Nl = Q("<div> </div>"), Hl = Q("<div><!></div> <!>", 1), jl = Q('<div class="delete svelte-2znkzf"><!></div>'), Vl = Q("<div><!></div>"), Bl = Q("<div><!> <!></div>");
function co(d, t) {
  const o = Ro(t);
  Ue(t, !1);
  const r = () => w(I, "$config", c), [c, u] = rt();
  let a = F(t, "row", 8), s = F(t, "rowFocused", 8, !1), n = F(t, "rowHovered", 8, !1), l = F(t, "rowSelected", 8, !1), i = F(t, "expandable", 8, !1), h = F(t, "disableNumber", 8, !1), p = F(t, "defaultHeight", 8, !1), x = F(t, "disabled", 8, !1);
  const { config: I, dispatch: _, selectedRows: g } = Ye("grid"), m = To(), v = (f) => {
    f.stopPropagation(), m("select");
    const C = a()?._id;
    C && (f.shiftKey ? l() ? f.preventDefault() : g.actions.bulkSelectRows(C) : g.actions.toggleRow(C));
  }, $ = (f) => {
    f.stopPropagation(), _("request-bulk-delete");
  }, k = (f) => {
    f.stopPropagation(), m("expand");
  };
  qe();
  {
    let f = re(() => s() || n()), C = re(() => (O(a()), H(() => a()?.__idx))), A = re(() => (O(a()), H(() => a()?.__metadata?.row)));
    Gt(d, {
      get width() {
        return Jt;
      },
      get highlighted() {
        return e(f);
      },
      get selected() {
        return l();
      },
      get defaultHeight() {
        return p();
      },
      get rowIdx() {
        return e(C);
      },
      get metadata() {
        return e(A);
      },
      children: (S, M) => {
        var P = Bl();
        let y;
        var T = de(P);
        {
          var V = (oe) => {
            var fe = ft(), ue = xe(fe);
            Ct(ue, t, "default", {}, null), L(oe, fe);
          }, te = (oe) => {
            var fe = Hl(), ue = xe(fe);
            let Ie;
            var _e = de(ue);
            ks(_e, {
              get value() {
                return l();
              },
              get disabled() {
                return x();
              }
            }), le(ue);
            var pe = Y(ue, 2);
            {
              var $e = (q) => {
                var ce = Nl();
                let ee;
                var E = de(ce, !0);
                le(ce), Me(
                  (D) => {
                    ee = nt(ce, 1, "number svelte-2znkzf", null, ee, D), vt(E, (O(a()), H(() => a().__idx + 1)));
                  },
                  [
                    () => ({ visible: !(l() || n() || s()) })
                  ]
                ), L(q, ce);
              };
              ge(pe, (q) => {
                h() || q($e);
              });
            }
            Me((q) => Ie = nt(ue, 1, "checkbox svelte-2znkzf", null, Ie, q), [
              () => ({
                visible: h() || l() || n() || s()
              })
            ]), Se("click", ue, v), L(oe, fe);
          };
          ge(T, (oe) => {
            H(() => o.default) ? oe(V) : oe(te, !1);
          });
        }
        var j = Y(T, 2);
        {
          var Z = (oe) => {
            var fe = jl(), ue = de(fe);
            Tt(ue, {
              name: "trash",
              size: "S",
              color: "var(--spectrum-global-color-red-400)"
            }), le(fe), Se("click", fe, $), L(oe, fe);
          }, ae = (oe) => {
            var fe = Vl();
            let ue;
            var Ie = de(fe);
            Tt(Ie, {
              size: "S",
              name: "arrows-out-simple",
              hoverable: !0,
              $$events: { click: k }
            }), le(fe), Me((_e) => ue = nt(fe, 1, "expand svelte-2znkzf", null, ue, _e), [() => ({ visible: r().canExpandRows && i() })]), L(oe, fe);
          };
          ge(j, (oe) => {
            O(l()), r(), H(() => l() && r().canDeleteRows) ? oe(Z) : oe(ae, !1);
          });
        }
        le(P), Me((oe) => y = nt(P, 1, "gutter svelte-2znkzf", null, y, oe), [() => ({ selectable: r().canSelectRows })]), L(S, P);
      },
      $$slots: { default: !0 }
    });
  }
  We(), u();
}
var Ul = Q('<div class="key svelte-1l9ya9s"> </div>'), ql = Q("<div></div>");
function yo(d, t) {
  Ue(t, !1);
  const o = z();
  let r = F(t, "keybind", 8), c = F(t, "padded", 8, !1), u = F(t, "overlay", 8, !1);
  const a = (l) => l?.split("+").map((i) => i.toLowerCase() === "ctrl" ? navigator.platform.startsWith("Mac") ? "⌘" : i : i.toLowerCase() === "enter" ? "↵" : i);
  W(() => O(r()), () => {
    R(o, a(r()));
  }), gt(), qe();
  var s = ql();
  let n;
  Nt(s, 5, () => e(o), Ht, (l, i) => {
    var h = Ul(), p = de(h, !0);
    le(h), Me(() => vt(p, e(i))), L(l, h);
  }), le(s), Me((l) => n = nt(s, 1, "keys svelte-1l9ya9s", null, n, l), [() => ({ padded: c(), overlay: u() })]), L(d, s), We();
}
var Wl = Q('<div class="row svelte-4ow95q"><!> <!></div>'), Gl = Q('<div class="row blank svelte-4ow95q"><!> <!></div>'), Kl = Q("<!> <!>", 1), Xl = Q('<div><div class="header row svelte-4ow95q"><!> <!></div>  <!></div>');
function Yl(d, t) {
  Ue(t, !1);
  const o = () => w(C, "$rows", m), r = () => w(A, "$selectedRows", m), c = () => w(S, "$displayColumn", m), u = () => w(Z, "$scrollLeft", m), a = () => w(M, "$renderedRows", m), s = () => w(y, "$hoveredRowId", m), n = () => w(Ie, "$selectedCellCount", m), l = () => w(ue, "$isSelectingCells", m), i = () => w(j, "$focusedRow", m), h = () => w(fe, "$isDragging", m), p = () => w(V, "$selectedCellMap", m), x = () => w(P, "$focusedCellId", m), I = () => w(te, "$userCellMap", m), _ = () => w(oe, "$contentLines", m), g = () => w(T, "$config", m), [m, v] = rt(), $ = z(), k = z(), f = z(), {
    rows: C,
    selectedRows: A,
    displayColumn: S,
    renderedRows: M,
    focusedCellId: P,
    hoveredRowId: y,
    config: T,
    selectedCellMap: V,
    userCellMap: te,
    focusedRow: j,
    scrollLeft: Z,
    dispatch: ae,
    contentLines: oe,
    isDragging: fe,
    isSelectingCells: ue,
    selectedCellCount: Ie
  } = Ye("grid"), _e = () => {
    if (e(k) === e($))
      tt(A, {});
    else {
      let J = {};
      o().forEach((U) => {
        J[U._id] = !0;
      }), tt(A, J);
    }
  };
  W(() => o(), () => {
    R($, o().length);
  }), W(() => r(), () => {
    R(k, Object.values(r()).length);
  }), W(() => c(), () => {
    R(f, Jt + (c()?.width || 0));
  }), gt(), qe();
  var pe = Xl();
  let $e;
  var q = de(pe), ce = de(q);
  {
    let B = re(() => e(k) && e(k) === e($)), J = re(() => (a(), H(() => !a().length)));
    co(ce, {
      disableNumber: !0,
      defaultHeight: !0,
      get rowSelected() {
        return e(B);
      },
      get disabled() {
        return e(J);
      },
      $$events: { select: _e }
    });
  }
  var ee = Y(ce, 2);
  {
    var E = (B) => {
      Yo(B, {
        get column() {
          return c();
        },
        orderable: !1,
        idx: "sticky",
        children: (J, U) => {
          var N = ft(), G = xe(N);
          Ct(G, t, "edit-column", {}, null), L(J, N);
        },
        $$slots: { default: !0 }
      });
    };
    ge(ee, (B) => {
      c() && B(E);
    });
  }
  le(q);
  var D = Y(q, 2);
  oo(D, {
    scrollVertically: !0,
    attachHandlers: !0,
    children: (B, J) => {
      var U = Kl(), N = xe(U);
      Nt(N, 1, a, Ht, (be, ne, K) => {
        const se = re(() => (r(), e(ne), H(() => !!r()[e(ne)._id]))), Ae = re(() => (s(), e(ne), n(), l(), H(() => s() === e(ne)._id && (!n() || !l())))), ye = re(() => (i(), e(ne), H(() => i()?._id === e(ne)._id))), Le = re(() => (O(pt), e(ne), c(), H(() => pt(e(ne)._id, c()?.name))));
        var Ee = Wl(), Ve = de(Ee);
        co(Ve, {
          get row() {
            return e(ne);
          },
          get rowFocused() {
            return e(ye);
          },
          get rowHovered() {
            return e(Ae);
          },
          get rowSelected() {
            return e(se);
          }
        });
        var Be = Y(Ve, 2);
        {
          var Ne = (Je) => {
            {
              let it = re(() => e(Ae) || e(ye)), Ge = re(() => x() === e(Le));
              mo(Je, {
                get row() {
                  return e(ne);
                },
                get cellId() {
                  return e(Le);
                },
                get rowFocused() {
                  return e(ye);
                },
                get rowSelected() {
                  return e(se);
                },
                get cellSelected() {
                  return p(), O(e(Le)), H(() => p()[e(Le)]);
                },
                get highlighted() {
                  return e(it);
                },
                get rowIdx() {
                  return e(ne), H(() => e(ne).__idx);
                },
                topRow: K === 0,
                get focused() {
                  return e(Ge);
                },
                get selectedUser() {
                  return I(), O(e(Le)), H(() => I()[e(Le)]);
                },
                get width() {
                  return c(), H(() => c().width);
                },
                get column() {
                  return c();
                },
                get contentLines() {
                  return _();
                },
                get isSelectingCells() {
                  return l();
                }
              });
            }
          };
          ge(Be, (Je) => {
            c() && Je(Ne);
          });
        }
        le(Ee), Se("mouseenter", Ee, function(...Je) {
          (h() ? null : () => tt(y, e(ne)._id))?.apply(this, Je);
        }), Se("mouseleave", Ee, function(...Je) {
          (h() ? null : () => tt(y, null))?.apply(this, Je);
        }), Se("click", Ee, () => ae("rowclick", C.actions.cleanRow(e(ne)))), L(be, Ee);
      });
      var G = Y(N, 2);
      {
        var ie = (be) => {
          var ne = Gl(), K = de(ne);
          {
            let ye = re(() => s() === Yt);
            co(K, {
              get rowHovered() {
                return e(ye);
              },
              children: (Le, Ee) => {
                Tt(Le, { name: "plus", color: "var(--spectrum-global-color-gray-500)" });
              },
              $$slots: { default: !0 }
            });
          }
          var se = Y(K, 2);
          {
            var Ae = (ye) => {
              {
                let Le = re(() => s() === Yt);
                Gt(ye, {
                  get width() {
                    return c(), H(() => c().width);
                  },
                  get highlighted() {
                    return e(Le);
                  },
                  children: (Ee, Ve) => {
                    yo(Ee, { padded: !0, keybind: "Ctrl+Enter" });
                  },
                  $$slots: { default: !0 }
                });
              }
            };
            ge(se, (ye) => {
              c() && ye(Ae);
            });
          }
          le(ne), Se("mouseenter", ne, function(...ye) {
            (h() ? null : () => tt(y, Yt))?.apply(this, ye);
          }), Se("mouseleave", ne, function(...ye) {
            (h() ? null : () => tt(y, null))?.apply(this, ye);
          }), Se("click", ne, () => ae("add-row-inline")), L(be, ne);
        };
        ge(G, (be) => {
          g(), H(() => g().canAddRows) && be(ie);
        });
      }
      L(B, U);
    },
    $$slots: { default: !0 }
  }), le(pe), Me(
    (B) => {
      $e = nt(pe, 1, "sticky-column svelte-4ow95q", null, $e, B), Et(pe, `flex: 0 0 ${e(f) ?? ""}px`);
    },
    [() => ({ scrolled: u() > 0 })]
  ), L(d, pe), We(), v();
}
var Jl = Q('<div class="users svelte-hpmhfu"></div>');
function Ql(d, t) {
  Ue(t, !1);
  const o = () => w(a, "$users", r), [r, c] = rt(), u = z(), { users: a } = Ye("grid"), s = (l) => {
    let i = {};
    return l?.forEach((h) => {
      i[h.email] = h;
    }), Object.values(i);
  };
  W(() => o(), () => {
    R(u, s(o()));
  }), gt(), qe();
  var n = Jl();
  Nt(n, 5, () => e(u), Ht, (l, i) => {
    Us(l, {
      get user() {
        return e(i);
      }
    });
  }), le(n), L(d, n), We(), c();
}
function Zl(d, t) {
  Ue(t, !1);
  const o = () => w(P, "$gridFocused", _), r = () => w(y, "$keyboardBlocked", _), c = () => w(S, "$config", _), u = () => w(T, "$selectedCellCount", _), a = () => w(v, "$focusedCellId", _), s = () => w(A, "$selectedRowCount", _), n = () => w(f, "$focusedCellAPI", _), l = () => w(m, "$rows", _), i = () => w($, "$visibleColumns", _), h = () => w(te, "$cellSelection", _), p = () => w(j, "$columnLookupMap", _), x = () => w(Z, "$focusedRowId", _), I = () => w(k, "$rowLookupMap", _), [_, g] = rt(), {
    rows: m,
    focusedCellId: v,
    visibleColumns: $,
    rowLookupMap: k,
    focusedCellAPI: f,
    dispatch: C,
    selectedRowCount: A,
    config: S,
    menu: M,
    gridFocused: P,
    keyboardBlocked: y,
    selectedCellCount: T,
    selectedCells: V,
    cellSelection: te,
    columnLookupMap: j,
    focusedRowId: Z
  } = Ye("grid"), ae = [
    ".spectrum-Modal",
    ".date-time-popover",
    "#builder-side-panel-container",
    "[data-grid-ignore]"
  ], oe = (ee) => {
    if (!o() || r())
      return;
    if (ee.target?.closest) {
      for (let B of ae)
        if (ee.target.closest(B))
          return;
    }
    if (ee.key === "Enter" && ee.isComposing)
      return;
    const E = (B) => {
      ee.preventDefault(), B();
    };
    if (ee.metaKey || ee.ctrlKey)
      switch (ee.key) {
        case "c":
          return E(() => C("copy"));
        case "v":
          return C("paste");
        case "Enter":
          return E(() => {
            c().canAddRows && C("add-row-inline");
          });
      }
    if (u())
      switch (ee.key) {
        case "Escape":
          return E(V.actions.clear);
        case "Delete":
        case "Backspace":
          return E(() => C("request-bulk-delete"));
      }
    if (!a()) {
      ee.key === "Tab" || ee.key?.startsWith("Arrow") ? E(fe) : (ee.key === "Delete" || ee.key === "Backspace") && E(() => {
        s() && c().canDeleteRows && C("request-bulk-delete");
      });
      return;
    }
    const D = n();
    if (ee.key === "Escape")
      return E(() => {
        D?.isActive() ? setTimeout(D?.blur, 10) : tt(v, null), M.actions.close();
      });
    if (ee.key === "Tab")
      return E(() => {
        D?.blur?.(), ue(1);
      });
    if (!(!D?.isReadonly() && D?.onKeyDown?.(ee)) && !(ee.metaKey || ee.ctrlKey))
      switch (ee.key) {
        case "ArrowLeft":
          return E(() => ue(-1, ee.shiftKey));
        case "ArrowRight":
          return E(() => ue(1, ee.shiftKey));
        case "ArrowUp":
          return E(() => Ie(-1, ee.shiftKey));
        case "ArrowDown":
          return E(() => Ie(1, ee.shiftKey));
        case "Delete":
        case "Backspace":
          return E(() => {
            s() && c().canDeleteRows ? C("request-bulk-delete") : _e();
          });
        case "Enter":
          return E(pe);
        default:
          return E(() => ce(ee.key, ee.which));
      }
  }, fe = () => {
    const ee = l()[0];
    if (!ee)
      return;
    const E = i()[0];
    E && v.set(pt(ee._id, E.name));
  }, ue = (ee, E) => {
    let D = a();
    if (E && u() && (D = h().targetCellId), !D)
      return;
    const { rowId: B, field: J } = Pt(D), U = p()[J].__idx, N = i()[U + ee];
    if (!N)
      return;
    const G = pt(B, N.name);
    E ? u() ? (V.actions.updateTarget(G), u() || v.set(G)) : V.actions.selectRange(D, G) : v.set(G);
  }, Ie = (ee, E) => {
    if (x() === Lt)
      return;
    let D = a();
    if (E && u() && (D = h().targetCellId), !D)
      return;
    const { rowId: B, field: J } = Pt(D), U = I()[B].__idx, N = l()[U + ee];
    if (!N)
      return;
    const G = pt(N._id, J);
    E ? u() ? (V.actions.updateTarget(G), u() || v.set(G)) : V.actions.selectRange(D, G) : v.set(G);
  }, _e = Vo(
    () => {
      n()?.isReadonly() || n().setValue(null);
    },
    100
  ), pe = () => {
    n()?.isReadonly() || n()?.focus?.();
  }, $e = (ee) => ee >= 48 && ee <= 57, q = (ee) => ee >= 65 && ee <= 90, ce = (ee, E) => {
    if (n() && !n().isReadonly()) {
      const D = n().getType();
      D === "number" && $e(E) ? (n().setValue(parseInt(ee), { apply: !1 }), n().focus()) : ["string", "barcodeqr", "longform"].includes(D) && (q(E) || $e(E)) && (n().setValue(ee, { apply: !1 }), n().focus());
    }
  };
  zt(() => (document.addEventListener("keydown", oe), () => {
    document.removeEventListener("keydown", oe);
  })), qe(), We(), g();
}
var ea = Q("<div><!></div>"), ta = Q('<div class="loading-overlay svelte-enf801"></div>'), oa = Q("<!> <!>", 1), sa = Q(`<div class="readonly-overlay svelte-enf801">Can't edit auto column</div>`), na = Q('<div class="loading-overlay svelte-enf801"></div>'), ra = Q("<!> <!>", 1), la = Q(`<div class="readonly-overlay svelte-enf801">Can't edit auto column</div>`), aa = Q('<div class="loading-overlay svelte-enf801"></div>'), ia = Q("<!> <!>", 1), ca = Q('<div class="row svelte-enf801"></div>'), da = Q('<div class="button-with-keys svelte-enf801">Save <!></div>'), ua = Q('<div class="button-with-keys svelte-enf801">Cancel <!></div>'), fa = Q('<div><div class="underlay sticky svelte-enf801"></div> <div class="underlay svelte-enf801"></div> <div class="sticky-column svelte-enf801"><div class="row svelte-enf801"><!> <!></div></div> <div class="normal-columns svelte-enf801"><!></div> <div><!> <!></div></div>'), va = Q("<!> <!>", 1);
function ga(d, t) {
  Ue(t, !1);
  const o = () => w(be, "$visibleColumns", C), r = () => w(ae, "$displayColumn", C), c = () => w(_e, "$datasource", C), u = () => w(D, "$selectedRows", C), a = () => w(ue, "$rows", C), s = () => w($e, "$renderedRows", C), n = () => w(ee, "$hasNextPage", C), l = () => w(ce, "$rowHeight", C), i = () => w(ne, "$scrollTop", C), h = () => w(K, "$height", C), p = () => w(Z, "$focusedCellId", C), x = () => w(E, "$maxScrollTop", C), I = () => w(Ie, "$focusedCellAPI", C), _ = () => w(B, "$loaded", C), g = () => w(N, "$filter", C), m = () => w(G, "$inlineFilters", C), v = () => w(J, "$refreshing", C), $ = () => w(U, "$config", C), k = () => w(q, "$scrollableColumns", C), f = () => w(ie, "$columnRenderMap", C), [C, A] = rt(), S = z(), M = z(), P = z(), y = z(), T = z(), V = z(), te = z(), {
    hoveredRowId: j,
    focusedCellId: Z,
    displayColumn: ae,
    scroll: oe,
    dispatch: fe,
    rows: ue,
    focusedCellAPI: Ie,
    datasource: _e,
    subscribe: pe,
    renderedRows: $e,
    scrollableColumns: q,
    rowHeight: ce,
    hasNextPage: ee,
    maxScrollTop: E,
    selectedRows: D,
    loaded: B,
    refreshing: J,
    config: U,
    filter: N,
    inlineFilters: G,
    columnRenderMap: ie,
    visibleColumns: be,
    scrollTop: ne,
    height: K
  } = Ye("grid");
  let se = z(!1), Ae = z(!1), ye = z(), Le = z(0);
  const Ee = (ke, ve, De, Te) => ke ? 0 : (R(Le, ve * De - Te % De), ve !== 0 && R(Le, e(Le) - 1), e(Le)), Ve = async () => {
    R(Ae, !0), tt(Z, null), await Qt();
    const ke = e(Le) ? void 0 : 0;
    let ve = { ...e(ye) };
    delete ve._isNewRow;
    const De = await ue.actions.addRow({ row: ve, idx: ke });
    De && (Be(), e(S) && tt(Z, pt(De._id, e(S).name))), R(Ae, !1);
  }, Be = () => {
    R(Ae, !1), R(se, !1), tt(Z, null), tt(j, null), document.removeEventListener("keydown", Ge);
  }, Ne = async () => {
    if (e(se) && !e(Ae)) {
      await Ve();
      return;
    }
    e(se) || !e(S) || (n() || oe.update((ke) => ({ ...ke, top: x() })), R(ye, { _isNewRow: !0 }), R(se, !0), tt(j, Lt), e(S) && tt(Z, pt(Lt, e(S).name)), document.addEventListener("keydown", Ge));
  }, Je = ({ column: ke, value: ve }) => {
    Ms(ye, e(ye)[ke] = ve);
  }, it = () => {
    Be(), fe("add-row");
  }, Ge = (ke) => {
    e(se) && ke.key === "Escape" && (I()?.isActive() || (ke.preventDefault(), Be()));
  };
  zt(() => pe("add-row-inline", Ne)), So(() => {
    document.removeEventListener("keydown", Ge);
  }), W(() => o(), () => {
    R(S, o()[0]);
  }), W(() => r(), () => {
    R(M, Jt + (r()?.width || 0));
  }), W(() => c(), () => {
    c(), R(se, !1);
  }), W(() => u(), () => {
    R(P, Object.values(u()).length);
  }), W(() => a(), () => {
    R(y, !a().length);
  }), W(() => s(), () => {
    R(T, s().length);
  }), W(
    () => (n(), e(T), l(), i()),
    () => {
      R(Le, Ee(n(), e(T), l(), i()));
    }
  ), W(() => (h(), e(Le), l()), () => {
    R(V, h() - e(Le) - l());
  }), W(() => (e(V), Ut), () => {
    R(te, e(V) < 36 + Ut);
  }), gt(), qe();
  var mt = va(), Qe = xe(mt);
  {
    let ke = re(() => (e(y), _(), g(), m(), v(), H(() => e(y) && _() && !g()?.length && !m()?.length && !v())));
    Go(Qe, {
      text: "Click here to create your first row",
      get condition() {
        return e(ke);
      },
      get type() {
        return O(Co), H(() => Co.Info);
      },
      children: (ve, De) => {
        var Te = ft(), yt = xe(Te);
        {
          var me = (he) => {
            var X = ea();
            let Re;
            var Ce = de(X);
            Tt(Ce, { name: "plus", size: "S" }), le(X), Me((Pe) => Re = nt(X, 1, "new-row-fab svelte-enf801", null, Re, Pe), [() => ({ offset: !r() })]), Se("click", X, () => fe("add-row-inline")), Vt(3, X, () => Bt, () => ({ duration: 130 })), L(he, X);
          };
          ge(yt, (he) => {
            e(se), e(P), $(), H(() => !e(se) && !e(P) && $().canAddRows) && he(me);
          });
        }
        L(ve, Te);
      },
      $$slots: { default: !0 }
    });
  }
  var Ft = Y(Qe, 2);
  {
    var Dt = (ke) => {
      var ve = fa();
      let De;
      var Te = de(ve), yt = Y(Te, 2), me = Y(yt, 2), he = de(me), X = de(he);
      co(X, {
        expandable: !0,
        rowHovered: !0,
        $$events: { expand: it },
        children: (Ke, ct) => {
          var Ze = oa(), xt = xe(Ze);
          Tt(xt, { name: "plus", color: "var(--spectrum-global-color-gray-500)" });
          var dt = Y(xt, 2);
          {
            var Xe = (ze) => {
              var st = ta();
              Vt(1, st, () => Bt, () => ({ duration: 130 })), L(ze, st);
            };
            ge(dt, (ze) => {
              e(Ae) && ze(Xe);
            });
          }
          L(Ke, Ze);
        },
        $$slots: { default: !0 }
      });
      var Re = Y(X, 2);
      {
        var Ce = (Ke) => {
          const ct = re(() => (O(pt), O(Lt), r(), H(() => pt(Lt, r().name))));
          {
            let Ze = re(() => p() === e(ct)), xt = re(() => e(Le) === 0);
            mo(Ke, {
              get cellId() {
                return e(ct);
              },
              rowFocused: !0,
              get column() {
                return r();
              },
              get row() {
                return e(ye);
              },
              get focused() {
                return e(Ze);
              },
              get width() {
                return r(), H(() => r().width);
              },
              updateValue: Je,
              get topRow() {
                return e(xt);
              },
              children: (dt, Xe) => {
                var ze = ra(), st = xe(ze);
                {
                  var lt = (He) => {
                    var je = sa();
                    L(He, je);
                  };
                  ge(st, (He) => {
                    r(), H(() => r()?.schema?.autocolumn) && He(lt);
                  });
                }
                var wt = Y(st, 2);
                {
                  var At = (He) => {
                    var je = na();
                    Vt(1, je, () => Bt, () => ({ duration: 130 })), L(He, je);
                  };
                  ge(wt, (He) => {
                    e(Ae) && He(At);
                  });
                }
                L(dt, ze);
              },
              $$slots: { default: !0 }
            });
          }
        };
        ge(Re, (Ke) => {
          r() && Ke(Ce);
        });
      }
      le(he), le(me);
      var Pe = Y(me, 2), ht = de(Pe);
      oo(ht, {
        scrollHorizontally: !0,
        attachHandlers: !0,
        children: (Ke, ct) => {
          var Ze = ca();
          Nt(Ze, 5, k, Ht, (xt, dt) => {
            const Xe = re(() => (O(pt), O(Lt), e(dt), H(() => pt(Lt, e(dt).name))));
            {
              let ze = re(() => p() === e(Xe)), st = re(() => e(Le) === 0), lt = re(() => (f(), e(dt), H(() => !f()[e(dt).name])));
              mo(xt, {
                get cellId() {
                  return e(Xe);
                },
                get column() {
                  return e(dt);
                },
                updateValue: Je,
                rowFocused: !0,
                get row() {
                  return e(ye);
                },
                get focused() {
                  return e(ze);
                },
                get width() {
                  return e(dt), H(() => e(dt).width);
                },
                get topRow() {
                  return e(st);
                },
                get hidden() {
                  return e(lt);
                },
                children: (wt, At) => {
                  var He = ia(), je = xe(He);
                  {
                    var It = (bt) => {
                      var qt = la();
                      L(bt, qt);
                    };
                    ge(je, (bt) => {
                      e(dt), H(() => e(dt)?.schema?.autocolumn) && bt(It);
                    });
                  }
                  var $t = Y(je, 2);
                  {
                    var ut = (bt) => {
                      var qt = aa();
                      Vt(1, qt, () => Bt, () => ({ duration: 130 })), L(bt, qt);
                    };
                    ge($t, (bt) => {
                      e(Ae) && bt(ut);
                    });
                  }
                  L(wt, He);
                },
                $$slots: { default: !0 }
              });
            }
          }), le(Ze), L(Ke, Ze);
        },
        $$slots: { default: !0 }
      }), le(Pe);
      var Rt = Y(Pe, 2);
      let Mt;
      var ot = de(Rt);
      uo(ot, {
        size: "M",
        cta: !0,
        get disabled() {
          return e(Ae);
        },
        $$events: { click: Ve },
        children: (Ke, ct) => {
          var Ze = da(), xt = Y(de(Ze));
          yo(xt, { overlay: !0, keybind: "Ctrl+Enter" }), le(Ze), L(Ke, Ze);
        },
        $$slots: { default: !0 }
      });
      var St = Y(ot, 2);
      uo(St, {
        size: "M",
        secondary: !0,
        newStyles: !0,
        $$events: { click: Be },
        children: (Ke, ct) => {
          var Ze = ua(), xt = Y(de(Ze));
          yo(xt, { keybind: "Esc" }), le(Ze), L(Ke, Ze);
        },
        $$slots: { default: !0 }
      }), le(Rt), le(ve), Me(
        (Ke, ct) => {
          De = nt(ve, 1, "new-row svelte-enf801", null, De, Ke), Et(ve, `--offset:${e(Le) ?? ""}px; --sticky-width:${e(M) ?? ""}px;`), Mt = nt(Rt, 1, "buttons svelte-enf801", null, Mt, ct);
        },
        [
          () => ({ floating: e(Le) > 0 }),
          () => ({ flip: e(te) })
        ]
      ), Vt(3, Te, () => Bt, () => ({ duration: 130 })), Vt(3, yt, () => Bt, () => ({ duration: 130 })), Vt(3, me, () => Bt, () => ({ duration: 130 })), Vt(3, Pe, () => Bt, () => ({ duration: 130 })), Vt(3, Rt, () => Bt, () => ({ duration: 130 })), L(ke, ve);
    };
    ge(Ft, (ke) => {
      e(se) && ke(Dt);
    });
  }
  L(d, mt), We(), A();
}
const ma = (d) => {
  const { rows: t, datasource: o, users: r, focusedCellId: c, definition: u, API: a } = d, s = As("/socket/grid"), n = (l) => {
    if (!s.connected)
      return;
    const i = a.getAppID();
    s.emit(
      so.SelectDatasource,
      {
        datasource: l,
        appId: i
      },
      ({ users: h }) => {
        r.set(h);
      }
    );
  };
  return s.on("connect", () => {
    n(b(o));
  }), s.on("connect_error", (l) => {
    console.error("Failed to connect to grid websocket:", l.message);
  }), s.onOther(ko.UserUpdate, ({ user: l }) => {
    r.actions.updateUser(l);
  }), s.onOther(ko.UserDisconnect, ({ sessionId: l }) => {
    r.actions.removeUser(l);
  }), s.onOther(so.RowChange, async ({ id: l, row: i }) => {
    l ? t.actions.replaceRow(l, i) : i.id && await t.actions.refreshRow(i.id);
  }), s.onOther(
    so.DatasourceChange,
    ({ datasource: l }) => {
      l && u.set(l);
    }
  ), s.on(
    so.DatasourceChange,
    ({ datasource: l }) => {
      l?.name !== b(u)?.name && u.set(l);
    }
  ), o.subscribe(n), c.subscribe((l) => {
    s.emit(so.SelectCell, { cellId: l });
  }), () => s?.disconnect();
};
var ha = Q('<div class="controls svelte-waj8o3"><div class="controls-left svelte-waj8o3"><!></div> <div class="controls-right svelte-waj8o3"><!> <!></div></div>'), wa = Q('<div class="grid-error svelte-waj8o3"><div class="grid-error-title svelte-waj8o3">There was a problem loading your grid</div> <div class="grid-error-subtitle svelte-waj8o3"> </div></div>'), pa = Q('<div class="grid-data-outer svelte-waj8o3"><div class="grid-data-inner svelte-waj8o3"><!> <div class="grid-data-content svelte-waj8o3"><!> <!></div> <!> <div class="overlays svelte-waj8o3"><!> <!> <!> <!> <!></div></div></div>'), $a = Q('<div class="grid-loading svelte-waj8o3"><!></div>'), ba = Q("<div><!> <!> <!> <!> <!> <!> <!> <!></div>");
function _a(d, t) {
  const o = Ro(t), r = Ls(t, ["children", "$$slots", "$$events", "$$legacy"]);
  Ue(t, !1);
  const c = () => w(ye, "$definitionMissing", I), u = () => w(U, "$isResizing", I), a = () => w(N, "$isReordering", I), s = () => w(ne, "$rowHeight", I), n = () => w(K, "$contentLines", I), l = () => w(Ee, "$minHeight", I), i = () => w(Ae, "$error", I), h = () => w(ie, "$loaded", I), p = () => w(J, "$config", I), x = () => w(be, "$loading", I), [I, _] = rt();
  let g = F(t, "API", 8, null), m = F(t, "datasource", 8, null), v = F(t, "schemaOverrides", 8, null), $ = F(t, "canAddRows", 8, !0), k = F(t, "canExpandRows", 8, !0), f = F(t, "canEditRows", 8, !0), C = F(t, "canDeleteRows", 8, !0), A = F(t, "canSelectRows", 8, !0), S = F(t, "canEditColumns", 8, !0), M = F(t, "canSaveSchema", 8, !0), P = F(t, "stripeRows", 8, !1), y = F(t, "quiet", 8, !1), T = F(t, "collaboration", 8, !0), V = F(t, "showAvatars", 8, !0), te = F(t, "initialFilter", 8, null), j = F(t, "initialSortColumn", 8, null), Z = F(t, "initialSortOrder", 8, null), ae = F(t, "fixedRowHeight", 8, null), oe = F(t, "notifySuccess", 8, null), fe = F(t, "notifyError", 8, null), ue = F(t, "buttons", 8, null), Ie = F(t, "buttonsCollapsed", 8, !1), _e = F(t, "buttonsCollapsedText", 8, null), pe = F(t, "darkMode", 8, !1), $e = F(t, "isCloud", 8, null), q = F(t, "aiEnabled", 8, !1), ce = F(t, "canHideColumns", 8, !0), ee = F(t, "externalClipboard", 24, () => {
  });
  const E = `grid-${Math.random().toString().slice(2)}`, D = Oe(r);
  let B = Mr({
    API: g() || Es(),
    Constants: Zt,
    gridID: E,
    props: D,
    ...Zs()
  });
  const {
    config: J,
    isResizing: U,
    isReordering: N,
    ui: G,
    loaded: ie,
    loading: be,
    rowHeight: ne,
    contentLines: K,
    gridFocused: se,
    error: Ae,
    definitionMissing: ye,
    dispatch: Le
  } = B, Ee = we(ne, (Ce) => {
    const Pe = o.controls ? Mo : 0;
    return No + Ts + Ce + Pe;
  });
  B = { ...B, minHeight: Ee }, Ps("grid", B);
  const Ve = () => B;
  zt(() => {
    if (T())
      return ma(B);
  }), W(
    () => (O(m()), O(v()), O($()), O(k()), O(f()), O(C()), O(A()), O(S()), O(M()), O(P()), O(y()), O(T()), O(V()), O(te()), O(j()), O(Z()), O(ae()), O(oe()), O(fe()), O(ue()), O(Ie()), O(_e()), O(pe()), O($e()), O(q()), O(ce()), O(ee())),
    () => {
      D.set({
        datasource: m(),
        schemaOverrides: v(),
        canAddRows: $(),
        canExpandRows: k(),
        canEditRows: f(),
        canDeleteRows: C(),
        canSelectRows: A(),
        canEditColumns: S(),
        canSaveSchema: M(),
        stripeRows: P(),
        quiet: y(),
        collaboration: T(),
        showAvatars: V(),
        initialFilter: te(),
        initialSortColumn: j(),
        initialSortOrder: Z(),
        fixedRowHeight: ae(),
        notifySuccess: oe(),
        notifyError: fe(),
        buttons: ue(),
        buttonsCollapsed: Ie(),
        buttonsCollapsedText: _e(),
        darkMode: pe(),
        isCloud: $e(),
        aiEnabled: q(),
        canHideColumns: ce(),
        externalClipboard: ee()
      });
    }
  ), W(() => (c(), O(m())), () => {
    c() && Le("definitionMissing", { datasource: m() });
  }), gt();
  var Be = { getContext: Ve };
  qe();
  var Ne = ba();
  let Je;
  var it = de(Ne);
  {
    var Ge = (Ce) => {
      var Pe = ha(), ht = de(Pe), Rt = de(ht);
      Ct(Rt, t, "controls", {}, null), le(ht);
      var Mt = Y(ht, 2), ot = de(Mt);
      Ct(ot, t, "controls-right", {}, null);
      var St = Y(ot, 2);
      {
        var Ke = (ct) => {
          Ql(ct, {});
        };
        ge(St, (ct) => {
          V() && ct(Ke);
        });
      }
      le(Mt), le(Pe), L(Ce, Pe);
    };
    ge(it, (Ce) => {
      H(() => o.controls) && Ce(Ge);
    });
  }
  var mt = Y(it, 2);
  {
    var Qe = (Ce) => {
      var Pe = wa(), ht = Y(de(Pe), 2), Rt = de(ht, !0);
      le(ht), le(Pe), Me(() => vt(Rt, i())), L(Ce, Pe);
    }, Ft = (Ce) => {
      var Pe = ft(), ht = xe(Pe);
      {
        var Rt = (Mt) => {
          var ot = pa(), St = de(ot), Ke = de(St);
          Yl(Ke, {
            $$slots: {
              "edit-column": (je, It) => {
                var $t = ft(), ut = xe($t);
                Ct(ut, t, "edit-column", {}, null), L(je, $t);
              }
            }
          });
          var ct = Y(Ke, 2), Ze = de(ct);
          Ml(Ze, {
            $$slots: {
              "add-column": (je, It) => {
                var $t = ft(), ut = xe($t);
                Ct(ut, t, "add-column", {}, null), L(je, $t);
              },
              "edit-column": (je, It) => {
                var $t = ft(), ut = xe($t);
                Ct(ut, t, "edit-column", {}, null), L(je, $t);
              }
            }
          });
          var xt = Y(Ze, 2);
          sl(xt, {}), le(ct);
          var dt = Y(ct, 2);
          {
            var Xe = (je) => {
              ga(je, {});
            };
            ge(dt, (je) => {
              p(), H(() => p().canAddRows) && je(Xe);
            });
          }
          var ze = Y(dt, 2), st = de(ze);
          rl(st, {});
          var lt = Y(st, 2);
          il(lt, {});
          var wt = Y(lt, 2);
          Pl(wt, {});
          var At = Y(wt, 2);
          Fl(At, {});
          var He = Y(At, 2);
          dl(He), le(ze), le(St), le(ot), qo(ot, (je, It) => zs?.(je, It), () => G.actions.blur), L(Mt, ot);
        };
        ge(
          ht,
          (Mt) => {
            h() && Mt(Rt);
          },
          !0
        );
      }
      L(Ce, Pe);
    };
    ge(mt, (Ce) => {
      i() ? Ce(Qe) : Ce(Ft, !1);
    });
  }
  var Dt = Y(mt, 2);
  {
    var ke = (Ce) => {
      var Pe = $a(), ht = de(Pe);
      Os(ht, {}), le(Pe), Vt(1, Pe, () => Bt, () => ({ duration: 130 })), L(Ce, Pe);
    };
    ge(Dt, (Ce) => {
      x() && !i() && Ce(ke);
    });
  }
  var ve = Y(Dt, 2);
  {
    var De = (Ce) => {
      Tr(Ce, {});
    };
    ge(ve, (Ce) => {
      p(), H(() => p().canAddRows) && Ce(De);
    });
  }
  var Te = Y(ve, 2);
  Pr(Te, {});
  var yt = Y(Te, 2);
  zr(yt, {});
  var me = Y(yt, 2);
  Zl(me, {});
  var he = Y(me, 2);
  {
    var X = (Ce) => {
      var Pe = ft(), ht = xe(Pe);
      Ct(ht, t, "default", {}, null), L(Ce, Pe);
    };
    ge(he, (Ce) => {
      h() && Ce(X);
    });
  }
  le(Ne), Me(
    (Ce) => {
      Je = nt(Ne, 1, "grid svelte-waj8o3", null, Je, Ce), fo(Ne, "id", E), Et(Ne, `--row-height:${s() ?? ""}px; --default-row-height:${O(Zt), H(() => Ut) ?? ""}px; --gutter-width:${O(Zt), H(() => Jt) ?? ""}px; --max-cell-render-overflow:${O(Zt), H(() => Ds) ?? ""}px; --content-lines:${n() ?? ""}; --min-height:${l() ?? ""}px; --controls-height:${O(Zt), H(() => Mo) ?? ""}px; --scroll-bar-size:${O(Zt), H(() => Wt) ?? ""}px;`);
    },
    [
      () => ({
        "is-resizing": u(),
        "is-reordering": a(),
        stripe: P(),
        quiet: y()
      })
    ]
  ), Se("mouseenter", Ne, () => se.set(!0)), Se("mouseleave", Ne, () => se.set(!1)), L(d, Ne), Uo(t, "getContext", Ve);
  var Re = We(Be);
  return _(), Re;
}
var Ca = Q("<div><!></div> <!>", 1);
function Ma(d, t) {
  Ue(t, !1);
  const o = () => w(ce, "$component", l), r = () => w(q, "$context", l), c = () => w(e(m), "$selectedRows", l), u = () => w(e($), "$rowMap", l), a = () => w(B, "$builderStore", l), s = () => w(ee, "$environmentStore", l), n = () => w(Fs, "$featuresStore", l), [l, i] = rt(), h = z(), p = z(), x = z(), I = z(), _ = z(), g = z(), m = z(), v = z(), $ = z(), k = z(), f = z(), C = z(), A = z();
  let S = F(t, "table", 8), M = F(t, "allowAddRows", 8, !0), P = F(t, "allowEditRows", 8, !0), y = F(t, "allowDeleteRows", 8, !0), T = F(t, "allowRowSelection", 8, !0), V = F(t, "stripeRows", 8, !1), te = F(t, "quiet", 8, !1), j = F(t, "initialFilter", 8, null), Z = F(t, "initialSortColumn", 8, null), ae = F(t, "initialSortOrder", 8, null), oe = F(t, "fixedRowHeight", 8, null), fe = F(t, "columns", 8, null), ue = F(t, "onRowClick", 8, null), Ie = F(t, "buttons", 8, null), _e = F(t, "buttonsCollapsed", 8, !1), pe = F(t, "buttonsCollapsedText", 8, null), $e = F(t, "autoRefresh", 8, null);
  const q = Ye("context"), ce = Ye("component"), { environmentStore: ee } = Ye("sdk"), {
    styleable: E,
    API: D,
    builderStore: B,
    notificationStore: J,
    enrichButtonActions: U,
    ActionTypes: N,
    createContextStore: G,
    Provider: ie,
    generateGoldenSample: be
  } = Ye("sdk");
  let ne = z(), K = z();
  const se = Vs();
  let Ae = z(0), ye = z({});
  const Le = (me, he) => {
    !me || !he || R(ye, { ...e(ye), [me]: he });
  }, Ee = (me) => {
    if (!me)
      return;
    const { [me]: he, ...X } = e(ye);
    R(ye, { ...X });
  }, Ve = (me, he) => Object.keys(he || {}).length ? {
    groups: (me ? [me] : []).concat(Object.values(he)),
    logicalOperator: $o.ALL,
    onEmptyFilter: Hs.RETURN_NONE
  } : me, Be = () => {
    const me = e(ne)?.getContext(), he = b(me?.rows) || [], X = me?.rows.actions.cleanRow || ((Pe) => Pe), Re = he.map(X), Ce = be(Re);
    return {
      // Not sure what this one is for...
      [e(h)]: Ce,
      // For row conditions context
      row: Ce,
      // For button action context
      eventContext: { row: Ce }
    };
  }, Ne = (me) => me?.length ? me[0].active !== void 0 ? me : me.map((he) => ({
    label: he.displayName || he.name,
    field: he.name,
    active: !0
  })) : [], Je = (me, he) => {
    let X = {};
    return me.forEach((Re, Ce) => {
      X[Re.field] = {
        displayName: Re.label,
        order: Ce,
        visible: !!Re.active,
        conditions: Ao(Re.conditions, he),
        format: it(Re, he),
        // Small hack to ensure we react to all changes, as our
        // memoization cannot compare differences in functions
        rand: Re.conditions?.length ? Math.random() : null
      }, Re.width && (X[Re.field].width = Re.width);
    }), X;
  }, it = (me, he) => {
    if (typeof me.format != "string" || !me.format.trim().length)
      return null;
    const X = he?.snippets;
    return (Re) => js(me.format, { [e(h)]: Re, snippets: X });
  }, Ge = (me) => me?.length ? me.map((he) => {
    const X = b(ce).id;
    return {
      size: "M",
      text: he.text,
      type: he.type,
      icon: he.icon,
      getRowConditions: (Re) => Ao(he.conditions, { ...r(), [X]: Re }),
      conditions: he.conditions,
      onClick: async (Re) => {
        const Ce = G(q);
        return Ce.actions.provideData(X, Re), await U(he.onClick, b(Ce))?.({ row: Re });
      }
    };
  }) : null, mt = (me) => me ? we([me.selectedRows, me.rowLookupMap], ([he, X]) => Object.entries(he || {}).filter(([Re, Ce]) => Ce).map(([Re]) => me.rows.actions.cleanRow(X[Re]))) : Ns([]), Qe = (me, he) => ({
    ...me,
    normal: { ...me?.normal, "min-height": `${he}px` }
  });
  zt(() => {
    R(K, e(ne).getContext()), e(K).minHeight.subscribe((me) => R(Ae, me));
  }), So(() => {
    se.clear();
  }), W(() => o(), () => {
    R(h, o().id);
  }), W(() => r(), () => {
    R(p, r()?.device?.theme);
  }), W(() => e(p), () => {
    R(x, !e(p)?.includes("light"));
  }), W(() => O(fe()), () => {
    R(I, Ne(fe()));
  }), W(() => O(Ie()), () => {
    R(_, Ge(Ie()));
  }), W(() => (e(I), r()), () => {
    R(g, Je(e(I), r()));
  }), W(() => e(K), () => {
    _o(R(m, mt(e(K))), "$selectedRows", l);
  }), W(() => (o(), e(Ae)), () => {
    R(v, Qe(o().styles, e(Ae)));
  }), W(() => e(K), () => {
    _o(R($, e(K)?.rowLookupMap), "$rowMap", l);
  }), W(
    () => (c(), O(S()), o(), u()),
    () => {
      R(k, {
        selectedRows: c(),
        embeddedData: {
          dataSource: S(),
          componentId: o().id,
          loaded: !!u()
        }
      });
    }
  ), W(() => (e(K), O(S())), () => {
    R(f, [
      {
        type: N.RefreshDatasource,
        callback: () => e(K)?.rows.actions.refreshData(),
        metadata: { dataSource: S() }
      },
      {
        type: N.AddDataProviderFilterExtension,
        callback: Le
      },
      {
        type: N.ClearRowSelection,
        callback: () => e(K)?.selectedRows?.set?.({})
      },
      {
        type: N.RemoveDataProviderFilterExtension,
        callback: Ee
      }
    ]);
  }), W(() => (O(j()), e(ye)), () => {
    R(C, Ve(j(), e(ye)));
  }), W(() => a(), () => {
    R(A, !a().inBuilder || !a().selectedComponentId);
  }), W(
    () => (e(A), O($e()), e(K)),
    () => {
      se.setUp(e(A) ? $e() : null, e(K)?.rows?.actions?.refreshData);
    }
  ), W(
    () => (O(T()), O(y()), e(K)),
    () => {
      !T() && !y() && e(K)?.selectedRows?.set?.({});
    }
  ), gt();
  var Ft = { getAdditionalDataContext: Be };
  qe();
  var Dt = Ca(), ke = xe(Dt);
  let ve;
  var De = de(ke);
  {
    let me = re(() => T() || y());
    Ot(
      _a(De, {
        get datasource() {
          return S();
        },
        get API() {
          return D;
        },
        get stripeRows() {
          return V();
        },
        get quiet() {
          return te();
        },
        get darkMode() {
          return e(x);
        },
        get initialFilter() {
          return e(C);
        },
        get initialSortColumn() {
          return Z();
        },
        get initialSortOrder() {
          return ae();
        },
        get fixedRowHeight() {
          return oe();
        },
        get schemaOverrides() {
          return e(g);
        },
        get canAddRows() {
          return M();
        },
        get canEditRows() {
          return P();
        },
        get canDeleteRows() {
          return y();
        },
        get canSelectRows() {
          return e(me);
        },
        canEditColumns: !1,
        canExpandRows: !1,
        canSaveSchema: !1,
        get notifySuccess() {
          return H(() => J.actions.success);
        },
        get notifyError() {
          return H(() => J.actions.error);
        },
        get buttons() {
          return e(_);
        },
        get buttonsCollapsed() {
          return _e();
        },
        get buttonsCollapsedText() {
          return pe();
        },
        get isCloud() {
          return s(), H(() => s().cloud);
        },
        get aiEnabled() {
          return n(), H(() => n().aiEnabled);
        },
        $$events: { rowclick: (he) => ue()?.({ row: he.detail }) },
        $$legacy: !0
      }),
      (he) => R(ne, he),
      () => e(ne)
    );
  }
  le(ke), qo(ke, (me, he) => E?.(me, he), () => e(v));
  var Te = Y(ke, 2);
  ie(Te, {
    get data() {
      return e(k);
    },
    get actions() {
      return e(f);
    }
  }), Me((me) => ve = nt(ke, 1, "svelte-zs21rp", null, ve, me), [() => ({ "in-builder": a().inBuilder })]), L(d, Dt), Uo(t, "getAdditionalDataContext", Be);
  var yt = We(Ft);
  return i(), yt;
}
export {
  Ma as default
};
