var se=Object.defineProperty;var O=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var j=(a,u,r)=>u in a?se(a,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[u]=r,z=(a,u)=>{for(var r in u||(u={}))oe.call(u,r)&&j(a,r,u[r]);if(O)for(var r of O(u))ie.call(u,r)&&j(a,r,u[r]);return a};import{a as H,f as B,j as l,o as C,i as U,D as $,E as R,n as v,p as b,b6 as y,N as Y,T as K,a6 as d,b as le,a_ as ue,B as re,bn as ce,z as N,X as q,U as S,G,ad as de,r as fe,bX as me,t as J,l as X,k as pe,bY as ge,an as ve,bo as P}from"./index.d537950e.js";import{u as he}from"./api.c50f6281.js";import{c as be}from"./functional.f108e49e.js";var T=(a=>(a.all="all",a.image="image",a.file="file",a))(T||{});const we={class:"upload-download-handler"},Fe={class:"upload-mover-handler"},Ce=H({__name:"UploadItemActions",props:{element:{type:HTMLElement,required:!0},fileList:{type:Object,required:!0},mover:{type:Boolean,required:!0},download:{type:Boolean,required:!0},emitValue:{type:Function,required:!0}},setup(a){const u=a,{createMessage:r}=K(),o=B(()=>l(u.fileList));function A(){let t=h();if(t===-1){r.warn("\u79FB\u52A8\u5931\u8D25\uFF1A"+t);return}if(t===0){p(t,l(o).length-1);return}p(t,t-1)}function _(){let t=h();if(t===-1){r.warn("\u79FB\u52A8\u5931\u8D25\uFF1A"+t);return}if(t==l(o).length-1){p(t,0);return}p(t,t+1)}function p(t,f){if(t!==f){let c=[...l(o)],g=c[t];c[t]=c[f],c[f]=g,u.emitValue(c.map(m=>m.url).join(","))}}function h(){var f,c;const t=(c=(f=u.element)==null?void 0:f.getElementsByTagName("img")[0])==null?void 0:c.src;if(t){const g=l(o);for(let m=0;m<g.length;m++){let x=g[m].url;const w=t.replace(window.location.origin,"");if(x===w||encodeURI(x)===w)return m}}return-1}function E(){var f,c;const t=(c=(f=u.element)==null?void 0:f.getElementsByTagName("img")[0])==null?void 0:c.src;window.open(t)}return(t,f)=>(C(),U(Y,null,[$(v("div",we,[v("a",{class:"download",title:"\u4E0B\u8F7D",onClick:E},[b(l(y),{icon:"ant-design:download"})])],512),[[R,a.download]]),$(v("div",Fe,[v("a",{title:"\u5411\u524D\u79FB\u52A8",onClick:A},[b(l(y),{icon:"ant-design:arrow-left"})]),v("a",{title:"\u5411\u540E\u79FB\u52A8",onClick:_},[b(l(y),{icon:"ant-design:arrow-right"})])],512),[[R,a.mover&&l(o).length>1]])],64))}});const ye={key:0},Ae={class:"ant-upload-text"},Ee=H({__name:"JUpload",props:{value:d.oneOfType([d.string,d.array]),text:d.string.def("\u4E0A\u4F20"),fileType:d.string.def(T.all),bizPath:d.string.def("temp"),returnUrl:d.bool.def(!0),maxCount:d.number.def(0),buttonVisible:d.bool.def(!0),multiple:d.bool.def(!0),mover:d.bool.def(!0),download:d.bool.def(!0),removeConfirm:d.bool.def(!1),beforeUpload:d.func,disabled:d.bool.def(!1)},emits:["change","update:value"],setup(a,{expose:u,emit:r}){const o=a,{createMessage:A,createConfirm:_}=K(),{prefixCls:p}=le("j-upload"),h=ue(),E=re({"X-Access-Token":ce()}),t=N([]),f=N(!0),c=N(),g=B(()=>o.maxCount>0&&t.value.length>=o.maxCount),m=B(()=>o.fileType===T.image),x=B(()=>{const e=Object.assign({},o,ge(h)?l(h):h);return e.name="file",e.listType=m.value?"picture-card":"text",e.class=[e.class,{"upload-disabled":o.disabled}],e.data=z({biz:o.bizPath},e.data),e.beforeUpload||(e.beforeUpload=W),m.value&&!e.accept&&(e.accept="image/*"),e});q(()=>o.value,e=>{Array.isArray(e)?o.returnUrl?V(e.join(",")):Q(e):V(e)},{immediate:!0}),q(t,()=>ve(()=>D()),{immediate:!0});const w="ant-upload-list-item";function D(){if(!m.value)return;const e=c.value?c.value.getElementsByClassName(w):null;if(!(!e||e.length===0))for(const s of e)s.getAttribute("data-has-actions")==="true"||s.addEventListener("mouseover",I)}function I(e){const n=(()=>{for(const k of e.path){if(k.classList.contains(w))return k;if(k.classList.contains(`${p}-container`))return null}return null})();if(!n)return;const i=n.getElementsByClassName("ant-upload-list-item-actions");if(!i||i.length===0)return;const F=document.createElement("div");F.className="upload-actions-container",me(Ce,{element:n,fileList:t,mover:o.mover,download:o.download,emitValue:L}).mount(F),i[0].appendChild(F),n.setAttribute("data-has-actions","true"),n.removeEventListener("mouseover",I)}function V(e){if(!e||e.length==0){t.value=[];return}let s=[];for(const n of e.split(",")){let i=P(n);s.push({uid:M(),name:ae(n),status:"done",url:i,response:{status:"history",message:n}})}t.value=s}function Q(e){if(!e||e.length==0){t.value=[];return}let s=[];for(const n of e){let i=P(n.filePath);s.push({uid:M(),name:n.fileName,url:i,status:"done",response:{status:"history",message:n.filePath}})}t.value=s}function W(e){return f.value=!0,m.value&&e.type.indexOf("image")<0?(A.warning("\u8BF7\u4E0A\u4F20\u56FE\u7247"),f.value=!1,!1):typeof o.beforeUpload=="function"?o.beforeUpload(e):!0}function Z(){return o.removeConfirm?new Promise(e=>{_({title:"\u5220\u9664",content:`\u786E\u5B9A\u8981\u5220\u9664\u8FD9${m.value?"\u5F20\u56FE\u7247":"\u4E2A\u6587\u4EF6"}\u5417\uFF1F`,iconType:"warning",onOk:()=>e(!0),onCancel:()=>e(!1)})}):!0}function ee(e){!e.file.status&&f.value===!1&&e.fileList.pop();let s=e.fileList;if(o.maxCount>0&&s.length>=o.maxCount)if(o.maxCount-s.length>=0)s=s.slice(-o.maxCount);else return;if(e.file.status==="done"?e.file.response.success&&(s=s.map(n=>{if(n.response){let i=n.response.message;n.url=P(i)}return n})):e.file.status==="error"&&A.error(`${e.file.name} \u4E0A\u4F20\u5931\u8D25.`),t.value=s,e.file.status==="done"||e.file.status==="removed")if(o.returnUrl)te();else{let n=[];for(const i of s)if(i.status==="done"){let F={fileName:i.name,filePath:i.response.message,fileSize:i.size};n.push(F)}L(n)}}function te(){let e=t.value,s="";(!e||e.length==0)&&(s="");let n=[];for(const i of e)if(i.status==="done")n.push(i.response.message);else return;n.length>0&&(s=n.join(",")),L(s)}function ne(e){m.value?be({imageList:[e.url],maskClosable:!0}):window.open(e.url)}function L(e){r("change",e),r("update:value",e)}function M(){return"-"+parseInt(Math.random()*1e4+1,10)}function ae(e){if(e.lastIndexOf("\\")>=0){let s=new RegExp("\\\\","g");e=e.replace(s,"/")}return e.substring(e.lastIndexOf("/")+1)}return u({addActionsListener:D}),(e,s)=>{const n=S("a-button"),i=S("a-upload");return C(),U("div",{ref_key:"containerRef",ref:c,class:fe(`${l(p)}-container`)},[b(i,de({headers:E,multiple:a.multiple,action:l(he),fileList:t.value,disabled:a.disabled,remove:Z},l(x),{onChange:ee,onPreview:ne}),{default:G(()=>[l(m)?(C(),U(Y,{key:0},[a.buttonVisible&&!l(g)?(C(),U("div",ye,[b(l(y),{icon:"ant-design:plus-outlined"}),v("div",Ae,J(a.text),1)])):X("",!0)],64)):a.buttonVisible?(C(),pe(n,{key:1,disabled:l(g)||a.disabled},{default:G(()=>[b(l(y),{icon:"ant-design:upload-outlined"}),v("span",null,J(a.text),1)]),_:1},8,["disabled"])):X("",!0)]),_:1},16,["headers","multiple","action","fileList","disabled"])],2)}}});export{T as U,Ee as _};
