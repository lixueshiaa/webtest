import{a as p}from"./depart.user.api.f58aaab9.js";import{u as m}from"./depart.user.data.93d582e0.js";import{D as u}from"./index.9cc41dfa.js";import{u as f}from"./useDescription.647755d5.js";import{a as d,b4 as l,z as D,C as _,X as h,o as b,k as x,j as s}from"./index.397c0bf9.js";import"./user.api.4aaf6a90.js";const q=d({__name:"DepartBaseInfoTab",props:{data:{require:!0,type:Object}},setup(r){const t=r;l("prefixCls");const a=D([]),{descItems:o}=m(a),[n,{setDescProps:c}]=f({data:t.data,schema:o,column:1,labelStyle:{width:"180px"}});function i(e){c({data:e})}return _(()=>{h(()=>t.data,()=>i(t.data),{immediate:!0})}),p().then(e=>a.value=e),(e,B)=>(b(),x(s(u),{onRegister:s(n)},null,8,["onRegister"]))}});export{q as default};
