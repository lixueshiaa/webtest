var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var a=(o,e,t)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e)=>{for(var t in e||(e={}))F.call(e,t)&&a(o,t,e[t]);if(s)for(var t of s(e))v.call(e,t)&&a(o,t,e[t]);return o},n=(o,e)=>g(o,C(e));import{a1 as b,a as N,B as S,bf as k,U as c,o as y,i as V,n as f,p as l,t as B,r as O,bJ as $}from"./index.397c0bf9.js";import D from"./FormNodeOperate.742ec0d9.js";import{u as _}from"./useFormDesignState.e3d1405e.js";import w from"./index.69e50d93.js";import"./index.18447f3a.js";import"./formItemConfig.ab109f93.js";import"./componentMap.b6eed178.js";import"./index.1ddf0867.js";import"./useFormItem.3d0c36d5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./index.7ab28a2b.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./api.2a8d49a5.js";import"./props.12587afd.js";import"./JDictSelectTag.67e5d4c9.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./onMountedOrActivated.752d8da8.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./JUpload.9a731a32.js";import"./functional.540b215d.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./index.97ba0272.js";const M=N({name:"FormNode",components:{VFormItem:w,FormNodeOperate:D},props:{schema:{type:Object,required:!0}},setup(o){const{formConfig:e,formDesignMethods:t}=_(),r=S({}),m=()=>{t.handleSetSelectItem(o.schema)};return n(p({},k(r)),{handleSelectItem:m,formConfig:e})}}),j={class:"form-item-box"},q={class:"show-key-box"};function z(o,e,t,r,m,E){var i;const d=c("VFormItem"),h=c("FormNodeOperate");return y(),V("div",{class:O(["drag-move-box",{active:o.schema.key===((i=o.formConfig.currentItem)==null?void 0:i.key)}]),onClick:e[0]||(e[0]=$((...u)=>o.handleSelectItem&&o.handleSelectItem(...u),["stop"]))},[f("div",j,[l(d,{formConfig:o.formConfig,schema:o.schema},null,8,["formConfig","schema"])]),f("div",q,B(o.schema.label+(o.schema.field?"/"+o.schema.field:"")),1),l(h,{schema:o.schema,currentItem:o.formConfig.currentItem},null,8,["schema","currentItem"])],2)}var vo=b(M,[["render",z]]);export{vo as default};