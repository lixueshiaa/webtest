import{B as f}from"./BasicTable.5bdcd073.js";import"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{u as h}from"./useTable.5c9bbf6b.js";import{getBasicColumns as _,getFormConfig as k}from"./tableData.f10f0c88.js";import{a1 as F,a as b,be as y,z as C,U as i,o as s,k as B,G as o,p as n,i as c,n as E,t as T,N as S,J as m}from"./index.6cf4d174.js";import{d as A}from"./table.2ad15554.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";const D=b({components:{BasicTable:f,AAlert:y},setup(){const e=C([]),[t,{getForm:a}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:A,columns:_(),useSearchForm:!0,formConfig:k(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function p(){console.log(a().getFieldsValue())}function u(r){console.log(r),e.value=r}return{registerTable:t,getFormValues:p,checkedKeys:e,onSelectChange:u}}}),w=m(" custom-slot "),K=m("\u6E05\u7A7A"),V={key:1},$=m("\u83B7\u53D6\u8868\u5355\u6570\u636E");function v(e,t,a,p,u,r){const l=i("a-button"),d=i("a-alert"),g=i("BasicTable");return s(),B(g,{onRegister:e.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:e.checkedKeys,onChange:e.onSelectChange}},{"form-custom":o(()=>[w]),headerTop:o(()=>[n(d,{type:"info","show-icon":""},{message:o(()=>[e.checkedKeys.length>0?(s(),c(S,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(e.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),n(l,{type:"link",onClick:t[0]||(t[0]=N=>e.checkedKeys=[]),size:"small"},{default:o(()=>[K]),_:1})],64)):(s(),c("span",V,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:o(()=>[n(l,{type:"primary",onClick:e.getFormValues},{default:o(()=>[$]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var ye=F(D,[["render",v]]);export{ye as default};