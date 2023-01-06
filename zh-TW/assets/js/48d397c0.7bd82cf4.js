"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[802],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:e},c),{},{components:r})):n.createElement(f,l({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},68064:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u7533\u8acb\u501f\u5e63",sidebar_label:"\u7533\u8acb\u501f\u5e63",slug:"/spot/margin/borrow"},l=void 0,i={unversionedId:"v3/spot/rest-spot-margin/borrow",id:"v3/spot/rest-spot-margin/borrow",title:"\u7533\u8acb\u501f\u5e63",description:"HTTP \u8acb\u6c42",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/rest-spot-margin/borrow.mdx",sourceDirName:"v3/spot/rest-spot-margin",slug:"/spot/margin/borrow",permalink:"/docs-v2/zh-TW/spot/margin/borrow",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7533\u8acb\u501f\u5e63",sidebar_label:"\u7533\u8acb\u501f\u5e63",slug:"/spot/margin/borrow"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u501f\u5e63\u8a02\u55ae",permalink:"/docs-v2/zh-TW/spot/margin/borrow-history"},next:{title:"\u67e5\u8a62\u501f\u5e63\u5229\u7387\u53ca\u984d\u5ea6",permalink:"/docs-v2/zh-TW/spot/margin/interest"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:4},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:4},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:4},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},d=c("Tabs"),u=c("TabItem"),m={toc:s};function f(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("code",null,"/spot/v3/private/cross-margin-loan")),(0,a.kt)("h4",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"qty"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u501f\u5e63\u6578\u91cf")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transactId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u501f\u6b3e\u8a02\u55aeid")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(u,{value:"console",label:"Console",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request POST 'https://api-testnet.bybit.com/spot/v3/private/cross-margin-loan' \\\n--header 'Content-Type: application/json' \\\n--header 'X-BAPI-API-KEY: XXXXXXXXX' \\\n--header 'X-BAPI-TIMESTAMP: 1662617848755' \\\n--header 'X-BAPI-RECV-WINDOW: 5000' \\\n--header 'X-BAPI-SIGN: 03529daeca45ccf5c491a8e6569ff3dff39d1e984171e7aedca0dc2624d0c416' \\\n--data-raw '{\n    \"coin\": \"USDT\",\n    \"qty\": \"200\"\n}'\n")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "transactId": "14143"\n    },\n    "retExtInfo": null,\n    "time": 1662617848970\n}\n')))}f.isMDXComponent=!0}}]);