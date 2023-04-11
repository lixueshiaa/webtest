var we=Object.defineProperty,Fe=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var H=(u,i,n)=>i in u?we(u,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[i]=n,J=(u,i)=>{for(var n in i||(i={}))ye.call(i,n)&&H(u,n,i[n]);if(z)for(var n of z(i))ge.call(i,n)&&H(u,n,i[n]);return u},V=(u,i)=>Fe(u,Se(i));var y=(u,i,n)=>new Promise((k,_)=>{var F=d=>{try{m(n.next(d))}catch(w){_(w)}},b=d=>{try{m(n.throw(d))}catch(w){_(w)}},m=d=>d.done?k(d.value):Promise.resolve(d.value).then(F,b);m((n=n.apply(u,i)).next())});import{b9 as te,an as _e,Q as L,bz as Ce,bm as De,a0 as Ae,a1 as ke,a as oe,u as ve,bn as Ee,z as g,bw as xe,bj as G,bO as B,j as p,U as Q,o as f,i as M,k as T,ai as K,p as D,G as A,N as j,a9 as Be,J as $,t as W,l as Y,bR as Me,by as Z}from"./index.397c0bf9.js";import{s as Ie,T as Re}from"./componentMap.b6eed178.js";import{B as Te}from"./BasicTable.0e5ec17a.js";import"./TableImg.e5f75c12.js";import"./index.7ab28a2b.js";import{u as je}from"./useListPage.929c84cd.js";import Le from"./SysFeedbackModal.300e915d.js";import Ne from"./SysFeedbackAuditModal.1f6d7e01.js";import{l as Oe,s as X,g as Pe,a as Ue,b as Je,c as Ve,d as Xe,e as qe,f as ze,h as He,i as Ge}from"./SysFeedback.api.7ff73311.js";import{N as ee}from"./index.3610e064.js";import"./index.1ddf0867.js";import"./useFormItem.3d0c36d5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./api.2a8d49a5.js";import"./props.12587afd.js";import"./JDictSelectTag.67e5d4c9.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./onMountedOrActivated.752d8da8.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./JUpload.9a731a32.js";import"./functional.540b215d.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./useForm.871d18c5.js";import"./index.a7c60aee.js";import"./useContentViewHeight.4e4c24ce.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./useTable.cd2ffd0a.js";import"./render.bf5724a4.js";import"./index.e3d374a0.js";import"./JUploadModal.57824aa5.js";var Qe=u=>{const{changeRole:i,hasPermission:n}=te(),{actionBtns:k,dropDownActionBtns:_,titleBtns:F,methods:b,tableMethods:m,selections:d,topBar:w,router:c,bottomComponent:I,bottomRef:v}=u;F.value[0].label="\u53CD\u9988\u5EFA\u8BAE",F.value[0].ifShow=n("sysFeedback:add"),k.value=[{label:"\u66F4\u6539\u72B6\u6001",methods:"handleStatus",ifShowMethod:"handleStatusShow"}],_.value=[],_e(()=>{b.handleStatus=S=>y(void 0,null,function*(){let{id:E}=L(S);const{openDialog:a}=v.value,C=yield a(Ce(()=>De(()=>import("./changeStatus.0cd132a4.js"),["assets/changeStatus.0cd132a4.js","assets/index.397c0bf9.js","assets/index.e4e4276c.css","assets/JDictSelectTag.67e5d4c9.js","assets/useFormItem.3d0c36d5.js"])),{dialogTitle:"\u66F4\u6539\u72B6\u6001"});!C||Ae.post({url:"/sysFeedback/edit",params:V(J({},C),{id:E})}).then(()=>{m.reload()})}),b.handleStatusShow=S=>S.status==="1"&&n("sysFeedback:changeStatus")})},Ke=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"}));const $e=oe({name:"sysFeedback-sysFeedback"}),We=oe(V(J({},$e),{props:{query:{type:Object,default:{}}},setup(u,{expose:i}){const n=u,{apiUrl:k=""}=ve(),_=Ee(),F={"./sysFeedbackMixin.ts":Ke},b=g(null),m=g(null),d=g(null),w=g(null),{hasPermission:c}=te(),I=[],v=g([{label:"\u65B0\u589E",methods:"handleAdd",preIcon:"ant-design:plus-outlined",ifShowMethod:"handleAddShow"},{label:"\u5BFC\u51FA",methods:"onExportXls",preIcon:"ant-design:export-outlined",ifShow:c("sysFeedback:export")}]),S=g([{label:"\u7F16\u8F91",methods:"handleEdit",ifShowMethod:"handleEditFlowShow"},{label:"\u53D1\u8D77\u5BA1\u6279",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u63D0\u4EA4\u6D41\u7A0B\u5417\uFF1F",methods:"handleDeploy"},ifShowMethod:"handleDeployShow"},{label:"\u5F53\u524D\u6D41\u7A0B",methods:"handleShowCurFlow"}]),E=g([{label:"\u8BE6\u60C5",methods:"handleDetail",ifShowMethod:"handleDetailShow"},{label:"\u5BA1\u6838",methods:"handleAudit",ifShowMethod:"handleAuditShow"},{label:"\u7EC8\u5BA1\u9A73\u56DE",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5BA1\u6838\u9A73\u56DE\u5417\uFF1F",methods:"handleJudgmentReturn"},ifShowMethod:"handleJudgmentReturnShow"},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u5417\uFF1F",methods:"handleDelete"},ifShowMethod:"handleFlowDeleteShow"}]),a={handleAdd:function(){N(!0,{action:"add"})},handleEdit:function(e){N(!0,{record:e,action:"editor"})},handleAddShow:function(e){return c("sysFeedback:add")},handleEditShow:function(e){return c("sysFeedback:edit")},handleDeleteShow:function(e){return c("sysFeedback:del")},handleBatchDeleteShow:function(e){return c("sysFeedback:del")},handleDetailShow:function(e){return c("sysFeedback:detail")},handleExportShow:function(e){return c("sysFeedback:export")},handleImportShow:function(e){return c("sysFeedback:import")},handleAudit:function(e){se(!0,{action:"audit",record:e})},handleAuditShow:function(e){return e.audit==1},handleDeployShow:function(e){return e.exEdit&&(e.state=="start"||e.state=="reject")},handleJudgmentReturnShow:function(e){return e.state=="end"&&c("sysFeedback:judgmentReturn")},handleTerminateShow:function(e){return e.state=="review"&&c("sysFeedback:terminate")},handleEditFlowShow(e){return e.exEdit&&(e.state=="start"||e.state=="reject")},handleFlowDeleteShow(e){return e.exEdit&&(e.state=="start"||e.state=="reject")&&c("sysFeedback:del")},handleShowCurFlow:function(e){Me.info({title:"\u5F53\u524D\u6D41\u7A0B",width:"80%",icon:()=>Z("span"),closable:!0,content:()=>Z("iframe",{src:k+Je+e.orderId+"&token="+_,width:"100%",height:"600px"})})},handleDeploy:function(e){return y(this,null,function*(){yield Ve({id:e.id,taskId:e.taskId}),R()})},handleJudgmentReturn:function(e){return y(this,null,function*(){let l=[{id:e.id,taskId:null,orderId:e.orderId,reason:"\u7EC8\u5BA1\u9A73\u56DE",displayName:"end"}];yield Xe(l),R()})},handleTerminate:function(e){return y(this,null,function*(){let l=[{id:e.id,taskId:null,orderId:e.orderId,reason:"\u7EC8\u6B62\u6D41\u7A0B",displayName:"end"}];yield qe(l),R()})},batchHandleDelete:function(){return y(this,null,function*(){yield ze({ids:q.value},x)})},handleDetail:function(e){N(!0,{record:e,action:"detail"})},handleDelete:function(e){return y(this,null,function*(){yield He({id:e.id},x)})}},C=xe(),{currentRoute:ne}=C,[ae,{openModal:N}]=G(),[ie,{openModal:se}]=G(),le=Ie(Ge),{prefixCls:Ye,tableContext:ue,onExportXls:re,onImportXls:de}=je({tableProps:{title:"\u7CFB\u7EDF\u7528\u6237\u53CD\u9988\u8868",api:Oe,columns:le,canResize:!0,beforeFetch:e=>{const l=pe(),o=B({},p(ne).query||{});let s=l.getFieldsValue()||{};Object.keys(s).map(h=>{s[h]?Array.isArray(s[h])&&(s[h]=s[h].join(",")):s[h]=""});const t=n.query||{},r=B(o,e,s,t);return Object.assign(e,r),Object.keys(e).map(h=>{for(let U=0;U<I.length;U++)e[I[U]]=void 0;(e[h]===""||e[h]===null)&&(e[h]=void 0)}),e},useSearchForm:!!X.length,pagination:void 0,formConfig:{schemas:X,autoSubmitOnEnter:!0,actionColOptions:{span:6,style:{textAlign:"left",paddingLeft:"10px"}},labelCol:{},wrapperCol:{},baseColProps:null,showAdvancedButton:!(X.length<=4),autoAdvancedCol:4,autoAdvancedLine:99,alwaysShowLines:99,searchActionColIndexValue:0,searchActionColIndexesModel:"N",fieldMapToNumber:[],fieldMapToTime:[]},actionColumn:{fixed:"right",width:100}},exportConfig:{name:"\u7CFB\u7EDF\u7528\u6237\u53CD\u9988\u8868",url:Pe,params:B({},I.reduce((e,l)=>(e[l]=void 0,e),{}))},importConfig:{url:Ue,success:x}});a.onExportXls=re,a.onImportXls=de;const[ce,O,P]=ue,{reload:R,getForm:pe}=O,{rowSelection:me,selectedRowKeys:q}=P;function x(){(q.value=[])&&R()}function he(){return p(v).map(e=>{const l=L(e),o=l.methods;return l.onClick=()=>{a[o]&&a[o]()},l})}function fe(e){return p(S).map(l=>{const o=L(l),s=o.methods,t=B({},o.popConfirm||{}),r=o.ifShowMethod;return o.ifShow=r&&a[r]?a[r](e):!0,t.methods?(t.confirm=a[t.methods]&&a[t.methods].bind(null,e),o.popConfirm=t):s&&(o.onClick=a[s]&&a[s].bind(null,e)),o})}function be(e){return p(E).map(l=>{const o=L(l),s=o.methods,t=B({},o.popConfirm||{}),r=o.ifShowMethod;return o.ifShow=r&&a[r]?a[r](e):!0,t.methods?(t.confirm=a[t.methods]&&a[t.methods].bind(null,e),o.popConfirm=t):s&&(o.onClick=a[s]&&a[s].bind(null,e)),o})}return F["./sysFeedbackMixin.ts"]&&F["./sysFeedbackMixin.ts"].default({methods:a,actionBtns:S,dropDownActionBtns:E,titleBtns:v,tableMethods:O,selections:P,router:C,bottomComponent:b,topComponent:m,topRef:d,bottomRef:w}),i({methods:a,actionBtns:S,dropDownActionBtns:E,titleBtns:v,tableMethods:O,selections:P,router:C,bottomComponent:b,topComponent:m,topRef:d,bottomRef:w}),(e,l)=>{const o=Q("j-upload-button"),s=Q("a-button");return f(),M("div",null,[(f(),T(K(m.value),{ref_key:"topRef",ref:d},null,512)),D(p(Te),{onRegister:p(ce),rowSelection:p(me)},{tableTitle:A(()=>[(f(!0),M(j,null,Be(he(),(t,r)=>(f(),M(j,null,[t.btnType==="import"?(f(),M(j,{key:0},[t.ifShow!==!1?(f(),T(o,{key:0,type:"primary",disabled:t.disabled===!0,preIcon:t.preIcon,onClick:t.onClick},{default:A(()=>[$(W(t.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):Y("",!0)],64)):(f(),M(j,{key:1},[t.ifShow!==!1?(f(),T(s,{key:0,type:"primary",disabled:t.disabled===!0,preIcon:t.preIcon,onClick:t.onClick},{default:A(()=>[$(W(t.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):Y("",!0)],64))],64))),256))]),action:A(({record:t})=>[D(p(Re),{actions:fe(t),dropDownActions:be(t)},null,8,["actions","dropDownActions"])]),videosSlot:A(({record:t})=>[D(ee,{disabled:!0,value:t.videoList,"onUpdate:value":r=>t.videoList=r,showFileName:!1,showFileDescribe:!1,isDel:!1,isPreview:!0,isDownLoad:!1,isEditFileName:!1,isEditFileDescribe:!1},null,8,["value","onUpdate:value"])]),imgSlot:A(({record:t})=>[D(ee,{disabled:!0,value:t.imgList,"onUpdate:value":r=>t.imgList=r,showFileName:!1,showFileDescribe:!1,isDel:!1,isPreview:!0,isDownLoad:!1,isEditFileName:!1,isEditFileDescribe:!1},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","rowSelection"]),(f(),T(K(b.value),{ref_key:"bottomRef",ref:w},null,512)),D(Le,{onRegister:p(ae),onSuccess:x},null,8,["onRegister"]),D(Ne,{onRegister:p(ie),onSuccess:x},null,8,["onRegister"])])}}}));var Ht=ke(We,[["__scopeId","data-v-12071681"]]);export{Ht as default};
