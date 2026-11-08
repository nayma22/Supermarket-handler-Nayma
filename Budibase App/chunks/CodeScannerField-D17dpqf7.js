import { g as pe, p as r, a0 as He, l as Se, j as t, k as qe, m as Te, q as le, c as u, u as h, s as p, r as v, Y as xe, B as y, av as Ie, ai as Qe, aG as we, a4 as I, a5 as te, d as s, I as Ge, i as k, A as R, d8 as Q, t as re, b as ne, n as Fe, w as Me, z as q, ak as Le, cV as Ce, f as b, H as Xe } from "./index-quCB9sGT.js";
import { F as Ye } from "./Field-Dj4x-6nw.js";
var De = b('<div class="scanner-value field-display svelte-1ieu6jx"><!> </div>'), Ne = b('<div class="manual-input svelte-1ieu6jx"><!></div>'), Ue = b("<div>Your camera is disabled.</div>"), Je = b('<div class="scanner-value svelte-1ieu6jx"><!> </div>'), Ke = b('<div class="scanner-value svelte-1ieu6jx"><!> </div>'), We = b('<div class="scanner-value svelte-1ieu6jx"><!> Searching for code...</div>'), $e = b('<div class="code-wrap"><!></div>'), ea = b('<div id="reader" class="container svelte-1ieu6jx"><div class="camera-placeholder svelte-1ieu6jx"><!> <!></div></div> <!>', 1), aa = b('<div slot="footer"><div class="footer-buttons svelte-1ieu6jx"><!> <!></div></div>'), ta = b('<div class="scanner-video-wrapper"><!> <!> <!></div> <div class="modal-wrap"><!></div>', 1);
function ra(ie, a) {
  pe(a, !1);
  let l = r(a, "value", 12), G = r(a, "disabled", 8, !1), L = r(a, "allowManualEntry", 8, !1), se = r(a, "autoConfirm", 8, !1), X = r(a, "scanButtonText", 8, "Scan code"), oe = r(a, "beepOnScan", 8, !1), Y = r(a, "beepFrequency", 8, 2637), de = r(a, "customFrequency", 8, 1046), D = r(a, "preferredCamera", 8, "environment"), N = r(a, "defaultZoom", 8, 1), x = r(a, "validator", 8);
  const B = He();
  let P = q(), w = q(), j = q(!1), S = q(), A = q(!1), g, d = { facingMode: D() }, Z = { fps: 25, qrbox: { width: 250, height: 250 } };
  const T = new (window.AudioContext || window.webkitAudioContext)(), _ = (e) => {
    l() != e && (oe() && ve(), B("change", e), se() && !x()?.(e) && t(w)?.hide());
  }, U = async () => {
    g && g.stop();
    const { Html5Qrcode: e } = await import("./index-B4hs2_Hf.js");
    return g = new e("reader"), new Promise((n) => {
      g.start(d, Z, _).then(() => {
        if (N() > 1) {
          const o = g.getRunningTrackCameraCapabilities().zoomFeature();
          o.isSupported() && o.apply(N());
        }
        n({ initialised: !0 });
      }).catch((i) => {
        console.error("There was a problem scanning the image", i), n({ initialised: !1 });
      });
    });
  }, J = async () => {
    const { Html5Qrcode: e } = await import("./index-B4hs2_Hf.js");
    return new Promise((n) => {
      e.getCameras().then((i) => {
        i && i.length && n({ enabled: !0 });
      }).catch((i) => {
        console.error(i), n({ enabled: !1 });
      });
    });
  }, ce = async () => {
    const e = await U();
    y(A, e.initialised);
  }, ue = async () => {
    t(w).show();
    const e = await J();
    y(S, e.enabled);
  }, z = async () => {
    y(S, void 0), y(A, !1), g && (await g.stop(), g = void 0), t(w).hide();
  }, ve = () => {
    const e = T.createOscillator(), n = T.createGain();
    e.connect(n), n.connect(T.destination);
    const i = Y() === "custom" ? de() : Y();
    e.frequency.value = i, e.type = "square";
    const f = T.currentTime + 420 / 1e3;
    n.gain.setValueAtTime(1, T.currentTime), n.gain.exponentialRampToValueAtTime(1e-3, f), e.start(), e.stop(f);
  };
  Se(() => (t(S), t(P), t(A)), () => {
    t(S) && t(P) && !t(A) && ce();
  }), qe(), Te();
  var _e = ta(), fe = le(_e), he = u(fe);
  {
    var ke = (e) => {
      var n = De(), i = u(n);
      {
        var o = (c) => {
          Q(c, { negative: !0 });
        }, f = (c) => {
          Q(c, { positive: !0 });
        };
        h(i, (c) => {
          k(x()), k(l()), R(() => x()?.(l())) ? c(o) : c(f, !1);
        });
      }
      var C = p(i);
      v(n), re(() => ne(C, ` ${l() ?? ""}`)), s(e, n);
    };
    h(he, (e) => {
      l() && !t(j) && e(ke);
    });
  }
  var ye = p(he, 2);
  {
    var Be = (e) => {
      var n = Ne(), i = u(n);
      Le(i, {
        updateOnChange: !1,
        get value() {
          return l();
        },
        set value(o) {
          l(o);
        },
        $$events: {
          change: () => {
            B("change", l());
          }
        },
        $$legacy: !0
      }), v(n), s(e, n);
    };
    h(ye, (e) => {
      L() && t(j) && e(Be);
    });
  }
  var Pe = p(ye, 2);
  {
    var je = (e) => {
      Ce(e, {
        get disabled() {
          return G();
        },
        $$events: {
          click: () => {
            B("change", "");
          }
        },
        children: (n, i) => {
          I();
          var o = te("Clear");
          s(n, o);
        },
        $$slots: { default: !0 }
      });
    }, Ae = (e) => {
      Ce(e, {
        icon: "camera",
        get disabled() {
          return G();
        },
        $$events: {
          click: () => {
            ue();
          }
        },
        children: (n, i) => {
          I();
          var o = te();
          re(() => ne(o, X())), s(n, o);
        },
        $$slots: { default: !0 }
      });
    };
    h(Pe, (e) => {
      l() ? e(je) : e(Ae, !1);
    });
  }
  v(fe);
  var be = p(fe, 2), Ee = u(be);
  xe(
    Ie(Ee, {
      $$events: { hide: z },
      children: (e, n) => {
        Qe(e, {
          get title() {
            return X();
          },
          showConfirmButton: !1,
          showCancelButton: !1,
          children: (i, o) => {
            var f = ea(), C = le(f), c = u(C), K = u(c);
            Ge(K, { size: "XXL", name: "camera" });
            var me = p(K, 2);
            {
              var F = (m) => {
                var H = Ue();
                s(m, H);
              };
              h(me, (m) => {
                t(S) === !1 && m(F);
              });
            }
            v(c), v(C), xe(C, (m) => y(P, m), () => t(P));
            var W = p(C, 2);
            {
              var $ = (m) => {
                var H = $e(), Oe = u(H);
                {
                  var Ve = (E) => {
                    var O = Je(), ee = u(O);
                    Q(ee, { positive: !0 });
                    var ge = p(ee);
                    v(O), re(() => ne(ge, ` ${l() ?? ""}`)), s(E, O);
                  }, Re = (E) => {
                    var O = Fe(), ee = le(O);
                    {
                      var ge = (V) => {
                        var M = Ke(), ae = u(M);
                        Q(ae, { negative: !0 });
                        var ze = p(ae);
                        v(M), re(() => ne(ze, ` ${l() ?? ""}`)), s(V, M);
                      }, Ze = (V) => {
                        var M = We(), ae = u(M);
                        Q(ae, { neutral: !0 }), I(), v(M), s(V, M);
                      };
                      h(
                        ee,
                        (V) => {
                          k(l()), k(x()), R(() => l() && x()?.(l())) ? V(ge) : V(Ze, !1);
                        },
                        !0
                      );
                    }
                    s(E, O);
                  };
                  h(Oe, (E) => {
                    k(l()), k(x()), R(() => l() && !x()?.(l())) ? E(Ve) : E(Re, !1);
                  });
                }
                v(H), s(m, H);
              };
              h(W, (m) => {
                t(S) === !0 && m($);
              });
            }
            s(i, f);
          },
          $$slots: {
            default: !0,
            footer: (i, o) => {
              var f = aa(), C = u(f), c = u(C);
              {
                var K = (F) => {
                  we(F, {
                    group: !0,
                    secondary: !0,
                    newStyles: !0,
                    $$events: {
                      click: () => {
                        y(j, !0), t(w).hide();
                      }
                    },
                    children: (W, $) => {
                      I();
                      var m = te("Enter manually");
                      s(W, m);
                    },
                    $$slots: { default: !0 }
                  });
                };
                h(c, (F) => {
                  L() && !t(j) && F(K);
                });
              }
              var me = p(c, 2);
              we(me, {
                group: !0,
                cta: !0,
                $$events: {
                  click: () => {
                    t(w).hide();
                  }
                },
                children: (F, W) => {
                  I();
                  var $ = te("Confirm");
                  s(F, $);
                },
                $$slots: { default: !0 }
              }), v(C), v(f), s(i, f);
            }
          }
        });
      },
      $$slots: { default: !0 },
      $$legacy: !0
    }),
    (e) => y(w, e),
    () => t(w)
  ), v(be), s(ie, _e), Me();
}
function ia(ie, a) {
  pe(a, !1);
  const l = q();
  let G = r(a, "field", 8), L = r(a, "label", 8), se = r(a, "type", 8, "barcodeqr"), X = r(a, "disabled", 8, !1), oe = r(a, "readonly", 8, !1), Y = r(a, "validation", 8), de = r(a, "defaultValue", 8, ""), D = r(a, "onChange", 8), N = r(a, "allowManualEntry", 8), x = r(a, "autoConfirm", 8), B = r(a, "scanButtonText", 8), P = r(a, "beepOnScan", 8), w = r(a, "beepFrequency", 8), j = r(a, "customFrequency", 8), S = r(a, "preferredCamera", 8), A = r(a, "defaultZoom", 8), g = r(a, "helpText", 8, null), d = q(), Z = q();
  const T = (_) => {
    const U = t(Z).setValue(_.detail);
    D() && U && D()({ value: _.detail });
  };
  Se(() => k(B()), () => {
    y(l, B() || "Scan code");
  }), qe(), Te(), Ye(ie, {
    get label() {
      return L();
    },
    get field() {
      return G();
    },
    get disabled() {
      return X();
    },
    get readonly() {
      return oe();
    },
    get validation() {
      return Y();
    },
    get defaultValue() {
      return de();
    },
    get type() {
      return se();
    },
    get helpText() {
      return g();
    },
    get fieldState() {
      return t(d);
    },
    set fieldState(_) {
      y(d, _);
    },
    get fieldApi() {
      return t(Z);
    },
    set fieldApi(_) {
      y(Z, _);
    },
    children: (_, U) => {
      var J = Fe(), ce = le(J);
      {
        var ue = (z) => {
          {
            let ve = Xe(() => (t(d), R(() => t(d).disabled || t(d).readonly)));
            ra(z, {
              get value() {
                return t(d), R(() => t(d).value);
              },
              get disabled() {
                return t(ve);
              },
              get allowManualEntry() {
                return N();
              },
              get autoConfirm() {
                return x();
              },
              get scanButtonText() {
                return t(l);
              },
              get beepOnScan() {
                return P();
              },
              get beepFrequency() {
                return w();
              },
              get customFrequency() {
                return j();
              },
              get preferredCamera() {
                return S();
              },
              get defaultZoom() {
                return A();
              },
              get validator() {
                return t(d), R(() => t(d).validator);
              },
              $$events: { change: T }
            });
          }
        };
        h(ce, (z) => {
          t(d) && z(ue);
        });
      }
      s(_, J);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), Me();
}
export {
  ia as default
};
