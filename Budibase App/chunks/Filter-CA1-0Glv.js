import { g as We, y as rt, p as u, cf as Ut, ag as gt, a0 as nt, l as d, i as f, B as a, j as e, cg as ft, k as st, m as $e, c as G, s as pe, I as Rt, r as U, d as D, w as qe, x as Te, z as o, aa as wt, aM as Ne, f as ge, ch as Wt, bn as we, ci as $t, h as Ue, cj as xt, au as qt, b5 as i, q as ee, E as Yt, Y as tt, a8 as Ht, u as le, Z as pt, aN as ht, A as p, aG as Ct, a4 as It, a5 as Bt, t as Xe, b as Ke, e as St, $ as bt, ck as at, cl as Ot, bl as Qt, cm as Zt, H as de, ak as _t, n as fe, aq as Tt, bx as Jt, cn as Et, co as et, a as dt, a3 as Xt, b4 as Kt, cp as vt, bj as ea, _ as ta, bm as At, F as aa, X as ra, o as na, cq as sa, cr as ke, T as la, cs as Je, U as oa, C as ia, J as ua, ct as Ft, cu as ca } from "./index-quCB9sGT.js";
import da from "./Container-BSV9mSav.js";
import { D as va, f as fa } from "./users-DLoTEo_4.js";
import { D as Dt } from "./DatePicker-D06Pmr3Y.js";
import { C as pa } from "./CheckboxGroup-0mUXpk8l.js";
import { R as Nt } from "./RadioGroup-zVihoO2D.js";
import ga from "./BBReferenceField-Z7Fo4GyY.js";
import { u as ma } from "./utc-Dp-rEtpA.js";
import { F as ya } from "./datasources-Nbeezcjt.js";
var ha = ge('<div class="date-range svelte-2900xs"><!> <div class="arrow svelte-2900xs"><!></div> <!></div>');
function ba(Q, n) {
  We(n, !1);
  const x = () => Te(F, "$valueStore", k), [k, te] = rt(), J = o(), z = o(), V = o();
  let t = u(n, "enableTime", 8, !1), O = u(n, "timeOnly", 8, !1), P = u(n, "ignoreTimezones", 8, !1);
  const _ = Ut();
  let H = u(n, "startDayOfWeek", 24, () => {
  }), C = u(n, "calendarLabels", 24, () => gt("calendar")), y = u(n, "value", 24, () => []);
  const I = nt(), F = wt();
  let E = o(), h = o();
  const ve = (r) => {
    !Array.isArray(r) || !r[0] || !r[1] ? (a(E, null), a(h, null)) : (a(E, Ne(r[0])), a(h, Ne(r[1])));
  }, X = (r) => {
    const c = r ? t() ? Ne(r) : Ne(r).startOf("day") : null;
    c && (!e(h) || c.isAfter(e(h))) ? a(h, t() ? c : c.endOf("day")) : c || a(h, null), I("change", [c, e(h)]);
  }, oe = (r) => {
    const c = r ? t() ? Ne(r) : Ne(r).startOf("day") : null;
    c && (!e(E) || c.isBefore(e(E))) ? a(E, t() ? c : c.startOf("day")) : c || a(E, null), I("change", [e(E), c]);
  };
  d(() => f(y()), () => {
    F.set(y() || []);
  }), d(() => x(), () => {
    ve(x());
  }), d(() => f(H()), () => {
    a(J, H() ?? _);
  }), d(() => (e(E), f(t())), () => {
    a(z, e(E) ? ft(e(E), { enableTime: t() }) : void 0);
  }), d(() => (e(h), f(t())), () => {
    a(V, e(h) ? ft(e(h), { enableTime: t() }) : void 0);
  }), st(), $e();
  var W = ha(), ae = G(W);
  Dt(ae, {
    get value() {
      return e(z);
    },
    get enableTime() {
      return t();
    },
    get timeOnly() {
      return O();
    },
    get ignoreTimezones() {
      return P();
    },
    get startDayOfWeek() {
      return e(J);
    },
    get calendarLabels() {
      return C();
    },
    $$events: { change: (r) => X(r.detail) }
  });
  var re = pe(ae, 2), N = G(re);
  Rt(N, { name: "caret-right" }), U(re);
  var ie = pe(re, 2);
  Dt(ie, {
    get value() {
      return e(V);
    },
    get enableTime() {
      return t();
    },
    get timeOnly() {
      return O();
    },
    get ignoreTimezones() {
      return P();
    },
    get startDayOfWeek() {
      return e(J);
    },
    get calendarLabels() {
      return C();
    },
    $$events: { change: (r) => oe(r.detail) }
  }), U(W), D(Q, W), qe(), te();
}
function Oa(Q, n) {
  We(n, !1);
  let x = u(n, "value", 12, void 0), k = u(n, "label", 8, null), te = u(n, "labelPosition", 8, "above"), J = u(n, "disabled", 8, !1), z = u(n, "readonly", 8, !1), V = u(n, "error", 8, null), t = u(n, "helpText", 8, null), O = u(n, "appendTo", 8, void 0), P = u(n, "ignoreTimezones", 8, !1), _ = u(n, "enableTime", 8, !1), H = u(n, "timeOnly", 8, !1), C = u(n, "calendarLabels", 24, () => gt("calendar"));
  const y = nt(), I = (F) => {
    x(F.detail), y("change", F.detail);
  };
  $e(), Wt(Q, {
    get helpText() {
      return t();
    },
    get label() {
      return k();
    },
    get labelPosition() {
      return te();
    },
    get error() {
      return V();
    },
    children: (F, E) => {
      ba(F, {
        get error() {
          return V();
        },
        get disabled() {
          return J();
        },
        get readonly() {
          return z();
        },
        get value() {
          return x();
        },
        get appendTo() {
          return O();
        },
        get ignoreTimezones() {
          return P();
        },
        get enableTime() {
          return _();
        },
        get timeOnly() {
          return H();
        },
        get calendarLabels() {
          return C();
        },
        $$events: { change: I }
      });
    },
    $$slots: { default: !0 }
  }), qe();
}
function Re(Q) {
  return Q === we.CONTAINS_ANY || Q === we.ONE_OF || Q === we.NOT_ONE_OF;
}
var _a = ge('<div class="operator svelte-1jhm1bi"><!></div> <!> <!>', 1), Ta = ge('<div class="filter-popover svelte-1jhm1bi"><div class="filter-popover-body svelte-1jhm1bi"><!></div></div>'), Ea = ge('<div class="anchor"><!></div> <!>', 1);
function Aa(Q, n) {
  We(n, !1);
  const x = () => Te(ae, "$appStore", te), k = () => Te(W, "$rowCache", te), [te, J] = rt(), z = o(), V = o(), t = o(), O = o(), P = o();
  Ne.extend(ma);
  const _ = () => e(N)?.show(), H = () => e(N)?.hide();
  let C = u(n, "align", 24, () => $t.Left), y = u(n, "showPopover", 8, !0), I = u(n, "filter", 24, () => {
  }), F = u(n, "schema", 8, null), E = u(n, "buttonText", 24, () => {
  }), h = u(n, "config", 24, () => {
  }), ve = u(n, "defaultOperator", 24, () => {
  }), X = u(n, "operators", 24, () => {
  });
  const oe = nt(), W = Ue("rows"), { appStore: ae } = Ue("sdk"), re = xt("filter");
  let N = o(), ie = o(), r = o(!1), c = o(), M = o(), R = o();
  const $ = (s) => {
    if (!s)
      return;
    const v = [s.low, s.high];
    if (v.filter((g) => g).length === 2)
      return v;
  }, T = (s) => {
    if (!s) return;
    const v = at(s), g = Re(s.operator);
    g && typeof s.value == "string" && ![i.STRING, i.NUMBER].includes(s.type) ? v.value = [s.value] : g && !s?.value?.length ? delete v.value : !g && Array.isArray(s.value) && (v.value = s.value[0]);
    const j = [Ot.Empty.value, Ot.NotEmpty.value];
    return v.noValue = j.includes(v.operator), v?.operator || delete v.value, v;
  }, ne = (s) => s ? e(O)?.constraints?.inclusion ?? [] : [], ue = (s, v, g) => {
    if (s)
      return at(s);
    if (!v || !g)
      return;
    const j = v[g.field], xe = j?.type === i.BOOLEAN ? "true" : void 0, Ve = {
      valueType: Zt.VALUE,
      field: g.field,
      type: j?.type,
      operator: Qt.EMPTY,
      value: xe
    }, ye = (he) => he && X()?.find((Ae) => Ae.value === he)?.value, Ce = X()?.[0]?.value, Ee = ye(g?.defaultOperator), je = ye(ve());
    return {
      ...Ve,
      operator: Ee ?? je ?? Ce
    };
  }, q = (s) => {
    !s || !e(t) || a(t, T({ ...e(t), value: s.value }));
  }, me = (s) => {
    const v = s.detail.reduce(
      (g, j) => (g[j._id] = j, g),
      {}
    );
    W.update((g) => ({ ...g, ...v }));
  }, se = () => {
    const s = T(e(t)), { noValue: v, value: g, operator: j } = s || {};
    oe("change", !v && !g || !j ? void 0 : s), H();
  };
  d(() => x(), () => {
    a(z, qt(x().application?.translationOverrides));
  }), d(() => e(z), () => {
    a(V, gt("calendar", e(z)));
  }), d(
    () => (f(I()), f(F()), f(h())),
    () => {
      a(t, ue(I(), F(), h()));
    }
  ), d(() => (f(h()), f(F())), () => {
    a(O, h() ? F()?.[h()?.field] : void 0);
  }), d(() => e(O), () => {
    a(P, ne(e(O)));
  }), d(() => (e(O), i), () => {
    e(O)?.type === i.DATETIME && (a(c, !e(O)?.dateOnly), a(M, !!e(O)?.timeOnly), a(R, !!e(O)?.ignoreTimezones));
  }), st();
  var A = { show: _, hide: H };
  $e();
  var Z = Ea(), B = ee(Z), ze = G(B);
  Yt(ze, n, "anchor", {}, null), U(B), tt(B, (s) => a(ie, s), () => e(ie));
  var Pe = pe(B, 2);
  tt(
    Ht(Pe, {
      minWidth: 300,
      maxWidth: 300,
      get anchor() {
        return e(ie);
      },
      get align() {
        return C();
      },
      get showPopover() {
        return y();
      },
      customZIndex: 5,
      get open() {
        return e(r);
      },
      set open(s) {
        a(r, s);
      },
      $$events: {
        open(s) {
          pt.call(this, n, s);
        },
        close(s) {
          pt.call(this, n, s);
        }
      },
      children: (s, v) => {
        var g = Ta(), j = G(g), xe = G(j);
        {
          var Ve = (ye) => {
            var Ce = _a(), Ee = ee(Ce), je = G(Ee);
            {
              let l = de(() => (e(t), p(() => !e(t).field)));
              ht(je, {
                quiet: !0,
                get value() {
                  return e(t), p(() => e(t).operator);
                },
                get disabled() {
                  return e(l);
                },
                get options() {
                  return X();
                },
                autoWidth: !0,
                $$events: {
                  change: (m) => {
                    if (!e(t)) return;
                    const b = T({ ...e(t), operator: m.detail });
                    a(t, { ...b || e(t) });
                  }
                }
              });
            }
            U(Ee);
            var he = pe(Ee, 2);
            {
              var Ae = (l) => {
                _t(l, {
                  autofocus: !0,
                  get disabled() {
                    return e(t), p(() => e(t).noValue);
                  },
                  get value() {
                    return e(t), p(() => e(t).value);
                  },
                  $$events: {
                    change: (m) => {
                      e(t) && a(t, T({ ...e(t), value: m.detail }));
                    },
                    enterkey: se
                  }
                });
              }, Ye = (l) => {
                var m = fe(), b = ee(m);
                {
                  var S = (L) => {
                    const w = de(() => (f(Re), e(t), p(() => Re(e(t).operator)))), Y = de(() => e(w) ? pa : Nt);
                    var Fe = fe(), De = ee(Fe);
                    Tt(De, () => e(Y), (K) => {
                      var ce = fe(), Ge = ee(ce);
                      {
                        let ot = de(() => (e(t), p(() => e(t).value || [])));
                        Jt(Ge, () => e(Y), (it, Oe) => {
                          Oe(it, {
                            get value() {
                              return e(ot);
                            },
                            get disabled() {
                              return e(t), p(() => e(t).noValue);
                            },
                            get options() {
                              return e(P);
                            },
                            direction: "vertical",
                            $$events: {
                              change: (Ie) => {
                                e(t) && a(t, T({ ...e(t), value: Ie.detail }));
                              }
                            }
                          });
                        });
                      }
                      D(K, ce);
                    }), D(L, Fe);
                  }, be = (L) => {
                    var w = fe(), Y = ee(w);
                    {
                      var Fe = (K) => {
                        Nt(K, {
                          get value() {
                            return e(t), p(() => e(t).value);
                          },
                          get disabled() {
                            return e(t), p(() => e(t).noValue);
                          },
                          get options() {
                            return e(P);
                          },
                          direction: "vertical",
                          $$events: {
                            change: (ce) => {
                              e(t) && a(t, T({ ...e(t), value: ce.detail }));
                            }
                          }
                        });
                      }, De = (K) => {
                        var ce = fe(), Ge = ee(ce);
                        {
                          var ot = (Oe) => {
                            {
                              let Ie = de(() => (e(t), p(() => $(e(t).value))));
                              Oa(Oe, {
                                get enableTime() {
                                  return e(c);
                                },
                                get timeOnly() {
                                  return e(M);
                                },
                                get ignoreTimezones() {
                                  return e(R);
                                },
                                get calendarLabels() {
                                  return e(V);
                                },
                                get value() {
                                  return e(Ie);
                                },
                                $$events: {
                                  change: (ut) => {
                                    const [He, Qe] = ut.detail, _e = e(c) ? He.utc().format() : Et(He, {
                                      enableTime: e(c),
                                      timeOnly: e(M),
                                      ignoreTimezones: e(R)
                                    }), Be = e(c) ? Qe.utc().format() : Et(Qe, {
                                      enableTime: e(c),
                                      timeOnly: e(M),
                                      ignoreTimezones: e(R)
                                    });
                                    e(t) && a(t, T({
                                      ...e(t),
                                      value: { low: _e, high: Be }
                                    }));
                                  }
                                }
                              });
                            }
                          }, it = (Oe) => {
                            var Ie = fe(), ut = ee(Ie);
                            {
                              var He = (_e) => {
                                va(_e, {
                                  get enableTime() {
                                    return e(c);
                                  },
                                  get timeOnly() {
                                    return e(M);
                                  },
                                  get ignoreTimezones() {
                                    return e(R);
                                  },
                                  get calendarLabels() {
                                    return e(V);
                                  },
                                  get disabled() {
                                    return e(t), p(() => e(t).noValue);
                                  },
                                  get value() {
                                    return e(t), p(() => e(t).value);
                                  },
                                  $$events: {
                                    change: (Be) => {
                                      e(t) && a(t, T({ ...e(t), value: Be.detail }));
                                    }
                                  }
                                });
                              }, Qe = (_e) => {
                                var Be = fe(), Lt = ee(Be);
                                {
                                  var kt = (Se) => {
                                    {
                                      let Ze = de(() => p(() => [
                                        { label: re.true, value: "true" },
                                        { label: re.false, value: "false" }
                                      ]));
                                      ht(Se, {
                                        get value() {
                                          return e(t), p(() => e(t).value);
                                        },
                                        get disabled() {
                                          return e(t), p(() => e(t).noValue);
                                        },
                                        get options() {
                                          return e(Ze);
                                        },
                                        $$events: {
                                          change: (ct) => {
                                            e(t) && a(t, T({ ...e(t), value: ct.detail }));
                                          }
                                        }
                                      });
                                    }
                                  }, zt = (Se) => {
                                    var Ze = fe(), ct = ee(Ze);
                                    {
                                      var Pt = (Le) => {
                                        const mt = de(() => (f(Re), e(t), p(() => Re(e(t).operator))));
                                        var yt = fe(), Vt = ee(yt);
                                        Tt(Vt, () => e(mt), (jt) => {
                                          {
                                            let Gt = de(() => (k(), p(() => Object.values(k()))));
                                            ga(jt, {
                                              get disabled() {
                                                return e(t), p(() => e(t).noValue);
                                              },
                                              get defaultValue() {
                                                return e(t), p(() => e(t).value);
                                              },
                                              get multi() {
                                                return e(mt);
                                              },
                                              onChange: q,
                                              get defaultRows() {
                                                return e(Gt);
                                              },
                                              $$events: { rows: me }
                                            });
                                          }
                                        }), D(Le, yt);
                                      }, Mt = (Le) => {
                                        _t(Le, { disabled: !0 });
                                      };
                                      le(
                                        ct,
                                        (Le) => {
                                          e(t), f(i), p(() => e(t).type && [i.BB_REFERENCE, i.BB_REFERENCE_SINGLE].includes(e(t).type)) ? Le(Pt) : Le(Mt, !1);
                                        },
                                        !0
                                      );
                                    }
                                    D(Se, Ze);
                                  };
                                  le(
                                    Lt,
                                    (Se) => {
                                      e(t), f(i), p(() => e(t).type === i.BOOLEAN) ? Se(kt) : Se(zt, !1);
                                    },
                                    !0
                                  );
                                }
                                D(_e, Be);
                              };
                              le(
                                ut,
                                (_e) => {
                                  e(t), f(i), p(() => e(t).type === i.DATETIME) ? _e(He) : _e(Qe, !1);
                                },
                                !0
                              );
                            }
                            D(Oe, Ie);
                          };
                          le(
                            Ge,
                            (Oe) => {
                              e(t), f(i), p(() => e(t).type === i.DATETIME && e(t).operator === "range") ? Oe(ot) : Oe(it, !1);
                            },
                            !0
                          );
                        }
                        D(K, ce);
                      };
                      le(
                        Y,
                        (K) => {
                          e(t), f(i), p(() => e(t).type === i.OPTIONS) ? K(Fe) : K(De, !1);
                        },
                        !0
                      );
                    }
                    D(L, w);
                  };
                  le(
                    b,
                    (L) => {
                      e(t), f(i), f(we), p(() => e(t)?.type && e(t)?.type === i.ARRAY || e(t).type === i.OPTIONS && (e(t).operator === we.ONE_OF || e(t).operator === we.NOT_ONE_OF)) ? L(S) : L(be, !1);
                    },
                    !0
                  );
                }
                D(l, m);
              };
              le(he, (l) => {
                e(t), f(i), p(() => e(t)?.type && [
                  i.STRING,
                  i.LONGFORM,
                  i.NUMBER,
                  i.BIGINT,
                  i.FORMULA,
                  i.AI
                ].includes(e(t).type)) ? l(Ae) : l(Ye, !1);
              });
            }
            var lt = pe(he, 2);
            Ct(lt, {
              cta: !0,
              $$events: { click: se },
              children: (l, m) => {
                It();
                var b = Bt();
                Xe(() => Ke(b, E() || "Apply")), D(l, b);
              },
              $$slots: { default: !0 }
            }), D(ye, Ce);
          };
          le(xe, (ye) => {
            e(t) && e(O) && ye(Ve);
          });
        }
        U(j), U(g), D(s, g);
      },
      $$slots: { default: !0 },
      $$legacy: !0
    }),
    (s) => a(N, s),
    () => e(N)
  ), St("click", B, _), D(Q, Z), bt(n, "show", _), bt(n, "hide", H);
  var Me = qe(A);
  return J(), Me;
}
var Fa = ge('<span class="display svelte-zc2c1d"> </span>'), Da = ge('<span class="filterMeta"> </span>'), Na = ge('<div slot="anchor"><div><div><div class="toggle-wrap svelte-zc2c1d"><!></div> <span><span class="field"> </span> <!></span> <!></div></div></div>');
function Ra(Q, n) {
  We(n, !1);
  const x = () => Te(ve, "$rowCache", k), [k, te] = rt(), J = o(), z = o(), V = o(), t = o(), O = o();
  let P = u(n, "disabled", 8, !1), _ = u(n, "size", 8, "S"), H = u(n, "buttonText", 8, "Apply"), C = u(n, "defaultOperator", 24, () => {
  }), y = u(n, "filter", 24, () => {
  }), I = u(n, "config", 24, () => {
  }), F = u(n, "schema", 8, null), E = u(n, "operators", 24, () => {
  });
  const h = nt(), ve = Ue("rows");
  let X = o(), oe = o(), W = o(), ae = o();
  const re = (r, c) => {
    if (!r || !c || c.type !== i.DATETIME) return "";
    if (r.operator === et.RANGE) {
      const $ = !c.dateOnly, { high: T, low: ne } = r.value;
      return `${vt(ne, { enableTime: $ })}
        - ${vt(T, { enableTime: $ })}`;
    }
    const M = ft(r.value, { enableTime: !c.dateOnly });
    return `${vt(M, { enableTime: !c.dateOnly })}`;
  }, N = (r) => {
    const c = Array.isArray(r) && r?.length > 1 ? `+${r?.length - 1} more` : void 0;
    return a(W, c), a(ae, `${r?.join(", ")}`), `${r?.[0]}`;
  }, ie = (r, c, M) => {
    if (a(W, void 0), a(ae, void 0), !r || !c) return;
    let R = r.value;
    if (c.type === i.BOOLEAN)
      R = Kt(r.value);
    else if (c.type === i.DATETIME)
      R = re(r, c);
    else if (c.type === i.ARRAY)
      if (!Re(r.operator))
        R = r.value;
      else {
        const $ = Array.isArray(r.value) ? r.value : [r.value];
        R = N($);
      }
    else if (c.type === i.BB_REFERENCE || c.type === i.BB_REFERENCE_SINGLE) {
      let $ = "";
      if (!Re(r.operator))
        $ = M?.[r.value]?.email ?? r.value;
      else {
        const T = Array.isArray(r.value) ? r.value : [r.value];
        $ = N(T.map((ne) => M?.[ne]?.email ?? ne));
      }
      R = $;
    }
    return `${e(V)?.label.toLowerCase()} ${r.noValue ? "" : R}`;
  };
  d(() => f(y()), () => {
    a(J, y() ? "x-circle" : "sliders-horizontal");
  }), d(() => (f(I()), f(F())), () => {
    a(z, I() ? F()?.[I()?.field] : void 0);
  }), d(() => (f(y()), f(E())), () => {
    a(V, y() ? E()?.find((r) => r.value === y().operator) : void 0);
  }), d(() => (e(V), et), () => {
    a(t, e(V)?.value !== et.RANGE);
  }), d(() => (f(y()), e(z), x()), () => {
    a(O, ie(y(), e(z), x()));
  }), st(), $e(), tt(
    Aa(Q, {
      get filter() {
        return y();
      },
      get operators() {
        return E();
      },
      get schema() {
        return F();
      },
      get config() {
        return I();
      },
      get buttonText() {
        return H();
      },
      get defaultOperator() {
        return C();
      },
      $$events: {
        change(r) {
          pt.call(this, n, r);
        }
      },
      $$slots: {
        anchor: (r, c) => {
          var M = Na(), R = G(M);
          let $;
          var T = G(R);
          let ne;
          var ue = G(T), q = G(ue);
          Rt(q, {
            get name() {
              return e(J);
            },
            get size() {
              return _();
            }
          }), U(ue);
          var me = pe(ue, 2);
          let se;
          var A = G(me), Z = G(A, !0);
          U(A);
          var B = pe(A, 2);
          {
            var ze = (s) => {
              var v = Fa(), g = G(v, !0);
              U(v), Xe(() => Ke(g, e(O))), D(s, v);
            };
            le(B, (s) => {
              y() && s(ze);
            });
          }
          U(me);
          var Pe = pe(me, 2);
          {
            var Me = (s) => {
              var v = Da(), g = G(v, !0);
              U(v), Xe(() => Ke(g, e(W))), D(s, v);
            };
            le(Pe, (s) => {
              e(W) && s(Me);
            });
          }
          U(T), tt(T, (s) => a(oe, s), () => e(oe)), U(R), U(M), Xe(
            (s, v, g, j) => {
              $ = dt(R, 1, "filter-button-wrap svelte-zc2c1d", null, $, s), ne = dt(T, 1, `new-styles spectrum-Button spectrum-Button--secondary spectrum-Button--size${v ?? ""}`, "svelte-zc2c1d", ne, g), Xt(T, "title", e(ae) || e(O)), se = dt(me, 1, "spectrum-Button-label svelte-zc2c1d", null, se, j), Ke(Z, (f(I()), p(() => I()?.label || I()?.field)));
            },
            [
              () => ({ inactive: !y() }),
              () => (f(_()), p(() => _().toUpperCase())),
              () => ({ "is-disabled": P() }),
              () => ({ truncate: e(t) })
            ]
          ), St("click", ue, (s) => {
            y() && s.stopPropagation(), P() || h("toggle");
          }), D(r, M);
        }
      },
      $$legacy: !0
    }),
    (r) => a(X, r),
    () => e(X)
  ), qe(), te();
}
var wa = ge("<!> <!>", 1), xa = ge('<div><div class="filters svelte-116ylo9"><!></div></div>');
function Va(Q, n) {
  We(n, !1);
  const x = () => Te(M, "$memoFilters", z), k = () => Te(R, "$component", z), te = () => Te(ue, "$rowCache", z), J = () => Te(Je, "$uiStateStore", z), [z, V] = rt(), t = o(), O = o(), P = o(), _ = o(), H = o(), C = o(), y = o(), I = o(), F = o(), E = o(), h = o(), ve = o(), X = o(), oe = o();
  let W = u(n, "persistFilters", 8, !1), ae = u(n, "showClear", 8, !1), re = u(n, "filterConfig", 24, () => []), N = u(n, "targetComponent", 8), ie = u(n, "size", 8, "M"), r = u(n, "buttonText", 8, "Apply"), c = u(n, "defaultOperator", 24, () => {
  });
  const M = ea({}), R = Ue("component"), { API: $, fetchDatasourceSchema: T, getRelationshipSchemaAdditions: ne } = Ue("sdk"), ue = wt({});
  ta("rows", ue);
  const q = xt("filter"), me = {
    logicalOperator: At.ALL,
    onEmptyFilter: aa.RETURN_NONE,
    groups: [
      {
        logicalOperator: At.ALL,
        // could be configurable
        filters: []
      }
    ]
  };
  let se = o(!1), A = o({}), Z = o(), B = o(null);
  const ze = (l) => {
    !e(B) && l ? (a(B, l), e(se) || he()) : e(B) && !l && (a(se, !1), a(B, null), a(A, {}), a(Z, null));
  }, Pe = (l, m) => {
    if (!l?.field || !l.columnType || !m)
      return [];
    const b = l.columnType || m[l.field].type;
    let S = ca({ type: b }, l.field, e(P));
    const be = b === i.DATETIME, L = {
      equal: q.is,
      notEqual: q.isNot,
      string: q.startsWith,
      fuzzy: q.like,
      empty: q.empty,
      notEmpty: q.notEmpty,
      oneOf: q.isIn,
      notOneOf: q.notOneOf,
      rangeLow: q.moreThanOrEqualTo,
      rangeHigh: q.lessThanOrEqualTo
    };
    return S = [
      ...S,
      ...b === i.DATETIME ? [{ value: et.RANGE, label: q.between }] : []
    ], S.filter((w) => !(be && (w.value === ya.ONE_OF || w.value === we.NOT_ONE_OF))).map((w) => ({ ...w, label: L[w.value] || w.label }));
  }, Me = (l) => {
    const m = at(me);
    if (delete m.onEmptyFilter, m.groups) {
      const b = m.groups;
      b[0].filters = Object.values(l);
    }
    return m;
  }, s = (l) => {
    if (!(!k()?.id || !e(_))) {
      if (Object.keys(e(A)).length == 0) {
        e(ve)?.(k().id), v();
        return;
      }
      W() && v(), e(h)?.(k().id, e(y) ? l : e(O));
    }
  }, v = () => {
    Je.update((l) => ({
      ...l,
      [k().id]: {
        sourceId: e(P).resourceId,
        filters: e(A)
      }
    }));
  }, g = () => {
    Je.update((l) => (delete l[k().id], l));
  }, j = [
    i.ATTACHMENT_SINGLE,
    i.ATTACHMENTS,
    i.AI
  ];
  async function xe(l) {
    if (l) {
      const m = await T(l, { enrichRelationships: !0, formSchema: !1 }), b = Object.entries(m || {}).filter(([L, w]) => !j.includes(w.type)), S = Object.fromEntries(b), be = await ne(S);
      a(Z, { ...S, ...be });
    } else
      a(Z, null);
  }
  const Ve = (l, m) => Pe(l, m), ye = () => {
    a(A, {}), Je.update((l) => (delete l[k().id], l));
  }, Ce = (l) => {
    const m = Object.entries(l || {}).filter(([b, S]) => S.type === i.BB_REFERENCE_SINGLE || S.type === i.BB_REFERENCE);
    return Object.fromEntries(m);
  }, Ee = (l) => {
    const m = Object.entries(l || {}).reduce(
      (S, [be, L]) => ((L.type === i.BB_REFERENCE_SINGLE || L.type === i.BB_REFERENCE) && L.value && (S = [
        ...S,
        ...Array.isArray(L.value) ? L.value : [L.value]
      ]), S),
      []
    ), b = new Set(m);
    return Array.from(b);
  }, je = async (l) => {
    if (!l.length)
      return;
    const m = await fa($, l);
    Object.keys(m).length && ue.update((b) => ({ ...b, ...m }));
  }, he = () => {
    if (W()) {
      const l = J()[k().id]?.filters;
      a(A, at(l || {}));
    }
    a(se, !0);
  };
  ra(() => {
    W() ? he() : g();
  }), na(() => {
    e(ve)?.(k().id);
  }), d(() => e(A), () => {
    M.set(e(A));
  }), d(() => x(), () => {
    a(t, Me(x()));
  }), d(() => (e(t), sa), () => {
    a(O, e(t) ? ia(e(t)) : null);
  }), d(() => f(N()), () => {
    a(P, N()?.embeddedData?.dataSource ?? N()?.datasource);
  }), d(() => f(N()), () => {
    a(_, N()?.embeddedData?.componentId ?? N()?.id);
  }), d(() => e(_), () => {
    a(H, ua.actions.getComponentById(e(_)));
  }), d(() => f(N()), () => {
    a(C, (N()?.embeddedData?.loaded ?? N()?.loaded) || !1);
  }), d(() => (e(C), e(H)), () => {
    e(C) && ze(e(H));
  }), d(() => (e(B), e(P)), () => {
    e(B) && xe(e(P));
  }), d(() => e(B), () => {
    a(y, e(B)?._component === "@budibase/standard-components/gridblock");
  }), d(() => (f(re()), e(Z)), () => {
    a(I, re()?.filter((l) => l.active && e(Z)?.[l.field]));
  }), d(() => (e(y), ke), () => {
    a(F, e(y) ? ke.AddDataProviderFilterExtension : ke.AddDataProviderQueryExtension);
  }), d(() => (e(y), ke), () => {
    a(E, e(y) ? ke.RemoveDataProviderFilterExtension : ke.RemoveDataProviderQueryExtension);
  }), d(
    () => (e(_), e(C), e(F)),
    () => {
      a(h, e(_) && e(C) ? Ft(e(_), e(F)) : null);
    }
  ), d(
    () => (e(_), e(C), e(E)),
    () => {
      a(ve, e(_) && e(C) ? Ft(e(_), e(E)) : null);
    }
  ), d(
    () => (e(se), e(B), e(C), e(h), e(t)),
    () => {
      e(se) && e(B) && e(C) && e(h) && s(e(t));
    }
  ), d(() => x(), () => {
    a(X, Ce(x()));
  }), d(() => e(X), () => {
    a(oe, Ee(e(X)));
  }), d(() => (e(oe), te()), () => {
    je(e(oe).filter((l) => !te()[l]));
  }), st(), $e();
  var Ae = xa(), Ye = G(Ae), lt = G(Ye);
  da(lt, {
    wrap: !0,
    direction: "row",
    hAlign: "left",
    vAlign: "top",
    gap: "S",
    children: (l, m) => {
      var b = wa(), S = ee(b);
      la(S, 1, () => e(I) || [], oa, (w, Y) => {
        const Fe = de(() => (x(), e(Y), p(() => x()[e(Y).field])));
        {
          let De = de(() => (e(Y), e(Z), p(() => Ve(e(Y), e(Z)))));
          Ra(w, {
            get size() {
              return ie();
            },
            get config() {
              return e(Y);
            },
            get filter() {
              return e(Fe);
            },
            get schema() {
              return e(Z);
            },
            get buttonText() {
              return r();
            },
            get defaultOperator() {
              return c();
            },
            get operators() {
              return e(De);
            },
            $$events: {
              change: (K) => {
                if (K.detail)
                  a(A, { ...e(A), [e(Y).field]: K.detail });
                else {
                  const { [e(Y).field]: ce, ...Ge } = e(A);
                  a(A, { ...Ge });
                }
              },
              toggle: () => {
                const { [e(Y).field]: K, ...ce } = e(A);
                a(A, { ...ce });
              }
            }
          });
        }
      });
      var be = pe(S, 2);
      {
        var L = (w) => {
          Ct(w, {
            get size() {
              return ie();
            },
            secondary: !0,
            $$events: { click: ye },
            children: (Y, Fe) => {
              It();
              var De = Bt("Clear all");
              D(Y, De);
            },
            $$slots: { default: !0 }
          });
        };
        le(be, (w) => {
          f(ae()), e(A), p(() => ae() && Object.keys(e(A)).length) && w(L);
        });
      }
      D(l, b);
    },
    $$slots: { default: !0 }
  }), U(Ye), U(Ae), D(Q, Ae), qe(), V();
}
export {
  Va as default
};
