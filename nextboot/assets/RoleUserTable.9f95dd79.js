var u=(h,b,i)=>new Promise((s,d)=>{var w=o=>{try{l(i.next(o))}catch(c){d(c)}},g=o=>{try{l(i.throw(o))}catch(c){d(c)}},l=o=>o.done?s(o.value):Promise.resolve(o.value).then(w,g);l((i=i.apply(h,b)).next())});import{B as z}from"./BasicTable.5bdcd073.js";import{T as P}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{u as W}from"./useTable.5c9bbf6b.js";import{a as $,u as G,B as H}from"./index.9ae51836.js";import"./index.f8f2ddf0.js";import J from"./UserDrawer.84a6b753.js";import q from"./UseSelectModal.df4037b8.js";import{u as Q,m as X,n as Y,o as Z}from"./role.api.19c1ddc4.js";import{u as ee,b as te}from"./role.data.42c51a47.js";import{a as oe}from"./user.api.434ee89d.js";import{a as re,z as D,bj as ne,U as p,o as R,k as y,G as n,p as t,l as ie,j as a,J as f}from"./index.6cf4d174.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./user.data.93f68760.js";import"./validator.f8adecf1.js";const se=f(" \u65B0\u589E\u7528\u6237"),ae=f(" \u5DF2\u6709\u7528\u6237"),ue=f(" \u53D6\u6D88\u5173\u8054 "),le=f("\u6279\u91CF\u64CD\u4F5C "),rt=re({__name:"RoleUserTable",emits:["register","hideUserList"],setup(h,{emit:b}){const i=D([]),s=D(""),[d,{setDrawerProps:w,closeDrawer:g}]=$(e=>u(this,null,function*(){s.value=e.id,T({searchInfo:{roleId:e.id}}),m()})),[l,{openDrawer:o}]=G(),[c,{openModal:k}]=ne(),[I,{reload:m,updateTableDataRecord:S,setProps:T}]=W({title:"\u7528\u6237\u5217\u8868",api:Q,columns:ee,formConfig:{labelWidth:120,schemas:te,autoSubmitOnEnter:!0,actionColOptions:{pull:1}},striped:!0,useSearchForm:!0,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},canResize:!1,rowKey:"id",actionColumn:{width:180,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),v={type:"checkbox",columnWidth:50,selectedRowKeys:i,onChange:x};function x(e,r){i.value=e}function U(){o(!0,{isUpdate:!1,selectedroles:[s.value],isRole:!0})}function B(e){return u(this,null,function*(){try{const r=yield oe({userid:e.id});r&&r.length>0&&(e.selectedroles=r)}catch(r){console.log(r)}o(!0,{record:e,isUpdate:!0,isRole:!0})})}function F(e){return u(this,null,function*(){yield Z({userId:e.id,roleId:s.value},m)})}function E(){return u(this,null,function*(){yield X({userIds:i.value.join(","),roleId:s.value},m)})}function O({isUpdate:e,values:r}){e?S(r.id,r):m()}function j(){k(!0)}function A(e){return u(this,null,function*(){yield Y({roleId:s.value,userIdList:e},m)})}function K(e){return[{label:"\u7F16\u8F91",onClick:B.bind(null,e)},{label:"\u53D6\u6D88\u5173\u8054",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u53D6\u6D88\u5173\u8054",confirm:F.bind(null,e)}}]}return(e,r)=>{const _=p("a-button"),C=p("Icon"),L=p("a-menu-item"),M=p("a-menu"),N=p("a-dropdown");return R(),y(a(H),{onRegister:a(d),title:"\u89D2\u8272\u7528\u6237",width:"800",destroyOnClose:""},{default:n(()=>[t(a(z),{onRegister:a(I),rowSelection:v},{tableTitle:n(()=>[t(_,{type:"primary",onClick:U},{default:n(()=>[se]),_:1}),t(_,{type:"primary",onClick:j},{default:n(()=>[ae]),_:1}),i.value.length>0?(R(),y(N,{key:0},{overlay:n(()=>[t(M,null,{default:n(()=>[t(L,{key:"1",onClick:E},{default:n(()=>[t(C,{icon:"bx:bx-unlink"}),ue]),_:1})]),_:1})]),default:n(()=>[t(_,null,{default:n(()=>[le,t(C,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):ie("",!0)]),action:n(({record:V})=>[t(a(P),{actions:K(V)},null,8,["actions"])]),_:1},8,["onRegister"]),t(J,{onRegister:a(l),onSuccess:O},null,8,["onRegister"]),t(q,{onRegister:a(c),onSelect:A},null,8,["onRegister"])]),_:1},8,["onRegister"])}}});export{rt as default};
