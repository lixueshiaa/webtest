import{a1 as u,a as _,dS as c,z as l,U as o,o as p,i as m,p as e,G as s,J as x}from"./index.0c676cb0.js";const g=_({components:{CollapseContainer:c},setup(){const t=l(null),a=l([{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"vxe-table \u4ECE\u5165\u95E8\u5230\u653E\u5F03"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:24,address:"Shanghai"}]);return{allAlign:t,tableData1:a}}}),f={style:{padding:"5px"}},v=x("\u65B0\u589E");function b(t,a,h,C,E,T){const d=o("vxe-button"),i=o("vxe-toolbar"),n=o("vxe-table-column"),r=o("vxe-table");return p(),m("div",f,[e(i,null,{buttons:s(()=>[e(d,{onClick:a[0]||(a[0]=$=>t.allAlign="left")},{default:s(()=>[v]),_:1})]),_:1}),e(r,{align:t.allAlign,data:t.tableData1},{default:s(()=>[e(n,{type:"seq",width:"60"}),e(n,{field:"name",title:"Name"}),e(n,{field:"sex",title:"Sex"}),e(n,{field:"age",title:"Age"})]),_:1},8,["align","data"])])}var D=u(g,[["render",b]]);export{D as default};
