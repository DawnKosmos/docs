"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3726],{36263:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>f});var t=i(87462),a=(i(67294),i(3905)),s=i(26389),o=i(94891),d=i(74933),p=i(47507),l=i(24310),n=i(63303),c=(i(75035),i(85162));const m={id:"replace-order",title:"Replace Order",description:"Replace an order",sidebar_label:"Replace Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Replace an order",operationId:"replace-order",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer",example:0},retMsg:{type:"string",example:"OK"},result:{type:"object",properties:{orderId:{type:"string",example:"e10b0716-7c91-4091-b98a-1fa0f401c7d5"},orderLinkId:{type:"string",example:"test-001"}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",enum:["linear","option"],description:"Product type"},symbol:{type:"string",description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},orderFilter:{type:"string",description:"active order or conditional order",enum:["Order","StopOrder"]},qty:{type:"string",description:"Modify the order qty"},price:{type:"string",description:"Modify the order price",example:null},iv:{type:"string",description:"Modify option order iv",example:null},triggerPrice:{type:"string",description:"Modify StopOrder trigger price",example:null},takeProfit:{type:"string",description:"Modify take profit price",example:null},stopLoss:{type:"string",description:"Modify stop loss price",example:null},triggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify the type of trigger price",example:null},tpTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify trigger take profit price price type",example:null},slTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify trigger stop loss price price type",example:null}},required:["category","symbol"]}}}},method:"post",path:"/unified/v3/private/order/replace",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"string",orderId:"string",orderLinkId:"string",orderFilter:"Order",qty:"string",price:null,iv:null,triggerPrice:null,takeProfit:null,stopLoss:null,triggerBy:null,tpTriggerBy:null,slTriggerBy:null},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Replace Order",description:{content:"Replace an order",type:"text/plain"},url:{path:["unified","v3","private","order","replace"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},u=void 0,y={unversionedId:"api-explorer/derivatives/trade/unified/replace-order",id:"api-explorer/derivatives/trade/unified/replace-order",title:"Replace Order",description:"Replace an order",source:"@site/docs/api-explorer/derivatives/trade/unified/replace-order.api.mdx",sourceDirName:"api-explorer/derivatives/trade/unified",slug:"/api-explorer/derivatives/trade/unified/replace-order",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/replace-order",draft:!1,tags:[],version:"current",frontMatter:{id:"replace-order",title:"Replace Order",description:"Replace an order",sidebar_label:"Replace Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Replace an order",operationId:"replace-order",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer",example:0},retMsg:{type:"string",example:"OK"},result:{type:"object",properties:{orderId:{type:"string",example:"e10b0716-7c91-4091-b98a-1fa0f401c7d5"},orderLinkId:{type:"string",example:"test-001"}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",enum:["linear","option"],description:"Product type"},symbol:{type:"string",description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},orderFilter:{type:"string",description:"active order or conditional order",enum:["Order","StopOrder"]},qty:{type:"string",description:"Modify the order qty"},price:{type:"string",description:"Modify the order price",example:null},iv:{type:"string",description:"Modify option order iv",example:null},triggerPrice:{type:"string",description:"Modify StopOrder trigger price",example:null},takeProfit:{type:"string",description:"Modify take profit price",example:null},stopLoss:{type:"string",description:"Modify stop loss price",example:null},triggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify the type of trigger price",example:null},tpTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify trigger take profit price price type",example:null},slTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify trigger stop loss price price type",example:null}},required:["category","symbol"]}}}},method:"post",path:"/unified/v3/private/order/replace",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"string",orderId:"string",orderLinkId:"string",orderFilter:"Order",qty:"string",price:null,iv:null,triggerPrice:null,takeProfit:null,stopLoss:null,triggerBy:null,tpTriggerBy:null,slTriggerBy:null},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Replace Order",description:{content:"Replace an order",type:"text/plain"},url:{path:["unified","v3","private","order","replace"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Open Orders",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/open-order"},next:{title:"Cancl Order",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/cancel-order"}},g={},f=[{value:"Replace Order",id:"replace-order",level:2}],v={toc:f};function h(e){let{components:r,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},v,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"replace-order"},"Replace Order"),(0,a.kt)("p",null,"Replace an order"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`, `option`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"orderFilter",required:!1,schemaDescription:"active order or conditional order",schemaName:"string",qualifierMessage:"**Possible values:** [`Order`, `StopOrder`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"qty",required:!1,schemaDescription:"Modify the order qty",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"price",required:!1,schemaDescription:"Modify the order price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"iv",required:!1,schemaDescription:"Modify option order iv",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"triggerPrice",required:!1,schemaDescription:"Modify StopOrder trigger price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"takeProfit",required:!1,schemaDescription:"Modify take profit price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"stopLoss",required:!1,schemaDescription:"Modify stop loss price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"triggerBy",required:!1,schemaDescription:"Modify the type of trigger price",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"tpTriggerBy",required:!1,schemaDescription:"Modify trigger take profit price price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"slTriggerBy",required:!1,schemaDescription:"Modify trigger stop loss price price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(n.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"retCode",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"retMsg",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{collapsible:!1,name:"retExtInfo",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"time",required:!1,schemaDescription:void 0,schemaName:"timestamp",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "retCode": 0,\n  "retMsg": "OK",\n  "result": {\n    "orderId": "e10b0716-7c91-4091-b98a-1fa0f401c7d5",\n    "orderLinkId": "test-001"\n  },\n  "retExtInfo": {},\n  "time": 1668740049062\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);