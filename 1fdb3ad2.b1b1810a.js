(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(502)),c={title:"httpGet",tags:"browser,url,intermediate"},p={id:"httpGet",isDocsHomePage:!1,title:"httpGet",description:"Makes a GET request to the passed URL.",source:"@site/docs/httpGet.md",permalink:"/30-seconds-of-typescript/docs/httpGet",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/httpGet.md",sidebar:"someSidebar",previous:{title:"httpDelete",permalink:"/30-seconds-of-typescript/docs/httpDelete"},next:{title:"httpPost",permalink:"/30-seconds-of-typescript/docs/httpPost"}},i=[],s={rightToc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Makes a ",Object(a.b)("inlineCode",{parentName:"p"},"GET")," request to the passed URL."),Object(a.b)("p",null,"Use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest"}),Object(a.b)("inlineCode",{parentName:"a"},"XMLHttpRequest"))," web api to make a ",Object(a.b)("inlineCode",{parentName:"p"},"get")," request to the given ",Object(a.b)("inlineCode",{parentName:"p"},"url"),".\nHandle the ",Object(a.b)("inlineCode",{parentName:"p"},"onload")," event, by calling the given ",Object(a.b)("inlineCode",{parentName:"p"},"callback")," the ",Object(a.b)("inlineCode",{parentName:"p"},"responseText"),".\nHandle the ",Object(a.b)("inlineCode",{parentName:"p"},"onerror")," event, by running the provided ",Object(a.b)("inlineCode",{parentName:"p"},"err")," function.\nOmit the third argument, ",Object(a.b)("inlineCode",{parentName:"p"},"err"),", to log errors to the console's ",Object(a.b)("inlineCode",{parentName:"p"},"error")," stream by default."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const httpGet = (url, callback, err = console.error) => {\n  const request = new XMLHttpRequest();\n  request.open("GET", url, true);\n  request.onload = () => callback(request.responseText);\n  request.onerror = () => err(request);\n  request.send();\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'httpGet("https://jsonplaceholder.typicode.com/posts/1", console.log); /*\nLogs: {\n  "userId": 1,\n  "id": 1,\n  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n  "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto"\n}\n*/\n')))}u.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(m,p(p({ref:t},s),{},{components:n})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);