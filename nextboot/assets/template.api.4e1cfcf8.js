import{r as n}from"./validator.0f26d27f.js";import{a0 as t,j as o,T as m}from"./index.397c0bf9.js";const i=[{title:"\u6A21\u677F\u6807\u9898",dataIndex:"templateName",width:80},{title:"\u6A21\u677F\u7F16\u7801",dataIndex:"templateCode",width:100},{title:"\u6A21\u677F\u5185\u5BB9",dataIndex:"templateContent",width:150},{title:"\u6A21\u677F\u7C7B\u578B",dataIndex:"templateType",width:100,customRender:function({text:e}){return e=="1"?"\u77ED\u4FE1":e=="2"?"\u90AE\u4EF6":e=="3"?"\u5FAE\u4FE1":e=="4"?"\u7CFB\u7EDF":e}}],F=[{label:"\u6A21\u677F\u6807\u9898",field:"templateName",component:"Input"},{label:"\u6A21\u677F\u7F16\u7801",field:"templateCode",component:"Input"},{label:"\u6A21\u677F\u7C7B\u578B",field:"templateType",component:"JDictSelectTag",componentProps:{dictCode:"msgType"}}],g=[{label:"ID",field:"id",component:"Input",show:!1},{label:"\u6A21\u677F\u6807\u9898",field:"templateName",component:"Input",required:!0},{label:"\u6A21\u677F\u7F16\u7801",field:"templateCode",component:"Input",dynamicRules:({model:e,schema:s})=>[{required:!0,message:"\u8BF7\u8F93\u5165\u6A21\u677F\u7F16\u7801\uFF01"},...n.duplicateCheckRule("sys_sms_template","template_code",e,s,!0)],dynamicDisabled:e=>!!e.values.id},{label:"\u6A21\u677F\u7C7B\u578B",field:"templateType",component:"JDictSelectTag",componentProps:{dictCode:"msgType",placeholder:"\u8BF7\u9009\u62E9\u6A21\u677F\u7C7B\u578B"},required:!0},{label:"\u6A21\u677F\u5185\u5BB9",field:"templateContent",component:"InputTextArea",componentProps:{autoSize:{minRows:8,maxRows:8}},ifShow:({values:e})=>!["2","4"].includes(e.templateType)},{label:"\u6A21\u677F\u5185\u5BB9",field:"templateContent",component:"JEditor",ifShow:({values:e})=>["2","4"].includes(e.templateType)}],y=[{label:"\u6A21\u677F\u7F16\u7801",field:"templateCode",component:"Input",show:!1},{label:"\u6A21\u677F\u6807\u9898",field:"templateName",component:"Input",componentProps:{disabled:!0}},{label:"\u6A21\u677F\u5185\u5BB9",field:"templateContent",component:"InputTextArea",componentProps:{disabled:!0,rows:5}},{label:"\u6D4B\u8BD5\u6570\u636E",field:"testData",component:"InputTextArea",required:!0,helpMessage:"JSON\u6570\u636E",componentProps:{placeholder:"\u8BF7\u8F93\u5165JSON\u683C\u5F0F\u6D4B\u8BD5\u6570\u636E",rows:5}},{label:"\u6D88\u606F\u7C7B\u578B",field:"msgType",component:"JDictSelectTag",required:!0,componentProps:{dictCode:"msgType"}},{label:"\u6D88\u606F\u63A5\u6536\u65B9",field:"receiver",component:"Input",required:!0}],{createConfirm:r}=m();var p=(e=>(e.list="/sys/message/sysMessageTemplate/list",e.delete="/sys/message/sysMessageTemplate/delete",e.deleteBatch="/sys/message/sysMessageTemplate/deleteBatch",e.exportXls="sys/message/sysMessageTemplate/exportXls",e.importXls="sys/message/sysMessageTemplate/importExcel",e.save="/sys/message/sysMessageTemplate/add",e.edit="/sys/message/sysMessageTemplate/edit",e.send="/sys/message/sysMessageTemplate/sendMsg",e))(p||{});const f=e=>t.get({url:"/sys/message/sysMessageTemplate/list",params:e}),T=(e,s=!1)=>new Promise((a,l)=>{const u=()=>{a(t.delete({url:"/sys/message/sysMessageTemplate/deleteBatch",params:e},{joinParamsToUrl:!0}))};s?r({iconType:"warning",title:"\u5220\u9664",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onOk:()=>u(),onCancel:()=>l()}):u()}),B=(e,s)=>o(s)?t.put({url:"/sys/message/sysMessageTemplate/edit",params:e}):t.post({url:"/sys/message/sysMessageTemplate/add",params:e}),C=e=>t.post({url:"/sys/message/sysMessageTemplate/sendMsg",params:e});export{p as A,B as a,y as b,i as c,T as d,C as e,g as f,f as l,F as s};
