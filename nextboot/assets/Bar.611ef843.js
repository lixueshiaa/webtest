import{u as h}from"./useECharts.97d0f334.js";import{a as l,z as p,B as u,a7 as f,a1 as d,o as m,i as y,a2 as x}from"./index.397c0bf9.js";const g=l({name:"bar",props:{chartData:{type:Array,default:()=>[]},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(t){const e=p(null),{setOptions:s,echarts:n}=h(e),a=u({tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[{name:"bar",type:"bar",data:[]}]});f(()=>{t.chartData&&i()});function i(){t.option&&Object.assign(a,t.option);let o=t.chartData.map(r=>r.value),c=t.chartData.map(r=>r.name);a.series[0].data=o,a.xAxis.data=c,s(a)}return{chartRef:e}}});function b(t,e,s,n,a,i){return m(),y("div",{ref:"chartRef",style:x({height:t.height,width:t.width})},null,4)}var D=d(g,[["render",b]]);export{D as B};
