var _=Object.defineProperty;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(r,o,t)=>o in r?_(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,g=(r,o)=>{for(var t in o||(o={}))h.call(o,t)&&f(r,t,o[t]);if(d)for(var t of d(o))w.call(o,t)&&f(r,t,o[t]);return r};var l=(r,o,t)=>new Promise((n,p)=>{var c=e=>{try{i(t.next(e))}catch(s){p(s)}},u=e=>{try{i(t.throw(e))}catch(s){p(s)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(c,u);i((t=t.apply(r,o)).next())});import{B as M}from"./BasicForm.3d2570da.js";import"./componentMap.b6eed178.js";import{u as F}from"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import{a as k,bg as y,j as m,o as R,k as T,G as b,p as D,ad as S}from"./index.397c0bf9.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import{B as v}from"./index.7ab28a2b.js";import{b as x,e as C}from"./template.api.4e1cfcf8.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./index.1ddf0867.js";import"./useFormItem.3d0c36d5.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./api.2a8d49a5.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./onMountedOrActivated.752d8da8.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./functional.540b215d.js";import"./validator.0f26d27f.js";import"./user.api.4aaf6a90.js";const ft=k({__name:"TemplateTestModal",emits:["register"],setup(r,{emit:o}){const[t,{resetFields:n,setFieldsValue:p,validate:c,updateSchema:u}]=F({schemas:x,showActionButtonGroup:!1}),[i,{setModalProps:e,closeModal:s}]=y(a=>l(this,null,function*(){yield n(),yield p(g({},m(a.record)))}));function B(){return l(this,null,function*(){try{const a=yield c();e({confirmLoading:!0}),yield C(a),s()}finally{e({confirmLoading:!1})}})}return(a,G)=>(R(),T(m(v),S({onRegister:m(i),title:"\u53D1\u9001\u6D4B\u8BD5",width:800},a.$attrs,{onOk:B}),{default:b(()=>[D(m(M),{onRegister:m(t)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{ft as default};
