var s=(n,r,i)=>new Promise((e,o)=>{var m=t=>{try{p(i.next(t))}catch(a){o(a)}},c=t=>{try{p(i.throw(t))}catch(a){o(a)}},p=t=>t.done?e(t.value):Promise.resolve(t.value).then(m,c);p((i=i.apply(n,r)).next())});import{B as f}from"./index.7ab28a2b.js";import _ from"./preview.0e40a701.js";import{a as g,z as v,bg as C,o as l,k as u,G as h,l as k,ad as b,j as d}from"./index.397c0bf9.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./BasicTable.0e5ec17a.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./componentMap.b6eed178.js";import"./index.1ddf0867.js";import"./useFormItem.3d0c36d5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./api.2a8d49a5.js";import"./props.12587afd.js";import"./JDictSelectTag.67e5d4c9.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./onMountedOrActivated.752d8da8.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./JUpload.9a731a32.js";import"./functional.540b215d.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";import"./useForm.871d18c5.js";import"./index.a7c60aee.js";import"./useContentViewHeight.4e4c24ce.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./TableImg.e5f75c12.js";import"./index.e0efa998.js";import"./onlineNew.7fc4ec7d.js";import"./JUploadModal.57824aa5.js";import"./useTable.cd2ffd0a.js";import"./online.options.5c703e4b.js";import"./render.bf5724a4.js";import"./index.e3d374a0.js";const _o=g({__name:"index",setup(n){const r=v(""),[i,{}]=C(o=>s(this,null,function*(){const{values:m}=o;r.value=m.head.id}));function e(o){o||(r.value="")}return(o,m)=>(l(),u(d(f),b({onVisibleChange:e},o.$attrs,{defaultFullscreen:!0,onRegister:d(i),title:"\u9884\u89C8",onOk:o.handleSubmit}),{default:h(()=>[r.value?(l(),u(_,{key:0,isPageComponent:!1,id:r.value},null,8,["id"])):k("",!0)]),_:1},16,["onRegister","onOk"]))}});export{_o as default};
