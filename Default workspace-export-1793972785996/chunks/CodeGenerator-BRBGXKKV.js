import { aP as Cr, g as zr, p as he, h as Mt, X as Vr, l as Tt, i as oe, j as ie, k as Qr, m as Yr, u as we, v as Jr, d as fe, w as Kr, y as Zr, z as Pt, aE as Wr, f as be, c as ce, r as le, x as en, n as tn, q as rn, t as ye, b as Ot, Y as Dt, B as It, s as bt, at as wt, a3 as Bt, cy as nn } from "./index-quCB9sGT.js";
var ke = {}, xe = {}, Ce = {}, kt;
function ee() {
  if (kt) return Ce;
  kt = 1, Object.defineProperty(Ce, "__esModule", {
    value: !0
  });
  function y(p, h) {
    if (!(p instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  var v = function p(h, d) {
    y(this, p), this.data = h, this.text = d.text || h, this.options = d;
  };
  return Ce.default = v, Ce;
}
var Ct;
function an() {
  if (Ct) return xe;
  Ct = 1, Object.defineProperty(xe, "__esModule", {
    value: !0
  }), xe.CODE39 = void 0;
  var y = /* @__PURE__ */ (function() {
    function u(O, I) {
      for (var D = 0; D < I.length; D++) {
        var j = I[D];
        j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(O, j.key, j);
      }
    }
    return function(O, I, D) {
      return I && u(O.prototype, I), D && u(O, D), O;
    };
  })(), v = ee(), p = h(v);
  function h(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function d(u, O) {
    if (!(u instanceof O))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(u, O) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return O && (typeof O == "object" || typeof O == "function") ? O : u;
  }
  function l(u, O) {
    if (typeof O != "function" && O !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof O);
    u.prototype = Object.create(O && O.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(u, O) : u.__proto__ = O);
  }
  var c = (function(u) {
    l(O, u);
    function O(I, D) {
      return d(this, O), I = I.toUpperCase(), D.mod43 && (I += r(o(I))), _(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, I, D));
    }
    return y(O, [{
      key: "encode",
      value: function() {
        for (var D = t("*"), j = 0; j < this.data.length; j++)
          D += t(this.data[j]) + "0";
        return D += t("*"), {
          data: D,
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
      }
    }]), O;
  })(p.default), a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"], e = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
  function t(u) {
    return n(i(u));
  }
  function n(u) {
    return e[u].toString(2);
  }
  function r(u) {
    return a[u];
  }
  function i(u) {
    return a.indexOf(u);
  }
  function o(u) {
    for (var O = 0, I = 0; I < u.length; I++)
      O += i(u[I]);
    return O = O % 43, O;
  }
  return xe.CODE39 = c, xe;
}
var ae = {}, Le = {}, Ne = {}, V = {}, Lt;
function Te() {
  if (Lt) return V;
  Lt = 1, Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var y;
  function v(a, e, t) {
    return e in a ? Object.defineProperty(a, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : a[e] = t, a;
  }
  var p = V.SET_A = 0, h = V.SET_B = 1, d = V.SET_C = 2;
  V.SHIFT = 98;
  var _ = V.START_A = 103, l = V.START_B = 104, c = V.START_C = 105;
  return V.MODULO = 103, V.STOP = 106, V.FNC1 = 207, V.SET_BY_CODE = (y = {}, v(y, _, p), v(y, l, h), v(y, c, d), y), V.SWAP = {
    101: p,
    100: h,
    99: d
  }, V.A_START_CHAR = "Ð", V.B_START_CHAR = "Ñ", V.C_START_CHAR = "Ò", V.A_CHARS = "[\0-_È-Ï]", V.B_CHARS = "[ -È-Ï]", V.C_CHARS = "(Ï*[0-9]{2}Ï*)", V.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011], V;
}
var Nt;
function gt() {
  if (Nt) return Ne;
  Nt = 1, Object.defineProperty(Ne, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), v = ee(), p = d(v), h = Te();
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      _(this, t);
      var i = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.substring(1), r));
      return i.bytes = n.split("").map(function(o) {
        return o.charCodeAt(0);
      }), i;
    }
    return y(t, [{
      key: "valid",
      value: function() {
        return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
      }
      // The public encoding function
    }, {
      key: "encode",
      value: function() {
        var r = this.bytes, i = r.shift() - 105, o = h.SET_BY_CODE[i];
        if (o === void 0)
          throw new RangeError("The encoding does not start with a start character.");
        this.shouldEncodeAsEan128() === !0 && r.unshift(h.FNC1);
        var u = t.next(r, 1, o);
        return {
          text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
          data: (
            // Add the start bits
            t.getBar(i) + // Add the encoded bits
            u.result + // Add the checksum
            t.getBar((u.checksum + i) % h.MODULO) + // Add the end bits
            t.getBar(h.STOP)
          )
        };
      }
      // GS1-128/EAN-128
    }, {
      key: "shouldEncodeAsEan128",
      value: function() {
        var r = this.options.ean128 || !1;
        return typeof r == "string" && (r = r.toLowerCase() === "true"), r;
      }
      // Get a bar symbol by index
    }], [{
      key: "getBar",
      value: function(r) {
        return h.BARS[r] ? h.BARS[r].toString() : "";
      }
      // Correct an index by a set and shift it from the bytes array
    }, {
      key: "correctIndex",
      value: function(r, i) {
        if (i === h.SET_A) {
          var o = r.shift();
          return o < 32 ? o + 64 : o - 32;
        } else return i === h.SET_B ? r.shift() - 32 : (r.shift() - 48) * 10 + r.shift() - 48;
      }
    }, {
      key: "next",
      value: function(r, i, o) {
        if (!r.length)
          return { result: "", checksum: 0 };
        var u = void 0, O = void 0;
        if (r[0] >= 200) {
          O = r.shift() - 105;
          var I = h.SWAP[O];
          I !== void 0 ? u = t.next(r, i + 1, I) : ((o === h.SET_A || o === h.SET_B) && O === h.SHIFT && (r[0] = o === h.SET_A ? r[0] > 95 ? r[0] - 96 : r[0] : r[0] < 32 ? r[0] + 96 : r[0]), u = t.next(r, i + 1, o));
        } else
          O = t.correctIndex(r, o), u = t.next(r, i + 1, o);
        var D = t.getBar(O), j = O * i;
        return {
          result: D + u.result,
          checksum: j + u.checksum
        };
      }
    }]), t;
  })(p.default);
  return Ne.default = a, Ne;
}
var qe = {}, qt;
function on() {
  if (qt) return qe;
  qt = 1, Object.defineProperty(qe, "__esModule", {
    value: !0
  });
  var y = Te(), v = function(c) {
    return c.match(new RegExp("^" + y.A_CHARS + "*"))[0].length;
  }, p = function(c) {
    return c.match(new RegExp("^" + y.B_CHARS + "*"))[0].length;
  }, h = function(c) {
    return c.match(new RegExp("^" + y.C_CHARS + "*"))[0];
  };
  function d(l, c) {
    var a = c ? y.A_CHARS : y.B_CHARS, e = l.match(new RegExp("^(" + a + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
    if (e)
      return e[1] + "Ì" + _(l.substring(e[1].length));
    var t = l.match(new RegExp("^" + a + "+"))[0];
    return t.length === l.length ? l : t + String.fromCharCode(c ? 205 : 206) + d(l.substring(t.length), !c);
  }
  function _(l) {
    var c = h(l), a = c.length;
    if (a === l.length)
      return l;
    l = l.substring(a);
    var e = v(l) >= p(l);
    return c + String.fromCharCode(e ? 206 : 205) + d(l, e);
  }
  return qe.default = function(l) {
    var c = void 0, a = h(l).length;
    if (a >= 2)
      c = y.C_START_CHAR + _(l);
    else {
      var e = v(l) > p(l);
      c = (e ? y.A_START_CHAR : y.B_START_CHAR) + d(l, e);
    }
    return c.replace(
      /[\xCD\xCE]([^])[\xCD\xCE]/,
      // Any sequence between 205 and 206 characters
      function(t, n) {
        return "Ë" + n;
      }
    );
  }, qe;
}
var $t;
function un() {
  if ($t) return Le;
  $t = 1, Object.defineProperty(Le, "__esModule", {
    value: !0
  });
  var y = gt(), v = d(y), p = on(), h = d(p);
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      if (_(this, t), /^[\x00-\x7F\xC8-\xD3]+$/.test(n))
        var i = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, h.default)(n), r));
      else
        var i = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r));
      return l(i);
    }
    return t;
  })(v.default);
  return Le.default = a, Le;
}
var $e = {}, jt;
function fn() {
  if (jt) return $e;
  jt = 1, Object.defineProperty($e, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), v = gt(), p = d(v), h = Te();
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      return _(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, h.A_START_CHAR + n, r));
    }
    return y(t, [{
      key: "valid",
      value: function() {
        return new RegExp("^" + h.A_CHARS + "+$").test(this.data);
      }
    }]), t;
  })(p.default);
  return $e.default = a, $e;
}
var je = {}, Ft;
function cn() {
  if (Ft) return je;
  Ft = 1, Object.defineProperty(je, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), v = gt(), p = d(v), h = Te();
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      return _(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, h.B_START_CHAR + n, r));
    }
    return y(t, [{
      key: "valid",
      value: function() {
        return new RegExp("^" + h.B_CHARS + "+$").test(this.data);
      }
    }]), t;
  })(p.default);
  return je.default = a, je;
}
var Fe = {}, Gt;
function ln() {
  if (Gt) return Fe;
  Gt = 1, Object.defineProperty(Fe, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), v = gt(), p = d(v), h = Te();
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      return _(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, h.C_START_CHAR + n, r));
    }
    return y(t, [{
      key: "valid",
      value: function() {
        return new RegExp("^" + h.C_CHARS + "+$").test(this.data);
      }
    }]), t;
  })(p.default);
  return Fe.default = a, Fe;
}
var Ht;
function hn() {
  if (Ht) return ae;
  Ht = 1, Object.defineProperty(ae, "__esModule", {
    value: !0
  }), ae.CODE128C = ae.CODE128B = ae.CODE128A = ae.CODE128 = void 0;
  var y = un(), v = a(y), p = fn(), h = a(p), d = cn(), _ = a(d), l = ln(), c = a(l);
  function a(e) {
    return e && e.__esModule ? e : { default: e };
  }
  return ae.CODE128 = v.default, ae.CODE128A = h.default, ae.CODE128B = _.default, ae.CODE128C = c.default, ae;
}
var J = {}, Ge = {}, ue = {}, Ut;
function Pe() {
  return Ut || (Ut = 1, Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.SIDE_BIN = "101", ue.MIDDLE_BIN = "01010", ue.BINARIES = {
    L: [
      // The L (left) type of encoding
      "0001101",
      "0011001",
      "0010011",
      "0111101",
      "0100011",
      "0110001",
      "0101111",
      "0111011",
      "0110111",
      "0001011"
    ],
    G: [
      // The G type of encoding
      "0100111",
      "0110011",
      "0011011",
      "0100001",
      "0011101",
      "0111001",
      "0000101",
      "0010001",
      "0001001",
      "0010111"
    ],
    R: [
      // The R (right) type of encoding
      "1110010",
      "1100110",
      "1101100",
      "1000010",
      "1011100",
      "1001110",
      "1010000",
      "1000100",
      "1001000",
      "1110100"
    ],
    O: [
      // The O (odd) encoding for UPC-E
      "0001101",
      "0011001",
      "0010011",
      "0111101",
      "0100011",
      "0110001",
      "0101111",
      "0111011",
      "0110111",
      "0001011"
    ],
    E: [
      // The E (even) encoding for UPC-E
      "0100111",
      "0110011",
      "0011011",
      "0100001",
      "0011101",
      "0111001",
      "0000101",
      "0010001",
      "0001001",
      "0010111"
    ]
  }, ue.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"], ue.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"], ue.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"]), ue;
}
var He = {}, Ue = {}, Xt;
function De() {
  if (Xt) return Ue;
  Xt = 1, Object.defineProperty(Ue, "__esModule", {
    value: !0
  });
  var y = Pe(), v = function(h, d, _) {
    var l = h.split("").map(function(a, e) {
      return y.BINARIES[d[e]];
    }).map(function(a, e) {
      return a ? a[h[e]] : "";
    });
    if (_) {
      var c = h.length - 1;
      l = l.map(function(a, e) {
        return e < c ? a + _ : a;
      });
    }
    return l.join("");
  };
  return Ue.default = v, Ue;
}
var zt;
function Lr() {
  if (zt) return He;
  zt = 1, Object.defineProperty(He, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function n(r, i) {
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
      }
    }
    return function(r, i, o) {
      return i && n(r.prototype, i), o && n(r, o), r;
    };
  })(), v = Pe(), p = De(), h = l(p), d = ee(), _ = l(d);
  function l(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function c(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(n, r) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function e(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r);
  }
  var t = (function(n) {
    e(r, n);
    function r(i, o) {
      c(this, r);
      var u = a(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o));
      return u.fontSize = !o.flat && o.fontSize > o.width * 10 ? o.width * 10 : o.fontSize, u.guardHeight = o.height + u.fontSize / 2 + o.textMargin, u;
    }
    return y(r, [{
      key: "encode",
      value: function() {
        return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
      }
    }, {
      key: "leftText",
      value: function(o, u) {
        return this.text.substr(o, u);
      }
    }, {
      key: "leftEncode",
      value: function(o, u) {
        return (0, h.default)(o, u);
      }
    }, {
      key: "rightText",
      value: function(o, u) {
        return this.text.substr(o, u);
      }
    }, {
      key: "rightEncode",
      value: function(o, u) {
        return (0, h.default)(o, u);
      }
    }, {
      key: "encodeGuarded",
      value: function() {
        var o = { fontSize: this.fontSize }, u = { height: this.guardHeight };
        return [{ data: v.SIDE_BIN, options: u }, { data: this.leftEncode(), text: this.leftText(), options: o }, { data: v.MIDDLE_BIN, options: u }, { data: this.rightEncode(), text: this.rightText(), options: o }, { data: v.SIDE_BIN, options: u }];
      }
    }, {
      key: "encodeFlat",
      value: function() {
        var o = [v.SIDE_BIN, this.leftEncode(), v.MIDDLE_BIN, this.rightEncode(), v.SIDE_BIN];
        return {
          data: o.join(""),
          text: this.text
        };
      }
    }]), r;
  })(_.default);
  return He.default = t, He;
}
var Vt;
function vn() {
  if (Vt) return Ge;
  Vt = 1, Object.defineProperty(Ge, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function n(r, i) {
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
      }
    }
    return function(r, i, o) {
      return i && n(r.prototype, i), o && n(r, o), r;
    };
  })(), v = function n(r, i, o) {
    r === null && (r = Function.prototype);
    var u = Object.getOwnPropertyDescriptor(r, i);
    if (u === void 0) {
      var O = Object.getPrototypeOf(r);
      return O === null ? void 0 : n(O, i, o);
    } else {
      if ("value" in u)
        return u.value;
      var I = u.get;
      return I === void 0 ? void 0 : I.call(o);
    }
  }, p = Pe(), h = Lr(), d = _(h);
  function _(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function l(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function c(n, r) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function a(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r);
  }
  var e = function(r) {
    var i = r.substr(0, 12).split("").map(function(o) {
      return +o;
    }).reduce(function(o, u, O) {
      return O % 2 ? o + u * 3 : o + u;
    }, 0);
    return (10 - i % 10) % 10;
  }, t = (function(n) {
    a(r, n);
    function r(i, o) {
      l(this, r), i.search(/^[0-9]{12}$/) !== -1 && (i += e(i));
      var u = c(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o));
      return u.lastChar = o.lastChar, u;
    }
    return y(r, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === e(this.data);
      }
    }, {
      key: "leftText",
      value: function() {
        return v(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "leftText", this).call(this, 1, 6);
      }
    }, {
      key: "leftEncode",
      value: function() {
        var o = this.data.substr(1, 6), u = p.EAN13_STRUCTURE[this.data[0]];
        return v(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "leftEncode", this).call(this, o, u);
      }
    }, {
      key: "rightText",
      value: function() {
        return v(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "rightText", this).call(this, 7, 6);
      }
    }, {
      key: "rightEncode",
      value: function() {
        var o = this.data.substr(7, 6);
        return v(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "rightEncode", this).call(this, o, "RRRRRR");
      }
      // The "standard" way of printing EAN13 barcodes with guard bars
    }, {
      key: "encodeGuarded",
      value: function() {
        var o = v(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "encodeGuarded", this).call(this);
        return this.options.displayValue && (o.unshift({
          data: "000000000000",
          text: this.text.substr(0, 1),
          options: { textAlign: "left", fontSize: this.fontSize }
        }), this.options.lastChar && (o.push({
          data: "00"
        }), o.push({
          data: "00000",
          text: this.options.lastChar,
          options: { fontSize: this.fontSize }
        }))), o;
      }
    }]), r;
  })(d.default);
  return Ge.default = t, Ge;
}
var Xe = {}, Qt;
function dn() {
  if (Qt) return Xe;
  Qt = 1, Object.defineProperty(Xe, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function t(n, r) {
      for (var i = 0; i < r.length; i++) {
        var o = r[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o);
      }
    }
    return function(n, r, i) {
      return r && t(n.prototype, r), i && t(n, i), n;
    };
  })(), v = function t(n, r, i) {
    n === null && (n = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(n, r);
    if (o === void 0) {
      var u = Object.getPrototypeOf(n);
      return u === null ? void 0 : t(u, r, i);
    } else {
      if ("value" in o)
        return o.value;
      var O = o.get;
      return O === void 0 ? void 0 : O.call(i);
    }
  }, p = Lr(), h = d(p);
  function d(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function _(t, n) {
    if (!(t instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(t, n) {
    if (!t)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && (typeof n == "object" || typeof n == "function") ? n : t;
  }
  function c(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof n);
    t.prototype = Object.create(n && n.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
  }
  var a = function(n) {
    var r = n.substr(0, 7).split("").map(function(i) {
      return +i;
    }).reduce(function(i, o, u) {
      return u % 2 ? i + o : i + o * 3;
    }, 0);
    return (10 - r % 10) % 10;
  }, e = (function(t) {
    c(n, t);
    function n(r, i) {
      return _(this, n), r.search(/^[0-9]{7}$/) !== -1 && (r += a(r)), l(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, r, i));
    }
    return y(n, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === a(this.data);
      }
    }, {
      key: "leftText",
      value: function() {
        return v(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "leftText", this).call(this, 0, 4);
      }
    }, {
      key: "leftEncode",
      value: function() {
        var i = this.data.substr(0, 4);
        return v(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "leftEncode", this).call(this, i, "LLLL");
      }
    }, {
      key: "rightText",
      value: function() {
        return v(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "rightText", this).call(this, 4, 4);
      }
    }, {
      key: "rightEncode",
      value: function() {
        var i = this.data.substr(4, 4);
        return v(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "rightEncode", this).call(this, i, "RRRR");
      }
    }]), n;
  })(h.default);
  return Xe.default = e, Xe;
}
var ze = {}, Yt;
function sn() {
  if (Yt) return ze;
  Yt = 1, Object.defineProperty(ze, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function r(i, o) {
      for (var u = 0; u < o.length; u++) {
        var O = o[u];
        O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(i, O.key, O);
      }
    }
    return function(i, o, u) {
      return o && r(i.prototype, o), u && r(i, u), i;
    };
  })(), v = Pe(), p = De(), h = l(p), d = ee(), _ = l(d);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function c(r, i) {
    if (!(r instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(r, i) {
    if (!r)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i && (typeof i == "object" || typeof i == "function") ? i : r;
  }
  function e(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof i);
    r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
  }
  var t = function(i) {
    var o = i.split("").map(function(u) {
      return +u;
    }).reduce(function(u, O, I) {
      return I % 2 ? u + O * 9 : u + O * 3;
    }, 0);
    return o % 10;
  }, n = (function(r) {
    e(i, r);
    function i(o, u) {
      return c(this, i), a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, o, u));
    }
    return y(i, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{5}$/) !== -1;
      }
    }, {
      key: "encode",
      value: function() {
        var u = v.EAN5_STRUCTURE[t(this.data)];
        return {
          data: "1011" + (0, h.default)(this.data, u, "01"),
          text: this.text
        };
      }
    }]), i;
  })(_.default);
  return ze.default = n, ze;
}
var Ve = {}, Jt;
function _n() {
  if (Jt) return Ve;
  Jt = 1, Object.defineProperty(Ve, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function n(r, i) {
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
      }
    }
    return function(r, i, o) {
      return i && n(r.prototype, i), o && n(r, o), r;
    };
  })(), v = Pe(), p = De(), h = l(p), d = ee(), _ = l(d);
  function l(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function c(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(n, r) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function e(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r);
  }
  var t = (function(n) {
    e(r, n);
    function r(i, o) {
      return c(this, r), a(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o));
    }
    return y(r, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{2}$/) !== -1;
      }
    }, {
      key: "encode",
      value: function() {
        var o = v.EAN2_STRUCTURE[parseInt(this.data) % 4];
        return {
          // Start bits + Encode the two digits with 01 in between
          data: "1011" + (0, h.default)(this.data, o, "01"),
          text: this.text
        };
      }
    }]), r;
  })(_.default);
  return Ve.default = t, Ve;
}
var me = {}, Kt;
function Nr() {
  if (Kt) return me;
  Kt = 1, Object.defineProperty(me, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function n(r, i) {
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
      }
    }
    return function(r, i, o) {
      return i && n(r.prototype, i), o && n(r, o), r;
    };
  })();
  me.checksum = t;
  var v = De(), p = _(v), h = ee(), d = _(h);
  function _(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function l(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function c(n, r) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function a(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r);
  }
  var e = (function(n) {
    a(r, n);
    function r(i, o) {
      l(this, r), i.search(/^[0-9]{11}$/) !== -1 && (i += t(i));
      var u = c(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o));
      return u.displayValue = o.displayValue, o.fontSize > o.width * 10 ? u.fontSize = o.width * 10 : u.fontSize = o.fontSize, u.guardHeight = o.height + u.fontSize / 2 + o.textMargin, u;
    }
    return y(r, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == t(this.data);
      }
    }, {
      key: "encode",
      value: function() {
        return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
      }
    }, {
      key: "flatEncoding",
      value: function() {
        var o = "";
        return o += "101", o += (0, p.default)(this.data.substr(0, 6), "LLLLLL"), o += "01010", o += (0, p.default)(this.data.substr(6, 6), "RRRRRR"), o += "101", {
          data: o,
          text: this.text
        };
      }
    }, {
      key: "guardedEncoding",
      value: function() {
        var o = [];
        return this.displayValue && o.push({
          data: "00000000",
          text: this.text.substr(0, 1),
          options: { textAlign: "left", fontSize: this.fontSize }
        }), o.push({
          data: "101" + (0, p.default)(this.data[0], "L"),
          options: { height: this.guardHeight }
        }), o.push({
          data: (0, p.default)(this.data.substr(1, 5), "LLLLL"),
          text: this.text.substr(1, 5),
          options: { fontSize: this.fontSize }
        }), o.push({
          data: "01010",
          options: { height: this.guardHeight }
        }), o.push({
          data: (0, p.default)(this.data.substr(6, 5), "RRRRR"),
          text: this.text.substr(6, 5),
          options: { fontSize: this.fontSize }
        }), o.push({
          data: (0, p.default)(this.data[11], "R") + "101",
          options: { height: this.guardHeight }
        }), this.displayValue && o.push({
          data: "00000000",
          text: this.text.substr(11, 1),
          options: { textAlign: "right", fontSize: this.fontSize }
        }), o;
      }
    }]), r;
  })(d.default);
  function t(n) {
    var r = 0, i;
    for (i = 1; i < 11; i += 2)
      r += parseInt(n[i]);
    for (i = 0; i < 11; i += 2)
      r += parseInt(n[i]) * 3;
    return (10 - r % 10) % 10;
  }
  return me.default = e, me;
}
var Qe = {}, Zt;
function gn() {
  if (Zt) return Qe;
  Zt = 1, Object.defineProperty(Qe, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function o(u, O) {
      for (var I = 0; I < O.length; I++) {
        var D = O[I];
        D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(u, D.key, D);
      }
    }
    return function(u, O, I) {
      return O && o(u.prototype, O), I && o(u, I), u;
    };
  })(), v = De(), p = l(v), h = ee(), d = l(h), _ = Nr();
  function l(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function c(o, u) {
    if (!(o instanceof u))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(o, u) {
    if (!o)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u && (typeof u == "object" || typeof u == "function") ? u : o;
  }
  function e(o, u) {
    if (typeof u != "function" && u !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof u);
    o.prototype = Object.create(u && u.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(o, u) : o.__proto__ = u);
  }
  var t = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"], n = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]], r = (function(o) {
    e(u, o);
    function u(O, I) {
      c(this, u);
      var D = a(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, O, I));
      if (D.isValid = !1, O.search(/^[0-9]{6}$/) !== -1)
        D.middleDigits = O, D.upcA = i(O, "0"), D.text = I.text || "" + D.upcA[0] + O + D.upcA[D.upcA.length - 1], D.isValid = !0;
      else if (O.search(/^[01][0-9]{7}$/) !== -1)
        if (D.middleDigits = O.substring(1, O.length - 1), D.upcA = i(D.middleDigits, O[0]), D.upcA[D.upcA.length - 1] === O[O.length - 1])
          D.isValid = !0;
        else
          return a(D);
      else
        return a(D);
      return D.displayValue = I.displayValue, I.fontSize > I.width * 10 ? D.fontSize = I.width * 10 : D.fontSize = I.fontSize, D.guardHeight = I.height + D.fontSize / 2 + I.textMargin, D;
    }
    return y(u, [{
      key: "valid",
      value: function() {
        return this.isValid;
      }
    }, {
      key: "encode",
      value: function() {
        return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
      }
    }, {
      key: "flatEncoding",
      value: function() {
        var I = "";
        return I += "101", I += this.encodeMiddleDigits(), I += "010101", {
          data: I,
          text: this.text
        };
      }
    }, {
      key: "guardedEncoding",
      value: function() {
        var I = [];
        return this.displayValue && I.push({
          data: "00000000",
          text: this.text[0],
          options: { textAlign: "left", fontSize: this.fontSize }
        }), I.push({
          data: "101",
          options: { height: this.guardHeight }
        }), I.push({
          data: this.encodeMiddleDigits(),
          text: this.text.substring(1, 7),
          options: { fontSize: this.fontSize }
        }), I.push({
          data: "010101",
          options: { height: this.guardHeight }
        }), this.displayValue && I.push({
          data: "00000000",
          text: this.text[7],
          options: { textAlign: "right", fontSize: this.fontSize }
        }), I;
      }
    }, {
      key: "encodeMiddleDigits",
      value: function() {
        var I = this.upcA[0], D = this.upcA[this.upcA.length - 1], j = n[parseInt(D)][parseInt(I)];
        return (0, p.default)(this.middleDigits, j);
      }
    }]), u;
  })(d.default);
  function i(o, u) {
    for (var O = parseInt(o[o.length - 1]), I = t[O], D = "", j = 0, Q = 0; Q < I.length; Q++) {
      var k = I[Q];
      k === "X" ? D += o[j++] : D += k;
    }
    return D = "" + u + D, "" + D + (0, _.checksum)(D);
  }
  return Qe.default = r, Qe;
}
var Wt;
function yn() {
  if (Wt) return J;
  Wt = 1, Object.defineProperty(J, "__esModule", {
    value: !0
  }), J.UPCE = J.UPC = J.EAN2 = J.EAN5 = J.EAN8 = J.EAN13 = void 0;
  var y = vn(), v = r(y), p = dn(), h = r(p), d = sn(), _ = r(d), l = _n(), c = r(l), a = Nr(), e = r(a), t = gn(), n = r(t);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  return J.EAN13 = v.default, J.EAN8 = h.default, J.EAN5 = _.default, J.EAN2 = c.default, J.UPC = e.default, J.UPCE = n.default, J;
}
var ve = {}, Ye = {}, pe = {}, er;
function pn() {
  return er || (er = 1, Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.START_BIN = "1010", pe.END_BIN = "11101", pe.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"]), pe;
}
var tr;
function qr() {
  if (tr) return Ye;
  tr = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), v = pn(), p = ee(), h = d(p);
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t() {
      return _(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
    }
    return y(t, [{
      key: "valid",
      value: function() {
        return this.data.search(/^([0-9]{2})+$/) !== -1;
      }
    }, {
      key: "encode",
      value: function() {
        var r = this, i = this.data.match(/.{2}/g).map(function(o) {
          return r.encodePair(o);
        }).join("");
        return {
          data: v.START_BIN + i + v.END_BIN,
          text: this.text
        };
      }
      // Calculate the data of a number pair
    }, {
      key: "encodePair",
      value: function(r) {
        var i = v.BINARIES[r[1]];
        return v.BINARIES[r[0]].split("").map(function(o, u) {
          return (o === "1" ? "111" : "1") + (i[u] === "1" ? "000" : "0");
        }).join("");
      }
    }]), t;
  })(h.default);
  return Ye.default = a, Ye;
}
var Je = {}, rr;
function En() {
  if (rr) return Je;
  rr = 1, Object.defineProperty(Je, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), v = qr(), p = h(v);
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function d(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function l(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var c = function(t) {
    var n = t.substr(0, 13).split("").map(function(r) {
      return parseInt(r, 10);
    }).reduce(function(r, i, o) {
      return r + i * (3 - o % 2 * 2);
    }, 0);
    return Math.ceil(n / 10) * 10 - n;
  }, a = (function(e) {
    l(t, e);
    function t(n, r) {
      return d(this, t), n.search(/^[0-9]{13}$/) !== -1 && (n += c(n)), _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r));
    }
    return y(t, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === c(this.data);
      }
    }]), t;
  })(p.default);
  return Je.default = a, Je;
}
var nr;
function On() {
  if (nr) return ve;
  nr = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.ITF14 = ve.ITF = void 0;
  var y = qr(), v = d(y), p = En(), h = d(p);
  function d(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  return ve.ITF = v.default, ve.ITF14 = h.default, ve;
}
var Z = {}, Ke = {}, ar;
function Ie() {
  if (ar) return Ke;
  ar = 1, Object.defineProperty(Ke, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), v = ee(), p = h(v);
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function d(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function l(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var c = (function(e) {
    l(t, e);
    function t(n, r) {
      return d(this, t), _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r));
    }
    return y(t, [{
      key: "encode",
      value: function() {
        for (var r = "110", i = 0; i < this.data.length; i++) {
          var o = parseInt(this.data[i]), u = o.toString(2);
          u = a(u, 4 - u.length);
          for (var O = 0; O < u.length; O++)
            r += u[O] == "0" ? "100" : "110";
        }
        return r += "1001", {
          data: r,
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]+$/) !== -1;
      }
    }]), t;
  })(p.default);
  function a(e, t) {
    for (var n = 0; n < t; n++)
      e = "0" + e;
    return e;
  }
  return Ke.default = c, Ke;
}
var Ze = {}, Ae = {}, ir;
function yt() {
  if (ir) return Ae;
  ir = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.mod10 = y, Ae.mod11 = v;
  function y(p) {
    for (var h = 0, d = 0; d < p.length; d++) {
      var _ = parseInt(p[d]);
      (d + p.length) % 2 === 0 ? h += _ : h += _ * 2 % 10 + Math.floor(_ * 2 / 10);
    }
    return (10 - h % 10) % 10;
  }
  function v(p) {
    for (var h = 0, d = [2, 3, 4, 5, 6, 7], _ = 0; _ < p.length; _++) {
      var l = parseInt(p[p.length - 1 - _]);
      h += d[_ % d.length] * l;
    }
    return (11 - h % 11) % 11;
  }
  return Ae;
}
var or;
function bn() {
  if (or) return Ze;
  or = 1, Object.defineProperty(Ze, "__esModule", {
    value: !0
  });
  var y = Ie(), v = h(y), p = yt();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function d(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    l(e, a);
    function e(t, n) {
      return d(this, e), _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, p.mod10)(t), n));
    }
    return e;
  })(v.default);
  return Ze.default = c, Ze;
}
var We = {}, ur;
function wn() {
  if (ur) return We;
  ur = 1, Object.defineProperty(We, "__esModule", {
    value: !0
  });
  var y = Ie(), v = h(y), p = yt();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function d(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    l(e, a);
    function e(t, n) {
      return d(this, e), _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, p.mod11)(t), n));
    }
    return e;
  })(v.default);
  return We.default = c, We;
}
var et = {}, fr;
function xn() {
  if (fr) return et;
  fr = 1, Object.defineProperty(et, "__esModule", {
    value: !0
  });
  var y = Ie(), v = h(y), p = yt();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function d(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    l(e, a);
    function e(t, n) {
      return d(this, e), t += (0, p.mod10)(t), t += (0, p.mod10)(t), _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    }
    return e;
  })(v.default);
  return et.default = c, et;
}
var tt = {}, cr;
function mn() {
  if (cr) return tt;
  cr = 1, Object.defineProperty(tt, "__esModule", {
    value: !0
  });
  var y = Ie(), v = h(y), p = yt();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function d(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    l(e, a);
    function e(t, n) {
      return d(this, e), t += (0, p.mod11)(t), t += (0, p.mod10)(t), _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    }
    return e;
  })(v.default);
  return tt.default = c, tt;
}
var lr;
function An() {
  if (lr) return Z;
  lr = 1, Object.defineProperty(Z, "__esModule", {
    value: !0
  }), Z.MSI1110 = Z.MSI1010 = Z.MSI11 = Z.MSI10 = Z.MSI = void 0;
  var y = Ie(), v = t(y), p = bn(), h = t(p), d = wn(), _ = t(d), l = xn(), c = t(l), a = mn(), e = t(a);
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  return Z.MSI = v.default, Z.MSI10 = h.default, Z.MSI11 = _.default, Z.MSI1010 = c.default, Z.MSI1110 = e.default, Z;
}
var Re = {}, hr;
function Rn() {
  if (hr) return Re;
  hr = 1, Object.defineProperty(Re, "__esModule", {
    value: !0
  }), Re.pharmacode = void 0;
  var y = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), v = ee(), p = h(v);
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function d(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    l(e, a);
    function e(t, n) {
      d(this, e);
      var r = _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
      return r.number = parseInt(t, 10), r;
    }
    return y(e, [{
      key: "encode",
      value: function() {
        for (var n = this.number, r = ""; !isNaN(n) && n != 0; )
          n % 2 === 0 ? (r = "11100" + r, n = (n - 2) / 2) : (r = "100" + r, n = (n - 1) / 2);
        return r = r.slice(0, -2), {
          data: r,
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function() {
        return this.number >= 3 && this.number <= 131070;
      }
    }]), e;
  })(p.default);
  return Re.pharmacode = c, Re;
}
var Se = {}, vr;
function Sn() {
  if (vr) return Se;
  vr = 1, Object.defineProperty(Se, "__esModule", {
    value: !0
  }), Se.codabar = void 0;
  var y = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), v = ee(), p = h(v);
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function d(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    l(e, a);
    function e(t, n) {
      d(this, e), t.search(/^[0-9\-\$\:\.\+\/]+$/) === 0 && (t = "A" + t + "A");
      var r = _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.toUpperCase(), n));
      return r.text = r.options.text || r.text.replace(/[A-D]/g, ""), r;
    }
    return y(e, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
      }
    }, {
      key: "encode",
      value: function() {
        for (var n = [], r = this.getEncodings(), i = 0; i < this.data.length; i++)
          n.push(r[this.data.charAt(i)]), i !== this.data.length - 1 && n.push("0");
        return {
          text: this.text,
          data: n.join("")
        };
      }
    }, {
      key: "getEncodings",
      value: function() {
        return {
          0: "101010011",
          1: "101011001",
          2: "101001011",
          3: "110010101",
          4: "101101001",
          5: "110101001",
          6: "100101011",
          7: "100101101",
          8: "100110101",
          9: "110100101",
          "-": "101001101",
          $: "101100101",
          ":": "1101011011",
          "/": "1101101011",
          ".": "1101101101",
          "+": "1011011011",
          A: "1011001001",
          B: "1001001011",
          C: "1010010011",
          D: "1010011001"
        };
      }
    }]), e;
  })(p.default);
  return Se.codabar = c, Se;
}
var de = {}, rt = {}, Ee = {}, dr;
function Mn() {
  return dr || (dr = 1, Object.defineProperty(Ee, "__esModule", {
    value: !0
  }), Ee.SYMBOLS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "-",
    ".",
    " ",
    "$",
    "/",
    "+",
    "%",
    // Only used for csum and multi-symbols character encodings
    "($)",
    "(%)",
    "(/)",
    "(+)",
    // Start/Stop
    "ÿ"
  ], Ee.BINARIES = ["100010100", "101001000", "101000100", "101000010", "100101000", "100100100", "100100010", "101010000", "100010010", "100001010", "110101000", "110100100", "110100010", "110010100", "110010010", "110001010", "101101000", "101100100", "101100010", "100110100", "100011010", "101011000", "101001100", "101000110", "100101100", "100010110", "110110100", "110110010", "110101100", "110100110", "110010110", "110011010", "101101100", "101100110", "100110110", "100111010", "100101110", "111010100", "111010010", "111001010", "101101110", "101110110", "110101110", "100100110", "111011010", "111010110", "100110010", "101011110"], Ee.MULTI_SYMBOLS = {
    "\0": ["(%)", "U"],
    "": ["($)", "A"],
    "": ["($)", "B"],
    "": ["($)", "C"],
    "": ["($)", "D"],
    "": ["($)", "E"],
    "": ["($)", "F"],
    "\x07": ["($)", "G"],
    "\b": ["($)", "H"],
    "	": ["($)", "I"],
    "\n": ["($)", "J"],
    "\v": ["($)", "K"],
    "\f": ["($)", "L"],
    "\r": ["($)", "M"],
    "": ["($)", "N"],
    "": ["($)", "O"],
    "": ["($)", "P"],
    "": ["($)", "Q"],
    "": ["($)", "R"],
    "": ["($)", "S"],
    "": ["($)", "T"],
    "": ["($)", "U"],
    "": ["($)", "V"],
    "": ["($)", "W"],
    "": ["($)", "X"],
    "": ["($)", "Y"],
    "": ["($)", "Z"],
    "\x1B": ["(%)", "A"],
    "": ["(%)", "B"],
    "": ["(%)", "C"],
    "": ["(%)", "D"],
    "": ["(%)", "E"],
    "!": ["(/)", "A"],
    '"': ["(/)", "B"],
    "#": ["(/)", "C"],
    "&": ["(/)", "F"],
    "'": ["(/)", "G"],
    "(": ["(/)", "H"],
    ")": ["(/)", "I"],
    "*": ["(/)", "J"],
    ",": ["(/)", "L"],
    ":": ["(/)", "Z"],
    ";": ["(%)", "F"],
    "<": ["(%)", "G"],
    "=": ["(%)", "H"],
    ">": ["(%)", "I"],
    "?": ["(%)", "J"],
    "@": ["(%)", "V"],
    "[": ["(%)", "K"],
    "\\": ["(%)", "L"],
    "]": ["(%)", "M"],
    "^": ["(%)", "N"],
    _: ["(%)", "O"],
    "`": ["(%)", "W"],
    a: ["(+)", "A"],
    b: ["(+)", "B"],
    c: ["(+)", "C"],
    d: ["(+)", "D"],
    e: ["(+)", "E"],
    f: ["(+)", "F"],
    g: ["(+)", "G"],
    h: ["(+)", "H"],
    i: ["(+)", "I"],
    j: ["(+)", "J"],
    k: ["(+)", "K"],
    l: ["(+)", "L"],
    m: ["(+)", "M"],
    n: ["(+)", "N"],
    o: ["(+)", "O"],
    p: ["(+)", "P"],
    q: ["(+)", "Q"],
    r: ["(+)", "R"],
    s: ["(+)", "S"],
    t: ["(+)", "T"],
    u: ["(+)", "U"],
    v: ["(+)", "V"],
    w: ["(+)", "W"],
    x: ["(+)", "X"],
    y: ["(+)", "Y"],
    z: ["(+)", "Z"],
    "{": ["(%)", "P"],
    "|": ["(%)", "Q"],
    "}": ["(%)", "R"],
    "~": ["(%)", "S"],
    "": ["(%)", "T"]
  }), Ee;
}
var sr;
function $r() {
  if (sr) return rt;
  sr = 1, Object.defineProperty(rt, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), v = Mn(), p = ee(), h = d(p);
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      return _(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r));
    }
    return y(t, [{
      key: "valid",
      value: function() {
        return /^[0-9A-Z\-. $/+%]+$/.test(this.data);
      }
    }, {
      key: "encode",
      value: function() {
        var r = this.data.split("").flatMap(function(O) {
          return v.MULTI_SYMBOLS[O] || O;
        }), i = r.map(function(O) {
          return t.getEncoding(O);
        }).join(""), o = t.checksum(r, 20), u = t.checksum(r.concat(o), 15);
        return {
          text: this.text,
          data: (
            // Add the start bits
            t.getEncoding("ÿ") + // Add the encoded bits
            i + // Add the checksum
            t.getEncoding(o) + t.getEncoding(u) + // Add the stop bits
            t.getEncoding("ÿ") + // Add the termination bit
            "1"
          )
        };
      }
      // Get the binary encoding of a symbol
    }], [{
      key: "getEncoding",
      value: function(r) {
        return v.BINARIES[t.symbolValue(r)];
      }
      // Get the symbol for a symbol value
    }, {
      key: "getSymbol",
      value: function(r) {
        return v.SYMBOLS[r];
      }
      // Get the symbol value of a symbol
    }, {
      key: "symbolValue",
      value: function(r) {
        return v.SYMBOLS.indexOf(r);
      }
      // Calculate a checksum symbol
    }, {
      key: "checksum",
      value: function(r, i) {
        var o = r.slice().reverse().reduce(function(u, O, I) {
          var D = I % i + 1;
          return u + t.symbolValue(O) * D;
        }, 0);
        return t.getSymbol(o % 47);
      }
    }]), t;
  })(h.default);
  return rt.default = a, rt;
}
var nt = {}, _r;
function Tn() {
  if (_r) return nt;
  _r = 1, Object.defineProperty(nt, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), v = $r(), p = h(v);
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function d(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    l(e, a);
    function e(t, n) {
      return d(this, e), _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    }
    return y(e, [{
      key: "valid",
      value: function() {
        return /^[\x00-\x7f]+$/.test(this.data);
      }
    }]), e;
  })(p.default);
  return nt.default = c, nt;
}
var gr;
function Pn() {
  if (gr) return de;
  gr = 1, Object.defineProperty(de, "__esModule", {
    value: !0
  }), de.CODE93FullASCII = de.CODE93 = void 0;
  var y = $r(), v = d(y), p = Tn(), h = d(p);
  function d(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  return de.CODE93 = v.default, de.CODE93FullASCII = h.default, de;
}
var Me = {}, yr;
function Dn() {
  if (yr) return Me;
  yr = 1, Object.defineProperty(Me, "__esModule", {
    value: !0
  }), Me.GenericBarcode = void 0;
  var y = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), v = ee(), p = h(v);
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function d(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    l(e, a);
    function e(t, n) {
      return d(this, e), _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    }
    return y(e, [{
      key: "encode",
      value: function() {
        return {
          data: "10101010101010101010101010101010101010101",
          text: this.text
        };
      }
      // Resturn true/false if the string provided is valid for this encoder
    }, {
      key: "valid",
      value: function() {
        return !0;
      }
    }]), e;
  })(p.default);
  return Me.GenericBarcode = c, Me;
}
var pr;
function In() {
  if (pr) return ke;
  pr = 1, Object.defineProperty(ke, "__esModule", {
    value: !0
  });
  var y = an(), v = hn(), p = yn(), h = On(), d = An(), _ = Rn(), l = Sn(), c = Pn(), a = Dn();
  return ke.default = {
    CODE39: y.CODE39,
    CODE128: v.CODE128,
    CODE128A: v.CODE128A,
    CODE128B: v.CODE128B,
    CODE128C: v.CODE128C,
    EAN13: p.EAN13,
    EAN8: p.EAN8,
    EAN5: p.EAN5,
    EAN2: p.EAN2,
    UPC: p.UPC,
    UPCE: p.UPCE,
    ITF14: h.ITF14,
    ITF: h.ITF,
    MSI: d.MSI,
    MSI10: d.MSI10,
    MSI11: d.MSI11,
    MSI1010: d.MSI1010,
    MSI1110: d.MSI1110,
    pharmacode: _.pharmacode,
    codabar: l.codabar,
    CODE93: c.CODE93,
    CODE93FullASCII: c.CODE93FullASCII,
    GenericBarcode: a.GenericBarcode
  }, ke;
}
var at = {}, Er;
function pt() {
  if (Er) return at;
  Er = 1, Object.defineProperty(at, "__esModule", {
    value: !0
  });
  var y = Object.assign || function(v) {
    for (var p = 1; p < arguments.length; p++) {
      var h = arguments[p];
      for (var d in h)
        Object.prototype.hasOwnProperty.call(h, d) && (v[d] = h[d]);
    }
    return v;
  };
  return at.default = function(v, p) {
    return y({}, v, p);
  }, at;
}
var it = {}, Or;
function Bn() {
  if (Or) return it;
  Or = 1, Object.defineProperty(it, "__esModule", {
    value: !0
  }), it.default = y;
  function y(v) {
    var p = [];
    function h(d) {
      if (Array.isArray(d))
        for (var _ = 0; _ < d.length; _++)
          h(d[_]);
      else
        d.text = d.text || "", d.data = d.data || "", p.push(d);
    }
    return h(v), p;
  }
  return it;
}
var ot = {}, br;
function kn() {
  if (br) return ot;
  br = 1, Object.defineProperty(ot, "__esModule", {
    value: !0
  }), ot.default = y;
  function y(v) {
    return v.marginTop = v.marginTop || v.margin, v.marginBottom = v.marginBottom || v.margin, v.marginRight = v.marginRight || v.margin, v.marginLeft = v.marginLeft || v.margin, v;
  }
  return ot;
}
var ut = {}, ft = {}, ct = {}, wr;
function jr() {
  if (wr) return ct;
  wr = 1, Object.defineProperty(ct, "__esModule", {
    value: !0
  }), ct.default = y;
  function y(v) {
    var p = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
    for (var h in p)
      p.hasOwnProperty(h) && (h = p[h], typeof v[h] == "string" && (v[h] = parseInt(v[h], 10)));
    return typeof v.displayValue == "string" && (v.displayValue = v.displayValue != "false"), v;
  }
  return ct;
}
var lt = {}, xr;
function Fr() {
  if (xr) return lt;
  xr = 1, Object.defineProperty(lt, "__esModule", {
    value: !0
  });
  var y = {
    width: 2,
    height: 100,
    format: "auto",
    displayValue: !0,
    fontOptions: "",
    font: "monospace",
    text: void 0,
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: void 0,
    marginBottom: void 0,
    marginLeft: void 0,
    marginRight: void 0,
    valid: function() {
    }
  };
  return lt.default = y, lt;
}
var mr;
function Cn() {
  if (mr) return ft;
  mr = 1, Object.defineProperty(ft, "__esModule", {
    value: !0
  });
  var y = jr(), v = d(y), p = Fr(), h = d(p);
  function d(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function _(l) {
    var c = {};
    for (var a in h.default)
      h.default.hasOwnProperty(a) && (l.hasAttribute("jsbarcode-" + a.toLowerCase()) && (c[a] = l.getAttribute("jsbarcode-" + a.toLowerCase())), l.hasAttribute("data-" + a.toLowerCase()) && (c[a] = l.getAttribute("data-" + a.toLowerCase())));
    return c.value = l.getAttribute("jsbarcode-value") || l.getAttribute("data-value"), c = (0, v.default)(c), c;
  }
  return ft.default = _, ft;
}
var ht = {}, vt = {}, W = {}, Ar;
function Gr() {
  if (Ar) return W;
  Ar = 1, Object.defineProperty(W, "__esModule", {
    value: !0
  }), W.getTotalWidthOfEncodings = W.calculateEncodingAttributes = W.getBarcodePadding = W.getEncodingHeight = W.getMaximumHeightOfEncodings = void 0;
  var y = pt(), v = p(y);
  function p(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function h(e, t) {
    return t.height + (t.displayValue && e.text.length > 0 ? t.fontSize + t.textMargin : 0) + t.marginTop + t.marginBottom;
  }
  function d(e, t, n) {
    if (n.displayValue && t < e) {
      if (n.textAlign == "center")
        return Math.floor((e - t) / 2);
      if (n.textAlign == "left")
        return 0;
      if (n.textAlign == "right")
        return Math.floor(e - t);
    }
    return 0;
  }
  function _(e, t, n) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r], o = (0, v.default)(t, i.options), u;
      o.displayValue ? u = a(i.text, o, n) : u = 0;
      var O = i.data.length * o.width;
      i.width = Math.ceil(Math.max(u, O)), i.height = h(i, o), i.barcodePadding = d(u, O, o);
    }
  }
  function l(e) {
    for (var t = 0, n = 0; n < e.length; n++)
      t += e[n].width;
    return t;
  }
  function c(e) {
    for (var t = 0, n = 0; n < e.length; n++)
      e[n].height > t && (t = e[n].height);
    return t;
  }
  function a(e, t, n) {
    var r;
    if (n)
      r = n;
    else if (typeof document < "u")
      r = document.createElement("canvas").getContext("2d");
    else
      return 0;
    r.font = t.fontOptions + " " + t.fontSize + "px " + t.font;
    var i = r.measureText(e);
    if (!i)
      return 0;
    var o = i.width;
    return o;
  }
  return W.getMaximumHeightOfEncodings = c, W.getEncodingHeight = h, W.getBarcodePadding = d, W.calculateEncodingAttributes = _, W.getTotalWidthOfEncodings = l, W;
}
var Rr;
function Ln() {
  if (Rr) return vt;
  Rr = 1, Object.defineProperty(vt, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function c(a, e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(a, n.key, n);
      }
    }
    return function(a, e, t) {
      return e && c(a.prototype, e), t && c(a, t), a;
    };
  })(), v = pt(), p = d(v), h = Gr();
  function d(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function _(c, a) {
    if (!(c instanceof a))
      throw new TypeError("Cannot call a class as a function");
  }
  var l = (function() {
    function c(a, e, t) {
      _(this, c), this.canvas = a, this.encodings = e, this.options = t;
    }
    return y(c, [{
      key: "render",
      value: function() {
        if (!this.canvas.getContext)
          throw new Error("The browser does not support canvas.");
        this.prepareCanvas();
        for (var e = 0; e < this.encodings.length; e++) {
          var t = (0, p.default)(this.options, this.encodings[e].options);
          this.drawCanvasBarcode(t, this.encodings[e]), this.drawCanvasText(t, this.encodings[e]), this.moveCanvasDrawing(this.encodings[e]);
        }
        this.restoreCanvas();
      }
    }, {
      key: "prepareCanvas",
      value: function() {
        var e = this.canvas.getContext("2d");
        e.save(), (0, h.calculateEncodingAttributes)(this.encodings, this.options, e);
        var t = (0, h.getTotalWidthOfEncodings)(this.encodings), n = (0, h.getMaximumHeightOfEncodings)(this.encodings);
        this.canvas.width = t + this.options.marginLeft + this.options.marginRight, this.canvas.height = n, e.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (e.fillStyle = this.options.background, e.fillRect(0, 0, this.canvas.width, this.canvas.height)), e.translate(this.options.marginLeft, 0);
      }
    }, {
      key: "drawCanvasBarcode",
      value: function(e, t) {
        var n = this.canvas.getContext("2d"), r = t.data, i;
        e.textPosition == "top" ? i = e.marginTop + e.fontSize + e.textMargin : i = e.marginTop, n.fillStyle = e.lineColor;
        for (var o = 0; o < r.length; o++) {
          var u = o * e.width + t.barcodePadding;
          r[o] === "1" ? n.fillRect(u, i, e.width, e.height) : r[o] && n.fillRect(u, i, e.width, e.height * r[o]);
        }
      }
    }, {
      key: "drawCanvasText",
      value: function(e, t) {
        var n = this.canvas.getContext("2d"), r = e.fontOptions + " " + e.fontSize + "px " + e.font;
        if (e.displayValue) {
          var i, o;
          e.textPosition == "top" ? o = e.marginTop + e.fontSize - e.textMargin : o = e.height + e.textMargin + e.marginTop + e.fontSize, n.font = r, e.textAlign == "left" || t.barcodePadding > 0 ? (i = 0, n.textAlign = "left") : e.textAlign == "right" ? (i = t.width - 1, n.textAlign = "right") : (i = t.width / 2, n.textAlign = "center"), n.fillText(t.text, i, o);
        }
      }
    }, {
      key: "moveCanvasDrawing",
      value: function(e) {
        var t = this.canvas.getContext("2d");
        t.translate(e.width, 0);
      }
    }, {
      key: "restoreCanvas",
      value: function() {
        var e = this.canvas.getContext("2d");
        e.restore();
      }
    }]), c;
  })();
  return vt.default = l, vt;
}
var dt = {}, Sr;
function Nn() {
  if (Sr) return dt;
  Sr = 1, Object.defineProperty(dt, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), v = pt(), p = d(v), h = Gr();
  function d(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function _(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  var l = "http://www.w3.org/2000/svg", c = (function() {
    function a(e, t, n) {
      _(this, a), this.svg = e, this.encodings = t, this.options = n, this.document = n.xmlDocument || document;
    }
    return y(a, [{
      key: "render",
      value: function() {
        var t = this.options.marginLeft;
        this.prepareSVG();
        for (var n = 0; n < this.encodings.length; n++) {
          var r = this.encodings[n], i = (0, p.default)(this.options, r.options), o = this.createGroup(t, i.marginTop, this.svg);
          this.setGroupOptions(o, i), this.drawSvgBarcode(o, i, r), this.drawSVGText(o, i, r), t += r.width;
        }
      }
    }, {
      key: "prepareSVG",
      value: function() {
        for (; this.svg.firstChild; )
          this.svg.removeChild(this.svg.firstChild);
        (0, h.calculateEncodingAttributes)(this.encodings, this.options);
        var t = (0, h.getTotalWidthOfEncodings)(this.encodings), n = (0, h.getMaximumHeightOfEncodings)(this.encodings), r = t + this.options.marginLeft + this.options.marginRight;
        this.setSvgAttributes(r, n), this.options.background && this.drawRect(0, 0, r, n, this.svg).setAttribute("fill", this.options.background);
      }
    }, {
      key: "drawSvgBarcode",
      value: function(t, n, r) {
        var i = r.data, o;
        n.textPosition == "top" ? o = n.fontSize + n.textMargin : o = 0;
        for (var u = 0, O = 0, I = 0; I < i.length; I++)
          O = I * n.width + r.barcodePadding, i[I] === "1" ? u++ : u > 0 && (this.drawRect(O - n.width * u, o, n.width * u, n.height, t), u = 0);
        u > 0 && this.drawRect(O - n.width * (u - 1), o, n.width * u, n.height, t);
      }
    }, {
      key: "drawSVGText",
      value: function(t, n, r) {
        var i = this.document.createElementNS(l, "text");
        if (n.displayValue) {
          var o, u;
          i.setAttribute("font-family", n.font), i.setAttribute("font-size", n.fontSize), n.fontOptions.includes("bold") && i.setAttribute("font-weight", "bold"), n.fontOptions.includes("italic") && i.setAttribute("font-style", "italic"), n.textPosition == "top" ? u = n.fontSize - n.textMargin : u = n.height + n.textMargin + n.fontSize, n.textAlign == "left" || r.barcodePadding > 0 ? (o = 0, i.setAttribute("text-anchor", "start")) : n.textAlign == "right" ? (o = r.width - 1, i.setAttribute("text-anchor", "end")) : (o = r.width / 2, i.setAttribute("text-anchor", "middle")), i.setAttribute("x", o), i.setAttribute("y", u), i.appendChild(this.document.createTextNode(r.text)), t.appendChild(i);
        }
      }
    }, {
      key: "setSvgAttributes",
      value: function(t, n) {
        var r = this.svg;
        r.setAttribute("width", t + "px"), r.setAttribute("height", n + "px"), r.setAttribute("x", "0px"), r.setAttribute("y", "0px"), r.setAttribute("viewBox", "0 0 " + t + " " + n), r.setAttribute("xmlns", l), r.setAttribute("version", "1.1");
      }
    }, {
      key: "createGroup",
      value: function(t, n, r) {
        var i = this.document.createElementNS(l, "g");
        return i.setAttribute("transform", "translate(" + t + ", " + n + ")"), r.appendChild(i), i;
      }
    }, {
      key: "setGroupOptions",
      value: function(t, n) {
        t.setAttribute("fill", n.lineColor);
      }
    }, {
      key: "drawRect",
      value: function(t, n, r, i, o) {
        var u = this.document.createElementNS(l, "rect");
        return u.setAttribute("x", t), u.setAttribute("y", n), u.setAttribute("width", r), u.setAttribute("height", i), o.appendChild(u), u;
      }
    }]), a;
  })();
  return dt.default = c, dt;
}
var st = {}, Mr;
function qn() {
  if (Mr) return st;
  Mr = 1, Object.defineProperty(st, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function h(d, _) {
      for (var l = 0; l < _.length; l++) {
        var c = _[l];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(d, c.key, c);
      }
    }
    return function(d, _, l) {
      return _ && h(d.prototype, _), l && h(d, l), d;
    };
  })();
  function v(h, d) {
    if (!(h instanceof d))
      throw new TypeError("Cannot call a class as a function");
  }
  var p = (function() {
    function h(d, _, l) {
      v(this, h), this.object = d, this.encodings = _, this.options = l;
    }
    return y(h, [{
      key: "render",
      value: function() {
        this.object.encodings = this.encodings;
      }
    }]), h;
  })();
  return st.default = p, st;
}
var Tr;
function $n() {
  if (Tr) return ht;
  Tr = 1, Object.defineProperty(ht, "__esModule", {
    value: !0
  });
  var y = Ln(), v = l(y), p = Nn(), h = l(p), d = qn(), _ = l(d);
  function l(c) {
    return c && c.__esModule ? c : { default: c };
  }
  return ht.default = { CanvasRenderer: v.default, SVGRenderer: h.default, ObjectRenderer: _.default }, ht;
}
var Oe = {}, Pr;
function Hr() {
  if (Pr) return Oe;
  Pr = 1, Object.defineProperty(Oe, "__esModule", {
    value: !0
  });
  function y(l, c) {
    if (!(l instanceof c))
      throw new TypeError("Cannot call a class as a function");
  }
  function v(l, c) {
    if (!l)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c && (typeof c == "object" || typeof c == "function") ? c : l;
  }
  function p(l, c) {
    if (typeof c != "function" && c !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof c);
    l.prototype = Object.create(c && c.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), c && (Object.setPrototypeOf ? Object.setPrototypeOf(l, c) : l.__proto__ = c);
  }
  var h = (function(l) {
    p(c, l);
    function c(a, e) {
      y(this, c);
      var t = v(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
      return t.name = "InvalidInputException", t.symbology = a, t.input = e, t.message = '"' + t.input + '" is not a valid input for ' + t.symbology, t;
    }
    return c;
  })(Error), d = (function(l) {
    p(c, l);
    function c() {
      y(this, c);
      var a = v(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
      return a.name = "InvalidElementException", a.message = "Not supported type to render on", a;
    }
    return c;
  })(Error), _ = (function(l) {
    p(c, l);
    function c() {
      y(this, c);
      var a = v(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
      return a.name = "NoElementException", a.message = "No element to render on.", a;
    }
    return c;
  })(Error);
  return Oe.InvalidInputException = h, Oe.InvalidElementException = d, Oe.NoElementException = _, Oe;
}
var Dr;
function jn() {
  if (Dr) return ut;
  Dr = 1, Object.defineProperty(ut, "__esModule", {
    value: !0
  });
  var y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, v = Cn(), p = l(v), h = $n(), d = l(h), _ = Hr();
  function l(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function c(t) {
    if (typeof t == "string")
      return a(t);
    if (Array.isArray(t)) {
      for (var n = [], r = 0; r < t.length; r++)
        n.push(c(t[r]));
      return n;
    } else {
      if (typeof HTMLCanvasElement < "u" && t instanceof HTMLImageElement)
        return e(t);
      if (t && t.nodeName && t.nodeName.toLowerCase() === "svg" || typeof SVGElement < "u" && t instanceof SVGElement)
        return {
          element: t,
          options: (0, p.default)(t),
          renderer: d.default.SVGRenderer
        };
      if (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement)
        return {
          element: t,
          options: (0, p.default)(t),
          renderer: d.default.CanvasRenderer
        };
      if (t && t.getContext)
        return {
          element: t,
          renderer: d.default.CanvasRenderer
        };
      if (t && (typeof t > "u" ? "undefined" : y(t)) === "object" && !t.nodeName)
        return {
          element: t,
          renderer: d.default.ObjectRenderer
        };
      throw new _.InvalidElementException();
    }
  }
  function a(t) {
    var n = document.querySelectorAll(t);
    if (n.length !== 0) {
      for (var r = [], i = 0; i < n.length; i++)
        r.push(c(n[i]));
      return r;
    }
  }
  function e(t) {
    var n = document.createElement("canvas");
    return {
      element: n,
      options: (0, p.default)(t),
      renderer: d.default.CanvasRenderer,
      afterRender: function() {
        t.setAttribute("src", n.toDataURL());
      }
    };
  }
  return ut.default = c, ut;
}
var _t = {}, Ir;
function Fn() {
  if (Ir) return _t;
  Ir = 1, Object.defineProperty(_t, "__esModule", {
    value: !0
  });
  var y = /* @__PURE__ */ (function() {
    function h(d, _) {
      for (var l = 0; l < _.length; l++) {
        var c = _[l];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(d, c.key, c);
      }
    }
    return function(d, _, l) {
      return _ && h(d.prototype, _), l && h(d, l), d;
    };
  })();
  function v(h, d) {
    if (!(h instanceof d))
      throw new TypeError("Cannot call a class as a function");
  }
  var p = (function() {
    function h(d) {
      v(this, h), this.api = d;
    }
    return y(h, [{
      key: "handleCatch",
      value: function(_) {
        if (_.name === "InvalidInputException")
          if (this.api._options.valid !== this.api._defaults.valid)
            this.api._options.valid(!1);
          else
            throw _.message;
        else
          throw _;
        this.api.render = function() {
        };
      }
    }, {
      key: "wrapBarcodeCall",
      value: function(_) {
        try {
          var l = _.apply(void 0, arguments);
          return this.api._options.valid(!0), l;
        } catch (c) {
          return this.handleCatch(c), this.api;
        }
      }
    }]), h;
  })();
  return _t.default = p, _t;
}
var xt, Br;
function Gn() {
  if (Br) return xt;
  Br = 1;
  var y = In(), v = I(y), p = pt(), h = I(p), d = Bn(), _ = I(d), l = kn(), c = I(l), a = jn(), e = I(a), t = jr(), n = I(t), r = Fn(), i = I(r), o = Hr(), u = Fr(), O = I(u);
  function I(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var D = function() {
  }, j = function(x, s, f) {
    var b = new D();
    if (typeof x > "u")
      throw Error("No element to render on was provided.");
    return b._renderProperties = (0, e.default)(x), b._encodings = [], b._options = O.default, b._errorHandler = new i.default(b), typeof s < "u" && (f = f || {}, f.format || (f.format = S()), b.options(f)[f.format](s, f).render()), b;
  };
  j.getModule = function(g) {
    return v.default[g];
  };
  for (var Q in v.default)
    v.default.hasOwnProperty(Q) && k(v.default, Q);
  function k(g, x) {
    D.prototype[x] = D.prototype[x.toUpperCase()] = D.prototype[x.toLowerCase()] = function(s, f) {
      var b = this;
      return b._errorHandler.wrapBarcodeCall(function() {
        f.text = typeof f.text > "u" ? void 0 : "" + f.text;
        var w = (0, h.default)(b._options, f);
        w = (0, n.default)(w);
        var T = g[x], q = B(s, T, w);
        return b._encodings.push(q), b;
      });
    };
  }
  function B(g, x, s) {
    g = "" + g;
    var f = new x(g, s);
    if (!f.valid())
      throw new o.InvalidInputException(f.constructor.name, g);
    var b = f.encode();
    b = (0, _.default)(b);
    for (var w = 0; w < b.length; w++)
      b[w].options = (0, h.default)(s, b[w].options);
    return b;
  }
  function S() {
    return v.default.CODE128 ? "CODE128" : Object.keys(v.default)[0];
  }
  D.prototype.options = function(g) {
    return this._options = (0, h.default)(this._options, g), this;
  }, D.prototype.blank = function(g) {
    var x = new Array(g + 1).join("0");
    return this._encodings.push({ data: x }), this;
  }, D.prototype.init = function() {
    if (this._renderProperties) {
      Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]);
      var g;
      for (var x in this._renderProperties) {
        g = this._renderProperties[x];
        var s = (0, h.default)(this._options, g.options);
        s.format == "auto" && (s.format = S()), this._errorHandler.wrapBarcodeCall(function() {
          var f = s.value, b = v.default[s.format.toUpperCase()], w = B(f, b, s);
          P(g, w, s);
        });
      }
    }
  }, D.prototype.render = function() {
    if (!this._renderProperties)
      throw new o.NoElementException();
    if (Array.isArray(this._renderProperties))
      for (var g = 0; g < this._renderProperties.length; g++)
        P(this._renderProperties[g], this._encodings, this._options);
    else
      P(this._renderProperties, this._encodings, this._options);
    return this;
  }, D.prototype._defaults = O.default;
  function P(g, x, s) {
    x = (0, _.default)(x);
    for (var f = 0; f < x.length; f++)
      x[f].options = (0, h.default)(s, x[f].options), (0, c.default)(x[f].options);
    (0, c.default)(s);
    var b = g.renderer, w = new b(g.element, x, s);
    w.render(), g.afterRender && g.afterRender();
  }
  return typeof window < "u" && (window.JsBarcode = j), typeof jQuery < "u" && (jQuery.fn.JsBarcode = function(g, x) {
    var s = [];
    return jQuery(this).each(function() {
      s.push(this);
    }), j(s, g, x);
  }), xt = j, xt;
}
var Hn = Gn();
const Un = /* @__PURE__ */ Cr(Hn);
var mt = { exports: {} }, kr;
function Xn() {
  return kr || (kr = 1, (function(y, v) {
    var p = (function() {
      var h = function(k, B) {
        var S = 236, P = 17, g = k, x = _[B], s = null, f = 0, b = null, w = [], T = {}, q = function(m, A) {
          f = g * 4 + 17, s = (function(E) {
            for (var R = new Array(E), M = 0; M < E; M += 1) {
              R[M] = new Array(E);
              for (var C = 0; C < E; C += 1)
                R[M][C] = null;
            }
            return R;
          })(f), F(0, 0), F(f - 7, 0), F(0, f - 7), H(), X(), K(m, A), g >= 7 && z(m), b == null && (b = Ur(g, x, w)), ne(b, A);
        }, F = function(m, A) {
          for (var E = -1; E <= 7; E += 1)
            if (!(m + E <= -1 || f <= m + E))
              for (var R = -1; R <= 7; R += 1)
                A + R <= -1 || f <= A + R || (0 <= E && E <= 6 && (R == 0 || R == 6) || 0 <= R && R <= 6 && (E == 0 || E == 6) || 2 <= E && E <= 4 && 2 <= R && R <= 4 ? s[m + E][A + R] = !0 : s[m + E][A + R] = !1);
        }, G = function() {
          for (var m = 0, A = 0, E = 0; E < 8; E += 1) {
            q(!0, E);
            var R = c.getLostPoint(T);
            (E == 0 || m > R) && (m = R, A = E);
          }
          return A;
        }, X = function() {
          for (var m = 8; m < f - 8; m += 1)
            s[m][6] == null && (s[m][6] = m % 2 == 0);
          for (var A = 8; A < f - 8; A += 1)
            s[6][A] == null && (s[6][A] = A % 2 == 0);
        }, H = function() {
          for (var m = c.getPatternPosition(g), A = 0; A < m.length; A += 1)
            for (var E = 0; E < m.length; E += 1) {
              var R = m[A], M = m[E];
              if (s[R][M] == null)
                for (var C = -2; C <= 2; C += 1)
                  for (var N = -2; N <= 2; N += 1)
                    C == -2 || C == 2 || N == -2 || N == 2 || C == 0 && N == 0 ? s[R + C][M + N] = !0 : s[R + C][M + N] = !1;
            }
        }, z = function(m) {
          for (var A = c.getBCHTypeNumber(g), E = 0; E < 18; E += 1) {
            var R = !m && (A >> E & 1) == 1;
            s[Math.floor(E / 3)][E % 3 + f - 8 - 3] = R;
          }
          for (var E = 0; E < 18; E += 1) {
            var R = !m && (A >> E & 1) == 1;
            s[E % 3 + f - 8 - 3][Math.floor(E / 3)] = R;
          }
        }, K = function(m, A) {
          for (var E = x << 3 | A, R = c.getBCHTypeInfo(E), M = 0; M < 15; M += 1) {
            var C = !m && (R >> M & 1) == 1;
            M < 6 ? s[M][8] = C : M < 8 ? s[M + 1][8] = C : s[f - 15 + M][8] = C;
          }
          for (var M = 0; M < 15; M += 1) {
            var C = !m && (R >> M & 1) == 1;
            M < 8 ? s[8][f - M - 1] = C : M < 9 ? s[8][15 - M - 1 + 1] = C : s[8][15 - M - 1] = C;
          }
          s[f - 8][8] = !m;
        }, ne = function(m, A) {
          for (var E = -1, R = f - 1, M = 7, C = 0, N = c.getMaskFunction(A), L = f - 1; L > 0; L -= 2)
            for (L == 6 && (L -= 1); ; ) {
              for (var U = 0; U < 2; U += 1)
                if (s[R][L - U] == null) {
                  var Y = !1;
                  C < m.length && (Y = (m[C] >>> M & 1) == 1);
                  var $ = N(R, L - U);
                  $ && (Y = !Y), s[R][L - U] = Y, M -= 1, M == -1 && (C += 1, M = 7);
                }
              if (R += E, R < 0 || f <= R) {
                R -= E, E = -E;
                break;
              }
            }
        }, _e = function(m, A) {
          for (var E = 0, R = 0, M = 0, C = new Array(A.length), N = new Array(A.length), L = 0; L < A.length; L += 1) {
            var U = A[L].dataCount, Y = A[L].totalCount - U;
            R = Math.max(R, U), M = Math.max(M, Y), C[L] = new Array(U);
            for (var $ = 0; $ < C[L].length; $ += 1)
              C[L][$] = 255 & m.getBuffer()[$ + E];
            E += U;
            var te = c.getErrorCorrectPolynomial(Y), re = e(C[L], te.getLength() - 1), At = re.mod(te);
            N[L] = new Array(te.getLength() - 1);
            for (var $ = 0; $ < N[L].length; $ += 1) {
              var Rt = $ + At.getLength() - N[L].length;
              N[L][$] = Rt >= 0 ? At.getAt(Rt) : 0;
            }
          }
          for (var St = 0, $ = 0; $ < A.length; $ += 1)
            St += A[$].totalCount;
          for (var Et = new Array(St), Be = 0, $ = 0; $ < R; $ += 1)
            for (var L = 0; L < A.length; L += 1)
              $ < C[L].length && (Et[Be] = C[L][$], Be += 1);
          for (var $ = 0; $ < M; $ += 1)
            for (var L = 0; L < A.length; L += 1)
              $ < N[L].length && (Et[Be] = N[L][$], Be += 1);
          return Et;
        }, Ur = function(m, A, E) {
          for (var R = t.getRSBlocks(m, A), M = n(), C = 0; C < E.length; C += 1) {
            var N = E[C];
            M.put(N.getMode(), 4), M.put(N.getLength(), c.getLengthInBits(N.getMode(), m)), N.write(M);
          }
          for (var L = 0, C = 0; C < R.length; C += 1)
            L += R[C].dataCount;
          if (M.getLengthInBits() > L * 8)
            throw "code length overflow. (" + M.getLengthInBits() + ">" + L * 8 + ")";
          for (M.getLengthInBits() + 4 <= L * 8 && M.put(0, 4); M.getLengthInBits() % 8 != 0; )
            M.putBit(!1);
          for (; !(M.getLengthInBits() >= L * 8 || (M.put(S, 8), M.getLengthInBits() >= L * 8)); )
            M.put(P, 8);
          return _e(M, R);
        };
        T.addData = function(m, A) {
          A = A || "Byte";
          var E = null;
          switch (A) {
            case "Numeric":
              E = r(m);
              break;
            case "Alphanumeric":
              E = i(m);
              break;
            case "Byte":
              E = o(m);
              break;
            case "Kanji":
              E = u(m);
              break;
            default:
              throw "mode:" + A;
          }
          w.push(E), b = null;
        }, T.isDark = function(m, A) {
          if (m < 0 || f <= m || A < 0 || f <= A)
            throw m + "," + A;
          return s[m][A];
        }, T.getModuleCount = function() {
          return f;
        }, T.make = function() {
          if (g < 1) {
            for (var m = 1; m < 40; m++) {
              for (var A = t.getRSBlocks(m, x), E = n(), R = 0; R < w.length; R++) {
                var M = w[R];
                E.put(M.getMode(), 4), E.put(M.getLength(), c.getLengthInBits(M.getMode(), m)), M.write(E);
              }
              for (var C = 0, R = 0; R < A.length; R++)
                C += A[R].dataCount;
              if (E.getLengthInBits() <= C * 8)
                break;
            }
            g = m;
          }
          q(!1, G());
        }, T.createTableTag = function(m, A) {
          m = m || 2, A = typeof A > "u" ? m * 4 : A;
          var E = "";
          E += '<table style="', E += " border-width: 0px; border-style: none;", E += " border-collapse: collapse;", E += " padding: 0px; margin: " + A + "px;", E += '">', E += "<tbody>";
          for (var R = 0; R < T.getModuleCount(); R += 1) {
            E += "<tr>";
            for (var M = 0; M < T.getModuleCount(); M += 1)
              E += '<td style="', E += " border-width: 0px; border-style: none;", E += " border-collapse: collapse;", E += " padding: 0px; margin: 0px;", E += " width: " + m + "px;", E += " height: " + m + "px;", E += " background-color: ", E += T.isDark(R, M) ? "#000000" : "#ffffff", E += ";", E += '"/>';
            E += "</tr>";
          }
          return E += "</tbody>", E += "</table>", E;
        }, T.createSvgTag = function(m, A, E, R) {
          var M = {};
          typeof arguments[0] == "object" && (M = arguments[0], m = M.cellSize, A = M.margin, E = M.alt, R = M.title), m = m || 2, A = typeof A > "u" ? m * 4 : A, E = typeof E == "string" ? { text: E } : E || {}, E.text = E.text || null, E.id = E.text ? E.id || "qrcode-description" : null, R = typeof R == "string" ? { text: R } : R || {}, R.text = R.text || null, R.id = R.text ? R.id || "qrcode-title" : null;
          var C = T.getModuleCount() * m + A * 2, N, L, U, Y, $ = "", te;
          for (te = "l" + m + ",0 0," + m + " -" + m + ",0 0,-" + m + "z ", $ += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', $ += M.scalable ? "" : ' width="' + C + 'px" height="' + C + 'px"', $ += ' viewBox="0 0 ' + C + " " + C + '" ', $ += ' preserveAspectRatio="xMinYMin meet"', $ += R.text || E.text ? ' role="img" aria-labelledby="' + ge([R.id, E.id].join(" ").trim()) + '"' : "", $ += ">", $ += R.text ? '<title id="' + ge(R.id) + '">' + ge(R.text) + "</title>" : "", $ += E.text ? '<description id="' + ge(E.id) + '">' + ge(E.text) + "</description>" : "", $ += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', $ += '<path d="', U = 0; U < T.getModuleCount(); U += 1)
            for (Y = U * m + A, N = 0; N < T.getModuleCount(); N += 1)
              T.isDark(U, N) && (L = N * m + A, $ += "M" + L + "," + Y + te);
          return $ += '" stroke="transparent" fill="black"/>', $ += "</svg>", $;
        }, T.createDataURL = function(m, A) {
          m = m || 2, A = typeof A > "u" ? m * 4 : A;
          var E = T.getModuleCount() * m + A * 2, R = A, M = E - A;
          return Q(E, E, function(C, N) {
            if (R <= C && C < M && R <= N && N < M) {
              var L = Math.floor((C - R) / m), U = Math.floor((N - R) / m);
              return T.isDark(U, L) ? 0 : 1;
            } else
              return 1;
          });
        }, T.createImgTag = function(m, A, E) {
          m = m || 2, A = typeof A > "u" ? m * 4 : A;
          var R = T.getModuleCount() * m + A * 2, M = "";
          return M += "<img", M += ' src="', M += T.createDataURL(m, A), M += '"', M += ' width="', M += R, M += '"', M += ' height="', M += R, M += '"', E && (M += ' alt="', M += ge(E), M += '"'), M += "/>", M;
        };
        var ge = function(m) {
          for (var A = "", E = 0; E < m.length; E += 1) {
            var R = m.charAt(E);
            switch (R) {
              case "<":
                A += "&lt;";
                break;
              case ">":
                A += "&gt;";
                break;
              case "&":
                A += "&amp;";
                break;
              case '"':
                A += "&quot;";
                break;
              default:
                A += R;
                break;
            }
          }
          return A;
        }, Xr = function(m) {
          var A = 1;
          m = typeof m > "u" ? A * 2 : m;
          var E = T.getModuleCount() * A + m * 2, R = m, M = E - m, C, N, L, U, Y, $ = {
            "██": "█",
            "█ ": "▀",
            " █": "▄",
            "  ": " "
          }, te = {
            "██": "▀",
            "█ ": "▀",
            " █": " ",
            "  ": " "
          }, re = "";
          for (C = 0; C < E; C += 2) {
            for (L = Math.floor((C - R) / A), U = Math.floor((C + 1 - R) / A), N = 0; N < E; N += 1)
              Y = "█", R <= N && N < M && R <= C && C < M && T.isDark(L, Math.floor((N - R) / A)) && (Y = " "), R <= N && N < M && R <= C + 1 && C + 1 < M && T.isDark(U, Math.floor((N - R) / A)) ? Y += " " : Y += "█", re += m < 1 && C + 1 >= M ? te[Y] : $[Y];
            re += `
`;
          }
          return E % 2 && m > 0 ? re.substring(0, re.length - E - 1) + Array(E + 1).join("▀") : re.substring(0, re.length - 1);
        };
        return T.createASCII = function(m, A) {
          if (m = m || 1, m < 2)
            return Xr(A);
          m -= 1, A = typeof A > "u" ? m * 2 : A;
          var E = T.getModuleCount() * m + A * 2, R = A, M = E - A, C, N, L, U, Y = Array(m + 1).join("██"), $ = Array(m + 1).join("  "), te = "", re = "";
          for (C = 0; C < E; C += 1) {
            for (L = Math.floor((C - R) / m), re = "", N = 0; N < E; N += 1)
              U = 1, R <= N && N < M && R <= C && C < M && T.isDark(L, Math.floor((N - R) / m)) && (U = 0), re += U ? Y : $;
            for (L = 0; L < m; L += 1)
              te += re + `
`;
          }
          return te.substring(0, te.length - 1);
        }, T.renderTo2dContext = function(m, A) {
          A = A || 2;
          for (var E = T.getModuleCount(), R = 0; R < E; R++)
            for (var M = 0; M < E; M++)
              m.fillStyle = T.isDark(R, M) ? "black" : "white", m.fillRect(R * A, M * A, A, A);
        }, T;
      };
      h.stringToBytesFuncs = {
        default: function(k) {
          for (var B = [], S = 0; S < k.length; S += 1) {
            var P = k.charCodeAt(S);
            B.push(P & 255);
          }
          return B;
        }
      }, h.stringToBytes = h.stringToBytesFuncs.default, h.createStringToBytes = function(k, B) {
        var S = (function() {
          for (var g = D(k), x = function() {
            var X = g.read();
            if (X == -1) throw "eof";
            return X;
          }, s = 0, f = {}; ; ) {
            var b = g.read();
            if (b == -1) break;
            var w = x(), T = x(), q = x(), F = String.fromCharCode(b << 8 | w), G = T << 8 | q;
            f[F] = G, s += 1;
          }
          if (s != B)
            throw s + " != " + B;
          return f;
        })(), P = 63;
        return function(g) {
          for (var x = [], s = 0; s < g.length; s += 1) {
            var f = g.charCodeAt(s);
            if (f < 128)
              x.push(f);
            else {
              var b = S[g.charAt(s)];
              typeof b == "number" ? (b & 255) == b ? x.push(b) : (x.push(b >>> 8), x.push(b & 255)) : x.push(P);
            }
          }
          return x;
        };
      };
      var d = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
      }, _ = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
      }, l = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      }, c = (function() {
        var k = [
          [],
          [6, 18],
          [6, 22],
          [6, 26],
          [6, 30],
          [6, 34],
          [6, 22, 38],
          [6, 24, 42],
          [6, 26, 46],
          [6, 28, 50],
          [6, 30, 54],
          [6, 32, 58],
          [6, 34, 62],
          [6, 26, 46, 66],
          [6, 26, 48, 70],
          [6, 26, 50, 74],
          [6, 30, 54, 78],
          [6, 30, 56, 82],
          [6, 30, 58, 86],
          [6, 34, 62, 90],
          [6, 28, 50, 72, 94],
          [6, 26, 50, 74, 98],
          [6, 30, 54, 78, 102],
          [6, 28, 54, 80, 106],
          [6, 32, 58, 84, 110],
          [6, 30, 58, 86, 114],
          [6, 34, 62, 90, 118],
          [6, 26, 50, 74, 98, 122],
          [6, 30, 54, 78, 102, 126],
          [6, 26, 52, 78, 104, 130],
          [6, 30, 56, 82, 108, 134],
          [6, 34, 60, 86, 112, 138],
          [6, 30, 58, 86, 114, 142],
          [6, 34, 62, 90, 118, 146],
          [6, 30, 54, 78, 102, 126, 150],
          [6, 24, 50, 76, 102, 128, 154],
          [6, 28, 54, 80, 106, 132, 158],
          [6, 32, 58, 84, 110, 136, 162],
          [6, 26, 54, 82, 110, 138, 166],
          [6, 30, 58, 86, 114, 142, 170]
        ], B = 1335, S = 7973, P = 21522, g = {}, x = function(s) {
          for (var f = 0; s != 0; )
            f += 1, s >>>= 1;
          return f;
        };
        return g.getBCHTypeInfo = function(s) {
          for (var f = s << 10; x(f) - x(B) >= 0; )
            f ^= B << x(f) - x(B);
          return (s << 10 | f) ^ P;
        }, g.getBCHTypeNumber = function(s) {
          for (var f = s << 12; x(f) - x(S) >= 0; )
            f ^= S << x(f) - x(S);
          return s << 12 | f;
        }, g.getPatternPosition = function(s) {
          return k[s - 1];
        }, g.getMaskFunction = function(s) {
          switch (s) {
            case l.PATTERN000:
              return function(f, b) {
                return (f + b) % 2 == 0;
              };
            case l.PATTERN001:
              return function(f, b) {
                return f % 2 == 0;
              };
            case l.PATTERN010:
              return function(f, b) {
                return b % 3 == 0;
              };
            case l.PATTERN011:
              return function(f, b) {
                return (f + b) % 3 == 0;
              };
            case l.PATTERN100:
              return function(f, b) {
                return (Math.floor(f / 2) + Math.floor(b / 3)) % 2 == 0;
              };
            case l.PATTERN101:
              return function(f, b) {
                return f * b % 2 + f * b % 3 == 0;
              };
            case l.PATTERN110:
              return function(f, b) {
                return (f * b % 2 + f * b % 3) % 2 == 0;
              };
            case l.PATTERN111:
              return function(f, b) {
                return (f * b % 3 + (f + b) % 2) % 2 == 0;
              };
            default:
              throw "bad maskPattern:" + s;
          }
        }, g.getErrorCorrectPolynomial = function(s) {
          for (var f = e([1], 0), b = 0; b < s; b += 1)
            f = f.multiply(e([1, a.gexp(b)], 0));
          return f;
        }, g.getLengthInBits = function(s, f) {
          if (1 <= f && f < 10)
            switch (s) {
              case d.MODE_NUMBER:
                return 10;
              case d.MODE_ALPHA_NUM:
                return 9;
              case d.MODE_8BIT_BYTE:
                return 8;
              case d.MODE_KANJI:
                return 8;
              default:
                throw "mode:" + s;
            }
          else if (f < 27)
            switch (s) {
              case d.MODE_NUMBER:
                return 12;
              case d.MODE_ALPHA_NUM:
                return 11;
              case d.MODE_8BIT_BYTE:
                return 16;
              case d.MODE_KANJI:
                return 10;
              default:
                throw "mode:" + s;
            }
          else if (f < 41)
            switch (s) {
              case d.MODE_NUMBER:
                return 14;
              case d.MODE_ALPHA_NUM:
                return 13;
              case d.MODE_8BIT_BYTE:
                return 16;
              case d.MODE_KANJI:
                return 12;
              default:
                throw "mode:" + s;
            }
          else
            throw "type:" + f;
        }, g.getLostPoint = function(s) {
          for (var f = s.getModuleCount(), b = 0, w = 0; w < f; w += 1)
            for (var T = 0; T < f; T += 1) {
              for (var q = 0, F = s.isDark(w, T), G = -1; G <= 1; G += 1)
                if (!(w + G < 0 || f <= w + G))
                  for (var X = -1; X <= 1; X += 1)
                    T + X < 0 || f <= T + X || G == 0 && X == 0 || F == s.isDark(w + G, T + X) && (q += 1);
              q > 5 && (b += 3 + q - 5);
            }
          for (var w = 0; w < f - 1; w += 1)
            for (var T = 0; T < f - 1; T += 1) {
              var H = 0;
              s.isDark(w, T) && (H += 1), s.isDark(w + 1, T) && (H += 1), s.isDark(w, T + 1) && (H += 1), s.isDark(w + 1, T + 1) && (H += 1), (H == 0 || H == 4) && (b += 3);
            }
          for (var w = 0; w < f; w += 1)
            for (var T = 0; T < f - 6; T += 1)
              s.isDark(w, T) && !s.isDark(w, T + 1) && s.isDark(w, T + 2) && s.isDark(w, T + 3) && s.isDark(w, T + 4) && !s.isDark(w, T + 5) && s.isDark(w, T + 6) && (b += 40);
          for (var T = 0; T < f; T += 1)
            for (var w = 0; w < f - 6; w += 1)
              s.isDark(w, T) && !s.isDark(w + 1, T) && s.isDark(w + 2, T) && s.isDark(w + 3, T) && s.isDark(w + 4, T) && !s.isDark(w + 5, T) && s.isDark(w + 6, T) && (b += 40);
          for (var z = 0, T = 0; T < f; T += 1)
            for (var w = 0; w < f; w += 1)
              s.isDark(w, T) && (z += 1);
          var K = Math.abs(100 * z / f / f - 50) / 5;
          return b += K * 10, b;
        }, g;
      })(), a = (function() {
        for (var k = new Array(256), B = new Array(256), S = 0; S < 8; S += 1)
          k[S] = 1 << S;
        for (var S = 8; S < 256; S += 1)
          k[S] = k[S - 4] ^ k[S - 5] ^ k[S - 6] ^ k[S - 8];
        for (var S = 0; S < 255; S += 1)
          B[k[S]] = S;
        var P = {};
        return P.glog = function(g) {
          if (g < 1)
            throw "glog(" + g + ")";
          return B[g];
        }, P.gexp = function(g) {
          for (; g < 0; )
            g += 255;
          for (; g >= 256; )
            g -= 255;
          return k[g];
        }, P;
      })();
      function e(k, B) {
        if (typeof k.length > "u")
          throw k.length + "/" + B;
        var S = (function() {
          for (var g = 0; g < k.length && k[g] == 0; )
            g += 1;
          for (var x = new Array(k.length - g + B), s = 0; s < k.length - g; s += 1)
            x[s] = k[s + g];
          return x;
        })(), P = {};
        return P.getAt = function(g) {
          return S[g];
        }, P.getLength = function() {
          return S.length;
        }, P.multiply = function(g) {
          for (var x = new Array(P.getLength() + g.getLength() - 1), s = 0; s < P.getLength(); s += 1)
            for (var f = 0; f < g.getLength(); f += 1)
              x[s + f] ^= a.gexp(a.glog(P.getAt(s)) + a.glog(g.getAt(f)));
          return e(x, 0);
        }, P.mod = function(g) {
          if (P.getLength() - g.getLength() < 0)
            return P;
          for (var x = a.glog(P.getAt(0)) - a.glog(g.getAt(0)), s = new Array(P.getLength()), f = 0; f < P.getLength(); f += 1)
            s[f] = P.getAt(f);
          for (var f = 0; f < g.getLength(); f += 1)
            s[f] ^= a.gexp(a.glog(g.getAt(f)) + x);
          return e(s, 0).mod(g);
        }, P;
      }
      var t = (function() {
        var k = [
          // L
          // M
          // Q
          // H
          // 1
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          // 2
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          // 3
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          // 4
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          // 5
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          // 6
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          // 7
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          // 8
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          // 9
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          // 10
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          // 11
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          // 12
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          // 13
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          // 14
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          // 15
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12, 7, 37, 13],
          // 16
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          // 17
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          // 18
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          // 19
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          // 20
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          // 21
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          // 22
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          // 23
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          // 24
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          // 25
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          // 26
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          // 27
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          // 28
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          // 29
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          // 30
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          // 31
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          // 32
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          // 33
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          // 34
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          // 35
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          // 36
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          // 37
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          // 38
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          // 39
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          // 40
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16]
        ], B = function(g, x) {
          var s = {};
          return s.totalCount = g, s.dataCount = x, s;
        }, S = {}, P = function(g, x) {
          switch (x) {
            case _.L:
              return k[(g - 1) * 4 + 0];
            case _.M:
              return k[(g - 1) * 4 + 1];
            case _.Q:
              return k[(g - 1) * 4 + 2];
            case _.H:
              return k[(g - 1) * 4 + 3];
            default:
              return;
          }
        };
        return S.getRSBlocks = function(g, x) {
          var s = P(g, x);
          if (typeof s > "u")
            throw "bad rs block @ typeNumber:" + g + "/errorCorrectionLevel:" + x;
          for (var f = s.length / 3, b = [], w = 0; w < f; w += 1)
            for (var T = s[w * 3 + 0], q = s[w * 3 + 1], F = s[w * 3 + 2], G = 0; G < T; G += 1)
              b.push(B(q, F));
          return b;
        }, S;
      })(), n = function() {
        var k = [], B = 0, S = {};
        return S.getBuffer = function() {
          return k;
        }, S.getAt = function(P) {
          var g = Math.floor(P / 8);
          return (k[g] >>> 7 - P % 8 & 1) == 1;
        }, S.put = function(P, g) {
          for (var x = 0; x < g; x += 1)
            S.putBit((P >>> g - x - 1 & 1) == 1);
        }, S.getLengthInBits = function() {
          return B;
        }, S.putBit = function(P) {
          var g = Math.floor(B / 8);
          k.length <= g && k.push(0), P && (k[g] |= 128 >>> B % 8), B += 1;
        }, S;
      }, r = function(k) {
        var B = d.MODE_NUMBER, S = k, P = {};
        P.getMode = function() {
          return B;
        }, P.getLength = function(s) {
          return S.length;
        }, P.write = function(s) {
          for (var f = S, b = 0; b + 2 < f.length; )
            s.put(g(f.substring(b, b + 3)), 10), b += 3;
          b < f.length && (f.length - b == 1 ? s.put(g(f.substring(b, b + 1)), 4) : f.length - b == 2 && s.put(g(f.substring(b, b + 2)), 7));
        };
        var g = function(s) {
          for (var f = 0, b = 0; b < s.length; b += 1)
            f = f * 10 + x(s.charAt(b));
          return f;
        }, x = function(s) {
          if ("0" <= s && s <= "9")
            return s.charCodeAt(0) - 48;
          throw "illegal char :" + s;
        };
        return P;
      }, i = function(k) {
        var B = d.MODE_ALPHA_NUM, S = k, P = {};
        P.getMode = function() {
          return B;
        }, P.getLength = function(x) {
          return S.length;
        }, P.write = function(x) {
          for (var s = S, f = 0; f + 1 < s.length; )
            x.put(
              g(s.charAt(f)) * 45 + g(s.charAt(f + 1)),
              11
            ), f += 2;
          f < s.length && x.put(g(s.charAt(f)), 6);
        };
        var g = function(x) {
          if ("0" <= x && x <= "9")
            return x.charCodeAt(0) - 48;
          if ("A" <= x && x <= "Z")
            return x.charCodeAt(0) - 65 + 10;
          switch (x) {
            case " ":
              return 36;
            case "$":
              return 37;
            case "%":
              return 38;
            case "*":
              return 39;
            case "+":
              return 40;
            case "-":
              return 41;
            case ".":
              return 42;
            case "/":
              return 43;
            case ":":
              return 44;
            default:
              throw "illegal char :" + x;
          }
        };
        return P;
      }, o = function(k) {
        var B = d.MODE_8BIT_BYTE, S = h.stringToBytes(k), P = {};
        return P.getMode = function() {
          return B;
        }, P.getLength = function(g) {
          return S.length;
        }, P.write = function(g) {
          for (var x = 0; x < S.length; x += 1)
            g.put(S[x], 8);
        }, P;
      }, u = function(k) {
        var B = d.MODE_KANJI, S = h.stringToBytesFuncs.SJIS;
        if (!S)
          throw "sjis not supported.";
        (function(x, s) {
          var f = S(x);
          if (f.length != 2 || (f[0] << 8 | f[1]) != s)
            throw "sjis not supported.";
        })("友", 38726);
        var P = S(k), g = {};
        return g.getMode = function() {
          return B;
        }, g.getLength = function(x) {
          return ~~(P.length / 2);
        }, g.write = function(x) {
          for (var s = P, f = 0; f + 1 < s.length; ) {
            var b = (255 & s[f]) << 8 | 255 & s[f + 1];
            if (33088 <= b && b <= 40956)
              b -= 33088;
            else if (57408 <= b && b <= 60351)
              b -= 49472;
            else
              throw "illegal char at " + (f + 1) + "/" + b;
            b = (b >>> 8 & 255) * 192 + (b & 255), x.put(b, 13), f += 2;
          }
          if (f < s.length)
            throw "illegal char at " + (f + 1);
        }, g;
      }, O = function() {
        var k = [], B = {};
        return B.writeByte = function(S) {
          k.push(S & 255);
        }, B.writeShort = function(S) {
          B.writeByte(S), B.writeByte(S >>> 8);
        }, B.writeBytes = function(S, P, g) {
          P = P || 0, g = g || S.length;
          for (var x = 0; x < g; x += 1)
            B.writeByte(S[x + P]);
        }, B.writeString = function(S) {
          for (var P = 0; P < S.length; P += 1)
            B.writeByte(S.charCodeAt(P));
        }, B.toByteArray = function() {
          return k;
        }, B.toString = function() {
          var S = "";
          S += "[";
          for (var P = 0; P < k.length; P += 1)
            P > 0 && (S += ","), S += k[P];
          return S += "]", S;
        }, B;
      }, I = function() {
        var k = 0, B = 0, S = 0, P = "", g = {}, x = function(f) {
          P += String.fromCharCode(s(f & 63));
        }, s = function(f) {
          if (!(f < 0)) {
            if (f < 26)
              return 65 + f;
            if (f < 52)
              return 97 + (f - 26);
            if (f < 62)
              return 48 + (f - 52);
            if (f == 62)
              return 43;
            if (f == 63)
              return 47;
          }
          throw "n:" + f;
        };
        return g.writeByte = function(f) {
          for (k = k << 8 | f & 255, B += 8, S += 1; B >= 6; )
            x(k >>> B - 6), B -= 6;
        }, g.flush = function() {
          if (B > 0 && (x(k << 6 - B), k = 0, B = 0), S % 3 != 0)
            for (var f = 3 - S % 3, b = 0; b < f; b += 1)
              P += "=";
        }, g.toString = function() {
          return P;
        }, g;
      }, D = function(k) {
        var B = k, S = 0, P = 0, g = 0, x = {};
        x.read = function() {
          for (; g < 8; ) {
            if (S >= B.length) {
              if (g == 0)
                return -1;
              throw "unexpected end of file./" + g;
            }
            var f = B.charAt(S);
            if (S += 1, f == "=")
              return g = 0, -1;
            if (f.match(/^\s$/))
              continue;
            P = P << 6 | s(f.charCodeAt(0)), g += 6;
          }
          var b = P >>> g - 8 & 255;
          return g -= 8, b;
        };
        var s = function(f) {
          if (65 <= f && f <= 90)
            return f - 65;
          if (97 <= f && f <= 122)
            return f - 97 + 26;
          if (48 <= f && f <= 57)
            return f - 48 + 52;
          if (f == 43)
            return 62;
          if (f == 47)
            return 63;
          throw "c:" + f;
        };
        return x;
      }, j = function(k, B) {
        var S = k, P = B, g = new Array(k * B), x = {};
        x.setPixel = function(w, T, q) {
          g[T * S + w] = q;
        }, x.write = function(w) {
          w.writeString("GIF87a"), w.writeShort(S), w.writeShort(P), w.writeByte(128), w.writeByte(0), w.writeByte(0), w.writeByte(0), w.writeByte(0), w.writeByte(0), w.writeByte(255), w.writeByte(255), w.writeByte(255), w.writeString(","), w.writeShort(0), w.writeShort(0), w.writeShort(S), w.writeShort(P), w.writeByte(0);
          var T = 2, q = f(T);
          w.writeByte(T);
          for (var F = 0; q.length - F > 255; )
            w.writeByte(255), w.writeBytes(q, F, 255), F += 255;
          w.writeByte(q.length - F), w.writeBytes(q, F, q.length - F), w.writeByte(0), w.writeString(";");
        };
        var s = function(w) {
          var T = w, q = 0, F = 0, G = {};
          return G.write = function(X, H) {
            if (X >>> H)
              throw "length over";
            for (; q + H >= 8; )
              T.writeByte(255 & (X << q | F)), H -= 8 - q, X >>>= 8 - q, F = 0, q = 0;
            F = X << q | F, q = q + H;
          }, G.flush = function() {
            q > 0 && T.writeByte(F);
          }, G;
        }, f = function(w) {
          for (var T = 1 << w, q = (1 << w) + 1, F = w + 1, G = b(), X = 0; X < T; X += 1)
            G.add(String.fromCharCode(X));
          G.add(String.fromCharCode(T)), G.add(String.fromCharCode(q));
          var H = O(), z = s(H);
          z.write(T, F);
          var K = 0, ne = String.fromCharCode(g[K]);
          for (K += 1; K < g.length; ) {
            var _e = String.fromCharCode(g[K]);
            K += 1, G.contains(ne + _e) ? ne = ne + _e : (z.write(G.indexOf(ne), F), G.size() < 4095 && (G.size() == 1 << F && (F += 1), G.add(ne + _e)), ne = _e);
          }
          return z.write(G.indexOf(ne), F), z.write(q, F), z.flush(), H.toByteArray();
        }, b = function() {
          var w = {}, T = 0, q = {};
          return q.add = function(F) {
            if (q.contains(F))
              throw "dup key:" + F;
            w[F] = T, T += 1;
          }, q.size = function() {
            return T;
          }, q.indexOf = function(F) {
            return w[F];
          }, q.contains = function(F) {
            return typeof w[F] < "u";
          }, q;
        };
        return x;
      }, Q = function(k, B, S) {
        for (var P = j(k, B), g = 0; g < B; g += 1)
          for (var x = 0; x < k; x += 1)
            P.setPixel(x, g, S(x, g));
        var s = O();
        P.write(s);
        for (var f = I(), b = s.toByteArray(), w = 0; w < b.length; w += 1)
          f.writeByte(b[w]);
        return f.flush(), "data:image/gif;base64," + f;
      };
      return h;
    })();
    (function() {
      p.stringToBytesFuncs["UTF-8"] = function(h) {
        function d(_) {
          for (var l = [], c = 0; c < _.length; c++) {
            var a = _.charCodeAt(c);
            a < 128 ? l.push(a) : a < 2048 ? l.push(
              192 | a >> 6,
              128 | a & 63
            ) : a < 55296 || a >= 57344 ? l.push(
              224 | a >> 12,
              128 | a >> 6 & 63,
              128 | a & 63
            ) : (c++, a = 65536 + ((a & 1023) << 10 | _.charCodeAt(c) & 1023), l.push(
              240 | a >> 18,
              128 | a >> 12 & 63,
              128 | a >> 6 & 63,
              128 | a & 63
            ));
          }
          return l;
        }
        return d(h);
      };
    })(), (function(h) {
      y.exports = h();
    })(function() {
      return p;
    });
  })(mt)), mt.exports;
}
var zn = Xn();
const Vn = /* @__PURE__ */ Cr(zn), se = 7;
function Qn(y) {
  return (
    /** @satisfies {import('./types').QRConfig} */
    {
      ...y,
      margin: y.margin ?? 1,
      shape: y.shape ?? /** @type {const} */
      "square",
      logoRatio: y.logoRatio ?? 1,
      moduleFill: y.moduleFill ?? "currentcolor",
      anchorOuterFill: y.anchorOuterFill ?? "currentcolor",
      anchorInnerFill: y.anchorInnerFill ?? "currentcolor",
      typeNumber: y.typeNumber ?? 0,
      errorCorrectionLevel: y.errorCorrectionLevel ?? "H"
    }
  );
}
function Yn(y, v) {
  const { data: p, margin: h, shape: d, logo: _, logoRatio: l, anchorInnerFill: c, anchorOuterFill: a, moduleFill: e, typeNumber: t, errorCorrectionLevel: n } = Qn(y);
  v || (v = Vn(t, n), v.addData(p), v.make());
  const r = v.getModuleCount(), i = r + h * 2, o = [
    ["top-left", h, h],
    ["top-right", r - se + h, h],
    ["bottom-left", h, r - se + h]
  ];
  let u = "";
  for (const [D, j, Q] of o) {
    let k = `M${j} ${Q} h7 v7 h-7 v-7z m1 1 v5 h5 v-5 h-5 z`, B = `M${j + 2} ${Q + 2} h3 v3 h-3 v-3 z`;
    d !== "square" && (k = `M${j + 0.5} ${Q}h6s0.5 0 .5 .5v6s0 .5-.5 .5h-6s-.5 0-.5-.5v-6s0-.5 .5-.5zm.75 1s-.25 0-.25 .25v4.5s0 .25 .25 .25h4.5s.25 0 .25-.25v-4.5s0-.25 -.25 -.25h-4.5z`, B = `M${j + 2.5} ${Q + 2} h2 s.5 0 .5 .5 v2 s0 .5-.5 .5 h-2 s-.5 0-.5-.5 v-2 s0-.5 .5-.5 z`);
    const S = `<path class="anchor-outer" fill="${a}" d="${k}" />`, P = `<path class="anchor-outer" fill="${c}" d="${B}" />`;
    u += `<g class="anchor" data-position="${D}">${S} ${P}</g>`;
  }
  u = `<g class="anchors">${u}</g>`;
  let O = "";
  for (let D = 0; D < r; D++)
    for (let j = 0; j < r; j++) {
      if (!v.isDark(D, j) || Kn(D, j, r) || _ && Zn(D, j, r))
        continue;
      const Q = D + h, k = j + h;
      O += `<rect class="module" fill="${e}" data-column="${D}" data-row="${j}" x="${Q}" y="${k}" width="1" height="1" ${d === "circle" ? 'rx="0.5"' : ""} />`;
    }
  O = `<g class="modules">${O}</g>`;
  let I = "";
  if (_) {
    const D = Math.floor(r * Math.sqrt(0.1)), { width: j, height: Q } = Wn(D * 0.8, l), k = (i - j + 1) / 2, B = (i - Q + 1) / 2;
    I = `<image width="${j}" height="${Q}" x="${k}" y="${B}" href="${_}" class="logo" />`;
  }
  return {
    attributes: {
      viewBox: `0, 0 ${i} ${i}`,
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1"
    },
    anchors: u,
    modules: O,
    logo: I
  };
}
function Jn(y) {
  const { anchors: v, attributes: p, logo: h, modules: d } = Yn(y), _ = { ...p };
  return y.width && (_.width = y.width), y.height && (_.height = y.height), `<svg ${Object.entries(_).map(([l, c]) => `${l}="${c}"`).join(" ")}>${v} ${d} ${h}</svg>`;
}
function Kn(y, v, p) {
  return v <= se ? y <= se || y >= p - se : y <= se ? v >= p - se : !1;
}
function Zn(y, v, p) {
  const h = p / 2, d = 1, _ = Math.floor(p * Math.sqrt(0.1) / 2), l = _ * d, c = _ / d, a = h - l, e = h + l, t = h - c, n = h + c;
  return v >= t && v <= n && y >= a && y <= e;
}
function Wn(y, v) {
  return v >= 1 ? {
    width: y,
    height: y / v
  } : {
    width: y * v,
    height: y
  };
}
var ea = be('<div class="qr-container svelte-tonzym"><div></div> <div class="qr-value svelte-tonzym"> </div></div>'), ta = be('<img class="custom-logo svelte-tonzym" alt="logo"/>'), ra = nn('<svg class="barcode"></svg>'), na = be('<div class="barcode-value svelte-tonzym"><p class="svelte-tonzym"> </p></div>'), aa = be('<div class="barcode-container svelte-tonzym"><div class="logo-and-barcode svelte-tonzym"><!> <!></div> <!></div>'), ia = be("<p> </p>"), oa = be('<div class="overall svelte-tonzym" styles="border: 3px solid red; width: 100px; height: 200px;"><!></div>');
function fa(y, v) {
  zr(v, !1);
  const p = () => en(i, "$component", h), [h, d] = Zr();
  let _ = he(v, "value", 8), l = he(v, "codeType", 8), c = he(v, "showValue", 8), a = he(v, "showLogo", 8), e = he(v, "customLogo", 8), t = he(v, "size", 8), n = he(v, "primColor", 8);
  const { styleable: r } = Mt("sdk"), i = Mt("component");
  let o = Pt();
  function u() {
    ie(o) && _() && Un(ie(o), _(), {
      displayValue: !1,
      // Hide the library's built in value, optionally display it later
      width: t() / 100,
      height: t()
    });
  }
  let O = Pt();
  const I = () => {
    if (ie(O) && l() === "QR Code" && _()) {
      const B = Jn({
        data: _(),
        logo: a() ? e() : "",
        moduleFill: n(),
        anchorOuterFill: n(),
        anchorInnerFill: n(),
        width: t(),
        height: t()
      });
      Wr(O, ie(O).innerHTML = B);
    }
  };
  Vr(() => {
    l() === "Barcode" ? u() : I();
  }), Tt(
    () => (oe(l()), oe(_()), ie(o), oe(t())),
    () => {
      l() === "Barcode" && _() && ie(o) && t() && u();
    }
  ), Tt(
    () => (oe(l()), oe(_()), ie(O), oe(a()), oe(e()), oe(t()), oe(n())),
    () => {
      l() === "QR Code" && _() && ie(O) && (a() !== void 0 || e() !== void 0 || t() || n()) && I();
    }
  ), Qr(), Yr();
  var D = oa(), j = ce(D);
  {
    var Q = (B) => {
      var S = tn(), P = rn(S);
      {
        var g = (s) => {
          var f = ea(), b = ce(f);
          Dt(b, (q) => It(O, q), () => ie(O));
          var w = bt(b, 2), T = ce(w, !0);
          le(w), le(f), ye(() => {
            wt(w, `color: ${n() ?? ""}; max-width: ${t() ?? ""}px;`), Ot(T, c() ? _() : "");
          }), fe(s, f);
        }, x = (s) => {
          var f = aa(), b = ce(f), w = ce(b);
          {
            var T = (H) => {
              var z = ta();
              ye(() => {
                Bt(z, "src", e()), wt(z, `height: ${t() ?? ""}px`);
              }), fe(H, z);
            };
            we(w, (H) => {
              a() && e() && H(T);
            });
          }
          var q = bt(w, 2);
          {
            var F = (H) => {
              var z = ra();
              Dt(z, (K) => It(o, K), () => ie(o)), ye(() => Bt(z, "height", t())), fe(H, z);
            };
            we(q, (H) => {
              _() && H(F);
            });
          }
          le(b);
          var G = bt(b, 2);
          {
            var X = (H) => {
              var z = na(), K = ce(z), ne = ce(K, !0);
              le(K), le(z), ye(() => Ot(ne, _())), fe(H, z);
            };
            we(G, (H) => {
              c() && H(X);
            });
          }
          le(f), ye(() => wt(b, `height: ${t() ?? ""}px, width: 100%`)), fe(s, f);
        };
        we(P, (s) => {
          l() === "QR Code" ? s(g) : s(x, !1);
        });
      }
      fe(B, S);
    }, k = (B) => {
      var S = ia(), P = ce(S);
      le(S), ye(() => Ot(P, `Please add a value to generate your ${l() === "QR Code" ? "QR Code" : "Barcode"}`)), fe(B, S);
    };
    we(j, (B) => {
      _() ? B(Q) : B(k, !1);
    });
  }
  le(D), Jr(D, (B, S) => r?.(B, S), () => p().styles), fe(y, D), Kr(), d();
}
export {
  fa as default
};
