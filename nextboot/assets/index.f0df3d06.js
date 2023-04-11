import{B as f}from"./BasicTable.0e5ec17a.js";import{T as b}from"./componentMap.b6eed178.js";import"./TableImg.e5f75c12.js";import{u as h}from"./useTable.cd2ffd0a.js";import{b as _}from"./system.99642082.js";import"./index.7ab28a2b.js";import{D as g,c as C,s as T}from"./DeptModal.09a155cb.js";import{a1 as E,a as B,bj as D,U as t,o as M,i as S,p as i,G as s,J as R}from"./index.397c0bf9.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./useFormItem.3d0c36d5.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import"./api.2a8d49a5.js";import"./functional.540b215d.js";import"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useContentViewHeight.4e4c24ce.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./index.1ddf0867.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";const k=B({name:"system-dept",components:{BasicTable:f,DeptModal:g,TableAction:b},setup(){const[e,{openModal:n}]=D(),[p,{reload:l}]=h({title:"\u90E8\u95E8\u5217\u8868",api:_,columns:C,formConfig:{labelWidth:120,schemas:T},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function m(){n(!0,{isUpdate:!1})}function c(o){n(!0,{record:o,isUpdate:!0})}function r(o){console.log(o)}function a(){l()}return{registerTable:p,registerModal:e,handleCreate:m,handleEdit:c,handleDelete:r,handleSuccess:a}}}),v=R(" \u65B0\u589E\u90E8\u95E8 ");function w(e,n,p,l,m,c){const r=t("a-button"),a=t("TableAction"),o=t("BasicTable"),d=t("DeptModal");return M(),S("div",null,[i(o,{onRegister:e.registerTable},{tableTitle:s(()=>[i(r,{type:"primary",onClick:e.handleCreate},{default:s(()=>[v]),_:1},8,["onClick"])]),action:s(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var he=E(k,[["render",w]]);export{he as default};
