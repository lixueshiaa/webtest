var b=Object.defineProperty;var y=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var h=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&h(e,r,t[r]);if(y)for(var r of y(t))E.call(t,r)&&h(e,r,t[r]);return e};var f=(e,t,r)=>new Promise((c,d)=>{var m=u=>{try{l(r.next(u))}catch(i){d(i)}},p=u=>{try{l(r.throw(u))}catch(i){d(i)}},l=u=>u.done?c(u.value):Promise.resolve(u.value).then(m,p);l((r=r.apply(e,t)).next())});import{B as I}from"./index.f8f2ddf0.js";import{B as T}from"./BasicForm.74bae903.js";import{r as s}from"./componentMap.bdddb878.js";import{u as w}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import{a0 as a,bR as _,a as A,z as R,bg as x,j as n,f as P,o as M,k as S,G as v,p as k,ad as U}from"./index.6cf4d174.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import{r as L}from"./validator.f8adecf1.js";const Q=[{title:"\u6807\u9898",width:150,dataIndex:"titile"},{title:"\u6D88\u606F\u7C7B\u578B",dataIndex:"msgCategory",width:100,customRender:({text:e})=>s.renderDict(e,"msg_category")},{title:"\u53D1\u5E03\u4EBA",width:100,dataIndex:"sender"},{title:"\u4F18\u5148\u7EA7",dataIndex:"priority",width:70,customRender:({text:e})=>{const t=e=="L"?"blue":e=="M"?"yellow":"red";return s.renderTag(s.renderDict(e,"priority"),t)}},{title:"\u901A\u544A\u5BF9\u8C61",dataIndex:"msgType",width:100,customRender:({text:e})=>s.renderDict(e,"msg_type")},{title:"\u53D1\u5E03\u72B6\u6001",dataIndex:"sendStatus",width:70,customRender:({text:e})=>{const t=e=="0"?"red":e=="1"?"green":"gray";return s.renderTag(s.renderDict(e,"send_status"),t)}},{title:"\u53D1\u5E03\u65F6\u95F4",width:100,dataIndex:"sendTime"},{title:"\u64A4\u9500\u65F6\u95F4",width:100,dataIndex:"cancelTime"}],W=[{field:"titile",label:"\u6807\u9898",component:"JInput",colProps:{span:8}}],N=[{field:"id",label:"id",component:"Input",show:!1},{field:"msgCategory",label:"\u6D88\u606F\u7C7B\u578B",required:!0,component:"JDictSelectTag",defaultValue:"1",componentProps:{type:"radio",dictCode:"msg_category",placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B"}},{field:"titile",label:"\u6807\u9898",component:"Input",required:!0,componentProps:{placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"}},{field:"msgAbstract",label:"\u6458\u8981",component:"InputTextArea",required:!0},{field:"endTime",label:"\u622A\u81F3\u65E5\u671F",component:"DatePicker",componentProps:{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BF7\u9009\u62E9\u622A\u81F3\u65E5\u671F"},dynamicRules:({model:e})=>L.endTime(e.startTime,!0)},{field:"msgType",label:"\u63A5\u6536\u7528\u6237",defaultValue:"ALL",component:"JDictSelectTag",required:!0,componentProps:{type:"radio",dictCode:"msg_type",placeholder:"\u8BF7\u9009\u62E9\u53D1\u5E03\u8303\u56F4"}},{field:"userIds",label:"\u6307\u5B9A\u7528\u6237",component:"JSelectUser",required:!0,componentProps:{rowKey:"id",labelKey:"username"},ifShow:({values:e})=>e.msgType=="USER"},{field:"priority",label:"\u4F18\u5148\u7EA7",defaultValue:"H",component:"JDictSelectTag",componentProps:{dictCode:"priority",type:"radio",placeholder:"\u8BF7\u9009\u62E9\u4F18\u5148\u7EA7"}},{field:"msgContent",label:"\u5185\u5BB9",component:"Input",render:s.renderTinymce}],Z="/sys/annountCement/exportXls",ee="/sys/annountCement/importExcel",te=e=>a.get({url:"/sys/annountCement/list",params:e}),O=(e,t)=>{let r=t?"/sys/annountCement/edit":"/sys/annountCement/add";return a.post({url:r,params:e})},re=(e,t)=>a.delete({url:"/sys/annountCement/delete",data:e},{joinParamsToUrl:!0}).then(()=>{t()}),ue=(e,t)=>{_.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>a.delete({url:"/sys/annountCement/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{t()})})},oe=e=>a.get({url:"/sys/annountCement/doReleaseData",params:e}),ne=e=>a.get({url:"/sys/annountCement/doReovkeData",params:e}),j=A({__name:"NoticeModal",emits:["register","success"],setup(e,{emit:t}){const r=R(!0),[c,{resetFields:d,setFieldsValue:m,validate:p}]=w({schemas:N,showActionButtonGroup:!1}),[l,{setModalProps:u,closeModal:i}]=x(o=>f(this,null,function*(){yield d(),u({confirmLoading:!1}),r.value=!!(o!=null&&o.isUpdate),n(r)&&(o.record.userIds&&(o.record.userIds=o.record.userIds.substring(0,o.record.userIds.length-1)),yield m(F({},o.record)))})),B=P(()=>n(r)?"\u7F16\u8F91":"\u65B0\u589E");function D(o){return f(this,null,function*(){try{let g=yield p();u({confirmLoading:!0}),g.userIds+=",",yield O(g,r.value),i(),t("success")}finally{u({confirmLoading:!1})}})}return(o,g)=>(M(),S(n(I),U(o.$attrs,{onRegister:n(l),title:n(B),onOk:D,width:"900px",destroyOnClose:""}),{default:v(()=>[k(n(T),{onRegister:n(c)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});var se=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{se as N,j as _,Z as a,ee as b,Q as c,ue as d,re as e,oe as f,te as g,ne as h,W as s};
