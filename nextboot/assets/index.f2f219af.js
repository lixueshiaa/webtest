var oe=Object.defineProperty,ne=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var K=(t,n,o)=>n in t?oe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,F=(t,n)=>{for(var o in n||(n={}))ae.call(n,o)&&K(t,o,n[o]);if(O)for(var o of O(n))ie.call(n,o)&&K(t,o,n[o]);return t},D=(t,n)=>ne(t,ue(n));var x=(t,n,o)=>new Promise((u,p)=>{var d=l=>{try{m(o.next(l))}catch(g){p(g)}},s=l=>{try{m(o.throw(l))}catch(g){p(g)}},m=l=>l.done?u(l.value):Promise.resolve(l.value).then(d,s);m((o=o.apply(t,n)).next())});import{B as le}from"./BasicTable.1032ab26.js";import{o as re,T as ce}from"./componentMap.6942b0b6.js";import"./TableImg.39540c6d.js";import{u as se}from"./useTable.44d02b40.js";import{b as me,bO as de,z as I,B as fe,T as G,ec as pe,a as L,bj as A,U as v,o as N,i as ge,p as i,G as f,k as he,l as Ce,j as _,N as be,J as E,dK as _e,by as U}from"./index.9eb451d3.js";import{s as we,a as Fe}from"./onlineNew.7fc4ec7d.js";import{_ as ye,l as Ee,c as Be,s as Se,b as De,d as xe,a as ve}from"./index.24ff7b2e.js";import"./index.9788db2e.js";import Re from"./index.33315e40.js";import Te from"./index.5af3eb0e.js";import Ae from"./index.c9bbee2c.js";import{u as ke}from"./useCopyModal.c0325820.js";import"./BasicForm.d1b5a4f4.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import"./useFormItem.b38dda7e.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import"./api.632a718d.js";import"./functional.8b995981.js";import"./index.83e82d5a.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useContentViewHeight.0d594355.js";import"./FormOutlined.22ab579b.js";import"./useSortable.043e591f.js";import"./index.5df19bc8.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./index.566a0085.js";import"./online.options.5c703e4b.js";import"./index.d8c56b63.js";import"./preview.6234825e.js";import"./index.6b613bfc.js";import"./JUploadModal.0a6b90e3.js";import"./render.9a5e321f.js";import"./index.e3d374a0.js";import"./index.5e014ff3.js";import"./index.f68faa95.js";const{handleExportXls:Me,handleImportXls:Ie}=re();function $e(t){const n=G();let o={};t.designScope&&(o=me(t.designScope));const u=je(t.tableProps),[,{getForm:p,reload:d,setLoading:s},{selectedRowKeys:m}]=u;function l(){return x(this,null,function*(){var c;let{url:h,name:a,params:b}=(c=t==null?void 0:t.exportConfig)!=null?c:{};if(h){let y=typeof a=="function"?a():a,C=yield p().validate();return b&&(C=Object.assign({},C,b)),m.value&&m.value.length>0&&(C.selections=m.value.join(",")),Me(y,h,pe(C))}else return n.createMessage.warn("\u6CA1\u6709\u4F20\u9012 exportConfig.url \u53C2\u6570"),Promise.reject()})}function g(h){var c;let{url:a,success:b}=(c=t==null?void 0:t.importConfig)!=null?c:{};return a?Ie(h,a,b||d):(n.createMessage.warn("\u6CA1\u6709\u4F20\u9012 importConfig.url \u53C2\u6570"),Promise.reject())}function w(h,a){return new Promise((b,c)=>{var C;const y=()=>x(this,null,function*(){var R,T;try{s(!0);const B=yield h();((R=a==null?void 0:a.reload)==null||R)&&d(),((T=a==null?void 0:a.clearSelection)==null||T)&&(m.value=[]),b(B)}catch(B){c(B)}finally{s(!1)}});(C=a==null?void 0:a.confirm)==null||C?n.createConfirm({iconType:"warning",title:"\u5220\u9664",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onOk:()=>y(),onCancel:()=>c()}):y()})}function r(h){return w(h,{confirm:!1,clearSelection:!1})}return D(F(F({},o),n),{onExportXls:l,onImportXls:g,doRequest:w,doDeleteRecord:r,tableContext:u})}function je(t){var l,g,w;const n=Fe,o={rowKey:"id",useSearchForm:!0,formConfig:{compact:!0,labelWidth:120,autoSubmitOnEnter:!0,rowProps:{gutter:8},baseColProps:F({},n),labelCol:we,wrapperCol:{},showAdvancedButton:!0,autoAdvancedCol:3,actionColOptions:D(F({},n),{style:{textAlign:"left"}})},striped:!0,canResize:!0,minHeight:500,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},showActionColumn:!0,actionColumn:{width:120,title:"\u64CD\u4F5C",fixed:!1,dataIndex:"action",slots:{customRender:"action"}}};t&&de(o,t);function u(r){return Object.assign({column:"createTime",order:"desc"},r)}Object.assign(o,{beforeFetch:u}),typeof t.beforeFetch=="function"&&(o.beforeFetch=function(r){return r=u(r),t.beforeFetch(r),r});const p=I([]),d=I([]),s=(l=t==null?void 0:t.rowSelection)!=null?l:{},m=fe(D(F({},s),{type:(g=s.type)!=null?g:"checkbox",columnWidth:(w=s.columnWidth)!=null?w:50,selectedRows:d,selectedRowKeys:p,onChange(...r){p.value=r[0],d.value=r[1],typeof s.onChange=="function"&&s.onChange(...r)}}));return delete o.rowSelection,[...se(o),{selectedRows:d,selectedRowKeys:p,rowSelection:m}]}const Oe=E(" \u65B0\u589E"),Ke=E(" \u81EA\u5B9A\u4E49\u6309\u94AE"),Ne=E(" \u5BFC\u5165\u6570\u636E\u5E93\u8868"),Ue=E(" \u4EE3\u7801\u751F\u6210"),Ge=E(" \u5220\u9664 "),Le=E("\u6279\u91CF\u64CD\u4F5C "),We=L({name:"online-new-cgform"}),Pt=L(D(F({},We),{setup(t){const{createCopyModal:n}=ke(),{createMessage:o}=G(),u=I([]),[p,d]=A(),[s,m]=A(),[l,g]=A(),[w,r]=A(),{tableContext:h}=$e({designScope:"online-new-template",tableProps:{title:"online\u8868\u5355\u5217\u8868",api:Ee,columns:Be,formConfig:{schemas:Se},afterFetch:()=>{u.value=[]},actionColumn:{width:120}}}),a={type:"checkbox",columnWidth:30,selectedRowKeys:u,onChange:R},[b,{reload:c,getSelectRows:y,clearSelectedRowKeys:C}]=h;function R(e){u.value=e}function T(e){return x(this,null,function*(){yield xe({ids:e.id,flag:1},c)})}function B(){return x(this,null,function*(){yield De({ids:u.value.join(","),flag:1},c)})}function W(e){d.openModal(!0,{isUpdate:!0,record:e})}function X(){let e="";const M=y()[0];u.value.length===0?e="\u8BF7\u5148\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55":u.value.length!==1?e="\u4EE3\u7801\u751F\u6210\u53EA\u80FD\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55":M.isDbSynch==="N"&&(e="\u8BF7\u5148\u540C\u6B65\u6570\u636E\u5E93\uFF01"),e?o.warn(e):r.openModal(!0,M)}function P(){g.openModal(!0)}function V(){let e="";u.value.length===0?e="\u8BF7\u9009\u4E2D 1 \u6761\u8BB0\u5F55":u.value.length!==1&&(e="\u6700\u591A\u53EA\u80FD\u9009\u4E2D 1 \u6761\u8BB0\u5F55"),e?o.warn(e):m.openModal(!0,{isUpdate:!1,id:_(u)[0]})}function z(){d.openModal(!0,{isUpdate:!1})}function k(){c()}function H(e){ve(e.id,()=>{C(),c()})}function q(e){_e.push(`/online-new/cgform/${e.id}`)}function J(e){n({title:`\u83DC\u5355\u94FE\u63A5\u3010${e.tableName}\u3011`,width:500,icon:()=>U("span"),copyText:`/web-auto/online-new/cgform/${e.id}`,content:()=>U("p",{style:{marginBottom:"15px",color:"#333"}},`/web-auto/online-new/cgform/${e.id}`)})}function Y(e){return[{label:"\u529F\u80FD\u6D4B\u8BD5",onClick:q.bind(null,e),ifShow:(e.tableType===1||e.tableType===2)&&e.isDbSynch==="Y"&&(e.formCategory==="demo"||e.formCategory==="bpm")||e.tableType===3},{label:"\u540C\u6B65\u6570\u636E\u5E93",onClick:H.bind(null,e),ifShow:e.isDbSynch==="N"},{label:"\u914D\u7F6E\u5730\u5740",onClick:J.bind(null,e),ifShow:e.tableType===1||e.tableType===2},{label:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u5417\uFF1F",confirm:T.bind(null,e)}}]}function Q(e){return[{label:"\u7F16\u8F91",onClick:W.bind(null,e)}]}return(e,M)=>{const S=v("a-button"),$=v("Icon"),Z=v("a-menu-item"),ee=v("a-menu"),te=v("a-dropdown");return N(),ge(be,null,[i(_(le),{onRegister:_(b),rowSelection:a},{tableTitle:f(()=>[i(S,{type:"primary",preIcon:"ant-design:plus",onClick:z},{default:f(()=>[Oe]),_:1}),i(S,{type:"primary",preIcon:"ant-design:highlight",onClick:V},{default:f(()=>[Ke]),_:1}),i(S,{type:"primary",preIcon:"ant-design:database",onClick:P},{default:f(()=>[Ne]),_:1}),i(S,{type:"primary",preIcon:"bx:bx-code-alt",onClick:X},{default:f(()=>[Ue]),_:1}),u.value.length>0?(N(),he(te,{key:0},{overlay:f(()=>[i(ee,null,{default:f(()=>[i(Z,{key:"1",onClick:B},{default:f(()=>[i($,{icon:"ant-design:delete-outlined"}),Ge]),_:1})]),_:1})]),default:f(()=>[i(S,null,{default:f(()=>[Le,i($,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):Ce("",!0)]),action:f(({record:j})=>[i(_(ce),{actions:Q(j),dropDownActions:Y(j)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"]),i(ye,{defaultFullscreen:!0,onRegister:_(p),onSuccess:k},null,8,["onRegister"]),i(Re,{defaultFullscreen:!0,onRegister:_(s),onSuccess:k},null,8,["onRegister"]),i(Te,{width:500,onRegister:_(l),onSuccess:k},null,8,["onRegister"]),i(Ae,{width:800,onRegister:_(w)},null,8,["onRegister"])],64)}}}));export{Pt as default};
