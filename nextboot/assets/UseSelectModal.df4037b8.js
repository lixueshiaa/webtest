import{B as c}from"./index.f8f2ddf0.js";import{B as u}from"./BasicTable.5bdcd073.js";import"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{u as d}from"./useTable.5c9bbf6b.js";import{u as f,b as g}from"./role.data.42c51a47.js";import{l as h}from"./user.api.434ee89d.js";import{a as b,z as w,bg as S,o as x,k as R,G as _,p as C,j as o,ad as k,Q as y}from"./index.6cf4d174.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./role.api.19c1ddc4.js";const bo=b({__name:"UseSelectModal",emits:["select","register"],setup(B,{emit:i}){const e=w([]),[s,{setModalProps:r,closeModal:m}]=S(),[a,{reload:M}]=d({api:h,rowKey:"id",columns:f,formConfig:{labelWidth:60,schemas:g,baseRowStyle:{maxHeight:"20px"},autoSubmitOnEnter:!0},striped:!0,useSearchForm:!0,showTableSetting:!1,bordered:!0,showIndexColumn:!1,canResize:!1}),p={type:"checkbox",columnWidth:50,selectedRowKeys:e,onChange:n};function n(t){e.value=t}function l(){r({confirmLoading:!0}),m(),i("select",y(o(e))),r({confirmLoading:!1})}return(t,T)=>(x(),R(o(c),k(t.$attrs,{onRegister:o(s),title:"\u7528\u6237\u9009\u62E9\u5217\u8868",width:"1000px",onOk:l}),{default:_(()=>[C(o(u),{onRegister:o(a),rowSelection:p,style:{padding:"0px"}},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{bo as default};