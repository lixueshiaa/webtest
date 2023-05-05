var f=(o,m,r)=>new Promise((c,t)=>{var d=e=>{try{s(r.next(e))}catch(i){t(i)}},a=e=>{try{s(r.throw(e))}catch(i){t(i)}},s=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,a);s((r=r.apply(o,m)).next())});import{a1 as y,a as w,b as $,y as F,f as _,bg as L,U as u,o as M,k as S,G as g,n as l,r as p,t as k,p as h,J as I,ad as b,c as R}from"./index.0c676cb0.js";import{B as N}from"./index.7aa87f83.js";import{B as U}from"./BasicForm.7ed18e1d.js";import"./componentMap.801737ea.js";import{u as P}from"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import{u as V}from"./lock.c07ea4e7.js";import{h as D}from"./header.d801b988.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./functional.51da07bc.js";const G=w({name:"LockModal",components:{BasicModal:N,BasicForm:U},setup(){const{t:o}=R(),{prefixCls:m}=$("header-lock-modal"),r=F(),c=V(),t=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realname}),[d,{closeModal:a}]=L(),[s,{validateFields:e,resetFields:i}]=P({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield e()).password;a(),c.setLockInfo({isLock:!0,pwd:C}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||D});return{t:o,prefixCls:m,getRealName:t,register:d,registerForm:s,handleLock:v,avatar:B}}}),q=["src"];function z(o,m,r,c,t,d){const a=u("BasicForm"),s=u("a-button"),e=u("BasicModal");return M(),S(e,b({footer:null,title:o.t("layout.header.lockScreen")},o.$attrs,{class:o.prefixCls,onRegister:o.register}),{default:g(()=>[l("div",{class:p(`${o.prefixCls}__entry`)},[l("div",{class:p(`${o.prefixCls}__header`)},[l("img",{src:o.avatar,class:p(`${o.prefixCls}__header-img`)},null,10,q),l("p",{class:p(`${o.prefixCls}__header-name`)},k(o.getRealName),3)],2),h(a,{onRegister:o.registerForm},null,8,["onRegister"]),l("div",{class:p(`${o.prefixCls}__footer`)},[h(s,{type:"primary",block:"",class:"mt-2",onClick:o.handleLock},{default:g(()=>[I(k(o.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Co=y(G,[["render",z]]);export{Co as default};