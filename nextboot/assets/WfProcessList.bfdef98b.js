var dt=Object.defineProperty,mt=Object.defineProperties;var pt=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ht=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable;var L=(r,s,n)=>s in r?dt(r,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[s]=n,N=(r,s)=>{for(var n in s||(s={}))ht.call(s,n)&&L(r,n,s[n]);if(j)for(var n of j(s))ft.call(s,n)&&L(r,n,s[n]);return r},U=(r,s)=>mt(r,pt(s));var k=(r,s,n)=>new Promise((B,b)=>{var x=e=>{try{_(n.next(e))}catch(S){b(S)}},E=e=>{try{_(n.throw(e))}catch(S){b(S)}},_=e=>e.done?B(e.value):Promise.resolve(e.value).then(x,E);_((n=n.apply(r,s)).next())});import{B as _t}from"./BasicTable.18c7a455.js";import{T as wt}from"./componentMap.93bd7e90.js";import"./TableImg.ad5e6f56.js";import"./index.991a4e0a.js";import{u as gt}from"./useListPage.3c7bec34.js";import bt from"./WfProcessXmlModal.206e16c3.js";import St from"./WfProcessModal.06d13a2f.js";import{l as Ct,c as kt,s as H,g as yt,a as Bt,b as xt,d as Et,e as O,f as Ft,h as Mt}from"./WfProcess.api.f2630beb.js";import{a as G,u as At,bn as Dt,z as T,bw as Tt,bj as V,j as d,bO as $,U as w,o as p,i as g,p as h,G as u,N as F,a9 as It,k as M,J as y,t as z,l as I,n as vt,bR as q,by as A,bo as Rt,Q as v}from"./index.d537950e.js";import{d as Xt}from"./download.bf76ecd3.js";import"./BasicForm.b84ad685.js";import"./FormItem.vue_vue_type_script_lang.eed5af36.js";import"./BasicModal.5a168f1c.js";import"./useWindowSizeFn.5f6046fd.js";import"./useForm.41e2e211.js";import"./RadioButtonGroup.7ea12308.js";import"./useFormItem.6ac1e6ce.js";import"./JDictSelectTag.189304ea.js";import"./JUpload.864c8b30.js";import"./api.c50f6281.js";import"./functional.f108e49e.js";import"./index.dbf0b2ba.js";import"./onMountedOrActivated.b07d3039.js";import"./useContentViewHeight.6a091f7f.js";import"./FormOutlined.2279bbc3.js";import"./useSortable.23555d6d.js";import"./index.52558c64.js";import"./index.41c7be8d.js";import"./index.9904d595.js";import"./useCountdown.ad6c5821.js";import"./props.1eba571b.js";import"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import"./useContextMenu.7a70fb68.js";import"./index.29969b1b.js";import"./index.763820e1.js";import"./htmlmixed.285f9f73.js";import"./vue.80a2a3b3.js";import"./depart.api.c3d5b637.js";import"./index.64f1a493.js";import"./EditOutlined.6870e476.js";import"./useTable.090fbe83.js";import"./render.f035f14a.js";import"./index.e3d374a0.js";import"./base64Conver.bb012c73.js";const Pt=y(" \u5220\u9664 "),jt=y("\u6279\u91CF\u64CD\u4F5C "),Lt=["innerHTML"],Nt={key:0,style:{"font-size":"12px","font-style":"italic"}},Ut=y("\u4E0B\u8F7D"),Ht=G({name:"wfProcess-wfProcess"}),Re=G(U(N({},Ht),{setup(r){const s={},{apiUrl:n=""}=At(),B=Dt(),b=[],x=T([{label:"\u65B0\u589E",methods:"handleAdd",preIcon:"ant-design:plus-outlined"},{label:"\u5BFC\u51FA",methods:"onExportXls",preIcon:"ant-design:export-outlined"}]),E=T([{label:"xml\u7F16\u8F91",methods:"handleXmlEdit"}]),_=T([{label:"\u8BBE\u8BA1",methods:"handleDesign"},{label:"\u542F\u7528",methods:"handleStart",ifShowMethod:"handleShowStart"},{label:"\u505C\u7528",methods:"handleStop",ifShowMethod:"handleShowEnd"},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",methods:"handleDelete"}}]),e={handleShowStart:function(t){return t.state!==1},handleShowEnd:function(t){return t.state!==0},handleStart:function(t){return k(this,null,function*(){yield xt({id:t.id},f)})},handleStop:function(t){return k(this,null,function*(){yield Et({id:t.id},f)})},handleDesign:function(t){q.info({title:"\u6D41\u7A0B\u8BBE\u8BA1",width:"80%",icon:()=>A("span"),closable:!0,content:()=>A("iframe",{src:`${n+O}`+t.id+"&token="+B,width:"100%",height:"600px"})})},handleXmlEdit:function(t){K(!0,{record:t,title:"xml\u7F16\u8F91",action:"xmlEdit"})},handleAdd:function(){q.info({title:"\u6D41\u7A0B\u8BBE\u8BA1",width:"80%",icon:()=>A("span"),closable:!0,content:()=>A("iframe",{src:`${n+O}&token=`+B,width:"100%",height:"600px"})})},handleEdit:function(t){R(!0,{record:t,action:"editor"})},handleDetail:function(t){R(!0,{record:t,action:"detail"})},handleDelete:function(t){return k(this,null,function*(){yield Ft({id:t.id},f)})}},{currentRoute:S}=Tt(),[J,{openModal:K}]=V(),[Q,{openModal:R}]=V(),{prefixCls:Ot,tableContext:W,onExportXls:Y,onImportXls:Z}=gt({tableProps:{title:"wf_process",api:Ct,columns:kt,canResize:!0,beforeFetch:t=>{const m=ot(),i=d(S).query||{},l=m.getFieldsValue(),c=$(i,l,t);return Object.assign(t,c),Object.keys(t).map(a=>{for(let C=0;C<b.length;C++)t[b[C]]=void 0;(t[a]===""||t[a]===null)&&(t[a]=void 0)}),t},useSearchForm:!!H.length,formConfig:{labelWidth:120,schemas:H,autoSubmitOnEnter:!0,showAdvancedButton:!0,fieldMapToNumber:[],fieldMapToTime:[]},actionColumn:{fixed:"right",width:150}},exportConfig:{name:"wf_process",url:yt},importConfig:{url:Bt,success:f}});e.onExportXls=Y,e.onImportXls=Z;const[tt,X,P]=W,{reload:et,getForm:ot}=X,{rowSelection:nt,selectedRowKeys:D}=P;function it(t){t&&t.split(",").map(i=>{Xt({url:Rt(i)})})}function st(){return k(this,null,function*(){yield Mt({ids:D.value},f)})}function f(){(D.value=[])&&et()}function lt(){return d(x).map(t=>{const m=v(t),i=m.methods;return m.onClick=()=>{e[i]&&e[i]()},m})}function at(t){return d(E).map(i=>{const l=v(i),c=l.methods,a=l.ifShowMethod;return l.onClick=e[c].bind(null,t),l.ifShow=a&&e[a]?e[a](t):!0,l})}function rt(t){return d(_).map(m=>{const i=v(m),l=i.methods,c=$({},i.popConfirm||{}),a=i.ifShowMethod;return i.ifShow=a&&e[a]?e[a](t):!0,c.methods?(c.confirm=e[c.methods]&&e[c.methods].bind(null,t),i.popConfirm=c):l&&(i.onClick=e[l]&&e[l].bind(null,t)),i})}return s["./wfProcessMixin.ts"]&&s["./wfProcessMixin.ts"].default({methods:e,actionBtns:E,dropDownActionBtns:_,titleBtns:x,tableMethods:X,selections:P}),(t,m)=>{const i=w("j-upload-button"),l=w("a-button"),c=w("Icon"),a=w("a-menu-item"),C=w("a-menu"),ct=w("a-dropdown");return p(),g("div",null,[h(d(_t),{onRegister:d(tt),rowSelection:d(nt)},{tableTitle:u(()=>[(p(!0),g(F,null,It(lt(),(o,ut)=>(p(),g(F,null,[o.btnType==="import"?(p(),g(F,{key:0},[o.ifShow!==!1?(p(),M(i,{key:0,type:"primary",disabled:o.disabled===!0,preIcon:o.preIcon,onClick:o.onClick},{default:u(()=>[y(z(o.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):I("",!0)],64)):(p(),g(F,{key:1},[o.ifShow!==!1?(p(),M(l,{key:0,type:"primary",disabled:o.disabled===!0,preIcon:o.preIcon,onClick:o.onClick},{default:u(()=>[y(z(o.label),1)]),_:2},1032,["disabled","preIcon","onClick"])):I("",!0)],64))],64))),256)),d(D).length>0?(p(),M(ct,{key:0},{overlay:u(()=>[h(C,null,{default:u(()=>[h(a,{key:"1",onClick:st},{default:u(()=>[h(c,{icon:"ant-design:delete-outlined"}),Pt]),_:1})]),_:1})]),default:u(()=>[h(l,null,{default:u(()=>[jt,h(c,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):I("",!0)]),action:u(({record:o})=>[h(d(wt),{actions:at(o),dropDownActions:rt(o)},null,8,["actions","dropDownActions"])]),htmlSlot:u(({text:o})=>[vt("div",{innerHTML:o},null,8,Lt)]),fileSlot:u(({text:o})=>[o?(p(),M(l,{key:1,ghost:!0,type:"primary",preIcon:"ant-design:download-outlined",size:"small",onClick:ut=>it(o)},{default:u(()=>[Ut]),_:2},1032,["onClick"])):(p(),g("span",Nt,"\u65E0\u6587\u4EF6"))]),_:1},8,["onRegister","rowSelection"]),h(St,{onRegister:d(Q),onXmlSuccess:t.xmlSuccess,onSuccess:f},null,8,["onRegister","onXmlSuccess"]),h(bt,{onRegister:d(J),onSuccess:f},null,8,["onRegister"])])}}}));export{Re as default};