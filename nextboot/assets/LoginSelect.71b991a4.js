var k=(e,i,r)=>new Promise((E,o)=>{var F=n=>{try{u(r.next(n))}catch(d){o(d)}},m=n=>{try{u(r.throw(n))}catch(d){o(d)}},u=n=>n.done?E(n.value):Promise.resolve(n.value).then(F,m);u((r=r.apply(e,i)).next())});import{a as x,bN as ee,y as ae,z as p,B as te,bg as ue,f as se,j as l,a1 as oe,a0 as ne,U as v,o as _,k as C,G as t,p as g,a8 as M,r as T,i as w,a9 as L,J as h,t as N,N as U,l as z,ad as V,T as le,bP as re,bQ as ie,n as D}from"./index.6cf4d174.js";import{B as de}from"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";const ce=x({name:"loginSelect",components:{Avatar:ee,BasicModal:de},emits:["success","register"],setup(e,{emit:i}){const r=ae(),{notification:E}=le(),o=p(!1),F=p([]),m=p(""),u=p(!1),n=p([]),d=p(""),B=p(!1),b=p(""),y=p(),c=te({orgCode:void 0,tenantId:null}),s={maskClosable:!1,closable:!1,canFullscreen:!1,width:"500px",minHeight:20,maxHeight:20},[$,{closeModal:q}]=ue(),H=se(()=>{if(l(u)&&l(o))return"\u8BF7\u9009\u62E9\u79DF\u6237\u548C\u90E8\u95E8";if(l(u)&&!l(o))return"\u8BF7\u9009\u62E9\u90E8\u95E8";if(!l(u)&&l(o))return"\u8BF7\u9009\u62E9\u79DF\u6237"}),P=p({tenantId:[{required:l(o),type:"number",message:"\u8BF7\u9009\u62E9\u79DF\u6237",trigger:"change"}],orgCode:[{required:l(u),message:"\u8BF7\u9009\u62E9\u90E8\u95E8",trigger:"change"}]}),R={labelCol:{span:4},wrapperCol:{span:18}};function j(a){let f=a.multi_depart;f==0?(E.warn({message:"\u63D0\u793A",description:"\u60A8\u5C1A\u672A\u5F52\u5C5E\u90E8\u95E8,\u8BF7\u786E\u8BA4\u8D26\u53F7\u4FE1\u606F",duration:3}),u.value=!1):f==2?(u.value=!0,n.value=a.departs):u.value=!1}function G(a){let f=a.tenantList;Array.isArray(f)&&(f.length===0?(o.value=!1,r.setTenant(c.tenantId)):f.length===1?(c.tenantId=f[0].id,o.value=!1,r.setTenant(c.tenantId)):(o.value=!0,F.value=f))}function J(){if(l(o)&&!c.tenantId)return m.value="error",!1;if(l(u)&&!c.orgCode)return d.value="error",!1;y.value.validate().then(()=>{Q().then(()=>{r.setTenant(c.tenantId),i("success")}).catch(a=>{console.log("\u767B\u5F55\u9009\u62E9\u51FA\u73B0\u95EE\u9898",a)}).finally(()=>{O()})}).catch(a=>{console.log("\u8868\u5355\u6821\u9A8C\u672A\u901A\u8FC7error",a)})}function Q(){return new Promise((a,f)=>{if(!l(u))a();else{let Z={orgCode:c.orgCode,username:l(b)};ne.put({url:"/sys/selectDepart",params:Z}).then(S=>{S.userInfo?(r.setUserInfo(S.userInfo),a()):(K(S),r.logout(),f())})}})}function K(a){E.error({message:"\u767B\u5F55\u5931\u8D25",description:((a.response||{}).data||{}).message||a.message||"\u8BF7\u6C42\u51FA\u73B0\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:4})}function O(){q(),I()}function W(a){return k(this,null,function*(){a&&(b.value=r.username,yield I(),yield j(a),yield G(a),!l(u)&&!l(o)?i("success",r.getUserInfo):B.value=!0)})}function I(){F.value=[],m.value="",n.value=[],d.value=""}function X(a){m.value=""}function Y(a){d.value=""}return{registerModal:$,visible:B,tenantList:F,isMultiTenant:o,validate_status:m,isMultiDepart:u,departList:n,validate_status1:d,formState:c,rules:P,layout:R,formRef:y,currTitle:H,config:s,handleTenantChange:X,handleDepartChange:Y,show:W,handleSubmit:J}}}),A=e=>(re("data-v-aa454b5a"),e=e(),ie(),e),fe=A(()=>D("span",null,"\u60A8\u96B6\u5C5E\u4E8E\u591A\u79DF\u6237\uFF0C\u8BF7\u9009\u62E9\u767B\u5F55\u79DF\u6237",-1)),pe=h(" \u79DF\u6237 "),me=A(()=>D("span",{style:{color:"#ed6f6f"}},"\u8BF7\u9009\u62E9\u767B\u5F55\u79DF\u6237",-1)),ve=A(()=>D("span",null,"\u60A8\u96B6\u5C5E\u4E8E\u591A\u90E8\u95E8\uFF0C\u8BF7\u9009\u62E9\u767B\u5F55\u90E8\u95E8",-1)),ge=h(" \u90E8\u95E8 "),_e=A(()=>D("span",{style:{color:"#ed6f6f"}},"\u8BF7\u9009\u62E9\u767B\u5F55\u90E8\u95E8",-1)),Fe=h("\u786E\u8BA4");function Ee(e,i,r,E,o,F){const m=v("a-avatar"),u=v("a-tooltip"),n=v("a-select-option"),d=v("a-select"),B=v("a-form-item"),b=v("a-form"),y=v("a-button"),c=v("BasicModal");return _(),C(c,V(e.config,{onRegister:e.registerModal,title:e.currTitle,wrapClassName:"loginSelectModal",visible:e.visible,"onUpdate:visible":i[2]||(i[2]=s=>e.visible=s)}),{footer:t(()=>[g(y,{onClick:e.handleSubmit,type:"primary"},{default:t(()=>[Fe]),_:1},8,["onClick"])]),default:t(()=>[g(b,V({ref:"formRef",model:e.formState,rules:e.rules},e.layout,{colon:!1,class:"loginSelectForm"}),{default:t(()=>[e.isMultiTenant?(_(),C(B,{key:0,name:"tenantId","validate-status":e.validate_status},M({label:t(()=>[g(u,{placement:"topLeft"},{title:t(()=>[fe]),default:t(()=>[g(m,{style:{"background-color":"#87d068"},size:30},{default:t(()=>[pe]),_:1})]),_:1})]),default:t(()=>[g(d,{value:e.formState.tenantId,"onUpdate:value":i[0]||(i[0]=s=>e.formState.tenantId=s),onChange:e.handleTenantChange,placeholder:"\u8BF7\u9009\u62E9\u767B\u5F55\u79DF\u6237",class:T({"valid-error":e.validate_status=="error"})},{default:t(()=>[(_(!0),w(U,null,L(e.tenantList,s=>(_(),C(n,{key:s.id,value:s.id},{default:t(()=>[h(N(s.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","onChange","class"])]),_:2},[e.validate_status=="error"?{name:"extra",fn:t(()=>[me]),key:"0"}:void 0]),1032,["validate-status"])):z("",!0),e.isMultiDepart?(_(),C(B,{key:1,"validate-status":e.validate_status1,colon:!1},M({label:t(()=>[g(u,{placement:"topLeft"},{title:t(()=>[ve]),default:t(()=>[g(m,{style:{"background-color":"rgb(104, 208, 203)"},size:30},{default:t(()=>[ge]),_:1})]),_:1})]),default:t(()=>[g(d,{value:e.formState.orgCode,"onUpdate:value":i[1]||(i[1]=s=>e.formState.orgCode=s),onChange:e.handleDepartChange,placeholder:"\u8BF7\u9009\u62E9\u767B\u5F55\u90E8\u95E8",class:T({"valid-error":e.validate_status1=="error"})},{default:t(()=>[(_(!0),w(U,null,L(e.departList,s=>(_(),C(n,{key:s.orgCode,value:s.orgCode},{default:t(()=>[h(N(s.departName),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","onChange","class"])]),_:2},[e.validate_status1=="error"?{name:"extra",fn:t(()=>[_e]),key:"0"}:void 0]),1032,["validate-status"])):z("",!0)]),_:1},16,["model","rules"])]),_:1},16,["onRegister","title","visible"])}var De=oe(ce,[["render",Ee],["__scopeId","data-v-aa454b5a"]]);export{De as default};
