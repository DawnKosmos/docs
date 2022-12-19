"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4215],{99048:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=t(87462),a=(t(67294),t(3905)),n=t(26389),s=(t(94891),t(74933)),d=(t(47507),t(24310),t(63303),t(75035),t(85162));const o={id:"open-order",title:"Get Open Orders",description:"Get unfilled orders. Please read [API-DOC](../../../../v3/derivatives/rest-contract/order/open-order#) first.",sidebar_label:"Get Open Orders",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Get unfilled orders. Please read [API-DOC](../../../../v3/derivatives/rest-contract/order/open-order#) first.",operationId:"open-order",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!1,schema:{type:"string",enum:["linear","inverse","option"],default:"linear"}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},{name:"settleCoin",in:"query",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder"]}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/contract/v3/private/order/unfilled-orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Get Open Orders",description:{content:"Get unfilled orders. Please read [API-DOC](../../../../v3/derivatives/rest-contract/order/open-order#) first.",type:"text/plain"},url:{path:["contract","v3","private","order","unfilled-orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,key:"settleCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"Order filter",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},p=void 0,l={unversionedId:"api-explorer/derivatives/trade/contract/open-order",id:"api-explorer/derivatives/trade/contract/open-order",title:"Get Open Orders",description:"Get unfilled orders. Please read [API-DOC](../../../../v3/derivatives/rest-contract/order/open-order#) first.",source:"@site/docs/api-explorer/derivatives/trade/contract/open-order.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/open-order",permalink:"/docs-v2/zh/api-explorer/derivatives/trade/contract/open-order",draft:!1,tags:[],version:"current",frontMatter:{id:"open-order",title:"Get Open Orders",description:"Get unfilled orders. Please read [API-DOC](../../../../v3/derivatives/rest-contract/order/open-order#) first.",sidebar_label:"Get Open Orders",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Get unfilled orders. Please read [API-DOC](../../../../v3/derivatives/rest-contract/order/open-order#) first.",operationId:"open-order",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!1,schema:{type:"string",enum:["linear","inverse","option"],default:"linear"}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},{name:"settleCoin",in:"query",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder"]}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/contract/v3/private/order/unfilled-orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Get Open Orders",description:{content:"Get unfilled orders. Please read [API-DOC](../../../../v3/derivatives/rest-contract/order/open-order#) first.",type:"text/plain"},url:{path:["contract","v3","private","order","unfilled-orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,key:"settleCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"Order filter",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Place Order",permalink:"/docs-v2/zh/api-explorer/derivatives/trade/contract/create-order"},next:{title:"Replace Order",permalink:"/docs-v2/zh/api-explorer/derivatives/trade/contract/replace-order"}},c={},m=[{value:"Get Open Orders",id:"get-open-orders",level:2}],u={toc:m};function y(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-open-orders"},"Get Open Orders"),(0,a.kt)("p",null,"Get unfilled orders. Please read ",(0,a.kt)("a",{parentName:"p",href:"../../../../v3/derivatives/rest-contract/order/open-order#"},"API-DOC")," first."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!1,schema:{type:"string",enum:["linear","inverse","option"],default:"linear"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"settleCoin",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderId",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder"]}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);