var R=Object.defineProperty;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(r,t,e)=>t in r?R(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,B=(r,t)=>{for(var e in t||(t={}))y.call(t,e)&&h(r,e,t[e]);if(g)for(var e of g(t))_.call(t,e)&&h(r,e,t[e]);return r};var d=(r,t,e)=>new Promise((p,l)=>{var c=i=>{try{a(e.next(i))}catch(m){l(m)}},u=i=>{try{a(e.throw(i))}catch(m){l(m)}},a=i=>i.done?p(i.value):Promise.resolve(i.value).then(c,u);a((e=e.apply(r,t)).next())});import{B as k}from"./BasicForm.7ed18e1d.js";import"./componentMap.801737ea.js";import{u as I}from"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import{a as U,b4 as b,z as F,f as j,bg as x,j as s,o as C,k as O,G as S,p as D,ad as G}from"./index.0c676cb0.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import{B as L}from"./index.7aa87f83.js";import{i as P}from"./depart.user.api.a28dc42a.js";import{e as V}from"./depart.user.data.4affa7e2.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./functional.51da07bc.js";import"./user.api.dab2bc95.js";const Me=U({__name:"DepartRoleModal",props:{departId:{require:!0,type:String}},emits:["success","register"],setup(r,{emit:t}){const e=r;b("prefixCls");const p=F(!0),l=F({}),c=j(()=>p.value?"\u7F16\u8F91":"\u65B0\u589E"),[u,{resetFields:a,setFieldsValue:i,validate:m,updateSchema:q}]=I({schemas:V,showActionButtonGroup:!1}),[v,{setModalProps:f,closeModal:w}]=x(o=>d(this,null,function*(){yield a(),p.value=s(o==null?void 0:o.isUpdate);let n=s(o==null?void 0:o.record);typeof n=="object"&&(l.value=n,yield i(B({},n)))}));function M(){return d(this,null,function*(){try{f({confirmLoading:!0});let o=yield m();o.departId=s(e.departId),yield P(o,p.value),w(),t("success",{isUpdate:s(p),values:o})}finally{f({confirmLoading:!1})}})}return(o,n)=>(C(),O(s(L),G({title:s(c),width:800},o.$attrs,{onOk:M,onRegister:s(v)}),{default:S(()=>[D(s(k),{onRegister:s(u)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{Me as default};
