var w=(R,f,t)=>new Promise((d,s)=>{var u=a=>{try{l(t.next(a))}catch(i){s(i)}},r=a=>{try{l(t.throw(a))}catch(i){s(i)}},l=a=>a.done?d(a.value):Promise.resolve(a.value).then(u,r);l((t=t.apply(R,f)).next())});import{_ as A}from"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import{a as G,u as J,B as O}from"./index.9ae51836.js";import{a as U,z as n,U as y,o as D,i as H,p as _,G as p,n as C,k as E,t as M,l as Q,j as c,N as W,J as X}from"./index.6cf4d174.js";import Y from"./DepartRoleDataRuleDrawer.217d585b.js";import{j as Z,k as ee,m as te}from"./depart.user.api.28efbec4.js";import"./useContextMenu.988cb2d7.js";const ae=X("\u4EC5\u4FDD\u5B58"),ce=U({__name:"DepartRoleAuthDrawer",emits:["register"],setup(R){const f=n(null),t=n(!1),d=n(""),s=n(""),u=n([]),r=n([]),l=n([]),a=n([]),i=n([]),x=n([]),F=n(!0),[B,{closeDrawer:S}]=G(e=>{s.value=e.record.id,d.value=e.record.departId,I()}),[T,b]=J();function I(){return w(this,null,function*(){try{t.value=!0;const{ids:e,treeList:o}=yield Z({departId:d.value});e.length>0?(x.value=e,a.value=e,u.value=o,r.value=yield ee({roleId:s.value}),l.value=[r.value]):g()}finally{t.value=!1}})}function g(){u.value=[],a.value=[],r.value=[],l.value=[],t.value=!1}function N(e){r.value=e.checked?e.checked:e}function j(e){a.value=e}function V(e,{selectedNodes:o}){var m,v;if((v=(m=o[0])==null?void 0:m.props)!=null&&v.ruleFlag){let k=e[0];b.openDrawer(!0,{roleId:s,departId:d,functionId:k})}i.value=[]}function $(){g(),S()}function q(){g()}function L(){const e=c(f);if(!e)throw new Error("tree is null!");return e}function K(e){return w(this,null,function*(){try{t.value=!0;let o={roleId:s.value,permissionIds:c(L().getCheckedKeys()).join(","),lastpermissionIds:l.value.join(",")};yield te(o),e&&$()}finally{t.value=!1,e||I()}})}return(e,o)=>{const m=y("Icon"),v=y("a-empty"),k=y("a-spin"),P=y("a-button");return D(),H(W,null,[_(c(O),{title:"\u90E8\u95E8\u89D2\u8272\u6743\u9650\u914D\u7F6E",width:650,loading:t.value,showFooter:"",okText:"\u4FDD\u5B58\u5E76\u5173\u95ED",onOk:o[1]||(o[1]=h=>K(!0)),onClose:q,onRegister:c(B)},{centerFooter:p(()=>[_(P,{type:"primary",loading:t.value,ghost:"",onClick:o[0]||(o[0]=h=>K(!1))},{default:p(()=>[ae]),_:1},8,["loading"])]),default:p(()=>[C("div",null,[_(k,{spinning:t.value},{default:p(()=>[u.value.length>0?(D(),E(c(A),{key:0,title:"\u6240\u62E5\u6709\u7684\u90E8\u95E8\u6743\u9650",ref_key:"treeRef",ref:f,toolbar:"",checkable:"",treeData:u.value,checkedKeys:r.value,selectedKeys:i.value,expandedKeys:a.value,checkStrictly:F.value,clickRowToExpand:!1,onCheck:N,onExpand:j,onSelect:V},{title:p(({slotTitle:h,ruleFlag:z})=>[C("span",null,M(h),1),z?(D(),E(m,{key:0,icon:"ant-design:align-left-outlined",style:{"margin-left":"5px",color:"red"}})):Q("",!0)]),_:1},8,["treeData","checkedKeys","selectedKeys","expandedKeys","checkStrictly"])):(D(),E(v,{key:1,description:"\u65E0\u53EF\u914D\u7F6E\u90E8\u95E8\u6743\u9650"}))]),_:1},8,["spinning"])])]),_:1},8,["loading","onRegister"]),_(Y,{onRegister:c(T)},null,8,["onRegister"])],64)}}});export{ce as default};
