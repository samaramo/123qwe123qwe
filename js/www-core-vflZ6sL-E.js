var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function() {
        function h(a) {
            throw a;
        }
        var i = void 0, k = !0, l = null, m = !1, n, p = this;
        function q(a) {
            for (var a = a.split("."), b = p, c; c = a.shift(); )
                if (b[c] != l)
                    b = b[c];
                else
                    return l;
            return b
        }
        function aa(a) {
            a.getInstance = function() {
                return a.re ? a.re : a.re = new a
            }
        }
        function ba(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array)
                        return "array";
                    if (a instanceof Object)
                        return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c)
                        return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                        return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                        return "function"
                } else
                    return "null";
            else if ("function" == b && "undefined" == typeof a.call)
                return "object";
            return b
        }
        function ca(a) {
            return a !== i
        }
        function da(a) {
            return "array" == ba(a)
        }
        function ea(a) {
            var b = ba(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }
        function r(a) {
            return "string" == typeof a
        }
        function fa(a) {
            return "function" == ba(a)
        }
        function ga(a) {
            var b = typeof a;
            return "object" == b && a != l || "function" == b
        }
        function ha(a) {
            return a[ia] || (a[ia] = ++ja)
        }
        var ia = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36)
          , ja = 0;
        function ka(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
        function la(a, b, c) {
            a || h(Error());
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
        function s(a, b, c) {
            s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
            return s.apply(l, arguments)
        }
        function ma(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = Array.prototype.slice.call(arguments);
                b.unshift.apply(b, c);
                return a.apply(this, b)
            }
        }
        var na = Date.now || function() {
            return +new Date
        }
        ;
        function t(a, b) {
            var c = a.split(".")
              , d = p;
            !(c[0]in d) && d.execScript && d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift()); )
                !c.length && ca(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
        }
        function u(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.P = b.prototype;
            a.prototype = new c
        }
        Function.prototype.bind = Function.prototype.bind || function(a, b) {
            if (1 < arguments.length) {
                var c = Array.prototype.slice.call(arguments, 1);
                c.unshift(this, a);
                return s.apply(l, c)
            }
            return s(this, a)
        }
        ;
        function oa(a, b) {
            for (var c = 1; c < arguments.length; c++)
                var d = ("" + arguments[c]).replace(/\$/g, "$$$$")
                  , a = a.replace(/\%s/, d);
            return a
        }
        function pa(a) {
            return /^[\s\xa0]*$/.test(a)
        }
        function qa(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        }
        function ra(a, b) {
            var c = ("" + a).toLowerCase()
              , d = ("" + b).toLowerCase();
            return c < d ? -1 : c == d ? 0 : 1
        }
        function sa(a) {
            if (!ta.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(ua, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(va, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(wa, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(xa, "&quot;"));
            return a
        }
        var ua = /&/g
          , va = /</g
          , wa = />/g
          , xa = /\"/g
          , ta = /[&<>\"]/;
        function ya(a) {
            return -1 != a.indexOf("&") ? "document"in p ? za(a) : Aa(a) : a
        }
        function za(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            }
              , c = document.createElement("div");
            return a.replace(Ba, function(a, e) {
                var f = b[a];
                if (f)
                    return f;
                if ("#" == e.charAt(0)) {
                    var g = Number("0" + e.substr(1));
                    isNaN(g) || (f = String.fromCharCode(g))
                }
                f || (c.innerHTML = a + " ",
                f = c.firstChild.nodeValue.slice(0, -1));
                return b[a] = f
            })
        }
        function Aa(a) {
            return a.replace(/&([^;]+);/g, function(a, c) {
                switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    if ("#" == c.charAt(0)) {
                        var d = Number("0" + c.substr(1));
                        if (!isNaN(d))
                            return String.fromCharCode(d)
                    }
                    return a
                }
            })
        }
        var Ba = /&([^;\s<&]+);?/g;
        function Ca(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        }
        var Da = {
            "\x00": "\\0",
            "\u0008": "\\b",
            "\u000c": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\"
        }
          , Ea = {
            "'": "\\'"
        };
        function Fa(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = b, e = c, f;
                f = a.charAt(c);
                if (f in Ea)
                    f = Ea[f];
                else if (f in Da)
                    f = Ea[f] = Da[f];
                else {
                    var g = f
                      , j = f.charCodeAt(0);
                    if (31 < j && 127 > j)
                        g = f;
                    else {
                        if (256 > j) {
                            if (g = "\\x",
                            16 > j || 256 < j)
                                g += "0"
                        } else
                            g = "\\u",
                            4096 > j && (g += "0");
                        g += j.toString(16).toUpperCase()
                    }
                    f = Ea[f] = g
                }
                d[e] = f
            }
            return b.join("")
        }
        function Ga(a, b) {
            for (var c = 0, d = qa("" + a).split("."), e = qa("" + b).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                var j = d[g] || ""
                  , o = e[g] || ""
                  , v = RegExp("(\\d*)(\\D*)", "g")
                  , E = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var C = v.exec(j) || ["", "", ""]
                      , F = E.exec(o) || ["", "", ""];
                    if (0 == C[0].length && 0 == F[0].length)
                        break;
                    c = ((0 == C[1].length ? 0 : parseInt(C[1], 10)) < (0 == F[1].length ? 0 : parseInt(F[1], 10)) ? -1 : (0 == C[1].length ? 0 : parseInt(C[1], 10)) > (0 == F[1].length ? 0 : parseInt(F[1], 10)) ? 1 : 0) || ((0 == C[2].length) < (0 == F[2].length) ? -1 : (0 == C[2].length) > (0 == F[2].length) ? 1 : 0) || (C[2] < F[2] ? -1 : C[2] > F[2] ? 1 : 0)
                } while (0 == c)
            }
            return c
        }
        function Ha(a) {
            for (var b = 0, c = 0; c < a.length; ++c)
                b = 31 * b + a.charCodeAt(c),
                b %= 4294967296;
            return b
        }
        function Ia(a) {
            return ("" + a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        }
        ;var Ja = Array.prototype
          , Ka = Ja.indexOf ? function(a, b, c) {
            return Ja.indexOf.call(a, b, c)
        }
        : function(a, b, c) {
            c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (r(a))
                return !r(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b)
                    return c;
            return -1
        }
          , w = Ja.forEach ? function(a, b, c) {
            Ja.forEach.call(a, b, c)
        }
        : function(a, b, c) {
            for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
                f in e && b.call(c, e[f], f, a)
        }
          , La = Ja.filter ? function(a, b, c) {
            return Ja.filter.call(a, b, c)
        }
        : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = r(a) ? a.split("") : a, j = 0; j < d; j++)
                if (j in g) {
                    var o = g[j];
                    b.call(c, o, j, a) && (e[f++] = o)
                }
            return e
        }
          , Ma = Ja.map ? function(a, b, c) {
            return Ja.map.call(a, b, c)
        }
        : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = r(a) ? a.split("") : a, g = 0; g < d; g++)
                g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        }
        ;
        function Na(a, b) {
            var c = Oa(a, b, i);
            return 0 > c ? l : r(a) ? a.charAt(c) : a[c]
        }
        function Oa(a, b, c) {
            for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a))
                    return f;
            return -1
        }
        function Pa(a, b) {
            for (var c = r(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(i, c[d], d, a))
                    return d;
            return -1
        }
        function Qa(a, b) {
            return 0 <= Ka(a, b)
        }
        function Ra(a) {
            if (!da(a))
                for (var b = a.length - 1; 0 <= b; b--)
                    delete a[b];
            a.length = 0
        }
        function Sa(a, b) {
            var c = Ka(a, b);
            0 <= c && Ta(a, c)
        }
        function Ta(a, b) {
            Ja.splice.call(a, b, 1)
        }
        function Ua(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++)
                    c[d] = a[d];
                return c
            }
            return []
        }
        function Va(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c], e;
                if (da(d) || (e = ea(d)) && d.hasOwnProperty("callee"))
                    a.push.apply(a, d);
                else if (e)
                    for (var f = a.length, g = d.length, j = 0; j < g; j++)
                        a[f + j] = d[j];
                else
                    a.push(d)
            }
        }
        function Wa(a, b, c, d) {
            Ja.splice.apply(a, Xa(arguments, 1))
        }
        function Xa(a, b, c) {
            return 2 >= arguments.length ? Ja.slice.call(a, b) : Ja.slice.call(a, b, c)
        }
        function Ya(a, b) {
            Ja.sort.call(a, b || Za)
        }
        function $a(a) {
            var b = Za;
            Ya(a, function(a, d) {
                return b(a.key, d.key)
            })
        }
        function Za(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        }
        ;var ab;
        function cb(a) {
            a = a.className;
            return r(a) && a.match(/\S+/g) || []
        }
        function x(a, b) {
            var c = cb(a)
              , d = Xa(arguments, 1)
              , e = c.length + d.length;
            db(c, d);
            a.className = c.join(" ");
            return c.length == e
        }
        function y(a, b) {
            var c = cb(a)
              , d = Xa(arguments, 1)
              , e = eb(c, d);
            a.className = e.join(" ");
            return e.length == c.length - d.length
        }
        function db(a, b) {
            for (var c = 0; c < b.length; c++)
                Qa(a, b[c]) || a.push(b[c])
        }
        function eb(a, b) {
            return La(a, function(a) {
                return !Qa(b, a)
            })
        }
        function fb(a, b, c) {
            for (var d = cb(a), e = m, f = 0; f < d.length; f++)
                d[f] == b && (Wa(d, f--, 1),
                e = k);
            e && (d.push(c),
            a.className = d.join(" "))
        }
        function z(a, b, c) {
            var d = cb(a);
            r(b) ? Sa(d, b) : da(b) && (d = eb(d, b));
            r(c) && !Qa(d, c) ? d.push(c) : da(c) && db(d, c);
            a.className = d.join(" ")
        }
        function A(a, b) {
            return Qa(cb(a), b)
        }
        function B(a, b, c) {
            c ? x(a, b) : y(a, b)
        }
        function gb(a, b) {
            var c = !A(a, b);
            B(a, b, c);
            return c
        }
        ;function hb(a, b) {
            this.x = ca(a) ? a : 0;
            this.y = ca(b) ? b : 0
        }
        hb.prototype.La = function() {
            return new hb(this.x,this.y)
        }
        ;
        function ib(a, b) {
            return new hb(a.x - b.x,a.y - b.y)
        }
        ;function jb(a, b) {
            this.width = a;
            this.height = b
        }
        jb.prototype.La = function() {
            return new jb(this.width,this.height)
        }
        ;
        jb.prototype.ceil = function() {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        }
        ;
        jb.prototype.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        }
        ;
        jb.prototype.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        }
        ;
        function kb(a, b) {
            for (var c in a)
                b.call(i, a[c], c, a)
        }
        function lb(a) {
            for (var b in a)
                return a[b]
        }
        function mb(a) {
            var b = [], c = 0, d;
            for (d in a)
                b[c++] = d;
            return b
        }
        function nb(a, b, c) {
            for (var d in a)
                if (b.call(c, a[d], d, a))
                    return d
        }
        function ob(a, b) {
            var c = nb(a, b, i);
            return c && a[c]
        }
        function pb(a) {
            var b = {}, c;
            for (c in a)
                b[c] = a[c];
            return b
        }
        var qb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        function rb(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d)
                    a[c] = d[c];
                for (var f = 0; f < qb.length; f++)
                    c = qb[f],
                    Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        }
        ;var sb, tb, ub, vb, wb, xb;
        function yb() {
            return p.navigator ? p.navigator.userAgent : l
        }
        function zb() {
            return p.navigator
        }
        vb = ub = tb = sb = m;
        var Ab;
        if (Ab = yb()) {
            var Bb = zb();
            sb = 0 == Ab.indexOf("Opera");
            tb = !sb && -1 != Ab.indexOf("MSIE");
            ub = !sb && -1 != Ab.indexOf("WebKit");
            vb = !sb && !ub && "Gecko" == Bb.product
        }
        var Cb = sb
          , D = tb
          , Db = vb
          , Eb = ub
          , Fb = zb()
          , Gb = Fb && Fb.platform || "";
        wb = -1 != Gb.indexOf("Mac");
        xb = -1 != Gb.indexOf("Win");
        var Hb = !!zb() && -1 != (zb().appVersion || "").indexOf("X11"), Ib;
        a: {
            var Jb = "", Kb;
            if (Cb && p.opera)
                var Lb = p.opera.version
                  , Jb = "function" == typeof Lb ? Lb() : Lb;
            else if (Db ? Kb = /rv\:([^\);]+)(\)|;)/ : D ? Kb = /MSIE\s+([^\);]+)(\)|;)/ : Eb && (Kb = /WebKit\/(\S+)/),
            Kb)
                var Mb = Kb.exec(yb())
                  , Jb = Mb ? Mb[1] : "";
            if (D) {
                var Nb, Ob = p.document;
                Nb = Ob ? Ob.documentMode : i;
                if (Nb > parseFloat(Jb)) {
                    Ib = "" + Nb;
                    break a
                }
            }
            Ib = Jb
        }
        var Pb = Ib
          , Qb = {};
        function G(a) {
            return Qb[a] || (Qb[a] = 0 <= Ga(Pb, a))
        }
        var Rb = {};
        function Sb(a) {
            return Rb[a] || (Rb[a] = D && !!document.documentMode && document.documentMode >= a)
        }
        ;var Tb = !D || Sb(9);
        !Db && !D || D && Sb(9) || Db && G("1.9.1");
        var Ub = D && !G("9");
        function Vb(a) {
            return a ? new Wb(Xb(a)) : ab || (ab = new Wb)
        }
        function H(a) {
            return r(a) ? document.getElementById(a) : a
        }
        function I(a, b) {
            var c = b || document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : J("*", a, b)
        }
        function K(a, b) {
            var c = b || document
              , d = l;
            return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : I(a, b)[0]) || l
        }
        function J(a, b, c) {
            var d = document
              , c = c || d
              , a = a && "*" != a ? a.toUpperCase() : "";
            if (c.querySelectorAll && c.querySelector && (a || b))
                return c.querySelectorAll(a + (b ? "." + b : ""));
            if (b && c.getElementsByClassName) {
                c = c.getElementsByClassName(b);
                if (a) {
                    for (var d = {}, e = 0, f = 0, g; g = c[f]; f++)
                        a == g.nodeName && (d[e++] = g);
                    d.length = e;
                    return d
                }
                return c
            }
            c = c.getElementsByTagName(a || "*");
            if (b) {
                d = {};
                for (f = e = 0; g = c[f]; f++)
                    a = g.className,
                    "function" == typeof a.split && Qa(a.split(/\s+/), b) && (d[e++] = g);
                d.length = e;
                return d
            }
            return c
        }
        function Yb(a, b) {
            kb(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Zb ? a.setAttribute(Zb[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        }
        var Zb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            height: "height",
            width: "width",
            usemap: "useMap",
            frameborder: "frameBorder",
            maxlength: "maxLength",
            type: "type"
        };
        function $b(a) {
            a = a.document;
            a = ac(a) ? a.documentElement : a.body;
            return new jb(a.clientWidth,a.clientHeight)
        }
        function bc() {
            var a = window
              , b = a.document
              , c = 0;
            if (b) {
                var a = $b(a).height
                  , c = b.body
                  , d = b.documentElement;
                if (ac(b) && d.scrollHeight)
                    c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    var b = d.scrollHeight
                      , e = d.offsetHeight;
                    d.clientHeight != e && (b = c.scrollHeight,
                    e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            return c
        }
        function cc(a) {
            var b = !Eb && ac(a) ? a.documentElement : a.body
              , a = a.parentWindow || a.defaultView;
            return new hb(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
        }
        function dc(a, b, c) {
            return ec(document, arguments)
        }
        function ec(a, b) {
            var c = b[0]
              , d = b[1];
            if (!Tb && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', sa(d.name), '"');
                if (d.type) {
                    c.push(' type="', sa(d.type), '"');
                    var e = {};
                    rb(e, d);
                    d = e;
                    delete d.type
                }
                c.push(">");
                c = c.join("")
            }
            c = a.createElement(c);
            d && (r(d) ? c.className = d : da(d) ? x.apply(l, [c].concat(d)) : Yb(c, d));
            2 < b.length && fc(a, c, b, 2);
            return c
        }
        function fc(a, b, c, d) {
            function e(c) {
                c && b.appendChild(r(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                ea(f) && !(ga(f) && 0 < f.nodeType) ? w(gc(f) ? Ua(f) : f, e) : e(f)
            }
        }
        function hc(a) {
            return document.createTextNode(a)
        }
        function ic(a) {
            var b = document
              , c = b.createElement("div");
            D ? (c.innerHTML = "<br>" + a,
            c.removeChild(c.firstChild)) : c.innerHTML = a;
            if (1 == c.childNodes.length)
                return c.removeChild(c.firstChild);
            for (a = b.createDocumentFragment(); c.firstChild; )
                a.appendChild(c.firstChild);
            return a
        }
        function ac(a) {
            return "CSS1Compat" == a.compatMode
        }
        function jc(a, b) {
            fc(Xb(a), a, arguments, 1)
        }
        function kc(a) {
            for (var b; b = a.firstChild; )
                a.removeChild(b)
        }
        function lc(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }
        function mc(a) {
            return a.firstElementChild != i ? a.firstElementChild : nc(a.firstChild)
        }
        function nc(a) {
            for (; a && 1 != a.nodeType; )
                a = a.nextSibling;
            return a
        }
        function oc(a, b) {
            if (a.contains && 1 == b.nodeType)
                return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition)
                return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b; )
                b = b.parentNode;
            return b == a
        }
        function Xb(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }
        function pc(a, b) {
            if ("textContent"in a)
                a.textContent = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild; )
                    a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else
                kc(a),
                a.appendChild(Xb(a).createTextNode(b))
        }
        function qc(a, b) {
            var c = [];
            return rc(a, b, c, k) ? c[0] : i
        }
        function rc(a, b, c, d) {
            if (a != l)
                for (a = a.firstChild; a; ) {
                    if (b(a) && (c.push(a),
                    d) || rc(a, b, c, d))
                        return k;
                    a = a.nextSibling
                }
            return m
        }
        var sc = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        }
          , tc = {
            IMG: " ",
            BR: "\n"
        };
        function uc(a) {
            if (Ub && "innerText"in a)
                a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
            else {
                var b = [];
                vc(a, b, k);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            Ub || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""));
            return a
        }
        function vc(a, b, c) {
            if (!(a.nodeName in sc))
                if (3 == a.nodeType)
                    c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in tc)
                    b.push(tc[a.nodeName]);
                else
                    for (a = a.firstChild; a; )
                        vc(a, b, c),
                        a = a.nextSibling
        }
        function gc(a) {
            if (a && "number" == typeof a.length) {
                if (ga(a))
                    return "function" == typeof a.item || "string" == typeof a.item;
                if (fa(a))
                    return "function" == typeof a.item
            }
            return m
        }
        function wc(a, b, c) {
            if (!b && !c)
                return l;
            var d = b ? b.toUpperCase() : l;
            return xc(a, function(a) {
                return (!d || a.nodeName == d) && (!c || A(a, c))
            }, k)
        }
        function yc(a, b) {
            return wc(a, l, b)
        }
        function xc(a, b, c, d) {
            c || (a = a.parentNode);
            for (var c = d == l, e = 0; a && (c || e <= d); ) {
                if (b(a))
                    return a;
                a = a.parentNode;
                e++
            }
            return l
        }
        function Wb(a) {
            this.b = a || p.document || document
        }
        n = Wb.prototype;
        n.z = function(a) {
            return r(a) ? this.b.getElementById(a) : a
        }
        ;
        n.Od = function(a, b, c) {
            return ec(this.b, arguments)
        }
        ;
        function zc(a) {
            return ac(a.b)
        }
        function Ac(a) {
            return cc(a.b)
        }
        n.appendChild = function(a, b) {
            a.appendChild(b)
        }
        ;
        n.append = jc;
        n.contains = oc;
        var Bc = "StopIteration"in p ? p.StopIteration : Error("StopIteration");
        function Cc() {}
        Cc.prototype.next = function() {
            h(Bc)
        }
        ;
        Cc.prototype.Ya = function() {
            return this
        }
        ;
        function Dc(a) {
            if (a instanceof Cc)
                return a;
            if ("function" == typeof a.Ya)
                return a.Ya(m);
            if (ea(a)) {
                var b = 0
                  , c = new Cc;
                c.next = function() {
                    for (; ; ) {
                        b >= a.length && h(Bc);
                        if (b in a)
                            return a[b++];
                        b++
                    }
                }
                ;
                return c
            }
            h(Error("Not implemented"))
        }
        function Ec(a, b) {
            if (ea(a))
                try {
                    w(a, b, i)
                } catch (c) {
                    c !== Bc && h(c)
                }
            else {
                a = Dc(a);
                try {
                    for (; ; )
                        b.call(i, a.next(), i, a)
                } catch (d) {
                    d !== Bc && h(d)
                }
            }
        }
        function Fc(a) {
            if (ea(a))
                return Ua(a);
            var a = Dc(a)
              , b = [];
            Ec(a, function(a) {
                b.push(a)
            });
            return b
        }
        ;function Gc(a, b) {
            this.c = {};
            this.b = [];
            var c = arguments.length;
            if (1 < c) {
                c % 2 && h(Error("Uneven number of arguments"));
                for (var d = 0; d < c; d += 2)
                    Hc(this, arguments[d], arguments[d + 1])
            } else if (a) {
                if (a instanceof Gc)
                    c = a.vd(),
                    d = a.wd();
                else {
                    var c = mb(a)
                      , e = []
                      , f = 0;
                    for (d in a)
                        e[f++] = a[d];
                    d = e
                }
                for (e = 0; e < c.length; e++)
                    Hc(this, c[e], d[e])
            }
        }
        n = Gc.prototype;
        n.N = 0;
        n.Lb = 0;
        n.V = function() {
            return this.N
        }
        ;
        n.wd = function() {
            Ic(this);
            for (var a = [], b = 0; b < this.b.length; b++)
                a.push(this.c[this.b[b]]);
            return a
        }
        ;
        n.vd = function() {
            Ic(this);
            return this.b.concat()
        }
        ;
        n.clear = function() {
            this.c = {};
            this.Lb = this.N = this.b.length = 0
        }
        ;
        function Ic(a) {
            if (a.N != a.b.length) {
                for (var b = 0, c = 0; b < a.b.length; ) {
                    var d = a.b[b];
                    Object.prototype.hasOwnProperty.call(a.c, d) && (a.b[c++] = d);
                    b++
                }
                a.b.length = c
            }
            if (a.N != a.b.length) {
                for (var e = {}, c = b = 0; b < a.b.length; )
                    d = a.b[b],
                    Object.prototype.hasOwnProperty.call(e, d) || (a.b[c++] = d,
                    e[d] = 1),
                    b++;
                a.b.length = c
            }
        }
        function Hc(a, b, c) {
            Object.prototype.hasOwnProperty.call(a.c, b) || (a.N++,
            a.b.push(b),
            a.Lb++);
            a.c[b] = c
        }
        n.La = function() {
            return new Gc(this)
        }
        ;
        function Jc(a) {
            Ic(a);
            for (var b = {}, c = 0; c < a.b.length; c++) {
                var d = a.b[c];
                b[d] = a.c[d]
            }
            return b
        }
        n.Ya = function(a) {
            Ic(this);
            var b = 0
              , c = this.b
              , d = this.c
              , e = this.Lb
              , f = this
              , g = new Cc;
            g.next = function() {
                for (; ; ) {
                    e != f.Lb && h(Error("The map has changed since the iterator was created"));
                    b >= c.length && h(Bc);
                    var g = c[b++];
                    return a ? g : d[g]
                }
            }
            ;
            return g
        }
        ;
        function Kc(a) {
            var b = new Gc;
            Lc(a, b, Mc);
            return b
        }
        function Nc(a) {
            var b = [];
            Lc(a, b, Oc);
            return b.join("&")
        }
        function Lc(a, b, c) {
            for (var d = a.elements, e, f = 0; e = d[f]; f++)
                if (!(e.disabled || "fieldset" == e.tagName.toLowerCase())) {
                    var g = e.name;
                    switch (e.type.toLowerCase()) {
                    case "file":
                    case "submit":
                    case "reset":
                    case "button":
                        break;
                    case "select-multiple":
                        e = Pc(e);
                        if (e != l)
                            for (var j, o = 0; j = e[o]; o++)
                                c(b, g, j);
                        break;
                    default:
                        j = Pc(e),
                        j != l && c(b, g, j)
                    }
                }
            d = a.getElementsByTagName("input");
            for (f = 0; e = d[f]; f++)
                e.form == a && "image" == e.type.toLowerCase() && (g = e.name,
                c(b, g, e.value),
                c(b, g + ".x", "0"),
                c(b, g + ".y", "0"))
        }
        function Mc(a, b, c) {
            var d;
            d = Object.prototype.hasOwnProperty.call(a.c, b) ? a.c[b] : i;
            d || (d = [],
            Hc(a, b, d));
            d.push(c)
        }
        function Oc(a, b, c) {
            a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
        }
        function Pc(a) {
            var b = a.type;
            if (!ca(b))
                return l;
            switch (b.toLowerCase()) {
            case "checkbox":
            case "radio":
                return a.checked ? a.value : l;
            case "select-one":
                return b = a.selectedIndex,
                0 <= b ? a.options[b].value : l;
            case "select-multiple":
                for (var b = [], c, d = 0; c = a.options[d]; d++)
                    c.selected && b.push(c.value);
                return b.length ? b : l;
            default:
                return ca(a.value) ? a.value : l
            }
        }
        function Qc(a) {
            a = a.elements.is_private;
            if (a.type)
                return Pc(a);
            for (var b = 0; b < a.length; b++) {
                var c = Pc(a[b]);
                if (c)
                    return c
            }
            return l
        }
        ;var Rc = /<[^>]*>|&[^;]+;/g
          , Sc = RegExp("^[^\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]")
          , Tc = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]");
        function Uc(a, b) {
            return Tc.test(b ? a.replace(Rc, " ") : a)
        }
        ;var Vc = window.yt && window.yt.config_ || {};
        t("yt.config_", Vc);
        var Wc = window.yt && window.yt.tokens_ || {};
        t("yt.tokens_", Wc);
        var Xc = window.yt && window.yt.globals_ || {};
        t("yt.globals_", Xc);
        var Yc = window.yt && window.yt.msgs_ || {};
        t("yt.msgs_", Yc);
        var Zc = window.yt && window.yt.timeouts_ || [];
        t("yt.timeouts_", Zc);
        var $c = window.yt && window.yt.intervals_ || [];
        t("yt.intervals_", $c);
        function ad(a) {
            bd(Vc, arguments)
        }
        function L(a, b) {
            return a in Vc ? Vc[a] : b
        }
        function cd(a) {
            bd(Wc, arguments)
        }
        function M(a) {
            return a in Wc ? Wc[a] : i
        }
        function dd(a) {
            for (var b = 0, c = arguments.length; b < c; ++b)
                Xc[arguments[b]] = 1
        }
        function N(a, b) {
            var c = window.setTimeout(a, b);
            Zc.push(c);
            return c
        }
        function ed(a, b) {
            var c = window.setInterval(a, b);
            $c.push(c);
            return c
        }
        function fd(a) {
            window.clearTimeout(a)
        }
        function gd(a) {
            window.clearInterval(a)
        }
        function O(a, b, c) {
            var d = b || {};
            if (a = a in Yc ? Yc[a] : c)
                for (var e in d)
                    a = a.replace(RegExp("\\$" + e, "gi"), function() {
                        return d[e]
                    });
            return a
        }
        function bd(a, b) {
            if (1 < b.length) {
                var c = b[0];
                a[c] = b[1]
            } else {
                var d = b[0];
                for (c in d)
                    a[c] = d[c]
            }
        }
        var hd = !!eval("/*@cc_on!@*/false");
        var id = {};
        function jd(a, b, c, d) {
            if (L("EVENTS_TRACKER_INSTALLED")) {
                var e = id[a];
                if (!e) {
                    var f = window._gaq._getAsyncTracker("eventsPageTracker");
                    if (!f)
                        return;
                    window._gaq.push(function() {
                        e = f._createEventTracker(a);
                        id[a] = e
                    })
                }
                var g = c || i
                  , j = d || i;
                window._gaq.push(function() {
                    e._trackEvent(b, g, j)
                })
            }
        }
        ;function P(a, b, c) {
            a.dataset ? a.dataset[kd(b)] = c : a.setAttribute("data-" + b, c)
        }
        function Q(a, b) {
            return a.dataset ? a.dataset[kd(b)] : a.getAttribute("data-" + b)
        }
        function ld(a, b) {
            a.dataset ? delete a.dataset[kd(b)] : a.removeAttribute("data-" + b)
        }
        function md(a, b) {
            return a.dataset ? kd(b)in a.dataset : a.hasAttribute ? !!a.hasAttribute("data-" + b) : !!a.getAttribute("data-" + b)
        }
        var nd = {};
        function kd(a) {
            return nd[a] || (nd[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            }))
        }
        ;function od(a) {
            var b = a.__yt_uid_key;
            b || (b = pd(),
            a.__yt_uid_key = b);
            return b
        }
        var pd = q("yt.dom.getNextId_");
        if (!pd) {
            pd = function() {
                return ++qd
            }
            ;
            t("yt.dom.getNextId_", pd);
            var qd = 0
        }
        function rd(a) {
            var b = a.cloneNode(m);
            "TR" == b.tagName || "SELECT" == b.tagName ? w(a.childNodes, function(a) {
                b.appendChild(rd(a))
            }) : b.innerHTML = a.innerHTML;
            return b
        }
        function sd(a) {
            a = rd(H(a));
            a.removeAttribute("id");
            return a
        }
        function td(a, b, c) {
            a = J(a, b, c);
            return a.length ? a[0] : l
        }
        function ud(a, b) {
            "disabled"in a && (a.disabled = !b);
            1 == a.nodeType && B(a, "disabled", !b);
            if (a.hasChildNodes())
                for (var c = 0, d; d = a.childNodes[c]; ++c)
                    ud(d, b)
        }
        function vd(a) {
            function b(a) {
                for (var b = [], c = 0, d = o.length; c < d && 0 < a; c++) {
                    var e = o[c];
                    b.push(e.substring(0, a));
                    a -= e.length
                }
                return b
            }
            function c(a) {
                f.innerHTML = d(a);
                a = (f.clientHeight || f.offsetHeight) <= v;
                f.innerHTML = "";
                return a
            }
            function d(a) {
                var b = [], c;
                for (c = 0; c < a.length; c++)
                    b.push(a[c]),
                    j[c] && b.push(j[c]);
                j[c] && j[c].match(/^<\s*\//) && b.push(j[c]);
                b = b.join("");
                return b.length < g.length ? b + "&hellip;" : b
            }
            var e = H(a)
              , f = rd(e);
            a.parentNode.appendChild(f);
            f.style.whiteSpace = "normal";
            f.style.lineHeight = "1.5em";
            var g = Q(e, "original-html");
            g || (g = e.innerHTML.replace(/^\s+|\s+$/, ""),
            P(e, "original-html", g));
            for (var a = /<[^>]+>/g, j = g.match(a) || [], o = g.replace(a, "<wbr>").split("<wbr>"), v = wd(f), a = 0, e = o.join("").length + 1, E = []; a < e; ) {
                var C = a + Math.round((e - a) / 2)
                  , F = b(C);
                c(F) ? (E = F,
                a = C + 1) : e = C - 1
            }
            lc(f);
            return d(E)
        }
        function wd(a) {
            for (var b = a.innerHTML, c = "", d = 0; 1 > d; d++)
                c += "&nbsp;<br>";
            a.innerHTML = c;
            c = a.clientHeight || a.offsetHeight;
            a.innerHTML = b;
            return c
        }
        function xd() {
            var a = document;
            if ("fullScreenElement"in a)
                return a.fullScreenElement;
            if ("mozFullScreenElement"in a)
                return a.mozFullScreenElement;
            if ("msFullScreenElement"in a)
                return a.msFullScreenElement;
            if ("oFullScreenElement"in a)
                return a.oFullScreenElement;
            if ("webkitFullScreenElement"in a)
                return a.webkitFullScreenElement
        }
        ;function yd(a) {
            if (a = a || q("window.event")) {
                for (var b in a)
                    Qa(zd, b) || (this[b] = a[b]);
                if ((b = a.target || a.srcElement) && 3 == b.nodeType)
                    b = b.parentNode;
                this.target = b;
                if (b = a.relatedTarget)
                    try {
                        b = b.nodeName && b
                    } catch (c) {
                        b = l
                    }
                else
                    "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
                this.relatedTarget = b;
                this.clientX = a.clientX !== i ? a.clientX : a.pageX;
                this.clientY = a.clientY !== i ? a.clientY : a.pageY;
                if ((a.clientX || a.clientY) && document.body && document.documentElement)
                    this.pageX = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
                    this.pageY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.Ma = a
            }
        }
        var zd = "stopPropagation preventMouseEvent preventManipulation preventDefault layerX layerY".split(" ");
        n = yd.prototype;
        n.type = "";
        n.target = l;
        n.relatedTarget = l;
        n.currentTarget = l;
        n.data = l;
        n.source = l;
        n.state = l;
        n.keyCode = 0;
        n.charCode = 0;
        n.altKey = m;
        n.ctrlKey = m;
        n.shiftKey = m;
        n.Ma = l;
        n.clientX = 0;
        n.clientY = 0;
        n.pageX = 0;
        n.pageY = 0;
        n.changedTouches = l;
        n.preventDefault = function() {
            this.Ma.returnValue = m;
            this.Ma.preventDefault && this.Ma.preventDefault()
        }
        ;
        n.stopPropagation = function() {
            this.Ma.cancelBubble = k;
            this.Ma.stopPropagation && this.Ma.stopPropagation()
        }
        ;
        var Ad = q("yt.events.listeners_") || {};
        t("yt.events.listeners_", Ad);
        var Bd = q("yt.events.counter_") || {
            count: 0
        };
        t("yt.events.counter_", Bd);
        function Cd(a, b, c, d) {
            return nb(Ad, function(e) {
                return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
            })
        }
        function R(a, b, c, d) {
            function e(b) {
                b = new yd(b);
                b.currentTarget = a;
                return c.call(a, b)
            }
            if (!a || !a.addEventListener && !a.attachEvent)
                return "";
            var d = !!d
              , f = Cd(a, b, c, d);
            if (f)
                return f;
            f = ++Bd.count + "";
            Ad[f] = [a, b, c, e, d];
            a.addEventListener ? a.addEventListener(b, e, d) : a.attachEvent("on" + b, e);
            return f
        }
        function Dd(a, b, c, d) {
            var e;
            e = R(a, b, function() {
                S(e);
                c.apply(a, arguments)
            }, d)
        }
        function Ed(a, b) {
            Fd(a, "click", b, function(a) {
                return "li" === a.nodeName.toLowerCase() && k
            })
        }
        function Gd(a, b, c, d) {
            return Fd(a, b, c, function(a) {
                return A(a, d)
            })
        }
        function Fd(a, b, c, d) {
            var e = a || document;
            return R(e, b, function(a) {
                var b = xc(a.target, function(a) {
                    return a === e || d(a)
                }, k);
                b && b !== e && (a.currentTarget = b,
                c.call(b, a))
            })
        }
        function Hd(a, b, c, d) {
            (a = Cd(a, b, c, !!d)) && S(a)
        }
        function S(a) {
            "string" == typeof a && (a = [a]);
            w(a, function(a) {
                if (a in Ad) {
                    var c = Ad[a]
                      , d = c[0]
                      , e = c[1]
                      , f = c[3]
                      , c = c[4];
                    d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent("on" + e, f);
                    delete Ad[a]
                }
            })
        }
        function Id(a) {
            a = a || window.event;
            a = a.target || a.srcElement;
            3 == a.nodeType && (a = a.parentNode);
            return a
        }
        function Jd(a) {
            a = a || window.event;
            a.cancelBubble = k;
            a.stopPropagation && a.stopPropagation()
        }
        function Kd(a) {
            a = a || window.event;
            a.returnValue = m;
            a.preventDefault && a.preventDefault();
            return m
        }
        function Ld(a) {
            if (document.createEvent) {
                var b = document.createEvent("HTMLEvents");
                b.initEvent("click", k, k);
                a.dispatchEvent(b)
            } else
                b = document.createEventObject(),
                a.fireEvent("onclick", b)
        }
        ;function Md(a) {
            this.b = a
        }
        var Nd = /\s*;\s*/;
        function Od(a, b, c, d, e, f) {
            /[;=\s]/.test(b) && h(Error('Invalid cookie name "' + b + '"'));
            /[;\r\n]/.test(c) && h(Error('Invalid cookie value "' + c + '"'));
            ca(d) || (d = -1);
            f = f ? ";domain=" + f : "";
            e = e ? ";path=" + e : "";
            d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(na() + 1E3 * d)).toUTCString();
            a.b.cookie = b + "=" + c + f + e + d + ""
        }
        function Pd(a, b, c) {
            for (var d = b + "=", a = (a.b.cookie || "").split(Nd), e = 0, f; f = a[e]; e++) {
                if (0 == f.indexOf(d))
                    return f.substr(d.length);
                if (f == b)
                    return ""
            }
            return c
        }
        function Qd(a, b, c, d) {
            var e = ca(Pd(a, b));
            Od(a, b, "", 0, c, d);
            return e
        }
        Md.prototype.vd = function() {
            return Rd(this).keys
        }
        ;
        Md.prototype.wd = function() {
            return Rd(this).Ff
        }
        ;
        Md.prototype.V = function() {
            return !this.b.cookie ? 0 : (this.b.cookie || "").split(Nd).length
        }
        ;
        Md.prototype.clear = function() {
            for (var a = Rd(this).keys, b = a.length - 1; 0 <= b; b--)
                Qd(this, a[b])
        }
        ;
        function Rd(a) {
            for (var a = (a.b.cookie || "").split(Nd), b = [], c = [], d, e, f = 0; e = a[f]; f++)
                d = e.indexOf("="),
                -1 == d ? (b.push(""),
                c.push(e)) : (b.push(e.substring(0, d)),
                c.push(e.substring(d + 1)));
            return {
                keys: b,
                Ff: c
            }
        }
        var Sd = new Md(document);
        Sd.c = 3950;
        function Td(a, b, c, d, e) {
            Od(Sd, "" + a, b, c, d || "/", e || "youtube.com")
        }
        function Ud(a, b) {
            return Pd(Sd, "" + a, b)
        }
        function Vd(a, b, c) {
            return Qd(Sd, "" + a, b || "/", c || "youtube.com")
        }
        ;function Wd() {
            var a = Ud(this.b);
            if (a)
                for (var a = unescape(a).split("&"), b = 0; b < a.length; b++) {
                    var c = a[b].split("=")
                      , d = c[0];
                    (c = c[1]) && (Xd[d] = c.toString())
                }
        }
        aa(Wd);
        var Xd = q("yt.prefs.UserPrefs.prefs_") || {};
        t("yt.prefs.UserPrefs.prefs_", Xd);
        Wd.prototype.b = "PREF";
        function Yd(a) {
            /^f([1-9][0-9]*)$/.test(a) && h("ExpectedRegexMatch: " + a)
        }
        function Zd(a) {
            /^\w+$/.test(a) || h("ExpectedRegexMismatch: " + a)
        }
        function $d(a) {
            a = Xd[a] !== i ? Xd[a].toString() : l;
            return a != l && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : l
        }
        function ae(a) {
            Zd(a);
            Yd(a);
            a = Xd[a] !== i ? Xd[a].toString() : l;
            return a != l ? a : ""
        }
        function be(a, b) {
            Zd(a);
            Yd(a);
            b == l && h("ExpectedNotNull");
            Xd[a] = b.toString()
        }
        function ce(a, b) {
            return !!(($d("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
        }
        function de(a, b) {
            var c = "f" + (Math.floor(a / 31) + 1)
              , d = 1 << a % 31
              , e = $d(c) || 0
              , e = b ? e | d : e & ~d;
            0 == e ? delete Xd[c] : (d = e.toString(16),
            Xd[c] = d.toString())
        }
        function ee(a) {
            var a = a.b, b = [], c;
            for (c in Xd)
                b.push(c + "=" + escape(Xd[c]));
            Td(a, b.join("&"), 31536E4)
        }
        Wd.prototype.clear = function() {
            Xd = {}
        }
        ;
        function fe(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        }
        fe.prototype.La = function() {
            return new fe(this.top,this.right,this.bottom,this.left)
        }
        ;
        fe.prototype.contains = function(a) {
            return !this || !a ? m : a instanceof fe ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
        }
        ;
        function ge(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        }
        ge.prototype.La = function() {
            return new ge(this.left,this.top,this.width,this.height)
        }
        ;
        ge.prototype.contains = function(a) {
            return a instanceof ge ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
        }
        ;
        function he(a, b, c) {
            r(b) ? ie(a, c, b) : kb(b, ma(ie, a))
        }
        function ie(a, b, c) {
            a.style[Ia(c)] = b
        }
        function je(a, b) {
            var c = Xb(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, l)) ? c[b] || c.getPropertyValue(b) || "" : ""
        }
        function ke(a, b) {
            return a.currentStyle ? a.currentStyle[b] : l
        }
        function le(a, b) {
            return je(a, b) || ke(a, b) || a.style && a.style[b]
        }
        function me(a) {
            var b = a.getBoundingClientRect();
            D && (a = a.ownerDocument,
            b.left -= a.documentElement.clientLeft + a.body.clientLeft,
            b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        }
        function ne(a) {
            if (D && !Sb(8))
                return a.offsetParent;
            for (var b = Xb(a), c = le(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode)
                if (c = le(a, "position"),
                d = d && "static" == c && a != b.documentElement && a != b.body,
                !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                    return a;
            return l
        }
        function oe(a) {
            for (var b = new fe(0,Infinity,Infinity,0), c = Vb(a), d = c.b.body, e = c.b.documentElement, f = !Eb && ac(c.b) ? c.b.documentElement : c.b.body; a = ne(a); )
                if ((!D || 0 != a.clientWidth) && (!Eb || 0 != a.clientHeight || a != d) && a != d && a != e && "visible" != le(a, "overflow")) {
                    var g = pe(a), j;
                    j = a;
                    if (Db && !G("1.9")) {
                        var o = parseFloat(je(j, "borderLeftWidth"));
                        if (qe(j))
                            var v = j.offsetWidth - j.clientWidth - o - parseFloat(je(j, "borderRightWidth"))
                              , o = o + v;
                        j = new hb(o,parseFloat(je(j, "borderTopWidth")))
                    } else
                        j = new hb(j.clientLeft,j.clientTop);
                    g.x += j.x;
                    g.y += j.y;
                    b.top = Math.max(b.top, g.y);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
                }
            d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top, f);
            c = $b(c.b.parentWindow || c.b.defaultView || window);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : l
        }
        function pe(a) {
            var b, c = Xb(a), d = le(a, "position"), e = Db && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new hb(0,0), g;
            b = c ? Xb(c) : document;
            g = D && !Sb(9) && !zc(Vb(b)) ? b.body : b.documentElement;
            if (a == g)
                return f;
            if (a.getBoundingClientRect)
                b = me(a),
                a = Ac(Vb(c)),
                f.x = b.left + a.x,
                f.y = b.top + a.y;
            else if (c.getBoxObjectFor && !e)
                b = c.getBoxObjectFor(a),
                a = c.getBoxObjectFor(g),
                f.x = b.screenX - a.screenX,
                f.y = b.screenY - a.screenY;
            else {
                b = a;
                do {
                    f.x += b.offsetLeft;
                    f.y += b.offsetTop;
                    b != a && (f.x += b.clientLeft || 0,
                    f.y += b.clientTop || 0);
                    if (Eb && "fixed" == le(b, "position")) {
                        f.x += c.body.scrollLeft;
                        f.y += c.body.scrollTop;
                        break
                    }
                    b = b.offsetParent
                } while (b && b != a);
                if (Cb || Eb && "absolute" == d)
                    f.y -= c.body.offsetTop;
                for (b = a; (b = ne(b)) && b != c.body && b != g; )
                    if (f.x -= b.scrollLeft,
                    !Cb || "TR" != b.tagName)
                        f.y -= b.scrollTop
            }
            return f
        }
        function re(a) {
            var b = new hb;
            if (1 == a.nodeType)
                if (a.getBoundingClientRect)
                    a = me(a),
                    b.x = a.left,
                    b.y = a.top;
                else {
                    var c = Ac(Vb(a))
                      , a = pe(a);
                    b.x = a.x - c.x;
                    b.y = a.y - c.y
                }
            else {
                var c = fa(a.Cg)
                  , d = a;
                a.targetTouches ? d = a.targetTouches[0] : c && a.na.targetTouches && (d = a.na.targetTouches[0]);
                b.x = d.clientX;
                b.y = d.clientY
            }
            return b
        }
        function se(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        }
        function te(a) {
            if ("none" != le(a, "display"))
                return ue(a);
            var b = a.style
              , c = b.display
              , d = b.visibility
              , e = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            a = ue(a);
            b.display = c;
            b.position = e;
            b.visibility = d;
            return a
        }
        function ue(a) {
            var b = a.offsetWidth
              , c = a.offsetHeight
              , d = Eb && !b && !c;
            return (!ca(b) || d) && a.getBoundingClientRect ? (a = me(a),
            new jb(a.right - a.left,a.bottom - a.top)) : new jb(b,c)
        }
        function ve(a) {
            var b = pe(a)
              , a = te(a);
            return new ge(b.x,b.y,a.width,a.height)
        }
        function qe(a) {
            return "rtl" == le(a, "direction")
        }
        function we(a, b) {
            if (/^\d+px?$/.test(b))
                return parseInt(b, 10);
            var c = a.style.left
              , d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = b;
            var e = a.style.pixelLeft;
            a.style.left = c;
            a.runtimeStyle.left = d;
            return e
        }
        var xe = {
            thin: 2,
            medium: 4,
            thick: 6
        };
        function ye(a, b) {
            if ("none" == ke(a, b + "Style"))
                return 0;
            var c = ke(a, b + "Width");
            return c in xe ? xe[c] : we(a, c)
        }
        ;function ze(a, b) {
            if ((a = H(a)) && a.style)
                a.style.display = b ? "" : "none",
                B(a, "hid", !b)
        }
        function Ae(a) {
            a = H(a);
            return !a ? m : !("none" == a.style.display || A(a, "hid"))
        }
        function Be(a) {
            if (a = H(a))
                Ae(a) ? (a.style.display = "none",
                x(a, "hid")) : (a.style.display = "",
                y(a, "hid"))
        }
        function Ce(a, b) {
            if (a = H(a))
                a.style.visibility = b ? "visible" : "hidden"
        }
        function T(a) {
            w(arguments, function(a) {
                ze(a, k)
            })
        }
        function U(a) {
            w(arguments, function(a) {
                ze(a, m)
            })
        }
        function De(a) {
            w(arguments, Be)
        }
        ;function Ee(a, b, c, d, e, f, g) {
            var j = [];
            a && j.push(a, ":");
            c && (j.push("//"),
            b && j.push(b, "@"),
            j.push(c),
            d && j.push(":", d));
            e && j.push(e);
            f && j.push("?", f);
            g && j.push("#", g);
            return j.join("")
        }
        var Fe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
        function Ge(a) {
            if (He) {
                He = m;
                var b = p.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = Ie(c)) && c != b.hostname)
                        He = k,
                        h(Error())
                }
            }
            return a.match(Fe)
        }
        var He = Eb;
        function Ie(a) {
            return (a = Ge(a)[3] || l) && decodeURIComponent(a)
        }
        function Je() {
            var a = Ge(document.location.href);
            return Ee(a[1], a[2], a[3], a[4])
        }
        function Ke(a) {
            a = Ge(a);
            return Ee(l, l, l, l, a[5], a[6], a[7])
        }
        function Le(a, b, c) {
            if (da(b))
                for (var d = 0; d < b.length; d++)
                    Le(a, "" + b[d], c);
            else
                b != l && c.push("&", a, "" === b ? "" : "=", encodeURIComponent("" + b))
        }
        function Me(a, b) {
            for (var c in b)
                Le(c, b[c], a);
            return a
        }
        function Ne(a) {
            a = Me([], a);
            a[0] = "";
            return a.join("")
        }
        ;function Oe(a) {
            "?" == a.charAt(0) && (a = a.substr(1));
            for (var a = a.split("&"), b = {}, c = 0, d = a.length; c < d; c++) {
                var e = a[c].split("=");
                if (1 == e.length && e[0] || 2 == e.length) {
                    var f = e[0]
                      , e = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
                    f in b ? da(b[f]) ? Va(b[f], e) : b[f] = [b[f], e] : b[f] = e
                }
            }
            return b
        }
        function Pe(a) {
            return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0],
            a = a.split("?", 2),
            Oe(1 < a.length ? a[1] : a[0])) : {}
        }
        function Qe(a) {
            "#" == a.charAt(0) && (a = "!" == a.charAt(1) ? a.substr(2) : a.substr(1));
            return Oe(a)
        }
        function Re(a, b) {
            var c = Me([a], b);
            if (c[1]) {
                var d = c[0]
                  , e = d.indexOf("#");
                0 <= e && (c.push(d.substr(e)),
                c[0] = d = d.substr(0, e));
                e = d.indexOf("?");
                0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = i)
            }
            return c.join("")
        }
        var Se = Ie;
        function Te(a, b) {
            var c = a.split("?", 2), a = c[0], c = Oe(c[1] || ""), d;
            for (d in b)
                c[d] = b[d];
            return Re(a, c)
        }
        function Ue(a) {
            a = Ve(a);
            return We(a) || Xe(a)
        }
        function We(a) {
            return a === l ? m : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? k : m
        }
        function Xe(a) {
            return a === l ? m : "google" == a[1] ? k : "google" == a[2] ? "au" == a[0] && "com" == a[1] ? k : "uk" == a[0] && "co" == a[1] ? k : m : m
        }
        function Ve(a) {
            a = Se(a);
            return a === l ? l : a.split(".").reverse()
        }
        ;function Ye(a) {
            a = a || {};
            this.url = a.url || this.url;
            this.urlV8 = a.url_v8 || this.urlV8;
            this.urlV9As2 = a.url_v9as2 || this.urlV9As2;
            this.minVersion = a.min_version || this.minVersion;
            this.args = a.args || pb(Ze);
            this.assets = a.assets || {};
            this.attrs = a.attrs || pb($e);
            this.params = a.params || pb(af);
            this.fallback = a.fallback || this.fallback;
            this.fallbackMessage = a.fallbackMessage || this.fallbackMessage;
            this.html5 = a.html5 || this.html5;
            this.disable = a.disable || {}
        }
        var Ze = {
            enablejsapi: 1
        }
          , $e = {
            width: "640",
            height: "385"
        }
          , af = {
            allowscriptaccess: "always",
            allowfullscreen: "true",
            bgcolor: "#000000"
        };
        n = Ye.prototype;
        n.url = "";
        n.urlV8 = "";
        n.urlV9As2 = "";
        n.minVersion = "8.0.0";
        n.html5 = m;
        function bf() {
            this.b = [];
            cf(this)
        }
        aa(bf);
        n = bf.prototype;
        n.Q = 0;
        n.ya = 0;
        n.$a = 0;
        n.Ec = "";
        n.va = 0;
        n.load = function(a) {
            3 <= this.va ? a(this) : this.b.push(a)
        }
        ;
        n.isSupported = function(a, b, c) {
            a = "string" == typeof a ? a.split(".") : [a, b, c];
            a[0] = parseInt(a[0], 10) || 0;
            a[1] = parseInt(a[1], 10) || 0;
            a[2] = parseInt(a[2], 10) || 0;
            return this.Q > a[0] || this.Q == a[0] && this.ya > a[1] || this.Q == a[0] && this.ya == a[1] && this.$a >= a[2]
        }
        ;
        function df(a) {
            return -1 < a.Ec.indexOf("Gnash") && -1 == a.Ec.indexOf("AVM2") || 9 == a.Q && 1 == a.ya || 9 == a.Q && 0 == a.ya && 1 == a.$a ? m : 9 <= a.Q
        }
        function ef(a) {
            return -1 < navigator.userAgent.indexOf("Sony/COM2") && !a.isSupported(9, 1, 58) ? m : k
        }
        function cf(a) {
            if (3 > a.va)
                if (1 > a.va) {
                    var b = q("window.navigator.plugins")
                      , c = q("window.navigator.mimeTypes")
                      , b = b && b["Shockwave Flash"]
                      , c = c && c["application/x-shockwave-flash"]
                      , c = b && c && c.enabledPlugin && b.description || "";
                    if (b = c) {
                        var d = b.indexOf("Shockwave Flash");
                        0 <= d && (b = b.substr(d + 15));
                        for (var d = b.split(" "), e = "", b = "", f = 0, g = d.length; f < g; f++)
                            if (e)
                                if (b)
                                    break;
                                else
                                    b = d[f];
                            else
                                e = d[f];
                        e = e.split(".");
                        d = parseInt(e[0], 10) || 0;
                        e = parseInt(e[1], 10) || 0;
                        f = 0;
                        if ("r" == b.charAt(0) || "d" == b.charAt(0))
                            f = parseInt(b.substr(1), 10) || 0;
                        b = [d, e, f]
                    } else
                        b = [0, 0, 0];
                    a.Ec = c;
                    c = b;
                    a.Q = c[0];
                    a.ya = c[1];
                    a.$a = c[2];
                    a.va = 1;
                    0 < a.Q ? ff(a) : cf(a)
                } else
                    2 > a.va ? gf(a) : ff(a)
        }
        n.pe = function(a) {
            a ? (a = a.split(" ")[1].split(","),
            a = [parseInt(a[0], 10) || 0, parseInt(a[1], 10) || 0, parseInt(a[2], 10) || 0]) : a = [0, 0, 0];
            this.Q = a[0];
            this.ya = a[1];
            this.$a = a[2];
            this.va = 2;
            0 < this.Q ? ff(this) : cf(this)
        }
        ;
        function ff(a) {
            if (3 > a.va) {
                a.va = 3;
                for (var b = 0, c = a.b.length; b < c; b++)
                    a.b[b](a);
                a.b = []
            }
        }
        function gf(a) {
            function b() {
                if (c && "GetVariable"in c)
                    try {
                        d = c.GetVariable("$version")
                    } catch (a) {
                        d = ""
                    }
                d || 10 <= o ? (e && f && e.removeChild(f),
                j(d || "")) : (o++,
                N(b, 10))
            }
            var c, d, e, f;
            if (hd) {
                try {
                    c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (g) {
                    c = l
                }
                c || a.pe("")
            } else
                e = document.getElementsByTagName("body")[0],
                f = document.createElement("object"),
                f.setAttribute("type", "application/x-shockwave-flash"),
                c = e.appendChild(f);
            var j = s(a.pe, a)
              , o = 0;
            N(b, 0)
        }
        ;function hf(a, b, c) {
            if ((a = H(a)) && b && c) {
                c instanceof Ye || (c = new Ye(c));
                var d = pb(c.attrs)
                  , e = pb(c.params);
                e.flashvars = Ne(c.args);
                if (hd) {
                    d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                    e.movie = b;
                    var b = document.createElement("object"), f;
                    for (f in d)
                        b.setAttribute(f, d[f]);
                    for (f in e)
                        d = document.createElement("param"),
                        d.setAttribute("name", f),
                        d.setAttribute("value", e[f]),
                        b.appendChild(d)
                } else {
                    d.type = "application/x-shockwave-flash";
                    d.src = b;
                    b = document.createElement("embed");
                    for (f in d)
                        b.setAttribute(f, d[f]);
                    for (f in e)
                        b.setAttribute(f, e[f])
                }
                e = document.createElement("div");
                e.appendChild(b);
                a.innerHTML = e.innerHTML
            }
        }
        function jf(a, b) {
            a = H(a);
            b instanceof Ye || (b = new Ye(b));
            if (window != window.top) {
                var c = l;
                document.referrer && (c = document.referrer.substring(0, 128));
                b.args.framer = c
            }
            kf(function(c) {
                c.isSupported(b.minVersion) || L("IS_OPERA_MINI") ? (c = df(c) && b.url || ef(c) && b.urlV9As2 || b.urlV8 || b.url,
                hf(a, c, b)) : 0 == c.Q && b.fallback ? b.fallback() : 0 == c.Q && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + O("FLASH_UPGRADE", i, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="e">Download it from Adobe.</a>') + "</div>"
            })
        }
        function lf(a, b) {
            if (a) {
                a instanceof Ye || (a = new Ye(a));
                var c = !!b
                  , d = H(a.attrs.id)
                  , e = d ? d.parentNode : l;
                if (!d || !e)
                    N(function() {
                        lf(a)
                    }, 50);
                else {
                    if (window != window.top) {
                        var f = l;
                        if (document.referrer) {
                            var g = document.referrer.substring(0, 128);
                            Ue(g) || (f = g)
                        } else
                            f = "unknown";
                        f && (c = k,
                        a.args.framer = f)
                    }
                    kf(function(b) {
                        if (b.isSupported(a.minVersion)) {
                            var f = "";
                            -1 < navigator.userAgent.indexOf("Sony/COM2") || (f = d.src || d.movie);
                            if (df(b))
                                (f != a.url || c) && hf(e, a.url, a);
                            else if (ef(b))
                                (f != a.urlV9As2 || c) && hf(e, a.urlV9As2, a);
                            else if (f != a.urlV8 || c)
                                if (hf(e, a.urlV8, a),
                                b = H("flash10-promo-div"))
                                    T(b),
                                    b = Wd.getInstance(),
                                    f = parseInt(ae("ftuc") || 0, 10) + 1,
                                    be("ftuc", f),
                                    ee(b)
                        } else
                            hd && b.isSupported(6, 0, 65) ? (b = new Ye({
                                url: "/swf/expressInstall.swf",
                                args: {
                                    MMredirectURL: window.location,
                                    MMplayerType: "ActiveX",
                                    MMdoctitle: document.title
                                }
                            }),
                            hf(e, b.url, b)) : 0 == b.Q && a.fallback ? a.fallback() : 0 == b.Q && a.fallbackMessage ? a.fallbackMessage() : e.innerHTML = '<div id="flash-upgrade">' + O("FLASH_UPGRADE") + "</div>"
                    })
                }
            }
        }
        function kf(a) {
            bf.getInstance().load(function(b) {
                var c = Wd.getInstance();
                be("fv", [b.Q, b.ya, b.$a].join("."));
                ee(c);
                a(b)
            })
        }
        ;function mf() {}
        mf.prototype.o = m;
        mf.prototype.ma = function() {
            this.o || (this.o = k,
            this.U())
        }
        ;
        mf.prototype.U = function() {
            this.O && nf.apply(l, this.O);
            if (this.G)
                for (; this.G.length; )
                    this.G.shift()()
        }
        ;
        function nf(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                ea(d) ? nf.apply(l, d) : d && "function" == typeof d.ma && d.ma()
            }
        }
        ;function of() {
            this.b = [];
            this.ba = {}
        }
        u(of, mf);
        n = of.prototype;
        n.zd = 1;
        n.Mb = 0;
        n.Qb = function(a, b, c) {
            var d = this.ba[a];
            d || (d = this.ba[a] = []);
            var e = this.zd;
            this.b[e] = a;
            this.b[e + 1] = b;
            this.b[e + 2] = c;
            this.zd = e + 3;
            d.push(e);
            return e
        }
        ;
        n.rc = function(a) {
            if (0 != this.Mb)
                return this.c || (this.c = []),
                this.c.push(a),
                m;
            var b = this.b[a];
            if (b) {
                var c = this.ba[b];
                c && Sa(c, a);
                delete this.b[a];
                delete this.b[a + 1];
                delete this.b[a + 2]
            }
            return !!b
        }
        ;
        n.Ra = function(a, b) {
            var c = this.ba[a];
            if (c) {
                this.Mb++;
                for (var d = Xa(arguments, 1), e = 0, f = c.length; e < f; e++) {
                    var g = c[e];
                    this.b[g + 1].apply(this.b[g + 2], d)
                }
                this.Mb--;
                if (this.c && 0 == this.Mb)
                    for (; c = this.c.pop(); )
                        this.rc(c);
                return 0 != e
            }
            return m
        }
        ;
        n.clear = function(a) {
            if (a) {
                var b = this.ba[a];
                b && (w(b, this.rc, this),
                delete this.ba[a])
            } else
                this.b.length = 0,
                this.ba = {}
        }
        ;
        n.V = function(a) {
            if (a) {
                var b = this.ba[a];
                return b ? b.length : 0
            }
            a = 0;
            for (b in this.ba)
                a += this.V(b);
            return a
        }
        ;
        n.U = function() {
            of.P.U.call(this);
            delete this.b;
            delete this.ba;
            delete this.c
        }
        ;
        var pf = q("yt.pubsub.instance_") || new of;
        of.prototype.subscribe = of.prototype.Qb;
        of.prototype.unsubscribeByKey = of.prototype.rc;
        of.prototype.publish = of.prototype.Ra;
        of.prototype.clear = of.prototype.clear;
        t("yt.pubsub.instance_", pf);
        function qf(a, b, c) {
            var d = q("yt.pubsub.instance_");
            return d ? d.subscribe(a, function() {
                var a = arguments;
                N(function() {
                    b.apply(c || p, a)
                }, 0)
            }, c) : 0
        }
        function rf(a) {
            var b = q("yt.pubsub.instance_");
            b && ("number" == typeof a && (a = [a]),
            w(a, function(a) {
                b.unsubscribeByKey(a)
            }))
        }
        function sf(a, b) {
            var c = q("yt.pubsub.instance_");
            return c ? c.publish.apply(c, arguments) : m
        }
        ;var tf;
        function uf(a, b, c) {
            this.c = a;
            vf && (this.i = b);
            this.O = c || window;
            this.e = this.O.location;
            this.Y = this.e.href.split("#")[0];
            this.G = s(this.oa, this)
        }
        var wf = D && 8 <= document.documentMode || Db && G("1.9.2") || Eb && G("532.1")
          , vf = D && !wf;
        uf.prototype.pa = function(a, b) {
            this.f && (S(this.f),
            delete this.f);
            this.o && (gd(this.o),
            delete this.o);
            if (a) {
                this.b = xf(this);
                if (vf) {
                    var c = this.i.contentWindow.document.body;
                    (!c || !c.innerHTML) && yf(this, this.b)
                }
                b || this.c(this.b);
                wf ? this.f = R(this.O, "hashchange", this.G) : this.o = ed(this.G, 200)
            }
        }
        ;
        uf.prototype.oa = function() {
            if (vf) {
                var a;
                a = (a = this.i.contentWindow.document.body) ? decodeURIComponent(a.innerHTML.substring(1).replace(/\+/g, " ")) : "";
                a != this.b ? (this.b = a,
                zf(this, a),
                this.c(a)) : (a = xf(this),
                a != this.b && (this.b = a,
                yf(this, a),
                this.c(a)))
            } else
                a = xf(this),
                a != this.b && (this.b = a,
                this.c(a))
        }
        ;
        function xf(a) {
            var a = a.e.href
              , b = a.indexOf("#");
            return 0 > b ? "" : a.substring(b + 1)
        }
        function zf(a, b) {
            var c = a.Y + "#" + b
              , d = a.e.href;
            d == c || d + "#" == c || (a.e.href = c)
        }
        function yf(a, b) {
            var c = a.i.contentWindow.document
              , d = "#" + encodeURIComponent("" + b);
            if ((c.body ? c.body.innerHTML : "") != d)
                d = ["<title>", sa(window.document.title || ""), "</title><body>", d, "</body>"],
                c.open("text/html"),
                c.write(d.join("")),
                c.close()
        }
        uf.prototype.X = function(a, b, c) {
            this.b = "" + a;
            vf && yf(this, a);
            zf(this, a);
            c || this.c(this.b)
        }
        ;
        var Af = new function() {
            this.b = na()
        }
        ;
        function Bf(a) {
            this.b = a || "";
            this.c = Af
        }
        n = Bf.prototype;
        n.dd = k;
        n.Ve = k;
        n.Ue = k;
        n.ed = m;
        n.We = m;
        function Cf(a) {
            return 10 > a ? "0" + a : "" + a
        }
        function Df(a) {
            Bf.call(this, a)
        }
        u(Df, Bf);
        function Ef(a) {
            return Ff(a || arguments.callee.caller, [])
        }
        function Ff(a, b) {
            var c = [];
            if (Qa(b, a))
                c.push("[...circular reference...]");
            else if (a && 50 > b.length) {
                c.push(Gf(a) + "(");
                for (var d = a.arguments, e = 0; e < d.length; e++) {
                    0 < e && c.push(", ");
                    var f;
                    f = d[e];
                    switch (typeof f) {
                    case "object":
                        f = f ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        f = "" + f;
                        break;
                    case "boolean":
                        f = f ? "true" : "false";
                        break;
                    case "function":
                        f = (f = Gf(f)) ? f : "[fn]";
                        break;
                    default:
                        f = typeof f
                    }
                    40 < f.length && (f = f.substr(0, 40) + "...");
                    c.push(f)
                }
                b.push(a);
                c.push(")\n");
                try {
                    c.push(Ff(a.caller, b))
                } catch (g) {
                    c.push("[exception trying to get caller]\n")
                }
            } else
                a ? c.push("[...long stack...]") : c.push("[end]");
            return c.join("")
        }
        function Gf(a) {
            if (Hf[a])
                return Hf[a];
            a = "" + a;
            if (!Hf[a]) {
                var b = /function ([^\(]+)/.exec(a);
                Hf[a] = b ? b[1] : "[Anonymous]"
            }
            return Hf[a]
        }
        var Hf = {};
        function If(a, b, c, d, e) {
            "number" == typeof e || Jf++;
            this.i = d || na();
            this.o = a;
            this.f = b;
            this.e = c;
            delete this.c;
            delete this.b
        }
        If.prototype.c = l;
        If.prototype.b = l;
        var Jf = 0;
        If.prototype.getLevel = function() {
            return this.o
        }
        ;
        function Kf(a) {
            this.i = a
        }
        Kf.prototype.e = l;
        Kf.prototype.c = l;
        Kf.prototype.b = l;
        function Lf(a, b) {
            this.name = a;
            this.value = b
        }
        Lf.prototype.toString = function() {
            return this.name
        }
        ;
        var Mf = new Lf("SHOUT",1200)
          , Nf = new Lf("SEVERE",1E3)
          , Of = new Lf("WARNING",900)
          , Pf = new Lf("INFO",800)
          , Qf = new Lf("CONFIG",700);
        Kf.prototype.getLevel = function() {
            return this.c
        }
        ;
        function Rf(a) {
            return a.c ? a.c : a.e ? Rf(a.e) : l
        }
        Kf.prototype.log = function(a, b, c) {
            if (a.value >= Rf(this).value) {
                a = this.f(a, b, c);
                b = "log:" + a.f;
                p.console && (p.console.timeStamp ? p.console.timeStamp(b) : p.console.markTimeline && p.console.markTimeline(b));
                p.msWriteProfilerMark && p.msWriteProfilerMark(b);
                for (b = this; b; ) {
                    var c = b
                      , d = a;
                    if (c.b)
                        for (var e = 0, f = i; f = c.b[e]; e++)
                            f(d);
                    b = b.e
                }
            }
        }
        ;
        Kf.prototype.f = function(a, b, c) {
            var d = new If(a,"" + b,this.i);
            if (c) {
                d.c = c;
                var e;
                var f = arguments.callee.caller;
                try {
                    var g;
                    var j = q("window.location.href");
                    if (r(c))
                        g = {
                            message: c,
                            name: "Unknown error",
                            lineNumber: "Not available",
                            fileName: j,
                            stack: "Not available"
                        };
                    else {
                        var o, v, E = m;
                        try {
                            o = c.lineNumber || c.ih || "Not available"
                        } catch (C) {
                            o = "Not available",
                            E = k
                        }
                        try {
                            v = c.fileName || c.filename || c.sourceURL || j
                        } catch (F) {
                            v = "Not available",
                            E = k
                        }
                        g = E || !c.lineNumber || !c.fileName || !c.stack ? {
                            message: c.message,
                            name: c.name,
                            lineNumber: o,
                            fileName: v,
                            stack: c.stack || "Not available"
                        } : c
                    }
                    e = "Message: " + sa(g.message) + '\nUrl: <a href="view-source:' + g.fileName + '" target="_new">' + g.fileName + "</a>\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + sa(g.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + sa(Ef(f) + "-> ")
                } catch (V) {
                    e = "Exception trying to expose exception! You win, we lose. " + V
                }
                d.b = e
            }
            return d
        }
        ;
        Kf.prototype.info = function(a, b) {
            this.log(Pf, a, b)
        }
        ;
        var Sf = l;
        function Uf() {
            this.o = s(this.f, this);
            this.b = new Df;
            this.b.dd = m;
            this.c = this.b.ed = m;
            this.e = "";
            this.i = {}
        }
        Uf.prototype.f = function(a) {
            if (!this.i[a.e]) {
                var b;
                b = this.b;
                var c = [];
                c.push(b.b, " ");
                if (b.dd) {
                    var d = new Date(a.i);
                    c.push("[", Cf(d.getFullYear() - 2E3) + Cf(d.getMonth() + 1) + Cf(d.getDate()) + " " + Cf(d.getHours()) + ":" + Cf(d.getMinutes()) + ":" + Cf(d.getSeconds()) + "." + Cf(Math.floor(d.getMilliseconds() / 10)), "] ")
                }
                if (b.Ve) {
                    var d = (a.i - b.c.b) / 1E3
                      , e = d.toFixed(3)
                      , f = 0;
                    if (1 > d)
                        f = 2;
                    else
                        for (; 100 > d; )
                            f++,
                            d *= 10;
                    for (; 0 < f--; )
                        e = " " + e;
                    c.push("[", e, "s] ")
                }
                b.Ue && c.push("[", a.e, "] ");
                b.We && c.push("[", a.getLevel().name, "] ");
                c.push(a.f, "\n");
                b.ed && a.c && c.push(a.b, "\n");
                b = c.join("");
                if (Vf)
                    switch (a.getLevel()) {
                    case Mf:
                        Wf("info", b);
                        break;
                    case Nf:
                        Wf("error", b);
                        break;
                    case Of:
                        Wf("warn", b);
                        break;
                    default:
                        Wf("debug", b)
                    }
                else
                    window.opera ? window.opera.postError(b) : this.e += b
            }
        }
        ;
        var Xf = l
          , Vf = window.console;
        function Wf(a, b) {
            var c = Vf;
            if (c[a])
                c[a](b);
            else
                c.log(b)
        }
        ;function Yf(a, b) {
            this.f = a;
            this.i = b || window;
            this.e = this.i.location;
            this.G = s(this.O, this)
        }
        var Zf = !!window.history.pushState && (!Eb || Eb && G("534.11"));
        Yf.prototype.X = function(a, b) {
            this.c && (S(this.c),
            delete this.c);
            this.o && (gd(this.o),
            delete this.o);
            a && Zf && (this.b = this.e.href,
            b || this.f(this.b),
            this.c = R(this.i, "popstate", this.G))
        }
        ;
        Yf.prototype.O = function(a) {
            var b = this.e.href;
            if ((a = a.state) || b != this.b)
                this.b = b,
                this.f(b, a)
        }
        ;
        Yf.prototype.Y = function(a, b, c) {
            if (a || b)
                a = a || this.e.href,
                this.i.history.pushState(b, "", a),
                this.b = a,
                c || this.f(a, b)
        }
        ;
        function $f(a) {
            var a = a || "hash"
              , b = q("yt.history.instance_");
            b || ("state" == a ? (b = new Yf(ag),
            Yf.prototype.setEnabled = Yf.prototype.X,
            Yf.prototype.add = Yf.prototype.Y) : (b = new uf(ag,H("legacy-history-iframe")),
            uf.prototype.setEnabled = uf.prototype.pa,
            uf.prototype.add = uf.prototype.X),
            tf = b,
            t("yt.history.instance_", tf));
            return b
        }
        function ag(a, b) {
            sf("navigate", a, b)
        }
        ;function bg(a) {
            a = "" + a;
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
                try {
                    return eval("(" + a + ")")
                } catch (b) {}
            h(Error("Invalid JSON string: " + a))
        }
        function cg(a) {
            return eval("(" + a + ")")
        }
        function dg(a) {
            this.b = a
        }
        function eg(a, b) {
            var c = [];
            fg(a, b, c);
            return c.join("")
        }
        function fg(a, b, c) {
            switch (typeof b) {
            case "string":
                gg(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == l) {
                    c.push("null");
                    break
                }
                if (da(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++)
                        c.push(e),
                        e = b[f],
                        fg(a, a.b ? a.b.call(b, "" + f, e) : e, c),
                        e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b)
                    Object.prototype.hasOwnProperty.call(b, f) && (e = b[f],
                    "function" != typeof e && (c.push(d),
                    gg(f, c),
                    c.push(":"),
                    fg(a, a.b ? a.b.call(b, f, e) : e, c),
                    d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                h(Error("Unknown type: " + typeof b))
            }
        }
        var hg = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\u0008": "\\b",
            "\u000c": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        }
          , ig = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
        function gg(a, b) {
            b.push('"', a.replace(ig, function(a) {
                if (a in hg)
                    return hg[a];
                var b = a.charCodeAt(0)
                  , e = "\\u";
                16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
                return hg[a] = e + b.toString(16)
            }), '"')
        }
        ;var jg = l;
        "undefined" != typeof XMLHttpRequest ? jg = function() {
            return new XMLHttpRequest
        }
        : "undefined" != typeof ActiveXObject && (jg = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        );
        function kg(a) {
            switch (a && "status"in a ? a.status : -1) {
            case 0:
            case 200:
            case 204:
            case 304:
                return k;
            default:
                return m
            }
        }
        ;function lg(a, b, c, d, e) {
            var f = jg && jg();
            if ("open"in f) {
                f.onreadystatechange = function() {
                    4 == (f && "readyState"in f ? f.readyState : 0) && b && b(f)
                }
                ;
                c = (c || "GET").toUpperCase();
                d = d || "";
                f.open(c, a, k);
                a = "POST" == c;
                if (e)
                    for (var g in e)
                        f.setRequestHeader(g, e[g]),
                        "content-type" == g.toLowerCase() && (a = m);
                a && f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                f.send(d);
                return f
            }
        }
        function W(a, b) {
            var c = b.format || "JSON";
            b.sb && (a = document.location.protocol + "//" + document.location.hostname + a);
            var d = b.n;
            d && (a = Te(a, d));
            var e = b.Ia || "";
            if (d = b.D)
                e = Oe(e),
                rb(e, d),
                e = Ne(e);
            var f = m, g, j = lg(a, function(a) {
                if (!f) {
                    f = k;
                    g && fd(g);
                    var d = kg(a)
                      , e = l;
                    if (d || 400 <= a.status && 500 > a.status)
                        e = mg(c, a);
                    if (d)
                        a: {
                            switch (c) {
                            case "XML":
                                d = 0 == parseInt(e && e.return_code, 10);
                                break a;
                            case "RAW":
                                d = k;
                                break a
                            }
                            d = !!e
                        }
                    var e = e || {}
                      , j = b.A || p;
                    d ? b.j && b.j.call(j, a, e) : b.B && b.B.call(j, a, e);
                    b.S && b.S.call(j, a, e)
                }
            }, b.method, e, b.headers);
            b.$f && 0 < b.timeout && (g = N(function() {
                f || (f = k,
                j.abort(),
                fd(g),
                b.$f.call(b.A || p, j))
            }, b.timeout))
        }
        function ng(a, b) {
            var c = b || {};
            c.method = a.method.toUpperCase();
            if ("POST" == c.method)
                c.Ia = Nc(a);
            else {
                var d = Jc(Kc(a))
                  , e = c.n || {};
                rb(e, d);
                c.n = e
            }
            W(a.action, c)
        }
        function mg(a, b) {
            var c = l;
            switch (a) {
            case "JSON":
                var d = b.responseText
                  , e = b.getResponseHeader("Content-Type") || "";
                d && 0 <= e.indexOf("json") && (c = cg(d));
                break;
            case "XML":
                if (d = (d = b.responseXML) ? og(d) : l)
                    c = {},
                    w(d.getElementsByTagName("*"), function(a) {
                        c[a.tagName] = pg(a)
                    })
            }
            return c
        }
        function qg(a, b) {
            var c = b.onComplete || l
              , d = b.onException || l
              , e = b.onError || l
              , f = b.update || l
              , g = b.json || m;
            return lg(a, function(a) {
                if (kg(a)) {
                    var b = a.responseXML, v = b ? og(b) : l, b = !(!b || !v), E, C;
                    if (b && (E = rg(v, "return_code"),
                    C = rg(v, "html_content"),
                    0 == E)) {
                        f && C && (H(f).innerHTML = C);
                        var F = rg(v, "js_content");
                        if (F) {
                            var V = document.createElement("script");
                            V.text = F;
                            document.getElementsByTagName("head")[0].appendChild(V)
                        }
                    }
                    c && (b ? (b = rg(v, "redirect_on_success"),
                    E && b ? window.location = b : ((v = rg(v, 0 == E ? "success_message" : "error_message")) && alert(v),
                    a = g ? eval("(" + C + ")") : a,
                    0 == E ? c(a) : d && d(a))) : a.responseText && c(a))
                } else
                    e && e(a)
            }, b.method || "POST", b.postBody || l, b.headers || l)
        }
        function og(a) {
            return !a ? l : (a = ("responseXML"in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : l
        }
        function rg(a, b) {
            if (!a)
                return l;
            var c = a.getElementsByTagName(b);
            return c && 0 < c.length ? pg(c[0]) : l
        }
        function pg(a) {
            var b = "";
            w(a.childNodes, function(a) {
                b += a.nodeValue
            });
            return b
        }
        var sg = {
            html5_ajax: "action_get_html5_token",
            watch_actions_ajax: "action_get_watch_actions_token",
            addto_ajax: "action_get_wl_token"
        }
          , tg = {
            html5_ajax: "html5_ajax_token",
            watch_actions_ajax: "watch_actions_ajax_token",
            addto_ajax: "addto_ajax_token"
        };
        function ug(a, b, c) {
            if (M(a) && b)
                window.setTimeout(b, 0);
            else {
                var d = Je() + "/token_ajax"
                  , e = {};
                e[sg[a]] = 1;
                W(d, {
                    format: "RAW",
                    method: "GET",
                    n: e,
                    S: function(d) {
                        var e = Oe(d.responseText)
                          , j = e[tg[a]];
                        j ? (cd(a, j),
                        b && b()) : c && c(d, e)
                    }
                })
            }
        }
        ;var vg = {}
          , wg = {};
        function xg(a, b, c) {
            a = H(a);
            c = c || ha(a);
            c in vg || (vg[c] = []);
            vg[c].push([a, b]);
            wg[c] = m;
            return c
        }
        function yg(a, b) {
            var a = H(a)
              , c = b || ha(a)
              , d = vg[c];
            d && (vg[c] = La(d, function(b) {
                return b[0] != a
            }))
        }
        function zg(a) {
            a in vg && !wg[a] && (w(vg[a], function(a) {
                var c = a[0]
                  , a = a[1];
                c && "IMG" == c.tagName && (c.onload = "",
                c.src = a)
            }),
            vg[a] = [],
            wg[a] = k)
        }
        ;function Ag(a, b, c) {
            var d = "scriptload-" + Ha(a)
              , e = document.getElementById(d)
              , f = e && Q(e, "loaded")
              , g = e && !f;
            if (f && !c)
                return b && b(),
                e;
            if (g && !c)
                return b && qf(d, b),
                e;
            e && (d = "scriptload-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ na()).toString(36)));
            b && qf(d, b);
            var j = Bg(a, d, function() {
                if (!Q(j, "loaded")) {
                    P(j, "loaded", "true");
                    sf(d);
                    var a = d
                      , b = q("yt.pubsub.instance_");
                    b && b.clear(a)
                }
            });
            return j
        }
        function Bg(a, b, c) {
            var d = document.createElement("script");
            d.id = b;
            d.onload = c;
            d.onreadystatechange = function() {
                if ("loaded" == d.readyState || "complete" == d.readyState)
                    d.onload()
            }
            ;
            d.src = a;
            a = document.getElementsByTagName("head")[0];
            a.insertBefore(d, a.firstChild);
            return d
        }
        ;var Cg = {}
          , Dg = 0;
        function Eg(a, b) {
            var c = new Image
              , d = "" + Dg++;
            Cg[d] = c;
            c.onload = c.onerror = function() {
                b && Cg[d] && b();
                delete Cg[d]
            }
            ;
            c.src = a;
            c = eval("null")
        }
        ;function X(a, b, c) {
            jd(a, b || "null");
            a = "a=" + a + (b ? "&" + b : "").replace(/\//g, "&");
            Eg("/gen_204?" + a, c)
        }
        function Fg(a, b, c, d) {
            a = Re("/sharing_services", {
                name: a,
                v: b,
                locale: c,
                feature: d
            });
            Eg(a)
        }
        ;function Gg(a, b, c, d, e, f, g) {
            var j, o;
            if (j = c.offsetParent) {
                var v = "HTML" == j.tagName || "BODY" == j.tagName;
                if (!v || "static" != le(j, "position"))
                    o = pe(j),
                    v || (v = (v = qe(j)) && Db ? -j.scrollLeft : v && (!D || !G("8")) ? j.scrollWidth - j.clientWidth - j.scrollLeft : j.scrollLeft,
                    o = ib(o, new hb(v,j.scrollTop)))
            }
            j = o || new hb;
            o = ve(a);
            if (v = oe(a)) {
                var E = new ge(v.left,v.top,v.right - v.left,v.bottom - v.top)
                  , v = Math.max(o.left, E.left)
                  , C = Math.min(o.left + o.width, E.left + E.width);
                if (v <= C) {
                    var F = Math.max(o.top, E.top)
                      , E = Math.min(o.top + o.height, E.top + E.height);
                    F <= E && (o.left = v,
                    o.top = F,
                    o.width = C - v,
                    o.height = E - F)
                }
            }
            v = Vb(a);
            F = Vb(c);
            if (v.b != F.b) {
                var C = v.b.body
                  , F = F.b.parentWindow || F.b.defaultView
                  , E = new hb(0,0)
                  , V = Xb(C) ? Xb(C).parentWindow || Xb(C).defaultView : window
                  , Tf = C;
                do {
                    var Ni = V == F ? pe(Tf) : re(Tf);
                    E.x += Ni.x;
                    E.y += Ni.y
                } while (V && V != F && (Tf = V.frameElement) && (V = V.parent));
                C = ib(E, pe(C));
                D && !zc(v) && (C = ib(C, Ac(v)));
                o.left += C.x;
                o.top += C.y
            }
            a = (b & 4 && qe(a) ? b ^ 2 : b) & -5;
            b = new hb(a & 2 ? o.left + o.width : o.left,a & 1 ? o.top + o.height : o.top);
            b = ib(b, j);
            e && (b.x += (a & 2 ? -1 : 1) * e.x,
            b.y += (a & 1 ? -1 : 1) * e.y);
            var bb;
            if (g && (bb = oe(c)))
                bb.top -= j.y,
                bb.right -= j.x,
                bb.bottom -= j.y,
                bb.left -= j.x;
            return Hg(b, c, d, f, bb, g, i)
        }
        function Hg(a, b, c, d, e, f, g) {
            var a = a.La()
              , j = 0
              , o = (c & 4 && qe(b) ? c ^ 2 : c) & -5
              , c = te(b)
              , g = g ? g.La() : c.La();
            if (d || 0 != o)
                (o & 2 ? a.x -= g.width + (d ? d.right : 0) : d && (a.x += d.left),
                o & 1) ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
            if (f) {
                if (e) {
                    j = a;
                    d = 0;
                    if (65 == (f & 65) && (j.x < e.left || j.x >= e.right))
                        f &= -2;
                    if (132 == (f & 132) && (j.y < e.top || j.y >= e.bottom))
                        f &= -5;
                    j.x < e.left && f & 1 && (j.x = e.left,
                    d |= 1);
                    j.x < e.left && (j.x + g.width > e.right && f & 16) && (g.width = Math.max(g.width - (j.x + g.width - e.right), 0),
                    d |= 4);
                    j.x + g.width > e.right && f & 1 && (j.x = Math.max(e.right - g.width, e.left),
                    d |= 1);
                    f & 2 && (d |= (j.x < e.left ? 16 : 0) | (j.x + g.width > e.right ? 32 : 0));
                    j.y < e.top && f & 4 && (j.y = e.top,
                    d |= 2);
                    j.y >= e.top && (j.y + g.height > e.bottom && f & 32) && (g.height = Math.max(g.height - (j.y + g.height - e.bottom), 0),
                    d |= 8);
                    j.y + g.height > e.bottom && f & 4 && (j.y = Math.max(e.bottom - g.height, e.top),
                    d |= 2);
                    f & 8 && (d |= (j.y < e.top ? 64 : 0) | (j.y + g.height > e.bottom ? 128 : 0));
                    j = d
                } else
                    j = 256;
                if (j & 496)
                    return j
            }
            f = a;
            e = Db && (wb || Hb) && G("1.9");
            f instanceof hb ? (a = f.x,
            f = f.y) : (a = f,
            f = i);
            b.style.left = se(a, e);
            b.style.top = se(f, e);
            if (!(c == g || (!c || !g ? 0 : c.width == g.width && c.height == g.height)))
                (a = zc(Vb(Xb(b))),
                D && (!a || !G("8"))) ? (c = b.style,
                a) ? (D ? (a = we(b, ke(b, "paddingLeft")),
                e = we(b, ke(b, "paddingRight")),
                f = we(b, ke(b, "paddingTop")),
                d = we(b, ke(b, "paddingBottom")),
                a = new fe(f,e,d,a)) : (a = je(b, "paddingLeft"),
                e = je(b, "paddingRight"),
                f = je(b, "paddingTop"),
                d = je(b, "paddingBottom"),
                a = new fe(parseFloat(f),parseFloat(e),parseFloat(d),parseFloat(a))),
                D ? (e = ye(b, "borderLeft"),
                f = ye(b, "borderRight"),
                d = ye(b, "borderTop"),
                b = ye(b, "borderBottom"),
                b = new fe(d,f,b,e)) : (e = je(b, "borderLeftWidth"),
                f = je(b, "borderRightWidth"),
                d = je(b, "borderTopWidth"),
                b = je(b, "borderBottomWidth"),
                b = new fe(parseFloat(d),parseFloat(f),parseFloat(b),parseFloat(e))),
                c.pixelWidth = g.width - b.left - a.left - a.right - b.right,
                c.pixelHeight = g.height - b.top - a.top - a.bottom - b.bottom) : (c.pixelWidth = g.width,
                c.pixelHeight = g.height) : (b = b.style,
                Db ? b.MozBoxSizing = "border-box" : Eb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box",
                b.width = Math.max(g.width, 0) + "px",
                b.height = Math.max(g.height, 0) + "px");
            return j
        }
        ;var Ig = {}
          , Jg = "ontouchstart"in document;
        function Kg(a, b, c, d, e) {
            b in Ig || (Ig[b] = new of,
            Ig[b].maxNumParents = {},
            Ig[b].checkRelatedTarget = {});
            b = Ig[b];
            b.Qb(a, c);
            b.maxNumParents[a] = d;
            b.checkRelatedTarget[a] = e
        }
        function Lg(a, b) {
            var c = Ig[a].maxNumParents[b], d;
            0 < c ? d = c : -1 != a.indexOf("mouse") && (d = 2);
            return d
        }
        function Mg(a, b, c) {
            return xc(b, function(b) {
                return A(b, a)
            }, k, c) || l
        }
        function Ng(a) {
            if ("HTML" != a.target.tagName && a.type in Ig) {
                var b = Ig[a.type], c;
                for (c in b.ba) {
                    var d = Lg(a.type, c)
                      , e = Mg(c, a.target, d);
                    if (e) {
                        var f = k;
                        b.checkRelatedTarget[c] && (a.relatedTarget && xc(a.relatedTarget, function(a) {
                            return a == e
                        }, k, d)) && (f = m);
                        f && b.Ra(c, e, a.type, a)
                    }
                }
            }
        }
        R(document, "blur", Ng, k);
        R(document, "change", Ng, k);
        R(document, "click", Ng);
        R(document, "focus", Ng, k);
        R(document, "mouseover", Ng);
        R(document, "mouseout", Ng);
        R(document, "mousedown", Ng);
        R(document, "keydown", Ng);
        R(document, "keyup", Ng);
        R(document, "keypress", Ng);
        R(document, "cut", Ng);
        R(document, "paste", Ng);
        Jg && (R(document, "touchstart", Ng),
        R(document, "touchend", Ng),
        R(document, "touchcancel", Ng));
        var Og = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
        t("yt.uix.widgets_", Og);
        function Pg(a) {
            var a = a.getInstance()
              , b = Y(a);
            !(b in Og) && a.Lc() && (a.T(),
            Og[b] = a)
        }
        ;function Qg() {
            this.b = {}
        }
        n = Qg.prototype;
        n.Oc = !!eval("/*@cc_on!@*/false");
        n.Lc = function() {
            return k
        }
        ;
        function Z(a, b, c, d, e, f) {
            var d = Y(a, d)
              , g = s(c, a);
            Kg(d, b, g, e, f);
            a.b[c] = g
        }
        n.za = function(a, b, c) {
            var d = this.getData(a, b);
            if (d && (d = q(d))) {
                var e = Xa(arguments, 2);
                Wa(e, 0, 0, a);
                d.apply(l, e)
            }
        }
        ;
        n.getData = function(a, b) {
            return Q(a, b)
        }
        ;
        n.setData = function(a, b, c) {
            P(a, b, c)
        }
        ;
        function Rg(a, b) {
            return yc(b, Y(a))
        }
        function Y(a, b) {
            return "yt-uix" + (a.M ? "-" + a.M : "") + (b ? "-" + b : "")
        }
        ;function Sg() {
            this.b = {}
        }
        u(Sg, Qg);
        aa(Sg);
        n = Sg.prototype;
        n.M = "button";
        n.T = function() {
            Z(this, "click", this.Og);
            Z(this, "keydown", this.Pg);
            Z(this, "keypress", this.Qg)
        }
        ;
        n.Og = function(a) {
            if (a && !a.disabled) {
                if (this.getData(a, "button-toggle")) {
                    var b = yc(a, Y(this, "group"));
                    if (b && this.getData(b, "button-toggle-group")) {
                        var c = this.getData(b, "button-toggle-group")
                          , b = I(Y(this), b)
                          , d = Y(this, "toggled")
                          , e = A(a, d);
                        w(b, function(b) {
                            b != a || "optional" == c && e ? y(b, d) : x(a, d)
                        })
                    } else
                        gb(a, Y(this, "toggled"))
                }
                Tg(this, a) && (Ug(this, a),
                a.focus());
                this.za(a, "button-action")
            }
        }
        ;
        n.Pg = function(a, b, c) {
            if (!c.altKey && (!c.ctrlKey && !c.shiftKey) && (b = Tg(this, a))) {
                var d = function(a) {
                    var b = "";
                    a.tagName && (b = a.tagName.toLowerCase());
                    return "ul" == b || "table" == b
                };
                if (d = d(b) ? b : qc(b, d)) {
                    var d = d.tagName.toLowerCase(), e;
                    "ul" == d ? e = this.Wg : "table" == d && (e = this.Vg);
                    e && Vg(this, a, b, c, s(e, this))
                }
            }
        }
        ;
        function Vg(a, b, c, d, e) {
            var f = Ae(c)
              , g = 9 == d.keyCode;
            g || 32 == d.keyCode || 13 == d.keyCode ? (d = Wg(a, c)) ? (b = mc(d),
            "a" == b.tagName.toLowerCase() ? window.location = b.href : Ld(b)) : g && Xg(a, b) : f ? 27 == d.keyCode ? (Wg(a, c),
            Xg(a, b)) : e(b, c, d) : (a = A(b, Y(a, "reverse")) ? 38 : 40,
            d.keyCode == a && (Ld(b),
            d.preventDefault()))
        }
        n.Qg = function(a, b, c) {
            !c.altKey && (!c.ctrlKey && !c.shiftKey) && (a = Tg(this, a),
            Ae(a) && c.preventDefault())
        }
        ;
        function Wg(a, b) {
            var c = Y(a, "menu-item-highlight")
              , d = K(c, b);
            d && y(d, c);
            return d
        }
        function Yg(a, b, c) {
            x(c, Y(a, "menu-item-highlight"));
            b.setAttribute("aria-activedescendant", c.getAttribute("id"))
        }
        n.Vg = function(a, b, c) {
            var d = Wg(this, b)
              , b = td("table", l, b)
              , e = td("tr", l, b)
              , e = J("td", l, e).length
              , b = J("td", l, b)
              , d = Zg(d, b, e, c);
            -1 != d && (Yg(this, a, b[d]),
            c.preventDefault())
        }
        ;
        n.Wg = function(a, b, c) {
            if (40 == c.keyCode || 38 == c.keyCode) {
                var d = Wg(this, b)
                  , b = J("li", l, b)
                  , d = Zg(d, b, 1, c);
                Yg(this, a, b[d]);
                c.preventDefault()
            }
        }
        ;
        function Zg(a, b, c, d) {
            var e = b.length
              , a = Ka(b, a);
            if (-1 == a)
                if (38 == d.keyCode)
                    a = e - c;
                else {
                    if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode)
                        a = 0
                }
            else
                39 == d.keyCode ? (a % c == c - 1 && (a -= c),
                a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c),
                a -= 1) : 38 == d.keyCode ? (a < c && (a += e),
                a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e),
                a += c);
            return a
        }
        function Ug(a, b) {
            var c = Tg(a, b)
              , d = $g(a, c);
            d && d != b ? (Xg(a, d),
            N(s(a.Sc, a, b), 1)) : Ae(c) ? Xg(a, b) : a.Sc(b)
        }
        function ah(a, b) {
            if (!xb || !A(b, Y(a, "masked")))
                return l;
            var c = b.iframeMask;
            c || (c = document.createElement("iframe"),
            c.src = 'javascript:""',
            c.className = Y(a, "menu-mask"),
            b.iframeMask = c);
            return c
        }
        function bh(a, b, c) {
            var d = yc(b, Y(a, "group"))
              , e = !!a.getData(b, "button-menu-ignore-group")
              , d = d && !e ? d : b
              , e = 5
              , f = 4
              , g = ve(b);
            if (A(b, Y(a, "reverse"))) {
                e = 4;
                f = 5;
                g = g.top + "px";
                try {
                    c.style.maxHeight = g
                } catch (j) {}
            }
            A(b, "flip") && (A(b, Y(a, "reverse")) ? (e = 6,
            f = 7) : (e = 7,
            f = 6));
            var o;
            a.getData(b, "button-has-sibling-menu") ? o = ne(d) : a.getData(b, "button-menu-root-container") && (o = ch(a, b));
            D && !G("8") && (o = l);
            var v;
            o && (v = ve(o),
            v = new fe(-v.top,v.left,v.top,-v.left));
            o = new hb(0,1);
            if (a = ah(a, b))
                b = te(c),
                a.style.width = b.width + "px",
                a.style.height = b.height + "px",
                Gg(d, e, a, f, o, v);
            Gg(d, e, c, f, o, v)
        }
        function ch(a, b) {
            if (a.getData(b, "button-menu-root-container")) {
                var c = a.getData(b, "button-menu-root-container");
                return yc(b, c)
            }
            return document.body
        }
        n.Sc = function(a) {
            if (a) {
                var b = Tg(this, a);
                if (b) {
                    a.setAttribute("aria-pressed", "true");
                    a.setAttribute("aria-expanded", "true");
                    b.originalParentNode = b.parentNode;
                    b.activeButtonNode = a;
                    b.parentNode.removeChild(b);
                    this.getData(a, "button-has-sibling-menu") ? a.parentNode.appendChild(b) : ch(this, a).appendChild(b);
                    b.style.minWidth = a.offsetWidth - 2 + "px";
                    var c = ah(this, a);
                    c && document.body.appendChild(c);
                    bh(this, a, b);
                    T(b);
                    this.za(a, "button-menu-action", k);
                    x(a, Y(this, "active"));
                    c = s(this.Dg, this, a);
                    b = R(document, "click", c);
                    c = R(document, "contextmenu", c);
                    this.setData(a, "button-listener", b);
                    this.setData(a, "button-context-menu-listener", c)
                }
            }
        }
        ;
        function Xg(a, b) {
            if (b) {
                var c = Tg(a, b);
                if (c) {
                    b.setAttribute("aria-pressed", "false");
                    b.setAttribute("aria-expanded", "false");
                    U(c);
                    a.za(b, "button-menu-action", m);
                    var d = ah(a, b);
                    N(function() {
                        d && d.parentNode && d.parentNode.removeChild(d);
                        c.originalParentNode && (c.parentNode.removeChild(c),
                        c.originalParentNode.appendChild(c),
                        c.originalParentNode = l,
                        c.activeButtonNode = l)
                    }, 1)
                }
                var e = yc(b, Y(a, "group"));
                y(b, Y(a, "active"));
                e && y(e, Y(a, "group-active"));
                if (e = a.getData(b, "button-listener"))
                    S(e),
                    ld(b, "button-listener");
                if (e = a.getData(b, "button-context-menu-listener"))
                    S(e),
                    ld(b, "button-context-menu-listener")
            }
        }
        function $g(a, b) {
            return yc(b.activeButtonNode || b.parentNode, Y(a))
        }
        n.Dg = function(a, b) {
            var c = Id(b)
              , d = yc(c, Y(this));
            if (d) {
                var d = Tg(this, d)
                  , e = Tg(this, a);
                if (d == e)
                    return
            }
            if (!yc(c, Y(this, "menu")) || A(c, Y(this, "menu-item")) || A(c, Y(this, "menu-close")))
                if (Xg(this, a),
                (d = yc(c, Y(this, "menu"))) && this.getData(a, "button-menu-indicate-selected"))
                    (e = K(Y(this, "content"), a)) && pc(e, uc(c)),
                    e = Y(this, "menu-item-selected"),
                    (d = K(e, d)) && y(d, e),
                    x(c.parentNode, e)
        }
        ;
        function Tg(a, b) {
            if (!b.widgetMenu) {
                var c = a.getData(b, "button-menu-id")
                  , c = c && H(c)
                  , d = Y(a, "menu");
                c ? (x(c, d),
                x(c, Y(a, "menu-external"))) : c = K(d, b);
                b.widgetMenu = c
            }
            return b.widgetMenu
        }
        ;function dh() {
            this.b = {}
        }
        u(dh, Qg);
        aa(dh);
        dh.prototype.M = "expander";
        dh.prototype.T = function() {
            Z(this, "click", this.c, "head");
            Z(this, "keypress", this.e, "head")
        }
        ;
        dh.prototype.c = function(a) {
            eh(this, a)
        }
        ;
        dh.prototype.e = function(a, b, c) {
            c && 13 == c.keyCode && eh(this, a)
        }
        ;
        function eh(a, b) {
            var c = Rg(a, b);
            c && (gb(c, Y(a, "collapsed")),
            a.za(c, "expander-action"))
        }
        function fh(a, b) {
            var c = Rg(a, b);
            c && (x(c, Y(a, "collapsed")),
            a.za(c, "expander-action"))
        }
        ;function gh(a) {
            gh[" "](a);
            return a
        }
        gh[" "] = function() {}
        ;
        !D || Sb(9);
        var hh = !D || Sb(9)
          , ih = D && !G("8");
        !Eb || G("528");
        Db && G("1.9b") || D && G("8") || Cb && G("9.5") || Eb && G("528");
        Db && !G("8") || D && G("9");
        function jh(a, b) {
            this.type = a;
            this.currentTarget = this.target = b
        }
        u(jh, mf);
        n = jh.prototype;
        n.U = function() {
            delete this.type;
            delete this.target;
            delete this.currentTarget
        }
        ;
        n.Ka = m;
        n.Wb = k;
        n.stopPropagation = function() {
            this.Ka = k
        }
        ;
        n.preventDefault = function() {
            this.Wb = m
        }
        ;
        function kh(a, b) {
            a && this.init(a, b)
        }
        u(kh, jh);
        n = kh.prototype;
        n.target = l;
        n.relatedTarget = l;
        n.clientX = 0;
        n.clientY = 0;
        n.Id = 0;
        n.na = l;
        n.init = function(a, b) {
            var c = this.type = a.type;
            jh.call(this, c);
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d) {
                if (Db) {
                    var e;
                    a: {
                        try {
                            gh(d.nodeName);
                            e = k;
                            break a
                        } catch (f) {}
                        e = m
                    }
                    e || (d = l)
                }
            } else
                "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.relatedTarget = d;
            this.clientX = a.clientX !== i ? a.clientX : a.pageX;
            this.clientY = a.clientY !== i ? a.clientY : a.pageY;
            this.Id = a.keyCode || 0;
            this.na = a;
            a.defaultPrevented && this.preventDefault();
            delete this.Ka
        }
        ;
        n.stopPropagation = function() {
            kh.P.stopPropagation.call(this);
            this.na.stopPropagation ? this.na.stopPropagation() : this.na.cancelBubble = k
        }
        ;
        n.preventDefault = function() {
            kh.P.preventDefault.call(this);
            var a = this.na;
            if (a.preventDefault)
                a.preventDefault();
            else if (a.returnValue = m,
            ih)
                try {
                    if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                        a.keyCode = -1
                } catch (b) {}
        }
        ;
        n.Cg = function() {
            return this.na
        }
        ;
        n.U = function() {
            kh.P.U.call(this);
            this.relatedTarget = this.currentTarget = this.target = this.na = l
        }
        ;
        function lh() {}
        var mh = 0;
        n = lh.prototype;
        n.key = 0;
        n.Ga = m;
        n.sd = m;
        n.init = function(a, b, c, d, e, f) {
            fa(a) ? this.b = k : a && a.handleEvent && fa(a.handleEvent) ? this.b = m : h(Error("Invalid listener argument"));
            this.Va = a;
            this.c = b;
            this.src = c;
            this.type = d;
            this.capture = !!e;
            this.Kb = f;
            this.sd = m;
            this.key = ++mh;
            this.Ga = m
        }
        ;
        n.handleEvent = function(a) {
            return this.b ? this.Va.call(this.Kb || this.src, a) : this.Va.handleEvent.call(this.Va, a)
        }
        ;
        var nh = {}
          , oh = {}
          , ph = {}
          , qh = {};
        function rh(a, b, c, d, e) {
            if (b) {
                if (da(b)) {
                    for (var f = 0; f < b.length; f++)
                        rh(a, b[f], c, d, e);
                    return l
                }
                var d = !!d
                  , g = oh;
                b in g || (g[b] = {
                    N: 0,
                    aa: 0
                });
                g = g[b];
                d in g || (g[d] = {
                    N: 0,
                    aa: 0
                },
                g.N++);
                var g = g[d], j = ha(a), o;
                g.aa++;
                if (g[j]) {
                    o = g[j];
                    for (f = 0; f < o.length; f++)
                        if (g = o[f],
                        g.Va == c && g.Kb == e) {
                            if (g.Ga)
                                break;
                            return o[f].key
                        }
                } else
                    o = g[j] = [],
                    g.N++;
                f = sh();
                f.src = a;
                g = new lh;
                g.init(c, f, a, b, d, e);
                c = g.key;
                f.key = c;
                o.push(g);
                nh[c] = g;
                ph[j] || (ph[j] = []);
                ph[j].push(g);
                a.addEventListener ? (a == p || !a.Hd) && a.addEventListener(b, f, d) : a.attachEvent(b in qh ? qh[b] : qh[b] = "on" + b, f);
                return c
            }
            h(Error("Invalid event type"))
        }
        function sh() {
            var a = th
              , b = hh ? function(c) {
                return a.call(b.src, b.key, c)
            }
            : function(c) {
                c = a.call(b.src, b.key, c);
                if (!c)
                    return c
            }
            ;
            return b
        }
        function uh(a, b, c, d, e) {
            if (da(b))
                for (var f = 0; f < b.length; f++)
                    uh(a, b[f], c, d, e);
            else if (d = !!d,
            a = vh(a, b, d))
                for (f = 0; f < a.length; f++)
                    if (a[f].Va == c && a[f].capture == d && a[f].Kb == e) {
                        wh(a[f].key);
                        break
                    }
        }
        function wh(a) {
            if (!nh[a])
                return m;
            var b = nh[a];
            if (b.Ga)
                return m;
            var c = b.src
              , d = b.type
              , e = b.c
              , f = b.capture;
            c.removeEventListener ? (c == p || !c.Hd) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in qh ? qh[d] : qh[d] = "on" + d, e);
            c = ha(c);
            e = oh[d][f][c];
            if (ph[c]) {
                var g = ph[c];
                Sa(g, b);
                0 == g.length && delete ph[c]
            }
            b.Ga = k;
            e.Kd = k;
            xh(d, f, c, e);
            delete nh[a];
            return k
        }
        function xh(a, b, c, d) {
            if (!d.Rb && d.Kd) {
                for (var e = 0, f = 0; e < d.length; e++)
                    d[e].Ga ? d[e].c.src = l : (e != f && (d[f] = d[e]),
                    f++);
                d.length = f;
                d.Kd = m;
                0 == f && (delete oh[a][b][c],
                oh[a][b].N--,
                0 == oh[a][b].N && (delete oh[a][b],
                oh[a].N--),
                0 == oh[a].N && delete oh[a])
            }
        }
        function yh(a) {
            var b, c = 0, d = b == l;
            b = !!b;
            if (a == l)
                kb(ph, function(a) {
                    for (var e = a.length - 1; 0 <= e; e--) {
                        var f = a[e];
                        if (d || b == f.capture)
                            wh(f.key),
                            c++
                    }
                });
            else if (a = ha(a),
            ph[a])
                for (var a = ph[a], e = a.length - 1; 0 <= e; e--) {
                    var f = a[e];
                    if (d || b == f.capture)
                        wh(f.key),
                        c++
                }
        }
        function vh(a, b, c) {
            var d = oh;
            return b in d && (d = d[b],
            c in d && (d = d[c],
            a = ha(a),
            d[a])) ? d[a] : l
        }
        function zh(a, b, c, d, e) {
            var f = 1
              , b = ha(b);
            if (a[b]) {
                a.aa--;
                a = a[b];
                a.Rb ? a.Rb++ : a.Rb = 1;
                try {
                    for (var g = a.length, j = 0; j < g; j++) {
                        var o = a[j];
                        o && !o.Ga && (f &= Ah(o, e) !== m)
                    }
                } finally {
                    a.Rb--,
                    xh(c, d, b, a)
                }
            }
            return Boolean(f)
        }
        function Ah(a, b) {
            a.sd && wh(a.key);
            return a.handleEvent(b)
        }
        function th(a, b) {
            if (!nh[a])
                return k;
            var c = nh[a]
              , d = c.type
              , e = oh;
            if (!(d in e))
                return k;
            var e = e[d], f, g;
            if (!hh) {
                f = b || q("window.event");
                var j = k in e
                  , o = m in e;
                if (j) {
                    if (0 > f.keyCode || f.returnValue != i)
                        return k;
                    a: {
                        var v = m;
                        if (0 == f.keyCode)
                            try {
                                f.keyCode = -1;
                                break a
                            } catch (E) {
                                v = k
                            }
                        if (v || f.returnValue == i)
                            f.returnValue = k
                    }
                }
                v = new kh;
                v.init(f, this);
                f = k;
                try {
                    if (j) {
                        for (var C = [], F = v.currentTarget; F; F = F.parentNode)
                            C.push(F);
                        g = e[k];
                        g.aa = g.N;
                        for (var V = C.length - 1; !v.Ka && 0 <= V && g.aa; V--)
                            v.currentTarget = C[V],
                            f &= zh(g, C[V], d, k, v);
                        if (o) {
                            g = e[m];
                            g.aa = g.N;
                            for (V = 0; !v.Ka && V < C.length && g.aa; V++)
                                v.currentTarget = C[V],
                                f &= zh(g, C[V], d, m, v)
                        }
                    } else
                        f = Ah(c, v)
                } finally {
                    C && (C.length = 0),
                    v.ma()
                }
                return f
            }
            d = new kh(b,this);
            try {
                f = Ah(c, d)
            } finally {
                d.ma()
            }
            return f
        }
        ;function Bh() {}
        u(Bh, mf);
        n = Bh.prototype;
        n.Hd = k;
        n.Vb = l;
        n.Dc = function(a) {
            this.Vb = a
        }
        ;
        n.addEventListener = function(a, b, c, d) {
            rh(this, a, b, c, d)
        }
        ;
        n.removeEventListener = function(a, b, c, d) {
            uh(this, a, b, c, d)
        }
        ;
        n.dispatchEvent = function(a) {
            var b = a.type || a
              , c = oh;
            if (b in c) {
                if (r(a))
                    a = new jh(a,this);
                else if (a instanceof jh)
                    a.target = a.target || this;
                else {
                    var d = a
                      , a = new jh(b,this);
                    rb(a, d)
                }
                var d = 1, e, c = c[b], b = k in c, f;
                if (b) {
                    e = [];
                    for (f = this; f; f = f.Vb)
                        e.push(f);
                    f = c[k];
                    f.aa = f.N;
                    for (var g = e.length - 1; !a.Ka && 0 <= g && f.aa; g--)
                        a.currentTarget = e[g],
                        d &= zh(f, e[g], a.type, k, a) && a.Wb != m
                }
                if (m in c)
                    if (f = c[m],
                    f.aa = f.N,
                    b)
                        for (g = 0; !a.Ka && g < e.length && f.aa; g++)
                            a.currentTarget = e[g],
                            d &= zh(f, e[g], a.type, m, a) && a.Wb != m;
                    else
                        for (e = this; !a.Ka && e && f.aa; e = e.Vb)
                            a.currentTarget = e,
                            d &= zh(f, e, a.type, m, a) && a.Wb != m;
                a = Boolean(d)
            } else
                a = k;
            return a
        }
        ;
        n.U = function() {
            Bh.P.U.call(this);
            yh(this);
            this.Vb = l
        }
        ;
        var Ch = p.window;
        function Dh(a, b, c) {
            fa(a) ? c && (a = s(a, c)) : a && "function" == typeof a.handleEvent ? a = s(a.handleEvent, a) : h(Error("Invalid listener argument"));
            2147483647 < b || Ch.setTimeout(a, b || 0)
        }
        ;function Eh() {
            this.b = {}
        }
        u(Eh, Qg);
        aa(Eh);
        n = Eh.prototype;
        n.M = "tooltip";
        n.ac = 0;
        n.T = function() {
            Z(this, "mouseover", this.$b);
            Z(this, "mouseout", this.Ab);
            Z(this, "click", this.Ab);
            Z(this, "touchstart", this.Hc);
            Z(this, "touchend", this.Zb);
            Z(this, "touchcancel", this.Zb)
        }
        ;
        n.Lc = function() {
            return !(this.Oc && 0 == Pb.indexOf("6"))
        }
        ;
        n.$b = function(a) {
            if (!(this.ac && 1E3 > na() - this.ac)) {
                var b = parseInt(this.getData(a, "tooltip-hide-timer"), 10);
                b && (ld(a, "tooltip-hide-timer"),
                fd(b));
                var b = s(function() {
                    Fh(this, a);
                    ld(a, "tooltip-show-timer")
                }, this)
                  , c = parseInt(this.getData(a, "tooltip-show-delay"), 10) || 0
                  , b = N(b, c);
                this.setData(a, "tooltip-show-timer", b.toString());
                a.title && (this.setData(a, "tooltip-text", a.title),
                a.title = "")
            }
        }
        ;
        n.Ab = function(a) {
            var b = parseInt(this.getData(a, "tooltip-show-timer"), 10);
            b && (fd(b),
            ld(a, "tooltip-show-timer"));
            b = s(function() {
                Gh(this, a);
                ld(a, "tooltip-hide-timer")
            }, this);
            b = N(b, 50);
            this.setData(a, "tooltip-hide-timer", b.toString());
            if (b = this.getData(a, "tooltip-text"))
                a.title = b
        }
        ;
        n.Hc = function(a, b, c) {
            this.ac = 0;
            this.$b(Mg(Y(this), c.changedTouches[0].target, Lg(b, Y(this))), b)
        }
        ;
        n.Zb = function(a, b, c) {
            this.ac = na();
            this.Ab(Mg(Y(this), c.changedTouches[0].target, Lg(b, Y(this))), b)
        }
        ;
        function Hh(a, b, c, d) {
            a.setData(b, "tooltip-text", c);
            var e = a.getData(b, "content-id");
            if (e = H(e))
                e.innerHTML = c,
                d && Gh(a, b)
        }
        n.me = function(a) {
            return this.getData(a, "tooltip-text") || a.title
        }
        ;
        function Fh(a, b) {
            if (b) {
                var c = a.me(b);
                if (c) {
                    var d = H(Ih(a, b));
                    if (!d) {
                        d = document.createElement("div");
                        d.id = Ih(a, b);
                        d.className = Y(a, "tip");
                        var e = document.createElement("div");
                        e.className = Y(a, "tip-body");
                        var f = document.createElement("div");
                        f.className = Y(a, "tip-arrow");
                        var g = document.createElement("div");
                        g.className = Y(a, "tip-content");
                        var j = Jh(a, b)
                          , o = Ih(a, b, "content");
                        g.id = o;
                        a.setData(b, "content-id", o);
                        e.appendChild(g);
                        j && d.appendChild(j);
                        d.appendChild(e);
                        d.appendChild(f);
                        (xd() || document.body).appendChild(d);
                        Hh(a, b, c);
                        if ((c = parseInt(a.getData(b, "tooltip-max-width"), 10)) && e.offsetWidth > c)
                            e.style.width = c + "px",
                            x(g, Y(a, "normal-wrap"));
                        g = A(b, Y(a, "reverse"));
                        a.Qc(b, d, e, j, f, g) || a.Qc(b, d, e, j, f, !g);
                        var v = Y(a, "tip-visible");
                        N(function() {
                            x(d, v)
                        }, 0)
                    }
                }
            }
        }
        n.Qc = function(a, b, c, d, e, f) {
            B(b, Y(this, "tip-reverse"), f);
            var g = 0;
            f && (g = 1);
            var e = te(a)
              , f = new hb((e.width - 10) / 2,f ? e.height : 0)
              , j = pe(a);
            Hg(new hb(j.x + f.x,j.y + f.y), b, g);
            var g = $b(window)
              , j = re(b)
              , b = te(c)
              , o = b.width / 2;
            d && (d.style.left = "3px",
            d.style.height = b.height + "px",
            d.style.width = b.width + "px");
            d = !!(g.height < j.y + e.height);
            e = !!(j.y < e.height);
            f = !!(j.x < o);
            g = !!(g.width < j.x + o);
            j = (b.width + 3) / -2 - -5;
            a = this.getData(a, "force-tooltip-direction");
            if ("left" == a || f)
                j = -5;
            else if ("right" == a || g)
                j = 20 - b.width - 3;
            c.style.left = j + "px";
            return !(d || e)
        }
        ;
        function Gh(a, b) {
            if (b) {
                var c = H(Ih(a, b));
                c && (Kh(c),
                lc(c),
                ld(b, "content-id"))
            }
        }
        function Ih(a, b, c) {
            a = Y(a) + od(b);
            c && (a += "-" + c);
            return a
        }
        function Jh(a, b) {
            var c = l;
            xb && A(b, Y(a, "masked")) && ((c = H("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c),
            T(c)) : (c = document.createElement("iframe"),
            c.src = 'javascript:""',
            c.id = "yt-uix-tooltip-shared-mask",
            c.className = Y(a, "tip-mask")));
            return c
        }
        function Kh(a) {
            var b = H("yt-uix-tooltip-shared-mask")
              , c = b && xc(b, function(b) {
                return b == a
            }, m, 2);
            b && c && (b.parentNode.removeChild(b),
            U(b),
            document.body.appendChild(b))
        }
        ;function Lh() {
            this.b = {}
        }
        u(Lh, Eh);
        aa(Lh);
        n = Lh.prototype;
        n.M = "range-tooltip";
        n.xb = l;
        n.format = l;
        n.max = 0;
        n.Xd = 0;
        n.Wd = 0;
        n.Yb = l;
        n.me = function() {
            return " "
        }
        ;
        n.Qc = function(a, b) {
            this.xb = b;
            var c = this.getData(a, this.M + "-format");
            c && (this.format = q(c));
            this.max = parseInt(this.getData(a, "range-max"), 10);
            this.Xd = pe(a).x;
            this.Wd = te(a).width
        }
        ;
        n.T = function() {
            Eh.prototype.T.call(this);
            Z(this, "mousemove", this.Vd);
            Z(this, "touchmove", this.Yd)
        }
        ;
        n.$b = function(a, b) {
            this.ge || (Eh.prototype.$b.call(this, a, b),
            R(document, "mousemove", Ng))
        }
        ;
        n.Ab = function(a, b) {
            Eh.prototype.Ab.call(this, a, b);
            Hd(document, "mousemove", Ng)
        }
        ;
        n.Hc = function(a, b, c) {
            this.Yb || (this.Yb = c.changedTouches[0].identifier,
            Eh.prototype.Hc.call(this, a, b, c),
            R(document, "touchmove", Ng),
            this.Yd(0, b, c))
        }
        ;
        n.Zb = function(a, b, c) {
            Eh.prototype.Zb.call(this, a, b, c);
            Hd(document, "touchmove", Ng);
            this.ge = k;
            Dh(function() {
                this.ge = m
            }, 200, this);
            this.Yb = l
        }
        ;
        n.Vd = function(a, b, c) {
            if (this.xb) {
                b = (c.pageX - this.Xd) / this.Wd;
                b = Math.min(Math.max(b, 0), 1);
                b *= this.max;
                this.format && (b = this.format(b));
                Hh(this, a, b);
                var b = K(Y(this, "tip-body"), this.xb)
                  , d = this.xb
                  , e = new hb(-5,0)
                  , a = pe(a);
                Hg(new hb(c.pageX + e.x,a.y + e.y), d, 0);
                c = (te(b).width + 3) / -2 - -5;
                b.style.left = c + "px"
            }
        }
        ;
        n.Yd = function(a, b, c) {
            if (this.xb)
                for (a = 0; a < c.changedTouches.length; a++) {
                    var d = c.changedTouches[a];
                    if (d.identifier == this.Yb) {
                        c.pageX = d.pageX;
                        c.pageY = d.pageY;
                        this.Vd(Mg(Y(this), d.target, Lg(b, Y(this))), 0, c);
                        break
                    }
                }
        }
        ;
        function Mh(a, b, c) {
            window.location = Re(a, b || {}) + (c || "")
        }
        function Nh(a, b) {
            var c = b || {};
            c.target = c.target || a.target || "YouTube";
            c.width = c.width || 600;
            c.height = c.height || 600;
            var d = c;
            d || (d = {});
            var e = window, c = "undefined" != typeof a.href ? a.href : "" + a, f = d.target || a.target, g = [], j;
            for (j in d)
                switch (j) {
                case "width":
                case "height":
                case "top":
                case "left":
                    g.push(j + "=" + d[j]);
                    break;
                case "target":
                case "noreferrer":
                    break;
                default:
                    g.push(j + "=" + (d[j] ? 1 : 0))
                }
            j = g.join(",");
            if (d.noreferrer) {
                if (d = e.open("", f, j))
                    D && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"),
                    d.opener = l,
                    Eb ? d.location.href = c : (c = sa(c),
                    d.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'),
                    d.document.close())
            } else
                d = e.open(c, f, j);
            c = d;
            if (!c)
                return k;
            c.opener || (c.opener = window);
            c.focus();
            return m
        }
        ;function Oh(a) {
            var b = Ph;
            if ("view" == a && b.convViewUrl)
                return b.convViewUrl;
            if (!b.baseUrl || !b.uid)
                return l;
            var c = b.rmktEnabled && b.vid
              , d = b.focEnabled;
            if (!c && !d)
                return l;
            var e = {
                label: d ? "followon_" + a : "default"
            };
            if (c) {
                c = {
                    utvid: b.vid,
                    utuid: b.uid,
                    type: a
                };
                b.eventLabel && (c.el = b.eventLabel);
                b.playerStyle && (c.ps = b.playerStyle);
                var f = [], g;
                for (g in c)
                    f.push(encodeURIComponent(g) + "=" + encodeURIComponent(c[g]));
                e.data = f.join(";")
            }
            if (d && "view" == a && b.vid && b.uid && (b.oeid || b.ieid))
                b.oeid && (e.oeid = b.oeid),
                b.ieid && (e.ieid = b.ieid),
                e.evid = b.vid;
            d && (e.foc_id = b.uid);
            return Re(b.baseUrl, e)
        }
        function Qh(a) {
            Ph && (a = Oh(a)) && Eg(a)
        }
        var Ph = l;
        function Rh() {
            this.b = {}
        }
        u(Rh, Qg);
        aa(Rh);
        n = Rh.prototype;
        n.M = "overlay";
        n.T = function() {
            Z(this, "click", this.Rg, "target");
            Z(this, "click", this.Kc, "close")
        }
        ;
        n.Rg = function(a) {
            if (a = Rg(this, a)) {
                var b = Y(this, "fg")
                  , c = H(b);
                if (!c) {
                    var d = K(Y(this, "content"), a);
                    if (d) {
                        c = document.createElement("div");
                        c.id = b;
                        c.className = b;
                        b = this.getData(a, "overlay-class") || "";
                        x(c, b);
                        var e = document.createElement("div");
                        e.className = Y(this, "fg-content");
                        var b = document.createElement("div")
                          , f = Y(this, "base");
                        b.id = f;
                        x(b, f);
                        var g = Y(this, "bg")
                          , f = document.createElement("div");
                        f.id = g;
                        f.className = g;
                        f.style.height = bc() + "px";
                        g = document.createElement("span");
                        x(g, Y(this, "align"));
                        b.appendChild(g);
                        e.innerHTML = d.innerHTML;
                        d = J("iframe", l, e);
                        w(d, function(a) {
                            var b = this.getData(a, "onload");
                            b && ((b = q(b)) && R(a, "load", b),
                            a.src = this.getData(a, "src") || a.src)
                        }, this);
                        c.appendChild(e);
                        d = document.getElementsByTagName("embed");
                        e = document.getElementsByTagName("object");
                        g = s(function(a) {
                            var b = a.style.visibility || "visible";
                            "hidden" != b && (this.setData(a, "overlay-hidden", "true"),
                            this.setData(a, "overlay-visibility-value", b),
                            a.style.visibility = "hidden")
                        }, this);
                        w(d, g);
                        w(e, g);
                        b.appendChild(c);
                        document.body.appendChild(f);
                        document.body.appendChild(b);
                        this.getData(a, "disable-shortcuts") || (c = s(function(a) {
                            A(a.target, Y(this, "base")) && this.Kc()
                        }, this),
                        R(b, "click", c),
                        R(document, "keydown", s(this.ie, this)));
                        this.za(a, "overlay-shown")
                    }
                }
            }
        }
        ;
        n.Kc = function() {
            var a = Y(this, "bg")
              , b = H(Y(this, "fg"));
            if (b) {
                if (A(b, Y(this, "unclosable")))
                    return;
                U(b);
                document.body.removeChild(b.parentNode)
            }
            (a = H(a)) && document.body.removeChild(a);
            var a = document.getElementsByTagName("embed")
              , b = document.getElementsByTagName("object")
              , c = s(function(a) {
                this.getData(a, "overlay-hidden") && (a.style.visibility = this.getData(a, "overlay-visibility-value"),
                ld(a, "overlay-hidden"))
            }, this);
            w(a, c);
            w(b, c);
            Hd(document, "keydown", s(this.ie, this))
        }
        ;
        n.ie = function(a) {
            27 == a.keyCode && this.Kc()
        }
        ;
        var Sh = {
            vi: 0,
            yh: 1,
            Fd: 2,
            $h: 3,
            zh: 4,
            Ti: 5,
            Vi: 6,
            Si: 7,
            Qi: 8,
            Ri: 9,
            Ui: 10,
            Pi: 11,
            Ci: 12,
            Bi: 13,
            Ai: 14,
            Ph: 15,
            mi: 16,
            pi: 17,
            qi: 18,
            oi: 19,
            ni: 20,
            Di: 21,
            Ch: 22,
            Oi: 23,
            Bh: 24,
            lh: 25,
            Dh: 26,
            Nh: 27,
            yi: 28,
            Ah: 29,
            xi: 30,
            Ki: 31,
            Ji: 32,
            Kh: 33,
            Hi: 34,
            Ei: 35,
            Fi: 36,
            Gi: 37,
            Ii: 38,
            ai: 39,
            si: 40,
            mh: 41,
            ri: 42,
            oh: 43,
            Ed: 44,
            Eh: 45,
            ji: 46,
            Li: 47,
            Wi: 48,
            Xi: 49,
            Zi: 50,
            zi: 51,
            th: 52,
            vh: 53,
            ki: 54,
            Wh: 55,
            ne: 56,
            wi: 57,
            ti: 58,
            Mh: 59,
            gi: 60,
            Xh: 61,
            bi: 62,
            nh: 63,
            Ni: 64,
            qh: 65,
            ph: 66,
            ci: 67,
            xh: 68,
            Gh: 69,
            Qh: 70,
            hi: 71,
            Oh: 72,
            ui: 73,
            di: 74,
            Gd: 75,
            xg: 76,
            Zd: 77,
            Hh: 78,
            Mi: 79,
            Yh: 80,
            uh: 81,
            fi: 82,
            Rh: 83,
            Th: 84,
            Sh: 85,
            Uh: 86,
            Vh: 87,
            rh: 88,
            kh: 89,
            sh: 90,
            li: 91,
            ii: 92,
            wh: 93,
            Yi: 94,
            Jh: 95,
            Ih: 96,
            Lh: 97,
            Zh: 98,
            Fh: 99,
            ei: 100
        };
        var Th = ["FL", "LL", "QL", "SV", "WL"];
        function Uh() {
            return parseInt(L("SHUFFLE_VALUE"), 10) || 0
        }
        ;function Vh() {
            var a = Ud("watch_queue_new");
            return a ? a.split(",") : []
        }
        function Wh(a) {
            a = Xa(a, 0, 100);
            (a = a.join(",")) ? Td("watch_queue_new", a) : Vd("watch_queue_new")
        }
        ;function Xh(a, b) {
            a.length && W("/video_info_ajax", {
                method: "POST",
                n: {
                    action_get_videos_data: 1,
                    count: a.length
                },
                D: {
                    video_ids: a.join(",")
                },
                j: function(a, d) {
                    d.data && b(d.data)
                }
            })
        }
        ;function Yh(a) {
            function b(a) {
                for (var b = 1, d = [], a = a.split(""); a.length; ) {
                    var b = (c + b) % a.length
                      , e = a[b];
                    Ta(a, b);
                    d.push(e)
                }
                return d.join("")
            }
            var c = Uh()
              , d = [];
            w(a, function(a, c) {
                d.push({
                    id: a,
                    key: b(a),
                    index: c
                })
            });
            $a(d);
            var e = c >> 8;
            Oa(d, function(a) {
                return e == a.index
            });
            a = Xa(d, e).concat(Xa(d, 0, e));
            return Ma(a, function(a) {
                return {
                    id: a.id,
                    Bc: a.index
                }
            })
        }
        ;function Zh(a, b, c, d) {
            this.c = a;
            this.R = b;
            this.ia = this.Db = m;
            this.fc = new of;
            this.J = c || [];
            this.te = d || 0;
            this.hb = {};
            this.e = !c;
            this.fb = "";
            this.L = -1;
            this.ib = 1;
            this.Cb = this.ja = 0;
            this.cb = this.eb = "";
            this.b = this.Na = this.Aa = l
        }
        function $h(a) {
            a.fc.Ra("LIST_UPDATED")
        }
        n = Zh.prototype;
        n.isEqual = function(a) {
            return this.c != a.c ? m : this.Fa() == a.Fa()
        }
        ;
        n.tc = function(a) {
            this.fb = a.fb || "";
            this.L = a.ca();
            this.ja = a.ja;
            this.ib = a.ib;
            this.eb = a.eb;
            this.cb = a.cb
        }
        ;
        n.wa = function() {
            return this.c
        }
        ;
        n.Fa = function() {
            return this.c + (this.R || "")
        }
        ;
        function ai(a, b) {
            return bi(a, "occurrences", function() {
                var a = {};
                w(this.xa(), function(b) {
                    a[b] = (a[b] || 0) + 1
                });
                return a
            })[b] || 0
        }
        function ci(a) {
            return a.da() ? di(a) : a.xa()
        }
        n.Cc = function(a) {
            var b = ci(this);
            if (!b.length)
                return "";
            a = this.ca() + a;
            a >= b.length && (a %= b.length);
            return b[a]
        }
        ;
        function ei(a, b) {
            var c = ci(a);
            return Ma(b, function(a) {
                return Pa(c, function(b) {
                    return b == a
                })
            })
        }
        n.xa = function() {
            return Ua(this.J)
        }
        ;
        function di(a) {
            return bi(a, "shuffled_ids", function() {
                return Ma(fi(this), function(a) {
                    return a.id
                })
            })
        }
        function fi(a) {
            return bi(a, "shuffled_videos", function() {
                var a = this.xa();
                return Yh(a)
            })
        }
        n.getVideoData = function(a) {
            return this.hb[a] || {}
        }
        ;
        n.V = function() {
            return this.xa().length
        }
        ;
        n.ca = function() {
            return this.da() ? Oa(fi(this), function(a) {
                return a.Bc == this.L
            }, this) : this.L
        }
        ;
        n.da = function() {
            return 0 < this.ja
        }
        ;
        n.ta = function() {
            return 0 <= this.L
        }
        ;
        n.tb = function() {
            return !!this.Db
        }
        ;
        n.xc = function() {
            return !!L("LIST_COPY_ON_EDIT_ENABLED")
        }
        ;
        n.Xa = function() {
            return m
        }
        ;
        function gi(a) {
            a.Aa = l;
            a.Na = l
        }
        function hi(a, b) {
            var c = a.ca() - 1;
            0 > c && (c = a.V() - 1);
            return ii(a, c, m, b)
        }
        function ji(a, b, c) {
            var d = a.ca() + 1;
            d >= a.V() && (d = 0);
            return ii(a, d, !b, c)
        }
        function ii(a, b, c, d) {
            var e = ci(a)[b];
            if (!e)
                return l;
            var f = {
                v: e
            };
            1 < ai(a, e) && (e = b + 1 + a.Cb,
            a.da() && (e = fi(a)[b].Bc + 1),
            f.index = e);
            c && (f.playnext = a.ib);
            a.da() && (f.shuffle = a.ja);
            d && (f.feature = d);
            return Te(a.fb, f)
        }
        n.clear = function() {
            this.oe();
            $h(this)
        }
        ;
        n.removeItem = function(a) {
            this.da() && (a = fi(this)[a].Bc);
            var b = this.xa()[a];
            this.Td(a);
            this.L > a ? this.L -= 1 : this.L == a && (this.L = -1);
            $h(this);
            return b
        }
        ;
        n.Td = function(a) {
            var b = this.J[a];
            Ta(this.J, a);
            W(this.Sb(), {
                format: "XML",
                method: "POST",
                D: {
                    video_ids: b,
                    session_token: M("addto_ajax") || "",
                    playlist_id: this.R || "",
                    index: a
                },
                j: function(a, b) {
                    this.Aa = b.html_content
                },
                B: function(a, b) {
                    this.Na = b.error_message || O("ERROR_OCCURRED")
                },
                S: function() {
                    $h(this)
                },
                A: this
            })
        }
        ;
        n.load = function(a) {
            this.e && !this.Db ? ki(this, a) : a && ($h(this),
            a());
            li(this)
        }
        ;
        function li(a) {
            var b = ci(a)
              , b = La(b, function(a) {
                return !(a in this.hb)
            }, a);
            w(b, function(a) {
                this.hb[a] = {}
            }, a);
            Xh(b, s(function(a) {
                for (var b in a)
                    this.hb[b] = a[b];
                $h(this)
            }, a))
        }
        function ki(a, b, c) {
            a.Db = k;
            a.e = m;
            var d = {
                style: "bottomfeedr_json",
                action_get_list: 1,
                list: a.Fa()
            };
            c && rb(d, c);
            W("/list_ajax", {
                n: d,
                j: function(a, b) {
                    var c = b.data;
                    this.J = Ua(c.videos);
                    this.R = c.list_id;
                    this.ia = !!c.editable;
                    this.fb = c.video_url || "";
                    this.eb = c.menu_title_html;
                    this.cb = c.menu_html;
                    this.Cb = c.index_offset;
                    var c = c.video_data, d;
                    for (d in c)
                        this.hb[d] = c[d]
                },
                B: function() {},
                S: function() {
                    this.Db = m;
                    li(this);
                    $h(this);
                    b && b()
                },
                A: a
            })
        }
        function mi(a, b, c) {
            a.b = {};
            try {
                b.call(c)
            } finally {
                a.b = l
            }
        }
        function bi(a, b, c) {
            if (a.b && b in a.b)
                return a.b[b];
            c = c.call(a);
            a.b && (a.b[b] = c);
            return c
        }
        ;function ni(a, b, c) {
            Zh.call(this, "FL", a, b, c)
        }
        u(ni, Zh);
        ni.prototype.Sb = function() {
            return "/addto_ajax?action_delete_from_favorites=1"
        }
        ;
        function oi(a, b, c) {
            Zh.call(this, "LL", a, b, c)
        }
        u(oi, Zh);
        oi.prototype.Sb = function() {
            return "/addto_ajax?action_delete_from_liked=1"
        }
        ;
        function pi(a, b, c) {
            Zh.call(this, "ML", a, b, c)
        }
        u(pi, Zh);
        pi.prototype.xc = function() {
            return !!this.ia
        }
        ;
        pi.prototype.Xa = function() {
            return !!this.ia
        }
        ;
        function qi(a, b, c, d) {
            Zh.call(this, a, b, c, d)
        }
        u(qi, Zh);
        n = qi.prototype;
        n.yc = function(a) {
            Va(this.J, a);
            W("/addto_ajax", {
                format: "XML",
                method: "POST",
                n: {
                    action_add_to_playlist: 1
                },
                D: {
                    playlist_id: this.R,
                    video_ids: a.join(","),
                    session_token: M("addto_ajax")
                },
                B: function() {
                    this.Na = O("ERROR_OCCURRED");
                    $h(this)
                },
                A: this
            })
        }
        ;
        n.Sb = function() {
            return "/addto_ajax?action_delete_from_playlist=1"
        }
        ;
        n.oe = function() {
            var a = this.J.length;
            Ra(this.J);
            W("/addto_ajax", {
                format: "XML",
                method: "POST",
                n: {
                    action_clear_playlist: 1,
                    list_length: a,
                    type: this.c
                },
                D: {
                    playlist_id: this.R,
                    session_token: M("addto_ajax")
                },
                B: function() {
                    this.Na = O("ERROR_OCCURRED");
                    $h(this)
                },
                A: this
            })
        }
        ;
        n.Nd = function(a, b) {
            var c = this.J[a];
            Ta(this.J, a);
            Wa(this.J, b, 0, c);
            var d = Ua(this.J);
            W("/addto_ajax?action_move_playlist_video=1", {
                format: "XML",
                method: "POST",
                D: {
                    video_ids: c,
                    playlist_id: this.R,
                    source_index: a,
                    target_index: b,
                    session_token: M("addto_ajax")
                },
                B: function() {
                    var e;
                    a: if (e = this.J,
                    !ea(e) || !ea(d) || e.length != d.length)
                        e = m;
                    else {
                        for (var f = e.length, g = 0; g < f; g++)
                            if (e[g] !== d[g]) {
                                e = m;
                                break a
                            }
                        e = k
                    }
                    e && (Ta(this.J, b),
                    Wa(this.J, a, 0, c));
                    this.Na = O("ERROR_OCCURRED");
                    $h(this)
                },
                A: this
            })
        }
        ;
        n.Xa = function() {
            return !!this.ia
        }
        ;
        function ri(a) {
            Zh.call(this, "QL", l);
            this.ia = k;
            this.e = !a
        }
        u(ri, Zh);
        n = ri.prototype;
        n.tc = function(a) {
            ri.P.tc.call(this, a);
            this.e = m
        }
        ;
        n.xa = function() {
            return Vh()
        }
        ;
        n.yc = function(a) {
            var b = Vh();
            Va(b, a);
            Wh(b)
        }
        ;
        n.Td = function(a) {
            var b = ci(this)[a]
              , a = Vh()
              , b = Ka(a, b);
            0 <= b && (Ta(a, b),
            Wh(a))
        }
        ;
        n.oe = function() {
            Wh([])
        }
        ;
        n.Nd = function(a, b) {
            var c = Vh()
              , d = c[a];
            Ta(c, a);
            Wa(c, b, 0, d);
            Wh(c)
        }
        ;
        n.Xa = function() {
            return !!this.ia
        }
        ;
        function si(a, b, c) {
            Zh.call(this, "SV", a, b, c);
            this.ia = k
        }
        u(si, Zh);
        si.prototype.load = function(a) {
            si.P.load.call(this, a);
            !this.tb() && this.ta() && (a = ci(this),
            this.ca() >= a.length - 1 && ki(this, l, {
                load_more: "1"
            }))
        }
        ;
        si.prototype.Sb = function() {
            return "/addto_ajax?action_delete_from_station=1"
        }
        ;
        function ti(a, b, c, d) {
            var e = l;
            switch (a) {
            case "PL":
            case "SP":
            case "BP":
            case "WL":
                e = new qi(a,b,c,d);
                break;
            case "FL":
                e = new ni(b,c,d);
                break;
            case "LL":
                e = new oi(b,c,d);
                break;
            case "AV":
            case "BB":
            case "ML":
            case "MC":
                e = new pi(b,c,d);
                break;
            case "QL":
                e = new ri;
                break;
            case "SV":
                e = new si(b,c,d);
                break;
            default:
                e = new Zh(a,b,c,d)
            }
            return e
        }
        ;var ui = 0
          , vi = 0
          , wi = 0
          , xi = 0
          , yi = m;
        function zi() {
            var a = cc(document).y + $b(window).height + vi
              , b = wi;
            xi = a;
            var c = Math.abs(b - a);
            if (!b || 400 <= c) {
                c = Ai(a);
                for (b = Ai(b); b < c; )
                    zg("thumb-group-" + c),
                    c--;
                wi = a
            }
        }
        function Bi() {
            for (var a = Ai(xi); 0 <= a; a--)
                zg("thumb-group-" + a)
        }
        function Ci(a) {
            Di(function(a, c) {
                var d = Q(a, "group-key");
                d && (yg(a, d),
                ld(a, "group-key"));
                a.src = c
            }, a)
        }
        function Ei(a, b) {
            yi && Di(function(a, d) {
                var e = Q(a, "group-key");
                if (!(Q(a, "thumb-manual") || e && !b)) {
                    e && yg(a, e);
                    if (e = H(a)) {
                        var f = 0
                          , g = 0;
                        if (e.offsetParent) {
                            do
                                f += e.offsetLeft,
                                g += e.offsetTop;
                            while (e = e.offsetParent)
                        }
                        e = new hb(f,g)
                    } else
                        e = l;
                    e = "thumb-group-" + Ai(e.y);
                    xg(a, d, e);
                    P(a, "group-key", e)
                }
            }, a)
        }
        function Di(a, b) {
            var c = J("img", l, b);
            w(c, function(b) {
                var c = Q(b, "thumb");
                c && a.call(p, b, c)
            })
        }
        function Ai(a) {
            return Math.ceil(Math.max(0, a - ui) / 400)
        }
        ;function Fi(a) {
            this.c = a;
            this.b = []
        }
        u(Fi, mf);
        var Gi = [];
        function Hi(a, b, c, d) {
            da(c) || (Gi[0] = c,
            c = Gi);
            for (var e = 0; e < c.length; e++)
                a.b.push(rh(b, c[e], d || a, m, a.c || a))
        }
        function Ii(a, b, c, d, e, f) {
            if (da(c))
                for (var g = 0; g < c.length; g++)
                    Ii(a, b, c[g], d, e, f);
            else {
                a: {
                    d = d || a;
                    f = f || a.c || a;
                    e = !!e;
                    if (b = vh(b, c, e))
                        for (c = 0; c < b.length; c++)
                            if (!b[c].Ga && b[c].Va == d && b[c].capture == e && b[c].Kb == f) {
                                b = b[c];
                                break a
                            }
                    b = l
                }
                b && (b = b.key,
                wh(b),
                Sa(a.b, b))
            }
        }
        function Ji(a) {
            w(a.b, wh);
            a.b.length = 0
        }
        Fi.prototype.U = function() {
            Fi.P.U.call(this);
            Ji(this)
        }
        ;
        Fi.prototype.handleEvent = function() {
            h(Error("EventHandler.handleEvent not implemented"))
        }
        ;
        D || Db && G("1.9.3");
        new of;
        function Ki(a, b) {
            this.b = a;
            var c = b || l;
            c || (c = Li(this.b));
            c = oa("__%s__", "(" + c.join("|") + ")");
            this.c = RegExp(c, "g")
        }
        var Mi = /__([a-z]+(?:_[a-z]+)*)__/g;
        function Oi(a, b) {
            var c = H(a).innerHTML
              , c = c.replace(/^\s*(<\!--\s*)?/, "")
              , c = c.replace(/(\s*--\>)?\s*$/, "");
            return new Ki(c,b)
        }
        function Li(a) {
            var b = []
              , c = {};
            a.replace(Mi, function(a, e) {
                e in c || (c[e] = k,
                b.push(e))
            });
            return b
        }
        Ki.prototype.Sa = function(a, b, c) {
            return this.b.replace(this.c, s(function(d, e) {
                b && (e = b(e));
                return c ? a[e] || "" : sa(a[e] || "")
            }, this))
        }
        ;
        function Pi() {
            this.b = {}
        }
        u(Pi, Qg);
        aa(Pi);
        n = Pi.prototype;
        n.M = "slider";
        n.T = function() {
            Z(this, "click", this.Fg, "num");
            Z(this, "click", this.Gg, "prev");
            Z(this, "click", this.Eg, "next");
            Z(this, "mouseover", this.Lg, "ajax-trigger")
        }
        ;
        n.Fg = function(a) {
            if (a) {
                var b = Rg(this, a)
                  , a = parseInt(this.getData(a, "slider-num"), 10);
                if (isNaN(a) || 0 > a)
                    a = 0;
                this.bc(b, a)
            }
        }
        ;
        n.Eg = function(a, b, c) {
            if (a) {
                a = Rg(this, a);
                if (A(a, Y(this, "fluid"))) {
                    if (a) {
                        var d = Qi(this, a)
                          , e = Ri(this, Si(this, d))
                          , f = 0 < e.length
                          , b = parseInt(this.getData(a, "scroll-offset"), 10);
                        if (isNaN(b) || 0 < b)
                            b = 0;
                        var g = d.offsetWidth;
                        f ? (d = Ti(e),
                        g = Math.floor(g / d),
                        b = Math.abs(Math.floor(b / d)) - 1,
                        Ui(this, a, (0 <= b ? b : 0) + g)) : (this.Oc && 8 > document.documentMode ? Math.abs(b - g) < d.scrollWidth && (b -= g) : d.offsetWidth < d.scrollWidth && (b -= g),
                        Vi(this, a, b))
                    }
                } else if (a) {
                    b = parseInt(this.getData(a, "slider-current"), 10);
                    if (isNaN(b) || 0 > b)
                        b = 0;
                    g = parseInt(this.getData(a, "slider-slides"), 10);
                    if (isNaN(g) || 0 > g)
                        g = 0;
                    b = Math.min(b + 1, g - 1);
                    this.bc(a, b)
                }
                c.preventDefault()
            }
        }
        ;
        n.Gg = function(a, b, c) {
            if (a) {
                a = Rg(this, a);
                if (A(a, Y(this, "fluid"))) {
                    if (a) {
                        var d = Qi(this, a)
                          , e = Ri(this, Si(this, d))
                          , f = 0 < e.length
                          , b = parseInt(this.getData(a, "scroll-offset"), 10);
                        if (isNaN(b) || 0 < b)
                            b = 0;
                        d = d.offsetWidth;
                        f ? (e = Ti(e),
                        f = Math.floor(d / e),
                        b = Math.abs(Math.floor(b / e)) - 1,
                        Ui(this, a, (0 <= b ? b : 0) - f)) : (b += d,
                        0 < b && (b = 0),
                        Vi(this, a, b))
                    }
                } else if (a) {
                    b = parseInt(this.getData(a, "slider-current"), 10);
                    if (isNaN(b) || 0 > b)
                        b = 0;
                    b = Math.max(b - 1, 0);
                    this.bc(a, b)
                }
                c.preventDefault()
            }
        }
        ;
        n.Lg = function(a) {
            if (a = Rg(this, a)) {
                var b = Y(this, "ajax-trigger")
                  , c = I(b, a);
                w(c, function(a) {
                    y(a, b)
                });
                Wi(this, a)
            }
        }
        ;
        function Wi(a, b, c) {
            var d = a.getData(b, "slider-ajax-url");
            d && !a.getData(b, "slider-loaded") && (a.setData(b, "slider-loaded", "true"),
            W(d, {
                A: a,
                j: function(a, d) {
                    var g = ic(d.slides_html)
                      , j = K(Y(this, "slides"), b);
                    j && g && jc(j, g);
                    c && c()
                }
            }))
        }
        n.bc = function(a, b) {
            a && (this.getData(a, "slider-ajax-url") && !this.getData(a, "slider-loaded") ? Wi(this, a, s(this.bc, this, a, b)) : Xi(this, a, b))
        }
        ;
        function Xi(a, b, c) {
            var d = J(l, Y(a, "num"), b), e = Y(a, "num-current"), f;
            w(d, function(a) {
                f = this.getData(a, "slider-num") == c;
                B(a, e, f);
                B(a, "yt-uix-pager-selected", f);
                A(a, "yt-uix-button") && B(a, "yt-uix-button-toggled", f)
            }, a);
            if (d = K(Y(a, "slides"), b)) {
                var g = Si(a, d);
                if (g) {
                    var j = -1 * c * g.offsetWidth + "px";
                    qe(g) ? d.style.right = j : d.style.left = j
                }
            }
            if (d = K("yt-uix-pager-current-page", b))
                d.innerHTML = c + 1;
            a.setData(b, "slider-current", c + "");
            Yi(a, b)
        }
        function Yi(a, b) {
            if (b) {
                var c = parseInt(a.getData(b, "slider-current"), 10)
                  , d = parseInt(a.getData(b, "slider-slides"), 10)
                  , e = I(Y(a, "next"), b)
                  , f = I(Y(a, "prev"), b);
                w(e, function(a) {
                    a.disabled = m
                });
                w(f, function(a) {
                    a.disabled = m
                });
                0 == c && w(f, function(a) {
                    a.disabled = k
                });
                c == d - 1 && w(e, function(a) {
                    a.disabled = k
                })
            }
        }
        function Ui(a, b, c) {
            if (b) {
                var d = Qi(a, b)
                  , e = Ri(a, Si(a, d));
                if (!(0 >= e.length)) {
                    c >= e.length && (c = e.length - 1);
                    var f = parseInt(a.getData(b, "scroll-offset"), 10);
                    if (isNaN(f) || 0 < f)
                        f = 0;
                    var d = d.offsetWidth
                      , g = Ti(e)
                      , f = Math.abs(Math.floor(f / g)) - 1;
                    if (c > (0 <= f ? f : 0)) {
                        var f = Math.floor(d / g)
                          , j = e.length;
                        c + f > j && (c = j - f + 1)
                    }
                    0 > c && (c = 0);
                    c = e[c];
                    f = qe(b) ? c.offsetLeft - d + g + 10 : -1 * (c.offsetLeft - 10);
                    Vi(a, b, f)
                }
            }
        }
        function Vi(a, b, c) {
            if (b) {
                isNaN(c) && (c = 0);
                var d = Qi(a, b)
                  , e = Si(a, d)
                  , f = J(l, Y(a, "title"), e)
                  , g = A(b, Y(a, "scroll"))
                  , j = qe(b);
                if (g)
                    d.scrollLeft = j ? Db ? c : d.scrollWidth - d.offsetWidth + c : -c;
                else {
                    var o = j ? "right" : "left";
                    e.style[o] = c + "px";
                    w(f, function(a) {
                        a.style[o] = -1 * c + "px"
                    })
                }
                a.setData(b, "scroll-offset", c + "")
            }
        }
        function Qi(a, b) {
            return K(Y(a, "body"), b)
        }
        function Si(a, b) {
            return K(Y(a, "slide"), b)
        }
        function Ri(a, b) {
            return J(l, Y(a, "slide-unit"), b)
        }
        function Ti(a) {
            if (0 == a.length)
                return 0;
            var b = a[0]
              , c = b.offsetWidth;
            1 < a.length && (a = a[1],
            c = qe(b) ? b.offsetLeft - a.offsetLeft : a.offsetLeft - b.offsetLeft);
            return c
        }
        function Zi(a, b) {
            var c = Qi(a, b)
              , d = Ri(a, Si(a, c));
            if (!d.length)
                return [];
            var e = parseInt(a.getData(b, "scroll-offset"), 10);
            if (isNaN(e) || 0 < e)
                e = 0;
            var f = c.offsetWidth
              , g = Ti(d)
              , c = Math.floor(-e / g)
              , c = Math.max(0, c)
              , e = Math.ceil((-e + f) / g)
              , e = Math.min(e, d.length);
            return Xa(Ua(d), c, e)
        }
        ;function $i(a) {
            this.C = a;
            this.b = H("playlist-bar-tray");
            this.ea = td("ol", l, this.b);
            this.i = H("playlist-bar-title");
            this.e = H("playlist-bar-extras-menu");
            var a = mb(aj)
              , b = H("playlist-bar-template");
            this.c = Oi(b, a);
            b = Q(b, "video-thumb-url") || "";
            this.f = new Ki(b,a);
            Gd(this.b, "click", s(function() {
                N(s(this.fd, this), 0)
            }, this), "playlist-bar-tray-button")
        }
        var aj = {
            classes: "classes",
            list_position: "index",
            video_encrypted_id: "id",
            video_title: "title",
            video_url: "url",
            video_display_name: "display_name",
            video_thumb_url: "thumb_url"
        };
        $i.prototype.Sa = function(a, b, c, d, e, f) {
            var g = d.eb;
            g && (this.i.innerHTML = g,
            this.e.innerHTML = d.cb);
            var j = [];
            w(a, function(a, b) {
                var e = b + f == c
                  , g = d.getVideoData(a);
                g.id = a;
                g.url = ii(d, b);
                j.push(bj(this, g, b + 1 + f, e))
            }, this);
            this.ea.innerHTML = j.join("");
            e ? this.scroll(3) : this.scroll(5);
            a = I("item-count", this.C);
            w(a, function(a) {
                a.innerHTML = b
            });
            a = I("playing-index", this.C);
            w(a, function(a) {
                a.innerHTML = c + 1
            })
        }
        ;
        function bj(a, b, c, d) {
            function e(a) {
                return aj[a]
            }
            b.index = c;
            b.thumb_url = a.f.Sa(b, e);
            c = [];
            b.unviewable ? c.push("playlist-bar-item-unviewable") : b.title || c.push("loading");
            d && c.push("playlist-bar-item-playing");
            b.classes = c.join(" ");
            return a.c.Sa(b, e)
        }
        $i.prototype.fd = function() {
            var a = Zi(Pi.getInstance(), this.b);
            w(a, function(a) {
                Ci(a)
            })
        }
        ;
        $i.prototype.scroll = function(a, b) {
            var c = Pi.getInstance();
            switch (a) {
            case 3:
                var d = td("li", "playlist-bar-item-playing", this.ea);
                if (d) {
                    var e = this.b;
                    if (e) {
                        var f = Ri(c, Si(c, Qi(c, e)))
                          , d = Ka(f, d);
                        0 <= d && Ui(c, e, d)
                    }
                } else
                    Ui(c, this.b, 0);
                break;
            case 4:
                b && Ui(c, this.b, b);
                break;
            case 5:
                e = this.b,
                d = c.getData(e, "scroll-offset"),
                d = parseInt(d, 10) || 0,
                Vi(c, e, d)
            }
            this.fd()
        }
        ;
        $i.prototype.Ub = function(a) {
            var b = 0
              , c = s(function() {
                var d = J("li", "playlist-bar-item", this.ea)
                  , e = !(b % 2);
                w(a, function(a) {
                    B(d[a], "playlist-bar-item-highlight", e)
                });
                b++;
                6 > b && N(c, 150)
            }, this);
            c()
        }
        ;
        function cj(a, b) {
            this.C = a;
            this.Qa = new $i(this.C);
            this.c = b;
            this.ic = this.i = m;
            this.Y = H("playlist-bar-bar");
            R(this.Y, "click", s(this.bf, this));
            this.pa = H("playlist-bar-play-button");
            R(this.pa, "click", s(this.hf, this));
            this.oa = H("playlist-bar-prev-button");
            this.o = H("playlist-bar-next-button");
            R(this.oa, "click", s(this.jf, this));
            R(this.o, "click", s(this.ff, this));
            this.e = H("playlist-bar-autoplay-button");
            R(this.e, "click", s(this.af, this));
            this.G = H("playlist-bar-shuffle-button");
            R(this.G, "click", s(this.kf, this));
            this.O = H("playlist-bar-toggle-button");
            R(this.O, "click", s(this.lf, this));
            this.f = H("playlist-bar-options-menu");
            Gd(this.f, "click", s(this.gf, this), "yt-uix-button-menu-item");
            this.ea = H("playlist-bar-tray-content");
            Gd(this.ea, "click", s(this.cf, this), "delete");
            Gd(this.ea, "click", s(this.df, this), "load-lists");
            Gd(this.ea, "click", s(this.ef, this), "load-more");
            this.X = Oi(H("playlist-bar-next-up-template"), ["video_encrypted_id"]);
            dj(this, b);
            this.g.V() ? ej(this) : z(this.C, ["min", "max"], "hid");
            var c = document.createElement("iframe");
            c.id = "playlist-bar-mask";
            c.frameBorder = "0";
            c.src = 'javascript:""';
            this.C.insertBefore(c, this.C.firstChild)
        }
        function dj(a, b, c, d) {
            if (a.g && (a.g.fc.clear("LIST_UPDATED"),
            a.c.isEqual(b) || d))
                b.tc(a.c),
                a.c = b;
            a.g = b;
            a.g.fc.Qb("LIST_UPDATED", a.Wa, a);
            a.g.load(c);
            a.Wa(k)
        }
        n = cj.prototype;
        n.wa = function() {
            return this.g.wa()
        }
        ;
        n.Fa = function() {
            return this.g.Fa()
        }
        ;
        n.ta = function() {
            return this.g.ta()
        }
        ;
        function fj(a) {
            return a.ta() && A(a.C, "autoplay-on")
        }
        function gj(a, b) {
            b ? z(a.C, "autoplay-off", "autoplay-on") : z(a.C, "autoplay-on", "autoplay-off");
            var c = Wd.getInstance();
            de(Sh.xg, !b);
            ee(c);
            ad("LIST_AUTO_PLAY_ON", b)
        }
        n.da = function() {
            return A(this.C, "shuffle-on")
        }
        ;
        n.tb = function() {
            return A(this.C, "loading")
        }
        ;
        function ej(a) {
            ce(Wd.getInstance(), Sh.Zd) ? hj(a) : ij(a)
        }
        function hj(a) {
            z(a.C, ["hid", "max"], "min");
            jj(a, k)
        }
        function ij(a) {
            z(a.C, ["hid", "min"], "max");
            jj(a, k)
        }
        function kj(a) {
            var b;
            A(a.C, "min") ? (ij(a),
            b = m) : (hj(a),
            b = k);
            X("bf", "toggleBar=1&collapsed=" + b, i);
            var c = Wd.getInstance();
            de(Sh.Zd, b);
            ee(c);
            lj(a, k)
        }
        n.bf = function(a) {
            xc(a.target, function(a) {
                a = a.tagName && a.tagName.toLowerCase();
                return "a" == a || "button" == a
            }, k) || kj(this)
        }
        ;
        n.gf = function(a) {
            a.stopPropagation();
            switch (Q(a.currentTarget, "action")) {
            case "clear":
                this.clear();
                break;
            case "load-lists":
                mj(this);
                break;
            case "show-active":
                this.c && dj(this, this.c);
                break;
            case "save":
                nj(this)
            }
        }
        ;
        n.lf = function() {
            kj(this)
        }
        ;
        n.af = function() {
            gj(this, !fj(this));
            jj(this)
        }
        ;
        n.kf = function() {
            var a = !this.da()
              , b = 0;
            ad("SHUFFLE_ENABLED", a);
            a && ad("SHUFFLE_VALUE", Math.max(1, 1E6 * Math.random()));
            a ? (z(this.C, "shuffle-off", "shuffle-on"),
            b = Uh()) : z(this.C, "shuffle-on", "shuffle-off");
            this.g.ja = b;
            this.Wa();
            this.Qa.scroll(3)
        }
        ;
        n.hf = function() {
            this.next(k, "bf_play")
        }
        ;
        n.jf = function() {
            var a = hi(this.g, "bf_prev");
            a && Mh(a)
        }
        ;
        n.ff = function() {
            this.next(k, "bf_next")
        }
        ;
        n.cf = function(a) {
            a.preventDefault();
            var b = J("li", "playlist-bar-item", this.ea)
              , a = wc(a.currentTarget, "li", "playlist-bar-item")
              , b = Ka(b, a);
            this.g.xc() && (a = this.g.wa(),
            oj(this),
            X("bf", "copyFrom=1&action=delete&list_type=" + a, i));
            var c = this.g.wa()
              , d = ci(this.g)[b];
            this.g.removeItem(b);
            pj(this, O("PLAYLIST_VIDEO_DELETED"), m, m, function() {
                this.g.yc([d]);
                this.Wa();
                var a = this.g.V() - 1;
                this.Qa.scroll(4, a);
                this.Qa.Ub([a]);
                X("bf", "undo_delete=1&list_type=" + c, i)
            });
            X("bf", "delete=1&list_type=" + c, i)
        }
        ;
        function qj(a) {
            a.i || (a.i = k,
            Ag((L("DRAGDROP_BINARY_URL") || "") + "", s(function() {
                R(this.ea, "mouseover", s(function() {
                    this.ic || (this.ic = k,
                    this.g.Xa() && !this.g.da() && q("yt.www.lists.dragdrop").createDraggables())
                }, this));
                var a = q("yt.www.lists.dragdrop");
                a.init(this.ea, "playlist-bar-item");
                a.subscribe("DROPPED_AT_INDEX", this.eg, this)
            }, a)))
        }
        n.eg = function(a) {
            var b = a.sourceIndex
              , a = a.targetIndex;
            if (!(b == a || 0 > b || 0 > a)) {
                if (this.g.xc()) {
                    var c = this.g.wa();
                    oj(this);
                    X("bf", "copyFrom=1&action=drag&list_type=" + c, i)
                }
                c = this.g;
                if (!c.da() && c.Xa()) {
                    var d = ci(c);
                    d[b] && d[a] && (c.Nd(b, a),
                    d = c.L,
                    d == b ? c.L = a : d > b && d <= a ? c.L -= 1 : d < b && d >= a && (c.L += 1));
                    $h(c)
                }
                b = Ne({
                    moved_item_delta: Math.abs(a - b),
                    list_type: this.g.wa()
                });
                X("bf", b, i)
            }
        }
        ;
        n.next = function(a, b) {
            a || X("bf", "autoplay=1&playcount=" + this.g.ib, i);
            var c = ji(this.g, a, b);
            c && Mh(c)
        }
        ;
        function rj(a, b) {
            if (!(1 > b || 5 < b)) {
                X("bf", "delayedautoplay=" + b, i);
                Fh(Eh.getInstance(), a.e);
                var c = O("AUTOPLAY_WARNING" + b);
                c && pj(a, c, m, k)
            }
        }
        n.clear = function() {
            var a = this.g.xa();
            this.g.clear();
            pj(this, O("LIST_CLEARED"), m, m, function() {
                this.g.yc(a);
                this.Wa();
                X("bf", "undo_clear=1&list_type=" + b, i)
            });
            var b = this.g.wa();
            X("bf", "clear=1&list_type=" + b, i)
        }
        ;
        n.Cc = function(a) {
            return this.g.Cc(a)
        }
        ;
        n.Wa = function(a) {
            var b = this.g.tb()
              , c = !b && !!this.g.ia
              , d = !this.g.V()
              , e = this.g.ta();
            e ? z(this.f, "passive", "active") : z(this.f, "active", "passive");
            var f = []
              , g = [];
            (e ? g : f).push("active");
            (!e ? g : f).push("passive");
            (b ? g : f).push("loading");
            (c ? g : f).push("editable");
            (d ? g : f).push("empty");
            z(this.C, f, g);
            b || mi(this.g, function() {
                var b = ci(this.g)
                  , c = this.g.te
                  , d = this.g.ca();
                this.Qa.Sa(b, c, d, this.g, !!a, this.g.Cb);
                this.ic = m
            }, this);
            b = this.g.Na;
            c = this.g.Aa;
            b ? pj(this, b, k, m) : c && pj(this, c, m, k);
            gi(this.g);
            jj(this);
            this.g.Xa() && this.g.V() && qj(this)
        }
        ;
        function jj(a, b) {
            var c = O("AUTOPLAY_OFF_TOOLTIP");
            fj(a) && (c = O("AUTOPLAY_ON_TOOLTIP"));
            var d = O("SHUFFLE_OFF_TOOLTIP");
            a.da() && (d = O("SHUFFLE_ON_TOOLTIP"));
            var e = O("NEXT_VIDEO_NOTHUMB_TOOLTIP");
            if (a.g.ta()) {
                var f = ci(a.g)
                  , g = a.g.ca();
                if ((f = (g = f[f.length == g + 1 ? 0 : g + 1]) && a.g.getVideoData(g)) && f.title)
                    e = a.X.Sa({
                        video_encrypted_id: g
                    }),
                    e = O("NEXT_VIDEO_TOOLTIP", {
                        "{next_video_title}": f.title
                    }) + " " + e
            }
            f = "";
            f = A(a.C, "min") ? O("SHOW_PLAYLIST_TOOLTIP") : O("HIDE_PLAYLIST_TOOLTIP");
            g = Eh.getInstance();
            Hh(g, a.o, e);
            Hh(g, a.e, c);
            Hh(g, a.G, d);
            Hh(g, a.O, f, b)
        }
        n.ub = l;
        n.Pb = l;
        function sj(a) {
            a.ub && (fd(a.ub),
            a.ub = l)
        }
        function pj(a, b, c, d, e) {
            if (b && (a.b || (a.b = H("playlist-bar-notifications"),
            Gd(a.b, "click", s(a.Df, a), "playlist-bar-undo")),
            a.Pb = e || l,
            a.Pb && (b += ' <a class="playlist-bar-undo">' + O("UNDO_LINK") + "</a>"),
            K("yt-alert-content", a.b).innerHTML = b,
            B(a.b, "yt-alert-error", !!c),
            B(a.b, "yt-alert-success", !c),
            T(a.b),
            sj(a),
            d))
                b = s(function() {
                    lj(this)
                }, a),
                a.ub = N(b, 1E4)
        }
        n.showError = function(a, b) {
            pj(this, a, k, b)
        }
        ;
        function lj(a, b) {
            var c = !!a.ub;
            if (!b || !c)
                U(a.b),
                a.Pb = l,
                sj(a)
        }
        n.Df = function(a) {
            a.stopPropagation();
            a.preventDefault();
            a = this.Pb;
            lj(this);
            a.call(this)
        }
        ;
        n.Ub = function(a) {
            a = ei(this.g, a);
            a.length && (this.Qa.Ub(a),
            this.Qa.scroll(4, a[0]))
        }
        ;
        function nj(a) {
            a.tb() || (ij(a),
            tj(a, {
                n: {
                    action_get_save_playlist_form: 1
                },
                j: function(a, c) {
                    z(this.C, "lists", "save");
                    var d = c.html;
                    this.Ld = H("playlist-bar-save");
                    this.Ld.innerHTML = d;
                    d = H("playlist-bar-title-edit");
                    d.focus();
                    d.select();
                    R(H("playlist-bar-save-cancel"), "click", s(this.kg, this));
                    R(H("playlist-bar-save-form"), "submit", s(this.lg, this))
                }
            }))
        }
        n.kg = function(a) {
            a.preventDefault();
            y(this.C, "save")
        }
        ;
        n.lg = function(a) {
            a.preventDefault();
            var b = ci(this.g).join(",");
            b && (lj(this),
            a = Nc(a.target),
            tj(this, {
                n: {
                    action_save_playlist: 1
                },
                method: "POST",
                Ia: a + ("&video_ids=" + b),
                j: function(a, b) {
                    this.Ld.innerHTML = "";
                    y(this.C, "save");
                    dj(this, ti("PL", b.list_id), l, k);
                    pj(this, O("PLAYLIST_BAR_PLAYLIST_SAVED"), m, k)
                }
            }))
        }
        ;
        n.df = function(a) {
            a.preventDefault();
            mj(this)
        }
        ;
        n.ef = function() {
            var a = this.g;
            ki(a, l, {
                load_more: "1"
            });
            $h(a)
        }
        ;
        function mj(a) {
            a.tb() || (ij(a),
            tj(a, {
                n: {
                    action_get_playlists: 1
                },
                j: function(a, c) {
                    z(this.C, "save", "lists");
                    this.hg = H("playlist-bar-lists-back");
                    this.fg = R(this.hg, "click", s(this.ig, this));
                    var d = c.html;
                    this.wb = H("playlist-bar-lists");
                    this.wb.innerHTML = d;
                    Ci(this.wb);
                    this.gg = Gd(this.wb, "click", s(this.jg, this), "playlist-bar-playlist-item")
                }
            }))
        }
        n.jg = function(a) {
            a.preventDefault();
            var b = a.currentTarget;
            b && (uj(this),
            a = Q(b, "list-type") || "",
            b = Q(b, "list-id") || "",
            dj(this, ti(a, b)))
        }
        ;
        n.ig = function(a) {
            a.preventDefault();
            uj(this)
        }
        ;
        function uj(a) {
            y(a.C, "lists");
            a.wb && (a.wb.innerHTML = "");
            S(a.gg);
            S(a.fg)
        }
        function tj(a, b) {
            x(a.C, "loading");
            rb(b, {
                format: "JSON",
                B: function(a, b) {
                    var e = O("ERROR_OCCURRED");
                    b && b.errors && (e = b.errors[0]);
                    this.showError(e, k)
                },
                S: function() {
                    y(this.C, "loading")
                },
                A: a
            });
            W("/playlist_bar_ajax", b)
        }
        function vj() {
            var a = wj()
              , b = ci(a.g)
              , c = {};
            w(b, function(a) {
                c[a] = this.g.getVideoData(a)
            }, a);
            for (var d = a.ca(), e = fj(a), f = a.da() ? a.g.ja : 0, g = 0; g < b.length; g++) {
                var j = Q(a.C, "start-time" + g) || ""
                  , o = Q(a.C, "end-time" + g) || "";
                c[b[g]].start = j;
                c[b[g]].end = o
            }
            return {
                autoPlay: e,
                index: d,
                shuffle: f,
                videoData: c,
                videoIds: b || []
            }
        }
        n.ca = function() {
            return this.g.ca()
        }
        ;
        function oj(a) {
            var b = a.g.xa();
            Wh([]);
            var c = Vh();
            Va(c, b);
            Wh(c);
            b = new ri;
            c = a.g.ca();
            b.L = c;
            b.ja = a.g.ja;
            dj(a, b)
        }
        ;var xj = l
          , yj = m;
        function wj() {
            if (!xj) {
                var a = H("playlist-bar");
                if (a) {
                    var b;
                    if (A(a, "active")) {
                        b = Q(a, "list-type") || "";
                        if ("QL" == b)
                            b = new ri(k);
                        else {
                            var c = Q(a, "list-id") || ""
                              , d = (Q(a, "video-ids") || "").split(",")
                              , e = 0
                              , f = Q(a, "list-length");
                            f && (e = parseInt(f, 10));
                            b = ti(b, c, d, e)
                        }
                        c = parseInt(Q(a, "index-offset"), 10) || 0;
                        b.Cb = c;
                        b.L = parseInt(L("PLAYLIST_BAR_PLAYING_INDEX"), 10) || 0;
                        b.ib = parseInt(L("LIST_AUTO_PLAY_VALUE"), 10) || 0;
                        c = 0;
                        L("SHUFFLE_ENABLED") && (c = Uh());
                        b.ja = c
                    } else
                        b = new ri(k);
                    c = Q(a, "video-url");
                    b.fb = c || "";
                    c = A(a, "editable");
                    b.ia = c;
                    b.eb = H("playlist-bar-title").innerHTML;
                    b.cb = H("playlist-bar-extras-menu").innerHTML;
                    xj = new cj(a,b)
                }
            }
            return xj
        }
        function zj(a) {
            var b = wj();
            fj(b) && (0 < a ? (rj(b, a),
            N(function() {
                zj(a - 1)
            }, 1E3)) : b.next(m, "mr_meh"))
        }
        function Aj(a, b, c, d) {
            if (yj) {
                var e = wj();
                e && (a = ti(a, b),
                b = k,
                e.ta() && (b = e.g.isEqual(a)),
                b ? (dj(e, a, function() {
                    e.Ub(c);
                    pj(e, d, m, k)
                }),
                ej(e)) : pj(e, d, m, k))
            }
        }
        function Bj(a) {
            var b = L("LIST_END_TIME");
            b || (b = a.getDuration());
            for (var c = 5; 0 < c; c--)
                a.addCueRange("NEAR_END" + c, b - c, b - c + 1);
            a.addEventListener("onCueRangeEnter", "yt.www.lists.handleNearPlaybackEnd")
        }
        function Cj() {
            if (!yj || !wj().ta())
                return m;
            var a = wj().wa();
            return !Qa(Th, a)
        }
        ;var Dj = -1
          , Ej = -1;
        function Fj(a) {
            var a = !!a
              , b = H("page")
              , c = H("watch-sidebar") || H("watch7-sidebar")
              , d = H("baseDiv")
              , e = L("WIDE_PLAYER_STYLES")
              , f = 0;
            "webkitTransition"in c.style ? (f = document.defaultView.getComputedStyle(c, l),
            f = 1E3 * parseFloat(f["-webkit-transition-duration"])) : "MozTransition"in c.style ? (f = document.defaultView.getComputedStyle(c, l),
            f = 1E3 * parseFloat(f.getPropertyValue("-moz-transition-duration"))) : "OTransition"in c.style && (f = document.defaultView.getComputedStyle(c, l),
            f = 1E3 * parseFloat(f.getPropertyValue("-o-transition-duration")));
            if (a)
                x(b, "watch-wide"),
                N(function() {
                    Gj();
                    if (d)
                        for (var a = 0; a < e.length; ++a)
                            x(d, e[a])
                }, f);
            else {
                f /= 2;
                Gj("small");
                if (d)
                    for (var g = 0; g < e.length; ++g)
                        y(d, e[g]);
                N(function() {
                    y(b, "watch-wide")
                }, f);
                Ci(c)
            }
            ze("masthead-utility-menulink-short", a);
            ze("masthead-utility-menulink-long", !a)
        }
        function Gj(a) {
            var b = Hj();
            if (!A(H("page"), "watch-wide") || "small" == a)
                y(b, "medium", "large");
            else {
                var c = $b(window)
                  , c = !!(1400 <= c.width && 1040 <= c.height);
                L("ENABLE_AUTO_LARGE") && (c || "large" == a) ? z(b, "medium", "large") : z(b, "large", "medium")
            }
        }
        function Ij() {
            var a = Hj()
              , b = "small";
            w(["small", "medium", "large"], function(c) {
                A(a, c) && (b = c)
            });
            return b
        }
        function Jj() {
            if (H("movie_player") && Kj() && hd && 8 >= document.documentMode) {
                fd(Ej);
                var a = Ij();
                Lj({
                    small: 112,
                    medium: 384,
                    large: 597
                }[a])
            }
        }
        function Mj() {
            Ej = N(function() {
                Lj(0)
            }, 50)
        }
        function Lj(a) {
            var b = H("movie_player")
              , c = Kj();
            "rtl" == document.body.getAttribute("dir") ? (c.style.left = a + "px",
            b.style.right = a + "px") : (c.style.right = a,
            b.style.left = a)
        }
        function Nj() {
            return L("PLAYER_REFERENCE")
        }
        function Oj(a) {
            wc(a.target, "BUTTON") || a.currentTarget.click()
        }
        function Kj() {
            return H("watch-player") || H("watch7-player")
        }
        function Hj() {
            return H("watch-video") || H("watch7-video-container")
        }
        ;function Pj(a, b, c, d) {
            this.k = a;
            this.hc = m;
            a = Je() + "/share_ajax";
            W(a, {
                format: "JSON",
                n: {
                    action_get_email: 1,
                    video_id: c,
                    list: d
                },
                j: function(a, c) {
                    this.k.innerHTML = c.email_html;
                    this.Ja();
                    this.focus();
                    var d = c.sharing_binary_url;
                    d && Qj(this, d, c.contacts, b)
                },
                A: this
            })
        }
        n = Pj.prototype;
        n.Ja = function() {
            this.r = this.k.getElementsByTagName("form")[0];
            R(this.r, "submit", s(this.$e, this));
            K("share-email-send", this.r);
            this.Aa = K("share-email-success", this.k);
            this.e = K("share-email-remail", this.Aa);
            R(this.e, "click", s(function() {
                Rj(this);
                this.focus()
            }, this));
            this.lc = K("share-email-recipients", this.k);
            this.b = K("share-email-note", this.k);
            this.c = K("share-email-preview-note", this.k);
            R(this.b, "keyup", s(this.Ze, this))
        }
        ;
        function Qj(a, b, c, d) {
            Ag(b, s(function() {
                var a = q("yt.sharing.ContactTools");
                a && a.createContactTools(this.lc, l, c, d)
            }, a))
        }
        n.qa = function() {
            this.r && (this.hc && Rj(this),
            this.focus())
        }
        ;
        n.focus = function() {
            this.lc.focus()
        }
        ;
        function Rj(a) {
            a.hc = m;
            a.lc.value = "";
            a.b.value = "";
            a.c.innerHTML = "";
            U(a.Aa);
            T(a.r)
        }
        n.Ze = function() {
            var a = this.b.value
              , a = a.substring(0, 300)
              , a = sa(a)
              , a = a.replace(/\n/g, "<br>");
            this.c.innerHTML = a
        }
        ;
        n.$e = function(a) {
            a.preventDefault();
            var b = J("button", l, this.r)[0];
            b.disabled = k;
            var c = K("share-email-captcha", this.k)
              , d = K("share-email-error", this.k)
              , e = K("yt-alert-content", d)
              , a = Je() + Ke(this.r.action);
            W(a, {
                format: "JSON",
                method: "POST",
                Ia: Nc(this.r),
                j: function() {
                    this.hc = k;
                    T(this.Aa);
                    U(this.r);
                    U(d);
                    U(c)
                },
                B: function(a, b) {
                    b.captcha_html && (c.innerHTML = b.captcha_html,
                    T(c));
                    b.errors && (e.innerHTML = b.errors.join("<br>"),
                    T(d))
                },
                S: function() {
                    b.disabled = m
                },
                A: this
            })
        }
        ;
        function Sj(a, b, c) {
            this.k = a;
            a = Je() + "/share_ajax";
            W(a, {
                format: "JSON",
                n: {
                    action_get_embed: 1,
                    video_id: b,
                    list: c
                },
                j: function(a, b) {
                    this.k.innerHTML = b.embed_html;
                    this.Qe = b.legacy_url;
                    this.Pe = b.legacy_code;
                    this.Oe = b.iframe_url;
                    this.Ne = b.iframe_code;
                    this.Ja();
                    Wd.getInstance();
                    this.Da && (this.Da.checked = !ce(0, Sh.Fd));
                    this.Gb.checked = ce(0, Sh.Ed);
                    this.Ca && (this.Ca.checked = ce(0, Sh.Gd));
                    var c = ae("ems");
                    (c in this.ga ? this.ga[c] : lb(this.ga)).select();
                    Tj(this);
                    this.qa()
                },
                A: this
            })
        }
        n = Sj.prototype;
        n.Ja = function() {
            this.b = K("share-embed-code", this.k);
            R(this.b, "click", s(this.Cf, this));
            Uj(this);
            Vj(this)
        }
        ;
        function Uj(a) {
            var b = K("share-embed-size-list", a.k)
              , c = I("share-embed-size-radio", b);
            a.ga = {};
            w(c, function(a) {
                A(a, "share-embed-size-radio-custom") || (a = new Wj(a),
                this.ga[a.name] = a)
            }, a);
            var c = lb(a.ga).width / lb(a.ga).height
              , d = K("share-embed-size-radio-custom", b)
              , c = new Xj(d,c);
            a.ga[c.name] = c;
            a.e = c;
            Gd(b, "click", s(a.cg, a), "share-embed-size");
            b = K("share-embed-customize", b);
            R(b, "keyup", s(a.dg, a))
        }
        function Vj(a) {
            var b = {}
              , c = I("share-embed-option", a.k);
            w(c, function(a) {
                b[a.name] = a
            });
            a.Da = b["show-related"];
            a.Da && R(a.Da, "click", s(a.Xf, a));
            a.Gb = b["delayed-cookies"];
            R(a.Gb, "click", s(a.Wf, a));
            a.c = b["use-https"];
            R(a.c, "click", s(a.Zf, a));
            a.Ca = b["use-flash-code"] || l;
            a.Ca && R(a.Ca, "click", s(a.Yf, a))
        }
        n.qa = function() {
            this.focus()
        }
        ;
        n.focus = function() {
            this.b && (this.b.focus(),
            this.b.select())
        }
        ;
        function Tj(a) {
            var b = a.Ne
              , c = a.Oe;
            a.Ca && a.Ca.checked && (b = a.Pe,
            c = a.Qe);
            a.Gb.checked && (c = c.replace("youtube.com", "youtube-nocookie.com"));
            a.c.checked && (c = c.split("//"),
            c[0] = "https:",
            c = c.join("//"));
            var d = {};
            a.Da && !a.Da.checked && (d.rel = 0);
            c = Te(c, d);
            d = Yj(a);
            if (!d.width || 200 > d.width)
                d = lb(a.ga);
            b = b.replace(/__url__/g, sa(c));
            b = b.replace(/__width__/g, d.width + "");
            b = b.replace(/__height__/g, d.height + "");
            b = sa(b);
            b != a.b.innerHTML && (a.b.innerHTML = b)
        }
        function Yj(a) {
            return ob(a.ga, function(a) {
                return a.Bb.checked
            }) || l
        }
        n.Xf = function() {
            var a = this.Da.checked
              , b = Wd.getInstance();
            de(Sh.Fd, !a);
            ee(b);
            Tj(this)
        }
        ;
        n.Wf = function() {
            var a = this.Gb.checked
              , b = Wd.getInstance();
            de(Sh.Ed, a);
            ee(b);
            Tj(this)
        }
        ;
        n.Zf = function() {
            Tj(this)
        }
        ;
        n.Yf = function() {
            var a = this.Ca.checked
              , b = Wd.getInstance();
            de(Sh.Gd, a);
            ee(b);
            Tj(this)
        }
        ;
        n.Cf = function() {
            this.focus()
        }
        ;
        n.cg = function(a) {
            a = this.ga[K("share-embed-size-radio", a.currentTarget).value];
            a.select();
            var b = Wd.getInstance();
            be("ems", a.name);
            ee(b);
            Tj(this);
            a != this.e && this.focus()
        }
        ;
        n.dg = function() {
            Tj(this)
        }
        ;
        function Wj(a) {
            this.name = a.value;
            this.Bb = a;
            this.width = parseInt(Q(this.Bb, "width"), 10);
            this.height = parseInt(Q(this.Bb, "height"), 10)
        }
        Wj.prototype.select = function() {
            this.Bb.checked = k;
            var a = wc(this.Bb, "li")
              , b = wc(a, "ul")
              , b = J("li", "selected", b);
            w(b, function(a) {
                y(a, "selected")
            });
            x(a, "selected")
        }
        ;
        function Xj(a, b) {
            Wj.call(this, a);
            this.e = b;
            var c = wc(a, "li");
            this.c = K("share-embed-size-custom-width", c);
            this.b = K("share-embed-size-custom-height", c);
            R(this.c, "keyup", s(this.i, this));
            R(this.b, "keyup", s(this.f, this))
        }
        u(Xj, Wj);
        Xj.prototype.i = function() {
            this.width = parseInt(this.c.value, 10);
            this.height = Math.round(this.width / this.e) || 0;
            this.b.value = this.height + ""
        }
        ;
        Xj.prototype.f = function() {
            this.height = parseInt(this.b.value, 10);
            this.width = Math.round(this.height * this.e) || 0;
            this.c.value = this.width + ""
        }
        ;
        function Zj(a, b, c, d) {
            this.k = a;
            this.e = b || l;
            this.R = c || l;
            this.O = m;
            $j(this, d)
        }
        var ak = {
            FACEBOOK: "share_facebook",
            BLOGGER: "share_blogger",
            TWITTER: "share_twitter"
        };
        function bk(a) {
            var b = ["h", "m", "s"]
              , c = Ua(b);
            c.reverse();
            var d = {}
              , a = a.toLowerCase().match(/\d+\s*[hms]?/g) || []
              , a = La(a, function(a) {
                var b = (a.match(/[hms]/) || [""])[0];
                return b ? (d[b] = parseInt(a.match(/\d+/)[0], 10),
                m) : k
            });
            for (a.reverse(); a.length && c.length; ) {
                var e = c.shift();
                e in d || (d[e] = parseInt(a.shift(), 10))
            }
            if (a.length || 59 < d.s || 59 < d.m || 9 < d.h)
                return l;
            var f = "";
            w(b, function(a) {
                d[a] && (f += d[a] + a)
            });
            return f || l
        }
        function $j(a, b) {
            var c = Je() + "/share_ajax";
            W(c, {
                format: "JSON",
                n: {
                    action_get_share_box: 1,
                    video_id: a.e,
                    list: a.R
                },
                j: function(a, c) {
                    this.k.innerHTML = c.share_html;
                    this.Af = c.url_short;
                    this.zf = c.url_long;
                    this.dc = c.lang;
                    this.Oa = l;
                    "session_index"in c && (this.Oa = c.session_index);
                    this.Ja();
                    b && b();
                    this.qa()
                },
                A: a
            })
        }
        n = Zj.prototype;
        n.Ja = function() {
            var a = K("share-panel-show-url-options");
            R(a, "click", s(this.Nf, this));
            a = K("share-panel-show-more");
            R(a, "click", s(this.Jf, this));
            a = K("share-panel-embed", this.k);
            R(a, "click", s(this.Hf, this));
            a = K("share-panel-email", this.k);
            R(a, "click", s(this.Gf, this));
            (a = K("share-panel-hangout", this.k)) && R(a, "click", s(this.If, this));
            this.W = K("share-panel-url", this.k);
            R(this.W, "click", s(this.Of, this));
            R(this.W, "focus", s(function() {
                x(this.W, "focused")
            }, this));
            R(this.W, "blur", s(function() {
                y(this.W, "focused")
            }, this));
            this.oa = K("share-panel-long-url", this.k);
            this.f = K("share-panel-start-at", this.k);
            this.$ = K("share-panel-start-at-time", this.k);
            R(this.$, "keyup", s(this.Pf, this));
            R(this.$, "click", s(this.Mf, this));
            R(this.$, "focus", s(function() {
                x(this.$, "focused")
            }, this));
            R(this.$, "blur", s(function() {
                y(this.$, "focused")
            }, this));
            this.pa = K("share-panel-hd", this.k);
            this.i = K("share-panel-url-options", this.k);
            R(this.i, "click", s(this.uc, this));
            this.o = K("share-panel-services", this.k);
            this.G = K("share-panel-buttons", this.k);
            a = K("share-panel-show-more", this.k);
            R(a, "click", s(this.Lf, this));
            Gd(this.k, "click", s(this.Kf, this), "share-service-button")
        }
        ;
        n.qa = function() {
            this.W && !A(this.W, "focused") && (this.W.focus(),
            this.W.select())
        }
        ;
        function ck(a) {
            var b = dk;
            b.$ && (!A(b.$, "focused") && !b.O) && (b.$.value = a,
            b.uc())
        }
        n.uc = function() {
            if (!A(this.W, "focused")) {
                var a = this.Af;
                this.oa && this.oa.checked && (a = this.zf);
                var b = {};
                this.pa && this.pa.checked && (b.hd = 1);
                var c = !this.f.disabled && this.f.checked && bk(this.$.value);
                c && (b.t = c);
                a = Re(a, b);
                this.W.value != a && (this.W.value = a)
            }
        }
        ;
        n.Pf = function() {
            this.O = k;
            this.f.checked = k;
            this.uc()
        }
        ;
        n.Mf = function() {
            this.f.checked = k;
            this.$.value.match(/[1-9]/) || (this.$.value = "")
        }
        ;
        n.Of = function() {
            this.W.select()
        }
        ;
        n.Gf = function() {
            var a = dh.getInstance();
            fh(a, this.G);
            fh(a, this.i);
            fh(a, this.o);
            this.c && U(this.c);
            this.b || (this.b = K("share-panel-email-container", this.k));
            Be(this.b);
            !Q(this.b, "disabled") && Ae(this.b) && (this.Y ? this.Y.qa() : this.Y = new Pj(this.b,this.Oa,this.e,this.R));
            Qh("share_mail")
        }
        ;
        n.If = function() {
            var a = Nj();
            a && a.pauseVideo && a.pauseVideo();
            var a = Re("", {
                hl: this.dc,
                authuser: this.Oa,
                gid: "youtube",
                gd: this.e
            })
              , b = window.screen.height
              , c = Math.min(0.9 * window.screen.width, 1E3)
              , b = Math.min(0.9 * b, 800);
            Fg("HANGOUT", this.e + "");
            Nh(a, {
                width: c,
                height: b
            })
        }
        ;
        n.Hf = function() {
            var a = dh.getInstance();
            fh(a, this.G);
            fh(a, this.i);
            fh(a, this.o);
            this.b && U(this.b);
            this.c || (this.c = K("share-panel-embed-container", this.k));
            Be(this.c);
            !Q(this.c, "disabled") && Ae(this.c) && (this.X ? this.X.qa() : this.X = new Sj(this.c,this.e,this.R));
            Qh("share_embed")
        }
        ;
        n.Kf = function(a) {
            a = Q(a.currentTarget, "service-name") || "";
            (a = ak[a]) && Qh(a)
        }
        ;
        n.Nf = function() {
            fh(dh.getInstance(), this.o);
            this.b && U(this.b);
            this.c && U(this.c)
        }
        ;
        n.Jf = function() {
            fh(dh.getInstance(), this.i);
            this.b && U(this.b);
            this.c && U(this.c)
        }
        ;
        n.Lf = function() {
            this.b && U(this.b);
            this.c && U(this.c)
        }
        ;
        function ek() {}
        n = ek.prototype;
        n.he = m;
        n.yb = l;
        n.Xb = l;
        n.init = function() {
            if (!this.he) {
                this.he = k;
                this.yb = K("player-root", i);
                this.Xb = K("player-actions-container", this.yb);
                var a = K("player-actions-close", this.Xb);
                R(a, "click", s(this.Bg, this))
            }
        }
        ;
        n.Bg = function() {
            B(this.yb, "actions-mode", m)
        }
        ;
        n.yg = function() {
            600 > this.yb.clientWidth && x(this.Xb, "small-view")
        }
        ;
        n.Ic = l;
        n.Yg = function(a, b) {
            this.init();
            B(this.yb, "actions-mode", k);
            if (this.Ic)
                this.Ic.qa();
            else {
                var c = K("player-actions-share", this.Xb);
                this.Ic = new Zj(c,a,b,s(this.yg, this))
            }
        }
        ;
        var fk, gk, hk, ik, jk, kk, lk;
        lk = kk = jk = ik = hk = gk = fk = m;
        var mk = yb();
        mk && (-1 != mk.indexOf("Firefox") ? fk = k : -1 != mk.indexOf("Camino") ? gk = k : -1 != mk.indexOf("iPhone") || -1 != mk.indexOf("iPod") ? hk = k : -1 != mk.indexOf("iPad") ? ik = k : -1 != mk.indexOf("Android") ? jk = k : -1 != mk.indexOf("Chrome") ? kk = k : -1 != mk.indexOf("Safari") && (lk = k));
        var nk = fk
          , ok = gk
          , pk = hk
          , qk = ik
          , rk = jk
          , sk = kk
          , tk = lk;
        function uk() {
            var a = yb();
            return (!a ? 0 : 0 <= a.toLowerCase().indexOf("android 2.2")) ? k : (a = document.createElement("video")) && a.canPlayType && (a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') || a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
        }
        ;var vk = q("yt.playerConfig") || {};
        t("yt.playerConfig", vk);
        var wk = q("yt.player.playerReferences_") || {};
        t("yt.player.playerReferences_", wk);
        function xk(a, b, c) {
            var d = H(a);
            if (d) {
                var e;
                e = b instanceof Ye ? b : new Ye(b);
                var b = !!e.disable.html5
                  , a = !!e.disable.flash
                  , f = uk() && (q("yt.player.VideoPlayer") || e.assets.js);
                e.args.eurl || (e.args.eurl = yk());
                e.args.enablejsapi = "1";
                var g = m;
                e.html5 && (g = k);
                g && !f && (e.args.html5_unavailable = "1");
                var j = {
                    pubsub: new of,
                    subscribedEvents: {}
                }
                  , o = d;
                c || (zk(d, e),
                o = K("player-container", d));
                var d = "player" + ha(o)
                  , v = !e.args.jsapicallback
                  , E = {
                    target: o,
                    playerId: d,
                    playerapiid: e.args.playerapiid,
                    jsapicallback: Ak(e.args.jsapicallback),
                    elementId: e.attrs.id,
                    api: j,
                    onReadyCalled: m,
                    eventLabel: e.args.el,
                    actions: new ek
                };
                e.args.playerapiid = d;
                e.args.jsapicallback = "ytPlayerOnYouTubePlayerReady";
                var C, F, V = !c ? Bk : lf;
                g && f ? (C = Ck,
                a || (F = V)) : (C = V,
                f && !b && (F = Ck));
                F && (e.fallback = function(a) {
                    a = a || e;
                    a instanceof Ye || (a = new Ye(a));
                    delete a.fallback;
                    g ? a.args.autoplay = 1 : ug("html5_ajax", Dk);
                    a.attrs.id = E.elementId;
                    F(o, a)
                }
                );
                e.fallbackMessage = Ek(E);
                wk[d] = E;
                N(function() {
                    if (c) {
                        var a = H(e.attrs.id)
                          , b = m;
                        try {
                            a.getApiInterface();
                            b = k
                        } catch (d) {}
                        v && (window.onYouTubePlayerReady = function() {
                            Fk(E.playerId)
                        }
                        );
                        C(e, c.force);
                        b && Fk(E.playerId)
                    } else
                        C(o, e)
                }, 0);
                return j
            }
        }
        function Dk() {
            W("/html5", {
                sb: k,
                method: "POST",
                D: {
                    prefer_html5: k,
                    session_token: M("html5_ajax")
                }
            })
        }
        function Ek(a) {
            var b = a.target
              , c = a.eventLabel;
            return function() {
                var a = O("PLAYER_FALLBACK_OVERRIDE");
                if (!a) {
                    var a = O("PLAYER_FALLBACK", i, 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="e">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>')
                      , e = navigator.userAgent.match(/Version\/(\d).*Safari/);
                    e && 5 <= parseInt(e[1], 10) && (a = O("QUICKTIME_FALLBACK", i, 'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="">Get the latest Flash Player</a> <br> <a href="https://web.archive.org/web/20120531234132/http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>'))
                }
                b.innerHTML = '<div class="fallback-message">' + a + "</div>";
                "embedded" == c && w(b.getElementsByTagName("a"), function(a) {
                    a.setAttribute("target", "_blank")
                })
            }
        }
        function zk(a, b) {
            x(a, "player-root");
            b.attrs.width && he(a, "width", b.attrs.width);
            b.attrs.height && he(a, "height", b.attrs.height);
            he(a, "overflow", "hidden");
            var c = dc("div", "player-container")
              , d = dc("div", "player-actions-container", dc("div", "player-actions-share"), dc("div", "player-actions-close", dc("div", "player-actions-close-button")));
            jc(a, c, d)
        }
        function Ck(a, b) {
            Gk(a);
            b.attrs.id = b.attrs.id + "-html5";
            var c = q("yt.player.VideoPlayer");
            c ? new c(a,b) : Ag(b.assets.js, function() {
                new (q("yt.player.VideoPlayer"))(a,b)
            })
        }
        function Bk(a, b) {
            Gk(a);
            b.attrs.id = b.attrs.id + "-flash";
            jf(a, b)
        }
        function Gk(a) {
            a = H(a);
            kc(a)
        }
        function yk() {
            var a = "unknown";
            document.referrer && (a = document.referrer.substring(0, 128));
            return a
        }
        function Fk(a) {
            var b = wk[a]
              , c = mc(H(b.target))
              , d = c.getApiInterface();
            w(d, function(a) {
                b.api[a] = s(c[a], c)
            });
            b.api.Xg = s(b.api.destroy, c);
            b.api.destroy = s(function() {
                this.Xg();
                delete wk[a]
            }, b.api);
            b.api.nativeAddEventListener = s(b.api.addEventListener, c);
            for (var e in b.api.subscribedEvents)
                b.api.nativeAddEventListener(e, Hk(b.api, e));
            b.api.addEventListener = Ik;
            "embedded" === b.eventLabel && b.api.addEventListener("SHARE_CLICKED", s(b.actions.Yg, b.actions));
            b.onReadyCalled || (b.onReadyCalled = k,
            b.jsapicallback ? (d = b.jsapicallback) && d(b.playerapiid) : window.onYouTubePlayerReady && onYouTubePlayerReady(b.playerapiid))
        }
        function Hk(a, b) {
            var c = "ytPlayer" + (b + ha(a))
              , d = s(function(a) {
                this.pubsub.publish(b, a)
            }, a);
            t(c, d);
            return c
        }
        function Ik(a, b) {
            var c = Ak(b);
            this.subscribedEvents[a] || this.nativeAddEventListener(a, Hk(this, a));
            this.subscribedEvents[a] = 1;
            this.pubsub.subscribe(a, c)
        }
        function Ak(a) {
            var b = a;
            "string" == typeof a && (b = function() {
                q(a).apply(window, arguments)
            }
            );
            b || (b = q("onYouTubePlayerReady"));
            return b
        }
        q("ytPlayerOnYouTubePlayerReady") || t("ytPlayerOnYouTubePlayerReady", Fk);
        t("yt.setAjaxToken", cd);
        t("yt.tracking.share", Fg);
        t("yt.window.popup", Nh);
        Pg(Sg);
        Pg(dh);
        Pg(Eh);
        Pg(Lh);
        Xf || (Xf = new Uf);
        if (-1 != window.location.href.indexOf("Debug=true")) {
            var Jk = Xf;
            if (k != Jk.c) {
                var Kk;
                Sf || (Sf = new Kf(""),
                Sf.c = Qf);
                Kk = Sf;
                var Lk = Jk.o;
                Kk.b || (Kk.b = []);
                Kk.b.push(Lk);
                Jk.c = k
            }
        }
        ;var $ = q("yt.timing") || {};
        t("yt.timing", $);
        $.cj = 0;
        $.bj = 0;
        $.le = function(a, b) {
            var c = $.timer || {};
            c[a] = b ? b : na();
            $.timer = c
        }
        ;
        $.info = function(a, b) {
            var c = $.info_args || {};
            c[a] = b;
            $.info_args = c
        }
        ;
        $.cc = function(a) {
            var a = a || L("TIMING_ACTION")
              , b = $.timer || {}
              , c = $.info_args || {}
              , d = b.start
              , e = ""
              , f = []
              , g = [];
            delete b.start;
            $.srt && (e = "&srt=" + $.srt);
            b.aft && b.plev && (b.aft = Math.min(b.aft, b.plev));
            for (var j in b)
                f.push(j + "." + Math.round(b[j] - d));
            for (j in c)
                g.push(j + "=" + c[j]);
            b.vr && b.gv && f.push("vl." + Math.round(b.vr - b.gv));
            !b.aft && b.vr && b.cl ? b.cl > b.vr ? f.push("aft." + Math.round(b.cl - d)) : f.push("aft." + Math.round(b.vr - d)) : !b.aft && b.vr ? f.push("aft." + Math.round(b.vr - d)) : b.aft || f.push("aft." + Math.round(b.ol - d));
            Eg(["https:" == window.location.protocol ? "" : "", "", a, e, "&", g.join("&"), "&rt=", f.join(",")].join(""))
        }
        ;
        $.Pc = function() {
            var a = L("TIMING_ACTION")
              , b = $.timer || {};
            a && b.start && ($.wff && -1 != a.indexOf("ajax") && b.vr && b.cl ? $.cc() : $.wff && -1 == a.indexOf("ajax") && b.vr ? $.cc() : !$.wff && (b.ol || b.aft) && $.cc())
        }
        ;
        $.qe = function() {
            $.le("ol");
            $.Pc()
        }
        ;
        function Mk() {
            this.b = {}
        }
        u(Mk, Qg);
        aa(Mk);
        Mk.prototype.M = "char-counter";
        Mk.prototype.T = function() {
            Z(this, "keydown", this.c, "input");
            Z(this, "paste", this.c, "input");
            Z(this, "cut", this.c, "input")
        }
        ;
        Mk.prototype.c = function(a) {
            var b = Rg(this, a);
            if (b) {
                var c = "true" == this.getData(b, "count-char-by-size")
                  , d = parseInt(this.getData(b, "char-limit"), 10);
                isNaN(d) || 0 >= d || N(s(function() {
                    var e = parseInt(a.getAttribute("maxlength"), 10);
                    if (!isNaN(e)) {
                        var f = Nk(a, c);
                        if (c) {
                            if (f > e) {
                                var g = a.value
                                  , j = g.length
                                  , o = 0
                                  , e = f - e
                                  , f = ""
                                  , v = 0;
                                do
                                    f += g[j - o],
                                    v = unescape(encodeURIComponent(f)).length,
                                    o++;
                                while (v < e);
                                a.value = a.value.substring(0, j - o)
                            }
                        } else
                            f > e && (a.value = a.value.substring(0, e))
                    }
                    g = parseInt(this.getData(b, "warn-at-chars-remaining"), 10);
                    isNaN(g) && (g = 0);
                    j = d - Nk(a, c);
                    B(b, Y(this, "maxed-out"), j < g);
                    K(Y(this, "remaining"), b).innerHTML = j
                }, this), 0)
            }
        }
        ;
        function Nk(a, b) {
            var c = a.value;
            return b ? unescape(encodeURIComponent(c)).length : c.length
        }
        ;function Ok() {
            this.b = {}
        }
        u(Ok, Qg);
        Ok.prototype.Lc = function() {
            return this.Oc && 0 == Pb.indexOf("6") ? m : k
        }
        ;
        Ok.prototype.pb = function(a) {
            var b = Rg(this, a);
            if (b) {
                x(b, Y(this, "active"));
                var c = Pk(this, a, b);
                if (c) {
                    c.cardTargetNode = a;
                    c.cardRootNode = b;
                    Qk(this, a, c);
                    var d = Y(this, "card-visible");
                    N(function() {
                        T(c);
                        x(c, d)
                    }, 10);
                    this.za(b, "card-action", a)
                }
            }
        }
        ;
        function Pk(a, b, c) {
            var d = Y(a, "card")
              , e = d + od(c)
              , f = H(e);
            if (f)
                return f;
            var g = Rk(a, c);
            if (!g)
                return l;
            f = document.createElement("div");
            f.id = e;
            f.className = d;
            (c = Q(c, "card-class")) && x(f, c);
            c = document.createElement("div");
            c.className = Y(a, "card-border");
            b = a.getData(b, "orientation") || "horizontal";
            d = document.createElement("div");
            d.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
            e = document.createElement("div");
            e.className = Y(a, "card-body");
            a = document.createElement("div");
            a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
            lc(g);
            e.appendChild(g);
            c.appendChild(a);
            c.appendChild(e);
            f.appendChild(d);
            f.appendChild(c);
            document.body.appendChild(f);
            return f
        }
        function Qk(a, b, c) {
            var d = a.getData(b, "orientation") || "horizontal", e = a.getData(b, "position"), f = !!a.getData(b, "force-position"), d = "horizontal" == d, g = "bottomright" == e || "bottomleft" == e, e = "topright" == e || "bottomright" == e, j, o;
            e && g ? (o = 7,
            j = 4) : e && !g ? (o = 6,
            j = 5) : !e && g ? (o = 5,
            j = 6) : (o = 4,
            j = 7);
            var v = qe(document.body)
              , E = qe(b);
            v != E && (o ^= 2);
            var C;
            d ? (E = b.offsetHeight / 2 - 24,
            C = new hb(-12,b.offsetHeight + 6)) : (E = b.offsetWidth / 2 - 12,
            C = new hb(b.offsetWidth + 6,-12));
            var F = l;
            f || (F = 10);
            var V = Y(a, "card-flip")
              , a = Y(a, "card-reverse");
            B(c, V, e);
            B(c, a, g);
            F = Gg(b, o, c, j, C, l, F);
            !f && F && (F & 48 && (e = !e,
            o ^= 2,
            j ^= 2),
            F & 192 && (g = !g,
            o ^= 1,
            j ^= 1),
            B(c, V, e),
            B(c, a, g),
            Gg(b, o, c, j, C));
            b = K("yt-uix-card-body-arrow", c);
            f = K("yt-uix-card-border-arrow", c);
            c = te(c);
            E = Math.max(6, Math.min(E, (d ? c.height : c.width) - 24 - 6));
            c = d ? g ? "top" : "bottom" : !v && e || v && !e ? "left" : "right";
            b.setAttribute("style", "");
            f.setAttribute("style", "");
            b.style[c] = E + "px";
            f.style[c] = E + "px"
        }
        function Sk(a, b) {
            var c = Rg(a, b);
            if (c) {
                var d = Pk(a, b, c);
                d && (y(c, Y(a, "active")),
                y(d, Y(a, "card-visible")),
                U(d),
                d.cardTargetNode = l,
                d.cardRootNode = l)
            }
        }
        function Tk(a, b, c) {
            var d = Rg(a, b);
            if (d) {
                var e = Rk(a, d);
                e && (e.innerHTML = c,
                A(d, Y(a, "active")) && (c = Pk(a, b, d),
                Qk(a, b, c)))
            }
        }
        function Uk(a, b) {
            var c = Rg(a, b);
            return !c ? m : A(c, Y(a, "active"))
        }
        function Rk(a, b) {
            var c = b.cardContentNode;
            if (!c) {
                var d = Y(a, "content")
                  , e = Y(a, "card-content")
                  , c = K(d, b);
                z(c, d, e);
                b.cardContentNode = c
            }
            return c
        }
        Ok.prototype.e = {
            qg: 200,
            rg: 200
        };
        function Vk() {
            this.b = {}
        }
        u(Vk, Ok);
        aa(Vk);
        n = Vk.prototype;
        n.M = "clickcard";
        n.T = function() {
            Z(this, "click", this.Ug, "target");
            Z(this, "click", this.Tg, "close")
        }
        ;
        n.Ug = function(a) {
            var b = Rg(this, a);
            A(b, Y(this, "active")) ? (Sk(this, a),
            y(b, Y(this, "active"))) : (this.pb(a),
            x(b, Y(this, "active")))
        }
        ;
        n.pb = function(a) {
            Vk.P.pb.call(this, a);
            var b = Rg(this, a);
            Wk(this);
            Q(b, "click-outside-closes") && (this.c = a,
            this.f = R(document, "click", s(this.Tf, this)))
        }
        ;
        n.Tf = function(a) {
            yc(a.target, "yt-uix" + (this.M ? "-" + this.M : "") + "-card") || Wk(this)
        }
        ;
        function Wk(a) {
            a.c && (Sk(a, a.c),
            a.c = l,
            S(a.f))
        }
        n.Tg = function(a) {
            (a = yc(a, Y(this, "card"))) && Sk(this, a.cardTargetNode)
        }
        ;
        function Xk() {
            this.b = {}
        }
        u(Xk, Qg);
        aa(Xk);
        Xk.prototype.M = "close";
        Xk.prototype.T = function() {
            Z(this, "click", this.c)
        }
        ;
        Xk.prototype.c = function(a) {
            var b, c = this.getData(a, "close-parent-class"), d = this.getData(a, "close-parent-id");
            d ? b = H(d) : c && (b = yc(a, c));
            b && U(b);
            this.za(a, "close-callback", b)
        }
        ;
        function Yk() {
            this.b = {}
        }
        u(Yk, Qg);
        aa(Yk);
        n = Yk.prototype;
        n.M = "form-input";
        n.T = function() {
            D && !G(9) && (Z(this, "click", this.ee, "checkbox"),
            Z(this, "keypressed", this.ee, "checkbox"),
            Z(this, "click", this.fe, "radio"),
            Z(this, "keypressed", this.fe, "radio"));
            Z(this, "blur", this.zg, "select-element");
            Z(this, "change", this.ab, "select-element");
            Z(this, "keyup", this.ab, "select-element");
            Z(this, "focus", this.Ag, "select-element");
            Z(this, "keyup", this.Jc, "text");
            Z(this, "keyup", this.Jc, "textarea");
            Z(this, "keyup", this.Jc, "bidi")
        }
        ;
        n.ee = function(a) {
            var b = yc(a, Y(this, "checkbox-container"));
            B(b, "checked", a.checked)
        }
        ;
        n.fe = function() {
            var a = I(Y(this, "radio"))
              , b = Y(this, "radio-container");
            w(a, function(a) {
                var d = yc(a, b);
                d && B(d, "checked", a.checked)
            })
        }
        ;
        n.Jc = function(a) {
            var b = a.value
              , c = "";
            Uc(b) ? c = "rtl" : Sc.test(b) && (c = "ltr");
            a.dir = c
        }
        ;
        n.Ag = function(a) {
            var b = yc(a, Y(this, "select"));
            x(b, "focused");
            this.ab(a)
        }
        ;
        n.zg = function(a) {
            var b = yc(a, Y(this, "select"));
            y(b, "focused");
            this.ab(a)
        }
        ;
        n.ab = function(a) {
            var b = yc(a, Y(this, "select"))
              , b = K(Y(this, "select-value"), b);
            if (a = a.options[Math.max(a.selectedIndex, 0)])
                b.innerHTML = a.innerHTML
        }
        ;
        function Zk() {
            var a = Yk.getInstance()
              , b = I(Y(a, "select-element"));
            w(b, function(b) {
                a.ab(b)
            })
        }
        ;function $k() {
            this.b = {}
        }
        u($k, Ok);
        aa($k);
        n = $k.prototype;
        n.M = "hovercard";
        n.T = function() {
            Z(this, "mouseover", this.Jg, "target", 5, k);
            Z(this, "mouseout", this.Hg, "target", 5, k);
            Z(this, "mouseover", this.Kg, "card", 100);
            Z(this, "mouseout", this.Ig, "card", 100)
        }
        ;
        n.Jg = function(a) {
            if (al != a) {
                al && (Sk(this, al),
                al = l);
                var b = s(this.pb, this, a)
                  , c = parseInt(this.getData(a, "delay-show"), 10)
                  , b = N(b, -1 < c ? c : this.e.qg);
                this.setData(a, "card-timer", b.toString());
                al = a;
                a.alt && (this.setData(a, "card-alt", a.alt),
                a.alt = "");
                a.title && (this.setData(a, "card-title", a.title),
                a.title = "")
            }
        }
        ;
        n.Hg = function(a) {
            var b = parseInt(this.getData(a, "card-timer"), 10);
            fd(b);
            Rg(this, a).isCardHidable = k;
            b = parseInt(this.getData(a, "delay-hide"), 10);
            b = -1 < b ? b : this.e.rg;
            N(s(this.sg, this, a), b);
            if (b = this.getData(a, "card-alt"))
                a.alt = b;
            if (b = this.getData(a, "card-title"))
                a.title = b
        }
        ;
        n.sg = function(a) {
            Rg(this, a).isCardHidable && (Sk(this, a),
            al = l)
        }
        ;
        n.Kg = function(a) {
            a && (a.cardRootNode.isCardHidable = m)
        }
        ;
        n.Ig = function(a, b, c) {
            a && (b = a.cardTargetNode,
            oc(a, c.relatedTarget) || Sk(this, b))
        }
        ;
        var al = l;
        function bl() {
            this.b = {}
        }
        u(bl, Qg);
        aa(bl);
        bl.prototype.M = "redirect-link";
        bl.prototype.T = function() {
            Z(this, "click", this.c)
        }
        ;
        bl.prototype.c = function(a) {
            if (!Q(a, "redirect-href-updated")) {
                P(a, "redirect-href-updated", "true");
                var b = L("XSRF_REDIRECT_TOKEN")
                  , c = L("XSRF_FIELD_NAME");
                if (b && c) {
                    var d = {};
                    d.q = a.href;
                    d[c] = b;
                    a.href = Re("/redirect", d)
                }
            }
        }
        ;
        function cl() {
            this.b = {}
        }
        u(cl, Qg);
        aa(cl);
        cl.prototype.M = "sessionlink";
        cl.prototype.T = function() {
            Z(this, "click", this.c)
        }
        ;
        cl.prototype.c = function(a) {
            var b = Q(a, "sessionlink-target") || a.href;
            if (b) {
                var c = Ie(b);
                if (c == window.location.host || !c && 0 == b.lastIndexOf("/", 0))
                    if (b = Ke(b),
                    c = b.indexOf("#"),
                    b = 0 > c ? b : b.substr(0, c))
                        a = Q(a, "sessionlink") || "",
                        a = Oe(a),
                        b = "s_tempdata-" + Ha(b),
                        a = a ? Ne(a) : "",
                        Td(b, a, 5)
            }
        }
        ;
        function dl() {
            this.b = {}
        }
        u(dl, Qg);
        aa(dl);
        dl.prototype.M = "tile";
        dl.prototype.T = function() {
            Z(this, "click", this.c)
        }
        ;
        dl.prototype.c = function(a, b, c) {
            !wc(c.target, "a") && !wc(c.target, "button") && (a = K(Y(this, "link"), a)) && (D && !G(9) ? a.click() : Mh(a.href))
        }
        ;
        function el(a, b) {
            this.c = a;
            this.e = m;
            this.o = new of;
            Gd(this.c, "click", s(this.G, this), "yt-dialog-dismiss");
            fl(this, "content");
            this.f = b
        }
        var gl = {
            LOADING: "loading",
            jh: "content",
            $i: "working"
        };
        function fl(a, b) {
            var c = K("yt-dialog-fg-content", a.c)
              , d = [];
            kb(gl, function(a) {
                d.push("yt-dialog-show-" + a)
            });
            z(c, d, "yt-dialog-show-" + b)
        }
        function hl(a) {
            var b = Sg.getInstance()
              , a = I(Y(b, "menu"), a.c);
            w(a, function(a) {
                a = $g(b, a);
                P(a, "button-menu-root-container", "yt-dialog-base")
            })
        }
        function il(a) {
            var b = document.getElementsByTagName("embed")
              , c = document.getElementsByTagName("object")
              , a = s(function(a) {
                var b = a.style.visibility;
                "hidden" != b && (P(a, "dialog-hidden", "true"),
                b && P(a, "dialog-visibility-value", b),
                a.style.visibility = "hidden")
            }, a);
            w(b, a);
            w(c, a)
        }
        function jl(a) {
            var b = document.getElementsByTagName("embed")
              , c = document.getElementsByTagName("object")
              , a = s(function(a) {
                if (Q(a, "dialog-hidden")) {
                    ld(a, "dialog-hidden");
                    var b = Q(a, "dialog-visibility-value");
                    b ? a.style.visibility = b : a.style.visibility = l
                }
            }, a);
            w(b, a);
            w(c, a)
        }
        el.prototype.G = function(a) {
            kl(this, Q(a.currentTarget, "action") || "")
        }
        ;
        function kl(a, b) {
            U(a.c);
            U(a.b);
            jl(a);
            a.f || Hd(document, "keydown", s(a.i, a));
            a.o.Ra("all");
            a.o.Ra(b)
        }
        el.prototype.i = function(a) {
            27 == a.keyCode && kl(this, "cancel")
        }
        ;
        t("yt.ui.Dialog", el);
        var ll = {
            kd: m,
            jd: m,
            Nc: "create-channel-identity-css",
            init: function() {
                R(H("masthead-upload-link"), "mousedown", ll.Sg);
                R(H("masthead-upload-link"), "click", ll.ke)
            },
            Sg: function() {
                H(ll.Nc) || (Ag(L("CREATE_CHANNEL_JS_URL"), ll.Mg),
                H(ll.Nc) || ll.Ng(L("CREATE_CHANNEL_CSS_URL")))
            },
            Mg: function() {
                ll.kd = k;
                ll.jd && ll.ke()
            },
            ke: function() {
                if (!ll.lb) {
                    var a = H("create-channel-identity-lb");
                    if (!a)
                        return;
                    ll.lb = new el(a)
                }
                a = L("CREATE_CHANNEL_DIALOG_TITLE");
                pc(K("yt-dialog-title", ll.lb.c), a);
                fl(ll.lb, "loading");
                a = ll.lb;
                a.e || (hl(a),
                a.e = k);
                a.b || (a.b = H("yt-dialog-bg"),
                a.b || (a.b = document.createElement("div"),
                a.b.id = "yt-dialog-bg",
                a.b.className = "yt-dialog-bg",
                document.body.appendChild(a.b)));
                a.b.style.height = bc() + "px";
                T(a.b);
                il(a);
                a.f || R(document, "keydown", s(a.i, a));
                T(a.c);
                ll.kd ? ll.Te() : ll.jd = k
            },
            Te: function() {
                q("yt.www.account.CreateChannelLightboxForm.fetchAndShow")(ll.lb, L("CREATE_CHANNEL_UPSELL"), L("CREATE_CHANNEL_NEXT_URL"))
            },
            aj: function() {
                return H("create-channel-identity-dialog")
            },
            Ng: function(a) {
                var b = J("head", i, i)[0]
                  , a = dc("link", {
                    id: ll.Nc,
                    rel: "stylesheet",
                    href: a
                });
                b.insertBefore(a, b.childNodes[0] || l)
            }
        };
        function ml(a, b) {
            this.e = a;
            this.f = b;
            this.i = "ad_creative_1";
            this.b = "ad_creative_expand_btn_1";
            this.c = "ad_creative_collapse_btn_1";
            R(H("premium-yva"), "click", s(this.ld, this))
        }
        n = ml.prototype;
        n.eh = function() {
            U(this.i);
            Ei(H("page"), k);
            Bi();
            this.f || U(this.c);
            T(this.b);
            nl(this);
            X("homepage_collapse_masthead_ad", i, i)
        }
        ;
        n.ld = function() {
            T(this.b);
            lc(H("premium-yva"));
            he(document.getElementById("feed"), {
                "margin-top": 0
            });
            nl(this)
        }
        ;
        n.bh = function() {
            z(document.getElementById("premium-yva"), "premium-yva-unexpanded", "premium-yva-expanded")
        }
        ;
        n.dh = function() {
            z(document.getElementById("premium-yva"), "premium-yva-expanded", "premium-yva-unexpanded")
        }
        ;
        function nl(a) {
            var b = Wd.getInstance();
            be("HIDDEN_MASTHEAD_ID", a.e);
            ee(b)
        }
        n.ah = function() {
            U("premium-yva");
            y(H("premium-yva"), "premium-yva-unexpanded")
        }
        ;
        n.fh = function() {
            var a = Wd.getInstance();
            be("HIDDEN_MASTHEAD_ID", m);
            ee(a);
            X("homepage_expand_masthead_ad", i, i);
            Mh(document.location.href)
        }
        ;
        var ol;
        function pl(a) {
            var b;
            switch (a) {
            case "PENDING":
                b = O("COMMENT_PENDING");
                break;
            case "BLOCKED":
                b = O("COMMENT_BLOCKED");
                break;
            case "EMAIL":
                b = O("COMMENT_ERROR_EMAIL");
                break;
            case "INLINE_CAPTCHAFAIL":
                b = O("COMMENT_CAPTCHAFAIL");
                break;
            case "SHOW_COUNTDOWN":
                b = O("SHOW_COUNTDOWN");
                break;
            case "FAILED_OWNER_LINKING":
                b = O("COMMENT_OWNER_LINKING")
            }
            return b || l
        }
        function ql(a, b) {
            this.r = a;
            this.sa = td("button", l, a);
            this.fa = td("textarea", l, a);
            this.Ba = l;
            this.e = K("comments-remaining-count", this.r);
            this.f = parseInt(Q(this.e, "max-count"), 10);
            this.Pa = K("comments-post-message", this.r);
            this.Vc = K("yt-alert-content", this.Pa);
            this.c = K("comments-threshold-countdown", this.r);
            this.jc = K("comments-threshold-count", this.c);
            this.H = [];
            this.b = [];
            rl(this);
            this.H.push(R(this.fa, "focus", s(this.cd, this)));
            this.H.push(R(this.fa, "blur", s(this.Ke, this)));
            this.H.push(R(this.r, "submit", s(this.Me, this)));
            var c = s(this.Le, this);
            this.H.push(R(this.fa, "change", c));
            this.H.push(R(this.fa, "keyup", c));
            b && this.cd()
        }
        n = ql.prototype;
        n.destroy = function() {
            S(this.H);
            this.H = [];
            w(this.b, function(a) {
                gd(a)
            });
            this.b = [];
            ld(this.r, "initialized")
        }
        ;
        function sl(a) {
            tl(a);
            ul(a);
            a.fa.blur();
            y(a.r, "has-focus");
            a.sa.disabled = m;
            a.fa.value = "";
            var b = a.fa, c = 0, d;
            try {
                d = "number" == typeof b.selectionStart
            } catch (e) {
                d = m
            }
            d ? (b.selectionStart = c,
            b.selectionEnd = c) : D && ("textarea" == b.type && (c = b.value.substring(0, c).replace(/(\r\n|\r|\n)/g, "\n").length),
            b = b.createTextRange(),
            b.collapse(k),
            b.move("character", c),
            b.select());
            rl(a)
        }
        n.focus = function() {
            this.fa.focus()
        }
        ;
        function tl(a) {
            a.Ba && (a.Ba.innerHTML = "")
        }
        function rl(a) {
            var b = a.f - a.fa.value.length;
            a.e.innerHTML = b + "";
            b = 0 > b;
            B(a.e, "too-many", b);
            a.sa.disabled = b
        }
        function vl(a, b) {
            a.jc.innerHTML = b;
            wl(a);
            var c = ed(s(function() {
                0 == b ? (gd(c),
                ul(this)) : (b--,
                this.jc.innerHTML = b)
            }, a), 1E3);
            a.b.push(c)
        }
        function wl(a) {
            U(K("comments-remaining"));
            T(a.c);
            a.sa.disabled = k
        }
        function ul(a) {
            U(a.c);
            T(K("comments-remaining"));
            a.jc.innerHTML = "";
            a.sa.disabled = m
        }
        n.Le = function() {
            rl(this)
        }
        ;
        n.cd = function() {
            A(this.r, "has-focus") || U(this.Pa);
            x(this.r, "has-focus");
            sf("comments-focus", this.r)
        }
        ;
        n.Ke = function() {
            sf("comments-blur", this.r)
        }
        ;
        n.Me = function(a) {
            a.preventDefault();
            if (!this.sa.disabled) {
                this.sa.disabled = k;
                a = Oe(Nc(this.r));
                a.screen = Ne({
                    h: window.screen.height,
                    w: window.screen.width,
                    d: window.screen.colorDepth
                });
                var b = a.comment
                  , b = {
                    return_ajax: "true",
                    len: b.length,
                    wc: b.split(/\s+/).length
                };
                this.r.reply_parent_id.value && (b.reply = 1);
                var c = L("PLAYBACK_ID");
                c && (a.plid = c);
                W(this.r.action, {
                    format: "XML",
                    method: "POST",
                    n: b,
                    D: a,
                    S: function(a, b) {
                        var c = b.str_code;
                        switch (c) {
                        case "OK":
                            c = document.createElement("ul");
                            c.innerHTML = b.html_content;
                            c = mc(c);
                            if (this.r.reply_parent_id.value) {
                                var g = wc(this.r, l, "comments-post-container")
                                  , j = wc(g, l, "comment");
                                lc(g);
                                z(j, "replying", "has-child");
                                x(c, "child");
                                B(c, "last", !(j.nextElementSibling != i ? j.nextElementSibling : nc(j.nextSibling)));
                                j.parentNode && j.parentNode.insertBefore(c, j.nextSibling)
                            } else
                                g = wc(this.r, l, "comments-section"),
                                g = K("comment-list", g),
                                g.insertBefore(c, g.childNodes[0] || l),
                                sl(this);
                            Ci(c);
                            break;
                        case "PENDING":
                            tl(this);
                            this.Vc.innerHTML = O("COMMENT_PENDING");
                            z(this.Pa, "yt-alert-error", "yt-alert-info");
                            T(this.Pa);
                            break;
                        default:
                            xl(this, c, b)
                        }
                    },
                    A: this
                });
                Qh("comment")
            }
        }
        ;
        function xl(a, b, c) {
            a.Vc.innerHTML = pl(b) || O("COMMENT_ERROR");
            z(a.Pa, "yt-alert-info", "yt-alert-error");
            T(a.Pa);
            switch (b) {
            case "INLINE_CAPTCHA":
            case "INLINE_CAPTCHAFAIL":
                W("/comment_servlet?gimme_captcha=1", {
                    format: "XML",
                    method: "POST",
                    D: {
                        session_token: M("comment_servlet")
                    },
                    j: function(a, b) {
                        if (!this.Ba) {
                            this.Ba = document.createElement("div");
                            this.Ba.className = "comment-captcha";
                            var c = this.fa;
                            c.parentNode && c.parentNode.insertBefore(this.Ba, c.nextSibling)
                        }
                        this.Ba.innerHTML = b.html_content;
                        this.sa.disabled = m
                    },
                    A: a
                });
                break;
            case "SHOW_COUNTDOWN":
                vl(a, parseInt(c.countdown_timer, 10) || 30);
                break;
            default:
                a.sa.disabled = m,
                tl(a)
            }
        }
        ;function yl(a) {
            this.k = a;
            this.kb = K("watch-more-comments-button");
            this.b = !!L("ENABLE_LIVE_COMMENTS");
            this.H = [];
            (a = K("comments-pagination", this.k)) && Q(a, "ajax-enabled") && this.H.push(Gd(this.k, "click", s(this.c, this), "yt-uix-pager-button"));
            this.H.push(R(this.kb, "click", s(this.f, this)));
            this.H.push(Gd(this.k, "click", s(this.e, this), "comments-section-pop-out"))
        }
        yl.prototype.destroy = function() {
            S(this.H);
            this.H = []
        }
        ;
        yl.prototype.c = function(a) {
            a.preventDefault();
            a = a.currentTarget;
            if (!A(a, "yt-uix-button-toggled")) {
                var b = parseInt(Q(a, "page"), 10);
                T("comments-loading");
                sf("comments-page-changing");
                zl(this, b, function(a) {
                    if (a) {
                        this.k.innerHTML = a;
                        Ci(this.k);
                        var a = K("comment-list", this.k)
                          , d = K("live-comments-setting", this.k);
                        a && sf("comments-page-changed", a, d, b)
                    }
                    U("comments-loading")
                })
            }
        }
        ;
        yl.prototype.f = function() {
            U(this.kb);
            T("watch-more-comments", "watch-more-comments-loading");
            var a = parseInt(Q(this.kb, "page"), 10);
            zl(this, a, function(b) {
                var c = H("watch-more-comments");
                c.innerHTML += b;
                Ci(c);
                P(this.kb, "page", a + 1);
                T(this.kb);
                U("watch-more-comments-loading")
            })
        }
        ;
        yl.prototype.e = function() {
            Nh(L("COMMENTS_POPUP_URL"), {
                width: 350,
                height: 500,
                resizable: k
            })
        }
        ;
        function zl(a, b, c) {
            P(a.k, "type", "everything");
            W("/watch_ajax?action_get_comments=1", {
                format: "XML",
                n: {
                    v: L("VIDEO_ID"),
                    p: b,
                    commentthreshold: L("COMMENTS_THRESHHOLD"),
                    commenttype: "everything",
                    enable_live_comments: a.b ? "yes" : l,
                    page_size: L("COMMENTS_PAGE_SIZE"),
                    source: L("COMMENT_SOURCE")
                },
                j: function(a, b) {
                    c.call(this, b.html_content)
                },
                A: a
            })
        }
        ;function Al(a, b) {
            var c = wc(a, "form");
            md(c, "initialized") || (P(c, "initialized", "true"),
            ol = new ql(c,!b),
            b && ol.focus())
        }
        var Bl = [];
        function Cl(a) {
            var a = a.currentTarget
              , b = wc(a, l, "comment");
            switch (Q(a, "action")) {
            case "approve":
                Dl(b);
                break;
            case "block":
                confirm(O("BLOCK_USER")) && (El(b, k),
                x(b, "blocked"));
                break;
            case "unblock":
                El(b, m);
                y(b, "blocked");
                break;
            case "flag":
                Fl(b);
                break;
            case "unflag":
                a = Q(b, "id");
                W("/comment_servlet", {
                    format: "XML",
                    method: "POST",
                    D: {
                        unmark_comment_as_spam: a,
                        entity_id: L("VIDEO_ID"),
                        session_token: M("comment_servlet")
                    }
                });
                break;
            case "hide":
                x(b, "hidden");
                break;
            case "show":
                y(b, "hidden");
                break;
            case "remove":
                Gl(b);
                break;
            case "reply":
                Hl(b);
                break;
            case "realtime-reply":
                Il() && (Jl(b),
                ol || (a = K("comments-textarea", H("comments-view")),
                Al(a)),
                a = ol,
                sl(a),
                a.focus());
                break;
            case "share":
                Kl(b);
                break;
            case "close-share":
                Jl(b);
                break;
            case "vote-up":
                Ll(b, k);
                break;
            case "vote-down":
                Ll(b, m);
                break;
            case "show-parent":
                Ml(b)
            }
        }
        function Il() {
            return L("COMMENTS_SIGNIN_URL") ? (Mh(L("COMMENTS_SIGNIN_URL")),
            m) : !L("COMMENTS_YPC_CAN_POST_OR_REACT_TO_COMMENT") ? m : k
        }
        function Dl(a) {
            var b = Q(a, "id")
              , c = L("VIDEO_ID");
            y(a, "pending");
            W("/comment_servlet?field_approve_comment=1", {
                format: "XML",
                method: "POST",
                D: {
                    comment_id: b,
                    entity_id: c,
                    session_token: M("comment_servlet")
                },
                B: function() {
                    x(a, "pending")
                }
            })
        }
        function El(a, b) {
            var c = {};
            c["action_" + (b ? "" : "un") + "block_commenter"] = 1;
            var d = Q(a, "id");
            W("/link_ajax", {
                format: "XML",
                method: "POST",
                n: c,
                D: {
                    session_token: M("link_ajax"),
                    comment_id: d
                },
                j: function(a, b) {
                    b && b.success_message && window.alert(b.success_message)
                }
            })
        }
        function Fl(a) {
            if (Il()) {
                var b = Q(a, "id")
                  , c = L("VIDEO_ID");
                U(a);
                x(a, "flagged");
                W("/comment_servlet", {
                    format: "XML",
                    method: "POST",
                    n: {
                        mark_comment_as_spam: b,
                        entity_id: c
                    },
                    D: {
                        session_token: M("comment_servlet")
                    },
                    B: function() {
                        T(a);
                        y(a, "flagged")
                    }
                })
            }
        }
        function Gl(a) {
            var b = Q(a, "id")
              , c = L("VIDEO_ID");
            U(a);
            W("/comment_servlet?remove_comment=1", {
                format: "XML",
                method: "POST",
                D: {
                    comment_id: b,
                    entity_id: c,
                    session_token: M("comment_servlet")
                },
                B: function() {
                    T(a)
                }
            })
        }
        function Hl(a) {
            if (Il())
                if (A(a, "replying"))
                    Nl(a);
                else {
                    x(a, "replying");
                    Jl(a);
                    var b = K("comments-post", H("comments-view"))
                      , b = sd(b)
                      , c = document.createElement("div");
                    c.className = "comments-post-container";
                    a.appendChild(c);
                    c.appendChild(b);
                    b = new ql(b);
                    sl(b);
                    a = Q(a, "id");
                    b.r.reply_parent_id.value = a;
                    b.focus()
                }
        }
        function Nl(a) {
            A(a, "replying") && (y(a, "replying"),
            a = K("comments-post-container", a),
            lc(a))
        }
        function Kl(a) {
            if (!A(a, "sharing")) {
                x(a, "sharing");
                Nl(a);
                var b = sd(H("comment-share-area"))
                  , c = document.createElement("div");
                c.className = "comments-post-container";
                a.appendChild(c);
                c.appendChild(b);
                var d = Q(a, "id")
                  , c = L("COMMENT_SHARE_URL")
                  , c = c.replace("_COMMENT_ID_", d);
                K("comment-share-url", b).value = c;
                var a = K("comment-text", a)
                  , e = Fa(uc(mc(a)))
                  , a = I("icon-comment-share", b);
                w(a, function(a) {
                    var b = a.getAttribute("action"), b = b.replace("_COMMENT_ID_", d), c;
                    c = -1 != b.indexOf("twitter") ? Ca(e, 80) : Ca(e, 150);
                    b = b.replace("_COMMENT_TEXT_", c);
                    Bl.push(R(a, "click", s(function(a) {
                        eval(a)
                    }, p, b)))
                });
                T(b)
            }
        }
        function Jl(a) {
            A(a, "sharing") && (y(a, "sharing"),
            a = K("comments-post-container", a),
            lc(a))
        }
        function Ll(a, b) {
            if (Il() && !Q(a, "voted")) {
                var c = Q(a, "id")
                  , d = L("VIDEO_ID")
                  , e = Q(a, "score")
                  , f = b ? 1 : -1;
                P(a, "voted", f + "");
                b ? z(a, "voted-down", "voted-up") : z(a, "voted-up", "voted-down");
                c = {
                    a: f,
                    id: c,
                    video_id: d,
                    old_vote: e
                };
                (d = Q(a, "tag")) && (c.tag = d);
                W("/comment_voting", {
                    format: "XML",
                    method: "POST",
                    n: c,
                    D: {
                        session_token: M("comment_voting")
                    }
                })
            }
        }
        function Ml(a) {
            var b = Q(a, "id")
              , c = L("VIDEO_ID");
            y(a, "has-child");
            x(a, "child");
            var d = H("parent-comment-loading");
            if (d) {
                var e = sd(d);
                a.parentNode && a.parentNode.insertBefore(e, a);
                T(e)
            }
            W("/comment_servlet?get_comment_parent=1", {
                format: "XML",
                method: "POST",
                D: {
                    comment_id: b,
                    entity_id: c,
                    session_token: M("comment_servlet")
                },
                j: function(b, c) {
                    var d = document.createElement("ul");
                    d.innerHTML = c.html_content;
                    a.parentNode && a.parentNode.insertBefore(mc(d), a);
                    lc(e)
                },
                B: function(b, c) {
                    x(a, "has-child");
                    y(a, "child");
                    lc(e);
                    c && c.error_message ? window.alert(c.error_message) : window.alert("Request failed, please try later.")
                }
            })
        }
        ;var Ol = m
          , Pl = m;
        function Ql(a, b, c) {
            Rl({
                $c: a,
                Zc: "WL",
                gc: b,
                j: c,
                B: i,
                A: i
            })
        }
        function Rl(a) {
            var b = {
                video_ids: a.$c,
                playlist_id: a.Ae || "",
                new_playlist_name: a.bd || "",
                session_token: M("addto_ajax")
            }
              , c = L("PLAYBACK_ID");
            c && (b.plid = c);
            c = {};
            a.ad && (c["private"] = a.ad);
            a.gc && (c.feature = a.gc);
            var d = "";
            switch (a.Zc) {
            case "PL":
                d = a.bd ? "action_add_to_new_playlist" : "action_add_to_playlist";
                break;
            case "FL":
                d = "action_add_to_favorites";
                break;
            case "WL":
                d = "action_add_to_watch_later_list"
            }
            c[d] = 1;
            W("/addto_ajax", {
                sb: k,
                format: "XML",
                method: "POST",
                n: c,
                D: b,
                A: a.A,
                B: a.B,
                j: a.j
            })
        }
        ;function Sl() {}
        aa(Sl);
        Sl.prototype.b = 0;
        Sl.getInstance();
        function Tl(a) {
            this.e = a || Vb()
        }
        u(Tl, Bh);
        n = Tl.prototype;
        n.Ef = Sl.getInstance();
        n.Bd = l;
        n.ra = m;
        n.Z = l;
        n.Ua = l;
        n.Tb = l;
        n.vb = l;
        n.Wc = m;
        n.getId = function() {
            return this.Bd || (this.Bd = ":" + (this.Ef.b++).toString(36))
        }
        ;
        n.z = function() {
            return this.Z
        }
        ;
        n.Dc = function(a) {
            this.Ua && this.Ua != a && h(Error("Method not supported"));
            Tl.P.Dc.call(this, a)
        }
        ;
        n.yd = function() {
            this.Z = this.e.b.createElement("div")
        }
        ;
        n.Sa = function(a) {
            this.ra && h(Error("Component already rendered"));
            this.Z || this.yd();
            a ? a.insertBefore(this.Z, l) : this.e.b.body.appendChild(this.Z);
            (!this.Ua || this.Ua.ra) && this.gb()
        }
        ;
        n.ec = function(a) {
            this.Z = a
        }
        ;
        n.gb = function() {
            this.ra = k;
            Ul(this, function(a) {
                !a.ra && a.z() && a.gb()
            })
        }
        ;
        n.rb = function() {
            Ul(this, function(a) {
                a.ra && a.rb()
            });
            this.i && Ji(this.i);
            this.ra = m
        }
        ;
        n.U = function() {
            Tl.P.U.call(this);
            this.ra && this.rb();
            this.i && (this.i.ma(),
            delete this.i);
            Ul(this, function(a) {
                a.ma()
            });
            !this.Wc && this.Z && lc(this.Z);
            this.Ua = this.Z = this.vb = this.Tb = l
        }
        ;
        function Ul(a, b) {
            a.Tb && w(a.Tb, b, i)
        }
        n.removeChild = function(a, b) {
            if (a) {
                var c = r(a) ? a : a.getId()
                  , a = this.vb && c ? (c in this.vb ? this.vb[c] : i) || l : l;
                if (c && a) {
                    var d = this.vb;
                    c in d && delete d[c];
                    Sa(this.Tb, a);
                    b && (a.rb(),
                    a.Z && lc(a.Z));
                    c = a;
                    c == l && h(Error("Unable to set parent component"));
                    c.Ua = l;
                    Tl.P.Dc.call(c, l)
                }
            }
            a || h(Error("Child is not in parent component"));
            return a
        }
        ;
        function Vl(a, b) {
            this.e = b || Vb();
            this.b = a || ""
        }
        u(Vl, Tl);
        Vl.prototype.c = l;
        var Wl = "placeholder"in document.createElement("input");
        n = Vl.prototype;
        n.ob = m;
        n.yd = function() {
            this.Z = this.e.Od("input", {
                type: "text"
            })
        }
        ;
        n.ec = function(a) {
            Vl.P.ec.call(this, a);
            this.b || (this.b = a.getAttribute("label") || "");
            var b;
            a: {
                var c = Xb(a);
                try {
                    b = c && c.activeElement;
                    break a
                } catch (d) {}
                b = l
            }
            b == a && (this.ob = k,
            y(this.z(), this.Nb));
            Wl ? this.z().placeholder = this.b : this.z().setAttribute("aria-label", this.b)
        }
        ;
        n.gb = function() {
            Vl.P.gb.call(this);
            var a = new Fi(this);
            Hi(a, this.z(), "focus", this.nd);
            Hi(a, this.z(), "blur", this.wf);
            Wl ? this.f = a : (Db && Hi(a, this.z(), ["keypress", "keydown", "keyup"], this.xf),
            Hi(a, Xb(this.z()) ? Xb(this.z()).parentWindow || Xb(this.z()).defaultView : window, "load", this.yf),
            this.f = a,
            Xl(this));
            Yl(this);
            this.z().b = this
        }
        ;
        n.rb = function() {
            Vl.P.rb.call(this);
            Zl(this);
            this.z().b = l
        }
        ;
        function Xl(a) {
            !a.Y && (a.f && a.z().form) && (Hi(a.f, a.z().form, "submit", a.mg),
            a.Y = k)
        }
        function Zl(a) {
            a.f && (a.f.ma(),
            a.f = l)
        }
        n.U = function() {
            Vl.P.U.call(this);
            Zl(this)
        }
        ;
        n.Nb = "label-input-label";
        n.nd = function() {
            this.ob = k;
            y(this.z(), this.Nb);
            if (!Wl && !$l(this) && !this.X) {
                var a = this
                  , b = function() {
                    a.z().value = ""
                };
                D ? Dh(b, 10) : b()
            }
        }
        ;
        n.wf = function() {
            Wl || (Ii(this.f, this.z(), "click", this.nd),
            this.c = l);
            this.ob = m;
            Yl(this)
        }
        ;
        n.xf = function(a) {
            27 == a.Id && ("keydown" == a.type ? this.c = this.z().value : "keypress" == a.type ? this.z().value = this.c : "keyup" == a.type && (this.c = l),
            a.preventDefault())
        }
        ;
        n.mg = function() {
            $l(this) || (this.z().value = "",
            Dh(this.wg, 10, this))
        }
        ;
        n.wg = function() {
            $l(this) || (this.z().value = this.b)
        }
        ;
        n.yf = function() {
            Yl(this)
        }
        ;
        function $l(a) {
            return !!a.z() && "" != a.z().value && a.z().value != a.b
        }
        n.clear = function() {
            this.z().value = "";
            this.c != l && (this.c = "")
        }
        ;
        n.getValue = function() {
            return this.c != l ? this.c : $l(this) ? this.z().value : ""
        }
        ;
        function Yl(a) {
            Wl ? a.z().placeholder != a.b && (a.z().placeholder = a.b) : (Xl(a),
            a.z().setAttribute("aria-label", a.b));
            $l(a) ? y(a.z(), a.Nb) : (!a.X && !a.ob && x(a.z(), a.Nb),
            Wl || Dh(a.Bf, 10, a))
        }
        n.Bf = function() {
            this.z() && (!$l(this) && !this.ob) && (this.z().value = this.b)
        }
        ;
        function am(a, b, c) {
            this.b = a;
            this.f = b;
            W("/playlist_ajax", {
                n: {
                    action_get_addto_panel: 1,
                    video_id: this.f
                },
                j: function(a, b) {
                    bm(this, b.html);
                    c()
                },
                A: this
            })
        }
        n = am.prototype;
        n.ma = function() {
            cm(this)
        }
        ;
        function bm(a, b) {
            a.b.innerHTML = b;
            a.pa = K("sort-playlists", a.b);
            a.e = K("playlist-items", a.b);
            a.Uc = K("added-to-message", a.b);
            a.Tc = K("added-to-message-title", a.b);
            a.ve = K("note-added-message", a.b);
            a.ue = K("note-added-message-title", a.b);
            a.o = K("create-playlist", a.b);
            if (a.o) {
                a.c = K("new-playlist-title", a.b);
                var c = a.c.getAttribute("placeholder")
                  , c = new Vl(c)
                  , d = a.c;
                c.ra && h(Error("Component already rendered"));
                if (d) {
                    c.Wc = k;
                    if (!c.e || c.e.b != Xb(d))
                        c.e = Vb(d);
                    c.ec(d);
                    c.gb()
                } else
                    h(Error("Invalid element to decorate"));
                a.Eb = K("create-new-playlist", a.b)
            }
            a.Be = R(a.pa, "change", s(a.De, a));
            a.X = R(a.o, "submit", s(a.He, a));
            a.G = Gd(a.b, "click", s(a.Fe, a), "playlist-item-favorite");
            a.O = Gd(a.b, "click", s(a.Ge, a), "playlist-item");
            a.oa = Gd(a.b, "click", s(a.Je, a), "save-note");
            a.Y = Gd(a.b, "click", s(a.Ee, a), "cancel-note");
            a.Ce = R(a.c, "keyup", s(a.Ie, a));
            Zk()
        }
        function cm(a) {
            S(a.Be);
            S(a.X);
            S(a.G);
            S(a.O);
            S(a.oa);
            S(a.Y);
            S(a.Ce)
        }
        n.De = function(a) {
            var a = {
                created: this.ng,
                privacy: this.og,
                "a-z": this.Pd,
                "z-a": this.pg
            }[a.currentTarget.value]
              , b = Ua(I("playlist-item", this.e))
              , c = K("playlist-item-favorite", this.e);
            b.push(c);
            dm(this, b.sort(s(a, this)))
        }
        ;
        function dm(a, b) {
            var c = document.createDocumentFragment();
            w(b, function(a) {
                c.appendChild(a)
            });
            kc(a.e);
            jc(a.e, c)
        }
        n.og = function(a, b) {
            var c = Q(a, "is-private") || ""
              , d = Q(b, "is-private") || "";
            return ra(c, d)
        }
        ;
        n.ng = function(a, b) {
            function c(a) {
                return md(a, "time-created") ? (a = Q(a, "time-created"),
                parseInt(a, 10)) : (new Date).getTime() / 1E3
            }
            return c(b) - c(a)
        }
        ;
        n.Pd = function(a, b) {
            var c = Q(a, "title") || ""
              , d = Q(b, "title") || "";
            return ra(c, d)
        }
        ;
        n.pg = function(a, b) {
            return this.Pd(b, a)
        }
        ;
        n.He = function(a) {
            a.preventDefault();
            a = K("create-playlist", this.b);
            pa(this.c.value) || em(this, a)
        }
        ;
        function em(a, b) {
            x(b, "loading");
            ng(b, {
                A: a,
                j: function(a, d) {
                    y(b, "loading");
                    d.html ? (cm(this),
                    bm(this, d.html)) : d.errors && fm(this, d.errors[0])
                }
            })
        }
        function fm(a, b) {
            var c = K("added-to-error-message", a.b);
            K("yt-alert-content", c).innerHTML = b;
            T(c)
        }
        n.Fe = function(a) {
            a.stopPropagation();
            gm(this, a.currentTarget)
        }
        ;
        function gm(a, b) {
            x(b, "loading");
            W("/addto_ajax", {
                method: "POST",
                format: "XML",
                n: {
                    action_add_to_favorites: 1
                },
                D: {
                    video_ids: a.f,
                    session_token: M("addto_ajax"),
                    plid: L("PLAYBACK_ID")
                },
                A: a,
                j: function() {
                    y(b, "loading");
                    this.Tc.innerHTML = Q(b, "title");
                    hm(this, this.Uc);
                    im(b)
                }
            })
        }
        n.Ge = function(a) {
            var b = a.currentTarget;
            A(b, "selected") || (a.stopPropagation(),
            jm(this),
            km(this, b))
        }
        ;
        function km(a, b) {
            var c = Q(b, "playlist-id")
              , d = H("playlist-addto-top-checkbox").checked ? "True" : "False";
            x(b, "loading");
            W("/addto_ajax", {
                method: "POST",
                format: "XML",
                n: {
                    action_add_to_playlist: 1
                },
                D: {
                    playlist_id: c,
                    video_ids: a.f,
                    session_token: M("addto_ajax"),
                    plid: L("PLAYBACK_ID"),
                    add_to_top: d
                },
                A: a,
                j: function(a, c) {
                    this.od = c.setvideo_id;
                    y(b, "loading");
                    x(b, "selected");
                    this.Tc.innerHTML = Q(b, "title");
                    hm(this, this.Uc);
                    im(b)
                }
            })
        }
        function im(a) {
            a = K("playlist-video-count", a);
            a.innerHTML = parseInt(a.innerHTML, 10) + 1
        }
        n.Je = function(a) {
            a.preventDefault();
            lm(this, yc(a.currentTarget, "playlist-note-form"))
        }
        ;
        n.Ee = function() {
            jm(this)
        }
        ;
        function lm(a, b) {
            x(b, "loading");
            ng(b, {
                D: {
                    session_token: M("playlist_bar_ajax"),
                    setvideo_id: a.od
                },
                A: a,
                j: function() {
                    jm(this);
                    y(b, "loading");
                    this.ue.innerHTML = K("playlist-name", b).value;
                    hm(this, this.ve)
                },
                B: function(a, d) {
                    y(b, "loading");
                    fm(this, d.errors[0])
                }
            })
        }
        function jm(a) {
            var b = K("selected", a.b);
            b && (y(b, "selected"),
            a.od = l)
        }
        function hm(a, b) {
            a.i && U(a.i);
            a.i = b;
            T(b)
        }
        n.Ie = function() {
            this.Eb.disabled = pa(this.c.value)
        }
        ;
        function mm(a, b, c, d, e, f, g) {
            this.k = a;
            this.o = b;
            this.jb = c;
            this.dc = d;
            this.b = !isNaN(parseInt(e, 10));
            this.Oa = l;
            this.b && (this.Oa = e);
            this.i = f || {};
            this.c = !!g;
            window.__GOOGLEAPIS = window.__GOOGLEAPIS || {};
            window.__GOOGLEAPIS.gwidget = window.__GOOGLEAPIS.gwidget || {};
            window.__GOOGLEAPIS.gwidget.lang = this.dc;
            this.b && (window.__GOOGLEAPIS["googleapis.config"] = window.__GOOGLEAPIS["googleapis.config"] || {},
            window.__GOOGLEAPIS["googleapis.config"].sessionIndex = this.Oa);
            Ag("", s(this.f, this))
        }
        mm.prototype.f = function() {
            var a = q("gapi.plusone.render");
            if (a) {
                var b = Math.floor(1E4 * Math.random())
                  , c = "__PLUS_ONE_CALLBACK_" + b
                  , d = this.k.id;
                d || (d = "plusone-button-" + b,
                this.k.id = d);
                window[c] = s(this.e, this);
                b = {
                    callbackName: c,
                    count: "false",
                    href: this.jb,
                    size: "medium",
                    source: "google:youtube"
                };
                this.c && (b.db = 1);
                rb(b, this.i);
                T(this.k);
                a(d, b)
            }
        }
        ;
        mm.prototype.e = function(a) {
            "off" != a.state && (Fg("PLUS_ONE", this.o + ""),
            this.c && Nh(Re("", {
                url: a.url,
                source: "google:youtube"
            }), {
                width: 480,
                height: 550
            }))
        }
        ;
        function nm(a, b) {
            var c = L("VIDEO_ID")
              , b = b || {};
            ug("watch_actions_ajax", s(om, p, c, a, b), b.B)
        }
        function om(a, b, c) {
            var d = {};
            0 === b ? d.action_like_video = 1 : 1 === b ? d.action_dislike_video = 1 : d.action_indifferent_video = 1;
            d.video_id = a;
            d.plid = c.bg;
            a = {
                screen: Ne({
                    h: screen.height,
                    w: screen.width,
                    d: screen.colorDepth
                }),
                session_token: M("watch_actions_ajax")
            };
            c.Md && (a.station_id = c.Md);
            W("/watch_actions_ajax", {
                format: "XML",
                method: "POST",
                n: d,
                D: a,
                j: c.j,
                B: c.B,
                S: c.S
            });
            0 === b ? Qh("like") : 1 === b && Qh("dislike")
        }
        ;function pm(a, b) {
            this.start = a;
            this.end = b;
            qm++
        }
        var qm = 0;
        pm.prototype.contains = function(a, b) {
            return a >= this.start && a < this.end && (b == l || a < b && b <= this.end)
        }
        ;
        new pm(0,0);
        var rm = ["left", "right", "center"]
          , sm = {
            id: 0,
            de: 0,
            mf: 7,
            pf: 50,
            dj: 80,
            rf: 95,
            qf: 15,
            nf: 100,
            isVisible: k,
            textAlign: rm[2],
            md: 0,
            backgroundColor: "#080808",
            of: "#fff",
            opacity: 0.8
        };
        function tm(a) {
            this.b = a.oc;
            this.ha = a.ha || this.ha
        }
        tm.prototype.b = 0;
        tm.prototype.ha = 0;
        tm.prototype.toString = function() {
            return this.b + ", " + this.ha
        }
        ;
        function um(a) {
            tm.call(this, a);
            this.mb = a.text || this.mb;
            this.nc = a.mc || this.nc;
            this.$d = a.params.append || this.$d;
            this.be = a.params.row || this.be;
            this.ae = a.params.vg || this.ae
        }
        u(um, tm);
        n = um.prototype;
        n.mb = "";
        n.$d = m;
        n.be = 0;
        n.ae = 0;
        n.nc = 0;
        n.toString = function() {
            return this.b + ", " + this.ha + ": " + this.mb
        }
        ;
        function vm(a) {
            var b = a.firstChild && a.firstChild.nodeValue || ""
              , c = 1E3 * parseFloat(a.getAttribute("start") || 0);
            a.getAttribute("t") && (c = parseInt(a.getAttribute("t"), 10));
            var d = 1E3 * parseFloat(a.getAttribute("dur") || 0);
            a.getAttribute("d") && (d = parseFloat(a.getAttribute("d")));
            var e = parseInt(a.getAttribute("w"), 10) || 0
              , b = {
                oc: c,
                ha: d,
                text: b,
                mc: e,
                de: 5,
                params: {}
            };
            a.getAttribute("r") && (b.params.row = parseInt(a.getAttribute("r"), 10));
            a.getAttribute("c") && (b.params.vg = parseInt(a.getAttribute("c"), 10));
            a.getAttribute("append") && (b.de = 6,
            b.params.append = k);
            return new um(b)
        }
        function wm(a) {
            tm.call(this, a);
            this.id = a.mc || this.id;
            this.params = a.params
        }
        u(wm, tm);
        wm.prototype.id = 0;
        wm.prototype.params = l;
        wm.prototype.c = "";
        function xm() {
            return new wm({
                oc: -2147483648,
                ha: 4294967295,
                params: sm
            })
        }
        ;function ym(a) {
            this.c = [];
            this.e = [];
            this.b = {};
            if (a) {
                var b;
                if ("undefined" != typeof DOMParser)
                    b = (new DOMParser).parseFromString(a, "application/xml");
                else if ("undefined" != typeof ActiveXObject) {
                    if (b = new ActiveXObject("MSXML2.DOMDocument")) {
                        b.resolveExternals = m;
                        b.validateOnParse = m;
                        try {
                            b.setProperty("ProhibitDTD", k),
                            b.setProperty("MaxXMLSize", 2048),
                            b.setProperty("MaxElementDepth", 256)
                        } catch (c) {}
                    }
                    b.loadXML(a)
                } else
                    h(Error("Your browser does not support loading xml documents"));
                if (b && b.firstChild)
                    switch (this.Ea = b,
                    this.Ea.firstChild.tagName) {
                    case "timedtext":
                        a = this.Ea.firstChild.childNodes;
                        b = 0;
                        for (var d = a.length; b < d; b++)
                            switch (a[b].tagName) {
                            case "window":
                                var e = a[b]
                                  , f = parseInt(e.getAttribute("id"), 10)
                                  , g = i;
                                a: {
                                    var j = this.b[f];
                                    if (!e.getAttribute("t") && !e.getAttribute("start"))
                                        g = l;
                                    else {
                                        g = parseInt(e.getAttribute("t"), 10);
                                        e.getAttribute("start") && (g = 1E3 * parseFloat(e.getAttribute("start")));
                                        j && (j.b + j.ha >= g ? j.ha = g : j = l);
                                        switch (e.getAttribute("op")) {
                                        case "kill":
                                            g = l;
                                            break a;
                                        case "define":
                                            j = l
                                        }
                                        j ? j.e = k : j = xm();
                                        var o = {}
                                          , j = j ? j.params : sm
                                          , v = i;
                                        for (v in j)
                                            o[v] = j[v];
                                        e.getAttribute("id") && (o.id = e.getAttribute("id"));
                                        e.getAttribute("op") && (o.gh = e.getAttribute("op"));
                                        e.getAttribute("rc") && (o.qf = parseInt(e.getAttribute("rc"), 10));
                                        e.getAttribute("cc") && (o.nf = parseInt(e.getAttribute("cc"), 10));
                                        e.getAttribute("ap") && (j = parseInt(e.getAttribute("ap"), 10),
                                        o.mf = 0 > j || 8 < j ? 7 : j);
                                        e.getAttribute("ah") && (o.pf = parseInt(e.getAttribute("ah"), 10));
                                        e.getAttribute("av") && (o.rf = parseInt(e.getAttribute("av"), 10));
                                        e.getAttribute("id") && (o.id = parseInt(e.getAttribute("id"), 10) || 0);
                                        e.getAttribute("vs") && (o.isVisible = Boolean(e.getAttribute("vs")));
                                        e.getAttribute("ju") && (o.textAlign = rm[parseInt(e.getAttribute("ju"), 10)]);
                                        e.getAttribute("pd") && (o.md = 1,
                                        0 == parseInt(e.getAttribute("pd"), 10) && (o.md = 0));
                                        e.getAttribute("bc") && (o.backgroundColor = parseInt(e.getAttribute("bc"), 16));
                                        e.getAttribute("bo") && (o.opacity = parseInt(e.getAttribute("bo"), 10) / 100);
                                        e.getAttribute("fc") && (o.of = parseInt(e.getAttribute("fc"), 16));
                                        e.getAttribute("sd") && (o.hh = parseInt(e.getAttribute("sd"), 10));
                                        j = parseInt(e.getAttribute("d"), 10) || 1E3 * parseFloat(e.getAttribute("dur")) || 2147483647;
                                        e = {
                                            oc: g,
                                            ha: j,
                                            params: o,
                                            mc: parseInt(e.getAttribute("id"), 10)
                                        };
                                        g = new wm(e)
                                    }
                                }
                                this.b[f] = g;
                                this.e.push(g);
                                break;
                            case "text":
                                f = vm(a[b]),
                                this.c.push(f),
                                e = f.nc,
                                this.b[e] && (e = this.b[e],
                                e.c += f.mb)
                            }
                        break;
                    default:
                        this.e.push(xm());
                        a = this.Ea.firstChild.childNodes;
                        b = 0;
                        for (d = a.length; b < d; b++)
                            this.c.push(vm(a[b]))
                    }
            }
        }
        ym.prototype.c = l;
        ym.prototype.e = l;
        ym.prototype.b = l;
        function zm(a) {
            a = a || {};
            this.qd = a.format;
            this.c = a.languageCode || "";
            this.rd = a.languageName;
            this.Ha = a.kind;
            this.qb = a.name;
            this.Jd = a.is_default
        }
        n = zm.prototype;
        n.rd = l;
        n.Ha = l;
        n.qb = l;
        n.Jd = m;
        n.qd = 1;
        function Am(a) {
            var b = [a.rd];
            if (a.Ha) {
                var c = "asr" == a.Ha ? O("HTML5_SUBS_TRANSCRIBED") : a.Ha;
                b.push(" (", c, ")")
            }
            a.qb && b.push(" - ", a.qb);
            a.b && b.push(" >> ", a.b.b);
            return b.join("")
        }
        n.toString = function() {
            var a = [this.c, ": ", this.qb, " (", this.Ha, ")"];
            this.b && a.push(" >> ", this.b.b);
            return a.join("")
        }
        ;
        function Bm(a) {
            this.c = a.languageCode;
            this.b = a.languageName;
            this.id = a.id
        }
        Bm.prototype.c = l;
        Bm.prototype.b = l;
        Bm.prototype.id = l;
        function Cm(a) {
            this.Fc = [];
            this.Ud = [];
            this.Za = [];
            if (a && a.firstChild) {
                this.Ea = a;
                for (var a = this.Ea.getElementsByTagName("track"), b = a.length, c = 0; c < b; c++) {
                    var d = parseInt(a[c].getAttribute("formats"), 10) || 1
                      , e = a[c].getAttribute("lang_code")
                      , f = a[c].getAttribute("lang_translated")
                      , g = a[c].getAttribute("name")
                      , j = a[c].getAttribute("kind") || ""
                      , o = a[c].getAttribute("id")
                      , v = "true" == a[c].getAttribute("lang_default")
                      , E = "true" == a[c].getAttribute("cantran")
                      , d = new zm({
                        format: d,
                        languageCode: e,
                        languageName: f,
                        name: g,
                        kind: j,
                        id: o,
                        is_servable: k,
                        is_default: v,
                        is_translateable: E
                    });
                    switch (d.Ha) {
                    case "asr":
                        this.Fc.push(d);
                        break;
                    default:
                        if (d.Jd || 0 > this.Gc)
                            this.Gc = this.Za.length;
                        this.Za.push(d)
                    }
                }
                a = this.Ea.getElementsByTagName("target");
                b = a.length;
                for (c = 0; c < b; c++)
                    d = a[c].getAttribute("lang_code"),
                    e = a[c].getAttribute("lang_translated"),
                    f = a[c].getAttribute("lang_original"),
                    g = a[c].getAttribute("id"),
                    j = "true" == a[c].getAttribute("lang_default"),
                    this.Ud.push(new Bm({
                        languageCode: d,
                        languageName: e,
                        languageOriginal: f,
                        id: g,
                        is_default: j
                    }))
            }
        }
        n = Cm.prototype;
        n.Ea = l;
        n.Fc = l;
        n.Ud = l;
        n.Za = l;
        n.Gc = -1;
        function Dm(a, b, c, d) {
            this.b = a;
            c ? this.b = Te(this.b, {
                hl: c
            }) : (a = Pe(this.b).hl || "",
            a = a.split("_").join("-"),
            this.b = Te(this.b, {
                hl: a
            }));
            this.c = b;
            this.e = !!d
        }
        Dm.prototype.b = "";
        Dm.prototype.c = l;
        Dm.prototype.e = m;
        Dm.prototype.Ta = l;
        function Em(a, b) {
            var c = a.Ta.Gc
              , d = a.Ta.Za;
            0 > c || Fm(a, d[c], b)
        }
        function Gm(a, b) {
            return Na(a.Ta.Za.concat(a.Ta.Fc), function(a) {
                return a.toString() == b
            })
        }
        function Fm(a, b, c) {
            var d = a.b
              , e = {
                v: a.c,
                type: "track",
                lang: b.c,
                name: b.qb,
                kind: b.Ha,
                fmt: b.qd
            };
            b.b && (e.tlang = b.b.c);
            d = Te(d, e);
            a = s(function(a) {
                a = new ym(a.responseText);
                c(a, b)
            }, a);
            lg(d, a)
        }
        function Hm(a, b) {
            var c = a.b
              , d = {
                type: "list",
                tlangs: 1,
                v: a.c,
                fmts: Number(m)
            };
            a.e && (d.asrs = 1);
            c = Te(c, d);
            d = s(function(a) {
                this.Ta = new Cm(a.responseXML);
                b()
            }, a);
            lg(c, d)
        }
        ;var Im = l;
        function Jm(a) {
            Im || (Im = new Km);
            Im.init(a)
        }
        function Km() {}
        n = Km.prototype;
        n.zb = l;
        n.pd = l;
        n.qc = -1;
        n.pc = m;
        n.td = 0;
        n.Rc = 0;
        n.init = function(a) {
            if (this.zb)
                a();
            else if ("true" != Q(H("watch-captions-container"), "disabled")) {
                var b = new Dm(L("TTS_URL"),L("VIDEO_ID"));
                Hm(b, s(function() {
                    Lm(this);
                    a()
                }, this));
                this.zb = b
            }
        }
        ;
        function Lm(a) {
            var b = a.zb
              , c = a.zb.Ta.Za
              , d = c.length;
            if (0 >= d)
                T("watch-captions-not-found");
            else {
                var e = H("watch-captions-container");
                if (1 < d) {
                    var f = document.createElement("select");
                    f.id = "watch-captions-track-selector";
                    for (var g = 0; g < d; ++g) {
                        var j = c[g]
                          , o = document.createElement("option")
                          , v = hc(Am(j));
                        o.appendChild(v);
                        o.value = j.toString();
                        f.appendChild(o)
                    }
                    R(f, "change", s(function() {
                        var a = this.zb
                          , b = s(this.ce, this)
                          , c = Gm(a, f.value);
                        c && Fm(a, c, b)
                    }, a));
                    e.appendChild(f)
                }
                c = document.createElement("div");
                c.id = "captions-scrollbox";
                R(c, "mouseover", function() {
                    this.pc = k
                });
                R(c, "mouseout", function() {
                    this.pc = m
                });
                e.appendChild(c);
                Em(b, s(a.ce, a))
            }
        }
        n.ce = function(a, b) {
            var c = a.c;
            this.qc = -1;
            this.pd = a;
            gd(this.td);
            var d = H("captions-scrollbox");
            d.innerHTML = "";
            var e = H("watch-captions-track-selector");
            if (e) {
                e.selectedIndex = -1;
                for (var f = b.toString(), g = 0, j = e.length; g < j; ++g)
                    if (e[g].value == f) {
                        e.options[g].selected = k;
                        break
                    }
            }
            g = 0;
            for (j = c.length; g < j; ++g) {
                var e = c[g]
                  , f = document.createElement("div")
                  , o = e.b / 1E3;
                f.id = "cp-" + g;
                f.className = "cpline";
                P(f, "time", o + "");
                f.onmousedown = function(a) {
                    Nj().seekTo(parseInt(Q(this, "time"), 10), k);
                    return Kd(a)
                }
                ;
                d.appendChild(f);
                var v = document.createElement("div");
                v.className = "cptime";
                v.innerHTML = Math.floor(o / 60) + ":" + (10 > o % 60 ? "0" : "") + Math.floor(o % 60);
                f.appendChild(v);
                o = document.createElement("div");
                o.className = "cptext";
                o.innerHTML = e.mb;
                f.appendChild(o)
            }
            this.td = ed(s(this.tf, this), 500)
        }
        ;
        n.tf = function() {
            for (var a = Nj().getCurrentTime(), b = this.pd.c, c = this.qc, d = c; ; ) {
                var e = 0 <= d ? b[d].b / 1E3 : -1;
                if (a + 0.5 < e)
                    d -= 1;
                else if (e = d + 1 < b.length ? b[d + 1].b / 1E3 : 1E6,
                a + 0.5 > e)
                    d += 1;
                else
                    break
            }
            d != c && (0 <= c && (a = H("cp-" + c),
            y(a, "cpline-highlight")),
            0 <= d && (a = H("cp-" + d),
            x(a, "cpline-highlight")),
            this.qc = d,
            this.pc || Mm(this, H("cp-" + (3 <= d ? d - 3 : 0))))
        }
        ;
        function Mm(a, b) {
            gd(a.Rc);
            var c = H("captions-scrollbox")
              , d = Math.min(b.offsetTop - c.offsetTop, c.scrollHeight - c.offsetHeight)
              , e = 0;
            a.Rc = ed(function() {
                var a = d - c.scrollTop
                  , b = Math.round(100 * a / (1E3 - 50 * e));
                Math.abs(a) <= Math.abs(b) || 20 < e ? (c.scrollTop = d,
                gd(this.Rc)) : (c.scrollTop += b,
                e++)
            }, 50)
        }
        ;function Nm(a, b) {
            var c = H("flag-video-form")
              , d = H("flag-video-menu");
            c && d && new Om(c,d,a,b)
        }
        function Om(a, b, c, d) {
            this.r = a;
            this.K = b;
            R(this.r, "submit", s(this.c, this));
            Ed(this.K, s(this.b, this));
            R(H("flag-video-cancel"), "click", function(a) {
                a.preventDefault();
                c()
            });
            this.Hb = d
        }
        Om.prototype.b = function(a) {
            var b;
            b = a.currentTarget;
            var c = Pm(this, b)
              , a = Q(b, "show-textbox-with-label")
              , d = !!Q(b, "include-time")
              , e = !!Q(b, "show-hate-group")
              , f = Q(b, "popup-url")
              , g = Q(b, "result-message") || "default";
            b = !!Q(b, "no-post");
            var j = c.ug;
            this.r.reason.value = c.reason;
            this.r.sub_reason.value = j;
            c = H("flag-video-more-info-comment");
            a && (H("flag-video-more-info-textarea-label").innerHTML = a);
            ze(c, !!a);
            ze(H("flag-video-more-info-time"), d);
            ze(H("flag-video-more-info-hate-group"), e);
            f && Nh(f, {
                target: "atmfc",
                width: 900,
                height: 700,
                left: 0,
                top: 0,
                status: "yes",
                toolbar: "no",
                menubar: "no",
                location: "no"
            });
            b ? (U(this.r),
            Qm(g)) : (P(this.r, "result-message", g),
            T(this.r))
        }
        ;
        function Pm(a, b) {
            var c = Sg.getInstance()
              , d = $g(c, a.K);
            Xg(c, d);
            c = K(Y(c, "content"), d);
            d = K("label", b);
            c.innerHTML = uc(d);
            c = I("selected", a.K);
            w(c, function(a) {
                y(a, "selected", "child-selected")
            });
            x(b, "selected");
            c = "";
            if (d = Q(b, "subreason") || "") {
                var e = wc(b.parentNode, "li")
                  , c = Q(e, "reason") || "";
                x(e, "selected", "child-selected")
            } else
                c = Q(b, "reason") || "";
            return {
                reason: c,
                ug: d
            }
        }
        Om.prototype.c = function(a) {
            a.preventDefault();
            var b = H("flag-video-submit");
            b.disabled = k;
            var c = Q(this.r, "result-message");
            W(this.r.action, {
                format: "XML",
                method: "POST",
                Ia: Nc(this.r),
                j: function() {
                    Qm(c);
                    this.Hb.call(p)
                },
                B: function(a, c) {
                    Rm();
                    var f = H("flag-video-error");
                    c && c.error_message && (K("yt-alert-content", f).innerHTML = c.error_message);
                    T(f);
                    b.disabled = m
                },
                A: this
            })
        }
        ;
        function Qm(a) {
            Rm();
            U("flag-video-form-container");
            T("flag-video-result-" + a)
        }
        function Rm() {
            var a = I("flag-video-result", H("flag-video-results-container"));
            w(a, function(a) {
                U(a)
            })
        }
        ;var dk, Sm;
        function Tm() {
            var a, b;
            if (L("IN_SIGNED_OUT_ACTION_PROMO_1") || L("IN_SIGNED_OUT_ACTION_PROMO_2"))
                b = Um("watch-actions-promo-area"),
                a = I("yt-uix-promo-button", b)[0],
                b = I("yt-uix-button-alert-link", b)[0];
            else {
                a = Um("watch-actions-logged-out");
                a = J("STRONG", l, a);
                if (1 != a.length)
                    return;
                b = J("A", l, a[0]);
                if (2 != b.length)
                    return;
                a = b[0];
                b = b[1]
            }
            R(a, "mousedown", function() {
                X("action-bar-sign-in", i, i)
            });
            R(b, "mousedown", function() {
                X("action-bar-sign-up", i, i)
            })
        }
        function Vm() {
            var a = H("watch-like-unlike");
            return A(a, "liked") ? 0 : A(a, "unliked") ? 1 : 2
        }
        function Wm(a) {
            var b = H("watch-like-unlike")
              , b = I(Y(Sg.getInstance()), b);
            w(b, function(b) {
                b.disabled = !a
            })
        }
        function Xm(a, b) {
            if (!L("LOGGED_IN")) {
                var c = "rating-enabled=" + L("ALLOW_RATINGS");
                0 === a ? X("logged-out-like", c, i) : 1 === a && X("logged-out-dislike", c, i)
            }
            if (L("ALLOW_RATINGS")) {
                if (c = !Ym(b))
                    L("YPC_CAN_RATE_VIDEO") ? c = m : (Zm("watch-actions-rental-required"),
                    c = k),
                    c = !c;
                c && (L("YPC_SHOW_VPPA_CONFIRM_RATING") && !confirm(O("VPPA_CONFIRM")) ? $m() : (2 !== a && an(),
                Wm(m),
                nm(a, {
                    bg: L("PLAYBACK_ID"),
                    Md: L("STATION_ID"),
                    j: function(b, c) {
                        var f = H("watch-like-unlike");
                        0 === a ? z(f, "unliked", "liked") : 1 === a ? z(f, "liked", "unliked") : y(f, "liked", "unliked");
                        2 !== a && (bn(c.html_content),
                        Ci(H("watch-actions-ajax")))
                    },
                    B: cn,
                    S: function() {
                        Wm(k)
                    }
                })))
            } else
                Zm("watch-actions-ratings-disabled")
        }
        function dn(a, b) {
            var c = a || H("watch-flag");
            if (en(c) && !Ym(c)) {
                an();
                var d = 0
                  , e = Nj();
                e && e.pauseVideo && (e.pauseVideo(),
                d = e.getCurrentTime());
                d = Math.floor(d);
                e = Math.floor(d / 60);
                d = {
                    action_get_flag_video_component: 1,
                    video_id: L("VIDEO_ID"),
                    t_mins: e,
                    t_secs: d - 60 * e
                };
                b && (d.from_dislike = 1);
                W("/watch_ajax", {
                    format: "XML",
                    method: "GET",
                    n: d,
                    j: function(a, b) {
                        bn(b.html_content);
                        Nm(function() {
                            $m()
                        }, function() {
                            c.disabled = k
                        })
                    },
                    B: cn
                })
            }
        }
        var fn = l
          , gn = l;
        function hn() {
            if (Cj())
                var a = Um("watch-actions-share")
                  , a = K("yt-uix-button-toggled", a)
                  , a = Q(a, "video-id");
            else
                a = L("VIDEO_ID");
            return a
        }
        function jn() {
            var a = l;
            Cj() && H("share-with-playlist").checked && (a = yj ? wj().Fa() : l);
            return a
        }
        function kn(a, b) {
            if (en(a)) {
                var c = hn()
                  , d = jn();
                ln(c, d, b)
            }
        }
        function ln(a, b, c) {
            var d = Um("watch-actions-share-panel");
            a != fn || b != gn ? (fn = a,
            gn = b,
            Zm("watch-actions-share"),
            T("watch-actions-share-loading"),
            U("watch-actions-share-panel"),
            dk = new Zj(d,a,b,function() {
                U("watch-actions-share-loading");
                Zm("watch-actions-share-panel")
            }
            )) : (Zm("watch-actions-share"),
            Zm("watch-actions-share-panel"),
            dk.qa());
            c ? X("shareOpenedFromFlash", i, i) : X("shareOpenedFromActionBar", i, i);
            var e = Nj()
              , f = ed(function() {
                var a = A(H("watch-share"), "active");
                if (!e || !a)
                    gd(f);
                else {
                    for (var a = [], b = Math.floor(e.getCurrentTime()); b > 0; ) {
                        a.unshift(b % 60);
                        b = Math.floor(b / 60)
                    }
                    for (; a.length < 2; )
                        a.unshift(0);
                    a = Ma(a, function(a, b) {
                        return b > 0 && a < 10 ? "0" + a : a
                    });
                    ck(a.join(":"))
                }
            }, 1E3);
            Qh("share")
        }
        function en(a) {
            var b = !A(a, "active");
            $m();
            b && (x(a, "active"),
            Gh(Eh.getInstance(), a));
            return b
        }
        function an() {
            Zm("watch-actions-loading")
        }
        function bn(a) {
            Um("watch-actions-ajax").innerHTML = a;
            Zm("watch-actions-ajax")
        }
        function cn(a, b) {
            var c = b && b.error_message;
            c || (c = O("WATCH_ERROR_MESSAGE"));
            Um("watch-error-string").innerHTML = c;
            Zm("watch-actions-error")
        }
        var mn = {};
        function Um(a) {
            a in mn || (mn[a] = H(a));
            return mn[a]
        }
        function Zm(a) {
            var b = Um("watch-actions-area-container")
              , a = Um(a)
              , c = Um("watch-actions-loading")
              , d = Um("watch-actions-area");
            Ae(b) || (b.style.height = "0px",
            T(b));
            U(c);
            T(a);
            x(b, "transitioning");
            var e = d.offsetHeight + "px";
            N(function() {
                b.style.height = e
            }, 0);
            N(function() {
                if (b.style.height == e) {
                    y(b, "transitioning");
                    b.style.height = "auto"
                }
            }, 500)
        }
        function $m() {
            var a = Um("watch-actions-area-container");
            U(a);
            a = I("watch-actions-panel", a);
            w(a, function(a) {
                U(a)
            });
            Um("watch-actions-ajax").innerHTML = "";
            var a = Um("watch-actions")
              , b = Um("watch-subactions")
              , a = J("button", l, a);
            b && (b = J("button", l, b),
            Va(Ua(a), Ua(b)));
            w(a, function(a) {
                y(a, "active")
            })
        }
        function Ym(a) {
            return !L("LOGGED_IN") ? (L("IN_SIGNED_OUT_ACTION_PROMO_1") ? (T("watch-actions-promo-area"),
            a.disabled = k) : L("IN_SIGNED_OUT_ACTION_PROMO_2") ? T("watch-actions-promo-area") : Zm("watch-actions-logged-out"),
            k) : m
        }
        ;var nn, on, pn;
        function qn(a) {
            this.b = a;
            this.K = H("shared-addto-menu");
            this.e = Q(this.b, "feature") || "";
            this.i = A(this.b, "watch");
            this.f = Q(this.b, "video-ids") || "";
            this.J = this.f.split(",");
            ca(pn) || (pn = A(this.K, "lightweight-panel"));
            (a = K("sign-in", this.K)) ? R(a, "click", s(this.sf, this)) : rn(this)
        }
        function rn(a) {
            var b = {
                action_get_dropdown: "1"
            };
            a.e && (b.feature = a.e);
            W("/addto_ajax", {
                sb: k,
                format: "XML",
                method: "GET",
                A: a,
                n: b,
                j: function(a, b) {
                    this.K.innerHTML = b.html_content || "";
                    B(this.K, "ie", D);
                    this.Ja();
                    sn(this)
                }
            })
        }
        n = qn.prototype;
        n.Ja = function() {
            this.l = {};
            this.l.list = H("addto-list-panel");
            this.l.sc = H("addto-list-saved-panel");
            this.l.Ob = H("addto-list-error-panel");
            this.l.ua = H("addto-note-input-panel");
            this.l.ud = H("addto-note-saving-panel");
            this.l.Dd = H("addto-note-saved-panel");
            this.l.vc = H("addto-note-error-panel");
            this.l.la = H("addto-create-panel");
            this.c = this.l.list;
            Gd(this.l.list, "click", s(this.Rf, this), "yt-uix-button-menu-item");
            this.Fb = K("playlist-save-note", this.l.ua);
            R(this.Fb, "click", s(this.Sf, this));
            var a = K("close-button", this.K);
            R(a, "click", s(this.Qf, this))
        }
        ;
        function sn(a) {
            a = I("playlist-name", a.l.list);
            w(a, function(a) {
                var c = H(a)
                  , d = vd(c)
                  , e = c.innerHTML != d;
                c.innerHTML = d;
                e && (a = yc(a, "yt-uix-button-menu-item"),
                a.title = Q(a, "possible-tooltip"))
            })
        }
        n.Rf = function(a) {
            a.stopPropagation();
            var b = a.currentTarget;
            Gh(Eh.getInstance(), b);
            this.G = m;
            var c = a = l
              , d = ""
              , e = Q(b, "list-action");
            e && ("create-playlist" == e ? tn(this) : ("favorites" == e ? (this.G = k,
            c = "FL",
            d = b.innerHTML) : "watch-later" == e ? (c = "WL",
            d = b.innerHTML) : (c = "PL",
            a = e,
            b = K("playlist-name", b),
            d = Q(b, "original-html")),
            un(this, c, a),
            "watch-later" == e || "favorites" == e || 1 < this.J.length) ? (K("addto-title", this.l.sc).innerHTML = d,
            y(this.K, "lightweight-panel"),
            vn(this, this.l.sc, k),
            a = K("close-note", this.K),
            T(a)) : wn(this, d))
        }
        ;
        function wn(a, b) {
            K("addto-title", a.l.ua).innerHTML = sa(b);
            vn(a, a.l.ua, k);
            var c = K("close-note", a.K);
            T(c);
            var d = H("addto-note");
            R(d, "keydown", s(a.Sd, a));
            R(d, "paste", s(a.Sd, a));
            xn(a.l.ua, function() {
                d.focus()
            })
        }
        function xn(a, b) {
            if (b) {
                var c = Eb ? "webkitTransitionEnd" : Cb ? "oTransitionEnd" : Db ? "transitionend" : D && G(10) ? "MSTransitionEnd" : l;
                c ? Dd(a, c, function() {
                    b()
                }) : b()
            }
        }
        n.Sd = function(a) {
            var b = a.target
              , c = K("addto-note-label", this.l.ua);
            N(s(function() {
                var a = pa(b.value);
                a ? T(c) : U(c);
                !a && this.R && this.kc ? ud(this.Fb, k) : ud(this.Fb, m)
            }, this), 0)
        }
        ;
        function vn(a, b, c) {
            var c = c ? "slide" : "fade"
              , d = ["fade", "slide"];
            z(a.c, d, c);
            z(b, d, c);
            pn && b == a.l.list && x(a.K, "lightweight-panel");
            A(b, "dismissed-panel") ? (y(b, "dismissed-panel"),
            y(a.c, "active-panel")) : fb(a.c, "active-panel", "dismissed-panel");
            x(b, "active-panel");
            a.c = b
        }
        function tn(a) {
            vn(a, a.l.la, k);
            yn(a);
            ld(a.K, "video-ids");
            var b = H("addto-create-playlist");
            R(b, "keydown", s(a.Ac, a));
            R(b, "paste", s(a.Ac, a));
            xn(a.l.la, function() {
                b.focus()
            });
            var c = K("addto-create-cancel-button", a.l.la);
            R(c, "click", s(function() {
                zn(this)
            }, a));
            c = K("create-playlist-button", a.l.la);
            R(c, "click", s(a.tg, a))
        }
        function yn(a) {
            a.Qd = K("addto-create-playlist", a.l.la);
            a.Rd = K("addto-create-playlist-label", a.l.la);
            a.Eb = K("create-playlist-button", a.l.la);
            a.zc = K("privacy-form", a.l.la);
            Gd(a.zc, "click", s(a.Ac, a), "playlist-privacy-option")
        }
        n.tg = function() {
            var a = this.Qd.value;
            this.ag = k;
            var b = parseInt(Qc(this.zc), 10);
            un(this, "PL", l, a, b);
            1 < this.J.length ? zn(this) : wn(this, a)
        }
        ;
        n.Ac = function() {
            N(s(function() {
                var a = pa(this.Qd.value);
                a ? T(this.Rd) : U(this.Rd);
                var b = Qc(this.zc);
                a || !b ? ud(this.Eb, m) : ud(this.Eb, k)
            }, this), 0)
        }
        ;
        n.Qf = function() {
            zn(this)
        }
        ;
        function zn(a) {
            var b = Sg.getInstance()
              , c = $g(b, a.K);
            c && Q(c, "video-ids") == a.f && Xg(b, c)
        }
        function un(a, b, c, d, e) {
            a.o = b;
            Rl({
                $c: a.f,
                Zc: a.o,
                Ae: c,
                bd: d,
                ad: e,
                gc: a.e,
                j: a.Se,
                B: a.Re,
                A: a
            });
            ld(a.K, "video-ids");
            b = "";
            switch (a.o) {
            case "PL":
                b = d ? "new_pl" : "pl";
                break;
            case "FL":
                b = "fav";
                break;
            case "WL":
                b = "wl"
            }
            d = {
                list: b,
                feature: a.e
            };
            if ((b = wc(a.b, "a", l)) && b.href)
                b = Pe(b.href),
                d.link_feature = b.feature || "";
            d = Ne(d);
            X("addto", d, i);
            a.i && Qh("add_to_playlist")
        }
        n.Se = function(a, b) {
            this.R = b.list_id || "";
            this.kc = b.setvideo_id || "";
            var c = b.html_content || ""
              , d = b.list_url || "";
            if (this.R && this.kc) {
                var e = K("addto-title", this.K)
                  , f = document.createElement("a");
                f.href = d;
                f.innerHTML = e.innerHTML;
                kc(e);
                e.appendChild(f);
                pa(H("addto-note").value) || ud(this.Fb, k)
            }
            if (!this.i && (d = yc(this.b, "ux-thumb-wrap")))
                (e = K("video-in-quicklist", d)) && lc(e),
                e = document.createElement("span"),
                e.className = "video-in-quicklist",
                e.innerHTML = c,
                d.appendChild(e);
            c = O("PLAYLIST_BAR_ADDED_TO_PLAYLIST");
            this.G && (c = O("PLAYLIST_BAR_ADDED_TO_FAVORITES"));
            Aj(this.o, this.R, this.J, c)
        }
        ;
        n.Re = function(a, b) {
            var c = b && b.error_message;
            if (c) {
                K("error-details", this.l.Ob).innerHTML = c;
                var c = K("show-menu-link", this.l.Ob)
                  , d = R(c, "click", s(function(a) {
                    a.preventDefault();
                    S(d);
                    y(this.l.ua, "dismissed-panel", "fade", "slide");
                    y(this.l.sc, "dismissed-panel", "fade", "slide");
                    a = K("close-note", this.K);
                    U(a);
                    this.ag ? vn(this, this.l.la, k) : vn(this, this.l.list, k)
                }, this));
                if (c = H("addto-create-name"))
                    c.disabled = m;
                y(this.l.Ob, "dismissed-panel", "fade", "slide");
                vn(this, this.l.Ob)
            } else
                zn(this);
            this.i && cn(0, b)
        }
        ;
        n.Sf = function() {
            W("/playlist_bar_ajax", {
                method: "POST",
                sb: k,
                n: {
                    action_set_playlist_item_annotation: 1
                },
                D: {
                    annotation: H("addto-note").value,
                    playlist_id: this.R,
                    setvideo_id: this.kc,
                    session_token: M("playlist_bar_ajax")
                },
                j: this.Vf,
                B: this.Uf,
                A: this
            });
            vn(this, this.l.ud)
        }
        ;
        n.Vf = function() {
            var a = K("addto-title", this.l.ua)
              , b = rd(a);
            x(b, "yt-uix-tooltip-reverse");
            K("panel-content", this.l.Dd).appendChild(b);
            vn(this, this.l.Dd);
            N(s(function() {
                Gh(Eh.getInstance(), b);
                zn(this)
            }, this), 3E3)
        }
        ;
        n.Uf = function(a, b) {
            var c = b && b.errors;
            if (c) {
                var d = K("error-details", this.l.vc);
                kc(d);
                w(c, function(a) {
                    var b = document.createElement("li");
                    b.innerHTML = a;
                    d.appendChild(b)
                });
                var c = K("add-note-link", this.l.vc)
                  , e = R(c, "click", s(function(a) {
                    a.preventDefault();
                    S(e);
                    y(this.l.ud, "dismissed-panel");
                    vn(this, this.l.ua)
                }, this));
                vn(this, this.l.vc)
            } else
                zn(this)
        }
        ;
        n.sf = function() {
            var a = Te("/addto_ajax", {
                action_redirect_to_signin_with_add: 1,
                list_type: "WL",
                video_ids: this.f,
                next_url: document.location
            })
              , b = document.createElement("form");
            b.action = a;
            b.method = "POST";
            a = document.createElement("input");
            a.type = "hidden";
            a.name = "session_token";
            a.value = M("addto_ajax_logged_out");
            b.appendChild(a);
            document.body.appendChild(b);
            b.submit()
        }
        ;
        function An(a) {
            fb(a, "addto-watch-later-button", "addto-watch-later-button-loading");
            var b = Q(a, "video-ids");
            W("/addto_ajax", {
                method: "POST",
                format: "XML",
                n: {
                    action_add_to_watch_later_list: 1
                },
                D: {
                    session_token: M("addto_ajax"),
                    video_ids: b
                },
                j: function() {
                    Bn(b, a)
                },
                B: function(c, d) {
                    6 == d.return_code ? Bn(b, a) : Cn(a, d)
                }
            })
        }
        function Dn(a) {
            fb(a, "addto-watch-later-button-success", "addto-watch-later-button-loading");
            var b = Q(a, "video-ids");
            W("/addto_ajax", {
                method: "POST",
                format: "XML",
                n: {
                    action_delete_from_watch_later_list: 1
                },
                D: {
                    session_token: M("addto_ajax"),
                    video_ids: b
                },
                j: function() {
                    fb(a, "addto-watch-later-button-loading", "addto-watch-later-button")
                },
                B: function(b, d) {
                    Cn(a, d)
                }
            })
        }
        function Bn(a, b) {
            fb(b, "addto-watch-later-button-loading", "addto-watch-later-button-success");
            var c = O("ADDTO_WATCH_LATER_ADDED");
            Hh(Eh.getInstance(), b, c);
            c = O("PLAYLIST_BAR_ADDED_TO_PLAYLIST");
            Aj("WL", "", a.split(","), c)
        }
        function Cn(a, b) {
            fb(a, "addto-watch-later-button-loading", "addto-watch-later-button-error");
            var c = b.error_message || O("ADDTO_WATCH_LATER_ERROR");
            Hh(Eh.getInstance(), a, c)
        }
        ;var En = m;
        var Fn = window
          , Gn = document
          , Hn = Fn.location;
        function In() {}
        function Jn(a, b, c) {
            return a[b] = a[b] || c
        }
        function Kn(a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        function Ln(a) {
            for (var a = a.sort(), b = [], c = i, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e
            }
            return b
        }
        function Mn() {
            var a;
            if ((a = Object.create) && /\[native code\]/.test(a))
                a = a(l);
            else {
                a = {};
                for (var b in a)
                    a[b] = i
            }
            return a
        }
        var Nn = Jn(Fn, "gapi", {});
        function On() {
            var a = Hn.href
              , b = Pn.h
              , c = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (a = a && c.exec(a))
                try {
                    b = decodeURIComponent(a[2])
                } catch (d) {}
            return b
        }
        ;var Pn;
        Pn = Jn(Fn, "___jsl", Mn());
        Jn(Pn, "I", 0);
        function Qn(a) {
            return Jn(Jn(Pn, "H", Mn()), a, Mn())
        }
        ;var Rn = Mn()
          , Sn = [];
        Sn.push(["jsl", function(a) {
            for (var b in a)
                if (Object.prototype.hasOwnProperty.call(a, b)) {
                    var c = a[b];
                    "object" == typeof c ? Pn[b] = Jn(Pn, b, []).concat(c) : Jn(Pn, b, c)
                }
            if (a = a.u)
                b = Jn(Pn, "us", []),
                b.push(a),
                (c = /^https:(.*)$/.exec(a)) && b.push("http:" + c[1]),
                Jn(Pn, "u", a)
        }
        ]);
        Rn.m = function(a) {
            var b = Pn.ms || "", a = a[0], c;
            if (!(c = !a))
                c = 0 <= a.indexOf("..");
            c && h("Bad hint");
            return b + a
        }
        ;
        function Tn(a) {
            return a.join(",").replace(/\./g, "_").replace(/-/g, "_")
        }
        function Un(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && 0 > Kn.call(b, e) && c.push(e)
            }
            return c
        }
        function Vn() {
            var a = On();
            a || h("Bad hint");
            return a
        }
        function Wn(a) {
            var b = a.split(";")
              , c = Rn[b.shift()];
            (b = c && c(b)) || h("Bad hint:" + a);
            return b
        }
        function Xn(a) {
            "loading" != Gn.readyState ? Yn(a) : Gn.write(['<script src="', a, '"><\/script>'].join(""))
        }
        function Yn(a) {
            var b = Gn.createElement("script");
            b.setAttribute("src", a);
            b.async = "true";
            a = Gn.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(b, a)
        }
        function Zn(a, b) {
            var c = b && b._c;
            if (c)
                for (var d = 0; d < Sn.length; d++) {
                    var e = Sn[d][0]
                      , f = Sn[d][1];
                    f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
                }
        }
        function $n(a, b) {
            function c(a) {
                o.push.apply(o, E);
                var b = ((Nn || {}).config || {}).update;
                b ? b(g) : g && Jn(Pn, "cu", []).push(g);
                a && (b = On(),
                b = e === b ? Jn(Nn, "_", Mn()) : Mn(),
                b = Jn(Qn(e), "_", b),
                a(b));
                f && f();
                return 1
            }
            var d = b || {};
            "function" == typeof b && (d = {},
            d.callback = b);
            Zn(a, d);
            var e = d.h || Vn()
              , f = d.callback
              , g = d.config
              , j = Jn(Qn(e), "r", []).sort()
              , o = Jn(Qn(e), "L", []).sort()
              , v = a ? Ln(a.split(":")) : []
              , E = Un(v, o);
            if (!E.length)
                return c();
            var E = Un(v, j)
              , C = Pn.I++
              , F = "loaded_" + C;
            Nn[F] = function(a) {
                function b() {
                    Nn[F] = l;
                    return c(a)
                }
                if (!a)
                    return 0;
                if (Nn["loaded_" + (C - 1)])
                    Nn[F] = b;
                else {
                    b();
                    for (var d; d = Nn["loaded_" + ++C]; )
                        if (!d())
                            break
                }
            }
            ;
            if (!E.length)
                return Nn[F](In);
            v = Wn(e);
            v = v.replace("__features__", Tn(E)).replace(/\/$/, "") + (j.length ? "/ed=1/exm=" + Tn(j) : "") + ("/cb=gapi." + F);
            j.push.apply(j, E);
            d.sync || Fn.___gapisync ? Xn(v) : Yn(v)
        }
        ;Nn.load = $n;
        var ao = -2;
        function bo() {
            if (-2 == ao) {
                ao = parseInt(Ud("ACTIVITY", "-1"), 10);
                R(document, "keypress", co);
                R(document, "click", eo);
                var a = L("LIST_AUTO_PLAY_VALUE");
                a && 1 < a || fo()
            }
        }
        function co() {
            fo()
        }
        function eo() {
            fo()
        }
        function fo() {
            bo();
            var a = na();
            1E3 > a - ao || (ao = a,
            Td("ACTIVITY", "" + a))
        }
        function go() {
            return -1 == ao || -2 == ao ? -1 : Math.max(na() - ao, 0)
        }
        ;function ho(a, b, c, d, e) {
            this.b = l;
            this.Ye = c;
            this.e = a;
            this.i = b;
            this.c = d;
            this.f = L("GOOGLEPLUS_HOST") + (e != l ? "/u/" + e : "") + "/_/notifications/frame#pid=36";
            this.Xe = H(a)
        }
        function io(a, b, c, d) {
            return {
                onOpen: s(function(a) {
                    return a.openInto(c)
                }, a),
                onReady: s(function() {
                    b.showOnepick && d && b.showOnepick()
                }, a),
                onClose: function(a) {
                    b.hideOnepick && d && b.hideOnepick();
                    a.remove()
                }
            }
        }
        function jo(a, b, c) {
            if ("undefined" === typeof c)
                a[b]();
            else
                a[b](c)
        }
        function ko(a, b) {
            var c = {
                setNotificationWidgetHeight: s(function(a) {
                    this.Xe.style.height = a
                }, a),
                setNotificationText: s(function(a) {
                    this.Ye(parseInt(a, 10))
                }, a),
                hideNotificationWidget: function() {
                    b.hideNotificationWidget && b.hideNotificationWidget()
                },
                openSharebox: function() {},
                onError: function() {}
            };
            a.b = iframes.open(a.f, {
                style: "iframe-style"
            }, {
                origin: window.location.protocol + "//" + window.location.hostname,
                source: "yt",
                hl: a.c
            }, c, function() {})
        }
        ho.prototype.load = function(a) {
            iframes.setHandler("iframe-style", io(this, a, this.e, m));
            iframes.setHandler("onepick", io(this, a, this.i, k));
            ko(this, a)
        }
        ;
        ho.prototype.close = function() {
            jo(this.b, "onHide")
        }
        ;
        function lo(a, b) {
            b ? jo(a.b, "onActive") : jo(a.b, "onIdle")
        }
        ;function mo(a, b) {
            this.e = this.c = m;
            this.o = 0;
            this.k = H("sb-container");
            this.f = H("sb-button-notify");
            this.G = td("SPAN", "yt-uix-button-content", H("sb-button-notify"));
            this.i = H("sb-onepick-target");
            this.b = new ho("sb-target","sb-onepick-target",s(this.ze, this),a,b);
            this.b.load({
                hideNotificationWidget: s(this.Xc, this),
                showOnepick: s(this.ye, this),
                hideOnepick: s(this.xe, this)
            });
            this.O = te(this.i);
            this.Yc();
            R(window, "resize", s(this.Yc, this));
            R(window, "click", s(this.Xc, this));
            bo();
            ed(s(this.we, this), 12E4)
        }
        n = mo.prototype;
        n.Zg = function(a) {
            this.c ? (no(this),
            lo(this.b, k)) : (this.e && oo(this),
            this.b.close(),
            po(this, k, "notif"),
            x(this.f, "sb-notif-clicked"),
            Jj(),
            jo(this.b.b, "onShowNotificationsOnly", {}),
            this.c = k,
            lo(this.b, m));
            Jd(a)
        }
        ;
        n.$g = function(a) {
            if (this.e)
                oo(this);
            else {
                this.c && no(this);
                this.b.close();
                po(this, k, "sharebox");
                Jj();
                var b = this.b
                  , c = window.location.href;
                -1 != c.indexOf("/watch?") && jo(b.b, "setPrefill", {
                    items: [{
                        type: "https://web.archive.org/web/20120531234132/http://schema.org/VideoObject",
                        id: c,
                        properties: {
                            url: [c]
                        }
                    }]
                });
                jo(b.b, "onShowShareboxOnly", {});
                this.e = k
            }
            Jd(a)
        }
        ;
        function po(a, b, c) {
            c = "sb-card-" + c;
            b ? (z(a.k, "sb-off", "sb-on"),
            x(a.k, c)) : (z(a.k, "sb-on", "sb-off"),
            y(a.k, c))
        }
        function oo(a) {
            Mj();
            po(a, m, "sharebox");
            a.e = m
        }
        function no(a) {
            Mj();
            po(a, m, "notif");
            a.c = m;
            y(a.f, "sb-notif-clicked")
        }
        n.Xc = function() {
            if (this.c || this.e)
                this.b.close(),
                no(this),
                oo(this),
                qo(this)
        }
        ;
        n.ze = function(a) {
            this.o = a;
            qo(this)
        }
        ;
        function qo(a) {
            pc(a.G, a.o + "");
            0 == a.o ? z(a.f, "sb-notif-on", "sb-notif-off") : z(a.f, "sb-notif-off", "sb-notif-on")
        }
        n.ye = function() {
            z(this.i, "sb-off", "sb-on")
        }
        ;
        n.xe = function() {
            z(this.i, "sb-on", "sb-off")
        }
        ;
        n.Yc = function() {
            var a = Math.max(($b(window).height - this.O.height) / 2, 0);
            he(this.i, "top", a + "px")
        }
        ;
        n.we = function() {
            6E5 < go() ? lo(this.b, m) : lo(this.b, k)
        }
        ;
        function ro(a) {
            for (var b = mc(H("picker-container")); b; )
                a && a != b.id && U(b),
                b = b.nextElementSibling != i ? b.nextElementSibling : nc(b.nextSibling)
        }
        ;var so, to;
        function uo(a, b) {
            this.Hb = a;
            this.b = b;
            this.userData = {}
        }
        uo.prototype.je = function() {
            return {}
        }
        ;
        uo.prototype.se = function(a) {
            this.Hb(this, a)
        }
        ;
        uo.prototype.Mc = function(a) {
            this.b(this, a)
        }
        ;
        function vo(a, b) {
            uo.call(this, a, b)
        }
        u(vo, uo);
        n = vo.prototype;
        n.jb = "/subscription_ajax";
        n.bb = {};
        function wo(a, b) {
            a.jb = Re(a.jb, b)
        }
        n.je = function() {
            return this.bb
        }
        ;
        n.se = function(a) {
            var b = l
              , c = [O("SUBSCRIBE_SERVER_ERROR")];
            try {
                b = bg(a.responseText)
            } catch (d) {}
            (a = b && b.response) ? this.Hb(this, a) : this.b(this, c)
        }
        ;
        n.Mc = function(a, b) {
            var c = b ? [b] : [O("SUBSCRIBE_SERVER_ERROR")];
            try {
                var d = bg(a.responseText)
            } catch (e) {
                this.b(this, c);
                return
            }
            this.b(this, d.errors)
        }
        ;
        function xo(a) {
            so = qg;
            to = a
        }
        var yo = l
          , zo = [];
        function Ao(a) {
            zo.push(a);
            yo || Bo()
        }
        function Bo() {
            if (zo.length && !yo) {
                var a = zo.shift();
                if (a) {
                    var b = a.je();
                    b || (b = {});
                    b.session_token = to;
                    try {
                        var c = {
                            method: "POST",
                            postBody: Ne(b),
                            onComplete: Co,
                            onException: Do,
                            onError: Do
                        }
                    } catch (d) {
                        a.Mc({}, O("SUBSCRIBE_JS_ERROR"));
                        return
                    }
                    yo = a;
                    so(a.jb, c)
                }
            }
        }
        function Co(a) {
            var b = yo;
            yo = l;
            Bo();
            b && b.se(a)
        }
        function Do(a) {
            var b = yo;
            yo = l;
            Bo();
            b && b.Mc(a)
        }
        ;function Eo(a) {
            var b = Fo(a);
            "button" == Q(b, "subscription-menu-type") ? (b = Sg.getInstance(),
            b = Tg(b, a),
            K("subscription-menu-loader", b) && (a.loader = b.innerHTML),
            Go(a)) : (b = Fo(a),
            b = H(Q(b, "subscription-expandable-id")),
            Ae(b) ? (U(b),
            x(a, "yt-uix-expander-collapsed")) : (Go(a),
            T(b),
            y(a, "yt-uix-expander-collapsed")))
        }
        function Go(a) {
            if (!Q(a, "loaded")) {
                var b = Fo(a)
                  , c = Q(b, "subscription-type")
                  , d = Q(b, "subscription-xsrf") || ""
                  , e = Q(b, "subscription-menu-type")
                  , f = {}
                  , g = Q(b, "subscription-value");
                "playlist" == c ? (f.action_get_subscription_form_for_playlist = 1,
                c = "p") : "blog" == c ? (f.action_get_subscription_form_for_blog = 1,
                c = "b") : "topic" == c ? (f.action_get_subscription_form_for_topic = 1,
                c = "l") : (f.action_get_subscription_form_for_user = 1,
                c = "u");
                xo(d);
                d = new vo(Ho,function() {
                    Io(b, k)
                }
                );
                wo(d, f);
                f = {};
                f[c] = g;
                f.menu_type = e;
                d.bb = f || {};
                d.userData.eventTrigger = a;
                d.userData.subscription = b;
                Ao(d)
            }
        }
        function Fo(a) {
            return wc(a, l, "subscription-container")
        }
        function Jo(a) {
            var b = wc(a, l, "subscription-menu-expandable");
            if (b)
                return b.expandableMenuSubscription;
            a = wc(a, l, "yt-uix-button-menu");
            b = Sg.getInstance();
            a = $g(b, a);
            return Fo(a)
        }
        function Ko(a) {
            var b = I("subscription-container")
              , c = Q(a, "subscription-type")
              , d = Q(a, "subscription-value");
            return b = La(b, function(a) {
                if (Q(a, "subscription-type") == c && Q(a, "subscription-value") == d)
                    return k
            })
        }
        function Io(a, b) {
            var c = Q(a, "subscription-id")
              , d = Ko(a);
            w(d, function(a) {
                if (b) {
                    "button" == Q(a, "subscription-menu-type") ? Lo(a) : Mo(a, k);
                    var d = td(l, "subscription-subscribed-container", a)
                      , g = td(l, "subscribe-button", a)
                      , j = td(l, "subscription-options-button", a);
                    ld(a, "subscription-id");
                    U(d);
                    T(g);
                    ld(j, "loaded")
                } else
                    d = td(l, "subscription-subscribed-container", a),
                    g = td(l, "subscribe-button", a),
                    P(a, "subscription-id", c),
                    U(g),
                    T(d)
            })
        }
        function No(a, b) {
            if ("button" == Q(a, "subscription-menu-type")) {
                var c = K("subscription-options-button", a)
                  , d = Sg.getInstance()
                  , e = Tg(d, c);
                e && (e.innerHTML = b,
                bh(d, c, e))
            } else
                c = H(Q(a, "subscription-expandable-id")),
                d = K("subscription-menu-loader", c),
                e = K("subscription-menu-body", c),
                e.innerHTML = b,
                c.expandableMenuSubscription = a,
                U(d),
                T(e)
        }
        function Lo(a) {
            var a = K("subscription-options-button", a)
              , b = Sg.getInstance();
            Tg(b, a);
            Xg(b, a);
            if (a.loader) {
                var c = a.loader
                  , d = Tg(b, a);
                d && (d.innerHTML = c,
                bh(b, a, d))
            }
            ld(a, "loaded")
        }
        function Mo(a, b) {
            var c = dh.getInstance()
              , d = K("yt-uix-expander", a)
              , e = H(Q(a, "subscription-expandable-id"));
            if (b) {
                var f = K("subscription-menu-loader", e)
                  , g = K("subscription-menu-body", e);
                ld(d, "loaded");
                T(f);
                U(g);
                g.innerHTML = ""
            }
            Ae(e) && fh(c, d)
        }
        function Oo(a, b) {
            var c = a.userData.subscription
              , d = b.html_content;
            a.userData.eventTrigger.disabled = m;
            P(c, "subscription-id", b.id);
            Io(c, m);
            d && (No(c, d),
            d = K("subscription-options-button", c),
            P(d, "loaded", "true"),
            Eo(d),
            "button" == Q(c, "subscription-menu-type") && Sg.getInstance().Sc(d))
        }
        function Po(a) {
            lc(a.userData.collection)
        }
        function Qo(a) {
            Io(a.userData.subscription, k)
        }
        function Ho(a, b) {
            var c = a.userData.eventTrigger
              , d = a.userData.subscription
              , e = b.html_content;
            P(d, "subscription-id", b.id);
            No(d, e);
            P(c, "loaded", "true")
        }
        function Ro(a) {
            var b = a.userData.subscription;
            a.userData.eventTrigger.disabled = m;
            a = Ko(b);
            w(a, function(a) {
                "button" == Q(a, "subscription-menu-type") ? Lo(a) : Mo(a, k)
            })
        }
        function So(a) {
            if (a = a.userData.eventTrigger)
                a.disabled = m
        }
        ;function To(a, b) {
            this.F = a;
            this.Ib = b || l;
            this.ka = Q(a, "subscription-type") || "user";
            this.e = Q(a, "subscription-value") || "";
            this.i = !!Q(a, "enable-tooltip");
            this.Jb = !!Q(a, "enable-hovercard");
            this.nb = m;
            this.H = [];
            this.c = [];
            this.f = [];
            this.H.push(R(this.F, "click", s(this.uf, this)));
            this.c.push(qf("SUBSCRIBE", this.xd, this));
            this.c.push(qf("UNSUBSCRIBE", this.xd, this));
            this.Jb && this.H.push(R(this.F, "mouseover", s(this.vf, this)));
            Uo(this)
        }
        var Vo;
        function Wo(a, b) {
            Vo || (Vo = []);
            var c = I("yt-subscription-button-js-default", a);
            w(c, function(a) {
                if (!Q(a, "subscription-initialized")) {
                    var c = new To(a,b);
                    Vo.push(c);
                    P(a, "subscription-initialized", "true")
                }
            })
        }
        n = To.prototype;
        n.getId = function() {
            return Q(this.F, "subscription-id") || l
        }
        ;
        function Xo(a, b) {
            b ? P(a.F, "subscription-id", b) : ld(a.F, "subscription-id");
            Uo(a)
        }
        n.getValue = function() {
            return this.e
        }
        ;
        function Uo(a) {
            B(a.F, "subscribed", !!a.getId());
            var b = Y($k.getInstance(), "target");
            B(a.F, b, !!a.getId() && a.Jb);
            a.i && (b = (a.getId() ? "un" : "") + "subscribe-tooltip",
            b = Q(a.F, b) || "",
            Hh(Eh.getInstance(), a.F, b))
        }
        n.destroy = function() {
            S(this.H);
            this.H = [];
            rf(this.c);
            this.c = [];
            w(this.f, function(a) {
                fd(a)
            });
            this.b = [];
            ld(this.F, "subscription-initialized")
        }
        ;
        n.xd = function(a, b, c, d) {
            c != this.getId() && (this.getValue() == a && this.ka == b) && Xo(this, c);
            d != this.F && this.Jb && Sk($k.getInstance(), this.F)
        }
        ;
        n.uf = function(a) {
            if (this.nb)
                return m;
            a.preventDefault();
            Gh(Eh.getInstance(), this.F);
            this.getId() ? Yo(this) : Zo(this)
        }
        ;
        n.vf = function() {
            this.getId() && this.f.push(N(s(function() {
                $o(this)
            }, this), 350))
        }
        ;
        function $o(a) {
            var b = $k.getInstance();
            if (!a.Cd && Uk(b, a.F)) {
                a.Cd = k;
                var c = {
                    hovercard: 1
                };
                c["action_get_subscription_form_for_" + a.ka] = 1;
                var d = {
                    session_token: M("subscription_ajax")
                };
                d[ap(a)] = a.e;
                W("/subscription_ajax", {
                    method: "POST",
                    n: c,
                    D: d,
                    A: a,
                    j: function(a, c) {
                        Tk(b, this.F, c.response.html_content);
                        bp(this)
                    },
                    B: function() {
                        this.Cd = m
                    }
                })
            }
        }
        function bp(a) {
            var b = $k.getInstance()
              , c = Rg(b, a.F)
              , d = Rk(b, c);
            w(d.getElementsByTagName("input"), function(a) {
                this.H.push(R(a, "change", s(function() {
                    var a = d.getElementsByTagName("form")[0]
                      , b = a.action || document.location.href
                      , c = a.method.toUpperCase() || "GET"
                      , a = Nc(a);
                    lg(b, i, c, a, i)
                }, this)))
            }, a)
        }
        function Zo(a) {
            if (L("LOGGED_IN")) {
                var b = ap(a)
                  , c = {};
                c["action_create_subscription_to_" + a.ka] = 1;
                var d = Q(a.F, "subscription-feature");
                d && (c.feature = d);
                d = {
                    session_token: M("subscription_ajax")
                };
                d[b] = a.e;
                (b = L("PLAYBACK_ID")) && (d.plid = b);
                a.nb = k;
                a.F.disabled = k;
                W("/subscription_ajax", {
                    method: "POST",
                    A: a,
                    n: c,
                    D: d,
                    j: function(a, b) {
                        Xo(this, b.response.id);
                        sf("SUBSCRIBE", this.getValue(), this.ka, this.getId(), this.F);
                        this.Jb && ($k.getInstance().pb(this.F),
                        $o(this));
                        this.Ib && this.Ib(this.F, k)
                    },
                    S: function() {
                        this.nb = m;
                        this.F.disabled = m
                    }
                });
                Qh("subscribe")
            }
        }
        function Yo(a) {
            var b = {
                s: a.getId(),
                session_token: M("subscription_ajax")
            }
              , c = {
                action_remove_subscriptions: 1
            }
              , d = Q(a.F, "subscription-feature");
            d && (c.feature = d);
            (d = L("PLAYBACK_ID")) && (b.plid = d);
            a.nb = k;
            a.F.disabled = k;
            W("/subscription_ajax", {
                method: "POST",
                A: a,
                n: c,
                D: b,
                j: function() {
                    Xo(this, l);
                    sf("UNSUBSCRIBE", this.getValue(), this.ka, l, l);
                    this.Ib && this.Ib(this.F, m)
                },
                S: function() {
                    this.nb = m;
                    this.F.disabled = m
                }
            });
            Qh("unsubscribe")
        }
        function ap(a) {
            return "playlist" == a.ka ? "p" : "blog" == a.ka ? "b" : "topic" == a.ka ? "l" : "channel" == a.ka ? "c" : "u"
        }
        ;function cp() {}
        ;function dp() {}
        u(dp, cp);
        dp.prototype.V = function() {
            var a = 0;
            Ec(this.Ya(k), function() {
                a++
            });
            return a
        }
        ;
        dp.prototype.clear = function() {
            var a = Fc(this.Ya(k))
              , b = this;
            w(a, function(a) {
                b.b.removeItem(a)
            })
        }
        ;
        function ep(a) {
            this.b = a
        }
        u(ep, dp);
        ep.prototype.V = function() {
            return this.b.length
        }
        ;
        ep.prototype.Ya = function(a) {
            var b = 0
              , c = new Cc
              , d = this;
            c.next = function() {
                b >= d.V() && h(Bc);
                var c;
                c = d.b.key(b++);
                if (a)
                    return c;
                c = d.b.getItem(c);
                if (r(c))
                    return c;
                h("Storage mechanism: Invalid value was encountered")
            }
            ;
            return c
        }
        ;
        ep.prototype.clear = function() {
            this.b.clear()
        }
        ;
        function fp() {
            var a = l;
            try {
                a = window.localStorage || l
            } catch (b) {}
            this.b = a
        }
        u(fp, ep);
        function gp(a) {
            this.b = a;
            this.c = new dg
        }
        gp.prototype.b = l;
        gp.prototype.c = l;
        function hp() {
            var a = new fp, b;
            if (b = a)
                a: {
                    try {
                        b = !!a.b && !!a.b.getItem;
                        break a
                    } catch (c) {}
                    b = m
                }
            b && (this.b = new gp(a))
        }
        hp.prototype.b = l;
        function ip(a) {
            var b = {
                volume: 100,
                muted: m,
                nonNormalized: 100
            };
            if (a.b) {
                var c = {};
                try {
                    var d;
                    var e;
                    var f = a.b.b.b.getItem("yt-player-volume");
                    r(f) || f === l ? e = f : h("Storage mechanism: Invalid value was encountered");
                    if (e !== l)
                        try {
                            d = bg(e)
                        } catch (g) {
                            h("Storage: Invalid value was encountered")
                        }
                    c = d || {}
                } catch (j) {
                    a.b.b.b.removeItem("yt-player-volume")
                }
                b.volume = isNaN(c.volume) ? 100 : Math.min(Math.max(c.volume, 0), 100);
                b.nonNormalized = isNaN(c.nonNormalized) ? b.volume : c.nonNormalized;
                b.muted = c.muted == i ? m : c.muted
            }
            return b
        }
        ;var jp = m
          , kp = -1
          , lp = ""
          , mp = {}
          , np = new of
          , op = l;
        function pp() {
            return L("RESUME_COOKIE_NAME")
        }
        function qp(a, b) {
            var c = pp();
            if (c) {
                var d = Ud(c, "").split(",")
                  , d = La(d, function(b) {
                    return 0 != b.indexOf(a) && b.length
                });
                4 <= d.length && d.shift();
                d.push(a + ":" + b);
                Td(c, d.join(","), 1814400)
            }
        }
        function rp(a) {
            var b = pp();
            if (b) {
                var c = La(Ud(b, "").split(","), function(b) {
                    return 0 != b.indexOf(a)
                });
                0 == c.length ? Vd(b) : Td(b, c.join(","), 1814400)
            }
        }
        function sp() {
            var a = Nj()
              , b = a.getDuration()
              , a = Math.floor(a.getCurrentTime())
              , c = L("VIDEO_ID");
            120 >= a || a + 120 >= b ? rp(c) : qp(c, Math.floor(a))
        }
        function tp(a, b) {
            if (hd && !a.addEventListener) {
                var c = b ? 2 * b : 50;
                N(function() {
                    tp(a, c)
                }, c)
            } else
                b && X("ael_delayed", "delay=" + b, i),
                up(a),
                np.Ra("READY_STATE_TOPIC", a)
        }
        function up(a) {
            a.addEventListener("onStateChange", vp);
            a.addEventListener("NEXT_CLICKED", wp);
            a.addEventListener("SIZE_CLICKED", xp);
            a.addEventListener("onVolumeChange", yp);
            a.addEventListener("SHARE_CLICKED", zp);
            pp() && R(window, "beforeunload", sp);
            Qe(window.location.hash).q && L("WIDE_PLAYER_STYLES") && (L("WATCH7_ENABLED") ? sf("player-resize", m) : Fj(m));
            var b = H("watch-player") || H("watch7-video-container");
            b && (b.style.background = "transparent");
            Bj(a);
            op = new hp
        }
        function vp(a) {
            kp = a;
            switch (a) {
            case 0:
                fj(wj()) && wj().next(m, "autoplay")
            }
        }
        function yp(a) {
            var b = op;
            if (b.b) {
                var c = {};
                c.volume = isNaN(a.volume) ? ip(b).volume : Math.min(Math.max(a.volume, 0), 100);
                c.nonNormalized = a.nonNormalized;
                c.muted = a.muted == i ? ip(b).muted : a.muted;
                try {
                    var d = b.b;
                    if (ca(c)) {
                        var e = eg(d.c, c);
                        try {
                            d.b.b.setItem("yt-player-volume", e)
                        } catch (f) {
                            h("Storage mechanism: Quota exceeded")
                        }
                    } else
                        d.b.b.removeItem("yt-player-volume")
                } catch (g) {}
            }
        }
        function wp() {
            wj().next(k, i)
        }
        function xp(a) {
            L("FULLSCREEN_EXPAND") ? B(document.body, "fullscreen", a) : (Td("wide", a ? "1" : "0"),
            L("WATCH7_ENABLED") ? sf("player-resize", a) : Fj(a))
        }
        function zp() {
            kn(H("watch-share"), k)
        }
        function Ap(a, b) {
            var c = b != l ? b : k
              , d = Nj();
            d.seekTo(a, k);
            c && (H("watch-video-container") ? window.scroll(0, 0) : window.location.href = "#movie_player");
            d.playVideo()
        }
        function Bp() {
            if (jp) {
                var a = window.location.hash;
                a != lp && (lp = a,
                a = Qe(a),
                "t"in a && a.t != mp.t && Ap(Cp(a.t), m),
                mp = a)
            }
        }
        function Cp(a) {
            var b = 0;
            -1 != a.indexOf("h") && (a = a.split("h"),
            b = 3600 * a[0],
            a = a[1]);
            -1 != a.indexOf("m") && (a = a.split("m"),
            b = 60 * a[0] + b,
            a = a[1]);
            -1 != a.indexOf("s") ? (a = a.split("s"),
            b = 1 * a[0] + b) : b = 1 * a + b;
            return b
        }
        ;var Dp = m
          , Ep = l
          , Fp = l
          , Gp = l
          , Hp = l;
        function Ip(a) {
            a.addEventListener("onStateChange", Jp);
            a.addEventListener("onError", Kp)
        }
        function Lp(a) {
            var b = Hp
              , a = {
                event: a,
                aplid: Ep,
                abt: Fp,
                evtm: Math.round(na() - b)
            };
            (b = L("PLAYER_CONFIG")) && (b.args && b.args.plid) && (a.plid = b.args.plid);
            b && (b.args && b.args.video_id) && (a.v = b.args.video_id);
            Eg("/player_204?" + Ne(a))
        }
        function Jp(a) {
            if (Gp)
                switch (a) {
                case 1:
                    Lp("play");
                    fd(Gp);
                    Gp = l;
                    Dp = m;
                    break;
                case 0:
                    Lp("ended"),
                    fd(Gp),
                    Gp = l,
                    Dp = m
                }
        }
        function Kp() {
            Gp && (Lp("error"),
            fd(Gp),
            Gp = l,
            Dp = m)
        }
        function Mp() {
            Gp && Lp("userwaiting");
            Gp = l
        }
        function Np() {
            Dp && Lp("unload")
        }
        ;function Op() {
            var a = H("watch-video-annotation-editable")
              , b = qa(H("watch-video-annotation-content").innerHTML);
            b ? z(a, ["unannotated", "editing"], ["annotated", "not-editing"]) : z(a, ["annotated", "not-editing"], ["unannotated", "editing"]);
            H("watch-video-annotation-textarea").value = b
        }
        function Pp(a) {
            if (!Q(a, "saving")) {
                P(a, "saving", "true");
                var b = H("watch-video-annotation-content")
                  , c = H("watch-video-annotation-textarea")
                  , d = qa(c.value)
                  , e = {};
                d || (e["delete"] = 1);
                W(a.action, {
                    format: "JSON",
                    method: "POST",
                    n: e,
                    Ia: Nc(a),
                    j: function() {
                        b.innerHTML = sa(d)
                    },
                    B: function() {
                        c.value = b.innerHTML
                    },
                    S: function() {
                        ld(a, "saving");
                        Op()
                    }
                })
            }
        }
        ;function Qp(a) {
            var b = a.target;
            if (!("INPUT" == b.tagName || "TEXTAREA" == b.tagName || "SELECT" == b.tagName))
                switch (a.keyCode) {
                case 78:
                    a.shiftKey && wj().next(k, "keys");
                    break;
                case 80:
                    a.shiftKey && (a = wj(),
                    (a = hi(a.g, "keys")) && Mh(a));
                    break;
                case 106:
                    if (a = Nj())
                        b = a.getCurrentTime(),
                        a.seekTo(b - 10);
                    break;
                case 108:
                    if (a = Nj())
                        b = a.getCurrentTime(),
                        a.seekTo(b + 10);
                    break;
                case 107:
                    (a = Nj()) && (2 == kp ? a.playVideo() : a.pauseVideo())
                }
        }
        ;function Rp() {
            var a = Wd.getInstance();
            de(Sh.ne, k);
            ee(a);
            U("watch_page_survey")
        }
        ;function Sp(a, b, c) {
            var d = c || p
              , e = a.serverUri || ""
              , f = d.GOOGLE_FEEDBACK_START;
            /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent) && (a.mobileWindow = window.open(""));
            d.GOOGLE_FEEDBACK_START_ARGUMENTS = arguments;
            f ? f.apply(d, arguments) : (d = d.document,
            f = d.createElement("script"),
            f.src = e + "/load.js",
            d.body.appendChild(f))
        }
        ;var Tp = m
          , Up = "";
        function Vp(a) {
            a = a.match(/[\d]+/g);
            a.length = 3;
            return a.join(".")
        }
        if (navigator.plugins && navigator.plugins.length) {
            var Wp = navigator.plugins["Shockwave Flash"];
            Wp && (Tp = k,
            Wp.description && (Up = Vp(Wp.description)));
            navigator.plugins["Shockwave Flash 2.0"] && (Tp = k,
            Up = "2.0.0.11")
        } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
            var Xp = navigator.mimeTypes["application/x-shockwave-flash"];
            (Tp = Xp && Xp.enabledPlugin) && (Up = Vp(Xp.enabledPlugin.description))
        } else
            try {
                var Yp = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                  , Tp = k
                  , Up = Vp(Yp.GetVariable("$version"))
            } catch (Zp) {
                try {
                    Yp = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                    Tp = k,
                    Up = "6.0.21"
                } catch ($p) {
                    try {
                        Yp = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                        Tp = k,
                        Up = Vp(Yp.GetVariable("$version"))
                    } catch (aq) {}
                }
            }
        var bq = Up;
        function cq(a) {
            return (a = a.exec(yb())) ? a[1] : ""
        }
        var dq = function() {
            if (nk)
                return cq(/Firefox\/([0-9.]+)/);
            if (D || Cb)
                return Pb;
            if (sk)
                return cq(/Chrome\/([0-9.]+)/);
            if (tk)
                return cq(/Version\/([0-9.]+)/);
            if (pk || qk) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(yb());
                if (a)
                    return a[1] + "." + a[2]
            } else {
                if (rk)
                    return (a = cq(/Android\s+([0-9.]+)/)) ? a : cq(/Version\/([0-9.]+)/);
                if (ok)
                    return cq(/Camino\/([0-9.]+)/)
            }
            return ""
        }();
        function eq() {
            (D ? 0 <= Ga(dq, "7") && 0 <= Ga(bq, "9") : nk ? 0 <= Ga(dq, "3.5") : tk ? 0 <= Ga(dq, "5") : sk) || U("reportbug")
        }
        ;function fq() {
            Dd(H("help-button"), "click", gq, k)
        }
        function gq() {
            var a = H("help-button");
            if (a) {
                var b = Q(a, "iph-topic-id")
                  , c = Q(a, "help-center-host")
                  , d = Q(a, "locale")
                  , e = Q(a, "iph-title-text")
                  , f = Q(a, "iph-search-button-text")
                  , g = Q(a, "iph-search-input-text")
                  , j = Q(a, "iph-anchor-text")
                  , o = document.location.protocol + Q(a, "iph-js-url")
                  , v = document.location.protocol + Q(a, "iph-css-url");
                o && v && (v = dc("link", {
                    href: v,
                    rel: "stylesheet"
                }),
                document.getElementsByTagName("head")[0].appendChild(v),
                Ag(o, function() {
                    var o = q("yt.www.help.init")
                      , v = q("yt.www.help.onButtonClick");
                    o(b, c, l, d, e, g, f, j);
                    R(a, "click", v);
                    v()
                }))
            }
        }
        ;function hq() {
            (function() {
                try {
                    for (var a = this; a.parent != a; )
                        "$" == a.frameElement.src && h("odd"),
                        a = a.parent;
                    a.frameElement != l && h("busted")
                } catch (b) {
                    document.write("--\><plaintext style=display:none><\!--"),
                    window.open("/", "_top"),
                    top.location = "/"
                }
            }
            )()
        }
        function iq(a) {
            "block" == a.responseText && hq()
        }
        if (window != window.top) {
            var jq = document.referrer;
            if (window.parent != window.top)
                hq();
            else {
                var kq = Ve(jq);
                if (We(kq))
                    hq();
                else {
                    var lq = Ve(jq);
                    Xe(lq) || qg("/roger_rabbit?" + ("location=" + encodeURIComponent(jq) + "&self=" + encodeURIComponent(window.location.href) + "&user_agent=" + encodeURIComponent(navigator.userAgent)), {
                        onComplete: iq
                    })
                }
            }
        }
        ;function mq(a, b, c, d) {
            c = $k.getInstance();
            d.html ? (Tk(c, b, d.html),
            Wo()) : (c = $k.getInstance(),
            Sk(c, b),
            y(a, "yt-uix-hovercard"),
            y(b, "yt-uix-hovercard-target"))
        }
        ;var nq = m;
        function oq() {
            sf("init")
        }
        function pq() {
            sf("dispose")
        }
        function qq(a, b, c) {
            var d = H("www-core-js");
            !nq && (d && -1 != d.src.indexOf("/debug-")) && (c = rq(c),
            X("jserror", "error=" + encodeURIComponent(a) + "&script=" + encodeURIComponent(b) + "&linenumber=" + encodeURIComponent(c) + "&url=" + encodeURIComponent(window.location.href), i),
            nq = k)
        }
        function rq(a) {
            if (Db)
                try {
                    eval("(0)()")
                } catch (b) {
                    return b.stack.replace(/(.*):/g, "").replace(/\n/g, ",")
                }
            else
                return a
        }
        ;var sq = [];
        function tq(a, b, c, d) {
            window.google_ad_client = a;
            window.google_ad_channel = b;
            window.google_max_num_ads = 1;
            window.google_ad_output = "js";
            window.google_ad_type = "text";
            window.google_only_pyv_ads = k;
            c && (window.google_kw = c,
            window.google_kw_type = "broad");
            window.dclk_language && (window.google_language = window.dclk_language);
            window.google_ad_request_done = d;
            document.write('<script language="JavaScript" src=""><\/script>')
        }
        function uq() {
            window.dclk_language && (window.google_language = window.dclk_language);
            window.google_ad_client = "pub-6219811747049371";
            window.google_ad_channel = "1802068507";
            window.google_ad_format = "300x250_as";
            window.google_ad_type = "text_image";
            window.google_ad_width = 300;
            window.google_ad_height = 250;
            window.google_alternate_color = "FFFFFF";
            window.google_color_border = "FFFFFF";
            window.google_color_bg = "FFFFFF";
            window.google_color_link = "0033CC";
            window.google_color_text = "444444";
            window.google_color_url = "0033CC";
            document.write('<script language="JavaScript" src=""><\/script>')
        }
        function vq() {
            U("ad_creative_2");
            U("pyv-placeholder");
            H("ppv-placeholder") ? T("ppv-placeholder") : U("homepage-sidebar-ads")
        }
        function wq(a, b, c, d, e) {
            var f = Na(b.media_template_data, function(a) {
                return !!a.imageUrl
            });
            f && (a = {
                video_id: f.videoId,
                ad_type: a,
                headline: ya(b.line1),
                image_url: f.imageUrl,
                description1: ya(b.line2),
                description2: ya(b.line3),
                channel_title: f.channelName,
                test_mode: (!!e).toString(),
                destination_url: ya(b.url)
            },
            qg("/pyv?" + Ne(a), {
                method: "GET",
                update: c,
                onComplete: d
            }))
        }
        function xq(a) {
            if (0 == a.length)
                yq(),
                L("PYV_TRACK_RELATED_CTR") && (zq("watch-related", m),
                zq("watch-channel-videos-panel", m));
            else {
                var b = H("watch-channel-videos-panel");
                b && !L("IS_BRANDED_WATCH") && x(b, "yt-uix-expander-collapsed");
                wq("watch_related", a[0], l, function(a) {
                    var a = rg(og(a.responseXML), "html_content") || ""
                      , b = H(window.pyv_related_box_id || "watch-related");
                    b && 0 != b.innerHTML.indexOf(a) && (b.insertBefore(ic(a), b.firstChild),
                    L("PYV_TRACK_RELATED_CTR") && (zq("watch-related", k),
                    zq("watch-channel-videos-panel", k)))
                }, window.google_adtest && "on" == window.google_adtest)
            }
        }
        function yq() {
            var a = H("ppv-container");
            a && T(a)
        }
        function Aq(a) {
            a && Ce(a, k);
            Ce("search-base-div", k)
        }
        function Bq(a, b, c) {
            w(a, function(a) {
                var b = a.media_template_data[0];
                a.line1 = ya(a.line1);
                a.line2 = ya(a.line2);
                a.line3 = ya(a.line3);
                a.url = ya(a.url);
                b.imageUrl = ya(b.imageUrl);
                b.channelName = ya(b.channelName)
            });
            W("/pyv", {
                format: "XML",
                method: "POST",
                D: {
                    pyv_ads: eg(new dg(i), a),
                    ad_type: c
                },
                j: function(a, c) {
                    b.innerHTML = c.html_content;
                    Aq(b)
                }
            })
        }
        function Cq() {
            U("ad_creative_2");
            L("PYV_IS_ALLOWED") ? tq("ca-youtube-homepage", L("PYV_AD_CHANNEL") || "", L("PYV_KW") || "", Dq) : vq()
        }
        function Dq(a) {
            var b = H("pyv-placeholder");
            0 == a.length || !b ? vq() : wq("homepage", a[0], b, function() {
                U("ad_creative_2")
            })
        }
        function Eq() {
            if (L("PYV_IS_ALLOWED")) {
                var a = "pyvOnBrowse";
                L("PYV_CATEGORY") && (a += " pyvBrowse_" + L("PYV_CATEGORY"));
                tq("ca-youtube-browse", a, "", Fq)
            } else
                uq()
        }
        function Fq(a) {
            var b = H("pyv-placeholder");
            0 == a.length || !b ? uq() : wq(L("PYV_NEW_BROWSE") ? "new_browse" : "browse", a[0], b, function() {
                U("ad_creative_1")
            })
        }
        function zq(a, b) {
            var c = H(a);
            c && (c = J("li", "video-list-item", c),
            w(c, function(a, c) {
                var f = J("a", l, a);
                w(f, function(a) {
                    var d = a.getAttribute("href");
                    d && unescape(d).match(/\/watch(\?|#!)v=/) && (a.href = b ? a.href + ("&pvpos=" + c) : a.href + ("&pvnpos=" + c))
                })
            }))
        }
        ;function Gq(a) {
            a = a.replace(";dc_seed=", ";kmyd=watch-channel-brand-div;dc_seed=");
            U("instream_google_companion_ad_div");
            U("google_companion_ad_div");
            T("ad300x250");
            T("watch-channel-brand-div");
            var b = H("ad300x250");
            if (b !== l) {
                var c = Math.round(1E4 * Math.random());
                b.innerHTML = ['<iframe src="', a, '" name="ifr_300x250ad', c, '" id="ifr_300x250ad', c, '" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("")
            }
            Hq()
        }
        function Iq(a) {
            a = a.replace(";dc_seed=", ";kmyd=watch-longform-ad;dc_seed=");
            U("instream_google_companion_ad_div");
            T("watch-longform-ad");
            T("watch-longform-text");
            T("watch-longform-ad-placeholder");
            var b = H("watch-longform-ad-placeholder")
              , c = Math.round(1E4 * Math.random());
            b.innerHTML = ['<iframe src="', a, '" name="ifr_300x60ad', c, '" id="ifr_300x60ad', c, '" width="300" height="60" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("");
            Hq()
        }
        function Jq(a) {
            var b = H("watch-longform-ad-placeholder");
            a ? (U("instream_google_companion_ad_div"),
            T("watch-longform-ad"),
            T("watch-longform-text"),
            T("watch-longform-ad-placeholder"),
            b.innerHTML = a) : U("watch-longform-ad");
            Hq()
        }
        function Kq(a, b) {
            var c = "watch-channel-brand-div"
              , d = "ad300x250"
              , e = 300
              , f = 250;
            "video" == a && (c = "watch-longform-ad",
            d = "watch-longform-ad-placeholder",
            e = 300,
            f = 60,
            U("instream_google_companion_ad_div"));
            var g = decodeURIComponent(b);
            H(d).innerHTML = ['<iframe name="fw_ad" id="fw_ad" ', 'width="' + e + '" height="' + f + '" ', 'marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("");
            var j = H("fw_ad")
              , j = j.contentWindow ? j.contentWindow : j.contentDocument.document ? j.contentDocument.document : j.contentDocument
              , e = navigator.userAgent.toLowerCase()
              , d = -1 != e.indexOf("msie")
              , e = -1 != e.indexOf("opera");
            j.document.open();
            j.document.write(g);
            d || e ? N(function() {
                j.document.close()
            }, 7500) : j.document.close();
            T(c);
            Hq()
        }
        function Lq() {
            T("watch-channel-brand-div");
            U("ad300x250");
            H("google_companion_ad_div").style.height = "250px";
            Hq()
        }
        function Mq() {
            U("watch-longform-ad");
            Hq()
        }
        function Nq() {
            U("watch-channel-brand-div");
            Hq()
        }
        function Hq() {
            sf("watchads-adLoad")
        }
        function Oq(a) {
            ad("POPOUT_AD_SLOTS", a)
        }
        function Pq() {
            var a = H("watch-longform-popup");
            a && (a.disabled = k)
        }
        function Qq(a) {
            var b = H("watch-longform-popup");
            b && (b.disabled = m);
            Oq(a)
        }
        function Rq(a) {
            window.google_ad_output = "html";
            a ? (window.google_ad_height = "60",
            window.google_ad_format = "300x60_as",
            window.google_container_id = "instream_google_companion_ad_div") : (window.google_ad_height = "250",
            window.google_ad_format = "300x250_as",
            window.google_container_id = "google_companion_ad_div")
        }
        function Sq(a) {
            a ? (U("watch-longform-ad-placeholder"),
            U("watch-channel-brand-div"),
            T("watch-longform-text"),
            T("watch-longform-ad"),
            T("instream_google_companion_ad_div")) : (U("ad300x250"),
            U("watch-longform-ad"),
            T("google_companion_ad_div"),
            T("watch-channel-brand-div"));
            Hq()
        }
        function Tq() {
            U("instream_google_companion_ad_div");
            U("watch-longform-text");
            U("watch-longform-ad-placeholder");
            Hq()
        }
        ;t("yt.www.watch.ads.setAdId", function(a) {
            window.ad_debug = a
        });
        t("yt.www.watch.ads.showForcedMpu", function(a) {
            H("ad300x250").innerHTML = ['<iframe src="', a, '" name="ifr_300x250ad" id="ifr_300x250ad" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("");
            T("ad300x250")
        });
        t("yt.www.watch.ads.handleMoveGutCompanion", function(a) {
            var a = a ? H("instream_google_companion_ad_div") : H("google_companion_ad_div")
              , b = H("yt-gut-content");
            b ? b.innerHTML = "" : (b = document.createElement("div"),
            b.id = "yt-gut-content");
            a && (a.innerHTML = "",
            a.appendChild(b));
            Hq()
        });
        t("yt.www.watch.ads.setGutSlotSizes", function(a, b) {
            var c = L("gut_slot");
            c && (c = c.getSizes(),
            Ra(c),
            b && c.push(L("yt_gut_invideo_size")),
            a && c.push(L("yt_gut_instream_size")))
        });
        t("yt.www.watch.ads.handleSetCompanion", Gq);
        t("yt.www.watch.ads.handleSetCompanionForInstream", Iq);
        t("yt.www.watch.ads.handleSetCompanionForLongform", Jq);
        t("yt.www.watch.ads.handleSetCompanionForFreewheel", Kq);
        t("yt.www.watch.ads.handleHideCompanion", Lq);
        t("yt.www.watch.ads.handleHideCompanionForInstream", Mq);
        t("yt.www.watch.ads.disablePopoutButton", Pq);
        t("yt.www.watch.ads.enablePopoutButton", Qq);
        t("yt.www.watch.ads.handleCloseMpuCompanion", Nq);
        t("yt.www.watch.ads.updatePopoutAds", Oq);
        t("yt.www.watch.ads.handleSetAfvCompanionVars", Rq);
        t("yt.www.watch.ads.handleShowAfvCompanionAdDiv", Sq);
        t("yt.www.watch.ads.handleHideAfvInstreamCompanionAdDiv", Tq);
        t("yt.www.watch.ads.AD_LOAD_TOPIC", "watchads-adLoad");
        t("yt.www.ads.pyv.pyvWatchAfcWithPpvCallback", function(a) {
            xq(a);
            yq()
        });
        t("yt.www.ads.pyv.pyvWatchAfcCallback", xq);
        t("yt.www.ads.pyv.pyvSearchRhsAfcCallback", function(a) {
            var b = H("pyv-ads");
            0 != a.length && b && Bq(a, b, "search_rhs")
        });
        t("yt.www.ads.pyv.pyvSearchTopAfcCallback", function(a) {
            var b = H("pyv-top-ads");
            !a.length || !b ? Aq(b) : Bq(a, b, "search_top")
        });
        t("yt.www.ads.pyv.pyvHomeAfcCallback", Dq);
        t("yt.www.ads.pyv.showPpvAdInYvaSpot", vq);
        t("yt.www.ads.pyv.pyvHomeRequestAds", Cq);
        t("yt.www.ads.pyv.pyvBrowseRequestAds", Eq);
        t("yt.www.ads.pyv.showPpvOnWatch", yq);
        t("yt.www.ads.pyv.loadPyvIframe", function(a) {
            var b = window.location.href;
            b.indexOf("#") == b.length - 1 && Eb && (window.location.hash = "#!");
            var b = document.body
              , c = Vb(b)
              , d = [];
            d.push("<!DOCTYPE html>");
            d.push("<html><head>", a, "</head><body>", i, "</body></html>");
            a = c.Od("iframe", {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;",
                src: 'javascript:""'
            });
            b.appendChild(a);
            b = d.join("");
            a = a.contentDocument || a.contentWindow.document;
            a.open();
            a.write(b);
            a.close()
        });
        t("yt.www.ads.pyv.loadPyvAfsScript", function(a) {
            Ag("/pyv_afs_ads?query=" + a)
        });
        dd("pyv_related_box_id");
        t("setCompanion", Gq);
        t("setInstreamCompanion", Iq);
        t("setLongformCompanion", Jq);
        t("setFreewheelCompanion", Kq);
        t("closeInPageAdIframe", Lq);
        t("hideInstreamCompanion", Mq);
        t("disablePopout", Pq);
        t("enablePopout", Qq);
        t("closeMpuCompanion", Nq);
        t("updatePopAds", Oq);
        t("setAfvCompanionVars", Rq);
        t("showAfvCompanionAdDiv", Sq);
        t("hideAfvInstreamCompanionAdDiv", Tq);
        t("show_ppv_in_yva_spot", vq);
        t("requestPyvAds", Cq);
        t("pyvHomeRequestAds", Cq);
        t("pyvBrowseRequestAds", Eq);
        window.yt = window.yt || {};
        t("_gel", H);
        t("_hasclass", A);
        t("_addclass", x);
        t("_removeclass", y);
        t("_toggleclass", gb);
        t("_showdiv", T);
        t("_hidediv", U);
        t("_togglediv", De);
        t("_ajax", lg);
        t("goog.bind", s);
        t("goog.dom.getElementsByTagNameAndClass", function(a, b, c) {
            return J(a, b, c)
        });
        t("goog.dom.getFirstElementChild", mc);
        t("goog.array.forEach", w);
        t("goog.array.indexOf", Ka);
        t("goog.array.contains", Qa);
        t("yt.dom.hasAncestor", function(a, b, c) {
            a = H(a);
            b = H(b);
            return !!xc(a, function(a) {
                return a === b
            }, k, c)
        });
        t("yt.setConfig", ad);
        t("yt.getConfig", L);
        t("yt.setAjaxToken", cd);
        t("yt.registerGlobal", dd);
        t("yt.setTimeout", N);
        t("yt.setInterval", ed);
        t("yt.clearTimeout", fd);
        t("yt.clearInterval", gd);
        t("yt.setMsg", function(a) {
            bd(Yc, arguments)
        });
        t("yt.setGoogMsg", function(a) {
            bd(Yc, arguments)
        });
        t("yt.getMsg", O);
        t("yt.events.listen", R);
        t("yt.events.unlisten", Hd);
        t("yt.events.stopPropagation", Jd);
        t("yt.events.preventDefault", Kd);
        t("yt.events.getTarget", Id);
        t("yt.events.clear", function() {
            for (var a in Ad)
                S(a)
        });
        t("yt.events.Event", yd);
        yd.prototype.preventDefault = yd.prototype.preventDefault;
        yd.prototype.stopPropagation = yd.prototype.stopPropagation;
        t("yt.pubsub.subscribe", qf);
        t("yt.pubsub.unsubscribeByKey", rf);
        t("yt.pubsub.publish", sf);
        t("yt.www.init", oq);
        t("yt.www.dispose", pq);
        R(window, "load", oq);
        R(window, "unload", pq);
        t("yt.www.logError", qq);
        window.onerror = qq;
        t("yt.uix.FormInput.selectOnChangeActionIE", function(a) {
            Yk.getInstance().ab(a)
        });
        qf("init", Zk);
        t("goog.i18n.bidi.isRtlText", Uc);
        t("goog.i18n.bidi.setDirAttribute", function(a, b) {
            var c = b.value
              , d = "";
            Uc(c) ? d = "rtl" : Uc(c) || (d = "ltr");
            b.dir = d
        });
        t("yt.style.toggle", De);
        t("yt.style.setDisplayed", ze);
        t("yt.style.isDisplayed", Ae);
        t("yt.style.setVisible", Ce);
        t("yt.net.ajax.sendRequest", qg);
        t("yt.net.ajax.getRootNode", og);
        t("yt.net.ajax.getNodeValue", rg);
        t("yt.net.delayed.register", xg);
        t("yt.net.delayed.load", zg);
        t("yt.net.delayed.markAsLoaded", function(a) {
            a in vg && (wg[a] = k)
        });
        t("yt.net.scriptloader.load", Ag);
        t("goog.dom.forms.getFormDataString", Nc);
        t("yt.uri.buildQueryData", Ne);
        t("yt.uri.appendQueryData", Re);
        t("yt.www.feedback.start", function(a, b, c, d) {
            try {
                var c = (c || "59") + ""
                  , b = b || {}
                  , e = L("SESSION_INDEX");
                try {
                    var f = Nj();
                    f && f.pauseVideo();
                    var g = bf.getInstance();
                    b.flashVersion = [g.Q, g.ya, g.$a].join(".")
                } catch (j) {}
                a = {
                    productId: c,
                    locale: a,
                    abuseLink: ""
                };
                e && (a.authuser = e + "");
                d && (a.bucket = d);
                Sp(a, b);
                return m
            } catch (o) {
                return k
            }
        });
        t("yt.www.feedback.displayLink", eq);
        qf("init", eq);
        t("yt.www.help.bootstrap.init", fq);
        qf("init", fq);
        t("yt.net.cookies.set", Td);
        t("yt.net.cookies.get", Ud);
        t("yt.net.cookies.remove", Vd);
        t("yt.window.redirect", Mh);
        t("yt.window.popup", Nh);
        Pg(Sg);
        Pg(Mk);
        Pg(Vk);
        Pg(Xk);
        Pg(Yk);
        Pg(dh);
        Pg($k);
        Pg(Rh);
        Pg(bl);
        Pg(cl);
        Pg(Pi);
        Pg(dl);
        Pg(Eh);
        t("yt.player.update", function(a, b, c) {
            return xk(a, b, {
                force: c
            })
        });
        t("yt.player.embed", xk);
        t("yt.flash.embed", jf);
        t("onYouTubePlayerReady", function() {
            jp = k;
            var a = Nj();
            a && tp(a)
        });
        t("yt.www.watch.activity.getTimeSinceActive", go);
        t("yt.www.watch.activity.setTimestamp", fo);
        t("yt.www.watch.player.handleEndPreview", function(a, b) {
            var c = Nj();
            c && c.stopVideo && c.stopVideo();
            if (c = H("watch-checkout-offers"))
                sf("checkout-init-purchase", a, c),
                sf("ypc-init-purchase", c, b)
        });
        t("yt.www.watch.player.openPopup", function(a, b, c) {
            var d = l
              , e = Nj()
              , a = "/watch_popup?v=" + a;
            e && (a += "&vq=" + e.getPlaybackQuality(),
            d = Math.round(e.getCurrentTime()),
            e.stopVideo());
            L("POPOUT_AD_SLOTS") && (a += "&pop_ads=" + L("POPOUT_AD_SLOTS"));
            d && 10 < d && (a += "#t=" + d);
            Nh(a, {
                width: b,
                height: c,
                resizable: k,
                location: m,
                statusbar: m,
                menubar: m,
                scrollbars: m,
                toolbar: m
            })
        });
        t("yt.www.watch.activity.init", bo);
        t("yt.www.watch.player.updateConfig", function(a) {
            var a = a instanceof Ye ? a.args : a.args, b = m, c;
            c = L("CONVERSION_CONFIG_DICT");
            if (!c || !c.socialEnabled)
                c = l;
            else {
                var d, e = c.oeid, f = window.location.hash;
                d = Qe(f);
                var g = window.location, j, e = {
                    oeid: e
                }, o = "";
                "#" == f.charAt(0) && (o = "!" == f.charAt(1) ? f.substr(0, 2) : f.substr(0, 1));
                f = Qe(f);
                for (j in e)
                    f[j] = e[j];
                j = o + Ne(f);
                g.hash = j;
                d = d.oeid;
                c = c.ieid = d
            }
            c && (a.ieid = c,
            b = k);
            d = Qe(window.location.hash);
            (c = d.t || d.at) ? (mp.t = d.t,
            mp.at = d.at,
            d = window.location.hash.replace(/\bat=[^&]*&?/, ""),
            window.location.hash = d && "#" != d ? d : "#!",
            c = Cp(c)) : c = 0;
            c && (a.start = c,
            a.resume = 1,
            b = k);
            return b
        });
        t("yt.www.watch.player.init", function() {
            Bp();
            ed(Bp, 1E3)
        });
        t("yt.www.watch.player.seekTo", Ap);
        t("openFull", function() {
            Nh("/watch_popup?v=" + L("VIDEO_ID"), {
                target: "FullScreenVideo",
                width: screen.availWidth,
                height: screen.availHeight,
                resizable: k,
                fullscreen: k
            })
        });
        t("checkCurrentVideo", function(a, b, c) {
            var d = L("VIDEO_ID")
              , e = d == a
              , f = yj ? wj().Fa() : l
              , b = !b || b == f;
            if (d && (!e || !b))
                d = l,
                b && (d = wj(),
                e = ei(d.g, [a])[0],
                d = e === i ? "" : ii(d.g, e)),
                d || (d = c ? c : Te(window.location.href, {
                    v: a,
                    feature: l
                })),
                d && Mh(d)
        });
        t("trackAnnotationsEvent", function(a, b, c) {
            var d = L("ANALYTICS_ANNOTATIONS_TRACKER");
            window._gaq.push(function() {
                d._trackEvent(a, b, c)
            })
        });
        t("reportFlashTiming", function() {});
        t("reportTimingMaps", function(a, b) {
            for (var c in a)
                $.le(c, a[c]);
            for (var d in b)
                $.info(d, b[d]);
            $.Pc()
        });
        t("yt.www.watch.playlists.editAnnotation", function() {
            z(H("watch-video-annotation-editable"), "not-editing", "editing");
            H("watch-video-annotation-textarea").focus();
            var a = H("watch-video-annotation-form");
            Q(a, "setup") || (P(a, "setup", "true"),
            a = K("cancel-button", a),
            R(a, "click", function(a) {
                a.preventDefault();
                Op()
            }))
        });
        t("yt.www.watch.playlists.removeAnnotation", function() {
            var a = H("watch-video-annotation-form");
            H("watch-video-annotation-textarea").value = "";
            Pp(a)
        });
        t("yt.www.watch.playlists.submitForm", function(a) {
            Pp(a)
        });
        t("yt.www.watch.abandonment.init", function(a, b) {
            Ep = a;
            Fp = b;
            var c = L("PLAYER_CONFIG")
              , c = new Ye(c);
            kf(function(a) {
                var e = $.timer || {};
                e.start && a.isSupported(c.minVersion) && (Hp = e.start,
                jp ? Ip(Nj()) : np.Qb("READY_STATE_TOPIC", Ip),
                R(window, "beforeunload", Np),
                a = na() - Hp,
                a = b - a,
                0 <= a && (Gp = N(Mp, a),
                Lp("attempt")));
                Dp = k
            })
        });
        t("yt.history.enable", function(a, b) {
            var c = $f(b);
            c.setEnabled.call(c, k, a)
        });
        t("yt.history.disable", function() {
            var a = $f();
            a.setEnabled.call(a, m)
        });
        t("yt.www.lists.addto.toggleMenu", function(a, b) {
            var c = Eh.getInstance()
              , d = Y(c)
              , e = H("shared-addto-menu");
            if (b) {
                var f = K("addto-menu", e);
                Gh(c, a);
                on = y(a, d);
                nn || (nn = f.innerHTML);
                c = Q(e, "video-ids");
                d = Q(a, "video-ids");
                pn && x(e, "lightweight-panel");
                A(a, "flip") && x(e, "flip");
                d && c != d && (P(e, "video-ids", d),
                f.innerHTML = nn,
                new qn(a))
            } else
                on && x(a, d),
                y(e, "flip")
        });
        t("yt.www.lists.data.addto.saveToWatchLater", function(a, b) {
            Ql(a, b, function(b, d) {
                var e = d.list_id || ""
                  , f = [a]
                  , g = O("PLAYLIST_BAR_ADDED_TO_PLAYLIST");
                Aj("WL", e, f, g)
            })
        });
        t("yt.www.lists.addtowatchlater.init", function() {
            Kg("addto-watch-later-button", "click", An);
            Kg("addto-watch-later-button-success", "click", Dn)
        });
        t("yt.www.watch.watch5.enableWide", Fj);
        t("yt.www.watch.watch5.handleResize", function() {
            fd(Dj);
            Dj = N(Gj, 200)
        });
        t("yt.www.watch.watch5.updatePlayerSize", Gj);
        t("yt.www.watch.watch5.handleLoadMoreRelated", function() {
            U("watch-more-related-button");
            T("watch-more-related", "watch-more-related-loading");
            W("/related_ajax", {
                n: {
                    video_id: L("VIDEO_ID"),
                    action_more_related_videos: 1
                },
                j: function(a, b) {
                    var c = H("watch-more-related");
                    c.innerHTML = b.html;
                    Ci(c)
                }
            })
        });
        t("yt.www.watch.watch5.handleYouTubeMix", function() {
            var a = H("youtube-mix-button");
            a.disabled = k;
            W("/music_ajax", {
                n: {
                    video_id: L("VIDEO_ID"),
                    artist_id: L("ARTIST_ID"),
                    action_get_mix: 1
                },
                j: function(b, c) {
                    a.disabled = m;
                    if ("" != c.list_id) {
                        var d = wj()
                          , e = new Zh("TL",c.list_id);
                        dj(d, e);
                        e.L = 0;
                        d.Wa(k);
                        gj(d, k);
                        ej(d)
                    }
                }
            })
        });
        t("yt.www.watch.watch5.handleToggleMoreFromUser", function(a) {
            var b = H("watch-mft-button");
            b && (B(b, "yt-uix-expander-collapsed", k),
            B(b, "yt-uix-button-toggled", m));
            (b = H("watch-more-from-topic")) && B(b, "collapsed", k);
            var b = A(a, "yt-uix-expander-collapsed")
              , c = H("watch-more-from-user");
            !b && "true" != Q(c, "loaded") && (a = {
                user_id: Q(a, "video-user-id"),
                video_id: Q(a, "video-id"),
                action_channel_videos: 1
            },
            W("/watch_ajax", {
                format: "XML",
                method: "GET",
                n: a,
                j: function(a, b) {
                    c.innerHTML = b.html_content;
                    P(c, "loaded", "true");
                    Ci(c);
                    var f = parseInt(Q(H("watch-channel-discoverbox"), "slider-slide-selected"), 10);
                    J("button", "yt-uix-slider-num", i)[f].click()
                }
            }));
            B(c, "collapsed", b)
        });
        t("yt.www.watch.watch5.handleToggleMoreFromTopic", function(a) {
            var b = H("watch-mfu-button");
            b && (B(b, "yt-uix-expander-collapsed", k),
            B(b, "yt-uix-button-toggled", m));
            (b = H("watch-more-from-user")) && B(b, "collapsed", k);
            var b = A(a, "yt-uix-expander-collapsed")
              , c = H("watch-more-from-topic");
            !b && "true" != Q(c, "loaded") && (a = {
                topic_id: Q(a, "topic-id"),
                action_topic_videos: 1
            },
            W("/watch_ajax", {
                format: "XML",
                method: "GET",
                n: a,
                j: function(a, b) {
                    c.innerHTML = b.html_content;
                    P(c, "loaded", "true");
                    Ci(c);
                    var f = parseInt(Q(H("watch-channel-discoverbox"), "slider-slide-selected"), 10);
                    J("button", "yt-uix-slider-num", i)[f].click()
                }
            }));
            B(c, "collapsed", b)
        });
        t("yt.www.watch.watch5.handleToggleDescription", function(a) {
            if (A(a, "yt-uix-expander-collapsed"))
                X("descriptionClosed", i, i);
            else {
                if ((a = H("watch-source-videos-list")) && "true" != Q(a, "loaded")) {
                    P(a, "loaded", "true");
                    var b = Re("/watch_ajax", {
                        action_get_video_attributions_component: 1,
                        v: L("VIDEO_ID")
                    });
                    qg(b, {
                        method: "GET",
                        update: a
                    })
                }
                X("descriptionOpened", i, i)
            }
        });
        t("yt.www.watch.watch5.purchaseComplete", function() {
            T(H("watch-player-rental-play-button"));
            var a = H("watch-player-rental-still-frame");
            U(Kj());
            T(a)
        });
        t("yt.www.watch.actions.init", function() {
            Tm();
            var a = Qe(window.location.hash)
              , b = a.action;
            if (b) {
                switch (b) {
                case "flag":
                    dn()
                }
                N(function() {
                    Um("watch-actions-area-container").scrollIntoView()
                }, 0);
                delete a.action;
                a = Ne(a) || "#!";
                window.location.hash = a
            }
        });
        t("yt.www.watch.actions.loadPlusoneLike", function(a, b, c, d, e) {
            new mm(H(a),b,c,d,e,{
                size: "large",
                source: "google:youtube:watch_exp"
            })
        });
        t("yt.www.watch.shortcuts.init", function() {
            R(document, "keypress", Qp)
        });
        t("yt.www.watch.actions.captions", function(a) {
            en(a) && (an(),
            Jm(function() {
                U("watch-actions-loading");
                Zm("watch-actions-captions")
            }))
        });
        t("yt.www.watch.actions.flag", dn);
        t("yt.www.watch.actions.hide", function() {
            $m()
        });
        t("yt.www.watch.actions.like", function(a) {
            $m();
            var b = 0 == Vm();
            Xm(b ? 2 : 0, a)
        });
        t("yt.www.watch.actions.share", kn);
        t("yt.www.watch.actions.shareWithPlaylist", function() {
            var a = hn()
              , b = jn();
            ln(a, b)
        });
        t("yt.www.watch.actions.addto", function(a) {
            if (en(a) && !Ym(a)) {
                an();
                var a = H("watch-actions-addto")
                  , b = L("VIDEO_ID");
                Sm && Sm.ma();
                Sm = new am(a,b,function() {
                    Zm("watch-actions-addto")
                }
                )
            }
        });
        t("yt.www.watch.actions.stats", function(a) {
            en(a) && (an(),
            W("/insight_ajax", {
                format: "XML",
                method: "GET",
                n: {
                    action_get_statistics_and_data: 1,
                    v: L("VIDEO_ID")
                },
                j: function(a, c) {
                    bn(c.html_content)
                },
                B: cn
            }))
        });
        t("yt.www.watch.actions.unlike", function(a) {
            $m();
            var b = 1 == Vm();
            Xm(b ? 2 : 1, a)
        });
        t("yt.www.comments.init", function() {
            var a = H("comments-view");
            new yl(a);
            Bl.push(Gd(a, "click", Cl, "comment-action"));
            L("COMMENT_OPEN_REPLY_BOX") && (a = I("comment", H("linked-comments-header")),
            Hl(a[a.length - 1]))
        });
        t("yt.www.comments.initForm", Al);
        t("yt.www.lists.init", function() {
            if (-1 < parseInt(L("PLAYLIST_BAR_PLAYING_INDEX"), 10)) {
                wj();
                var a = L("AUTOPLAY_DELAY");
                a && zj(a)
            }
            yj = k
        });
        t("yt.www.lists.getState", function() {
            var a = vj();
            a.autoPlayMax = L("PLAY_ALL_MAX");
            return a
        });
        t("yt.www.lists.registerNearEndEventsWithPlayer", Bj);
        t("yt.www.lists.handleNearPlaybackEnd", function(a) {
            if (yj && fj(wj()) && "NEAR_END" == a.slice(0, -1)) {
                var a = parseInt(a.slice(-1), 10)
                  , b = wj();
                if (5 == a && L("PRERENDER_EXPERIMENT")) {
                    var c = document.createElement("link");
                    c.rel = "prerender";
                    c.href = ji(b.g, m, "autoplay");
                    document.getElementsByTagName("head")[0].appendChild(c)
                }
                rj(b, a)
            }
        });
        t("yt.dom.datasets.get", Q);
        t("yt.dom.datasets.set", P);
        dd("openFull", "checkCurrentVideo", "trackAnnotationsEvent", "reportFlashTiming", "shareVideoFromFlash", "setCompanion", "setInstreamCompanion", "setLongformCompanion", "setFreewheelCompanion", "closeInPageAdIframe", "hideInstreamCompanion", "disablePopout", "enablePopout", "closeMpuCompanion", "updatePopAds", "setAfvCompanionVars", "showAfvCompanionAdDiv", "hideAfvInstreamCompanionAdDiv", "show_ppv_in_yva_spot", "requestPyvAds", "pyvHomeRequestAds", "pyvBrowseRequestAds", "showGutCompanion");
        t("yt.www.search.init", function() {
            Gd(H("search-footer-box"), "mouseover", function() {}, "yt-uix-pager-page-num")
        });
        t("yt.www.search.legos.toggleExpandedRefinements", function() {
            Be(H("search-lego-refinements"));
            return m
        });
        t("yt.www.search.toggleToolbelt", function() {
            var a = H("toolbelt-top")
              , b = H("search-option-expander")
              , c = !A(b, "expanded");
            B(b, "expanded", c);
            c ? (T(a),
            a.style.height = H("toolbelt-container").offsetHeight + "px") : (a.style.height = 0,
            N(function() {
                U(a)
            }, 300));
            return m
        });
        t("yt.www.thumbnaildelayload.init", function(a) {
            vi = a || 0;
            ui = cc(document).y + $b(window).height + vi;
            yi = k;
            Ei(i, i);
            Bi();
            R(window, "scroll", zi);
            R(window, "resize", zi)
        });
        t("yt.www.xsrf.populateSessionToken", function() {
            for (var a = 0; a < document.forms.length; a++) {
                for (var b = m, c = 0; c < sq.length; c++)
                    document.forms[a].name == sq[c] && (b = k);
                c = document.forms[a];
                if ("post" == c.method.toLowerCase() && b == m) {
                    for (var b = m, d = 0; d < c.elements.length; d++)
                        c.elements[d].name == L("XSRF_FIELD_NAME") && (b = k);
                    b || (b = i,
                    b = L("XSRF_TOKEN"),
                    d = document.createElement("input"),
                    d.setAttribute("name", L("XSRF_FIELD_NAME")),
                    d.setAttribute("type", "hidden"),
                    d.setAttribute("value", b),
                    c.appendChild(d))
                }
            }
        });
        t("yt.www.masthead.performSearch", function(a, b) {
            var c = H("masthead-search")
              , d = Q(b, a) || "";
            "rentals" == d ? (c.rental.value = 1,
            c.search_type.value = "") : (c.search_type.value = d,
            c.rental.value = 0);
            if (c.search_query.value)
                c.submit();
            else {
                var c = b.innerHTML
                  , e = H("search-btn")
                  , f = e.innerHTML
                  , g = Q(e, a) || "";
                e.innerHTML = c;
                P(e, a, d);
                b.innerHTML = f;
                P(b, a, g)
            }
            return m
        });
        t("yt.www.masthead.loadPicker", function(a, b, c) {
            var d = H(a);
            d ? c ? T(d) : De(d) : (d = document.createElement("div"),
            d.id = a,
            U(d),
            H("picker-container").appendChild(d),
            c = "/masthead_ajax?action_get_" + a.replace("-", "_") + "=1",
            b && (c = b + c),
            qg(c, {
                method: "GET",
                update: a,
                onComplete: function() {
                    U("picker-loading");
                    T(a);
                    H(a).scrollIntoView()
                }
            }),
            T("picker-loading"));
            x(d, "yt-tile-static");
            ro(a);
            H(a).scrollIntoView()
        });
        t("yt.www.masthead.dismissGAPlusMessage", function() {
            var a = Ud("FML", "").split(",")
              , b = new Date
              , b = Math.round(b.getTime() / 1E3)
              , c = ""
              , c = 2 != a.length ? "1," + b : parseInt(a[0], 10) + 1 + "," + b;
            Td("FML", c, 31536E4)
        });
        t("yt.www.masthead.dismissPostLinkingMessage", function() {
            Vd("FML")
        });
        t("yt.www.masthead.toggleExpandedMasthead", function() {
            var a = H("masthead-expanded");
            Be(a);
            ze("masthead-expanded-menu", k);
            ze("masthead-expanded-acct-sw-container", m);
            En || y(H("masthead-expanded-container"), "accountswitch");
            if (!Q(a, "loaded")) {
                var b = H("masthead-expanded-menu-gaia-photo");
                b && !b.src && (b.src = Q(b, "src"));
                W("/playlist_bar_ajax", {
                    n: {
                        action_get_playlists_masthead: 1,
                        feature: "mhee"
                    },
                    format: "JSON",
                    sb: k,
                    j: function(b, d) {
                        H("masthead-expanded-lists-container").innerHTML = d.html;
                        P(a, "loaded", "true")
                    }
                })
            }
        });
        t("yt.www.masthead.accountswitch.init", function(a) {
            En = a
        });
        t("yt.www.masthead.accountswitch.toggle", function() {
            Be("masthead-expanded-acct-sw-container");
            var a = H("masthead-expanded-container")
              , b = H("masthead-expanded-acct-sw-container");
            if (Ae(b)) {
                b.style.top = a.offsetTop + "px";
                D && (G("7") && !G("8")) && (b.style.top = a.offsetTop - (b.offsetTop - a.offsetTop) + "px");
                b = H("masthead-expanded-menu-acct-sw-list");
                b.offsetHeight < a.offsetHeight && (b.style.height = a.offsetHeight - 11 + "px");
                var c = H("masthead-expanded-acct-sw-iframe");
                if (!c) {
                    var d = H("masthead-expanded-menu-acct-sw-list")
                      , c = dc("iframe", {
                        id: "masthead-expanded-acct-sw-iframe",
                        frameborder: 0,
                        src: 'javascript:""'
                    });
                    d.parentNode && d.parentNode.insertBefore(c, d)
                }
                c.style.height = b.offsetHeight - 11 + "px";
                En || x(a, "accountswitch")
            } else
                En || y(a, "accountswitch")
        });
        t("yt.www.masthead.initSandbar", function(a, b) {
            $n("iframes", {
                callback: function() {
                    var c = H("sb-button-notify")
                      , d = H("sb-button-share")
                      , e = new mo(a,b);
                    R(c, "click", s(e.Zg, e));
                    R(d, "click", s(e.$g, e));
                    sf("sandbar-init")
                },
                _c: {
                    jsl: {
                        h: L("GAPI_HINT_PARAMS")
                    }
                }
            })
        });
        t("yt.www.ads.MastheadAd", ml);
        ml.prototype.autoCollapsePremiumYva = ml.prototype.ah;
        ml.prototype.collapse_ad = ml.prototype.eh;
        ml.prototype.expand_ad = ml.prototype.fh;
        ml.prototype.userCollapsePremiumYva = ml.prototype.ld;
        ml.prototype.userExpandPremiumYva = ml.prototype.bh;
        ml.prototype.userUnexpandPremiumYva = ml.prototype.dh;
        t("yt.www.home.ads.workaroundIE", function(a) {
            !Pl && Ol && (Pl = k,
            N(function() {
                a.focus()
            }, 0))
        });
        t("yt.www.home.ads.workaroundLoad", function() {
            Ol = k
        });
        t("yt.www.home.ads.workaroundReset", function() {
            Pl = m
        });
        t("yt.www.home.ads.writeAdsContentToIframe", function(a, b) {
            var c = H(a).contentDocument || H(a).contentWindow.document;
            c.open();
            c.write("<!DOCTYPE html><html><head></head><body>" + b + "</body></html>");
            D || c.close()
        });
        t("yt.www.home.ads.yvaCollapse", function() {
            var a = H("yva-bin");
            if (a) {
                var b = H("yva-bg");
                b && z(b, "yva-360-bg", "yva-250-bg");
                z(a, "yva-expanded", "yva-collapsed")
            }
        });
        t("yt.www.home.ads.yvaExpand", function() {
            var a = H("yva-bin");
            a && z(a, "yva-collapsed", "yva-expanded")
        });
        t("yt.www.usercard.show", function(a, b) {
            var c = Q(b, "id")
              , c = {
                method: "POST",
                S: ma(mq, a, b),
                D: {
                    user_id: c,
                    session_token: M("user_details_ajax")
                }
            };
            W("/user_details_ajax", c);
            P(a, "card-action", "")
        });
        t("yt.tracking.doubleclick.trackActivity", function(a, b, c) {
            a = ("https:" == document.location.protocol ? "https://" : "http://") + "fls.doubleclick.net/activityi;src=" + encodeURIComponent("" + L("DBLCLK_ADVERTISER_ID")) + ";type=" + encodeURIComponent("" + a) + ";cat=" + encodeURIComponent("" + b);
            c && !c.ord && (a += ";ord=1");
            for (var d in c)
                a += ";" + encodeURIComponent("" + d) + "=" + encodeURIComponent("" + c[d]);
            a += ";num=" + na();
            c = document.createElement("iframe");
            c.src = a;
            c.style.display = "none";
            document.body.appendChild(c)
        });
        t("yt.tracking.track", function(a, b, c) {
            X(a, b, c)
        });
        t("yt.tracking.resolution", function() {
            var a = "CSS1Compat" == document.compatMode ? document.documentElement : document.body
              , a = Ne({
                a: "resolution",
                width: screen.width,
                height: screen.height,
                depth: screen.colorDepth,
                win_width: a.clientWidth,
                win_height: a.clientHeight
            });
            Eg("/gen_204?" + a, i)
        });
        t("yt.tracking.share", Fg);
        t("yt.tracking.conversion.init", function(a) {
            Ph = a
        });
        t("yt.analytics.urchinTracker", function() {});
        t("yt.analytics.trackEvent", jd);
        t("yt.timing.report", $.cc);
        t("yt.timing.maybeReport", $.Pc);
        t("yt.timing.handlePageLoad", $.qe);
        qf("init", $.qe);
        hd && (!document.documentMode || 8 > document.documentMode) && Gd(H("ie"), "click", Oj, "video-thumb");
        t("yt.www.subscriptions.edit.onUpdateSubscription", function(a, b, c, d) {
            var c = c || ""
              , e = m;
            (b = H("subscription_level_unsubscribe")) && b.checked && (e = k);
            b = Nc(H("subscription_level_uploads" + c).form);
            qg("/ajax_subscriptions?" + b, {
                postBody: "session_token=" + a,
                onComplete: function(a) {
                    H("subscribeMessage" + c).innerHTML = rg(og(a), "html_content");
                    U("edit_subscription_wrapper" + c);
                    U("edit_subscription_arrow" + c);
                    T("subscribeMessage" + c);
                    c && (H("edit_subscription_opener" + c).style.visibility = "",
                    N(function() {
                        U("subscribeMessage" + c)
                    }, 5E3));
                    if (e) {
                        var b = H("channel-body")
                          , a = J("div", "subscribe-div", b)
                          , b = J("div", "unsubscribe-div", b);
                        w(a, function(a) {
                            De(a)
                        });
                        w(b, function(a) {
                            De(a)
                        });
                        d()
                    }
                }
            })
        });
        t("yt.www.subscriptions.edit.onCancelUpdateSubscription", function(a) {
            a = a || "";
            U("edit_subscription_wrapper" + a);
            U("edit_subscription_arrow" + a);
            a && (H("edit_subscription_opener" + a).style.visibility = "");
            U("alerts")
        });
        t("yt.www.subscriptions.edit.onEditSubscriptionFromRecentActivity", function(a, b, c, d) {
            window["edit_subscription_download_" + c] ? (U("subscribeMessage" + c),
            De("edit_subscription_wrapper" + c),
            De("edit_subscription_arrow" + c),
            a = H("edit_subscription_opener" + c),
            a.style.visibility = "visible" == a.style.visibility ? "" : "visible") : (window["edit_subscription_download_" + c] = k,
            qg("/ajax_subscriptions?get_edit_subscription_form=" + b + "&i=" + c, {
                postBody: "session_token=" + a,
                onComplete: function(a) {
                    H("edit_subscription_opener" + c).style.visibility = "visible";
                    var b = document.createElement("div");
                    b.innerHTML = rg(a.responseXML, "html_content");
                    d.parentNode.insertBefore(b, d);
                    T("edit_subscription_wrapper" + c);
                    T("edit_subscription_arrow" + c)
                }
            }))
        });
        t("yt.www.subscriptions.SubscriptionButton.init", Wo);
        t("yt.www.subscriptions.button.subscribe", function(a) {
            var b = Fo(a)
              , c = Q(b, "subscription-type")
              , d = Q(b, "subscription-xsrf") || ""
              , e = Q(b, "subscription-menu-type")
              , f = Q(b, "subscription-channels-container")
              , g = Q(b, "subscription-feature")
              , j = Q(b, "subscription-value")
              , o = {};
            "playlist" == c ? (o.action_create_subscription_to_playlist = 1,
            c = "p") : "blog" == c ? (o.action_create_subscription_to_blog = 1,
            c = "b") : "topic" == c ? (o.action_create_subscription_to_topic = 1,
            c = "l") : (o.action_create_subscription_to_user = 1,
            c = "u");
            g && (o.feature = g);
            a.disabled = k;
            xo(d);
            d = new vo(Oo,So);
            wo(d, o);
            o = {};
            o[c] = j;
            o.menu_type = e;
            (e = L("PLAYBACK_ID")) && (o.plid = e);
            f && (o.show_channels = k);
            d.bb = o || {};
            d.userData.eventTrigger = a;
            d.userData.subscription = b;
            Ao(d);
            Qh("subscribe")
        });
        t("yt.www.subscriptions.button.subscribeToCollection", function(a) {
            for (var b = Jo(a), c = yc(a, "subscription-recommendations"), d = Q(b, "subscription-xsrf") || "", e = [], f = J("input", "username", c), g = 0; g < f.length; g++)
                f[g].checked && e.push(f[g].value);
            0 == e.length ? lc(c) : (a.disabled = k,
            xo(d),
            d = new vo(Po,So),
            wo(d, {
                action_create_subscription_to_users: 1
            }),
            f = {},
            f.usernames = e.join(","),
            d.bb = f || {},
            d.userData.eventTrigger = a,
            d.userData.subscription = b,
            d.userData.collection = c,
            Ao(d))
        });
        t("yt.www.subscriptions.button.unsubscribe", function(a) {
            var b = Jo(a)
              , c = Q(b, "subscription-id")
              , d = Q(b, "subscription-xsrf") || ""
              , e = Q(b, "subscription-feature");
            if (!a.disabled) {
                a.disabled = k;
                xo(d);
                var d = new vo(Qo,So)
                  , f = {
                    action_remove_subscription: 1
                };
                e && (f.feature = e);
                wo(d, f);
                e = {};
                e.subscription_id = c;
                (c = L("PLAYBACK_ID")) && (e.plid = c);
                d.bb = e || {};
                d.userData.eventTrigger = a;
                d.userData.subscription = b;
                Ao(d);
                Qh("unsubscribe")
            }
        });
        t("yt.www.subscriptions.button.update", function(a) {
            var b = Jo(a)
              , c = Q(b, "subscription-id")
              , d = Q(b, "subscription-xsrf") || "";
            a.disabled = k;
            xo(d);
            var d = new vo(Ro,So)
              , e = wc(a, l, "subscription-menu-form")
              , e = Jc(Kc(e));
            e.email_on_upload || (e.email_on_upload = m);
            e.action_update_subscription_preferences = 1;
            wo(d, e);
            d.bb = {
                subscription_id: c
            };
            d.userData.eventTrigger = a;
            d.userData.subscription = b;
            Ao(d)
        });
        t("yt.www.subscriptions.button.toggleMenu", Eo);
        t("yt.www.subscriptions.button.closeMenu", function(a) {
            a = Jo(a);
            "button" == Q(a, "subscription-menu-type") ? Lo(a) : Mo(a)
        });
        t("yt.www.account.lightbox", ll);
        dd("yt", "goog", "_gel", "googleapisv0", "_hasclass", "_addclass", "_removeclass", "_showdiv", "_hidediv", "_ajax");
        t("yt.www.masthead.extended.redirectWithNewParam", function(a, b) {
            var c, d, e;
            c = window.location.href;
            c = c.split("#");
            d = 2 == c.length ? "#" + c[1] : "";
            c = c[0];
            e = Pe(c);
            e[b] = a;
            e["persist_" + b] = "1";
            c = c.split("?");
            c = c[0];
            Mh(c, e, d)
        });
        t("yt.www.insight.setOptOut", function(a) {
            var b = H("insight-optout-form");
            b && ng(b, {
                format: "XML",
                n: {
                    opt_out: a
                },
                j: function() {
                    var b = H("insight-public");
                    B(H("insight-private"), "selected", a);
                    B(b, "selected", !a)
                },
                S: function(a, b) {
                    H("insight-optout-response").innerHTML = "error_message"in b ? b.error_message : ""
                }
            })
        });
        t("yt.www.watch.survey.takeWatchPageSurvey", function() {
            Rp();
            window.open("/watch_page_survey?r2=" + L("SURVEY_REFERER") + "&r1=" + L("SURVEY_SERVLET_NAME") + "&name=" + L("SURVEY_TYPE"), "YouTube_User_Happiness_Survey", "toolbar=no,width=800,height=768,status=no,resizable=yes,fullscreen=no,scrollbars=yes").focus()
        });
        t("yt.www.watch.survey.watchPageSurveyGoAway", Rp);
        t("yt.www.watch.survey.checkSurveyCompletedAndShow", function() {
            ce(Wd.getInstance(), Sh.ne) || T("watch_page_survey")
        });
        t("yt.www.user.unblockUserLinkByExternalId", function(a, b) {
            confirm(O("UNBLOCK_USER")) && W("/link_ajax?action_unblock_user=1", {
                format: "XML",
                method: "POST",
                Ia: L("BLOCK_USER_AJAX_XSRF") + "&uid=" + a,
                j: function() {
                    b && window.location.reload()
                }
            })
        });
        t("yt.www.user.blockUserLinkByExternalId", function(a, b) {
            confirm(O("BLOCK_USER")) && W("/link_ajax?action_block_user=1", {
                format: "XML",
                method: "POST",
                Ia: L("BLOCK_USER_AJAX_XSRF") + "&uid=" + a,
                j: function() {
                    b && window.location.reload()
                }
            })
        });
        t("getNextVideoId", function(a) {
            var b = wj()
              , c = fj(b)
              , d = a <= L("PLAY_ALL_MAX");
            return c && d ? b.Cc(a) : ""
        });
        dd("getNextVideoId");
    }
    )();

}
/*
     FILE ARCHIVED ON 23:41:32 May 31, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:15:54 Nov 26, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.501
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.013
  esindex: 0.01
  cdx.remote: 8.334
  LoadShardBlock: 60.655 (3)
  PetaboxLoader3.datanode: 72.341 (4)
  load_resource: 146.43
  PetaboxLoader3.resolve: 110.027
*/
