"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4873],{67747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var a=r(87462),i=(r(67294),r(3905)),o=r(26389),s=(r(94891),r(74933)),n=(r(47507),r(24310),r(63303),r(75035),r(85162));const p={id:"ticker",title:"Get Tickers",description:"Get all latest information of symbols. All parameters are needed for OPTION",sidebar_label:"Get Tickers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get all latest information of symbols. All parameters are needed for OPTION",operationId:"ticker",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"baseCoin",in:"query",description:"for option ONLY, baseCoin or symbol must be passed when query option",required:!1,schema:{type:"string"}},{name:"expDate",in:"query",description:"Expiry date. For option only. Default is all, and the parameter format is 25MAR22.",required:!1,schema:{type:"string"}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/tickers",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Tickers",description:{content:"Get all latest information of symbols. All parameters are needed for OPTION",type:"text/plain"},url:{path:["v5","market","tickers"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"for option ONLY, baseCoin or symbol must be passed when query option",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Expiry date. For option only. Default is all, and the parameter format is 25MAR22.",type:"text/plain"},key:"expDate",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},l=void 0,m={unversionedId:"api-explorer/v5/market/ticker",id:"api-explorer/v5/market/ticker",title:"Get Tickers",description:"Get all latest information of symbols. All parameters are needed for OPTION",source:"@site/docs/api-explorer/v5/market/ticker.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/ticker",permalink:"/docs/api-explorer/v5/market/ticker",draft:!1,tags:[],version:"current",frontMatter:{id:"ticker",title:"Get Tickers",description:"Get all latest information of symbols. All parameters are needed for OPTION",sidebar_label:"Get Tickers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get all latest information of symbols. All parameters are needed for OPTION",operationId:"ticker",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"baseCoin",in:"query",description:"for option ONLY, baseCoin or symbol must be passed when query option",required:!1,schema:{type:"string"}},{name:"expDate",in:"query",description:"Expiry date. For option only. Default is all, and the parameter format is 25MAR22.",required:!1,schema:{type:"string"}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/tickers",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Tickers",description:{content:"Get all latest information of symbols. All parameters are needed for OPTION",type:"text/plain"},url:{path:["v5","market","tickers"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"for option ONLY, baseCoin or symbol must be passed when query option",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Expiry date. For option only. Default is all, and the parameter format is 25MAR22.",type:"text/plain"},key:"expDate",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Order Book",permalink:"/docs/api-explorer/v5/market/orderbook"},next:{title:"Get Funding Rate History",permalink:"/docs/api-explorer/v5/market/funding-history"}},d={},c=[{value:"Get Tickers",id:"get-tickers",level:2}],y={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-tickers"},"Get Tickers"),(0,i.kt)("p",null,"Get all latest information of symbols. All parameters are needed for OPTION"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"for option ONLY, baseCoin or symbol must be passed when query option",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"expDate",in:"query",description:"Expiry date. For option only. Default is all, and the parameter format is 25MAR22.",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}u.isMDXComponent=!0}}]);