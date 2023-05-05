var T=Object.defineProperty;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(o,e,t)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,l=(o,e)=>{for(var t in e||(e={}))k.call(e,t)&&g(o,t,e[t]);if(h)for(var t of h(e))I.call(e,t)&&g(o,t,e[t]);return o};var m=(o,e,t)=>new Promise((n,c)=>{var s=a=>{try{i(t.next(a))}catch(p){c(p)}},u=a=>{try{i(t.throw(a))}catch(p){c(p)}},i=a=>a.done?n(a.value):Promise.resolve(a.value).then(s,u);i((t=t.apply(o,e)).next())});import{B as O}from"./BasicForm.d1b5a4f4.js";import"./componentMap.6942b0b6.js";import{u as S}from"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import{a as V,b4 as N,z as d,C as P,X as w,j as f,U as F,o as R,k as U,G as _,p as b,n as C,J as D}from"./index.9eb451d3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import{a as A}from"./depart.user.api.5b8e68db.js";import{u as G}from"./depart.user.data.02739732.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.9788db2e.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";import"./user.api.c26e46a3.js";const z={class:"j-box-bottom-button offset-20",style:{"margin-top":"30px"}},E={class:"j-box-bottom-button-float"},J=D("\u91CD\u7F6E"),M=D("\u4FDD\u5B58"),xt=V({__name:"DepartFormTab",props:{data:{type:Object,default:()=>({})},rootTreeData:{type:Array,default:()=>[]}},emits:["success"],setup(o,{emit:e}){const t=o;N("prefixCls");const n=d(!1),c=d(!0),s=d({}),[u,{resetFields:i,setFieldsValue:a,validate:p,updateSchema:v}]=S({schemas:G().basicFormSchema,showActionButtonGroup:!1});P(()=>{v([{field:"parentId",componentProps:{disabled:!0}},{field:"orgCode",componentProps:{disabled:!0}},{field:"newTenant",show:!1}]),w(()=>t.data,()=>m(this,null,function*(){let r=f(t.data);typeof r!="object"&&(r={}),s.value=r,yield i(),yield a(l({},r))}),{deep:!0,immediate:!0}),w(()=>t.rootTreeData,()=>m(this,null,function*(){v([{field:"parentId",componentProps:{treeData:t.rootTreeData}}])}),{deep:!0,immediate:!0})});function j(){return m(this,null,function*(){yield i(),yield a(l({},s.value))})}function x(){return m(this,null,function*(){try{n.value=!0;let r=yield p();r=Object.assign({},s.value,r),yield A(r,c.value),e("success"),Object.assign(s.value,r)}finally{n.value=!1}})}return(r,X)=>{const y=F("a-button"),B=F("a-spin");return R(),U(B,{spinning:n.value},{default:_(()=>[b(f(O),{onRegister:f(u)},null,8,["onRegister"]),C("div",z,[C("div",E,[b(y,{preIcon:"ant-design:sync-outlined",onClick:j},{default:_(()=>[J]),_:1}),b(y,{type:"primary",preIcon:"ant-design:save-filled",onClick:x},{default:_(()=>[M]),_:1})])])]),_:1},8,["spinning"])}}});export{xt as default};