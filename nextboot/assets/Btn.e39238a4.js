import{a1 as S,a as B,U as n,c7 as v,o as r,k as a,G as e,be as P,L as T,b9 as g,y as U,eO as p,f,p as s,n as F,t as c,J as o,l as _,D as C}from"./index.9eb451d3.js";import b from"./CurrentPermissionMode.a18eb185.js";import{A as k}from"./index.f5f55f63.js";import{P as $}from"./index.83e82d5a.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useWindowSizeFn.ed181042.js";import"./useContentViewHeight.0d594355.js";const L=B({components:{Alert:P,PageWrapper:$,CurrentPermissionMode:b,Divider:T,Authority:k},setup(){const{changeRole:u,hasPermission:l}=g(),E=U();return{userStore:E,RoleEnum:p,isSuper:f(()=>E.getRoleList.includes(p.SUPER)),isTest:f(()=>E.getRoleList.includes(p.TEST)),changeRole:u,hasPermission:l}}}),N=o(" \u5F53\u524D\u89D2\u8272: "),V={class:"mt-4"},w=o(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): "),M=o("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u6709\u9700\u8981\u53EF\u4EE5\u81EA\u884C\u5168\u5C40\u6CE8\u518C)"),W=o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),G=o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),I=o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),J=o("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u9002\u7528\u4E8E\u51FD\u6570\u5185\u90E8\u8FC7\u6EE4)"),O=o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),j=o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),q=o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),z=o("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)"),H=o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),K=o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),Q=o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");function X(u,l,E,Y,Z,x){const D=n("CurrentPermissionMode"),R=n("Alert"),t=n("a-button"),h=n("a-button-group"),i=n("Divider"),m=n("Authority"),A=n("PageWrapper"),d=v("auth");return r(),a(A,{title:"\u524D\u7AEF\u6743\u9650\u6309\u94AE\u793A\u4F8B",contentBackground:"",contentClass:"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:e(()=>[s(D),F("p",null,[N,F("a",null,c(u.userStore.getRoleList),1)]),s(R,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316","show-icon":""}),F("div",V,[w,s(h,null,{default:e(()=>[s(t,{onClick:l[0]||(l[0]=y=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:e(()=>[o(c(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),s(t,{onClick:l[1]||(l[1]=y=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:e(()=>[o(c(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),s(i,null,{default:e(()=>[M]),_:1}),s(m,{value:u.RoleEnum.SUPER},{default:e(()=>[s(t,{type:"primary",class:"mx-4"},{default:e(()=>[W]),_:1})]),_:1},8,["value"]),s(m,{value:u.RoleEnum.TEST},{default:e(()=>[s(t,{color:"success",class:"mx-4"},{default:e(()=>[G]),_:1})]),_:1},8,["value"]),s(m,{value:[u.RoleEnum.TEST,u.RoleEnum.SUPER]},{default:e(()=>[s(t,{color:"error",class:"mx-4"},{default:e(()=>[I]),_:1})]),_:1},8,["value"]),s(i,null,{default:e(()=>[J]),_:1}),u.hasPermission(u.RoleEnum.SUPER)?(r(),a(t,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[O]),_:1})):_("",!0),u.hasPermission(u.RoleEnum.TEST)?(r(),a(t,{key:1,color:"success",class:"mx-4"},{default:e(()=>[j]),_:1})):_("",!0),u.hasPermission([u.RoleEnum.TEST,u.RoleEnum.SUPER])?(r(),a(t,{key:2,color:"error",class:"mx-4"},{default:e(()=>[q]),_:1})):_("",!0),s(i,null,{default:e(()=>[z]),_:1}),C((r(),a(t,{type:"primary",class:"mx-4"},{default:e(()=>[H]),_:1})),[[d,u.RoleEnum.SUPER]]),C((r(),a(t,{color:"success",class:"mx-4"},{default:e(()=>[K]),_:1})),[[d,u.RoleEnum.TEST]]),C((r(),a(t,{color:"error",class:"mx-4"},{default:e(()=>[Q]),_:1})),[[d,[u.RoleEnum.TEST,u.RoleEnum.SUPER]]])]),_:1})}var au=S(L,[["render",X],["__scopeId","data-v-4b3babb8"]]);export{au as default};
