"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2951],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),s=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=s(r),k=n,c=u["".concat(o,".").concat(k)]||u[k]||d[k]||l;return r?a.createElement(c,i(i({ref:e},m),{},{components:r})):a.createElement(c,i({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16939:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"Kline",sidebar_label:"Kline",sidebar_position:3,slug:"/spot/public/kline"},i=void 0,p={unversionedId:"v3/spot/rest-public/kline",id:"v3/spot/rest-public/kline",title:"Kline",description:"It only returns the results from latest 1000 candles regardless of what interval is specified",source:"@site/docs/v3/spot/rest-public/kline.mdx",sourceDirName:"v3/spot/rest-public",slug:"/spot/public/kline",permalink:"/docs/spot/public/kline",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Kline",sidebar_label:"Kline",sidebar_position:3,slug:"/spot/public/kline"},sidebar:"v3SideBar",previous:{title:"Merged Order Book",permalink:"/docs/spot/public/merge-depth"},next:{title:"Public Trading Records",permalink:"/docs/spot/public/recent-trade"}},o={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m={toc:s};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"It only returns the results from latest 1000 candles regardless of what interval is specified")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If startTime and endTime are not specified, only the latest candles will be sent")),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("code",null,"/spot/v3/public/quote/kline")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the trading pair")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#interval"},"interval")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Chart interval")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"1000"),"]",". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"1000"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Start time (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"End time (ms)")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> t"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp(ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the trading pair")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> sn"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Alias")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Close price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> h"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"High price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> l"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Low price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> o"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Open price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> v"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trading volume")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request GET 'https://api-testnet.bybit.com/spot/v3/public/quote/kline?symbol=BTCUSDT&interval=1m&limit=1'\n")),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "t": 1659430380000,\n                "s": "BTCUSDT",\n                "sn": "BTCUSDT",\n                "c": "21170.14",\n                "h": "21170.14",\n                "l": "21127.86",\n                "o": "21127.86",\n                "v": "0.907276"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1659430400353\n}\n')))}d.isMDXComponent=!0}}]);