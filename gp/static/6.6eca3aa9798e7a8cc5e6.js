(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=function(e,t){switch(t){case"date":var n=e.split("-");return"2999"===n[0]?"":"".concat(n[2],"-").concat(n[1],"-").concat(n[0]);case"length_boolean":return 0!=e.length?"Yes":"No";case"length":return e.length;default:return e}};t.a=function(e){var t=e.dict,n=e.value,i=t.header,c=t.table_data;return r.a.createElement(a.Fragment,null,r.a.createElement("h5",null,i,":"),r.a.createElement("div",{className:"detail-sub-info-c1"},r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,c.map((function(e,t){for(var a=n,i=0;i<e.td.length;i++)a=a?a[e.td[i]]:null;var c=[];return r.a.createElement("tr",{key:t,className:"row"},r.a.createElement("th",{className:"col-5"},e.th,":"),null==e.multi?r.a.createElement("td",{className:"col-7"},l(a,e.format)):r.a.createElement("td",{className:"col-7"},a.map((function(t,n){var a=""!=e.multi?t[e.multi]:t;if(!c.includes(a))return c.push(a),r.a.createElement("p",{key:n},l(a,e.format))}))))}))))),r.a.createElement("br",null))}},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),l=n(17),i=function(e){var t=e.group,n=e.index,a=e.title;return r.a.createElement("div",{className:"detail-title"},r.a.createElement("h2",null,a),r.a.createElement("div",null,r.a.createElement(l.b,{className:"link-c2",to:"../../../detail/".concat(t,"/edit/").concat(n)},"edit")))}},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return l}));var a={SubsidiariesDict:{styles:"detail-sub-info-c1",lookup:"subsidiaries",header:"Subsidiaries",table_headers:["Name","% Held","Type","Listed"],table_data:[["name"],["percown"],["typ"],["listed"]]},OwnersDict:{styles:"detail-sub-info-c1",lookup:"parent_company",header:"Parent Companies",table_headers:["Name","% Held","Type","Listed"],table_data:[["name"],["percown"],["typ"],["listed"]]},TickerDict:{styles:"detail-sub-info-c1",lookup:"listed",header:"Listed Locations",table_headers:["Ticker","Exchange Code","Exchange Name"],table_data:[["ticker"],["exchange","code"],["exchange","name"]]},BasicDict:{header:"General Info",table_data:[{th:"Holder/Company Type",td:["company_type","original"],multi:null,format:null},{th:"Is Listed",td:["listed"],multi:null,format:"length_boolean"},{th:"Number of Owners",td:["parent_company"],multi:null,format:"length"},{th:"Number of Subsidiaries",td:["subsidiaries"],multi:null,format:"length"},{th:"Number of Titles",td:["title_count"],multi:null,format:"length"},{th:"Number of Sites",td:["site_count"],multi:null,format:"length"},{th:"States Holding Titles",td:["states"],multi:"",format:null}]}},r={RelatedTitlesDict:{styles:"detail-sub-info-c1",lookup:"tenements",header:"Related Titles",table_headers:["ID","Type","Status"],table_data:[["ind"],["typ"],["status"]]},NameDict:{header:"Site Names",table_data:[{th:"Names",td:["name"],multi:"name",format:null}]},TypeDict:{header:"Site Type",table_data:[{th:"General Group",td:["typ"],multi:"simple",format:null},{th:"Detailed Group",td:["typ"],multi:"original",format:null},{th:"Resource Size",td:["size","name"],multi:null,format:null}]},StatusDict:{header:"Site Status",table_data:[{th:"General Group",td:["status","simple"],multi:null,format:null},{th:"Detailed Group",td:["status","original"],multi:null,format:null}]},LocationDict:{header:"Location",table_data:[{th:"State",td:["state","name"],multi:null,format:null},{th:"Local Governments",td:["localgov","name"],multi:null,format:null},{th:"Government Regions",td:["govregion","name"],multi:null,format:null},{th:"Geological Provinces",td:["geoprovince"],multi:"name",format:null}]},MaterialsDict:{header:"Materials",table_data:[{th:"Major Materials",td:["majmat"],multi:"name",format:null},{th:"Minor Materials",td:["minmat"],multi:"name",format:null}]},AlternateSourceDict:{header:"Alternate Source ID's",table_data:[{th:"ID's",td:["oid"],multi:"code",format:null}]}},l={DateDict:{header:"Dates",table_data:[{th:"Lodge Date",td:["lodgedate"],multi:null,format:"date"},{th:"Start Date",td:["startdate"],multi:null,format:"date"},{th:"End Date",td:["enddate"],multi:null,format:"date"}]},LocationDict:{header:"Location",table_data:[{th:"Onshore / Offshore",td:["shore","name"],multi:null,format:null},{th:"State",td:["state","name"],multi:null,format:null},{th:"Local Governments",td:["localgov"],multi:"name",format:null},{th:"Government Regions",td:["govregion"],multi:"name",format:null},{th:"Geological Provinces",td:["geoprovince"],multi:"name",format:null}]},TypeDict:{header:"Title Type",table_data:[{th:"General Group",td:["typ","simple"],multi:null,format:null},{th:"Detailed Group",td:["typ","original"],multi:null,format:null},{th:"Act",td:["typ","act"],multi:null,format:null}]},StatusDict:{header:"Title Status",table_data:[{th:"General Group",td:["status","simple"],multi:null,format:null},{th:"Detailed Group",td:["status","original"],multi:null,format:null}]},MaterialsDict:{header:"Materials",table_data:[{th:"Major Materials",td:["majmat"],multi:"name",format:null},{th:"Minor Materials",td:["minmat"],multi:"name",format:null}]},AlternateSourceDict:{header:"Alternate Source ID's",table_data:[{th:"ID's",td:["oid"],multi:"code",format:null}]},ParentsDict:{header:"Title Holders Parent Companies",table_data:[{th:"Names",td:["parents"],multi:null,format:null}]},HoldersDict:{styles:"detail-sub-info-c1",lookup:"holder",header:"Title Holders",table_headers:["Name","% Held"],table_data:[["name"],["percown"]]}}},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),i=n(2),c=n(1),o=n(99),u=n(100),m=n(44),s=n(101),d=n(102);var f=function(e){var t=e.match.params.id,n=Object(i.b)(),l=Object(i.c)((function(e){return e.detailSelection})).title,f=d.c.DateDict,b=d.c.LocationDict,h=d.c.TypeDict,p=d.c.StatusDict,y=d.c.MaterialsDict,v=d.c.AlternateSourceDict,E=d.c.ParentsDict,g=d.c.HoldersDict;return Object(a.useEffect)((function(){n(Object(c.s)(t))}),[t]),Object(a.useEffect)((function(){l&&n(Object(c.X)({ind_lst:l.occurrence.map((function(e){return e.ind})),datagroup:"sites"}))}),[l]),null==l?r.a.createElement(m.a,null):r.a.createElement("div",{className:"detail-info-c1"},r.a.createElement(s.a,{group:"title",title:l.ind,index:l.ind}),r.a.createElement("div",{className:"list-table-btn-lng"},r.a.createElement("button",{className:"btn-c5",onClick:function(){return n(Object(c.rb)("sites"))}},"Related Sites Table")),r.a.createElement(u.a,{dict:f,value:l}),r.a.createElement(u.a,{dict:b,value:l}),r.a.createElement(u.a,{dict:h,value:l}),r.a.createElement(u.a,{dict:p,value:l}),r.a.createElement(u.a,{dict:y,value:l}),r.a.createElement(u.a,{dict:v,value:l}),r.a.createElement(u.a,{dict:E,value:l}),r.a.createElement(o.a,{dict:g,value:l}))},b=n(96),h=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,158))}));t.default=function(){var e=Object(l.f)(),t=Object(i.c)((function(e){return e})).dropdown,n=Object(l.g)(),c=n.path,o=n.url;return Object(a.useEffect)((function(){"title_search"==t.active_dropdown&&t.title_search&&""!==t.title_search.selected.key&&e.push("".concat(o,"/").concat(t.title_search.selected.key))}),[t]),r.a.createElement("div",null,r.a.createElement("h4",{className:"header-c1"},"Search For A Title By ID:"),r.a.createElement("div",{className:"lookup-c1"},r.a.createElement("div",{className:"ind-infinity"},r.a.createElement(b.a,{dict:{name:"title_search",endpoint:"site-group",model:"Tenement",key:"ind",label:"ind",styles:"infinite-select-c2"}}))),r.a.createElement("hr",null),r.a.createElement(l.a,{exact:!0,path:"".concat(c,"/:id"),component:f}),r.a.createElement(l.a,{exact:!0,path:"".concat(c,"/edit/:id"),component:h}))}},96:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(2),i=n(1),c=function(e){var t=Object(l.b)(),n=e.scrollHandler,a=e.options,c=e.name,o=Object(l.c)((function(e){return e.dropdown.unique_multi_groups})),u=o.names,m=o.values,s=function(e){var n=e.target,a=n.id,r=n.innerHTML;c in u?m[u[c]].includes(r)?t(Object(i.kb)({name:c,value:r})):(t(Object(i.d)({group:u[c],values:[r]})),t(Object(i.hb)({selection:{key:a,label:r},name:c}))):t(Object(i.hb)({selection:{key:a,label:r},name:c}))};return r.a.createElement("div",{className:"infinity-select-dropdown",onScroll:n},a.map((function(e){return r.a.createElement("p",{key:e[0],id:e[0],onClick:s},e[1])})))};function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var d=function(e){var t=Object(l.b)(),n=e.name,m=Object(l.c)((function(e){return e.dropdown[n]})),s=m.model,d=m.key,f=m.label,b=m.search,h=m.data,p=m.limit,y=m.loading,v=m.clientmax,E=m.endpoint,g=u(Object(a.useState)(h.length>p),2),j=g[0],O=g[1],S=u(Object(a.useState)(!1),2),_=S[0],w=S[1],D=u(Object(a.useState)(0),2),k=D[0],T=D[1],N=u(Object(a.useState)(h),2),A=N[0],I=N[1],G=u(Object(a.useState)([]),2),L=G[0],M=G[1],H=u(Object(a.useState)(!0),2),x=H[0],C=H[1],P=u(Object(a.useState)(!0),2),R=P[0],z=P[1];Object(a.useEffect)((function(){y&&t(Object(i.p)({name:n,model:s,key:d,label:f,search:b,offset:k,limit:p,clientmax:v},E))}),[y]),Object(a.useEffect)((function(){w(!0)}),[h]),Object(a.useEffect)((function(){if(!R){var e=setTimeout((function(){T(0),C(!0),w(!0)}),500);return function(){return clearTimeout(e)}}}),[b]);return Object(a.useEffect)((function(){_&&(x?(I(h.filter((function(e){return e[1].toLowerCase().includes(b.toLowerCase())}))),O(A.length>k+p)):(O(A.length>k+p),M((function(e){return[].concat(o(e),o(A.slice(k,k+p)))})),T((function(e){return e+p})),w(!1)))}),[_]),Object(a.useEffect)((function(){x&&(M(A.slice(k,k+p)),T(k+p),w(!1))}),[A]),Object(a.useEffect)((function(){z(!1)}),[]),r.a.createElement(c,{scrollHandler:function(e){if(j&&!_){var t=e.currentTarget,n=t.scrollTop,a=t.clientHeight;t.scrollHeight-n===a&&(C(!1),w(!0))}},options:L,name:n})};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var h=function(e){var t=Object(l.b)(),n=e.name,o=Object(l.c)((function(e){return e.dropdown[n]})),u=o.model,m=o.key,s=o.label,d=o.search,b=o.data,h=o.limit,p=o.offset,y=o.hasMore,v=o.loading,E=o.clientmax,g=o.endpoint,j=f(Object(a.useState)(!0),2),O=j[0],S=j[1];Object(a.useEffect)((function(){if(!O){var e=setTimeout((function(){t(Object(i.I)(n)),t(Object(i.Z)(n))}),500);return function(){return clearTimeout(e)}}}),[d]),Object(a.useEffect)((function(){v&&t(Object(i.p)({name:n,model:u,key:m,label:s,search:d,offset:p,limit:h,clientmax:E},g))}),[v]);return Object(a.useEffect)((function(){S(!1)}),[]),r.a.createElement(c,{name:n,scrollHandler:function(e){if(y){var a=e.currentTarget,r=a.scrollTop,l=a.clientHeight;a.scrollHeight-r===l&&t(Object(i.Z)(n))}},options:b})};function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var v=function(e){var t=e.name,n=Object(l.b)(),c=Object(a.useRef)(null),o=p(Object(a.useState)(!0),2),u=o[0],m=o[1],s=Object(l.c)((function(e){return e})).dropdown,f=s.active_dropdown,b=s[t],y=b.selected,v=b.styles,E=b.search,g=b.is_client_dropdown,j=b.visible,O=function(e){c.current&&!c.current.contains(e.target)&&f===t&&n(Object(i.t)())};return Object(a.useEffect)((function(){return document.addEventListener("click",O,!0),function(){document.removeEventListener("click",O,!0)}})),Object(a.useEffect)((function(){!j&&n(Object(i.gb)({value:"",name:t}))}),[j]),r.a.createElement("div",{ref:c,className:v,onClick:function(){!j&&n(Object(i.T)({name:t,visible:!0}))}},r.a.createElement("div",{className:"infinity-select-input ".concat(j?"blue":"grey"),onClick:function(){u&&(n(Object(i.Z)(t)),m(!1))}},r.a.createElement("input",{autoComplete:"off",type:"text",value:E,placeholder:y.label,onChange:function(e){return n(Object(i.gb)({value:e.target.value,name:t}))}}),r.a.createElement("div",{className:"infinity-down-arrow"},r.a.createElement("div",{className:"material-icons"},"keyboard_arrow_down"))),j&&(g?r.a.createElement(d,{name:t}):r.a.createElement(h,{name:t})))},E=function(e){var t=e.name;return void 0===Object(l.c)((function(e){return e.dropdown[t]}))?null:r.a.createElement(v,{name:t})};t.a=function(e){var t=Object(l.b)(),n=e.dict,c=n.name,o=n.styles,u=n.model,m=n.key,s=n.label,d=n.endpoint;return Object(a.useEffect)((function(){t(Object(i.ib)({name:c,styles:o,model:u,key:m,label:s,endpoint:d}))}),[c]),r.a.createElement(E,{name:c})}},99:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.value,n=e.dict,l=n.lookup,i=n.header,c=n.table_headers,o=n.table_data,u=n.styles;return null==t||0===t[l].length?null:r.a.createElement(a.Fragment,null,r.a.createElement("h5",null,i,":"),r.a.createElement("div",{className:u},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),c.map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,t[l].map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",null,t+1),o.map((function(t){for(var n=e,a=0;a<t.length;a++)n=n[t[a]];return r.a.createElement("td",{key:n},n)})))})))),r.a.createElement("br",null)),r.a.createElement("br",null))}}}]);