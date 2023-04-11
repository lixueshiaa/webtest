var J=Object.defineProperty,L=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var D=(n,e,t)=>e in n?J(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,k=(n,e)=>{for(var t in e||(e={}))q.call(e,t)&&D(n,t,e[t]);if(y)for(var t of y(e))O.call(e,t)&&D(n,t,e[t]);return n},T=(n,e)=>L(n,W(e));var b=(n,e,t)=>new Promise((_,l)=>{var f=a=>{try{m(t.next(a))}catch(s){l(s)}},h=a=>{try{m(t.throw(a))}catch(s){l(s)}},m=a=>a.done?_(a.value):Promise.resolve(a.value).then(f,h);m((t=t.apply(n,e)).next())});import{B as Q}from"./BasicTable.5bdcd073.js";import{T as X}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{u as Y}from"./useListPage.8a0ab0f8.js";import{u as A}from"./index.9ae51836.js";import Z from"./MenuDrawer.7a3f6eb1.js";import ee from"./DataRuleList.3c393553.js";import{l as te,f as oe,g as ne,h as ie}from"./menu.data.4f5aa2e2.js";import{a as E,z as F,U as p,o as x,i as re,p as i,G as r,j as u,k as ae,l as ue,J as c}from"./index.6cf4d174.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./useTable.5c9bbf6b.js";import"./useAutoAdapt.d939140a.js";import"./DataRuleModal.5eca18b1.js";import"./user.api.434ee89d.js";import"./validator.f8adecf1.js";const le={class:"p-4"},se=c(" \u65B0\u589E\u83DC\u5355"),pe=c("\u5C55\u5F00\u5168\u90E8"),ce=c("\u6298\u53E0\u5168\u90E8"),me=c(" \u5220\u9664 "),de=c("\u6279\u91CF\u64CD\u4F5C "),_e=E({name:"system-menu"}),pt=E(T(k({},_e),{setup(n){const e=F([]),t=F(!0),[_,{openDrawer:l}]=A(),[f,{openDrawer:h}]=A(),{prefixCls:m,tableContext:a}=Y({tableProps:{title:"\u83DC\u5355\u5217\u8868",api:te,columns:oe,size:"small",pagination:!1,isTreeTable:!0,striped:!0,useSearchForm:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},actionColumn:{width:120}}}),[s,{reload:C,expandAll:v,collapseAll:B}]=a,R={type:"checkbox",columnWidth:30,selectedRowKeys:e,onChange:S};function S(o){e.value=o}function I(){t.value=!0,l(!0,{isUpdate:!1})}function U(o){t.value=!0,l(!0,{record:o,isUpdate:!0})}function N(o){l(!0,{record:{parentId:o.id,systemType:o.systemType,menuType:o.menuType+1},isUpdate:!1})}function V(o){h(!0,{id:o.id})}function z(o){return b(this,null,function*(){yield ie({id:o.id},C)})}function K(){return b(this,null,function*(){yield ne({ids:e.value},C)})}function M(){C()}function P(o){return[{label:"\u7F16\u8F91",onClick:U.bind(null,o)}]}function $(o){return[{label:"\u6DFB\u52A0\u4E0B\u7EA7",onClick:N.bind(null,o)},{label:"\u6570\u636E\u89C4\u5219",onClick:V.bind(null,o)},{label:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:z.bind(null,o)}}]}return(o,fe)=>{const d=p("a-button"),g=p("Icon"),j=p("a-menu-item"),G=p("a-menu"),H=p("a-dropdown");return x(),re("div",le,[i(u(Q),{onRegister:u(s),rowSelection:R},{tableTitle:r(()=>[i(d,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:I},{default:r(()=>[se]),_:1}),i(d,{type:"primary",preIcon:"ic:round-expand",onClick:u(v)},{default:r(()=>[pe]),_:1},8,["onClick"]),i(d,{type:"primary",preIcon:"ic:round-compress",onClick:u(B)},{default:r(()=>[ce]),_:1},8,["onClick"]),e.value.length>0?(x(),ae(H,{key:0},{overlay:r(()=>[i(G,null,{default:r(()=>[i(j,{key:"1",onClick:K},{default:r(()=>[i(g,{icon:"ant-design:delete-outlined"}),me]),_:1})]),_:1})]),default:r(()=>[i(d,null,{default:r(()=>[de,i(g,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):ue("",!0)]),action:r(({record:w})=>[i(u(X),{actions:P(w),dropDownActions:$(w)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"]),i(Z,{onRegister:u(_),onSuccess:M,showFooter:t.value},null,8,["onRegister","showFooter"]),i(ee,{onRegister:u(f)},null,8,["onRegister"])])}}}));export{pt as default};
