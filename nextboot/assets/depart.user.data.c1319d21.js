import{d as i}from"./user.api.dab2bc95.js";import{fD as n}from"./index.0c676cb0.js";const m=[{title:"\u7528\u6237\u8D26\u53F7",dataIndex:"username",width:150},{title:"\u7528\u6237\u540D\u79F0",dataIndex:"realname",width:180},{title:"\u90E8\u95E8",dataIndex:"orgCode",width:200},{title:"\u6027\u522B",dataIndex:"sexDict",width:50},{title:"\u72B6\u6001",dataIndex:"statusDict",width:50},{title:"\u7535\u8BDD",dataIndex:"phone",width:120}],E=[{field:"username",label:"\u7528\u6237\u8D26\u53F7",component:"Input"}],F=[{title:"\u90E8\u95E8\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",width:100},{title:"\u90E8\u95E8\u89D2\u8272\u7F16\u7801",dataIndex:"roleCode",width:100},{title:"\u90E8\u95E8",dataIndex:"departId_dictText",width:100},{title:"\u5907\u6CE8",dataIndex:"description",width:100}],D=[{field:"roleName",label:"\u90E8\u95E8\u89D2\u8272\u540D\u79F0",component:"Input"}],c=[{label:"id",field:"id",component:"Input",show:!1},{field:"roleName",label:"\u90E8\u95E8\u89D2\u8272\u540D\u79F0",component:"Input",rules:[{required:!0,message:"\u90E8\u95E8\u89D2\u8272\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{min:2,max:30,message:"\u957F\u5EA6\u5728 2 \u5230 30 \u4E2A\u5B57\u7B26",trigger:"blur"}]},{field:"roleCode",label:"\u90E8\u95E8\u89D2\u8272\u7F16\u7801",component:"Input",dynamicDisabled:({values:t})=>!!t.id,dynamicRules:({model:t})=>[{required:!0,message:"\u90E8\u95E8\u89D2\u8272\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{min:0,max:64,message:"\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 64 \u4E2A\u5B57\u7B26",trigger:"blur"},{validator:(l,u)=>/[\u4E00-\u9FA5]/g.test(u)?Promise.reject("\u90E8\u95E8\u89D2\u8272\u7F16\u7801\u4E0D\u53EF\u8F93\u5165\u6C49\u5B57\uFF01"):new Promise((a,e)=>{let d={tableName:"sys_depart_role",fieldName:"role_code",fieldVal:u,dataId:t.id};i(d).then(r=>{r.success?a():e(r.message||"\u6821\u9A8C\u5931\u8D25")}).catch(r=>{e(r.message||"\u9A8C\u8BC1\u5931\u8D25")})})}]},{field:"description",label:"\u63CF\u8FF0",component:"Input",rules:[{min:0,max:126,message:"\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 126 \u4E2A\u5B57\u7B26",trigger:"blur"}]}];function f(t){return{descItems:[{field:"departName",label:"\u673A\u6784\u540D\u79F0"},{field:"parentId",label:"\u4E0A\u7EA7\u90E8\u95E8",render(u){var a;if(u){let e=n(t.value,d=>d.key==u);return(a=e==null?void 0:e.title)!=null?a:u}return u}},{field:"orgCode",label:"\u673A\u6784\u7F16\u7801"},{field:"orgCategory",label:"\u673A\u6784\u7C7B\u578B",render(u){return u==="1"?"\u516C\u53F8":u==="2"?"\u90E8\u95E8":u==="3"?"\u5C97\u4F4D":u}},{field:"departOrder",label:"\u6392\u5E8F"},{field:"mobile",label:"\u624B\u673A\u53F7"},{field:"address",label:"\u5730\u5740"},{field:"memo",label:"\u5907\u6CE8"}]}}export{m as a,E as b,D as c,F as d,c as e,f as u};
