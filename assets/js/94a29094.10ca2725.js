"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6255],{67353:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var a=t(87462),i=(t(67294),t(3905)),o=t(26389),n=t(94891),d=t(74933),s=(t(47507),t(24310)),l=(t(63303),t(75035),t(85162));const c={id:"cancel-order",title:"Cancel Order",description:"Cancel a order.",sidebar_label:"Cancel Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Cancel a order.",operationId:"cancel-order",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},orderId:{type:"string",description:"Either orderId or orderLinkId is required",example:null},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required",example:null}},required:["symbol"]}}}},method:"post",path:"/contract/v3/private/order/cancel",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",orderId:null,orderLinkId:null},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Cancel Order",description:{content:"Cancel a order.",type:"text/plain"},url:{path:["contract","v3","private","order","cancel"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},p=void 0,u={unversionedId:"api-explorer/derivatives/trade/contract/cancel-order",id:"api-explorer/derivatives/trade/contract/cancel-order",title:"Cancel Order",description:"Cancel a order.",source:"@site/docs/api-explorer/derivatives/trade/contract/cancel-order.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/cancel-order",permalink:"/docs-v2/api-explorer/derivatives/trade/contract/cancel-order",draft:!1,tags:[],version:"current",frontMatter:{id:"cancel-order",title:"Cancel Order",description:"Cancel a order.",sidebar_label:"Cancel Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Cancel a order.",operationId:"cancel-order",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},orderId:{type:"string",description:"Either orderId or orderLinkId is required",example:null},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required",example:null}},required:["symbol"]}}}},method:"post",path:"/contract/v3/private/order/cancel",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",orderId:null,orderLinkId:null},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Cancel Order",description:{content:"Cancel a order.",type:"text/plain"},url:{path:["contract","v3","private","order","cancel"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Replace Order",permalink:"/docs-v2/api-explorer/derivatives/trade/contract/replace-order"},next:{title:"Cancel All Order",permalink:"/docs-v2/api-explorer/derivatives/trade/contract/cancel-all"}},m={},y=[{value:"Cancel Order",id:"cancel-order",level:2}],v={toc:y};function b(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cancel-order"},"Cancel Order"),(0,i.kt)("p",null,"Cancel a order."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(s.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(s.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(s.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}b.isMDXComponent=!0}}]);