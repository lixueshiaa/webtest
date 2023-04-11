import{B as f}from"./BasicTable.0e5ec17a.js";import{T as h}from"./componentMap.b6eed178.js";import"./TableImg.e5f75c12.js";import{u as b}from"./useTable.cd2ffd0a.js";import{d as _}from"./system.99642082.js";import{u as g}from"./index.02fb30c3.js";import{R as C,c as T,s as D}from"./RoleDrawer.54b45076.js";import{a1 as w,a as R,U as t,o as B,i as S,p as r,G as s,J as k}from"./index.397c0bf9.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./index.7ab28a2b.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./useFormItem.3d0c36d5.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import"./api.2a8d49a5.js";import"./functional.540b215d.js";import"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useContentViewHeight.4e4c24ce.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./index.1ddf0867.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";const y=R({name:"system-demorole",components:{BasicTable:f,RoleDrawer:C,TableAction:h},setup(){const[e,{openDrawer:i}]=g(),[m,{reload:l}]=b({title:"\u89D2\u8272\u5217\u8868",api:_,columns:T,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(o){i(!0,{record:o,isUpdate:!0})}function n(o){console.log(o)}function a(){l()}return{registerTable:m,registerDrawer:e,handleCreate:p,handleEdit:c,handleDelete:n,handleSuccess:a}}}),E=k(" \u65B0\u589E\u89D2\u8272 ");function v(e,i,m,l,p,c){const n=t("a-button"),a=t("TableAction"),o=t("BasicTable"),d=t("RoleDrawer");return B(),S("div",null,[r(o,{onRegister:e.registerTable},{tableTitle:s(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:s(()=>[E]),_:1},8,["onClick"])]),action:s(({record:u})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var _e=w(y,[["render",v]]);export{_e as default};
