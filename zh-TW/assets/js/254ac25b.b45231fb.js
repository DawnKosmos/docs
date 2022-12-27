"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"Index Price Kline",sidebar_label:"Index Price Kline",sidebar_position:3,slug:"/derivatives/public/index-kline"},l=void 0,p={unversionedId:"v3/derivatives/rest-public/index-kline",id:"v3/derivatives/rest-public/index-kline",title:"Index Price Kline",description:"Get index price kline data",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-public/index-kline.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/index-kline",permalink:"/docs-v2/zh-TW/derivatives/public/index-kline",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Index Price Kline",sidebar_label:"Index Price Kline",sidebar_position:3,slug:"/derivatives/public/index-kline"},sidebar:"v3SideBar",previous:{title:"Mark Price Kline",permalink:"/docs-v2/zh-TW/derivatives/public/mark-kline"},next:{title:"Premium Index Price Kline",permalink:"/docs-v2/zh-TW/derivatives/public/premium-index-kline"}},d={},o=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=m("Tabs"),u=m("TabItem"),k={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get index price kline data"),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/index-price-kline")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),". default: ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", but in the response category shows ",(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"interval"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Kline interval. ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," ",(0,r.kt)("inlineCode",{parentName:"td"},"3")," ",(0,r.kt)("inlineCode",{parentName:"td"},"5")," ",(0,r.kt)("inlineCode",{parentName:"td"},"15")," ",(0,r.kt)("inlineCode",{parentName:"td"},"30")," ",(0,r.kt)("inlineCode",{parentName:"td"},"60")," ",(0,r.kt)("inlineCode",{parentName:"td"},"120")," ",(0,r.kt)("inlineCode",{parentName:"td"},"240")," ",(0,r.kt)("inlineCode",{parentName:"td"},"360")," ",(0,r.kt)("inlineCode",{parentName:"td"},"720")," ",(0,r.kt)("inlineCode",{parentName:"td"},"D")," ",(0,r.kt)("inlineCode",{parentName:"td"},"M")," ",(0,r.kt)("inlineCode",{parentName:"td"},"W"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"start"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,200]",". default: ",(0,r.kt)("inlineCode",{parentName:"td"},"200"))))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. Keeps empty string ",(0,r.kt)("inlineCode",{parentName:"td"},'""')," when ",(0,r.kt)("inlineCode",{parentName:"td"},"category")," is not passed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"An string array of individual candle"),(0,r.kt)("li",null,"Sort in reverse by ",(0,r.kt)("inlineCode",{parentName:"td"},"start")),(0,r.kt)("li",null,"The default collation within the array is ",(0,r.kt)("inlineCode",{parentName:"td"},"start"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"open"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"high"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"low"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"close")))))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(u,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/index-price-kline?category=linear&symbol=BTCUSDT&interval=60&start=1668441600000&end=1668528000000&limit=2 HTTP/1.1\nHost: api.bybit.com\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(u,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "symbol": "BTCUSDT",\n    "category": "linear",\n    "list": [\n        [\n            "1668445200000",\n            "16471.28",\n            "16619.57",\n            "16445.28",\n            "16584.01"\n        ],\n        [\n            "1668441600000",\n            "16594.06",\n            "16624.76",\n            "16358",\n            "16471.28"\n        ]\n    ]\n},\n    "retExtInfo": {},\n    "time": 1671968874797\n}\n')))))}c.isMDXComponent=!0}}]);