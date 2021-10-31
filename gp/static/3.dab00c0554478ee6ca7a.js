(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/detail/edit/EditTableDropDownEditCell.js":
/*!*****************************************************************!*\
  !*** ./src/components/detail/edit/EditTableDropDownEditCell.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux */ \"./src/redux/index.js\");\n\n\n\n\nvar EditTableDropDownEditCell = function EditTableDropDownEditCell(props) {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var defualtValue = props.defualtValue,\n      id = props.id,\n      datagroup = props.datagroup,\n      name = props.name,\n      model = props.model,\n      field = props.field; // the dropdown data is held in state under the model name\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.dataEdit.dropdowns;\n  }),\n      lst = _useSelector[model]; // display the Success component once the dropdown data has been returned.\n\n\n  var Success = function Success() {\n    // update the state with the value selected from the dropdown\n    var ChangeHandler = function ChangeHandler(e) {\n      var value = e.target.value;\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"updateEditCell\"])({\n        key: id,\n        field: field,\n        name: name,\n        datagroup: datagroup,\n        value: value\n      }));\n    };\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      className: \"cell-edit-input\",\n      value: defualtValue,\n      onChange: ChangeHandler\n    }, lst.map(function (row) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        key: row[0],\n        value: row[0]\n      }, row[1]);\n    }));\n  }; // This will momentarily display none until the axios call has fetched the data to display in the dropdown\n\n\n  return lst === undefined ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Success, null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTableDropDownEditCell);\n\n//# sourceURL=webpack:///./src/components/detail/edit/EditTableDropDownEditCell.js?");

/***/ }),

/***/ "./src/components/detail/edit/EditTableManualEditCell.js":
/*!***************************************************************!*\
  !*** ./src/components/detail/edit/EditTableManualEditCell.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux */ \"./src/redux/index.js\");\n/* harmony import */ var _reusable_infinityInput_InfinityInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reusable/infinityInput/InfinityInput */ \"./src/components/reusable/infinityInput/InfinityInput.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar EditTableManualEditCell = function EditTableManualEditCell(props) {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var defualtValue = props.defualtValue,\n      id = props.id,\n      datagroup = props.datagroup,\n      name = props.name,\n      input_type = props.input_type;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defualtValue),\n      _useState2 = _slicedToArray(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var BlurHandler = function BlurHandler() {\n    dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"updateEditCell\"])({\n      key: id,\n      field: 'percown',\n      name: name,\n      datagroup: datagroup,\n      value: value\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: input_type,\n    className: \"cell-edit-input\",\n    id: id,\n    value: value,\n    onChange: function onChange(e) {\n      return setValue(e.target.value);\n    },\n    onBlur: BlurHandler,\n    autoComplete: \"off\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTableManualEditCell);\n\n//# sourceURL=webpack:///./src/components/detail/edit/EditTableManualEditCell.js?");

/***/ }),

