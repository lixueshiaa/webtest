var k=(T,C,c)=>new Promise((h,r)=>{var D=a=>{try{m(c.next(a))}catch(n){r(n)}},g=a=>{try{m(c.throw(a))}catch(n){r(n)}},m=a=>a.done?h(a.value):Promise.resolve(a.value).then(D,g);m((c=c.apply(T,C)).next())});import{B as q}from"./index.f8f2ddf0.js";import{f as H,h as K,i as Q}from"./role.api.19c1ddc4.js";import{a as W,z as p,bg as X,bG as Y,j as l,U as u,o as f,k as b,G as t,p as i,i as I,a9 as j,a2 as Z,N,J as w,t as ee,l as te,ad as oe}from"./index.6cf4d174.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";const ae=w("\u5168\u90E8\u52FE\u9009"),ne=w("\u53D6\u6D88\u5168\u9009"),se=w(" \u6811\u64CD\u4F5C "),pe=W({__name:"RoleDesignModal",emits:["success","register"],setup(T,{emit:C}){const c=p(""),h=p(""),r=p(""),D=p([]),g=p([]),m=p([]),a=p([]),n=p([]),[B,{setModalProps:L,closeModal:O}]=X(o=>k(this,null,function*(){L({confirmLoading:!1}),c.value=o.roleId,S()}));function S(){return k(this,null,function*(){let o=yield Y("bpm_process_type");o&&(D.value=o);let s=yield H();if(s){m.value=s;let d=[...new Set(Array.from(l(s),({procType:e})=>e))];g.value=D.value.filter(e=>d.indexOf(e.value)!=-1),a.value=s.map(e=>({value:e.id,text:e.desformName,procType:e.procType}))}let _=yield K({roleId:l(c)});if(_.length>0){let{designName:d,designValues:e}=V(_);h.value=d.join(","),r.value=d.join(","),n.value=e}})}function A(o){r.value=l(n).join(",")}function E(){let{designName:o,designValues:s}=V(l(m));n.value=s,r.value=o.join(",")}function F(){n.value=[],r.value=""}function V(o){let s=[],_=[];for(let d of l(g)){let e=[];for(let v of o)d.value==v.procType&&(s.push(v.id),e.push(v.id));_.push(e)}return{designName:s,designValues:_}}function P(){return k(this,null,function*(){try{L({confirmLoading:!0}),yield Q({roleId:l(c),newDesignId:l(r),oldDessignId:l(h)}),O(),C("success")}finally{L({confirmLoading:!1})}})}return(o,s)=>{const _=u("a-checkbox"),d=u("a-col"),e=u("a-row"),v=u("a-checkbox-group"),U=u("a-card"),M=u("a-menu-item"),z=u("a-menu"),G=u("Icon"),J=u("a-button"),$=u("a-dropdown");return f(),b(l(q),oe(o.$attrs,{onRegister:l(B),title:"\u5DE5\u5355\u6388\u6743",onOk:P,width:"1200px"}),{insertFooter:t(()=>[i($,{placement:"topCenter"},{overlay:t(()=>[i(z,null,{default:t(()=>[i(M,{key:"1",onClick:E},{default:t(()=>[ae]),_:1}),i(M,{key:"2",onClick:F},{default:t(()=>[ne]),_:1})]),_:1})]),default:t(()=>[i(J,{style:{float:"left"}},{default:t(()=>[se,i(G,{icon:"ant-design:up-outlined"})]),_:1})]),_:1})]),default:t(()=>[(f(!0),I(N,null,j(g.value,(R,x)=>(f(),b(U,{title:R.text,style:Z({marginTop:x==0?"0px":"12px",height:"auto"}),headStyle:{backgroundColor:"#eaeaea"}},{default:t(()=>[i(v,{onChange:A,value:n.value[x],"onUpdate:value":y=>n.value[x]=y,style:{width:"100%"}},{default:t(()=>[i(e,null,{default:t(()=>[(f(!0),I(N,null,j(a.value,y=>(f(),I(N,null,[y.procType==R.value?(f(),b(d,{key:0,span:6},{default:t(()=>[i(_,{value:y.value},{default:t(()=>[w(ee(y.text),1)]),_:2},1032,["value"])]),_:2},1024)):te("",!0)],64))),256))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["title","style"]))),256))]),_:1},16,["onRegister"])}}});export{pe as default};