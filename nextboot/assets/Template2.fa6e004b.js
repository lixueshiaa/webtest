import{a1 as w,ea as a,a0 as r,U as c,o as b,k as S,G as p,p as s}from"./index.397c0bf9.js";const m={name:"Template2",data(){return{table1:{loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["10","20","30","100","200"],total:0},lastRow:null,selectedRows:[],dataSource:[],columns:[{key:"num",title:"\u5E8F\u53F7",width:"80px"},{key:"ship_name",title:"\u8239\u540D",width:"180px",type:a.input},{key:"call",title:"\u547C\u53EB",width:"80px",type:a.input},{key:"len",title:"\u957F",width:"80px",type:a.input},{key:"ton",title:"\u5428",width:"120px",type:a.input},{key:"payer",title:"\u4ED8\u6B3E\u65B9",width:"120px",type:a.input},{key:"count",title:"\u6570",width:"40px"},{key:"company",title:"\u516C\u53F8",minWidth:"180px",type:a.input},{key:"trend",title:"\u52A8\u5411",width:"120px",type:a.input}]},table2:{loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["100","200"],total:0},selectedRows:[],dataSource:[],columns:[{key:"dd_num",title:"\u8C03\u5EA6\u5E8F\u53F7",width:"120px"},{key:"tug",title:"\u62D6\u8F6E",width:"180px",type:a.input},{key:"work_start_time",title:"\u4F5C\u4E1A\u5F00\u59CB\u65F6\u95F4",width:"180px",type:a.input},{key:"work_stop_time",title:"\u4F5C\u4E1A\u7ED3\u675F\u65F6\u95F4",width:"180px",type:a.input},{key:"type",title:"\u8239\u8236\u5206\u7C7B",width:"120px",type:a.input},{key:"port_area",title:"\u6240\u5C5E\u6E2F\u533A",width:"120px",type:a.input}]},url:{getData:"/mock/vxe/getData"}}},watch:{["table1.lastRow"](){this.loadTable2Data()}},created(){this.loadTable1Data()},methods:{loadTable1Data(){let e={pageNo:this.table1.pagination.current,pageSize:this.table1.pagination.pageSize};this.table1.loading=!0,r.get({url:this.url.getData,params:e}).then(l=>{this.table1.pagination.total=l.total,this.table1.dataSource=l.records,this.table1.selectedRows=[]}).finally(()=>{this.table1.loading=!1})},loadTable2Data(){let e=this.table1.selectedRows;if(!e||e.length===0){this.table2.pagination.total=0,this.table2.dataSource=[],this.table2.selectedRows=[];return}else this.table1.lastRow==null&&(this.table1.lastRow=e[e.length-1]);let l={parentId:this.table1.lastRow.id,pageNo:this.table2.pagination.current,pageSize:this.table2.pagination.pageSize};this.table2.loading=!0,r.get({url:this.url.getData,params:l}).then(n=>{this.table2.pagination.total=n.total,this.table2.dataSource=n.records,this.table2.selectedRows=[]}).finally(()=>{this.table2.loading=!1})},handleTable1SelectRowChange(e){this.handleTableSelectRowChange(this.table1,e)},handleTable2SelectRowChange(e){this.table2.selectedRows=e.selectedRows},handleTable1PageChange(e){this.table1.pagination.current=e.current,this.table1.pagination.pageSize=e.pageSize,this.loadTable1Data()},handleTable2PageChange(e){this.table2.pagination.current=e.current,this.table2.pagination.pageSize=e.pageSize,this.loadTable2Data()},handleTableSelectRowChange(e,l){let{row:n,action:h,selectedRows:t,$table:o}=l,i=t[t.length-1];h==="selected"?e.lastRow=n:h==="selected-all"?t.length===0?e.lastRow=null:e.lastRow||(e.lastRow=i):h==="unselected"&&n===e.lastRow&&(e.lastRow=i),o.setCurrentRow(e.lastRow),e.selectedRows=t}}};function R(e,l,n,h,t,o){const i=c("JVxeTable"),g=c("a-col"),d=c("a-row"),u=c("a-card");return b(),S(u,{bordered:!1},{default:p(()=>[s(d,{gutter:8},{default:p(()=>[s(g,{span:12},{default:p(()=>[s(i,{toolbar:"",rowNumber:"",rowSelection:"",clickSelectRow:"",highlightCurrentRow:"",radioConfig:{highlight:!1},checkboxConfig:{highlight:!1},height:790,loading:t.table1.loading,columns:t.table1.columns,dataSource:t.table1.dataSource,pagination:t.table1.pagination,onPageChange:o.handleTable1PageChange,onSelectRowChange:o.handleTable1SelectRowChange},null,8,["loading","columns","dataSource","pagination","onPageChange","onSelectRowChange"])]),_:1}),s(g,{span:12},{default:p(()=>[s(i,{rowNumber:"",height:375,columns:t.table1.columns,dataSource:t.table1.selectedRows,style:{margin:"52px 0 8px"}},null,8,["columns","dataSource"]),s(i,{toolbar:"",rowNumber:"",rowSelection:"",clickSelectRow:"",height:355,loading:t.table2.loading,columns:t.table2.columns,dataSource:t.table2.dataSource,pagination:t.table2.pagination,onPageChange:o.handleTable2PageChange,onSelectRowChange:o.handleTable2SelectRowChange},null,8,["loading","columns","dataSource","pagination","onPageChange","onSelectRowChange"])]),_:1})]),_:1})]),_:1})}var f=w(m,[["render",R]]);export{f as default};
