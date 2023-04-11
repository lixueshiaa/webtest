var C=Object.defineProperty;var h=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var S=(e,s,t)=>s in e?C(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,D=(e,s)=>{for(var t in s||(s={}))_.call(s,t)&&S(e,t,s[t]);if(h)for(var t of h(s))E.call(s,t)&&S(e,t,s[t]);return e};var y=(e,s,t)=>new Promise((u,r)=>{var p=l=>{try{d(t.next(l))}catch(m){r(m)}},g=l=>{try{d(t.throw(l))}catch(m){r(m)}},d=l=>l.done?u(l.value):Promise.resolve(l.value).then(p,g);d((t=t.apply(e,s)).next())});import{B as v}from"./index.7ab28a2b.js";import{B as w}from"./BasicForm.3d2570da.js";import"./componentMap.b6eed178.js";import{u as P}from"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import{a0 as i,bR as k,a as A,z as B,bg as M,f as L,j as n,o as R,k as U,G as N,p as O,ad as J}from"./index.397c0bf9.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";const ee=[{title:"\u8868\u5355\u540D\u79F0",align:"left",dataIndex:"formName"},{title:"\u8868\u5355ID",align:"center",dataIndex:"id",width:200},{title:"\u8868\u5355\u7C7B\u578B",align:"center",dataIndex:"formTypeDict"},{title:"\u8868\u5355\u72B6\u6001",align:"center",dataIndex:"stateDict"},{title:"\u8868\u5355\u63CF\u8FF0",align:"center",dataIndex:"remark"},{title:"url",align:"center",dataIndex:"url"},{title:"\u7EA7\u522B",align:"center",dataIndex:"level"},{title:"\u6A21\u5F0F",align:"center",dataIndex:"modelDict"},{title:"\u4F7F\u7528\u72B6\u6001",align:"center",dataIndex:"useStateDict"},{title:"\u6587\u4EF6\u5939\u540D\u79F0",align:"center",dataIndex:"folderName"},{title:"\u9875\u9762\u7C7B\u578B",align:"center",dataIndex:"pageTypeDict"},{title:"\u56FE\u6807",align:"center",dataIndex:"icon"}],j=[{label:"\u8868\u5355\u540D\u79F0",field:"formName",component:"Input"},{label:"\u8868\u5355\u7C7B\u578B",field:"formType",component:"JDictSelectTag",componentProps:{dictCode:"formType"}},{label:"\u8868\u5355\u72B6\u6001",field:"state",component:"JDictSelectTag",componentProps:{dictCode:"YesOrNo"}},{label:"\u8868\u5355\u63CF\u8FF0",field:"remark",component:"Input"},{label:"url",field:"url",component:"Input",dynamicDisabled:!0},{label:"\u7EA7\u522B",field:"level",component:"InputNumber"},{label:"\u7236\u7EA7\u8282\u70B9",field:"pid",component:"JTreeSelect",componentProps:{dict:"sys_form_design,form_name,id",pidField:"pid",pidValue:"0",hasChildField:"has_child"},dynamicDisabled:!0},{label:"\u6A21\u5F0F",field:"model",component:"JDictSelectTag",componentProps:{dictCode:"model"}},{label:"\u4F7F\u7528\u72B6\u6001",field:"useState",component:"JDictSelectTag",componentProps:{dictCode:"designType"}},{label:"\u6587\u4EF6\u5939\u540D\u79F0",field:"folderName",component:"Input"},{label:"\u9875\u9762\u7C7B\u578B",field:"pageType",component:"JDictSelectTag",componentProps:{dictCode:"pageType"}},{label:"\u56FE\u6807",field:"icon",component:"Input"},{label:"",field:"id",component:"Input",show:!1}],te="/SysFormDesign/sysFormDesign/exportXls",se="/SysFormDesign/sysFormDesign/importExcel",oe=e=>i.get({url:"/SysFormDesign/sysFormDesign/rootList",params:e}),ne=(e,s)=>i.delete({url:"/SysFormDesign/sysFormDesign/delete",params:e},{joinParamsToUrl:!0}).then(()=>{s()}),le=(e,s)=>{k.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>i.delete({url:"/SysFormDesign/sysFormDesign/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{s()})})},V=(e,s)=>{let t=s?"/SysFormDesign/sysFormDesign/edit":"/SysFormDesign/sysFormDesign/add";return i.post({url:t,params:e})},z=e=>i.get({url:"/SysFormDesign/sysFormDesign/loadTreeRoot",params:e}),ae=e=>i.get({url:"/SysFormDesign/sysFormDesign/childList",params:e}),ie=e=>i.get({url:"/SysFormDesign/sysFormDesign/getChildListBatch",params:e},{isTransformResponse:!1}),G=A({__name:"SysFormDesignModal",emits:["register","success"],setup(e,{emit:s}){const t=B(!0),u=B([]),r=B([]),[p,{resetFields:g,setFieldsValue:d,validate:l,updateSchema:m}]=P({schemas:j,showActionButtonGroup:!1,labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:18}}}),[b,{setModalProps:f,closeModal:x}]=M(o=>y(this,null,function*(){yield g(),u.value=[],f({confirmLoading:!1,minHeight:80}),t.value=!!(o!=null&&o.isUpdate),o!=null&&o.record&&(yield d(D({},o.record))),r.value=yield z({async:!1,pcode:""})})),I=L(()=>n(t)?"\u7F16\u8F91":"\u65B0\u589E");function F(o,a){if(o&&a&&a.length>0)for(let c=0;c<a.length;c++)a[c].key==o&&n(u).indexOf(o)<0?(u.value.push(a[c].key),F(a[c].parentId,n(r))):F(o,a[c].children)}function T(){return y(this,null,function*(){try{let o=yield l();f({confirmLoading:!0}),yield V(o,t.value),x(),yield F(o.pid,n(r)),s("success",{isUpdate:n(t),values:D({},o),expandedArr:n(u).reverse()})}finally{f({confirmLoading:!1})}})}return(o,a)=>(R(),U(n(v),J(o.$attrs,{onRegister:n(b),title:n(I),onOk:T}),{default:N(()=>[O(n(w),{onRegister:n(p)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});var ue=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{ue as S,G as _,se as a,le as b,ee as c,ie as d,ae as e,ne as f,te as g,oe as l};
