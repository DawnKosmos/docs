"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2230],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),s=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=s(n),k=a,m=p["".concat(d,".").concat(k)]||p[k]||c[k]||l;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61592:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"V5 Upgrade Guide",sidebar_label:"V5 Upgrade Guide"},i=void 0,o={unversionedId:"v5/upgrade-guide",id:"v5/upgrade-guide",title:"V5 Upgrade Guide",description:"Overview",source:"@site/docs/v5/upgrade-guide.mdx",sourceDirName:"v5",slug:"/v5/upgrade-guide",permalink:"/docs-v2/v5/upgrade-guide",draft:!1,tags:[],version:"current",frontMatter:{title:"V5 Upgrade Guide",sidebar_label:"V5 Upgrade Guide"},sidebar:"v5SideBar",previous:{title:"Introduction",permalink:"/docs-v2/v5/intro"},next:{title:"Get Kline",permalink:"/docs-v2/v5/market/kline"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Current API Coverage",id:"current-api-coverage",level:2},{value:"Key Upgrades",id:"key-upgrades",level:2},{value:"Product Lines Alignment",id:"product-lines-alignment",level:3},{value:"Ease of Upgrade",id:"ease-of-upgrade",level:3},{value:"Enhance Capital Efficiency",id:"enhance-capital-efficiency",level:3},{value:"Unified Account Borrowing",id:"unified-account-borrowing",level:3},{value:"Paradigm Block Trading",id:"paradigm-block-trading",level:3},{value:"Portfolio Margin Mode",id:"portfolio-margin-mode",level:3},{value:"API Interface Naming Standard",id:"api-interface-naming-standard",level:3},{value:"API Rate Limit Adjustment",id:"api-rate-limit-adjustment",level:3},{value:"No Change in Latency",id:"no-change-in-latency",level:3},{value:"Single Placement Interface",id:"single-placement-interface",level:3},{value:"Addition of Real-Time Order Query",id:"addition-of-real-time-order-query",level:3},{value:"Cancellation of Orders by Settlement Currency",id:"cancellation-of-orders-by-settlement-currency",level:3},{value:"Addition of Historical Funding Rate Query",id:"addition-of-historical-funding-rate-query",level:3},{value:"Addition of Insurance Fund Interface",id:"addition-of-insurance-fund-interface",level:3},{value:"Additional WebSocket Data",id:"additional-websocket-data",level:3},{value:"Increase in Post Only Orders",id:"increase-in-post-only-orders",level:3},{value:"Uniform and Precise Data",id:"uniform-and-precise-data",level:3},{value:"Readability Improvements to Open API Documentation",id:"readability-improvements-to-open-api-documentation",level:3},{value:"V5 and V3 Interface Mapping List",id:"v5-and-v3-interface-mapping-list",level:2}],u={toc:s};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Open API V5 brings uniformity and efficiency to Bybit's product lines, unifying Spot, Derivatives, and Options in one\nset of specifications. V5 currently only supports unified account modes, and will soon be able to support non-unified\naccount modes."),(0,a.kt)("h2",{id:"current-api-coverage"},"Current API Coverage"),(0,a.kt)("span",{class:"blocky_table"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"}),(0,a.kt)("th",{parentName:"tr",align:"center"},"Spot V3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Futures V2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Unified V3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Contract V3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"All-In-One V5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Spot")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Normal Mode)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Unified Mode)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"USDT Contract")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Normal Mode)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Unified Mode)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Normal Mode)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Unified Mode)",(0,a.kt)("br",null),"(To support Normal Mode soon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"USDC Contract")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Unified Mode)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Unified Mode)",(0,a.kt)("br",null),"(To support Normal Mode soon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Inverse Contract")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Normal Mode)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Normal Mode)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02",(0,a.kt)("br",null),"(To support Normal Mode soon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Option")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Unified Mode)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud800\udd02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713",(0,a.kt)("br",null),"(Unified Mode)",(0,a.kt)("br",null),"(To support Normal Mode soon)"))))),(0,a.kt)("h2",{id:"key-upgrades"},"Key Upgrades"),(0,a.kt)("h3",{id:"product-lines-alignment"},"Product Lines Alignment"),(0,a.kt)("p",null,"Previously, Spot V1/V3, Futures V2 and USDC Options V1 each had their own set of APIs which only covered a portion of\nBybit\u2019s products. V5 unifies the APIs of various trading products into one, providing users the capability to trade Spot,\nDerivatives and Options contracts with a single API by distinguishing transactions through different order parameters.\nConsequently, there is no need to switch between multiple interfaces when building different products \u2013 regardless of\ntasks such as order management or querying wallet data \u2013 as the same API can be used to request and return results."),(0,a.kt)("p",null,"The global dictionary in V5 is uniquely defined to avoid scenarios where different terms are used for the same purposes,\nor where a single term has multiple references. This simplifies the  troubleshooting process for users."),(0,a.kt)("p",null,"For example, when creating an order with ",(0,a.kt)("inlineCode",{parentName:"p"},"POST V5/order/create"),", users can specify ",(0,a.kt)("inlineCode",{parentName:"p"},"category=spot/linear/option")," to create\nmultiple orders across different products."),(0,a.kt)("h3",{id:"ease-of-upgrade"},"Ease of Upgrade"),(0,a.kt)("p",null,"API V5 is built upon V3, so minimal changes are required to upgrade. If you are already connected via Contract V3 or\nUnified V3, simply change the URL to the corresponding one of V5 and adjust some interface fields. Please refer to the\n",(0,a.kt)("a",{parentName:"p",href:"upgrade-guide#v5-and-v3-interface-mapping-list"},"interface mapping list")," below for more details about specific interfaces."),(0,a.kt)("h3",{id:"enhance-capital-efficiency"},"Enhance Capital Efficiency"),(0,a.kt)("p",null,"V5 provides users the ability to upgrade accounts to a unified account, allowing for sharing and cross-utilization of\nfunds across Spot, USDT Perpetual, USDC Perpetual and Options contracts. Users are also able to offset profit and losses\nacross different positions, thus further enhancing capital efficiency."),(0,a.kt)("h3",{id:"unified-account-borrowing"},"Unified Account Borrowing"),(0,a.kt)("p",null,"API V5 supports borrowing across a unified account mode. Users can pledge multiple assets as collateral to obtain margin\nfor trading across different products."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For example"),": Trader Alice opens a USDT-settled BTCUSDT contract position while holding only BTC assets. If a\nfloating loss is incurred, a debt will be recorded and interest will be charged hourly."),(0,a.kt)("h3",{id:"paradigm-block-trading"},"Paradigm Block Trading"),(0,a.kt)("p",null,"Unified accounts now support block trading via Paradigm. Users can utilize funds across different products."),(0,a.kt)("h3",{id:"portfolio-margin-mode"},"Portfolio Margin Mode"),(0,a.kt)("p",null,"Unified Accounts now support combined margin between USDC Perpetual and Options contracts, and will soon expand to\ninclude USDT Perpetual contracts."),(0,a.kt)("h3",{id:"api-interface-naming-standard"},"API Interface Naming Standard"),(0,a.kt)("p",null,"API V5 offers clearer path definitions for improved clarity and reduced ambiguity. The new version divides the API\npath into market data, order management, position management, account management, asset management, and more modules."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"{host}/{version}/{product}/{module}",(0,a.kt)("br",null),"\nExample: api.bybit.com/v5/market/recent-trade")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Address Segment"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v5/market/"),(0,a.kt)("td",{parentName:"tr",align:null},"Candlestick, orderbook, ticker, platform transaction data, underlying financial rules, risk control rules")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v5/order/"),(0,a.kt)("td",{parentName:"tr",align:null},"Order management")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v5/position/"),(0,a.kt)("td",{parentName:"tr",align:null},"Position management")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v5/account/"),(0,a.kt)("td",{parentName:"tr",align:null},"Single account operations only \u2013 unified funding account, rates, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v5/asset/"),(0,a.kt)("td",{parentName:"tr",align:null},"Operations across multiple accounts \u2013 asset management, fund management, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v5/spot-lever-token/"),(0,a.kt)("td",{parentName:"tr",align:null},"Obtain quotes from Leveraged Tokens on Spot, and to exercise purchase and redeem functions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v5/spot-margin-trade/"),(0,a.kt)("td",{parentName:"tr",align:null},"Manage Margin Trading on Spot")))),(0,a.kt)("h3",{id:"api-rate-limit-adjustment"},"API Rate Limit Adjustment"),(0,a.kt)("p",null,"The rate limit has been adjusted in V5 to allocate a per-second rate limit quota for each User ID across products, to\nensure smooth transactions and improve user experience."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"V2 Rate Limit:")," \u201cUser ID + Symbol + API Endpoint\u201d limits the frequency of API requests by a fixed number of counts per minute"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"V3 Rate Limit:")," \u201cUser ID + API Endpoint\u201d limits the frequency of API requests by a fixed number of counts per second"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"V5 Rate Limit:")," \u201cUser ID + API Endpoint\u201d limits the frequency of API requests by a fixed number of counts per second",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For example:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"In V2 Futures,"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Trader Bob sets the order frequency of BTCUSDT at 400/m, ETHUSDT at 200/m, and other symbols at 100/m"),(0,a.kt)("li",{parentName:"ul"},"If he places 200 order requests for BTCUSDT, his remaining limit in that one minute is 200 order requests for\nBTCUSDT, 200 for ETHUSDT and 100 for other symbols"),(0,a.kt)("li",{parentName:"ul"},"If 100 ETHUSDT order requests are sent in at the same time, the remaining credit in that one minute is 200 order\nrequests for BTCUSDT, 100 for ETHUSDT, and 100 for other symbols"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"In V3/V5,"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The default limit is 10/s for all users"),(0,a.kt)("li",{parentName:"ul"},"Trader Charlie increases his order frequency to 100/s (representing a maximum of 100 requests across all\ninterfaces for a single UID)"),(0,a.kt)("li",{parentName:"ul"},"He places 50 order requests for BTCUSDT in one second, which leaves a remaining limit of 50 order requests in that second"),(0,a.kt)("li",{parentName:"ul"},"The frequency limit then resets to 100/s during the next second")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Query-based APIs ",(0,a.kt)("strong",{parentName:"p"},"CANNOT")," increase in frequency and are limited to 10 requests per second (WebSocket is recommended for\ndata reception).")),(0,a.kt)("h3",{id:"no-change-in-latency"},"No Change in Latency"),(0,a.kt)("p",null,"Implemented since Jan 1, 2023, API V5 currently supports unified account trading with the same latencies as unified\nmargin trading. The upcoming implementation for non-unified account trading will feature the same latency as API V3."),(0,a.kt)("h3",{id:"single-placement-interface"},"Single Placement Interface"),(0,a.kt)("p",null,"With V2, submission of normal and conditional orders required two different APIs. API V3 and V5 merge orders via\ndifferent submission parameters on one single placement interface. This eliminates the need for users to request\nmultiple orders using different interfaces."),(0,a.kt)("h3",{id:"addition-of-real-time-order-query"},"Addition of Real-Time Order Query"),(0,a.kt)("p",null,"With V5, users can request the last 500 orders in real-time, as compared to API V3 which only supports real-time queries\nof unfilled orders."),(0,a.kt)("p",null,"The status of recently filled orders can also be queried in real-time, reducing the delay compared to querying through order\nor history interfaces."),(0,a.kt)("h3",{id:"cancellation-of-orders-by-settlement-currency"},"Cancellation of Orders by Settlement Currency"),(0,a.kt)("p",null,"Users can cancel all Derivatives orders settled by the same currency with ",(0,a.kt)("inlineCode",{parentName:"p"},"settleCoin"),"."),(0,a.kt)("h3",{id:"addition-of-historical-funding-rate-query"},"Addition of Historical Funding Rate Query"),(0,a.kt)("p",null,"While API V2 only supports the query of funding rates from the previous cycle, API V3 and V5 support the query of funding\nrate changes, which allows users to conduct historical funding backtests."),(0,a.kt)("h3",{id:"addition-of-insurance-fund-interface"},"Addition of Insurance Fund Interface"),(0,a.kt)("p",null,"This interface addition allows for queries of the insurance pool, which users can use to check for any insurance fund\nupdates on the Bybit platform."),(0,a.kt)("h3",{id:"additional-websocket-data"},"Additional WebSocket Data"),(0,a.kt)("p",null,"More WebSocket data has been added to provide a range of orderbook data at different frequencies and ",(0,a.kt)("strong",{parentName:"p"},"depths"),". Push\nfrequency has been increased from 25 to 50. Please refer to the WebSocket interface description for more details."),(0,a.kt)("p",null,"The updated orderbook now checks for data continuity to ensure that local orderbook data is correct. A ",(0,a.kt)("inlineCode",{parentName:"p"},"Seq (sequence)"),"\nfield has also been added to help determine the sequence of pulled data, so users can respond efficiently to market changes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Product"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Depth 1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Depth 25"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Depth 50"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Depth 100"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Depth 200"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Spot")),(0,a.kt)("td",{parentName:"tr",align:"center"},"10ms"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"20ms"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Derivatives")),(0,a.kt)("td",{parentName:"tr",align:"center"},"10ms"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"20ms"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Option")),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"20ms"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100ms"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,a.kt)("h3",{id:"increase-in-post-only-orders"},"Increase in Post Only Orders"),(0,a.kt)("p",null,"Under Derivatives, the submission of Post Only orders allows users to place more orders for each symbol \u2013 typically up\nto five times the usual number. Users can use the ",(0,a.kt)("a",{parentName:"p",href:"../v5/market/instrument"},"instrument-info")," endpoint to obtain the maximum number of\norders that can be traded for each symbol."),(0,a.kt)("h3",{id:"uniform-and-precise-data"},"Uniform and Precise Data"),(0,a.kt)("p",null,"Previous APIs returned data as E2 and E8. API V3 and V5 return data as actual values, eliminating the need for\nusers to implement conversion logic."),(0,a.kt)("h3",{id:"readability-improvements-to-open-api-documentation"},"Readability Improvements to Open API Documentation"),(0,a.kt)("p",null,"The Open API documentation has been revised and proofread to improve clarity and reduce confusion. Any parts of the\nprevious documentation that were not clear have been revised to provide better explanations."),(0,a.kt)("h2",{id:"v5-and-v3-interface-mapping-list"},"V5 and V3 Interface Mapping List"),(0,a.kt)("span",{class:"blocky_table"},(0,a.kt)("table",{border:"0.8"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"Module"),(0,a.kt)("th",null,"V5 Endpoint"),(0,a.kt)("th",null,"V3 Endpoint")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"22"},"Market"),(0,a.kt)("td",{rowSpan:"2"},"/v5/market/kline"),(0,a.kt)("td",null,"/derivatives/v3/public/kline")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/spot/v3/public/quote/kline")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/market/mark-price-kline"),(0,a.kt)("td",null,"/derivatives/v3/public/mark-price-kline")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/market/index-price-kline"),(0,a.kt)("td",null,"/derivatives/v3/public/index-price-kline")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/market/premium-index-price-kline"),(0,a.kt)("td",null,"/derivatives/v3/public/premium-index-price-kline")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/market/orderbook"),(0,a.kt)("td",null,"/derivatives/v3/public/order-book/L2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/spot/v3/public/quote/depth")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"4"},"/v5/market/tickers"),(0,a.kt)("td",null,"/derivatives/v3/public/tickers")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/spot/v3/public/quote/ticker/24hr")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/spot/v3/public/quote/ticker/price")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/spot/v3/public/quote/ticker/bookTicker")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/market/funding/history"),(0,a.kt)("td",null,"/derivatives/v3/public/funding/history-funding-rate")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/market/recent-trade"),(0,a.kt)("td",null,"/derivatives/v3/public/recent-trade")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/spot/v3/public/quote/trades")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/market/open-interest"),(0,a.kt)("td",null,"/derivatives/v3/public/open-interest")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/market/historical-volatility"),(0,a.kt)("td",null,"/derivatives/v3/public/historical-volatility")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/market/insurance"),(0,a.kt)("td",null,"/derivatives/v3/public/insurance")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"3"},"/v5/market/instruments-info"),(0,a.kt)("td",null,"/derivatives/v3/public/instruments-info")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/spot/v3/public/infos")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/spot/v3/public/symbols")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/market/risk-limit"),(0,a.kt)("td",null,"/derivatives/v3/public/risk-limit/list")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/market/delivery-price"),(0,a.kt)("td",null,"/derivatives/v3/public/delivery-price")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"16"},"Order"),(0,a.kt)("td",{rowSpan:"2"},"/v5/order/create"),(0,a.kt)("td",null,"/unified/v3/private/order/create")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/order/create")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/order/amend"),(0,a.kt)("td",null,"/unified/v3/private/order/replace")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/order/replace")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/order/cancel"),(0,a.kt)("td",null,"/unified/v3/private/order/cancel")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/order/cancel")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/order/realtime"),(0,a.kt)("td",null,"/unified/v3/private/order/unfilled-orders")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/order/unfilled-orders")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/order/cancel-all"),(0,a.kt)("td",null,"/unified/v3/private/order/cancel-all")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/order/cancel-all")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/order/history"),(0,a.kt)("td",null,"/unified/v3/private/order/list")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/order/list")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/order/create-batch"),(0,a.kt)("td",null,"/unified/v3/private/order/create-batch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/order/amend-batch"),(0,a.kt)("td",null,"/unified/v3/private/order/replace-batch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/order/cancel-batch"),(0,a.kt)("td",null,"/unified/v3/private/order/cancel-batch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/order/spot-borrow-check"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"12"},"Position"),(0,a.kt)("td",{rowSpan:"2"},"/v5/position/list"),(0,a.kt)("td",null,"/unified/v3/private/position/list")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/position/list")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/position/set-leverage"),(0,a.kt)("td",null,"/unified/v3/private/position/set-leverage")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/position/set-leverage")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/position/set-risk-limit"),(0,a.kt)("td",null,"/unified/v3/private/position/set-risk-limit")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/position/set-risk-limit")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"/v5/position/trading-stop"),(0,a.kt)("td",null,"/unified/v3/private/position/trading-stop")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/position/trading-stop")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/position/switch-isolated"),(0,a.kt)("td",null,"/contract/v3/private/position/switch-isolated")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/position/switch-mode"),(0,a.kt)("td",null,"/contract/v3/private/position/switch-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/position/set-auto-add-margin"),(0,a.kt)("td",null,"/contract/v3/private/position/set-auto-add-margin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/position/closed-pnl"),(0,a.kt)("td",null,"/contract/v3/position/closed-pnl")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"Execution"),(0,a.kt)("td",{rowSpan:"2"},"/v5/execution/list"),(0,a.kt)("td",null,"/unified/v3/private/execution/list")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/execution/list")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"9"},"Account"),(0,a.kt)("td",{rowSpan:"2"},"/v5/account/wallet-balance"),(0,a.kt)("td",null,"/unified/v3/private/account/wallet/balance")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/contract/v3/private/account/wallet/balance")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/account/upgrade-to-uta"),(0,a.kt)("td",null,"/unified/v3/private/account/upgrade-unified-account")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/account/borrow-history"),(0,a.kt)("td",null,"/unified/v3/private/account/borrow-history")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/account/collateral-info"),(0,a.kt)("td",null,"/unified/v3/private/account/borrow-rate")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/coin-greeks"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/account/info"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/account/transaction-log"),(0,a.kt)("td",null,"/unified/v3/private/account/transaction-log")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/account/set-margin-mode"),(0,a.kt)("td",null,"/contract/v3/private/account/setMarginMode")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"5"},"Spot Leverage Token"),(0,a.kt)("td",null,"/v5/spot-lever-token/info"),(0,a.kt)("td",null,"/spot/v3/public/infos")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/spot-lever-token/reference"),(0,a.kt)("td",null,"/spot/v3/private/order/reference")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/spot-lever-token/purchase"),(0,a.kt)("td",null,"/spot/v3/private/order/purchase")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/spot-lever-token/redeem"),(0,a.kt)("td",null,"/spot/v3/private/order/redeem")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/spot-lever-token/order-record"),(0,a.kt)("td",null,"/spot/v3/private/order/record")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"3"},"Spot Margin Trade"),(0,a.kt)("td",null,"/v5/spot-margin-trade/switch-mode"),(0,a.kt)("td",null,"/spot/v3/private/cross-margin-switch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/spot-margin-trade/set-leverage"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/spot-margin-trade/set-pledge-token"),(0,a.kt)("td",null,"None")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"21"},"Asset"),(0,a.kt)("td",null,"/v5/asset/delivery-record"),(0,a.kt)("td",null,"/unified/v3/private/delivery-record")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/settlement-record"),(0,a.kt)("td",null,"/unified/v3/private/settlement-record")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/transfer/inter-transfer"),(0,a.kt)("td",null,"/asset/v3/private/transfer/inter-transfer")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"v5/asset/transfer/query-inter-transfer-list"),(0,a.kt)("td",null,"/asset/v3/private/transfer/inter-transfer/list/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"v5/asset/transfer/save-transfer-sub-member"),(0,a.kt)("td",null,"/asset/v3/private/transfer/transfer-sub-member-save")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/transfer/universal-transfer"),(0,a.kt)("td",null,"/asset/v3/private/transfer/universal-transfer")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/transfer/query-universal-transfer-list"),(0,a.kt)("td",null,"/asset/v3/private/transfer/universal-transfer/list/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/transfer/query-transfer-coin-list"),(0,a.kt)("td",null,"/asset/v3/private/transfer/transfer-coin/list/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/transfer/query-sub-member-list"),(0,a.kt)("td",null,"/asset/v3/private/transfer/sub-member/list/quer")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/transfer/query-account-coin-balance"),(0,a.kt)("td",null,"/asset/v3/private/transfer/account-coin/balance/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/transfer/query-asset-info"),(0,a.kt)("td",null,"/asset/v3/private/transfer/asset-info/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/deposit/query-allowed-list"),(0,a.kt)("td",null,"/asset/v3/public/deposit/allowed-deposit-list/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/deposit/query-record"),(0,a.kt)("td",null,"/asset/v3/private/deposit/record/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/deposit/query-sub-member-record"),(0,a.kt)("td",null,"/asset/v3/private/deposit/sub-member-record/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/withdraw/query-record"),(0,a.kt)("td",null,"/asset/v3/private/withdraw/record/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/coin/query-info"),(0,a.kt)("td",null,"/asset/v3/private/coin-info/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/withdraw/create"),(0,a.kt)("td",null,"/asset/v3/private/withdraw/create")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/withdraw/cancel"),(0,a.kt)("td",null,"/asset/v3/private/withdraw/cancel")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/deposit/query-address"),(0,a.kt)("td",null,"/asset/v3/private/deposit/address/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/deposit/query-sub-member-address"),(0,a.kt)("td",null,"/asset/v3/private/deposit/sub-member-address/query")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"/v5/asset/exchange/order-record"),(0,a.kt)("td",null,"/asset/v2/private/exchange/query-exchange-order")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"5"},"WebSocket Public"),(0,a.kt)("td",null,"wss://stream.bybit.com/v5/public/spot"),(0,a.kt)("td",null,"wss://stream.bybit.com/spot/public/v3")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"wss://stream.bybit.com/v5/public/linear"),(0,a.kt)("td",null,"wss://stream.bybit.com/contract/usdt/public/v3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"wss://stream.bybit.com/contract/usdc/public/v3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"wss://stream.bybit.com/v5/public/inverse"),(0,a.kt)("td",null,"wss://stream.bybit.com/contract/inverse/public/v3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"wss://stream.bybit.com/v5/public/option"),(0,a.kt)("td",null,"wss://stream.bybit.com/option/usdc/public/v3")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"3"},"WebSocket Private"),(0,a.kt)("td",{rowSpan:"3"},"wss://stream.bybit.com/v5/private"),(0,a.kt)("td",null,"wss://stream.bybit.com/spot/private/v3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"wss://stream.bybit.com/unified/private/v3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"wss://stream.bybit.com/contract/private/v3")))))}c.isMDXComponent=!0}}]);