import{a as h,a6 as v,z as a,b as y,f as x,o as H,i as w,p as S,G as z,n as R,r as f,j as e,a2 as u,dO as C,a1 as k}from"./index.397c0bf9.js";import{u as B}from"./useWindowSizeFn.830b179a.js";import{u as L}from"./useContentViewHeight.4e4c24ce.js";const $=["src"],b=h({__name:"index",props:{frameSrc:v.string.def("")},setup(p){const s=a(!0),d=a(50),i=a(window.innerHeight),r=a(),{headerHeightRef:m}=L(),{prefixCls:o}=y("iframe-page");B(l,150,{immediate:!0});const c=x(()=>({height:`${e(i)}px`}));function l(){const n=e(r);if(!n)return;const t=m.value;d.value=t,i.value=window.innerHeight-t;const g=document.documentElement.clientHeight-t;n.style.height=`${g}px`}function _(){s.value=!1,l()}return(n,t)=>(H(),w("div",{class:f(e(o)),style:u(e(c))},[S(e(C),{spinning:s.value,size:"large",style:u(e(c))},{default:z(()=>[R("iframe",{src:p.frameSrc,class:f(`${e(o)}__main`),ref_key:"frameRef",ref:r,onLoad:_},null,42,$)]),_:1},8,["spinning","style"])],6))}});var V=k(b,[["__scopeId","data-v-6cbe7e20"]]);export{V as default};
