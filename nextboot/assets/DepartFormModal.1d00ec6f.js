var _=Object.defineProperty;var y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var F=(t,e,o)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,w=(t,e)=>{for(var o in e||(e={}))k.call(e,o)&&F(t,o,e[o]);if(y)for(var o of y(e))D.call(e,o)&&F(t,o,e[o]);return t};var d=(t,e,o)=>new Promise((p,n)=>{var u=s=>{try{m(o.next(s))}catch(l){n(l)}},f=s=>{try{m(o.throw(s))}catch(l){n(l)}},m=s=>s.done?p(s.value):Promise.resolve(s.value).then(u,f);m((o=o.apply(t,e)).next())});import{B as j}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{u as P}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import{a as R,b4 as x,z as B,f as S,bg as U,j as i,o as A,k as G,G as I,p as L,ad as T}from"./index.6cf4d174.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import{B as V}from"./index.f8f2ddf0.js";import{s as z}from"./depart.api.cb5ba1c2.js";import{u as E,o as C}from"./depart.data.ff6c9320.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";const Oo=R({__name:"DepartFormModal",props:{rootTreeData:{type:Array,default:()=>[]}},emits:["success","register"],setup(t,{emit:e}){const o=t;x("prefixCls");const p=B(!1),n=B({}),u=S(()=>p.value?"\u7F16\u8F91":"\u65B0\u589E"),[f,{resetFields:m,setFieldsValue:s,validate:l,updateSchema:v}]=P({schemas:E().basicFormSchema,showActionButtonGroup:!1}),[O,{setModalProps:g,closeModal:b}]=U(r=>d(this,null,function*(){yield m(),p.value=i(r==null?void 0:r.isUpdate);let c=i(r==null?void 0:r.isChild),h=c?C.child:C.root;v([{field:"parentId",show:c,componentProps:{disabled:c,treeData:o.rootTreeData}},{field:"orgCode",show:!1},{field:"orgCategory",componentProps:{options:h}}]);let a=i(r==null?void 0:r.record);typeof a!="object"&&(a={}),a=Object.assign({departOrder:0,orgCategory:h[0].value},a),n.value=a,yield s(w({},a))}));function M(){return d(this,null,function*(){try{g({confirmLoading:!0});let r=yield l();yield z(r,p.value),b(),e("success")}finally{g({confirmLoading:!1})}})}return(r,c)=>(A(),G(i(V),T({title:i(u),width:800},r.$attrs,{onOk:M,onRegister:i(O)}),{default:I(()=>[L(i(j),{onRegister:i(f)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{Oo as default};
