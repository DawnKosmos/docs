"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||s;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const s={title:"Create Subaccount Transfer",sidebar_label:"Create Subaccount Transfer",sidebar_position:2,slug:"/account-asset/sub-transfer"},l=void 0,o={unversionedId:"v3/account-asset/transfer/subacct-transfer",id:"v3/account-asset/transfer/subacct-transfer",title:"Create Subaccount Transfer",description:"Transfers funds between the parent and child (sub) accounts.",source:"@site/docs/v3/account-asset/transfer/subacct-transfer.mdx",sourceDirName:"v3/account-asset/transfer",slug:"/account-asset/sub-transfer",permalink:"/docs-v2/account-asset/sub-transfer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create Subaccount Transfer",sidebar_label:"Create Subaccount Transfer",sidebar_position:2,slug:"/account-asset/sub-transfer"},sidebar:"v3SideBar",previous:{title:"Create Internal Transfer",permalink:"/docs-v2/account-asset/internal-transfer"},next:{title:"Get Internal Transfer List",permalink:"/docs-v2/account-asset/internal-transfer-list"}},u={},i=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Transfers funds between the parent and child (sub) accounts."),(0,a.kt)("p",null,"To send a transfer which is ",(0,a.kt)("a",{parentName:"p",href:"enum#accounttype"},"accountType")," & parent/sub agnostic, use the ",(0,a.kt)("a",{parentName:"p",href:"uni-transfer#"},"Create Universal Transfer")," endpoint."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A subaccount can only be attributed to a parent account.")),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/transfer/sub-member-transfer")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UUID, which is unique across the platform")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"enum#coin"},"coin")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Currency type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Exchange to amount")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"subMemberId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Subaccount userid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines the direction of transfer.",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"IN")," transfer from main account to subaccount"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"OUT")," transfer from subaccount to main account")," "))))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UUID, which is unique across the platform")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /asset/v3/private/transfer/sub-member-transfer HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-API-KEY: xxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1670925915816\nX-BAPI-RECV-WINDOW: 50000\nX-BAPI-SIGN: xxxxxxxxxxxxx\nContent-Type: application/json\nContent-Length: 144\n\n{\n    "transferId": "2811a2ca-b42c-4cda-a21f-3df0a1f2516f",\n    "coin": "USDT",\n    "amount": "5",\n    "subMemberId": 554137,\n    "type": "IN"\n}\n')),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "transferId": "2811a2ca-b42c-4cda-a21f-3df0a1f2516f"\n    },\n    "retExtInfo": {},\n    "time": 1670925915979\n}\n')))}c.isMDXComponent=!0}}]);