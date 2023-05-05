var _=Object.defineProperty;var y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var F=(t,e,o)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,w=(t,e)=>{for(var o in e||(e={}))k.call(e,o)&&F(t,o,e[o]);if(y)for(var o of y(e))D.call(e,o)&&F(t,o,e[o]);return t};var d=(t,e,o)=>new Promise((p,n)=>{var u=s=>{try{m(o.next(s))}catch(l){n(l)}},f=s=>{try{m(o.throw(s))}catch(l){n(l)}},m=s=>s.done?p(s.value):Promise.resolve(s.value).then(u,f);m((o=o.apply(t,e)).next())});import{B as j}from"./BasicForm.d1b5a4f4.js";import"./componentMap.6942b0b6.js";import{u as P}from"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import{a as R,b4 as x,z as B,f as S,bg as U,j as i,o as A,k as G,G as I,p as L,ad as T}from"./index.9eb451d3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import{B as V}from"./index.9788db2e.js";import{s as z}from"./depart.api.03e31315.js";import{u as E,o as C}from"./depart.data.ff6c9320.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";const Oo=R({__name:"DepartFormModal",props:{rootTreeData:{type:Array,default:()=>[]}},emits:["success","register"],setup(t,{emit:e}){const o=t;x("prefixCls");const p=B(!1),n=B({}),u=S(()=>p.value?"\u7F16\u8F91":"\u65B0\u589E"),[f,{resetFields:m,setFieldsValue:s,validate:l,updateSchema:v}]=P({schemas:E().basicFormSchema,showActionButtonGroup:!1}),[O,{setModalProps:g,closeModal:b}]=U(r=>d(this,null,function*(){yield m(),p.value=i(r==null?void 0:r.isUpdate);let c=i(r==null?void 0:r.isChild),h=c?C.child:C.root;v([{field:"parentId",show:c,componentProps:{disabled:c,treeData:o.rootTreeData}},{field:"orgCode",show:!1},{field:"orgCategory",componentProps:{options:h}}]);let a=i(r==null?void 0:r.record);typeof a!="object"&&(a={}),a=Object.assign({departOrder:0,orgCategory:h[0].value},a),n.value=a,yield s(w({},a))}));function M(){return d(this,null,function*(){try{g({confirmLoading:!0});let r=yield l();yield z(r,p.value),b(),e("success")}finally{g({confirmLoading:!1})}})}return(r,c)=>(A(),G(i(V),T({title:i(u),width:800},r.$attrs,{onOk:M,onRegister:i(O)}),{default:I(()=>[L(i(j),{onRegister:i(f)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{Oo as default};