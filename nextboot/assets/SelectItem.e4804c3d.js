import{a1 as i,a as l,b1 as r,b as p,f as d,U as m,o as c,i as u,n as f,t as g,p as _,ad as b,r as v}from"./index.6cf4d174.js";import{b as y}from"./index.e49e968d.js";import"./index.9ae51836.js";import"./index.89d4d563.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./LoginSelect.71b991a4.js";import"./index.f8f2ddf0.js";import"./index.a734aa5f.js";import"./index.3e393e13.js";import"./useContentViewHeight.183e9878.js";import"./useSortable.746d5656.js";import"./lock.4d4ef288.js";const C=l({name:"SelectItem",components:{Select:r},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=d(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function n(s){e.event&&y(e.event,s)}return{prefixCls:t,handleChange:n,getBindValue:a}}});function S(e,t,a,n,s,h){const o=m("Select");return c(),u("div",{class:v(e.prefixCls)},[f("span",null,g(e.title),1),_(o,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var j=i(C,[["render",S],["__scopeId","data-v-73c57eae"]]);export{j as default};
