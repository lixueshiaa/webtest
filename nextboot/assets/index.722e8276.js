var d=(o,s,e)=>new Promise((n,r)=>{var a=t=>{try{u(e.next(t))}catch(p){r(p)}},i=t=>{try{u(e.throw(t))}catch(p){r(p)}},u=t=>t.done?n(t.value):Promise.resolve(t.value).then(a,i);u((e=e.apply(o,s)).next())});import{P as B}from"./index.28df25ce.js";import{B as F}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{u as h}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import{a1 as w,a as C,U as m,o as E,k as g,G as c,n as f,p as l,J as _}from"./index.6cf4d174.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./onMountedOrActivated.c1705977.js";import"./useWindowSizeFn.99e468e7.js";import"./useContentViewHeight.183e9878.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";const P=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:o})=>[{required:!0,validator:(s,e)=>e?e!==o.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A")}]}],A=C({name:"ChangePassword",components:{BasicForm:F,PageWrapper:B},setup(){const[o,{validate:s,resetFields:e}]=h({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:P});function n(){return d(this,null,function*(){try{const r=yield s(),{passwordOld:a,passwordNew:i}=r;console.log(a,i)}catch(r){}})}return{register:o,resetFields:e,handleSubmit:n}}}),b={class:"py-8 bg-white flex flex-col justify-center items-center"},y={class:"flex justify-center"},k=_(" \u91CD\u7F6E "),v=_(" \u786E\u8BA4 ");function D(o,s,e,n,r,a){const i=m("BasicForm"),u=m("a-button"),t=m("PageWrapper");return E(),g(t,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[f("div",b,[l(i,{onRegister:o.register},null,8,["onRegister"]),f("div",y,[l(u,{onClick:o.resetFields},{default:c(()=>[k]),_:1},8,["onClick"]),l(u,{class:"!ml-4",type:"primary",onClick:o.handleSubmit},{default:c(()=>[v]),_:1},8,["onClick"])])])]),_:1})}var me=w(A,[["render",D]]);export{me as default};
