"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9113],{19576:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>v,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var a=t(87462),r=(t(67294),t(3905)),s=t(26389),l=t(94891),m=t(74933),n=t(47507),o=t(24310),p=t(63303),c=(t(75035),t(85162));const d={id:"ticker",title:"Tikcer Info",description:"Get all latest information of symbols. All parameters are needed for OPTION",sidebar_label:"Tikcer Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get all latest information of symbols. All parameters are needed for OPTION",operationId:"ticker",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["future","option"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{future:{schema:{type:"object",properties:{retCode:{type:"integer",example:0},retMsg:{type:"string",example:"OK"},result:{type:"object",properties:{category:{type:"string",example:"future"},list:{type:"array",items:{type:"object",properties:{symbol:{type:"string",example:"BTCUSDT"},bidPrice:{type:"string",example:16046},askPrice:{type:"string",example:16046.5},lastPrice:{type:"string",example:16046},lastTickDirection:{type:"string",example:"ZeroMinusTick"},prevPrice24h:{type:"string",example:16749},price24hPcnt:{type:"string",example:-.041972},highPrice24h:{type:"string",example:16950},lowPrice24h:{type:"string",example:15739},prevPrice1h:{type:"string",example:16169.5},markPrice:{type:"string",example:16046},indexPrice:{type:"string",example:16011.29},openInterest:{type:"string",example:64201.768},turnover24h:{type:"string",example:361859271.7860001},volume24h:{type:"string",example:22120.49599999},fundingRate:{type:"string",example:922e-6},nextFundingTime:{type:"string",example:16690464e5},predictedDeliveryPrice:{type:"string",example:""},basisRate:{type:"string",example:""},deliveryFeeRate:{type:"string",example:""},deliveryTime:{type:"string",example:0}}}}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1669018848263}}}},option:{schema:{type:"object",properties:{retCode:{type:"integer",example:0},retMsg:{type:"string",example:"SUCCESS"},result:{type:"object",properties:{category:{type:"string",example:"option"},symbol:{type:"string",example:"BTC-23NOV22-20000-C"},bidPrice:{type:"string",example:0},bidSize:{type:"string",example:0},bidIv:{type:"string",example:0},askPrice:{type:"string",example:15},askSize:{type:"string",example:31},askIv:{type:"string",example:1.5156},lastPrice:{type:"string",example:0},highPrice24h:{type:"string",example:0},lowPrice24h:{type:"string",example:0},markPrice:{type:"string",example:1.33666525},indexPrice:{type:"string",example:15977.94},markPriceIv:{type:"string",example:1.1264},underlyingPrice:{type:"string",example:15961.7531},openInterest:{type:"string",example:0},turnover24h:{type:"string",example:0},volume24h:{type:"string",example:0},totalVolume:{type:"string",example:0},totalTurnover:{type:"string",example:0},delta:{type:"string",example:.00341686},gamma:{type:"string",example:785e-8},vega:{type:"string",example:.11971518},theta:{type:"string",example:-3.47397181},predictedDeliveryPrice:{type:"string",example:0},change24h:{type:"string",example:0}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1669018848263}}}}}}},method:"get",path:"/derivatives/v3/public/tickers",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Tikcer Info",description:{content:"Get all latest information of symbols. All parameters are needed for OPTION",type:"text/plain"},url:{path:["derivatives","v3","public","tickers"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""}],variable:[]},header:[{key:"Accept",value:"future"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-explorer/derivatives/market/bybit-derivatives-explorer"},u=void 0,y={unversionedId:"api-explorer/derivatives/market/ticker",id:"api-explorer/derivatives/market/ticker",title:"Tikcer Info",description:"Get all latest information of symbols. All parameters are needed for OPTION",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/api-explorer/derivatives/market/ticker.api.mdx",sourceDirName:"api-explorer/derivatives/market",slug:"/api-explorer/derivatives/market/ticker",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/market/ticker",draft:!1,tags:[],version:"current",frontMatter:{id:"ticker",title:"Tikcer Info",description:"Get all latest information of symbols. All parameters are needed for OPTION",sidebar_label:"Tikcer Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get all latest information of symbols. All parameters are needed for OPTION",operationId:"ticker",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["future","option"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{future:{schema:{type:"object",properties:{retCode:{type:"integer",example:0},retMsg:{type:"string",example:"OK"},result:{type:"object",properties:{category:{type:"string",example:"future"},list:{type:"array",items:{type:"object",properties:{symbol:{type:"string",example:"BTCUSDT"},bidPrice:{type:"string",example:16046},askPrice:{type:"string",example:16046.5},lastPrice:{type:"string",example:16046},lastTickDirection:{type:"string",example:"ZeroMinusTick"},prevPrice24h:{type:"string",example:16749},price24hPcnt:{type:"string",example:-.041972},highPrice24h:{type:"string",example:16950},lowPrice24h:{type:"string",example:15739},prevPrice1h:{type:"string",example:16169.5},markPrice:{type:"string",example:16046},indexPrice:{type:"string",example:16011.29},openInterest:{type:"string",example:64201.768},turnover24h:{type:"string",example:361859271.7860001},volume24h:{type:"string",example:22120.49599999},fundingRate:{type:"string",example:922e-6},nextFundingTime:{type:"string",example:16690464e5},predictedDeliveryPrice:{type:"string",example:""},basisRate:{type:"string",example:""},deliveryFeeRate:{type:"string",example:""},deliveryTime:{type:"string",example:0}}}}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1669018848263}}}},option:{schema:{type:"object",properties:{retCode:{type:"integer",example:0},retMsg:{type:"string",example:"SUCCESS"},result:{type:"object",properties:{category:{type:"string",example:"option"},symbol:{type:"string",example:"BTC-23NOV22-20000-C"},bidPrice:{type:"string",example:0},bidSize:{type:"string",example:0},bidIv:{type:"string",example:0},askPrice:{type:"string",example:15},askSize:{type:"string",example:31},askIv:{type:"string",example:1.5156},lastPrice:{type:"string",example:0},highPrice24h:{type:"string",example:0},lowPrice24h:{type:"string",example:0},markPrice:{type:"string",example:1.33666525},indexPrice:{type:"string",example:15977.94},markPriceIv:{type:"string",example:1.1264},underlyingPrice:{type:"string",example:15961.7531},openInterest:{type:"string",example:0},turnover24h:{type:"string",example:0},volume24h:{type:"string",example:0},totalVolume:{type:"string",example:0},totalTurnover:{type:"string",example:0},delta:{type:"string",example:.00341686},gamma:{type:"string",example:785e-8},vega:{type:"string",example:.11971518},theta:{type:"string",example:-3.47397181},predictedDeliveryPrice:{type:"string",example:0},change24h:{type:"string",example:0}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1669018848263}}}}}}},method:"get",path:"/derivatives/v3/public/tickers",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Tikcer Info",description:{content:"Get all latest information of symbols. All parameters are needed for OPTION",type:"text/plain"},url:{path:["derivatives","v3","public","tickers"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""}],variable:[]},header:[{key:"Accept",value:"future"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-explorer/derivatives/market/bybit-derivatives-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Kline",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/market/kline"},next:{title:"Instrument Info",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/market/instrument"}},v={},g=[{value:"Tikcer Info",id:"tikcer-info",level:2}],h={toc:g};function x(e){let{components:i,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tikcer-info"},"Tikcer Info"),(0,r.kt)("p",null,"Get all latest information of symbols. All parameters are needed for OPTION"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["future","option"]}}},mdxType:"ParamsItem"}),(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"future",value:"future",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"retCode",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"retMsg",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"category",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"list"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"symbol",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"bidPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"askPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lastPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lastTickDirection",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"prevPrice24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"price24hPcnt",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"highPrice24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lowPrice24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"prevPrice1h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"markPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"indexPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"openInterest",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"turnover24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"volume24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingRate",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"nextFundingTime",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"predictedDeliveryPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"basisRate",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"deliveryFeeRate",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"deliveryTime",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(o.Z,{collapsible:!1,name:"retExtInfo",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"time",required:!1,schemaDescription:void 0,schemaName:"timestamp",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "retCode": 0,\n  "retMsg": "OK",\n  "result": {\n    "category": "future",\n    "list": [\n      {\n        "symbol": "BTCUSDT",\n        "bidPrice": 16046,\n        "askPrice": 16046.5,\n        "lastPrice": 16046,\n        "lastTickDirection": "ZeroMinusTick",\n        "prevPrice24h": 16749,\n        "price24hPcnt": -0.041972,\n        "highPrice24h": 16950,\n        "lowPrice24h": 15739,\n        "prevPrice1h": 16169.5,\n        "markPrice": 16046,\n        "indexPrice": 16011.29,\n        "openInterest": 64201.768,\n        "turnover24h": 361859271.7860001,\n        "volume24h": 22120.49599999,\n        "fundingRate": 0.000922,\n        "nextFundingTime": 1669046400000,\n        "predictedDeliveryPrice": "",\n        "basisRate": "",\n        "deliveryFeeRate": "",\n        "deliveryTime": 0\n      }\n    ]\n  },\n  "retExtInfo": {},\n  "time": 1669018848263\n}',language:"json",mdxType:"ResponseSamples"})))),(0,r.kt)(c.Z,{label:"option",value:"option",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"retCode",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"retMsg",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"category",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"symbol",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"bidPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"bidSize",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"bidIv",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"askPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"askSize",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"askIv",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lastPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"highPrice24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lowPrice24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"markPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"indexPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"markPriceIv",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"underlyingPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"openInterest",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"turnover24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"volume24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"totalVolume",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"totalTurnover",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"delta",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"gamma",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"vega",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"theta",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"predictedDeliveryPrice",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"change24h",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"retExtInfo",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"time",required:!1,schemaDescription:void 0,schemaName:"timestamp",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "retCode": 0,\n  "retMsg": "SUCCESS",\n  "result": {\n    "category": "option",\n    "symbol": "BTC-23NOV22-20000-C",\n    "bidPrice": 0,\n    "bidSize": 0,\n    "bidIv": 0,\n    "askPrice": 15,\n    "askSize": 31,\n    "askIv": 1.5156,\n    "lastPrice": 0,\n    "highPrice24h": 0,\n    "lowPrice24h": 0,\n    "markPrice": 1.33666525,\n    "indexPrice": 15977.94,\n    "markPriceIv": 1.1264,\n    "underlyingPrice": 15961.7531,\n    "openInterest": 0,\n    "turnover24h": 0,\n    "volume24h": 0,\n    "totalVolume": 0,\n    "totalTurnover": 0,\n    "delta": 0.00341686,\n    "gamma": 0.00000785,\n    "vega": 0.11971518,\n    "theta": -3.47397181,\n    "predictedDeliveryPrice": 0,\n    "change24h": 0\n  },\n  "retExtInfo": {},\n  "time": 1669018848263\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);