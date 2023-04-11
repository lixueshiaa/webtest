import{C}from"./index.499c75b8.js";import{P as g}from"./index.7910eff5.js";import{a1 as D,a as x,aZ as p,ef as R,z as c,U as n,o as F,k as B,G as o,p as a,bR as b,J as i}from"./index.0c676cb0.js";import"./useWindowSizeFn.f69fad46.js";import"./htmlmixed.604e57c2.js";import"./onMountedOrActivated.29514295.js";import"./useContentViewHeight.3c3f37af.js";const h='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',j=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,k=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,y=x({components:{CodeEditor:C,PageWrapper:g,RadioButton:p.Button,RadioGroup:p.Group,ASpace:R},setup(){const t=c("application/json"),e=c(h);function m(d){const u=d.target.value;if(u==="application/json"){e.value=h;return}if(u==="htmlmixed"){e.value=k;return}if(u==="javascript"){e.value=j;return}}function s(){b.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:e.value})}return{value:e,modeValue:t,handleModeChange:m,showData:s}}}),P=i("\u83B7\u53D6\u6570\u636E"),A=i(" json\u6570\u636E "),G=i(" html\u4EE3\u7801 "),V=i(" javascript\u4EE3\u7801 ");function S(t,e,m,s,d,u){const _=n("a-button"),l=n("RadioButton"),v=n("RadioGroup"),f=n("a-space"),w=n("CodeEditor"),E=n("PageWrapper");return F(),B(E,{title:"\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(f,{size:"middle"},{default:o(()=>[a(_,{onClick:t.showData,type:"primary"},{default:o(()=>[P]),_:1},8,["onClick"]),a(v,{"button-style":"solid",value:t.modeValue,"onUpdate:value":e[0]||(e[0]=r=>t.modeValue=r),onChange:t.handleModeChange},{default:o(()=>[a(l,{value:"application/json"},{default:o(()=>[A]),_:1}),a(l,{value:"htmlmixed"},{default:o(()=>[G]),_:1}),a(l,{value:"javascript"},{default:o(()=>[V]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(w,{value:t.value,"onUpdate:value":e[1]||(e[1]=r=>t.value=r),mode:t.modeValue},null,8,["value","mode"])]),_:1})}var z=D(y,[["render",S]]);export{z as default};
