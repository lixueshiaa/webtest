import{a0 as s,bR as u}from"./index.9eb451d3.js";const l="/test/test/exportXls",o="/test/test/importExcel",n=t=>s.get({url:"/test/test/list",params:t}),c=(t,e)=>s.delete({url:"/test/test/delete",params:t},{joinParamsToUrl:!0}).then(()=>{e()}),d=(t,e)=>{u.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>s.delete({url:"/test/test/deleteBatch",data:t},{joinParamsToUrl:!0}).then(()=>{e()})})},i=(t,e)=>{let r=e?"/test/test/edit":"/test/test/add";return s.post({url:r,params:t})};export{o as a,d as b,c as d,l as g,n as l,i as s};
