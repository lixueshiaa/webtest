import{z as n,fG as u}from"./index.397c0bf9.js";import{u as c}from"./useWindowSizeFn.830b179a.js";function m(e){const a=n((e==null?void 0:e.def)||"600px");c(i,100,{immediate:!0});function i(){let t=document.documentElement.clientWidth;switch(!0){case t>u.XL:a.value=(e==null?void 0:e.xl)||"600px";break;case t>u.LG:a.value=(e==null?void 0:e.lg)||"600px";break;case t>u.MD:a.value=(e==null?void 0:e.md)||"600px";break;case t>u.SM:a.value=(e==null?void 0:e.sm)||"500px";break;case t>u.XS:a.value=(e==null?void 0:e.xs)||"400px";break;default:a.value=(e==null?void 0:e.mindef)||"300px";break}}return{width:a,calcWidth:i}}export{m as u};
