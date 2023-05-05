import{B as f}from"./BasicTable.18c7a455.js";import{T as h}from"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import{u as b}from"./useTable.090fbe83.js";import{d as _}from"./system.0bed79cb.js";import{u as g}from"./index.c1ddc319.js";import{R as C,c as T,s as D}from"./RoleDrawer.a7cef4d4.js";import{a1 as w,a as R,U as t,o as B,i as S,p as r,G as s,J as k}from"./index.d537950e.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";const y=R({name:"system-demorole",components:{BasicTable:f,RoleDrawer:C,TableAction:h},setup(){const[e,{openDrawer:i}]=g(),[m,{reload:l}]=b({title:"\u89D2\u8272\u5217\u8868",api:_,columns:T,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(o){i(!0,{record:o,isUpdate:!0})}function n(o){console.log(o)}function a(){l()}return{registerTable:m,registerDrawer:e,handleCreate:p,handleEdit:c,handleDelete:n,handleSuccess:a}}}),E=k(" \u65B0\u589E\u89D2\u8272 ");function v(e,i,m,l,p,c){const n=t("a-button"),a=t("TableAction"),o=t("BasicTable"),d=t("RoleDrawer");return B(),S("div",null,[r(o,{onRegister:e.registerTable},{tableTitle:s(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:s(()=>[E]),_:1},8,["onClick"])]),action:s(({record:u})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var _e=w(y,[["render",v]]);export{_e as default};