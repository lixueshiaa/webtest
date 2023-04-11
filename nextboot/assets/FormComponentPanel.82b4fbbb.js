import{d as g}from"./vuedraggable.umd.d83f2793.js";import{a1 as f,a as _,F as h,cL as v,f as C,U as r,o as y,i as S,D as F,E,p as n,G as d,n as I,ab as D,ac as b,ag as A}from"./index.0c676cb0.js";import P from"./LayoutItem.6da1ef84.js";import{u as V}from"./useFormDesignState.b842bbb2.js";import"./FormNode.0477ecb3.js";import"./FormNodeOperate.7ebe1452.js";import"./index.cf979df1.js";import"./index.e969fa19.js";import"./formItemConfig.76a6b010.js";import"./componentMap.801737ea.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./RadioButtonGroup.dc9fedf3.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./JDictSelectTag.b196d7c6.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./JUpload.2c84d159.js";import"./functional.51da07bc.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./index.788229a3.js";const k=_({name:"FormComponentPanel",components:{LayoutItem:P,draggable:g,Form:h,Empty:v},emits:["handleSetSelectItem"],setup(o,{emit:a}){const{formConfig:t}=V(),i=({newIndex:e})=>{t.value.schemas=t.value.schemas||[];const m=t.value.schemas;m[e]=A(m[e]),a("handleSetSelectItem",m[e])},p=e=>{a("handleSetSelectItem",t.value.schemas[e.oldIndex])},l=C(()=>t.value.layout==="horizontal"?"Col":"div");return{addItem:i,handleDragStart:p,formConfig:t,layoutTag:l}}}),B={class:"form-panel v-form-container"},L={class:"draggable-box"};function $(o,a,t,i,p,l){const e=r("Empty"),m=r("LayoutItem"),c=r("draggable"),u=r("Form");return y(),S("div",B,[F(n(e,{class:"empty-text",description:"\u4ECE\u5DE6\u4FA7\u9009\u62E9\u63A7\u4EF6\u6DFB\u52A0"},null,512),[[E,o.formConfig.schemas.length===0]]),n(u,D(b(o.formConfig)),{default:d(()=>[I("div",L,[n(c,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":a[0]||(a[0]=s=>o.formConfig.schemas=s),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:d(({element:s})=>[n(m,{class:"drag-move",schema:s,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}var vo=f(k,[["render",$],["__scopeId","data-v-3365af28"]]);export{vo as default};
