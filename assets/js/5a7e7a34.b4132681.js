"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1569],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=s(r),c=a,b=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return r?n.createElement(b,l(l({ref:e},d),{},{components:r})):n.createElement(b,l({ref:e},d))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1336:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Liquidation",sidebar_label:"Liquidation",sidebar_position:5,slug:"/copy-trade/ws-public/liquidation"},l=void 0,p={unversionedId:"v3/copy-trade/wss-public/liquidation",id:"v3/copy-trade/wss-public/liquidation",title:"Liquidation",description:"Get recent liquidation orders in Bybit.",source:"@site/docs/v3/copy-trade/wss-public/liquidation.mdx",sourceDirName:"v3/copy-trade/wss-public",slug:"/copy-trade/ws-public/liquidation",permalink:"/docs-v2/copy-trade/ws-public/liquidation",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Liquidation",sidebar_label:"Liquidation",sidebar_position:5,slug:"/copy-trade/ws-public/liquidation"},sidebar:"v3SideBar",previous:{title:"Kline",permalink:"/docs-v2/copy-trade/ws-public/kline"},next:{title:"Position",permalink:"/docs-v2/copy-trade/ws-private/position"}},o={},s=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscription Example",id:"subscription-example",level:3},{value:"Stream Example",id:"stream-example",level:3}],d={toc:s};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get recent liquidation orders in Bybit."),(0,a.kt)("p",null,"Push frequency: ",(0,a.kt)("strong",{parentName:"p"},"real-time")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"liquidation.{symbol}")),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Message type. ",(0,a.kt)("inlineCode",{parentName:"td"},"snaptshot"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"The timestamp (ms) that system generates the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Data updated timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Filled size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Filled price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Side")))),(0,a.kt)("h3",{id:"subscription-example"},"Subscription Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "subscribe",\n    "args": [\n      "liquidation.GALAUSDT"\n    ],\n    "req_id": "test" // optional\n}\n')),(0,a.kt)("h3",{id:"stream-example"},"Stream Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "price": "0.03803",\n        "side": "Buy",\n        "size": "1637",\n        "symbol": "GALAUSDT",\n        "updatedTime": 1673251091822\n    },\n    "topic": "liquidation.GALAUSDT",\n    "ts": 1673251091822,\n    "type": "snapshot"\n}\n')))}m.isMDXComponent=!0}}]);