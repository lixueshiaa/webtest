import{B}from"./BasicForm.3d2570da.js";import"./componentMap.b6eed178.js";import{u as c}from"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import{a1 as F,a as P,dS as b,U as i,o as E,k as v,G as t,n as a,p as s,T as k,J as n}from"./index.397c0bf9.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import{P as _}from"./index.a7c60aee.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./index.7ab28a2b.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./index.1ddf0867.js";import"./useFormItem.3d0c36d5.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./api.2a8d49a5.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./onMountedOrActivated.752d8da8.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./functional.540b215d.js";import"./useContentViewHeight.4e4c24ce.js";const m=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:e=>{console.log(e)}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"fieldTime",component:"RangePicker",label:"\u65F6\u95F4\u5B57\u6BB5",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],$=P({components:{BasicForm:B,CollapseContainer:b,PageWrapper:_},setup(){const{createMessage:e}=k(),[o,{setProps:r}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});return{register:o,schemas:m,handleSubmit:p=>{e.success("click search,values:"+JSON.stringify(p))},setProps:r}}}),A={class:"mb-4"},D=n(" \u66F4\u6539labelWidth "),g=n(" \u8FD8\u539FlabelWidth "),S=n(" \u66F4\u6539Size "),w=n(" \u8FD8\u539FSize "),T=n(" \u7981\u7528\u8868\u5355 "),W=n(" \u89E3\u9664\u7981\u7528 "),h=n(" \u7D27\u51D1\u8868\u5355 "),R=n(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),G=n(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),M={class:"mb-4"},N=n(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),O=n(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),z=n(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),Y=n(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),y=n(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),U=n(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),V=n(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),I=n(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ");function J(e,o,r,p,j,q){const u=i("a-button"),d=i("BasicForm"),f=i("CollapseContainer"),C=i("PageWrapper");return E(),v(C,{title:"UseForm\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[a("div",A,[s(u,{onClick:o[0]||(o[0]=l=>e.setProps({labelWidth:150})),class:"mr-2"},{default:t(()=>[D]),_:1}),s(u,{onClick:o[1]||(o[1]=l=>e.setProps({labelWidth:120})),class:"mr-2"},{default:t(()=>[g]),_:1}),s(u,{onClick:o[2]||(o[2]=l=>e.setProps({size:"large"})),class:"mr-2"},{default:t(()=>[S]),_:1}),s(u,{onClick:o[3]||(o[3]=l=>e.setProps({size:"default"})),class:"mr-2"},{default:t(()=>[w]),_:1}),s(u,{onClick:o[4]||(o[4]=l=>e.setProps({disabled:!0})),class:"mr-2"},{default:t(()=>[T]),_:1}),s(u,{onClick:o[5]||(o[5]=l=>e.setProps({disabled:!1})),class:"mr-2"},{default:t(()=>[W]),_:1}),s(u,{onClick:o[6]||(o[6]=l=>e.setProps({compact:!0})),class:"mr-2"},{default:t(()=>[h]),_:1}),s(u,{onClick:o[7]||(o[7]=l=>e.setProps({compact:!1})),class:"mr-2"},{default:t(()=>[R]),_:1}),s(u,{onClick:o[8]||(o[8]=l=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:t(()=>[G]),_:1})]),a("div",M,[s(u,{onClick:o[9]||(o[9]=l=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:t(()=>[N]),_:1}),s(u,{onClick:o[10]||(o[10]=l=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:t(()=>[O]),_:1}),s(u,{onClick:o[11]||(o[11]=l=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:t(()=>[z]),_:1}),s(u,{onClick:o[12]||(o[12]=l=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:t(()=>[Y]),_:1}),s(u,{onClick:o[13]||(o[13]=l=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:t(()=>[y]),_:1}),s(u,{onClick:o[14]||(o[14]=l=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:t(()=>[U]),_:1}),s(u,{onClick:o[15]||(o[15]=l=>e.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:t(()=>[V]),_:1}),s(u,{onClick:o[16]||(o[16]=l=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:t(()=>[I]),_:1})]),s(f,{title:"useForm\u793A\u4F8B"},{default:t(()=>[s(d,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var go=F($,[["render",J]]);export{go as default};