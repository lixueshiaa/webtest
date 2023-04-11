var z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var C=(a,t,e)=>t in a?z(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,M=(a,t)=>{for(var e in t||(t={}))J.call(t,e)&&C(a,e,t[e]);if(x)for(var e of x(t))Q.call(t,e)&&C(a,e,t[e]);return a};var F=(a,t,e)=>new Promise((m,v)=>{var g=i=>{try{_(e.next(i))}catch(f){v(f)}},s=i=>{try{_(e.throw(i))}catch(f){v(f)}},_=i=>i.done?m(i.value):Promise.resolve(i.value).then(g,s);_((e=e.apply(a,t)).next())});import{B as W}from"./index.991a4e0a.js";import{B as H}from"./BasicForm.b84ad685.js";import"./componentMap.93bd7e90.js";import{u as K}from"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import{a1 as O,a as X,z as N,B as Y,bg as Z,an as ee,U as d,o as A,k as T,G as r,p as o,n as l,j as B,i as te,a9 as oe,t as y,N as ae,ad as se,J as R,bP as re,bQ as le}from"./index.d537950e.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import{j as ne,m as ie,n as ue,o as pe}from"./TsLeave.api.5b0f11de.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./index.52558c64.js";import"./useFormItem.6ac1e6ce.js";import"./download.bf76ecd3.js";import"./base64Conver.bb012c73.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./api.c50f6281.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./onMountedOrActivated.b07d3039.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./functional.f108e49e.js";import"./render.f035f14a.js";import"./index.e3d374a0.js";const h=a=>(re("data-v-64a5cc5a"),a=a(),le(),a),de={class:"border"},ce=h(()=>l("span",{class:"title"},"\u5185\u5BB9\u8BE6\u60C5",-1)),me={class:"border"},_e=h(()=>l("span",{class:"title"},"\u5BA1\u6838\u610F\u89C1",-1)),fe=R("\u901A\u8FC7"),ve=R("\u9A73\u56DE"),ge={class:"border"},Fe=h(()=>l("span",{class:"title"},"\u5BA1\u6838\u65E5\u5FD7",-1)),Be={class:"content"},ye=X({__name:"TsLeaveAuditModal",emits:["register","success"],setup(a,{emit:t}){const e=N(),m=Y({reason:""}),v={reason:[{required:!1,message:"\u8BF7\u8F93\u5165\u5BA1\u6279\u610F\u89C1",trigger:"blur"}]},g=N([]);let s;const[_,i]=K({labelWidth:150,schemas:ne,showActionButtonGroup:!1}),{setProps:f,resetFields:D,setFieldsValue:E,validate:L,getFieldsValue:Ae}=i,[S,{setModalProps:he,closeModal:w}]=Z(u=>F(this,null,function*(){s=u.record,g.value=yield ie({orderId:s.orderId}),yield D(),ee(()=>{E(M({},u.record)),setTimeout(()=>{L()},0)}),f({disabled:!0})}));function V(){return F(this,null,function*(){const u=yield e.value.validate();let n=[{id:s.id,taskId:s.taskId,orderId:s.orderId,reason:u.reason,displayName:s.displayName,args:s.args}];yield ue(n),w(),t("success")})}function P(){return F(this,null,function*(){const u=yield e.value.validate();let n=[{id:s.id,taskId:s.taskId,orderId:s.orderId,reason:u.reason,displayName:s.displayName,args:s.args}];yield pe(n),w(),t("success")})}return(u,n)=>{const c=d("a-col"),U=d("a-textarea"),j=d("a-form-item"),b=d("a-button"),I=d("a-row"),$=d("a-timeline-item"),G=d("a-timeline"),q=d("a-form");return A(),T(B(W),se(u.$attrs,{onRegister:B(S),title:"\u5BA1\u6279",width:"70%",class:"audit",footer:null}),{default:r(()=>[o(I,{type:"flex"},{default:r(()=>[o(c,{flex:"70%",style:{"overflow-y":"auto"}},{default:r(()=>[l("div",de,[ce,o(B(H),{onRegister:B(_)},null,8,["onRegister"])])]),_:1}),o(c,{flex:"30%"},{default:r(()=>[o(q,{ref_key:"formRef",ref:e,rules:v,model:m,"label-col":{span:0},"wrapper-col":{span:24}},{default:r(()=>[l("div",me,[_e,o(j,{label:"",prop:"reason"},{default:r(()=>[o(U,{value:m.reason,"onUpdate:value":n[0]||(n[0]=p=>m.reason=p),placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6279\u610F\u89C1",rows:4},null,8,["value"])]),_:1}),o(I,{type:"flex",justify:"space-between",style:{padding:"0 0 15px"}},{default:r(()=>[o(c,{span:4}),o(c,{span:4},{default:r(()=>[o(b,{type:"primary",onClick:n[1]||(n[1]=p=>V())},{default:r(()=>[fe]),_:1})]),_:1}),o(c,{span:4},{default:r(()=>[o(b,{type:"danger",onClick:n[2]||(n[2]=p=>P())},{default:r(()=>[ve]),_:1})]),_:1}),o(c,{span:4})]),_:1})]),l("div",ge,[Fe,l("div",Be,[o(G,null,{default:r(()=>[(A(!0),te(ae,null,oe(g.value,(p,k)=>(A(),T($,{color:k==0?"red":"blue",key:k},{default:r(()=>[l("p",null,"\u64CD\u4F5C\u4EBA\uFF1A"+y(p.createBy),1),l("p",null,"\u5BA1\u6838\u65F6\u95F4\uFF1A"+y(p.createTime),1),l("p",null,"\u8282\u70B9\uFF1A"+y(p.node),1),l("p",null,"\u610F\u89C1:"+y(p.remark),1)]),_:2},1032,["color"]))),128))]),_:1})])])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1},16,["onRegister"])}}});var st=O(ye,[["__scopeId","data-v-64a5cc5a"]]);export{st as default};
