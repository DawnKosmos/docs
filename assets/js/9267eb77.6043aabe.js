"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6139],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),o=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=o(r),k=n,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return r?a.createElement(c,i(i({ref:e},s),{},{components:r})):a.createElement(c,i({ref:e},s))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33769:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));r(57670);const l={title:"Get Closed PnL",sidebar_label:"Get Closed PnL",sidebar_position:9,slug:"/derivatives/contract/closepnl"},i=void 0,p={unversionedId:"v3/derivatives/rest-contract/position/close-pnl",id:"v3/derivatives/rest-contract/position/close-pnl",title:"Get Closed PnL",description:"Query user's closed profit and loss records. The results are sorted by createdAt in descending order.",source:"@site/docs/v3/derivatives/rest-contract/position/close-pnl.mdx",sourceDirName:"v3/derivatives/rest-contract/position",slug:"/derivatives/contract/closepnl",permalink:"/docs-v2/derivatives/contract/closepnl",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Get Closed PnL",sidebar_label:"Get Closed PnL",sidebar_position:9,slug:"/derivatives/contract/closepnl"},sidebar:"v3SideBar",previous:{title:"Get Execution List",permalink:"/docs-v2/derivatives/contract/execution-list"},next:{title:"Wallet Balance",permalink:"/docs-v2/derivatives/contract/wallet"}},d={},o=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],s={toc:o};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Query user's closed profit and loss records. The results are sorted by ",(0,n.kt)("inlineCode",{parentName:"p"},"createdAt")," in descending order."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Support USDT Perpetual, Inverse Perpetual and Inverse Future")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Query time range:"),(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Specify ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"endTime"),", you can query up to 2 years records"),(0,n.kt)("li",{parentName:"ul"},"Without ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"endTime"),", it returns past 6 months records by default")),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/position/closed-pnl")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"200"),"]",". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"50"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Used for pagination")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Buy"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Side"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order qty")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> leverage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"leverage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order type. ",(0,n.kt)("inlineCode",{parentName:"td"},"Market"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Limit"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#exectype"},"execType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Exec type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> closedSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Closed size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumEntryValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cumulated entry position value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> avgEntryPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Average entry price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExitValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cumulated exit position value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> avgExitPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Average exit price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> closedPnl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Closed PnL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> fillCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of fills in a single order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> createdAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The created time (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /contract/v3/private/position/closed-pnl?symbol=ETHUSDT&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670855140626\nX-BAPI-RECV-WINDOW: 5000\n")),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "list": [\n        {\n            "symbol": "ETHUSDT",\n            "orderId": "ee650123-74bf-4094-aadb-efa139d99c50",\n            "side": "Buy",\n            "qty": "0.30",\n            "orderPrice": "1314.75",\n            "orderType": "Market",\n            "execType": "Trade",\n            "closedSize": "0.30",\n            "cumEntryValue": "373.71078947",\n            "avgEntryPrice": "1245.7026",\n            "cumExitValue": "375.532",\n            "avgExitPrice": "1251.7734",\n            "closedPnl": "-2.27050237",\n            "fillCount": "2",\n            "leverage": "50",\n            "createdAt": "1670838034412"\n        }\n    ],\n    "nextPageCursor": "eyJza2lwX2xvY2FsX3N5bWJvbCI6ZmFsc2UsInBhZ2VfdG9rZW4iOiJleUpOSWpwN0lsOTFjM2N4WHlJNmV5SkNJam9pUVRnMlZFcEJSVWRCVVVVOUluMHNJbkJySWpwN0lrSWlPaUpLUjFac1RtcFZkMDFVU1hwTVZHTXdXVzFaZEU1RVFUVk9RekZvV1ZkU2FVeFhWbTFaVkVWNlQxZFJOVTlYVFRGTlFUMDlJbjBzSWw5emExOGlPbnNpUWlJNklrWjZRVU5XZGpWcVkyTXlSblJoTTJSQlp6MDlJbjE5ZlE9PSJ9"\n},\n    "retExtInfo": {},\n    "time": 1670855140831\n}\n')))}m.isMDXComponent=!0},57670:()=>{}}]);