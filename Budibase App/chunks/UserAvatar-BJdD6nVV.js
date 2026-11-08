import { bV as co, aP as Ve, bW as fo, bX as Zi, bY as ji, bZ as rr, b_ as ho, b$ as mo, c0 as yo, c1 as po, c2 as go, c3 as wo, c4 as vo, c5 as Oo, c6 as bo, c7 as _o, bf as mn, c8 as Hi, be as Yi, c9 as xo, ca as ko, cb as So, cc as Eo, g as To, p as qt, as as Fo, m as Do, n as Mo, q as Co, u as No, d as Vo, w as Io, ar as Lo, cd as $o, j as Rt, H as Ut, i as _e, A as Pt } from "./index-quCB9sGT.js";
import { S as st } from "./datasources-Nbeezcjt.js";
const kt = {
  BUILDER: "/builder",
  SETTINGS_EMAIL: "/builder/settings/email",
  SETTINGS_AUTH: "/builder/settings/auth",
  SETTINGS_PEOPLE_USERS: "/builder/settings/people/users",
  APPS: "/apps"
}, Jt = {
  ACCOUNT: "/portal/account",
  BILLING: "/portal/billing",
  TENANTS: "/portal/tenants",
  UPGRADE: "/portal/upgrade"
};
function Wo(o) {
  return o === st.GOOGLE_SHEETS;
}
function Ao(o) {
  return !o || !o.source ? !1 : [
    st.POSTGRES,
    st.SQL_SERVER,
    st.MYSQL,
    st.ORACLE,
    st.SNOWFLAKE
  ].indexOf(o.source) !== -1 || o.isSQL === !0;
}
async function Bi(o) {
  return new Promise((t) => setTimeout(t, o));
}
async function qo(o, t) {
  const { times: r = 3 } = t || {};
  if (r < 1)
    throw new Error(`invalid retry count: ${r}`);
  let a;
  for (let i = 0; i < r; i++) {
    const l = 1.5 ** i * 1e3 * (Math.random() + 0.5);
    await Bi(l);
    try {
      return await o();
    } catch (f) {
      a = f;
    }
  }
  throw a;
}
const Ro = (o) => {
  if (o == null || o.trim() === "")
    return;
  const t = o.trim();
  if (t.includes(";") || /\burl\s*\(/i.test(t))
    throw new Error("Color is invalid.");
  return t;
};
var xt = { exports: {} }, Vr = {}, js;
function pe() {
  return js || (js = 1, (function(o) {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.Err = o.Valid = o.err = o.valid = void 0;
    const t = (l) => new a(l);
    o.valid = t;
    const r = (l) => new i(l);
    o.err = r;
    class a {
      constructor(f) {
        this.value = f;
      }
      isValid() {
        return !0;
      }
      isError() {
        return !this.isValid();
      }
      getValue() {
        return this.value;
      }
      getError() {
        throw new Error("Tried to get error from a valid.");
      }
      map(f) {
        return (0, o.valid)(f(this.value));
      }
      mapErr(f) {
        return (0, o.valid)(this.value);
      }
    }
    o.Valid = a;
    class i {
      constructor(f) {
        this.error = f;
      }
      isError() {
        return !0;
      }
      isValid() {
        return !this.isError();
      }
      getValue() {
        throw new Error("Tried to get success value from an error.");
      }
      getError() {
        return this.error;
      }
      map(f) {
        return (0, o.err)(this.error);
      }
      mapErr(f) {
        return (0, o.err)(f(this.error));
      }
    }
    o.Err = i;
  })(Vr)), Vr;
}
var Ke = {}, zt = {}, Hs;
function Ae() {
  if (Hs) return zt;
  Hs = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), ke();
  const o = pe(), t = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ], r = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], a = (m, w) => w[m].lowerLimit === w.preset[m].minValue && w[m].upperLimit === w.preset[m].maxValue, i = (m, w, x) => {
    if (w === "months" && x.useAliases && t.indexOf(m.toLowerCase()) !== -1 || w === "daysOfWeek" && x.useAliases && r.indexOf(m.toLowerCase()) !== -1)
      return (0, o.valid)(!0);
    const O = Number(m);
    if (isNaN(O))
      return (0, o.err)(`Element '${m} of ${w} field is invalid.`);
    const { lowerLimit: _ } = x[w], { upperLimit: S } = x[w];
    return _ && O < _ ? (0, o.err)(`Number ${O} of ${w} field is smaller than lower limit '${_}'`) : S && O > S ? (0, o.err)(`Number ${O} of ${w} field is bigger than upper limit '${S}'`) : (0, o.valid)(!0);
  }, l = (m, w, x) => {
    if (m === "*")
      return a(w, x) ? (0, o.valid)(!0) : (0, o.err)(`Field ${w} uses wildcard '*', but is limited to ${x[w].lowerLimit}-${x[w].upperLimit}`);
    if (m === "")
      return (0, o.err)(`One of the elements is empty in ${w} field.`);
    if (w === "daysOfMonth" && x.useLastDayOfMonth && m === "L")
      return (0, o.valid)(!0);
    if (w === "daysOfWeek" && x.useLastDayOfWeek && m.endsWith("L")) {
      const O = m.slice(0, -1);
      return O === "" ? (0, o.valid)(!0) : i(O, w, x);
    }
    if (w === "daysOfMonth" && x.useNearestWeekday && m.endsWith("W")) {
      const O = m.slice(0, -1);
      return O === "" ? (0, o.err)("The 'W' must be preceded by a day") : x.useLastDayOfMonth && O === "L" ? (0, o.valid)(!0) : i(O, w, x);
    }
    if (w === "daysOfWeek" && x.useNthWeekdayOfMonth && m.indexOf("#") !== -1) {
      const [O, _, ...S] = m.split("#");
      if (S.length !== 0)
        return (0, o.err)(`Unexpected number of '#' in ${m}, can only be used once.`);
      const T = Number(_);
      return !_ || isNaN(T) ? (0, o.err)(`Unexpected value following the '#' symbol, a positive number was expected but found ${_}.`) : T > 5 ? (0, o.err)("Number of occurrence of the day of the week cannot be greater than 5.") : i(O, w, x);
    }
    return i(m, w, x);
  }, f = (m, w, x, O) => m === "*" ? (0, o.err)(`'*' can't be part of a range in ${w} field.`) : m === "" ? (0, o.err)(`One of the range elements is empty in ${w} field.`) : x.useLastDayOfMonth && w === "daysOfMonth" && m === "L" && O === 0 ? (0, o.valid)(!0) : i(m, w, x), y = (m, w, x) => {
    const O = m.split("-");
    if (O.length > 2)
      return (0, o.err)(`List element '${m}' is not valid. (More than one '-')`);
    if (O.length === 1)
      return l(O[0], w, x);
    if (O.length === 2) {
      const _ = f(O[0], w, x, 0), S = f(O[1], w, x, 1);
      return _.isError() ? _ : S.isError() ? S : Number(O[0]) > Number(O[1]) ? (0, o.err)(`Lower range end '${O[0]}' is bigger than upper range end '${O[1]}' of ${w} field.`) : (0, o.valid)(!0);
    }
    return (0, o.err)("Some other error in checkFirstStepElement (rangeArray less than 1)");
  }, h = (m, w, x) => {
    const O = m.split("/");
    if (O.length > 2)
      return (0, o.err)(`List element '${m}' is not valid. (More than one '/')`);
    const _ = y(O[0], w, x);
    if (_.isError())
      return _;
    if (O.length === 2) {
      const S = O[1];
      if (!S)
        return (0, o.err)(`Second step element '${S}' of '${m}' is not valid (doesnt exist).`);
      if (isNaN(Number(S)))
        return (0, o.err)(`Second step element '${S}' of '${m}' is not valid (not a number).`);
      if (Number(S) === 0)
        return (0, o.err)(`Second step element '${S}' of '${m}' cannot be zero.`);
    }
    return (0, o.valid)(!0);
  }, b = (m, w, x) => {
    if (![
      "seconds",
      "minutes",
      "hours",
      "daysOfMonth",
      "months",
      "daysOfWeek",
      "years"
    ].includes(w))
      return (0, o.err)([`Cron field type '${w}' does not exist.`]);
    if (m === "?")
      return w === "daysOfMonth" || w === "daysOfWeek" ? x.useBlankDay ? (0, o.valid)(!0) : (0, o.err)([
        `useBlankDay is not enabled, but is used in ${w} field`
      ]) : (0, o.err)([`blank notation is not allowed in ${w} field`]);
    const O = m.split(","), _ = [];
    if (O.forEach((T) => {
      _.push(h(T, w, x));
    }), _.every((T) => T.isValid()))
      return (0, o.valid)(!0);
    const S = [];
    return _.forEach((T) => {
      T.isError() && S.push(T.getError());
    }), (0, o.err)(S);
  };
  return zt.default = b, zt;
}
var Ys;
function Uo() {
  if (Ys) return Ke;
  Ys = 1;
  var o = Ke && Ke.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(Ke, "__esModule", { value: !0 }), ke();
  const t = pe(), r = o(Ae()), a = (i, l) => {
    if (!i.seconds)
      return (0, t.err)([
        "seconds field is undefined, but useSeconds options is enabled."
      ]);
    const { seconds: f } = i;
    return (0, r.default)(f, "seconds", l);
  };
  return Ke.default = a, Ke;
}
var Qe = {}, Bs;
function Po() {
  if (Bs) return Qe;
  Bs = 1;
  var o = Qe && Qe.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(Qe, "__esModule", { value: !0 }), ke();
  const t = pe(), r = o(Ae()), a = (i, l) => {
    if (!i.minutes)
      return (0, t.err)(["minutes field is undefined."]);
    const { minutes: f } = i;
    return (0, r.default)(f, "minutes", l);
  };
  return Qe.default = a, Qe;
}
var Xe = {}, Gs;
function zo() {
  if (Gs) return Xe;
  Gs = 1;
  var o = Xe && Xe.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(Xe, "__esModule", { value: !0 }), ke();
  const t = pe(), r = o(Ae()), a = (i, l) => {
    if (!i.hours)
      return (0, t.err)(["hours field is undefined."]);
    const { hours: f } = i;
    return (0, r.default)(f, "hours", l);
  };
  return Xe.default = a, Xe;
}
var et = {}, Js;
function Zo() {
  if (Js) return et;
  Js = 1;
  var o = et && et.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(et, "__esModule", { value: !0 }), ke();
  const t = pe(), r = o(Ae()), a = (i, l) => {
    if (!i.daysOfMonth)
      return (0, t.err)(["daysOfMonth field is undefined."]);
    const { daysOfMonth: f } = i;
    return l.allowOnlyOneBlankDayField && l.useBlankDay && i.daysOfMonth === "?" && i.daysOfWeek === "?" ? (0, t.err)([
      "Cannot use blank value in daysOfMonth and daysOfWeek field when allowOnlyOneBlankDayField option is enabled."
    ]) : l.mustHaveBlankDayField && i.daysOfMonth !== "?" && i.daysOfWeek !== "?" ? (0, t.err)([
      "Cannot specify both daysOfMonth and daysOfWeek field when mustHaveBlankDayField option is enabled."
    ]) : l.useLastDayOfMonth && i.daysOfMonth.indexOf("L") !== -1 && i.daysOfMonth.match(/[,/]/) ? (0, t.err)([
      "Cannot specify last day of month with lists, or ranges (symbols ,/)."
    ]) : l.useNearestWeekday && i.daysOfMonth.indexOf("W") !== -1 && i.daysOfMonth.match(/[,/-]/) ? (0, t.err)([
      "Cannot specify nearest weekday with lists, steps or ranges (symbols ,-/)."
    ]) : (0, r.default)(f, "daysOfMonth", l);
  };
  return et.default = a, et;
}
var tt = {}, Ks;
function jo() {
  if (Ks) return tt;
  Ks = 1;
  var o = tt && tt.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(tt, "__esModule", { value: !0 }), ke();
  const t = pe(), r = o(Ae()), a = (i, l) => {
    if (!i.months)
      return (0, t.err)(["months field is undefined."]);
    const { months: f } = i;
    return (0, r.default)(f, "months", l);
  };
  return tt.default = a, tt;
}
var rt = {}, Qs;
function Ho() {
  if (Qs) return rt;
  Qs = 1;
  var o = rt && rt.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(rt, "__esModule", { value: !0 }), ke();
  const t = pe(), r = o(Ae()), a = (i, l) => {
    if (!i.daysOfWeek)
      return (0, t.err)(["daysOfWeek field is undefined."]);
    const { daysOfWeek: f } = i;
    return l.allowOnlyOneBlankDayField && i.daysOfMonth === "?" && i.daysOfWeek === "?" ? (0, t.err)([
      "Cannot use blank value in daysOfMonth and daysOfWeek field when allowOnlyOneBlankDayField option is enabled."
    ]) : l.mustHaveBlankDayField && i.daysOfMonth !== "?" && i.daysOfWeek !== "?" ? (0, t.err)([
      "Cannot specify both daysOfMonth and daysOfWeek field when mustHaveBlankDayField option is enabled."
    ]) : l.useLastDayOfWeek && i.daysOfWeek.indexOf("L") !== -1 && i.daysOfWeek.match(/[,/-]/) ? (0, t.err)([
      "Cannot specify last day of week with lists, steps or ranges (symbols ,-/)."
    ]) : l.useNthWeekdayOfMonth && i.daysOfWeek.indexOf("#") !== -1 && i.daysOfWeek.match(/[,/-]/) ? (0, t.err)([
      "Cannot specify Nth weekday of month with lists, steps or ranges (symbols ,-/)."
    ]) : (0, r.default)(f, "daysOfWeek", l);
  };
  return rt.default = a, rt;
}
var nt = {}, Xs;
function Yo() {
  if (Xs) return nt;
  Xs = 1;
  var o = nt && nt.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(nt, "__esModule", { value: !0 }), ke();
  const t = pe(), r = o(Ae()), a = (i, l) => {
    if (!i.years)
      return (0, t.err)(["years field is undefined, but useYears option is enabled."]);
    const { years: f } = i;
    return (0, r.default)(f, "years", l);
  };
  return nt.default = a, nt;
}
var K = {}, yn;
try {
  yn = Map;
} catch {
}
var pn;
try {
  pn = Set;
} catch {
}
function Gi(o, t, r) {
  if (!o || typeof o != "object" || typeof o == "function")
    return o;
  if (o.nodeType && "cloneNode" in o)
    return o.cloneNode(!0);
  if (o instanceof Date)
    return new Date(o.getTime());
  if (o instanceof RegExp)
    return new RegExp(o);
  if (Array.isArray(o))
    return o.map(gn);
  if (yn && o instanceof yn)
    return new Map(Array.from(o.entries()));
  if (pn && o instanceof pn)
    return new Set(Array.from(o.values()));
  if (o instanceof Object) {
    t.push(o);
    var a = Object.create(o);
    r.push(a);
    for (var i in o) {
      var l = t.findIndex(function(f) {
        return f === o[i];
      });
      a[i] = l > -1 ? r[l] : Gi(o[i], t, r);
    }
    return a;
  }
  return o;
}
function gn(o) {
  return Gi(o, [], []);
}
const Bo = Object.prototype.toString, Go = Error.prototype.toString, Jo = RegExp.prototype.toString, Ko = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Qo = /^Symbol\((.*)\)(.*)$/;
function Xo(o) {
  return o != +o ? "NaN" : o === 0 && 1 / o < 0 ? "-0" : "" + o;
}
function ei(o, t = !1) {
  if (o == null || o === !0 || o === !1) return "" + o;
  const r = typeof o;
  if (r === "number") return Xo(o);
  if (r === "string") return t ? `"${o}"` : o;
  if (r === "function") return "[Function " + (o.name || "anonymous") + "]";
  if (r === "symbol") return Ko.call(o).replace(Qo, "Symbol($1)");
  const a = Bo.call(o).slice(8, -1);
  return a === "Date" ? isNaN(o.getTime()) ? "" + o : o.toISOString(o) : a === "Error" || o instanceof Error ? "[" + Go.call(o) + "]" : a === "RegExp" ? Jo.call(o) : null;
}
function at(o, t) {
  let r = ei(o, t);
  return r !== null ? r : JSON.stringify(o, function(a, i) {
    let l = ei(this[a], t);
    return l !== null ? l : i;
  }, 2);
}
let We = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: o,
    type: t,
    value: r,
    originalValue: a
  }) => {
    let i = a != null && a !== r, l = `${o} must be a \`${t}\` type, but the final value was: \`${at(r, !0)}\`` + (i ? ` (cast from the value \`${at(a, !0)}\`).` : ".");
    return r === null && (l += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), l;
  },
  defined: "${path} must be defined"
}, he = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, Ce = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, wn = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, vn = {
  isValue: "${path} field must be ${value}"
}, On = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Gt = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must be have ${length} items"
};
const el = Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: We,
  string: he,
  number: Ce,
  date: wn,
  object: On,
  array: Gt,
  boolean: vn
});
var Ir, ti;
function tl() {
  if (ti) return Ir;
  ti = 1;
  var o = Object.prototype, t = o.hasOwnProperty;
  function r(a, i) {
    return a != null && t.call(a, i);
  }
  return Ir = r, Ir;
}
var Lr, ri;
function rl() {
  if (ri) return Lr;
  ri = 1;
  var o = tl(), t = co();
  function r(a, i) {
    return a != null && t(a, i, o);
  }
  return Lr = r, Lr;
}
var nl = rl();
const Kt = /* @__PURE__ */ Ve(nl), ut = ((o) => o && o.__isYupSchema__);
class sl {
  constructor(t, r) {
    if (this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!Kt(r, "is")) throw new TypeError("`is:` is required for `when()` conditions");
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: a,
      then: i,
      otherwise: l
    } = r, f = typeof a == "function" ? a : (...y) => y.every((h) => h === a);
    this.fn = function(...y) {
      let h = y.pop(), b = y.pop(), m = f(...y) ? i : l;
      if (m)
        return typeof m == "function" ? m(b) : b.concat(m.resolve(h));
    };
  }
  resolve(t, r) {
    let a = this.refs.map((l) => l.getValue(r?.value, r?.parent, r?.context)), i = this.fn.apply(t, a.concat(t, r));
    if (i === void 0 || i === t) return t;
    if (!ut(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(r);
  }
}
function Ji(o) {
  return o == null ? [] : [].concat(o);
}
function bn() {
  return bn = Object.assign || function(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (o[a] = r[a]);
    }
    return o;
  }, bn.apply(this, arguments);
}
let il = /\$\{\s*(\w+)\s*\}/g;
class te extends Error {
  static formatError(t, r) {
    const a = r.label || r.path || "this";
    return a !== r.path && (r = bn({}, r, {
      path: a
    })), typeof t == "string" ? t.replace(il, (i, l) => at(r[l])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, a, i) {
    super(), this.name = "ValidationError", this.value = r, this.path = a, this.type = i, this.errors = [], this.inner = [], Ji(t).forEach((l) => {
      te.isError(l) ? (this.errors.push(...l.errors), this.inner = this.inner.concat(l.inner.length ? l.inner : l)) : this.errors.push(l);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, te);
  }
}
const al = (o) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, o(...r));
  };
};
function Qt(o, t) {
  let {
    endEarly: r,
    tests: a,
    args: i,
    value: l,
    errors: f,
    sort: y,
    path: h
  } = o, b = al(t), m = a.length;
  const w = [];
  if (f = f || [], !m) return f.length ? b(new te(f, l, h)) : b(null, l);
  for (let x = 0; x < a.length; x++) {
    const O = a[x];
    O(i, function(S) {
      if (S) {
        if (!te.isError(S))
          return b(S, l);
        if (r)
          return S.value = l, b(S, l);
        w.push(S);
      }
      if (--m <= 0) {
        if (w.length && (y && w.sort(y), f.length && w.push(...f), f = w), f.length) {
          b(new te(f, l, h), l);
          return;
        }
        b(null, l);
      }
    });
  }
}
var $r, ni;
function ul() {
  if (ni) return $r;
  ni = 1;
  function o(t) {
    return function(r, a, i) {
      for (var l = -1, f = Object(r), y = i(r), h = y.length; h--; ) {
        var b = y[t ? h : ++l];
        if (a(f[b], b, f) === !1)
          break;
      }
      return r;
    };
  }
  return $r = o, $r;
}
var Wr, si;
function ol() {
  if (si) return Wr;
  si = 1;
  var o = ul(), t = o();
  return Wr = t, Wr;
}
var Ar, ii;
function Ki() {
  if (ii) return Ar;
  ii = 1;
  var o = ol(), t = fo();
  function r(a, i) {
    return a && o(a, i, t);
  }
  return Ar = r, Ar;
}
var qr, ai;
function ll() {
  if (ai) return qr;
  ai = 1;
  var o = Zi(), t = Ki(), r = ji();
  function a(i, l) {
    var f = {};
    return l = r(l, 3), t(i, function(y, h, b) {
      o(f, h, l(y, h, b));
    }), f;
  }
  return qr = a, qr;
}
var cl = ll();
const Qi = /* @__PURE__ */ Ve(cl);
var Rr, ui;
function fl() {
  if (ui) return Rr;
  ui = 1;
  function o(k) {
    this._maxSize = k, this.clear();
  }
  o.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, o.prototype.get = function(k) {
    return this._values[k];
  }, o.prototype.set = function(k, D) {
    return this._size >= this._maxSize && this.clear(), k in this._values || this._size++, this._values[k] = D;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, a = /^\d/, i = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, l = /^\s*(['"]?)(.*?)(\1)\s*$/, f = 512, y = new o(f), h = new o(f), b = new o(f);
  Rr = {
    Cache: o,
    split: w,
    normalizePath: m,
    setter: function(k) {
      var D = m(k);
      return h.get(k) || h.set(k, function(I, C) {
        for (var M = 0, q = D.length, P = I; M < q - 1; ) {
          var B = D[M];
          if (B === "__proto__" || B === "constructor" || B === "prototype")
            return I;
          P = P[D[M++]];
        }
        P[D[M]] = C;
      });
    },
    getter: function(k, D) {
      var N = m(k);
      return b.get(k) || b.set(k, function(C) {
        for (var M = 0, q = N.length; M < q; )
          if (C != null || !D) C = C[N[M++]];
          else return;
        return C;
      });
    },
    join: function(k) {
      return k.reduce(function(D, N) {
        return D + (O(N) || r.test(N) ? "[" + N + "]" : (D ? "." : "") + N);
      }, "");
    },
    forEach: function(k, D, N) {
      x(Array.isArray(k) ? k : w(k), D, N);
    }
  };
  function m(k) {
    return y.get(k) || y.set(
      k,
      w(k).map(function(D) {
        return D.replace(l, "$2");
      })
    );
  }
  function w(k) {
    return k.match(t) || [""];
  }
  function x(k, D, N) {
    var I = k.length, C, M, q, P;
    for (M = 0; M < I; M++)
      C = k[M], C && (T(C) && (C = '"' + C + '"'), P = O(C), q = !P && /^\d+$/.test(C), D.call(N, C, P, q, M, k));
  }
  function O(k) {
    return typeof k == "string" && k && ["'", '"'].indexOf(k.charAt(0)) !== -1;
  }
  function _(k) {
    return k.match(a) && !k.match(r);
  }
  function S(k) {
    return i.test(k);
  }
  function T(k) {
    return !O(k) && (_(k) || S(k));
  }
  return Rr;
}
var nr = fl();
const Zt = {
  context: "$",
  value: "."
};
function dl(o, t) {
  return new Ne(o, t);
}
class Ne {
  constructor(t, r = {}) {
    if (typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Zt.context, this.isValue = this.key[0] === Zt.value, this.isSibling = !this.isContext && !this.isValue;
    let a = this.isContext ? Zt.context : this.isValue ? Zt.value : "";
    this.path = this.key.slice(a.length), this.getter = this.path && nr.getter(this.path, !0), this.map = r.map;
  }
  getValue(t, r, a) {
    let i = this.isContext ? a : this.isValue ? t : r;
    return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, r) {
    return this.getValue(t, r?.parent, r?.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Ne.prototype.__isYupRef = !0;
function Xt() {
  return Xt = Object.assign || function(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (o[a] = r[a]);
    }
    return o;
  }, Xt.apply(this, arguments);
}
function hl(o, t) {
  if (o == null) return {};
  var r = {}, a = Object.keys(o), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (r[i] = o[i]);
  return r;
}
function jt(o) {
  function t(r, a) {
    let {
      value: i,
      path: l = "",
      label: f,
      options: y,
      originalValue: h,
      sync: b
    } = r, m = hl(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: w,
      test: x,
      params: O,
      message: _
    } = o;
    let {
      parent: S,
      context: T
    } = y;
    function k(M) {
      return Ne.isRef(M) ? M.getValue(i, S, T) : M;
    }
    function D(M = {}) {
      const q = Qi(Xt({
        value: i,
        originalValue: h,
        label: f,
        path: M.path || l
      }, O, M.params), k), P = new te(te.formatError(M.message || _, q), i, q.path, M.type || w);
      return P.params = q, P;
    }
    let N = Xt({
      path: l,
      parent: S,
      type: w,
      createError: D,
      resolve: k,
      options: y,
      originalValue: h
    }, m);
    if (!b) {
      try {
        Promise.resolve(x.call(N, i, N)).then((M) => {
          te.isError(M) ? a(M) : M ? a(null, M) : a(D());
        });
      } catch (M) {
        a(M);
      }
      return;
    }
    let I;
    try {
      var C;
      if (I = x.call(N, i, N), typeof ((C = I) == null ? void 0 : C.then) == "function")
        throw new Error(`Validation test of type: "${N.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (M) {
      a(M);
      return;
    }
    te.isError(I) ? a(I) : I ? a(null, I) : a(D());
  }
  return t.OPTIONS = o, t;
}
let ml = (o) => o.substr(0, o.length - 1).substr(1);
function Xi(o, t, r, a = r) {
  let i, l, f;
  return t ? (nr.forEach(t, (y, h, b) => {
    let m = h ? ml(y) : y;
    if (o = o.resolve({
      context: a,
      parent: i,
      value: r
    }), o.innerType) {
      let w = b ? parseInt(m, 10) : 0;
      if (r && w >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${y}, in the path: ${t}. because there is no value at that index. `);
      i = r, r = r && r[w], o = o.innerType;
    }
    if (!b) {
      if (!o.fields || !o.fields[m]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${f} which is a type: "${o._type}")`);
      i = r, r = r && r[m], o = o.fields[m];
    }
    l = m, f = h ? "[" + y + "]" : "." + y;
  }), {
    schema: o,
    parent: i,
    parentPath: l
  }) : {
    parent: i,
    parentPath: t,
    schema: o
  };
}
const yl = (o, t, r, a) => Xi(o, t, r, a).schema;
class er {
  constructor() {
    this.list = /* @__PURE__ */ new Set(), this.refs = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.list.size + this.refs.size;
  }
  describe() {
    const t = [];
    for (const r of this.list) t.push(r);
    for (const [, r] of this.refs) t.push(r.describe());
    return t;
  }
  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }
  add(t) {
    Ne.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    Ne.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  has(t, r) {
    if (this.list.has(t)) return !0;
    let a, i = this.refs.values();
    for (; a = i.next(), !a.done; ) if (r(a.value) === t) return !0;
    return !1;
  }
  clone() {
    const t = new er();
    return t.list = new Set(this.list), t.refs = new Map(this.refs), t;
  }
  merge(t, r) {
    const a = this.clone();
    return t.list.forEach((i) => a.add(i)), t.refs.forEach((i) => a.add(i)), r.list.forEach((i) => a.delete(i)), r.refs.forEach((i) => a.delete(i)), a;
  }
}
function oe() {
  return oe = Object.assign || function(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (o[a] = r[a]);
    }
    return o;
  }, oe.apply(this, arguments);
}
class Q {
  constructor(t) {
    this.deps = [], this.conditions = [], this._whitelist = new er(), this._blacklist = new er(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(We.notType);
    }), this.type = t?.type || "mixed", this.spec = oe({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      nullable: !1,
      presence: "optional"
    }, t?.spec);
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  _typeCheck(t) {
    return !0;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = oe({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = gn(oe({}, this.spec, t)), r;
  }
  label(t) {
    var r = this.clone();
    return r.spec.label = t, r;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r;
  }
  // withContext<TContext extends AnyObject>(): BaseSchema<
  //   TCast,
  //   TContext,
  //   TOutput
  // > {
  //   return this as any;
  // }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let a = t(this);
    return this._mutate = r, a;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this, a = t.clone();
    const i = oe({}, r.spec, a.spec);
    return a.spec = i, a._typeError || (a._typeError = r._typeError), a._whitelistError || (a._whitelistError = r._whitelistError), a._blacklistError || (a._blacklistError = r._blacklistError), a._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), a._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), a.tests = r.tests, a.exclusiveTests = r.exclusiveTests, a.withMutation((l) => {
      t.tests.forEach((f) => {
        l.test(f.OPTIONS);
      });
    }), a;
  }
  isType(t) {
    return this.spec.nullable && t === null ? !0 : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let a = r.conditions;
      r = r.clone(), r.conditions = [], r = a.reduce((i, l) => l.resolve(i, t), r), r = r.resolve(t);
    }
    return r;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {*=} options.parent
   * @param {*=} options.context
   */
  cast(t, r = {}) {
    let a = this.resolve(oe({
      value: t
    }, r)), i = a._cast(t, r);
    if (t !== void 0 && r.assert !== !1 && a.isType(i) !== !0) {
      let l = at(t), f = at(i);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${a._type}". 

attempted value: ${l} 
` + (f !== l ? `result of cast: ${f}` : ""));
    }
    return i;
  }
  _cast(t, r) {
    let a = t === void 0 ? t : this.transforms.reduce((i, l) => l.call(this, i, t, this), t);
    return a === void 0 && (a = this.getDefault()), a;
  }
  _validate(t, r = {}, a) {
    let {
      sync: i,
      path: l,
      from: f = [],
      originalValue: y = t,
      strict: h = this.spec.strict,
      abortEarly: b = this.spec.abortEarly
    } = r, m = t;
    h || (m = this._cast(m, oe({
      assert: !1
    }, r)));
    let w = {
      value: m,
      path: l,
      options: r,
      originalValue: y,
      schema: this,
      label: this.spec.label,
      sync: i,
      from: f
    }, x = [];
    this._typeError && x.push(this._typeError), this._whitelistError && x.push(this._whitelistError), this._blacklistError && x.push(this._blacklistError), Qt({
      args: w,
      value: m,
      path: l,
      tests: x,
      endEarly: b
    }, (O) => {
      if (O) return void a(O, m);
      Qt({
        tests: this.tests,
        args: w,
        path: l,
        sync: i,
        value: m,
        endEarly: b
      }, a);
    });
  }
  validate(t, r, a) {
    let i = this.resolve(oe({}, r, {
      value: t
    }));
    return typeof a == "function" ? i._validate(t, r, a) : new Promise((l, f) => i._validate(t, r, (y, h) => {
      y ? f(y) : l(h);
    }));
  }
  validateSync(t, r) {
    let a = this.resolve(oe({}, r, {
      value: t
    })), i;
    return a._validate(t, oe({}, r, {
      sync: !0
    }), (l, f) => {
      if (l) throw l;
      i = f;
    }), i;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (a) => {
      if (te.isError(a)) return !1;
      throw a;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (a) {
      if (te.isError(a)) return !1;
      throw a;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : gn(t);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault();
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    var r = this.clone();
    return r.spec.strict = t, r;
  }
  _isPresent(t) {
    return t != null;
  }
  defined(t = We.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = We.required) {
    return this.clone({
      presence: "required"
    }).withMutation((r) => r.test({
      message: t,
      name: "required",
      exclusive: !0,
      test(a) {
        return this.schema._isPresent(a);
      }
    }));
  }
  notRequired() {
    var t = this.clone({
      presence: "optional"
    });
    return t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t;
  }
  nullable(t = !0) {
    var r = this.clone({
      nullable: t !== !1
    });
    return r;
  }
  transform(t) {
    var r = this.clone();
    return r.transforms.push(t), r;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
      test: t[0]
    } : r = t[0] : t.length === 2 ? r = {
      name: t[0],
      test: t[1]
    } : r = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, r.message === void 0 && (r.message = We.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let a = this.clone(), i = jt(r), l = r.exclusive || r.name && a.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (a.exclusiveTests[r.name] = !!r.exclusive), a.tests = a.tests.filter((f) => !(f.OPTIONS.name === r.name && (l || f.OPTIONS.test === i.OPTIONS.test))), a.tests.push(i), a;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let a = this.clone(), i = Ji(t).map((l) => new Ne(l));
    return i.forEach((l) => {
      l.isSibling && a.deps.push(l.key);
    }), a.conditions.push(new sl(i, r)), a;
  }
  typeError(t) {
    var r = this.clone();
    return r._typeError = jt({
      message: t,
      name: "typeError",
      test(a) {
        return a !== void 0 && !this.schema.isType(a) ? this.createError({
          params: {
            type: this.schema._type
          }
        }) : !0;
      }
    }), r;
  }
  oneOf(t, r = We.oneOf) {
    var a = this.clone();
    return t.forEach((i) => {
      a._whitelist.add(i), a._blacklist.delete(i);
    }), a._whitelistError = jt({
      message: r,
      name: "oneOf",
      test(i) {
        if (i === void 0) return !0;
        let l = this.schema._whitelist;
        return l.has(i, this.resolve) ? !0 : this.createError({
          params: {
            values: l.toArray().join(", ")
          }
        });
      }
    }), a;
  }
  notOneOf(t, r = We.notOneOf) {
    var a = this.clone();
    return t.forEach((i) => {
      a._blacklist.add(i), a._whitelist.delete(i);
    }), a._blacklistError = jt({
      message: r,
      name: "notOneOf",
      test(i) {
        let l = this.schema._blacklist;
        return l.has(i, this.resolve) ? this.createError({
          params: {
            values: l.toArray().join(", ")
          }
        }) : !0;
      }
    }), a;
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r;
  }
  describe() {
    const t = this.clone(), {
      label: r,
      meta: a
    } = t.spec;
    return {
      meta: a,
      label: r,
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.map((l) => ({
        name: l.OPTIONS.name,
        params: l.OPTIONS.params
      })).filter((l, f, y) => y.findIndex((h) => h.name === l.name) === f)
    };
  }
}
Q.prototype.__isYupSchema__ = !0;
for (const o of ["validate", "validateSync"]) Q.prototype[`${o}At`] = function(t, r, a = {}) {
  const {
    parent: i,
    parentPath: l,
    schema: f
  } = Xi(this, t, r, a.context);
  return f[o](i && i[l], oe({}, a, {
    parent: i,
    path: t
  }));
};
for (const o of ["equals", "is"]) Q.prototype[o] = Q.prototype.oneOf;
for (const o of ["not", "nope"]) Q.prototype[o] = Q.prototype.notOneOf;
Q.prototype.optional = Q.prototype.notRequired;
const xn = Q;
function ea() {
  return new xn();
}
ea.prototype = xn.prototype;
const Y = ((o) => o == null);
function _n() {
  return new kn();
}
class kn extends Q {
  constructor() {
    super({
      type: "boolean"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (!this.isType(t)) {
          if (/^(true|1)$/i.test(String(t))) return !0;
          if (/^(false|0)$/i.test(String(t))) return !1;
        }
        return t;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof Boolean && (t = t.valueOf()), typeof t == "boolean";
  }
  isTrue(t = vn.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return Y(r) || r === !0;
      }
    });
  }
  isFalse(t = vn.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return Y(r) || r === !1;
      }
    });
  }
}
_n.prototype = kn.prototype;
let pl = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, gl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, wl = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, vl = (o) => Y(o) || o === o.trim(), Ol = {}.toString();
function ta() {
  return new Sn();
}
class Sn extends Q {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t)) return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === Ol ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = he.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(a) {
        return Y(a) || a.length === this.resolve(t);
      }
    });
  }
  min(t, r = he.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(a) {
        return Y(a) || a.length >= this.resolve(t);
      }
    });
  }
  max(t, r = he.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      test(a) {
        return Y(a) || a.length <= this.resolve(t);
      }
    });
  }
  matches(t, r) {
    let a = !1, i, l;
    return r && (typeof r == "object" ? {
      excludeEmptyString: a = !1,
      message: i,
      name: l
    } = r : i = r), this.test({
      name: l || "matches",
      message: i || he.matches,
      params: {
        regex: t
      },
      test: (f) => Y(f) || f === "" && a || f.search(t) !== -1
    });
  }
  email(t = he.email) {
    return this.matches(pl, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = he.url) {
    return this.matches(gl, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = he.uuid) {
    return this.matches(wl, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = he.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: vl
    });
  }
  lowercase(t = he.lowercase) {
    return this.transform((r) => Y(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => Y(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = he.uppercase) {
    return this.transform((r) => Y(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => Y(r) || r === r.toUpperCase()
    });
  }
}
ta.prototype = Sn.prototype;
let bl = (o) => o != +o;
function ra() {
  return new En();
}
class En extends Q {
  constructor() {
    super({
      type: "number"
    }), this.withMutation(() => {
      this.transform(function(t) {
        let r = t;
        if (typeof r == "string") {
          if (r = r.replace(/\s/g, ""), r === "") return NaN;
          r = +r;
        }
        return this.isType(r) ? r : parseFloat(r);
      });
    });
  }
  _typeCheck(t) {
    return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !bl(t);
  }
  min(t, r = Ce.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(a) {
        return Y(a) || a >= this.resolve(t);
      }
    });
  }
  max(t, r = Ce.max) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(a) {
        return Y(a) || a <= this.resolve(t);
      }
    });
  }
  lessThan(t, r = Ce.lessThan) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        less: t
      },
      test(a) {
        return Y(a) || a < this.resolve(t);
      }
    });
  }
  moreThan(t, r = Ce.moreThan) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        more: t
      },
      test(a) {
        return Y(a) || a > this.resolve(t);
      }
    });
  }
  positive(t = Ce.positive) {
    return this.moreThan(0, t);
  }
  negative(t = Ce.negative) {
    return this.lessThan(0, t);
  }
  integer(t = Ce.integer) {
    return this.test({
      name: "integer",
      message: t,
      test: (r) => Y(r) || Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((t) => Y(t) ? t : t | 0);
  }
  round(t) {
    var r, a = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc") return this.truncate();
    if (a.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + a.join(", "));
    return this.transform((i) => Y(i) ? i : Math[t](i));
  }
}
ra.prototype = En.prototype;
var _l = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function xl(o) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, a, i;
  if (i = _l.exec(o)) {
    for (var l = 0, f; f = t[l]; ++l) i[f] = +i[f] || 0;
    i[2] = (+i[2] || 1) - 1, i[3] = +i[3] || 1, i[7] = i[7] ? String(i[7]).substr(0, 3) : 0, (i[8] === void 0 || i[8] === "") && (i[9] === void 0 || i[9] === "") ? a = +new Date(i[1], i[2], i[3], i[4], i[5], i[6], i[7]) : (i[8] !== "Z" && i[9] !== void 0 && (r = i[10] * 60 + i[11], i[9] === "+" && (r = 0 - r)), a = Date.UTC(i[1], i[2], i[3], i[4], i[5] + r, i[6], i[7]));
  } else a = Date.parse ? Date.parse(o) : NaN;
  return a;
}
let Tn = /* @__PURE__ */ new Date(""), kl = (o) => Object.prototype.toString.call(o) === "[object Date]";
function Fn() {
  return new sr();
}
class sr extends Q {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = xl(t), isNaN(t) ? Tn : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return kl(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let a;
    if (Ne.isRef(t))
      a = t;
    else {
      let i = this.cast(t);
      if (!this._typeCheck(i)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      a = i;
    }
    return a;
  }
  min(t, r = wn.min) {
    let a = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(i) {
        return Y(i) || i >= this.resolve(a);
      }
    });
  }
  max(t, r = wn.max) {
    var a = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(i) {
        return Y(i) || i <= this.resolve(a);
      }
    });
  }
}
sr.INVALID_DATE = Tn;
Fn.prototype = sr.prototype;
Fn.INVALID_DATE = Tn;
var Ur, oi;
function Sl() {
  if (oi) return Ur;
  oi = 1;
  function o(t, r, a, i) {
    var l = -1, f = t == null ? 0 : t.length;
    for (i && f && (a = t[++l]); ++l < f; )
      a = r(a, t[l], l, t);
    return a;
  }
  return Ur = o, Ur;
}
var Pr, li;
function El() {
  if (li) return Pr;
  li = 1;
  function o(t) {
    return function(r) {
      return t?.[r];
    };
  }
  return Pr = o, Pr;
}
var zr, ci;
function Tl() {
  if (ci) return zr;
  ci = 1;
  var o = El(), t = {
    // Latin-1 Supplement block.
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    // Latin Extended-A block.
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s"
  }, r = o(t);
  return zr = r, zr;
}
var Zr, fi;
function Fl() {
  if (fi) return Zr;
  fi = 1;
  var o = Tl(), t = rr(), r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, a = "\\u0300-\\u036f", i = "\\ufe20-\\ufe2f", l = "\\u20d0-\\u20ff", f = a + i + l, y = "[" + f + "]", h = RegExp(y, "g");
  function b(m) {
    return m = t(m), m && m.replace(r, o).replace(h, "");
  }
  return Zr = b, Zr;
}
var jr, di;
function Dl() {
  if (di) return jr;
  di = 1;
  var o = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  function t(r) {
    return r.match(o) || [];
  }
  return jr = t, jr;
}
var Hr, hi;
function Ml() {
  if (hi) return Hr;
  hi = 1;
  var o = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  function t(r) {
    return o.test(r);
  }
  return Hr = t, Hr;
}
var Yr, mi;
function Cl() {
  if (mi) return Yr;
  mi = 1;
  var o = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", a = "\\u20d0-\\u20ff", i = t + r + a, l = "\\u2700-\\u27bf", f = "a-z\\xdf-\\xf6\\xf8-\\xff", y = "\\xac\\xb1\\xd7\\xf7", h = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", b = "\\u2000-\\u206f", m = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", w = "A-Z\\xc0-\\xd6\\xd8-\\xde", x = "\\ufe0e\\ufe0f", O = y + h + b + m, _ = "['’]", S = "[" + O + "]", T = "[" + i + "]", k = "\\d+", D = "[" + l + "]", N = "[" + f + "]", I = "[^" + o + O + k + l + f + w + "]", C = "\\ud83c[\\udffb-\\udfff]", M = "(?:" + T + "|" + C + ")", q = "[^" + o + "]", P = "(?:\\ud83c[\\udde6-\\uddff]){2}", B = "[\\ud800-\\udbff][\\udc00-\\udfff]", ne = "[" + w + "]", Se = "\\u200d", Ee = "(?:" + N + "|" + I + ")", Te = "(?:" + ne + "|" + I + ")", ge = "(?:" + _ + "(?:d|ll|m|re|s|t|ve))?", we = "(?:" + _ + "(?:D|LL|M|RE|S|T|VE))?", ve = M + "?", se = "[" + x + "]?", F = "(?:" + Se + "(?:" + [q, P, B].join("|") + ")" + se + ve + ")*", Oe = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", qe = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ot = se + ve + F, ir = "(?:" + [D, P, B].join("|") + ")" + ot, ar = RegExp([
    ne + "?" + N + "+" + ge + "(?=" + [S, ne, "$"].join("|") + ")",
    Te + "+" + we + "(?=" + [S, ne + Ee, "$"].join("|") + ")",
    ne + "?" + Ee + "+" + ge,
    ne + "+" + we,
    qe,
    Oe,
    k,
    ir
  ].join("|"), "g");
  function ur(lt) {
    return lt.match(ar) || [];
  }
  return Yr = ur, Yr;
}
var Br, yi;
function Nl() {
  if (yi) return Br;
  yi = 1;
  var o = Dl(), t = Ml(), r = rr(), a = Cl();
  function i(l, f, y) {
    return l = r(l), f = y ? void 0 : f, f === void 0 ? t(l) ? a(l) : o(l) : l.match(f) || [];
  }
  return Br = i, Br;
}
var Gr, pi;
function na() {
  if (pi) return Gr;
  pi = 1;
  var o = Sl(), t = Fl(), r = Nl(), a = "['’]", i = RegExp(a, "g");
  function l(f) {
    return function(y) {
      return o(r(t(y).replace(i, "")), f, "");
    };
  }
  return Gr = l, Gr;
}
var Jr, gi;
function Vl() {
  if (gi) return Jr;
  gi = 1;
  var o = na(), t = o(function(r, a, i) {
    return r + (i ? "_" : "") + a.toLowerCase();
  });
  return Jr = t, Jr;
}
var Il = Vl();
const wi = /* @__PURE__ */ Ve(Il);
var Kr, vi;
function Ll() {
  if (vi) return Kr;
  vi = 1;
  function o(t, r, a) {
    var i = -1, l = t.length;
    r < 0 && (r = -r > l ? 0 : l + r), a = a > l ? l : a, a < 0 && (a += l), l = r > a ? 0 : a - r >>> 0, r >>>= 0;
    for (var f = Array(l); ++i < l; )
      f[i] = t[i + r];
    return f;
  }
  return Kr = o, Kr;
}
var Qr, Oi;
function $l() {
  if (Oi) return Qr;
  Oi = 1;
  var o = Ll();
  function t(r, a, i) {
    var l = r.length;
    return i = i === void 0 ? l : i, !a && i >= l ? r : o(r, a, i);
  }
  return Qr = t, Qr;
}
var Xr, bi;
function sa() {
  if (bi) return Xr;
  bi = 1;
  var o = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", a = "\\u20d0-\\u20ff", i = t + r + a, l = "\\ufe0e\\ufe0f", f = "\\u200d", y = RegExp("[" + f + o + i + l + "]");
  function h(b) {
    return y.test(b);
  }
  return Xr = h, Xr;
}
var en, _i;
function Wl() {
  if (_i) return en;
  _i = 1;
  function o(t) {
    return t.split("");
  }
  return en = o, en;
}
var tn, xi;
function Al() {
  if (xi) return tn;
  xi = 1;
  var o = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", a = "\\u20d0-\\u20ff", i = t + r + a, l = "\\ufe0e\\ufe0f", f = "[" + o + "]", y = "[" + i + "]", h = "\\ud83c[\\udffb-\\udfff]", b = "(?:" + y + "|" + h + ")", m = "[^" + o + "]", w = "(?:\\ud83c[\\udde6-\\uddff]){2}", x = "[\\ud800-\\udbff][\\udc00-\\udfff]", O = "\\u200d", _ = b + "?", S = "[" + l + "]?", T = "(?:" + O + "(?:" + [m, w, x].join("|") + ")" + S + _ + ")*", k = S + _ + T, D = "(?:" + [m + y + "?", y, w, x, f].join("|") + ")", N = RegExp(h + "(?=" + h + ")|" + D + k, "g");
  function I(C) {
    return C.match(N) || [];
  }
  return tn = I, tn;
}
var rn, ki;
function ql() {
  if (ki) return rn;
  ki = 1;
  var o = Wl(), t = sa(), r = Al();
  function a(i) {
    return t(i) ? r(i) : o(i);
  }
  return rn = a, rn;
}
var nn, Si;
function Rl() {
  if (Si) return nn;
  Si = 1;
  var o = $l(), t = sa(), r = ql(), a = rr();
  function i(l) {
    return function(f) {
      f = a(f);
      var y = t(f) ? r(f) : void 0, h = y ? y[0] : f.charAt(0), b = y ? o(y, 1).join("") : f.slice(1);
      return h[l]() + b;
    };
  }
  return nn = i, nn;
}
var sn, Ei;
function Ul() {
  if (Ei) return sn;
  Ei = 1;
  var o = Rl(), t = o("toUpperCase");
  return sn = t, sn;
}
var an, Ti;
function Pl() {
  if (Ti) return an;
  Ti = 1;
  var o = rr(), t = Ul();
  function r(a) {
    return t(o(a).toLowerCase());
  }
  return an = r, an;
}
var un, Fi;
function zl() {
  if (Fi) return un;
  Fi = 1;
  var o = Pl(), t = na(), r = t(function(a, i, l) {
    return i = i.toLowerCase(), a + (l ? o(i) : i);
  });
  return un = r, un;
}
var Zl = zl();
const jl = /* @__PURE__ */ Ve(Zl);
var on, Di;
function Hl() {
  if (Di) return on;
  Di = 1;
  var o = Zi(), t = Ki(), r = ji();
  function a(i, l) {
    var f = {};
    return l = r(l, 3), t(i, function(y, h, b) {
      o(f, l(y, h, b), y);
    }), f;
  }
  return on = a, on;
}
var Yl = Hl();
const Bl = /* @__PURE__ */ Ve(Yl);
var Ht = { exports: {} }, Mi;
function Gl() {
  if (Mi) return Ht.exports;
  Mi = 1, Ht.exports = function(i) {
    return o(t(i), i);
  }, Ht.exports.array = o;
  function o(i, l) {
    var f = i.length, y = new Array(f), h = {}, b = f, m = r(l), w = a(i);
    for (l.forEach(function(O) {
      if (!w.has(O[0]) || !w.has(O[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); b--; )
      h[b] || x(i[b], b, /* @__PURE__ */ new Set());
    return y;
    function x(O, _, S) {
      if (S.has(O)) {
        var T;
        try {
          T = ", node was:" + JSON.stringify(O);
        } catch {
          T = "";
        }
        throw new Error("Cyclic dependency" + T);
      }
      if (!w.has(O))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(O));
      if (!h[_]) {
        h[_] = !0;
        var k = m.get(O) || /* @__PURE__ */ new Set();
        if (k = Array.from(k), _ = k.length) {
          S.add(O);
          do {
            var D = k[--_];
            x(D, w.get(D), S);
          } while (_);
          S.delete(O);
        }
        y[--f] = O;
      }
    }
  }
  function t(i) {
    for (var l = /* @__PURE__ */ new Set(), f = 0, y = i.length; f < y; f++) {
      var h = i[f];
      l.add(h[0]), l.add(h[1]);
    }
    return Array.from(l);
  }
  function r(i) {
    for (var l = /* @__PURE__ */ new Map(), f = 0, y = i.length; f < y; f++) {
      var h = i[f];
      l.has(h[0]) || l.set(h[0], /* @__PURE__ */ new Set()), l.has(h[1]) || l.set(h[1], /* @__PURE__ */ new Set()), l.get(h[0]).add(h[1]);
    }
    return l;
  }
  function a(i) {
    for (var l = /* @__PURE__ */ new Map(), f = 0, y = i.length; f < y; f++)
      l.set(i[f], f);
    return l;
  }
  return Ht.exports;
}
var Jl = Gl();
const Kl = /* @__PURE__ */ Ve(Jl);
function Ql(o, t = []) {
  let r = [], a = [];
  function i(l, f) {
    var y = nr.split(l)[0];
    ~a.indexOf(y) || a.push(y), ~t.indexOf(`${f}-${y}`) || r.push([f, y]);
  }
  for (const l in o) if (Kt(o, l)) {
    let f = o[l];
    ~a.indexOf(l) || a.push(l), Ne.isRef(f) && f.isSibling ? i(f.path, l) : ut(f) && "deps" in f && f.deps.forEach((y) => i(y, l));
  }
  return Kl.array(a, r).reverse();
}
function Ci(o, t) {
  let r = 1 / 0;
  return o.some((a, i) => {
    var l;
    if (((l = t.path) == null ? void 0 : l.indexOf(a)) !== -1)
      return r = i, !0;
  }), r;
}
function ia(o) {
  return (t, r) => Ci(o, t) - Ci(o, r);
}
function it() {
  return it = Object.assign || function(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (o[a] = r[a]);
    }
    return o;
  }, it.apply(this, arguments);
}
let Ni = (o) => Object.prototype.toString.call(o) === "[object Object]";
function Xl(o, t) {
  let r = Object.keys(o.fields);
  return Object.keys(t).filter((a) => r.indexOf(a) === -1);
}
const ec = ia([]);
class Dn extends Q {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = ec, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      this.transform(function(a) {
        if (typeof a == "string")
          try {
            a = JSON.parse(a);
          } catch {
            a = null;
          }
        return this.isType(a) ? a : null;
      }), t && this.shape(t);
    });
  }
  _typeCheck(t) {
    return Ni(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var a;
    let i = super._cast(t, r);
    if (i === void 0) return this.getDefault();
    if (!this._typeCheck(i)) return i;
    let l = this.fields, f = (a = r.stripUnknown) != null ? a : this.spec.noUnknown, y = this._nodes.concat(Object.keys(i).filter((w) => this._nodes.indexOf(w) === -1)), h = {}, b = it({}, r, {
      parent: h,
      __validating: r.__validating || !1
    }), m = !1;
    for (const w of y) {
      let x = l[w], O = Kt(i, w);
      if (x) {
        let _, S = i[w];
        b.path = (r.path ? `${r.path}.` : "") + w, x = x.resolve({
          value: S,
          context: r.context,
          parent: h
        });
        let T = "spec" in x ? x.spec : void 0, k = T?.strict;
        if (T?.strip) {
          m = m || w in i;
          continue;
        }
        _ = !r.__validating || !k ? (
          // TODO: use _cast, this is double resolving
          x.cast(i[w], b)
        ) : i[w], _ !== void 0 && (h[w] = _);
      } else O && !f && (h[w] = i[w]);
      h[w] !== i[w] && (m = !0);
    }
    return m ? h : i;
  }
  _validate(t, r = {}, a) {
    let i = [], {
      sync: l,
      from: f = [],
      originalValue: y = t,
      abortEarly: h = this.spec.abortEarly,
      recursive: b = this.spec.recursive
    } = r;
    f = [{
      schema: this,
      value: y
    }, ...f], r.__validating = !0, r.originalValue = y, r.from = f, super._validate(t, r, (m, w) => {
      if (m) {
        if (!te.isError(m) || h)
          return void a(m, w);
        i.push(m);
      }
      if (!b || !Ni(w)) {
        a(i[0] || null, w);
        return;
      }
      y = y || w;
      let x = this._nodes.map((O) => (_, S) => {
        let T = O.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + O : `${r.path || ""}["${O}"]`, k = this.fields[O];
        if (k && "validate" in k) {
          k.validate(w[O], it({}, r, {
            // @ts-ignore
            path: T,
            from: f,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: w,
            originalValue: y[O]
          }), S);
          return;
        }
        S(null);
      });
      Qt({
        tests: x,
        value: w,
        errors: i,
        endEarly: h,
        sort: this._sortErrors,
        path: r.path
      }, a);
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = it({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), a = r.fields;
    for (let [i, l] of Object.entries(this.fields)) {
      const f = a[i];
      f === void 0 ? a[i] = l : f instanceof Q && l instanceof Q && (a[i] = l.concat(f));
    }
    return r.withMutation(() => r.shape(a));
  }
  getDefaultFromShape() {
    let t = {};
    return this._nodes.forEach((r) => {
      const a = this.fields[r];
      t[r] = "default" in a ? a.getDefault() : void 0;
    }), t;
  }
  _getDefault() {
    if ("default" in this.spec)
      return super._getDefault();
    if (this._nodes.length)
      return this.getDefaultFromShape();
  }
  shape(t, r = []) {
    let a = this.clone(), i = Object.assign(a.fields, t);
    if (a.fields = i, a._sortErrors = ia(Object.keys(i)), r.length) {
      Array.isArray(r[0]) || (r = [r]);
      let l = r.map(([f, y]) => `${f}-${y}`);
      a._excludedEdges = a._excludedEdges.concat(l);
    }
    return a._nodes = Ql(i, a._excludedEdges), a;
  }
  pick(t) {
    const r = {};
    for (const a of t)
      this.fields[a] && (r[a] = this.fields[a]);
    return this.clone().withMutation((a) => (a.fields = {}, a.shape(r)));
  }
  omit(t) {
    const r = this.clone(), a = r.fields;
    r.fields = {};
    for (const i of t)
      delete a[i];
    return r.withMutation(() => r.shape(a));
  }
  from(t, r, a) {
    let i = nr.getter(t, !0);
    return this.transform((l) => {
      if (l == null) return l;
      let f = l;
      return Kt(l, t) && (f = it({}, l), a || delete f[t], f[r] = i(l)), f;
    });
  }
  noUnknown(t = !0, r = On.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let a = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null) return !0;
        const l = Xl(this.schema, i);
        return !t || l.length === 0 || this.createError({
          params: {
            unknown: l.join(", ")
          }
        });
      }
    });
    return a.spec.noUnknown = t, a;
  }
  unknown(t = !0, r = On.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && Bl(r, (a, i) => t(i)));
  }
  camelCase() {
    return this.transformKeys(jl);
  }
  snakeCase() {
    return this.transformKeys(wi);
  }
  constantCase() {
    return this.transformKeys((t) => wi(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = Qi(this.fields, (r) => r.describe()), t;
  }
}
function aa(o) {
  return new Dn(o);
}
aa.prototype = Dn.prototype;
function tr() {
  return tr = Object.assign || function(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (o[a] = r[a]);
    }
    return o;
  }, tr.apply(this, arguments);
}
function ua(o) {
  return new Mn(o);
}
class Mn extends Q {
  constructor(t) {
    super({
      type: "array"
    }), this.innerType = t, this.withMutation(() => {
      this.transform(function(r) {
        if (typeof r == "string") try {
          r = JSON.parse(r);
        } catch {
          r = null;
        }
        return this.isType(r) ? r : null;
      });
    });
  }
  _typeCheck(t) {
    return Array.isArray(t);
  }
  get _subType() {
    return this.innerType;
  }
  _cast(t, r) {
    const a = super._cast(t, r);
    if (!this._typeCheck(a) || !this.innerType) return a;
    let i = !1;
    const l = a.map((f, y) => {
      const h = this.innerType.cast(f, tr({}, r, {
        path: `${r.path || ""}[${y}]`
      }));
      return h !== f && (i = !0), h;
    });
    return i ? l : a;
  }
  _validate(t, r = {}, a) {
    var i, l;
    let f = [];
    r.sync;
    let y = r.path, h = this.innerType, b = (i = r.abortEarly) != null ? i : this.spec.abortEarly, m = (l = r.recursive) != null ? l : this.spec.recursive, w = r.originalValue != null ? r.originalValue : t;
    super._validate(t, r, (x, O) => {
      if (x) {
        if (!te.isError(x) || b)
          return void a(x, O);
        f.push(x);
      }
      if (!m || !h || !this._typeCheck(O)) {
        a(f[0] || null, O);
        return;
      }
      w = w || O;
      let _ = new Array(O.length);
      for (let S = 0; S < O.length; S++) {
        let T = O[S], k = `${r.path || ""}[${S}]`, D = tr({}, r, {
          path: k,
          strict: !0,
          parent: O,
          index: S,
          originalValue: w[S]
        });
        _[S] = (N, I) => h.validate(T, D, I);
      }
      Qt({
        path: y,
        value: O,
        errors: f,
        endEarly: b,
        tests: _
      }, a);
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.innerType = this.innerType, r;
  }
  concat(t) {
    let r = super.concat(t);
    return r.innerType = this.innerType, t.innerType && (r.innerType = r.innerType ? (
      // @ts-expect-error Lazy doesn't have concat()
      r.innerType.concat(t.innerType)
    ) : t.innerType), r;
  }
  of(t) {
    let r = this.clone();
    if (!ut(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + at(t));
    return r.innerType = t, r;
  }
  length(t, r = Gt.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(a) {
        return Y(a) || a.length === this.resolve(t);
      }
    });
  }
  min(t, r) {
    return r = r || Gt.min, this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      // FIXME(ts): Array<typeof T>
      test(a) {
        return Y(a) || a.length >= this.resolve(t);
      }
    });
  }
  max(t, r) {
    return r = r || Gt.max, this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(a) {
        return Y(a) || a.length <= this.resolve(t);
      }
    });
  }
  ensure() {
    return this.default(() => []).transform((t, r) => this._typeCheck(t) ? t : r == null ? [] : [].concat(r));
  }
  compact(t) {
    let r = t ? (a, i, l) => !t(a, i, l) : (a) => !!a;
    return this.transform((a) => a != null ? a.filter(r) : a);
  }
  describe() {
    let t = super.describe();
    return this.innerType && (t.innerType = this.innerType.describe()), t;
  }
  nullable(t = !0) {
    return super.nullable(t);
  }
  defined() {
    return super.defined();
  }
  required(t) {
    return super.required(t);
  }
}
ua.prototype = Mn.prototype;
function tc(o) {
  return new rc(o);
}
class rc {
  constructor(t) {
    this.type = "lazy", this.__isYupSchema__ = !0, this._resolve = (r, a = {}) => {
      let i = this.builder(r, a);
      if (!ut(i)) throw new TypeError("lazy() functions must return a valid schema");
      return i.resolve(a);
    }, this.builder = t;
  }
  resolve(t) {
    return this._resolve(t.value, t);
  }
  cast(t, r) {
    return this._resolve(t, r).cast(t, r);
  }
  validate(t, r, a) {
    return this._resolve(t, r).validate(t, r, a);
  }
  validateSync(t, r) {
    return this._resolve(t, r).validateSync(t, r);
  }
  validateAt(t, r, a) {
    return this._resolve(r, a).validateAt(t, r, a);
  }
  validateSyncAt(t, r, a) {
    return this._resolve(r, a).validateSyncAt(t, r, a);
  }
  describe() {
    return null;
  }
  isValid(t, r) {
    return this._resolve(t, r).isValid(t, r);
  }
  isValidSync(t, r) {
    return this._resolve(t, r).isValidSync(t, r);
  }
}
function nc(o) {
  Object.keys(o).forEach((t) => {
    Object.keys(o[t]).forEach((r) => {
      el[t][r] = o[t][r];
    });
  });
}
function sc(o, t, r) {
  if (!o || !ut(o.prototype)) throw new TypeError("You must provide a yup schema constructor function");
  if (typeof t != "string") throw new TypeError("A Method name must be provided");
  if (typeof r != "function") throw new TypeError("Method function must be provided");
  o.prototype[t] = r;
}
const ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArraySchema: Mn,
  BaseSchema: Q,
  BooleanSchema: kn,
  DateSchema: sr,
  MixedSchema: xn,
  NumberSchema: En,
  ObjectSchema: Dn,
  StringSchema: Sn,
  ValidationError: te,
  addMethod: sc,
  array: ua,
  bool: _n,
  boolean: _n,
  date: Fn,
  isSchema: ut,
  lazy: tc,
  mixed: ea,
  number: ra,
  object: aa,
  reach: yl,
  ref: dl,
  setLocale: nc,
  string: ta
}, Symbol.toStringTag, { value: "Module" })), ac = /* @__PURE__ */ ho(ic);
var Yt = {}, Vi;
function uc() {
  if (Vi) return Yt;
  Vi = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const o = oa();
  return Yt.default = () => {
    (0, o.registerOptionPreset)("npm-node-cron", {
      // https://github.com/kelektiv/node-cron
      presetId: "npm-node-cron",
      useSeconds: !0,
      useYears: !1,
      useAliases: !0,
      useBlankDay: !1,
      allowOnlyOneBlankDayField: !1,
      mustHaveBlankDayField: !1,
      useLastDayOfMonth: !1,
      useLastDayOfWeek: !1,
      useNearestWeekday: !1,
      useNthWeekdayOfMonth: !1,
      seconds: {
        minValue: 0,
        maxValue: 59
      },
      minutes: {
        minValue: 0,
        maxValue: 59
      },
      hours: {
        minValue: 0,
        maxValue: 23
      },
      daysOfMonth: {
        minValue: 1,
        maxValue: 31
      },
      months: {
        minValue: 0,
        maxValue: 11
      },
      daysOfWeek: {
        minValue: 0,
        maxValue: 6
      },
      years: {
        minValue: 1970,
        maxValue: 2099
      }
    }), (0, o.registerOptionPreset)("aws-cloud-watch", {
      // https://docs.aws.amazon.com/de_de/AmazonCloudWatch/latest/events/ScheduledEvents.html
      presetId: "aws-cloud-watch",
      useSeconds: !1,
      useYears: !0,
      useAliases: !0,
      useBlankDay: !0,
      allowOnlyOneBlankDayField: !0,
      mustHaveBlankDayField: !0,
      useLastDayOfMonth: !0,
      useLastDayOfWeek: !0,
      useNearestWeekday: !0,
      useNthWeekdayOfMonth: !0,
      seconds: {
        minValue: 0,
        maxValue: 59
      },
      minutes: {
        minValue: 0,
        maxValue: 59
      },
      hours: {
        minValue: 0,
        maxValue: 23
      },
      daysOfMonth: {
        minValue: 1,
        maxValue: 31
      },
      months: {
        minValue: 1,
        maxValue: 12
      },
      daysOfWeek: {
        minValue: 1,
        maxValue: 7
      },
      years: {
        minValue: 1970,
        maxValue: 2199
      }
    }), (0, o.registerOptionPreset)("npm-cron-schedule", {
      // https://github.com/P4sca1/cron-schedule
      presetId: "npm-cron-schedule",
      useSeconds: !0,
      useYears: !1,
      useAliases: !0,
      useBlankDay: !1,
      allowOnlyOneBlankDayField: !1,
      mustHaveBlankDayField: !1,
      useLastDayOfMonth: !1,
      useLastDayOfWeek: !1,
      useNearestWeekday: !1,
      useNthWeekdayOfMonth: !1,
      seconds: {
        minValue: 0,
        maxValue: 59
      },
      minutes: {
        minValue: 0,
        maxValue: 59
      },
      hours: {
        minValue: 0,
        maxValue: 23
      },
      daysOfMonth: {
        minValue: 1,
        maxValue: 31
      },
      months: {
        minValue: 1,
        maxValue: 12
      },
      daysOfWeek: {
        minValue: 0,
        maxValue: 7
      },
      years: {
        minValue: 1970,
        maxValue: 2099
      }
    });
  }, Yt;
}
var Ii;
function oa() {
  if (Ii) return K;
  Ii = 1;
  var o = K && K.__createBinding || (Object.create ? (function(O, _, S, T) {
    T === void 0 && (T = S);
    var k = Object.getOwnPropertyDescriptor(_, S);
    (!k || ("get" in k ? !_.__esModule : k.writable || k.configurable)) && (k = { enumerable: !0, get: function() {
      return _[S];
    } }), Object.defineProperty(O, T, k);
  }) : (function(O, _, S, T) {
    T === void 0 && (T = S), O[T] = _[S];
  })), t = K && K.__setModuleDefault || (Object.create ? (function(O, _) {
    Object.defineProperty(O, "default", { enumerable: !0, value: _ });
  }) : function(O, _) {
    O.default = _;
  }), r = K && K.__importStar || function(O) {
    if (O && O.__esModule) return O;
    var _ = {};
    if (O != null) for (var S in O) S !== "default" && Object.prototype.hasOwnProperty.call(O, S) && o(_, O, S);
    return t(_, O), _;
  }, a = K && K.__importDefault || function(O) {
    return O && O.__esModule ? O : { default: O };
  };
  Object.defineProperty(K, "__esModule", { value: !0 }), K.validateOptions = K.registerOptionPreset = K.getOptionPresets = K.getOptionPreset = void 0;
  const i = r(ac), l = pe(), f = a(uc()), y = {
    // http://crontab.org/
    default: {
      presetId: "default",
      useSeconds: !1,
      useYears: !1,
      useAliases: !1,
      useBlankDay: !1,
      allowOnlyOneBlankDayField: !1,
      mustHaveBlankDayField: !1,
      useLastDayOfMonth: !1,
      useLastDayOfWeek: !1,
      useNearestWeekday: !1,
      useNthWeekdayOfMonth: !1,
      seconds: {
        minValue: 0,
        maxValue: 59
      },
      minutes: {
        minValue: 0,
        maxValue: 59
      },
      hours: {
        minValue: 0,
        maxValue: 23
      },
      daysOfMonth: {
        minValue: 0,
        maxValue: 31
      },
      months: {
        minValue: 0,
        maxValue: 12
      },
      daysOfWeek: {
        minValue: 0,
        maxValue: 7
      },
      years: {
        minValue: 1970,
        maxValue: 2099
      }
    }
  }, h = i.object({
    presetId: i.string().required(),
    useSeconds: i.boolean().required(),
    useYears: i.boolean().required(),
    useAliases: i.boolean(),
    useBlankDay: i.boolean().required(),
    allowOnlyOneBlankDayField: i.boolean().required(),
    mustHaveBlankDayField: i.boolean(),
    useLastDayOfMonth: i.boolean(),
    useLastDayOfWeek: i.boolean(),
    useNearestWeekday: i.boolean(),
    useNthWeekdayOfMonth: i.boolean(),
    seconds: i.object({
      minValue: i.number().min(0).required(),
      maxValue: i.number().min(0).required(),
      lowerLimit: i.number().min(0),
      upperLimit: i.number().min(0)
    }).required(),
    minutes: i.object({
      minValue: i.number().min(0).required(),
      maxValue: i.number().min(0).required(),
      lowerLimit: i.number().min(0),
      upperLimit: i.number().min(0)
    }).required(),
    hours: i.object({
      minValue: i.number().min(0).required(),
      maxValue: i.number().min(0).required(),
      lowerLimit: i.number().min(0),
      upperLimit: i.number().min(0)
    }).required(),
    daysOfMonth: i.object({
      minValue: i.number().min(0).required(),
      maxValue: i.number().min(0).required(),
      lowerLimit: i.number().min(0),
      upperLimit: i.number().min(0)
    }).required(),
    months: i.object({
      minValue: i.number().min(0).required(),
      maxValue: i.number().min(0).required(),
      lowerLimit: i.number().min(0),
      upperLimit: i.number().min(0)
    }).required(),
    daysOfWeek: i.object({
      minValue: i.number().min(0).required(),
      maxValue: i.number().min(0).required(),
      lowerLimit: i.number().min(0),
      upperLimit: i.number().min(0)
    }).required(),
    years: i.object({
      minValue: i.number().min(0).required(),
      maxValue: i.number().min(0).required(),
      lowerLimit: i.number().min(0),
      upperLimit: i.number().min(0)
    }).required()
  }).required(), b = (O) => y[O] ? (0, l.valid)(y[O]) : (0, l.err)(`Option preset '${O}' not found.`);
  K.getOptionPreset = b;
  const m = () => y;
  K.getOptionPresets = m;
  const w = (O, _) => {
    y[O] = h.validateSync(_, {
      strict: !1,
      abortEarly: !1,
      stripUnknown: !0,
      recursive: !0
    });
  };
  K.registerOptionPreset = w;
  const x = (O) => {
    var _, S, T, k, D, N, I, C, M, q, P, B, ne, Se, Ee, Te, ge, we, ve, se;
    try {
      (0, f.default)();
      let F;
      if (O.preset)
        if (typeof O.preset == "string") {
          if (!y[O.preset])
            return (0, l.err)([`Option preset ${O.preset} does not exist.`]);
          F = y[O.preset];
        } else
          F = O.preset;
      else
        F = y.default;
      const Oe = Object.assign(Object.assign({ presetId: F.presetId, preset: F }, {
        useSeconds: F.useSeconds,
        useYears: F.useYears,
        useAliases: (_ = F.useAliases) !== null && _ !== void 0 ? _ : !1,
        useBlankDay: F.useBlankDay,
        allowOnlyOneBlankDayField: F.allowOnlyOneBlankDayField,
        mustHaveBlankDayField: (S = F.mustHaveBlankDayField) !== null && S !== void 0 ? S : !1,
        useLastDayOfMonth: (T = F.useLastDayOfMonth) !== null && T !== void 0 ? T : !1,
        useLastDayOfWeek: (k = F.useLastDayOfWeek) !== null && k !== void 0 ? k : !1,
        useNearestWeekday: (D = F.useNearestWeekday) !== null && D !== void 0 ? D : !1,
        useNthWeekdayOfMonth: (N = F.useNthWeekdayOfMonth) !== null && N !== void 0 ? N : !1,
        seconds: {
          lowerLimit: (I = F.seconds.lowerLimit) !== null && I !== void 0 ? I : F.seconds.minValue,
          upperLimit: (C = F.seconds.upperLimit) !== null && C !== void 0 ? C : F.seconds.maxValue
        },
        minutes: {
          lowerLimit: (M = F.minutes.lowerLimit) !== null && M !== void 0 ? M : F.minutes.minValue,
          upperLimit: (q = F.minutes.upperLimit) !== null && q !== void 0 ? q : F.minutes.maxValue
        },
        hours: {
          lowerLimit: (P = F.hours.lowerLimit) !== null && P !== void 0 ? P : F.hours.minValue,
          upperLimit: (B = F.hours.upperLimit) !== null && B !== void 0 ? B : F.hours.maxValue
        },
        daysOfMonth: {
          lowerLimit: (ne = F.daysOfMonth.lowerLimit) !== null && ne !== void 0 ? ne : F.daysOfMonth.minValue,
          upperLimit: (Se = F.daysOfMonth.upperLimit) !== null && Se !== void 0 ? Se : F.daysOfMonth.maxValue
        },
        months: {
          lowerLimit: (Ee = F.months.lowerLimit) !== null && Ee !== void 0 ? Ee : F.months.minValue,
          upperLimit: (Te = F.months.upperLimit) !== null && Te !== void 0 ? Te : F.months.maxValue
        },
        daysOfWeek: {
          lowerLimit: (ge = F.daysOfWeek.lowerLimit) !== null && ge !== void 0 ? ge : F.daysOfWeek.minValue,
          upperLimit: (we = F.daysOfWeek.upperLimit) !== null && we !== void 0 ? we : F.daysOfWeek.maxValue
        },
        years: {
          lowerLimit: (ve = F.years.lowerLimit) !== null && ve !== void 0 ? ve : F.years.minValue,
          upperLimit: (se = F.years.upperLimit) !== null && se !== void 0 ? se : F.years.maxValue
        }
      }), O.override), ot = i.object({
        presetId: i.string().required(),
        preset: h.required(),
        useSeconds: i.boolean().required(),
        useYears: i.boolean().required(),
        useAliases: i.boolean(),
        useBlankDay: i.boolean().required(),
        allowOnlyOneBlankDayField: i.boolean().required(),
        mustHaveBlankDayField: i.boolean(),
        useLastDayOfMonth: i.boolean(),
        useLastDayOfWeek: i.boolean(),
        useNearestWeekday: i.boolean(),
        useNthWeekdayOfMonth: i.boolean(),
        seconds: i.object({
          lowerLimit: i.number().min(F.seconds.minValue).max(F.seconds.maxValue),
          upperLimit: i.number().min(F.seconds.minValue).max(F.seconds.maxValue)
        }).required(),
        minutes: i.object({
          lowerLimit: i.number().min(F.minutes.minValue).max(F.minutes.maxValue),
          upperLimit: i.number().min(F.minutes.minValue).max(F.minutes.maxValue)
        }).required(),
        hours: i.object({
          lowerLimit: i.number().min(F.hours.minValue).max(F.hours.maxValue),
          upperLimit: i.number().min(F.hours.minValue).max(F.hours.maxValue)
        }).required(),
        daysOfMonth: i.object({
          lowerLimit: i.number().min(F.daysOfMonth.minValue).max(F.daysOfMonth.maxValue),
          upperLimit: i.number().min(F.daysOfMonth.minValue).max(F.daysOfMonth.maxValue)
        }).required(),
        months: i.object({
          lowerLimit: i.number().min(F.months.minValue).max(F.months.maxValue),
          upperLimit: i.number().min(F.months.minValue).max(F.months.maxValue)
        }).required(),
        daysOfWeek: i.object({
          lowerLimit: i.number().min(F.daysOfWeek.minValue).max(F.daysOfWeek.maxValue),
          upperLimit: i.number().min(F.daysOfWeek.minValue).max(F.daysOfWeek.maxValue)
        }).required(),
        years: i.object({
          lowerLimit: i.number().min(F.years.minValue).max(F.years.maxValue),
          upperLimit: i.number().min(F.years.minValue).max(F.years.maxValue)
        }).required()
      }).required().validateSync(Oe, {
        strict: !1,
        abortEarly: !1,
        stripUnknown: !0,
        recursive: !0
      });
      return (0, l.valid)(ot);
    } catch (F) {
      return (0, l.err)(F.errors);
    }
  };
  return K.validateOptions = x, K;
}
var Li = xt.exports, $i;
function ke() {
  return $i || ($i = 1, (function(o, t) {
    var r = Li && Li.__importDefault || function(_) {
      return _ && _.__esModule ? _ : { default: _ };
    };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const a = pe(), i = r(Uo()), l = r(Po()), f = r(zo()), y = r(Zo()), h = r(jo()), b = r(Ho()), m = r(Yo()), w = oa(), x = (_, S) => {
      const T = _.trim().split(" ");
      if (S.useSeconds && S.useYears && T.length !== 7)
        return (0, a.err)(`Expected 7 values, but got ${T.length}.`);
      if ((S.useSeconds && !S.useYears || S.useYears && !S.useSeconds) && T.length !== 6)
        return (0, a.err)(`Expected 6 values, but got ${T.length}.`);
      if (!S.useSeconds && !S.useYears && T.length !== 5)
        return (0, a.err)(`Expected 5 values, but got ${T.length}.`);
      const k = {
        seconds: S.useSeconds ? T[0] : void 0,
        minutes: T[S.useSeconds ? 1 : 0],
        hours: T[S.useSeconds ? 2 : 1],
        daysOfMonth: T[S.useSeconds ? 3 : 2],
        months: T[S.useSeconds ? 4 : 3],
        daysOfWeek: T[S.useSeconds ? 5 : 4],
        years: S.useYears ? T[S.useSeconds ? 6 : 5] : void 0
      };
      return (0, a.valid)(k);
    }, O = (_, S = {}) => {
      const T = (0, w.validateOptions)(S);
      if (T.isError())
        return T;
      const k = T.getValue(), D = x(_, k);
      if (D.isError())
        return (0, a.err)([`${D.getError()} (Input cron: '${_}')`]);
      const N = D.getValue(), I = [];
      if (k.useSeconds && I.push((0, i.default)(N, k)), I.push((0, l.default)(N, k)), I.push((0, f.default)(N, k)), I.push((0, y.default)(N, k)), I.push((0, h.default)(N, k)), I.push((0, b.default)(N, k)), k.useYears && I.push((0, m.default)(N, k)), I.every((M) => M.isValid()))
        return (0, a.valid)(N);
      const C = [];
      return I.forEach((M) => {
        M.isError() && M.getError().forEach((q) => {
          C.push(q);
        });
      }), C.forEach((M, q) => {
        C[q] = `${M} (Input cron: '${_}')`;
      }), (0, a.err)(C);
    };
    t.default = O, o.exports = O, o.exports.default = O;
  })(xt, xt.exports)), xt.exports;
}
var oc = ke();
const lc = /* @__PURE__ */ Ve(oc);
var re = {}, Wi;
function cc() {
  if (Wi) return re;
  Wi = 1, Object.defineProperty(re, "__esModule", { value: !0 });
  class o extends Error {
  }
  class t extends o {
    constructor(e) {
      super(`Invalid DateTime: ${e.toMessage()}`);
    }
  }
  class r extends o {
    constructor(e) {
      super(`Invalid Interval: ${e.toMessage()}`);
    }
  }
  class a extends o {
    constructor(e) {
      super(`Invalid Duration: ${e.toMessage()}`);
    }
  }
  class i extends o {
  }
  class l extends o {
    constructor(e) {
      super(`Invalid unit ${e}`);
    }
  }
  class f extends o {
  }
  class y extends o {
    constructor() {
      super("Zone is an abstract class");
    }
  }
  const h = "numeric", b = "short", m = "long", w = {
    year: h,
    month: h,
    day: h
  }, x = {
    year: h,
    month: b,
    day: h
  }, O = {
    year: h,
    month: b,
    day: h,
    weekday: b
  }, _ = {
    year: h,
    month: m,
    day: h
  }, S = {
    year: h,
    month: m,
    day: h,
    weekday: m
  }, T = {
    hour: h,
    minute: h
  }, k = {
    hour: h,
    minute: h,
    second: h
  }, D = {
    hour: h,
    minute: h,
    second: h,
    timeZoneName: b
  }, N = {
    hour: h,
    minute: h,
    second: h,
    timeZoneName: m
  }, I = {
    hour: h,
    minute: h,
    hourCycle: "h23"
  }, C = {
    hour: h,
    minute: h,
    second: h,
    hourCycle: "h23"
  }, M = {
    hour: h,
    minute: h,
    second: h,
    hourCycle: "h23",
    timeZoneName: b
  }, q = {
    hour: h,
    minute: h,
    second: h,
    hourCycle: "h23",
    timeZoneName: m
  }, P = {
    year: h,
    month: h,
    day: h,
    hour: h,
    minute: h
  }, B = {
    year: h,
    month: h,
    day: h,
    hour: h,
    minute: h,
    second: h
  }, ne = {
    year: h,
    month: b,
    day: h,
    hour: h,
    minute: h
  }, Se = {
    year: h,
    month: b,
    day: h,
    hour: h,
    minute: h,
    second: h
  }, Ee = {
    year: h,
    month: b,
    day: h,
    weekday: b,
    hour: h,
    minute: h
  }, Te = {
    year: h,
    month: m,
    day: h,
    hour: h,
    minute: h,
    timeZoneName: b
  }, ge = {
    year: h,
    month: m,
    day: h,
    hour: h,
    minute: h,
    second: h,
    timeZoneName: b
  }, we = {
    year: h,
    month: m,
    day: h,
    weekday: m,
    hour: h,
    minute: h,
    timeZoneName: m
  }, ve = {
    year: h,
    month: m,
    day: h,
    weekday: m,
    hour: h,
    minute: h,
    second: h,
    timeZoneName: m
  };
  class se {
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get type() {
      throw new y();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
    get name() {
      throw new y();
    }
    /**
     * The IANA name of this zone.
     * Defaults to `name` if not overwritten by a subclass.
     * @abstract
     * @type {string}
     */
    get ianaName() {
      return this.name;
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
    get isUniversal() {
      throw new y();
    }
    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
    offsetName(e, n) {
      throw new y();
    }
    /**
     * Returns the offset's value as a string
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(e, n) {
      throw new y();
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    offset(e) {
      throw new y();
    }
    /**
     * Return whether this Zone is equal to another zone
     * @abstract
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(e) {
      throw new y();
    }
    /**
     * Return whether this Zone is valid.
     * @abstract
     * @type {boolean}
     */
    get isValid() {
      throw new y();
    }
  }
  let F = null;
  class Oe extends se {
    /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */
    static get instance() {
      return F === null && (F = new Oe()), F;
    }
    /** @override **/
    get type() {
      return "system";
    }
    /** @override **/
    get name() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    /** @override **/
    get isUniversal() {
      return !1;
    }
    /** @override **/
    offsetName(e, {
      format: n,
      locale: u
    }) {
      return ns(e, n, u);
    }
    /** @override **/
    formatOffset(e, n) {
      return ht(this.offset(e), n);
    }
    /** @override **/
    offset(e) {
      return -new Date(e).getTimezoneOffset();
    }
    /** @override **/
    equals(e) {
      return e.type === "system";
    }
    /** @override **/
    get isValid() {
      return !0;
    }
  }
  const qe = /* @__PURE__ */ new Map();
  function ot(s) {
    let e = qe.get(s);
    return e === void 0 && (e = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: s,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short"
    }), qe.set(s, e)), e;
  }
  const ir = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
  };
  function ar(s, e) {
    const n = s.format(e).replace(/\u200E/g, ""), u = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, c, d, p, g, v, E, V] = u;
    return [p, c, d, g, v, E, V];
  }
  function ur(s, e) {
    const n = s.formatToParts(e), u = [];
    for (let c = 0; c < n.length; c++) {
      const {
        type: d,
        value: p
      } = n[c], g = ir[d];
      d === "era" ? u[g] = p : $(g) || (u[g] = parseInt(p, 10));
    }
    return u;
  }
  const lt = /* @__PURE__ */ new Map();
  class me extends se {
    /**
     * @param {string} name - Zone name
     * @return {IANAZone}
     */
    static create(e) {
      let n = lt.get(e);
      return n === void 0 && lt.set(e, n = new me(e)), n;
    }
    /**
     * Reset local caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCache() {
      lt.clear(), qe.clear();
    }
    /**
     * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
     * @param {string} s - The string to check validity on
     * @example IANAZone.isValidSpecifier("America/New_York") //=> true
     * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
     * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
     * @return {boolean}
     */
    static isValidSpecifier(e) {
      return this.isValidZone(e);
    }
    /**
     * Returns whether the provided string identifies a real zone
     * @param {string} zone - The string to check
     * @example IANAZone.isValidZone("America/New_York") //=> true
     * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
     * @example IANAZone.isValidZone("Sport~~blorp") //=> false
     * @return {boolean}
     */
    static isValidZone(e) {
      if (!e)
        return !1;
      try {
        return new Intl.DateTimeFormat("en-US", {
          timeZone: e
        }).format(), !0;
      } catch {
        return !1;
      }
    }
    constructor(e) {
      super(), this.zoneName = e, this.valid = me.isValidZone(e);
    }
    /**
     * The type of zone. `iana` for all instances of `IANAZone`.
     * @override
     * @type {string}
     */
    get type() {
      return "iana";
    }
    /**
     * The name of this zone (i.e. the IANA zone name).
     * @override
     * @type {string}
     */
    get name() {
      return this.zoneName;
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year:
     * Always returns false for all IANA zones.
     * @override
     * @type {boolean}
     */
    get isUniversal() {
      return !1;
    }
    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
    offsetName(e, {
      format: n,
      locale: u
    }) {
      return ns(e, n, u, this.name);
    }
    /**
     * Returns the offset's value as a string
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(e, n) {
      return ht(this.offset(e), n);
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @override
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    offset(e) {
      if (!this.valid) return NaN;
      const n = new Date(e);
      if (isNaN(n)) return NaN;
      const u = ot(this.name);
      let [c, d, p, g, v, E, V] = u.formatToParts ? ur(u, n) : ar(u, n);
      g === "BC" && (c = -Math.abs(c) + 1);
      const Z = Dt({
        year: c,
        month: d,
        day: p,
        hour: v === 24 ? 0 : v,
        minute: E,
        second: V,
        millisecond: 0
      });
      let L = +n;
      const J = L % 1e3;
      return L -= J >= 0 ? J : 1e3 + J, (Z - L) / (60 * 1e3);
    }
    /**
     * Return whether this Zone is equal to another zone
     * @override
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(e) {
      return e.type === "iana" && e.name === this.name;
    }
    /**
     * Return whether this Zone is valid.
     * @override
     * @type {boolean}
     */
    get isValid() {
      return this.valid;
    }
  }
  let Cn = {};
  function ga(s, e = {}) {
    const n = JSON.stringify([s, e]);
    let u = Cn[n];
    return u || (u = new Intl.ListFormat(s, e), Cn[n] = u), u;
  }
  const or = /* @__PURE__ */ new Map();
  function lr(s, e = {}) {
    const n = JSON.stringify([s, e]);
    let u = or.get(n);
    return u === void 0 && (u = new Intl.DateTimeFormat(s, e), or.set(n, u)), u;
  }
  const cr = /* @__PURE__ */ new Map();
  function wa(s, e = {}) {
    const n = JSON.stringify([s, e]);
    let u = cr.get(n);
    return u === void 0 && (u = new Intl.NumberFormat(s, e), cr.set(n, u)), u;
  }
  const fr = /* @__PURE__ */ new Map();
  function va(s, e = {}) {
    const {
      base: n,
      ...u
    } = e, c = JSON.stringify([s, u]);
    let d = fr.get(c);
    return d === void 0 && (d = new Intl.RelativeTimeFormat(s, e), fr.set(c, d)), d;
  }
  let ct = null;
  function Oa() {
    return ct || (ct = new Intl.DateTimeFormat().resolvedOptions().locale, ct);
  }
  const dr = /* @__PURE__ */ new Map();
  function Nn(s) {
    let e = dr.get(s);
    return e === void 0 && (e = new Intl.DateTimeFormat(s).resolvedOptions(), dr.set(s, e)), e;
  }
  const hr = /* @__PURE__ */ new Map();
  function ba(s) {
    let e = hr.get(s);
    if (!e) {
      const n = new Intl.Locale(s);
      e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = {
        ...Vn,
        ...e
      }), hr.set(s, e);
    }
    return e;
  }
  function _a(s) {
    const e = s.indexOf("-x-");
    e !== -1 && (s = s.substring(0, e));
    const n = s.indexOf("-u-");
    if (n === -1)
      return [s];
    {
      let u, c;
      try {
        u = lr(s).resolvedOptions(), c = s;
      } catch {
        const v = s.substring(0, n);
        u = lr(v).resolvedOptions(), c = v;
      }
      const {
        numberingSystem: d,
        calendar: p
      } = u;
      return [c, d, p];
    }
  }
  function xa(s, e, n) {
    return (n || e) && (s.includes("-u-") || (s += "-u"), n && (s += `-ca-${n}`), e && (s += `-nu-${e}`)), s;
  }
  function ka(s) {
    const e = [];
    for (let n = 1; n <= 12; n++) {
      const u = W.utc(2009, n, 1);
      e.push(s(u));
    }
    return e;
  }
  function Sa(s) {
    const e = [];
    for (let n = 1; n <= 7; n++) {
      const u = W.utc(2016, 11, 13 + n);
      e.push(s(u));
    }
    return e;
  }
  function St(s, e, n, u) {
    const c = s.listingMode();
    return c === "error" ? null : c === "en" ? n(e) : u(e);
  }
  function Ea(s) {
    return s.numberingSystem && s.numberingSystem !== "latn" ? !1 : s.numberingSystem === "latn" || !s.locale || s.locale.startsWith("en") || Nn(s.locale).numberingSystem === "latn";
  }
  class Ta {
    constructor(e, n, u) {
      this.padTo = u.padTo || 0, this.floor = u.floor || !1;
      const {
        padTo: c,
        floor: d,
        ...p
      } = u;
      if (!n || Object.keys(p).length > 0) {
        const g = {
          useGrouping: !1,
          ...u
        };
        u.padTo > 0 && (g.minimumIntegerDigits = u.padTo), this.inf = wa(e, g);
      }
    }
    format(e) {
      if (this.inf) {
        const n = this.floor ? Math.floor(e) : e;
        return this.inf.format(n);
      } else {
        const n = this.floor ? Math.floor(e) : _r(e, 3);
        return G(n, this.padTo);
      }
    }
  }
  class Fa {
    constructor(e, n, u) {
      this.opts = u, this.originalZone = void 0;
      let c;
      if (this.opts.timeZone)
        this.dt = e;
      else if (e.zone.type === "fixed") {
        const p = -1 * (e.offset / 60), g = p >= 0 ? `Etc/GMT+${p}` : `Etc/GMT${p}`;
        e.offset !== 0 && me.create(g).valid ? (c = g, this.dt = e) : (c = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({
          minutes: e.offset
        }), this.originalZone = e.zone);
      } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, c = e.zone.name) : (c = "UTC", this.dt = e.setZone("UTC").plus({
        minutes: e.offset
      }), this.originalZone = e.zone);
      const d = {
        ...this.opts
      };
      d.timeZone = d.timeZone || c, this.dtf = lr(n, d);
    }
    format() {
      return this.originalZone ? this.formatToParts().map(({
        value: e
      }) => e).join("") : this.dtf.format(this.dt.toJSDate());
    }
    formatToParts() {
      const e = this.dtf.formatToParts(this.dt.toJSDate());
      return this.originalZone ? e.map((n) => {
        if (n.type === "timeZoneName") {
          const u = this.originalZone.offsetName(this.dt.ts, {
            locale: this.dt.locale,
            format: this.opts.timeZoneName
          });
          return {
            ...n,
            value: u
          };
        } else
          return n;
      }) : e;
    }
    resolvedOptions() {
      return this.dtf.resolvedOptions();
    }
  }
  class Da {
    constructor(e, n, u) {
      this.opts = {
        style: "long",
        ...u
      }, !n && Xn() && (this.rtf = va(e, u));
    }
    format(e, n) {
      return this.rtf ? this.rtf.format(e, n) : Ja(n, e, this.opts.numeric, this.opts.style !== "long");
    }
    formatToParts(e, n) {
      return this.rtf ? this.rtf.formatToParts(e, n) : [];
    }
  }
  const Vn = {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7]
  };
  class z {
    static fromOpts(e) {
      return z.create(e.locale, e.numberingSystem, e.outputCalendar, e.weekSettings, e.defaultToEN);
    }
    static create(e, n, u, c, d = !1) {
      const p = e || j.defaultLocale, g = p || (d ? "en-US" : Oa()), v = n || j.defaultNumberingSystem, E = u || j.defaultOutputCalendar, V = Or(c) || j.defaultWeekSettings;
      return new z(g, v, E, V, p);
    }
    static resetCache() {
      ct = null, or.clear(), cr.clear(), fr.clear(), dr.clear(), hr.clear();
    }
    static fromObject({
      locale: e,
      numberingSystem: n,
      outputCalendar: u,
      weekSettings: c
    } = {}) {
      return z.create(e, n, u, c);
    }
    constructor(e, n, u, c, d) {
      const [p, g, v] = _a(e);
      this.locale = p, this.numberingSystem = n || g || null, this.outputCalendar = u || v || null, this.weekSettings = c, this.intl = xa(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
        format: {},
        standalone: {}
      }, this.monthsCache = {
        format: {},
        standalone: {}
      }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = d, this.fastNumbersCached = null;
    }
    get fastNumbers() {
      return this.fastNumbersCached == null && (this.fastNumbersCached = Ea(this)), this.fastNumbersCached;
    }
    listingMode() {
      const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
      return e && n ? "en" : "intl";
    }
    clone(e) {
      return !e || Object.getOwnPropertyNames(e).length === 0 ? this : z.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, Or(e.weekSettings) || this.weekSettings, e.defaultToEN || !1);
    }
    redefaultToEN(e = {}) {
      return this.clone({
        ...e,
        defaultToEN: !0
      });
    }
    redefaultToSystem(e = {}) {
      return this.clone({
        ...e,
        defaultToEN: !1
      });
    }
    months(e, n = !1) {
      return St(this, e, as, () => {
        const u = this.intl === "ja" || this.intl.startsWith("ja-");
        n &= !u;
        const c = n ? {
          month: e,
          day: "numeric"
        } : {
          month: e
        }, d = n ? "format" : "standalone";
        if (!this.monthsCache[d][e]) {
          const p = u ? (g) => this.dtFormatter(g, c).format() : (g) => this.extract(g, c, "month");
          this.monthsCache[d][e] = ka(p);
        }
        return this.monthsCache[d][e];
      });
    }
    weekdays(e, n = !1) {
      return St(this, e, ls, () => {
        const u = n ? {
          weekday: e,
          year: "numeric",
          month: "long",
          day: "numeric"
        } : {
          weekday: e
        }, c = n ? "format" : "standalone";
        return this.weekdaysCache[c][e] || (this.weekdaysCache[c][e] = Sa((d) => this.extract(d, u, "weekday"))), this.weekdaysCache[c][e];
      });
    }
    meridiems() {
      return St(this, void 0, () => cs, () => {
        if (!this.meridiemCache) {
          const e = {
            hour: "numeric",
            hourCycle: "h12"
          };
          this.meridiemCache = [W.utc(2016, 11, 13, 9), W.utc(2016, 11, 13, 19)].map((n) => this.extract(n, e, "dayperiod"));
        }
        return this.meridiemCache;
      });
    }
    eras(e) {
      return St(this, e, fs, () => {
        const n = {
          era: e
        };
        return this.eraCache[e] || (this.eraCache[e] = [W.utc(-40, 1, 1), W.utc(2017, 1, 1)].map((u) => this.extract(u, n, "era"))), this.eraCache[e];
      });
    }
    extract(e, n, u) {
      const c = this.dtFormatter(e, n), d = c.formatToParts(), p = d.find((g) => g.type.toLowerCase() === u);
      return p ? p.value : null;
    }
    numberFormatter(e = {}) {
      return new Ta(this.intl, e.forceSimple || this.fastNumbers, e);
    }
    dtFormatter(e, n = {}) {
      return new Fa(e, this.intl, n);
    }
    relFormatter(e = {}) {
      return new Da(this.intl, this.isEnglish(), e);
    }
    listFormatter(e = {}) {
      return ga(this.intl, e);
    }
    isEnglish() {
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || Nn(this.intl).locale.startsWith("en-us");
    }
    getWeekSettings() {
      return this.weekSettings ? this.weekSettings : es() ? ba(this.locale) : Vn;
    }
    getStartOfWeek() {
      return this.getWeekSettings().firstDay;
    }
    getMinDaysInFirstWeek() {
      return this.getWeekSettings().minimalDays;
    }
    getWeekendDays() {
      return this.getWeekSettings().weekend;
    }
    equals(e) {
      return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
    }
    toString() {
      return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
    }
  }
  let mr = null;
  class X extends se {
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    static get utcInstance() {
      return mr === null && (mr = new X(0)), mr;
    }
    /**
     * Get an instance with a specified offset
     * @param {number} offset - The offset in minutes
     * @return {FixedOffsetZone}
     */
    static instance(e) {
      return e === 0 ? X.utcInstance : new X(e);
    }
    /**
     * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
     * @param {string} s - The offset string to parse
     * @example FixedOffsetZone.parseSpecifier("UTC+6")
     * @example FixedOffsetZone.parseSpecifier("UTC+06")
     * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
     * @return {FixedOffsetZone}
     */
    static parseSpecifier(e) {
      if (e) {
        const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (n)
          return new X(Mt(n[1], n[2]));
      }
      return null;
    }
    constructor(e) {
      super(), this.fixed = e;
    }
    /**
     * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
     * @override
     * @type {string}
     */
    get type() {
      return "fixed";
    }
    /**
     * The name of this zone.
     * All fixed zones' names always start with "UTC" (plus optional offset)
     * @override
     * @type {string}
     */
    get name() {
      return this.fixed === 0 ? "UTC" : `UTC${ht(this.fixed, "narrow")}`;
    }
    /**
     * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
     *
     * @override
     * @type {string}
     */
    get ianaName() {
      return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${ht(-this.fixed, "narrow")}`;
    }
    /**
     * Returns the offset's common name at the specified timestamp.
     *
     * For fixed offset zones this equals to the zone name.
     * @override
     */
    offsetName() {
      return this.name;
    }
    /**
     * Returns the offset's value as a string
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(e, n) {
      return ht(this.fixed, n);
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year:
     * Always returns true for all fixed offset zones.
     * @override
     * @type {boolean}
     */
    get isUniversal() {
      return !0;
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     *
     * For fixed offset zones, this is constant and does not depend on a timestamp.
     * @override
     * @return {number}
     */
    offset() {
      return this.fixed;
    }
    /**
     * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
     * @override
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(e) {
      return e.type === "fixed" && e.fixed === this.fixed;
    }
    /**
     * Return whether this Zone is valid:
     * All fixed offset zones are valid.
     * @override
     * @type {boolean}
     */
    get isValid() {
      return !0;
    }
  }
  class In extends se {
    constructor(e) {
      super(), this.zoneName = e;
    }
    /** @override **/
    get type() {
      return "invalid";
    }
    /** @override **/
    get name() {
      return this.zoneName;
    }
    /** @override **/
    get isUniversal() {
      return !1;
    }
    /** @override **/
    offsetName() {
      return null;
    }
    /** @override **/
    formatOffset() {
      return "";
    }
    /** @override **/
    offset() {
      return NaN;
    }
    /** @override **/
    equals() {
      return !1;
    }
    /** @override **/
    get isValid() {
      return !1;
    }
  }
  function Fe(s, e) {
    if ($(s) || s === null)
      return e;
    if (s instanceof se)
      return s;
    if (La(s)) {
      const n = s.toLowerCase();
      return n === "default" ? e : n === "local" || n === "system" ? Oe.instance : n === "utc" || n === "gmt" ? X.utcInstance : X.parseSpecifier(n) || me.create(s);
    } else return De(s) ? X.instance(s) : typeof s == "object" && "offset" in s && typeof s.offset == "function" ? s : new In(s);
  }
  const yr = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
    latn: "\\d"
  }, Ln = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881]
  }, Ma = yr.hanidec.replace(/[\[|\]]/g, "").split("");
  function Ca(s) {
    let e = parseInt(s, 10);
    if (isNaN(e)) {
      e = "";
      for (let n = 0; n < s.length; n++) {
        const u = s.charCodeAt(n);
        if (s[n].search(yr.hanidec) !== -1)
          e += Ma.indexOf(s[n]);
        else
          for (const c in Ln) {
            const [d, p] = Ln[c];
            u >= d && u <= p && (e += u - d);
          }
      }
      return parseInt(e, 10);
    } else
      return e;
  }
  const pr = /* @__PURE__ */ new Map();
  function Na() {
    pr.clear();
  }
  function le({
    numberingSystem: s
  }, e = "") {
    const n = s || "latn";
    let u = pr.get(n);
    u === void 0 && (u = /* @__PURE__ */ new Map(), pr.set(n, u));
    let c = u.get(e);
    return c === void 0 && (c = new RegExp(`${yr[n]}${e}`), u.set(e, c)), c;
  }
  let $n = () => Date.now(), Wn = "system", An = null, qn = null, Rn = null, Un = 60, Pn, zn = null;
  class j {
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    static get now() {
      return $n;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    static set now(e) {
      $n = e;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * Use the value "system" to reset this value to the system's time zone.
     * @type {string}
     */
    static set defaultZone(e) {
      Wn = e;
    }
    /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */
    static get defaultZone() {
      return Fe(Wn, Oe.instance);
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultLocale() {
      return An;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultLocale(e) {
      An = e;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultNumberingSystem() {
      return qn;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultNumberingSystem(e) {
      qn = e;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultOutputCalendar() {
      return Rn;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultOutputCalendar(e) {
      Rn = e;
    }
    /**
     * @typedef {Object} WeekSettings
     * @property {number} firstDay
     * @property {number} minimalDays
     * @property {number[]} weekend
     */
    /**
     * @return {WeekSettings|null}
     */
    static get defaultWeekSettings() {
      return zn;
    }
    /**
     * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
     * how many days are required in the first week of a year.
     * Does not affect existing instances.
     *
     * @param {WeekSettings|null} weekSettings
     */
    static set defaultWeekSettings(e) {
      zn = Or(e);
    }
    /**
     * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
     * @type {number}
     */
    static get twoDigitCutoffYear() {
      return Un;
    }
    /**
     * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
     * @type {number}
     * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
     * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
     * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
     * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
     * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
     */
    static set twoDigitCutoffYear(e) {
      Un = e % 100;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    static get throwOnInvalid() {
      return Pn;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    static set throwOnInvalid(e) {
      Pn = e;
    }
    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCaches() {
      z.resetCache(), me.resetCache(), W.resetCache(), Na();
    }
  }
  class ce {
    constructor(e, n) {
      this.reason = e, this.explanation = n;
    }
    toMessage() {
      return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
    }
  }
  const Zn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], jn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  function ie(s, e) {
    return new ce("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${s}, which is invalid`);
  }
  function gr(s, e, n) {
    const u = new Date(Date.UTC(s, e - 1, n));
    s < 100 && s >= 0 && u.setUTCFullYear(u.getUTCFullYear() - 1900);
    const c = u.getUTCDay();
    return c === 0 ? 7 : c;
  }
  function Hn(s, e, n) {
    return n + (ft(s) ? jn : Zn)[e - 1];
  }
  function Yn(s, e) {
    const n = ft(s) ? jn : Zn, u = n.findIndex((d) => d < e), c = e - n[u];
    return {
      month: u + 1,
      day: c
    };
  }
  function wr(s, e) {
    return (s - e + 7) % 7 + 1;
  }
  function Et(s, e = 4, n = 1) {
    const {
      year: u,
      month: c,
      day: d
    } = s, p = Hn(u, c, d), g = wr(gr(u, c, d), n);
    let v = Math.floor((p - g + 14 - e) / 7), E;
    return v < 1 ? (E = u - 1, v = dt(E, e, n)) : v > dt(u, e, n) ? (E = u + 1, v = 1) : E = u, {
      weekYear: E,
      weekNumber: v,
      weekday: g,
      ...Nt(s)
    };
  }
  function Bn(s, e = 4, n = 1) {
    const {
      weekYear: u,
      weekNumber: c,
      weekday: d
    } = s, p = wr(gr(u, 1, e), n), g = Ue(u);
    let v = c * 7 + d - p - 7 + e, E;
    v < 1 ? (E = u - 1, v += Ue(E)) : v > g ? (E = u + 1, v -= Ue(u)) : E = u;
    const {
      month: V,
      day: A
    } = Yn(E, v);
    return {
      year: E,
      month: V,
      day: A,
      ...Nt(s)
    };
  }
  function vr(s) {
    const {
      year: e,
      month: n,
      day: u
    } = s, c = Hn(e, n, u);
    return {
      year: e,
      ordinal: c,
      ...Nt(s)
    };
  }
  function Gn(s) {
    const {
      year: e,
      ordinal: n
    } = s, {
      month: u,
      day: c
    } = Yn(e, n);
    return {
      year: e,
      month: u,
      day: c,
      ...Nt(s)
    };
  }
  function Jn(s, e) {
    if (!$(s.localWeekday) || !$(s.localWeekNumber) || !$(s.localWeekYear)) {
      if (!$(s.weekday) || !$(s.weekNumber) || !$(s.weekYear))
        throw new i("Cannot mix locale-based week fields with ISO-based week fields");
      return $(s.localWeekday) || (s.weekday = s.localWeekday), $(s.localWeekNumber) || (s.weekNumber = s.localWeekNumber), $(s.localWeekYear) || (s.weekYear = s.localWeekYear), delete s.localWeekday, delete s.localWeekNumber, delete s.localWeekYear, {
        minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
        startOfWeek: e.getStartOfWeek()
      };
    } else
      return {
        minDaysInFirstWeek: 4,
        startOfWeek: 1
      };
  }
  function Va(s, e = 4, n = 1) {
    const u = Tt(s.weekYear), c = ae(s.weekNumber, 1, dt(s.weekYear, e, n)), d = ae(s.weekday, 1, 7);
    return u ? c ? d ? !1 : ie("weekday", s.weekday) : ie("week", s.weekNumber) : ie("weekYear", s.weekYear);
  }
  function Ia(s) {
    const e = Tt(s.year), n = ae(s.ordinal, 1, Ue(s.year));
    return e ? n ? !1 : ie("ordinal", s.ordinal) : ie("year", s.year);
  }
  function Kn(s) {
    const e = Tt(s.year), n = ae(s.month, 1, 12), u = ae(s.day, 1, Ft(s.year, s.month));
    return e ? n ? u ? !1 : ie("day", s.day) : ie("month", s.month) : ie("year", s.year);
  }
  function Qn(s) {
    const {
      hour: e,
      minute: n,
      second: u,
      millisecond: c
    } = s, d = ae(e, 0, 23) || e === 24 && n === 0 && u === 0 && c === 0, p = ae(n, 0, 59), g = ae(u, 0, 59), v = ae(c, 0, 999);
    return d ? p ? g ? v ? !1 : ie("millisecond", c) : ie("second", u) : ie("minute", n) : ie("hour", e);
  }
  function $(s) {
    return typeof s > "u";
  }
  function De(s) {
    return typeof s == "number";
  }
  function Tt(s) {
    return typeof s == "number" && s % 1 === 0;
  }
  function La(s) {
    return typeof s == "string";
  }
  function $a(s) {
    return Object.prototype.toString.call(s) === "[object Date]";
  }
  function Xn() {
    try {
      return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
    } catch {
      return !1;
    }
  }
  function es() {
    try {
      return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
    } catch {
      return !1;
    }
  }
  function Wa(s) {
    return Array.isArray(s) ? s : [s];
  }
  function ts(s, e, n) {
    if (s.length !== 0)
      return s.reduce((u, c) => {
        const d = [e(c), c];
        return u && n(u[0], d[0]) === u[0] ? u : d;
      }, null)[1];
  }
  function Aa(s, e) {
    return e.reduce((n, u) => (n[u] = s[u], n), {});
  }
  function Re(s, e) {
    return Object.prototype.hasOwnProperty.call(s, e);
  }
  function Or(s) {
    if (s == null)
      return null;
    if (typeof s != "object")
      throw new f("Week settings must be an object");
    if (!ae(s.firstDay, 1, 7) || !ae(s.minimalDays, 1, 7) || !Array.isArray(s.weekend) || s.weekend.some((e) => !ae(e, 1, 7)))
      throw new f("Invalid week settings");
    return {
      firstDay: s.firstDay,
      minimalDays: s.minimalDays,
      weekend: Array.from(s.weekend)
    };
  }
  function ae(s, e, n) {
    return Tt(s) && s >= e && s <= n;
  }
  function qa(s, e) {
    return s - e * Math.floor(s / e);
  }
  function G(s, e = 2) {
    const n = s < 0;
    let u;
    return n ? u = "-" + ("" + -s).padStart(e, "0") : u = ("" + s).padStart(e, "0"), u;
  }
  function Me(s) {
    if (!($(s) || s === null || s === ""))
      return parseInt(s, 10);
  }
  function Ie(s) {
    if (!($(s) || s === null || s === ""))
      return parseFloat(s);
  }
  function br(s) {
    if (!($(s) || s === null || s === "")) {
      const e = parseFloat("0." + s) * 1e3;
      return Math.floor(e);
    }
  }
  function _r(s, e, n = "round") {
    const u = 10 ** e;
    switch (n) {
      case "expand":
        return s > 0 ? Math.ceil(s * u) / u : Math.floor(s * u) / u;
      case "trunc":
        return Math.trunc(s * u) / u;
      case "round":
        return Math.round(s * u) / u;
      case "floor":
        return Math.floor(s * u) / u;
      case "ceil":
        return Math.ceil(s * u) / u;
      default:
        throw new RangeError(`Value rounding ${n} is out of range`);
    }
  }
  function ft(s) {
    return s % 4 === 0 && (s % 100 !== 0 || s % 400 === 0);
  }
  function Ue(s) {
    return ft(s) ? 366 : 365;
  }
  function Ft(s, e) {
    const n = qa(e - 1, 12) + 1, u = s + (e - n) / 12;
    return n === 2 ? ft(u) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
  }
  function Dt(s) {
    let e = Date.UTC(s.year, s.month - 1, s.day, s.hour, s.minute, s.second, s.millisecond);
    return s.year < 100 && s.year >= 0 && (e = new Date(e), e.setUTCFullYear(s.year, s.month - 1, s.day)), +e;
  }
  function rs(s, e, n) {
    return -wr(gr(s, 1, e), n) + e - 1;
  }
  function dt(s, e = 4, n = 1) {
    const u = rs(s, e, n), c = rs(s + 1, e, n);
    return (Ue(s) - u + c) / 7;
  }
  function xr(s) {
    return s > 99 ? s : s > j.twoDigitCutoffYear ? 1900 + s : 2e3 + s;
  }
  function ns(s, e, n, u = null) {
    const c = new Date(s), d = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
    u && (d.timeZone = u);
    const p = {
      timeZoneName: e,
      ...d
    }, g = new Intl.DateTimeFormat(n, p).formatToParts(c).find((v) => v.type.toLowerCase() === "timezonename");
    return g ? g.value : null;
  }
  function Mt(s, e) {
    let n = parseInt(s, 10);
    Number.isNaN(n) && (n = 0);
    const u = parseInt(e, 10) || 0, c = n < 0 || Object.is(n, -0) ? -u : u;
    return n * 60 + c;
  }
  function ss(s) {
    const e = Number(s);
    if (typeof s == "boolean" || s === "" || !Number.isFinite(e)) throw new f(`Invalid unit value ${s}`);
    return e;
  }
  function Ct(s, e) {
    const n = {};
    for (const u in s)
      if (Re(s, u)) {
        const c = s[u];
        if (c == null) continue;
        n[e(u)] = ss(c);
      }
    return n;
  }
  function ht(s, e) {
    const n = Math.trunc(Math.abs(s / 60)), u = Math.trunc(Math.abs(s % 60)), c = s >= 0 ? "+" : "-";
    switch (e) {
      case "short":
        return `${c}${G(n, 2)}:${G(u, 2)}`;
      case "narrow":
        return `${c}${n}${u > 0 ? `:${u}` : ""}`;
      case "techie":
        return `${c}${G(n, 2)}${G(u, 2)}`;
      default:
        throw new RangeError(`Value format ${e} is out of range for property format`);
    }
  }
  function Nt(s) {
    return Aa(s, ["hour", "minute", "second", "millisecond"]);
  }
  const Ra = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], is = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Ua = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  function as(s) {
    switch (s) {
      case "narrow":
        return [...Ua];
      case "short":
        return [...is];
      case "long":
        return [...Ra];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      case "2-digit":
        return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
      default:
        return null;
    }
  }
  const us = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], os = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Pa = ["M", "T", "W", "T", "F", "S", "S"];
  function ls(s) {
    switch (s) {
      case "narrow":
        return [...Pa];
      case "short":
        return [...os];
      case "long":
        return [...us];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7"];
      default:
        return null;
    }
  }
  const cs = ["AM", "PM"], za = ["Before Christ", "Anno Domini"], Za = ["BC", "AD"], ja = ["B", "A"];
  function fs(s) {
    switch (s) {
      case "narrow":
        return [...ja];
      case "short":
        return [...Za];
      case "long":
        return [...za];
      default:
        return null;
    }
  }
  function Ha(s) {
    return cs[s.hour < 12 ? 0 : 1];
  }
  function Ya(s, e) {
    return ls(e)[s.weekday - 1];
  }
  function Ba(s, e) {
    return as(e)[s.month - 1];
  }
  function Ga(s, e) {
    return fs(e)[s.year < 0 ? 0 : 1];
  }
  function Ja(s, e, n = "always", u = !1) {
    const c = {
      years: ["year", "yr."],
      quarters: ["quarter", "qtr."],
      months: ["month", "mo."],
      weeks: ["week", "wk."],
      days: ["day", "day", "days"],
      hours: ["hour", "hr."],
      minutes: ["minute", "min."],
      seconds: ["second", "sec."]
    }, d = ["hours", "minutes", "seconds"].indexOf(s) === -1;
    if (n === "auto" && d) {
      const A = s === "days";
      switch (e) {
        case 1:
          return A ? "tomorrow" : `next ${c[s][0]}`;
        case -1:
          return A ? "yesterday" : `last ${c[s][0]}`;
        case 0:
          return A ? "today" : `this ${c[s][0]}`;
      }
    }
    const p = Object.is(e, -0) || e < 0, g = Math.abs(e), v = g === 1, E = c[s], V = u ? v ? E[1] : E[2] || E[1] : v ? c[s][0] : s;
    return p ? `${g} ${V} ago` : `in ${g} ${V}`;
  }
  function ds(s, e) {
    let n = "";
    for (const u of s)
      u.literal ? n += u.val : n += e(u.val);
    return n;
  }
  const Ka = {
    D: w,
    DD: x,
    DDD: _,
    DDDD: S,
    t: T,
    tt: k,
    ttt: D,
    tttt: N,
    T: I,
    TT: C,
    TTT: M,
    TTTT: q,
    f: P,
    ff: ne,
    fff: Te,
    ffff: we,
    F: B,
    FF: Se,
    FFF: ge,
    FFFF: ve
  };
  class ee {
    static create(e, n = {}) {
      return new ee(e, n);
    }
    static parseFormat(e) {
      let n = null, u = "", c = !1;
      const d = [];
      for (let p = 0; p < e.length; p++) {
        const g = e.charAt(p);
        g === "'" ? ((u.length > 0 || c) && d.push({
          literal: c || /^\s+$/.test(u),
          val: u === "" ? "'" : u
        }), n = null, u = "", c = !c) : c || g === n ? u += g : (u.length > 0 && d.push({
          literal: /^\s+$/.test(u),
          val: u
        }), u = g, n = g);
      }
      return u.length > 0 && d.push({
        literal: c || /^\s+$/.test(u),
        val: u
      }), d;
    }
    static macroTokenToFormatOpts(e) {
      return Ka[e];
    }
    constructor(e, n) {
      this.opts = n, this.loc = e, this.systemLoc = null;
    }
    formatWithSystemDefault(e, n) {
      return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, {
        ...this.opts,
        ...n
      }).format();
    }
    dtFormatter(e, n = {}) {
      return this.loc.dtFormatter(e, {
        ...this.opts,
        ...n
      });
    }
    formatDateTime(e, n) {
      return this.dtFormatter(e, n).format();
    }
    formatDateTimeParts(e, n) {
      return this.dtFormatter(e, n).formatToParts();
    }
    formatInterval(e, n) {
      return this.dtFormatter(e.start, n).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
    }
    resolvedOptions(e, n) {
      return this.dtFormatter(e, n).resolvedOptions();
    }
    num(e, n = 0, u = void 0) {
      if (this.opts.forceSimple)
        return G(e, n);
      const c = {
        ...this.opts
      };
      return n > 0 && (c.padTo = n), u && (c.signDisplay = u), this.loc.numberFormatter(c).format(e);
    }
    formatDateTimeFromString(e, n) {
      const u = this.loc.listingMode() === "en", c = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", d = (L, J) => this.loc.extract(e, L, J), p = (L) => e.isOffsetFixed && e.offset === 0 && L.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, L.format) : "", g = () => u ? Ha(e) : d({
        hour: "numeric",
        hourCycle: "h12"
      }, "dayperiod"), v = (L, J) => u ? Ba(e, L) : d(J ? {
        month: L
      } : {
        month: L,
        day: "numeric"
      }, "month"), E = (L, J) => u ? Ya(e, L) : d(J ? {
        weekday: L
      } : {
        weekday: L,
        month: "long",
        day: "numeric"
      }, "weekday"), V = (L) => {
        const J = ee.macroTokenToFormatOpts(L);
        return J ? this.formatWithSystemDefault(e, J) : L;
      }, A = (L) => u ? Ga(e, L) : d({
        era: L
      }, "era"), Z = (L) => {
        switch (L) {
          // ms
          case "S":
            return this.num(e.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(e.millisecond, 3);
          // seconds
          case "s":
            return this.num(e.second);
          case "ss":
            return this.num(e.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(e.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(e.millisecond / 100));
          // minutes
          case "m":
            return this.num(e.minute);
          case "mm":
            return this.num(e.minute, 2);
          // hours
          case "h":
            return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
          case "hh":
            return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
          case "H":
            return this.num(e.hour);
          case "HH":
            return this.num(e.hour, 2);
          // offset
          case "Z":
            return p({
              format: "narrow",
              allowZ: this.opts.allowZ
            });
          case "ZZ":
            return p({
              format: "short",
              allowZ: this.opts.allowZ
            });
          case "ZZZ":
            return p({
              format: "techie",
              allowZ: this.opts.allowZ
            });
          case "ZZZZ":
            return e.zone.offsetName(e.ts, {
              format: "short",
              locale: this.loc.locale
            });
          case "ZZZZZ":
            return e.zone.offsetName(e.ts, {
              format: "long",
              locale: this.loc.locale
            });
          // zone
          case "z":
            return e.zoneName;
          // meridiems
          case "a":
            return g();
          // dates
          case "d":
            return c ? d({
              day: "numeric"
            }, "day") : this.num(e.day);
          case "dd":
            return c ? d({
              day: "2-digit"
            }, "day") : this.num(e.day, 2);
          // weekdays - standalone
          case "c":
            return this.num(e.weekday);
          case "ccc":
            return E("short", !0);
          case "cccc":
            return E("long", !0);
          case "ccccc":
            return E("narrow", !0);
          // weekdays - format
          case "E":
            return this.num(e.weekday);
          case "EEE":
            return E("short", !1);
          case "EEEE":
            return E("long", !1);
          case "EEEEE":
            return E("narrow", !1);
          // months - standalone
          case "L":
            return c ? d({
              month: "numeric",
              day: "numeric"
            }, "month") : this.num(e.month);
          case "LL":
            return c ? d({
              month: "2-digit",
              day: "numeric"
            }, "month") : this.num(e.month, 2);
          case "LLL":
            return v("short", !0);
          case "LLLL":
            return v("long", !0);
          case "LLLLL":
            return v("narrow", !0);
          // months - format
          case "M":
            return c ? d({
              month: "numeric"
            }, "month") : this.num(e.month);
          case "MM":
            return c ? d({
              month: "2-digit"
            }, "month") : this.num(e.month, 2);
          case "MMM":
            return v("short", !1);
          case "MMMM":
            return v("long", !1);
          case "MMMMM":
            return v("narrow", !1);
          // years
          case "y":
            return c ? d({
              year: "numeric"
            }, "year") : this.num(e.year);
          case "yy":
            return c ? d({
              year: "2-digit"
            }, "year") : this.num(e.year.toString().slice(-2), 2);
          case "yyyy":
            return c ? d({
              year: "numeric"
            }, "year") : this.num(e.year, 4);
          case "yyyyyy":
            return c ? d({
              year: "numeric"
            }, "year") : this.num(e.year, 6);
          // eras
          case "G":
            return A("short");
          case "GG":
            return A("long");
          case "GGGGG":
            return A("narrow");
          case "kk":
            return this.num(e.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(e.weekYear, 4);
          case "W":
            return this.num(e.weekNumber);
          case "WW":
            return this.num(e.weekNumber, 2);
          case "n":
            return this.num(e.localWeekNumber);
          case "nn":
            return this.num(e.localWeekNumber, 2);
          case "ii":
            return this.num(e.localWeekYear.toString().slice(-2), 2);
          case "iiii":
            return this.num(e.localWeekYear, 4);
          case "o":
            return this.num(e.ordinal);
          case "ooo":
            return this.num(e.ordinal, 3);
          case "q":
            return this.num(e.quarter);
          case "qq":
            return this.num(e.quarter, 2);
          case "X":
            return this.num(Math.floor(e.ts / 1e3));
          case "x":
            return this.num(e.ts);
          default:
            return V(L);
        }
      };
      return ds(ee.parseFormat(n), Z);
    }
    formatDurationFromString(e, n) {
      const u = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, c = (V) => {
        switch (V[0]) {
          case "S":
            return "milliseconds";
          case "s":
            return "seconds";
          case "m":
            return "minutes";
          case "h":
            return "hours";
          case "d":
            return "days";
          case "w":
            return "weeks";
          case "M":
            return "months";
          case "y":
            return "years";
          default:
            return null;
        }
      }, d = (V, A) => (Z) => {
        const L = c(Z);
        if (L) {
          const J = A.isNegativeDuration && L !== A.largestUnit ? u : 1;
          let de;
          return this.opts.signMode === "negativeLargestOnly" && L !== A.largestUnit ? de = "never" : this.opts.signMode === "all" ? de = "always" : de = "auto", this.num(V.get(L) * J, Z.length, de);
        } else
          return Z;
      }, p = ee.parseFormat(n), g = p.reduce((V, {
        literal: A,
        val: Z
      }) => A ? V : V.concat(Z), []), v = e.shiftTo(...g.map(c).filter((V) => V)), E = {
        isNegativeDuration: v < 0,
        // this relies on "collapsed" being based on "shiftTo", which builds up the object
        // in order
        largestUnit: Object.keys(v.values)[0]
      };
      return ds(p, d(v, E));
    }
  }
  const hs = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
  function Pe(...s) {
    const e = s.reduce((n, u) => n + u.source, "");
    return RegExp(`^${e}$`);
  }
  function ze(...s) {
    return (e) => s.reduce(([n, u, c], d) => {
      const [p, g, v] = d(e, c);
      return [{
        ...n,
        ...p
      }, g || u, v];
    }, [{}, null, 1]).slice(0, 2);
  }
  function Ze(s, ...e) {
    if (s == null)
      return [null, null];
    for (const [n, u] of e) {
      const c = n.exec(s);
      if (c)
        return u(c);
    }
    return [null, null];
  }
  function ms(...s) {
    return (e, n) => {
      const u = {};
      let c;
      for (c = 0; c < s.length; c++)
        u[s[c]] = Me(e[n + c]);
      return [u, null, n + c];
    };
  }
  const ys = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, Qa = `(?:${ys.source}?(?:\\[(${hs.source})\\])?)?`, kr = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, ps = RegExp(`${kr.source}${Qa}`), Sr = RegExp(`(?:[Tt]${ps.source})?`), Xa = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, eu = /(\d{4})-?W(\d\d)(?:-?(\d))?/, tu = /(\d{4})-?(\d{3})/, ru = ms("weekYear", "weekNumber", "weekDay"), nu = ms("year", "ordinal"), su = /(\d{4})-(\d\d)-(\d\d)/, gs = RegExp(`${kr.source} ?(?:${ys.source}|(${hs.source}))?`), iu = RegExp(`(?: ${gs.source})?`);
  function je(s, e, n) {
    const u = s[e];
    return $(u) ? n : Me(u);
  }
  function au(s, e) {
    return [{
      year: je(s, e),
      month: je(s, e + 1, 1),
      day: je(s, e + 2, 1)
    }, null, e + 3];
  }
  function He(s, e) {
    return [{
      hours: je(s, e, 0),
      minutes: je(s, e + 1, 0),
      seconds: je(s, e + 2, 0),
      milliseconds: br(s[e + 3])
    }, null, e + 4];
  }
  function mt(s, e) {
    const n = !s[e] && !s[e + 1], u = Mt(s[e + 1], s[e + 2]), c = n ? null : X.instance(u);
    return [{}, c, e + 3];
  }
  function yt(s, e) {
    const n = s[e] ? me.create(s[e]) : null;
    return [{}, n, e + 1];
  }
  const uu = RegExp(`^T?${kr.source}$`), ou = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
  function lu(s) {
    const [e, n, u, c, d, p, g, v, E] = s, V = e[0] === "-", A = v && v[0] === "-", Z = (L, J = !1) => L !== void 0 && (J || L && V) ? -L : L;
    return [{
      years: Z(Ie(n)),
      months: Z(Ie(u)),
      weeks: Z(Ie(c)),
      days: Z(Ie(d)),
      hours: Z(Ie(p)),
      minutes: Z(Ie(g)),
      seconds: Z(Ie(v), v === "-0"),
      milliseconds: Z(br(E), A)
    }];
  }
  const cu = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };
  function Er(s, e, n, u, c, d, p) {
    const g = {
      year: e.length === 2 ? xr(Me(e)) : Me(e),
      month: is.indexOf(n) + 1,
      day: Me(u),
      hour: Me(c),
      minute: Me(d)
    };
    return p && (g.second = Me(p)), s && (g.weekday = s.length > 3 ? us.indexOf(s) + 1 : os.indexOf(s) + 1), g;
  }
  const fu = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
  function du(s) {
    const [, e, n, u, c, d, p, g, v, E, V, A] = s, Z = Er(e, c, u, n, d, p, g);
    let L;
    return v ? L = cu[v] : E ? L = 0 : L = Mt(V, A), [Z, new X(L)];
  }
  function hu(s) {
    return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
  }
  const mu = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, yu = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, pu = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
  function ws(s) {
    const [, e, n, u, c, d, p, g] = s;
    return [Er(e, c, u, n, d, p, g), X.utcInstance];
  }
  function gu(s) {
    const [, e, n, u, c, d, p, g] = s;
    return [Er(e, g, n, u, c, d, p), X.utcInstance];
  }
  const wu = Pe(Xa, Sr), vu = Pe(eu, Sr), Ou = Pe(tu, Sr), bu = Pe(ps), vs = ze(au, He, mt, yt), _u = ze(ru, He, mt, yt), xu = ze(nu, He, mt, yt), ku = ze(He, mt, yt);
  function Su(s) {
    return Ze(s, [wu, vs], [vu, _u], [Ou, xu], [bu, ku]);
  }
  function Eu(s) {
    return Ze(hu(s), [fu, du]);
  }
  function Tu(s) {
    return Ze(s, [mu, ws], [yu, ws], [pu, gu]);
  }
  function Fu(s) {
    return Ze(s, [ou, lu]);
  }
  const Du = ze(He);
  function Mu(s) {
    return Ze(s, [uu, Du]);
  }
  const Cu = Pe(su, iu), Nu = Pe(gs), Vu = ze(He, mt, yt);
  function Iu(s) {
    return Ze(s, [Cu, vs], [Nu, Vu]);
  }
  const Os = "Invalid Duration", bs = {
    weeks: {
      days: 7,
      hours: 168,
      minutes: 10080,
      seconds: 10080 * 60,
      milliseconds: 10080 * 60 * 1e3
    },
    days: {
      hours: 24,
      minutes: 1440,
      seconds: 1440 * 60,
      milliseconds: 1440 * 60 * 1e3
    },
    hours: {
      minutes: 60,
      seconds: 3600,
      milliseconds: 3600 * 1e3
    },
    minutes: {
      seconds: 60,
      milliseconds: 60 * 1e3
    },
    seconds: {
      milliseconds: 1e3
    }
  }, Lu = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 2184,
      minutes: 2184 * 60,
      seconds: 2184 * 60 * 60,
      milliseconds: 2184 * 60 * 60 * 1e3
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 720,
      minutes: 720 * 60,
      seconds: 720 * 60 * 60,
      milliseconds: 720 * 60 * 60 * 1e3
    },
    ...bs
  }, ue = 146097 / 400, Ye = 146097 / 4800, $u = {
    years: {
      quarters: 4,
      months: 12,
      weeks: ue / 7,
      days: ue,
      hours: ue * 24,
      minutes: ue * 24 * 60,
      seconds: ue * 24 * 60 * 60,
      milliseconds: ue * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: ue / 28,
      days: ue / 4,
      hours: ue * 24 / 4,
      minutes: ue * 24 * 60 / 4,
      seconds: ue * 24 * 60 * 60 / 4,
      milliseconds: ue * 24 * 60 * 60 * 1e3 / 4
    },
    months: {
      weeks: Ye / 7,
      days: Ye,
      hours: Ye * 24,
      minutes: Ye * 24 * 60,
      seconds: Ye * 24 * 60 * 60,
      milliseconds: Ye * 24 * 60 * 60 * 1e3
    },
    ...bs
  }, Le = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], Wu = Le.slice(0).reverse();
  function be(s, e, n = !1) {
    const u = {
      values: n ? e.values : {
        ...s.values,
        ...e.values || {}
      },
      loc: s.loc.clone(e.loc),
      conversionAccuracy: e.conversionAccuracy || s.conversionAccuracy,
      matrix: e.matrix || s.matrix
    };
    return new R(u);
  }
  function _s(s, e) {
    var n;
    let u = (n = e.milliseconds) != null ? n : 0;
    for (const c of Wu.slice(1))
      e[c] && (u += e[c] * s[c].milliseconds);
    return u;
  }
  function xs(s, e) {
    const n = _s(s, e) < 0 ? -1 : 1;
    Le.reduceRight((u, c) => {
      if ($(e[c]))
        return u;
      if (u) {
        const d = e[u] * n, p = s[c][u], g = Math.floor(d / p);
        e[c] += g * n, e[u] -= g * p * n;
      }
      return c;
    }, null), Le.reduce((u, c) => {
      if ($(e[c]))
        return u;
      if (u) {
        const d = e[u] % 1;
        e[u] -= d, e[c] += d * s[u][c];
      }
      return c;
    }, null);
  }
  function ks(s) {
    const e = {};
    for (const [n, u] of Object.entries(s))
      u !== 0 && (e[n] = u);
    return e;
  }
  class R {
    /**
     * @private
     */
    constructor(e) {
      const n = e.conversionAccuracy === "longterm" || !1;
      let u = n ? $u : Lu;
      e.matrix && (u = e.matrix), this.values = e.values, this.loc = e.loc || z.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = u, this.isLuxonDuration = !0;
    }
    /**
     * Create Duration from a number of milliseconds.
     * @param {number} count of milliseconds
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    static fromMillis(e, n) {
      return R.fromObject({
        milliseconds: e
      }, n);
    }
    /**
     * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
     * If this object is empty then a zero milliseconds duration is returned.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.years
     * @param {number} obj.quarters
     * @param {number} obj.months
     * @param {number} obj.weeks
     * @param {number} obj.days
     * @param {number} obj.hours
     * @param {number} obj.minutes
     * @param {number} obj.seconds
     * @param {number} obj.milliseconds
     * @param {Object} [opts=[]] - options for creating this Duration
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the custom conversion system to use
     * @return {Duration}
     */
    static fromObject(e, n = {}) {
      if (e == null || typeof e != "object")
        throw new f(`Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`);
      return new R({
        values: Ct(e, R.normalizeUnit),
        loc: z.fromObject(n),
        conversionAccuracy: n.conversionAccuracy,
        matrix: n.matrix
      });
    }
    /**
     * Create a Duration from DurationLike.
     *
     * @param {Object | number | Duration} durationLike
     * One of:
     * - object with keys like 'years' and 'hours'.
     * - number representing milliseconds
     * - Duration instance
     * @return {Duration}
     */
    static fromDurationLike(e) {
      if (De(e))
        return R.fromMillis(e);
      if (R.isDuration(e))
        return e;
      if (typeof e == "object")
        return R.fromObject(e);
      throw new f(`Unknown duration argument ${e} of type ${typeof e}`);
    }
    /**
     * Create a Duration from an ISO 8601 duration string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the preset conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     * @return {Duration}
     */
    static fromISO(e, n) {
      const [u] = Fu(e);
      return u ? R.fromObject(u, n) : R.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
    }
    /**
     * Create a Duration from an ISO 8601 time string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
     * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @return {Duration}
     */
    static fromISOTime(e, n) {
      const [u] = Mu(e);
      return u ? R.fromObject(u, n) : R.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
    }
    /**
     * Create an invalid Duration.
     * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Duration}
     */
    static invalid(e, n = null) {
      if (!e)
        throw new f("need to specify a reason the Duration is invalid");
      const u = e instanceof ce ? e : new ce(e, n);
      if (j.throwOnInvalid)
        throw new a(u);
      return new R({
        invalid: u
      });
    }
    /**
     * @private
     */
    static normalizeUnit(e) {
      const n = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds"
      }[e && e.toLowerCase()];
      if (!n) throw new l(e);
      return n;
    }
    /**
     * Check if an object is a Duration. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isDuration(e) {
      return e && e.isLuxonDuration || !1;
    }
    /**
     * Get  the locale of a Duration, such 'en-GB'
     * @type {string}
     */
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
     * * `S` for milliseconds
     * * `s` for seconds
     * * `m` for minutes
     * * `h` for hours
     * * `d` for days
     * * `w` for weeks
     * * `M` for months
     * * `y` for years
     * Notes:
     * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
     * * Tokens can be escaped by wrapping with single quotes.
     * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
     * @param {string} fmt - the format string
     * @param {Object} opts - options
     * @param {boolean} [opts.floor=true] - floor numerical values
     * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
     * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
     * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
     * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
     * @return {string}
     */
    toFormat(e, n = {}) {
      const u = {
        ...n,
        floor: n.round !== !1 && n.floor !== !1
      };
      return this.isValid ? ee.create(this.loc, u).formatDurationFromString(this, e) : Os;
    }
    /**
     * Returns a string representation of a Duration with all units included.
     * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
     * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
     * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
     * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
     * @example
     * ```js
     * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
     * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
     * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
     * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
     * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
     * ```
     */
    toHuman(e = {}) {
      if (!this.isValid) return Os;
      const n = e.showZeros !== !1, u = Le.map((c) => {
        const d = this.values[c];
        return $(d) || d === 0 && !n ? null : this.loc.numberFormatter({
          style: "unit",
          unitDisplay: "long",
          ...e,
          unit: c.slice(0, -1)
        }).format(d);
      }).filter((c) => c);
      return this.loc.listFormatter({
        type: "conjunction",
        style: e.listStyle || "narrow",
        ...e
      }).format(u);
    }
    /**
     * Returns a JavaScript object with this Duration's values.
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     * @return {Object}
     */
    toObject() {
      return this.isValid ? {
        ...this.values
      } : {};
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
     * @return {string}
     */
    toISO() {
      if (!this.isValid) return null;
      let e = "P";
      return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += _r(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
     * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
     * @return {string}
     */
    toISOTime(e = {}) {
      if (!this.isValid) return null;
      const n = this.toMillis();
      return n < 0 || n >= 864e5 ? null : (e = {
        suppressMilliseconds: !1,
        suppressSeconds: !1,
        includePrefix: !1,
        format: "extended",
        ...e,
        includeOffset: !1
      }, W.fromMillis(n, {
        zone: "UTC"
      }).toISOTime(e));
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * @return {string}
     */
    toJSON() {
      return this.toISO();
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     * @return {string}
     */
    toString() {
      return this.toISO();
    }
    /**
     * Returns a string representation of this Duration appropriate for the REPL.
     * @return {string}
     */
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
    }
    /**
     * Returns an milliseconds value of this Duration.
     * @return {number}
     */
    toMillis() {
      return this.isValid ? _s(this.matrix, this.values) : NaN;
    }
    /**
     * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
     * @return {number}
     */
    valueOf() {
      return this.toMillis();
    }
    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    plus(e) {
      if (!this.isValid) return this;
      const n = R.fromDurationLike(e), u = {};
      for (const c of Le)
        (Re(n.values, c) || Re(this.values, c)) && (u[c] = n.get(c) + this.get(c));
      return be(this, {
        values: u
      }, !0);
    }
    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    minus(e) {
      if (!this.isValid) return this;
      const n = R.fromDurationLike(e);
      return this.plus(n.negate());
    }
    /**
     * Scale this Duration by the specified amount. Return a newly-constructed Duration.
     * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
     * @return {Duration}
     */
    mapUnits(e) {
      if (!this.isValid) return this;
      const n = {};
      for (const u of Object.keys(this.values))
        n[u] = ss(e(this.values[u], u));
      return be(this, {
        values: n
      }, !0);
    }
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
     * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
     * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
     * @return {number}
     */
    get(e) {
      return this[R.normalizeUnit(e)];
    }
    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     * @param {Object} values - a mapping of units to numbers
     * @example dur.set({ years: 2017 })
     * @example dur.set({ hours: 8, minutes: 30 })
     * @return {Duration}
     */
    set(e) {
      if (!this.isValid) return this;
      const n = {
        ...this.values,
        ...Ct(e, R.normalizeUnit)
      };
      return be(this, {
        values: n
      });
    }
    /**
     * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
     * @example dur.reconfigure({ locale: 'en-GB' })
     * @return {Duration}
     */
    reconfigure({
      locale: e,
      numberingSystem: n,
      conversionAccuracy: u,
      matrix: c
    } = {}) {
      const p = {
        loc: this.loc.clone({
          locale: e,
          numberingSystem: n
        }),
        matrix: c,
        conversionAccuracy: u
      };
      return be(this, p);
    }
    /**
     * Return the length of the duration in the specified unit.
     * @param {string} unit - a unit such as 'minutes' or 'days'
     * @example Duration.fromObject({years: 1}).as('days') //=> 365
     * @example Duration.fromObject({years: 1}).as('months') //=> 12
     * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
     * @return {number}
     */
    as(e) {
      return this.isValid ? this.shiftTo(e).get(e) : NaN;
    }
    /**
     * Reduce this Duration to its canonical representation in its current units.
     * Assuming the overall value of the Duration is positive, this means:
     * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
     * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
     *   the overall value would be negative, see third example)
     * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
     *
     * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
     * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
     * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
     * @return {Duration}
     */
    normalize() {
      if (!this.isValid) return this;
      const e = this.toObject();
      return xs(this.matrix, e), be(this, {
        values: e
      }, !0);
    }
    /**
     * Rescale units to its largest representation
     * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
     * @return {Duration}
     */
    rescale() {
      if (!this.isValid) return this;
      const e = ks(this.normalize().shiftToAll().toObject());
      return be(this, {
        values: e
      }, !0);
    }
    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */
    shiftTo(...e) {
      if (!this.isValid) return this;
      if (e.length === 0)
        return this;
      e = e.map((p) => R.normalizeUnit(p));
      const n = {}, u = {}, c = this.toObject();
      let d;
      for (const p of Le)
        if (e.indexOf(p) >= 0) {
          d = p;
          let g = 0;
          for (const E in u)
            g += this.matrix[E][p] * u[E], u[E] = 0;
          De(c[p]) && (g += c[p]);
          const v = Math.trunc(g);
          n[p] = v, u[p] = (g * 1e3 - v * 1e3) / 1e3;
        } else De(c[p]) && (u[p] = c[p]);
      for (const p in u)
        u[p] !== 0 && (n[d] += p === d ? u[p] : u[p] / this.matrix[d][p]);
      return xs(this.matrix, n), be(this, {
        values: n
      }, !0);
    }
    /**
     * Shift this Duration to all available units.
     * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
     * @return {Duration}
     */
    shiftToAll() {
      return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this;
    }
    /**
     * Return the negative of this Duration.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     * @return {Duration}
     */
    negate() {
      if (!this.isValid) return this;
      const e = {};
      for (const n of Object.keys(this.values))
        e[n] = this.values[n] === 0 ? 0 : -this.values[n];
      return be(this, {
        values: e
      }, !0);
    }
    /**
     * Removes all units with values equal to 0 from this Duration.
     * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
     * @return {Duration}
     */
    removeZeros() {
      if (!this.isValid) return this;
      const e = ks(this.values);
      return be(this, {
        values: e
      }, !0);
    }
    /**
     * Get the years.
     * @type {number}
     */
    get years() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */
    get quarters() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */
    get months() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */
    get weeks() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */
    get days() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */
    get hours() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */
    get minutes() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */
    get seconds() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */
    get milliseconds() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
    get isValid() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Equality check
     * Two Durations are equal iff they have the same units and the same values for each unit.
     * @param {Duration} other
     * @return {boolean}
     */
    equals(e) {
      if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
        return !1;
      function n(u, c) {
        return u === void 0 || u === 0 ? c === void 0 || c === 0 : u === c;
      }
      for (const u of Le)
        if (!n(this.values[u], e.values[u]))
          return !1;
      return !0;
    }
  }
  const Be = "Invalid Interval";
  function Au(s, e) {
    return !s || !s.isValid ? H.invalid("missing or invalid start") : !e || !e.isValid ? H.invalid("missing or invalid end") : e < s ? H.invalid("end before start", `The end of an interval must be after its start, but you had start=${s.toISO()} and end=${e.toISO()}`) : null;
  }
  class H {
    /**
     * @private
     */
    constructor(e) {
      this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
    }
    /**
     * Create an invalid Interval.
     * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Interval}
     */
    static invalid(e, n = null) {
      if (!e)
        throw new f("need to specify a reason the Interval is invalid");
      const u = e instanceof ce ? e : new ce(e, n);
      if (j.throwOnInvalid)
        throw new r(u);
      return new H({
        invalid: u
      });
    }
    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     * @param {DateTime|Date|Object} start
     * @param {DateTime|Date|Object} end
     * @return {Interval}
     */
    static fromDateTimes(e, n) {
      const u = vt(e), c = vt(n), d = Au(u, c);
      return d ?? new H({
        start: u,
        end: c
      });
    }
    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     * @param {DateTime|Date|Object} start
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static after(e, n) {
      const u = R.fromDurationLike(n), c = vt(e);
      return H.fromDateTimes(c, c.plus(u));
    }
    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|Date|Object} end
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static before(e, n) {
      const u = R.fromDurationLike(n), c = vt(e);
      return H.fromDateTimes(c.minus(u), c);
    }
    /**
     * Create an Interval from an ISO 8601 string.
     * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
     * @param {string} text - the ISO string to parse
     * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {Interval}
     */
    static fromISO(e, n) {
      const [u, c] = (e || "").split("/", 2);
      if (u && c) {
        let d, p;
        try {
          d = W.fromISO(u, n), p = d.isValid;
        } catch {
          p = !1;
        }
        let g, v;
        try {
          g = W.fromISO(c, n), v = g.isValid;
        } catch {
          v = !1;
        }
        if (p && v)
          return H.fromDateTimes(d, g);
        if (p) {
          const E = R.fromISO(c, n);
          if (E.isValid)
            return H.after(d, E);
        } else if (v) {
          const E = R.fromISO(u, n);
          if (E.isValid)
            return H.before(g, E);
        }
      }
      return H.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
    }
    /**
     * Check if an object is an Interval. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isInterval(e) {
      return e && e.isLuxonInterval || !1;
    }
    /**
     * Returns the start of the Interval
     * @type {DateTime}
     */
    get start() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval. This is the first instant which is not part of the interval
     * (Interval is half-open).
     * @type {DateTime}
     */
    get end() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns the last DateTime included in the interval (since end is not part of the interval)
     * @type {DateTime}
     */
    get lastDateTime() {
      return this.isValid && this.e ? this.e.minus(1) : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
    get isValid() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Returns the length of the Interval in the specified unit.
     * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
     * @return {number}
     */
    length(e = "milliseconds") {
      return this.isValid ? this.toDuration(e).get(e) : NaN;
    }
    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param {string} [unit='milliseconds'] - the unit of time to count.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
     * @return {number}
     */
    count(e = "milliseconds", n) {
      if (!this.isValid) return NaN;
      const u = this.start.startOf(e, n);
      let c;
      return n != null && n.useLocaleWeeks ? c = this.end.reconfigure({
        locale: u.locale
      }) : c = this.end, c = c.startOf(e, n), Math.floor(c.diff(u, e).get(e)) + (c.valueOf() !== this.end.valueOf());
    }
    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param {string} unit - the unit of time to check sameness on
     * @return {boolean}
     */
    hasSame(e) {
      return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
    }
    /**
     * Return whether this Interval has the same start and end DateTimes.
     * @return {boolean}
     */
    isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }
    /**
     * Return whether this Interval's start is after the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    isAfter(e) {
      return this.isValid ? this.s > e : !1;
    }
    /**
     * Return whether this Interval's end is before the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    isBefore(e) {
      return this.isValid ? this.e <= e : !1;
    }
    /**
     * Return whether this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    contains(e) {
      return this.isValid ? this.s <= e && this.e > e : !1;
    }
    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     * @param {Object} values - the values to set
     * @param {DateTime} values.start - the starting DateTime
     * @param {DateTime} values.end - the ending DateTime
     * @return {Interval}
     */
    set({
      start: e,
      end: n
    } = {}) {
      return this.isValid ? H.fromDateTimes(e || this.s, n || this.e) : this;
    }
    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...DateTime} dateTimes - the unit of time to count.
     * @return {Array}
     */
    splitAt(...e) {
      if (!this.isValid) return [];
      const n = e.map(vt).filter((p) => this.contains(p)).sort((p, g) => p.toMillis() - g.toMillis()), u = [];
      let {
        s: c
      } = this, d = 0;
      for (; c < this.e; ) {
        const p = n[d] || this.e, g = +p > +this.e ? this.e : p;
        u.push(H.fromDateTimes(c, g)), c = g, d += 1;
      }
      return u;
    }
    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param {Duration|Object|number} duration - The length of each resulting interval.
     * @return {Array}
     */
    splitBy(e) {
      const n = R.fromDurationLike(e);
      if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
        return [];
      let {
        s: u
      } = this, c = 1, d;
      const p = [];
      for (; u < this.e; ) {
        const g = this.start.plus(n.mapUnits((v) => v * c));
        d = +g > +this.e ? this.e : g, p.push(H.fromDateTimes(u, d)), u = d, c += 1;
      }
      return p;
    }
    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
     * @return {Array}
     */
    divideEqually(e) {
      return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
    }
    /**
     * Return whether this Interval overlaps with the specified Interval
     * @param {Interval} other
     * @return {boolean}
     */
    overlaps(e) {
      return this.e > e.s && this.s < e.e;
    }
    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     * @param {Interval} other
     * @return {boolean}
     */
    abutsStart(e) {
      return this.isValid ? +this.e == +e.s : !1;
    }
    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */
    abutsEnd(e) {
      return this.isValid ? +e.e == +this.s : !1;
    }
    /**
     * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
     * @param {Interval} other
     * @return {boolean}
     */
    engulfs(e) {
      return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
    }
    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */
    equals(e) {
      return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
    }
    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * Returns null if the intersection is empty, meaning, the intervals don't intersect.
     * @param {Interval} other
     * @return {Interval}
     */
    intersection(e) {
      if (!this.isValid) return this;
      const n = this.s > e.s ? this.s : e.s, u = this.e < e.e ? this.e : e.e;
      return n >= u ? null : H.fromDateTimes(n, u);
    }
    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */
    union(e) {
      if (!this.isValid) return this;
      const n = this.s < e.s ? this.s : e.s, u = this.e > e.e ? this.e : e.e;
      return H.fromDateTimes(n, u);
    }
    /**
     * Merge an array of Intervals into an equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
     * and ending with the latest.
     *
     * @param {Array} intervals
     * @return {Array}
     */
    static merge(e) {
      const [n, u] = e.sort((c, d) => c.s - d.s).reduce(([c, d], p) => d ? d.overlaps(p) || d.abutsStart(p) ? [c, d.union(p)] : [c.concat([d]), p] : [c, p], [[], null]);
      return u && n.push(u), n;
    }
    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     * @param {Array} intervals
     * @return {Array}
     */
    static xor(e) {
      let n = null, u = 0;
      const c = [], d = e.map((v) => [{
        time: v.s,
        type: "s"
      }, {
        time: v.e,
        type: "e"
      }]), p = Array.prototype.concat(...d), g = p.sort((v, E) => v.time - E.time);
      for (const v of g)
        u += v.type === "s" ? 1 : -1, u === 1 ? n = v.time : (n && +n != +v.time && c.push(H.fromDateTimes(n, v.time)), n = null);
      return H.merge(c);
    }
    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     * @param {...Interval} intervals
     * @return {Array}
     */
    difference(...e) {
      return H.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
    }
    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */
    toString() {
      return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Be;
    }
    /**
     * Returns a string representation of this Interval appropriate for the REPL.
     * @return {string}
     */
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
    }
    /**
     * Returns a localized string representing this Interval. Accepts the same options as the
     * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
     * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
     * is browser-specific, but in general it will return an appropriate representation of the
     * Interval in the assigned locale. Defaults to the system's locale if no locale has been
     * specified.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
     * Intl.DateTimeFormat constructor options.
     * @param {Object} opts - Options to override the configuration of the start DateTime.
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
     * @return {string}
     */
    toLocaleString(e = w, n = {}) {
      return this.isValid ? ee.create(this.s.loc.clone(n), e).formatInterval(this) : Be;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
    toISO(e) {
      return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Be;
    }
    /**
     * Returns an ISO 8601-compliant string representation of date of this Interval.
     * The time components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {string}
     */
    toISODate() {
      return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Be;
    }
    /**
     * Returns an ISO 8601-compliant string representation of time of this Interval.
     * The date components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
    toISOTime(e) {
      return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Be;
    }
    /**
     * Returns a string representation of this Interval formatted according to the specified format
     * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
     * formatting tool.
     * @param {string} dateFormat - The format string. This string formats the start and end time.
     * See {@link DateTime#toFormat} for details.
     * @param {Object} opts - Options.
     * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
     * representations.
     * @return {string}
     */
    toFormat(e, {
      separator: n = " – "
    } = {}) {
      return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : Be;
    }
    /**
     * Return a Duration representing the time spanned by this interval.
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     * @return {Duration}
     */
    toDuration(e, n) {
      return this.isValid ? this.e.diff(this.s, e, n) : R.invalid(this.invalidReason);
    }
    /**
     * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
     * @param {function} mapFn
     * @return {Interval}
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
     */
    mapEndpoints(e) {
      return H.fromDateTimes(e(this.s), e(this.e));
    }
  }
  class pt {
    /**
     * Return whether the specified zone contains a DST.
     * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
     * @return {boolean}
     */
    static hasDST(e = j.defaultZone) {
      const n = W.now().setZone(e).set({
        month: 12
      });
      return !e.isUniversal && n.offset !== n.set({
        month: 6
      }).offset;
    }
    /**
     * Return whether the specified zone is a valid IANA specifier.
     * @param {string} zone - Zone to check
     * @return {boolean}
     */
    static isValidIANAZone(e) {
      return me.isValidZone(e);
    }
    /**
     * Converts the input into a {@link Zone} instance.
     *
     * * If `input` is already a Zone instance, it is returned unchanged.
     * * If `input` is a string containing a valid time zone name, a Zone instance
     *   with that name is returned.
     * * If `input` is a string that doesn't refer to a known time zone, a Zone
     *   instance with {@link Zone#isValid} == false is returned.
     * * If `input is a number, a Zone instance with the specified fixed offset
     *   in minutes is returned.
     * * If `input` is `null` or `undefined`, the default zone is returned.
     * @param {string|Zone|number} [input] - the value to be converted
     * @return {Zone}
     */
    static normalizeZone(e) {
      return Fe(e, j.defaultZone);
    }
    /**
     * Get the weekday on which the week starts according to the given locale.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
     */
    static getStartOfWeek({
      locale: e = null,
      locObj: n = null
    } = {}) {
      return (n || z.create(e)).getStartOfWeek();
    }
    /**
     * Get the minimum number of days necessary in a week before it is considered part of the next year according
     * to the given locale.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number}
     */
    static getMinimumDaysInFirstWeek({
      locale: e = null,
      locObj: n = null
    } = {}) {
      return (n || z.create(e)).getMinDaysInFirstWeek();
    }
    /**
     * Get the weekdays, which are considered the weekend according to the given locale
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
     */
    static getWeekendWeekdays({
      locale: e = null,
      locObj: n = null
    } = {}) {
      return (n || z.create(e)).getWeekendDays().slice();
    }
    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.months()[0] //=> 'January'
     * @example Info.months('short')[0] //=> 'Jan'
     * @example Info.months('numeric')[0] //=> '1'
     * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     * @return {Array}
     */
    static months(e = "long", {
      locale: n = null,
      numberingSystem: u = null,
      locObj: c = null,
      outputCalendar: d = "gregory"
    } = {}) {
      return (c || z.create(n, u, d)).months(e);
    }
    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
     * changes the string.
     * See {@link Info#months}
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {Array}
     */
    static monthsFormat(e = "long", {
      locale: n = null,
      numberingSystem: u = null,
      locObj: c = null,
      outputCalendar: d = "gregory"
    } = {}) {
      return (c || z.create(n, u, d)).months(e, !0);
    }
    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @example Info.weekdays()[0] //=> 'Monday'
     * @example Info.weekdays('short')[0] //=> 'Mon'
     * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
     * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
     * @return {Array}
     */
    static weekdays(e = "long", {
      locale: n = null,
      numberingSystem: u = null,
      locObj: c = null
    } = {}) {
      return (c || z.create(n, u, null)).weekdays(e);
    }
    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
     * changes the string.
     * See {@link Info#weekdays}
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale=null] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @return {Array}
     */
    static weekdaysFormat(e = "long", {
      locale: n = null,
      numberingSystem: u = null,
      locObj: c = null
    } = {}) {
      return (c || z.create(n, u, null)).weekdays(e, !0);
    }
    /**
     * Return an array of meridiems.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
     * @return {Array}
     */
    static meridiems({
      locale: e = null
    } = {}) {
      return z.create(e).meridiems();
    }
    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.eras() //=> [ 'BC', 'AD' ]
     * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     * @return {Array}
     */
    static eras(e = "short", {
      locale: n = null
    } = {}) {
      return z.create(n, null, "gregory").eras(e);
    }
    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
     * Keys:
     * * `relative`: whether this environment supports relative time formatting
     * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
     * @example Info.features() //=> { relative: false, localeWeek: true }
     * @return {Object}
     */
    static features() {
      return {
        relative: Xn(),
        localeWeek: es()
      };
    }
  }
  function Ss(s, e) {
    const n = (c) => c.toUTC(0, {
      keepLocalTime: !0
    }).startOf("day").valueOf(), u = n(e) - n(s);
    return Math.floor(R.fromMillis(u).as("days"));
  }
  function qu(s, e, n) {
    const u = [["years", (v, E) => E.year - v.year], ["quarters", (v, E) => E.quarter - v.quarter + (E.year - v.year) * 4], ["months", (v, E) => E.month - v.month + (E.year - v.year) * 12], ["weeks", (v, E) => {
      const V = Ss(v, E);
      return (V - V % 7) / 7;
    }], ["days", Ss]], c = {}, d = s;
    let p, g;
    for (const [v, E] of u)
      n.indexOf(v) >= 0 && (p = v, c[v] = E(s, e), g = d.plus(c), g > e ? (c[v]--, s = d.plus(c), s > e && (g = s, c[v]--, s = d.plus(c))) : s = g);
    return [s, c, g, p];
  }
  function Ru(s, e, n, u) {
    let [c, d, p, g] = qu(s, e, n);
    const v = e - c, E = n.filter((A) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(A) >= 0);
    E.length === 0 && (p < e && (p = c.plus({
      [g]: 1
    })), p !== c && (d[g] = (d[g] || 0) + v / (p - c)));
    const V = R.fromObject(d, u);
    return E.length > 0 ? R.fromMillis(v, u).shiftTo(...E).plus(V) : V;
  }
  const Uu = "missing Intl.DateTimeFormat.formatToParts support";
  function U(s, e = (n) => n) {
    return {
      regex: s,
      deser: ([n]) => e(Ca(n))
    };
  }
  const Es = "[  ]", Ts = new RegExp(Es, "g");
  function Pu(s) {
    return s.replace(/\./g, "\\.?").replace(Ts, Es);
  }
  function Fs(s) {
    return s.replace(/\./g, "").replace(Ts, " ").toLowerCase();
  }
  function fe(s, e) {
    return s === null ? null : {
      regex: RegExp(s.map(Pu).join("|")),
      deser: ([n]) => s.findIndex((u) => Fs(n) === Fs(u)) + e
    };
  }
  function Ds(s, e) {
    return {
      regex: s,
      deser: ([, n, u]) => Mt(n, u),
      groups: e
    };
  }
  function Vt(s) {
    return {
      regex: s,
      deser: ([e]) => e
    };
  }
  function zu(s) {
    return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function Zu(s, e) {
    const n = le(e), u = le(e, "{2}"), c = le(e, "{3}"), d = le(e, "{4}"), p = le(e, "{6}"), g = le(e, "{1,2}"), v = le(e, "{1,3}"), E = le(e, "{1,6}"), V = le(e, "{1,9}"), A = le(e, "{2,4}"), Z = le(e, "{4,6}"), L = (ye) => ({
      regex: RegExp(zu(ye.val)),
      deser: ([Je]) => Je,
      literal: !0
    }), de = ((ye) => {
      if (s.literal)
        return L(ye);
      switch (ye.val) {
        // era
        case "G":
          return fe(e.eras("short"), 0);
        case "GG":
          return fe(e.eras("long"), 0);
        // years
        case "y":
          return U(E);
        case "yy":
          return U(A, xr);
        case "yyyy":
          return U(d);
        case "yyyyy":
          return U(Z);
        case "yyyyyy":
          return U(p);
        // months
        case "M":
          return U(g);
        case "MM":
          return U(u);
        case "MMM":
          return fe(e.months("short", !0), 1);
        case "MMMM":
          return fe(e.months("long", !0), 1);
        case "L":
          return U(g);
        case "LL":
          return U(u);
        case "LLL":
          return fe(e.months("short", !1), 1);
        case "LLLL":
          return fe(e.months("long", !1), 1);
        // dates
        case "d":
          return U(g);
        case "dd":
          return U(u);
        // ordinals
        case "o":
          return U(v);
        case "ooo":
          return U(c);
        // time
        case "HH":
          return U(u);
        case "H":
          return U(g);
        case "hh":
          return U(u);
        case "h":
          return U(g);
        case "mm":
          return U(u);
        case "m":
          return U(g);
        case "q":
          return U(g);
        case "qq":
          return U(u);
        case "s":
          return U(g);
        case "ss":
          return U(u);
        case "S":
          return U(v);
        case "SSS":
          return U(c);
        case "u":
          return Vt(V);
        case "uu":
          return Vt(g);
        case "uuu":
          return U(n);
        // meridiem
        case "a":
          return fe(e.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return U(d);
        case "kk":
          return U(A, xr);
        // weekNumber (W)
        case "W":
          return U(g);
        case "WW":
          return U(u);
        // weekdays
        case "E":
        case "c":
          return U(n);
        case "EEE":
          return fe(e.weekdays("short", !1), 1);
        case "EEEE":
          return fe(e.weekdays("long", !1), 1);
        case "ccc":
          return fe(e.weekdays("short", !0), 1);
        case "cccc":
          return fe(e.weekdays("long", !0), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return Ds(new RegExp(`([+-]${g.source})(?::(${u.source}))?`), 2);
        case "ZZZ":
          return Ds(new RegExp(`([+-]${g.source})(${u.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return Vt(/[a-z_+-/]{1,256}?/i);
        // this special-case "token" represents a place where a macro-token expanded into a white-space literal
        // in this case we accept any non-newline white-space
        case " ":
          return Vt(/[^\S\n\r]/);
        default:
          return L(ye);
      }
    })(s) || {
      invalidReason: Uu
    };
    return de.token = s, de;
  }
  const ju = {
    year: {
      "2-digit": "yy",
      numeric: "yyyyy"
    },
    month: {
      numeric: "M",
      "2-digit": "MM",
      short: "MMM",
      long: "MMMM"
    },
    day: {
      numeric: "d",
      "2-digit": "dd"
    },
    weekday: {
      short: "EEE",
      long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour12: {
      numeric: "h",
      "2-digit": "hh"
    },
    hour24: {
      numeric: "H",
      "2-digit": "HH"
    },
    minute: {
      numeric: "m",
      "2-digit": "mm"
    },
    second: {
      numeric: "s",
      "2-digit": "ss"
    },
    timeZoneName: {
      long: "ZZZZZ",
      short: "ZZZ"
    }
  };
  function Hu(s, e, n) {
    const {
      type: u,
      value: c
    } = s;
    if (u === "literal") {
      const v = /^\s+$/.test(c);
      return {
        literal: !v,
        val: v ? " " : c
      };
    }
    const d = e[u];
    let p = u;
    u === "hour" && (e.hour12 != null ? p = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? p = "hour12" : p = "hour24" : p = n.hour12 ? "hour12" : "hour24");
    let g = ju[p];
    if (typeof g == "object" && (g = g[d]), g)
      return {
        literal: !1,
        val: g
      };
  }
  function Yu(s) {
    return [`^${s.map((n) => n.regex).reduce((n, u) => `${n}(${u.source})`, "")}$`, s];
  }
  function Bu(s, e, n) {
    const u = s.match(e);
    if (u) {
      const c = {};
      let d = 1;
      for (const p in n)
        if (Re(n, p)) {
          const g = n[p], v = g.groups ? g.groups + 1 : 1;
          !g.literal && g.token && (c[g.token.val[0]] = g.deser(u.slice(d, d + v))), d += v;
        }
      return [u, c];
    } else
      return [u, {}];
  }
  function Gu(s) {
    const e = (d) => {
      switch (d) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
        case "H":
          return "hour";
        case "d":
          return "day";
        case "o":
          return "ordinal";
        case "L":
        case "M":
          return "month";
        case "y":
          return "year";
        case "E":
        case "c":
          return "weekday";
        case "W":
          return "weekNumber";
        case "k":
          return "weekYear";
        case "q":
          return "quarter";
        default:
          return null;
      }
    };
    let n = null, u;
    return $(s.z) || (n = me.create(s.z)), $(s.Z) || (n || (n = new X(s.Z)), u = s.Z), $(s.q) || (s.M = (s.q - 1) * 3 + 1), $(s.h) || (s.h < 12 && s.a === 1 ? s.h += 12 : s.h === 12 && s.a === 0 && (s.h = 0)), s.G === 0 && s.y && (s.y = -s.y), $(s.u) || (s.S = br(s.u)), [Object.keys(s).reduce((d, p) => {
      const g = e(p);
      return g && (d[g] = s[p]), d;
    }, {}), n, u];
  }
  let Tr = null;
  function Ju() {
    return Tr || (Tr = W.fromMillis(1555555555555)), Tr;
  }
  function Ku(s, e) {
    if (s.literal)
      return s;
    const n = ee.macroTokenToFormatOpts(s.val), u = Vs(n, e);
    return u == null || u.includes(void 0) ? s : u;
  }
  function Ms(s, e) {
    return Array.prototype.concat(...s.map((n) => Ku(n, e)));
  }
  class Cs {
    constructor(e, n) {
      if (this.locale = e, this.format = n, this.tokens = Ms(ee.parseFormat(n), e), this.units = this.tokens.map((u) => Zu(u, e)), this.disqualifyingUnit = this.units.find((u) => u.invalidReason), !this.disqualifyingUnit) {
        const [u, c] = Yu(this.units);
        this.regex = RegExp(u, "i"), this.handlers = c;
      }
    }
    explainFromTokens(e) {
      if (this.isValid) {
        const [n, u] = Bu(e, this.regex, this.handlers), [c, d, p] = u ? Gu(u) : [null, null, void 0];
        if (Re(u, "a") && Re(u, "H"))
          throw new i("Can't include meridiem when specifying 24-hour format");
        return {
          input: e,
          tokens: this.tokens,
          regex: this.regex,
          rawMatches: n,
          matches: u,
          result: c,
          zone: d,
          specificOffset: p
        };
      } else
        return {
          input: e,
          tokens: this.tokens,
          invalidReason: this.invalidReason
        };
    }
    get isValid() {
      return !this.disqualifyingUnit;
    }
    get invalidReason() {
      return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
    }
  }
  function Ns(s, e, n) {
    return new Cs(s, n).explainFromTokens(e);
  }
  function Qu(s, e, n) {
    const {
      result: u,
      zone: c,
      specificOffset: d,
      invalidReason: p
    } = Ns(s, e, n);
    return [u, c, d, p];
  }
  function Vs(s, e) {
    if (!s)
      return null;
    const u = ee.create(e, s).dtFormatter(Ju()), c = u.formatToParts(), d = u.resolvedOptions();
    return c.map((p) => Hu(p, s, d));
  }
  const Fr = "Invalid DateTime", Is = 864e13;
  function gt(s) {
    return new ce("unsupported zone", `the zone "${s.name}" is not supported`);
  }
  function Dr(s) {
    return s.weekData === null && (s.weekData = Et(s.c)), s.weekData;
  }
  function Mr(s) {
    return s.localWeekData === null && (s.localWeekData = Et(s.c, s.loc.getMinDaysInFirstWeek(), s.loc.getStartOfWeek())), s.localWeekData;
  }
  function $e(s, e) {
    const n = {
      ts: s.ts,
      zone: s.zone,
      c: s.c,
      o: s.o,
      loc: s.loc,
      invalid: s.invalid
    };
    return new W({
      ...n,
      ...e,
      old: n
    });
  }
  function Ls(s, e, n) {
    let u = s - e * 60 * 1e3;
    const c = n.offset(u);
    if (e === c)
      return [u, e];
    u -= (c - e) * 60 * 1e3;
    const d = n.offset(u);
    return c === d ? [u, c] : [s - Math.min(c, d) * 60 * 1e3, Math.max(c, d)];
  }
  function It(s, e) {
    s += e * 60 * 1e3;
    const n = new Date(s);
    return {
      year: n.getUTCFullYear(),
      month: n.getUTCMonth() + 1,
      day: n.getUTCDate(),
      hour: n.getUTCHours(),
      minute: n.getUTCMinutes(),
      second: n.getUTCSeconds(),
      millisecond: n.getUTCMilliseconds()
    };
  }
  function Lt(s, e, n) {
    return Ls(Dt(s), e, n);
  }
  function $s(s, e) {
    const n = s.o, u = s.c.year + Math.trunc(e.years), c = s.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, d = {
      ...s.c,
      year: u,
      month: c,
      day: Math.min(s.c.day, Ft(u, c)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
    }, p = R.fromObject({
      years: e.years - Math.trunc(e.years),
      quarters: e.quarters - Math.trunc(e.quarters),
      months: e.months - Math.trunc(e.months),
      weeks: e.weeks - Math.trunc(e.weeks),
      days: e.days - Math.trunc(e.days),
      hours: e.hours,
      minutes: e.minutes,
      seconds: e.seconds,
      milliseconds: e.milliseconds
    }).as("milliseconds"), g = Dt(d);
    let [v, E] = Ls(g, n, s.zone);
    return p !== 0 && (v += p, E = s.zone.offset(v)), {
      ts: v,
      o: E
    };
  }
  function Ge(s, e, n, u, c, d) {
    const {
      setZone: p,
      zone: g
    } = n;
    if (s && Object.keys(s).length !== 0 || e) {
      const v = e || g, E = W.fromObject(s, {
        ...n,
        zone: v,
        specificOffset: d
      });
      return p ? E : E.setZone(g);
    } else
      return W.invalid(new ce("unparsable", `the input "${c}" can't be parsed as ${u}`));
  }
  function $t(s, e, n = !0) {
    return s.isValid ? ee.create(z.create("en-US"), {
      allowZ: n,
      forceSimple: !0
    }).formatDateTimeFromString(s, e) : null;
  }
  function Cr(s, e, n) {
    const u = s.c.year > 9999 || s.c.year < 0;
    let c = "";
    if (u && s.c.year >= 0 && (c += "+"), c += G(s.c.year, u ? 6 : 4), n === "year") return c;
    if (e) {
      if (c += "-", c += G(s.c.month), n === "month") return c;
      c += "-";
    } else if (c += G(s.c.month), n === "month") return c;
    return c += G(s.c.day), c;
  }
  function Ws(s, e, n, u, c, d, p) {
    let g = !n || s.c.millisecond !== 0 || s.c.second !== 0, v = "";
    switch (p) {
      case "day":
      case "month":
      case "year":
        break;
      default:
        if (v += G(s.c.hour), p === "hour") break;
        if (e) {
          if (v += ":", v += G(s.c.minute), p === "minute") break;
          g && (v += ":", v += G(s.c.second));
        } else {
          if (v += G(s.c.minute), p === "minute") break;
          g && (v += G(s.c.second));
        }
        if (p === "second") break;
        g && (!u || s.c.millisecond !== 0) && (v += ".", v += G(s.c.millisecond, 3));
    }
    return c && (s.isOffsetFixed && s.offset === 0 && !d ? v += "Z" : s.o < 0 ? (v += "-", v += G(Math.trunc(-s.o / 60)), v += ":", v += G(Math.trunc(-s.o % 60))) : (v += "+", v += G(Math.trunc(s.o / 60)), v += ":", v += G(Math.trunc(s.o % 60)))), d && (v += "[" + s.zone.ianaName + "]"), v;
  }
  const As = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }, Xu = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }, eo = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }, Wt = ["year", "month", "day", "hour", "minute", "second", "millisecond"], to = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], ro = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
  function At(s) {
    const e = {
      year: "year",
      years: "year",
      month: "month",
      months: "month",
      day: "day",
      days: "day",
      hour: "hour",
      hours: "hour",
      minute: "minute",
      minutes: "minute",
      quarter: "quarter",
      quarters: "quarter",
      second: "second",
      seconds: "second",
      millisecond: "millisecond",
      milliseconds: "millisecond",
      weekday: "weekday",
      weekdays: "weekday",
      weeknumber: "weekNumber",
      weeksnumber: "weekNumber",
      weeknumbers: "weekNumber",
      weekyear: "weekYear",
      weekyears: "weekYear",
      ordinal: "ordinal"
    }[s.toLowerCase()];
    if (!e) throw new l(s);
    return e;
  }
  function qs(s) {
    switch (s.toLowerCase()) {
      case "localweekday":
      case "localweekdays":
        return "localWeekday";
      case "localweeknumber":
      case "localweeknumbers":
        return "localWeekNumber";
      case "localweekyear":
      case "localweekyears":
        return "localWeekYear";
      default:
        return At(s);
    }
  }
  function no(s) {
    if (wt === void 0 && (wt = j.now()), s.type !== "iana")
      return s.offset(wt);
    const e = s.name;
    let n = Nr.get(e);
    return n === void 0 && (n = s.offset(wt), Nr.set(e, n)), n;
  }
  function Rs(s, e) {
    const n = Fe(e.zone, j.defaultZone);
    if (!n.isValid)
      return W.invalid(gt(n));
    const u = z.fromObject(e);
    let c, d;
    if ($(s.year))
      c = j.now();
    else {
      for (const v of Wt)
        $(s[v]) && (s[v] = As[v]);
      const p = Kn(s) || Qn(s);
      if (p)
        return W.invalid(p);
      const g = no(n);
      [c, d] = Lt(s, g, n);
    }
    return new W({
      ts: c,
      zone: n,
      loc: u,
      o: d
    });
  }
  function Us(s, e, n) {
    const u = $(n.round) ? !0 : n.round, c = $(n.rounding) ? "trunc" : n.rounding, d = (g, v) => (g = _r(g, u || n.calendary ? 0 : 2, n.calendary ? "round" : c), e.loc.clone(n).relFormatter(n).format(g, v)), p = (g) => n.calendary ? e.hasSame(s, g) ? 0 : e.startOf(g).diff(s.startOf(g), g).get(g) : e.diff(s, g).get(g);
    if (n.unit)
      return d(p(n.unit), n.unit);
    for (const g of n.units) {
      const v = p(g);
      if (Math.abs(v) >= 1)
        return d(v, g);
    }
    return d(s > e ? -0 : 0, n.units[n.units.length - 1]);
  }
  function Ps(s) {
    let e = {}, n;
    return s.length > 0 && typeof s[s.length - 1] == "object" ? (e = s[s.length - 1], n = Array.from(s).slice(0, s.length - 1)) : n = Array.from(s), [e, n];
  }
  let wt;
  const Nr = /* @__PURE__ */ new Map();
  class W {
    /**
     * @access private
     */
    constructor(e) {
      const n = e.zone || j.defaultZone;
      let u = e.invalid || (Number.isNaN(e.ts) ? new ce("invalid input") : null) || (n.isValid ? null : gt(n));
      this.ts = $(e.ts) ? j.now() : e.ts;
      let c = null, d = null;
      if (!u)
        if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
          [c, d] = [e.old.c, e.old.o];
        else {
          const g = De(e.o) && !e.old ? e.o : n.offset(this.ts);
          c = It(this.ts, g), u = Number.isNaN(c.year) ? new ce("invalid input") : null, c = u ? null : c, d = u ? null : g;
        }
      this._zone = n, this.loc = e.loc || z.create(), this.invalid = u, this.weekData = null, this.localWeekData = null, this.c = c, this.o = d, this.isLuxonDateTime = !0;
    }
    // CONSTRUCT
    /**
     * Create a DateTime for the current instant, in the system's time zone.
     *
     * Use Settings to override these default values if needed.
     * @example DateTime.now().toISO() //~> now in the ISO format
     * @return {DateTime}
     */
    static now() {
      return new W({});
    }
    /**
     * Create a local DateTime
     * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month, 1-indexed
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @example DateTime.local()                                  //~> now
     * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
     * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
     * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
     * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
     * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
     * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
     * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
     * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
     * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
     * @return {DateTime}
     */
    static local() {
      const [e, n] = Ps(arguments), [u, c, d, p, g, v, E] = n;
      return Rs({
        year: u,
        month: c,
        day: d,
        hour: p,
        minute: g,
        second: v,
        millisecond: E
      }, e);
    }
    /**
     * Create a DateTime in UTC
     * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @param {Object} options - configuration options for the DateTime
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
     * @example DateTime.utc()                                              //~> now
     * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
     * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
     * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
     * @return {DateTime}
     */
    static utc() {
      const [e, n] = Ps(arguments), [u, c, d, p, g, v, E] = n;
      return e.zone = X.utcInstance, Rs({
        year: u,
        month: c,
        day: d,
        hour: p,
        minute: g,
        second: v,
        millisecond: E
      }, e);
    }
    /**
     * Create a DateTime from a JavaScript Date object. Uses the default zone.
     * @param {Date} date - a JavaScript Date object
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @return {DateTime}
     */
    static fromJSDate(e, n = {}) {
      const u = $a(e) ? e.valueOf() : NaN;
      if (Number.isNaN(u))
        return W.invalid("invalid input");
      const c = Fe(n.zone, j.defaultZone);
      return c.isValid ? new W({
        ts: u,
        zone: c,
        loc: z.fromObject(n)
      }) : W.invalid(gt(c));
    }
    /**
     * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} milliseconds - a number of milliseconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromMillis(e, n = {}) {
      if (De(e))
        return e < -Is || e > Is ? W.invalid("Timestamp out of range") : new W({
          ts: e,
          zone: Fe(n.zone, j.defaultZone),
          loc: z.fromObject(n)
        });
      throw new f(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`);
    }
    /**
     * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} seconds - a number of seconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromSeconds(e, n = {}) {
      if (De(e))
        return new W({
          ts: e * 1e3,
          zone: Fe(n.zone, j.defaultZone),
          loc: z.fromObject(n)
        });
      throw new f("fromSeconds requires a numerical input");
    }
    /**
     * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.year - a year, such as 1987
     * @param {number} obj.month - a month, 1-12
     * @param {number} obj.day - a day of the month, 1-31, depending on the month
     * @param {number} obj.ordinal - day of the year, 1-365 or 366
     * @param {number} obj.weekYear - an ISO week year
     * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
     * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
     * @param {number} obj.localWeekYear - a week year, according to the locale
     * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
     * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
     * @param {number} obj.hour - hour of the day, 0-23
     * @param {number} obj.minute - minute of the hour, 0-59
     * @param {number} obj.second - second of the minute, 0-59
     * @param {number} obj.millisecond - millisecond of the second, 0-999
     * @param {Object} opts - options for creating this DateTime
     * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
     * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
     * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
     * @return {DateTime}
     */
    static fromObject(e, n = {}) {
      e = e || {};
      const u = Fe(n.zone, j.defaultZone);
      if (!u.isValid)
        return W.invalid(gt(u));
      const c = z.fromObject(n), d = Ct(e, qs), {
        minDaysInFirstWeek: p,
        startOfWeek: g
      } = Jn(d, c), v = j.now(), E = $(n.specificOffset) ? u.offset(v) : n.specificOffset, V = !$(d.ordinal), A = !$(d.year), Z = !$(d.month) || !$(d.day), L = A || Z, J = d.weekYear || d.weekNumber;
      if ((L || V) && J)
        throw new i("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      if (Z && V)
        throw new i("Can't mix ordinal dates with month/day");
      const de = J || d.weekday && !L;
      let ye, Je, Ot = It(v, E);
      de ? (ye = to, Je = Xu, Ot = Et(Ot, p, g)) : V ? (ye = ro, Je = eo, Ot = vr(Ot)) : (ye = Wt, Je = As);
      let zs = !1;
      for (const _t of ye) {
        const lo = d[_t];
        $(lo) ? zs ? d[_t] = Je[_t] : d[_t] = Ot[_t] : zs = !0;
      }
      const io = de ? Va(d, p, g) : V ? Ia(d) : Kn(d), Zs = io || Qn(d);
      if (Zs)
        return W.invalid(Zs);
      const ao = de ? Bn(d, p, g) : V ? Gn(d) : d, [uo, oo] = Lt(ao, E, u), bt = new W({
        ts: uo,
        zone: u,
        o: oo,
        loc: c
      });
      return d.weekday && L && e.weekday !== bt.weekday ? W.invalid("mismatched weekday", `you can't specify both a weekday of ${d.weekday} and a date of ${bt.toISO()}`) : bt.isValid ? bt : W.invalid(bt.invalid);
    }
    /**
     * Create a DateTime from an ISO 8601 string
     * @param {string} text - the ISO string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
     * @example DateTime.fromISO('2016-W05-4')
     * @return {DateTime}
     */
    static fromISO(e, n = {}) {
      const [u, c] = Su(e);
      return Ge(u, c, n, "ISO 8601", e);
    }
    /**
     * Create a DateTime from an RFC 2822 string
     * @param {string} text - the RFC 2822 string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     * @return {DateTime}
     */
    static fromRFC2822(e, n = {}) {
      const [u, c] = Eu(e);
      return Ge(u, c, n, "RFC 2822", e);
    }
    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param {string} text - the HTTP header date
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     * @return {DateTime}
     */
    static fromHTTP(e, n = {}) {
      const [u, c] = Tu(e);
      return Ge(u, c, n, "HTTP", n);
    }
    /**
     * Create a DateTime from an input string and format string.
     * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromFormat(e, n, u = {}) {
      if ($(e) || $(n))
        throw new f("fromFormat requires an input string and a format");
      const {
        locale: c = null,
        numberingSystem: d = null
      } = u, p = z.fromOpts({
        locale: c,
        numberingSystem: d,
        defaultToEN: !0
      }), [g, v, E, V] = Qu(p, e, n);
      return V ? W.invalid(V) : Ge(g, v, u, `format ${n}`, e, E);
    }
    /**
     * @deprecated use fromFormat instead
     */
    static fromString(e, n, u = {}) {
      return W.fromFormat(e, n, u);
    }
    /**
     * Create a DateTime from a SQL date, time, or datetime
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @example DateTime.fromSQL('2017-05-15')
     * @example DateTime.fromSQL('2017-05-15 09:12:34')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
     * @example DateTime.fromSQL('09:12:34.342')
     * @return {DateTime}
     */
    static fromSQL(e, n = {}) {
      const [u, c] = Iu(e);
      return Ge(u, c, n, "SQL", e);
    }
    /**
     * Create an invalid DateTime.
     * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {DateTime}
     */
    static invalid(e, n = null) {
      if (!e)
        throw new f("need to specify a reason the DateTime is invalid");
      const u = e instanceof ce ? e : new ce(e, n);
      if (j.throwOnInvalid)
        throw new t(u);
      return new W({
        invalid: u
      });
    }
    /**
     * Check if an object is an instance of DateTime. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isDateTime(e) {
      return e && e.isLuxonDateTime || !1;
    }
    /**
     * Produce the format string for a set of options
     * @param formatOpts
     * @param localeOpts
     * @returns {string}
     */
    static parseFormatForOpts(e, n = {}) {
      const u = Vs(e, z.fromObject(n));
      return u ? u.map((c) => c ? c.val : null).join("") : null;
    }
    /**
     * Produce the the fully expanded format token for the locale
     * Does NOT quote characters, so quoted tokens will not round trip correctly
     * @param fmt
     * @param localeOpts
     * @returns {string}
     */
    static expandFormat(e, n = {}) {
      return Ms(ee.parseFormat(e), z.fromObject(n)).map((c) => c.val).join("");
    }
    static resetCache() {
      wt = void 0, Nr.clear();
    }
    // INFO
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
     * @return {number}
     */
    get(e) {
      return this[e];
    }
    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     * @type {boolean}
     */
    get isValid() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
    get outputCalendar() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
    get zone() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */
    get zoneName() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
    get year() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
    get quarter() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
    get month() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
    get day() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
    get hour() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
    get minute() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
    get second() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
    get millisecond() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
    get weekYear() {
      return this.isValid ? Dr(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
    get weekNumber() {
      return this.isValid ? Dr(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
    get weekday() {
      return this.isValid ? Dr(this).weekday : NaN;
    }
    /**
     * Returns true if this date is on a weekend according to the locale, false otherwise
     * @returns {boolean}
     */
    get isWeekend() {
      return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
    }
    /**
     * Get the day of the week according to the locale.
     * 1 is the first day of the week and 7 is the last day of the week.
     * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
     * @returns {number}
     */
    get localWeekday() {
      return this.isValid ? Mr(this).weekday : NaN;
    }
    /**
     * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
     * because the week can start on different days of the week (see localWeekday) and because a different number of days
     * is required for a week to count as the first week of a year.
     * @returns {number}
     */
    get localWeekNumber() {
      return this.isValid ? Mr(this).weekNumber : NaN;
    }
    /**
     * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
     * differently, see localWeekNumber.
     * @returns {number}
     */
    get localWeekYear() {
      return this.isValid ? Mr(this).weekYear : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
    get ordinal() {
      return this.isValid ? vr(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
    get monthShort() {
      return this.isValid ? pt.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
    get monthLong() {
      return this.isValid ? pt.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
    get weekdayShort() {
      return this.isValid ? pt.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
    get weekdayLong() {
      return this.isValid ? pt.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
    get offset() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
    get offsetNameShort() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      }) : null;
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
    get offsetNameLong() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      }) : null;
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
    get isOffsetFixed() {
      return this.isValid ? this.zone.isUniversal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
    get isInDST() {
      return this.isOffsetFixed ? !1 : this.offset > this.set({
        month: 1,
        day: 1
      }).offset || this.offset > this.set({
        month: 5
      }).offset;
    }
    /**
     * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
     * in this DateTime's zone. During DST changes local time can be ambiguous, for example
     * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
     * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
     * @returns {DateTime[]}
     */
    getPossibleOffsets() {
      if (!this.isValid || this.isOffsetFixed)
        return [this];
      const e = 864e5, n = 6e4, u = Dt(this.c), c = this.zone.offset(u - e), d = this.zone.offset(u + e), p = this.zone.offset(u - c * n), g = this.zone.offset(u - d * n);
      if (p === g)
        return [this];
      const v = u - p * n, E = u - g * n, V = It(v, p), A = It(E, g);
      return V.hour === A.hour && V.minute === A.minute && V.second === A.second && V.millisecond === A.millisecond ? [$e(this, {
        ts: v
      }), $e(this, {
        ts: E
      })] : [this];
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
    get isInLeapYear() {
      return ft(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
    get daysInMonth() {
      return Ft(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
    get daysInYear() {
      return this.isValid ? Ue(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
    get weeksInWeekYear() {
      return this.isValid ? dt(this.weekYear) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's local week year
     * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
     * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
     * @type {number}
     */
    get weeksInLocalWeekYear() {
      return this.isValid ? dt(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
    }
    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     * @param {Object} opts - the same options as toLocaleString
     * @return {Object}
     */
    resolvedLocaleOptions(e = {}) {
      const {
        locale: n,
        numberingSystem: u,
        calendar: c
      } = ee.create(this.loc.clone(e), e).resolvedOptions(this);
      return {
        locale: n,
        numberingSystem: u,
        outputCalendar: c
      };
    }
    // TRANSFORM
    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link DateTime#setZone}('utc')
     * @param {number} [offset=0] - optionally, an offset from UTC in minutes
     * @param {Object} [opts={}] - options to pass to `setZone()`
     * @return {DateTime}
     */
    toUTC(e = 0, n = {}) {
      return this.setZone(X.instance(e), n);
    }
    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to `setZone('local')`
     * @return {DateTime}
     */
    toLocal() {
      return this.setZone(j.defaultZone);
    }
    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
     * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
     * @param {Object} opts - options
     * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
     * @return {DateTime}
     */
    setZone(e, {
      keepLocalTime: n = !1,
      keepCalendarTime: u = !1
    } = {}) {
      if (e = Fe(e, j.defaultZone), e.equals(this.zone))
        return this;
      if (e.isValid) {
        let c = this.ts;
        if (n || u) {
          const d = e.offset(this.ts), p = this.toObject();
          [c] = Lt(p, d, e);
        }
        return $e(this, {
          ts: c,
          zone: e
        });
      } else
        return W.invalid(gt(e));
    }
    /**
     * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
     * @param {Object} properties - the properties to set
     * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
     * @return {DateTime}
     */
    reconfigure({
      locale: e,
      numberingSystem: n,
      outputCalendar: u
    } = {}) {
      const c = this.loc.clone({
        locale: e,
        numberingSystem: n,
        outputCalendar: u
      });
      return $e(this, {
        loc: c
      });
    }
    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
     * @return {DateTime}
     */
    setLocale(e) {
      return this.reconfigure({
        locale: e
      });
    }
    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
     *
     * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
     * They cannot be mixed with ISO-week units like `weekday`.
     * @param {Object} values - a mapping of units to numbers
     * @example dt.set({ year: 2017 })
     * @example dt.set({ hour: 8, minute: 30 })
     * @example dt.set({ weekday: 5 })
     * @example dt.set({ year: 2005, ordinal: 234 })
     * @return {DateTime}
     */
    set(e) {
      if (!this.isValid) return this;
      const n = Ct(e, qs), {
        minDaysInFirstWeek: u,
        startOfWeek: c
      } = Jn(n, this.loc), d = !$(n.weekYear) || !$(n.weekNumber) || !$(n.weekday), p = !$(n.ordinal), g = !$(n.year), v = !$(n.month) || !$(n.day), E = g || v, V = n.weekYear || n.weekNumber;
      if ((E || p) && V)
        throw new i("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      if (v && p)
        throw new i("Can't mix ordinal dates with month/day");
      let A;
      d ? A = Bn({
        ...Et(this.c, u, c),
        ...n
      }, u, c) : $(n.ordinal) ? (A = {
        ...this.toObject(),
        ...n
      }, $(n.day) && (A.day = Math.min(Ft(A.year, A.month), A.day))) : A = Gn({
        ...vr(this.c),
        ...n
      });
      const [Z, L] = Lt(A, this.o, this.zone);
      return $e(this, {
        ts: Z,
        o: L
      });
    }
    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @example DateTime.now().plus(123) //~> in 123 milliseconds
     * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
     * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
     * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
     * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
     * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
     * @return {DateTime}
     */
    plus(e) {
      if (!this.isValid) return this;
      const n = R.fromDurationLike(e);
      return $e(this, $s(this, n));
    }
    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link DateTime#plus}
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     @return {DateTime}
     */
    minus(e) {
      if (!this.isValid) return this;
      const n = R.fromDurationLike(e).negate();
      return $e(this, $s(this, n));
    }
    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
     * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     * @return {DateTime}
     */
    startOf(e, {
      useLocaleWeeks: n = !1
    } = {}) {
      if (!this.isValid) return this;
      const u = {}, c = R.normalizeUnit(e);
      switch (c) {
        case "years":
          u.month = 1;
        // falls through
        case "quarters":
        case "months":
          u.day = 1;
        // falls through
        case "weeks":
        case "days":
          u.hour = 0;
        // falls through
        case "hours":
          u.minute = 0;
        // falls through
        case "minutes":
          u.second = 0;
        // falls through
        case "seconds":
          u.millisecond = 0;
          break;
      }
      if (c === "weeks")
        if (n) {
          const d = this.loc.getStartOfWeek(), {
            weekday: p
          } = this;
          p < d && (u.weekNumber = this.weekNumber - 1), u.weekday = d;
        } else
          u.weekday = 1;
      if (c === "quarters") {
        const d = Math.ceil(this.month / 3);
        u.month = (d - 1) * 3 + 1;
      }
      return this.set(u);
    }
    /**
     * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
     * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
     * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     * @return {DateTime}
     */
    endOf(e, n) {
      return this.isValid ? this.plus({
        [e]: 1
      }).startOf(e, n).minus(1) : this;
    }
    // OUTPUT
    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     * @param {string} fmt - the format string
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
     * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     * @return {string}
     */
    toFormat(e, n = {}) {
      return this.isValid ? ee.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Fr;
    }
    /**
     * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toLocaleString(); //=> 4/20/2017
     * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
     * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
     * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
     * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
     * @return {string}
     */
    toLocaleString(e = w, n = {}) {
      return this.isValid ? ee.create(this.loc.clone(n), e).formatDateTime(this) : Fr;
    }
    /**
     * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
     * @example DateTime.now().toLocaleParts(); //=> [
     *                                   //=>   { type: 'day', value: '25' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'month', value: '05' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'year', value: '1982' }
     *                                   //=> ]
     */
    toLocaleParts(e = {}) {
      return this.isValid ? ee.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
     * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
     * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
     * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
     * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
     * @return {string|null}
     */
    toISO({
      format: e = "extended",
      suppressSeconds: n = !1,
      suppressMilliseconds: u = !1,
      includeOffset: c = !0,
      extendedZone: d = !1,
      precision: p = "milliseconds"
    } = {}) {
      if (!this.isValid)
        return null;
      p = At(p);
      const g = e === "extended";
      let v = Cr(this, g, p);
      return Wt.indexOf(p) >= 3 && (v += "T"), v += Ws(this, g, n, u, c, d, p), v;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @param {Object} opts - options
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
     * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
     * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
     * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
     * @return {string|null}
     */
    toISODate({
      format: e = "extended",
      precision: n = "day"
    } = {}) {
      return this.isValid ? Cr(this, e === "extended", At(n)) : null;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     * @return {string}
     */
    toISOWeekDate() {
      return $t(this, "kkkk-'W'WW-c");
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
     * @return {string}
     */
    toISOTime({
      suppressMilliseconds: e = !1,
      suppressSeconds: n = !1,
      includeOffset: u = !0,
      includePrefix: c = !1,
      extendedZone: d = !1,
      format: p = "extended",
      precision: g = "milliseconds"
    } = {}) {
      return this.isValid ? (g = At(g), (c && Wt.indexOf(g) >= 3 ? "T" : "") + Ws(this, p === "extended", n, e, u, d, g)) : null;
    }
    /**
     * Returns an RFC 2822-compatible string representation of this DateTime
     * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     * @return {string}
     */
    toRFC2822() {
      return $t(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
     * @return {string}
     */
    toHTTP() {
      return $t(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Date
     * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
     * @return {string|null}
     */
    toSQLDate() {
      return this.isValid ? Cr(this, !0) : null;
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Time
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc().toSQL() //=> '05:15:16.345'
     * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
     * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
     * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
     * @return {string}
     */
    toSQLTime({
      includeOffset: e = !0,
      includeZone: n = !1,
      includeOffsetSpace: u = !0
    } = {}) {
      let c = "HH:mm:ss.SSS";
      return (n || e) && (u && (c += " "), n ? c += "z" : e && (c += "ZZ")), $t(this, c, !0);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
     * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
     * @return {string}
     */
    toSQL(e = {}) {
      return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
    }
    /**
     * Returns a string representation of this DateTime appropriate for debugging
     * @return {string}
     */
    toString() {
      return this.isValid ? this.toISO() : Fr;
    }
    /**
     * Returns a string representation of this DateTime appropriate for the REPL.
     * @return {string}
     */
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
    }
    /**
     * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
     * @return {number}
     */
    valueOf() {
      return this.toMillis();
    }
    /**
     * Returns the epoch milliseconds of this DateTime.
     * @return {number}
     */
    toMillis() {
      return this.isValid ? this.ts : NaN;
    }
    /**
     * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
     * @return {number}
     */
    toSeconds() {
      return this.isValid ? this.ts / 1e3 : NaN;
    }
    /**
     * Returns the epoch seconds (as a whole number) of this DateTime.
     * @return {number}
     */
    toUnixInteger() {
      return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
    }
    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * @return {string}
     */
    toJSON() {
      return this.toISO();
    }
    /**
     * Returns a BSON serializable equivalent to this DateTime.
     * @return {Date}
     */
    toBSON() {
      return this.toJSDate();
    }
    /**
     * Returns a JavaScript object with this DateTime's year, month, day, and so on.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     * @return {Object}
     */
    toObject(e = {}) {
      if (!this.isValid) return {};
      const n = {
        ...this.c
      };
      return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
    }
    /**
     * Returns a JavaScript Date equivalent to this DateTime.
     * @return {Date}
     */
    toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }
    // COMPARE
    /**
     * Return the difference between two DateTimes as a Duration.
     * @param {DateTime} otherDateTime - the DateTime to compare this one to
     * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * var i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     * @return {Duration}
     */
    diff(e, n = "milliseconds", u = {}) {
      if (!this.isValid || !e.isValid)
        return R.invalid("created by diffing an invalid DateTime");
      const c = {
        locale: this.locale,
        numberingSystem: this.numberingSystem,
        ...u
      }, d = Wa(n).map(R.normalizeUnit), p = e.valueOf() > this.valueOf(), g = p ? this : e, v = p ? e : this, E = Ru(g, v, d, c);
      return p ? E.negate() : E;
    }
    /**
     * Return the difference between this DateTime and right now.
     * See {@link DateTime#diff}
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    diffNow(e = "milliseconds", n = {}) {
      return this.diff(W.now(), e, n);
    }
    /**
     * Return an Interval spanning between this DateTime and another DateTime
     * @param {DateTime} otherDateTime - the other end point of the Interval
     * @return {Interval|DateTime}
     */
    until(e) {
      return this.isValid ? H.fromDateTimes(this, e) : this;
    }
    /**
     * Return whether this DateTime is in the same unit of time as another DateTime.
     * Higher-order units must also be identical for this function to return `true`.
     * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
     * @param {DateTime} otherDateTime - the other DateTime
     * @param {string} unit - the unit of time to check sameness on
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
     * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
     * @return {boolean}
     */
    hasSame(e, n, u) {
      if (!this.isValid) return !1;
      const c = e.valueOf(), d = this.setZone(e.zone, {
        keepLocalTime: !0
      });
      return d.startOf(n, u) <= c && c <= d.endOf(n, u);
    }
    /**
     * Equality check
     * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
     * To compare just the millisecond values, use `+dt1 === +dt2`.
     * @param {DateTime} other - the other DateTime
     * @return {boolean}
     */
    equals(e) {
      return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
    }
    /**
     * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
     * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
     * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
     * @param {boolean} [options.round=true] - whether to round the numbers in the output.
     * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
     * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
     * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
     * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
     * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
     * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
     * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
     */
    toRelative(e = {}) {
      if (!this.isValid) return null;
      const n = e.base || W.fromObject({}, {
        zone: this.zone
      }), u = e.padding ? this < n ? -e.padding : e.padding : 0;
      let c = ["years", "months", "days", "hours", "minutes", "seconds"], d = e.unit;
      return Array.isArray(e.unit) && (c = e.unit, d = void 0), Us(n, this.plus(u), {
        ...e,
        numeric: "always",
        units: c,
        unit: d
      });
    }
    /**
     * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
     * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
     * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
     * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
     */
    toRelativeCalendar(e = {}) {
      return this.isValid ? Us(e.base || W.fromObject({}, {
        zone: this.zone
      }), this, {
        ...e,
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: !0
      }) : null;
    }
    /**
     * Return the min of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
     * @return {DateTime} the min DateTime, or undefined if called with no argument
     */
    static min(...e) {
      if (!e.every(W.isDateTime))
        throw new f("min requires all arguments be DateTimes");
      return ts(e, (n) => n.valueOf(), Math.min);
    }
    /**
     * Return the max of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
     * @return {DateTime} the max DateTime, or undefined if called with no argument
     */
    static max(...e) {
      if (!e.every(W.isDateTime))
        throw new f("max requires all arguments be DateTimes");
      return ts(e, (n) => n.valueOf(), Math.max);
    }
    // MISC
    /**
     * Explain how a string would be parsed by fromFormat()
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} options - options taken by fromFormat()
     * @return {Object}
     */
    static fromFormatExplain(e, n, u = {}) {
      const {
        locale: c = null,
        numberingSystem: d = null
      } = u, p = z.fromOpts({
        locale: c,
        numberingSystem: d,
        defaultToEN: !0
      });
      return Ns(p, e, n);
    }
    /**
     * @deprecated use fromFormatExplain instead
     */
    static fromStringExplain(e, n, u = {}) {
      return W.fromFormatExplain(e, n, u);
    }
    /**
     * Build a parser for `fmt` using the given locale. This parser can be passed
     * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
     * can be used to optimize cases where many dates need to be parsed in a
     * specific format.
     *
     * @param {String} fmt - the format the string is expected to be in (see
     * description)
     * @param {Object} options - options used to set locale and numberingSystem
     * for parser
     * @returns {TokenParser} - opaque object to be used
     */
    static buildFormatParser(e, n = {}) {
      const {
        locale: u = null,
        numberingSystem: c = null
      } = n, d = z.fromOpts({
        locale: u,
        numberingSystem: c,
        defaultToEN: !0
      });
      return new Cs(d, e);
    }
    /**
     * Create a DateTime from an input string and format parser.
     *
     * The format parser must have been created with the same locale as this call.
     *
     * @param {String} text - the string to parse
     * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
     * @param {Object} opts - options taken by fromFormat()
     * @returns {DateTime}
     */
    static fromFormatParser(e, n, u = {}) {
      if ($(e) || $(n))
        throw new f("fromFormatParser requires an input string and a format parser");
      const {
        locale: c = null,
        numberingSystem: d = null
      } = u, p = z.fromOpts({
        locale: c,
        numberingSystem: d,
        defaultToEN: !0
      });
      if (!p.equals(n.locale))
        throw new f(`fromFormatParser called with a locale of ${p}, but the format parser was created for ${n.locale}`);
      const {
        result: g,
        zone: v,
        specificOffset: E,
        invalidReason: V
      } = n.explainFromTokens(e);
      return V ? W.invalid(V) : Ge(g, v, u, `format ${n.format}`, e, E);
    }
    // FORMAT PRESETS
    /**
     * {@link DateTime#toLocaleString} format like 10/14/1983
     * @type {Object}
     */
    static get DATE_SHORT() {
      return w;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
    static get DATE_MED() {
      return x;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
    static get DATE_MED_WITH_WEEKDAY() {
      return O;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
    static get DATE_FULL() {
      return _;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
    static get DATE_HUGE() {
      return S;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_SIMPLE() {
      return T;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_SECONDS() {
      return k;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_SHORT_OFFSET() {
      return D;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_LONG_OFFSET() {
      return N;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_SIMPLE() {
      return I;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_SECONDS() {
      return C;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_SHORT_OFFSET() {
      return M;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_LONG_OFFSET() {
      return q;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_SHORT() {
      return P;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_SHORT_WITH_SECONDS() {
      return B;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED() {
      return ne;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED_WITH_SECONDS() {
      return Se;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED_WITH_WEEKDAY() {
      return Ee;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_FULL() {
      return Te;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_FULL_WITH_SECONDS() {
      return ge;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_HUGE() {
      return we;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_HUGE_WITH_SECONDS() {
      return ve;
    }
  }
  function vt(s) {
    if (W.isDateTime(s))
      return s;
    if (s && s.valueOf && De(s.valueOf()))
      return W.fromJSDate(s);
    if (s && typeof s == "object")
      return W.fromObject(s);
    throw new f(`Unknown datetime argument: ${s}, of type ${typeof s}`);
  }
  const so = "3.7.2";
  return re.DateTime = W, re.Duration = R, re.FixedOffsetZone = X, re.IANAZone = me, re.Info = pt, re.Interval = H, re.InvalidZone = In, re.Settings = j, re.SystemZone = Oe, re.VERSION = so, re.Zone = se, re;
}
var ln, Ai;
function fc() {
  if (Ai) return ln;
  Ai = 1;
  var o = /* @__PURE__ */ cc();
  t.prototype.addYear = function() {
    this._date = this._date.plus({ years: 1 });
  }, t.prototype.addMonth = function() {
    this._date = this._date.plus({ months: 1 }).startOf("month");
  }, t.prototype.addDay = function() {
    this._date = this._date.plus({ days: 1 }).startOf("day");
  }, t.prototype.addHour = function() {
    var r = this._date;
    this._date = this._date.plus({ hours: 1 }).startOf("hour"), this._date <= r && (this._date = this._date.plus({ hours: 1 }));
  }, t.prototype.addMinute = function() {
    var r = this._date;
    this._date = this._date.plus({ minutes: 1 }).startOf("minute"), this._date < r && (this._date = this._date.plus({ hours: 1 }));
  }, t.prototype.addSecond = function() {
    var r = this._date;
    this._date = this._date.plus({ seconds: 1 }).startOf("second"), this._date < r && (this._date = this._date.plus({ hours: 1 }));
  }, t.prototype.subtractYear = function() {
    this._date = this._date.minus({ years: 1 });
  }, t.prototype.subtractMonth = function() {
    this._date = this._date.minus({ months: 1 }).endOf("month").startOf("second");
  }, t.prototype.subtractDay = function() {
    this._date = this._date.minus({ days: 1 }).endOf("day").startOf("second");
  }, t.prototype.subtractHour = function() {
    var r = this._date;
    this._date = this._date.minus({ hours: 1 }).endOf("hour").startOf("second"), this._date >= r && (this._date = this._date.minus({ hours: 1 }));
  }, t.prototype.subtractMinute = function() {
    var r = this._date;
    this._date = this._date.minus({ minutes: 1 }).endOf("minute").startOf("second"), this._date > r && (this._date = this._date.minus({ hours: 1 }));
  }, t.prototype.subtractSecond = function() {
    var r = this._date;
    this._date = this._date.minus({ seconds: 1 }).startOf("second"), this._date > r && (this._date = this._date.minus({ hours: 1 }));
  }, t.prototype.getDate = function() {
    return this._date.day;
  }, t.prototype.getFullYear = function() {
    return this._date.year;
  }, t.prototype.getDay = function() {
    var r = this._date.weekday;
    return r == 7 ? 0 : r;
  }, t.prototype.getMonth = function() {
    return this._date.month - 1;
  }, t.prototype.getHours = function() {
    return this._date.hour;
  }, t.prototype.getMinutes = function() {
    return this._date.minute;
  }, t.prototype.getSeconds = function() {
    return this._date.second;
  }, t.prototype.getMilliseconds = function() {
    return this._date.millisecond;
  }, t.prototype.getTime = function() {
    return this._date.valueOf();
  }, t.prototype.getUTCDate = function() {
    return this._getUTC().day;
  }, t.prototype.getUTCFullYear = function() {
    return this._getUTC().year;
  }, t.prototype.getUTCDay = function() {
    var r = this._getUTC().weekday;
    return r == 7 ? 0 : r;
  }, t.prototype.getUTCMonth = function() {
    return this._getUTC().month - 1;
  }, t.prototype.getUTCHours = function() {
    return this._getUTC().hour;
  }, t.prototype.getUTCMinutes = function() {
    return this._getUTC().minute;
  }, t.prototype.getUTCSeconds = function() {
    return this._getUTC().second;
  }, t.prototype.toISOString = function() {
    return this._date.toUTC().toISO();
  }, t.prototype.toJSON = function() {
    return this._date.toJSON();
  }, t.prototype.setDate = function(r) {
    this._date = this._date.set({ day: r });
  }, t.prototype.setFullYear = function(r) {
    this._date = this._date.set({ year: r });
  }, t.prototype.setDay = function(r) {
    this._date = this._date.set({ weekday: r });
  }, t.prototype.setMonth = function(r) {
    this._date = this._date.set({ month: r + 1 });
  }, t.prototype.setHours = function(r) {
    this._date = this._date.set({ hour: r });
  }, t.prototype.setMinutes = function(r) {
    this._date = this._date.set({ minute: r });
  }, t.prototype.setSeconds = function(r) {
    this._date = this._date.set({ second: r });
  }, t.prototype.setMilliseconds = function(r) {
    this._date = this._date.set({ millisecond: r });
  }, t.prototype._getUTC = function() {
    return this._date.toUTC();
  }, t.prototype.toString = function() {
    return this.toDate().toString();
  }, t.prototype.toDate = function() {
    return this._date.toJSDate();
  }, t.prototype.isLastDayOfMonth = function() {
    var r = this._date.plus({ days: 1 }).startOf("day");
    return this._date.month !== r.month;
  }, t.prototype.isLastWeekdayOfMonth = function() {
    var r = this._date.plus({ days: 7 }).startOf("day");
    return this._date.month !== r.month;
  };
  function t(r, a) {
    var i = { zone: a };
    if (r ? r instanceof t ? this._date = r._date : r instanceof Date ? this._date = o.DateTime.fromJSDate(r, i) : typeof r == "number" ? this._date = o.DateTime.fromMillis(r, i) : typeof r == "string" && (this._date = o.DateTime.fromISO(r, i), this._date.isValid || (this._date = o.DateTime.fromRFC2822(r, i)), this._date.isValid || (this._date = o.DateTime.fromSQL(r, i)), this._date.isValid || (this._date = o.DateTime.fromFormat(r, "EEE, d MMM yyyy HH:mm:ss", i))) : this._date = o.DateTime.local(), !this._date || !this._date.isValid)
      throw new Error("CronDate: unhandled timestamp: " + JSON.stringify(r));
    a && a !== this._date.zoneName && (this._date = this._date.setZone(a));
  }
  return ln = t, ln;
}
var cn, qi;
function dc() {
  if (qi) return cn;
  qi = 1;
  function o(i) {
    return {
      start: i,
      count: 1
    };
  }
  function t(i, l) {
    i.end = l, i.step = l - i.start, i.count = 2;
  }
  function r(i, l, f) {
    l && (l.count === 2 ? (i.push(o(l.start)), i.push(o(l.end))) : i.push(l)), f && i.push(f);
  }
  function a(i) {
    for (var l = [], f = void 0, y = 0; y < i.length; y++) {
      var h = i[y];
      typeof h != "number" ? (r(l, f, o(h)), f = void 0) : f ? f.count === 1 ? t(f, h) : f.step === h - f.end ? (f.count++, f.end = h) : f.count === 2 ? (l.push(o(f.start)), f = o(f.end), t(f, h)) : (r(l, f), f = o(h)) : f = o(h);
    }
    return r(l, f), l;
  }
  return cn = a, cn;
}
var fn, Ri;
function hc() {
  if (Ri) return fn;
  Ri = 1;
  var o = dc();
  function t(r, a, i) {
    var l = o(r);
    if (l.length === 1) {
      var f = l[0], y = f.step;
      if (y === 1 && f.start === a && f.end === i)
        return "*";
      if (y !== 1 && f.start === a && f.end === i - y + 1)
        return "*/" + y;
    }
    for (var h = [], b = 0, m = l.length; b < m; ++b) {
      var w = l[b];
      if (w.count === 1) {
        h.push(w.start);
        continue;
      }
      var y = w.step;
      if (w.step === 1) {
        h.push(w.start + "-" + w.end);
        continue;
      }
      var x = w.start == 0 ? w.count - 1 : w.count;
      w.step * x > w.end ? h = h.concat(
        Array.from({ length: w.end - w.start + 1 }).map(function(_, S) {
          var T = w.start + S;
          return (T - w.start) % w.step === 0 ? T : null;
        }).filter(function(_) {
          return _ != null;
        })
      ) : w.end === i - w.step + 1 ? h.push(w.start + "/" + w.step) : h.push(w.start + "-" + w.end + "/" + w.step);
    }
    return h.join(",");
  }
  return fn = t, fn;
}
var dn, Ui;
function mc() {
  if (Ui) return dn;
  Ui = 1;
  var o = fc(), t = hc(), r = 1e4;
  function a(i, l) {
    this._options = l, this._utc = l.utc || !1, this._tz = this._utc ? "UTC" : l.tz, this._currentDate = new o(l.currentDate, this._tz), this._startDate = l.startDate ? new o(l.startDate, this._tz) : null, this._endDate = l.endDate ? new o(l.endDate, this._tz) : null, this._isIterator = l.iterator || !1, this._hasIterated = !1, this._nthDayOfWeek = l.nthDayOfWeek || 0, this.fields = a._freezeFields(i);
  }
  return a.map = ["second", "minute", "hour", "dayOfMonth", "month", "dayOfWeek"], a.predefined = {
    "@yearly": "0 0 1 1 *",
    "@monthly": "0 0 1 * *",
    "@weekly": "0 0 * * 0",
    "@daily": "0 0 * * *",
    "@hourly": "0 * * * *"
  }, a.constraints = [
    { min: 0, max: 59, chars: [] },
    // Second
    { min: 0, max: 59, chars: [] },
    // Minute
    { min: 0, max: 23, chars: [] },
    // Hour
    { min: 1, max: 31, chars: ["L"] },
    // Day of month
    { min: 1, max: 12, chars: [] },
    // Month
    { min: 0, max: 7, chars: ["L"] }
    // Day of week
  ], a.daysInMonth = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ], a.aliases = {
    month: {
      jan: 1,
      feb: 2,
      mar: 3,
      apr: 4,
      may: 5,
      jun: 6,
      jul: 7,
      aug: 8,
      sep: 9,
      oct: 10,
      nov: 11,
      dec: 12
    },
    dayOfWeek: {
      sun: 0,
      mon: 1,
      tue: 2,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6
    }
  }, a.parseDefaults = ["0", "*", "*", "*", "*", "*"], a.standardValidCharacters = /^[,*\d/-]+$/, a.dayOfWeekValidCharacters = /^[?,*\dL#/-]+$/, a.dayOfMonthValidCharacters = /^[?,*\dL/-]+$/, a.validCharacters = {
    second: a.standardValidCharacters,
    minute: a.standardValidCharacters,
    hour: a.standardValidCharacters,
    dayOfMonth: a.dayOfMonthValidCharacters,
    month: a.standardValidCharacters,
    dayOfWeek: a.dayOfWeekValidCharacters
  }, a._isValidConstraintChar = function(l, f) {
    return typeof f != "string" ? !1 : l.chars.some(function(y) {
      return f.indexOf(y) > -1;
    });
  }, a._parseField = function(l, f, y) {
    switch (l) {
      case "month":
      case "dayOfWeek":
        var h = a.aliases[l];
        f = f.replace(/[a-z]{3}/gi, function(x) {
          if (x = x.toLowerCase(), typeof h[x] < "u")
            return h[x];
          throw new Error('Validation error, cannot resolve alias "' + x + '"');
        });
        break;
    }
    if (!a.validCharacters[l].test(f))
      throw new Error("Invalid characters, got value: " + f);
    f.indexOf("*") !== -1 ? f = f.replace(/\*/g, y.min + "-" + y.max) : f.indexOf("?") !== -1 && (f = f.replace(/\?/g, y.min + "-" + y.max));
    function b(x) {
      var O = [];
      function _(D) {
        if (D instanceof Array)
          for (var N = 0, I = D.length; N < I; N++) {
            var C = D[N];
            if (a._isValidConstraintChar(y, C)) {
              O.push(C);
              continue;
            }
            if (typeof C != "number" || Number.isNaN(C) || C < y.min || C > y.max)
              throw new Error(
                "Constraint error, got value " + C + " expected range " + y.min + "-" + y.max
              );
            O.push(C);
          }
        else {
          if (a._isValidConstraintChar(y, D)) {
            O.push(D);
            return;
          }
          var M = +D;
          if (Number.isNaN(M) || M < y.min || M > y.max)
            throw new Error(
              "Constraint error, got value " + D + " expected range " + y.min + "-" + y.max
            );
          l === "dayOfWeek" && (M = M % 7), O.push(M);
        }
      }
      var S = x.split(",");
      if (!S.every(function(D) {
        return D.length > 0;
      }))
        throw new Error("Invalid list value format");
      if (S.length > 1)
        for (var T = 0, k = S.length; T < k; T++)
          _(m(S[T]));
      else
        _(m(x));
      return O.sort(a._sortCompareFn), O;
    }
    function m(x) {
      var O = 1, _ = x.split("/");
      if (_.length > 2)
        throw new Error("Invalid repeat: " + x);
      return _.length > 1 ? (_[0] == +_[0] && (_ = [_[0] + "-" + y.max, _[1]]), w(_[0], _[_.length - 1])) : w(x, O);
    }
    function w(x, O) {
      var _ = [], S = x.split("-");
      if (S.length > 1) {
        if (S.length < 2)
          return +x;
        if (!S[0].length) {
          if (!S[1].length)
            throw new Error("Invalid range: " + x);
          return +x;
        }
        var T = +S[0], k = +S[1];
        if (Number.isNaN(T) || Number.isNaN(k) || T < y.min || k > y.max)
          throw new Error(
            "Constraint error, got range " + T + "-" + k + " expected range " + y.min + "-" + y.max
          );
        if (T > k)
          throw new Error("Invalid range: " + x);
        var D = +O;
        if (Number.isNaN(D) || D <= 0)
          throw new Error("Constraint error, cannot repeat at every " + D + " time.");
        l === "dayOfWeek" && k % 7 === 0 && _.push(0);
        for (var N = T, I = k; N <= I; N++) {
          var C = _.indexOf(N) !== -1;
          !C && D > 0 && D % O === 0 ? (D = 1, _.push(N)) : D++;
        }
        return _;
      }
      return Number.isNaN(+x) ? x : +x;
    }
    return b(f);
  }, a._sortCompareFn = function(i, l) {
    var f = typeof i == "number", y = typeof l == "number";
    return f && y ? i - l : !f && y ? 1 : f && !y ? -1 : i.localeCompare(l);
  }, a._handleMaxDaysInMonth = function(i) {
    if (i.month.length === 1) {
      var l = a.daysInMonth[i.month[0] - 1];
      if (i.dayOfMonth[0] > l)
        throw new Error("Invalid explicit day of month definition");
      return i.dayOfMonth.filter(function(f) {
        return f === "L" ? !0 : f <= l;
      }).sort(a._sortCompareFn);
    }
  }, a._freezeFields = function(i) {
    for (var l = 0, f = a.map.length; l < f; ++l) {
      var y = a.map[l], h = i[y];
      i[y] = Object.freeze(h);
    }
    return Object.freeze(i);
  }, a.prototype._applyTimezoneShift = function(i, l, f) {
    if (f === "Month" || f === "Day") {
      var y = i.getTime();
      i[l + f]();
      var h = i.getTime();
      y === h && (i.getMinutes() === 0 && i.getSeconds() === 0 ? i.addHour() : i.getMinutes() === 59 && i.getSeconds() === 59 && i.subtractHour());
    } else {
      var b = i.getHours();
      i[l + f]();
      var m = i.getHours(), w = m - b;
      w === 2 ? this.fields.hour.length !== 24 && (this._dstStart = m) : w === 0 && i.getMinutes() === 0 && i.getSeconds() === 0 && this.fields.hour.length !== 24 && (this._dstEnd = m);
    }
  }, a.prototype._findSchedule = function(l) {
    function f(C, M) {
      for (var q = 0, P = M.length; q < P; q++)
        if (M[q] >= C)
          return M[q] === C;
      return M[0] === C;
    }
    function y(C, M) {
      if (M < 6) {
        if (C.getDate() < 8 && M === 1)
          return !0;
        var q = C.getDate() % 7 ? 1 : 0, P = C.getDate() - C.getDate() % 7, B = Math.floor(P / 7) + q;
        return B === M;
      }
      return !1;
    }
    function h(C) {
      return C.length > 0 && C.some(function(M) {
        return typeof M == "string" && M.indexOf("L") >= 0;
      });
    }
    l = l || !1;
    var b = l ? "subtract" : "add", m = new o(this._currentDate, this._tz), w = this._startDate, x = this._endDate, O = m.getTime(), _ = 0;
    function S(C) {
      return C.some(function(M) {
        if (!h([M]))
          return !1;
        var q = Number.parseInt(M[0]) % 7;
        if (Number.isNaN(q))
          throw new Error("Invalid last weekday of the month expression: " + M);
        return m.getDay() === q && m.isLastWeekdayOfMonth();
      });
    }
    for (; _ < r; ) {
      if (_++, l) {
        if (w && m.getTime() - w.getTime() < 0)
          throw new Error("Out of the timespan range");
      } else if (x && x.getTime() - m.getTime() < 0)
        throw new Error("Out of the timespan range");
      var T = f(m.getDate(), this.fields.dayOfMonth);
      h(this.fields.dayOfMonth) && (T = T || m.isLastDayOfMonth());
      var k = f(m.getDay(), this.fields.dayOfWeek);
      h(this.fields.dayOfWeek) && (k = k || S(this.fields.dayOfWeek));
      var D = this.fields.dayOfMonth.length >= a.daysInMonth[m.getMonth()], N = this.fields.dayOfWeek.length === a.constraints[5].max - a.constraints[5].min + 1, I = m.getHours();
      if (!T && (!k || N)) {
        this._applyTimezoneShift(m, b, "Day");
        continue;
      }
      if (!D && N && !T) {
        this._applyTimezoneShift(m, b, "Day");
        continue;
      }
      if (D && !N && !k) {
        this._applyTimezoneShift(m, b, "Day");
        continue;
      }
      if (this._nthDayOfWeek > 0 && !y(m, this._nthDayOfWeek)) {
        this._applyTimezoneShift(m, b, "Day");
        continue;
      }
      if (!f(m.getMonth() + 1, this.fields.month)) {
        this._applyTimezoneShift(m, b, "Month");
        continue;
      }
      if (f(I, this.fields.hour)) {
        if (this._dstEnd === I && !l) {
          this._dstEnd = null, this._applyTimezoneShift(m, "add", "Hour");
          continue;
        }
      } else if (this._dstStart !== I) {
        this._dstStart = null, this._applyTimezoneShift(m, b, "Hour");
        continue;
      } else if (!f(I - 1, this.fields.hour)) {
        m[b + "Hour"]();
        continue;
      }
      if (!f(m.getMinutes(), this.fields.minute)) {
        this._applyTimezoneShift(m, b, "Minute");
        continue;
      }
      if (!f(m.getSeconds(), this.fields.second)) {
        this._applyTimezoneShift(m, b, "Second");
        continue;
      }
      if (O === m.getTime()) {
        b === "add" || m.getMilliseconds() === 0 ? this._applyTimezoneShift(m, b, "Second") : m.setMilliseconds(0);
        continue;
      }
      break;
    }
    if (_ >= r)
      throw new Error("Invalid expression, loop limit exceeded");
    return this._currentDate = new o(m, this._tz), this._hasIterated = !0, m;
  }, a.prototype.next = function() {
    var l = this._findSchedule();
    return this._isIterator ? {
      value: l,
      done: !this.hasNext()
    } : l;
  }, a.prototype.prev = function() {
    var l = this._findSchedule(!0);
    return this._isIterator ? {
      value: l,
      done: !this.hasPrev()
    } : l;
  }, a.prototype.hasNext = function() {
    var i = this._currentDate, l = this._hasIterated;
    try {
      return this._findSchedule(), !0;
    } catch {
      return !1;
    } finally {
      this._currentDate = i, this._hasIterated = l;
    }
  }, a.prototype.hasPrev = function() {
    var i = this._currentDate, l = this._hasIterated;
    try {
      return this._findSchedule(!0), !0;
    } catch {
      return !1;
    } finally {
      this._currentDate = i, this._hasIterated = l;
    }
  }, a.prototype.iterate = function(l, f) {
    var y = [];
    if (l >= 0)
      for (var h = 0, b = l; h < b; h++)
        try {
          var m = this.next();
          y.push(m), f && f(m, h);
        } catch {
          break;
        }
    else
      for (var h = 0, b = l; h > b; h--)
        try {
          var m = this.prev();
          y.push(m), f && f(m, h);
        } catch {
          break;
        }
    return y;
  }, a.prototype.reset = function(l) {
    this._currentDate = new o(l || this._options.currentDate);
  }, a.prototype.stringify = function(l) {
    for (var f = [], y = l ? 0 : 1, h = a.map.length; y < h; ++y) {
      var b = a.map[y], m = this.fields[b], w = a.constraints[y];
      b === "dayOfMonth" && this.fields.month.length === 1 ? w = { min: 1, max: a.daysInMonth[this.fields.month[0] - 1] } : b === "dayOfWeek" && (w = { min: 0, max: 6 }, m = m[m.length - 1] === 7 ? m.slice(0, -1) : m), f.push(t(m, w.min, w.max));
    }
    return f.join(" ");
  }, a.parse = function(l, f) {
    var y = this;
    typeof f == "function" && (f = {});
    function h(b, m) {
      m || (m = {}), typeof m.currentDate > "u" && (m.currentDate = new o(void 0, y._tz)), a.predefined[b] && (b = a.predefined[b]);
      var w = [], x = (b + "").trim().split(/\s+/);
      if (x.length > 6)
        throw new Error("Invalid cron expression");
      for (var O = a.map.length - x.length, _ = 0, S = a.map.length; _ < S; ++_) {
        var T = a.map[_], k = x[x.length > S ? _ : _ - O];
        if (_ < O || !k)
          w.push(
            a._parseField(
              T,
              a.parseDefaults[_],
              a.constraints[_]
            )
          );
        else {
          var D = T === "dayOfWeek" ? M(k) : k;
          w.push(
            a._parseField(
              T,
              D,
              a.constraints[_]
            )
          );
        }
      }
      for (var N = {}, _ = 0, S = a.map.length; _ < S; _++) {
        var I = a.map[_];
        N[I] = w[_];
      }
      var C = a._handleMaxDaysInMonth(N);
      return N.dayOfMonth = C || N.dayOfMonth, new a(N, m);
      function M(q) {
        var P = q.split("#");
        if (P.length > 1) {
          var B = +P[P.length - 1];
          if (/,/.test(q))
            throw new Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");
          if (/\//.test(q))
            throw new Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");
          if (/-/.test(q))
            throw new Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");
          if (P.length > 2 || Number.isNaN(B) || B < 1 || B > 5)
            throw new Error("Constraint error, invalid dayOfWeek occurrence number (#)");
          return m.nthDayOfWeek = B, P[0];
        }
        return q;
      }
    }
    return h(l, f);
  }, a.fieldsToExpression = function(l, f) {
    function y(T, k, D) {
      if (!k)
        throw new Error("Validation error, Field " + T + " is missing");
      if (k.length === 0)
        throw new Error("Validation error, Field " + T + " contains no values");
      for (var N = 0, I = k.length; N < I; N++) {
        var C = k[N];
        if (!a._isValidConstraintChar(D, C) && (typeof C != "number" || Number.isNaN(C) || C < D.min || C > D.max))
          throw new Error(
            "Constraint error, got value " + C + " expected range " + D.min + "-" + D.max
          );
      }
    }
    for (var h = {}, b = 0, m = a.map.length; b < m; ++b) {
      var w = a.map[b], x = l[w];
      y(
        w,
        x,
        a.constraints[b]
      );
      for (var O = [], _ = -1; ++_ < x.length; )
        O[_] = x[_];
      if (x = O.sort(a._sortCompareFn).filter(function(T, k, D) {
        return !k || T !== D[k - 1];
      }), x.length !== O.length)
        throw new Error("Validation error, Field " + w + " contains duplicate values");
      h[w] = x;
    }
    var S = a._handleMaxDaysInMonth(h);
    return h.dayOfMonth = S || h.dayOfMonth, new a(h, f || {});
  }, dn = a, dn;
}
var hn, Pi;
function yc() {
  if (Pi) return hn;
  Pi = 1;
  var o = mc();
  function t() {
  }
  return t._parseEntry = function(a) {
    var i = a.split(" ");
    if (i.length === 6)
      return {
        interval: o.parse(a)
      };
    if (i.length > 6)
      return {
        interval: o.parse(
          i.slice(0, 6).join(" ")
        ),
        command: i.slice(6, i.length)
      };
    throw new Error("Invalid entry: " + a);
  }, t.parseExpression = function(a, i) {
    return o.parse(a, i);
  }, t.fieldsToExpression = function(a, i) {
    return o.fieldsToExpression(a, i);
  }, t.parseString = function(a) {
    for (var i = a.split(`
`), l = {
      variables: {},
      expressions: [],
      errors: {}
    }, f = 0, y = i.length; f < y; f++) {
      var h = i[f], b = null, m = h.trim();
      if (m.length > 0) {
        if (m.match(/^#/))
          continue;
        if (b = m.match(/^(.*)=(.*)$/))
          l.variables[b[1]] = b[2];
        else {
          var w = null;
          try {
            w = t._parseEntry("0 " + m), l.expressions.push(w.interval);
          } catch (x) {
            l.errors[m] = x;
          }
        }
      }
    }
    return l;
  }, t.parseFile = function(a, i) {
    mo.readFile(a, function(l, f) {
      if (l) {
        i(l);
        return;
      }
      return i(null, t.parseString(f.toString()));
    });
  }, hn = t, hn;
}
var pc = yc();
const gc = /* @__PURE__ */ Ve(pc), zi = "(Input cron: ", wc = {
  "smaller than lower limit": "less than",
  "bigger than upper limit": "greater than",
  daysOfMonth: "'days of the month'",
  daysOfWeek: "'days of the week'",
  years: "'years'",
  months: "'months'",
  hours: "'hours'",
  minutes: "'minutes'",
  seconds: "'seconds'"
};
function vc(o, t) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
    timeZone: t
  }).format(o);
}
function Oc(o) {
  const t = [];
  for (let r of o) {
    r.includes(zi) && (r = r.split(zi)[0].trim());
    for (let [a, i] of Object.entries(wc))
      r.includes(a) && (r = r.replace(new RegExp(a, "g"), i));
    t.push(r);
  }
  return t;
}
function bc(o, t = 4, r) {
  const a = gc.parseExpression(
    o,
    r ? { tz: r } : void 0
  ), i = [];
  for (let l = 0; l < t; l++)
    i.push(vc(a.next().toDate(), r));
  return i;
}
function _c(o) {
  const t = lc(o, {
    preset: "npm-cron-schedule",
    override: {
      useSeconds: !1
    }
  });
  return t.isValid() ? { valid: !0 } : { valid: !1, err: Oc(t.getError()) };
}
function xc(o) {
  function t(a) {
    if (typeof a != "object" || a === null)
      return a;
    const i = { ...a };
    if (i.type === "object" && (i.additionalProperties = !1, i.properties && typeof i.properties == "object" && i.properties !== null)) {
      const l = i.properties, f = [], y = {};
      for (const [m, w] of Object.entries(l))
        if (typeof w == "object" && w !== null) {
          const x = w;
          if (x.required === !0) {
            f.push(m);
            const { required: O, ..._ } = x;
            y[m] = t(_);
          } else
            y[m] = t(x);
        } else
          y[m] = w;
      i.properties = y;
      const h = Array.isArray(i.required) ? i.required : [], b = [
        .../* @__PURE__ */ new Set([...h, ...f])
      ];
      b.length > 0 ? i.required = b : i.required = Object.keys(y);
    }
    i.type === "array" && i.items && typeof i.items == "object" && i.items !== null && (i.items = t(i.items));
    for (const l of ["anyOf", "oneOf", "allOf"])
      Array.isArray(i[l]) && (i[l] = i[l].map(
        (f) => t(f)
      ));
    return i;
  }
  let r = t(o);
  return r.type === "array" ? r = {
    type: "object",
    properties: {
      items: r
    },
    required: ["items"],
    additionalProperties: !1
  } : r.type !== "object" && (r = {
    type: "object",
    properties: {
      value: r
    },
    required: ["value"],
    additionalProperties: !1
  }), r;
}
const kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  normalizeSchemaForStructuredOutput: xc
}, Symbol.toStringTag, { value: "Module" }));
function Sc(o) {
  return `${yo.ROLE}${po}${o}`;
}
function Ec(o) {
  const t = /* @__PURE__ */ new Map();
  o.forEach((l) => {
    t.set(l._id, l);
  });
  const r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  function i(l) {
    const f = Sc(l);
    if (a.has(l) || a.has(f))
      return !0;
    if (r.has(l) || r.has(f))
      return !1;
    a.add(l);
    const y = t.get(f) || t.get(l);
    if (!y)
      return a.delete(l), !1;
    const h = Array.isArray(y.inherits) ? y.inherits : [y.inherits];
    for (const b of h)
      if (b && i(b))
        return !0;
    return a.delete(l), r.add(l), !1;
  }
  return !!o.find((l) => i(l._id));
}
const Tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkForRoleInheritanceLoops: Ec
}, Symbol.toStringTag, { value: "Module" }));
function Fc(o) {
  return o.length === 0 ? "" : o.length === 1 ? o[0] : o.length === 2 ? o.join(" and ") : o.slice(0, -1).join(", ") + " and " + o[o.length - 1];
}
const Dc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  punctuateList: Fc
}, Symbol.toStringTag, { value: "Module" })), Mc = (o, t) => {
  const r = new RegExp("\\s(\\d+)$"), a = o.split(r)[0], i = new RegExp(`${a}\\s(\\d+)$`), l = [];
  t.filter((y) => {
    if (y === a)
      return !0;
    const h = y.match(i);
    return h ? (l.push(parseInt(h[1])), !0) : !1;
  }), l.sort((y, h) => y - h);
  let f;
  if (l.length === 0)
    f = 1;
  else {
    for (let y = 0; y < l.length; y++)
      if (l[y] !== y + 1) {
        f = y + 1;
        break;
      }
    f || (f = l.length + 1);
  }
  return `${a} ${f}`;
}, Cc = (o, t, {
  getName: r,
  numberFirstItem: a,
  separator: i = ""
} = {}) => {
  if (!t?.length)
    return "";
  const l = t.trim(), f = a ? `${t}1` : l;
  if (!o?.length)
    return f;
  let y = 0;
  return o.forEach((h) => {
    const b = r?.(h) ?? h;
    if (typeof b != "string" || !b.startsWith(l))
      return;
    const m = b.split(l);
    if (m.length !== 2)
      return;
    m[1].trim() === "" && (m[1] = "1");
    const w = parseInt(m[1]);
    w > y && (y = w);
  }), y === 0 ? f : `${t}${i}${y + 1}`;
}, Nc = /{?{{([^{].*?)}}}?/g;
function Vc(o, t) {
  if (!t)
    return o;
  const r = o.match(Nc) ?? [], a = [];
  let i = o;
  for (const b of r) {
    const m = `:${b}`;
    i.includes(m) && (a.push(b), i = i.replace(m, ":0"));
  }
  const l = (b) => `__hbs${b}__`, f = r.filter((b) => !a.includes(b));
  i = f.reduce(
    (b, m, w) => b.replace(m, l(w)),
    i
  );
  const y = (b) => f.reduce((m, w, x) => m.replace(l(x), w), b), h = t.replace(/\/$/, "");
  try {
    const b = new URL(i), m = b.pathname === "/" ? "" : b.pathname;
    return h + y(m + b.search + b.hash);
  } catch {
    const b = y(i);
    return b.startsWith("/") ? h + b : h;
  }
}
const Ic = (o) => o ? o.startsWith("/") ? o : `/${o}` : "", Lc = (o) => o ? o.endsWith("/") ? o.slice(0, -1) : o : "", xe = (o, t) => {
  const r = Ic(t);
  if (!o)
    return r;
  const a = Lc(o);
  return r ? `${a}${r}` : a;
}, la = (o) => xe(o, Jt.ACCOUNT), ca = (o, t) => {
  const r = typeof t == "string" || t == null ? { tenantId: t } : t, a = xe(o, Jt.BILLING), i = new URLSearchParams();
  r?.tenantId && i.set("tenantId", r.tenantId), r?.purchasePrepaidAiCredits && i.set("purchasePrepaidAiCredits", "1");
  const l = i.toString();
  return l ? `${a}?${l}` : a;
}, fa = (o, t) => {
  if (t) {
    const r = xe(
      o,
      Jt.TENANTS
    ), a = encodeURIComponent(t);
    return `${r}?managePlansTenantId=${a}`;
  }
  return xe(o, Jt.UPGRADE);
}, da = (o) => xe(o, kt.BUILDER), ha = (o) => xe(o, kt.SETTINGS_EMAIL), ma = (o) => xe(o, kt.SETTINGS_AUTH), ya = (o) => xe(o, kt.SETTINGS_PEOPLE_USERS), pa = (o) => xe(o, kt.APPS), $c = {
  accountPortalAccountUrl: la,
  accountPortalBillingUrl: ca,
  accountPortalUpgradeUrl: fa,
  builderUrl: da,
  builderSettingsEmailUrl: ha,
  builderSettingsAuthUrl: ma,
  builderSettingsPeopleUsersUrl: ya,
  portalUrl: pa
};
function Wc(o, t = "") {
  const r = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let i = 0, l = typeof o == "string" ? parseInt(o, 10) : o || 0;
  for (; l >= 1024 && i < r.length - 1 && ++i; )
    l /= 1024;
  return `${l.toFixed(l < 10 && i > 0 ? 1 : 0)}${t}${r[i]}`;
}
function Ac(o) {
  return /^{{\s*env\.([^\s]+)\s*}}$/.test(String(o));
}
const qc = { getNextExecutionDates: bc, validate: _c }, Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  accountPortalAccountUrl: la,
  accountPortalBillingUrl: ca,
  accountPortalUpgradeUrl: fa,
  applyBaseUrl: Vc,
  builderSettingsAuthUrl: ma,
  builderSettingsEmailUrl: ha,
  builderSettingsPeopleUsersUrl: ya,
  builderUrl: da,
  cancelableTimeout: go,
  cron: qc,
  deepGet: wo,
  duplicateName: Mc,
  escapeHtml: vo,
  formatBytes: Wc,
  getNextPreviewDevice: Oo,
  getPreviewDeviceIcon: bo,
  getPreviewModalDevice: _o,
  getSequentialName: Cc,
  getUserColor: mn,
  getUserInitials: Hi,
  getUserLabel: Yi,
  isEnvironmentVariableKey: Ac,
  isGoogleSheets: Wo,
  isSQL: Ao,
  lists: Dc,
  normaliseSafeCssColor: Ro,
  normalizeForComparison: xo,
  portalUrl: pa,
  retry: qo,
  roles: Tc,
  schema: ko,
  structuredOutput: kc,
  urlHelpers: $c,
  views: So,
  wait: Bi,
  withTimeout: Eo
}, Symbol.toStringTag, { value: "Module" }));
function zc(o, t) {
  To(t, !1);
  let r = qt(t, "user", 8), a = qt(t, "size", 8, "S"), i = qt(t, "tooltipPosition", 24, () => Fo.Top), l = qt(t, "showTooltip", 8, !0);
  Do();
  var f = Mo(), y = Co(f);
  {
    var h = (b) => {
      {
        let m = Ut(() => (_e(l()), _e(Bt), _e(r()), Pt(() => l() ? Yi(r()) : ""))), w = Ut(() => (_e(Bt), _e(r()), Pt(() => mn(r()))));
        Lo(b, {
          get text() {
            return Rt(m);
          },
          get position() {
            return i();
          },
          get color() {
            return Rt(w);
          },
          children: (x, O) => {
            {
              let _ = Ut(() => (_e(Bt), _e(r()), Pt(() => Hi(r())))), S = Ut(() => (_e(Bt), _e(r()), Pt(() => mn(r()))));
              $o(x, {
                get size() {
                  return a();
                },
                get initials() {
                  return Rt(_);
                },
                get color() {
                  return Rt(S);
                }
              });
            }
          },
          $$slots: { default: !0 }
        });
      }
    };
    No(y, (b) => {
      r() && b(h);
    });
  }
  Vo(o, f), Io();
}
export {
  zc as U,
  Bt as h
};
