import { g as ie, p as l, h as _, X as oe, o as ce, l as de, j as e, k as ue, m as fe, u as w, t as ge, a as ve, d as A, B as c, w as me, x as v, ao as pe, y as he, z as m, bU as xe, s as I, c as P, f as C, ap as ye, r as U, d7 as _e, A as q, q as be, P as Se, ck as ke, H as Fe } from "./index-quCB9sGT.js";
import { F as Te } from "./Field-Dj4x-6nw.js";
var we = C('<div class="overlay svelte-niqlvh"></div> <div class="loading svelte-niqlvh"><!></div>', 1), Ae = C("<div><!> <!></div>");
function Ue(z, t) {
  ie(t, !1);
  const b = () => v(pe, "$builderStore", f), B = () => v(O, "$context", f), p = () => v(Y, "$component", f), D = () => v(ye, "$screenStore", f), [f, E] = he();
  let L = l(t, "datasourceId", 8), M = l(t, "bucket", 8), R = l(t, "key", 8), V = l(t, "field", 8), W = l(t, "label", 8), j = l(t, "disabled", 8, !1), G = l(t, "compact", 8, !1), H = l(t, "extensions", 8), K = l(t, "titleText", 8), X = l(t, "clickText", 8), J = l(t, "addText", 8), N = l(t, "validation", 8), S = l(t, "onChange", 8);
  const O = _("context");
  let r = m(), h = m(), x = m([]);
  const { API: Q, notificationStore: y, uploadStore: k } = _("sdk"), Y = _("component"), Z = 1e9 * 5;
  let o, d = m(!1);
  const $ = () => {
    y.actions.warning("Files cannot exceed 5GB. Please try again with a smaller file.");
  }, ee = async (a) => b().inBuilder ? [] : await new Promise((s) => {
    if (!a?.length)
      return [];
    o = a[0], o.type?.startsWith("image") || s([{ name: o.name, type: o.type }]);
    const n = new FileReader();
    n.addEventListener(
      "load",
      () => {
        s([{ url: n.result, name: o.name, type: o.type }]);
      },
      !1
    ), n.readAsDataURL(a[0]);
  }), te = async () => {
    const a = xe(R(), B());
    c(d, !0);
    try {
      const s = await Q.externalUpload({
        datasourceId: L(),
        bucket: M(),
        key: a,
        data: o,
        componentId: p().id,
        screenId: D().activeScreen._id
      });
      return y.actions.success("File uploaded successfully"), c(d, !1), s;
    } catch (s) {
      y.actions.error(`Error uploading file: ${s?.message || s}`), c(d, !1);
    }
  }, ae = (a) => {
    c(x, a.detail);
    let s = ke(a.detail) || [];
    s.forEach((u) => {
      u.type?.startsWith("image") && delete u.url;
    });
    const n = e(h).setValue(s);
    S() && n && S()({ value: s });
  };
  oe(() => {
    k.actions.registerFileUpload(p().id, te);
  }), ce(() => {
    k.actions.unregisterFileUpload(p().id);
  }), de(() => e(r), () => {
    e(r)?.value?.length || c(x, []);
  }), ue(), fe(), Te(z, {
    get label() {
      return W();
    },
    get field() {
      return V();
    },
    get disabled() {
      return j();
    },
    get validation() {
      return N();
    },
    type: "s3upload",
    defaultValue: [],
    get fieldState() {
      return e(r);
    },
    set fieldState(a) {
      c(r, a);
    },
    get fieldApi() {
      return e(h);
    },
    set fieldApi(a) {
      c(h, a);
    },
    children: (a, s) => {
      var n = Ae();
      let u;
      var F = P(n);
      {
        var le = (i) => {
          {
            let g = Fe(() => (e(d), e(r), q(() => e(d) || e(r).disabled)));
            _e(i, {
              get value() {
                return e(x);
              },
              get disabled() {
                return e(g);
              },
              get error() {
                return e(r), q(() => e(r).error);
              },
              processFiles: ee,
              handleFileTooLarge: $,
              get compact() {
                return G();
              },
              get extensions() {
                return H();
              },
              get titleText() {
                return K();
              },
              get clickText() {
                return X();
              },
              get addText() {
                return J();
              },
              maximum: 1,
              fileSizeLimit: Z,
              $$events: { change: ae }
            });
          }
        };
        w(F, (i) => {
          e(r) && i(le);
        });
      }
      var se = I(F, 2);
      {
        var ne = (i) => {
          var g = we(), T = I(be(g), 2), re = P(T);
          Se(re, {}), U(T), A(i, g);
        };
        w(se, (i) => {
          e(d) && i(ne);
        });
      }
      U(n), ge((i) => u = ve(n, 1, "content svelte-niqlvh", null, u, i), [() => ({ builder: b().inBuilder })]), A(a, n);
    },
    $$slots: { default: !0 },
    $$legacy: !0
  }), me(), E();
}
export {
  Ue as default
};
