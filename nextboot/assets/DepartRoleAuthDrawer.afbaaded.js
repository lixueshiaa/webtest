var w=(I,t,l)=>new Promise((i,r)=>{var s=a=>{try{u(l.next(a))}catch(d){r(d)}},c=a=>{try{u(l.throw(a))}catch(d){r(d)}},u=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,c);u((l=l.apply(I,t)).next())});import{_ as P}from"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import{a as z,u as A,B as G}from"./index.082b5cba.js";import{a as J,z as o,U as m,o as y,i as O,p as D,G as p,n as C,k as h,t as U,l as H,j as _,N as M,J as Q}from"./index.0c676cb0.js";import W from"./DepartRoleDataRuleDrawer.7d84c7f2.js";import{i as X,j as Y,k as Z}from"./depart.user.api.64e27133.js";import"./useContextMenu.8ed3a346.js";const ee=Q("\u4EC5\u4FDD\u5B58"),re=J({__name:"DepartRoleAuthDrawer",emits:["register"],setup(I){const t=o(!1),l=o(""),i=o(""),r=o([]),s=o([]),c=o([]),u=o([]),a=o([]),d=o([]),K=o(!0),[F,{closeDrawer:B}]=z(e=>{i.value=e.record.id,l.value=e.record.departId,R()}),[S,b]=A();function R(){return w(this,null,function*(){try{t.value=!0;const{ids:e,treeList:n}=yield X({departId:l.value});e.length>0?(d.value=e,u.value=e,r.value=n,s.value=yield Y({roleId:i.value}),c.value=[s.value]):g()}finally{t.value=!1}})}function g(){r.value=[],u.value=[],s.value=[],c.value=[],t.value=!1}function N(e){K.value?s.value=e.checked:s.value=e}function T(e){u.value=e}function j(e,{selectedNodes:n}){var v,f;if((f=(v=n[0])==null?void 0:v.props)!=null&&f.ruleFlag){let k=e[0];b.openDrawer(!0,{roleId:i,departId:l,functionId:k})}a.value=[]}function V(){g(),B()}function $(){g()}function x(e){return w(this,null,function*(){try{t.value=!0;let n={roleId:i.value,permissionIds:s.value.join(","),lastpermissionIds:c.value.join(",")};yield Z(n),e&&V()}finally{t.value=!1,e||R()}})}return(e,n)=>{const v=m("Icon"),f=m("a-empty"),k=m("a-spin"),q=m("a-button");return y(),O(M,null,[D(_(G),{title:"\u90E8\u95E8\u89D2\u8272\u6743\u9650\u914D\u7F6E",width:650,loading:t.value,showFooter:"",okText:"\u4FDD\u5B58\u5E76\u5173\u95ED",onOk:n[1]||(n[1]=E=>x(!0)),onClose:$,onRegister:_(F)},{centerFooter:p(()=>[D(q,{type:"primary",loading:t.value,ghost:"",onClick:n[0]||(n[0]=E=>x(!1))},{default:p(()=>[ee]),_:1},8,["loading"])]),default:p(()=>[C("div",null,[D(k,{spinning:t.value},{default:p(()=>[r.value.length>0?(y(),h(_(P),{key:0,title:"\u6240\u62E5\u6709\u7684\u90E8\u95E8\u6743\u9650",toolbar:"",checkable:"",treeData:r.value,checkedKeys:s.value,selectedKeys:a.value,expandedKeys:u.value,checkStrictly:K.value,clickRowToExpand:!1,onCheck:N,onExpand:T,onSelect:j},{title:p(({slotTitle:E,ruleFlag:L})=>[C("span",null,U(E),1),L?(y(),h(v,{key:0,icon:"ant-design:align-left-outlined",style:{"margin-left":"5px",color:"red"}})):H("",!0)]),_:1},8,["treeData","checkedKeys","selectedKeys","expandedKeys","checkStrictly"])):(y(),h(f,{key:1,description:"\u65E0\u53EF\u914D\u7F6E\u90E8\u95E8\u6743\u9650"}))]),_:1},8,["spinning"])])]),_:1},8,["loading","onRegister"]),D(W,{onRegister:_(S)},null,8,["onRegister"])],64)}}});export{re as default};
