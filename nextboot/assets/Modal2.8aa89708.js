import{B as u}from"./index.7ab28a2b.js";import{a as c,bg as p,a1 as d,U as r,o as _,k as m,G as e,p as n,J as l}from"./index.397c0bf9.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";const M=c({components:{BasicModal:u},setup(){const[o,{closeModal:t,setModalProps:s}]=p();return{register:o,closeModal:t,setModalProps:()=>{s({title:"Modal New Title"})}}}}),f=l(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 "),C=l(" \u4ECE\u5185\u90E8\u4FEE\u6539title ");function E(o,t,s,k,B,g){const a=r("a-button"),i=r("BasicModal");return _(),m(i,{onRegister:o.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:e(()=>[n(a,{type:"primary",onClick:o.closeModal,class:"mr-2"},{default:e(()=>[f]),_:1},8,["onClick"]),n(a,{type:"primary",onClick:o.setModalProps},{default:e(()=>[C]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var $=d(M,[["render",E]]);export{$ as default};
