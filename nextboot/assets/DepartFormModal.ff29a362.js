var M=Object.defineProperty;var h=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var w=(t,o,e)=>o in t?M(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,F=(t,o)=>{for(var e in o||(o={}))_.call(o,e)&&w(t,e,o[e]);if(h)for(var e of h(o))k.call(o,e)&&w(t,e,o[e]);return t};var d=(t,o,e)=>new Promise((p,c)=>{var u=s=>{try{m(e.next(s))}catch(n){c(n)}},f=s=>{try{m(e.throw(s))}catch(n){c(n)}},m=s=>s.done?p(s.value):Promise.resolve(s.value).then(u,f);m((e=e.apply(t,o)).next())});import{B as D}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{u as O}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import{a as j,b4 as P,z as B,f as R,bg as T,j as i,o as x,k as S,G as U,p as A,ad as G}from"./index.6cf4d174.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import{B as I}from"./index.f8f2ddf0.js";import{a as L}from"./depart.user.api.28efbec4.js";import{u as V}from"./depart.user.data.6e75d3d0.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";import"./user.api.434ee89d.js";const ve=j({__name:"DepartFormModal",props:{rootTreeData:{type:Array,default:()=>[]}},emits:["success","register"],setup(t,{emit:o}){const e=t;P("prefixCls");const p=B(!1),c=B({}),u=R(()=>p.value?"\u7F16\u8F91":"\u65B0\u589E"),[f,{resetFields:m,setFieldsValue:s,validate:n,updateSchema:y}]=O({schemas:V().basicFormSchema,showActionButtonGroup:!1}),[b,{setModalProps:g,closeModal:v}]=T(r=>d(this,null,function*(){yield m(),p.value=i(r==null?void 0:r.isUpdate);let l=i(r==null?void 0:r.isChild);y([{field:"parentId",show:l,componentProps:{disabled:l,treeData:e.rootTreeData}},{field:"orgCode",show:!1},{field:"newTenant",show:!l,componentProps:{disabled:l}}]);let a=i(r==null?void 0:r.record);typeof a!="object"&&(a={}),a=Object.assign({departOrder:0,orgCategory:"1",newTenant:"0"},a),c.value=a,yield s(F({},a))}));function C(){return d(this,null,function*(){try{g({confirmLoading:!0});let r=yield n();yield L(r,p.value),v(),o("success")}finally{g({confirmLoading:!1})}})}return(r,l)=>(x(),S(i(I),G({title:i(u),width:800},r.$attrs,{onOk:C,onRegister:i(b)}),{default:U(()=>[A(i(D),{onRegister:i(f)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{ve as default};
