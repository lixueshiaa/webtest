var c=(e,r,a)=>new Promise((n,o)=>{var p=t=>{try{s(a.next(t))}catch(i){o(i)}},f=t=>{try{s(a.throw(t))}catch(i){o(i)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(p,f);s((a=a.apply(e,r)).next())});import{u as d}from"./useScript.40a59125.js";import{a1 as u,a as l,z as m,C as w,o as h,i as M,a2 as _,an as y,j as g}from"./index.d537950e.js";const v="https://webapi.amap.com/maps?v=2.0&key=06313eb9c6563b674a8fd789db0692c3",A=l({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:r}=d({src:v});function a(){return c(this,null,function*(){yield r(),yield y();const n=g(e);if(!n)return;const o=window.AMap;new o.Map(n,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})})}return w(()=>{a()}),{wrapRef:e}}});function b(e,r,a,n,o,p){return h(),M("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var x=u(A,[["render",b]]);export{x as default};
