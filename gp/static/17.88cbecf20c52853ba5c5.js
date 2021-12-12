(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/components/errors/ErrorPage.js":
/*!********************************************!*\
  !*** ./src/components/errors/ErrorPage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ErrorPage = function ErrorPage(props) {\n  var error = props.error,\n      msg = props.msg;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error-page\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, msg)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorPage);\n\n//# sourceURL=webpack:///./src/components/errors/ErrorPage.js?");

/***/ }),

/***/ "./src/components/errors/Page503.js":
/*!******************************************!*\
  !*** ./src/components/errors/Page503.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page503; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorPage */ \"./src/components/errors/ErrorPage.js\");\n\n\nfunction Page503() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    error: \"503\",\n    msg: \"Service Unavailable\"\n  });\n}\n\n//# sourceURL=webpack:///./src/components/errors/Page503.js?");

/***/ })

}]);