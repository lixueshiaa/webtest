import{B as C}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as B}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a1 as g,a as E,dS as F,I as s,U as r,o as h,k as b,G as p,p as n,by as v,T as A}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{P}from"./index.dbf0b2ba.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";import"./useContentViewHeight.6a091f7f.js";const m=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>v(s,{placeholder:"\u8BF7\u8F93\u5165",value:e[o],onChange:t=>{e[o]=t.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=E({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[s.name]:s},setup(){const{createMessage:e}=A(),[o,{setProps:t}]=B({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},setProps:t}}});function I(e,o,t,a,k,x){const l=r("a-input"),c=r("BasicForm"),d=r("CollapseContainer"),f=r("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[n(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[n(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:p(({model:i,field:u})=>[n(l,{value:i[u],"onUpdate:value":_=>i[u]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ue=g(S,[["render",I]]);export{ue as default};
