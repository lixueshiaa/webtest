import{a as o,z as r,X as l,o as s,k as d,G as c,n as m,a2 as f,j as h,dU as g}from"./index.397c0bf9.js";import{u as p}from"./useECharts.97d0f334.js";const C=o({__name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=r(null),{setOptions:i}=p(t);return l(()=>a.loading,()=>{a.loading||i({tooltip:{trigger:"item"},series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"\u7535\u5B50\u4EA7\u54C1"},{value:310,name:"\u670D\u88C5"},{value:274,name:"\u5316\u5986\u54C1"},{value:400,name:"\u5BB6\u5C45"}].sort(function(n,u){return n.value-u.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(n,u)=>(s(),d(h(g),{title:"\u6210\u4EA4\u5360\u6BD4",loading:e.loading},{default:c(()=>[m("div",{ref_key:"chartRef",ref:t,style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{C as default};
