var _=(x,h,o)=>new Promise((r,s)=>{var y=t=>{try{c(o.next(t))}catch(d){s(d)}},m=t=>{try{c(o.throw(t))}catch(d){s(d)}},c=t=>t.done?r(t.value):Promise.resolve(t.value).then(y,m);c((o=o.apply(x,h)).next())});import{u as G}from"./index.02fb30c3.js";import{_ as J}from"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import O from"./DepartDataRuleDrawer.bb179eed.js";import{a as U,b as X,c as H}from"./depart.api.d716bbdd.js";import{a1 as M,a as Q,f as W,b4 as Y,z as u,X as Z,an as C,U as i,o as D,i as ee,p as a,G as n,k as w,n as K,t as te,l as ae,j as T,N as ne,J as f}from"./index.397c0bf9.js";import"./useContextMenu.7724d5f8.js";const oe={class:"j-box-bottom-button offset-20",style:{"margin-top":"30px"}},se={class:"j-box-bottom-button-float"},le=f("\u5168\u90E8\u52FE\u9009"),ue=f("\u53D6\u6D88\u5168\u9009"),re=f("\u5C55\u5F00\u6240\u6709"),ie=f("\u6536\u8D77\u6240\u6709"),ce=f(" \u6811\u64CD\u4F5C "),de=f("\u4FDD\u5B58"),pe=Q({__name:"DepartRuleTab",props:{data:{type:Object,default:()=>({})}},setup(x){const h=x,o=W(()=>{var e;return(e=h.data)==null?void 0:e.id});Y("prefixCls");const r=u(),s=u(!1),y=u([]),m=u([]),c=u([]),t=u([]),d=u([]),j=u(!0),[A,S]=G();E(),Z(o,()=>I(),{immediate:!0});function E(){return _(this,null,function*(){try{s.value=!0;let{treeList:e}=yield U();y.value=e,yield C(),b(!0)}finally{s.value=!1}})}function I(){return _(this,null,function*(){if(o.value)try{s.value=!0;let e=yield X({departId:o.value});t.value=e,d.value=[...e]}finally{s.value=!1}})}function $(){return _(this,null,function*(){try{s.value=!0,yield H({departId:o.value,permissionIds:t.value.join(","),lastpermissionIds:d.value.join(",")}),yield E(),yield I()}finally{s.value=!1}})}function B(e){Array.isArray(e)?t.value=e:t.value=e.checked}function N(e){m.value=e}function L(e,{selectedNodes:l}){var v,g;if((g=(v=l[0])==null?void 0:v.props)!=null&&g.ruleFlag){let p=e[0];S.openDrawer(!0,{departId:o,functionId:p})}c.value=[]}function b(e){return _(this,null,function*(){r.value.expandAll(e),yield C(),m.value=r.value.getExpandedKeys()})}function F(e){return _(this,null,function*(){r.value.checkAll(e),yield C(),t.value=r.value.getCheckedKeys()})}return(e,l)=>{const v=i("Icon"),g=i("a-empty"),p=i("a-menu-item"),V=i("a-menu"),R=i("a-button"),P=i("a-dropdown"),q=i("a-spin");return D(),ee(ne,null,[a(q,{spinning:s.value},{default:n(()=>[y.value.length>0?(D(),w(T(J),{key:0,ref_key:"basicTree",ref:r,class:"depart-rule-tree",checkable:"",treeData:y.value,checkedKeys:t.value,selectedKeys:c.value,expandedKeys:m.value,checkStrictly:j.value,style:{height:"500px",overflow:"auto"},onCheck:B,onExpand:N,onSelect:L},{title:n(({slotTitle:k,ruleFlag:z})=>[K("span",null,te(k),1),z?(D(),w(v,{key:0,icon:"ant-design:align-left-outlined",style:{"margin-left":"5px",color:"red"}})):ae("",!0)]),_:1},8,["treeData","checkedKeys","selectedKeys","expandedKeys","checkStrictly"])):(D(),w(g,{key:1,description:"\u65E0\u53EF\u914D\u7F6E\u90E8\u95E8\u6743\u9650"})),K("div",oe,[K("div",se,[a(P,{trigger:["click"],placement:"topCenter"},{overlay:n(()=>[a(V,null,{default:n(()=>[a(p,{key:"3",onClick:l[0]||(l[0]=k=>F(!0))},{default:n(()=>[le]),_:1}),a(p,{key:"4",onClick:l[1]||(l[1]=k=>F(!1))},{default:n(()=>[ue]),_:1}),a(p,{key:"5",onClick:l[2]||(l[2]=k=>b(!0))},{default:n(()=>[re]),_:1}),a(p,{key:"6",onClick:l[3]||(l[3]=k=>b(!1))},{default:n(()=>[ie]),_:1})]),_:1})]),default:n(()=>[a(R,{style:{float:"left"}},{default:n(()=>[ce,a(v,{icon:"ant-design:up-outlined"})]),_:1})]),_:1}),a(R,{type:"primary",preIcon:"ant-design:save-filled",onClick:$},{default:n(()=>[de]),_:1})])])]),_:1},8,["spinning"]),a(O,{onRegister:T(A)},null,8,["onRegister"])],64)}}});var De=M(pe,[["__scopeId","data-v-5cc9970c"]]);export{De as default};
