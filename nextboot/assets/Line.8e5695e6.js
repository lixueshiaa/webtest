import{a as d,f as l,a1 as p,U as m,o as f,i as h,J as _,t as c,n as u,p as g,r as v,z as x,B as b,a7 as $,a2 as w}from"./index.d537950e.js";import{u as D}from"./useECharts.243c5f8c.js";const N=d({name:"Trend",props:{term:{type:String,default:"",required:!0},percentage:{type:Number,default:null},type:{type:Boolean,default:null},target:{type:Number,default:0},value:{type:Number,default:0},fixed:{type:Number,default:2}},setup(e){const t=l(()=>(e.type===null?e.value>=e.target:e.type)?"up":"down"),n=l(()=>(e.percentage===null?Math.abs(e.value-e.target)*100/e.target:e.percentage).toFixed(e.fixed));return{trend:t,rate:n}}}),S={class:"chart-trend"};function C(e,t,n,r,a,s){const o=m("Icon");return f(),h("div",S,[_(c(e.term)+" ",1),u("span",null,c(e.rate)+"%",1),u("span",{class:v(["trend-icon",e.trend])},[g(o,{icon:"ant-design:caret-"+e.trend+"-outlined"},null,8,["icon"])],2)])}var z=p(N,[["render",C],["__scopeId","data-v-89fc5f18"]]);const A=d({name:"line",props:{chartData:{type:Array,default:()=>[]},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(e){const t=x(null),{setOptions:n,echarts:r}=D(t),a=b({tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[{type:"line",showSymbol:!1,smooth:!0,areaStyle:{},data:[]}]});$(()=>{e.chartData&&s()});function s(){e.option&&Object.assign(a,e.option);let o=e.chartData.map(i=>i.value),y=e.chartData.map(i=>i.name);a.series[0].data=o,a.xAxis.data=y,n(a)}return{chartRef:t}}});function B(e,t,n,r,a,s){return f(),h("div",{ref:"chartRef",style:w({height:e.height,width:e.width})},null,4)}var E=p(A,[["render",B]]);export{E as L,z as T};
