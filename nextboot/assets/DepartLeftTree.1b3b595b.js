var p=(x,_,l)=>new Promise((i,a)=>{var c=o=>{try{s(l.next(o))}catch(u){a(u)}},r=o=>{try{s(l.throw(o))}catch(u){a(u)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(c,r);s((l=l.apply(x,_)).next())});import"./index.f8f2ddf0.js";import{a as F,b4 as U,z as n,bj as V,U as d,o as h,k as g,G as C,p as D,i as z,l as G,N as I,j as W,an as R}from"./index.6cf4d174.js";import"./componentMap.bdddb878.js";import{_ as $,q as S,s as H}from"./DepartFormModal.0b4459fe.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./RadioButtonGroup.e396598a.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./JDictSelectTag.77cd1e49.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./JUpload.a8971a82.js";import"./functional.4d9308b0.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./useForm.0a8b633b.js";const Se=F({__name:"DepartLeftTree",emits:["select","rootTreeData"],setup(x,{expose:_,emit:l}){U("prefixCls");const i=n(!1),a=n([]),c=n([]),r=n([]),s=n([]),o=n(!1),u=n(!0),K=n(null);n(null);const A=n(""),[E,{openModal:J}]=V();function f(){return p(this,null,function*(){try{i.value=!0,a.value=[];const e=yield S();if(Array.isArray(e)&&(a.value=e),r.value.length===0)T();else if(s.value.length===0){let t=a.value[0];t&&m(t.id,t)}else l("select",K.value);l("rootTreeData",a.value)}finally{i.value=!1}})}f();function b(e){return p(this,null,function*(){try{const t=yield S({pid:e.dataRef.id});if(t.length==0)e.dataRef.isLeaf=!0;else if(e.dataRef.children=t,r.value.length>0){let y=[];for(let v of r.value)t.findIndex(k=>k.id===v)!==-1&&y.push(v);y.length>0&&(r.value=[...r.value])}a.value=[...a.value],l("rootTreeData",a.value)}catch(t){console.error(t)}return Promise.resolve()})}function T(e){let t=a.value[0];e?w(t):t?(t.isLeaf||(r.value=[t.key]),m(t.id,t),B()):l("select",null)}function B(){return p(this,null,function*(){yield R(),o.value=!0,yield R(),o.value=!1})}function m(e,t){s.value=[e],t&&(K.value=t,l("select",t))}function L(e){return p(this,null,function*(){if(e)try{i.value=!0,a.value=[];let t=yield H({keyWord:e});Array.isArray(t)&&(a.value=t),T(e)}finally{i.value=!1}else r.value=[],f();A.value=e})}function N(e){Array.isArray(e)?c.value=e:c.value=e.checked}function w(e){e.isLeaf||r.value.push(e.key),e.children&&e.children.length&&e.children.map(t=>{w(t)})}function j(e,t){e.length>0&&s.value[0]!==e[0]?m(e[0],t.selectedNodes[0].props):m(s.value[0])}return _({loadRootTreeData:f}),(e,t)=>{const y=d("a-input-search"),v=d("a-tree"),k=d("a-empty"),M=d("a-spin"),P=d("a-card");return h(),g(P,{bordered:!1,style:{height:"100%"}},{default:C(()=>[D(M,{spinning:i.value},{default:C(()=>[D(y,{placeholder:"\u6309\u90E8\u95E8\u540D\u79F0\u641C\u7D22\u2026",style:{"margin-bottom":"10px"},onSearch:L}),a.value.length>0?(h(),z(I,{key:0},[o.value?G("",!0):(h(),g(v,{key:0,checkable:!1,clickRowToExpand:!1,treeData:a.value,selectedKeys:s.value,checkStrictly:u.value,"load-data":b,checkedKeys:c.value,expandedKeys:r.value,"onUpdate:expandedKeys":t[0]||(t[0]=q=>r.value=q),onCheck:N,onSelect:j},null,8,["treeData","selectedKeys","checkStrictly","checkedKeys","expandedKeys"]))],64)):(h(),g(k,{key:1,description:"\u6682\u65E0\u6570\u636E"}))]),_:1},8,["spinning"]),D($,{rootTreeData:a.value,onRegister:W(E),onSuccess:f},null,8,["rootTreeData","onRegister"])]),_:1})}}});export{Se as default};
