var _=Object.defineProperty;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var m=(t,o,e)=>o in t?_(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,f=(t,o)=>{for(var e in o||(o={}))v.call(o,e)&&m(t,e,o[e]);if(d)for(var e of d(o))M.call(o,e)&&m(t,e,o[e]);return t};var p=(t,o,e)=>new Promise((n,s)=>{var c=a=>{try{r(e.next(a))}catch(u){s(u)}},i=a=>{try{r(e.throw(a))}catch(u){s(u)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,i);r((e=e.apply(t,o)).next())});import{B as D}from"./index.7ab28a2b.js";import{B as I}from"./BasicForm.3d2570da.js";import"./componentMap.b6eed178.js";import{u as P}from"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import{by as y,bc as C,a as S,z as k,bg as w,j as b,f as N,a1 as T,U as g,o as x,k as R,G as $,p as A,ad as q}from"./index.397c0bf9.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import{b as L}from"./system.99642082.js";const ee=[{title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",width:160,align:"left"},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:50},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:t})=>{const e=~~t.status===0,n=e?"green":"red",s=e?"\u542F\u7528":"\u505C\u7528";return y(C,{color:n},()=>s)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u5907\u6CE8",dataIndex:"remark"}],te=[{field:"deptName",label:"\u90E8\u95E8\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},colProps:{span:8}}],O=[{field:"deptName",label:"\u90E8\u95E8\u540D\u79F0",component:"Input",required:!0},{field:"parentDept",label:"\u4E0A\u7EA7\u90E8\u95E8",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"\u6392\u5E8F",component:"InputNumber",required:!0},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},required:!0},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"}],j=S({name:"DeptModal",components:{BasicModal:D,BasicForm:I},emits:["success","register"],setup(t,{emit:o}){const e=k(!0),[n,{resetFields:s,setFieldsValue:c,updateSchema:i,validate:r}]=P({labelWidth:100,schemas:O,showActionButtonGroup:!1}),[a,{setModalProps:u,closeModal:F}]=w(l=>p(this,null,function*(){s(),u({confirmLoading:!1}),e.value=!!(l!=null&&l.isUpdate),b(e)&&c(f({},l.record));const h=yield L();i({field:"parentDept",componentProps:{treeData:h}})})),E=N(()=>b(e)?"\u7F16\u8F91\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8");function B(){return p(this,null,function*(){try{const l=yield r();u({confirmLoading:!0}),console.log(l),F(),o("success")}finally{u({confirmLoading:!1})}})}return{registerModal:a,registerForm:n,getTitle:E,handleSubmit:B}}});function G(t,o,e,n,s,c){const i=g("BasicForm"),r=g("BasicModal");return x(),R(r,q(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:$(()=>[A(i,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var U=T(j,[["render",G]]),oe=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{U as D,oe as a,ee as c,te as s};
