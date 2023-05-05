import{a as F,ba as P,a6 as J,b as q,f as _,ah as H,a1 as K,U as M,o as S,i as R,p as a,G as A,aa as Q,N as Z,a9 as ee,k as te,a8 as ne,ad as E,ab as ae,r as oe,B as se,z as W,a7 as re,j as f,c8 as le,J as ie,cs as ce,ct as ue,cu as me,cv as de}from"./index.0c676cb0.js";const ge=F({name:"ImagePreview",components:{Image:P,PreviewGroup:P.PreviewGroup},props:{functional:J.bool,imageList:{type:Array}},setup(n){const{prefixCls:m}=q("image-preview"),u=_(()=>{const{imageList:l}=n;return l?l.map(t=>H(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:m,getImageList:u}}});function fe(n,m,u,l,t,w){const g=M("Image"),I=M("PreviewGroup");return S(),R("div",{class:oe(n.prefixCls)},[a(I,null,{default:A(()=>[!n.imageList||n.$slots.default?Q(n.$slots,"default",{key:0}):(S(!0),R(Z,{key:1},ee(n.getImageList,i=>(S(),te(g,ae(E({key:i.src},i)),ne({_:2},[i.placeholder?{name:"placeholder",fn:A(()=>[a(g,E(i,{src:i.placeholder,preview:!1}),null,16,["src"])]),key:"0"}:void 0]),1040))),128))]),_:3})],2)}var Se=K(ge,[["render",fe]]),ve="/nextboot/assets/resume.6e209205.svg",pe="/nextboot/assets/p-rotate.1d232189.svg",he="/nextboot/assets/scale.8d8ebde4.svg",_e="/nextboot/assets/unscale.99ad049c.svg",we="/nextboot/assets/unrotate.f9dd5a27.svg",d;(function(n){n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL"})(d||(d={}));const Ie={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},s="img-preview";var xe=F({name:"ImagePreview",props:Ie,emits:["img-load","img-error"],setup(n,{expose:m,emit:u}){const l=new Map,t=se({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:d.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),w=W(null),g=W(null);function I(){G();const{index:e,imageList:o}=n;if(!o||!o.length)throw new Error("imageList is undefined");t.currentIndex=e,y(o[e])}function i(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function G(){const e=f(w);!e||(e.onmousewheel=x,document.body.addEventListener("DOMMouseScroll",x),document.ondragstart=function(){return!1})}const p=_(()=>{var o;const e=(o=n==null?void 0:n.scaleStep)!=null?o:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function x(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&h(p.value),e.delta<0&&h(-p.value)}function h(e){t.imgScale<=.2&&e<0||(t.imgScale+=e)}function $(e){t.imgRotate+=e}function T(){const e=f(g);!e||(e.onmousemove=null)}function y(e){t.status=d.LOADING;const o=new Image;o.src=e,o.onload=r=>{if(t.currentUrl!==e){const c=r.composedPath();if(n.rememberState){l.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=l.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(i(),n.defaultWidth&&(t.imgScale=n.defaultWidth/c[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/c[0].naturalWidth);c&&u("img-load",{index:t.currentIndex,dom:c[0],url:e})}t.currentUrl=e,t.status=d.DONE},o.onerror=r=>{const c=r.composedPath();c&&u("img-error",{index:t.currentIndex,dom:c[0],url:e}),t.status=d.FAIL}}function b(e){e&&e.stopPropagation(),k()}function k(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",x),document.ondragstart=null}function D(){i()}m({resume:D,close:k,prev:L.bind(null,"left"),next:L.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function L(e){const{currentIndex:o}=t,{imageList:r}=n;e==="left"&&(t.currentIndex--,o<=0&&(t.currentIndex=r.length-1)),e==="right"&&(t.currentIndex++,o>=r.length-1&&(t.currentIndex=0)),y(r[t.currentIndex])}function X(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const o=f(g);o&&(o.onmousemove=Y)}function Y(e){e=e||window.event,e.preventDefault();const o=e.clientX-t.moveX,r=e.clientY-t.moveY;t.imgLeft+=o,t.imgTop+=r,t.moveX=e.clientX,t.moveY=e.clientY}const B=_(()=>{const{imgScale:e,imgRotate:o,imgTop:r,imgLeft:c}=t;return{transform:`scale(${e}) rotate(${o}deg)`,marginTop:`${r}px`,marginLeft:`${c}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),N=_(()=>{const{imageList:e}=n;return e.length>1});re(()=>{n.show&&I(),n.imageList&&i()});const U=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${s}-content`)&&b(e)},z=()=>a("div",{class:`${s}__close`,onClick:b},[a(le,{class:`${s}__close-icon`},null)]),j=()=>{if(!f(N))return null;const{currentIndex:e}=t,{imageList:o}=n;return a("div",{class:`${s}__index`},[e+1,ie(" / "),o.length])},V=()=>a("div",{class:`${s}__controller`},[a("div",{class:`${s}__controller-item`,onClick:()=>h(-p.value)},[a("img",{src:_e},null)]),a("div",{class:`${s}__controller-item`,onClick:()=>h(p.value)},[a("img",{src:he},null)]),a("div",{class:`${s}__controller-item`,onClick:D},[a("img",{src:ve},null)]),a("div",{class:`${s}__controller-item`,onClick:()=>$(-90)},[a("img",{src:we},null)]),a("div",{class:`${s}__controller-item`,onClick:()=>$(90)},[a("img",{src:pe},null)])]),O=e=>f(N)?a("div",{class:[`${s}__arrow`,e],onClick:()=>L(e)},[e==="left"?a(ce,null,null):a(ue,null,null)]):null;return()=>t.show&&a("div",{class:s,ref:w,onMouseup:T,onClick:U},[a("div",{class:`${s}-content`},[a("img",{style:f(B),class:[`${s}-image`,t.status===d.DONE?"":"hidden"],ref:g,src:t.currentUrl,onMousedown:X},null),z(),j(),V(),O("left"),O("right")])])}});let C=null;function Ce(n){var l;if(!me)return;const m={},u=document.createElement("div");return Object.assign(m,{show:!0,index:0,scaleStep:100},n),C=a(xe,m),de(C,u),document.body.appendChild(u),(l=C.component)==null?void 0:l.exposed}export{Se as I,Ce as c};