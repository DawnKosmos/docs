"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5365],{94969:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var s=t(87462),n=(t(67294),t(3905)),a=t(26389),o=(t(94891),t(74933)),r=(t(47507),t(24310),t(63303),t(75035),t(85162));const p={id:"deposit-coin-spec",title:"Get Allowed Deposit Coin Info",description:"Get allowed deposit coin info",sidebar_label:"Get Allowed Deposit Coin Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get allowed deposit coin info",operationId:"deposit-coin-spec",parameters:[{name:"coin",in:"query",description:"Coin name. coin and chain must be paired if passed",required:!1,schema:{type:"string"}},{name:"chain",in:"query",description:"Chain name. coin and chain must be paired if passed",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Limit size. 1-35",required:!1,schema:{type:"integer",default:10}},{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-allowed-list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Allowed Deposit Coin Info",description:{content:"Get allowed deposit coin info",type:"text/plain"},url:{path:["v5","asset","deposit","query-allowed-list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Coin name. coin and chain must be paired if passed",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Chain name. coin and chain must be paired if passed",type:"text/plain"},key:"chain",value:""},{disabled:!1,description:{content:"Limit size. 1-35",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},d=void 0,l={unversionedId:"api-explorer/v5/asset/deposit-coin-spec",id:"api-explorer/v5/asset/deposit-coin-spec",title:"Get Allowed Deposit Coin Info",description:"Get allowed deposit coin info",source:"@site/docs/api-explorer/v5/asset/deposit-coin-spec.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/deposit-coin-spec",permalink:"/docs-v2/api-explorer/v5/asset/deposit-coin-spec",draft:!1,tags:[],version:"current",frontMatter:{id:"deposit-coin-spec",title:"Get Allowed Deposit Coin Info",description:"Get allowed deposit coin info",sidebar_label:"Get Allowed Deposit Coin Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get allowed deposit coin info",operationId:"deposit-coin-spec",parameters:[{name:"coin",in:"query",description:"Coin name. coin and chain must be paired if passed",required:!1,schema:{type:"string"}},{name:"chain",in:"query",description:"Chain name. coin and chain must be paired if passed",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Limit size. 1-35",required:!1,schema:{type:"integer",default:10}},{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-allowed-list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Allowed Deposit Coin Info",description:{content:"Get allowed deposit coin info",type:"text/plain"},url:{path:["v5","asset","deposit","query-allowed-list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Coin name. coin and chain must be paired if passed",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Chain name. coin and chain must be paired if passed",type:"text/plain"},key:"chain",value:""},{disabled:!1,description:{content:"Limit size. 1-35",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Universal Transfer Records",permalink:"/docs-v2/api-explorer/v5/asset/unitransfer-list"},next:{title:"Get Deposit Record",permalink:"/docs-v2/api-explorer/v5/asset/deposit-record"}},c={},m=[{value:"Get Allowed Deposit Coin Info",id:"get-allowed-deposit-coin-info",level:2}],u={toc:m};function y(e){let{components:i,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-allowed-deposit-coin-info"},"Get Allowed Deposit Coin Info"),(0,n.kt)("p",null,"Get allowed deposit coin info"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name. coin and chain must be paired if passed",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"chain",in:"query",description:"Chain name. coin and chain must be paired if passed",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit size. 1-35",required:!1,schema:{type:"integer",default:10}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);