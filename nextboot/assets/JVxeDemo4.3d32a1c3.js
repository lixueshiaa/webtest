var E=(x,r,l)=>new Promise((s,n)=>{var p=e=>{try{t(l.next(e))}catch(u){n(u)}},o=e=>{try{t(l.throw(e))}catch(u){n(u)}},t=e=>e.done?s(e.value):Promise.resolve(e.value).then(p,o);t((l=l.apply(x,r)).next())});import{a as m,z as i,ea as a,a0 as c,U as A,o as C,k as y}from"./index.d537950e.js";const k=m({__name:"JVxeDemo4",setup(x){const r=i([{requestData:p,key:"s1"},{requestData:o,key:"menu1"}]),l=i([{title:"\u6027\u522B",key:"sex",type:a.select,dictCode:"sex",width:"180px",placeholder:"\u8BF7\u9009\u62E9${title}"},{title:"\u7701/\u76F4\u8F96\u5E02/\u81EA\u6CBB\u533A",key:"s1",type:a.select,width:"180px",placeholder:"\u8BF7\u9009\u62E9${title}",linkageKey:"s2"},{title:"\u5E02",key:"s2",type:a.select,width:"180px",placeholder:"\u8BF7\u9009\u62E9${title}",linkageKey:"s3"},{title:"\u53BF/\u533A",key:"s3",type:a.select,width:"180px",options:[],placeholder:"\u8BF7\u9009\u62E9${title}"},{title:"\u4E00\u7EA7\u83DC\u5355",key:"menu1",type:a.select,width:"180px",placeholder:"\u8BF7\u9009\u62E9${title}",linkageKey:"menu2"},{title:"\u4E8C\u7EA7\u83DC\u5355",key:"menu2",type:a.select,width:"180px",placeholder:"\u8BF7\u9009\u62E9${title}",linkageKey:"menu3"},{title:"\u4E09\u7EA7\u83DC\u5355",key:"menu3",type:a.select,width:"180px",placeholder:"\u8BF7\u9009\u62E9${title}"}]),s=i([{sex:"1",s1:"110000",s2:"110100",s3:"110101"},{sex:"2",s1:"130000",s2:"130300",s3:"130303"}]),n=[{text:"\u5317\u4EAC\u5E02",value:"110000",parent:""},{text:"\u5929\u6D25\u5E02",value:"120000",parent:""},{text:"\u6CB3\u5317\u7701",value:"130000",parent:""},{text:"\u4E0A\u6D77\u5E02",value:"310000",parent:""},{text:"\u5317\u4EAC\u5E02",value:"110100",parent:"110000"},{text:"\u5929\u6D25\u5E02\u5E02",value:"120100",parent:"120000"},{text:"\u77F3\u5BB6\u5E84\u5E02",value:"130100",parent:"130000"},{text:"\u5510\u5C71\u5E02",value:"130200",parent:"130000"},{text:"\u79E6\u7687\u5C9B\u5E02",value:"130300",parent:"130000"},{text:"\u4E0A\u6D77\u5E02",value:"310100",parent:"310000"},{text:"\u4E1C\u57CE\u533A",value:"110101",parent:"110100"},{text:"\u897F\u57CE\u533A",value:"110102",parent:"110100"},{text:"\u671D\u9633\u533A",value:"110105",parent:"110100"},{text:"\u548C\u5E73\u533A",value:"120101",parent:"120100"},{text:"\u6CB3\u4E1C\u533A",value:"120102",parent:"120100"},{text:"\u6CB3\u897F\u533A",value:"120103",parent:"120100"},{text:"\u9EC4\u6D66\u533A",value:"310101",parent:"310100"},{text:"\u5F90\u6C47\u533A",value:"310104",parent:"310100"},{text:"\u957F\u5B81\u533A",value:"310105",parent:"310100"},{text:"\u957F\u5B89\u533A",value:"130102",parent:"130100"},{text:"\u6865\u897F\u533A",value:"130104",parent:"130100"},{text:"\u65B0\u534E\u533A",value:"130105",parent:"130100"},{text:"\u8DEF\u5357\u533A",value:"130202",parent:"130200"},{text:"\u8DEF\u5317\u533A",value:"130203",parent:"130200"},{text:"\u53E4\u51B6\u533A",value:"130204",parent:"130200"},{text:"\u6D77\u6E2F\u533A",value:"130302",parent:"130300"},{text:"\u5C71\u6D77\u5173\u533A",value:"130303",parent:"130300"},{text:"\u5317\u6234\u6CB3\u533A",value:"130304",parent:"130300"}];function p(t){return new Promise(e=>{let u=n.filter(v=>v.parent===t);setTimeout(()=>e(u),500)})}function o(t){return E(this,null,function*(){let e;return t===""?e=yield c.get({url:"/sys/permission/getSystemMenuList",params:{}}):e=yield c.get({url:"/sys/permission/getSystemSubmenu",params:{parentId:t}}),e.map(u=>({value:u.id,text:u.name}))})}return(t,e)=>{const u=A("JVxeTable");return C(),y(u,{ref:"vTable",toolbar:"",rowNumber:"",rowSelection:"",maxHeight:580,dataSource:s.value,columns:l.value,linkageConfig:r.value},null,8,["dataSource","columns","linkageConfig"])}}});export{k as default};