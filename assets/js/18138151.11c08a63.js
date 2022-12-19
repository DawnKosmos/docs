"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,k=c["".concat(o,".").concat(u)]||c[u]||s[u]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"instrumentInfo",sidebar_label:"instrumentInfo",sidebar_position:5},l=void 0,p={unversionedId:"v3/copy-trade/wss-public/instrumentInfo",id:"v3/copy-trade/wss-public/instrumentInfo",title:"instrumentInfo",description:"Get latest information for symbol.",source:"@site/docs/v3/copy-trade/wss-public/instrumentInfo.mdx",sourceDirName:"v3/copy-trade/wss-public",slug:"/v3/copy-trade/wss-public/instrumentInfo",permalink:"/docs-v2/v3/copy-trade/wss-public/instrumentInfo",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"instrumentInfo",sidebar_label:"instrumentInfo",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"insurance",permalink:"/docs-v2/v3/copy-trade/wss-public/insurance"},next:{title:"klineV2",permalink:"/docs-v2/v3/copy-trade/wss-public/kline-v2"}},o={},d=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example (Snapshot)",id:"response-example-snapshot",level:3},{value:"Response Example (Delta)",id:"response-example-delta",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=m("Tabs"),c=m("TabItem"),u={toc:d};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get latest information for symbol."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This topic only utilises the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," field. Both the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," fields are null. If a key is not found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," field, its value has not changed.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Some values use scientific notation. This is indicated by that value's key, which will be appended with, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"e6"),". If the key is ",(0,a.kt)("inlineCode",{parentName:"p"},"last_price_e4")," and the value is ",(0,a.kt)("inlineCode",{parentName:"p"},"81585000"),", then to find the true value we can do ",(0,a.kt)("inlineCode",{parentName:"p"},"81585000 / 10^4"),", which equals ",(0,a.kt)("inlineCode",{parentName:"p"},"8158.5"),".")),(0,a.kt)("p",null,"Push frequency: ",(0,a.kt)("strong",{parentName:"p"},"100ms"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Topic:"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"instrument_info.100ms.{symbol}")),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"last_price_e4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"(Deprecated) Latest transaction price 10^4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tick_direction"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Direction of price change")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"prev_price_24h_e4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"(Deprecated) Price of 24 hours ago * 10^4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"price_24h_pcnt_e6"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Percentage change of market price relative to 24h * 10^4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"high_price_24h_e4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"(Deprecated) The highest price in the last 24 hours * 10^4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"low_price_24h_e4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"(Deprecated) Lowest price in the last 24 hours * 10^4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"prev_price_1h_e4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"(Deprecated) Hourly market price an hour ago * 10^4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"price_1h_pcnt_e6"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Percentage change of market price relative to 1 hour ago * 10^6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mark_price_e4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"(Deprecated) Mark price * 10^4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"index_price_e4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"(Deprecated) Index_price * 10^4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"last_price"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Latest transaction price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"prev_price_24h"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Price of 24 hours ago")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"high_price_24h"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The highest price in the last 24 hours")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"low_price_24h"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Lowest price in the last 24 hours")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"prev_price_1h"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Hourly market price an hour ago")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mark_price"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Mark price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"index_price"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Index_price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"open_interest"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Open interest. The update is not immediate - slowest update is 1 minute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"open_value_e8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Open position value * 10^8. The update is not immediate - slowest update is 1 minute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"total_turnover_e8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Total turnover * 10^8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"turnover_24h_e8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Turnover for 24h * 10^8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"total_volume"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Total volume")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"volume_24h"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Trading volume in the last 24 hours")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"predicted_funding_rate_e6"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Predicted funding rate * 10^6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cross_seq"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Cross sequence (internal value)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"created_at"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Creation time (when the order_status was Created)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"updated_at"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Update time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"next_funding_time"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Next settlement time of capital cost")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"countdown_hour"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Countdown of settlement capital cost")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"funding_rate_interval"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Funding rate time interval, unit hour")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(c,{value:"console",label:"Console",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'ws.send(\'{"op": "subscribe", "args": ["instrument_info.100ms.BTCUSDT"]}\')\n')))),(0,a.kt)("h3",{id:"response-example-snapshot"},"Response Example (Snapshot)"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(c,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "topic":"instrument_info.100ms.BTCUSDT",\n    "type":"snapshot",\n    "data": {\n         "id": 1,\n         "symbol": "BTCUSDT",                           //instrument name\n         "last_price_e4": 81165000,                    //the latest price\n         "last_price": "81165000",\n         "bid1_price_e4":400025000,                    // best bid price\n         "bid1_price":"400025000",\n         "ask1_price_e4":475450000,                    // best ask price\n         "ask1_price":"475450000",\n         "last_tick_direction": "ZeroPlusTick",        //the direction of last tick:PlusTick,ZeroPlusTick,MinusTick,ZeroMinusTick\n         "prev_price_24h_e4": 81585000,                //the price of prev 24h\n         "prev_price_24h": "81585000",\n         "price_24h_pcnt_e6": -5148,                   //the current last price percentage change from prev 24h price\n         "high_price_24h_e4": 82900000,                //the highest price of prev 24h\n         "high_price_24h": "82900000",\n         "low_price_24h_e4": 79655000,                 //the lowest price of prev 24h\n         "low_price_24h": "79655000",\n         "prev_price_1h_e4": 81395000,                 //the price of prev 1h\n         "prev_price_1h": "81395000",\n         "price_1h_pcnt_e6": -2825,                    //the current last price percentage change from prev 1h price\n         "mark_price_e4": 81178500,                    //mark price\n         "mark_price": "81178500",\n         "index_price_e4": 81172800,                   //index price\n         "index_price": "81172800",\n         "open_interest": 154418471,                   //open interest quantity - Attention, the update is not immediate - slowest update is 1 minute\n         "open_value_e8": 1997561103030,               //open value quantity - Attention, the update is not immediate - the slowest update is 1 minute\n         "total_turnover_e8": 2029370141961401,        //total turnover\n         "turnover_24h_e8": 9072939873591,             //24h turnover\n         "total_volume": 175654418740,                 //total volume\n         "volume_24h": 735865248,                      //24h volume\n         "funding_rate_e6": 100,                       //funding rate\n         "predicted_funding_rate_e6": 100,             //predicted funding rate\n         "cross_seq": 1053192577,                      //sequence\n         "created_at": "2018-11-14T16:33:26Z",\n         "updated_at": "2020-01-12T18:25:16Z",\n         "next_funding_time": "2020-01-13T00:00:00Z",  //next funding time\n                                                       //the rest time to settle funding fee\n         "countdown_hour": 6,                           //the remaining time to settle the funding fee\n         "funding_rate_interval": 8\n         },\n    "cross_seq":9267002,\n    "timestamp_e6":1615794861826248\n}\n')))),(0,a.kt)("h3",{id:"response-example-delta"},"Response Example (Delta)"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(c,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "topic": "instrument_info.100ms.BTCUSDT",\n    "type": "delta",\n    "data": {\n        "delete": [],\n        "update": [\n            {\n                "id": 1,\n                "symbol": "BTCUSDT",\n                "prev_price_24h_e4": 81565000,\n                "prev_price_24h": "81565000",\n                "price_24h_pcnt_e6": -4904,\n                "open_value_e8": 2000479681106,\n                "total_turnover_e8": 2029370495672976,\n                "turnover_24h_e8": 9066215468687,\n                "volume_24h": 735316391,\n                "cross_seq": 1053192657,\n                "created_at": "2018-11-14T16:33:26Z",\n                "updated_at": "2020-01-12T18:25:25Z"\n            }\n        ],\n        "insert": []\n    },\n    "cross_seq": 1053192657,\n    "timestamp_e6": 1578853525691123\n}\n')))))}k.isMDXComponent=!0}}]);