import{I as d,c as g}from"./functional.8b995981.js";import{P as _}from"./index.83e82d5a.js";import{a1 as l,a as f,U as t,o as F,k as h,G as n,p as r,J as C}from"./index.9eb451d3.js";import"./onMountedOrActivated.bab7e2a6.js";import"./useWindowSizeFn.ed181042.js";import"./useContentViewHeight.0d594355.js";const p=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],I=f({components:{PageWrapper:_,ImagePreview:d},setup(){function e(){g({imageList:p,defaultWidth:700,rememberState:!0,onImgLoad:({index:o,url:a,dom:s})=>{console.log(`\u7B2C${o+1}\u5F20\u56FE\u7247\u5DF2\u52A0\u8F7D\uFF0CURL\u4E3A\uFF1A${a}`,s)}})}return{imgList:p,openImg:e}}}),L=C("\u65E0\u9884\u89C8\u56FE");function P(e,i,o,a,s,v){const u=t("ImagePreview"),m=t("a-button"),c=t("PageWrapper");return F(),h(c,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:n(()=>[r(u,{imageList:e.imgList},null,8,["imageList"]),r(m,{onClick:e.openImg,type:"primary"},{default:n(()=>[L]),_:1},8,["onClick"])]),_:1})}var B=l(I,[["render",P]]);export{B as default};