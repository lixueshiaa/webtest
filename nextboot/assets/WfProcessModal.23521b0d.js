var R=Object.defineProperty;var y=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var M=(s,o,e)=>o in s?R(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,b=(s,o)=>{for(var e in o||(o={}))D.call(o,e)&&M(s,e,o[e]);if(y)for(var e of y(o))T.call(o,e)&&M(s,e,o[e]);return s};var B=(s,o,e)=>new Promise((i,l)=>{var p=a=>{try{m(e.next(a))}catch(c){l(c)}},u=a=>{try{m(e.throw(a))}catch(c){l(c)}},m=a=>a.done?i(a.value):Promise.resolve(a.value).then(p,u);m((e=e.apply(s,o)).next())});import{B as j}from"./index.f8f2ddf0.js";import{B as A}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{u as G}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import{a as U,z as F,j as r,bg as W,an as z,f as J,U as $,o as f,k as C,G as _,i as w,a9 as q,N as v,J as H,t as K,l as Q,p as X,ad as Y,n as Z,bO as ee}from"./index.6cf4d174.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import{j as te,k as oe}from"./WfProcess.api.16434739.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";import"./render.e804ff54.js";import"./index.e3d374a0.js";const re=Z("span",null,null,-1),Ae=U({__name:"WfProcessModal",emits:["register","success"],setup(s,{emit:o}){const e={},i=F("");let l="",p={};const u=F([{label:"\u53D6\u6D88",methods:"cancel",ifShow:()=>r(i)!=="detail"},{label:"\u786E\u8BA4",methods:"handleSubmit",type:"primary",ifShow:()=>r(i)!=="detail"}]),[m,a]=G({labelWidth:150,schemas:te,showActionButtonGroup:!1}),{setProps:c,resetFields:x,setFieldsValue:S,validate:L,getFieldsValue:V}=a,[I,{setModalProps:h,closeModal:k}]=W(t=>B(this,null,function*(){i.value=t.action,l=t.title,p=t.record,yield x(),h({confirmLoading:!1}),r(i)!=="add"&&z(()=>{S(b({},t.record))}),c({disabled:r(i)==="detail"})})),N=J(()=>r(i)==="detail"?"\u8BE6\u60C5":r(i)==="editor"?"\u7F16\u8F91":r(i)==="add"?"\u65B0\u589E":l);function P(){return u.value.map(t=>{const d=t.methods;return t.onClick=()=>{g[d]&&g[d]()},t})}function E(t){return typeof t=="function"?t():t}const g={handleSubmit:function(){return B(this,null,function*(){try{const t=yield L(),d=V();h({confirmLoading:!0}),yield oe(ee(p,d,t),r(i)==="editor"),k(),o("success")}finally{h({confirmLoading:!1})}})},cancel:function(){k()}};return e["./testModalMixin.ts"]&&e["./wfProcessMixin.ts"].default({methods:g,footerBtnList:u,formMethods:a,modalMethods}),(t,d)=>{const O=$("a-button");return f(),C(r(j),Y(t.$attrs,{onRegister:r(I),title:r(N),onOk:t.handleSubmit}),{footer:_(()=>[re,(f(!0),w(v,null,q(P(),(n,ie)=>(f(),w(v,null,[E(n.ifShow)?(f(),C(O,{key:0,type:n.type,preIcon:n.preIcon,disabled:n.disabled===!0,onClick:n.onClick},{default:_(()=>[H(K(n.label),1)]),_:2},1032,["type","preIcon","disabled","onClick"])):Q("",!0)],64))),256))]),default:_(()=>[X(r(A),{onRegister:r(m)},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}}});export{Ae as default};
