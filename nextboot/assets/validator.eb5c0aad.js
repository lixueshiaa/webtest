import{p as o}from"./componentMap.801737ea.js";const n={validator({},u){if(!u)return Promise.resolve();const r=u.split(" ").filter(e=>!!e);if(r.length>7)return Promise.reject("Cron\u8868\u8FBE\u5F0F\u6700\u591A7\u9879\uFF01");let i=u;if(r.length===7){const e=r[6];if(e!=="*"&&e!=="?"){let t=[];if(e.indexOf("-")>=0?t=e.split("-"):e.indexOf("/")?t=e.split("/"):t=[e],t.some(s=>isNaN(Number(s))))return Promise.reject("Cron\u8868\u8FBE\u5F0F\u53C2\u6570[\u5E74]\u9519\u8BEF\uFF1A"+e)}i=r.slice(0,6).join(" ")}try{return o.parseExpression(i).next(),Promise.resolve()}catch(e){return Promise.reject("Cron\u8868\u8FBE\u5F0F\u9519\u8BEF\uFF1A"+e)}}};var F=n.validator;export{F as J};
