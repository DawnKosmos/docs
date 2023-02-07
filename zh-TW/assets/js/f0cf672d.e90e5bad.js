"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[49567],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19150:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u67e5\u8a62\u5145\u503c\u76f8\u95dc\u7684\u898f\u683c",sidebar_label:"\u67e5\u8a62\u5145\u503c\u76f8\u95dc\u7684\u898f\u683c",sidebar_position:1,slug:"/account-asset/deposit-spec"},i=void 0,o={unversionedId:"v3/account-asset/withdraw-deposit/deposit-spec",id:"v3/account-asset/withdraw-deposit/deposit-spec",title:"\u67e5\u8a62\u5145\u503c\u76f8\u95dc\u7684\u898f\u683c",description:"\u67e5\u8a62\u5145\u503c\u76f8\u95dc\u7684\u898f\u683c\u4fe1\u606f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account-asset/withdraw-deposit/deposit-spec.mdx",sourceDirName:"v3/account-asset/withdraw-deposit",slug:"/account-asset/deposit-spec",permalink:"/docs/zh-TW/account-asset/deposit-spec",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u67e5\u8a62\u5145\u503c\u76f8\u95dc\u7684\u898f\u683c",sidebar_label:"\u67e5\u8a62\u5145\u503c\u76f8\u95dc\u7684\u898f\u683c",sidebar_position:1,slug:"/account-asset/deposit-spec"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u8cc7\u7522\u4fe1\u606f",permalink:"/docs/zh-TW/account-asset/asset-info"},next:{title:"\u67e5\u8a62\u5145\u503c\u8a18\u9304",permalink:"/docs/zh-TW/account-asset/deposit-record"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:s};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u67e5\u8a62\u5145\u503c\u76f8\u95dc\u7684\u898f\u683c\u4fe1\u606f"),(0,r.kt)("admonition",{title:"Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u662f\u4e00\u500b",(0,r.kt)("strong",{parentName:"p"},"\u516c\u5171"),"\u63a5\u53e3\uff0c\u7121\u9700\u9452\u6b0a\u3002 coin\u548cchain\u5fc5\u9808\u5728\u8f38\u5165\u53c3\u6578\u4e2d\u914d\u5c0d\u51fa\u73fe\u3002 \u5426\u5247\uff0c\u8996\u70ba\u7121\u689d\u4ef6\u67e5\u8a62\u3002")),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/asset/v3/public/deposit/allowed-deposit-list/query")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u5e63\u7a2e. coin\u548cchain\u5fc5\u9808\u5728\u8f38\u5165\u53c3\u6578\u4e2d\u914d\u5c0d\u51fa\u73fe\u3002 \u5426\u5247\uff0c\u8996\u70ba\u7121\u689d\u4ef6\u67e5\u8a62\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u93c8\u540d. coin\u548cchain\u5fc5\u9808\u5728\u8f38\u5165\u53c3\u6578\u4e2d\u914d\u5c0d\u51fa\u73fe\u3002 \u5426\u5247\uff0c\u8996\u70ba\u7121\u689d\u4ef6\u67e5\u8a62\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\u4fe1\u606f\uff0c\u7528\u4f86\u5206\u9801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u689d\u6578, ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"50"),"]",", \u9ed8\u8a8d\u70ba50")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"configList"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"enum#coin"},"coin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u7684\u5e63\u7a2e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"enum#chain"},"chain")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u93c8\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> coinShowName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e01\u5c55\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> chainType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u93c8\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> blockConfirmNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u4e0a\u8cec\u78ba\u8a8d\u6578")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> minDepositAmount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u4f4e\u5145\u503c\u91d1\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\u4fe1\u606f, \u7528\u4f86\u5206\u9801")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /asset/v3/public/deposit/allowed-deposit-list/query?coin=BTC&chain=BTC HTTP/1.1\nHost: api-testnet.bybit.com\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "configList": [\n            {\n                "coin": "BTC",\n                "chain": "BTC",\n                "coinShowName": "BTC",\n                "chainType": "BTC",\n                "blockConfirmNumber": 10000,\n                "minDepositAmount": "0.0005"\n            }\n        ],\n        "nextPageCursor": "eyJwYWdlIjoyLCJsaW1pdCI6MTB9"\n    },\n    "retExtInfo": {},\n    "time": 1671165256048\n}\n')))}c.isMDXComponent=!0}}]);