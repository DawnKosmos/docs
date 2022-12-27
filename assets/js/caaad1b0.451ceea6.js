"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5662],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(a),g=r,N=k["".concat(p,".").concat(g)]||k[g]||s[g]||i;return a?n.createElement(N,l(l({ref:e},m),{},{components:a})):n.createElement(N,l({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},97258:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>N,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Position",sidebar_label:"Position",sidebar_position:1},l=void 0,o={unversionedId:"v5/websocket/private/position",id:"v5/websocket/private/position",title:"Position",description:"Subscribe position stream to get position data change in real-time.",source:"@site/docs/v5/websocket/private/position.mdx",sourceDirName:"v5/websocket/private",slug:"/v5/websocket/private/position",permalink:"/docs-v2/v5/websocket/private/position",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Position",sidebar_label:"Position",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"ETP nav",permalink:"/docs-v2/v5/websocket/public/etp-nav"},next:{title:"Execution",permalink:"/docs-v2/v5/websocket/private/execution"}},p={},d=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Response Example",id:"response-example",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},s=m("Tabs"),k=m("TabItem"),g={toc:d};function N(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subscribe position stream to get position data change in real-time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"position.unifiedTradingAccount")),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position side. ",(0,r.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"../../enum#positionidx"},"positionIdx")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to identify positions in different position modes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> tradeMode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Trade mode. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),": cross margin, ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),": isolated margin. Always ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," under unified margin account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Entry position value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> riskId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk limit id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> riskLimitValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk limit value corresponding to riskId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> entryPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Entry price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> markPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Mark price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> autoAddMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"lark\u6ca1\u6709\u8be5\u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> leverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Leverage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> effectiveLeverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Effective leverage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position margin or balance \u542b\u7fa9\u4e00\u6a23\uff1f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position maintenance margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position initial margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> liqPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Est.liquidation price. ",(0,r.kt)("inlineCode",{parentName:"td"},'""')," for unified margin account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> bustPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Est.bankruptcy price. ",(0,r.kt)("inlineCode",{parentName:"td"},'""')," for unified margin account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> tpSlMode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Tp/Sl mode. ",(0,r.kt)("inlineCode",{parentName:"td"},"Full"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),". \u78ba\u8a8dv5\u88e1\u662f\u6578\u5b57\u9084\u662f\u5b57\u7b26\u4e32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> takeProfit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Take profit price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> stopLoss"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Stop loss price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> trailingStop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing stop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> activePrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Activated price for trailing stop. \u78ba\u8a8dv5\u662f\u5426\u9084\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unrealised profit and loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cumulative realised PnL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionStatus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> sessionAvgPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Settlement price. USDC perp ONLY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> createdTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position created timestamp (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position data updated timestamp (ms)")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(k,{value:"option",label:"option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"")))))}N.isMDXComponent=!0}}]);