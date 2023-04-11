var se=Object.defineProperty,ne=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var j=(r,l,a)=>l in r?se(r,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[l]=a,S=(r,l)=>{for(var a in l||(l={}))pe.call(l,a)&&j(r,a,l[a]);if(U)for(var a of U(l))ce.call(l,a)&&j(r,a,l[a]);return r},H=(r,l)=>ne(r,ie(l));var P=(r,l,a)=>new Promise((R,m)=>{var y=p=>{try{C(a.next(p))}catch(o){m(o)}},E=p=>{try{C(a.throw(p))}catch(o){m(o)}},C=p=>p.done?R(p.value):Promise.resolve(p.value).then(y,E);C((a=a.apply(r,l)).next())});import{B as de}from"./index.7aa87f83.js";import{B as me}from"./BasicForm.7ed18e1d.js";import"./componentMap.801737ea.js";import{u as fe}from"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import{z as F,ea as d,a as Fe,B as ye,bg as ge,j as i,f as Ce,X as Be,an as be,U as h,o as I,k as N,G as c,p as g,l as Q,ad as ve,J as z,Q as D,bO as b}from"./index.0c676cb0.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import{r as Pe,c as Re,e as Ee,f as Ae,p as Se,g as he,s as De}from"./dynamicReportConfig.data.f9d0c71a.js";const G=[],W=[{label:"SQL\u89E3\u6790",value:"sql"},{label:"Api\u89E3\u6790",value:"api"}],we=[{label:"get",value:"get"},{label:"post",value:"post"}],Ke=[{title:"\u62A5\u8868\u540D\u79F0",dataIndex:"name",sorter:!0},{title:"\u62A5\u8868\u7F16\u7801",dataIndex:"code",sorter:!0},{title:"\u89E3\u6790\u7C7B\u578B",dataIndex:"reportType",sorter:!1,customRender({text:r}){const l=W.find(a=>a.value===r);return l?l.label:""}},{title:"\u6570\u636E\u6E90",dataIndex:"dbSource",sorter:!0,customRender({text:r}){const l=G.find(a=>a.value===r);return l?l.label:""}},{title:"\u62A5\u8868SQL",dataIndex:"cgrSql",sorter:!1},{title:"\u8BF7\u6C42\u65B9\u5F0F",dataIndex:"reqMethod",sorter:!0},{title:"\u7C7B\u8F6C\u6362\u5668",dataIndex:"respTrans",sorter:!1},{title:"Api\u5730\u5740",dataIndex:"apiUrl",sorter:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",sorter:!0}],ze=[{label:"\u62A5\u8868\u540D\u79F0",field:"name",component:"JInput",colProps:{span:6}},{label:"\u62A5\u8868\u7F16\u7801",field:"code",component:"JInput",colProps:{span:6}}],K=[{label:"\u62A5\u8868\u7F16\u7801",field:"code",component:"Input",required:!0,colProps:{span:8}},{label:"\u62A5\u8868\u540D\u5B57",field:"name",component:"Input",required:!0,colProps:{span:8}},{label:"\u52A8\u6001\u6570\u636E\u6E90",field:"dbSource",component:"Select",colProps:{span:8},componentProps:{options:G},ifShow:({values:r})=>r.reportType==="sql"},{label:"\u8BF7\u6C42\u65B9\u5F0F",field:"reqMethod",component:"Select",colProps:{span:8},componentProps:{options:we,allowClear:!1},ifShow:({values:r})=>r.reportType==="api",defaultValue:"post",dynamicRules:({values:r})=>r.reportType==="api"?[{required:!0,message:"\u8BF7\u9009\u62E9\u8BF7\u6C42\u65B9\u5F0F"}]:[]},{label:"\u901A\u7528\u914D\u7F6E",field:"configJson",component:"InputTextArea",componentProps:{rows:2,placeholder:'\u53EA\u652F\u6301\u4EE5Json\u7684\u683C\u5F0F\u8FDB\u884C\u914D\u7F6E\uFF0C\u5982\uFF1A{ "export": false }'},helpMessage:[""],helpComponentProps:{icon:"bxs-folder-open",text:['1.\u662F\u5426\u5C55\u793A\u5BFC\u51FA\u6309\u94AE, \u9ED8\u8BA4\u503C(true)\uFF1B\u914D\u7F6E\u9879 >> { "export": true }','2.\u5BFC\u51FA\u6309\u94AE\u540D\u5B57\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u503C(\u5BFC\u51FA)\uFF1B\u914D\u7F6E\u9879 >> { "exportBtnName": "\u5BFC\u51FA" }','3.\u5BFC\u51FA\u6587\u4EF6\u540D\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u503C(\u5BFC\u51FA\u6587\u4EF6)\uFF1B\u914D\u7F6E\u9879 >> { "exportFileName": "\u5BFC\u51FA\u6587\u4EF6" }'],maxWidth:"550px"},colProps:{span:24},itemProps:{labelCol:{},wrapperCol:{xs:24,sm:24},colon:!0}},{label:"\u62A5\u8868QL",field:"cgrSql",component:"JCodeEditor",componentProps:{height:"200px",fullScreen:!0},colProps:{span:20},itemProps:{labelCol:{},wrapperCol:{xs:20,sm:20},colon:!0},ifShow:({values:r})=>r.reportType==="sql",dynamicRules:({values:r})=>r.reportType==="sql"?[{required:!0,message:"\u8BF7\u586B\u5199\u62A5\u8868SQL"}]:[]},{label:"\u7C7B\u8F6C\u6362\u5668",field:"respTrans",component:"Input",colProps:{span:8},ifShow:({values:r})=>r.reportType==="api"},{label:"Api\u5730\u5740",field:"apiUrl",component:"InputTextArea",colProps:{span:12},ifShow:({values:r})=>r.reportType==="api",dynamicRules:({values:r})=>r.reportType==="api"?[{required:!0,message:"\u8BF7\u586B\u5199Api\u5730\u5740"}]:[]},{label:" ",field:"analyseButton",component:"Input",slot:"analyseButton",colProps:{span:2},itemProps:{labelCol:{xs:1,sm:1},wrapperCol:{xs:23,sm:23},colon:!1}},{label:"",field:"reportType",component:"Select",colProps:{span:2},componentProps:{options:W,allowClear:!1},defaultValue:"sql",itemProps:{labelCol:{xs:0,sm:0},wrapperCol:{xs:16,sm:16},colon:!1}}],xe=F([{title:"",key:"id",type:d.slot,width:"0px",slotName:"idNullSlot"},{title:"\u53C2\u6570\u5B57\u6BB5",key:"paramName",type:d.input,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"},{unique:!0,message:"${title}\u4E0D\u80FD\u91CD\u590D"}]},{title:"\u53C2\u6570\u6587\u672C",key:"paramTxt",type:d.input,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]},{title:"\u53C2\u6570\u9ED8\u8BA4\u503C",key:"paramValue",placeholder:"\u8BF7\u8F93\u5165${title}",type:d.input}]),Te=[{title:"Excel",value:"excel"},{title:"Ajax",value:"ajax"},{title:"Zip\u538B\u7F29\u5305",value:"zip"}],ke=[{title:"get",value:"get"},{title:"post",value:"post"}],qe=F([{title:"",key:"id",type:d.slot,width:"0px",slotName:"idNullSlot"},{title:"\u6309\u94AE\u540D\u79F0",key:"btnName",type:d.input,placeholder:"\u8BF7\u8F93\u5165${title}",allowClear:!0,validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"},{unique:!0,message:"${title}\u4E0D\u80FD\u91CD\u590D"}]},{title:"method",key:"method",type:d.select,placeholder:"\u8BF7\u9009\u62E9${title}",allowClear:!1,validateRules:[{required:!0,message:"\u8BF7\u9009\u62E9${title}"}],options:ke},{title:"\u81EA\u5B9A\u4E49\u53C2\u6570",key:"params",type:d.textarea,placeholder:"\u53EA\u80FD\u914D\u7F6EJSON\u5BF9\u8C61",allowClear:!0},{title:"apiUrl",key:"url",type:d.input,placeholder:"\u8BF7\u8F93\u5165${title}",allowClear:!0,validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]},{title:"\u8FD4\u56DE\u7C7B\u578B",key:"callType",placeholder:"\u8BF7\u9009\u62E9${title}",allowClear:!1,type:d.select,options:Te,validateRules:[{required:!0,message:"\u8BF7\u9009\u62E9${title}"}]},{title:"\u6269\u5C55\u53C2\u6570",key:"extendJson",placeholder:"\u53EA\u652F\u6301\u4EE5Json\u7684\u683C\u5F0F\u8FDB\u884C\u914D\u7F6E",allowClear:!0,titleHelp:{message:`1. position: search<\u9ED8\u8BA4> (search<\u641C\u7D22\u533A\u57DF> | tool<\u5DE5\u5177\u533A\u57DF>);
`},type:d.textarea,validateRules:[{required:!1,message:"\u8BF7\u8F93\u5165${title}"}],defaultValue:""}]),_e=z("SQL\u89E3\u6790"),$e=z("Api\u89E3\u6790"),Ie=Fe({__name:"index",emits:["register","success"],setup(r,{emit:l}){const a=F(!0),R=F(""),m=F(300),y=F("dynamicReportConfig"),E=F(),C=F(),p=F();let o=ye({dynamicReportConfig:[],reportParams:[],customBtn:[]}),A=document.documentElement.clientHeight||document.body.clientHeight;m.value=A-618;const[X,{resetFields:Z,setFieldsValue:Y,validate:w,getFieldsValue:O,setProps:ee}]=fe({schemas:K,showActionButtonGroup:!1,labelWidth:150,labelCol:{}}),[te,{setModalProps:x,closeModal:ue,changeLoading:f}]=ge(t=>P(this,null,function*(){if(yield Z(),x({confirmLoading:!1,minHeight:80}),a.value=!!(t!=null&&t.isUpdate),y.value="dynamicReportConfig",t.dbSourceOptions){const e=K.map(u=>(u.field==="dbSource"&&u.componentProps&&(u.componentProps.options=t.dbSourceOptions),u));ee({schemas:e})}i(a)?(R.value=t.record.id,yield Y(S({},t.record)),setTimeout(()=>{const e={headId:t.record.id};f(!0),Pe(e).then(u=>{o.dynamicReportConfig=[...u],f(!1)}).catch(u=>{f(!1)}),Re(e).then(u=>{o.reportParams=[...u]}),Ee(e).then(u=>{o.customBtn=[...u]})},50)):(R.value="",o.dynamicReportConfig=[],o.reportParams=[]),t.record.reportType==="sql"?m.value=A-618:t.record.reportType==="api"?m.value=A-472:m.value=A-618})),oe=Ce(()=>i(a)?"\u7F16\u8F91":"\u65B0\u589E");function T(t,{oldIndex:e,newIndex:u}){switch(t){case"dynamicReportConfig":const n=o.dynamicReportConfig.splice(e,1)[0];o.dynamicReportConfig.splice(u,0,n);break;case"reportParams":const B=o.reportParams.splice(e,1)[0];o.reportParams.splice(u,0,B);break;case"customBtn":const $=o.customBtn.splice(e,1)[0];o.customBtn.splice(u,0,$);break}}function re(){return P(this,null,function*(){yield w(["reqMethod","apiUrl"]);const t=O(),e=o.reportParams.map(u=>{const n=D(u);return b(n,{id:n.id.indexOf("row_")===-1?n.id:""})});f(!0),Se({reqMethod:t.reqMethod,apiUrl:t.apiUrl,respTrans:t.respTrans,onlReportParams:e}).then(u=>{const{fields:n,params:B}=u;o.dynamicReportConfig=[...n],o.reportParams=[...B],f(!1)}).catch(u=>{console.error(u),f(!1)})})}function ae(){return P(this,null,function*(){yield w(["cgrSql"]);const t=O();f(!0),he({dbKey:t.dbSource,sql:t.cgrSql}).then(e=>{const{fields:u,params:n}=e;o.dynamicReportConfig=[...u],o.reportParams=[...n],f(!1)}).catch(e=>{console.error(e),f(!1)})})}function k(t,{deleteRows:e}){switch(t){case"dynamicReportConfig":o.dynamicReportConfig=o.dynamicReportConfig.filter(u=>e.every(n=>n.id!==u.id));break;case"reportParams":o.reportParams=o.reportParams.filter(u=>e.every(n=>n.id!==u.id));break;case"customBtn":o.customBtn=o.customBtn.filter(u=>e.every(n=>n.id!==u.id));break}}function q(t){v(t)}function v(t){switch(t){case"dynamicReportConfig":M();break;case"reportParams":J();break;case"customBtn":V();break;default:M(),J(),V();break}}function V(){o.customBtn=p.value.getTableData().map(t=>b({},t))}function M(){o.dynamicReportConfig=E.value.getTableData().map(t=>b({},t))}function J(){o.reportParams=C.value.getTableData().map(t=>b({},t))}function L(){return P(this,null,function*(){try{let t=yield w(),e=yield le();x({confirmLoading:!0}),yield De(S({head:H(S({},t),{id:i(R)})},e),i(a)),ue(),l("success")}finally{x({confirmLoading:!1})}})}function _(t){t!==y.value&&(y.value=t,setTimeout(()=>{L()},500))}function le(){return P(this,null,function*(){let t;return t=yield E.value.validateTable(),t?(_("dynamicReportConfig"),Promise.reject(null)):(t=yield C.value.validateTable(),t?(_("reportParams"),Promise.reject(null)):(t=yield p.value.validateTable(),t?(_("customBtn"),Promise.reject(null)):(v(),Promise.resolve({items:o.dynamicReportConfig.map(e=>{const u=D(e);return b(u,{id:u.id.indexOf("row_")===-1?u.id:""})}),params:o.reportParams.map(e=>{const u=D(e);return b(u,{id:u.id.indexOf("row_")===-1?u.id:""})}),btns:o.customBtn.map(e=>{const u=D(e);return b(u,{id:u.id.indexOf("row_")===-1?u.id:""})})}))))})}return Be(y,(t,e)=>{be(()=>{v(e)})}),(t,e)=>{const u=h("a-button"),n=h("JVxeTable"),B=h("a-tab-pane"),$=h("a-tabs");return I(),N(i(de),ve(t.$attrs,{onRegister:i(te),title:i(oe),onOk:L}),{default:c(()=>[g(i(me),{onRegister:i(X)},{analyseButton:c(({values:s})=>[s.reportType==="sql"?(I(),N(u,{key:0,type:"primary",onClick:ae},{default:c(()=>[_e]),_:1})):Q("",!0),s.reportType==="api"?(I(),N(u,{key:1,type:"primary",onClick:re},{default:c(()=>[$e]),_:1})):Q("",!0)]),_:1},8,["onRegister"]),g($,{activeKey:y.value,"onUpdate:activeKey":e[12]||(e[12]=s=>y.value=s)},{default:c(()=>[g(B,{tab:"\u52A8\u6001\u62A5\u8868\u914D\u7F6E\u660E\u7EC6",key:"dynamicReportConfig",forceRender:!0},{default:c(()=>[g(n,{ref_key:"dynamicReportConfigRef",ref:E,toolbar:"",rowNumber:"",dragSort:"",rowSelection:"",height:m.value,dataSource:i(o).dynamicReportConfig,columns:i(Ae),onDragged:e[0]||(e[0]=s=>T("dynamicReportConfig",s)),onAdded:e[1]||(e[1]=s=>q("dynamicReportConfig")),onRemoved:e[2]||(e[2]=s=>k("dynamicReportConfig",s)),onSelectRowChange:e[3]||(e[3]=s=>v("dynamicReportConfig"))},{idNullSlot:c(()=>[]),_:1},8,["height","dataSource","columns"])]),_:1}),g(B,{tab:"\u62A5\u8868\u53C2\u6570",key:"reportParams",forceRender:!0},{default:c(()=>[g(n,{ref_key:"reportParamsRef",ref:C,toolbar:"",rowNumber:"",dragSort:"",rowSelection:"",height:m.value,dataSource:i(o).reportParams,columns:i(xe),onDragged:e[4]||(e[4]=s=>T("reportParams",s)),onAdded:e[5]||(e[5]=s=>q("reportParams")),onRemoved:e[6]||(e[6]=s=>k("reportParams",s)),onSelectRowChange:e[7]||(e[7]=s=>v("reportParams"))},{idNullSlot:c(()=>[]),_:1},8,["height","dataSource","columns"])]),_:1}),g(B,{tab:"\u81EA\u5B9A\u4E49\u6309\u94AE",key:"customBtn",forceRender:!0},{default:c(()=>[g(n,{ref_key:"customBtnRef",ref:p,toolbar:"",rowNumber:"",dragSort:"",rowSelection:"",height:m.value,dataSource:i(o).customBtn,columns:i(qe),onDragged:e[8]||(e[8]=s=>T("customBtn",s)),onAdded:e[9]||(e[9]=s=>q("customBtn")),onRemoved:e[10]||(e[10]=s=>k("customBtn",s)),onSelectRowChange:e[11]||(e[11]=s=>v("customBtn"))},{idNullSlot:c(()=>[]),_:1},8,["height","dataSource","columns"])]),_:1})]),_:1},8,["activeKey"])]),_:1},16,["onRegister","title"])}}});var Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Ie as _,Ke as c,Ge as i,ze as s};
