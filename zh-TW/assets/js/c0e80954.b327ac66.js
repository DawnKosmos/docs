"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5175],{69149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=r(87462),a=(r(67294),r(3905)),s=r(26389),d=(r(94891),r(74933)),n=(r(47507),r(24310),r(63303),r(75035),r(85162));const o={id:"order-list",title:"Get Order List",description:"Get order history.",sidebar_label:"Get Order List",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Get order history.",operationId:"order-list",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"orderStatus",in:"query",description:"Order status",required:!1,schema:{type:"string"}},{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder"]}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/contract/v3/private/order/list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Get Order List",description:{content:"Get order history.",type:"text/plain"},url:{path:["contract","v3","private","order","list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"Order status",type:"text/plain"},key:"orderStatus",value:""},{disabled:!1,description:{content:"Order filter",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},p=void 0,l={unversionedId:"api-explorer/derivatives/trade/contract/order-list",id:"api-explorer/derivatives/trade/contract/order-list",title:"Get Order List",description:"Get order history.",source:"@site/docs/api-explorer/derivatives/trade/contract/order-list.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/order-list",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/order-list",draft:!1,tags:[],version:"current",frontMatter:{id:"order-list",title:"Get Order List",description:"Get order history.",sidebar_label:"Get Order List",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Get order history.",operationId:"order-list",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"orderStatus",in:"query",description:"Order status",required:!1,schema:{type:"string"}},{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder"]}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/contract/v3/private/order/list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Get Order List",description:{content:"Get order history.",type:"text/plain"},url:{path:["contract","v3","private","order","list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"Order status",type:"text/plain"},key:"orderStatus",value:""},{disabled:!1,description:{content:"Order filter",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Cancel All Order",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/cancel-all"},next:{title:"My Position",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/position-info"}},c={},m=[{value:"Get Order List",id:"get-order-list",level:2}],u={toc:m};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-order-list"},"Get Order List"),(0,a.kt)("p",null,"Get order history."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"orderId",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"orderStatus",in:"query",description:"Order status",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder"]}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor to pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);