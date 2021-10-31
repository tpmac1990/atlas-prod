(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./src/components/detail/edit/TitleEdit.js":
/*!*************************************************!*\
  !*** ./src/components/detail/edit/TitleEdit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux */ \"./src/redux/index.js\");\n/* harmony import */ var _ItemsManyDropdownAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemsManyDropdownAdd */ \"./src/components/detail/edit/ItemsManyDropdownAdd.js\");\n/* harmony import */ var _ItemSingleDropdownChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemSingleDropdownChange */ \"./src/components/detail/edit/ItemSingleDropdownChange.js\");\n/* harmony import */ var _ItemsManyDropdownAddMulti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemsManyDropdownAddMulti */ \"./src/components/detail/edit/ItemsManyDropdownAddMulti.js\");\n/* harmony import */ var _buildEditDictionary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildEditDictionary */ \"./src/components/detail/edit/buildEditDictionary.js\");\n/* harmony import */ var _EditTitleComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditTitleComponent */ \"./src/components/detail/edit/EditTitleComponent.js\");\n/* harmony import */ var _reusable_hooks_useViewportStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reusable/hooks/useViewportStyle */ \"./src/components/reusable/hooks/useViewportStyle.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _editConfigs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editConfigs */ \"./src/components/detail/edit/editConfigs.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar TitleEdit = function TitleEdit(_ref) {\n  var match = _ref.match;\n  var id = match.params.id;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"useRouteMatch\"])(),\n      url = _useRouteMatch.url;\n\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"useHistory\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.detailSelection;\n  }),\n      value = _useSelector.title;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.dataEdit;\n  }),\n      titles = _useSelector2.titles,\n      title_result = _useSelector2.title_result;\n\n  var groups = _editConfigs__WEBPACK_IMPORTED_MODULE_10__[\"title_objs\"].groups,\n      columns = _editConfigs__WEBPACK_IMPORTED_MODULE_10__[\"title_objs\"].columns,\n      multis = _editConfigs__WEBPACK_IMPORTED_MODULE_10__[\"title_objs\"].multis;\n  var typeSelect = groups.typeSelect,\n      statusSelect = groups.statusSelect,\n      geoProvinceSelect = groups.geoProvinceSelect,\n      holderSelect = groups.holderSelect,\n      oidSelect = groups.oidSelect;\n  var holderMulti = multis.holderMulti;\n\n  var _useViewportStyle = Object(_reusable_hooks_useViewportStyle__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(),\n      viewportStyle = _useViewportStyle.viewportStyle;\n\n  var is_large = ['tv', 'desktop', 'laptop'].includes(viewportStyle); // get the site data when the id changes \n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // get the data to display on the page\n    dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"getTitleData\"])(id));\n  }, [id]); // format the data ready for the post api, then send post request if updates have been made.\n\n  var FormHandler = function FormHandler(e) {\n    e.preventDefault();\n    var dict = Object(_buildEditDictionary__WEBPACK_IMPORTED_MODULE_6__[\"buildEditDictionary\"])(titles, value, columns, id);\n\n    if (dict['changes']) {\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"postSiteUpdates\"])({\n        id: id,\n        dict: dict,\n        endpoint: 'title'\n      }));\n    } else {\n      window.scrollTo(0, 0);\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"setPopupMessage\"])({\n        message: 'No changes were made',\n        type: 'warning',\n        style: 'warning-edit'\n      }));\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var success = title_result.success,\n        msg = title_result.msg;\n\n    if (success) {\n      history.push(url.replace('edit/', ''));\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"resetApiOutcome\"])('title_result'));\n      window.scrollTo(0, 0);\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"setPopupMessage\"])({\n        message: \"Site \".concat(msg, \" updated successfully\"),\n        type: 'success',\n        style: 'success-edit'\n      }));\n    }\n  }, [title_result]);\n  console.log(typeSelect);\n\n  if (value === null) {\n    return null;\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"edit-page\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditTitleComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      title: value.ind,\n      index: value.ind\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemSingleDropdownChange__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      header: \"Title Type\",\n      datagroup: \"titles\",\n      values: value.typ,\n      dropdown_dict: typeSelect\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemSingleDropdownChange__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      header: \"Title Status\",\n      datagroup: \"titles\",\n      values: value.status,\n      dropdown_dict: statusSelect\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemsManyDropdownAdd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      is_large: is_large,\n      header: \"Geological Provinces\",\n      datagroup: \"titles\",\n      values: value.geoprovince,\n      has_input: false,\n      dropdown_dict: geoProvinceSelect\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemsManyDropdownAddMulti__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      is_large: is_large,\n      header: \"Holders\",\n      datagroup: \"titles\",\n      values: value.holder,\n      has_input: false,\n      columns: holderMulti,\n      dropdown_dict: holderSelect\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemsManyDropdownAdd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      is_large: is_large,\n      header: \"Title Related ID's\",\n      datagroup: \"titles\",\n      values: value.oid,\n      has_input: true,\n      dropdown_dict: oidSelect\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"submit\",\n      className: \"btn-c5 edit-submit-btn\",\n      onClick: FormHandler\n    }, \"Submit\")));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TitleEdit);\n\n//# sourceURL=webpack:///./src/components/detail/edit/TitleEdit.js?");

/***/ })

}]);