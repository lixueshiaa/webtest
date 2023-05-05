var E=Object.defineProperty,Y=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var T=(o,e,t)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,w=(o,e)=>{for(var t in e||(e={}))I.call(e,t)&&T(o,t,e[t]);if(C)for(var t of C(e))N.call(e,t)&&T(o,t,e[t]);return o},y=(o,e)=>Y(o,H(e));var _=(o,e,t)=>new Promise((g,u)=>{var d=n=>{try{l(t.next(n))}catch(p){u(p)}},m=n=>{try{l(t.throw(n))}catch(p){u(p)}},l=n=>n.done?g(n.value):Promise.resolve(n.value).then(d,m);l((t=t.apply(o,e)).next())});import{B as U}from"./BasicTable.0e5ec17a.js";import{T as V}from"./componentMap.b6eed178.js";import"./TableImg.e5f75c12.js";import"./index.7ab28a2b.js";import{g as j,d as L,b as P}from"./tenant.api.6d93243a.js";import{c as G,s as J,_ as K}from"./TenantModal.ac70d74f.js";import{a as D,bj as $,U as c,o as k,i as q,p as i,G as a,j as s,k as z,l as O,J as f}from"./index.397c0bf9.js";import{u as Q}from"./useListPage.929c84cd.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./useFormItem.3d0c36d5.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import"./api.2a8d49a5.js";import"./functional.540b215d.js";import"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useContentViewHeight.4e4c24ce.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./index.1ddf0867.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./useTable.cd2ffd0a.js";const W=f("\u65B0\u589E"),X=f(" \u5220\u9664 "),Z=f("\u6279\u91CF\u64CD\u4F5C "),tt=D({name:"system-tenant"}),Jt=D(y(w({},tt),{setup(o){const[e,{openModal:t}]=$(),{prefixCls:g,tableContext:u}=Q({designScope:"tenant-template",tableProps:{title:"\u79DF\u6237\u5217\u8868",api:j,columns:G,formConfig:{schemas:J,fieldMapToTime:[["fieldTime",["beginDate","endDate"],"YYYY-MM-DD HH:mm:ss"]]}}}),[d,{reload:m},{rowSelection:l,selectedRowKeys:n}]=u;function p(r){return[{label:"\u7F16\u8F91",onClick:B.bind(null,r)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:F.bind(null,r)}}]}function x(){t(!0,{isUpdate:!1})}function B(r){t(!0,{record:r,isUpdate:!0})}function F(r){return _(this,null,function*(){yield L({id:r.id},m)})}function S(){return _(this,null,function*(){yield P({ids:n.value},m)})}return(r,et)=>{const b=c("a-button"),h=c("Icon"),M=c("a-menu-item"),v=c("a-menu"),R=c("a-dropdown");return k(),q("div",null,[i(s(U),{onRegister:s(d),rowSelection:s(l)},{tableTitle:a(()=>[i(b,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:x,style:{"margin-right":"5px"}},{default:a(()=>[W]),_:1}),s(n).length>0?(k(),z(R,{key:0},{overlay:a(()=>[i(v,null,{default:a(()=>[i(M,{key:"1",onClick:S},{default:a(()=>[i(h,{icon:"ant-design:delete-outlined"}),X]),_:1})]),_:1})]),default:a(()=>[i(b,null,{default:a(()=>[Z,i(h,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):O("",!0)]),action:a(({record:A})=>[i(s(V),{actions:p(A)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),i(K,{onRegister:s(e),onSuccess:s(m)},null,8,["onRegister","onSuccess"])])}}}));export{Jt as default};