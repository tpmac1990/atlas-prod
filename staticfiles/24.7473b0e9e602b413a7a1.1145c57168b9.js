(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(11),r=a(12),i=a(2),o=a(1),m=function(e){var t=e.children,a=e.msg,r=Object(i.b)();return Object(i.c)((function(e){return e.authenticate})).isAuthenticated?c.a.createElement(n.Fragment,null,t):(r(Object(o.Eb)({message:a,type:"error",style:"error-map"})),c.a.createElement(l.a,{to:"/login"}))},s=Object(n.lazy)((function(){return a.e(7).then(a.bind(null,147))})),u=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,148))})),b=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,149))})),d=function(){return c.a.createElement("h6",{className:"sub-header-tip"},"Select one of the above options to begin a detailed search ...")};t.default=function(){var e=Object(l.i)(),t=e.path,a=e.url,n=Object(l.h)().pathname;return c.a.createElement(m,{msg:"Log in required to view detailed information"},c.a.createElement("ul",{className:"sub-header-c1"},c.a.createElement("li",{className:n.includes("title")?"active-sub-field":""},c.a.createElement(r.b,{to:"".concat(a,"/title"),name:"title"},"Title")),c.a.createElement("li",{className:n.includes("site")?"active-sub-field":""},c.a.createElement(r.b,{to:"".concat(a,"/site"),name:"site"},"Site")),c.a.createElement("li",{className:n.includes("holder")?"active-sub-field":""},c.a.createElement(r.b,{to:"".concat(a,"/holder"),name:"holder"},"Holder"))),c.a.createElement("div",{id:"detail-groups"},c.a.createElement(l.b,{path:"".concat(t,"/home"),component:d}),c.a.createElement(l.b,{path:"".concat(t,"/title"),component:s}),c.a.createElement(l.b,{path:"".concat(t,"/site"),component:u}),c.a.createElement(l.b,{path:"".concat(t,"/holder"),component:b})))}}}]);