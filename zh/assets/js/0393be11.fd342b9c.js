"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6907],{36710:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var r=i(87462),n=(i(67294),i(3905)),a=i(26389),s=(i(94891),i(74933)),l=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"query-kline",title:"Query Kline",description:"Get Kline",sidebar_label:"Query Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get Kline",operationId:"query-kline",parameters:[{name:"symbol",in:"query",description:"Name of the trading pair",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:["1m","3m","5m","15m","30m","1h","2h","4h","6h","12h","1d","1w","1m"]}}},{name:"limit",in:"query",description:"Default value is 1000, max 1000",required:!1,schema:{type:"integer",default:1e3}},{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/public/quote/kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot Restul API\n",version:"3.0.0",title:"Bybit spot explorer"},postman:{name:"Query Kline",description:{content:"Get Kline",type:"text/plain"},url:{path:["spot","v3","public","quote","kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Name of the trading pair",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"Default value is 1000, max 1000",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Start time, unit in millisecond",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"End time, unit in millisecond",type:"text/plain"},key:"endTime",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/market/bybit-spot-explorer"},o=void 0,m={unversionedId:"api-explorer/spot/market/query-kline",id:"api-explorer/spot/market/query-kline",title:"Query Kline",description:"Get Kline",source:"@site/docs/api-explorer/spot/market/query-kline.api.mdx",sourceDirName:"api-explorer/spot/market",slug:"/api-explorer/spot/market/query-kline",permalink:"/docs-v2/zh/api-explorer/spot/market/query-kline",draft:!1,tags:[],version:"current",frontMatter:{id:"query-kline",title:"Query Kline",description:"Get Kline",sidebar_label:"Query Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get Kline",operationId:"query-kline",parameters:[{name:"symbol",in:"query",description:"Name of the trading pair",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:["1m","3m","5m","15m","30m","1h","2h","4h","6h","12h","1d","1w","1m"]}}},{name:"limit",in:"query",description:"Default value is 1000, max 1000",required:!1,schema:{type:"integer",default:1e3}},{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/public/quote/kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot Restul API\n",version:"3.0.0",title:"Bybit spot explorer"},postman:{name:"Query Kline",description:{content:"Get Kline",type:"text/plain"},url:{path:["spot","v3","public","quote","kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Name of the trading pair",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"Default value is 1000, max 1000",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Start time, unit in millisecond",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"End time, unit in millisecond",type:"text/plain"},key:"endTime",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/market/bybit-spot-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Public Trading Records",permalink:"/docs-v2/zh/api-explorer/spot/market/public-trading-records"},next:{title:"Lastest Information for Symbol",permalink:"/docs-v2/zh/api-explorer/spot/market/lastest-information-for-symbol"}},d={},u=[{value:"Query Kline",id:"query-kline",level:2}],c={toc:u};function y(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"query-kline"},"Query Kline"),(0,n.kt)("p",null,"Get Kline"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Name of the trading pair",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:["1m","3m","5m","15m","30m","1h","2h","4h","6h","12h","1d","1w","1m"]}}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Default value is 1000, max 1000",required:!1,schema:{type:"integer",default:1e3}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"Start time, unit in millisecond",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"End time, unit in millisecond",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);