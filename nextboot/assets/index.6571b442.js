var F=(b,p,r)=>new Promise((_,n)=>{var i=s=>{try{g(r.next(s))}catch(h){n(h)}},d=s=>{try{g(r.throw(s))}catch(h){n(h)}},g=s=>s.done?_(s.value):Promise.resolve(s.value).then(i,d);g((r=r.apply(b,p)).next())});import{a as x,z as m,B as N,U as f,o as S,i as U,p as o,G as a,J as l,a0 as Y,j as C}from"./index.0c676cb0.js";import{B as K}from"./Bar.f1ae0c06.js";import{P as T}from"./Pie.2b05732b.js";import"./useECharts.e751982a.js";const $={class:"p-4"},P=l("\u6309\u5E74\u7EDF\u8BA1"),V=l("\u6309\u6708\u7EDF\u8BA1"),j=l("\u6309\u7C7B\u522B\u7EDF\u8BA1"),z=l("\u6309\u67DC\u53F7\u7EDF\u8BA1"),G=l("\u6309\u5E74\u7EDF\u8BA1"),H=l("\u6309\u6708\u7EDF\u8BA1"),J=l("\u6309\u7C7B\u522B\u7EDF\u8BA1"),R=l("\u6309\u67DC\u53F7\u7EDF\u8BA1"),X=x({__name:"index",setup(b){const p=m("bar"),r=m("year"),_=m("year"),n=m([]),i=N({getYearCountInfo:"/mock/api/report/getYearCountInfo",getMonthCountInfo:"/mock/api/report/getMonthCountInfo",getCntrNoCountInfo:"/mock/api/report/getCntrNoCountInfo",getCabinetCountInfo:"/mock/api/report/getCabinetCountInfo"});function d(t,e,u){return F(this,null,function*(){const c=yield Y.get({url:t,params:u},{isTransformResponse:!1,errorMessageMode:"none"});if(c.success)switch(n.value=[],e){case"year":g(c.result);break;case"month":s(c.result);break;case"category":h(c.result);break;case"cabinet":I(c.result);break}})}function g(t){for(let e=0;e<t.length;e++)n.value.push({name:`${t[e].year}\u5E74`,value:t[e].yearcount})}function s(t){for(let e=0;e<t.length;e++)n.value.push({name:`${t[e].month}`,value:t[e].monthcount})}function h(t){for(let e=0;e<t.length;e++)n.value.push({name:`${t[e].classifyname}`,value:t[e].cntrnocount})}function I(t){for(let e=0;e<t.length;e++)n.value.push({name:`${t[e].cabinetname}`,value:t[e].cabinetcocunt})}function y(t){C(p)==="pie"?d(B(C(_)),C(_),{}):d(B(C(r)),C(r),{})}function B(t){if(t==="year")return i.getYearCountInfo;if(t==="month")return i.getMonthCountInfo;if(t==="category")return i.getCntrNoCountInfo;if(t==="cabinet")return i.getCabinetCountInfo}function A(t){console.log("\u5207\u6362\u7684key:",t)}return d(i.getYearCountInfo,"year",{}),(t,e)=>{const u=f("a-radio-button"),c=f("a-radio-group"),D=f("a-col"),E=f("a-row"),k=f("a-tab-pane"),M=f("a-tabs"),w=f("a-card");return S(),U("div",$,[o(w,{bordered:!1,style:{height:"100%"}},{default:a(()=>[o(M,{activeKey:p.value,"onUpdate:activeKey":e[2]||(e[2]=v=>p.value=v),onChange:A},{default:a(()=>[o(k,{key:"bar",tab:"\u67F1\u72B6\u56FE"},{default:a(()=>[o(E,null,{default:a(()=>[o(D,{span:10},{default:a(()=>[o(c,{value:r.value,"onUpdate:value":e[0]||(e[0]=v=>r.value=v),onChange:y},{default:a(()=>[o(u,{value:"year"},{default:a(()=>[P]),_:1}),o(u,{value:"month"},{default:a(()=>[V]),_:1}),o(u,{value:"category"},{default:a(()=>[j]),_:1}),o(u,{value:"cabinet"},{default:a(()=>[z]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),o(K,{chartData:n.value,height:"50vh"},null,8,["chartData"])]),_:1}),o(k,{key:"pie",tab:"\u997C\u72B6\u56FE","force-render":""},{default:a(()=>[o(E,{gutter:24},{default:a(()=>[o(D,{span:10},{default:a(()=>[o(c,{value:_.value,"onUpdate:value":e[1]||(e[1]=v=>_.value=v),onChange:y},{default:a(()=>[o(u,{value:"year"},{default:a(()=>[G]),_:1}),o(u,{value:"month"},{default:a(()=>[H]),_:1}),o(u,{value:"category"},{default:a(()=>[J]),_:1}),o(u,{value:"cabinet"},{default:a(()=>[R]),_:1})]),_:1},8,["value"])]),_:1}),o(T,{chartData:n.value,height:"40vh"},null,8,["chartData"])]),_:1})]),_:1})]),_:1},8,["activeKey"])]),_:1})])}}});export{X as default};