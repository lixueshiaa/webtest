import{M as w,a as C}from"./index.f170d56c.js";import{P as h}from"./index.28df25ce.js";import{a1 as g,a as D,dU as V,z as i,U as n,o as M,k as B,G as r,n as d,p as t,j as E,J as p}from"./index.6cf4d174.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./onMountedOrActivated.c1705977.js";import"./useContentViewHeight.183e9878.js";const F=D({components:{MarkDown:w,PageWrapper:h,MarkdownViewer:C,ACard:V},setup(){const e=i(null),a=i(`
# title

# content
`);function l(){const o=E(e);if(!o)return;o.getVditor().setTheme("dark")}function s(o){a.value=o}function c(){a.value=""}return{value:a,toggleTheme:l,markDownRef:e,handleChange:s,clearValue:c}}}),A=p(" \u9ED1\u6697\u4E3B\u9898 "),b=p(" \u6E05\u7A7A\u5185\u5BB9 "),P={class:"mt-2"};function T(e,a,l,s,c,o){const u=n("a-button"),m=n("MarkDown"),f=n("MarkdownViewer"),_=n("a-card"),k=n("PageWrapper");return M(),B(k,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[d("div",null,[t(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[A]),_:1},8,["onClick"]),t(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[b]),_:1},8,["onClick"]),t(m,{value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),d("div",P,[t(_,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:r(()=>[t(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var G=g(F,[["render",T]]);export{G as default};
