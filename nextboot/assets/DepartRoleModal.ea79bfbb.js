var R=Object.defineProperty;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(r,t,e)=>t in r?R(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,B=(r,t)=>{for(var e in t||(t={}))y.call(t,e)&&h(r,e,t[e]);if(g)for(var e of g(t))_.call(t,e)&&h(r,e,t[e]);return r};var d=(r,t,e)=>new Promise((p,l)=>{var c=i=>{try{a(e.next(i))}catch(m){l(m)}},u=i=>{try{a(e.throw(i))}catch(m){l(m)}},a=i=>i.done?p(i.value):Promise.resolve(i.value).then(c,u);a((e=e.apply(r,t)).next())});import{B as k}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as I}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a as U,b4 as b,z as F,f as j,bg as x,j as s,o as C,k as O,G as S,p as D,ad as G}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{B as L}from"./index.991a4e0a.js";import{h as P}from"./depart.user.api.f4af898c.js";import{e as V}from"./depart.user.data.5e4ba3bd.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";import"./user.api.dbd21046.js";const Me=U({__name:"DepartRoleModal",props:{departId:{require:!0,type:String}},emits:["success","register"],setup(r,{emit:t}){const e=r;b("prefixCls");const p=F(!0),l=F({}),c=j(()=>p.value?"\u7F16\u8F91":"\u65B0\u589E"),[u,{resetFields:a,setFieldsValue:i,validate:m,updateSchema:q}]=I({schemas:V,showActionButtonGroup:!1}),[v,{setModalProps:f,closeModal:w}]=x(o=>d(this,null,function*(){yield a(),p.value=s(o==null?void 0:o.isUpdate);let n=s(o==null?void 0:o.record);typeof n=="object"&&(l.value=n,yield i(B({},n)))}));function M(){return d(this,null,function*(){try{f({confirmLoading:!0});let o=yield m();o.departId=s(e.departId),yield P(o,p.value),w(),t("success",{isUpdate:s(p),values:o})}finally{f({confirmLoading:!1})}})}return(o,n)=>(C(),O(s(L),G({title:s(c),width:800},o.$attrs,{onOk:M,onRegister:s(v)}),{default:S(()=>[D(s(k),{onRegister:s(u)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{Me as default};
