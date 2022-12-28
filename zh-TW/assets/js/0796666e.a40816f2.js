"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7953],{33177:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=i(87462),a=(i(67294),i(3905)),n=i(26389),o=(i(94891),i(74933)),s=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"delivery-record",title:"Get Delivery Record",description:"Get Delivery Record.",sidebar_label:"Get Delivery Record",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Get Delivery Record.",operationId:"delivery-record",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["option"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"expDate",in:"query",description:"expired date",required:!1,schema:{type:"string"},example:null},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/delivery-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Get Delivery Record",description:{content:"Get Delivery Record.",type:"text/plain"},url:{path:["v5","asset","delivery-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"expired date",type:"text/plain"},key:"expDate",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},d=void 0,l={unversionedId:"api-explorer/v5/position/delivery-record",id:"api-explorer/v5/position/delivery-record",title:"Get Delivery Record",description:"Get Delivery Record.",source:"@site/docs/api-explorer/v5/position/delivery-record.api.mdx",sourceDirName:"api-explorer/v5/position",slug:"/api-explorer/v5/position/delivery-record",permalink:"/docs-v2/zh-TW/api-explorer/v5/position/delivery-record",draft:!1,tags:[],version:"current",frontMatter:{id:"delivery-record",title:"Get Delivery Record",description:"Get Delivery Record.",sidebar_label:"Get Delivery Record",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Get Delivery Record.",operationId:"delivery-record",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["option"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"expDate",in:"query",description:"expired date",required:!1,schema:{type:"string"},example:null},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/delivery-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Get Delivery Record",description:{content:"Get Delivery Record.",type:"text/plain"},url:{path:["v5","asset","delivery-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"expired date",type:"text/plain"},key:"expDate",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Execution List",permalink:"/docs-v2/zh-TW/api-explorer/v5/position/execution"},next:{title:"Get Settlement Record",permalink:"/docs-v2/zh-TW/api-explorer/v5/position/settlement-record"}},c={},u=[{value:"Get Delivery Record",id:"get-delivery-record",level:2}],m={toc:u};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-delivery-record"},"Get Delivery Record"),(0,a.kt)("p",null,"Get Delivery Record."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["option"]}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"expDate",in:"query",description:"expired date",required:!1,schema:{type:"string"},example:null},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(s.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);