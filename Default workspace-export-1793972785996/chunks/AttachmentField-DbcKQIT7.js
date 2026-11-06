import { g as U, p as a, b5 as W, h, m as X, n as Z, q as $, u as ee, d as te, B as T, j as l, w as ae, y as le, z as v, d7 as ne, A as d, H as g, i as re, x as ie } from "./index-quCB9sGT.js";
import { F as de } from "./Field-Dj4x-6nw.js";
function ue(y, e) {
  U(e, !1);
  const f = () => ie(H, "$environmentStore", b), [b, S] = le();
  let _ = a(e, "field", 8), A = a(e, "label", 8), F = a(e, "disabled", 8, !1), p = a(e, "readonly", 8, !1), w = a(e, "compact", 8, !1), k = a(e, "validation", 8), C = a(e, "extensions", 8), m = a(e, "onChange", 8), M = a(e, "maximum", 8, void 0), V = a(e, "span", 8), B = a(e, "helpText", 8, null), I = a(e, "titleText", 8), P = a(e, "clickText", 8), q = a(e, "addText", 8), z = a(e, "type", 24, () => W.ATTACHMENTS), s = a(e, "fieldApiMapper", 24, () => ({ get: (t) => t, set: (t) => t })), D = a(e, "defaultValue", 24, () => []), r = v(), o = v();
  const { API: E, notificationStore: x, environmentStore: H } = h("sdk"), u = h("form"), N = 1e6, j = (t) => {
    x.actions.warning(`Files cannot exceed ${t / N} MB. Please try again with smaller files.`);
  }, L = (t) => {
    x.actions.warning(`Please select a maximum of ${t} files.`);
  }, Y = async (t) => {
    let i = new FormData();
    for (let n = 0; n < t.length; n++)
      i.append("file", t[n]);
    try {
      let n = u?.dataSource?.tableId;
      return u?.dataSource?.type === "viewV2" && (n = u.dataSource.id), await E.uploadAttachment(n, i);
    } catch {
      return [];
    }
  }, G = (t) => {
    const i = s().set(t.detail), n = l(o).setValue(i);
    m() && n && m()({ value: i });
  };
  X(), de(y, {
    get label() {
      return A();
    },
    get field() {
      return _();
    },
    get disabled() {
      return F();
    },
    get readonly() {
      return p();
    },
    get validation() {
      return k();
    },
    get span() {
      return V();
    },
    get helpText() {
      return B();
    },
    get type() {
      return z();
    },
    get defaultValue() {
      return D();
    },
    get fieldState() {
      return l(r);
    },
    set fieldState(t) {
      T(r, t);
    },
    get fieldApi() {
      return l(o);
    },
    set fieldApi(t) {
      T(o, t);
    },
    children: (t, i) => {
      var n = Z(), J = $(n);
      {
        var K = (c) => {
          {
            let O = g(() => (re(s()), l(r), d(() => s().get(l(r).value)))), Q = g(() => (l(r), d(() => l(r).disabled || l(r).readonly))), R = g(() => (f(), d(() => f().cloud ? j : null)));
            ne(c, {
              get value() {
                return l(O);
              },
              get disabled() {
                return l(Q);
              },
              get error() {
                return l(r), d(() => l(r).error);
              },
              processFiles: Y,
              get handleFileTooLarge() {
                return l(R);
              },
              handleTooManyFiles: L,
              get maximum() {
                return M();
              },
              get extensions() {
                return C();
              },
              get compact() {
                return w();
              },
              get titleText() {
                return I();
              },
              get clickText() {
                return P();
              },
              get addText() {
                return q();
              },
              $$events: { change: G }
            });
          }
        };
        ee(J, (c) => {
          l(r) && c(K);
        });
      }
      te(t, n);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), ae(), S();
}
export {
  ue as default
};
