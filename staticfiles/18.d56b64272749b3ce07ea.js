(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),l=n(18);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,156))})),m=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,155))})),s=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,157))})),f=function(){return r.a.createElement("h6",{className:"sub-header-tip"},"Select one of the above options to begin a detailed search ...")};t.default=function(){var e=Object(o.g)(),t=e.path,n=e.url,i=c(Object(a.useState)(null),2),b=i[0],d=i[1],h=function(e){d(e.target.name)};return r.a.createElement(a.Fragment,null,r.a.createElement("ul",{className:"sub-header-c1"},r.a.createElement("li",{onClick:h,className:"title"===b?"active-sub-field":""},r.a.createElement(l.b,{to:"".concat(n,"/title"),name:"title"},"Title")),r.a.createElement("li",{onClick:h,className:"site"===b?"active-sub-field":""},r.a.createElement(l.b,{to:"".concat(n,"/site"),name:"site"},"Site")),r.a.createElement("li",{onClick:h,className:"holder"===b?"active-sub-field":""},r.a.createElement(l.b,{to:"".concat(n,"/holder"),name:"holder"},"Holder"))),r.a.createElement("div",{id:"detail-groups"},r.a.createElement(o.a,{path:"".concat(t,"/home"),component:f}),r.a.createElement(o.a,{path:"".concat(t,"/title"),component:u}),r.a.createElement(o.a,{path:"".concat(t,"/site"),component:m}),r.a.createElement(o.a,{path:"".concat(t,"/holder"),component:s})))}}}]);