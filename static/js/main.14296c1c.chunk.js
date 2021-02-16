(this["webpackJsonpmesto-react.js"]=this["webpackJsonpmesto-react.js"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(6),i=n.n(c),s=(n(16),n(10)),r=n(2),u=n.p+"static/media/logo.c2821b38.svg",l=n(0);var d=function(e){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:u,className:"logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"})})},p=n(11),b=o.a.createContext();var m=function(e){var t=o.a.useContext(b),n=e.owner._id===t._id,a=e.likes.some((function(e){return e._id===t._id})),c="button button_type_like opacity ".concat(a?"button_type_like_active":""),i="button button_type_delete-card ".concat(n?"button_type_delete-card-visible":"button_type_delete-card-hidden");return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("img",{className:"card__image",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(e.name),src:e.link,onClick:function(){e.onCardClick(e)}}),Object(l.jsxs)("div",{className:"card__content",children:[Object(l.jsx)("h2",{className:"card__title",children:e.name}),Object(l.jsxs)("div",{className:"card__like-block",children:[Object(l.jsx)("button",{className:c,"aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f",type:"button",onClick:function(){e.onCardLike(e)}}),Object(l.jsx)("p",{className:"card__like-count",children:e.likes.length})]})]}),Object(l.jsx)("button",{className:i,onClick:function(){e.onConfirmClick(e)}})]})};var j=function(e){var t=o.a.useContext(b);return Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__avatar-block",children:[Object(l.jsx)("img",{src:t.avatar,className:"profile__avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(l.jsx)("button",{className:"button button_type_edite-avatar opacity","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button",onClick:e.onEditAvatar})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__full-name-wraper",children:[Object(l.jsx)("h1",{className:"profile__full-name",children:t.name}),Object(l.jsx)("button",{className:"button button_type_edite-profile opacity","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button",onClick:e.onEditProfile})]}),Object(l.jsx)("p",{className:"profile__occupation",children:t.about})]}),Object(l.jsx)("button",{className:"button button_type_add-card opacity","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",type:"button",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"cards",children:Object(l.jsx)("ul",{className:"cards__block",children:e.cards.map((function(t){return Object(l.jsx)(m,Object(p.a)({onConfirmClick:e.onConfirmClick,onCardLike:e.onCardLike,onCardClick:e.onCardClick},t),t._id)}))})})]})};var _=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var h=function(e){var t=e.card;return Object(l.jsx)("div",{className:"popup popup_image ".concat(e.isOpen?"popup_opened":""),role:"dialog",children:Object(l.jsxs)("div",{className:"popup__image-container",children:[Object(l.jsx)("button",{className:"button button_type_close opacity","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",onClick:e.onClose}),Object(l.jsx)("img",{className:"popup__image",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(t.name),src:t.link}),Object(l.jsx)("h2",{className:"popup__image-title",children:t.name})]})})};var f=function(e){return Object(l.jsx)("div",{className:"popup popup__".concat(e.name," ").concat(e.isOpen&&"popup_opened"),role:"dialog",children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{className:"button button_type_close opacity","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup__title",children:e.title}),Object(l.jsxs)("form",{className:"popup__form popup__form_add-new-card",method:"POST",name:e.name,onSubmit:e.onSubmit,children:[e.children,Object(l.jsx)("button",{type:"submit",className:"button popup__button button_type_submit opacity",children:e.isLoading?e.loadingButtonTitle:e.buttonName})]})]})})};var O=function(e){var t=o.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],i=o.a.useState(""),s=Object(r.a)(i,2),u=s[0],d=s[1],p=o.a.useContext(b);return o.a.useEffect((function(){c(p.name||""),d(p.about||"")}),[p]),Object(l.jsxs)(f,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"profile",isOpen:e.isOpen,onClose:e.onClose,isLoading:e.isLoading,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:u})},loadingButtonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",children:[Object(l.jsx)("input",{type:"text",className:"popup__input popup__input_full-name",name:"name",placeholder:"\u0424\u0418\u041e",required:!0,minLength:"2",maxLength:"20",id:"full-name",value:a,onChange:function(e){c(e.target.value)}}),Object(l.jsx)("span",{id:"full-name-error",className:"popup__error"}),Object(l.jsx)("input",{type:"text",className:"popup__input popup__input_occupation",name:"occupation",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",required:!0,minLength:"2",maxLength:"200",id:"occupation",value:u,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("span",{id:"occupation-error",className:"popup__error"})]})};var v=function(e){var t=o.a.useRef();return Object(l.jsxs)(f,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"avatar",isOpen:e.isOpen,onClose:e.onClose,isLoading:e.isLoading,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),setTimeout((function(){t.current.value=""}),700)},loadingButtonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",children:[Object(l.jsx)("input",{ref:t,type:"url",className:"popup__input popup__input_avatar-link",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"avatar"}),Object(l.jsx)("span",{id:"avatar-error",className:"popup__error"})]})};var g=function(e){var t=o.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],i=o.a.useState(""),s=Object(r.a)(i,2),u=s[0],d=s[1];return Object(l.jsxs)(f,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",name:"card",isOpen:e.isOpen,onClose:e.onClose,isLoading:e.isLoading,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u}),setTimeout((function(){c(""),d("")}),700)},loadingButtonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",children:[Object(l.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},type:"text",className:"popup__input popup__input_image-title",name:"image-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",id:"image-title"}),Object(l.jsx)("span",{id:"image-title-error",className:"popup__error"}),Object(l.jsx)("input",{value:u,onChange:function(e){d(e.target.value)},type:"url",className:"popup__input popup__input_image-link",name:"image-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"image-link"}),Object(l.jsx)("span",{id:"image-link-error",className:"popup__error"})]})};var x=function(e){return Object(l.jsx)(f,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonName:"\u0414\u0430",name:"confirm",isOpen:e.isOpen,onClose:e.onClose,isLoading:e.isLoading,onSubmit:function(t){t.preventDefault(),e.onConfirm(e)},loadingButtonTitle:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."})},C=n(7),k=n(8),N=new(function(){function e(t){var n=t.url,a=t.headers;Object(C.a)(this,e),this._url=n,this._headers=a}return Object(k.a)(e,[{key:"getCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData({result:t})}))}},{key:"addCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponseData({result:e})}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData({result:t})}))}},{key:"setUserInfo",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:a})}).then((function(e){return t._getResponseData({result:e})}))}},{key:"setUserAvatar",value:function(e){var t=this,n=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:n})}).then((function(e){return t._getResponseData({result:e})}))}},{key:"deleteCard",value:function(e){var t=this,n=e.cardId;return fetch("".concat(this._url,"/cards/").concat(n),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData({result:e})}))}},{key:"changeLikeCardStatus",value:function(e){var t=this,n=e.cardId,a=e.isLiked;return fetch("".concat(this._url,"/cards/likes/").concat(n),{method:a?"PUT":"DELETE",headers:this._headers}).then((function(e){return t._getResponseData({result:e})}))}},{key:"_getResponseData",value:function(e){var t=e.result;return t.ok?t.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(t.status)))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"a2645d68-6dae-4ace-a29b-319c06bb5839","Content-Type":"application/json"}}),y=n(9);var L=function(){var e=o.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=o.a.useState(!1),i=Object(r.a)(c,2),u=i[0],p=i[1],m=o.a.useState(!1),f=Object(r.a)(m,2),C=f[0],k=f[1],L=o.a.useState(!1),S=Object(r.a)(L,2),T=S[0],E=S[1],P=o.a.useState(!1),D=Object(r.a)(P,2),U=D[0],A=D[1],I=o.a.useState(!1),R=Object(r.a)(I,2),w=R[0],B=R[1],q=o.a.useState({}),J=Object(r.a)(q,2),F=J[0],M=J[1],H=o.a.useState([]),z=Object(r.a)(H,2),G=z[0],K=z[1],Q=o.a.useState(b),V=Object(r.a)(Q,2),W=V[0],X=V[1];function Y(){a(!1),p(!1),k(!1),E(!1),A(!1),setTimeout((function(){B(!1),M({})}),700)}return o.a.useEffect((function(){Promise.resolve(N.getUserInfo()).then((function(e){X(e)}))}),[]),o.a.useEffect((function(){N.getCards().then((function(e){K(e)})).catch((function(e){return console.log(e)}))}),[]),Object(y.a)("keydown",(function(e){"Escape"===e.key&&Y()})),Object(l.jsx)(b.Provider,{value:W,children:Object(l.jsxs)("div",{className:"body",children:[Object(l.jsxs)("div",{className:"root",children:[Object(l.jsx)(d,{}),Object(l.jsx)(j,{onEditProfile:function(){a(!0)},onEditAvatar:function(){k(!0)},onConfirmClick:function(e){M(e),A(!0)},onAddPlace:function(){p(!0)},onCardClick:function(e){M(e),E(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===W._id}));N.changeLikeCardStatus({cardId:e._id,isLiked:!t}).then((function(t){var n=G.map((function(n){return n._id===e._id?t:n}));K(n)})).catch((function(e){return console.log(e)}))},cards:G}),Object(l.jsx)(_,{})]}),Object(l.jsx)(g,{isOpen:u,onClose:Y,onAddPlace:function(e){var t=e.name,n=e.link;B(!0),N.addCard({name:t,link:n}).then((function(e){K([e].concat(Object(s.a)(G))),Y()})).catch((function(e){return console.log(e)}))},isLoading:w}),Object(l.jsx)(v,{isOpen:C,onClose:Y,onUpdateAvatar:function(e){var t=e.avatar;B(!0),N.setUserAvatar({avatar:t}).then((function(e){X(e),Y()})).catch((function(e){return console.log(e)}))},isLoading:w}),Object(l.jsx)(O,{isOpen:n,onClose:Y,onUpdateUser:function(e){var t=e.name,n=e.about;B(!0),N.setUserInfo({name:t,about:n}).then((function(e){X(e),Y()})).catch((function(e){return console.log(e)}))},isLoading:w}),Object(l.jsx)(h,{card:F,isOpen:T,onClose:Y}),Object(l.jsx)(x,{isOpen:U,onClose:Y,onConfirm:function(){B(!0),N.deleteCard({cardId:F._id}).then((function(){var e=G.filter((function(e){return e._id!==F._id}));K(e),Y(),M({})})).catch((function(e){return console.log(e)}))},isLoading:w})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.14296c1c.chunk.js.map