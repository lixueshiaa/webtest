var h=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var C=(t,o,e)=>o in t?h(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,M=(t,o)=>{for(var e in o||(o={}))k.call(o,e)&&C(t,e,o[e]);if(c)for(var e of c(o))V.call(o,e)&&C(t,e,o[e]);return t},v=(t,o)=>w(t,A(o));var b=(t,o,e)=>new Promise((l,a)=>{var u=r=>{try{i(e.next(r))}catch(m){a(m)}},p=r=>{try{i(e.throw(r))}catch(m){a(m)}},i=r=>r.done?l(r.value):Promise.resolve(r.value).then(u,p);i((e=e.apply(t,o)).next())});import g from"./index.fb9403e8.js";import{a as D}from"./index.afe048ea.js";import U from"./JsonModal.b6bf266f.js";import{a1 as B,a as S,bR as $,z as y,B as E,bf as G,U as f,o as J,k as O,G as F,p as d}from"./index.d537950e.js";import"./FormRender.3c62a8f2.js";import"./index.4c00e84d.js";import"./formItemConfig.5730222c.js";import"./componentMap.93bd7e90.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./RadioButtonGroup.7ea12308.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./JDictSelectTag.189304ea.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./JUpload.864c8b30.js";import"./functional.f108e49e.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./index.7b3bb8d0.js";import"./useFormDesignState.1f4932bd.js";import"./PreviewCode.efbf1fbc.js";import"./index.3cb795f2.js";const R=S({name:"VFormPreview",components:{JsonModal:U,VFormCreate:g,Modal:$},setup(){const t=y(null),o=E({formModel:{},formConfig:{},visible:!1,fApi:{}}),e=i=>{D(i.schemas),o.formConfig=i,o.visible=!0},l=()=>{o.visible=!1,o.formModel={}},a=()=>b(this,null,function*(){var r,m,n,s;const i=yield(m=(r=o.fApi).submit)==null?void 0:m.call(r);(s=(n=t.value)==null?void 0:n.showModal)==null||s.call(n,i)}),u=i=>{},p=()=>{o.formModel={}};return v(M({handleGetData:a,handleCancel:l},G(o)),{showModal:e,jsonModal:t,onSubmit:u,onCancel:p})}});function N(t,o,e,l,a,u){const p=f("a-input"),i=f("VFormCreate"),r=f("JsonModal"),m=f("Modal");return J(),O(m,{title:"\u9884\u89C8(\u652F\u6301\u5E03\u5C40)",visible:t.visible,onOk:t.handleGetData,onCancel:t.handleCancel,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:F(()=>[d(i,{"form-config":t.formConfig,fApi:t.fApi,"onUpdate:fApi":o[0]||(o[0]=n=>t.fApi=n),formModel:t.formModel,"onUpdate:formModel":o[1]||(o[1]=n=>t.formModel=n),onSubmit:t.onSubmit},{slotName:F(({formModel:n,field:s})=>[d(p,{value:n[s],"onUpdate:value":_=>n[s]=_,placeholder:"\u6211\u662F\u63D2\u69FD\u4F20\u9012\u7684\u8F93\u5165\u6846"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(r,{ref:"jsonModal"},null,512)]),_:1},8,["visible","onOk","onCancel"])}var Vo=B(R,[["render",N]]);export{Vo as default};