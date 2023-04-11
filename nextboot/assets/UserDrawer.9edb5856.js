var O=Object.defineProperty,R=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var A=(s,o,r)=>o in s?O(s,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[o]=r,I=(s,o)=>{for(var r in o||(o={}))x.call(o,r)&&A(s,r,o[r]);if(D)for(var r of D(o))T.call(o,r)&&A(s,r,o[r]);return s},b=(s,o)=>R(s,j(o));var F=(s,o,r)=>new Promise((c,p)=>{var d=t=>{try{l(r.next(t))}catch(n){p(n)}},u=t=>{try{l(r.throw(t))}catch(n){p(n)}},l=t=>t.done?c(t.value):Promise.resolve(t.value).then(d,u);l((r=r.apply(s,o)).next())});import{B as C}from"./BasicForm.7ed18e1d.js";import"./componentMap.801737ea.js";import{u as L}from"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import{z as w,dX as P,aF as S,aj as $,a as z,eW as G,j as i,f as K,o as V,k as N,G as X,p as q,ad as H}from"./index.0c676cb0.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import{f as J}from"./user.data.f79da8df.js";import{a as M,B as Q}from"./index.082b5cba.js";import{a as Y,b as Z,s as ee}from"./user.api.dab2bc95.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./functional.51da07bc.js";import"./validator.fcbb93f1.js";const B={"<=565":"100%","<=1366":"800px","<=1600":"600px","<=1920":"600px",">1920":"500px"};function re(s=B,o=!0,r=50){const c=o?Object.assign({},B,s):s,p=Object.keys(c),d=w();function u(t){let n;for(const h of p)try{if(new Function(`return ${t} ${h}`)()){n=c[h];break}}catch(a){console.error(a)}n?d.value=n:console.warn("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u81EA\u9002\u5E94\u5BBD\u5EA6")}u(window.innerWidth);const{removeEvent:l}=P({el:window,name:"resize",listener:S(()=>u(window.innerWidth),r)});return $(()=>l()),{adaptiveWidth:d}}function oe(){return re({"<=620":"100%","<=1600":600,"<=1920":650,">1920":700},!1)}const Se=z({__name:"UserDrawer",emits:["success","register"],setup(s,{emit:o}){G();const r=w(!0),c=w(""),p=w([]),[d,{setProps:u,resetFields:l,setFieldsValue:t,validate:n,updateSchema:h}]=L({labelWidth:90,schemas:J,showActionButtonGroup:!1}),a=w(!0),[W,{setDrawerProps:v,closeDrawer:U}]=M(e=>F(this,null,function*(){var y;if(yield l(),a.value=(y=e==null?void 0:e.showFooter)!=null?y:!0,v({confirmLoading:!1,showFooter:a.value}),r.value=!!(e!=null&&e.isUpdate),i(r)){c.value=e.record.id,e.record.relTenantIds&&!Array.isArray(e.record.relTenantIds)?e.record.relTenantIds=e.record.relTenantIds.split(","):e.record.relTenantIds=[];try{const m=yield Y({userid:e.record.id});m&&m.length>0&&(e.record.selectedroles=m)}catch(m){}const f=yield Z({userId:e.record.id});if(f&&f.length>0){e.record.selecteddeparts=f;let m=Array.from(f,({key:g})=>g);e.record.selecteddeparts=m.join(","),p.value=f.map(g=>({label:g.title,value:g.key}))}e.record.departIds&&!Array.isArray(e.record.departIds)&&(e.record.departIds=e.record.departIds.split(",")),e.record.departIds=e.record.departIds==""?[]:e.record.departIds}e.selectedroles&&(yield t({selectedroles:e.selectedroles})),h([{field:"password",show:!i(r)},{field:"confirmPassword",ifShow:!i(r)},{field:"selectedroles",show:!e.isRole},{field:"departIds",componentProps:{options:p}},{field:"selecteddeparts",show:!(e!=null&&e.departDisabled)}]),typeof e.record=="object"&&t(I({},e.record)),u({disabled:e.action=="detail"})})),k=K(()=>i(r)?"\u7F16\u8F91\u7528\u6237":"\u65B0\u589E\u7528\u6237"),{adaptiveWidth:_}=oe();function E(){return F(this,null,function*(){try{let e=yield n();v({confirmLoading:!0}),e.userIdentity===1&&(e.departIds=""),yield ee(e,i(r)),U(),o("success",{isUpdate:i(r),values:b(I({},e),{id:c.value})})}finally{v({confirmLoading:!1})}})}return(e,y)=>(V(),N(i(Q),H(e.$attrs,{onRegister:i(W),title:i(k),width:i(_),onOk:E,showFooter:a.value,destroyOnClose:""}),{default:X(()=>[q(i(C),{onRegister:i(d)},null,8,["onRegister"])]),_:1},16,["onRegister","title","width","showFooter"]))}});export{Se as default};
