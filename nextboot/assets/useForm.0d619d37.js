var g=Object.defineProperty;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var C=(r,t,o)=>t in r?g(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,_=(r,t)=>{for(var o in t||(t={}))h.call(t,o)&&C(r,o,t[o]);if(d)for(var o of d(t))M.call(t,o)&&C(r,o,t[o]);return r};var v=(r,t,o)=>new Promise((i,p)=>{var u=e=>{try{m(o.next(e))}catch(s){p(s)}},c=e=>{try{m(o.throw(e))}catch(s){p(s)}},m=e=>e.done?i(e.value):Promise.resolve(e.value).then(u,c);m((o=o.apply(r,t)).next())});import{B as k}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{u as x}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import{a as B,z as w,B as F,f as y,o as D,k as E,G as j,p as b,ad as R,j as l,bR as G}from"./index.6cf4d174.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import O from"./JsonModal.af71dd10.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";import"./PreviewCode.d822b771.js";import"./index.8dd939db.js";import"./index.63a99b4d.js";const vo=B({__name:"useForm",setup(r,{expose:t}){const o=w(null),i=F({formModel:{},formConfig:{},visible:!1}),p=y(()=>_({},i.formConfig)),u=n=>{i.formConfig=n,i.visible=!0},[c,{validate:m}]=x(),e=()=>{i.visible=!1},s=()=>v(this,null,function*(){var a,f;let n=yield m();(f=(a=o.value)==null?void 0:a.showModal)==null||f.call(a,n)});return t({showModal:u}),(n,a)=>(D(),E(l(G),{title:"\u9884\u89C8(\u4E0D\u652F\u6301\u5E03\u5C40)",visible:i.visible,onOk:s,onCancel:e,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:j(()=>[b(l(k),R(l(p),{onRegister:l(c)}),null,16,["onRegister"]),b(O,{ref_key:"jsonModal",ref:o},null,512)]),_:1},8,["visible"]))}});export{vo as default};
