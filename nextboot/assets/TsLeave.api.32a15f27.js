import{c as o}from"./render.bf5724a4.js";import{a0 as n,bR as u}from"./index.397c0bf9.js";const s=[{title:"\u72B6\u6001",dataIndex:"stateDict",align:"center",customRender:function(e){return t=>o(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u539F\u56E0",dataIndex:"reson",align:"center",customRender:function(e){return t=>o(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u6D41\u7A0B\u5B9E\u4F8Bid",dataIndex:"orderId",align:"center",customRender:function(e){return t=>o(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u8BF7\u5047\u5929\u6570",dataIndex:"day",align:"center",customRender:function(e){return t=>o(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u662F\u5426\u53EF\u5BA1\u6279",dataIndex:"audit",align:"center",fixed:"right",slots:{customRender:"flowSlot"}}],d=[{label:"\u662F\u5426\u53EF\u5BA1\u6279\u72B6\u6001",field:"approvable",component:"JDictSelectTag",componentProps:{type:"list",dictCode:"flowApprovable"},colProps:{span:24}},{label:"\u72B6\u6001",field:"state",component:"JDictSelectTag",componentProps:{type:"list",dictCode:"flowState"},colProps:{span:24}},{label:"\u8BF7\u5047\u5929\u6570",field:"day",component:"InputNumber",colProps:{span:24}},{label:"\u6D41\u7A0B\u5B9E\u4F8Bid",field:"orderId",component:"JInput",colProps:{span:24}},{label:"\u539F\u56E0",field:"reson",component:"JInput",colProps:{span:24}}],c=[{label:"\u8BF7\u5047\u5929\u6570",field:"day",component:"InputNumber"},{label:"\u6D41\u7A0B\u5B9E\u4F8Bid",field:"orderId",component:"Input"},{label:"\u539F\u56E0",field:"reson",component:"Input"},{label:"\u72B6\u6001",field:"state",component:"JDictSelectTag",componentProps:{type:"list",dictCode:"flowState"}}],i="/tsLeave/exportXls",p="/tsLeave/importExcel",m=e=>n.get({url:"/tsLeave/list",params:e}),f=(e,t)=>n.delete({url:"/tsLeave/delete",params:e},{joinParamsToUrl:!0}).then(()=>{t()}),g=(e,t)=>{u.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>n.delete({url:"/tsLeave/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{t()})})},v=(e,t)=>{let r=t?"/tsLeave/edit":"/tsLeave/add";return n.post({url:r,params:e})},B="/view/show.html?orderId=",F=e=>n.get({url:"/tsLeave/log",params:e}),b=e=>n.post({url:"/tsLeave/deploy",params:e},{joinParamsToUrl:!0}),h=e=>n.post({url:"/tsLeave/approval",params:e}),x=e=>n.post({url:"/tsLeave/unApproval",params:e}),I=e=>n.post({url:"/tsLeave/judgmentReturn",params:e}),P=e=>n.post({url:"/tsLeave/terminate",params:e});export{p as a,B as b,s as c,b as d,I as e,P as f,i as g,f as h,g as i,c as j,v as k,m as l,F as m,h as n,x as o,d as s};
