var p=(t,r,n)=>new Promise((d,a)=>{var m=e=>{try{o(n.next(e))}catch(i){a(i)}},u=e=>{try{o(n.throw(e))}catch(i){a(i)}},o=e=>e.done?d(e.value):Promise.resolve(e.value).then(m,u);o((n=n.apply(t,r)).next())});import{B as l}from"./BasicTable.5bdcd073.js";import"./componentMap.bdddb878.js";import"./TableImg.ceb3addb.js";import{u as s}from"./useTable.5c9bbf6b.js";import{o as c}from"./select.c9b33003.js";import{d as F}from"./table.2ad15554.js";import{t as C}from"./tree.e69e0b0b.js";import{a1 as f,a as E,U as B,o as D,i as b,p as h,T as A}from"./index.6cf4d174.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import"./useFormItem.ed1b0f05.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import"./api.4a4df057.js";import"./functional.4d9308b0.js";import"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";import"./FormOutlined.478bac7f.js";import"./useSortable.746d5656.js";import"./index.e9415cf9.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";const _=[{title:"\u8F93\u5165\u6846",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",edit:!0,editRule:t=>p(void 0,null,function*(){return t==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""}),width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name71",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:C,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:t=>t?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:t=>t?"\u5F00":"\u5173",width:200}],w=E({components:{BasicTable:l},setup(){const[t]=s({title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",api:F,columns:_,showIndexColumn:!1,bordered:!0}),{createMessage:r}=A();function n({record:u,index:o,key:e,value:i}){return console.log(u,o,e,i),!1}function d({value:u,key:o,id:e}){return r.loading({content:`\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${o}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{u===""?(r.error({content:"\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",key:"_save_fake_data",duration:2}),i(!1)):(r.success({content:`\u8BB0\u5F55${e}\u7684${o}\u5DF2\u4FDD\u5B58`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function a(Et){return p(this,arguments,function*({record:u,index:o,key:e,value:i}){return console.log("\u5355\u5143\u683C\u6570\u636E\u6B63\u5728\u51C6\u5907\u63D0\u4EA4",{record:u,index:o,key:e,value:i}),yield d({id:u.id,key:e,value:i})})}function m(){console.log("cancel")}return{registerTable:t,handleEditEnd:n,handleEditCancel:m,beforeEditSubmit:a}}}),x={class:"p-4"};function I(t,r,n,d,a,m){const u=B("BasicTable");return D(),b("div",x,[h(u,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}var Ct=f(w,[["render",I]]);export{Ct as default};
