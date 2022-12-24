"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=s(r),c=n,u=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return r?a.createElement(u,o(o({ref:t},d),{},{components:r})):a.createElement(u,o({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},34224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1},o=void 0,i={unversionedId:"v5/websocket/public/orderbook",id:"v5/websocket/public/orderbook",title:"Orderbook",description:"Subscribe the different depths orderbook stream.",source:"@site/docs/v5/websocket/public/orderbook.mdx",sourceDirName:"v5/websocket/public",slug:"/v5/websocket/public/orderbook",permalink:"/docs-v2/zh-TW/v5/websocket/public/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"Account info",permalink:"/docs-v2/zh-TW/v5/websocket/private/account-info"},next:{title:"Public trade",permalink:"/docs-v2/zh-TW/v5/websocket/public/trade"}},p={},s=[{value:"Response Parameters",id:"response-parameters",level:3}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Subscribe the different depths orderbook stream."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Once subscribe successfully, you will receive a snapshot."),(0,n.kt)("li",{parentName:"ul"},"Websocket will keep pushing delta message when orderbook is changed. If you receive a new snapshot data, it's necessary to reset your local orderbook."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"snapshot"),"=snapshot orderbook, ",(0,n.kt)("inlineCode",{parentName:"li"},"delta"),"=delta orderbook"),(0,n.kt)("li",{parentName:"ul"},"If there is a problem in bybit end, it will re-send a snapshot, which is promised the latest and accurate."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"linear & inverse:"),(0,n.kt)("br",null),"\n1 level data, push frequency: ",(0,n.kt)("strong",{parentName:"p"},"10ms"),(0,n.kt)("br",null),"\n50 level data, push frequency: ",(0,n.kt)("strong",{parentName:"p"},"100ms"),(0,n.kt)("br",null),"\n200 level data, push frequency: ",(0,n.kt)("strong",{parentName:"p"},"100ms"),(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Spot:"),(0,n.kt)("br",null),"\n1 level data, push frequency: ",(0,n.kt)("strong",{parentName:"p"},"10ms"),(0,n.kt)("br",null),"\n50 level data, push frequency: ",(0,n.kt)("strong",{parentName:"p"},"100ms"),(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Option:"),(0,n.kt)("br",null),"\n25 level data, push frequency: ",(0,n.kt)("strong",{parentName:"p"},"20ms"),(0,n.kt)("br",null),"\n100 level data, push frequency: ",(0,n.kt)("strong",{parentName:"p"},"100ms"),(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Topic:"),(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"orderbook.{depth}.{symbol}")," e.g., orderbook.1.BTCUSDT"),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Data type. ",(0,n.kt)("inlineCode",{parentName:"td"},"snapshot"),",",(0,n.kt)("inlineCode",{parentName:"td"},"delta"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The timestamp (ms) that system generates the data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Bids. The element is sort by price in descending order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> b","[0]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> b","[1]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Asks. The element is sort by price in ascending order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> a","[0]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> a","[1]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"u"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},'Update id, is always in sequence. Occasionally, you\'ll receive "u"=1, which is a snapshot data due to the restart of the service. So please overwrite the locally saved orderbook')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"seq"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Cross sequence. Internal used")))))}m.isMDXComponent=!0}}]);