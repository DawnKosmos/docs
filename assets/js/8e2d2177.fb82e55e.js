"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6676],{59912:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var n=i(87462),a=(i(67294),i(3905)),r=i(26389),o=(i(94891),i(74933)),s=(i(47507),i(24310),i(63303),i(75035),i(85162));const d={id:"loan-info",title:"Get Loan Info",description:"Get Loan Info",sidebar_label:"Get Loan Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["institution"],description:"Get Loan Info",operationId:"loan-info",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",description:"Loan order id. If not passed, then return all orders, sort by loanTime in descend",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Default value is 10, max 100",required:!1,schema:{type:"string",default:10}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/private/margin-loan-infos",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Get Loan Info",description:{content:"Get Loan Info",type:"text/plain"},url:{path:["spot","v3","private","margin-loan-infos"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Loan order id. If not passed, then return all orders, sort by loanTime in descend",type:"text/plain"},key:"orderId",value:""},{disabled:!1,description:{content:"Start time, unit in millisecond",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"End time, unit in millisecond",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Default value is 10, max 100",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/institution/bybit-spot-trade-explorer"},l=void 0,p={unversionedId:"api-explorer/spot/institution/loan-info",id:"api-explorer/spot/institution/loan-info",title:"Get Loan Info",description:"Get Loan Info",source:"@site/docs/api-explorer/spot/institution/loan-info.api.mdx",sourceDirName:"api-explorer/spot/institution",slug:"/api-explorer/spot/institution/loan-info",permalink:"/docs-v2/api-explorer/spot/institution/loan-info",draft:!1,tags:[],version:"current",frontMatter:{id:"loan-info",title:"Get Loan Info",description:"Get Loan Info",sidebar_label:"Get Loan Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["institution"],description:"Get Loan Info",operationId:"loan-info",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",description:"Loan order id. If not passed, then return all orders, sort by loanTime in descend",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Default value is 10, max 100",required:!1,schema:{type:"string",default:10}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/private/margin-loan-infos",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Get Loan Info",description:{content:"Get Loan Info",type:"text/plain"},url:{path:["spot","v3","private","margin-loan-infos"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Loan order id. If not passed, then return all orders, sort by loanTime in descend",type:"text/plain"},key:"orderId",value:""},{disabled:!1,description:{content:"Start time, unit in millisecond",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"End time, unit in millisecond",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Default value is 10, max 100",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/institution/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Margin Coin Info",permalink:"/docs-v2/api-explorer/spot/institution/margin-coin-info"},next:{title:"Get Repay Info",permalink:"/docs-v2/api-explorer/spot/institution/repay-info"}},m={},u=[{value:"Get Loan Info",id:"get-loan-info",level:2}],c={toc:u};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-loan-info"},"Get Loan Info"),(0,a.kt)("p",null,"Get Loan Info"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"orderId",in:"query",description:"Loan order id. If not passed, then return all orders, sort by loanTime in descend",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Default value is 10, max 100",required:!1,schema:{type:"string",default:10}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(s.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);