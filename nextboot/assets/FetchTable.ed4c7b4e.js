import{B as c}from"./BasicTable.0e5ec17a.js";import"./componentMap.b6eed178.js";import"./TableImg.e5f75c12.js";import{u as l}from"./useTable.cd2ffd0a.js";import{getBasicColumns as d}from"./tableData.f10f0c88.js";import{P as _}from"./index.a7c60aee.js";import{d as f}from"./table.45966168.js";import{a1 as g,a as B,U as r,o as C,k as h,G as t,p as i,J as m}from"./index.397c0bf9.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./index.7ab28a2b.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./useFormItem.3d0c36d5.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import"./api.2a8d49a5.js";import"./functional.540b215d.js";import"./FormOutlined.94f2e463.js";import"./onMountedOrActivated.752d8da8.js";import"./useSortable.e015d2cb.js";import"./index.1ddf0867.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./useContentViewHeight.4e4c24ce.js";const b=B({components:{BasicTable:c,PageWrapper:_},setup(){const[o,{reload:e}]=l({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:f,columns:d(),pagination:{pageSize:10}});function p(){e()}function a(){e({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:a}}}),k=m(" \u5237\u65B0\u5F53\u524D\u9875 "),T=m(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function F(o,e,p,a,R,D){const n=r("a-button"),s=r("BasicTable"),u=r("PageWrapper");return C(),h(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(n,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[k]),_:1},8,["onClick"]),i(n,{type:"primary",onClick:o.handleReload},{default:t(()=>[T]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var lo=g(b,[["render",F]]);export{lo as default};
