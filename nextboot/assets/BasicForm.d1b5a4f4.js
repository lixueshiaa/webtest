var Re=Object.defineProperty;var fe=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var pe=(e,s,o)=>s in e?Re(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,O=(e,s)=>{for(var o in s||(s={}))$e.call(s,o)&&pe(e,o,s[o]);if(fe)for(var o of fe(s))De.call(s,o)&&pe(e,o,s[o]);return e};var I=(e,s,o)=>new Promise((c,m)=>{var u=d=>{try{l(o.next(d))}catch(p){m(p)}},i=d=>{try{l(o.throw(d))}catch(p){m(p)}},l=d=>d.done?c(d.value):Promise.resolve(d.value).then(u,i);l((o=o.apply(e,s)).next())});import{au as Le,av as Ee,a as ve,F as Fe,aw as ke,ax as Pe,O as me,a6 as h,f as L,c as _e,a1 as we,U as K,o as k,k as z,G as P,n as Ke,p as q,aa as Y,ad as H,J as ae,t as re,l as X,a2 as Ye,ab as J,j as t,ay as U,az as Q,aA as ne,af as oe,ah as ee,aB as ze,aC as Ge,aD as He,X as te,aE as Ue,aF as We,aG as qe,Q as be,ag as Ae,aH as he,aI as Oe,aJ as Xe,aK as Je,a7 as Qe,an as Te,aL as Ze,R as xe,B as ye,z as W,b as et,C as tt,i as ge,a9 as Z,N as Be,a8 as ie,ac as x,M as nt}from"./index.9eb451d3.js";import{h as ot,d as Ie,_ as st}from"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.9788db2e.js";import{u as at}from"./BasicModal.a7306b6e.js";const Ce=Symbol();function rt(e){return Ee(e,Ce)}function it(){return Le(Ce)}const ct=ve({name:"BasicFormAction",components:{FormItem:Fe.Item,Button:ke,BasicArrow:Pe,[me.name]:me},props:{showActionButtonGroup:h.bool.def(!0),showResetButton:h.bool.def(!0),showSubmitButton:h.bool.def(!0),showAdvancedButton:h.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:h.number.def(6),isAdvanced:h.bool,hideAdvanceBtn:h.bool},emits:["toggle-advanced"],setup(e,{emit:s}){const{t:o}=_e(),c=L(()=>{const{showAdvancedButton:l,actionSpan:d,actionColOptions:p}=e,B=24-d,f=l?{span:B<6?24:B}:{};return O(O({style:{textAlign:"right"},span:l?6:4},f),p)}),m=L(()=>Object.assign({text:o("common.resetText")},e.resetButtonOptions)),u=L(()=>Object.assign({text:o("common.queryText")},e.submitButtonOptions));function i(){s("toggle-advanced")}return O({t:o,actionColOpt:c,getResetBtnOptions:m,getSubmitBtnOptions:u,toggleAdvanced:i},it())}});function lt(e,s,o,c,m,u){const i=K("Icon"),l=K("Button"),d=K("BasicArrow"),p=K("FormItem"),B=K("a-col");return e.showActionButtonGroup?(k(),z(B,J(H({key:0},e.actionColOpt)),{default:P(()=>[Ke("div",{style:Ye([{width:"100%"},{textAlign:e.actionColOpt.style.textAlign}])},[q(p,null,{default:P(()=>[Y(e.$slots,"submitBefore"),e.showSubmitButton?(k(),z(l,H({key:0,type:"primary",class:"mr-2"},e.getSubmitBtnOptions,{onClick:e.submitAction}),{default:P(()=>[q(i,{icon:"ant-design:search-outlined"}),ae(" "+re(e.getSubmitBtnOptions.text),1)]),_:1},16,["onClick"])):X("",!0),Y(e.$slots,"resetBefore"),e.showResetButton?(k(),z(l,H({key:1,type:"default",class:"mr-2"},e.getResetBtnOptions,{onClick:e.resetAction}),{default:P(()=>[q(i,{icon:"ic:baseline-restart-alt"}),ae(" "+re(e.getResetBtnOptions.text),1)]),_:1},16,["onClick"])):X("",!0),Y(e.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(k(),z(l,{key:2,type:"link",size:"small",onClick:e.toggleAdvanced},{default:P(()=>[ae(re(e.isAdvanced?e.t("component.form.putAway"):e.t("component.form.unfold"))+" ",1),q(d,{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1},8,["onClick"])):X("",!0),Y(e.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):X("",!0)}var ut=we(ct,[["render",lt]]);function dt(e,s){var m,u;return((m=t(e))==null?void 0:m.fieldMapToTime)&&(s=ft(e,s)),((u=t(e))==null?void 0:u.fieldMapToNumber)&&(s=pt(e,s)),s}function ft(e,s){const o=t(e).fieldMapToTime;if(!o||!Array.isArray(o))return s;for(const[c,[m,u],i="YYYY-MM-DD"]of o){if(!c||!m||!u||!s[c])continue;let l=s[c];Array.isArray(l)||(l=l.split(","));const[d,p]=l;s[m]=U(d).format(i),s[u]=U(p).format(i),Reflect.deleteProperty(s,c)}return s}function pt(e,s){const o=t(e).fieldMapToNumber;if(!o||!Array.isArray(o))return s;for(const[c,[m,u]]of o){if(!c||!m||!u||!s[c])continue;let i=s[c];Array.isArray(i)||(i=i.split(","));const[l,d]=i;s[m]=l,s[u]=d,Reflect.deleteProperty(s,c)}return s}function mt({defaultValueRef:e,getSchema:s,formModel:o,getProps:c}){function m(i){var d,p;if(!Q(i))return{};const l={};for(const B of Object.entries(i)){let[,f]=B;const[b]=B;if(!b||ne(f)&&f.length===0||oe(f))continue;const V=t(c).transformDateFunc;Q(f)&&(f=V==null?void 0:V(f)),ne(f)&&((d=f[0])==null?void 0:d._isAMomentObject)&&((p=f[1])==null?void 0:p._isAMomentObject)&&(f=f.map(y=>V==null?void 0:V(y))),ee(f)&&(f=f.trim()),ze(l,b,f)}return dt(c,l)}function u(){const i=t(s),l={};i.forEach(d=>{const{defaultValue:p}=d;Ge(p)||(l[d.field]=p,o[d.field]=p)}),e.value=l}return{handleFormValues:m,initDefault:u}}const G=24;function bt({advanceState:e,emit:s,getProps:o,getSchema:c,formModel:m,defaultValueRef:u}){const{realWidthRef:i,screenEnum:l,screenRef:d}=He(),p=L(()=>{if(!e.isAdvanced)return 0;const y=t(o).emptySpan||0;if(Ue(y))return y;if(Q(y)){const{span:v=0}=y,R=t(d);return y[R.toLowerCase()]||v||0}return 0}),B=We(b,30);te([()=>t(c),()=>e.isAdvanced,()=>t(i)],()=>{const{showAdvancedButton:y}=t(o);y&&B()},{immediate:!0});function f(y,v=0,R=!1,T=0){var g;const M=t(i),j=parseInt(y.md)||parseInt(y.xs)||parseInt(y.sm)||y.span||G,S=parseInt(y.lg)||j,N=parseInt(y.xl)||S,n=parseInt(y.xxl)||N;M<=l.LG?v+=j:M<l.XL?v+=S:M<l.XXL?v+=N:v+=n;let a=(g=t(o).autoAdvancedCol)!=null?g:3;return R?(e.hideAdvanceBtn=t(c).length<=a,v>G*2&&v<=G*(t(o).autoAdvancedLine||3)?e.hideAdvanceBtn=!1:e.isLoad||(e.isLoad=!0,e.isAdvanced=!e.isAdvanced,t(c).length>a&&(e.hideAdvanceBtn=!1,e.isAdvanced=!1)),{isAdvanced:e.isAdvanced,itemColSum:v}):v>G*(t(o).alwaysShowLines||1)?{isAdvanced:e.isAdvanced,itemColSum:v}:!e.isAdvanced&&T+1>a?{isAdvanced:!1,itemColSum:v}:{isAdvanced:!0,itemColSum:v}}function b(){let y=0,v=0;const{baseColProps:R={}}=t(o),T=t(c);for(let M=0;M<T.length;M++){const j=T[M],{show:S,colProps:N}=j;let n=!0;if(qe(S)&&(n=S),oe(S)&&(n=S({schema:j,model:m,field:j.field,values:O(O({},t(u)),m)})),n&&(N||R)){const{itemColSum:a,isAdvanced:g}=f(O(O({},R),N),y,!1,M);y=a||0,g&&(v=y),j.isAdvanced=g}}e.actionSpan=v%G+t(p),f(t(o).actionColOptions||{span:G},y,!0),s("advanced-change")}function V(){e.isAdvanced=!e.isAdvanced}return{handleToggleAdvanced:V}}function At({emit:e,getProps:s,formModel:o,getSchema:c,defaultValueRef:m,formElRef:u,schemaRef:i,handleFormValues:l}){function d(){return I(this,null,function*(){const{resetFunc:n,submitOnReset:a}=t(s);n&&oe(n)&&(yield n()),t(u)&&(Object.keys(o).forEach(r=>{o[r]=m.value[r]}),j(),e("reset",be(o)),a&&N())})}function p(n){return I(this,null,function*(){const a=t(c).map(r=>r.field).filter(Boolean),g=[];Object.keys(n).forEach(r=>{const w=t(c).find(_=>_.field===r);let F=n[r];const $=Reflect.has(n,r);if(F=ot(w==null?void 0:w.component,F),$&&a.includes(r)){if(R(r))if(Array.isArray(F)){const _=[];for(const E of F)_.push(E?U(E):null);o[r]=_}else{const{componentProps:_}=w||{};let E=_;typeof _=="function"&&(E=E({formModel:o})),o[r]=F?E!=null&&E.valueFormat?F:U(F):null}else o[r]=F;g.push(r)}}),T(g).catch(r=>{})})}function B(n){return I(this,null,function*(){const a=Ae(t(c));if(!n)return;let g=ee(n)?[n]:n;ee(n)&&(g=[n]);for(const r of g)f(r,a);i.value=a})}function f(n,a){if(ee(n)){const g=a.findIndex(r=>r.field===n);g!==-1&&(delete o[n],a.splice(g,1))}}function b(n,a,g=!1){return I(this,null,function*(){const r=Ae(t(c)),w=r.findIndex($=>$.field===a);if(!!r.some($=>$.field===a||n.field)){if(!a||w===-1||g){g?r.unshift(n):r.push(n),i.value=r;return}w!==-1&&r.splice(w+1,0,n),i.value=r}})}function V(n){return I(this,null,function*(){let a=[];if(Q(n)&&a.push(n),ne(n)&&(a=[...n]),!a.every(r=>r.component==="Divider"||Reflect.has(r,"field")&&r.field)){he("All children of the form Schema array that need to be updated must contain the `field` field");return}i.value=a})}function y(n){return I(this,null,function*(){let a=[];if(Q(n)&&a.push(n),ne(n)&&(a=[...n]),!a.every(w=>w.component==="Divider"||Reflect.has(w,"field")&&w.field)){he("All children of the form Schema array that need to be updated must contain the `field` field");return}const r=[];a.forEach(w=>{t(c).forEach(F=>{if(F.field===w.field){const $=Oe(F,w);r.push($)}else r.push(F)})}),i.value=Xe(r,"field")})}function v(){return t(u)?l(be(t(o))):{}}function R(n){return t(c).some(a=>a.field===n?Ie.includes(a.component):!1)}function T(n){return I(this,null,function*(){var a;return(a=t(u))==null?void 0:a.validateFields(n)})}function M(n){return I(this,null,function*(){var a;return yield(a=t(u))==null?void 0:a.validate(n)})}function j(n){return I(this,null,function*(){var a;yield(a=t(u))==null?void 0:a.clearValidate(n)})}function S(n,a){return I(this,null,function*(){var g;yield(g=t(u))==null?void 0:g.scrollToField(n,a)})}function N(n){return I(this,null,function*(){n&&n.preventDefault();const{submitFunc:a}=t(s);if(a&&oe(a)){yield a();return}if(!!t(u))try{const r=yield M();for(let F in r)r[F]instanceof Array&&Je(s,F)==="string"&&(r[F]=r[F].join(","));const w=l(r);e("submit",w)}catch(r){throw new Error(r)}})}return{handleSubmit:N,clearValidate:j,validate:M,validateFields:T,getFieldsValue:v,updateSchema:y,resetSchema:V,appendSchemaByField:b,removeSchemaByFiled:B,resetFields:d,setFieldsValue:p,scrollToField:S}}function ht(m){return I(this,arguments,function*({getSchema:e,getProps:s,formElRef:o,isInitedDefault:c}){Qe(()=>I(this,null,function*(){if(t(c)||!t(s).autoFocusFirstItem)return;yield Te();const u=t(e),i=t(o),l=i==null?void 0:i.$el;if(!i||!l||!u||u.length===0||!u[0].component.includes("Input"))return;const p=l.querySelector(".ant-row:first-child input");!p||p==null||p.focus()}))})}const{form:ce}=Ze,yt={model:{type:Object,default:{}},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},fieldMapToNumber:{type:Array,default:()=>[]},compact:h.bool,schemas:{type:[Array],default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:h.bool.def(!0),autoSubmitOnEnter:h.bool.def(!1),submitOnReset:h.bool,size:h.oneOf(["default","small","large"]).def("default"),disabled:h.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:h.bool,transformDateFunc:{type:Function,default:e=>e._isAMomentObject?e==null?void 0:e.format("YYYY-MM-DD HH:mm:ss"):e},rulesMessageJoinLabel:h.bool.def(!0),autoAdvancedCol:h.number.def(3),autoAdvancedLine:h.number.def(3),alwaysShowLines:h.number.def(1),showActionButtonGroup:h.bool.def(!0),actionColOptions:Object,showResetButton:h.bool.def(!0),autoFocusFirstItem:h.bool,resetButtonOptions:Object,showSubmitButton:h.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:h.bool,labelCol:{type:Object,default:ce.labelCol},layout:h.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:{type:Object,default:ce.wrapperCol},colon:h.bool.def(ce.colon),labelAlign:h.string,rowProps:Object,searchActionColIndexesModel:h.string.def("N"),searchActionColIndexValue:h.number};const gt=ve({name:"BasicForm",components:{FormItem:st,Form:Fe,Row:xe,FormAction:ut},props:yt,emits:["advanced-change","reset","submit","register"],setup(e,{emit:s,attrs:o}){const c=ye({}),m=at(),u=ye({isAdvanced:!1,hideAdvanceBtn:!0,isLoad:!1,actionSpan:6}),i=W({}),l=W(!1),d=W({}),p=W(null),B=W(null),{prefixCls:f}=et("basic-form"),b=L(()=>O(O({},e),t(d))),V=L(()=>[f,{[`${f}--compact`]:t(b).compact}]),y=L(()=>{const{baseRowStyle:A={},rowProps:C}=t(b);return O({style:A},C)}),v=L(()=>O(O(O({},o),e),t(b))),R=L(()=>t(b).searchActionColIndexesModel==="Y"),T=L(()=>{let A=t(p)||t(b).schemas;for(const C of A){const{defaultValue:D,component:ue}=C;if(D&&Ie.includes(ue))if(!Array.isArray(D))C.defaultValue=U(D);else{const de=[];D.forEach(Ne=>{de.push(U(Ne))}),C.defaultValue=de}}return t(b).showAdvancedButton&&(A=A.filter(C=>C.component!=="Divider")),R&&A.splice(e.searchActionColIndexValue,0,{component:"$SlotBtnGroup",isAdvanced:!0,field:"",label:""}),A}),{handleToggleAdvanced:M}=bt({advanceState:u,emit:s,getProps:b,getSchema:T,formModel:c,defaultValueRef:i}),{handleFormValues:j,initDefault:S}=mt({getProps:b,defaultValueRef:i,getSchema:T,formModel:c});ht({getSchema:T,getProps:b,isInitedDefault:l,formElRef:B});const{handleSubmit:N,setFieldsValue:n,clearValidate:a,validate:g,validateFields:r,getFieldsValue:w,updateSchema:F,resetSchema:$,appendSchemaByField:_,removeSchemaByFiled:E,resetFields:le,scrollToField:Me}=At({emit:s,getProps:b,formModel:c,getSchema:T,defaultValueRef:i,formElRef:B,schemaRef:p,handleFormValues:j});rt({resetAction:le,submitAction:N}),te(()=>t(b).model,()=>{const{model:A}=t(b);!A||n(A)},{immediate:!0}),te(()=>t(b).schemas,A=>{$(A!=null?A:[])}),te(()=>T.value,A=>{Te(()=>{var C;(C=m==null?void 0:m.redoModalHeight)==null||C.call(m)}),!t(l)&&A!=null&&A.length&&(S(),l.value=!0)});function Ve(A){return I(this,null,function*(){d.value=Oe(t(d)||{},A)})}function je(A,C){c[A]=C;const{validateTrigger:D}=t(v);(!D||D==="change")&&r([A]).catch(ue=>{})}function Se(A){const{autoSubmitOnEnter:C}=t(b);if(!!C&&A.key==="Enter"&&A.target&&A.target instanceof HTMLElement){const D=A.target;D&&D.tagName&&D.tagName.toUpperCase()=="INPUT"&&N()}}const se={getFieldsValue:w,setFieldsValue:n,resetFields:le,updateSchema:F,resetSchema:$,setProps:Ve,removeSchemaByFiled:E,appendSchemaByField:_,clearValidate:a,validateFields:r,validate:g,submit:N,scrollToField:Me};return tt(()=>{S(),s("register",se)}),O({isSearchActionColIndexesModel:R,getBindValue:v,handleToggleAdvanced:M,handleEnterPress:Se,formModel:c,defaultValueRef:i,advanceState:u,getRow:y,getProps:b,formElRef:B,getSchema:T,formActionType:se,setFormModel:je,getFormClass:V,getFormActionBindProps:L(()=>O(O({},b.value),u))},se)}});function Bt(e,s,o,c,m,u){const i=K("FormAction"),l=K("FormItem"),d=K("Row"),p=K("Form");return k(),z(p,H(e.getBindValue,{class:e.getFormClass,ref:"formElRef",model:e.formModel,onKeypress:nt(e.handleEnterPress,["enter"])}),{default:P(()=>[q(d,J(x(e.getRow)),{default:P(()=>[Y(e.$slots,"formHeader"),(k(!0),ge(Be,null,Z(e.getSchema,B=>(k(),ge(Be,{key:B.field},[e.isSearchActionColIndexesModel&&B.component==="$SlotBtnGroup"?(k(),z(i,H({key:0},e.getFormActionBindProps,{onToggleAdvanced:e.handleToggleAdvanced}),ie({_:2},[Z(["resetBefore","submitBefore","advanceBefore","advanceAfter"],f=>({name:f,fn:P(b=>[Y(e.$slots,f,J(x(b||{})))])}))]),1040,["onToggleAdvanced"])):(k(),z(l,{key:1,tableAction:e.tableAction,formActionType:e.formActionType,schema:B,formProps:e.getProps,allDefaultValues:e.defaultValueRef,formModel:e.formModel,setFormModel:e.setFormModel},ie({_:2},[Z(Object.keys(e.$slots),f=>({name:f,fn:P(b=>[Y(e.$slots,f,J(x(b||{})))])}))]),1032,["tableAction","formActionType","schema","formProps","allDefaultValues","formModel","setFormModel"]))],64))),128)),e.isSearchActionColIndexesModel?X("",!0):(k(),z(i,H({key:0},e.getFormActionBindProps,{onToggleAdvanced:e.handleToggleAdvanced}),ie({_:2},[Z(["resetBefore","submitBefore","advanceBefore","advanceAfter"],B=>({name:B,fn:P(f=>[Y(e.$slots,B,J(x(f||{})))])}))]),1040,["onToggleAdvanced"])),Y(e.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model","onKeypress"])}var It=we(gt,[["render",Bt]]);export{It as B,dt as h};
