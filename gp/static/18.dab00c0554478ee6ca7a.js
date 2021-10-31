(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/components/instructions/Demonstration.js":
/*!******************************************************!*\
  !*** ./src/components/instructions/Demonstration.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _YoutubeEmbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YoutubeEmbed */ \"./src/components/instructions/YoutubeEmbed.js\");\n\n\n\nvar Demonstration = function Demonstration() {\n  var ToYoutubeHandler = function ToYoutubeHandler(e) {\n    e.preventDefault();\n    window.open(\"https://www.youtube.com/playlist?list=PLsif5V_fe_hyHNlC2q5xdqY_MmQUZ6V3j\", \"_blank\");\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"instruction-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Demonstrations\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Here you will find all the Gplore demonstrational videos that provide walk throughs on how to use the features available in the application. You can also access the entire 'Gplore Demos' youtube playlist in another tab by clicking\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"div-link\",\n    onClick: ToYoutubeHandler\n  }, \" here\"), \", and remember to subscribe to stay up to date with the latest releases.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_YoutubeEmbed__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    embedId: \"FomZcYheBJ8\",\n    title: \"Introduction & Overview\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demonstration);\n\n//# sourceURL=webpack:///./src/components/instructions/Demonstration.js?");

/***/ }),

/***/ "./src/components/instructions/YoutubeEmbed.js":
/*!*****************************************************!*\
  !*** ./src/components/instructions/YoutubeEmbed.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar YoutubeEmbed = function YoutubeEmbed(_ref) {\n  var embedId = _ref.embedId,\n      title = _ref.title;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"yt-player-c1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"iframe\", {\n    src: \"https://www.youtube.com/embed/\".concat(embedId),\n    frameBorder: \"0\",\n    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n    allowFullScreen: true\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (YoutubeEmbed);\n\n//# sourceURL=webpack:///./src/components/instructions/YoutubeEmbed.js?");

/***/ })

}]);