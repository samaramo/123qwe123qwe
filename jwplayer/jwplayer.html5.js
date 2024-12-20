(function(g) {
    g.html5 = {};
    g.html5.version = "6.3.3242"
}
)(jwplayer);
(function(g) {
    function h(a) {
        return function() {
            a("Error loading file")
        }
    }
    function f(a, b, c, f) {
        return function() {
            try {
                var e = a.responseXML;
                if (e && e.firstChild)
                    return c(a)
            } catch (d) {}
            (e = g.parseXML(a.responseText)) && e.firstChild ? (a = g.extend({}, a, {
                responseXML: e
            }),
            c(a)) : f && f(a.responseText ? "Invalid XML" : b)
        }
    }
    var d = window;
    g.serialize = function(a) {
        return null == a ? null : "true" == a.toString().toLowerCase() ? !0 : "false" == a.toString().toLowerCase() ? !1 : isNaN(Number(a)) || 5 < a.length || 0 == a.length ? a : Number(a)
    }
    ;
    g.filterSources = function(a) {
        var b, c, f = g.extensionmap;
        if (a) {
            c = [];
            for (var e = 0; e < a.length; e++) {
                var d = a[e].type
                  , h = a[e].file;
                d || (d = f.extType(g.extension(h)),
                a[e].type = d);
                if ((h = g.extensionmap.types[d]) && jwplayer.vid.canPlayType(h))
                    b || (b = d),
                    d == b && c.push(g.extend({}, a[e]))
            }
        }
        return c
    }
    ;
    g.ajax = function(a, b, c) {
        var k;
        0 < a.indexOf("#") && (a = a.replace(/#.*$/, ""));
        var e;
        e = (e = a) && 0 <= e.indexOf("://") && e.split("/")[2] != d.location.href.split("/")[2] ? !0 : !1;
        if (e && g.exists(d.XDomainRequest))
            k = new XDomainRequest,
            k.onload = f(k, a, b, c),
            k.onerror = h(c, a, k);
        else if (g.exists(d.XMLHttpRequest)) {
            var m = k = new XMLHttpRequest
              , l = a;
            k.onreadystatechange = function() {
                if (4 === m.readyState)
                    switch (m.status) {
                    case 200:
                        f(m, l, b, c)();
                        break;
                    case 404:
                        c("File not found")
                    }
            }
            ;
            k.onerror = h(c, a)
        } else
            c && c();
        try {
            k.open("GET", a, !0),
            k.send(null)
        } catch (j) {
            c && c(a)
        }
        return k
    }
    ;
    g.parseXML = function(a) {
        try {
            var b;
            if (d.DOMParser) {
                b = (new DOMParser).parseFromString(a, "text/xml");
                try {
                    if ("parsererror" == b.childNodes[0].firstChild.nodeName)
                        return
                } catch (c) {}
            } else
                b = new ActiveXObject("Microsoft.XMLDOM"),
                b.async = "false",
                b.loadXML(a);
            return b
        } catch (f) {}
    }
    ;
    g.parseDimension = function(a) {
        if ("string" == typeof a) {
            if ("" === a)
                return 0;
            if (!(-1 < a.lastIndexOf("%")))
                return parseInt(a.replace("px", ""), 10)
        }
        return a
    }
    ;
    g.timeFormat = function(a) {
        if (0 < a) {
            var b = Math.floor(a / 3600)
              , c = Math.floor((a - 3600 * b) / 60);
            a = Math.floor(a % 60);
            return (b ? b + ":" : "") + (10 > c ? "0" : "") + c + ":" + (10 > a ? "0" : "") + a
        }
        return "00:00"
    }
    ;
    g.seconds = function(a) {
        a = a.replace(",", ".");
        var b = a.split(":")
          , c = 0;
        "s" == a.substr(-1) ? c = Number(a.substr(0, a.length - 1)) : "m" == a.substr(-1) ? c = 60 * Number(a.substr(0, a.length - 1)) : "h" == a.substr(-1) ? c = 3600 * Number(a.substr(0, a.length - 1)) : 1 < b.length ? (c = Number(b[b.length - 1]),
        c += 60 * Number(b[b.length - 2]),
        3 == b.length && (c += 3600 * Number(b[b.length - 3]))) : c = Number(a);
        return c
    }
    ;
    g.bounds = function(a) {
        if (!a)
            return {
                left: 0,
                right: 0,
                width: 0,
                height: 0,
                top: 0,
                bottom: 0
            };
        var b = a
          , c = 0
          , f = 0
          , e = isNaN(a.offsetWidth) ? 0 : a.offsetWidth;
        a = isNaN(a.offsetHeight) ? 0 : a.offsetHeight;
        do
            c += isNaN(b.offsetLeft) ? 0 : b.offsetLeft,
            f += isNaN(b.offsetTop) ? 0 : b.offsetTop;
        while (b = b.offsetParent);
        return {
            left: c,
            top: f,
            width: e,
            height: a,
            right: c + e,
            bottom: f + a
        }
    }
    ;
    g.empty = function(a) {
        if (a)
            for (; 0 < a.childElementCount; )
                a.removeChild(a.children[0])
    }
}
)(jwplayer.utils);
(function(g) {
    function h() {
        var a = document.createElement("style");
        a.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(a);
        return a
    }
    function f(b) {
        if (l)
            a[b].innerHTML = d(b);
        else {
            var c = a[b].sheet
              , e = m[b];
            if (c) {
                var f = c.cssRules;
                g.exists(e) && e < f.length && f[e].selectorText == b ? c.deleteRule(e) : m[b] = f.length;
                c.insertRule(d(b), m[b])
            }
        }
    }
    function d(a) {
        var b = a + "{\n";
        a = c[a];
        for (var e in a)
            b += "  " + e + ": " + a[e] + ";\n";
        return b + "}\n"
    }
    var a = {}, b, c = {}, k = 0, e = g.exists, m = {}, l = !1, j = g.css = function(d, q, n) {
        if (!a[d])
            if (l)
                a[d] = h();
            else {
                if (!b || 5E4 < b.sheet.cssRules.length)
                    b = h();
                a[d] = b
            }
        e(n) || (n = !1);
        c[d] || (c[d] = {});
        for (var m in q) {
            var j;
            a: {
                j = m;
                var p = q[m];
                if ("undefined" === typeof p)
                    j = void 0;
                else {
                    var z = n ? " !important" : "";
                    if (isNaN(p))
                        j = p.match(/png|gif|jpe?g/i) && 0 > p.indexOf("url") ? "url(" + p + ")" : p + z;
                    else
                        switch (j) {
                        case "z-index":
                        case "opacity":
                            j = p + z;
                            break a;
                        default:
                            j = j.match(/color/i) ? "#" + g.pad(p.toString(16).replace(/^0x/i, ""), 6) + z : 0 === p ? 0 + z : Math.ceil(p) + "px" + z
                        }
                }
            }
            e(c[d][m]) && !e(j) ? delete c[d][m] : e(j) && (c[d][m] = j)
        }
        0 < k || f(d)
    }
    ;
    j.block = function() {
        k++
    }
    ;
    j.unblock = function() {
        k = Math.max(k - 1, 0);
        if (0 == k)
            for (var b in a)
                f(b)
    }
    ;
    g.clearCss = function(b) {
        for (var e in c)
            0 <= e.indexOf(b) && delete c[e];
        for (var f in a)
            0 <= f.indexOf(b) && (a[f].innerHTML = "")
    }
    ;
    g.transform = function(a, b) {
        var c = "-transform", e;
        b = b ? b : "";
        "string" == typeof a ? (e = {},
        e["-webkit" + c] = b,
        e["-ms" + c] = b,
        e["-moz" + c] = b,
        e["-o" + c] = b,
        g.css(a, e)) : (c = "Transform",
        e = a.style,
        e["webkit" + c] = b,
        e["Moz" + c] = b,
        e["ms" + c] = b,
        e["O" + c] = b)
    }
    ;
    g.dragStyle = function(b, a) {
        g.css(b, {
            "-webkit-user-select": a,
            "-moz-user-select": a,
            "-ms-user-select": a,
            "-webkit-user-drag": a,
            "user-select": a,
            "user-drag": a
        })
    }
    ;
    g.transitionStyle = function(b, a) {
        navigator.userAgent.match(/5\.\d(\.\d)? safari/i) || g.css(b, {
            "-webkit-transition": a,
            "-moz-transition": a,
            "-o-transition": a
        })
    }
    ;
    g.rotate = function(a, b) {
        g.transform(a, "rotate(" + b + "deg)")
    }
    ;
    j(".jwplayer " + " div span a img ul li video".split(" ").join(",.jwplayer ") + ", .jwclick", {
        margin: 0,
        padding: 0,
        border: 0,
        color: "#000000",
        "font-size": "100%",
        font: "inherit",
        "vertical-align": "baseline",
        "background-color": "transparent",
        "text-align": "left"
    });
    j(".jwplayer ul", {
        "list-style": "none"
    })
}
)(jwplayer.utils);
(function(g) {
    g.scale = function(f, d, a, b, c) {
        var k = g.exists;
        k(d) || (d = 1);
        k(a) || (a = 1);
        k(b) || (b = 0);
        k(c) || (c = 0);
        g.transform(f, 1 == d && 1 == a && 0 == b && 0 == c ? "" : "scale(" + d + "," + a + ") translate(" + b + "px," + c + "px)")
    }
    ;
    g.stretch = function(f, d, a, b, c, k) {
        if (d && (f || (f = h.UNIFORM),
        a && b && c && k)) {
            var e = a / c, m = b / k, l = "video" == d.tagName.toLowerCase(), j = !1, r;
            l && g.transform(d);
            r = "jw" + f.toLowerCase();
            switch (f.toLowerCase()) {
            case h.FILL:
                e > m ? (c *= e,
                k *= e) : (c *= m,
                k *= m);
            case h.NONE:
                e = m = 1;
            case h.EXACTFIT:
                j = !0;
                break;
            default:
                e > m ? 0.95 < c * m / a ? (j = !0,
                r = "jwexactfit") : (c *= m,
                k *= m) : 0.95 < k * e / b ? (j = !0,
                r = "jwexactfit") : (c *= e,
                k *= e),
                j && (m = Math.ceil(100 * b / k) / 100,
                e = Math.ceil(100 * a / c) / 100)
            }
            l ? j ? (d.style.width = c + "px",
            d.style.height = k + "px",
            g.scale(d, e, m, (a - c) / 2 / e, (b - k) / 2 / m)) : (d.style.width = "",
            d.style.height = "") : (d.className = d.className.replace(/\s*jw(none|exactfit|uniform|fill)/g, ""),
            d.className += " " + r)
        }
    }
    ;
    var h = g.stretching = {
        NONE: "none",
        FILL: "fill",
        UNIFORM: "uniform",
        EXACTFIT: "exactfit"
    }
}
)(jwplayer.utils);
(function(g) {
    g.parsers = {
        localName: function(h) {
            return h ? h.localName ? h.localName : h.baseName ? h.baseName : "" : ""
        },
        textContent: function(h) {
            return h ? h.textContent ? h.textContent : h.text ? h.text : "" : ""
        },
        getChildNode: function(h, f) {
            return h.childNodes[f]
        },
        numChildren: function(h) {
            return h.childNodes ? h.childNodes.length : 0
        }
    }
}
)(jwplayer.html5);
(function(g) {
    g.dfxp = function(h, f) {
        var d, a, b = jwplayer.utils.seconds;
        this.load = function(b) {
            a = b;
            try {
                d.open("GET", b, !0),
                d.send(null)
            } catch (k) {
                f("Error loading DFXP File: " + b)
            }
        }
        ;
        d = new XMLHttpRequest;
        d.onreadystatechange = function() {
            if (4 === d.readyState)
                if (200 === d.status) {
                    for (var c = d.responseText, k = [{
                        begin: 0,
                        text: ""
                    }], c = c.replace(/^\s+/, "").replace(/\s+$/, ""), c = c.split("\x3c/p\x3e"), e = [], m = 0; m < c.length; m++)
                        0 <= c[m].indexOf("\x3cp") && (c[m] = c[m].substr(c[m].indexOf("\x3cp") + 2).replace(/^\s+/, "").replace(/\s+$/, ""),
                        e.push(c[m]));
                    c = e;
                    for (m = 0; m < c.length; m++) {
                        var e = c[m]
                          , l = {};
                        try {
                            var j = e.indexOf('begin\x3d"')
                              , e = e.substr(j + 7)
                              , j = e.indexOf('" end\x3d"');
                            l.begin = b(e.substr(0, j));
                            e = e.substr(j + 7);
                            j = e.indexOf('"\x3e');
                            l.end = b(e.substr(0, j));
                            e = e.substr(j + 2);
                            l.text = e
                        } catch (g) {}
                        e = l;
                        e.text && (k.push(e),
                        e.end && (k.push({
                            begin: e.end,
                            text: ""
                        }),
                        delete e.end))
                    }
                    1 < k.length ? h(k) : f("Invalid DFXP file: " + a)
                } else
                    k = d.status,
                    0 == k ? f("Crossdomain loading denied: " + a) : 404 == k ? f("DFXP File not found: " + a) : f("Error " + k + " loading DFXP file: " + a)
        }
    }
}
)(jwplayer.html5.parsers);
(function(g) {
    var h = g.html5.parsers;
    (h.jwparser = function() {}
    ).parseEntry = function(f, d) {
        for (var a = [], b = [], c = g.utils.xmlAttribute, k = 0; k < f.childNodes.length; k++) {
            var e = f.childNodes[k];
            if ("jwplayer" == e.prefix) {
                var m = h.localName(e);
                "source" == m ? (delete d.sources,
                a.push({
                    file: c(e, "file"),
                    "default": c(e, "default"),
                    label: c(e, "label"),
                    type: c(e, "type")
                })) : "track" == m ? (delete d.tracks,
                b.push({
                    file: c(e, "file"),
                    "default": c(e, "default"),
                    kind: c(e, "kind"),
                    label: c(e, "label")
                })) : (d[m] = g.utils.serialize(h.textContent(e)),
                "file" == m && d.sources && delete d.sources)
            }
            d.file || (d.file = d.link)
        }
        if (a.length) {
            d.sources = [];
            for (k = 0; k < a.length; k++)
                0 < a[k].file.length && (a[k]["default"] = "true" == a[k]["default"] ? !0 : !1,
                a[k].label.length || delete a[k].label,
                d.sources.push(a[k]))
        }
        if (b.length) {
            d.tracks = [];
            for (k = 0; k < b.length; k++)
                0 < b[k].file.length && (b[k]["default"] = "true" == b[k]["default"] ? !0 : !1,
                b[k].kind = !b[k].kind.length ? "captions" : b[k].kind,
                b[k].label.length || delete b[k].label,
                d.tracks.push(b[k]))
        }
        return d
    }
}
)(jwplayer);
(function(g) {
    var h = jwplayer.utils
      , f = h.xmlAttribute
      , d = g.localName
      , a = g.textContent
      , b = g.numChildren
      , c = g.mediaparser = function() {}
    ;
    c.parseGroup = function(k, e) {
        var m, l, j = [];
        for (l = 0; l < b(k); l++)
            if (m = k.childNodes[l],
            "media" == m.prefix && d(m))
                switch (d(m).toLowerCase()) {
                case "content":
                    f(m, "duration") && (e.duration = h.seconds(f(m, "duration")));
                    0 < b(m) && (e = c.parseGroup(m, e));
                    f(m, "url") && (e.sources || (e.sources = []),
                    e.sources.push({
                        file: f(m, "url"),
                        type: f(m, "type"),
                        width: f(m, "width"),
                        label: f(m, "label")
                    }));
                    break;
                case "title":
                    e.title = a(m);
                    break;
                case "description":
                    e.description = a(m);
                    break;
                case "guid":
                    e.mediaid = a(m);
                    break;
                case "thumbnail":
                    e.image = f(m, "url");
                    break;
                case "group":
                    c.parseGroup(m, e);
                    break;
                case "subtitle":
                    var g = {};
                    g.file = f(m, "url");
                    g.kind = "captions";
                    if (0 < f(m, "lang").length) {
                        var q = g;
                        m = f(m, "lang");
                        var n = {
                            zh: "Chinese",
                            nl: "Dutch",
                            en: "English",
                            fr: "French",
                            de: "German",
                            it: "Italian",
                            ja: "Japanese",
                            pt: "Portuguese",
                            ru: "Russian",
                            es: "Spanish"
                        };
                        m = n[m] ? n[m] : m;
                        q.label = m
                    }
                    j.push(g)
                }
        e.hasOwnProperty("tracks") || (e.tracks = []);
        for (l = 0; l < j.length; l++)
            e.tracks.push(j[l]);
        return e
    }
}
)(jwplayer.html5.parsers);
(function(g) {
    function h(b) {
        for (var a = {}, h = 0; h < b.childNodes.length; h++) {
            var l = b.childNodes[h]
              , j = c(l);
            if (j)
                switch (j.toLowerCase()) {
                case "enclosure":
                    a.file = f.xmlAttribute(l, "url");
                    break;
                case "title":
                    a.title = d(l);
                    break;
                case "guid":
                    a.mediaid = d(l);
                    break;
                case "pubdate":
                    a.date = d(l);
                    break;
                case "description":
                    a.description = d(l);
                    break;
                case "link":
                    a.link = d(l);
                    break;
                case "category":
                    a.tags = a.tags ? a.tags + d(l) : d(l)
                }
        }
        a = g.mediaparser.parseGroup(b, a);
        a = g.jwparser.parseEntry(b, a);
        return new jwplayer.playlist.item(a)
    }
    var f = jwplayer.utils
      , d = g.textContent
      , a = g.getChildNode
      , b = g.numChildren
      , c = g.localName;
    g.rssparser = {};
    g.rssparser.parse = function(f) {
        for (var e = [], d = 0; d < b(f); d++) {
            var l = a(f, d);
            if ("channel" == c(l).toLowerCase())
                for (var g = 0; g < b(l); g++) {
                    var r = a(l, g);
                    "item" == c(r).toLowerCase() && e.push(h(r))
                }
        }
        return e
    }
}
)(jwplayer.html5.parsers);
(function(g) {
    g.srt = function(h, f, d) {
        function a(a) {
            0 == a ? f("Crossdomain loading denied: " + k) : 404 == a ? f("SRT File not found: " + k) : f("Error " + a + " loading SRT file: " + k)
        }
        function b(a) {
            var b = d ? [] : [{
                begin: 0,
                text: ""
            }];
            a = a.replace(/^\s+/, "").replace(/\s+$/, "");
            var c = a.split("\r\n\r\n");
            1 == c.length && (c = a.split("\n\n"));
            for (a = 0; a < c.length; a++)
                if ("WEBVTT" != c[a]) {
                    var e, n = c[a];
                    e = {};
                    var t = n.split("\r\n");
                    1 == t.length && (t = n.split("\n"));
                    try {
                        n = 1;
                        0 < t[0].indexOf(" --\x3e ") && (n = 0);
                        var y = t[n].indexOf(" --\x3e ");
                        0 < y && (e.begin = g(t[n].substr(0, y)),
                        e.end = g(t[n].substr(y + 5)));
                        if (t[n + 1]) {
                            e.text = t[n + 1];
                            for (n += 2; n < t.length; n++)
                                e.text += "\x3cbr/\x3e" + t[n]
                        }
                    } catch (p) {}
                    e.text && (b.push(e),
                    e.end && !d && (b.push({
                        begin: e.end,
                        text: ""
                    }),
                    delete e.end))
                }
            1 < b.length ? h(b) : f("Invalid SRT file: " + k)
        }
        var c, k, e = jwplayer.utils, g = e.seconds;
        this.load = function(d) {
            k = d;
            try {
                var h;
                h = d && 0 <= d.indexOf("://") && d.split("/")[2] != window.location.href.split("/")[2] ? !0 : !1;
                h && e.exists(window.XDomainRequest) && (c = new XDomainRequest,
                c.onload = function() {
                    b(c.responseText)
                }
                ,
                c.onerror = function() {
                    a(c.status)
                }
                );
                c.open("GET", d, !0);
                c.send(null)
            } catch (g) {
                f("Error loading SRT File: " + d)
            }
        }
        ;
        c = new XMLHttpRequest;
        c.onreadystatechange = function() {
            4 === c.readyState && (200 === c.status ? b(c.responseText) : a(c.status))
        }
    }
}
)(jwplayer.html5.parsers);
(function(g) {
    var h = jwplayer.utils
      , f = jwplayer.events
      , d = f.state
      , a = h.css
      , b = "playing"
      , c = document;
    g.captions = function(a, e) {
        function m(a) {
            h.log("CAPTIONS(" + a + ")")
        }
        function l(a) {
            (I = a.fullscreen) ? (j(),
            setTimeout(j, 500)) : t(!0)
        }
        function j() {
            var a = s.offsetHeight
              , b = s.offsetWidth;
            0 != a && 0 != b && v.resize(b, Math.round(0.94 * a))
        }
        function r(a) {
            ("tt" == g.parsers.localName(a.responseXML.firstChild) ? new jwplayer.html5.parsers.dfxp(n,m) : new jwplayer.html5.parsers.srt(n,m)).load(B)
        }
        function q() {
            (new jwplayer.html5.parsers.srt(n,m)).load(B)
        }
        function n(a) {
            v.populate(a);
            D < A.length && (A[D].data = a);
            t(!1)
        }
        function t(a) {
            h.isMobile() || !A.length ? v.hide() : C == b && 0 < E ? (v.show(),
            I ? l({
                fullscreen: !0
            }) : (y(),
            a && setTimeout(y, 500))) : v.hide()
        }
        function y() {
            var a = w.jwGetWidth();
            w._model && (w._model.config && w._model.config.listbar && w._model.config.listbar.size) && (a -= w._model.config.listbar.size);
            v.resize(a, Math.round(0.94 * w.jwGetHeight()))
        }
        function p(a) {
            0 < a ? (D = a - 1,
            E = a) : E = 0;
            D >= A.length || (A[D].data ? v.populate(A[D].data) : (B = a = A[D].file,
            h.ajax(a, r, q)),
            t(!1))
        }
        function z() {
            var a = [];
            a.push({
                label: "Off"
            });
            for (var b = 0; b < A.length; b++)
                a.push({
                    label: A[b].label
                });
            return a
        }
        var w = a, s, u = {
            back: !0,
            color: "#FFFFFF",
            fontSize: 15
        }, x = {
            fontFamily: "Arial,sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            textDecoration: "none"
        }, v, C, D, A = [], E = 0, I = !1, B, J = new f.eventdispatcher;
        h.extend(this, J);
        this.element = function() {
            return s
        }
        ;
        this.getCaptionsList = function() {
            return z()
        }
        ;
        this.getCurrentCaptions = function() {
            return E
        }
        ;
        this.setCurrentCaptions = function(a) {
            if (0 <= a && E != a && a <= A.length) {
                p(a);
                a = z();
                h.saveCookie("captionLabel", a[E].label);
                var b = f.JWPLAYER_CAPTIONS_CHANGED;
                J.sendEvent(b, {
                    type: b,
                    tracks: a,
                    track: E
                })
            }
        }
        ;
        s = c.createElement("div");
        s.id = w.id + "_caption";
        s.className = "jwcaptions";
        w.jwAddEventListener(f.JWPLAYER_PLAYER_STATE, function(a) {
            switch (a.newstate) {
            case d.IDLE:
                C = "idle";
                t(!1);
                break;
            case d.PLAYING:
                C = b,
                t(!1)
            }
        });
        w.jwAddEventListener(f.JWPLAYER_PLAYLIST_ITEM, function() {
            D = 0;
            A = [];
            v.update(0);
            for (var a = w.jwGetPlaylist()[w.jwGetPlaylistIndex()].tracks, b = [], c = 0, e = "", d = 0, e = "", c = 0; c < a.length; c++)
                e = a[c].kind.toLowerCase(),
                ("captions" == e || "subtitles" == e) && b.push(a[c]);
            for (c = E = 0; c < b.length; c++)
                if (e = b[c].file)
                    b[c].label || (b[c].label = c.toString()),
                    A.push(b[c]);
            for (c = 0; c < A.length; c++)
                if (A[c]["default"]) {
                    d = c + 1;
                    break
                }
            if (e = h.getCookies().captionLabel) {
                a = z();
                for (c = 0; c < a.length; c++)
                    if (e == a[c].label) {
                        d = c;
                        break
                    }
            }
            p(d);
            t(!1);
            a = f.JWPLAYER_CAPTIONS_LIST;
            b = z();
            J.sendEvent(a, {
                type: a,
                tracks: b,
                track: E
            })
        });
        w.jwAddEventListener(f.JWPLAYER_MEDIA_ERROR, m);
        w.jwAddEventListener(f.JWPLAYER_ERROR, m);
        w.jwAddEventListener(f.JWPLAYER_READY, function() {
            for (var a in u)
                e && void 0 != e[a.toLowerCase()] ? "color" == a ? x.color = "#" + String(e.color).substr(-6) : x[a] = e[a.toLowerCase()] : x[a] = u[a];
            v = new jwplayer.html5.captions.renderer(x,s);
            t(!1)
        });
        w.jwAddEventListener(f.JWPLAYER_MEDIA_TIME, function(a) {
            v.update(a.position)
        });
        w.jwAddEventListener(f.JWPLAYER_FULLSCREEN, l)
    }
    ;
    a(".jwcaptions", {
        position: "absolute",
        cursor: "pointer",
        width: "100%",
        height: "100%",
        overflow: "hidden"
    })
}
)(jwplayer.html5);
(function(g) {
    g.captions.renderer = function(h, f) {
        function d(b) {
            c({
                left: "0px",
                top: "0px",
                visibility: "hidden"
            });
            g.innerHTML = b;
            r = "" == b ? "hidden" : "visible";
            setTimeout(a, 20)
        }
        function a() {
            c({
                left: "0px",
                top: "0px"
            });
            var a = Math.round(h.fontSize * Math.pow(q / 400, 0.6))
              , b = Math.round(1.4 * a);
            c({
                maxWidth: q + "px",
                fontSize: a + "px",
                lineHeight: b + "px",
                visibility: r
            });
            a = Math.round(q / 2 - g.clientWidth / 2);
            b = Math.round(k - g.clientHeight);
            c({
                left: a + "px",
                top: b + "px"
            })
        }
        function b() {
            for (var a = -1, b = 0; b < e.length; b++)
                if (e[b].begin <= j && (b == e.length - 1 || e[b + 1].begin >= j)) {
                    a = b;
                    break
                }
            -1 == a ? d("") : a != l && (l = a,
            d(e[b].text))
        }
        function c(a) {
            for (var b in a)
                g.style[b] = a[b]
        }
        var k, e, g, l, j, r = "visible", q;
        this.hide = function() {
            c({
                display: "none"
            })
        }
        ;
        this.populate = function(a) {
            l = -1;
            e = a;
            b()
        }
        ;
        this.resize = function(b, c) {
            q = b;
            k = c;
            a()
        }
        ;
        g = document.createElement("div");
        f.appendChild(g);
        c({
            color: "#" + h.color.substr(-6),
            display: "block",
            fontFamily: h.fontFamily,
            fontStyle: h.fontStyle,
            fontWeight: h.fontWeight,
            height: "auto",
            margin: "0 0 0 0",
            padding: "3px 9px",
            position: "absolute",
            textAlign: "center",
            textDecoration: h.textDecoration,
            wordWrap: "break-word",
            width: "auto"
        });
        h.back ? c({
            background: "#000"
        }) : c({
            textShadow: "-2px 0px 1px #000,2px 0px 1px #000,0px -2px 1px #000,0px 2px 1px #000,-1px 1px 1px #000,1px 1px 1px #000,1px -1px 1px #000,1px 1px 1px #000"
        });
        this.show = function() {
            c({
                display: "block"
            });
            a()
        }
        ;
        this.update = function(a) {
            j = a;
            e && b()
        }
    }
}
)(jwplayer.html5);
(function(g) {
    var h = g.html5
      , f = g.utils
      , d = g.events
      , a = d.state
      , b = f.css;
    g = f.transitionStyle;
    var c = "button"
      , k = "text"
      , e = "divider"
      , m = "slider"
      , l = "100%"
      , j = {
        display: "none"
    }
      , r = {
        display: y
    }
      , q = !1
      , n = !0
      , t = null
      , y = void 0
      , p = window
      , z = document;
    h.controlbar = function(g, s) {
        function u(a, b, c) {
            return {
                name: a,
                type: b,
                className: c
            }
        }
        function x(a) {
            var b = q, c;
            K.elapsed && (c = f.timeFormat(a.position),
            K.elapsed.innerHTML = c,
            b = c.length != f.timeFormat(ra).length);
            K.duration && (c = f.timeFormat(a.duration),
            K.duration.innerHTML = c,
            b = b || c.length != f.timeFormat(na).length);
            0 < a.duration ? T(a.position / a.duration) : T(0);
            na = a.duration;
            ra = a.position;
            b && Da()
        }
        function v() {
            var a = G.jwGetMute();
            $("mute", a);
            Q(a ? 0 : sa)
        }
        function C() {
            sa = G.jwGetVolume() / 100;
            Q(sa)
        }
        function D() {
            b(B(".jwhd"), j);
            b(B(".jwcc"), j);
            Qa();
            Da()
        }
        function A(a) {
            Ra = a.currentQuality;
            ga && 0 <= Ra && ga.setActive(a.currentQuality)
        }
        function E(a) {
            ha && (Ha = a.track,
            ia && 0 <= Ha && ia.setActive(a.track))
        }
        function I() {
            P = f.extend({}, ya, ba.getComponentSettings("controlbar"), s);
            oa = H("background").height;
            b("#" + Z, {
                height: oa,
                bottom: za ? 0 : P.margin
            });
            b(B(".jwtext"), {
                font: P.fontsize + "px/" + H("background").height + "px " + P.font,
                color: P.fontcolor,
                "font-weight": P.fontweight
            });
            b(B(".jwoverlay"), {
                bottom: oa
            });
            0 < P.maxwidth && b(B(), {
                "max-width": P.maxwidth
            })
        }
        function B(a) {
            return "#" + Z + (a ? " " + a : "")
        }
        function J() {
            return z.createElement("span")
        }
        function O(a) {
            switch (a.type) {
            case e:
                var d;
                a.width ? (d = J(),
                d.className = "jwblankDivider",
                b(d, {
                    width: parseInt(a.width)
                })) : a.element ? d = F(a.element) : (d = F(a.name),
                d || (d = J(),
                d.className = "jwblankDivider"));
                a.className && (d.className += " " + a.className);
                return d;
            case k:
                a = a.name;
                d = {};
                var f = H(a + "Background");
                if (f.src) {
                    var g = J();
                    g.id = Z + "_" + a;
                    g.className = "jwtext jw" + a;
                    d.background = "url(" + f.src + ") no-repeat center";
                    d["background-size"] = "100% " + H("background").height + "px";
                    b(B(".jw" + a), d);
                    g.innerHTML = "00:00";
                    a = K[a] = g
                } else
                    a = null;
                return a;
            case c:
                if ("blank" != a.name)
                    return a = a.name,
                    H(a + "Button").src ? (d = J(),
                    d.className = "jw" + a + " jwbuttoncontainer",
                    f = z.createElement("button"),
                    f.addEventListener("click", U(a), q),
                    f.innerHTML = "\x26nbsp;",
                    d.appendChild(f),
                    f = H(a + "Button"),
                    g = H(a + "ButtonOver"),
                    M(B(".jw" + a + " button"), f, g),
                    (f = bb[a]) && M(B(".jw" + a + ".jwtoggle button"), H(f + "Button"), H(f + "ButtonOver")),
                    a = K[a] = d) : a = t,
                    a;
                break;
            case m:
                f = a.name;
                a = J();
                var n = f + ("time" == f ? "Slider" : "") + "Cap"
                  , j = (g = "volume" == f) ? "Top" : "Left"
                  , E = g ? "Bottom" : "Right"
                  , s = F(n + j, t, q, q, g)
                  , r = F(n + E, t, q, q, g);
                d = J();
                var u = ["Rail", "Buffer", "Progress"], A;
                d.className = "jwrail jwsmooth";
                for (var p = 0; p < u.length; p++) {
                    var v = "time" == f ? "Slider" : ""
                      , w = f + v + u[p]
                      , x = F(w, t, !g, "volume" == f)
                      , D = F(w + "Cap" + j, t, q, q, g)
                      , I = F(w + "Cap" + E, t, q, q, g)
                      , sa = H(w + "Cap" + j)
                      , C = H(w + "Cap" + E);
                    if (x) {
                        var O = J();
                        O.className = "jwrailgroup " + u[p];
                        D && O.appendChild(D);
                        O.appendChild(x);
                        I && (O.appendChild(I),
                        I.className += " jwcap" + (g ? "Bottom" : "Right"));
                        b(B(".jwrailgroup." + u[p]), {
                            "min-width": g ? y : sa.width + C.width
                        });
                        O.capSize = g ? sa.height + C.height : sa.width + C.width;
                        b(B("." + x.className), {
                            left: g ? y : sa.width,
                            right: g ? y : C.width,
                            top: g ? sa.height : y,
                            bottom: g ? C.height : y,
                            height: g ? "auto" : y
                        });
                        2 == p && (A = O);
                        K[w] = O;
                        d.appendChild(O)
                    }
                }
                if (v = F(f + v + "Thumb", t, q, q, g))
                    b(B("." + v.className), {
                        opacity: "time" == f ? 0 : 1,
                        "margin-top": g ? v.skin.height / -2 : y
                    }),
                    v.className += " jwthumb",
                    (g && A ? A : d).appendChild(v);
                d.addEventListener("mousedown", pa(f), q);
                "time" == f && (d.addEventListener("mousemove", R, q),
                d.addEventListener("mouseout", L, q));
                K[f + "Rail"] = d;
                A = H(n + j);
                n = H(n + j);
                H(f + "SliderRail");
                a.className = "jwslider jw" + f;
                s && a.appendChild(s);
                a.appendChild(d);
                r && (g && (r.className += " jwcapBottom"),
                a.appendChild(r));
                b(B(".jw" + f + " .jwrail"), {
                    left: g ? y : A.width,
                    right: g ? y : n.width,
                    top: g ? A.height : y,
                    bottom: g ? n.height : y,
                    width: g ? l : y,
                    height: g ? "auto" : y
                });
                K[f] = a;
                a.vertical = g;
                "time" == f ? (ja = new h.overlay(Z + "_timetooltip",ba),
                Ia = new h.thumbs(Z + "_thumb"),
                Sa = z.createElement("div"),
                Sa.className = "jwoverlaytext",
                Ja = z.createElement("div"),
                f = Ia.element(),
                Ja.appendChild(f),
                Ja.appendChild(Sa),
                ja.setContents(Ja),
                Va = d,
                W(0),
                f = ja.element(),
                d.appendChild(f),
                K.timeSliderThumb && b(B(".jwtimeSliderThumb"), {
                    "margin-left": H("timeSliderThumb").width / -2
                }),
                fa(0),
                T(0),
                T(0),
                fa(0)) : "volume" == f && (b(B(".jwvolume"), {
                    width: H("volumeRail").width + (g ? 0 : H("volumeCap" + j).width + H("volumeCap" + E).width),
                    height: g ? H("volumeCap" + j).height + H("volumeRail").height + H("volumeRailCap" + j).height + H("volumeRailCap" + E).height + H("volumeCap" + E).height : y
                }),
                g && (a.className += " jwvertical"));
                return a
            }
        }
        function F(a, c, d, e, g) {
            var h = J();
            h.className = "jw" + a;
            var k = e ? " left center" : " center";
            e = H(a);
            h.innerHTML = "\x26nbsp;";
            if (e && "" != e.src)
                return d = d ? {
                    background: "url('" + e.src + "') repeat-x " + k,
                    height: g ? e.height : y
                } : {
                    background: "url('" + e.src + "') no-repeat" + k,
                    width: e.width,
                    height: g ? e.height : y
                },
                h.skin = e,
                b(B(".jw" + a), f.extend(d, c)),
                K[a] = h
        }
        function M(a, c, d) {
            c.src && (b(a, {
                width: c.width,
                background: "url(" + c.src + ") center no-repeat"
            }),
            d.src && b(a + ":hover", {
                background: "url(" + d.src + ") center no-repeat"
            }))
        }
        function U(a) {
            return function() {
                if (Wa[a])
                    Wa[a]()
            }
        }
        function V(a) {
            for (var b in ta)
                b != a && ta.hasOwnProperty(b) && ta[b].hide()
        }
        function N() {
            za || (Aa.show(),
            V("volume"))
        }
        function ca() {
            za || (Ka.show(),
            V("fullscreen"))
        }
        function $(a, b) {
            f.exists(b) || (b = !La[a]);
            K[a] && (K[a].className = "jw" + a + (b ? " jwtoggle jwtoggling" : " jwtoggling"),
            setTimeout(function() {
                K[a].className = K[a].className.replace(" jwtoggling", "")
            }, 100));
            La[a] = b
        }
        function ka() {
            la && 1 < la.length && (Ta && (clearTimeout(Ta),
            Ta = void 0),
            ga.show(),
            V("hd"))
        }
        function Ma() {
            ha && 1 < ha.length && (Ua && (clearTimeout(Ua),
            Ua = void 0),
            ia.show(),
            V("cc"))
        }
        function Ea(a) {
            0 <= a && a < la.length && (G.jwSetCurrentQuality(a),
            ga.hide())
        }
        function Na(a) {
            0 <= a && a < ha.length && (G.jwSetCurrentCaptions(a),
            ia.hide())
        }
        function Oa(a) {
            a.preventDefault();
            z.onselectstart = function() {
                return q
            }
        }
        function pa(b) {
            return function(c) {
                0 == c.button && (K[b + "Rail"].className = "jwrail",
                "time" == b ? G.jwGetState() != a.IDLE && (G.jwSeekDrag(n),
                qa = b) : qa = b)
            }
        }
        function ua(a) {
            var b = (new Date).getTime();
            if (50 < b - Xa) {
                if ((Pa = f.bounds(Va)) && 0 != Pa.width) {
                    var c = ja.element()
                      , d = a.pageX - Pa.left - p.pageXOffset;
                    0 <= d && d <= Pa.width && (c.style.left = Math.round(d) + "px",
                    W(na * d / Pa.width),
                    va = f.bounds(S))
                }
                Xa = b
            }
            if (qa && 0 == a.button)
                return c = K[qa].getElementsByClassName("jwrail")[0],
                d = f.bounds(c),
                c = qa,
                d = K[c].vertical ? (d.bottom - a.pageY) / d.height : (a.pageX - d.left) / d.width,
                "mouseup" == a.type ? ("time" == c && G.jwSeekDrag(q),
                K[c + "Rail"].className = "jwrail jwsmooth",
                qa = t,
                Ya[c](d)) : ("time" == qa ? T(d) : Q(d),
                500 < b - Za && (Za = b,
                Ya[qa](d))),
                !1
        }
        function R() {
            ja && (na && !za) && (X(ja),
            ja.show())
        }
        function L() {
            ja && ja.hide()
        }
        function W(a) {
            Sa.innerHTML = f.timeFormat(a);
            Ia.updateTimeline(a);
            ja.setContents(Ja);
            va = f.bounds(S);
            X(ja)
        }
        function wa() {
            Ua = setTimeout(ia.hide, 500)
        }
        function da() {
            Ta = setTimeout(ga.hide, 500)
        }
        function xa(a, c, d, e) {
            var f = a.element();
            c.appendChild(f);
            c.addEventListener("mousemove", d, q);
            e ? c.addEventListener("mouseout", e, q) : c.addEventListener("mouseout", a.hide, q);
            b("#" + f.id, {
                left: "50%"
            })
        }
        function ma(a) {
            var b = J();
            b.className = "jwgroup jw" + a;
            Ba[a] = b;
            if (Y[a] && (b = Y[a],
            a = Ba[a],
            b && 0 < b.elements.length))
                for (var c = 0; c < b.elements.length; c++) {
                    var d = O(b.elements[c]);
                    d && ("volume" == b.elements[c].name && d.vertical ? (Aa = new h.overlay(Z + "_volumeOverlay",ba),
                    Aa.setContents(d)) : a.appendChild(d))
                }
        }
        function Qa() {
            1 < G.jwGetPlaylist().length && (!z.querySelector("#" + G.id + " .jwplaylist") || G.jwGetFullscreen()) ? (b(B(".jwnext"), r),
            b(B(".jwprev"), r),
            b(B(".nextdiv"), r)) : (b(B(".jwnext"), j),
            b(B(".jwprev"), j),
            b(B(".nextdiv"), j))
        }
        function X(a) {
            va || (va = f.bounds(S));
            a.offsetX(0);
            var b = f.bounds(a.element());
            b.right > va.right ? a.offsetX(va.right - b.right) : b.left < va.left && a.offsetX(va.left - b.left)
        }
        function fa(a) {
            a = Math.min(Math.max(0, a), 1);
            K.timeSliderBuffer && (K.timeSliderBuffer.style.width = 100 * a + "%",
            K.timeSliderBuffer.style.opacity = 0 < a ? 1 : 0)
        }
        function Ca(a, b) {
            var c = K[a].vertical
              , d = a + ("time" == a ? "Slider" : "")
              , e = 100 * Math.min(Math.max(0, b), 1) + "%"
              , f = K[d + "Progress"]
              , d = K[d + "Thumb"]
              , g = q;
            f && (c ? (f.style.height = e,
            f.style.bottom = 0,
            f.clientHeight <= f.capSize && (g = n)) : (f.style.width = e,
            f.clientWidth <= f.capSize && (g = n)),
            f.style.opacity = !g && 0 < b || qa ? 1 : 0);
            d && (c ? d.style.top = 0 : d.style.left = e)
        }
        function Q(a) {
            Ca("volume", a)
        }
        function T(a) {
            Ca("time", a)
        }
        function H(a) {
            return (a = ba.getSkinElement(0 == a.indexOf("volume") ? "tooltip" : "controlbar", a)) ? a : {
                width: 0,
                height: 0,
                src: "",
                image: y,
                ready: q
            }
        }
        var G, ba, aa = u("divider", e), ya = {
            margin: 8,
            maxwidth: 800,
            font: "Arial,sans-serif",
            fontsize: 11,
            fontcolor: 15658734,
            fontweight: "bold",
            layout: {
                left: {
                    position: "left",
                    elements: [u("play", c), aa, u("prev", c), u("next", c), u("divider", e, "nextdiv"), u("elapsed", k)]
                },
                center: {
                    position: "center",
                    elements: [u("time", m)]
                },
                right: {
                    position: "right",
                    elements: [u("duration", k), aa, u("hd", c), u("cc", c), aa, u("mute", c), u("volume", m), aa, u("fullscreen", c)]
                }
            }
        }, P, Y, K, oa, S, Z, na, ra, la, Ra, ha, Ha, sa, Aa, va, Va, Pa, ja, Ja, Ia, Sa, Ta, ga, Ua, ia, Ka, $a, Fa, za = q, qa = q, Za = 0, Xa = 0, bb = {
            play: "pause",
            mute: "unmute",
            fullscreen: "normalscreen"
        }, La = {
            play: q,
            mute: q,
            fullscreen: q
        }, Wa = {
            play: function() {
                La.play ? G.jwPause() : G.jwPlay()
            },
            mute: function() {
                G.jwSetMute(!La.mute);
                v({
                    mute: La.mute
                })
            },
            fullscreen: function() {
                G.jwSetFullscreen()
            },
            next: function() {
                G.jwPlaylistNext()
            },
            prev: function() {
                G.jwPlaylistPrev()
            }
        }, Ya = {
            time: function(a) {
                G.jwSeek(a * na)
            },
            volume: function(a) {
                Q(a);
                0.1 > a && (a = 0);
                0.9 < a && (a = 1);
                G.jwSetVolume(100 * a)
            }
        }, ta = {}, ea = this, Ba = {}, Da = function() {
            clearTimeout($a);
            $a = setTimeout(ea.redraw, 0)
        };
        ea.redraw = function() {
            I();
            var a = H("capLeft")
              , c = H("capRight");
            b(B(".jwgroup.jwcenter"), {
                left: Math.round(f.parseDimension(Ba.left.offsetWidth) + a.width),
                right: Math.round(f.parseDimension(Ba.right.offsetWidth) + c.width)
            });
            a = S.parentNode.clientWidth > P.maxwidth;
            c = za ? 0 : P.margin;
            b(B(), {
                left: a ? "50%" : c,
                right: a ? y : c,
                "margin-left": a ? S.clientWidth / -2 : y,
                width: a ? l : y
            });
            var d;
            va = f.bounds(S);
            for (d in ta)
                X(ta[d])
        }
        ;
        ea.audioMode = function(a) {
            a != za && (za = a,
            b(B(".jwfullscreen"), {
                display: a ? "none" : y
            }),
            b(B(".jwhd"), {
                display: a ? "none" : y
            }),
            b(B(".jwcc"), {
                display: a ? "none" : y
            }),
            Da())
        }
        ;
        ea.element = function() {
            return S
        }
        ;
        ea.margin = function() {
            return parseInt(P.margin)
        }
        ;
        ea.height = function() {
            return oa
        }
        ;
        ea.show = function() {
            ea.visible || (clearTimeout(Fa),
            Fa = y,
            ea.visible = !0,
            S.style.display = "inline-block",
            Da(),
            v(),
            Fa = setTimeout(function() {
                S.style.opacity = 1
            }, 10))
        }
        ;
        ea.hide = function() {
            ea.visible && (ea.visible = !1,
            S.style.opacity = 0,
            clearTimeout(Fa),
            Fa = y,
            Fa = setTimeout(function() {
                S.style.display = "none"
            }, 150))
        }
        ;
        K = {};
        G = g;
        Z = G.id + "_controlbar";
        na = ra = 0;
        S = J();
        S.id = Z;
        S.className = "jwcontrolbar";
        ba = G.skin;
        Y = ba.getComponentLayout("controlbar");
        Y || (Y = ya.layout);
        f.clearCss("#" + Z);
        I();
        var Ga = F("capLeft")
          , aa = F("capRight")
          , ab = F("background", {
            position: "absolute",
            left: H("capLeft").width,
            right: H("capRight").width,
            "background-repeat": "repeat-x"
        }, n);
        ab && S.appendChild(ab);
        Ga && S.appendChild(Ga);
        ma("left");
        ma("center");
        ma("right");
        S.appendChild(Ba.left);
        S.appendChild(Ba.center);
        S.appendChild(Ba.right);
        K.hd && (ga = new h.menu("hd",Z + "_hd",ba,Ea),
        xa(ga, K.hd, ka, da),
        ta.hd = ga);
        K.cc && (ia = new h.menu("cc",Z + "_cc",ba,Na),
        xa(ia, K.cc, Ma, wa),
        ta.cc = ia);
        K.mute && (K.volume && K.volume.vertical) && (Aa = new h.overlay(Z + "_volumeoverlay",ba),
        Aa.setContents(K.volume),
        xa(Aa, K.mute, N),
        ta.volume = Aa);
        K.fullscreen && (Ka = new h.overlay(Z + "_fullscreenoverlay",ba),
        Ga = z.createElement("div"),
        Ga.className = "jwoverlaytext",
        Ga.innerHTML = "Fullscreen",
        Ka.setContents(Ga),
        xa(Ka, K.fullscreen, ca),
        ta.fullscreen = Ka);
        b(B(".jwright"), {
            right: H("capRight").width
        });
        aa && S.appendChild(aa);
        G.jwAddEventListener(d.JWPLAYER_MEDIA_TIME, x);
        G.jwAddEventListener(d.JWPLAYER_PLAYER_STATE, function(c) {
            switch (c.newstate) {
            case a.BUFFERING:
            case a.PLAYING:
                b(B(".jwtimeSliderThumb"), {
                    opacity: 1
                });
                $("play", n);
                break;
            case a.PAUSED:
                qa || $("play", q);
                break;
            case a.IDLE:
                $("play", q),
                b(B(".jwtimeSliderThumb"), {
                    opacity: 0
                }),
                K.timeRail && (K.timeRail.className = "jwrail",
                setTimeout(function() {
                    K.timeRail.className += " jwsmooth"
                }, 100)),
                fa(0),
                x({
                    position: 0,
                    duration: 0
                })
            }
        });
        G.jwAddEventListener(d.JWPLAYER_PLAYLIST_ITEM, function(a) {
            a = G.jwGetPlaylist()[a.index].tracks;
            if ("array" == f.typeOf(a))
                for (var b = 0; b < a.length; b++)
                    if (a[b].file && a[b].kind && "thumbnails" == a[b].kind.toLowerCase()) {
                        Ia.load(a[b].file);
                        return
                    }
            Ia.load()
        });
        G.jwAddEventListener(d.JWPLAYER_MEDIA_MUTE, v);
        G.jwAddEventListener(d.JWPLAYER_MEDIA_VOLUME, C);
        G.jwAddEventListener(d.JWPLAYER_MEDIA_BUFFER, function(a) {
            fa(a.bufferPercent / 100)
        });
        G.jwAddEventListener(d.JWPLAYER_FULLSCREEN, function(a) {
            $("fullscreen", a.fullscreen);
            Qa()
        });
        G.jwAddEventListener(d.JWPLAYER_PLAYLIST_LOADED, D);
        G.jwAddEventListener(d.JWPLAYER_MEDIA_LEVELS, function(a) {
            if ((la = a.levels) && 1 < la.length && ga) {
                b(B(".jwhd"), {
                    display: y
                });
                ga.clearOptions();
                for (var c = 0; c < la.length; c++)
                    ga.addOption(la[c].label, c);
                A(a)
            } else
                b(B(".jwhd"), {
                    display: "none"
                });
            Da()
        });
        G.jwAddEventListener(d.JWPLAYER_MEDIA_LEVEL_CHANGED, A);
        G.jwAddEventListener(d.JWPLAYER_CAPTIONS_LIST, function(a) {
            if ((ha = a.tracks) && 1 < ha.length && ia) {
                b(B(".jwcc"), {
                    display: y
                });
                ia.clearOptions();
                for (var c = 0; c < ha.length; c++)
                    ia.addOption(ha[c].label, c);
                E(a)
            } else
                b(B(".jwcc"), {
                    display: "none"
                });
            Da()
        });
        G.jwAddEventListener(d.JWPLAYER_CAPTIONS_CHANGED, E);
        S.addEventListener("mouseover", function() {
            p.addEventListener("mousemove", ua, q);
            p.addEventListener("mouseup", ua, q);
            p.addEventListener("mousedown", Oa, q)
        }, !1);
        S.addEventListener("mouseout", function() {
            p.removeEventListener("mousemove", ua);
            p.removeEventListener("mouseup", ua);
            p.removeEventListener("mousedown", Oa);
            z.onselectstart = null
        }, !1);
        setTimeout(function() {
            C();
            v()
        }, 0);
        D();
        ea.visible = !1
    }
    ;
    b(".jwcontrolbar", {
        position: "absolute",
        opacity: 0,
        display: "none"
    });
    b(".jwcontrolbar span", {
        height: l
    });
    f.dragStyle(".jwcontrolbar span", "none");
    b(".jwcontrolbar .jwgroup", {
        display: "inline"
    });
    b(".jwcontrolbar span, .jwcontrolbar .jwgroup button,.jwcontrolbar .jwleft", {
        position: "relative",
        "float": "left"
    });
    b(".jwcontrolbar .jwright", {
        position: "absolute"
    });
    b(".jwcontrolbar .jwcenter", {
        position: "absolute"
    });
    b(".jwcontrolbar buttoncontainer,.jwcontrolbar button", {
        display: "inline-block",
        height: l,
        border: "none",
        cursor: "pointer"
    });
    b(".jwcontrolbar .jwcapRight,.jwcontrolbar .jwtimeSliderCapRight,.jwcontrolbar .jwvolumeCapRight", {
        right: 0,
        position: "absolute"
    });
    b(".jwcontrolbar .jwcapBottom", {
        bottom: 0,
        position: "absolute"
    });
    b(".jwcontrolbar .jwtime", {
        position: "absolute",
        height: l,
        width: l,
        left: 0
    });
    b(".jwcontrolbar .jwthumb", {
        position: "absolute",
        height: l,
        cursor: "pointer"
    });
    b(".jwcontrolbar .jwrail", {
        position: "absolute",
        cursor: "pointer"
    });
    b(".jwcontrolbar .jwrailgroup", {
        position: "absolute",
        width: l
    });
    b(".jwcontrolbar .jwrailgroup span", {
        position: "absolute"
    });
    b(".jwcontrolbar .jwdivider+.jwdivider", {
        display: "none"
    });
    b(".jwcontrolbar .jwtext", {
        padding: "0 5px",
        "text-align": "center"
    });
    b(".jwcontrolbar .jwoverlaytext", {
        padding: 3,
        "text-align": "center"
    });
    b(".jwcontrolbar .jwvertical *", {
        display: "block"
    });
    g(".jwcontrolbar", "opacity .15s, background .15s, visibility .15s");
    g(".jwcontrolbar button", "opacity .15s, background .15s, visibility .15s");
    g(".jwcontrolbar .jwtime .jwsmooth span", "opacity .15s, background .15s, visibility .15s, width .15s linear, left .05s linear");
    g(".jwcontrolbar .jwtoggling", "none")
}
)(jwplayer);
(function(g) {
    var h = g.html5
      , f = g.utils
      , d = g.events
      , a = d.state;
    h.controller = function(b, c) {
        function k(a) {
            w.sendEvent(a.type, a)
        }
        function e(a) {
            l(!0);
            switch (f.typeOf(a)) {
            case "string":
                var b = new h.playlistloader;
                b.addEventListener(d.JWPLAYER_PLAYLIST_LOADED, function(a) {
                    e(a.playlist)
                });
                b.addEventListener(d.JWPLAYER_ERROR, function(a) {
                    e([]);
                    a.message = "Could not load playlist: " + a.message;
                    k(a)
                });
                b.load(a);
                break;
            case "object":
            case "array":
                p.setPlaylist(new g.playlist(a));
                break;
            case "number":
                p.setItem(a)
            }
        }
        function m(b) {
            f.exists(b) || (b = !0);
            if (!b)
                return j();
            try {
                0 <= u && (e(u),
                u = -1);
                v = m;
                if (!x && (x = !0,
                w.sendEvent(d.JWPLAYER_MEDIA_BEFOREPLAY),
                x = !1,
                D)) {
                    D = !1;
                    v = null;
                    return
                }
                if (p.state == a.IDLE) {
                    if (0 == p.playlist.length)
                        return !1;
                    z.load(p.playlist[p.item])
                } else
                    p.state == a.PAUSED && z.play();
                return !0
            } catch (c) {
                w.sendEvent(d.JWPLAYER_ERROR, c),
                v = null
            }
            return !1
        }
        function l(b) {
            v = null;
            try {
                return p.state != a.IDLE ? z.stop() : b || (C = !0),
                x && (D = !0),
                !0
            } catch (c) {
                w.sendEvent(d.JWPLAYER_ERROR, c)
            }
            return !1
        }
        function j(b) {
            v = null;
            f.exists(b) || (b = !0);
            if (!b)
                return m();
            try {
                switch (p.state) {
                case a.PLAYING:
                case a.BUFFERING:
                    z.pause();
                    break;
                default:
                    x && (D = !0)
                }
                return !0
            } catch (c) {
                w.sendEvent(d.JWPLAYER_ERROR, c)
            }
            return !1
        }
        function r(a) {
            e(a);
            m()
        }
        function q() {
            r(p.item + 1)
        }
        function n() {
            p.state == a.IDLE && (C ? C = !1 : (v = n,
            p.repeat ? q() : p.item == p.playlist.length - 1 ? (u = 0,
            l(!0),
            setTimeout(function() {
                w.sendEvent(d.JWPLAYER_PLAYLIST_COMPLETE)
            }, 0)) : q()))
        }
        function t(a) {
            return function() {
                s ? y(a, arguments) : A.push({
                    method: a,
                    arguments: arguments
                })
            }
        }
        function y(a, b) {
            var c = [], d;
            for (d = 0; d < b.length; d++)
                c.push(b[d]);
            a.apply(this, c)
        }
        var p = b, z = b.getVideo(), w = new d.eventdispatcher(p.id,p.config.debug), s = !1, u = -1, x, v, C = !1, D, A = [];
        f.extend(this, w);
        this.play = t(m);
        this.pause = t(j);
        this.seek = t(function(b) {
            p.state != a.PLAYING && m(!0);
            z.seek(b)
        });
        this.stop = function() {
            C = !0;
            t(l)()
        }
        ;
        this.load = t(e);
        this.next = t(q);
        this.prev = t(function() {
            r(p.item - 1)
        });
        this.item = t(r);
        this.setVolume = t(p.setVolume);
        this.setMute = t(p.setMute);
        this.setFullscreen = t(function(a) {
            c.fullscreen(a)
        });
        this.setStretching = t(function(a) {
            p.stretching = a;
            c.resize()
        });
        this.detachMedia = function() {
            try {
                return p.getVideo().detachMedia()
            } catch (a) {
                return null
            }
        }
        ;
        this.attachMedia = function(a) {
            try {
                p.getVideo().attachMedia(a),
                "function" == typeof v && v()
            } catch (b) {
                return null
            }
        }
        ;
        this.setCurrentQuality = t(function(a) {
            z.setCurrentQuality(a)
        });
        this.getCurrentQuality = function() {
            return z ? z.getCurrentQuality() : -1
        }
        ;
        this.getQualityLevels = function() {
            return z ? z.getQualityLevels() : null
        }
        ;
        this.setCurrentCaptions = t(function(a) {
            c.setCurrentCaptions(a)
        });
        this.getCurrentCaptions = function() {
            return c.getCurrentCaptions()
        }
        ;
        this.getCaptionsList = function() {
            return c.getCaptionsList()
        }
        ;
        this.playerReady = function(a) {
            if (!s) {
                c.completeSetup();
                w.sendEvent(a.type, a);
                g.utils.exists(window.jwplayer.playerReady) && g.playerReady(a);
                p.addGlobalListener(k);
                c.addGlobalListener(k);
                w.sendEvent(g.events.JWPLAYER_PLAYLIST_LOADED, {
                    playlist: p.playlist
                });
                w.sendEvent(g.events.JWPLAYER_PLAYLIST_ITEM, {
                    index: p.item
                });
                e();
                p.autostart && !f.isMobile() && m();
                for (s = !0; 0 < A.length; )
                    a = A.shift(),
                    y(a.method, a.arguments)
            }
        }
        ;
        p.addEventListener(d.JWPLAYER_MEDIA_BUFFER_FULL, function() {
            z.play()
        });
        p.addEventListener(d.JWPLAYER_MEDIA_COMPLETE, function() {
            setTimeout(n, 25)
        });
        p.addEventListener(d.JWPLAYER_MEDIA_ERROR, function(a) {
            a = f.extend({}, a);
            a.type = d.JWPLAYER_ERROR;
            w.sendEvent(a.type, a)
        })
    }
}
)(jwplayer);
(function(g) {
    g.html5.defaultskin = function() {
        this.text = '\x3c?xml version\x3d"1.0" ?\x3e\x3cskin author\x3d"LongTail Video" name\x3d"Six" version\x3d"2.0" target\x3d"6.0"\x3e\x3ccomponents\x3e\x3ccomponent name\x3d"controlbar"\x3e\x3csettings\x3e\x3csetting name\x3d"margin" value\x3d"8"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"eeeeee"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"bold"/\x3e\x3csetting name\x3d"maxwidth" value\x3d"800"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAIAAAD5ZqGGAAAAJklEQVR42mNKSUlhevToEdPXr1+Z/v37RxH+//8/htjv379BZgMA4j5LOzqaqAsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAaCAYAAAB/75arAAAAh0lEQVR42t2RywnDMAxAhSbJRukGPtgDdJSO0k7U4IOPBhuM8b9SIAG3p0JPFTwETxJICIFCSrkqpZ7EYFAIsbbW7s65RWsNDJK4ee/BGAMhhB2stS7WWui9n7CEGOMsaXwSZ+d/yR+cOcaY+HL8vcByyzl/7HllyX8qpexgSulBhQvl7XjxCydafIt3Z4BrAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAaCAYAAAB/75arAAAAjUlEQVR42tWRywnDMAxAhSbJRukGPtgDdJSO0k7U4INPvthgjP+VSlsSkkvpqYKH4EnCFkKl1Hhxl1LOQIFaa2Ccc1Nr7SqEmDGEAIwxBrz3QIUL9t7hjbUWaq3TRqaUWMJGMjS+l4edfy2/XHOMAWt+eJ3FTuacWS5YSgEmxviU9M/z58R0tIXEifLtATSUfIsSwhegAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAEElEQVR42mP4//8/A8NAEgDiqk2zfDlcXgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"playButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAdUlEQVR42u2TsQ3AIAwE2YARMkJGyCiMwiiMwgjUFMAIjOC8lMJdiIjd+aSrr3i9MwzjHXoYMOgFmAIvvQCT4aEXYNLvEK2ZMEKvFODQVqC1Rl/sve8Faq20cMIIvUYgQR5ZMJDh6RixQIF8NMHAgMEZhrHNDU+1T3s3o0CaAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAABhUlEQVR42uXVzUoCYRTGcXNGR3HSDPtASyIhrIjaFJlBRBRUdAUGQQurdVfSrl2LuhEvYxR1IYroRhCEWU1/4R2Yxcz4MUlQB34bGc6D58y8r+/vl2EYczNpKvitzN9/orEEGUEoQhAyJDNs2gAJCiKIYVGIQUUIAWvQNM2jWMEGtoRNpJBAFOGJgsRDAahYRRbHuMAVznGEHaSxZBNkvyPLQhXEkUEew+riE88o4AYn2BVBCcxDgWz+G6fxhLGMPdzBWh184RUPuEUOWaSwgBBkpwAZESRxiALsqoV3EXSPSxwgLUIUc1xOAWvI4RFupeENRVxjH0moCMBvF6BiHXkUMap0lPCCM2QQh2LuwingFE8Ytwa4wTYSCEEaGVCtVo1x1Gq1CQPEiDRNM9yUy2W92WyWdF13HJHrkt2aNxoNbTAYuC555Gtq17her7f6/f7HmK+p+4dmbcysO71ez8OHZnNUDBtXKpVuu932clTM/rCb/XHt/cL5/SvT+6XvKcz3r+sbpPMfjCOvfIMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"pauseButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAN0lEQVR42u3NoQ0AMAwDwe6/YYBncWlUyQFBBX+SickfADM/0k+AQCbJffHfqir3hZ/ADwEAowtQ1mmQzb8rQgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"pauseButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAABdUlEQVR42t2WzWrCQBSFq1FSaSjaFi1iF6UFtdBdF6WhC0Hoym3BlSAu+wbddSF9xfyTJ7k9gRMJuY2Oi2w88BG5zLlHZiYzOTttiUijyP768Y2bxCKVv0nD+B/T2AY2OAcdPnOKNZtjrdx/KMCi6QJ0wTW44fOKFGtdjrXzEJPml2AA7sEEPIExeCRj1iYcM6CnOoTz2AYOuAVT8Arm4APMwDuZsTbnmCk9Dns0qxbVBj3wAFzR+iRlufT02IOLrqenA/rgGSxE64uUtaCnzx7WfwEtLtYQvIClaH2Tspb0DNmjtS9gxHldidYPKWtFz+hQgAPuwBtYi9aWlLXOPPQ6JgEu2IjWLylrQ89xAVEUSRzHkiSJpGm6C8jqBVSA8RR5nie+70sQBHmjbUZWL6CmyHiRVQAXWQfoRTbapiqA21QH6G1q9KJl5jwkDMPdi6YCzF40fVSoAB4VKqDiqKj1sKv9uK71wqn9yqzt0q/vs+Wk9QeSkdKwXIKzCgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"prevButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAfUlEQVR42u2MwQnAIAxFu4EjOIIjOFJH6EiCF8fw7BQZwf5AegkU2tje8uGR5Afe5vH8mTHGZG5+EXSzSPoMCEyzCPd+9SYRZgCFb7MIJNB5XxURT7OotTYFkql5Jqq1TiGBzrvinUj2AMqSSHXHikj3GZBVpH8R9M3j+Tgn8lcGnlSSd08AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"prevButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAABhUlEQVR42uXUz0oCURTH8VKz/BNFmZJ/iMAoEmohlRRI7Yp2Qa0igyJc9Qot2vUGbnwB3yJXPYKaCi5m62LQzSymr3KE09hAi1nVgQ93hnv4wZ259878o7Jte/YXfADPcAvwIeDgFwHMKYFJoDPILw0hREQYCyKMKBZlDCEIvzMkiAhWEEdCxlURRwoZJBGTwOA4SC0nLJMb2MGujFlsIYc8DrCPrIRHZtR3mccSMtI0qTMUcYoLXKGMTxxiE8t6WSHEsI2iCirhDg94RgVDmTtHDmvjILWsBPZwqYJe8Io3vEPXDfJY10ERJGXiWjVXUYMBZ5VQQMoZlMIRblVzHSZ+qkccI62DokijgHvVbMGtnnCCjGtQu922R7rdriXPU3SQ69IajYY9MhgM6p1Ox5R3zbE0l4+tmquWZdV6vZ7hDNIf2/X3T5r17zcM40MH6d/vuiGleWpD9vv9SrPZHDLn2JAuR0QFTR0R0zTLrVbr2xHx7NB6do14drF5dtV6c/n/7foCpva8IJ04vWUAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"nextButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAdklEQVR42u3OwQnAIAyF4WzgCB3BERypI3QkwYtjeHaKjGBfIeClFmvaWx58KAg/ks329WqtBbbBW7vMhhowBH2o2/WhLoJTh0QBrw4JfhXKObcBlnMulFJqNwp4uS+HIjjCNKGDZKshhkCYJlRge/ot2Ww/7gSJGQaejWvrvwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"nextButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAABjElEQVR42uXUPUvDQBwGcNvUatOK4kuKfUEERVGwg/iCguimuAk6iQqKOPkVHLr5DVz8An4LO/kR2jQtZMjaIbRLhvOpPOHOJMahnfQPP5IcyXO5S+5G/ngJIRKUpMRvwiEyIAWjPl5rlApIhgJ5YxoykIMJHnUYJx2ylGFHWjAozQdnoQBlKIIBM2RAnsdpBqa/hbHRgCWowBZswjoss30V1nhcYKe6P0w/aAoWYRua8ABncAKHcABHQlaFbz0JY/589YPm2Psxb+zBCzzCLVzBtWAxeIVvlQHND5rnUC5ArXd4hio8Ke2nsAF5OTwEcWJ32WuwHHiDV6XtnB0XIKsGlWAP7iCqXKgp15ewA8VgUBn24R5+Kk85v+EISpCLDLIsS0Rpt9sez+OC5NDq9boIarVabrfbrfE6bmhysoMhtm07nud9TTbb4iZbfn41xHGcD/Xzsz3u88sfsn9jo9HodTqd0A/JoLgfUi4R0zSbrutGLhEGxS2RwRftMLeRwTe2oW21g2/+/6c+AdO5vCABA1zBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"elapsedBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAEElEQVR42mP4//8/A8NAEgDiqk2zfDlcXgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAcCAYAAABCgc61AAAAD0lEQVQoFWNgGAWjYGgCAAK8AAEb3eOQAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAcCAYAAABCgc61AAAAD0lEQVQoFWNgGAWjYGgCAAK8AAEb3eOQAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAALElEQVQY02NkQAOMg1aAmZn5P4oALy8vqoCYmBiqgIKCAqqAmpoaxQJDJsQA+54Krz/ExkoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAWklEQVR42tWLsQlAIQwFBcVKGyEGK61cJ/tXGeVptPjwN/DgQnIQ9xYxRgkhqPceLqUkW5g5Z7g91BYiQq31BDAzxhjmDb13zDnN+/IP0lr7glFKkX3oCc+wAHpnIpi5hlqoAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAVklEQVR42tXJMQ4AIQhEURKMFZZCrLDyOty/4ijsYuJWewEn+c0buGeIGKUUr7XahtZaENHJgJmj9x7vkTnMOSMTkY2w1opMVX/BPxhjJNgBFxGDq/YAy/oipxG/oRoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderBuffer" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAE0lEQVQYV2NgGErgPxoeKIGhAQB1/x/hLROY4wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderBufferCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAJ0lEQVQYlWNgGGrAH4jvA/F/GOc/EobLwAX+ExTA0IJhKIa1QwMAAIX5GqOIS3lSAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBufferCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAJ0lEQVQY02NgGErgPxDfB2J/ZAEY9kcXuI8u8J+gwH2chqJYOzQAALXhGqOFxXzUAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAALUlEQVQYV2NgGCqA8T8QIAuwoPEZWD58+IAq8Pr1a1IF3r59iyrw9+9fhqEJABv9F+gP7YohAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAASklEQVR42tXDQQ0AIAwDwDqcPhLQgAlM8JqDORilnyVY4JLDX0iaOgWZaeccVkSEKyv23nxjrcU35pyurBhjWO+dFZDWmqkr8Y0Lr65i67XRzKcAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAS0lEQVQY09XDQQ0AIRAEwXa4+iYBDZjABC8c4ADmHheStUAlBc/wb9oOAM45vvfewVrL6WSM4Zzeu3Naa04npRTftdZAkiVNScFTPhkFYuvY2zeUAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAcCAYAAABYvS47AAAAwElEQVR42tWTPQrCQBCF84OsYJCIYEQrsZAU6QKx9xheyG4L6zTZs3iInGZ9Tx4iAWHaDHwwvPlgyWY2mVvFGNNf/gmZyEUm0q+kwQI4sBROWf6R2ShcgRJsRanM0UnUrEEFTuBC1FeaOYoF2IMaXMGNqK81KyhuwDmEcB/H8RVV7JlxRofiDjTe+0eclLKGDsUDaPu+91NRWUuH4hF0wzA8p6Kyjo5ZNB9t/hjz9Zgv3PwLzUthXjPT4hqewrzqDfMnQ2tu8Pr1AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"durationBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAEElEQVR42mP4//8/A8NAEgDiqk2zfDlcXgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"hdButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAMAAACu5JSlAAAAZlBMVEUAAACysrLZ2dkmJiYuLi4xMTE3Nzc8PDxAQEBJSUlRUVFSUlJaWlpdXV1jY2NpaWlsbGx0dHR3d3d4eHh9fX2KioqPj4+SkpKVlZWXl5ehoaGpqamsrKyysrK3t7fCwsLNzc3Z2dkN+/dcAAAAA3RSTlMAf3+Sa81KAAAAh0lEQVQoU+3J0RpCQBCA0dW/i02KpEIzzPu/ZJc+7CM4t8e5k3PuYgmX9VNttv2W2iww9gDhe/iK3mZYHhRVIBwe+l9PYQWjzbB/BYB6gdl096ra4WP0PD/kqh25qq4vIjfuIvBuuMrkaURk8yUvGUAiefSU0/5hkJZSPECcZP8J62epztzpDzcuFrDsGN7pAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"hdButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAYAAACZOmSXAAACFUlEQVR42u2WsWoCQRCGE42I5AikkSBaGSwsAiIpQi4BK0vF+qwEjb1gaWMlaGfvA5xYWvgCNraChY0+gU+wmR3+DcPGC0lQrnHg43bvbv5/d25v764uYYdS6voc/MY0AqLEzYmICt3roJlGiRgRJxLELXD+g8hPQDPGHnIAwjiOpHsiSaSINMj8CeRBIwlNBx7RY8Z3xAORJZ6IZ+KFeCXcP/KK3GdoZbU2POLGPIJyOLiYJ96ICuERDaJJtIiPX9JCTgMaFWjm4eHIBRZHWR6Jd8JXpw8f2o/aS5Y8QSRRnqo6X1ThkTTmN1iRKTwfz87o9/sql8updrutTBSLRT63WCzUZDLhtoCvT6dTW8qDR8o2T2OBNL5leJ4WZBMd+/3+y+RwOKhut8vtUqnE92JgfLSiAY+0NHeIDFZo085gI5gvl0s+GjMKPpoq2IOzogmPzDFzl1eriPV6zSI2eAw8c/TZ1M6RAW33R/PtdqsMo9GIRQqFgqrVagy1+dxwOFSz2YzbrutaOeIckOaBZd9sNgro2bFQp9Mx575m5fu+6vV63K7X63xttVqZwfE1qSXLHrjgZEK5XGah8XjM/fl8bsx1nyuBWcqq6DweiNSSCy7wVZMJMNKm3B8MBkac+zCT8CBgLLFetYBNBjefHLnJBG6vu93OP7Wx1pTba6gfllA/qaH+TIT6GxXaD2Q4v86XoPgE1h55oNE1QD4AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"ccButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAMAAACqEUSYAAAAXVBMVEUAAACysrLZ2dkmJiYuLi4xMTFAQEBHR0dJSUlKSkpRUVFSUlJaWlpdXV1jY2N0dHR9fX1/f3+Pj4+SkpKVlZWXl5ehoaGpqamsrKytra2ysrK3t7fCwsLNzc3Z2dky1qB2AAAAA3RSTlMAf3+Sa81KAAAAe0lEQVR42uXNQRKCMBAAQWCCIgGCGEU3sv9/JpXykCLxB8y1D1OdsEaLmqT6p6M6wKn6FuyWaUQL9zdcW2yuLV49dmTUL2S6gcYsr+IbwgdC7MYj/EoqIoZFHF1PL08QkYNO0MG8wMUw5LoOwCQyG+jWTMuS1iXW1SnbAaDLE32SOX+lAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"ccButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAB8UlEQVR42uWWsWoCQRCGEzUcEhFsQpCzUiwsBBGLoElrp0HbsxI09j6ClaXgW5xYWvgCNhaWFjb6BD7BZmb5HWSXXAw5rnHg43bd3f/fG+f27uE+Qyn1GCa3mMVAnEj8k7jowdwyxKQnwiGSxDNI/Qmsg4YDzbh15/jRwaIM8UJkCRfkbsQFWWhkoOmwh2nqEGnilcgTZaJGvBF1onEjdaypQSMPzbRlzLvBYIl4J9qER/SJATEkvn5hiLl9rG1DqwTtFFId06ZIQ4H4IHwVXvjQLMDDkcJC/svEpwo5oFmGR1JSjD++ptNixGQyUcViUeD+JRaLhapWqzLmeZ46n8+mhAftLKo6cTF1UQB921AEpT2bzdRms5F+q9Vic5lnRB/armmaI+ooBAkI6TvCnYnwaDTitr5ynE4n2YQRA9aGR8o0baAKOXSaRMQOufP1eq2CApqNQNPD4aCY3W4nptS36Ha7emy5XHL/R4JNkd79fq8uVCoVLez7vu5Pp1Pd73Q6qtfrcZuvemy1WskmrzQC0yuFdL1gPB5rERhJez6f80ak32w29QbxHxumdiFZj8z1gu12KwUD9EYwzuYwk43xGsPUfmSswwGTwyLwcJBj8Hg8+mEZklbgMRj9gR/9qy36l3j0nyuRfphF+wl69/ENcVv6gzz3ulwAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"muteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAA30lEQVR42u2UzQmEMBCFtwNLsARLSAkpwVJSwpZgCQEv6skS5iieLCElzL6FJwxCDlllT3nwkb8hXxLQV01Nzc/Z9739l8gBBRE0j94AiBk3oAceJCCPCM2GauY6zh3AsR/vit5AT8zzBbZCoWdNWypQS0YmQM2tekpDkWzbNs1xqRMQwGraMtk8z5rD1k3TJJgLYF2WZfi2oEw2jqPm4HoHhHMOJNCDAxTLnGHIyALXhRLPmnsfOU+dTpkRJooc+/F1N/bpzLjhITxFAp77i1w3440UxALRzQPU1NTk8gF0y3zyjAvd3AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"muteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAC2UlEQVR42u3WPUwTYRzHcWmBFnqKBYpAHVSQoEB8QTQaiMSILhgDiiFxUBMSlUETnYiDg9GJmDA44OCgo8bF18EFibq5MEBpeUsDIaVAm6P02qTUb5N/k5P2oNg46ZN88tz1yT2//p9e77lt/1u6Fo/Hc9L5GwEmmJGrY4bpz0JlcoOAPFhRCAU2FMAi46YtBa4LyEM+LBKwHSUoh1OUYaeM5yUDtxpSAAVFKJZJd6MGh9GEY6jHXjigpAQaBskySQWlcMpE+3FQJj+DDtxBN9pxCjUogw25yEkJEWbkw4ZiqaBWJm9GK86jEz0YRKKNok9Cm1El11th/i1QF2TBDuxCtYS0oQv3MIObuI+nGMIwIljAQ1xGI5xQINWlBhXBiTqclgtv4xXCUsUTDOADotAwIsce9OIsqmFHPkzJsORvpKACDVLNNfThJ/TtBb7ADRfCEjQm4/3okHkcyaXU3xAW2FEtFW3U3uAbVDn3IQYvQhjGVTSiHIX6MDMK4EA9LsRisbgR2jt8wg/OtbW1NZU+Qu+nX6T/zth1nEBl8q5cH1aGQ+icmpqKG9GHeb1ebWlpSZ2bm4v4fL7A7OzsIn1GYQ7Uod3lcsWN0N6GQqGhyclJNXG+srLic7vdseXlZa/H4wkRnLKMRr9ZFVr8fv8jLh4MBAKv+fbudWEvCfs8Pz/vUVXVRbXaxMRENBgMjiXGV1dX094g6e7GcqmuFVfQiwcszfvx8fGwhPXjGYEf+SxKNRqhI4nj6elpw1vf6A9dgRo0yUWXcINv/piJvRzfRV80Gh1gBb6yAsMERahugc82/FOnC1RQonvYHkELzoXD4S76i+jGLYKeJ6qlolGCtvC4gv5Jr9tGKrEPB9CAoziJNnRqmtaz2YM40+3FCgV2OHT71x7UStXH0ZTJFpNpqEWqtUnFRShFxWabZ1bvHLpd2yrhijB4LcjyXSSLF56sw4WE/HPtFwoiecfnKRGcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAAk0lEQVR42u2NwQnDMAxFtUFH6AgdISN0hI6UEf4Oxgdvkas9RUZQ/yEBYdChgoZC9eCBLBs/SZLkjxlj3Ol2RehJd6rfDq1UT81eKcwZVCMB9Zw/p7CzfErvXT2ndzB3kAitNfUUQ60V555zLFZKUU/zBscOdo7EFiOcmFLMcQli4y+6Bz4LBx90E3JV8CZJkvwsb8qa9F25tXYIAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAACOUlEQVR42u3WS2sTURjG8ZqJuTSJTW1T26YqrWmN1jt2ISpWTb1ABS3iRkS84WUndlNQFN34Fdy5d+U36MJVQVroKgnmvgqBZBV3Gf8DTyQMzMggRZC+8CNnJsn75CRnzqRvu/6/Mk1zRw8fwBhbEeSDAT92ih+cU7D8dYiahxFFTPoR1HOG+Fxm7h6kRiE1H8Y49iKJEcQRRRghhQegmTuFKkQMBBDBbkwgjVOY0+Mh7McoEhjSa+OIIawehluYgSB2YQ9SOI0MbuEFfuCizs8ijYOYwRSSCo8g0J2hU9AAkmp0AbfxDJ/RhlV3sYgFZPR4GedwApMKDMNvD+v+RlGM4aga3McKvqO3XuKhxt/wFI+xClOBScTU12dfEEEMIqUZudU7vMKajjewrvGqZjiFOAL2MANhJHAENzqdjumE+ojXeMvxJkyxAh/hEqYxiKBT2AiOY6lQKJhOesNqtdpm93y1WvUUlsAsFrPZrOmEeo/lcrm8Zh1XKpUNxuvWuFgsun6N9t/sAM43Go0PzWbzU6vV+sInztvClvHEGpdKpd8LxArinPMCsa9GjGp287iD51ip1+tfc7ncTzV7gJu4igVc8bL07Rf0GGYwhwyWcI9Zvsnn80XG13EGx3AYafzxonYKjOoNE2pyEmcx3263r2nLmu7ZJ4e9b1ew7fQxhY5jUgEp7FPIAPq9bcTut5cQoohjSOKIIKjGhrjeYryEBhWMnnuZ9+buoaJgUcjW/xeRvu36F/ULlStUoyVtQSYAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"fullscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAbElEQVR42u2R0QnAIAxEu1lWc5/+ZYKs4TTWjwS0qIFrP+/BkYMLOdCLELKn1tpG5TleYF2yyMUzvCAOZDtwgU85PJGE/+NPyuTJG1Uts/9+sI0+y6GCrtunLHKJHbjAZYcd8x28IJTmhJAtD4gEt9ueDIktAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"fullscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAACFUlEQVR42t2W324SURCHhS67VCoFbYhRkbQsaCwVSwgUaZP2yia9Mb6MN41vYfpIfYIm5QIegJfA3yTfSU52c1i98KabfGGYmd+cPX+Gw7On+2w2m5JPUfxfC5dhB8pQKooXvjGCiohFFRJ8EVTwVSHGtxOckSuOsCb2xUsDe0/swl42jiZxg2wr/kK0REf0DOzX4hXIzsVbaPODsH4VUSOxL8biwsD+SCEhOx/vo61Rq5zd1JipdhBkn6k4hmk2iKZDjdhtuj9Awnqm4twTPopf4lKM4BLfo0tCk1IjCQ3QFF0xR+QK/BBXYgxX+PycOdpmaAC3RG1xiui7uMWeic8ww3dLzgZNO7tEoU1OxYhpX7Dmd+KDgT0ldk5umt/k/DGtioZ4y/E7EUMx4JQcQR/fkJwemgY1OKbhAd6wnscU+ESRQ+jhOyGniyY4QFlE4rk4sCKIJyzFaLVa/XaNhT0iNiH30LTUiEJ9UGeqg8ViYRv3TVxjj80PY3zXloM9QFvf1gcN3mRiIr3pvX2u1+ufHMMvMDefn2MatI2iPjgSZyYylsvlg77fiK/umGLfWMzlmQbt3/UBQoc7530IxLf3QeT3AYIZbzbE9w5SfGfknGb6IAr1Qez9XL8XXabdxtc0sNvEuuS20MZFd0LsXThNqOOrQg0fcS6cXPHiKzOB2L8yg3GKG4WXfoBSUfz//W15ss8fvEcYMYnLr+AAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"normalscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAbElEQVR42u2Q0QnAMAhEu5kD588JXMNpbIUEpCBpe5+9B4JczF3MQQjpcfeBz+4vxpMe2ULSIF9YjaqWM+hXWRrdA2YZah61Wv2/qGrU6nQkQK6yLmCeCbzFCmk02FxWX/WyYXw1H69mCSEtJ16St50Fqd0HAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"normalscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAACDUlEQVR42u2Vy0ojURCGZ9Kmk4A63cYLMhdE28tCECUgxCuzGBDc6AgO7uYizKAP4NKNb6S+g08gSZO8QZ7h+Bd8ScDDIZmsLfhIpc7/V53uPnS/e4uRwjn3vsto2sHiggdrw2iGaT4miiKGEhShBDEU8YSH9Jr3G4yLSZGID+Q9qCXk0rIBhoSaj4kyxlnxUXyBz+ITKKcuDdoEb+9KQrufEHPiXqyLLVETmwDUpEE7h7cYGhBxmQk72xAWR+KY/Bs4akfkG3gSekTebaJYFlWxKLbFDQ2e+P0BvRqabTxVekT+M+gPmBKZ2BWn4tn146czCNa+o83wlkNXUGAxRVx3fvyC11HHk9KjQFtvQIxoSeyIE/Fb/BWX5EK5auQnaJfwxsMMyMSeOKPZVX8IzVUjP0Ob+QP8Y1rhPq6Kg2az6Yw8z12j0XCKf4blVuuum9Y8eCvBY8ritFgTXzudzl273c4VzlBcG93/tmYa05oHb2XQMZ0RK2JfnFujVquVs9M/huVWY+g52hXzDjqmJe7jgqhZI+3wVvkFA04N8gtbI6/hSekRhV4VMS+vee3uAeOeOOSs1w3yQ9Zq0j6aB2/sPwP/ZTeFYUEsc/mZWISM2jKaeTzeyy50FWV2k/LgquQJpNSmySfxeLsPfnAQlzCC1dgAoInxDP9Vg8gAauG1//82I/ZM1DztW4wSL9xQTRdfTNL0AAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"display"\x3e\x3csettings\x3e\x3csetting name\x3d"bufferinterval" value\x3d"100"/\x3e\x3csetting name\x3d"bufferrotation" value\x3d"45"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"overcolor" value\x3d"ffffff"/\x3e\x3csetting name\x3d"fontsize" value\x3d"15"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA8CAIAAAAok0etAAAAJUlEQVR42mNKTU1lunnzJtP///+ZGBgYwDQ6xiVOrhw1zSNRPQBu5Zagca3K1AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA8CAYAAABfESsNAAAAnElEQVR42u2WvQ2DMBCFv8I1M3gjMoTpMwqjkI1S0RnJEhaiuZcFEuyCBCnyqz+9+9XpHMAwDD0wAp4PciGEXtK0risxRvZ9fw+a2ZhzZp5njuTMzC/LQklOEtu21YGSyqCZ1YHfcazR1Tle6FjVnr+q+vz2XJxjW4p2Utr2tFn/OvT5s5b0BHwJdmZ2Bybg0NmllB5d190kHb5cL8J5WhbWZJeBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA8CAYAAABfESsNAAAAmklEQVR42mNKTU39jwffB2J/BiBgunnzJgM2/PjxY4bPnz8r/P//f0NKSoo/E5DBgA1//fqV4enTpyDFDP/+/ZvAxEAAvHnzBqRQAaeJMPzz508wTVAhDBOlEGg1LUxkIAIMtBsH0ERigmf4+XpggodGbhxNFKNFymiRMhrXA1Gk0D+uoQH+gIkIRSCrC5gIeOIBkA74+PHjRgDhswBcaL43lQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"bufferIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAFy0lEQVR42oWXy2sk1xWHv1vvR1erNeqWZ2TFiSQ/ZI2GMBDygsRhTIwZgg3ZeeFV9lnlT8giS/8BhqxCICYJ2TgPhzEhYLJQFgMT2SN79JhoMq1Hq7tVXV3ve7PoktQjd8sHCpq6zVfn8TvnVAkumRLnPzV0LFw8XCwgI2ZITEaJFIqJZlxCneEEAg0bn0Y8176eB2CG19tuhx4DUpRiMtIYw40gooJqGHjMHi5urzt39JZgeHRwb/nBPJRIFOWVHqoRzEDHQKvOTGpxc/uW+zNnzUcQoy9vvx/EbkxKgWS6h0og0DGxcbAxERRIdIKDBfeOszZPgCDmcE2+3n68dMyADJSYFLRx7p2JS0B9a34YCGEMb3aQ+HJGb/kEGIBPQLyUB1joiLXGYx1FwmBSyAIDm2DY2ljVX9WXoXzy8db6f1tSM8V5UkGghwB/t36x0iYfBR2xj3wWKNDQcahvrNo/Mr7joZPcSlYffPT9XTsbnCTE+EDKkPy4FvaK9xaGWZ5XBJ9FHl8A9Sp/NrWtr8Xftl5v0STAFqqhiqx94/TpQC1krZKYHtFm+PsXtz7IP9E7RaLiswxaJGSXQ9Yxh4G+7FHHAmoqE/ELHe+lg6WHX/y6fC1tqqDYHt5bfuAe/9PtFZHMxgviXGTyQthCCNDPNaODoQqi2d6tk6c7eYByw5faboferugY+ZQ+OcshSHIjKp8k6wk+UBAruW+dEjJ01NIhJuqs9XpG1sjUMx4mX+4URXHz6ONPk1c6Sym6ign7w/vrbQYMKBAIFJKcgvzW8aafaWO4bFw6QmlomKOubV/fXHVv21/HlPvx/dbm6i5dIopKFhKFRKJEnefQK0LJHuk40MDAxsGjhp/4O3PdQEo3Wmk3OvQZkFBWQDW6hAJMrmEDIf1xFYJQNjZ+P9iaLwLLDNQLoZORkVSjKqn8U6M/f6kGGgEmkBOOwEIF+FvNf78ys2bXhC6j5PPbO8+fEBGTkI+GwLTZh80i1nkm90nBwOoFGy83f+Dd8IUgFdq1f+Vv9IOclOIrcNoYDiwW2UFqmJtzM2vejRYt1VJNVXvOe3mzXlVVwlQcBGO4ETIAAyNxzZqHjwF4KmEwN3TQERe5m2LmpDuVnsYnColSqCtRV5hG4cT5ICFBVc2QDdyEEoX4Cmg+6Y5Gvtbpb0ZPO5zQEx0RtvsPb3arAa9dCQwvZkxV5xAMskb4ra0N8rUoEE5+cvrZd3fqKQqdEjV9uwGS/UuykWfC9nrBw1bma1pQrHT9mISEjIyC/ErhTBS2gY6NjYODGZob9T23KN3oe4fLAxIyCqSQSlwS0BWtpyEwMbBxP2v87RszC1Zd09J+/+nSzk/axOQUVXEu2m9m+nAwUECBRgl/Xphfqc066Cp1rcauejRYGe1fdY5UijXz0wsc6CzyaAwolBKAQnxU9+e9RkP5CDKEk9345GBlQHHmW9U7cu+aZTwzXi1qz66A0aF27DmBjYsGWHg49Y6HgfmF8buga0KQvd37Zk5pOsXl0kzcKUqq8ccKkKVC/MP7zYI7YxlwlP+qe3fv3YGrlQKyK9++FAo5F+10k/mYUcgxcf/58Ej/4+J803UsBTm+/SG3P38x+o93CTe2U7Tz7BRvdvP/hftdTuhyQq93sP/Dk3u+2/CdgDoz1Jlxm7N/mPllKEpLjOGi8Z1igFBKIClI39n+LcOoNiuITsODH+/OJU9cXbexlQ7Y5NTs0HpN3Xn81wXLrLyM2J8UsqQkaw1+/vAvhx0floZv9MhRqSykHJtEUgJ8kPKoUc8MYMhwQg6FUlACkuLNFA1GAkFoSZJnKsMGCjLivJmNVNHvTevFqmFQlBRkJAwZkpCSk7/VOzg5jUMGRIT04qPuT/uV1KfYuWyEUiO/RrNWAQLxanp370Oas56paVF61L27t55Ne3c9l9u4KXHpVEe/b/6pEVoXwqa8av4Iplr1VaChoVVejzKrrlpd/wdqZ96EzbsuCAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"errorIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACL0lEQVR42u2T64nCUBCF7SAlpIQtISVYQkrYElKCJaSElHBL8LfPKD7wyUXxgYrOzkCyHC6b3LgasywOfBDuOTNzcklq73rXfygiqjMxk1YsZ38lXIOyq1F1OI/s5VUZsAlBNOMlaDhvVhXOZ7B80D4ztNeV+VNY9VdUzg3VM/5srM9XhXOMb0zleJXxjTqlB7xer8HtdiPAy/KKhl7pLTXc5XJxGc1QggJNIXgOfs24pQU8nU4hQynn89kFjZD0XDyGFpYS7nA4uMfjkYAQddQEQwtRk1lPD7jb7SKGUvb7vWvoTdCbqIkXNCF6arjNZuNtt1sCAtPDZwp09YMe4AyZ+bSAWmvFUILm4Y7Fo0xderQUep5Rq9XKW6/XBAQ/+fi8AZ5GhicwZj1+i4vFIl4ul5QQZ/lYC8AX5Pi+58nsh8LNZjOfoZT5fO7neAPwZgaUGeIB/F+Fm0wmznQ6jRlKyH1b1uvgred5zbmy6+6Ao9EoGI/HBHh5ftF/6SXZdVe44XDoMJqhBFWgxwO/V8CvwK+Z4rfY7/eDOI4JsC4cDAYO4yVYl8lM3CE7C4XrdrsuQym9Xi+qlVQyW3YArrWp3W6HDKV0Oh1usler1fLTHnku0iOzxQ+EtiUfDAHYYOsl5I6+0Oj9yDNHYNSM84KADqOhNyq65K5fX/wP9tpfznrV9kWu7dbtn1bxgCHj1sorfKmwaEDFUMUo21XrCsNpyVD4yl8GflLvetcfqy+dCCa6ODMoXAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"playIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAArElEQVR42u3YywnAIBBFUTtJaSnFUqzLhVjKZDZmI8HfGx3CPLj7AyKIjoic5pwBDWhAA+oBei5wlxMYClgGh6KBcKgUEAaVBi5DdwGnobuBw9BTwG7oaWATqgX4CdUGrKBagWX3MjCl5DmSKOe8Dowxeo7ABQ5zxGDgC4NdEhCwgmkBfsJOA5uwU8Bu2G7gMGwXcBomDVyGSQFhMDQQDkO+ZuxnwYAGNOAfgQ8LTbXBn1RvGQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"playIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACJElEQVR42u2YS0sCURTHNc3sTWEPelMQUQQtKnptIojosWgdFLTIFu2qdZ8i6Cv0BVq3KUi3IqgI4hN0rS5v/xtnahh1Gqd7Z0bowA/EWcyPM/ece+9xMcZcTsbVcoJ6gedul4VhSJBLEW0a3LKFdQVVYh7gBT7QQfjoP48ia5egh4S6QT8YJPjvHuAH7bJEGwpq5PrACJgB88QsGAcBet4pQ1RPsI1eyLM0ChbABtgD+2AXrINFMAWGZIg2ajNKQfDsDYA5sA2ewRt4ANfgDByCLbAEpkWL6gl66CXDYBmcgBf2E1HwCG7BBTiWIaon6KXCGANrlK1XVhtx8ATuZYgaEZwAm+ASvLPGkZAh+psgL5BJWn9X4IP9HkJFjQrugCAIMeMhRLQZQV61YdZ86Ikq7amXGr5XK2mFYCPRI1rbi/QOvjt1UTa/Ja0U1IregXNwAFZpZwpoJe0QVLcn3kdvwCntUrOUST+tSVsFlYjQzsQ3ghXquz2URUcIKvFEa3Kaqlv5zMYFi8ViOJlMMhmUSqW/CxYKhXAsFmMiSafTkXK5LOYTixTMZDLxSqUitkhECEIsUa1W5bSZvwiqxOQ1ajOCdcSkbXVBCIYEiQk/LHwdt/L5/IdVYqYOrBB8t0rM1JE/l8u91msXMsRMXZqy2eyLqsFGqY/ZdmmquXZC6jmVSr1R57fv2un4i3tLjD4cPzxqifGb4weYjh0B/0/5m+QT3Dh1BNFdpj4AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"replayIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABxUlEQVR42u2XwY3CMBBF0wElpARKcAkpISWkhJRACS5hS3AJnOHAwoEDB2QOHJCQmP2DcrBGycZ2BtiVMtKTEGLe/NixJYq55prrxUVEBjSgBStgu88NMJ8KVXZBPI2XBxaU7wi2AJbyy7LjVeGWwNP08uzSDlcDPzLUCcZ+X79j5RyofumtgNNeSfnO+QG5SfCYIc+kd3LgQKxzpNzT9cqy2VfJ4BPr70iptXpG42JXWcXH4+EBBbhCqdgl3D5JcL/fDSBBpRWQXT3++N253W4NoABfKBc7xYwmuvl6vbaAApx2QHaKGW108+VysYAC1AOyU8yID3g+n1eAAtQDslPMiA94Op1aQAHqAdkpZsQHPB6PDaAA9UPCTjEj/pAcDgcDSJB1zez3e9Pjr3r8Jkm82+08oADe5lSH6Xqt+N4Jd/oObbdbCyhks9mYREcd9D9DskN6gU0OCFEJSODBIsGxEv22c5Ag7/9KJyTBV0K/AzSCLXKLV6vnieuEftkr+RY7khVyGQyqJ74iEp0/TxBVTGKPedX2aj1UC+jPhuTDBEgvpH7AdUJA/4GAw2GAAy2oNQ7KlEt+DWwXxoBFMddc/6x+ACbEv+zn5grUAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"replayIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAGZklEQVR42rWYTWxUVRiGoTPM0LG20IEypUCKTX9IhCK0iqAVGtQAIUasAyaAWkaJJlZMhigs8CcaEhdSdSNx0bhRFrqQjS66BTFGFiSFgC2/bWkhQIFSZ4pwfW/ynOTkwO3l9yZPAnfO+b53vvOd95zpuLt9PM8bb1EgIhB1iECBPWfcw3psUQiYIOKiUCTEIw4JPoszNmqLfRjCIkYUyYtFqSgT5aJCzIAK3pUxppg5RmzkgQh1KjZRFJEwJSpFrZgnGsQisRgW8W4eYyqZU0qMiXZF70dcRMRYslKqUyMWiCaxUrSI9aJVZKCVdy2MaWJODTFKiRkz1bxXcXGWJyWqRaN4QaTF2yIrOkSn2C8Oii7+3clnWcammdtIrBSx4wEiQ8VNFCV847limVgn2kQ7QvIi7Mkztp2564g1l9gl5ELkHVaOiTPFfLGCpdspjoh7fY4QI0PM+eQosSsZtiFilH4GAVaJd0UH1bivhxgdxFxFjhnkjAVuHARGad4US7CCQL+JfEjSs6IfzoaOV0xiryBXitxRBAb2XZLd1iwyIZUbEHvFJ2KreB+28m6vGAipZIZcNeR2+hGBGGgR5W6kmXcGiBsVv4odYrNIYyfLYaVI89kOxo4GiNxJrkZyF6FlvNt7cfypFjtoC9gQQ2K3yBK4GY+rE1VQx7tmxmSZMxSwcdrIWYuGuOlFu/cSopzAa7EF9xkl0QdiDSdGNfOSogSSvKtmzBrm7A6oZDs5FzAvYXrRXt5ijqQmjLXLjcJSZUnYKGYjpohvHYM475KMaWROlhju00XOJjRIC8vsLG8d/ZO9efNmTngWA/TTOqoymzmFBONqJbhY8FkpYxcxd4cfy4mdQ/xKUWcv8ziCFXLzqBctN27c6Lh+/bpno3d7afpmli7JPPfQdy8ZhYytZu5mP9Zt4nf4udFQxryIEWj6r0Fs0ITOXC7nWeSxjbTpE2u3FYQYv3GH6cxN+7H8mHYOP6efGw30oQRa5lzBMrRqwv7h4WHPMDIychZvM0uQDDma3Crir7SQYvkx7Rx+Tj83GiqMaRuBxv8Wi4wmdA0NDXmGK1eu9GHAy7GRSeZYCrt5O71YLZ4XW/yYdo5r164dwLQXGz8MFKjJBy9cuOCBHyBYYHDV4ggrwnqmWR67RTH77RxXr14NFugu8eXLl/cPDg564Adwltgx09tsDERNFeUkrKIHXxIf+jHtHMoZtMS3bhJ9u86+vj7P0N/fbzbJq+IJxtoHu3ueT0JUragn7tNU7w3xhR/TzqGcQZvkVptRuTtOnTrl2egb+jbzlnhOPIYIU0X7qvYoFZgnll68eHE79vGa2CS2q4V+d+MrZ4DNBBj1iRMncsePH/cMZ86c8Zd5m3iZICmRsHzQvQ0tu3Tp0uea61fob/3/Yy4G3/X29p63YytXoFEHHnUS1HXs2DHPRsuwhz551jqSYoiLIjhFG7xy7ty5PWauRPXo3c+q1J9uXOU6zCHgHnXBlwX51K6jR496NgqWy+fzH+nzF+2bhznaWN5ZYololai/7Pmq5HnF+M+Nq1zfcAwudC8LY1233jt9+vRhN5iW4xBLMcdcMAkWoy+rsKM2je1jXiCq3j84xConJg4RfGFNj46OfuZXzQ44MDDwAwJqxGQRt08LkqwW2zQ3P5a47u7uER1x32vsO2Ipl4oSx2Mdi8Dx2a0btOPalehfBfT96kes5imW0vRg1HGCtJbt27Dq6fTYp7G7RCsGPZM24UYd8KMJ15+DyBY1+9c+3OmeoXpTERW1e5jqb/Q3VJjAXj0a+5UlcFaYQNvLUghp8EXBQqo7zbrNROzjEkPeJCM+gJAxUZ934a/uDi4Y8+8xJJyC6VZChblBW/ZSYAmcyQ7OnDx5shsRoWjsPusAcHowWOQE+7CHIucGTdWxGAlkqd7s6ekZRMCdMMwXqwwT6C63ERoDhHG8gVXBCvOTNUiMv7NlP/16/lBf/6Ij9FNsq15Mt3923tWfel1RDHONfpp4XDt/IzbSpx47JDH7tGl+km196Z/FXN0yYi2eu5DqTXZ+uN/341rUZBIt4GLawg3ldbEei1qNjy5BWB2tUWqf7Q9WIH2IRSWxizmcyU9Cg6jnfRVjyhlfbHrbFfcwRCZo9ClY1XQoF2UImsSmSlD52IOtXPiPpBiJEwF/9TcbLupuOjfu/32eYAv3OqcpAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"dock"\x3e\x3csettings\x3e\x3csetting name\x3d"iconalpha" value\x3d"0.75"/\x3e\x3csetting name\x3d"iconalphaactive" value\x3d"0.5"/\x3e\x3csetting name\x3d"iconalphaover" value\x3d"1"/\x3e\x3csetting name\x3d"margin" value\x3d"8"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"button" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA80lEQVR42u2WQQqDMBBFQ4pQeoVueiN7BtG9R+lR7IlaAllnIZaCxHR+KWLpou7mCxE+Jm7m8b+TiTXy1HVdim5N0yQNoTYYwGKrqiqnaer6vj865x4aQm0wgMXGGC/yYfTeP4dhiBpCbTCAxQrZKYQwppSMpsAAFgAZJiGy90LbITCAhc8hBneWLs2RMegrMgZ3ZodYIuP8qSnbfpmhln66jO5gpOsyhsh4HaI7qfMs29Qsy5H9iyxfYddMe8r7EFWX5cg2FVkeritO6rtsCoILWgEWONRiY4zZy3unoU9tmNLaEMJVFmeRl48HDaE2GMDyAjEWKwKFLBqcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"buttonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA80lEQVR42u2WQQqDMBBFQ4pQeoVueiN7BtG9R+lR7IlaAllnIZaCxHR+KWLpou7mCxE+Jm7m8b+TiTXy1HVdim5N0yQNoTYYwGKrqiqnaer6vj865x4aQm0wgMXGGC/yYfTeP4dhiBpCbTCAxQrZKYQwppSMpsAAFgAZJiGy90LbITCAhc8hBneWLs2RMegrMgZ3ZodYIuP8qSnbfpmhln66jO5gpOsyhsh4HaI7qfMs29Qsy5H9iyxfYddMe8r7EFWX5cg2FVkeritO6rtsCoILWgEWONRiY4zZy3unoU9tmNLaEMJVFmeRl48HDaE2GMDyAjEWKwKFLBqcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"buttonActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABD0lEQVR42u2XQQ6CMBREm97BeCnjIQjcxLt4KVckrKuphYIC/jEtKRu3fxaSDGlh0ZeZ/2mxRq66rs+iW9M0bw1hbTCAxVZVdVqW5eq9P7Rte9cQ1gYDWOw8zxd5ELque4QQeg1hbTCAxQrZ0Tn3XNd11BQYwAKgkUmI7DsQyklTYAALn0Nyi4lyVBZciltkDNpFpu3QrqizZcoiLeqi7dUj2xxKFa6q/C3idIiyywgiI3ZIBi9th8BQdhmFdl3GuJepn4fy8eMf2c/IEtBEENnEu9uz1BBvlzFGRvHXwRmZUMU0icpCUUfL4E7pEhwayvOIllLbD3DIY2KMUSvsvDZYrHPuLYM+v9BQgunB8gFJekgEq5c0PwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVR42mP4//8/AzJmIF0AAHImL9Fd8LZHAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"playlist"\x3e\x3csettings\x3e\x3csetting name\x3d"activecolor" value\x3d"bfbfbf"/\x3e\x3csetting name\x3d"backgroundcolor" value\x3d"262626"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"999999"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"overcolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"titlecolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"titleactivecolor" value\x3d"ffffff"/\x3e\x3csetting name\x3d"titleovercolor" value\x3d"ffffff"/\x3e\x3csetting name\x3d"titlesize" value\x3d"13"/\x3e\x3csetting name\x3d"titleweight" value\x3d"normal"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAACCAIAAABANcwGAAAAKElEQVR42mNhGPqAmZmZiYkJQsIZuLgsvr6+Q9q3/2Dg79+/yAxcXADiODDtLQ68BAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"item" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAMElEQVR42u3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAXA2RQAAEB5C4HAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"itemActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAkklEQVR42u3QsQkAIAxFQQsHy/4LqYWohYW9IAj34ENIeTkiRvq7vlb3ynHXB/+Wk64CCBAgQIACCBAgQAEECBCgAAIECFAAAQIEKIAAAQIUQIAAAQogQIAABRAgQIACCBAgQAEECBAgQAEECBCgAAIECFAAAQIEKIAAAQIUQIAAAQogQIAABRAgQIACCBAgQJ1NmcoiAdM9H4IAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"itemImage" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAAAAACpLjUBAAAAeklEQVR42mPiJQswMXCSARiYGFjIAEBtZAEmRnJ0MZJrG321jfpt1G+DzW8jMUj2lzMwlO8n2W87PMrLPXaQ7LfOHR4eOzpJ99vLe/deku63eItDhyziSfab5fGFC49bkuy3jIUMDAszRtPkaDYd9duo34aT3/6TARgA1wJNszqw3XsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAKCAYAAACqnE5VAAAAEklEQVQ4EWNgGAWjYBSMAnQAAAQaAAFh133DAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAKCAYAAACqnE5VAAAAEklEQVQ4EWNgGAWjYBSMAnQAAAQaAAFh133DAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAYAAADAW76WAAAAEElEQVR42mNiIA78J4AJAgCXsgf7Men2/QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAJklEQVR42mNgIA78J4CpBu7jseQ+NS3yx2ORPwOVgT+az+6TYgkAKMIaoyp3CGoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAALElEQVR42mNgIB74A/F9IP4PxfehYlQF/kgWoGOqWnYfj0X3qWnRfwKYIAAAPu0ao3yGmCgAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAYAAADAW76WAAAAMElEQVR42mP+//8/Q0NDA16sqqr6Pycnp6G0tLShqqqqoba2tgEEGhsbG6CgkZAZAEhcK/uBtK2eAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderThumbCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAUElEQVR42q3NoREAIQwEwHSYJjOo1IBIDfEx+EgEDMfLVwyCbWDphoig1gp3R2sNmYneO+acWGuBXimlxCEKekVV+RAxvWRm/EXxi2KMcZ1sxLJpnEUZrv0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderThumbCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAUklEQVR42q3NoREAIQwFUTpMk0wUNSBSAz4mPhIBk8/JUwwiW8C+8pqI0BhDzQzujjmnrrWoZNZao947Pgg/CHtvREQexsx6gTQNqrXiAuHlcQDl9mmceNYnwwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"tooltip"\x3e\x3csettings\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"fontsize" value\x3d"12"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"activecolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"overcolor" value\x3d"ffffff"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"arrow" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAASklEQVR42p3KQQ2AMAAEwXOAi/lWSqUgpZIqASmVAN+GNECYZH8bHDhfOoLyYSxJEuwP054Z+mLqucOGMU0DW1ZQp7HmCRpa/roABHU6b1RN/woAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTopLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIElEQVR42mNgAAI1NTV/IL4PxP9hnP8wzACTQRb4j4wBSrYUAF5mO7QAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTopRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAH0lEQVR42mNQU1P7D8T3gdifAQSgAjDsjy5wH13gPwBoAhQA/dBvkQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capBottomLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHUlEQVR42mNQU1P7j4wZgMR9dAF/FAEQgAqCVQIAxzkUAKo9yiMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottomRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVR42mNQU1P7j4wZ0ATuowv4wwTugzlAAADkhRQAhODqdgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuTopHD" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAYCAYAAABtGnqsAAABKUlEQVR42u2WYQ2DMBSEcYCESuAHAioBCZOAhOFgEiahEpCAhEpAQtcu1+TSwSDbfrDtvuQFWtpHe7lXqCohhBAPDMPQxBhjhBhzjDM9O3MbfWmspfYVc82zeegPlCMUkfpc8f4aa2qOKl5eYI+2iTHlTewU0Mc4bQnPAq6No/UYtN1SniMJmDbuFhzp9wgYr11yIO6ndwWknPd3cM6jCrhValsCJod0VMrduwJS3nDY0qWF9tlB1Gf2OBDlVp5j7kMCpvzjN3xATD6kIYjjcwclPi6dUXhWiu/x7D8EJJFmOMvDSX3hOI/rTOJOuWRp7CWLQnPGLMZPCkjOsuTEtLG6+LDY4lfFruRp4ELLsTQH48xaHv1kCiGEECLStm1QvB5ykBBCiJe5AX69621Fd8YvAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"menuTopCC" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAYAAAAF6fiUAAABjklEQVR42u1X3c2DMAzsBhmBEXhggIzACIzACGUDRmCEjsAIGSEjMAIfkS7oegr0oQ/9IvkkC2HH+fHZDjweBoPBYDAIpmlqD1kP2Q/ZDhnEPsA2kM5Dt5PfWNBnSfpnEpojvUfYwyE92ZJulPXWi/3ONQff5eDhvcG7pzGvFJwcAA2I+DUcRFnrJABkhTwe8yX/lgiIYl9pP0/af9CkqYmAlN0v0TV08HTASAdvSgRAF4S4OwJiDjbZEykLVwAFnQlYMJfT/dZIwFtbKNjHXOIga6aAxOyPoATxvSNgL6zFQd7xXLEu2xzmCpCTjBoJOLNOKqClrH7r9RcEjBqEDwRsmrVcjURAbm09V4O00EXPUBMBDfde7rGwRRm/aEbezH1HwMxBo17eqy9d1iu1r/6ujdZ4D2wo94inQ5BmGdvD/i0BDkTn9d6+Zgq+Qb6CNmpBm94ntX4NeamEttRbMc59OjS3iqvLEjpfaF/+qi3KPrz9SBgMBoPBYDD8a3Rdt5v8TiwDDQaDwWD4Ef4AO4h4lB2vwSEAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"menuOption" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAuElEQVR42u2SQQqGIBCF/wOU1UYUMjAiQdSTeI4O2DnmUL9PatVq3AUNPBhEPt6bmd9XL6u+77uiXHRAV9+1wvais4iEEFXor7e9xdkJiJSSjDG0LAsppWgYhgplOb2iVdi2bRRCqHLOkdb6dpo5wAPu4AyglFJVjJGstTSOI+EPF4iYD+C6rjRNExuIyJgZYgJU5b2neZ7vBWX2UrAAzAwx4QwwuLuX0no2mBlAcMY4G85hf/Wu+gNm+kvWRCvtuQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuOptionOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABfklEQVR42r2VTWqDUBSFG6v5KcVJsWTWaUZdRLuNbsNxt5CZ4/xsIJhAkGQJ3UBCcCA6UhBJQDDk9h04giREKQkVPpD37j3cc+/z+dD0iEirSn10s4hGHokG/iReEdIVbUVH0SMdrumlcKMYKzEUTwpT8aKwAN9N7hmMbdWKsYJnCrwpBop3MuCaxZh2KXrNpsHAPpK32+2H4zjfw+HQAXjHGoX7jDUu7FNQpxULCa7rftm2/TMajeLZbJaB8XgcYw17FLWYo58LaizfhCVVxScSl8vlYbPZSBiGEkWR7HY78TzvgD3E0L7JXO3cbpdNH8AaqoFYmqZSFIUcj0fZ7/fi+75MJpMYMYhlTre0XR1GT/GK5qNfsIjKIFY+p9NJ4jiW1Wp1QAximdODRqMgbKKyqmCSJLJYLLJrgrWW0TPYhBDI81yCIJDpdHrVcu1QMAD0DDZRGcTW63XdUJqPDSqdz+cZ+oZhNB6b+x/s+396t18Od72+/vuCvf0X8At7J48fIgP61QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuOptionActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABfklEQVR42r2VTWqDUBSFG6v5KcVJsWTWaUZdRLuNbsNxt5CZ4/xsIJhAkGQJ3UBCcCA6UhBJQDDk9h04giREKQkVPpD37j3cc+/z+dD0iEirSn10s4hGHokG/iReEdIVbUVH0SMdrumlcKMYKzEUTwpT8aKwAN9N7hmMbdWKsYJnCrwpBop3MuCaxZh2KXrNpsHAPpK32+2H4zjfw+HQAXjHGoX7jDUu7FNQpxULCa7rftm2/TMajeLZbJaB8XgcYw17FLWYo58LaizfhCVVxScSl8vlYbPZSBiGEkWR7HY78TzvgD3E0L7JXO3cbpdNH8AaqoFYmqZSFIUcj0fZ7/fi+75MJpMYMYhlTre0XR1GT/GK5qNfsIjKIFY+p9NJ4jiW1Wp1QAximdODRqMgbKKyqmCSJLJYLLJrgrWW0TPYhBDI81yCIJDpdHrVcu1QMAD0DDZRGcTW63XdUJqPDSqdz+cZ+oZhNB6b+x/s+396t18Od72+/vuCvf0X8At7J48fIgP61QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAAFUlEQVR42mP4//8/AzUxw6iBg89AACt1ZqjY29nMAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAAFUlEQVR42mP4//8/AzUxw6iBg89AACt1ZqjY29nMAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAAPklEQVR42u3MoREAIAwDQDpI95+xVwG2AjziY3IR+ViPZOaeu7tXVc2O2y+AQCAQCAQCgUAgEAgEAoHAP8ADVGLAaqN7TdUAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAXklEQVR42pXOMQrAIAyFYUGSIeqQuLh4Ju8/eZRXIhQ6WMHhhxDIRwKAsKv3jm+tNagqcs4gIvzdhQM4d2BKCcw8r8FSyqi1Lsgzs/WdgzHGcQ2+qIhMhzyffXe6eQBmfbZnUQ+tqAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAX0lEQVR42p2OsQrAIAxEhRAHoxB1cfGb/P/JTzkboVsttMODcOEe5wC4EymlEUKYMUYYdlv21jk+VHXUWtFa25RStlREQETjs7D3Pi9wY9Kc8xZ67+cfIZ6EtpKZceot+LS2cEn/XGYAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAASUlEQVR42u3MQQ0AUQjE0CFYgARQjGvWwBewh/beZ3enV7t77q7MVFWpuzUzigiZmSTZ6zNAQEBAQEBAQEBAQEBAQEBAQMB/gB8nJqOYNsUfIAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgressCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAVUlEQVR42pXMwQkAIQxE0XSYshQtImXYhh3kKFiD+L3s3iTgwBz/E0BuTylRSsHMaK3Re2fOyd6bb9dOAtAD0J/BnLMGoD6DgNRa1cz8B8cYvtbSqDn4F/TaDHcq1wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgressCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAVElEQVR42mP5//8/Ay7Q09PjLyIiMkFCQkJBUlKSQVxc/IGoqGgBMzPzRlx6WHBJdHZ2+jMxMW1AFgMapAAVCwDijSQZCHT5BAbcYALJBgKBAjlyAHZIEpxZZYn/AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAnklEQVR42mP4//8/AxbMBMTsQMwHxMJALALFwlAxdqgaDL24DOMGYoVly5ZFVldXz6ysrFwOwiA2SAwkB1XDRMhARqjtigcPHsw/d+7c9Z9A8B8KQGyQGEgOpAaqlpGQgSAv2Vy7du38fxwAKmcDVYvXQCZoOHkjuwwdQOW8oWqZCBkICvyA/4RBAFQt/Q2kqpepHilUTzZUT9gUZz0ACDf945eBHBQAAAAASUVORK5CYII\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3c/components\x3e\x3c/skin\x3e';
        this.xml = g.utils.parseXML(this.text);
        return this
    }
}
)(jwplayer);
(function(g) {
    var h = jwplayer.utils
      , f = jwplayer.events
      , d = f.state
      , a = h.css
      , b = document
      , c = ".jwpreview"
      , k = !0
      , e = !1;
    g.display = function(m, l) {
        function j() {
            switch (s.jwGetState()) {
            case d.PLAYING:
            case d.BUFFERING:
                s.jwPause();
                break;
            default:
                s.jwPlay()
            }
            N.sendEvent(f.JWPLAYER_DISPLAY_CLICK)
        }
        function r(a, b) {
            V.showicons && (a || b ? (F.setRotation("buffer" == a ? parseInt(V.bufferrotation) : 0, parseInt(V.bufferinterval)),
            F.setIcon(a),
            F.setText(b)) : F.hide())
        }
        function q(b) {
            C != b ? (C && w(c, e),
            (C = b) ? (b = new Image,
            b.addEventListener("load", y, e),
            b.src = C) : (a("#" + u.id + " " + c, {
                "background-image": void 0
            }),
            w(c, e),
            D = A = 0)) : C && w(c, k);
            t(s.jwGetState())
        }
        function n(a) {
            clearTimeout(ca);
            ca = setTimeout(function() {
                t(a.newstate)
            }, 100)
        }
        function t(a) {
            a = M ? M : s ? s.jwGetState() : d.IDLE;
            if (a != U)
                switch (U = a,
                F && F.setRotation(0),
                a) {
                case d.IDLE:
                    !B && !J && (C && !E && w(c, k),
                    r("play", v ? v.title : ""));
                    break;
                case d.BUFFERING:
                    B = e;
                    I.error && I.error.setText();
                    J = e;
                    r("buffer");
                    break;
                case d.PLAYING:
                    r();
                    break;
                case d.PAUSED:
                    r("play")
                }
        }
        function y() {
            D = this.width;
            A = this.height;
            t(s.jwGetState());
            z();
            C && a("#" + u.id + " " + c, {
                "background-image": "url(" + C + ")"
            })
        }
        function p(a) {
            B = k;
            r("error", a.message)
        }
        function z() {
            0 < u.clientWidth * u.clientHeight && h.stretch(s.jwGetStretching(), x, u.clientWidth, u.clientHeight, D, A)
        }
        function w(b, c) {
            h.exists(O[b]) || (O[b] = !1);
            O[b] != c && (O[b] = c,
            a("#" + u.id + " " + b, {
                opacity: c ? 1 : 0,
                visibility: c ? "visible" : "hidden"
            }))
        }
        var s = m, u, x, v, C, D, A, E = e, I = {}, B = e, J = e, O = {}, F, M, U, V = h.extend({
            showicons: k,
            bufferrotation: 45,
            bufferinterval: 100,
            fontcolor: "#ccc",
            overcolor: "#fff",
            fontsize: 15,
            fontweight: ""
        }, m.skin.getComponentSettings("display"), l), N = new f.eventdispatcher;
        h.extend(this, N);
        this.clickHandler = j;
        var ca;
        this.forceState = function(a) {
            M = a;
            t(a);
            this.show()
        }
        ;
        this.releaseState = function(a) {
            M = null;
            t(a);
            this.show()
        }
        ;
        this.hidePreview = function(a) {
            E = a;
            w(c, !a)
        }
        ;
        this.element = function() {
            return u
        }
        ;
        this.redraw = z;
        this.show = function() {
            F && (M ? M : s ? s.jwGetState() : d.IDLE) != d.PLAYING && F.show()
        }
        ;
        this.hide = function() {
            F && F.hide()
        }
        ;
        this.setAlternateClickHandler = function() {}
        ;
        this.revertAlternateClickHandler = function() {}
        ;
        u = b.createElement("div");
        u.id = s.id + "_display";
        u.className = "jwdisplay";
        x = b.createElement("div");
        x.className = "jwpreview jw" + s.jwGetStretching();
        u.appendChild(x);
        s.jwAddEventListener(f.JWPLAYER_PLAYER_STATE, n);
        s.jwAddEventListener(f.JWPLAYER_PLAYLIST_ITEM, function() {
            B = e;
            I.error && I.error.setText();
            var a = (v = s.jwGetPlaylist()[s.jwGetPlaylistIndex()]) ? v.image : "";
            U = void 0;
            q(a)
        });
        s.jwAddEventListener(f.JWPLAYER_PLAYLIST_COMPLETE, function() {
            J = k;
            r("replay");
            var a = s.jwGetPlaylist()[0];
            q(a.image)
        });
        s.jwAddEventListener(f.JWPLAYER_MEDIA_ERROR, p);
        s.jwAddEventListener(f.JWPLAYER_ERROR, p);
        u.addEventListener("click", j, e);
        var $ = {
            font: V.fontweight + " " + V.fontsize + "px/" + (parseInt(V.fontsize) + 3) + "px Arial,Helvetica,sans-serif",
            color: V.fontcolor
        };
        F = new g.displayicon(u.id + "_button",s,$,{
            color: V.overcolor
        });
        u.appendChild(F.element());
        n({
            newstate: d.IDLE
        })
    }
    ;
    a(".jwdisplay", {
        position: "absolute",
        cursor: "pointer",
        width: "100%",
        height: "100%",
        overflow: "hidden"
    });
    a(".jwdisplay .jwpreview", {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "no-repeat center",
        overflow: "hidden",
        opacity: 0
    });
    a(".jwdisplay, .jwdisplay *", {
        "-webkit-transition": "opacity .25s, background-image .25s, color .25s",
        "-moz-transition": "opacity .25s, background-image .25s, color .25s",
        "-o-transition": "opacity .25s, background-image .25s, color .25s"
    })
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer.utils
      , f = h.css
      , d = void 0
      , a = document
      , b = "none"
      , c = "100%";
    g.displayicon = function(g, e, m, l) {
        function j(a, b) {
            return "#" + w + (b ? ":hover" : "") + " " + (a ? a : "")
        }
        function r(b, c, d, f) {
            var e = a.createElement("div");
            e.className = b;
            c && c.appendChild(e);
            q(b, "." + b, d, f);
            return e
        }
        function q(a, b, c, d) {
            var e = n(a);
            "replayIcon" == a && !e.src && (e = n("playIcon"));
            c = h.extend({}, c);
            0 < a.indexOf("Icon") && (E = e.width);
            e.src && (c["background-image"] = "url(" + e.src + ")",
            c.width = e.width);
            f(j(b), c);
            d = h.extend({}, d);
            e.overSrc && (d["background-image"] = "url(" + e.overSrc + ")");
            A = e;
            f("#" + p.id + " .jwdisplay:hover " + (b ? b : j()), d)
        }
        function n(a) {
            var b = z.getSkinElement("display", a);
            a = z.getSkinElement("display", a + "Over");
            return b ? (b.overSrc = a && a.src ? a.src : "",
            b) : {
                src: "",
                overSrc: "",
                width: 0,
                height: 0
            }
        }
        function t() {
            var a = v || 0 == E, e = "px " + c, g;
            f(j(".jwtext"), {
                display: C.innerHTML && a ? d : b
            });
            setTimeout(function() {
                g = Math.max(A.width, h.bounds(s).width - x.width - u.width);
                (h.isFF() || h.isIE()) && g++;
                h.isChrome() && 1 == s.parentNode.clientWidth % 2 && g++;
                f(j(), {
                    "background-size": [u.width + e, g + e, x.width + e].join()
                }, !0)
            }, 0)
        }
        function y() {
            J = (J + B) % 360;
            h.rotate(D, J)
        }
        var p = e, z = p.skin, w = g, s, u, x, v, C, D, A, E = 0;
        this.element = function() {
            return s
        }
        ;
        this.setText = function(b) {
            var c = C.style;
            C.innerHTML = b ? b.replace(":", ":\x3cbr\x3e") : "";
            c.height = "0";
            c.display = "block";
            if (b)
                for (; 2 < Math.floor(C.scrollHeight / a.defaultView.getComputedStyle(C, null).lineHeight.replace("px", "")); )
                    C.innerHTML = C.innerHTML.replace(/(.*) .*$/, "$1...");
            c.height = "";
            c.display = "";
            t()
        }
        ;
        this.setIcon = function(a) {
            var b = r("icon");
            b.id = s.id + "_" + a;
            q(a + "Icon", "#" + b.id);
            s.contains(D) ? s.replaceChild(b, D) : s.appendChild(b);
            D = b
        }
        ;
        var I, B = 0, J;
        this.setRotation = function(a, b) {
            clearInterval(I);
            J = 0;
            B = a;
            0 == a ? y() : I = setInterval(y, b)
        }
        ;
        e = this.hide = function() {
            s.style.opacity = 0
        }
        ;
        this.show = function() {
            s.style.opacity = 1
        }
        ;
        s = r("jwdisplayIcon");
        s.id = w;
        g = n("background");
        u = n("capLeft");
        x = n("capRight");
        v = 0 < u.width * x.width;
        var O = {
            "background-image": "url(" + u.src + "), url(" + g.src + "), url(" + x.src + ")",
            "background-position": "left,center,right",
            "background-repeat": "no-repeat",
            padding: "0 " + x.width + "px 0 " + u.width + "px",
            height: g.height,
            "margin-top": g.height / -2
        };
        f(j(), O);
        g.overSrc && (O["background-image"] = "url(" + u.overSrc + "), url(" + g.overSrc + "), url(" + x.overSrc + ")");
        f("#" + p.id + " .jwdisplay:hover " + j(), O);
        C = r("jwtext", s, m, l);
        D = r("icon", s);
        e();
        t()
    }
    ;
    f(".jwdisplayIcon", {
        display: "table",
        cursor: "pointer",
        position: "relative",
        "margin-left": "auto",
        "margin-right": "auto",
        top: "50%"
    }, !0);
    f(".jwdisplayIcon div", {
        position: "relative",
        display: "table-cell",
        "vertical-align": "middle",
        "background-repeat": "no-repeat",
        "background-position": "center"
    });
    f(".jwdisplayIcon div", {
        "vertical-align": "middle"
    }, !0);
    f(".jwdisplayIcon .jwtext", {
        color: "#fff",
        padding: "0 1px",
        "max-width": "300px",
        "overflow-y": "hidden",
        "text-align": "center",
        "-webkit-user-select": b,
        "-moz-user-select": b,
        "-ms-user-select": b,
        "user-select": b
    })
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer.utils
      , f = h.css
      , d = h.bounds
      , a = ".jwdockbuttons"
      , b = document
      , c = "none"
      , k = "block";
    g.dock = function(e, m) {
        function l(a, b) {
            var c = q(a);
            f(j("." + a), {
                width: c.width,
                background: c.src
            });
            return r("div", a, b)
        }
        function j(a) {
            return "#" + y + " " + (a ? a : "")
        }
        function r(a, c, d) {
            a = b.createElement(a);
            c && (a.className = c);
            d && d.appendChild(a);
            return a
        }
        function q(a) {
            return (a = p.getSkinElement("dock", a)) ? a : {
                width: 0,
                height: 0,
                src: ""
            }
        }
        function n() {
            f(a + " .capLeft, " + a + " .capRight", {
                display: z ? k : c
            })
        }
        var t = h.extend({}, {
            iconalpha: 0.75,
            iconalphaactive: 0.5,
            iconalphaover: 1,
            margin: 8
        }, m), y = e.id + "_dock", p = e.skin, z = 0, w = {}, s = {}, u, x, v = this;
        v.redraw = function() {
            d(u)
        }
        ;
        v.element = function() {
            return u
        }
        ;
        v.offset = function(a) {
            f(j(), {
                "margin-left": a
            })
        }
        ;
        v.hide = function() {
            v.visible && (v.visible = !1,
            u.style.opacity = 0,
            setTimeout(function() {
                u.style.display = c
            }, 150))
        }
        ;
        v.show = function() {
            !v.visible && z && (v.visible = !0,
            u.style.display = k,
            setTimeout(function() {
                u.style.opacity = 1
            }, 0))
        }
        ;
        v.addButton = function(a, b, c, e) {
            if (!w[e]) {
                var h = r("div", "divider", x)
                  , k = r("button", null, x)
                  , j = r("div", null, k);
                j.id = y + "_" + e;
                j.innerHTML = "\x26nbsp;";
                f("#" + j.id, {
                    "background-image": a
                });
                "string" == typeof c && (c = new Function(c));
                k.addEventListener("click", c);
                w[e] = {
                    element: k,
                    label: b,
                    divider: h,
                    icon: j
                };
                if (b) {
                    var l = new g.overlay(j.id + "_tooltip",p,!0);
                    a = r("div");
                    a.id = j.id + "_label";
                    a.innerHTML = b;
                    f("#" + a.id, {
                        padding: 3
                    });
                    l.setContents(a);
                    var m;
                    k.addEventListener("mouseover", function() {
                        clearTimeout(m);
                        var a = s[e], b, c;
                        b = d(w[e].icon);
                        a.offsetX(0);
                        c = d(u);
                        f("#" + a.element().id, {
                            left: b.left - c.left + b.width / 2
                        });
                        b = d(a.element());
                        c.left > b.left && a.offsetX(c.left - b.left + 8);
                        l.show();
                        for (var g in s)
                            g != e && s[g].hide()
                    }, !1);
                    k.addEventListener("mouseout", function() {
                        m = setTimeout(l.hide, 100)
                    }, !1);
                    u.appendChild(l.element());
                    s[e] = l
                }
                z++;
                n()
            }
        }
        ;
        v.removeButton = function(a) {
            w[a] && (x.removeChild(w[a].element),
            x.removeChild(w[a].divider),
            delete w[a],
            z--,
            n())
        }
        ;
        v.numButtons = function() {
            return z
        }
        ;
        v.visible = !1;
        u = r("div", "jwdock");
        x = r("div", "jwdockbuttons");
        u.appendChild(x);
        u.id = y;
        var C = q("button")
          , D = q("buttonOver")
          , A = q("buttonActive");
        C && (f(j(), {
            height: C.height,
            padding: t.margin
        }),
        f(a, {
            height: C.height
        }),
        f(j("button"), {
            width: C.width,
            cursor: "pointer",
            border: c,
            background: C.src
        }),
        D.src && f(j("button:hover"), {
            background: D.src
        }),
        A.src && f(j("button:active"), {
            background: A.src
        }),
        f(j("button\x3ediv"), {
            opacity: t.iconalpha
        }),
        f(j("button:hover\x3ediv"), {
            opacity: t.iconalphaover
        }),
        f(j("button:active\x3ediv"), {
            opacity: t.iconalphaactive
        }),
        f(j(".jwoverlay"), {
            top: t.margin + C.height
        }),
        l("capLeft", x),
        l("capRight", x),
        l("divider"));
        setTimeout(function() {
            d(u)
        })
    }
    ;
    f(".jwdock", {
        opacity: 0,
        display: c
    });
    f(".jwdock \x3e *", {
        height: "100%",
        "float": "left"
    });
    f(".jwdock \x3e .jwoverlay", {
        height: "auto",
        "float": c,
        "z-index": 99
    });
    f(a + " button", {
        position: "relative"
    });
    f(a + " \x3e *", {
        height: "100%",
        "float": "left"
    });
    f(a + " .divider", {
        display: c
    });
    f(a + " button ~ .divider", {
        display: k
    });
    f(a + " .capLeft, " + a + " .capRight", {
        display: c
    });
    f(a + " .capRight", {
        "float": "right"
    });
    f(a + " button \x3e div", {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 5,
        position: "absolute",
        "background-position": "center",
        "background-repeat": "no-repeat"
    });
    h.transitionStyle(".jwdock", "background .15s, opacity .15s");
    h.transitionStyle(".jwdock .jwoverlay", "opacity .15s");
    h.transitionStyle(a + " button div", "opacity .15s")
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer
      , f = h.utils
      , d = h.events
      , a = d.state
      , b = h.playlist;
    g.instream = function(c, h, e, m) {
        function l(a) {
            A && A && E.sendEvent(a.type, a)
        }
        function j() {
            A && v.play()
        }
        function r() {
            A && setTimeout(function() {
                J.jwInstreamDestroy(!0)
            }, 10)
        }
        function q(a) {
            a.width && a.height && z.resizeMedia()
        }
        function n() {
            C && C.redraw();
            D && D.redraw()
        }
        var t = {
            controlbarseekable: "never",
            controlbarpausable: !0,
            controlbarstoppable: !0,
            playlistclickable: !0
        }, y, p, z = e, w, s, u, x, v, C, D, A = !1, E, I, B, J = this;
        this.load = function(e, F) {
            A = !0;
            p = f.extend(t, F);
            y = new b.item(e);
            I = document.createElement("div");
            I.id = J.id + "_instream_container";
            w = m.detachMedia();
            v || (v = new g.video(w),
            v.addGlobalListener(l),
            v.addEventListener(d.JWPLAYER_MEDIA_META, q),
            v.addEventListener(d.JWPLAYER_MEDIA_COMPLETE, r),
            v.addEventListener(d.JWPLAYER_MEDIA_BUFFER_FULL, j));
            v.attachMedia();
            v.mute(h.mute);
            v.volume(h.volume);
            B = new g.model({},v);
            B.setVolume(h.volume);
            B.setMute(h.mute);
            B.setPlaylist([e]);
            x = h.playlist[h.item];
            u = c.jwGetState();
            u == a.BUFFERING || u == a.PLAYING ? w.pause() : u == a.IDLE && c.jwStop();
            s = w.currentTime;
            D = new g.display(J);
            D.setAlternateClickHandler(function(b) {
                B.state == a.PAUSED ? J.jwInstreamPlay() : A && E.sendEvent(d.JWPLAYER_INSTREAM_CLICK, b)
            });
            I.appendChild(D.element());
            f.isMobile() || (C = new g.controlbar(J),
            I.appendChild(C.element()),
            C.show());
            z.setupInstream(I, w);
            n();
            v.load(B.playlist[0])
        }
        ;
        this.jwInstreamDestroy = function(b) {
            if (A) {
                A = !1;
                v.load(x, !1);
                u == a.IDLE && v.stop(!0);
                v.detachMedia();
                z.destroyInstream();
                if (C)
                    try {
                        C.element().parentNode.removeChild(C.getDisplayElement())
                    } catch (c) {}
                E.sendEvent(d.JWPLAYER_INSTREAM_DESTROYED, {
                    reason: b ? "complete" : "destroyed"
                });
                m.attachMedia();
                if (u == a.BUFFERING || u == a.PLAYING)
                    w.play(),
                    h.playlist[h.item] == x && h.getVideo().seek(s)
            }
        }
        ;
        this.jwInstreamPlay = function() {
            A && v.play(!0)
        }
        ;
        this.jwInstreamPause = function() {
            A && v.pause(!0)
        }
        ;
        this.jwInstreamSeek = function(a) {
            A && v.seek(a)
        }
        ;
        this.jwPlay = function() {
            "true" == p.controlbarpausable.toString().toLowerCase() && this.jwInstreamPlay()
        }
        ;
        this.jwPause = function() {
            "true" == p.controlbarpausable.toString().toLowerCase() && this.jwInstreamPause()
        }
        ;
        this.jwStop = function() {
            "true" == p.controlbarstoppable.toString().toLowerCase() && (this.jwInstreamDestroy(),
            c.jwStop())
        }
        ;
        this.jwSeek = function(a) {
            switch (p.controlbarseekable.toLowerCase()) {
            case "always":
                this.jwInstreamSeek(a);
                break;
            case "backwards":
                B.position > a && this.jwInstreamSeek(a)
            }
        }
        ;
        this.jwSeekDrag = function(a) {
            B.seekDrag(a)
        }
        ;
        this.jwGetPosition = function() {}
        ;
        this.jwGetDuration = function() {}
        ;
        this.jwGetWidth = c.jwGetWidth;
        this.jwGetHeight = c.jwGetHeight;
        this.jwGetFullscreen = c.jwGetFullscreen;
        this.jwSetFullscreen = c.jwSetFullscreen;
        this.jwGetVolume = function() {
            return h.volume
        }
        ;
        this.jwSetVolume = function(a) {
            B.setVolume(a);
            c.jwSetVolume(a)
        }
        ;
        this.jwGetMute = function() {
            return h.mute
        }
        ;
        this.jwSetMute = function(a) {
            B.setMute(a);
            c.jwSetMute(a)
        }
        ;
        this.jwGetState = function() {
            return h.state
        }
        ;
        this.jwGetPlaylist = function() {
            return [y]
        }
        ;
        this.jwGetPlaylistIndex = function() {
            return 0
        }
        ;
        this.jwGetStretching = function() {
            return h.config.stretching
        }
        ;
        this.jwAddEventListener = function(a, b) {
            E.addEventListener(a, b)
        }
        ;
        this.jwRemoveEventListener = function(a, b) {
            E.removeEventListener(a, b)
        }
        ;
        this.jwSetCurrentQuality = function() {}
        ;
        this.jwGetQualityLevels = function() {
            return []
        }
        ;
        this.skin = c.skin;
        this.id = c.id + "_instream";
        E = new d.eventdispatcher;
        c.jwAddEventListener(d.JWPLAYER_RESIZE, n);
        c.jwAddEventListener(d.JWPLAYER_FULLSCREEN, n);
        return this
    }
}
)(jwplayer.html5);
(function(g) {
    var h = g.utils
      , f = h.css
      , d = g.events.state
      , a = g.html5.logo = function(b, c) {
        function k(a) {
            h.exists(a) && a.stopPropagation();
            if (!q || !l.link)
                e.jwGetState() == d.IDLE || e.jwGetState() == d.PAUSED ? e.jwPlay() : e.jwPause();
            q && l.link && (e.jwPause(),
            e.jwSetFullscreen(!1),
            window.open(l.link, l.linktarget))
        }
        var e = b, m = e.id + "_logo", l, j, r = a.defaults, q = !1;
        this.resize = function() {}
        ;
        this.element = function() {
            return j
        }
        ;
        this.offset = function(a) {
            f("#" + m + " ", {
                "margin-bottom": a
            })
        }
        ;
        this.position = function() {
            return l.position
        }
        ;
        this.margin = function() {
            return parseInt(l.margin)
        }
        ;
        this.hide = function(a) {
            if (l.hide || a)
                q = !1,
                j.style.visibility = "hidden",
                j.style.opacity = 0
        }
        ;
        this.show = function() {
            q = !0;
            j.style.visibility = "visible";
            j.style.opacity = 1
        }
        ;
        var n = "o";
        e.edition && (n = e.edition(),
        n = "pro" == n ? "p" : "premium" == n ? "r" : "ads" == n ? "a" : "free" == n ? "f" : "o");
        if ("o" == n || "f" == n)
            r.link = "http://www.longtailvideo.com/jwpabout/?a\x3dl\x26v\x3d" + g.version + "\x26m\x3dh\x26e\x3d" + n;
        l = h.extend({}, r, c);
        l.hide = "true" == l.hide.toString();
        j = document.createElement("img");
        j.className = "jwlogo";
        j.id = m;
        if (l.file) {
            var r = /(\w+)-(\w+)/.exec(l.position)
              , n = {}
              , t = l.margin;
            3 == r.length ? (n[r[1]] = t,
            n[r[2]] = t) : n.top = n.right = t;
            f("#" + m + " ", n);
            j.src = (l.prefix ? l.prefix : "") + l.file;
            j.onclick = k
        } else
            j.style.display = "none";
        return this
    }
    ;
    a.defaults = {
        prefix: h.repo(),
        file: "logo.png",
        linktarget: "_top",
        margin: 8,
        hide: !1,
        position: "top-right"
    };
    f(".jwlogo", {
        cursor: "pointer",
        position: "absolute",
        "z-index": 100,
        opacity: 0
    });
    h.transitionStyle(".jwlogo", "visibility .15s, opacity .15s")
}
)(jwplayer);
(function(g) {
    var h = g.html5
      , f = g.utils
      , d = f.css
      , a = void 0;
    h.menu = function(b, c, g, e) {
        function m(a, b) {
            return function() {
                y(a);
                r && r(b)
            }
        }
        function l(a, b) {
            var c = document.createElement("div");
            a && (c.className = a);
            b && b.appendChild(c);
            return c
        }
        function j(b) {
            return (b = g.getSkinElement("tooltip", b)) ? b : {
                width: 0,
                height: 0,
                src: a
            }
        }
        var r = e
          , q = new h.overlay(c + "_overlay",g);
        e = f.extend({
            fontcase: a,
            fontcolor: "#cccccc",
            fontsize: 11,
            fontweight: a,
            activecolor: "#ffffff",
            overcolor: "#ffffff"
        }, g.getComponentSettings("tooltip"));
        var n, t = [];
        this.element = function() {
            return q.element()
        }
        ;
        this.addOption = function(a, b) {
            var d = l("jwoption", n);
            d.id = c + "_option_" + b;
            d.innerHTML = a;
            d.addEventListener("click", m(t.length, b));
            t.push(d)
        }
        ;
        this.clearOptions = function() {
            for (; 0 < t.length; )
                n.removeChild(t.pop())
        }
        ;
        var y = this.setActive = function(a) {
            for (var b = 0; b < t.length; b++) {
                var c = t[b];
                c.className = c.className.replace(" active", "");
                b == a && (c.className += " active")
            }
        }
        ;
        this.show = q.show;
        this.hide = q.hide;
        this.offsetX = q.offsetX;
        n = l("jwmenu");
        n.id = c;
        var p = j("menuTop" + b);
        b = j("menuOption");
        var z = j("menuOptionOver")
          , w = j("menuOptionActive");
        p && n.appendChild(p.image);
        b && (p = "#" + c + " .jwoption",
        d(p, {
            "background-image": b.src,
            height: b.height,
            color: e.fontcolor,
            "padding-left": b.width,
            font: e.fontweight + " " + e.fontsize + "px Arial,Helvetica,sans-serif",
            "line-height": b.height,
            "text-transform": "upper" == e.fontcase ? "uppercase" : a
        }),
        d(p + ":hover", {
            "background-image": z.src ? z.src : a,
            color: e.overcolor
        }),
        d(p + ".active", {
            "background-image": w.src ? w.src : a,
            color: e.activecolor
        }));
        q.setContents(n)
    }
    ;
    d("." + "jwmenu jwoption".replace(/ /g, " ."), {
        "background-repeat": "no-repeat",
        cursor: "pointer",
        position: "relative"
    })
}
)(jwplayer);
(function(g) {
    var h = jwplayer.utils
      , f = jwplayer.events;
    g.model = function(d, a) {
        function b(a) {
            var b = r[a.type] ? r[a.type].split(",") : [], d, e;
            if (0 < b.length) {
                for (d = 0; d < b.length; d++) {
                    var f = b[d].split("-\x3e")
                      , g = f[0]
                      , f = f[1] ? f[1] : g;
                    c[f] != a[g] && (c[f] = a[g],
                    e = !0)
                }
                e && c.sendEvent(a.type, a)
            } else
                c.sendEvent(a.type, a)
        }
        var c = this, k, e, m = h.getCookies(), l = {
            controlbar: {},
            display: {}
        }, j = {
            autostart: !1,
            controls: !0,
            debug: void 0,
            fullscreen: !1,
            height: 320,
            mobilecontrols: !1,
            mute: !1,
            playlist: [],
            playlistposition: "none",
            playlistsize: 180,
            repeat: !1,
            skin: void 0,
            stretching: h.stretching.UNIFORM,
            width: 480,
            volume: 90
        }, r = {};
        r[f.JWPLAYER_MEDIA_MUTE] = "mute";
        r[f.JWPLAYER_MEDIA_VOLUME] = "volume";
        r[f.JWPLAYER_PLAYER_STATE] = "newstate-\x3estate";
        r[f.JWPLAYER_MEDIA_BUFFER] = "bufferPercent-\x3ebuffer";
        r[f.JWPLAYER_MEDIA_TIME] = "position,duration";
        c.getVideo = function() {
            return k
        }
        ;
        c.seekDrag = function(a) {
            k.seekDrag(a)
        }
        ;
        c.setFullscreen = function(a) {
            a != c.fullscreen && (c.fullscreen = a,
            c.sendEvent(f.JWPLAYER_FULLSCREEN, {
                fullscreen: a
            }))
        }
        ;
        c.setPlaylist = function(a) {
            for (var b = c, d = [], e = 0; e < a.length; e++) {
                var g = h.extend({}, a[e]);
                g.sources = h.filterSources(g.sources);
                if (0 < g.sources.length) {
                    for (var j = 0; j < g.sources.length; j++) {
                        var l = g.sources[j];
                        l.label || (l.label = j.toString())
                    }
                    d.push(g)
                }
            }
            b.playlist = d;
            0 == c.playlist.length ? c.sendEvent(f.JWPLAYER_ERROR, {
                message: "Error loading playlist: No playable sources found"
            }) : (c.sendEvent(f.JWPLAYER_PLAYLIST_LOADED, {
                playlist: a
            }),
            c.item = -1,
            c.setItem(0))
        }
        ;
        c.setItem = function(a) {
            a = a == c.playlist.length || -1 > a ? 0 : -1 == a || a > c.playlist.length ? c.playlist.length - 1 : a;
            a != c.item && (c.item = a,
            c.sendEvent(f.JWPLAYER_PLAYLIST_ITEM, {
                index: c.item
            }))
        }
        ;
        c.setVolume = function(a) {
            c.mute && 0 < a && c.setMute(!1);
            a = Math.round(a);
            c.mute || h.saveCookie("volume", a);
            b({
                type: f.JWPLAYER_MEDIA_VOLUME,
                volume: a
            });
            k.volume(a)
        }
        ;
        c.setMute = function(a) {
            h.exists(a) || (a = !c.mute);
            h.saveCookie("mute", a);
            b({
                type: f.JWPLAYER_MEDIA_MUTE,
                mute: a
            });
            k.mute(a)
        }
        ;
        c.componentConfig = function(a) {
            return l[a]
        }
        ;
        h.extend(c, new f.eventdispatcher);
        e = c;
        var m = h.extend({}, j, m, d), q;
        for (q in m)
            m[q] = h.serialize(m[q]);
        e.config = m;
        h.extend(c, {
            id: d.id,
            state: f.state.IDLE,
            duration: -1,
            position: 0,
            buffer: 0
        }, c.config);
        c.playlist = [];
        c.setItem(0);
        a ? (k = a,
        e = k.getTag()) : (e = document.createElement("video"),
        k = new g.video(e));
        k.volume(c.volume);
        k.mute(c.mute);
        k.addGlobalListener(b)
    }
}
)(jwplayer.html5);
(function(g) {
    var h = g.utils
      , f = h.css
      , d = h.transitionStyle
      , a = "top"
      , b = "bottom"
      , c = "right"
      , k = "left"
      , e = void 0
      , m = document
      , l = {
        fontcase: e,
        fontcolor: "#ffffff",
        fontsize: 12,
        fontweight: e,
        activecolor: "#ffffff",
        overcolor: "#ffffff"
    };
    g.html5.overlay = function(d, g, q) {
        function n(a) {
            return "#" + s + (a ? " ." + a : "")
        }
        function t(a, b) {
            var c = m.createElement("div");
            a && (c.className = a);
            b && b.appendChild(c);
            return c
        }
        function y(a, b) {
            var c;
            c = (c = w.getSkinElement("tooltip", a)) ? c : {
                width: 0,
                height: 0,
                src: "",
                image: e,
                ready: !1
            };
            var d = t(b, u);
            f(n(b.replace(" ", ".")), {
                "background-image": c.src
            });
            return [d, c]
        }
        function p(d, g) {
            g || (g = "");
            var h = y("cap" + d + g, "jwborder jw" + d + (g ? g : ""))
              , j = h[0]
              , h = h[1]
              , l = {
                "background-image": h.src,
                width: d == k || g == k || d == c || g == c ? h.width : e,
                height: d == a || g == a || d == b || g == b ? h.height : e
            };
            l[d] = d == b && !A || d == a && A ? D : 0;
            g && (l[g] = 0);
            f(n(j.className.replace(/ /g, ".")), l);
            j = {};
            l = {};
            h = {
                left: h.width,
                right: h.width,
                top: (A ? D : 0) + h.height,
                bottom: (A ? 0 : D) + h.height
            };
            g && (j[g] = h[g],
            j[d] = 0,
            l[d] = h[d],
            l[g] = 0,
            f(n("jw" + d), j),
            f(n("jw" + g), l),
            E[d] = h[d],
            E[g] = h[g])
        }
        function z() {
            0 != u.clientWidth && (f(n(), {
                "margin-left": Math.round(v - u.clientWidth / 2)
            }),
            f(n("jwarrow"), {
                "margin-left": Math.round(C.width / -2 - v)
            }))
        }
        var w = g, s = d, u, x, v = 0, C, D, A = q;
        d = h.extend({}, l, w.getComponentSettings("tooltip"));
        var E = {}
          , I = this;
        I.element = function() {
            return u
        }
        ;
        var B;
        I.setContents = function(a) {
            h.empty(x);
            x.appendChild(a);
            clearTimeout(B);
            B = setTimeout(z, 0)
        }
        ;
        I.offsetX = function(a) {
            v = a;
            clearTimeout(B);
            z()
        }
        ;
        I.borderWidth = function() {
            return E.left
        }
        ;
        I.show = function() {
            I.showing = !0;
            u.style.opacity = 1;
            u.style.visibility = "visible"
        }
        ;
        I.hide = function() {
            I.showing = !1;
            u.style.opacity = 0;
            u.style.visibility = "hidden"
        }
        ;
        u = t(".jwoverlay".replace(".", ""));
        u.id = s;
        C = y("arrow", "jwarrow")[1];
        D = C.height;
        f(n("jwarrow"), {
            position: "absolute",
            bottom: A ? e : 0,
            top: A ? 0 : e,
            width: C.width,
            height: D,
            left: "50%"
        });
        p(a, k);
        p(b, k);
        p(a, c);
        p(b, c);
        p(k);
        p(c);
        p(a);
        p(b);
        y("background", "jwback");
        f(n("jwback"), {
            left: E.left,
            right: E.right,
            top: E.top,
            bottom: E.bottom
        });
        x = t("jwcontents", u);
        f(n("jwcontents") + " *", {
            color: d.fontcolor,
            font: d.fontweight + " " + d.fontsize + "px Arial,Helvetica,sans-serif",
            "text-transform": "upper" == d.fontcase ? "uppercase" : e
        });
        A && h.transform(n("jwarrow"), "rotate(180deg)");
        f(n(), {
            padding: E.top + 1 + "px " + E.right + "px " + (E.bottom + 1) + "px " + E.left + "px"
        });
        I.showing = !1
    }
    ;
    f(".jwoverlay", {
        position: "absolute",
        visibility: "hidden",
        opacity: 0
    });
    f(".jwoverlay .jwcontents", {
        position: "relative",
        "z-index": 1
    });
    f(".jwoverlay .jwborder", {
        position: "absolute",
        "background-size": "100% 100%"
    }, !0);
    f(".jwoverlay .jwback", {
        position: "absolute",
        "background-size": "100% 100%"
    });
    d(".jwoverlay", "opacity .15s, visibility .15s, left .01s linear")
}
)(jwplayer);
(function(g) {
    var h = jwplayer.utils;
    g.player = function(f) {
        function d(a) {
            var b = {
                description: a.description,
                file: a.file,
                image: a.image,
                mediaid: a.mediaid,
                title: a.title
            }, c;
            for (c in a)
                b[c] = a[c];
            b.sources = [];
            b.tracks = [];
            if (0 < a.sources.length)
                for (c in a.sources) {
                    var d = a.sources[c];
                    b.sources.push({
                        file: d.file,
                        type: d.type ? d.type : void 0,
                        label: d.label,
                        "default": d["default"] ? !0 : !1
                    })
                }
            if (0 < a.tracks.length)
                for (c in a.tracks)
                    d = a.tracks[c],
                    b.tracks.push({
                        file: d.file,
                        kind: d.kind ? d.kind : void 0,
                        label: d.label,
                        "default": d["default"] ? !0 : !1
                    });
            !a.file && 0 < a.sources.length && (a.file = a.sources[0].file);
            return b
        }
        function a(a) {
            return function() {
                return c[a]
            }
        }
        var b = this, c, k, e, m;
        c = new g.model(f);
        b.id = c.id;
        k = new g.view(b,c);
        e = new g.controller(c,k);
        b._model = c;
        jwplayer.utils.css.block();
        b.jwPlay = e.play;
        b.jwPause = e.pause;
        b.jwStop = e.stop;
        b.jwSeek = e.seek;
        b.jwSetVolume = e.setVolume;
        b.jwSetMute = e.setMute;
        b.jwLoad = e.load;
        b.jwPlaylistNext = e.next;
        b.jwPlaylistPrev = e.prev;
        b.jwPlaylistItem = e.item;
        b.jwSetFullscreen = e.setFullscreen;
        b.jwResize = k.resize;
        b.jwSeekDrag = c.seekDrag;
        b.jwSetStretching = e.setStretching;
        b.jwGetQualityLevels = e.getQualityLevels;
        b.jwGetCurrentQuality = e.getCurrentQuality;
        b.jwSetCurrentQuality = e.setCurrentQuality;
        b.jwGetCaptionsList = e.getCaptionsList;
        b.jwGetCurrentCaptions = e.getCurrentCaptions;
        b.jwSetCurrentCaptions = e.setCurrentCaptions;
        b.jwSetControls = k.setControls;
        b.jwGetSafeRegion = k.getSafeRegion;
        b.jwForceState = k.forceState;
        b.jwReleaseState = k.releaseState;
        b.jwGetPlaylistIndex = a("item");
        b.jwGetPosition = a("position");
        b.jwGetDuration = a("duration");
        b.jwGetBuffer = a("buffer");
        b.jwGetWidth = a("width");
        b.jwGetHeight = a("height");
        b.jwGetFullscreen = a("fullscreen");
        b.jwGetVolume = a("volume");
        b.jwGetMute = a("mute");
        b.jwGetState = a("state");
        b.jwGetStretching = a("stretching");
        b.jwGetPlaylist = function() {
            for (var a = c.playlist, b = [], e = 0; e < a.length; e++)
                b.push(d(a[e]));
            return b
        }
        ;
        b.jwGetControls = a("controls");
        b.jwDetachMedia = e.detachMedia;
        b.jwAttachMedia = e.attachMedia;
        b.jwLoadInstream = function(a, d) {
            m || (m = new g.instream(b,c,k,e));
            setTimeout(function() {
                m.load(a, d)
            }, 10)
        }
        ;
        b.jwInstreamPlay = function() {
            m && m.jwInstreamPlay()
        }
        ;
        b.jwInstreamPause = function() {
            m && m.jwInstreamPause()
        }
        ;
        b.jwInstreamDestroy = function() {
            m && m.jwInstreamDestroy();
            m = void 0
        }
        ;
        b.jwPlayerDestroy = function() {
            k && k.destroy()
        }
        ;
        b.jwAddEventListener = e.addEventListener;
        b.jwRemoveEventListener = e.removeEventListener;
        b.jwDockAddButton = k.addButton;
        b.jwDockRemoveButton = k.removeButton;
        f = new g.setup(c,k,e);
        f.addEventListener(jwplayer.events.JWPLAYER_READY, function(a) {
            e.playerReady(a);
            h.css.unblock()
        });
        f.addEventListener(jwplayer.events.JWPLAYER_ERROR, function(a) {
            h.log("There was a problem setting up the player: ", a);
            h.css.unblock()
        });
        f.start()
    }
}
)(jwplayer.html5);
(function(g) {
    var h = {
        size: 180,
        backgroundcolor: "#333333",
        fontcolor: "#999999",
        overcolor: "#CCCCCC",
        activecolor: "#CCCCCC",
        titlecolor: "#CCCCCC",
        titleovercolor: "#FFFFFF",
        titleactivecolor: "#FFFFFF",
        fontweight: "normal",
        titleweight: "normal",
        fontsize: 11,
        titlesize: 13
    }
      , f = jwplayer.events
      , d = jwplayer.utils
      , a = d.css
      , b = document;
    g.playlistcomponent = function(c, k) {
        function e(a) {
            return "#" + n.id + (a ? " ." + a : "")
        }
        function m(a, c) {
            var d = b.createElement(a);
            c && (d.className = c);
            return d
        }
        function l(a) {
            return function() {
                w = a;
                j.jwPlaylistItem(a);
                j.jwPlay(!0)
            }
        }
        var j = c, r = j.skin, q = d.extend({}, h, j.skin.getComponentSettings("playlist"), k), n, t, y, p, z = -1, w, s, u = 60, x = {
            background: void 0,
            divider: void 0,
            item: void 0,
            itemOver: void 0,
            itemImage: void 0,
            itemActive: void 0
        };
        this.element = function() {
            return n
        }
        ;
        this.redraw = function() {
            s && s.redraw()
        }
        ;
        this.show = function() {
            d.show(n)
        }
        ;
        this.hide = function() {
            d.hide(n)
        }
        ;
        n = m("div", "jwplaylist");
        n.id = j.id + "_jwplayer_playlistcomponent";
        t = m("div", "jwlistcontainer");
        n.appendChild(t);
        for (var v in x)
            x[v] = r.getSkinElement("playlist", v);
        x.item && (u = x.item.height);
        var C = v = r = 0;
        d.clearCss(e());
        a(e(), {
            "background-color": q.backgroundcolor
        });
        a(e("jwlist"), {
            "background-image": x.background ? " url(" + x.background.src + ")" : ""
        });
        a(e("jwlist *"), {
            color: q.fontcolor,
            font: q.fontweight + " " + q.fontsize + "px Arial, Helvetica, sans-serif"
        });
        x.itemImage ? (r = (u - x.itemImage.height) / 2 + "px ",
        v = x.itemImage.width,
        C = x.itemImage.height) : (v = 4 * u / 3,
        C = u);
        x.divider && a(e("jwplaylistdivider"), {
            "background-image": "url(" + x.divider.src + ")",
            "background-size": "100% " + x.divider.height + "px",
            width: "100%",
            height: x.divider.height
        });
        a(e("jwplaylistimg"), {
            height: C,
            width: v,
            margin: r ? r + r + r + r : "0 5px 0 0"
        });
        a(e("jwlist li"), {
            "background-image": x.item ? "url(" + x.item.src + ")" : "",
            height: u,
            "background-size": "100% " + u + "px",
            cursor: "pointer"
        });
        v = {
            overflow: "hidden"
        };
        "" !== q.activecolor && (v.color = q.activecolor);
        x.itemActive && (v["background-image"] = "url(" + x.itemActive.src + ")");
        a(e("jwlist li.active"), v);
        a(e("jwlist li.active .jwtitle"), {
            color: q.titleactivecolor
        });
        v = {
            overflow: "hidden"
        };
        "" !== q.overcolor && (v.color = q.overcolor);
        x.itemOver && (v["background-image"] = "url(" + x.itemOver.src + ")");
        a(e("jwlist li:hover"), v);
        a(e("jwlist li:hover .jwtitle"), {
            color: q.titleovercolor
        });
        a(e("jwtextwrapper"), {
            height: u - 5,
            position: "relative"
        });
        a(e("jwtitle"), {
            height: 15,
            overflow: "hidden",
            display: "inline-block",
            width: "100%",
            color: q.titlecolor,
            "margin-top": r ? r : 7,
            "line-height": 13,
            "font-size": q.titlesize,
            "font-weight": q.titleweight
        });
        a(e("jwdescription"), {
            display: "block",
            "font-size": q.fontsize,
            "line-height": 19,
            "margin-top": 5,
            overflow: "hidden",
            height: u,
            position: "relative"
        });
        j.jwAddEventListener(f.JWPLAYER_PLAYLIST_LOADED, function() {
            t.innerHTML = "";
            for (var b = j.jwGetPlaylist(), c = [], e = 0; e < b.length; e++)
                b[e]["ova.hidden"] || c.push(b[e]);
            if (y = c) {
                b = m("ul", "jwlist");
                b.id = n.id + "_ul" + Math.round(1E7 * Math.random());
                p = b;
                for (b = 0; b < y.length; b++) {
                    var f = b
                      , c = y[f]
                      , e = m("li", "jwitem")
                      , h = void 0;
                    e.id = p.id + "_item_" + f;
                    0 < f && (h = m("div", "jwplaylistdivider"),
                    e.appendChild(h));
                    f = m("div", "jwplaylistimg jwfill");
                    if (c.image || c["playlist.image"] || x.itemImage)
                        h = void 0,
                        c["playlist.image"] ? h = c["playlist.image"] : c.image ? h = c.image : x.itemImage && (h = x.itemImage.src),
                        a("#" + e.id + " .jwplaylistimg", {
                            "background-image": h ? "url(" + h + ")" : null
                        }),
                        e.appendChild(f);
                    f = m("div", "jwtextwrapper");
                    h = m("span", "jwtitle");
                    h.innerHTML = c && c.title ? c.title : "";
                    f.appendChild(h);
                    c.description && (h = m("span", "jwdescription"),
                    h.innerHTML = c.description,
                    f.appendChild(h));
                    e.appendChild(f);
                    c = e;
                    c.onclick = l(b);
                    p.appendChild(c)
                }
                z = j.jwGetPlaylistIndex();
                d.isIOS() && window.iScroll ? (n.innerHTML = "",
                n.appendChild(p),
                p.style.height = u * y.length + "px",
                new iScroll(n.id)) : (t.appendChild(p),
                s = new g.playlistslider(n.id + "_slider",j.skin,n,p))
            }
        });
        j.jwAddEventListener(f.JWPLAYER_PLAYLIST_ITEM, function(a) {
            0 <= z && (b.getElementById(p.id + "_item_" + z).className = "jwitem",
            z = a.index);
            b.getElementById(p.id + "_item_" + a.index).className = "jwitem active";
            a = j.jwGetPlaylistIndex();
            a != w && (w = -1,
            d.isIOS() && window.iScroll ? p.scrollTop = a * u : s && s.visible() && s.thumbPosition(a / (j.jwGetPlaylist().length - 1)))
        });
        return this
    }
    ;
    a(".jwplaylist", {
        position: "absolute",
        width: "100%",
        height: "100%"
    });
    d.dragStyle(".jwplaylist", "none");
    a(".jwplaylist .jwplaylistimg", {
        position: "relative",
        width: "100%",
        "float": "left",
        margin: "0 5px 0 0",
        background: "#000",
        overflow: "hidden"
    });
    a(".jwplaylist .jwlist", {
        position: "absolute",
        width: "100%",
        "list-style": "none",
        margin: 0,
        padding: 0
    });
    a(".jwplaylist .jwlistcontainer", {
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        height: "100%"
    });
    a(".jwplaylist .jwlist li", {
        width: "100%"
    });
    a(".jwplaylist .jwtextwrapper", {
        overflow: "hidden"
    });
    a(".jwplaylist .jwplaylistdivider", {
        position: "absolute"
    })
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer
      , f = h.utils
      , d = h.events;
    g.playlistloader = function() {
        function a(a) {
            try {
                var b = a.responseXML.firstChild;
                "xml" == g.parsers.localName(b) && (b = b.nextSibling);
                if ("rss" != g.parsers.localName(b))
                    c("Not a valid RSS feed");
                else {
                    var l = new h.playlist(g.parsers.rssparser.parse(b));
                    if (a = l) {
                        var b = [], j, r, q;
                        for (j = 0; j < a.length; j++)
                            if (r = a[j],
                            (q = f.filterSources(r.sources)) && q.length)
                                r.sources = q,
                                b.push(r);
                        l = b
                    } else
                        l = void 0;
                    l && l.length && l[0].sources && l[0].sources.length && l[0].sources[0].file ? k.sendEvent(d.JWPLAYER_PLAYLIST_LOADED, {
                        playlist: l
                    }) : c("No playable sources found")
                }
            } catch (n) {
                c()
            }
        }
        function b(a) {
            c(a.match(/invalid/i) ? "Not a valid RSS feed" : "")
        }
        function c(a) {
            k.sendEvent(d.JWPLAYER_ERROR, {
                message: a ? a : "Error loading file"
            })
        }
        var k = new d.eventdispatcher;
        f.extend(this, k);
        this.load = function(c) {
            f.ajax(c, a, b)
        }
    }
}
)(jwplayer.html5);
(function(g) {
    function h() {
        var a = [], b;
        for (b = 0; b < arguments.length; b++)
            a.push(".jwplaylist ." + arguments[b]);
        return a.join(",")
    }
    var f = jwplayer.utils
      , d = f.css
      , a = document
      , b = window
      , c = void 0;
    g.playlistslider = function(g, e, h, l) {
        function j(a) {
            return "#" + w.id + (a ? " ." + a : "")
        }
        function r(b, e, f, g) {
            var h = a.createElement("div");
            b && (h.className = b,
            e && d(j(b), {
                "background-image": e.src ? e.src : c,
                "background-repeat": g ? "repeat-y" : "no-repeat",
                height: g ? c : e.height
            }));
            f && f.appendChild(h);
            return h
        }
        function q(a) {
            return (a = z.getSkinElement("playlist", a)) ? a : {
                width: 0,
                height: 0,
                src: c
            }
        }
        function n(a) {
            if (A)
                return a = a ? a : b.event,
                N(v - (a.detail ? -1 * a.detail : a.wheelDelta / 40) / 10),
                a.stopPropagation && a.stopPropagation(),
                a.preventDefault && a.preventDefault(),
                a.cancelBubble = !0,
                a.cancel = !0,
                a.returnValue = !1
        }
        function t(a) {
            if (x || "click" == a.type) {
                var b = f.bounds(s)
                  , c = u.clientHeight / 2;
                N((a.pageY - b.top - c) / (b.height - c - c))
            }
        }
        function y(a) {
            return function(b) {
                0 < b.button || (N(v + 0.05 * a),
                C = setTimeout(function() {
                    D = setInterval(function() {
                        N(v + 0.05 * a)
                    }, 50)
                }, 500))
            }
        }
        function p() {
            x = !1;
            b.removeEventListener("mousemove", t);
            b.removeEventListener("mouseup", p);
            a.onselectstart = c;
            clearTimeout(C);
            clearInterval(D)
        }
        var z = e, w, s, u, x, v = 0, C, D, A = !0, E, I, B, J, O, F, M, U;
        this.element = function() {
            return w
        }
        ;
        this.visible = function() {
            return A
        }
        ;
        var V = this.redraw = function() {
            clearTimeout(U);
            U = setTimeout(function() {
                if (l && l.clientHeight) {
                    var a = l.parentNode.clientHeight / l.clientHeight;
                    0 > a && (a = 0);
                    1 < a ? A = !1 : (A = !0,
                    d(j("jwthumb"), {
                        height: Math.max(s.clientHeight * a, J.height + O.height)
                    }));
                    d(j(), {
                        visibility: A ? "visible" : "hidden"
                    });
                    l && (l.style.width = A ? l.parentElement.clientWidth - B.width + "px" : "")
                } else
                    U = setTimeout(V, 10)
            }, 0)
        }
          , N = this.thumbPosition = function(a) {
            isNaN(a) && (a = 0);
            v = Math.max(0, Math.min(1, a));
            d(j("jwthumb"), {
                top: F + (s.clientHeight - u.clientHeight) * v
            });
            l && (l.style.top = (w.clientHeight - l.scrollHeight) * v + "px")
        }
        ;
        w = r("jwslider", null, h);
        w.id = g;
        w.addEventListener("mousedown", function(c) {
            0 == c.button && (x = !0);
            a.onselectstart = function() {
                return !1
            }
            ;
            b.addEventListener("mousemove", t, !1);
            b.addEventListener("mouseup", p, !1)
        }, !1);
        w.addEventListener("click", t, !1);
        E = q("sliderCapTop");
        I = q("sliderCapBottom");
        B = q("sliderRail");
        g = q("sliderRailCapTop");
        e = q("sliderRailCapBottom");
        h = q("sliderThumb");
        J = q("sliderThumbCapTop");
        O = q("sliderThumbCapBottom");
        F = E.height;
        M = I.height;
        d(j(), {
            width: B.width
        });
        d(j("jwrail"), {
            top: F,
            bottom: M
        });
        d(j("jwthumb"), {
            top: F
        });
        E = r("jwslidertop", E, w);
        I = r("jwsliderbottom", I, w);
        s = r("jwrail", null, w);
        u = r("jwthumb", null, w);
        E.addEventListener("mousedown", y(-1), !1);
        I.addEventListener("mousedown", y(1), !1);
        r("jwrailtop", g, s);
        r("jwrailback", B, s, !0);
        r("jwrailbottom", e, s);
        d(j("jwrailback"), {
            top: g.height,
            bottom: e.height
        });
        r("jwthumbtop", J, u);
        r("jwthumbback", h, u, !0);
        r("jwthumbbottom", O, u);
        d(j("jwthumbback"), {
            top: J.height,
            bottom: O.height
        });
        V();
        l && (l.addEventListener("mousewheel", n, !1),
        l.addEventListener("DOMMouseScroll", n, !1));
        return this
    }
    ;
    d(h("jwslider"), {
        position: "absolute",
        height: "100%",
        visibility: "hidden",
        right: 0,
        top: 0,
        cursor: "pointer",
        "z-index": 1
    });
    d(h("jwslider") + " *", {
        position: "absolute",
        width: "100%",
        "background-position": "center",
        "background-size": "100% 100%"
    });
    d(h("jwslidertop", "jwrailtop", "jwthumbtop"), {
        top: 0
    });
    d(h("jwsliderbottom", "jwrailbottom", "jwthumbbottom"), {
        bottom: 0
    })
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer.utils
      , f = h.css
      , d = document
      , a = "none";
    g.rightclick = function(b, c) {
        function f(a) {
            var b = d.createElement("div");
            b.className = a.replace(".", "");
            return b
        }
        function e() {
            j || (r.style.display = a)
        }
        var m, l = h.extend({
            aboutlink: "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + g.version + "\x26m\x3dh\x26e\x3do",
            abouttext: "About JW Player " + g.version + "..."
        }, c), j = !1, r, q;
        this.element = function() {
            return r
        }
        ;
        this.destroy = function() {
            d.removeEventListener("mousedown", e, !1)
        }
        ;
        m = d.getElementById(b.id);
        r = f(".jwclick");
        r.id = b.id + "_menu";
        r.style.display = a;
        m.oncontextmenu = function(b) {
            if (!j) {
                null == b && (b = window.event);
                var c = h.bounds(m)
                  , d = c.top
                  , c = c.left;
                r.style.display = a;
                r.style.left = b.pageX - c + "px";
                r.style.top = b.pageY - d + "px";
                r.style.display = "block";
                b.preventDefault()
            }
        }
        ;
        r.onmouseover = function() {
            j = !0
        }
        ;
        r.onmouseout = function() {
            j = !1
        }
        ;
        d.addEventListener("mousedown", e, !1);
        q = f(".jwclick_item");
        q.innerHTML = l.abouttext;
        q.onclick = function() {
            window.location.href = l.aboutlink
        }
        ;
        r.appendChild(q);
        m.appendChild(r)
    }
    ;
    f(".jwclick", {
        "background-color": "#FFF",
        "-webkit-border-radius": 5,
        "-moz-border-radius": 5,
        "border-radius": 5,
        height: "auto",
        border: "1px solid #bcbcbc",
        "font-family": '"MS Sans Serif", "Geneva", sans-serif',
        "font-size": 10,
        width: 320,
        "-webkit-box-shadow": "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
        "-moz-box-shadow": "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
        "box-shadow": "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
        position: "absolute",
        "z-index": 999
    }, !0);
    f(".jwclick div", {
        padding: "8px 21px",
        margin: "0px",
        "background-color": "#FFF",
        border: "none",
        "font-family": '"MS Sans Serif", "Geneva", sans-serif',
        "font-size": 10,
        color: "inherit"
    }, !0);
    f(".jwclick_item", {
        padding: "8px 21px",
        "text-align": "left",
        cursor: "pointer"
    }, !0);
    f(".jwclick_item:hover", {
        "background-color": "#595959",
        color: "#FFF"
    }, !0);
    f(".jwclick_item a", {
        "text-decoration": a,
        color: "#000"
    }, !0);
    f(".jwclick hr", {
        width: "100%",
        padding: 0,
        margin: 0,
        border: "1px #e9e9e9 solid"
    }, !0)
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer
      , f = h.utils
      , d = h.events
      , a = h.playlist
      , b = 2
      , c = 3
      , k = 4;
    g.setup = function(e, h) {
        function l(a, b, c) {
            D.push({
                name: a,
                method: b,
                depends: c
            })
        }
        function j() {
            for (var a = 0; a < D.length; a++) {
                var b = D[a], c;
                a: {
                    if (c = b.depends) {
                        c = c.toString().split(",");
                        for (var d = 0; d < c.length; d++)
                            if (!u[c[d]]) {
                                c = !1;
                                break a
                            }
                    }
                    c = !0
                }
                if (c) {
                    D.splice(a, 1);
                    try {
                        b.method(),
                        j()
                    } catch (e) {
                        z(e.message)
                    }
                    return
                }
            }
            0 < D.length && !C && setTimeout(j, 500)
        }
        function r() {
            u[b] = !0
        }
        function q(a) {
            z("Error loading skin: " + a)
        }
        function n(a) {
            t(a.playlist)
        }
        function t(a) {
            w.setPlaylist(a);
            0 == w.playlist[0].sources.length ? z("Error loading playlist: No playable sources found") : u[c] = !0
        }
        function y(a) {
            z("Error loading playlist: " + a.message)
        }
        function p() {
            u[k] = !0
        }
        function z(a) {
            C = !0;
            v.sendEvent(d.JWPLAYER_ERROR, {
                message: a
            });
            s.setupError(a)
        }
        var w = e, s = h, u = {}, x, v = new d.eventdispatcher, C = !1, D = [];
        f.extend(this, v);
      this.start = j;
l(1, function() {
    e.edition = function() { return "premium"; }; 
    u[1] = !0;  
});

        l(b, function() {
            x = new g.skin;
            x.load(w.config.skin, r, q)
        }, 1);
        l(c, function() {
            switch (f.typeOf(w.config.playlist)) {
            case "string":
                var b = new g.playlistloader;
                b.addEventListener(d.JWPLAYER_PLAYLIST_LOADED, n);
                b.addEventListener(d.JWPLAYER_ERROR, y);
                b.load(w.config.playlist);
                break;
            case "array":
                t(new a(w.config.playlist))
            }
        }, 1);
        l(k, function() {
            var a = w.playlist[w.item].image;
            if (a) {
                var b = new Image;
                b.addEventListener("load", p, !1);
                b.addEventListener("error", p, !1);
                b.src = a;
                setTimeout(p, 500)
            } else
                u[k] = !0
        }, c);
        l(5, function() {
            s.setup(x);
            u[5] = !0
        }, k + "," + b);
        l(6, function() {
            u[6] = !0
        }, "5," + c);
        l(7, function() {
            v.sendEvent(d.JWPLAYER_READY);
            u[7] = !0
        }, 6)
    }
}
)(jwplayer.html5);
(function(g) {
    g.skin = function() {
        var h = {}
          , f = !1;
        this.load = function(d, a, b) {
            new g.skinloader(d,function(b) {
                f = !0;
                h = b;
                "function" == typeof a && a()
            }
            ,function(a) {
                "function" == typeof b && b(a)
            }
            )
        }
        ;
        this.getSkinElement = function(d, a) {
            d = d.toLowerCase();
            a = a.toLowerCase();
            if (f)
                try {
                    return h[d].elements[a]
                } catch (b) {
                    jwplayer.utils.log("No such skin component / element: ", [d, a])
                }
            return null
        }
        ;
        this.getComponentSettings = function(d) {
            d = d.toLowerCase();
            return f && h && h[d] ? h[d].settings : null
        }
        ;
        this.getComponentLayout = function(d) {
            d = d.toLowerCase();
            if (f) {
                var a = h[d].layout;
                if (a && (a.left || a.right || a.center))
                    return h[d].layout
            }
            return null
        }
    }
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer.utils
      , f = "Skin formatting error";
    g.skinloader = function(d, a, b) {
        function c(a) {
            r = a;
            h.ajax(h.getAbsolutePath(p), function(a) {
                try {
                    h.exists(a.responseXML) && e(a.responseXML)
                } catch (b) {
                    n(f)
                }
            }, function(a) {
                n(a)
            })
        }
        function k(a, b) {
            return a ? a.getElementsByTagName(b) : null
        }
        function e(a) {
            var b = k(a, "skin")[0];
            a = k(b, "component");
            b = b.getAttribute("target");
            (!b || parseFloat(b) > parseFloat(jwplayer.version)) && n("Incompatible player version");
            if (0 === a.length)
                q(r);
            else
                for (b = 0; b < a.length; b++) {
                    var c = j(a[b].getAttribute("name"))
                      , d = {
                        settings: {},
                        elements: {},
                        layout: {}
                    }
                      , e = k(k(a[b], "elements")[0], "element");
                    r[c] = d;
                    for (var f = 0; f < e.length; f++)
                        l(e[f], c);
                    if ((c = k(a[b], "settings")[0]) && 0 < c.childNodes.length) {
                        c = k(c, "setting");
                        for (e = 0; e < c.length; e++) {
                            var f = c[e].getAttribute("name")
                              , g = c[e].getAttribute("value");
                            /color$/.test(f) && (g = h.stringToColor(g));
                            d.settings[j(f)] = g
                        }
                    }
                    if ((c = k(a[b], "layout")[0]) && 0 < c.childNodes.length) {
                        c = k(c, "group");
                        for (e = 0; e < c.length; e++) {
                            g = c[e];
                            f = {
                                elements: []
                            };
                            d.layout[j(g.getAttribute("position"))] = f;
                            for (var p = 0; p < g.attributes.length; p++) {
                                var y = g.attributes[p];
                                f[y.name] = y.value
                            }
                            g = k(g, "*");
                            for (p = 0; p < g.length; p++) {
                                y = g[p];
                                f.elements.push({
                                    type: y.tagName
                                });
                                for (var z = 0; z < y.attributes.length; z++) {
                                    var B = y.attributes[z];
                                    f.elements[p][j(B.name)] = B.value
                                }
                                h.exists(f.elements[p].name) || (f.elements[p].name = y.tagName)
                            }
                        }
                    }
                    t = !1;
                    m()
                }
        }
        function m() {
            clearInterval(y);
            z || (y = setInterval(function() {
                a: {
                    for (var a in r)
                        if ("properties" != a)
                            for (var b in r[a].elements)
                                if (!(r[j(a)] ? r[j(a)].elements[j(b)] : null).ready)
                                    break a;
                    !1 == t && (clearInterval(y),
                    q(r))
                }
            }, 100))
        }
        function l(a, b) {
            b = j(b);
            var c = new Image
              , d = j(a.getAttribute("name"))
              , e = a.getAttribute("src");
            if (0 !== e.indexOf("data:image/png;base64,"))
                var f = h.getAbsolutePath(p)
                  , e = [f.substr(0, f.lastIndexOf("/")), b, e].join("/");
            r[b].elements[d] = {
                height: 0,
                width: 0,
                src: "",
                ready: !1,
                image: c
            };
            c.onload = function() {
                var a = b
                  , e = r[j(a)] ? r[j(a)].elements[j(d)] : null;
                e ? (e.height = c.height,
                e.width = c.width,
                e.src = c.src,
                e.ready = !0,
                m()) : h.log("Loaded an image for a missing element: " + a + "." + d)
            }
            ;
            c.onerror = function() {
                z = !0;
                m();
                n("Skin image not found: " + this.src)
            }
            ;
            c.src = e
        }
        function j(a) {
            return a ? a.toLowerCase() : ""
        }
        var r = {}, q = a, n = b, t = !0, y, p = d, z = !1;
        "string" != typeof p || "" === p ? e(g.defaultskin().xml) : "xml" != h.extension(p) ? n("Skin not a valid file type") : new g.skinloader("",c,n)
    }
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer.utils
      , f = jwplayer.events
      , d = h.css;
    g.thumbs = function(a) {
        function b(a) {
            if ("array" == !h.typeOf(a))
                return c("Invalid data");
            m = a;
            d("#" + j, {
                display: "block"
            })
        }
        function c(a) {
            h.log("Thumbnails could not be loaded: " + a)
        }
        function k(a) {
            a = a.target;
            d("#" + j, {
                "background-image": a.src,
                "background-position": "0 0",
                width: a.width,
                height: a.height
            })
        }
        var e, m, l, j = a;
        a = new f.eventdispatcher;
        h.extend(this, a);
        this.load = function(a) {
            d("#" + j, {
                display: "none"
            });
            a && (l = a.split("?")[0].split("/").slice(0, -1).join("/"),
            (new g.parsers.srt(b,c,!0)).load(a))
        }
        ;
        this.element = function() {
            return e
        }
        ;
        this.updateTimeline = function(a) {
            var b = 0;
            if (m) {
                for (; b < m.length && a > m[b].end; )
                    b++;
                b == m.length && b--;
                if (m[b].text)
                    if (a = m[b].text,
                    0 > a.indexOf("://") && (a = l ? l + "/" + a : a),
                    0 < a.indexOf("#xywh"))
                        try {
                            var e = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(a)
                              , f = e[1];
                            d("#" + j, {
                                "background-image": f,
                                "background-position": -1 * e[2] + "px " + -1 * e[3] + "px",
                                width: e[4],
                                height: e[5]
                            })
                        } catch (g) {
                            c("Could not parse thumbnail")
                        }
                    else
                        f = new Image,
                        f.addEventListener("load", k, !1),
                        f.src = a
            }
        }
        ;
        e = document.createElement("div");
        e.id = j
    }
}
)(jwplayer.html5);
(function(g) {
    var h = g.utils
      , f = g.events
      , d = f.state;
    g.html5.video = function(a) {
        function b(a, b) {
            F && O.sendEvent(a, b)
        }
        function c() {}
        function g() {
            F && (E == d.PLAYING && !A) && (x = Number(s.currentTime.toFixed(1)),
            b(f.JWPLAYER_MEDIA_TIME, {
                position: x,
                duration: u
            }))
        }
        function e(a) {
            F && (v || (v = !0,
            C || (C = !0,
            b(f.JWPLAYER_MEDIA_BUFFER_FULL))),
            "loadedmetadata" == a.type && (s.muted && (s.muted = !1,
            s.muted = !0),
            b(f.JWPLAYER_MEDIA_META, {
                duration: s.duration,
                height: s.videoHeight,
                width: s.videoWidth
            })))
        }
        function m(a) {
            F && !A && (s.paused ? s.currentTime == s.duration && 3 < s.duration ? t() : $() : (!h.isFF() || !("play" == a.type && E == d.BUFFERING)) && q(d.PLAYING))
        }
        function l() {
            F && (A || q(d.BUFFERING))
        }
        function j(a) {
            var b;
            if ("array" == h.typeOf(a) && 0 < a.length) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = a[c]
                      , e = {};
                    e.label = d.label && d.label ? d.label ? d.label : 0 : c;
                    b[c] = e
                }
            }
            return b
        }
        function r() {
            C = v = !1;
            w = M[U];
            q(d.BUFFERING);
            s.src = w.file;
            s.load();
            B = setInterval(n, 100);
            if ((h.isIPod() || h.isAndroid(2.3)) && !C)
                C = !0,
                b(f.JWPLAYER_MEDIA_BUFFER_FULL)
        }
        function q(a) {
            if (!(a == d.PAUSED && E == d.IDLE) && !A && E != a) {
                var c = E;
                E = a;
                b(f.JWPLAYER_PLAYER_STATE, {
                    oldstate: c,
                    newstate: a
                })
            }
        }
        function n() {
            if (F) {
                var a;
                a = 0 == s.buffered.length || 0 == s.duration ? 0 : s.buffered.end(s.buffered.length - 1) / s.duration;
                a != J && (J = a,
                b(f.JWPLAYER_MEDIA_BUFFER, {
                    bufferPercent: Math.round(100 * J)
                }));
                1 <= a && clearInterval(B)
            }
        }
        function t() {
            E != d.IDLE && (U = -1,
            b(f.JWPLAYER_MEDIA_BEFORECOMPLETE),
            ca = !0,
            F && (q(d.IDLE),
            b(f.JWPLAYER_MEDIA_COMPLETE),
            ca = !1))
        }
        var y = h.isIE(), p = {
            abort: c,
            canplay: e,
            canplaythrough: c,
            durationchange: function() {
                if (F) {
                    var a = Number(s.duration.toFixed(1));
                    u != a && (u = a);
                    V && (0 < D && a > D) && ka(D);
                    g()
                }
            },
            emptied: c,
            ended: function() {
                F && t()
            },
            error: function() {
                F && (h.log("Error playing media: %o", s.error),
                O.sendEvent(f.JWPLAYER_MEDIA_ERROR, {
                    message: "Error loading media: File could not be played"
                }),
                q(d.IDLE))
            },
            loadeddata: c,
            loadedmetadata: e,
            loadstart: c,
            pause: m,
            play: m,
            playing: m,
            progress: function() {
                v && (0 < D && !V) && (y ? setTimeout(ka, 200, D) : ka(D))
            },
            ratechange: c,
            readystatechange: c,
            seeked: function() {
                A || (b(f.JWPLAYER_MEDIA_SEEK, {
                    position: x,
                    offset: s.currentTime
                }),
                E != d.PAUSED && q(d.PLAYING))
            },
            seeking: y ? l : c,
            stalled: c,
            suspend: c,
            timeupdate: g,
            volumechange: function() {
                b(f.JWPLAYER_MEDIA_VOLUME, {
                    volume: Math.round(100 * s.volume)
                });
                b(f.JWPLAYER_MEDIA_MUTE, {
                    mute: s.muted
                })
            },
            waiting: l
        }, z, w, s, u, x, v, C, D, A, E = d.IDLE, I, B = -1, J = -1, O = new f.eventdispatcher, F = !1, M, U = -1, V = h.isAndroid(), N = this, ca = !1;
        h.extend(N, O);
        N.load = function(a) {
            if (F) {
                z = a;
                D = 0;
                u = a.duration ? a.duration : -1;
                x = 0;
                M = z.sources;
                0 > U && (U = 0);
                for (a = 0; a < M.length; a++)
                    if (M[a]["default"]) {
                        U = a;
                        break
                    }
                var b = h.getCookies().qualityLabel;
                if (b)
                    for (a = 0; a < M.length; a++)
                        if (M[a].label == b) {
                            U = a;
                            break
                        }
                (a = j(M)) && O.sendEvent(f.JWPLAYER_MEDIA_LEVELS, {
                    levels: a,
                    currentQuality: U
                });
                r()
            }
        }
        ;
        N.stop = function() {
            F && (s.removeAttribute("src"),
            y || s.load(),
            U = -1,
            clearInterval(B),
            q(d.IDLE))
        }
        ;
        N.play = function() {
            F && !A && s.play()
        }
        ;
        var $ = N.pause = function() {
            F && (s.pause(),
            q(d.PAUSED))
        }
        ;
        N.seekDrag = function(a) {
            F && ((A = a) ? s.pause() : s.play())
        }
        ;
        var ka = N.seek = function(a) {
            F && (v ? (D = 0,
            s.currentTime = a) : D = a)
        }
          , Ma = N.volume = function(a) {
            h.exists(a) && (s.volume = Math.min(Math.max(0, a / 100), 1),
            I = 100 * s.volume)
        }
        ;
        N.mute = function(a) {
            h.exists(a) || (a = !s.muted);
            a ? (I = 100 * s.volume,
            s.muted = !0) : (Ma(I),
            s.muted = !1)
        }
        ;
        N.detachMedia = function() {
            F = !1;
            return s
        }
        ;
        N.attachMedia = function(a) {
            F = !0;
            a || (v = !1);
            ca && (q(d.IDLE),
            b(f.JWPLAYER_MEDIA_COMPLETE),
            ca = !1)
        }
        ;
        N.getTag = function() {
            return s
        }
        ;
        N.audioMode = function() {
            if (!M)
                return !1;
            var a = M[0].type;
            return "aac" == a || "mp3" == a || "vorbis" == a
        }
        ;
        N.setCurrentQuality = function(a) {
            U != a && (a = parseInt(a),
            0 <= a && (M && M.length > a) && (U = a,
            h.saveCookie("qualityLabel", M[a].label),
            b(f.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                currentQuality: a,
                levels: j(M)
            }),
            a = s.currentTime,
            r(),
            N.seek(a)))
        }
        ;
        N.getCurrentQuality = function() {
            return U
        }
        ;
        N.getQualityLevels = function() {
            return j(M)
        }
        ;
        s = a;
        for (var Ea in p)
            s.addEventListener(Ea, p[Ea], !1);
        s.controls = !0;
        s.controls = !1;
        s.setAttribute("x-webkit-airplay", "allow");
        F = !0
    }
}
)(jwplayer);
(function(g) {
    var h = jwplayer.utils
      , f = jwplayer.events
      , d = f.state
      , a = h.css
      , b = h.isMobile()
      , c = h.isIPad()
      , k = h.isIPod()
      , e = h.isAndroid()
      , m = h.isIOS()
      , l = document
      , j = "jwmain"
      , r = "jwvideo"
      , q = "jwplaylistcontainer"
      , n = !0
      , t = !1
      , y = "hidden"
      , p = "none"
      , z = "block";
    g.view = function(w, s) {
        function u(a) {
            a && (a.element().addEventListener("mousemove", C, t),
            a.element().addEventListener("mouseout", D, t))
        }
        function x(a, b) {
            var c = l.createElement(a);
            b && (c.className = b);
            return c
        }
        function v() {
            clearTimeout(ma);
            if (R.jwGetState() == d.PLAYING || R.jwGetState() == d.PAUSED)
                $(),
                na || (ma = setTimeout(A, Qa))
        }
        function C() {
            clearTimeout(ma);
            na = n
        }
        function D() {
            na = t
        }
        function A() {
            R.jwGetState() != d.BUFFERING && (Q && (!P && !Y) && Q.hide(),
            H && (!oa && !Y) && H.hide(),
            V());
            clearTimeout(ma);
            ma = 0
        }
        function E(a) {
            ra.sendEvent(a.type, a)
        }
        function I(b, c) {
            h.exists(b) && h.exists(c) && (L.width = b,
            L.height = c);
            W.style.width = isNaN(b) ? b : b + "px";
            W.style.height = isNaN(c) ? c : c + "px";
            T && T.redraw();
            Q && Q.redraw();
            G && (G.offset(Q && 0 <= G.position().indexOf("bottom") ? Q.height() + Q.margin() : 0),
            setTimeout(function() {
                H && H.offset("top-left" == G.position() ? G.element().clientWidth + G.margin() : 0)
            }, 500));
            var d = L.playlistsize
              , e = L.playlistposition;
            if (ya && d && ("right" == e || "bottom" == e)) {
                ya.redraw();
                var g = {
                    display: z
                }
                  , k = {};
                g[e] = 0;
                k[e] = d;
                "right" == e ? g.width = d : g.height = d;
                a(pa(q), g);
                a(pa(j), k)
            }
            B(c);
            J();
            ra.sendEvent(f.JWPLAYER_RESIZE)
        }
        function B(a) {
            P = (!b || Y) && 40 >= a && 0 > a.toString().indexOf("%");
            Q && (P ? (Q.audioMode(n),
            $(),
            T.hidePreview(n),
            ca(),
            ka(t)) : (Q.audioMode(t),
            Oa(R.jwGetState())));
            G && P && V();
            W.style.backgroundColor = P ? "transparent" : "#000"
        }
        function J() {
            X && h.stretch(L.stretching, X, fa.clientWidth, fa.clientHeight, X.videoWidth, X.videoHeight)
        }
        function O(a) {
            if (L.fullscreen)
                switch (a.keyCode) {
                case 27:
                    la(t)
                }
        }
        function F(a) {
            m || (a ? (W.className += " jwfullscreen",
            l.getElementsByTagName("body")[0].style["overflow-y"] = y) : (W.className = W.className.replace(/\s+jwfullscreen/, ""),
            l.getElementsByTagName("body")[0].style["overflow-y"] = ""))
        }
        function M() {
            var a;
            a: {
                a = [l.mozFullScreenElement, l.webkitCurrentFullScreenElement, X.webkitDisplayingFullscreen];
                for (var b = 0; b < a.length; b++)
                    if (a[b] && (!a[b].id || a[b].id == R.id)) {
                        a = n;
                        break a
                    }
                a = t
            }
            L.fullscreen != a && la(a)
        }
        function U() {
            H && (!P && (!b || oa)) && H.show()
        }
        function V() {
            G && (!Y || P) && G.hide(P)
        }
        function N() {
            T && L.controls && !P && (!k || R.jwGetState() == d.IDLE) && T.show();
            if (b && !Y && (e && (da.style.display = z),
            !b || !L.fullscreen))
                X.controls = !1
        }
        function ca() {
            T && (b && !Y && (e && L.controls && (da.style.display = p),
            X.controls = L.controls),
            T.hide())
        }
        function $() {
            if (L.controls || P)
                Q && Q.show(),
                U();
            G && !P && G.show()
        }
        function ka(b) {
            b = b && !P;
            a(pa(r), {
                visibility: b ? "visible" : y,
                opacity: b ? 1 : 0
            })
        }
        function Ma() {
            oa = n;
            la(!1);
            L.controls && U()
        }
        function Ea() {}
        function Na(a) {
            oa = t;
            clearTimeout(ha);
            ha = setTimeout(function() {
                Oa(a.newstate)
            }, 100)
        }
        function Oa(a) {
            switch (a) {
            case d.PLAYING:
                !L.getVideo().audioMode() || b ? (ka(n),
                J(),
                T.hidePreview(n),
                b && (!c || !Y) && ca()) : (ka(t),
                T.hidePreview(P));
                v();
                break;
            case d.IDLE:
                ka(t);
                A();
                P || (T.hidePreview(t),
                N(),
                ba.hide || G && !P && G.show());
                break;
            case d.BUFFERING:
                N();
                b ? ka(n) : $();
                break;
            case d.PAUSED:
                N(),
                (!b || Y) && $()
            }
        }
        function pa(a) {
            return "#" + R.id + (a ? " ." + a : "")
        }
        function ua(b, c) {
            a(b, {
                display: c ? z : p
            })
        }
        var R = w, L = s, W, wa, da, xa, ma = 0, Qa = 2E3, X, fa, Ca, Q, T, H, G, ba = h.extend({}, L.componentConfig("logo")), aa, ya, P, Y = L.mobilecontrols, K = t, oa, S, Z, na = t, ra = new f.eventdispatcher;
        h.extend(this, ra);
        this.getCurrentCaptions = function() {
            return aa.getCurrentCaptions()
        }
        ;
        this.setCurrentCaptions = function(a) {
            aa.setCurrentCaptions(a)
        }
        ;
        this.getCaptionsList = function() {
            return aa.getCaptionsList()
        }
        ;
        this.setup = function(a) {
            if (!K) {
                R.skin = a;
                wa = x("span", j);
                fa = x("span", r);
                X = L.getVideo().getTag();
                fa.appendChild(X);
                da = x("span", "jwcontrols");
                Ca = x("span", "jwinstream");
                xa = x("span", q);
                a = L.height;
                var c = L.componentConfig("controlbar")
                  , e = L.componentConfig("display");
                B(a);
                aa = new g.captions(R,L.captions);
                aa.addEventListener(f.JWPLAYER_CAPTIONS_LIST, E);
                aa.addEventListener(f.JWPLAYER_CAPTIONS_CHANGED, E);
                da.appendChild(aa.element());
                T = new g.display(R,e);
                T.addEventListener(f.JWPLAYER_DISPLAY_CLICK, E);
                P && T.hidePreview(n);
                da.appendChild(T.element());
                G = new g.logo(R,ba);
                da.appendChild(G.element());
                H = new g.dock(R,L.componentConfig("dock"));
                da.appendChild(H.element());
                S = R.edition ? new g.rightclick(R,{
                    abouttext: L.abouttext,
                    aboutlink: L.aboutlink
                }) : new g.rightclick(R,{});
                L.playlistsize && (L.playlistposition && L.playlistposition != p) && (ya = new g.playlistcomponent(R,{}),
                xa.appendChild(ya.element()));
                if (!b || Y)
                    Q = new g.controlbar(R,c),
                    da.appendChild(Q.element()),
                    Y && $();
                setTimeout(function() {
                    I(L.width, L.height)
                }, 0);
                wa.appendChild(fa);
                wa.appendChild(da);
                wa.appendChild(Ca);
                a = x("div");
                a.style.position = "absolute";
                a.style.width = "100%";
                a.style.height = "100%";
                a.appendChild(wa);
                a.appendChild(xa);
                W.appendChild(a);
                l.addEventListener("webkitfullscreenchange", M, t);
                X.addEventListener("webkitbeginfullscreen", M, t);
                X.addEventListener("webkitendfullscreen", M, t);
                l.addEventListener("mozfullscreenchange", M, t);
                l.addEventListener("keydown", O, t);
                R.jwAddEventListener(f.JWPLAYER_PLAYER_READY, Ea);
                R.jwAddEventListener(f.JWPLAYER_PLAYER_STATE, Na);
                R.jwAddEventListener(f.JWPLAYER_PLAYLIST_COMPLETE, Ma);
                Na({
                    newstate: d.IDLE
                });
                da.addEventListener("mouseout", function() {
                    clearTimeout(ma);
                    ma = setTimeout(A, 10)
                }, t);
                da.addEventListener("mousemove", v, t);
                h.isIE() && (fa.addEventListener("mousemove", v, t),
                fa.addEventListener("click", T.clickHandler));
                u(Q);
                u(H);
                u(G)
            }
        }
        ;
        var la = this.fullscreen = function(a) {
            h.exists(a) || (a = !L.fullscreen);
            a ? L.fullscreen || (F(n),
            W.requestFullScreen ? W.requestFullScreen() : W.mozRequestFullScreen ? W.mozRequestFullScreen() : W.webkitRequestFullScreen && W.webkitRequestFullScreen(),
            L.setFullscreen(n)) : (F(t),
            L.fullscreen && (L.setFullscreen(t),
            l.cancelFullScreen ? l.cancelFullScreen() : l.mozCancelFullScreen ? l.mozCancelFullScreen() : l.webkitCancelFullScreen ? l.webkitCancelFullScreen() : X.webkitExitFullScreen && X.webkitExitFullScreen()),
            c && R.jwGetState() == d.PAUSED && setTimeout(N, 500));
            Q && Q.redraw();
            T && T.redraw();
            H && H.redraw();
            J();
            L.fullscreen ? Z = setInterval(J, 200) : clearInterval(Z);
            setTimeout(function() {
                var a = h.bounds(wa);
                L.width = a.width;
                L.height = a.height;
                ra.sendEvent(f.JWPLAYER_RESIZE)
            }, 0)
        }
        ;
        this.resize = I;
        this.resizeMedia = J;
        var Ra = this.completeSetup = function() {
            a(pa(), {
                opacity: 1
            })
        }
        , ha;
        this.setupInstream = function(a, b) {
            ua(pa("jwinstream"), n);
            ua(pa("jwcontrols"), t);
            Ca.appendChild(a);
            _instreamVideo = b;
            Na({
                newstate: d.PLAYING
            })
        }
        ;
        this.destroyInstream = function() {
            ua(pa("jwinstream"), t);
            ua(pa("jwcontrols"), n);
            Ca.innerHTML = "";
            _instreamVideo = null
        }
        ;
        this.setupError = function(a) {
            K = !0;
            jwplayer.embed.errorScreen(W, a);
            Ra()
        }
        ;
        this.addButton = function(a, b, c, d) {
            H && H.addButton(a, b, c, d)
        }
        ;
        this.removeButton = function(a) {
            H && H.removeButton(a)
        }
        ;
        this.setControls = function(a) {
            var b = L.controls;
            a = a ? n : t;
            L.controls = a;
            a != b && (a ? N() : (Q && (!P && !Y) && Q.hide(),
            H && (!oa && !Y) && H.hide(),
            V(),
            ca()),
            ra.sendEvent(f.JWPLAYER_CONTROLS, {
                controls: a
            }))
        }
        ;
        this.forceState = function(a) {
            T.forceState(a)
        }
        ;
        this.releaseState = function() {
            T.releaseState(R.jwGetState())
        }
        ;
        this.getSafeRegion = function() {
            var a = L.controls
              , b = h.bounds(wa)
              , c = b.top
              , d = h.bounds(Q ? Q.element() : null)
              , e = 0 < H.numButtons()
              , f = h.bounds(H.element())
              , g = h.bounds(G.element())
              , j = 0 == G.position().indexOf("top")
              , e = Math.max(e ? f.top + f.height - c : 0, j ? g.top + g.height - c : 0)
              , f = b.width
              , b = d.height ? (j ? d.top : g.top) - e - c : b.height - e;
            return {
                x: 0,
                y: a ? e : 0,
                width: a ? f : 0,
                height: a ? b : 0
            }
        }
        ;
        this.destroy = function() {
            l.removeEventListener("webkitfullscreenchange", M, t);
            l.removeEventListener("mozfullscreenchange", M, t);
            X.removeEventListener("webkitbeginfullscreen", M, t);
            X.removeEventListener("webkitendfullscreen", M, t);
            l.removeEventListener("keydown", O, t);
            S && S.destroy()
        }
        ;
        W = x("div", "jwplayer");
        W.id = R.id;
        I(L.width, L.height);
        var Ha = document.getElementById(R.id);
        Ha.parentNode.replaceChild(W, Ha)
    }
    ;
    a(".jwplayer", {
        position: "relative",
        opacity: 0,
        "min-height": h.isMobile() ? 200 : 0,
        "-webkit-transition": "opacity .5s ease",
        "-moz-transition": "opacity .5s ease",
        "-o-transition": "opacity .5s ease"
    });
    a("." + j, {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        "-webkit-transition": "opacity .5s ease",
        "-moz-transition": "opacity .5s ease",
        "-o-transition": "opacity .5s ease"
    });
    a("." + r + " ,.jwcontrols", {
        position: "absolute",
        height: "100%",
        width: "100%",
        "-webkit-transition": "opacity .5s ease",
        "-moz-transition": "opacity .5s ease",
        "-o-transition": "opacity .5s ease"
    });
    a("." + r, {
        overflow: y,
        visibility: y,
        opacity: 0,
        cursor: "pointer"
    });
    a("." + r + " video", {
        background: "transparent",
        width: "100%",
        height: "100%"
    });
    a("." + q, {
        position: "absolute",
        height: "100%",
        width: "100%",
        display: p
    });
    a(".jwinstream", {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "none"
    });
    a(".jwplayer.jwfullscreen", {
        width: "100%",
        height: "100%",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        "z-index": 1E3,
        position: "fixed"
    }, n);
    a(".jwplayer.jwfullscreen ." + j, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, n);
    a(".jwplayer.jwfullscreen ." + q, {
        display: p
    }, n);
    a(".jwplayer .jwuniform", {
        "background-size": "contain !important"
    });
    a(".jwplayer .jwfill", {
        "background-size": "cover !important",
        "background-position": "center"
    });
    a(".jwplayer .jwexactfit", {
        "background-size": "100% 100% !important"
    })
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer.utils.extend, f = g.logo, d;
    d = function(a, b) {
        "free" == a.edition() ? b = null : (f.defaults.file = "",
        f.defaults.prefix = "");
        h(this, new f(a,b))
    }
    ;
    d.defaults = {
        prefix: "",
        file: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAATCAYAAACa0IPnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUVGQjQ0N0ZEOThDMTFFMUFDMUZCMzY5RkYyQkY5NDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUVGQjQ0ODBEOThDMTFFMUFDMUZCMzY5RkYyQkY5NDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RUZCNDQ3REQ5OEMxMUUxQUMxRkIzNjlGRjJCRjk0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RUZCNDQ3RUQ5OEMxMUUxQUMxRkIzNjlGRjJCRjk0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5HQqEAAArQSURBVHja3JkJUNT3Fcf3AARBQVFR8IjGCw1aT9R6UKVe0TgYOxNHG5tqD+o48ajVia21mdaJ49FoCloNKho0FkbjQRwRvAUVFUO8gCDKIbccciyw7Pbztr+1G2Sp0yKj/c28+f/3d733e993/f6r1TTSwsLCtDwcIbPq0kM6qErTeHOCau2MtVLPWpv9rE2n1pps+FQ3ssfPoR5QNHRN8+o3bSNn/Z/awoULn707NDZBr9d7ms3m3/FqqKurO8rv4Vqt1l+n031B35kG04OZ68f4Td4/bzAWxNjk+vr6Sw4ODpENgNXRP54956pDuog87JPCMxtKgO5Y0K6t/dDJyWlQSUlJbbt27V4H0PpB05UBOkOHoMfNtXmjoBUUFHTu0qXLcl5rsrOzEzw8PMagrPcNBoOHs7NzIv1P1dS2gPJXFN0KcB86OjoKqAarhzF/GfPHsV8B+2j8/f2f8bh69aq2b9++E9n3l/K7pqYmi32c2OM9+Q2gyRiLyHD26dOnJvapq6iocOzYseMrj1hhYeEPkHOz9XdZWVmau7v7ywWttLRUD2hVAGIsKioq43dKp06dzCaTaSSK80bR4g2aqqqqka1bt7aGv3bQaJR+Vn5UVlb2xbt64kk1t2/fTtq/f79x7Nix/2bs4KARENhXk5ubmxwREfE5wDjDtzvzJnp5eQ3CEDYCZgB71kMayCzPV72Vl5c7Ir8BoxMv07i4uLyH3HF2Qn/zgEYoMgth7Zpu3brpk5OTLxOiCtzc3LwBozcCWEDDM2aj/Hr6Cl1dXTvhEXMA0QIaAI/FuroQ0tLbtGmTcvjwYVODECx8TAqM/MTExHCV09q0b9/+CYf+LXsNKS4u9mBvC1gC9OsAWqtWrSznkjNawlHbtu9ifDsA79JLA00p0srU7dSpUwljxoxJx8O8UKQ/yj5FvxFQZgNc7fHjx0MXLFjwMZ4xmjEpLkwoeBjC6/HUxGvXruVMnz79+4wVAMzX4GD1J06cKFdDJVlZWRUc0BHgawBdC1+tzLPOVy0AWgR1U+Facu1nUB30J2UAYVCGDdvxas1B6KTq+wCaAXlCD6DdkFW5A6CV0FdQMfRTqAL6RKKgXaWqs8lTNWfeQ6EJcr6XApowE+WgNGHumJ+fX4anpdI3Bqv/IYp0wxPeYsiT0HY7Ly8vwmg0fshYV0DsQ38W7wNlD7wv/vr16xU2yn4ONHJmN57vKnn8evTo8QHjjjk5OUmZmZkV/fv3t8yjz6T2WUTo3iryIVcpAHtLwUN/R/ivRb5x7DkW626NQSxXLH34/WcMadyDBw8u9+rVy52+cNa9TUQph0yMTWDPQEL6CsYiOdsQwvXPONuP6NNAPRivevz4cXjXrl3tgmY9lw1o8tuPtf9gjyAFfPN7GgewgAZjS/n66NGjC3369HmH0OVPUeFOPpuBp2lQ7FkKjDxqjRsUFj8mns9AETGenp5+1dXV+Sjj7vnz5032DiZ8ePrS9YUKuc7SBw/Jc5/ideUzZszQSR+kleeuXbsyeO66efNmJgCVwstr7dq1wciznFC94+LFi1/PmTMngEgxDz5/FE9EvoEUB2Jwj44ePZq4YsWK1YzNio+PPxIeHh4LMPWTJk0aPHfu3F/z/jFjkZzRRfHtgfHE79y5M4xQryNNFC9evNiuUq3nsgVNtUB0c5ozLuA9tdlBE8aS06w55MKFC3Hjx4/Pw4IHECJ9EP5tBNMlJCREEdoMa9asOenn5zcZgUZw6GKs31Uqzxs3btybNWuW3RAifPDktEOHDn3VoUMHN3KY4datW/koNxVLP8P+dYRYq+VawuSxY8cSV61a5TRv3rwJyOCPnOJ+bdjP6eHDhx327dv3JTwlJ7ZHljms2YM8k0VejODC0KFDs8TipbDp169fdWhoaFsA1sHTgPwSFXwYe4v3GuEH4GkHDhwIEWNQOitbtmyZpqnw2NDTbNoogLvK3iG8/0VV2+b/CjSsVsdhTIqpWaxaPA3m4mkaCoUcrDiNfl9Cwx845JtUlVmExmTWmqKiohKZX4YnilA+zDOjhGunT58u2rBhg13QxCI5wOODBw9+qu40NaIUuZ6xr1EldgtJFSmKP3fu3Bq6l0nOI/xm4hEFeJtWGZoeb8/hSnGYPBpMhbqANccZn838ciLG11OnTu3MXu6ETm337t3Fot4RJ5eCh/U6gDYQAnszbhS+ACyFVizylL6IUpvwNGvzgD6CfgOFSpiGctXZ6/4jaHfu3JGd+yHsaN4jBw4cWMYBMdLWLuSAUooLy4WYsXrC3A0UHIiXTVVAxhEaq0RA7iIZHPTGgAEDJsrXCxRZInctWdeUN8tavMDIvLymlCCEodRKzuR9JQb0ZOPGjX+LjIxMwlAMVKefIZe77MteZjx/H6C9TygTj1lNBdeTXHZl8+bNsVTEXsOHD68W3qz7Eg9KByA9Stb7+Pi44+FFAJSEsU2UOejCGBgYaJD3F2lWY2wCNOtXE7kmiQGuwdCToGgMRO7BUp2Xqy9FAqTo59mXFgcO34lccBJFdEPJk9PS0jaQi4JRpAOhKoswdNOqOKrA2JEjR/6Kd1fp43Anly5davHOkJCQQgC/wJiApgHA7+R+NnPmzKYqLK0CRNewUGlQQksu06FYM4pvTxg2c7hKwuP19evX38ODpkFdbEMuIfVbDho3atQo8aLljBs5zzXOV0RuNuDZ1ymmek6bNq0rhc4ecnMF8g8BtJUZGRm/J3JkYSSOqmrVWUPei4LWRHi014YosjQAFCMuQ+4HqnK1fuar1M2fP7+cA0ThUUVY1E9QznXy1gI8JTcpKSn6yZMn+dYQtXfv3m8AOROhTDyzr1y5Em8NXSTqOiq5JKxaPM+M532ze/fuR9bxhqRKYpOyyHp786zjzDdC+ujo6Jz09PSrXMq7E86PoxzJD4sB0bIXipbQrrl06VLVmTNn9tIvHqUlTGbHxMQcVrJWbNq0KQQA4/HSsUSL80FBQRfJb3vg5U0LZI6JtWYb/pqmZLQlSSkYmO5F5zdGrO8M9QOTadB8RXOhRQ6pqamV69at28ahKkeMGDEM6+tAnio8cuRIHMXBEWuSFMuhv2rr1q2HsMxcFHdv8ODBRbbWxyX8W8DfL6fGyk8yv8aeWbHeTD66hVfHYOXnevfubdcE8fAYhP0OA7qHIeSmpKRsoHpbSG71Jv9Ub9++PdLX1/cNPND3/v37xRRMIqt5yZIll/G4NK4Qg8i/9ykmErds2WLZkwIpgfD5EZFkVkBAwDDCpysFR0lsbGwCUeME6zV3795NwyDiyIPnAbF2ypQpL/a1WKs1SSh3+JermZrx3m7Jt1qbDm+5y8gFXhUC6XYugl5QF+Wy2Q0qH0Gwu9ojw3Y9Cn9uI6y8A483JdIynmlPUub1kks+lMO8Yn5LwTJQ5QQpVm5B7kq2ZOZYvn8CkjPhORXL9QwLC1sRHBy8o5G95XL+hiqC5JL+kPV5asxdXbClSMik/4UA2LZt20iuF7/AO11QcrN97ccGngPtpTa8qiW/JA0SEMgHQYS41XjJXfLVRGTIbwnmFERuygH0zfwXjXxtqndoKS225DdDrDEKsDrC0wOgSgipuwwGQ35L8YdXhaoAm62R375XdraUIlsMtIiIiNCeNDysND4+/g6X57/Dv1DzGjfbSlSr+f9sfSUlqW98+U193H0d2z8FGACF4VIWnpOTrQAAAABJRU5ErkJggg%3D%3D"
    };
    h(d.defaults, f.defaults);
    g.logo = d
}
)(jwplayer.html5);
(function(g) {
    var h = g.model;
    g.model = function(f, d) {
        var a = new jwplayer.utils.key(f.key)
          , b = new h(f,d)
          , c = b.componentConfig;
        b.edition = function() {
            return a.edition()
        }
        ;
        b.componentConfig = function(a) {
            return "logo" == a ? b.logo : c(a)
        }
        ;
        return b
    }
}
)(jwplayer.html5);
(function(g) {
    g.player.prototype.edition = function() {
        return this._model.edition()
    }
}
)(jwplayer.html5);
(function(g) {
    var h = jwplayer.utils.extend
      , f = g.rightclick;
    g.rightclick = function(d, a) {
        if ("free" == d.edition())
            a.aboutlink = "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + g.version + "\x26m\x3dh\x26e\x3df",
            delete a.abouttext;
        else {
            if (!a.aboutlink) {
                var b = "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + g.version + "\x26m\x3dh\x26e\x3d"
                  , c = d.edition();
                a.aboutlink = b + ("pro" == c ? "p" : "premium" == c ? "r" : "ads" == c ? "a" : "f")
            }
            a.abouttext ? a.abouttext = "About " + a.abouttext + " ..." : (b = d.edition(),
            b = b.charAt(0).toUpperCase() + b.substr(1),
            a.abouttext = "About JW Player " + g.version + " (" + b + " edition)")
        }
        h(this, new f(d,a))
    }
}
)(jwplayer.html5);
(function(g) {
    var h = g.view;
    g.view = function(f, d) {
        var a = new h(f,d);
        "invalid" == d.edition() && a.setupError("Error setting up player: Invalid license key");
        return a
    }
}
)(jwplayer.html5);
