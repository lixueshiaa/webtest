import g from"./index.e969fa19.js";import{a1 as C,a as y,R,O as $,U as t,o as r,k as n,G as s,i as a,a9 as p,N as i,a8 as k,aa as v}from"./index.0c676cb0.js";import"./formItemConfig.76a6b010.js";import"./componentMap.801737ea.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./RadioButtonGroup.dc9fedf3.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./JDictSelectTag.b196d7c6.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./JUpload.2c84d159.js";import"./functional.51da07bc.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./index.788229a3.js";import"./index.cf979df1.js";import"./useFormDesignState.b842bbb2.js";const D=y({name:"FormRender",components:{VFormItem:g,Row:R,Col:$},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,default:()=>({})},formConfig:{type:Object,default:()=>[]},setFormModel:{type:Function,default:null}},emits:["change","submit","reset"],setup(o){}});function M(o,e,b,w,N,O){const l=t("FormRender",!0),f=t("Col"),d=t("Row"),u=t("VFormItem");return["Grid"].includes(o.schema.component)?(r(),n(d,{key:0,class:"grid-row"},{default:s(()=>[(r(!0),a(i,null,p(o.schema.columns,(m,c)=>(r(),n(f,{class:"grid-col",key:c,span:m.span},{default:s(()=>[(r(!0),a(i,null,p(m.children,(F,h)=>(r(),n(l,{key:h,schema:F,formData:o.formData,formConfig:o.formConfig,setFormModel:o.setFormModel},null,8,["schema","formData","formConfig","setFormModel"]))),128))]),_:2},1032,["span"]))),128))]),_:1})):(r(),n(u,{key:1,formConfig:o.formConfig,schema:o.schema,formData:o.formData,setFormModel:o.setFormModel,onChange:e[0]||(e[0]=m=>o.$emit("change",{schema:o.schema,value:m})),onSubmit:e[1]||(e[1]=m=>o.$emit("submit",o.schema)),onReset:e[2]||(e[2]=m=>o.$emit("reset"))},k({_:2},[o.schema.componentProps&&o.schema.componentProps.slotName?{name:o.schema.componentProps.slotName,fn:s(()=>[v(o.$slots,o.schema.componentProps.slotName)]),key:"0"}:void 0]),1032,["formConfig","schema","formData","setFormModel"]))}var io=C(D,[["render",M]]);export{io as default};
