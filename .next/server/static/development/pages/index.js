module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Entry/index.tsx":
/*!************************************!*\
  !*** ./components/Entry/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Typography */ "./components/Typography/index.tsx");
var _jsxFileName = "/Users/Amanda/Projects/portfolio/components/Entry/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Entry = ({
  title,
  location,
  date,
  details
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_Typography__WEBPACK_IMPORTED_MODULE_1__["H3"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, title), __jsx(_Typography__WEBPACK_IMPORTED_MODULE_1__["H4"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, location), __jsx(_Typography__WEBPACK_IMPORTED_MODULE_1__["H5"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, date)), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(_Typography__WEBPACK_IMPORTED_MODULE_1__["P"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, details)));

/* harmony default export */ __webpack_exports__["default"] = (Entry);

/***/ }),

/***/ "./components/List/index.module.scss":
/*!*******************************************!*\
  !*** ./components/List/index.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"List": "List___2yMic",
	"ListDots": "ListDots___2I-fF",
	"ListItem": "ListItem___32exR",
	"ListLink": "ListLink___3tVqd"
};

/***/ }),

/***/ "./components/List/index.tsx":
/*!***********************************!*\
  !*** ./components/List/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./components/List/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Amanda/Projects/portfolio/components/List/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const List = ({
  items
}) => {
  const useDots = items[0].title.length > 30;
  return __jsx("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.List, {
      [_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ListDots]: useDots
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, items.map(item => __jsx("li", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ListItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, item.href ? __jsx("a", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ListLink,
    href: item.href,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, item.title) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, item.title))));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./components/Section/index.module.scss":
/*!**********************************************!*\
  !*** ./components/Section/index.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Section": "Section___2-8bA"
};

/***/ }),

/***/ "./components/Section/index.tsx":
/*!**************************************!*\
  !*** ./components/Section/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./components/Section/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Amanda/Projects/portfolio/components/Section/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Section = ({
  children
}) => __jsx("div", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Section,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, children);

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/Typography/index.module.scss":
/*!*************************************************!*\
  !*** ./components/Typography/index.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"H1": "H1___2b9EO",
	"H2": "H2___JQmpb",
	"H3": "H3___1C4Rt",
	"H4": "H4___30Hq9",
	"H5": "H5___1BJO7",
	"P": "P___1plUR",
	"PSmall": "PSmall___3wIzh"
};

/***/ }),

/***/ "./components/Typography/index.tsx":
/*!*****************************************!*\
  !*** ./components/Typography/index.tsx ***!
  \*****************************************/
