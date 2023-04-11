var j=Object.defineProperty;var T=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var J=(r,a,u)=>a in r?j(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,M=(r,a)=>{for(var u in a||(a={}))H.call(a,u)&&J(r,u,a[u]);if(T)for(var u of T(a))I.call(a,u)&&J(r,u,a[u]);return r};var b=(r,a,u)=>new Promise((f,C)=>{var B=m=>{try{y(u.next(m))}catch(c){C(c)}},k=m=>{try{y(u.throw(m))}catch(c){C(c)}},y=m=>m.done?f(m.value):Promise.resolve(m.value).then(B,k);y((u=u.apply(r,a)).next())});import{B as W}from"./index.9788db2e.js";import{B as z}from"./BasicForm.d1b5a4f4.js";import"./componentMap.6942b0b6.js";import{u as Q}from"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import{a as X,f as Y,j as n,z as p,bg as Z,ea as g,U as _,o as ee,k as ue,G as v,p as d,ad as te,e3 as ae}from"./index.9eb451d3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import{f as oe,u as re,s as se}from"./check.rule.data.3311ba5f.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";import"./user.api.c26e46a3.js";const Ke=X({__name:"CheckRuleModal",emits:["register","success"],setup(r,{emit:a}){const u=Y(()=>n(f)?"\u7F16\u8F91":"\u65B0\u589E"),f=p(!0),[C,{resetFields:B,setFieldsValue:k,validate:y,getFieldsValue:m}]=Q({schemas:oe,showActionButtonGroup:!1}),c=p("1");let w=p([]),D=p([]);const[O,{setModalProps:A,closeModal:N}]=Z(e=>b(this,null,function*(){if(yield B(),A({confirmLoading:!1}),f.value=!!(e!=null&&e.isUpdate),c.value="1",w.value=[],D.value=[],n(f)){yield k(M({},e.record));let o=e.record.ruleJson;if(o){let s=JSON.parse(o),t=[],i=[],l="1";s.forEach(F=>{F.digits==="*"?t.push(Object.assign(F,{priority:l})):(l="0",i.push(F))}),w.value=i,D.value=t}}})),R=p(),S=p();function V(e,o){return new Promise((s,t)=>{e.value.validateTable().then(i=>{if(i)c.value=o,t();else{const l=e.value.getTableData();s(l)}})})}function q(){return b(this,null,function*(){let e,o=[],s=[];y().then(t=>(e=t,V(R,"1"))).then(t=>(t&&t.length>0&&(s=t),V(S,"2"))).then(t=>{t&&t.length>0&&(o=t);let i=[],l=[];for(let h=0;h<o.length;h++){let E=o[h];E.digits="*",E.priority==="1"?i.push(E):l.push(E)}let G=i.concat(s).concat(l).map(h=>ae(h,"digits","pattern","message")),K=JSON.stringify(G),P=Object.assign({},e,{ruleJson:K});L(P)}).catch(()=>{A({confirmLoading:!1}),console.error("\u9A8C\u8BC1\u672A\u901A\u8FC7!")})})}function L(e){return b(this,null,function*(){try{console.log("\u8868\u5355\u63D0\u4EA4\u6570\u636E",e),A({confirmLoading:!0}),f.value?yield re(e):yield se(e),N(),a("success")}finally{A({confirmLoading:!1})}})}const x=({cellValue:e},o)=>{try{new RegExp(e),o(!0)}catch(s){o(!1,"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6B63\u5219\u8868\u8FBE\u5F0F")}},U=p([{title:"\u4F4D\u6570",key:"digits",type:g.inputNumber,minWidth:180,validateRules:[{required:!0,message:"${title}\u4E0D\u80FD\u4E3A\u7A7A"},{pattern:/^[1-9]\d*$/,message:"\u8BF7\u8F93\u5165\u96F6\u4EE5\u4E0A\u7684\u6B63\u6574\u6570"}]},{title:"\u89C4\u5219\uFF08\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09",key:"pattern",minWidth:320,type:g.input,validateRules:[{required:!0,message:"\u89C4\u5219\u4E0D\u80FD\u4E3A\u7A7A"},{handler:x}]},{title:"\u63D0\u793A\u6587\u672C",key:"message",minWidth:180,type:g.input,validateRules:[{required:!0,message:"${title}\u4E0D\u80FD\u4E3A\u7A7A"}]}]),$=p([{title:"\u4F18\u5148\u7EA7",key:"priority",type:g.select,defaultValue:"1",options:[{title:"\u4F18\u5148\u8FD0\u884C",value:"1"},{title:"\u6700\u540E\u8FD0\u884C",value:"0"}],validateRules:[]},{title:"\u89C4\u5219\uFF08\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09",key:"pattern",width:"40%",type:g.input,validateRules:[{required:!0,message:"\u89C4\u5219\u4E0D\u80FD\u4E3A\u7A7A"},{handler:x}]},{title:"\u63D0\u793A\u6587\u672C",key:"message",width:"20%",type:g.input,validateRules:[{required:!0,message:"${title}\u4E0D\u80FD\u4E3A\u7A7A"}]}]);return(e,o)=>{const s=_("a-alert"),t=_("JVxeTable"),i=_("a-tab-pane"),l=_("a-tabs");return ee(),ue(n(W),te(e.$attrs,{onRegister:n(O),onOk:q,title:n(u),width:1200,destroyOnClose:""}),{default:v(()=>[d(n(z),{onRegister:n(C)},null,8,["onRegister"]),d(l,{activeKey:c.value,"onUpdate:activeKey":o[0]||(o[0]=F=>c.value=F)},{default:v(()=>[d(i,{tab:"\u5C40\u90E8\u89C4\u5219",key:"1",forceRender:!0},{default:v(()=>[d(t,{ref_key:"vTable1",ref:R,toolbar:"",rowNumber:"",dragSort:"",rowSelection:"",maxHeight:580,dataSource:n(w),columns:U.value},{toolbarAfter:v(()=>[d(s,{type:"info",showIcon:"",message:"\u5C40\u90E8\u89C4\u5219\u6309\u7167\u4F60\u8F93\u5165\u7684\u4F4D\u6570\u6709\u5E8F\u7684\u6821\u9A8C",style:{"margin-bottom":"8px"}})]),_:1},8,["dataSource","columns"])]),_:1}),d(i,{tab:"\u5168\u5C40\u89C4\u5219",key:"2",forceRender:!0},{default:v(()=>[d(t,{ref_key:"vTable2",ref:S,toolbar:"",rowNumber:"",dragSort:"",rowSelection:"",maxHeight:580,dataSource:n(D),addSetActive:!1,columns:$.value},{toolbarAfter:v(()=>[d(s,{type:"info",showIcon:"",message:"\u5168\u5C40\u89C4\u5219\u53EF\u6821\u9A8C\u7528\u6237\u8F93\u5165\u7684\u6240\u6709\u5B57\u7B26\uFF1B\u5168\u5C40\u89C4\u5219\u7684\u4F18\u5148\u7EA7\u6BD4\u5C40\u90E8\u89C4\u5219\u7684\u8981\u9AD8\u3002",style:{"margin-bottom":"8px"}})]),_:1},8,["dataSource","columns"])]),_:1})]),_:1},8,["activeKey"])]),_:1},16,["onRegister","title"])}}});export{Ke as default};
