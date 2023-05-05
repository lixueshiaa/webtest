var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var I=(a,o,i)=>o in a?Y(a,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[o]=i,L=(a,o)=>{for(var i in o||(o={}))te.call(o,i)&&I(a,i,o[i]);if(T)for(var i of T(o))ne.call(o,i)&&I(a,i,o[i]);return a},S=(a,o)=>Z(a,ee(o));var p=(a,o,i)=>new Promise((g,w)=>{var y=d=>{try{C(i.next(d))}catch(f){w(f)}},A=d=>{try{C(i.throw(d))}catch(f){w(f)}},C=d=>d.done?g(d.value):Promise.resolve(d.value).then(y,A);C((i=i.apply(a,o)).next())});import{B as oe}from"./BasicTable.5bdcd073.js";import{T as ie}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{a as O,z as le,bj as ae,U as h,o as v,i as se,p as s,G as c,j as l,k as ue,l as re,J as b,eT as ce,bn as de}from"./index.6cf4d174.js";import"./index.f8f2ddf0.js";import{u as pe}from"./useListPage.8a0ab0f8.js";import{l as me,c as fe,g as _e,a as he,_ as ge,b as Ce,d as Ee,e as N,f as be}from"./SysFormDesignModal.c9ae4fd8.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./useTable.5c9bbf6b.js";const Be=b(" \u65B0\u589E"),we=b(" \u5BFC\u51FA"),ye=b("\u5BFC\u5165"),Ae=b(" \u5220\u9664 "),De=b("\u6279\u91CF\u64CD\u4F5C "),ke=O({name:"sysFormDesign-sysFormDesign"}),_t=O(S(L({},ke),{setup(a){const o=le([]),[i,{openModal:g}]=ae(),{prefixCls:w,tableContext:y,onExportXls:A,onImportXls:C}=pe({tableProps:{api:me,title:"\u8868\u5355\u8BBE\u8BA1\u9879\u76EE",columns:fe,canResize:!1,actionColumn:{width:240}},exportConfig:{name:"\u8868\u5355\u8BBE\u8BA1\u9879\u76EE",url:_e},importConfig:{url:he,success:D}}),[d,{reload:f,collapseAll:xe,updateTableDataRecord:k,findTableDataRecord:$,getDataSource:M},{rowSelection:P,selectedRowKeys:x}]=y;function U(){g(!0,{isUpdate:!1})}function j(e){return p(this,null,function*(){g(!0,{record:e,isUpdate:!0})})}function G(e){return p(this,null,function*(){yield be({id:e.id},D)})}function V(){return p(this,null,function*(){const e=x.value.filter(t=>!t.includes("loading"));yield Ce({ids:e},D)})}function D(){f()&&(o.value=[])}function K(e){g(!0,{record:e,isUpdate:!1})}function z(E){return p(this,arguments,function*({isUpdate:e,values:t,expandedArr:n}){if(e)k(t.id,t);else if(!t.pid)f();else{o.value=[];for(let u of l(n))yield q(u)}})}function X(e){B(e.items)&&H()}function H(){return p(this,null,function*(){if(l(o).length>0){const e=yield Ee({parentIds:l(o).join(",")});if(e.success&&e.result.records.length>0){let t=e.result.records;const n=new Map;for(let m of t){let r=m.pid;if(l(o).includes(r)){let _=n.get(r);_==null&&(_=[]),_.push(m),n.set(r,_)}}let E=n,u=m=>{m&&m.forEach(r=>{l(o).includes(r.id)&&(r.children=B(E.get(r.id)),u(r.children))})};u(M())}}})}function B(e){if(e&&e.length>0)return e.map(t=>{if(t.hasChild=="1"){let n={id:t.id+"_loadChild",name:"loading...",isLoading:!0};t.children=[n]}return t})}function J(e,t){return p(this,null,function*(){if(e){if(o.value.push(t.id),t.children.length>0&&!!t.children[0].isLoading){let n=yield N({pid:t.id});n=n.records?n.records:n,n&&n.length>0?t.children=B(n):(t.children=null,t.hasChild="0")}}else{let n=o.value.indexOf(t.id);n>=0&&o.value.splice(n,1)}})}function q(e){return p(this,null,function*(){let t=$(e);o.value.push(e);let n=yield N({pid:e});n&&n.length>0?t.children=B(n):(t.children=null,t.hasChild="0"),k(e,t)})}function Q(e){return[{label:"\u7F16\u8F91",onClick:j.bind(null,e)},{label:"\u5220\u9664",popConfirm:{title:"\u786E\u5B9A\u5220\u9664\u5417?",confirm:G.bind(null,e)}}]}const R=(e,t)=>{const{VITE_GLOB_APP_GENERATOR_LOCAL:n,VITE_GLOB_APP_GENERATOR_ONLINE:E}=ce(),u=de();t==="local"?window.open(`${n}/#/?formId=${e.id}&&token=${u}`):t==="online"&&window.open(`${E}/#/?formId=${e.id}&&token=${u}`)},W=e=>[{label:"\u6DFB\u52A0\u4E0B\u7EA7",onClick:K.bind(null,{pid:e.id})},{label:"\u8BBE\u8BA1\u5668\u672C\u5730\u5F00\u53D1",onClick:R.bind(null,e,"local")},{label:"\u8BBE\u8BA1\u5668\u7EBF\u4E0A\u5F00\u53D1",onClick:R.bind(null,e,"online")}];return(e,t)=>{const n=h("a-button"),E=h("j-upload-button"),u=h("Icon"),m=h("a-menu-item"),r=h("a-menu"),_=h("a-dropdown");return v(),se("div",null,[s(l(oe),{onRegister:l(d),rowSelection:l(P),expandedRowKeys:o.value,onExpand:J,onFetchSuccess:X},{tableTitle:c(()=>[s(n,{type:"primary",onClick:U,preIcon:"ant-design:plus-outlined"},{default:c(()=>[Be]),_:1}),s(n,{type:"primary",preIcon:"ant-design:export-outlined",onClick:l(A)},{default:c(()=>[we]),_:1},8,["onClick"]),s(E,{type:"primary",preIcon:"ant-design:import-outlined",onClick:l(C)},{default:c(()=>[ye]),_:1},8,["onClick"]),l(x).length>0?(v(),ue(_,{key:0},{overlay:c(()=>[s(r,null,{default:c(()=>[s(m,{key:"1",onClick:V},{default:c(()=>[s(u,{icon:"ant-design:delete-outlined"}),Ae]),_:1})]),_:1})]),default:c(()=>[s(n,null,{default:c(()=>[De,s(u,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):re("",!0)]),action:c(({record:F})=>[s(l(ie),{actions:Q(F),dropDownActions:W(F)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection","expandedRowKeys"]),s(ge,{onRegister:l(i),onSuccess:z},null,8,["onRegister"])])}}}));export{_t as default};