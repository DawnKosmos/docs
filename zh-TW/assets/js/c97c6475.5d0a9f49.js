(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[967],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>c,kt:()=>v});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),v=r,f=d["".concat(s,".").concat(v)]||d[v]||p[v]||i;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},85162:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o(67294),r=o(86010);const i="tabItem_Ymn6";function a(e){let{children:t,hidden:o,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,a),hidden:o},t)}},65488:(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var n=o(87462),r=o(67294),i=o(86010),a=o(72389),l=o(67392),s=o(7094),u=o(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:o,block:a,defaultValue:d,values:v,groupId:f,className:b}=e,m=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=v??m.map((e=>{let{props:{value:t,label:o,attributes:n}}=e;return{value:t,label:o,attributes:n}})),h=(0,l.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??m[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,s.U)(),[O,E]=(0,r.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&y.some((t=>t.value===e))&&E(e)}const k=e=>{const t=e.currentTarget,o=P.indexOf(t),n=y[o].value;n!==O&&(T(t),E(n),null!=f&&x(f,String(n)))},j=e=>{var t;let o=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;o=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;o=P[t]??P[P.length-1];break}}null==(t=o)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},b)},y.map((e=>{let{value:t,label:o,attributes:a}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>P.push(e),onKeyDown:j,onFocus:k,onClick:k},a,{className:(0,i.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":O===t})}),o??t)}))),o?(0,r.cloneElement)(m.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function v(e){const t=(0,a.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},44765:(e,t,o)=>{"use strict";o(67294),o(93162)},92272:(e,t,o)=>{"use strict";o(67294)},54295:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));o(92272),o(65488),o(85162),o(44765);const i={id:"bybit-v-5-position-api-explorer",title:"Bybit v5 position api explorer",description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},a=void 0,l={unversionedId:"api-explorer/v5/position/bybit-v-5-position-api-explorer",id:"api-explorer/v5/position/bybit-v-5-position-api-explorer",title:"Bybit v5 position api explorer",description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.",source:"@site/docs/api-explorer/v5/position/bybit-v-5-position-api-explorer.info.mdx",sourceDirName:"api-explorer/v5/position",slug:"/api-explorer/v5/position/bybit-v-5-position-api-explorer",permalink:"/docs-v2/zh-TW/api-explorer/v5/position/bybit-v-5-position-api-explorer",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"bybit-v-5-position-api-explorer",title:"Bybit v5 position api explorer",description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},sidebar:"apiExplorerSideBar",previous:{title:"My Position",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/query-spot-quota"},next:{title:"Position",permalink:"/docs-v2/zh-TW/api-explorer/v5/position/position"}},s={},u=[],c={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 3.0.0"),(0,r.kt)("h1",{id:"bybit-v5-position-api-explorer"},"Bybit v5 position api explorer"),(0,r.kt)("p",null,"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option."))}p.isMDXComponent=!0},93162:function(e,t,o){var n,r,i;r=[],n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){s(n.response,t,o)},n.onerror=function(){console.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var l=a.URL||a.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?i(s):r(s.href)?n(e,t,o):i(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){i(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,a){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),o);else if(r(e))n(e,o,a);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){i(l)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var i="application/octet-stream"===e.type,s=/constructor/i.test(a.HTMLElement)||a.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||i&&s||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var p=a.URL||a.webkitURL,d=p.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});a.saveAs=s.saveAs=s,e.exports=s},void 0===(i="function"==typeof n?n.apply(t,r):n)||(e.exports=i)}}]);