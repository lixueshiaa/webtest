import{a0 as s,j as u,T as n}from"./index.9eb451d3.js";const{createConfirm:o}=n();var l=(e=>(e.queryDepartTreeSync="/sys/sysDepart/queryDepartTreeSync",e.save="/sys/sysDepart/add",e.edit="/sys/sysDepart/edit",e.delete="/sys/sysDepart/delete",e.deleteBatch="/sys/sysDepart/deleteBatch",e.exportXlsUrl="/sys/sysDepart/exportXls",e.importExcelUrl="/sys/sysDepart/importExcel",e.roleQueryTreeList="/sys/role/queryTreeList",e.queryDepartPermission="/sys/permission/queryDepartPermission",e.saveDepartPermission="/sys/permission/saveDepartPermission",e.dataRule="/sys/sysDepartPermission/datarule",e.getCurrentUserDeparts="/sys/user/getCurrentUserDeparts",e.selectDepart="/sys/selectDepart",e))(l||{});const D=e=>s.get({url:"/sys/sysDepart/queryDepartTreeSync",params:e}),i=(e,r)=>r?s.put({url:"/sys/sysDepart/edit",params:e}):s.post({url:"/sys/sysDepart/add",params:e}),c=(e,r=!1)=>new Promise((t,a)=>{const y=()=>{t(s.delete({url:"/sys/sysDepart/deleteBatch",params:e},{joinParamsToUrl:!0}))};r?o({iconType:"warning",title:"\u5220\u9664",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onOk:()=>y(),onCancel:()=>a()}):y()}),d=e=>s.get({url:"/sys/role/queryTreeList",params:e}),m=e=>s.get({url:"/sys/permission/queryDepartPermission",params:e}),q=e=>s.post({url:"/sys/permission/saveDepartPermission",params:e}),P=(e,r,t)=>{let a=`/sys/sysDepartPermission/datarule/${u(e)}/${u(r)}`;return s.get({url:a,params:t})},g=e=>s.post({url:"/sys/sysDepartPermission/datarule",params:e}),T=e=>s.get({url:"/sys/user/getCurrentUserDeparts",params:e}),f=e=>s.put({url:"/sys/selectDepart",params:e});export{l as A,d as a,m as b,q as c,c as d,P as e,g as f,T as g,f as h,D as q,i as s};
