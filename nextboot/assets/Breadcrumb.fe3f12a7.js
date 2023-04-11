var T=Object.defineProperty,V=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var M=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&M(e,r,t[r]);if(R)for(var r of R(t))L.call(t,r)&&M(e,r,t[r]);return e},y=(e,t)=>V(e,z(t));var P=(e,t,r)=>new Promise((h,f)=>{var g=l=>{try{d(r.next(l))}catch(c){f(c)}},p=l=>{try{d(r.throw(l))}catch(c){f(c)}},d=l=>l.done?h(l.value):Promise.resolve(l.value).then(g,p);d((r=r.apply(e,t)).next())});import{a1 as O,a as U,b6 as J,gb as w,a6 as j,z as q,bw as x,b as F,cx as H,cU as K,a7 as Q,U as B,o as b,i as E,p as W,G as A,k as S,l as X,t as D,J as Y,r as Z,c as ee,d2 as te,de as ne,d0 as ae,cM as re,ah as se}from"./index.9eb451d3.js";const oe=U({name:"LayoutBreadcrumb",components:{Icon:J,[w.name]:w},props:{theme:j.oneOf(["dark","light"])},setup(){const e=q([]),{currentRoute:t}=x(),{prefixCls:r}=F("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=H(),f=K(),{t:g}=ee();Q(()=>P(this,null,function*(){var C,I,$;if(t.value.name===te)return;const s=yield ne(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const i=ae(s,o),m=s.filter(N=>N.path===i[0]),u=p(m,i);if(!u||u.length===0)return;const _=d(u);(I=t.value.meta)!=null&&I.currentActiveMenu&&_.push(y(k({},t.value),{name:(($=t.value.meta)==null?void 0:$.title)||t.value.name})),e.value=_}));function p(s,n){const a=[];return s.forEach(o=>{var i,m;n.includes(o.path)&&a.push(y(k({},o),{name:((i=o.meta)==null?void 0:i.title)||o.name})),(m=o.children)!=null&&m.length&&a.push(...p(o.children,n))}),a}function d(s){return re(s,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:i,hideBreadcrumb:m}=a;return!(!i||m)}).filter(n=>{var a;return!((a=n.meta)!=null&&a.hideBreadcrumb)})}function l(s,n,a){a==null||a.preventDefault();const{children:o,redirect:i,meta:m}=s;if((o==null?void 0:o.length)&&!i){a==null||a.stopPropagation();return}if(!(m!=null&&m.carryParam))if(i&&se(i))f(i);else{let u="";n.length===1?u=n[0]:u=`${n.slice(1).pop()||""}`,u=/^\//.test(u)?u:`/${u}`,f(u)}}function c(s,n){return s.indexOf(n)!==s.length-1}function v(s){var n;return s.icon||((n=s.meta)==null?void 0:n.icon)}return{routes:e,t:g,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:h,handleClick:l,hasRedirect:c}}}),ce={key:1};function ie(e,t,r,h,f,g){const p=B("Icon"),d=B("router-link"),l=B("a-breadcrumb");return b(),E("div",{class:Z([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[W(l,{routes:e.routes},{itemRender:A(({route:c,routes:v,paths:s})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(b(),S(p,{key:0,icon:e.getIcon(c)},null,8,["icon"])):X("",!0),e.hasRedirect(v,c)?(b(),S(d,{key:2,to:"",onClick:n=>e.handleClick(c,s,n),style:{color:"inherit"}},{default:A(()=>[Y(D(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(b(),E("span",ce,D(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var me=O(oe,[["render",ie]]);export{me as default};
