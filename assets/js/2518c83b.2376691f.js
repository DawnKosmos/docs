"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[42],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,b=m["".concat(i,".").concat(c)]||m[c]||d[c]||s;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={title:"Get Sub UID",sidebar_label:"Get Sub UID",sidebar_position:3.5},l=void 0,o={unversionedId:"v5/asset/sub-uid-list",id:"v5/asset/sub-uid-list",title:"Get Sub UID",description:"Query sub uid list of a certain Master UID.",source:"@site/docs/v5/asset/sub-uid-list.mdx",sourceDirName:"v5/asset",slug:"/v5/asset/sub-uid-list",permalink:"/docs-v2/v5/asset/sub-uid-list",draft:!1,tags:[],version:"current",sidebarPosition:3.5,frontMatter:{title:"Get Sub UID",sidebar_label:"Get Sub UID",sidebar_position:3.5},sidebar:"v5SideBar",previous:{title:"Get Internal Transfer Records",permalink:"/docs-v2/v5/asset/inter-transfer-list"},next:{title:"Enable Sub UID For Universal Transfer",permalink:"/docs-v2/v5/asset/enable-unitransfer-subuid"}},i={},u=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("Tabs"),m=p("TabItem"),c={toc:u};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Query sub uid list of a certain Master UID."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The API key of user id must own one of permissions will be allowed to call this API endpoint."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'MASTER UID: "Account Transfer", "Subaccount Transfer", "Withdrawal"'))),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/asset/transfer/query-sub-member-list")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"subMemberIds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array","<","string",">"),(0,a.kt)("td",{parentName:"tr",align:null},"All sub uids under the main uid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferableSubMemberIds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array","<","string",">"),(0,a.kt)("td",{parentName:"tr",align:null},"All sub uid that enabled universal transfer")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(m,{value:"console",label:"Console",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/asset/transfer/query-sub-member-list HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672147239931\nX-BAPI-RECV-WINDOW: 5000\n")))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(m,{value:"js response",label:"response",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "subMemberIds": [\n            "554117",\n            "592324",\n            "592334",\n            "1055262",\n            "1072055",\n            "1119352"\n        ],\n        "transferableSubMemberIds": [\n            "554117",\n            "592324"\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672147241320\n}\n')))))}b.isMDXComponent=!0}}]);