import{d as u}from"./vuedraggable.umd.c15ea3ba.js";import{a1 as g,a as _,b6 as f,B as h,U as s,o as v,i as I,p as l,G as C,n as b,J as y,t as $,ad as A}from"./index.397c0bf9.js";const k=_({name:"CollapseItem",components:{draggable:u,Icon:f},props:{list:{type:[Array],default:()=>[]},handleListPush:{type:Function,default:null}},setup(e,{emit:o}){return{state:h({}),handleStart:(t,n)=>{o("start",n[t.oldIndex].component)},handleAdd:t=>{console.log(t)},cloneItem:t=>e.handleListPush(t)}}}),S=["onDragstart","onClick"];function B(e,o,r,d,i,p){const t=s("Icon"),n=s("draggable");return v(),I("div",null,[l(n,A({tag:"ul","model-value":e.list},{group:{name:"form-draggable",pull:"clone",put:!1},sort:!1,clone:e.cloneItem,animation:180,ghostClass:"moving"},{"item-key":"type",onStart:o[0]||(o[0]=a=>e.handleStart(a,e.list)),onAdd:e.handleAdd}),{item:C(({element:a,index:c})=>[b("li",{class:"bs-box text-ellipsis",onDragstart:m=>e.$emit("add-attrs",e.list,c),onClick:m=>e.$emit("handle-list-push",a)},[l(t,{icon:a.icon},null,8,["icon"]),y(" "+$(a.label),1)],40,S)]),_:1},16,["model-value","onAdd"])])}var P=g(k,[["render",B],["__scopeId","data-v-63f3a32d"]]);export{P as default};
