import{B as c}from"./Bar.611ef843.js";import{R as i}from"./RankList.25ec7439.js";import{a1 as h,a as x,U as u,o as g,k as C,G as t,n as o,p as a,bP as b,bQ as E}from"./index.397c0bf9.js";import"./useECharts.97d0f334.js";const v=l=>(b("data-v-3a137930"),l=l(),E(),l),y={class:"salesCard"},B={class:"extra-wrapper"},k=v(()=>o("div",{class:"extra-item"},[o("a",null,"\u4ECA\u65E5"),o("a",null,"\u672C\u5468"),o("a",null,"\u672C\u6708"),o("a",null,"\u672C\u5E74")],-1)),D=x({__name:"SaleTabCard",props:{loading:{type:Boolean}},setup(l){const n=[];for(let e=0;e<7;e++)n.push({name:"\u767D\u9E6D\u5C9B "+(e+1)+" \u53F7\u5E97",total:1234.56-e*100});const r=[];for(let e=0;e<12;e+=1)r.push({name:`${e+1}\u6708`,value:Math.floor(Math.random()*1e3)+200});return(e,S)=>{const p=u("a-range-picker"),s=u("a-col"),_=u("a-row"),d=u("a-tab-pane"),m=u("a-tabs"),f=u("a-card");return g(),C(f,{loading:l.loading,bordered:!1,"body-style":{padding:"0"}},{default:t(()=>[o("div",y,[a(m,{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}},{tabBarExtraContent:t(()=>[o("div",B,[k,a(p,{style:{width:"256px"}})])]),default:t(()=>[a(d,{loading:"true",tab:"\u9500\u552E\u989D",key:"1"},{default:t(()=>[a(_,null,{default:t(()=>[a(s,{xl:16,lg:12,md:12,sm:24,xs:24},{default:t(()=>[a(c,{chartData:r,option:{title:{text:"\u9500\u552E\u989D\u6392\u884C",textStyle:{fontWeight:"lighter"}}},height:"40vh"})]),_:1}),a(s,{xl:8,lg:12,md:12,sm:24,xs:24},{default:t(()=>[a(i,{title:"\u95E8\u5E97\u9500\u552E\u6392\u884C\u699C",list:n})]),_:1})]),_:1})]),_:1}),a(d,{tab:"\u9500\u552E\u8D8B\u52BF",key:"2"},{default:t(()=>[a(_,null,{default:t(()=>[a(s,{xl:16,lg:12,md:12,sm:24,xs:24},{default:t(()=>[a(c,{chartData:r.reverse(),option:{title:{text:"\u9500\u552E\u989D\u6392\u884C",textStyle:{fontWeight:"lighter"}}},height:"40vh"},null,8,["chartData"])]),_:1}),a(s,{xl:8,lg:12,md:12,sm:24,xs:24},{default:t(()=>[a(i,{title:"\u95E8\u5E97\u9500\u552E\u6392\u884C\u699C",list:n})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["loading"])}}});var F=h(D,[["__scopeId","data-v-3a137930"]]);export{F as default};
