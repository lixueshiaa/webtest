import{B as C}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{a1 as B,a as c,dS as E,z as P,U as i,o as b,k as F,G as e,n as a,p as s,T as v,J as l}from"./index.d537950e.js";import"./RadioButtonGroup.7ea12308.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{P as k}from"./index.dbf0b2ba.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";import"./useContentViewHeight.6a091f7f.js";const _=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:t=>{console.log(t)}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],$=c({components:{BasicForm:C,CollapseContainer:E,PageWrapper:k},setup(){const t=P(null),{createMessage:o}=v();return{formElRef:t,schemas:_,handleSubmit:r=>{o.success("click search,values:"+JSON.stringify(r))},setProps(r){const p=t.value;!p||p.setProps(r)}}}}),D={class:"mb-4"},A=l(" \u66F4\u6539labelWidth "),S=l(" \u8FD8\u539FlabelWidth "),g=l(" \u66F4\u6539Size "),h=l(" \u8FD8\u539FSize "),w=l(" \u7981\u7528\u8868\u5355 "),W=l(" \u89E3\u9664\u7981\u7528 "),R=l(" \u7D27\u51D1\u8868\u5355 "),z=l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),G=l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),N={class:"mb-4"},O=l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),y=l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),V=l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),I=l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),J=l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),M=l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),T=l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),U=l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ");function j(t,o,r,p,q,H){const u=i("a-button"),m=i("BasicForm"),d=i("CollapseContainer"),f=i("PageWrapper");return b(),F(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:e(()=>[a("div",D,[s(u,{onClick:o[0]||(o[0]=n=>t.setProps({labelWidth:150})),class:"mr-2"},{default:e(()=>[A]),_:1}),s(u,{onClick:o[1]||(o[1]=n=>t.setProps({labelWidth:120})),class:"mr-2"},{default:e(()=>[S]),_:1}),s(u,{onClick:o[2]||(o[2]=n=>t.setProps({size:"large"})),class:"mr-2"},{default:e(()=>[g]),_:1}),s(u,{onClick:o[3]||(o[3]=n=>t.setProps({size:"default"})),class:"mr-2"},{default:e(()=>[h]),_:1}),s(u,{onClick:o[4]||(o[4]=n=>t.setProps({disabled:!0})),class:"mr-2"},{default:e(()=>[w]),_:1}),s(u,{onClick:o[5]||(o[5]=n=>t.setProps({disabled:!1})),class:"mr-2"},{default:e(()=>[W]),_:1}),s(u,{onClick:o[6]||(o[6]=n=>t.setProps({compact:!0})),class:"mr-2"},{default:e(()=>[R]),_:1}),s(u,{onClick:o[7]||(o[7]=n=>t.setProps({compact:!1})),class:"mr-2"},{default:e(()=>[z]),_:1}),s(u,{onClick:o[8]||(o[8]=n=>t.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:e(()=>[G]),_:1})]),a("div",N,[s(u,{onClick:o[9]||(o[9]=n=>t.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:e(()=>[O]),_:1}),s(u,{onClick:o[10]||(o[10]=n=>t.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:e(()=>[y]),_:1}),s(u,{onClick:o[11]||(o[11]=n=>t.setProps({showResetButton:!1})),class:"mr-2"},{default:e(()=>[V]),_:1}),s(u,{onClick:o[12]||(o[12]=n=>t.setProps({showResetButton:!0})),class:"mr-2"},{default:e(()=>[I]),_:1}),s(u,{onClick:o[13]||(o[13]=n=>t.setProps({showSubmitButton:!1})),class:"mr-2"},{default:e(()=>[J]),_:1}),s(u,{onClick:o[14]||(o[14]=n=>t.setProps({showSubmitButton:!0})),class:"mr-2"},{default:e(()=>[M]),_:1}),s(u,{onClick:o[15]||(o[15]=n=>t.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:e(()=>[T]),_:1}),s(u,{onClick:o[16]||(o[16]=n=>t.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:e(()=>[U]),_:1})]),s(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:e(()=>[s(m,{schemas:t.schemas,ref:"formElRef",labelWidth:100,onSubmit:t.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Ao=B($,[["render",j]]);export{Ao as default};
