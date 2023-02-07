"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[36648],{5688:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>y});var t=o(87462),a=(o(67294),o(3905)),i=o(26389),n=o(94891),s=o(74933),p=(o(47507),o(24310)),l=(o(63303),o(75035),o(85162));const d={id:"borrow-margin-loan",title:"Borrow Margin Loan",description:"Borrow Margin Loan",sidebar_label:"Borrow Margin Loan",hide_title:!0,hide_table_of_contents:!0,api:{tags:["crossmargin"],description:"Borrow Margin Loan",operationId:"borrow-margin-loan",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{coin:{type:"string",description:"currency"},qty:{type:"string",description:"Amount To Borrow"}},required:["coin","qty"]}}}},method:"post",path:"/spot/v3/private/cross-margin-loan",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{coin:"string",qty:"string"},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Borrow Margin Loan",description:{content:"Borrow Margin Loan",type:"text/plain"},url:{path:["spot","v3","private","cross-margin-loan"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/crossmargin/bybit-spot-trade-explorer"},c=void 0,m={unversionedId:"api-explorer/spot/crossmargin/borrow-margin-loan",id:"api-explorer/spot/crossmargin/borrow-margin-loan",title:"Borrow Margin Loan",description:"Borrow Margin Loan",source:"@site/docs/api-explorer/spot/crossmargin/borrow-margin-loan.api.mdx",sourceDirName:"api-explorer/spot/crossmargin",slug:"/api-explorer/spot/crossmargin/borrow-margin-loan",permalink:"/docs/zh-TW/api-explorer/spot/crossmargin/borrow-margin-loan",draft:!1,tags:[],version:"current",frontMatter:{id:"borrow-margin-loan",title:"Borrow Margin Loan",description:"Borrow Margin Loan",sidebar_label:"Borrow Margin Loan",hide_title:!0,hide_table_of_contents:!0,api:{tags:["crossmargin"],description:"Borrow Margin Loan",operationId:"borrow-margin-loan",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{coin:{type:"string",description:"currency"},qty:{type:"string",description:"Amount To Borrow"}},required:["coin","qty"]}}}},method:"post",path:"/spot/v3/private/cross-margin-loan",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{coin:"string",qty:"string"},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Borrow Margin Loan",description:{content:"Borrow Margin Loan",type:"text/plain"},url:{path:["spot","v3","private","cross-margin-loan"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/crossmargin/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Spot Margin Trade",permalink:"/docs/zh-TW/api-explorer/spot/crossmargin/crossmargin"},next:{title:"Redeem",permalink:"/docs/zh-TW/api-explorer/spot/crossmargin/redeem"}},u={},y=[{value:"Borrow Margin Loan",id:"borrow-margin-loan",level:2}],g={toc:y};function b(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},g,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"borrow-margin-loan"},"Borrow Margin Loan"),(0,a.kt)("p",null,"Borrow Margin Loan"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(n.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"coin",required:!0,schemaDescription:"currency",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"qty",required:!0,schemaDescription:"Amount To Borrow",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}b.isMDXComponent=!0}}]);