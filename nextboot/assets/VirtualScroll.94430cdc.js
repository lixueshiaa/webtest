import{a as C,z as A,B as D,f as u,j as i,X as B,C as I,an as k,dX as M,p as o,b_ as L,a1 as E,ae as P,L as U,U as S,o as X,k as j,G as _,n as g,t as W,J as V}from"./index.0c676cb0.js";import{P as q}from"./index.7910eff5.js";import"./onMountedOrActivated.29514295.js";import"./useWindowSizeFn.f69fad46.js";import"./useContentViewHeight.3c3f37af.js";const z={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},w="virtual-scroll";function a(t,s="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${s}`}var G=C({name:"VirtualScroll",props:z,setup(t,{slots:s}){const c=A(null),r=D({first:0,last:0,scrollTop:0}),p=u(()=>parseInt(t.bench,10)),h=u(()=>parseInt(t.itemHeight,10)),d=u(()=>Math.max(0,r.first-i(p))),f=u(()=>Math.min((t.items||[]).length,r.last+i(p))),v=u(()=>({height:a((t.items||[]).length*i(h))})),m=u(()=>{const e={},n=a(t.height),l=a(t.minHeight),H=a(t.minWidth),b=a(t.maxHeight),N=a(t.maxWidth),F=a(t.width);return n&&(e.height=n),l&&(e.minHeight=l),H&&(e.minWidth=H),b&&(e.maxHeight=b),N&&(e.maxWidth=N),F&&(e.width=F),e});B([()=>t.itemHeight,()=>t.height],()=>{x()});function y(e){const n=i(c);if(!n)return 0;const l=parseInt(t.height||0,10)||n.clientHeight;return e+Math.ceil(l/i(h))}function $(){return Math.floor(r.scrollTop/i(h))}function x(){const e=i(c);!e||(r.scrollTop=e.scrollTop,r.first=$(),r.last=y(r.first))}function R(){const{items:e=[]}=t;return e.slice(i(d),i(f)).map(T)}function T(e,n){n+=i(d);const l=a(n*i(h));return o("div",{class:`${w}__item`,style:{top:l},key:n},[L(s,"default",{index:n,item:e})])}return I(()=>{r.last=y(0),k(()=>{const e=i(c);!e||M({el:e,name:"scroll",listener:x,wait:0})})}),()=>o("div",{class:w,style:i(m),ref:c},[o("div",{class:`${w}__container`,style:i(v)},[R()])])}});var J=E(G,[["__scopeId","data-v-0693eafb"]]);const K=P(J);const O=(()=>{const t=[];for(let s=1;s<2e4;s++)t.push({title:"\u5217\u8868\u9879"+s});return t})(),Q=C({components:{VScroll:K,Divider:U,PageWrapper:q},setup(){return{data:O}}}),Y=V("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),Z={class:"virtual-scroll-demo-wrap"},tt={class:"virtual-scroll-demo__item"},et=V("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),it={class:"virtual-scroll-demo-wrap"},nt={class:"virtual-scroll-demo__item"};function rt(t,s,c,r,p,h){const d=S("Divider"),f=S("VScroll"),v=S("PageWrapper");return X(),j(v,{class:"virtual-scroll-demo"},{default:_(()=>[o(d,null,{default:_(()=>[Y]),_:1}),g("div",Z,[o(f,{itemHeight:41,items:t.data,height:300,width:300},{default:_(({item:m})=>[g("div",tt,W(m.title),1)]),_:1},8,["items"])]),o(d,null,{default:_(()=>[et]),_:1}),g("div",it,[o(f,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_(({item:m})=>[g("div",nt,W(m.title),1)]),_:1},8,["items"])])]),_:1})}var ct=E(Q,[["render",rt],["__scopeId","data-v-918662a0"]]);export{ct as default};
