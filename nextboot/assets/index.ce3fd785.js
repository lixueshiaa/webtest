import{a1 as _,a as S,b1 as m,el as T,em as f,en as x,eo as R,ep as X,eq as h,er as E,es as Y,et as w,eu as y,ev as C,ew as k,ex as B,z as n,U as s,o as r,k as l,G as o,n as i,p,ai as b,D as F,E as $,J as g}from"./index.397c0bf9.js";import{P}from"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useWindowSizeFn.830b179a.js";import"./useContentViewHeight.4e4c24ce.js";const A=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],D=A.map(e=>({label:e,value:e,key:e})),N=S({components:{Select:m,PageWrapper:P,FadeTransition:T,ScaleTransition:f,SlideYTransition:x,ScrollYTransition:R,SlideYReverseTransition:X,ScrollYReverseTransition:h,SlideXTransition:E,ScrollXTransition:Y,SlideXReverseTransition:w,ScrollXReverseTransition:y,ScaleRotateTransition:C,ExpandXTransition:k,ExpandTransition:B},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:D,value:e,start:t,show:a}}}),V={class:"flex"},W=g(" start "),U={class:"box"};function q(e,a,t,z,G,I){const c=s("Select"),u=s("a-button"),d=s("PageWrapper");return r(),l(d,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:o(()=>[i("div",V,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(u,{type:"primary",class:"ml-4",onClick:e.start},{default:o(()=>[W]),_:1},8,["onClick"])]),(r(),l(b(`${e.value}Transition`),null,{default:o(()=>[F(i("div",U,null,512),[[$,e.show]])]),_:1}))]),_:1})}var M=_(N,[["render",q],["__scopeId","data-v-0389278d"]]);export{M as default};
