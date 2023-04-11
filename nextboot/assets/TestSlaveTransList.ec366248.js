var lt=Object.defineProperty,rt=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var X=(a,s,i)=>s in a?lt(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i,U=(a,s)=>{for(var i in s||(s={}))ut.call(s,i)&&X(a,i,s[i]);if(N)for(var i of N(s))ct.call(s,i)&&X(a,i,s[i]);return a},V=(a,s)=>rt(a,at(s));var A=(a,s,i)=>new Promise((B,w)=>{var y=e=>{try{_(i.next(e))}catch(b){w(b)}},F=e=>{try{_(i.throw(e))}catch(b){w(b)}},_=e=>e.done?B(e.value):Promise.resolve(e.value).then(y,F);_((i=i.apply(a,s)).next())});import{B as pt}from"./BasicTable.5bdcd073.js";import{T as dt}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import"./index.f8f2ddf0.js";import{u as mt}from"./useListPage.8a0ab0f8.js";import{l as ht,c as ft,s as q,g as _t,a as bt,_ as Ct,d as gt,b as wt}from"./TestSlaveTransModal.03c48031.js";import{a as H,u as yt,bn as Ft,z as R,bw as St,bj as kt,j as d,bO as j,U as C,o as m,i as g,p as f,G as u,N as x,a9 as Bt,k as E,J as k,t as z,l as O,n as Tt,bo as xt,Q as L}from"./index.6cf4d174.js";import{d as Et}from"./download.61ffebe5.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./useTable.5c9bbf6b.js";import"./render.e804ff54.js";import"./index.e3d374a0.js";import"./base64Conver.bb012c73.js";const vt=k(" \u5220\u9664 "),Dt=k("\u6279\u91CF\u64CD\u4F5C "),It=["innerHTML"],Mt={key:0,style:{"font-size":"12px","font-style":"italic"}},At=k("\u4E0B\u8F7D"),Rt=H({name:"testSlaveTrans-testSlaveTrans"}),Be=H(V(U({},Rt),{props:{query:{type:Object,default:{}}},setup(a,{expose:s}){const i=a;yt(),Ft();const B={},w=[],y=R([{label:"\u65B0\u589E",methods:"handleAdd",preIcon:"ant-design:plus-outlined"},{label:"\u5BFC\u51FA",methods:"onExportXls",preIcon:"ant-design:export-outlined"},{label:"\u5BFC\u5165",methods:"onImportXls",preIcon:"ant-design:import-outlined",btnType:"import"}]),F=R([{label:"\u7F16\u8F91",methods:"handleEdit"}]),_=R([{label:"\u8BE6\u60C5",methods:"handleDetail"},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u5417\uFF1F",methods:"handleDelete"}}]),e={handleAdd:function(){v(!0,{action:"add"})},handleEdit:function(t){v(!0,{record:t,action:"editor"})},handleDetail:function(t){v(!0,{record:t,action:"detail"})},handleDelete:function(t){return A(this,null,function*(){yield gt({id:t.id},T)})}},b=St(),{currentRoute:P}=b,[G,{openModal:v}]=kt(),{prefixCls:jt,tableContext:Q,onExportXls:$,onImportXls:J}=mt({tableProps:{title:"\u4ECE\u8868\u7FFB\u8BD1",api:ht,columns:ft,canResize:!0,beforeFetch:t=>{const c=Y(),o=d(P).query||{};let l=c.getFieldsValue();Object.keys(l).map(h=>{l[h]||(l[h]="")});const r=i.query||{},p=j(o,t,l,r);return Object.assign(t,p),Object.keys(t).map(h=>{for(let S=0;S<w.length;S++)t[w[S]]=void 0;(t[h]===""||t[h]===null)&&(t[h]=void 0)}),t},useSearchForm:!!q.length,formConfig:{labelWidth:120,schemas:q,autoSubmitOnEnter:!0,showAdvancedButton:!0,fieldMapToNumber:[],fieldMapToTime:[]},actionColumn:{fixed:"right",width:120}},exportConfig:{name:"\u4ECE\u8868\u7FFB\u8BD1",url:_t},importConfig:{url:bt,success:T}});e.onExportXls=$,e.onImportXls=J;const[K,D,I]=Q,{reload:W,getForm:Y}=D,{rowSelection:Z,selectedRowKeys:M}=I;function tt(t){t&&t.split(",").map(o=>{Et({url:xt(o)})})}function et(){return A(this,null,function*(){yield wt({ids:M.value},T)})}function T(){(M.value=[])&&W()}function ot(){return d(y).map(t=>{const c=L(t),o=c.methods;return c.onClick=()=>{e[o]&&e[o]()},c})}function nt(t){return d(F).map(c=>{const o=L(c),l=o.methods,r=j({},o.popConfirm||{}),p=o.ifShowMethod;return o.ifShow=p&&e[p]?e[p](t):!0,r.methods?(r.confirm=e[r.methods]&&e[r.methods].bind(null,t),o.popConfirm=r):l&&(o.onClick=e[l]&&e[l].bind(null,t)),o})}function it(t){return d(_).map(c=>{const o=L(c),l=o.methods,r=j({},o.popConfirm||{}),p=o.ifShowMethod;return o.ifShow=p&&e[p]?e[p](t):!0,r.methods?(r.confirm=e[r.methods]&&e[r.methods].bind(null,t),o.popConfirm=r):l&&(o.onClick=e[l]&&e[l].bind(null,t)),o})}return B["./testSlaveTransMixin.ts"]&&B["./testSlaveTransMixin.ts"].default({methods:e,actionBtns:F,dropDownActionBtns:_,titleBtns:y,tableMethods:D,selections:I,router:b}),s({methods:e,actionBtns:F,dropDownActionBtns:_,titleBtns:y,tableMethods:D,selections:I,router:b}),(t,c)=>{const o=C("j-upload-button"),l=C("a-button"),r=C("Icon"),p=C("a-menu-item"),h=C("a-menu"),S=C("a-dropdown");return m(),g("div",null,[f(d(pt),{onRegister:d(K),rowSelection:d(Z)},{tableTitle:u(()=>[(m(!0),g(x,null,Bt(ot(),(n,st)=>(m(),g(x,null,[n.btnType==="import"?(m(),g(x,{key:0},[n.ifShow!==!1?(m(),E(o,{key:0,type:"primary",disabled:n.disabled===!0,preIcon:n.preIcon,onClick:n.onClick},{default:u(()=>[k(z(n.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):O("",!0)],64)):(m(),g(x,{key:1},[n.ifShow!==!1?(m(),E(l,{key:0,type:"primary",disabled:n.disabled===!0,preIcon:n.preIcon,onClick:n.onClick},{default:u(()=>[k(z(n.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):O("",!0)],64))],64))),256)),d(M).length>0?(m(),E(S,{key:0},{overlay:u(()=>[f(h,null,{default:u(()=>[f(p,{key:"1",onClick:et},{default:u(()=>[f(r,{icon:"ant-design:delete-outlined"}),vt]),_:1})]),_:1})]),default:u(()=>[f(l,null,{default:u(()=>[Dt,f(r,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):O("",!0)]),action:u(({record:n})=>[f(d(dt),{actions:nt(n),dropDownActions:it(n)},null,8,["actions","dropDownActions"])]),htmlSlot:u(({text:n})=>[Tt("div",{innerHTML:n},null,8,It)]),fileSlot:u(({text:n})=>[n?(m(),E(l,{key:1,ghost:!0,type:"primary",preIcon:"ant-design:download-outlined",size:"small",onClick:st=>tt(n)},{default:u(()=>[At]),_:2},1032,["onClick"])):(m(),g("span",Mt,"\u65E0\u6587\u4EF6"))]),_:1},8,["onRegister","rowSelection"]),f(Ct,{onRegister:d(G),onSuccess:T},null,8,["onRegister"])])}}}));export{Be as default};
