import{B as c}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as i}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a1 as B,a as d,dS as f,U as n,o as b,k as P,G as r,p as t}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{P as h}from"./index.dbf0b2ba.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";import"./useContentViewHeight.6a091f7f.js";const s=()=>[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{console.log(o)}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function C(){return[{field:"field10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"field11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"field13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}const F=d({components:{BasicForm:c,CollapseContainer:f,PageWrapper:h},setup(){const[o]=i({labelWidth:120,schemas:s(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"\u5B57\u6BB5"+e,colProps:{span:8}});const[l]=i({labelWidth:120,schemas:[...s(),...C(),{field:"",component:"Divider",label:"\u66F4\u591A\u5B57\u6BB5"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:o,register1:l}}});function g(o,p,l,e,_,A){const u=n("BasicForm"),a=n("CollapseContainer"),m=n("PageWrapper");return b(),P(m,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:r(()=>[t(a,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:r(()=>[t(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),t(a,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:r(()=>[t(u,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}var po=B(F,[["render",g]]);export{po as default};