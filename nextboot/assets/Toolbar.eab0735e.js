var y=Object.defineProperty,k=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(e,o,n)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,C=(e,o)=>{for(var n in o||(o={}))F.call(o,n)&&f(e,n,o[n]);if(_)for(var n of _(o))B.call(o,n)&&f(e,n,o[n]);return e},m=(e,o)=>k(e,E(o));import{a1 as I,a as J,aX as O,b6 as R,L as $,B as w,b4 as A,bf as D,U as l,o as r,i as b,n as s,N,a9 as T,k as U,G as u,p as a,r as g}from"./index.0c676cb0.js";const M=J({name:"OperatingArea",components:{Tooltip:O,Icon:R,Divider:$},setup(){const e=w({toolbarsConfigs:[{title:"\u9884\u89C8-\u652F\u6301\u5E03\u5C40",type:"preview",event:"handlePreview",icon:"ant-design:chrome-filled"},{title:"\u9884\u89C8-\u4E0D\u652F\u6301\u5E03\u5C40",type:"preview",event:"handlePreview2",icon:"ant-design:chrome-filled"},{title:"\u5BFC\u5165JSON",type:"importJson",event:"handleOpenImportJsonModal",icon:"ant-design:import-outlined"},{title:"\u751F\u6210JSON",type:"exportJson",event:"handleOpenJsonModal",icon:"ant-design:export-outlined"},{title:"\u751F\u6210\u4EE3\u7801",type:"exportCode",event:"handleOpenCodeModal",icon:"ant-design:code-filled"},{title:"\u6E05\u7A7A",type:"reset",event:"handleClearFormItems",icon:"ant-design:clear-outlined"}]}),o=A("historyReturn"),{undo:n,redo:c,canUndo:p,canRedo:v}=o;return m(C({},D(e)),{undo:n,redo:c,canUndo:p,canRedo:v})}}),L={class:"operating-area"},P={class:"left-btn-box"},S=["onClick"],V=["disabled"],j=["disabled"];function z(e,o,n,c,p,v){const i=l("Icon"),d=l("Tooltip"),h=l("Divider");return r(),b("div",L,[s("div",P,[(r(!0),b(N,null,T(e.toolbarsConfigs,t=>(r(),U(d,{title:t.title,key:t.icon},{default:u(()=>[s("a",{onClick:G=>e.$emit(t.event),class:"toolbar-text"},[a(i,{icon:t.icon},null,8,["icon"])],8,S)]),_:2},1032,["title"]))),128)),a(h,{type:"vertical"}),a(d,{title:"\u64A4\u9500"},{default:u(()=>[s("a",{class:g({disabled:!e.canUndo}),disabled:!e.canUndo,onClick:o[0]||(o[0]=(...t)=>e.undo&&e.undo(...t))},[a(i,{icon:"ant-design:undo-outlined"})],10,V)]),_:1}),a(d,{title:"\u91CD\u505A"},{default:u(()=>[s("a",{class:g({disabled:!e.canRedo}),disabled:!e.canRedo,onClick:o[1]||(o[1]=(...t)=>e.redo&&e.redo(...t))},[a(i,{icon:"ant-design:redo-outlined"})],10,j)]),_:1})])])}var x=I(M,[["render",z],["__scopeId","data-v-70c36f9f"]]);export{x as default};