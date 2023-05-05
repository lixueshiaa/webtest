var Q=Object.defineProperty,W=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var F=(a,o,i)=>o in a?Q(a,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[o]=i,T=(a,o)=>{for(var i in o||(o={}))Z.call(o,i)&&F(a,i,o[i]);if(D)for(var i of D(o))ee.call(o,i)&&F(a,i,o[i]);return a},v=(a,o)=>W(a,Y(o));var d=(a,o,i)=>new Promise((g,w)=>{var x=c=>{try{C(i.next(c))}catch(f){w(f)}},B=c=>{try{C(i.throw(c))}catch(f){w(f)}},C=c=>c.done?g(c.value):Promise.resolve(c.value).then(x,B);C((i=i.apply(a,o)).next())});import{B as te}from"./BasicTable.18c7a455.js";import{T as oe}from"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import{l as ne,c as ie,s as le,g as ae,a as se,_ as re,b as ue,d as ce,e as I,f as de}from"./CategoryModal.3045a567.js";import"./index.991a4e0a.js";import{u as pe}from"./useListPage.3c7bec34.js";import{a as L,z as me,bj as fe,U as _,o as A,i as he,p as s,G as u,j as l,k as _e,l as ge,J as y}from"./index.d537950e.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./useTable.090fbe83.js";const Ce=y(" \u65B0\u589E"),ye=y(" \u5BFC\u51FA"),be=y("\u5BFC\u5165"),we=y(" \u5220\u9664 "),xe=y("\u6279\u91CF\u64CD\u4F5C "),Be=L({name:"system-category"}),pt=L(v(T({},Be),{setup(a){const o=me([]),[i,{openModal:g}]=fe(),{prefixCls:w,onExportXls:x,onImportXls:B,tableContext:C}=pe({designScope:"category-template",tableProps:{title:"\u5206\u7C7B\u5B57\u5178",api:ne,columns:ie,actionColumn:{width:180},formConfig:{schemas:le}},exportConfig:{name:"\u5206\u7C7B\u5B57\u5178\u5217\u8868",url:ae},importConfig:{url:se}}),[c,{reload:f,collapseAll:ke,updateTableDataRecord:E,findTableDataRecord:M,getDataSource:U},{rowSelection:j,selectedRowKeys:R}]=C;function K(){g(!0,{isUpdate:!1})}function N(e){return d(this,null,function*(){g(!0,{record:e,isUpdate:!0})})}function V(e){return d(this,null,function*(){yield de({id:e.id},S)})}function P(){return d(this,null,function*(){const e=R.value.filter(t=>!t.includes("loading"));yield ue({ids:e},S)})}function S(){f()&&(o.value=[])}function X(e){g(!0,{record:e,isUpdate:!1})}function z(k){return d(this,arguments,function*({isUpdate:e,values:t,expandedArr:n}){if(e)E(t.id,t);else if(!t.pid)f();else{o.value=[];for(let p of l(n))yield O(p)}})}function G(e){b(e.items)&&H()}function H(){return d(this,null,function*(){if(l(o).length>0){const e=yield ce({parentIds:l(o).join(",")});if(e.success&&e.result.records.length>0){let t=e.result.records;const n=new Map;for(let m of t){let r=m.pid;if(l(o).includes(r)){let h=n.get(r);h==null&&(h=[]),h.push(m),n.set(r,h)}}let k=n,p=m=>{m&&m.forEach(r=>{l(o).includes(r.id)&&(r.children=b(k.get(r.id)),p(r.children))})};p(U())}}})}function b(e){if(e&&e.length>0)return e.map(t=>{if(t.hasChild=="1"){let n={id:t.id+"_loadChild",name:"loading...",isLoading:!0};t.children=[n]}return t})}function J(e,t){return d(this,null,function*(){if(e){if(o.value.push(t.id),t.children.length>0&&!!t.children[0].isLoading){let n=yield I({pid:t.id});n&&n.length>0?t.children=b(n):(t.children=null,t.hasChild="0")}}else{let n=o.value.indexOf(t.id);n>=0&&o.value.splice(n,1)}})}function O(e){return d(this,null,function*(){let t=M(e);o.value.push(e);let n=yield I({pid:e});n&&n.length>0?t.children=b(n):(t.children=null,t.hasChild="0"),E(e,t)})}function $(e){return[{label:"\u7F16\u8F91",onClick:N.bind(null,e)},{label:"\u5220\u9664",popConfirm:{title:"\u786E\u5B9A\u5220\u9664\u5417?",confirm:V.bind(null,e)}},{label:"\u6DFB\u52A0\u4E0B\u7EA7",onClick:X.bind(null,{pid:e.id})}]}return(e,t)=>{const n=_("a-button"),k=_("j-upload-button"),p=_("Icon"),m=_("a-menu-item"),r=_("a-menu"),h=_("a-dropdown");return A(),he("div",null,[s(l(te),{onRegister:l(c),rowSelection:l(j),expandedRowKeys:o.value,onExpand:J,onFetchSuccess:G},{tableTitle:u(()=>[s(n,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:K},{default:u(()=>[Ce]),_:1}),s(n,{type:"primary",preIcon:"ant-design:export-outlined",onClick:l(x)},{default:u(()=>[ye]),_:1},8,["onClick"]),s(k,{type:"primary",preIcon:"ant-design:import-outlined",onClick:l(B)},{default:u(()=>[be]),_:1},8,["onClick"]),l(R).length>0?(A(),_e(h,{key:0},{overlay:u(()=>[s(r,null,{default:u(()=>[s(m,{key:"1",onClick:P},{default:u(()=>[s(p,{icon:"ant-design:delete-outlined"}),we]),_:1})]),_:1})]),default:u(()=>[s(n,null,{default:u(()=>[xe,s(p,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):ge("",!0)]),action:u(({record:q})=>[s(l(oe),{actions:$(q)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection","expandedRowKeys"]),s(re,{onRegister:l(i),onSuccess:z},null,8,["onRegister"])])}}}));export{pt as default};