var $=Object.defineProperty,N=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,g=(e,t)=>{for(var s in t||(t={}))D.call(t,s)&&_(e,s,t[s]);if(C)for(var s of C(t))S.call(t,s)&&_(e,s,t[s]);return e},w=(e,t)=>N(e,O(t));import{a as P,z as I,f as A,C as H,an as R,c6 as L,j as p,p as r,cI as v,bZ as V,L as W,N as z,b6 as B,cu as F,cv as T,ak as U}from"./index.9eb451d3.js";function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}const h="context-menu",Y={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},k=e=>{const{item:t}=e;return r("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&r(B,{class:"mr-2",icon:t.icon},null),r("span",null,[t.label])])};var Z=P({name:"ContextMenu",props:Y,setup(e){const t=I(null),s=I(!1),i=A(()=>{const{axis:o,items:n,styles:c,width:l}=e,{x:a,y:m}=o||{x:0,y:0},y=(n||[]).length*40,b=l,x=document.body,E=x.clientWidth<a+b?a-b:a,j=x.clientHeight<m+y?m-y:m;return w(g({},c),{width:`${l}px`,left:`${E+1}px`,top:`${j+1}px`})});H(()=>{R(()=>s.value=!0)}),L(()=>{const o=p(t);o&&document.body.removeChild(o)});function f(o,n){const{handler:c,disabled:l}=o;l||(s.value=!1,n==null||n.stopPropagation(),n==null||n.preventDefault(),c==null||c())}function u(o){return o.map(n=>{const{disabled:c,label:l,children:a,divider:m=!1}=n,y={item:n,handler:f,showIcon:e.showIcon};return!a||a.length===0?r(z,null,[r(v.Item,{disabled:c,class:`${h}__item`,key:l},{default:()=>[r(k,y,null)]}),m?r(W,{key:`d-${l}`},null):null]):p(s)?r(v.SubMenu,{key:l,disabled:c,popupClassName:`${h}__popup`},{title:()=>r(k,y,null),default:()=>u(a)}):null})}return()=>{let o;if(!p(s))return null;const{items:n}=e;return r(v,{inlineIndent:12,mode:"vertical",class:h,ref:t,style:p(i)},X(o=u(n))?o:{default:()=>[o]})}}});const d={domList:[],resolve:()=>{}},q=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!F)return new Promise(s=>{const i=document.body,f=document.createElement("div"),u={};e.styles&&(u.styles=e.styles),e.items&&(u.items=e.items),e.event&&(u.customEvent=t,u.axis={x:t.clientX,y:t.clientY});const o=r(Z,u);T(o,f);const n=function(){d.resolve("")};d.domList.push(f);const c=function(){d.domList.forEach(l=>{try{l&&i.removeChild(l)}catch(a){}}),i.removeEventListener("click",n),i.removeEventListener("scroll",n)};d.resolve=function(l){c(),s(l)},c(),i.appendChild(f),i.addEventListener("click",n),i.addEventListener("scroll",n)})},M=function(){d&&(d.resolve(""),d.domList=[])};function K(e=!0){return U()&&e&&L(()=>{M()}),[q,M]}export{K as u};
