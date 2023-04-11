import{a as T,z as m,ea as s,B as _,a0 as g,U as i,o as f,k as v,G as a,p as e,l as b,T as z}from"./index.d537950e.js";const V=T({__name:"PopupSubTable",setup(I){const{createMessage:h}=z(),c=m(!1),F=m([]),k=m([{key:"num",title:"\u5E8F\u53F7",width:"80px"},{key:"ship_name",title:"\u8239\u540D",width:"180px",type:s.input},{key:"call",title:"\u547C\u53EB",width:"80px"},{key:"len",title:"\u957F",width:"80px"},{key:"ton",title:"\u5428",width:"120px"},{key:"payer",title:"\u4ED8\u6B3E\u65B9",width:"120px"},{key:"count",title:"\u6570",width:"40px"},{key:"company",title:"\u516C\u53F8",minWidth:"180px",showDetails:!0},{key:"trend",title:"\u52A8\u5411",width:"120px"}]),x=m([]),p=_({currentRowId:null,loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["100","200"],total:0},selectedRows:[],dataSource:[],columns:[{key:"dd_num",title:"\u8C03\u5EA6\u5E8F\u53F7",width:"120px"},{key:"tug",title:"\u62D6\u8F6E",width:"180px",type:s.input},{key:"work_start_time",title:"\u4F5C\u4E1A\u5F00\u59CB\u65F6\u95F4",width:"180px",type:s.input},{key:"work_stop_time",title:"\u4F5C\u4E1A\u7ED3\u675F\u65F6\u95F4",width:"180px",type:s.input},{key:"type",title:"\u8239\u8236\u5206\u7C7B",width:"120px",type:s.input},{key:"port_area",title:"\u6240\u5C5E\u6E2F\u533A",minWidth:"120px",type:s.input}]}),C=_({span:4}),U=_({span:20}),D=_({num:[{required:!0,message:"\u5FC5\u987B\u8F93\u5165\u5E8F\u53F7"}]});E();function E(){c.value=!0,g.get({url:"/mock/vxe/getData",params:{pageNo:1,pageSize:30}}).then(o=>{F.value=o.records,x.value=[]}).finally(()=>{c.value=!1})}function S(o){return o?(p.currentRowId===o.id||(p.currentRowId=o.id,p.loading=!0,g.get({url:"/mock/vxe/getData",params:{pageNo:1,pageSize:30,parentId:o.id}}).then(r=>{p.dataSource=r.records}).finally(()=>{p.loading=!1})),!0):!1}function B({row:o,$table:r,callback:l}){console.log("\u4FDD\u5B58\u7684\u6570\u636E\uFF1A",o),r.validate(o).then(n=>{n?(l(!1),h.warn("\u6821\u9A8C\u5931\u8D25")):(l(!0),c.value=!0,setTimeout(()=>{c.value=!1,h.success("\u4FDD\u5B58\u6210\u529F")},1e3))})}return(o,r)=>{const l=i("a-input"),n=i("a-form-item"),d=i("a-col"),w=i("a-row"),A=i("a-form"),y=i("JVxeTable"),R=i("a-card");return f(),v(R,{title:"\u5F39\u51FA\u5B50\u8868\u793A\u4F8B",bordered:!1},{default:a(()=>[e(y,{toolbar:"",rowNumber:"",rowSelection:"",highlightCurrentRow:"",clickRowShowSubForm:"",clickRowShowMainForm:"",height:750,loading:c.value,columns:k.value,dataSource:F.value,onDetailsConfirm:B},{mainForm:a(({row:u})=>[u?(f(),v(A,{key:0,ref:"form2",model:u,rules:D,"label-col":C,"wrapper-col":U},{default:a(()=>[e(w,{gutter:8},{default:a(()=>[e(d,{span:8},{default:a(()=>[e(n,{label:"ID",name:"id"},{default:a(()=>[e(l,{value:u.id,"onUpdate:value":t=>u.id=t,disabled:""},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:a(()=>[e(n,{label:"\u5E8F\u53F7",name:"num"},{default:a(()=>[e(l,{value:u.num,"onUpdate:value":t=>u.num=t},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:a(()=>[e(n,{label:"\u8239\u540D",name:"ship_name"},{default:a(()=>[e(l,{value:u.ship_name,"onUpdate:value":t=>u.ship_name=t},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:a(()=>[e(n,{label:"\u547C\u53EB",name:"call"},{default:a(()=>[e(l,{value:u.call,"onUpdate:value":t=>u.call=t},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:a(()=>[e(n,{label:"\u957F",name:"len"},{default:a(()=>[e(l,{value:u.len,"onUpdate:value":t=>u.len=t},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:a(()=>[e(n,{label:"\u5428",name:"ton"},{default:a(()=>[e(l,{value:u.ton,"onUpdate:value":t=>u.ton=t},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:a(()=>[e(n,{label:"\u4ED8\u6B3E\u65B9",name:"payer"},{default:a(()=>[e(l,{value:u.payer,"onUpdate:value":t=>u.payer=t},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:a(()=>[e(n,{label:"\u6570",name:"count"},{default:a(()=>[e(l,{value:u.count,"onUpdate:value":t=>u.count=t},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:a(()=>[e(n,{label:"\u516C\u53F8",name:"company"},{default:a(()=>[e(l,{value:u.company,"onUpdate:value":t=>u.company=t},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:a(()=>[e(n,{label:"\u52A8\u5411",name:"trend"},{default:a(()=>[e(l,{value:u.trend,"onUpdate:value":t=>u.trend=t},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["model","rules","label-col","wrapper-col"])):b("",!0)]),subForm:a(({row:u})=>[S(u)?(f(),v(y,{key:0,ref:"subFormTable",height:"auto","max-height":350,loading:p.loading,columns:p.columns,dataSource:p.dataSource},null,8,["loading","columns","dataSource"])):b("",!0)]),_:1},8,["loading","columns","dataSource"])]),_:1})}}});export{V as default};
