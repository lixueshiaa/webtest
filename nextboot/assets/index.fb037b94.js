var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var $=(o,n,t)=>n in o?K(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,j=(o,n)=>{for(var t in n||(n={}))E.call(n,t)&&$(o,t,n[t]);if(P)for(var t of P(n))L.call(n,t)&&$(o,t,n[t]);return o};var A=(o,n)=>{var t={};for(var s in o)E.call(o,s)&&n.indexOf(s)<0&&(t[s]=o[s]);if(o!=null&&P)for(var s of P(o))n.indexOf(s)<0&&L.call(o,s)&&(t[s]=o[s]);return t};var y=(o,n,t)=>new Promise((s,F)=>{var m=a=>{try{c(t.next(a))}catch(i){F(i)}},g=a=>{try{c(t.throw(a))}catch(i){F(i)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(m,g);c((t=t.apply(o,n)).next())});import T from"./FormRender.7910ab4b.js";import{f7 as X,f8 as Y,F as U,ag as V,Q as Z,ak as x,f5 as D,a1 as I,a as oo,R as B,O as eo,z as to,f as w,f9 as no,a$ as ro,b5 as z,U as k,o as R,i as H,p as q,G as O,N as so,a9 as ao,k as io,a8 as mo,aa as lo,ab as fo,ac as co,ad as uo,j as po}from"./index.0c676cb0.js";import{b as Fo,f as G}from"./index.cf979df1.js";import"./index.e969fa19.js";import"./formItemConfig.76a6b010.js";import"./componentMap.801737ea.js";import"./index.95c15ee4.js";import"./useFormItem.47fc2179.js";import"./RadioButtonGroup.dc9fedf3.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./api.6d7ba78d.js";import"./props.acb18fde.js";import"./JDictSelectTag.b196d7c6.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./onMountedOrActivated.29514295.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./JUpload.2c84d159.js";import"./functional.51da07bc.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";import"./index.788229a3.js";import"./useFormDesignState.b842bbb2.js";function go(o){return typeof o=="function"?o:X}function Q(o,n){return o&&Y(o,go(n))}function Co(o,n,t,s){(()=>{const u=x(),C=u==null?void 0:u.parent;!C||o.formConfig.schemas.forEach(d=>{Q(d.componentProps,(M,e)=>{D(M)&&(d.componentProps[e]=M.bind(C))}),Q(d.on,(M,e)=>{D(M)&&(d.componentProps[e]=M.bind(C))})})})();const{emit:m}=t,g=U.useForm,{resetFields:c,validate:a,clearValidate:i,validateField:h}=g(n,[]);return{validate:a,validateField:h,resetFields:c,clearValidate:i,submit:()=>y(this,null,function*(){var C,d;const u=V(Z(n.value));return m==null||m("submit",u),(d=(C=o.formConfig).submit)==null||d.call(C,u),u})}}function ho(o,n,t,s){const F=e=>Fo(o.formConfig.schemas,r=>r.field===e),m=(e,r,l)=>{const f=F(e);f&&(f[r]=l)},g=(e,r,l)=>{const f=F(e);f!=null&&f.componentProps&&(["options","treeData"].includes(r)&&c(e,void 0),f.componentProps[r]=l)},c=(e,r)=>{var l;typeof e=="string"?(o.formModel[e]=r,(l=t.value)==null||l.validateField(e,r,[])):Object.keys(e).forEach(p=>{var b;o.formModel[p]=e[p],(b=t.value)==null||b.validateField(p,e[p],[])})},a=(e,r)=>{o.formConfig[e]=r},i=e=>V(o.formModel)[e],h=()=>y(this,null,function*(){return V(o.formModel)}),v=e=>{m(e,"hidden",!0)},u=e=>{typeof e=="string"?g(e,"disabled",!0):a("disabled",e!==!1)},C=e=>{m(e,"hidden",!1)},d={};return(e=>{G(e,r=>{G(e,l=>{var f;d[l.field]||(d[l.field]=new Set),((f=r.link)==null?void 0:f.includes(l.field))&&D(r.update)&&d[l.field].add(r)}),d[r.field].add(r)})})(o.formConfig.schemas),j({linkOn:d,setValue:c,getValue:i,hidden:v,show:C,set:m,get:F,setProps:g,getData:h,disable:u},s)}const Mo=oo({name:"VFormCreate",components:{FormRender:T,Form:U,Row:B},props:{fApi:{type:Object},formModel:{type:Object,default:()=>({})},formConfig:{type:Object,required:!0}},emits:["submit","change","update:fApi","update:formModel"],setup(o,n){const t=o.formConfig.layout=="vertical"?eo:B,{emit:s}=n,F=to(null),m=w({get:()=>o.formModel,set:p=>s("update:formModel",p)}),g=w(()=>o.formConfig.schemas&&o.formConfig.schemas.filter(p=>p.hidden!==!0)),c=no(o,"fApi",s),{submit:a,validate:i,clearValidate:h,resetFields:v,validateField:u}=Co(o,m,n),f=ho({formConfig:o.formConfig,formData:o.formModel},n,F,{submit:a,validate:i,validateField:u,resetFields:v,clearValidate:h}),{linkOn:C}=f,d=A(f,["linkOn"]);c.value=d;const M=p=>{var S;const{schema:b,value:W}=p,{field:J}=po(b);(S=C[J])==null||S.forEach(_=>{var N;(N=_.update)==null||N.call(_,W,_,c.value)})},e=w(()=>ro(o.formConfig,["disabled","labelWidth","schemas"])),r=()=>{a()};z("formModel",m);const l=(p,b)=>{m.value[p]=b};return z("setFormModelMethod",l),{eFormModel:F,submit:a,validate:i,validateField:u,resetFields:v,clearValidate:h,handleChange:M,formModelProps:e,handleSubmit:r,setFormModel:l,formModelNew:m,wrapperComp:t,noHiddenList:g}}}),bo={class:"v-form-container"};function vo(o,n,t,s,F,m){const g=k("FormRender"),c=k("Row"),a=k("Form");return R(),H("div",bo,[q(a,uo({class:"v-form-model",ref:"eFormModel",model:o.formModel},o.formModelProps),{default:O(()=>[q(c,null,{default:O(()=>[(R(!0),H(so,null,ao(o.noHiddenList,(i,h)=>(R(),io(g,{key:h,schema:i,formConfig:o.formConfig,formData:o.formModelNew,onChange:o.handleChange,setFormModel:o.setFormModel,onSubmit:o.handleSubmit,onReset:o.resetFields},mo({_:2},[i&&i.componentProps?{name:"schema.componentProps!.slotName",fn:O(()=>[lo(o.$slots,i.componentProps.slotName,fo(co({formModel:o.formModel,field:i.field,schema:i})),void 0,!0)]),key:"0"}:void 0]),1032,["schema","formConfig","formData","onChange","setFormModel","onSubmit","onReset"]))),128))]),_:3})]),_:3},16,["model"])])}var ne=I(Mo,[["render",vo],["__scopeId","data-v-e17526a8"]]);export{ne as default};
