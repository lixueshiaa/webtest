import{B as C}from"./BasicForm.3d2570da.js";import"./componentMap.b6eed178.js";import{u as B}from"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import{a1 as g,a as E,dS as F,I as s,U as r,o as h,k as b,G as p,p as n,by as v,T as A}from"./index.397c0bf9.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import{P}from"./index.a7c60aee.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./index.7ab28a2b.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./index.1ddf0867.js";import"./useFormItem.3d0c36d5.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./api.2a8d49a5.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./onMountedOrActivated.752d8da8.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./functional.540b215d.js";import"./useContentViewHeight.4e4c24ce.js";const m=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>v(s,{placeholder:"\u8BF7\u8F93\u5165",value:e[o],onChange:t=>{e[o]=t.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=E({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[s.name]:s},setup(){const{createMessage:e}=A(),[o,{setProps:t}]=B({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},setProps:t}}});function I(e,o,t,a,k,x){const l=r("a-input"),c=r("BasicForm"),d=r("CollapseContainer"),f=r("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[n(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[n(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:p(({model:i,field:u})=>[n(l,{value:i[u],"onUpdate:value":_=>i[u]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ue=g(S,[["render",I]]);export{ue as default};
