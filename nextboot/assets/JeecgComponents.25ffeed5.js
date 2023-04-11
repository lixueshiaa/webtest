import{B as h}from"./BasicForm.d1b5a4f4.js";import{A as D,d as g,J as A,e as B,f as v,g as S,_ as y}from"./componentMap.6942b0b6.js";import{b9 as J,a1 as _,a as k,z as i,f as M,j as x,aF as w,U as s,o as j,k as I,G as p,p as n,r as T,T as U}from"./index.9eb451d3.js";import"./RadioButtonGroup.6d9641c3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import{o as V}from"./select.f009e14d.js";import{J as R}from"./validator.be25e83d.js";import{B as L}from"./index.0f77980e.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.9788db2e.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";const{isDisabledAuth:K}=J(),$=[{field:"jdst",component:"JDictSelectTag",label:"\u6027\u522B\u4E0B\u62C9",helpMessage:["component\u6A21\u5F0F"],componentProps:{dictCode:"sex"},colProps:{span:12}},{field:"jdst",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"jdst1",component:"JDictSelectTag",label:"\u6027\u522B\u9009\u62E9",helpMessage:["component\u6A21\u5F0F"],componentProps:{dictCode:"sex",type:"radioButton"},colProps:{span:12}},{field:"jdst1",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"jdst2",component:"JDictSelectTag",label:"\u5B57\u5178\u8868\u4E0B\u62C9",helpMessage:["component\u6A21\u5F0F"],componentProps:{dictCode:"sys_user,realname,id"},colProps:{span:12}},{field:"jdst2",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"jdst3",component:"JDictSelectTag",label:"\u5B57\u5178\u8868\u4E0B\u62C9(\u5E26\u6761\u4EF6)",helpMessage:["component\u6A21\u5F0F"],componentProps:{dictCode:"sys_user,realname,id,username!='admin' order by create_time"},colProps:{span:12}},{field:"jdst3",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"jsst",component:"JSearchSelect",label:"\u5B57\u5178\u641C\u7D22(\u540C\u6B65)",colProps:{span:12},componentProps:{dictOptions:[{text:"\u9009\u9879\u4E00",value:"1"},{text:"\u9009\u9879\u4E8C",value:"2"},{text:"\u9009\u9879\u4E09",value:"3"}]}},{field:"jsst",component:"JEllipsis",label:"\u9009\u62E9\u503C",colProps:{span:12}},{field:"jsst2",component:"JSearchSelect",label:"\u5B57\u5178\u641C\u7D22(\u5F02\u6B65)",colProps:{span:12},componentProps:{dict:"sys_depart,depart_name,id",pageSize:6,async:!0}},{field:"jsst2",component:"JEllipsis",label:"\u9009\u62E9\u503C",colProps:{span:12}},{field:"xldx",component:"JDictSelectTag",label:"\u5B57\u5178\u4E0B\u62C9\u591A\u9009",colProps:{span:12},componentProps:{dictCode:"sex",mode:"multiple"}},{field:"xldx",component:"JEllipsis",label:"\u9009\u62E9\u503C",colProps:{span:12}},{field:"dxxlk",component:"JDictSelectTag",label:"\u5B57\u5178\u4E0B\u62C9\u5355\u9009",colProps:{span:12},componentProps:{dictCode:"sex"}},{field:"dxxlk",component:"JEllipsis",label:"\u9009\u62E9\u503C",colProps:{span:12}},{label:"\u53EF\u8F93\u5165\u4E0B\u62C9",field:"selectInput",component:"JSelectInput",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}]},colProps:{span:12}},{field:"selectInput",component:"JEllipsis",label:"\u9009\u62E9\u503C",colProps:{span:12}},{field:"depart3",component:"JSelectDept",label:"\u9009\u62E9\u90E8\u95E8\u2014\u81EA\u5B9A\u4E49\u503C",helpMessage:["component\u6A21\u5F0F"],componentProps:{showButton:!1,rowKey:"orgCode",primaryKey:"orgCode"},colProps:{span:12}},{field:"depart3",component:"JEllipsis",label:"\u9009\u4E2D\u90E8\u95E8",colProps:{span:12}},{field:"depart2",component:"JSelectDept",label:"\u9009\u62E9\u90E8\u95E8",helpMessage:["component\u6A21\u5F0F"],componentProps:{showButton:!1},colProps:{span:12}},{field:"depart2",component:"JEllipsis",label:"\u9009\u4E2D\u90E8\u95E8",colProps:{span:12}},{field:"user2",component:"JSelectUser",label:"\u7528\u6237\u9009\u62E9\u7EC4\u4EF6",helpMessage:["component\u6A21\u5F0F"],componentProps:{labelKey:"realname",rowKey:"id",showSelectTable:!1},colProps:{span:12}},{field:"user2",component:"JEllipsis",label:"\u9009\u4E2D\u7528\u6237",colProps:{span:12}},{field:"user3",component:"JSelectUserByDept",label:"\u90E8\u95E8\u9009\u62E9\u7528\u6237",helpMessage:["component\u6A21\u5F0F"],componentProps:{labelKey:"realname",rowKey:"username"},colProps:{span:12}},{field:"user3",component:"JEllipsis",label:"\u9009\u4E2D\u7528\u6237",colProps:{span:12}},{field:"role2",component:"JSelectRole",label:"\u89D2\u8272\u9009\u62E9\u7EC4\u4EF6",helpMessage:["component\u6A21\u5F0F"],colProps:{span:12}},{field:"role2",component:"JEllipsis",label:"\u9009\u4E2D\u89D2\u8272",colProps:{span:12}},{field:"position2",component:"JSelectPosition",label:"\u804C\u52A1\u9009\u62E9\u7EC4\u4EF6",helpMessage:["component\u6A21\u5F0F"],colProps:{span:12},componentProps:{async:!0,showSelectTable:!0}},{field:"position2",component:"JEllipsis",label:"\u9009\u4E2D\u804C\u52A1",colProps:{span:12}},{field:"checkbox1",component:"JCheckbox",label:"JCheckbox\u7EC4\u4EF61",helpMessage:["component\u6A21\u5F0F"],defaultValue:"1,2",componentProps:{options:[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}]},colProps:{span:12}},{field:"checkbox1",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"checkbox2",component:"Input",label:"JCheckbox\u7EC4\u4EF62",defaultValue:"1",helpMessage:["\u63D2\u69FD\u6A21\u5F0F"],slot:"JCheckbox",colProps:{span:12}},{field:"checkbox2",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"data1",label:"\u65E5\u671F\u9009\u62E9",component:"DatePicker",componentProps:{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss"},colProps:{span:12}},{field:"data1",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"hk",component:"Input",label:"\u6ED1\u5757\u9A8C\u8BC1\u7801",helpMessage:["\u63D2\u69FD\u6A21\u5F0F"],slot:"dargVerify",colProps:{span:12}},{field:"hk",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"JTreeDict",component:"JTreeDict",label:"\u6811\u5B57\u5178",helpMessage:["component\u6A21\u5F0F"],colProps:{span:12}},{field:"JTreeDict",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"ts",component:"JTreeSelect",label:"\u4E0B\u62C9\u6811\u9009\u62E9",helpMessage:["component\u6A21\u5F0F"],componentProps:{dict:"sys_permission,name,id",pidField:"parent_id"},colProps:{span:12}},{field:"ts",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"ts1",component:"JTreeSelect",label:"\u4E0B\u62C9\u6811\u591A\u9009",helpMessage:["component\u6A21\u5F0F"],componentProps:{dict:"sys_permission,name,id",pidField:"parent_id",multiple:!0},colProps:{span:12}},{field:"ts1",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"category",component:"JCategorySelect",label:"\u5206\u7C7B\u5B57\u5178\u6811",helpMessage:["component\u6A21\u5F0F"],defaultValue:"",componentProps:{pcode:"B01",multiple:!0},colProps:{span:12}},{field:"category",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"JEasyCron",component:"JEasyCron",label:"JEasyCron",helpMessage:["component\u6A21\u5F0F"],colProps:{span:12},defaultValue:"* * * * * ? *",rules:[{validator:R}]},{field:"JEasyCron",component:"JEllipsis",label:"\u9009\u62E9\u503C",colProps:{span:12}},{field:"JInput",component:"JInput",label:"\u7279\u6B8A\u67E5\u8BE2\u7EC4\u4EF6",helpMessage:["\u63D2\u69FD\u6A21\u5F0F"],slot:"JInput",colProps:{span:12}},{field:"jinputtype",component:"Select",label:"\u67E5\u8BE2\u7C7B\u578B",componentProps:{options:[{value:"like",label:"\u6A21\u7CCA\uFF08like\uFF09"},{value:"ne",label:"\u4E0D\u7B49\u4E8E\uFF08ne\uFF09"},{value:"ge",label:"\u5927\u4E8E\u7B49\u4E8E\uFF08ge\uFF09"},{value:"le",label:"\u5C0F\u4E8E\u7B49\u4E8E\uFF08le)"}]},colProps:{span:6}},{field:"JInput",component:"JEllipsis",label:"\u8F93\u5165\u503C",colProps:{span:6}},{field:"field1",component:"Select",label:"\u7701\u5E02\u533A\u9009\u62E9",helpMessage:["\u63D2\u69FD\u6A21\u5F0F"],slot:"jAreaLinkage",colProps:{span:12},defaultValue:["130000","130200"]},{field:"field1",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"field0",component:"Select",label:"\u7981\u7528\u7EC4\u4EF6(\u65B9\u5F0F\u4E00)",helpMessage:["\u63D2\u69FD\u6A21\u5F0F"],slot:"jAreaLinkage1",colProps:{span:12},defaultValue:["130000","130200"]},{field:"field0",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"field2",component:"JAreaLinkage",label:"\u7981\u7528\u7EC4\u4EF6(\u65B9\u5F0F\u4E8C)",helpMessage:["component\u6A21\u5F0F"],colProps:{span:12},dynamicDisabled:({values:u})=>(console.log(u),K(["demo.dbarray"])),defaultValue:["140000","140300","140302"]},{field:"field2",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"pca1",component:"JAreaSelect",label:"\u7701\u5E02\u533A\u7EA7\u8054",helpMessage:["component\u6A21\u5F0F"],defaultValue:"140302",colProps:{span:12}},{field:"pca1",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"pop1",component:"Input",label:"JPopup\u793A\u4F8B",helpMessage:["\u63D2\u69FD\u6A21\u5F0F"],slot:"JPopup",colProps:{span:12}},{field:"pop1",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"JInputPop",component:"JInputPop",label:"JInputPop",helpMessage:["component\u6A21\u5F0F"],colProps:{span:12}},{field:"JInputPop",component:"JEllipsis",label:"\u8F93\u5165\u503C",colProps:{span:12}},{field:"JTreeDictAsync",component:"JTreeDict",label:"\u5F02\u6B65JTreeDict",helpMessage:["component\u6A21\u5F0F"],colProps:{span:12},componentProps:{async:!0}},{field:"JTreeDictAsync",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"JSwitch",component:"JSwitch",label:"JSwitch",helpMessage:["component\u6A21\u5F0F"],colProps:{span:12}},{field:"JSwitch",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}},{field:"JSwitchSelect",component:"JSwitch",label:"JSwitchSelect",helpMessage:["component\u6A21\u5F0F"],colProps:{span:12},componentProps:{query:!0}},{field:"JSwitchSelect",component:"JEllipsis",label:"\u9009\u4E2D\u503C",colProps:{span:12}}];const O=k({components:{BasicForm:h,ApiSelect:D,JAreaLinkage:g,JPopup:A,JAreaSelect:B,JCheckbox:v,JInput:S,JEllipsis:y,BasicDragVerify:L},name:"JeecgComponents",setup(){const{isDisabledAuth:u}=J(),m=i(null),d=i(null),{createMessage:E}=U(),t=i(""),f=i({text:"\u786E\u5B9A"}),c=M(()=>({keyword:x(t)}));function r(a){t.value=a}return{schemas:$,formElRef:d,isDisabledAuth:u,optionsListApi:V,submitButtonOptions:f,onSearch:w(r,300),searchParams:c,handleReset:()=>{t.value=""},handleSubmit:a=>{console.log("values:",a),E.success("click search,values:"+JSON.stringify(a))},check:m}}});function Y(u,m,d,E,t,f){const c=s("JAreaLinkage"),r=s("JPopup"),a=s("JAreaSelect"),b=s("JCheckbox"),F=s("JInput"),P=s("BasicDragVerify"),C=s("BasicForm");return j(),I(C,{ref:"formElRef",class:T("jee-select-demo-form"),labelCol:{span:5},wrapperCol:{span:15},showResetButton:!1,showSubmitButton:!1,schemas:u.schemas,actionColOptions:{span:24},onSubmit:u.handleSubmit,onReset:u.handleReset,style:{height:"100%"}},{jAreaLinkage:p(({model:e,field:o})=>[n(c,{value:e[o],"onUpdate:value":l=>e[o]=l,showArea:!0,showAll:!1},null,8,["value","onUpdate:value"])]),jAreaLinkage1:p(({model:e,field:o})=>[n(c,{disabled:u.isDisabledAuth(["demo.dbarray"]),value:e[o],"onUpdate:value":l=>e[o]=l,showArea:!0,showAll:!1},null,8,["disabled","value","onUpdate:value"])]),JPopup:p(({model:e,field:o})=>[n(r,{value:e[o],"onUpdate:value":l=>e[o]=l,formElRef:u.formElRef,code:"report_user",fieldConfig:[{source:"username",target:"pop1"}]},null,8,["value","onUpdate:value","formElRef"])]),JAreaSelect:p(({model:e,field:o})=>[n(a,{value:e[o],"onUpdate:value":l=>e[o]=l},null,8,["value","onUpdate:value"])]),JCheckbox:p(({model:e,field:o})=>[n(b,{value:e[o],"onUpdate:value":l=>e[o]=l,dictCode:"remindMode"},null,8,["value","onUpdate:value"])]),JInput:p(({model:e,field:o})=>[n(F,{value:e[o],"onUpdate:value":l=>e[o]=l,type:e.jinputtype},null,8,["value","onUpdate:value","type"])]),dargVerify:p(({model:e,field:o})=>[n(P,{value:e[o],"onUpdate:value":l=>e[o]=l},null,8,["value","onUpdate:value"])]),_:1},8,["schemas","onSubmit","onReset"])}var Ae=_(O,[["render",Y],["__scopeId","data-v-c39caa70"]]);export{Ae as default};
