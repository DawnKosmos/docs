"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[81188],{77862:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=t(87462),a=(t(67294),t(3905)),o=t(26389),s=(t(94891),t(74933)),d=(t(47507),t(24310),t(63303),t(75035),t(85162));const n={id:"order-history",title:"Get Order History",description:"Get Order History",sidebar_label:"Get Order History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Get Order History",operationId:"order-history",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"symbol",in:"query",description:"Name of the trading pair",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",description:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Default value is 100, max 500",required:!1,schema:{type:"string",default:100}},{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"orderCategory",in:"query",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",required:!1,schema:{type:"array",items:{type:"integer",enum:[0,1]}}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/private/history-orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Get Order History",description:{content:"Get Order History",type:"text/plain"},url:{path:["spot","v3","private","history-orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Name of the trading pair",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",type:"text/plain"},key:"orderId",value:""},{disabled:!1,description:{content:"Default value is 100, max 500",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Start time, unit in millisecond",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"End time, unit in millisecond",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",type:"text/plain"},key:"orderCategory",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},p=void 0,l={unversionedId:"api-explorer/spot/trade/order-history",id:"api-explorer/spot/trade/order-history",title:"Get Order History",description:"Get Order History",source:"@site/docs/api-explorer/spot/trade/order-history.api.mdx",sourceDirName:"api-explorer/spot/trade",slug:"/api-explorer/spot/trade/order-history",permalink:"/docs/api-explorer/spot/trade/order-history",draft:!1,tags:[],version:"current",frontMatter:{id:"order-history",title:"Get Order History",description:"Get Order History",sidebar_label:"Get Order History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Get Order History",operationId:"order-history",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"symbol",in:"query",description:"Name of the trading pair",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",description:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Default value is 100, max 500",required:!1,schema:{type:"string",default:100}},{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"orderCategory",in:"query",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",required:!1,schema:{type:"array",items:{type:"integer",enum:[0,1]}}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/private/history-orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Get Order History",description:{content:"Get Order History",type:"text/plain"},url:{path:["spot","v3","private","history-orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Name of the trading pair",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",type:"text/plain"},key:"orderId",value:""},{disabled:!1,description:{content:"Default value is 100, max 500",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Start time, unit in millisecond",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"End time, unit in millisecond",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",type:"text/plain"},key:"orderCategory",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Open Orders",permalink:"/docs/api-explorer/spot/trade/open-order"},next:{title:"Get Trade History",permalink:"/docs/api-explorer/spot/trade/trade-history"}},m={},c=[{value:"Get Order History",id:"get-order-history",level:2}],y={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-order-history"},"Get Order History"),(0,a.kt)("p",null,"Get Order History"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Name of the trading pair",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderId",in:"query",description:"Specify orderId to return all the orders that orderId of which are smaller than this particular one for pagination purpose",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Default value is 100, max 500",required:!1,schema:{type:"string",default:100}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"orderCategory",in:"query",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",required:!1,schema:{type:"array",items:{type:"integer",enum:[0,1]}}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}u.isMDXComponent=!0}}]);