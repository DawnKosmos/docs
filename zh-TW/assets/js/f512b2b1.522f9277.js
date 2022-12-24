"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9976],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(r),u=a,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return r?n.createElement(k,p(p({ref:e},c),{},{components:r})):n.createElement(k,p({ref:e},c))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,p=new Array(l);p[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var s=2;s<l;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32013:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={},p=void 0,i={unversionedId:"v3/spot/wss-public/tickers",id:"v3/spot/wss-public/tickers",title:"tickers",description:"The 24-hr statistics of a trading pair.",source:"@site/docs/v3/spot/wss-public/tickers.mdx",sourceDirName:"v3/spot/wss-public",slug:"/v3/spot/wss-public/tickers",permalink:"/docs-v2/zh-TW/v3/spot/wss-public/tickers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"v3SideBar",previous:{title:"orderbook",permalink:"/docs-v2/zh-TW/v3/spot/wss-public/orderbook"},next:{title:"trade",permalink:"/docs-v2/zh-TW/v3/spot/wss-public/trade"}},o={},s=[{value:"Response Parameters",id:"response-parameters",level:4},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},m=c("Tabs"),d=c("TabItem"),u={toc:s};function k(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The 24-hr statistics of a trading pair."),(0,a.kt)("p",null,(0,a.kt)("b",null,"Push frequency"),": real-time"),(0,a.kt)("p",null,(0,a.kt)("b",null,"Topic"),": ",(0,a.kt)("code",null,"tickers.BTCUSDT")),(0,a.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"t"),(0,a.kt)("td",{parentName:"tr",align:"left"},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp (trading time in the match box)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Trading pair")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"o"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Open price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"h"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"High price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"l"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Low price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"c"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Close price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Trading volume")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"qv"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Trading quote volume")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"m"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Change")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"The time that message is sent out")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(d,{value:"console",label:"JSON subscription message",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "req_id": "ticker00001", //optional\n    "op": "subscribe",\n    "args": [\n        "tickers.BTCUSDT"\n    ]\n}\n')))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {\n        "t": 1661742216005,\n        "s": "BTCUSDT",\n        "o": "19820",\n        "h": "20071.93",\n        "l": "19365.85",\n        "c": "19694.27",\n        "v": "9997.246174",\n        "qv": "197357775.97621786",\n        "m": "-0.0063"\n    },\n    "type": "delta",\n    "topic": "tickers.BTCUSDT",\n    "ts": 1661742216011\n}```\n')))}k.isMDXComponent=!0}}]);