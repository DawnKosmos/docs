"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[633],{71041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905)),i=a(26389),r=(a(94891),a(74933)),c=(a(47507),a(24310),a(63303),a(75035),a(85162));const s={id:"wallet",title:"Get Wallet Balance",description:"Get wallet balance. Please read [API-DOC](../../../v5/account/wallet-balance#) first.",sidebar_label:"Get Wallet Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get wallet balance. Please read [API-DOC](../../../v5/account/wallet-balance#) first.",operationId:"wallet",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["UNIFIED"]}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/wallet-balance",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Wallet Balance",description:{content:"Get wallet balance. Please read [API-DOC](../../../v5/account/wallet-balance#) first.",type:"text/plain"},url:{path:["v5","account","wallet-balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Account type",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},o=void 0,p={unversionedId:"api-explorer/v5/account/wallet",id:"api-explorer/v5/account/wallet",title:"Get Wallet Balance",description:"Get wallet balance. Please read [API-DOC](../../../v5/account/wallet-balance#) first.",source:"@site/docs/api-explorer/v5/account/wallet.api.mdx",sourceDirName:"api-explorer/v5/account",slug:"/api-explorer/v5/account/wallet",permalink:"/docs-v2/zh-TW/api-explorer/v5/account/wallet",draft:!1,tags:[],version:"current",frontMatter:{id:"wallet",title:"Get Wallet Balance",description:"Get wallet balance. Please read [API-DOC](../../../v5/account/wallet-balance#) first.",sidebar_label:"Get Wallet Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get wallet balance. Please read [API-DOC](../../../v5/account/wallet-balance#) first.",operationId:"wallet",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["UNIFIED"]}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/wallet-balance",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Wallet Balance",description:{content:"Get wallet balance. Please read [API-DOC](../../../v5/account/wallet-balance#) first.",type:"text/plain"},url:{path:["v5","account","wallet-balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Account type",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Account",permalink:"/docs-v2/zh-TW/api-explorer/v5/account/account"},next:{title:"Upgrade Unified Account",permalink:"/docs-v2/zh-TW/api-explorer/v5/account/upgrade-uta"}},d={},u=[{value:"Get Wallet Balance",id:"get-wallet-balance",level:2}],m={toc:u};function y(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-wallet-balance"},"Get Wallet Balance"),(0,l.kt)("p",null,"Get wallet balance. Please read ",(0,l.kt)("a",{parentName:"p",href:"../../../v5/account/wallet-balance#"},"API-DOC")," first."),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Query Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["UNIFIED"]}},mdxType:"ParamsItem"}),(0,l.kt)(r.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Header Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,l.kt)(r.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"successful operation")),(0,l.kt)("div",null)))))}y.isMDXComponent=!0}}]);