var _=Object.defineProperty;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(r,o,t)=>o in r?_(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,g=(r,o)=>{for(var t in o||(o={}))h.call(o,t)&&f(r,t,o[t]);if(d)for(var t of d(o))w.call(o,t)&&f(r,t,o[t]);return r};var l=(r,o,t)=>new Promise((n,p)=>{var c=e=>{try{i(t.next(e))}catch(s){p(s)}},u=e=>{try{i(t.throw(e))}catch(s){p(s)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(c,u);i((t=t.apply(r,o)).next())});import{B as M}from"./BasicForm.d1b5a4f4.js";import"./componentMap.6942b0b6.js";import{u as F}from"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import{a as k,bg as y,j as m,o as R,k as T,G as b,p as D,ad as S}from"./index.9eb451d3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import{B as v}from"./index.9788db2e.js";import{b as x,e as C}from"./template.api.5c262e26.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";import"./validator.cd75231b.js";import"./user.api.c26e46a3.js";const ft=k({__name:"TemplateTestModal",emits:["register"],setup(r,{emit:o}){const[t,{resetFields:n,setFieldsValue:p,validate:c,updateSchema:u}]=F({schemas:x,showActionButtonGroup:!1}),[i,{setModalProps:e,closeModal:s}]=y(a=>l(this,null,function*(){yield n(),yield p(g({},m(a.record)))}));function B(){return l(this,null,function*(){try{const a=yield c();e({confirmLoading:!0}),yield C(a),s()}finally{e({confirmLoading:!1})}})}return(a,G)=>(R(),T(m(v),S({onRegister:m(i),title:"\u53D1\u9001\u6D4B\u8BD5",width:800},a.$attrs,{onOk:B}),{default:b(()=>[D(m(M),{onRegister:m(t)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{ft as default};
