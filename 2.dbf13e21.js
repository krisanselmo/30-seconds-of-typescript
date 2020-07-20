/*! For license information please see 2.dbf13e21.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{547:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},551:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e})),a.d(t,"c",(function(){return n.f}))},553:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},554:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(563),o=a(544),l=a(550);const s="",i="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(o.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(s),r(s)},[]),l=Object(n.useCallback)(()=>{a(i),r(i)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?i:s)})},[]),{isDarkTheme:t===i,setLightTheme:c,setDarkTheme:l}},d=a(564);var m=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)};var f=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var h=()=>{const{siteConfig:{themeConfig:{announcementBar:{id:e}={}}}={}}=Object(o.a)(),[t,a]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{if(!e)return;const t=localStorage.getItem("docusaurus.announcement.id"),n=e!==t;localStorage.setItem("docusaurus.announcement.id",e),n&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&a(!1)},[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),a(!0)}}},v=a(565);var b=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=h(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(v.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)},p=a(566),g=a(130),k=a.n(g);var E=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,n=a.content,c=a.backgroundColor,l=a.textColor,s=Object(p.a)(),i=s.isAnnouncementBarClosed,u=s.closeAnnouncementBar;return!n||i?null:r.a.createElement("div",{className:k.a.announcementBar,style:{backgroundColor:c,color:l},role:"banner"},r.a.createElement("div",{className:k.a.announcementBarContent,dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("button",{type:"button",className:k.a.announcementBarClose,onClick:u,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},O=a(547);a(578),a(581),a(54);function _(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var y=a(546),j=a(548),w=a(555),C=a(586),N=a.n(C),T=a(131),S=a.n(T);const x=()=>r.a.createElement("span",{className:Object(y.a)(S.a.toggle,S.a.moon)}),B=()=>r.a.createElement("span",{className:Object(y.a)(S.a.toggle,S.a.sun)});var L=function(e){const{isClient:t}=Object(o.a)();return r.a.createElement(N.a,Object(O.a)({disabled:!t,icons:{checked:r.a.createElement(x,null),unchecked:r.a.createElement(B,null)}},e))},M=a(556),P=a(551);var D=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},A=a(567);var I=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[o,l]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(P.c)(),[m,f]=D(d.hash);return Object(A.a)(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(r)return c(!1),a(!1),void l(t);const n=document.documentElement.scrollHeight-s,i=window.innerHeight;o&&t>=o?a(!1):t+i<n&&a(!0),l(t)},[o,s]),Object(n.useEffect)(()=>{e&&(a(!0),f(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&c(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},X=a(568),F=a(569),R=a(570),H=a(132),U=a.n(H);function G(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,o=e.label,s=e.activeClassName,i=void 0===s?"navbar__link--active":s,u=e.prependBaseUrlToHref,d=_(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),m=Object(l.a)(n),f=Object(l.a)(t),h=Object(l.a)(c,{forcePrependBaseUrl:!0});return r.a.createElement(j.a,Object(O.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:u?h:c}:Object.assign({isNavLink:!0,activeClassName:i,to:m},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(f)}}:null),d),o)}function W(e){var t=e.items,a=e.position,n=void 0===a?"right":a,c=e.className,o=_(e,["items","position","className"]),l=function(e,t){return void 0===t&&(t=!1),Object(y.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:Object(y.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n})},r.a.createElement(G,Object(O.a)({className:l(c)},o,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),o.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=_(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(G,Object(O.a)({activeClassName:"dropdown__link--active",className:l(a,!0)},n)))})))):r.a.createElement(G,Object(O.a)({className:l(c)},o))}function Y(e){var t=e.items,a=(e.position,e.className),n=_(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),Object(y.a)("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(G,Object(O.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=_(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(G,Object(O.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(G,Object(O.a)({className:c(a)},n)))}var V=function(){var e,t,a=Object(o.a)(),c=a.siteConfig.themeConfig,l=c.navbar,s=(l=void 0===l?{}:l).title,i=l.links,u=void 0===i?[]:i,d=l.hideOnScroll,m=void 0!==d&&d,f=c.disableDarkMode,h=void 0!==f&&f,v=a.isClient,b=Object(n.useState)(!1),p=b[0],g=b[1],k=Object(n.useState)(!1),E=k[0],_=k[1],C=Object(M.a)(),N=C.isDarkTheme,T=C.setLightTheme,S=C.setDarkTheme,x=I(m),B=x.navbarRef,P=x.isNavbarVisible,D=Object(R.a)(),A=D.logoLink,H=D.logoLinkProps,G=D.logoImageUrl,V=D.logoAlt;Object(X.a)(p);var z=Object(n.useCallback)((function(){g(!0)}),[g]),J=Object(n.useCallback)((function(){g(!1)}),[g]),K=Object(n.useCallback)((function(e){return e.target.checked?S():T()}),[T,S]),q=Object(F.a)();Object(n.useEffect)((function(){q===F.b.desktop&&g(!1)}),[q]);var Q=function(e){return{leftLinks:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightLinks:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(u),Z=Q.leftLinks,$=Q.rightLinks;return r.a.createElement("nav",{ref:B,className:Object(y.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":p},e[U.a.navbarHideable]=m,e[U.a.navbarHidden]=!P,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:z,onKeyDown:z},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(j.a,Object(O.a)({className:"navbar__brand",to:A},H),null!=G&&r.a.createElement("img",{key:v,className:"navbar__logo",src:G,alt:V}),null!=s&&r.a.createElement("strong",{className:Object(y.a)("navbar__title",(t={},t[U.a.hideLogoText]=E,t))},s)),Z.map((function(e,t){return r.a.createElement(W,Object(O.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},$.map((function(e,t){return r.a.createElement(W,Object(O.a)({},e,{key:t}))})),!h&&r.a.createElement(L,{className:U.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:N,onChange:K}),r.a.createElement(w.a,{handleSearchBarToggle:_,isSearchBarExpanded:E}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:J}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(j.a,Object(O.a)({className:"navbar__brand",onClick:J,to:A},H),null!=G&&r.a.createElement("img",{key:v,className:"navbar__logo",src:G,alt:V}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!h&&p&&r.a.createElement(L,{"aria-label":"Dark mode toggle in sidebar",checked:N,onChange:K})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(Y,Object(O.a)({},e,{onClick:J,key:t}))})))))))},z=a(133),J=a.n(z);function K(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=_(e,["to","href","label","prependBaseUrlToHref"]),s=Object(l.a)(t),i=Object(l.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(j.a,Object(O.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:s},o),n)}var q=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var Q=function(){var e=Object(o.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,s=n.links,i=void 0===s?[]:s,u=n.logo,d=void 0===u?{}:u,m=Object(l.a)(d.src);return a?r.a.createElement("footer",{className:Object(y.a)("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},i.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(K,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:J.a.footerLogoLink},r.a.createElement(q,{alt:d.alt,url:m})):r.a.createElement(q,{alt:d.alt,url:m})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(134);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,i=a.themeConfig.image,u=a.url,d=e.children,f=e.title,h=e.noFooter,v=e.description,p=e.image,g=e.keywords,k=e.permalink,O=e.version,_=f?f+" | "+s:s,y=p||i,j=Object(l.a)(y,{absolute:!0}),w=Object(l.a)(n);return r.a.createElement(m,null,r.a.createElement(b,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:j}),y&&r.a.createElement("meta",{property:"twitter:image",content:j}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),k&&r.a.createElement("meta",{property:"og:url",content:u+k}),k&&r.a.createElement("link",{rel:"canonical",href:u+k}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(E,null),r.a.createElement(V,null),r.a.createElement("div",{className:"main-wrapper"},d),!h&&r.a.createElement(Q,null)))}},556:function(e,t,a){"use strict";var n=a(0),r=a(564);t.a=function(){return Object(n.useContext)(r.a)}},564:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},565:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},566:function(e,t,a){"use strict";var n=a(0),r=a(565);t.a=function(){return Object(n.useContext)(r.a)}},567:function(e,t,a){"use strict";var n=a(0),r=a(35);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0})),t),a}},568:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},569:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[a,c]=Object(n.useState)(t);return Object(n.useEffect)(()=>{if(!e)return!1;function a(){c(t())}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),a}},570:function(e,t,a){"use strict";var n=a(544),r=a(556),c=a(550),o=a(552);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}}={}}=Object(n.a)(),{isDarkTheme:t}=Object(r.a)(),a=Object(c.a)(e.href||"/");let l={};e.target?l={target:e.target}:Object(o.a)(a)||(l={rel:"noopener noreferrer",target:"_blank"});const s=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:l,logoImageUrl:Object(c.a)(s),logoAlt:e.alt}}},578:function(e,t,a){"use strict";var n=a(13),r=a(30),c=a(579),o="".startsWith;n(n.P+n.F*a(580)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,a):t.slice(a,a+n.length)===n}})},579:function(e,t,a){var n=a(79),r=a(29);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},580:function(e,t,a){var n=a(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},581:function(e,t,a){var n=a(6),r=a(582),c=a(25).f,o=a(585).f,l=a(79),s=a(83),i=n.RegExp,u=i,d=i.prototype,m=/a/g,f=/a/g,h=new i(m)!==m;if(a(10)&&(!h||a(14)((function(){return f[a(3)("match")]=!1,i(m)!=m||i(f)==f||"/a/i"!=i(m,"i")})))){i=function(e,t){var a=this instanceof i,n=l(e),c=void 0===t;return!a&&n&&e.constructor===i&&c?e:r(h?new u(n&&!c?e.source:e,t):u((n=e instanceof i)?e.source:e,n&&c?s.call(e):t),a?this:d,i)};for(var v=function(e){e in i||c(i,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},b=o(u),p=0;b.length>p;)v(b[p++]);d.constructor=i,i.prototype=d,a(15)(n,"RegExp",i)}a(84)("RegExp")},582:function(e,t,a){var n=a(12),r=a(583).set;e.exports=function(e,t,a){var c,o=t.constructor;return o!==a&&"function"==typeof o&&(c=o.prototype)!==a.prototype&&n(c)&&r&&r(e,c),e}},583:function(e,t,a){var n=a(12),r=a(8),c=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(27)(Function.call,a(584).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return c(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:c}},584:function(e,t,a){var n=a(57),r=a(55),c=a(28),o=a(81),l=a(26),s=a(80),i=Object.getOwnPropertyDescriptor;t.f=a(10)?i:function(e,t){if(e=c(e),t=o(t,!0),s)try{return i(e,t)}catch(a){}if(l(e,t))return r(!n.f.call(e,t),e[t])}},585:function(e,t,a){var n=a(82),r=a(56).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},586:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(553)),s=m(a(17)),i=m(a(587)),u=m(a(588)),d=a(589);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},587:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},589:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);