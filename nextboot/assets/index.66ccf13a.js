var E=Object.defineProperty,w=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))I.call(t,o)&&d(e,o,t[o]);if(p)for(var o of p(t))x.call(t,o)&&d(e,o,t[o]);return e},f=(e,t)=>w(e,y(t));import{B as A}from"./BasicTable.0e5ec17a.js";import{r as i,T as M}from"./componentMap.b6eed178.js";import"./TableImg.e5f75c12.js";import v from"./DetailModal.24679fdf.js";import{g as R,e as N,s as k,r as P}from"./mynews.api.6fc9bc92.js";import{a as b,u as S,z as g,bj as Y,U as L,o as j,i as G,p as n,G as l,j as a,J as H}from"./index.397c0bf9.js";import"./index.7ab28a2b.js";import{u as U}from"./useListPage.929c84cd.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./useFormItem.3d0c36d5.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import"./api.2a8d49a5.js";import"./functional.540b215d.js";import"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useContentViewHeight.4e4c24ce.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./index.1ddf0867.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./useTable.cd2ffd0a.js";const V=[{title:"\u6807\u9898",dataIndex:"titile",width:100,align:"left"},{title:"\u6D88\u606F\u7C7B\u578B",dataIndex:"msgCategory",width:80,customRender:({text:e})=>i.renderDictNative(e,[{label:"\u901A\u77E5\u516C\u544A",value:"1",color:"blue"},{label:"\u7CFB\u7EDF\u6D88\u606F",value:"2"}],!0)},{title:"\u53D1\u5E03\u4EBA",dataIndex:"sender",width:80},{title:"\u53D1\u5E03\u65F6\u95F4",dataIndex:"sendTime",width:80},{title:"\u4F18\u5148\u7EA7",dataIndex:"priority",width:80,customRender:({text:e})=>{const t=e=="L"?"blue":e=="M"?"yellow":"red";return i.renderTag(i.renderDict(e,"priority"),t)}},{title:"\u9605\u8BFB\u72B6\u6001",dataIndex:"readFlag",width:80,customRender:({text:e})=>i.renderDictNative(e,[{label:"\u672A\u8BFB",value:"0",color:"red"},{label:"\u5DF2\u8BFB",value:"1"}],!0)}],z=[{field:"titile",label:"\u6807\u9898",component:"Input",colProps:{span:8}},{field:"sender",label:"\u53D1\u5E03\u4EBA",component:"Input",colProps:{span:8}}],J=H("\u5168\u90E8\u6807\u6CE8\u5DF2\u8BFB"),q=b({name:"monitor-mynews"}),Se=b(f(c({},q),{setup(e){S(),g([]),g({});const t={logType:"1"},[o,{openModal:B}]=Y(),{prefixCls:K,tableContext:_}=U({designScope:"mynews-list",tableProps:{title:"\u6211\u7684\u6D88\u606F",api:R,columns:V,formConfig:{schemas:z,fieldMapToTime:[["fieldTime",["createTime_begin","createTime_end"],"YYYY-MM-DD HH:mm:ss"]]}}}),[D,{reload:s}]=_;function h(r){return[{label:"\u67E5\u770B",onClick:F.bind(null,r)}]}function F(r){let u=r.anntId;N({anntId:u}).then(m=>{s(),k({anntId:u})}),B(!0,{record:r,isUpdate:!0})}function C(){P({},s)}return(r,u)=>{const m=L("a-button");return j(),G("div",null,[n(a(A),{onRegister:a(D),searchInfo:t},{tableTitle:l(()=>[n(m,{type:"primary",onClick:C},{default:l(()=>[J]),_:1})]),action:l(({record:T})=>[n(a(M),{actions:h(T)},null,8,["actions"])]),_:1},8,["onRegister"]),n(v,{onRegister:a(o)},null,8,["onRegister"])])}}}));export{Se as default};
