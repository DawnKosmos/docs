"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2184],{84365:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=i(87462),a=(i(67294),i(3905)),o=i(26389),n=(i(94891),i(74933)),p=(i(47507),i(24310),i(63303),i(75035),i(85162));const s={id:"public-trade",title:"Public trade",description:"Get public trade",sidebar_label:"Public trade",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get public trade",operationId:"public-trade",parameters:[{name:"category",in:"query",description:"Products category",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"symbol",in:"query",description:"Symbol name.",required:!0,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. Valid for option. Default is BTC when category=option",required:!1,schema:{type:"string",default:"BTC"}},{name:"optionType",in:"query",description:"Option type. Valid for option.",required:!1,schema:{type:"string",enum:["Call","Put"]}},{name:"limit",in:"query",description:"Maximum 60 for spot. Maximum 1000 for others",required:!1,schema:{type:"integer",default:500}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/recent-trade",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Public trade",description:{content:"Get public trade",type:"text/plain"},url:{path:["v5","market","recent-trade"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name.",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. Valid for option. Default is BTC when category=option",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Option type. Valid for option.",type:"text/plain"},key:"optionType",value:""},{disabled:!1,description:{content:"Maximum 60 for spot. Maximum 1000 for others",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},l=void 0,d={unversionedId:"api-explorer/v5/market/public-trade",id:"api-explorer/v5/market/public-trade",title:"Public trade",description:"Get public trade",source:"@site/docs/api-explorer/v5/market/public-trade.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/public-trade",permalink:"/docs-v2/api-explorer/v5/market/public-trade",draft:!1,tags:[],version:"current",frontMatter:{id:"public-trade",title:"Public trade",description:"Get public trade",sidebar_label:"Public trade",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get public trade",operationId:"public-trade",parameters:[{name:"category",in:"query",description:"Products category",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"symbol",in:"query",description:"Symbol name.",required:!0,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. Valid for option. Default is BTC when category=option",required:!1,schema:{type:"string",default:"BTC"}},{name:"optionType",in:"query",description:"Option type. Valid for option.",required:!1,schema:{type:"string",enum:["Call","Put"]}},{name:"limit",in:"query",description:"Maximum 60 for spot. Maximum 1000 for others",required:!1,schema:{type:"integer",default:500}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/recent-trade",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Public trade",description:{content:"Get public trade",type:"text/plain"},url:{path:["v5","market","recent-trade"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name.",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. Valid for option. Default is BTC when category=option",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Option type. Valid for option.",type:"text/plain"},key:"optionType",value:""},{disabled:!1,description:{content:"Maximum 60 for spot. Maximum 1000 for others",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Insurance Fund",permalink:"/docs-v2/api-explorer/v5/market/insurance-fund"},next:{title:"Delivery price",permalink:"/docs-v2/api-explorer/v5/market/delivery-price"}},c={},m=[{value:"Public trade",id:"public-trade",level:2}],u={toc:m};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"public-trade"},"Public trade"),(0,a.kt)("p",null,"Get public trade"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Products category",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin. Valid for option. Default is BTC when category=option",required:!1,schema:{type:"string",default:"BTC"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"optionType",in:"query",description:"Option type. Valid for option.",required:!1,schema:{type:"string",enum:["Call","Put"]}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 60 for spot. Maximum 1000 for others",required:!1,schema:{type:"integer",default:500}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);