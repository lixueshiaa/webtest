var ft=Object.defineProperty,wt=Object.defineProperties;var _t=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable;var q=(d,u,i)=>u in d?ft(d,u,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[u]=i,z=(d,u)=>{for(var i in u||(u={}))gt.call(u,i)&&q(d,i,u[i]);if(V)for(var i of V(u))bt.call(u,i)&&q(d,i,u[i]);return d},H=(d,u)=>wt(d,_t(u));var F=(d,u,i)=>new Promise((x,D)=>{var B=c=>{try{_(i.next(c))}catch(g){D(g)}},E=c=>{try{_(i.throw(c))}catch(g){D(g)}},_=c=>c.done?x(c.value):Promise.resolve(c.value).then(B,E);_((i=i.apply(d,u)).next())});import{B as Ft}from"./BasicTable.18c7a455.js";import{T as At}from"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import"./index.991a4e0a.js";import{u as Ct}from"./useListPage.3c7bec34.js";import yt from"./TsLeaveModal.b97ad869.js";import St from"./TsLeaveAuditModal.fd977c82.js";import{l as Dt,c as Bt,s as P,g as Et,a as kt,b as It,d as Mt,e as xt,f as Tt,h as vt,i as Rt}from"./TsLeave.api.5b0f11de.js";import{a as $,u as jt,bn as Lt,z as N,bw as Nt,bj as G,j as m,bO as O,U as b,o as h,i as A,p as f,G as r,N as I,a9 as Ot,k as M,J as C,t as J,l as U,n as Jt,bR as Ut,by as Q,bo as Xt,Q as X}from"./index.d537950e.js";import{d as Vt}from"./download.bf76ecd3.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./useTable.090fbe83.js";import"./render.f035f14a.js";import"./index.e3d374a0.js";import"./base64Conver.bb012c73.js";const qt=C(" \u5220\u9664 "),zt=C("\u6279\u91CF\u64CD\u4F5C "),Ht=["innerHTML"],Pt={key:0,style:{"font-size":"12px","font-style":"italic"}},Gt=C("\u4E0B\u8F7D"),Qt=$({name:"tsLeave-tsLeave"}),Xe=$(H(z({},Qt),{props:{query:{type:Object,default:{}}},setup(d,{expose:u}){const i=d,{apiUrl:x=""}=jt(),D=Lt(),B={},E=[],_=N([{label:"\u65B0\u589E",methods:"handleAdd",preIcon:"ant-design:plus-outlined"},{label:"\u5BFC\u51FA",methods:"onExportXls",preIcon:"ant-design:export-outlined"},{label:"\u5BFC\u5165",methods:"onImportXls",preIcon:"ant-design:import-outlined",btnType:"import"}]),c=N([{label:"\u7F16\u8F91",methods:"handleEdit",ifShowMethod:"handleEditFlowShow"},{label:"\u63D0\u4EA4",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u63D0\u4EA4\u6D41\u7A0B\u5417\uFF1F",methods:"handleDeploy"},ifShowMethod:"handleDeployShow"},{label:"\u5F53\u524D\u6D41\u7A0B",methods:"handleShowCurFlow"}]),g=N([{label:"\u8BE6\u60C5",methods:"handleDetail"},{label:"\u5BA1\u6838",methods:"handleAudit",ifShowMethod:"handleAuditShow"},{label:"\u7EC8\u5BA1\u9A73\u56DE",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5BA1\u6838\u9A73\u56DE\u5417\uFF1F",methods:"handleJudgmentReturn"},ifShowMethod:"handleJudgmentReturnShow"},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u5417\uFF1F",methods:"handleDelete"}}]),n={handleAdd:function(){v(!0,{action:"add"})},handleEdit:function(t){v(!0,{record:t,action:"editor"})},handleAudit:function(t){Z(!0,{action:"audit",record:t})},handleAuditShow:function(t){return t.audit==1},handleDeployShow:function(t){return t.exEdit&&(t.state=="start"||t.state=="reject"||t.state=="reject")},handleJudgmentReturnShow:function(t){return t.state=="end"},handleTerminateShow:function(t){return t.state=="review"},handleEditFlowShow(t){return t.exEdit&&(t.state=="start"||t.state=="reject")},handleShowCurFlow:function(t){Ut.info({title:"\u5F53\u524D\u6D41\u7A0B",width:"80%",icon:()=>Q("span"),closable:!0,content:()=>Q("iframe",{src:x+It+t.orderId+"&token="+D,width:"100%",height:"600px"})})},handleDeploy:function(t){return F(this,null,function*(){yield Mt({id:t.id,taskId:t.taskId}),k()})},handleJudgmentReturn:function(t){return F(this,null,function*(){let l=[{id:t.id,taskId:null,orderId:t.orderId,reason:"\u7EC8\u5BA1\u9A73\u56DE",displayName:"end"}];yield xt(l),k()})},handleTerminate:function(t){return F(this,null,function*(){let l=[{id:t.id,taskId:null,orderId:t.orderId,reason:"\u7EC8\u6B62\u6D41\u7A0B",displayName:"end"}];yield Tt(l),k()})},handleDetail:function(t){v(!0,{record:t,action:"detail"})},handleDelete:function(t){return F(this,null,function*(){yield vt({id:t.id},y)})}},T=Nt(),{currentRoute:K}=T,[W,{openModal:v}]=G(),[Y,{openModal:Z}]=G(),{prefixCls:$t,tableContext:tt,onExportXls:et,onImportXls:ot}=Ct({tableProps:{title:"\u8BF7\u5047\u6D41\u7A0B",api:Dt,columns:Bt,canResize:!0,beforeFetch:t=>{const l=it(),e=m(K).query||{};let a=l.getFieldsValue();Object.keys(a).map(w=>{a[w]||(a[w]="")});const s=i.query||{},p=O(e,t,a,s);return Object.assign(t,p),Object.keys(t).map(w=>{for(let S=0;S<E.length;S++)t[E[S]]=void 0;(t[w]===""||t[w]===null)&&(t[w]=void 0)}),t},useSearchForm:!!P.length,formConfig:{labelWidth:120,schemas:P,autoSubmitOnEnter:!0,showAdvancedButton:!0,fieldMapToNumber:[],fieldMapToTime:[]},actionColumn:{fixed:"right",width:250}},exportConfig:{name:"\u8BF7\u5047\u6D41\u7A0B",url:Et},importConfig:{url:kt,success:y}});n.onExportXls=et,n.onImportXls=ot;const[nt,R,j]=tt,{reload:k,getForm:it}=R,{rowSelection:ut,selectedRowKeys:L}=j;function at(t){return t.state=="end"?"green":t.audit==1?"red":"blue"}function st(t){return t.state=="start"?"\u8349\u7A3F":t.state=="reject"?"\u8349\u7A3F\uFF08\u9A73\u56DE\uFF09":t.state=="end"?"\u5DF2\u7ED3\u675F":t.audit==1?"\u9700\u5BA1\u6279":"\u5BA1\u6279\u4E2D"}function lt(t){t&&t.split(",").map(e=>{Vt({url:Xt(e)})})}function rt(){return F(this,null,function*(){yield Rt({ids:L.value},y)})}function y(){(L.value=[])&&k()}function dt(){return m(_).map(t=>{const l=X(t),e=l.methods;return l.onClick=()=>{n[e]&&n[e]()},l})}function ct(t){return m(c).map(l=>{const e=X(l),a=e.methods,s=O({},e.popConfirm||{}),p=e.ifShowMethod;return e.ifShow=p&&n[p]?n[p](t):!0,s.methods?(s.confirm=n[s.methods]&&n[s.methods].bind(null,t),e.popConfirm=s):a&&(e.onClick=n[a]&&n[a].bind(null,t)),e})}function pt(t){return m(g).map(l=>{const e=X(l),a=e.methods,s=O({},e.popConfirm||{}),p=e.ifShowMethod;return e.ifShow=p&&n[p]?n[p](t):!0,s.methods?(s.confirm=n[s.methods]&&n[s.methods].bind(null,t),e.popConfirm=s):a&&(e.onClick=n[a]&&n[a].bind(null,t)),e})}return B["./tsLeaveMixin.ts"]&&B["./tsLeaveMixin.ts"].default({methods:n,actionBtns:c,dropDownActionBtns:g,titleBtns:_,tableMethods:R,selections:j,router:T}),u({methods:n,actionBtns:c,dropDownActionBtns:g,titleBtns:_,tableMethods:R,selections:j,router:T}),(t,l)=>{const e=b("j-upload-button"),a=b("a-button"),s=b("Icon"),p=b("a-menu-item"),w=b("a-menu"),S=b("a-dropdown"),mt=b("a-tag");return h(),A("div",null,[f(m(Ft),{onRegister:m(nt),rowSelection:m(ut)},{tableTitle:r(()=>[(h(!0),A(I,null,Ot(dt(),(o,ht)=>(h(),A(I,null,[o.btnType==="import"?(h(),A(I,{key:0},[o.ifShow!==!1?(h(),M(e,{key:0,type:"primary",disabled:o.disabled===!0,preIcon:o.preIcon,onClick:o.onClick},{default:r(()=>[C(J(o.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):U("",!0)],64)):(h(),A(I,{key:1},[o.ifShow!==!1?(h(),M(a,{key:0,type:"primary",disabled:o.disabled===!0,preIcon:o.preIcon,onClick:o.onClick},{default:r(()=>[C(J(o.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):U("",!0)],64))],64))),256)),m(L).length>0?(h(),M(S,{key:0},{overlay:r(()=>[f(w,null,{default:r(()=>[f(p,{key:"1",onClick:rt},{default:r(()=>[f(s,{icon:"ant-design:delete-outlined"}),qt]),_:1})]),_:1})]),default:r(()=>[f(a,null,{default:r(()=>[zt,f(s,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):U("",!0)]),action:r(({record:o})=>[f(m(At),{actions:ct(o),dropDownActions:pt(o)},null,8,["actions","dropDownActions"])]),htmlSlot:r(({text:o})=>[Jt("div",{innerHTML:o},null,8,Ht)]),fileSlot:r(({text:o})=>[o?(h(),M(a,{key:1,ghost:!0,type:"primary",preIcon:"ant-design:download-outlined",size:"small",onClick:ht=>lt(o)},{default:r(()=>[Gt]),_:2},1032,["onClick"])):(h(),A("span",Pt,"\u65E0\u6587\u4EF6"))]),flowSlot:r(({record:o})=>[f(mt,{color:at(o)},{default:r(()=>[C(J(st(o)),1)]),_:2},1032,["color"])]),_:1},8,["onRegister","rowSelection"]),f(yt,{onRegister:m(W),onSuccess:y},null,8,["onRegister"]),f(St,{onRegister:m(Y),onSuccess:y},null,8,["onRegister"])])}}}));export{Xe as default};
