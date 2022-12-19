"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=m(n),u=a,c=k["".concat(d,".").concat(u)]||k[u]||s[u]||l;return n?r.createElement(c,i(i({ref:t},o),{},{components:n})):r.createElement(c,i({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},35491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={title:"Get Index Price Kline",sidebar_label:"Get Index Price Kline",sidebar_position:3},i=void 0,p={unversionedId:"v5/market/index-kline",id:"v5/market/index-kline",title:"Get Index Price Kline",description:"Query the index price kline data. This endpoint can retrieve the latest ? candles. Charts are returned in groups based on the requested interval.",source:"@site/docs/v5/market/index-kline.mdx",sourceDirName:"v5/market",slug:"/v5/market/index-kline",permalink:"/docs-v2/v5/market/index-kline",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Get Index Price Kline",sidebar_label:"Get Index Price Kline",sidebar_position:3},sidebar:"v5SideBar",previous:{title:"Get Mark Price Kline",permalink:"/docs-v2/v5/market/mark-kline"},next:{title:"Get Premium Index Price Kline",permalink:"/docs-v2/v5/market/preimum-index-kline"}},d={},m=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=o("Tabs"),k=o("TabItem"),u={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Query the index price kline data. This endpoint can retrieve the latest ? candles. Charts are returned in groups based on the requested interval."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Cover: USDT Perpetual / USDC Perpetual / Inverse Perpetual / Inverse Future"))),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/market/index-price-kline")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#interval"},"interval")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Kline interval. ",(0,a.kt)("inlineCode",{parentName:"td"},"1"),",",(0,a.kt)("inlineCode",{parentName:"td"},"3"),",",(0,a.kt)("inlineCode",{parentName:"td"},"5"),",",(0,a.kt)("inlineCode",{parentName:"td"},"15"),",",(0,a.kt)("inlineCode",{parentName:"td"},"30"),",",(0,a.kt)("inlineCode",{parentName:"td"},"60"),",",(0,a.kt)("inlineCode",{parentName:"td"},"120"),",",(0,a.kt)("inlineCode",{parentName:"td"},"240"),",",(0,a.kt)("inlineCode",{parentName:"td"},"360"),",",(0,a.kt)("inlineCode",{parentName:"td"},"720"),",",(0,a.kt)("inlineCode",{parentName:"td"},"D"),",",(0,a.kt)("inlineCode",{parentName:"td"},"M"),",",(0,a.kt)("inlineCode",{parentName:"td"},"W"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"start"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"end"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,200]",". default: ",(0,a.kt)("inlineCode",{parentName:"td"},"200"))))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("li",null,"An string array of individual candle"),(0,a.kt)("li",null,"Sort in reverse by ",(0,a.kt)("inlineCode",{parentName:"td"},"startTime")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> list","[0]",": startTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Start time of the candle (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> list","[1]",": openPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Open price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> list","[2]",": highPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Highest price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> list","[3]",": lowPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Lowest price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> list","[4]",": closePrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Close price. ",(0,a.kt)("em",{parentName:"td"},"To be last trade price when the candle is not closed"))))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(k,{value:"console",label:"Console",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"")))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(k,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "category": "linear",\n    "symbol": "BITUSDT",\n    "list": [\n        [\n            "1659256500000",\n            "0.693",\n            "0.694",\n            "0.692",\n            "0.693"\n        ]\n    ]\n},\n    "retExtInfo": {},\n    "time": 1669346770906\n}\n')))))}c.isMDXComponent=!0}}]);