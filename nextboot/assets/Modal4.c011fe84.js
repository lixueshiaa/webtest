import{B as l}from"./index.991a4e0a.js";import{B as c}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as d}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a as u,z as f,bg as B,a1 as g,an as h,U as n,o as _,k as b,G as C,n as R,p as V,ad as v}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";const p=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=u({components:{BasicModal:l,BasicForm:c},props:{userData:{type:Object}},setup(e){const t=f({}),[i,{}]=d({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=B(o=>{o&&r(o)});function r(o){console.log("Data Received",o),t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:p,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=n("BasicForm"),m=n("BasicModal");return _(),b(m,v(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:C(()=>[R("div",M,[V(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var io=g(F,[["render",D]]);export{io as default};