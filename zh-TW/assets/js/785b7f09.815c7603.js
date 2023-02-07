"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[28106],{89289:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=i(87462),n=(i(67294),i(3905)),a=i(26389),s=(i(94891),i(74933)),p=(i(47507),i(24310),i(63303),i(75035),i(85162));const d={id:"index-price-kline",title:"Get Index Price Kline",description:"Get Index Price Kline data",sidebar_label:"Get Index Price Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get Index Price Kline data",operationId:"index-price-kline",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","spot"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},{name:"start",in:"query",description:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},{name:"end",in:"query",description:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/index-price-kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Index Price Kline",description:{content:"Get Index Price Kline data",type:"text/plain"},url:{path:["v5","market","index-price-kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},m=void 0,l={unversionedId:"api-explorer/v5/market/index-price-kline",id:"api-explorer/v5/market/index-price-kline",title:"Get Index Price Kline",description:"Get Index Price Kline data",source:"@site/docs/api-explorer/v5/market/index-price-kline.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/index-price-kline",permalink:"/docs/zh-TW/api-explorer/v5/market/index-price-kline",draft:!1,tags:[],version:"current",frontMatter:{id:"index-price-kline",title:"Get Index Price Kline",description:"Get Index Price Kline data",sidebar_label:"Get Index Price Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get Index Price Kline data",operationId:"index-price-kline",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","spot"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},{name:"start",in:"query",description:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},{name:"end",in:"query",description:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/index-price-kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Index Price Kline",description:{content:"Get Index Price Kline data",type:"text/plain"},url:{path:["v5","market","index-price-kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Mark Price Kline",permalink:"/docs/zh-TW/api-explorer/v5/market/mark-price-kline"},next:{title:"Get Premium Index Price Kline",permalink:"/docs/zh-TW/api-explorer/v5/market/premium-index-price-kline"}},o={},c=[{value:"Get Index Price Kline",id:"get-index-price-kline",level:2}],u={toc:c};function y(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-index-price-kline"},"Get Index Price Kline"),(0,n.kt)("p",null,"Get Index Price Kline data"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","spot"]}}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"start",in:"query",description:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"end",in:"query",description:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);