(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./src/components/authentication/Facebook.js":
/*!***************************************************!*\
  !*** ./src/components/authentication/Facebook.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux */ \"./src/redux/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar Facebook = function Facebook() {\n  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useLocation\"])();\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var values = query_string__WEBPACK_IMPORTED_MODULE_4___default.a.parse(location.search);\n    var state = values.state ? values.state : null;\n    var code = values.code ? values.code : null; // if state & code are not null then the user been authenticated and is logged in\n\n    if (state && code) {\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_3__[\"facebookAuthenticate\"])(state, code));\n    }\n  }, [location]); // once authenticated, redirect to the home page\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    to: \"/\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Facebook);\n\n//# sourceURL=webpack:///./src/components/authentication/Facebook.js?");

/***/ })

}]);