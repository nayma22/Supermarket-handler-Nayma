import { g as Be, y as qe, p as m, h as re, cj as ze, aa as z, aT as o, _ as ae, l as b, D, B as _, j as s, a9 as L, i as le, k as Le, m as Me, n as Pe, q as Ge, u as Ne, d as M, w as Re, x as A, z as y, ck as Ke, cK as se, cL as Qe, cM as Ye, aQ as He, c as ne, E as ie, r as oe, v as ce, t as de, a as ue, aL as fe, b5 as Je, f as ve } from "./index-quCB9sGT.js";
var We = ve("<div><!></div>"), Xe = ve("<div><!></div>");
function $e(me, u) {
  Be(u, !1);
  const E = () => A(s(K), "$errors", p), k = () => A(s(R), "$values", p), U = () => A(S(), "$currentStep", p), P = () => A(s(Q), "$enrichments", p), G = () => A(s(Y), "$currentStepValid", p), N = () => A(Fe, "$component", p), [p, pe] = qe(), R = y(), K = y(), Q = y(), I = y(), Y = y(), j = y(), H = y();
  let Se = m(u, "dataSource", 24, () => {
  }), J = m(u, "disabled", 8, !1), he = m(u, "readonly", 8, !1), T = m(u, "initialValues", 24, () => {
  }), W = m(u, "size", 24, () => {
  }), F = m(u, "schema", 24, () => {
  }), _e = m(u, "definition", 24, () => {
  }), be = m(u, "disableSchemaValidation", 8, !1), ye = m(u, "editAutoColumns", 8, !1), ge = m(u, "provideContext", 8, !0), S = m(u, "currentStep", 8);
  const Fe = re("component"), { styleable: X, Provider: Ve, ActionTypes: C } = re("sdk"), Ae = ze("validation");
  let c = y([]);
  const Z = z({
    values: {},
    errors: {},
    valid: !0,
    currentStep: o(S())
  }), $ = (e, t) => L(e, (r) => r.reduce((a, i) => ({ ...a, [i.name]: t(i) }), {})), Ie = (e) => L(e, (t) => {
    const r = {};
    return t.forEach((a) => {
      if (a.type === "attachment") {
        const i = a.fieldState.value;
        let l = null;
        Array.isArray(i) && i[0] != null && (l = i[0].url), r[`${a.name}_first`] = l;
      }
    }), r;
  }), Ce = (e, t, r) => {
    let a = Ke(e || {});
    return Object.entries(t || {}).map(([l, n]) => {
      const f = h(l);
      return {
        key: l,
        value: n,
        lastUpdate: o(f).fieldState?.lastUpdate || 0
      };
    }).sort((l, n) => l.lastUpdate - n.lastUpdate).forEach(({ key: l, value: n }) => {
      se(a, l, n);
    }), Object.entries(r || {}).forEach(([l, n]) => {
      se(a, l, n);
    }), a;
  }, h = (e) => s(c).find((t) => o(t).name === e), xe = (e, t, r) => {
    if (Array.isArray(e) && r === Je.ARRAY && t) {
      const a = t?.constraints?.inclusion || [];
      return e.map((l) => String(l)).filter((l) => a.includes(l));
    }
    return e;
  }, V = {
    registerField: (e, t, r = null, a = !1, i = !1, l, n = 1) => {
      if (!e)
        return;
      const f = be() ? null : F()?.[e]?.constraints, d = Qe(f, l, e, _e(), Ae.required);
      r = xe(r, F()?.[e], t);
      let x = Ye(T(), e) ?? r, w = null, g = `id-${He()}`;
      const O = h(e), Te = (v, q) => v == null || v === "" || v === q ? !1 : Array.isArray(v) ? v.length > 0 : !0;
      if (O) {
        const { fieldState: v } = o(O);
        g = v.fieldId, x = Te(v.value, v.defaultValue) ? v.value : r, v.error && (w = d?.(x));
      }
      const Oe = !!F()?.[e]?.autocolumn, B = z({
        name: e,
        type: t,
        step: n || 1,
        fieldState: {
          fieldId: g,
          value: x,
          error: w,
          disabled: J() || a || Oe && !ye(),
          readonly: he() || i || F()?.[e]?.readonly,
          defaultValue: r,
          validator: d,
          lastUpdate: Date.now()
        },
        fieldApi: Ee(e),
        fieldSchema: F()?.[e] ?? {}
      });
      if (O) {
        const v = s(c).filter((q) => o(q).name !== e);
        _(c, [...v, B]);
      } else
        _(c, [...s(c), B]);
      return B;
    },
    validate: () => {
      const e = s(c).filter((a) => o(a).step === o(S()));
      let t = !0, r = !1;
      return e.forEach((a) => {
        const i = o(a).fieldApi.validate();
        t = t && i, !t && !r && (ee({ field: o(a) }), r = !0);
      }), t;
    },
    reset: () => {
      s(c).forEach((e) => {
        o(e).fieldApi.reset();
      });
    },
    changeStep: ({ type: e, number: t }) => {
      e === "next" ? S().update((r) => r + 1) : e === "prev" ? S().update((r) => Math.max(1, r - 1)) : e === "first" ? S().set(1) : e === "specific" && t && !isNaN(t) && S().set(parseInt(t));
    },
    setStep: (e) => {
      e && S().set(e);
    },
    setFieldValue: (e, t) => {
      const r = h(e);
      if (!r)
        return;
      const { fieldApi: a } = o(r);
      a.setValue(t);
    },
    resetField: (e) => {
      const t = h(e);
      if (!t)
        return;
      const { fieldApi: r } = o(t);
      r.reset();
    }
  }, Ee = (e) => {
    const t = (l, n = !1) => {
      const f = h(e), { fieldState: d } = o(f), { validator: x } = d;
      if (!n && d.value === l)
        return !1;
      const w = x?.(l);
      return f.update((g) => (g.fieldState.value = l, g.fieldState.error = w, g.fieldState.lastUpdate = Date.now(), g)), !0;
    };
    return {
      setValue: t,
      reset: () => {
        const l = h(e), { fieldState: n } = o(l), f = n.defaultValue;
        l.update((d) => (d.fieldState.value = f, d.fieldState.error = null, d.fieldState.lastUpdate = Date.now(), d));
      },
      setDisabled: (l) => {
        const n = h(e), f = !!F()?.[e]?.autocolumn;
        n.update((d) => (d.fieldState.disabled = J() || l || f, d));
      },
      deregister: () => {
        h(e).update((n) => (n.fieldState.validator = null, n.fieldState.error = null, n));
      },
      validate: () => {
        const l = h(e);
        return t(o(l).fieldState.value, !0), !o(l).fieldState.error;
      }
    };
  };
  ae("form", {
    formState: Z,
    formApi: V,
    // Datasource is needed by attachment fields to be able to upload files
    // to the correct table ID
    dataSource: Se()
  }), ae("form-step", z(1));
  const ke = ({
    type: e,
    fields: t,
    fieldValues: r,
    // Legacy single-field format - coerce for backwards compatibility
    field: a,
    value: i
  }) => {
    const l = t ?? (a ? [a] : []), n = r ?? (a !== void 0 ? { [a]: i } : {});
    e === "set" && Object.keys(n).length > 0 ? Object.entries(n).forEach(([f, d]) => {
      V.setFieldValue(f, d);
    }) : e === "reset" && Array.isArray(l) && l.length > 0 && l.forEach((f) => {
      V.resetField(f);
    });
  }, ee = (e) => {
    let t;
    typeof e.field == "string" ? t = o(h(e.field)) : t = e.field;
    const r = t.fieldState.fieldId, a = document.getElementById(r);
    a && a.focus({ preventScroll: !0 });
    const i = document.querySelector(`label[for="${r}"]`);
    i && (i.style.scrollMargin = "100px", i.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  }, Ue = [
    { type: C.ValidateForm, callback: V.validate },
    { type: C.ClearForm, callback: V.reset },
    {
      type: C.ChangeFormStep,
      callback: V.changeStep
    },
    {
      type: C.UpdateFieldValue,
      callback: ke
    },
    { type: C.ScrollTo, callback: ee }
  ];
  b(() => s(c), () => {
    D(_(R, $(s(c), (e) => e.fieldState.value)), "$values", p);
  }), b(() => s(c), () => {
    D(_(K, $(s(c), (e) => e.fieldState.error)), "$errors", p);
  }), b(() => s(c), () => {
    D(_(Q, Ie(s(c))), "$enrichments", p);
  }), b(() => E(), () => {
    _(I, !Object.values(E()).some((e) => e != null));
  }), b(() => (le(S()), s(c)), () => {
    D(
      _(Y, L([S(), ...s(c)], ([e, ...t]) => !t.filter((r) => r.step === e).some((r) => r.fieldState.error != null))),
      "$currentStepValid",
      p
    );
  }), b(() => (k(), E(), s(I), U()), () => {
    Z.set({
      values: k(),
      errors: E(),
      valid: s(I),
      currentStep: U()
    });
  }), b(
    () => (le(T()), k(), P()),
    () => {
      _(j, Ce(T(), k(), P()));
    }
  ), b(
    () => (s(j), s(I), U(), G()),
    () => {
      _(H, {
        ...s(j),
        __value: s(j),
        __valid: s(I),
        __currentStep: U(),
        __currentStepValid: G()
      });
    }
  ), Le(), Me();
  var te = Pe(), je = Ge(te);
  {
    var we = (e) => {
      Ve(e, {
        get actions() {
          return Ue;
        },
        get data() {
          return s(H);
        },
        children: (t, r) => {
          var a = We(), i = ne(a);
          ie(i, u, "default", {}, null), oe(a), ce(a, (l, n) => X?.(l, n), () => N().styles), de(() => ue(a, 1, fe(W()))), M(t, a);
        },
        $$slots: { default: !0 }
      });
    }, De = (e) => {
      var t = Xe(), r = ne(t);
      ie(r, u, "default", {}, null), oe(t), ce(t, (a, i) => X?.(a, i), () => N().styles), de(() => ue(t, 1, fe(W()))), M(e, t);
    };
    Ne(je, (e) => {
      ge() ? e(we) : e(De, !1);
    });
  }
  M(me, te), Re(), pe();
}
export {
  $e as I
};
