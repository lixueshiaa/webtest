import{B as g}from"./index.7ab28a2b.js";import{a as f,z as p,bg as h,X as M,a1 as B,U as m,o,k as v,G as u,p as C,i as t,l as _,N as y,a9 as k,t as F,ad as D,J as b}from"./index.397c0bf9.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";const A=f({components:{BasicModal:g},setup(){const e=p(!0),a=p(10),[i,{setModalProps:s,redoModalHeight:l}]=h();M(()=>a.value,()=>{l()});function d(r){r&&(e.value=!0,s({loading:!0,confirmLoading:!0}),setTimeout(()=>{a.value=Math.round(Math.random()*30+5),e.value=!1,s({loading:!1,confirmLoading:!1})},3e3))}function n(){a.value=Math.round(Math.random()*20+10)}return{register:i,loading:e,handleShow:d,lines:a,setLines:n}}}),L=b("\u70B9\u6211\u66F4\u65B0\u5185\u5BB9"),V={key:0,class:"empty-tips"},$={key:1};function w(e,a,i,s,l,d){const n=m("a-button"),r=m("BasicModal");return o(),v(r,D(e.$attrs,{destroyOnClose:"",onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],onVisibleChange:e.handleShow}),{insertFooter:u(()=>[C(n,{type:"primary",danger:"",onClick:e.setLines,disabled:e.loading},{default:u(()=>[L]),_:1},8,["onClick","disabled"])]),default:u(()=>[e.loading?(o(),t("div",V," \u52A0\u8F7D\u4E2D\uFF0C\u7A0D\u7B493\u79D2\u2026\u2026 ")):_("",!0),e.loading?_("",!0):(o(),t("ul",$,[(o(!0),t(y,null,k(e.lines,c=>(o(),t("li",{key:c},"\u52A0\u8F7D\u5B8C\u6210"+F(c)+"\uFF01",1))),128))]))]),_:1},16,["onRegister","onVisibleChange"])}var I=B(A,[["render",w],["__scopeId","data-v-01a0673e"]]);export{I as default};
