var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(r,o,t)=>o in r?_(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,g=(r,o)=>{for(var t in o||(o={}))k.call(o,t)&&f(r,t,o[t]);if(u)for(var t of u(o))w.call(o,t)&&f(r,t,o[t]);return r};var d=(r,o,t)=>new Promise((m,n)=>{var c=e=>{try{p(t.next(e))}catch(a){n(a)}},l=e=>{try{p(t.throw(e))}catch(a){n(a)}},p=e=>e.done?m(e.value):Promise.resolve(e.value).then(c,l);p((t=t.apply(r,o)).next())});import{B as M}from"./index.7aa87f83.js";import{B as v}from"./BasicForm.7ed18e1d.js";import"./componentMap.801737ea.js";import{u as b}from"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import{a as y,b4 as I,z as R,bg as x,j as s,f as L,o as O,k as T,G as U,p as j,ad as C}from"./index.0c676cb0.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import{p as G,q as H}from"./erplist.api.976de593.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./functional.51da07bc.js";const Bt=y({__name:"JeecgOrderTicketModal",emits:["success","register"],setup(r,{emit:o}){const t=I("orderId"),m=R(!0),[n,{resetFields:c,setFieldsValue:l,validate:p}]=b({labelWidth:150,schemas:G,showActionButtonGroup:!1}),[e,{setModalProps:a,closeModal:h}]=x(i=>d(this,null,function*(){yield c(),a({confirmLoading:!1}),m.value=!!(i!=null&&i.isUpdate),s(m)&&(yield l(g({},i.record)))})),B=L(()=>s(m)?"\u7F16\u8F91":"\u65B0\u589E");function F(){return d(this,null,function*(){try{const i=yield p();a({confirmLoading:!0}),s(t)&&(i.orderId=s(t)),yield H(i,m.value),h(),o("success")}finally{a({confirmLoading:!1})}})}return(i,P)=>(O(),T(s(M),C(i.$attrs,{onRegister:s(e),title:s(B),onOk:F,width:500,minHeight:20,maxHeight:20}),{default:U(()=>[j(s(v),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Bt as default};
