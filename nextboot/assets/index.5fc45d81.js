import{a as D,a6 as r,z as _,ck as O,X as h,cl as E,cm as N,ay as p,c as M,aE as b,ah as w,az as y,a1 as I,o as S,i as Y,t as B,ae as $}from"./index.9eb451d3.js";const f=1e3,l=f*60,u=l*60,T=u*24,k=D({name:"Time",props:{value:r.oneOfType([r.number,r.instanceOf(Date),r.string]).isRequired,step:r.number.def(60),mode:r.oneOf(["date","datetime","relative"]).def("relative")},setup(o){const m=_(""),{t:s}=M();O(d,o.step*f),h(()=>o.value,()=>{d()},{immediate:!0});function v(){const{value:e}=o;let n=0;if(b(e)){const i=e.toString().length>10?e:e*1e3;n=new Date(i).getTime()}else w(e)?n=new Date(e).getTime():y(e)&&(n=e.getTime());return n}function d(){const{mode:e,value:n}=o,i=v();e==="relative"?m.value=g(i):e==="datetime"?m.value=E(n):e==="date"&&(m.value=N(n))}function g(e){const n=new Date().getTime(),i=p(e).isBefore(n);let t=n-e;i||(t=-t);let a="",c=s(i?"component.time.before":"component.time.after");return t<f?a=s("component.time.just"):t<l?a=parseInt(t/f)+s("component.time.seconds")+c:t>=l&&t<u?a=Math.floor(t/l)+s("component.time.minutes")+c:t>=u&&t<T?a=Math.floor(t/u)+s("component.time.hours")+c:t>=T&&t<262386e4?a=Math.floor(t/T)+s("component.time.days")+c:t>=262386e4&&t<=3156786e4&&i?a=p(e).format("MM-DD-HH-mm"):a=p(e).format("YYYY"),a}return{date:m}}});function H(o,m,s,v,d,g){return S(),Y("span",null,B(o.date),1)}var R=I(k,[["render",H]]);const j=$(R);export{j as T};
