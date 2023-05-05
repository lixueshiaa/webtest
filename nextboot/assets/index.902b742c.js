var E=Object.defineProperty,Y=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var T=(o,e,t)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,w=(o,e)=>{for(var t in e||(e={}))I.call(e,t)&&T(o,t,e[t]);if(C)for(var t of C(e))N.call(e,t)&&T(o,t,e[t]);return o},y=(o,e)=>Y(o,H(e));var _=(o,e,t)=>new Promise((g,u)=>{var d=n=>{try{l(t.next(n))}catch(p){u(p)}},m=n=>{try{l(t.throw(n))}catch(p){u(p)}},l=n=>n.done?g(n.value):Promise.resolve(n.value).then(d,m);l((t=t.apply(o,e)).next())});import{B as U}from"./BasicTable.1032ab26.js";import{T as V}from"./componentMap.6942b0b6.js";import"./TableImg.39540c6d.js";import"./index.9788db2e.js";import{g as j,d as L,b as P}from"./tenant.api.f8b4d861.js";import{c as G,s as J,_ as K}from"./TenantModal.8d75fbc9.js";import{a as D,bj as $,U as c,o as k,i as q,p as i,G as a,j as s,k as z,l as O,J as f}from"./index.9eb451d3.js";import{u as Q}from"./useListPage.b997c0e2.js";import"./BasicForm.d1b5a4f4.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import"./useFormItem.b38dda7e.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import"./api.632a718d.js";import"./functional.8b995981.js";import"./index.83e82d5a.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useContentViewHeight.0d594355.js";import"./FormOutlined.22ab579b.js";import"./useSortable.043e591f.js";import"./index.5df19bc8.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./useTable.44d02b40.js";const W=f("\u65B0\u589E"),X=f(" \u5220\u9664 "),Z=f("\u6279\u91CF\u64CD\u4F5C "),tt=D({name:"system-tenant"}),Jt=D(y(w({},tt),{setup(o){const[e,{openModal:t}]=$(),{prefixCls:g,tableContext:u}=Q({designScope:"tenant-template",tableProps:{title:"\u79DF\u6237\u5217\u8868",api:j,columns:G,formConfig:{schemas:J,fieldMapToTime:[["fieldTime",["beginDate","endDate"],"YYYY-MM-DD HH:mm:ss"]]}}}),[d,{reload:m},{rowSelection:l,selectedRowKeys:n}]=u;function p(r){return[{label:"\u7F16\u8F91",onClick:B.bind(null,r)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:F.bind(null,r)}}]}function x(){t(!0,{isUpdate:!1})}function B(r){t(!0,{record:r,isUpdate:!0})}function F(r){return _(this,null,function*(){yield L({id:r.id},m)})}function S(){return _(this,null,function*(){yield P({ids:n.value},m)})}return(r,et)=>{const b=c("a-button"),h=c("Icon"),M=c("a-menu-item"),v=c("a-menu"),R=c("a-dropdown");return k(),q("div",null,[i(s(U),{onRegister:s(d),rowSelection:s(l)},{tableTitle:a(()=>[i(b,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:x,style:{"margin-right":"5px"}},{default:a(()=>[W]),_:1}),s(n).length>0?(k(),z(R,{key:0},{overlay:a(()=>[i(v,null,{default:a(()=>[i(M,{key:"1",onClick:S},{default:a(()=>[i(h,{icon:"ant-design:delete-outlined"}),X]),_:1})]),_:1})]),default:a(()=>[i(b,null,{default:a(()=>[Z,i(h,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):O("",!0)]),action:a(({record:A})=>[i(s(V),{actions:p(A)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),i(K,{onRegister:s(e),onSuccess:s(m)},null,8,["onRegister","onSuccess"])])}}}));export{Jt as default};