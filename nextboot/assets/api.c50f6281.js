import{u as r,a0 as e}from"./index.d537950e.js";const o=r(),a=o.uploadUrl,l=`${a}/sys/common/upload`,n=t=>e.get({url:"/sys/position/list",params:t}),i=t=>e.get({url:"/sys/user/list",params:t}),c=t=>e.get({url:"/sys/role/list",params:t}),g=t=>e.get({url:"/sys/sysDepart/queryDepartTreeSync",params:t}),y=t=>e.get({url:"/sys/sysDepart/queryTreeList",params:t}),p=t=>e.get({url:"/sys/category/loadTreeData",params:t}),d=t=>e.get({url:"/sys/category/loadDictItem/",params:t}),D=t=>e.get({url:"/sys/dict/getDictItems/"+t},{joinTime:!1}),m=t=>e.get({url:"/sys/user/queryUserComponentData",params:t}),T=(t,s)=>e.uploadFile({url:l},t,{success:s});export{n as a,c as b,y as c,d,D as e,m as f,i as g,T as h,p as l,g as q,l as u};
