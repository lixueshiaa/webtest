import{u as d}from"./useContextMenu.8ed3a346.js";import{a1 as m,a as C,dS as _,U as l,o as f,k as b,G as t,p as a,J as p,T as x}from"./index.0c676cb0.js";import{P as h}from"./index.7910eff5.js";import"./onMountedOrActivated.29514295.js";import"./useWindowSizeFn.f69fad46.js";import"./useContentViewHeight.3c3f37af.js";const w=C({components:{CollapseContainer:_,PageWrapper:h},setup(){const[e]=d(),{createMessage:n}=x();function s(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:s,handleMultipleContext:i}}}),k=p(" Right Click on me "),N=p(" Right Click on me ");function g(e,n,s,i,o,M){const r=l("a-button"),c=l("CollapseContainer"),u=l("PageWrapper");return f(),b(u,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[a(c,{title:"Simple"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[k]),_:1},8,["onContextmenu"])]),_:1}),a(c,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[N]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}var F=m(w,[["render",g]]);export{F as default};
