var D=Object.defineProperty;var k=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(s,o,t)=>o in s?D(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t,C=(s,o)=>{for(var t in o||(o={}))O.call(o,t)&&w(s,t,o[t]);if(k)for(var t of k(o))P.call(o,t)&&w(s,t,o[t]);return s};var B=(s,o,t)=>new Promise((i,l)=>{var f=a=>{try{m(t.next(a))}catch(c){l(c)}},p=a=>{try{m(t.throw(a))}catch(c){l(c)}},m=a=>a.done?i(a.value):Promise.resolve(a.value).then(f,p);m((t=t.apply(s,o)).next())});import{B as A}from"./index.9788db2e.js";import{B as G}from"./BasicForm.d1b5a4f4.js";import"./componentMap.6942b0b6.js";import{u as U}from"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import{a as j,z as F,j as e,bg as z,f as J,U as T,o as u,k as b,G as _,i as v,a9 as W,N as x,J as $,t as q,l as H,p as K,ad as Q,n as X,bO as Y}from"./index.9eb451d3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import{f as Z}from"./test.data.20e45214.js";import{s as tt}from"./test.api.d2a01bc0.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";import"./render.9a5e321f.js";import"./index.e3d374a0.js";const et=X("div",null,null,-1),Gt=j({__name:"testModal",emits:["register","success"],setup(s,{emit:o}){const t={},i=F(""),l=F([{label:"\u53D6\u6D88",methods:"cancel",ifShow:()=>e(i)!=="detail"},{label:"\u786E\u8BA4",methods:"handleSubmit",type:"primary",ifShow:()=>e(i)!=="detail"}]),[f,p]=U({labelWidth:150,schemas:Z,showActionButtonGroup:!1}),{setProps:m,resetFields:a,setFieldsValue:c,validate:L,getFieldsValue:S}=p,[V,M]=z(r=>B(this,null,function*(){i.value=r.action||"",yield a(),h({confirmLoading:!1,showCancelBtn:e(i)!=="detail",showOkBtn:e(i)!=="detail"}),e(i)!=="add"&&(yield c(C({},r.record))),m({disabled:e(i)==="detail"})})),{setModalProps:h,closeModal:y}=M,I=J(()=>{if(e(i)==="detail")return"\u8BE6\u60C5";if(e(i)==="editor")return"\u7F16\u8F91";if(e(i)==="add")return"\u65B0\u589E"});function N(){return l.value.map(r=>{const d=r.methods;return r.onClick=()=>{g[d]&&g[d]()},r})}function E(r){return typeof r=="function"?r():r}const g={handleSubmit:function(){return B(this,null,function*(){try{const r=yield L(),d=S();h({confirmLoading:!0}),yield tt(Y(d,r),e(i)==="editor"),y(),o("success")}finally{h({confirmLoading:!1})}})},cancel:function(){y()}};return t["./testModalMixin.ts"]&&t["./testModalMixin.ts"].default({methods:g,footerBtnList:l,formMethods:p,modalMethods:M}),(r,d)=>{const R=T("a-button");return u(),b(e(A),Q(r.$attrs,{onRegister:e(V),title:e(I)}),{footer:_(()=>[et,(u(!0),v(x,null,W(N(),(n,ot)=>(u(),v(x,null,[E(n.ifShow)?(u(),b(R,{key:0,type:n.type,preIcon:n.preIcon,disabled:n.disabled===!0,onClick:n.onClick},{default:_(()=>[$(q(n.label),1)]),_:2},1032,["type","preIcon","disabled","onClick"])):H("",!0)],64))),256))]),default:_(()=>[K(e(G),{onRegister:e(f)},null,8,["onRegister"])]),_:1},16,["onRegister","title"])}}});export{Gt as default};