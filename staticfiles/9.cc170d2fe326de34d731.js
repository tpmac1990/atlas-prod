(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{112:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),c=a(1),u=a(99),o=a(101);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var d=function(e){var t=Object(l.b)(),a=e.defualtValue,u=e.id,o=e.datagroup,s=e.name,d=e.input_type,m=i(Object(n.useState)(a),2),f=m[0],p=m[1];return r.a.createElement("input",{type:d,className:"cell-edit-input",id:u,value:f,onChange:function(e){return p(e.target.value)},onBlur:function(){t(Object(c.Mb)({key:u,field:"percown",name:s,datagroup:o,value:f}))},autoComplete:"off"})},m=function(e){var t=Object(l.b)(),a=e.defualtValue,n=e.id,u=e.datagroup,o=e.name,i=e.model,s=e.field,d=Object(l.c)((function(e){return e.dataEdit.dropdowns}))[i],m=function(){return r.a.createElement("select",{className:"cell-edit-input",value:a,onChange:function(e){var a=e.target.value;t(Object(c.Mb)({key:n,field:s,name:o,datagroup:u,value:a}))}},d.map((function(e){return r.a.createElement("option",{key:e[0],value:e[0]},e[1])})))};return void 0===d?null:r.a.createElement(m,null)};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var y=function(e){var t=Object(l.b)(),a=e.datagroup,r=e.name;return Object(n.useEffect)((function(){t(Object(c.e)({datagroup:a,name:r}))}),[]),null},v=function(e){var t=Object(l.b)(),a=e.data,i=e.values,s=e.dropdown_dict,f=e.header,b=e.datagroup,y=e.has_input,v=e.columns,g=e.is_large,h=p(Object(n.useState)(!1),2),j=h[0],O=h[1],E=s.name,w=s.unique_grp,_=Object(l.c)((function(e){return e})).dropdown,k=_.unique_multi_groups,S=k.error,N=k.names,A=Object(n.useRef)(!0);Object(n.useEffect)((function(){S.name===E&&(O(!1),t(Object(c.qb)({message:"Values need to be unique across all ".concat(N[E]," groups "),type:"error",style:"error-fixed-edit"})))}),[S]),Object(n.useEffect)((function(){A.current?(A.current=!1,w&&t(Object(c.xb)({name:E,group:w}))):w&&t(Object(c.f)({group:w,values:Object.keys(a).map((function(e){return a[e].label}))}))}),[a]),Object(n.useEffect)((function(){if(void 0!==_[E]){var e=_[E].selected;if(void 0!==e&&""!==e.key){var n=e.key,r=e.label;if(n in a)a[n].remove?(t(Object(c.H)({name:E,datagroup:b,key:n})),O(!1)):a[n].remove?console.log("ItemsManyDropdownAddMulti component. uncaught"):O(!1);else{var l={name:E,datagroup:b,key:n,label:r};v.forEach((function(e,t){0!==t&&(l[e.label]=e.default)})),t(Object(c.d)(l)),O(!1)}}}}),[_]),Object(n.useEffect)((function(){var e={},a=s.key,n=s.label;i.forEach((function(t){var r={id:t[a],label:t[n],current:!0,remove:!1,add:!1};v.forEach((function(e,a){0!==a&&(r[e.label]=t[e.label])})),e[t[a]]=r})),t(Object(c.db)({data:e,name:E,datagroup:b}))}),[]),Object(n.useEffect)((function(){v.forEach((function(e){"select"===e.edit_type&&t(Object(c.p)({model:e.model,key:e.select_key,label:e.select_label}))}))}),[]);var C=function(e){var a=e.target.id;t(Object(c.H)({name:E,datagroup:b,key:a}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,f),r.a.createElement("div",{className:"edit-table-c1"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"row"},v.map((function(e){return r.a.createElement("th",{key:e.header,className:g?e.lg_style:e.sm_style},e.header)})),r.a.createElement("th",{className:g?"col-2":"col-1"}))),r.a.createElement("tbody",null,Object.keys(a).map((function(e){var t=a[e].id;return a[e].remove?null:r.a.createElement("tr",{key:t,className:"row"},v.map((function(n){var l=n.header,c=n.lg_style,u=n.sm_style,o=n.label,i=n.edit_type,s=n.model,f=n.input_type;n.default;return i?r.a.createElement("td",{key:l,className:g?c:u},"select"===i?r.a.createElement(m,{defualtValue:a[e][o],id:t,datagroup:b,name:E,model:s,field:o}):r.a.createElement(d,{defualtValue:a[e][o],id:t,datagroup:b,name:E,input_type:f})):r.a.createElement("td",{key:l,className:g?c:u},a[e][o])})),r.a.createElement("td",{className:g?"col-2":"col-1"},r.a.createElement("span",{id:t,onClick:C},g?"Remove":"x")))})))),r.a.createElement("div",{className:"edit-add",onClick:function(){return O((function(e){return!e}))}},r.a.createElement("span",null,"Add +")),j?r.a.createElement("div",{className:"add-select"},y?r.a.createElement(o.a,{dict:s}):r.a.createElement(u.a,{dict:s})):null))};t.a=function(e){var t=e.dropdown_dict,a=e.datagroup,n=t.name,c=Object(l.c)((function(e){return e})).dataEdit[a][n];return void 0===c?r.a.createElement(y,{datagroup:a,name:n}):r.a.createElement(v,f({},e,{data:c}))}},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a(1),u=a(112),o=a(109),i=a(110),s=a(36),d=a(9),m=a(111);t.default=function(e){var t=e.match.params.id,a=Object(l.b)(),f=Object(d.g)().url,p=Object(d.f)(),b=Object(l.c)((function(e){return e.detailSelection})).holder,y=Object(l.c)((function(e){return e.dataEdit})),v=y.holders,g=y.holder_result,h=m.a.groups,j=m.a.columns,O=m.a.multis,E=h.parentSelect,w=h.subsidiarySelect,_=h.listedSelect,k=O.relatedMulti,S=O.listedMulti,N=Object(s.a)().viewportStyle,A=["tv","desktop","laptop"].includes(N);Object(n.useEffect)((function(){a(Object(c.r)(t))}),[t]);return Object(n.useEffect)((function(){var e=g.success,t=g.msg;e&&(p.push(f.replace("edit/","")),a(Object(c.I)("holder_result")),window.scrollTo(0,0),a(Object(c.qb)({message:"Holder ".concat(t," updated successfully"),type:"success",style:"success-edit"})))}),[g]),null===b?null:r.a.createElement("div",{className:"edit-page"},r.a.createElement(i.a,{title:b.holder_name,index:t}),r.a.createElement("form",null,r.a.createElement(u.a,{is_large:A,header:"Parents",datagroup:"holders",values:b.parent_company,has_input:!1,columns:k,dropdown_dict:E}),r.a.createElement(u.a,{is_large:A,header:"Subsidiaries",datagroup:"holders",values:b.subsidiaries,has_input:!1,columns:k,dropdown_dict:w}),r.a.createElement(u.a,{is_large:A,header:"Listed",datagroup:"holders",values:b.listed_simple,has_input:!0,columns:S,dropdown_dict:_}),r.a.createElement("button",{type:"submit",className:"btn-c5 edit-submit-btn",onClick:function(e){e.preventDefault();var n=Object(o.a)(v,b,j,t);n.changes?a(Object(c.F)({id:t,dict:n,endpoint:"holder"})):(window.scrollTo(0,0),a(Object(c.qb)({message:"No changes were made",type:"warning",style:"warning-edit"})))}},"Submit")))}}}]);