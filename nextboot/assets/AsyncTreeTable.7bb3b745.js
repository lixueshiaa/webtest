var C=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,h=(r,e)=>{for(var t in e||(e={}))k.call(e,t)&&_(r,t,e[t]);if(f)for(var t of f(e))B.call(e,t)&&_(r,t,e[t]);return r},g=(r,e)=>v(r,y(e));var u=(r,e,t)=>new Promise((m,s)=>{var c=o=>{try{n(t.next(o))}catch(a){s(a)}},l=o=>{try{n(t.throw(o))}catch(a){s(a)}},n=o=>o.done?m(o.value):Promise.resolve(o.value).then(c,l);n((t=t.apply(r,e)).next())});import{a as E,z as x,U as I,o as R,k as w,G as T,p as b,j as d,a0 as F}from"./index.9eb451d3.js";import{P as S}from"./index.83e82d5a.js";import{B as z}from"./BasicTable.1032ab26.js";import"./componentMap.6942b0b6.js";import"./TableImg.39540c6d.js";import{u as L}from"./useTable.44d02b40.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useWindowSizeFn.ed181042.js";import"./useContentViewHeight.0d594355.js";import"./BasicForm.d1b5a4f4.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.9788db2e.js";import"./BasicModal.a7306b6e.js";import"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import"./useFormItem.b38dda7e.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import"./api.632a718d.js";import"./functional.8b995981.js";import"./FormOutlined.22ab579b.js";import"./useSortable.043e591f.js";import"./index.5df19bc8.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";const Tt=E({__name:"AsyncTreeTable",setup(r){const e="/mock/api/asynTreeList",t=x(!1),m=x([]),[s,{setLoading:c}]=L({rowKey:"id",bordered:!0,canResize:!1,isTreeTable:!0,showIndexColumn:!0,columns:[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u7EC4\u4EF6",dataIndex:"component"},{title:"\u6392\u5E8F",dataIndex:"orderNum"}]});function l(a){return u(this,null,function*(){t.value=!0;let i=yield F.get({url:e,params:a});return t.value=!1,i.map(p=>p.hasChildren?g(h({},p),{children:[]}):p)})}function n(){return u(this,null,function*(){m.value=yield l({id:"0"})})}n();function o(a,i){return u(this,null,function*(){a&&i.hasChildren&&i.children.length===0&&(i.children=yield l({id:i.id}))})}return(a,i)=>{const p=I("a-card");return R(),w(d(S),null,{default:T(()=>[b(p,{bordered:!1},{default:T(()=>[b(d(z),{loading:t.value,dataSource:m.value,onRegister:d(s),onExpand:o},null,8,["loading","dataSource","onRegister"])]),_:1})]),_:1})}}});export{Tt as default};
