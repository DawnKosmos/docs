"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[39626],{54016:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var o=i(87462),n=(i(67294),i(3905)),s=i(26389),r=(i(94891),i(74933)),a=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"position-info",title:"Get Position Info",description:"Get Position Info",sidebar_label:"Get Position Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],operationId:"position-info",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","option"]}},{name:"symbol",in:"query",description:"Symbol name",schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. For option only",required:!1,schema:{type:"string"}},{name:"settleCoin",in:"query",description:"Used for linear, symbol or settleCoin is required",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"1-200. max 200",required:!1,schema:{type:"integer",default:200}},{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},description:"Get Position Info",method:"get",path:"/v5/position/list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Get Position Info",description:{type:"text/plain"},url:{path:["v5","position","list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. For option only",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Used for linear, symbol or settleCoin is required",type:"text/plain"},key:"settleCoin",value:""},{disabled:!1,description:{content:"1-200. max 200",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},d=void 0,l={unversionedId:"api-explorer/v5/position/position-info",id:"api-explorer/v5/position/position-info",title:"Get Position Info",description:"Get Position Info",source:"@site/docs/api-explorer/v5/position/position-info.api.mdx",sourceDirName:"api-explorer/v5/position",slug:"/api-explorer/v5/position/position-info",permalink:"/docs/zh-TW/api-explorer/v5/position/position-info",draft:!1,tags:[],version:"current",frontMatter:{id:"position-info",title:"Get Position Info",description:"Get Position Info",sidebar_label:"Get Position Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],operationId:"position-info",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","option"]}},{name:"symbol",in:"query",description:"Symbol name",schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. For option only",required:!1,schema:{type:"string"}},{name:"settleCoin",in:"query",description:"Used for linear, symbol or settleCoin is required",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"1-200. max 200",required:!1,schema:{type:"integer",default:200}},{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},description:"Get Position Info",method:"get",path:"/v5/position/list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Get Position Info",description:{type:"text/plain"},url:{path:["v5","position","list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. For option only",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Used for linear, symbol or settleCoin is required",type:"text/plain"},key:"settleCoin",value:""},{disabled:!1,description:{content:"1-200. max 200",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Position",permalink:"/docs/zh-TW/api-explorer/v5/position/position"},next:{title:"Set Leverage",permalink:"/docs/zh-TW/api-explorer/v5/position/leverage"}},c={},u=[{value:"Get Position Info",id:"get-position-info",level:2}],m={toc:u};function y(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-position-info"},"Get Position Info"),(0,n.kt)("p",null,"Get Position Info"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","option"]}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin. For option only",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"settleCoin",in:"query",description:"Used for linear, symbol or settleCoin is required",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-200. max 200",required:!1,schema:{type:"integer",default:200}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(a.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);