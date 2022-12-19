"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9127],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,w=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(w,i(i({ref:t},c),{},{components:a})):r.createElement(w,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>w,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Cancel withdrawal",sidebar_label:"Cancel withdrawal",sidebar_position:7},i=void 0,o={unversionedId:"v3/account-asset/withdraw-deposit/cancel-withdraw",id:"v3/account-asset/withdraw-deposit/cancel-withdraw",title:"Cancel withdrawal",description:"Cancel withdrawal",source:"@site/docs/v3/account-asset/withdraw-deposit/cancel-withdraw.mdx",sourceDirName:"v3/account-asset/withdraw-deposit",slug:"/v3/account-asset/withdraw-deposit/cancel-withdraw",permalink:"/docs-v2/v3/account-asset/withdraw-deposit/cancel-withdraw",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Cancel withdrawal",sidebar_label:"Cancel withdrawal",sidebar_position:7},sidebar:"v3SideBar",previous:{title:"Withdraw",permalink:"/docs-v2/v3/account-asset/withdraw-deposit/withdraw"},next:{title:"Query Master Acct Deposit Address Information",permalink:"/docs-v2/v3/account-asset/withdraw-deposit/master-deposit-addr"}},s={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),m={toc:p};function w(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cancel withdrawal"),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/withdraw/cancel")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,n.kt)("td",{parentName:"tr",align:null},"withdrawal id. (withdraw request ID in Response Parameters of Withdrawal endpoint)")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"cancel application result: ",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"1")," SUCCESS"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"0")," FAIL"))))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(u,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'POST /asset/v3/private/withdraw/cancel HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671173665186\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\nContent-Length: 24\n\n{\n    "id": 1234567890\n}\n')))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(u,{value:"js linear",label:"assets",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "retCode": 0,\n    "retMsg": "success",\n    "result": {\n    "status": 1\n  },\n  "retExtInfo": null,\n    "time": 1671173665252\n}\n')))))}w.isMDXComponent=!0}}]);