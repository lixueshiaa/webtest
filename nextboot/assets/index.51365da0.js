var b=Object.defineProperty,h=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,l=(o,t)=>{for(var e in t||(t={}))w.call(t,e)&&p(o,e,t[e]);if(s)for(var e of s(t))x.call(t,e)&&p(o,e,t[e]);return o},m=(o,t)=>h(o,B(t));import{B as D}from"./BasicTable.18c7a455.js";import"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import{g as F,D as S}from"./DataLogCompareModal.62f3e394.js";import{a as c,bj as T,z as M,U as R,o as y,i as L,p as i,G as d,j as r,J as P,T as j}from"./index.d537950e.js";import"./index.991a4e0a.js";import{u as k}from"./useListPage.3c7bec34.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./useTable.090fbe83.js";const v=[{title:"\u8868\u540D",dataIndex:"dataTable",width:150,align:"left"},{title:"\u6570\u636EID",dataIndex:"dataId",width:350},{title:"\u7248\u672C\u53F7",dataIndex:"dataVersion",width:100},{title:"\u6570\u636E\u5185\u5BB9",dataIndex:"dataContent"},{title:"\u521B\u5EFA\u4EBA",dataIndex:"createBy",sorter:!0,width:200}],V=[{field:"dataTable",label:"\u8868\u540D",component:"Input",colProps:{span:8}},{field:"dataId",label:"\u6570\u636EID",component:"Input",colProps:{span:8}}],A=P("\u6570\u636E\u6BD4\u8F83"),N=c({name:"monitor-datalog"}),Rt=c(m(l({},N),{setup(o){const[t,{openModal:e}]=T(),{createMessage:u}=j();M([]);const{prefixCls:U,tableContext:f}=k({designScope:"datalog-template",tableProps:{title:"\u6570\u636E\u65E5\u5FD7\u5217\u8868",api:F,columns:v,formConfig:{labelWidth:120,schemas:V},actionColumn:!1}}),[g,{reload:_},{rowSelection:E,selectedRowKeys:z,selectedRows:n}]=f;function C(){let a=n.value;if(console.info("sfsfsf",a),!a||a.length!=2)return u.warning("\u8BF7\u9009\u62E9\u4E24\u6761\u6570\u636E!"),!1;if(a[0].dataId!=a[1].dataId)return u.warning("\u8BF7\u9009\u62E9\u76F8\u540C\u7684\u6570\u636E\u5E93\u8868\u548C\u6570\u636EID\u8FDB\u884C\u6BD4\u8F83!"),!1;e(!0,{selectedRows:n,isUpdate:!0})}return(a,G)=>{const I=R("a-button");return y(),L("div",null,[i(r(D),{onRegister:r(g),rowSelection:r(E)},{tableTitle:d(()=>[i(I,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:C,style:{"margin-right":"5px"}},{default:d(()=>[A]),_:1})]),_:1},8,["onRegister","rowSelection"]),i(S,{onRegister:r(t),onSuccess:r(_)},null,8,["onRegister","onSuccess"])])}}}));export{Rt as default};
