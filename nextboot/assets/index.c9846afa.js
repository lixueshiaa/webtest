var q=Object.defineProperty,G=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var w=(e,o,t)=>o in e?q(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,B=(e,o)=>{for(var t in o||(o={}))A.call(o,t)&&w(e,t,o[t]);if(D)for(var t of D(o))O.call(o,t)&&w(e,t,o[t]);return e},x=(e,o)=>G(e,$(o));var P=(e,o,t)=>new Promise((n,d)=>{var g=r=>{try{p(t.next(r))}catch(c){d(c)}},b=r=>{try{p(t.throw(r))}catch(c){d(c)}},p=r=>r.done?n(r.value):Promise.resolve(r.value).then(g,b);p((t=t.apply(e,o)).next())});import{B as z}from"./index.f8f2ddf0.js";import{B as V}from"./BasicForm.74bae903.js";import"./componentMap.bdddb878.js";import{u as H}from"./useForm.0a8b633b.js";import"./RadioButtonGroup.e396598a.js";import{by as l,b6 as N,a0 as E,a as J,z as Y,bj as K,bg as Q,an as U,eY as W,o as X,i as Z,p as y,G as ee,j as m,ad as oe,N as te,bR as ne,T as ae}from"./index.6cf4d174.js";import"./JDictSelectTag.77cd1e49.js";import"./JUpload.a8971a82.js";import re from"./index.45ed0414.js";import{a as se}from"./download.61ffebe5.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./functional.4d9308b0.js";import"./base64Conver.bb012c73.js";const ie=({directoryCallback:e})=>[{label:"\u4EE3\u7801\u751F\u6210\u76EE\u5F55",field:"projectPath",component:"Input",colProps:{span:24},required:!0,componentProps:()=>({addonAfter:l("div",{style:{cursor:"pointer"},onClick(){e&&e()}},[l(N,{icon:"ant-design:folder-open"}),l("span",{},"\u6D4F\u89C8")])})},{label:"\u9875\u9762\u98CE\u683C",field:"jspMode",component:"Select",colProps:{span:24},required:!0},{label:"\u6A21\u5757\u540D\u79F0",field:"moduleType",colProps:{span:24},component:"JDictSelectTag",componentProps:{type:"list",dictCode:"moduleType"},required:!1},{label:"\u529F\u80FD\u8BF4\u660E",field:"ftlDescription",component:"Input",colProps:{span:24}},{label:"\u8868\u540D",field:"tableName",component:"Input",colProps:{span:24},required:!0,componentProps:{disabled:!0}},{label:"\u5B9E\u4F53\u7C7B\u540D",field:"entityName",component:"Input",colProps:{span:24},required:!0},{label:"\u5305\u540D(\u5C0F\u5199)",field:"entityPackage",component:"Input",colProps:{span:24},required:!1},{label:"\u4EE3\u7801\u5206\u5C42\u6837\u5F0F",field:"exp",component:"Input",colProps:{span:24},componentProps:{disabled:!0}}],le=e=>E.get({url:"/onlForm/api/tableInfo",params:e}),pe=e=>E.post({url:"/onlForm/api/codeGenerate",params:e}),ue=(e,o)=>E.get({url:"/onlForm/api/downGenerateCode",params:e,responseType:"blob"},o),Ve=J({__name:"index",emits:["register","success"],setup(e,{emit:o}){const t=Y("");let n={};const{createMessage:d}=ae(),[g,{resetFields:b,setFieldsValue:p,setProps:r,validate:c}]=H({schemas:[],showActionButtonGroup:!1}),[_,v]=K(),[I,{setModalProps:h,closeModal:M,changeLoading:f}]=Q(s=>P(this,null,function*(){t.value=`\u4EE3\u7801\u751F\u6210\u3010${s.tableName}\u3011`,yield b(),h({confirmLoading:!1}),n=yield le({code:s.id});const i=ie({directoryCallback:L}),a=n.jspModeList?n.jspModeList.map(u=>({label:u.note,value:u.code})):[];i.map(u=>{u.field==="jspMode"&&(u.componentProps={options:a})}),r({schemas:i}),U(()=>{p({projectPath:n.projectPath,jspMode:a.length?a[0].value:"",ftlDescription:n.main.tableTxt,tableName:n.main.tableName,entityName:W(`_${n.main.tableName}`)})})}));function R(s){p({projectPath:s})}function T(){return P(this,null,function*(){try{h({confirmLoading:!0});let s=yield c();f(!0);const i=yield pe(x(B({},s),{code:n.main.id,jformType:n.main.tableType}));i&&i.length?(f(!1),M(),ne.confirm({title:l("div",{},[l(N,{icon:"ant-design:exclamation-circle-outlined",style:"color: #1890ff;padding-right: 5px;font-size: 18px"}),"\u4EE3\u7801\u751F\u6210\u7ED3\u679C"]),width:"90%",centered:!0,closable:!0,content:()=>l("div",{style:{color:"#333"}},[i.map(a=>l("p",{},a))]),onOk:()=>ue({fileList:i.join(",")},{isReturnNativeResponse:!0}).then(a=>{const S=(a.headers||{})["content-disposition"]||"",k=/fileName=(.*)[;]?$/,F=S.match(k);let C="";F!=null&&F[1]&&(C=F[1].replace(/['"]/g,""));const j=a.data;if(!j){d.warning("\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25");return}se(j,C)}).catch(a=>{f(!1),console.error(a)})})):(f(!1),M()),o("success")}finally{h({confirmLoading:!1})}})}function L(){v.openModal(!0,{})}return(s,i)=>(X(),Z(te,null,[y(m(z),oe(s.$attrs,{onRegister:m(I),title:t.value,onOk:T}),{default:ee(()=>[y(m(V),{onRegister:m(g)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]),y(re,{width:500,onRegister:m(_),onSuccess:R},null,8,["onRegister"])],64))}});export{Ve as default};