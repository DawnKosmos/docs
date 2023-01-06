"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7821],{62350:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>y});var a=i(87462),r=(i(67294),i(3905)),s=i(26389),o=i(94891),n=i(74933),p=(i(47507),i(24310)),d=(i(63303),i(75035),i(85162));const l={id:"redeem",title:"Redeem",description:"Redeem",sidebar_label:"Redeem",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Redeem",operationId:"redeem",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCode:{type:"string",description:"Abbreviation of the LT.",example:"BTC3LUSDT"},ltQuantity:{type:"string",description:"Market Buy order, it is amount to pay.",example:"50"},serialNo:{type:"string",description:"Serial number"}},required:["ltCode","ltQuantity"]}}}},method:"post",path:"/spot/v3/private/redeem",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCode:"BTC3LUSDT",ltQuantity:"50",serialNo:"string"},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Redeem",description:{content:"Redeem",type:"text/plain"},url:{path:["spot","v3","private","redeem"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/lttrade/bybit-spot-trade-explorer"},m=void 0,u={unversionedId:"api-explorer/spot/lttrade/redeem",id:"api-explorer/spot/lttrade/redeem",title:"Redeem",description:"Redeem",source:"@site/docs/api-explorer/spot/lttrade/redeem.api.mdx",sourceDirName:"api-explorer/spot/lttrade",slug:"/api-explorer/spot/lttrade/redeem",permalink:"/docs-v2/zh-TW/api-explorer/spot/lttrade/redeem",draft:!1,tags:[],version:"current",frontMatter:{id:"redeem",title:"Redeem",description:"Redeem",sidebar_label:"Redeem",hide_title:!0,hide_table_of_contents:!0,api:{tags:["etp"],description:"Redeem",operationId:"redeem",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{ltCode:{type:"string",description:"Abbreviation of the LT.",example:"BTC3LUSDT"},ltQuantity:{type:"string",description:"Market Buy order, it is amount to pay.",example:"50"},serialNo:{type:"string",description:"Serial number"}},required:["ltCode","ltQuantity"]}}}},method:"post",path:"/spot/v3/private/redeem",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{ltCode:"BTC3LUSDT",ltQuantity:"50",serialNo:"string"},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Redeem",description:{content:"Redeem",type:"text/plain"},url:{path:["spot","v3","private","redeem"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/lttrade/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Purchase",permalink:"/docs-v2/zh-TW/api-explorer/spot/lttrade/purchase"},next:{title:"Get Purchase or Redemption History",permalink:"/docs-v2/zh-TW/api-explorer/spot/lttrade/purchase-redemption-history"}},c={},y=[{value:"Redeem",id:"redeem",level:2}],h={toc:y};function b(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"redeem"},"Redeem"),(0,r.kt)("p",null,"Redeem"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(o.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"ltCode",required:!0,schemaDescription:"Abbreviation of the LT.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"ltQuantity",required:!0,schemaDescription:"Market Buy order, it is amount to pay.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"serialNo",required:!1,schemaDescription:"Serial number",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);