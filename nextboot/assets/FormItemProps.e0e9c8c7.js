import{b as U,a as S,c as A,d as E}from"./formItemPropsConfig.5c2ef332.js";import{a1 as _,a as L,cL as B,I as D,F as G,fa as N,bS as R,H as $,b1 as q,bT as V,O as T,eX as X,X as z,f as H,U as a,o as r,i as n,k as t,G as m,N as c,a9 as d,ai as f,ad as C,l as s,p as I,J,t as O,r as j,f3 as K}from"./index.397c0bf9.js";import M from"./RuleProps.9c9d8bd6.js";import{u as Q}from"./useFormDesignState.e3d1405e.js";import"./formItemConfig.ab109f93.js";import"./componentMap.b6eed178.js";import"./index.1ddf0867.js";import"./useFormItem.3d0c36d5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./index.7ab28a2b.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./api.2a8d49a5.js";import"./props.12587afd.js";import"./JDictSelectTag.67e5d4c9.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./onMountedOrActivated.752d8da8.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./JUpload.9a731a32.js";import"./functional.540b215d.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./index.97ba0272.js";import"./index.18447f3a.js";const W=L({name:"FormItemProps",components:{RuleProps:M,Empty:B,Input:D,Form:G,FormItem:N,Switch:R,Checkbox:$,Select:q,Slider:V,Col:T,RadioGroup:X},setup(){const{formConfig:e}=Q();z(()=>e.value,()=>{e.value.currentItem&&(e.value.currentItem.itemProps=e.value.currentItem.itemProps||{},e.value.currentItem.itemProps.labelCol=e.value.currentItem.itemProps.labelCol||{},e.value.currentItem.itemProps.wrapperCol=e.value.currentItem.itemProps.wrapperCol||{})},{deep:!0,immediate:!0});const p=l=>l&&K(l)?!l.includes(e.value.currentItem.component):!0,P=H(()=>U.filter(l=>p(l.exclude)));return{baseFormItemProps:S,advanceFormItemProps:A,advanceFormItemColProps:E,formConfig:e,controlPropsList:P,showProps:p}}}),Y={class:"properties-content"},Z={key:0,class:"properties-body"};function x(e,p,P,l,ee,oe){var v;const k=a("Empty"),i=a("FormItem"),b=a("Checkbox"),g=a("Col"),F=a("Switch"),y=a("Input"),h=a("RuleProps"),w=a("Form");return r(),n("div",Y,[(v=e.formConfig.currentItem)!=null&&v.itemProps?(r(),n("div",Z,[e.formConfig.currentItem.key?(r(),t(w,{key:1,"label-align":"left",layout:"vertical"},{default:m(()=>[(r(!0),n(c,null,d(e.baseFormItemProps,o=>(r(),n("div",{key:o.name},[e.showProps(o.exclude)?(r(),t(i,{key:0,label:o.label},{default:m(()=>[(r(),t(f(o.component),C({class:"component-props"},o.componentProps,{value:e.formConfig.currentItem[o.name],"onUpdate:value":u=>e.formConfig.currentItem[o.name]=u}),null,16,["value","onUpdate:value"]))]),_:2},1032,["label"])):s("",!0)]))),128)),(r(!0),n(c,null,d(e.advanceFormItemProps,o=>(r(),n("div",{key:o.name},[e.showProps(o.exclude)?(r(),t(i,{key:0,label:o.label},{default:m(()=>[(r(),t(f(o.component),C({class:"component-props"},o.componentProps,{value:e.formConfig.currentItem.itemProps[o.name],"onUpdate:value":u=>e.formConfig.currentItem.itemProps[o.name]=u}),null,16,["value","onUpdate:value"]))]),_:2},1032,["label"])):s("",!0)]))),128)),(r(!0),n(c,null,d(e.advanceFormItemColProps,o=>(r(),n("div",{key:o.name},[e.showProps(o.exclude)?(r(),t(i,{key:0,label:o.label},{default:m(()=>[(r(),t(f(o.component),C({class:"component-props"},o.componentProps,{value:e.formConfig.currentItem.itemProps[o.name].span,"onUpdate:value":u=>e.formConfig.currentItem.itemProps[o.name].span=u}),null,16,["value","onUpdate:value"]))]),_:2},1032,["label"])):s("",!0)]))),128)),e.controlPropsList.length?(r(),t(i,{key:0,label:"\u63A7\u5236\u5C5E\u6027"},{default:m(()=>[(r(!0),n(c,null,d(e.controlPropsList,o=>(r(),t(g,{key:o.name},{default:m(()=>[I(b,{checked:e.formConfig.currentItem.itemProps[o.name],"onUpdate:checked":u=>e.formConfig.currentItem.itemProps[o.name]=u},{default:m(()=>[J(O(o.label),1)]),_:2},1032,["checked","onUpdate:checked"])]),_:2},1024))),128))]),_:1})):s("",!0),["Grid"].includes(e.formConfig.currentItem.component)?s("",!0):(r(),t(i,{key:1,label:"\u662F\u5426\u5FC5\u9009"},{default:m(()=>[I(F,{checked:e.formConfig.currentItem.itemProps.required,"onUpdate:checked":p[0]||(p[0]=o=>e.formConfig.currentItem.itemProps.required=o)},null,8,["checked"]),e.formConfig.currentItem.itemProps.required?(r(),t(y,{key:0,value:e.formConfig.currentItem.itemProps.message,"onUpdate:value":p[1]||(p[1]=o=>e.formConfig.currentItem.itemProps.message=o),placeholder:"\u8BF7\u8F93\u5165\u5FC5\u9009\u63D0\u793A"},null,8,["value"])):s("",!0)]),_:1})),["Grid"].includes(e.formConfig.currentItem.component)?s("",!0):(r(),t(i,{key:2,label:"\u6821\u9A8C\u89C4\u5219",class:j({"form-rule-props":!!e.formConfig.currentItem.itemProps.rules})},{default:m(()=>[I(h)]),_:1},8,["class"]))]),_:1})):(r(),t(k,{key:0,class:"hint-box",description:"\u672A\u9009\u62E9\u63A7\u4EF6"}))])):s("",!0)])}var Re=_(W,[["render",x]]);export{Re as default};
