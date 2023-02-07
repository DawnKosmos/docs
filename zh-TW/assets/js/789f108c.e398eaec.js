"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[65135],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72290:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u64a4\u92b7\u63d0\u5e63",sidebar_label:"\u64a4\u92b7\u63d0\u5e63",sidebar_position:7,slug:"/account-asset/cancel-withdraw"},i=void 0,o={unversionedId:"v3/account-asset/withdraw-deposit/cancel-withdraw",id:"v3/account-asset/withdraw-deposit/cancel-withdraw",title:"\u64a4\u92b7\u63d0\u5e63",description:"\u64a4\u92b7\u63d0\u5e63",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account-asset/withdraw-deposit/cancel-withdraw.mdx",sourceDirName:"v3/account-asset/withdraw-deposit",slug:"/account-asset/cancel-withdraw",permalink:"/docs/zh-TW/account-asset/cancel-withdraw",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u64a4\u92b7\u63d0\u5e63",sidebar_label:"\u64a4\u92b7\u63d0\u5e63",sidebar_position:7,slug:"/account-asset/cancel-withdraw"},sidebar:"v3SideBar",previous:{title:"\u63d0\u73fe",permalink:"/docs/zh-TW/account-asset/withdraw"},next:{title:"\u67e5\u8a62\u4e3b\u5e33\u6236\u5145\u503c\u5730\u5740\u4fe1\u606f",permalink:"/docs/zh-TW/account-asset/master-deposit-addr"}},c={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],p={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u64a4\u92b7\u63d0\u5e63"),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/withdraw/cancel")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"id"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u73feID\u3002 (\u63d0\u73feAPI\u97ff\u61c9\u53c3\u6578\u4e2d\u7684\u63d0\u73fe\u8acb\u6c42ID)")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64a4\u92b7\u7533\u8acb\u7d50\u679c",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"1"),": \u6210\u529f"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"0"),": \u5931\u6557")))))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /asset/v3/private/withdraw/cancel HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671173665186\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\nContent-Length: 24\n\n{\n    "id": 1234567890\n}\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "status": 1\n      },\n    "retExtInfo": {},\n    "time": 1671173665252\n}\n')))}u.isMDXComponent=!0}}]);