var E=(h,m,t)=>new Promise((e,p)=>{var u=r=>{try{a(t.next(r))}catch(s){p(s)}},f=r=>{try{a(t.throw(r))}catch(s){p(s)}},a=r=>r.done?e(r.value):Promise.resolve(r.value).then(u,f);a((t=t.apply(h,m)).next())});import{a0 as C,a as T,z as L,c as k,eJ as D,bj as R,X as A,an as j,ag as B,U as I,o as g,i as _,N as S,a9 as V,D as M,E as N,p as i,j as o,G as n,J as y,t as b}from"./index.397c0bf9.js";import J from"./DetailModal.7709a8a2.js";import{B as $}from"./BasicTable.0e5ec17a.js";import{T as z}from"./componentMap.b6eed178.js";import"./TableImg.e5f75c12.js";import{u as F}from"./useTable.cd2ffd0a.js";import"./index.7ab28a2b.js";import{getColumns as G}from"./data.8bda8fb1.js";import"./index.9cc41dfa.js";import"./useDescription.647755d5.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./useFormItem.3d0c36d5.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import"./api.2a8d49a5.js";import"./functional.540b215d.js";import"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useContentViewHeight.4e4c24ce.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./index.1ddf0867.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";const H=()=>C.get({url:"/error"}),U={class:"p-4"},X=["src"],Mr=T({__name:"index",setup(h){const m=L(),t=L([]),{t:e}=k(),p=D(),[u,{setTableData:f}]=F({title:e("sys.errorLog.tableTitle"),columns:G(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[a,{openModal:r}]=R();A(()=>p.getErrorLogInfoList,l=>{j(()=>{f(B(l))})},{immediate:!0});function s(l){m.value=l,r(!0)}function w(){throw new Error("fire vue error!")}function v(){t.value.push(`${new Date().getTime()}.png`)}function x(){return E(this,null,function*(){yield H()})}return(l,q)=>{const d=I("a-button");return g(),_("div",U,[(g(!0),_(S,null,V(t.value,c=>M((g(),_("img",{key:c,src:c},null,8,X)),[[N,!1]])),128)),i(J,{info:m.value,onRegister:o(a)},null,8,["info","onRegister"]),i(o($),{onRegister:o(u),class:"error-handle-table"},{toolbar:n(()=>[i(d,{onClick:w,type:"primary"},{default:n(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),i(d,{onClick:v,type:"primary"},{default:n(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),i(d,{onClick:x,type:"primary"},{default:n(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),action:n(({record:c})=>[i(o(z),{actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:s.bind(null,c)}]},null,8,["actions"])]),_:1},8,["onRegister"])])}}});export{Mr as default};