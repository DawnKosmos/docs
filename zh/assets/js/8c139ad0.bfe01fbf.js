"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[32],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),o=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=o(r),f=n,k=u["".concat(p,".").concat(f)]||u[f]||d[f]||l;return r?a.createElement(k,s(s({ref:e},m),{},{components:r})):a.createElement(k,s({ref:e},m))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,s=new Array(l);s[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,s[1]=i;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63201:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={title:"Get Universal Transfer Record",sidebar_label:"Get Universal Transfer Record",sidebar_position:6},s=void 0,i={unversionedId:"v5/asset/unitransfer-list",id:"v5/asset/unitransfer-list",title:"Get Universal Transfer Record",description:"Query universal transfer records",source:"@site/docs/v5/asset/unitransfer-list.mdx",sourceDirName:"v5/asset",slug:"/v5/asset/unitransfer-list",permalink:"/docs-v2/zh/v5/asset/unitransfer-list",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Get Universal Transfer Record",sidebar_label:"Get Universal Transfer Record",sidebar_position:6},sidebar:"v5SideBar",previous:{title:"Universal Transfer",permalink:"/docs-v2/zh/v5/asset/unitransfer"},next:{title:"Get Allowed Deposit Coin Info",permalink:"/docs-v2/zh/v5/asset/deposit-coin-spec"}},p={},o=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},d=m("Tabs"),u=m("TabItem"),f={toc:o};function k(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Query universal transfer records"),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/v5/asset/transfer/universal-transfer-list-query")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"UUID. Use the one in ",(0,n.kt)("a",{parentName:"td",href:"create-inter-transfer#response-parameters"},"createTransfer"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Coin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#transferstatus"},"status")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer status. ",(0,n.kt)("inlineCode",{parentName:"td"},"SUCCESS"),",",(0,n.kt)("inlineCode",{parentName:"td"},"FAILED"),",",(0,n.kt)("inlineCode",{parentName:"td"},"PENDING"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,50]",". default: ",(0,n.kt)("inlineCode",{parentName:"td"},"20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> transferId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transferred coin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> amount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transferred amount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> fromMemberId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"From UID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> toMemberId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"TO UID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> fromAccountType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"From account type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> toAccountType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"To account type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> timestamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer created timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#transferstatus"},"status")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(u,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET v5/asset/transfer/inter-transfer-list-query?coin=USDT&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670988271299\nX-BAPI-RECV-WINDOW: 50000\n")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(u,{value:"js response",label:"response",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n    "list": [\n        {\n            "transferId": "selfTransfer_a1091cc7-9364-4b74-8de1-18f02c6f2d5c",\n            "coin": "USDT",\n            "amount": "5000",\n            "fromAccountType": "SPOT",\n            "toAccountType": "UNIFIED",\n            "timestamp": "1667283263000",\n            "status": "SUCCESS"\n        }\n    ],\n    "nextPageCursor": "eyJtaW5JRCI6MTM1ODQ2OCwibWF4SUQiOjEzNTg0Njh9"\n},\n    "retExtInfo": {},\n    "time": 1670988271677\n}\n')))))}k.isMDXComponent=!0}}]);