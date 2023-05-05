var T=Object.defineProperty;var P=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var R=(e,a,o)=>a in e?T(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,U=(e,a)=>{for(var o in a||(a={}))j.call(a,o)&&R(e,o,a[o]);if(P)for(var o of P(a))G.call(a,o)&&R(e,o,a[o]);return e};var V=(e,a,o)=>new Promise((g,f)=>{var v=n=>{try{d(o.next(n))}catch(s){f(s)}},b=n=>{try{d(o.throw(n))}catch(s){f(s)}},d=n=>n.done?g(n.value):Promise.resolve(n.value).then(v,b);d((o=o.apply(e,a)).next())});import{a as q,b2 as z,a6 as u,z as D,a_ as M,j as A,f as X,a7 as H,X as K,a1 as Q,U as h,o as l,k as c,G as p,i as _,a9 as L,N as k,ad as B,p as W,l as J,bG as Y,a$ as Z,J as F,t as m,n as E}from"./index.d537950e.js";import{u as x}from"./useFormItem.6ac1e6ce.js";var I=(e=>(e.Radio="radio",e.RadioButton="radioButton",e.Select="select",e.List="list",e.Switch="switch",e.SelTree="sel_tree",e.CatTree="cat_tree",e.SelSearch="sel_search",e.SelUser="sel_user",e.Checkbox="checkbox",e.ListMulti="list_multi",e.Pca="pca",e.Popup="popup",e.SelDepart="sel_depart",e))(I||{});const ee=q({name:"JDictSelectTag",inheritAttrs:!1,components:{LoadingOutlined:z},props:{value:u.oneOfType([u.string,u.number,u.array]),dictCode:u.string,type:u.string,placeholder:u.string,stringToNumber:u.bool,getPopupContainer:{type:Function,default:e=>e.parentNode},showChooseOption:u.bool.def(!0),options:{type:Array,default:[],required:!1}},emits:["options-change","change"],setup(e,{emit:a,refs:o}){const g=D([]),f=D([]),v=M(),[b]=x(e,"value","change",g),d=Object.assign({},A(e),A(v)),n=D(!1);let s=!0;const w=X(()=>!e.type||e.type==="list"?"select":e.type);H(()=>{e.dictCode&&(n.value=s,s=!1,O().finally(()=>{n.value=s})),e.dictCode||(f.value=e.options)}),K(()=>e.value,()=>{e.value===""&&a("change","")});function O(){return V(this,null,function*(){let{dictCode:r,stringToNumber:i}=e;const N=yield Y(r);f.value=N.reduce((C,y)=>{if(y){const $=y.value;C.push(U({label:y.text||y.label,value:i?+$:$},Z(y,["text","value"])))}return C},[])})}function S(r){var i;g.value=[((i=r==null?void 0:r.target)==null?void 0:i.value)||r]}function t(r,i){var C;return((C=i==null?void 0:i.children[0])==null?void 0:C.children.toLowerCase().indexOf(r.toLowerCase()))>=0?!0:(i.value||"").toString().toLowerCase().indexOf(r.toLowerCase())>=0}return{state:b,compType:w,attrs:v,loadingEcho:n,getBindValue:d,dictOptions:f,CompTypeEnum:I,handleChange:S,handleFilterOption:t}}}),ae=F("\u8BF7\u9009\u62E9"),te=["title"];function oe(e,a,o,g,f,v){const b=h("a-radio"),d=h("a-radio-group"),n=h("a-radio-button"),s=h("LoadingOutlined"),w=h("a-input"),O=h("a-select-option"),S=h("a-select");return e.compType===e.CompTypeEnum.Radio?(l(),c(d,B({key:0},e.attrs,{value:e.state,"onUpdate:value":a[0]||(a[0]=t=>e.state=t),onChange:e.handleChange}),{default:p(()=>[(l(!0),_(k,null,L(e.dictOptions,t=>(l(),c(b,{key:`${t.value}`,value:t.value},{default:p(()=>[F(m(t.label),1)]),_:2},1032,["value"]))),128))]),_:1},16,["value","onChange"])):e.compType===e.CompTypeEnum.RadioButton?(l(),c(d,B({key:1},e.attrs,{value:e.state,"onUpdate:value":a[1]||(a[1]=t=>e.state=t),buttonStyle:"solid",onChange:e.handleChange}),{default:p(()=>[(l(!0),_(k,null,L(e.dictOptions,t=>(l(),c(n,{key:`${t.value}`,value:t.value},{default:p(()=>[F(m(t.label),1)]),_:2},1032,["value"]))),128))]),_:1},16,["value","onChange"])):e.compType===e.CompTypeEnum.Select?(l(),_(k,{key:2},[e.loadingEcho?(l(),c(w,{key:0,readOnly:"",placeholder:"\u52A0\u8F7D\u4E2D\u2026"},{prefix:p(()=>[W(s)]),_:1})):(l(),c(S,B({key:1,placeholder:e.placeholder},e.attrs,{value:e.state,"onUpdate:value":a[2]||(a[2]=t=>e.state=t),filterOption:e.handleFilterOption,getPopupContainer:e.getPopupContainer,onChange:e.handleChange}),{default:p(()=>[e.showChooseOption?(l(),c(O,{key:0,value:void 0},{default:p(()=>[ae]),_:1})):J("",!0),(l(!0),_(k,null,L(e.dictOptions,t=>(l(),c(O,{key:`${t.value}`,value:t.value},{default:p(()=>[E("span",{style:{display:"inline-block",width:"100%"},title:t.label},m(t.label),9,te)]),_:2},1032,["value"]))),128))]),_:1},16,["placeholder","value","filterOption","getPopupContainer","onChange"]))],64)):J("",!0)}var re=Q(ee,[["render",oe]]);export{I as C,re as J};