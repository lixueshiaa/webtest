var m=Object.defineProperty;var u=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(t,e,n)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))f.call(e,n)&&c(t,n,e[n]);if(u)for(var n of u(e))p.call(e,n)&&c(t,n,e[n]);return t};import{r as g,w as F}from"./componentMap.801737ea.js";import{c as a}from"./render.6feafcd2.js";const D=[{title:"\u65E5\u671F\u533A\u95F4",dataIndex:"rangeDate",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{startDate:"start_date",endDate:"end_date"}},t)}({init:!1,show:!1})},{title:"\u5F00\u59CB\u65E5\u671F",dataIndex:"startDate",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})},{title:"\u7ED3\u675F\u65E5\u671F",dataIndex:"endDate",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})},{title:"\u6570\u5B57\u533A\u95F4",dataIndex:"rangeNumber",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{min:"min_number",max:"max_number"}},t)}({init:!1,show:!1})},{title:"\u6700\u5C0F\u503C",dataIndex:"minNumber",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})},{title:"\u6700\u5927\u503C",dataIndex:"maxNumber",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})},{title:"input",dataIndex:"testDict",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"https://www.baidu.com",extendParams:{filterConfig:{filterType:"desensitizeByName",recovery:"true"}}},t)}({init:!1,show:!1})},{title:"teset2",dataIndex:"test2Dict",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})},{title:"\u89D2\u8272",dataIndex:"role",align:"center",sorter:!0,customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{labelKey:"roleName",valueKey:"id",pageNumKey:"pageNo",pageSizeKey:"pageSize",isPagination:"true",apiUrl:"/sys/role/list",method:"get",allowClear:"true",staticForm:{column:"createTime",order:"desc"},multiple:!1,syncForm:{roleCode:"	test"},searchKey:"roleName",dynamicForm:{}}},t)}({init:!1,show:!1})},{title:"\u7528\u6237",dataIndex:"user",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{labelKey:"username",valueKey:"id",pageNumKey:"pageNo",pageSizeKey:"pageSize",isPagination:"true",apiUrl:"/sys/user/userRoleList",method:"get",allowClear:"true",staticForm:{},multiple:!1,searchKey:"username",dynamicForm:{roleId:"role"}}},t)}({init:!1,show:!1})},{title:"\u7701",dataIndex:"proviceDict",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})},{title:"\u5E02",dataIndex:"cityDict",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})},{title:"\u533A",dataIndex:"areaDict",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})},{title:"\u5207\u6362",dataIndex:"swtich",align:"center",customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})},{title:"\u56FE\u7247",dataIndex:"img",align:"center",customRender:g.renderImage},{title:"\u5F53\u524D\u90E8\u95E8",dataIndex:"sysOrgCode",align:"center",sorter:!0,customRender:function(t){return e=>a(e,{dictField:"",fieldHref:"",extendParams:{}},t)}({init:!1,show:!1})}],P=[{label:"\u65E5\u671F\u533A\u95F4",field:"rangeDate",component:"NextDateRange",componentProps:({formModel:t,formActionType:e})=>{const n={startDate:"start_date",endDate:"end_date"},{setFieldsValue:l}=e,i=n.startDate,r=n.endDate;return{modeType:"datatime",onChange(s){l({rangeDate:s});{const o=s?s.split(","):[];t[i]=o[0],t[r]=o[1]}}}},colProps:{span:6}},{label:"\u6570\u5B57\u533A\u95F4",field:"rangeNumber",component:"NextNumberRange",componentProps:({formModel:t})=>{const e={min:"min_number",max:"max_number"},n=e.min,l=e.max;return{onChange(i){{const r=i?i.split(","):[];t[n]=r[0],t[l]=r[1]}}}},colProps:{span:6}},{label:"\u89D2\u8272",field:"role",component:"NextCustomSelect",componentProps:({formActionType:t})=>{const e={labelKey:"roleName",valueKey:"id",pageNumKey:"pageNo",pageSizeKey:"pageSize",isPagination:"true",apiUrl:"/sys/role/list",method:"get",allowClear:"true",staticForm:{column:"createTime",order:"desc"},multiple:!1,syncForm:{roleCode:"	test"},searchKey:"roleName",dynamicForm:{}},n=e.syncForm?d({},e.syncForm):{},{setFieldsValue:l}=t;let i={};return Object.keys(n).map(r=>{i["onUpdate:"+r]=s=>{l({[n.role]:s})}}),F.exports.merge(d({},e),d({onChange(r){l({role:r})}},i))},colProps:{span:6}}],w=[{label:"\u65E5\u671F\u533A\u95F4",field:"rangeDate",component:"NextDateRange",componentProps:({formModel:t,formActionType:e})=>{const n={startDate:"start_date",endDate:"end_date"},{setFieldsValue:l}=e,i=n.startDate,r=n.endDate;return{modeType:"datatime",onChange(s){l({rangeDate:s});{const o=s?s.split(","):[];t[i]=o[0],t[r]=o[1]}}}}},{label:"\u5207\u6362",field:"swtich",component:"JSwitch",componentProps:{}},{label:"\u56FE\u7247",field:"img",component:"JImageUpload",componentProps:{}},{label:"",field:"id",component:"Input",show:!1}];export{D as c,w as f,P as s};
