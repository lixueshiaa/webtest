import{B as n}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{a1 as u,a as l,dS as c,U as o,o as d,k as f,G as a,p as i,by as C,T as _}from"./index.6cf4d174.js";import"./RadioButtonGroup.e396598a.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import{T as h}from"./index.d3e30781.js";import{P as B}from"./index.28df25ce.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.f170d56c.js";import"./onMountedOrActivated.c1705977.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";import"./useContentViewHeight.183e9878.js";const b=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:t,field:e})=>C(h,{value:t[e],onChange:r=>{t[e]=r}})}],g=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:B},setup(){const{createMessage:t}=_();return{schemas:b,handleSubmit:e=>{t.success("click search,values:"+JSON.stringify(e))}}}});function S(t,e,r,y,V,k){const p=o("BasicForm"),m=o("CollapseContainer"),s=o("PageWrapper");return d(),f(s,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:a(()=>[i(m,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:a(()=>[i(p,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var rt=u(g,[["render",S]]);export{rt as default};
