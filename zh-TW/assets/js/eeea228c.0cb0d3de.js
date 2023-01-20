"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1218],{38493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var r=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),p=a(74933),n=(a(47507),a(24310)),l=(a(63303),a(75035),a(85162));const d={id:"purchase",title:"Purchase",description:"Purchase",sidebar_label:"Purchase",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Purchase",operationId:"purchase",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCode:{type:"string",description:"Abbreviation of the LT.",example:"BTC3LUSDT"},ltAmount:{type:"string",description:"Market Buy order, it is amount to pay.",example:"100"},serialNo:{type:"string",description:"Serial number"}},required:["ltCode","ltAmount"]}}}},method:"post",path:"/spot/v3/private/purchase",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCode:"BTC3LUSDT",ltAmount:"100",serialNo:"string"},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Purchase",description:{content:"Purchase",type:"text/plain"},url:{path:["spot","v3","private","purchase"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/lttrade/bybit-spot-trade-explorer"},c=void 0,u={unversionedId:"api-explorer/spot/lttrade/purchase",id:"api-explorer/spot/lttrade/purchase",title:"Purchase",description:"Purchase",source:"@site/docs/api-explorer/spot/lttrade/purchase.api.mdx",sourceDirName:"api-explorer/spot/lttrade",slug:"/api-explorer/spot/lttrade/purchase",permalink:"/docs-v2/zh-TW/api-explorer/spot/lttrade/purchase",draft:!1,tags:[],version:"current",frontMatter:{id:"purchase",title:"Purchase",description:"Purchase",sidebar_label:"Purchase",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Purchase",operationId:"purchase",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCode:{type:"string",description:"Abbreviation of the LT.",example:"BTC3LUSDT"},ltAmount:{type:"string",description:"Market Buy order, it is amount to pay.",example:"100"},serialNo:{type:"string",description:"Serial number"}},required:["ltCode","ltAmount"]}}}},method:"post",path:"/spot/v3/private/purchase",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCode:"BTC3LUSDT",ltAmount:"100",serialNo:"string"},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Purchase",description:{content:"Purchase",type:"text/plain"},url:{path:["spot","v3","private","purchase"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/lttrade/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Market Info",permalink:"/docs-v2/zh-TW/api-explorer/spot/lttrade/market-info"},next:{title:"Redeem",permalink:"/docs-v2/zh-TW/api-explorer/spot/lttrade/redeem"}},m={},y=[{value:"Purchase",id:"purchase",level:2}],h={toc:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"purchase"},"Purchase"),(0,s.kt)("p",null,"Purchase"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"ltCode",required:!0,schemaDescription:"Abbreviation of the LT.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"ltAmount",required:!0,schemaDescription:"Market Buy order, it is amount to pay.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"serialNo",required:!1,schemaDescription:"Serial number",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);