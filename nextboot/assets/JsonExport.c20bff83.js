import{B as c}from"./BasicTable.1032ab26.js";import"./componentMap.6942b0b6.js";import"./TableImg.39540c6d.js";import"./index.0f20c500.js";import{c as d,d as u,j as m}from"./data.6c7e82ae.js";import{P as F}from"./index.83e82d5a.js";import{a1 as l,a as f,U as e,o as _,k as B,G as t,p as r,J as p}from"./index.9eb451d3.js";import"./BasicForm.d1b5a4f4.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.9788db2e.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import"./useFormItem.b38dda7e.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import"./api.632a718d.js";import"./functional.8b995981.js";import"./FormOutlined.22ab579b.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useSortable.043e591f.js";import"./index.5df19bc8.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./useContentViewHeight.0d594355.js";const C=f({components:{BasicTable:c,PageWrapper:F},setup(){function o(){m({data:u,filename:"\u4F7F\u7528key\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u90E8.xlsx"})}function a(){m({data:u,header:{id:"ID",name:"\u59D3\u540D",age:"\u5E74\u9F84",no:"\u7F16\u53F7",address:"\u5730\u5740",beginTime:"\u5F00\u59CB\u65F6\u95F4",endTime:"\u7ED3\u675F\u65F6\u95F4"},filename:"\u81EA\u5B9A\u4E49\u5934\u90E8.xlsx",json2sheetOpts:{header:["name","id"]}})}return{defaultHeader:o,customHeader:a,columns:d,data:u}}}),E=p(" \u5BFC\u51FA\uFF1A\u9ED8\u8BA4\u5934\u90E8 "),A=p(" \u5BFC\u51FA\uFF1A\u81EA\u5B9A\u4E49\u5934\u90E8 ");function h(o,a,k,b,x,D){const i=e("a-button"),n=e("BasicTable"),s=e("PageWrapper");return _(),B(s,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u6839\u636EJSON\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA"},{default:t(()=>[r(n,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:t(()=>[r(i,{onClick:o.defaultHeader},{default:t(()=>[E]),_:1},8,["onClick"]),r(i,{onClick:o.customHeader},{default:t(()=>[A]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"])]),_:1})}var co=l(C,[["render",h]]);export{co as default};