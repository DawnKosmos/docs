(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6913],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(87462),o=n(67294),a=n(86010),i=n(72389),l=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:f,groupId:v,className:b}=e,m=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=f??m.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??m[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,s.U)(),[O,E]=(0,o.useState)(h),k=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=v){const e=w[v];null!=e&&e!==O&&y.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,n=k.indexOf(t),r=y[n].value;r!==O&&(T(t),E(r),null!=v&&x(v,String(r)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=k.indexOf(e.currentTarget)+1;n=k[t]??k[0];break}case"ArrowLeft":{const t=k.indexOf(e.currentTarget)-1;n=k[t]??k[k.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},b)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>k.push(e),onKeyDown:A,onFocus:j,onClick:j},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,o.cloneElement)(m.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},44765:(e,t,n)=>{"use strict";n(67294),n(93162)},92272:(e,t,n)=>{"use strict";n(67294)},31996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));n(92272),n(65488),n(85162),n(44765);const a={id:"bybit-open-api-v-5-explorer",title:"Bybit Open API v5 explorer",description:"Collection of v5 Restul API",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},i=void 0,l={unversionedId:"api-explorer/v5/asset/bybit-open-api-v-5-explorer",id:"api-explorer/v5/asset/bybit-open-api-v-5-explorer",title:"Bybit Open API v5 explorer",description:"Collection of v5 Restul API",source:"@site/docs/api-explorer/v5/asset/bybit-open-api-v-5-explorer.info.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/bybit-open-api-v-5-explorer",permalink:"/docs-v2/api-explorer/v5/asset/bybit-open-api-v-5-explorer",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"bybit-open-api-v-5-explorer",title:"Bybit Open API v5 explorer",description:"Collection of v5 Restul API",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},sidebar:"apiExplorerSideBar",previous:{title:"Set Margin Mode",permalink:"/docs-v2/api-explorer/v5/account/set-margin-mode"},next:{title:"Asset",permalink:"/docs-v2/api-explorer/v5/asset/asset"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 3.0.0"),(0,o.kt)("h1",{id:"bybit-open-api-v5-explorer"},"Bybit Open API v5 explorer"),(0,o.kt)("p",null,"Collection of v5 Restul API"))}p.isMDXComponent=!0},93162:function(e,t,n){var r,o,a;o=[],r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var l=i.URL||i.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):o(s.href)?r(e,t,n):a(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(o(e))r(e,n,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){a(l)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var a="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&s||l)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var p=i.URL||i.webkitURL,d=p.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});i.saveAs=s.saveAs=s,e.exports=s},void 0===(a="function"==typeof r?r.apply(t,o):r)||(e.exports=a)}}]);