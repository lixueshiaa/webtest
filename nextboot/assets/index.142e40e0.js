import{a1 as m,a as C,I as E,bw as B,z as D,f,j as a,U as s,o as h,k as A,G as l,J as o,t as k,p,n as e}from"./index.397c0bf9.js";import{P as v}from"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useWindowSizeFn.830b179a.js";import"./useContentViewHeight.4e4c24ce.js";const b=C({name:"TestMenu",components:{PageWrapper:v,Input:E},setup(){const{currentRoute:u,replace:t}=B(),n=D("");return{value:n,handleClickGo:()=>{const{name:r}=a(u);t({name:r,params:{id:a(n)}})},params:f(()=>a(u).params)}}}),g=e("br",null,null,-1),G=o(" \u8F93\u5165\u53C2\u6570\u5207\u6362\u8DEF\u7531\uFF1A "),I=o("\u5207\u6362\u8DEF\u7531"),P=e("br",null,null,-1),$=o(" \u5207\u6362\u8DEF\u7531\u540E "),y=e("ul",null,[e("li",null,"\u53EF\u5237\u65B0\u9875\u9762\u6D4B\u8BD5\u8DEF\u7531\u53C2\u6570\u60C5\u51B5\u662F\u5426\u6B63\u5E38\u3002"),e("li",null,"\u53EF\u4E8E\u5DE6\u4FA7\u83DC\u5355\u4E2D\u5C55\u5F00\u5B50\u83DC\u5355\uFF0C\u70B9\u51FB\u6D4B\u8BD5\u53C2\u6570\u662F\u5426\u643A\u5E26\u6B63\u5E38\u3002")],-1);function N(u,t,n,c,r,V){const F=s("Input"),i=s("a-button"),d=s("PageWrapper");return h(),A(d,{title:"\u5E26\u53C2\u6570\u83DC\u5355\uFF08\u8DEF\u7531\uFF09",content:"\u652F\u6301\u591A\u7EA7\u53C2\u6570"},{default:l(()=>[o(" \u5F53\u524D\u53C2\u6570\uFF1A"+k(u.params)+" ",1),g,G,p(F,{value:u.value,"onUpdate:value":t[0]||(t[0]=_=>u.value=_),placeholder:"\u5EFA\u8BAE\u4E3Aurl\u6807\u51C6\u5B57\u7B26\uFF0C\u8F93\u5165\u540E\u70B9\u51FB\u5207\u6362"},null,8,["value"]),p(i,{type:"primary",onClick:u.handleClickGo},{default:l(()=>[I]),_:1},8,["onClick"]),P,$,y]),_:1})}var U=m(b,[["render",N]]);export{U as default};
