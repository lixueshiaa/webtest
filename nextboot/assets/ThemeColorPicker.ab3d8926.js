import{a1 as l,a as m,d_ as c,b as d,U as u,o as r,i as n,N as _,a9 as C,r as a,a2 as f,p as k}from"./index.0c676cb0.js";import{b as h}from"./index.b22f827e.js";import"./index.082b5cba.js";import"./index.ff9cad37.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./LoginSelect.114bd104.js";import"./index.7aa87f83.js";import"./index.093e39c9.js";import"./index.fc625b76.js";import"./useContentViewHeight.3c3f37af.js";import"./useSortable.29b10662.js";import"./lock.c07ea4e7.js";const v=m({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:o}=d("setting-theme-picker");function i(s){e.event&&h(e.event,s)}return{prefixCls:o,handleClick:i}}}),y=["onClick"];function $(e,o,i,s,g,b){const p=u("CheckOutlined");return r(),n("div",{class:a(e.prefixCls)},[(r(!0),n(_,null,C(e.colorList||[],t=>(r(),n("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var U=l(v,[["render",$]]);export{U as default};
