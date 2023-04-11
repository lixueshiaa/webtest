import{a1 as B,a as h,be as R,ef as w,eg as $,bj as d,z as C,U as n,o as _,k as y,G as a,p as u,ai as T,an as V,J as r}from"./index.0c676cb0.js";import"./index.7aa87f83.js";import k from"./Modal1.b1a34426.js";import D from"./Modal2.eaa4e939.js";import v from"./Modal3.482e5af5.js";import b from"./Modal4.d5f99d07.js";import{P}from"./index.7910eff5.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./BasicForm.7ed18e1d.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./componentMap.801737ea.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./RadioButtonGroup.dc9fedf3.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./JDictSelectTag.b196d7c6.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./JUpload.2c84d159.js";import"./functional.51da07bc.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./useForm.f6b94960.js";import"./useContentViewHeight.3c3f37af.js";const W=h({components:{Alert:R,Modal1:k,Modal2:D,Modal3:v,Modal4:b,PageWrapper:P,ASpace:w},setup(){const o=$(null),[e,{openModal:F}]=d(),[g,{openModal:M}]=d(),[f,{openModal:s}]=d(),[t,{openModal:l}]=d(),p=C(!1),m=C(null);function c(){l(!0,{data:"content",info:"Info"})}function A(){F(!0)}function E(i){switch(i){case 1:o.value=k;break;case 2:o.value=D;break;case 3:o.value=v;break;default:o.value=b;break}V(()=>{m.value={data:Math.random(),info:"Info222"},p.value=!0})}return{register1:e,openModal1:F,register2:g,openModal2:M,register3:f,openModal3:s,register4:t,openModal4:l,modalVisible:p,userData:m,openTargetModal:E,send:c,currentModal:o,openModalLoading:A}}}),I=r(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) "),L=r(" \u6253\u5F00\u5F39\u7A97"),N=r(" \u6253\u5F00\u5F39\u7A97"),S=r(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E"),U=r(" \u6253\u5F00\u5F39\u7A971"),j=r(" \u6253\u5F00\u5F39\u7A972"),z=r(" \u6253\u5F00\u5F39\u7A973"),G=r(" \u6253\u5F00\u5F39\u7A974");function H(o,e,F,g,M,f){const s=n("Alert"),t=n("a-button"),l=n("a-space"),p=n("Modal1"),m=n("Modal2"),c=n("Modal3"),A=n("Modal4"),E=n("PageWrapper");return _(),y(E,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:a(()=>[u(s,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable\r
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:a(()=>[I]),_:1},8,["onClick"]),u(s,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:a(()=>[L]),_:1},8,["onClick"]),u(s,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:a(()=>[N]),_:1},8,["onClick"]),u(s,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:a(()=>[S]),_:1},8,["onClick"]),u(s,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),u(l,null,{default:a(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=i=>o.openTargetModal(1))},{default:a(()=>[U]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=i=>o.openTargetModal(2))},{default:a(()=>[j]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=i=>o.openTargetModal(3))},{default:a(()=>[z]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=i=>o.openTargetModal(4))},{default:a(()=>[G]),_:1})]),_:1}),(_(),y(T(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=i=>o.modalVisible=i),userData:o.userData},null,40,["visible","userData"])),u(p,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(m,{onRegister:o.register2},null,8,["onRegister"]),u(c,{onRegister:o.register3},null,8,["onRegister"]),u(A,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}var Ro=B(W,[["render",H]]);export{Ro as default};
