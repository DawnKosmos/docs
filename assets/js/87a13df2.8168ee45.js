"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7173],{93181:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>d,toc:()=>y});var r=i(87462),n=(i(67294),i(3905)),a=i(26389),s=(i(94891),i(74933)),o=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"query-repayment-history",title:"Query Repayment History",description:"Query Repayment History",sidebar_label:"Query Repayment History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["crossmargin"],description:"Query Repayment History",operationId:"query-repayment-history",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"coin",in:"query",description:"currency",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Default value is 500, max 500",required:!1,schema:{type:"string",default:500}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/private/cross-margin-repay-history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Query Repayment History",description:{content:"Query Repayment History",type:"text/plain"},url:{path:["spot","v3","private","cross-margin-repay-history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Start time, unit in millisecond",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"End time, unit in millisecond",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"currency",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Default value is 500, max 500",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/crossmargin/bybit-spot-trade-explorer"},l=void 0,d={unversionedId:"api-explorer/spot/crossmargin/query-repayment-history",id:"api-explorer/spot/crossmargin/query-repayment-history",title:"Query Repayment History",description:"Query Repayment History",source:"@site/docs/api-explorer/spot/crossmargin/query-repayment-history.api.mdx",sourceDirName:"api-explorer/spot/crossmargin",slug:"/api-explorer/spot/crossmargin/query-repayment-history",permalink:"/docs-v2/api-explorer/spot/crossmargin/query-repayment-history",draft:!1,tags:[],version:"current",frontMatter:{id:"query-repayment-history",title:"Query Repayment History",description:"Query Repayment History",sidebar_label:"Query Repayment History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["crossmargin"],description:"Query Repayment History",operationId:"query-repayment-history",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"coin",in:"query",description:"currency",required:!1,schema:{type:"string"}},{name:"limit",in:"query",description:"Default value is 500, max 500",required:!1,schema:{type:"string",default:500}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/private/cross-margin-repay-history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Query Repayment History",description:{content:"Query Repayment History",type:"text/plain"},url:{path:["spot","v3","private","cross-margin-repay-history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Start time, unit in millisecond",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"End time, unit in millisecond",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"currency",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Default value is 500, max 500",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/crossmargin/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Query Interest and Quota",permalink:"/docs-v2/api-explorer/spot/crossmargin/query-interest-quota"},next:{title:"Introduction",permalink:"/docs-v2/api-explorer/spot/institution/bybit-spot-trade-explorer"}},m={},y=[{value:"Query Repayment History",id:"query-repayment-history",level:2}],u={toc:y};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"query-repayment-history"},"Query Repayment History"),(0,n.kt)("p",null,"Query Repayment History"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"currency",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Default value is 500, max 500",required:!1,schema:{type:"string",default:500}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}c.isMDXComponent=!0}}]);