var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(r,o,t)=>o in r?_(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,g=(r,o)=>{for(var t in o||(o={}))k.call(o,t)&&f(r,t,o[t]);if(u)for(var t of u(o))w.call(o,t)&&f(r,t,o[t]);return r};var d=(r,o,t)=>new Promise((m,n)=>{var c=e=>{try{p(t.next(e))}catch(a){n(a)}},l=e=>{try{p(t.throw(e))}catch(a){n(a)}},p=e=>e.done?m(e.value):Promise.resolve(e.value).then(c,l);p((t=t.apply(r,o)).next())});import{B as M}from"./index.991a4e0a.js";import{B as v}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as b}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a as y,b4 as I,z as R,bg as x,j as s,f as L,o as O,k as T,G as U,p as j,ad as C}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{p as G,q as H}from"./erplist.api.6a40e6be.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";const Bt=y({__name:"JeecgOrderTicketModal",emits:["success","register"],setup(r,{emit:o}){const t=I("orderId"),m=R(!0),[n,{resetFields:c,setFieldsValue:l,validate:p}]=b({labelWidth:150,schemas:G,showActionButtonGroup:!1}),[e,{setModalProps:a,closeModal:h}]=x(i=>d(this,null,function*(){yield c(),a({confirmLoading:!1}),m.value=!!(i!=null&&i.isUpdate),s(m)&&(yield l(g({},i.record)))})),B=L(()=>s(m)?"\u7F16\u8F91":"\u65B0\u589E");function F(){return d(this,null,function*(){try{const i=yield p();a({confirmLoading:!0}),s(t)&&(i.orderId=s(t)),yield H(i,m.value),h(),o("success")}finally{a({confirmLoading:!1})}})}return(i,P)=>(O(),T(s(M),C(i.$attrs,{onRegister:s(e),title:s(B),onOk:F,width:500,minHeight:20,maxHeight:20}),{default:U(()=>[j(s(v),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Bt as default};