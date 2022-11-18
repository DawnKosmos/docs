"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3869],{1680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>y,toc:()=>v});var r=a(87462),i=(a(67294),a(3905)),o=a(26389),s=a(94891),m=a(74933),d=a(47507),p=a(24310),n=a(63303),l=(a(75035),a(85162));const c={id:"orderbook",title:"Get orderbook",description:"Get order book data",sidebar_label:"Get orderbook",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get order book data",operationId:"orderbook",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["future","option"],default:"future"}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"Maximum 500",required:!1,schema:{type:"int",default:25}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer"},retMsg:{type:"string"},result:{type:"object",properties:{s:{type:"string"},b:{type:"array",items:{type:"array",example:["16972","2.46"]}},a:{type:"array",items:{type:"array",example:["16972.5","8.818"]}},ts:{type:"integer",format:"timestamp",example:1668740049061},u:{type:"integer",format:"sequence",example:1592092}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},method:"get",path:"/derivatives/v3/public/order-book/L2",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Get orderbook",description:{content:"Get order book data",type:"text/plain"},url:{path:["derivatives","v3","public","order-book","L2"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Maximum 500",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-explorer/derivatives/market/bybit-derivatives-explorer"},u=void 0,y={unversionedId:"api-explorer/derivatives/market/orderbook",id:"api-explorer/derivatives/market/orderbook",title:"Get orderbook",description:"Get order book data",source:"@site/docs/api-explorer/derivatives/market/orderbook.api.mdx",sourceDirName:"api-explorer/derivatives/market",slug:"/api-explorer/derivatives/market/orderbook",permalink:"/docs-v2/zh/docs/api-explorer/derivatives/market/orderbook",draft:!1,editUrl:"https://github.com/bybit-exchange/docs-v2/pulls/docs/api-explorer/derivatives/market/orderbook.api.mdx",tags:[],version:"current",frontMatter:{id:"orderbook",title:"Get orderbook",description:"Get order book data",sidebar_label:"Get orderbook",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get order book data",operationId:"orderbook",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["future","option"],default:"future"}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"Maximum 500",required:!1,schema:{type:"int",default:25}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer"},retMsg:{type:"string"},result:{type:"object",properties:{s:{type:"string"},b:{type:"array",items:{type:"array",example:["16972","2.46"]}},a:{type:"array",items:{type:"array",example:["16972.5","8.818"]}},ts:{type:"integer",format:"timestamp",example:1668740049061},u:{type:"integer",format:"sequence",example:1592092}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},method:"get",path:"/derivatives/v3/public/order-book/L2",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Get orderbook",description:{content:"Get order book data",type:"text/plain"},url:{path:["derivatives","v3","public","order-book","L2"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Maximum 500",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-explorer/derivatives/market/bybit-derivatives-explorer"},sidebar:"dvMarketSideBar",previous:{title:"Market Data Endpoints",permalink:"/docs-v2/zh/docs/api-explorer/derivatives/market/market"},next:{title:"Get kline",permalink:"/docs-v2/zh/docs/api-explorer/derivatives/market/kline"}},b={},v=[{value:"Get orderbook",id:"get-orderbook",level:2}],k={toc:v};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-orderbook"},"Get orderbook"),(0,i.kt)("p",null,"Get order book data"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(m.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["future","option"],default:"future"}}},mdxType:"ParamsItem"}),(0,i.kt)(m.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(m.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 500",required:!1,schema:{type:"int",default:25}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(n.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"retCode",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"retMsg",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"result"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"s",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"b",required:!1,schemaDescription:void 0,schemaName:"array[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"a",required:!1,schemaDescription:void 0,schemaName:"array[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"ts",required:!1,schemaDescription:void 0,schemaName:"timestamp",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"u",required:!1,schemaDescription:void 0,schemaName:"sequence",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"retExtInfo",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"time",required:!1,schemaDescription:void 0,schemaName:"timestamp",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "retCode": 0,\n  "retMsg": "string",\n  "result": {\n    "s": "string",\n    "b": [\n      [\n        "16972",\n        "2.46"\n      ]\n    ],\n    "a": [\n      [\n        "16972.5",\n        "8.818"\n      ]\n    ],\n    "ts": 1668740049061,\n    "u": 1592092\n  },\n  "retExtInfo": {},\n  "time": 1668740049062\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);