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
        var h = void 0, l = !0, n = null, p = !1, q, r = this;
        function s(a) {
            for (var a = a.split("."), b = r, c; c = a.shift(); )
                if (b[c] != n)
                    b = b[c];
                else
                    return n;
            return b
        }
        function aa(a) {
            a.getInstance = function() {
                return a.U ? a.U : a.U = new a
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
        function v(a) {
            return a !== h
        }
        function ca(a) {
            return "array" == ba(a)
        }
        function w(a) {
            return "string" == typeof a
        }
        var da = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36)
          , ea = 0;
        function fa(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
        function ga(a, b, c) {
            if (!a)
                throw Error();
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
        function x(a, b, c) {
            x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
            return x.apply(n, arguments)
        }
        var ha = Date.now || function() {
            return +new Date
        }
        ;
        function y(a, b) {
            var c = a.split(".")
              , d = r;
            !(c[0]in d) && d.execScript && d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift()); )
                !c.length && v(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
        }
        function z(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.L = b.prototype;
            a.prototype = new c
        }
        Function.prototype.bind = Function.prototype.bind || function(a, b) {
            if (1 < arguments.length) {
                var c = Array.prototype.slice.call(arguments, 1);
                c.unshift(this, a);
                return x.apply(n, c)
            }
            return x(this, a)
        }
        ;
        function ia(a, b) {
            for (var c = 1; c < arguments.length; c++)
                var d = ("" + arguments[c]).replace(/\$/g, "$$$$")
                  , a = a.replace(/\%s/, d);
            return a
        }
        function ja(a) {
            if (!ka.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(la, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(ma, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(na, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(oa, "&quot;"));
            return a
        }
        var la = /&/g
          , ma = /</g
          , na = />/g
          , oa = /\"/g
          , ka = /[&<>\"]/;
        var B = Array.prototype
          , pa = B.indexOf ? function(a, b, c) {
            return B.indexOf.call(a, b, c)
        }
        : function(a, b, c) {
            c = c == n ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (w(a))
                return !w(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b)
                    return c;
            return -1
        }
          , C = B.forEach ? function(a, b, c) {
            B.forEach.call(a, b, c)
        }
        : function(a, b, c) {
            for (var d = a.length, e = w(a) ? a.split("") : a, f = 0; f < d; f++)
                f in e && b.call(c, e[f], f, a)
        }
          , qa = B.filter ? function(a, b, c) {
            return B.filter.call(a, b, c)
        }
        : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = w(a) ? a.split("") : a, i = 0; i < d; i++)
                if (i in g) {
                    var j = g[i];
                    b.call(c, j, i, a) && (e[f++] = j)
                }
            return e
        }
          , ra = B.map ? function(a, b, c) {
            return B.map.call(a, b, c)
        }
        : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = w(a) ? a.split("") : a, g = 0; g < d; g++)
                g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        }
        ;
        function sa(a, b) {
            var c;
            a: {
                c = a.length;
                for (var d = w(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(h, d[e], e, a)) {
                        c = e;
                        break a
                    }
                c = -1
            }
            return 0 > c ? n : w(a) ? a.charAt(c) : a[c]
        }
        function D(a, b) {
            return 0 <= pa(a, b)
        }
        function ta(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c], e, f;
                if (!(f = ca(d)))
                    e = d,
                    f = ba(e),
                    f = (e = "array" == f || "object" == f && "number" == typeof e.length) && d.hasOwnProperty("callee");
                if (f)
                    a.push.apply(a, d);
                else if (e) {
                    f = a.length;
                    for (var g = d.length, i = 0; i < g; i++)
                        a[f + i] = d[i]
                } else
                    a.push(d)
            }
        }
        function ua(a, b, c, d) {
            B.splice.apply(a, va(arguments, 1))
        }
        function va(a, b, c) {
            return 2 >= arguments.length ? B.slice.call(a, b) : B.slice.call(a, b, c)
        }
        ;var wa;
        function F(a) {
            a = a.className;
            return w(a) && a.match(/\S+/g) || []
        }
        function xa(a, b) {
            var c = F(a)
              , d = va(arguments, 1);
            ya(c, d);
            a.className = c.join(" ")
        }
        function za(a, b) {
            var c = F(a)
              , d = va(arguments, 1)
              , c = Aa(c, d);
            a.className = c.join(" ")
        }
        function ya(a, b) {
            for (var c = 0; c < b.length; c++)
                D(a, b[c]) || a.push(b[c])
        }
        function Aa(a, b) {
            return qa(a, function(a) {
                return !D(b, a)
            })
        }
        function G(a, b, c) {
            c ? xa(a, b) : za(a, b)
        }
        ;function H(a, b) {
            this.x = v(a) ? a : 0;
            this.y = v(b) ? b : 0
        }
        H.prototype.a = function() {
            return new H(this.x,this.y)
        }
        ;
        function Ba(a, b) {
            return new H(a.x - b.x,a.y - b.y)
        }
        ;function Ca(a, b) {
            this.width = a;
            this.height = b
        }
        Ca.prototype.a = function() {
            return new Ca(this.width,this.height)
        }
        ;
        Ca.prototype.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        }
        ;
        Ca.prototype.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        }
        ;
        function Da(a) {
            var b = Ea, c;
            for (c in b)
                if (a.call(h, b[c], c, b))
                    return c
        }
        var Fa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        function Ha(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d)
                    a[c] = d[c];
                for (var f = 0; f < Fa.length; f++)
                    c = Fa[f],
                    Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        }
        ;var Ia, Ja, Ka, La, Ma;
        function Na() {
            return r.navigator ? r.navigator.userAgent : n
        }
        function Oa() {
            return r.navigator
        }
        La = Ka = Ja = Ia = p;
        var Pa;
        if (Pa = Na()) {
            var Qa = Oa();
            Ia = 0 == Pa.indexOf("Opera");
            Ja = !Ia && -1 != Pa.indexOf("MSIE");
            Ka = !Ia && -1 != Pa.indexOf("WebKit");
            La = !Ia && !Ka && "Gecko" == Qa.product
        }
        var Ra = Ia
          , I = Ja
          , Sa = La
          , J = Ka
          , Ta = Oa();
        Ma = -1 != (Ta && Ta.platform || "").indexOf("Mac");
        var Ua = !!Oa() && -1 != (Oa().appVersion || "").indexOf("X11"), Va;
        a: {
            var Wa = "", Xa;
            if (Ra && r.opera)
                var Ya = r.opera.version
                  , Wa = "function" == typeof Ya ? Ya() : Ya;
            else if (Sa ? Xa = /rv\:([^\);]+)(\)|;)/ : I ? Xa = /MSIE\s+([^\);]+)(\)|;)/ : J && (Xa = /WebKit\/(\S+)/),
            Xa)
                var Za = Xa.exec(Na())
                  , Wa = Za ? Za[1] : "";
            if (I) {
                var $a, ab = r.document;
                $a = ab ? ab.documentMode : h;
                if ($a > parseFloat(Wa)) {
                    Va = "" + $a;
                    break a
                }
            }
            Va = Wa
        }
        var bb = Va
          , cb = {};
        function db(a) {
            var b;
            if (!(b = cb[a])) {
                b = 0;
                for (var c = ("" + bb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || ""
                      , i = d[f] || ""
                      , j = RegExp("(\\d*)(\\D*)", "g")
                      , m = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var k = j.exec(g) || ["", "", ""]
                          , o = m.exec(i) || ["", "", ""];
                        if (0 == k[0].length && 0 == o[0].length)
                            break;
                        b = ((0 == k[1].length ? 0 : parseInt(k[1], 10)) < (0 == o[1].length ? 0 : parseInt(o[1], 10)) ? -1 : (0 == k[1].length ? 0 : parseInt(k[1], 10)) > (0 == o[1].length ? 0 : parseInt(o[1], 10)) ? 1 : 0) || ((0 == k[2].length) < (0 == o[2].length) ? -1 : (0 == k[2].length) > (0 == o[2].length) ? 1 : 0) || (k[2] < o[2] ? -1 : k[2] > o[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = cb[a] = 0 <= b
            }
            return b
        }
        var eb = {};
        function fb(a) {
            return eb[a] || (eb[a] = I && !!document.documentMode && document.documentMode >= a)
        }
        ;!I || fb(9);
        !Sa && !I || I && fb(9) || Sa && db("1.9.1");
        I && db("9");
        function gb(a) {
            return a ? new hb(K(a)) : wa || (wa = new hb)
        }
        function L(a) {
            return w(a) ? document.getElementById(a) : a
        }
        function M(a, b) {
            var c = b || document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : ib("*", a, b)
        }
        function N(a, b) {
            var c = b || document
              , d = n;
            return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : M(a, b)[0]) || n
        }
        function ib(a, b, c) {
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
                    "function" == typeof a.split && D(a.split(/\s+/), b) && (d[e++] = g);
                d.length = e;
                return d
            }
            return c
        }
        function jb(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }
        function K(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }
        function kb(a, b, c) {
            if (!b && !c)
                return n;
            var d = b ? b.toUpperCase() : n;
            return lb(a, function(a) {
                return (!d || a.nodeName == d) && (!c || D(F(a), c))
            }, l)
        }
        function O(a, b) {
            return kb(a, n, b)
        }
        function lb(a, b, c, d) {
            c || (a = a.parentNode);
            for (var c = d == n, e = 0; a && (c || e <= d); ) {
                if (b(a))
                    return a;
                a = a.parentNode;
                e++
            }
            return n
        }
        function hb(a) {
            this.a = a || r.document || document
        }
        function mb(a) {
            return "CSS1Compat" == a.a.compatMode
        }
        function nb(a) {
            var b = a.a
              , a = !J && "CSS1Compat" == b.compatMode ? b.documentElement : b.body
              , b = b.parentWindow || b.defaultView;
            return new H(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
        }
        hb.prototype.appendChild = function(a, b) {
            a.appendChild(b)
        }
        ;
        function ob(a) {
            this.a = a
        }
        var pb = /\s*;\s*/;
        function qb(a, b, c, d, e, f) {
            if (/[;=\s]/.test(b))
                throw Error('Invalid cookie name "' + b + '"');
            if (/[;\r\n]/.test(c))
                throw Error('Invalid cookie value "' + c + '"');
            v(d) || (d = -1);
            f = f ? ";domain=" + f : "";
            e = e ? ";path=" + e : "";
            d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(ha() + 1E3 * d)).toUTCString();
            a.a.cookie = b + "=" + c + f + e + d + ""
        }
        function tb(a, b, c) {
            for (var d = b + "=", a = (a.a.cookie || "").split(pb), e = 0, f; f = a[e]; e++) {
                if (0 == f.indexOf(d))
                    return f.substr(d.length);
                if (f == b)
                    return ""
            }
            return c
        }
        ob.prototype.remove = function(a, b, c) {
            var d = v(tb(this, a));
            qb(this, a, "", 0, b, c);
            return d
        }
        ;
        ob.prototype.clear = function() {
            for (var a = (this.a.cookie || "").split(pb), b = [], c = [], d, e, f = 0; e = a[f]; f++)
                d = e.indexOf("="),
                -1 == d ? (b.push(""),
                c.push(e)) : (b.push(e.substring(0, d)),
                c.push(e.substring(d + 1)));
            for (a = b.length - 1; 0 <= a; a--)
                this.remove(b[a])
        }
        ;
        var ub = new ob(document);
        ub.c = 3950;
        function vb(a, b, c) {
            qb(ub, "" + a, b, c, "/", "youtube.com")
        }
        function wb() {
            ub.remove("feed_view", "/", "youtube.com")
        }
        ;function xb() {
            var a;
            a = this.a;
            if (a = tb(ub, "" + a, h)) {
                a = unescape(a).split("&");
                for (var b = 0; b < a.length; b++) {
                    var c = a[b].split("=")
                      , d = c[0];
                    (c = c[1]) && (P[d] = c.toString())
                }
            }
        }
        aa(xb);
        var P = s("yt.prefs.UserPrefs.prefs_") || {};
        y("yt.prefs.UserPrefs.prefs_", P);
        xb.prototype.a = "PREF";
        function yb(a, b) {
            var c = "f" + (Math.floor(a / 31) + 1)
              , d = 1 << a % 31
              , e = P[c] !== h ? P[c].toString() : n
              , e = (e != n && /^[A-Fa-f0-9]+$/.test(e) ? parseInt(e, 16) : n) || 0
              , e = b ? e | d : e & ~d;
            0 == e ? delete P[c] : (d = e.toString(16),
            P[c] = d.toString())
        }
        xb.prototype.remove = function(a) {
            if (!/^\w+$/.test(a))
                throw "ExpectedRegexMismatch: " + a;
            if (/^f([1-9][0-9]*)$/.test(a))
                throw "ExpectedRegexMatch: " + a;
            delete P[a]
        }
        ;
        xb.prototype.clear = function() {
            P = {}
        }
        ;
        var zb = {
            Db: 0,
            Fa: 1,
            Aa: 2,
            gb: 3,
            Ga: 4,
            bc: 5,
            dc: 6,
            ac: 7,
            Zb: 8,
            $b: 9,
            cc: 10,
            Yb: 11,
            Kb: 12,
            Jb: 13,
            Ib: 14,
            Xa: 15,
            tb: 16,
            wb: 17,
            xb: 18,
            vb: 19,
            ub: 20,
            Lb: 21,
            Ja: 22,
            Xb: 23,
            Ia: 24,
            pa: 25,
            Ka: 26,
            Va: 27,
            Gb: 28,
            Ha: 29,
            Fb: 30,
            Sb: 31,
            Rb: 32,
            Sa: 33,
            Pb: 34,
            Mb: 35,
            Nb: 36,
            Ob: 37,
            Qb: 38,
            hb: 39,
            Ab: 40,
            qa: 41,
            zb: 42,
            sa: 43,
            za: 44,
            Ma: 45,
            qb: 46,
            Tb: 47,
            ec: 48,
            fc: 49,
            hc: 50,
            Hb: 51,
            ya: 52,
            Ca: 53,
            rb: 54,
            bb: 55,
            La: 56,
            Eb: 57,
            Bb: 58,
            Ua: 59,
            nb: 60,
            cb: 61,
            ib: 62,
            ra: 63,
            Wb: 64,
            va: 65,
            ua: 66,
            jb: 67,
            Ea: 68,
            Oa: 69,
            Ya: 70,
            ob: 71,
            Wa: 72,
            Cb: 73,
            kb: 74,
            Ub: 75,
            ta: 76,
            yb: 77,
            Pa: 78,
            Vb: 79,
            eb: 80,
            Ba: 81,
            mb: 82,
            Za: 83,
            ab: 84,
            $a: 85,
            P: 86,
            Q: 87,
            wa: 88,
            oa: 89,
            xa: 90,
            sb: 91,
            pb: 92,
            Da: 93,
            gc: 94,
            Ra: 95,
            Qa: 96,
            Ta: 97,
            fb: 98,
            Na: 99,
            lb: 100
        };
        function Q(a, b, c) {
            a.dataset ? a.dataset[Ab(b)] = c : a.setAttribute("data-" + b, c)
        }
        function R(a, b) {
            return a.dataset ? a.dataset[Ab(b)] : a.getAttribute("data-" + b)
        }
        function Bb(a, b) {
            a.dataset ? delete a.dataset[Ab(b)] : a.removeAttribute("data-" + b)
        }
        var Cb = {};
        function Ab(a) {
            return Cb[a] || (Cb[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            }))
        }
        ;function Db(a) {
            var b = a.__yt_uid_key;
            b || (b = Eb(),
            a.__yt_uid_key = b);
            return b
        }
        var Eb = s("yt.dom.getNextId_");
        if (!Eb) {
            Eb = function() {
                return ++Fb
            }
            ;
            y("yt.dom.getNextId_", Eb);
            var Fb = 0
        }
        function Gb(a) {
            var b = document.createElement("div");
            b.innerHTML = a;
            if (b.firstElementChild != h)
                a = b.firstElementChild;
            else
                for (a = b.firstChild; a && 1 != a.nodeType; )
                    a = a.nextSibling;
            return a
        }
        ;function Hb(a) {
            if (a = a || s("window.event")) {
                for (var b in a)
                    D(Ib, b) || (this[b] = a[b]);
                if ((b = a.target || a.srcElement) && 3 == b.nodeType)
                    b = b.parentNode;
                this.target = b;
                if (b = a.relatedTarget)
                    try {
                        b = b.nodeName && b
                    } catch (c) {
                        b = n
                    }
                else
                    "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
                this.relatedTarget = b;
                this.clientX = a.clientX !== h ? a.clientX : a.pageX;
                this.clientY = a.clientY !== h ? a.clientY : a.pageY;
                if ((a.clientX || a.clientY) && document.body && document.documentElement)
                    this.pageX = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
                    this.pageY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.G = a
            }
        }
        var Ib = "stopPropagation preventMouseEvent preventManipulation preventDefault layerX layerY".split(" ");
        q = Hb.prototype;
        q.type = "";
        q.target = n;
        q.relatedTarget = n;
        q.currentTarget = n;
        q.data = n;
        q.keyCode = 0;
        q.charCode = 0;
        q.altKey = p;
        q.ctrlKey = p;
        q.shiftKey = p;
        q.G = n;
        q.clientX = 0;
        q.clientY = 0;
        q.pageX = 0;
        q.pageY = 0;
        q.preventDefault = function() {
            this.G.returnValue = p;
            this.G.preventDefault && this.G.preventDefault()
        }
        ;
        var Ea = s("yt.events.listeners_") || {};
        y("yt.events.listeners_", Ea);
        var Jb = s("yt.events.counter_") || {
            count: 0
        };
        y("yt.events.counter_", Jb);
        function Kb(a, b, c, d) {
            return Da(function(e) {
                return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
            })
        }
        function S(a, b, c, d) {
            function e(b) {
                b = new Hb(b);
                b.currentTarget = a;
                return c.call(a, b)
            }
            if (!a || !a.addEventListener && !a.attachEvent)
                return "";
            var d = !!d
              , f = Kb(a, b, c, d);
            if (f)
                return f;
            f = ++Jb.count + "";
            Ea[f] = [a, b, c, e, d];
            a.addEventListener ? a.addEventListener(b, e, d) : a.attachEvent("on" + b, e);
            return f
        }
        function Lb(a, b) {
            var c;
            c = S(a, J ? "webkitTransitionEnd" : Ra ? "oTransitionEnd" : "transitionend", function() {
                Mb(c);
                b.apply(a, arguments)
            }, h)
        }
        function T(a, b, c) {
            Nb(a, b, function(a) {
                return D(F(a), c)
            })
        }
        function Nb(a, b, c) {
            var d = a || document;
            S(d, "click", function(a) {
                var f = lb(a.target, function(a) {
                    return a === d || c(a)
                }, l);
                f && f !== d && (a.currentTarget = f,
                b.call(f, a))
            })
        }
        function Mb(a) {
            "string" == typeof a && (a = [a]);
            C(a, function(a) {
                if (a in Ea) {
                    var c = Ea[a]
                      , d = c[0]
                      , e = c[1]
                      , f = c[3]
                      , c = c[4];
                    d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent("on" + e, f);
                    delete Ea[a]
                }
            })
        }
        ;var Ob = window.yt && window.yt.config_ || {};
        y("yt.config_", Ob);
        var Pb = window.yt && window.yt.tokens_ || {};
        y("yt.tokens_", Pb);
        y("yt.globals_", window.yt && window.yt.globals_ || {});
        y("yt.msgs_", window.yt && window.yt.msgs_ || {});
        var Qb = window.yt && window.yt.timeouts_ || [];
        y("yt.timeouts_", Qb);
        var Rb = window.yt && window.yt.intervals_ || [];
        y("yt.intervals_", Rb);
        function Sb(a) {
            return a in Ob ? Ob[a] : h
        }
        function Tb(a) {
            return a in Pb ? Pb[a] : h
        }
        function Ub(a, b) {
            var c = window.setTimeout(a, b);
            Qb.push(c);
            return c
        }
        eval("/*@cc_on!@*/false");
        function Vb(a) {
            this.d = 1E3 / a;
            this.c = n;
            this.a = []
        }
        var Wb = new Vb(24);
        Vb.prototype.e = function() {
            for (var a = ha(), b = this.a.length - 1; 0 <= b; b--)
                Xb(this.a[b], a) && Yb(this, b)
        }
        ;
        Vb.prototype.add = function(a) {
            this.a.push(a);
            this.c || (a = x(this.e, this),
            a = window.setInterval(a, this.d),
            Rb.push(a),
            this.c = a)
        }
        ;
        Vb.prototype.remove = function(a) {
            a = pa(this.a, a);
            0 <= a && Yb(this, a)
        }
        ;
        function Yb(a, b) {
            B.splice.call(a.a, b, 1);
            a.a.length || (window.clearInterval(a.c),
            delete a.c)
        }
        ;function Zb(a, b, c, d, e, f, g, i) {
            this.c = a;
            this.g = b;
            this.d = c;
            this.i = d;
            this.e = e;
            this.j = f;
            this.f = g;
            this.n = i
        }
        Zb.prototype.a = function() {
            return new Zb(this.c,this.g,this.d,this.i,this.e,this.j,this.f,this.n)
        }
        ;
        function $b(a, b) {
            if (0 == b)
                return new H(a.c,a.g);
            if (1 == b)
                return new H(a.f,a.n);
            var c = a.c + b * (a.d - a.c)
              , d = a.g + b * (a.i - a.g)
              , e = a.d + b * (a.e - a.d)
              , f = a.i + b * (a.j - a.i)
              , g = a.e + b * (a.f - a.e)
              , i = a.j + b * (a.n - a.j)
              , c = c + b * (e - c)
              , d = d + b * (f - d);
            return new H(c + b * (e + b * (g - e) - c),d + b * (f + b * (i - f) - d))
        }
        function ac(a, b) {
            var c = (b - a.c) / (a.f - a.c);
            if (0 >= c)
                return 0;
            if (1 <= c)
                return 1;
            for (var d = 0, e = 1, f = 0; 8 > f; f++) {
                var g = $b(a, c).x
                  , i = ($b(a, c + 1.0E-6).x - g) / 1.0E-6;
                if (1.0E-6 > Math.abs(g - b))
                    return c;
                if (1.0E-6 > Math.abs(i))
                    break;
                else
                    g < b ? d = c : e = c,
                    c -= (g - b) / i
            }
            for (f = 0; 1.0E-6 < Math.abs(g - b) && 8 > f; f++)
                g < b ? (d = c,
                c = (c + e) / 2) : (e = c,
                c = (c + d) / 2),
                g = $b(a, c).x;
            return c
        }
        ;function bc(a, b) {
            this.a = new Zb(0,0,a.x,a.y,b.x,b.y,1,1)
        }
        function cc(a) {
            return a
        }
        var dc = new bc({
            x: 0.25,
            y: 0.1
        },{
            x: 0.25,
            y: 1
        });
        function ec(a) {
            return $b(dc.a, ac(dc.a, a)).y
        }
        var fc = new bc({
            x: 0.42,
            y: 0
        },{
            x: 1,
            y: 1
        });
        function gc(a) {
            return $b(fc.a, ac(fc.a, a)).y
        }
        var hc = new bc({
            x: 0,
            y: 0
        },{
            x: 0.58,
            y: 1
        });
        function ic(a) {
            return $b(hc.a, ac(hc.a, a)).y
        }
        var jc = new bc({
            x: 0.42,
            y: 0
        },{
            x: 0.58,
            y: 1
        });
        function kc(a) {
            return $b(jc.a, ac(jc.a, a)).y
        }
        function lc(a) {
            switch (a) {
            case "linear":
                return cc;
            case "ease-in":
                return gc;
            case "ease-out":
                return ic;
            case "ease-in-out":
                return kc;
            default:
                return ec
            }
        }
        ;function mc(a, b) {
            var c = b || {};
            this.b = a;
            this.K = c.duration || 0.25;
            this.e = 1E3 * this.K;
            this.B = c.r || n;
            this.J = c.la || "ease";
            this.a(c);
            c.ka || this.j()
        }
        mc.prototype.a = function() {}
        ;
        var nc;
        function oc() {
            if (!v(nc)) {
                var a = document.createElement("div");
                v(a.style.MozTransition) ? nc = "Moz" : v(a.style.WebkitTransition) ? nc = "Webkit" : v(a.style.a) ? nc = "O" : nc = n
            }
            return nc
        }
        ;function pc(a, b) {
            mc.call(this, a, b)
        }
        z(pc, mc);
        function qc(a, b, c) {
            b = oc() + b;
            a.b.style[b] = c
        }
        pc.prototype.j = function() {
            this.b.style.opacity = this.d;
            Ub(x(function() {
                qc(this, "TransitionTimingFunction", this.J);
                qc(this, "TransitionDuration", this.K + "s");
                qc(this, "TransitionProperty", "opacity");
                Lb(this.b, x(function() {
                    qc(this, "TransitionTimingFunction", "");
                    qc(this, "TransitionDuration", "");
                    qc(this, "TransitionProperty", "");
                    this.B && this.B(this)
                }, this));
                this.b.style.opacity = this.C
            }, this), 20)
        }
        ;
        function rc(a, b) {
            mc.call(this, a, b)
        }
        z(rc, mc);
        rc.prototype.a = function(a) {
            this.c = 0;
            this.w = a.loop || Wb;
            this.n = lc(this.J)
        }
        ;
        rc.prototype.j = function() {
            this.f = ha();
            Xb(this, this.f);
            this.w.add(this)
        }
        ;
        function Xb(a, b) {
            a.c = Math.min(a.c + (b - a.f), a.e);
            a.f = b;
            var c = a.n(a.c / a.e)
              , c = a.d - (a.d - a.C) * c;
            a.i ? a.b.style.filter = "alpha(opacity=" + Math.floor(100 * c) + ")" : a.b.style.opacity = c;
            if (c = a.c >= a.e)
                a.g(),
                a.B && Ub(x(a.B, r, a), 0);
            return c
        }
        rc.prototype.g = function() {}
        ;
        function sc(a, b) {
            mc.call(this, a, b)
        }
        z(sc, rc);
        sc.prototype.a = function(a) {
            var b = parseFloat(a.start)
              , c = parseFloat(a.end);
            this.d = isNaN(b) ? 1 : b;
            this.C = isNaN(c) ? 0 : c;
            this.i = !v(this.b.style.opacity);
            sc.L.a.call(this, a)
        }
        ;
        sc.prototype.g = function() {
            this.i && 1 == this.C && (this.b.style.filter = "")
        }
        ;
        function tc(a, b) {
            mc.call(this, a, b)
        }
        z(tc, pc);
        tc.prototype.a = function(a) {
            var b = parseFloat(a.start)
              , c = parseFloat(a.end);
            this.d = isNaN(b) ? 1 : b;
            this.C = isNaN(c) ? 0 : c;
            tc.L.a.call(this, a)
        }
        ;
        function uc(a, b) {
            var c = b || {};
            c.start = 0;
            c.end = 1;
            oc() ? new tc(a,c) : new sc(a,c)
        }
        function vc(a, b) {
            var c = b || {};
            c.start = 1;
            c.end = 0;
            oc() ? new tc(a,c) : new sc(a,c)
        }
        ;function wc(a, b, c) {
            a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
        }
        function xc(a) {
            var b = a.type;
            if (!v(b))
                return n;
            switch (b.toLowerCase()) {
            case "checkbox":
            case "radio":
                return a.checked ? a.value : n;
            case "select-one":
                return b = a.selectedIndex,
                0 <= b ? a.options[b].value : n;
            case "select-multiple":
                for (var b = [], c, d = 0; c = a.options[d]; d++)
                    c.selected && b.push(c.value);
                return b.length ? b : n;
            default:
                return v(a.value) ? a.value : n
            }
        }
        ;function yc(a) {
            return eval("(" + a + ")")
        }
        ;function zc(a) {
            if (a[1]) {
                var b = a[0]
                  , c = b.indexOf("#");
                0 <= c && (a.push(b.substr(c)),
                a[0] = b = b.substr(0, c));
                c = b.indexOf("?");
                0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = h)
            }
            return a.join("")
        }
        function Ac(a, b, c) {
            if (ca(b))
                for (var d = 0; d < b.length; d++)
                    Ac(a, "" + b[d], c);
            else
                b != n && c.push("&", a, "" === b ? "" : "=", encodeURIComponent("" + b))
        }
        function Bc(a, b) {
            for (var c in b)
                Ac(c, b[c], a);
            return a
        }
        ;function Cc(a) {
            "?" == a.charAt(0) && (a = a.substr(1));
            for (var a = a.split("&"), b = {}, c = 0, d = a.length; c < d; c++) {
                var e = a[c].split("=");
                if (1 == e.length && e[0] || 2 == e.length) {
                    var f = e[0]
                      , e = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
                    f in b ? ca(b[f]) ? ta(b[f], e) : b[f] = [b[f], e] : b[f] = e
                }
            }
            return b
        }
        function Dc(a) {
            a = Bc([], a);
            a[0] = "";
            return a.join("")
        }
        function Ec(a, b) {
            var c = a.split("?", 2), a = c[0], c = Cc(c[1] || ""), d;
            for (d in b)
                c[d] = b[d];
            return zc(Bc([a], c))
        }
        ;var Fc = n;
        "undefined" != typeof XMLHttpRequest ? Fc = function() {
            return new XMLHttpRequest
        }
        : "undefined" != typeof ActiveXObject && (Fc = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        );
        function Gc(a) {
            switch (a && "status"in a ? a.status : -1) {
            case 0:
            case 200:
            case 204:
            case 304:
                return l;
            default:
                return p
            }
        }
        ;function Hc(a, b, c, d, e) {
            var f = Fc && Fc();
            if ("open"in f) {
                f.onreadystatechange = function() {
                    4 == (f && "readyState"in f ? f.readyState : 0) && b && b(f)
                }
                ;
                c = (c || "GET").toUpperCase();
                d = d || "";
                f.open(c, a, l);
                a = "POST" == c;
                if (e)
                    for (var g in e)
                        f.setRequestHeader(g, e[g]),
                        "content-type" == g.toLowerCase() && (a = p);
                a && f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                f.send(d);
                return f
            }
        }
        function U(a, b) {
            var c = b.format || "JSON";
            b.ma && (a = document.location.protocol + "//" + document.location.hostname + a);
            var d = b.h;
            d && (a = Ec(a, d));
            var e = b.na || "";
            if (d = b.o)
                e = Cc(e),
                Ha(e, d),
                e = Dc(e);
            var f = p, g, i = Hc(a, function(a) {
                if (!f) {
                    f = l;
                    g && window.clearTimeout(g);
                    var d = Gc(a)
                      , e = n;
                    if (d || 400 <= a.status && 500 > a.status)
                        e = Ic(c, a);
                    if (d)
                        a: {
                            switch (c) {
                            case "XML":
                                d = 0 == parseInt(e && e.return_code, 10);
                                break a;
                            case "RAW":
                                d = l;
                                break a
                            }
                            d = !!e
                        }
                    var e = e || {}
                      , i = b.D || r;
                    d ? b.k && b.k.call(i, a, e) : b.l && b.l.call(i, a, e);
                    b.r && b.r.call(i, a, e)
                }
            }, b.method, e, b.headers);
            b.V && 0 < b.timeout && (g = Ub(function() {
                f || (f = l,
                i.abort(),
                window.clearTimeout(g),
                b.V.call(b.D || r, i))
            }, b.timeout))
        }
        function Ic(a, b) {
            var c = n;
            switch (a) {
            case "JSON":
                var d = b.responseText
                  , e = b.getResponseHeader("Content-Type") || "";
                d && 0 <= e.indexOf("json") && (c = yc(d));
                break;
            case "XML":
                if (d = (d = b.responseXML) ? Jc(d) : n)
                    c = {},
                    C(d.getElementsByTagName("*"), function(a) {
                        c[a.tagName] = Kc(a)
                    })
            }
            return c
        }
        function Lc(a, b) {
            var c = b.onComplete || n
              , d = b.onException || n
              , e = b.onError || n
              , f = b.update || n
              , g = b.json || p;
            Hc(a, function(a) {
                if (Gc(a)) {
                    var b = a.responseXML, m = b ? Jc(b) : n, b = !(!b || !m), k, o;
                    if (b && (k = Mc(m, "return_code"),
                    o = Mc(m, "html_content"),
                    0 == k)) {
                        f && o && (L(f).innerHTML = o);
                        var t = Mc(m, "js_content");
                        if (t) {
                            var A = document.createElement("script");
                            A.text = t;
                            document.getElementsByTagName("head")[0].appendChild(A)
                        }
                    }
                    c && (b ? (b = Mc(m, "redirect_on_success"),
                    k && b ? window.location = b : ((m = Mc(m, 0 == k ? "success_message" : "error_message")) && alert(m),
                    a = g ? eval("(" + o + ")") : a,
                    0 == k ? c(a) : d && d(a))) : a.responseText && c(a))
                } else
                    e && e(a)
            }, b.method || "POST", b.postBody || n, b.headers || n)
        }
        function Jc(a) {
            return !a ? n : (a = ("responseXML"in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : n
        }
        function Mc(a, b) {
            if (!a)
                return n;
            var c = a.getElementsByTagName(b);
            return c && 0 < c.length ? Kc(c[0]) : n
        }
        function Kc(a) {
            var b = "";
            C(a.childNodes, function(a) {
                b += a.nodeValue
            });
            return b
        }
        ;function Nc(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        }
        Nc.prototype.a = function() {
            return new Nc(this.top,this.right,this.bottom,this.left)
        }
        ;
        function Oc(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        }
        Oc.prototype.a = function() {
            return new Oc(this.left,this.top,this.width,this.height)
        }
        ;
        function V(a, b) {
            var c = K(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, n)) ? c[b] || c.getPropertyValue(b) || "" : ""
        }
        function Pc(a, b) {
            return a.currentStyle ? a.currentStyle[b] : n
        }
        function Qc(a, b) {
            return V(a, b) || Pc(a, b) || a.style && a.style[b]
        }
        function Rc(a) {
            var b = a.getBoundingClientRect();
            I && (a = a.ownerDocument,
            b.left -= a.documentElement.clientLeft + a.body.clientLeft,
            b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        }
        function Sc(a) {
            if (I && !fb(8))
                return a.offsetParent;
            for (var b = K(a), c = Qc(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode)
                if (c = Qc(a, "position"),
                d = d && "static" == c && a != b.documentElement && a != b.body,
                !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                    return a;
            return n
        }
        function Tc(a) {
            for (var b = new Nc(0,Infinity,Infinity,0), c = gb(a), d = c.a.body, e = c.a.documentElement, f = !J && "CSS1Compat" == c.a.compatMode ? c.a.documentElement : c.a.body; a = Sc(a); )
                if ((!I || 0 != a.clientWidth) && (!J || 0 != a.clientHeight || a != d) && a != d && a != e && "visible" != Qc(a, "overflow")) {
                    var g = Uc(a), i;
                    i = a;
                    if (Sa && !db("1.9")) {
                        var j = parseFloat(V(i, "borderLeftWidth"));
                        if (Vc(i))
                            var m = i.offsetWidth - i.clientWidth - j - parseFloat(V(i, "borderRightWidth"))
                              , j = j + m;
                        i = new H(j,parseFloat(V(i, "borderTopWidth")))
                    } else
                        i = new H(i.clientLeft,i.clientTop);
                    g.x += i.x;
                    g.y += i.y;
                    b.top = Math.max(b.top, g.y);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
                }
            d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top, f);
            c = (c.a.parentWindow || c.a.defaultView || window).document;
            c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
            c = new Ca(c.clientWidth,c.clientHeight);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : n
        }
        function Uc(a) {
            var b, c = K(a), d = Qc(a, "position"), e = Sa && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new H(0,0), g;
            b = c ? K(c) : document;
            g = I && !fb(9) && !mb(gb(b)) ? b.body : b.documentElement;
            if (a == g)
                return f;
            if (a.getBoundingClientRect)
                b = Rc(a),
                a = nb(gb(c)),
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
                    if (J && "fixed" == Qc(b, "position")) {
                        f.x += c.body.scrollLeft;
                        f.y += c.body.scrollTop;
                        break
                    }
                    b = b.offsetParent
                } while (b && b != a);
                if (Ra || J && "absolute" == d)
                    f.y -= c.body.offsetTop;
                for (b = a; (b = Sc(b)) && b != c.body && b != g; )
                    if (f.x -= b.scrollLeft,
                    !Ra || "TR" != b.tagName)
                        f.y -= b.scrollTop
            }
            return f
        }
        function Wc(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        }
        function Xc(a) {
            if ("none" != Qc(a, "display"))
                return Yc(a);
            var b = a.style
              , c = b.display
              , d = b.visibility
              , e = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            a = Yc(a);
            b.display = c;
            b.position = e;
            b.visibility = d;
            return a
        }
        function Yc(a) {
            var b = a.offsetWidth
              , c = a.offsetHeight
              , d = J && !b && !c;
            return (!v(b) || d) && a.getBoundingClientRect ? (a = Rc(a),
            new Ca(a.right - a.left,a.bottom - a.top)) : new Ca(b,c)
        }
        function Vc(a) {
            return "rtl" == Qc(a, "direction")
        }
        function Zc(a, b) {
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
        var $c = {
            thin: 2,
            medium: 4,
            thick: 6
        };
        function ad(a, b) {
            if ("none" == Pc(a, b + "Style"))
                return 0;
            var c = Pc(a, b + "Width");
            return c in $c ? $c[c] : Zc(a, c)
        }
        ;function bd(a, b) {
            if ((a = L(a)) && a.style)
                a.style.display = b ? "" : "none",
                G(a, "hid", !b)
        }
        function cd(a) {
            C(arguments, function(a) {
                bd(a, l)
            })
        }
        function dd(a) {
            C(arguments, function(a) {
                bd(a, p)
            })
        }
        ;function W(a, b, c, d, e) {
            this.w = "session_token=" + a;
            if ((this.a = b) && "/" != this.a.charAt(this.a.length - 1))
                this.a += "/";
            this.t = d;
            this.i = e;
            this.c = n;
            this.j = [];
            this.g = [];
            this.e = [];
            this.n = {}
        }
        y("yt.sharing.AutoShare", W);
        W.prototype.d = function(a, b, c, d) {
            S(a, "click", x(this.S, this));
            if (a.id)
                this.n[a.id] = {
                    serviceName: b,
                    connectOnly: c
                },
                d && (this.n[a.id].connectOnlyCallback = d);
            else
                throw "Connect dialog launch buttons must have an id.";
        }
        ;
        W.prototype.registerConnectDialogLauncher = W.prototype.d;
        W.prototype.S = function(a) {
            if (a = this.n[a.currentTarget.id]) {
                var b = a.connectOnly;
                a.connectOnlyCallback && (b = (0,
                a.connectOnlyCallback)());
                this.f(a.serviceName, b)
            }
        }
        ;
        W.prototype.handleConnectService = W.prototype.S;
        W.prototype.da = function() {
            this.q()
        }
        ;
        W.prototype.doOnLoad = W.prototype.da;
        W.prototype.R = function(a) {
            this.j.push(a)
        }
        ;
        W.prototype.addServiceChangedCallback = W.prototype.R;
        W.prototype.aa = function(a) {
            this.g.push(a)
        }
        ;
        W.prototype.addGaiaChangedCallback = W.prototype.aa;
        W.prototype.$ = function(a) {
            this.e.push(a)
        }
        ;
        W.prototype.addCanConnectCallback = W.prototype.$;
        W.prototype.ga = function() {
            return this.i
        }
        ;
        W.prototype.isGaiaUser = W.prototype.ga;
        W.prototype.ia = function() {
            this.M(this.a + "autoshare?action_link_start=1&root_url=" + encodeURIComponent(this.a), {
                height: 660,
                width: 1E3
            })
        }
        ;
        W.prototype.upgradeToGoogleAccount = W.prototype.ia;
        W.prototype.ja = function(a, b) {
            this.i = a;
            this.W();
            b && b()
        }
        ;
        W.prototype.upgradeToGoogleAccountDone = W.prototype.ja;
        W.prototype.ea = function() {
            return this.t
        }
        ;
        W.prototype.getServiceInfo = W.prototype.ea;
        W.prototype.f = function(a, b) {
            this.i || Lc(this.a + "autoshare?action_ajax_stats_ping=1&stat=connect_no_google&service=" + a, {
                method: "GET",
                onComplete: function() {}
            });
            for (var c in this.e)
                if (!(0,
                this.e[c])(this, a, b))
                    return;
            Lc(this.a + "autoshare?action_ajax_stats_ping=1&stat=connect_has_google&service=" + a, {
                method: "GET",
                onComplete: function() {}
            });
            c = this.a + "autoshare?action_popup_auth=1&service=" + a + "&connect_only=" + (b ? "True" : "False") + "&root_url=" + encodeURIComponent(this.a);
            if ("facebook" == a) {
                var d = "read_stream,offline_access";
                b || (d = [d, "publish_stream"].join());
                c += "&permissions=" + encodeURIComponent(d)
            }
            this.M(c, {
                height: 500,
                width: 860
            })
        }
        ;
        W.prototype.connectService = W.prototype.f;
        W.prototype.ba = function(a, b) {
            var c = x(function(a) {
                this.t = a;
                this.q();
                b && b()
            }, this)
              , d = x(function() {
                b && b();
                this.q()
            }, this)
              , e = {
                action_ajax_connect_service: 1
            };
            e.return_url = a;
            Lc(this.a + "autoshare?ajax_connect_service", {
                postBody: Dc(e) + "&" + this.w,
                onComplete: c,
                onException: d,
                json: l
            })
        }
        ;
        W.prototype.connectServiceDone = W.prototype.ba;
        W.prototype.ca = function(a) {
            this.Z(a)
        }
        ;
        W.prototype.disconnectService = W.prototype.ca;
        W.prototype.ha = function(a, b) {
            var c = x(function(a) {
                this.t = a;
                this.q()
            }, this)
              , d = x(function() {
                this.q()
            }, this)
              , e = {
                action_ajax_set_connect_only: 1
            };
            e.service = a;
            e.connect_only = b ? "True" : "False";
            Lc(this.a + "autoshare?ajax_set_connect_only", {
                postBody: Dc(e) + "&" + this.w,
                onComplete: c,
                onException: d,
                json: l
            })
        }
        ;
        W.prototype.setConnectOnly = W.prototype.ha;
        q = W.prototype;
        q.Z = function(a) {
            var b = x(function(a) {
                this.t = a;
                this.q()
            }, this)
              , c = x(function() {
                this.q()
            }, this)
              , d = {
                action_ajax_disconnect_service: 1
            };
            d.service = a;
            Lc(this.a + "autoshare?ajax_disconnect_service", {
                postBody: Dc(d) + "&" + this.w,
                onComplete: b,
                onException: c,
                json: l
            })
        }
        ;
        q.W = function() {
            for (var a in this.g)
                (0,
                this.g[a])(this)
        }
        ;
        q.q = function() {
            for (var a in this.j)
                (0,
                this.j[a])(this)
        }
        ;
        q.M = function(a, b) {
            if (this.c)
                try {
                    this.c.close()
                } catch (c) {
                    this.c = n
                }
            var d;
            d = b || {};
            d.target = d.target || a.target || "YouTube";
            d.width = d.width || 600;
            d.height = d.height || 600;
            var e = d;
            e || (e = {});
            var f = window;
            d = "undefined" != typeof a.href ? a.href : "" + a;
            var g = e.target || a.target, i = [], j;
            for (j in e)
                switch (j) {
                case "width":
                case "height":
                case "top":
                case "left":
                    i.push(j + "=" + e[j]);
                    break;
                case "target":
                case "noreferrer":
                    break;
                default:
                    i.push(j + "=" + (e[j] ? 1 : 0))
                }
            j = i.join(",");
            if (e.noreferrer) {
                if (e = f.open("", g, j))
                    I && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"),
                    e.opener = n,
                    J ? e.location.href = d : (d = ja(d),
                    e.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + d + '">'),
                    e.document.close())
            } else
                e = f.open(d, g, j);
            (d = e) ? (d.opener || (d.opener = window),
            d.focus(),
            d = p) : d = l;
            this.c = d
        }
        ;
        q.ic = function() {
            this.f("facebook", !this.t.facebook.is_autosharing)
        }
        ;
        function ed() {}
        ;function X() {
            this.a = [];
            this.p = {}
        }
        z(X, ed);
        q = X.prototype;
        q.O = 1;
        q.F = 0;
        q.fa = function(a, b, c) {
            var d = this.p[a];
            d || (d = this.p[a] = []);
            var e = this.O;
            this.a[e] = a;
            this.a[e + 1] = b;
            this.a[e + 2] = c;
            this.O = e + 3;
            d.push(e);
            return e
        }
        ;
        q.I = function(a) {
            if (0 != this.F)
                return this.c || (this.c = []),
                this.c.push(a),
                p;
            var b = this.a[a];
            if (b) {
                var c = this.p[b];
                if (c) {
                    var d = pa(c, a);
                    0 <= d && B.splice.call(c, d, 1)
                }
                delete this.a[a];
                delete this.a[a + 1];
                delete this.a[a + 2]
            }
            return !!b
        }
        ;
        q.T = function(a, b) {
            var c = this.p[a];
            if (c) {
                this.F++;
                for (var d = va(arguments, 1), e = 0, f = c.length; e < f; e++) {
                    var g = c[e];
                    this.a[g + 1].apply(this.a[g + 2], d)
                }
                this.F--;
                if (this.c && 0 == this.F)
                    for (; c = this.c.pop(); )
                        this.I(c);
                return 0 != e
            }
            return p
        }
        ;
        q.clear = function(a) {
            if (a) {
                var b = this.p[a];
                b && (C(b, this.I, this),
                delete this.p[a])
            } else
                this.a.length = 0,
                this.p = {}
        }
        ;
        var fd = s("yt.pubsub.instance_") || new X;
        X.prototype.subscribe = X.prototype.fa;
        X.prototype.unsubscribeByKey = X.prototype.I;
        X.prototype.publish = X.prototype.T;
        X.prototype.clear = X.prototype.clear;
        y("yt.pubsub.instance_", fd);
        function gd(a, b, c) {
            var d = s("yt.pubsub.instance_");
            return d ? d.subscribe(a, function() {
                var a = arguments;
                Ub(function() {
                    b.apply(c || r, a)
                }, 0)
            }, c) : 0
        }
        function hd(a, b) {
            var c = s("yt.pubsub.instance_");
            c && c.publish.apply(c, arguments)
        }
        ;var id = {}
          , jd = 0;
        function kd(a, b) {
            var c = new Image
              , d = "" + jd++;
            id[d] = c;
            c.onload = c.onerror = function() {
                b && id[d] && b();
                delete id[d]
            }
            ;
            c.src = a;
            c = eval("null")
        }
        ;function ld(a) {
            var b = md;
            if ("view" == a && b.convViewUrl)
                return b.convViewUrl;
            if (!b.baseUrl || !b.uid)
                return n;
            var c = b.rmktEnabled && b.vid
              , d = b.focEnabled;
            if (!c && !d)
                return n;
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
            return zc(Bc([b.baseUrl], e))
        }
        function nd(a) {
            (a = ld(a)) && kd(a)
        }
        var md = n;
        function od(a, b, c, d, e, f, g) {
            var i, j;
            if (i = c.offsetParent) {
                var m = "HTML" == i.tagName || "BODY" == i.tagName;
                if (!m || "static" != Qc(i, "position"))
                    j = Uc(i),
                    m || (m = (m = Vc(i)) && Sa ? -i.scrollLeft : m && (!I || !db("8")) ? i.scrollWidth - i.clientWidth - i.scrollLeft : i.scrollLeft,
                    j = Ba(j, new H(m,i.scrollTop)))
            }
            i = j || new H;
            j = Uc(a);
            m = Xc(a);
            j = new Oc(j.x,j.y,m.width,m.height);
            if (m = Tc(a)) {
                var k = new Oc(m.left,m.top,m.right - m.left,m.bottom - m.top)
                  , m = Math.max(j.left, k.left)
                  , o = Math.min(j.left + j.width, k.left + k.width);
                if (m <= o) {
                    var t = Math.max(j.top, k.top)
                      , k = Math.min(j.top + j.height, k.top + k.height);
                    t <= k && (j.left = m,
                    j.top = t,
                    j.width = o - m,
                    j.height = k - t)
                }
            }
            m = gb(a);
            t = gb(c);
            if (m.a != t.a) {
                var o = m.a.body
                  , t = t.a.parentWindow || t.a.defaultView
                  , k = new H(0,0)
                  , A = K(o) ? K(o).parentWindow || K(o).defaultView : window
                  , Ga = o;
                do {
                    var Y;
                    if (A == t)
                        Y = Uc(Ga);
                    else {
                        var E = Ga;
                        Y = new H;
                        if (1 == E.nodeType)
                            if (E.getBoundingClientRect)
                                E = Rc(E),
                                Y.x = E.left,
                                Y.y = E.top;
                            else {
                                var rb = nb(gb(E))
                                  , E = Uc(E);
                                Y.x = E.x - rb.x;
                                Y.y = E.y - rb.y
                            }
                        else {
                            var rb = "function" == ba(E.a)
                              , sb = E;
                            E.targetTouches ? sb = E.targetTouches[0] : rb && E.a().targetTouches && (sb = E.a().targetTouches[0]);
                            Y.x = sb.clientX;
                            Y.y = sb.clientY
                        }
                    }
                    k.x += Y.x;
                    k.y += Y.y
                } while (A && A != t && (Ga = A.frameElement) && (A = A.parent));
                o = Ba(k, Uc(o));
                I && !mb(m) && (o = Ba(o, nb(m)));
                j.left += o.x;
                j.top += o.y
            }
            a = (b & 4 && Vc(a) ? b ^ 2 : b) & -5;
            j = new H(a & 2 ? j.left + j.width : j.left,a & 1 ? j.top + j.height : j.top);
            j = Ba(j, i);
            e && (j.x += (a & 2 ? -1 : 1) * e.x,
            j.y += (a & 1 ? -1 : 1) * e.y);
            var u;
            if (g && (u = Tc(c)))
                u.top -= i.y,
                u.right -= i.x,
                u.bottom -= i.y,
                u.left -= i.x;
            a: {
                b = u;
                a = j.a();
                e = 0;
                i = (d & 4 && Vc(c) ? d ^ 2 : d) & -5;
                u = Xc(c);
                d = u.a();
                if (f || 0 != i)
                    (i & 2 ? a.x -= d.width + (f ? f.right : 0) : f && (a.x += f.left),
                    i & 1) ? a.y -= d.height + (f ? f.bottom : 0) : f && (a.y += f.top);
                if (g) {
                    if (b) {
                        f = a;
                        e = 0;
                        if (65 == (g & 65) && (f.x < b.left || f.x >= b.right))
                            g &= -2;
                        if (132 == (g & 132) && (f.y < b.top || f.y >= b.bottom))
                            g &= -5;
                        f.x < b.left && g & 1 && (f.x = b.left,
                        e |= 1);
                        f.x < b.left && (f.x + d.width > b.right && g & 16) && (d.width = Math.max(d.width - (f.x + d.width - b.right), 0),
                        e |= 4);
                        f.x + d.width > b.right && g & 1 && (f.x = Math.max(b.right - d.width, b.left),
                        e |= 1);
                        g & 2 && (e |= (f.x < b.left ? 16 : 0) | (f.x + d.width > b.right ? 32 : 0));
                        f.y < b.top && g & 4 && (f.y = b.top,
                        e |= 2);
                        f.y >= b.top && (f.y + d.height > b.bottom && g & 32) && (d.height = Math.max(d.height - (f.y + d.height - b.bottom), 0),
                        e |= 8);
                        f.y + d.height > b.bottom && g & 4 && (f.y = Math.max(b.bottom - d.height, b.top),
                        e |= 2);
                        g & 8 && (e |= (f.y < b.top ? 64 : 0) | (f.y + d.height > b.bottom ? 128 : 0));
                        g = e
                    } else
                        g = 256;
                    e = g;
                    if (e & 496) {
                        c = e;
                        break a
                    }
                }
                f = Sa && (Ma || Ua) && db("1.9");
                a instanceof H ? (g = a.x,
                a = a.y) : (g = a,
                a = h);
                c.style.left = Wc(g, f);
                c.style.top = Wc(a, f);
                if (!(u == d || (!u || !d ? 0 : u.width == d.width && u.height == d.height)))
                    (f = mb(gb(K(c))),
                    I && (!f || !db("8"))) ? (g = c.style,
                    f) ? (I ? (f = Zc(c, Pc(c, "paddingLeft")),
                    u = Zc(c, Pc(c, "paddingRight")),
                    a = Zc(c, Pc(c, "paddingTop")),
                    b = Zc(c, Pc(c, "paddingBottom")),
                    f = new Nc(a,u,b,f)) : (f = V(c, "paddingLeft"),
                    u = V(c, "paddingRight"),
                    a = V(c, "paddingTop"),
                    b = V(c, "paddingBottom"),
                    f = new Nc(parseFloat(a),parseFloat(u),parseFloat(b),parseFloat(f))),
                    I ? (u = ad(c, "borderLeft"),
                    a = ad(c, "borderRight"),
                    b = ad(c, "borderTop"),
                    c = ad(c, "borderBottom"),
                    c = new Nc(b,a,c,u)) : (u = V(c, "borderLeftWidth"),
                    a = V(c, "borderRightWidth"),
                    b = V(c, "borderTopWidth"),
                    c = V(c, "borderBottomWidth"),
                    c = new Nc(parseFloat(b),parseFloat(a),parseFloat(c),parseFloat(u))),
                    g.pixelWidth = d.width - c.left - f.left - f.right - c.right,
                    g.pixelHeight = d.height - c.top - f.top - f.bottom - c.bottom) : (g.pixelWidth = d.width,
                    g.pixelHeight = d.height) : (c = c.style,
                    Sa ? c.MozBoxSizing = "border-box" : J ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box",
                    c.width = Math.max(d.width, 0) + "px",
                    c.height = Math.max(d.height, 0) + "px");
                c = e
            }
            return c
        }
        ;var pd = {}
          , qd = "ontouchstart"in document;
        function rd(a, b) {
            var c = pd[a].maxNumParents[b], d;
            0 < c ? d = c : -1 != a.indexOf("mouse") && (d = 2);
            return d
        }
        function sd(a, b, c) {
            return lb(b, function(b) {
                return D(F(b), a)
            }, l, c) || n
        }
        function Z(a) {
            if ("HTML" != a.target.tagName && a.type in pd) {
                var b = pd[a.type], c;
                for (c in b.p) {
                    var d = rd(a.type, c)
                      , e = sd(c, a.target, d);
                    if (e) {
                        var f = l;
                        b.checkRelatedTarget[c] && (a.relatedTarget && lb(a.relatedTarget, function(a) {
                            return a == e
                        }, l, d)) && (f = p);
                        f && b.T(c, e, a.type, a)
                    }
                }
            }
        }
        S(document, "blur", Z, l);
        S(document, "change", Z, l);
        S(document, "click", Z);
        S(document, "focus", Z, l);
        S(document, "mouseover", Z);
        S(document, "mouseout", Z);
        S(document, "mousedown", Z);
        S(document, "keydown", Z);
        S(document, "keyup", Z);
        S(document, "keypress", Z);
        S(document, "cut", Z);
        S(document, "paste", Z);
        qd && (S(document, "touchstart", Z),
        S(document, "touchend", Z),
        S(document, "touchcancel", Z));
        y("yt.uix.widgets_", window.yt && window.yt.uix && window.yt.uix.widgets_ || {});
        function td() {}
        td.prototype.c = function(a, b, c) {
            var d = R(a, b);
            if (d && (d = s(d))) {
                var e = va(arguments, 2);
                ua(e, 0, 0, a);
                d.apply(n, e)
            }
        }
        ;
        function $(a, b) {
            return "yt-uix" + (a.a ? "-" + a.a : "") + (b ? "-" + b : "")
        }
        ;function ud() {}
        z(ud, td);
        function vd(a, b) {
            var c = O(b, $(a));
            if (c) {
                xa(c, $(a, "active"));
                var d = wd(a, b, c);
                if (d) {
                    d.cardTargetNode = b;
                    d.cardRootNode = c;
                    xd(a, b, d);
                    var e = $(a, "card-visible");
                    Ub(function() {
                        cd(d);
                        xa(d, e)
                    }, 10);
                    a.c(c, "card-action", b)
                }
            }
        }
        function wd(a, b, c) {
            var d = $(a, "card")
              , e = d + Db(c)
              , f = L(e);
            if (f)
                return f;
            var g = yd(a, c);
            if (!g)
                return n;
            f = document.createElement("div");
            f.id = e;
            f.className = d;
            (c = R(c, "card-class")) && xa(f, c);
            c = document.createElement("div");
            c.className = $(a, "card-border");
            b = R(b, "orientation") || "horizontal";
            d = document.createElement("div");
            d.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
            e = document.createElement("div");
            e.className = $(a, "card-body");
            a = document.createElement("div");
            a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
            jb(g);
            e.appendChild(g);
            c.appendChild(a);
            c.appendChild(e);
            f.appendChild(d);
            f.appendChild(c);
            document.body.appendChild(f);
            return f
        }
        function xd(a, b, c) {
            var d = R(b, "orientation") || "horizontal", e = R(b, "position"), f = !!R(b, "force-position"), d = "horizontal" == d, g = "bottomright" == e || "bottomleft" == e, e = "topright" == e || "bottomright" == e, i, j;
            e && g ? (j = 7,
            i = 4) : e && !g ? (j = 6,
            i = 5) : !e && g ? (j = 5,
            i = 6) : (j = 4,
            i = 7);
            var m = Vc(document.body)
              , k = Vc(b);
            m != k && (j ^= 2);
            var o;
            d ? (k = b.offsetHeight / 2 - 24,
            o = new H(-12,b.offsetHeight + 6)) : (k = b.offsetWidth / 2 - 12,
            o = new H(b.offsetWidth + 6,-12));
            var t = n;
            f || (t = 10);
            var A = $(a, "card-flip")
              , a = $(a, "card-reverse");
            G(c, A, e);
            G(c, a, g);
            t = od(b, j, c, i, o, n, t);
            !f && t && (t & 48 && (e = !e,
            j ^= 2,
            i ^= 2),
            t & 192 && (g = !g,
            j ^= 1,
            i ^= 1),
            G(c, A, e),
            G(c, a, g),
            od(b, j, c, i, o));
            b = N("yt-uix-card-body-arrow", c);
            f = N("yt-uix-card-border-arrow", c);
            c = Xc(c);
            k = Math.max(6, Math.min(k, (d ? c.height : c.width) - 24 - 6));
            c = d ? g ? "top" : "bottom" : !m && e || m && !e ? "left" : "right";
            b.setAttribute("style", "");
            f.setAttribute("style", "");
            b.style[c] = k + "px";
            f.style[c] = k + "px"
        }
        function zd(a, b) {
            var c = O(b, $(a));
            return !c ? p : D(F(c), $(a, "active"))
        }
        function yd(a, b) {
            var c = b.cardContentNode;
            if (!c) {
                var d = $(a, "content")
                  , e = $(a, "card-content")
                  , f = c = N(d, b)
                  , g = F(f);
                if (w(d)) {
                    var i = g
                      , d = pa(i, d);
                    0 <= d && B.splice.call(i, d, 1)
                } else
                    ca(d) && (g = Aa(g, d));
                w(e) && !D(g, e) ? g.push(e) : ca(e) && ya(g, e);
                f.className = g.join(" ");
                b.cardContentNode = c
            }
            return c
        }
        ;function Ad() {}
        z(Ad, ud);
        aa(Ad);
        Ad.prototype.a = "hovercard";
        function Bd() {}
        z(Bd, td);
        aa(Bd);
        Bd.prototype.a = "tooltip";
        function Cd(a) {
            var b = L("yt-uix-tooltip-shared-mask")
              , c = b && lb(b, function(b) {
                return b == a
            }, p, 2);
            b && c && (b.parentNode.removeChild(b),
            dd(b),
            document.body.appendChild(b))
        }
        ;function Dd(a, b) {
            this.b = a;
            this.z = b || n;
            this.m = R(a, "subscription-type") || "user";
            this.u = R(a, "subscription-value") || "";
            this.d = !!R(a, "enable-tooltip");
            this.A = !!R(a, "enable-hovercard");
            this.v = p;
            this.H = [];
            this.a = [];
            this.g = [];
            this.H.push(S(this.b, "click", x(this.e, this)));
            this.a.push(gd("SUBSCRIBE", this.c, this));
            this.a.push(gd("UNSUBSCRIBE", this.c, this));
            this.A && this.H.push(S(this.b, "mouseover", x(this.f, this)));
            Ed(this)
        }
        var Fd;
        function Gd(a, b) {
            Fd || (Fd = []);
            var c = M("yt-subscription-button-js-default", a);
            C(c, function(a) {
                if (!R(a, "subscription-initialized")) {
                    var c = new Dd(a,b);
                    Fd.push(c);
                    Q(a, "subscription-initialized", "true")
                }
            })
        }
        function Hd(a) {
            return R(a.b, "subscription-id") || n
        }
        function Id(a, b) {
            b ? Q(a.b, "subscription-id", b) : Bb(a.b, "subscription-id");
            Ed(a)
        }
        function Ed(a) {
            G(a.b, "subscribed", !!Hd(a));
            var b = $(Ad.getInstance(), "target");
            G(a.b, b, !!Hd(a) && a.A);
            if (a.d && (b = (Hd(a) ? "un" : "") + "subscribe-tooltip",
            b = R(a.b, b) || "",
            Bd.getInstance(),
            a = a.b,
            Q(a, "tooltip-text", b),
            a = R(a, "content-id"),
            a = L(a)))
                a.innerHTML = b
        }
        Dd.prototype.c = function(a, b, c, d) {
            c != Hd(this) && (this.u == a && this.m == b) && Id(this, c);
            if (d != this.b && this.A && (a = Ad.getInstance(),
            c = this.b,
            b = O(c, $(a))))
                if (c = wd(a, c, b))
                    za(b, $(a, "active")),
                    za(c, $(a, "card-visible")),
                    dd(c),
                    c.cardTargetNode = n,
                    c.cardRootNode = n
        }
        ;
        Dd.prototype.e = function(a) {
            if (this.v)
                return p;
            a.preventDefault();
            var b = Bd.getInstance();
            if (a = this.b)
                if (b = L($(b) + Db(a)))
                    Cd(b),
                    jb(b),
                    Bb(a, "content-id");
            Hd(this) ? Jd(this) : Kd(this)
        }
        ;
        Dd.prototype.f = function() {
            Hd(this) && this.g.push(Ub(x(function() {
                Ld(this)
            }, this), 350))
        }
        ;
        function Ld(a) {
            var b = Ad.getInstance();
            if (!a.N && zd(b, a.b)) {
                a.N = l;
                var c = {
                    hovercard: 1
                };
                c["action_get_subscription_form_for_" + a.m] = 1;
                var d = {
                    session_token: Tb("subscription_ajax")
                };
                d[Md(a)] = a.u;
                U("/subscription_ajax", {
                    method: "POST",
                    h: c,
                    o: d,
                    D: a,
                    k: function(a, c) {
                        var d = this.b
                          , i = c.response.html_content
                          , j = O(d, $(b));
                        if (j) {
                            var m = yd(b, j);
                            m && (m.innerHTML = i,
                            D(F(j), $(b, "active")) && (i = wd(b, d, j),
                            xd(b, d, i)))
                        }
                        Nd(this)
                    },
                    l: function() {
                        this.N = p
                    }
                })
            }
        }
        function Nd(a) {
            var b = Ad.getInstance()
              , c = O(a.b, $(b))
              , d = yd(b, c);
            C(d.getElementsByTagName("input"), function(a) {
                this.H.push(S(a, "change", x(function() {
                    for (var a = d.getElementsByTagName("form")[0], b = a.action || document.location.href, c = a.method.toUpperCase() || "GET", e = [], m = a.elements, k, o = 0; k = m[o]; o++)
                        if (!(k.disabled || "fieldset" == k.tagName.toLowerCase())) {
                            var t = k.name;
                            switch (k.type.toLowerCase()) {
                            case "file":
                            case "submit":
                            case "reset":
                            case "button":
                                break;
                            case "select-multiple":
                                k = xc(k);
                                if (k != n)
                                    for (var A, Ga = 0; A = k[Ga]; Ga++)
                                        wc(e, t, A);
                                break;
                            default:
                                A = xc(k),
                                A != n && wc(e, t, A)
                            }
                        }
                    m = a.getElementsByTagName("input");
                    for (o = 0; k = m[o]; o++)
                        k.form == a && "image" == k.type.toLowerCase() && (t = k.name,
                        wc(e, t, k.value),
                        wc(e, t + ".x", "0"),
                        wc(e, t + ".y", "0"));
                    Hc(b, h, c, e.join("&"), h)
                }, this)))
            }, a)
        }
        function Kd(a) {
            if (Sb("LOGGED_IN")) {
                var b = Md(a)
                  , c = {};
                c["action_create_subscription_to_" + a.m] = 1;
                var d = R(a.b, "subscription-feature");
                d && (c.feature = d);
                d = {
                    session_token: Tb("subscription_ajax")
                };
                d[b] = a.u;
                (b = Sb("PLAYBACK_ID")) && (d.plid = b);
                a.v = l;
                a.b.disabled = l;
                U("/subscription_ajax", {
                    method: "POST",
                    D: a,
                    h: c,
                    o: d,
                    k: function(a, b) {
                        Id(this, b.response.id);
                        hd("SUBSCRIBE", this.u, this.m, Hd(this), this.b);
                        this.A && (vd(Ad.getInstance(), this.b),
                        Ld(this));
                        this.z && this.z(this.b, l)
                    },
                    r: function() {
                        this.v = p;
                        this.b.disabled = p
                    }
                });
                md && nd("subscribe")
            }
        }
        function Jd(a) {
            var b = {
                s: Hd(a),
                session_token: Tb("subscription_ajax")
            }
              , c = {
                action_remove_subscriptions: 1
            }
              , d = R(a.b, "subscription-feature");
            d && (c.feature = d);
            (d = Sb("PLAYBACK_ID")) && (b.plid = d);
            a.v = l;
            a.b.disabled = l;
            U("/subscription_ajax", {
                method: "POST",
                D: a,
                h: c,
                o: b,
                k: function() {
                    Id(this, n);
                    hd("UNSUBSCRIBE", this.u, this.m, n, n);
                    this.z && this.z(this.b, p)
                },
                r: function() {
                    this.v = p;
                    this.b.disabled = p
                }
            });
            md && nd("unsubscribe")
        }
        function Md(a) {
            return "playlist" == a.m ? "p" : "blog" == a.m ? "b" : "topic" == a.m ? "l" : "channel" == a.m ? "c" : "u"
        }
        ;var Od = {};
        function Pd(a, b) {
            var a = L(a)
              , c = b || a[da] || (a[da] = ++ea)
              , d = Od[c];
            d && (Od[c] = qa(d, function(b) {
                return b[0] != a
            }))
        }
        ;function Qd(a) {
            Rd(function(a, c) {
                var d = R(a, "group-key");
                d && (Pd(a, d),
                Bb(a, "group-key"));
                a.src = c
            }, a)
        }
        function Rd(a, b) {
            var c = ib("img", n, b);
            C(c, function(b) {
                var c = R(b, "thumb");
                c && a.call(r, b, c)
            })
        }
        ;var Sd = {};
        function Td(a) {
            if (Sb("EVENTS_TRACKER_INSTALLED")) {
                var b = Sd.feed_item_expanded;
                if (!b) {
                    var c = window._gaq._getAsyncTracker("eventsPageTracker");
                    if (!c)
                        return;
                    window._gaq.push(function() {
                        b = c._createEventTracker("feed_item_expanded");
                        Sd.feed_item_expanded = b
                    })
                }
                window._gaq.push(function() {
                    b._trackEvent(a, h, h)
                })
            }
        }
        ;var Ud, Vd, Wd, Xd, Yd;
        function Zd(a) {
            var a = a.currentTarget
              , b = O(a, "feed-item")
              , c = !D(F(b), "expanded");
            G(b, "expanded", c);
            c && (Qd(b),
            b = R(a, "num-aggregated-actions") || 0,
            c = R(a, "num-aggregated-users") || 0,
            a = R(a, "num-aggregated-videos") || 0,
            a = Dc({
                actions: b,
                users: c,
                videos: a
            }),
            Td(a || "null"),
            a = "a=feed_item_expanded" + (a ? "&" + a : "").replace(/\//g, "&"),
            kd("/gen_204?" + a, h))
        }
        ;function $d(a) {
            var a = a.t, b;
            for (b in a) {
                var c = L(b + "-connected");
                if (c) {
                    var d = a[b]
                      , e = L(b + "-not-connected")
                      , f = L(b + "-display-name")
                      , g = d.is_connected;
                    bd(c, g);
                    bd(e, !g);
                    c = f;
                    d = d.connected_as || "";
                    if ("textContent"in c)
                        c.textContent = d;
                    else if (c.firstChild && 3 == c.firstChild.nodeType) {
                        for (; c.lastChild != c.firstChild; )
                            c.removeChild(c.lastChild);
                        c.firstChild.data = d
                    } else {
                        e = c;
                        for (f = h; f = e.firstChild; )
                            e.removeChild(f);
                        c.appendChild(K(c).createTextNode(d))
                    }
                }
            }
        }
        function ae(a, b) {
            if (b) {
                var c = Gb(b)
                  , d = a.parentNode;
                d && d.replaceChild(c, a);
                Qd(c);
                Gd(c, be);
                uc(c, {
                    duration: 0.3
                })
            } else
                ce(a)
        }
        function be(a, b) {
            if (b) {
                var c = kb(a, "li")
                  , d = kb(c, "ul")
                  , d = M("guide-recommendation-item", d)
                  , d = ra(d, function(a) {
                    return R(a, "external-id")
                });
                U("/guide_ajax.php?action_load_channel_rec=1", {
                    method: "POST",
                    h: {},
                    o: {
                        session_token: Tb("guide_ajax"),
                        shown_ids: d.join()
                    },
                    k: function(a, b) {
                        ae(c, b.new_suggested_html)
                    },
                    l: function() {
                        ce(c)
                    }
                })
            }
        }
        function de(a) {
            a.preventDefault();
            var b = O(a.currentTarget, "guide-recommendation-item")
              , a = D(F(b), "featured")
              , c = R(b, "external-id")
              , d = kb(b, "li")
              , b = kb(d, "ul")
              , b = M("guide-recommendation-item", b)
              , b = ra(b, function(a) {
                return R(a, "external-id")
            })
              , e = {};
            a && (e.featured = 1);
            U("/guide_ajax.php?action_dismiss_channel=1", {
                method: "POST",
                h: e,
                o: {
                    session_token: Tb("guide_ajax"),
                    dismissed_id: c,
                    shown_ids: b.join()
                },
                k: function(a, b) {
                    ae(d, b.new_suggested_html)
                },
                l: function() {
                    ce(d)
                }
            })
        }
        function ee(a) {
            a.preventDefault();
            var b = O(a.currentTarget, "recommended-video-item")
              , a = R(b, "video-id");
            U("/guide_ajax.php?action_dismiss_video=1", {
                method: "POST",
                o: {
                    session_token: Tb("guide_ajax"),
                    video_id: a
                },
                k: function() {
                    ce(b)
                },
                l: function() {
                    ce(b)
                }
            })
        }
        function fe(a) {
            a.preventDefault();
            var b = kb(a.currentTarget, "li")
              , a = R(a.currentTarget, "external-id");
            U("/guide_ajax.php?action_dismiss_item=1", {
                method: "POST",
                o: {
                    session_token: Tb("guide_ajax"),
                    external_id: a
                },
                k: function() {
                    ce(b)
                },
                l: function() {
                    ce(b)
                }
            })
        }
        function ce(a) {
            vc(a, {
                duration: 0.3,
                r: function() {
                    jb(a)
                }
            })
        }
        function ge(a) {
            if (!kb(a.target, n, "guide-item-action")) {
                var a = a.currentTarget
                  , b = he(a);
                ie(b.X, b.Y, a)
            }
        }
        function he(a) {
            var b = R(a, "feed-name") || n
              , c = R(a, "feed-type") || n
              , a = M("guide-item", Ud);
            C(a, function(a) {
                var e = R(a, "feed-name")
                  , f = R(a, "feed-type")
                  , e = b && e == b && f == c;
                G(a, "selected", e);
                (a = O(a, "guide-item-container")) && G(a, "selected-child", e)
            });
            return {
                Y: c,
                X: b
            }
        }
        function je(a) {
            var a = O(a.currentTarget, "feed-container")
              , b = O(a, "individual-feed")
              , c = R(b, "feed-name") || n
              , b = R(b, "feed-type") || n
              , d = R(a, "filter-type") || n
              , e = R(a, "view-type") || n
              , f = R(a, "paging") || n;
            ke(a, c, b, d, e, f)
        }
        function le(a) {
            var b = O(a.currentTarget, "individual-feed")
              , c = N("feed-view-button", b)
              , d = R(b, "feed-name") || n
              , e = R(b, "feed-type") || n
              , a = a.currentTarget.checked ? "u" : n
              , c = c && R(c, "view-type") || n
              , f = xb.getInstance();
            "u" == a ? (yb(zb.P, p),
            yb(zb.Q, l)) : (yb(zb.P, p),
            yb(zb.Q, p));
            var f = f.a, g = [], i;
            for (i in P)
                g.push(i + "=" + escape(P[i]));
            vb(f, g.join("&"), 31536E4);
            me(b, d, e, a, c)
        }
        function ne(a) {
            var b = O(a.currentTarget, "individual-feed")
              , c = R(b, "feed-name") || n
              , d = R(b, "feed-type") || n
              , e = R(a.currentTarget, "filter-type") || n
              , a = M("user-feed-filter", b);
            C(a, function(a) {
                var b = R(a, "filter-type") || n;
                G(a, "selected", e == b)
            });
            me(b, c, d, e, n)
        }
        function oe(a) {
            var b = R(a.currentTarget, "feed-name") || n
              , c = R(a.currentTarget, "feed-type") || n
              , d = L(["feed", c, b].join("-"))
              , e = N("feed-view-button", d)
              , f = N("feed-filter", d).checked ? "u" : n
              , g = R(a.currentTarget, "view-type") || n;
            Q(e, "view-type", g || "");
            g ? vb("feed_view", g || "") : wb();
            a = M("feed-view-choice");
            C(a, function(a) {
                var b = R(a, "view-type") || n;
                G(a, "checked", g == b)
            });
            me(d, b, c, f, g)
        }
        function me(a, b, c, d, e) {
            var f = M("feed-container", a);
            C(f, dd);
            dd(Yd);
            Q(a, "last-clicked-filter", d || "");
            Q(a, "last-clicked-view", e || "");
            if (f = sa(f, function(a) {
                var b = R(a, "filter-type") || n
                  , a = R(a, "view-type") || n;
                return b == d && a == e
            }))
                cd(f),
                pe(a);
            else {
                var g = document.createElement("div");
                g.className = "feed-container";
                g.innerHTML = Xd.innerHTML;
                Q(g, "filter-type", d || "");
                a.appendChild(g);
                b = qe(b, c, d, e);
                U(b.url, {
                    h: b.h,
                    format: "JSON",
                    k: function(b, c) {
                        var f = Gb(c.feed_html)
                          , k = N("before-feed-content", a);
                        k.parentNode && k.parentNode.insertBefore(f, k.nextSibling);
                        Qd(f);
                        jb(g);
                        c.paging && Q(f, "paging", c.paging);
                        var k = R(a, "last-clicked-filter") || n
                          , o = R(a, "last-clicked-view") || n;
                        (k != d || o != e) && dd(f);
                        dd(Yd)
                    },
                    l: function() {
                        jb(g);
                        cd(Yd)
                    }
                })
            }
        }
        function re() {
            var a = M("individual-feed", Wd);
            C(a, dd)
        }
        function ie(a, b, c) {
            re();
            var d = ["feed", b, a].join("-")
              , e = L(d);
            Q(Ud, "last-clicked-item", d);
            e ? pe(e) : (e = document.createElement("div"),
            e.id = d,
            e.className = "individual-feed",
            e.innerHTML = Xd.innerHTML,
            Q(e, "feed-name", a || ""),
            Q(e, "feed-type", b || ""),
            Wd.appendChild(e),
            a = qe(a, b),
            U(a.url, {
                h: a.h,
                format: "JSON",
                k: function(a, b) {
                    e.innerHTML = b.feed_html;
                    Qd(e);
                    Gd(e);
                    R(Ud, "last-clicked-item") == d && pe(e);
                    if (c) {
                        var i = N("guide-count", c);
                        i && jb(i)
                    }
                },
                l: function() {
                    cd(Yd);
                    jb(e)
                }
            }))
        }
        function ke(a, b, c, d, e, f) {
            var c = qe(b, c, d, e, f)
              , b = c.url
              , c = c.h
              , g = N("feed-load-more-container", a);
            xa(g, "loading");
            U(b, {
                h: c,
                format: "JSON",
                k: function(b, c) {
                    var d = Gb(c.feed_html);
                    g.parentNode && g.parentNode.insertBefore(d, g);
                    Qd(d);
                    za(g, "loading");
                    c.paging ? Q(a, "paging", c.paging) : dd(g);
                    dd(Yd)
                },
                l: function() {
                    za(g, "loading");
                    cd(Yd)
                }
            })
        }
        function pe(a) {
            uc(a, {
                duration: 0.5
            });
            cd(a)
        }
        function qe(a, b, c, d, e) {
            var f = ""
              , g = {};
            "blog" == b ? (f = "/guide_ajax.php?action_load_blog_feed=1",
            g = {
                blog_id: a
            }) : "chart" == b ? (f = "/guide_ajax.php?action_load_chart_feed=1",
            g = {
                chart_name: a
            }) : "personal" == b ? (f = "/guide_ajax.php?action_load_personal_feed=1",
            g = {
                feed_name: a
            }) : "show" == b ? (f = "/guide_ajax.php?action_load_show_feed=1",
            g = {
                show_id: a
            }) : "social" == b ? (f = "/guide_ajax.php?action_load_social_feed=1",
            g = {
                feed_name: a
            }) : "system" == b ? (f = "/guide_ajax.php?action_load_system_feed=1",
            g = {
                feed_name: a
            }) : "main" == b ? f = "/guide_ajax.php?action_load_main_feed=1" : "topic" == b ? (f = "/guide_ajax?action_load_topic_feed=1",
            g = {
                topic_id: a
            }) : "user" == b && (f = "/guide_ajax.php?action_load_user_feed=1",
            g = {
                user_id: a
            });
            c && (g.filter_type = c);
            d && (g.view_type = d);
            e && (g.paging = e);
            Sb("FEED_DEBUG") && (g.debug = 1);
            return {
                url: f,
                h: g
            }
        }
        ;function se(a) {
            this.a = a;
            a = n;
            a = te(this.a);
            a = ia("__%s__", "(" + a.join("|") + ")");
            this.c = RegExp(a, "g")
        }
        var ue = /__([a-z]+(?:_[a-z]+)*)__/g;
        function ve(a) {
            a = L(a).innerHTML;
            a = a.replace(/^\s*(<\!--\s*)?/, "");
            a = a.replace(/(\s*--\>)?\s*$/, "");
            return new se(a)
        }
        function te(a) {
            var b = []
              , c = {};
            a.replace(ue, function(a, e) {
                e in c || (c[e] = l,
                b.push(e))
            });
            return b
        }
        function we(a, b) {
            return a.a.replace(a.c, x(function(a, d) {
                return ja(b[d] || "")
            }, a))
        }
        ;function xe() {}
        z(xe, td);
        aa(xe);
        xe.prototype.a = "button";
        var ye, ze, Ae, Be, Ce;
        function De(a) {
            a = {
                sort: R(a.target, "sort-type")
            };
            a = zc(Bc(["/subscription_manager/friends"], a));
            window.location = zc(Bc([a], {})) + ""
        }
        function Ee(a) {
            if (!kb(a.target, "button") && !kb(a.target, "a") && (a = R(a.currentTarget, "href")))
                window.location = zc(Bc([a], {})) + ""
        }
        function Fe(a, b) {
            var c = O(a, "subscription-item")
              , d = !b;
            G(c, "unsubscribed", d);
            d && D(F(c), "pinned") && (G(c, "pinned", p),
            Ge())
        }
        function He(a) {
            var b = O(a.currentTarget, "subscription-item");
            if (!R(b, "loading")) {
                Q(b, "loading", "true");
                var a = R(b, "subscription-id")
                  , c = !D(F(b), "pinned");
                if (!c || M("pinned", ye).length < Ce) {
                    G(b, "pinned", c);
                    Ge();
                    var d = {};
                    c && (d.pinned = "true");
                    U("/subscription_ajax?action_update_subscription_pinned=1", {
                        format: "JSON",
                        method: "POST",
                        h: d,
                        o: {
                            session_token: Tb("subscription_ajax"),
                            subscription_id: a
                        },
                        l: function() {
                            G(b, "pinned", !c);
                            Ge()
                        },
                        r: function() {
                            Bb(b, "loading")
                        }
                    })
                }
            }
        }
        function Ge() {
            var a = M("pinned", ye)
              , b = (a || M("pinned", ye)).length < Ce;
            G(ye, "can-pin-more", b);
            for (var b = ra(a, function(a) {
                var b = R(a, "subscription-id")
                  , c = N("subscription-title", a).innerHTML
                  , a = a.getElementsByTagName("img")[0]
                  , a = R(a, "thumb") || a.src;
                return we(Ae, {
                    subscription_id: b,
                    display_name: c,
                    profile_image_url: a
                })
            }), a = Ce - a.length, c = we(Be, {}), d = 0; d < a; d++)
                b.push(c);
            ze.innerHTML = b.join("")
        }
        ;y("yt.www.guide.init", function() {
            Ud = N("guide");
            1 == Sb("GUIDE_VERSION") && T(Ud, ge, "guide-item");
            Gd(Ud, be);
            T(Ud, de, "guide-subscription-dismiss");
            Wd = L("feed");
            Xd = L("feed-loading-template");
            Yd = L("feed-error");
            T(Wd, je, "feed-load-more");
            T(Wd, le, "feed-filter");
            T(Wd, ne, "user-feed-filter");
            var a = N("yt-uix-button-menu-short", Wd);
            T(a, oe, "feed-view-choice");
            T(Wd, fe, "feed-item-remove");
            Vd = L("video-sidebar");
            T(Vd, ee, "recommended-video-dismiss");
            T(Wd, Zd, "feed-item-show-aggregate")
        });
        y("yt.www.guide.initAutoshare", function(a, b) {
            var c = new W(Tb("autoshare"),b,0,n,l);
            c.R($d);
            var d = L("facebook-connect-button");
            d && c.d(d, "facebook", l);
            (d = L("twitter-connect-button")) && c.d(d, "twitter", l);
            (d = L("orkut-connect-button")) && c.d(d, "orkut", l);
            window.autoshare = c
        });
        y("yt.www.guide.loadSocialPanel", function() {
            he(L("social-guide-item"));
            ie("connect", "social")
        });
        y("yt.www.guide.subscriptionmanager.init", function() {
            ye = L("subscription-manager-list");
            T(ye, He, "subscription-pin");
            T(ye, Ee, "subscription-item");
            var a = L("sort-button");
            if (a) {
                var b = xe.getInstance();
                if (!a.widgetMenu) {
                    var c = R(a, "button-menu-id")
                      , c = c && L(c)
                      , d = $(b, "menu");
                    c ? (xa(c, d),
                    xa(c, $(b, "menu-external"))) : c = N(d, a);
                    a.widgetMenu = c
                }
                T(a.widgetMenu, De, "friend-sort")
            }
            if (ze = a = L("pinned-subscriptions"))
                a = R(a, "max-pinned"),
                Ce = parseInt(a, 10),
                a = L("pinned-channel-template"),
                Ae = ve(a),
                a = L("pinned-channel-placeholder-template"),
                Be = ve(a);
            Gd(ye, Fe)
        });
    }
    )();

}
/*
     FILE ARCHIVED ON 23:43:22 May 31, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:16:02 Nov 26, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.464
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 78.533
  LoadShardBlock: 5337.269 (3)
  PetaboxLoader3.datanode: 5202.802 (4)
  PetaboxLoader3.resolve: 239.069 (3)
  load_resource: 173.307
*/
