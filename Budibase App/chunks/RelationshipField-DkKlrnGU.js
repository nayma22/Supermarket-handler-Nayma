import { g as Ze, p as c, b5 as G, h as $e, cj as et, a0 as tt, l as i, i as u, j as e, k as rt, m as at, n as be, q as we, u as lt, d as Ee, B as a, w as st, x as Oe, y as it, z as o, bx as nt, cH as ot, H as P, A as V, D as ct, cI as dt, cD as ut, G as ft, aE as j, bE as pt, bl as yt, F as Se, bm as ee, bF as gt } from "./index-quCB9sGT.js";
import { M as ht } from "./Multiselect-CjqdfLDG.js";
import { F as mt } from "./Field-Dj4x-6nw.js";
function Et(Ie, n) {
  Ze(n, !1);
  const te = () => Oe(Be, "$appStore", q), w = () => Oe(e(H), "$fetch", q), [q, Fe] = it(), m = o(), k = o(), A = o(), _ = o(), v = o(), K = o(), h = o(), H = o(), R = o(), g = o(), re = o(), E = o(), T = o(), ae = o(), J = o(), le = o();
  let ke = c(n, "field", 24, () => {
  }), Ae = c(n, "label", 24, () => {
  }), ve = c(n, "placeholder", 24, () => {
  }), z = c(n, "disabled", 8, !1), Q = c(n, "readonly", 8, !1), Re = c(n, "validation", 24, () => {
  }), Te = c(n, "autocomplete", 8, !0), se = c(n, "defaultValue", 24, () => {
  }), ie = c(n, "onChange", 8), U = c(n, "filter", 24, () => {
  }), W = c(n, "datasourceType", 8, "table"), ne = c(n, "primaryDisplay", 24, () => {
  }), De = c(n, "span", 24, () => {
  }), Ne = c(n, "helpText", 24, () => {
  }), Le = c(n, "wrapText", 8, !1), D = c(n, "type", 24, () => G.LINK), oe = c(n, "multi", 24, () => {
  }), ce = c(n, "tableId", 24, () => {
  }), de = c(n, "defaultRows", 24, () => []);
  const xe = $e("sdk") ?? {}, { API: ue, appStore: Be } = xe, fe = et("picker");
  let N = c(n, "workspaceUsersOnly", 8, !1), O = c(n, "userGroups", 24, () => {
  }), S = c(n, "workspaceRole", 24, () => {
  });
  const Ge = tt();
  let y = o(), L = o(), I = o(), C = o(), pe = o(!1), x = o([]), d = o({}), X = !1, ye;
  const Ue = (t, r) => r ? _e(t) : _e(t)[0], Ce = ({
    writable: t,
    dsType: r,
    filter: l,
    linkedTableId: s,
    workspaceUsersOnly: f,
    workspaceId: p,
    userGroups: B,
    workspaceRole: M
  }) => {
    let F;
    const $ = !!B?.length || !!M;
    return r === "table" ? F = { type: r, tableId: s } : f && !$ ? F = { type: "table", tableId: ut.USER_METADATA } : F = {
      type: r,
      workspaceId: f ? p : void 0,
      groupIds: B,
      workspaceRoleId: M
    }, ft({
      API: ue,
      datasource: F,
      options: { filter: l, limit: t ? 100 : 1 }
    });
  }, Me = (t) => t ? Array.isArray(t) ? t : [t] : [], Pe = (t, r, l) => {
    if (t) {
      const s = Array.isArray(t) ? t : [t];
      for (let f of s) {
        const p = Z(f, l);
        p && j(d, e(d)[p._id] = p);
      }
    }
    for (let s of r) {
      const f = Z(s, l);
      f && j(d, e(d)[f._id] = f);
    }
    a(d, e(d));
  }, Y = (t) => W() === "user" && N() ? t.replace(`ro_${gt.USERS}_`, "") : t, Z = (t, r) => typeof t == "string" && e(d)[t] ? e(d)[t] : !t || typeof t != "object" || !t?._id ? null : Object.keys(t).length === 2 && "primaryDisplay" in t ? {
    _id: Y(t._id),
    primaryDisplay: me(t.primaryDisplay)
  } : r ? {
    _id: Y(t._id),
    primaryDisplay: me(t[r])
  } : { _id: Y(t._id), primaryDisplay: t._id }, Ve = async (t, r, l) => {
    if (!(X || !t.length || !r || !l)) {
      X = !0;
      try {
        const s = await ue.searchTable(r, { query: { oneOf: { _id: t } } });
        for (let f of s.rows) {
          const p = Z(f, l);
          p && j(d, e(d)[p._id] = p);
        }
        a(d, e(d)), ge(e(d));
      } catch (s) {
        console.error("Error loading missing row IDs", s);
      } finally {
        for (let s of t)
          e(d)[s] || j(d, e(d)[s] = { _id: s, primaryDisplay: s });
        X = !1;
      }
    }
  }, ge = (t) => {
    let r = Object.values(t);
    r.length !== e(x).length && (a(x, r), he(e(_)));
  }, he = (t) => {
    const r = t.reduce((l, s) => ({ ...l, [s]: !0 }), {});
    a(x, [...e(x)].sort((l, s) => {
      const f = !!r[l._id], p = !!r[s._id];
      return f === p ? l.primaryDisplay < s.primaryDisplay ? -1 : 1 : f ? -1 : 1;
    }));
  }, me = (t) => typeof t == "string" ? t : JSON.stringify(t), je = (t) => !t || typeof t != "string" ? t : t.includes(",") ? t.split(",") : t, qe = (t) => Array.isArray(t) ? dt(t) : t, Ke = (t) => {
    const r = JSON.stringify(t), l = ye;
    ye = r, !(!l || r === l) && e(L) && e(_).length && e(L).setValue(D() === G.BB_REFERENCE_SINGLE ? null : []);
  };
  async function He(t, r) {
    if (!r)
      return;
    let l, s = {
      logicalOperator: ee.ALL,
      filters: [
        {
          field: r,
          operator: yt.STRING,
          value: t
        }
      ]
    };
    t && e(h) ? l = {
      logicalOperator: ee.ALL,
      groups: [s, e(h)],
      onEmptyFilter: Se.RETURN_NONE
    } : t ? l = {
      logicalOperator: ee.ALL,
      groups: [s],
      onEmptyFilter: Se.RETURN_NONE
    } : l = e(h), await e(H)?.update({ filter: l });
  }
  const Je = pt(He, 250), _e = (t) => t ? (Array.isArray(t) || (t = [t]), t = t.map((r) => typeof r == "object" ? r._id : r), t) : [], ze = (t) => {
    let r = t.detail;
    e(m) || (r = r == null ? [] : [r]), D() === G.BB_REFERENCE_SINGLE && r && Array.isArray(r) && (r = r[0] || null);
    const l = e(L).setValue(r);
    ie() && l && ie()({ value: r });
  };
  i(
    () => (u(U()), u(N()), u(O()), u(S())),
    () => {
      U(), N(), O(), S(), a(d, {});
    }
  ), i(() => u(U()), () => {
    a(h, qe(U()));
  }), i(
    () => (e(h), u(O()), u(S())),
    () => {
      Ke({
        filter: e(h),
        userGroups: O(),
        workspaceRole: S()
      });
    }
  ), i(
    () => (u(oe()), u(D()), e(I)),
    () => {
      a(m, oe() ?? ([G.LINK, G.BB_REFERENCE].includes(D()) && e(I)?.relationshipType !== "one-to-many"));
    }
  ), i(() => e(y), () => {
    a(k, e(y)?.value);
  }), i(() => (e(k), e(m)), () => {
    a(A, Ue(e(k), e(m)));
  }), i(() => e(A), () => {
    a(_, Me(e(A)));
  }), i(() => (u(ce()), e(I)), () => {
    a(v, ce() ?? e(I)?.tableId);
  }), i(() => (u(z()), u(Q())), () => {
    a(K, !z() && !Q());
  }), i(
    () => (e(K), u(W()), e(h), e(v), u(N()), te(), u(O()), u(S())),
    () => {
      ct(
        a(H, Ce({
          writable: e(K),
          dsType: W(),
          filter: e(h),
          linkedTableId: e(v),
          workspaceUsersOnly: N(),
          workspaceId: te()?.appId,
          userGroups: O(),
          workspaceRole: S()
        })),
        "$fetch",
        q
      );
    }
  ), i(() => w(), () => {
    a(R, w()?.definition);
  }), i(() => (u(ne()), e(R)), () => {
    a(g, ne() || (e(R) && "primaryDisplay" in e(R) ? e(R).primaryDisplay : void 0));
  }), i(() => e(g), () => {
    a(re, e(g) ? fe.searchByFieldPlaceholder.replace("{field}", e(g)) : fe.searchPlaceholder);
  }), i(() => w(), () => {
    a(E, w()?.rows || []);
  }), i(() => e(E), () => {
    e(E) && Ge("rows", e(E));
  }), i(
    () => (e(k), e(E), u(de()), e(g)),
    () => {
      Pe(e(k), [...e(E), ...de() || []], e(g));
    }
  ), i(() => (e(_), e(d)), () => {
    a(T, e(_).filter((t) => !e(d)[t]));
  }), i(
    () => (e(T), e(v), e(g)),
    () => {
      Ve(e(T), e(v), e(g));
    }
  ), i(() => e(d), () => {
    ge(e(d));
  }), i(() => e(_), () => {
    he(e(_));
  }), i(() => (e(C), e(g)), () => {
    Je(e(C) || "", e(g));
  }), i(() => u(se()), () => {
    a(ae, je(se()));
  }), i(() => e(m), () => {
    a(J, e(m) ? [] : void 0);
  }), i(() => (e(T), e(J), e(A)), () => {
    a(le, e(T).length ? e(J) : e(A));
  }), rt(), at(), mt(Ie, {
    get label() {
      return Ae();
    },
    get field() {
      return ke();
    },
    get disabled() {
      return z();
    },
    get readonly() {
      return Q();
    },
    get validation() {
      return Re();
    },
    get type() {
      return D();
    },
    get span() {
      return De();
    },
    get helpText() {
      return Ne();
    },
    get defaultValue() {
      return e(ae);
    },
    get fieldState() {
      return e(y);
    },
    set fieldState(t) {
      a(y, t);
    },
    get fieldApi() {
      return e(L);
    },
    set fieldApi(t) {
      a(L, t);
    },
    get fieldSchema() {
      return e(I);
    },
    set fieldSchema(t) {
      a(I, t);
    },
    children: (t, r) => {
      var l = be(), s = we(l);
      {
        var f = (p) => {
          var B = be(), M = we(B);
          {
            let F = P(() => (e(y), V(() => e(y)?.fieldId))), $ = P(() => (e(y), V(() => e(y)?.disabled))), Qe = P(() => (e(y), V(() => e(y)?.readonly))), We = P(() => (w(), V(() => !!w()?.loading)));
            nt(M, () => e(m) ? ht : ot, (Xe, Ye) => {
              Ye(Xe, {
                get value() {
                  return e(le);
                },
                get id() {
                  return e(F);
                },
                get disabled() {
                  return e($);
                },
                get readonly() {
                  return e(Qe);
                },
                get loading() {
                  return e(We);
                },
                getOptionLabel: (b) => b.primaryDisplay,
                getOptionValue: (b) => b._id,
                get options() {
                  return e(x);
                },
                get placeholder() {
                  return ve();
                },
                get autocomplete() {
                  return Te();
                },
                get searchPlaceholder() {
                  return e(re);
                },
                get wrapText() {
                  return Le();
                },
                get searchTerm() {
                  return e(C);
                },
                set searchTerm(b) {
                  a(C, b);
                },
                get open() {
                  return e(pe);
                },
                set open(b) {
                  a(pe, b);
                },
                $$events: { change: ze },
                $$legacy: !0
              });
            });
          }
          Ee(p, B);
        };
        lt(s, (p) => {
          e(y) && p(f);
        });
      }
      Ee(t, l);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), st(), Fe();
}
export {
  Et as default
};
