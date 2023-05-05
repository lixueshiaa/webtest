import{B as A}from"./Bar.a73f18d3.js";import{B as L,G as R}from"./Gauge.dfd42a80.js";import{L as w,T as O}from"./Line.40654f4c.js";import{L as T}from"./LineMulti.b82236d5.js";import{P as K}from"./Pie.ccbe4331.js";import{u as k}from"./useECharts.6d082cc9.js";import{a as b,z as x,B as j,a7 as $,a1 as M,o as B,i as C,a2 as S,U as F,p as t,G as o,j as p}from"./index.6cf4d174.js";import{R as G}from"./RankList.362865ae.js";import"./install.1c404e6a.js";const P=(()=>{let a=+new Date;const c=[],s=[],f=[];for(let r=0;r<20;r++){let n={name:"",value:0};const u=new Date(a+=1e3*3600*24);n.name=[u.getFullYear(),u.getMonth()+1,u.getDate()].join("-"),n.value=Math.random()*200,c.push(n)}for(let r=0;r<2;r++)for(let n=0;n<20;n++){let u={name:"",value:0,type:2010+r+""};const e=new Date(a+1e3*3600*24*n);u.name=[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-"),u.value=Math.random()*200,s.push(u)}const l=[{value:335,name:"\u5BA2\u670D\u7535\u8BDD"},{value:310,name:"\u5965\u8FEA\u5B98\u7F51"},{value:234,name:"\u5A92\u4F53\u66DD\u5149"},{value:135,name:"\u8D28\u68C0\u603B\u5C40"},{value:105,name:"\u5176\u4ED6"}],y=[{value:75,name:"\u653F\u6CBB",type:"\u6587\u7EFC",max:100},{value:65,name:"\u5386\u53F2",type:"\u6587\u7EFC",max:100},{value:55,name:"\u5730\u7406",type:"\u6587\u7EFC",max:100},{value:74,name:"\u5316\u5B66",type:"\u6587\u7EFC",max:100},{value:38,name:"\u7269\u7406",type:"\u6587\u7EFC",max:100},{value:88,name:"\u751F\u7269",type:"\u6587\u7EFC",max:100}];for(let r=0;r<2;r++)for(let n=0;n<15;n++){let u={name:"",value:0,type:2010+r+"",seriesType:r>=1?"line":"bar"};const e=new Date(a+1e3*3600*24*n);u.name=[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-"),u.value=Math.random()*200,f.push(u)}return{barDataSource:c,barMultiData:s,pieData:l,barLineData:f,radarData:y}})(),Y=b({name:"Radar",props:{chartData:{type:Array,default:()=>[]},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(a){const c=x(null),{setOptions:s,echarts:f}=k(c),l=j({title:{text:"\u57FA\u7840\u96F7\u8FBE\u56FE"},legend:{data:["\u6587\u7EFC","\u7406\u7EFC"]},radar:{indicator:[{name:"\u5386\u53F2",max:100},{name:"\u5730\u7406",max:110},{name:"\u751F\u7269",max:120},{name:"\u5316\u5B66",max:130},{name:"\u7269\u7406",max:140},{name:"\u653F\u6CBB",max:150}]},series:[{type:"radar",data:[{value:[82,70,60,55,90,66],name:"\u6587\u7EFC"}]}]});$(()=>{a.chartData&&y()});function y(){a.option&&Object.assign(l,a.option);let r=Array.from(new Set(a.chartData.map(e=>e.type))),n=Array.from(new Set(a.chartData.map(e=>{let{name:d,max:m}=e;return{name:d,max:m}}))),u=[];r.forEach(e=>{let d={name:e},m=a.chartData.filter(h=>e===h.type);d.value=m.map(h=>h.value),u.push(d)}),l.radar.indicator=n,l.series[0].data=u,s(l)}return{chartRef:c}}});function z(a,c,s,f,l,y){return B(),C("div",{ref:"chartRef",style:S({height:a.height,width:a.width})},null,4)}var U=M(Y,[["render",z]]);const N=b({name:"barAndLine",props:{chartData:{type:Array,default:()=>[]},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(a){const c=x(null),{setOptions:s,echarts:f}=k(c),l=j({tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[{name:"bar",type:"bar",data:[]}]});$(()=>{a.chartData&&y()});function y(){a.option&&Object.assign(l,a.option);let r=Array.from(new Set(a.chartData.map(e=>e.type))),n=Array.from(new Set(a.chartData.map(e=>e.name))),u=[];r.forEach(e=>{let d={name:e},m=a.chartData.filter(h=>e===h.type);d.data=m.map(h=>h.value),d.type=m[0].seriesType,u.push(d)}),l.series=u,l.xAxis.data=n,s(l)}return{chartRef:c}}});function V(a,c,s,f,l,y){return B(),C("div",{ref:"chartRef",style:S({height:a.height,width:a.width})},null,4)}var q=M(N,[["render",V]]);const H={class:"p-4"},ut=b({__name:"index",setup(a){const c=x("1"),{barDataSource:s,barMultiData:f,pieData:l,barLineData:y,radarData:r}=P,n={title:{text:"\u591A\u5217\u67F1\u72B6\u56FE",left:"center"}},u=d("name","total",2e3,100,"\u5317\u4EAC\u671D\u9633 "," \u53F7\u5E97");function e(m){console.log("\u5207\u6362\u7684key:",m)}function d(m,h,v,g,i="",E="\u6708"){let _=[];for(let D=0;D<12;D+=1)_.push({[m]:`${i}${D+1}${E}`,[h]:Math.floor(Math.random()*v)+g});return _}return(m,h)=>{const v=F("a-col"),g=F("a-row"),i=F("a-tab-pane"),E=F("a-tabs"),_=F("a-card");return B(),C("div",H,[t(_,{bordered:!1,style:{height:"100%"}},{default:o(()=>[t(E,{activeKey:c.value,"onUpdate:activeKey":h[0]||(h[0]=D=>c.value=D),onChange:e},{default:o(()=>[t(i,{key:"1",tab:"\u67F1\u72B6\u56FE"},{default:o(()=>[t(g,null,{default:o(()=>[t(v,{span:24},{default:o(()=>[t(A,{chartData:p(s),height:"50vh",option:{title:{text:"\u9500\u552E\u989D\u6392\u884C",left:"center"}}},null,8,["chartData"])]),_:1})]),_:1})]),_:1}),t(i,{key:"2",tab:"\u591A\u5217\u67F1\u72B6\u56FE","force-render":""},{default:o(()=>[t(L,{chartData:p(f),option:n,height:"50vh"},null,8,["chartData"])]),_:1}),t(i,{key:"3",tab:"\u8FF7\u4F60\u67F1\u72B6\u56FE",style:{display:"flex","justify-content":"center"}},{default:o(()=>[t(A,{chartData:p(s),width:"30%",height:"50vh"},null,8,["chartData"])]),_:1}),t(i,{key:"4",tab:"\u9762\u79EF\u56FE"},{default:o(()=>[t(w,{chartData:p(s),height:"50vh",option:{title:{text:"\u9500\u552E\u989D\u6392\u884C",left:"center"}}},null,8,["chartData"])]),_:1}),t(i,{key:"5",tab:"\u8FF7\u4F60\u9762\u79EF\u56FE",style:{display:"flex","justify-content":"center"}},{default:o(()=>[t(w,{chartData:p(s),width:"30%",height:"50vh"},null,8,["chartData"])]),_:1}),t(i,{key:"6",tab:"\u591A\u884C\u6298\u7EBF\u56FE"},{default:o(()=>[t(T,{chartData:p(f),height:"50vh",option:n,type:"line"},null,8,["chartData"])]),_:1}),t(i,{key:"7",tab:"\u997C\u56FE"},{default:o(()=>[t(K,{chartData:p(l),height:"40vh",option:{title:{text:"\u57FA\u7840\u997C\u72B6\u56FE",left:"center"}}},null,8,["chartData"])]),_:1}),t(i,{key:"8",tab:"\u96F7\u8FBE\u56FE"},{default:o(()=>[t(U,{chartData:p(r),height:"50vh"},null,8,["chartData"])]),_:1}),t(i,{key:"9",tab:"\u4EEA\u8868\u76D8"},{default:o(()=>[t(R,{chartData:{name:"\u51FA\u52E4\u7387",value:70},height:"50vh"})]),_:1}),t(i,{key:"10",tab:"\u6298\u67F1\u56FE"},{default:o(()=>[t(q,{chartData:p(y),height:"50vh"},null,8,["chartData"])]),_:1}),t(i,{key:"11",tab:"\u6392\u540D\u5217\u8868"},{default:o(()=>[t(G,{title:"\u95E8\u5E97\u9500\u552E\u6392\u884C\u699C",list:p(u),style:{width:"600px",margin:"0 auto"}},null,8,["list"])]),_:1}),t(i,{key:"13",tab:"\u8D8B\u52BF"},{default:o(()=>[t(O,{title:"Trend",term:"Trend\uFF1A",percentage:30})]),_:1})]),_:1},8,["activeKey"])]),_:1})])}}});export{ut as default};