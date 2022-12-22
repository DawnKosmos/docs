"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1218],{38493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),s=a(26389),o=a(94891),p=a(74933),n=(a(47507),a(24310)),l=(a(63303),a(75035),a(85162));const d={id:"purchase",title:"Purchase",description:"Purchase",sidebar_label:"Purchase",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Purchase",operationId:"purchase",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCode:{type:"string",description:"Abbreviation of the LT.",example:"BTC3LUSDT"},ltAmount:{type:"string",description:"Market Buy order, it is amount to pay.",example:"100"},serialNo:{type:"string",description:"Serial number"}},required:["ltCode","ltAmount"]}}}},method:"post",path:"/spot/v3/private/purchase",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCode:"BTC3LUSDT",ltAmount:"100",serialNo:"string"},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Purchase",description:{content:"Purchase",type:"text/plain"},url:{path:["spot","v3","private","purchase"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/lttrade/bybit-spot-trade-explorer"},u=void 0,c={unversionedId:"api-explorer/spot/lttrade/purchase",id:"api-explorer/spot/lttrade/purchase",title:"Purchase",description:"Purchase",source:"@site/docs/api-explorer/spot/lttrade/purchase.api.mdx",sourceDirName:"api-explorer/spot/lttrade",slug:"/api-explorer/spot/lttrade/purchase",permalink:"/docs-v2/api-explorer/spot/lttrade/purchase",draft:!1,tags:[],version:"current",frontMatter:{id:"purchase",title:"Purchase",description:"Purchase",sidebar_label:"Purchase",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Purchase",operationId:"purchase",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCode:{type:"string",description:"Abbreviation of the LT.",example:"BTC3LUSDT"},ltAmount:{type:"string",description:"Market Buy order, it is amount to pay.",example:"100"},serialNo:{type:"string",description:"Serial number"}},required:["ltCode","ltAmount"]}}}},method:"post",path:"/spot/v3/private/purchase",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCode:"BTC3LUSDT",ltAmount:"100",serialNo:"string"},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Purchase",description:{content:"Purchase",type:"text/plain"},url:{path:["spot","v3","private","purchase"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/lttrade/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Market Info",permalink:"/docs-v2/api-explorer/spot/lttrade/market-info"},next:{title:"Redeem",permalink:"/docs-v2/api-explorer/spot/lttrade/redeem"}},m={},h=[{value:"Purchase",id:"purchase",level:2}],y={toc:h};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"purchase"},"Purchase"),(0,i.kt)("p",null,"Purchase"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"ltCode",required:!0,schemaDescription:"Abbreviation of the LT.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"ltAmount",required:!0,schemaDescription:"Market Buy order, it is amount to pay.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"serialNo",required:!1,schemaDescription:"Serial number",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}b.isMDXComponent=!0}}]);