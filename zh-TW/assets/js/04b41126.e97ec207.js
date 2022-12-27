"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1192],{21121:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>d,toc:()=>u});var r=i(87462),a=(i(67294),i(3905)),n=i(26389),s=(i(94891),i(74933)),o=(i(47507),i(24310),i(63303),i(75035),i(85162));const m={id:"funding-history",title:"Funding Rate History",description:"Get historical funding rate",sidebar_label:"Funding Rate History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get historical funding rate",operationId:"funding-history",parameters:[{name:"category",in:"query",description:"Products category",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"string"}},{name:"endTime",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"string",default:200}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/funding/history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Funding Rate History",description:{content:"Get historical funding rate",type:"text/plain"},url:{path:["v5","market","funding","history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"The start timstamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timstamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},p=void 0,d={unversionedId:"api-explorer/v5/market/funding-history",id:"api-explorer/v5/market/funding-history",title:"Funding Rate History",description:"Get historical funding rate",source:"@site/docs/api-explorer/v5/market/funding-history.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/funding-history",permalink:"/docs-v2/zh-TW/api-explorer/v5/market/funding-history",draft:!1,tags:[],version:"current",frontMatter:{id:"funding-history",title:"Funding Rate History",description:"Get historical funding rate",sidebar_label:"Funding Rate History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get historical funding rate",operationId:"funding-history",parameters:[{name:"category",in:"query",description:"Products category",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"string"}},{name:"endTime",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"string",default:200}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/funding/history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Funding Rate History",description:{content:"Get historical funding rate",type:"text/plain"},url:{path:["v5","market","funding","history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"The start timstamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timstamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Ticker Info",permalink:"/docs-v2/zh-TW/api-explorer/v5/market/ticker"},next:{title:"Risk limit",permalink:"/docs-v2/zh-TW/api-explorer/v5/market/risk-limit"}},l={},u=[{value:"Funding Rate History",id:"funding-rate-history",level:2}],c={toc:u};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"funding-rate-history"},"Funding Rate History"),(0,a.kt)("p",null,"Get historical funding rate"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Products category",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"string",default:200}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);