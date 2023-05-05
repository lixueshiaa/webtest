var M=Object.defineProperty,U=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var y=(a,e,t)=>e in a?M(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,F=(a,e)=>{for(var t in e||(e={}))j.call(e,t)&&y(a,t,e[t]);if(w)for(var t of w(e))K.call(e,t)&&y(a,t,e[t]);return a},k=(a,e)=>U(a,$(e));var d=(a,e,t)=>new Promise((_,u)=>{var c=n=>{try{l(t.next(n))}catch(p){u(p)}},b=n=>{try{l(t.throw(n))}catch(p){u(p)}},l=n=>n.done?_(n.value):Promise.resolve(n.value).then(c,b);l((t=t.apply(a,e)).next())});import{B as O}from"./BasicTable.1032ab26.js";import{T as P}from"./componentMap.6942b0b6.js";import"./TableImg.39540c6d.js";import{u as G}from"./useListPage.b997c0e2.js";import"./index.9788db2e.js";import H from"./JeecgOrderModal.f650c8d8.js";import J from"./JeecgOrderCustomerList.ff8edb04.js";import L from"./JeecgOrderTicketList.9bf38964.js";import{l as q,c as Q,s as W,b as X,d as Y}from"./erplist.api.4a35ba1a.js";import{a as S,bj as Z,f as tt,j as r,b5 as et,U as m,o as B,i as ot,n as nt,p as o,G as i,k as at,l as it,N as rt,J as f}from"./index.9eb451d3.js";import"./BasicForm.d1b5a4f4.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import"./useFormItem.b38dda7e.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import"./api.632a718d.js";import"./functional.8b995981.js";import"./index.83e82d5a.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useContentViewHeight.0d594355.js";import"./FormOutlined.22ab579b.js";import"./useSortable.043e591f.js";import"./index.5df19bc8.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./useTable.44d02b40.js";import"./JeecgOrderCustomerModal.f141bfd8.js";import"./JeecgOrderTicketModal.b244bd94.js";const st=f(" \u65B0\u589E"),mt=f(" \u5220\u9664 "),ct=f("\u6279\u91CF\u64CD\u4F5C "),lt=S({name:"tab-list"}),ae=S(k(F({},lt),{setup(a){const[e,{openModal:t}]=Z(),{tableContext:_}=G({tableProps:{api:q,columns:Q,canResize:!1,rowSelection:{type:"radio"},formConfig:{schemas:W},actionColumn:{width:180},pagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"]}}}),[u,{reload:c,updateTableDataRecord:b},{rowSelection:l,selectedRowKeys:n}]=_,p=tt(()=>r(n).length>0?r(n)[0]:"");et("orderId",p);function v(){t(!0,{isUpdate:!1,showFooter:!0})}function R(s){return d(this,null,function*(){t(!0,{record:s,isUpdate:!0,showFooter:!0})})}function T(s){return d(this,null,function*(){yield Y({id:s.id},c)})}function x(){return d(this,null,function*(){yield X({ids:n.value},()=>{n.value=[],c()})})}function A(){c()}function E(s){return[{label:"\u7F16\u8F91",onClick:R.bind(null,s)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:T.bind(null,s)}}]}return(s,pt)=>{const h=m("a-button"),g=m("Icon"),D=m("a-menu-item"),I=m("a-menu"),N=m("a-dropdown"),C=m("a-tab-pane"),V=m("a-tabs");return B(),ot(rt,null,[nt("div",null,[o(r(O),{onRegister:r(u),rowSelection:r(l)},{tableTitle:i(()=>[o(h,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:v},{default:i(()=>[st]),_:1}),r(n).length>0?(B(),at(N,{key:0},{overlay:i(()=>[o(I,null,{default:i(()=>[o(D,{key:"1",onClick:x},{default:i(()=>[o(g,{icon:"ant-design:delete-outlined"}),mt]),_:1})]),_:1})]),default:i(()=>[o(h,null,{default:i(()=>[ct,o(g,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):it("",!0)]),action:i(({record:z})=>[o(r(P),{actions:E(z)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),o(V,{defaultActiveKey:"1",style:{margin:"10px"}},{default:i(()=>[o(C,{tab:"\u5BA2\u6237\u4FE1\u606F",key:"1"},{default:i(()=>[o(J)]),_:1}),o(C,{tab:"\u673A\u7968\u4FE1\u606F",key:"2",forceRender:""},{default:i(()=>[o(L)]),_:1})]),_:1})]),o(H,{onRegister:r(e),onSuccess:A},null,8,["onRegister"])],64)}}}));export{ae as default};