var lt=Object.defineProperty,rt=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var X=(a,s,i)=>s in a?lt(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i,U=(a,s)=>{for(var i in s||(s={}))ct.call(s,i)&&X(a,i,s[i]);if(N)for(var i of N(s))ut.call(s,i)&&X(a,i,s[i]);return a},V=(a,s)=>rt(a,at(s));var v=(a,s,i)=>new Promise((x,k)=>{var w=o=>{try{_(i.next(o))}catch(b){k(b)}},y=o=>{try{_(i.throw(o))}catch(b){k(b)}},_=o=>o.done?x(o.value):Promise.resolve(o.value).then(w,y);_((i=i.apply(a,s)).next())});import{B as pt}from"./BasicTable.5bdcd073.js";import{T as dt}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import"./index.f8f2ddf0.js";import{u as mt}from"./useListPage.8a0ab0f8.js";import{l as ht,c as ft,s as q,g as _t,a as bt,_ as gt,d as Ct,b as kt}from"./OnlMockModal.83949c3b.js";import{a as H,u as wt,bn as yt,z as R,bw as Ft,bj as St,j as d,bO as j,U as g,o as m,i as C,p as f,G as c,N as B,a9 as xt,k as E,J as S,t as z,l as O,n as Mt,bo as Bt,Q as L}from"./index.6cf4d174.js";import{d as Et}from"./download.61ffebe5.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./useTable.5c9bbf6b.js";import"./render.e804ff54.js";import"./index.e3d374a0.js";import"./base64Conver.bb012c73.js";const Dt=S(" \u5220\u9664 "),It=S("\u6279\u91CF\u64CD\u4F5C "),Tt=["innerHTML"],At={key:0,style:{"font-size":"12px","font-style":"italic"}},vt=S("\u4E0B\u8F7D"),Rt=H({name:"onlMock-onlMock"}),Mo=H(V(U({},Rt),{props:{query:{type:Object,default:{}}},setup(a,{expose:s}){const i=a;wt(),yt();const x={},k=[],w=R([{label:"\u65B0\u589E",methods:"handleAdd",preIcon:"ant-design:plus-outlined"},{label:"\u5BFC\u51FA",methods:"onExportXls",preIcon:"ant-design:export-outlined"},{label:"\u5BFC\u5165",methods:"onImportXls",preIcon:"ant-design:import-outlined",btnType:"import"}]),y=R([{label:"\u7F16\u8F91",methods:"handleEdit"}]),_=R([{label:"\u8BE6\u60C5",methods:"handleDetail"},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u5417\uFF1F",methods:"handleDelete"}}]),o={handleAdd:function(){D(!0,{action:"add"})},handleEdit:function(t){D(!0,{record:t,action:"editor"})},handleDetail:function(t){D(!0,{record:t,action:"detail"})},handleDelete:function(t){return v(this,null,function*(){yield Ct({id:t.id},M)})}},b=Ft(),{currentRoute:P}=b,[G,{openModal:D}]=St(),{prefixCls:jt,tableContext:Q,onExportXls:$,onImportXls:J}=mt({tableProps:{title:"\u524D\u7AEFmock",api:ht,columns:ft,canResize:!0,beforeFetch:t=>{const u=Y(),e=d(P).query||{};let l=u.getFieldsValue();Object.keys(l).map(h=>{l[h]||(l[h]="")});const r=i.query||{},p=j(e,t,l,r);return Object.assign(t,p),Object.keys(t).map(h=>{for(let F=0;F<k.length;F++)t[k[F]]=void 0;(t[h]===""||t[h]===null)&&(t[h]=void 0)}),t},useSearchForm:!!q.length,formConfig:{labelWidth:120,schemas:q,autoSubmitOnEnter:!0,showAdvancedButton:!0,fieldMapToNumber:[],fieldMapToTime:[]},actionColumn:{fixed:"right",width:120}},exportConfig:{name:"\u524D\u7AEFmock",url:_t},importConfig:{url:bt,success:M}});o.onExportXls=$,o.onImportXls=J;const[K,I,T]=Q,{reload:W,getForm:Y}=I,{rowSelection:Z,selectedRowKeys:A}=T;function tt(t){t&&t.split(",").map(e=>{Et({url:Bt(e)})})}function ot(){return v(this,null,function*(){yield kt({ids:A.value},M)})}function M(){(A.value=[])&&W()}function et(){return d(w).map(t=>{const u=L(t),e=u.methods;return u.onClick=()=>{o[e]&&o[e]()},u})}function nt(t){return d(y).map(u=>{const e=L(u),l=e.methods,r=j({},e.popConfirm||{}),p=e.ifShowMethod;return e.ifShow=p&&o[p]?o[p](t):!0,r.methods?(r.confirm=o[r.methods]&&o[r.methods].bind(null,t),e.popConfirm=r):l&&(e.onClick=o[l]&&o[l].bind(null,t)),e})}function it(t){return d(_).map(u=>{const e=L(u),l=e.methods,r=j({},e.popConfirm||{}),p=e.ifShowMethod;return e.ifShow=p&&o[p]?o[p](t):!0,r.methods?(r.confirm=o[r.methods]&&o[r.methods].bind(null,t),e.popConfirm=r):l&&(e.onClick=o[l]&&o[l].bind(null,t)),e})}return x["./onlMockMixin.ts"]&&x["./onlMockMixin.ts"].default({methods:o,actionBtns:y,dropDownActionBtns:_,titleBtns:w,tableMethods:I,selections:T,router:b}),s({methods:o,actionBtns:y,dropDownActionBtns:_,titleBtns:w,tableMethods:I,selections:T,router:b}),(t,u)=>{const e=g("j-upload-button"),l=g("a-button"),r=g("Icon"),p=g("a-menu-item"),h=g("a-menu"),F=g("a-dropdown");return m(),C("div",null,[f(d(pt),{onRegister:d(K),rowSelection:d(Z)},{tableTitle:c(()=>[(m(!0),C(B,null,xt(et(),(n,st)=>(m(),C(B,null,[n.btnType==="import"?(m(),C(B,{key:0},[n.ifShow!==!1?(m(),E(e,{key:0,type:"primary",disabled:n.disabled===!0,preIcon:n.preIcon,onClick:n.onClick},{default:c(()=>[S(z(n.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):O("",!0)],64)):(m(),C(B,{key:1},[n.ifShow!==!1?(m(),E(l,{key:0,type:"primary",disabled:n.disabled===!0,preIcon:n.preIcon,onClick:n.onClick},{default:c(()=>[S(z(n.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):O("",!0)],64))],64))),256)),d(A).length>0?(m(),E(F,{key:0},{overlay:c(()=>[f(h,null,{default:c(()=>[f(p,{key:"1",onClick:ot},{default:c(()=>[f(r,{icon:"ant-design:delete-outlined"}),Dt]),_:1})]),_:1})]),default:c(()=>[f(l,null,{default:c(()=>[It,f(r,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):O("",!0)]),action:c(({record:n})=>[f(d(dt),{actions:nt(n),dropDownActions:it(n)},null,8,["actions","dropDownActions"])]),htmlSlot:c(({text:n})=>[Mt("div",{innerHTML:n},null,8,Tt)]),fileSlot:c(({text:n})=>[n?(m(),E(l,{key:1,ghost:!0,type:"primary",preIcon:"ant-design:download-outlined",size:"small",onClick:st=>tt(n)},{default:c(()=>[vt]),_:2},1032,["onClick"])):(m(),C("span",At,"\u65E0\u6587\u4EF6"))]),_:1},8,["onRegister","rowSelection"]),f(gt,{onRegister:d(G),onSuccess:M},null,8,["onRegister"])])}}}));export{Mo as default};
