"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4945],{80227:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=i(87462),n=(i(67294),i(3905)),a=i(26389),d=(i(94891),i(74933)),s=(i(47507),i(24310),i(63303),i(75035),i(85162));const o={id:"open-order",title:"Get Open Orders",description:"Get unfilled orders",sidebar_label:"Get Open Orders",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Get unfilled orders",operationId:"open-order",parameters:[{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"",required:!0,schema:{type:"string",enum:["linear","option"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"for option only",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",description:"Either orderId or orderLinkId is required",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"Either orderId or orderLinkId is required",required:!1,schema:{type:"string"}},{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder"]}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/unified/v3/private/order/unfilled-orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Get Open Orders",description:{content:"Get unfilled orders",type:"text/plain"},url:{path:["unified","v3","private","order","unfilled-orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"for option only",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Either orderId or orderLinkId is required",type:"text/plain"},key:"orderId",value:""},{disabled:!1,description:{content:"Either orderId or orderLinkId is required",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"Order filter",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"Please pass unified account api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"Please pass unified account api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},p=void 0,l={unversionedId:"api-explorer/derivatives/trade/unified/open-order",id:"api-explorer/derivatives/trade/unified/open-order",title:"Get Open Orders",description:"Get unfilled orders",source:"@site/docs/api-explorer/derivatives/trade/unified/open-order.api.mdx",sourceDirName:"api-explorer/derivatives/trade/unified",slug:"/api-explorer/derivatives/trade/unified/open-order",permalink:"/docs-v2/zh/api-explorer/derivatives/trade/unified/open-order",draft:!1,tags:[],version:"current",frontMatter:{id:"open-order",title:"Get Open Orders",description:"Get unfilled orders",sidebar_label:"Get Open Orders",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Get unfilled orders",operationId:"open-order",parameters:[{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"",required:!0,schema:{type:"string",enum:["linear","option"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"for option only",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",description:"Either orderId or orderLinkId is required",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"Either orderId or orderLinkId is required",required:!1,schema:{type:"string"}},{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder"]}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/unified/v3/private/order/unfilled-orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Get Open Orders",description:{content:"Get unfilled orders",type:"text/plain"},url:{path:["unified","v3","private","order","unfilled-orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"for option only",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Either orderId or orderLinkId is required",type:"text/plain"},key:"orderId",value:""},{disabled:!1,description:{content:"Either orderId or orderLinkId is required",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"Order filter",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"Please pass unified account api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"Please pass unified account api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Create order",permalink:"/docs-v2/zh/api-explorer/derivatives/trade/unified/create-order"},next:{title:"Replace Order",permalink:"/docs-v2/zh/api-explorer/derivatives/trade/unified/replace-order"}},c={},u=[{value:"Get Open Orders",id:"get-open-orders",level:2}],m={toc:u};function y(e){let{components:r,...i}=e;return(0,n.kt)("wrapper",(0,t.Z)({},m,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-open-orders"},"Get Open Orders"),(0,n.kt)("p",null,"Get unfilled orders"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"",required:!0,schema:{type:"string",enum:["linear","option"]}},mdxType:"ParamsItem"}),(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"for option only",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"orderId",in:"query",description:"Either orderId or orderLinkId is required",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"orderLinkId",in:"query",description:"Either orderId or orderLinkId is required",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder"]}},mdxType:"ParamsItem"}),(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(s.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);