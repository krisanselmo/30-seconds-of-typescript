(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(479)),o={title:"listenOnce",tags:"browser,event,closure,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "listenOnce" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"listenOnce",id:"listenOnce",isDocsHomePage:!1,title:"listenOnce",description:'Implementation of "listenOnce" in typescript, javascript and deno.',source:"@site/docs/listenOnce.md",slug:"/listenOnce",permalink:"/30-seconds-of-typescript/docs/listenOnce",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/listenOnce.md",version:"current",sidebar:"someSidebar",previous:{title:"last",permalink:"/30-seconds-of-typescript/docs/last"},next:{title:"lowercaseKeys",permalink:"/30-seconds-of-typescript/docs/lowercaseKeys"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(a.b)("p",null,"Adds an event listener to an element that will only run the callback the first time the event is triggered."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"EventTarget.addEventListener()")," to add an event listener to an element, storing the reference in a variable.\nUse a condition to call ",Object(a.b)("inlineCode",{parentName:"p"},"fn")," only the first time the listener is triggered."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"interface IEventListener {\n  addEventListener: (event: string, fn: Func) => void;\n}\nconst listenOnce = <E extends IEventListener>(el: E, evt: string, fn: Func) => {\n  let fired = false;\n  el.addEventListener(evt, (e) => {\n    if (!fired) fn(e);\n    fired = true;\n  });\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"listenOnce(\n  document.getElementById('my-id),\n  'click',\n  () => console.log('Hello world')\n); // 'Hello world' will only be logged on the first click\n")))}p.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?i.a.createElement(f,s(s({ref:t},l),{},{components:n})):i.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);