"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6071],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(a),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));a(57670);const l={title:"Get Wallet Balance",sidebar_label:"Get Wallet Balance",slug:"/spot/wallet"},o=void 0,p={unversionedId:"v3/spot/wallet",id:"v3/spot/wallet",title:"Get Wallet Balance",description:"HTTP Request",source:"@site/docs/v3/spot/wallet.mdx",sourceDirName:"v3/spot",slug:"/spot/wallet",permalink:"/docs-v2/spot/wallet",draft:!1,tags:[],version:"current",frontMatter:{title:"Get Wallet Balance",sidebar_label:"Get Wallet Balance",slug:"/spot/wallet"},sidebar:"v3SideBar",previous:{title:"Trade History",permalink:"/docs-v2/spot/trade/my-trades"},next:{title:"All Asset Info",permalink:"/docs-v2/spot/etp/asset-info"}},s={},i=[{value:"HTTP Request",id:"http-request",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response Parameters",id:"response-parameters",level:4},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=c("Tabs"),m=c("TabItem"),u={toc:i};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("code",null,"/spot/v3/private/account")),(0,n.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments")))),(0,n.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Asset")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"coinId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Asset")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Total equity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"free"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Available balance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"locked"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Reserved for orders")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(m,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request GET 'https://api-testnet.bybit.com/spot/v3/private/account' \\\n--header 'X-BAPI-SIGN: 6f5c1a9543ea9033013b4ec0a6d05a74e2d05d109c60ad464ab7f9c6e86ad0d4' \\\n--header 'X-BAPI-API-KEY: {api key}' \\\n--header 'X-BAPI-TIMESTAMP: 1659346886605' \\\n--header 'X-BAPI-RECV-WINDOW: 5000'\n")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(m,{value:"normal",label:"Normal order",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "balances": [\n            {\n                "coin": "BTC",\n                "coinId": "BTC",\n                "total": "0.20378018343",\n                "free": "0.20378018343",\n                "locked": "0"\n            },\n            {\n                "coin": "BTC3L",\n                "coinId": "BTC3L",\n                "total": "743.03560386",\n                "free": "743.03560386",\n                "locked": "0"\n            },\n            {\n                "coin": "BTC3S",\n                "coinId": "BTC3S",\n                "total": "0.999",\n                "free": "0.999",\n                "locked": "0"\n            }\n        ]\n    },\n    "retExtMap": {},\n    "retExtInfo": {},\n    "time": 1659346887407\n}\n')))))}f.isMDXComponent=!0},57670:()=>{}}]);