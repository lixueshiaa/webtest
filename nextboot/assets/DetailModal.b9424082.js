var p=(u,o,e)=>new Promise((r,l)=>{var d=t=>{try{n(e.next(t))}catch(s){l(s)}},a=t=>{try{n(e.throw(t))}catch(s){l(s)}},n=t=>t.done?r(t.value):Promise.resolve(t.value).then(d,a);n((e=e.apply(u,o)).next())});import{B}from"./index.f8f2ddf0.js";import{a1 as M,a as g,z as m,bg as h,j as i,U as c,o as C,k as F,G as v,p as _,n as D,ad as E}from"./index.6cf4d174.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";const k=["innerHTML"],x=g({__name:"DetailModal",setup(u){const o=m(!0),e=m({}),[r,{setModalProps:l,closeModal:d}]=h(a=>p(this,null,function*(){o.value=!!(a!=null&&a.isUpdate),i(o)&&(e.value=a.record)}));return(a,n)=>{const t=c("a-card-meta"),s=c("a-divider"),f=c("a-card");return C(),F(i(B),E(a.$attrs,{onRegister:i(r),title:"\u67E5\u770B\u8BE6\u60C5",minHeight:600,showCancelBtn:!1,showOkBtn:!1,height:88}),{default:v(()=>[_(f,{class:"daily-article"},{default:v(()=>[_(t,{title:e.value.titile,description:"\u53D1\u5E03\u4EBA\uFF1A"+e.value.sender+" \u53D1\u5E03\u65F6\u95F4\uFF1A "+e.value.sendTime},null,8,["title","description"]),_(s),D("span",{innerHTML:e.value.msgContent,class:"article-content"},null,8,k)]),_:1})]),_:1},16,["onRegister"])}}});var U=M(x,[["__scopeId","data-v-0d626055"]]);export{U as default};
