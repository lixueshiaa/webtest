import{a as $,dZ as p,bc as k,b6 as y,a1 as x,U as o,o as s,k as i,G as l,i as _,a9 as u,N as m,r as n,p as g,n as r,t as c,J as d,l as N}from"./index.397c0bf9.js";import{articleList as B,actions as M}from"./data.486f8b35.js";const T=$({components:{List:p,ListItem:p.Item,ListItemMeta:p.Item.Meta,Tag:k,Icon:y},setup(){return{prefixCls:"account-center-article",list:B,actions:M}}});function V(e,b,h,A,w,z){const f=o("Tag"),C=o("ListItemMeta"),I=o("Icon"),v=o("ListItem"),L=o("List");return s(),i(L,{"item-layout":"vertical",class:n(e.prefixCls)},{default:l(()=>[(s(!0),_(m,null,u(e.list,a=>(s(),i(v,{key:a.title},{default:l(()=>[g(C,null,{description:l(()=>[r("div",{class:n(`${e.prefixCls}__content`)},c(a.content),3)]),title:l(()=>[r("p",{class:n(`${e.prefixCls}__title`)},c(a.title),3),r("div",null,[(s(!0),_(m,null,u(a.description,t=>(s(),i(f,{key:t,class:"mb-2"},{default:l(()=>[d(c(t),1)]),_:2},1024))),128))])]),_:2},1024),r("div",null,[(s(!0),_(m,null,u(e.actions,t=>(s(),_("div",{key:t.text,class:n(`${e.prefixCls}__action`)},[t.icon?(s(),i(I,{key:0,class:n(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):N("",!0),d(" "+c(t.text),1)],2))),128)),r("span",{class:n(`${e.prefixCls}__time`)},c(a.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}var F=x(T,[["render",V],["__scopeId","data-v-19162449"]]);export{F as default};