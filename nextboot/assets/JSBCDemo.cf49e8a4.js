var v=(y,s,c)=>new Promise((o,l)=>{var p=a=>{try{d(c.next(a))}catch(r){l(r)}},m=a=>{try{d(c.throw(a))}catch(r){l(r)}},d=a=>a.done?o(a.value):Promise.resolve(a.value).then(p,m);d((c=c.apply(y,s)).next())});import{a as E,B as w,z as F,ea as n,a0 as h,U as D,o as b,k as R,G as x,p as T,T as z}from"./index.397c0bf9.js";const N=E({__name:"JSBCDemo",setup(y){const{createMessage:s}=z(),c=w({btn:["add","save","remove","clearSelection"]}),o=F(!1),l=w({current:1,pageSize:200,pageSizeOptions:["10","20","30","100","200"],total:0}),p=F([]),m=F([]),d=F([{key:"num",title:"\u5E8F\u53F7",width:80,type:n.normal},{key:"ship_name",title:"\u8239\u540D",width:180,type:n.input},{key:"call",title:"\u547C\u53EB",width:80,type:n.input},{key:"len",title:"\u957F",width:80,type:n.input},{key:"ton",title:"\u5428",width:120,defaultValue:233,type:n.input},{key:"payer",title:"\u4ED8\u6B3E\u65B9",width:120,defaultValue:"\u5F20\u4E09",type:n.input},{key:"count",title:"\u6570",width:40,type:n.normal},{key:"company",title:"\u516C\u53F8",minWidth:180,type:n.input},{key:"trend",title:"\u52A8\u5411",width:120,type:n.input}]);a();function a(){return v(this,null,function*(){o.value=!0,yield h.get({url:"/mock/vxe/getData",params:{pageNo:l.current,pageSize:l.pageSize}}).then(e=>{l.total=e.total,m.value=e.records,p.value=[]}).finally(()=>{o.value=!1})})}function r({$table:e,target:u}){e.validate().then(t=>{if(!t){let i=u.getTableData();console.log("\u5F53\u524D\u4FDD\u5B58\u7684\u6570\u636E\u662F\uFF1A",i);let g=u.getNewData();console.log("-- \u65B0\u589E\u7684\u6570\u636E\uFF1A",g);let f=u.getDeleteData();console.log("-- \u5220\u9664\u7684\u6570\u636E\uFF1A",f),o.value=!0,h.post({url:"/mock/vxe/immediateSaveAll",params:i}).then(()=>{s.success("\u4FDD\u5B58\u6210\u529F\uFF01")}).finally(()=>{o.value=!1})}})}function S(e){console.log("\u5F85\u5220\u9664\u7684\u6570\u636E: ",e.deleteRows);let u=e.deleteRows.map(t=>t.id);console.log("\u5F85\u5220\u9664\u7684\u6570\u636Eids: ",u),o.value=!0,window.setTimeout(()=>{o.value=!1,s.success("\u5220\u9664\u6210\u529F"),e.confirmRemove()},1e3)}function B(e){let{$table:u,row:t,column:i}=e,g=i.property;u.isUpdateByRow(t,g)&&u.validate(t).then(f=>{if(!f){let C=s.loading(`\u6B63\u5728\u4FDD\u5B58"${i.title}"`,0);console.log("\u5373\u65F6\u4FDD\u5B58\u6570\u636E\uFF1A",t),h.put({url:"/mock/vxe/immediateSaveRow",params:t}).then(A=>{s.success(`"${i.title}"\u4FDD\u5B58\u6210\u529F\uFF01`),u.reloadRow(t,null,g)}).finally(()=>{C()})}})}function k(e){l.current=e.current,l.pageSize=e.pageSize,a()}function _(e){p.value=e.selectedRows}return(e,u)=>{const t=D("JVxeTable"),i=D("a-card");return b(),R(i,{title:"\u5373\u65F6\u4FDD\u5B58\u793A\u4F8B",bordered:!1},{default:x(()=>[T(t,{toolbar:"",toolbarConfig:c,rowNumber:"",rowSelection:"",keepSource:"",asyncRemove:"",height:340,loading:o.value,columns:d.value,dataSource:m.value,pagination:l,onSave:r,onRemove:S,onEditClosed:B,onPageChange:k,onSelectRowChange:_},null,8,["toolbarConfig","loading","columns","dataSource","pagination"])]),_:1})}}});export{N as default};
