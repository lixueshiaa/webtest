import{B as i}from"./BasicTable.ebe28ef2.js";import"./componentMap.801737ea.js";import"./TableImg.a4c65e1f.js";import"./index.5d4ddfdf.js";import{c as u,d as n,a as s,b as c,e as l}from"./data.f913b94f.js";import{P as d}from"./index.7910eff5.js";import{a1 as _,a as F,U as t,o as C,k as f,G as r,p as a,J as B}from"./index.0c676cb0.js";import"./BasicForm.7ed18e1d.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import"./useFormItem.47fc2179.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import"./api.6d7ba78d.js";import"./functional.51da07bc.js";import"./FormOutlined.f1bb593e.js";import"./onMountedOrActivated.29514295.js";import"./useSortable.29b10662.js";import"./index.95c15ee4.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./props.acb18fde.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./useContentViewHeight.3c3f37af.js";const x=F({components:{BasicTable:i,PageWrapper:d},setup(){function o(){s({data:c,header:l,filename:"\u4E8C\u7EF4\u6570\u7EC4\u65B9\u5F0F\u5BFC\u51FAexcel.xlsx"})}return{aoaToExcel:o,columns:u,data:n}}}),E=B(" \u5BFC\u51FA ");function b(o,A,T,h,k,P){const e=t("a-button"),p=t("BasicTable"),m=t("PageWrapper");return C(),f(m,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u6839\u636E\u6570\u7EC4\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA"},{default:r(()=>[a(p,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[a(e,{onClick:o.aoaToExcel},{default:r(()=>[E]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"])]),_:1})}var lo=_(x,[["render",b]]);export{lo as default};