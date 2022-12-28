"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1493],{99019:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var i=s(87462),r=(s(67294),s(3905)),a=s(26389),n=(s(94891),s(74933)),o=(s(47507),s(24310),s(63303),s(75035),s(85162));const d={id:"sub-deposit-record",title:"Get Sub Account Deposit Record",description:"Get sub account deposit record. Please read [API-DOC](../../../v5/asset/sub-deposit-record#) first.",sidebar_label:"Get Sub Account Deposit Record",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get sub account deposit record. Please read [API-DOC](../../../v5/asset/sub-deposit-record#) first.",operationId:"sub-deposit-record",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"subMemberId",in:"query",description:"Sub uid",required:!0,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-sub-member-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Sub Account Deposit Record",description:{content:"Get sub account deposit record. Please read [API-DOC](../../../v5/asset/sub-deposit-record#) first.",type:"text/plain"},url:{path:["v5","asset","deposit","query-sub-member-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Sub uid",type:"text/plain"},key:"subMemberId",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},p=void 0,u={unversionedId:"api-explorer/v5/asset/sub-deposit-record",id:"api-explorer/v5/asset/sub-deposit-record",title:"Get Sub Account Deposit Record",description:"Get sub account deposit record. Please read [API-DOC](../../../v5/asset/sub-deposit-record#) first.",source:"@site/docs/api-explorer/v5/asset/sub-deposit-record.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/sub-deposit-record",permalink:"/docs-v2/api-explorer/v5/asset/sub-deposit-record",draft:!1,tags:[],version:"current",frontMatter:{id:"sub-deposit-record",title:"Get Sub Account Deposit Record",description:"Get sub account deposit record. Please read [API-DOC](../../../v5/asset/sub-deposit-record#) first.",sidebar_label:"Get Sub Account Deposit Record",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get sub account deposit record. Please read [API-DOC](../../../v5/asset/sub-deposit-record#) first.",operationId:"sub-deposit-record",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"subMemberId",in:"query",description:"Sub uid",required:!0,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-sub-member-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Sub Account Deposit Record",description:{content:"Get sub account deposit record. Please read [API-DOC](../../../v5/asset/sub-deposit-record#) first.",type:"text/plain"},url:{path:["v5","asset","deposit","query-sub-member-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Sub uid",type:"text/plain"},key:"subMemberId",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Deposit Record",permalink:"/docs-v2/api-explorer/v5/asset/deposit-record"},next:{title:"Get Master Deposit Address",permalink:"/docs-v2/api-explorer/v5/asset/master-deposit-addr"}},c={},m=[{value:"Get Sub Account Deposit Record",id:"get-sub-account-deposit-record",level:2}],l={toc:m};function b(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-sub-account-deposit-record"},"Get Sub Account Deposit Record"),(0,r.kt)("p",null,"Get sub account deposit record. Please read ",(0,r.kt)("a",{parentName:"p",href:"../../../v5/asset/sub-deposit-record#"},"API-DOC")," first."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"subMemberId",in:"query",description:"Sub uid",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);