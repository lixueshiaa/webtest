var u=(h,b,i)=>new Promise((s,d)=>{var w=o=>{try{l(i.next(o))}catch(c){d(c)}},g=o=>{try{l(i.throw(o))}catch(c){d(c)}},l=o=>o.done?s(o.value):Promise.resolve(o.value).then(w,g);l((i=i.apply(h,b)).next())});import{B as z}from"./BasicTable.18c7a455.js";import{T as P}from"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import{u as W}from"./useTable.090fbe83.js";import{a as $,u as G,B as H}from"./index.c1ddc319.js";import"./index.991a4e0a.js";import J from"./UserDrawer.2fec507f.js";import q from"./UseSelectModal.4b4a69ad.js";import{u as Q,m as X,n as Y,o as Z}from"./role.api.ebd905b4.js";import{u as ee,b as te}from"./role.data.a60d76b8.js";import{a as oe}from"./user.api.dbd21046.js";import{a as re,z as D,bj as ne,U as p,o as R,k as y,G as n,p as t,l as ie,j as a,J as f}from"./index.d537950e.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./user.data.a28a217f.js";import"./validator.aea6ab50.js";const se=f(" \u65B0\u589E\u7528\u6237"),ae=f(" \u5DF2\u6709\u7528\u6237"),ue=f(" \u53D6\u6D88\u5173\u8054 "),le=f("\u6279\u91CF\u64CD\u4F5C "),rt=re({__name:"RoleUserTable",emits:["register","hideUserList"],setup(h,{emit:b}){const i=D([]),s=D(""),[d,{setDrawerProps:w,closeDrawer:g}]=$(e=>u(this,null,function*(){s.value=e.id,T({searchInfo:{roleId:e.id}}),m()})),[l,{openDrawer:o}]=G(),[c,{openModal:k}]=ne(),[I,{reload:m,updateTableDataRecord:S,setProps:T}]=W({title:"\u7528\u6237\u5217\u8868",api:Q,columns:ee,formConfig:{labelWidth:120,schemas:te,autoSubmitOnEnter:!0,actionColOptions:{pull:1}},striped:!0,useSearchForm:!0,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},canResize:!1,rowKey:"id",actionColumn:{width:180,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),v={type:"checkbox",columnWidth:50,selectedRowKeys:i,onChange:x};function x(e,r){i.value=e}function U(){o(!0,{isUpdate:!1,selectedroles:[s.value],isRole:!0})}function B(e){return u(this,null,function*(){try{const r=yield oe({userid:e.id});r&&r.length>0&&(e.selectedroles=r)}catch(r){console.log(r)}o(!0,{record:e,isUpdate:!0,isRole:!0})})}function F(e){return u(this,null,function*(){yield Z({userId:e.id,roleId:s.value},m)})}function E(){return u(this,null,function*(){yield X({userIds:i.value.join(","),roleId:s.value},m)})}function O({isUpdate:e,values:r}){e?S(r.id,r):m()}function j(){k(!0)}function A(e){return u(this,null,function*(){yield Y({roleId:s.value,userIdList:e},m)})}function K(e){return[{label:"\u7F16\u8F91",onClick:B.bind(null,e)},{label:"\u53D6\u6D88\u5173\u8054",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u53D6\u6D88\u5173\u8054",confirm:F.bind(null,e)}}]}return(e,r)=>{const _=p("a-button"),C=p("Icon"),L=p("a-menu-item"),M=p("a-menu"),N=p("a-dropdown");return R(),y(a(H),{onRegister:a(d),title:"\u89D2\u8272\u7528\u6237",width:"800",destroyOnClose:""},{default:n(()=>[t(a(z),{onRegister:a(I),rowSelection:v},{tableTitle:n(()=>[t(_,{type:"primary",onClick:U},{default:n(()=>[se]),_:1}),t(_,{type:"primary",onClick:j},{default:n(()=>[ae]),_:1}),i.value.length>0?(R(),y(N,{key:0},{overlay:n(()=>[t(M,null,{default:n(()=>[t(L,{key:"1",onClick:E},{default:n(()=>[t(C,{icon:"bx:bx-unlink"}),ue]),_:1})]),_:1})]),default:n(()=>[t(_,null,{default:n(()=>[le,t(C,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):ie("",!0)]),action:n(({record:V})=>[t(a(P),{actions:K(V)},null,8,["actions"])]),_:1},8,["onRegister"]),t(J,{onRegister:a(l),onSuccess:O},null,8,["onRegister"]),t(q,{onRegister:a(c),onSelect:A},null,8,["onRegister"])]),_:1},8,["onRegister"])}}});export{rt as default};