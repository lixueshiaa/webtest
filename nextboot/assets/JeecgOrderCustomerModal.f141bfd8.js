var _=Object.defineProperty;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var f=(t,r,o)=>r in t?_(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,g=(t,r)=>{for(var o in r||(r={}))w.call(r,o)&&f(t,o,r[o]);if(d)for(var o of d(r))M.call(r,o)&&f(t,o,r[o]);return t};var u=(t,r,o)=>new Promise((m,n)=>{var c=e=>{try{p(o.next(e))}catch(a){n(a)}},l=e=>{try{p(o.throw(e))}catch(a){n(a)}},p=e=>e.done?m(e.value):Promise.resolve(e.value).then(c,l);p((o=o.apply(t,r)).next())});import{B as v}from"./index.9788db2e.js";import{B as b}from"./BasicForm.d1b5a4f4.js";import"./componentMap.6942b0b6.js";import{u as k}from"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import{a as y,b4 as C,z as I,bg as R,j as s,f as L,o as O,k as U,G as j,p as x,ad as G}from"./index.9eb451d3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import{n as P,o as S}from"./erplist.api.4a35ba1a.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";const Fo=y({__name:"JeecgOrderCustomerModal",emits:["success","register"],setup(t,{emit:r}){const o=C("orderId")||"",m=I(!0),[n,{resetFields:c,setFieldsValue:l,validate:p}]=k({labelWidth:150,schemas:P,showActionButtonGroup:!1}),[e,{setModalProps:a,closeModal:h}]=R(i=>u(this,null,function*(){yield c(),a({confirmLoading:!1}),m.value=!!(i!=null&&i.isUpdate),s(m)&&(yield l(g({},i.record)))})),B=L(()=>s(m)?"\u7F16\u8F91":"\u65B0\u589E");function F(){return u(this,null,function*(){try{const i=yield p();a({confirmLoading:!0}),s(o)&&(i.orderId=s(o)),yield S(i,m.value),h(),r("success")}finally{a({confirmLoading:!1})}})}return(i,V)=>(O(),U(s(v),G(i.$attrs,{onRegister:s(e),title:s(B),onOk:F,width:700}),{default:j(()=>[x(s(b),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Fo as default};
