var U=Object.defineProperty,$=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(e,n,t)=>n in e?U(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))G.call(n,t)&&C(e,t,n[t]);if(I)for(var t of I(n))P.call(n,t)&&C(e,t,n[t]);return e},O=(e,n)=>$(e,D(n));import{u as N}from"./useFormDesignState.a1fa7b72.js";import{c as F}from"./index.63a99b4d.js";import{T as w,a1 as A,a as E,I as T,b6 as V,B as M,bf as S,U as h,o as u,i as l,N as b,a9 as y,n as c,p as i,J as B}from"./index.6cf4d174.js";const{createMessage:p}=w(),j=Object.assign({success:e=>{p.success(e)},error:e=>{p.error(e)},warning:e=>{p.warning(e)},info:e=>{p.info(e)}});const J=E({name:"FormOptions",components:{Input:T,Icon:V},setup(){var r;const e=M({}),{formConfig:n}=N(),t=((r=n.value.currentItem)==null?void 0:r.component)==="TreeSelect"?"treeData":"options",m=()=>{var s,a,_,g;(a=(s=n.value.currentItem)==null?void 0:s.componentProps)!=null&&a[t]||(n.value.currentItem.componentProps[t]=[]);const o=((g=(_=n.value.currentItem)==null?void 0:_.componentProps)==null?void 0:g[t].length)+1;n.value.currentItem.componentProps[t].push({label:`\u9009\u9879${o}`,value:""+o})},v=o=>{var s,a;F((a=(s=n.value.currentItem)==null?void 0:s.componentProps)==null?void 0:a[t],o)},f=()=>{var o,s;(s=(o=n.value.currentItem)==null?void 0:o.columns)==null||s.push({span:12,children:[]})},d=o=>{if(o===0)return j.warning("\u8BF7\u81F3\u5C11\u4FDD\u7559\u4E00\u4E2A\u6805\u683C");F(n.value.currentItem.columns,o)};return O(k({},S(e)),{formConfig:n,addOptions:m,deleteOptions:v,key:t,deleteGridOptions:d,addGridOptions:f})}}),L={key:0},R={class:"options-box"},q=["onClick"],z=B(" \u6DFB\u52A0\u6805\u683C "),H={key:1},K={class:"options-box"},Q=["onClick"],W=B(" \u6DFB\u52A0\u9009\u9879 ");function X(e,n,t,m,v,f){const d=h("Input"),r=h("Icon");return u(),l("div",null,[["Grid"].includes(e.formConfig.currentItem.component)?(u(),l("div",L,[(u(!0),l(b,null,y(e.formConfig.currentItem.columns,(o,s)=>(u(),l("div",{key:s},[c("div",R,[i(d,{value:o.span,"onUpdate:value":a=>o.span=a,class:"options-value"},null,8,["value","onUpdate:value"]),c("a",{class:"options-delete",onClick:a=>e.deleteGridOptions(s)},[i(r,{icon:"ant-design:delete-outlined"})],8,q)])]))),128)),c("a",{onClick:n[0]||(n[0]=(...o)=>e.addGridOptions&&e.addGridOptions(...o))},[i(r,{icon:"ant-design:file-add-outlined"}),z])])):(u(),l("div",H,[(u(!0),l(b,null,y(e.formConfig.currentItem.componentProps[e.key],(o,s)=>(u(),l("div",{key:s},[c("div",K,[i(d,{value:o.label,"onUpdate:value":a=>o.label=a},null,8,["value","onUpdate:value"]),i(d,{value:o.value,"onUpdate:value":a=>o.value=a,class:"options-value"},null,8,["value","onUpdate:value"]),c("a",{class:"options-delete",onClick:a=>e.deleteOptions(s)},[i(r,{icon:"ant-design:delete-outlined"})],8,Q)])]))),128)),c("a",{onClick:n[1]||(n[1]=(...o)=>e.addOptions&&e.addOptions(...o))},[i(r,{icon:"ant-design:file-add-outlined"}),W])]))])}var ne=A(J,[["render",X],["__scopeId","data-v-497c71d3"]]);export{ne as default};