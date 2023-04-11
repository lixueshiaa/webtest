var se=Object.defineProperty,re=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var L=(l,r,o)=>r in l?se(l,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[r]=o,N=(l,r)=>{for(var o in r||(r={}))ae.call(r,o)&&L(l,o,r[o]);if(H)for(var o of H(r))ce.call(r,o)&&L(l,o,r[o]);return l},X=(l,r)=>re(l,le(r));var A=(l,r,o)=>new Promise((F,C)=>{var y=t=>{try{_(o.next(t))}catch(T){C(T)}},w=t=>{try{_(o.throw(t))}catch(T){C(T)}},_=t=>t.done?F(t.value):Promise.resolve(t.value).then(y,w);_((o=o.apply(l,r)).next())});import{B as ue}from"./BasicTable.0e5ec17a.js";import{T as de}from"./componentMap.b6eed178.js";import"./TableImg.e5f75c12.js";import"./index.7ab28a2b.js";import{u as me}from"./useListPage.929c84cd.js";import{l as pe,g as he,a as fe,_ as _e,d as be,b as ge}from"./DemoTestModal.7913a0a6.js";import{c as Ce,s as z}from"./DemoTest.data.b2f01f9c.js";import{a as q,z as j,bw as ye,bj as we,j as m,bO as U,U as b,o as p,i as g,p as f,G as c,N as x,a9 as Te,k as D,J as B,t as V,l as R,n as ke,bo as Be,Q as O}from"./index.397c0bf9.js";import{d as Fe}from"./download.2b828441.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./useFormItem.3d0c36d5.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import"./api.2a8d49a5.js";import"./functional.540b215d.js";import"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useContentViewHeight.4e4c24ce.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./index.1ddf0867.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./useTable.cd2ffd0a.js";import"./render.bf5724a4.js";import"./index.e3d374a0.js";import"./base64Conver.bb012c73.js";var Se=l=>{const{titleBtns:r,methods:o}=l;o.handleAdd=()=>{console.log("test11111111111111")}},xe=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"}));const De=B(" \u5220\u9664 "),Me=B("\u6279\u91CF\u64CD\u4F5C "),Ie=["innerHTML"],ve={key:0,style:{"font-size":"12px","font-style":"italic"}},Ee=B("\u4E0B\u8F7D"),Ae=q({name:"demoTest-demoTest"}),Ft=q(X(N({},Ae),{props:{query:{type:Object,default:{}}},setup(l,{expose:r}){const o=l,F={"./demoTestMixin.ts":xe},C=["createTime","areaRange"],y=j([{label:"\u65B0\u589E",methods:"handleAdd",preIcon:"ant-design:plus-outlined"},{label:"\u5BFC\u51FA",methods:"onExportXls",preIcon:"ant-design:export-outlined"},{label:"\u5BFC\u5165",methods:"onImportXls",preIcon:"ant-design:import-outlined",btnType:"import"}]),w=j([{label:"\u7F16\u8F91",methods:"handleEdit"}]),_=j([{label:"\u8BE6\u60C5",methods:"handleDetail"},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u5417\uFF1F",methods:"handleDelete"}}]),t={handleAdd:function(){M(!0,{action:"add"})},handleEdit:function(e){M(!0,{record:e,action:"editor"})},handleDetail:function(e){M(!0,{record:e,action:"detail"})},handleDelete:function(e){return A(this,null,function*(){yield be({id:e.id},S)})}},{currentRoute:T}=ye(),[P,{openModal:M}]=we(),{prefixCls:je,tableContext:Y,onExportXls:Q,onImportXls:$}=me({tableProps:{title:"demo\u6D4B\u8BD5",api:pe,columns:Ce,canResize:!0,beforeFetch:e=>{const d=K(),i=m(T).query||{};let s=d.getFieldsValue();Object.keys(s).map(h=>{s[h]||(s[h]="")});const a=o.query||{},u=U(i,e,s,a);return Object.assign(e,u),Object.keys(e).map(h=>{for(let k=0;k<C.length;k++)e[C[k]]=void 0;(e[h]===""||e[h]===null)&&(e[h]=void 0)}),e},useSearchForm:!!z.length,formConfig:{labelWidth:120,schemas:z,autoSubmitOnEnter:!0,showAdvancedButton:!0,fieldMapToNumber:[],fieldMapToTime:[["createTime",["createTime_begin","createTime_end"],"YYYY-MM-DD HH:mm:ss"]]},actionColumn:{width:120}},exportConfig:{name:"demo\u6D4B\u8BD5",url:he},importConfig:{url:fe,success:S}});t.onExportXls=Q,t.onImportXls=$;const[G,I,v]=Y,{reload:J,getForm:K}=I,{rowSelection:W,selectedRowKeys:E}=v;function Z(e){e&&e.split(",").map(i=>{Fe({url:Be(i)})})}function ee(){return A(this,null,function*(){yield ge({ids:E.value},S)})}function S(){(E.value=[])&&J()}function te(){return m(y).map(e=>{const d=O(e),i=d.methods;return d.onClick=()=>{t[i]&&t[i]()},d})}function oe(e){return m(w).map(i=>{const s=O(i),a=s.methods,u=s.ifShowMethod;return s.onClick=t[a].bind(null,e),s.ifShow=u&&t[u]?t[u](e):!0,s})}function ne(e){return m(_).map(d=>{const i=O(d),s=i.methods,a=U({},i.popConfirm||{}),u=i.ifShowMethod;return i.ifShow=u&&t[u]?t[u](e):!0,a.methods?(a.confirm=t[a.methods]&&t[a.methods].bind(null,e),i.popConfirm=a):s&&(i.onClick=t[s]&&t[s].bind(null,e)),i})}return F["./demoTestMixin.ts"]&&F["./demoTestMixin.ts"].default({methods:t,actionBtns:w,dropDownActionBtns:_,titleBtns:y,tableMethods:I,selections:v}),r({methods:t,actionBtns:w,dropDownActionBtns:_,titleBtns:y,tableMethods:I,selections:v}),(e,d)=>{const i=b("j-upload-button"),s=b("a-button"),a=b("Icon"),u=b("a-menu-item"),h=b("a-menu"),k=b("a-dropdown");return p(),g("div",null,[f(m(ue),{onRegister:m(G),rowSelection:m(W)},{tableTitle:c(()=>[(p(!0),g(x,null,Te(te(),(n,ie)=>(p(),g(x,null,[n.btnType==="import"?(p(),g(x,{key:0},[n.ifShow!==!1?(p(),D(i,{key:0,type:"primary",disabled:n.disabled===!0,preIcon:n.preIcon,onClick:n.onClick},{default:c(()=>[B(V(n.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):R("",!0)],64)):(p(),g(x,{key:1},[n.ifShow!==!1?(p(),D(s,{key:0,type:"primary",disabled:n.disabled===!0,preIcon:n.preIcon,onClick:n.onClick},{default:c(()=>[B(V(n.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):R("",!0)],64))],64))),256)),m(E).length>0?(p(),D(k,{key:0},{overlay:c(()=>[f(h,null,{default:c(()=>[f(u,{key:"1",onClick:ee},{default:c(()=>[f(a,{icon:"ant-design:delete-outlined"}),De]),_:1})]),_:1})]),default:c(()=>[f(s,null,{default:c(()=>[Me,f(a,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):R("",!0)]),action:c(({record:n})=>[f(m(de),{actions:oe(n),dropDownActions:ne(n)},null,8,["actions","dropDownActions"])]),htmlSlot:c(({text:n})=>[ke("div",{innerHTML:n},null,8,Ie)]),fileSlot:c(({text:n})=>[n?(p(),D(s,{key:1,ghost:!0,type:"primary",preIcon:"ant-design:download-outlined",size:"small",onClick:ie=>Z(n)},{default:c(()=>[Ee]),_:2},1032,["onClick"])):(p(),g("span",ve,"\u65E0\u6587\u4EF6"))]),_:1},8,["onRegister","rowSelection"]),f(_e,{onRegister:m(P),onSuccess:S},null,8,["onRegister"])])}}}));export{Ft as default};
