"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6068],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),o=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(r),k=n,c=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return r?a.createElement(c,l(l({ref:e},m),{},{components:r})):a.createElement(c,l({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},21463:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={title:"Risk Limit",sidebar_label:"Risk Limit",sidebar_position:9,slug:"/derivatives/public/risk-limit"},l=void 0,p={unversionedId:"v3/derivatives/rest-public/risk-limit",id:"v3/derivatives/rest-public/risk-limit",title:"Risk Limit",description:"Get risk limit",source:"@site/docs/v3/derivatives/rest-public/risk-limit.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/risk-limit",permalink:"/docs-v2/derivatives/public/risk-limit",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Risk Limit",sidebar_label:"Risk Limit",sidebar_position:9,slug:"/derivatives/public/risk-limit"},sidebar:"v3SideBar",previous:{title:"Public Trading History",permalink:"/docs-v2/derivatives/public/trade"},next:{title:"Funding Rate History",permalink:"/docs-v2/derivatives/public/funding-rate"}},s={},o=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},d=m("Tabs"),u=m("TabItem"),k={toc:o};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Get risk limit"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"What is risk limit? ",(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001164"},"Risk Limit (USDT Contract)"))),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/risk-limit/list")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,n.kt)("inlineCode",{parentName:"td"},"inverse"),". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),", but in the response category shows ",(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type. Keeps empty string ",(0,n.kt)("inlineCode",{parentName:"td"},'""')," when ",(0,n.kt)("inlineCode",{parentName:"td"},"category")," is not passed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Risk id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Position limit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> maintainMargin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Maintain margin rate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> initialMargin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial margin rate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> section"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"section array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> isLowerRisk"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1"),": true, ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),": false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> maxLeverage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Allowed max leverage")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(u,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/risk-limit/list?symbol=ETHPERP HTTP/1.1\nHost: api.bybit.com\n")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(u,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "retCode": 0,\n        "retMsg": "OK",\n        "result": {\n        "category": "",\n        "list": [\n    {\n        "id": 1,\n        "symbol": "ETHPERP",\n        "limit": "500000",\n        "maintainMargin": "0.01",\n        "initialMargin": "0.015",\n        "section": [\n        "1",\n        "2",\n        "3",\n        "5",\n        "10",\n        "25",\n        "50"\n        ],\n        "isLowestRisk": 1,\n        "maxLeverage": "66.67"\n    },\n        ...,\n\n        ]\n    },\n        "retExtInfo": {},\n        "time": 1671970615467\n    }\n')))))}c.isMDXComponent=!0}}]);