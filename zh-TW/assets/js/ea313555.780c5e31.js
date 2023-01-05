"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},50510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions",slug:"/faq"},i=void 0,o={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"Where are Bybit's servers located?",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/docs-v2/zh-TW/faq",draft:!1,tags:[],version:"current",frontMatter:{title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions",slug:"/faq"}},s={},c=[{value:"Where are Bybit&#39;s servers located?",id:"where-are-bybits-servers-located",level:3},{value:"<code>reduceOnly</code> and <code>closeOnTrigger</code> - what&#39;s the difference?",id:"reduceonly-and-closeontrigger---whats-the-difference",level:3},{value:"Why aren&#39;t all my orders showing on the website?",id:"why-arent-all-my-orders-showing-on-the-website",level:3},{value:"Calculating order size based on available wallet balance",id:"calculating-order-size-based-on-available-wallet-balance",level:3},{value:"Can I exchange assets with the API?",id:"can-i-exchange-assets-with-the-api",level:3},{value:"How do I get funds for testnet?",id:"how-do-i-get-funds-for-testnet",level:3},{value:"Why are my Closed PNL prices inaccurate?",id:"why-are-my-closed-pnl-prices-inaccurate",level:3},{value:"Why are values returned to too many decimal places? (float precision issue)",id:"why-are-values-returned-to-too-many-decimal-places-float-precision-issue",level:3},{value:"How can I ensure I am using up-to-date data?",id:"how-can-i-ensure-i-am-using-up-to-date-data",level:3},{value:"What is the difference between turnover and volume?",id:"what-is-the-difference-between-turnover-and-volume",level:3}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"where-are-bybits-servers-located"},"Where are Bybit's servers located?"),(0,r.kt)("p",null,"AWS Singapore, ",(0,r.kt)("a",{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones"},"Availability Zone")," ID apse1-az3."),(0,r.kt)("h3",{id:"reduceonly-and-closeontrigger---whats-the-difference"},(0,r.kt)("inlineCode",{parentName:"h3"},"reduceOnly")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"closeOnTrigger")," - what's the difference?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To close your position, submit an order and specify ",(0,r.kt)("inlineCode",{parentName:"li"},"reduceOnly")," to true. ",(0,r.kt)("inlineCode",{parentName:"li"},"closeOnTrigger")," is not strictly applicable here, but you can also set it to true if it's required."),(0,r.kt)("li",{parentName:"ul"},"reduceOnly is the one that really matters for closing position, and we will improve the interface in the future."),(0,r.kt)("li",{parentName:"ul"},"Be careful when you specify closeOnTrigger to true as it could cause conflict when reduceOnly is false.")),(0,r.kt)("h3",{id:"why-arent-all-my-orders-showing-on-the-website"},"Why aren't all my orders showing on the website?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users who have bots which place large numbers of laddered orders will be restricted by the frontend interface, which only shows a maximum of 50 orders on-screen."),(0,r.kt)("li",{parentName:"ul"},"Don't worry, your orders are still in the system and can be queried by the API, but the frontend cannot show more than 50.")),(0,r.kt)("h3",{id:"calculating-order-size-based-on-available-wallet-balance"},"Calculating order size based on available wallet balance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"price * availableBalance * leverage * perc * (1 - (0.0006 * 2))")),(0,r.kt)("li",{parentName:"ul"},"Unfortunately this is not a perfectly accurate formula; the real calculation is complex and may be published in the docs at a later date.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"price")," - last price (or your entry price) - can be found with the Latest Symbol Info endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"availableBalance")," - can be found with the My Position endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leverage")," - up to the respective maximum leverage for the market and your risk limit (eg 2, 10, 50)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"perc")," - 0.1 for 10%, 0.25 for 25%, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 - (0.0006 * 2)")," - used to calculate the maximum order cost (always assumes entry & exit orders use taker fee regardless actual fee).")))),(0,r.kt)("h3",{id:"can-i-exchange-assets-with-the-api"},"Can I exchange assets with the API?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is no endpoint to exchange assets. This can only be done on the ",(0,r.kt)("a",{href:"https://www.bybit.com/app/assets/assets-exchange"},"website"),"."),(0,r.kt)("li",{parentName:"ul"},"However, it is possible to access your Asset Exchange Records with the API.")),(0,r.kt)("h3",{id:"how-do-i-get-funds-for-testnet"},"How do I get funds for testnet?"),(0,r.kt)("p",null,"To get testnet funds, just go to master account asset page to request."),(0,r.kt)("h3",{id:"why-are-my-closed-pnl-prices-inaccurate"},"Why are my Closed PNL prices inaccurate?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"entryPrice")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"exitPrice")," returned by Closed PNL endpoints are not the actual execution prices of the orders."),(0,r.kt)("li",{parentName:"ul"},"It is based on the total costs of the order\n(whether or not the position was only opened/closed by one order executed at one price - it is more complicated if multiple orders opened/closed a position.)"),(0,r.kt)("li",{parentName:"ul"},"For instance, the entry_price and exit_price reported by this endpoint are influenced by the fee paid/received on the orders.")),(0,r.kt)("h3",{id:"why-are-values-returned-to-too-many-decimal-places-float-precision-issue"},"Why are values returned to too many decimal places? (float precision issue)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example, you received 11.969999 but you expected 11.97."),(0,r.kt)("li",{parentName:"ul"},"Some values are returned to too many decimal places, or a fraction too high or low, due to a float precision problem."),(0,r.kt)("li",{parentName:"ul"},"For now, we recommend rounding the received value to the correct decimal place. This can be done with reference to the Query Symbol endpoint."),(0,r.kt)("li",{parentName:"ul"},"This issue will be has been fixed in the latest major version of the API: v3. You can see the documentation for the v3 websocket here.")),(0,r.kt)("h3",{id:"how-can-i-ensure-i-am-using-up-to-date-data"},"How can I ensure I am using up-to-date data?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is possible, although unlikely, that the REST API or (even less likely) the websocket could return/push old data."),(0,r.kt)("li",{parentName:"ul"},"For the greatest level of data resilience, we recommend clients to:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"firstly, rely on the websocket, which will not only ensure you get the latest data as fast as possible, but will also ensure you get complete data"),(0,r.kt)("li",{parentName:"ul"},"secondly, query the REST API to fill in any discrepencies in data - or between websocket disconnections."))),(0,r.kt)("li",{parentName:"ul"},"The best practice is to save all of this data locally in your own database or cache."),(0,r.kt)("li",{parentName:"ul"},"This frees up your rate limits for other requests and also ensures a level of redundancy against the exchange in case of data delays.")),(0,r.kt)("h3",{id:"what-is-the-difference-between-turnover-and-volume"},"What is the difference between turnover and volume?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Turnover"),": is in the opposite currency to the quantity's currency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Volume"),": is in the same currency as the quantity's currency")))}d.isMDXComponent=!0}}]);