import{c as n}from"./render.bf5724a4.js";import{a0 as u,bR as l}from"./index.397c0bf9.js";const o=[{title:"\u6D41\u7A0B\u540D\u79F0",dataIndex:"name",align:"center",customRender:function(e){return t=>n(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u6D41\u7A0B\u663E\u793A\u540D\u79F0",dataIndex:"displayName",align:"center",customRender:function(e){return t=>n(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u6D41\u7A0B\u7C7B\u578B",dataIndex:"type",align:"center",customRender:function(e){return t=>n(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u5B9E\u4F8Burl",dataIndex:"instanceUrl",align:"center",customRender:function(e){return t=>n(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u6D41\u7A0B\u662F\u5426\u53EF\u7528",dataIndex:"stateDict",align:"center",customRender:function(e){return t=>n(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u6D41\u7A0B\u6A21\u578B\u5B9A\u4E49",dataIndex:"content",align:"center",customRender:function(e){return t=>n(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u7248\u672C",dataIndex:"version",align:"center",customRender:function(e){return t=>n(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u521B\u5EFA\u4EBA",dataIndex:"creator",align:"center",customRender:function(e){return t=>n(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})}],i=[{label:"\u6D41\u7A0B\u540D\u79F0",field:"name",component:"JInput",colProps:{span:6}},{label:"\u6D41\u7A0B\u663E\u793A\u540D\u79F0",field:"displayName",component:"JInput",colProps:{span:6}}],d=[{field:"xmlStr",component:"JCodeEditor",label:"\u6D41\u7A0B\u7F16\u8F91\u5668",required:!0,slot:"jCodeEdit",colProps:{span:24},defaultValue:"\u6D41\u7A0Bxml\u7F16\u8F91"}],c=[{label:"\u6D41\u7A0B\u540D\u79F0",field:"name",component:"Input"},{label:"\u6D41\u7A0B\u663E\u793A\u540D\u79F0",field:"displayName",component:"Input"},{label:"\u6D41\u7A0B\u7C7B\u578B",field:"type",component:"Input"},{label:"\u5B9E\u4F8Burl",field:"instanceUrl",component:"Input"},{label:"\u6D41\u7A0B\u662F\u5426\u53EF\u7528",field:"state",component:"JDictSelectTag",componentProps:{type:"list",dictCode:"processState"}},{label:"\u6D41\u7A0B\u6A21\u578B\u5B9A\u4E49",field:"content",component:"Input"},{label:"\u7248\u672C",field:"version",component:"InputNumber"},{label:"\u521B\u5EFA\u4EBA",field:"creator",component:"Input"}],f="/view/design.html?processId=",m="/wfProcess/exportXls",p="/wfProcess/importExcel",B=e=>u.get({url:"/wfProcess/list",params:e}),F=(e,t)=>u.get({url:"/flow/start/"+e.id}).then(()=>{t()}),x=(e,t)=>u.get({url:"/flow/stop/"+e.id}).then(()=>{t()}),A=e=>u.get({url:"/flow/getXml",params:e},{successMessageMode:"none"}),D=e=>u.post({headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},url:"/flow/deployXml",params:e}),g=(e,t)=>u.delete({url:"/wfProcess/delete",params:e},{joinParamsToUrl:!0}).then(()=>{t()}),w=(e,t)=>{l.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>u.delete({url:"/wfProcess/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{t()})})},h=(e,t)=>{let r=t?"/wfProcess/edit":"/wfProcess/add";return u.post({url:r,params:e})};export{p as a,F as b,o as c,x as d,f as e,g as f,m as g,w as h,A as i,c as j,h as k,B as l,i as s,D as u,d as x};
