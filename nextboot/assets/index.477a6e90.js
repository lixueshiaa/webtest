var d=(e,i,r)=>new Promise((m,a)=>{var c=t=>{try{o(r.next(t))}catch(p){a(p)}},u=t=>{try{o(r.throw(t))}catch(p){a(p)}},o=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);o((r=r.apply(e,i)).next())});import{B as P}from"./BasicForm.3d2570da.js";import"./componentMap.b6eed178.js";import{u as _}from"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import{a1 as A,a as F,dU as b,z as g,U as l,o as C,k as D,G as s,p as n,J as v}from"./index.397c0bf9.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import h from"./PersonTable.e6b1623b.js";import{P as k}from"./index.a7c60aee.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./index.7ab28a2b.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./index.1ddf0867.js";import"./useFormItem.3d0c36d5.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./api.2a8d49a5.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./onMountedOrActivated.752d8da8.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./functional.540b215d.js";import"./BasicTable.0e5ec17a.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./TableImg.e5f75c12.js";import"./useTable.cd2ffd0a.js";import"./useContentViewHeight.4e4c24ce.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],B=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],q=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}],T=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}];const y=F({name:"FormHightPage",components:{BasicForm:P,PersonTable:h,PageWrapper:k,[b.name]:b},setup(){const e=g(null),[i,{validate:r}]=_({baseColProps:{span:6},schemas:q,showActionButtonGroup:!1}),[m,{validate:a}]=_({baseColProps:{span:6},schemas:T,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{e.value&&console.log("table data:",e.value.getDataSource());const[u,o]=yield Promise.all([r(),a()]);console.log("form data:",u,o)}catch(u){}})}return{register:i,registerTask:m,submitAll:c,tableRef:e}}}),S=v(" \u63D0\u4EA4 ");function R(e,i,r,m,a,c){const u=l("BasicForm"),o=l("a-card"),t=l("PersonTable"),p=l("a-button"),E=l("PageWrapper");return C(),D(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:s(()=>[n(p,{type:"primary",onClick:e.submitAll},{default:s(()=>[S]),_:1},8,["onClick"])]),default:s(()=>[n(o,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:s(()=>[n(u,{onRegister:e.register},null,8,["onRegister"])]),_:1}),n(o,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:s(()=>[n(u,{onRegister:e.registerTask},null,8,["onRegister"])]),_:1}),n(o,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:s(()=>[n(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Pe=A(y,[["render",R],["__scopeId","data-v-256d0148"]]);export{Pe as default};
