var W=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var oo=Object.prototype.hasOwnProperty,eo=Object.prototype.propertyIsEnumerable;var y=(i,o,e)=>o in i?W(i,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[o]=e,F=(i,o)=>{for(var e in o||(o={}))oo.call(o,e)&&y(i,e,o[e]);if(k)for(var e of k(o))eo.call(o,e)&&y(i,e,o[e]);return i},x=(i,o)=>Y(i,Z(o));var b=(i,o,e)=>new Promise((f,m)=>{var p=a=>{try{c(e.next(a))}catch(d){m(d)}},g=a=>{try{c(e.throw(a))}catch(d){m(d)}},c=a=>a.done?f(a.value):Promise.resolve(a.value).then(p,g);c((e=e.apply(i,o)).next())});import{B as to}from"./BasicTable.18c7a455.js";import{T as no}from"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import{u as _}from"./index.c1ddc319.js";import"./index.991a4e0a.js";import ro from"./RoleDrawer.8f2956e3.js";import io from"./RoleDesc.59cb9c42.js";import lo from"./RolePermissionDrawer.b52aa0d0.js";import ao from"./RoleDesignModal.ef2be48f.js";import so from"./RoleIndexModal.3919dccf.js";import uo from"./RoleUserTable.9c0ee6e3.js";import{c as mo,s as po}from"./role.data.a60d76b8.js";import{l as co,g as _o,a as fo,b as go,d as Co}from"./role.api.ebd905b4.js";import{u as wo}from"./useListPage.3c7bec34.js";import{a as U,z as bo,bj as B,U as s,o as I,i as ho,p as n,G as l,j as r,k as Do,l as Ro,N as ko,J as u}from"./index.d537950e.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./index.1fb8cef2.js";import"./RoleDataRuleDrawer.5228606f.js";import"./useTable.090fbe83.js";import"./UserDrawer.2fec507f.js";import"./user.data.a28a217f.js";import"./user.api.dbd21046.js";import"./validator.aea6ab50.js";import"./UseSelectModal.4b4a69ad.js";const yo=u(" \u65B0\u589E"),Fo=u(" \u5BFC\u51FA"),xo=u("\u5BFC\u5165"),Bo=u(" \u5220\u9664 "),Io=u("\u6279\u91CF\u64CD\u4F5C "),Uo=U({name:"system-role"}),Se=U(x(F({},Uo),{setup(i){const o=bo(!0),[e,{openDrawer:f}]=_(),[m,{openDrawer:p}]=_(),[g,{openModal:c}]=B(),[a,{openModal:d}]=B(),[v,{openDrawer:A}]=_(),[E,{openDrawer:T}]=_(),{prefixCls:vo,tableContext:M,onImportXls:S,onExportXls:$}=wo({designScope:"role-template",tableProps:{title:"\u89D2\u8272\u5217\u8868",api:co,columns:mo,formConfig:{schemas:po},actionColumn:{width:120},rowSelection:null},exportConfig:{name:"\u89D2\u8272\u5217\u8868",url:_o},importConfig:{url:fo}}),[P,{reload:C},{rowSelection:Ao,selectedRowKeys:h}]=M;function j(){o.value=!0,p(!0,{isUpdate:!1})}function N(t){o.value=!0,p(!0,{record:t,isUpdate:!0})}function V(t){o.value=!1,T(!0,{record:t,isUpdate:!0})}function X(t){return b(this,null,function*(){yield Co({id:t.id},C)})}function z(){return b(this,null,function*(){yield go({ids:h.value},C)})}function G(t){A(!0,{roleId:t.id})}function H(t){f(!0,t)}function J(t){return[{label:"\u7528\u6237",onClick:H.bind(null,t)},{label:"\u6388\u6743",onClick:G.bind(null,t)}]}function K(t){return[{label:"\u7F16\u8F91",onClick:N.bind(null,t)},{label:"\u8BE6\u60C5",onClick:V.bind(null,t)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:X.bind(null,t)}}]}return(t,Eo)=>{const w=s("a-button"),L=s("j-upload-button"),D=s("Icon"),q=s("a-menu-item"),O=s("a-menu"),Q=s("a-dropdown");return I(),ho(ko,null,[n(r(to),{onRegister:r(P)},{tableTitle:l(()=>[n(w,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:j},{default:l(()=>[yo]),_:1}),n(w,{type:"primary",preIcon:"ant-design:export-outlined",onClick:r($)},{default:l(()=>[Fo]),_:1},8,["onClick"]),n(L,{type:"primary",preIcon:"ant-design:import-outlined",onClick:r(S)},{default:l(()=>[xo]),_:1},8,["onClick"]),r(h).length>0?(I(),Do(Q,{key:0},{overlay:l(()=>[n(O,null,{default:l(()=>[n(q,{key:"1",onClick:z},{default:l(()=>[n(D,{icon:"ant-design:delete-outlined"}),Bo]),_:1})]),_:1})]),default:l(()=>[n(w,null,{default:l(()=>[Io,n(D,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):Ro("",!0)]),action:l(({record:R})=>[n(r(no),{actions:J(R),dropDownActions:K(R)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"]),n(uo,{onRegister:r(e)},null,8,["onRegister"]),n(ro,{onRegister:r(m),onSuccess:r(C),showFooter:o.value},null,8,["onRegister","onSuccess","showFooter"]),n(io,{onRegister:r(E)},null,8,["onRegister"]),n(lo,{onRegister:r(v)},null,8,["onRegister"]),n(ao,{onRegister:r(g)},null,8,["onRegister"]),n(so,{onRegister:r(a)},null,8,["onRegister"])],64)}}}));export{Se as default};
