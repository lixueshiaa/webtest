import{D as a}from"./index.1fb8cef2.js";import{a1 as n,a as u,U as i,o as c,k as l}from"./index.d537950e.js";import{u as m}from"./useDescription.1f1d02bb.js";const s={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"\u53A6\u95E8\u5E02\u601D\u660E\u533A",sex:"\u7537",certy:"3504256199xxxxxxxxx",tag:"orange"},t=[{field:"username",label:"\u7528\u6237\u540D"},{field:"nickName",label:"\u6635\u79F0",render:(e,r)=>`${r.username}-${e}`},{field:"phone",label:"\u8054\u7CFB\u7535\u8BDD"},{field:"email",label:"\u90AE\u7BB1"},{field:"addr",label:"\u5730\u5740"}],p=u({components:{Description:a},setup(){const[e]=m({title:"useDescription",data:s,schema:t});return{mockData:s,schema:t,register:e}}});function d(e,r,x,f,D,_){const o=i("Description");return c(),l(o,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"])}var $=n(p,[["render",d]]);export{$ as default};
