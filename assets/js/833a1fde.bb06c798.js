"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7338],{81321:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var r=t(87462),a=(t(67294),t(3905)),o=t(26389),s=t(94891),n=t(74933),l=(t(47507),t(24310)),d=(t(63303),t(75035),t(85162));const p={id:"batch-place",title:"Batch Place Order",description:"Batch place orders",sidebar_label:"Batch Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Batch place orders",operationId:"batch-place",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["linear","option"],description:"Product type"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"BTCUSDT"},side:{type:"string",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",description:"Order type",enum:["Market","Limit"],example:"Limit"},qty:{type:"string",decription:"Order qty",example:"0.1"},price:{type:"string",decription:"Order price",example:"10000"},iv:{type:"string",decription:"Order iv. For option order"},timeInForce:{type:"string",enum:["GoodTillCancel","ImmediateOrCancel","FillOrKill","PostOnly"],description:"Time in force",example:"GoodTillCancel"},positionIdx:{type:"integer",enum:[0],description:"Position mode. one-way mode only for unified.",example:0},orderLinkId:{type:"string",description:"REQUIRED param when place an option order",example:"test-xx1"},reduceOnly:{type:"boolean",enum:[!0,!1],description:"specify true if a close position order",example:!1},closeOnTrigger:{type:"string",enum:[!0,!1],description:"close on trigger",example:!1},mmp:{type:"boolean",enum:[!0,!1],description:"market marker protection. for option order",example:null}},required:["symbol","side","orderType","qty","timeInForce"]}}},required:["category","request"]}}}},method:"post",path:"/unified/v3/private/order/create-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",request:[{symbol:"BTCUSDT",side:"Buy",orderType:"Limit",qty:"0.1",price:"10000",iv:"string",timeInForce:"GoodTillCancel",positionIdx:0,orderLinkId:"test-xx1",reduceOnly:!1,closeOnTrigger:!1,mmp:null}]},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Batch Place Order",description:{content:"Batch place orders",type:"text/plain"},url:{path:["unified","v3","private","order","create-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},c=void 0,m={unversionedId:"api-explorer/derivatives/trade/unified/batch-place",id:"api-explorer/derivatives/trade/unified/batch-place",title:"Batch Place Order",description:"Batch place orders",source:"@site/docs/api-explorer/derivatives/trade/unified/batch-place.api.mdx",sourceDirName:"api-explorer/derivatives/trade/unified",slug:"/api-explorer/derivatives/trade/unified/batch-place",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/batch-place",draft:!1,tags:[],version:"current",frontMatter:{id:"batch-place",title:"Batch Place Order",description:"Batch place orders",sidebar_label:"Batch Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Batch place orders",operationId:"batch-place",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["linear","option"],description:"Product type"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"BTCUSDT"},side:{type:"string",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",description:"Order type",enum:["Market","Limit"],example:"Limit"},qty:{type:"string",decription:"Order qty",example:"0.1"},price:{type:"string",decription:"Order price",example:"10000"},iv:{type:"string",decription:"Order iv. For option order"},timeInForce:{type:"string",enum:["GoodTillCancel","ImmediateOrCancel","FillOrKill","PostOnly"],description:"Time in force",example:"GoodTillCancel"},positionIdx:{type:"integer",enum:[0],description:"Position mode. one-way mode only for unified.",example:0},orderLinkId:{type:"string",description:"REQUIRED param when place an option order",example:"test-xx1"},reduceOnly:{type:"boolean",enum:[!0,!1],description:"specify true if a close position order",example:!1},closeOnTrigger:{type:"string",enum:[!0,!1],description:"close on trigger",example:!1},mmp:{type:"boolean",enum:[!0,!1],description:"market marker protection. for option order",example:null}},required:["symbol","side","orderType","qty","timeInForce"]}}},required:["category","request"]}}}},method:"post",path:"/unified/v3/private/order/create-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",request:[{symbol:"BTCUSDT",side:"Buy",orderType:"Limit",qty:"0.1",price:"10000",iv:"string",timeInForce:"GoodTillCancel",positionIdx:0,orderLinkId:"test-xx1",reduceOnly:!1,closeOnTrigger:!1,mmp:null}]},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Batch Place Order",description:{content:"Batch place orders",type:"text/plain"},url:{path:["unified","v3","private","order","create-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Cancl All Orders",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/cancel-all"},next:{title:"Batch Replace Order",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/batch-replace-place"}},u={},y=[{value:"Batch Place Order",id:"batch-place-order",level:2}],v={toc:y};function h(e){let{components:i,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},v,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"batch-place-order"},"Batch Place Order"),(0,a.kt)("p",null,"Batch place orders"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(s.Z,{mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`, `option`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"request"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"<= 10"))),(0,a.kt)(l.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"side",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Buy`, `Sell`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"orderType",required:!0,schemaDescription:"Order type",schemaName:"string",qualifierMessage:"**Possible values:** [`Market`, `Limit`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"qty",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"price",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"iv",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"timeInForce",required:!0,schemaDescription:"Time in force",schemaName:"string",qualifierMessage:"**Possible values:** [`GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, `PostOnly`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"positionIdx",required:!1,schemaDescription:"Position mode. one-way mode only for unified.",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"REQUIRED param when place an option order",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"reduceOnly",required:!1,schemaDescription:"specify true if a close position order",schemaName:"boolean",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"closeOnTrigger",required:!1,schemaDescription:"close on trigger",schemaName:"string",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"mmp",required:!1,schemaDescription:"market marker protection. for option order",schemaName:"boolean",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);