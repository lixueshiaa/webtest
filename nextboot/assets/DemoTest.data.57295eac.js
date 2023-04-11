var m=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(e,u,t)=>u in e?m(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,o=(e,u)=>{for(var t in u||(u={}))p.call(u,t)&&l(e,t,u[t]);if(s)for(var t of s(u))f.call(u,t)&&l(e,t,u[t]);return e};import{w as F}from"./componentMap.801737ea.js";import{c as n}from"./render.6feafcd2.js";const A=[{title:"\u521B\u5EFA\u4EBA",dataIndex:"createBy",align:"center",customRender:function(e){return u=>n(u,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"createTime",align:"center",customRender:function(e){return u=>n(u,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u66F4\u65B0\u4EBA",dataIndex:"updateBy",align:"center",customRender:function(e){return u=>n(u,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u66F4\u65B0\u65E5\u671F",dataIndex:"updateTime",align:"center",customRender:function(e){return u=>n(u,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"sysOrgCodeDict",align:"center",customRender:function(e){return u=>n(u,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u7528\u6237\u521B\u5EFA\u4EBA",dataIndex:"sysUserDict",align:"center",customRender:function(e){return u=>n(u,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u7701",dataIndex:"provinceDict",align:"center",customRender:function(e){return u=>n(u,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u5E02",dataIndex:"cityDict",align:"center",customRender:function(e){return u=>n(u,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u533A",dataIndex:"areaDict",align:"center",customRender:function(e){return u=>n(u,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})}],y=[{label:"\u521B\u5EFA\u4EBA",field:"createBy",component:"JInput",colProps:{span:6}},{label:"\u521B\u5EFA\u65E5\u671F",field:"createTime",component:"RangePicker",componentProps:{showTime:!0},colProps:{span:6}},{label:"\u6240\u5C5E\u90E8\u95E8",field:"sysOrgCode",component:"JSelectDept",componentProps:{},colProps:{span:6}},{label:"\u7528\u6237\u521B\u5EFA\u4EBA",field:"sysUser",component:"JSelectUser",componentProps:{labelKey:"realname"},colProps:{span:6}}],P=[{label:"id",field:"id",component:"Input",defaultValue:"1589871072918925314"},{label:"\u521B\u5EFA\u4EBA",field:"createBy",component:"Input"},{label:"\u66F4\u65B0\u4EBA",field:"updateBy",component:"Input",dynamicRules:({model:e,schema:u})=>[{required:!0,message:"\u8BF7\u8F93\u5165\u66F4\u65B0\u4EBA!"},{pattern:/^.+$/,message:"\u8BF7\u8F93\u5165\u66F4\u65B0\u4EBA!"}]},{label:"\u66F4\u65B0\u65E5\u671F",field:"updateTime",component:"DatePicker",componentProps:{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss"},dynamicRules:({model:e,schema:u})=>[{required:!0,message:"\u8BF7\u8F93\u5165\u66F4\u65B0\u65E5\u671F!"},{pattern:/^.+$/,message:"\u8BF7\u8F93\u5165\u66F4\u65B0\u65E5\u671F!"}]},{label:"\u6240\u5C5E\u90E8\u95E8",field:"sysOrgCode",component:"JSelectDept",componentProps:{},dynamicRules:({model:e,schema:u})=>[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5C5E\u90E8\u95E8!"},{pattern:/^.+$/,message:"\u8BF7\u8F93\u5165\u6240\u5C5E\u90E8\u95E8!"}]},{label:"\u7528\u6237\u521B\u5EFA\u4EBA",field:"sysUser",component:"JSelectUser",componentProps:{labelKey:"realname"},dynamicRules:({model:e,schema:u})=>[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u521B\u5EFA\u4EBA!"},{pattern:/^.+$/,message:"\u8BF7\u8F93\u5165\u7528\u6237\u521B\u5EFA\u4EBA!"}]},{label:"\u533A\u57DF",field:"areaRange",component:"NextRegionSelect",componentProps:({formActionType:e,formModel:u})=>{const t={area:"area",province:"province",city:"city"},{setFieldsValue:d}=e;let a={province:"",city:"",area:""},i={};return F.exports.merge(a,t),Object.keys(a).map(r=>{i["onUpdate:"+r]=c=>{u[a[r]]=c}}),o({onChange(r){d({areaRange:r})}},i)},dynamicRules:({model:e,schema:u})=>[{required:!0,message:"\u8BF7\u8F93\u5165\u533A\u57DF!"},{pattern:/^.+$/,message:"\u8BF7\u8F93\u5165\u533A\u57DF!"}]},{label:"\u6D4B\u8BD5\u7EC4\u4EF6",field:"areaRangedf",component:"NextEditControl",componentProps:({formModel:e})=>({viewApi:"/aUser12/queryPhone",editApi:"/aUser12/editPhone",isVerify:!!e.id,viewApiDynamicForm:{id:e.id},editApiDynamicForm:{id:e.id,phone:e.areaRangedf}})}];export{A as c,P as f,y as s};
