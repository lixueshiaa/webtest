var a=(u,r,e)=>new Promise((t,n)=>{var m=s=>{try{o(e.next(s))}catch(i){n(i)}},F=s=>{try{o(e.throw(s))}catch(i){n(i)}},o=s=>s.done?t(s.value):Promise.resolve(s.value).then(m,F);o((e=e.apply(u,r)).next())});import{ay as c}from"./index.397c0bf9.js";import{d as f}from"./user.api.4aaf6a90.js";const P={rule(u,r){if(u==="email")return this.email(r);if(u==="phone")return this.phone(r)},email(u){return[{required:u||!1,validator:(r,e)=>a(this,null,function*(){return u==!0&&!e?Promise.reject("\u8BF7\u8F93\u5165\u90AE\u7BB1!"):e&&!new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e)?Promise.reject("\u8BF7\u8F93\u5165\u6B63\u786E\u90AE\u7BB1\u683C\u5F0F!"):Promise.resolve()}),trigger:"change"}]},phone(u){return[{required:u,validator:(r,e)=>a(this,null,function*(){return u&&!e?Promise.reject("\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u78011!"):new RegExp(/^1[3|4|5|7|8|9][0-9]\d{8}$/).test(e)?Promise.resolve():Promise.reject("\u624B\u673A\u53F7\u7801\u683C\u5F0F\u6709\u8BEF")}),trigger:"change"}]},startTime(u,r){return[{required:r||!1,validator:(e,t)=>r&&!t?Promise.reject("\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"):u&&t&&c(u).isBefore(t)?Promise.reject("\u5F00\u59CB\u65F6\u95F4\u9700\u5C0F\u4E8E\u7ED3\u675F\u65F6\u95F4"):Promise.resolve(),trigger:"change"}]},endTime(u,r){return[{required:r||!1,validator:(e,t)=>r&&!t?Promise.reject("\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4"):u&&t&&c(t).isBefore(u)?Promise.reject("\u7ED3\u675F\u65F6\u95F4\u9700\u5927\u4E8E\u5F00\u59CB\u65F6\u95F4"):Promise.resolve(),trigger:"change"}]},confirmPassword(u,r){return[{required:r||!1,validator:(e,t)=>t?t!==u.password?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")}]},duplicateCheckRule(u,r,e,t,n){return[{required:n,validator:(m,F)=>F?new Promise((o,s)=>{f({tableName:u,fieldName:r,fieldVal:F,dataId:e.id}).then(i=>{i.success?o():s(i.message||"\u6821\u9A8C\u5931\u8D25")}).catch(i=>{s(i.message||"\u9A8C\u8BC1\u5931\u8D25")})}):Promise.reject(`\u8BF7\u8F93\u5165${t.label}`)}]}};export{P as r};