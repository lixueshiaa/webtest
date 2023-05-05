var M=Object.defineProperty,U=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var y=(a,e,t)=>e in a?M(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,F=(a,e)=>{for(var t in e||(e={}))j.call(e,t)&&y(a,t,e[t]);if(w)for(var t of w(e))K.call(e,t)&&y(a,t,e[t]);return a},k=(a,e)=>U(a,$(e));var d=(a,e,t)=>new Promise((_,u)=>{var c=n=>{try{l(t.next(n))}catch(p){u(p)}},b=n=>{try{l(t.throw(n))}catch(p){u(p)}},l=n=>n.done?_(n.value):Promise.resolve(n.value).then(c,b);l((t=t.apply(a,e)).next())});import{B as O}from"./BasicTable.5bdcd073.js";import{T as P}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{u as G}from"./useListPage.8a0ab0f8.js";import"./index.f8f2ddf0.js";import H from"./JeecgOrderModal.3f2baee6.js";import J from"./JeecgOrderCustomerList.45947430.js";import L from"./JeecgOrderTicketList.49075d82.js";import{l as q,c as Q,s as W,b as X,d as Y}from"./erplist.api.c83bc335.js";import{a as S,bj as Z,f as tt,j as r,b5 as et,U as m,o as B,i as ot,n as nt,p as o,G as i,k as at,l as it,N as rt,J as f}from"./index.6cf4d174.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./useTable.5c9bbf6b.js";import"./JeecgOrderCustomerModal.ec9dc522.js";import"./JeecgOrderTicketModal.0ed37827.js";const st=f(" \u65B0\u589E"),mt=f(" \u5220\u9664 "),ct=f("\u6279\u91CF\u64CD\u4F5C "),lt=S({name:"tab-list"}),ae=S(k(F({},lt),{setup(a){const[e,{openModal:t}]=Z(),{tableContext:_}=G({tableProps:{api:q,columns:Q,canResize:!1,rowSelection:{type:"radio"},formConfig:{schemas:W},actionColumn:{width:180},pagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"]}}}),[u,{reload:c,updateTableDataRecord:b},{rowSelection:l,selectedRowKeys:n}]=_,p=tt(()=>r(n).length>0?r(n)[0]:"");et("orderId",p);function v(){t(!0,{isUpdate:!1,showFooter:!0})}function R(s){return d(this,null,function*(){t(!0,{record:s,isUpdate:!0,showFooter:!0})})}function T(s){return d(this,null,function*(){yield Y({id:s.id},c)})}function x(){return d(this,null,function*(){yield X({ids:n.value},()=>{n.value=[],c()})})}function A(){c()}function E(s){return[{label:"\u7F16\u8F91",onClick:R.bind(null,s)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:T.bind(null,s)}}]}return(s,pt)=>{const h=m("a-button"),g=m("Icon"),D=m("a-menu-item"),I=m("a-menu"),N=m("a-dropdown"),C=m("a-tab-pane"),V=m("a-tabs");return B(),ot(rt,null,[nt("div",null,[o(r(O),{onRegister:r(u),rowSelection:r(l)},{tableTitle:i(()=>[o(h,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:v},{default:i(()=>[st]),_:1}),r(n).length>0?(B(),at(N,{key:0},{overlay:i(()=>[o(I,null,{default:i(()=>[o(D,{key:"1",onClick:x},{default:i(()=>[o(g,{icon:"ant-design:delete-outlined"}),mt]),_:1})]),_:1})]),default:i(()=>[o(h,null,{default:i(()=>[ct,o(g,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):it("",!0)]),action:i(({record:z})=>[o(r(P),{actions:E(z)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),o(V,{defaultActiveKey:"1",style:{margin:"10px"}},{default:i(()=>[o(C,{tab:"\u5BA2\u6237\u4FE1\u606F",key:"1"},{default:i(()=>[o(J)]),_:1}),o(C,{tab:"\u673A\u7968\u4FE1\u606F",key:"2",forceRender:""},{default:i(()=>[o(L)]),_:1})]),_:1})]),o(H,{onRegister:r(e),onSuccess:A},null,8,["onRegister"])],64)}}}));export{ae as default};