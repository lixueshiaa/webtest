var p=(u,l,e)=>new Promise((i,F)=>{var n=t=>{try{r(e.next(t))}catch(C){F(C)}},o=t=>{try{r(e.throw(t))}catch(C){F(C)}},r=t=>t.done?i(t.value):Promise.resolve(t.value).then(n,o);r((e=e.apply(u,l)).next())});import{a1 as d,a as E,fC as B,z as c,ea as a,C as m,an as f,U as A,o as h,i as b,p as y,n as s}from"./index.d537950e.js";const _=E({name:"JVxeDemo5",components:{[B.name]:B},setup(){const u=c(),l=c([{title:"\u5355\u884C\u6587\u672C",key:"input",type:a.input,width:220,defaultValue:"",placeholder:"\u8BF7\u8F93\u5165${title}"},{title:"\u591A\u884C\u6587\u672C",key:"textarea",type:a.textarea,width:240},{title:"\u6570\u5B57",key:"number",type:a.inputNumber,width:120,defaultValue:32},{title:"\u65E5\u671F\u65F6\u95F4",key:"datetime",type:a.datetime,width:240,defaultValue:"2019-4-30 14:52:22",placeholder:"\u8BF7\u9009\u62E9"},{title:"\u65F6\u95F4",key:"time",type:a.time,width:220,defaultValue:"14:52:22",placeholder:"\u8BF7\u9009\u62E9"},{title:"\u4E0B\u62C9\u6846",key:"select",type:a.select,width:220,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],allowSearch:!0,placeholder:"\u8BF7\u9009\u62E9"},{title:"\u590D\u9009\u6846",key:"checkbox",type:a.checkbox,customValue:["Y","N"],defaultChecked:!1}]),e=c([]);function i(n){console.log("props: ",n)}function F({row:n}){var o;(o=u.value)==null||o.removeRows(n)}return m(()=>p(this,null,function*(){console.log(u.value),yield f(),u.value.addRows([{input:"input_1"},{input:"input_2"},{input:"input_3"},{input:"input_4"},{input:"input_5"}],{setActive:!1})})),{tableRef:u,columns:l,dataSource:e,handleView:i,handleDelete:F}}}),D=s("b",null,"\u952E\u76D8\u64CD\u4F5C\u5FEB\u6377\u952E\uFF1A",-1),k=s("div",{style:{border:"1px solid #cccccc",padding:"8px",width:"740px"}},[s("pre",null,`             F2 | \u5982\u679C\u5B58\u5728\uFF0C\u6FC0\u6D3B\u5355\u5143\u683C\u4E3A\u7F16\u8F91\u72B6\u6001\r
            Esc | \u5982\u679C\u5B58\u5728\uFF0C\u53D6\u6D88\u5355\u5143\u683C\u7F16\u8F91\u72B6\u6001\r
              \u2191 | \u5982\u679C\u5B58\u5728\uFF0C\u5219\u79FB\u52A8\u5230\u4E0A\u9762\u7684\u5355\u5143\u683C\r
              \u2193 | \u5982\u679C\u5B58\u5728\uFF0C\u5219\u79FB\u52A8\u5230\u4E0B\u9762\u7684\u5355\u5143\u683C\r
              \u2190 | \u5982\u679C\u5B58\u5728\uFF0C\u5219\u79FB\u52A8\u5230\u5DE6\u8FB9\u7684\u5355\u5143\u683C\r
              \u2192 | \u5982\u679C\u5B58\u5728\uFF0C\u5219\u79FB\u52A8\u5230\u53F3\u8FB9\u7684\u5355\u5143\u683C\r
            Tab | \u5982\u679C\u5B58\u5728\uFF0C\u5219\u79FB\u52A8\u5230\u53F3\u8FB9\u5355\u5143\u683C\uFF1B\u5982\u679C\u79FB\u52A8\u5230\u6700\u540E\u4E00\u5217\uFF0C\u5219\u4ECE\u4E0B\u4E00\u884C\u5F00\u59CB\u79FB\u5230\uFF0C\u4EE5\u6B64\u5FAA\u73AF\r
    Shift + Tab | \u5982\u679C\u5B58\u5728\uFF0C\u5219\u79FB\u52A8\u5230\u5DE6\u8FB9\u5355\u5143\u683C\uFF0C\u5982\u679C\u79FB\u52A8\u5230\u7B2C\u4E00\u5217\uFF0C\u5219\u4ECE\u4E0A\u4E00\u884C\u5F00\u59CB\u79FB\u5230\uFF0C\u4EE5\u6B64\u5FAA\u73AF\r
          Enter | \u5982\u679C\u5B58\u5728\uFF0C\u53D6\u6D88\u5355\u5143\u683C\u7F16\u8F91\u5E76\u79FB\u52A8\u5230\u4E0B\u9762\u7684\u5355\u5143\u683C\r
  Shift + Enter | \u5982\u679C\u5B58\u5728\uFF0C\u53D6\u6D88\u5355\u5143\u683C\u7F16\u8F91\u5E76\u79FB\u52A8\u5230\u4E0A\u9762\u7684\u5355\u5143\u683C`)],-1);function w(u,l,e,i,F,n){const o=A("JVxeTable");return h(),b("div",null,[D,k,y(o,{ref:"tableRef",stripe:"",toolbar:"",rowNumber:"",rowSelection:"",keyboardEdit:"",columns:u.columns,dataSource:u.dataSource},null,8,["columns","dataSource"])])}var V=d(_,[["render",w]]);export{V as default};
