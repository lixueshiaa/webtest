import{B as u}from"./BasicTable.ebe28ef2.js";import{T as l}from"./componentMap.801737ea.js";import"./TableImg.a4c65e1f.js";import{u as s}from"./useTable.db680d93.js";import{d}from"./table.1da48f24.js";import{a1 as c,a as F,U as r,o as f,i as b,p as a,G as h}from"./index.0c676cb0.js";import"./BasicForm.7ed18e1d.js";import"./FormItem.vue_vue_type_script_lang.3f5bf9fa.js";import"./index.7aa87f83.js";import"./BasicModal.6a1e781a.js";import"./useWindowSizeFn.f69fad46.js";import"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import"./useFormItem.47fc2179.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import"./api.6d7ba78d.js";import"./functional.51da07bc.js";import"./index.7910eff5.js";import"./onMountedOrActivated.29514295.js";import"./useContentViewHeight.3c3f37af.js";import"./FormOutlined.f1bb593e.js";import"./useSortable.29b10662.js";import"./index.95c15ee4.js";import"./download.2d6dcb07.js";import"./base64Conver.bb012c73.js";import"./index.b5b26116.js";import"./index.32a34a9d.js";import"./useCountdown.df5930af.js";import"./props.acb18fde.js";import"./Tree.vue_vue_type_style_index_0_lang.9a87433c.js";import"./useContextMenu.8ed3a346.js";import"./index.008cf2db.js";import"./index.a5c5d78d.js";import"./htmlmixed.604e57c2.js";import"./vue.1c47a5ee.js";import"./depart.api.904c0734.js";import"./index.ea661fe9.js";import"./EditOutlined.7e0ce9a3.js";const B=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],T=F({components:{BasicTable:u,TableAction:l},setup(){const[t]=s({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:d,columns:B,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function i(o){console.log("\u70B9\u51FB\u4E86\u5220\u9664",o)}function e(o){console.log("\u70B9\u51FB\u4E86\u542F\u7528",o)}return{registerTable:t,handleDelete:i,handleOpen:e}}}),A={class:"p-4"};function _(t,i,e,o,w,x){const p=r("TableAction"),m=r("BasicTable");return f(),b("div",A,[a(m,{onRegister:t.registerTable},{action:h(({record:n})=>[a(p,{actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,n)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,n)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}var ut=c(T,[["render",_]]);export{ut as default};
