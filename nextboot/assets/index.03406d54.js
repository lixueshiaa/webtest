var D=Object.defineProperty,M=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var y=(e,o,t)=>o in e?D(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,w=(e,o)=>{for(var t in o||(o={}))V.call(o,t)&&y(e,t,o[t]);if(k)for(var t of k(o))L.call(o,t)&&y(e,t,o[t]);return e},x=(e,o)=>M(e,N(o));var C=(e,o,t)=>new Promise((g,c)=>{var d=n=>{try{l(t.next(n))}catch(u){c(u)}},_=n=>{try{l(t.throw(n))}catch(u){c(u)}},l=n=>n.done?g(n.value):Promise.resolve(n.value).then(d,_);l((t=t.apply(e,o)).next())});import{B as X}from"./BasicTable.5bdcd073.js";import{T as G}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import"./index.f8f2ddf0.js";import{g as H,c as J,s as K,a as $,b as q,_ as z,d as O,e as Q}from"./PositionModal.5292d131.js";import{a as F,bj as W,U as p,o as B,i as Y,p as i,G as r,j as a,k as Z,l as tt,J as m}from"./index.6cf4d174.js";import{u as ot}from"./useListPage.8a0ab0f8.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./validator.f8adecf1.js";import"./user.api.434ee89d.js";import"./useTable.5c9bbf6b.js";const et=m("\u65B0\u589E"),nt=m(" \u5BFC\u51FA"),it=m("\u5BFC\u5165"),rt=m(" \u5220\u9664 "),at=m("\u6279\u91CF\u64CD\u4F5C "),st=F({name:"system-position"}),Yt=F(x(w({},st),{setup(e){const[o,{openModal:t}]=W(),{prefixCls:g,onExportXls:c,onImportXls:d,tableContext:_}=ot({designScope:"position-template",tableProps:{title:"\u804C\u52A1\u5217\u8868",api:H,columns:J,formConfig:{schemas:K}},exportConfig:{name:"\u804C\u52A1\u5217\u8868",url:$},importConfig:{url:q}}),[l,{reload:n},{rowSelection:u,selectedRowKeys:b}]=_;function A(s){return[{label:"\u7F16\u8F91",onClick:S.bind(null,s)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:E.bind(null,s)}}]}function I(){t(!0,{isUpdate:!1})}function S(s){t(!0,{record:s,isUpdate:!0})}function E(s){return C(this,null,function*(){yield O({id:s.id},n)})}function T(){return C(this,null,function*(){yield Q({ids:b.value},n)})}return(s,pt)=>{const f=p("a-button"),P=p("j-upload-button"),h=p("Icon"),R=p("a-menu-item"),U=p("a-menu"),j=p("a-dropdown");return B(),Y("div",null,[i(a(X),{onRegister:a(l),rowSelection:a(u)},{tableTitle:r(()=>[i(f,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:I},{default:r(()=>[et]),_:1}),i(f,{type:"primary",preIcon:"ant-design:export-outlined",onClick:a(c)},{default:r(()=>[nt]),_:1},8,["onClick"]),i(P,{type:"primary",preIcon:"ant-design:import-outlined",onClick:a(d)},{default:r(()=>[it]),_:1},8,["onClick"]),a(b).length>0?(B(),Z(j,{key:0},{overlay:r(()=>[i(U,null,{default:r(()=>[i(R,{key:"1",onClick:T},{default:r(()=>[i(h,{icon:"ant-design:delete-outlined"}),rt]),_:1})]),_:1})]),default:r(()=>[i(f,null,{default:r(()=>[at,i(h,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):tt("",!0)]),action:r(({record:v})=>[i(a(G),{actions:A(v)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),i(z,{onRegister:a(o),onSuccess:a(n)},null,8,["onRegister","onSuccess"])])}}}));export{Yt as default};