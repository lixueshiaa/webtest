import{bR as s,a0 as e}from"./index.397c0bf9.js";const r=n=>e.get({url:"/sys/sysAnnouncementSend/getMyAnnouncementSend",params:n}),o=n=>e.put({url:"sys/sysAnnouncementSend/editByAnntIdAndUserId",params:n}),a=(n,t)=>{s.confirm({title:"\u786E\u8BA4\u64CD\u4F5C",content:"\u662F\u5426\u5168\u90E8\u6807\u6CE8\u5DF2\u8BFB?",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>e.put({url:"sys/sysAnnouncementSend/readAll",data:n},{joinParamsToUrl:!0}).then(()=>{t()})})},c=n=>e.get({url:"sys/annountCement/syncNotic",params:n});export{o as e,r as g,a as r,c as s};
