import{a as i,z as s,X as r,o as l,k as d,G as n,n as m,a2 as u,j as c,dU as f}from"./index.d537950e.js";import{u as h}from"./useECharts.243c5f8c.js";const S=i({__name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const t=e,a=s(null),{setOptions:o}=h(a);return r(()=>t.loading,()=>{t.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(x,g)=>(l(),d(c(f),{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:n(()=>[m("div",{ref_key:"chartRef",ref:a,style:u({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{S as default};