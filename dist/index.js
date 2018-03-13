!(function(t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e(require('react')))
        : 'function' == typeof define && define.amd
            ? define(['react'], e)
            : 'object' == typeof exports
                ? (exports.ReactMinimalDropdown = e(require('react')))
                : (t.ReactMinimalDropdown = e(t.React));
})('undefined' != typeof self ? self : this, function(t) {
    return (function(t) {
        function e(n) {
            if (o[n]) return o[n].exports;
            var r = (o[n] = { i: n, l: !1, exports: {} });
            return t[n].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
        }
        var o = {};
        return (
            (e.m = t),
            (e.c = o),
            (e.d = function(t, o, n) {
                e.o(t, o) ||
                    Object.defineProperty(t, o, { configurable: !1, enumerable: !0, get: n });
            }),
            (e.n = function(t) {
                var o =
                    t && t.__esModule
                        ? function() {
                              return t.default;
                          }
                        : function() {
                              return t;
                          };
                return e.d(o, 'a', o), o;
            }),
            (e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (e.p = '/'),
            e((e.s = './src/Dropdown.js'))
        );
    })({
        './src/Content.js': function(t, e, o) {
            'use strict';
            function n(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function r(t, e) {
                var o = {};
                for (var n in t)
                    e.indexOf(n) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(t, n) && (o[n] = t[n]));
                return o;
            }
            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            }
            function s(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
            }
            function c(t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function, not ' + typeof e,
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                })),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
            }
            Object.defineProperty(e, '__esModule', { value: !0 });
            var a =
                    Object.assign ||
                    function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var o = arguments[e];
                            for (var n in o)
                                Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
                        }
                        return t;
                    },
                u = (function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                'value' in n && (n.writable = !0),
                                Object.defineProperty(t, n.key, n);
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e;
                    };
                })(),
                l = o('react'),
                p = n(l),
                f = o('./src/Dropdown.css'),
                d = n(f),
                h = (function(t) {
                    function e() {
                        return (
                            i(this, e),
                            s(
                                this,
                                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments),
                            )
                        );
                    }
                    return (
                        c(e, t),
                        u(e, [
                            {
                                key: 'render',
                                value: function() {
                                    var t = this,
                                        e = this.props,
                                        o = e.children,
                                        n = e.className,
                                        i = void 0 === n ? '' : n,
                                        s = r(e, ['children', 'className']);
                                    return p.default.createElement(
                                        'div',
                                        a({}, s, {
                                            ref: function(e) {
                                                t.node = e;
                                            },
                                            className:
                                                'ReactMinimalDropdown__Content ' +
                                                (d.default.content || '') +
                                                ' ' +
                                                i,
                                        }),
                                        p.default.createElement(
                                            'div',
                                            { className: d.default.inner },
                                            o,
                                        ),
                                    );
                                },
                            },
                            {
                                key: 'DOMNode',
                                get: function() {
                                    return this.node;
                                },
                            },
                        ]),
                        e
                    );
                })(p.default.PureComponent);
            e.default = h;
        },
        './src/Dropdown.css': function(t, e) {
            t.exports = {
                wrapper: 'zf3v5bFsvQKV1UXE0ByW2',
                block: '_1cNEpcSZO0FFSfA6RFEENf',
                open: 'rzc6tibxcrDUVB8-e1iru',
                content: '_2st2ZnKryLnDKae-CjKfLb',
                closed: '_3L7bUwVGYUc9SDjLXC0um_',
                trigger: '_1tPuT-jHopu4EDuWKDfSnw',
                arrow: 'lOhdVQPrvUhmcW-Bv6Yjd',
                inner: '_1tGz9fBQvw15Og6Yg37a58',
                beak: '_15GWx86rte8lff54UMs40f',
                top: 'KTROY8c-qwsT55UDARClP',
                right: '_20W24YMBsue06xrxhfVdV0',
                bottom: 'M5pYMnrqrzi5UcZ7lxeQe',
                left: '_2oRNzuRo_MHY93aKg-gUEB',
                'edge--left': '_3nko7N4hNb38jTqUNUBU7E',
                'edge--right': '_2RLux8c-jZjbewOWUFIiKt',
                'edge--bottom': '_2ZUDO0qZ43dpZYJJd0DwcB',
                'edge--top': '_30omCOSM7IEz1on2JYp768',
            };
        },
        './src/Dropdown.js': function(t, e, o) {
            'use strict';
            function n(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function r(t, e, o) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = o),
                    t
                );
            }
            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            }
            function s(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
            }
            function c(t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function, not ' + typeof e,
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                })),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.Content = e.Trigger = e.Dropdown = void 0);
            var a =
                    Object.assign ||
                    function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var o = arguments[e];
                            for (var n in o)
                                Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
                        }
                        return t;
                    },
                u = (function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                'value' in n && (n.writable = !0),
                                Object.defineProperty(t, n.key, n);
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e;
                    };
                })(),
                l = o('react'),
                p = n(l),
                f = o('./src/Trigger.js'),
                d = n(f),
                h = o('./src/Content.js'),
                g = n(h),
                b = o('./src/Dropdown.css'),
                w = n(b),
                v = (e.Dropdown = (function(t) {
                    function e() {
                        var t, o, n, r;
                        i(this, e);
                        for (var c = arguments.length, a = Array(c), u = 0; u < c; u++)
                            a[u] = arguments[u];
                        return (
                            (o = n = s(
                                this,
                                (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                                    t,
                                    [this].concat(a),
                                ),
                            )),
                            (n.state = { show: n.props.show, direction: n.props.direction }),
                            (n.addEvents = function() {
                                window.addEventListener('click', n.closeOnClick),
                                    window.addEventListener('touchstart', n.closeOnClick),
                                    window.addEventListener('keydown', n.closeOnEsc),
                                    n.props.ignoreResize ||
                                        window.addEventListener('resize', n.calculatePosition),
                                    n.props.ignoreScroll ||
                                        window.addEventListener('scroll', n.calculatePosition);
                            }),
                            (n.removeEvents = function() {
                                window.removeEventListener('click', n.closeOnClick),
                                    window.removeEventListener('touchstart', n.closeOnClick),
                                    window.removeEventListener('keydown', n.closeOnEsc),
                                    window.removeEventListener('resize', n.calculatePosition),
                                    window.removeEventListener('scroll', n.calculatePosition);
                            }),
                            (n.closeOnEsc = function(t) {
                                27 === t.keyCode && n.hide();
                            }),
                            (n.closeOnClick = function(t) {
                                t.target !== n.wrapperEl &&
                                    !n.wrapperEl.contains(t.target) &&
                                    n.state.show &&
                                    n.hide();
                            }),
                            (n.setContentPosition = function() {
                                var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {},
                                    e = t.top,
                                    o = t.right,
                                    r = t.bottom,
                                    i = t.left;
                                (n.contentEl.DOMNode.style.top =
                                    'number' == typeof e ? e + 'px' : 'auto'),
                                    (n.contentEl.DOMNode.style.right =
                                        'number' == typeof o ? o + 'px' : 'auto'),
                                    (n.contentEl.DOMNode.style.bottom =
                                        'number' == typeof r ? r + 'px' : 'auto'),
                                    (n.contentEl.DOMNode.style.left =
                                        'number' == typeof i ? i + 'px' : 'auto');
                            }),
                            (n.getWrapperBounds = function() {
                                return n.wrapperEl.getBoundingClientRect();
                            }),
                            (n.getTriggerBounds = function() {
                                return n.triggerEl.DOMNode.getBoundingClientRect();
                            }),
                            (n.getDirectionMode = function() {
                                return ['left', 'right'].includes(n.state.direction)
                                    ? 'horizontal'
                                    : 'vertical';
                            }),
                            (n.getEdgePosition = function() {
                                var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : n.props.edge,
                                    e = n.getTriggerBounds(),
                                    o = n.getWrapperBounds(),
                                    r = n.getContentBounds();
                                return 'horizontal' === n.getDirectionMode()
                                    ? 'top' === t
                                        ? { top: e.top - o.top }
                                        : 'bottom' === t
                                            ? { top: e.bottom - o.top - r.height }
                                            : { top: e.top - o.top - r.height / 2 + e.height / 2 }
                                    : 'left' === t
                                        ? { left: e.left - o.left }
                                        : 'right' === t
                                            ? { left: e.right - o.left - r.width }
                                            : { left: e.left - o.left - r.width / 2 + e.width / 2 };
                            }),
                            (n.getContentPosition = function() {
                                var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : n.props.direction,
                                    e =
                                        arguments.length > 1 && void 0 !== arguments[1]
                                            ? arguments[1]
                                            : n.props.gap,
                                    o = n.getTriggerBounds(),
                                    r = n.getWrapperBounds();
                                return 'left' === t
                                    ? { right: r.right - o.right + o.width + (e || 0), left: null }
                                    : 'right' === t
                                        ? { left: o.right - r.left + (e || 0), right: null }
                                        : 'top' === t
                                            ? {
                                                  bottom: r.bottom - o.bottom + o.height + (e || 0),
                                                  top: null,
                                              }
                                            : 'bottom' === t
                                                ? {
                                                      top: o.top - r.top + o.height + (e || 0),
                                                      bottom: null,
                                                  }
                                                : void 0;
                            }),
                            (n.shouldContentBeAdjusted = function() {
                                var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : n.props.direction,
                                    e = n.getContentBounds(),
                                    o = Math.max(
                                        document.documentElement.clientWidth,
                                        window.innerWidth || 0,
                                    );
                                if ('left' === t && e.left < 0 && e.right < o && n.props.adjust)
                                    return !0;
                                if ('right' === t && e.right > o && e.left >= 0 && n.props.adjust)
                                    return !0;
                                var r = Math.max(
                                    document.documentElement.clientHeight,
                                    window.innerHeight || 0,
                                );
                                return (
                                    !!(
                                        'top' === t &&
                                        e.top < 0 &&
                                        e.bottom < r &&
                                        n.props.adjust
                                    ) ||
                                    !!(
                                        'bottom' === t &&
                                        e.bottom > r &&
                                        e.top < r &&
                                        n.props.adjust
                                    )
                                );
                            }),
                            (n.adjustContentPosition = function() {
                                var t =
                                    arguments.length > 0 && void 0 !== arguments[0]
                                        ? arguments[0]
                                        : n.props.direction;
                                if (n.props.adjust && n.shouldContentBeAdjusted()) {
                                    var e = {
                                            left: 'right',
                                            right: 'left',
                                            top: 'bottom',
                                            bottom: 'top',
                                        },
                                        o = e[t],
                                        r = Object.assign(
                                            {},
                                            n.getContentPosition(o),
                                            n.getEdgePosition(),
                                        );
                                    if (
                                        (n.setState({ direction: o }),
                                        n.setContentPosition(r),
                                        n.shouldContentBeAdjusted(o))
                                    ) {
                                        var i = Object.assign(
                                            {},
                                            n.getContentPosition(),
                                            n.getEdgePosition(),
                                        );
                                        n.setState({ direction: t }), n.setContentPosition(i);
                                    }
                                }
                            }),
                            (n.calculatePosition = function() {
                                var t = Object.assign(
                                    {},
                                    n.getContentPosition(),
                                    n.getEdgePosition(),
                                );
                                n.setState({ direction: n.props.direction }),
                                    n.setContentPosition(t),
                                    n.props.adjust && n.adjustContentPosition();
                            }),
                            (n.hide = function() {
                                n.setState({ show: !1 }), n.setContentPosition(), n.removeEvents();
                            }),
                            (n.show = function() {
                                n.setState({ show: !0 }), n.calculatePosition(), n.addEvents();
                            }),
                            (n.isOpen = function() {
                                return n.state.show;
                            }),
                            (n.toggle = function() {
                                n.isOpen() ? n.hide() : n.show();
                            }),
                            (r = o),
                            s(n, r)
                        );
                    }
                    return (
                        c(e, t),
                        u(e, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.addEvents(), this.calculatePosition();
                                },
                            },
                            {
                                key: 'componentWillReceiveProps',
                                value: function(t) {
                                    (t.gap === this.props.gap &&
                                        t.direction === this.props.direction) ||
                                        this.calculatePosition();
                                },
                            },
                            {
                                key: 'componentWillUpdate',
                                value: function(t, e) {
                                    return !0 === e.show &&
                                        !1 === this.state.show &&
                                        'function' == typeof this.props.onBeforeOpen
                                        ? this.props.onBeforeOpen(this)
                                        : !1 === e.show &&
                                          !0 === this.state.show &&
                                          'function' == typeof this.props.onBeforeClose
                                            ? this.props.onBeforeClose(this)
                                            : void 0;
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function(t, e) {
                                    return !0 === this.state.show &&
                                        !1 === e.show &&
                                        'function' == typeof this.props.onAfterOpen
                                        ? this.props.onAfterOpen(this)
                                        : !1 === this.state.show &&
                                          !0 === e.show &&
                                          'function' == typeof this.props.onAfterClose
                                            ? this.props.onAfterClose(this)
                                            : void 0;
                                },
                            },
                            {
                                key: 'componentWillUnmount',
                                value: function() {
                                    this.removeEvents();
                                },
                            },
                            {
                                key: 'getContentBounds',
                                value: function() {
                                    this.contentEl.DOMNode.style.display = 'block';
                                    var t = this.contentEl.DOMNode.getBoundingClientRect();
                                    return (this.contentEl.DOMNode.style.display = null), t;
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var t = this,
                                        e = this.state,
                                        o = e.show,
                                        n = e.direction,
                                        i = void 0 === n ? 'bottom' : n,
                                        s = this.props,
                                        c = s.block,
                                        u = s.children,
                                        l = s.className,
                                        f = s.edge,
                                        h = void 0 === f ? 'center' : f,
                                        b = s.beak,
                                        v = [
                                            'ReactMinimalDropdown',
                                            'ReactMinimalDropdown--is' + (o ? 'Open' : 'Closed'),
                                            'ReactMinimalDropdown--' + i,
                                            w.default.wrapper,
                                            c && w.default.block,
                                            b && w.default.beak,
                                            o && w.default[i],
                                            w.default['edge--' + h],
                                            w.default[o ? 'open' : 'closed'],
                                            l,
                                            l && l + '--is' + (o ? 'Open' : 'Closed'),
                                            l && l + '--' + i,
                                        ]
                                            .filter(function(t) {
                                                return !1 !== t && void 0 !== t;
                                            })
                                            .join(' '),
                                        y = Math.random()
                                            .toString(36)
                                            .substring(2);
                                    return p.default.createElement(
                                        'div',
                                        {
                                            ref: function(e) {
                                                t.wrapperEl = e;
                                            },
                                            className: v,
                                        },
                                        p.default.Children.map(u, function(e) {
                                            if (e.type === d.default)
                                                return (
                                                    e.props.id && (y = e.props.id),
                                                    p.default.cloneElement(
                                                        e,
                                                        a({}, e.props, {
                                                            ref: function(e) {
                                                                t.triggerEl = e;
                                                            },
                                                            id: y,
                                                            show: o,
                                                            toggle: t.toggle.bind(t),
                                                        }),
                                                    )
                                                );
                                            if (e.type === g.default) {
                                                var n;
                                                return p.default.cloneElement(
                                                    e,
                                                    a(
                                                        {},
                                                        e.props,
                                                        ((n = {
                                                            ref: function(e) {
                                                                t.contentEl = e;
                                                            },
                                                        }),
                                                        r(
                                                            n,
                                                            'aria-labelledby',
                                                            e.props['aria-labelledby'] || y,
                                                        ),
                                                        r(n, 'direction', i),
                                                        n),
                                                    ),
                                                );
                                            }
                                            return e;
                                        }),
                                    );
                                },
                            },
                        ]),
                        e
                    );
                })(p.default.PureComponent));
            (v.defaultProps = {
                adjust: !0,
                direction: 'bottom',
                edge: 'center',
                gap: 0,
                ignoreScroll: !0,
                ignoreResize: !1,
            }),
                (v.Trigger = d.default),
                (v.Content = g.default),
                (e.default = v),
                (e.Trigger = d.default),
                (e.Content = g.default);
        },
        './src/Trigger.js': function(t, e, o) {
            'use strict';
            function n(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function r(t, e) {
                var o = {};
                for (var n in t)
                    e.indexOf(n) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(t, n) && (o[n] = t[n]));
                return o;
            }
            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            }
            function s(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
            }
            function c(t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function, not ' + typeof e,
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                })),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
            }
            Object.defineProperty(e, '__esModule', { value: !0 });
            var a =
                    Object.assign ||
                    function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var o = arguments[e];
                            for (var n in o)
                                Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
                        }
                        return t;
                    },
                u = (function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                'value' in n && (n.writable = !0),
                                Object.defineProperty(t, n.key, n);
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e;
                    };
                })(),
                l = o('react'),
                p = n(l),
                f = o('./src/Dropdown.css'),
                d = n(f),
                h = (function(t) {
                    function e() {
                        return (
                            i(this, e),
                            s(
                                this,
                                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments),
                            )
                        );
                    }
                    return (
                        c(e, t),
                        u(e, [
                            {
                                key: 'render',
                                value: function() {
                                    var t = this,
                                        e = this.props,
                                        o = e.children,
                                        n = e.className,
                                        i = void 0 === n ? '' : n,
                                        s = e.toggle,
                                        c = e.show,
                                        u = e.arrow,
                                        l = r(e, [
                                            'children',
                                            'className',
                                            'toggle',
                                            'show',
                                            'arrow',
                                        ]);
                                    return p.default.createElement(
                                        'div',
                                        a({}, l, {
                                            ref: function(e) {
                                                t.node = e;
                                            },
                                            onClick: s,
                                            className:
                                                'ReactMinimalDropdown__Trigger ' +
                                                (d.default.trigger || '') +
                                                ' ' +
                                                i +
                                                ' ' +
                                                ((u && d.default.arrow) || ''),
                                            'aria-expanded': c,
                                            'aria-haspopup': 'true',
                                        }),
                                        o,
                                    );
                                },
                            },
                            {
                                key: 'DOMNode',
                                get: function() {
                                    return this.node;
                                },
                            },
                        ]),
                        e
                    );
                })(p.default.PureComponent);
            e.default = h;
        },
        react: function(e, o) {
            e.exports = t;
        },
    });
});
