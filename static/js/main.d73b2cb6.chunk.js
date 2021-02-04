(this["webpackJsonpmesto-react.js"]=this["webpackJsonpmesto-react.js"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),r=a.n(c),i=(a(12),a(2)),o=a.p+"static/media/logo.c2821b38.svg",l=a(0);var u=function(e){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:o,className:"logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"})})},p=a(7),d=a(5),h=a(6),j=new(function(){function e(t){var a=t.url,n=t.headers;Object(d.a)(this,e),this._url=a,this._headers=n}return Object(h.a)(e,[{key:"getCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData({result:t})}))}},{key:"addCard",value:function(e){var t=this,a=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:a,link:n})}).then((function(e){return t._getResponseData({result:e})}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData({result:t})}))}},{key:"setUserInfo",value:function(e){var t=this,a=e.name,n=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:a,about:n})}).then((function(e){return t._getResponseData({result:e})}))}},{key:"setUserAvatar",value:function(e){var t=this,a=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:a})}).then((function(e){return t._getResponseData({result:e})}))}},{key:"deleteCard",value:function(e){var t=this,a=e.cardId;return fetch("".concat(this._url,"/cards/").concat(a),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData({result:e})}))}},{key:"likeCard",value:function(e){var t=this,a=e.cardId;return fetch("".concat(this._url,"/cards/likes/").concat(a),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData({result:e})}))}},{key:"unlikeCard",value:function(e){var t=this,a=e.cardId;return fetch("".concat(this._url,"/cards/likes/").concat(a),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData({result:e})}))}},{key:"_getResponseData",value:function(e){var t=e.result;return t.ok?t.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(t.status)))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"a2645d68-6dae-4ace-a29b-319c06bb5839","Content-Type":"application/json"}});var b=function(e){return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("img",{className:"card__image",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(e.name),src:e.link,onClick:function(){e.onCardClick(e)}}),Object(l.jsxs)("div",{className:"card__content",children:[Object(l.jsx)("h2",{className:"card__title",children:e.name}),Object(l.jsxs)("div",{className:"card__like-block",children:[Object(l.jsx)("button",{className:"button button_type_like opacity","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f",type:"button"}),Object(l.jsx)("p",{className:"card__like-count",children:e.likes.length})]})]}),Object(l.jsx)("button",{className:"button button_type_delete-card opacity"})]})};var m=function(e){var t=s.a.useState(""),a=Object(i.a)(t,2),n=a[0],c=a[1],r=s.a.useState(""),o=Object(i.a)(r,2),u=o[0],d=o[1],h=s.a.useState(""),m=Object(i.a)(h,2),_=m[0],f=m[1],O=s.a.useState([]),x=Object(i.a)(O,2),v=x[0],N=x[1];return s.a.useEffect((function(){Promise.all([j.getUserInfo(),j.getCards()]).then((function(e){c(e[0].name),d(e[0].about),f(e[0].avatar),N(e[1])})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__avatar-block",children:[Object(l.jsx)("img",{src:_,className:"profile__avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(l.jsx)("button",{className:"button button_type_edite-avatar opacity","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button",onClick:e.handleEditAvatarClick})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__full-name-wraper",children:[Object(l.jsx)("h1",{className:"profile__full-name",children:n}),Object(l.jsx)("button",{className:"button button_type_edite-profile opacity","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button",onClick:e.handleEditProfileClick})]}),Object(l.jsx)("p",{className:"profile__occupation",children:u})]}),Object(l.jsx)("button",{className:"button button_type_add-card opacity","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",type:"button",onClick:e.handleAddPlaceClick})]}),Object(l.jsx)("section",{className:"cards",children:Object(l.jsx)("ul",{className:"cards__block",children:v.map((function(t){return Object(l.jsx)(b,Object(p.a)({onCardClick:e.handleCardClick},t),t._id)}))})})]})};var _=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var f=function(e){return Object(l.jsx)("div",{className:"popup popup__".concat(e.name," ").concat(e.isOpen?"popup_opened":""),role:"dialog",children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{className:"button button_type_close opacity","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup__title",children:e.title}),Object(l.jsxs)("form",{className:"popup__form popup__form_add-new-card",method:"POST",name:e.name,children:[e.children,Object(l.jsx)("button",{type:"submit",className:"button popup__button button_type_submit opacity",children:e.buttonName})]})]})})};var O=function(e){var t=e.card;return Object(l.jsx)("div",{className:"popup popup_image ".concat(e.isOpen?"popup_opened":""),role:"dialog",children:Object(l.jsxs)("div",{className:"popup__image-container",children:[Object(l.jsx)("button",{className:"button button_type_close opacity","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",onClick:e.onClose}),Object(l.jsx)("img",{className:"popup__image",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(t.name),src:t.link}),Object(l.jsx)("h2",{className:"popup__image-title",children:t.name})]})})};var x=function(){var e=s.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=s.a.useState(!1),r=Object(i.a)(c,2),o=r[0],p=r[1],d=s.a.useState(!1),h=Object(i.a)(d,2),j=h[0],b=h[1],x=s.a.useState(!1),v=Object(i.a)(x,2),N=v[0],g=v[1],k=s.a.useState({}),y=Object(i.a)(k,2),C=y[0],S=y[1];function E(){n(!1),p(!1),b(!1),g(!1),setTimeout((function(){S({})}),500)}return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsxs)("div",{className:"root",children:[Object(l.jsx)(u,{}),Object(l.jsx)(m,{handleEditAvatarClick:function(){b(!0)},handleEditProfileClick:function(){n(!0)},handleAddPlaceClick:function(){p(!0)},handleCardClick:function(e){S(e),g(!0)}}),Object(l.jsx)(_,{})]}),Object(l.jsxs)(f,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",name:"card",isOpen:o,onClose:E,children:[Object(l.jsx)("input",{type:"text",className:"popup__input popup__input_image-title",name:"image-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",id:"image-title"}),Object(l.jsx)("span",{id:"image-title-error",className:"popup__error"}),Object(l.jsx)("input",{type:"url",className:"popup__input popup__input_image-link",name:"image-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"image-link"}),Object(l.jsx)("span",{id:"image-link-error",className:"popup__error"})]}),Object(l.jsxs)(f,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"avatar",isOpen:j,onClose:E,children:[Object(l.jsx)("input",{type:"url",className:"popup__input popup__input_avatar-link",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"avatar"}),Object(l.jsx)("span",{id:"avatar-error",className:"popup__error"})]}),Object(l.jsxs)(f,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"profile",isOpen:a,onClose:E,children:[Object(l.jsx)("input",{type:"text",className:"popup__input popup__input_full-name",name:"name",placeholder:"\u0424\u0418\u041e",required:!0,minLength:"2",maxLength:"20",id:"full-name"}),Object(l.jsx)("span",{id:"full-name-error",className:"popup__error"}),Object(l.jsx)("input",{type:"text",className:"popup__input popup__input_occupation",name:"occupation",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",required:!0,minLength:"2",maxLength:"200",id:"occupation"}),Object(l.jsx)("span",{id:"occupation-error",className:"popup__error"})]}),Object(l.jsx)(f,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonName:"\u0414\u0430",name:"confirm"}),Object(l.jsx)(O,{card:C,isOpen:N,onClose:E})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.d73b2cb6.chunk.js.map