/*! exports provided: H1, H2, H3, H4, H5, P */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return H5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./components/Typography/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Amanda/Projects/portfolio/components/Typography/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const H1 = ({
  children
}) => __jsx("h1", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.H1,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, children);
const H2 = ({
  children
}) => __jsx("h2", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.H2,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, children);
const H3 = ({
  children
}) => __jsx("h3", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.H3,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, children);
const H4 = ({
  children
}) => __jsx("h4", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.H4,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, children);
const H5 = ({
  children
}) => __jsx("h5", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.H5,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, children);
const P = ({
  children,
  small
}) => __jsx("p", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.P, {
    [_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.PSmall]: small
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, children);

/***/ }),

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Layout": "Layout___6G3ix",
	"MainWrapper": "MainWrapper___3aD2G",
	"Resume": "Resume___8AR-q",
	"Header": "Header___1dv_e",
	"Main": "Main___3yLoF",
	"Bold": "Bold___1M7Vb",
	"MobileContact": "MobileContact___1BSxw",
	"DesktopContact": "DesktopContact___me_UM",
	"Pink": "Pink___3v7_h",
	"Green": "Green___7crE2",
	"Blue": "Blue___1LIFm",
	"Sidebar": "Sidebar___zMA2p"
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/List */ "./components/List/index.tsx");
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry/index.tsx");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Typography */ "./components/Typography/index.tsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section */ "./components/Section/index.tsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Amanda/Projects/portfolio/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CV = () => {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Resume,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Amanda", __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Bold,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Haynes")), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Software Engineer")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.MainWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Sidebar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.DesktopContact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(ContactSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Current Projects"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["P"], {
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "I'm always up to something! Some of my current side projects include:"), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: [{
      title: "Building an interactive augmented art installation with live aerosol mural painting and visual projection mapping software"
    }, {
      title: "Working as Live Art Director and Web Master for Impact Music Festival, Intersect Art and Music Festival, and Musibi Rising Art and Bass Gathering"
    }, {
      title: "Leveraging technology to modernize property management by building a residential property management tool - think AirBnB meets on demand handyman services."
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Highlights"), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: [{
      title: "ATB Skills Visualization Application",
      href: "http://atb-skills.herokuapp.com/"
    }, {
      title: "Live Art Installation",
      href: "https://www.flickr.com/photos/184798290@N03/albums/72157711177933831"
    }, {
      title: "Versett Website",
      href: "https://versett.com/"
    }, {
      title: "Custom E-commerce website",
      href: "https://www.bhd.ca/"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Fun Fact"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["P"], {
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Before transitioning into technology, I was partner in a landscape construction company. In 5 years we transformed a handyman repair sole-proprietorship into an incorporated contracting company specializing in custom landscaping design with net yearly revenue of $100,000 in our last three years of operation."))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.MobileContact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx(ContactSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx(Blue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Sum"), "mary"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "I am driven by creating order out of chaos and am constantly seraching for oppotrunities to leverage technology in new and interetsting ways. My core competencies lie in web technologies and I am passionate about projects that exist at the intersection of art and technology. I'm on a mission to create accessible, interactive, immersive experiences leveraging various mediums both tangible and ingangible.")), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(Pink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "Edu"), "cation"), __jsx(_components_Entry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Bachellor of Computer Information Systems",
    location: "Mount Royal University",
    date: "2011 - 2016",
    details: __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["P"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    }, "The CIS program teaches the fundamentals of object oriented and functional programming, server and database administration, QA, and project management. During my time at Mount Royal I developed applications using various languages including Java, C#, .Net, Javascript, and Python. In addition to my studies, I participated in numerous extra curricular activities including serving as an executive on my program's student society where I helped coordinate and host events for the students and faculty including hackatons, AR playground fundraisers, and student showcase events."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  })), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(Green, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "Exp"), "erience"), __jsx(_components_Entry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Application Engineer",
    location: "Versett",
    date: "2016 - Current",
    details: __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["P"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: undefined
    }, "My role as an Application Engineer at Versett has me switching between strategic consulting and UX execution functions as I help design and build technological solutions for clients in enterprise, startup, and venture domains. I leverage the most modern Javascript web technologies to build accessible, secure, performant, web and mobile applications. Together with my team, we have delivered scalable customized solutions including cryptocurrency exchange platforms, business travel tools, custom ecommerce platforms, rich data visualizations, mobile career coach applications and many more. The wide range of projects I have been exposed to at Versett has broadened my toolbealt and honed my ability to learn new skills and deep dive into new problem domains with ease."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }), __jsx(_components_Entry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Web Development Bootcamp Mentor",
    location: "Lighthouse Labs",
    date: "2016 - 2018",
    details: __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["P"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: undefined
    }, "My mentorship role was a part time evening position where I assisted students as they progressed through a 10 week intensive web development bootcamp. The curriculum was iterative and new technologies were often replacing older ones requiring me to quickly become up to speed in order to best assist the students. Calgary is a sattelite office from the Toronto based operations so there was ample opportunity for me to help coordinate and facilitate events such as demo days, showcase events, and employer meet-and-greet sessions."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx(_components_Entry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Web Developer - LAMP Stack",
    location: "RCKTSHP",
    date: "2015 - 2016",
    details: __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["P"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: undefined
    }, "I was brought on as a contractor to help a local student crowdfunding startup pivot to a freelancer marketplace that aimed to connect local startups and small businesses with student freelancers. I made extensive customizations to the automation and workflow features of an existing marketplace framework build on Wordpress for the year long project. Although the endeavor was unsuccesful, the opportunity to dive into the startup world birthed my love for the unknown. I also successfully landed RCKTSHP a finalist position in Startup Calgary's Launchpad Accelerator challenge on just two days notice!"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }), __jsx(_components_Entry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Technical Support Analyst",
    location: "Hitachi ID Systems",
    date: "2014",
    details: __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["P"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: undefined
    }, "To fulfill a requirement of my degree, I completed a four month internship as a technical support intern for a the password and identity management software branch of Hitachi. During my time here, I set up a large virtual network to mimic a complex client setup and went through the process of intentionally breaking, debugging, and repairing for the most in-depth understanding possible in addition to my technical support duties."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  })))));
};

const Pink = ({
  children
}) => __jsx("span", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Pink,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 213
  },
  __self: undefined
}, children);

const Green = ({
  children
}) => __jsx("span", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Green,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 215
  },
  __self: undefined
}, children);

const Blue = ({
  children
}) => __jsx("span", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Blue,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  },
  __self: undefined
}, children);

const ContactSection = () => __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["H2"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221
  },
  __self: undefined
}, "Contact"), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
  items: [{
    title: "403-462-1591"
  }, {
    title: "1119a 41 Street SW, Calgary AB"
  }],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222
  },
  __self: undefined
}), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
  items: [{
    title: "dev@portad.ca",
    href: "mailto:dev@portad.ca"
  }, {
    title: "github.com/amandala",
    href: "github.com/amandala"
  }, {
    title: "linkedin.com/in/ahayn465",
    href: "linkedin.com/in/ahayn465"
  }],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (CV);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Amanda/Projects/portfolio/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map