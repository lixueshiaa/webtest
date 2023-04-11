var E=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))D.call(t,o)&&_(e,o,t[o]);if(B)for(var o of B(t))S.call(t,o)&&_(e,o,t[o]);return e},F=(e,t)=>T(e,V(t));var b=(e,t,o)=>new Promise((p,s)=>{var i=n=>{try{c(o.next(n))}catch(u){s(u)}},f=n=>{try{c(o.throw(n))}catch(u){s(u)}},c=n=>n.done?p(n.value):Promise.resolve(n.value).then(i,f);c((o=o.apply(e,t)).next())});import{B as A}from"./index.991a4e0a.js";import{B as P}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as j}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a0 as a,bR as N,a as z,bw as G,z as y,bg as Q,j as r,an as U,f as W,U as q,o as h,k as v,G as $,i as H,a9 as J,J as Y,t as K,N as X,p as Z,ad as ee,bO as te}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{s as oe}from"./onlineNew.7fc4ec7d.js";const ge=e=>t=>a.get({url:`/onlForm/api/getData/${e}`,params:t}),Fe=e=>a.post({url:`/onlForm/api/getColumns/${e}`}),be=e=>a.get({url:`/onlForm/api/getQueryInfoVue3/${e}`}),he=e=>a.get({url:`/onlForm/api/getFormItem/${e}`}),$e=e=>a.get({url:"/onlForm/onlFormButton/queryAllById",params:{id:e}}),Be=e=>a.get({url:"/sys/duplicate/check",params:e},{isTransformResponse:!1}),_e=(e,t,o)=>a.delete({url:`/onlForm/api/form/${e}/${t}`}).then(()=>{o()}),ye=(e,t,o)=>{N.warning({title:"\u786E\u8BA4\u5220\u9664",centered:!0,closable:!0,content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",onOk:()=>a.delete({url:`/onlForm/api/form/${e}/${t}`}).then(()=>{o()})})},re=(e,t,o)=>o?a.put({url:`/onlForm/api/form/${e}`,params:t}):a.post({url:`/onlForm/api/form/${e}`,params:t}),se=z({__name:"index",props:{FormBtnList:[]},emits:["register","success"],setup(e,{emit:t}){const o=e,{currentRoute:p}=G(),s=y(""),i=y(""),[f,{setProps:c,setFieldsValue:n,validate:u,resetFields:w,getFieldsValue:C,appendSchemaByField:k}]=j({showActionButtonGroup:!1}),[R,{setModalProps:g,closeModal:x}]=Q(l=>b(this,null,function*(){s.value=l.action;const m=l.isFixedFormLabelWidth==="Y";g({showOkBtn:r(s)!=="detail",showCancelBtn:r(s)!=="detail"}),c({disabled:r(s)==="detail",labelAlign:"right",labelCol:m?{}:oe,wrapperCol:{},schemas:l.schemas}),r(s)==="add"?(i.value="",w()):(k({field:"id",component:"Input",label:"id",show:!1}),i.value=l.record.id,yield n(d({},l.record)),U(()=>{setTimeout(()=>{u()},0)}))}));function I(){return b(this,null,function*(){try{const l=yield u(),m=C();g({confirmLoading:!0}),yield re(r(p).params.id,te(F(d({},m),{id:i.value}),l),r(s)==="editor"),x(),t("success",{values:F(d({},m),{id:i.value})})}finally{g({confirmLoading:!1})}})}const L=W(()=>{if(r(s)==="add")return"\u65B0\u589E";if(r(s)==="editor")return"\u7F16\u8F91";if(r(s)==="detail")return"\u8BE6\u60C5"});return(l,m)=>{const M=q("a-button");return h(),v(r(A),ee({width:"80%"},l.$attrs,{onRegister:r(R),title:r(L),onOk:I}),{appendFooter:$(()=>[(h(!0),H(X,null,J(o.FormBtnList,O=>(h(),v(M,{type:"primary"},{default:$(()=>[Y(K(O.label),1)]),_:2},1024))),256))]),default:$(()=>[Z(r(P),{onRegister:r(f)},null,8,["onRegister"])]),_:1},16,["onRegister","title"])}}});var ve=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{se as _,Fe as a,be as b,he as c,Be as d,ge as e,ye as f,$e as g,_e as h,ve as i};
