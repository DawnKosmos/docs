"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6327],{84133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>l});var n=r(87462),i=(r(67294),r(3905)),a=r(26389),s=(r(94891),r(74933)),o=(r(47507),r(24310),r(63303),r(75035),r(85162));const p={id:"instrument-info",title:"Instrument Info",description:"Get launched instruments information.",sidebar_label:"Instrument Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get launched instruments information.",operationId:"instrument-info",parameters:[{name:"category",in:"query",description:"Products category",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"for futures and option ONLY",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Maximum 1000",required:!1,schema:{type:"string",default:500}},{name:"cusor",in:"query",description:'pass cursor from the response param "nagePageCursor" to paginate',required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/instruments-info",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Instrument Info",description:{content:"Get launched instruments information.",type:"text/plain"},url:{path:["v5","market","instruments-info"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"for futures and option ONLY",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Maximum 1000",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:'pass cursor from the response param "nagePageCursor" to paginate',type:"text/plain"},key:"cusor",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},m=void 0,u={unversionedId:"api-explorer/v5/market/instrument-info",id:"api-explorer/v5/market/instrument-info",title:"Instrument Info",description:"Get launched instruments information.",source:"@site/docs/api-explorer/v5/market/instrument-info.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/instrument-info",permalink:"/docs-v2/api-explorer/v5/market/instrument-info",draft:!1,tags:[],version:"current",frontMatter:{id:"instrument-info",title:"Instrument Info",description:"Get launched instruments information.",sidebar_label:"Instrument Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get launched instruments information.",operationId:"instrument-info",parameters:[{name:"category",in:"query",description:"Products category",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"for futures and option ONLY",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Maximum 1000",required:!1,schema:{type:"string",default:500}},{name:"cusor",in:"query",description:'pass cursor from the response param "nagePageCursor" to paginate',required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/instruments-info",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Instrument Info",description:{content:"Get launched instruments information.",type:"text/plain"},url:{path:["v5","market","instruments-info"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"for futures and option ONLY",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Maximum 1000",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:'pass cursor from the response param "nagePageCursor" to paginate',type:"text/plain"},key:"cusor",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Order Book",permalink:"/docs-v2/api-explorer/v5/market/orderbook"},next:{title:"Ticker Info",permalink:"/docs-v2/api-explorer/v5/market/ticker"}},d={},l=[{value:"Instrument Info",id:"instrument-info",level:2}],c={toc:l};function y(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"instrument-info"},"Instrument Info"),(0,i.kt)("p",null,"Get launched instruments information."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Products category",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"for futures and option ONLY",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 1000",required:!1,schema:{type:"string",default:500}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"cusor",in:"query",description:'pass cursor from the response param "nagePageCursor" to paginate',required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);