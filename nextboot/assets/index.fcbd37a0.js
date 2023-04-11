var v=Object.defineProperty,w=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(d,t,m)=>t in d?v(d,t,{enumerable:!0,configurable:!0,writable:!0,value:m}):d[t]=m,y=(d,t)=>{for(var m in t||(t={}))S.call(t,m)&&h(d,m,t[m]);if(k)for(var m of k(t))b.call(t,m)&&h(d,m,t[m]);return d},B=(d,t)=>w(d,R(t));import{B as E}from"./BasicTable.ebe28ef2.js";import"./componentMap.801737ea.js";import"./TableImg.a4c65e1f.js";import{u as I}from"./useTable.db680d93.js";import{a0 as q,h as M,a as D,z as H,C as N,U as T,o as r,i as c,p as g,G as o,n as C,J as s,t as a,k as u,j as F}from"./index.0c676cb0.js";import"./BasicForm.7ed18e1d.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import"./useFormItem.47fc2179.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import"./api.6d7ba78d.js";import"./functional.51da07bc.js";import"./index.7910eff5.js";import"./onMountedOrActivated.29514295.js";import"./useContentViewHeight.3c3f37af.js";import"./FormOutlined.f1bb593e.js";import"./useSortable.29b10662.js";import"./index.95c15ee4.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./props.acb18fde.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";const O=()=>q.get({url:"/actuator/httptrace"},{isTransformResponse:!1}),P=[{title:"\u8BF7\u6C42\u65F6\u95F4",dataIndex:"timestamp",width:50,customRender(d){return M(d).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u8BF7\u6C42\u65B9\u6CD5",dataIndex:"request.method",width:20,slots:{customRender:"requestMethod"}},{title:"\u8BF7\u6C42URL",dataIndex:"request.uri",width:200},{title:"\u54CD\u5E94\u72B6\u6001",dataIndex:"response.status",width:50,slots:{customRender:"responseStatus"}},{title:"\u8BF7\u6C42\u8017\u65F6",dataIndex:"timeTaken",width:50,slots:{customRender:"timeTaken"}}],Y={class:"p-4"},A={slot:"message"},L={key:5},U={key:4},V=D({name:"monitor-trace"}),be=D(B(y({},V),{setup(d){const t=H([]),[m,{reload:G}]=I({columns:P,showIndexColumn:!1,bordered:!0,rowKey:"id"});function p(){O().then(_=>{let l=[];for(let n of _.traces)n.request.method!=="OPTIONS"&&n.request.uri.indexOf("httptrace")===-1&&l.push(n);t.value=l})}return N(()=>{p()}),(_,l)=>{const n=T("a-divider"),i=T("a-tag");return r(),c("div",Y,[g(F(E),{onRegister:F(m),dataSource:t.value},{tableTitle:o(()=>[C("div",A,[s(" \u5171\u8FFD\u8E2A\u5230 "+a(t.value.length)+" \u6761\u8FD1\u671FHTTP\u8BF7\u6C42\u8BB0\u5F55 ",1),g(n,{type:"vertical"}),C("a",{onClick:p},"\u7ACB\u5373\u5237\u65B0")])]),timeTaken:o(({record:f,text:e})=>[e<500?(r(),u(i,{key:0,color:"green"},{default:o(()=>[s(a(e)+" ms",1)]),_:2},1024)):e<1e3?(r(),u(i,{key:1,color:"cyan"},{default:o(()=>[s(a(e)+" ms",1)]),_:2},1024)):e<1500?(r(),u(i,{key:2,color:"orange"},{default:o(()=>[s(a(e)+" ms",1)]),_:2},1024)):(r(),u(i,{key:3,color:"red"},{default:o(()=>[s(a(e)+" ms",1)]),_:2},1024))]),responseStatus:o(({record:f,text:e})=>[e<200?(r(),u(i,{key:0,color:"pink"},{default:o(()=>[s(a(e),1)]),_:2},1024)):e<201?(r(),u(i,{key:1,color:"green"},{default:o(()=>[s(a(e),1)]),_:2},1024)):e<399?(r(),u(i,{key:2,color:"cyan"},{default:o(()=>[s(a(e),1)]),_:2},1024)):e<403?(r(),u(i,{key:3,color:"orange"},{default:o(()=>[s(a(e),1)]),_:2},1024)):e<501?(r(),u(i,{key:4,color:"red"},{default:o(()=>[s(a(e),1)]),_:2},1024)):(r(),c("span",L,a(e),1))]),requestMethod:o(({record:f,text:e})=>[e==="GET"?(r(),u(i,{key:0,color:"#87d068"},{default:o(()=>[s(a(e),1)]),_:2},1024)):e==="POST"?(r(),u(i,{key:1,color:"#2db7f5"},{default:o(()=>[s(a(e),1)]),_:2},1024)):e==="PUT"?(r(),u(i,{key:2,color:"#ffba5a"},{default:o(()=>[s(a(e),1)]),_:2},1024)):e==="DELETE"?(r(),u(i,{key:3,color:"#f50"},{default:o(()=>[s(a(e),1)]),_:2},1024)):(r(),c("span",U,a(e)+" ms",1))]),_:1},8,["onRegister","dataSource"])])}}}));export{be as default};
