(this["webpackJsonpapi-testing"]=this["webpackJsonpapi-testing"]||[]).push([[0],{12:function(t,e,a){t.exports={header:"MainNavigation_header__2578p",nav:"MainNavigation_nav__3Ol3q",list:"MainNavigation_list__2O2mZ"}},13:function(t,e,a){t.exports={Card:"Card_Card__2a4wv",Image:"Card_Image__3Lp5b",Content:"Card_Content__3f-63",Action:"Card_Action__rB9bf"}},14:function(t,e,a){t.exports={notification:"Notification_notification__190M_",appear:"Notification_appear__2kJBy","slide-down":"Notification_slide-down__F1rMn",disappear:"Notification_disappear__2r0rh","slide-up":"Notification_slide-up__2QH3l"}},15:function(t,e,a){t.exports={CardLg:"CardDetails_CardLg__2yrg0",Content:"CardDetails_Content__2UNsM",Image:"CardDetails_Image__1midF"}},22:function(t,e,a){t.exports={main:"Layout_main__b0FbL"}},23:function(t,e,a){t.exports={list:"CardList_list__G6PBw",empty:"CardList_empty__1ADMk"}},29:function(t,e,a){},30:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(20),s=a.n(c),r=(a(29),a(2)),i=(a(30),a(5)),d=a(12),o=a.n(d),j=a(0),l=function(){return Object(j.jsx)("header",{className:o.a.header,children:Object(j.jsx)("nav",{className:o.a.nav,children:Object(j.jsxs)("ul",{className:o.a.list,children:[Object(j.jsx)("li",{className:o.a.links,children:Object(j.jsx)(i.b,{to:"/",children:"View all"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/add-cover",children:"Add new"})})]})})})},b=a(22),h=a.n(b),u=function(t){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:h.a.main,children:t.children})]})},O=a(3),m=a(24),x=a(13),f=a.n(x),g=a(14),p=a.n(g),_=function(t){var e=Object(n.useState)(p.a.appear),a=Object(r.a)(e,2),c=a[0],s=a[1];return Object(j.jsxs)("div",{className:"".concat(p.a.notification," ").concat(c),children:[Object(j.jsx)("h3",{children:t.notificationMsg}),Object(j.jsx)("button",{onClick:function(){s(p.a.disappear)},children:"Dismiss"})]})},C=a.p+"static/media/card1.cb00878d.jpg",v=a.p+"static/media/card2.f3b95f3a.jpg",N=a.p+"static/media/card3.6cdf711e.jpg",I=a.p+"static/media/card4.12cd08f7.jpg",F=a.p+"static/media/card5.43ec65b4.jpg",S=a.p+"static/media/card6.be3faa55.jpg",A=function(t){var e=Object(n.useState)(null),a=Object(r.a)(e,2),c=a[0],s=a[1],d=Object(n.useState)(null),o=Object(r.a)(d,2),l=o[0],b=o[1],h=new AbortController;Object(n.useEffect)((function(){var e=t.imgPath;1===e?b(C):2===e?b(v):3===e?b(N):4===e?b(I):5===e?b(F):6===e&&b(S)}),[t.imgPath]);return Object(j.jsxs)(j.Fragment,{children:[c&&Object(j.jsx)(_,{notificationMsg:c}),Object(j.jsxs)("li",{className:f.a.Card,children:[Object(j.jsxs)(i.b,{to:"/cards/".concat(t.id),children:[Object(j.jsx)("div",{className:f.a.Image,children:Object(j.jsx)("img",{src:l,alt:""})}),Object(j.jsxs)("div",{className:f.a.Content,children:[Object(j.jsx)("h3",{children:t.title}),Object(j.jsx)("p",{children:t.msg})]})]}),Object(j.jsx)("div",{className:f.a.Action,children:Object(j.jsx)("button",{onClick:function(){return s(null),fetch("https://react-cards-28644-default-rtdb.firebaseio.com/cards/".concat(t.id,".json"),{method:"DELETE",signal:h.signal}).then((function(e){if(!e.ok)throw Error("Could not delete");t.setCards([])})).catch((function(t){h.signal.aborted||s(t.message)})),function(){return h.abort()}},children:Object(j.jsx)("i",{className:"far fa-trash-alt"})})})]})]})},k=a(23),w=a.n(k),y=function(t){var e=t.setTitle,a=Object(n.useState)([]),c=Object(r.a)(a,2),s=c[0],i=c[1],d=Object(n.useState)(!0),o=Object(r.a)(d,2),l=o[0],b=o[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch("https://react-cards-28644-default-rtdb.firebaseio.com/cards.json",{signal:t.signal}).then((function(t){if(!t.ok)throw Error("Could not fetch the data :(");return t.json()})).then((function(t){var a=[];for(var n in t){var c=Object(m.a)({id:n},t[n]);a.push(c)}i(a),b(!1),0===a.length?e("No cards yet"):e("All Cards")})).catch((function(a){t.signal.aborted||(b(!1),e(a.message))})),function(){return t.abort()}}),[e,s.length]),Object(j.jsxs)(j.Fragment,{children:[l&&Object(j.jsx)(j.Fragment,{}),s.length>0&&Object(j.jsx)("ul",{className:w.a.list,children:s.map((function(t){return Object(j.jsx)(A,{id:t.id,title:t.title,msg:t.msg,imgPath:t.imagePath,cards:s,setCards:i},t.id)}))})]})},E=function(){var t=Object(n.useState)("Loading Cards..."),e=Object(r.a)(t,2),a=e[0],c=e[1];return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:a}),Object(j.jsx)(y,{setTitle:c})]})},M=a(6),P=a.n(M),L=function(t){var e=Object(O.g)(),a=Object(n.useState)(null),c=Object(r.a)(a,2),s=c[0],i=c[1],d=Object(n.useState)(!1),o=Object(r.a)(d,2),l=o[0],b=o[1],h=Object(n.useState)(P.a.normal),u=Object(r.a)(h,2),m=u[0],x=u[1],f=Object(n.useState)(P.a.normal),g=Object(r.a)(f,2),p=g[0],C=g[1],v=Object(n.useState)(""),N=Object(r.a)(v,2),I=N[0],F=N[1],S=Object(n.useState)(""),A=Object(r.a)(S,2),k=A[0],w=A[1],y=t.imageIndex;return Object(j.jsxs)(j.Fragment,{children:[l&&Object(j.jsx)("h1",{style:{marginTop:"2rem"},children:"Adding Card..."}),!l&&Object(j.jsxs)("form",{className:P.a.Form,onSubmit:function(t){if(t.preventDefault(),x(P.a.normal),C(P.a.normal),i(null),(I.length>16||I.length<1)&&(k.length>40||k.length<1))return x(P.a.bad),void C(P.a.bad);if(I.length>16||I.length<1)x(P.a.bad);else{if(!(k.length>40||k.length<1)){var a=new AbortController;b(!0);var n={title:I,msg:k,imagePath:y};return fetch("https://react-cards-28644-default-rtdb.firebaseio.com/cards.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),signal:a.signal}).then((function(t){if(!t.ok)throw Error("Could not add");e.replace("/")})).catch((function(t){a.signal.aborted||(i(t.message),b(!1))})),function(){return a.abort()}}C(P.a.bad)}},children:[Object(j.jsx)("label",{htmlFor:"title",children:"Title"}),Object(j.jsx)("span",{children:"16 characters max"}),Object(j.jsx)("input",{autoFocus:!0,className:m,type:"text",id:"title",value:I,onChange:function(t){return F(t.target.value)}}),Object(j.jsx)("label",{htmlFor:"msg",children:"Message"}),Object(j.jsx)("span",{children:"40 characters max"}),Object(j.jsx)("input",{className:p,type:"text",id:"msg",value:k,onChange:function(t){return w(t.target.value)}}),Object(j.jsx)("button",{className:P.a.Button,children:"Add"})]}),s&&Object(j.jsx)(_,{notificationMsg:s})]})},B=function(t){var e=t.imageIndex;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Enter Card Details"}),Object(j.jsx)(L,{imageIndex:e})]})},T=function(t){var e=t.imageIndex,a=t.setImageIndex,c=Object(n.useState)(1),s=Object(r.a)(c,2),i=s[0],d=s[1],o=Object(n.useState)(C),l=Object(r.a)(o,2),b=l[0],h=l[1];return Object(n.useEffect)((function(){a(i),1===i?h(C):2===i?h(v):3===i?h(N):4===i?h(I):5===i?h(F):6===i&&h(S)}),[e,i,a]),Object(j.jsxs)("div",{className:P.a.Carousel,children:[Object(j.jsx)("i",{className:"fas fa-caret-left",onClick:function(){d(1===i?6:i-1)}}),Object(j.jsx)("div",{className:P.a.ImageCont,children:Object(j.jsx)("img",{src:b,alt:"card".concat(e,".jpg")})}),Object(j.jsx)("i",{className:"fas fa-caret-right",onClick:function(){d(6===i?1:i+1)}})]})},D=function(t){var e=t.imageIndex,a=t.setImageIndex;return Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)("h1",{children:"Pick a Background"}),Object(j.jsx)(T,{imageIndex:e,setImageIndex:a}),Object(j.jsx)(i.b,{to:"/add-form",className:"button",children:"Next"})]})},J=a(15),Z=a.n(J),q=function(){var t=Object(O.h)().id,e=Object(n.useState)(null),a=Object(r.a)(e,2),c=a[0],s=a[1],i=Object(n.useState)(null),d=Object(r.a)(i,2),o=d[0],l=d[1],b=Object(n.useState)(null),h=Object(r.a)(b,2),u=h[0],m=h[1];return Object(n.useEffect)((function(){var e=new AbortController;return s({}),fetch("https://react-cards-28644-default-rtdb.firebaseio.com/cards/".concat(t,".json"),{signal:e.signal}).then((function(t){if(!t.ok)throw Error("Could not fetch that card data");return t.json()})).then((function(t){s(t);var e=t.imagePath;1===e?m(C):2===e?m(v):3===e?m(N):4===e?m(I):5===e?m(F):6===e&&m(S)})).catch((function(t){e.signal.aborted||("Cannot read property 'imagePath' of null"===t.message?l("This card does not exist"):l(t.message),s(null))})),function(){return e.abort()}}),[t]),o||c?Object(j.jsxs)(j.Fragment,{children:[o&&Object(j.jsx)("h1",{children:o}),c&&Object(j.jsxs)("div",{className:Z.a.CardLg,children:[Object(j.jsx)("div",{className:Z.a.Image,children:Object(j.jsx)("img",{src:u,alt:""})}),Object(j.jsxs)("div",{className:Z.a.Content,children:[Object(j.jsx)("h3",{children:c.title}),Object(j.jsx)("p",{children:c.msg})]})]})]}):Object(j.jsx)("h1",{children:"This card does not exist"})},G=function(){return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Page not found."}),Object(j.jsx)("h3",{children:Object(j.jsx)(i.b,{to:"/",children:"Go back to Home page"})})]})};var H=function(){var t=Object(n.useState)(1),e=Object(r.a)(t,2),a=e[0],c=e[1];return Object(j.jsx)(u,{children:Object(j.jsxs)(O.d,{children:[Object(j.jsx)(O.b,{path:"/",exact:!0,children:Object(j.jsx)(E,{})}),Object(j.jsx)(O.b,{path:"/cards",exact:!0,children:Object(j.jsx)(E,{})}),Object(j.jsx)(O.b,{path:"/add-form",children:0===a?Object(j.jsx)(O.a,{to:"/add-cover"}):Object(j.jsx)(B,{imageIndex:a})}),Object(j.jsx)(O.b,{path:"/add-cover",children:Object(j.jsx)(D,{imageIndex:a,setImageIndex:c})}),Object(j.jsx)(O.b,{path:"/cards/:id",children:Object(j.jsx)(q,{})}),Object(j.jsx)(O.b,{path:"*",children:Object(j.jsx)(G,{})})]})})};s.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(H,{})}),document.getElementById("root"))},6:function(t,e,a){t.exports={Form:"AddCardForm_Form__1_NMo",normal:"AddCardForm_normal__hKnch",bad:"AddCardForm_bad__3LPBm",Button:"AddCardForm_Button__4hqZd",ImageCont:"AddCardForm_ImageCont__2cmOZ",Carousel:"AddCardForm_Carousel__1rx58"}}},[[40,1,2]]]);
//# sourceMappingURL=main.f5f61062.chunk.js.map