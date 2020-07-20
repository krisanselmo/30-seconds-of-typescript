(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{383:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(543)),i={title:"elo",tags:"math,array,advanced"},s={id:"elo",isDocsHomePage:!1,title:"elo",description:"JS",source:"@site/docs/elo.md",permalink:"/30-seconds-of-typescript/docs/elo",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/elo.md",sidebar:"someSidebar",previous:{title:"ellipsis",permalink:"/30-seconds-of-typescript/docs/ellipsis"},next:{title:"equals",permalink:"/30-seconds-of-typescript/docs/equals"}},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Computes the new ratings between two or more opponents using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Elo_rating_system"}),"Elo rating system"),". It takes an array\nof pre-ratings and returns an array containing post-ratings.\nThe array should be ordered from best performer to worst performer (winner -> loser)."),Object(o.b)("p",null,"Use the exponent ",Object(o.b)("inlineCode",{parentName:"p"},"**")," operator and math operators to compute the expected score (chance of winning).\nof each opponent and compute the new rating for each.\nLoop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion.\nOmit the second argument to use the default ",Object(o.b)("inlineCode",{parentName:"p"},"kFactor")," of 32."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const elo = ([...ratings], kFactor = 32, selfRating) => {\n  const [a, b] = ratings;\n  const expectedScore = (self, opponent) =>\n    1 / (1 + 10 ** ((opponent - self) / 400));\n  const newRating = (rating, i) =>\n    (selfRating || rating) +\n    kFactor * (i - expectedScore(i ? a : b, i ? b : a));\n  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];\n\n  for (let i = 0, len = ratings.length; i < len; i++) {\n    let j = i;\n    while (j < len - 1) {\n      j++;\n      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);\n    }\n  }\n  return ratings;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Standard 1v1s\nelo([1200, 1200]); // [1216, 1184]\nelo([1200, 1200], 64); // [1232, 1168]\n// 4 player FFA, all same rank\nelo([1200, 1200, 1200, 1200]).map(Math.round); // [1246, 1215, 1185, 1154]\n/*\nFor teams, each rating can adjusted based on own team's average rating vs.\naverage rating of opposing team, with the score being added to their\nown individual rating by supplying it as the third argument.\n*/\n")))}l.isMDXComponent=!0},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,b=u["".concat(i,".").concat(g)]||u[g]||d[g]||o;return n?a.a.createElement(b,s(s({ref:t},p),{},{components:n})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);