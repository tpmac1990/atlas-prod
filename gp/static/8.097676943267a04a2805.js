(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/components/detail/HolderDetail.js":
/*!***********************************************!*\
  !*** ./src/components/detail/HolderDetail.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select-async-paginate */ \"./node_modules/react-select-async-paginate/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../redux */ \"./src/redux/index.js\");\n/* harmony import */ var _sub_SubHolderDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub/SubHolderDetail */ \"./src/components/detail/sub/SubHolderDetail.js\");\n/* harmony import */ var _reusable_infinitySelect_InfinitySelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reusable/infinitySelect/InfinitySelect */ \"./src/components/reusable/infinitySelect/InfinitySelect.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n // import loadHolderOptions from './sub/loadHolderOptions';\n\n // import dataEditReducer from '../../redux/dataEdit/dataEditReducer';\n\n\n\nvar HolderEdit = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ./edit/HolderEdit */ \"./src/components/detail/edit/HolderEdit.js\"));\n}); // put value in redux\n// create another route to go one deeper\n\nfunction HolderDetail() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"useHistory\"])(); // const [ holderLookup, setHolderLookup ] = useState({value: '', label: ''})\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      showAddHolder = _useState2[0],\n      setShowAddHolder = _useState2[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state;\n  }),\n      dataEdit = _useSelector.dataEdit,\n      dropdown = _useSelector.dropdown;\n\n  var HolderType = dataEdit.dropdowns.HolderType;\n\n  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"useRouteMatch\"])(),\n      path = _useRouteMatch.path,\n      url = _useRouteMatch.url; // function Handler(e){\n  //     if ( holderLookup.value == '' ){\n  //         e.preventDefault()\n  //     }\n  // }\n  // will direct to the detail page when the selection is changed in the holder seleciton\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dropdown.active_dropdown == 'holder_search' && dropdown.holder_search && dropdown.holder_search.selected.key !== '' && history.push(\"\".concat(url, \"/\").concat(dropdown.holder_search.selected.key));\n  }, [dropdown]); // clicking on the link 'add a holder' will toggle the had a holder component\n\n  var AddHolderHandler = function AddHolderHandler(e) {\n    e.preventDefault();\n    setShowAddHolder(function (prev) {\n      return !prev;\n    });\n  }; // display a form to enter a new holder name and the type of company/holder it is.\n\n\n  var AddHolder = function AddHolder() {\n    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n        _useState4 = _slicedToArray(_useState3, 2),\n        nameSearch = _useState4[0],\n        setNameSearch = _useState4[1];\n\n    var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n        _useState6 = _slicedToArray(_useState5, 2),\n        typeValue = _useState6[0],\n        setTypeValue = _useState6[1]; // if HolderType dropdown state is empty then fetch it.\n\n\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n      !HolderType && dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_4__[\"getDropdownData\"])({\n        model: 'HolderType',\n        'key': '_id',\n        'label': 'original'\n      }));\n    }, []); // need to add error handling\n\n    var SubmitHolderHandler = function SubmitHolderHandler(e) {\n      e.preventDefault();\n\n      if (nameSearch !== '') {\n        dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_4__[\"createNewHolder\"])({\n          name: nameSearch,\n          typ: typeValue\n        }));\n        setShowAddHolder(false);\n      }\n    }; // form to handle creating a new holder. add name and type\n\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      className: \"add-holder\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Name:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      className: \"input-c4\",\n      type: \"text\",\n      onChange: function onChange(e) {\n        return setNameSearch(e.target.value);\n      },\n      value: nameSearch\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Type:\"), HolderType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      className: \"input-c4\",\n      value: typeValue,\n      onChange: function onChange(e) {\n        return setTypeValue(e.target.value);\n      }\n    }, HolderType.map(function (row) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        key: row[0],\n        value: row[0]\n      }, row[1]);\n    })) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn-c5\",\n      onClick: SubmitHolderHandler\n    }, \"Submit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"#\",\n      onClick: function onClick() {\n        return setShowAddHolder(false);\n      }\n    }, \"hide\")));\n  };\n\n  var holderSelect = {\n    name: 'holder_search',\n    endpoint: 'site-group',\n    model: 'Holder',\n    key: '_id',\n    label: 'name',\n    styles: 'infinite-select-c2'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"header-c1\"\n  }, \"Search For A Title Holder:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lookup-c1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"holder-infinity\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reusable_infinitySelect_InfinitySelect__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    dict: holderSelect\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"link-add-value\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"#\",\n    onClick: AddHolderHandler\n  }, \"Add a Holder!\"))), showAddHolder ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddHolder, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"\".concat(path, \"/:id\"),\n    component: _sub_SubHolderDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"\".concat(path, \"/edit/:id\"),\n    component: HolderEdit\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HolderDetail); // import { useHistory } from \"react-router-dom\";\n// const { dataEdit, dropdown } = useSelector(state => state)\n// // will direct to the detail page when the selection is changed in the holder seleciton\n// useEffect(() => {\n//     dropdown.holder_search && dropdown.holder_search.selected.key !== '' && history.push(`${url}/${dropdown.holder_search.selected.key}`)\n// },[dropdown])\n// <div className='holder-infinity'>\n//     <InfinitySelect dict={holderSelect} />\n// </div>\n\n//# sourceURL=webpack:///./src/components/detail/HolderDetail.js?");

/***/ }),

