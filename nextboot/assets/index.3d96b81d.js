var I=(e,l,n)=>new Promise((d,s)=>{var p=o=>{try{r(n.next(o))}catch(c){s(c)}},t=o=>{try{r(n.throw(o))}catch(c){s(c)}},r=o=>o.done?d(o.value):Promise.resolve(o.value).then(p,t);r((n=n.apply(e,l)).next())});import{a1 as T,a as O,cH as V,cI as A,bl as f,bm as _,a6 as N,b as H,y as q,cU as z,f as S,bj as G,z as U,U as i,o as v,i as j,p as a,G as y,k as b,l as M,n as h,r as g,t as K,N as W,c as Y,bo as J,ao as Q,fE as X,bv as Z,fF as L,T as ee}from"./index.d537950e.js";import{S as te}from"./siteSetting.967dfbc9.js";import{u as oe}from"./index.b83295ce.js";import"./index.991a4e0a.js";import{h as ae}from"./header.d801b988.js";import{r as ne,q as se}from"./dict.api.1ef4c31b.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./LoginSelect.9906b54e.js";import"./index.bde3f62c.js";import"./index.35b341a9.js";import"./useContentViewHeight.6a091f7f.js";import"./useSortable.23555d6d.js";import"./lock.ae8365dd.js";const{createMessage:P}=ee(),re=O({name:"UserDropdown",components:{Dropdown:V,Menu:A,MenuItem:f(()=>_(()=>import("./DropMenuItem.a6228997.js"),["assets/DropMenuItem.a6228997.js","assets/index.d537950e.js","assets/index.e4e4276c.css"])),MenuDivider:A.Divider,LockAction:f(()=>_(()=>import("./LockModal.d680cca6.js"),["assets/LockModal.d680cca6.js","assets/LockModal.db0fe75f.css","assets/index.d537950e.js","assets/index.e4e4276c.css","assets/index.991a4e0a.js","assets/index.2c969e9f.css","assets/BasicModal.5a168f1c.js","assets/BasicModal.775d7efe.css","assets/useWindowSizeFn.5f6046fd.js","assets/BasicForm.b84ad685.js","assets/BasicForm.42f73ad8.css","assets/FormItem.vue_vue_type_script_lang.eed5af36.js","assets/componentMap.93bd7e90.js","assets/componentMap.76136115.css","assets/index.52558c64.js","assets/index.9a4d3b51.css","assets/useFormItem.6ac1e6ce.js","assets/RadioButtonGroup.7ea12308.js","assets/download.bf76ecd3.js","assets/base64Conver.bb012c73.js","assets/index.41c7be8d.js","assets/index.6fe84da6.css","assets/index.9904d595.js","assets/index.950cae9e.css","assets/useCountdown.ad6c5821.js","assets/api.c50f6281.js","assets/props.1eba571b.js","assets/JDictSelectTag.189304ea.js","assets/Tree.vue_vue_type_style_index_0_lang.b76a1360.js","assets/Tree.vue_vue_type_style_index_0_lang.ea025f42.css","assets/useContextMenu.7a70fb68.js","assets/useContextMenu.e7cbf068.css","assets/index.29969b1b.js","assets/index.f10e77f4.css","assets/onMountedOrActivated.b07d3039.js","assets/index.763820e1.js","assets/index.55268b91.css","assets/htmlmixed.285f9f73.js","assets/vue.80a2a3b3.js","assets/vue.a361089e.css","assets/depart.api.c3d5b637.js","assets/JUpload.864c8b30.js","assets/JUpload.ceae85a6.css","assets/functional.f108e49e.js","assets/functional.510339d1.css","assets/index.64f1a493.js","assets/EditOutlined.6870e476.js","assets/useForm.41e2e211.js","assets/lock.ae8365dd.js","assets/header.d801b988.js"])),DepartSelect:f(()=>_(()=>import("./DepartSelect.41058294.js"),["assets/DepartSelect.41058294.js","assets/DepartSelect.f21cc366.css","assets/index.991a4e0a.js","assets/index.2c969e9f.css","assets/index.d537950e.js","assets/index.e4e4276c.css","assets/BasicModal.5a168f1c.js","assets/BasicModal.775d7efe.css","assets/useWindowSizeFn.5f6046fd.js","assets/depart.api.c3d5b637.js","assets/tenant.api.86c0b738.js"])),UpdatePassword:f(()=>_(()=>import("./UpdatePassword.4847530e.js"),["assets/UpdatePassword.4847530e.js","assets/validator.aea6ab50.js","assets/index.d537950e.js","assets/index.e4e4276c.css","assets/user.api.dbd21046.js","assets/index.991a4e0a.js","assets/index.2c969e9f.css","assets/BasicModal.5a168f1c.js","assets/BasicModal.775d7efe.css","assets/useWindowSizeFn.5f6046fd.js","assets/BasicForm.b84ad685.js","assets/BasicForm.42f73ad8.css","assets/FormItem.vue_vue_type_script_lang.eed5af36.js","assets/componentMap.93bd7e90.js","assets/componentMap.76136115.css","assets/index.52558c64.js","assets/index.9a4d3b51.css","assets/useFormItem.6ac1e6ce.js","assets/RadioButtonGroup.7ea12308.js","assets/download.bf76ecd3.js","assets/base64Conver.bb012c73.js","assets/index.41c7be8d.js","assets/index.6fe84da6.css","assets/index.9904d595.js","assets/index.950cae9e.css","assets/useCountdown.ad6c5821.js","assets/api.c50f6281.js","assets/props.1eba571b.js","assets/JDictSelectTag.189304ea.js","assets/Tree.vue_vue_type_style_index_0_lang.b76a1360.js","assets/Tree.vue_vue_type_style_index_0_lang.ea025f42.css","assets/useContextMenu.7a70fb68.js","assets/useContextMenu.e7cbf068.css","assets/index.29969b1b.js","assets/index.f10e77f4.css","assets/onMountedOrActivated.b07d3039.js","assets/index.763820e1.js","assets/index.55268b91.css","assets/htmlmixed.285f9f73.js","assets/vue.80a2a3b3.js","assets/vue.a361089e.css","assets/depart.api.c3d5b637.js","assets/JUpload.864c8b30.js","assets/JUpload.ceae85a6.css","assets/functional.f108e49e.js","assets/functional.510339d1.css","assets/index.64f1a493.js","assets/EditOutlined.6870e476.js","assets/useForm.41e2e211.js"]))},props:{theme:N.oneOf(["dark","light"])},setup(){const{prefixCls:e}=H("header-user-dropdown"),{t:l}=Y(),{getShowDoc:n,getUseLockPage:d}=oe(),s=q(),p=z(),t=S(()=>{const{realname:u="",avatar:D,desc:F}=s.getUserInfo||{};return{realname:u,avatar:D||ae,desc:F}}),r=S(()=>{var u;return J((u=t.value)==null?void 0:u.avatar)}),[o,{openModal:c}]=G(),m=U();function w(){c(!0)}function k(){s.confirmLoginOut()}function E(){Q(te)}function R(){return I(this,null,function*(){if((yield ne()).success){const D=yield se();X(L),Z(L,D.result),P.success("\u5237\u65B0\u7F13\u5B58\u5B8C\u6210\uFF01")}else P.error("\u5237\u65B0\u7F13\u5B58\u5931\u8D25\uFF01")})}function B(){m.value.show()}const C=U();function $(){C.value.show(s.getUserInfo.username)}function x(u){switch(u.key){case"logout":k();break;case"doc":E();break;case"lock":w();break;case"cache":R();break;case"depart":B();break;case"password":$();break;case"account":p("/page-demo/account/setting");break}}return{prefixCls:e,t:l,getUserInfo:t,getAvatarUrl:r,handleMenuClick:x,getShowDoc:n,register:o,getUseLockPage:d,loginSelectRef:m,updatePasswordRef:C}}}),ce=["src"];function ue(e,l,n,d,s,p){const t=i("MenuItem"),r=i("MenuDivider"),o=i("Menu"),c=i("Dropdown"),m=i("LockAction"),w=i("DepartSelect"),k=i("UpdatePassword");return v(),j(W,null,[a(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:y(()=>[a(o,{onClick:e.handleMenuClick},{default:y(()=>[e.getShowDoc?(v(),b(t,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):M("",!0),e.getShowDoc?(v(),b(r,{key:1})):M("",!0),a(t,{key:"account",text:e.t("layout.header.dropdownItemSwitchAccount"),icon:"ant-design:setting-outlined"},null,8,["text"]),a(t,{key:"password",text:e.t("layout.header.dropdownItemSwitchPassword"),icon:"ant-design:edit-outlined"},null,8,["text"]),a(t,{key:"depart",text:e.t("layout.header.dropdownItemSwitchDepart"),icon:"ant-design:cluster-outlined"},null,8,["text"]),a(t,{key:"cache",text:e.t("layout.header.dropdownItemRefreshCache"),icon:"ion:sync-outline"},null,8,["text"]),a(t,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:y(()=>[h("span",{class:g([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[h("img",{class:g(`${e.prefixCls}__header`),src:e.getAvatarUrl},null,10,ce),h("span",{class:g(`${e.prefixCls}__info hidden md:block`)},[h("span",{class:g([`${e.prefixCls}__name  `,"truncate"])},K(e.getUserInfo.realname),3)],2)],2)]),_:1},8,["overlayClassName"]),a(m,{onRegister:e.register},null,8,["onRegister"]),a(w,{ref:"loginSelectRef"},null,512),a(k,{ref:"updatePasswordRef"},null,512)],64)}var Ie=T(re,[["render",ue]]);export{Ie as default};