var J=Object.defineProperty,L=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var D=(n,e,t)=>e in n?J(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,k=(n,e)=>{for(var t in e||(e={}))q.call(e,t)&&D(n,t,e[t]);if(y)for(var t of y(e))O.call(e,t)&&D(n,t,e[t]);return n},T=(n,e)=>L(n,W(e));var b=(n,e,t)=>new Promise((_,l)=>{var f=a=>{try{m(t.next(a))}catch(s){l(s)}},h=a=>{try{m(t.throw(a))}catch(s){l(s)}},m=a=>a.done?_(a.value):Promise.resolve(a.value).then(f,h);m((t=t.apply(n,e)).next())});import{B as Q}from"./BasicTable.ebe28ef2.js";import{T as X}from"./componentMap.801737ea.js";import"./TableImg.a4c65e1f.js";import{u as Y}from"./useListPage.6542e0de.js";import{u as A}from"./index.082b5cba.js";import Z from"./MenuDrawer.118c16e4.js";import ee from"./DataRuleList.5fb7395b.js";import{l as te,f as oe,g as ne,h as ie}from"./menu.data.ec163c7c.js";import{a as E,z as F,U as p,o as x,i as re,p as i,G as r,j as u,k as ae,l as ue,J as c}from"./index.0c676cb0.js";import"./BasicForm.7ed18e1d.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import"./useFormItem.47fc2179.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import"./api.6d7ba78d.js";import"./functional.51da07bc.js";import"./index.7910eff5.js";import"./onMountedOrActivated.29514295.js";import"./useContentViewHeight.3c3f37af.js";import"./FormOutlined.f1bb593e.js";import"./useSortable.29b10662.js";import"./index.95c15ee4.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./props.acb18fde.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./useTable.db680d93.js";import"./useAutoAdapt.6fb0064c.js";import"./DataRuleModal.2e7acfd3.js";import"./user.api.dab2bc95.js";import"./validator.fcbb93f1.js";const le={class:"p-4"},se=c(" \u65B0\u589E\u83DC\u5355"),pe=c("\u5C55\u5F00\u5168\u90E8"),ce=c("\u6298\u53E0\u5168\u90E8"),me=c(" \u5220\u9664 "),de=c("\u6279\u91CF\u64CD\u4F5C "),_e=E({name:"system-menu"}),pt=E(T(k({},_e),{setup(n){const e=F([]),t=F(!0),[_,{openDrawer:l}]=A(),[f,{openDrawer:h}]=A(),{prefixCls:m,tableContext:a}=Y({tableProps:{title:"\u83DC\u5355\u5217\u8868",api:te,columns:oe,size:"small",pagination:!1,isTreeTable:!0,striped:!0,useSearchForm:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},actionColumn:{width:120}}}),[s,{reload:C,expandAll:v,collapseAll:B}]=a,R={type:"checkbox",columnWidth:30,selectedRowKeys:e,onChange:S};function S(o){e.value=o}function I(){t.value=!0,l(!0,{isUpdate:!1})}function U(o){t.value=!0,l(!0,{record:o,isUpdate:!0})}function N(o){l(!0,{record:{parentId:o.id,systemType:o.systemType,menuType:o.menuType+1},isUpdate:!1})}function V(o){h(!0,{id:o.id})}function z(o){return b(this,null,function*(){yield ie({id:o.id},C)})}function K(){return b(this,null,function*(){yield ne({ids:e.value},C)})}function M(){C()}function P(o){return[{label:"\u7F16\u8F91",onClick:U.bind(null,o)}]}function $(o){return[{label:"\u6DFB\u52A0\u4E0B\u7EA7",onClick:N.bind(null,o)},{label:"\u6570\u636E\u89C4\u5219",onClick:V.bind(null,o)},{label:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:z.bind(null,o)}}]}return(o,fe)=>{const d=p("a-button"),g=p("Icon"),j=p("a-menu-item"),G=p("a-menu"),H=p("a-dropdown");return x(),re("div",le,[i(u(Q),{onRegister:u(s),rowSelection:R},{tableTitle:r(()=>[i(d,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:I},{default:r(()=>[se]),_:1}),i(d,{type:"primary",preIcon:"ic:round-expand",onClick:u(v)},{default:r(()=>[pe]),_:1},8,["onClick"]),i(d,{type:"primary",preIcon:"ic:round-compress",onClick:u(B)},{default:r(()=>[ce]),_:1},8,["onClick"]),e.value.length>0?(x(),ae(H,{key:0},{overlay:r(()=>[i(G,null,{default:r(()=>[i(j,{key:"1",onClick:K},{default:r(()=>[i(g,{icon:"ant-design:delete-outlined"}),me]),_:1})]),_:1})]),default:r(()=>[i(d,null,{default:r(()=>[de,i(g,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):ue("",!0)]),action:r(({record:w})=>[i(u(X),{actions:P(w),dropDownActions:$(w)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"]),i(Z,{onRegister:u(_),onSuccess:M,showFooter:t.value},null,8,["onRegister","showFooter"]),i(ee,{onRegister:u(f)},null,8,["onRegister"])])}}}));export{pt as default};