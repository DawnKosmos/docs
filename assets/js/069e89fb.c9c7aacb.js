"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8364],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,y=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return r?a.createElement(y,o(o({ref:t},u),{},{components:r})):a.createElement(y,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={title:"Delete Master API Key",sidebar_label:"Delete Master API Key",sidebar_position:8},o=void 0,l={unversionedId:"v3/account-asset/user/rm-master-apikey",id:"v3/account-asset/user/rm-master-apikey",title:"Delete Master API Key",description:"Delete the api key of master account. Use the api key pending to be delete to call the endpoint. Use master user's api key ONLY.",source:"@site/docs/v3/account-asset/user/rm-master-apikey.mdx",sourceDirName:"v3/account-asset/user",slug:"/v3/account-asset/user/rm-master-apikey",permalink:"/docs-v2/v3/account-asset/user/rm-master-apikey",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Delete Master API Key",sidebar_label:"Delete Master API Key",sidebar_position:8},sidebar:"v3SideBar",previous:{title:"Modify Sub API Key",permalink:"/docs-v2/v3/account-asset/user/modify-sub-apikey"},next:{title:"Delete Sub API Key",permalink:"/docs-v2/v3/account-asset/user/rm-sub-apikey"}},i={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=u("Tabs"),m=u("TabItem"),d={toc:p};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Delete the api key of master account. Use the api key pending to be delete to call the endpoint. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"master user's api")," key ONLY."),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"BE CAREFUL! The API key used to call this interface will be invalid immediately.")),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/user/v3/private/delete-api")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(c,{mdxType:"Tabs"},(0,n.kt)(m,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"POST /user/v3/private/delete-api HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671180438117\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\nContent-Length: 4\n{\n}\n")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(c,{mdxType:"Tabs"},(0,n.kt)(m,{value:"js linear",label:"assets",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": null,\n    "time": 1671180438209\n}\n')))))}y.isMDXComponent=!0}}]);