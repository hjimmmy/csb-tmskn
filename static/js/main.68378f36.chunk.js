(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(8),c=n(7),o=n(1),u=n(2),l=n(6),i=n(0),s=n.n(i),d=n(5),p=n.n(d);n(16);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}function m(e,t){switch(t.type){case"add":return[].concat(Object(l.a)(e),[t.payload]);case"remove":return e.filter(function(e){return t.payload!==e.id});default:return e}}var b=function(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(i.useReducer)(m,[]),c=Object(u.a)(r,2),o=c[0],l=c[1];console.log({todos:o});var d=function(e){l({type:"remove",payload:e})};return s.a.createElement("div",{className:"App",style:{padding:"20px 40px"}},s.a.createElement("h3",null,"Simple Shopping List"),s.a.createElement("input",{type:"text",name:"ProductName",value:n,onChange:function(e){var t=e.target.value;t&&a(t)},placeholder:"add products here",required:!0}),s.a.createElement("button",{className:"btn btn-info",onClick:function(){var e={id:(new Date).toString(),value:n};l({type:"add",payload:e}),a("")}},"Add"),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group mt-3 mx-5"},o.map(function(e){return s.a.createElement("li",{key:e.id,className:"list-group-item d-flex justify-content-between align-items-center"},e.value,s.a.createElement("button",{className:"btn btn-warning",onClick:d.bind(void 0,e.id)},"Delete"))})))},v=(s.a.Component,document.getElementById("root"));p.a.render(s.a.createElement(b,null),v)},16:function(e,t,n){},9:function(e,t,n){e.exports=n(10)}},[[9,2,1]]]);
//# sourceMappingURL=main.68378f36.chunk.js.map