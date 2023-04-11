var f=(o,m,r)=>new Promise((c,t)=>{var d=e=>{try{s(r.next(e))}catch(i){t(i)}},a=e=>{try{s(r.throw(e))}catch(i){t(i)}},s=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,a);s((r=r.apply(o,m)).next())});import{a1 as y,a as w,b as $,y as F,f as _,bg as L,U as u,o as M,k as S,G as g,n as l,r as p,t as k,p as h,J as I,ad as b,c as R}from"./index.397c0bf9.js";import{B as N}from"./index.7ab28a2b.js";import{B as U}from"./BasicForm.3d2570da.js";import"./componentMap.b6eed178.js";import{u as P}from"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import{u as V}from"./lock.b3a0b3ea.js";import{h as D}from"./header.d801b988.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./index.1ddf0867.js";import"./useFormItem.3d0c36d5.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./api.2a8d49a5.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./onMountedOrActivated.752d8da8.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./functional.540b215d.js";const G=w({name:"LockModal",components:{BasicModal:N,BasicForm:U},setup(){const{t:o}=R(),{prefixCls:m}=$("header-lock-modal"),r=F(),c=V(),t=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realname}),[d,{closeModal:a}]=L(),[s,{validateFields:e,resetFields:i}]=P({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield e()).password;a(),c.setLockInfo({isLock:!0,pwd:C}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||D});return{t:o,prefixCls:m,getRealName:t,register:d,registerForm:s,handleLock:v,avatar:B}}}),q=["src"];function z(o,m,r,c,t,d){const a=u("BasicForm"),s=u("a-button"),e=u("BasicModal");return M(),S(e,b({footer:null,title:o.t("layout.header.lockScreen")},o.$attrs,{class:o.prefixCls,onRegister:o.register}),{default:g(()=>[l("div",{class:p(`${o.prefixCls}__entry`)},[l("div",{class:p(`${o.prefixCls}__header`)},[l("img",{src:o.avatar,class:p(`${o.prefixCls}__header-img`)},null,10,q),l("p",{class:p(`${o.prefixCls}__header-name`)},k(o.getRealName),3)],2),h(a,{onRegister:o.registerForm},null,8,["onRegister"]),l("div",{class:p(`${o.prefixCls}__footer`)},[h(s,{type:"primary",block:"",class:"mt-2",onClick:o.handleLock},{default:g(()=>[I(k(o.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Co=y(G,[["render",z]]);export{Co as default};
