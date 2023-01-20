"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9184],{19071:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var a=t(87462),i=(t(67294),t(3905)),o=t(26389),d=(t(94891),t(74933)),s=(t(47507),t(24310),t(63303),t(75035),t(85162));const n={id:"open-order",title:"Get Open Orders",description:"Get Open Orders.",sidebar_label:"Get Open Orders",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Get Open Orders.",operationId:"open-order",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"symbol",in:"query",description:"Name of the trading pair",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",description:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Default value is 500, max 500",required:!1,schema:{type:"string",default:500}},{name:"orderCategory",in:"query",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",required:!1,schema:{type:"array",items:{type:"integer",enum:[0,1]}}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/private/open-orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Get Open Orders",description:{content:"Get Open Orders.",type:"text/plain"},url:{path:["spot","v3","private","open-orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Name of the trading pair",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",type:"text/plain"},key:"orderId",value:""},{disabled:!1,description:{content:"Default value is 500, max 500",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",type:"text/plain"},key:"orderCategory",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},p=void 0,l={unversionedId:"api-explorer/spot/trade/open-order",id:"api-explorer/spot/trade/open-order",title:"Get Open Orders",description:"Get Open Orders.",source:"@site/docs/api-explorer/spot/trade/open-order.api.mdx",sourceDirName:"api-explorer/spot/trade",slug:"/api-explorer/spot/trade/open-order",permalink:"/docs-v2/api-explorer/spot/trade/open-order",draft:!1,tags:[],version:"current",frontMatter:{id:"open-order",title:"Get Open Orders",description:"Get Open Orders.",sidebar_label:"Get Open Orders",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Get Open Orders.",operationId:"open-order",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"symbol",in:"query",description:"Name of the trading pair",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",description:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Default value is 500, max 500",required:!1,schema:{type:"string",default:500}},{name:"orderCategory",in:"query",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",required:!1,schema:{type:"array",items:{type:"integer",enum:[0,1]}}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/private/open-orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Get Open Orders",description:{content:"Get Open Orders.",type:"text/plain"},url:{path:["spot","v3","private","open-orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Name of the trading pair",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",type:"text/plain"},key:"orderId",value:""},{disabled:!1,description:{content:"Default value is 500, max 500",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",type:"text/plain"},key:"orderCategory",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Batch Cancel Active Order By IDs",permalink:"/docs-v2/api-explorer/spot/trade/batch-cancel-active-order-by-ids"},next:{title:"Get Order History",permalink:"/docs-v2/api-explorer/spot/trade/order-history"}},c={},m=[{value:"Get Open Orders",id:"get-open-orders",level:2}],u={toc:m};function y(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-open-orders"},"Get Open Orders"),(0,i.kt)("p",null,"Get Open Orders."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Name of the trading pair",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"orderId",in:"query",description:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Default value is 500, max 500",required:!1,schema:{type:"string",default:500}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"orderCategory",in:"query",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",required:!1,schema:{type:"array",items:{type:"integer",enum:[0,1]}}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(s.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);