var _=Object.defineProperty,g=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var i=(r,e,t)=>e in r?_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))h.call(e,t)&&i(r,t,e[t]);if(a)for(var t of a(e))m.call(e,t)&&i(r,t,e[t]);return r},l=(r,e)=>g(r,y(e));import{a0 as x,a as u,y as v,bw as k,j as q,z as D,eQ as j,c7 as w,D as P,o as S,i as U}from"./index.6cf4d174.js";const B=r=>x.get({url:"/sys/thirdParty/login",params:r},{joinParamsToUrl:!0}),Q={class:"fixed h-full w-full flex flex-col justify-center items-center text-4xl"},R=u({name:"router-changing"}),z=u(l(c({},R),{setup(r){const e=v(),t=k(),{currentRoute:f}=t,n=q(f).query||{},d=D(!0);return n.sign&&n.client&&n.pageFlag&&n.time&&B(n).then(s=>{if(s&&s.token){e.setToken(s.token);const o=j.parseQueryString(s.route);t.replace({path:"/financial/applyDetail",query:o})}}),(s,o)=>{const p=w("loading");return P((S(),U("div",Q,null,512)),[[p,d.value]])}}}));export{z as default};
