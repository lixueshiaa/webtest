var N=Object.defineProperty;var E=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var I=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&I(e,n,t[n]);if(E)for(var n of E(t))U.call(t,n)&&I(e,n,t[n]);return e};var b=(e,t,n)=>new Promise((r,i)=>{var f=u=>{try{c(n.next(u))}catch(d){i(d)}},m=u=>{try{c(n.throw(u))}catch(d){i(d)}},c=u=>u.done?r(u.value):Promise.resolve(u.value).then(f,m);c((n=n.apply(e,t)).next())});import{B as V}from"./index.7aa87f83.js";import{B as O}from"./BasicForm.7ed18e1d.js";import"./componentMap.801737ea.js";import{u as j}from"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import{b9 as q,a0 as h,bR as z,a as G,z as C,j as s,bg as W,an as X,f as R,bO as $,U as Q,o as g,k,G as B,i as T,a9 as Y,N as w,J as Z,t as ee,l as te,p as ne,ad as oe,n as se}from"./index.0c676cb0.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import{c as a}from"./render.6feafcd2.js";q();const be=[{title:"\u4E3B\u952E",dataIndex:"id",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u8D44\u6E90\u7C7B\u578B",dataIndex:"sysResourceTypeDict",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u8D44\u6E90\u5730\u5740",dataIndex:"resourceUrl",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u8D44\u6E90\u540D\u79F0",dataIndex:"resourceName",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u8D44\u6E90\u6240\u5C5E\u6A21\u5757",dataIndex:"sysModuleDict",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u5907\u6CE8",dataIndex:"remark",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u8BA4\u8BC1\u6807\u8BC6",dataIndex:"authFlagDict",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u6743\u9650ID",dataIndex:"permissionId",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{parentCodeRootValue:"key",childrenKey:"children",async:!1,isLeafKey:"isLeaf",parentCodeKey:"key",viewApi:"/sys/permission/queryById",rootApi:"/sys/permission/queryTree",valueKey:"key",labelKey:"name"}},e)}({init:!1,show:!1})},{title:"\u66F4\u65B0\u4EBA",dataIndex:"updateBy",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u66F4\u65B0\u65E5\u671F",dataIndex:"updateTime",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u9875\u9762\u540D\u79F0",dataIndex:"pageName",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})},{title:"\u9875\u9762\u8DEF\u7531",dataIndex:"pageUrl",align:"center",customRender:function(e){return t=>a(t,{dictField:"",fieldHref:"",extendParams:{}},e)}({init:!1,show:!1})}],Be=[{label:"\u8D44\u6E90\u7C7B\u578B",field:"sysResourceType",component:"JInput",colProps:{span:8}},{label:"\u8D44\u6E90\u5730\u5740",field:"resourceUrl",component:"JInput",colProps:{span:8}},{label:"\u8D44\u6E90\u540D\u79F0",field:"resourceName",component:"JInput",colProps:{span:8}},{label:"\u8D44\u6E90\u6240\u5C5E\u6A21\u5757",field:"sysModule",component:"JInput",colProps:{span:8}},{label:"\u8BA4\u8BC1\u6807\u8BC6",field:"authFlag",component:"JDictSelectTag",componentProps:{type:"list",dictCode:"booleanValue"},colProps:{span:8}},{label:"\u6743\u9650ID",field:"permissionId",component:"NextTreeSelect",componentProps:()=>y({},{parentCodeRootValue:"key",childrenKey:"children",async:!1,isLeafKey:"isLeaf",parentCodeKey:"key",viewApi:"",rootApi:"/sys/permission/queryTree",valueKey:"value",labelKey:"label"}),colProps:{span:8}}],re=[{label:"\u8D44\u6E90\u7C7B\u578B",field:"sysResourceType",colProps:{span:24},component:"JDictSelectTag",componentProps:{type:"list",dictCode:"sysResourceType"}},{label:"\u8D44\u6E90\u5730\u5740",field:"resourceUrl",colProps:{span:24},component:"Input",componentProps:{}},{label:"\u8D44\u6E90\u540D\u79F0",field:"resourceName",colProps:{span:24},component:"Input",componentProps:{}},{label:"\u8D44\u6E90\u6240\u5C5E\u6A21\u5757",field:"sysModule",colProps:{span:24},component:"JDictSelectTag",componentProps:{type:"list",dictCode:"sysModule"}},{label:"\u5907\u6CE8",field:"remark",colProps:{span:24},component:"Input",componentProps:{}},{label:"\u8BA4\u8BC1\u6807\u8BC6",field:"authFlag",colProps:{span:24},component:"JDictSelectTag",componentProps:{type:"radio",stringToNumber:!0,dictCode:"booleanValue"}},{label:"\u6743\u9650ID",field:"permissionId",colProps:{span:24},component:"NextTreeSelect",componentProps:()=>y({},{parentCodeRootValue:"key",childrenKey:"children",async:!1,isLeafKey:"isLeaf",parentCodeKey:"key",viewApi:"/sys/permission/queryById",rootApi:"/sys/permission/queryTree",valueKey:"key",labelKey:"label"})},{label:"\u9875\u9762\u540D\u79F0",field:"pageName",colProps:{span:24},component:"Input",componentProps:{}},{label:"\u9875\u9762\u8DEF\u7531",field:"pageUrl",colProps:{span:24},component:"Input",componentProps:{}}],Fe="/sys/resource/exportXls",De="/sys/resource/importResource",Ee=e=>h.get({url:"/sys/resource/list",params:e}),Ie=(e,t)=>h.delete({url:"/sys/resource/delete",params:e},{joinParamsToUrl:!0}).then(()=>{t()}),Ce=(e,t)=>{z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>h.delete({url:"/sys/resource/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{t()})})},ae=(e,t)=>{let n=t?"/sys/resource/edit":"/sys/resource/add";return h.post({url:n,params:e})},ue=se("span",null,null,-1),le=G({__name:"SysResourceModal",emits:["register","success"],setup(e,{emit:t}){const n={},r=C("");let i="",f={};const m=C([{label:"\u53D6\u6D88",methods:"cancel",ifShow:()=>s(r)!=="detail"},{label:"\u786E\u8BA4",methods:"handleSubmit",type:"primary",ifShow:()=>s(r)!=="detail"}]),[c,u]=j({labelWidth:150,schemas:re,showActionButtonGroup:!1}),{setProps:d,resetFields:S,setFieldsValue:_,validate:F,getFieldsValue:A}=u,[M,{setModalProps:P,closeModal:D}]=W(o=>b(this,null,function*(){r.value=o.action,i=o.title,f=o.record,yield S(),P({confirmLoading:!1}),s(r)!=="add"&&X(()=>{_(y({},o.record)),setTimeout(()=>{F()},0)}),d({disabled:s(r)==="detail"})})),v=R(()=>s(r)==="detail"?"\u8BE6\u60C5":s(r)==="editor"?"\u7F16\u8F91":s(r)==="add"?"\u65B0\u589E":i),K=R(()=>m.value.map(o=>{const p=o.methods;return o.onClick=()=>{x[p]&&x[p]()},o}));function H(o){return typeof o=="function"?o():o}const x={handleSubmit:function(){return b(this,null,function*(){try{const o=yield F(),p=A();P({confirmLoading:!0}),yield ae($(f,p,o),s(r)==="editor"),D(),t("success")}finally{P({confirmLoading:!1})}})},cancel:function(){D()}};return n["./sysResourceMixin.ts"]&&n["./sysResourceMixin.ts"].default({methods:x,footerBtnList:m,formMethods:u,action:r}),(o,p)=>{const J=Q("a-button");return g(),k(s(V),oe(o.$attrs,{onRegister:s(M),title:s(v),onOk:o.handleSubmit}),{footer:B(()=>[ue,(g(!0),T(w,null,Y(s(K),(l,ie)=>(g(),T(w,null,[H(l.ifShow)?(g(),k(J,{key:0,type:l.type,preIcon:l.preIcon,disabled:l.disabled===!0,onClick:l.onClick},{default:B(()=>[Z(ee(l.label),1)]),_:2},1032,["type","preIcon","disabled","onClick"])):te("",!0)],64))),256))]),default:B(()=>[ne(s(O),{onRegister:s(c)},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}}});var Re=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{Re as S,le as _,De as a,Ce as b,be as c,Ie as d,Fe as g,Ee as l,Be as s};
