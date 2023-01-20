"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4760],{15861:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>g,contentTitle:()=>u,default:()=>x,frontMatter:()=>m,metadata:()=>y,toc:()=>f});var t=r(87462),a=(r(67294),r(3905)),o=r(26389),s=r(94891),l=r(74933),n=r(47507),p=r(24310),d=r(63303),c=(r(75035),r(85162));const m={id:"create-order",title:"Place Order",description:"Place a future or option order",sidebar_label:"Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Place a future or option order",operationId:"create-order",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer",example:0},retMsg:{type:"string",example:"OK"},result:{type:"object",properties:{orderId:{type:"string",example:"e10b0716-7c91-4091-b98a-1fa0f401c7d5"},orderLinkId:{type:"string",example:"test-001"}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",enum:["linear","option"],description:"Product type",example:"linear"},symbol:{type:"string",description:"Symbol name",example:"BTCUSDT"},side:{type:"string",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",enum:["Market","Sell"],description:"Order type",example:"Limit"},qty:{type:"string",required:!0,description:"Order qty",example:"1"},price:{type:"string",description:"Keep null for Market order",example:"10000"},triggerPrice:{type:"string",description:"param for StopOrder",example:null},triggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"param for StopOrder",example:null},iv:{type:"string",description:"param for option order",example:null},timeInForce:{type:"string",enum:["GoodTillCancel","ImmediateOrCancel","FillOrKill","PostOnly"],description:"Time in force",example:"GoodTillCancel"},positionIdx:{type:"integer",enum:[0],description:"Position mode. one-way mode only for unified.",example:0},orderLinkId:{type:"string",description:"REQUIRED param when place an option order",example:"test-xx1"},takeProfit:{type:"string",description:"Take profit price",example:null},stopLoss:{type:"string",description:"Stop loss price",example:null},tpTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Trigger take profit price price type",example:null},slTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Trigger stop loss price price type",example:null},reduceOnly:{type:"boolean",enum:[!0,!1],description:"specify true if a close position order",example:!1},closeOnTrigger:{type:"string",enum:[!0,!1],description:"close on trigger",example:!1},mmp:{type:"boolean",enum:[!0,!1],description:"market marker protection. for option order",example:null}},required:["category","symbol","side","orderType","qty","timeInForce"]}}}},method:"post",path:"/unified/v3/private/order/create",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"BTCUSDT",side:"Buy",orderType:"Limit",qty:"1",price:"10000",triggerPrice:null,triggerBy:null,iv:null,timeInForce:"GoodTillCancel",positionIdx:0,orderLinkId:"test-xx1",takeProfit:null,stopLoss:null,tpTriggerBy:null,slTriggerBy:null,reduceOnly:!1,closeOnTrigger:!1,mmp:null},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Place Order",description:{content:"Place a future or option order",type:"text/plain"},url:{path:["unified","v3","private","order","create"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},u=void 0,y={unversionedId:"api-explorer/derivatives/trade/unified/create-order",id:"api-explorer/derivatives/trade/unified/create-order",title:"Place Order",description:"Place a future or option order",source:"@site/docs/api-explorer/derivatives/trade/unified/create-order.api.mdx",sourceDirName:"api-explorer/derivatives/trade/unified",slug:"/api-explorer/derivatives/trade/unified/create-order",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/create-order",draft:!1,tags:[],version:"current",frontMatter:{id:"create-order",title:"Place Order",description:"Place a future or option order",sidebar_label:"Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Place a future or option order",operationId:"create-order",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer",example:0},retMsg:{type:"string",example:"OK"},result:{type:"object",properties:{orderId:{type:"string",example:"e10b0716-7c91-4091-b98a-1fa0f401c7d5"},orderLinkId:{type:"string",example:"test-001"}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",enum:["linear","option"],description:"Product type",example:"linear"},symbol:{type:"string",description:"Symbol name",example:"BTCUSDT"},side:{type:"string",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",enum:["Market","Sell"],description:"Order type",example:"Limit"},qty:{type:"string",required:!0,description:"Order qty",example:"1"},price:{type:"string",description:"Keep null for Market order",example:"10000"},triggerPrice:{type:"string",description:"param for StopOrder",example:null},triggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"param for StopOrder",example:null},iv:{type:"string",description:"param for option order",example:null},timeInForce:{type:"string",enum:["GoodTillCancel","ImmediateOrCancel","FillOrKill","PostOnly"],description:"Time in force",example:"GoodTillCancel"},positionIdx:{type:"integer",enum:[0],description:"Position mode. one-way mode only for unified.",example:0},orderLinkId:{type:"string",description:"REQUIRED param when place an option order",example:"test-xx1"},takeProfit:{type:"string",description:"Take profit price",example:null},stopLoss:{type:"string",description:"Stop loss price",example:null},tpTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Trigger take profit price price type",example:null},slTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Trigger stop loss price price type",example:null},reduceOnly:{type:"boolean",enum:[!0,!1],description:"specify true if a close position order",example:!1},closeOnTrigger:{type:"string",enum:[!0,!1],description:"close on trigger",example:!1},mmp:{type:"boolean",enum:[!0,!1],description:"market marker protection. for option order",example:null}},required:["category","symbol","side","orderType","qty","timeInForce"]}}}},method:"post",path:"/unified/v3/private/order/create",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"BTCUSDT",side:"Buy",orderType:"Limit",qty:"1",price:"10000",triggerPrice:null,triggerBy:null,iv:null,timeInForce:"GoodTillCancel",positionIdx:0,orderLinkId:"test-xx1",takeProfit:null,stopLoss:null,tpTriggerBy:null,slTriggerBy:null,reduceOnly:!1,closeOnTrigger:!1,mmp:null},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Place Order",description:{content:"Place a future or option order",type:"text/plain"},url:{path:["unified","v3","private","order","create"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Unified Margin Account",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/unified"},next:{title:"Get Open Orders",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/open-order"}},g={},f=[{value:"Place Order",id:"place-order",level:2}],v={toc:f};function x(e){let{components:i,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},v,r,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"place-order"},"Place Order"),(0,a.kt)("p",null,"Place a future or option order"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(s.Z,{mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`, `option`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"side",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Buy`, `Sell`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"orderType",required:!0,schemaDescription:"Order type",schemaName:"string",qualifierMessage:"**Possible values:** [`Market`, `Sell`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"qty",required:!0,schemaDescription:"Order qty",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"price",required:!1,schemaDescription:"Keep null for Market order",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"triggerPrice",required:!1,schemaDescription:"param for StopOrder",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"triggerBy",required:!1,schemaDescription:"param for StopOrder",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"iv",required:!1,schemaDescription:"param for option order",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"timeInForce",required:!0,schemaDescription:"Time in force",schemaName:"string",qualifierMessage:"**Possible values:** [`GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, `PostOnly`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"positionIdx",required:!1,schemaDescription:"Position mode. one-way mode only for unified.",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"REQUIRED param when place an option order",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"takeProfit",required:!1,schemaDescription:"Take profit price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"stopLoss",required:!1,schemaDescription:"Stop loss price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"tpTriggerBy",required:!1,schemaDescription:"Trigger take profit price price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"slTriggerBy",required:!1,schemaDescription:"Trigger stop loss price price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"reduceOnly",required:!1,schemaDescription:"specify true if a close position order",schemaName:"boolean",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"closeOnTrigger",required:!1,schemaDescription:"close on trigger",schemaName:"string",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"mmp",required:!1,schemaDescription:"market marker protection. for option order",schemaName:"boolean",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"retCode",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"retMsg",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{collapsible:!1,name:"retExtInfo",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"time",required:!1,schemaDescription:void 0,schemaName:"timestamp",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "retCode": 0,\n  "retMsg": "OK",\n  "result": {\n    "orderId": "e10b0716-7c91-4091-b98a-1fa0f401c7d5",\n    "orderLinkId": "test-001"\n  },\n  "retExtInfo": {},\n  "time": 1668740049062\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);