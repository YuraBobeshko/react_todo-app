(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(30)},17:function(e,t,n){},18:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),l=n(10),r=n.n(l),i=(n(17),n(18),n(11)),o=n(1),u=n(2),m=n(3);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,c)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(c.useState)({title:"",id:0,check:!1,input:!1}),i=Object(u.a)(r,2),s=i[0],p=i[1],f=Object(c.useState)({id:0,complited:0}),b=Object(u.a)(f,2),h=b[0],E=b[1],k=Object(c.useState)("all"),v=Object(u.a)(k,2),O=v[0],g=v[1],y=Object(c.useState)(""),j=Object(u.a)(y,2),N=j[0],C=j[1],w=function(){var e=Object(o.a)(n.filter(function(e){return!1===e.check})).length;E({id:h.id,complited:e})},x=function(e){var t=Object(o.a)(n.map(function(t){return t.id===e&&(t.check=!t.check),t}));l(t),w()},D=function(e){var t=Object(o.a)(n);n.map(function(n,c){return n.id===e&&t.splice(c,1),n}),l(t),w()},P=function(e){var t=Object(o.a)(n.map(function(t){return t.id===e&&(t.input=!t.input),t}));l(t);var c=n.find(function(t){return t.id===e});C(c.title)},S=function(e){C(e.target.value)},F=function(e){return N},A=function(){return g("all"),n.map(function(e){return a.a.createElement("li",{onDoubleClick:function(){return P(e.id)},className:"".concat(e.check?"completed":""," ").concat(e.input?"editing":"")},a.a.createElement("div",{className:"view"},a.a.createElement("input",{onChange:function(){return x(e.id)},checked:e.check,type:"checkbox",className:"toggle"}),a.a.createElement("label",{htmlFor:e.id},e.title),a.a.createElement("button",{onClick:function(){return D(e.id)},type:"button",className:"destroy"})),a.a.createElement("input",{onChange:function(e){return S(e)},autoFocus:!0,value:N,type:"text",onBlur:function(){return function(e){var t=Object(o.a)(n.map(function(t){return t.id===e&&(t.input=!t.input,t.title=N),t}));l(t)}(e.id)},className:"edit",hidden:!e.input}))})},B=function(){return g("active"),n.map(function(e){return a.a.createElement("li",{onDoubleClick:function(){return P(e.id)},className:"".concat(e.check?"completed":""," ").concat(e.input?"editing":"")},a.a.createElement("div",{className:"view",id:e.id},a.a.createElement("input",{value:F(e.id),onChange:function(){return x(e.id)},checked:e.check,type:"checkbox",className:"toggle"}),a.a.createElement("label",{htmlFor:e.id},e.title),a.a.createElement("button",{onClick:function(){return D(e.id)},type:"button",className:"destroy"})),a.a.createElement("input",{onChange:function(e){return S(e)},autoFocus:!0,value:F(),type:"text",onBlur:function(){return P(e.id)},className:"edit",hidden:!e.input}))})},J=function(){return g("complited"),n.map(function(e){return a.a.createElement("li",{onDoubleClick:function(){return P(e.id)},className:"".concat(e.check?"completed":""," ").concat(e.input?"editing":"")},a.a.createElement("div",{className:"view",id:e.id},a.a.createElement("input",{value:F(e.id),onChange:function(){return x(e.id)},checked:e.check,type:"checkbox",className:"toggle"}),a.a.createElement("label",{htmlFor:e.id},e.title),a.a.createElement("button",{onClick:function(){return D(e.id)},type:"button",className:"destroy"})),a.a.createElement("input",{onChange:function(t){return S(e.id)},autoFocus:!0,value:F(e.id),type:"text",onBlur:function(){return P(e.id)},className:"edit",hidden:!e.input}))})},I={"/":function(){return a.a.createElement(A,null)},"/active":function(){return a.a.createElement(B,null)},"/completed":function(){return a.a.createElement(J,null)}},M=Object(m.useRoutes)(I);return a.a.createElement("section",{className:"todoapp"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("form",{onSubmit:function(e){return function(e){""!==s.title&&(n.push(s),p({titel:"",id:0,check:!1,input:!1}),h.id++),e.preventDefault(),w()}(e)}},a.a.createElement("input",{value:s.titel,className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){return function(e){var t=e.target.value.trim();p({title:t,id:h.id,check:!1,input:!1})}(e)},type:"text"}))),a.a.createElement("section",{className:"main",style:{display:"block"}},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),a.a.createElement("label",{onClick:function(){return function(){var e;e=n.some(function(e){return!1===e.check})?Object(o.a)(n.map(function(e){return d({},e,{check:!0})})):Object(o.a)(n.map(function(e){return d({},e,{check:!1})})),l(e)}()},htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement("ul",{className:"todo-list"},M||a.a.createElement(A,null))),a.a.createElement("footer",{className:"footer",style:{display:"block"}},a.a.createElement("span",{className:"todo-count"},1===h.complited?"".concat(h.complited," item left"):"".concat(h.complited," items left")),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement(m.A,{href:"/",className:"".concat("all"===O?"selected":"")},"All")),a.a.createElement("li",null,a.a.createElement(m.A,{href:"/active",className:"".concat("active"===O?"selected":"")},"Active")),a.a.createElement("li",null,a.a.createElement(m.A,{href:"/completed",className:"".concat("complited"===O?"selected":"")},"Completed"))),a.a.createElement("button",{onClick:function(){return l([]),void w()},type:"button",className:"clear-completed",style:{display:"block"}},"Clear completed")))};r.a.render(a.a.createElement(p,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e5498411.chunk.js.map