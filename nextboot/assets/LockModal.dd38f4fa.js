var f=(o,m,r)=>new Promise((c,t)=>{var d=e=>{try{s(r.next(e))}catch(i){t(i)}},a=e=>{try{s(r.throw(e))}catch(i){t(i)}},s=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,a);s((r=r.apply(o,m)).next())});import{a1 as y,a as w,b as $,y as F,f as _,bg as L,U as u,o as M,k as S,G as g,n as l,r as p,t as k,p as h,J as I,ad as b,c as R}from"./index.6cf4d174.js";import{B as N}from"./index.f8f2ddf0.js";import{B as U}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{u as P}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import{u as V}from"./lock.4d4ef288.js";import{h as D}from"./header.d801b988.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";const G=w({name:"LockModal",components:{BasicModal:N,BasicForm:U},setup(){const{t:o}=R(),{prefixCls:m}=$("header-lock-modal"),r=F(),c=V(),t=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realname}),[d,{closeModal:a}]=L(),[s,{validateFields:e,resetFields:i}]=P({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield e()).password;a(),c.setLockInfo({isLock:!0,pwd:C}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||D});return{t:o,prefixCls:m,getRealName:t,register:d,registerForm:s,handleLock:v,avatar:B}}}),q=["src"];function z(o,m,r,c,t,d){const a=u("BasicForm"),s=u("a-button"),e=u("BasicModal");return M(),S(e,b({footer:null,title:o.t("layout.header.lockScreen")},o.$attrs,{class:o.prefixCls,onRegister:o.register}),{default:g(()=>[l("div",{class:p(`${o.prefixCls}__entry`)},[l("div",{class:p(`${o.prefixCls}__header`)},[l("img",{src:o.avatar,class:p(`${o.prefixCls}__header-img`)},null,10,q),l("p",{class:p(`${o.prefixCls}__header-name`)},k(o.getRealName),3)],2),h(a,{onRegister:o.registerForm},null,8,["onRegister"]),l("div",{class:p(`${o.prefixCls}__footer`)},[h(s,{type:"primary",block:"",class:"mt-2",onClick:o.handleLock},{default:g(()=>[I(k(o.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Co=y(G,[["render",z]]);export{Co as default};