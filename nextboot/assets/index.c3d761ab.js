import{a as o,z as r,ey as _,C as k,o as c,i as C,aa as f,ae as m,a1 as O,U as i,k as v,G as s,p as x,n as S,t as y}from"./index.0c676cb0.js";import{P as B}from"./index.7910eff5.js";import"./onMountedOrActivated.29514295.js";import"./useWindowSizeFn.f69fad46.js";import"./useContentViewHeight.3c3f37af.js";const $=o({__name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return _(n,()=>{t("clickOutside")}),k(()=>{t("mounted")}),(a,l)=>(c(),C("div",{ref_key:"wrap",ref:n},[f(a.$slots,"default")],512))}}),g=m($);const E=o({components:{ClickOutSide:g,PageWrapper:B},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function h(e,t,n,a,l,w){const u=i("ClickOutSide"),d=i("PageWrapper");return c(),v(d,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:s(()=>[x(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:s(()=>[S("div",{onClick:t[0]||(t[0]=(...p)=>e.innerClick&&e.innerClick(...p)),class:"demo-box"},y(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}var V=O(E,[["render",h],["__scopeId","data-v-824d9cd0"]]);export{V as default};