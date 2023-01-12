"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,s=m["".concat(p,".").concat(k)]||m[k]||d[k]||a;return n?i.createElement(s,l(l({ref:t},c),{},{components:n})):i.createElement(s,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={title:"Enums Definitions",sidebar_label:"Enums Definitions",slug:"/copy-trade/enum"},l=void 0,o={unversionedId:"v3/copy-trade/enum",id:"v3/copy-trade/enum",title:"Enums Definitions",description:"accountType",source:"@site/docs/v3/copy-trade/enum.mdx",sourceDirName:"v3/copy-trade",slug:"/copy-trade/enum",permalink:"/docs-v2/copy-trade/enum",draft:!1,tags:[],version:"current",frontMatter:{title:"Enums Definitions",sidebar_label:"Enums Definitions",slug:"/copy-trade/enum"},sidebar:"v3SideBar",previous:{title:"Wallet",permalink:"/docs-v2/copy-trade/ws-private/wallet"},next:{title:"Error Code",permalink:"/docs-v2/copy-trade/error"}},p={},u=[{value:"accountType",id:"accounttype",level:3},{value:"symbol",id:"symbol",level:3},{value:"orderType",id:"ordertype",level:3},{value:"triggerBy",id:"triggerby",level:3},{value:"copyTradeOrderType",id:"copytradeordertype",level:3},{value:"timeInForce",id:"timeinforce",level:3},{value:"positionIdx",id:"positionidx",level:3},{value:"interval",id:"interval",level:3},{value:"tickDirection",id:"tickdirection",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"accounttype"},"accountType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNIFIED"),"\u2003","Unified account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONTRACT"),"\u2003","Future account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"COPYTRADING"),"\u2003","CopyTrading account")),(0,r.kt)("h3",{id:"symbol"},"symbol"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CopyTrading supports USDT Perpetual only")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BTCUSDT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ETHUSDT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SOLUSDT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"..."))),(0,r.kt)("h3",{id:"ordertype"},"orderType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Market")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Limit"))),(0,r.kt)("h3",{id:"triggerby"},"triggerBy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LastPrice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IndexPrice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MarkPrice"))),(0,r.kt)("h3",{id:"copytradeordertype"},"copyTradeOrderType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ACTIVE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TPSLCONDITIONAL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENFILLED"))),(0,r.kt)("h3",{id:"timeinforce"},"timeInForce"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GoodTillCancel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ImmediateOrCancel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FillOrKill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PostOnly"))),(0,r.kt)("h3",{id:"positionidx"},"positionIdx"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),"\u2003","one-way mode"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","Buy side Hedge mode"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","Sell side Hedge mode")),(0,r.kt)("h3",{id:"interval"},"interval"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," ",(0,r.kt)("inlineCode",{parentName:"li"},"5")," ",(0,r.kt)("inlineCode",{parentName:"li"},"15")," ",(0,r.kt)("inlineCode",{parentName:"li"},"30")," ",(0,r.kt)("inlineCode",{parentName:"li"},"60")," ",(0,r.kt)("inlineCode",{parentName:"li"},"120")," ",(0,r.kt)("inlineCode",{parentName:"li"},"240")," ",(0,r.kt)("inlineCode",{parentName:"li"},"360")," ",(0,r.kt)("inlineCode",{parentName:"li"},"720"),"\u2003","minute"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"D"),"\u2003","day"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"W"),"\u2003","week"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"M"),"\u2003","month")),(0,r.kt)("h3",{id:"tickdirection"},"tickDirection"),(0,r.kt)("p",null,"It indicates price fluctuation relative to the last trade."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PlusTick"),"\u2003","price rise"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZeroPlusTick"),"\u2003","trade occurs at the same price as the previous trade, which occurred at a price higher than that for the trade preceding it"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MinusTick"),"\u2003","price drop"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZeroMinusTick"),"\u2003","trade occurs at the same price as the previous trade, which occurred at a price lower than that for the trade preceding it")))}d.isMDXComponent=!0}}]);