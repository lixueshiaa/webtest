import{B as c}from"./componentMap.93bd7e90.js";import{a1 as l,a as d,be as i,U as e,o as g,k as f,G as B,p as r,T as F}from"./index.d537950e.js";import{B as _}from"./BasicForm.b84ad685.js";import{u as A}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{P as C}from"./index.dbf0b2ba.js";import{u as s}from"./upload.04f6bbb3.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./functional.f108e49e.js";import"./useContentViewHeight.6a091f7f.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:s}}],E=d({components:{BasicUpload:c,BasicForm:_,PageWrapper:C,[i.name]:i},setup(){const{createMessage:o}=F(),[t]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:a=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(a)}`)},uploadApi:s,register:t}}});function P(o,t,a,U,$,b){const p=e("a-alert"),m=e("BasicUpload"),n=e("BasicForm"),u=e("PageWrapper");return g(),f(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:B(()=>[r(p,{message:"\u57FA\u7840\u793A\u4F8B"}),r(m,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),r(p,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),r(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var so=l(E,[["render",P]]);export{so as default};