"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={title:"Public Trading History",sidebar_label:"Public Trading History",sidebar_position:8,slug:"/derivatives/public/trade"},i=void 0,o={unversionedId:"v3/derivatives/rest-public/public-trade",id:"v3/derivatives/rest-public/public-trade",title:"Public Trading History",description:"Get recent public trading records in Bybit. You could download archived USDT contract trade records here.",source:"@site/docs/v3/derivatives/rest-public/public-trade.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/trade",permalink:"/docs-v2/derivatives/public/trade",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Public Trading History",sidebar_label:"Public Trading History",sidebar_position:8,slug:"/derivatives/public/trade"},sidebar:"v3SideBar",previous:{title:"Instrument Info",permalink:"/docs-v2/derivatives/public/instrument-info"},next:{title:"Risk Limit",permalink:"/docs-v2/derivatives/public/risk-limit"}},p={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=s("Tabs"),c=s("TabItem"),u={toc:d};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Get recent public trading records in Bybit. You could download archived USDT contract trade records ",(0,n.kt)("a",{href:"https://public.bybit.com/trading/"},"here"),"."),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/recent-trade")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type.",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,n.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,n.kt)("inlineCode",{parentName:"td"},"option")," ",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"category")," not passed or =",(0,n.kt)("inlineCode",{parentName:"td"},"linerar"),",",(0,n.kt)("inlineCode",{parentName:"td"},"inverse"),", then ",(0,n.kt)("inlineCode",{parentName:"td"},"symbol")," is ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"category"),"=option, then ",(0,n.kt)("inlineCode",{parentName:"td"},"symbol")," is ",(0,n.kt)("strong",{parentName:"td"},"optional")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Base coin. default: ",(0,n.kt)("strong",{parentName:"td"},"BTC"),". Valid only when ",(0,n.kt)("inlineCode",{parentName:"td"},"category"),"=option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"optionType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Option type. ",(0,n.kt)("inlineCode",{parentName:"td"},"Call")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"Put"),". Valid only when ",(0,n.kt)("inlineCode",{parentName:"td"},"category"),"=option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,1000]",". default: ",(0,n.kt)("inlineCode",{parentName:"td"},"500"))))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> execId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Execution id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trade price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trade size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Buy"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trade time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> isBlockTrade"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Is block trade")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(c,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/recent-trade?category=linear&symbol=BTCUSDT&limit=1 HTTP/1.1\nHost: api.bybit.com\n")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(c,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "linear",\n        "list": [\n            {\n            "execId": "5706445b-8543-59bc-8988-93e0f4a3f0f9",\n            "symbol": "BTCUSDT",\n            "price": "16814.50",\n            "size": "0.001",\n            "side": "Buy",\n            "time": "1671970297430",\n            "isBlockTrade": false\n        }\n    ]\n},\n    "retExtInfo": {},\n    "time": 1671970297723\n}\n')))))}k.isMDXComponent=!0}}]);