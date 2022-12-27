"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(n),u=a,c=k["".concat(o,".").concat(u)]||k[u]||s[u]||l;return n?r.createElement(c,i(i({ref:t},m),{},{components:n})):r.createElement(c,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"Mark Price Kline",sidebar_label:"Mark Price Kline",sidebar_position:2,slug:"/derivatives/public/mark-kline"},i=void 0,p={unversionedId:"v3/derivatives/rest-public/mark-kline",id:"v3/derivatives/rest-public/mark-kline",title:"Mark Price Kline",description:"Get mark price kline data",source:"@site/docs/v3/derivatives/rest-public/mark-kline.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/mark-kline",permalink:"/docs-v2/derivatives/public/mark-kline",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Mark Price Kline",sidebar_label:"Mark Price Kline",sidebar_position:2,slug:"/derivatives/public/mark-kline"},sidebar:"v3SideBar",previous:{title:"Kline",permalink:"/docs-v2/derivatives/public/kline"},next:{title:"Index Price Kline",permalink:"/docs-v2/derivatives/public/index-kline"}},o={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=m("Tabs"),k=m("TabItem"),u={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get mark price kline data"),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/mark-price-kline")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),". default: ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", but in the response category shows ",(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interval"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Kline interval. ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," ",(0,a.kt)("inlineCode",{parentName:"td"},"3")," ",(0,a.kt)("inlineCode",{parentName:"td"},"5")," ",(0,a.kt)("inlineCode",{parentName:"td"},"15")," ",(0,a.kt)("inlineCode",{parentName:"td"},"30")," ",(0,a.kt)("inlineCode",{parentName:"td"},"60")," ",(0,a.kt)("inlineCode",{parentName:"td"},"120")," ",(0,a.kt)("inlineCode",{parentName:"td"},"240")," ",(0,a.kt)("inlineCode",{parentName:"td"},"360")," ",(0,a.kt)("inlineCode",{parentName:"td"},"720")," ",(0,a.kt)("inlineCode",{parentName:"td"},"D")," ",(0,a.kt)("inlineCode",{parentName:"td"},"M")," ",(0,a.kt)("inlineCode",{parentName:"td"},"W"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"start"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"end"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,200]",". default: ",(0,a.kt)("inlineCode",{parentName:"td"},"200"))))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product type. Keeps empty string ",(0,a.kt)("inlineCode",{parentName:"td"},'""')," when ",(0,a.kt)("inlineCode",{parentName:"td"},"category")," is not passed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("li",null,"An string array of individual candle"),(0,a.kt)("li",null,"Sort in reverse by ",(0,a.kt)("inlineCode",{parentName:"td"},"start")),(0,a.kt)("li",null,"The default collation within the array is ",(0,a.kt)("inlineCode",{parentName:"td"},"start"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"open"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"high"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"low"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"close")))))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(k,{value:"console-inverse",label:"inverse",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/mark-price-kline?symbol=BTCUSD&interval=1&start=1670261100000&end=1670261280000&category=inverse HTTP/1.1\nHost: api.bybit.com\n")))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(k,{value:"js inverse",label:"inverse",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "symbol": "BTCUSD",\n    "category": "inverse",\n    "list": [\n        [\n            "1670261280000",\n            "17064.76",\n            "17068.45",\n            "17063.5",\n            "17067"\n        ],\n        [\n            "1670261220000",\n            "17062.5",\n            "17064.88",\n            "17062.5",\n            "17064.76"\n        ],\n        [\n            "1670261160000",\n            "17064",\n            "17064",\n            "17062.5",\n            "17062.5"\n        ],\n        [\n            "1670261100000",\n            "17072",\n            "17072",\n            "17064",\n            "17064"\n        ]\n    ]\n},\n    "retExtInfo": {},\n    "time": 1671968706092\n}\n')))))}c.isMDXComponent=!0}}]);