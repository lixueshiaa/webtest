import{u as h}from"./useECharts.97d0f334.js";import{a as u,z as p,B as d,a7 as m,X as y,a1 as b,o as g,i as k,a2 as w}from"./index.397c0bf9.js";const _=u({name:"Pie",props:{chartData:{type:Array,default:()=>[]},size:{type:Object,default:()=>{}},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},emits:["click"],setup(t,{emit:n}){const a=p(null),{setOptions:o,getInstance:i,resize:r}=h(a),c=d({tooltip:{formatter:"{b} ({c})"},series:[{type:"pie",radius:"72%",center:["50%","55%"],data:[],labelLine:{show:!0},label:{show:!0,formatter:`{b} 
 ({d}%)`,color:"#B1B9D3"}}]});m(()=>{t.chartData&&f()}),y(()=>t.size,()=>{r()},{immediate:!0});function f(){var e,l;t.option&&Object.assign(c,t.option),c.series[0].data=t.chartData,o(c),r(),(e=i())==null||e.off("click",s),(l=i())==null||l.on("click",s)}function s(e){n("click",e)}return{chartRef:a}}});function z(t,n,a,o,i,r){return g(),k("div",{ref:"chartRef",style:w({height:t.height,width:t.width})},null,4)}var C=b(_,[["render",z]]);export{C as P};
