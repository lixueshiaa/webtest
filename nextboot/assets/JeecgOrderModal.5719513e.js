var _=Object.defineProperty;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var d=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&d(e,o,t[o]);if(f)for(var o of f(t))F.call(t,o)&&d(e,o,t[o]);return e};var u=(e,t,o)=>new Promise((n,p)=>{var c=r=>{try{a(o.next(r))}catch(m){p(m)}},l=r=>{try{a(o.throw(r))}catch(m){p(m)}},a=r=>r.done?n(r.value):Promise.resolve(r.value).then(c,l);a((o=o.apply(e,t)).next())});import{B as M}from"./index.7aa87f83.js";import{B as v}from"./BasicForm.7ed18e1d.js";import"./componentMap.801737ea.js";import{u as k}from"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import{a as y,z as R,bg as b,j as s,f as L,o as O,k as U,G as x,p as C,ad as G}from"./index.0c676cb0.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import{f as P,a as S}from"./erplist.api.976de593.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./functional.51da07bc.js";const ho=y({__name:"JeecgOrderModal",emits:["success","register"],setup(e,{emit:t}){const o=R(!0),[n,{resetFields:p,setFieldsValue:c,validate:l}]=k({labelWidth:150,schemas:P,showActionButtonGroup:!1}),[a,{setModalProps:r,closeModal:m}]=b(i=>u(this,null,function*(){yield p(),r({confirmLoading:!1}),o.value=!!(i!=null&&i.isUpdate),s(o)&&(yield c(g({},i.record)))})),h=L(()=>s(o)?"\u7F16\u8F91":"\u65B0\u589E");function B(){return u(this,null,function*(){try{const i=yield l();r({confirmLoading:!0}),yield S(i,o.value),m(),t("success")}finally{r({confirmLoading:!1})}})}return(i,V)=>(O(),U(s(M),G(i.$attrs,{onRegister:s(a),title:s(h),onOk:B,width:700}),{default:x(()=>[C(s(v),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{ho as default};