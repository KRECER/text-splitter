(this["webpackJsonptext-splitter"]=this["webpackJsonptext-splitter"]||[]).push([[0],{65:function(e,t,n){e.exports=n.p+"static/media/mear.791f52be.png"},75:function(e,t,n){e.exports=n(88)},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),u=n.n(c),o=n(20),i=n(30),l=n(127),s=n(35),m=n(60),b=n.n(m),f=n(40),p=n(34),d={fullText:"",isFilledText:!1,parts:{column1:"",column2:"",column3:""}},h="CHANGE_FULL_TEXT",v="CHANGE_COLUMN_TEXT",j="SPLIT_TEXT",O=function(e){return{type:h,payload:e}},g=function(e,t){return{type:v,payload:{numCol:e,text:t}}},x=function(e,t){var n=t.split(" "),a=Math.round(n.length/e),r={};switch(e){case 1:r.column1=t;break;case 2:r.column1=n.slice(0,a).join(" "),r.column2=n.slice(a).join(" ");break;case 3:r.column1=n.slice(0,a).join(" "),r.column2=n.slice(a,a+a).join(" "),r.column3=n.slice(a+a).join(" ")}return{type:j,payload:r}},E=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)({},e,{fullText:t.payload,isFilledText:!0,parts:Object(p.a)({},e.parts,{column1:t.payload})});case v:return Object(p.a)({},e,{parts:Object(p.a)({},e.parts,Object(f.a)({},"column".concat(t.payload.numCol),t.payload.text))});case j:return Object(p.a)({},e,{parts:t.payload});default:return e}}),Object(s.a)(b.a)),y=n(27),k=n(16),T=n(17),w=n(125),C=function(e){return e.fullText},M=function(e){return e.parts},F=function(e){return e.isFilledText},W=n(46),I=n(128);function L(){var e=Object(k.a)(["\n  .MuiInputBase-inputMultiline::-webkit-scrollbar {\n    width: 2px;\n    height: 2px;\n  }\n\n  .MuiInputBase-inputMultiline::-webkit-scrollbar-thumb {\n    background: #333;\n  }\n\n  .MuiInputBase-inputMultiline::-webkit-scrollbar-track {\n    background: #fff;\n  }\n\n  ",";\n"]);return L=function(){return e},e}var A=Object(T.a)(I.a)(L(),(function(e){var t=e.m;return t&&(t instanceof Array?"margin: ".concat(t.map((function(e){return"".concat(e,"px")})).join(" ")," !important ;"):"margin: ".concat(t,"px;"))})),S=function(e){var t=e.value,n=e.onChange,a=e.label,c=e.fullWidth,u=e.rows,o=e.autoFocus,i=Object(W.a)(e,["value","onChange","label","fullWidth","rows","autoFocus"]);return r.a.createElement(A,Object.assign({variant:"outlined",multiline:!0,label:a,value:t,onChange:n,rows:u,fullWidth:c,autoFocus:o},i))};S.defaultProps={label:"",fullWidth:!1,rows:1,autoFocus:!1};var B=S,_=n(129);function N(){var e=Object(k.a)(["\n  border-radius: 0;\n"]);return N=function(){return e},e}var z=Object(T.a)(_.a)(N()),X=function(e){return r.a.createElement(z,e,e.children)};function G(){var e=Object(k.a)(["\n  width: 100%;\n  text-align: center;\n"]);return G=function(){return e},e}var H=T.a.form(G()),J=function(e){var t=e.text,n=e.handleChangeText;return r.a.createElement(H,null,r.a.createElement(B,{value:t,onChange:n,rows:15,label:"Type here text...",m:[0,0,20,0],fullWidth:!0}),r.a.createElement(X,{variant:"contained",color:"primary",component:i.b,to:"/splitter",disabled:!t,size:"large"},"Layout"))};function P(){var e=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return P=function(){return e},e}var U=Object(T.a)(w.a)(P()),q=function(){var e=Object(o.c)(C),t=Object(o.b)();return r.a.createElement(U,{maxWidth:"md"},r.a.createElement(J,{text:e,handleChangeText:function(e){t(O(e.target.value))}}))},R=n(47),D=n(39),K=n(126),Q=n(131),V=n(66),Y=n.n(V),Z=n(65),$=n.n(Z);function ee(){var e=Object(k.a)(["\n  position: relative;\n  height: 100%;\n  padding: 15px;\n  background-color: rgba(255, 255, 255, 0.9);\n  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.5);\n"]);return ee=function(){return e},e}function te(){var e=Object(k.a)(["\n  margin: 0 -4px;\n  margin-bottom: 25px;\n"]);return te=function(){return e},e}function ne(){var e=Object(k.a)(["\n  height: 100vh;\n  padding: 100px 0;\n  background: url(",") no-repeat center;\n  background-size: cover;\n"]);return ne=function(){return e},e}function ae(){var e=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  background: #fff;\n\n  .MuiInputBase-root {\n    height: 100%;\n  }\n\n  .MuiInputBase-input {\n    height: 100%;\n  }\n"]);return ae=function(){return e},e}var re=Object(T.a)(B)(ae()),ce=T.a.div(ne(),$.a),ue=Object(T.a)(K.a)(te()),oe=T.a.div(ee()),ie=function(){var e=Object(a.useState)(!1),t=Object(D.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(1),i=Object(D.a)(u,2),l=i[0],s=i[1],m=Object(a.useState)(null),b=Object(D.a)(m,2),f=b[0],p=b[1],d=Object(o.b)(),h=Object(o.c)(C),v=Object(o.c)(M),j=Object(a.useMemo)((function(){return Object(R.a)(Array(3)).map((function(){return r.a.createRef()}))}),[]),E=Object(a.useState)(j[0]),y=Object(D.a)(E,2),k=y[0],T=y[1];!function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(a.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))}(k,(function(){if(c(!1),f){var e=Object.keys(v).reduce((function(e,t){return e.trim()+" "+v[t]}),"");d(O(e)),d(x(l,e)),p(null)}}));var F=function(e){d(g(f,e.target.value))},W=function(e){return r.a.createElement(K.a,{key:e,item:!0},r.a.createElement(X,{variant:"contained",color:"primary",startIcon:r.a.createElement(Y.a,null),onClick:function(){return s(t=e),void d(x(t,h));var t},disabled:!!f},e))},I=function(e){var t=r.a.createElement(re,{onChange:F,value:v["column".concat(f)],fullWidth:!0,autoFocus:!0});return r.a.createElement(K.a,{item:!0,xs:12,md:4,key:e,ref:j[e-1]},r.a.createElement(oe,{onClick:function(){return function(e){T(j[e-1]),p(e),c(!0)}(e)}},v["column".concat(e)],f===e&&t))};return r.a.createElement(ce,null,r.a.createElement(w.a,{maxWidth:"lg"},r.a.createElement(ue,{container:!0,spacing:1},Object(R.a)(Array(l)).map((function(e,t){return I(++t)}))),r.a.createElement(K.a,{container:!0,spacing:1},Object(R.a)(Array(3)).map((function(e,t){return W(++t)})))),r.a.createElement(Q.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:n,message:"To save, click outside the column"}))},le=function(e){var t=e.component,n=Object(W.a)(e,["component"]),a=Object(o.c)(F),c=Object(y.f)();return r.a.createElement(y.b,n,a?r.a.createElement(t,null):r.a.createElement(y.a,{to:{pathname:"/",state:{from:c.pathname}}}))},se=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(y.b,{path:"/",component:q,exact:!0}),r.a.createElement(le,{path:"/splitter",component:ie}))};u.a.render(r.a.createElement(o.a,{store:E},r.a.createElement(i.a,null,r.a.createElement(l.a,null),r.a.createElement(se,null))),document.querySelector(".main"))}},[[75,1,2]]]);
//# sourceMappingURL=main.eba619a9.chunk.js.map