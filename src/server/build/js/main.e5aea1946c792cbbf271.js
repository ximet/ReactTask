(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    110: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(3),
        o = a.n(n),
        r = a(7),
        i = a.n(r),
        c = a(25),
        s = a.n(c),
        u = a(18),
        l = a(2),
        d = (a(19), a(40), a(0));
      var p,
        v,
        b = function () {
          var [e, t] = Object(d.useState)(new Date().toLocaleTimeString());
          return (
            Object(d.useEffect)(() => {
              var e = setInterval(() => {
                t(new Date().toLocaleTimeString());
              }, 1e3);
              return () => {
                clearInterval(e);
              };
            }, []),
            o()('div', { className: i.a.appfooter }, void 0, o()('p', {}, void 0, e))
          );
        };
      var f = function () {
          return o()(
            'div',
            { className: i.a.appheader },
            void 0,
            p || (p = o()(u.b, { to: '/' }, void 0, o()('p', {}, void 0, 'CanYouSwim??'))),
            v || (v = o()('nav', {}, void 0, o()(u.b, { to: '/about' }, void 0, 'About')))
          );
        },
        m = (a(86), a(91), a(59)),
        h = a.n(m),
        O = (a(92), 'search');
      var g = function (e, t) {
          var [a, n] = Object(d.useState)(!1),
            [o, r] = Object(d.useState)(null),
            [i, c] = Object(d.useState)([]);
          return (
            Object(d.useEffect)(() => {
              h()(function* () {
                n(!0), r(null);
                try {
                  var a = yield fetch(
                      'http://localhost:3333/pfa.foreca.com/api/v1/location/'
                        .concat(e, '/')
                        .concat(t)
                    ),
                    o = yield a.json();
                  c(o.locations);
                } finally {
                  n(!1);
                }
              })();
            }, [t, e]),
            { isLoading: a, data: i, error: o }
          );
        },
        j = a(26),
        y = a.n(j),
        w = a(11);
      function _(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(a), !0).forEach(function (t) {
                y()(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : _(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      var C = function (e) {
          var { text: t } = e;
          return Object(w.jsx)('button', P(P({ className: i.a.btn }, e), {}, { children: t }));
        },
        S = a(60),
        N = a.n(S),
        k = ['value', 'onChangeInput'];
      function D(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      var E = function (e) {
          var { value: t, onChangeInput: a } = e,
            n = N()(e, k);
          return Object(w.jsx)(
            'input',
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? D(Object(a), !0).forEach(function (t) {
                      y()(e, t, a[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                  : D(Object(a)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                    });
              }
              return e;
            })({ className: i.a.input, value: t, onChange: a }, n)
          );
        },
        I = a(27),
        x = a.n(I),
        A = document.getElementById('modal');
      var T,
        B,
        F,
        L,
        M = function (e) {
          var { content: t, onModalClose: a, modal: n } = e,
            r = Object(d.useMemo)(() => document.createElement('div'), []);
          return (
            Object(d.useEffect)(
              () => (
                A.appendChild(r),
                () => {
                  A.removeChild(r);
                }
              )
            ),
            n
              ? Object(c.createPortal)(
                  o()(
                    'div',
                    { className: x.a.modalBackground, onClick: () => a() },
                    void 0,
                    o()(
                      'div',
                      { className: x.a.modalContent, onClick: e => e.stopPropagation() },
                      void 0,
                      o()(
                        'div',
                        { className: x.a.buttons },
                        void 0,
                        t.length
                          ? t.map(e => o()(C, { text: e.name }, e.id))
                          : 'There are no cityes'
                      )
                    )
                  ),
                  r
                )
              : null
          );
        },
        { mainPage: J, search: q, buttons: z } = i.a;
      function H() {
        var [e, t] = Object(d.useState)(''),
          [a, n] = Object(d.useState)(!1),
          { isLoading: r, data: i, error: c } = g(O, e);
        var s = Boolean(i.length) ? i : [];
        return o()(
          'div',
          { className: J },
          void 0,
          o()(M, { modal: a, onModalClose: () => n(!1), content: s }),
          o()(
            'div',
            { className: q },
            void 0,
            T || (T = o()('p', {}, void 0, 'Find the right location')),
            o()('p', {}, void 0, c),
            o()(E, {
              value: e,
              onChangeInput: e =>
                (function (e) {
                  t(e.target.value);
                })(e),
              placeholder: 'write here'
            }),
            o()(C, { text: 'show countries', onClick: () => n(!0) })
          )
        );
      }
      function U() {
        return (
          B ||
          (B = o()(
            'div',
            {},
            void 0,
            'Weather History API provides observational weather information from the past by showing measured weather parameters in a certain location at a specific date. The API delivers all the measured weather parameters as both daily summary values and hourly values. The queries can be made based on a given day and coordinate point. The API will respond with observational data from the nearest relevant weather station or from weather forecast model data (augmented observation). Augmented observations are provided when the closest weather station with sufficient observations is too far away to give representative information. History data is available from January 2009.'
          ))
        );
      }
      function Y() {
        return F || (F = o()('div', {}, void 0, '404: PAGE NOT FOUND'));
      }
      var G = function () {
        return Object(w.jsx)(w.Fragment, {
          children:
            L ||
            (L = o()(
              u.a,
              {},
              void 0,
              o()(f, {}),
              o()(
                l.c,
                {},
                void 0,
                o()(l.a, { path: '/', element: o()(H, {}) }),
                o()(l.a, { path: '/about', element: o()(U, {}) }),
                o()(l.a, { path: '*', element: o()(Y, {}) })
              ),
              o()(b, {})
            ))
        });
      };
      s.a.render(o()(G, {}), document.getElementById('app'));
    },
    27: function (e, t, a) {
      e.exports = {
        modalBackground: 'modalBackground___1x54S',
        modalContent: 'modalContent___3qiQp',
        buttons: 'buttons___1hp4A'
      };
    },
    7: function (e, t, a) {
      e.exports = {
        mainPage: 'mainPage___39Ua2',
        btn: 'btn___34YFe',
        input: 'input___2Xtz4',
        search: 'search___2SOog',
        buttons: 'buttons___1Mksa',
        appheader: 'appheader___ty198',
        appfooter: 'appfooter___22Nz_'
      };
    }
  },
  [[110, 1, 2]]
]);
