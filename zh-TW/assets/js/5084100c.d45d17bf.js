"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[651],{53178:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var i=t(87462),a=(t(67294),t(3905)),o=t(26389),s=t(94891),p=t(74933),l=(t(47507),t(24310)),n=(t(63303),t(75035),t(85162));const d={id:"replace-order",title:"Replace Order",description:"Replace an order.",sidebar_label:"Replace Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Replace an order.",operationId:"replace-order",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",enum:["linear","inverse","option"],description:"Product type. Currently spot is not supported.",default:"linear"},symbol:{type:"string",description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},qty:{type:"string",description:"Modify the order qty"},price:{type:"string",description:"Modify the order price",example:null},orderIv:{type:"string",description:"Modify option order iv",example:null},triggerPrice:{type:"string",description:"Modify StopOrder trigger price",example:null},takeProfit:{type:"string",description:"Modify take profit price",example:null},stopLoss:{type:"string",description:"Modify stop loss price",example:null},triggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify the type of trigger price",example:null},tpTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify trigger take profit price price type",example:null},slTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify trigger stop loss price price type",example:null}},required:["category","symbol"]}}}},method:"post",path:"/v5/order/amend",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"string",orderId:"string",orderLinkId:"string",qty:"string",price:null,orderIv:null,triggerPrice:null,takeProfit:null,stopLoss:null,triggerBy:null,tpTriggerBy:null,slTriggerBy:null},info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Replace Order",description:{content:"Replace an order.",type:"text/plain"},url:{path:["v5","order","amend"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},c=void 0,u={unversionedId:"api-explorer/v5/trade/replace-order",id:"api-explorer/v5/trade/replace-order",title:"Replace Order",description:"Replace an order.",source:"@site/docs/api-explorer/v5/trade/replace-order.api.mdx",sourceDirName:"api-explorer/v5/trade",slug:"/api-explorer/v5/trade/replace-order",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/replace-order",draft:!1,tags:[],version:"current",frontMatter:{id:"replace-order",title:"Replace Order",description:"Replace an order.",sidebar_label:"Replace Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Replace an order.",operationId:"replace-order",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",enum:["linear","inverse","option"],description:"Product type. Currently spot is not supported.",default:"linear"},symbol:{type:"string",description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},qty:{type:"string",description:"Modify the order qty"},price:{type:"string",description:"Modify the order price",example:null},orderIv:{type:"string",description:"Modify option order iv",example:null},triggerPrice:{type:"string",description:"Modify StopOrder trigger price",example:null},takeProfit:{type:"string",description:"Modify take profit price",example:null},stopLoss:{type:"string",description:"Modify stop loss price",example:null},triggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify the type of trigger price",example:null},tpTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify trigger take profit price price type",example:null},slTriggerBy:{type:"string",enum:["LastPrice","MarkPrice","IndexPrice"],description:"Modify trigger stop loss price price type",example:null}},required:["category","symbol"]}}}},method:"post",path:"/v5/order/amend",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"string",orderId:"string",orderLinkId:"string",qty:"string",price:null,orderIv:null,triggerPrice:null,takeProfit:null,stopLoss:null,triggerBy:null,tpTriggerBy:null,slTriggerBy:null},info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Replace Order",description:{content:"Replace an order.",type:"text/plain"},url:{path:["v5","order","amend"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Place Order",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/create-order"},next:{title:"Cancel Order",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/cancel-order"}},m={},y=[{value:"Replace Order",id:"replace-order",level:2}],g={toc:y};function h(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"replace-order"},"Replace Order"),(0,a.kt)("p",null,"Replace an order."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(s.Z,{mdxType:"MimeTabs"},(0,a.kt)(n.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type. Currently spot is not supported.",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`, `inverse`, `option`]",defaultValue:"linear",mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"qty",required:!1,schemaDescription:"Modify the order qty",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"price",required:!1,schemaDescription:"Modify the order price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"orderIv",required:!1,schemaDescription:"Modify option order iv",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"triggerPrice",required:!1,schemaDescription:"Modify StopOrder trigger price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"takeProfit",required:!1,schemaDescription:"Modify take profit price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"stopLoss",required:!1,schemaDescription:"Modify stop loss price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"triggerBy",required:!1,schemaDescription:"Modify the type of trigger price",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"tpTriggerBy",required:!1,schemaDescription:"Modify trigger take profit price price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"slTriggerBy",required:!1,schemaDescription:"Modify trigger stop loss price price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);