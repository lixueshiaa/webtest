var d=(e,i,r)=>new Promise((m,a)=>{var c=t=>{try{o(r.next(t))}catch(p){a(p)}},u=t=>{try{o(r.throw(t))}catch(p){a(p)}},o=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);o((r=r.apply(e,i)).next())});import{B as P}from"./BasicForm.d1b5a4f4.js";import"./componentMap.6942b0b6.js";import{u as _}from"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import{a1 as A,a as F,dU as b,z as g,U as l,o as C,k as D,G as s,p as n,J as v}from"./index.9eb451d3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import h from"./PersonTable.62bfdeef.js";import{P as k}from"./index.83e82d5a.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.9788db2e.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";import"./BasicTable.1032ab26.js";import"./FormOutlined.22ab579b.js";import"./useSortable.043e591f.js";import"./TableImg.39540c6d.js";import"./useTable.44d02b40.js";import"./useContentViewHeight.0d594355.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],B=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],q=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}],T=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}];const y=F({name:"FormHightPage",components:{BasicForm:P,PersonTable:h,PageWrapper:k,[b.name]:b},setup(){const e=g(null),[i,{validate:r}]=_({baseColProps:{span:6},schemas:q,showActionButtonGroup:!1}),[m,{validate:a}]=_({baseColProps:{span:6},schemas:T,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{e.value&&console.log("table data:",e.value.getDataSource());const[u,o]=yield Promise.all([r(),a()]);console.log("form data:",u,o)}catch(u){}})}return{register:i,registerTask:m,submitAll:c,tableRef:e}}}),S=v(" \u63D0\u4EA4 ");function R(e,i,r,m,a,c){const u=l("BasicForm"),o=l("a-card"),t=l("PersonTable"),p=l("a-button"),E=l("PageWrapper");return C(),D(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:s(()=>[n(p,{type:"primary",onClick:e.submitAll},{default:s(()=>[S]),_:1},8,["onClick"])]),default:s(()=>[n(o,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:s(()=>[n(u,{onRegister:e.register},null,8,["onRegister"])]),_:1}),n(o,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:s(()=>[n(u,{onRegister:e.registerTask},null,8,["onRegister"])]),_:1}),n(o,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:s(()=>[n(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Pe=A(y,[["render",R],["__scopeId","data-v-256d0148"]]);export{Pe as default};