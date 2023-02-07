"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6768],{26481:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>n,metadata:()=>m,toc:()=>y});var a=t(87462),i=(t(67294),t(3905)),o=t(26389),s=t(94891),d=t(74933),p=(t(47507),t(24310)),l=(t(63303),t(75035),t(85162));const n={id:"place-order",title:"Place Order",description:"Place a order",sidebar_label:"Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Place a order",operationId:"place-order",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"BTCUSDT"},orderQty:{type:"string",description:"Market Buy order, it is amount to pay.",example:"0.1"},side:{type:"string",description:"Side",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",description:"Order type",enum:["MARKET","LIMIT","LIMITMAKER"],example:"LIMIT"},timeInForce:{type:"string",description:"Time in force",enum:["GTC","FOK","IOC"],example:"GTC"},orderPrice:{type:"string",description:"Order price",example:"10000"},orderLinkId:{type:"string",description:"User customised order id"},orderCategory:{type:"integer",description:"Order category. 0=normal order, 1=TP/SL order",enum:[0,1],default:0},triggerPrice:{type:"string",description:"Tp/Sl order trigger price",example:null}},required:["symbol","orderQty","side","orderType"]}}}},method:"post",path:"/spot/v3/private/order",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"BTCUSDT",orderQty:"0.1",side:"Buy",orderType:"LIMIT",timeInForce:"GTC",orderPrice:"10000",orderLinkId:"string",orderCategory:0,triggerPrice:null},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Place Order",description:{content:"Place a order",type:"text/plain"},url:{path:["spot","v3","private","order"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},c=void 0,m={unversionedId:"api-explorer/spot/trade/place-order",id:"api-explorer/spot/trade/place-order",title:"Place Order",description:"Place a order",source:"@site/docs/api-explorer/spot/trade/place-order.api.mdx",sourceDirName:"api-explorer/spot/trade",slug:"/api-explorer/spot/trade/place-order",permalink:"/docs/zh-TW/api-explorer/spot/trade/place-order",draft:!1,tags:[],version:"current",frontMatter:{id:"place-order",title:"Place Order",description:"Place a order",sidebar_label:"Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Place a order",operationId:"place-order",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"BTCUSDT"},orderQty:{type:"string",description:"Market Buy order, it is amount to pay.",example:"0.1"},side:{type:"string",description:"Side",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",description:"Order type",enum:["MARKET","LIMIT","LIMITMAKER"],example:"LIMIT"},timeInForce:{type:"string",description:"Time in force",enum:["GTC","FOK","IOC"],example:"GTC"},orderPrice:{type:"string",description:"Order price",example:"10000"},orderLinkId:{type:"string",description:"User customised order id"},orderCategory:{type:"integer",description:"Order category. 0=normal order, 1=TP/SL order",enum:[0,1],default:0},triggerPrice:{type:"string",description:"Tp/Sl order trigger price",example:null}},required:["symbol","orderQty","side","orderType"]}}}},method:"post",path:"/spot/v3/private/order",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"BTCUSDT",orderQty:"0.1",side:"Buy",orderType:"LIMIT",timeInForce:"GTC",orderPrice:"10000",orderLinkId:"string",orderCategory:0,triggerPrice:null},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Place Order",description:{content:"Place a order",type:"text/plain"},url:{path:["spot","v3","private","order"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Trade",permalink:"/docs/zh-TW/api-explorer/spot/trade/spot-trade"},next:{title:"Cancel Active Order",permalink:"/docs/zh-TW/api-explorer/spot/trade/cancel-active-order"}},u={},y=[{value:"Place Order",id:"place-order",level:2}],g={toc:y};function b(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"place-order"},"Place Order"),(0,i.kt)("p",null,"Place a order"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"orderQty",required:!0,schemaDescription:"Market Buy order, it is amount to pay.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"side",required:!0,schemaDescription:"Side",schemaName:"string",qualifierMessage:"**Possible values:** [`Buy`, `Sell`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"orderType",required:!0,schemaDescription:"Order type",schemaName:"string",qualifierMessage:"**Possible values:** [`MARKET`, `LIMIT`, `LIMITMAKER`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"timeInForce",required:!1,schemaDescription:"Time in force",schemaName:"string",qualifierMessage:"**Possible values:** [`GTC`, `FOK`, `IOC`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"orderPrice",required:!1,schemaDescription:"Order price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"User customised order id",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"orderCategory",required:!1,schemaDescription:"Order category. 0=normal order, 1=TP/SL order",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`]",defaultValue:0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"triggerPrice",required:!1,schemaDescription:"Tp/Sl order trigger price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}b.isMDXComponent=!0}}]);