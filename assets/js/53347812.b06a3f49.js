"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3682],{90116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>g});var r=a(87462),i=(a(67294),a(3905)),n=a(26389),o=a(94891),s=a(74933),p=(a(47507),a(24310)),d=(a(63303),a(75035),a(85162));const l={id:"switch-mode",title:"Turn ON/OFF Margin Trade",description:"Turn on/off margin trade",sidebar_label:"Turn ON/OFF Margin Trade",hide_title:!0,hide_table_of_contents:!0,api:{tags:["margin-trade"],description:"Turn on/off margin trade",operationId:"switch-mode",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{spotMarginMode:{type:"integer",description:"Margin mode. 0=off, 1=on",enum:[0,1],example:0},required:["spotMarginMode"]}}}}},method:"post",path:"/v5/spot-margin-trade/switch-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{spotMarginMode:0},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade"},postman:{name:"Turn ON/OFF Margin Trade",description:{content:"Turn on/off margin trade",type:"text/plain"},url:{path:["v5","spot-margin-trade","switch-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/spot-margin/bybit-open-api-v-5-explorer-spot-margin-trade"},m=void 0,u={unversionedId:"api-explorer/v5/spot-margin/switch-mode",id:"api-explorer/v5/spot-margin/switch-mode",title:"Turn ON/OFF Margin Trade",description:"Turn on/off margin trade",source:"@site/docs/api-explorer/v5/spot-margin/switch-mode.api.mdx",sourceDirName:"api-explorer/v5/spot-margin",slug:"/api-explorer/v5/spot-margin/switch-mode",permalink:"/docs-v2/api-explorer/v5/spot-margin/switch-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"switch-mode",title:"Turn ON/OFF Margin Trade",description:"Turn on/off margin trade",sidebar_label:"Turn ON/OFF Margin Trade",hide_title:!0,hide_table_of_contents:!0,api:{tags:["margin-trade"],description:"Turn on/off margin trade",operationId:"switch-mode",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{spotMarginMode:{type:"integer",description:"Margin mode. 0=off, 1=on",enum:[0,1],example:0},required:["spotMarginMode"]}}}}},method:"post",path:"/v5/spot-margin-trade/switch-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{spotMarginMode:0},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade"},postman:{name:"Turn ON/OFF Margin Trade",description:{content:"Turn on/off margin trade",type:"text/plain"},url:{path:["v5","spot-margin-trade","switch-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/spot-margin/bybit-open-api-v-5-explorer-spot-margin-trade"},sidebar:"apiExplorerSideBar",previous:{title:"Spot Margin Trade",permalink:"/docs-v2/api-explorer/v5/spot-margin/margin-trade"},next:{title:"Set Leverage",permalink:"/docs-v2/api-explorer/v5/spot-margin/set-leverage"}},c={},g=[{value:"Turn ON/OFF Margin Trade",id:"turn-onoff-margin-trade",level:2}],f={toc:g};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"turn-onoff-margin-trade"},"Turn ON/OFF Margin Trade"),(0,i.kt)("p",null,"Turn on/off margin trade"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"spotMarginMode",required:!1,schemaDescription:"Margin mode. 0=off, 1=on",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"required",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}h.isMDXComponent=!0}}]);