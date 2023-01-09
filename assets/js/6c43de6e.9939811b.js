"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));r(57670);const s={title:"Get Subaccount UID List",sidebar_label:"Get Subaccount UID List",sidebar_position:5,slug:"/account-asset/sub-uid-list"},l=void 0,o={unversionedId:"v3/account-asset/transfer/subacct-list",id:"v3/account-asset/transfer/subacct-list",title:"Get Subaccount UID List",description:"Query Subaccount List",source:"@site/docs/v3/account-asset/transfer/subacct-list.mdx",sourceDirName:"v3/account-asset/transfer",slug:"/account-asset/sub-uid-list",permalink:"/docs-v2/account-asset/sub-uid-list",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get Subaccount UID List",sidebar_label:"Get Subaccount UID List",sidebar_position:5,slug:"/account-asset/sub-uid-list"},sidebar:"v3SideBar",previous:{title:"Get Subaccount Transfer List",permalink:"/docs-v2/account-asset/sub-transfer-list"},next:{title:"Enable Universal Transfer",permalink:"/docs-v2/account-asset/enable-unitransfer"}},u={},i=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Query Subaccount List"),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/transfer/sub-member/list/query")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"subMemberIds"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"integer array")),(0,a.kt)("td",{parentName:"tr",align:null},"List of all subaccounts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferableSubMemberIds"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string array")),(0,a.kt)("td",{parentName:"tr",align:null},"List of subaccounts that are universal transfer-enabled")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /asset/v3/private/transfer/sub-member/list/query HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1670928351923\nX-BAPI-RECV-WINDOW: 50000\n")),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "subMemberIds": [\n            "111111",\n            "2222222",\n            "3333333"\n        ],\n        "transferableSubMemberIds": [\n            "111111",\n            "2222222",\n            "3333333"\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1670928352175\n}\n')))}p.isMDXComponent=!0},57670:()=>{}}]);