function r(){return[{title:"ID",dataIndex:"id",fixed:"left",width:200},{title:"\u59D3\u540D",dataIndex:"name",width:150,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:150,sorter:!0,defaultHidden:!0},{title:"\u5F00\u59CB\u65F6\u95F4",width:150,sorter:!0,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",width:150,sorter:!0,dataIndex:"endTime"}]}function i(){return[{title:"ID",width:150,dataIndex:"id",sorter:!0,sortOrder:"ascend"},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:80}]}function l(){return[{title:"ID",dataIndex:"id",width:200},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u5730\u5740",dataIndex:"address",sorter:!0,children:[{title:"\u7F16\u53F7",dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime",width:120},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:120}]}]}function o(){return[{title:"ID",dataIndex:"id",width:200},{dataIndex:"name",width:120,slots:{title:"customTitle"}},{dataIndex:"address",width:120,slots:{title:"customAddress"},sorter:!0},{title:"\u7F16\u53F7",dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime",width:120},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:120}]}const n=({text:a,index:t})=>{const e={children:a,attrs:{}};return t===9&&(e.attrs.colSpan=0),e};function s(){return[{title:"ID",dataIndex:"id",width:300,customRender:n},{title:"\u59D3\u540D",dataIndex:"name",width:300,customRender:n},{title:"\u5730\u5740",dataIndex:"address",colSpan:2,width:120,sorter:!0,customRender:({text:a,index:t})=>{const e={children:a,attrs:{}};return t===2&&(e.attrs.rowSpan=2),t===3&&(e.attrs.colSpan=0),e}},{title:"\u7F16\u53F7",dataIndex:"no",colSpan:0,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}],customRender:n},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime",width:200,customRender:n},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200,customRender:n}]}const d=(a=6)=>{const t=[];for(let e=0;e<a;e++)t.push({field:`field${e}`,label:`\u5B57\u6BB5${e}`,component:"Input",colProps:{xl:12,xxl:8}});return t};function c(){return{labelWidth:100,schemas:[...d(5),{field:"field11",label:"Slot\u793A\u4F8B",component:"Select",slot:"custom",colProps:{xl:12,xxl:8}}]}}function u(){return(()=>{const t=[];for(let e=0;e<40;e++)t.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return t})()}function m(){return(()=>{const t=[];for(let e=0;e<40;e++)t.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString(),children:[{id:`l2-${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()},{id:`l3-${e}`,name:"John Mary",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()}]});return t})()}export{d as getAdvanceSchema,r as getBasicColumns,u as getBasicData,i as getBasicShortColumns,o as getCustomHeaderColumns,c as getFormConfig,s as getMergeHeaderColumns,l as getMultipleHeaderColumns,m as getTreeTableData};
