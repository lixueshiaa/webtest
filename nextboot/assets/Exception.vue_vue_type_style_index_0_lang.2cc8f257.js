import{a as N,cS as e,z as O,cT as R,cU as S,cV as A,b as v,f as d,j as s,cW as f,p as c,K as G,a5 as k,c as P}from"./index.d537950e.js";var C="/assets/no-data.f7e550cc.svg",D="/assets/net-error.61b7e6df.svg",I=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:p}=R(),o=S(),r=A(),{t}=P(),{prefixCls:x}=v("app-exception-page"),E=d(()=>{const{status:l}=p,{status:i}=n;return Number(l)||i}),g=d(()=>s(a).get(s(E))),T=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?T:u,handler:()=>n.full?o(f.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?T:u,handler:()=>n.full?o(f.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>r(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>r(),icon:D}),()=>{const{title:l,subTitle:i,btnText:b,icon:_,handler:m,status:y}=s(g)||{};return c(k,{class:x,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>b&&c(G,{type:"primary",onClick:m},{default:()=>b}),icon:()=>_?c("img",{src:_},null):null})}}});export{I as _};
