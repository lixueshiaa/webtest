var _=(g,p,a)=>new Promise((i,l)=>{var d=t=>{try{s(a.next(t))}catch(r){l(r)}},m=t=>{try{s(a.throw(t))}catch(r){l(r)}},s=t=>t.done?i(t.value):Promise.resolve(t.value).then(d,m);s((a=a.apply(g,p)).next())});import{B as x}from"./index.991a4e0a.js";import{B as I}from"./BasicTable.18c7a455.js";import{T as S}from"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import{u as A}from"./useTable.090fbe83.js";import{r as M}from"./user.data.a28a217f.js";import{k as j,p as K,m as N}from"./user.api.dbd21046.js";import{a as O,z as V,bg as z,U as c,o as F,k as w,G as o,p as n,l as H,j as u,ad as U,J as C,Q as y,T as G}from"./index.d537950e.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./validator.aea6ab50.js";const J=C(" \u6279\u91CF\u5220\u9664 "),L=C(" \u6279\u91CF\u8FD8\u539F "),P=C("\u6279\u91CF\u64CD\u4F5C "),Ke=O({__name:"UserRecycleBinModal",emits:["success","register"],setup(g,{emit:p}){const{createConfirm:a}=G(),i=V([]),[l]=z(()=>{i.value=[]}),[d,{reload:m}]=A({api:j,columns:M,rowKey:"id",striped:!0,useSearchForm:!1,showTableSetting:!1,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,pagination:!0,tableSetting:{fullScreen:!0},canResize:!1,actionColumn:{width:150,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),s={type:"checkbox",columnWidth:50,selectedRowKeys:i,onChange:t};function t(e){i.value=e}function r(e){return _(this,null,function*(){yield K({userIds:e.id},m),p("success")})}function B(){r({id:y(u(i)).join(",")})}function h(e){return _(this,null,function*(){yield N({userIds:e.id},m)})}function R(){a({iconType:"warning",title:"\u5220\u9664",content:"\u786E\u5B9A\u8981\u6C38\u4E45\u5220\u9664\u5417\uFF1F\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF01",onOk:()=>h({id:y(u(i)).join(",")}),onCancel(){}})}function k(e){return[{label:"\u53D6\u56DE",icon:"ant-design:redo-outlined",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u8FD8\u539F",confirm:r.bind(null,e)}},{label:"\u5F7B\u5E95\u5220\u9664",icon:"ant-design:scissor-outlined",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:h.bind(null,e)}}]}return(e,Q)=>{const f=c("Icon"),b=c("a-menu-item"),D=c("a-menu"),T=c("a-button"),E=c("a-dropdown");return F(),w(u(x),U(e.$attrs,{onRegister:u(l),title:"\u7528\u6237\u56DE\u6536\u7AD9",showOkBtn:!1,width:"1000px",destroyOnClose:""}),{default:o(()=>[n(u(I),{onRegister:u(d),rowSelection:s},{tableTitle:o(()=>[i.value.length>0?(F(),w(E,{key:0},{overlay:o(()=>[n(D,null,{default:o(()=>[n(b,{key:"1",onClick:R},{default:o(()=>[n(f,{icon:"ant-design:delete-outlined"}),J]),_:1}),n(b,{key:"1",onClick:B},{default:o(()=>[n(f,{icon:"ant-design:redo-outlined"}),L]),_:1})]),_:1})]),default:o(()=>[n(T,null,{default:o(()=>[P,n(f,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):H("",!0)]),action:o(({record:v})=>[n(u(S),{actions:k(v)},null,8,["actions"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister"])}}});export{Ke as default};