var H=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var j=(e,a,t)=>a in e?H(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))_.call(a,t)&&j(e,t,a[t]);if(P)for(var t of P(a))q.call(a,t)&&j(e,t,a[t]);return e},F=(e,a)=>K(e,Q(a));var z=(e,a)=>{var t={};for(var s in e)_.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&P)for(var s of P(e))a.indexOf(s)<0&&q.call(e,s)&&(t[s]=e[s]);return t};var R=(e,a,t)=>new Promise((s,C)=>{var g=l=>{try{p(t.next(l))}catch(d){C(d)}},y=l=>{try{p(t.throw(l))}catch(d){C(d)}},p=l=>l.done?s(l.value):Promise.resolve(l.value).then(g,y);p((t=t.apply(e,a)).next())});import{a as T}from"./formItemConfig.71d35f8e.js";import{a1 as Y,a as Z,aX as x,b6 as ee,fa as oe,L as ae,O as te,B as ne,f as I,j as M,ft as se,a$ as me,bf as le,U as b,o as v,k as D,G as f,p as A,a8 as E,n as L,t as $,l as N,aa as re,ab as O,ad as G,J as ie,ai as ce,i as pe,ac as J}from"./index.9eb451d3.js";import{h as U}from"./index.621d2b74.js";import{a as de}from"./useFormDesignState.05bb439b.js";import"./componentMap.6942b0b6.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./RadioButtonGroup.6d9641c3.js";import"./index.9788db2e.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./JDictSelectTag.3b1f5a5e.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./JUpload.38683df0.js";import"./functional.8b995981.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./index.571b20a4.js";const he=Z({name:"VFormItem",components:{Tooltip:x,Icon:ee,FormItem:oe,Divider:ae,Col:te},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},emits:["update:form-data","change"],setup(e,{emit:a}){const t=ne({componentMap:T}),{formModel:s,setFormModel:C}=de(),g=I(()=>{const{colProps:o={}}=e.schema;return o}),y=I(()=>{var S,V;const{formConfig:o}=M(e);let{field:m,required:n,rules:h,labelCol:i,wrapperCol:c}=M(e.schema);const{colon:W}=e.formConfig,{itemProps:r}=M(e.schema);i=i||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:`width:${o.labelWidth}px`}:o.labelCol:{}),c=c||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:"width:auto;flex:1"}:o.wrapperCol:{});const X=o.layout==="horizontal"&&o.labelLayout==="flex"?{display:"flex"}:{},w=Object.assign({},{name:m,style:u({},X),colon:W,required:n,rules:h,labelCol:i,wrapperCol:c},r);return(S=r==null?void 0:r.labelCol)!=null&&S.span||(w.labelCol=i),(V=r==null?void 0:r.wrapperCol)!=null&&V.span||(w.wrapperCol=c),r!=null&&r.rules||(w.rules=h),w}),p=I(()=>T.get(e.schema.component)),l=o=>{var m,n;o.component==="Button"&&((m=o.componentProps)==null?void 0:m.handle)&&a((n=o.componentProps)==null?void 0:n.handle)},d=se(()=>R(this,null,function*(){var n;let{options:o,treeData:m}=(n=e.schema.componentProps)!=null?n:{};return o&&(o=yield U(o)),m&&(m=yield U(m)),{options:o,treeData:m}})),B=I(()=>{var i;const o=e.schema&&["Switch","Checkbox","Radio"].includes(e.schema.component);let{field:m}=e.schema,c=(i=me(e.schema.componentProps,["options","treeData"]))!=null?i:{},{disabled:n}=c,h=z(c,["disabled"]);return n=e.formConfig.disabled||n,F(u({},h),{disabled:n,[o?"checked":"value"]:s.value[m]})}),k=function(o){const m=["Switch","Checkbox","Radio"].includes(e.schema.component),n=o?o.target:null,h=n?m?n.checked:n.value:o;C(e.schema.field,h),a("change",h)};return F(u({},le(t)),{componentItem:p,formItemProps:y,handleClick:l,asyncProps:d,cmpProps:B,handleChange:k,colPropsComputed:g})}}),ue={key:2};function fe(e,a,t,s,C,g){const y=b("Icon"),p=b("Tooltip"),l=b("Divider"),d=b("FormItem"),B=b("Col");return v(),D(B,O(J(e.colPropsComputed)),{default:f(()=>[A(d,O(J(u({},e.formItemProps))),E({default:f(()=>{var k;return[e.schema.componentProps&&((k=e.schema.componentProps)==null?void 0:k.slotName)?re(e.$slots,e.schema.componentProps.slotName,O(G({key:0},e.schema)),void 0,!0):e.schema.component=="Divider"&&e.schema.label&&!e.formItemProps.hiddenLabel?(v(),D(l,{key:1},{default:f(()=>[ie($(e.schema.label),1)]),_:1})):N("",!0),L("div",null,[(v(),D(ce(e.componentItem),G({class:"v-form-item-wrapper"},u(u({},e.cmpProps),e.asyncProps),{schema:e.schema,style:e.schema.width?{width:e.schema.width}:{},onChange:e.handleChange,onClick:a[0]||(a[0]=o=>e.handleClick(e.schema))}),null,16,["schema","style","onChange"]))]),["Button"].includes(e.schema.component)?(v(),pe("span",ue,$(e.schema.label),1)):N("",!0)]}),_:2},[!e.formItemProps.hiddenLabel&&e.schema.component!=="Divider"?{name:"label",fn:f(()=>[A(p,null,E({default:f(()=>[L("span",null,$(e.schema.label),1),e.schema.helpMessage?(v(),D(y,{key:0,class:"ml-5",icon:"ant-design:question-circle-outlined"})):N("",!0)]),_:2},[e.schema.helpMessage?{name:"title",fn:f(()=>[L("span",null,$(e.schema.helpMessage),1)]),key:"0"}:void 0]),1024)]),key:"0"}:void 0]),1040)]),_:3},16)}var Ke=Y(he,[["render",fe],["__scopeId","data-v-d4b5df80"]]);export{Ke as default};