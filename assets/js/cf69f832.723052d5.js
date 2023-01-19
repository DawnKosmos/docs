"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5063],{56526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var i=r(87462),a=(r(67294),r(3905)),n=r(26389),s=(r(94891),r(74933)),d=(r(47507),r(24310),r(63303),r(75035),r(85162));const o={id:"open-order",title:"Get Open Orders (real-time)",description:"Get unfilled orders or partially filled orders",sidebar_label:"Get Open Orders (real-time)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Get unfilled orders or partially filled orders",operationId:"open-order",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","option","spot"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},{name:"settleCoin",in:"query",description:"Settle coin. Spot is not available",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"orderFilter",in:"query",description:"Order filter. Default\uff1aall kinds of orders",required:!1,schema:{type:"string",enum:["Order","StopOrder","tpslOrder"]}},{name:"openOnly",in:"query",description:"Whether to only query active orders, if openOnly = 0, only get active orders. If it is 1, return only the order data of the final status (cancelled/rejected/completely filled, etc.) in the last 10 minutes",required:!1,schema:{type:"integer",enum:[0,1],default:0}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/order/realtime",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Get Open Orders (real-time)",description:{content:"Get unfilled orders or partially filled orders",type:"text/plain"},url:{path:["v5","order","realtime"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Settle coin. Spot is not available",type:"text/plain"},key:"settleCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"Order filter. Default\uff1aall kinds of orders",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"Whether to only query active orders, if openOnly = 0, only get active orders. If it is 1, return only the order data of the final status (cancelled/rejected/completely filled, etc.) in the last 10 minutes",type:"text/plain"},key:"openOnly",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},l=void 0,p={unversionedId:"api-explorer/v5/trade/open-order",id:"api-explorer/v5/trade/open-order",title:"Get Open Orders (real-time)",description:"Get unfilled orders or partially filled orders",source:"@site/docs/api-explorer/v5/trade/open-order.api.mdx",sourceDirName:"api-explorer/v5/trade",slug:"/api-explorer/v5/trade/open-order",permalink:"/docs-v2/api-explorer/v5/trade/open-order",draft:!1,tags:[],version:"current",frontMatter:{id:"open-order",title:"Get Open Orders (real-time)",description:"Get unfilled orders or partially filled orders",sidebar_label:"Get Open Orders (real-time)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Get unfilled orders or partially filled orders",operationId:"open-order",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","option","spot"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},{name:"settleCoin",in:"query",description:"Settle coin. Spot is not available",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"orderFilter",in:"query",description:"Order filter. Default\uff1aall kinds of orders",required:!1,schema:{type:"string",enum:["Order","StopOrder","tpslOrder"]}},{name:"openOnly",in:"query",description:"Whether to only query active orders, if openOnly = 0, only get active orders. If it is 1, return only the order data of the final status (cancelled/rejected/completely filled, etc.) in the last 10 minutes",required:!1,schema:{type:"integer",enum:[0,1],default:0}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/order/realtime",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Get Open Orders (real-time)",description:{content:"Get unfilled orders or partially filled orders",type:"text/plain"},url:{path:["v5","order","realtime"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Settle coin. Spot is not available",type:"text/plain"},key:"settleCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"Order filter. Default\uff1aall kinds of orders",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"Whether to only query active orders, if openOnly = 0, only get active orders. If it is 1, return only the order data of the final status (cancelled/rejected/completely filled, etc.) in the last 10 minutes",type:"text/plain"},key:"openOnly",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Cancel Order",permalink:"/docs-v2/api-explorer/v5/trade/cancel-order"},next:{title:"Cancel All Orders",permalink:"/docs-v2/api-explorer/v5/trade/cancel-all"}},c={},m=[{value:"Get Open Orders (real-time)",id:"get-open-orders-real-time",level:2}],u={toc:m};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-open-orders-real-time"},"Get Open Orders (real-time)"),(0,a.kt)("p",null,"Get unfilled orders or partially filled orders"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","option","spot"]}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"settleCoin",in:"query",description:"Settle coin. Spot is not available",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderId",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderFilter",in:"query",description:"Order filter. Default\uff1aall kinds of orders",required:!1,schema:{type:"string",enum:["Order","StopOrder","tpslOrder"]}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"openOnly",in:"query",description:"Whether to only query active orders, if openOnly = 0, only get active orders. If it is 1, return only the order data of the final status (cancelled/rejected/completely filled, etc.) in the last 10 minutes",required:!1,schema:{type:"integer",enum:[0,1],default:0}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);