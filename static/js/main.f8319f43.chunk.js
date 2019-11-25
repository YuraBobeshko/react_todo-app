(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),o=n.n(l),c=(n(15),n(16),n(9)),i=n(6),s=n(1),u=n(2),d=n(4),m=n(3),h=n(5);function f(e){return r.a.createElement("ul",{className:"filters"},[{name:"All"},{name:"Active"},{name:"Completed"}].map(function(t){return r.a.createElement("li",{key:t.name},r.a.createElement("a",{href:"#/".concat(t.name),className:e.filterState===t.name?"selected":"",onClick:function(){return e.onFilterChange(t.name)}},t.name))}))}f.defaultProps={filterState:"All",onFilterChange:{}};var p=f;function b(e){return r.a.createElement("footer",{className:"footer",style:{display:"block"}},r.a.createElement("span",{className:"todo-count"},e.items.filter(function(e){return!1===e.completed}).length," ","items left"),r.a.createElement(p,{onFilterChange:e.onFilterChange,filterState:e.filterState}),r.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:e.handleClear},"Clear completed"))}b.defaultProps={items:[],handleClear:{},onFilterChange:{},filterState:"All"};var g=b;function y(e){return r.a.createElement("li",{className:""},r.a.createElement("div",{className:"view"},r.a.createElement("input",{type:"checkbox",className:"toggle",id:e.item.id,checked:e.item.completed,onChange:e.handleChecked}),r.a.createElement("label",{htmlFor:e.item.id},e.item.body),r.a.createElement("button",{type:"button",className:"destroy","data-button-id":e.item.id,onClick:e.handleDestroy})))}y.defaultProps={item:{},handleChecked:{},handleDestroy:{}};var v=y;function C(e){return r.a.createElement("ul",{className:"todo-list"},e.items.map(function(t){return r.a.createElement(v,{item:t,key:t.id,handleDestroy:e.handleDestroy,handleChecked:e.handleChecked})}))}C.defaultProps={items:[],handleChecked:{},handleDestroy:{}};var O=C,E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState({text:e.target.value})},n.state={text:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.handleSubmit(e.state.text),e.setState({text:""})}},r.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.text,onChange:this.handleChange}))}}]),t}(a.Component);E.defaultProps={handleSubmit:{}};var k=E,S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={completedAll:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:this.state.checked,onChange:function(){e.props.handleToggleAll(e.state.completedAll),e.setState(function(e){return{completedAll:!e.completedAll}})}}),r.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))}}]),t}(a.Component);S.defaultProps={handleToggleAll:{}};var j=S;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){n.setState(function(t){return{todos:[].concat(Object(i.a)(t.todos),[{id:t.currentId,body:e,completed:!1}]),currentId:t.currentId+1}})},n.handleDestroy=function(e){var t=+e.target.dataset.buttonId;n.setState(function(e){return{todos:e.todos.filter(function(e){return e.id!==t})}})},n.handleChecked=function(e){var t=+e.target.id;n.setState(function(e){return{todos:e.todos.map(function(e){var n=A({},e);return e.id===t&&(n.completed=!n.completed),n})}})},n.handleToggleAll=function(e){n.setState(function(t){return{todos:t.todos.map(function(t){var n=A({},t);return n.completed=!e,n})}})},n.handleClear=function(){n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},n.onFilterChange=function(e){n.setState({filterType:e})},n.filter=function(e,t){switch(t){case"All":return e;case"Active":return e.filter(function(e){return!e.completed});case"Completed":return e.filter(function(e){return e.completed});default:return e}},n.state={todos:[],currentId:1,filterType:"All"},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todos"))||[],t=localStorage.getItem("currentId");this.setState(function(n){return A({},n,{todos:Object(i.a)(e),currentId:+t})})}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.todos);localStorage.setItem("todos",e),localStorage.setItem("currentId",this.state.currentId)}},{key:"render",value:function(){return r.a.createElement("section",{className:"todoapp"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"todos"),r.a.createElement(k,{handleSubmit:this.handleSubmit})),r.a.createElement("section",{className:"main",style:{display:"block"}},r.a.createElement(j,{handleToggleAll:this.handleToggleAll}),r.a.createElement(O,{items:this.filter(this.state.todos,this.state.filterType),handleDestroy:this.handleDestroy,handleChecked:this.handleChecked})),r.a.createElement(g,{items:this.state.todos,handleClear:this.handleClear,onFilterChange:this.onFilterChange,filterState:this.state.filterType}))}}]),t}(a.Component);var D=function(){return r.a.createElement(w,null)};o.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f8319f43.chunk.js.map