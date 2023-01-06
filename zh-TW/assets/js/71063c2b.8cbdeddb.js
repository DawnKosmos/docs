"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u67e5\u8a62\u5e33\u6236\u914d\u7f6e",sidebar_label:"\u67e5\u8a62\u5e33\u6236\u914d\u7f6e",sidebar_position:7,slug:"/derivatives/unified/usc-account-info"},o=void 0,s={unversionedId:"v3/derivatives/rest-unified/account/account-info",id:"v3/derivatives/rest-unified/account/account-info",title:"\u67e5\u8a62\u5e33\u6236\u914d\u7f6e",description:"Query the configuration under the account.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/account/account-info.mdx",sourceDirName:"v3/derivatives/rest-unified/account",slug:"/derivatives/unified/usc-account-info",permalink:"/docs-v2/zh-TW/derivatives/unified/usc-account-info",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u67e5\u8a62\u5e33\u6236\u914d\u7f6e",sidebar_label:"\u67e5\u8a62\u5e33\u6236\u914d\u7f6e",sidebar_position:7,slug:"/derivatives/unified/usc-account-info"},sidebar:"v3SideBar",previous:{title:"\u8a2d\u7f6e\u4fdd\u8b49\u91d1\u6a21\u5f0f",permalink:"/docs-v2/zh-TW/derivatives/unified/usc-margin-mode"},next:{title:"\u5275\u5efa\u59d4\u8a17\u55ae",permalink:"/docs-v2/zh-TW/derivatives/contract/place-order"}},l={},c=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=u("Tabs"),d=u("TabItem"),m={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Query the configuration under the account."),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/account/info")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"marginMode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"REGULAR_MARGIN"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"PORTFOLIO_MARGIN"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"updateTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Account data updated timestamp (ms)")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"console",label:"Console",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/account/info HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: 92f39a61cc208bedf5045879a9e063cc6bc5dace5d9fd1b091c19af38db69c0e\nX-BAPI-API-KEY: 9pXyrhxTlaVQGSaP3n\nX-BAPI-TIMESTAMP: 1672023630281\nX-BAPI-RECV-WINDOW: 5000\n")))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"response",label:"Response",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "marginMode": "REGULAR_MARGIN",\n    "updateTime": "1658215932000"\n}\n')))))}f.isMDXComponent=!0}}]);