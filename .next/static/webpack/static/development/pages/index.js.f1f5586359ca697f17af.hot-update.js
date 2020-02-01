webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/List/index.tsx":
/*!***********************************!*\
  !*** ./components/List/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./components/List/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Amanda/Projects/portfolio/components/List/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var List = function List(_ref) {
  var items = _ref.items;
  var useDots = items[0].title.length > 30;
  return __jsx("ul", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.List,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, items.map(function (item) {
    return __jsx("li", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ListItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, item.href ? __jsx("a", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ListLink,
      href: item.href,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, item.title) : __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, item.title));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.f1f5586359ca697f17af.hot-update.js.map