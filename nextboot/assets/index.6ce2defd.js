var h=Object.defineProperty,y=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var l=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,_=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&l(e,o,t[o]);if(n)for(var o of n(t))D.call(t,o)&&l(e,o,t[o]);return e},c=(e,t)=>y(e,b(t));import{a as d,b as T,b5 as k,z as f,U as i,o as S,k as z,G as p,p as r,j as u,r as B}from"./index.6cf4d174.js";import $ from"./DepartLeftTree.1b3b595b.js";import j from"./setting.33e642f3.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./componentMap.bdddb878.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./RadioButtonGroup.e396598a.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./JDictSelectTag.77cd1e49.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./JUpload.a8971a82.js";import"./functional.4d9308b0.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./DepartFormModal.0b4459fe.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./useForm.0a8b633b.js";const G=d({name:"system-customerConfig-index"}),dt=d(c(_({},G),{setup(e){const{prefixCls:t}=T("depart-user");k("prefixCls",t);let o=f({});const x=f([]);function g(a){console.log(a,"1111"),o.value=a}function v(a){x.value=a}return(a,N)=>{const m=i("a-card"),s=i("a-col"),C=i("a-row");return S(),z(C,{class:B(["p-4",`${u(t)}--box`]),gutter:10},{default:p(()=>[r(s,{xl:8,lg:8,md:10,sm:24},{default:p(()=>[r(m,{bordered:!1,style:{height:"795px","overflow-y":"auto"}},{default:p(()=>[r($,{ref:"leftTree",onSelect:g,onRootTreeData:v},null,512)]),_:1})]),_:1}),r(s,{xl:16,lg:16,md:14,sm:24},{default:p(()=>[r(m,{bordered:!1,style:{height:"100%"}},{default:p(()=>[r(j,{data:u(o).value},null,8,["data"])]),_:1})]),_:1})]),_:1},8,["class"])}}}));export{dt as default};