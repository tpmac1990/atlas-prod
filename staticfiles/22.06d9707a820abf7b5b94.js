(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{170:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(9),c=r(2),l=r(1),i=r(21);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var m=function(e){var t=e.filter,r=e.setFilter,o=s(Object(a.useState)(t),2),c=o[0],l=o[1],u=Object(i.useAsyncDebounce)((function(e){r(e||void 0)}),500);return n.a.createElement("input",{className:"input-c2",placeholder:"Search all columns...",value:c||"",onChange:function(e){l(e.target.value),u(e.target.value)}})},d=function(e){var t=e.column,r=t.filterValue,a=t.setFilter;return n.a.createElement("input",{className:"input-c3",placeholder:"Search...",value:r||"",onChange:function(e){return a(e.target.value)}})};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.forwardRef((function(e,t){var r=e.indeterminate,a=p(e,["indeterminate"]),o=n.a.useRef(),c=t||o;return n.a.useEffect((function(){c.current.indeterminate=r}),[c,r]),n.a.createElement("div",{className:"checkbox-c1"},n.a.createElement("input",f({type:"checkbox",id:"toggle-all",ref:c},a)),n.a.createElement("label",{htmlFor:"toggle-all"},"Toggle All"))}));function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var y=function(e){var t=e.columns,r=e.data,o=h(Object(a.useState)(!1),2),c=o[0],l=o[1],s=c?"table-content-area-c1 showEle":"hideEle",u=h(Object(a.useState)(!1),2),f=u[0],p=u[1],v=f?"showEle":"hideEle",y=n.a.useMemo((function(){return{Filter:d}}),[]),S=Object(i.useTable)({columns:t,data:r,defaultColumn:y},i.useFilters,i.useGlobalFilter,i.useSortBy,i.usePagination),E=S.getTableProps,O=S.getTableBodyProps,j=S.headerGroups,_=S.rows,H=S.prepareRow,w=S.state,C=S.setGlobalFilter,P=S.allColumns,k=S.getToggleHideAllColumnsProps,x=w.globalFilter;w.pageIndex,w.pageSize;return n.a.createElement("div",{className:"greater-table-area-c1"},n.a.createElement("div",{className:"checkbox-c3 hide-portrait"},n.a.createElement("input",{type:"checkbox",id:"column-ctrl-checkbox",onChange:function(){return l(!c)}}),n.a.createElement("label",{htmlFor:"column-ctrl-checkbox"},c?"Hide Column Control":"Showe Column Control")),n.a.createElement("div",{className:"".concat(s," hide-portrait")},n.a.createElement(b,k()),P.map((function(e){return n.a.createElement("div",{className:"checkbox-c1",key:e.id},n.a.createElement("input",g({type:"checkbox",id:e.id},e.getToggleHiddenProps())),n.a.createElement("label",{htmlFor:e.id},e.Header))}))),n.a.createElement(m,{filter:x,setFilter:C}),n.a.createElement("div",{className:"checkbox-c2"},n.a.createElement("input",{type:"checkbox",id:"column-filter-checkbox",onChange:function(){return p(!f)}}),n.a.createElement("label",{htmlFor:"column-filter-checkbox"},f?"Hide Column Filters":"Show Column Filters")),n.a.createElement("div",{className:c?"table-area-c1 table-height-sm":"table-area-c1 table-height-lg"},n.a.createElement("table",g({},E(),{className:"table"}),n.a.createElement("thead",null,j.map((function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.a.createElement("th",e.getHeaderProps(e.getSortByToggleProps()),n.a.createElement("div",{className:e.isSorted?e.isSortedDesc?"sort-up-c1":"sort-down-c1":"sort-none-c1"},n.a.createElement("div",null,e.render("Header")),n.a.createElement("div",{className:v,onClick:function(e){e.preventDefault(),e.stopPropagation()}},e.canFilter?e.render("Filter"):null)))})))}))),n.a.createElement("tbody",O(),_.map((function(e){return H(e),n.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return n.a.createElement("td",e.getCellProps(),e.render("Cell"))})))}))))))};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var w=function(e){var t=Object(c.b)(),r=e.columns,o=Object(c.c)((function(e){return e})).popupTable,s=o.active_group,u=o[s],m=u.ind_lst,d=u.data,f=u.limit,p=u.has_more,g=_(Object(a.useState)(!0),2),h=g[0],v=g[1],y=_(Object(a.useState)(!1),2),E=y[0],H=y[1],w=_(Object(a.useState)(20),2),C=w[0],P=w[1],k=_(Object(a.useState)(""),2),x=k[0],T=k[1],N=_(Object(a.useState)({}),2),A=N[0],F=N[1],D=_(Object(a.useState)({}),2),I=D[0],M=D[1],R=_(Object(a.useState)(!1),2),G=R[0],B=R[1],z=G?"table-content-area-c1 showEle":"hideEle",U=_(Object(a.useState)(!1),2),$=U[0],J=U[1],L=$?"showEle":"hideEle",V=_(Object(a.useState)({field:"",asc:!1}),2),q=V[0],K=V[1];Object(a.useEffect)((function(){if(!h&&E){var e="sites"===s?"Occurrence":"Tenement";t(Object(l.bb)({ind_lst:m,datagroup:e,offset:C,limit:f,sortdict:q,colfiltersdict:I,globalfilter:x}))}}),[E]),Object(a.useEffect)((function(){h||(P((function(e){return e+20})),H(!1))}),[d]),Object(a.useEffect)((function(){v(!1)}),[]);Object(a.useEffect)((function(){if(!h){var e=setTimeout((function(){P(0),H(!0)}),500);return function(){return clearTimeout(e)}}}),[x]),Object(a.useEffect)((function(){if(!h){var e=setTimeout((function(){Q()}),500);return function(){return clearTimeout(e)}}}),[A]);var Q=function(){var e=A.value,t=A.field;M((function(r){return O(O({},r),{},j({},t,e))})),P(0),H(!0)},W=Object(i.useTable)({columns:r,data:d}),X=W.getTableProps,Y=W.getTableBodyProps,Z=W.headerGroups,ee=W.rows,te=W.prepareRow,re=W.allColumns,ae=W.getToggleHideAllColumnsProps;return n.a.createElement("div",{className:"greater-table-area-c1"},n.a.createElement("div",{className:"checkbox-c3 hide-portrait"},n.a.createElement("input",{type:"checkbox",id:"column-ctrl-checkbox",onChange:function(){return B(!G)}}),n.a.createElement("label",{htmlFor:"column-ctrl-checkbox"},G?"Hide Column Control":"Show Column Control")),n.a.createElement("div",{className:"".concat(z," hide-portrait")},n.a.createElement(b,ae()),re.map((function(e){return n.a.createElement("div",{className:"checkbox-c1",key:e.id},n.a.createElement("input",S({type:"checkbox",id:e.id},e.getToggleHiddenProps())),n.a.createElement("label",{htmlFor:e.id},e.Header))}))),n.a.createElement("input",{type:"text",placeholder:"Search all columns...",className:"input-c2",onChange:function(e){return T(e.target.value)}}),n.a.createElement("div",{className:"checkbox-c2"},n.a.createElement("input",{type:"checkbox",id:"column-filter-checkbox",onChange:function(){return J(!$)}}),n.a.createElement("label",{htmlFor:"column-filter-checkbox"},$?"Hide Column Filters":"Show Column Filters")),n.a.createElement("div",{className:G?"table-area-c1 table-height-sm":"table-area-c1 table-height-lg",onScroll:function(e){if(p&&!E){var t=e.currentTarget,r=t.scrollTop,a=t.clientHeight;t.scrollHeight-r<=a+20&&H(!0)}}},n.a.createElement("table",S({},X(),{className:"table"}),n.a.createElement("thead",null,Z.map((function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.a.createElement("th",S({},e.getHeaderProps(),{onClick:function(){return t=e.ssSort,r=q.field,a=q.asc,""===q.field?K({field:t,asc:!0}):K(r===t&&a?{field:t,asc:!1}:r!==t||a?{field:t,asc:!0}:{field:"",asc:!1}),P(0),void H(!0);var t,r,a}}),n.a.createElement("div",{className:e.ssSort===q.field?q.asc?"sort-down-c1":"sort-up-c1":"sort-none-c1"},n.a.createElement("div",null,e.render("Header")),n.a.createElement("div",{className:L,onClick:function(e){e.preventDefault(),e.stopPropagation()}},n.a.createElement("input",{type:"text",placeholder:"Search...",className:"input-c3",onChange:function(t){return F({value:t.target.value,field:e.ssSort})}}))))})))}))),n.a.createElement("tbody",Y(),ee.map((function(e){return te(e),n.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return n.a.createElement("td",e.getCellProps(),e.render("Cell"))})))}))))))},C=function(e){var t=e.split("-");return"2999"===t[0]?"":"".concat(t[2],"-").concat(t[1],"-").concat(t[0])},P={titles:[{Header:"Index",accessor:"ind",ssSort:"ind"},{Header:"Related ID's",accessor:"oid",ssSort:"oid__code"},{Header:"Holders",accessor:"holder",ssSort:"holder__name"},{Header:"Parents",accessor:"parent",ssSort:"holder__child_parent__name__name"},{Header:"Lodge Date",accessor:"lodgedate",ssSort:"lodgedate",Cell:function(e){var t=e.value;return C(t)}},{Header:"Start Date",accessor:"startdate",ssSort:"startdate",Cell:function(e){var t=e.value;return C(t)}},{Header:"Expiry Date",accessor:"enddate",ssSort:"enddate",Cell:function(e){var t=e.value;return C(t)}},{Header:"State",accessor:"state",ssSort:"state__name"},{Header:"Government Regions",accessor:"govregion",ssSort:"govregion__name"},{Header:"Geological Provinces",accessor:"geoprovince",ssSort:"geoprovince__name"},{Header:"Onshore / Offshore",accessor:"shore",ssSort:"shore__name"},{Header:"Major Materials",accessor:"majmat",ssSort:"majmat__name"},{Header:"Minor Materials",accessor:"minmat",ssSort:"minmat__name"},{Header:"Detailed Type",accessor:"typ.fname",ssSort:"typ__fname"},{Header:"Simplified Type",accessor:"typ.simple",ssSort:"typ__simple__name"},{Header:"Detailed Status",accessor:"status.original",ssSort:"status__original"},{Header:"Simplified Status",accessor:"status.simple",ssSort:"status__simple__name"}],sites:[{Header:"Index",accessor:"ind",ssSort:"ind"},{Header:"Related ID's",accessor:"oid",ssSort:"oid__code"},{Header:"Size",accessor:"size",ssSort:"size__name"},{Header:"Name",accessor:"name",ssSort:"name__name"},{Header:"State",accessor:"state",ssSort:"state__name"},{Header:"Government Regions",accessor:"govregion",ssSort:"govregion__name"},{Header:"Geological Provinces",accessor:"geoprovince",ssSort:"geoprovince__name"},{Header:"Major Materials",accessor:"majmat",ssSort:"majmat__name"},{Header:"Minor Materials",accessor:"minmat",ssSort:"minmat__name"},{Header:"Detailed Type",accessor:"typdetail",ssSort:"typ__original"},{Header:"Simplified Type",accessor:"typsimple",ssSort:"typ__simple__name"},{Header:"Detailed Status",accessor:"status.original",ssSort:"status__original"},{Header:"Simplified Status",accessor:"status.simple",ssSort:"status__simple__name"}]};t.default=function(){var e=Object(c.b)(),t=Object(o.f)(),r=Object(c.c)((function(e){return e})).popupTable,i=r.active_group,s=r[i],u=s.ind_lst,m=s.data,d=(s.loading,s.offset,s.limit),f=s.has_more,p=s.is_infinite,b=Object(a.useRef)(!1);Object(a.useEffect)((function(){f&&i&&(!b.current&&e(Object(l.B)({datagroup:i,is_infinite:!0})),b.current=!0)}),[f]),Object(a.useEffect)((function(){if(i)if(u){var r="sites"===i?"Occurrence":"Tenement";e(Object(l.B)({datagroup:i,is_infinite:!1})),e(Object(l.g)(i)),e(Object(l.bb)({ind_lst:u,datagroup:r,offset:0,limit:d,sortdict:{field:"",asc:!1},colfiltersdict:{},globalfilter:""}))}else t.goBack()}),[]);var g=Object(a.useMemo)((function(){return P[i]}),[i]);return n.a.createElement("div",{id:"table-pg-main",className:"cover-c1"},n.a.createElement("div",{className:"close-c3",onClick:function(){t.goBack()}},n.a.createElement("span",null,"x")),null===m?n.a.createElement("h1",null,"loading..."):p?n.a.createElement(w,{data:m,columns:g}):n.a.createElement(y,{data:m,columns:g}))}}}]);