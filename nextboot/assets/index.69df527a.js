import{a1 as k,a as B,bl as d,bm as f,cx as L,fT as y,b as v,f as S,U as o,o as r,i as D,p as P,k as m,l as p,r as w,N as C,j as n,dm as T}from"./index.397c0bf9.js";import{u as x}from"./index.dd3758f0.js";import E from"./SessionTimeoutLogin.f89aee6d.js";import{B as I}from"./index.e5285d82.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./LoginSelect.b81218db.js";import"./index.7ab28a2b.js";import"./index.1e74647f.js";import"./index.46e051dd.js";import"./useContentViewHeight.4e4c24ce.js";import"./useSortable.e015d2cb.js";import"./lock.b3a0b3ea.js";import"./Login.4a98158d.js";import"./LoginForm.7e6c7470.js";import"./LoginFormTitle.64a6c55e.js";import"./useLogin.c784427e.js";import"./ThirdModal.92a7d102.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./useFormItem.3d0c36d5.js";import"./GithubFilled.78114c30.js";import"./WechatFilled.f50b02e8.js";import"./ForgetPasswordForm.8e570415.js";import"./step1.897a8e3a.js";import"./step2.aeefc762.js";import"./index.4874795c.js";import"./step3.d19ea311.js";import"./RegisterForm.c942000e.js";import"./MobileForm.e2f9dafa.js";import"./QrCodeForm.d4452fbf.js";import"./index.6c34a041.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";const F=B({name:"LayoutFeatures",components:{BackTop:I,LayoutLockPage:d(()=>f(()=>import("./index.a9b89c28.js"),["assets/index.a9b89c28.js","assets/index.397c0bf9.js","assets/index.e4e4276c.css","assets/LockPage.417d4942.js","assets/LockPage.3bb4443b.css","assets/lock.b3a0b3ea.js","assets/header.d801b988.js","assets/LockOutlined.651f5991.js"])),SettingDrawer:d(()=>f(()=>import("./index.ceaa281a.js").then(function(t){return t.i}),["assets/index.ceaa281a.js","assets/index.02fb30c3.js","assets/index.a8aed5d1.css","assets/index.397c0bf9.js","assets/index.e4e4276c.css","assets/index.dd3758f0.js","assets/index.9fdbc348.css","assets/BasicModal.1ff6964e.js","assets/BasicModal.775d7efe.css","assets/useWindowSizeFn.830b179a.js","assets/LoginSelect.b81218db.js","assets/LoginSelect.422c94b1.css","assets/index.7ab28a2b.js","assets/index.2c969e9f.css","assets/index.1e74647f.js","assets/index.ee68660b.css","assets/index.46e051dd.js","assets/index.6cce9c65.css","assets/useContentViewHeight.4e4c24ce.js","assets/useSortable.e015d2cb.js","assets/lock.b3a0b3ea.js"])),SessionTimeoutLogin:E},setup(){const{getUseOpenBackTop:t,getShowSettingButton:u,getSettingButtonPosition:c,getFullContent:g}=L(),_=y(),{prefixCls:l}=v("setting-drawer-fearure"),{getShowHeader:i}=x(),s=S(()=>_.getSessionTimeout),a=S(()=>{if(!n(u))return!1;const e=n(c);return e===T.AUTO?!n(i)||n(g):e===T.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:a,prefixCls:l,getIsSessionTimeout:s}}});function O(t,u,c,g,_,l){const i=o("LayoutLockPage"),s=o("BackTop"),a=o("SettingDrawer"),e=o("SessionTimeoutLogin");return r(),D(C,null,[P(i),t.getUseOpenBackTop?(r(),m(s,{key:0,target:t.getTarget},null,8,["target"])):p("",!0),t.getIsFixedSettingDrawer?(r(),m(a,{key:1,class:w(t.prefixCls)},null,8,["class"])):p("",!0),t.getIsSessionTimeout?(r(),m(e,{key:2})):p("",!0)],64)}var _t=k(F,[["render",O]]);export{_t as default};