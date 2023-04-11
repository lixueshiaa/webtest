import{eg as w,z as W,j as c,eF as y,eG as v,co as x,eH as b,ak as $,eI as g,a1 as I,a as R,dS as B,U as k,o as P,k as S,G as d,p as m,J as C}from"./index.6cf4d174.js";import{P as z}from"./index.28df25ce.js";import"./onMountedOrActivated.c1705977.js";import"./useWindowSizeFn.99e468e7.js";import"./useContentViewHeight.183e9878.js";const M=Symbol("watermark-dom");function E(n=W(document.body)){const a=b(function(){const t=c(n);if(!t)return;const{clientHeight:e,clientWidth:r}=t;i({height:e,width:r})}),s=M.toString(),l=w(),f=()=>{const t=c(l);l.value=void 0;const e=c(n);!e||(t&&e.removeChild(t),y(e,a))};function _(t){const e=document.createElement("canvas"),r=300,u=240;Object.assign(e,{width:r,height:u});const o=e.getContext("2d");return o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,r/20,u)),e.toDataURL("image/png")}function i(t={}){const e=c(l);!e||(g(t.width)&&(e.style.width=`${t.width}px`),g(t.height)&&(e.style.height=`${t.height}px`),g(t.str)&&(e.style.background=`url(${_(t.str)}) left top repeat`))}const p=t=>{if(c(l))return i({str:t}),s;const e=document.createElement("div");l.value=e,e.id=s,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const r=c(n);if(!r)return s;const{clientHeight:u,clientWidth:o}=r;return i({str:t,width:o,height:u}),r.appendChild(e),s};function h(t){p(t),v(document.documentElement,a),$()&&x(()=>{f()})}return{setWatermark:h,clear:f}}const G=R({components:{CollapseContainer:B,PageWrapper:z},setup(){const n=W(null),{setWatermark:a,clear:s}=E();return{setWatermark:a,clear:s,areaRef:n}}}),H=C(" Create "),L=C(" Clear "),N=C(" Reset ");function T(n,a,s,l,f,_){const i=k("a-button"),p=k("CollapseContainer"),h=k("PageWrapper");return P(),S(h,{title:"\u6C34\u5370\u793A\u4F8B"},{default:d(()=>[m(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d(()=>[m(i,{type:"primary",class:"mr-2",onClick:a[0]||(a[0]=t=>n.setWatermark("WaterMark Info"))},{default:d(()=>[H]),_:1}),m(i,{color:"error",class:"mr-2",onClick:n.clear},{default:d(()=>[L]),_:1},8,["onClick"]),m(i,{color:"warning",class:"mr-2",onClick:a[1]||(a[1]=t=>n.setWatermark("WaterMark Info New"))},{default:d(()=>[N]),_:1})]),_:1})]),_:1})}var F=I(G,[["render",T]]);export{F as default};
