import C from"./FormProps.3d1ee526.js";import y from"./FormItemProps.e150f379.js";import v from"./ComponentProps.eb049fac.js";import b from"./FormItemColumnProps.ffcaa0b5.js";import{u as k}from"./useFormDesignState.b842bbb2.js";import{c}from"./formItemConfig.76a6b010.js";import{a1 as F,a as g,dC as T,f1 as h,f as I,U as t,o as r,i as K,p as s,G as e,k as p,aa as $}from"./index.0c676cb0.js";import"./formItemPropsConfig.c9889ef8.js";import"./RuleProps.c418122b.js";import"./index.cf979df1.js";import"./index.95c15ee4.js";import"./RadioButtonGroup.dc9fedf3.js";import"./useFormItem.47fc2179.js";import"./FormOptions.8f0def91.js";import"./componentMap.801737ea.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./JDictSelectTag.b196d7c6.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./JUpload.2c84d159.js";import"./functional.51da07bc.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./index.788229a3.js";const B=g({name:"PropsPanel",components:{FormProps:C,FormItemProps:y,ComponentProps:v,ComponentColumnProps:b,Tabs:T,TabPane:h},setup(){const{formConfig:o}=k(),m=I(()=>c.find(i=>{var a;return i.component===((a=o.value.currentItem)==null?void 0:a.component)}));return{formConfig:o,customComponents:c,slotProps:m}}}),E={style:{height:"100%"}};function S(o,m,i,a,U,w){const u=t("FormProps"),n=t("TabPane"),_=t("FormItemProps"),l=t("ComponentColumnProps"),f=t("ComponentProps"),P=t("Tabs");return r(),K("div",E,[s(P,{activeKey:o.formConfig.activeKey,"onUpdate:activeKey":m[0]||(m[0]=d=>o.formConfig.activeKey=d),style:{height:"100%"},tabBarStyle:{margin:0}},{default:e(()=>[(r(),p(n,{key:1,tab:"\u8868\u5355"},{default:e(()=>[s(u)]),_:1})),(r(),p(n,{key:2,tab:"\u63A7\u4EF6"},{default:e(()=>[s(_)]),_:1})),(r(),p(n,{key:3,tab:"\u6805\u683C"},{default:e(()=>[s(l)]),_:1})),(r(),p(n,{key:4,tab:"\u7EC4\u4EF6"},{default:e(()=>[o.slotProps?$(o.$slots,o.slotProps.component+"Props",{key:0},void 0,!0):(r(),p(f,{key:1}))]),_:3}))]),_:3},8,["activeKey"])])}var bo=F(B,[["render",S],["__scopeId","data-v-076e4942"]]);export{bo as default};