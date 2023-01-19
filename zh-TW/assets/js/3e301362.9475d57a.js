"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1404],{3739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>y});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),o=a(94891),n=a(74933),d=(a(47507),a(24310)),p=(a(63303),a(75035),a(85162));const l={id:"redeem",title:"Redeem",description:"Redeem leverage token",sidebar_label:"Redeem",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Redeem leverage token",operationId:"redeem",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCoin:{type:"string",description:"Levearage coin name. e.g., BTC3L",example:"EOS3L"},quantity:{type:"string",description:"Redeem quantity",example:"150"},serialNo:{type:"string",description:"Serial number, customised order id",example:"test-002"},required:["ltCoin","quantity"]}}}}},method:"post",path:"/v5/spot-lever-token/redeem",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCoin:"EOS3L",quantity:"150",serialNo:"test-002"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot leverage token"},postman:{name:"Redeem",description:{content:"Redeem leverage token",type:"text/plain"},url:{path:["v5","spot-lever-token","redeem"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token"},m=void 0,c={unversionedId:"api-explorer/v5/lt/redeem",id:"api-explorer/v5/lt/redeem",title:"Redeem",description:"Redeem leverage token",source:"@site/docs/api-explorer/v5/lt/redeem.api.mdx",sourceDirName:"api-explorer/v5/lt",slug:"/api-explorer/v5/lt/redeem",permalink:"/docs-v2/zh-TW/api-explorer/v5/lt/redeem",draft:!1,tags:[],version:"current",frontMatter:{id:"redeem",title:"Redeem",description:"Redeem leverage token",sidebar_label:"Redeem",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Redeem leverage token",operationId:"redeem",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCoin:{type:"string",description:"Levearage coin name. e.g., BTC3L",example:"EOS3L"},quantity:{type:"string",description:"Redeem quantity",example:"150"},serialNo:{type:"string",description:"Serial number, customised order id",example:"test-002"},required:["ltCoin","quantity"]}}}}},method:"post",path:"/v5/spot-lever-token/redeem",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCoin:"EOS3L",quantity:"150",serialNo:"test-002"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot leverage token"},postman:{name:"Redeem",description:{content:"Redeem leverage token",type:"text/plain"},url:{path:["v5","spot-lever-token","redeem"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token"},sidebar:"apiExplorerSideBar",previous:{title:"Purchase",permalink:"/docs-v2/zh-TW/api-explorer/v5/lt/purchase"},next:{title:"Get Purchase or Redeem Records",permalink:"/docs-v2/zh-TW/api-explorer/v5/lt/order-record"}},u={},y=[{value:"Redeem",id:"redeem",level:2}],v={toc:y};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"redeem"},"Redeem"),(0,r.kt)("p",null,"Redeem leverage token"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(o.Z,{mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"ltCoin",required:!1,schemaDescription:"Levearage coin name. e.g., BTC3L",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"quantity",required:!1,schemaDescription:"Redeem quantity",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"serialNo",required:!1,schemaDescription:"Serial number, customised order id",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"required",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);