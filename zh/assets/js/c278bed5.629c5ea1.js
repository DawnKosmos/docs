"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3354],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>u});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),p=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),c=p(r),u=n,k=c["".concat(o,".").concat(u)]||c[u]||s[u]||l;return r?a.createElement(k,i(i({ref:e},m),{},{components:r})):a.createElement(k,i({ref:e},m))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},96989:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"Batch Place Order",sidebar_label:"Batch Place Order"},i=void 0,d={unversionedId:"derivatives/trade/unified/order/batch-place",id:"derivatives/trade/unified/order/batch-place",title:"Batch Place Order",description:"This endpoint provides the batch order mode to place a bunch of orders.",source:"@site/docs/derivatives/trade/unified/order/batch-place.mdx",sourceDirName:"derivatives/trade/unified/order",slug:"/derivatives/trade/unified/order/batch-place",permalink:"/docs-v2/zh/docs/derivatives/trade/unified/order/batch-place",draft:!1,editUrl:"https://github.com/bybit-exchange/docs-v2/pulls/docs/derivatives/trade/unified/order/batch-place.mdx",tags:[],version:"current",frontMatter:{title:"Batch Place Order",sidebar_label:"Batch Place Order"},sidebar:"derivatives",previous:{title:"Get Order List",permalink:"/docs-v2/zh/docs/derivatives/trade/unified/order/order-list"},next:{title:"Batch Replace Order",permalink:"/docs-v2/zh/docs/derivatives/trade/unified/order/batch-replace"}},o={},p=[{value:"HTTP Request",id:"http-request",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response Parameters",id:"response-parameters",level:4}],m={toc:p};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This endpoint provides the batch order mode to place a bunch of orders."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Make sure you have sufficient funds in your account when place an order. Once an order is placed, according to the\nfunds required by the order, the funds in your account will be frozen by the corresponding amount during the life cycle\nof the order."),(0,n.kt)("li",{parentName:"ul"},"The same request can only contain orders of the same contract type, i.e., options and futures cannot be placed at the same\ntime. Only ",(0,n.kt)("inlineCode",{parentName:"li"},"Limit")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"Market")," active order is supported, the conditional order is not supported."),(0,n.kt)("li",{parentName:"ul"},"If both future and option orders are in one request, then by given the category type, only the orders whose\nsymbol ",(0,n.kt)("em",{parentName:"li"},"matches the category")," will be operated."),(0,n.kt)("li",{parentName:"ul"},"The maximum number of orders included in each request is ",(0,n.kt)("strong",{parentName:"li"},"10")," orders. The returned data list is divided into two lists.\nThe list created by the order and the created information are returned. The structure of the two lists are completely consistent."))),(0,n.kt)("h4",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/order/create-batch")),(0,n.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Products category. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"request"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Buy"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Market"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Limit"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order quantity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order price. Invalid if ",(0,n.kt)("inlineCode",{parentName:"td"},"orderType"),"=",(0,n.kt)("em",{parentName:"td"},"Market"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> iv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Implied volatility. ",(0,n.kt)("inlineCode",{parentName:"td"},"option")," ONLY. Pass the real value, e.g for 10%, 0.1 should be passed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> timeInForce"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001044"},"Time in force"),". ",(0,n.kt)("inlineCode",{parentName:"td"},"GoodTillCancel"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ImmediateOrCancel"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"FillOrKill"),", ",(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001051"},(0,n.kt)("inlineCode",{parentName:"td"},"PostOnly")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> positionIdx"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Position mode. ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),": one-way mode.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order id. A max of 36 characters. Combinations of numbers, letters (upper and lower cases), dashes, and underscores are supported.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"rule of ",(0,n.kt)("inlineCode",{parentName:"em"},"future")),":",(0,n.kt)("br",null),(0,n.kt)("li",null,"optional param"),(0,n.kt)("li",null,"The same orderLinkId can be used for both USDC PERP and USDT PERP."),(0,n.kt)("li",null,"An orderLinkId can be reused once the original order is either ",(0,n.kt)("inlineCode",{parentName:"td"},"Filled")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"Cancelled")),(0,n.kt)("em",{parentName:"td"},"rule of ",(0,n.kt)("inlineCode",{parentName:"em"},"option")),":",(0,n.kt)("br",null),(0,n.kt)("li",null,(0,n.kt)("strong",{parentName:"td"},"required")," param"),(0,n.kt)("li",null,"always unique"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> reduceOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001047"},"What is a reduce-only order?")," ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," means your position can only reduce in size if this order is triggered. ",(0,n.kt)("em",{parentName:"td"},"When reduce_only is true, take profit/stop loss cannot be set"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> closeOnTrigger"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001050"},"What is a close on trigger order?")," For a closing order. It can only reduce your position, not increase it. If the account has insufficient available balance when the closing order is triggered, then other active orders of similar contracts will be cancelled or reduced. It can be used to ensure your stop loss reduces your position regardless of current available margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> mmp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Market maker protection. ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," means this order is a market maker protection order")))),(0,n.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"result"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Products category")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> createAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order created time (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Success/error code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> msg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Success/error message")))))}s.isMDXComponent=!0}}]);