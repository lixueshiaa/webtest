import{a as h,u as g,b as w,c as y,e as v,f as k,o as a,i as b,j as e,k as m,A as L,l as c,m as T,n as t,p as s,q as p,t as x,r as _}from"./index.397c0bf9.js";import S from"./LoginForm.7e6c7470.js";import B from"./ForgetPasswordForm.8e570415.js";import $ from"./RegisterForm.c942000e.js";import A from"./MobileForm.e2f9dafa.js";import C from"./QrCodeForm.d4452fbf.js";import{u as D}from"./useLogin.c784427e.js";import"./LoginFormTitle.64a6c55e.js";import"./ThirdModal.92a7d102.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./useFormItem.3d0c36d5.js";import"./GithubFilled.78114c30.js";import"./WechatFilled.f50b02e8.js";import"./step1.897a8e3a.js";import"./step2.aeefc762.js";import"./index.4874795c.js";import"./step3.d19ea311.js";import"./index.6c34a041.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";var I="/webTest/nextboot/assets/login-box-bg.9027741f.svg";const N={class:"-enter-x xl:hidden"},V={class:"container relative h-full py-2 mx-auto sm:px-10"},P={class:"flex h-full"},j={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},q={class:"my-auto"},z=["alt"],E={class:"mt-10 font-medium text-white -enter-x"},G={class:"inline-block mt-4 text-3xl"},M={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},F={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},xt=h({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(i){const o=g(),{prefixCls:n}=w("login"),{t:r}=y(),d=v().getShowPicker,u=k(()=>{var l;return(l=o==null?void 0:o.title)!=null?l:""}),{handleBackLogin:f}=D();return f(),(l,J)=>(a(),b("div",{class:_([e(n),"relative w-full h-full px-4"])},[!i.sessionTimeout&&e(d)?(a(),m(e(L),{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):c("",!0),i.sessionTimeout?c("",!0):(a(),m(e(T),{key:1,class:"absolute top-3 right-7 enter-x"})),t("span",N,[s(e(p),{alwaysShowTitle:!0})]),t("div",V,[t("div",P,[t("div",j,[s(e(p),{class:"-enter-x"}),t("div",q,[t("img",{alt:e(u),src:I,class:"w-1/2 -mt-16 -enter-x"},null,8,z),t("div",E,[t("span",G,x(e(r)("sys.login.signInTitle")),1)]),t("div",M,x(e(r)("sys.login.signInDesc")),1)])]),t("div",F,[t("div",{class:_([`${e(n)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[s(S),s(B),s($),s(A),s(C)],2)])])])],2))}});export{xt as default};