"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8772],{28554:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=i(87462),a=(i(67294),i(3905)),n=i(26389),s=(i(94891),i(74933)),d=(i(47507),i(24310),i(63303),i(75035),i(85162));const o={id:"execution",title:"Get Execution List",description:"Get execution list. Please read [API-DOC](../../../../derivatives/contract/execution-list#) first.",sidebar_label:"Get Execution List",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Get execution list. Please read [API-DOC](../../../../derivatives/contract/execution-list#) first.",operationId:"execution",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!1,schema:{type:"string",enum:["linear","inverse","option"],default:"linear"}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"},example:null},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"execType",in:"query",description:"Execution type",enum:["Trade","AdlTrade","Funding","BustTrade","Settle"],required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"1-200. max 200",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/contract/v3/private/execution/list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Get Execution List",description:{content:"Get execution list. Please read [API-DOC](../../../../derivatives/contract/execution-list#) first.",type:"text/plain"},url:{path:["contract","v3","private","execution","list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Execution type (This can only be one of Trade,AdlTrade,Funding,BustTrade,Settle)",type:"text/plain"},key:"execType",value:""},{disabled:!1,description:{content:"1-200. max 200",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},c=void 0,p={unversionedId:"api-explorer/derivatives/trade/contract/execution",id:"api-explorer/derivatives/trade/contract/execution",title:"Get Execution List",description:"Get execution list. Please read [API-DOC](../../../../derivatives/contract/execution-list#) first.",source:"@site/docs/api-explorer/derivatives/trade/contract/execution.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/execution",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/execution",draft:!1,tags:[],version:"current",frontMatter:{id:"execution",title:"Get Execution List",description:"Get execution list. Please read [API-DOC](../../../../derivatives/contract/execution-list#) first.",sidebar_label:"Get Execution List",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Get execution list. Please read [API-DOC](../../../../derivatives/contract/execution-list#) first.",operationId:"execution",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!1,schema:{type:"string",enum:["linear","inverse","option"],default:"linear"}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"},example:null},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"execType",in:"query",description:"Execution type",enum:["Trade","AdlTrade","Funding","BustTrade","Settle"],required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"1-200. max 200",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/contract/v3/private/execution/list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Get Execution List",description:{content:"Get execution list. Please read [API-DOC](../../../../derivatives/contract/execution-list#) first.",type:"text/plain"},url:{path:["contract","v3","private","execution","list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Execution type (This can only be one of Trade,AdlTrade,Funding,BustTrade,Settle)",type:"text/plain"},key:"execType",value:""},{disabled:!1,description:{content:"1-200. max 200",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Set Risk Limit",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/set-risk-limit"},next:{title:"Get Closed PnL",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/close-pnl"}},l={},m=[{value:"Get Execution List",id:"get-execution-list",level:2}],u={toc:m};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-execution-list"},"Get Execution List"),(0,a.kt)("p",null,"Get execution list. Please read ",(0,a.kt)("a",{parentName:"p",href:"../../../../derivatives/contract/execution-list#"},"API-DOC")," first."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!1,schema:{type:"string",enum:["linear","inverse","option"],default:"linear"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"},example:null},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderId",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"execType",in:"query",description:"Execution type",enum:["Trade","AdlTrade","Funding","BustTrade","Settle"],required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-200. max 200",required:!1,schema:{type:"integer",default:50}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);