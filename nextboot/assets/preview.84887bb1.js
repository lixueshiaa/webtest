var ye=Object.defineProperty,Oe=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var Se=(i,e,h)=>e in i?ye(i,e,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[e]=h,s=(i,e)=>{for(var h in e||(e={}))je.call(e,h)&&Se(i,h,e[h]);if(we)for(var h of we(e))Pe.call(e,h)&&Se(i,h,e[h]);return i},J=(i,e)=>Oe(i,Ae(e));var ue=(i,e,h)=>new Promise((D,t)=>{var P=F=>{try{j(h.next(F))}catch(n){t(n)}},c=F=>{try{j(h.throw(F))}catch(n){t(n)}},j=F=>F.done?D(F.value):Promise.resolve(F.value).then(P,c);j((h=h.apply(i,e)).next())});import{B as ke}from"./BasicTable.5bdcd073.js";import{o as De,r as Ne,s as Te,T as Me}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{d as Re,g as Le,a as Ie,b as Be,c as Ee,e as Ve,f as $e,h as Je,_ as Ke}from"./index.0b28f85e.js";import{U as Ce}from"./JUpload.a8971a82.js";import"./JUploadModal.7cbabefd.js";import{eZ as me,b as Ue,bO as q,z as Z,B as qe,T as He,ec as Ye,a as We,bw as Qe,j as R,bj as ze,an as Xe,eS as Ge,U as te,o as K,i as ne,p as z,G as k,N as le,a9 as Ze,k as ie,J as oe,t as be,l as de,b6 as _e,n as et,Q as fe,bo as tt}from"./index.6cf4d174.js";import{u as nt}from"./useTable.5c9bbf6b.js";import{s as Fe,a as ot}from"./onlineNew.7fc4ec7d.js";import{q as at}from"./online.options.5c703e4b.js";import"./index.f8f2ddf0.js";import{d as st}from"./download.61ffebe5.js";import{C as ct}from"./JDictSelectTag.77cd1e49.js";import{o as lt,a as it}from"./render.e804ff54.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";import"./base64Conver.bb012c73.js";import"./index.e3d374a0.js";function rt(i,e,h){const D=e.view,t=e!=null&&e.fieldExtendJson?JSON.parse(e==null?void 0:e.fieldExtendJson.replace(/\s*/g,"")):{},P=(e==null?void 0:e.ui)||{},c=(P==null?void 0:P.widgetattrs)||{},j=[];let F=null;e!=null&&e.pattern&&((e==null?void 0:e.pattern)==="only"?F=({values:L})=>[{required:e.required===!0,trigger:"blur",validator:(_,y)=>L?new Promise((S,N)=>{Re({tableName:e.tableName,fieldName:i,fieldVal:y}).then(x=>{x.success?S(null):N(x.message||"\u6821\u9A8C\u5931\u8D25")}).catch(x=>{N(x.message||"\u9A8C\u8BC1\u5931\u8D25")})}):Promise.resolve()}]:(j.push({required:e.required===!0}),j.push({pattern:e==null?void 0:e.pattern,message:e==null?void 0:e.errorInfo})));let n={field:i,label:e.title,component:"Input",colProps:{span:h||8},required:e.required,defaultValue:e.defVal,labelWidth:e.formLabelwidth,rules:j,formSortNumber:e.formSortNumber,dynamicRules:F};switch(D){case"text":const L=t.maxlength?parseInt(t.maxlength):void 0;Object.assign(n,{component:"Input",componentProps:J(s({},c),{maxlength:L})});break;case"password":Object.assign(n,{component:"InputPassword",componentProps:s({},c)});break;case"list":Object.assign(n,{component:"JDictSelectTag",componentProps:s({type:"select",options:e.enum||[]},c)});break;case"radio":Object.assign(n,{component:"JDictSelectTag",componentProps:s({type:"radio",options:e.enum||[]},c)});break;case"checkbox":Object.assign(n,{component:"JCheckbox",componentProps:s({options:e.enum||[]},c)});break;case"switch":Object.assign(n,{component:"JSwitch",componentProps:()=>s({options:Array.isArray(t)?t:void 0},c)});break;case"date":Object.assign(n,{component:"DatePicker",componentProps:s({valueFormat:"YYYY-MM-DD"},c)});break;case"datetime":Object.assign(n,{component:"DatePicker",componentProps:s({showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss"},c)});break;case"time":Object.assign(n,{component:"TimePicker",componentProps:s({valueFormat:"HH:mm:ss"},c)});break;case"file":Object.assign(n,{component:"JUpload",componentProps:J(s({fileType:Ce.file},c),{multiple:t.uploadnum>1,maxCount:t.uploadnum>1})});break;case"image":Object.assign(n,{component:"JUpload",componentProps:J(s({fileType:Ce.image},c),{multiple:t.uploadnum>1,maxCount:t.uploadnum||0})});break;case"textarea":Object.assign(n,{component:"InputTextArea",componentProps:s({},c)});break;case"list_multi":Object.assign(n,{component:"JSelectMultiple",componentProps:s({options:e.enum||[],triggerChange:!0},c)});break;case"sel_search":Object.assign(n,{component:"JSearchSelect",componentProps:s({dict:`${e.dictTable},${e.dictText},${e.dictCode}`},c)});break;case"popup":const _=e.dictTable||"",y=e.orgFields?e.orgFields.split(","):[],S=e.destFields?e.destFields.split(","):[],N=y.length<=S.length?y.length:S.length,x=(t==null?void 0:t.popupMulti)===!0||(t==null?void 0:t.popupMulti)===!1;let U=[];for(let C=0;C<N;C++)U.push({source:y[C],target:S[C]});Object.assign(n,{component:"JPopup",componentProps:s({multi:x,code:_,fieldConfig:U},c)});break;case"cat_tree":Object.assign(n,{component:"JCategorySelect",componentProps:s({},c)});break;case"sel_depart":const E=t.multiSelect===!0||t.multiSelect==="true",H=t.store,ee=t.injectRequestParams||{};Object.assign(n,{component:"JSelectDept",componentProps:J(s({rowKey:H,multiple:E},c),{injectRequestParams:ee})});break;case"sel_user":const X=t.store,ae=t.text,pe=t.multiSelect===!0||t.multiSelect==="true"?0:1,he=t.params||{};Object.assign(n,{component:"JSelectUser",componentProps:J(s({rowKey:X,labelKey:ae},c),{maxSelectCount:pe,params:he})});break;case"umeditor":Object.assign(n,{component:"JEditor",componentProps:s({},c)});break;case"markdown":Object.assign(n,{component:"JMarkdownEditor",componentProps:s({height:300},c)});break;case"pca":Object.assign(n,s({component:"JAreaSelect",helpMessage:["component\u6A21\u5F0F"]},c));break;case"link_down":Object.assign(n,{component:"Input",componentProps:s({},c)});break;case"sel_tree":Object.assign(n,{component:"JTreeSelect",componentProps:s({dict:`${e.dict}`,pidField:e.pidField,pidValue:e.pidValue},c)});break;case"next_date_range":Object.assign(n,{component:"NextDateRange",componentProps:({formModel:C,formActionType:v})=>{const{setFieldsValue:O}=v,b=t.startDate,f=t.endDate;return s({modeType:"datatime",onChange(m){if(O({[i]:m}),b&&f){const W=m?m.split(","):[];C[b]=W[0],C[f]=W[1]}}},c)}});break;case"next_number_range":Object.assign(n,{component:"NextNumberRange",componentProps:({formModel:C})=>{const v=t.min,O=t.max;return s({onChange(b){if(v&&O){const f=b?b.split(","):[];C[v]=f[0],C[O]=f[1]}}},c)}});break;case"next_custom_select":Object.assign(n,{component:"NextCustomSelect",componentProps:({formActionType:C,formModel:v})=>{const O=t.syncForm?s({},t.syncForm):{},{setFieldsValue:b}=C;return Object.keys(O).map(f=>{n[`onUpdate:${f}`]=m=>{v[O[f]]=m}}),me.merge(s({},t),s(s({onChange(f){b({[i]:f})}},n),c))}});break;case"next_region_select":Object.assign(n,{component:"NextRegionSelect",componentProps:({formActionType:C,formModel:v})=>{const{setFieldsValue:O}=C;let b={province:"",city:"",area:""};const f=t.multiple===!0||t.multiple==="true",m=t.changeOnSelect===!0||t.changeOnSelect==="true",W=t.mode;return me.merge(b,t),Object.keys(b).map(l=>{n[`onUpdate:${l}`]=g=>{v[b[l]]=g}}),s(s({onChange(l){O({[i]:l})},multiple:f,changeOnSelect:m,mode:W},n),c)}});break;case"next_source":Object.assign(n,{component:"NextSource",componentProps:({formActionType:C,formModel:v})=>{const{setFieldsValue:O}=C;let b={firstLevel:"",secondLevel:"",thirdLevel:""};const f=t.changeOnSelect===!0||t.changeOnSelect==="true";return me.merge(b,t),Object.keys(b).map(m=>{n[`onUpdate:${m}`]=W=>{v[b[m]]=W}}),s(J(s({onChange(m){O({[i]:m})},changeOnSelect:f},n),{dictCode:e.dictCode||""}),c)}});break;case"next_map_select":Object.assign(n,{component:"NextMapSelect",componentProps:({formActionType:C,formModel:v})=>{const{setFieldsValue:O}=C;let b={lng:"",lat:"",address:""};return me.merge(b,t),Object.keys(b).map(f=>{n[`onUpdate:${f}`]=m=>{v[b[f]]=m}}),s(s({onChange(f){O({[i]:f})}},n),c)}});break;case"next_edit_control":Object.assign(n,{component:"NextEditControl",componentProps:({formActionType:C,formModel:v})=>{const{setFieldsValue:O}=C,b=t.primarykey||"id";return s(s({onChange(f){O({[i]:f})},disabled:!!t.disabled,isVerify:!!v[b],viewApi:t.viewApi||`onlForm/api/${e.tableName}/queryField`,editApi:t.editApi||`onlForm/api/${e.tableName}/editField`,viewApiMethod:t.viewApiMethod,editApiMethod:t.editApiMethod,viewApiDynamicForm:{[b]:v[b],fieldName:i},editApiDynamicForm:{[b]:v[b],fieldName:i,value:v[i]}},n),c)}});break}return n}const{handleExportXls:ut,handleImportXls:mt}=De();function dt(i){const e=He();let h={};i.designScope&&(h=Ue(i.designScope));const D=pt(i.tableProps),[,{getForm:t,reload:P,setLoading:c},{selectedRowKeys:j}]=D;function F(){return ue(this,null,function*(){var x;let{url:y,name:S,params:N}=(x=i==null?void 0:i.exportConfig)!=null?x:{};if(y){let U=typeof S=="function"?S():S,E=yield t().validate();return N&&(E=Object.assign({},E,N)),j.value&&j.value.length>0&&(E.selections=j.value.join(",")),ut(U,y,Ye(E))}else return e.createMessage.warn("\u6CA1\u6709\u4F20\u9012 exportConfig.url \u53C2\u6570"),Promise.reject()})}function n(y){var x;let{url:S,success:N}=(x=i==null?void 0:i.importConfig)!=null?x:{};return S?mt(y,S,N||P):(e.createMessage.warn("\u6CA1\u6709\u4F20\u9012 importConfig.url \u53C2\u6570"),Promise.reject())}function L(y,S){return new Promise((N,x)=>{var E;const U=()=>ue(this,null,function*(){var H,ee;try{c(!0);const X=yield y();((H=S==null?void 0:S.reload)==null||H)&&P(),((ee=S==null?void 0:S.clearSelection)==null||ee)&&(j.value=[]),N(X)}catch(X){x(X)}finally{c(!1)}});(E=S==null?void 0:S.confirm)==null||E?e.createConfirm({iconType:"warning",title:"\u5220\u9664",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onOk:()=>U(),onCancel:()=>x()}):U()})}function _(y){return L(y,{confirm:!1,clearSelection:!1})}return J(s(s({},h),e),{onExportXls:F,onImportXls:n,doRequest:L,doDeleteRecord:_,tableContext:D})}function pt(i){var F,n,L;const e=ot,h={rowKey:"id",useSearchForm:!0,formConfig:{compact:!0,labelWidth:120,autoSubmitOnEnter:!0,rowProps:{gutter:8},baseColProps:s({},e),labelCol:Fe,wrapperCol:{},showAdvancedButton:!0,autoAdvancedCol:3,actionColOptions:J(s({},e),{style:{textAlign:"left"}})},striped:!0,canResize:!0,minHeight:500,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},showActionColumn:!0,actionColumn:{width:120,title:"\u64CD\u4F5C",fixed:!1,dataIndex:"action",slots:{customRender:"action"}}};i&&q(h,i);function D(_){return Object.assign({column:"id",order:"asc"},_)}Object.assign(h,{beforeFetch:D}),typeof i.beforeFetch=="function"&&(h.beforeFetch=function(_){return _=D(_),i.beforeFetch(_),_});const t=Z([]),P=Z([]),c=(F=i==null?void 0:i.rowSelection)!=null?F:{},j=qe(J(s({},c),{type:(n=c.type)!=null?n:"checkbox",columnWidth:(L=c.columnWidth)!=null?L:50,selectedRows:P,selectedRowKeys:t,onChange(..._){t.value=_[0],P.value=_[1],typeof c.onChange=="function"&&c.onChange(..._)}}));return delete h.rowSelection,[...nt(h),{selectedRows:P,selectedRowKeys:t,rowSelection:j}]}const ht=oe(" \u5220\u9664 "),bt=oe("\u6279\u91CF\u64CD\u4F5C "),ft=["innerHTML"],gt={key:0,style:{"font-size":"12px","font-style":"italic"}},wt=oe("\u4E0B\u8F7D"),mn=We({__name:"preview",props:{id:{type:String,default:""},isPageComponent:{type:Boolean,default:!0}},setup(i){const e=i;let h={},D=Z(null);const t=Qe(),{currentRoute:P}=t,c=e.isPageComponent?R(P).params.id:e.id,[j,F]=ze(),n=Z([{label:"\u65B0\u589E",methods:"handleAdd",preIcon:"ant-design:plus-outlined",ifShowMethod:"handleAddShow"},{label:"\u5BFC\u51FA",methods:"onExportXls",preIcon:"ant-design:export-outlined",ifShowMethod:"handleExportShow"}]),L=Z([{label:"\u7F16\u8F91",methods:"handleEdit",ifShowMethod:"handleEditFlowShow"}]),_=Z([{label:"\u8BE6\u60C5",methods:"handleDetail",ifShowMethod:"handleDetailShow"}]),y=Z([]),{tableContext:S}=dt({designScope:"auto-online-preview",pagination:!0,tableProps:{columns:[],formConfig:{schemas:[],showAdvancedButton:!1}}}),[N,x,U]=S,{setProps:E,reload:H,getForm:ee}=x,{rowSelection:X,selectedRowKeys:ae}=U;let se=0;Le(c).then(l=>{const g=l||[],d=g.filter(r=>r.buttonStyle==="link"&&r.buttonStatus==="1").map(r=>({label:r.buttonName})),w=g.filter(r=>r.buttonStyle==="buttom"&&r.buttonStatus==="1").map(r=>({label:r.buttonName}));y.value=g.filter(r=>r.buttonStyle==="form"&&r.buttonStatus==="1").map(r=>({label:r.buttonName})),_.value=_.value.concat(d),n.value=n.value.concat(w)}),Promise.all([Ie(c),Be(c),Ee(c)]).then(([l,g,d])=>{const{columns:w,dictOptions:r,fieldHrefSlots:u,fieldFilterSlots:T}=l,{schema:a,head:o}=d;o.isCheckbox==="Y"?D.value=X:D.value=null,h=a.properties||{},se=o.isFixedFormLabelWidth,Object.keys(h).map(p=>{h[p].tableName=o.tableName}),a.required&&a.required.length&&a.required.map(p=>{h[p]&&(h[p].required=!0)});let I=[],M=w.map(p=>{const re=p.customRender,$=p.scopedSlots,ce={init:!1,show:!1};return p.isTotal==="1"&&I.push(p.dataIndex),$&&$.customRender==="imgSlot"?p.customRender=Ne.renderImage:$&&$.customRender==="fileSlot"?p.slots={customRender:"fileSlot"}:p.customRender=B=>lt(B,q({},p,{customRender:re}),{dictOptions:r,fieldHrefSlots:u,fieldFilterSlots:T},ce),p});const{searchFieldList:V,properties:Y}=g,A=b(V,Y),Q=o.isFixedSearchLabelWidth==="Y";M=Te(M),E({title:"AUTO\u5728\u7EBF\u8868\u5355",api:Ve(c),columns:M,beforeFetch:function(p){p=p||{};const $=ee().getFieldsValue(),ce=R(P).query;return p=q({},ce,$,p),Object.keys(p).map(B=>{const G=Y[B]||{};(p[B]===""||p[B]===null)&&(p[B]=void 0);const ve=(G.view==="number"||G.view==="date"||G.view==="datetime"||G.view==="time")&&G.mode==="group",xe=G.view==="next_search_tabs";if(ve||xe){const ge=p[B]?p[B].split(","):[];p[`${B}_begin`]=ge[0]||void 0,p[`${B}_end`]=ge[1]||void 0,p[B]=void 0}else G.view==="next_like_input_search"&&(p[B]=void 0)}),p},afterFetch:()=>{ae.value=[]},pagination:o.isPage==="N"?!1:void 0,useSearchForm:!!A.length&&o.useSearchForm==="Y",formConfig:{labelAlign:"right",layout:"horizontal",actionColOptions:{span:o.searchActionColSpanVal,style:{textAlign:"left",paddingLeft:"10px"}},labelCol:Q?{}:Fe,wrapperCol:{},showAdvancedButton:!(A.length<=o.searchAutoAdvancedCol),autoAdvancedCol:o.searchAutoAdvancedCol||4,autoAdvancedLine:99,alwaysShowLines:99,schemas:A,searchActionColIndexValue:o.searchActionColIndexValue,searchActionColIndexesModel:o.searchActionColIndexesModel},actionColumn:{width:120,title:"\u64CD\u4F5C",fixed:"right",dataIndex:"action",slots:{customRender:"action"}},showSummary:I.length>0,summaryFunc:p=>v(p,I)}),it({methods:m,actionBtns:L,dropDownActionBtns:_,titleBtns:n,tableMethods:x,selections:U,router:t},window.testDataStr),Xe(()=>{H()})});function pe(){return R(n).map(l=>{const g=fe(l),d=g.methods,w=g.ifShowMethod;return g.ifShow=w&&m[w]?m[w]():g.ifShow===!0,g.onClick=()=>{m[d]&&m[d]()},g})}function he(l){return R(L).map(g=>{const d=fe(g),w=d.methods,r=q({},d.popConfirm||{}),u=d.ifShowMethod;return d.ifShow=u&&m[u]?m[u](l):!0,r.methods?(r.confirm=m[r.methods]&&m[r.methods].bind(null,l),d.popConfirm=r):w&&(d.onClick=m[w]&&m[w].bind(null,l)),d})}function C(l){return R(_).map(g=>{const d=fe(g),w=d.methods,r=q({},d.popConfirm||{}),u=d.ifShowMethod;return d.ifShow=u&&m[u]?m[u](l):!0,r.methods?(r.confirm=m[r.methods]&&m[r.methods].bind(null,l),d.popConfirm=r):w&&(d.onClick=m[w]&&m[w].bind(null,l)),d})}function v(l,g){return[Ge(l,g)]}function O(l){l&&l.split(",").map(d=>{st({url:tt(d)})})}function b(l,g){const d=l||[],w=g||{};return d.map(r=>{let u={},T="";const a=w[r]||{};console.log(r,a);const o=a!=null&&a.searchExtendJson?JSON.parse(a==null?void 0:a.searchExtendJson.replace(/\s*/g,"")):{},I=at.find(M=>M.value===a.view)||{};if(T=I.component||"Input",a.enum&&(u.options=a.enum),a.view==="text")u.maxlength=o.maxlength,u.type=o.type;else if(a.view==="sel_search")u.dict=`${a.dictTable},${a.dictText},${a.dictCode}`;else if(a.view==="checkbox")u.dictCode=a.dictCode;else if(a.view==="radio")u.type=ct.Radio,u.dictCode=a.dictCode;else if(a.view==="sel_user")u.rowKey=o.store,u.labelKey=o.text;else if(a.view==="sel_depart"){const M=o.multiSelect===!0||o.multiSelect==="true";u.rowKey=o.store,u.multiple=M}else a.view==="sel_tree"?u={dict:a.dict,pidField:a.pidField,pidValue:a.pidValue}:a.view==="number"&&a.mode==="group"?T="NextNumberRange":(a.view==="date"||a.view==="datetime"||a.view==="time")&&a.mode==="group"?(T="NextDateRange",u.modeType=a.view):a.view==="next_custom_select"?(T="NextCustomSelect",u=q({},o)):a.view==="next_region_select"?(T="NextRegionSelect",u=({formActionType:M,formModel:V})=>{const{setFieldsValue:Y}=M;let A={province:"",city:"",area:""};const Q=o.multiple===!0||o.multiple==="true",p=o.changeOnSelect===!0||o.changeOnSelect==="true",re=o.mode;return q(A,o),Object.keys(A).map($=>{A[`onUpdate:${$}`]=ce=>{V[A[$]]=ce}}),s(s({onChange($){Y({[r]:$})},multiple:Q,changeOnSelect:p,mode:re},A),I.componentProps||{})}):a.view==="next_source"?(T="NextSource",u=({formActionType:M,formModel:V})=>{const{setFieldsValue:Y}=M;let A={firstLevel:"",secondLevel:"",thirdLevel:""};return q(A,o),Object.keys(A).map(Q=>{A[`onUpdate:${Q}`]=p=>{V[A[Q]]=p}}),s(J(s({onChange(Q){Y({[r]:Q})}},A),{dictCode:a.dictCode}),I.componentProps||{})}):a.view==="next_search_tabs"?(T="NextSearchTabs",u=s({dictCode:a.dictCode},o)):a.view==="next_like_input_search"?(T="NextLikeInputSearch",u=({formModel:M})=>{let V={superQueryMatchType:"superQueryMatchType",superQueryParams:"superQueryParams"};return q(V,o),Object.keys(V).map(Y=>{V[`onUpdate:${Y}`]=A=>{M[V[Y]]=A}}),s({},V)}):a.view==="next_tree_select"&&(u=s({},o));return u=typeof u=="function"?u:q({},I.componentProps||{},u),{label:a.title,field:r,component:T,componentProps:u,defaultValue:a.defVal||void 0,searchSortNumber:a.searchSortNumber,labelWidth:a.searchLabelwidth,colProps:{span:a.searchSpanVal||8}}}).sort((r,u)=>((r==null?void 0:r.searchSortNumber)||0)-((u==null?void 0:u.searchSortNumber)||0))}function f(l){return Object.keys(l).map(d=>rt(d,l[d],l[d].spanVal)).sort((d,w)=>(d==null?void 0:d.formSortNumber)-(w==null?void 0:w.formSortNumber))}const m={handleAdd:function(){F.openModal(!0,{schemas:f(h),action:"add",isFixedFormLabelWidth:se})},batchHandleDelete:function(){return ue(this,null,function*(){$e(c,ae.value.join(","),H)})},handleDelete:function(l){Je(c,l.id,H)},handleEditor:function(l){F.openModal(!0,{schemas:f(h),record:l,action:"editor",isFixedFormLabelWidth:se})},handleDetail:function(l){F.openModal(!0,{schemas:f(h),record:l,action:"detail",isFixedFormLabelWidth:se})},batchHandleDeleteShow:function(){return!0},calcAudit:function(l){return l.state=="end"?"green":l.audit==1?"red":"blue"},calcAuditMsg:function(l){return l.state=="start"?"\u8349\u7A3F":l.state=="reject"?"\u8349\u7A3F\uFF08\u9A73\u56DE\uFF09":l.state=="end"?"\u5DF2\u7ED3\u675F":l.audit==1?"\u9700\u5BA1\u6279":"\u5BA1\u6279\u4E2D"}};function W(){H()}return(l,g)=>{const d=te("j-upload-button"),w=te("a-button"),r=te("a-menu-item"),u=te("a-menu"),T=te("a-dropdown"),a=te("a-tag");return K(),ne(le,null,[z(R(ke),{onRegister:R(N),rowSelection:R(D)},{tableTitle:k(()=>[(K(!0),ne(le,null,Ze(pe(),(o,I)=>(K(),ne(le,null,[o.btnType==="import"?(K(),ne(le,{key:0},[o.ifShow!==!1?(K(),ie(d,{type:"primary",key:I,disabled:o.disabled===!0,preIcon:o.preIcon,onClick:o.onClick},{default:k(()=>[oe(be(o.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):de("",!0)],64)):(K(),ne(le,{key:1},[o.ifShow!==!1?(K(),ie(w,{type:"primary",key:I,disabled:o.disabled===!0,preIcon:o.preIcon,onClick:o.onClick},{default:k(()=>[oe(be(o.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):de("",!0)],64))],64))),256)),R(ae).length>0&&m.batchHandleDeleteShow()?(K(),ie(T,{key:0},{overlay:k(()=>[z(u,null,{default:k(()=>[m.handleBatchDeleteShow?(K(),ie(r,{key:"1",onClick:m.batchHandleDelete},{default:k(()=>[z(R(_e),{icon:"ant-design:delete-outlined"}),ht]),_:1},8,["onClick"])):de("",!0)]),_:1})]),default:k(()=>[z(w,null,{default:k(()=>[bt,z(R(_e),{icon:"mdi:chevron-down"})]),_:1})]),_:1})):de("",!0)]),action:k(({record:o})=>[z(R(Me),{actions:he(o),dropDownActions:C(o)},null,8,["actions","dropDownActions"])]),htmlSlot:k(({text:o})=>[et("div",{innerHTML:o},null,8,ft)]),fileSlot:k(({text:o})=>[o?(K(),ie(w,{key:1,ghost:!0,type:"primary",preIcon:"ant-design:download-outlined",size:"small",onClick:I=>O(o)},{default:k(()=>[wt]),_:2},1032,["onClick"])):(K(),ne("span",gt,"\u65E0\u6587\u4EF6"))]),flowSlot:k(({record:o})=>[z(a,{color:m.calcAudit(o)},{default:k(()=>[oe(be(m.calcAuditMsg(o)),1)]),_:2},1032,["color"])]),_:1},8,["onRegister","rowSelection"]),z(Ke,{onRegister:R(j),onSuccess:W,FormBtnList:y.value},null,8,["onRegister","FormBtnList"])],64)}}});export{mn as default};
