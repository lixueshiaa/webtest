import{B as s}from"./index.7aa87f83.js";import{D as i}from"./index.e1e2e7ed.js";import{a as n,c,o as m,k as p,G as l,p as f,j as e,ad as u}from"./index.0c676cb0.js";import{getDescSchema as d}from"./data.a1580f54.js";import{u as g}from"./useDescription.fcbd70c2.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";const x=n({__name:"DetailModal",props:{info:{type:Object,default:null}},setup(t){const{t:o}=c(),[a]=g({column:2,schema:d()});return(r,D)=>(m(),p(e(s),u({width:800,title:e(o)("sys.errorLog.tableActionDesc")},r.$attrs),{default:l(()=>[f(e(i),{data:t.info,onRegister:e(a)},null,8,["data","onRegister"])]),_:1},16,["title"]))}});export{x as default};