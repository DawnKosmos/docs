"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3568],{1395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var a=r(87462),s=(r(67294),r(3905)),i=r(26389),n=(r(94891),r(74933)),o=(r(47507),r(24310),r(63303),r(75035),r(85162));const p={id:"settlement-record",title:"Get USDC Perpetual Settlement",description:"Get Settlement Record.",sidebar_label:"Get USDC Perpetual Settlement",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get Settlement Record.",operationId:"settlement-record",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear"]}},{name:"symbol",in:"query",description:"Symbol name. USDC perp symbol only",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/settlement-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get USDC Perpetual Settlement",description:{content:"Get Settlement Record.",type:"text/plain"},url:{path:["v5","asset","settlement-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name. USDC perp symbol only",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},l=void 0,d={unversionedId:"api-explorer/v5/asset/settlement-record",id:"api-explorer/v5/asset/settlement-record",title:"Get USDC Perpetual Settlement",description:"Get Settlement Record.",source:"@site/docs/api-explorer/v5/asset/settlement-record.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/settlement-record",permalink:"/docs-v2/zh-TW/api-explorer/v5/asset/settlement-record",draft:!1,tags:[],version:"current",frontMatter:{id:"settlement-record",title:"Get USDC Perpetual Settlement",description:"Get Settlement Record.",sidebar_label:"Get USDC Perpetual Settlement",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get Settlement Record.",operationId:"settlement-record",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear"]}},{name:"symbol",in:"query",description:"Symbol name. USDC perp symbol only",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/settlement-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get USDC Perpetual Settlement",description:{content:"Get Settlement Record.",type:"text/plain"},url:{path:["v5","asset","settlement-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name. USDC perp symbol only",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Option Delivery Record",permalink:"/docs-v2/zh-TW/api-explorer/v5/asset/delivery-record"},next:{title:"Get Asset Info",permalink:"/docs-v2/zh-TW/api-explorer/v5/asset/asset-info"}},c={},m=[{value:"Get USDC Perpetual Settlement",id:"get-usdc-perpetual-settlement",level:2}],u={toc:m};function y(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-usdc-perpetual-settlement"},"Get USDC Perpetual Settlement"),(0,s.kt)("p",null,"Get Settlement Record."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear"]}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name. USDC perp symbol only",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}y.isMDXComponent=!0}}]);