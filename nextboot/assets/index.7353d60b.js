import{P as c}from"./index.7910eff5.js";import{a1 as l,a as u,dS as _,U as n,o as g,k as d,G as t,p as o,J as r}from"./index.0c676cb0.js";import{$ as p}from"./print.b8ee1de4.js";import"./onMountedOrActivated.29514295.js";import"./useWindowSizeFn.f69fad46.js";import"./useContentViewHeight.3c3f37af.js";const f=u({name:"AppLogo",components:{PageWrapper:c,CollapseContainer:_},setup(){function e(){p({printable:[{name:"ll",email:"123@gmail.com",phone:"123"},{name:"qq",email:"456@gmail.com",phone:"456"}],properties:["name","email","phone"],type:"json"})}function a(){p({printable:["https://anncwb.github.io/anncwb/images/preview1.png","https://anncwb.github.io/anncwb/images/preview2.png"],type:"image",header:"Multiple Images",imageStyle:"width:100%;"})}return{jsonPrint:e,imagePrint:a}}}),C=r("\u6253\u5370"),h=r("Image Print");function b(e,a,P,w,k,y){const i=n("a-button"),s=n("CollapseContainer"),m=n("PageWrapper");return g(),d(m,{title:"\u6253\u5370\u793A\u4F8B"},{default:t(()=>[o(s,{title:"json\u6253\u5370\u8868\u683C"},{default:t(()=>[o(i,{type:"primary",onClick:e.jsonPrint},{default:t(()=>[C]),_:1},8,["onClick"])]),_:1}),o(i,{type:"primary",class:"mt-5",onClick:e.imagePrint},{default:t(()=>[h]),_:1},8,["onClick"])]),_:1})}var W=l(f,[["render",b]]);export{W as default};