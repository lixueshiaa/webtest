import{a as i,z as o,X as u,o as l,k as r,G as s,n as d,a2 as f,j as c,dU as m}from"./index.9eb451d3.js";import{u as h}from"./useECharts.2f61c535.js";const B=i({__name:"VisitSource",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=o(null),{setOptions:n}=h(t);return u(()=>a.loading,()=>{a.loading||n({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u641C\u7D22\u5F15\u64CE"},{value:735,name:"\u76F4\u63A5\u8BBF\u95EE"},{value:580,name:"\u90AE\u4EF6\u8425\u9500"},{value:484,name:"\u8054\u76DF\u5E7F\u544A"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),(g,p)=>(l(),r(c(m),{title:"\u8BBF\u95EE\u6765\u6E90",loading:e.loading},{default:s(()=>[d("div",{ref_key:"chartRef",ref:t,style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{B as default};
