/*! Built with http://stenciljs.com */
App.loadBundle("./chunk2.js", ["exports"], function (e) { window.App.h, e.getButtonClassMap = function (e, n) { return e ? (_a = {}, _a[e] = !0, _a[e + "-" + n] = !0, _a) : {}; var _a; }, e.getElementClassMap = function (e) { var n = {}; for (var t = 0; t < e.length; t++)
    n[e[t]] = !0; return n; }, e.openURL = function (e, n, t) {
    if (t === void 0) { t = !1; }
    if (e && "#" !== e[0] && -1 === e.indexOf("://")) {
        var r_1 = document.querySelector("ion-router");
        if (r_1)
            return n && n.preventDefault(), r_1.componentOnReady().then(function () { return r_1.push(e, t); });
    }
    return Promise.resolve();
}, e.createThemedClasses = function (e, n, t) { return t.split(" ").reduce(function (t, r) { return t[r] = !0, e && (t[r + "-" + e] = !0, n && (t[r + "-" + n] = !0, t[r + "-" + e + "-" + n] = !0)), t; }, {}); }, e.getClassMap = function (e) { var n = {}; return function (e) { return e ? e.split(" ").filter(function (e) { return "" !== e.trim(); }) : []; }(e).forEach(function (e) { return n[e] = !0; }), n; }; });
