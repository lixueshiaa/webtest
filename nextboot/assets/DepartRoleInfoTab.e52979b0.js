var X=Object.defineProperty,H=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var y=(r,o,e)=>o in r?X(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,F=(r,o)=>{for(var e in o||(o={}))W.call(o,e)&&y(r,e,o[e]);if(x)for(var e of x(o))Y.call(o,e)&&y(r,e,o[e]);return r},A=(r,o)=>H(r,Q(o));var C=(r,o,e)=>new Promise((m,d)=>{var _=l=>{try{i(e.next(l))}catch(p){d(p)}},g=l=>{try{i(e.throw(l))}catch(p){d(p)}},i=l=>l.done?m(l.value):Promise.resolve(l.value).then(_,g);i((e=e.apply(r,o)).next())});import{B as Z}from"./BasicTable.1032ab26.js";import{T as ee}from"./componentMap.6942b0b6.js";import"./TableImg.39540c6d.js";import"./index.9788db2e.js";import{u as te}from"./index.cd36df4e.js";import{u as oe}from"./useListPage.b997c0e2.js";import re from"./DepartRoleModal.f17f6ff8.js";import ne from"./DepartRoleAuthDrawer.b0b38f45.js";import{c as ae,e as ie}from"./depart.user.api.5b8e68db.js";import{d as le,c as se}from"./depart.user.data.02739732.js";import{a as pe,b4 as ue,f as ce,bj as me,X as de,C as fe,U as u,o as B,i as k,p as n,G as s,j as a,N as v,l as _e,J as ge,n as E}from"./index.9eb451d3.js";import"./BasicForm.d1b5a4f4.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import"./useFormItem.b38dda7e.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import"./api.632a718d.js";import"./functional.8b995981.js";import"./index.83e82d5a.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useContentViewHeight.0d594355.js";import"./FormOutlined.22ab579b.js";import"./useSortable.043e591f.js";import"./index.5df19bc8.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./useTable.44d02b40.js";import"./DepartRoleDataRuleDrawer.eebd9751.js";import"./user.api.c26e46a3.js";const be=ge("\u6DFB\u52A0\u90E8\u95E8\u89D2\u8272"),Ce=E("span",null,"\u5220\u9664",-1),we=E("span",null,"\u6279\u91CF\u64CD\u4F5C ",-1),dt=pe({__name:"DepartRoleInfoTab",props:{data:{require:!0,type:Object}},emits:["register"],setup(r){const o=r;ue("prefixCls");const e=ce(()=>{var t;return(t=o.data)==null?void 0:t.id}),m={xs:24,sm:24,md:24,lg:12,xl:12,xxl:8},{tableContext:d,createMessage:_}=oe({tableProps:{api:ae,columns:le,canResize:!1,formConfig:{schemas:se,baseColProps:m,labelAlign:"left",labelCol:{xs:24,sm:24,md:24,lg:9,xl:7,xxl:6},wrapperCol:{},actionColOptions:A(F({},m),{style:{textAlign:"left"}})},beforeFetch(t){t.deptId=e.value}}}),[g,{reload:i,setProps:l,setLoading:p,updateTableDataRecord:T},{rowSelection:M,selectedRowKeys:b}]=d,[S,w]=me(),[j,I]=te();de(()=>o.data,()=>i()),fe(()=>{i()});function P(){b.value=[]}function N(){w.openModal(!0,{isUpdate:!1,record:{}})}function V(t){w.openModal(!0,{isUpdate:!0,record:t})}function L(t){I.openDrawer(!0,{record:t})}function D(t,c){return C(this,null,function*(){if(!e.value)_.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u90E8\u95E8");else{p(!0);let f=a(t).join(",");try{return yield ie({ids:f},c),i()}finally{p(!1)}}return Promise.reject()})}function U(){return C(this,null,function*(){try{yield D(b,!0),P()}catch(t){}})}function O({isUpdate:t,values:c}){t?T(c.id,c):i()}function $(t){return[{label:"\u7F16\u8F91",onClick:V.bind(null,t)}]}function q(t){return[{label:"\u6388\u6743",onClick:L.bind(null,t)},{label:"\u5220\u9664",color:"error",popConfirm:{title:"\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F",confirm:D.bind(null,[t.id],!1)}}]}return(t,c)=>{const f=u("a-button"),z=u("a-divider"),R=u("icon"),G=u("a-menu-item"),J=u("a-menu"),K=u("a-dropdown");return B(),k(v,null,[n(a(Z),{onRegister:a(g),rowSelection:a(M)},{tableTitle:s(()=>[n(f,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:N},{default:s(()=>[be]),_:1}),a(b).length>0?(B(),k(v,{key:0},[n(z,{type:"vertical"}),n(K,null,{overlay:s(()=>[n(J,null,{default:s(()=>[n(G,{key:"1",onClick:U},{default:s(()=>[n(R,{icon:"ant-design:delete-outlined"}),Ce]),_:1})]),_:1})]),default:s(()=>[n(f,null,{default:s(()=>[we,n(R,{icon:"akar-icons:chevron-down"})]),_:1})]),_:1})],64)):_e("",!0)]),action:s(({record:h})=>[n(a(ee),{actions:$(h),dropDownActions:q(h)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),n(re,{departId:a(e),onRegister:a(S),onSuccess:O},null,8,["departId","onRegister"]),n(ne,{onRegister:a(j)},null,8,["onRegister"])],64)}}});export{dt as default};