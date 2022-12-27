"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return r?a.createElement(k,l(l({ref:t},d),{},{components:r})):a.createElement(k,l({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"Liquidation",sidebar_label:"Liquidation",sidebar_position:5,slug:"/derivatives/ws-public/liquidation"},l=void 0,o={unversionedId:"v3/derivatives/wss-public/liquidation",id:"v3/derivatives/wss-public/liquidation",title:"Liquidation",description:"cover: USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future",source:"@site/docs/v3/derivatives/wss-public/liquidation.mdx",sourceDirName:"v3/derivatives/wss-public",slug:"/derivatives/ws-public/liquidation",permalink:"/docs-v2/derivatives/ws-public/liquidation",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Liquidation",sidebar_label:"Liquidation",sidebar_position:5,slug:"/derivatives/ws-public/liquidation"},sidebar:"v3SideBar",previous:{title:"Kline",permalink:"/docs-v2/derivatives/ws-public/kline"},next:{title:"Position",permalink:"/docs-v2/derivatives/ws-unified/position"}},p={},s=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("Tabs"),m=d("TabItem"),c={toc:s};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"cover: USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future")),(0,n.kt)("p",null,"Get recent liquidation orders in Bybit."),(0,n.kt)("p",null,"Push frequency: ",(0,n.kt)("strong",{parentName:"p"},"real-time")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Topic:"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"liquidation.{symbol}")),(0,n.kt)("p",null,"@\u786e\u8ba4\u7ed3\u6784\u4f53"),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message type. ",(0,n.kt)("inlineCode",{parentName:"td"},"snaptshot"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"The timestamp (ms) that system generates the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Data updated timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> positionSide"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Position side. ",(0,n.kt)("inlineCode",{parentName:"td"},"long"),",",(0,n.kt)("inlineCode",{parentName:"td"},"short"),". Used to compare with ",(0,n.kt)("inlineCode",{parentName:"td"},"side"),", e.g., if positionSide=long, side=Sell, then it means long order is liquidated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Filled size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Filled price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> execID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transaction id")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(m,{value:"console",label:"JSON subscription message",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "op": "subscribe",\n    "args": [\n    "liquidation.BTCPERP"\n    ],\n    "req_id": "test" // optional\n}\n')))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(m,{value:"trade-linear",label:"trade-linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"")))))}k.isMDXComponent=!0}}]);