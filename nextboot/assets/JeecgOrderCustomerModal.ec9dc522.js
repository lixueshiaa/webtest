var _=Object.defineProperty;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var f=(t,r,o)=>r in t?_(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,g=(t,r)=>{for(var o in r||(r={}))w.call(r,o)&&f(t,o,r[o]);if(d)for(var o of d(r))M.call(r,o)&&f(t,o,r[o]);return t};var u=(t,r,o)=>new Promise((m,n)=>{var c=e=>{try{p(o.next(e))}catch(a){n(a)}},l=e=>{try{p(o.throw(e))}catch(a){n(a)}},p=e=>e.done?m(e.value):Promise.resolve(e.value).then(c,l);p((o=o.apply(t,r)).next())});import{B as v}from"./index.f8f2ddf0.js";import{B as b}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{u as k}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import{a as y,b4 as C,z as I,bg as R,j as s,f as L,o as O,k as U,G as j,p as x,ad as G}from"./index.6cf4d174.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import{n as P,o as S}from"./erplist.api.c83bc335.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";const Fo=y({__name:"JeecgOrderCustomerModal",emits:["success","register"],setup(t,{emit:r}){const o=C("orderId")||"",m=I(!0),[n,{resetFields:c,setFieldsValue:l,validate:p}]=k({labelWidth:150,schemas:P,showActionButtonGroup:!1}),[e,{setModalProps:a,closeModal:h}]=R(i=>u(this,null,function*(){yield c(),a({confirmLoading:!1}),m.value=!!(i!=null&&i.isUpdate),s(m)&&(yield l(g({},i.record)))})),B=L(()=>s(m)?"\u7F16\u8F91":"\u65B0\u589E");function F(){return u(this,null,function*(){try{const i=yield p();a({confirmLoading:!0}),s(o)&&(i.orderId=s(o)),yield S(i,m.value),h(),r("success")}finally{a({confirmLoading:!1})}})}return(i,V)=>(O(),U(s(v),G(i.$attrs,{onRegister:s(e),title:s(B),onOk:F,width:700}),{default:j(()=>[x(s(b),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Fo as default};