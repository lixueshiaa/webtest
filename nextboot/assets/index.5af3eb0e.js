var T=Object.defineProperty,k=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var B=(e,o,t)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,d=(e,o)=>{for(var t in o||(o={}))D.call(o,t)&&B(e,t,o[t]);if(F)for(var t of F(o))A.call(o,t)&&B(e,t,o[t]);return e},h=(e,o)=>k(e,v(o));var x=(e,o,t)=>new Promise((n,s)=>{var i=r=>{try{m(t.next(r))}catch(c){s(c)}},l=r=>{try{m(t.throw(r))}catch(c){s(c)}},m=r=>r.done?n(r.value):Promise.resolve(r.value).then(i,l);m((t=t.apply(e,o)).next())});import{B as O}from"./index.9788db2e.js";import{Q as P,b as _,bO as I,z as S,B as M,T as E,a0 as R,a as $,bg as K,o as L,k as W,G as j,p as z,j as w,ad as H,by as q,b6 as G}from"./index.9eb451d3.js";import{B as N}from"./BasicTable.1032ab26.js";import"./componentMap.6942b0b6.js";import"./TableImg.39540c6d.js";import{u as Q}from"./useTable.44d02b40.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./BasicForm.d1b5a4f4.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import"./useFormItem.b38dda7e.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import"./api.632a718d.js";import"./functional.8b995981.js";import"./index.83e82d5a.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useContentViewHeight.0d594355.js";import"./FormOutlined.22ab579b.js";import"./useSortable.043e591f.js";import"./index.5df19bc8.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";const J=[{title:"\u8868\u540D",dataIndex:"id"}],V=[{label:"\u8868\u540D",field:"id",component:"Input",colProps:{span:24},componentProps:(()=>{let e=[];return({tableAction:o})=>(e=e.length?e:o.getDataSource().map(t=>P(t)),{placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u4EE5\u6A21\u7CCA\u7B5B\u9009",onInput(t){const n=t.target.value,s=e.filter(i=>i.id.indexOf(n)!==-1);o.setTableData(s)}})})()}];function U(e){const o=E();let t={};e.designScope&&(t=_(e.designScope));const n=X(e.tableProps),[,{reload:s,setLoading:i},{selectedRowKeys:l}]=n;function m(c,u){return new Promise((a,p)=>{var f;const g=()=>x(this,null,function*(){var b,y;try{i(!0);const C=yield c();((b=u==null?void 0:u.reload)==null||b)&&s(),((y=u==null?void 0:u.clearSelection)==null||y)&&(l.value=[]),a(C)}catch(C){p(C)}finally{i(!1)}});(f=u==null?void 0:u.confirm)==null||f?o.createConfirm({iconType:"warning",title:"\u5220\u9664",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onOk:()=>g(),onCancel:()=>p()}):g()})}function r(c){return m(c,{confirm:!1,clearSelection:!1})}return h(d(d({},t),o),{doRequest:m,doDeleteRecord:r,tableContext:n})}function X(e){var r,c,u;const o={xs:24,sm:12,md:12,lg:8,xl:8,xxl:6},t={rowKey:"id",useSearchForm:!0,formConfig:{compact:!0,labelWidth:120,autoSubmitOnEnter:!0,rowProps:{gutter:8},baseColProps:d({},o),labelCol:{xs:24,sm:8,md:6,lg:8,xl:6,xxl:6},wrapperCol:{},showAdvancedButton:!0,autoAdvancedCol:3,actionColOptions:h(d({},o),{style:{textAlign:"left"}})},striped:!0,canResize:!0,minHeight:500,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},showActionColumn:!1};e&&I(t,e);function n(a){return Object.assign({column:"orderNum",order:"asc"},a)}Object.assign(t,{beforeFetch:n}),typeof e.beforeFetch=="function"&&(t.beforeFetch=function(a){return a=n(a),e.beforeFetch(a),a});const s=S([]),i=S([]),l=(r=e==null?void 0:e.rowSelection)!=null?r:{},m=M(h(d({},l),{type:(c=l.type)!=null?c:"checkbox",columnWidth:(u=l.columnWidth)!=null?u:50,selectedRows:i,selectedRowKeys:s,onChange(...a){s.value=a[0],i.value=a[1],typeof l.onChange=="function"&&l.onChange(...a)}}));return delete t.rowSelection,[...Q(t),{selectedRows:i,selectedRowKeys:s,rowSelection:m}]}const Y=e=>R.get({url:"/onlForm/api/queryTables",params:e}),Z=(e,o)=>R.post({url:`/onlForm/api/transTables//${e}`}).then(()=>{o()}),Le=$({__name:"index",emits:["register","success"],setup(e,{emit:o}){const t=E(),n=S([]),{tableContext:s}=U({designScope:"import-database-form-list",tableProps:{title:"\u6CE8\uFF1A\u5BFC\u5165\u8868\u4F1A\u6392\u9664\u914D\u7F6E\u524D\u7F00\u8868",api:Y,columns:J,maxHeight:350,pagination:{showQuickJumper:!1,showSizeChanger:!1},formConfig:{schemas:V,showAdvancedButton:!1,autoSubmitOnEnter:!1,rowProps:{gutter:0},baseColProps:{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24},showActionButtonGroup:!1}}}),[i,{reload:l}]=s,[m,{setModalProps:r,closeModal:c}]=K(),u={type:"checkbox",columnWidth:30,selectedRowKeys:n,onChange:p};function a(){return q(G,{icon:"ant-design:swap-outlined"})}function p(f){n.value=f}function g(){return x(this,null,function*(){try{n.value.length?(r({confirmLoading:!0}),yield Z(n.value.join(","),l),c(),o("success")):t.createMessage.warn("\u8BF7\u5148\u9009\u62E9\u4E00\u5F20\u8868")}finally{r({confirmLoading:!1})}})}return(f,b)=>(L(),W(w(O),H(f.$attrs,{onRegister:w(m),destroyOnClose:!0,title:"\u4ECE\u6570\u636E\u5E93\u5BFC\u5165\u8868\u5355",okButtonProps:{type:"primary",icon:a()},cancelText:"\u5173\u95ED",okText:"\u751F\u6210\u8868\u5355",onOk:g}),{default:j(()=>[z(w(N),{onRegister:w(i),rowSelection:u},null,8,["onRegister"])]),_:1},16,["onRegister","okButtonProps"]))}});export{Le as default};