var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var a=(o,e,t)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e)=>{for(var t in e||(e={}))F.call(e,t)&&a(o,t,e[t]);if(s)for(var t of s(e))v.call(e,t)&&a(o,t,e[t]);return o},n=(o,e)=>g(o,C(e));import{a1 as b,a as N,B as S,bf as k,U as c,o as y,i as V,n as f,p as l,t as B,r as O,bJ as $}from"./index.0c676cb0.js";import D from"./FormNodeOperate.7ebe1452.js";import{u as _}from"./useFormDesignState.b842bbb2.js";import w from"./index.e969fa19.js";import"./index.cf979df1.js";import"./formItemConfig.76a6b010.js";import"./componentMap.801737ea.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./RadioButtonGroup.dc9fedf3.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./JDictSelectTag.b196d7c6.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./JUpload.2c84d159.js";import"./functional.51da07bc.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./index.788229a3.js";const M=N({name:"FormNode",components:{VFormItem:w,FormNodeOperate:D},props:{schema:{type:Object,required:!0}},setup(o){const{formConfig:e,formDesignMethods:t}=_(),r=S({}),m=()=>{t.handleSetSelectItem(o.schema)};return n(p({},k(r)),{handleSelectItem:m,formConfig:e})}}),j={class:"form-item-box"},q={class:"show-key-box"};function z(o,e,t,r,m,E){var i;const d=c("VFormItem"),h=c("FormNodeOperate");return y(),V("div",{class:O(["drag-move-box",{active:o.schema.key===((i=o.formConfig.currentItem)==null?void 0:i.key)}]),onClick:e[0]||(e[0]=$((...u)=>o.handleSelectItem&&o.handleSelectItem(...u),["stop"]))},[f("div",j,[l(d,{formConfig:o.formConfig,schema:o.schema},null,8,["formConfig","schema"])]),f("div",q,B(o.schema.label+(o.schema.field?"/"+o.schema.field:"")),1),l(h,{schema:o.schema,currentItem:o.formConfig.currentItem},null,8,["schema","currentItem"])],2)}var vo=b(M,[["render",z]]);export{vo as default};