var p=(u,n,e)=>new Promise((c,m)=>{var l=t=>{try{i(e.next(t))}catch(r){m(r)}},a=t=>{try{i(e.throw(t))}catch(r){m(r)}},i=t=>t.done?c(t.value):Promise.resolve(t.value).then(l,a);i((e=e.apply(u,n)).next())});import{B}from"./index.9788db2e.js";import{B as b}from"./BasicTable.1032ab26.js";import{T as R}from"./componentMap.6942b0b6.js";import"./TableImg.39540c6d.js";import{u as h}from"./useTable.44d02b40.js";import{r as w}from"./dict.data.5651e27d.js";import{e as C,p as D,f as _}from"./dict.api.b960ff08.js";import{a as y,z as T,bg as x,o as E,k as M,G as d,p as f,j as s,ad as k}from"./index.9eb451d3.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./BasicForm.d1b5a4f4.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import"./useFormItem.b38dda7e.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import"./api.632a718d.js";import"./functional.8b995981.js";import"./index.83e82d5a.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useContentViewHeight.0d594355.js";import"./FormOutlined.22ab579b.js";import"./useSortable.043e591f.js";import"./index.5df19bc8.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./validator.cd75231b.js";import"./user.api.c26e46a3.js";const wt=y({__name:"DictRecycleBinModal",emits:["success","register"],setup(u,{emit:n}){T([]);const[e,{setModalProps:c,closeModal:m}]=x(),[l,{reload:a}]=h({api:C,columns:w,striped:!0,useSearchForm:!1,showTableSetting:!1,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,pagination:!1,tableSetting:{fullScreen:!0},canResize:!1,actionColumn:{width:100,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function i(o){return p(this,null,function*(){yield D(o.id,a),n("success")})}function t(o){return p(this,null,function*(){yield _(o.id,a)})}function r(o){return[{label:"\u53D6\u56DE",icon:"ant-design:redo-outlined",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u53D6\u56DE",confirm:i.bind(null,o)}},{label:"\u5F7B\u5E95\u5220\u9664",icon:"ant-design:scissor-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.bind(null,o)}}]}return(o,A)=>(E(),M(s(B),k(o.$attrs,{onRegister:s(e),title:"\u5B57\u5178\u56DE\u6536\u7AD9",showOkBtn:!1,width:"1000px",destroyOnClose:""}),{default:d(()=>[f(s(b),{onRegister:s(l)},{action:d(({record:g})=>[f(s(R),{actions:r(g)},null,8,["actions"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister"]))}});export{wt as default};