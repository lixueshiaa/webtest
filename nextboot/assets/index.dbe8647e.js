import{a1 as k,a as B,bl as d,bm as f,cx as L,fT as y,b as v,f as S,U as o,o as r,i as D,p as P,k as m,l as p,r as w,N as C,j as n,dm as T}from"./index.0c676cb0.js";import{u as x}from"./index.ff9cad37.js";import E from"./SessionTimeoutLogin.8bcdf3d4.js";import{B as I}from"./index.e3094170.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./LoginSelect.114bd104.js";import"./index.7aa87f83.js";import"./index.093e39c9.js";import"./index.fc625b76.js";import"./useContentViewHeight.3c3f37af.js";import"./useSortable.29b10662.js";import"./lock.c07ea4e7.js";import"./Login.7ba0274a.js";import"./LoginForm.8116e0bf.js";import"./LoginFormTitle.04757a0c.js";import"./useLogin.6fcc4b16.js";import"./ThirdModal.bbe9906d.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./useFormItem.47fc2179.js";import"./GithubFilled.d380bce1.js";import"./WechatFilled.2478bcae.js";import"./ForgetPasswordForm.81033871.js";import"./step1.2b56263d.js";import"./step2.76739e1d.js";import"./index.b5b26116.js";import"./step3.df709cea.js";import"./RegisterForm.e87316d0.js";import"./MobileForm.bdaa3d0b.js";import"./QrCodeForm.a350db01.js";import"./index.73480120.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";const F=B({name:"LayoutFeatures",components:{BackTop:I,LayoutLockPage:d(()=>f(()=>import("./index.825dedd5.js"),["assets/index.825dedd5.js","assets/index.0c676cb0.js","assets/index.e4e4276c.css","assets/LockPage.6df7c3c6.js","assets/LockPage.3bb4443b.css","assets/lock.c07ea4e7.js","assets/header.d801b988.js","assets/LockOutlined.99391315.js"])),SettingDrawer:d(()=>f(()=>import("./index.b22f827e.js").then(function(t){return t.i}),["assets/index.b22f827e.js","assets/index.082b5cba.js","assets/index.a8aed5d1.css","assets/index.0c676cb0.js","assets/index.e4e4276c.css","assets/index.ff9cad37.js","assets/index.9fdbc348.css","assets/BasicModal.6a1e781a.js","assets/BasicModal.775d7efe.css","assets/useWindowSizeFn.f69fad46.js","assets/LoginSelect.114bd104.js","assets/LoginSelect.422c94b1.css","assets/index.7aa87f83.js","assets/index.2c969e9f.css","assets/index.093e39c9.js","assets/index.ee68660b.css","assets/index.fc625b76.js","assets/index.6cce9c65.css","assets/useContentViewHeight.3c3f37af.js","assets/useSortable.29b10662.js","assets/lock.c07ea4e7.js"])),SessionTimeoutLogin:E},setup(){const{getUseOpenBackTop:t,getShowSettingButton:u,getSettingButtonPosition:c,getFullContent:g}=L(),_=y(),{prefixCls:l}=v("setting-drawer-fearure"),{getShowHeader:i}=x(),s=S(()=>_.getSessionTimeout),a=S(()=>{if(!n(u))return!1;const e=n(c);return e===T.AUTO?!n(i)||n(g):e===T.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:a,prefixCls:l,getIsSessionTimeout:s}}});function O(t,u,c,g,_,l){const i=o("LayoutLockPage"),s=o("BackTop"),a=o("SettingDrawer"),e=o("SessionTimeoutLogin");return r(),D(C,null,[P(i),t.getUseOpenBackTop?(r(),m(s,{key:0,target:t.getTarget},null,8,["target"])):p("",!0),t.getIsFixedSettingDrawer?(r(),m(a,{key:1,class:w(t.prefixCls)},null,8,["class"])):p("",!0),t.getIsSessionTimeout?(r(),m(e,{key:2})):p("",!0)],64)}var _t=k(F,[["render",O]]);export{_t as default};