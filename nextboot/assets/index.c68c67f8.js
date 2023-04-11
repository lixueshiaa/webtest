var E=Object.defineProperty,w=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))I.call(t,o)&&d(e,o,t[o]);if(p)for(var o of p(t))x.call(t,o)&&d(e,o,t[o]);return e},f=(e,t)=>w(e,y(t));import{B as A}from"./BasicTable.5bdcd073.js";import{r as i,T as M}from"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import v from"./DetailModal.b9424082.js";import{g as R,e as N,s as k,r as P}from"./mynews.api.fc2b67e2.js";import{a as b,u as S,z as g,bj as Y,U as L,o as j,i as G,p as n,G as l,j as a,J as H}from"./index.6cf4d174.js";import"./index.f8f2ddf0.js";import{u as U}from"./useListPage.8a0ab0f8.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./useTable.5c9bbf6b.js";const V=[{title:"\u6807\u9898",dataIndex:"titile",width:100,align:"left"},{title:"\u6D88\u606F\u7C7B\u578B",dataIndex:"msgCategory",width:80,customRender:({text:e})=>i.renderDictNative(e,[{label:"\u901A\u77E5\u516C\u544A",value:"1",color:"blue"},{label:"\u7CFB\u7EDF\u6D88\u606F",value:"2"}],!0)},{title:"\u53D1\u5E03\u4EBA",dataIndex:"sender",width:80},{title:"\u53D1\u5E03\u65F6\u95F4",dataIndex:"sendTime",width:80},{title:"\u4F18\u5148\u7EA7",dataIndex:"priority",width:80,customRender:({text:e})=>{const t=e=="L"?"blue":e=="M"?"yellow":"red";return i.renderTag(i.renderDict(e,"priority"),t)}},{title:"\u9605\u8BFB\u72B6\u6001",dataIndex:"readFlag",width:80,customRender:({text:e})=>i.renderDictNative(e,[{label:"\u672A\u8BFB",value:"0",color:"red"},{label:"\u5DF2\u8BFB",value:"1"}],!0)}],z=[{field:"titile",label:"\u6807\u9898",component:"Input",colProps:{span:8}},{field:"sender",label:"\u53D1\u5E03\u4EBA",component:"Input",colProps:{span:8}}],J=H("\u5168\u90E8\u6807\u6CE8\u5DF2\u8BFB"),q=b({name:"monitor-mynews"}),Se=b(f(c({},q),{setup(e){S(),g([]),g({});const t={logType:"1"},[o,{openModal:B}]=Y(),{prefixCls:K,tableContext:_}=U({designScope:"mynews-list",tableProps:{title:"\u6211\u7684\u6D88\u606F",api:R,columns:V,formConfig:{schemas:z,fieldMapToTime:[["fieldTime",["createTime_begin","createTime_end"],"YYYY-MM-DD HH:mm:ss"]]}}}),[D,{reload:s}]=_;function h(r){return[{label:"\u67E5\u770B",onClick:F.bind(null,r)}]}function F(r){let u=r.anntId;N({anntId:u}).then(m=>{s(),k({anntId:u})}),B(!0,{record:r,isUpdate:!0})}function C(){P({},s)}return(r,u)=>{const m=L("a-button");return j(),G("div",null,[n(a(A),{onRegister:a(D),searchInfo:t},{tableTitle:l(()=>[n(m,{type:"primary",onClick:C},{default:l(()=>[J]),_:1})]),action:l(({record:T})=>[n(a(M),{actions:h(T)},null,8,["actions"])]),_:1},8,["onRegister"]),n(v,{onRegister:a(o)},null,8,["onRegister"])])}}}));export{Se as default};
