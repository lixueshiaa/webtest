import{a as b,z as r,B as c,ea as e,U as B,o as f,i as _,p as t,G as a,n as u,J as o,T as p}from"./index.d537950e.js";const h=u("ol",{style:{border:"1px solid #cccccc",width:"600px",padding:"8px"}},[u("li",null,"1. \u5F00\u542F dragSort \u5C5E\u6027\u4E4B\u540E\u5373\u53EF\u5B9E\u73B0\u4E0A\u4E0B\u62D6\u62FD\u6392\u5E8F\u3002"),u("li",null,"2. \u4F7F\u7528 sortKey \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6392\u5E8F\u4FDD\u5B58\u7684 key\uFF0C\u9ED8\u8BA4\u4E3A orderNum\u3002"),u("li",null,"3. \u4F7F\u7528 sortBegin \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6392\u5E8F\u7684\u8D77\u59CB\u503C\uFF0C\u9ED8\u8BA4\u4E3A 0\u3002"),u("li",null,"4. sortKey \u5B9A\u4E49\u7684\u5B57\u6BB5\u4E0D\u9700\u8981\u5B9A\u4E49\u5728 columns \u4E2D\u4E5F\u80FD\u6B63\u5E38\u83B7\u53D6\u5230\u503C\u3002"),u("li",null,"5. \u5F53\u5B58\u5728 fixed \u5217\u65F6\uFF0C\u62D6\u62FD\u6392\u5E8F\u5C06\u4F1A\u5931\u6548\uFF0C\u4EC5\u80FD\u4E0A\u4E0B\u6392\u5E8F\u3002")],-1),C=u("p",null,[o(" \u4EE5\u4E0B\u793A\u4F8B\u5F00\u542F\u4E86\u62D6\u62FD\u6392\u5E8F\uFF0C\u6392\u5E8F\u503C\u4FDD\u5B58\u5B57\u6BB5\u4E3A sortNum\uFF0C\u6392\u5E8F\u8D77\u59CB\u503C\u4E3A 3"),u("br")],-1),g=o("\u83B7\u53D6\u6570\u636E"),y=u("br",null,null,-1),A=u("p",null,"\u4EE5\u4E0B fixed \u8868\u683C\u4E0D\u652F\u6301\u62D6\u62FD\u6392\u5E8F\uFF0C\u4EC5\u652F\u6301\u70B9\u51FB\u4E0A\u4E0B\u6392\u5E8F",-1),x=o("\u83B7\u53D6\u6570\u636E"),L=b({__name:"JVxeDemo3",setup(k){const n=r(),l=r(),i=c({columns:[{title:"ID",key:"id",width:120,type:e.normal},{title:"\u59D3\u540D",key:"name",width:240,type:e.input,defaultValue:"new name"},{title:"\u5B57\u6BB5\u957F\u5EA6",key:"dbLength",width:240,type:e.inputNumber,defaultValue:32},{title:"sortNum",key:"sortNum",width:120,type:e.normal}],data:[{id:"uuid-0001",name:"\u5F20\u4E09",dbLength:123},{id:"uuid-0002",name:"\u674E\u56DB",dbLength:777},{id:"uuid-0003",name:"\u738B\u4E94",dbLength:666},{id:"uuid-0004",name:"\u8D75\u516D",dbLength:233}]}),d=c({columns:[{title:"ID",key:"id",width:320,fixed:"left",type:e.normal},{title:"\u59D3\u540D",key:"name",width:720,type:e.input,defaultValue:"new name"},{title:"\u5B57\u6BB5\u957F\u5EA6",key:"dbLength",width:720,type:e.inputNumber,defaultValue:32}],data:[{id:"uuid-0001",name:"\u5F20\u4E09",dbLength:123},{id:"uuid-0002",name:"\u674E\u56DB",dbLength:777},{id:"uuid-0003",name:"\u738B\u4E94",dbLength:666},{id:"uuid-0004",name:"\u8D75\u516D",dbLength:233}]}),{createMessage:s}=p();function m(){s.info("\u8BF7\u770B\u63A7\u5236\u53F0"),console.log(n.value.getTableData())}function D(){s.info("\u8BF7\u770B\u63A7\u5236\u53F0"),console.log(l.value.getTableData())}return(w,S)=>{const E=B("a-button"),F=B("JVxeTable");return f(),_("div",null,[h,C,t(F,{ref_key:"tableRef1",ref:n,toolbar:"",dragSort:"",sortKey:"sortNum",sortBegin:3,rowSelection:"",maxHeight:580,columns:i.columns,dataSource:i.data},{toolbarSuffix:a(()=>[t(E,{onClick:m},{default:a(()=>[g]),_:1})]),_:1},8,["columns","dataSource"]),y,A,t(F,{ref_key:"tableRef2",ref:l,toolbar:"",dragSort:"",rowSelection:"",maxHeight:580,columns:d.columns,dataSource:d.data},{toolbarSuffix:a(()=>[t(E,{onClick:D},{default:a(()=>[x]),_:1})]),_:1},8,["columns","dataSource"])])}}});export{L as default};
