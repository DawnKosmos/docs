"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[293],{66357:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var r=i(87462),a=(i(67294),i(3905)),s=i(26389),n=(i(94891),i(74933)),d=(i(47507),i(24310),i(63303),i(75035),i(85162));const o={id:"his-fund-rate",title:"Funding Rate History",description:"Get historical funding rate",sidebar_label:"Funding Rate History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get historical funding rate",operationId:"his-fund-rate",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"start",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"string"}},{name:"end",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"string",default:200}}],responses:{200:{description:"successful operation"}},method:"get",path:"/derivatives/v3/public/funding/history-funding-rate",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Funding Rate History",description:{content:"Get historical funding rate",type:"text/plain"},url:{path:["derivatives","v3","public","funding","history-funding-rate"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"The start timstamp (ms)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"The end timstamp (ms)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/market/bybit-derivatives-explorer"},p=void 0,m={unversionedId:"api-explorer/derivatives/market/his-fund-rate",id:"api-explorer/derivatives/market/his-fund-rate",title:"Funding Rate History",description:"Get historical funding rate",source:"@site/docs/api-explorer/derivatives/market/his-fund-rate.api.mdx",sourceDirName:"api-explorer/derivatives/market",slug:"/api-explorer/derivatives/market/his-fund-rate",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/market/his-fund-rate",draft:!1,tags:[],version:"current",frontMatter:{id:"his-fund-rate",title:"Funding Rate History",description:"Get historical funding rate",sidebar_label:"Funding Rate History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get historical funding rate",operationId:"his-fund-rate",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"start",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"string"}},{name:"end",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"string",default:200}}],responses:{200:{description:"successful operation"}},method:"get",path:"/derivatives/v3/public/funding/history-funding-rate",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Funding Rate History",description:{content:"Get historical funding rate",type:"text/plain"},url:{path:["derivatives","v3","public","funding","history-funding-rate"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"The start timstamp (ms)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"The end timstamp (ms)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/market/bybit-derivatives-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Risk limit",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/market/risk-limit"},next:{title:"Open Interest",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/market/open-interest"}},l={},u=[{value:"Funding Rate History",id:"funding-rate-history",level:2}],c={toc:u};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"funding-rate-history"},"Funding Rate History"),(0,a.kt)("p",null,"Get historical funding rate"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"start",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"end",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"string",default:200}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);