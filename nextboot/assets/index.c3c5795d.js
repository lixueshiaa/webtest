import{a1 as m,a as C,dS as v,z as y,ez as F,U as a,o as g,k as B,G as t,p as s,n as h,j as l,J as b,T as k}from"./index.397c0bf9.js";import{P as w}from"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useWindowSizeFn.830b179a.js";import"./useContentViewHeight.4e4c24ce.js";const x=C({name:"Copy",components:{CollapseContainer:v,PageWrapper:w},setup(){const e=y(""),{createMessage:o}=k(),{clipboardRef:u,copiedRef:p}=F();function r(){const n=l(e);if(!n){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}u.value=n,l(p)&&o.warning("copy success\uFF01")}return{handleCopy:r,value:e}}}),P={class:"flex justify-center"},$=b(" Copy ");function D(e,o,u,p,r,n){const c=a("a-input"),i=a("a-button"),d=a("CollapseContainer"),f=a("PageWrapper");return g(),B(f,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:t(()=>[s(d,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:t(()=>[h("div",P,[s(c,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=_=>e.value=_)},null,8,["value"]),s(i,{type:"primary",onClick:e.handleCopy},{default:t(()=>[$]),_:1},8,["onClick"])])]),_:1})]),_:1})}var j=m(x,[["render",D]]);export{j as default};