/***/ "./src/components/detail/sub/SubHolderDetail.js":
/*!******************************************************!*\
  !*** ./src/components/detail/sub/SubHolderDetail.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux */ \"./src/redux/index.js\");\n/* harmony import */ var _DetailTableC1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailTableC1 */ \"./src/components/detail/sub/DetailTableC1.js\");\n/* harmony import */ var _SingleColumnTableC1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleColumnTableC1 */ \"./src/components/detail/sub/SingleColumnTableC1.js\");\n/* harmony import */ var _loading_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/Loading */ \"./src/components/loading/Loading.js\");\n/* harmony import */ var _TitleComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TitleComponent */ \"./src/components/detail/sub/TitleComponent.js\");\n/* harmony import */ var _detailConfigs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detailConfigs */ \"./src/components/detail/sub/detailConfigs.js\");\n\n\n\n\n\n\n\n\n\nfunction SubHolderDetail(_ref) {\n  var match = _ref.match;\n  var id = match.params.id;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.detailSelection;\n  }),\n      value = _useSelector.holder;\n\n  var SubsidiariesDict = _detailConfigs__WEBPACK_IMPORTED_MODULE_7__[\"holder_objs\"].SubsidiariesDict,\n      OwnersDict = _detailConfigs__WEBPACK_IMPORTED_MODULE_7__[\"holder_objs\"].OwnersDict,\n      TickerDict = _detailConfigs__WEBPACK_IMPORTED_MODULE_7__[\"holder_objs\"].TickerDict,\n      BasicDict = _detailConfigs__WEBPACK_IMPORTED_MODULE_7__[\"holder_objs\"].BasicDict;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"getHolderData\"])(id));\n  }, [id]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (value) {\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"setFilterValues\"])({\n        ind_lst: value.title_count,\n        datagroup: 'titles'\n      }));\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"setFilterValues\"])({\n        ind_lst: value.site_count,\n        datagroup: 'sites'\n      }));\n    }\n  }, [value]);\n\n  if (value == null) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null);\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"detail-info-c1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TitleComponent__WEBPACK_IMPORTED_MODULE_6__[\"TitleComponent\"], {\n      group: \"holder\",\n      title: value.holder_name,\n      index: id\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"list-table-btn-group\"\n    }, ['titles', 'sites'].map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        key: item,\n        className: \"btn-c5\",\n        onClick: function onClick() {\n          return dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"triggerElement\"])(item));\n        }\n      }, item.charAt(0).toUpperCase() + item.slice(1), \" List Table\");\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleColumnTableC1__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      dict: BasicDict,\n      value: value\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailTableC1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      dict: TickerDict,\n      value: value\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailTableC1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      dict: OwnersDict,\n      value: value\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailTableC1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      dict: SubsidiariesDict,\n      value: value\n    }));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubHolderDetail); // const SubsidiariesDict = {\n//     value: value,\n//     styles: \"detail-sub-info-c1\",\n//     lookup: \"subsidiaries\",\n//     header: \"Subsidiaries\",\n//     table_headers: [\"Name\",\"Percent Owned\",\"Type\",\"Listed\"],\n//     table_data: [[\"name\"],[\"percown\"],[\"typ\"],[\"listed\"]]\n// };\n// const OwnersDict = {\n//     value: value,\n//     styles: \"detail-sub-info-c1\",\n//     lookup: \"parent_company\",\n//     header: \"Parent Companies\",\n//     table_headers: [\"Name\",\"Percent Owned\",\"Type\",\"Listed\"],\n//     table_data: [[\"name\"],[\"percown\"],[\"typ\"],[\"listed\"]]\n// };\n// const TickerDict = {\n//     value: value,\n//     styles: \"detail-sub-info-c1\",\n//     lookup: \"listed\",\n//     header: \"Listed Locations\",\n//     table_headers: [\"Ticker\",\"Exchange Code\",\"Exchange Name\"],\n//     table_data: [[\"ticker\"],[\"exchange\",\"code\"],[\"exchange\",\"name\"]]\n// };\n// const BasicDict = {\n//     value: value,\n//     header: \"General Info\",\n//     table_data: [\n//         {th: \"Holder/Company Type\", td: [\"company_type\",\"original\"], multi: null, format: null},\n//         {th: \"Is Listed\", td: [\"listed\"], multi: null, format: 'length_boolean'},\n//         {th: \"Number of Owners\", td: [\"parent_company\"], multi: null, format: 'length'},\n//         {th: \"Number of Subsidiaries\", td: [\"subsidiaries\"], multi: null, format: 'length'},\n//         {th: \"Number of Titles\", td: [\"title_count\"], multi: null, format: 'length'},\n//         {th: \"Number of Sites\", td: [\"site_count\"], multi: null, format: 'length'},\n//         {th: \"States Holding Titles\", td: [\"states\"], multi: '', format: null},\n//     ]\n// }\n\n//# sourceURL=webpack:///./src/components/detail/sub/SubHolderDetail.js?");

/***/ })

}]);