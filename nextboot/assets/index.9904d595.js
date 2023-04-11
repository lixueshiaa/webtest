var d=(t,o,n)=>new Promise((c,r)=>{var l=e=>{try{u(n.next(e))}catch(a){r(a)}},s=e=>{try{u(n.throw(e))}catch(a){r(a)}},u=e=>e.done?c(e.value):Promise.resolve(e.value).then(l,s);u((n=n.apply(t,o)).next())});import{a as m,K as $,z as b,f as w,a7 as B,a1 as C,c as z,j as f,af as h,U as i,o as v,k as S,G as p,J as F,t as I,ad as g,b as k,a8 as A,a9 as N,aa as T,ab as j,ac as D,p as P,ae as y}from"./index.d537950e.js";import{u as O}from"./useCountdown.ad6c5821.js";import{u as R}from"./useFormItem.6ac1e6ce.js";const V={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},E=m({name:"CountButton",components:{Button:$},props:V,setup(t){const o=b(!1),{currentCount:n,isStart:c,start:r,reset:l}=O(t.count),{t:s}=z(),u=w(()=>f(c)?s("component.countdown.sendText",[f(n)]):s("component.countdown.normalText"));B(()=>{t.value===void 0&&l()});function e(){return d(this,null,function*(){const{beforeStartFunc:a}=t;if(a&&h(a)){o.value=!0;try{(yield a())&&r()}finally{o.value=!1}}else r()})}return{handleStart:e,currentCount:n,loading:o,getButtonText:u,isStart:c}}});function G(t,o,n,c,r,l){const s=i("Button");return v(),S(s,g(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:p(()=>[F(I(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var _=C(E,[["render",G]]);const J={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},K=m({name:"CountDownInput",components:{CountButton:_},inheritAttrs:!1,props:J,setup(t){const{prefixCls:o}=k("countdown-input"),[n]=R(t);return{prefixCls:o,state:n}}});function L(t,o,n,c,r,l){const s=i("CountButton"),u=i("a-input");return v(),S(u,g(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),A({addonAfter:p(()=>[P(s,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[N(Object.keys(t.$slots).filter(e=>e!=="addonAfter"),e=>({name:e,fn:p(a=>[T(t.$slots,e,j(D(a||{})))])}))]),1040,["class","size","value"])}var U=C(K,[["render",L]]);const X=y(U);y(_);export{X as C};
