"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4302],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),d=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(r),c=a,k=s["".concat(i,".").concat(c)]||s[c]||u[c]||l;return r?n.createElement(k,o(o({ref:e},m),{},{components:r})):n.createElement(k,o({ref:e},m))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},21301:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u8d16\u56de",sidebar_label:"\u8d16\u56de",slug:"/spot/etp/redeem"},o=void 0,p={unversionedId:"v3/spot/rest-etp/redeem",id:"v3/spot/rest-etp/redeem",title:"\u8d16\u56de",description:"HTTP \u8acb\u6c42",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/rest-etp/redeem.mdx",sourceDirName:"v3/spot/rest-etp",slug:"/spot/etp/redeem",permalink:"/docs-v2/zh-TW/spot/etp/redeem",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8d16\u56de",sidebar_label:"\u8d16\u56de",slug:"/spot/etp/redeem"},sidebar:"v3SideBar",previous:{title:"\u7533\u8cfc",permalink:"/docs-v2/zh-TW/spot/etp/purchase"},next:{title:"\u67e5\u8a62\u501f\u5e63\u8cec\u6236\u8a73\u60c5",permalink:"/docs-v2/zh-TW/spot/margin/account"}},i={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:4},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:4},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:4},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},u=m("Tabs"),s=m("TabItem"),c={toc:d};function k(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("code",null,"/spot/v3/private/redeem")),(0,a.kt)("h4",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ltCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u60f3\u8981\u67e5\u8a62\u7684LT\u8cc7\u7522\u540d\u7a31\uff0c\u5f9e\u8cc7\u7522\u5217\u8868\u4e2d\u7372\u53d6.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ltQuantity"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d16\u56de\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"serialNo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e8f\u5217\u865f")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u55ae\u865f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ltCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"LT\u8cc7\u7522\u7c21\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderAmount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5be6\u969b\u6210\u4ea4\u7684\u91d1\u984d. \u4e00\u822c\u8fd4\u56de",(0,a.kt)("code",null,'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderQuantity"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5be6\u969b\u6210\u4ea4\u7684LT\u8cc7\u7522\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderStatus"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7533\u8cfc\u55ae\u72c0\u614b\uff1a1. \u5df2\u5b8c\u6210 2. \u7b49\u5f85\u4e2d 3. \u5931\u6557")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"quantity"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0b\u55ae\u7684LT\u8cc7\u7522\u6578\u91cf. \u4e00\u822c\u8fd4\u56de",(0,a.kt)("code",null,'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"serialNo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e8f\u5217\u865f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"timestamp"),(0,a.kt)("td",{parentName:"tr",align:"left"},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6642\u9593\u6233")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"valueCoin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a08\u50f9\u5e63\u7a2e")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(s,{value:"console",label:"Console",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request POST 'https://api-testnet.bybit.com/spot/v3/private/redeem' \\\n--header 'Content-Type: application/json' \\\n--header 'X-BAPI-API-KEY: XXXXXXXXX' \\\n--header 'X-BAPI-TIMESTAMP: 1662605726010' \\\n--header 'X-BAPI-RECV-WINDOW: 5000' \\\n--header 'X-BAPI-SIGN: c6a4d178988d07045c06528b7038842f4d75dde8be840cc8c538ca434f6fc617' \\\n--data-raw '{\n    \"ltCode\": \"DOT3LUSDT\",\n    \"ltQuantity\": \"50\",\n    \"serialNo\": \"r001\"\n}'\n")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "id": "2087",\n        "ltCode": "DOT3LUSDT",\n        "orderAmount": "",\n        "orderQuantity": "50",\n        "orderStatus": "2",\n        "quantity": "",\n        "serialNo": "r001",\n        "timestamp": 1662605726326,\n        "valueCoin": "DOT3L"\n    },\n    "retExtInfo": null,\n    "time": 1662605727987\n}\n')))}k.isMDXComponent=!0}}]);