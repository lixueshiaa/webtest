import{a1 as _,a as C,U as t,o as f,k as A,G as n,be as g,b9 as B,y as D,eO as r,f as l,p as o,n as a,t as p,J as s}from"./index.0c676cb0.js";import R from"./CurrentPermissionMode.ca377e82.js";import{P as y}from"./index.7910eff5.js";import"./onMountedOrActivated.29514295.js";import"./useWindowSizeFn.f69fad46.js";import"./useContentViewHeight.3c3f37af.js";const S=C({components:{Alert:g,CurrentPermissionMode:R,PageWrapper:y},setup(){const{changeRole:u}=B(),e=D();return{userStore:e,RoleEnum:r,isSuper:l(()=>e.getRoleList.includes(r.SUPER)),isTest:l(()=>e.getRoleList.includes(r.TEST)),changeRole:u}}}),P=s(" \u5F53\u524D\u89D2\u8272: "),v={class:"mt-4"},T=s(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): ");function b(u,e,k,$,h,U){const E=t("CurrentPermissionMode"),F=t("Alert"),i=t("a-button"),d=t("a-button-group"),m=t("PageWrapper");return f(),A(m,{title:"\u524D\u7AEF\u6743\u9650\u793A\u4F8B",contentBackground:"",contentClass:"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:n(()=>[o(E),a("p",null,[P,a("a",null,p(u.userStore.getRoleList),1)]),o(F,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316","show-icon":""}),a("div",v,[T,o(d,null,{default:n(()=>[o(i,{onClick:e[0]||(e[0]=c=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:n(()=>[s(p(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),o(i,{onClick:e[1]||(e[1]=c=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:n(()=>[s(p(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}var G=_(S,[["render",b],["__scopeId","data-v-024b4668"]]);export{G as default};
