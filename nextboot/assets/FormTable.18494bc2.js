import{B as f}from"./BasicTable.18c7a455.js";import"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import{u as h}from"./useTable.090fbe83.js";import{getBasicColumns as _,getFormConfig as k}from"./tableData.f10f0c88.js";import{a1 as F,a as b,be as y,z as C,U as i,o as s,k as B,G as o,p as n,i as c,n as E,t as T,N as S,J as m}from"./index.d537950e.js";import{d as A}from"./table.c9367e53.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";const D=b({components:{BasicTable:f,AAlert:y},setup(){const e=C([]),[t,{getForm:a}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:A,columns:_(),useSearchForm:!0,formConfig:k(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function p(){console.log(a().getFieldsValue())}function u(r){console.log(r),e.value=r}return{registerTable:t,getFormValues:p,checkedKeys:e,onSelectChange:u}}}),w=m(" custom-slot "),K=m("\u6E05\u7A7A"),V={key:1},$=m("\u83B7\u53D6\u8868\u5355\u6570\u636E");function v(e,t,a,p,u,r){const l=i("a-button"),d=i("a-alert"),g=i("BasicTable");return s(),B(g,{onRegister:e.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:e.checkedKeys,onChange:e.onSelectChange}},{"form-custom":o(()=>[w]),headerTop:o(()=>[n(d,{type:"info","show-icon":""},{message:o(()=>[e.checkedKeys.length>0?(s(),c(S,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(e.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),n(l,{type:"link",onClick:t[0]||(t[0]=N=>e.checkedKeys=[]),size:"small"},{default:o(()=>[K]),_:1})],64)):(s(),c("span",V,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:o(()=>[n(l,{type:"primary",onClick:e.getFormValues},{default:o(()=>[$]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var ye=F(D,[["render",v]]);export{ye as default};