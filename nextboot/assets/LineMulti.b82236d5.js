import{u as g}from"./useECharts.6d082cc9.js";import{a as x,z as A,B as k,a7 as w,a1 as D,o as b,i as v,a2 as S}from"./index.6cf4d174.js";const _=x({name:"lineMulti",props:{chartData:{type:Array,default:()=>[],required:!0},option:{type:Object,default:()=>({})},type:{type:String,default:"bar"},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},emits:["click"],setup(t,{emit:c}){const r=A(null),{setOptions:s,getInstance:i}=g(r),a=k({tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{top:30},grid:{top:60},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[]});w(()=>{t.chartData&&d()});function d(){var p,h;t.option&&Object.assign(a,t.option);let n=Array.from(new Set(t.chartData.map(e=>e.type))),y=Array.from(new Set(t.chartData.map(e=>e.name))),f=[];n.forEach(e=>{let u={name:e,type:t.type},m=t.chartData.filter(o=>e===o.type);u.data=m.map(o=>o.value),f.push(u)}),a.series=f,a.xAxis.data=y,s(a),(p=i())==null||p.off("click",l),(h=i())==null||h.on("click",l)}function l(n){c("click",n)}return{chartRef:r}}});function C(t,c,r,s,i,a){return b(),v("div",{ref:"chartRef",style:S({height:t.height,width:t.width})},null,4)}var j=D(_,[["render",C]]);export{j as L};
