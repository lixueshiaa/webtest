import{a as c,bw as p,j as _,o as i,i as l}from"./index.d537950e.js";const h=c({__name:"index",setup(u){const{currentRoute:o,replace:a}=p(),{params:e,query:n}=_(o),{path:r,_redirect_type:s="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(s==="name"?{name:t,query:n,params:e}:{path:t.startsWith("/")?t:"/"+t,query:n}),(m,d)=>(i(),l("div"))}});export{h as default};
