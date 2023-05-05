var G=Object.defineProperty;var v=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var S=(i,o,e)=>o in i?G(i,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[o]=e,w=(i,o)=>{for(var e in o||(o={}))U.call(o,e)&&S(i,e,o[e]);if(v)for(var e of v(o))z.call(o,e)&&S(i,e,o[e]);return i};var B=(i,o,e)=>new Promise((f,u)=>{var h=n=>{try{a(e.next(n))}catch(l){u(l)}},s=n=>{try{a(e.throw(n))}catch(l){u(l)}},a=n=>n.done?f(n.value):Promise.resolve(n.value).then(h,s);a((e=e.apply(i,o)).next())});import{B as J}from"./index.9788db2e.js";import{B as W}from"./BasicForm.d1b5a4f4.js";import"./componentMap.6942b0b6.js";import{u as $}from"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import{a as q,z as p,j as r,bg as H,an as K,f as x,bO as Q,U as X,o as c,k,G as _,i as L,a9 as Y,N as R,J as Z,t as ee,l as te,ai as oe,ad as re,n as se}from"./index.9eb451d3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import{j as ie,k as ne}from"./SysFeedback.api.96abce30.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";import"./render.9a5e321f.js";import"./index.e3d374a0.js";import"./JUploadModal.0a6b90e3.js";const ae=se("span",null,null,-1),We=q({__name:"SysFeedbackModal",emits:["register","success"],setup(i,{emit:o}){const e={},f=p(null),u=p(null),h=p(!1),s=p("");let a="",n={};const l=p([{label:"\u53D6\u6D88",methods:"cancel",ifShow:()=>r(s)!=="detail"},{label:"\u786E\u8BA4",methods:"handleSubmit",type:"primary",ifShow:()=>r(s)!=="detail"}]),[I,b]=$({labelWidth:150,schemas:ie,showActionButtonGroup:!1}),{setProps:V,resetFields:D,setFieldsValue:E,validate:F,getFieldsValue:N}=b,[O,C]=H(t=>B(this,null,function*(){s.value=t.action,a=t.title,n=t.record,yield D(),y({confirmLoading:!1}),r(s)!=="add"&&K(()=>{E(w({},t.record)),setTimeout(()=>{F()},0)}),V({disabled:r(s)==="detail"})})),{setModalProps:y,closeModal:M}=C,T=x(()=>r(s)==="detail"?"\u8BE6\u60C5":r(s)==="editor"?"\u7F16\u8F91":r(s)==="add"?"\u65B0\u589E":a),P=x(()=>l.value.map(t=>{const d=t.methods;return t.onClick=()=>{g[d]&&g[d]()},t}));function j(t){return typeof t=="function"?t():t}const g={handleSubmit:function(){return B(this,null,function*(){try{const t=yield F(),d=N();y({confirmLoading:!0}),yield ne(Q(n,d,t),r(s)==="editor"),M(),o("success")}finally{y({confirmLoading:!1})}})},cancel:function(){M()}};return e["./sysFeedbackMixin.ts"]&&e["./sysFeedbackMixin.ts"].default({methods:g,footerBtnList:l,formMethods:b,action:s,contentComponent:f,contentRef:u,isCustomModel:h,modalMethods:C}),(t,d)=>{const A=X("a-button");return c(),k(r(J),re(t.$attrs,{onRegister:r(O),title:r(T),onOk:t.handleSubmit}),{footer:_(()=>[ae,(c(!0),L(R,null,Y(r(P),(m,le)=>(c(),L(R,null,[j(m.ifShow)?(c(),k(A,{key:0,type:m.type,preIcon:m.preIcon,disabled:m.disabled===!0,onClick:m.onClick},{default:_(()=>[Z(ee(m.label),1)]),_:2},1032,["type","preIcon","disabled","onClick"])):te("",!0)],64))),256))]),default:_(()=>[h.value?(c(),k(oe(f.value),{key:0,ref_key:"contentRef",ref:u},null,512)):(c(),k(r(W),{key:1,onRegister:r(I)},null,8,["onRegister"]))]),_:1},16,["onRegister","title","onOk"])}}});export{We as default};