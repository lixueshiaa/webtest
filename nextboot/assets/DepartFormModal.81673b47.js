var _=Object.defineProperty;var y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var F=(t,e,o)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,w=(t,e)=>{for(var o in e||(e={}))k.call(e,o)&&F(t,o,e[o]);if(y)for(var o of y(e))D.call(e,o)&&F(t,o,e[o]);return t};var d=(t,e,o)=>new Promise((p,n)=>{var u=s=>{try{m(o.next(s))}catch(l){n(l)}},f=s=>{try{m(o.throw(s))}catch(l){n(l)}},m=s=>s.done?p(s.value):Promise.resolve(s.value).then(u,f);m((o=o.apply(t,e)).next())});import{B as j}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as P}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a as R,b4 as x,z as B,f as S,bg as U,j as i,o as A,k as G,G as I,p as L,ad as T}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{B as V}from"./index.991a4e0a.js";import{s as z}from"./depart.api.c3d5b637.js";import{u as E,o as C}from"./depart.data.ff6c9320.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";const Oo=R({__name:"DepartFormModal",props:{rootTreeData:{type:Array,default:()=>[]}},emits:["success","register"],setup(t,{emit:e}){const o=t;x("prefixCls");const p=B(!1),n=B({}),u=S(()=>p.value?"\u7F16\u8F91":"\u65B0\u589E"),[f,{resetFields:m,setFieldsValue:s,validate:l,updateSchema:v}]=P({schemas:E().basicFormSchema,showActionButtonGroup:!1}),[O,{setModalProps:g,closeModal:b}]=U(r=>d(this,null,function*(){yield m(),p.value=i(r==null?void 0:r.isUpdate);let c=i(r==null?void 0:r.isChild),h=c?C.child:C.root;v([{field:"parentId",show:c,componentProps:{disabled:c,treeData:o.rootTreeData}},{field:"orgCode",show:!1},{field:"orgCategory",componentProps:{options:h}}]);let a=i(r==null?void 0:r.record);typeof a!="object"&&(a={}),a=Object.assign({departOrder:0,orgCategory:h[0].value},a),n.value=a,yield s(w({},a))}));function M(){return d(this,null,function*(){try{g({confirmLoading:!0});let r=yield l();yield z(r,p.value),b(),e("success")}finally{g({confirmLoading:!1})}})}return(r,c)=>(A(),G(i(V),T({title:i(u),width:800},r.$attrs,{onOk:M,onRegister:i(O)}),{default:I(()=>[L(i(j),{onRegister:i(f)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{Oo as default};