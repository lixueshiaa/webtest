import{a as g,z as u,ea as e,a0 as F,U as d,o as B,k as E,G as D,n as h,p as m,T as b}from"./index.d537950e.js";const x={style:{"margin-bottom":"8px"}},S=h("span",null,"\u542F\u7528\u6570\u636E\u53D8\u52A8\u7279\u6548\uFF1A",-1),T=g({__name:"SocketReload",setup(C){const{createMessage:r}=b(),p=u(),s=u(!0),i=u(!1),f=u([]),k=u([{key:"num",title:"\u5E8F\u53F7",width:80},{key:"ship_name",title:"\u8239\u540D",width:180,type:e.input},{key:"call",title:"\u547C\u53EB",width:80,type:e.input},{key:"len",title:"\u957F",width:80,type:e.input},{key:"ton",title:"\u5428",width:120,type:e.input},{key:"payer",title:"\u4ED8\u6B3E\u65B9",width:120,type:e.input},{key:"count",title:"\u6570",width:40},{key:"company",title:"\u516C\u53F8",minWidth:180,type:e.input},{key:"trend",title:"\u52A8\u5411",width:120,type:e.input}]);_();function _(){i.value=!0,F.get({url:"/mock/vxe/getData",params:{pageNo:1,pageSize:200}}).then(l=>{f.value=l.records}).finally(()=>{i.value=!1})}function w(l){let{$table:t,row:a,column:o}=l,n=o.property;t.isUpdateByRow(a,n)&&t.validate(a).then(c=>{if(!c){let v=r.loading(`\u6B63\u5728\u4FDD\u5B58"${o.title}"`,0);setTimeout(()=>{var y;v(),r.success(`"${o.title}"\u4FDD\u5B58\u6210\u529F\uFF01`),t.reloadRow(a,null,n),(y=p.value)==null||y.socketSendUpdateRow(a)},555)}})}return(l,t)=>{const a=d("a-switch"),o=d("JVxeTable"),n=d("a-card");return B(),E(n,{title:"\u65E0\u75D5\u5237\u65B0\u793A\u4F8B",bordered:!1},{default:D(()=>[h("div",x,[S,m(a,{checked:s.value,"onUpdate:checked":t[0]||(t[0]=c=>s.value=c)},null,8,["checked"])]),m(o,{ref_key:"tableRef",ref:p,rowNumber:"",rowSelection:"",keepSource:"",socketReload:"",socketKey:"demo-socket-reload",reloadEffect:s.value,height:340,loading:i.value,columns:k.value,dataSource:f.value,onEditClosed:w},null,8,["reloadEffect","loading","columns","dataSource"])]),_:1})}}});export{T as default};