/***/ "./src/components/detail/edit/ItemsManyDropdownAddMulti.js":
/*!*****************************************************************!*\
  !*** ./src/components/detail/edit/ItemsManyDropdownAddMulti.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux */ \"./src/redux/index.js\");\n/* harmony import */ var _reusable_infinitySelect_InfinitySelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reusable/infinitySelect/InfinitySelect */ \"./src/components/reusable/infinitySelect/InfinitySelect.js\");\n/* harmony import */ var _reusable_infinityInput_InfinityInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reusable/infinityInput/InfinityInput */ \"./src/components/reusable/infinityInput/InfinityInput.js\");\n/* harmony import */ var _EditTableManualEditCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditTableManualEditCell */ \"./src/components/detail/edit/EditTableManualEditCell.js\");\n/* harmony import */ var _EditTableDropDownEditCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditTableDropDownEditCell */ \"./src/components/detail/edit/EditTableDropDownEditCell.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar InvalidItemsManyDropdownAddMulti = function InvalidItemsManyDropdownAddMulti(props) {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var datagroup = props.datagroup,\n      name = props.name;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"addEditDictKey\"])({\n      datagroup: datagroup,\n      name: name\n    }));\n  }, []);\n  return null;\n};\n\nvar ValidItemsManyDropdownAddMulti = function ValidItemsManyDropdownAddMulti(props) {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var data = props.data,\n      values = props.values,\n      dropdown_dict = props.dropdown_dict,\n      header = props.header,\n      datagroup = props.datagroup,\n      has_input = props.has_input,\n      columns = props.columns,\n      is_large = props.is_large;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      addVisible = _useState2[0],\n      setAddVisible = _useState2[1];\n\n  var name = dropdown_dict.name,\n      unique_grp = dropdown_dict.unique_grp;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state;\n  }),\n      dropdown = _useSelector.dropdown;\n\n  var _dropdown$unique_mult = dropdown.unique_multi_groups,\n      error = _dropdown$unique_mult.error,\n      names = _dropdown$unique_mult.names;\n  var firstRender = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(true); // if an error is recorded from the infinity-select or infintiy-input then this will hide the dropdown and trigger an error mesaage informing the user\n  //      that an already existent value in the unique group has attempted to be added again. e.g. gold in both maj and min materials\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (error.name === name) {\n      setAddVisible(false);\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"setPopupMessage\"])({\n        message: \"Values need to be unique across all \".concat(names[name], \" groups \"),\n        type: 'error',\n        style: 'error-fixed-edit'\n      }));\n    }\n  }, [error]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (firstRender.current) {\n      firstRender.current = false; // Finds if this dropdown is part of a group of dropdowns that require unique values across all of them. If so, this builds the state for it\n\n      unique_grp && dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"setUniqueDropdownGroup\"])({\n        name: name,\n        group: unique_grp\n      }));\n    } else {\n      // add all the values to the combined group list. If a value has been removed then it will not be included in the list\n      var lst = [];\n      Object.keys(data).forEach(function (row) {\n        !data[row].remove && lst.push(data[row].label);\n      });\n      unique_grp && lst.length > 0 && dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"addUniqueGroupValues\"])({\n        group: unique_grp,\n        values: lst\n      }));\n    }\n  }, [data]); // Add a value to the table by selecting it in the infinitySelect / InfinityInput\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (dropdown[name] !== undefined) {\n      var selected = dropdown[name].selected;\n\n      if (selected !== undefined && selected.key !== '') {\n        var key = selected.key,\n            label = selected.label;\n\n        if (!(key in data)) {\n          var temp = {\n            name: name,\n            datagroup: datagroup,\n            key: key,\n            label: label\n          };\n          columns.forEach(function (line, index) {\n            if (index !== 0) temp[line.label] = line[\"default\"];\n          });\n          dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"addEditDataHolder\"])(temp)); // dispatch(addEditDataHolder({ name: name, datagroup: datagroup, key: key, label: label, percown: 0, position: 'Direct Holder' }))\n\n          setAddVisible(false);\n        } else if (data[key].remove) {\n          // re-add a previously removed line. The line will maintain any changes made before being changed.\n          dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"removeEditData\"])({\n            name: name,\n            datagroup: datagroup,\n            key: key\n          }));\n          setAddVisible(false);\n        } else if (!data[key].remove) {\n          // it already exists in the list, so do nothing and close the add box\n          setAddVisible(false);\n        } else {\n          console.log('ItemsManyDropdownAddMulti component. uncaught');\n        }\n      }\n    }\n  }, [dropdown[name]]); // Build the initial state\n  // current: original value\n  // remove: value to be removed\n  // add: value added. if current & add are both true, then the value existsed already, but it has been updated (only in a multicolumn table)\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var dict = {};\n    var key = dropdown_dict.key,\n        label = dropdown_dict.label;\n    values.forEach(function (row) {\n      var temp = {\n        id: row[key],\n        label: row[label],\n        current: true,\n        remove: false,\n        add: false\n      };\n      columns.forEach(function (line, index) {\n        if (index !== 0) temp[line.label] = row[line.label];\n      });\n      dict[row[key]] = temp;\n    });\n    dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"setEditData\"])({\n      data: dict,\n      name: name,\n      datagroup: datagroup\n    }));\n  }, []); // fetch the data required for the EditTableDropDownEditCell columns (if there are any) and set it to state\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    columns.forEach(function (row) {\n      row.edit_type === 'select' && dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"getDropdownData\"])({\n        model: row.model,\n        key: row.select_key,\n        label: row.select_label\n      }));\n    });\n  }, []); // when 'Remove' is clicked the line will be hidden. If it is re-added, the same value will be re-displayed. If this is a multi column then anychanges \n  //  made previously will still exist.\n  // the dropdown data is stored under its model name.\n\n  var removeHandler = function removeHandler(e) {\n    var key = e.target.id; // remove the value from the table\n\n    dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"removeEditData\"])({\n      name: name,\n      datagroup: datagroup,\n      key: key\n    })); // remove the value from the unique_group list. If this is not done then an error will occur when attempting to re-add the same value\n\n    dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"removeUniqueGroupValue\"])({\n      group: name,\n      name: data[key].label\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"edit-table-c1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    className: \"row\"\n  }, columns.map(function (col) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n      key: col.header,\n      className: is_large ? col.lg_style : col.sm_style\n    }, col.header);\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: is_large ? 'col-2' : 'col-1'\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, Object.keys(data).map(function (row) {\n    var key = data[row].id;\n    return data[row].remove ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n      key: key,\n      className: \"row\"\n    }, columns.map(function (col) {\n      var header = col.header,\n          lg_style = col.lg_style,\n          sm_style = col.sm_style,\n          label = col.label,\n          edit_type = col.edit_type,\n          model = col.model,\n          input_type = col.input_type,\n          default_val = col[\"default\"];\n      return !edit_type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        key: header,\n        className: is_large ? lg_style : sm_style\n      }, data[row][label]) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        key: header,\n        className: is_large ? lg_style : sm_style\n      }, edit_type === 'select' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditTableDropDownEditCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        defualtValue: data[row][label],\n        id: key,\n        datagroup: datagroup,\n        name: name,\n        model: model,\n        field: label\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditTableManualEditCell__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        defualtValue: data[row][label],\n        id: key,\n        datagroup: datagroup,\n        name: name,\n        input_type: input_type\n      }));\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      className: is_large ? 'col-2' : 'col-1'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      id: key,\n      onClick: removeHandler\n    }, is_large ? 'Remove' : 'x')));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"edit-add\",\n    onClick: function onClick() {\n      return setAddVisible(function (prevState) {\n        return !prevState;\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Add +\")), addVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"add-select\"\n  }, has_input ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reusable_infinityInput_InfinityInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    dict: dropdown_dict\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reusable_infinitySelect_InfinitySelect__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    dict: dropdown_dict\n  })) : null));\n};\n\nvar ItemsManyDropdownAddMulti = function ItemsManyDropdownAddMulti(props) {\n  var dropdown_dict = props.dropdown_dict,\n      datagroup = props.datagroup;\n  var name = dropdown_dict.name;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state;\n  }),\n      dataEdit = _useSelector2.dataEdit;\n\n  var data = dataEdit[datagroup][name];\n\n  if (data === undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InvalidItemsManyDropdownAddMulti, {\n      datagroup: datagroup,\n      name: name\n    });\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValidItemsManyDropdownAddMulti, _extends({}, props, {\n      data: data\n    }));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemsManyDropdownAddMulti);\n\n//# sourceURL=webpack:///./src/components/detail/edit/ItemsManyDropdownAddMulti.js?");

/***/ })

}]);