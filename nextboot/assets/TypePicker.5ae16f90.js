import{a1 as r,a as i,aX as l,b as c,U as d,o as s,i as a,N as _,a9 as u,r as o,k as f,G as m,n,bP as y,bQ as v}from"./index.9eb451d3.js";const k=i({name:"MenuTypePicker",components:{Tooltip:l},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=c("setting-menu-type-picker");return{prefixCls:e}}}),C=e=>(y("data-v-7e211634"),e=e(),v(),e),h=["onClick"],$=C(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[$];function b(e,g,x,B,I,P){const p=d("Tooltip");return s(),a("div",{class:o(e.prefixCls)},[(s(!0),a(_,null,u(e.menuTypeList||[],t=>(s(),f(p,{key:t.title,title:t.title,placement:"bottom"},{default:m(()=>[n("div",{onClick:S=>e.handler(t),class:o([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,h)]),_:2},1032,["title"]))),128))],2)}var w=r(k,[["render",b],["__scopeId","data-v-7e211634"]]);export{w as default};
