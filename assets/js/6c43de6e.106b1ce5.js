"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||s;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));r(57670);const s={title:"Query Subaccount UID List",sidebar_label:"Query Subaccount UID List",sidebar_position:5},l=void 0,o={unversionedId:"v3/account-asset/transfer/subacct-list",id:"v3/account-asset/transfer/subacct-list",title:"Query Subaccount UID List",description:"Query Subaccount List",source:"@site/docs/v3/account-asset/transfer/subacct-list.mdx",sourceDirName:"v3/account-asset/transfer",slug:"/v3/account-asset/transfer/subacct-list",permalink:"/docs-v2/v3/account-asset/transfer/subacct-list",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Query Subaccount UID List",sidebar_label:"Query Subaccount UID List",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"Query Subaccount Transfer List",permalink:"/docs-v2/v3/account-asset/transfer/subacct-transfer-list"},next:{title:"Enable Universal Transfer",permalink:"/docs-v2/v3/account-asset/transfer/enable-uni-transfer"}},u={},i=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=c("Tabs"),m=c("TabItem"),d={toc:i};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Query Subaccount List"),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/transfer/sub-member/list/query")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"subMemberIds"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"integer array")),(0,n.kt)("td",{parentName:"tr",align:null},"List of all subaccounts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"transferableSubMemberIds"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string array")),(0,n.kt)("td",{parentName:"tr",align:null},"List of subaccounts that are universal transfer-enabled")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(p,{mdxType:"Tabs"},(0,n.kt)(m,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /asset/v3/private/transfer/sub-member/list/query HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1670928351923\nX-BAPI-RECV-WINDOW: 50000\n")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(p,{mdxType:"Tabs"},(0,n.kt)(m,{value:"js linear",label:"assets",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "subMemberIds": [\n            "111111",\n            "2222222",\n            "3333333"\n        ],\n        "transferableSubMemberIds": [\n            "111111",\n            "2222222",\n            "3333333"\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1670928352175\n}\n')))))}b.isMDXComponent=!0},57670:()=>{}}]);