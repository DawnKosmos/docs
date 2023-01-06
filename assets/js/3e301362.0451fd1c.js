"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1404],{3739:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>v});var a=i(87462),r=(i(67294),i(3905)),n=i(26389),o=i(94891),s=i(74933),l=(i(47507),i(24310)),p=(i(63303),i(75035),i(85162));const d={id:"redeem",title:"Redeem",description:"Redeem leverage token",sidebar_label:"Redeem",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Redeem leverage token",operationId:"redeem",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCoin:{type:"string",description:"Levearage coin name. e.g., BTC3L",example:"EOS3L"},quantity:{type:"string",description:"Redeem quantity",example:"150"},serialNo:{type:"string",description:"Serial number, customised order id",example:"test-002"},required:["ltCoin","quantity"]}}}}},method:"post",path:"/v5/spot-lever-token/redeem",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCoin:"EOS3L",quantity:"150",serialNo:"test-002"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot leverage token"},postman:{name:"Redeem",description:{content:"Redeem leverage token",type:"text/plain"},url:{path:["v5","spot-lever-token","redeem"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token"},m=void 0,u={unversionedId:"api-explorer/v5/lt/redeem",id:"api-explorer/v5/lt/redeem",title:"Redeem",description:"Redeem leverage token",source:"@site/docs/api-explorer/v5/lt/redeem.api.mdx",sourceDirName:"api-explorer/v5/lt",slug:"/api-explorer/v5/lt/redeem",permalink:"/docs-v2/api-explorer/v5/lt/redeem",draft:!1,tags:[],version:"current",frontMatter:{id:"redeem",title:"Redeem",description:"Redeem leverage token",sidebar_label:"Redeem",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Redeem leverage token",operationId:"redeem",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCoin:{type:"string",description:"Levearage coin name. e.g., BTC3L",example:"EOS3L"},quantity:{type:"string",description:"Redeem quantity",example:"150"},serialNo:{type:"string",description:"Serial number, customised order id",example:"test-002"},required:["ltCoin","quantity"]}}}}},method:"post",path:"/v5/spot-lever-token/redeem",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCoin:"EOS3L",quantity:"150",serialNo:"test-002"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot leverage token"},postman:{name:"Redeem",description:{content:"Redeem leverage token",type:"text/plain"},url:{path:["v5","spot-lever-token","redeem"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token"},sidebar:"apiExplorerSideBar",previous:{title:"Purchase",permalink:"/docs-v2/api-explorer/v5/lt/purchase"},next:{title:"Purchase Or Redeem History",permalink:"/docs-v2/api-explorer/v5/lt/order-record"}},c={},v=[{value:"Redeem",id:"redeem",level:2}],y={toc:v};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"redeem"},"Redeem"),(0,r.kt)("p",null,"Redeem leverage token"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(o.Z,{mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"ltCoin",required:!1,schemaDescription:"Levearage coin name. e.g., BTC3L",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"quantity",required:!1,schemaDescription:"Redeem quantity",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"serialNo",required:!1,schemaDescription:"Serial number, customised order id",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"required",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}h.isMDXComponent=!0}}]);