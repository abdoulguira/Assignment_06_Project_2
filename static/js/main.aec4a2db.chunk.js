(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l);n(9);var o=function(){return r.a.createElement("div",{className:"forheader"},r.a.createElement("h1",{id:"text"},"City Search"))},u=n(1);function i(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"ZipCode: ".concat(e.entry))))}function m(){var e=r.a.useState(""),t=Object(u.a)(e,2),n=t[0],a=t[1],l=r.a.useState(""),c=Object(u.a)(l,2),o=c[0],m=c[1];return r.a.createElement("div",{className:"box"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("https://ctp-zip-api.herokuapp.com/city/".concat(o.toUpperCase())).then(function(e){if(e.ok)return e.json()}).then(function(e){console.log(e),a(e)}).catch(function(e){console.log("Error: "+e)})}},r.a.createElement("label",{id:"label"},"Enter City:"),r.a.createElement("input",{type:"text",placeholder:"CITY",name:"lname",value:o,onChange:function(e){m(e.target.value)}}),"  ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("button",null,"Search")),r.a.createElement("div",{className:"scroll-bar"},n?n.map(function(e){return r.a.createElement(i,{entry:e})}):r.a.createElement("h2",null,"No matching Zicodes found yet :(")))}function E(){return r.a.createElement("div",null,r.a.createElement(o,{text:"Zip Code Search",color:"red"}),r.a.createElement(m,null))}c.a.render(r.a.createElement(E,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.aec4a2db.chunk.js.map