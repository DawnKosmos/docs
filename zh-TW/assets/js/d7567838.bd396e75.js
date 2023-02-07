"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[63119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,k=m["".concat(d,".").concat(u)]||m[u]||s[u]||l;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u64a4\u92b7\u59d4\u8a17\u55ae",sidebar_label:"\u64a4\u92b7\u59d4\u8a17\u55ae",sidebar_position:3,slug:"/derivatives/contract/cancel"},i=void 0,o={unversionedId:"v3/derivatives/rest-contract/order/cancel-order",id:"v3/derivatives/rest-contract/order/cancel-order",title:"\u64a4\u92b7\u59d4\u8a17\u55ae",description:"* \u60a8\u5fc5\u9808\u6307\u5b9aorderId\u6216\u8005orderLinkId.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/order/cancel-order.mdx",sourceDirName:"v3/derivatives/rest-contract/order",slug:"/derivatives/contract/cancel",permalink:"/docs/zh-TW/derivatives/contract/cancel",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u64a4\u92b7\u59d4\u8a17\u55ae",sidebar_label:"\u64a4\u92b7\u59d4\u8a17\u55ae",sidebar_position:3,slug:"/derivatives/contract/cancel"},sidebar:"v3SideBar",previous:{title:"\u4fee\u6539\u59d4\u8a17\u55ae",permalink:"/docs/zh-TW/derivatives/contract/replace-order"},next:{title:"\u64a4\u92b7\u6240\u6709\u8a02\u55ae",permalink:"/docs/zh-TW/derivatives/contract/cancel-all"}},d={},c=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u60a8\u5fc5\u9808\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"li"},"orderId"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"li"},"orderLinkId"),"."),(0,a.kt)("li",{parentName:"ul"},"\u82e5",(0,a.kt)("inlineCode",{parentName:"li"},"orderId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"orderLinkId"),"\u4e4b\u9593\u4e0d\u5339\u914d, \u7cfb\u7d71\u5c07\u6703\u512a\u5148\u8655\u7406",(0,a.kt)("inlineCode",{parentName:"li"},"orderId"),"."),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ea\u80fd\u64a4\u92b7\u672a\u6210\u4ea4\u548c\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae."))),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/order/cancel")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId. ",(0,a.kt)("inlineCode",{parentName:"td"},"orderId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"td"},"orderLinkId"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId. ",(0,a.kt)("inlineCode",{parentName:"td"},"orderId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"td"},"orderLinkId"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeID")))),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/order/cancel HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670570871662\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{\n    "symbol": "BTCUSDT",\n    "orderLinkId": null,\n    "orderId": "a0c76874-1777-48dd-9f99-b4120ec71cc0"\n}\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "orderId": "a0c76874-1777-48dd-9f99-b4120ec71cc0",\n        "orderLinkId": "xrp_12"\n    },\n    "retExtInfo": {},\n    "time": 1670570872075\n}\n')))}s.isMDXComponent=!0}}]);