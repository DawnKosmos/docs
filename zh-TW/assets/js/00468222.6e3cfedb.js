"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2746],{27250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>y});var i=r(87462),a=(r(67294),r(3905)),o=r(26389),n=r(94891),d=r(74933),s=(r(47507),r(24310)),l=(r(63303),r(75035),r(85162));const p={id:"cancel-active-order",title:"Cancel Active Order",description:"Cancel Active Order",sidebar_label:"Cancel Active Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Cancel Active Order",operationId:"cancel-active-order",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",description:"Order ID. Required if not passing orderLinkId"},orderLinkId:{type:"string",description:"Unique user-set order ID. Required if not passing orderId"},orderCategory:{type:"string",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",enum:[0,1]}},required:null}}}},method:"post",path:"/spot/v3/private/cancel-order",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{orderId:"string",orderLinkId:"string",orderCategory:0},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Cancel Active Order",description:{content:"Cancel Active Order",type:"text/plain"},url:{path:["spot","v3","private","cancel-order"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},c=void 0,u={unversionedId:"api-explorer/spot/trade/cancel-active-order",id:"api-explorer/spot/trade/cancel-active-order",title:"Cancel Active Order",description:"Cancel Active Order",source:"@site/docs/api-explorer/spot/trade/cancel-active-order.api.mdx",sourceDirName:"api-explorer/spot/trade",slug:"/api-explorer/spot/trade/cancel-active-order",permalink:"/docs-v2/zh-TW/api-explorer/spot/trade/cancel-active-order",draft:!1,tags:[],version:"current",frontMatter:{id:"cancel-active-order",title:"Cancel Active Order",description:"Cancel Active Order",sidebar_label:"Cancel Active Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Cancel Active Order",operationId:"cancel-active-order",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",description:"Order ID. Required if not passing orderLinkId"},orderLinkId:{type:"string",description:"Unique user-set order ID. Required if not passing orderId"},orderCategory:{type:"string",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",enum:[0,1]}},required:null}}}},method:"post",path:"/spot/v3/private/cancel-order",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{orderId:"string",orderLinkId:"string",orderCategory:0},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Cancel Active Order",description:{content:"Cancel Active Order",type:"text/plain"},url:{path:["spot","v3","private","cancel-order"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Place Order",permalink:"/docs-v2/zh-TW/api-explorer/spot/trade/place-order"},next:{title:"Batch Cancel Active Order",permalink:"/docs-v2/zh-TW/api-explorer/spot/trade/batch-cancel-active-order"}},m={},y=[{value:"Cancel Active Order",id:"cancel-active-order",level:2}],v={toc:y};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cancel-active-order"},"Cancel Active Order"),(0,a.kt)("p",null,"Cancel Active Order"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(n.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(s.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:"Order ID. Required if not passing orderLinkId",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"Unique user-set order ID. Required if not passing orderId",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"orderCategory",required:!1,schemaDescription:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",schemaName:"string",qualifierMessage:"**Possible values:** [`0`, `1`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);