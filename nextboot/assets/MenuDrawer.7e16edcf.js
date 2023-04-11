var P=Object.defineProperty;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var h=(t,o,e)=>o in t?P(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,F=(t,o)=>{for(var e in o||(o={}))R.call(o,e)&&h(t,e,o[e]);if(g)for(var e of g(o))S.call(o,e)&&h(t,e,o[e]);return t};var f=(t,o,e)=>new Promise((c,m)=>{var a=i=>{try{p(e.next(i))}catch(n){m(n)}},u=i=>{try{p(e.throw(i))}catch(n){m(n)}},p=i=>i.done?c(i.value):Promise.resolve(i.value).then(a,u);p((e=e.apply(t,o)).next())});import{B as T}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as j}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a as I,eW as L,z as D,j as s,f as U,o as V,k as x,G as E,p as G,ad as M}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{i as O,l as q,C as z,j as N}from"./menu.data.bc63c097.js";import{a as W,B as $}from"./index.c1ddc319.js";import{u as H}from"./useAutoAdapt.ffeb4dda.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";import"./user.api.dbd21046.js";import"./validator.aea6ab50.js";const je=I({__name:"MenuDrawer",emits:["success","register"],setup(t,{emit:o}){const{width:e}=H(),c=L(),m=D(!0),a=D(0),u=r=>r===2,[p,{setProps:i,resetFields:n,setFieldsValue:B,updateSchema:C,validate:y,clearValidate:J}]=j({labelCol:{md:{span:4},sm:{span:6}},wrapperCol:{md:{span:20},sm:{span:18}},schemas:O,showActionButtonGroup:!1}),[_,{setDrawerProps:l,closeDrawer:v}]=W(r=>f(this,null,function*(){var w;yield n(),l({confirmLoading:!1}),m.value=!!(r!=null&&r.isUpdate),a.value=(w=r==null?void 0:r.record)==null?void 0:w.menuType;const d=yield q();if(C([{field:"parentId",componentProps:{treeData:d}},{field:"name",label:u(s(a))?"\u6309\u94AE/\u6743\u9650":"\u83DC\u5355\u540D\u79F0"},{field:"url",required:!u(s(a))}]),typeof r.record=="object"){let A=F({},r.record);B(A)}i({disabled:!c.showFooter})})),b=U(()=>s(m)?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355");function k(){return f(this,null,function*(){try{const r=yield y();z.IFrame===r.component&&(r.component=r.frameSrc),l({confirmLoading:!0}),yield N(r,s(m)),v(),o("success")}finally{l({confirmLoading:!1})}})}return(r,d)=>(V(),x(s($),M(r.$attrs,{onRegister:s(_),showFooter:"",width:s(e),title:s(b),onOk:k}),{default:E(()=>[G(s(T),{onRegister:s(p),class:"menuForm"},null,8,["onRegister"])]),_:1},16,["onRegister","width","title"]))}});export{je as default};
