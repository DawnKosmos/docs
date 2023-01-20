"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1528],{75929:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>y});var i=t(87462),a=(t(67294),t(3905)),o=t(26389),s=t(94891),l=t(74933),n=(t(47507),t(24310)),p=(t(63303),t(75035),t(85162));const c={id:"create-order",title:"Place Order",description:"Place a future or option order.",sidebar_label:"Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Place a future or option order.",operationId:"create-order",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},side:{type:"string",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",enum:["Market","Limit"],description:"Order type",example:"Limit"},qty:{type:"string",description:"Order qty",example:"1"},price:{type:"string",description:"ignore it if Market order",example:"1000"},triggerPrice:{type:"string",description:"param for StopOrder",example:null},triggerDirection:{type:"integer",description:"param for StopOrder. 1=rise, 2=fall",example:null},triggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"param for StopOrder",example:null},timeInForce:{type:"string",description:"Time in force",enum:["GoodTillCancel","ImmediateOrCancel","FillOrKill","PostOnly"],example:"GoodTillCancel"},positionIdx:{type:"integer",enum:[0,1,2],description:"0=one-way mode, 1=buy-hedge-mode, 2=sell-hedge-mode",example:0},orderLinkId:{type:"string",description:"User customised order ID",example:"test-xx1"},takeProfit:{type:"string",description:"Take profit price",example:null},stopLoss:{type:"string",description:"Stop loss price",example:null},tpTriggerBy:{type:"string",description:"Trigger take profit price price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:null},slTriggerBy:{type:"string",description:"Trigger stop loss price price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:null},reduceOnly:{type:"boolean",description:"specify true if a close position order",enum:[!0,!1],example:!1},closeOnTrigger:{type:"string",description:"close on trigger",enum:[!0,!1],example:!1}},required:["symbol","side","qty","orderType","timeInForce","positionIdx"]}}}},method:"post",path:"/contract/v3/private/order/create",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",side:"Buy",orderType:"Limit",qty:"1",price:"1000",triggerPrice:null,triggerDirection:null,triggerBy:null,timeInForce:"GoodTillCancel",positionIdx:0,orderLinkId:"test-xx1",takeProfit:null,stopLoss:null,tpTriggerBy:null,slTriggerBy:null,reduceOnly:!1,closeOnTrigger:!1},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Place Order",description:{content:"Place a future or option order.",type:"text/plain"},url:{path:["contract","v3","private","order","create"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},d=void 0,m={unversionedId:"api-explorer/derivatives/trade/contract/create-order",id:"api-explorer/derivatives/trade/contract/create-order",title:"Place Order",description:"Place a future or option order.",source:"@site/docs/api-explorer/derivatives/trade/contract/create-order.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/create-order",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/create-order",draft:!1,tags:[],version:"current",frontMatter:{id:"create-order",title:"Place Order",description:"Place a future or option order.",sidebar_label:"Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Place a future or option order.",operationId:"create-order",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},side:{type:"string",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",enum:["Market","Limit"],description:"Order type",example:"Limit"},qty:{type:"string",description:"Order qty",example:"1"},price:{type:"string",description:"ignore it if Market order",example:"1000"},triggerPrice:{type:"string",description:"param for StopOrder",example:null},triggerDirection:{type:"integer",description:"param for StopOrder. 1=rise, 2=fall",example:null},triggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"param for StopOrder",example:null},timeInForce:{type:"string",description:"Time in force",enum:["GoodTillCancel","ImmediateOrCancel","FillOrKill","PostOnly"],example:"GoodTillCancel"},positionIdx:{type:"integer",enum:[0,1,2],description:"0=one-way mode, 1=buy-hedge-mode, 2=sell-hedge-mode",example:0},orderLinkId:{type:"string",description:"User customised order ID",example:"test-xx1"},takeProfit:{type:"string",description:"Take profit price",example:null},stopLoss:{type:"string",description:"Stop loss price",example:null},tpTriggerBy:{type:"string",description:"Trigger take profit price price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:null},slTriggerBy:{type:"string",description:"Trigger stop loss price price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:null},reduceOnly:{type:"boolean",description:"specify true if a close position order",enum:[!0,!1],example:!1},closeOnTrigger:{type:"string",description:"close on trigger",enum:[!0,!1],example:!1}},required:["symbol","side","qty","orderType","timeInForce","positionIdx"]}}}},method:"post",path:"/contract/v3/private/order/create",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",side:"Buy",orderType:"Limit",qty:"1",price:"1000",triggerPrice:null,triggerDirection:null,triggerBy:null,timeInForce:"GoodTillCancel",positionIdx:0,orderLinkId:"test-xx1",takeProfit:null,stopLoss:null,tpTriggerBy:null,slTriggerBy:null,reduceOnly:!1,closeOnTrigger:!1},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Place Order",description:{content:"Place a future or option order.",type:"text/plain"},url:{path:["contract","v3","private","order","create"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Contract",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/contract"},next:{title:"Get Open Orders",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/open-order"}},u={},y=[{value:"Place Order",id:"place-order",level:2}],g={toc:y};function v(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"place-order"},"Place Order"),(0,a.kt)("p",null,"Place a future or option order."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(s.Z,{mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(n.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"side",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Buy`, `Sell`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"orderType",required:!0,schemaDescription:"Order type",schemaName:"string",qualifierMessage:"**Possible values:** [`Market`, `Limit`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"qty",required:!0,schemaDescription:"Order qty",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"price",required:!1,schemaDescription:"ignore it if Market order",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"triggerPrice",required:!1,schemaDescription:"param for StopOrder",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"triggerDirection",required:!1,schemaDescription:"param for StopOrder. 1=rise, 2=fall",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"triggerBy",required:!1,schemaDescription:"param for StopOrder",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"timeInForce",required:!0,schemaDescription:"Time in force",schemaName:"string",qualifierMessage:"**Possible values:** [`GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, `PostOnly`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"positionIdx",required:!0,schemaDescription:"0=one-way mode, 1=buy-hedge-mode, 2=sell-hedge-mode",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`, `2`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"User customised order ID",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"takeProfit",required:!1,schemaDescription:"Take profit price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"stopLoss",required:!1,schemaDescription:"Stop loss price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"tpTriggerBy",required:!1,schemaDescription:"Trigger take profit price price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"slTriggerBy",required:!1,schemaDescription:"Trigger stop loss price price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"reduceOnly",required:!1,schemaDescription:"specify true if a close position order",schemaName:"boolean",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"closeOnTrigger",required:!1,schemaDescription:"close on trigger",schemaName:"string",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}v.isMDXComponent=!0}}]);