import { g as gi, p as O, X as pi, j as A, B as P, l as U, i as M, k as mi, m as vi, Y as an, t as yi, d as bi, $ as fl, w as Ai, z as F, f as Ei, a as Ci, aL as hl, at as gl, h as dr, v as pl, a3 as ml, x as ur, y as vl, c as yl, r as bl, au as Al, ag as El } from "./index-quCB9sGT.js";
var Ft, S, Si, Di, Ve, xe, fr, wi, _i, _t = {}, Ri = [], Cl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ge(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Ti(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function u(t, e, n) {
  var r, i, s, l = {};
  for (s in e) s == "key" ? r = e[s] : s == "ref" ? i = e[s] : l[s] = e[s];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ft.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (s in t.defaultProps) l[s] === void 0 && (l[s] = t.defaultProps[s]);
  return At(t, l, r, i, null);
}
function At(t, e, n, r, i) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Si };
  return i == null && S.vnode != null && S.vnode(s), s;
}
function G() {
  return { current: null };
}
function I(t) {
  return t.children;
}
function Sl(t, e, n, r, i) {
  var s;
  for (s in n) s === "children" || s === "key" || s in e || Rt(t, s, null, n[s], r);
  for (s in e) i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || Rt(t, s, e[s], n[s], r);
}
function hr(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Cl.test(e) ? n : n + "px";
}
function Rt(t, e, n, r, i) {
  var s;
  e: if (e === "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || hr(t.style, e, "");
    if (n) for (e in n) r && n[e] === r[e] || hr(t.style, e, n[e]);
  }
  else if (e[0] === "o" && e[1] === "n") s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r || t.addEventListener(e, s ? pr : gr, s) : t.removeEventListener(e, s ? pr : gr, s);
  else if (e !== "dangerouslySetInnerHTML") {
    if (i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
  }
}
function gr(t) {
  Ve = !0;
  try {
    return this.l[t.type + !1](S.event ? S.event(t) : t);
  } finally {
    Ve = !1;
  }
}
function pr(t) {
  Ve = !0;
  try {
    return this.l[t.type + !0](S.event ? S.event(t) : t);
  } finally {
    Ve = !1;
  }
}
function q(t, e) {
  this.props = t, this.context = e;
}
function Ke(t, e) {
  if (e == null) return t.__ ? Ke(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? Ke(t) : null;
}
function xi(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) {
      t.__e = t.__c.base = n.__e;
      break;
    }
    return xi(t);
  }
}
function Dl(t) {
  Ve ? setTimeout(t) : wi(t);
}
function on(t) {
  (!t.__d && (t.__d = !0) && xe.push(t) && !Tt.__r++ || fr !== S.debounceRendering) && ((fr = S.debounceRendering) || Dl)(Tt);
}
function Tt() {
  var t, e, n, r, i, s, l, a;
  for (xe.sort(function(o, d) {
    return o.__v.__b - d.__v.__b;
  }); t = xe.shift(); ) t.__d && (e = xe.length, r = void 0, i = void 0, l = (s = (n = t).__v).__e, (a = n.__P) && (r = [], (i = ge({}, s)).__v = s.__v + 1, Cn(a, s, i, n.__n, a.ownerSVGElement !== void 0, s.__h != null ? [l] : null, r, l ?? Ke(s), s.__h), Oi(r, s), s.__e != l && xi(s)), xe.length > e && xe.sort(function(o, d) {
    return o.__v.__b - d.__v.__b;
  }));
  Tt.__r = 0;
}
function ki(t, e, n, r, i, s, l, a, o, d) {
  var c, g, h, f, m, y, v, b = r && r.__k || Ri, E = b.length;
  for (n.__k = [], c = 0; c < e.length; c++) if ((f = n.__k[c] = (f = e[c]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? At(null, f, null, null, f) : Array.isArray(f) ? At(I, { children: f }, null, null, null) : f.__b > 0 ? At(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
    if (f.__ = n, f.__b = n.__b + 1, (h = b[c]) === null || h && f.key == h.key && f.type === h.type) b[c] = void 0;
    else for (g = 0; g < E; g++) {
      if ((h = b[g]) && f.key == h.key && f.type === h.type) {
        b[g] = void 0;
        break;
      }
      h = null;
    }
    Cn(t, f, h = h || _t, i, s, l, a, o, d), m = f.__e, (g = f.ref) && h.ref != g && (v || (v = []), h.ref && v.push(h.ref, null, f), v.push(g, f.__c || m, f)), m != null ? (y == null && (y = m), typeof f.type == "function" && f.__k === h.__k ? f.__d = o = Mi(f, o, t) : o = Ii(t, f, h, b, m, o), typeof n.type == "function" && (n.__d = o)) : o && h.__e == o && o.parentNode != t && (o = Ke(h));
  }
  for (n.__e = y, c = E; c--; ) b[c] != null && (typeof n.type == "function" && b[c].__e != null && b[c].__e == n.__d && (n.__d = Ni(r).nextSibling), Pi(b[c], b[c]));
  if (v) for (c = 0; c < v.length; c++) Hi(v[c], v[++c], v[++c]);
}
function Mi(t, e, n) {
  for (var r, i = t.__k, s = 0; i && s < i.length; s++) (r = i[s]) && (r.__ = t, e = typeof r.type == "function" ? Mi(r, e, n) : Ii(n, r, r, i, r.__e, e));
  return e;
}
function xt(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    xt(n, e);
  }) : e.push(t)), e;
}
function Ii(t, e, n, r, i, s) {
  var l, a, o;
  if (e.__d !== void 0) l = e.__d, e.__d = void 0;
  else if (n == null || i != s || i.parentNode == null) e: if (s == null || s.parentNode !== t) t.appendChild(i), l = null;
  else {
    for (a = s, o = 0; (a = a.nextSibling) && o < r.length; o += 1) if (a == i) break e;
    t.insertBefore(i, s), l = s;
  }
  return l !== void 0 ? l : i.nextSibling;
}
function Ni(t) {
  var e, n, r;
  if (t.type == null || typeof t.type == "string") return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--) if ((n = t.__k[e]) && (r = Ni(n))) return r;
  }
  return null;
}
function Cn(t, e, n, r, i, s, l, a, o) {
  var d, c, g, h, f, m, y, v, b, E, _, w, j, N, W, T = e.type;
  if (e.constructor !== void 0) return null;
  n.__h != null && (o = n.__h, a = e.__e = n.__e, e.__h = null, s = [a]), (d = S.__b) && d(e);
  try {
    e: if (typeof T == "function") {
      if (v = e.props, b = (d = T.contextType) && r[d.__c], E = d ? b ? b.props.value : d.__ : r, n.__c ? y = (c = e.__c = n.__c).__ = c.__E : ("prototype" in T && T.prototype.render ? e.__c = c = new T(v, E) : (e.__c = c = new q(v, E), c.constructor = T, c.render = _l), b && b.sub(c), c.props = v, c.state || (c.state = {}), c.context = E, c.__n = r, g = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), T.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ge({}, c.__s)), ge(c.__s, T.getDerivedStateFromProps(v, c.__s))), h = c.props, f = c.state, c.__v = e, g) T.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (T.getDerivedStateFromProps == null && v !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, E), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, E) === !1 || e.__v === n.__v) {
          for (e.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(ne) {
            ne && (ne.__ = e);
          }), _ = 0; _ < c._sb.length; _++) c.__h.push(c._sb[_]);
          c._sb = [], c.__h.length && l.push(c);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, E), c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(h, f, m);
        });
      }
      if (c.context = E, c.props = v, c.__P = t, w = S.__r, j = 0, "prototype" in T && T.prototype.render) {
        for (c.state = c.__s, c.__d = !1, w && w(e), d = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++) c.__h.push(c._sb[N]);
        c._sb = [];
      } else do
        c.__d = !1, w && w(e), d = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++j < 25);
      c.state = c.__s, c.getChildContext != null && (r = ge(ge({}, r), c.getChildContext())), g || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(h, f)), W = d != null && d.type === I && d.key == null ? d.props.children : d, ki(t, Array.isArray(W) ? W : [W], e, n, r, i, s, l, a, o), c.base = e.__e, e.__h = null, c.__h.length && l.push(c), y && (c.__E = c.__ = null), c.__e = !1;
    } else s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = wl(n.__e, e, n, r, i, s, l, o);
    (d = S.diffed) && d(e);
  } catch (ne) {
    e.__v = null, (o || s != null) && (e.__e = a, e.__h = !!o, s[s.indexOf(a)] = null), S.__e(ne, e, n);
  }
}
function Oi(t, e) {
  S.__c && S.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      S.__e(r, n.__v);
    }
  });
}
function wl(t, e, n, r, i, s, l, a) {
  var o, d, c, g = n.props, h = e.props, f = e.type, m = 0;
  if (f === "svg" && (i = !0), s != null) {
    for (; m < s.length; m++) if ((o = s[m]) && "setAttribute" in o == !!f && (f ? o.localName === f : o.nodeType === 3)) {
      t = o, s[m] = null;
      break;
    }
  }
  if (t == null) {
    if (f === null) return document.createTextNode(h);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h), s = null, a = !1;
  }
  if (f === null) g === h || a && t.data === h || (t.data = h);
  else {
    if (s = s && Ft.call(t.childNodes), d = (g = n.props || _t).dangerouslySetInnerHTML, c = h.dangerouslySetInnerHTML, !a) {
      if (s != null) for (g = {}, m = 0; m < t.attributes.length; m++) g[t.attributes[m].name] = t.attributes[m].value;
      (c || d) && (c && (d && c.__html == d.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }
    if (Sl(t, h, g, i, a), c) e.__k = [];
    else if (m = e.props.children, ki(t, Array.isArray(m) ? m : [m], e, n, r, i && f !== "foreignObject", s, l, s ? s[0] : n.__k && Ke(n, 0), a), s != null) for (m = s.length; m--; ) s[m] != null && Ti(s[m]);
    a || ("value" in h && (m = h.value) !== void 0 && (m !== t.value || f === "progress" && !m || f === "option" && m !== g.value) && Rt(t, "value", m, g.value, !1), "checked" in h && (m = h.checked) !== void 0 && m !== t.checked && Rt(t, "checked", m, g.checked, !1));
  }
  return t;
}
function Hi(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    S.__e(r, n);
  }
}
function Pi(t, e, n) {
  var r, i;
  if (S.unmount && S.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Hi(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (s) {
      S.__e(s, e);
    }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k) for (i = 0; i < r.length; i++) r[i] && Pi(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || Ti(t.__e), t.__ = t.__e = t.__d = void 0;
}
function _l(t, e, n) {
  return this.constructor(t, n);
}
function Xe(t, e, n) {
  var r, i, s;
  S.__ && S.__(t, e), i = (r = !1) ? null : e.__k, s = [], Cn(e, t = e.__k = u(I, null, [t]), i || _t, _t, e.ownerSVGElement !== void 0, i ? null : e.firstChild ? Ft.call(e.childNodes) : null, s, i ? i.__e : e.firstChild, r), Oi(s, t);
}
function Rl(t, e) {
  var n = { __c: e = "__cC" + _i++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && i.some(function(a) {
        a.__e = !0, on(a);
      });
    }, this.sub = function(l) {
      i.push(l);
      var a = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        i.splice(i.indexOf(l), 1), a && a.call(l);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Ft = Ri.slice, S = { __e: function(t, e, n, r) {
  for (var i, s, l; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), l = i.__d), l) return i.__E = i;
  } catch (a) {
    t = a;
  }
  throw t;
} }, Si = 0, Di = function(t) {
  return t != null && t.constructor === void 0;
}, Ve = !1, q.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ge({}, this.state), typeof t == "function" && (t = t(ge({}, n), this.props)), t && ge(n, t), t != null && this.__v && (e && this._sb.push(e), on(this));
}, q.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), on(this));
}, q.prototype.render = I, xe = [], wi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Tt.__r = 0, _i = 0;
var ee, Gt, mr, Bi = [], Qt = [], vr = S.__b, yr = S.__r, br = S.diffed, Ar = S.__c, Er = S.unmount;
function Tl() {
  for (var t; t = Bi.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(Et), t.__H.__h.forEach(cn), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], S.__e(e, t.__v);
  }
}
S.__b = function(t) {
  ee = null, vr && vr(t);
}, S.__r = function(t) {
  yr && yr(t);
  var e = (ee = t.__c).__H;
  e && (Gt === ee ? (e.__h = [], ee.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Qt, n.__N = n.i = void 0;
  })) : (e.__h.forEach(Et), e.__h.forEach(cn), e.__h = [])), Gt = ee;
}, S.diffed = function(t) {
  br && br(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Bi.push(e) !== 1 && mr === S.requestAnimationFrame || ((mr = S.requestAnimationFrame) || xl)(Tl)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Qt && (n.__ = n.__V), n.i = void 0, n.__V = Qt;
  })), Gt = ee = null;
}, S.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(Et), n.__h = n.__h.filter(function(r) {
        return !r.__ || cn(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], S.__e(r, n.__v);
    }
  }), Ar && Ar(t, e);
}, S.unmount = function(t) {
  Er && Er(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Et(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && S.__e(e, n.__v));
};
var Cr = typeof requestAnimationFrame == "function";
function xl(t) {
  var e, n = function() {
    clearTimeout(r), Cr && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  Cr && (e = requestAnimationFrame(n));
}
function Et(t) {
  var e = ee, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), ee = e;
}
function cn(t) {
  var e = ee;
  t.__c = t.__(), ee = e;
}
function kl(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Sr(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function Dr(t) {
  this.props = t;
}
(Dr.prototype = new q()).isPureReactComponent = !0, Dr.prototype.shouldComponentUpdate = function(t, e) {
  return Sr(this.props, t) || Sr(this.state, e);
};
var wr = S.__b;
S.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), wr && wr(t);
};
var Ml = S.__e;
S.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, s = e; s = s.__; ) if ((i = s.__c) && i.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  Ml(t, e, n, r);
};
var _r = S.unmount;
function Fi(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = kl({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Fi(r, e, n);
  })), t;
}
function zi(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return zi(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function qt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ui(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function ft() {
  this.u = null, this.o = null;
}
S.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), _r && _r(t);
}, (qt.prototype = new q()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = Ui(r.__v), s = !1, l = function() {
    s || (s = !0, n.__R = null, i ? i(a) : a());
  };
  n.__R = l;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var d = r.state.__a;
        r.__v.__k[0] = zi(d, d.__c.__P, d.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.t.pop(); ) c.forceUpdate();
    }
  }, o = e.__h === !0;
  r.__u++ || o || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(l, l);
}, qt.prototype.componentWillUnmount = function() {
  this.t = [];
}, qt.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Fi(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && u(I, null, t.fallback);
  return i && (i.__h = null), [u(I, null, e.__a ? null : t.children), i];
};
var Rr = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)) for (n = t.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.u = n = n[2];
  }
};
function Il(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Nl(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    Xe(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), Xe(u(Il, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function Ol(t, e) {
  var n = u(Nl, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(ft.prototype = new q()).__a = function(t) {
  var e = this, n = Ui(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (r.push(i), Rr(e, t, r)) : i();
    };
    n ? n(s) : s();
  };
}, ft.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = xt(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, ft.prototype.componentDidUpdate = ft.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Rr(t, n, e);
  });
};
var Hl = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, Pl = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Bl = typeof document < "u", Fl = function(t) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
q.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(q.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Tr = S.event;
function zl() {
}
function Ul() {
  return this.cancelBubble;
}
function Wl() {
  return this.defaultPrevented;
}
S.event = function(t) {
  return Tr && (t = Tr(t)), t.persist = zl, t.isPropagationStopped = Ul, t.isDefaultPrevented = Wl, t.nativeEvent = t;
};
var xr = { configurable: !0, get: function() {
  return this.class;
} }, kr = S.vnode;
S.vnode = function(t) {
  var e = t.type, n = t.props, r = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var s in r = {}, n) {
      var l = n[s];
      Bl && s === "children" && e === "noscript" || s === "value" && "defaultValue" in n && l == null || (s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && l === !0 ? l = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + e) && !Fl(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && Pl.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : l === null && (l = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = l);
    }
    e == "select" && r.multiple && Array.isArray(r.value) && (r.value = xt(n.children).forEach(function(a) {
      a.props.selected = r.value.indexOf(a.props.value) != -1;
    })), e == "select" && r.defaultValue != null && (r.value = xt(n.children).forEach(function(a) {
      a.props.selected = r.multiple ? r.defaultValue.indexOf(a.props.value) != -1 : r.defaultValue == a.props.value;
    })), t.props = r, n.class != n.className && (xr.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", xr));
  }
  t.$$typeof = Hl, kr && kr(t);
};
var Mr = S.__r;
S.__r = function(t) {
  Mr && Mr(t), t.__c;
};
const Wi = [], dn = /* @__PURE__ */ new Map();
function zt(t) {
  Wi.push(t), dn.forEach((e) => {
    ji(e, t);
  });
}
function Ll(t) {
  t.isConnected && // sometimes true if SSR system simulates DOM
  t.getRootNode && Li(t.getRootNode());
}
function Li(t) {
  let e = dn.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = Vl();
      n && (e.nonce = n);
      const r = t === document ? document.head : t, i = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
      r.insertBefore(e, i);
    }
    dn.set(t, e), jl(e);
  }
}
function jl(t) {
  for (const e of Wi)
    ji(t, e);
}
function ji(t, e) {
  const { sheet: n } = t, r = n.cssRules.length;
  e.split("}").forEach((i, s) => {
    i = i.trim(), i && n.insertRule(i + "}", r + s);
  });
}
let Yt;
function Vl() {
  return Yt === void 0 && (Yt = Gl()), Yt;
}
function Gl() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && Li(document);
var Ql = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
zt(Ql);
class Sn {
  constructor(e) {
    this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  request(e) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
      // NOT OPTIMAL! TODO: look at debounce
      this.tryDrain.bind(this),
      e
    ));
  }
  pause(e = "") {
    let { pauseDepths: n } = this;
    n[e] = (n[e] || 0) + 1, this.clearTimeout();
  }
  resume(e = "", n) {
    let { pauseDepths: r } = this;
    e in r && (n ? delete r[e] : (r[e] -= 1, r[e] <= 0 && delete r[e]), this.tryDrain());
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }
  clear() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }
  clearTimeout() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }
  drained() {
    this.drainedOption && this.drainedOption();
  }
}
function ql(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function se(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (Yl(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function Yl(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function Zl(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, r = [];
  for (let i = 0; i < n.length; i += 1) {
    let s = n[i].querySelectorAll(e);
    for (let l = 0; l < s.length; l += 1)
      r.push(s[l]);
  }
  return r;
}
const $l = /(top|left|right|bottom|width|height)$/i;
function Jl(t, e) {
  for (let n in e)
    Vi(t, n, e[n]);
}
function Vi(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && $l.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function Kl(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let Ir = 0;
function ve() {
  return Ir += 1, "fc-dom-" + Ir;
}
function Xl(t, e) {
  return (n) => {
    let r = se(n.target, t);
    r && e.call(r, n, r);
  };
}
function Gi(t, e, n, r) {
  let i = Xl(n, r);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function ea(t, e, n, r) {
  let i;
  return Gi(t, "mouseover", e, (s, l) => {
    if (l !== i) {
      i = l, n(s, l);
      let a = (o) => {
        i = null, r(o, l), l.removeEventListener("mouseleave", a);
      };
      l.addEventListener("mouseleave", a);
    }
  });
}
function Qi(t) {
  return Object.assign({ onClick: t }, qi(t));
}
function qi(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let Nr = 0;
function Ne() {
  return Nr += 1, String(Nr);
}
function ta(t) {
  let e = [], n = [], r, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), r = 0; r < n.length; r += 1)
    i = n[r], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function na(t, e, n) {
  let r, i;
  for (r = 0; r < n.length; r += 1)
    if (i = ra(t, e, n[r]), i)
      return i;
  return 0;
}
function ra(t, e, n) {
  return n.func ? n.func(t, e) : ia(t[n.field], e[n.field]) * (n.order || 1);
}
function ia(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function We(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function $e(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, i, s) => r.replace("$" + s, i || ""), t) : n;
}
function Ct(t) {
  return t % 1 === 0;
}
function sa(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const Or = ["years", "months", "days", "milliseconds"], la = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function x(t, e) {
  return typeof t == "string" ? aa(t) : typeof t == "object" && t ? Hr(t) : typeof t == "number" ? Hr({ [e || "milliseconds"]: t }) : null;
}
function aa(t) {
  let e = la.exec(t);
  if (e) {
    let n = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + // minutes
      (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + // seconds
      (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function Hr(t) {
  let e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + // hours
    (t.minutes || t.minute || 0) * 60 * 1e3 + // minutes
    (t.seconds || t.second || 0) * 1e3 + // seconds
    (t.milliseconds || t.millisecond || t.ms || 0)
    // ms
  }, n = t.weeks || t.week;
  return n && (e.days += n * 7, e.specifiedWeeks = !0), e;
}
function oa(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function un(t, e) {
  return {
    years: t.years + e.years,
    months: t.months + e.months,
    days: t.days + e.days,
    milliseconds: t.milliseconds + e.milliseconds
  };
}
function ca(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function da(t, e) {
  return {
    years: t.years * e,
    months: t.months * e,
    days: t.days * e,
    milliseconds: t.milliseconds * e
  };
}
function ua(t) {
  return Le(t) / 365;
}
function fa(t) {
  return Le(t) / 30;
}
function Le(t) {
  return $(t) / 864e5;
}
function $(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Dn(t, e) {
  let n = null;
  for (let r = 0; r < Or.length; r += 1) {
    let i = Or[r];
    if (e[i]) {
      let s = t[i] / e[i];
      if (!Ct(s) || n !== null && n !== s)
        return null;
      n = s;
    } else if (t[i])
      return null;
  }
  return n;
}
function fn(t) {
  let e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
function ye(t, e, n) {
  if (t === e)
    return !0;
  let r = t.length, i;
  if (r !== e.length)
    return !1;
  for (i = 0; i < r; i += 1)
    if (!(n ? n(t[i], e[i]) : t[i] === e[i]))
      return !1;
  return !0;
}
const ha = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Pr(t, e) {
  let n = pe(t);
  return n[2] += e * 7, Q(n);
}
function L(t, e) {
  let n = pe(t);
  return n[2] += e, Q(n);
}
function be(t, e) {
  let n = pe(t);
  return n[6] += e, Q(n);
}
function ga(t, e) {
  return Ee(t, e) / 7;
}
function Ee(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function pa(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function ma(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function va(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function ya(t, e) {
  let n = B(t), r = B(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(Ee(n, r)),
    milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function ba(t, e) {
  let n = kt(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function kt(t, e) {
  return me(t) === me(e) ? Math.round(Ee(t, e)) : null;
}
function B(t) {
  return Q([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function Aa(t) {
  return Q([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function Ea(t) {
  return Q([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function Ca(t) {
  return Q([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function Sa(t, e, n) {
  let r = t.getUTCFullYear(), i = Zt(t, r, e, n);
  if (i < 1)
    return Zt(t, r - 1, e, n);
  let s = Zt(t, r + 1, e, n);
  return s >= 1 ? Math.min(i, s) : i;
}
function Zt(t, e, n, r) {
  let i = Q([e, 0, 1 + Da(e, n, r)]), s = B(t), l = Math.round(Ee(i, s));
  return Math.floor(l / 7) + 1;
}
function Da(t, e, n) {
  let r = 7 + e - n;
  return -((7 + Q([t, 0, r]).getUTCDay() - e) % 7) + r - 1;
}
function Br(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function Fr(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    // day of month
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function pe(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function Q(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function Yi(t) {
  return !isNaN(t.valueOf());
}
function me(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function Zi(t, e, n = !1) {
  let r = t.toISOString();
  return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", wn(e, !0)))), r;
}
function nt(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function wa(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function _a(t) {
  return We(t.getUTCHours(), 2) + ":" + We(t.getUTCMinutes(), 2) + ":" + We(t.getUTCSeconds(), 2);
}
function wn(t, e = !1) {
  let n = t < 0 ? "-" : "+", r = Math.abs(t), i = Math.floor(r / 60), s = Math.round(r % 60);
  return e ? `${n + We(i, 2)}:${We(s, 2)}` : `GMT${n}${i}${s ? `:${We(s, 2)}` : ""}`;
}
function C(t, e, n) {
  let r, i;
  return function(...s) {
    if (!r)
      i = t.apply(this, s);
    else if (!ye(r, s)) {
      let l = t.apply(this, s);
      (!e || !e(l, i)) && (i = l);
    }
    return r = s, i;
  };
}
function St(t, e, n) {
  let r, i;
  return (s) => (r ? J(r, s) || (i = t.call(this, s)) : i = t.call(this, s), r = s, i);
}
const $t = {
  week: 3,
  separator: 9,
  omitZeroMinute: 9,
  meridiem: 9,
  omitCommas: 9
}, Mt = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, ht = /\s*([ap])\.?m\.?/i, Ra = /,/g, Ta = /\s+/g, xa = /\u200e/g, ka = /UTC|GMT/;
class Ma {
  constructor(e) {
    let n = {}, r = {}, i = 9;
    for (let s in e)
      s in $t ? (r[s] = e[s], $t[s] < 9 && (i = Math.min($t[s], i))) : (n[s] = e[s], s in Mt && (i = Math.min(Mt[s], i)));
    this.standardDateProps = n, this.extendedSettings = r, this.smallestUnitNum = i, this.buildFormattingFunc = C(zr);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, r, i) {
    let { standardDateProps: s, extendedSettings: l } = this, a = Ba(e.marker, n.marker, r.calendarSystem);
    if (!a)
      return this.format(e, r);
    let o = a;
    o > 1 && // the two dates are different in a way that's larger scale than time
    (s.year === "numeric" || s.year === "2-digit") && (s.month === "numeric" || s.month === "2-digit") && (s.day === "numeric" || s.day === "2-digit") && (o = 1);
    let d = this.format(e, r), c = this.format(n, r);
    if (d === c)
      return d;
    let g = Fa(s, o), h = zr(g, l, r), f = h(e), m = h(n), y = za(d, f, c, m), v = l.separator || i || r.defaultSeparator || "";
    return y ? y.before + f + v + m + y.after : d + v + c;
  }
  getSmallestUnit() {
    switch (this.smallestUnitNum) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
}
function zr(t, e, n) {
  let r = Object.keys(t).length;
  return r === 1 && t.timeZoneName === "short" ? (i) => wn(i.timeZoneOffset) : r === 0 && e.week ? (i) => Pa(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : Ia(t, e, n);
}
function Ia(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), Na(t, e), t.timeZone = "UTC";
  let r = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let s = Object.assign({}, t);
    delete s.minute, i = new Intl.DateTimeFormat(n.locale.codes, s);
  }
  return (s) => {
    let { marker: l } = s, a;
    i && !l.getUTCMinutes() ? a = i : a = r;
    let o = a.format(l);
    return Oa(o, s, t, e, n);
  };
}
function Na(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function Oa(t, e, n, r, i) {
  return t = t.replace(xa, ""), n.timeZoneName === "short" && (t = Ha(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    wn(e.timeZoneOffset)
  ))), r.omitCommas && (t = t.replace(Ra, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === !1 ? t = t.replace(ht, "").trim() : r.meridiem === "narrow" ? t = t.replace(ht, (s, l) => l.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(ht, (s, l) => `${l.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(ht, (s) => s.toLocaleLowerCase())), t = t.replace(Ta, " "), t = t.trim(), t;
}
function Ha(t, e) {
  let n = !1;
  return t = t.replace(ka, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function Pa(t, e, n, r, i) {
  let s = [];
  return i === "long" ? s.push(n) : (i === "short" || i === "narrow") && s.push(e), (i === "long" || i === "short") && s.push(" "), s.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && s.reverse(), s.join("");
}
function Ba(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : me(t) !== me(e) ? 1 : 0;
}
function Fa(t, e) {
  let n = {};
  for (let r in t)
    (!(r in Mt) || // not a date part prop (like timeZone)
    Mt[r] <= e) && (n[r] = t[r]);
  return n;
}
function za(t, e, n, r) {
  let i = 0;
  for (; i < t.length; ) {
    let s = t.indexOf(e, i);
    if (s === -1)
      break;
    let l = t.substr(0, s);
    i = s + e.length;
    let a = t.substr(i), o = 0;
    for (; o < n.length; ) {
      let d = n.indexOf(r, o);
      if (d === -1)
        break;
      let c = n.substr(0, d);
      o = d + r.length;
      let g = n.substr(o);
      if (l === c && a === g)
        return {
          before: l,
          after: a
        };
    }
  }
  return null;
}
function Ur(t, e) {
  let n = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function It(t, e, n, r) {
  let i = Ur(t, n.calendarSystem), s = e ? Ur(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: s,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator
  };
}
class Ua {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, r) {
    return n.cmdFormatter(this.cmdStr, It(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return r.cmdFormatter(this.cmdStr, It(e, n, r, i));
  }
}
class Wa {
  constructor(e) {
    this.func = e;
  }
  format(e, n, r) {
    return this.func(It(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return this.func(It(e, n, r, i));
  }
}
function H(t) {
  return typeof t == "object" && t ? new Ma(t) : typeof t == "string" ? new Ua(t) : typeof t == "function" ? new Wa(t) : null;
}
const Wr = {
  navLinkDayClick: p,
  navLinkWeekClick: p,
  duration: x,
  bootstrapFontAwesome: p,
  buttonIcons: p,
  customButtons: p,
  defaultAllDayEventDuration: x,
  defaultTimedEventDuration: x,
  nextDayThreshold: x,
  scrollTime: x,
  scrollTimeReset: Boolean,
  slotMinTime: x,
  slotMaxTime: x,
  dayPopoverFormat: H,
  slotDuration: x,
  snapDuration: x,
  headerToolbar: p,
  footerToolbar: p,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: H,
  dayHeaderClassNames: p,
  dayHeaderContent: p,
  dayHeaderDidMount: p,
  dayHeaderWillUnmount: p,
  dayCellClassNames: p,
  dayCellContent: p,
  dayCellDidMount: p,
  dayCellWillUnmount: p,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: p,
  weekNumbers: Boolean,
  weekNumberClassNames: p,
  weekNumberContent: p,
  weekNumberDidMount: p,
  weekNumberWillUnmount: p,
  editable: Boolean,
  viewClassNames: p,
  viewDidMount: p,
  viewWillUnmount: p,
  nowIndicator: Boolean,
  nowIndicatorSnap: p,
  nowIndicatorClassNames: p,
  nowIndicatorContent: p,
  nowIndicatorDidMount: p,
  nowIndicatorWillUnmount: p,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: p,
  locale: p,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: p,
  eventOrder: ta,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: p,
  contentHeight: p,
  direction: String,
  weekNumberFormat: H,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: p,
  initialDate: p,
  now: p,
  eventDataTransform: p,
  stickyHeaderDates: p,
  stickyFooterScrollbar: p,
  viewHeight: p,
  defaultAllDay: Boolean,
  eventSourceFailure: p,
  eventSourceSuccess: p,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: p,
  eventConstraint: p,
  eventAllow: p,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: p,
  eventContent: p,
  eventDidMount: p,
  eventWillUnmount: p,
  selectConstraint: p,
  selectOverlap: p,
  selectAllow: p,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: p,
  slotLaneClassNames: p,
  slotLaneContent: p,
  slotLaneDidMount: p,
  slotLaneWillUnmount: p,
  slotLabelClassNames: p,
  slotLabelContent: p,
  slotLabelDidMount: p,
  slotLabelWillUnmount: p,
  dayMaxEvents: p,
  dayMaxEventRows: p,
  dayMinWidth: Number,
  slotLabelInterval: x,
  allDayText: String,
  allDayClassNames: p,
  allDayContent: p,
  allDayDidMount: p,
  allDayWillUnmount: p,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: H,
  rerenderDelay: Number,
  moreLinkText: p,
  moreLinkHint: p,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: p,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: x,
  hiddenDays: p,
  fixedWeekCount: Boolean,
  validRange: p,
  visibleRange: p,
  titleFormat: p,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: p,
  navLinkHint: p,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: p,
  moreLinkClassNames: p,
  moreLinkContent: p,
  moreLinkDidMount: p,
  moreLinkWillUnmount: p,
  monthStartFormat: H,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: p,
  customRenderingMetaMap: p,
  customRenderingReplaces: Boolean
}, ke = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " – ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: { month: "long", day: "numeric" },
  nowIndicatorSnap: "auto"
}, Lr = {
  datesSet: p,
  eventsSet: p,
  eventAdd: p,
  eventChange: p,
  eventRemove: p,
  windowResize: p,
  eventClick: p,
  eventMouseEnter: p,
  eventMouseLeave: p,
  select: p,
  unselect: p,
  loading: p,
  // internal
  _unmount: p,
  _beforeprint: p,
  _afterprint: p,
  _noEventDrop: p,
  _noEventResize: p,
  _resize: p,
  _scrollRequest: p
}, jr = {
  buttonText: p,
  buttonHints: p,
  views: p,
  plugins: p,
  initialEvents: p,
  events: p,
  eventSources: p
}, Re = {
  headerToolbar: Te,
  footerToolbar: Te,
  buttonText: Te,
  buttonHints: Te,
  buttonIcons: Te,
  dateIncrement: Te,
  plugins: gt,
  events: gt,
  eventSources: gt,
  resources: gt
};
function Te(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? J(t, e) : t === e;
}
function gt(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? ye(t, e) : t === e;
}
const La = {
  type: String,
  component: p,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: p,
  usesMinMaxTime: Boolean,
  classNames: p,
  content: p,
  didMount: p,
  willUnmount: p
};
function Jt(t) {
  return Rn(t, Re);
}
function _n(t, e) {
  let n = {}, r = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (r[i] = t[i]);
  return { refined: n, extra: r };
}
function p(t) {
  return t;
}
const { hasOwnProperty: Nt } = Object.prototype;
function Rn(t, e) {
  let n = {};
  if (e) {
    for (let r in e)
      if (e[r] === Te) {
        let i = [];
        for (let s = t.length - 1; s >= 0; s -= 1) {
          let l = t[s][r];
          if (typeof l == "object" && l)
            i.unshift(l);
          else if (l !== void 0) {
            n[r] = l;
            break;
          }
        }
        i.length && (n[r] = Rn(i));
      }
  }
  for (let r = t.length - 1; r >= 0; r -= 1) {
    let i = t[r];
    for (let s in i)
      s in n || (n[s] = i[s]);
  }
  return n;
}
function Ge(t, e) {
  let n = {};
  for (let r in t)
    e(t[r], r) && (n[r] = t[r]);
  return n;
}
function Ie(t, e) {
  let n = {};
  for (let r in t)
    n[r] = e(t[r], r);
  return n;
}
function $i(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function Tn(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function J(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (Nt.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (Nt.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const ja = /^on[A-Z]/;
function Va(t, e) {
  const n = Ga(t, e);
  for (let r of n)
    if (!ja.test(r))
      return !1;
  return !0;
}
function Ga(t, e) {
  let n = [];
  for (let r in t)
    Nt.call(t, r) && (r in e || n.push(r));
  for (let r in e)
    Nt.call(e, r) && t[r] !== e[r] && n.push(r);
  return n;
}
function Kt(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let r in e)
    if (!(r in t && Qa(t[r], e[r], n[r]))) return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function Qa(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function qa(t, e = 0, n, r = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let s = e; s < n; s += r) {
    let l = t[s];
    l !== void 0 && i.push(l);
  }
  return i;
}
let Ji = {};
function Ya(t, e) {
  Ji[t] = e;
}
function Za(t) {
  return new Ji[t]();
}
class $a {
  getMarkerYear(e) {
    return e.getUTCFullYear();
  }
  getMarkerMonth(e) {
    return e.getUTCMonth();
  }
  getMarkerDay(e) {
    return e.getUTCDate();
  }
  arrayToMarker(e) {
    return Q(e);
  }
  markerToArray(e) {
    return pe(e);
  }
}
Ya("gregory", $a);
const Ja = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Ka(t) {
  let e = Ja.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (Yi(n)) {
      let r = null;
      return e[13] && (r = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: n,
        isTimeUnspecified: !e[6],
        timeZoneOffset: r
      };
    }
  }
  return null;
}
class Ki {
  constructor(e) {
    let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!r || this.namedTimeZoneImpl), this.calendarSystem = Za(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : Q(Br(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = Q(e)), n === null || !Yi(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = Ka(e);
    if (n === null)
      return null;
    let { marker: r } = n, i = null;
    return n.timeZoneOffset !== null && (this.canComputeOffset ? r = this.timestampToMarker(r.valueOf() - n.timeZoneOffset * 60 * 1e3) : i = n.timeZoneOffset), { marker: r, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: i };
  }
  // Accessors
  getYear(e) {
    return this.calendarSystem.getMarkerYear(e);
  }
  getMonth(e) {
    return this.calendarSystem.getMarkerMonth(e);
  }
  getDay(e) {
    return this.calendarSystem.getMarkerDay(e);
  }
  // Adding / Subtracting
  add(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n.years, r[1] += n.months, r[2] += n.days, r[6] += n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  subtract(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] -= n.years, r[1] -= n.months, r[2] -= n.days, r[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  addYears(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n, this.calendarSystem.arrayToMarker(r);
  }
  addMonths(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[1] += n, this.calendarSystem.arrayToMarker(r);
  }
  // Diffing Whole Units
  diffWholeYears(e, n) {
    let { calendarSystem: r } = this;
    return me(e) === me(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: r } = this;
    return me(e) === me(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
  }
  // Range / Duration
  greatestWholeUnit(e, n) {
    let r = this.diffWholeYears(e, n);
    return r !== null ? { unit: "year", value: r } : (r = this.diffWholeMonths(e, n), r !== null ? { unit: "month", value: r } : (r = ba(e, n), r !== null ? { unit: "week", value: r } : (r = kt(e, n), r !== null ? { unit: "day", value: r } : (r = pa(e, n), Ct(r) ? { unit: "hour", value: r } : (r = ma(e, n), Ct(r) ? { unit: "minute", value: r } : (r = va(e, n), Ct(r) ? { unit: "second", value: r } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, r) {
    let i;
    return r.years && (i = this.diffWholeYears(e, n), i !== null) ? i / ua(r) : r.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / fa(r) : r.days && (i = kt(e, n), i !== null) ? i / Le(r) : (n.valueOf() - e.valueOf()) / $(r);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? B(e) : n === "hour" ? Aa(e) : n === "minute" ? Ea(e) : n === "second" ? Ca(e) : null;
  }
  startOfYear(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e)
    ]);
  }
  startOfMonth(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ]);
  }
  startOfWeek(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }
  // Week Number
  computeWeekNumber(e) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : Sa(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, n, r = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, r, i = {}) {
    return i.isEndExclusive && (n = be(n, -1)), r.formatRange({
      marker: e,
      timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: n,
      timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(n)
    }, this, i.defaultSeparator);
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */
  formatIso(e, n = {}) {
    let r = null;
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), Zi(e, r, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? Q(Br(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : Q(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -Fr(pe(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(pe(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? Fr(pe(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(pe(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class rt {
  constructor(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  setIconOverride(e) {
    let n, r;
    if (typeof e == "object" && e) {
      n = Object.assign({}, this.iconClasses);
      for (r in e)
        n[r] = this.applyIconOverridePrefix(e[r]);
      this.iconClasses = n;
    } else e === !1 && (this.iconClasses = {});
  }
  applyIconOverridePrefix(e) {
    let n = this.iconOverridePrefix;
    return n && e.indexOf(n) !== 0 && (e = n + e), e;
  }
  getClass(e) {
    return this.classes[e] || "";
  }
  getIconClass(e, n) {
    let r;
    return n && this.rtlIconClasses ? r = this.rtlIconClasses[e] || this.iconClasses[e] : r = this.iconClasses[e], r ? `${this.baseIconClass} ${r}` : "";
  }
  getCustomButtonIconClass(e) {
    let n;
    return this.iconOverrideCustomButtonOption && (n = e[this.iconOverrideCustomButtonOption], n) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}` : "";
  }
}
rt.prototype.classes = {};
rt.prototype.iconClasses = {};
rt.prototype.baseIconClass = "";
rt.prototype.iconOverridePrefix = "";
function Ot(t) {
  t();
  let e = S.debounceRendering, n = [];
  function r(i) {
    n.push(i);
  }
  for (S.debounceRendering = r, Xe(u(Xa, {}), document.createElement("div")); n.length; )
    n.shift()();
  S.debounceRendering = e;
}
class Xa extends q {
  render() {
    return u("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function Xi(t) {
  let e = Rl(t), n = e.Provider;
  return e.Provider = function() {
    let r = !this.getChildContext, i = n.apply(this, arguments);
    if (r) {
      let s = [];
      this.shouldComponentUpdate = (l) => {
        this.props.value !== l.value && s.forEach((a) => {
          a.context = l.value, a.forceUpdate();
        });
      }, this.sub = (l) => {
        s.push(l);
        let a = l.componentWillUnmount;
        l.componentWillUnmount = () => {
          s.splice(s.indexOf(l), 1), a && a.call(l);
        };
      };
    }
    return i;
  }, e;
}
class eo {
  constructor(e, n, r, i) {
    this.execFunc = e, this.emitter = n, this.scrollTime = r, this.scrollTimeReset = i, this.handleScrollRequest = (s) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, s), this.drain();
    }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  detach() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }
  update(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }
  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }
  drain() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }
}
const de = Xi({});
function to(t, e, n, r, i, s, l, a, o, d, c, g, h, f) {
  return {
    dateEnv: i,
    nowManager: s,
    options: n,
    pluginHooks: a,
    emitter: c,
    dispatch: o,
    getCurrentData: d,
    calendarApi: g,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: r,
    theme: l,
    isRtl: n.direction === "rtl",
    addResizeHandler(m) {
      c.on("_resize", m);
    },
    removeResizeHandler(m) {
      c.off("_resize", m);
    },
    createScrollResponder(m) {
      return new eo(m, c, x(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: h,
    unregisterInteractiveComponent: f
  };
}
class Oe extends q {
  // debug: boolean
  shouldComponentUpdate(e, n) {
    return !Kt(
      this.props,
      e,
      this.propEquality
      /*, this.debug */
    ) || !Kt(
      this.state,
      n,
      this.stateEquality
      /*, this.debug */
    );
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    Kt(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
Oe.addPropsEquality = no;
Oe.addStateEquality = ro;
Oe.contextType = de;
Oe.prototype.propEquality = {};
Oe.prototype.stateEquality = {};
class k extends Oe {
}
k.contextType = de;
function no(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function ro(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function te(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class xn extends k {
  constructor() {
    super(...arguments), this.id = Ne(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      const { options: n } = this.context, { generatorName: r } = this.props;
      (!n.customRenderingReplaces || !hn(r, n)) && this.updateElRef(e);
    }, this.updateElRef = (e) => {
      this.props.elRef && te(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { customGenerator: i, defaultGenerator: s, renderProps: l } = e, a = es(e, [], this.handleEl);
    let o = !1, d, c = [], g;
    if (i != null) {
      const h = typeof i == "function" ? i(l, u) : i;
      if (h === !0)
        o = !0;
      else {
        const f = h && typeof h == "object";
        f && "html" in h ? a.dangerouslySetInnerHTML = { __html: h.html } : f && "domNodes" in h ? c = Array.prototype.slice.call(h.domNodes) : (f ? Di(h) : typeof h != "function") ? d = h : g = h;
      }
    } else
      o = !hn(e.generatorName, r);
    return o && s && (d = s(l)), this.queuedDomNodes = c, this.currentGeneratorMeta = g, u(e.elTag, a, d);
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1);
  }
  triggerCustomRendering(e) {
    var n;
    const { props: r, context: i } = this, { handleCustomRendering: s, customRenderingMetaMap: l } = i.options;
    if (s) {
      const a = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : l?.[r.generatorName];
      a && s(Object.assign(Object.assign({
        id: this.id,
        isActive: e,
        containerEl: this.base,
        reportNewContainerEl: this.updateElRef,
        // front-end framework tells us about new container els
        generatorMeta: a
      }, r), { elClasses: (r.elClasses || []).filter(io) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
    if (!ye(e, n)) {
      n.forEach(ql);
      for (let i of e)
        r.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
xn.addPropsEquality({
  elClasses: ye,
  elStyle: J,
  elAttrs: Va,
  renderProps: J
});
function hn(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function es(t, e, n) {
  const r = Object.assign(Object.assign({}, t.elAttrs), { ref: n });
  return (t.elClasses || e) && (r.className = (t.elClasses || []).concat(e || []).concat(r.className || []).filter(Boolean).join(" ")), t.elStyle && (r.style = t.elStyle), r;
}
function io(t) {
  return !!t;
}
const ts = Xi(0);
class V extends q {
  constructor() {
    super(...arguments), this.InnerContent = so.bind(void 0, this), this.handleEl = (e) => {
      this.el = e, this.props.elRef && (te(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
    };
  }
  render() {
    const { props: e } = this, n = lo(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const r = es(e, n, this.handleEl), i = e.children(this.InnerContent, e.renderProps, r);
      return e.elTag ? u(e.elTag, r, i) : i;
    } else
      return u(xn, Object.assign(Object.assign({}, e), { elRef: this.handleEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
  }
  componentDidMount() {
    var e, n;
    this.el ? (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el })) : this.didMountMisfire = !0;
  }
  componentWillUnmount() {
    var e, n;
    (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
  }
}
V.contextType = ts;
function so(t, e) {
  const n = t.props;
  return u(xn, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function lo(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class et extends k {
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = { view: n.viewApi };
    return u(V, { elRef: e.elRef, elTag: e.elTag || "div", elAttrs: e.elAttrs, elClasses: [
      ...ns(e.viewSpec),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, classNameGenerator: r.viewClassNames, generatorName: void 0, didMount: r.viewDidMount, willUnmount: r.viewWillUnmount }, () => e.children);
  }
}
function ns(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
function ao(t, e) {
  let n = null, r = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : { start: n, end: r };
}
function Vr(t, e) {
  let n = [], { start: r } = e, i, s;
  for (t.sort(oo), i = 0; i < t.length; i += 1)
    s = t[i], s.start > r && n.push({ start: r, end: s.start }), s.end > r && (r = s.end);
  return r < e.end && n.push({ start: r, end: e.end }), n;
}
function oo(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Ae(t, e) {
  let { start: n, end: r } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (i = { start: n, end: r }), i;
}
function co(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function ae(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function uo(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function rs(t) {
  let e = Math.floor(Ee(t.start, t.end)) || 1, n = B(t.start), r = L(n, e);
  return { start: n, end: r };
}
function kn(t, e = x(0)) {
  let n = null, r = null;
  if (t.end) {
    r = B(t.end);
    let i = t.end.valueOf() - r.valueOf();
    i && i >= $(e) && (r = L(r, 1));
  }
  return t.start && (n = B(t.start), r && r <= n && (r = L(n, 1))), { start: n, end: r };
}
function fo(t) {
  let e = kn(t);
  return Ee(e.start, e.end) > 1;
}
function pt(t, e, n, r) {
  return r === "year" ? x(n.diffWholeYears(t, e), "year") : r === "month" ? x(n.diffWholeMonths(t, e), "month") : ya(t, e);
}
class is {
  constructor(e) {
    this.props = e, this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(e, n, r) {
    let { dateEnv: i } = this.props, s = i.subtract(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, -1, r);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(e, n, r) {
    let { dateEnv: i } = this.props, s = i.add(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, 1, r);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(e, n, r = !0) {
    let { props: i } = this, s, l, a, o, d, c;
    return s = this.buildValidRange(), s = this.trimHiddenDays(s), r && (e = uo(e, s)), l = this.buildCurrentRangeInfo(e, n), a = /^(year|month|week|day)$/.test(l.unit), o = this.buildRenderRange(this.trimHiddenDays(l.range), l.unit, a), o = this.trimHiddenDays(o), d = o, i.showNonCurrentDates || (d = Ae(d, l.range)), d = this.adjustActiveRange(d), d = Ae(d, s), c = co(l.range, s), ae(o, e) || (e = o.start), {
      currentDate: e,
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange: s,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: l.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: l.unit,
      isRangeAllDay: a,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange: d,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: o,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: i.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: i.slotMaxTime,
      isValid: c,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(l.duration)
      // pass a fallback (might be null) ^
    };
  }
  // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.
  buildValidRange() {
    let e = this.props.validRangeInput, n = typeof e == "function" ? e.call(this.props.calendarApi, this.props.dateEnv.toDate(this.props.nowManager.getDateMarker())) : e;
    return this.refineRange(n) || { start: null, end: null };
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(e, n) {
    let { props: r } = this, i = null, s = null, l = null, a;
    return r.duration ? (i = r.duration, s = r.durationUnit, l = this.buildRangeFromDuration(e, n, i, s)) : (a = this.props.dayCount) ? (s = "day", l = this.buildRangeFromDayCount(e, n, a)) : (l = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(l.start, l.end).unit : (i = this.getFallbackDuration(), s = fn(i).unit, l = this.buildRangeFromDuration(e, n, i, s)), { duration: i, unit: s, range: l };
  }
  getFallbackDuration() {
    return x({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: r, slotMinTime: i, slotMaxTime: s } = this.props, { start: l, end: a } = e;
    return r && (Le(i) < 0 && (l = B(l), l = n.add(l, i)), Le(s) > 1 && (a = B(a), a = L(a, -1), a = n.add(a, s))), { start: l, end: a };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, r, i) {
    let { dateEnv: s, dateAlignment: l } = this.props, a, o, d;
    if (!l) {
      let { dateIncrement: g } = this.props;
      g && $(g) < $(r) ? l = fn(g).unit : l = i;
    }
    Le(r) <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, n), a = B(a));
    function c() {
      a = s.startOf(e, l), o = s.add(a, r), d = { start: a, end: o };
    }
    return c(), this.trimHiddenDays(d) || (e = this.skipHiddenDays(e, n), c()), d;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, n, r) {
    let { dateEnv: i, dateAlignment: s } = this.props, l = 0, a = e, o;
    s && (a = i.startOf(a, s)), a = B(a), a = this.skipHiddenDays(a, n), o = a;
    do
      o = L(o, 1), this.isHiddenDay(o) || (l += 1);
    while (l < r);
    return { start: a, end: o };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(e) {
    let { props: n } = this, r = n.visibleRangeInput, i = typeof r == "function" ? r.call(n.calendarApi, n.dateEnv.toDate(e)) : r, s = this.refineRange(i);
    return s && (s.start == null || s.end == null) ? null : s;
  }
  // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.
  buildRenderRange(e, n, r) {
    return e;
  }
  // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.
  buildDateIncrement(e) {
    let { dateIncrement: n } = this.props, r;
    return n || ((r = this.props.dateAlignment) ? x(1, r) : e || x({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = ao(e, this.props.dateEnv);
      return n && (n = kn(n)), n;
    }
    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week
  initHiddenDays() {
    let e = this.props.hiddenDays || [], n = [], r = 0, i;
    for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
      (n[i] = e.indexOf(i) !== -1) || (r += 1);
    if (!r)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }
  // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null
  trimHiddenDays(e) {
    let { start: n, end: r } = e;
    return n && (n = this.skipHiddenDays(n)), r && (r = this.skipHiddenDays(r, -1, !0)), n == null || r == null || n < r ? { start: n, end: r } : null;
  }
  // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)
  isHiddenDay(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
  }
  // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)
  skipHiddenDays(e, n = 1, r = !1) {
    for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? n : 0) + 7) % 7]; )
      e = L(e, n);
    return e;
  }
}
function Mn(t, e, n, r) {
  return {
    instanceId: Ne(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: r ?? null
  };
}
function ho(t, e, n, r) {
  for (let i = 0; i < r.length; i += 1) {
    let s = r[i].parse(t, n);
    if (s) {
      let { allDay: l } = t;
      return l == null && (l = e, l == null && (l = s.allDayGuess, l == null && (l = !1))), {
        allDay: l,
        duration: s.duration,
        typeData: s.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function it(t, e, n) {
  let { dateEnv: r, pluginHooks: i, options: s } = n, { defs: l, instances: a } = t;
  a = Ge(a, (o) => !l[o.defId].recurringDef);
  for (let o in l) {
    let d = l[o];
    if (d.recurringDef) {
      let { duration: c } = d.recurringDef;
      c || (c = d.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
      let g = go(d, c, e, r, i.recurringTypes);
      for (let h of g) {
        let f = Mn(o, {
          start: h,
          end: r.add(h, c)
        });
        a[f.instanceId] = f;
      }
    }
  }
  return { defs: l, instances: a };
}
function go(t, e, n, r, i) {
  let l = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: r.subtract(n.start, e),
    end: n.end
  }, r);
  return t.allDay && (l = l.map(B)), l;
}
const Dt = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, ss = {
  start: p,
  end: p,
  date: p,
  allDay: Boolean
}, po = Object.assign(Object.assign(Object.assign({}, Dt), ss), { extendedProps: p });
function ls(t, e, n, r, i = In(n), s, l) {
  let { refined: a, extra: o } = as(t, n, i), d = vo(e, n), c = ho(a, d, n.dateEnv, n.pluginHooks.recurringTypes);
  if (c) {
    let h = gn(a, o, e ? e.sourceId : "", c.allDay, !!c.duration, n, s);
    return h.recurringDef = {
      typeId: c.typeId,
      typeData: c.typeData,
      duration: c.duration
    }, { def: h, instance: null };
  }
  let g = mo(a, d, n, r);
  if (g) {
    let h = gn(a, o, e ? e.sourceId : "", g.allDay, g.hasEnd, n, s), f = Mn(h.defId, g.range, g.forcedStartTzo, g.forcedEndTzo);
    return l && h.publicId && l[h.publicId] && (f.instanceId = l[h.publicId]), { def: h, instance: f };
  }
  return null;
}
function as(t, e, n = In(e)) {
  return _n(t, n);
}
function In(t) {
  return Object.assign(Object.assign(Object.assign({}, Ht), po), t.pluginHooks.eventRefiners);
}
function gn(t, e, n, r, i, s, l) {
  let a = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (l && t.id ? l[t.id] : "") || Ne(),
    sourceId: n,
    allDay: r,
    hasEnd: i,
    interactive: t.interactive,
    ui: Pt(t, s),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let o of s.pluginHooks.eventDefMemberAdders)
    Object.assign(a, o(t));
  return Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a;
}
function mo(t, e, n, r) {
  let { allDay: i } = t, s, l = null, a = !1, o, d = null, c = t.start != null ? t.start : t.date;
  if (s = n.dateEnv.createMarkerMeta(c), s)
    l = s.marker;
  else if (!r)
    return null;
  return t.end != null && (o = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!s || s.isTimeUnspecified) && (!o || o.isTimeUnspecified)), i && l && (l = B(l)), o && (d = o.marker, i && (d = B(d)), l && d <= l && (d = null)), d ? a = !0 : r || (a = n.options.forceEventDuration || !1, d = n.dateEnv.add(l, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: a,
    range: { start: l, end: d },
    forcedStartTzo: s ? s.forcedTzo : null,
    forcedEndTzo: o ? o.forcedTzo : null
  };
}
function vo(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
function tt(t, e, n, r, i, s) {
  let l = ce(), a = In(n);
  for (let o of t) {
    let d = ls(o, e, n, r, a, i, s);
    d && pn(d, l);
  }
  return l;
}
function pn(t, e = ce()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function yo(t, e) {
  let n = t.instances[e];
  if (n) {
    let r = t.defs[n.defId], i = On(t, (s) => bo(r, s));
    return i.defs[r.defId] = r, i.instances[n.instanceId] = n, i;
  }
  return ce();
}
function bo(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function ce() {
  return { defs: {}, instances: {} };
}
function Nn(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function On(t, e) {
  let n = Ge(t.defs, e), r = Ge(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: r };
}
function Ao(t, e) {
  let { defs: n, instances: r } = t, i = {}, s = {};
  for (let l in n)
    e.defs[l] || (i[l] = n[l]);
  for (let l in r)
    !e.instances[l] && // not explicitly excluded
    i[r[l].defId] && (s[l] = r[l]);
  return {
    defs: i,
    instances: s
  };
}
function Eo(t, e) {
  return Array.isArray(t) ? tt(t, null, e, !0) : typeof t == "object" && t ? tt([t], null, e, !0) : t != null ? String(t) : null;
}
function Gr(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const Ht = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: p,
  overlap: p,
  allow: p,
  className: Gr,
  classNames: Gr,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Co = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function Pt(t, e) {
  let n = Eo(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: n != null ? [n] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
    // join singular and plural
  };
}
function os(t) {
  return t.reduce(So, Co);
}
function So(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
const Do = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: p,
  eventDataTransform: p,
  // for any network-related sources
  success: p,
  failure: p
};
function cs(t, e, n = ds(e)) {
  let r;
  if (typeof t == "string" ? r = { url: t } : typeof t == "function" || Array.isArray(t) ? r = { events: t } : typeof t == "object" && t && (r = t), r) {
    let { refined: i, extra: s } = _n(r, n), l = wo(i, e);
    if (l)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: Ne(),
        sourceDefId: l.sourceDefId,
        meta: l.meta,
        ui: Pt(i, e),
        extendedProps: s
      };
  }
  return null;
}
function ds(t) {
  return Object.assign(Object.assign(Object.assign({}, Ht), Do), t.pluginHooks.eventSourceRefiners);
}
function wo(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let s = n[r].parseMeta(t);
    if (s)
      return { sourceDefId: r, meta: s };
  }
  return null;
}
function _o(t, e, n, r, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return Ro(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return To(t, n[e.sourceId], e.rawEvents, r.activeRange, i);
    case "ADD_EVENTS":
      return xo(
        t,
        e.eventStore,
        // new ones
        r ? r.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return Nn(t, e.eventStore);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? it(t, r.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return Ao(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return fs(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return On(t, (s) => !s.sourceId);
    case "REMOVE_ALL_EVENTS":
      return ce();
    default:
      return t;
  }
}
function Ro(t, e, n, r, i, s) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let l = tt(us(i, e, s), e, s);
    return r && (l = it(l, r, s)), Nn(fs(t, e.sourceId), l);
  }
  return t;
}
function To(t, e, n, r, i) {
  const { defIdMap: s, instanceIdMap: l } = ko(t);
  let a = tt(us(n, e, i), e, i, !1, s, l);
  return it(a, r, i);
}
function us(t, e, n) {
  let r = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = Qr(t, i)), r && (t = Qr(t, r)), t;
}
function Qr(t, e) {
  let n;
  if (!e)
    n = t;
  else {
    n = [];
    for (let r of t) {
      let i = e(r);
      i ? n.push(i) : i == null && n.push(r);
    }
  }
  return n;
}
function xo(t, e, n, r) {
  return n && (e = it(e, n, r)), Nn(t, e);
}
function qr(t, e, n) {
  let { defs: r } = t, i = Ie(t.instances, (s) => r[s.defId].allDay ? s : Object.assign(Object.assign({}, s), { range: {
    start: n.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
    end: n.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : s.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : s.forcedEndTzo }));
  return { defs: r, instances: i };
}
function fs(t, e) {
  return On(t, (n) => n.sourceId !== e);
}
function ko(t) {
  const { defs: e, instances: n } = t, r = {}, i = {};
  for (let s in e) {
    const l = e[s], { publicId: a } = l;
    a && (r[a] = s);
  }
  for (let s in n) {
    const l = n[s], a = e[l.defId], { publicId: o } = a;
    o && (i[o] = s);
  }
  return { defIdMap: r, instanceIdMap: i };
}
class Mo {
  constructor() {
    this.handlers = {}, this.thisContext = null;
  }
  setThisContext(e) {
    this.thisContext = e;
  }
  setOptions(e) {
    this.options = e;
  }
  on(e, n) {
    Io(this.handlers, e, n);
  }
  off(e, n) {
    No(this.handlers, e, n);
  }
  trigger(e, ...n) {
    let r = this.handlers[e] || [], i = this.options && this.options[e], s = [].concat(i || [], r);
    for (let l of s)
      l.apply(this.thisContext, n);
  }
  hasHandlers(e) {
    return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
}
function Io(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function No(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
}
const Oo = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function Ho(t, e) {
  return tt(Po(t), null, e);
}
function Po(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, Oo), n)), e;
}
function Bo(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, zo(t, n)), { jsEvent: null, view: n.viewApi || n.calendarApi.view }));
}
function Fo(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function zo(t, e) {
  let n = {};
  for (let r of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, Ko(t, e.dateEnv)), n;
}
function Yr(t, e, n) {
  let { dateEnv: r, options: i } = n, s = e;
  return t ? (s = B(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s;
}
function Uo(t, e, n, r) {
  let i = gs(t.defs, e), s = ce();
  for (let l in t.defs) {
    let a = t.defs[l];
    s.defs[l] = Wo(a, i[l], n, r);
  }
  for (let l in t.instances) {
    let a = t.instances[l], o = s.defs[a.defId];
    s.instances[l] = Lo(a, o, i[a.defId], n, r);
  }
  return s;
}
function Wo(t, e, n, r) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let s = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
  for (let l of r.pluginHooks.eventDefMutationAppliers)
    l(s, n, r);
  return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
}
function Lo(t, e, n, r, i) {
  let { dateEnv: s } = i, l = r.standardProps && r.standardProps.allDay === !0, a = r.standardProps && r.standardProps.hasEnd === !1, o = Object.assign({}, t);
  return l && (o.range = rs(o.range)), r.datesDelta && n.startEditable && (o.range = {
    start: s.add(o.range.start, r.datesDelta),
    end: s.add(o.range.end, r.datesDelta)
  }), r.startDelta && n.durationEditable && (o.range = {
    start: s.add(o.range.start, r.startDelta),
    end: o.range.end
  }), r.endDelta && n.durationEditable && (o.range = {
    start: o.range.start,
    end: s.add(o.range.end, r.endDelta)
  }), a && (o.range = {
    start: o.range.start,
    end: Yr(e.allDay, o.range.start, i)
  }), e.allDay && (o.range = {
    start: B(o.range.start),
    end: B(o.range.end)
  }), o.range.end < o.range.start && (o.range.end = Yr(e.allDay, o.range.start, i)), o;
}
class Ue {
  constructor(e, n) {
    this.context = e, this.internalEventSource = n;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
}
class Y {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, n, r) {
    this._context = e, this._def = n, this._instance = r || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, n) {
    if (e in ss)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = Dt[e](n), this.mutate({
        standardProps: { publicId: n }
        // hardcoded internal name
      });
    else if (e in Dt)
      n = Dt[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in Ht) {
      let r = Ht[e](n);
      e === "color" ? r = { backgroundColor: n, borderColor: n } : e === "editable" ? r = { startEditable: n, durationEditable: n } : r = { [e]: n }, this.mutate({
        standardProps: { ui: r }
      });
    } else
      console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(e, n) {
    this.mutate({
      extendedProps: { [e]: n }
    });
  }
  setStart(e, n = {}) {
    let { dateEnv: r } = this._context, i = r.createMarker(e);
    if (i && this._instance) {
      let s = this._instance.range, l = pt(s.start, i, r, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: l }) : this.mutate({ startDelta: l });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: r } = this._context, i;
    if (!(e != null && (i = r.createMarker(e), !i)) && this._instance)
      if (i) {
        let s = pt(this._instance.range.end, i, r, n.granularity);
        this.mutate({ endDelta: s });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, r = {}) {
    let { dateEnv: i } = this._context, s = { allDay: r.allDay }, l = i.createMarker(e), a;
    if (l && !(n != null && (a = i.createMarker(n), !a)) && this._instance) {
      let o = this._instance.range;
      r.allDay === !0 && (o = rs(o));
      let d = pt(o.start, l, i, r.granularity);
      if (a) {
        let c = pt(o.end, a, i, r.granularity);
        oa(d, c) ? this.mutate({ datesDelta: d, standardProps: s }) : this.mutate({ startDelta: d, endDelta: c, standardProps: s });
      } else
        s.hasEnd = !1, this.mutate({ datesDelta: d, standardProps: s });
    }
  }
  moveStart(e) {
    let n = x(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = x(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = x(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let r = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = i), this.mutate({ standardProps: r });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, r = this._instance, i = H(e);
    return this._def.hasEnd ? n.formatRange(r.range.start, r.range.end, i, {
      forcedStartTzo: r.forcedStartTzo,
      forcedEndTzo: r.forcedEndTzo
    }) : n.format(r.range.start, i, {
      forcedTzo: r.forcedStartTzo
    });
  }
  mutate(e) {
    let n = this._instance;
    if (n) {
      let r = this._def, i = this._context, { eventStore: s } = i.getCurrentData(), l = yo(s, n.instanceId);
      l = Uo(l, {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      }, e, i);
      let o = new Y(i, r, n);
      this._def = l.defs[r.defId], this._instance = l.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: l
      }), i.emitter.trigger("eventChange", {
        oldEvent: o,
        event: this,
        relatedEvents: Hn(l, i, n),
        revert() {
          i.dispatch({
            type: "RESET_EVENTS",
            eventStore: s
            // the ORIGINAL store
          });
        }
      });
    }
  }
  remove() {
    let e = this._context, n = hs(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }
  get source() {
    let { sourceId: e } = this._def;
    return e ? new Ue(this._context, this._context.getCurrentData().eventSources[e]) : null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let e = this._instance;
    return e ? this._context.dateEnv.formatIso(e.range.start, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedStartTzo
    }) : "";
  }
  get endStr() {
    let e = this._instance;
    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedEndTzo
    }) : "";
  }
  // computable props that all access the def
  // TODO: find a TypeScript-compatible way to do this at scale
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  // bad. just normalize the type earlier
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  // NOTE: user can't modify these because Object.freeze was called in event-def parsing
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(e = {}) {
    let n = this._def, { ui: r } = n, { startStr: i, endStr: s } = this, l = {
      allDay: n.allDay
    };
    return n.title && (l.title = n.title), i && (l.start = i), s && (l.end = s), n.publicId && (l.id = n.publicId), n.groupId && (l.groupId = n.groupId), n.url && (l.url = n.url), r.display && r.display !== "auto" && (l.display = r.display), e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor ? l.color = r.backgroundColor : (r.backgroundColor && (l.backgroundColor = r.backgroundColor), r.borderColor && (l.borderColor = r.borderColor)), r.textColor && (l.textColor = r.textColor), r.classNames.length && (l.classNames = r.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(l, n.extendedProps) : l.extendedProps = n.extendedProps), l;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function hs(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function Hn(t, e, n) {
  let { defs: r, instances: i } = t, s = [], l = n ? n.instanceId : "";
  for (let a in i) {
    let o = i[a], d = r[o.defId];
    o.instanceId !== l && s.push(new Y(e, d, o));
  }
  return s;
}
function mn(t, e, n, r) {
  let i = {}, s = {}, l = {}, a = [], o = [], d = gs(t.defs, e);
  for (let c in t.defs) {
    let g = t.defs[c];
    d[g.defId].display === "inverse-background" && (g.groupId ? (i[g.groupId] = [], l[g.groupId] || (l[g.groupId] = g)) : s[c] = []);
  }
  for (let c in t.instances) {
    let g = t.instances[c], h = t.defs[g.defId], f = d[h.defId], m = g.range, y = !h.allDay && r ? kn(m, r) : m, v = Ae(y, n);
    v && (f.display === "inverse-background" ? h.groupId ? i[h.groupId].push(v) : s[g.defId].push(v) : f.display !== "none" && (f.display === "background" ? a : o).push({
      def: h,
      ui: f,
      instance: g,
      range: v,
      isStart: y.start && y.start.valueOf() === v.start.valueOf(),
      isEnd: y.end && y.end.valueOf() === v.end.valueOf()
    }));
  }
  for (let c in i) {
    let g = i[c], h = Vr(g, n);
    for (let f of h) {
      let m = l[c], y = d[m.defId];
      a.push({
        def: m,
        ui: y,
        instance: null,
        range: f,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let c in s) {
    let g = s[c], h = Vr(g, n);
    for (let f of h)
      a.push({
        def: t.defs[c],
        ui: d[c],
        instance: null,
        range: f,
        isStart: !1,
        isEnd: !1
      });
  }
  return { bg: a, fg: o };
}
function jo(t) {
  return t.ui.display === "background" || t.ui.display === "inverse-background";
}
function Zr(t, e) {
  t.fcSeg = e;
}
function vn(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function gs(t, e) {
  return Ie(t, (n) => ps(n, e));
}
function ps(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), os(n);
}
function Pn(t, e) {
  let n = t.map(Vo);
  return n.sort((r, i) => na(r, i, e)), n.map((r) => r._seg);
}
function Vo(t) {
  let { eventRange: e } = t, n = e.def, r = e.instance ? e.instance.range : e.range, i = r.start ? r.start.valueOf() : 0, s = r.end ? r.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
    id: n.publicId,
    start: i,
    end: s,
    duration: s - i,
    allDay: Number(n.allDay),
    _seg: t
  });
}
function Go(t, e) {
  let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: i, ui: s } = t.eventRange, l = s.startEditable;
  for (let a of r)
    l = a(l, i, s, e);
  return l;
}
function Qo(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function qo(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function Je(t, e, n, r, i, s, l) {
  let { dateEnv: a, options: o } = n, { displayEventTime: d, displayEventEnd: c } = o, g = t.eventRange.def, h = t.eventRange.instance;
  d == null && (d = r !== !1), c == null && (c = i !== !1);
  let f = h.range.start, m = h.range.end, y = s || t.start || t.eventRange.range.start, v = l || t.end || t.eventRange.range.end, b = B(f).valueOf() === B(y).valueOf(), E = B(be(m, -1)).valueOf() === B(be(v, -1)).valueOf();
  return d && !g.allDay && (b || E) ? (y = b ? f : y, v = E ? m : v, c && g.hasEnd ? a.formatRange(y, v, e, {
    forcedStartTzo: s ? null : h.forcedStartTzo,
    forcedEndTzo: l ? null : h.forcedEndTzo
  }) : a.format(y, e, {
    forcedTzo: s ? null : h.forcedStartTzo
    // nooooo, same
  })) : "";
}
function oe(t, e, n) {
  let r = t.eventRange.range;
  return {
    isPast: r.end <= (n || e.start),
    isFuture: r.start >= (n || e.end),
    isToday: e && ae(e, r.start)
  };
}
function Yo(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function ms(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function Bn(t, e) {
  let { def: n, instance: r } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: s, options: l } = e, { eventInteractive: a } = l;
  return a == null && (a = n.interactive, a == null && (a = !!s.hasHandlers("eventClick"))), a ? qi((o) => {
    s.trigger("eventClick", {
      el: o.target,
      event: new Y(e, n, r),
      jsEvent: o,
      view: e.viewApi
    });
  }) : {};
}
const Zo = {
  start: p,
  end: p,
  allDay: Boolean
};
function $o(t, e, n) {
  let r = Jo(t, e), { range: i } = r;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return r;
}
function Jo(t, e) {
  let { refined: n, extra: r } = _n(t, Zo), i = n.start ? e.createMarkerMeta(n.start) : null, s = n.end ? e.createMarkerMeta(n.end) : null, { allDay: l } = n;
  return l == null && (l = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: s ? s.marker : null
  }, allDay: l }, r);
}
function Ko(t, e) {
  return Object.assign(Object.assign({}, ys(t.range, e, t.allDay)), { allDay: t.allDay });
}
function vs(t, e, n) {
  return Object.assign(Object.assign({}, ys(t, e, n)), { timeZone: e.timeZone });
}
function ys(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function Xo(t, e, n) {
  let r = as({ editable: !1 }, n), i = gn(
    r.refined,
    r.extra,
    "",
    // sourceId
    t.allDay,
    !0,
    // hasEnd
    n
  );
  return {
    def: i,
    ui: ps(i, e),
    instance: Mn(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function ec(t, e, n) {
  let r = !1, i = function(a) {
    r || (r = !0, e(a));
  }, s = function(a) {
    r || (r = !0, n(a));
  }, l = t(i, s);
  l && typeof l.then == "function" && l.then(i, s);
}
class $r extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function tc(t, e, n) {
  t = t.toUpperCase();
  const r = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, r).then((i) => {
    if (i.ok)
      return i.json().then((s) => [s, i], () => {
        throw new $r("Failure parsing JSON", i);
      });
    throw new $r("Request failed", i);
  });
}
let Xt;
function bs() {
  return Xt == null && (Xt = nc()), Xt;
}
function nc() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
class rc extends k {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      Ot(() => {
        this.setState({ forPrint: !0 });
      });
    }, this.handleAfterPrint = () => {
      Ot(() => {
        this.setState({ forPrint: !1 });
      });
    };
  }
  render() {
    let { props: e } = this, { options: n } = e, { forPrint: r } = this.state, i = r || n.height === "auto" || n.contentHeight === "auto", s = !i && n.height != null ? n.height : "", l = [
      "fc",
      r ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${n.direction}`,
      e.theme.getClass("root")
    ];
    return bs() || l.push("fc-liquid-hack"), e.children(l, s, i, r);
  }
  componentDidMount() {
    let { emitter: e } = this.props;
    e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    let { emitter: e } = this.props;
    e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
  }
}
class As {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function ic(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
const Jr = {};
class He extends q {
  constructor(e, n) {
    super(e, n), this.handleRefresh = () => {
      let r = this.computeTiming();
      r.state.nowDate.valueOf() !== this.state.nowDate.valueOf() && this.setState(r.state), this.clearTimeout(), this.setTimeout(r.waitMs);
    }, this.handleVisibilityChange = () => {
      document.hidden || this.handleRefresh();
    }, this.state = this.computeTiming().state;
  }
  render() {
    let { props: e, state: n } = this;
    return e.children(n.nowDate, n.todayRange);
  }
  componentDidMount() {
    this.setTimeout(), this.context.nowManager.addResetListener(this.handleRefresh), document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }
  componentDidUpdate(e) {
    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }
  componentWillUnmount() {
    this.clearTimeout(), this.context.nowManager.removeResetListener(this.handleRefresh), document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }
  computeTiming() {
    let { props: e, context: n } = this, r = n.nowManager.getDateMarker(), { nowIndicatorSnap: i } = n.options;
    i === "auto" && (i = // large unit?
    /year|month|week|day/.test(e.unit) || // if slotDuration 30 mins for example, would NOT appear to snap (legacy behavior)
    (e.unitValue || 1) === 1);
    let s, l;
    return i ? (s = n.dateEnv.startOf(r, e.unit), l = n.dateEnv.add(s, x(1, e.unit)).valueOf() - r.valueOf()) : (s = r, l = 1e3 * 60), l = Math.min(1e3 * 60 * 60 * 24, l), {
      state: { nowDate: s, todayRange: sc(s) },
      waitMs: l
    };
  }
  setTimeout(e = this.computeTiming().waitMs) {
    this.timeoutId = setTimeout(() => {
      const n = this.computeTiming();
      this.setState(n.state, () => {
        this.setTimeout(n.waitMs);
      });
    }, e);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
He.contextType = de;
function sc(t) {
  let e = B(t), n = L(e, 1);
  return { start: e, end: n };
}
class lc {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(e) {
    this.currentDataManager.dispatch(e);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(e) {
    e();
  }
  updateSize() {
    this.trigger("_resize", !0);
  }
  // Options
  // -----------------------------------------------------------------------------------------------------------------
  setOption(e, n) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: n
    });
  }
  getOption(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  // Trigger
  // -----------------------------------------------------------------------------------------------------------------
  on(e, n) {
    let { currentDataManager: r } = this;
    r.currentCalendarOptionsRefiners[e] ? r.emitter.on(e, n) : console.warn(`Unknown listener name '${e}'`);
  }
  off(e, n) {
    this.currentDataManager.emitter.off(e, n);
  }
  // not meant for public use
  trigger(e, ...n) {
    this.currentDataManager.emitter.trigger(e, ...n);
  }
  // View
  // -----------------------------------------------------------------------------------------------------------------
  changeView(e, n) {
    this.batchRendering(() => {
      if (this.unselect(), n)
        if (n.start && n.end)
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: n
          });
        else {
          let { dateEnv: r } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: r.createMarker(n)
          });
        }
      else
        this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
    });
  }
  // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change
  zoomTo(e, n) {
    let r = this.getCurrentData(), i;
    n = n || "day", i = r.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), i ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: i.type,
      dateMarker: e
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e
    });
  }
  // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.
  getUnitViewSpec(e) {
    let { viewSpecs: n, toolbarConfig: r } = this.getCurrentData(), i = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), s, l;
    for (let a in n)
      i.push(a);
    for (s = 0; s < i.length; s += 1)
      if (l = n[i[s]], l && l.singleUnit === e)
        return l;
    return null;
  }
  // Current Date
  // -----------------------------------------------------------------------------------------------------------------
  prev() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, -1)
    });
  }
  nextYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, 1)
    });
  }
  today() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.nowManager.getDateMarker()
    });
  }
  gotoDate(e) {
    let n = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.createMarker(e)
    });
  }
  incrementDate(e) {
    let n = this.getCurrentData(), r = x(e);
    r && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.add(n.currentDate, r)
    }));
  }
  getDate() {
    let e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }
  // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------
  formatDate(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.format(r.createMarker(e), H(n));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, n, r) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), H(r), r);
  }
  formatIso(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.formatIso(r.createMarker(e), { omitTime: n });
  }
  // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  select(e, n) {
    let r;
    n == null ? e.start != null ? r = e : r = {
      start: e,
      end: null
    } : r = {
      start: e,
      end: n
    };
    let i = this.getCurrentData(), s = $o(r, i.dateEnv, x({ days: 1 }));
    s && (this.dispatch({ type: "SELECT_DATES", selection: s }), Bo(s, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), Fo(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof Y) {
      let l = e._def, a = e._instance;
      return this.getCurrentData().eventStore.defs[l.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: pn({ def: l, instance: a })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let r = this.getCurrentData(), i;
    if (n instanceof Ue)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = Tn(r.eventSources));
    else if (n != null) {
      let l = this.getEventSourceById(n);
      if (!l)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = l.internalEventSource;
    }
    let s = ls(e, i, r, !1);
    if (s) {
      let l = new Y(r, s.def, s.def.recurringDef ? null : s.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: pn(s)
      }), this.triggerEventAdd(l), l;
    }
    return null;
  }
  triggerEventAdd(e) {
    let { emitter: n } = this.getCurrentData();
    n.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: hs(e)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(e) {
    let n = this.getCurrentData(), { defs: r, instances: i } = n.eventStore;
    e = String(e);
    for (let s in r) {
      let l = r[s];
      if (l.publicId === e) {
        if (l.recurringDef)
          return new Y(n, l, null);
        for (let a in i) {
          let o = i[a];
          if (o.defId === l.defId)
            return new Y(n, l, o);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return Hn(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, r = [];
    for (let i in n)
      r.push(new Ue(e, n[i]));
    return r;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), r = n.eventSources;
    e = String(e);
    for (let i in r)
      if (r[i].publicId === e)
        return new Ue(n, r[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof Ue)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let r = cs(e, n);
    return r ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [r] }), new Ue(n, r)) : null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }
  // Scroll
  // -----------------------------------------------------------------------------------------------------------------
  scrollToTime(e) {
    let n = x(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
function ac(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
const en = ce();
class oc {
  constructor() {
    this.getKeysForEventDefs = C(this._getKeysForEventDefs), this.splitDateSelection = C(this._splitDateSpan), this.splitEventStore = C(this._splitEventStore), this.splitIndividualUi = C(this._splitIndividualUi), this.splitEventDrag = C(this._splitInteraction), this.splitEventResize = C(this._splitInteraction), this.eventUiBuilders = {};
  }
  splitProps(e) {
    let n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore), i = this.splitDateSelection(e.dateSelection), s = this.splitIndividualUi(e.eventUiBases, r), l = this.splitEventStore(e.eventStore, r), a = this.splitEventDrag(e.eventDrag), o = this.splitEventResize(e.eventResize), d = {};
    this.eventUiBuilders = Ie(n, (c, g) => this.eventUiBuilders[g] || C(cc));
    for (let c in n) {
      let g = n[c], h = l[c] || en, f = this.eventUiBuilders[c];
      d[c] = {
        businessHours: g.businessHours || e.businessHours,
        dateSelection: i[c] || null,
        eventStore: h,
        eventUiBases: f(e.eventUiBases[""], g.ui, s[c]),
        eventSelection: h.instances[e.eventSelection] ? e.eventSelection : "",
        eventDrag: a[c] || null,
        eventResize: o[c] || null
      };
    }
    return d;
  }
  _splitDateSpan(e) {
    let n = {};
    if (e) {
      let r = this.getKeysForDateSpan(e);
      for (let i of r)
        n[i] = e;
    }
    return n;
  }
  _getKeysForEventDefs(e) {
    return Ie(e.defs, (n) => this.getKeysForEventDef(n));
  }
  _splitEventStore(e, n) {
    let { defs: r, instances: i } = e, s = {};
    for (let l in r)
      for (let a of n[l])
        s[a] || (s[a] = ce()), s[a].defs[l] = r[l];
    for (let l in i) {
      let a = i[l];
      for (let o of n[a.defId])
        s[o] && (s[o].instances[l] = a);
    }
    return s;
  }
  _splitIndividualUi(e, n) {
    let r = {};
    for (let i in e)
      if (i)
        for (let s of n[i])
          r[s] || (r[s] = {}), r[s][i] = e[i];
    return r;
  }
  _splitInteraction(e) {
    let n = {};
    if (e) {
      let r = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)), i = this._getKeysForEventDefs(e.mutatedEvents), s = this._splitEventStore(e.mutatedEvents, i), l = (a) => {
        n[a] || (n[a] = {
          affectedEvents: r[a] || en,
          mutatedEvents: s[a] || en,
          isEvent: e.isEvent
        });
      };
      for (let a in r)
        l(a);
      for (let a in s)
        l(a);
    }
    return n;
  }
}
function cc(t, e, n) {
  let r = [];
  t && r.push(t), e && r.push(e);
  let i = {
    "": os(r)
  };
  return n && Object.assign(i, n), i;
}
function Fn(t, e, n, r) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(r && (!r.activeRange || !ae(r.activeRange, t))),
    isOther: !!(r && !ae(r.currentRange, t)),
    isToday: !!(e && ae(e, t)),
    isPast: !!(n ? t < n : e && t < e.start),
    isFuture: !!(n ? t > n : e && t >= e.end)
  };
}
function Ut(t, e) {
  let n = [
    "fc-day",
    `fc-day-${ha[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const dc = H({ year: "numeric", month: "long", day: "numeric" }), uc = H({ week: "long" });
function Qe(t, e, n = "day", r = !0) {
  const { dateEnv: i, options: s, calendarApi: l } = t;
  let a = i.format(e, n === "week" ? uc : dc);
  if (s.navLinks) {
    let o = i.toDate(e);
    const d = (c) => {
      let g = n === "day" ? s.navLinkDayClick : n === "week" ? s.navLinkWeekClick : null;
      typeof g == "function" ? g.call(l, i.toDate(e), c) : (typeof g == "string" && (n = g), l.zoomTo(e, n));
    };
    return Object.assign({ title: $e(s.navLinkHint, [a, o], a), "data-navlink": "" }, r ? Qi(d) : { onClick: d });
  }
  return { "aria-label": a };
}
let tn;
function fc() {
  return tn || (tn = hc()), tn;
}
function hc() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = gc(t);
  return document.body.removeChild(t), e;
}
function gc(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function pc(t) {
  let e = mc(t), n = t.getBoundingClientRect();
  for (let r of e) {
    let i = ac(n, r.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function mc(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
class qe {
  constructor(e, n, r, i) {
    this.els = n;
    let s = this.originClientRect = e.getBoundingClientRect();
    r && this.buildElHorizontals(s.left), i && this.buildElVerticals(s.top);
  }
  // Populates the left/right internal coordinate arrays
  buildElHorizontals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.left - e), r.push(s.right - e);
    }
    this.lefts = n, this.rights = r;
  }
  // Populates the top/bottom internal coordinate arrays
  buildElVerticals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.top - e), r.push(s.bottom - e);
    }
    this.tops = n, this.bottoms = r;
  }
  // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.
  leftToIndex(e) {
    let { lefts: n, rights: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.
  topToIndex(e) {
    let { tops: n, bottoms: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  // Gets the width of the element at the given index
  getWidth(e) {
    return this.rights[e] - this.lefts[e];
  }
  // Gets the height of the element at the given index
  getHeight(e) {
    return this.bottoms[e] - this.tops[e];
  }
  similarTo(e) {
    return mt(this.tops || [], e.tops || []) && mt(this.bottoms || [], e.bottoms || []) && mt(this.lefts || [], e.lefts || []) && mt(this.rights || [], e.rights || []);
  }
}
function mt(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (Math.round(t[r]) !== Math.round(e[r]))
      return !1;
  return !0;
}
class K extends k {
  constructor() {
    super(...arguments), this.uid = Ne();
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  prepareHits() {
  }
  queryHit(e, n, r, i) {
    return null;
  }
  // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------
  isValidSegDownEl(e) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !se(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !se(e, ".fc-event:not(.fc-bg-event)") && !se(e, ".fc-more-link") && // a "more.." link
    !se(e, "a[data-navlink]") && // a clickable nav link
    !se(e, ".fc-popover");
  }
}
class Es {
  constructor(e = (n) => n.thickness || 1) {
    this.getEntryThickness = e, this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  addSegs(e) {
    let n = [];
    for (let r of e)
      this.insertEntry(r, n);
    return n;
  }
  insertEntry(e, n) {
    let r = this.findInsertion(e);
    this.isInsertionValid(r, e) ? this.insertEntryAt(e, r) : this.handleInvalidInsertion(r, e, n);
  }
  isInsertionValid(e, n) {
    return (this.maxCoord === -1 || e.levelCoord + this.getEntryThickness(n) <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }
  handleInvalidInsertion(e, n, r) {
    if (this.allowReslicing && e.touchingEntry) {
      const i = Object.assign(Object.assign({}, n), { span: zn(n.span, e.touchingEntry.span) });
      r.push(i), this.splitEntry(n, e.touchingEntry, r);
    } else
      r.push(n);
  }
  /*
  Does NOT add what hit the `barrier` into hiddenEntries. Should already be done.
  */
  splitEntry(e, n, r) {
    let i = e.span, s = n.span;
    i.start < s.start && this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: i.start, end: s.start }
    }, r), i.end > s.end && this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: s.end, end: i.end }
    }, r);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: r, levelCoords: i } = this;
    n.lateral === -1 ? (nn(i, n.level, n.levelCoord), nn(r, n.level, [e])) : nn(r[n.level], n.lateral, e), this.stackCnts[Me(e)] = n.stackCnt;
  }
  /*
  does not care about limits
  */
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: r, strictOrder: i, stackCnts: s } = this, l = n.length, a = 0, o = -1, d = -1, c = null, g = 0;
    for (let m = 0; m < l; m += 1) {
      const y = n[m];
      if (!i && y >= a + this.getEntryThickness(e))
        break;
      let v = r[m], b, E = bn(v, e.span.start, yn), _ = E[0] + E[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (b = v[_]) && // but not past the whole entry list
        b.span.start < e.span.end;
      ) {
        let w = y + this.getEntryThickness(b);
        w > a && (a = w, c = b, o = m, d = _), w === a && (g = Math.max(g, s[Me(b)] + 1)), _ += 1;
      }
    }
    let h = 0;
    if (c)
      for (h = o + 1; h < l && n[h] < a; )
        h += 1;
    let f = -1;
    return h < l && n[h] === a && (f = bn(r[h], e.span.end, yn)[0]), {
      touchingLevel: o,
      touchingLateral: d,
      touchingEntry: c,
      stackCnt: g,
      levelCoord: a,
      level: h,
      lateral: f
    };
  }
  // sorted by levelCoord (lowest to highest)
  toRects() {
    let { entriesByLevel: e, levelCoords: n } = this, r = e.length, i = [];
    for (let s = 0; s < r; s += 1) {
      let l = e[s], a = n[s];
      for (let o of l)
        i.push(Object.assign(Object.assign({}, o), { thickness: this.getEntryThickness(o), levelCoord: a }));
    }
    return i;
  }
}
function yn(t) {
  return t.span.end;
}
function Me(t) {
  return t.index + ":" + t.span.start;
}
function vc(t) {
  let e = [];
  for (let n of t) {
    let r = [], i = {
      span: n.span,
      entries: [n]
    };
    for (let s of e)
      zn(s.span, i.span) ? i = {
        entries: s.entries.concat(i.entries),
        span: yc(s.span, i.span)
      } : r.push(s);
    r.push(i), e = r;
  }
  return e;
}
function yc(t, e) {
  return {
    start: Math.min(t.start, e.start),
    end: Math.max(t.end, e.end)
  };
}
function zn(t, e) {
  let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n < r ? { start: n, end: r } : null;
}
function nn(t, e, n) {
  t.splice(e, 0, n);
}
function bn(t, e, n) {
  let r = 0, i = t.length;
  if (!i || e < n(t[r]))
    return [0, 0];
  if (e > n(t[i - 1]))
    return [i, 0];
  for (; r < i; ) {
    let s = Math.floor(r + (i - r) / 2), l = n(t[s]);
    if (e < l)
      i = s;
    else if (e > l)
      r = s + 1;
    else
      return [s, 1];
  }
  return [r, 0];
}
function bc(t, e) {
  return !t || e > 10 ? H({ weekday: "short" }) : e > 1 ? H({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : H({ weekday: "long" });
}
const Cs = "fc-col-header-cell";
function Ss(t) {
  return t.text;
}
class Ac extends k {
  render() {
    let { dateEnv: e, options: n, theme: r, viewApi: i } = this.context, { props: s } = this, { date: l, dateProfile: a } = s, o = Fn(l, s.todayRange, null, a), d = [Cs].concat(Ut(o, r)), c = e.format(l, s.dayHeaderFormat), g = !o.isDisabled && s.colCnt > 1 ? Qe(this.context, l) : {}, h = e.toDate(l);
    e.namedTimeZoneImpl && (h = be(h, 36e5));
    let f = Object.assign(Object.assign(Object.assign({ date: h, view: i }, s.extraRenderProps), { text: c }), o);
    return u(V, { elTag: "th", elClasses: d, elAttrs: Object.assign({ role: "columnheader", colSpan: s.colSpan, "data-date": o.isDisabled ? void 0 : nt(l) }, s.extraDataAttrs), renderProps: f, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: Ss, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (m) => u("div", { className: "fc-scrollgrid-sync-inner" }, !o.isDisabled && u(m, { elTag: "a", elAttrs: g, elClasses: [
      "fc-col-header-cell-cushion",
      s.isSticky && "fc-sticky"
    ] })));
  }
}
const Ec = H({ weekday: "long" });
class Cc extends k {
  render() {
    let { props: e } = this, { dateEnv: n, theme: r, viewApi: i, options: s } = this.context, l = L(/* @__PURE__ */ new Date(2592e5), e.dow), a = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, o = n.format(l, e.dayHeaderFormat), d = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date: l
    }, a), { view: i }), e.extraRenderProps), { text: o });
    return u(V, { elTag: "th", elClasses: [
      Cs,
      ...Ut(a, r),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: d, generatorName: "dayHeaderContent", customGenerator: s.dayHeaderContent, defaultGenerator: Ss, classNameGenerator: s.dayHeaderClassNames, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, (c) => u(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      u(c, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(l, Ec)
      } })
    ));
  }
}
class Ds extends k {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = C(Sc);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: i, renderIntro: s } = this.props, l = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return u(He, { unit: "day" }, (a, o) => u(
      "tr",
      { role: "row" },
      s && s("day"),
      n.map((d) => i ? u(Ac, { key: d.toISOString(), date: d, dateProfile: r, todayRange: o, colCnt: n.length, dayHeaderFormat: l }) : u(Cc, { key: d.getUTCDay(), dow: d.getUTCDay(), dayHeaderFormat: l }))
    ));
  }
}
function Sc(t, e, n) {
  return t || bc(e, n);
}
class ws {
  constructor(e, n) {
    let r = e.start, { end: i } = e, s = [], l = [], a = -1;
    for (; r < i; )
      n.isHiddenDay(r) ? s.push(a + 0.5) : (a += 1, s.push(a), l.push(r)), r = L(r, 1);
    this.dates = l, this.indices = s, this.cnt = l.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex(L(e.end, -1)), i = Math.max(0, n), s = Math.min(this.cnt - 1, r);
    return i = Math.ceil(i), s = Math.floor(s), i <= s ? {
      firstIndex: i,
      lastIndex: s,
      isStart: n === i,
      isEnd: r === s
    } : null;
  }
  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(e) {
    let { indices: n } = this, r = Math.floor(Ee(this.dates[0], e));
    return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
  }
}
class _s {
  constructor(e, n) {
    let { dates: r } = e, i, s, l;
    if (n) {
      for (s = r[0].getUTCDay(), i = 1; i < r.length && r[i].getUTCDay() !== s; i += 1)
        ;
      l = Math.ceil(r.length / i);
    } else
      l = 1, i = r.length;
    this.rowCnt = l, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let e = [];
    for (let n = 0; n < this.rowCnt; n += 1) {
      let r = [];
      for (let i = 0; i < this.colCnt; i += 1)
        r.push(this.buildCell(n, i));
      e.push(r);
    }
    return e;
  }
  buildCell(e, n) {
    let r = this.daySeries.dates[e * this.colCnt + n];
    return {
      key: r.toISOString(),
      date: r
    };
  }
  buildHeaderDates() {
    let e = [];
    for (let n = 0; n < this.colCnt; n += 1)
      e.push(this.cells[0][n].date);
    return e;
  }
  sliceRange(e) {
    let { colCnt: n } = this, r = this.daySeries.sliceRange(e), i = [];
    if (r) {
      let { firstIndex: s, lastIndex: l } = r, a = s;
      for (; a <= l; ) {
        let o = Math.floor(a / n), d = Math.min((o + 1) * n, l + 1);
        i.push({
          row: o,
          firstCol: a % n,
          lastCol: (d - 1) % n,
          isStart: r.isStart && a === s,
          isEnd: r.isEnd && d - 1 === l
        }), a = d;
      }
    }
    return i;
  }
}
class Rs {
  constructor() {
    this.sliceBusinessHours = C(this._sliceBusinessHours), this.sliceDateSelection = C(this._sliceDateSpan), this.sliceEventStore = C(this._sliceEventStore), this.sliceEventDrag = C(this._sliceInteraction), this.sliceEventResize = C(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  sliceProps(e, n, r, i, ...s) {
    let { eventUiBases: l } = e, a = this.sliceEventStore(e.eventStore, l, n, r, ...s);
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, r, l, i, ...s),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, n, r, i, ...s),
      fgEventSegs: a.fg,
      bgEventSegs: a.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, l, n, r, ...s),
      eventResize: this.sliceEventResize(e.eventResize, l, n, r, ...s),
      eventSelection: e.eventSelection
    };
  }
  sliceNowDate(e, n, r, i, ...s) {
    return this._sliceDateSpan(
      { range: { start: e, end: be(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      n,
      r,
      {},
      i,
      ...s
    );
  }
  _sliceBusinessHours(e, n, r, i, ...s) {
    return e ? this._sliceEventStore(it(e, vt(n, !!r), i), {}, n, r, ...s).bg : [];
  }
  _sliceEventStore(e, n, r, i, ...s) {
    if (e) {
      let l = mn(e, n, vt(r, !!i), i);
      return {
        bg: this.sliceEventRanges(l.bg, s),
        fg: this.sliceEventRanges(l.fg, s)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(e, n, r, i, ...s) {
    if (!e)
      return null;
    let l = mn(e.mutatedEvents, n, vt(r, !!i), i);
    return {
      segs: this.sliceEventRanges(l.fg, s),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, r, i, s, ...l) {
    if (!e)
      return [];
    let a = vt(n, !!r), o = Ae(e.range, a);
    if (o) {
      e = Object.assign(Object.assign({}, e), { range: o });
      let d = Xo(e, i, s), c = this.sliceRange(e.range, ...l);
      for (let g of c)
        g.eventRange = d;
      return c;
    }
    return [];
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRanges(e, n) {
    let r = [];
    for (let i of e)
      r.push(...this.sliceEventRange(i, n));
    return r;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRange(e, n) {
    let r = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (r = {
      start: r.start,
      end: L(r.start, 1)
    });
    let i = this.sliceRange(r, ...n);
    for (let s of i)
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    return i;
  }
}
function vt(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: be(n.start, t.slotMinTime.milliseconds),
    end: be(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
const yt = /^(visible|hidden)$/;
class Ts extends k {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, te(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: r } = e, i = n && r, s = ["fc-scroller"];
    return n && (r ? s.push("fc-scroller-liquid-absolute") : s.push("fc-scroller-liquid")), u("div", { ref: this.handleEl, className: s.join(" "), style: {
      overflowX: e.overflowX,
      overflowY: e.overflowY,
      left: i && -(e.overcomeLeft || 0) || "",
      right: i && -(e.overcomeRight || 0) || "",
      bottom: i && -(e.overcomeBottom || 0) || "",
      marginLeft: !i && -(e.overcomeLeft || 0) || "",
      marginRight: !i && -(e.overcomeRight || 0) || "",
      marginBottom: !i && -(e.overcomeBottom || 0) || "",
      maxHeight: e.maxHeight || ""
    } }, e.children);
  }
  needsXScrolling() {
    if (yt.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (yt.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return yt.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return yt.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class le {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, r) => {
      let { depths: i, currentMap: s } = this, l = !1, a = !1;
      n !== null ? (l = r in s, s[r] = n, i[r] = (i[r] || 0) + 1, a = !0) : (i[r] -= 1, i[r] || (delete s[r], delete this.callbackMap[r], l = !0)), this.masterCallback && (l && this.masterCallback(null, String(r)), a && this.masterCallback(n, String(r)));
    };
  }
  createRef(e) {
    let n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = (r) => {
      this.handleValue(r, String(e));
    }), n;
  }
  // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
  collect(e, n, r) {
    return qa(this.currentMap, e, n, r);
  }
  getAll() {
    return Tn(this.currentMap);
  }
}
function Dc(t) {
  let e = Zl(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let r of e)
    n = Math.max(n, sa(r));
  return Math.ceil(n);
}
function xs(t, e) {
  return t.liquid && e.liquid;
}
function wc(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  xs(t, e);
}
function _c(t, e, n, r) {
  let { expandRows: i } = n;
  return typeof e.content == "function" ? e.content(n) : u("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: i ? n.clientHeight : ""
      // css `height` on a <table> serves as a min-height
    }
  }, n.tableColGroupNode, u(r ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function Rc(t, e) {
  return ye(t, e, J);
}
function Tc(t, e) {
  let n = [];
  for (let r of t) {
    let i = r.span || 1;
    for (let s = 0; s < i; s += 1)
      n.push(u("col", { style: {
        width: r.width === "shrink" ? xc(e) : r.width || "",
        minWidth: r.minWidth || ""
      } }));
  }
  return u("colgroup", {}, ...n);
}
function xc(t) {
  return t ?? 4;
}
function kc(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function Mc(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function Ic(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function An(t) {
  return u("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function Bt(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function ks(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class Un extends k {
  constructor() {
    super(...arguments), this.processCols = C((e) => e, Rc), this.renderMicroColGroup = C(Tc), this.scrollerRefs = new le(), this.scrollerElRefs = new le(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, i = e.sections || [], s = this.processCols(e.cols), l = this.renderMicroColGroup(s, n.shrinkWidth), a = Mc(e.liquid, r);
    e.collapsibleWidth && a.push("fc-scrollgrid-collapsible");
    let o = i.length, d = 0, c, g = [], h = [], f = [];
    for (; d < o && (c = i[d]).type === "header"; )
      g.push(this.renderSection(c, l, !0)), d += 1;
    for (; d < o && (c = i[d]).type === "body"; )
      h.push(this.renderSection(c, l, !1)), d += 1;
    for (; d < o && (c = i[d]).type === "footer"; )
      f.push(this.renderSection(c, l, !0)), d += 1;
    let m = !bs();
    const y = { role: "rowgroup" };
    return u("table", {
      role: "grid",
      className: a.join(" "),
      style: { height: e.height }
    }, !!(!m && g.length) && u("thead", y, ...g), !!(!m && h.length) && u("tbody", y, ...h), !!(!m && f.length) && u("tfoot", y, ...f), m && u("tbody", y, ...g, ...h, ...f));
  }
  renderSection(e, n, r) {
    return "outerContent" in e ? u(I, { key: e.key }, e.outerContent) : u("tr", { key: e.key, role: "presentation", className: Ic(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, r));
  }
  renderChunkTd(e, n, r, i) {
    if ("outerContent" in r)
      return r.outerContent;
    let { props: s } = this, { forceYScrollbars: l, scrollerClientWidths: a, scrollerClientHeights: o } = this.state, d = wc(s, e), c = xs(s, e), g = s.liquid ? l ? "scroll" : d ? "auto" : "hidden" : "visible", h = e.key, f = _c(e, r, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !s.collapsibleWidth && a[h] !== void 0 ? a[h] : null,
      clientHeight: o[h] !== void 0 ? o[h] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return u(i ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, u(
      "div",
      { className: `fc-scroller-harness${c ? " fc-scroller-harness-liquid" : ""}` },
      u(Ts, { ref: this.scrollerRefs.createRef(h), elRef: this.scrollerElRefs.createRef(h), overflowY: g, overflowX: s.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: c, liquidIsAbsolute: !0 }, f)
    ));
  }
  _handleScrollerEl(e, n) {
    let r = Nc(this.props.sections, n);
    r && te(r.chunk.scrollerElRef, e);
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return kc(this.props.cols) ? Dc(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = fc(), { scrollerRefs: n, scrollerElRefs: r } = this, i = !1, s = {}, l = {};
    for (let a in n.currentMap) {
      let o = n.currentMap[a];
      if (o && o.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let a of this.props.sections) {
      let o = a.key, d = r.currentMap[o];
      if (d) {
        let c = d.parentNode;
        s[o] = Math.floor(c.getBoundingClientRect().width - (i ? e.y : 0)), l[o] = Math.floor(c.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: s, scrollerClientHeights: l };
  }
}
Un.addStateEquality({
  scrollerClientWidths: J,
  scrollerClientHeights: J
});
function Nc(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class Wt extends k {
  constructor() {
    super(...arguments), this.buildPublicEvent = C((e, n, r) => new Y(e, n, r)), this.handleEl = (e) => {
      this.el = e, te(this.props.elRef, e), e && Zr(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { eventRange: s } = i, { ui: l } = s, a = {
      event: this.buildPublicEvent(n, s.def, s.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: l.textColor,
      backgroundColor: l.backgroundColor,
      borderColor: l.borderColor,
      isDraggable: !e.disableDragging && Go(i, n),
      isStartResizable: !e.disableResizing && Qo(i, n),
      isEndResizable: !e.disableResizing && qo(i),
      isMirror: !!(e.isDragging || e.isResizing || e.isDateSelecting),
      isStart: !!i.isStart,
      isEnd: !!i.isEnd,
      isPast: !!e.isPast,
      isFuture: !!e.isFuture,
      isToday: !!e.isToday,
      isSelected: !!e.isSelected,
      isDragging: !!e.isDragging,
      isResizing: !!e.isResizing
    };
    return u(V, { elRef: this.handleEl, elTag: e.elTag, elAttrs: e.elAttrs, elClasses: [
      ...Yo(a),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: a, generatorName: "eventContent", customGenerator: r.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: r.eventClassNames, didMount: r.eventDidMount, willUnmount: r.eventWillUnmount }, e.children);
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && Zr(this.el, this.props.seg);
  }
}
class Wn extends k {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { ui: s } = i.eventRange, l = r.eventTimeFormat || e.defaultTimeFormat, a = Je(i, l, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return u(Wt, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor
    }, elAttrs: Bn(i, n), defaultGenerator: Oc, timeText: a }), (o, d) => u(
      I,
      null,
      u(o, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: d.textColor } }),
      !!d.isStartResizable && u("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!d.isEndResizable && u("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
Wn.addPropsEquality({
  seg: J
});
function Oc(t) {
  return u(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && u("div", { className: "fc-event-time" }, t.timeText),
    u(
      "div",
      { className: "fc-event-title-container" },
      u("div", { className: "fc-event-title fc-sticky" }, t.event.title || u(I, null, " "))
    )
  );
}
const Ln = (t) => u(de.Consumer, null, (e) => {
  let { options: n } = e, r = {
    isAxis: t.isAxis,
    date: e.dateEnv.toDate(t.date),
    view: e.viewApi
  };
  return u(V, { elRef: t.elRef, elTag: t.elTag || "div", elAttrs: t.elAttrs, elClasses: t.elClasses, elStyle: t.elStyle, renderProps: r, generatorName: "nowIndicatorContent", customGenerator: n.nowIndicatorContent, classNameGenerator: n.nowIndicatorClassNames, didMount: n.nowIndicatorDidMount, willUnmount: n.nowIndicatorWillUnmount }, t.children);
}), Hc = H({ day: "numeric" });
class jn extends k {
  constructor() {
    super(...arguments), this.refineRenderProps = St(Pc);
  }
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = this.refineRenderProps({
      date: e.date,
      dateProfile: e.dateProfile,
      todayRange: e.todayRange,
      isMonthStart: e.isMonthStart || !1,
      showDayNumber: e.showDayNumber,
      extraRenderProps: e.extraRenderProps,
      viewApi: n.viewApi,
      dateEnv: n.dateEnv,
      monthStartFormat: r.monthStartFormat
    });
    return u(V, { elRef: e.elRef, elTag: e.elTag, elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": nt(e.date) }), elClasses: [
      ...Ut(i, n.theme),
      ...e.elClasses || []
    ], elStyle: e.elStyle, renderProps: i, generatorName: "dayCellContent", customGenerator: r.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : r.dayCellClassNames
    ), didMount: r.dayCellDidMount, willUnmount: r.dayCellWillUnmount }, e.children);
  }
}
function Vn(t) {
  return !!(t.dayCellContent || hn("dayCellContent", t));
}
function Pc(t) {
  let { date: e, dateEnv: n, dateProfile: r, isMonthStart: i } = t, s = Fn(e, t.todayRange, null, r), l = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : Hc) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, s), {
    isMonthStart: i,
    dayNumberText: l
  }), t.extraRenderProps);
}
class Ms extends k {
  render() {
    let { props: e } = this, { seg: n } = e;
    return u(Wt, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: Bc, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function Bc(t) {
  let { title: e } = t.event;
  return e && u("div", { className: "fc-event-title" }, t.event.title);
}
function Is(t) {
  return u("div", { className: `fc-${t}` });
}
const Ns = (t) => u(de.Consumer, null, (e) => {
  let { dateEnv: n, options: r } = e, { date: i } = t, s = r.weekNumberFormat || t.defaultFormat, l = n.computeWeekNumber(i), a = n.format(i, s), o = { num: l, text: a, date: i };
  return u(
    V,
    { elRef: t.elRef, elTag: t.elTag, elAttrs: t.elAttrs, elClasses: t.elClasses, elStyle: t.elStyle, renderProps: o, generatorName: "weekNumberContent", customGenerator: r.weekNumberContent, defaultGenerator: Fc, classNameGenerator: r.weekNumberClassNames, didMount: r.weekNumberDidMount, willUnmount: r.weekNumberWillUnmount },
    t.children
  );
});
function Fc(t) {
  return t.text;
}
const rn = 10;
class zc extends k {
  constructor() {
    super(...arguments), this.state = {
      titleId: ve()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && te(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = Kl(e);
      this.rootEl.contains(n) || this.handleCloseClick();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.handleCloseClick();
    }, this.handleCloseClick = () => {
      let { onClose: e } = this.props;
      e && e();
    };
  }
  render() {
    let { theme: e, options: n } = this.context, { props: r, state: i } = this, s = [
      "fc-popover",
      e.getClass("popover")
    ].concat(r.extraClassNames || []);
    return Ol(u(
      "div",
      Object.assign({}, r.extraAttrs, { id: r.id, className: s.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      u(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        u("span", { className: "fc-popover-title", id: i.titleId }, r.title),
        u("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      u("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, r.children)
    ), r.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: i } = this, s = pc(n);
    if (s) {
      let l = i.getBoundingClientRect(), a = r ? se(n, ".fc-scrollgrid").getBoundingClientRect().top : s.top, o = e ? s.right - l.width : s.left;
      a = Math.max(a, rn), o = Math.min(o, document.documentElement.clientWidth - rn - l.width), o = Math.max(o, rn);
      let d = i.offsetParent.getBoundingClientRect();
      Jl(i, {
        top: a - d.top,
        left: o - d.left
      });
    }
  }
}
class Uc extends K {
  constructor() {
    super(...arguments), this.handleRootEl = (e) => {
      this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
        el: e,
        useEventCenter: !1
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { options: e, dateEnv: n } = this.context, { props: r } = this, { startDate: i, todayRange: s, dateProfile: l } = r, a = n.format(i, e.dayPopoverFormat);
    return u(jn, { elRef: this.handleRootEl, date: i, dateProfile: l, todayRange: s }, (o, d, c) => u(
      zc,
      { elRef: c.ref, id: r.id, title: a, extraClassNames: ["fc-more-popover"].concat(c.className || []), extraAttrs: c, parentEl: r.parentEl, alignmentEl: r.alignmentEl, alignGridTop: r.alignGridTop, onClose: r.onClose },
      Vn(e) && u(o, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      r.children
    ));
  }
  queryHit(e, n, r, i) {
    let { rootEl: s, props: l } = this;
    return e >= 0 && e < r && n >= 0 && n < i ? {
      dateProfile: l.dateProfile,
      dateSpan: Object.assign({ allDay: !l.forceTimed, range: {
        start: l.startDate,
        end: l.endDate
      } }, l.extraDateSpan),
      dayEl: s,
      rect: {
        left: 0,
        top: 0,
        right: r,
        bottom: i
      },
      layer: 1
      // important when comparing with hits from other components
    } : null;
  }
}
class Os extends k {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: ve()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && te(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: r } = this, { moreLinkClick: i } = r.options, s = Kr(n).start;
      function l(a) {
        let { def: o, instance: d, range: c } = a.eventRange;
        return {
          event: new Y(r, o, d),
          start: r.dateEnv.toDate(c.start),
          end: r.dateEnv.toDate(c.end),
          isStart: a.isStart,
          isEnd: a.isEnd
        };
      }
      typeof i == "function" && (i = i({
        date: s,
        allDay: !!n.allDayDate,
        allSegs: n.allSegs.map(l),
        hiddenSegs: n.hiddenSegs.map(l),
        jsEvent: e,
        view: r.viewApi
      })), !i || i === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof i == "string" && r.calendarApi.zoomTo(s, i);
    }, this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: !1 });
    };
  }
  render() {
    let { props: e, state: n } = this;
    return u(de.Consumer, null, (r) => {
      let { viewApi: i, options: s, calendarApi: l } = r, { moreLinkText: a } = s, { moreCnt: o } = e, d = Kr(e), c = typeof a == "function" ? a.call(l, o) : `+${o} ${a}`, g = $e(s.moreLinkHint, [o], c), h = {
        num: o,
        shortText: `+${o}`,
        text: c,
        view: i
      };
      return u(
        I,
        null,
        !!e.moreCnt && u(V, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Qi(this.handleClick)), { title: g, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: h, generatorName: "moreLinkContent", customGenerator: s.moreLinkContent, defaultGenerator: e.defaultGenerator || Wc, classNameGenerator: s.moreLinkClassNames, didMount: s.moreLinkDidMount, willUnmount: s.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && u(Uc, { id: n.popoverId, startDate: d.start, endDate: d.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
      );
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    this.linkEl && (this.parentEl = se(this.linkEl, ".fc-view-harness"));
  }
}
function Wc(t) {
  return t.text;
}
function Kr(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: L(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: Hs(e),
    end: jc(e)
  };
}
function Hs(t) {
  return t.reduce(Lc).eventRange.range.start;
}
function Lc(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function jc(t) {
  return t.reduce(Vc).eventRange.range.end;
}
function Vc(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
const Gc = [], Ps = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
    // 4 days need to be within the year to be considered the first week
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, Bs = Object.assign(Object.assign({}, Ps), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today(t, e) {
      return e === "day" ? "Today" : `This ${t}`;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint(t) {
    return `Show ${t} more event${t === 1 ? "" : "s"}`;
  }
});
function Fs(t) {
  let e = t.length > 0 ? t[0].code : "en", n = Gc.concat(t), r = {
    en: Bs
  };
  for (let i of n)
    r[i.code] = i;
  return {
    map: r,
    defaultCode: e
  };
}
function Gn(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? zs(t.code, [t.code], t) : Qc(t, e);
}
function Qc(t, e) {
  let n = [].concat(t || []), r = qc(n, e) || Bs;
  return zs(t, n, r);
}
function qc(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t[n].toLocaleLowerCase().split("-");
    for (let i = r.length; i > 0; i -= 1) {
      let s = r.slice(0, i).join("-");
      if (e[s])
        return e[s];
    }
  }
  return null;
}
function zs(t, e, n) {
  let r = Rn([Ps, n], ["buttonText"]);
  delete r.code;
  let { week: i } = r;
  return delete r.week, {
    codeArg: t,
    codes: e,
    week: i,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: r
  };
}
function ue(t) {
  return {
    id: Ne(),
    name: t.name,
    premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function Yc(t, e) {
  let n = {}, r = {
    premiumReleaseDate: void 0,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function i(s) {
    for (let l of s) {
      const a = l.name, o = n[a];
      o === void 0 ? (n[a] = l.id, i(l.deps), r = $c(r, l)) : o !== l.id && console.warn(`Duplicate plugin '${a}'`);
    }
  }
  return t && i(t), i(e), r;
}
function Zc() {
  let t = [], e = [], n;
  return (r, i) => ((!n || !ye(r, t) || !ye(i, e)) && (n = Yc(r, i)), t = r, e = i, n);
}
function $c(t, e) {
  return {
    premiumReleaseDate: Jc(t.premiumReleaseDate, e.premiumReleaseDate),
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: Object.assign(Object.assign({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), e.propSetHandlers)
  };
}
function Jc(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class Ce extends rt {
}
Ce.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
Ce.prototype.baseIconClass = "fc-icon";
Ce.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
Ce.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
Ce.prototype.iconOverrideOption = "buttonIcons";
Ce.prototype.iconOverrideCustomButtonOption = "icon";
Ce.prototype.iconOverridePrefix = "fc-icon-";
function Kc(t, e) {
  let n = {}, r;
  for (r in t)
    En(r, n, t, e);
  for (r in e)
    En(r, n, t, e);
  return n;
}
function En(t, e, n, r) {
  if (e[t])
    return e[t];
  let i = Xc(t, e, n, r);
  return i && (e[t] = i), i;
}
function Xc(t, e, n, r) {
  let i = n[t], s = r[t], l = (c) => i && i[c] !== null ? i[c] : s && s[c] !== null ? s[c] : null, a = l("component"), o = l("superType"), d = null;
  if (o) {
    if (o === t)
      throw new Error("Can't have a custom view type that references itself");
    d = En(o, e, n, r);
  }
  return !a && d && (a = d.component), a ? {
    type: t,
    component: a,
    defaults: Object.assign(Object.assign({}, d ? d.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, d ? d.overrides : {}), s ? s.rawOptions : {})
  } : null;
}
function Xr(t) {
  return Ie(t, ed);
}
function ed(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = ei(e) : n && !(n.prototype instanceof k) && (n = ei(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function ei(t) {
  return (e) => u(de.Consumer, null, (n) => u(V, { elTag: "div", elClasses: ns(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function td(t, e, n, r) {
  let i = Xr(t), s = Xr(e.views), l = Kc(i, s);
  return Ie(l, (a) => nd(a, s, e, n, r));
}
function nd(t, e, n, r, i) {
  let s = t.overrides.duration || t.defaults.duration || r.duration || n.duration, l = null, a = "", o = "", d = {};
  if (s && (l = rd(s), l)) {
    let h = fn(l);
    a = h.unit, h.value === 1 && (o = a, d = e[a] ? e[a].rawOptions : {});
  }
  let c = (h) => {
    let f = h.buttonText || {}, m = t.defaults.buttonTextKey;
    return m != null && f[m] != null ? f[m] : f[t.type] != null ? f[t.type] : f[o] != null ? f[o] : null;
  }, g = (h) => {
    let f = h.buttonHints || {}, m = t.defaults.buttonTextKey;
    return m != null && f[m] != null ? f[m] : f[t.type] != null ? f[t.type] : f[o] != null ? f[o] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: l,
    durationUnit: a,
    singleUnit: o,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, d), t.overrides),
    buttonTextOverride: c(r) || c(n) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: c(i) || t.defaults.buttonText || c(ke) || t.type,
    // not DRY
    buttonTitleOverride: g(r) || g(n) || t.overrides.buttonHint,
    buttonTitleDefault: g(i) || t.defaults.buttonHint || g(ke)
    // will eventually fall back to buttonText
  };
}
let ti = {};
function rd(t) {
  let e = JSON.stringify(t), n = ti[e];
  return n === void 0 && (n = x(t), ti[e] = n), n;
}
function id(t, e) {
  return e.type === "CHANGE_VIEW_TYPE" && (t = e.viewType), t;
}
function sd(t, e) {
  return e.type === "CHANGE_DATE" ? e.dateMarker : t;
}
function ld(t, e, n) {
  let r = t.initialDate;
  return r != null ? e.createMarker(r) : n.getDateMarker();
}
function ad(t, e) {
  return e.type === "SET_OPTION" ? Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue }) : t;
}
function od(t, e, n, r) {
  let i;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return r.build(e.dateMarker || n);
    case "CHANGE_DATE":
      return r.build(e.dateMarker);
    case "PREV":
      if (i = r.buildPrev(t, n), i.isValid)
        return i;
      break;
    case "NEXT":
      if (i = r.buildNext(t, n), i.isValid)
        return i;
      break;
  }
  return t;
}
function cd(t, e, n) {
  let r = e ? e.activeRange : null;
  return Ws({}, md(t, n), r, n);
}
function dd(t, e, n, r) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Ws(t, e.sources, i, r);
    case "REMOVE_EVENT_SOURCE":
      return fd(t, e.sourceId);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Ls(t, i, r) : t;
    case "FETCH_EVENT_SOURCES":
      return Qn(t, e.sourceIds ? (
        // why no type?
        $i(e.sourceIds)
      ) : js(t, r), i, e.isRefetch || !1, r);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return pd(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function ud(t, e, n) {
  let r = e ? e.activeRange : null;
  return Qn(t, js(t, n), r, !0, n);
}
function Us(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Ws(t, e, n, r) {
  let i = {};
  for (let s of e)
    i[s.sourceId] = s;
  return n && (i = Ls(i, n, r)), Object.assign(Object.assign({}, t), i);
}
function fd(t, e) {
  return Ge(t, (n) => n.sourceId !== e);
}
function Ls(t, e, n) {
  return Qn(t, Ge(t, (r) => hd(r, e, n)), e, !1, n);
}
function hd(t, e, n) {
  return Vs(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function Qn(t, e, n, r, i) {
  let s = {};
  for (let l in t) {
    let a = t[l];
    e[l] ? s[l] = gd(a, n, r, i) : s[l] = a;
  }
  return s;
}
function gd(t, e, n, r) {
  let { options: i, calendarApi: s } = r, l = r.pluginHooks.eventSourceDefs[t.sourceDefId], a = Ne();
  return l.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: r
  }, (o) => {
    let { rawEvents: d } = o;
    i.eventSourceSuccess && (d = i.eventSourceSuccess.call(s, d, o.response) || d), t.success && (d = t.success.call(s, d, o.response) || d), r.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: a,
      fetchRange: e,
      rawEvents: d
    });
  }, (o) => {
    let d = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(s, o), d = !0), t.failure && (t.failure(o), d = !0), d || console.warn(o.message, o), r.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: a,
      fetchRange: e,
      error: o
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: a });
}
function pd(t, e, n, r) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: r }) }) : t;
}
function js(t, e) {
  return Ge(t, (n) => Vs(n, e));
}
function md(t, e) {
  let n = ds(e), r = [].concat(t.eventSources || []), i = [];
  t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
  for (let s of r) {
    let l = cs(s, e, n);
    l && i.push(l);
  }
  return i;
}
function Vs(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function vd(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function yd(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function bd(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function Ad(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function Ed(t, e, n, r, i) {
  let s = t.headerToolbar ? ni(t.headerToolbar, t, e, n, r, i) : null, l = t.footerToolbar ? ni(t.footerToolbar, t, e, n, r, i) : null;
  return { header: s, footer: l };
}
function ni(t, e, n, r, i, s) {
  let l = {}, a = [], o = !1;
  for (let d in t) {
    let c = t[d], g = Cd(c, e, n, r, i, s);
    l[d] = g.widgets, a.push(...g.viewsWithButtons), o = o || g.hasTitle;
  }
  return { sectionWidgets: l, viewsWithButtons: a, hasTitle: o };
}
function Cd(t, e, n, r, i, s) {
  let l = e.direction === "rtl", a = e.customButtons || {}, o = n.buttonText || {}, d = e.buttonText || {}, c = n.buttonHints || {}, g = e.buttonHints || {}, h = t ? t.split(" ") : [], f = [], m = !1;
  return { widgets: h.map((v) => v.split(",").map((b) => {
    if (b === "title")
      return m = !0, { buttonName: b };
    let E, _, w, j, N, W;
    if (E = a[b])
      w = (T) => {
        E.click && E.click.call(T.target, T, T.target);
      }, (j = r.getCustomButtonIconClass(E)) || (j = r.getIconClass(b, l)) || (N = E.text), W = E.hint || E.text;
    else if (_ = i[b]) {
      f.push(b), w = () => {
        s.changeView(b);
      }, (N = _.buttonTextOverride) || (j = r.getIconClass(b, l)) || (N = _.buttonTextDefault);
      let T = _.buttonTextOverride || _.buttonTextDefault;
      W = $e(
        _.buttonTitleOverride || _.buttonTitleDefault || e.viewHint,
        [T, b],
        // view-name = buttonName
        T
      );
    } else if (s[b])
      if (w = () => {
        s[b]();
      }, (N = o[b]) || (j = r.getIconClass(b, l)) || (N = d[b]), b === "prevYear" || b === "nextYear") {
        let T = b === "prevYear" ? "prev" : "next";
        W = $e(c[T] || g[T], [
          d.year || "year",
          "year"
        ], d[b]);
      } else
        W = (T) => $e(c[b] || g[b], [
          d[T] || T,
          T
        ], d[b]);
    return { buttonName: b, buttonClick: w, buttonIcon: j, buttonText: N, buttonHint: W };
  })), viewsWithButtons: f, hasTitle: m };
}
class Sd {
  constructor(e, n, r) {
    this.type = e, this.getCurrentData = n, this.dateEnv = r;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(e) {
    return this.getCurrentData().options[e];
  }
}
let Dd = {
  ignoreRange: !0,
  parseMeta(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
};
const wd = ue({
  name: "array-event-source",
  eventSourceDefs: [Dd]
});
let _d = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: r } = t.context, i = t.eventSource.meta;
    ec(i.bind(null, vs(t.range, r)), (s) => e({ rawEvents: s }), n);
  }
};
const Rd = ue({
  name: "func-event-source",
  eventSourceDefs: [_d]
}), Td = {
  method: String,
  extraParams: p,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let xd = {
  parseMeta(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch(t, e, n) {
    const { meta: r } = t.eventSource, i = Md(r, t.range, t.context);
    tc(r.method, r.url, i).then(([s, l]) => {
      e({ rawEvents: s, response: l });
    }, n);
  }
};
const kd = ue({
  name: "json-event-source",
  eventSourceRefiners: Td,
  eventSourceDefs: [xd]
});
function Md(t, e, n) {
  let { dateEnv: r, options: i } = n, s, l, a, o, d = {};
  return s = t.startParam, s == null && (s = i.startParam), l = t.endParam, l == null && (l = i.endParam), a = t.timeZoneParam, a == null && (a = i.timeZoneParam), typeof t.extraParams == "function" ? o = t.extraParams() : o = t.extraParams || {}, Object.assign(d, o), d[s] = r.formatIso(e.start), d[l] = r.formatIso(e.end), r.timeZone !== "local" && (d[a] = r.timeZone), d;
}
const Id = {
  daysOfWeek: p,
  startTime: x,
  endTime: x,
  duration: x,
  startRecur: p,
  endRecur: p
};
let Nd = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null,
        dateEnv: e
      }, r;
      return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = ca(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: r,
        typeData: n
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, n) {
    let r = Ae(e, { start: t.startRecur, end: t.endRecur });
    return r ? Hd(t.daysOfWeek, t.startTime, t.dateEnv, n, r) : [];
  }
};
const Od = ue({
  name: "simple-recurring-event",
  recurringTypes: [Nd],
  eventRefiners: Id
});
function Hd(t, e, n, r, i) {
  let s = t ? $i(t) : null, l = B(i.start), a = i.end, o = [];
  for (e && (e.milliseconds < 0 ? a = L(a, 1) : e.milliseconds >= 1e3 * 60 * 60 * 24 && (l = L(l, -1))); l < a; ) {
    let d;
    (!s || s[l.getUTCDay()]) && (e ? d = r.add(l, e) : d = l, o.push(r.createMarker(n.toDate(d)))), l = L(l, 1);
  }
  return o;
}
const Pd = ue({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      ri([t], e);
    },
    eventSources: ri
  }
});
function ri(t, e) {
  let n = Tn(e.getCurrentData().eventSources);
  if (n.length === 1 && t.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(t[0])) {
    e.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: n[0].sourceId,
      rawEvents: t[0]
    });
    return;
  }
  let r = [];
  for (let i of t) {
    let s = !1;
    for (let l = 0; l < n.length; l += 1)
      if (n[l]._raw === i) {
        n.splice(l, 1), s = !0;
        break;
      }
    s || r.push(i);
  }
  for (let i of n)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: i.sourceId
    });
  for (let i of r)
    e.calendarApi.addEventSource(i);
}
function Bd(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, vs(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Fd(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", Hn(t, e));
}
const zd = [
  wd,
  Rd,
  kd,
  Od,
  Pd,
  ue({
    name: "misc",
    isLoadingFuncs: [
      (t) => Us(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: Bd,
      eventStore: Fd
    }
  })
];
class Ud {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new Sn(this.drain.bind(this));
  }
  request(e, n) {
    this.queue.push(e), this.delayedRunner.request(n);
  }
  pause(e) {
    this.delayedRunner.pause(e);
  }
  resume(e, n) {
    this.delayedRunner.resume(e, n);
  }
  drain() {
    let { queue: e } = this;
    for (; e.length; ) {
      let n = [], r;
      for (; r = e.shift(); )
        this.runTask(r), n.push(r);
      this.drained(n);
    }
  }
  runTask(e) {
    this.runTaskOption && this.runTaskOption(e);
  }
  drained(e) {
    this.drainedOption && this.drainedOption(e);
  }
}
function Wd(t, e, n) {
  let r;
  return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, H(e.titleFormat || Ld(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function Ld(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = kt(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class ii {
  constructor() {
    this.resetListeners = /* @__PURE__ */ new Set();
  }
  handleInput(e, n) {
    const r = this.dateEnv;
    if (e !== r && (typeof n == "function" ? this.nowFn = n : r || (this.nowAnchorDate = e.toDate(n ? e.createMarker(n) : e.createNowMarker()), this.nowAnchorQueried = Date.now()), this.dateEnv = e, r))
      for (const i of this.resetListeners.values())
        i();
  }
  getDateMarker() {
    return this.nowAnchorDate ? this.dateEnv.timestampToMarker(this.nowAnchorDate.valueOf() + (Date.now() - this.nowAnchorQueried)) : this.dateEnv.createMarker(this.nowFn());
  }
  addResetListener(e) {
    this.resetListeners.add(e);
  }
  removeResetListener(e) {
    this.resetListeners.delete(e);
  }
}
class jd {
  constructor(e) {
    this.computeCurrentViewData = C(this._computeCurrentViewData), this.organizeRawLocales = C(Fs), this.buildLocale = C(Gn), this.buildPluginHooks = Zc(), this.buildDateEnv = C(Vd), this.buildTheme = C(Gd), this.parseToolbars = C(Ed), this.buildViewSpecs = C(td), this.buildDateProfileGenerator = St(Qd), this.buildViewApi = C(qd), this.buildViewUiProps = St($d), this.buildEventUiBySource = C(Yd, J), this.buildEventUiBases = C(Zd), this.parseContextBusinessHours = St(Jd), this.buildTitle = C(Wd), this.nowManager = new ii(), this.emitter = new Mo(), this.actionRunner = new Ud(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (h) => {
      this.actionRunner.request(h);
    }, this.props = e, this.actionRunner.pause(), this.nowManager = new ii();
    let n = {}, r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = r.calendarOptions.initialView || r.pluginHooks.initialView, s = this.computeCurrentViewData(i, r, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(s.options);
    let l = {
      nowManager: this.nowManager,
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, a = ld(r.calendarOptions, r.dateEnv, this.nowManager), o = s.dateProfileGenerator.build(a);
    ae(o.activeRange, a) || (a = o.currentRange.start);
    for (let h of r.pluginHooks.contextInit)
      h(l);
    let d = cd(r.calendarOptions, o, l), c = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: a,
      dateProfile: o,
      businessHours: this.parseContextBusinessHours(l),
      eventSources: d,
      eventUiBases: {},
      eventStore: ce(),
      renderableEventStore: ce(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(l).selectionConfig
    }, g = Object.assign(Object.assign({}, l), c);
    for (let h of r.pluginHooks.reducers)
      Object.assign(c, h(null, null, g));
    sn(c, l) && this.emitter.trigger("loading", !0), this.state = c, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: r } = this;
    n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: r, emitter: i } = this, s = ad(r.dynamicOptionOverrides, e), l = this.computeOptionsData(n.optionOverrides, s, n.calendarApi), a = id(r.currentViewType, e), o = this.computeCurrentViewData(a, l, n.optionOverrides, s);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(o.options);
    let d = {
      nowManager: this.nowManager,
      dateEnv: l.dateEnv,
      options: l.calendarOptions,
      pluginHooks: l.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, { currentDate: c, dateProfile: g } = r;
    this.data && this.data.dateProfileGenerator !== o.dateProfileGenerator && (g = o.dateProfileGenerator.build(c)), c = sd(c, e), g = od(g, e, c, o.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !ae(g.currentRange, c)) && (c = g.currentRange.start);
    let h = dd(r.eventSources, e, g, d), f = _o(r.eventStore, e, h, g, d), y = Us(h) && !o.options.progressiveEventRendering && r.renderableEventStore || f, { eventUiSingleBase: v, selectionConfig: b } = this.buildViewUiProps(d), E = this.buildEventUiBySource(h), _ = this.buildEventUiBases(y.defs, v, E), w = {
      dynamicOptionOverrides: s,
      currentViewType: a,
      currentDate: c,
      dateProfile: g,
      eventSources: h,
      eventStore: f,
      renderableEventStore: y,
      selectionConfig: b,
      eventUiBases: _,
      businessHours: this.parseContextBusinessHours(d),
      dateSelection: vd(r.dateSelection, e),
      eventSelection: yd(r.eventSelection, e),
      eventDrag: bd(r.eventDrag, e),
      eventResize: Ad(r.eventResize, e)
    }, j = Object.assign(Object.assign({}, d), w);
    for (let T of l.pluginHooks.reducers)
      Object.assign(w, T(r, e, j));
    let N = sn(r, d), W = sn(w, d);
    !N && W ? i.trigger("loading", !0) : N && !W && i.trigger("loading", !1), this.state = w, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, r = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), s = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), l = this.data = Object.assign(Object.assign(Object.assign({ nowManager: this.nowManager, viewTitle: this.buildTitle(n.dateProfile, s.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), s), n), a = i.pluginHooks.optionChangeHandlers, o = r && r.calendarOptions, d = i.calendarOptions;
    if (o && o !== d) {
      o.timeZone !== d.timeZone && (n.eventSources = l.eventSources = ud(l.eventSources, n.dateProfile, l), n.eventStore = l.eventStore = qr(l.eventStore, r.dateEnv, l.dateEnv), n.renderableEventStore = l.renderableEventStore = qr(l.renderableEventStore, r.dateEnv, l.dateEnv));
      for (let c in a)
        (this.optionsForHandling.indexOf(c) !== -1 || o[c] !== d[c]) && a[c](d[c], l);
    }
    this.optionsForHandling = [], e.onData && e.onData(l);
  }
  computeOptionsData(e, n, r) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: s, localeDefaults: l, availableLocaleData: a, extra: o } = this.processRawCalendarOptions(e, n);
    si(o);
    let d = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, s, a, i.defaultRangeSeparator), c = this.buildViewSpecs(s.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, l), g = this.buildTheme(i, s), h = this.parseToolbars(i, this.stableOptionOverrides, g, c, r);
    return this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: s,
      dateEnv: d,
      viewSpecs: c,
      theme: g,
      toolbarConfig: h,
      localeDefaults: l,
      availableRawLocales: a.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(e, n) {
    let { locales: r, locale: i } = Jt([
      ke,
      e,
      n
    ]), s = this.organizeRawLocales(r), l = s.map, a = this.buildLocale(i || s.defaultCode, l).options, o = this.buildPluginHooks(e.plugins || [], zd), d = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Wr), Lr), jr), o.listenerRefiners), o.optionRefiners), c = {}, g = Jt([
      ke,
      a,
      e,
      n
    ]), h = {}, f = this.currentCalendarOptionsInput, m = this.currentCalendarOptionsRefined, y = !1;
    for (let v in g)
      this.optionsForRefining.indexOf(v) === -1 && (g[v] === f[v] || Re[v] && v in f && Re[v](f[v], g[v])) ? h[v] = m[v] : d[v] ? (h[v] = d[v](g[v]), y = !0) : c[v] = f[v];
    return y && (this.currentCalendarOptionsInput = g, this.currentCalendarOptionsRefined = h, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: o,
      availableLocaleData: s,
      localeDefaults: a,
      extra: c
    };
  }
  _computeCurrentViewData(e, n, r, i) {
    let s = n.viewSpecs[e];
    if (!s)
      throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
    let { refinedOptions: l, extra: a } = this.processRawViewOptions(s, n.pluginHooks, n.localeDefaults, r, i);
    si(a), this.nowManager.handleInput(n.dateEnv, l.now);
    let o = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: s.optionDefaults.dateProfileGeneratorClass,
      nowManager: this.nowManager,
      duration: s.duration,
      durationUnit: s.durationUnit,
      usesMinMaxTime: s.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: l.slotMinTime,
      slotMaxTime: l.slotMaxTime,
      showNonCurrentDates: l.showNonCurrentDates,
      dayCount: l.dayCount,
      dateAlignment: l.dateAlignment,
      dateIncrement: l.dateIncrement,
      hiddenDays: l.hiddenDays,
      weekends: l.weekends,
      validRangeInput: l.validRange,
      visibleRangeInput: l.visibleRange,
      fixedWeekCount: l.fixedWeekCount
    }), d = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
    return { viewSpec: s, options: l, dateProfileGenerator: o, viewApi: d };
  }
  processRawViewOptions(e, n, r, i, s) {
    let l = Jt([
      ke,
      e.optionDefaults,
      r,
      i,
      e.optionOverrides,
      s
    ]), a = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Wr), Lr), jr), La), n.listenerRefiners), n.optionRefiners), o = {}, d = this.currentViewOptionsInput, c = this.currentViewOptionsRefined, g = !1, h = {};
    for (let f in l)
      l[f] === d[f] || Re[f] && Re[f](l[f], d[f]) ? o[f] = c[f] : (l[f] === this.currentCalendarOptionsInput[f] || Re[f] && Re[f](l[f], this.currentCalendarOptionsInput[f]) ? f in this.currentCalendarOptionsRefined && (o[f] = this.currentCalendarOptionsRefined[f]) : a[f] ? o[f] = a[f](l[f]) : h[f] = l[f], g = !0);
    return g && (this.currentViewOptionsInput = l, this.currentViewOptionsRefined = o), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: h
    };
  }
}
function Vd(t, e, n, r, i, s, l, a) {
  let o = Gn(e || l.defaultCode, l.map);
  return new Ki({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: s.namedTimeZonedImpl,
    locale: o,
    weekNumberCalculation: n,
    firstDay: r,
    weekText: i,
    cmdFormatter: s.cmdFormatter,
    defaultSeparator: a
  });
}
function Gd(t, e) {
  let n = e.themeClasses[t.themeSystem] || Ce;
  return new n(t);
}
function Qd(t) {
  let e = t.dateProfileGeneratorClass || is;
  return new e(t);
}
function qd(t, e, n) {
  return new Sd(t, e, n);
}
function Yd(t) {
  return Ie(t, (e) => e.ui);
}
function Zd(t, e, n) {
  let r = { "": e };
  for (let i in t) {
    let s = t[i];
    s.sourceId && n[s.sourceId] && (r[i] = n[s.sourceId]);
  }
  return r;
}
function $d(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: Pt({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, t),
    selectionConfig: Pt({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function sn(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function Jd(t) {
  return Ho(t.options.businessHours, t);
}
function si(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'`);
}
class Kd extends k {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return u("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: r } = this.context, i = [], s = !0;
    for (let l of e) {
      let { buttonName: a, buttonClick: o, buttonText: d, buttonIcon: c, buttonHint: g } = l;
      if (a === "title")
        s = !1, i.push(u("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let h = a === n.activeButton, f = !n.isTodayEnabled && a === "today" || !n.isPrevEnabled && a === "prev" || !n.isNextEnabled && a === "next", m = [`fc-${a}-button`, r.getClass("button")];
        h && m.push(r.getClass("buttonActive")), i.push(u("button", { type: "button", title: typeof g == "function" ? g(n.navUnit) : g, disabled: f, "aria-pressed": h, className: m.join(" "), onClick: o }, d || (c ? u("span", { className: c, role: "img" }) : "")));
      }
    }
    if (i.length > 1) {
      let l = s && r.getClass("buttonGroup") || "";
      return u("div", { className: l }, ...i);
    }
    return i[0];
  }
}
class li extends k {
  render() {
    let { model: e, extraClassName: n } = this.props, r = !1, i, s, l = e.sectionWidgets, a = l.center;
    return l.left ? (r = !0, i = l.left) : i = l.start, l.right ? (r = !0, s = l.right) : s = l.end, u(
      "div",
      { className: [
        n || "",
        "fc-toolbar",
        r ? "fc-toolbar-ltr" : ""
      ].join(" ") },
      this.renderSection("start", i || []),
      this.renderSection("center", a || []),
      this.renderSection("end", s || [])
    );
  }
  renderSection(e, n) {
    let { props: r } = this;
    return u(Kd, { key: e, widgetGroups: n, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }
}
class Xd extends k {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, te(this.props.elRef, e), this.updateAvailableWidth();
    }, this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props: e, state: n } = this, { aspectRatio: r } = e, i = [
      "fc-view-harness",
      r || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
      // let the view do the height
    ], s = "", l = "";
    return r ? n.availableWidth !== null ? s = n.availableWidth / r : l = `${1 / r * 100}%` : s = e.height || "", u("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: s, paddingBottom: l } }, e.children);
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    this.el && // needed. but why?
    this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }
}
class eu extends As {
  constructor(e) {
    super(e), this.handleSegClick = (n, r) => {
      let { component: i } = this, { context: s } = i, l = vn(r);
      if (l && // might be the <div> surrounding the more link
      i.isValidSegDownEl(n.target)) {
        let a = se(n.target, ".fc-event-forced-url"), o = a ? a.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: r,
          event: new Y(i.context, l.eventRange.def, l.eventRange.instance),
          jsEvent: n,
          view: s.viewApi
        }), o && !n.defaultPrevented && (window.location.href = o);
      }
    }, this.destroy = Gi(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class tu extends As {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, r) => {
      vn(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
    }, this.handleSegLeave = (n, r) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
    }, this.removeHoverListeners = ea(
      e.el,
      ".fc-event",
      // on both fg and bg events
      this.handleSegEnter,
      this.handleSegLeave
    );
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(e, n, r) {
    let { component: i } = this, { context: s } = i, l = vn(r);
    (!n || i.isValidSegDownEl(n.target)) && s.emitter.trigger(e, {
      el: r,
      event: new Y(s, l.eventRange.def, l.eventRange.instance),
      jsEvent: n,
      view: s.viewApi
    });
  }
}
class nu extends Oe {
  constructor() {
    super(...arguments), this.buildViewContext = C(to), this.buildViewPropTransformers = C(iu), this.buildToolbarProps = C(ru), this.headerRef = G(), this.footerRef = G(), this.interactionsStore = {}, this.state = {
      viewLabelId: ve()
    }, this.registerInteractiveComponent = (e, n) => {
      let r = ic(e, n), l = [
        eu,
        tu
      ].concat(this.props.pluginHooks.componentInteractions).map((a) => new a(r));
      this.interactionsStore[e.uid] = l, Jr[e.uid] = r;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let r of n)
          r.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete Jr[e.uid];
    }, this.resizeRunner = new Sn(() => {
      this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
    }), this.handleWindowResize = (e) => {
      let { options: n } = this.props;
      n.handleWindowResize && e.target === window && this.resizeRunner.request(n.windowResizeDelay);
    };
  }
  /*
  renders INSIDE of an outer div
  */
  render() {
    let { props: e } = this, { toolbarConfig: n, options: r } = e, i = !1, s = "", l;
    e.isHeightAuto || e.forPrint ? s = "" : r.height != null ? i = !0 : r.contentHeight != null ? s = r.contentHeight : l = Math.max(r.aspectRatio, 0.5);
    let a = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.nowManager, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), o = n.header && n.header.hasTitle ? this.state.viewLabelId : void 0;
    return u(
      de.Provider,
      { value: a },
      u(He, { unit: "day" }, (d) => {
        let c = this.buildToolbarProps(e.viewSpec, e.dateProfile, e.dateProfileGenerator, e.currentDate, d, e.viewTitle);
        return u(
          I,
          null,
          n.header && u(li, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: o }, c)),
          u(
            Xd,
            { liquid: i, height: s, aspectRatio: l, labeledById: o },
            this.renderView(e),
            this.buildAppendContent()
          ),
          n.footer && u(li, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, c))
        );
      })
    );
  }
  componentDidMount() {
    let { props: e } = this;
    this.calendarInteractions = e.pluginHooks.calendarInteractions.map((r) => new r(e)), window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers: n } = e.pluginHooks;
    for (let r in n)
      n[r](e[r], e);
  }
  componentDidUpdate(e) {
    let { props: n } = this, { propSetHandlers: r } = n.pluginHooks;
    for (let i in r)
      n[i] !== e[i] && r[i](n[i], n);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (let e of this.calendarInteractions)
      e.destroy();
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props: e } = this, n = e.pluginHooks.viewContainerAppends.map((r) => r(e));
    return u(I, {}, ...n);
  }
  renderView(e) {
    let { pluginHooks: n } = e, { viewSpec: r } = e, i = {
      dateProfile: e.dateProfile,
      businessHours: e.businessHours,
      eventStore: e.renderableEventStore,
      eventUiBases: e.eventUiBases,
      dateSelection: e.dateSelection,
      eventSelection: e.eventSelection,
      eventDrag: e.eventDrag,
      eventResize: e.eventResize,
      isHeightAuto: e.isHeightAuto,
      forPrint: e.forPrint
    }, s = this.buildViewPropTransformers(n.viewPropsTransformers);
    for (let a of s)
      Object.assign(i, a.transform(i, e));
    let l = r.component;
    return u(l, Object.assign({}, i));
  }
}
function ru(t, e, n, r, i, s) {
  let l = n.build(i, void 0, !1), a = n.buildPrev(e, r, !1), o = n.buildNext(e, r, !1);
  return {
    title: s,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: l.isValid && !ae(e.currentRange, i),
    isPrevEnabled: a.isValid,
    isNextEnabled: o.isValid
  };
}
function iu(t) {
  return t.map((e) => new e());
}
let su = class extends lc {
  constructor(e, n = {}) {
    super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (r) => {
      switch (r.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          this.renderRunner.tryDrain();
      }
    }, this.handleData = (r) => {
      this.currentData = r, this.renderRunner.request(r.calendarOptions.rerenderDelay);
    }, this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = !0;
        let { currentData: r } = this;
        Ot(() => {
          Xe(u(rc, { options: r.calendarOptions, theme: r.theme, emitter: r.emitter }, (i, s, l, a) => (this.setClassNames(i), this.setHeight(s), u(
            ts.Provider,
            { value: this.customContentRenderId },
            u(nu, Object.assign({ isHeightAuto: l, forPrint: a }, r))
          ))), this.el);
        });
      } else this.isRendered && (this.isRendered = !1, Xe(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, Ll(e), this.el = e, this.renderRunner = new Sn(this.handleRenderRequest), new jd({
      optionOverrides: n,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }
  render() {
    let e = this.isRendering;
    e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
  }
  destroy() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }
  updateSize() {
    Ot(() => {
      super.updateSize();
    });
  }
  batchRendering(e) {
    this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", !0);
  }
  resetOptions(e, n) {
    this.currentDataManager.resetOptions(e, n);
  }
  setClassNames(e) {
    if (!ye(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let r of this.currentClassNames)
        n.remove(r);
      for (let r of e)
        n.add(r);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    Vi(this.el, "height", e);
  }
};
function ai(t, e = {}) {
  let n = Gs(e), r = H(e), i = n.createMarkerMeta(t);
  return i ? n.format(i.marker, r, {
    forcedTzo: i.forcedTzo
  }) : "";
}
function lu(t, e, n) {
  let r = Gs(typeof n == "object" && n ? n : {}), i = H(n), s = r.createMarkerMeta(t), l = r.createMarkerMeta(e);
  return !s || !l ? "" : r.formatRange(s.marker, l.marker, i, {
    forcedStartTzo: s.forcedTzo,
    forcedEndTzo: l.forcedTzo,
    isEndExclusive: n.isEndExclusive,
    defaultSeparator: ke.defaultRangeSeparator
  });
}
function Gs(t) {
  let e = Gn(t.locale || "en", Fs([]).map);
  return new Ki(Object.assign(Object.assign({ timeZone: ke.timeZone, calendarSystem: "gregory" }, t), { locale: e }));
}
var au = Ei("<div></div>");
function ou(t, e) {
  gi(e, !1);
  const n = F();
  let r = O(e, "class", 8, null), i = O(e, "style", 8, null), s = O(e, "options", 8);
  function l() {
    return A(o);
  }
  let a = F(), o = F();
  pi(async () => (d(), () => {
    A(o) && A(o).destroy();
  }));
  function d() {
    P(o, new su(A(a), s())), A(o).render();
  }
  function c() {
    A(o).pauseRendering(), A(o).resetOptions(s()), A(o).resumeRendering();
  }
  U(
    () => (M(s()), A(a), A(o)),
    () => {
      P(n, s() && s().plugins && s().plugins.length && A(a) && !A(o));
    }
  ), U(
    () => (A(o), M(s()), A(n)),
    () => {
      A(o) && s() && s().plugins && s().plugins.length && c(), A(n) && d();
    }
  ), mi();
  var g = { getAPI: l };
  vi();
  var h = au();
  return an(h, (f) => P(a, f), () => A(a)), yi(() => {
    Ci(h, 1, hl(r())), gl(h, i());
  }), bi(t, h), fl(e, "getAPI", l), Ai(g);
}
class cu extends K {
  constructor() {
    super(...arguments), this.headerElRef = G();
  }
  renderSimpleLayout(e, n) {
    let { props: r, context: i } = this, s = [], l = Bt(i.options);
    return e && s.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), s.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), u(
      et,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      u(Un, { liquid: !r.isHeightAuto && !r.forPrint, collapsibleWidth: r.forPrint, cols: [], sections: s })
    );
  }
  renderHScrollLayout(e, n, r, i) {
    let s = this.context.pluginHooks.scrollGridImpl;
    if (!s)
      throw new Error("No ScrollGrid implementation");
    let { props: l, context: a } = this, o = !l.forPrint && Bt(a.options), d = !l.forPrint && ks(a.options), c = [];
    return e && c.push({
      type: "header",
      key: "header",
      isSticky: o,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }]
    }), c.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), d && c.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: An
      }]
    }), u(
      et,
      { elClasses: ["fc-daygrid"], viewSpec: a.viewSpec },
      u(s, { liquid: !l.isHeightAuto && !l.forPrint, forPrint: l.forPrint, collapsibleWidth: l.forPrint, colGroups: [{ cols: [{ span: r, minWidth: i }] }], sections: c })
    );
  }
}
function wt(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.row].push(r);
  return n;
}
function bt(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.firstCol].push(r);
  return n;
}
function oi(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.row].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
const Qs = H({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function qs(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class Ys extends k {
  render() {
    let { props: e } = this;
    return u(Wn, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Qs, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class Zs extends k {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, s = r.eventTimeFormat || Qs, l = Je(i, s, n, !0, e.defaultDisplayEventEnd);
    return u(Wt, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: Bn(e.seg, n), defaultGenerator: du, timeText: l, isResizing: !1, isDateSelecting: !1 }));
  }
}
function du(t) {
  return u(
    I,
    null,
    u("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && u("div", { className: "fc-event-time" }, t.timeText),
    u("div", { className: "fc-event-title" }, t.event.title || u(I, null, " "))
  );
}
class uu extends k {
  constructor() {
    super(...arguments), this.compileSegs = C(fu);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
    return u(Os, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: r, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return u(I, null, n.map((s) => {
        let l = s.eventRange.instance.instanceId;
        return u("div", { className: "fc-daygrid-event-harness", key: l, style: {
          visibility: i[l] ? "hidden" : ""
        } }, qs(s) ? u(Zs, Object.assign({ seg: s, isDragging: !1, isSelected: l === e.eventSelection, defaultDisplayEventEnd: !1 }, oe(s, e.todayRange))) : u(Ys, Object.assign({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === e.eventSelection, defaultDisplayEventEnd: !1 }, oe(s, e.todayRange))));
      }));
    } });
  }
}
function fu(t) {
  let e = [], n = [];
  for (let r of t)
    e.push(r.seg), r.isVisible || n.push(r.seg);
  return { allSegs: e, invisibleSegs: n };
}
const hu = H({ week: "narrow" });
class gu extends K {
  constructor() {
    super(...arguments), this.rootElRef = G(), this.state = {
      dayNumberId: ve()
    }, this.handleRootEl = (e) => {
      te(this.rootElRef, e), te(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: r, rootElRef: i } = this, { options: s, dateEnv: l } = e, { date: a, dateProfile: o } = n;
    const d = n.showDayNumber && mu(a, o.currentRange, l);
    return u(jn, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": r.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: pu, date: a, dateProfile: o, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: d, extraRenderProps: n.extraRenderProps }, (c, g) => u(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && u(Ns, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: Qe(e, a, "week"), date: a, defaultFormat: hu }),
      !g.isDisabled && (n.showDayNumber || Vn(s) || n.forceDayTop) ? u(
        "div",
        { className: "fc-daygrid-day-top" },
        u(c, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          d && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, Qe(e, a)), { id: r.dayNumberId }) })
      ) : n.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        u(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          u("a", { className: "fc-daygrid-day-number" }, " ")
        )
      ) : void 0,
      u(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        u(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          u(uu, { allDayDate: a, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      u("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function pu(t) {
  return t.dayNumberText || u(I, null, " ");
}
function mu(t, e, n) {
  const { start: r, end: i } = e, s = be(i, -1), l = n.getYear(r), a = n.getMonth(r), o = n.getYear(s), d = n.getMonth(s);
  return !(l === o && a === d) && // first date in current view?
  (t.valueOf() === r.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function $s(t) {
  return t.eventRange.instance.instanceId + ":" + t.firstCol;
}
function Js(t) {
  return $s(t) + ":" + t.lastCol;
}
function vu(t, e, n, r, i, s, l) {
  let a = new Au((b) => {
    let E = t[b.index].eventRange.instance.instanceId + ":" + b.span.start + ":" + (b.span.end - 1);
    return i[E] || 1;
  });
  a.allowReslicing = !0, a.strictOrder = r, e === !0 || n === !0 ? (a.maxCoord = s, a.hiddenConsumes = !0) : typeof e == "number" ? a.maxStackCnt = e : typeof n == "number" && (a.maxStackCnt = n, a.hiddenConsumes = !0);
  let o = [], d = [];
  for (let b = 0; b < t.length; b += 1) {
    let E = t[b], _ = Js(E);
    i[_] != null ? o.push({
      index: b,
      span: {
        start: E.firstCol,
        end: E.lastCol + 1
      }
    }) : d.push(E);
  }
  let c = a.addSegs(o), g = a.toRects(), { singleColPlacements: h, multiColPlacements: f, leftoverMargins: m } = yu(g, t, l), y = [], v = [];
  for (let b of d) {
    f[b.firstCol].push({
      seg: b,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let E = b.firstCol; E <= b.lastCol; E += 1)
      h[E].push({
        seg: je(b, E, E + 1, l),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let b = 0; b < l.length; b += 1)
    y.push(0);
  for (let b of c) {
    let E = t[b.index], _ = b.span;
    f[_.start].push({
      seg: je(E, _.start, _.end, l),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let w = _.start; w < _.end; w += 1)
      y[w] += 1, h[w].push({
        seg: je(E, w, w + 1, l),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let b = 0; b < l.length; b += 1)
    v.push(m[b]);
  return { singleColPlacements: h, multiColPlacements: f, moreCnts: y, moreMarginTops: v };
}
function yu(t, e, n) {
  let r = bu(t, n.length), i = [], s = [], l = [];
  for (let a = 0; a < n.length; a += 1) {
    let o = r[a], d = [], c = 0, g = 0;
    for (let f of o) {
      let m = e[f.index];
      d.push({
        seg: je(m, a, a + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: f.levelCoord,
        marginTop: f.levelCoord - c
      }), c = f.levelCoord + f.thickness;
    }
    let h = [];
    c = 0, g = 0;
    for (let f of o) {
      let m = e[f.index], y = f.span.end - f.span.start > 1, v = f.span.start === a;
      g += f.levelCoord - c, c = f.levelCoord + f.thickness, y ? (g += f.thickness, v && h.push({
        seg: je(m, f.span.start, f.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: f.levelCoord,
        marginTop: 0
      })) : v && (h.push({
        seg: je(m, f.span.start, f.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: f.levelCoord,
        marginTop: g
        // claim the margin
      }), g = 0);
    }
    i.push(d), s.push(h), l.push(g);
  }
  return { singleColPlacements: i, multiColPlacements: s, leftoverMargins: l };
}
function bu(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n.push([]);
  for (let r of t)
    for (let i = r.span.start; i < r.span.end; i += 1)
      n[i].push(r);
  return n;
}
function je(t, e, n, r) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, s = i.range, l = Ae(s, {
    start: r[e].date,
    end: L(r[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: l
  }, isStart: t.isStart && l.start.valueOf() === s.start.valueOf(), isEnd: t.isEnd && l.end.valueOf() === s.end.valueOf() });
}
class Au extends Es {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: r } = this, i = (s) => !this.forceHidden[Me(s)];
    for (let s = 0; s < r.length; s += 1)
      r[s] = r[s].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, r) {
    const { entriesByLevel: i, forceHidden: s } = this, { touchingEntry: l, touchingLevel: a, touchingLateral: o } = e;
    if (this.hiddenConsumes && l) {
      const d = Me(l);
      if (!s[d])
        if (this.allowReslicing) {
          const c = Object.assign(Object.assign({}, l), { span: zn(l.span, n.span) }), g = Me(c);
          s[g] = !0, i[a][o] = c, r.push(c), this.splitEntry(l, n, r);
        } else
          s[d] = !0, r.push(l);
    }
    super.handleInvalidInsertion(e, n, r);
  }
}
class Ks extends K {
  constructor() {
    super(...arguments), this.cellElRefs = new le(), this.frameElRefs = new le(), this.fgElRefs = new le(), this.segHarnessRefs = new le(), this.rootElRef = G(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, { options: i } = r, s = e.cells.length, l = bt(e.businessHourSegs, s), a = bt(e.bgEventSegs, s), o = bt(this.getHighlightSegs(), s), d = bt(this.getMirrorSegs(), s), { singleColPlacements: c, multiColPlacements: g, moreCnts: h, moreMarginTops: f } = vu(Pn(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells), m = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return u(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((y, v) => {
        let b = this.renderFgSegs(v, e.forPrint ? c[v] : g[v], e.todayRange, m), E = this.renderFgSegs(v, Eu(d[v], g), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return u(gu, { key: y.key, elRef: this.cellElRefs.createRef(y.key), innerElRef: this.frameElRefs.createRef(y.key), dateProfile: e.dateProfile, date: y.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && v === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: y.extraRenderProps, extraDataAttrs: y.extraDataAttrs, extraClassNames: y.extraClassNames, extraDateSpan: y.extraDateSpan, moreCnt: h[v], moreMarginTop: f[v], singlePlacements: c[v], fgContentElRef: this.fgElRefs.createRef(y.key), fgContent: (
          // Fragment scopes the keys
          u(
            I,
            null,
            u(I, null, b),
            u(I, null, E)
          )
        ), bgContent: (
          // Fragment scopes the keys
          u(
            I,
            null,
            this.renderFillSegs(o[v], "highlight"),
            this.renderFillSegs(l[v], "non-business"),
            this.renderFillSegs(a[v], "bg-event")
          )
        ), minHeight: e.cellMinHeight });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(e, n) {
    let r = this.props;
    this.updateSizing(!J(e, r));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let { props: e } = this;
    return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
  }
  getMirrorSegs() {
    let { props: e } = this;
    return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
  }
  renderFgSegs(e, n, r, i, s, l, a) {
    let { context: o } = this, { eventSelection: d } = this.props, { framePositions: c } = this.state, g = this.props.cells.length === 1, h = s || l || a, f = [];
    if (c)
      for (let m of n) {
        let { seg: y } = m, { instanceId: v } = y.eventRange.instance, b = m.isVisible && !i[v], E = m.isAbsolute, _ = "", w = "";
        E && (o.isRtl ? (w = 0, _ = c.lefts[y.lastCol] - c.lefts[y.firstCol]) : (_ = 0, w = c.rights[y.firstCol] - c.rights[y.lastCol])), f.push(u("div", { className: "fc-daygrid-event-harness" + (E ? " fc-daygrid-event-harness-abs" : ""), key: $s(y), ref: h ? null : this.segHarnessRefs.createRef(Js(y)), style: {
          visibility: b ? "" : "hidden",
          marginTop: E ? "" : m.marginTop,
          top: E ? m.absoluteTop : "",
          left: _,
          right: w
        } }, qs(y) ? u(Zs, Object.assign({ seg: y, isDragging: s, isSelected: v === d, defaultDisplayEventEnd: g }, oe(y, r))) : u(Ys, Object.assign({ seg: y, isDragging: s, isResizing: l, isDateSelecting: a, isSelected: v === d, defaultDisplayEventEnd: g }, oe(y, r)))));
      }
    return f;
  }
  renderFillSegs(e, n) {
    let { isRtl: r } = this.context, { todayRange: i } = this.props, { framePositions: s } = this.state, l = [];
    if (s)
      for (let a of e) {
        let o = r ? {
          right: 0,
          left: s.lefts[a.lastCol] - s.lefts[a.firstCol]
        } : {
          left: 0,
          right: s.rights[a.firstCol] - s.rights[a.lastCol]
        };
        l.push(u("div", { key: ms(a.eventRange), className: "fc-daygrid-bg-harness", style: o }, n === "bg-event" ? u(Ms, Object.assign({ seg: a }, oe(a, i))) : Is(n)));
      }
    return u(I, {}, ...l);
  }
  updateSizing(e) {
    let { props: n, state: r, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let o = n.cells.map((d) => i.currentMap[d.key]);
        if (o.length) {
          let d = this.rootElRef.current, c = new qe(
            d,
            o,
            !0,
            // isHorizontal
            !1
          );
          (!r.framePositions || !r.framePositions.similarTo(c)) && this.setState({
            framePositions: new qe(
              d,
              o,
              !0,
              // isHorizontal
              !1
            )
          });
        }
      }
      const s = this.state.segHeights, l = this.querySegHeights(), a = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        segHeights: Object.assign(Object.assign({}, s), l),
        maxContentHeight: a ? this.computeMaxContentHeight() : null
      });
    }
  }
  querySegHeights() {
    let e = this.segHarnessRefs.currentMap, n = {};
    for (let r in e) {
      let i = Math.round(e[r].getBoundingClientRect().height);
      n[r] = Math.max(n[r] || 0, i);
    }
    return n;
  }
  computeMaxContentHeight() {
    let e = this.props.cells[0].key, n = this.cellElRefs.currentMap[e], r = this.fgElRefs.currentMap[e];
    return n.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
  }
  getCellEls() {
    let e = this.cellElRefs.currentMap;
    return this.props.cells.map((n) => e[n.key]);
  }
}
Ks.addStateEquality({
  segHeights: J
});
function Eu(t, e) {
  if (!t.length)
    return [];
  let n = Cu(e);
  return t.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[r.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function Cu(t) {
  let e = {};
  for (let n of t)
    for (let r of n)
      e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
  return e;
}
class Su extends K {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = C(wt), this.splitBgEventSegs = C(Du), this.splitFgEventSegs = C(wt), this.splitDateSelectionSegs = C(wt), this.splitEventDrag = C(oi), this.splitEventResize = C(oi), this.rowRefs = new le();
  }
  render() {
    let { props: e, context: n } = this, r = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, r), s = this.splitBgEventSegs(e.bgEventSegs, r), l = this.splitFgEventSegs(e.fgEventSegs, r), a = this.splitDateSelectionSegs(e.dateSelectionSegs, r), o = this.splitEventDrag(e.eventDrag, r), d = this.splitEventResize(e.eventResize, r), c = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return u(He, { unit: "day" }, (g, h) => u(I, null, e.cells.map((f, m) => u(Ks, {
      ref: this.rowRefs.createRef(m),
      key: f.length ? f[0].date.toISOString() : m,
      showDayNumbers: r > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: h,
      dateProfile: e.dateProfile,
      cells: f,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[m],
      eventSelection: e.eventSelection,
      bgEventSegs: s[m],
      fgEventSegs: l[m],
      dateSelectionSegs: a[m],
      eventDrag: o[m],
      eventResize: d[m],
      dayMaxEvents: e.dayMaxEvents,
      dayMaxEventRows: e.dayMaxEventRows,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      cellMinHeight: c,
      forPrint: e.forPrint
    }))));
  }
  componentDidMount() {
    this.registerInteractiveComponent();
  }
  componentDidUpdate() {
    this.registerInteractiveComponent();
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      const e = this.rowRefs.currentMap[0].getCellEls()[0], n = e ? e.closest(".fc-daygrid-body") : null;
      n && (this.rootEl = n, this.context.registerInteractiveComponent(this, {
        el: n,
        isHitComboAllowed: this.props.isHitComboAllowed
      }));
    }
  }
  componentWillUnmount() {
    this.rootEl && (this.context.unregisterInteractiveComponent(this), this.rootEl = null);
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new qe(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new qe(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      !0,
      // horizontal
      !1
    );
  }
  queryHit(e, n) {
    let { colPositions: r, rowPositions: i } = this, s = r.leftToIndex(e), l = i.topToIndex(n);
    if (l != null && s != null) {
      let a = this.props.cells[l][s];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(l, s), allDay: !0 }, a.extraDateSpan),
        dayEl: this.getCellEl(l, s),
        rect: {
          left: r.lefts[s],
          right: r.rights[s],
          top: i.tops[l],
          bottom: i.bottoms[l]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(e, n) {
    return this.rowRefs.currentMap[e].getCellEls()[n];
  }
  getCellRange(e, n) {
    let r = this.props.cells[e][n].date, i = L(r, 1);
    return { start: r, end: i };
  }
}
function Du(t, e) {
  return wt(t.filter(wu), e);
}
function wu(t) {
  return t.eventRange.def.allDay;
}
class _u extends K {
  constructor() {
    super(...arguments), this.elRef = G(), this.needsScrollReset = !1;
  }
  render() {
    let { props: e } = this, { dayMaxEventRows: n, dayMaxEvents: r, expandRows: i } = e, s = r === !0 || n === !0;
    s && !i && (s = !1, n = null, r = null);
    let l = [
      "fc-daygrid-body",
      s ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      i ? "" : "fc-daygrid-body-natural"
      // will height of one row depend on the others?
    ];
    return u(
      "div",
      { ref: this.elRef, className: l.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      u(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        u(
          "tbody",
          { role: "presentation" },
          u(Su, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: r, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
        )
      )
    );
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(e) {
    e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
  }
  requestScrollReset() {
    this.needsScrollReset = !0, this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const e = Ru(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        r.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function Ru(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${wa(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${nt(e.currentDate)}"]`)), n;
}
class Tu extends Rs {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class Xs extends K {
  constructor() {
    super(...arguments), this.slicer = new Tu(), this.tableRef = G();
  }
  render() {
    let { props: e, context: n } = this;
    return u(_u, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class xu extends cu {
  constructor() {
    super(...arguments), this.buildDayTableModel = C(ku), this.headerRef = G(), this.tableRef = G();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, i = this.buildDayTableModel(r.dateProfile, n), s = e.dayHeaders && u(Ds, { ref: this.headerRef, dateProfile: r.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), l = (a) => u(Xs, { ref: this.tableRef, dateProfile: r.dateProfile, dayTableModel: i, businessHours: r.businessHours, dateSelection: r.dateSelection, eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: a.tableColGroupNode, tableMinWidth: a.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !r.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: a.clientWidth, clientHeight: a.clientHeight, forPrint: r.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(s, l, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(s, l);
  }
}
function ku(t, e) {
  let n = new ws(t.renderRange, e);
  return new _s(n, /year|month|week/.test(t.currentRangeUnit));
}
class Mu extends is {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, r) {
    let i = super.buildRenderRange(e, n, r), { props: s } = this;
    return Iu({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: s.fixedWeekCount,
      dateEnv: s.dateEnv
    });
  }
}
function Iu(t) {
  let { dateEnv: e, currentRange: n } = t, { start: r, end: i } = n, s;
  if (t.snapToWeek && (r = e.startOfWeek(r), s = e.startOfWeek(i), s.valueOf() !== i.valueOf() && (i = Pr(s, 1))), t.fixedWeekCount) {
    let l = e.startOfWeek(e.startOfMonth(L(n.end, -1))), a = Math.ceil(
      // could be partial weeks due to hiddenDays
      ga(l, i)
    );
    i = Pr(i, 6 - a);
  }
  return { start: r, end: i };
}
var Nu = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
zt(Nu);
var Ou = ue({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: xu,
      dateProfileGeneratorClass: Mu
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: !0
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
});
class Hu extends oc {
  getKeyInfo() {
    return {
      allDay: {},
      timed: {}
    };
  }
  getKeysForDateSpan(e) {
    return e.allDay ? ["allDay"] : ["timed"];
  }
  getKeysForEventDef(e) {
    return e.allDay ? jo(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
  }
}
const Pu = H({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "short"
});
function el(t) {
  let e = [
    "fc-timegrid-slot",
    "fc-timegrid-slot-label",
    t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
  ];
  return u(de.Consumer, null, (n) => {
    if (!t.isLabeled)
      return u("td", { className: e.join(" "), "data-time": t.isoTimeStr });
    let { dateEnv: r, options: i, viewApi: s } = n, l = (
      // TODO: fully pre-parse
      i.slotLabelFormat == null ? Pu : Array.isArray(i.slotLabelFormat) ? H(i.slotLabelFormat[0]) : H(i.slotLabelFormat)
    ), a = {
      level: 0,
      time: t.time,
      date: r.toDate(t.date),
      view: s,
      text: r.format(t.date, l)
    };
    return u(V, { elTag: "td", elClasses: e, elAttrs: {
      "data-time": t.isoTimeStr
    }, renderProps: a, generatorName: "slotLabelContent", customGenerator: i.slotLabelContent, defaultGenerator: Bu, classNameGenerator: i.slotLabelClassNames, didMount: i.slotLabelDidMount, willUnmount: i.slotLabelWillUnmount }, (o) => u(
      "div",
      { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
      u(o, { elTag: "div", elClasses: [
        "fc-timegrid-slot-label-cushion",
        "fc-scrollgrid-shrink-cushion"
      ] })
    ));
  });
}
function Bu(t) {
  return t.text;
}
class Fu extends k {
  render() {
    return this.props.slatMetas.map((e) => u(
      "tr",
      { key: e.key },
      u(el, Object.assign({}, e))
    ));
  }
}
const zu = H({ week: "short" }), Uu = 5;
class Wu extends K {
  constructor() {
    super(...arguments), this.allDaySplitter = new Hu(), this.headerElRef = G(), this.rootElRef = G(), this.scrollerElRef = G(), this.state = {
      slatCoords: null
    }, this.handleScrollTopRequest = (e) => {
      let n = this.scrollerElRef.current;
      n && (n.scrollTop = e);
    }, this.renderHeadAxis = (e, n = "") => {
      let { options: r } = this.context, { dateProfile: i } = this.props, s = i.renderRange, a = Ee(s.start, s.end) === 1 ? Qe(this.context, s.start, "week") : {};
      return r.weekNumbers && e === "day" ? u(Ns, { elTag: "th", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, date: s.start, defaultFormat: zu }, (o) => u(
        "div",
        { className: [
          "fc-timegrid-axis-frame",
          "fc-scrollgrid-shrink-frame",
          "fc-timegrid-axis-frame-liquid"
        ].join(" "), style: { height: n } },
        u(o, { elTag: "a", elClasses: [
          "fc-timegrid-axis-cushion",
          "fc-scrollgrid-shrink-cushion",
          "fc-scrollgrid-sync-inner"
        ], elAttrs: a })
      )) : u(
        "th",
        { "aria-hidden": !0, className: "fc-timegrid-axis" },
        u("div", { className: "fc-timegrid-axis-frame", style: { height: n } })
      );
    }, this.renderTableRowAxis = (e) => {
      let { options: n, viewApi: r } = this.context, i = {
        text: n.allDayText,
        view: r
      };
      return (
        // TODO: make reusable hook. used in list view too
        u(V, { elTag: "td", elClasses: [
          "fc-timegrid-axis",
          "fc-scrollgrid-shrink"
        ], elAttrs: {
          "aria-hidden": !0
        }, renderProps: i, generatorName: "allDayContent", customGenerator: n.allDayContent, defaultGenerator: Lu, classNameGenerator: n.allDayClassNames, didMount: n.allDayDidMount, willUnmount: n.allDayWillUnmount }, (s) => u(
          "div",
          { className: [
            "fc-timegrid-axis-frame",
            "fc-scrollgrid-shrink-frame",
            e == null ? " fc-timegrid-axis-frame-liquid" : ""
          ].join(" "), style: { height: e } },
          u(s, { elTag: "span", elClasses: [
            "fc-timegrid-axis-cushion",
            "fc-scrollgrid-shrink-cushion",
            "fc-scrollgrid-sync-inner"
          ] })
        ))
      );
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e });
    };
  }
  // rendering
  // ----------------------------------------------------------------------------------------------------
  renderSimpleLayout(e, n, r) {
    let { context: i, props: s } = this, l = [], a = Bt(i.options);
    return e && l.push({
      type: "header",
      key: "header",
      isSticky: a,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), n && (l.push({
      type: "body",
      key: "all-day",
      chunk: { content: n }
    }), l.push({
      type: "body",
      key: "all-day-divider",
      outerContent: (
        // TODO: rename to cellContent so don't need to define <tr>?
        u(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          u("td", { className: "fc-timegrid-divider " + i.theme.getClass("tableCellShaded") })
        )
      )
    })), l.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: !!i.options.expandRows,
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: r
      }
    }), u(
      et,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: i.viewSpec },
      u(Un, { liquid: !s.isHeightAuto && !s.forPrint, collapsibleWidth: s.forPrint, cols: [{ width: "shrink" }], sections: l })
    );
  }
  renderHScrollLayout(e, n, r, i, s, l, a) {
    let o = this.context.pluginHooks.scrollGridImpl;
    if (!o)
      throw new Error("No ScrollGrid implementation");
    let { context: d, props: c } = this, g = !c.forPrint && Bt(d.options), h = !c.forPrint && ks(d.options), f = [];
    e && f.push({
      type: "header",
      key: "header",
      isSticky: g,
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (y) => u("tr", { role: "presentation" }, this.renderHeadAxis("day", y.rowSyncHeights[0]))
        },
        {
          key: "cols",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      ]
    }), n && (f.push({
      type: "body",
      key: "all-day",
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (y) => u("tr", { role: "presentation" }, this.renderTableRowAxis(y.rowSyncHeights[0]))
        },
        {
          key: "cols",
          content: n
        }
      ]
    }), f.push({
      key: "all-day-divider",
      type: "body",
      outerContent: (
        // TODO: rename to cellContent so don't need to define <tr>?
        u(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          u("td", { colSpan: 2, className: "fc-timegrid-divider " + d.theme.getClass("tableCellShaded") })
        )
      )
    }));
    let m = d.options.nowIndicator;
    return f.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: !!d.options.expandRows,
      chunks: [
        {
          key: "axis",
          content: (y) => (
            // TODO: make this now-indicator arrow more DRY with TimeColsContent
            u(
              "div",
              { className: "fc-timegrid-axis-chunk" },
              u(
                "table",
                { "aria-hidden": !0, style: { height: y.expandRows ? y.clientHeight : "" } },
                y.tableColGroupNode,
                u(
                  "tbody",
                  null,
                  u(Fu, { slatMetas: l })
                )
              ),
              u(
                "div",
                { className: "fc-timegrid-now-indicator-container" },
                u(He, {
                  unit: m ? "minute" : "day"
                  /* hacky */
                }, (v) => {
                  let b = m && a && a.safeComputeTop(v);
                  return typeof b == "number" ? u(Ln, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: b }, isAxis: !0, date: v }) : null;
                })
              )
            )
          )
        },
        {
          key: "cols",
          scrollerElRef: this.scrollerElRef,
          content: r
        }
      ]
    }), h && f.push({
      key: "footer",
      type: "footer",
      isSticky: !0,
      chunks: [
        {
          key: "axis",
          content: An
        },
        {
          key: "cols",
          content: An
        }
      ]
    }), u(
      et,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: d.viewSpec },
      u(o, { liquid: !c.isHeightAuto && !c.forPrint, forPrint: c.forPrint, collapsibleWidth: !1, colGroups: [
        { width: "shrink", cols: [{ width: "shrink" }] },
        { cols: [{ span: i, minWidth: s }] }
      ], sections: f })
    );
  }
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/
  getAllDayMaxEventProps() {
    let { dayMaxEvents: e, dayMaxEventRows: n } = this.context.options;
    return (e === !0 || n === !0) && (e = void 0, n = Uu), { dayMaxEvents: e, dayMaxEventRows: n };
  }
}
function Lu(t) {
  return t.text;
}
class ju {
  constructor(e, n, r) {
    this.positions = e, this.dateProfile = n, this.slotDuration = r;
  }
  safeComputeTop(e) {
    let { dateProfile: n } = this;
    if (ae(n.currentRange, e)) {
      let r = B(e), i = e.valueOf() - r.valueOf();
      if (i >= $(n.slotMinTime) && i < $(n.slotMaxTime))
        return this.computeTimeTop(x(i));
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(e, n) {
    return n || (n = B(e)), this.computeTimeTop(x(e.valueOf() - n.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(e) {
    let { positions: n, dateProfile: r } = this, i = n.els.length, s = (e.milliseconds - $(r.slotMinTime)) / $(this.slotDuration), l, a;
    return s = Math.max(0, s), s = Math.min(i, s), l = Math.floor(s), l = Math.min(l, i - 1), a = s - l, n.tops[l] + n.getHeight(l) * a;
  }
}
class Vu extends k {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { slatElRefs: i } = e;
    return u("tbody", null, e.slatMetas.map((s, l) => {
      let a = {
        time: s.time,
        date: n.dateEnv.toDate(s.date),
        view: n.viewApi
      };
      return u(
        "tr",
        { key: s.key, ref: i.createRef(s.key) },
        e.axis && u(el, Object.assign({}, s)),
        u(V, { elTag: "td", elClasses: [
          "fc-timegrid-slot",
          "fc-timegrid-slot-lane",
          !s.isLabeled && "fc-timegrid-slot-minor"
        ], elAttrs: {
          "data-time": s.isoTimeStr
        }, renderProps: a, generatorName: "slotLaneContent", customGenerator: r.slotLaneContent, classNameGenerator: r.slotLaneClassNames, didMount: r.slotLaneDidMount, willUnmount: r.slotLaneWillUnmount })
      );
    }));
  }
}
class Gu extends k {
  constructor() {
    super(...arguments), this.rootElRef = G(), this.slatElRefs = new le();
  }
  render() {
    let { props: e, context: n } = this;
    return u(
      "div",
      { ref: this.rootElRef, className: "fc-timegrid-slots" },
      u(
        "table",
        { "aria-hidden": !0, className: n.theme.getClass("table"), style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth,
          height: e.minHeight
        } },
        e.tableColGroupNode,
        u(Vu, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
      )
    );
  }
  componentDidMount() {
    this.updateSizing();
  }
  componentDidUpdate() {
    this.updateSizing();
  }
  componentWillUnmount() {
    this.props.onCoords && this.props.onCoords(null);
  }
  updateSizing() {
    let { context: e, props: n } = this;
    n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new ju(new qe(this.rootElRef.current, Qu(this.slatElRefs.currentMap, n.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
  }
}
function Qu(t, e) {
  return e.map((n) => t[n.key]);
}
function Ze(t, e) {
  let n = [], r;
  for (r = 0; r < e; r += 1)
    n.push([]);
  if (t)
    for (r = 0; r < t.length; r += 1)
      n[t[r].col].push(t[r]);
  return n;
}
function ci(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.col].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
class qu extends k {
  render() {
    let { props: e } = this;
    return u(Os, { elClasses: ["fc-timegrid-more-link"], elStyle: {
      top: e.top,
      bottom: e.bottom
    }, allDayDate: null, moreCnt: e.hiddenSegs.length, allSegs: e.hiddenSegs, hiddenSegs: e.hiddenSegs, extraDateSpan: e.extraDateSpan, dateProfile: e.dateProfile, todayRange: e.todayRange, popoverContent: () => nl(e.hiddenSegs, e), defaultGenerator: Yu, forceTimed: !0 }, (n) => u(n, { elTag: "div", elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"] }));
  }
}
function Yu(t) {
  return t.shortText;
}
function Zu(t, e, n) {
  let r = new Es();
  e != null && (r.strictOrder = e), n != null && (r.maxStackCnt = n);
  let i = r.addSegs(t), s = vc(i), l = $u(r);
  return l = ef(l, 1), { segRects: tf(l), hiddenGroups: s };
}
function $u(t) {
  const { entriesByLevel: e } = t, n = qn((r, i) => r + ":" + i, (r, i) => {
    let s = Xu(t, r, i), l = di(s, n), a = e[r][i];
    return [
      Object.assign(Object.assign({}, a), { nextLevelNodes: l[0] }),
      a.thickness + l[1]
      // the pressure builds
    ];
  });
  return di(e.length ? { level: 0, lateralStart: 0, lateralEnd: e[0].length } : null, n)[0];
}
function di(t, e) {
  if (!t)
    return [[], 0];
  let { level: n, lateralStart: r, lateralEnd: i } = t, s = r, l = [];
  for (; s < i; )
    l.push(e(n, s)), s += 1;
  return l.sort(Ju), [
    l.map(Ku),
    l[0][1]
    // first item's pressure
  ];
}
function Ju(t, e) {
  return e[1] - t[1];
}
function Ku(t) {
  return t[0];
}
function Xu(t, e, n) {
  let { levelCoords: r, entriesByLevel: i } = t, s = i[e][n], l = r[e] + s.thickness, a = r.length, o = e;
  for (; o < a && r[o] < l; o += 1)
    ;
  for (; o < a; o += 1) {
    let d = i[o], c, g = bn(d, s.span.start, yn), h = g[0] + g[1], f = h;
    for (
      ;
      // loop through entries that horizontally intersect
      (c = d[f]) && // but not past the whole seg list
      c.span.start < s.span.end;
    )
      f += 1;
    if (h < f)
      return { level: o, lateralStart: h, lateralEnd: f };
  }
  return null;
}
function ef(t, e) {
  const n = qn((r, i, s) => Me(r), (r, i, s) => {
    let { nextLevelNodes: l, thickness: a } = r, o = a + s, d = a / o, c, g = [];
    if (!l.length)
      c = e;
    else
      for (let f of l)
        if (c === void 0) {
          let m = n(f, i, o);
          c = m[0], g.push(m[1]);
        } else {
          let m = n(f, c, 0);
          g.push(m[1]);
        }
    let h = (c - i) * d;
    return [c - h, Object.assign(Object.assign({}, r), { thickness: h, nextLevelNodes: g })];
  });
  return t.map((r) => n(r, 0, 0)[1]);
}
function tf(t) {
  let e = [];
  const n = qn((i, s, l) => Me(i), (i, s, l) => {
    let a = Object.assign(Object.assign({}, i), {
      levelCoord: s,
      stackDepth: l,
      stackForward: 0
    });
    return e.push(a), a.stackForward = r(i.nextLevelNodes, s + i.thickness, l + 1) + 1;
  });
  function r(i, s, l) {
    let a = 0;
    for (let o of i)
      a = Math.max(n(o, s, l), a);
    return a;
  }
  return r(t, 0, 0), e;
}
function qn(t, e) {
  const n = {};
  return (...r) => {
    let i = t(...r);
    return i in n ? n[i] : n[i] = e(...r);
  };
}
function ui(t, e, n = null, r = 0) {
  let i = [];
  if (n)
    for (let s = 0; s < t.length; s += 1) {
      let l = t[s], a = n.computeDateTop(l.start, e), o = Math.max(
        a + (r || 0),
        // :(
        n.computeDateTop(l.end, e)
      );
      i.push({
        start: Math.round(a),
        end: Math.round(o)
        //
      });
    }
  return i;
}
function nf(t, e, n, r) {
  let i = [], s = [];
  for (let d = 0; d < t.length; d += 1) {
    let c = e[d];
    c ? i.push({
      index: d,
      thickness: 1,
      span: c
    }) : s.push(t[d]);
  }
  let { segRects: l, hiddenGroups: a } = Zu(i, n, r), o = [];
  for (let d of l)
    o.push({
      seg: t[d.index],
      rect: d
    });
  for (let d of s)
    o.push({ seg: d, rect: null });
  return { segPlacements: o, hiddenGroups: a };
}
const rf = H({
  hour: "numeric",
  minute: "2-digit",
  meridiem: !1
});
class tl extends k {
  render() {
    return u(Wn, Object.assign({}, this.props, { elClasses: [
      "fc-timegrid-event",
      "fc-v-event",
      this.props.isShort && "fc-timegrid-event-short"
    ], defaultTimeFormat: rf }));
  }
}
class sf extends k {
  constructor() {
    super(...arguments), this.sortEventSegs = C(Pn);
  }
  // TODO: memoize event-placement?
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = r.selectMirror, s = (
      // yuck
      e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || i && e.dateSelectionSegs || []
    ), l = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    ), a = this.sortEventSegs(e.fgEventSegs, r.eventOrder);
    return u(jn, { elTag: "td", elRef: e.elRef, elClasses: [
      "fc-timegrid-col",
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs), date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, extraRenderProps: e.extraRenderProps }, (o) => u(
      "div",
      { className: "fc-timegrid-col-frame" },
      u(
        "div",
        { className: "fc-timegrid-col-bg" },
        this.renderFillSegs(e.businessHourSegs, "non-business"),
        this.renderFillSegs(e.bgEventSegs, "bg-event"),
        this.renderFillSegs(e.dateSelectionSegs, "highlight")
      ),
      u("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(a, l, !1, !1, !1)),
      u("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(s, {}, !!e.eventDrag, !!e.eventResize, !!i, "mirror")),
      u("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(e.nowIndicatorSegs)),
      Vn(r) && u(o, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
    ));
  }
  renderFgSegs(e, n, r, i, s, l) {
    let { props: a } = this;
    return a.forPrint ? nl(e, a) : this.renderPositionedFgSegs(e, n, r, i, s, l);
  }
  renderPositionedFgSegs(e, n, r, i, s, l) {
    let { eventMaxStack: a, eventShortHeight: o, eventOrderStrict: d, eventMinHeight: c } = this.context.options, { date: g, slatCoords: h, eventSelection: f, todayRange: m, nowDate: y } = this.props, v = r || i || s, b = ui(e, g, h, c), { segPlacements: E, hiddenGroups: _ } = nf(e, b, d, a);
    return u(
      I,
      null,
      this.renderHiddenGroups(_, e),
      E.map((w) => {
        let { seg: j, rect: N } = w, W = j.eventRange.instance.instanceId, T = v || !!(!n[W] && N), ne = ln(N && N.span), st = !v && N ? this.computeSegHStyle(N) : { left: 0, right: 0 }, lt = !!N && N.stackForward > 0, at = !!N && N.span.end - N.span.start < o;
        return u(
          "div",
          { className: "fc-timegrid-event-harness" + (lt ? " fc-timegrid-event-harness-inset" : ""), key: l || W, style: Object.assign(Object.assign({ visibility: T ? "" : "hidden" }, ne), st) },
          u(tl, Object.assign({ seg: j, isDragging: r, isResizing: i, isDateSelecting: s, isSelected: W === f, isShort: at }, oe(j, m, y)))
        );
      })
    );
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(e, n) {
    let { extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: l, eventSelection: a, eventDrag: o, eventResize: d } = this.props;
    return u(I, null, e.map((c) => {
      let g = ln(c.span), h = lf(c.entries, n);
      return u(qu, { key: Zi(Hs(h)), hiddenSegs: h, top: g.top, bottom: g.bottom, extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: l, eventSelection: a, eventDrag: o, eventResize: d });
    }));
  }
  renderFillSegs(e, n) {
    let { props: r, context: i } = this, l = ui(e, r.date, r.slatCoords, i.options.eventMinHeight).map((a, o) => {
      let d = e[o];
      return u("div", { key: ms(d.eventRange), className: "fc-timegrid-bg-harness", style: ln(a) }, n === "bg-event" ? u(Ms, Object.assign({ seg: d }, oe(d, r.todayRange, r.nowDate))) : Is(n));
    });
    return u(I, null, l);
  }
  renderNowIndicator(e) {
    let { slatCoords: n, date: r } = this.props;
    return n ? e.map((i, s) => u(
      Ln,
      {
        // key doesn't matter. will only ever be one
        key: s,
        elClasses: ["fc-timegrid-now-indicator-line"],
        elStyle: {
          top: n.computeDateTop(i.start, r)
        },
        isAxis: !1,
        date: r
      }
    )) : null;
  }
  computeSegHStyle(e) {
    let { isRtl: n, options: r } = this.context, i = r.slotEventOverlap, s = e.levelCoord, l = e.levelCoord + e.thickness, a, o;
    i && (l = Math.min(1, s + (l - s) * 2)), n ? (a = 1 - l, o = s) : (a = s, o = 1 - l);
    let d = {
      zIndex: e.stackDepth + 1,
      left: a * 100 + "%",
      right: o * 100 + "%"
    };
    return i && !e.stackForward && (d[n ? "marginLeft" : "marginRight"] = 20), d;
  }
}
function nl(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: i, eventResize: s }) {
  let l = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
  return u(I, null, t.map((a) => {
    let o = a.eventRange.instance.instanceId;
    return u(
      "div",
      { key: o, style: { visibility: l[o] ? "hidden" : "" } },
      u(tl, Object.assign({ seg: a, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: o === r, isShort: !1 }, oe(a, e, n)))
    );
  }));
}
function ln(t) {
  return t ? {
    top: t.start,
    bottom: -t.end
  } : { top: "", bottom: "" };
}
function lf(t, e) {
  return t.map((n) => e[n.index]);
}
class af extends k {
  constructor() {
    super(...arguments), this.splitFgEventSegs = C(Ze), this.splitBgEventSegs = C(Ze), this.splitBusinessHourSegs = C(Ze), this.splitNowIndicatorSegs = C(Ze), this.splitDateSelectionSegs = C(Ze), this.splitEventDrag = C(ci), this.splitEventResize = C(ci), this.rootElRef = G(), this.cellElRefs = new le();
  }
  render() {
    let { props: e, context: n } = this, r = n.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), i = e.cells.length, s = this.splitFgEventSegs(e.fgEventSegs, i), l = this.splitBgEventSegs(e.bgEventSegs, i), a = this.splitBusinessHourSegs(e.businessHourSegs, i), o = this.splitNowIndicatorSegs(e.nowIndicatorSegs, i), d = this.splitDateSelectionSegs(e.dateSelectionSegs, i), c = this.splitEventDrag(e.eventDrag, i), g = this.splitEventResize(e.eventResize, i);
    return u(
      "div",
      { className: "fc-timegrid-cols", ref: this.rootElRef },
      u(
        "table",
        { role: "presentation", style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth
        } },
        e.tableColGroupNode,
        u(
          "tbody",
          { role: "presentation" },
          u(
            "tr",
            { role: "row" },
            e.axis && u(
              "td",
              { "aria-hidden": !0, className: "fc-timegrid-col fc-timegrid-axis" },
              u(
                "div",
                { className: "fc-timegrid-col-frame" },
                u("div", { className: "fc-timegrid-now-indicator-container" }, typeof r == "number" && u(Ln, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: r }, isAxis: !0, date: e.nowDate }))
              )
            ),
            e.cells.map((h, f) => u(sf, { key: h.key, elRef: this.cellElRefs.createRef(h.key), dateProfile: e.dateProfile, date: h.date, nowDate: e.nowDate, todayRange: e.todayRange, extraRenderProps: h.extraRenderProps, extraDataAttrs: h.extraDataAttrs, extraClassNames: h.extraClassNames, extraDateSpan: h.extraDateSpan, fgEventSegs: s[f], bgEventSegs: l[f], businessHourSegs: a[f], nowIndicatorSegs: o[f], dateSelectionSegs: d[f], eventDrag: c[f], eventResize: g[f], slatCoords: e.slatCoords, eventSelection: e.eventSelection, forPrint: e.forPrint }))
          )
        )
      )
    );
  }
  componentDidMount() {
    this.updateCoords();
  }
  componentDidUpdate() {
    this.updateCoords();
  }
  updateCoords() {
    let { props: e } = this;
    e.onColCoords && e.clientWidth !== null && e.onColCoords(new qe(
      this.rootElRef.current,
      of(this.cellElRefs.currentMap, e.cells),
      !0,
      // horizontal
      !1
    ));
  }
}
function of(t, e) {
  return e.map((n) => t[n.key]);
}
class cf extends K {
  constructor() {
    super(...arguments), this.processSlotOptions = C(df), this.state = {
      slatCoords: null
    }, this.handleRootEl = (e) => {
      e ? this.context.registerInteractiveComponent(this, {
        el: e,
        isHitComboAllowed: this.props.isHitComboAllowed
      }) : this.context.unregisterInteractiveComponent(this);
    }, this.handleScrollRequest = (e) => {
      let { onScrollTopRequest: n } = this.props, { slatCoords: r } = this.state;
      if (n && r) {
        if (e.time) {
          let i = r.computeTimeTop(e.time);
          i = Math.ceil(i), i && (i += 1), n(i);
        }
        return !0;
      }
      return !1;
    }, this.handleColCoords = (e) => {
      this.colCoords = e;
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
    };
  }
  render() {
    let { props: e, state: n } = this;
    return u(
      "div",
      { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      u(Gu, { axis: e.axis, dateProfile: e.dateProfile, slatMetas: e.slatMetas, clientWidth: e.clientWidth, minHeight: e.expandRows ? e.clientHeight : "", tableMinWidth: e.tableMinWidth, tableColGroupNode: e.axis ? e.tableColGroupNode : null, onCoords: this.handleSlatCoords }),
      u(af, { cells: e.cells, axis: e.axis, dateProfile: e.dateProfile, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, todayRange: e.todayRange, nowDate: e.nowDate, nowIndicatorSegs: e.nowIndicatorSegs, clientWidth: e.clientWidth, tableMinWidth: e.tableMinWidth, tableColGroupNode: e.tableColGroupNode, slatCoords: n.slatCoords, onColCoords: this.handleColCoords, forPrint: e.forPrint })
    );
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  }
  componentDidUpdate(e) {
    this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
  }
  componentWillUnmount() {
    this.scrollResponder.detach();
  }
  queryHit(e, n) {
    let { dateEnv: r, options: i } = this.context, { colCoords: s } = this, { dateProfile: l } = this.props, { slatCoords: a } = this.state, { snapDuration: o, snapsPerSlot: d } = this.processSlotOptions(this.props.slotDuration, i.snapDuration), c = s.leftToIndex(e), g = a.positions.topToIndex(n);
    if (c != null && g != null) {
      let h = this.props.cells[c], f = a.positions.tops[g], m = a.positions.getHeight(g), y = (n - f) / m, v = Math.floor(y * d), b = g * d + v, E = this.props.cells[c].date, _ = un(l.slotMinTime, da(o, b)), w = r.add(E, _), j = r.add(w, o);
      return {
        dateProfile: l,
        dateSpan: Object.assign({ range: { start: w, end: j }, allDay: !1 }, h.extraDateSpan),
        dayEl: s.els[c],
        rect: {
          left: s.lefts[c],
          right: s.rights[c],
          top: f,
          bottom: f + m
        },
        layer: 0
      };
    }
    return null;
  }
}
function df(t, e) {
  let n = e || t, r = Dn(t, n);
  return r === null && (n = t, r = 1), { snapDuration: n, snapsPerSlot: r };
}
class uf extends Rs {
  sliceRange(e, n) {
    let r = [];
    for (let i = 0; i < n.length; i += 1) {
      let s = Ae(e, n[i]);
      s && r.push({
        start: s.start,
        end: s.end,
        isStart: s.start.valueOf() === e.start.valueOf(),
        isEnd: s.end.valueOf() === e.end.valueOf(),
        col: i
      });
    }
    return r;
  }
}
class ff extends K {
  constructor() {
    super(...arguments), this.buildDayRanges = C(hf), this.slicer = new uf(), this.timeColsRef = G();
  }
  render() {
    let { props: e, context: n } = this, { dateProfile: r, dayTableModel: i } = e, { nowIndicator: s, nextDayThreshold: l } = n.options, a = this.buildDayRanges(i, r, n.dateEnv);
    return u(He, { unit: s ? "minute" : "day" }, (o, d) => u(cf, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, r, null, n, a), { forPrint: e.forPrint, axis: e.axis, dateProfile: r, slatMetas: e.slatMetas, slotDuration: e.slotDuration, cells: i.cells[0], tableColGroupNode: e.tableColGroupNode, tableMinWidth: e.tableMinWidth, clientWidth: e.clientWidth, clientHeight: e.clientHeight, expandRows: e.expandRows, nowDate: o, nowIndicatorSegs: s && this.slicer.sliceNowDate(o, r, l, n, a), todayRange: d, onScrollTopRequest: e.onScrollTopRequest, onSlatCoords: e.onSlatCoords })));
  }
}
function hf(t, e, n) {
  let r = [];
  for (let i of t.headerDates)
    r.push({
      start: n.add(i, e.slotMinTime),
      end: n.add(i, e.slotMaxTime)
    });
  return r;
}
const fi = [
  { hours: 1 },
  { minutes: 30 },
  { minutes: 15 },
  { seconds: 30 },
  { seconds: 15 }
];
function gf(t, e, n, r, i) {
  let s = /* @__PURE__ */ new Date(0), l = t, a = x(0), o = n || pf(r), d = [];
  for (; $(l) < $(e); ) {
    let c = i.add(s, l), g = Dn(a, o) !== null;
    d.push({
      date: c,
      time: l,
      key: c.toISOString(),
      isoTimeStr: _a(c),
      isLabeled: g
    }), l = un(l, r), a = un(a, r);
  }
  return d;
}
function pf(t) {
  let e, n, r;
  for (e = fi.length - 1; e >= 0; e -= 1)
    if (n = x(fi[e]), r = Dn(n, t), r !== null && r > 1)
      return n;
  return t;
}
class mf extends Wu {
  constructor() {
    super(...arguments), this.buildTimeColsModel = C(vf), this.buildSlatMetas = C(gf);
  }
  render() {
    let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context, { props: i } = this, { dateProfile: s } = i, l = this.buildTimeColsModel(s, r), a = this.allDaySplitter.splitProps(i), o = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, e.slotLabelInterval, e.slotDuration, n), { dayMinWidth: d } = e, c = !d, g = d, h = e.dayHeaders && u(Ds, { dates: l.headerDates, dateProfile: s, datesRepDistinctDays: !0, renderIntro: c ? this.renderHeadAxis : null }), f = e.allDaySlot !== !1 && ((y) => u(Xs, Object.assign({}, a.allDay, { dateProfile: s, dayTableModel: l, nextDayThreshold: e.nextDayThreshold, tableMinWidth: y.tableMinWidth, colGroupNode: y.tableColGroupNode, renderRowIntro: c ? this.renderTableRowAxis : null, showWeekNumbers: !1, expandRows: !1, headerAlignElRef: this.headerElRef, clientWidth: y.clientWidth, clientHeight: y.clientHeight, forPrint: i.forPrint }, this.getAllDayMaxEventProps()))), m = (y) => u(ff, Object.assign({}, a.timed, { dayTableModel: l, dateProfile: s, axis: c, slotDuration: e.slotDuration, slatMetas: o, forPrint: i.forPrint, tableColGroupNode: y.tableColGroupNode, tableMinWidth: y.tableMinWidth, clientWidth: y.clientWidth, clientHeight: y.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: y.expandRows, onScrollTopRequest: this.handleScrollTopRequest }));
    return g ? this.renderHScrollLayout(h, f, m, l.colCnt, d, o, this.state.slatCoords) : this.renderSimpleLayout(h, f, m);
  }
}
function vf(t, e) {
  let n = new ws(t.renderRange, e);
  return new _s(n, !1);
}
var yf = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
zt(yf);
const bf = {
  allDaySlot: Boolean
};
var Af = ue({
  name: "@fullcalendar/timegrid",
  initialView: "timeGridWeek",
  optionRefiners: bf,
  views: {
    timeGrid: {
      component: mf,
      usesMinMaxTime: !0,
      allDaySlot: !0,
      slotDuration: "00:30:00",
      slotEventOverlap: !0
      // a bad name. confused with overlap/constraint system
    },
    timeGridDay: {
      type: "timeGrid",
      duration: { days: 1 }
    },
    timeGridWeek: {
      type: "timeGrid",
      duration: { weeks: 1 }
    }
  }
});
class Ef extends k {
  constructor() {
    super(...arguments), this.state = {
      textId: ve()
    };
  }
  render() {
    let { theme: e, dateEnv: n, options: r, viewApi: i } = this.context, { cellId: s, dayDate: l, todayRange: a } = this.props, { textId: o } = this.state, d = Fn(l, a), c = r.listDayFormat ? n.format(l, r.listDayFormat) : "", g = r.listDaySideFormat ? n.format(l, r.listDaySideFormat) : "", h = Object.assign({
      date: n.toDate(l),
      view: i,
      textId: o,
      text: c,
      sideText: g,
      navLinkAttrs: Qe(this.context, l),
      sideNavLinkAttrs: Qe(this.context, l, "day", !1)
    }, d);
    return u(V, { elTag: "tr", elClasses: [
      "fc-list-day",
      ...Ut(d, e)
    ], elAttrs: {
      "data-date": nt(l)
    }, renderProps: h, generatorName: "dayHeaderContent", customGenerator: r.dayHeaderContent, defaultGenerator: Cf, classNameGenerator: r.dayHeaderClassNames, didMount: r.dayHeaderDidMount, willUnmount: r.dayHeaderWillUnmount }, (f) => (
      // TODO: force-hide top border based on :first-child
      u(
        "th",
        { scope: "colgroup", colSpan: 3, id: s, "aria-labelledby": o },
        u(f, { elTag: "div", elClasses: [
          "fc-list-day-cushion",
          e.getClass("tableCellShaded")
        ] })
      )
    ));
  }
}
function Cf(t) {
  return u(
    I,
    null,
    t.text && u("a", Object.assign({ id: t.textId, className: "fc-list-day-text" }, t.navLinkAttrs), t.text),
    t.sideText && /* not keyboard tabbable */
    u("a", Object.assign({ "aria-hidden": !0, className: "fc-list-day-side-text" }, t.sideNavLinkAttrs), t.sideText)
  );
}
const Sf = H({
  hour: "numeric",
  minute: "2-digit",
  meridiem: "short"
});
class Df extends k {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i, timeHeaderId: s, eventHeaderId: l, dateHeaderId: a } = e, o = r.eventTimeFormat || Sf;
    return u(Wt, Object.assign({}, e, { elTag: "tr", elClasses: [
      "fc-list-event",
      i.eventRange.def.url && "fc-event-forced-url"
    ], defaultGenerator: () => wf(i, n), seg: i, timeText: "", disableDragging: !0, disableResizing: !0 }), (d, c) => u(
      I,
      null,
      _f(i, o, n, s, a),
      u(
        "td",
        { "aria-hidden": !0, className: "fc-list-event-graphic" },
        u("span", { className: "fc-list-event-dot", style: {
          borderColor: c.borderColor || c.backgroundColor
        } })
      ),
      u(d, { elTag: "td", elClasses: ["fc-list-event-title"], elAttrs: { headers: `${l} ${a}` } })
    ));
  }
}
function wf(t, e) {
  let n = Bn(t, e);
  return u("a", Object.assign({}, n), t.eventRange.def.title);
}
function _f(t, e, n, r, i) {
  let { options: s } = n;
  if (s.displayEventTime !== !1) {
    let l = t.eventRange.def, a = t.eventRange.instance, o = !1, d;
    if (l.allDay ? o = !0 : fo(t.eventRange.range) ? t.isStart ? d = Je(t, e, n, null, null, a.range.start, t.end) : t.isEnd ? d = Je(t, e, n, null, null, t.start, a.range.end) : o = !0 : d = Je(t, e, n), o) {
      let c = {
        text: n.options.allDayText,
        view: n.viewApi
      };
      return u(V, { elTag: "td", elClasses: ["fc-list-event-time"], elAttrs: {
        headers: `${r} ${i}`
      }, renderProps: c, generatorName: "allDayContent", customGenerator: s.allDayContent, defaultGenerator: Rf, classNameGenerator: s.allDayClassNames, didMount: s.allDayDidMount, willUnmount: s.allDayWillUnmount });
    }
    return u("td", { className: "fc-list-event-time" }, d);
  }
  return null;
}
function Rf(t) {
  return t.text;
}
class Tf extends K {
  constructor() {
    super(...arguments), this.computeDateVars = C(kf), this.eventStoreToSegs = C(this._eventStoreToSegs), this.state = {
      timeHeaderId: ve(),
      eventHeaderId: ve(),
      dateHeaderIdRoot: ve()
    }, this.setRootEl = (e) => {
      e ? this.context.registerInteractiveComponent(this, {
        el: e
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { props: e, context: n } = this, { dayDates: r, dayRanges: i } = this.computeDateVars(e.dateProfile), s = this.eventStoreToSegs(e.eventStore, e.eventUiBases, i);
    return u(
      et,
      { elRef: this.setRootEl, elClasses: [
        "fc-list",
        n.theme.getClass("table"),
        n.options.stickyHeaderDates !== !1 ? "fc-list-sticky" : ""
      ], viewSpec: n.viewSpec },
      u(Ts, { liquid: !e.isHeightAuto, overflowX: e.isHeightAuto ? "visible" : "hidden", overflowY: e.isHeightAuto ? "visible" : "auto" }, s.length > 0 ? this.renderSegList(s, r) : this.renderEmptyMessage())
    );
  }
  renderEmptyMessage() {
    let { options: e, viewApi: n } = this.context, r = {
      text: e.noEventsText,
      view: n
    };
    return u(V, { elTag: "div", elClasses: ["fc-list-empty"], renderProps: r, generatorName: "noEventsContent", customGenerator: e.noEventsContent, defaultGenerator: xf, classNameGenerator: e.noEventsClassNames, didMount: e.noEventsDidMount, willUnmount: e.noEventsWillUnmount }, (i) => u(i, { elTag: "div", elClasses: ["fc-list-empty-cushion"] }));
  }
  renderSegList(e, n) {
    let { theme: r, options: i } = this.context, { timeHeaderId: s, eventHeaderId: l, dateHeaderIdRoot: a } = this.state, o = Mf(e);
    return u(He, { unit: "day" }, (d, c) => {
      let g = [];
      for (let h = 0; h < o.length; h += 1) {
        let f = o[h];
        if (f) {
          let m = nt(n[h]), y = a + "-" + m;
          g.push(u(Ef, { key: m, cellId: y, dayDate: n[h], todayRange: c })), f = Pn(f, i.eventOrder);
          for (let v of f)
            g.push(u(Df, Object.assign({ key: m + ":" + v.eventRange.instance.instanceId, seg: v, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, timeHeaderId: s, eventHeaderId: l, dateHeaderId: y }, oe(v, c, d))));
        }
      }
      return u(
        "table",
        { className: "fc-list-table " + r.getClass("table") },
        u(
          "thead",
          null,
          u(
            "tr",
            null,
            u("th", { scope: "col", id: s }, i.timeHint),
            u("th", { scope: "col", "aria-hidden": !0 }),
            u("th", { scope: "col", id: l }, i.eventHint)
          )
        ),
        u("tbody", null, g)
      );
    });
  }
  _eventStoreToSegs(e, n, r) {
    return this.eventRangesToSegs(mn(e, n, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, r);
  }
  eventRangesToSegs(e, n) {
    let r = [];
    for (let i of e)
      r.push(...this.eventRangeToSegs(i, n));
    return r;
  }
  eventRangeToSegs(e, n) {
    let { dateEnv: r } = this.context, { nextDayThreshold: i } = this.context.options, s = e.range, l = e.def.allDay, a, o, d, c = [];
    for (a = 0; a < n.length; a += 1)
      if (o = Ae(s, n[a]), o && (d = {
        component: this,
        eventRange: e,
        start: o.start,
        end: o.end,
        isStart: e.isStart && o.start.valueOf() === s.start.valueOf(),
        isEnd: e.isEnd && o.end.valueOf() === s.end.valueOf(),
        dayIndex: a
      }, c.push(d), !d.isEnd && !l && a + 1 < n.length && s.end < r.add(n[a + 1].start, i))) {
        d.end = s.end, d.isEnd = !0;
        break;
      }
    return c;
  }
}
function xf(t) {
  return t.text;
}
function kf(t) {
  let e = B(t.renderRange.start), n = t.renderRange.end, r = [], i = [];
  for (; e < n; )
    r.push(e), i.push({
      start: e,
      end: L(e, 1)
    }), e = L(e, 1);
  return { dayDates: r, dayRanges: i };
}
function Mf(t) {
  let e = [], n, r;
  for (n = 0; n < t.length; n += 1)
    r = t[n], (e[r.dayIndex] || (e[r.dayIndex] = [])).push(r);
  return e;
}
var If = ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';
zt(If);
const Nf = {
  listDayFormat: hi,
  listDaySideFormat: hi,
  noEventsClassNames: p,
  noEventsContent: p,
  noEventsDidMount: p,
  noEventsWillUnmount: p
  // noEventsText is defined in base options
};
function hi(t) {
  return t === !1 ? null : H(t);
}
var Of = ue({
  name: "@fullcalendar/list",
  optionRefiners: Nf,
  views: {
    list: {
      component: Tf,
      buttonTextKey: "list",
      listDayFormat: { month: "long", day: "numeric", year: "numeric" }
      // like "January 1, 2016"
    },
    listDay: {
      type: "list",
      duration: { days: 1 },
      listDayFormat: { weekday: "long" }
      // day-of-week is all we need. full date is probably in headerToolbar
    },
    listWeek: {
      type: "list",
      duration: { weeks: 1 },
      listDayFormat: { weekday: "long" },
      listDaySideFormat: { month: "long", day: "numeric", year: "numeric" }
    },
    listMonth: {
      type: "list",
      duration: { month: 1 },
      listDaySideFormat: { weekday: "long" }
      // day-of-week is nice-to-have
    },
    listYear: {
      type: "list",
      duration: { year: 1 },
      listDaySideFormat: { weekday: "long" }
      // day-of-week is nice-to-have
    }
  }
}), Hf = Ei("<div><!></div>");
function Ff(t, e) {
  gi(e, !1);
  const n = () => ur(il, "$appStore", i), r = () => ur(sl, "$component", i), [i, s] = vl(), l = F(), a = F(), o = F(), d = F(), c = F(), g = F(), h = F(), f = F(), m = F(), y = F(), v = F(), b = F(), E = F(), _ = F(), w = F(), j = F(), N = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ], W = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ], T = (D, R) => R === "narrow" ? D.slice(0, 1) : R === "short" ? D.slice(0, 3) : D;
  let ne = O(e, "todayText", 8, "Today"), st = O(e, "dataProvider", 8), lt = O(e, "eventStart", 8), at = O(e, "eventEnd", 8), Yn = O(e, "eventTitle", 8), Lt = O(e, "onClick", 8), jt = O(e, "showButtons", 8), Zn = O(e, "buttonType", 8, "action"), $n = O(e, "monthText", 8, "Month"), Jn = O(e, "weekText", 8, "Week"), Kn = O(e, "dayText", 8, "Day"), Xn = O(e, "agendaText", 8, "Agenda"), er = O(e, "showTitleDate", 8, !0), Pe = O(e, "locale", 8, "en-gb"), ot = O(e, "yearTitleFormat", 8), Se = O(e, "monthTitleFormat", 8), ct = O(e, "dayTitleFormat", 8), dt = O(e, "weekdayTitleFormat", 8), Be = O(e, "weekdayHeaderFormat", 8, "short"), tr = O(e, "emptyAgendaText", 8, "No events found"), nr = O(e, "openOnDate", 8, "{{ now }}"), fe = O(e, "calendarType", 8, "dayGridMonth"), re = O(e, "showDayNames", 8, !0), rr = O(e, "showWeekend", 8, !0);
  const { styleable: rl, appStore: il } = dr("sdk"), sl = dr("component");
  let Fe = F(null), De = F(null), we = F(null), Ye = F();
  const ll = () => {
    A(Fe)?.getAPI?.()?.updateSize();
  };
  pi(() => (typeof ResizeObserver < "u" && (P(we, new ResizeObserver(() => ll())), A(De) && A(we).observe(A(De))), () => {
    A(we)?.disconnect(), P(we, null);
  }));
  function al(D) {
    const R = D.event.title, z = D.event.start, Z = D.event.end, ie = D.event.extendedProps?.row_id || D.event.id;
    Lt()?.({ title: R, start: z, end: Z, row_id: ie });
  }
  const ol = (D, R) => {
    const z = W[D.getUTCMonth()];
    return T(A(a)[z], R);
  }, ze = (D, R, z) => !D || D === R ? A(a)[z] : D, ir = (D, R) => {
    const z = N[D];
    return T(A(a)[z], R);
  }, cl = (D, R) => ir(D.getUTCDay(), R), sr = (D, R) => {
    if (R !== "long" && R !== "short")
      return D;
    const z = W.map((X, he) => {
      const cr = new Date(Date.UTC(2020, he, 1));
      return {
        localeLabel: new Intl.DateTimeFormat(Pe(), { month: R, timeZone: "UTC" }).format(cr),
        translatedLabel: ol(cr, R)
      };
    }).sort((X, he) => he.localeLabel.length - X.localeLabel.length), Z = new Map(z.map(({ localeLabel: X, translatedLabel: he }) => [X, he])), ie = new RegExp(z.map(({ localeLabel: X }) => X).join("|"), "g");
    return D.replace(ie, (X) => Z.get(X) ?? X);
  }, lr = (D, R) => {
    const z = ai(D, { ...R, locale: Pe() });
    return sr(z, R.month);
  }, dl = (D, R, z) => {
    const Z = R ? lu(D, R, { ...z, locale: Pe() }) : ai(D, { ...z, locale: Pe() });
    return sr(Z, z.month);
  }, ut = (D) => (R) => dl(R.start.marker, R.end?.marker, { ...D, separator: R.defaultSeparator }), Vt = (D, R) => (z) => {
    const Z = ir(z.dow, D), ie = R ? lr(z.date, R) : void 0;
    return ie ? `${Z} ${ie}` : Z;
  }, ar = (D, R) => (z) => {
    const Z = z.date.marker, ie = cl(Z, D), he = R.year || R.month || R.day ? lr(Z, R) : void 0;
    return he ? `${ie} ${he}` : ie;
  };
  U(() => n(), () => {
    P(l, Al(n().application?.translationOverrides));
  }), U(() => A(l), () => {
    P(a, El("calendar", A(l)));
  }), U(() => M(fe()), () => {
    P(o, fe() === "timeGridDay");
  }), U(() => M(Zn()), () => {
    P(d, Zn() === "primary" ? "primary" : "action");
  }), U(() => M(Lt()), () => {
    P(c, typeof Lt() == "function");
  }), U(() => M(ot()), () => {
    P(g, ot() && ot() !== "hidden" ? { year: ot() } : {});
  }), U(() => M(Se()), () => {
    P(h, Se() && Se() !== "hidden" ? { month: Se() } : {});
  }), U(() => M(ct()), () => {
    P(f, ct() && ct() !== "hidden" ? { day: ct() } : {});
  }), U(
    () => (A(g), A(f), A(h)),
    () => {
      P(m, {
        ...A(g),
        ...A(f),
        ...A(h),
        omitCommas: !0
      });
    }
  ), U(
    () => (M(st()), M(Yn()), M(lt()), M(at())),
    () => {
      P(y, st()?.rows?.map((D) => ({
        title: D[Yn()],
        start: D[lt()],
        end: D[at()],
        row_id: D._id
      })) ?? []);
    }
  ), U(() => (A(we), A(De)), () => {
    A(we) && A(De) && A(we).observe(A(De));
  }), U(() => M(Se()), () => {
    P(v, Se() === "long" || Se() === "short");
  }), U(
    () => (A(v), A(g), A(h)),
    () => {
      P(b, A(v) ? ut({
        ...A(g),
        ...A(h)
      }) : {
        ...A(g),
        ...A(h)
      });
    }
  ), U(
    () => (A(v), A(g), A(f), A(h)),
    () => {
      P(E, A(v) ? ut({
        ...A(g),
        ...A(f),
        ...A(h)
      }) : {
        ...A(g),
        ...A(f),
        ...A(h)
      });
    }
  ), U(
    () => (M(dt()), A(m), A(v)),
    () => {
      dt() && dt() !== "hidden" ? P(Ye, ar(dt(), A(m))) : A(v) ? P(Ye, ut(A(m))) : P(Ye, A(m));
    }
  ), U(() => M(re()), () => {
    P(_, re() ? ar("long", {}) : !1);
  }), U(() => {
  }, () => {
    P(w, ut({ month: "long", day: "numeric", year: "numeric" }));
  }), U(
    () => (M(jt()), M(er()), M(Pe()), A(a), M(ne()), M($n()), M(Jn()), M(Kn()), M(Xn()), M(fe()), A(b), M(re()), M(Be()), A(E), A(Ye), A(_), A(w), M(tr()), M(nr()), M(rr()), A(y)),
    () => {
      P(j, {
        headerToolbar: {
          left: jt() ? "dayGridMonth,dayGridWeek,timeGridDay,listWeek" : "",
          center: er() ? "title" : "",
          right: jt() ? "prevYear,prev,today,next,nextYear" : ""
        },
        footerToolbar: "",
        locale: Pe(),
        allDayText: A(a).allDay,
        buttonText: {
          today: ze(ne(), "Today", "todayButton"),
          dayGridMonth: ze($n(), "Month", "monthButton"),
          dayGridWeek: ze(Jn(), "Week", "weekButton"),
          timeGridDay: ze(Kn(), "Day", "dayButton"),
          listWeek: ze(Xn(), "Agenda", "agendaButton")
        },
        plugins: [Ou, Af, Of],
        initialView: fe() || "dayGridMonth",
        views: {
          dayGridMonth: {
            titleFormat: A(b),
            dayHeaders: re(),
            dayHeaderContent: re() ? Vt(Be()) : void 0
          },
          dayGridWeek: {
            titleFormat: A(E),
            dayHeaderFormat: re() ? {
              weekday: Be(),
              day: "numeric",
              month: "numeric"
            } : { day: "numeric", month: "numeric" },
            dayHeaderContent: re() ? Vt(Be(), { day: "numeric", month: "numeric" }) : void 0
          },
          timeGridDay: {
            titleFormat: A(Ye),
            dayHeaderFormat: re() ? {
              weekday: Be(),
              day: "numeric",
              month: "numeric"
            } : { day: "numeric", month: "numeric" },
            dayHeaderContent: re() ? Vt(Be(), { day: "numeric", month: "numeric" }) : void 0
          },
          listWeek: {
            titleFormat: A(E),
            listDayFormat: A(_),
            listDaySideFormat: A(w),
            noEventsContent: ze(tr(), "No events found", "noEvents")
          }
        },
        initialDate: nr(),
        weekends: rr(),
        events: A(y),
        eventClick: al,
        eventTimeFormat: { hour: "numeric", minute: "2-digit", meridiem: "short" },
        height: "100%"
      });
    }
  ), U(() => (A(Fe), M(fe())), () => {
    if (A(Fe) && fe()) {
      const D = A(Fe).getAPI?.();
      D && D.view.type !== fe() && D.changeView(fe());
    }
  }), mi(), vi();
  var _e = Hf();
  let or;
  var ul = yl(_e);
  an(
    ou(ul, {
      get options() {
        return A(j);
      },
      $$legacy: !0
    }),
    (D) => P(Fe, D),
    () => A(Fe)
  ), bl(_e), an(_e, (D) => P(De, D), () => A(De)), pl(_e, (D, R) => rl?.(D, R), () => r().styles), yi(
    (D) => {
      or = Ci(_e, 1, "calendar svelte-a7w3h2", null, or, D), ml(_e, "data-button-type", A(d));
    },
    [
      () => ({
        timeGridDay: A(o),
        hasClickAction: A(c)
      })
    ]
  ), bi(t, _e), Ai(), s();
}
export {
  Ff as default
};
