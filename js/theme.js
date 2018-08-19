! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return pe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Ce.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }

    function i(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return pe.each(e.match(Ae) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), pe.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(qe, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : He.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {}
                pe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (je(e)) {
            var i, o, a = pe.expando,
                s = e.nodeType,
                u = s ? pe.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = ne.pop() || pe.guid++ : a), u[l] || (u[l] = s ? {} : {
                toJSON: pe.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = pe.extend(u[l], t) : u[l].data = pe.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[pe.camelCase(t)]) : i = o, i
        }
    }

    function d(e, t, n) {
        if (je(e)) {
            var r, i, o = e.nodeType,
                a = o ? pe.cache : e,
                s = o ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : (t = pe.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !l(r) : !pe.isEmptyObject(r)) return
                }(n || (delete a[s].data, l(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function f(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || "px" !== l && +u) && _e.exec(pe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, pe.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function p(e) {
        var t = $e.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, r, i = 0,
            o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"))
    }

    function g(e) {
        Pe.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, n, r, i) {
        for (var o, a, s, u, l, c, d, f = e.length, v = p(t), y = [], x = 0; f > x; x++)
            if ((a = e[x]) || 0 === a)
                if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a);
                else if (Xe.test(a)) {
            for (u = u || v.appendChild(t.createElement("div")), l = (Be.exec(a) || ["", ""])[1].toLowerCase(), d = ze[l] || ze._default, u.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], o = d[0]; o--;) u = u.lastChild;
            if (!de.leadingWhitespace && Ie.test(a) && y.push(t.createTextNode(Ie.exec(a)[0])), !de.tbody)
                for (a = "table" !== l || Ue.test(a) ? "<table>" !== d[1] || Ue.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length; o--;) pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (pe.merge(y, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = v.lastChild
        } else y.push(t.createTextNode(a));
        for (u && v.removeChild(u), de.appendChecked || pe.grep(h(y, "input"), g), x = 0; a = y[x++];)
            if (r && pe.inArray(a, r) > -1) i && i.push(a);
            else if (s = pe.contains(a.ownerDocument, a), u = h(v.appendChild(a), "script"), s && m(u), n)
            for (o = 0; a = u[o++];) We.test(a.type || "") && n.push(a);
        return u = null, v
    }

    function y() {
        return !0
    }

    function x() {
        return !1
    }

    function b() {
        try {
            return re.activeElement
        } catch (e) {}
    }

    function w(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) w(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = x;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return pe().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, i, r, n)
        })
    }

    function T(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function C(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }

    function E(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function N(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, r, i, o = pe._data(e),
                a = pe._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) pe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }

    function k(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                i = pe._data(t);
                for (r in i.events) pe.removeEvent(t, r, i.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Pe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function S(e, t, n, r) {
        t = oe.apply([], t);
        var i, o, a, s, u, l, c = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            m = pe.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !de.checkClone && nt.test(p)) return e.each(function(i) {
            var o = e.eq(i);
            m && (t[0] = p.call(this, i, o.html())), S(o, t, n, r)
        });
        if (d && (l = v(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
            for (s = pe.map(h(l, "script"), C), a = s.length; d > c; c++) o = l, c !== f && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[c], o, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, pe.map(s, E), c = 0; a > c; c++) o = s[c], We.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(u, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(it, "")));
            l = i = null
        }
        return e
    }

    function A(e, t, n) {
        for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || pe.cleanData(h(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && m(h(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function D(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            r = pe.css(n[0], "display");
        return n.detach(), r
    }

    function L(e) {
        var t = re,
            n = ut[e];
        return n || (n = D(e, t), "none" !== n && n || (st = (st || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (st[0].contentWindow || st[0].contentDocument).document, t.write(), t.close(), n = D(e, t), st.detach()), ut[e] = n), n
    }

    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function H(e) {
        if (e in Ct) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--;)
            if ((e = Tt[n] + t) in Ct) return e
    }

    function q(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Oe(r) && (o[a] = pe._data(r, "olddisplay", L(r.nodeName)))) : (i = Oe(r), (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function M(e, t, n) {
        var r = xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function _(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += pe.css(e, n + Fe[o], !0, i)), r ? ("content" === n && (a -= pe.css(e, "padding" + Fe[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Fe[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Fe[o], !0, i), "padding" !== n && (a += pe.css(e, "border" + Fe[o] + "Width", !0, i)));
        return a
    }

    function F(t, n, r) {
        var i = !0,
            o = "width" === n ? t.offsetWidth : t.offsetHeight,
            a = pt(t),
            s = de.boxSizing && "border-box" === pe.css(t, "boxSizing", !1, a);
        if (re.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = ht(t, n, a), (0 > o || null == o) && (o = t.style[n]), ct.test(o)) return o;
            i = s && (de.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
        }
        return o + _(t, n, r || (s ? "border" : "content"), i, a) + "px"
    }

    function O(e, t, n, r, i) {
        return new O.prototype.init(e, t, n, r, i)
    }

    function R() {
        return e.setTimeout(function() {
            Et = void 0
        }), Et = pe.now()
    }

    function P(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Fe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function B(e, t, n) {
        for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function W(e, t, n) {
        var r, i, o, a, s, u, l, c = this,
            d = {},
            f = e.style,
            p = e.nodeType && Oe(e),
            h = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = pe.css(e, "display"), "inline" === ("none" === l ? pe._data(e, "olddisplay") || L(e.nodeName) : l) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || c.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], kt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[r]) continue;
                    p = !0
                }
                d[r] = h && h[r] || pe.style(e, r)
            } else l = void 0;
        if (pe.isEmptyObject(d)) "inline" === ("none" === l ? L(e.nodeName) : l) && (f.display = l);
        else {
            h ? "hidden" in h && (p = h.hidden) : h = pe._data(e, "fxshow", {}), o && (h.hidden = !p), p ? pe(e).show() : c.done(function() {
                pe(e).hide()
            }), c.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in d) pe.style(e, t, d[t])
            });
            for (r in d) a = B(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function I(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = pe.camelCase(n), i = t[r], o = e[n], pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = pe.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function $(e, t, n) {
        var r, i, o = 0,
            a = $.prefilters.length,
            s = pe.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Et || R(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Et || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (I(c, l.opts.specialEasing); a > o; o++)
            if (r = $.prefilters[o].call(l, e, c, l.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)), r;
        return pe.map(c, B, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), pe.fx.timer(pe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function z(e) {
        return pe.attr(e, "class") || ""
    }

    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(Ae) || [];
            if (pe.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function U(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, pe.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === Gt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function V(e, t) {
        var n, r, i = pe.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && pe.extend(!0, e, n), e
    }

    function Y(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function J(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function G(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function Q(e) {
        for (; e && 1 === e.nodeType;) {
            if ("none" === G(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function K(e, t, n, r) {
        var i;
        if (pe.isArray(t)) pe.each(t, function(t, i) {
            n || tn.test(e) ? r(e, i) : K(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== pe.type(t)) r(e, t);
        else
            for (i in t) K(e + "[" + i + "]", t[i], n, r)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        re = e.document,
        ie = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        ue = {},
        le = ue.toString,
        ce = ue.hasOwnProperty,
        de = {},
        fe = "1.12.0",
        pe = function(e, t) {
            return new pe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : ie.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se) return se.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; o > i; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, r) {
            var i, o, a = 0,
                s = [];
            if (n(e))
                for (i = e.length; i > a; a++) null != (o = t(e[a], a, r)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, r)) && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e) ? (n = ie.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || pe.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, d, f, p, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!r && ((t ? t.ownerDocument || t : R) !== L && D(t), t = t || L, H)) {
                if (11 !== m && (d = me.exec(e)))
                    if (i = d[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (h && (a = h.getElementById(i)) && F(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (d[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = d[3]) && x.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(i)), n
                    }
                if (x.qsa && !$[e + " "] && (!q || !q.test(e))) {
                    if (1 !== m) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ve, "\\$&") : t.setAttribute("id", s = O), f = C(e), o = f.length, l = ce.test(s) ? "#" + s : "[id='" + s + "']"; o--;) f[o] = l + " " + c(f[o]);
                        p = f.join(","), h = ge.test(e) && u(t.parentNode) || t
                    }
                    if (p) try {
                        return G.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        s === O && t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[O] = !0, e
        }

        function i(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function l() {}

        function c(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l, c = [P, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[O] || (t[O] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === P && s[1] === o) return c[2] = s[2];
                            if (u[r] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function h(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function m(e, t, n, i, o, a) {
            return i && !i[O] && (i = m(i)), o && !o[O] && (o = m(o, a)), r(function(r, a, s, u) {
                var l, c, d, f = [],
                    m = [],
                    g = a.length,
                    v = r || p(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : h(v, f, e, s, u),
                    x = n ? o || (r ? e : g || i) ? [] : a : y;
                if (n && n(y, x, s, u), i)
                    for (l = h(x, m), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (x[m[c]] = !(y[m[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(d = x[c]) && l.push(y[c] = d);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(d = x[c]) && (l = o ? K(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else x = h(x === a ? x.splice(g, x.length) : x), o ? o(null, a, x, u) : G.apply(a, x)
            })
        }

        function g(e) {
            for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                    return e === t
                }, a, !0), l = d(function(e) {
                    return K(t, e) > -1
                }, a, !0), p = [function(e, n, r) {
                    var i = !o && (r || n !== k) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = b.relative[e[s].type]) p = [d(f(p), n)];
                else {
                    if (n = b.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                        for (r = ++s; i > r && !b.relative[e[r].type]; r++);
                        return m(s > 1 && f(p), s > 1 && c(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, r > s && g(e.slice(s, r)), i > r && g(e = e.slice(r)), i > r && c(e))
                    }
                    p.push(n)
                }
            return f(p)
        }

        function v(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, d, f, p = 0,
                        m = "0",
                        g = r && [],
                        v = [],
                        y = k,
                        x = r || o && b.find.TAG("*", l),
                        w = P += null == y ? 1 : Math.random() || .1,
                        T = x.length;
                    for (l && (k = a === L || a || l); m !== T && null != (c = x[m]); m++) {
                        if (o && c) {
                            for (d = 0, a || c.ownerDocument === L || (D(c), s = !H); f = e[d++];)
                                if (f(c, a || L, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (P = w)
                        }
                        i && ((c = !f && c) && p--, r && g.push(c))
                    }
                    if (p += m, i && m !== p) {
                        for (d = 0; f = n[d++];) f(g, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; m--;) g[m] || v[m] || (v[m] = Y.call(u));
                            v = h(v)
                        }
                        G.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (P = w, k = y), g
                };
            return i ? r(a) : a
        }
        var y, x, b, w, T, C, E, N, k, S, A, D, L, j, H, q, M, _, F, O = "sizzle" + 1 * new Date,
            R = e.document,
            P = 0,
            B = 0,
            W = n(),
            I = n(),
            $ = n(),
            z = function(e, t) {
                return e === t && (A = !0), 0
            },
            X = 1 << 31,
            U = {}.hasOwnProperty,
            V = [],
            Y = V.pop,
            J = V.push,
            G = V.push,
            Q = V.slice,
            K = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            le = new RegExp(re),
            ce = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            ve = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            xe = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            be = function() {
                D()
            };
        try {
            G.apply(V = Q.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: V.length ? function(e, t) {
                    J.apply(e, Q.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, j = L.documentElement, H = !T(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), x.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = i(function(e) {
                return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = he.test(L.getElementsByClassName), x.getById = i(function(e) {
                return j.appendChild(e).id = O, !L.getElementsByName || !L.getElementsByName(O).length
            }), x.getById ? (b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, b.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete b.find.ID, b.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), b.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = x.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0
            }, M = [], q = [], (x.qsa = he.test(L.querySelectorAll)) && (i(function(e) {
                j.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + O + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || q.push(".#.+[+~]")
            }), i(function(e) {
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (x.matchesSelector = he.test(_ = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), M.push("!=", re)
            }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = he.test(j.compareDocumentPosition), F = t || he.test(j.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, z = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === R && F(R, e) ? -1 : t === L || t.ownerDocument === R && F(R, t) ? 1 : S ? K(S, e) - K(S, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : S ? K(S, e) - K(S, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === R ? -1 : u[r] === R ? 1 : 0
            }, L) : L
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && D(e), n = n.replace(ue, "='$1']"), x.matchesSelector && H && !$[n + " "] && (!M || !M.test(n)) && (!q || !q.test(n))) try {
                var r = _.call(e, n);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, L, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && D(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && D(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : x.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (A = !x.detectDuplicates, S = !x.sortStable && e.slice(0), e.sort(z), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return S = null, e
        }, w = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += w(t);
            return n
        }, b = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            x = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (f = g, d = f[O] || (f[O] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === P && l[1], x = p && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (x = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++x && f === t) {
                                        c[e] = [P, p, x];
                                        break
                                    }
                            } else if (y && (f = t, d = f[O] || (f[O] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === P && l[1], x = p), !1 === x)
                                for (;
                                    (f = ++p && f && f[m] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++x || (y && (d = f[O] || (f[O] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [P, x]), f !== t)););
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[O] ? o(n) : o.length > 1 ? (i = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = K(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(oe, "$1"));
                    return i[O] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ye, xe),
                        function(t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === j
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return pe.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[y] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) b.pseudos[y] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return l.prototype = b.filters = b.pseudos, b.setFilters = new l, C = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = I[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = b.preFilter; s;) {
                (!r || (i = ae.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in b.filter) !(i = de[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
        }, E = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = $[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--;) o = g(t[n]), o[O] ? r.push(o) : i.push(o);
                o = $(e, v(i, r)), o.selector = e
            }
            return o
        }, N = t.select = function(e, t, n, r) {
            var i, o, a, s, l, d = "function" == typeof e && e,
                f = !r && C(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && H && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(ye, xe), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                    if ((l = b.find[s]) && (r = l(a.matches[0].replace(ye, xe), ge.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && c(o))) return G.apply(n, r), n;
                        break
                    }
            }
            return (d || E(e, f))(r, t, !H, n, !t || ge.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = O.split("").sort(z).join("") === O, x.detectDuplicates = !!A, D(), x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains;
    var xe = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && pe(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        be = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        we = pe.expr.match.needsContext,
        Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ce = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (pe.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) pe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ee, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pe.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Ee, "string" == typeof e) {
            if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ne.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Te.test(r[1]) && pe.isPlainObject(t))
                    for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if ((i = re.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2]) return Ee.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = re, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
    }).prototype = pe.fn, Ee = pe(re);
    var ke = /^(?:parents|prev(?:Until|All))/,
        Se = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (pe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return be(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, r) {
            var i = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), this.length > 1 && (Se[e] || (i = pe.uniqueSort(i)), ke.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var Ae = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t, n, r, i, a = [],
            s = [],
            u = -1,
            l = function() {
                for (i = e.once, r = t = !0; s.length; u = -1)
                    for (n = s.shift(); ++u < a.length;) !1 === a[u].apply(n[0], n[1]) && e.stopOnFalse && (u = a.length, n = !1);
                e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
            },
            c = {
                add: function() {
                    return a && (n && !t && (u = a.length - 1, s.push(n)), function t(n) {
                        pe.each(n, function(n, r) {
                            pe.isFunction(r) ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== pe.type(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var n;
                            (n = pe.inArray(t, a, n)) > -1;) a.splice(n, 1), u >= n && u--
                    }), this
                },
                has: function(e) {
                    return e ? pe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return i = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return i = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, pe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pe.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return pe.Deferred(function(n) {
                            pe.each(t, function(t, o) {
                                var a = pe.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, pe.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = ie.call(arguments),
                a = o.length,
                s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : pe.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var De;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (De.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))))
        }
    }), pe.ready.promise = function(t) {
        if (!De)
            if (De = pe.Deferred(), "complete" === re.readyState) e.setTimeout(pe.ready);
            else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else {
            re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && re.documentElement
            } catch (e) {}
            n && n.doScroll && function t() {
                if (!pe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return e.setTimeout(t, 50)
                    }
                    a(), pe.ready()
                }
            }()
        }
        return De.promise(t)
    }, pe.ready.promise();
    var Le;
    for (Le in pe(de)) break;
    de.ownFirst = "0" === Le, de.inlineBlockNeedsLayout = !1, pe(function() {
            var e, t, n, r;
            (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = re.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var je = function(e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        qe = /([A-Z])/g;
    pe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !l(e)
            },
            data: function(e, t, n) {
                return c(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), pe.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)), u(o, r, i[r])));
                        pe._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    pe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    pe.data(this, e, t)
                }) : o ? u(o, e, pe.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    pe.removeData(this, e)
                })
            }
        }), pe.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = pe._queueHooks(e, t),
                    a = function() {
                        pe.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return pe._data(e, n) || pe._data(e, n, {
                    empty: pe.Callbacks("once memory").add(function() {
                        pe._removeData(e, t + "queue"), pe._removeData(e, n)
                    })
                })
            }
        }), pe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = pe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = pe._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        }),
        function() {
            var e;
            de.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, r;
                return n = re.getElementsByTagName("body")[0], n && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
    var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _e = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
        Fe = ["Top", "Right", "Bottom", "Left"],
        Oe = function(e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        },
        Re = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === pe.type(n)) {
                i = !0;
                for (s in n) Re(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, pe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(pe(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Pe = /^(?:checkbox|radio)$/i,
        Be = /<([\w:-]+)/,
        We = /^$|\/(?:java|ecma)script/i,
        Ie = /^\s+/,
        $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = re.createElement("div"),
            t = re.createDocumentFragment(),
            n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando)
    }();
    var ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td;
    var Xe = /<|&#?\w+;/,
        Ue = /<tbody/i;
    ! function() {
        var t, n, r = re.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (de[t] = n in e) || (r.setAttribute(n, "t"), de[t] = !1 === r.attributes[n].expando);
        r = null
    }();
    var Ve = /^(?:input|select|textarea)$/i,
        Ye = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ge = /^(?:focusinfocus|focusoutblur)$/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = pe._data(e);
            if (g) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = pe.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return void 0 === pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(Ae) || [""], s = t.length; s--;) o = Qe.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = pe.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = pe.event.special[p] || {}, d = pe.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && pe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = pe.hasData(e) && pe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(Ae) || [""], l = t.length; l--;)
                    if (s = Qe.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = pe.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || pe.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) pe.event.remove(e, p + t[l], n, r, !0);
                pe.isEmptyObject(c) && (delete g.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || re],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Ge.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : pe.makeArray(n, [t]), l = pe.event.special[p] || {}, i || !l.trigger || !1 !== l.trigger.apply(r, n))) {
                if (!i && !l.noBubble && !pe.isWindow(r)) {
                    for (u = l.delegateType || p, Ge.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || re) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || p, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), (o = a && s[a]) && o.apply && je(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(f.pop(), n)) && je(r) && a && r[p] && !pe.isWindow(r)) {
                    c = r[a], c && (r[a] = null), pe.event.triggered = p;
                    try {
                        r[p]()
                    } catch (e) {}
                    pe.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, r, i, o, a = [],
                s = ie.call(arguments),
                u = (pe._data(this, "events") || {})[e.type] || [],
                l = pe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = pe.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, e.data = o.data, void 0 !== (r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? pe(i, this).index(u) > -1 : pe.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[pe.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Je.test(i) ? this.mouseHooks : Ye.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== b() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === b() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return pe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n))
    }, pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : x) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !pe.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (pe.event.special.submit = {
        setup: function() {
            return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit")
        }
    }), de.change || (pe.event.special.change = {
        setup: function() {
            return Ve.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (pe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ve.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return pe.event.remove(this, "._change"), !Ve.test(this.nodeName)
        }
    }), de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = pe._data(r, t);
                i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = pe._data(r, t) - 1;
                i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0), pe._removeData(r, t))
            }
        }
    }), pe.fn.extend({
        on: function(e, t, n, r) {
            return w(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return w(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = x), this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? pe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ke = / jQuery\d+="(?:null|\d+)"/g,
        Ze = new RegExp("<(?:" + $e + ")[\\s/>]", "i"),
        et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ot = p(re),
        at = ot.appendChild(re.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !Ze.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(o = at.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a) r[a] && k(i, r[a]);
            if (t)
                if (n)
                    for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++) N(i, r[a]);
                else N(e, o);
            return r = h(o, "script"), r.length > 0 && m(r, !u && h(e, "script")), r = s = i = null, o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = pe.expando, u = pe.cache, l = de.attributes, c = pe.event.special; null != (n = e[a]); a++)
                if ((t || je(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(i))
                }
        }
    }), pe.fn.extend({
        domManip: S,
        detach: function(e) {
            return A(this, e, !0)
        },
        remove: function(e) {
            return A(this, e)
        },
        text: function(e) {
            return Re(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return S(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    T(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return S(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return S(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return S(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Re(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ke, "") : void 0;
                if ("string" == typeof e && !tt.test(e) && (de.htmlSerialize || !Ze.test(e)) && (de.leadingWhitespace || !Ie.test(e)) && !ze[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return S(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), pe(o[r])[t](n), ae.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var st, ut = {
            HTML: "block",
            BODY: "block"
        },
        lt = /^margin/,
        ct = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
        dt = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        ft = re.documentElement;
    ! function() {
        function t() {
            var t, c, d = re.documentElement;
            d.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = a = !0, e.getComputedStyle && (c = e.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                width: "4px"
            }).width, l.style.marginRight = "50%", r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), d.removeChild(u)
        }
        var n, r, i, o, a, s, u = re.createElement("div"),
            l = re.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === l.style.opacity, de.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === l.style.backgroundClip, u = re.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), de.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, pe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(), o
            },
            boxSizingReliable: function() {
                return null == n && t(), i
            },
            pixelMarginRight: function() {
                return null == n && t(), r
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), a
            },
            reliableMarginLeft: function() {
                return null == n && t(), s
            }
        }))
    }();
    var pt, ht, mt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n.opener || (n = e), n.getComputedStyle(t)
    }, ht = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || pt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), !de.pixelMarginRight() && ct.test(a) && lt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : ft.currentStyle && (pt = function(e) {
        return e.currentStyle
    }, ht = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || pt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), ct.test(a) && !mt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var gt = /alpha\([^)]*\)/i,
        vt = /opacity\s*=\s*([^)]*)/i,
        yt = /^(none|table(?!-c[ea]).+)/,
        xt = new RegExp("^(" + Me + ")(.*)$", "i"),
        bt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tt = ["Webkit", "O", "Moz", "ms"],
        Ct = re.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ht(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = pe.camelCase(t),
                    u = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = _e.exec(n)) && i[1] && (n = f(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ht(e, t, r)), "normal" === o && t in wt && (o = wt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? yt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, bt, function() {
                    return F(e, t, r)
                }) : F(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && pt(e);
                return M(e, n, r ? _(e, t, r, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(gt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = gt.test(o) ? o.replace(gt, i) : o + " " + i)
        }
    }), pe.cssHooks.marginRight = j(de.reliableMarginRight, function(e, t) {
        return t ? dt(e, {
            display: "inline-block"
        }, ht, [e, "marginRight"]) : void 0
    }), pe.cssHooks.marginLeft = j(de.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(ht(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Fe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, lt.test(e) || (pe.cssHooks[e + t].set = M)
    }), pe.fn.extend({
        css: function(e, t) {
            return Re(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (pe.isArray(t)) {
                    for (r = pt(e), i = t.length; i > a; a++) o[t[a]] = pe.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return q(this, !0)
        },
        hide: function() {
            return q(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Oe(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = O, O.prototype = {
        constructor: O,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = O.prototype.init, pe.fx.step = {};
    var Et, Nt, kt = /^(?:toggle|show|hide)$/,
        St = /queueHooks$/;
    pe.Animation = pe.extend($, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, _e.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
            },
            prefilters: [W],
            prefilter: function(e, t) {
                t ? $.prefilters.unshift(e) : $.prefilters.push(e)
            }
        }), pe.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue)
            }, r
        }, pe.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Oe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = pe.isEmptyObject(e),
                    o = pe.speed(t, n, r),
                    a = function() {
                        var t = $(this, pe.extend({}, e), o);
                        (i || pe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = pe.timers,
                        a = pe._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && St.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && pe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = pe._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = pe.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function(e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
            }
        }), pe.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pe.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), pe.timers = [], pe.fx.tick = function() {
            var e, t = pe.timers,
                n = 0;
            for (Et = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || pe.fx.stop(), Et = void 0
        }, pe.fx.timer = function(e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function() {
            Nt || (Nt = e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function() {
            e.clearInterval(Nt), Nt = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function(t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e, t = re.createElement("input"),
                n = re.createElement("div"),
                r = re.createElement("select"),
                i = r.appendChild(re.createElement("option"));
            n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = i.selected, de.enctype = !!re.createElement("form").enctype, r.disabled = !0, de.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
        }();
    var At = /\r/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = pe.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)) : void 0
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], (n.selected || u === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--;)
                        if (r = i[a], pe.inArray(pe.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (e) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0
            }
        }, de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Dt, Lt, jt = pe.expr.attrHandle,
        Ht = /^(?:checked|selected)$/i,
        qt = de.getSetAttribute,
        Mt = de.input;
    pe.fn.extend({
        attr: function(e, t) {
            return Re(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Lt : Dt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(Ae);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Mt && qt || !Ht.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(qt ? n : r)
        }
    }), Lt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : Mt && qt || !Ht.test(n) ? e.setAttribute(!qt && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = jt[t] || pe.find.attr;
        Mt && qt || !Ht.test(t) ? jt[t] = function(e, t, r) {
            var i, o;
            return r || (o = jt[t], jt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, jt[t] = o), i
        } : jt[t] = function(e, t, n) {
            return n ? void 0 : e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Mt && qt || (pe.attrHooks.value = {
        set: function(e, t, n) {
            return pe.nodeName(e, "input") ? void(e.defaultValue = t) : Dt && Dt.set(e, t, n)
        }
    }), qt || (Dt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, jt.id = jt.name = jt.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Dt.set
    }, pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Dt.set(e, "" !== t && t, n)
        }
    }, pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), de.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var _t = /^(?:input|select|textarea|button|object)$/i,
        Ft = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Re(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : _t.test(e.nodeName) || Ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), de.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }), de.enctype || (pe.propFix.enctype = "encoding");
    var Ot = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, z(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ot, " ")) {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = pe.trim(r), i !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ot, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        s = pe.trim(r), i !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, z(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = pe(this), o = e.match(Ae) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(void 0 === e || "boolean" === n) && (t = z(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Ot, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Rt = e.location,
        Pt = pe.now(),
        Bt = /\?/,
        Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = pe.trim(t + "");
        return i && !pe.trim(i.replace(Wt, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var It = /#.*$/,
        $t = /([?&])_=[^&]*/,
        zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ut = /^(?:GET|HEAD)$/,
        Vt = /^\/\//,
        Yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Jt = {},
        Gt = {},
        Qt = "*/".concat("*"),
        Kt = Rt.href,
        Zt = Yt.exec(Kt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Kt,
            type: "GET",
            isLocal: Xt.test(Zt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e)
        },
        ajaxPrefilter: X(Jt),
        ajaxTransport: X(Gt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o, d, y, x, w, C = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), c = void 0, s = i || "", T.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, r && (x = Y(f, T, r)), x = J(f, x, T, o), o ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (pe.lastModified[a] = w), (w = T.getResponseHeader("etag")) && (pe.etag[a] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, d = x.data, y = x.error, o = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", o ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? d : y]), g.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, f]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, d, f = pe.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                m = pe.Deferred(),
                g = pe.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!d)
                                for (d = {}; t = zt.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || Kt) + "").replace(It, "").replace(Vt, Zt[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(Ae) || [""], null == f.crossDomain && (i = Yt.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === Zt[1] && i[2] === Zt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Zt[3] || ("http:" === Zt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), U(Jt, f, n, T), 2 === b) return T;
            l = pe.event && f.global, l && 0 == pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ut.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Bt.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = $t.test(a) ? a.replace($t, "$1_=" + Pt++) : a + (Bt.test(a) ? "&" : "?") + "_=" + Pt++)), f.ifModified && (pe.lastModified[a] && T.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && T.setRequestHeader("If-None-Match", pe.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) T.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === b)) return T.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[o](f[o]);
            if (c = U(Gt, f, n, T)) {
                if (T.readyState = 1, l && h.trigger("ajaxSend", [T, f]), 2 === b) return T;
                f.async && f.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, c.send(y, r)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, r, i) {
            return pe.isFunction(n) && (i = i || r, r = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e)
    }, pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    };
    var en = /%20/g,
        tn = /\[\]$/,
        nn = /\r?\n/g,
        rn = /^(?:submit|button|image|reset|file)$/i,
        on = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) K(n, e[n], t, i);
        return r.join("&").replace(en, "+")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && on.test(this.nodeName) && !rn.test(e) && (this.checked || !Pe.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(nn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(nn, "\r\n")
                }
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var an = 0,
        sn = {},
        un = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in sn) sn[e](void 0, !0)
    }), de.cors = !!un && "withCredentials" in un, (un = de.ajax = !!un) && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, a = t.xhr(),
                        s = ++an;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, r) {
                        var o, u, l;
                        if (n && (r || 4 === a.readyState))
                            if (delete sn[s], n = void 0, a.onreadystatechange = pe.noop, r) 4 !== a.readyState && a.abort();
                            else {
                                l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                try {
                                    u = a.statusText
                                } catch (e) {
                                    u = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            }
                        l && i(o, u, l, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = sn[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), pe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = re.head || pe("head")[0] || re.documentElement;
            return {
                send: function(r, i) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ln = [],
        cn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ln.pop() || pe.expando + "_" + Pt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (cn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(cn, "$1" + i) : !1 !== t.jsonp && (t.url += (Bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || pe.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, ln.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), de.createHTMLDocument = function() {
        if (!re.implementation.createHTMLDocument) return !1;
        var e = re.implementation.createHTMLDocument("");
        return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
    }(), pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (de.createHTMLDocument ? re.implementation.createHTMLDocument("") : re);
        var r = Te.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = v([e], t, i), i && i.length && pe(i).remove(), pe.merge([], r.childNodes))
    };
    var dn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && dn) return dn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(a, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = pe.css(e, "position"),
                d = pe(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = pe.css(e, "top"), u = pe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, pe.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += pe.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                    top: t.top - n.top - pe.css(r, "marginTop", !0),
                    left: t.left - n.left - pe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || ft
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(r) {
            return Re(this, function(e, r, i) {
                var o = te(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? pe(o).scrollLeft() : i, n ? i : pe(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = j(de.pixelPosition, function(e, n) {
            return n ? (n = ht(e, t), ct.test(n) ? pe(e).position()[t] + "px" : n) : void 0
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            pe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === i ? "margin" : "border");
                return Re(this, function(t, n, r) {
                    var i;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.fn.size = function() {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var fn = e.jQuery,
        pn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = pn), t && e.jQuery === pe && (e.jQuery = fn), pe
    }, t || (e.jQuery = e.$ = pe), pe
});
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return function(t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t
        }, e.d = function(t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 3)
    }([function(t, e, n) {
        var o, r, i;
        ! function(a, c) {
            r = [t, n(7)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
        }(0, function(t, e) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(e),
                r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                a = function() {
                    function t(e) {
                        n(this, t), this.resolveOptions(e), this.initSelection()
                    }
                    return i(t, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var t = this,
                                e = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return t.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, o.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult",
                        value: function(t) {
                            this.emitter.emit(t ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = t
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]), t
                }();
            t.exports = a
        })
    }, function(t, e, n) {
        function o(t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!c.string(e)) throw new TypeError("Second argument must be a String");
            if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
            if (c.node(t)) return r(t, e, n);
            if (c.nodeList(t)) return i(t, e, n);
            if (c.string(t)) return a(t, e, n);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
        }

        function r(t, e, n) {
            return t.addEventListener(e, n), {
                destroy: function() {
                    t.removeEventListener(e, n)
                }
            }
        }

        function i(t, e, n) {
            return Array.prototype.forEach.call(t, function(t) {
                t.addEventListener(e, n)
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(t, function(t) {
                        t.removeEventListener(e, n)
                    })
                }
            }
        }

        function a(t, e, n) {
            return u(document.body, t, e, n)
        }
        var c = n(6),
            u = n(5);
        t.exports = o
    }, function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }), this
            },
            once: function(t, e, n) {
                function o() {
                    r.off(t, o), e.apply(n, arguments)
                }
                var r = this;
                return o._ = e, this.on(t, o, n)
            },
            emit: function(t) {
                var e = [].slice.call(arguments, 1),
                    n = ((this.e || (this.e = {}))[t] || []).slice(),
                    o = 0,
                    r = n.length;
                for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {}),
                    o = n[t],
                    r = [];
                if (o && e)
                    for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                return r.length ? n[t] = r : delete n[t], this
            }
        }, t.exports = n
    }, function(t, e, n) {
        var o, r, i;
        ! function(a, c) {
            r = [t, n(0), n(2), n(1)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
        }(0, function(t, e, n, o) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function c(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function u(t, e) {
                var n = "data-clipboard-" + t;
                if (e.hasAttribute(n)) return e.getAttribute(n)
            }
            var l = r(e),
                s = r(n),
                f = r(o),
                d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                h = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                p = function(t) {
                    function e(t, n) {
                        i(this, e);
                        var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return o.resolveOptions(n), o.listenClick(t), o
                    }
                    return c(e, t), h(e, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body
                        }
                    }, {
                        key: "listenClick",
                        value: function(t) {
                            var e = this;
                            this.listener = (0, f.default)(t, "click", function(t) {
                                return e.onClick(t)
                            })
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            var e = t.delegateTarget || t.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({
                                action: this.action(e),
                                target: this.target(e),
                                text: this.text(e),
                                container: this.container,
                                trigger: e,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction",
                        value: function(t) {
                            return u("action", t)
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(t) {
                            var e = u("target", t);
                            if (e) return document.querySelector(e)
                        }
                    }, {
                        key: "defaultText",
                        value: function(t) {
                            return u("text", t)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                e = "string" == typeof t ? [t] : t,
                                n = !!document.queryCommandSupported;
                            return e.forEach(function(t) {
                                n = n && !!document.queryCommandSupported(t)
                            }), n
                        }
                    }]), e
                }(s.default);
            t.exports = p
        })
    }, function(t, e) {
        function n(t, e) {
            for (; t && t.nodeType !== o;) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode
            }
        }
        var o = 9;
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var r = Element.prototype;
            r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t, e, n, o, r) {
            var a = i.apply(this, arguments);
            return t.addEventListener(n, a, r), {
                destroy: function() {
                    t.removeEventListener(n, a, r)
                }
            }
        }

        function r(t, e, n, r, i) {
            return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
                return o(t, e, n, r, i)
            }))
        }

        function i(t, e, n, o) {
            return function(n) {
                n.delegateTarget = a(n.target, e), n.delegateTarget && o.call(t, n)
            }
        }
        var a = n(4);
        t.exports = r
    }, function(t, e) {
        e.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }, e.nodeList = function(t) {
            var n = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
        }, e.string = function(t) {
            return "string" == typeof t || t instanceof String
        }, e.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }, function(t, e) {
        function n(t) {
            var e;
            if ("SELECT" === t.nodeName) t.focus(), e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection(),
                    r = document.createRange();
                r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString()
            }
            return e
        }
        t.exports = n
    }])
});
! function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var i = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.head || document.getElementsByTagName("head")[0],
                a = document.createElement("div");
            a.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', r.appendChild(a.childNodes[1])
        }
        return e && t.extend(i, e), this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var r = ".fitvidsignore";
            i.ignore && (r = r + ", " + i.ignore);
            var a = t(this).find(e.join(","));
            a = a.not("object object"), a = a.not(r), a.each(function() {
                var e = t(this);
                if (!(e.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                    var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                        a = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                        d = i / a;
                    if (!e.attr("id")) {
                        var o = "fitvid" + Math.floor(999999 * Math.random());
                        e.attr("id", o)
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * d + "%"), e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
! function(e) {
    var t = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : t && (t.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
        return t.hljs
    }))
}(function(e) {
    function t(e) {
        return e.replace(/[&<>]/gm, function(e) {
            return z[e]
        })
    }

    function r(e) {
        return e.nodeName.toLowerCase()
    }

    function a(e, t) {
        var r = e && e.exec(t);
        return r && 0 === r.index
    }

    function i(e) {
        return C.test(e)
    }

    function n(e) {
        var t, r, a, n, s = e.className + " ";
        if (s += e.parentNode ? e.parentNode.className : "", r = M.exec(s)) return y(r[1]) ? r[1] : "no-highlight";
        for (s = s.split(/\s+/), t = 0, a = s.length; a > t; t++)
            if (n = s[t], i(n) || y(n)) return n
    }

    function s(e, t) {
        var r, a = {};
        for (r in e) a[r] = e[r];
        if (t)
            for (r in t) a[r] = t[r];
        return a
    }

    function o(e) {
        var t = [];
        return function e(a, i) {
            for (var n = a.firstChild; n; n = n.nextSibling) 3 === n.nodeType ? i += n.nodeValue.length : 1 === n.nodeType && (t.push({
                event: "start",
                offset: i,
                node: n
            }), i = e(n, i), r(n).match(/br|hr|img|input/) || t.push({
                event: "stop",
                offset: i,
                node: n
            }));
            return i
        }(e, 0), t
    }

    function c(e, a, i) {
        function n() {
            return e.length && a.length ? e[0].offset !== a[0].offset ? e[0].offset < a[0].offset ? e : a : "start" === a[0].event ? e : a : e.length ? e : a
        }

        function s(e) {
            function a(e) {
                return " " + e.nodeName + '="' + t(e.value) + '"'
            }
            d += "<" + r(e) + v.map.call(e.attributes, a).join("") + ">"
        }

        function o(e) {
            d += "</" + r(e) + ">"
        }

        function c(e) {
            ("start" === e.event ? s : o)(e.node)
        }
        for (var l = 0, d = "", u = []; e.length || a.length;) {
            var b = n();
            if (d += t(i.substr(l, b[0].offset - l)), l = b[0].offset, b === e) {
                u.reverse().forEach(o);
                do {
                    c(b.splice(0, 1)[0]), b = n()
                } while (b === e && b.length && b[0].offset === l);
                u.reverse().forEach(s)
            } else "start" === b[0].event ? u.push(b[0].node) : u.pop(), c(b.splice(0, 1)[0])
        }
        return d + t(i.substr(l))
    }

    function l(e) {
        function t(e) {
            return e && e.source || e
        }

        function r(r, a) {
            return new RegExp(t(r), "m" + (e.cI ? "i" : "") + (a ? "g" : ""))
        }

        function a(i, n) {
            if (!i.compiled) {
                if (i.compiled = !0, i.k = i.k || i.bK, i.k) {
                    var o = {},
                        c = function(t, r) {
                            e.cI && (r = r.toLowerCase()), r.split(" ").forEach(function(e) {
                                var r = e.split("|");
                                o[r[0]] = [t, r[1] ? Number(r[1]) : 1]
                            })
                        };
                    "string" == typeof i.k ? c("keyword", i.k) : N(i.k).forEach(function(e) {
                        c(e, i.k[e])
                    }), i.k = o
                }
                i.lR = r(i.l || /\w+/, !0), n && (i.bK && (i.b = "\\b(" + i.bK.split(" ").join("|") + ")\\b"), i.b || (i.b = /\B|\b/), i.bR = r(i.b), i.e || i.eW || (i.e = /\B|\b/), i.e && (i.eR = r(i.e)), i.tE = t(i.e) || "", i.eW && n.tE && (i.tE += (i.e ? "|" : "") + n.tE)), i.i && (i.iR = r(i.i)), null == i.r && (i.r = 1), i.c || (i.c = []);
                var l = [];
                i.c.forEach(function(e) {
                    e.v ? e.v.forEach(function(t) {
                        l.push(s(e, t))
                    }) : l.push("self" === e ? i : e)
                }), i.c = l, i.c.forEach(function(e) {
                    a(e, i)
                }), i.starts && a(i.starts, n);
                var d = i.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([i.tE, i.i]).map(t).filter(Boolean);
                i.t = d.length ? r(d.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }
        a(e)
    }

    function d(e, r, i, n) {
        function s(e, t) {
            var r, i;
            for (r = 0, i = t.c.length; i > r; r++)
                if (a(t.c[r].bR, e)) return t.c[r]
        }

        function o(e, t) {
            if (a(e.eR, t)) {
                for (; e.endsParent && e.parent;) e = e.parent;
                return e
            }
            return e.eW ? o(e.parent, t) : void 0
        }

        function c(e, t) {
            return !i && a(t.iR, e)
        }

        function b(e, t) {
            var r = w.cI ? t[0].toLowerCase() : t[0];
            return e.k.hasOwnProperty(r) && e.k[r]
        }

        function p(e, t, r, a) {
            var i = a ? "" : B.classPrefix,
                n = '<span class="' + i,
                s = r ? "" : S;
            return (n += e + '">') + t + s
        }

        function m() {
            var e, r, a, i;
            if (!N.k) return t(M);
            for (i = "", r = 0, N.lR.lastIndex = 0, a = N.lR.exec(M); a;) i += t(M.substr(r, a.index - r)), e = b(N, a), e ? (E += e[1], i += p(e[0], t(a[0]))) : i += t(a[0]), r = N.lR.lastIndex, a = N.lR.exec(M);
            return i + t(M.substr(r))
        }

        function f() {
            var e = "string" == typeof N.sL;
            if (e && !k[N.sL]) return t(M);
            var r = e ? d(N.sL, M, !0, x[N.sL]) : u(M, N.sL.length ? N.sL : void 0);
            return N.r > 0 && (E += r.r), e && (x[N.sL] = r.top), p(r.language, r.value, !1, !0)
        }

        function g() {
            C += null != N.sL ? f() : m(), M = ""
        }

        function h(e) {
            C += e.cN ? p(e.cN, "", !0) : "", N = Object.create(e, {
                parent: {
                    value: N
                }
            })
        }

        function _(e, t) {
            if (M += e, null == t) return g(), 0;
            var r = s(t, N);
            if (r) return r.skip ? M += t : (r.eB && (M += t), g(), r.rB || r.eB || (M = t)), h(r, t), r.rB ? 0 : t.length;
            var a = o(N, t);
            if (a) {
                var i = N;
                i.skip ? M += t : (i.rE || i.eE || (M += t), g(), i.eE && (M = t));
                do {
                    N.cN && (C += S), N.skip || (E += N.r), N = N.parent
                } while (N !== a.parent);
                return a.starts && h(a.starts, ""), i.rE ? 0 : t.length
            }
            if (c(t, N)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (N.cN || "<unnamed>") + '"');
            return M += t, t.length || 1
        }
        var w = y(e);
        if (!w) throw new Error('Unknown language: "' + e + '"');
        l(w);
        var v, N = n || w,
            x = {},
            C = "";
        for (v = N; v !== w; v = v.parent) v.cN && (C = p(v.cN, "", !0) + C);
        var M = "",
            E = 0;
        try {
            for (var z, A, L = 0; N.t.lastIndex = L, z = N.t.exec(r);) A = _(r.substr(L, z.index - L), z[0]), L = z.index + A;
            for (_(r.substr(L)), v = N; v.parent; v = v.parent) v.cN && (C += S);
            return {
                r: E,
                value: C,
                language: e,
                top: N
            }
        } catch (e) {
            if (e.message && -1 !== e.message.indexOf("Illegal")) return {
                r: 0,
                value: t(r)
            };
            throw e
        }
    }

    function u(e, r) {
        r = r || B.languages || N(k);
        var a = {
                r: 0,
                value: t(e)
            },
            i = a;
        return r.filter(y).forEach(function(t) {
            var r = d(t, e, !1);
            r.language = t, r.r > i.r && (i = r), r.r > a.r && (i = a, a = r)
        }), i.language && (a.second_best = i), a
    }

    function b(e) {
        return B.tabReplace || B.useBR ? e.replace(E, function(e, t) {
            return B.useBR && "\n" === e ? "<br>" : B.tabReplace ? t.replace(/\t/g, B.tabReplace) : void 0
        }) : e
    }

    function p(e, t, r) {
        var a = t ? x[t] : r,
            i = [e.trim()];
        return e.match(/\bhljs\b/) || i.push("hljs"), -1 === e.indexOf(a) && i.push(a), i.join(" ").trim()
    }

    function m(e) {
        var t, r, a, s, l, m = n(e);
        i(m) || (B.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e, l = t.textContent, a = m ? d(m, l, !0) : u(l), r = o(t), r.length && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), s.innerHTML = a.value, a.value = c(r, o(s), l)), a.value = b(a.value), e.innerHTML = a.value, e.className = p(e.className, m, a.language), e.result = {
            language: a.language,
            re: a.r
        }, a.second_best && (e.second_best = {
            language: a.second_best.language,
            re: a.second_best.r
        }))
    }

    function f(e) {
        B = s(B, e)
    }

    function g() {
        if (!g.called) {
            g.called = !0;
            var e = document.querySelectorAll("pre code");
            v.forEach.call(e, m)
        }
    }

    function h() {
        addEventListener("DOMContentLoaded", g, !1), addEventListener("load", g, !1)
    }

    function _(t, r) {
        var a = k[t] = r(e);
        a.aliases && a.aliases.forEach(function(e) {
            x[e] = t
        })
    }

    function w() {
        return N(k)
    }

    function y(e) {
        return e = (e || "").toLowerCase(), k[e] || k[x[e]]
    }
    var v = [],
        N = Object.keys,
        k = {},
        x = {},
        C = /^(no-?highlight|plain|text)$/i,
        M = /\blang(?:uage)?-([\w-]+)\b/i,
        E = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        S = "</span>",
        B = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        },
        z = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;"
        };
    return e.highlight = d, e.highlightAuto = u, e.fixMarkup = b, e.highlightBlock = m, e.configure = f, e.initHighlighting = g, e.initHighlightingOnLoad = h, e.registerLanguage = _, e.listLanguages = w, e.getLanguage = y, e.inherit = s, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE]
    }, e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    }, e.PWM = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
    }, e.C = function(t, r, a) {
        var i = e.inherit({
            cN: "comment",
            b: t,
            e: r,
            c: []
        }, a || {});
        return i.c.push(e.PWM), i.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }), i
    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    }, e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    }, e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    }, e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [e.BE]
        }]
    }, e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    }, e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    }, e.METHOD_GUARD = {
        b: "\\.\\s*" + e.UIR,
        r: 0
    }, e
}), hljs.registerLanguage("sql", function(e) {
    var t = e.C("--", "$");
    return {
        cI: !0,
        i: /[<>{}*#]/,
        c: [{
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
            e: /;/,
            eW: !0,
            l: /[\w\.]+/,
            k: {
                keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [e.BE, {
                    b: "''"
                }]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [e.BE, {
                    b: '""'
                }]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE]
            }, e.CNM, e.CBCM, t]
        }, e.CBCM, t]
    }
}), hljs.registerLanguage("lua", function(e) {
    var t = "\\[=*\\[",
        r = "\\]=*\\]",
        a = {
            b: t,
            e: r,
            c: ["self"]
        },
        i = [e.C("--(?!" + t + ")", "$"), e.C("--" + t, r, {
            c: [a],
            r: 10
        })];
    return {
        l: e.UIR,
        k: {
            keyword: "and break do else elseif end false for if in local nil not or repeat return then true until while",
            built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
        },
        c: i.concat([{
            cN: "function",
            bK: "function",
            e: "\\)",
            c: [e.inherit(e.TM, {
                b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
            }), {
                cN: "params",
                b: "\\(",
                eW: !0,
                c: i
            }].concat(i)
        }, e.CNM, e.ASM, e.QSM, {
            cN: "string",
            b: t,
            e: r,
            c: [a],
            r: 5
        }])
    }
}), hljs.registerLanguage("coffeescript", function(e) {
    var t = {
            keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
            literal: "true false null undefined yes no on off",
            built_in: "npm require console print module global window document"
        },
        r = "[A-Za-z$_][0-9A-Za-z$_]*",
        a = {
            cN: "subst",
            b: /#\{/,
            e: /}/,
            k: t
        },
        i = [e.BNM, e.inherit(e.CNM, {
            starts: {
                e: "(\\s*/)?",
                r: 0
            }
        }), {
            cN: "string",
            v: [{
                b: /'''/,
                e: /'''/,
                c: [e.BE]
            }, {
                b: /'/,
                e: /'/,
                c: [e.BE]
            }, {
                b: /"""/,
                e: /"""/,
                c: [e.BE, a]
            }, {
                b: /"/,
                e: /"/,
                c: [e.BE, a]
            }]
        }, {
            cN: "regexp",
            v: [{
                b: "///",
                e: "///",
                c: [a, e.HCM]
            }, {
                b: "//[gim]*",
                r: 0
            }, {
                b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
            }]
        }, {
            b: "@" + r
        }, {
            b: "`",
            e: "`",
            eB: !0,
            eE: !0,
            sL: "javascript"
        }];
    a.c = i;
    var n = e.inherit(e.TM, {
            b: r
        }),
        s = "(\\(.*\\))?\\s*\\B[-=]>",
        o = {
            cN: "params",
            b: "\\([^\\(]",
            rB: !0,
            c: [{
                b: /\(/,
                e: /\)/,
                k: t,
                c: ["self"].concat(i)
            }]
        };
    return {
        aliases: ["coffee", "cson", "iced"],
        k: t,
        i: /\/\*/,
        c: i.concat([e.C("###", "###"), e.HCM, {
            cN: "function",
            b: "^\\s*" + r + "\\s*=\\s*" + s,
            e: "[-=]>",
            rB: !0,
            c: [n, o]
        }, {
            b: /[:\(,=]\s*/,
            r: 0,
            c: [{
                cN: "function",
                b: s,
                e: "[-=]>",
                rB: !0,
                c: [o]
            }]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [n]
            }, n]
        }, {
            b: r + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        }])
    }
}), hljs.registerLanguage("python", function(e) {
    var t = {
            cN: "meta",
            b: /^(>>>|\.\.\.) /
        },
        r = {
            cN: "string",
            c: [e.BE],
            v: [{
                b: /(u|b)?r?'''/,
                e: /'''/,
                c: [t],
                r: 10
            }, {
                b: /(u|b)?r?"""/,
                e: /"""/,
                c: [t],
                r: 10
            }, {
                b: /(u|r|ur)'/,
                e: /'/,
                r: 10
            }, {
                b: /(u|r|ur)"/,
                e: /"/,
                r: 10
            }, {
                b: /(b|br)'/,
                e: /'/
            }, {
                b: /(b|br)"/,
                e: /"/
            }, e.ASM, e.QSM]
        },
        a = {
            cN: "number",
            r: 0,
            v: [{
                b: e.BNR + "[lLjJ]?"
            }, {
                b: "\\b(0o[0-7]+)[lLjJ]?"
            }, {
                b: e.CNR + "[lLjJ]?"
            }]
        },
        i = {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: ["self", t, a, r]
        };
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)|=>/,
        c: [t, a, r, e.HCM, {
            v: [{
                cN: "function",
                bK: "def"
            }, {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, i, {
                b: /->/,
                eW: !0,
                k: "None"
            }]
        }, {
            cN: "meta",
            b: /^[\t ]*@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
}), hljs.registerLanguage("xml", function(e) {
    var t = {
        eW: !0,
        i: /</,
        r: 0,
        c: [{
            cN: "attr",
            b: "[A-Za-z0-9\\._:-]+",
            r: 0
        }, {
            b: /=\s*/,
            r: 0,
            c: [{
                cN: "string",
                endsParent: !0,
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s"'=<>`]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "meta",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, e.C("\x3c!--", "--\x3e", {
            r: 10
        }), {
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            b: /<\?(php)?/,
            e: /\?>/,
            sL: "php",
            c: [{
                b: "/\\*",
                e: "\\*/",
                skip: !0
            }]
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                name: "style"
            },
            c: [t],
            starts: {
                e: "</style>",
                rE: !0,
                sL: ["css", "xml"]
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                name: "script"
            },
            c: [t],
            starts: {
                e: "<\/script>",
                rE: !0,
                sL: ["actionscript", "javascript", "handlebars", "xml"]
            }
        }, {
            cN: "meta",
            v: [{
                b: /<\?xml/,
                e: /\?>/,
                r: 10
            }, {
                b: /<\?\w+/,
                e: /\?>/
            }]
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "name",
                b: /[^\/><\s]+/,
                r: 0
            }, t]
        }]
    }
}), hljs.registerLanguage("markdown", function(e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "section",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "quote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "^```w*s*$",
                e: "^```s*$"
            }, {
                b: "`.+?`"
            }, {
                b: "^( {4}|\t)",
                e: "$",
                r: 0
            }]
        }, {
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "string",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "symbol",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        }, {
            b: /^\[[^\n]+\]:/,
            rB: !0,
            c: [{
                cN: "symbol",
                b: /\[/,
                e: /\]/,
                eB: !0,
                eE: !0
            }, {
                cN: "link",
                b: /:\s*/,
                e: /$/,
                eB: !0
            }]
        }]
    }
}), hljs.registerLanguage("dart", function(e) {
    var t = {
            cN: "subst",
            b: "\\$\\{",
            e: "}",
            k: "true false null this is new super"
        },
        r = {
            cN: "string",
            v: [{
                b: "r'''",
                e: "'''"
            }, {
                b: 'r"""',
                e: '"""'
            }, {
                b: "r'",
                e: "'",
                i: "\\n"
            }, {
                b: 'r"',
                e: '"',
                i: "\\n"
            }, {
                b: "'''",
                e: "'''",
                c: [e.BE, t]
            }, {
                b: '"""',
                e: '"""',
                c: [e.BE, t]
            }, {
                b: "'",
                e: "'",
                i: "\\n",
                c: [e.BE, t]
            }, {
                b: '"',
                e: '"',
                i: "\\n",
                c: [e.BE, t]
            }]
        };
    return t.c = [e.CNM, r], {
        k: {
            keyword: "assert async await break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch sync this throw true try var void while with yield abstract as dynamic export external factory get implements import library operator part set static typedef",
            built_in: "print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList"
        },
        c: [r, e.C("/\\*\\*", "\\*/", {
            sL: "markdown"
        }), e.C("///", "$", {
            sL: "markdown"
        }), e.CLCM, e.CBCM, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, e.CNM, {
            cN: "meta",
            b: "@[A-Za-z]+"
        }, {
            b: "=>"
        }]
    }
}), hljs.registerLanguage("scss", function(e) {
    var t = {
            cN: "variable",
            b: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
        },
        r = {
            cN: "number",
            b: "#[0-9A-Fa-f]+"
        };
    return e.CSSNM, e.QSM, e.ASM, e.CBCM, {
        cI: !0,
        i: "[=/|']",
        c: [e.CLCM, e.CBCM, {
            cN: "selector-id",
            b: "\\#[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "selector-class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "selector-attr",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "selector-tag",
            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
            r: 0
        }, {
            b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
        }, {
            b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
        }, t, {
            cN: "attribute",
            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
            i: "[^\\s]"
        }, {
            b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
        }, {
            b: ":",
            e: ";",
            c: [t, r, e.CSSNM, e.QSM, e.ASM, {
                cN: "meta",
                b: "!important"
            }]
        }, {
            b: "@",
            e: "[{;]",
            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
            c: [t, e.QSM, e.ASM, r, e.CSSNM, {
                b: "\\s[A-Za-z0-9_.-]+",
                r: 0
            }]
        }]
    }
}), hljs.registerLanguage("rust", function(e) {
    var t = "([uif](8|16|32|64|size))?",
        r = "Copy Send Sized Sync Drop Fn FnMut FnOnce drop Box ToOwned Clone PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator Option Result SliceConcatExt String ToString Vec assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules!";
    return {
        aliases: ["rs"],
        k: {
            keyword: "alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield move default int i8 i16 i32 i64 isize uint u8 u32 u64 usize float f32 f64 str char bool",
            literal: "true false Some None Ok Err",
            built_in: r
        },
        l: e.IR + "!?",
        i: "</",
        c: [e.CLCM, e.C("/\\*", "\\*/", {
            c: ["self"]
        }), e.inherit(e.QSM, {
            b: /b?"/,
            i: null
        }), {
            cN: "string",
            v: [{
                b: /r(#*)".*?"\1(?!#)/
            }, {
                b: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
            }]
        }, {
            cN: "symbol",
            b: /'[a-zA-Z_][a-zA-Z0-9_]*/
        }, {
            cN: "number",
            v: [{
                b: "\\b0b([01_]+)" + t
            }, {
                b: "\\b0o([0-7_]+)" + t
            }, {
                b: "\\b0x([A-Fa-f0-9_]+)" + t
            }, {
                b: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t
            }],
            r: 0
        }, {
            cN: "function",
            bK: "fn",
            e: "(\\(|<)",
            eE: !0,
            c: [e.UTM]
        }, {
            cN: "meta",
            b: "#\\!?\\[",
            e: "\\]",
            c: [{
                cN: "meta-string",
                b: /"/,
                e: /"/
            }]
        }, {
            cN: "class",
            bK: "type",
            e: ";",
            c: [e.inherit(e.UTM, {
                endsParent: !0
            })],
            i: "\\S"
        }, {
            cN: "class",
            bK: "trait enum struct",
            e: "{",
            c: [e.inherit(e.UTM, {
                endsParent: !0
            })],
            i: "[\\w\\d]"
        }, {
            b: e.IR + "::",
            k: {
                built_in: r
            }
        }, {
            b: "->"
        }]
    }
}), hljs.registerLanguage("swift", function(e) {
    var t = {
            keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
            literal: "true false nil",
            built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
        },
        r = {
            cN: "type",
            b: "\\b[A-Z][\\wÃ€-Ê¸']*",
            r: 0
        },
        a = e.C("/\\*", "\\*/", {
            c: ["self"]
        }),
        i = {
            cN: "subst",
            b: /\\\(/,
            e: "\\)",
            k: t,
            c: []
        },
        n = {
            cN: "number",
            b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
            r: 0
        },
        s = e.inherit(e.QSM, {
            c: [i, e.BE]
        });
    return i.c = [n], {
        k: t,
        c: [s, e.CLCM, a, r, n, {
            cN: "function",
            bK: "func",
            e: "{",
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                b: /</,
                e: />/
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                endsParent: !0,
                k: t,
                c: ["self", n, s, e.CBCM, {
                    b: ":"
                }],
                i: /["']/
            }],
            i: /\[|%/
        }, {
            cN: "class",
            bK: "struct protocol class extension enum",
            k: t,
            e: "\\{",
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
            })]
        }, {
            cN: "meta",
            b: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
        }, {
            bK: "import",
            e: /$/,
            c: [e.CLCM, a]
        }]
    }
}), hljs.registerLanguage("diff", function(e) {
    return {
        aliases: ["patch"],
        c: [{
            cN: "meta",
            r: 10,
            v: [{
                b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
            }, {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            }, {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            }]
        }, {
            cN: "comment",
            v: [{
                b: /Index: /,
                e: /$/
            }, {
                b: /={3,}/,
                e: /$/
            }, {
                b: /^\-{3}/,
                e: /$/
            }, {
                b: /^\*{3} /,
                e: /$/
            }, {
                b: /^\+{3}/,
                e: /$/
            }, {
                b: /\*{5}/,
                e: /\*{5}$/
            }]
        }, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        }, {
            cN: "addition",
            b: "^\\!",
            e: "$"
        }]
    }
}), hljs.registerLanguage("less", function(e) {
    var t = "[\\w-]+",
        r = "(" + t + "|@{" + t + "})",
        a = [],
        i = [],
        n = function(e) {
            return {
                cN: "string",
                b: "~?" + e + ".*?" + e
            }
        },
        s = function(e, t, r) {
            return {
                cN: e,
                b: t,
                r: r
            }
        },
        o = {
            b: "\\(",
            e: "\\)",
            c: i,
            r: 0
        };
    i.push(e.CLCM, e.CBCM, n("'"), n('"'), e.CSSNM, {
        b: "(url|data-uri)\\(",
        starts: {
            cN: "string",
            e: "[\\)\\n]",
            eE: !0
        }
    }, s("number", "#[0-9A-Fa-f]+\\b"), o, s("variable", "@@?" + t, 10), s("variable", "@{" + t + "}"), s("built_in", "~?`[^`]*?`"), {
        cN: "attribute",
        b: t + "\\s*:",
        e: ":",
        rB: !0,
        eE: !0
    }, {
        cN: "meta",
        b: "!important"
    });
    var c = i.concat({
            b: "{",
            e: "}",
            c: a
        }),
        l = {
            bK: "when",
            eW: !0,
            c: [{
                bK: "and not"
            }].concat(i)
        },
        d = {
            b: r + "\\s*:",
            rB: !0,
            e: "[;}]",
            r: 0,
            c: [{
                cN: "attribute",
                b: r,
                e: ":",
                eE: !0,
                starts: {
                    eW: !0,
                    i: "[<=$]",
                    r: 0,
                    c: i
                }
            }]
        },
        u = {
            cN: "keyword",
            b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
            starts: {
                e: "[;{}]",
                rE: !0,
                c: i,
                r: 0
            }
        },
        b = {
            cN: "variable",
            v: [{
                b: "@" + t + "\\s*:",
                r: 15
            }, {
                b: "@" + t
            }],
            starts: {
                e: "[;}]",
                rE: !0,
                c: c
            }
        },
        p = {
            v: [{
                b: "[\\.#:&\\[>]",
                e: "[;{}]"
            }, {
                b: r,
                e: "{"
            }],
            rB: !0,
            rE: !0,
            i: "[<='$\"]",
            r: 0,
            c: [e.CLCM, e.CBCM, l, s("keyword", "all\\b"), s("variable", "@{" + t + "}"), s("selector-tag", r + "%?", 0), s("selector-id", "#" + r), s("selector-class", "\\." + r, 0), s("selector-tag", "&", 0), {
                cN: "selector-attr",
                b: "\\[",
                e: "\\]"
            }, {
                cN: "selector-pseudo",
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            }, {
                b: "\\(",
                e: "\\)",
                c: c
            }, {
                b: "!important"
            }]
        };
    return a.push(e.CLCM, e.CBCM, u, b, d, p), {
        cI: !0,
        i: "[=>'/<($\"]",
        c: a
    }
}), hljs.registerLanguage("nginx", function(e) {
    var t = {
            cN: "variable",
            v: [{
                b: /\$\d+/
            }, {
                b: /\$\{/,
                e: /}/
            }, {
                b: "[\\$\\@]" + e.UIR
            }]
        },
        r = {
            eW: !0,
            l: "[a-z/_]+",
            k: {
                literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
            },
            r: 0,
            i: "=>",
            c: [e.HCM, {
                cN: "string",
                c: [e.BE, t],
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }]
            }, {
                b: "([a-z]+):/",
                e: "\\s",
                eW: !0,
                eE: !0,
                c: [t]
            }, {
                cN: "regexp",
                c: [e.BE, t],
                v: [{
                    b: "\\s\\^",
                    e: "\\s|{|;",
                    rE: !0
                }, {
                    b: "~\\*?\\s+",
                    e: "\\s|{|;",
                    rE: !0
                }, {
                    b: "\\*(\\.[a-z\\-]+)+"
                }, {
                    b: "([a-z\\-]+\\.)+\\*"
                }]
            }, {
                cN: "number",
                b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
            }, {
                cN: "number",
                b: "\\b\\d+[kKmMgGdshdwy]*\\b",
                r: 0
            }, t]
        };
    return {
        aliases: ["nginxconf"],
        c: [e.HCM, {
            b: e.UIR + "\\s+{",
            rB: !0,
            e: "{",
            c: [{
                cN: "section",
                b: e.UIR
            }],
            r: 0
        }, {
            b: e.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [{
                cN: "attribute",
                b: e.UIR,
                starts: r
            }],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
}), hljs.registerLanguage("json", function(e) {
    var t = {
            literal: "true false null"
        },
        r = [e.QSM, e.CNM],
        a = {
            e: ",",
            eW: !0,
            eE: !0,
            c: r,
            k: t
        },
        i = {
            b: "{",
            e: "}",
            c: [{
                cN: "attr",
                b: /"/,
                e: /"/,
                c: [e.BE],
                i: "\\n"
            }, e.inherit(a, {
                b: /:/
            })],
            i: "\\S"
        },
        n = {
            b: "\\[",
            e: "\\]",
            c: [e.inherit(a)],
            i: "\\S"
        };
    return r.splice(r.length, 0, i, n), {
        c: r,
        k: t,
        i: "\\S"
    }
}), hljs.registerLanguage("haskell", function(e) {
    var t = {
            v: [e.C("--", "$"), e.C("{-", "-}", {
                c: ["self"]
            })]
        },
        r = {
            cN: "meta",
            b: "{-#",
            e: "#-}"
        },
        a = {
            cN: "meta",
            b: "^#",
            e: "$"
        },
        i = {
            cN: "type",
            b: "\\b[A-Z][\\w']*",
            r: 0
        },
        n = {
            b: "\\(",
            e: "\\)",
            i: '"',
            c: [r, a, {
                cN: "type",
                b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
            }, e.inherit(e.TM, {
                b: "[_a-z][\\w']*"
            }), t]
        };
    return {
        aliases: ["hs"],
        k: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
        c: [{
            bK: "module",
            e: "where",
            k: "module where",
            c: [n, t],
            i: "\\W\\.|;"
        }, {
            b: "\\bimport\\b",
            e: "$",
            k: "import qualified as hiding",
            c: [n, t],
            i: "\\W\\.|;"
        }, {
            cN: "class",
            b: "^(\\s*)?(class|instance)\\b",
            e: "where",
            k: "class family instance where",
            c: [i, n, t]
        }, {
            cN: "class",
            b: "\\b(data|(new)?type)\\b",
            e: "$",
            k: "data family type newtype deriving",
            c: [r, i, n, {
                b: "{",
                e: "}",
                c: n.c
            }, t]
        }, {
            bK: "default",
            e: "$",
            c: [i, n, t]
        }, {
            bK: "infix infixl infixr",
            e: "$",
            c: [e.CNM, t]
        }, {
            b: "\\bforeign\\b",
            e: "$",
            k: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
            c: [i, e.QSM, t]
        }, {
            cN: "meta",
            b: "#!\\/usr\\/bin\\/env runhaskell",
            e: "$"
        }, r, a, e.QSM, e.CNM, i, e.inherit(e.TM, {
            b: "^[_a-z][\\w']*"
        }), t, {
            b: "->|<-"
        }]
    }
}), hljs.registerLanguage("http", function(e) {
    var t = "HTTP/[0-9\\.]+";
    return {
        aliases: ["https"],
        i: "\\S",
        c: [{
            b: "^" + t,
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            b: "^[A-Z]+ (.*?) " + t + "$",
            rB: !0,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            }, {
                b: t
            }, {
                cN: "keyword",
                b: "[A-Z]+"
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                e: "$",
                r: 0
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: [],
                eW: !0
            }
        }]
    }
}), hljs.registerLanguage("javascript", function(e) {
    var t = "[A-Za-z$_][0-9A-Za-z$_]*",
        r = {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        a = {
            cN: "number",
            v: [{
                b: "\\b(0[bB][01]+)"
            }, {
                b: "\\b(0[oO][0-7]+)"
            }, {
                b: e.CNR
            }],
            r: 0
        },
        i = {
            cN: "subst",
            b: "\\$\\{",
            e: "\\}",
            k: r,
            c: []
        },
        n = {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE, i]
        };
    i.c = [e.ASM, e.QSM, n, a, e.RM];
    var s = i.c.concat([e.CBCM, e.CLCM]);
    return {
        aliases: ["js", "jsx"],
        k: r,
        c: [{
            cN: "meta",
            r: 10,
            b: /^\s*['"]use (strict|asm)['"]/
        }, {
            cN: "meta",
            b: /^#!/,
            e: /$/
        }, e.ASM, e.QSM, n, e.CLCM, e.CBCM, a, {
            b: /[{,]\s*/,
            r: 0,
            c: [{
                b: t + "\\s*:",
                rB: !0,
                r: 0,
                c: [{
                    cN: "attr",
                    b: t,
                    r: 0
                }]
            }]
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                cN: "function",
                b: "(\\(.*?\\)|" + t + ")\\s*=>",
                rB: !0,
                e: "\\s*=>",
                c: [{
                    cN: "params",
                    v: [{
                        b: t
                    }, {
                        b: /\(\s*\)/
                    }, {
                        b: /\(/,
                        e: /\)/,
                        eB: !0,
                        eE: !0,
                        k: r,
                        c: s
                    }]
                }]
            }, {
                b: /</,
                e: /(\/\w+|\w+\/)>/,
                sL: "xml",
                c: [{
                    b: /<\w+\s*\/>/,
                    skip: !0
                }, {
                    b: /<\w+/,
                    e: /(\/\w+|\w+\/)>/,
                    skip: !0,
                    c: [{
                        b: /<\w+\s*\/>/,
                        skip: !0
                    }, "self"]
                }]
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: t
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: s
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, e.METHOD_GUARD, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, e.UTM]
        }, {
            bK: "constructor",
            e: /\{/,
            eE: !0
        }],
        i: /#(?!!)/
    }
}), hljs.registerLanguage("ini", function(e) {
    var t = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: "'''",
            e: "'''",
            r: 10
        }, {
            b: '"""',
            e: '"""',
            r: 10
        }, {
            b: '"',
            e: '"'
        }, {
            b: "'",
            e: "'"
        }]
    };
    return {
        aliases: ["toml"],
        cI: !0,
        i: /\S/,
        c: [e.C(";", "$"), e.HCM, {
            cN: "section",
            b: /^\s*\[+/,
            e: /\]+/
        }, {
            b: /^[a-z0-9\[\]_-]+\s*=\s*/,
            e: "$",
            rB: !0,
            c: [{
                cN: "attr",
                b: /[a-z0-9\[\]_-]+/
            }, {
                b: /=/,
                eW: !0,
                r: 0,
                c: [{
                    cN: "literal",
                    b: /\bon|off|true|false|yes|no\b/
                }, {
                    cN: "variable",
                    v: [{
                        b: /\$[\w\d"][\w\d_]*/
                    }, {
                        b: /\$\{(.*?)}/
                    }]
                }, t, {
                    cN: "number",
                    b: /([\+\-]+)?[\d]+_[\d_]+/
                }, e.NM]
            }]
        }]
    }
}), hljs.registerLanguage("cpp", function(e) {
    var t = {
            cN: "keyword",
            b: "\\b[a-z\\d_]*_t\\b"
        },
        r = {
            cN: "string",
            v: [{
                b: '(u8?|U)?L?"',
                e: '"',
                i: "\\n",
                c: [e.BE]
            }, {
                b: '(u8?|U)?R"',
                e: '"',
                c: [e.BE]
            }, {
                b: "'\\\\?.",
                e: "'",
                i: "."
            }]
        },
        a = {
            cN: "number",
            v: [{
                b: "\\b(0b[01']+)"
            }, {
                b: "\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
            }, {
                b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
            }],
            r: 0
        },
        i = {
            cN: "meta",
            b: /#\s*[a-z]+\b/,
            e: /$/,
            k: {
                "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
            },
            c: [{
                b: /\\\n/,
                r: 0
            }, e.inherit(r, {
                cN: "meta-string"
            }), {
                cN: "meta-string",
                b: "<",
                e: ">",
                i: "\\n"
            }, e.CLCM, e.CBCM]
        },
        n = e.IR + "\\s*\\(",
        s = {
            keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return",
            built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
            literal: "true false nullptr NULL"
        },
        o = [t, e.CLCM, e.CBCM, a, r];
    return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
        k: s,
        i: "</",
        c: o.concat([i, {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: s,
            c: ["self", t]
        }, {
            b: e.IR + "::",
            k: s
        }, {
            v: [{
                b: /=/,
                e: /;/
            }, {
                b: /\(/,
                e: /\)/
            }, {
                bK: "new throw return else",
                e: /;/
            }],
            k: s,
            c: o.concat([{
                b: /\(/,
                e: /\)/,
                k: s,
                c: o.concat(["self"]),
                r: 0
            }]),
            r: 0
        }, {
            cN: "function",
            b: "(" + e.IR + "[\\*&\\s]+)+" + n,
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: s,
            i: /[^\w\s\*&]/,
            c: [{
                b: n,
                rB: !0,
                c: [e.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: s,
                r: 0,
                c: [e.CLCM, e.CBCM, r, a, t]
            }, e.CLCM, e.CBCM, i]
        }]),
        exports: {
            preprocessor: i,
            strings: r,
            k: s
        }
    }
}), hljs.registerLanguage("handlebars", function(e) {
    var t = {
        "builtin-name": "each in with if else unless bindattr action collection debugger log outlet template unbound view yield"
    };
    return {
        aliases: ["hbs", "html.hbs", "html.handlebars"],
        cI: !0,
        sL: "xml",
        c: [e.C("{{!(--)?", "(--)?}}"), {
            cN: "template-tag",
            b: /\{\{[#\/]/,
            e: /\}\}/,
            c: [{
                cN: "name",
                b: /[a-zA-Z\.-]+/,
                k: t,
                starts: {
                    eW: !0,
                    r: 0,
                    c: [e.QSM]
                }
            }]
        }, {
            cN: "template-variable",
            b: /\{\{/,
            e: /\}\}/,
            k: t
        }]
    }
}), hljs.registerLanguage("php", function(e) {
    var t = {
            b: "\\$+[a-zA-Z_-Ã¿][a-zA-Z0-9_-Ã¿]*"
        },
        r = {
            cN: "meta",
            b: /<\?(php)?|\?>/
        },
        a = {
            cN: "string",
            c: [e.BE, r],
            v: [{
                b: 'b"',
                e: '"'
            }, {
                b: "b'",
                e: "'"
            }, e.inherit(e.ASM, {
                i: null
            }), e.inherit(e.QSM, {
                i: null
            })]
        },
        i = {
            v: [e.BNM, e.CNM]
        };
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [e.HCM, e.C("//", "$", {
            c: [r]
        }), e.C("/\\*", "\\*/", {
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: e.UIR
        }), {
            cN: "string",
            b: /<<<['"]?\w+['"]?$/,
            e: /^\w+;?$/,
            c: [e.BE, {
                cN: "subst",
                v: [{
                    b: /\$\w+/
                }, {
                    b: /\{\$/,
                    e: /\}/
                }]
            }]
        }, r, {
            cN: "keyword",
            b: /\$this\b/
        }, t, {
            b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        }, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [e.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", t, e.CBCM, a, i]
            }]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [e.UTM]
        }, {
            bK: "use",
            e: ";",
            c: [e.UTM]
        }, {
            b: "=>"
        }, a, i]
    }
}), hljs.registerLanguage("objectivec", function(e) {
    var t = {
            cN: "built_in",
            b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
        },
        r = {
            keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
            literal: "false true FALSE TRUE nil YES NO NULL",
            built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
        },
        a = /[a-zA-Z@][a-zA-Z0-9_]*/,
        i = "@interface @class @protocol @implementation";
    return {
        aliases: ["mm", "objc", "obj-c"],
        k: r,
        l: a,
        i: "</",
        c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
            cN: "string",
            v: [{
                b: '@"',
                e: '"',
                i: "\\n",
                c: [e.BE]
            }, {
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            }]
        }, {
            cN: "meta",
            b: "#",
            e: "$",
            c: [{
                cN: "meta-string",
                v: [{
                    b: '"',
                    e: '"'
                }, {
                    b: "<",
                    e: ">"
                }]
            }]
        }, {
            cN: "class",
            b: "(" + i.split(" ").join("|") + ")\\b",
            e: "({|$)",
            eE: !0,
            k: i,
            l: a,
            c: [e.UTM]
        }, {
            b: "\\." + e.UIR,
            r: 0
        }]
    }
}), hljs.registerLanguage("makefile", function(e) {
    var t = {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [e.BE]
    };
    return {
        aliases: ["mk", "mak"],
        c: [e.HCM, {
            b: /^\w+\s*\W*=/,
            rB: !0,
            r: 0,
            starts: {
                e: /\s*\W*=/,
                eE: !0,
                starts: {
                    e: /$/,
                    r: 0,
                    c: [t]
                }
            }
        }, {
            cN: "section",
            b: /^[\w]+:\s*$/
        }, {
            cN: "meta",
            b: /^\.PHONY:/,
            e: /$/,
            k: {
                "meta-keyword": ".PHONY"
            },
            l: /[\.\w]+/
        }, {
            b: /^\t+/,
            e: /$/,
            r: 0,
            c: [e.QSM, t]
        }]
    }
}), hljs.registerLanguage("css", function(e) {
    var t = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{
                        cN: "built_in",
                        b: /[\w-]+/
                    }, {
                        b: /\(/,
                        e: /\)/,
                        c: [e.ASM, e.QSM]
                    }]
                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                    cN: "number",
                    b: "#[0-9A-Fa-f]+"
                }, {
                    cN: "meta",
                    b: "!important"
                }]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {
            cN: "selector-id",
            b: /#[A-Za-z0-9_-]+/
        }, {
            cN: "selector-class",
            b: /\.[A-Za-z0-9_-]+/
        }, {
            cN: "selector-attr",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "selector-pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        }, {
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [{
                cN: "keyword",
                b: /\w+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [e.ASM, e.QSM, e.CSSNM]
            }]
        }, {
            cN: "selector-tag",
            b: "[a-zA-Z-][a-zA-Z0-9_-]*",
            r: 0
        }, {
            b: "{",
            e: "}",
            i: /\S/,
            c: [e.CBCM, t]
        }]
    }
}), hljs.registerLanguage("perl", function(e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
        r = {
            cN: "subst",
            b: "[$@]\\{",
            e: "\\}",
            k: t
        },
        a = {
            b: "->{",
            e: "}"
        },
        i = {
            v: [{
                b: /\$\d/
            }, {
                b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
            }, {
                b: /[\$%@][^\s\w{]/,
                r: 0
            }]
        },
        n = [e.BE, r, i],
        s = [i, e.HCM, e.C("^\\=\\w", "\\=cut", {
            eW: !0
        }), a, {
            cN: "string",
            c: n,
            v: [{
                b: "q[qwxr]?\\s*\\(",
                e: "\\)",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\[",
                e: "\\]",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\{",
                e: "\\}",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\|",
                e: "\\|",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\<",
                e: "\\>",
                r: 5
            }, {
                b: "qw\\s+q",
                e: "q",
                r: 5
            }, {
                b: "'",
                e: "'",
                c: [e.BE]
            }, {
                b: '"',
                e: '"'
            }, {
                b: "`",
                e: "`",
                c: [e.BE]
            }, {
                b: "{\\w+}",
                c: [],
                r: 0
            }, {
                b: "-?\\w+\\s*\\=\\>",
                c: [],
                r: 0
            }]
        }, {
            cN: "number",
            b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            r: 0
        }, {
            b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
            k: "split return print reverse grep",
            r: 0,
            c: [e.HCM, {
                cN: "regexp",
                b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                r: 10
            }, {
                cN: "regexp",
                b: "(m|qr)?/",
                e: "/[a-z]*",
                c: [e.BE],
                r: 0
            }]
        }, {
            cN: "function",
            bK: "sub",
            e: "(\\s*\\(.*?\\))?[;{]",
            eE: !0,
            r: 5,
            c: [e.TM]
        }, {
            b: "-\\w\\b",
            r: 0
        }, {
            b: "^__DATA__$",
            e: "^__END__$",
            sL: "mojolicious",
            c: [{
                b: "^@@.*",
                e: "$",
                cN: "comment"
            }]
        }];
    return r.c = s, a.c = s, {
        aliases: ["pl", "pm"],
        l: /[\w\.]+/,
        k: t,
        c: s
    }
}), hljs.registerLanguage("bash", function(e) {
    var t = {
            cN: "variable",
            v: [{
                b: /\$[\w\d#@][\w\d_]*/
            }, {
                b: /\$\{(.*?)}/
            }]
        },
        r = {
            cN: "string",
            b: /"/,
            e: /"/,
            c: [e.BE, t, {
                cN: "variable",
                b: /\$\(/,
                e: /\)/,
                c: [e.BE]
            }]
        },
        a = {
            cN: "string",
            b: /'/,
            e: /'/
        };
    return {
        aliases: ["sh", "zsh"],
        l: /-?[a-z\._]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            _: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "meta",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, e.HCM, r, a, t]
    }
}), hljs.registerLanguage("ruby", function(e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
        r = {
            keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
            literal: "true false nil"
        },
        a = {
            cN: "doctag",
            b: "@[A-Za-z]+"
        },
        i = {
            b: "#<",
            e: ">"
        },
        n = [e.C("#", "$", {
            c: [a]
        }), e.C("^\\=begin", "^\\=end", {
            c: [a],
            r: 10
        }), e.C("^__END__", "\\n$")],
        s = {
            cN: "subst",
            b: "#\\{",
            e: "}",
            k: r
        },
        o = {
            cN: "string",
            c: [e.BE, s],
            v: [{
                b: /'/,
                e: /'/
            }, {
                b: /"/,
                e: /"/
            }, {
                b: /`/,
                e: /`/
            }, {
                b: "%[qQwWx]?\\(",
                e: "\\)"
            }, {
                b: "%[qQwWx]?\\[",
                e: "\\]"
            }, {
                b: "%[qQwWx]?{",
                e: "}"
            }, {
                b: "%[qQwWx]?<",
                e: ">"
            }, {
                b: "%[qQwWx]?/",
                e: "/"
            }, {
                b: "%[qQwWx]?%",
                e: "%"
            }, {
                b: "%[qQwWx]?-",
                e: "-"
            }, {
                b: "%[qQwWx]?\\|",
                e: "\\|"
            }, {
                b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
            }, {
                b: /<<(-?)\w+$/,
                e: /^\s*\w+$/
            }]
        },
        c = {
            cN: "params",
            b: "\\(",
            e: "\\)",
            endsParent: !0,
            k: r
        },
        l = [o, i, {
            cN: "class",
            bK: "class module",
            e: "$|;",
            i: /=/,
            c: [e.inherit(e.TM, {
                b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
            }), {
                b: "<\\s*",
                c: [{
                    b: "(" + e.IR + "::)?" + e.IR
                }]
            }].concat(n)
        }, {
            cN: "function",
            bK: "def",
            e: "$|;",
            c: [e.inherit(e.TM, {
                b: t
            }), c].concat(n)
        }, {
            b: e.IR + "::"
        }, {
            cN: "symbol",
            b: e.UIR + "(\\!|\\?)?:",
            r: 0
        }, {
            cN: "symbol",
            b: ":(?!\\s)",
            c: [o, {
                b: t
            }],
            r: 0
        }, {
            cN: "number",
            b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            r: 0
        }, {
            b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
        }, {
            cN: "params",
            b: /\|/,
            e: /\|/,
            k: r
        }, {
            b: "(" + e.RSR + ")\\s*",
            c: [i, {
                cN: "regexp",
                c: [e.BE, s],
                i: /\n/,
                v: [{
                    b: "/",
                    e: "/[a-z]*"
                }, {
                    b: "%r{",
                    e: "}[a-z]*"
                }, {
                    b: "%r\\(",
                    e: "\\)[a-z]*"
                }, {
                    b: "%r!",
                    e: "![a-z]*"
                }, {
                    b: "%r\\[",
                    e: "\\][a-z]*"
                }]
            }].concat(n),
            r: 0
        }].concat(n);
    s.c = l, c.c = l;
    var d = [{
        b: /^\s*=>/,
        starts: {
            e: "$",
            c: l
        }
    }, {
        cN: "meta",
        b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
        starts: {
            e: "$",
            c: l
        }
    }];
    return {
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        k: r,
        i: /\/\*/,
        c: n.concat(d).concat(l)
    }
}), hljs.registerLanguage("haml", function(e) {
    return {
        cI: !0,
        c: [{
            cN: "meta",
            b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
            r: 10
        }, e.C("^\\s*(!=#|=#|-#|/).*$", !1, {
            r: 0
        }), {
            b: "^\\s*(-|=|!=)(?!#)",
            starts: {
                e: "\\n",
                sL: "ruby"
            }
        }, {
            cN: "tag",
            b: "^\\s*%",
            c: [{
                cN: "selector-tag",
                b: "\\w+"
            }, {
                cN: "selector-id",
                b: "#[\\w-]+"
            }, {
                cN: "selector-class",
                b: "\\.[\\w-]+"
            }, {
                b: "{\\s*",
                e: "\\s*}",
                c: [{
                    b: ":\\w+\\s*=>",
                    e: ",\\s+",
                    rB: !0,
                    eW: !0,
                    c: [{
                        cN: "attr",
                        b: ":\\w+"
                    }, e.ASM, e.QSM, {
                        b: "\\w+",
                        r: 0
                    }]
                }]
            }, {
                b: "\\(\\s*",
                e: "\\s*\\)",
                eE: !0,
                c: [{
                    b: "\\w+\\s*=",
                    e: "\\s+",
                    rB: !0,
                    eW: !0,
                    c: [{
                        cN: "attr",
                        b: "\\w+",
                        r: 0
                    }, e.ASM, e.QSM, {
                        b: "\\w+",
                        r: 0
                    }]
                }]
            }]
        }, {
            b: "^\\s*[=~]\\s*"
        }, {
            b: "#{",
            starts: {
                e: "}",
                sL: "ruby"
            }
        }]
    }
}), hljs.registerLanguage("go", function(e) {
    var t = {
        keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
        literal: "true false iota nil",
        built_in: "append cap close complex copy imag len make new panic print println real recover delete"
    };
    return {
        aliases: ["golang"],
        k: t,
        i: "</",
        c: [e.CLCM, e.CBCM, {
            cN: "string",
            v: [e.QSM, {
                b: "'",
                e: "[^\\\\]'"
            }, {
                b: "`",
                e: "`"
            }]
        }, {
            cN: "number",
            v: [{
                b: e.CNR + "[dflsi]",
                r: 1
            }, e.CNM]
        }, {
            b: /:=/
        }, {
            cN: "function",
            bK: "func",
            e: /\s*\{/,
            eE: !0,
            c: [e.TM, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                i: /["']/
            }]
        }]
    }
}), hljs.registerLanguage("cs", function(e) {
    var t = {
            keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while nameof add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
            literal: "null false true"
        },
        r = {
            cN: "string",
            b: '@"',
            e: '"',
            c: [{
                b: '""'
            }]
        },
        a = e.inherit(r, {
            i: /\n/
        }),
        i = {
            cN: "subst",
            b: "{",
            e: "}",
            k: t
        },
        n = e.inherit(i, {
            i: /\n/
        }),
        s = {
            cN: "string",
            b: /\$"/,
            e: '"',
            i: /\n/,
            c: [{
                b: "{{"
            }, {
                b: "}}"
            }, e.BE, n]
        },
        o = {
            cN: "string",
            b: /\$@"/,
            e: '"',
            c: [{
                b: "{{"
            }, {
                b: "}}"
            }, {
                b: '""'
            }, i]
        },
        c = e.inherit(o, {
            i: /\n/,
            c: [{
                b: "{{"
            }, {
                b: "}}"
            }, {
                b: '""'
            }, n]
        });
    i.c = [o, s, r, e.ASM, e.QSM, e.CNM, e.CBCM], n.c = [c, s, a, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, {
        i: /\n/
    })];
    var l = {
            v: [o, s, r, e.ASM, e.QSM]
        },
        d = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
    return {
        aliases: ["csharp"],
        k: t,
        i: /::/,
        c: [e.C("///", "$", {
            rB: !0,
            c: [{
                cN: "doctag",
                v: [{
                    b: "///",
                    r: 0
                }, {
                    b: "\x3c!--|--\x3e"
                }, {
                    b: "</?",
                    e: ">"
                }]
            }]
        }), e.CLCM, e.CBCM, {
            cN: "meta",
            b: "#",
            e: "$",
            k: {
                "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
            }
        }, l, e.CNM, {
            bK: "class interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.TM, e.CLCM, e.CBCM]
        }, {
            bK: "namespace",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.inherit(e.TM, {
                b: "[a-zA-Z](\\.?\\w)*"
            }), e.CLCM, e.CBCM]
        }, {
            bK: "new return throw await",
            r: 0
        }, {
            cN: "function",
            b: "(" + d + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{
                b: e.IR + "\\s*\\(",
                rB: !0,
                c: [e.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                k: t,
                r: 0,
                c: [l, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }]
    }
}), hljs.registerLanguage("java", function(e) {
    var t = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
        r = {
            cN: "number",
            b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
            r: 0
        };
    return {
        aliases: ["jsp"],
        k: t,
        i: /<\/|#/,
        c: [e.C("/\\*\\*", "\\*/", {
            r: 0,
            c: [{
                b: /\w+@/,
                r: 0
            }, {
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "new throw return else",
            r: 0
        }, {
            cN: "function",
            b: "([Ã€-Ê¸a-zA-Z_$][Ã€-Ê¸a-zA-Z_$0-9]*(<[Ã€-Ê¸a-zA-Z_$][Ã€-Ê¸a-zA-Z_$0-9]*(\\s*,\\s*[Ã€-Ê¸a-zA-Z_$][Ã€-Ê¸a-zA-Z_$0-9]*)*>)?\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{
                b: e.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [e.UTM]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }, r, {
            cN: "meta",
            b: "@[A-Za-z]+"
        }]
    }
}), hljs.registerLanguage("apache", function(e) {
    var t = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        aliases: ["apacheconf"],
        cI: !0,
        c: [e.HCM, {
            cN: "section",
            b: "</?",
            e: ">"
        }, {
            cN: "attribute",
            b: /\w+/,
            r: 0,
            k: {
                nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [{
                    cN: "meta",
                    b: "\\s\\[",
                    e: "\\]$"
                }, {
                    cN: "variable",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", t]
                }, t, e.QSM]
            }
        }],
        i: /\S/
    }
});
! function(t) {
    "use strict";
    t.loadCSS || (t.loadCSS = function() {});
    var e = loadCSS.relpreload = {};
    if (e.support = function() {
            var e;
            try {
                e = t.document.createElement("link").relList.supports("preload")
            } catch (t) {
                e = !1
            }
            return function() {
                return e
            }
        }(), e.bindMediaToggle = function(t) {
            function e() {
                t.media = a
            }
            var a = t.media || "all";
            t.addEventListener ? t.addEventListener("load", e) : t.attachEvent && t.attachEvent("onload", e), setTimeout(function() {
                t.rel = "stylesheet", t.media = "only x"
            }), setTimeout(e, 3e3)
        }, e.poly = function() {
            if (!e.support())
                for (var a = t.document.getElementsByTagName("link"), n = 0; n < a.length; n++) {
                    var o = a[n];
                    "preload" !== o.rel || "style" !== o.getAttribute("as") || o.getAttribute("data-loadcss") || (o.setAttribute("data-loadcss", !0), e.bindMediaToggle(o))
                }
        }, !e.support()) {
        e.poly();
        var a = t.setInterval(e.poly, 500);
        t.addEventListener ? t.addEventListener("load", function() {
            e.poly(), t.clearInterval(a)
        }) : t.attachEvent && t.attachEvent("onload", function() {
            e.poly(), t.clearInterval(a)
        })
    }
    "undefined" != typeof exports ? exports.loadCSS = loadCSS : t.loadCSS = loadCSS
}("undefined" != typeof global ? global : this);
! function(t, i, e, n) {
    function s(i, e) {
        this.element = i, this.options = t.extend({}, a, e), this.scroll_timer = null, this._defaults = a, this._name = l, this.init()
    }
    var l = "readingTime",
        a = {
            bubble: "#postreadingtime"
        };
    s.prototype = {
        init: function() {
            t(i).scroll(t.proxy(this.updateTime, this))
        },
        updateTime: function() {
            var n = 0,
                s = t(this.options.bubble),
                l = t(this.element),
                a = t(i).height(),
                h = a / t(e).height() * a,
                o = t(i).scrollTop() / (t(e).height() - a),
                n = (s.height(), this.calculate_total_time_words(l, this.element) / 60),
                u = Math.ceil(n - n * o),
                r = "";
            u > 1 ? r = u + " " + s.data("minutes") : o >= 1 ? r = s.data("thanks") : u <= 1 && (r = "1 " + s.data("minute")), s.text(r).fadeIn(500), null !== this.scroll_timer && clearTimeout(this.scroll_timer), this.scroll_timer = setTimeout(function() {
                s.fadeOut()
            }, 1500)
        },
        calculate_total_time_words: function(i, e) {
            var n = 0;
            return i.each(function() {
                n += Math.round(60 * t(e).text().split(" ").length / 200)
            }), n
        }
    }, t.fn[l] = function(i) {
        return this.each(function() {
            t.data(this, "plugin_" + l) || t.data(this, "plugin_" + l, new s(this, i))
        })
    }
}(jQuery, window, document);
! function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return e.svg4everybody = t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, function() {
    function e(e, t, n) {
        if (n) {
            var i = document.createDocumentFragment(),
                a = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
            a && t.setAttribute("viewBox", a);
            for (var o = n.cloneNode(!0); o.childNodes.length;) i.appendChild(o.firstChild);
            e.appendChild(i)
        }
    }

    function t(t) {
        t.onreadystatechange = function() {
            if (4 === t.readyState) {
                var n = t._cachedDocument;
                n || (n = t._cachedDocument = document.implementation.createHTMLDocument(""), n.body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function(i) {
                    var a = t._cachedTarget[i.id];
                    a || (a = t._cachedTarget[i.id] = n.getElementById(i.id)), e(i.parent, i.svg, a)
                })
            }
        }, t.onreadystatechange()
    }

    function n(n) {
        function a() {
            for (var n = 0; n < m.length;) {
                var d = m[n],
                    u = d.parentNode,
                    c = i(u),
                    s = d.getAttribute("xlink:href") || d.getAttribute("href");
                if (!s && r.attributeName && (s = d.getAttribute(r.attributeName)), c && s) {
                    if (o)
                        if (!r.validate || r.validate(s, c, d)) {
                            u.removeChild(d);
                            var g = s.split("#"),
                                b = g.shift(),
                                h = g.join("#");
                            if (b.length) {
                                var p = l[b];
                                p || (p = l[b] = new XMLHttpRequest, p.open("GET", b), p.send(), p._embeds = []), p._embeds.push({
                                    parent: u,
                                    svg: c,
                                    id: h
                                }), t(p)
                            } else e(u, c, document.getElementById(h))
                        } else ++n, ++v
                } else ++n
            }(!m.length || m.length - v > 0) && f(a, 67)
        }
        var o, r = Object(n),
            d = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            u = /\bAppleWebKit\/(\d+)\b/,
            c = /\bEdge\/12\.(\d+)\b/,
            s = /\bEdge\/.(\d+)\b/,
            g = window.top !== window.self;
        o = "polyfill" in r ? r.polyfill : d.test(navigator.userAgent) || (navigator.userAgent.match(c) || [])[1] < 10547 || (navigator.userAgent.match(u) || [])[1] < 537 || s.test(navigator.userAgent) && g;
        var l = {},
            f = window.requestAnimationFrame || setTimeout,
            m = document.getElementsByTagName("use"),
            v = 0;
        o && a()
    }

    function i(e) {
        for (var t = e;
            "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
        return t
    }
    return n
});
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    c = !l && !h;
                (p || c) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var u in t) t[u].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var n in t) {
            var r = t[n];
            for (var s in this.waypoints[n]) {
                var a, l, h, p, c, u = this.waypoints[n][s],
                    d = u.options.offset,
                    f = u.triggerPoint,
                    w = 0,
                    y = null == f;
                u.element !== u.element.window && (w = u.adapter.offset()[r.offsetProp]), "function" == typeof d ? d = d.apply(u) : "string" == typeof d && (d = parseFloat(d), u.options.offset.indexOf("%") > -1 && (d = Math.ceil(r.contextDimension * d / 100))), a = r.contextScroll - r.contextOffset, u.triggerPoint = w + a - d, l = f < r.oldScroll, h = u.triggerPoint >= r.oldScroll, p = l && h, c = !l && !h, !y && p ? (u.queueTrigger(r.backward), o[u.group.id] = u.group) : !y && c ? (u.queueTrigger(r.forward), o[u.group.id] = u.group) : y && r.oldScroll >= u.triggerPoint && (u.queueTrigger(r.forward), o[u.group.id] = u.group)
            }
        }
        for (var g in o) o[g].flushTriggers();
        return this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
jQuery(document).ready(function() {
    "use strict";

    function e(e) {
        return !("undefined" == typeof ecko_theme_config || !ecko_theme_config.hasOwnProperty(e) || "" === ecko_theme_config[e]) && ecko_theme_config[e]
    }

    function t() {
        jQuery(".postcontents").fitVids()
    }

    function o() {
        jQuery("pre code").each(function(e, t) {
            hljs.highlightBlock(t)
        })
    }

    function i() {
        jQuery(".postauthors-items").children().length <= 1 && jQuery(".postauthors").remove()
    }

    function n() {
        ("Microsoft Internet Explorer" == navigator.appName || navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/) || void 0 !== jQuery.browser && 1 == jQuery.browser.msie) && void 0 !== svg4everybody() && svg4everybody()
    }

    function s() {
        new ClipboardJS(".postshare-item-permalink a"), jQuery(".postshare-item-permalink a").on("click", function(e) {
            jQuery(".postshare-item-tooltip").css("opacity", "1.0"), setTimeout(function() {
                jQuery(".postshare-item-tooltip").css("opacity", "0.0")
            }, 3e3), e.preventDefault()
        })
    }

    function r() {
        jQuery(".postcontents").readingTime()
    }

    function a() {
        e("social_instagram") && (jQuery(".social-instagram").attr("href", e("social_instagram")), jQuery(".social-instagram").show()), e("social_github") && (jQuery(".social-github").attr("href", e("social_github")), jQuery(".social-github").show()), e("social_linkedin") && (jQuery(".social-linkedin").attr("href", e("social_linkedin")), jQuery(".social-linkedin").show())
    }

    function u() {
        e("disqus_id") && jQuery(".postcomments").css("display", "block")
    }

    function c(e, t) {
        var o = document,
            i = o.createElement("script");
        i.src = "https://" + ecko_theme_config.disqus_id + ".disqus.com/embed.js", console.log(i.src), i.setAttribute("data-timestamp", +new Date), (o.head || o.body).appendChild(i)
    }

    function l() {
        e("google_analytics_id") && jQuery.getScript("https://www.googletagmanager.com/gtag/js?id=" + ecko_theme_config.google_analytics_id, function() {
            function e() {
                dataLayer.push(arguments)
            }
            window.dataLayer = window.dataLayer || [], e("js", new Date), e("config", ecko_theme_config.google_analytics_id)
        })
    }

    function p() {
        jQuery(".navigation").hasClass("navigation__open") ? jQuery(document).unbind("mouseup", f) : jQuery(document).bind("mouseup", f), jQuery(".navigation").toggleClass("navigation__open"), jQuery(".navigation-icon").toggleClass("navigation-icon__active"), jQuery(".navigation-main").toggleClass("navigation-main__active")
    }

    function d() {
        var e = jQuery(".postflow-readtime"),
            t = 100 * jQuery(window).scrollTop() / (jQuery(".postcontents").height() + 280 - jQuery(window).height() + jQuery(".postcontents").offset().top),
            o = 360 * t / 100;
        o > 360 && (o = 360), t > 50 ? e.addClass("postflow-readtime-gt-50") : e.removeClass("postflow-readtime-gt-50"), jQuery(".postflow-readtime-progress-fill").css("transform", "rotate(" + o + "deg)")
    }! function() {
        t(), o(), i(), u(), l(), s(), r(), a()
    }(), jQuery(window).load(function() {
        n()
    }), jQuery(".postcomments-view").on("click", function() {
        var e = jQuery(".postcomments").data("page-url"),
            t = jQuery(".postcomments").data("page-id");
        jQuery(".postcomments-view").hide(), jQuery(".postcomments-disqus").css("display", "block"), c(e, t)
    });
    var y = jQuery(".subscribe-form");
    y.submit(function(e) {
        if ("" === jQuery(".subscribe-input").val()) return void e.preventDefault();
        jQuery.ajax({
            type: y.attr("method"),
            url: y.attr("action"),
            data: y.serialize(),
            success: function(e) {
                jQuery(".subscribe-submit").addClass("subscribe-submit__success"), jQuery(".subscribe-input").val("").attr("placeholder", jQuery(".subscribe-submit").data("success-input"))
            },
            error: function(e) {}
        }), e.preventDefault()
    }), jQuery(".navigation-button").on("click", function() {
        p()
    });
    var f = function(e) {
            jQuery(".navigation");
            jQuery(".navigation").is(e.target) || 0 !== jQuery(".navigation").has(e.target).length || (p(), jQuery(document).unbind("mouseup", f))
        },
        m = !1,
        g = !0;
    jQuery(".postmain").waypoint(function(e) {
        "down" == e ? (g = !1, m || (jQuery(".postflow").addClass("postflow__visible"), jQuery(".postreadingtime").addClass("postreadingtime__visible"))) : (g = !0, jQuery(".postflow").removeClass("postflow__visible"), jQuery(".postreadingtime").removeClass("postreadingtime__visible"))
    }, {
        offset: "130px"
    }), jQuery(".postfooter").waypoint(function(e) {
        "down" == e ? (m = !0, jQuery(".postreadingtime").removeClass("postreadingtime__visible")) : (m = !1, jQuery(".postreadingtime").addClass("postreadingtime__visible"))
    }, {
        offset: "100%"
    });
    if (jQuery(".postcontents").length) {
        var j = [];
        jQuery(".postcontents h1, .postcontents h2, .postcontents h3").waypoint(function(e) {
            var t = jQuery(this);
            "down" === e && jQuery(".postflow .postflow-current").fadeOut(200, function() {
                j.push(jQuery(".postflow .postflow-current").text()), jQuery(this).text(t[0].element.innerText).fadeIn(200)
            }), "up" === e && jQuery(".postflow .postflow-current").fadeOut(200, function() {
                jQuery(this).text(j.pop()).fadeIn(200)
            })
        })
    }
    if (jQuery(".postcover-arrow").on("click", function() {
            jQuery("html, body").animate({
                scrollTop: jQuery(".postcover").height()
            }, 600)
        }), jQuery(".postflow-readtime").length) {
        var Q = !1;
        jQuery(window).scroll(function() {
            Q = !0
        }), setInterval(function() {
            Q && (d(), Q = !1)
        }, 500)
    }
});