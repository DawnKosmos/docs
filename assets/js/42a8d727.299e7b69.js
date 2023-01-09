"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},52110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));r(57670);const i={title:"Upgrade To Unified Margin Account",sidebar_label:"Upgrade To Unified Margin Account",sidebar_position:2,slug:"/derivatives/unified/upgrade"},l=void 0,o={unversionedId:"v3/derivatives/rest-unified/account/upgrade-unified-account",id:"v3/derivatives/rest-unified/account/upgrade-unified-account",title:"Upgrade To Unified Margin Account",description:"Upgrade to unified margin account (UMA)",source:"@site/docs/v3/derivatives/rest-unified/account/upgrade-unified-account.mdx",sourceDirName:"v3/derivatives/rest-unified/account",slug:"/derivatives/unified/upgrade",permalink:"/docs-v2/derivatives/unified/upgrade",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Upgrade To Unified Margin Account",sidebar_label:"Upgrade To Unified Margin Account",sidebar_position:2,slug:"/derivatives/unified/upgrade"},sidebar:"v3SideBar",previous:{title:"Wallet Balance",permalink:"/docs-v2/derivatives/unified/wallet"},next:{title:"Transaction Log",permalink:"/docs-v2/derivatives/unified/transaction-log"}},s={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Upgrade to unified margin account (UMA)"),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/account/upgrade-unified-account")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Upgrade status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> relieveLimitBizResponse"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"empty array if request success")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> relieveLimitCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Fail code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> relieveLimitMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Fail message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> relieveLimitMobileUrl"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> relieveLimitWebUrl"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> pass"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"whether to pass the requirement")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"POST /unified/v3/private/account/upgrade-unified-account HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672022838777\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{}\n")),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "SUCCESS",\n    "result": {\n        "status": "FAIL",\n        "relieveLimitBizResponse": [\n            {\n                "relieveLimitCode": "3400071",\n                "relieveLimitMsg": "unable to upgrade as you haven\u2019t met the minimum asset requirement.",\n                "relieveLimitMobileUrl": "",\n                "relieveLimitWebUrl": "",\n                "pass": false\n            },\n            {\n                "relieveLimitCode": "3400051",\n                "relieveLimitMsg": "unable to upgrade, please close the usdt perpetual positions in USDT account.",\n                "relieveLimitMobileUrl": "",\n                "relieveLimitWebUrl": "",\n                "pass": false\n            }\n        ]\n},\n    "retExtInfo": {},\n    "time": 1672022840011\n}\n')))}d.isMDXComponent=!0},57670:()=>{}}]);