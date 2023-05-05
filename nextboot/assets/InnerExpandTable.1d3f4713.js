import{a1 as E,a as F,z as l,bj as k,U as _,o as M,k as S,G as n,p as r,j as o,J as K,a0 as s}from"./index.6cf4d174.js";import{B as x}from"./BasicTable.5bdcd073.js";import{T as U}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{u as j}from"./useTable.5c9bbf6b.js";import"./index.f8f2ddf0.js";import z from"./JVxeTableModal.20065074.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./jvxetable.api.04af182f.js";const L=K(" \u65B0\u589E"),V=F({__name:"InnerExpandTable",setup(J){const i={list:"/test/order/orderList",delete:"/test/order/delete",deleteBatch:"/test/order/deleteBatch",customerListByMainId:"/test/order/listOrderCustomerByMainId"},u=l([]),c=l([]),d=l([]),h=[{title:"\u8BA2\u5355\u53F7",align:"center",dataIndex:"orderCode",width:100},{title:"\u8BA2\u5355\u7C7B\u578B",align:"center",dataIndex:"ctype",width:100,customRender:({text:e})=>{let t="";return e==="1"?t="\u56FD\u5185\u8BA2\u5355":e==="2"&&(t="\u56FD\u9645\u8BA2\u5355"),t}},{title:"\u8BA2\u5355\u65E5\u671F",align:"center",width:100,dataIndex:"orderDate"},{title:"\u8BA2\u5355\u91D1\u989D",align:"center",dataIndex:"orderMoney",width:100},{title:"\u8BA2\u5355\u5907\u6CE8",align:"center",dataIndex:"content",width:100}],B=[{title:"\u5BA2\u6237\u540D",align:"center",width:100,dataIndex:"name",key:"name"},{title:"\u6027\u522B",align:"center",dataIndex:"sex",customRender:function(e){return e==1?"\u7537":e==2?"\u5973":e}},{title:"\u8EAB\u4EFD\u8BC1\u53F7\u7801",align:"center",dataIndex:"idcard"},{title:"\u7535\u8BDD",dataIndex:"telphone",align:"center"}],g=e=>s.get({url:i.list,params:e}),[b,{openModal:p}]=k(),[I,{reload:m}]=j({columns:h,api:g,rowKey:"id",striped:!0,useSearchForm:!1,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,actionColumn:{width:110,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),w={type:"checkbox",columnWidth:30,selectedRowKeys:c,onChange:y};function y(e){c.value=e}function C(e,t){u.value=[],d.value=[],e===!0&&(u.value.push(t.id),s.get({url:i.customerListByMainId,params:{orderId:t.id}},{isTransformResponse:!1}).then(a=>{a.success&&(d.value=a.result.records)}))}function R(){p(!0,{isUpdate:!1})}function T(e){p(!0,{record:e,isUpdate:!0})}function v(e){s.delete({url:i.delete,data:{id:e.id}},{joinParamsToUrl:!0}).then(()=>{m()})}function A(e){return[{label:"\u7F16\u8F91",onClick:T.bind(null,e)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:v.bind(null,e)}}]}return(e,t)=>{const a=_("a-button"),D=_("a-card");return M(),S(D,{bordered:!1},{default:n(()=>[r(o(x),{onRegister:o(I),expandedRowKeys:u.value,rowSelection:w,onExpand:C},{tableTitle:n(()=>[r(a,{type:"primary",onClick:R,preIcon:"ant-design:plus-outlined"},{default:n(()=>[L]),_:1})]),expandedRowRender:n(()=>[r(o(x),{bordered:"",size:"middle",rowKey:"id",canResize:!1,columns:B,dataSource:d.value,pagination:!1},null,8,["dataSource"])]),action:n(({record:f})=>[r(o(U),{actions:A(f)},null,8,["actions"])]),_:1},8,["onRegister","expandedRowKeys"]),r(z,{onRegister:o(b),onSuccess:t[0]||(t[0]=f=>o(m)())},null,8,["onRegister"])]),_:1})}}});var Ae=E(V,[["__scopeId","data-v-2dddf04b"]]);export{Ae as default};