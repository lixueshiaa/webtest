var q=Object.defineProperty;var T=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var E=(e,o,a)=>o in e?q(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,L=(e,o)=>{for(var a in o||(o={}))J.call(o,a)&&E(e,a,o[a]);if(T)for(var a of T(o))W.call(o,a)&&E(e,a,o[a]);return e};import{c as K,u as X,y as Y,z as u,a0 as A,j as r,W as Z,T as x,F as M,I as ee,a as oe,a1 as se,U as c,o as ne,i as te,p as i,G as l,n as B,r as ie,a2 as S,N as ae,J as P}from"./index.6cf4d174.js";import{C as ue}from"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./useFormItem.ed1b0f05.js";function le(){const{createMessage:e,notification:o}=x(),{t:a}=K(),U=X(),k=Y(),_=u(""),f=u({}),p=u(!1),F=u(!1),g=u(""),m=u(!1),v=u(!1),h=u(""),w=u(""),C=u(!1),t=u(""),y=u("");function $(s){let n=`${U.uploadUrl}/sys/thirdLogin/render/${s}`;window.open(n,`login ${s}`,"height=500, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no"),_.value=s,f.value={},p.value=!1;let V=function(G){let d=G.data;if(typeof d=="string")if(d==="\u767B\u5F55\u5931\u8D25")e.warning(d);else if(d.includes("\u7ED1\u5B9A\u624B\u673A\u53F7")){F.value=!0;let Q=d.split(",");g.value=Q[1]}else b(d);else typeof d=="object"?d.isObj===!0&&(m.value=!0,f.value=L({},d)):e.warning("\u4E0D\u8BC6\u522B\u7684\u4FE1\u606F\u4F20\u9012")};window.addEventListener("message",V,!1)}function b(s){r(p)===!1&&(p.value=!0,k.ThirdLogin({token:s,thirdType:r(_)}).then(n=>{console.log("res====>doThirdLogin",n),n&&n.userInfo?o.success({message:a("sys.login.loginSuccessTitle"),description:`${a("sys.login.loginSuccessDesc")}: ${n.userInfo.realname}`,duration:3}):z(n)}))}function z(s){o.error({message:"\u767B\u5F55\u5931\u8D25",description:((s.response||{}).data||{}).message||s.message||"\u8BF7\u6C42\u51FA\u73B0\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:4})}function N(){h.value="",w.value=f.value.uuid,m.value=!1,v.value=!0}function O(){C.value=!0,f.value.suffix=parseInt(Math.random()*98+1),A.post({url:"/sys/third/user/create",params:{thirdLoginInfo:r(f)}},{isTransformResponse:!1}).then(s=>{if(s.success){let n=s.result;b(n),m.value=!1}else e.warning(s.message)}).finally(()=>{C.value=!1})}function j(){let s=Object.assign({},r(f),{password:r(h)});A.post({url:"/sys/third/user/checkPassword",params:s},{isTransformResponse:!1}).then(n=>{n.success?(D(),b(n.result)):e.warning(n.message)})}function D(){v.value=!1,h.value="",w.value=""}function H(){return Z({mobile:r(t),smsmode:"0"})}function R(){r(t)||I("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"),r(y)||I("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");let s={mobile:r(t),captcha:r(y),thirdUserUuid:r(g)};A.post({url:"/sys/thirdLogin/bindingThirdPhone",params:s},{isTransformResponse:!1}).then(n=>{n.success?(F.value=!1,b(n.result)):e.warning(n.message)})}function I(s){o.error({message:"\u767B\u5F55\u5931\u8D25",description:s,duration:4})}return{thirdPasswordShow:v,thirdLoginCheckPassword:j,thirdLoginNoPassword:D,thirdLoginPassword:h,thirdConfirmShow:m,thirdCreateUserLoding:C,thirdLoginUserCreate:O,thirdLoginUserBind:N,bindingPhoneModal:F,thirdHandleOk:R,thirdPhone:t,thirdCaptcha:y,onThirdLogin:$,sendCodeApi:H}}const re=M.Item,de=ee.Password,ce=oe({name:"ThirdModal",components:{FormItem:re,Form:M,InputPassword:de,CountdownInput:ue},setup(){return L({},le())}}),fe={class:"ant-modal-confirm-body-wrapper"},pe={class:"ant-modal-confirm-body"},me=B("span",{class:"ant-modal-confirm-title"},"\u63D0\u793A",-1),he=B("div",{class:"ant-modal-confirm-content"}," \u5DF2\u6709\u540C\u540D\u8D26\u53F7\u5B58\u5728,\u8BF7\u786E\u8BA4\u662F\u5426\u7ED1\u5B9A\u8BE5\u8D26\u53F7\uFF1F ",-1),ge={class:"ant-modal-confirm-btns"},Fe=P("\u521B\u5EFA\u65B0\u8D26\u53F7"),ve=P("\u786E\u8BA4\u7ED1\u5B9A"),Ce=P("\u786E\u5B9A");function Be(e,o,a,U,k,_){const f=c("a-input-password"),p=c("a-modal"),F=c("QuestionCircleFilled"),g=c("a-button"),m=c("Icon"),v=c("a-input"),h=c("FormItem"),w=c("CountdownInput"),C=c("Form");return ne(),te(ae,null,[i(p,{title:"\u8BF7\u8F93\u5165\u5BC6\u7801",visible:e.thirdPasswordShow,"onUpdate:visible":o[1]||(o[1]=t=>e.thirdPasswordShow=t),onOk:e.thirdLoginCheckPassword,onCancel:e.thirdLoginNoPassword},{default:l(()=>[i(f,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",value:e.thirdLoginPassword,"onUpdate:value":o[0]||(o[0]=t=>e.thirdLoginPassword=t),style:{margin:"15px",width:"80%"}},null,8,["value"])]),_:1},8,["visible","onOk","onCancel"]),i(p,{footer:null,closable:!1,visible:e.thirdConfirmShow,"onUpdate:visible":o[2]||(o[2]=t=>e.thirdConfirmShow=t),class:ie("ant-modal-confirm")},{default:l(()=>[B("div",fe,[B("div",pe,[i(F,{style:{color:"#faad14"}}),me,he]),B("div",ge,[i(g,{onClick:e.thirdLoginUserCreate,loading:e.thirdCreateUserLoding},{default:l(()=>[Fe]),_:1},8,["onClick","loading"]),i(g,{onClick:e.thirdLoginUserBind,type:"primary"},{default:l(()=>[ve]),_:1},8,["onClick"])])])]),_:1},8,["visible"]),i(p,{title:"\u7ED1\u5B9A\u624B\u673A\u53F7",visible:e.bindingPhoneModal,"onUpdate:visible":o[5]||(o[5]=t=>e.bindingPhoneModal=t),maskClosable:!1},{footer:l(()=>[i(g,{type:"primary",onClick:e.thirdHandleOk},{default:l(()=>[Ce]),_:1},8,["onClick"])]),default:l(()=>[i(C,{class:"p-4 enter-x",style:{margin:"15px 10px"}},{default:l(()=>[i(h,{class:"enter-x"},{default:l(()=>[i(v,{size:"large",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",value:e.thirdPhone,"onUpdate:value":o[3]||(o[3]=t=>e.thirdPhone=t),class:"fix-auto-fill"},{prefix:l(()=>[i(m,{icon:"ant-design:mobile-outlined",style:S({color:"rgba(0,0,0,.25)"})},null,8,["style"])]),_:1},8,["value"])]),_:1}),i(h,{name:"sms",class:"enter-x"},{default:l(()=>[i(w,{size:"large",class:"fix-auto-fill",value:e.thirdCaptcha,"onUpdate:value":o[4]||(o[4]=t=>e.thirdCaptcha=t),placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",sendCodeApi:e.sendCodeApi},{prefix:l(()=>[i(m,{icon:"ant-design:mail-outlined",style:S({color:"rgba(0,0,0,.25)"})},null,8,["style"])]),_:1},8,["value","sendCodeApi"])]),_:1})]),_:1})]),_:1},8,["visible"])],64)}var Ae=se(ce,[["render",Be]]);export{Ae as default};
