"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[42793],{81133:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var a=i(87462),r=(i(67294),i(3905)),s=i(26389),n=i(94891),m=i(74933),l=i(47507),p=i(24310),o=i(63303),d=(i(75035),i(85162));const c={id:"kline",title:"Kline",description:"Get kline data",sidebar_label:"Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get kline data",operationId:"kline",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["future"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},{name:"start",in:"query",description:"start timestamp (ms)",required:!0,schema:{type:"integer"}},{name:"end",in:"query",description:"end timestamp (ms)",required:!0,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer"},retMsg:{type:"string"},result:{type:"object",properties:{symbol:{type:"string",example:"ETHUSDT"},category:{type:"string",example:"future"},list:{type:"array",items:{type:"array",example:["1668441660000","16722.5","16722.5","16700","16700.5","3.307","55233.6405"]}}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},method:"get",path:"/derivatives/v3/public/kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Kline",description:{content:"Get kline data",type:"text/plain"},url:{path:["derivatives","v3","public","kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"(Required) start timestamp (ms)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"(Required) end timestamp (ms)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-explorer/derivatives/market/bybit-derivatives-explorer"},u=void 0,y={unversionedId:"api-explorer/derivatives/market/kline",id:"api-explorer/derivatives/market/kline",title:"Kline",description:"Get kline data",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/api-explorer/derivatives/market/kline.api.mdx",sourceDirName:"api-explorer/derivatives/market",slug:"/api-explorer/derivatives/market/kline",permalink:"/docs/zh-TW/api-explorer/derivatives/market/kline",draft:!1,tags:[],version:"current",frontMatter:{id:"kline",title:"Kline",description:"Get kline data",sidebar_label:"Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get kline data",operationId:"kline",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["future"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},{name:"start",in:"query",description:"start timestamp (ms)",required:!0,schema:{type:"integer"}},{name:"end",in:"query",description:"end timestamp (ms)",required:!0,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer"},retMsg:{type:"string"},result:{type:"object",properties:{symbol:{type:"string",example:"ETHUSDT"},category:{type:"string",example:"future"},list:{type:"array",items:{type:"array",example:["1668441660000","16722.5","16722.5","16700","16700.5","3.307","55233.6405"]}}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},method:"get",path:"/derivatives/v3/public/kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Kline",description:{content:"Get kline data",type:"text/plain"},url:{path:["derivatives","v3","public","kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"(Required) start timestamp (ms)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"(Required) end timestamp (ms)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-explorer/derivatives/market/bybit-derivatives-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Order Book",permalink:"/docs/zh-TW/api-explorer/derivatives/market/orderbook"},next:{title:"Tikcer Info",permalink:"/docs/zh-TW/api-explorer/derivatives/market/ticker"}},v={},k=[{value:"Kline",id:"kline",level:2}],b={toc:k};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"kline"},"Kline"),(0,r.kt)("p",null,"Get kline data"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["future"]}}},mdxType:"ParamsItem"}),(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},mdxType:"ParamsItem"}),(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"start",in:"query",description:"start timestamp (ms)",required:!0,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"end",in:"query",description:"end timestamp (ms)",required:!0,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"retCode",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"retMsg",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"symbol",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"category",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"list",required:!1,schemaDescription:void 0,schemaName:"array[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{collapsible:!1,name:"retExtInfo",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"time",required:!1,schemaDescription:void 0,schemaName:"timestamp",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "retCode": 0,\n  "retMsg": "string",\n  "result": {\n    "symbol": "ETHUSDT",\n    "category": "future",\n    "list": [\n      [\n        "1668441660000",\n        "16722.5",\n        "16722.5",\n        "16700",\n        "16700.5",\n        "3.307",\n        "55233.6405"\n      ]\n    ]\n  },\n  "retExtInfo": {},\n  "time": 1668740049062\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);