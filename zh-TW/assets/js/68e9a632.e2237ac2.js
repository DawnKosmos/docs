"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8630],{22152:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),s=a(26389),o=a(94891),n=a(74933),l=(a(47507),a(24310)),p=(a(63303),a(75035),a(85162));const d={id:"purchase",title:"Purchase",description:"Purchase leverage token",sidebar_label:"Purchase",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Purchase leverage token",operationId:"purchase",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCoin:{type:"string",description:"Levearage coin name. e.g., BTC3L",example:"EOS3L"},ltAmount:{type:"string",description:"Purchase amount",example:"100"},serialNo:{type:"string",description:"Serial number, customised order id",example:"test-001"},required:["ltCoin","ltAmount"]}}}}},method:"post",path:"/v5/spot-lever-token/purchase",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCoin:"EOS3L",ltAmount:"100",serialNo:"test-001"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot leverage token"},postman:{name:"Purchase",description:{content:"Purchase leverage token",type:"text/plain"},url:{path:["v5","spot-lever-token","purchase"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token"},u=void 0,c={unversionedId:"api-explorer/v5/lt/purchase",id:"api-explorer/v5/lt/purchase",title:"Purchase",description:"Purchase leverage token",source:"@site/docs/api-explorer/v5/lt/purchase.api.mdx",sourceDirName:"api-explorer/v5/lt",slug:"/api-explorer/v5/lt/purchase",permalink:"/docs-v2/zh-TW/api-explorer/v5/lt/purchase",draft:!1,tags:[],version:"current",frontMatter:{id:"purchase",title:"Purchase",description:"Purchase leverage token",sidebar_label:"Purchase",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Purchase leverage token",operationId:"purchase",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCoin:{type:"string",description:"Levearage coin name. e.g., BTC3L",example:"EOS3L"},ltAmount:{type:"string",description:"Purchase amount",example:"100"},serialNo:{type:"string",description:"Serial number, customised order id",example:"test-001"},required:["ltCoin","ltAmount"]}}}}},method:"post",path:"/v5/spot-lever-token/purchase",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCoin:"EOS3L",ltAmount:"100",serialNo:"test-001"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot leverage token"},postman:{name:"Purchase",description:{content:"Purchase leverage token",type:"text/plain"},url:{path:["v5","spot-lever-token","purchase"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token"},sidebar:"apiExplorerSideBar",previous:{title:"LT Market",permalink:"/docs-v2/zh-TW/api-explorer/v5/lt/leverage-token-reference"},next:{title:"Redeem",permalink:"/docs-v2/zh-TW/api-explorer/v5/lt/redeem"}},m={},h=[{value:"Purchase",id:"purchase",level:2}],v={toc:h};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"purchase"},"Purchase"),(0,i.kt)("p",null,"Purchase leverage token"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"ltCoin",required:!1,schemaDescription:"Levearage coin name. e.g., BTC3L",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"ltAmount",required:!1,schemaDescription:"Purchase amount",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"serialNo",required:!1,schemaDescription:"Serial number, customised order id",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"required",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);