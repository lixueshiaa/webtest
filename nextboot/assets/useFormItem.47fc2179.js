import{ak as f,B as v,al as i,a7 as m,f as d,am as g,an as S,Q as h,j as w}from"./index.0c676cb0.js";function I(n,u="value",c="change",o){const e=f(),s=e==null?void 0:e.emit,t=v({value:n[u]}),r=i(t),l=a=>{t.value=a};return m(()=>{t.value=n[u]}),[d({get(){return t.value===""?[]:t.value},set(a){g(a,r.value)||(t.value=a,S(()=>{s==null||s(c,a,...h(w(o))||[])}))}}),l,r]}export{I as u};
