var d=(I,x,r)=>new Promise((A,k)=>{var B=l=>{try{n(r.next(l))}catch(s){k(s)}},p=l=>{try{n(r.throw(l))}catch(s){k(s)}},n=l=>l.done?A(l.value):Promise.resolve(l.value).then(B,p);n((r=r.apply(I,x)).next())});import"./index.9788db2e.js";import{a as ye,b4 as ve,z as c,bj as he,U as u,o as f,k as E,G as o,n as m,p as a,l as q,i as K,t as P,N as z,j as S,fC as ke,J as h,an as G,T as ge}from"./index.9eb451d3.js";import{o as De}from"./componentMap.6942b0b6.js";import{q as J,A as W,d as Ce}from"./depart.api.03e31315.js";import{s as Ee}from"./depart.user.api.5b8e68db.js";import xe from"./DepartFormModal.88ee9534.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./RadioButtonGroup.6d9641c3.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./JDictSelectTag.3b1f5a5e.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./JUpload.38683df0.js";import"./functional.8b995981.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./BasicForm.d1b5a4f4.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./useForm.26fd4105.js";import"./depart.data.ff6c9320.js";const Ae={class:"j-table-operator",style:{width:"100%"}},Be=h("\u65B0\u589E"),we=h("\u6DFB\u52A0\u4E0B\u7EA7"),Fe=h("\u5BFC\u5165"),Te=h("\u5BFC\u51FA"),be=m("span",null,"\u5220\u9664",-1),Ke=m("span",null,"\u6279\u91CF\u64CD\u4F5C ",-1),Se={key:1},Ie=h("\u6DFB\u52A0\u5B50\u7EA7"),Re=m("span",{style:{color:"red"}},"\u5220\u9664",-1),yt=ye({__name:"DepartLeftTree",emits:["select","rootTreeData"],setup(I,{expose:x,emit:r}){ve("prefixCls");const{createMessage:A}=ge(),{handleImportXls:k,handleExportXls:B}=De(),p=c(!1),n=c([]),l=c([]),s=c([]),v=c([]),w=c(!1),H=c(!0),F=c(null),T=c(null),O=c(""),[Q,{openModal:R}]=he();function _(){return d(this,null,function*(){try{p.value=!0,n.value=[];const e=yield J();if(Array.isArray(e)&&(n.value=e),s.value.length===0)U();else if(v.value.length===0){let t=n.value[0];t&&g(t.id,t)}else r("select",F.value);r("rootTreeData",n.value)}finally{p.value=!1}})}_();function Y(e){return d(this,null,function*(){try{const t=yield J({pid:e.dataRef.id});if(t.length==0)e.dataRef.isLeaf=!0;else if(e.dataRef.children=t,s.value.length>0){let i=[];for(let D of s.value)t.findIndex(C=>C.id===D)!==-1&&i.push(D);i.length>0&&(s.value=[...s.value])}n.value=[...n.value],r("rootTreeData",n.value)}catch(t){console.error(t)}return Promise.resolve()})}function U(){let e=n.value[0];e?(e.isLeaf||(s.value=[e.key]),g(e.id,e),Z()):r("select",null)}function Z(){return d(this,null,function*(){yield G(),w.value=!0,yield G(),w.value=!1})}function g(e,t){v.value=[e],t&&(F.value=t,r("select",t))}function ee(){R(!0,{isUpdate:!1,isChild:!1})}function M(e=F.value){if(e==null){A.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u90E8\u95E8");return}const t={parentId:e.id};R(!0,{isUpdate:!1,isChild:!0,record:t})}function te(e){return d(this,null,function*(){if(e)try{p.value=!0,n.value=[];let t=yield Ee({keyWord:e});Array.isArray(t)&&(n.value=t),U()}finally{p.value=!1}else _();O.value=e})}function oe(e){Array.isArray(e)?l.value=e:l.value=e.checked}function ae(e,t){e.length>0&&v.value[0]!==e[0]?g(e[0],t.selectedNodes[0].props):g(v.value[0])}function $(e,t=!0){return d(this,null,function*(){const i=S(e);if(i.length>0)try{p.value=!0,yield Ce({ids:i.join(",")},t),yield _()}finally{p.value=!1}})}function ne(e){return d(this,null,function*(){e&&(j(!1),$([e.id],!1))})}function le(){return d(this,null,function*(){try{yield $(l),l.value=[]}finally{}})}function j(e){e||(T.value=null)}function ue(e){k(e,W.importExcelUrl,()=>{_()})}function se(){B("\u90E8\u95E8\u4FE1\u606F",W.exportXlsUrl)}return x({loadRootTreeData:_}),(e,t)=>{const i=u("a-button"),D=u("a-upload"),C=u("icon"),b=u("a-menu-item"),L=u("a-menu"),N=u("a-dropdown"),ie=u("a-divider"),re=u("a-alert"),ce=u("a-input-search"),pe=u("a-tree"),de=u("a-empty"),fe=u("a-spin"),me=u("a-card");return f(),E(me,{bordered:!1,style:{height:"100%"}},{default:o(()=>[m("div",Ae,[a(i,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:ee},{default:o(()=>[Be]),_:1}),a(i,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:t[0]||(t[0]=y=>M())},{default:o(()=>[we]),_:1}),a(D,{name:"file",showUploadList:!1,customRequest:ue},{default:o(()=>[a(i,{type:"primary",preIcon:"ant-design:import-outlined"},{default:o(()=>[Fe]),_:1})]),_:1}),a(i,{type:"primary",preIcon:"ant-design:export-outlined",onClick:se},{default:o(()=>[Te]),_:1}),l.value.length>0?(f(),E(N,{key:0},{overlay:o(()=>[a(L,null,{default:o(()=>[a(b,{key:"1",onClick:le},{default:o(()=>[a(C,{icon:"ant-design:delete-outlined"}),be]),_:1})]),_:1})]),default:o(()=>[a(i,null,{default:o(()=>[Ke,a(C,{icon:"akar-icons:chevron-down"})]),_:1})]),_:1})):q("",!0)]),a(re,{type:"info","show-icon":"",class:"alert",style:{"margin-bottom":"8px"}},{message:o(()=>[l.value.length>0?(f(),K(z,{key:0},[m("span",null,"\u5DF2\u9009\u4E2D "+P(l.value.length)+" \u6761\u8BB0\u5F55",1),a(ie,{type:"vertical"}),m("a",{onClick:t[1]||(t[1]=y=>l.value=[])},"\u6E05\u7A7A")],64)):(f(),K("span",Se,"\u672A\u9009\u4E2D\u4EFB\u4F55\u6570\u636E"))]),_:1}),a(fe,{spinning:p.value},{default:o(()=>[a(ce,{placeholder:"\u6309\u90E8\u95E8\u540D\u79F0\u641C\u7D22\u2026",style:{"margin-bottom":"10px"},onSearch:te}),n.value.length>0?(f(),K(z,{key:0},[w.value?q("",!0):(f(),E(pe,{key:0,checkable:"",clickRowToExpand:!1,treeData:n.value,selectedKeys:v.value,checkStrictly:H.value,"load-data":Y,checkedKeys:l.value,expandedKeys:s.value,"onUpdate:expandedKeys":t[3]||(t[3]=y=>s.value=y),onCheck:oe,onSelect:ae},{title:o(({key:y,title:_e,dataRef:V})=>[a(N,{trigger:["contextmenu"]},{overlay:o(()=>[a(L,{onClick:t[2]||(t[2]=()=>{})},{default:o(()=>[a(b,{key:"1",onClick:X=>M(V)},{default:o(()=>[Ie]),_:2},1032,["onClick"]),a(b,{key:"2",onClick:X=>T.value=y},{default:o(()=>[Re]),_:2},1032,["onClick"])]),_:2},1024)]),default:o(()=>[a(S(ke),{visible:T.value===y,title:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F","ok-text":"\u786E\u5B9A","cancel-text":"\u53D6\u6D88",placement:"rightTop",onConfirm:X=>ne(V),onVisibleChange:j},{default:o(()=>[m("span",null,P(_e),1)]),_:2},1032,["visible","onConfirm"])]),_:2},1024)]),_:1},8,["treeData","selectedKeys","checkStrictly","checkedKeys","expandedKeys"]))],64)):(f(),E(de,{key:1,description:"\u6682\u65E0\u6570\u636E"}))]),_:1},8,["spinning"]),a(xe,{rootTreeData:n.value,onRegister:S(Q),onSuccess:_},null,8,["rootTreeData","onRegister"])]),_:1})}}});export{yt as default};
