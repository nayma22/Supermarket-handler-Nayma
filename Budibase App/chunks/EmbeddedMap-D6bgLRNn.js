import { aP as Xn, g as Jn, p as et, h as On, aQ as Qn, j as M, z as Jt, X as $n, o as to, l as wt, i as it, k as eo, m as io, u as An, Y as no, v as oo, t as Bn, d as Oe, w as so, y as ro, B as Dt, aR as ao, s as Ki, f as Ji, c as Yi, r as Xi, a3 as ho, x as lo, b as uo, aG as In, a4 as Rn, a5 as Nn } from "./index-quCB9sGT.js";
var Ae = { exports: {} };
var co = Ae.exports, Dn;
function _o() {
  return Dn || (Dn = 1, (function(C, m) {
    (function(l, b) {
      b(m);
    })(co, function(l) {
      function b(t) {
        for (var e, i, n = 1, o = arguments.length; n < o; n++) for (e in i = arguments[n]) t[e] = i[e];
        return t;
      }
      var nt = Object.create || function(t) {
        return H.prototype = t, new H();
      };
      function H() {
      }
      function Z(t, e) {
        var i, n = Array.prototype.slice;
        return t.bind ? t.bind.apply(t, n.call(arguments, 1)) : (i = n.call(arguments, 2), function() {
          return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments);
        });
      }
      var de = 0;
      function z(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++de), t._leaflet_id;
      }
      function _e(t, e, i) {
        var n, o, s = function() {
          n = !1, o && (a.apply(i, o), o = !1);
        }, a = function() {
          n ? o = arguments : (t.apply(i, arguments), setTimeout(s, e), n = !0);
        };
        return a;
      }
      function Et(t, o, i) {
        var n = o[1], o = o[0], s = n - o;
        return t === n && i ? t : ((t - o) % s + s) % s + o;
      }
      function O() {
        return !1;
      }
      function ot(t, e) {
        return e === !1 ? t : (e = Math.pow(10, e === void 0 ? 6 : e), Math.round(t * e) / e);
      }
      function Zt(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function dt(t) {
        return Zt(t).split(/\s+/);
      }
      function A(t, e) {
        for (var i in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? nt(t.options) : {}), e) t.options[i] = e[i];
        return t.options;
      }
      function pe(t, e, i) {
        var n, o = [];
        for (n in t) o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
        return (e && e.indexOf("?") !== -1 ? "&" : "?") + o.join("&");
      }
      var Be = /\{ *([\w_ -]+) *\}/g;
      function me(t, e) {
        return t.replace(Be, function(i, n) {
          if (n = e[n], n === void 0) throw new Error("No value provided for variable " + i);
          return n = typeof n == "function" ? n(e) : n;
        });
      }
      var J = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
      function Ft(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
        return -1;
      }
      var Qt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function $t(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      var fe = 0;
      function Ie(t) {
        var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - fe));
        return fe = e + i, window.setTimeout(t, i);
      }
      var Ot = window.requestAnimationFrame || $t("RequestAnimationFrame") || Ie, Re = window.cancelAnimationFrame || $t("CancelAnimationFrame") || $t("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t);
      };
      function G(t, e, i) {
        if (!i || Ot !== Ie) return Ot.call(window, Z(t, e));
        t.call(e);
      }
      function Q(t) {
        t && Re.call(window, t);
      }
      var Ne = { __proto__: null, extend: b, create: nt, bind: Z, get lastId() {
        return de;
      }, stamp: z, throttle: _e, wrapNum: Et, falseFn: O, formatNum: ot, trim: Zt, splitWords: dt, setOptions: A, getParamString: pe, template: me, isArray: J, indexOf: Ft, emptyImageUrl: Qt, requestFn: Ot, cancelFn: Re, requestAnimFrame: G, cancelAnimFrame: Q };
      function _t() {
      }
      _t.extend = function(t) {
        function e() {
          A(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }
        var i, n = e.__super__ = this.prototype, o = nt(n);
        for (i in (o.constructor = e).prototype = o, this) Object.prototype.hasOwnProperty.call(this, i) && i !== "prototype" && i !== "__super__" && (e[i] = this[i]);
        if (t.statics && b(e, t.statics), t.includes) {
          var s = t.includes;
          if (typeof L < "u" && L && L.Mixin) {
            s = J(s) ? s : [s];
            for (var a = 0; a < s.length; a++) s[a] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
          }
          b.apply(null, [o].concat(t.includes));
        }
        return b(o, t), delete o.statics, delete o.includes, o.options && (o.options = n.options ? nt(n.options) : {}, b(o.options, t.options)), o._initHooks = [], o.callInitHooks = function() {
          if (!this._initHooksCalled) {
            n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var r = 0, h = o._initHooks.length; r < h; r++) o._initHooks[r].call(this);
          }
        }, e;
      }, _t.include = function(t) {
        var e = this.prototype.options;
        return b(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
      }, _t.mergeOptions = function(t) {
        return b(this.prototype.options, t), this;
      }, _t.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
          this[t].apply(this, e);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
      };
      var Y = { on: function(t, e, i) {
        if (typeof t == "object") for (var n in t) this._on(n, t[n], e);
        else for (var o = 0, s = (t = dt(t)).length; o < s; o++) this._on(t[o], e, i);
        return this;
      }, off: function(t, e, i) {
        if (arguments.length) if (typeof t == "object") for (var n in t) this._off(n, t[n], e);
        else {
          t = dt(t);
          for (var o = arguments.length === 1, s = 0, a = t.length; s < a; s++) o ? this._off(t[s]) : this._off(t[s], e, i);
        }
        else delete this._events;
        return this;
      }, _on: function(t, e, i, n) {
        typeof e != "function" ? console.warn("wrong listener type: " + typeof e) : this._listens(t, e, i) === !1 && (e = { fn: e, ctx: i = i === this ? void 0 : i }, n && (e.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e));
      }, _off: function(t, e, i) {
        var n, o, s;
        if (this._events && (n = this._events[t])) if (arguments.length === 1) {
          if (this._firingCount) for (o = 0, s = n.length; o < s; o++) n[o].fn = O;
          delete this._events[t];
        } else typeof e != "function" ? console.warn("wrong listener type: " + typeof e) : (e = this._listens(t, e, i)) !== !1 && (i = n[e], this._firingCount && (i.fn = O, this._events[t] = n = n.slice()), n.splice(e, 1));
      }, fire: function(t, e, i) {
        if (this.listens(t, i)) {
          var n = b({}, e, { type: t, target: this, sourceTarget: e && e.sourceTarget || this });
          if (this._events) {
            var o = this._events[t];
            if (o) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var s = 0, a = o.length; s < a; s++) {
                var r = o[s], h = r.fn;
                r.once && this.off(t, h, r.ctx), h.call(r.ctx || this, n);
              }
              this._firingCount--;
            }
          }
          i && this._propagateEvent(n);
        }
        return this;
      }, listens: function(t, e, i, n) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var o = e, s = (typeof e != "function" && (n = !!e, i = o = void 0), this._events && this._events[t]);
        if (s && s.length && this._listens(t, o, i) !== !1) return !0;
        if (n) {
          for (var a in this._eventParents) if (this._eventParents[a].listens(t, e, i, n)) return !0;
        }
        return !1;
      }, _listens: function(t, e, i) {
        if (this._events) {
          var n = this._events[t] || [];
          if (!e) return !!n.length;
          i === this && (i = void 0);
          for (var o = 0, s = n.length; o < s; o++) if (n[o].fn === e && n[o].ctx === i) return o;
        }
        return !1;
      }, once: function(t, e, i) {
        if (typeof t == "object") for (var n in t) this._on(n, t[n], e, !0);
        else for (var o = 0, s = (t = dt(t)).length; o < s; o++) this._on(t[o], e, i, !0);
        return this;
      }, addEventParent: function(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[z(t)] = t, this;
      }, removeEventParent: function(t) {
        return this._eventParents && delete this._eventParents[z(t)], this;
      }, _propagateEvent: function(t) {
        for (var e in this._eventParents) this._eventParents[e].fire(t.type, b({ layer: t.target, propagatedFrom: t.target }, t), !0);
      } }, jt = (Y.addEventListener = Y.on, Y.removeEventListener = Y.clearAllEventListeners = Y.off, Y.addOneTimeEventListener = Y.once, Y.fireEvent = Y.fire, Y.hasEventListeners = Y.listens, _t.extend(Y));
      function f(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
      }
      var De = Math.trunc || function(t) {
        return 0 < t ? Math.floor(t) : Math.ceil(t);
      };
      function p(t, e, i) {
        return t instanceof f ? t : J(t) ? new f(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new f(t.x, t.y) : new f(t, e, i);
      }
      function R(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
      }
      function V(t, e) {
        return !t || t instanceof R ? t : new R(t, e);
      }
      function P(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
      }
      function N(t, e) {
        return t instanceof P ? t : new P(t, e);
      }
      function S(t, e, i) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
      }
      function T(t, e, i) {
        return t instanceof S ? t : J(t) && typeof t[0] != "object" ? t.length === 3 ? new S(t[0], t[1], t[2]) : t.length === 2 ? new S(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new S(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new S(t, e, i);
      }
      f.prototype = { clone: function() {
        return new f(this.x, this.y);
      }, add: function(t) {
        return this.clone()._add(p(t));
      }, _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      }, subtract: function(t) {
        return this.clone()._subtract(p(t));
      }, _subtract: function(t) {
        return this.x -= t.x, this.y -= t.y, this;
      }, divideBy: function(t) {
        return this.clone()._divideBy(t);
      }, _divideBy: function(t) {
        return this.x /= t, this.y /= t, this;
      }, multiplyBy: function(t) {
        return this.clone()._multiplyBy(t);
      }, _multiplyBy: function(t) {
        return this.x *= t, this.y *= t, this;
      }, scaleBy: function(t) {
        return new f(this.x * t.x, this.y * t.y);
      }, unscaleBy: function(t) {
        return new f(this.x / t.x, this.y / t.y);
      }, round: function() {
        return this.clone()._round();
      }, _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      }, floor: function() {
        return this.clone()._floor();
      }, _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      }, ceil: function() {
        return this.clone()._ceil();
      }, _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      }, trunc: function() {
        return this.clone()._trunc();
      }, _trunc: function() {
        return this.x = De(this.x), this.y = De(this.y), this;
      }, distanceTo: function(i) {
        var e = (i = p(i)).x - this.x, i = i.y - this.y;
        return Math.sqrt(e * e + i * i);
      }, equals: function(t) {
        return (t = p(t)).x === this.x && t.y === this.y;
      }, contains: function(t) {
        return t = p(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      }, toString: function() {
        return "Point(" + ot(this.x) + ", " + ot(this.y) + ")";
      } }, R.prototype = { extend: function(t) {
        var e, i;
        if (t) {
          if (t instanceof f || typeof t[0] == "number" || "x" in t) e = i = p(t);
          else if (e = (t = V(t)).min, i = t.max, !e || !i) return this;
          this.min || this.max ? (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)) : (this.min = e.clone(), this.max = i.clone());
        }
        return this;
      }, getCenter: function(t) {
        return p((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
      }, getBottomLeft: function() {
        return p(this.min.x, this.max.y);
      }, getTopRight: function() {
        return p(this.max.x, this.min.y);
      }, getTopLeft: function() {
        return this.min;
      }, getBottomRight: function() {
        return this.max;
      }, getSize: function() {
        return this.max.subtract(this.min);
      }, contains: function(t) {
        var e, i;
        return (t = (typeof t[0] == "number" || t instanceof f ? p : V)(t)) instanceof R ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
      }, intersects: function(s) {
        s = V(s);
        var e = this.min, i = this.max, n = s.min, s = s.max, o = s.x >= e.x && n.x <= i.x, s = s.y >= e.y && n.y <= i.y;
        return o && s;
      }, overlaps: function(s) {
        s = V(s);
        var e = this.min, i = this.max, n = s.min, s = s.max, o = s.x > e.x && n.x < i.x, s = s.y > e.y && n.y < i.y;
        return o && s;
      }, isValid: function() {
        return !(!this.min || !this.max);
      }, pad: function(o) {
        var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * o, o = Math.abs(e.y - i.y) * o;
        return V(p(e.x - n, e.y - o), p(i.x + n, i.y + o));
      }, equals: function(t) {
        return !!t && (t = V(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()));
      } }, P.prototype = { extend: function(t) {
        var e, i, n = this._southWest, o = this._northEast;
        if (t instanceof S) i = e = t;
        else {
          if (!(t instanceof P)) return t ? this.extend(T(t) || N(t)) : this;
          if (e = t._southWest, i = t._northEast, !e || !i) return this;
        }
        return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new S(e.lat, e.lng), this._northEast = new S(i.lat, i.lng)), this;
      }, pad: function(o) {
        var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * o, o = Math.abs(e.lng - i.lng) * o;
        return new P(new S(e.lat - n, e.lng - o), new S(i.lat + n, i.lng + o));
      }, getCenter: function() {
        return new S((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      }, getSouthWest: function() {
        return this._southWest;
      }, getNorthEast: function() {
        return this._northEast;
      }, getNorthWest: function() {
        return new S(this.getNorth(), this.getWest());
      }, getSouthEast: function() {
        return new S(this.getSouth(), this.getEast());
      }, getWest: function() {
        return this._southWest.lng;
      }, getSouth: function() {
        return this._southWest.lat;
      }, getEast: function() {
        return this._northEast.lng;
      }, getNorth: function() {
        return this._northEast.lat;
      }, contains: function(t) {
        t = (typeof t[0] == "number" || t instanceof S || "lat" in t ? T : N)(t);
        var e, i, n = this._southWest, o = this._northEast;
        return t instanceof P ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng;
      }, intersects: function(s) {
        s = N(s);
        var e = this._southWest, i = this._northEast, n = s.getSouthWest(), s = s.getNorthEast(), o = s.lat >= e.lat && n.lat <= i.lat, s = s.lng >= e.lng && n.lng <= i.lng;
        return o && s;
      }, overlaps: function(s) {
        s = N(s);
        var e = this._southWest, i = this._northEast, n = s.getSouthWest(), s = s.getNorthEast(), o = s.lat > e.lat && n.lat < i.lat, s = s.lng > e.lng && n.lng < i.lng;
        return o && s;
      }, toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      }, equals: function(t, e) {
        return !!t && (t = N(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e));
      }, isValid: function() {
        return !(!this._southWest || !this._northEast);
      } };
      var X = { latLngToPoint: function(t, e) {
        return t = this.projection.project(t), e = this.scale(e), this.transformation._transform(t, e);
      }, pointToLatLng: function(t, e) {
        return e = this.scale(e), t = this.transformation.untransform(t, e), this.projection.unproject(t);
      }, project: function(t) {
        return this.projection.project(t);
      }, unproject: function(t) {
        return this.projection.unproject(t);
      }, scale: function(t) {
        return 256 * Math.pow(2, t);
      }, zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      }, getProjectedBounds: function(t) {
        var e;
        return this.infinite ? null : (e = this.projection.bounds, t = this.scale(t), new R(this.transformation.transform(e.min, t), this.transformation.transform(e.max, t)));
      }, infinite: !(S.prototype = { equals: function(t, e) {
        return !!t && (t = T(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (e === void 0 ? 1e-9 : e));
      }, toString: function(t) {
        return "LatLng(" + ot(this.lat, t) + ", " + ot(this.lng, t) + ")";
      }, distanceTo: function(t) {
        return gt.distance(this, T(t));
      }, wrap: function() {
        return gt.wrapLatLng(this);
      }, toBounds: function(e) {
        var e = 180 * e / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
        return N([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
      }, clone: function() {
        return new S(this.lat, this.lng, this.alt);
      } }), wrapLatLng: function(t) {
        var e = this.wrapLng ? Et(t.lng, this.wrapLng, !0) : t.lng;
        return new S(this.wrapLat ? Et(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
      }, wrapLatLngBounds: function(t) {
        var n = t.getCenter(), e = this.wrapLatLng(n), i = n.lat - e.lat, n = n.lng - e.lng;
        return i == 0 && n == 0 ? t : (e = t.getSouthWest(), t = t.getNorthEast(), new P(new S(e.lat - i, e.lng - n), new S(t.lat - i, t.lng - n)));
      } }, gt = b({}, X, { wrapLng: [-180, 180], R: 6371e3, distance: function(a, s) {
        var r = Math.PI / 180, i = a.lat * r, n = s.lat * r, o = Math.sin((s.lat - a.lat) * r / 2), s = Math.sin((s.lng - a.lng) * r / 2), a = o * o + Math.cos(i) * Math.cos(n) * s * s, r = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.R * r;
      } }), at = 6378137, at = { R: at, MAX_LATITUDE: 85.0511287798, project: function(t) {
        var e = Math.PI / 180, i = this.MAX_LATITUDE, i = Math.max(Math.min(i, t.lat), -i), i = Math.sin(i * e);
        return new f(this.R * t.lng * e, this.R * Math.log((1 + i) / (1 - i)) / 2);
      }, unproject: function(t) {
        var e = 180 / Math.PI;
        return new S((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R);
      }, bounds: new R([-(at = at * Math.PI), -at], [at, at]) };
      function te(t, e, i, n) {
        J(t) ? (this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3]) : (this._a = t, this._b = e, this._c = i, this._d = n);
      }
      function bt(t, e, i, n) {
        return new te(t, e, i, n);
      }
      te.prototype = { transform: function(t, e) {
        return this._transform(t.clone(), e);
      }, _transform: function(t, e) {
        return t.x = (e = e || 1) * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
      }, untransform: function(t, e) {
        return new f((t.x / (e = e || 1) - this._b) / this._a, (t.y / e - this._d) / this._c);
      } };
      var Lt = b({}, gt, { code: "EPSG:3857", projection: at, transformation: bt(Lt = 0.5 / (Math.PI * at.R), 0.5, -Lt, 0.5) }), Fe = b({}, Lt, { code: "EPSG:900913" });
      function ge(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function je(t, e) {
        for (var i, n, o, s, a = "", r = 0, h = t.length; r < h; r++) {
          for (i = 0, n = (o = t[r]).length; i < n; i++) a += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
          a += e ? _.svg ? "z" : "x" : "";
        }
        return a || "M0 0";
      }
      var St = document.documentElement.style, At = "ActiveXObject" in window, Fi = At && !document.addEventListener, lt = "msLaunchUri" in navigator && !("documentMode" in document), Pe = $("webkit"), ti = $("android"), ii = $("android 2") || $("android 3"), Yt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Yt = ti && $("Google") && Yt < 537 && !("AudioNode" in window), Xt = !!window.opera, ni = !lt && $("chrome"), ee = $("gecko") && !Pe && !Xt && !At, Ui = !ni && $("safari"), oi = $("phantom"), st = "OTransition" in St, Pt = navigator.platform.indexOf("Win") === 0, ci = At && "transition" in St, Se = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !ii, St = "MozPerspective" in St, fi = !window.L_DISABLE_3D && (ci || Se || St) && !st && !oi, Nt = typeof orientation < "u" || $("mobile"), gi = Nt && Pe, vi = Nt && Se, Ee = !window.PointerEvent && window.MSPointerEvent, Ze = !(!window.PointerEvent && !Ee), He = "ontouchstart" in window || !!window.TouchEvent, xi = !window.L_NO_TOUCH && (He || Ze), wi = Nt && Xt, bi = Nt && ee, Li = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), We = (function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", { get: function() {
            t = !0;
          } });
          window.addEventListener("testPassiveEventSupport", O, e), window.removeEventListener("testPassiveEventSupport", O, e);
        } catch {
        }
        return t;
      })(), Pi = !!document.createElement("canvas").getContext, ve = !(!document.createElementNS || !ge("svg").createSVGRect), Bt = !!ve && ((Bt = document.createElement("div")).innerHTML = "<svg/>", (Bt.firstChild && Bt.firstChild.namespaceURI) === "http://www.w3.org/2000/svg");
      function $(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
      }
      var _ = { ie: At, ielt9: Fi, edge: lt, webkit: Pe, android: ti, android23: ii, androidStock: Yt, opera: Xt, chrome: ni, gecko: ee, safari: Ui, phantom: oi, opera12: st, win: Pt, ie3d: ci, webkit3d: Se, gecko3d: St, any3d: fi, mobile: Nt, mobileWebkit: gi, mobileWebkit3d: vi, msPointer: Ee, pointer: Ze, touch: xi, touchNative: He, mobileOpera: wi, mobileGecko: bi, retina: Li, passiveEvents: We, canvas: Pi, svg: ve, vml: !ve && (function() {
        try {
          var t = document.createElement("div"), e = (t.innerHTML = '<v:shape adj="1"/>', t.firstChild);
          return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
        } catch {
          return !1;
        }
      })(), inlineSvg: Bt, mac: navigator.platform.indexOf("Mac") === 0, linux: navigator.platform.indexOf("Linux") === 0 }, Ue = _.msPointer ? "MSPointerDown" : "pointerdown", ie = _.msPointer ? "MSPointerMove" : "pointermove", qe = _.msPointer ? "MSPointerUp" : "pointerup", Ve = _.msPointer ? "MSPointerCancel" : "pointercancel", c = { touchstart: Ue, touchmove: ie, touchend: qe, touchcancel: Ve }, g = { touchstart: function(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && K(e), Wt(t, e);
      }, touchmove: Wt, touchend: Wt, touchcancel: Wt }, B = {}, ht = !1;
      function Ht(t, e, i) {
        return e !== "touchstart" || ht || (document.addEventListener(Ue, ne, !0), document.addEventListener(ie, pt, !0), document.addEventListener(qe, Ge, !0), document.addEventListener(Ve, Ge, !0), ht = !0), g[e] ? (i = g[e].bind(this, i), t.addEventListener(c[e], i, !1), i) : (console.warn("wrong event specified:", e), O);
      }
      function ne(t) {
        B[t.pointerId] = t;
      }
      function pt(t) {
        B[t.pointerId] && (B[t.pointerId] = t);
      }
      function Ge(t) {
        delete B[t.pointerId];
      }
      function Wt(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
          for (var i in e.touches = [], B) e.touches.push(B[i]);
          e.changedTouches = [e], t(e);
        }
      }
      var Ti = 200;
      function qn(t, e) {
        t.addEventListener("dblclick", e);
        var i, n = 0;
        function o(s) {
          var a;
          s.detail !== 1 ? i = s.detail : s.pointerType === "mouse" || s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents || (a = nn(s)).some(function(r) {
            return r instanceof HTMLLabelElement && r.attributes.for;
          }) && !a.some(function(r) {
            return r instanceof HTMLInputElement || r instanceof HTMLSelectElement;
          }) || ((a = Date.now()) - n <= Ti ? ++i === 2 && e((function(r) {
            var h, u, d = {};
            for (u in r) h = r[u], d[u] = h && h.bind ? h.bind(r) : h;
            return (r = d).type = "dblclick", d.detail = 2, d.isTrusted = !1, d._simulated = !0, d;
          })(s)) : i = 1, n = a);
        }
        return t.addEventListener("click", o), { dblclick: e, simDblclick: o };
      }
      var Mi, oe, ye, Ke, Ye, zi, Ci = Qe(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), xe = Qe(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), Qi = xe === "webkitTransition" || xe === "OTransition" ? xe + "End" : "transitionend";
      function $i(t) {
        return typeof t == "string" ? document.getElementById(t) : t;
      }
      function we(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        return (i = i && i !== "auto" || !document.defaultView ? i : (t = document.defaultView.getComputedStyle(t, null)) ? t[e] : null) === "auto" ? null : i;
      }
      function E(t, e, i) {
        return t = document.createElement(t), t.className = e || "", i && i.appendChild(t), t;
      }
      function j(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function Xe(t) {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
      }
      function se(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }
      function re(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }
      function Si(t, e) {
        return t.classList !== void 0 ? t.classList.contains(e) : 0 < (t = Je(t)).length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t);
      }
      function w(t, e) {
        var i;
        if (t.classList !== void 0) for (var n = dt(e), o = 0, s = n.length; o < s; o++) t.classList.add(n[o]);
        else Si(t, e) || ki(t, ((i = Je(t)) ? i + " " : "") + e);
      }
      function W(t, e) {
        t.classList !== void 0 ? t.classList.remove(e) : ki(t, Zt((" " + Je(t) + " ").replace(" " + e + " ", " ")));
      }
      function ki(t, e) {
        t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
      }
      function Je(t) {
        return (t = t.correspondingElement ? t.correspondingElement : t).className.baseVal === void 0 ? t.className : t.className.baseVal;
      }
      function mt(t, e) {
        if ("opacity" in t.style) t.style.opacity = e;
        else if ("filter" in t.style) {
          var i = !1, n = "DXImageTransform.Microsoft.Alpha";
          try {
            i = t.filters.item(n);
          } catch {
            if (e === 1) return;
          }
          e = Math.round(100 * e), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
        }
      }
      function Qe(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
        return !1;
      }
      function Ut(t, e, i) {
        e = e || new f(0, 0), t.style[Ci] = (_.ie3d ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") + (i ? " scale(" + i + ")" : "");
      }
      function q(t, e) {
        t._leaflet_pos = e, _.any3d ? Ut(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      }
      function qt(t) {
        return t._leaflet_pos || new f(0, 0);
      }
      function Ei() {
        v(window, "dragstart", K);
      }
      function Zi() {
        I(window, "dragstart", K);
      }
      function Oi(t) {
        for (; t.tabIndex === -1; ) t = t.parentNode;
        t.style && ($e(), zi = (Ye = t).style.outlineStyle, t.style.outlineStyle = "none", v(window, "keydown", $e));
      }
      function $e() {
        Ye && (Ye.style.outlineStyle = zi, zi = Ye = void 0, I(window, "keydown", $e));
      }
      function tn(t) {
        for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body); ) ;
        return t;
      }
      function Ai(t) {
        var e = t.getBoundingClientRect();
        return { x: e.width / t.offsetWidth || 1, y: e.height / t.offsetHeight || 1, boundingClientRect: e };
      }
      Ke = "onselectstart" in document ? (ye = function() {
        v(window, "selectstart", K);
      }, function() {
        I(window, "selectstart", K);
      }) : (oe = Qe(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), ye = function() {
        var t;
        oe && (t = document.documentElement.style, Mi = t[oe], t[oe] = "none");
      }, function() {
        oe && (document.documentElement.style[oe] = Mi, Mi = void 0);
      }), At = { __proto__: null, TRANSFORM: Ci, TRANSITION: xe, TRANSITION_END: Qi, get: $i, getStyle: we, create: E, remove: j, empty: Xe, toFront: se, toBack: re, hasClass: Si, addClass: w, removeClass: W, setClass: ki, getClass: Je, setOpacity: mt, testProp: Qe, setTransform: Ut, setPosition: q, getPosition: qt, get disableTextSelection() {
        return ye;
      }, get enableTextSelection() {
        return Ke;
      }, disableImageDrag: Ei, enableImageDrag: Zi, preventOutline: Oi, restoreOutline: $e, getSizedParentNode: tn, getScale: Ai };
      function v(t, e, i, n) {
        if (e && typeof e == "object") for (var o in e) Ii(t, o, e[o], i);
        else for (var s = 0, a = (e = dt(e)).length; s < a; s++) Ii(t, e[s], i, n);
        return this;
      }
      var yt = "_leaflet_events";
      function I(t, e, i, n) {
        if (arguments.length === 1) en(t), delete t[yt];
        else if (e && typeof e == "object") for (var o in e) Ri(t, o, e[o], i);
        else if (e = dt(e), arguments.length === 2) en(t, function(r) {
          return Ft(e, r) !== -1;
        });
        else for (var s = 0, a = e.length; s < a; s++) Ri(t, e[s], i, n);
        return this;
      }
      function en(t, e) {
        for (var i in t[yt]) {
          var n = i.split(/\d/)[0];
          e && !e(n) || Ri(t, n, null, null, i);
        }
      }
      var Bi = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
      function Ii(t, e, i, n) {
        var o, s, a = e + z(i) + (n ? "_" + z(n) : "");
        t[yt] && t[yt][a] || (s = o = function(r) {
          return i.call(n || t, r || window.event);
        }, !_.touchNative && _.pointer && e.indexOf("touch") === 0 ? o = Ht(t, e, o) : _.touch && e === "dblclick" ? o = qn(t, o) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(Bi[e] || e, o, !!_.passiveEvents && { passive: !1 }) : e === "mouseenter" || e === "mouseleave" ? t.addEventListener(Bi[e], o = function(r) {
          r = r || window.event, Di(t, r) && s(r);
        }, !1) : t.addEventListener(e, s, !1) : t.attachEvent("on" + e, o), t[yt] = t[yt] || {}, t[yt][a] = o);
      }
      function Ri(t, e, r, n, o) {
        o = o || e + z(r) + (n ? "_" + z(n) : "");
        var s, a, r = t[yt] && t[yt][o];
        r && (!_.touchNative && _.pointer && e.indexOf("touch") === 0 ? (n = t, a = r, c[s = e] ? n.removeEventListener(c[s], a, !1) : console.warn("wrong event specified:", s)) : _.touch && e === "dblclick" ? (n = r, (a = t).removeEventListener("dblclick", n.dblclick), a.removeEventListener("click", n.simDblclick)) : "removeEventListener" in t ? t.removeEventListener(Bi[e] || e, r, !1) : t.detachEvent("on" + e, r), t[yt][o] = null);
      }
      function Vt(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
      }
      function Ni(t) {
        return Ii(t, "wheel", Vt), this;
      }
      function be(t) {
        return v(t, "mousedown touchstart dblclick contextmenu", Vt), t._leaflet_disable_click = !0, this;
      }
      function K(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      }
      function Gt(t) {
        return K(t), Vt(t), this;
      }
      function nn(t) {
        if (t.composedPath) return t.composedPath();
        for (var e = [], i = t.target; i; ) e.push(i), i = i.parentNode;
        return e;
      }
      function on(t, e) {
        var i, n;
        return e ? (n = (i = Ai(e)).boundingClientRect, new f((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)) : new f(t.clientX, t.clientY);
      }
      var Vn = _.linux && _.chrome ? window.devicePixelRatio : _.mac ? 3 * window.devicePixelRatio : 0 < window.devicePixelRatio ? 2 * window.devicePixelRatio : 1;
      function sn(t) {
        return _.edge ? t.wheelDeltaY / 2 : t.deltaY && t.deltaMode === 0 ? -t.deltaY / Vn : t.deltaY && t.deltaMode === 1 ? 20 * -t.deltaY : t.deltaY && t.deltaMode === 2 ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
      }
      function Di(t, e) {
        var i = e.relatedTarget;
        if (!i) return !0;
        try {
          for (; i && i !== t; ) i = i.parentNode;
        } catch {
          return !1;
        }
        return i !== t;
      }
      var Fi = { __proto__: null, on: v, off: I, stopPropagation: Vt, disableScrollPropagation: Ni, disableClickPropagation: be, preventDefault: K, stop: Gt, getPropagationPath: nn, getMousePosition: on, getWheelDelta: sn, isExternalTarget: Di, addListener: v, removeListener: I }, rn = jt.extend({ run: function(t, e, i, n) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = qt(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      }, stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      }, _animate: function() {
        this._animId = G(this._animate, this), this._step();
      }, _step: function(t) {
        var e = +/* @__PURE__ */ new Date() - this._startTime, i = 1e3 * this._duration;
        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
      }, _runFrame: function(t, e) {
        t = this._startPos.add(this._offset.multiplyBy(t)), e && t._round(), q(this._el, t), this.fire("step");
      }, _complete: function() {
        Q(this._animId), this._inProgress = !1, this.fire("end");
      }, _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      } }), k = jt.extend({ options: { crs: Lt, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: !0, zoomAnimationThreshold: 4, fadeAnimation: !0, markerZoomAnimation: !0, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: !0 }, initialize: function(t, e) {
        e = A(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = Z(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(T(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = xe && _.any3d && !_.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), v(this._proxy, Qi, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      }, setView: function(t, e, i) {
        return e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(T(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0 && (i.animate !== void 0 && (i.zoom = b({ animate: i.animate }, i.zoom), i.pan = b({ animate: i.animate, duration: i.duration }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e, i.pan && i.pan.noMoveStart), this);
      }, setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      }, zoomIn: function(t, e) {
        return t = t || (_.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      }, zoomOut: function(t, e) {
        return t = t || (_.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      }, setZoomAround: function(o, e, i) {
        var s = this.getZoomScale(e), n = this.getSize().divideBy(2), o = (o instanceof f ? o : this.latLngToContainerPoint(o)).subtract(n).multiplyBy(1 - 1 / s), s = this.containerPointToLatLng(n.add(o));
        return this.setView(s, e, { zoom: i });
      }, _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : N(t);
        var i = p(e.paddingTopLeft || e.padding || [0, 0]), n = p(e.paddingBottomRight || e.padding || [0, 0]), o = this.getBoundsZoom(t, !1, i.add(n));
        return (o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o) === 1 / 0 ? { center: t.getCenter(), zoom: o } : (e = n.subtract(i).divideBy(2), n = this.project(t.getSouthWest(), o), i = this.project(t.getNorthEast(), o), { center: this.unproject(n.add(i).divideBy(2).add(e), o), zoom: o });
      }, fitBounds: function(t, e) {
        if ((t = N(t)).isValid()) return t = this._getBoundsCenterZoom(t, e), this.setView(t.center, t.zoom, e);
        throw new Error("Bounds are not valid.");
      }, fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      }, panTo: function(t, e) {
        return this.setView(t, this._zoom, { pan: e });
      }, panBy: function(t, e) {
        var i;
        return e = e || {}, (t = p(t).round()).x || t.y ? (e.animate === !0 || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new rn(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1 ? (w(this._mapPane, "leaflet-pan-anim"), i = this._getMapPanePos().subtract(t).round(), this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity)) : (this._rawPanBy(t), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this) : this.fire("moveend");
      }, flyTo: function(t, e, i) {
        if ((i = i || {}).animate === !1 || !_.any3d) return this.setView(t, e, i);
        this._stop();
        var n = this.project(this.getCenter()), o = this.project(t), s = this.getSize(), a = this._zoom, r = (t = T(t), e = e === void 0 ? a : e, Math.max(s.x, s.y)), h = r * this.getZoomScale(a, e), u = o.distanceTo(n) || 1, d = 1.42, y = d * d;
        function x(U) {
          return U = (h * h - r * r + (U ? -1 : 1) * y * y * u * u) / (2 * (U ? h : r) * y * u), U = Math.sqrt(U * U + 1) - U, U < 1e-9 ? -18 : Math.log(U);
        }
        function F(U) {
          return (Math.exp(U) - Math.exp(-U)) / 2;
        }
        function ut(U) {
          return (Math.exp(U) + Math.exp(-U)) / 2;
        }
        var tt = x(0);
        function ct(U) {
          return r * (ut(tt) * (F(U = tt + d * U) / ut(U)) - F(tt)) / y;
        }
        var Kn = Date.now(), En = (x(1) - tt) / d, Yn = i.duration ? 1e3 * i.duration : 1e3 * En * 0.8;
        return this._moveStart(!0, i.noMoveStart), (function U() {
          var yi = (Date.now() - Kn) / Yn, Zn = (1 - Math.pow(1 - yi, 1.5)) * En;
          yi <= 1 ? (this._flyToFrame = G(U, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(ct(Zn) / u)), a), this.getScaleZoom(r / (yi = Zn, r * (ut(tt) / ut(tt + d * yi))), a), { flyTo: !0 })) : this._move(t, e)._moveEnd(!0);
        }).call(this), this;
      }, flyToBounds: function(t, e) {
        return t = this._getBoundsCenterZoom(t, e), this.flyTo(t.center, t.zoom, e);
      }, setMaxBounds: function(t) {
        return t = N(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      }, setMinZoom: function(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      }, setMaxZoom: function(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      }, panInsideBounds: function(n, e) {
        this._enforcingBounds = !0;
        var i = this.getCenter(), n = this._limitCenter(i, this._zoom, N(n));
        return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
      }, panInside: function(o, e) {
        var s = p((e = e || {}).paddingTopLeft || e.padding || [0, 0]), i = p(e.paddingBottomRight || e.padding || [0, 0]), n = this.project(this.getCenter()), o = this.project(o), a = this.getPixelBounds(), s = V([a.min.add(s), a.max.subtract(i)]), a = s.getSize();
        return s.contains(o) || (this._enforcingBounds = !0, i = o.subtract(s.getCenter()), s = s.extend(o).getSize().subtract(a), n.x += i.x < 0 ? -s.x : s.x, n.y += i.y < 0 ? -s.y : s.y, this.panTo(this.unproject(n), e), this._enforcingBounds = !1), this;
      }, invalidateSize: function(t) {
        if (!this._loaded) return this;
        t = b({ animate: !1, pan: !0 }, t === !0 ? { animate: !0 } : t);
        var e = this.getSize(), i = (this._sizeChanged = !0, this._lastCenter = null, this.getSize()), o = e.divideBy(2).round(), n = i.divideBy(2).round(), o = o.subtract(n);
        return o.x || o.y ? (t.animate && t.pan ? this.panBy(o) : (t.pan && this._rawPanBy(o), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(Z(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: e, newSize: i })) : this;
      }, stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      }, locate: function(t) {
        var e, i;
        return t = this._locateOptions = b({ timeout: 1e4, watch: !1 }, t), "geolocation" in navigator ? (e = Z(this._handleGeolocationResponse, this), i = Z(this._handleGeolocationError, this), t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t)) : this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
      }, stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      }, _handleGeolocationError: function(t) {
        var e;
        this._container._leaflet_id && (e = t.code, t = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout"), this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: e, message: "Geolocation error: " + t + "." }));
      }, _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var e, i, n = new S(t.coords.latitude, t.coords.longitude), o = n.toBounds(2 * t.coords.accuracy), s = this._locateOptions, a = (s.setView && (e = this.getBoundsZoom(o), this.setView(n, s.maxZoom ? Math.min(e, s.maxZoom) : e)), { latlng: n, bounds: o, timestamp: t.timestamp });
          for (i in t.coords) typeof t.coords[i] == "number" && (a[i] = t.coords[i]);
          this.fire("locationfound", a);
        }
      }, addHandler: function(t, e) {
        return e && (e = this[t] = new e(this), this._handlers.push(e), this.options[t] && e.enable()), this;
      }, remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        for (var t in this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), j(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (Q(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
        for (t in this._panes) j(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      }, createPane: function(t, e) {
        return e = E("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane), t && (this._panes[t] = e), e;
      }, getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      }, getZoom: function() {
        return this._zoom;
      }, getBounds: function() {
        var t = this.getPixelBounds();
        return new P(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
      }, getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      }, getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      }, getBoundsZoom: function(h, e, r) {
        h = N(h), r = p(r || [0, 0]);
        var u = this.getZoom() || 0, n = this.getMinZoom(), o = this.getMaxZoom(), s = h.getNorthWest(), h = h.getSouthEast(), r = this.getSize().subtract(r), h = V(this.project(h, u), this.project(s, u)).getSize(), s = _.any3d ? this.options.zoomSnap : 1, a = r.x / h.x, r = r.y / h.y, h = e ? Math.max(a, r) : Math.min(a, r), u = this.getScaleZoom(h, u);
        return s && (u = Math.round(u / (s / 100)) * (s / 100), u = e ? Math.ceil(u / s) * s : Math.floor(u / s) * s), Math.max(n, Math.min(o, u));
      }, getSize: function() {
        return this._size && !this._sizeChanged || (this._size = new f(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
      }, getPixelBounds: function(t, e) {
        return t = this._getTopLeftPoint(t, e), new R(t, t.add(this.getSize()));
      }, getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      }, getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
      }, getPane: function(t) {
        return typeof t == "string" ? this._panes[t] : t;
      }, getPanes: function() {
        return this._panes;
      }, getContainer: function() {
        return this._container;
      }, getZoomScale: function(t, e) {
        var i = this.options.crs;
        return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
      }, getScaleZoom: function(n, e) {
        var i = this.options.crs, n = (e = e === void 0 ? this._zoom : e, i.zoom(n * i.scale(e)));
        return isNaN(n) ? 1 / 0 : n;
      }, project: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(T(t), e);
      }, unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(p(t), e);
      }, layerPointToLatLng: function(t) {
        return t = p(t).add(this.getPixelOrigin()), this.unproject(t);
      }, latLngToLayerPoint: function(t) {
        return this.project(T(t))._round()._subtract(this.getPixelOrigin());
      }, wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(T(t));
      }, wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(N(t));
      }, distance: function(t, e) {
        return this.options.crs.distance(T(t), T(e));
      }, containerPointToLayerPoint: function(t) {
        return p(t).subtract(this._getMapPanePos());
      }, layerPointToContainerPoint: function(t) {
        return p(t).add(this._getMapPanePos());
      }, containerPointToLatLng: function(t) {
        return t = this.containerPointToLayerPoint(p(t)), this.layerPointToLatLng(t);
      }, latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(T(t)));
      }, mouseEventToContainerPoint: function(t) {
        return on(t, this._container);
      }, mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      }, mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      }, _initContainer: function(t) {
        if (t = this._container = $i(t), !t) throw new Error("Map container not found.");
        if (t._leaflet_id) throw new Error("Map container is already initialized.");
        v(t, "scroll", this._onScroll, this), this._containerId = z(t);
      }, _initLayout: function() {
        var t = this._container, e = (this._fadeAnimated = this.options.fadeAnimation && _.any3d, w(t, "leaflet-container" + (_.touch ? " leaflet-touch" : "") + (_.retina ? " leaflet-retina" : "") + (_.ielt9 ? " leaflet-oldie" : "") + (_.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")), we(t, "position"));
        e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      }, _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), q(this._mapPane, new f(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (w(t.markerPane, "leaflet-zoom-hide"), w(t.shadowPane, "leaflet-zoom-hide"));
      }, _resetView: function(t, e, i) {
        q(this._mapPane, new f(0, 0));
        var n = !this._loaded, o = (this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset"), this._zoom !== e);
        this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
      }, _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      }, _move: function(t, e, i, n) {
        e === void 0 && (e = this._zoom);
        var o = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
      }, _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      }, _stop: function() {
        return Q(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      }, _rawPanBy: function(t) {
        q(this._mapPane, this._getMapPanePos().subtract(t));
      }, _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      }, _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      }, _checkIfLoaded: function() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      }, _initEvents: function(t) {
        this._targets = {};
        var e = t ? I : v;
        e((this._targets[z(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), _.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      }, _onResize: function() {
        Q(this._resizeRequest), this._resizeRequest = G(function() {
          this.invalidateSize({ debounceMoveend: !0 });
        }, this);
      }, _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      }, _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      }, _findEventTargets: function(t, e) {
        for (var i, n = [], o = e === "mouseout" || e === "mouseover", s = t.target || t.srcElement, a = !1; s; ) {
          if ((i = this._targets[z(s)]) && (e === "click" || e === "preclick") && this._draggableMoved(i)) {
            a = !0;
            break;
          }
          if (i && i.listens(e, !0) && (o && !Di(s, t) || (n.push(i), o)) || s === this._container) break;
          s = s.parentNode;
        }
        return n = n.length || a || o || !this.listens(e, !0) ? n : [this];
      }, _isClickDisabled: function(t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click) return !0;
          t = t.parentNode;
        }
      }, _handleDOMEvent: function(t) {
        var e, i = t.target || t.srcElement;
        !this._loaded || i._leaflet_disable_events || t.type === "click" && this._isClickDisabled(i) || ((e = t.type) === "mousedown" && Oi(i), this._fireDOMEvent(t, e));
      }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(t, e, i) {
        t.type === "click" && ((r = b({}, t)).type = "preclick", this._fireDOMEvent(r, r.type, i));
        var n = this._findEventTargets(t, e);
        if (i) {
          for (var o = [], s = 0; s < i.length; s++) i[s].listens(e, !0) && o.push(i[s]);
          n = o.concat(n);
        }
        if (n.length) {
          e === "contextmenu" && K(t);
          var a, r = n[0], h = { originalEvent: t };
          for (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup" && (a = r.getLatLng && (!r._radius || r._radius <= 10), h.containerPoint = a ? this.latLngToContainerPoint(r.getLatLng()) : this.mouseEventToContainerPoint(t), h.layerPoint = this.containerPointToLayerPoint(h.containerPoint), h.latlng = a ? r.getLatLng() : this.layerPointToLatLng(h.layerPoint)), s = 0; s < n.length; s++) if (n[s].fire(e, h, !0), h.originalEvent._stopped || n[s].options.bubblingMouseEvents === !1 && Ft(this._mouseEvents, e) !== -1) return;
        }
      }, _draggableMoved: function(t) {
        return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      }, _clearHandlers: function() {
        for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
      }, whenReady: function(t, e) {
        return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
      }, _getMapPanePos: function() {
        return qt(this._mapPane) || new f(0, 0);
      }, _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      }, _getTopLeftPoint: function(t, e) {
        return (t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos());
      }, _getNewPixelOrigin: function(t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
      }, _latLngToNewLayerPoint: function(t, e, i) {
        return i = this._getNewPixelOrigin(i, e), this.project(t, e)._subtract(i);
      }, _latLngBoundsToNewLayerBounds: function(t, e, i) {
        return i = this._getNewPixelOrigin(i, e), V([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)]);
      }, _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      }, _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      }, _limitCenter: function(t, e, i) {
        var n, o;
        return !i || (n = this.project(t, e), o = this.getSize().divideBy(2), o = new R(n.subtract(o), n.add(o)), o = this._getBoundsOffset(o, i, e), Math.abs(o.x) <= 1 && Math.abs(o.y) <= 1) ? t : this.unproject(n.add(o), e);
      }, _limitOffset: function(t, e) {
        var i;
        return e ? (i = new R((i = this.getPixelBounds()).min.add(t), i.max.add(t)), t.add(this._getBoundsOffset(i, e))) : t;
      }, _getBoundsOffset: function(t, e, i) {
        return e = V(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)), i = e.min.subtract(t.min), e = e.max.subtract(t.max), new f(this._rebound(i.x, -e.x), this._rebound(i.y, -e.y));
      }, _rebound: function(t, e) {
        return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      }, _limitZoom: function(t) {
        var e = this.getMinZoom(), i = this.getMaxZoom(), n = _.any3d ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
      }, _onPanTransitionStep: function() {
        this.fire("move");
      }, _onPanTransitionEnd: function() {
        W(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      }, _tryAnimatedPan: function(t, e) {
        return t = this._getCenterOffset(t)._trunc(), !((e && e.animate) !== !0 && !this.getSize().contains(t)) && (this.panBy(t, e), !0);
      }, _createAnimProxy: function() {
        var t = this._proxy = E("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var i = Ci, n = this._proxy.style[i];
          Ut(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      }, _destroyAnimProxy: function() {
        j(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      }, _animMoveEnd: function() {
        var t = this.getCenter(), e = this.getZoom();
        Ut(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      }, _catchTransitionEnd: function(t) {
        this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
      }, _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      }, _tryAnimatedZoom: function(t, e, i) {
        if (!this._animatingZoom) {
          if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
          var n = this.getZoomScale(e), n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          if (i.animate !== !0 && !this.getSize().contains(n)) return !1;
          G(function() {
            this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
          }, this);
        }
        return !0;
      }, _animateZoom: function(t, e, i, n) {
        this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, w(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: t, zoom: e, noUpdate: n }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(Z(this._onZoomTransitionEnd, this), 250));
      }, _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && W(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      } });
      function Le(t) {
        return new vt(t);
      }
      var vt = _t.extend({ options: { position: "topright" }, initialize: function(t) {
        A(this, t);
      }, getPosition: function() {
        return this.options.position;
      }, setPosition: function(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      }, getContainer: function() {
        return this._container;
      }, addTo: function(n) {
        this.remove(), this._map = n;
        var e = this._container = this.onAdd(n), i = this.getPosition(), n = n._controlCorners[i];
        return w(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
      }, remove: function() {
        return this._map && (j(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
      }, _refocusOnMap: function(t) {
        this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus();
      } }), an = (k.include({ addControl: function(t) {
        return t.addTo(this), this;
      }, removeControl: function(t) {
        return t.remove(), this;
      }, _initControlPos: function() {
        var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = E("div", e + "control-container", this._container);
        function n(o, s) {
          t[o + s] = E("div", e + o + " " + e + s, i);
        }
        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
      }, _clearControlPos: function() {
        for (var t in this._controlCorners) j(this._controlCorners[t]);
        j(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      } }), vt.extend({ options: { collapsed: !0, position: "topright", autoZIndex: !0, hideSingleBase: !1, sortLayers: !1, sortFunction: function(t, e, i, n) {
        return i < n ? -1 : n < i ? 1 : 0;
      } }, initialize: function(t, e, i) {
        for (var n in A(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1, t) this._addLayer(t[n], n);
        for (n in e) this._addLayer(e[n], n, !0);
      }, onAdd: function(t) {
        this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      }, addTo: function(t) {
        return vt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      }, onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }, addBaseLayer: function(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      }, addOverlay: function(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      }, removeLayer: function(t) {
        return t.off("add remove", this._onLayerChange, this), t = this._getLayer(z(t)), t && this._layers.splice(this._layers.indexOf(t), 1), this._map ? this._update() : this;
      }, expand: function() {
        w(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (w(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : W(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      }, collapse: function() {
        return W(this._container, "leaflet-control-layers-expanded"), this;
      }, _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = E("div", t), i = this.options.collapsed, n = (e.setAttribute("aria-haspopup", !0), be(e), Ni(e), this._section = E("section", t + "-list")), o = (i && (this._map.on("click", this.collapse, this), v(e, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this)), this._layersLink = E("a", t + "-toggle", e));
        o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), v(o, { keydown: function(s) {
          s.keyCode === 13 && this._expandSafely();
        }, click: function(s) {
          K(s), this._expandSafely();
        } }, this), i || this.expand(), this._baseLayersList = E("div", t + "-base", n), this._separator = E("div", t + "-separator", n), this._overlaysList = E("div", t + "-overlays", n), e.appendChild(n);
      }, _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++) if (this._layers[e] && z(this._layers[e].layer) === t) return this._layers[e];
      }, _addLayer: function(t, e, i) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({ layer: t, name: e, overlay: i }), this.options.sortLayers && this._layers.sort(Z(function(n, o) {
          return this.options.sortFunction(n.layer, o.layer, n.name, o.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      }, _update: function() {
        if (this._container) {
          Xe(this._baseLayersList), Xe(this._overlaysList), this._layerControlInputs = [];
          for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++) i = this._layers[o], this._addItem(i), e = e || i.overlay, t = t || !i.overlay, n += i.overlay ? 0 : 1;
          this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && 1 < n) ? "" : "none"), this._separator.style.display = e && t ? "" : "none";
        }
        return this;
      }, _onLayerChange: function(i) {
        this._handlingClick || this._update();
        var e = this._getLayer(z(i.target)), i = e.overlay ? i.type === "add" ? "overlayadd" : "overlayremove" : i.type === "add" ? "baselayerchange" : null;
        i && this._map.fire(i, e);
      }, _createRadioElement: function(t, e) {
        return t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", e = document.createElement("div"), e.innerHTML = t, e.firstChild;
      }, _addItem: function(t) {
        var e, i = document.createElement("label"), n = this._map.hasLayer(t.layer), n = (t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + z(this), n), this._layerControlInputs.push(e), e.layerId = z(t.layer), v(e, "click", this._onInputClick, this), document.createElement("span")), o = (n.innerHTML = " " + t.name, document.createElement("span"));
        return i.appendChild(o), o.appendChild(e), o.appendChild(n), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i;
      }, _onInputClick: function() {
        if (!this._preventClick) {
          var t, e, i = this._layerControlInputs, n = [], o = [];
          this._handlingClick = !0;
          for (var s = i.length - 1; 0 <= s; s--) t = i[s], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
          for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
          for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      }, _checkDisabledLayers: function() {
        for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = e.options.minZoom !== void 0 && n < e.options.minZoom || e.options.maxZoom !== void 0 && n > e.options.maxZoom;
      }, _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      }, _expandSafely: function() {
        var t = this._section, e = (this._preventClick = !0, v(t, "click", K), this.expand(), this);
        setTimeout(function() {
          I(t, "click", K), e._preventClick = !1;
        });
      } })), ji = vt.extend({ options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" }, onAdd: function(t) {
        var e = "leaflet-control-zoom", i = E("div", e + " leaflet-bar"), n = this.options;
        return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
      }, onRemove: function(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      }, disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      }, enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      }, _zoomIn: function(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      }, _zoomOut: function(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      }, _createButton: function(t, e, i, n, o) {
        return i = E("a", i, n), i.innerHTML = t, i.href = "#", i.title = e, i.setAttribute("role", "button"), i.setAttribute("aria-label", e), be(i), v(i, "click", Gt), v(i, "click", o, this), v(i, "click", this._refocusOnMap, this), i;
      }, _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        W(this._zoomInButton, e), W(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), !this._disabled && t._zoom !== t.getMinZoom() || (w(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), !this._disabled && t._zoom !== t.getMaxZoom() || (w(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      } }), hn = (k.mergeOptions({ zoomControl: !0 }), k.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new ji(), this.addControl(this.zoomControl));
      }), vt.extend({ options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 }, onAdd: function(t) {
        var e = "leaflet-control-scale", i = E("div", e), n = this.options;
        return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
      }, onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      }, _addScales: function(t, e, i) {
        t.metric && (this._mScale = E("div", e, i)), t.imperial && (this._iScale = E("div", e, i));
      }, _update: function() {
        var e = this._map, t = e.getSize().y / 2, e = e.distance(e.containerPointToLatLng([0, t]), e.containerPointToLatLng([this.options.maxWidth, t]));
        this._updateScales(e);
      }, _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      }, _updateMetric: function(t) {
        var e = this._getRoundNum(t);
        this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t);
      }, _updateImperial: function(n) {
        var e, i, n = 3.2808399 * n;
        5280 < n ? (i = this._getRoundNum(e = n / 5280), this._updateScale(this._iScale, i + " mi", i / e)) : (i = this._getRoundNum(n), this._updateScale(this._iScale, i + " ft", i / n));
      }, _updateScale: function(t, e, i) {
        t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
      }, _getRoundNum: function(i) {
        var e = Math.pow(10, (Math.floor(i) + "").length - 1), i = i / e;
        return e * (i = 10 <= i ? 10 : 5 <= i ? 5 : 3 <= i ? 3 : 2 <= i ? 2 : 1);
      } })), Hi = vt.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (_.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>" }, initialize: function(t) {
        A(this, t), this._attributions = {};
      }, onAdd: function(t) {
        for (var e in (t.attributionControl = this)._container = E("div", "leaflet-control-attribution"), be(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      }, onRemove: function(t) {
        t.off("layeradd", this._addAttribution, this);
      }, _addAttribution: function(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      }, setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      }, addAttribution: function(t) {
        return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this;
      }, removeAttribution: function(t) {
        return t && this._attributions[t] && (this._attributions[t]--, this._update()), this;
      }, _update: function() {
        if (this._map) {
          var t, e = [];
          for (t in this._attributions) this._attributions[t] && e.push(t);
          var i = [];
          this.options.prefix && i.push(this.options.prefix), e.length && i.push(e.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
        }
      } }), lt = (k.mergeOptions({ attributionControl: !0 }), k.addInitHook(function() {
        this.options.attributionControl && new Hi().addTo(this);
      }), vt.Layers = an, vt.Zoom = ji, vt.Scale = hn, vt.Attribution = Hi, Le.layers = function(t, e, i) {
        return new an(t, e, i);
      }, Le.zoom = function(t) {
        return new ji(t);
      }, Le.scale = function(t) {
        return new hn(t);
      }, Le.attribution = function(t) {
        return new Hi(t);
      }, _t.extend({ initialize: function(t) {
        this._map = t;
      }, enable: function() {
        return this._enabled || (this._enabled = !0, this.addHooks()), this;
      }, disable: function() {
        return this._enabled && (this._enabled = !1, this.removeHooks()), this;
      }, enabled: function() {
        return !!this._enabled;
      } })), Pe = (lt.addTo = function(t, e) {
        return t.addHandler(e, this), this;
      }, { Events: Y }), ln = _.touch ? "touchstart mousedown" : "mousedown", It = jt.extend({ options: { clickTolerance: 3 }, initialize: function(t, e, i, n) {
        A(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
      }, enable: function() {
        this._enabled || (v(this._dragStartTarget, ln, this._onDown, this), this._enabled = !0);
      }, disable: function() {
        this._enabled && (It._dragging === this && this.finishDrag(!0), I(this._dragStartTarget, ln, this._onDown, this), this._enabled = !1, this._moved = !1);
      }, _onDown: function(t) {
        var e, i;
        this._enabled && (this._moved = !1, Si(this._element, "leaflet-zoom-anim") || (t.touches && t.touches.length !== 1 ? It._dragging === this && this.finishDrag() : It._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches || ((It._dragging = this)._preventOutline && Oi(this._element), Ei(), ye(), this._moving || (this.fire("down"), i = t.touches ? t.touches[0] : t, e = tn(this._element), this._startPoint = new f(i.clientX, i.clientY), this._startPos = qt(this._element), this._parentScale = Ai(e), i = t.type === "mousedown", v(document, i ? "mousemove" : "touchmove", this._onMove, this), v(document, i ? "mouseup" : "touchend touchcancel", this._onUp, this)))));
      }, _onMove: function(t) {
        var e;
        this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : !(e = new f((e = t.touches && t.touches.length === 1 ? t.touches[0] : t).clientX, e.clientY)._subtract(this._startPoint)).x && !e.y || Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, K(t), this._moved || (this.fire("dragstart"), this._moved = !0, w(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), w(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, this._lastEvent = t, this._updatePosition()));
      }, _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), q(this._element, this._newPos), this.fire("drag", t);
      }, _onUp: function() {
        this._enabled && this.finishDrag();
      }, finishDrag: function(t) {
        W(document.body, "leaflet-dragging"), this._lastTarget && (W(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), I(document, "mousemove touchmove", this._onMove, this), I(document, "mouseup touchend touchcancel", this._onUp, this), Zi(), Ke();
        var e = this._moved && this._moving;
        this._moving = !1, It._dragging = !1, e && this.fire("dragend", { noInertia: t, distance: this._newPos.distanceTo(this._startPos) });
      } });
      function un(t, e, i) {
        for (var n, o, s, a, r, h, u, d = [1, 4, 2, 8], y = 0, x = t.length; y < x; y++) t[y]._code = Kt(t[y], e);
        for (s = 0; s < 4; s++) {
          for (h = d[s], n = [], y = 0, o = (x = t.length) - 1; y < x; o = y++) a = t[y], r = t[o], a._code & h ? r._code & h || ((u = ei(r, a, h, e, i))._code = Kt(u, e), n.push(u)) : (r._code & h && ((u = ei(r, a, h, e, i))._code = Kt(u, e), n.push(u)), n.push(a));
          t = n;
        }
        return t;
      }
      function cn(t, e) {
        var i, n, o, s, a, r, h;
        if (!t || t.length === 0) throw new Error("latlngs not passed");
        ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        for (var u = T([0, 0]), d = N(t), y = (d.getNorthWest().distanceTo(d.getSouthWest()) * d.getNorthEast().distanceTo(d.getNorthWest()) < 1700 && (u = Wi(t)), t.length), x = [], F = 0; F < y; F++) {
          var ut = T(t[F]);
          x.push(e.project(T([ut.lat - u.lat, ut.lng - u.lng])));
        }
        for (F = a = r = h = 0, i = y - 1; F < y; i = F++) n = x[F], o = x[i], s = n.y * o.x - o.y * n.x, r += (n.x + o.x) * s, h += (n.y + o.y) * s, a += 3 * s;
        return d = a === 0 ? x[0] : [r / a, h / a], d = e.unproject(p(d)), T([d.lat + u.lat, d.lng + u.lng]);
      }
      function Wi(t) {
        for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
          var s = T(t[o]);
          e += s.lat, i += s.lng, n++;
        }
        return T([e / n, i / n]);
      }
      var dn, ti = { __proto__: null, clipPolygon: un, polygonCenter: cn, centroid: Wi };
      function _n(t, e) {
        if (e && t.length) {
          var i = t = (function(r, h) {
            for (var u = [r[0]], d = 1, y = 0, x = r.length; d < x; d++) (function(F, ct) {
              var tt = ct.x - F.x, ct = ct.y - F.y;
              return tt * tt + ct * ct;
            })(r[d], r[y]) > h && (u.push(r[d]), y = d);
            return y < x - 1 && u.push(r[x - 1]), u;
          })(t, e = e * e), n = i.length, o = new (typeof Uint8Array < "u" ? Uint8Array : Array)(n);
          o[0] = o[n - 1] = 1, (function r(h, u, d, y, x) {
            var F, ut, tt, ct = 0;
            for (ut = y + 1; ut <= x - 1; ut++) tt = Te(h[ut], h[y], h[x], !0), ct < tt && (F = ut, ct = tt);
            d < ct && (u[F] = 1, r(h, u, d, y, F), r(h, u, d, F, x));
          })(i, o, e, 0, n - 1);
          var s, a = [];
          for (s = 0; s < n; s++) o[s] && a.push(i[s]);
          return a;
        }
        return t.slice();
      }
      function pn(t, e, i) {
        return Math.sqrt(Te(t, e, i, !0));
      }
      function mn(t, e, i, n, o) {
        var s, a, r, h = n ? dn : Kt(t, i), u = Kt(e, i);
        for (dn = u; ; ) {
          if (!(h | u)) return [t, e];
          if (h & u) return !1;
          r = Kt(a = ei(t, e, s = h || u, i, o), i), s === h ? (t = a, h = r) : (e = a, u = r);
        }
      }
      function ei(t, h, i, d, o) {
        var s, a, r = h.x - t.x, h = h.y - t.y, u = d.min, d = d.max;
        return 8 & i ? (s = t.x + r * (d.y - t.y) / h, a = d.y) : 4 & i ? (s = t.x + r * (u.y - t.y) / h, a = u.y) : 2 & i ? (s = d.x, a = t.y + h * (d.x - t.x) / r) : 1 & i && (s = u.x, a = t.y + h * (u.x - t.x) / r), new f(s, a, o);
      }
      function Kt(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
      }
      function Te(t, s, i, n) {
        var o = s.x, s = s.y, a = i.x - o, r = i.y - s, h = a * a + r * r;
        return 0 < h && (1 < (h = ((t.x - o) * a + (t.y - s) * r) / h) ? (o = i.x, s = i.y) : 0 < h && (o += a * h, s += r * h)), a = t.x - o, r = t.y - s, n ? a * a + r * r : new f(o, s);
      }
      function ft(t) {
        return !J(t[0]) || typeof t[0][0] != "object" && t[0][0] !== void 0;
      }
      function fn(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ft(t);
      }
      function gn(t, e) {
        var i, n, o, s, a, r;
        if (!t || t.length === 0) throw new Error("latlngs not passed");
        ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        for (var h = T([0, 0]), u = N(t), d = (u.getNorthWest().distanceTo(u.getSouthWest()) * u.getNorthEast().distanceTo(u.getNorthWest()) < 1700 && (h = Wi(t)), t.length), y = [], x = 0; x < d; x++) {
          var F = T(t[x]);
          y.push(e.project(T([F.lat - h.lat, F.lng - h.lng])));
        }
        for (i = x = 0; x < d - 1; x++) i += y[x].distanceTo(y[x + 1]) / 2;
        if (i === 0) r = y[0];
        else for (n = x = 0; x < d - 1; x++) if (o = y[x], s = y[x + 1], i < (n += a = o.distanceTo(s))) {
          r = [s.x - (a = (n - i) / a) * (s.x - o.x), s.y - a * (s.y - o.y)];
          break;
        }
        return u = e.unproject(p(r)), T([u.lat + h.lat, u.lng + h.lng]);
      }
      var ii = { __proto__: null, simplify: _n, pointToSegmentDistance: pn, closestPointOnSegment: function(t, e, i) {
        return Te(t, e, i);
      }, clipSegment: mn, _getEdgeIntersection: ei, _getBitCode: Kt, _sqClosestPointOnSegment: Te, isFlat: ft, _flat: fn, polylineCenter: gn }, Yt = { project: function(t) {
        return new f(t.lng, t.lat);
      }, unproject: function(t) {
        return new S(t.y, t.x);
      }, bounds: new R([-180, -90], [180, 90]) }, Xt = { R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new R([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(t) {
        var e = Math.PI / 180, i = this.R, s = t.lat * e, n = this.R_MINOR / i, n = Math.sqrt(1 - n * n), o = n * Math.sin(s), o = Math.tan(Math.PI / 4 - s / 2) / Math.pow((1 - o) / (1 + o), n / 2), s = -i * Math.log(Math.max(o, 1e-10));
        return new f(t.lng * e * i, s);
      }, unproject: function(t) {
        for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), a = Math.exp(-t.y / n), r = Math.PI / 2 - 2 * Math.atan(a), h = 0, u = 0.1; h < 15 && 1e-7 < Math.abs(u); h++) e = s * Math.sin(r), e = Math.pow((1 - e) / (1 + e), s / 2), r += u = Math.PI / 2 - 2 * Math.atan(a * e) - r;
        return new S(r * i, t.x * i / n);
      } }, ni = { __proto__: null, LonLat: Yt, Mercator: Xt, SphericalMercator: at }, Ui = b({}, gt, { code: "EPSG:3395", projection: Xt, transformation: bt(ee = 0.5 / (Math.PI * Xt.R), 0.5, -ee, 0.5) }), vn = b({}, gt, { code: "EPSG:4326", projection: Yt, transformation: bt(1 / 180, 1, -1 / 180, 0.5) }), oi = b({}, X, { projection: Yt, transformation: bt(1, 0, -1, 0), scale: function(t) {
        return Math.pow(2, t);
      }, zoom: function(t) {
        return Math.log(t) / Math.LN2;
      }, distance: function(t, n) {
        var i = n.lng - t.lng, n = n.lat - t.lat;
        return Math.sqrt(i * i + n * n);
      }, infinite: !0 }), st = (X.Earth = gt, X.EPSG3395 = Ui, X.EPSG3857 = Lt, X.EPSG900913 = Fe, X.EPSG4326 = vn, X.Simple = oi, jt.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 }, addTo: function(t) {
        return t.addLayer(this), this;
      }, remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      }, removeFrom: function(t) {
        return t && t.removeLayer(this), this;
      }, getPane: function(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      }, addInteractiveTarget: function(t) {
        return this._map._targets[z(t)] = this;
      }, removeInteractiveTarget: function(t) {
        return delete this._map._targets[z(t)], this;
      }, getAttribution: function() {
        return this.options.attribution;
      }, _layerAdd: function(t) {
        var e, i = t.target;
        i.hasLayer(this) && (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents && (e = this.getEvents(), i.on(e, this), this.once("remove", function() {
          i.off(e, this);
        }, this)), this.onAdd(i), this.fire("add"), i.fire("layeradd", { layer: this }));
      } })), ae = (k.include({ addLayer: function(t) {
        var e;
        if (t._layerAdd) return e = z(t), this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
        throw new Error("The provided object is not a Layer.");
      }, removeLayer: function(t) {
        var e = z(t);
        return this._layers[e] && (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null), this;
      }, hasLayer: function(t) {
        return z(t) in this._layers;
      }, eachLayer: function(t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      }, _addLayers: function(t) {
        for (var e = 0, i = (t = t ? J(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e]);
      }, _addZoomLimit: function(t) {
        isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[z(t)] = t, this._updateZoomLevels());
      }, _removeZoomLimit: function(t) {
        t = z(t), this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t], this._updateZoomLevels());
      }, _updateZoomLevels: function() {
        var t, e = 1 / 0, i = -1 / 0, n = this._getZoomSpan();
        for (t in this._zoomBoundLayers) var o = this._zoomBoundLayers[t].options, e = o.minZoom === void 0 ? e : Math.min(e, o.minZoom), i = o.maxZoom === void 0 ? i : Math.max(i, o.maxZoom);
        this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = e === 1 / 0 ? void 0 : e, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      } }), st.extend({ initialize: function(t, e) {
        var i, n;
        if (A(this, e), this._layers = {}, t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
      }, addLayer: function(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      }, removeLayer: function(t) {
        return t = t in this._layers ? t : this.getLayerId(t), this._map && this._layers[t] && this._map.removeLayer(this._layers[t]), delete this._layers[t], this;
      }, hasLayer: function(t) {
        return (typeof t == "number" ? t : this.getLayerId(t)) in this._layers;
      }, clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      }, invoke: function(t) {
        var e, i, n = Array.prototype.slice.call(arguments, 1);
        for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
        return this;
      }, onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      }, onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      }, eachLayer: function(t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      }, getLayer: function(t) {
        return this._layers[t];
      }, getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      }, setZIndex: function(t) {
        return this.invoke("setZIndex", t);
      }, getLayerId: z })), Tt = ae.extend({ addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), ae.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      }, removeLayer: function(t) {
        return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this), ae.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
      }, setStyle: function(t) {
        return this.invoke("setStyle", t);
      }, bringToFront: function() {
        return this.invoke("bringToFront");
      }, bringToBack: function() {
        return this.invoke("bringToBack");
      }, getBounds: function() {
        var t, e = new P();
        for (t in this._layers) {
          var i = this._layers[t];
          e.extend(i.getBounds ? i.getBounds() : i.getLatLng());
        }
        return e;
      } }), he = _t.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 }, initialize: function(t) {
        A(this, t);
      }, createIcon: function(t) {
        return this._createIcon("icon", t);
      }, createShadow: function(t) {
        return this._createIcon("shadow", t);
      }, _createIcon: function(t, e) {
        var i = this._getIconUrl(t);
        if (i) return i = this._createImg(i, e && e.tagName === "IMG" ? e : null), this._setIconStyles(i, t), !this.options.crossOrigin && this.options.crossOrigin !== "" || (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), i;
        if (t === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
        return null;
      }, _setIconStyles: function(t, e) {
        var i = this.options, n = i[e + "Size"], n = p(n = typeof n == "number" ? [n, n] : n), o = p(e === "shadow" && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (i.className || ""), o && (t.style.marginLeft = -o.x + "px", t.style.marginTop = -o.y + "px"), n && (t.style.width = n.x + "px", t.style.height = n.y + "px");
      }, _createImg: function(t, e) {
        return (e = e || document.createElement("img")).src = t, e;
      }, _getIconUrl: function(t) {
        return _.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      } }), Me = he.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(t) {
        return typeof Me.imagePath != "string" && (Me.imagePath = this._detectIconPath()), (this.options.imagePath || Me.imagePath) + he.prototype._getIconUrl.call(this, t);
      }, _stripUrl: function(t) {
        function e(i, n, o) {
          return (n = n.exec(i)) && n[o];
        }
        return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1);
      }, _detectIconPath: function() {
        var t = E("div", "leaflet-default-icon-path", document.body), e = we(t, "background-image") || we(t, "backgroundImage");
        return document.body.removeChild(t), (e = this._stripUrl(e)) ? e : (t = document.querySelector('link[href$="leaflet.css"]')) ? t.href.substring(0, t.href.length - 11 - 1) : "";
      } }), yn = lt.extend({ initialize: function(t) {
        this._marker = t;
      }, addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new It(t, t, !0)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), w(t, "leaflet-marker-draggable");
      }, removeHooks: function() {
        this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && W(this._marker._icon, "leaflet-marker-draggable");
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, _adjustPan: function(t) {
        var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, s = qt(e._icon), a = i.getPixelBounds(), r = i.getPixelOrigin(), r = V(a.min._subtract(r).add(o), a.max._subtract(r).subtract(o));
        r.contains(s) || (o = p((Math.max(r.max.x, s.x) - r.max.x) / (a.max.x - r.max.x) - (Math.min(r.min.x, s.x) - r.min.x) / (a.min.x - r.min.x), (Math.max(r.max.y, s.y) - r.max.y) / (a.max.y - r.max.y) - (Math.min(r.min.y, s.y) - r.min.y) / (a.min.y - r.min.y)).multiplyBy(n), i.panBy(o, { animate: !1 }), this._draggable._newPos._add(o), this._draggable._startPos._add(o), q(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = G(this._adjustPan.bind(this, t)));
      }, _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      }, _onPreDrag: function(t) {
        this._marker.options.autoPan && (Q(this._panRequest), this._panRequest = G(this._adjustPan.bind(this, t)));
      }, _onDrag: function(t) {
        var e = this._marker, i = e._shadow, n = qt(e._icon), o = e._map.layerPointToLatLng(n);
        i && q(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      }, _onDragEnd: function(t) {
        Q(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      } }), si = st.extend({ options: { icon: new Me(), interactive: !0, keyboard: !0, title: "", alt: "Marker", zIndexOffset: 0, opacity: 1, riseOnHover: !1, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: !1, autoPanOnFocus: !0, draggable: !1, autoPan: !1, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(t, e) {
        A(this, e), this._latlng = T(t);
      }, onAdd: function(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      }, onRemove: function(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      }, getEvents: function() {
        return { zoom: this.update, viewreset: this.update };
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = T(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      }, setZIndexOffset: function(t) {
        return this.options.zIndexOffset = t, this.update();
      }, getIcon: function() {
        return this.options.icon;
      }, setIcon: function(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      }, getElement: function() {
        return this._icon;
      }, update: function() {
        var t;
        return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t)), this;
      }, _initIcon: function() {
        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), n = t.icon.createIcon(this._icon), i = !1, n = (n !== this._icon && (this._icon && this._removeIcon(), i = !0, t.title && (n.title = t.title), n.tagName === "IMG" && (n.alt = t.alt || "")), w(n, e), t.keyboard && (n.tabIndex = "0", n.setAttribute("role", "button")), this._icon = n, t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && v(n, "focus", this._panOnFocus, this), t.icon.createShadow(this._shadow)), o = !1;
        n !== this._shadow && (this._removeShadow(), o = !0), n && (w(n, e), n.alt = ""), this._shadow = n, t.opacity < 1 && this._updateOpacity(), i && this.getPane().appendChild(this._icon), this._initInteraction(), n && o && this.getPane(t.shadowPane).appendChild(this._shadow);
      }, _removeIcon: function() {
        this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && I(this._icon, "focus", this._panOnFocus, this), j(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      }, _removeShadow: function() {
        this._shadow && j(this._shadow), this._shadow = null;
      }, _setPos: function(t) {
        this._icon && q(this._icon, t), this._shadow && q(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      }, _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      }, _animateZoom: function(t) {
        t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round(), this._setPos(t);
      }, _initInteraction: function() {
        var t;
        this.options.interactive && (w(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), yn && (t = this.options.draggable, this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new yn(this), t && this.dragging.enable()));
      }, setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      }, _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && mt(this._icon, t), this._shadow && mt(this._shadow, t);
      }, _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      }, _resetZIndex: function() {
        this._updateZIndex(0);
      }, _panOnFocus: function() {
        var t, e, i = this._map;
        i && (t = (e = this.options.icon.options).iconSize ? p(e.iconSize) : p(0, 0), e = e.iconAnchor ? p(e.iconAnchor) : p(0, 0), i.panInside(this._latlng, { paddingTopLeft: e, paddingBottomRight: t.subtract(e) }));
      }, _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      }, _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      } }), Rt = st.extend({ options: { stroke: !0, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: !1, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: !0, bubblingMouseEvents: !0 }, beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      }, onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      }, onRemove: function() {
        this._renderer._removePath(this);
      }, redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      }, setStyle: function(t) {
        return A(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      }, bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      }, bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      }, getElement: function() {
        return this._path;
      }, _reset: function() {
        this._project(), this._update();
      }, _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      } }), ri = Rt.extend({ options: { fill: !0, radius: 10 }, initialize: function(t, e) {
        A(this, e), this._latlng = T(t), this._radius = this.options.radius;
      }, setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = T(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      }, getLatLng: function() {
        return this._latlng;
      }, setRadius: function(t) {
        return this.options.radius = this._radius = t, this.redraw();
      }, getRadius: function() {
        return this._radius;
      }, setStyle: function(t) {
        var e = t && t.radius || this._radius;
        return Rt.prototype.setStyle.call(this, t), this.setRadius(e), this;
      }, _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      }, _updateBounds: function() {
        var i = this._radius, t = this._radiusY || i, e = this._clickTolerance(), i = [i + e, t + e];
        this._pxBounds = new R(this._point.subtract(i), this._point.add(i));
      }, _update: function() {
        this._map && this._updatePath();
      }, _updatePath: function() {
        this._renderer._updateCircle(this);
      }, _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      }, _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      } }), qi = ri.extend({ initialize: function(t, e, i) {
        if (A(this, e = typeof e == "number" ? b({}, i, { radius: e }) : e), this._latlng = T(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      }, setRadius: function(t) {
        return this._mRadius = t, this.redraw();
      }, getRadius: function() {
        return this._mRadius;
      }, getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new P(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
      }, setStyle: Rt.prototype.setStyle, _project: function() {
        var t, e, i, n, o, s = this._latlng.lng, a = this._latlng.lat, r = this._map, h = r.options.crs;
        h.distance === gt.distance ? (n = Math.PI / 180, o = this._mRadius / gt.R / n, t = r.project([a + o, s]), e = r.project([a - o, s]), e = t.add(e).divideBy(2), i = r.unproject(e).lat, n = Math.acos((Math.cos(o * n) - Math.sin(a * n) * Math.sin(i * n)) / (Math.cos(a * n) * Math.cos(i * n))) / n, !isNaN(n) && n !== 0 || (n = o / Math.cos(Math.PI / 180 * a)), this._point = e.subtract(r.getPixelOrigin()), this._radius = isNaN(n) ? 0 : e.x - r.project([i, s - n]).x, this._radiusY = e.y - t.y) : (o = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0])), this._point = r.latLngToLayerPoint(this._latlng), this._radius = this._point.x - r.latLngToLayerPoint(o).x), this._updateBounds();
      } }), Mt = Rt.extend({ options: { smoothFactor: 1, noClip: !1 }, initialize: function(t, e) {
        A(this, e), this._setLatLngs(t);
      }, getLatLngs: function() {
        return this._latlngs;
      }, setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      }, isEmpty: function() {
        return !this._latlngs.length;
      }, closestLayerPoint: function(t) {
        for (var e = 1 / 0, i = null, n = Te, o = 0, s = this._parts.length; o < s; o++) for (var a = this._parts[o], r = 1, h = a.length; r < h; r++) {
          var u, d, y = n(t, u = a[r - 1], d = a[r], !0);
          y < e && (e = y, i = n(t, u, d));
        }
        return i && (i.distance = Math.sqrt(e)), i;
      }, getCenter: function() {
        if (this._map) return gn(this._defaultShape(), this._map.options.crs);
        throw new Error("Must add layer to map before using getCenter()");
      }, getBounds: function() {
        return this._bounds;
      }, addLatLng: function(t, e) {
        return e = e || this._defaultShape(), t = T(t), e.push(t), this._bounds.extend(t), this.redraw();
      }, _setLatLngs: function(t) {
        this._bounds = new P(), this._latlngs = this._convertLatLngs(t);
      }, _defaultShape: function() {
        return ft(this._latlngs) ? this._latlngs : this._latlngs[0];
      }, _convertLatLngs: function(t) {
        for (var e = [], i = ft(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = T(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
        return e;
      }, _project: function() {
        var t = new R();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      }, _updateBounds: function() {
        var t = this._clickTolerance(), t = new f(t, t);
        this._rawPxBounds && (this._pxBounds = new R([this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t)]));
      }, _projectLatlngs: function(t, e, i) {
        var n, o, s = t[0] instanceof S, a = t.length;
        if (s) {
          for (o = [], n = 0; n < a; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
          e.push(o);
        } else for (n = 0; n < a; n++) this._projectLatlngs(t[n], e, i);
      }, _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;
        else for (var e, i, n, o, s = this._parts, a = 0, r = 0, h = this._rings.length; a < h; a++) for (e = 0, i = (o = this._rings[a]).length; e < i - 1; e++) (n = mn(o[e], o[e + 1], t, e, !0)) && (s[r] = s[r] || [], s[r].push(n[0]), n[1] === o[e + 1] && e !== i - 2 || (s[r].push(n[1]), r++));
      }, _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = _n(t[i], e);
      }, _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      }, _updatePath: function() {
        this._renderer._updatePoly(this);
      }, _containsPoint: function(t, e) {
        var i, n, o, s, a, r, h = this._clickTolerance();
        if (this._pxBounds && this._pxBounds.contains(t)) {
          for (i = 0, s = this._parts.length; i < s; i++) for (n = 0, o = (a = (r = this._parts[i]).length) - 1; n < a; o = n++) if ((e || n !== 0) && pn(t, r[o], r[n]) <= h) return !0;
        }
        return !1;
      } });
      Mt._flat = fn;
      var le = Mt.extend({ options: { fill: !0 }, isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      }, getCenter: function() {
        if (this._map) return cn(this._defaultShape(), this._map.options.crs);
        throw new Error("Must add layer to map before using getCenter()");
      }, _convertLatLngs: function(e) {
        var e = Mt.prototype._convertLatLngs.call(this, e), i = e.length;
        return 2 <= i && e[0] instanceof S && e[0].equals(e[i - 1]) && e.pop(), e;
      }, _setLatLngs: function(t) {
        Mt.prototype._setLatLngs.call(this, t), ft(this._latlngs) && (this._latlngs = [this._latlngs]);
      }, _defaultShape: function() {
        return (ft(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
      }, _clipPoints: function() {
        var e = this._renderer._bounds, t = this.options.weight, t = new f(t, t), e = new R(e.min.subtract(t), e.max.add(t));
        if (this._parts = [], this._pxBounds && this._pxBounds.intersects(e)) if (this.options.noClip) this._parts = this._rings;
        else for (var i, n = 0, o = this._rings.length; n < o; n++) (i = un(this._rings[n], e, !0)).length && this._parts.push(i);
      }, _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      }, _containsPoint: function(t) {
        var e, i, n, o, s, a, r, h, u = !1;
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (o = 0, r = this._parts.length; o < r; o++) for (s = 0, a = (h = (e = this._parts[o]).length) - 1; s < h; a = s++) i = e[s], n = e[a], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
        return u || Mt.prototype._containsPoint.call(this, t, !0);
      } }), zt = Tt.extend({ initialize: function(t, e) {
        A(this, e), this._layers = {}, t && this.addData(t);
      }, addData: function(t) {
        var e, i, n, o = J(t) ? t : t.features;
        if (o) {
          for (e = 0, i = o.length; e < i; e++) ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
          return this;
        }
        var s, a = this.options;
        return (!a.filter || a.filter(t)) && (s = ai(t, a)) ? (s.feature = ui(t), s.defaultOptions = s.options, this.resetStyle(s), a.onEachFeature && a.onEachFeature(t, s), this.addLayer(s)) : this;
      }, resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = b({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
      }, setStyle: function(t) {
        return this.eachLayer(function(e) {
          this._setLayerStyle(e, t);
        }, this);
      }, _setLayerStyle: function(t, e) {
        t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      } });
      function ai(t, e) {
        var i, n, o, s, a = t.type === "Feature" ? t.geometry : t, r = a ? a.coordinates : null, h = [], u = e && e.pointToLayer, d = e && e.coordsToLatLng || Vi;
        if (!r && !a) return null;
        switch (a.type) {
          case "Point":
            return xn(u, t, i = d(r), e);
          case "MultiPoint":
            for (o = 0, s = r.length; o < s; o++) i = d(r[o]), h.push(xn(u, t, i, e));
            return new Tt(h);
          case "LineString":
          case "MultiLineString":
            return n = hi(r, a.type === "LineString" ? 0 : 1, d), new Mt(n, e);
          case "Polygon":
          case "MultiPolygon":
            return n = hi(r, a.type === "Polygon" ? 1 : 2, d), new le(n, e);
          case "GeometryCollection":
            for (o = 0, s = a.geometries.length; o < s; o++) {
              var y = ai({ geometry: a.geometries[o], type: "Feature", properties: t.properties }, e);
              y && h.push(y);
            }
            return new Tt(h);
          case "FeatureCollection":
            for (o = 0, s = a.features.length; o < s; o++) {
              var x = ai(a.features[o], e);
              x && h.push(x);
            }
            return new Tt(h);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function xn(t, e, i, n) {
        return t ? t(e, i) : new si(i, n && n.markersInheritOptions && n);
      }
      function Vi(t) {
        return new S(t[1], t[0], t[2]);
      }
      function hi(t, e, i) {
        for (var n, o = [], s = 0, a = t.length; s < a; s++) n = e ? hi(t[s], e - 1, i) : (i || Vi)(t[s]), o.push(n);
        return o;
      }
      function Gi(t, e) {
        return (t = T(t)).alt !== void 0 ? [ot(t.lng, e), ot(t.lat, e), ot(t.alt, e)] : [ot(t.lng, e), ot(t.lat, e)];
      }
      function li(t, e, i, n) {
        for (var o = [], s = 0, a = t.length; s < a; s++) o.push(e ? li(t[s], ft(t[s]) ? 0 : e - 1, i, n) : Gi(t[s], n));
        return !e && i && 0 < o.length && o.push(o[0].slice()), o;
      }
      function ue(t, e) {
        return t.feature ? b({}, t.feature, { geometry: e }) : ui(e);
      }
      function ui(t) {
        return t.type === "Feature" || t.type === "FeatureCollection" ? t : { type: "Feature", properties: {}, geometry: t };
      }
      Pt = { toGeoJSON: function(t) {
        return ue(this, { type: "Point", coordinates: Gi(this.getLatLng(), t) });
      } };
      function wn(t, e) {
        return new zt(t, e);
      }
      si.include(Pt), qi.include(Pt), ri.include(Pt), Mt.include({ toGeoJSON: function(t) {
        var e = !ft(this._latlngs);
        return ue(this, { type: (e ? "Multi" : "") + "LineString", coordinates: li(this._latlngs, e ? 1 : 0, !1, t) });
      } }), le.include({ toGeoJSON: function(n) {
        var e = !ft(this._latlngs), i = e && !ft(this._latlngs[0]), n = li(this._latlngs, i ? 2 : e ? 1 : 0, !0, n);
        return ue(this, { type: (i ? "Multi" : "") + "Polygon", coordinates: n = e ? n : [n] });
      } }), ae.include({ toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(i) {
          e.push(i.toGeoJSON(t).geometry.coordinates);
        }), ue(this, { type: "MultiPoint", coordinates: e });
      }, toGeoJSON: function(t) {
        var e, i, n = this.feature && this.feature.geometry && this.feature.geometry.type;
        return n === "MultiPoint" ? this.toMultiPoint(t) : (e = n === "GeometryCollection", i = [], this.eachLayer(function(o) {
          o.toGeoJSON && (o = o.toGeoJSON(t), e ? i.push(o.geometry) : (o = ui(o)).type === "FeatureCollection" ? i.push.apply(i, o.features) : i.push(o));
        }), e ? ue(this, { geometries: i, type: "GeometryCollection" }) : { type: "FeatureCollection", features: i });
      } });
      var ci = wn, di = st.extend({ options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(t, e, i) {
        this._url = t, this._bounds = N(e), A(this, i);
      }, onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (w(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      }, onRemove: function() {
        j(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      }, setOpacity: function(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      }, setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      }, bringToFront: function() {
        return this._map && se(this._image), this;
      }, bringToBack: function() {
        return this._map && re(this._image), this;
      }, setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      }, setBounds: function(t) {
        return this._bounds = N(t), this._map && this._reset(), this;
      }, getEvents: function() {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      }, setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      }, getBounds: function() {
        return this._bounds;
      }, getElement: function() {
        return this._image;
      }, _initImage: function() {
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : E("img");
        w(e, "leaflet-image-layer"), this._zoomAnimated && w(e, "leaflet-zoom-animated"), this.options.className && w(e, this.options.className), e.onselectstart = O, e.onmousemove = O, e.onload = Z(this.fire, this, "load"), e.onerror = Z(this._overlayOnError, this, "error"), !this.options.crossOrigin && this.options.crossOrigin !== "" || (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt);
      }, _animateZoom: function(i) {
        var e = this._map.getZoomScale(i.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, i.zoom, i.center).min;
        Ut(this._image, i, e);
      }, _reset: function() {
        var t = this._image, e = new R(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), i = e.getSize();
        q(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
      }, _updateOpacity: function() {
        mt(this._image, this.options.opacity);
      }, _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      }, _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      }, getCenter: function() {
        return this._bounds.getCenter();
      } }), bn = di.extend({ options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1, playsInline: !0 }, _initImage: function() {
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : E("video");
        if (w(e, "leaflet-image-layer"), this._zoomAnimated && w(e, "leaflet-zoom-animated"), this.options.className && w(e, this.options.className), e.onselectstart = O, e.onmousemove = O, e.onloadeddata = Z(this.fire, this, "load"), t) {
          for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++) n.push(i[o].src);
          this._url = 0 < i.length ? n : [e.src];
        } else {
          J(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
          for (var s = 0; s < this._url.length; s++) {
            var a = E("source");
            a.src = this._url[s], e.appendChild(a);
          }
        }
      } }), Ln = di.extend({ _initImage: function() {
        var t = this._image = this._url;
        w(t, "leaflet-image-layer"), this._zoomAnimated && w(t, "leaflet-zoom-animated"), this.options.className && w(t, this.options.className), t.onselectstart = O, t.onmousemove = O;
      } }), xt = st.extend({ options: { interactive: !1, offset: [0, 0], className: "", pane: void 0, content: "" }, initialize: function(t, e) {
        t && (t instanceof S || J(t)) ? (this._latlng = T(t), A(this, e)) : (A(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      }, openOn: function(t) {
        return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this), this;
      }, close: function() {
        return this._map && this._map.removeLayer(this), this;
      }, toggle: function(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      }, onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && mt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && mt(this._container, 1), this.bringToFront(), this.options.interactive && (w(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      }, onRemove: function(t) {
        t._fadeAnimated ? (mt(this._container, 0), this._removeTimeout = setTimeout(Z(j, void 0, this._container), 200)) : j(this._container), this.options.interactive && (W(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(t) {
        return this._latlng = T(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      }, getContent: function() {
        return this._content;
      }, setContent: function(t) {
        return this._content = t, this.update(), this;
      }, getElement: function() {
        return this._container;
      }, update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      }, getEvents: function() {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      }, isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      }, bringToFront: function() {
        return this._map && se(this._container), this;
      }, bringToBack: function() {
        return this._map && re(this._container), this;
      }, _prepareOpen: function(t) {
        if (!(i = this._source)._map) return !1;
        if (i instanceof Tt) {
          var e, i = null, n = this._source._layers;
          for (e in n) if (n[e]._map) {
            i = n[e];
            break;
          }
          if (!i) return !1;
          this._source = i;
        }
        if (!t) if (i.getCenter) t = i.getCenter();
        else if (i.getLatLng) t = i.getLatLng();
        else {
          if (!i.getBounds) throw new Error("Unable to get source layer LatLng.");
          t = i.getBounds().getCenter();
        }
        return this.setLatLng(t), this._map && this.update(), !0;
      }, _updateContent: function() {
        if (this._content) {
          var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof e == "string") t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      }, _updatePosition: function() {
        var t, e, i;
        this._map && (e = this._map.latLngToLayerPoint(this._latlng), t = p(this.options.offset), i = this._getAnchor(), this._zoomAnimated ? q(this._container, e.add(i)) : t = t.add(e).add(i), e = this._containerBottom = -t.y, i = this._containerLeft = -Math.round(this._containerWidth / 2) + t.x, this._container.style.bottom = e + "px", this._container.style.left = i + "px");
      }, _getAnchor: function() {
        return [0, 0];
      } }), _i = (k.include({ _initOverlay: function(t, e, i, n) {
        var o = e;
        return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
      } }), st.include({ _initOverlay: function(t, e, i, n) {
        var o = i;
        return o instanceof t ? (A(o, n), o._source = this) : (o = e && !n ? e : new t(n, this)).setContent(i), o;
      } }), xt.extend({ options: { pane: "popupPane", offset: [0, 7], maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: !0, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: !1, closeButton: !0, autoClose: !0, closeOnEscapeKey: !0, className: "" }, openOn: function(t) {
        return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, xt.prototype.openOn.call(this, t);
      }, onAdd: function(t) {
        xt.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Rt || this._source.on("preclick", Vt));
      }, onRemove: function(t) {
        xt.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Rt || this._source.off("preclick", Vt));
      }, getEvents: function() {
        var t = xt.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      }, _initLayout: function() {
        var t = "leaflet-popup", e = this._container = E("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"), i = this._wrapper = E("div", t + "-content-wrapper", e);
        this._contentNode = E("div", t + "-content", i), be(e), Ni(this._contentNode), v(e, "contextmenu", Vt), this._tipContainer = E("div", t + "-tip-container", e), this._tip = E("div", t + "-tip", this._tipContainer), this.options.closeButton && ((i = this._closeButton = E("a", t + "-close-button", e)).setAttribute("role", "button"), i.setAttribute("aria-label", "Close popup"), i.href = "#close", i.innerHTML = '<span aria-hidden="true">&#215;</span>', v(i, "click", function(n) {
          K(n), this.close();
        }, this));
      }, _updateLayout: function() {
        var t = this._contentNode, e = t.style, i = (e.width = "", e.whiteSpace = "nowrap", t.offsetWidth), i = Math.min(i, this.options.maxWidth), i = (i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "", t.offsetHeight), n = this.options.maxHeight, o = "leaflet-popup-scrolled";
        (n && n < i ? (e.height = n + "px", w) : W)(t, o), this._containerWidth = this._container.offsetWidth;
      }, _animateZoom: function(e) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), i = this._getAnchor();
        q(this._container, e.add(i));
      }, _adjustPan: function() {
        var t, e, i, n, o, s, a, r;
        this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), this._autopanning ? this._autopanning = !1 : (t = this._map, e = parseInt(we(this._container, "marginBottom"), 10) || 0, e = this._container.offsetHeight + e, r = this._containerWidth, (i = new f(this._containerLeft, -e - this._containerBottom))._add(qt(this._container)), i = t.layerPointToContainerPoint(i), o = p(this.options.autoPanPadding), n = p(this.options.autoPanPaddingTopLeft || o), o = p(this.options.autoPanPaddingBottomRight || o), s = t.getSize(), a = 0, i.x + r + o.x > s.x && (a = i.x + r - s.x + o.x), i.x - a - n.x < (r = 0) && (a = i.x - n.x), i.y + e + o.y > s.y && (r = i.y + e - s.y + o.y), i.y - r - n.y < 0 && (r = i.y - n.y), (a || r) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([a, r]))));
      }, _getAnchor: function() {
        return p(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      } })), pi = (k.mergeOptions({ closePopupOnClick: !0 }), k.include({ openPopup: function(t, e, i) {
        return this._initOverlay(_i, t, e, i).openOn(this), this;
      }, closePopup: function(t) {
        return (t = arguments.length ? t : this._popup) && t.close(), this;
      } }), st.include({ bindPopup: function(t, e) {
        return this._popup = this._initOverlay(_i, this._popup, t, e), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !0), this;
      }, unbindPopup: function() {
        return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !1, this._popup = null), this;
      }, openPopup: function(t) {
        return this._popup && (this instanceof Tt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      }, closePopup: function() {
        return this._popup && this._popup.close(), this;
      }, togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      }, isPopupOpen: function() {
        return !!this._popup && this._popup.isOpen();
      }, setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      }, getPopup: function() {
        return this._popup;
      }, _openPopup: function(t) {
        var e;
        this._popup && this._map && (Gt(t), e = t.layer || t.target, this._popup._source !== e || e instanceof Rt ? (this._popup._source = e, this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng));
      }, _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      }, _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      } }), xt.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, opacity: 0.9 }, onAdd: function(t) {
        xt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      }, onRemove: function(t) {
        xt.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      }, getEvents: function() {
        var t = xt.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      }, _initLayout: function() {
        var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = E("div", t), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + z(this));
      }, _updateLayout: function() {
      }, _adjustPan: function() {
      }, _setPosition: function(t) {
        var e, u = this._map, i = this._container, n = u.latLngToContainerPoint(u.getCenter()), u = u.layerPointToContainerPoint(t), o = this.options.direction, s = i.offsetWidth, a = i.offsetHeight, r = p(this.options.offset), h = this._getAnchor(), u = o === "top" ? (e = s / 2, a) : o === "bottom" ? (e = s / 2, 0) : (e = o === "center" ? s / 2 : o === "right" ? 0 : o === "left" ? s : u.x < n.x ? (o = "right", 0) : (o = "left", s + 2 * (r.x + h.x)), a / 2);
        t = t.subtract(p(e, u, !0)).add(r).add(h), W(i, "leaflet-tooltip-right"), W(i, "leaflet-tooltip-left"), W(i, "leaflet-tooltip-top"), W(i, "leaflet-tooltip-bottom"), w(i, "leaflet-tooltip-" + o), q(i, t);
      }, _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      }, setOpacity: function(t) {
        this.options.opacity = t, this._container && mt(this._container, t);
      }, _animateZoom: function(t) {
        t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), this._setPosition(t);
      }, _getAnchor: function() {
        return p(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      } })), Pn = (k.include({ openTooltip: function(t, e, i) {
        return this._initOverlay(pi, t, e, i).openOn(this), this;
      }, closeTooltip: function(t) {
        return t.close(), this;
      } }), st.include({ bindTooltip: function(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(pi, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      }, unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      }, _initTooltipInteractions: function(t) {
        var e, i;
        !t && this._tooltipHandlersAdded || (e = t ? "off" : "on", i = { remove: this.closeTooltip, move: this._moveTooltip }, this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t);
      }, openTooltip: function(t) {
        return this._tooltip && (this instanceof Tt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      }, closeTooltip: function() {
        if (this._tooltip) return this._tooltip.close();
      }, toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      }, isTooltipOpen: function() {
        return this._tooltip.isOpen();
      }, setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      }, getTooltip: function() {
        return this._tooltip;
      }, _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      }, _addFocusListenersOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && (v(e, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), v(e, "blur", this.closeTooltip, this));
      }, _setAriaDescribedByOnLayer: function(t) {
        t = typeof t.getElement == "function" && t.getElement(), t && t.setAttribute("aria-describedby", this._tooltip._container.id);
      }, _openTooltip: function(t) {
        var e;
        this._tooltip && this._map && (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag ? (this._openOnceFlag = !0, (e = this)._map.once("moveend", function() {
          e._openOnceFlag = !1, e._openTooltip(t);
        })) : (this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)));
      }, _moveTooltip: function(t) {
        var e = t.latlng;
        this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent), t = this._map.containerPointToLayerPoint(t), e = this._map.layerPointToLatLng(t)), this._tooltip.setLatLng(e);
      } }), he.extend({ options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(e) {
        var e = e && e.tagName === "DIV" ? e : document.createElement("div"), i = this.options;
        return i.html instanceof Element ? (Xe(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos && (i = p(i.bgPos), e.style.backgroundPosition = -i.x + "px " + -i.y + "px"), this._setIconStyles(e, "icon"), e;
      }, createShadow: function() {
        return null;
      } }));
      he.Default = Me;
      var ze = st.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: _.mobile, updateWhenZooming: !0, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: !1, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(t) {
        A(this, t);
      }, onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      }, beforeAdd: function(t) {
        t._addZoomLimit(this);
      }, onRemove: function(t) {
        this._removeAllTiles(), j(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      }, bringToFront: function() {
        return this._map && (se(this._container), this._setAutoZIndex(Math.max)), this;
      }, bringToBack: function() {
        return this._map && (re(this._container), this._setAutoZIndex(Math.min)), this;
      }, getContainer: function() {
        return this._container;
      }, setOpacity: function(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      }, setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      }, isLoading: function() {
        return this._loading;
      }, redraw: function() {
        var t;
        return this._map && (this._removeAllTiles(), (t = this._clampZoom(this._map.getZoom())) !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update()), this;
      }, getEvents: function() {
        var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = _e(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      }, createTile: function() {
        return document.createElement("div");
      }, getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof f ? t : new f(t, t);
      }, _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      }, _setAutoZIndex: function(t) {
        for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
        isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
      }, _updateOpacity: function() {
        if (this._map && !_.ielt9) {
          mt(this._container, this.options.opacity);
          var t, e = +/* @__PURE__ */ new Date(), i = !1, n = !1;
          for (t in this._tiles) {
            var o, s = this._tiles[t];
            s.current && s.loaded && (o = Math.min(1, (e - s.loaded) / 200), mt(s.el, o), o < 1 ? i = !0 : (s.active ? n = !0 : this._onOpaqueTile(s), s.active = !0));
          }
          n && !this._noPrune && this._pruneTiles(), i && (Q(this._fadeFrame), this._fadeFrame = G(this._updateOpacity, this));
        }
      }, _onOpaqueTile: O, _initContainer: function() {
        this._container || (this._container = E("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      }, _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (j(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
          var n = this._levels[t], o = this._map;
          return n || ((n = this._levels[t] = {}).el = E("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), O(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n;
        }
      }, _onUpdateLevel: O, _onRemoveLevel: O, _onCreateLevel: O, _pruneTiles: function() {
        if (this._map) {
          var t, e, i, n = this._map.getZoom();
          if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
          else {
            for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
            for (t in this._tiles) (i = this._tiles[t]).current && !i.active && (e = i.coords, this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
            for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
          }
        }
      }, _removeTilesAtZoom: function(t) {
        for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
      }, _removeAllTiles: function() {
        for (var t in this._tiles) this._removeTile(t);
      }, _invalidateAll: function() {
        for (var t in this._levels) j(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      }, _retainParent: function(o, s, a, n) {
        var o = Math.floor(o / 2), s = Math.floor(s / 2), a = a - 1, r = new f(+o, +s), r = (r.z = a, this._tileCoordsToKey(r)), r = this._tiles[r];
        return r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0), n < a && this._retainParent(o, s, a, n));
      }, _retainChildren: function(t, e, i, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++) for (var s = 2 * e; s < 2 * e + 2; s++) {
          var a = new f(o, s), a = (a.z = i + 1, this._tileCoordsToKey(a)), a = this._tiles[a];
          a && a.active ? a.retain = !0 : (a && a.loaded && (a.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n));
        }
      }, _resetView: function(t) {
        t = t && (t.pinch || t.flyTo), this._setView(this._map.getCenter(), this._map.getZoom(), t, t);
      }, _animateZoom: function(t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      }, _clampZoom: function(t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
      }, _setView: function(t, e, i, n) {
        var o = Math.round(e), o = this.options.maxZoom !== void 0 && o > this.options.maxZoom || this.options.minZoom !== void 0 && o < this.options.minZoom ? void 0 : this._clampZoom(o), s = this.options.updateWhenZooming && o !== this._tileZoom;
        n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), o !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
      }, _setZoomTransforms: function(t, e) {
        for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
      }, _setZoomTransform: function(t, o, i) {
        var n = this._map.getZoomScale(i, t.zoom), o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(o, i)).round();
        _.any3d ? Ut(t.el, o, n) : q(t.el, o);
      }, _resetGrid: function() {
        var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)];
      }, _onMoveEnd: function() {
        this._map && !this._map._animatingZoom && this._update();
      }, _getTiledPixelBounds: function(i) {
        var n = this._map, e = n._animatingZoom ? Math.max(n._animateToZoom, n.getZoom()) : n.getZoom(), e = n.getZoomScale(e, this._tileZoom), i = n.project(i, this._tileZoom).floor(), n = n.getSize().divideBy(2 * e);
        return new R(i.subtract(n), i.add(n));
      }, _update: function(t) {
        var e = this._map;
        if (e) {
          var i = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var n, e = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(e), s = o.getCenter(), a = [], e = this.options.keepBuffer, r = new R(o.getBottomLeft().subtract([e, -e]), o.getTopRight().add([e, -e]));
            if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for (n in this._tiles) {
              var h = this._tiles[n].coords;
              h.z === this._tileZoom && r.contains(new f(h.x, h.y)) || (this._tiles[n].current = !1);
            }
            if (1 < Math.abs(i - this._tileZoom)) this._setView(t, i);
            else {
              for (var u = o.min.y; u <= o.max.y; u++) for (var d = o.min.x; d <= o.max.x; d++) {
                var y, x = new f(d, u);
                x.z = this._tileZoom, this._isValidTile(x) && ((y = this._tiles[this._tileCoordsToKey(x)]) ? y.current = !0 : a.push(x));
              }
              if (a.sort(function(tt, ct) {
                return tt.distanceTo(s) - ct.distanceTo(s);
              }), a.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                for (var F = document.createDocumentFragment(), d = 0; d < a.length; d++) this._addTile(a[d], F);
                this._level.el.appendChild(F);
              }
            }
          }
        }
      }, _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._globalTileRange;
          if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1;
        }
        return !this.options.bounds || (e = this._tileCoordsToBounds(t), N(this.options.bounds).overlaps(e));
      }, _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      }, _tileCoordsToNwSe: function(t) {
        var e = this._map, n = this.getTileSize(), i = t.scaleBy(n), n = i.add(n);
        return [e.unproject(i, t.z), e.unproject(n, t.z)];
      }, _tileCoordsToBounds: function(t) {
        return t = this._tileCoordsToNwSe(t), t = new P(t[0], t[1]), t = this.options.noWrap ? t : this._map.wrapLatLngBounds(t);
      }, _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      }, _keyToTileCoords: function(e) {
        var e = e.split(":"), i = new f(+e[0], +e[1]);
        return i.z = +e[2], i;
      }, _removeTile: function(t) {
        var e = this._tiles[t];
        e && (j(e.el), delete this._tiles[t], this.fire("tileunload", { tile: e.el, coords: this._keyToTileCoords(t) }));
      }, _initTile: function(t) {
        w(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = O, t.onmousemove = O, _.ielt9 && this.options.opacity < 1 && mt(t, this.options.opacity);
      }, _addTile: function(t, e) {
        var i = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), Z(this._tileReady, this, t));
        this._initTile(o), this.createTile.length < 2 && G(Z(this._tileReady, this, t, null, o)), q(o, i), this._tiles[n] = { el: o, coords: t, current: !0 }, e.appendChild(o), this.fire("tileloadstart", { tile: o, coords: t });
      }, _tileReady: function(t, e, i) {
        e && this.fire("tileerror", { error: e, tile: i, coords: t });
        var n = this._tileCoordsToKey(t);
        (i = this._tiles[n]) && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (mt(i.el, 0), Q(this._fadeFrame), this._fadeFrame = G(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (w(i.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: i.el, coords: t })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), _.ielt9 || !this._map._fadeAnimated ? G(this._pruneTiles, this) : setTimeout(Z(this._pruneTiles, this), 250)));
      }, _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      }, _wrapCoords: function(t) {
        var e = new f(this._wrapX ? Et(t.x, this._wrapX) : t.x, this._wrapY ? Et(t.y, this._wrapY) : t.y);
        return e.z = t.z, e;
      }, _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new R(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
      }, _noTilesToLoad: function() {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      } }), ce = ze.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1, referrerPolicy: !1 }, initialize: function(t, e) {
        this._url = t, (e = A(this, e)).detectRetina && _.retina && 0 < e.maxZoom ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      }, setUrl: function(t, e) {
        return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
      }, createTile: function(t, e) {
        var i = document.createElement("img");
        return v(i, "load", Z(this._tileOnLoad, this, e, i)), v(i, "error", Z(this._tileOnError, this, e, i)), !this.options.crossOrigin && this.options.crossOrigin !== "" || (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
      }, getTileUrl: function(t) {
        var e = { r: _.retina ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };
        return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y, this.options.tms && (e.y = t), e["-y"] = t), me(this._url, b(e, this.options));
      }, _tileOnLoad: function(t, e) {
        _.ielt9 ? setTimeout(Z(t, this, null, e), 0) : t(null, e);
      }, _tileOnError: function(t, e, i) {
        var n = this.options.errorTileUrl;
        n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
      }, _onTileRemove: function(t) {
        t.tile.onload = null;
      }, _getZoomForUrl: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        return (t = this.options.zoomReverse ? e - t : t) + this.options.zoomOffset;
      }, _getSubdomain: function(t) {
        return t = Math.abs(t.x + t.y) % this.options.subdomains.length, this.options.subdomains[t];
      }, _abortLoading: function() {
        var t, e, i;
        for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = O, i.onerror = O, i.complete || (i.src = Qt, e = this._tiles[t].coords, j(i), delete this._tiles[t], this.fire("tileabort", { tile: i, coords: e })));
      }, _removeTile: function(t) {
        var e = this._tiles[t];
        if (e) return e.el.setAttribute("src", Qt), ze.prototype._removeTile.call(this, t);
      }, _tileReady: function(t, e, i) {
        if (this._map && (!i || i.getAttribute("src") !== Qt)) return ze.prototype._tileReady.call(this, t, e, i);
      } });
      function Tn(t, e) {
        return new ce(t, e);
      }
      var Mn = ce.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" }, options: { crs: null, uppercase: !1 }, initialize: function(o, e) {
        this._url = o;
        var i, n = b({}, this.defaultWmsParams);
        for (i in e) i in this.options || (n[i] = e[i]);
        var o = (e = A(this, e)).detectRetina && _.retina ? 2 : 1, s = this.getTileSize();
        n.width = s.x * o, n.height = s.y * o, this.wmsParams = n;
      }, onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, ce.prototype.onAdd.call(this, t);
      }, getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), i = this._crs, i = V(i.project(e[0]), i.project(e[1])), e = i.min, i = i.max, e = (1.3 <= this._wmsVersion && this._crs === vn ? [e.y, e.x, i.y, i.x] : [e.x, e.y, i.x, i.y]).join(","), i = ce.prototype.getTileUrl.call(this, t);
        return i + pe(this.wmsParams, i, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e;
      }, setParams: function(t, e) {
        return b(this.wmsParams, t), e || this.redraw(), this;
      } });
      ce.WMS = Mn, Tn.wms = function(t, e) {
        return new Mn(t, e);
      };
      var Ct = st.extend({ options: { padding: 0.1 }, initialize: function(t) {
        A(this, t), z(this), this._layers = this._layers || {};
      }, onAdd: function() {
        this._container || (this._initContainer(), w(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      }, onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      }, getEvents: function() {
        var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      }, _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      }, _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      }, _updateTransform: function(t, e) {
        var i = this._map.getZoomScale(e, this._zoom), o = this._map.getSize().multiplyBy(0.5 + this.options.padding), n = this._map.project(this._center, e), o = o.multiplyBy(-i).add(n).subtract(this._map._getNewPixelOrigin(t, e));
        _.any3d ? Ut(this._container, o, i) : q(this._container, o);
      }, _reset: function() {
        for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset();
      }, _onZoomEnd: function() {
        for (var t in this._layers) this._layers[t]._project();
      }, _updatePaths: function() {
        for (var t in this._layers) this._layers[t]._update();
      }, _update: function() {
        var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new R(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      } }), zn = Ct.extend({ options: { tolerance: 0 }, getEvents: function() {
        var t = Ct.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      }, _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      }, onAdd: function() {
        Ct.prototype.onAdd.call(this), this._draw();
      }, _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        v(t, "mousemove", this._onMouseMove, this), v(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), v(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      }, _destroyContainer: function() {
        Q(this._redrawRequest), delete this._ctx, j(this._container), I(this._container), delete this._container;
      }, _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
          this._redraw();
        }
      }, _update: function() {
        var t, e, i, n;
        this._map._animatingZoom && this._bounds || (Ct.prototype._update.call(this), t = this._bounds, e = this._container, i = t.getSize(), n = _.retina ? 2 : 1, q(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", _.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update"));
      }, _reset: function() {
        Ct.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      }, _initPath: function(t) {
        this._updateDashArray(t), t = (this._layers[z(t)] = t)._order = { layer: t, prev: this._drawLast, next: null }, this._drawLast && (this._drawLast.next = t), this._drawLast = t, this._drawFirst = this._drawFirst || this._drawLast;
      }, _addPath: function(t) {
        this._requestRedraw(t);
      }, _removePath: function(t) {
        var i = t._order, e = i.next, i = i.prev;
        e ? e.prev = i : this._drawLast = i, i ? i.next = e : this._drawFirst = e, delete t._order, delete this._layers[z(t)], this._requestRedraw(t);
      }, _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      }, _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      }, _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < i.length; o++) {
            if (e = Number(i[o]), isNaN(e)) return;
            n.push(e);
          }
          t.options._dashArray = n;
        } else t.options._dashArray = t.options.dashArray;
      }, _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || G(this._redraw, this));
      }, _extendRedrawBounds: function(t) {
        var e;
        t._pxBounds && (e = (t.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new R(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e])));
      }, _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      }, _clear: function() {
        var t, e = this._redrawBounds;
        e ? (t = e.getSize(), this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
      }, _draw: function() {
        var t, e, i = this._redrawBounds;
        this._ctx.save(), i && (e = i.getSize(), this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()), this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      }, _updatePoly: function(t, e) {
        if (this._drawing) {
          var i, n, o, s, a = t._parts, r = a.length, h = this._ctx;
          if (r) {
            for (h.beginPath(), i = 0; i < r; i++) {
              for (n = 0, o = a[i].length; n < o; n++) s = a[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
              e && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      }, _updateCircle: function(t) {
        var e, i, n, o;
        this._drawing && !t._empty() && (e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) != 1 && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), o != 1 && i.restore(), this._fillStroke(i, t));
      }, _fillStroke: function(t, e) {
        var i = e.options;
        i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
      }, _onClick: function(t) {
        for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) (e = o.layer).options.interactive && e._containsPoint(n) && ((t.type === "click" || t.type === "preclick") && this._map._draggableMoved(e) || (i = e));
        this._fireEvent(!!i && [i], t);
      }, _onMouseMove: function(t) {
        var e;
        !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t), this._handleMouseHover(t, e));
      }, _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (W(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      }, _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var i, n, o = this._drawFirst; o; o = o.next) (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
          n !== this._hoveredLayer && (this._handleMouseOut(t), n && (w(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(Z(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      }, _fireEvent: function(t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t);
      }, _bringToFront: function(t) {
        var e, i, n = t._order;
        n && (e = n.next, i = n.prev, e && ((e.prev = i) ? i.next = e : e && (this._drawFirst = e), n.prev = this._drawLast, (this._drawLast.next = n).next = null, this._drawLast = n, this._requestRedraw(t)));
      }, _bringToBack: function(t) {
        var e, i, n = t._order;
        n && (e = n.next, (i = n.prev) && ((i.next = e) ? e.prev = i : i && (this._drawLast = i), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t)));
      } });
      function Cn(t) {
        return _.canvas ? new zn(t) : null;
      }
      var Ce = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch {
        }
        return function(t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), Se = { _initContainer: function() {
        this._container = E("div", "leaflet-vml-container");
      }, _update: function() {
        this._map._animatingZoom || (Ct.prototype._update.call(this), this.fire("update"));
      }, _initPath: function(t) {
        var e = t._container = Ce("shape");
        w(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Ce("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[z(t)] = t;
      }, _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      }, _removePath: function(t) {
        var e = t._container;
        j(e), t.removeInteractiveTarget(e), delete this._layers[z(t)];
      }, _updateStyle: function(t) {
        var e = t._stroke, i = t._fill, n = t.options, o = t._container;
        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e = e || (t._stroke = Ce("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = J(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i = i || (t._fill = Ce("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
      }, _updateCircle: function(t) {
        var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600");
      }, _setPath: function(t, e) {
        t._path.v = e;
      }, _bringToFront: function(t) {
        se(t._container);
      }, _bringToBack: function(t) {
        re(t._container);
      } }, mi = _.vml ? Ce : ge, ke = Ct.extend({ _initContainer: function() {
        this._container = mi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = mi("g"), this._container.appendChild(this._rootGroup);
      }, _destroyContainer: function() {
        j(this._container), I(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      }, _update: function() {
        var t, e, i;
        this._map._animatingZoom && this._bounds || (Ct.prototype._update.call(this), e = (t = this._bounds).getSize(), i = this._container, this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), q(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update"));
      }, _initPath: function(t) {
        var e = t._path = mi("path");
        t.options.className && w(e, t.options.className), t.options.interactive && w(e, "leaflet-interactive"), this._updateStyle(t), this._layers[z(t)] = t;
      }, _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      }, _removePath: function(t) {
        j(t._path), t.removeInteractiveTarget(t._path), delete this._layers[z(t)];
      }, _updatePath: function(t) {
        t._project(), t._update();
      }, _updateStyle: function(i) {
        var e = i._path, i = i.options;
        e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      }, _updatePoly: function(t, e) {
        this._setPath(t, je(t._parts, e));
      }, _updateCircle: function(t) {
        var n = t._point, e = Math.max(Math.round(t._radius), 1), i = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ", n = t._empty() ? "M0 0" : "M" + (n.x - e) + "," + n.y + i + 2 * e + ",0 " + i + 2 * -e + ",0 ";
        this._setPath(t, n);
      }, _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      }, _bringToFront: function(t) {
        se(t._path);
      }, _bringToBack: function(t) {
        re(t._path);
      } });
      function Sn(t) {
        return _.svg || _.vml ? new ke(t) : null;
      }
      _.vml && ke.include(Se), k.include({ getRenderer: function(t) {
        return t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer()), this.hasLayer(t) || this.addLayer(t), t;
      }, _getPaneRenderer: function(t) {
        var e;
        return t !== "overlayPane" && t !== void 0 && ((e = this._paneRenderers[t]) === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e);
      }, _createRenderer: function(t) {
        return this.options.preferCanvas && Cn(t) || Sn(t);
      } });
      var kn = le.extend({ initialize: function(t, e) {
        le.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      }, setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      }, _boundsToLatLngs: function(t) {
        return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
      } });
      ke.create = mi, ke.pointsToPath = je, zt.geometryToLayer = ai, zt.coordsToLatLng = Vi, zt.coordsToLatLngs = hi, zt.latLngToCoords = Gi, zt.latLngsToCoords = li, zt.getFeature = ue, zt.asFeature = ui, k.mergeOptions({ boxZoom: !0 });
      var St = lt.extend({ initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      }, addHooks: function() {
        v(this._container, "mousedown", this._onMouseDown, this);
      }, removeHooks: function() {
        I(this._container, "mousedown", this._onMouseDown, this);
      }, moved: function() {
        return this._moved;
      }, _destroy: function() {
        j(this._pane), delete this._pane;
      }, _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      }, _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      }, _onMouseDown: function(t) {
        if (!t.shiftKey || t.which !== 1 && t.button !== 1) return !1;
        this._clearDeferredResetState(), this._resetState(), ye(), Ei(), this._startPoint = this._map.mouseEventToContainerPoint(t), v(document, { contextmenu: Gt, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseMove: function(e) {
        this._moved || (this._moved = !0, this._box = E("div", "leaflet-zoom-box", this._container), w(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
        var e = new R(this._point, this._startPoint), i = e.getSize();
        q(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
      }, _finish: function() {
        this._moved && (j(this._box), W(this._container, "leaflet-crosshair")), Ke(), Zi(), I(document, { contextmenu: Gt, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseUp: function(t) {
        t.which !== 1 && t.button !== 1 || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(Z(this._resetState, this), 0), t = new P(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(t).fire("boxzoomend", { boxZoomBounds: t })));
      }, _onKeyDown: function(t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      } }), fi = (k.addInitHook("addHandler", "boxZoom", St), k.mergeOptions({ doubleClickZoom: !0 }), lt.extend({ addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      }, removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      }, _onDoubleClick: function(t) {
        var e = this._map, n = e.getZoom(), i = e.options.zoomDelta, n = t.originalEvent.shiftKey ? n - i : n + i;
        e.options.doubleClickZoom === "center" ? e.setZoom(n) : e.setZoomAround(t.containerPoint, n);
      } })), Nt = (k.addInitHook("addHandler", "doubleClickZoom", fi), k.mergeOptions({ dragging: !0, inertia: !0, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: !1, maxBoundsViscosity: 0 }), lt.extend({ addHooks: function() {
        var t;
        this._draggable || (t = this._map, this._draggable = new It(t._mapPane, t._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))), w(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      }, removeHooks: function() {
        W(this._map._container, "leaflet-grab"), W(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, moving: function() {
        return this._draggable && this._draggable._moving;
      }, _onDragStart: function() {
        var t, e = this._map;
        e._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = N(this._map.options.maxBounds), this._offsetLimit = V(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = []);
      }, _onDrag: function(t) {
        var e, i;
        this._map.options.inertia && (e = this._lastTime = +/* @__PURE__ */ new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(i), this._times.push(e), this._prunePositions(e)), this._map.fire("move", t).fire("drag", t);
      }, _prunePositions: function(t) {
        for (; 1 < this._positions.length && 50 < t - this._times[0]; ) this._positions.shift(), this._times.shift();
      }, _onZoomEnd: function() {
        var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      }, _viscousLimit: function(t, e) {
        return t - (t - e) * this._viscosity;
      }, _onPreDragLimit: function() {
        var t, e;
        this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit, t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t));
      }, _onPreDragWrap: function() {
        var o = this._worldWidth, t = Math.round(o / 2), e = this._initialWorldOffset, n = this._draggable._newPos.x, i = (n - t + e) % o + t - e, n = (n + t + e) % o - t - e, o = Math.abs(i + e) < Math.abs(n + e) ? i : n;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = o;
      }, _onDragEnd: function(t) {
        var e, i, n, o, s = this._map, a = s.options, r = !a.inertia || t.noInertia || this._times.length < 2;
        s.fire("dragend", t), !r && (this._prunePositions(+/* @__PURE__ */ new Date()), t = this._lastPos.subtract(this._positions[0]), r = (this._lastTime - this._times[0]) / 1e3, e = a.easeLinearity, r = (t = t.multiplyBy(e / r)).distanceTo([0, 0]), i = Math.min(a.inertiaMaxSpeed, r), t = t.multiplyBy(i / r), n = i / (a.inertiaDeceleration * e), (o = t.multiplyBy(-n / 2).round()).x || o.y) ? (o = s._limitOffset(o, s.options.maxBounds), G(function() {
          s.panBy(o, { duration: n, easeLinearity: e, noMoveStart: !0, animate: !0 });
        })) : s.fire("moveend");
      } })), gi = (k.addInitHook("addHandler", "dragging", Nt), k.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 }), lt.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      }, addHooks: function() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), v(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, removeHooks: function() {
        this._removeHooks(), I(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, _onMouseDown: function() {
        var t, e, i;
        this._focused || (i = document.body, t = document.documentElement, e = i.scrollTop || t.scrollTop, i = i.scrollLeft || t.scrollLeft, this._map._container.focus(), window.scrollTo(i, e));
      }, _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      }, _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      }, _setPanDelta: function(t) {
        for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, o = i.left.length; n < o; n++) e[i.left[n]] = [-1 * t, 0];
        for (n = 0, o = i.right.length; n < o; n++) e[i.right[n]] = [t, 0];
        for (n = 0, o = i.down.length; n < o; n++) e[i.down[n]] = [0, t];
        for (n = 0, o = i.up.length; n < o; n++) e[i.up[n]] = [0, -1 * t];
      }, _setZoomDelta: function(t) {
        for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
        for (n = 0, o = i.zoomOut.length; n < o; n++) e[i.zoomOut[n]] = -t;
      }, _addHooks: function() {
        v(document, "keydown", this._onKeyDown, this);
      }, _removeHooks: function() {
        I(document, "keydown", this._onKeyDown, this);
      }, _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e, i, n = t.keyCode, o = this._map;
          if (n in this._panKeys) o._panAnim && o._panAnim._inProgress || (i = this._panKeys[n], t.shiftKey && (i = p(i).multiplyBy(3)), o.options.maxBounds && (i = o._limitOffset(p(i), o.options.maxBounds)), o.options.worldCopyJump ? (e = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))), o.panTo(e)) : o.panBy(i));
          else if (n in this._zoomKeys) o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
          else {
            if (n !== 27 || !o._popup || !o._popup.options.closeOnEscapeKey) return;
            o.closePopup();
          }
          Gt(t);
        }
      } })), vi = (k.addInitHook("addHandler", "keyboard", gi), k.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 }), lt.extend({ addHooks: function() {
        v(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      }, removeHooks: function() {
        I(this._map._container, "wheel", this._onWheelScroll, this);
      }, _onWheelScroll: function(t) {
        var i = sn(t), e = this._map.options.wheelDebounceTime, i = (this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date()), Math.max(e - (+/* @__PURE__ */ new Date() - this._startTime), 0));
        clearTimeout(this._timer), this._timer = setTimeout(Z(this._performZoom, this), i), Gt(t);
      }, _performZoom: function() {
        var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0, n = (t._stop(), this._delta / (4 * this._map.options.wheelPxPerZoomLevel)), n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, i = i ? Math.ceil(n / i) * i : n, n = t._limitZoom(e + (0 < this._delta ? i : -i)) - e;
        this._delta = 0, this._startTime = null, n && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + n) : t.setZoomAround(this._lastMousePos, e + n));
      } })), Ee = (k.addInitHook("addHandler", "scrollWheelZoom", vi), k.mergeOptions({ tapHold: _.touchNative && _.safari && _.mobile, tapTolerance: 15 }), lt.extend({ addHooks: function() {
        v(this._map._container, "touchstart", this._onDown, this);
      }, removeHooks: function() {
        I(this._map._container, "touchstart", this._onDown, this);
      }, _onDown: function(t) {
        var e;
        clearTimeout(this._holdTimeout), t.touches.length === 1 && (e = t.touches[0], this._startPos = this._newPos = new f(e.clientX, e.clientY), this._holdTimeout = setTimeout(Z(function() {
          this._cancel(), this._isTapValid() && (v(document, "touchend", K), v(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
        }, this), 600), v(document, "touchend touchcancel contextmenu", this._cancel, this), v(document, "touchmove", this._onMove, this));
      }, _cancelClickPrevent: function t() {
        I(document, "touchend", K), I(document, "touchend touchcancel", t);
      }, _cancel: function() {
        clearTimeout(this._holdTimeout), I(document, "touchend touchcancel contextmenu", this._cancel, this), I(document, "touchmove", this._onMove, this);
      }, _onMove: function(t) {
        t = t.touches[0], this._newPos = new f(t.clientX, t.clientY);
      }, _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      }, _simulateEvent: function(t, e) {
        t = new MouseEvent(t, { bubbles: !0, cancelable: !0, view: window, screenX: e.screenX, screenY: e.screenY, clientX: e.clientX, clientY: e.clientY }), t._simulated = !0, e.target.dispatchEvent(t);
      } })), Ze = (k.addInitHook("addHandler", "tapHold", Ee), k.mergeOptions({ touchZoom: _.touch, bounceAtZoomLimits: !0 }), lt.extend({ addHooks: function() {
        w(this._map._container, "leaflet-touch-zoom"), v(this._map._container, "touchstart", this._onTouchStart, this);
      }, removeHooks: function() {
        W(this._map._container, "leaflet-touch-zoom"), I(this._map._container, "touchstart", this._onTouchStart, this);
      }, _onTouchStart: function(t) {
        var e, i, n = this._map;
        !t.touches || t.touches.length !== 2 || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]), i = n.mouseEventToContainerPoint(t.touches[1]), this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), n.options.touchZoom !== "center" && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))), this._startDist = e.distanceTo(i), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), v(document, "touchmove", this._onTouchMove, this), v(document, "touchend touchcancel", this._onTouchEnd, this), K(t));
      }, _onTouchMove: function(t) {
        if (t.touches && t.touches.length === 2 && this._zooming) {
          var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), o = i.distanceTo(n) / this._startDist;
          if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, o == 1) return;
          } else {
            if (i = i._add(n)._divideBy(2)._subtract(this._centerPoint), o == 1 && i.x === 0 && i.y === 0) return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(i), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), Q(this._animRequest), n = Z(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0), this._animRequest = G(n, this, !0), K(t);
        }
      }, _onTouchEnd: function() {
        this._moved && this._zooming ? (this._zooming = !1, Q(this._animRequest), I(document, "touchmove", this._onTouchMove, this), I(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
      } })), Gn = (k.addInitHook("addHandler", "touchZoom", Ze), k.BoxZoom = St, k.DoubleClickZoom = fi, k.Drag = Nt, k.Keyboard = gi, k.ScrollWheelZoom = vi, k.TapHold = Ee, k.TouchZoom = Ze, l.Bounds = R, l.Browser = _, l.CRS = X, l.Canvas = zn, l.Circle = qi, l.CircleMarker = ri, l.Class = _t, l.Control = vt, l.DivIcon = Pn, l.DivOverlay = xt, l.DomEvent = Fi, l.DomUtil = At, l.Draggable = It, l.Evented = jt, l.FeatureGroup = Tt, l.GeoJSON = zt, l.GridLayer = ze, l.Handler = lt, l.Icon = he, l.ImageOverlay = di, l.LatLng = S, l.LatLngBounds = P, l.Layer = st, l.LayerGroup = ae, l.LineUtil = ii, l.Map = k, l.Marker = si, l.Mixin = Pe, l.Path = Rt, l.Point = f, l.PolyUtil = ti, l.Polygon = le, l.Polyline = Mt, l.Popup = _i, l.PosAnimation = rn, l.Projection = ni, l.Rectangle = kn, l.Renderer = Ct, l.SVG = ke, l.SVGOverlay = Ln, l.TileLayer = ce, l.Tooltip = pi, l.Transformation = te, l.Util = Ne, l.VideoOverlay = bn, l.bind = Z, l.bounds = V, l.canvas = Cn, l.circle = function(t, e, i) {
        return new qi(t, e, i);
      }, l.circleMarker = function(t, e) {
        return new ri(t, e);
      }, l.control = Le, l.divIcon = function(t) {
        return new Pn(t);
      }, l.extend = b, l.featureGroup = function(t, e) {
        return new Tt(t, e);
      }, l.geoJSON = wn, l.geoJson = ci, l.gridLayer = function(t) {
        return new ze(t);
      }, l.icon = function(t) {
        return new he(t);
      }, l.imageOverlay = function(t, e, i) {
        return new di(t, e, i);
      }, l.latLng = T, l.latLngBounds = N, l.layerGroup = function(t, e) {
        return new ae(t, e);
      }, l.map = function(t, e) {
        return new k(t, e);
      }, l.marker = function(t, e) {
        return new si(t, e);
      }, l.point = p, l.polygon = function(t, e) {
        return new le(t, e);
      }, l.polyline = function(t, e) {
        return new Mt(t, e);
      }, l.popup = function(t, e) {
        return new _i(t, e);
      }, l.rectangle = function(t, e) {
        return new kn(t, e);
      }, l.setOptions = A, l.stamp = z, l.svg = Sn, l.svgOverlay = function(t, e, i) {
        return new Ln(t, e, i);
      }, l.tileLayer = Tn, l.tooltip = function(t, e) {
        return new pi(t, e);
      }, l.transformation = bt, l.version = "1.9.4", l.videoOverlay = function(t, e, i) {
        return new bn(t, e, i);
      }, window.L);
      l.noConflict = function() {
        return window.L = Gn, this;
      }, window.L = l;
    });
  })(Ae, Ae.exports)), Ae.exports;
}
var po = _o();
const D = /* @__PURE__ */ Xn(po), Fn = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
], kt = (() => {
  if (typeof document > "u")
    return !1;
  const C = Fn[0], m = {};
  for (const l of Fn)
    if (l?.[1] in document) {
      for (const [nt, H] of l.entries())
        m[C[nt]] = H;
      return m;
    }
  return !1;
})(), jn = {
  change: kt.fullscreenchange,
  error: kt.fullscreenerror
};
let rt = {
  // eslint-disable-next-line default-param-last
  request(C = document.documentElement, m) {
    return new Promise((l, b) => {
      const nt = () => {
        rt.off("change", nt), l();
      };
      rt.on("change", nt);
      const H = C[kt.requestFullscreen](m);
      H instanceof Promise && H.then(nt).catch(b);
    });
  },
  exit() {
    return new Promise((C, m) => {
      if (!rt.isFullscreen) {
        C();
        return;
      }
      const l = () => {
        rt.off("change", l), C();
      };
      rt.on("change", l);
      const b = document[kt.exitFullscreen]();
      b instanceof Promise && b.then(l).catch(m);
    });
  },
  toggle(C, m) {
    return rt.isFullscreen ? rt.exit() : rt.request(C, m);
  },
  onchange(C) {
    rt.on("change", C);
  },
  onerror(C) {
    rt.on("error", C);
  },
  on(C, m) {
    const l = jn[C];
    l && document.addEventListener(l, m, !1);
  },
  off(C, m) {
    const l = jn[C];
    l && document.removeEventListener(l, m, !1);
  },
  raw: kt
};
Object.defineProperties(rt, {
  isFullscreen: {
    get: () => !!document[kt.fullscreenElement]
  },
  element: {
    enumerable: !0,
    get: () => document[kt.fullscreenElement] ?? void 0
  },
  isEnabled: {
    enumerable: !0,
    // Coerce to boolean in case of old WebKit.
    get: () => !!document[kt.fullscreenEnabled]
  }
});
kt || (rt = { isEnabled: !1 });
const Hn = function(C, m, l, b, nt) {
  let H = D.DomUtil.create("a", l, b);
  return H.innerHTML = C, H.href = "#", H.title = m, H.setAttribute("role", "button"), H.setAttribute("aria-label", m), D.DomEvent.disableClickPropagation(H), D.DomEvent.on(H, "click", D.DomEvent.stop), D.DomEvent.on(H, "click", nt, this), D.DomEvent.on(H, "click", this._refocusOnMap, this), H;
}, Wn = D.Control.extend({
  options: {
    position: "topright",
    fullScreenContent: '<span class="embedded-map-control embedded-map-location-icon"><i class="ph ph-arrows-out" style="font-size: 16px;" aria-hidden="true"></i><span>',
    fullScreenTitle: "Enter Fullscreen"
  },
  onAdd: function() {
    let C = "leaflet-control-fullscreen", m = D.DomUtil.create("div", C + " leaflet-bar"), l = this.options;
    return this._fullScreenButton = this._createButton(
      l.fullScreenContent,
      l.fullScreenTitle,
      "map-fullscreen map-svg-button",
      m,
      this._fullScreen
    ), m;
  },
  _fullScreen: function() {
    let C = this._map;
    rt.isEnabled && rt.toggle(C.getContainer());
  },
  _createButton: Hn
}), mo = () => {
  D.Map.mergeOptions({
    fullScreen: !1
  }), D.Map.addInitHook(function() {
    this.options.fullScreen ? (this.fullScreenControl = new Wn(), this.addControl(this.fullScreenControl)) : this.fullScreenControl = null;
  });
}, Un = D.Control.extend({
  options: {
    position: "topright",
    locationContent: '<span class="embedded-map-control embedded-map-location-icon"><i class="ph ph-crosshair" style="font-size: 16px;" aria-hidden="true"></i><span>',
    locationTitle: "Show Your Location"
  },
  onAdd: function() {
    let C = "leaflet-control-location", m = D.DomUtil.create("div", C + " leaflet-bar"), l = this.options;
    return this._locationButton = this._createButton(
      l.locationContent,
      l.locationTitle,
      "map-location map-svg-button",
      m,
      this._location
    ), this._updateDisabled(), m;
  },
  disable: function() {
    return this._disabled = !0, this._updateDisabled(), this;
  },
  enable: function() {
    return this._disabled = !1, this._updateDisabled(), this;
  },
  _location: function() {
    if (this._disabled == !0)
      return;
    this.disable();
    const C = (l) => {
      this._map.closePopup(), typeof this.options.onLocationSuccess == "function" && this.options.onLocationSuccess({
        lat: l.coords.latitude,
        lng: l.coords.longitude
      });
    }, m = (l) => {
      typeof this.options.onLocationFail == "function" && this.options.onLocationFail(l);
    };
    this._getPosition().then(C).catch(m).finally(() => {
      this.enable();
    });
  },
  _getPosition: function() {
    let C = {
      enableHighAccuracy: !1,
      timeout: 5e3,
      maximumAge: 3e4
    };
    return new Promise((m, l) => {
      navigator.geolocation.getCurrentPosition(m, l, C);
    });
  },
  _createButton: Hn,
  _updateDisabled: function() {
    let C = "leaflet-disabled";
    D.DomUtil.removeClass(this._locationButton, C), this._locationButton.setAttribute("aria-disabled", "false"), this._disabled && (D.DomUtil.addClass(this._locationButton, C), this._locationButton.setAttribute("aria-disabled", "true"));
  }
}), fo = () => {
  D.Map.mergeOptions({
    location: !1,
    onLocationFail: null,
    onLocationSuccess: null
  }), D.Map.addInitHook(function() {
    this.options.location ? (this.localControl = new Un(), this.addControl(this.LocationControl)) : this.localControl = null;
  });
}, go = () => {
  mo(), fo();
};
var vo = Ji("<div> </div>"), yo = Ji('<div class="button-container svelte-1qxt4i6"><!> <!></div>'), xo = Ji('<div class="embedded-map-wrapper map-default svelte-1qxt4i6"><!> <div class="embedded embedded-map svelte-1qxt4i6"></div> <!></div>');
function bo(C, m) {
  Jn(m, !1);
  const l = () => lo(Re, "$component", b), [b, nt] = ro(), H = Jt(), Z = Jt(), de = Jt(), z = Jt();
  go();
  let _e = et(m, "dataProvider", 8), Et = et(m, "error", 8), O = et(m, "zoomLevel", 8), ot = et(m, "zoomEnabled", 8, !0), Zt = et(m, "latitudeKey", 8, null), dt = et(m, "longitudeKey", 8, null), A = et(m, "titleKey", 8, null), pe = et(m, "fullScreenEnabled", 8, !0), Be = et(m, "locationEnabled", 8, !0), me = et(m, "defaultLocation", 8), J = et(m, "tileURL", 8, "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"), Ft = et(m, "mapAttribution", 8), Qt = et(m, "creationEnabled", 8, !1), $t = et(m, "onClickMarker", 8), fe = et(m, "onCreateMarker", 8);
  const { styleable: Ie, notificationStore: Ot } = On("sdk"), Re = On("component"), G = `${Qn()}-wrapper`, Q = new Un({
    position: "bottomright",
    onLocationFail: (c) => {
      c.code === GeolocationPositionError.PERMISSION_DENIED ? Ot.actions.error("Location requests not permitted. Ensure location is enabled") : c.code === GeolocationPositionError.POSITION_UNAVAILABLE ? Ot.actions.warning("Location could not be retrieved. Try again") : c.code === GeolocationPositionError.TIMEOUT ? Ot.actions.warning("Location request timed out. Try again") : Ot.actions.error("Unknown location error");
    },
    onLocationSuccess: (c) => {
      te = c, typeof M(P) == "object" && M(P).setView(te, 15);
    }
  }), Ne = new Wn({ position: "topright" }), _t = D.control.zoom({ position: "bottomright" }), Y = {
    html: '<div><i class="ph ph-map-pin ph-fill" style="font-size: 26px; color: #b12b27;" aria-hidden="true"></i></div>',
    className: "embedded-map-marker",
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -13]
  }, jt = {
    icon: D.divIcon(Y),
    draggable: !1,
    alt: "Location Marker"
  }, f = {
    icon: D.divIcon({
      ...Y,
      className: "embedded-map-marker--candidate"
    }),
    draggable: !1,
    alt: "Location Marker"
  }, De = 0, p = 18, R = {
    fullScreen: !1,
    zoomControl: !1,
    scrollWheelZoom: ot(),
    minZoom: De,
    maxZoom: p
  }, V = [51.5072, -0.1276];
  let P = Jt(), N = Jt(), S = new D.FeatureGroup(), T = new D.FeatureGroup(), X = Jt(), gt = !1, at = !1, te, bt, Lt;
  const Fe = (c) => !isNaN(c) && c > -90 && c < 90, ge = (c) => !isNaN(c) && c > -180 && c < 180, je = (c, g, B) => !c?.length || !g || !B ? [] : c.filter((ht) => Fe(ht[g]) && ge(ht[B])), At = (c) => {
    let g = c;
    return g == null || isNaN(g) ? g = 50 : (g = parseFloat(g), g = Math.max(0, Math.min(100, g))), Math.round(g * p / 100);
  }, ee = (c) => {
    if (typeof c != "string")
      return V;
    let g = c.split(",");
    if (g.length !== 2)
      return V;
    let B = parseFloat(g[0].trim()), ht = parseFloat(g[1].trim());
    return Fe(B) === !0 && ge(ht) === !0 ? [B, ht] : V;
  }, Pt = () => {
    if (M(P))
      if (S.getLayers().length) {
        const c = S.getBounds();
        if (M(de)) {
          const g = c.getCenter();
          M(P).setView(g, M(Z));
        } else
          M(P).fitBounds(c, { paddingTopLeft: [0, 24] });
      } else
        M(P).setView(M(z), M(Z));
  }, He = (c, g) => {
    typeof c == "object" && (g ? Q.addTo(c) : c.removeControl(Q));
  }, xi = (c, g) => {
    typeof c == "object" && (g ? Ne.addTo(c) : c.removeControl(Ne));
  }, wi = (c, g) => {
    typeof c == "object" && (g ? (_t.addTo(c), c.scrollWheelZoom.enable()) : (c.removeControl(_t), c.scrollWheelZoom.disable()));
  }, bi = (c, g, B, ht, Ht, ne) => {
    c && (S.clearLayers(), g?.length && (g.forEach((pt) => {
      let Ge = [pt[B], pt[ht]], Wt = D.marker(Ge, jt).addTo(c), Ti = Li(pt[B], pt[ht], pt[Ht]);
      Wt.bindTooltip(Ti, { direction: "top", offset: [0, -25] }).addTo(S), ne && Wt.on("click", () => {
        ne({ marker: pt });
      });
    }), at || (Pt(), at = !0)));
  }, Li = (c, g, B) => B || c + "," + g, We = (c, g) => {
    if (gt) {
      M(P) && M(P).remove();
      try {
        Dt(P, D.map(G, R)), S.addTo(M(P)), T.addTo(M(P));
        const B = ao(g || "", {
          allowedTags: ["a"],
          allowedAttributes: { a: ["href", "target"] }
        });
        D.tileLayer(c, { attribution: "&copy; " + B }).addTo(M(P)), M(P).on("click", Pi), Pt(), M(P).whenReady(() => {
          M(P).invalidateSize();
        });
      } catch (B) {
        console.error("There was a problem with the map", B);
      }
    }
  }, Pi = (c) => {
    if (!Qt())
      return;
    T.clearLayers(), Dt(X, [c.latlng.lat, c.latlng.lng]), D.marker(M(X), f).bindTooltip("New marker", { permanent: !0, direction: "top", offset: [0, -25] }).addTo(T).on("click", Bt);
  }, ve = async () => {
    if (!fe())
      return;
    await fe()({
      lat: M(X)[0],
      lng: M(X)[1]
    }) !== !1 && Bt();
  }, Bt = () => {
    T.clearLayers(), Dt(X, null);
  };
  $n(() => {
    gt = !0, We(J(), Ft()), typeof ResizeObserver < "u" && M(N) && (bt = new ResizeObserver(() => {
      clearTimeout(Lt), Lt = setTimeout(
        () => {
          M(P)?.invalidateSize();
        },
        150
      );
    }), bt.observe(M(N)));
  }), to(() => {
    bt?.disconnect(), clearTimeout(Lt);
  }), wt(
    () => (it(_e()), it(Zt()), it(dt())),
    () => {
      Dt(H, je(_e()?.rows, Zt(), dt()));
    }
  ), wt(() => it(O()), () => {
    Dt(Z, At(O()));
  }), wt(() => it(O()), () => {
    Dt(de, O() != null && O() !== "");
  }), wt(() => it(me()), () => {
    Dt(z, ee(me()));
  }), wt(
    () => (it(J()), it(Ft())),
    () => {
      We(J(), Ft());
    }
  ), wt(() => (M(P), it(ot())), () => {
    wi(M(P), ot());
  }), wt(() => (M(P), it(Be())), () => {
    He(M(P), Be());
  }), wt(() => (M(P), it(pe())), () => {
    xi(M(P), pe());
  }), wt(() => M(z), () => {
    M(z), Pt();
  }), wt(
    () => (M(P), M(H), it(Zt()), it(dt()), it(A()), it($t())),
    () => {
      bi(M(P), M(H), Zt(), dt(), A(), $t());
    }
  ), eo(), io();
  var $ = xo(), _ = Yi($);
  {
    var Ue = (c) => {
      var g = vo(), B = Yi(g, !0);
      Xi(g), Bn(() => uo(B, Et())), Oe(c, g);
    };
    An(_, (c) => {
      Et() && c(Ue);
    });
  }
  var ie = Ki(_, 2);
  no(ie, (c) => Dt(N, c), () => M(N));
  var qe = Ki(ie, 2);
  {
    var Ve = (c) => {
      var g = yo(), B = Yi(g);
      In(B, {
        secondary: !0,
        quiet: !0,
        $$events: { click: Bt },
        children: (Ht, ne) => {
          Rn();
          var pt = Nn("Cancel");
          Oe(Ht, pt);
        },
        $$slots: { default: !0 }
      });
      var ht = Ki(B, 2);
      In(ht, {
        cta: !0,
        $$events: { click: ve },
        children: (Ht, ne) => {
          Rn();
          var pt = Nn("Create marker");
          Oe(Ht, pt);
        },
        $$slots: { default: !0 }
      }), Xi(g), Oe(c, g);
    };
    An(qe, (c) => {
      M(X) && c(Ve);
    });
  }
  Xi($), oo($, (c, g) => Ie?.(c, g), () => l().styles), Bn(() => ho(ie, "id", G)), Oe(C, $), so(), nt();
}
export {
  bo as default
};
