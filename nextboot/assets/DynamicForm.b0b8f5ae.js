var B=(e,t,l)=>new Promise((r,p)=>{var c=o=>{try{n(l.next(o))}catch(i){p(i)}},u=o=>{try{n(l.throw(o))}catch(i){p(i)}},n=o=>o.done?r(o.value):Promise.resolve(o.value).then(c,u);n((l=l.apply(e,t)).next())});import{B as h}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as f}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a1 as C,b9 as F,a as _,dS as P,U as d,o as g,k,G as s,n as w,p as a,J as m}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{P as A}from"./index.dbf0b2ba.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";import"./useContentViewHeight.6a091f7f.js";const{hasPermission:W}=F(),b=[{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",defaultValue:!0,colProps:{span:12},labelWidth:200},{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},show:({values:e})=>W("test001")},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",defaultValue:!0,colProps:{span:12},labelWidth:200},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12},ifShow:({values:e})=>!!e.field6},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:12},labelWidth:200},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:12},dynamicDisabled:({values:e})=>!!e.field7},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:12},labelWidth:200},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:12},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}}],S=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:t=>{e.f2=t.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:()=>B(void 0,null,function*(){const{validate:t}=e,l=yield t();console.log(l)})})}],v=_({components:{BasicForm:h,CollapseContainer:P,PageWrapper:A},setup(){const[e,{setProps:t,updateSchema:l,appendSchemaByField:r,removeSchemaByFiled:p}]=f({labelWidth:120,schemas:b,disabled:!0,labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}},actionColOptions:{span:24}}),[c]=f({labelWidth:120,schemas:S,actionColOptions:{span:24}});function u(){l({field:"field3",label:"\u5B57\u6BB53 New"})}function n(){l([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function o(){r({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function i(){p("field11")}return{register:e,register1:c,schemas:b,setProps:t,changeLabel3:u,changeLabel34:n,appendField:o,deleteField:i}}}),D={class:"mb-4"},E=m(" \u66F4\u6539\u5B57\u6BB53label "),y=m(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),I=m(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),N=m(" \u5220\u9664\u5B57\u6BB511 ");function R(e,t,l,r,p,c){const u=d("a-button"),n=d("BasicForm"),o=d("CollapseContainer"),i=d("PageWrapper");return g(),k(i,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:s(()=>[w("div",D,[a(u,{onClick:e.changeLabel3,class:"mr-2"},{default:s(()=>[E]),_:1},8,["onClick"]),a(u,{onClick:e.changeLabel34,class:"mr-2"},{default:s(()=>[y]),_:1},8,["onClick"]),a(u,{onClick:e.appendField,class:"mr-2"},{default:s(()=>[I]),_:1},8,["onClick"]),a(u,{onClick:e.deleteField,class:"mr-2"},{default:s(()=>[N]),_:1},8,["onClick"])]),a(o,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:s(()=>[a(n,{onRegister:e.register},null,8,["onRegister"])]),_:1}),a(o,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:s(()=>[a(n,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}var fe=C(v,[["render",R]]);export{fe as default};