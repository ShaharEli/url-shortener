(this["webpackJsonpurl-shortener"]=this["webpackJsonpurl-shortener"]||[]).push([[0],{35:function(e,n,t){},37:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var r=t(1),i=t(0),c=t.n(i),a=t(24),o=t.n(a),u=(t(35),t(10)),s=t.n(u),l=t(13),d=t(25),f=t(8),p=t(3),b=(t(37),t(26)),j=t.n(b),h=t(4),x=t(7),O=t.n(x);function v(){var e=Object(p.a)(['\n  margin: 30px 20vw;\n  align-self: center;\n  color: "white";\n  font-size: 1em;\n  padding: 0.45em 1.5em;\n  border: 2px solid #354d9e;\n  border-radius: 3px;\n  background-color: #189fe3;\n']);return v=function(){return e},e}function g(){var e=Object(p.a)(["\n  margin: 20px 0;\n"]);return g=function(){return e},e}function m(){var e=Object(p.a)(["\n  width: 50vw;\n  border-radius: 8px;\n  border: 1px solid black;\n  height: 25px;\n  min-width: 200px;\n  &:focus {\n    border: 1px solid blue;\n    outline: none;\n    box-shadow: 0 0 2px 2px #888;\n  }\n"]);return m=function(){return e},e}function w(){var e=Object(p.a)(["\n  margin-top: ",";\n  margin-bottom: 5vh;\n"]);return w=function(){return e},e}function S(){var e=Object(p.a)(["\n  font-weight: 900;\n  font-size: 46px;\n"]);return S=function(){return e},e}function k(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return k=function(){return e},e}var y=h.a.main(k()),E=h.a.h1(S()),J=h.a.h3(w(),(function(e){return e.prefix?"8vh":"12vh"})),L=h.a.input(m()),U=h.a.div(g()),$=h.a.button(v());var I=function(){var e=Object(i.useState)(""),n=Object(f.a)(e,2),t=n[0],c=n[1],a=Object(i.useState)(""),o=Object(f.a)(a,2),u=o[0],p=o[1],b=Object(i.useState)([]),h=Object(f.a)(b,2),x=h[0],v=h[1],g=function(e,n){"url"===n?c(e.target.value):p(e.target.value)},m=function(){var e=Object(d.a)(s.a.mark((function e(n){var r,i,c,a,o,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.length<8&&alert("Please enter valid URL"),e.prev=2,e.next=5,j.a.post("/",{hello:"dedede",url:t,prefix:u});case 5:r=e.sent,i=r.data,c={originalUrl:i.url,link:"http://localhost:3001/".concat(i.prefix)},v((function(e){return[c].concat(Object(l.a)(e))})),localStorage.setItem("urls",[c].concat(Object(l.a)(x)).map((function(e){return JSON.stringify(e)})).join("#$&splitingSpot&$#")),O.a.fire("succesfully shortened ".concat(t),"","success"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),429===(null===(a=e.t0.response)||void 0===a?void 0:a.status)?O.a.fire("please wait 15 seconds between each request","","error"):400===(null===(o=e.t0.response)||void 0===o?void 0:o.status)&&O.a.fire(null===(d=e.t0.response.data)||void 0===d?void 0:d.message,"","error");case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=localStorage.getItem("urls");e&&(e=e.split("#$&splitingSpot&$#").map((function(e){return JSON.parse(e)})),v(e))}),[]),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(y,{children:[Object(r.jsx)("header",{children:Object(r.jsx)(E,{children:"URL Shoretener"})}),Object(r.jsxs)("form",{onSubmit:m,children:[Object(r.jsx)(J,{children:"Enter the url that you want to get shorter"}),Object(r.jsx)(L,{type:"text",value:t,required:!0,onChange:function(e){return g(e,"url")}}),Object(r.jsx)(J,{prefix:"true",children:"Enter prefix for the url if you want"}),Object(r.jsx)(L,{type:"text",value:u,onChange:function(e){return g(e,"prefix")}}),Object(r.jsx)("br",{}),Object(r.jsx)($,{type:"submit",children:"submit"})]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("h3",{children:"List of your shortened urls"}),x.map((function(e){return Object(r.jsxs)(U,{children:["original link: ",e.originalUrl,Object(r.jsx)("br",{}),"Shortened Link: ",Object(r.jsx)("a",{href:e.link,children:e.link})]},e.link)}))]})]})})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.9685b50a.chunk.js.map