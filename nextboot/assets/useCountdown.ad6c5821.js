import{z as o,aj as c,j as f}from"./index.d537950e.js";function d(r){const e=o(r),n=o(!1);let t;function s(){t&&window.clearInterval(t)}function u(){n.value=!1,s(),t=null}function l(){f(n)||!!t||(n.value=!0,t=setInterval(()=>{f(e)===1?(u(),e.value=r):e.value-=1},1e3))}function a(){e.value=r,u()}function i(){a(),l()}return c(()=>{a()}),{start:l,reset:a,restart:i,clear:s,stop:u,currentCount:e,isStart:n}}export{d as u};
