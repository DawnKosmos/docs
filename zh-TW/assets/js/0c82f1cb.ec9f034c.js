"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2222],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(f,o(o({ref:e},d),{},{components:n})):r.createElement(f,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28621:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u67e5\u8a62\u9322\u5305\u4f59\u984d",sidebar_label:"\u67e5\u8a62\u9322\u5305\u4f59\u984d",slug:"/spot/wallet"},o=void 0,i={unversionedId:"v3/spot/wallet",id:"v3/spot/wallet",title:"\u67e5\u8a62\u9322\u5305\u4f59\u984d",description:"HTTP \u8acb\u6c42",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/wallet.mdx",sourceDirName:"v3/spot",slug:"/spot/wallet",permalink:"/docs/zh-TW/spot/wallet",draft:!1,tags:[],version:"current",frontMatter:{title:"\u67e5\u8a62\u9322\u5305\u4f59\u984d",sidebar_label:"\u67e5\u8a62\u9322\u5305\u4f59\u984d",slug:"/spot/wallet"},sidebar:"v3SideBar",previous:{title:"\u4ea4\u6613\u8a18\u9304",permalink:"/docs/zh-TW/spot/trade/my-trades"},next:{title:"LT \u5168\u91cf\u8cc7\u7522\u57fa\u790e\u4fe1\u606f\u67e5\u8a62",permalink:"/docs/zh-TW/spot/etp/asset-info"}},p={},c=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:c};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("code",null,"/spot/v3/private/account")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"balances"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> coinId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2eID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> total"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7e3d\u984d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> free"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4f59\u984d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> locked"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u51cd\u7d50\u4f59\u984d")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request GET 'https://api-testnet.bybit.com/spot/v3/private/account' \\\n--header 'X-BAPI-SIGN: XXXXX' \\\n--header 'X-BAPI-API-KEY: {api key}' \\\n--header 'X-BAPI-TIMESTAMP: 1659346886605' \\\n--header 'X-BAPI-RECV-WINDOW: 5000'\n")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "balances": [\n            {\n                "coin": "BTC",\n                "coinId": "BTC",\n                "total": "0.20378018343",\n                "free": "0.20378018343",\n                "locked": "0"\n            },\n            {\n                "coin": "BTC3L",\n                "coinId": "BTC3L",\n                "total": "743.03560386",\n                "free": "743.03560386",\n                "locked": "0"\n            },\n            {\n                "coin": "BTC3S",\n                "coinId": "BTC3S",\n                "total": "0.999",\n                "free": "0.999",\n                "locked": "0"\n            }\n        ]\n    },\n    "retExtMap": {},\n    "retExtInfo": {},\n    "time": 1659346887407\n}\n')))}s.isMDXComponent=!0}}]);