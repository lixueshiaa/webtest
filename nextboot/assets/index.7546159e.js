var k=Object.defineProperty,T=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var b=(o,t,e)=>t in o?k(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,w=(o,t)=>{for(var e in t||(t={}))N.call(t,e)&&b(o,e,t[e]);if(g)for(var e of g(t))S.call(t,e)&&b(o,e,t[e]);return o},C=(o,t)=>T(o,E(t));var v=(o,t,e)=>new Promise((l,i)=>{var c=a=>{try{s(e.next(a))}catch(n){i(n)}},u=a=>{try{s(e.throw(a))}catch(n){i(n)}},s=a=>a.done?l(a.value):Promise.resolve(a.value).then(c,u);s((e=e.apply(o,t)).next())});import{a1 as P,a as I,b as z,b5 as F,z as x,U as y,o as R,k as j,G as m,p as d,n as A,j as h,J as V,t as L,r as $}from"./index.d537950e.js";import{l as q,_ as G,p as J}from"./DepartLeftTree.dd0858bc.js";import{B as K}from"./BasicTable.18c7a455.js";import"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import{u as U}from"./useListPage.3c7bec34.js";import"./depart.user.api.9c1711f2.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.991a4e0a.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./useTable.090fbe83.js";const W=[{title:"\u59D3\u540D",dataIndex:"realname",width:150},{title:"\u5DE5\u53F7",dataIndex:"workNo",width:100},{title:"\u90E8\u95E8",dataIndex:"departName",width:200},{title:"\u804C\u52A1",dataIndex:"post",width:150,slots:{customRender:"post"}},{title:"\u624B\u673A",width:150,dataIndex:"telephone"},{title:"\u90AE\u7BB1",width:150,dataIndex:"email"}],H=[{label:"\u59D3\u540D",field:"realname",component:"Input",colProps:{span:6}},{label:"\u5DE5\u53F7",field:"workNo",component:"Input",colProps:{span:6}}];const M={style:{height:"100%","background-color":"white"}},O=I({name:"address"}),Q=I(C(w({},O),{setup(o){const{prefixCls:t}=z("address-list");F("prefixCls",t);const e=x(),l=x(""),i=x({}),{tableContext:c}=U({tableProps:{api:q,columns:W,rowKey:"id",showIndexColumn:!0,formConfig:{labelWidth:200,schemas:H},canResize:!1,actionColumn:null,showTableSetting:!1,beforeFetch(r){r.orgCode=l.value}}}),[u,{reload:s}]=c;function a(r){l.value=r.orgCode,s()}function n(){return v(this,null,function*(){const r=yield J({pageSize:99999});if(r){let _={};r.records.forEach(p=>{_[p.code]=p.name}),i.value=_}})}return n(),(r,_)=>{const p=y("a-col"),B=y("a-row");return R(),j(B,{class:$(["p-4",`${h(t)}--box`]),type:"flex",gutter:10,style:{"max-height":"800px"}},{default:m(()=>[d(p,{xl:6,lg:24,md:24,style:{"margin-bottom":"10px"}},{default:m(()=>[d(G,{ref_key:"leftTree",ref:e,onSelect:a},null,512)]),_:1}),d(p,{xl:18,lg:24,md:24,style:{"margin-bottom":"10px"}},{default:m(()=>[A("div",M,[d(h(K),{onRegister:h(u)},{post:m(({text:D})=>[V(L((D||"").split(",").map(f=>i.value[f]?i.value[f]:f).join(",")),1)]),_:1},8,["onRegister"])])]),_:1})]),_:1},8,["class"])}}}));var Lt=P(Q,[["__scopeId","data-v-0dd7b9ae"]]);export{Lt as default};