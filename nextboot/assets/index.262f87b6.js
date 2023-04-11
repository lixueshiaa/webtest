import{B as f}from"./BasicTable.5bdcd073.js";import{T as h}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{u as b}from"./useTable.5c9bbf6b.js";import{d as _}from"./system.c2f0f325.js";import{u as g}from"./index.9ae51836.js";import{R as C,c as T,s as D}from"./RoleDrawer.0172fa74.js";import{a1 as w,a as R,U as t,o as B,i as S,p as r,G as s,J as k}from"./index.6cf4d174.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";const y=R({name:"system-demorole",components:{BasicTable:f,RoleDrawer:C,TableAction:h},setup(){const[e,{openDrawer:i}]=g(),[m,{reload:l}]=b({title:"\u89D2\u8272\u5217\u8868",api:_,columns:T,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(o){i(!0,{record:o,isUpdate:!0})}function n(o){console.log(o)}function a(){l()}return{registerTable:m,registerDrawer:e,handleCreate:p,handleEdit:c,handleDelete:n,handleSuccess:a}}}),E=k(" \u65B0\u589E\u89D2\u8272 ");function v(e,i,m,l,p,c){const n=t("a-button"),a=t("TableAction"),o=t("BasicTable"),d=t("RoleDrawer");return B(),S("div",null,[r(o,{onRegister:e.registerTable},{tableTitle:s(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:s(()=>[E]),_:1},8,["onClick"])]),action:s(({record:u})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var _e=w(y,[["render",v]]);export{_e as default};
