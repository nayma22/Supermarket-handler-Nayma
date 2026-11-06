import { p as a, c as x, r as b, t as E, b as se, V as wa, W as sr, d as l, f as L, g as He, h as ft, X as La, m as Fe, E as ot, s as M, u as T, Y as Ke, a as _e, e as be, Z as Ut, w as We, I as $e, _ as Et, $ as Mt, a0 as Pt, B as d, j as e, l as N, i as h, k as Qe, q as ie, a1 as ir, a2 as cr, a3 as Pe, a4 as Ve, a5 as Be, a6 as vr, z as y, v as gt, a7 as dt, a8 as dr, n as qe, H as ze, a9 as oa, aa as Lt, y as ht, ab as pa, ac as sa, ad as ia, A as c, x as me, ae as ur, af as pt, ag as ut, ah as fr, ai as Pa, aj as Ta, ak as Bt, al as ca, am as gr, an as hr, ao as _r, ap as mr, aq as br, T as Ca, U as Aa, ar as qt, as as nt, at as lt, au as xr, av as va, aw as da, ax as yr, ay as kr, az as Sr, aA as wr, aB as Lr, aC as pr, aD as ua, aE as fa, aF as Pr, aG as ga, aH as Tr, aI as Cr, N as Ar, O as Nr, Q as Br } from "./index-quCB9sGT.js";
import { U as qr, h as Ur } from "./UserAvatar-BJdD6nVV.js";
import { M as Mr, I as St } from "./Item-ymok-NiS.js";
import { h as Er } from "./users-BbsM5o3P.js";
function ha(v) {
  return !!v.providerType;
}
var $r = L('<div class="error-message svelte-x1z8mp"> </div>');
function zr(v, t) {
  let r = a(t, "error", 8, null);
  var n = $r(), f = x(n, !0);
  b(n), E(() => se(f, r())), wa(3, n, () => sr, () => ({ duration: 130 })), l(v, n);
}
var Ir = L('<div class="error-icon svelte-ct7phr"><!></div>'), Or = L('<div><div class="content svelte-ct7phr"><div class="field svelte-ct7phr"><!></div> <!></div> <!></div>');
function Hr(v, t) {
  He(t, !1);
  let r = a(t, "disabled", 8, !1), n = a(t, "error", 12, null), f = a(t, "focused", 8, !1), i = a(t, "clickable", 8, !1), P = a(t, "validate", 8), o = a(t, "value", 8), g = a(t, "ref", 28, () => {
  }), W = a(t, "autoHeight", 24, () => {
  }), B = a(t, "compact", 8, !1);
  const $ = ft("fancy-form"), H = Math.random().toString(), u = {
    validate: () => (P() && n(P()(o())), !n())
  };
  La(() => ($ && $.registerField(H, u), () => {
    $ && $.unregisterField(H);
  })), Fe();
  var k = Or();
  let q;
  var I = x(k), C = x(I), _ = x(C);
  ot(_, t, "default", {}, null), b(C);
  var R = M(C, 2);
  {
    var j = (w) => {
      var A = Ir(), Q = x(A);
      $e(Q, { name: "warning" }), b(A), l(w, A);
    };
    T(R, (w) => {
      n() && w(j);
    });
  }
  b(I);
  var Y = M(I, 2);
  {
    var m = (w) => {
      zr(w, {
        get error() {
          return n();
        }
      });
    };
    T(Y, (w) => {
      n() && w(m);
    });
  }
  b(k), Ke(k, (w) => g(w), () => g()), E((w) => q = _e(k, 1, "fancy-field svelte-ct7phr", null, q, w), [
    () => ({
      error: n(),
      disabled: r(),
      focused: f(),
      clickable: i(),
      compact: B(),
      "auto-height": W()
    })
  ]), be("click", I, function(w) {
    Ut.call(this, t, w);
  }), l(v, k), We();
}
var Fr = L("<div><!></div>");
function Wr(v, t) {
  let r = a(t, "placeholder", 8, !0);
  var n = Fr();
  let f;
  var i = x(n);
  ot(i, t, "default", {}, null), b(n), E((P) => f = _e(n, 1, "svelte-m3thcp", null, f, P), [() => ({ placeholder: r() })]), l(v, n);
}
var Rr = L('<div class="fancy-form svelte-7xsnp"><!></div>');
function Dr(v, t) {
  He(t, !1);
  let r = {};
  Et("fancy-form", {
    registerField: (o, g) => {
      r = { ...r, [o]: g };
    },
    unregisterField: (o) => {
      delete r[o], r = r;
    }
  });
  const n = () => {
    let o = !0;
    return Object.values(r).forEach((g) => {
      g.validate() || (o = !1);
    }), o;
  };
  var f = { validate: n };
  Fe();
  var i = Rr(), P = x(i);
  return ot(P, t, "default", {}, null), b(i), l(v, i), Mt(t, "validate", n), We(f);
}
var Vr = L('<div class="suffix svelte-w1fx0n"> </div>'), jr = L("<!> <input/> <!>", 1);
function _a(v, t) {
  He(t, !1);
  const r = y();
  let n = a(t, "label", 8), f = a(t, "value", 12), i = a(t, "type", 8, "text"), P = a(t, "disabled", 8, !1), o = a(t, "error", 12, null), g = a(t, "validate", 8, null), W = a(t, "suffix", 8, null), B = a(t, "validateOn", 8, "change");
  const $ = Pt();
  let H = y(), u = y(!1), k = y(!1);
  const q = (C) => {
    const _ = C.target.value;
    $("change", _), f(_), g() && (o() || B() === "change") && o(g()(_));
  }, I = (C) => {
    d(u, !1);
    const _ = C.target.value;
    $("blur", _), g() && B() === "blur" && o(g()(_));
  };
  La(() => {
    const C = setInterval(
      () => {
        d(k, e(H)?.matches(":-webkit-autofill")), e(k) && clearInterval(C);
      },
      100
    ), _ = setTimeout(
      () => {
        clearInterval(C);
      },
      2e3
    );
    return () => {
      clearInterval(C), clearTimeout(_);
    };
  }), N(
    () => (e(k), e(u), h(f())),
    () => {
      d(r, !e(k) && !e(u) && !f());
    }
  ), Qe(), Fe(), Hr(v, {
    get error() {
      return o();
    },
    get value() {
      return f();
    },
    get validate() {
      return g();
    },
    get disabled() {
      return P();
    },
    get focused() {
      return e(u);
    },
    children: (C, _) => {
      var R = jr(), j = ie(R);
      {
        var Y = (J) => {
          Wr(J, {
            get placeholder() {
              return e(r);
            },
            children: (ne, ee) => {
              Ve();
              var le = Be();
              E(() => se(le, n())), l(ne, le);
            },
            $$slots: { default: !0 }
          });
        };
        T(j, (J) => {
          n() && J(Y);
        });
      }
      var m = M(j, 2);
      ir(m);
      let w;
      Ke(m, (J) => d(H, J), () => e(H));
      var A = M(m, 2);
      {
        var Q = (J) => {
          var ne = Vr(), ee = x(ne, !0);
          b(ne), E(() => se(ee, W())), wa(1, ne, () => vr, () => ({ duration: 130 })), l(J, ne);
        };
        T(A, (J) => {
          W() && !e(r) && J(Q);
        });
      }
      E(
        (J) => {
          m.disabled = P(), cr(m, f() || ""), Pe(m, "type", i() || "text"), w = _e(m, 1, "svelte-w1fx0n", null, w, J);
        },
        [() => ({ placeholder: e(r) })]
      ), be("input", m, q), be("focus", m, () => d(u, !0)), be("blur", m, I), l(C, R);
    },
    $$slots: { default: !0 }
  }), We();
}
var Gr = L("<div><!></div> <!>", 1);
function Xr(v, t) {
  He(t, !1);
  let r = a(t, "disabled", 8, !1), n = a(t, "align", 8, "left"), f = a(t, "portalTarget", 24, () => {
  }), i = a(t, "openOnHover", 8, !1), P = a(t, "animate", 8, !0), o = a(t, "offset", 24, () => {
  }), g = a(t, "widthMode", 8, "no-anchor"), W = a(t, "roundedPopover", 8, !1), B = a(t, "customZIndex", 24, () => {
  });
  const $ = ft("actionMenu");
  let H = y(), u = y(), k, q = y(!1);
  function I(ee) {
    d(H, ee.firstElementChild ?? void 0);
  }
  const C = () => {
    m(), e(u).show();
  }, _ = () => {
    e(u).hide();
  }, R = () => {
    _(), $?.hide();
  }, j = (ee) => {
    r() || (ee.stopPropagation(), C());
  }, Y = () => {
    k = setTimeout(_, 10);
  }, m = () => {
    clearTimeout(k);
  };
  Et("actionMenu", { show: C, hide: _, hideAll: R });
  var w = { show: C, hide: _ };
  Fe();
  var A = Gr(), Q = ie(A), J = x(Q);
  ot(
    J,
    t,
    "control",
    {
      get open() {
        return e(q);
      }
    },
    null
  ), b(Q), gt(Q, (ee) => I?.(ee)), dt(() => be("click", Q, function(...ee) {
    (i() ? null : j)?.apply(this, ee);
  })), dt(() => be("mouseenter", Q, function(...ee) {
    (i() ? C : null)?.apply(this, ee);
  })), dt(() => be("mouseleave", Q, function(...ee) {
    (i() ? Y : null)?.apply(this, ee);
  }));
  var ne = M(Q, 2);
  {
    let ee = ze(() => W() ? "12px" : void 0);
    Ke(
      dr(ne, {
        get anchor() {
          return e(H);
        },
        get align() {
          return n();
        },
        get portalTarget() {
          return f();
        },
        get animate() {
          return P();
        },
        get offset() {
          return o();
        },
        get customZIndex() {
          return B();
        },
        get widthMode() {
          return g();
        },
        resizable: !1,
        get borderRadius() {
          return e(ee);
        },
        get open() {
          return e(q);
        },
        set open(le) {
          d(q, le);
        },
        $$events: {
          open(le) {
            Ut.call(this, t, le);
          },
          close(le) {
            Ut.call(this, t, le);
          },
          mouseenter: () => {
            i() && m();
          },
          mouseleave: () => {
            i() && Y();
          }
        },
        children: (le, Ye) => {
          Mr(le, {
            children: (Ie, Je) => {
              var je = qe(), Re = ie(je);
              ot(Re, t, "default", {}, null), l(Ie, je);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 },
        $$legacy: !0
      }),
      (le) => d(u, le),
      () => e(u)
    );
  }
  return l(v, A), Mt(t, "show", C), Mt(t, "hide", _), We(w);
}
function ma(v) {
  return v != null && v !== "" || "This field is required";
}
function ba(v, ...t) {
  let r = !1;
  const n = Lt(""), f = oa(n, () => r || (r = !0, !1)), i = oa(
    [n, f],
    ([P, o]) => o && Yr(P, t)
  );
  return [n, i, f];
}
function Yr(v, t) {
  const r = t.find((n) => n(v) !== !0);
  return r && r(v);
}
var Zr = L("<!> <!>", 1);
function Kr(v, t) {
  He(t, !1);
  const r = () => me(I, "$firstPassword", o), n = () => me(_, "$firstTouched", o), f = () => me(C, "$passwordError", o), i = () => me(Y, "$repeatTouched", o), P = () => me(R, "$repeatPassword", o), [o, g] = ht(), W = y();
  let B = a(t, "passwordForm", 28, () => {
  }), $ = a(t, "password", 12), H = a(t, "error", 12), u = a(t, "policy", 8, pa), k = a(t, "labels", 24, () => ({}));
  const q = (m) => {
    const w = ur({ password: m, policy: u() });
    return w.valid ? null : !m || m.length < u().minLength ? k()?.minLengthText?.replace("{minLength}", u().minLength.toString()) || w.error : w.error || `Password must contain no more than ${u().maxLength} characters.`;
  }, [I, C, _] = ba("", ma), [R, j, Y] = ba("", ma, q);
  N(() => r(), () => {
    $(r());
  }), N(
    () => (n(), f(), i(), h($())),
    () => {
      d(W, n() && f() || i() && q($()));
    }
  ), N(
    () => (r(), n(), i(), P(), e(W)),
    () => {
      H(!r() || !n() || !i() || r() !== P() || e(W));
    }
  ), Qe(), Fe(), Ke(
    Dr(v, {
      children: (m, w) => {
        var A = Zr(), Q = ie(A);
        {
          let ne = ze(() => (h(k()), c(() => k()?.passwordLabel ?? "Password")));
          _a(Q, {
            get label() {
              return e(ne);
            },
            type: "password",
            get error() {
              return e(W);
            },
            get value() {
              return ia(), r();
            },
            set value(ee) {
              sa(I, ee);
            },
            $$legacy: !0
          });
        }
        var J = M(Q, 2);
        {
          let ne = ze(() => (h(k()), c(() => k()?.repeatLabel ?? "Repeat password"))), ee = ze(() => (i(), r(), P(), h(k()), c(() => i() && r() !== P() && (k()?.mismatchText ?? "Passwords must match"))));
          _a(J, {
            get label() {
              return e(ne);
            },
            type: "password",
            get error() {
              return e(ee);
            },
            get value() {
              return ia(), P();
            },
            set value(le) {
              sa(R, le);
            },
            $$legacy: !0
          });
        }
        l(m, A);
      },
      $$slots: { default: !0 },
      $$legacy: !0
    }),
    (m) => B(m),
    () => B()
  ), We(), g();
}
var Qr = L("<!> <!>", 1);
function Jr(v, t) {
  He(t, !1);
  const r = y();
  let n = a(t, "API", 8), f = a(t, "passwordPolicy", 8, pa), i = a(t, "notifySuccess", 24, () => pt.success), P = a(t, "notifyError", 24, () => pt.error);
  const o = ut("passwordModal");
  let g = a(t, "labels", 24, () => ({}));
  const W = Pt();
  let B = y(""), $ = y("");
  const H = async () => {
    try {
      await n().updateSelf({ password: e(B) }), i()(e(r).successText), W("save");
    } catch {
      P()(e(r).errorText);
    }
  }, u = (k) => {
    k.key === "Enter" && !e($) && e(B) && H();
  };
  N(() => h(g()), () => {
    d(r, { ...o, ...g() });
  }), Qe(), Fe(), be("keydown", fr, u);
  {
    let k = ze(() => !!e($) || !e(B));
    Pa(v, {
      get title() {
        return e(r), c(() => e(r).title);
      },
      get confirmText() {
        return e(r), c(() => e(r).saveText);
      },
      get cancelText() {
        return e(r), c(() => e(r).cancelText);
      },
      onConfirm: H,
      get disabled() {
        return e(k);
      },
      children: (q, I) => {
        var C = Qr(), _ = ie(C);
        Ta(_, {
          size: "S",
          children: (j, Y) => {
            Ve();
            var m = Be();
            E(() => se(m, (e(r), c(() => e(r).body)))), l(j, m);
          },
          $$slots: { default: !0 }
        });
        var R = M(_, 2);
        Kr(R, {
          get policy() {
            return f();
          },
          get labels() {
            return e(r);
          },
          get password() {
            return e(B);
          },
          set password(j) {
            d(B, j);
          },
          get error() {
            return e($);
          },
          set error(j) {
            d($, j);
          },
          $$legacy: !0
        }), l(q, C);
      },
      $$slots: { default: !0 }
    });
  }
  We();
}
var en = L("<!> <!> <!> <!>", 1);
function tn(v, t) {
  He(t, !1);
  const r = () => me(u, "$values", n), [n, f] = ht(), i = y();
  let P = a(t, "user", 24, () => {
  }), o = a(t, "API", 8), g = a(t, "notifySuccess", 24, () => pt.success), W = a(t, "notifyError", 24, () => pt.error);
  const B = ut("profileModal");
  let $ = a(t, "labels", 24, () => ({}));
  const H = Pt(), u = Lt({ firstName: P()?.firstName, lastName: P()?.lastName }), k = async () => {
    try {
      await o().updateSelf(r()), g()(e(i).successText), H("save");
    } catch (q) {
      console.error(q), W()(e(i).errorText);
    }
  };
  N(() => h($()), () => {
    d(i, { ...B, ...$() });
  }), Qe(), Fe(), Pa(v, {
    get title() {
      return e(i), c(() => e(i).title);
    },
    get confirmText() {
      return e(i), c(() => e(i).saveText);
    },
    get cancelText() {
      return e(i), c(() => e(i).cancelText);
    },
    onConfirm: k,
    children: (q, I) => {
      var C = en(), _ = ie(C);
      Ta(_, {
        size: "S",
        children: (m, w) => {
          Ve();
          var A = Be();
          E(() => se(A, (e(i), c(() => e(i).body)))), l(m, A);
        },
        $$slots: { default: !0 }
      });
      var R = M(_, 2);
      {
        let m = ze(() => (h(P()), c(() => P()?.email || "")));
        Bt(R, {
          disabled: !0,
          get value() {
            return e(m);
          },
          get label() {
            return e(i), c(() => e(i).emailLabel);
          }
        });
      }
      var j = M(R, 2);
      Bt(j, {
        get label() {
          return e(i), c(() => e(i).firstNameLabel);
        },
        get value() {
          return r().firstName;
        },
        set value(m) {
          ca(u, c(r).firstName = m, c(r));
        },
        $$legacy: !0
      });
      var Y = M(j, 2);
      Bt(Y, {
        get label() {
          return e(i), c(() => e(i).lastNameLabel);
        },
        get value() {
          return r().lastName;
        },
        set value(m) {
          ca(u, c(r).lastName = m, c(r));
        },
        $$legacy: !0
      }), l(q, C);
    },
    $$slots: { default: !0 }
  }), We(), f();
}
const wt = [];
let Na;
function Ba(v) {
  const t = v.pattern.test(Na);
  xa(v, v.className, t), xa(v, v.inactiveClassName, !t);
}
function xa(v, t, r) {
  (t || "").split(" ").forEach((n) => {
    n && (v.node.classList.remove(n), r && v.node.classList.add(n));
  });
}
gr.subscribe((v) => {
  Na = v.location + (v.querystring ? "?" + v.querystring : ""), wt.map(Ba);
});
function ya(v, t) {
  if (t && (typeof t == "string" || typeof t == "object" && t instanceof RegExp) ? t = {
    path: t
  } : t = t || {}, !t.path && v.hasAttribute("href") && (t.path = v.getAttribute("href"), t.path && t.path.length > 1 && t.path.charAt(0) == "#" && (t.path = t.path.substring(1))), t.className || (t.className = "active"), !t.path || typeof t.path == "string" && (t.path.length < 1 || t.path.charAt(0) != "/" && t.path.charAt(0) != "*"))
    throw Error('Invalid value for "path" argument');
  const { pattern: r } = typeof t.path == "string" ? hr(t.path) : { pattern: t.path }, n = {
    node: v,
    className: t.className,
    inactiveClassName: t.inactiveClassName,
    pattern: r
  };
  return wt.push(n), Ba(n), {
    // When the element is destroyed, remove it from the list
    destroy() {
      wt.splice(wt.indexOf(n), 1);
    }
  };
}
var an = L('<span class="nav-item-letter svelte-e981re"><!></span>'), rn = L("<!> ", 1), nn = L("<a><!></a>"), ln = L('<span class="nav-item-letter svelte-e981re"><!></span>'), on = L("<!> ", 1), sn = L("<a><!></a>"), cn = L('<div class="link"><!></div>'), vn = L('<span class="nav-item-letter svelte-e981re"> </span>'), dn = L('<!> <span class="svelte-e981re"> </span> <!>', 1), un = L("<a> </a>"), fn = L('<a class="svelte-e981re"> </a>'), gn = L('<div><div><!></div> <div class="sublinks-wrapper svelte-e981re"><div class="sublinks svelte-e981re"></div></div></div>');
function hn(v, t) {
  He(t, !1);
  const r = () => me(_r, "$builderStore", i), n = () => me(mr, "$screenStore", i), f = () => me(w(), "$navStateStore", i), [i, P] = ht(), o = y(), g = y(), W = y(), B = y(), $ = y(), H = y(), u = y();
  let k = a(t, "type", 8), q = a(t, "url", 8), I = a(t, "text", 8), C = a(t, "subLinks", 8), _ = a(t, "icon", 8), R = a(t, "internalLink", 8), j = a(t, "customStyles", 8), Y = a(t, "leftNav", 8, !1), m = a(t, "mobile", 8, !1), w = a(t, "navStateStore", 8), A = a(t, "collapsed", 8, !1);
  const Q = Pt();
  let J = y();
  const ne = "var(--navLinkIconColor, var(--navTextColor))", ee = (ce) => {
    if (!ce)
      return "";
    const Se = ce.trim().split(/\s+/);
    return Se.length === 1 ? Se[0].charAt(0).toUpperCase() : Se.slice(0, 2).map((ve) => ve.charAt(0).toUpperCase()).join("");
  }, le = () => {
    Q("clickLink"), d(J, Math.random());
  }, Ye = () => {
    e($) && w().update((ce) => ({ ...ce, [I()]: !ce[I()] }));
  };
  N(() => (r(), n()), () => {
    d(o, (ce) => r().inBuilder && ce && ce === n().activeScreen?.routing?.route);
  }), N(() => (e(o), h(q())), () => {
    d(g, e(o)(q()));
  }), N(() => (h(C()), e(o)), () => {
    d(W, (C() || []).some((ce) => e(o)(ce.url)));
  }), N(
    () => (f(), h(I()), e(W)),
    () => {
      d(B, !!f()[I()] || e(W));
    }
  ), N(() => (h(Y()), h(m())), () => {
    d($, Y() || m());
  }), N(() => (e($), e(B)), () => {
    d(H, !e($) || e(B) ? "caret-down" : "caret-right");
  }), N(() => h(I()), () => {
    d(u, ee(I()));
  }), Qe(), Fe();
  var Ie = qe(), Je = ie(Ie);
  {
    var je = (ce) => {
      var Se = cn(), ve = x(Se);
      {
        var we = (de) => {
          var G = nn();
          let K;
          var xe = x(G);
          {
            var Ue = (U) => {
              qt(U, {
                get text() {
                  return I();
                },
                get position() {
                  return h(nt), c(() => nt.Right);
                },
                children: (oe, ae) => {
                  var p = an(), ue = x(p);
                  {
                    var z = (O) => {
                      $e(O, {
                        get name() {
                          return _();
                        },
                        color: ne,
                        size: "XS"
                      });
                    }, ge = (O) => {
                      var Z = Be();
                      E(() => se(Z, e(u))), l(O, Z);
                    };
                    T(ue, (O) => {
                      _() ? O(z) : O(ge, !1);
                    });
                  }
                  b(p), l(oe, p);
                },
                $$slots: { default: !0 }
              });
            }, Le = (U) => {
              var oe = rn(), ae = ie(oe);
              {
                var p = (z) => {
                  $e(z, {
                    get name() {
                      return _();
                    },
                    color: ne,
                    size: "S"
                  });
                };
                T(ae, (z) => {
                  _() && z(p);
                });
              }
              var ue = M(ae);
              E(() => se(ue, ` ${I() ?? ""}`)), l(U, oe);
            };
            T(xe, (U) => {
              A() ? U(Ue) : U(Le, !1);
            });
          }
          b(G), dt(() => be("click", G, le)), gt(G, (U, oe) => ya?.(U, oe), q), E(
            (U) => {
              Pe(G, "href", `#${q() ?? ""}`), lt(G, j()), K = _e(G, 1, "svelte-e981re", null, K, U);
            },
            [
              () => ({ builderActive: e(g), collapsed: A() })
            ]
          ), l(de, G);
        }, Te = (de) => {
          var G = sn();
          let K;
          var xe = x(G);
          {
            var Ue = (U) => {
              qt(U, {
                get text() {
                  return I();
                },
                get position() {
                  return h(nt), c(() => nt.Right);
                },
                children: (oe, ae) => {
                  var p = ln(), ue = x(p);
                  {
                    var z = (O) => {
                      $e(O, {
                        get name() {
                          return _();
                        },
                        color: ne,
                        size: "L"
                      });
                    }, ge = (O) => {
                      var Z = Be();
                      E(() => se(Z, e(u))), l(O, Z);
                    };
                    T(ue, (O) => {
                      _() ? O(z) : O(ge, !1);
                    });
                  }
                  b(p), l(oe, p);
                },
                $$slots: { default: !0 }
              });
            }, Le = (U) => {
              var oe = on(), ae = ie(oe);
              {
                var p = (z) => {
                  $e(z, {
                    get name() {
                      return _();
                    },
                    color: ne,
                    size: "S"
                  });
                };
                T(ae, (z) => {
                  _() && z(p);
                });
              }
              var ue = M(ae);
              E(() => se(ue, ` ${I() ?? ""}`)), l(U, oe);
            };
            T(xe, (U) => {
              A() ? U(Ue) : U(Le, !1);
            });
          }
          b(G), E(
            (U) => {
              Pe(G, "href", q()), K = _e(G, 1, "svelte-e981re", null, K, U);
            },
            [() => ({ collapsed: A() })]
          ), be("click", G, le), l(de, G);
        };
        T(ve, (de) => {
          R() ? de(we) : de(Te, !1);
        });
      }
      b(Se), l(ce, Se);
    }, Re = (ce) => {
      var Se = qe(), ve = ie(Se);
      br(ve, () => e(J), (we) => {
        var Te = gn();
        let de;
        var G = x(Te);
        let K;
        var xe = x(G);
        {
          var Ue = (ae) => {
            qt(ae, {
              get text() {
                return I();
              },
              get position() {
                return h(nt), c(() => nt.Right);
              },
              children: (p, ue) => {
                var z = qe(), ge = ie(z);
                {
                  var O = (F) => {
                    $e(F, {
                      get name() {
                        return _();
                      },
                      color: ne,
                      size: "S"
                    });
                  }, Z = (F) => {
                    var pe = vn(), Ce = x(pe, !0);
                    b(pe), E(() => se(Ce, e(u))), l(F, pe);
                  };
                  T(ge, (F) => {
                    _() ? F(O) : F(Z, !1);
                  });
                }
                l(p, z);
              },
              $$slots: { default: !0 }
            });
          }, Le = (ae) => {
            var p = dn(), ue = ie(p);
            {
              var z = (F) => {
                $e(F, {
                  get name() {
                    return _();
                  },
                  color: ne,
                  size: "S"
                });
              };
              T(ue, (F) => {
                _() && F(z);
              });
            }
            var ge = M(ue, 2), O = x(ge, !0);
            b(ge);
            var Z = M(ge, 2);
            $e(Z, {
              get name() {
                return e(H);
              },
              color: ne,
              size: "S"
            }), E(() => se(O, I())), l(ae, p);
          };
          T(xe, (ae) => {
            A() ? ae(Ue) : ae(Le, !1);
          });
        }
        b(G);
        var U = M(G, 2), oe = x(U);
        Ca(oe, 5, () => C() || [], Aa, (ae, p) => {
          var ue = qe(), z = ie(ue);
          {
            var ge = (Z) => {
              var F = un();
              let pe;
              var Ce = x(F, !0);
              b(F), dt(() => be("click", F, le)), gt(F, (Me, fe) => ya?.(Me, fe), () => e(p).url), E(
                (Me) => {
                  Pe(F, "href", `#${e(p), c(() => e(p).url) ?? ""}`), pe = _e(F, 1, "sublink svelte-e981re", null, pe, Me), se(Ce, (e(p), c(() => e(p).text)));
                },
                [
                  () => ({
                    active: !1,
                    builderActive: e(o)(e(p).url)
                  })
                ]
              ), l(Z, F);
            }, O = (Z) => {
              var F = fn(), pe = x(F, !0);
              b(F), E(() => {
                Pe(F, "href", (e(p), c(() => e(p).url))), se(pe, (e(p), c(() => e(p).text)));
              }), be("click", F, le), l(Z, F);
            };
            T(z, (Z) => {
              e(p), c(() => e(p).internalLink) ? Z(ge) : Z(O, !1);
            });
          }
          l(ae, ue);
        }), b(oe), b(U), b(Te), E(
          (ae, p) => {
            de = _e(Te, 1, "dropdown svelte-e981re", null, de, ae), K = _e(G, 1, "text svelte-e981re", null, K, p);
          },
          [
            () => ({ left: e($), expanded: e(B) }),
            () => ({ collapsed: A() })
          ]
        ), be("click", G, Ye), l(we, Te);
      }), l(ce, Se);
    };
    T(Je, (ce) => {
      !k() || k() === "link" ? ce(je) : ce(Re, !1);
    });
  }
  l(v, Ie), We(), P();
}
var _n = L("<!> <!> <!> <!>", 1), mn = L('<div class="text svelte-ynrlno"><div class="name svelte-ynrlno"> </div></div>'), bn = L("<!> <!>", 1), xn = L('<div class="container svelte-ynrlno"><!> <!></div>'), yn = L("<!> <!> <!>", 1), kn = L('<div class="text svelte-ynrlno"><div class="name svelte-ynrlno">Log in</div></div>'), Sn = L('<button class="container login-button svelte-ynrlno"><!> <!></button>');
function ka(v, t) {
  He(t, !1);
  const r = () => me(Y, "$authStore", i), n = () => me(m, "$environmentStore", i), f = () => me(A, "$appStore", i), [i, P] = ht(), o = y(), g = y(), W = y(), B = y(), $ = y(), H = y(), u = y(), k = y(), q = y(), I = y();
  let C = a(t, "compact", 8, !1), _ = a(t, "collapsed", 8, !1), R = a(t, "showLoginButton", 8, !0), j = a(t, "isPublicPreview", 8, !1);
  const { authStore: Y, environmentStore: m, notificationStore: w, appStore: A } = ft("sdk");
  let Q = y(), J = y();
  const { accountPortalAccountUrl: ne, builderUrl: ee, portalUrl: le } = Ur, Ye = (ve) => {
    if (!ve)
      return "";
    if (ve.firstName) {
      let we = ve.firstName;
      return ve.lastName && (we += ` ${ve.lastName}`), we;
    } else
      return ve.email;
  }, Ie = (ve) => {
    const we = ve ? ee() : le();
    window.location.href = we;
  }, Je = () => {
    yr();
  };
  N(() => r(), () => {
    d(o, Ye(r()));
  }), N(() => r(), () => {
    d(g, Er(r()));
  }), N(() => (r(), ha), () => {
    d(W, r() != null && ha(r()));
  }), N(() => (r(), n()), () => {
    d(B, r()?.accountPortalAccess && n().cloud);
  }), N(() => f(), () => {
    d($, f().embedded || f().inIframe);
  }), N(() => f(), () => {
    d(H, xr(f().application?.translationOverrides));
  }), N(() => e(H), () => {
    d(u, ut("userMenu", e(H)));
  }), N(() => e(H), () => {
    d(k, ut("profileModal", e(H)));
  }), N(() => e(H), () => {
    d(q, ut("passwordModal", e(H)));
  }), N(() => r(), () => {
    d(I, r());
  }), Qe(), Fe();
  var je = qe(), Re = ie(je);
  {
    var ce = (ve) => {
      var we = yn(), Te = ie(we);
      {
        let K = ze(() => C() ? "right" : "left");
        Xr(Te, {
          get align() {
            return e(K);
          },
          children: (xe, Ue) => {
            var Le = _n(), U = ie(Le);
            St(U, {
              icon: "user-gear",
              $$events: { click: () => e(Q)?.show() },
              children: (z, ge) => {
                Ve();
                var O = Be();
                E(() => se(O, (e(u), c(() => e(u).profile)))), l(z, O);
              },
              $$slots: { default: !0 }
            });
            var oe = M(U, 2);
            {
              var ae = (z) => {
                St(z, {
                  icon: "lock",
                  $$events: {
                    click: () => {
                      e(B) ? window.location.href = ne(n().accountPortalUrl) : e(J)?.show();
                    }
                  },
                  children: (ge, O) => {
                    Ve();
                    var Z = Be();
                    E(() => se(Z, (e(u), c(() => e(u).password)))), l(ge, Z);
                  },
                  $$slots: { default: !0 }
                });
              };
              T(oe, (z) => {
                e(W) || z(ae);
              });
            }
            var p = M(oe, 2);
            St(p, {
              icon: "squares-four",
              get disabled() {
                return e($);
              },
              $$events: { click: () => Ie(e(g)) },
              children: (z, ge) => {
                var O = qe(), Z = ie(O);
                {
                  var F = (Ce) => {
                    var Me = Be();
                    E(() => se(Me, (e(u), c(() => e(u).builder)))), l(Ce, Me);
                  }, pe = (Ce) => {
                    var Me = Be();
                    E(() => se(Me, (e(u), c(() => e(u).portal)))), l(Ce, Me);
                  };
                  T(Z, (Ce) => {
                    e(g) ? Ce(F) : Ce(pe, !1);
                  });
                }
                l(z, O);
              },
              $$slots: { default: !0 }
            });
            var ue = M(p, 2);
            St(ue, {
              icon: "sign-out",
              get disabled() {
                return e($);
              },
              $$events: {
                click(...z) {
                  Y.actions.logOut?.apply(this, z);
                }
              },
              children: (z, ge) => {
                Ve();
                var O = Be();
                E(() => se(O, (e(u), c(() => e(u).logout)))), l(z, O);
              },
              $$slots: { default: !0 }
            }), l(xe, Le);
          },
          $$slots: {
            default: !0,
            control: (xe, Ue) => {
              var Le = xn(), U = x(Le);
              qr(U, {
                get user() {
                  return e(I);
                },
                size: "M",
                showTooltip: !1
              });
              var oe = M(U, 2);
              {
                var ae = (p) => {
                  var ue = bn(), z = ie(ue);
                  {
                    var ge = (Z) => {
                      var F = mn(), pe = x(F), Ce = x(pe, !0);
                      b(pe), b(F), E(() => se(Ce, e(o))), l(Z, F);
                    };
                    T(z, (Z) => {
                      C() || Z(ge);
                    });
                  }
                  var O = M(z, 2);
                  $e(O, { size: "S", name: "caret-down", color: "var(--navTextColor)" }), l(p, ue);
                };
                T(oe, (p) => {
                  _() || p(ae);
                });
              }
              b(Le), l(xe, Le);
            }
          }
        });
      }
      var de = M(Te, 2);
      Ke(
        va(de, {
          children: (K, xe) => {
            tn(K, {
              get API() {
                return da;
              },
              get user() {
                return r();
              },
              get notifySuccess() {
                return c(() => w.actions.success);
              },
              get notifyError() {
                return c(() => w.actions.error);
              },
              get labels() {
                return e(k);
              },
              $$events: { save: () => Y.actions.fetchUser() }
            });
          },
          $$slots: { default: !0 },
          $$legacy: !0
        }),
        (K) => d(Q, K),
        () => e(Q)
      );
      var G = M(de, 2);
      Ke(
        va(G, {
          children: (K, xe) => {
            Jr(K, {
              get API() {
                return da;
              },
              get passwordPolicy() {
                return n(), c(() => n().passwordPolicy);
              },
              get notifySuccess() {
                return c(() => w.actions.success);
              },
              get notifyError() {
                return c(() => w.actions.error);
              },
              get labels() {
                return e(q);
              },
              $$events: { save: () => Y.actions.logOut() }
            });
          },
          $$slots: { default: !0 },
          $$legacy: !0
        }),
        (K) => d(J, K),
        () => e(J)
      ), l(ve, we);
    }, Se = (ve) => {
      var we = qe(), Te = ie(we);
      {
        var de = (G) => {
          var K = Sn(), xe = x(K);
          {
            let U = ze(() => _() ? "M" : "S");
            $e(xe, {
              get size() {
                return e(U);
              },
              name: "sign-in",
              color: "var(--navTextColor)"
            });
          }
          var Ue = M(xe, 2);
          {
            var Le = (U) => {
              var oe = kn();
              l(U, oe);
            };
            T(Ue, (U) => {
              _() || U(Le);
            });
          }
          b(K), E(() => K.disabled = e($)), be("click", K, Je), l(G, K);
        };
        T(
          Te,
          (G) => {
            R() && G(de);
          },
          !0
        );
      }
      l(ve, we);
    };
    T(Re, (ve) => {
      r() && !j() ? ve(ce) : ve(Se, !1);
    });
  }
  l(v, je), We(), P();
}
var wn = L('<a><img class="svelte-1yowvh9"/></a>'), Ln = L('<a><img class="svelte-1yowvh9"/></a>'), pn = L('<img class="svelte-1yowvh9"/>');
function Sa(v, t) {
  He(t, !1);
  let r = a(t, "logoUrl", 8), n = a(t, "logoLinkUrl", 8), f = a(t, "openLogoLinkInNewTab", 8), i = a(t, "hideLogo", 8, !1), P = a(t, "title", 8), o = a(t, "isInternal", 8), g = a(t, "getSanitizedUrl", 8), W = a(t, "linkable", 8);
  Fe();
  var B = qe(), $ = ie(B);
  {
    var H = (u) => {
      var k = qe(), q = ie(k);
      {
        var I = (_) => {
          var R = wn(), j = x(R);
          b(R), gt(R, (Y) => W()?.(Y)), E(
            (Y) => {
              Pe(R, "href", Y), Pe(j, "src", r() || "/builder/bblogo.png"), Pe(j, "alt", P());
            },
            [
              () => (h(g()), h(n()), h(f()), c(() => g()(n(), f())))
            ]
          ), l(_, R);
        }, C = (_) => {
          var R = qe(), j = ie(R);
          {
            var Y = (w) => {
              var A = Ln(), Q = x(A);
              b(A), E(
                (J) => {
                  Pe(A, "target", f() ? "_blank" : "_self"), Pe(A, "href", J), Pe(Q, "src", r() || "/builder/bblogo.png"), Pe(Q, "alt", P());
                },
                [
                  () => (h(g()), h(n()), h(f()), c(() => g()(n(), f())))
                ]
              ), l(w, A);
            }, m = (w) => {
              var A = pn();
              E(() => {
                Pe(A, "src", r() || "/builder/bblogo.png"), Pe(A, "alt", P());
              }), l(w, A);
            };
            T(
              j,
              (w) => {
                n() ? w(Y) : w(m, !1);
              },
              !0
            );
          }
          l(_, R);
        };
        T(q, (_) => {
          h(n()), h(o()), h(f()), c(() => n() && o()(n()) && !f()) ? _(I) : _(C, !1);
        });
      }
      l(u, k);
    };
    T($, (u) => {
      i() || u(H);
    });
  }
  l(v, B), We();
}
const Pn = ({
  template: v,
  url: t
} = {}) => {
  let r = t;
  if (t)
    try {
      r = new URL(t, "http://example.com").pathname;
    } catch {
      r = t;
    }
  if (!v || !r)
    return !1;
  if (v === r)
    return !0;
  const n = v.split("/").filter(Boolean), f = r.split("/").filter(Boolean), i = (() => {
    let o = 0;
    for (let g = n.length - 1; g >= 0; g--) {
      const W = n[g];
      if (!W.startsWith(":") || !W.endsWith("?"))
        break;
      o++;
    }
    return o;
  })(), P = n.length - i;
  if (f.length < P || f.length > n.length)
    return !1;
  for (let o = 0; o < n.length; o++) {
    const g = n[o], W = f[o];
    if (!W)
      return g.startsWith(":") && g.endsWith("?");
    if (!g.startsWith(":") && g !== W)
      return !1;
  }
  return !0;
};
var Tn = L('<div class="banner svelte-qff93a"><div class="banner-content svelte-qff93a"> <!></div></div>'), Cn = L('<div class="burger svelte-qff93a"><!></div>'), An = L('<div class="nav-toggle svelte-qff93a"><i class="ph ph-sidebar-simple"></i></div>'), Nn = L('<div class="user top svelte-qff93a"><!></div>'), Bn = L("<div><!></div>"), qn = L("<div><!> <!></div>"), Un = L('<div data-name="Navigation" data-icon="eye"><div><div><div class="nav-header svelte-qff93a"><!> <div><!> <!></div> <!> <!></div> <div></div> <div><!></div> <!></div></div></div>'), Mn = L('<div class="banner svelte-qff93a"><div class="banner-content svelte-qff93a"> <!></div></div>'), En = L('<div data-name="Screen" data-icon="browser"><div><!> <div class="layout-content svelte-qff93a"><!> <div class="main-wrapper svelte-qff93a"><div class="main-content-area svelte-qff93a"><!> <div><!></div></div></div></div></div> <div id="side-panel-container"><div><button type="button" class="side-panel-close-button svelte-qff93a" aria-label="Close side panel"><!></button></div></div> <div class="modal-container"></div></div>');
function Hn(v, t) {
  He(t, !1);
  const r = () => me(wr, "$authStore", B), n = () => me(Lr, "$currentRole", B), f = () => me(je, "$context", B), i = () => me(ee, "$roleStore", B), P = () => me(ne, "$routeStore", B), o = () => me(Ye, "$builderStore", B), g = () => me(Ie, "$sidePanelStore", B), W = () => me(Re, "$navStateStore", B), [B, $] = ht(), H = y(), u = y(), k = y(), q = y(), I = y(), C = y(), _ = y(), R = y(), j = y(), Y = y(), m = y(), w = y(), A = y(), Q = y(), J = ft("sdk"), {
    routeStore: ne,
    roleStore: ee,
    linkable: le,
    builderStore: Ye,
    sidePanelStore: Ie,
    modalStore: Je
  } = J, je = ft("context"), Re = Lt({});
  let ce = y({}), Se = a(t, "title", 8), ve = a(t, "hideTitle", 8, !1), we = a(t, "logoUrl", 8), Te = a(t, "hideLogo", 8, !1), de = a(t, "navigation", 8, "Top"), G = a(t, "sticky", 8, !1), K = a(t, "links", 8), xe = a(t, "width", 8, "Large"), Ue = a(t, "navBackground", 8), Le = a(t, "navTextColor", 8), U = a(t, "navLinkHoverTextColor", 8), oe = a(t, "navLinkHoverIconColor", 8), ae = a(t, "navLinkHoverBackground", 8), p = a(t, "navLinkActiveTextColor", 8), ue = a(t, "navLinkActiveIconColor", 8), z = a(t, "navLinkActiveBackground", 8), ge = a(t, "navWidth", 8), O = a(t, "pageWidth", 8), Z = a(t, "logoLinkUrl", 8), F = a(t, "logoHeight", 8), pe = a(t, "openLogoLinkInNewTab", 8), Ce = a(t, "textAlign", 8), Me = a(t, "embedded", 8, !1), fe = a(t, "banner", 8), $t = a(t, "showLoginButton", 8, !0), qa = a(t, "collapsible", 8, !1), zt = a(t, "screenBackground", 8), It = a(t, "screenGradient", 8), Ot = a(t, "screenCustomCss", 8);
  const Ht = { Top: "top", Left: "left", None: "none" }, _t = {
    Max: "max",
    Large: "l",
    Medium: "m",
    Small: "s",
    "Extra small": "xs"
  };
  let Ft = a(
    t,
    "logoPosition",
    8,
    "top"
    // "top" or "bottom"
  ), Ua = a(t, "titleSize", 8, "S"), Ma = a(t, "titleColor", 8), et = y(!1), Ee = y(!1);
  const Wt = Lt({ headerHeight: 0 });
  Et("layout", Wt);
  let Oe = y(), mt = y(null);
  const Rt = (s) => {
    const S = st(s.url);
    return {
      ...s,
      internalLink: S,
      url: S ? s.url : Dt(s.url)
    };
  }, Ea = (s, S) => {
    if (o().inBuilder)
      return !0;
    const D = s?.url;
    return D ? !st(D) || D.includes("{{") ? !0 : [...S].some((X) => Pn({ template: X, url: D })) : !1;
  }, $a = (s, S, D = []) => {
    if (!s?.length)
      return [];
    const X = new Set(D.map((re) => re.path));
    return s.filter((re) => {
      if (!re.text || re.type !== "sublinks" && !re.url)
        return !1;
      const ye = re.roleId || ua.BASIC;
      return S?.find((ke) => ke === ye);
    }).map((re) => {
      const ye = Rt(re);
      return re.type === "sublinks" && re.subLinks?.length && (ye.subLinks = re.subLinks.filter((ke) => ke.text && Ea(ke, X)).map(Rt)), ye;
    }).filter((re) => re.type !== "sublinks" || re.subLinks?.length > 0);
  };
  function za(s = []) {
    if (!s?.length) return !0;
    const S = Ar(s), D = Nr(S), { visible: X } = Br(D);
    return X ?? !S.some((ye) => ye.action === "show");
  }
  const st = (s) => s?.startsWith("/"), Dt = (s) => s?.length ? s.startsWith("http") ? s : `http://${s}` : s, Ia = (s, S) => s !== "Left" ? 0 : S ? "0px" : "250px", Oa = (s, S) => S ? !s || s === "None" ? 0 : "61px" : s === "Top" ? "137px" : "0px", Ha = (s, S, D, X, re, ye, ke, De, at, Ge, rt) => {
    let Ae = `--width:${Ge}px; --height:${rt}px;`;
    return s && (Ae += `--navBackground:${s};`), S && (Ae += `--navTextColor:${S};`), D && (Ae += `--navLinkHoverTextColor:${D};`), X && (Ae += `--navLinkHoverIconColor:${X};`), re && (Ae += `--navLinkHoverBackground:${re};`), ye && (Ae += `--navLinkActiveTextColor:${ye};`), ke && (Ae += `--navLinkActiveIconColor:${ke};`), De && (Ae += `--navLinkActiveBackground:${De};`), Ae += `--logoHeight:${at || 24}px;`, Ae;
  }, Fa = (s, S, D) => {
    let X = "";
    return s && (X += `--bannerBackground:${s};`), S && (X += `--bannerTextColor:${S};`), D && (X += `--bannerTextSize:${D}px;`), X;
  }, Wa = (s, S, D) => {
    let X = "";
    return S ? X += `background: ${S};` : s && (X += `background-color: ${s};`), D && (X += D), X || void 0;
  }, Vt = (s, S) => st(s) ? S ? `#${s}` : s : Dt(s), Ra = () => {
    d(et, !1), Ie.actions.close(), Je.actions.close();
  }, jt = () => {
    typeof fe()?.action?.onClick == "function" && fe().action.onClick();
  };
  N(() => (r(), n(), kr), () => {
    d(H, r() != null && n() === ua.PUBLIC);
  }), N(() => f(), () => {
    d(u, f().device.mobile);
  }), N(() => (h(de()), e(u)), () => {
    Wt.set({
      screenXOffset: Ia(de(), e(u)),
      screenYOffset: Oa(de(), e(u))
    });
  }), N(() => (h(K()), i(), P()), () => {
    d(k, $a(K(), i(), P().routes));
  }), N(() => h(de()), () => {
    d(q, Ht[de()] || Ht.None);
  }), N(() => (h(ge()), h(xe())), () => {
    d(I, _t[ge() || xe()] || _t.Large);
  }), N(() => (h(O()), h(xe())), () => {
    d(C, _t[O() || xe()] || _t.Large);
  }), N(
    () => (h(Ue()), h(Le()), h(U()), h(oe()), h(ae()), h(p()), h(ue()), h(z()), h(F()), f()),
    () => {
      d(_, Ha(Ue(), Le(), U(), oe(), ae(), p(), ue(), z(), F(), f().device.width, f().device.height));
    }
  ), N(() => h(fe()), () => {
    d(R, Fa(fe()?.background, fe()?.textColor, fe()?.textSize));
  }), N(() => (h(fe()), e(q)), () => {
    d(j, !!fe()?.text?.trim?.() && e(q) !== "none");
  }), N(() => (o(), g()), () => {
    d(Y, !o().inBuilder && g().open && !g().ignoreClicksOutside);
  }), N(() => g(), () => {
    d(m, g().position || "right");
  }), N(
    () => (e(Oe), e(m), e(mt)),
    () => {
      e(Oe) && e(m) !== e(mt) && (e(mt) != null && (fa(Oe, e(Oe).style.transition = "none"), e(Oe).classList.toggle("position--left", e(m) === "left"), e(Oe).classList.toggle("position--right", e(m) !== "left"), e(Oe).offsetHeight, fa(Oe, e(Oe).style.transition = "")), d(mt, e(m)));
    }
  ), N(() => o(), () => {
    d(w, o().inBuilder ? `${o().screen?._id}-screen` : "screen");
  }), N(() => o(), () => {
    d(A, o().inBuilder ? `${o().screen?._id}-navigation` : "navigation");
  }), N(
    () => (h(zt()), h(It()), h(Ot())),
    () => {
      d(Q, Wa(zt(), It(), Ot()));
    }
  ), Qe(), Fe();
  var it = En();
  let Gt;
  var bt = x(it);
  let Xt;
  var Yt = x(bt);
  {
    var Da = (s) => {
      var S = Tn(), D = x(S), X = x(D), re = M(X);
      {
        var ye = (ke) => {
          ga(ke, {
            cta: !0,
            $$events: { click: jt },
            children: (De, at) => {
              Ve();
              var Ge = Be();
              E(() => se(Ge, (h(fe()), c(() => fe().action.label)))), l(De, Ge);
            },
            $$slots: { default: !0 }
          });
        };
        T(re, (ke) => {
          h(fe()), c(() => fe()?.action) && ke(ye);
        });
      }
      b(D), b(S), E(() => {
        lt(S, e(R)), se(X, `${h(fe()), c(() => fe()?.text) ?? ""} `);
      }), l(s, S);
    };
    T(Yt, (s) => {
      e(j) && (e(q) !== "left" || e(u)) && s(Da);
    });
  }
  var Zt = M(Yt, 2), Kt = x(Zt);
  {
    var Va = (s) => {
      var S = Un(), D = x(S), X = Pr(() => o().inBuilder ? Ye.actions.selectComponent(e(A)) : null);
      let re;
      var ye = x(D);
      let ke;
      var De = x(ye), at = x(De);
      {
        var Ge = (V) => {
          var te = Cn(), Ne = x(te);
          $e(Ne, {
            hoverable: !0,
            name: "list",
            color: "var(--navTextColor)",
            $$events: { click: () => d(et, !e(et)) }
          }), b(te), l(V, te);
        };
        T(at, (V) => {
          e(k), c(() => e(k).length) && V(Ge);
        });
      }
      var rt = M(at, 2);
      let Ae;
      var aa = x(rt);
      {
        var Ya = (V) => {
          {
            let te = ze(() => Te() && !e(Ee));
            Sa(V, {
              get logoUrl() {
                return we();
              },
              get logoLinkUrl() {
                return Z();
              },
              get openLogoLinkInNewTab() {
                return pe();
              },
              get hideLogo() {
                return e(te);
              },
              get title() {
                return Se();
              },
              get linkable() {
                return le;
              },
              isInternal: st,
              getSanitizedUrl: Vt
            });
          }
        };
        T(aa, (V) => {
          Ft() === "top" && V(Ya);
        });
      }
      var Za = M(aa, 2);
      {
        var Ka = (V) => {
          Tr(V, {
            get size() {
              return Ua();
            },
            get textAlign() {
              return Ce();
            },
            get color() {
              return Ma();
            },
            children: (te, Ne) => {
              Ve();
              var Xe = Be();
              E(() => se(Xe, Se())), l(te, Xe);
            },
            $$slots: { default: !0 }
          });
        };
        T(Za, (V) => {
          !ve() && Se() && !e(Ee) && V(Ka);
        });
      }
      b(rt);
      var ra = M(rt, 2);
      {
        var Qa = (V) => {
          var te = An(), Ne = x(te);
          lt(Ne, "", {}, { color: "var(--navTextColor)" }), b(te), be("click", te, Cr(() => {
            d(ce, W()), Re.set({}), d(Ee, !e(Ee));
          })), l(V, te);
        };
        T(ra, (V) => {
          de() === "Left" && qa() && !e(u) && !e(Ee) && V(Qa);
        });
      }
      var Ja = M(ra, 2);
      {
        var er = (V) => {
          var te = Nn(), Ne = x(te);
          ka(Ne, {
            compact: !0,
            get showLoginButton() {
              return $t();
            },
            get isPublicPreview() {
              return e(H);
            }
          }), b(te), l(V, te);
        };
        T(Ja, (V) => {
          Me() || V(er);
        });
      }
      b(De);
      var Nt = M(De, 2);
      let na;
      var yt = M(Nt, 2);
      let la;
      var tr = x(yt);
      {
        var ar = (V) => {
          var te = qe(), Ne = ie(te);
          Ca(Ne, 1, () => e(k), Aa, (Xe, he) => {
            var kt = qe(), Ze = ie(kt);
            {
              var ct = (vt) => {
                {
                  let lr = ze(() => (e(he), c(() => e(he)._styles?.custom))), or = ze(() => de() === "Left");
                  hn(vt, {
                    get type() {
                      return e(he), c(() => e(he).type);
                    },
                    get text() {
                      return e(he), c(() => e(he).text);
                    },
                    get url() {
                      return e(he), c(() => e(he).url);
                    },
                    get subLinks() {
                      return e(he), c(() => e(he).subLinks);
                    },
                    get icon() {
                      return e(he), c(() => e(he).icon);
                    },
                    get internalLink() {
                      return e(he), c(() => e(he).internalLink);
                    },
                    get customStyles() {
                      return e(lr);
                    },
                    get leftNav() {
                      return e(or);
                    },
                    get mobile() {
                      return e(u);
                    },
                    get navStateStore() {
                      return Re;
                    },
                    get collapsed() {
                      return e(Ee);
                    },
                    $$events: { clickLink: Ra }
                  });
                }
              };
              T(Ze, (vt) => {
                e(he), c(() => za(e(he)._conditions)) && vt(ct);
              });
            }
            l(Xe, kt);
          }), l(V, te);
        };
        T(tr, (V) => {
          e(k), c(() => e(k).length) && V(ar);
        });
      }
      b(yt);
      var rr = M(yt, 2);
      {
        var nr = (V) => {
          var te = qn();
          let Ne;
          var Xe = x(te);
          ka(Xe, {
            get collapsed() {
              return e(Ee);
            },
            get showLoginButton() {
              return $t();
            },
            get isPublicPreview() {
              return e(H);
            }
          });
          var he = M(Xe, 2);
          {
            var kt = (Ze) => {
              var ct = Bn(), vt = x(ct);
              Sa(vt, {
                get logoUrl() {
                  return we();
                },
                get logoLinkUrl() {
                  return Z();
                },
                get openLogoLinkInNewTab() {
                  return pe();
                },
                get hideLogo() {
                  return Te();
                },
                get title() {
                  return Se();
                },
                get linkable() {
                  return le;
                },
                isInternal: st,
                getSanitizedUrl: Vt
              }), b(ct), l(Ze, ct);
            };
            T(he, (Ze) => {
              Ft() === "bottom" && Ze(kt);
            });
          }
          b(te), E((Ze) => Ne = _e(te, 1, "user left svelte-qff93a", null, Ne, Ze), [() => ({ collapsed: e(Ee) })]), l(V, te);
        };
        T(rr, (V) => {
          Me() || V(nr);
        });
      }
      b(ye), b(D), b(S), E(
        (V, te, Ne, Xe, he) => {
          _e(S, 1, `interactive component ${e(A) ?? ""}`, "svelte-qff93a"), Pe(S, "data-id", e(A)), re = _e(D, 1, `nav-wrapper ${e(A) ?? ""}-dom`, "svelte-qff93a", re, V), lt(D, e(_)), ke = _e(ye, 1, `nav nav--${e(q) ?? ""} size--${e(I) ?? ""}`, "svelte-qff93a", ke, te), Ae = _e(rt, 1, "logo svelte-qff93a", null, Ae, Ne), na = _e(Nt, 1, "mobile-click-handler svelte-qff93a", null, na, Xe), la = _e(yt, 1, "links svelte-qff93a", null, la, he);
        },
        [
          () => ({
            sticky: G(),
            hidden: P().queryParams?.peek,
            clickable: o().inBuilder
          }),
          () => ({ collapsed: e(Ee) }),
          () => ({ "collapsed-logo": e(Ee) }),
          () => ({ visible: e(et) }),
          () => ({ visible: e(et) })
        ]
      ), be("click", Nt, () => d(et, !1)), be("click", ye, () => {
        e(Ee) && (Re.set(e(ce)), d(ce, {}), d(Ee, !1));
      }), be("click", D, function(...V) {
        e(X)?.apply(this, V);
      }), l(s, S);
    };
    T(Kt, (s) => {
      e(q) !== "none" && s(Va);
    });
  }
  var xt = M(Kt, 2), Qt = x(xt), Jt = x(Qt);
  {
    var ja = (s) => {
      var S = Mn(), D = x(S), X = x(D), re = M(X);
      {
        var ye = (ke) => {
          ga(ke, {
            cta: !0,
            $$events: { click: jt },
            children: (De, at) => {
              Ve();
              var Ge = Be();
              E(() => se(Ge, (h(fe()), c(() => fe().action.label)))), l(De, Ge);
            },
            $$slots: { default: !0 }
          });
        };
        T(re, (ke) => {
          h(fe()), c(() => fe()?.action) && ke(ye);
        });
      }
      b(D), b(S), E(() => {
        lt(S, e(R)), se(X, `${h(fe()), c(() => fe()?.text) ?? ""} `);
      }), l(s, S);
    };
    T(Jt, (s) => {
      e(j) && e(q) === "left" && !e(u) && s(ja);
    });
  }
  var Tt = M(Jt, 2), Ga = x(Tt);
  ot(Ga, t, "default", {}, null), b(Tt), b(Qt), b(xt), b(Zt), b(bt);
  var tt = M(bt, 2);
  let ea;
  var Ct = x(tt);
  let ta;
  var At = x(Ct), Xa = x(At);
  {
    let s = ze(() => e(m) === "left" ? "caret-line-left" : "caret-line-right");
    $e(Xa, {
      color: "currentColor",
      get name() {
        return e(s);
      }
    });
  }
  b(At), b(Ct), b(tt), Ke(tt, (s) => d(Oe, s), () => e(Oe)), gt(tt, (s, S) => pr?.(s, S), () => e(Y) ? Ie.actions.close : null), Ve(2), b(it), E(
    (s, S, D, X) => {
      Gt = _e(it, 1, `component layout layout--${e(q) ?? ""}`, "svelte-qff93a", Gt, s), Pe(it, "data-id", e(w)), Xt = _e(bt, 1, "screen-wrapper layout-body svelte-qff93a", null, Xt, S), lt(xt, e(Q)), _e(Tt, 1, `main size--${e(C) ?? ""}`, "svelte-qff93a"), ea = _e(
        tt,
        1,
        (g(), c(() => "size--" + (g().size || "small"))),
        "svelte-qff93a",
        ea,
        D
      ), tt.inert = (g(), c(() => g().open ? void 0 : !0)), ta = _e(Ct, 1, "side-panel-header svelte-qff93a", null, ta, X);
    },
    [
      () => ({ desktop: !e(u), mobile: !!e(u) }),
      () => ({
        "pdf-screen": o().screen?.variant === Sr.PDF
      }),
      () => ({
        open: g().open,
        builder: o().inBuilder,
        "position--left": e(m) === "left",
        "position--right": e(m) !== "left"
      }),
      () => ({ left: e(m) === "left" })
    ]
  ), be("click", xt, () => {
    o().inBuilder && Ye.actions.selectComponent(e(w));
  }), be("click", At, function(...s) {
    Ie.actions.close?.apply(this, s);
  }), l(v, it), We(), $();
}
export {
  Hn as default
};
