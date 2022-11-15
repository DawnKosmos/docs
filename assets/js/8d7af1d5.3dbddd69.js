"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9592],{44210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),n=a(94891),o=a(74933),l=a(47507),p=a(24310),d=a(63303),c=(a(75035),a(85162));const m={id:"set-levg",title:"Set the leverage",description:"",sidebar_label:"Set the leverage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"",operationId:"setLevg",parameters:[{name:"apiKey",in:"header",description:"If not input, it'll use a default one",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, it'll use a default one",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"},400:{description:"Invalid Order",content:{"application/json":{example:{status:400,message:"Invalid Order"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},buyLeverage:{type:"string",decription:"Must be greater than 0 and less than the risk limit leverage."},sellLeverage:{type:"string",decription:"Must be greater than 0 and less than the risk limit leverage."}}}}},description:"To set the leverage before or after the position",required:!0},method:"post",path:"/contract/v3/private/position/set-leverage",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"string",buyLeverage:"string",sellLeverage:"string"},info:{description:"Here is decription\n",version:"2.0.0",title:"Swagger Bybit YAML",termsOfService:"http://swagger.io/terms/"},postman:{name:"Set the leverage",description:{content:"",type:"text/plain"},url:{path:["contract","v3","private","position","set-leverage"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, it'll use a default one",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, it'll use a default one",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/api-explorer/contract/swagger-bybit-yaml"},u=void 0,v={unversionedId:"api-explorer/contract/set-levg",id:"api-explorer/contract/set-levg",title:"Set the leverage",description:"",source:"@site/docs/api-explorer/contract/set-levg.api.mdx",sourceDirName:"api-explorer/contract",slug:"/api-explorer/contract/set-levg",permalink:"/docs-v2/docs/api-explorer/contract/set-levg",draft:!1,editUrl:"https://github.com/bybit-exchange/docs-v2/pulls/docs/api-explorer/contract/set-levg.api.mdx",tags:[],version:"current",frontMatter:{id:"set-levg",title:"Set the leverage",description:"",sidebar_label:"Set the leverage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"",operationId:"setLevg",parameters:[{name:"apiKey",in:"header",description:"If not input, it'll use a default one",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, it'll use a default one",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"},400:{description:"Invalid Order",content:{"application/json":{example:{status:400,message:"Invalid Order"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},buyLeverage:{type:"string",decription:"Must be greater than 0 and less than the risk limit leverage."},sellLeverage:{type:"string",decription:"Must be greater than 0 and less than the risk limit leverage."}}}}},description:"To set the leverage before or after the position",required:!0},method:"post",path:"/contract/v3/private/position/set-leverage",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"string",buyLeverage:"string",sellLeverage:"string"},info:{description:"Here is decription\n",version:"2.0.0",title:"Swagger Bybit YAML",termsOfService:"http://swagger.io/terms/"},postman:{name:"Set the leverage",description:{content:"",type:"text/plain"},url:{path:["contract","v3","private","position","set-leverage"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, it'll use a default one",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, it'll use a default one",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/api-explorer/contract/swagger-bybit-yaml"},sidebar:"contractSideBar",previous:{title:"Trade Endpoints",permalink:"/docs-v2/docs/api-explorer/contract/trade"},next:{title:"Account Asset",permalink:"/docs-v2/docs/api-explorer/contract/account"}},g={},y=[{value:"Set the leverage",id:"set-the-leverage",level:2}],h={toc:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"set-the-leverage"},"Set the leverage"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, it'll use a default one",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, it'll use a default one",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"To set the leverage before or after the position"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"symbol",required:!1,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"buyLeverage",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"sellLeverage",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)),(0,s.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Invalid Order")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "status": 400,\n  "message": "Invalid Order"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);