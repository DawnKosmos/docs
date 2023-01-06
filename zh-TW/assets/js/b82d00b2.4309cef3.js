"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5365],{94969:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var s=i(87462),n=(i(67294),i(3905)),a=i(26389),o=(i(94891),i(74933)),r=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"deposit-coin-spec",title:"Get Allowed Deposit Coin Info",description:"Get allowed deposit coin info. Please read [API-DOC](../../../v5/asset/deposit-coin-spec#) first.",sidebar_label:"Get Allowed Deposit Coin Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get allowed deposit coin info. Please read [API-DOC](../../../v5/asset/deposit-coin-spec#) first.",operationId:"deposit-coin-spec",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"chain",in:"query",description:"Chain name",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Limit size. 1-35",required:!1,schema:{type:"integer",default:10}},{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-allowed-list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Allowed Deposit Coin Info",description:{content:"Get allowed deposit coin info. Please read [API-DOC](../../../v5/asset/deposit-coin-spec#) first.",type:"text/plain"},url:{path:["v5","asset","deposit","query-allowed-list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Chain name",type:"text/plain"},key:"chain",value:""},{disabled:!1,description:{content:"Limit size. 1-35",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},d=void 0,l={unversionedId:"api-explorer/v5/asset/deposit-coin-spec",id:"api-explorer/v5/asset/deposit-coin-spec",title:"Get Allowed Deposit Coin Info",description:"Get allowed deposit coin info. Please read [API-DOC](../../../v5/asset/deposit-coin-spec#) first.",source:"@site/docs/api-explorer/v5/asset/deposit-coin-spec.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/deposit-coin-spec",permalink:"/docs-v2/zh-TW/api-explorer/v5/asset/deposit-coin-spec",draft:!1,tags:[],version:"current",frontMatter:{id:"deposit-coin-spec",title:"Get Allowed Deposit Coin Info",description:"Get allowed deposit coin info. Please read [API-DOC](../../../v5/asset/deposit-coin-spec#) first.",sidebar_label:"Get Allowed Deposit Coin Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get allowed deposit coin info. Please read [API-DOC](../../../v5/asset/deposit-coin-spec#) first.",operationId:"deposit-coin-spec",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"chain",in:"query",description:"Chain name",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Limit size. 1-35",required:!1,schema:{type:"integer",default:10}},{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-allowed-list",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Allowed Deposit Coin Info",description:{content:"Get allowed deposit coin info. Please read [API-DOC](../../../v5/asset/deposit-coin-spec#) first.",type:"text/plain"},url:{path:["v5","asset","deposit","query-allowed-list"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Chain name",type:"text/plain"},key:"chain",value:""},{disabled:!1,description:{content:"Limit size. 1-35",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Universal Transfer Record",permalink:"/docs-v2/zh-TW/api-explorer/v5/asset/unitransfer-list"},next:{title:"Get Deposit Record",permalink:"/docs-v2/zh-TW/api-explorer/v5/asset/deposit-record"}},c={},u=[{value:"Get Allowed Deposit Coin Info",id:"get-allowed-deposit-coin-info",level:2}],m={toc:u};function y(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-allowed-deposit-coin-info"},"Get Allowed Deposit Coin Info"),(0,n.kt)("p",null,"Get allowed deposit coin info. Please read ",(0,n.kt)("a",{parentName:"p",href:"../../../v5/asset/deposit-coin-spec#"},"API-DOC")," first."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"chain",in:"query",description:"Chain name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit size. 1-35",required:!1,schema:{type:"integer",default:10}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);