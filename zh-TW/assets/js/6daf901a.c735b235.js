"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7328],{97898:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=i(87462),a=(i(67294),i(3905)),n=i(26389),o=(i(94891),i(74933)),p=(i(47507),i(24310),i(63303),i(75035),i(85162));const s={id:"delivery-price",title:"Get Option Delivery price",description:"Get delivery price of option",sidebar_label:"Get Option Delivery price",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get delivery price of option",operationId:"delivery-price",parameters:[{name:"category",in:"query",description:"Product type. option only",required:!0,schema:{type:"array",items:{type:"string",enum:["option"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. Return BTC by default",required:!1,schema:{type:"string",default:"BTC"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"string",default:50}},{name:"cursor",in:"query",description:"The cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/delivery-price",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Option Delivery price",description:{content:"Get delivery price of option",type:"text/plain"},url:{path:["v5","market","delivery-price"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type. option only",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. Return BTC by default",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"The cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},l=void 0,d={unversionedId:"api-explorer/v5/market/delivery-price",id:"api-explorer/v5/market/delivery-price",title:"Get Option Delivery price",description:"Get delivery price of option",source:"@site/docs/api-explorer/v5/market/delivery-price.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/delivery-price",permalink:"/docs-v2/zh-TW/api-explorer/v5/market/delivery-price",draft:!1,tags:[],version:"current",frontMatter:{id:"delivery-price",title:"Get Option Delivery price",description:"Get delivery price of option",sidebar_label:"Get Option Delivery price",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get delivery price of option",operationId:"delivery-price",parameters:[{name:"category",in:"query",description:"Product type. option only",required:!0,schema:{type:"array",items:{type:"string",enum:["option"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. Return BTC by default",required:!1,schema:{type:"string",default:"BTC"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"string",default:50}},{name:"cursor",in:"query",description:"The cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/delivery-price",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Option Delivery price",description:{content:"Get delivery price of option",type:"text/plain"},url:{path:["v5","market","delivery-price"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type. option only",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. Return BTC by default",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"The cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Risk Limit",permalink:"/docs-v2/zh-TW/api-explorer/v5/market/risk-limit"},next:{title:"Introduction",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/bybit-v-5-trade-api-explorer"}},c={},m=[{value:"Get Option Delivery price",id:"get-option-delivery-price",level:2}],y={toc:m};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-option-delivery-price"},"Get Option Delivery price"),(0,a.kt)("p",null,"Get delivery price of option"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type. option only",required:!0,schema:{type:"array",items:{type:"string",enum:["option"]}}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin. Return BTC by default",required:!1,schema:{type:"string",default:"BTC"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"string",default:50}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"The cursor, used for pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}u.isMDXComponent=!0}}]);