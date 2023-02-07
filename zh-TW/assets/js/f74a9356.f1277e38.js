"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[51250],{46118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var r=a(87462),i=(a(67294),a(3905)),s=a(26389),o=a(94891),n=a(74933),p=(a(47507),a(24310)),l=(a(63303),a(75035),a(85162));const d={id:"set-leverage",title:"Set Leverage",description:"Set leverage for margin trade",sidebar_label:"Set Leverage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["margin-trade"],description:"Set leverage for margin trade",operationId:"set-leverage",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{leverage:{type:"integer",description:"Levearge, support 2-5",enum:[2,3,4,5],example:5},required:["leverage"]}}}}},method:"post",path:"/v5/spot-margin-trade/set-leverage",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{leverage:5},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade"},postman:{name:"Set Leverage",description:{content:"Set leverage for margin trade",type:"text/plain"},url:{path:["v5","spot-margin-trade","set-leverage"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/spot-margin/bybit-open-api-v-5-explorer-spot-margin-trade"},c=void 0,m={unversionedId:"api-explorer/v5/spot-margin/set-leverage",id:"api-explorer/v5/spot-margin/set-leverage",title:"Set Leverage",description:"Set leverage for margin trade",source:"@site/docs/api-explorer/v5/spot-margin/set-leverage.api.mdx",sourceDirName:"api-explorer/v5/spot-margin",slug:"/api-explorer/v5/spot-margin/set-leverage",permalink:"/docs/zh-TW/api-explorer/v5/spot-margin/set-leverage",draft:!1,tags:[],version:"current",frontMatter:{id:"set-leverage",title:"Set Leverage",description:"Set leverage for margin trade",sidebar_label:"Set Leverage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["margin-trade"],description:"Set leverage for margin trade",operationId:"set-leverage",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{leverage:{type:"integer",description:"Levearge, support 2-5",enum:[2,3,4,5],example:5},required:["leverage"]}}}}},method:"post",path:"/v5/spot-margin-trade/set-leverage",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{leverage:5},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade"},postman:{name:"Set Leverage",description:{content:"Set leverage for margin trade",type:"text/plain"},url:{path:["v5","spot-margin-trade","set-leverage"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/spot-margin/bybit-open-api-v-5-explorer-spot-margin-trade"},sidebar:"apiExplorerSideBar",previous:{title:"Toggle Margin Trade",permalink:"/docs/zh-TW/api-explorer/v5/spot-margin/switch-mode"},next:{title:"Derivatives",permalink:"/docs/zh-TW/api-explorer/derivatives/category/"}},u={},v=[{value:"Set Leverage",id:"set-leverage",level:2}],g={toc:v};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"set-leverage"},"Set Leverage"),(0,i.kt)("p",null,"Set leverage for margin trade"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"leverage",required:!1,schemaDescription:"Levearge, support 2-5",schemaName:"integer",qualifierMessage:"**Possible values:** [`2`, `3`, `4`, `5`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"required",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);