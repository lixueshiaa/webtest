var w=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var D=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))E.call(t,a)&&D(e,a,t[a]);if(B)for(var a of B(t))I.call(t,a)&&D(e,a,t[a]);return e},y=(e,t)=>A(e,C(t));import{a1 as V,a as L,I as f,bc as O,B as N,eE as S,a7 as x,f as h,cl as P,bf as W,U as u,o as g,k as $,G as l,n as s,p as r,J as c,t as d,i as F,a9 as U,N as J}from"./index.397c0bf9.js";import{P as M}from"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useWindowSizeFn.830b179a.js";import"./useContentViewHeight.4e4c24ce.js";const R=L({components:{PageWrapper:M,[f.name]:f,InputTextArea:f.TextArea,Tag:O},setup(){const e=N({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:a,send:v,close:b,open:T}=S(e.server,{autoReconnect:!1,heartbeat:!0});x(()=>{if(a.value)try{const o=JSON.parse(a.value);e.recordList.push(o)}catch(o){e.recordList.push({res:a.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const n=h(()=>t.value==="OPEN"),p=h(()=>n.value?"success":"red"),i=h(()=>[...e.recordList].reverse());function m(){v(e.sendValue),e.sendValue=""}function _(){n.value?b():T()}return y(k({status:t,formatToDateTime:P},W(e)),{handlerSend:m,getList:i,toggle:_,getIsOpen:n,getTagColor:p})}}),G={class:"flex"},j={class:"w-1/3 bg-white p-4"},q={class:"flex items-center"},z=s("span",{class:"text-lg font-medium mr-4"}," \u8FDE\u63A5\u72B6\u6001: ",-1),H=s("hr",{class:"my-4"},null,-1),K={class:"flex"},Q=c(" \u670D\u52A1\u5730\u5740 "),X=s("p",{class:"text-lg font-medium mt-4"},"\u8BBE\u7F6E",-1),Y=s("hr",{class:"my-4"},null,-1),Z=c(" \u53D1\u9001 "),ee={class:"w-2/3 bg-white ml-4 p-4"},te=s("span",{class:"text-lg font-medium mr-4"}," \u6D88\u606F\u8BB0\u5F55: ",-1),se=s("hr",{class:"my-4"},null,-1),ae={class:"max-h-80 overflow-auto"},oe={class:"flex items-center"},ne=s("span",{class:"mr-2 text-primary font-medium"},"\u6536\u5230\u6D88\u606F:",-1);function ue(e,t,a,v,b,T){const n=u("Tag"),p=u("a-input"),i=u("a-button"),m=u("InputTextArea"),_=u("PageWrapper");return g(),$(_,{title:"WebSocket \u793A\u4F8B"},{default:l(()=>[s("div",G,[s("div",j,[s("div",q,[z,r(n,{color:e.getTagColor},{default:l(()=>[c(d(e.status),1)]),_:1},8,["color"])]),H,s("div",K,[r(p,{value:e.server,"onUpdate:value":t[0]||(t[0]=o=>e.server=o),disabled:""},{addonBefore:l(()=>[Q]),_:1},8,["value"]),r(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:l(()=>[c(d(e.getIsOpen?"\u5173\u95ED\u8FDE\u63A5":"\u5F00\u542F\u8FDE\u63A5"),1)]),_:1},8,["type","onClick"])]),X,Y,r(m,{placeholder:"\u9700\u8981\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u5185\u5BB9",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[1]||(t[1]=o=>e.sendValue=o),allowClear:""},null,8,["disabled","value"]),r(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:l(()=>[Z]),_:1},8,["disabled","onClick"])]),s("div",ee,[te,se,s("div",ae,[s("ul",null,[(g(!0),F(J,null,U(e.getList,o=>(g(),F("li",{class:"mt-2",key:o.time},[s("div",oe,[ne,s("span",null,d(e.formatToDateTime(o.time)),1)]),s("div",null,d(o.res),1)]))),128))])])])])]),_:1})}var me=V(R,[["render",ue]]);export{me as default};
