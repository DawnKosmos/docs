"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[21426],{92503:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),l=t(67294),i=t(86010),o=t(95999),r=t(86668);const s="anchorWithStickyNavbar_LWe7",c="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:n,id:t,...m}=e;const{navbar:{hideOnScroll:u}}=(0,r.L)();return"h1"!==n&&t?l.createElement(n,(0,a.Z)({},m,{className:(0,i.Z)("anchor",u?c:s),id:t}),m.children,l.createElement("a",{className:"hash-link",href:`#${t}`,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,(0,a.Z)({},m,{id:void 0}))}},42752:(e,n,t)=>{t.d(n,{Z:()=>S});var a=t(87462),l=t(67294),i=t(35742);var o=t(170);var r=t(39960);var s=t(86010),c=t(72389),m=t(86043);const u="details_lb9f",d="isBrowser_bmU9",p="collapsibleContent_i85q";function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function v(e){let{summary:n,children:t,...i}=e;const o=(0,c.Z)(),r=(0,l.useRef)(null),{collapsed:v,setCollapsed:E}=(0,m.u)({initialState:!i.open}),[b,g]=(0,l.useState)(i.open);return l.createElement("details",(0,a.Z)({},i,{ref:r,open:b,"data-collapsed":v,className:(0,s.Z)(u,o&&d,i.className),onMouseDown:e=>{f(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;f(n)&&h(n,r.current)&&(e.preventDefault(),v?(E(!1),g(!0)):E(!0))}}),n??l.createElement("summary",null,"Details"),l.createElement(m.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{E(e),g(!e)}},l.createElement("div",{className:p},t)))}const E="details_b_Ee";function b(e){let{...n}=e;return l.createElement(v,(0,a.Z)({},n,{className:(0,s.Z)("alert alert--info",E,n.className)}))}var g=t(92503);function N(e){return l.createElement(g.Z,e)}const C="containsTaskList_mC6p";const Z="img_ev3q";var y=t(35281),k=t(95999);const T="admonition_LlT9",_="admonitionHeading_tbUL",L="admonitionIcon_kALy",w="admonitionContent_S0QG";const x={note:{infimaClassName:"secondary",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:l.createElement(k.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 12 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:l.createElement(k.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 12 16"},l.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:l.createElement(k.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:l.createElement(k.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 16 16"},l.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:l.createElement(k.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},z={secondary:"note",important:"info",success:"tip",warning:"danger"};function H(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=l.Children.toArray(e),t=n.find((e=>{var n;return l.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),a=l.createElement(l.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:a}}(e.children);return{...e,title:e.title??n,children:t}}const S={head:function(e){const n=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...a}=e.props;return l.createElement(e.props.originalType,a)}return e}(e):e));return l.createElement(i.Z,e,n)},code:function(e){const n=["a","b","big","i","span","em","strong","sup","sub","small"];return l.Children.toArray(e.children).every((e=>{var t;return"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?l.createElement("code",e):l.createElement(o.Z,e)},a:function(e){return l.createElement(r.Z,e)},pre:function(e){var n;return l.createElement(o.Z,(0,l.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:{...e})},details:function(e){const n=l.Children.toArray(e.children),t=n.find((e=>{var n;return l.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),i=l.createElement(l.Fragment,null,n.filter((e=>e!==t)));return l.createElement(b,(0,a.Z)({},e,{summary:t}),i)},ul:function(e){return l.createElement("ul",(0,a.Z)({},e,{className:(n=e.className,(0,s.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&C))}));var n},img:function(e){return l.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(n=e.className,(0,s.Z)(n,Z))}));var n},h1:e=>l.createElement(N,(0,a.Z)({as:"h1"},e)),h2:e=>l.createElement(N,(0,a.Z)({as:"h2"},e)),h3:e=>l.createElement(N,(0,a.Z)({as:"h3"},e)),h4:e=>l.createElement(N,(0,a.Z)({as:"h4"},e)),h5:e=>l.createElement(N,(0,a.Z)({as:"h5"},e)),h6:e=>l.createElement(N,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:n,type:t,title:a,icon:i}=H(e),o=function(e){const n=z[e]??e;return x[n]||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),x.info)}(t),r=a??o.label,{iconComponent:c}=o,m=i??l.createElement(c,null);return l.createElement("div",{className:(0,s.Z)(y.k.common.admonition,y.k.common.admonitionType(e.type),"alert",`alert--${o.infimaClassName}`,T)},l.createElement("div",{className:_},l.createElement("span",{className:L},m),r),l.createElement("div",{className:w},n))}}},45042:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),l=t(3905),i=t(31769);function o(e){let{children:n}=e;return a.createElement(l.Zo,{components:i.Z},n)}},39407:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(87462),l=t(67294),i=t(86010),o=t(38011);const r="tableOfContents_bqdL";function s(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,i.Z)(r,"thin-scrollbar",n)},l.createElement(o.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},38011:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),l=t(67294),i=t(86668),o=t(39665),r=t(96841);function s(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?l.createElement("ul",{className:i?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const c=l.memo(s);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:u,maxHeadingLevel:d,...p}=e;const f=(0,i.L)(),h=u??f.tableOfContents.minHeadingLevel,v=d??f.tableOfContents.maxHeadingLevel,E=(0,o.b)({toc:n,minHeadingLevel:h,maxHeadingLevel:v}),b=(0,l.useMemo)((()=>{if(s&&m)return{linkClassName:s,linkActiveClassName:m,minHeadingLevel:h,maxHeadingLevel:v}}),[s,m,h,v]);return(0,r.S)(b),l.createElement(c,(0,a.Z)({toc:E,className:t,linkClassName:s},p))}},65488:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(87462),l=t(67294),i=t(86010),o=t(72389),r=t(67392),s=t(7094),c=t(12466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){var n;const{lazy:t,block:o,defaultValue:d,values:p,groupId:f,className:h}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),E=p??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,r.l)(E,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==g&&!E.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${E.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:C}=(0,s.U)(),[Z,y]=(0,l.useState)(g),k=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=f){const e=N[f];null!=e&&e!==Z&&E.some((n=>n.value===e))&&y(e)}const _=e=>{const n=e.currentTarget,t=k.indexOf(n),a=E[t].value;a!==Z&&(T(n),y(a),null!=f&&C(f,String(a)))},L=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=k.indexOf(e.currentTarget)+1;t=k[n]??k[0];break}case"ArrowLeft":{const n=k.indexOf(e.currentTarget)-1;t=k[n]??k[k.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},E.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===n?0:-1,"aria-selected":Z===n,key:n,ref:e=>k.push(e),onKeyDown:L,onFocus:_,onClick:_},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":Z===n})}),t??n)}))),t?(0,l.cloneElement)(v.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==Z})))))}function p(e){const n=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(n)},e))}}}]);