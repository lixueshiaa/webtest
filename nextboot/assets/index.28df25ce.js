var te=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var M=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&M(e,n,t[n]);if(D)for(var n of D(t))re.call(t,n)&&M(e,n,t[n]);return e},U=(e,t)=>oe(e,ne(t));var X=(e,t,n)=>new Promise((C,f)=>{var $=r=>{try{l(n.next(r))}catch(h){f(h)}},d=r=>{try{l(n.throw(r))}catch(h){f(h)}},l=r=>r.done?C(r.value):Promise.resolve(r.value).then($,d);l((n=n.apply(e,t)).next())});import{a as Q,a1 as Y,b as Z,c_ as se,o as E,i as V,n as j,aa as y,r as T,a2 as q,z as k,X as O,an as I,j as H,dP as ie,bY as le,ah as ce,aE as ge,dQ as ue,a6 as p,b5 as fe,f as b,a$ as G,U as J,k as K,a8 as pe,a9 as de,G as N,ab as he,ac as me,N as He,J as Ce,t as $e,ad as Fe,l as L,ae as x}from"./index.6cf4d174.js";import{o as be}from"./onMountedOrActivated.c1705977.js";import{u as ye}from"./useWindowSizeFn.99e468e7.js";import{u as ve}from"./useContentViewHeight.183e9878.js";const Pe=Q({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=Z("page-footer"),{getCalcContentWidth:t}=se();return{prefixCls:e,getCalcContentWidth:t}}});function _e(e,t,n,C,f,$){return E(),V("div",{class:T(e.prefixCls),style:q({width:e.getCalcContentWidth})},[j("div",{class:T(`${e.prefixCls}__left`)},[y(e.$slots,"left",{},void 0,!0)],2),y(e.$slots,"default",{},void 0,!0),j("div",{class:T(`${e.prefixCls}__right`)},[y(e.$slots,"right",{},void 0,!0)],2)],6)}var ee=Y(Pe,[["render",_e],["__scopeId","data-v-5a3cae57"]]);function Se(e,t,n,C,f=0,$=k(0)){const d=k(null),{footerHeightRef:l}=ve();let r={useLayoutFooter:!0};const h=a=>{r=a};function z(){I(()=>{S()})}function v(a,R="all"){var u,P,F,B;function m(o){return Number(o.replace(/[^\d]/g,""))}let g=0;const s="0px";if(a){const o=getComputedStyle(a),c=m((u=o==null?void 0:o.marginTop)!=null?u:s),i=m((P=o==null?void 0:o.marginBottom)!=null?P:s),w=m((F=o==null?void 0:o.paddingTop)!=null?F:s),A=m((B=o==null?void 0:o.paddingBottom)!=null?B:s);R==="all"?(g+=c,g+=i,g+=w,g+=A):R==="top"?(g+=c,g+=w):(g+=i,g+=A)}return g}function _(a){return a==null?null:a instanceof HTMLDivElement?a:a.$el}function S(){return X(this,null,function*(){var B;if(!e.value)return;yield I();const a=_(H(t));if(!a)return;const{bottomIncludeBody:R}=ie(a);let m=0;n.forEach(o=>{var c,i;m+=(i=(c=_(H(o)))==null?void 0:c.offsetHeight)!=null?i:0});let g=(B=v(a))!=null?B:0;C.forEach(o=>{g+=v(_(H(o)))});let s=0;function u(o,c){if(o&&c){const i=o.parentElement;i&&(ce(c)?i.classList.contains(c)?s+=v(i,"bottom"):(s+=v(i,"bottom"),u(i,c)):ge(c)&&c>0&&(s+=v(i,"bottom"),u(i,--c)))}}le(f)?u(a,H(f)):u(a,f);let P=R-H(l)-H($)-m-g-s;const F=()=>{var o;(o=r.elements)==null||o.forEach(c=>{var i,w;P+=(w=(i=_(H(c)))==null?void 0:i.offsetHeight)!=null?w:0})};r.useLayoutFooter&&H(l)>0,F(),d.value=P})}return be(()=>{I(()=>{S()})}),ye(()=>{S()},50,{immediate:!0}),O(()=>[l.value],()=>{S()},{flush:"post",immediate:!0}),{redoHeight:z,setCompensation:h,contentHeight:d}}const Re=Q({name:"PageWrapper",components:{PageFooter:ee,PageHeader:ue},inheritAttrs:!1,props:{title:p.string,dense:p.bool,ghost:p.bool,content:p.string,contentStyle:{type:Object},contentBackground:p.bool,contentFullHeight:p.bool,contentClass:p.string,fixedHeight:p.bool,upwardSpace:p.oneOfType([p.number,p.string]).def(0)},setup(e,{slots:t,attrs:n}){const C=k(null),f=k(null),$=k(null),d=k(null),{prefixCls:l}=Z("page-wrapper");fe(we,b(()=>e.fixedHeight));const r=b(()=>e.contentFullHeight),h=b(()=>e.upwardSpace),{redoHeight:z,setCompensation:v,contentHeight:_}=Se(r,C,[f,d],[$],h);v({useLayoutFooter:!0,elements:[d]});const S=b(()=>{var s;return[l,{[`${l}--dense`]:e.dense},(s=n.class)!=null?s:{}]}),a=b(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),R=b(()=>Object.keys(G(t,"default","leftFooter","rightFooter","headerContent"))),m=b(()=>{const{contentFullHeight:s,contentStyle:u,fixedHeight:P}=e;if(!s)return W({},u);const F=`${H(_)}px`;return W(U(W({},u),{minHeight:F}),P?{height:F}:{})}),g=b(()=>{const{contentBackground:s,contentClass:u}=e;return[`${l}-content`,u,{[`${l}-content-bg`]:s}]});return O(()=>[a.value],()=>{z()},{flush:"post",immediate:!0}),{getContentStyle:m,wrapperRef:C,headerRef:f,contentRef:$,footerRef:d,getClass:S,getHeaderSlots:R,prefixCls:l,getShowFooter:a,omit:G,getContentClass:g}}});function ke(e,t,n,C,f,$){const d=J("PageHeader"),l=J("PageFooter");return E(),V("div",{class:T(e.getClass),ref:"wrapperRef"},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(E(),K(d,Fe({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),pe({default:N(()=>[e.content?(E(),V(He,{key:0},[Ce($e(e.content),1)],64)):y(e.$slots,"headerContent",{key:1})]),_:2},[de(e.getHeaderSlots,r=>({name:r,fn:N(h=>[y(e.$slots,r,he(me(h||{})))])}))]),1040,["ghost","title"])):L("",!0),j("div",{class:T(["overflow-hidden",e.getContentClass]),style:q(e.getContentStyle),ref:"contentRef"},[y(e.$slots,"default")],6),e.getShowFooter?(E(),K(l,{key:1,ref:"footerRef"},{left:N(()=>[y(e.$slots,"leftFooter")]),right:N(()=>[y(e.$slots,"rightFooter")]),_:3},512)):L("",!0)],2)}var Be=Y(Re,[["render",ke]]);x(ee);const Ie=x(Be),we="PageWrapperFixedHeight";export{Ie as P,we as a};
