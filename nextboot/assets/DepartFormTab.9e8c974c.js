var I=Object.defineProperty;var C=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var F=(a,e,t)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,l=(a,e)=>{for(var t in e||(e={}))T.call(e,t)&&F(a,t,e[t]);if(C)for(var t of C(e))P.call(e,t)&&F(a,t,e[t]);return a};var n=(a,e,t)=>new Promise((p,c)=>{var s=r=>{try{i(t.next(r))}catch(m){c(m)}},u=r=>{try{i(t.throw(r))}catch(m){c(m)}},i=r=>r.done?p(r.value):Promise.resolve(r.value).then(s,u);i((t=t.apply(a,e)).next())});import{B as S}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{u as V}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import{a as N,b4 as R,z as f,f as U,C as A,X as _,j as b,U as w,o as G,k as z,G as y,p as g,n as D,J as x}from"./index.6cf4d174.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import{s as E}from"./depart.api.cb5ba1c2.js";import{u as J,o as j}from"./depart.data.ff6c9320.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";const M={class:"j-box-bottom-button offset-20",style:{"margin-top":"30px"}},X={class:"j-box-bottom-button-float"},q=x("\u91CD\u7F6E"),H=x("\u4FDD\u5B58"),Bt=N({__name:"DepartFormTab",props:{data:{type:Object,default:()=>({})},rootTreeData:{type:Array,default:()=>[]}},emits:["success"],setup(a,{emit:e}){const t=a;R("prefixCls");const p=f(!1),c=f(!0),s=f({}),[u,{resetFields:i,setFieldsValue:r,validate:m,updateSchema:d}]=V({schemas:J().basicFormSchema,showActionButtonGroup:!1}),v=U(()=>{var o;return(o=t==null?void 0:t.data)!=null&&o.parentId?j.child:j.root});A(()=>{d([{field:"parentId",componentProps:{disabled:!0}},{field:"orgCode",componentProps:{disabled:!0}}]),_(()=>t.data,()=>n(this,null,function*(){let o=b(t.data);typeof o!="object"&&(o={}),s.value=o,yield i(),yield r(l({},o))}),{deep:!0,immediate:!0}),_(()=>t.rootTreeData,()=>n(this,null,function*(){d([{field:"parentId",componentProps:{treeData:t.rootTreeData}}])}),{deep:!0,immediate:!0}),_(v,()=>n(this,null,function*(){d([{field:"orgCategory",componentProps:{options:v.value}}])}),{immediate:!0})});function B(){return n(this,null,function*(){yield i(),yield r(l({},s.value))})}function O(){return n(this,null,function*(){try{p.value=!0;let o=yield m();o=Object.assign({},s.value,o),yield E(o,c.value),e("success"),Object.assign(s.value,o)}finally{p.value=!1}})}return(o,K)=>{const h=w("a-button"),k=w("a-spin");return G(),z(k,{spinning:p.value},{default:y(()=>[g(b(S),{onRegister:b(u)},null,8,["onRegister"]),D("div",M,[D("div",X,[g(h,{preIcon:"ant-design:sync-outlined",onClick:B},{default:y(()=>[q]),_:1}),g(h,{type:"primary",preIcon:"ant-design:save-filled",onClick:O},{default:y(()=>[H]),_:1})])])]),_:1},8,["spinning"])}}});export{Bt as default};