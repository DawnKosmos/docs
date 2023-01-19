"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,d=m["".concat(p,".").concat(s)]||m[s]||k[s]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"V5"},l=void 0,o={unversionedId:"changelog/v5",id:"changelog/v5",title:"V5",description:"2023-01-19",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/changelog/v5.mdx",sourceDirName:"changelog",slug:"/changelog/v5",permalink:"/docs-v2/zh-TW/changelog/v5",draft:!1,tags:[],version:"current",frontMatter:{title:"V5"},sidebar:"changelogSidebar",next:{title:"\u884d\u751f\u54c1 V3",permalink:"/docs-v2/zh-TW/changelog/derivatives-v3"}},p={},u=[{value:"2023-01-19",id:"2023-01-19",level:2},{value:"REST API",id:"rest-api",level:3},{value:"WebSocket API",id:"websocket-api",level:3},{value:"2023-01-16",id:"2023-01-16",level:2},{value:"REST API",id:"rest-api-1",level:3},{value:"WebSocket API",id:"websocket-api-1",level:3},{value:"2023-01-09",id:"2023-01-09",level:2},{value:"WebSocket API",id:"websocket-api-2",level:3}],c={toc:u};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"2023-01-19"},"2023-01-19"),(0,r.kt)("h3",{id:"rest-api"},"REST API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../v5/account/set-margin-mode"},"\u8a2d\u7f6e\u4fdd\u8b49\u91d1\u6a21\u5f0f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"USDT\u5408\u7d04\u7d0d\u5165\u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../v5/position"},"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b, ",(0,r.kt)("inlineCode",{parentName:"li"},"positionIM"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"positionMM"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"leverage"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"riskLimitValue"),' \u8fd4\u56de "", ',(0,r.kt)("inlineCode",{parentName:"li"},"riskId")," \u8fd4\u56de 0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../v5/account/wallet-balance"},"\u67e5\u8a62\u9322\u5305\u9918\u984d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b, ",(0,r.kt)("inlineCode",{parentName:"li"},"totalOrderIM"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"totalPositionIM"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"totoalPositionMM"),' \u8fd4\u56de ""')))),(0,r.kt)("h3",{id:"websocket-api"},"WebSocket API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../v5/websocket/private/position"},"\u6301\u5009"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b, ",(0,r.kt)("inlineCode",{parentName:"li"},"positionIM"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"positionMM"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"leverage"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"riskLimitValue"),' \u8fd4\u56de "", ',(0,r.kt)("inlineCode",{parentName:"li"},"riskId")," \u8fd4\u56de 0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../v5/websocket/private/wallet"},"\u9322\u5305"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b, ",(0,r.kt)("inlineCode",{parentName:"li"},"totalOrderIM"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"totalPositionIM"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"totoalPositionMM"),' \u8fd4\u56de ""')))),(0,r.kt)("h2",{id:"2023-01-16"},"2023-01-16"),(0,r.kt)("h3",{id:"rest-api-1"},"REST API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../v5/market/tickers"},"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f")," ","[spot]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"usdIndexPrice")," \u5df2\u7d93\u6dfb\u52a0\u5230\u97ff\u61c9\u9ad4\u4e2d. \u8a72\u5b57\u6bb5\u8868\u793a\u70baUSD\u6307\u6578\u50f9\u683c, \u53ef\u4ee5\u70ba\u7a7a\u3002")))),(0,r.kt)("h3",{id:"websocket-api-1"},"WebSocket API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../v5/websocket/public/ticker"},"\u884c\u60c5")," ","[\u73fe\u8ca8]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"usdIndexPrice")," \u5df2\u7d93\u6dfb\u52a0\u5230\u63a8\u9001\u4e2d. \u8a72\u5b57\u6bb5\u8868\u793a\u70baUSD\u6307\u6578\u50f9\u683c, \u53ef\u4ee5\u70ba\u7a7a\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../v5/websocket/public/orderbook"},"\u6df1\u5ea6")," ","[\u6b63\u5411\u5408\u7d04\u4ee5\u53ca\u53cd\u5411\u5408\u7d04]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0500\u6a94\u7684\u63a8\u9001\uff0c\u983b\u7387\u70ba100ms")))),(0,r.kt)("h2",{id:"2023-01-09"},"2023-01-09"),(0,r.kt)("h3",{id:"websocket-api-2"},"WebSocket API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../v5/websocket/public/ticker"},"\u884c\u60c5")," ","[\u6b63\u5411\u5408\u7d04\u4ee5\u53ca\u53cd\u5411\u5408\u7d04]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nextFundingTime")," \u5f9e\u65e5\u671f ",(0,r.kt)("inlineCode",{parentName:"li"},"2023-01-05T08:00:00Z")," \u8b8a\u52d5\u70baUTC\u6642\u9593\u6233(\u6beb\u79d2) ",(0,r.kt)("inlineCode",{parentName:"li"},"1672905600000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"predicatedFundingRate")," \u5f9e\u6d88\u606f\u4e2d\u79fb\u9664")))))}k.isMDXComponent=!0}}]);