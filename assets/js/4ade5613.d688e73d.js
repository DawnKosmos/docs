"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=s(n),u=a,c=k["".concat(i,".").concat(u)]||k[u]||m[u]||l;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},34224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1},o=void 0,p={unversionedId:"v5/websocket/public/orderbook",id:"v5/websocket/public/orderbook",title:"Orderbook",description:"Subscribe to the orderbook stream. Supports different depths.",source:"@site/docs/v5/websocket/public/orderbook.mdx",sourceDirName:"v5/websocket/public",slug:"/v5/websocket/public/orderbook",permalink:"/docs-v2/v5/websocket/public/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"Connect",permalink:"/docs-v2/v5/ws/connect"},next:{title:"Trade",permalink:"/docs-v2/v5/websocket/public/trade"}},i={},s=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Subscribe to the orderbook stream. Supports different depths."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Once you have subscribed successfully, you will receive a ",(0,a.kt)("inlineCode",{parentName:"li"},"snapshot"),"."),(0,a.kt)("li",{parentName:"ul"},"The WebSocket will keep pushing ",(0,a.kt)("inlineCode",{parentName:"li"},"delta")," messages every time the orderbook changes. If you receive a new ",(0,a.kt)("inlineCode",{parentName:"li"},"snapshot")," message, you will have to reset your local orderbook."),(0,a.kt)("li",{parentName:"ul"},"If there is a problem on Bybit's end, a ",(0,a.kt)("inlineCode",{parentName:"li"},"snapshot")," will be re-sent, which is guaranteed to contain the latest data."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Linear & inverse level 1 data: if 3 seconds have elapsed without a change in the orderbook, a ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshot")," message will be pushed again.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linear & inverse:"),(0,a.kt)("br",null),"\nLevel 1 data, push frequency: ",(0,a.kt)("strong",{parentName:"p"},"10ms"),(0,a.kt)("br",null),"\nLevel 50 data, push frequency: ",(0,a.kt)("strong",{parentName:"p"},"20ms"),(0,a.kt)("br",null),"\nLevel 200 data, push frequency: ",(0,a.kt)("strong",{parentName:"p"},"100ms"),(0,a.kt)("br",null),"\nLevel 500 data, push frequency: ",(0,a.kt)("strong",{parentName:"p"},"100ms"),(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spot:"),(0,a.kt)("br",null),"\nLevel 1 data, push frequency: ",(0,a.kt)("strong",{parentName:"p"},"10ms"),(0,a.kt)("br",null),"\nLevel 50 data, push frequency: ",(0,a.kt)("strong",{parentName:"p"},"20ms"),(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Option:"),(0,a.kt)("br",null),"\nLevel 25 data, push frequency: ",(0,a.kt)("strong",{parentName:"p"},"20ms"),(0,a.kt)("br",null),"\nLevel 100 data, push frequency: ",(0,a.kt)("strong",{parentName:"p"},"100ms"),(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic:"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"orderbook.{depth}.{symbol}")," e.g., orderbook.1.BTCUSDT"),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Data type. ",(0,a.kt)("inlineCode",{parentName:"td"},"snapshot"),",",(0,a.kt)("inlineCode",{parentName:"td"},"delta"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"The timestamp (ms) that the system generates the data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Bids. The element is sorted by price in descending order")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> b","[0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> b","[1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Asks. The element is sorted by price in ascending order")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> a","[0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> a","[1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"u"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},'Update ID. Is a sequence. Occasionally, you\'ll receive "u"=1, which is a snapshot data due to the restart of the service. So please overwrite your local orderbook')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"seq"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Cross sequence")))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.50.BTCUSDT",\n    "type": "snapshot",\n    "ts": 1672304484978,\n    "data": {\n        "s": "BTCUSDT",\n        "b": [\n            ...,\n            [\n                "16493.50",\n                "0.006"\n            ],\n            [\n                "16493.00",\n                "0.100"\n            ]\n        ],\n        "a": [\n            [\n                "16611.00",\n                "0.029"\n            ],\n            [\n                "16612.00",\n                "0.213"\n            ],\n            ...,\n        ],\n        "u": 18521288,\n        "seq": 7961638724\n    }\n}\n')))}m.isMDXComponent=!0}}]);