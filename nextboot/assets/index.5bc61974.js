var rt=Object.defineProperty,ut=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var ce=(r,o,u)=>o in r?rt(r,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[o]=u,k=(r,o)=>{for(var u in o||(o={}))ot.call(o,u)&&ce(r,u,o[u]);if(de)for(var u of de(o))nt.call(o,u)&&ce(r,u,o[u]);return r},pe=(r,o)=>ut(r,lt(o));var S=(r,o,u)=>new Promise((h,f)=>{var w=F=>{try{y(u.next(F))}catch(T){f(T)}},b=F=>{try{y(u.throw(F))}catch(T){f(T)}},y=F=>F.done?h(F.value):Promise.resolve(F.value).then(w,b);y((u=u.apply(r,o)).next())});import{by as C,a0 as B,bR as ve,z as m,aZ as me,eX as at,T as we,ea as n,dL as it,dJ as st,a as dt,B as he,j as s,bj as fe,bg as ct,an as $,f as x,X as pt,U as q,o as mt,i as ht,p as d,G as p,n as v,D as ft,E as Ft,bJ as Fe,ad as bt,N as yt,J as I,bO as O}from"./index.0c676cb0.js";import{B as gt}from"./index.7aa87f83.js";import St from"./index.58ade2fb.js";import Bt from"./index.ad905789.js";import{B as be}from"./BasicForm.7ed18e1d.js";import{N as xt}from"./componentMap.801737ea.js";import{u as ye}from"./useForm.f6b94960.js";import"./RadioButtonGroup.dc9fedf3.js";import"./JDictSelectTag.b196d7c6.js";import"./JUpload.2c84d159.js";import{i as Q,t as z,f as Ct,a as Dt,b as vt,c as wt,d as Tt,q as At}from"./online.options.5c703e4b.js";import{S as ge}from"./BasicTable.ebe28ef2.js";const gr=[{title:"\u8868\u7C7B\u578B",dataIndex:"tableType",width:140,sorter:!0,customRender({text:r}){const o=z.find(u=>u.value===r);return o?o.label:""}},{title:"\u8868\u540D",dataIndex:"tableName",width:240,sorter:!0},{title:"\u57FA\u7C7B\u540D",dataIndex:"baseClz",width:240,sorter:!0},{title:"\u662F\u5426\u5143\u8868",dataIndex:"isMetaTable",width:240,sorter:!1,customRender({text:r}){const o=Q.find(u=>u.value===r);return o?o.label:""}},{title:"\u8868\u63CF\u8FF0",dataIndex:"tableTxt",width:220,sorter:!0},{title:"\u7248\u672C",dataIndex:"tableVersion",width:120,sorter:!1},{title:"\u540C\u6B65\u72B6\u6001",dataIndex:"isDbSynch",width:120,sorter:!1,customRender:({text:r,record:o})=>{let u="",h={};const f=wt.find(w=>w.value===r);return o.isMetaTable==="N"?"--":(f&&(u=f.label,h={color:f.color}),C("span",{style:h},u))}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:240,sorter:!0}],Sr=[{label:"\u8868\u540D",field:"tableName",component:"JInput"},{label:"\u57FA\u7C7B\u540D",field:"baseClz",component:"JInput",colProps:{span:6}},{label:"\u662F\u5426\u5143\u8868",field:"isMetaTable",component:"Select",componentProps:{mode:"multiple",options:Q}},{label:"\u8868\u7C7B\u578B",field:"tableType_MultiString",component:"Select",componentProps:{mode:"multiple",options:z}},{label:"\u8868\u63CF\u8FF0",field:"tableTxt",component:"JInput"}],Et=[{label:"",field:"id",component:"Input",show:!1,colProps:{span:6}},{label:"\u8868\u540D",field:"tableName",component:"Input",required:!0,colProps:{span:6}},{label:"\u662F\u5426\u5143\u8868",field:"isMetaTable",component:"Select",defaultValue:"Y",componentProps:{options:Q},colProps:{span:6}},{label:"\u6269\u5C55\u540D",field:"baseClz",component:"Input",helpMessage:"\u751F\u6210\u7684\u7C7B\u540D = \u8868\u540D+\u6269\u5C55\u7C7B\u540D",required:!0,colProps:{span:6},ifShow:({values:r})=>r.isMetaTable==="N"},{label:"\u8868\u63CF\u8FF0",field:"tableTxt",component:"Input",required:!0,colProps:{span:6}},{label:"\u8868\u7C7B\u578B",field:"tableType",component:"Select",defaultValue:1,componentProps:{options:z},colProps:{span:6}},{label:"\u8868\u5355\u5206\u7C7B",field:"formCategory",component:"Select",defaultValue:"temp",componentProps:{options:Ct},required:!0,colProps:{span:6}},{label:"\u6D41\u7A0B\u65E5\u5FD7\u8868\u540D",field:"flowLogTbName",component:"Input",defaultValue:"",colProps:{span:6},ifShow:({values:r})=>r.formCategory==="bpm"},{label:"\u4E3B\u952E\u7B56\u7565",field:"idType",component:"Select",defaultValue:"UUID",componentProps:{options:Dt},colProps:{span:6}},{label:"\u4E3B\u9898\u6A21\u677F",field:"themeTemplate",component:"Select",defaultValue:"normal",componentProps:{options:vt},colProps:{span:6}},{label:"\u524D\u7AEFapi\u524D\u7F00",field:"fontApiPrefix",component:"Input",colProps:{span:6},componentProps:{disabled:!1}}],Se=[{dbFieldName:"id",dbFieldTxt:"\u4E3B\u952E",dbFieldNameOld:null,dbIsKey:1,dbIsNull:0,dbType:"string",dbLength:36,dbPointLength:0,dbDefaultVal:"",dictField:"",dictTable:"",dictText:"",fieldShowType:"text",fieldHref:"",fieldLength:120,fieldValidType:"",fieldMustInput:"0",fieldExtendJson:"",fieldDefaultValue:"",isQuery:0,isShowForm:0,isShowList:0,isReadOnly:1,queryMode:"single",mainTable:"",mainField:"",orderNum:0,converter:"",queryConfigFlag:"0",queryDefVal:"",queryDictText:"",queryDictField:"",queryDictTable:"",queryShowType:"text",queryValidType:null,queryMustInput:null,sortFlag:"0",alias:null,isDbField:1,dbComment:"",associaField:"",spanVal:24,searchSpanVal:8,useSearchForm:"Y",isFixedSearchLabelWidth:"N",searchAutoAdvancedCol:3,searchActionColSpanVal:4,searchActionColIndexesModel:"N",searchActionColIndexValue:0,isFixedFormLabelWidth:"N",isCheckbox:"Y",searchSortNumber:"",formSortNumber:"",listSortNumber:"",groupTitle:""},{dbFieldName:"create_by",dbFieldTxt:"\u521B\u5EFA\u4EBA",dbFieldNameOld:null,dbIsKey:0,dbIsNull:1,dbType:"string",dbLength:50,dbPointLength:0,dbDefaultVal:"",dictField:"",dictTable:"",dictText:"",fieldShowType:"text",fieldHref:"",fieldLength:120,fieldValidType:"",fieldMustInput:"0",fieldExtendJson:"",fieldDefaultValue:"",isQuery:0,isShowForm:0,isShowList:0,isReadOnly:0,queryMode:"single",mainTable:"",mainField:"",orderNum:1,converter:"",queryConfigFlag:"0",queryDefVal:"",queryDictText:"",queryDictField:"",queryDictTable:"",queryShowType:"text",queryValidType:null,queryMustInput:null,sortFlag:"0",alias:null,isDbField:1,dbComment:"",associaField:"",spanVal:24,searchSpanVal:8,useSearchForm:"Y",isFixedSearchLabelWidth:"N",searchAutoAdvancedCol:3,searchActionColSpanVal:4,searchActionColIndexesModel:"N",searchActionColIndexValue:0,isFixedFormLabelWidth:"N",isCheckbox:"Y",searchSortNumber:"",formSortNumber:"",listSortNumber:"",groupTitle:""},{dbFieldName:"create_time",dbFieldTxt:"\u521B\u5EFA\u65E5\u671F",dbFieldNameOld:null,dbIsKey:0,dbIsNull:1,dbType:"Datetime",dbLength:0,dbPointLength:0,dbDefaultVal:"",dictField:"",dictTable:"",dictText:"",fieldShowType:"datetime",fieldHref:"",fieldLength:120,fieldValidType:"",fieldMustInput:"0",fieldExtendJson:"",fieldDefaultValue:"",isQuery:0,isShowForm:0,isShowList:0,isReadOnly:0,queryMode:"single",mainTable:"",mainField:"",orderNum:2,converter:"",queryConfigFlag:"0",queryDefVal:"",queryDictText:"",queryDictField:"",queryDictTable:"",queryShowType:"text",queryValidType:null,queryMustInput:null,sortFlag:"0",alias:null,isDbField:1,dbComment:"",associaField:"",spanVal:24,searchSpanVal:8,useSearchForm:"Y",isFixedSearchLabelWidth:"N",searchAutoAdvancedCol:3,searchActionColSpanVal:4,searchActionColIndexesModel:"N",searchActionColIndexValue:0,isFixedFormLabelWidth:"N",isCheckbox:"Y",searchSortNumber:"",formSortNumber:"",listSortNumber:"",groupTitle:""},{dbFieldName:"update_by",dbFieldTxt:"\u66F4\u65B0\u4EBA",dbFieldNameOld:null,dbIsKey:0,dbIsNull:1,dbType:"string",dbLength:50,dbPointLength:0,dbDefaultVal:"",dictField:"",dictTable:"",dictText:"",fieldShowType:"text",fieldHref:"",fieldLength:120,fieldValidType:"",fieldMustInput:"0",fieldExtendJson:"",fieldDefaultValue:"",isQuery:0,isShowForm:0,isShowList:0,isReadOnly:0,queryMode:"single",mainTable:"",mainField:"",orderNum:3,converter:"",queryConfigFlag:"0",queryDefVal:"",queryDictText:"",queryDictField:"",queryDictTable:"",queryShowType:"text",queryValidType:null,queryMustInput:null,sortFlag:"0",alias:null,isDbField:1,dbComment:"",associaField:"",spanVal:24,searchSpanVal:8,useSearchForm:"Y",isFixedSearchLabelWidth:"N",searchAutoAdvancedCol:3,searchActionColSpanVal:4,searchActionColIndexesModel:"N",searchActionColIndexValue:0,isFixedFormLabelWidth:"N",isCheckbox:"Y",searchSortNumber:"",formSortNumber:"",listSortNumber:"",groupTitle:""},{dbFieldName:"update_time",dbFieldTxt:"\u66F4\u65B0\u65E5\u671F",dbFieldNameOld:null,dbIsKey:0,dbIsNull:1,dbType:"Datetime",dbLength:0,dbPointLength:0,dbDefaultVal:"",dictField:"",dictTable:"",dictText:"",fieldShowType:"datetime",fieldHref:"",fieldLength:120,fieldValidType:"",fieldMustInput:"0",fieldExtendJson:"",fieldDefaultValue:"",isQuery:0,isShowForm:0,isShowList:0,isReadOnly:0,queryMode:"single",mainTable:"",mainField:"",orderNum:4,converter:"",queryConfigFlag:"0",queryDefVal:"",queryDictText:"",queryDictField:"",queryDictTable:"",queryShowType:"text",queryValidType:null,queryMustInput:null,sortFlag:"0",alias:null,isDbField:1,dbComment:"",associaField:"",spanVal:24,searchSpanVal:8,useSearchForm:"Y",isFixedSearchLabelWidth:"N",searchAutoAdvancedCol:3,searchActionColSpanVal:4,searchActionColIndexesModel:"N",searchActionColIndexValue:0,isFixedFormLabelWidth:"N",isCheckbox:"Y",searchSortNumber:"",formSortNumber:"",listSortNumber:"",groupTitle:""},{dbFieldName:"sys_org_code",dbFieldTxt:"\u6240\u5C5E\u90E8\u95E8",dbFieldNameOld:null,dbIsKey:0,dbIsNull:1,dbType:"string",dbLength:64,dbPointLength:0,dbDefaultVal:"",dictField:"",dictTable:"",dictText:"",fieldShowType:"text",fieldHref:"",fieldLength:120,fieldValidType:"",fieldMustInput:"0",fieldExtendJson:"",fieldDefaultValue:"",isQuery:0,isShowForm:0,isShowList:0,isReadOnly:0,queryMode:"single",mainTable:"",mainField:"",orderNum:5,converter:"",queryConfigFlag:"0",queryDefVal:"",queryDictText:"",queryDictField:"",queryDictTable:"",queryShowType:"text",queryValidType:null,queryMustInput:null,sortFlag:"0",alias:null,isDbField:1,dbComment:"",associaField:"",spanVal:24,searchSpanVal:8,useSearchForm:"Y",isFixedSearchLabelWidth:"N",searchAutoAdvancedCol:3,searchActionColSpanVal:4,searchActionColIndexesModel:"N",searchActionColIndexValue:0,isFixedFormLabelWidth:"N",isCheckbox:"Y",searchSortNumber:"",formSortNumber:"",listSortNumber:"",groupTitle:""},{dbFieldName:"sys_remark",dbFieldTxt:"\u7CFB\u7EDF\u5907\u6CE8",dbFieldNameOld:null,dbIsKey:0,dbIsNull:1,dbType:"string",dbLength:50,dbPointLength:0,dbDefaultVal:"",dictField:"",dictTable:"",dictText:"",fieldShowType:"text",fieldHref:"",fieldLength:120,fieldValidType:"",fieldMustInput:"0",fieldExtendJson:"",fieldDefaultValue:"",isQuery:0,isShowForm:0,isShowList:0,isReadOnly:0,queryMode:"single",mainTable:"",mainField:"",orderNum:3,converter:"",queryConfigFlag:"0",queryDefVal:"",queryDictText:"",queryDictField:"",queryDictTable:"",queryShowType:"text",queryValidType:null,queryMustInput:null,sortFlag:"0",alias:null,isDbField:1,dbComment:"",associaField:"",spanVal:24,searchSpanVal:8,useSearchForm:"Y",isFixedSearchLabelWidth:"N",searchAutoAdvancedCol:3,searchActionColSpanVal:4,searchActionColIndexesModel:"N",searchActionColIndexValue:0,isFixedFormLabelWidth:"N",isCheckbox:"Y",searchSortNumber:"",formSortNumber:"",listSortNumber:"",groupTitle:""}],kt=we(),Br=r=>B.get({url:"/onlForm/onlFormHead/list",params:Object.assign({copyType:0},r)}),Rt=r=>B.get({url:"/onlForm/onlFormField/listByHeadId",params:r}),Nt=r=>B.get({url:"/onlForm/onlFormIndex/listByHeadId",params:r}),_t=(r,o)=>B.get({url:`/onlForm/api/getAll/${r}`,params:o}),xr=(r,o)=>B.delete({url:"/onlForm/onlFormHead/deleteBatch",data:r},{joinParamsToUrl:!0}).then(()=>{o()}),Mt=(r,o,u)=>o?B.put({url:"/onlForm/api/editAll",params:r},u):B.post({url:"/onlForm/api/addAll",params:r},u),qt=(r,o)=>{const u=m("normal");ve.warning({title:"\u540C\u6B65\u6570\u636E\u5E93",centered:!0,closable:!0,content:()=>C(at,{value:u,onChange({target:h}){u.value=h.value}},[C(me,{value:"normal"},"\u666E\u901A\u540C\u6B65\uFF08\u4FDD\u7559\u8868\u6570\u636E\uFF09"),C(me,{value:"force"},"\u5F3A\u5236\u540C\u6B65\uFF08\u5220\u9664\u8868\uFF0C\u91CD\u65B0\u751F\u6210\uFF09")]),onOk:()=>u.value?B.post({url:`/onlForm/api/doDbSynch/${r}/${u.value}`,params:{}}).then(()=>o()):(kt.createMessage.warn("\u8BF7\u9009\u62E9\u540C\u6B65\u7684\u65B9\u5F0F"),Promise.reject())})},Cr=(r,o)=>{ve.warning({title:"\u5220\u9664",centered:!0,closable:!0,content:()=>C("div",{style:{color:"#909399"}},[C("p",{style:{marginBottom:"4px"}},"\u79FB\u9664\u53EA\u4F1A\u5220\u9664\u8868\u5355\u914D\u7F6E\uFF1B"),C("p",{style:{marginBottom:"4px"}},"\u5220\u9664\u5219\u4F1A\u5220\u9664\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u8868\u4EE5\u53CA\u5B50\u8868\u4E14\u4E0D\u80FD\u6062\u590D\u3002"),C("p",{style:{marginBottom:"4px"}},"\u8BF7\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C\u2026")]),okButtonProps:{type:"primary",danger:!0,block:!0},okText:"\u5220\u9664",onOk:()=>B.delete({url:"/onlForm/onlFormHead/deleteBatch",data:r},{joinParamsToUrl:!0}).then(()=>{o()})})},Be=m([{title:"",key:"id",type:n.slot,width:"0px",slotName:"idNullSlot"},{title:"\u5B57\u6BB5\u540D\u79F0",key:"dbFieldName",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"},{unique:!0,message:"${title}\u4E0D\u80FD\u91CD\u590D"}]},{title:"\u9875\u9762\u540D\u79F0",key:"dbFieldTxt",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]},{title:"\u6570\u636E\u5E93\u5907\u6CE8",key:"dbComment",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",defaultValue:""},{title:"\u5B57\u6BB5\u957F\u5EA6",key:"dbLength",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}],defaultValue:32},{title:"\u5C0F\u6570\u70B9",key:"dbPointLength",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}],defaultValue:0},{title:"\u9ED8\u8BA4\u503C",key:"dbDefaultVal",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}"},{title:"\u5B57\u6BB5\u7C7B\u578B",key:"dbType",type:n.select,placeholder:"\u8BF7\u9009\u62E9${title}",validateRules:[{required:!0,message:"\u8BF7\u9009\u62E9${title}"}],options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Date",value:"date"},{title:"Datetime",value:"datetime"},{title:"BigDecimal",value:"bigdecimal"},{title:"Text",value:"text"},{title:"Blob",value:"blob"}],defaultValue:"String"},{title:"\u4E3B\u952E",key:"dbIsKey",type:n.checkbox,customValue:[1,0],defaultChecked:!1},{title:"\u5141\u8BB8\u7A7A\u503C",key:"dbIsNull",type:n.checkbox,customValue:[1,0],defaultChecked:!1},{title:"\u662F\u5426\u6570\u636E\u5E93\u5B57\u6BB5",key:"isDbField",type:n.checkbox,customValue:[1,0],defaultChecked:!0}]),X=it({id:"cgform",state:()=>({isFixedSearchLabelWidth:void 0,isFixedFormLabelWidth:void 0}),getters:{getIsFixedSearchLabelWidth(){return this.isFixedSearchLabelWidth},getIsFixedFormLabelWidth(){return this.isFixedFormLabelWidth}},actions:{setIsFixedFormLabelWidth(r){this.isFixedFormLabelWidth=r},setIsFixedSearchLabelWidth(r){this.isFixedSearchLabelWidth=r}}});function It(){return X(st)}const Lt=X(),Vt=({row:r,cellValue:o},u)=>{const h=Lt.getIsFixedFormLabelWidth;r.isShowForm!==1&&u(!0),h==="Y"&&!o&&o!==0&&u(!1,"\u56FA\u5B9Alabel\u6A21\u5F0F\uFF0Clabel\u5BBD\u5EA6\u4E0D\u80FD\u4E3A\u7A7A"),u(!0)},Pt=({row:r,cellValue:o},u)=>{if(r.fieldShowType==="next_date_range"||r.fieldShowType==="next_number_range"||r.fieldShowType==="next_custom_select"||r.fieldShowType==="next_region_select"||r.fieldShowType==="next_source")if(o==="")u(!1,"\u8BF7\u5B8C\u5584\u6269\u5C55\u53C2\u6570");else try{JSON.parse(o.replace(/\s*/g,"")),u(!0)}catch(h){u(!1,"\u6269\u5C55\u53C2\u6570\u683C\u5F0F\u914D\u7F6E\u6709\u8BEF")}u(!0)},$t=({row:r,cellValue:o},u)=>{r.isShowForm!==1&&u(!0),o?((o<1||o>24)&&u(!1,"\u6805\u683C\u6570\u53EA\u80FD\u662F1-24\u7684\u6574\u6570"),u(!0)):u(!1,"\u6805\u683C\u6570\u4E0D\u80FD\u4E3A\u7A7A")},U=m([{title:"\u5B57\u6BB5\u540D\u79F0",key:"dbFieldName",field:"dbFieldName",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",disabled:!0},{title:"\u9875\u9762\u540D\u79F0",key:"dbFieldTxt",field:"dbFieldTxt",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",disabled:!0},{title:"\u8868\u5355\u663E\u793A",key:"isShowForm",field:"isShowForm",type:n.checkbox,customValue:[1,0],defaultChecked:!1,headerClassName:()=>["bg-color-form"]},{title:"\u662F\u5426\u53EA\u8BFB",key:"isReadOnly",field:"isReadOnly",type:n.checkbox,customValue:[1,0],defaultChecked:!1,headerClassName:()=>["bg-color-form"]},{title:"\u63A7\u4EF6\u7C7B\u578B",key:"fieldShowType",field:"fieldShowType",type:n.select,placeholder:"\u8BF7\u9009\u62E9${title}",validateRules:[{required:!0,message:"\u8BF7\u9009\u62E9${title}"}],options:Tt,defaultValue:"String",headerClassName:()=>["bg-color-form"]},{title:"\u63A7\u4EF6\u957F\u5EA6",key:"fieldLength",field:"fieldLength",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"},{pattern:"^[1-9]+[0-9]*$",message:"${title}\u683C\u5F0F\u4E0D\u6B63\u786E"}],headerClassName:()=>["bg-color-form"]},{title:"\u6805\u683C\u6570",key:"spanVal",field:"spanVal",type:n.inputNumber,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{handler:$t}],headerClassName:()=>["bg-color-form"]},{title:"label\u5BBD\u5EA6",key:"formLabelwidth",field:"formLabelwidth",type:n.inputNumber,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{handler:Vt}],headerClassName:()=>["bg-color-form"]},{title:"\u8868\u5355\u6392\u5E8F\u53F7",key:"formSortNumber",field:"formSortNumber",type:n.inputNumber,placeholder:"\u8BF7\u8F93\u5165${title}",headerClassName:()=>["bg-color-form"]},{title:"\u63A7\u4EF6\u9ED8\u8BA4\u503C",key:"fieldDefaultValue",field:"fieldDefaultValue",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",headerClassName:()=>["bg-color-form"]},{title:"\u5217\u8868\u663E\u793A",key:"isShowList",field:"isShowList",type:n.checkbox,customValue:[1,0],defaultChecked:!1,headerClassName:()=>["bg-color-list"]},{title:"\u662F\u5426\u6392\u5E8F",key:"sortFlag",field:"sortFlag",type:n.checkbox,customValue:["1","0"],defaultChecked:!1,headerClassName:()=>["bg-color-list"]},{title:"\u5217\u8868\u6392\u5E8F\u53F7",key:"listSortNumber",field:"listSortNumber",type:n.inputNumber,placeholder:"\u8BF7\u8F93\u5165${title}",headerClassName:()=>["bg-color-list"]},{title:"\u5206\u7EC4\u6807\u9898",key:"groupTitle",field:"groupTitle",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",headerClassName:()=>["bg-color-list"]},{title:"\u6269\u5C55\u53C2\u6570",key:"fieldExtendJson",field:"fieldExtendJson",type:n.textarea,titleHelp:{icon:"vxe-icon--question",message:"\u7ED1\u5B9A\u7EC4\u4EF6\u6269\u5C55\u53C2\u6570\uFF0C\u89C1vue3JBoot\u524D\u7AEF\u6587\u6863\uFF01"},placeholder:"\u53EA\u80FD\u914D\u7F6EJSON\u5BF9\u8C61",validateRules:[{handler:Pt}],headerClassName:"jvxe-th-border-left"},{title:"\u81EA\u5B9A\u4E49\u8F6C\u6362\u5668",key:"converter",field:"converter",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}"}]),Ot=[{title:"\u7A7A",value:""},{title:"\u552F\u4E00\u6821\u9A8C",value:"only"},{title:"6\u523016\u4F4D\u6570\u5B57",value:"n6-16",pattern:"^\\d{6,16}$",tips:"\u8BF7\u8F93\u51656-16\u4F4D\u7684\u6570\u5B57"},{title:"6\u523016\u4F4D\u4EFB\u610F\u5B57\u7B26",value:"*6-16",pattern:"^.{6,16}$",tips:"\u8BF7\u8F93\u51656-16\u4F4D\u4EFB\u610F\u5B57\u7B26"},{title:"\u7F51\u5740",value:"url",pattern:"^((ht|f)tps?):\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+([\\w\\-.,@?^=%&:\\/~+#]*[\\w\\-@?^=%&\\/~+#])?$",tips:"\u8BF7\u8F93\u5165\u6B63\u89C4\u7684\u7F51\u5740"},{title:"\u7535\u5B50\u90AE\u4EF6",value:"e",pattern:"^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$",tips:"\u8BF7\u8F93\u5165\u6B63\u786E\u683C\u5F0F\u7684\u90AE\u7BB1\u5730\u5740"},{title:"\u624B\u673A\u53F7\u7801",value:"m",pattern:"^1[3456789]\\d{9}$",tips:"\u8BF7\u8F93\u5165\u6B63\u89C4\u7684\u624B\u673A\u53F7\u7801"},{title:"\u90AE\u653F\u7F16\u7801",value:"p",pattern:"^[1-9]\\d{5}$",tips:"\u8BF7\u8F93\u5165\u6B63\u89C4\u7684\u90AE\u653F\u7F16\u7801"},{title:"\u5B57\u6BCD",value:"s",pattern:"[A-Z|a-z]+$",tips:"\u8BF7\u8F93\u5165\u5B57\u6BCD"},{title:"\u6570\u5B57",value:"n",pattern:"^-?\\d+(\\.?\\d+|\\d?)$",tips:"\u8BF7\u8F93\u5165\u6570\u5B57"},{title:"\u6574\u6570",value:"z",pattern:"^\\d+$",tips:"\u8BF7\u8F93\u5165\u6574\u6570"},{title:"\u975E\u7A7A",value:"*",pattern:"^.+$",tips:"\u8BE5\u5B57\u6BB5\u4E0D\u80FD\u4E3A\u7A7A"},{title:"6\u523018\u4F4D\u5B57\u7B26\u4E32",value:"s6-18",pattern:"^[a-z|A-Z]{6,18}$",tips:"\u8BF7\u8F93\u51656-18\u4F4D\u5B57\u6BCD"},{title:"\u91D1\u989D",value:"money",pattern:"^(([1-9][0-9]*)|([0]\\.\\d{0,2}|[1-9][0-9]*\\.\\d{0,5}))$",tips:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u91D1\u989D"}],xe=m([{title:"\u5B57\u6BB5\u540D\u79F0",key:"dbFieldName",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",disabled:!0},{title:"\u9875\u9762\u540D\u79F0",key:"dbFieldTxt",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",disabled:!0},{title:"\u5B57\u6BB5Href",key:"fieldHref",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}"},{title:"\u9A8C\u8BC1\u89C4\u5219",key:"fieldValidType",type:n.select,placeholder:"\u8BF7\u8F93\u5165${title}",options:Ot,defaultValue:""},{title:"\u6821\u9A8C\u5FC5\u586B",key:"fieldMustInput",type:n.checkbox,customValue:["1","0"],defaultChecked:!1},{title:"\u5173\u8054\u5B57\u5178",key:"associaDict",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}"},{title:"\u5173\u8054\u5B57\u6BB5",key:"associaField",type:n.textarea,placeholder:"\u8BF7\u8F93\u5165${title}"},{title:"\u5B57\u5178Table",key:"dictTable",type:n.input,titleHelp:{icon:"vxe-icon--question",message:"\u5173\u8054\u7684\u8868\u540D"},placeholder:"\u8BF7\u8F93\u5165${title}"},{title:"\u5B57\u5178Code",key:"dictField",type:n.input,titleHelp:{icon:"vxe-icon--question",message:"\u5173\u8054\u7684\u8868\u5B57\u6BB5"},placeholder:"\u8BF7\u8F93\u5165${title}"},{title:"\u5B57\u5178Text",key:"dictText",type:n.input,titleHelp:{icon:"vxe-icon--question",message:"\u5173\u8054\u7684\u8868\u7FFB\u8BD1\u5B57\u6BB5"},placeholder:"\u8BF7\u8F93\u5165${title}"},{title:"\u81EA\u5B9A\u4E49\u7FFB\u8BD1",key:"custClz",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}"}]),Ce=m([{title:"\u5B57\u6BB5\u540D\u79F0",key:"dbFieldName",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",disabled:!0},{title:"\u9875\u9762\u540D\u79F0",key:"dbFieldTxt",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",disabled:!0},{title:"\u4E3B\u8868\u540D",key:"mainTable",type:n.input},{title:"\u4E3B\u8868\u5B57\u6BB5",key:"mainField",type:n.input}]),De=m([{title:"\u7D22\u5F15\u540D\u79F0",key:"indexName",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"},{unique:!0,message:"${title}\u4E0D\u80FD\u91CD\u590D"}]},{title:"\u7D22\u5F15\u680F\u4F4D",key:"indexField",type:n.selectMultiple,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}],options:[]},{title:"\u7D22\u5F15\u7C7B\u578B",key:"indexType",type:n.select,placeholder:"\u8BF7\u9009\u62E9${title}",options:[{title:"normal",value:"normal"},{title:"unique",value:"unique"}],defaultValue:"normal",validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]}]),Ht=X(),Wt=({row:r,cellValue:o},u)=>{r.isQuery!==1&&u(!0),r.queryShowType==="sel_tree"&&o===""&&u(!1,"\u8BF7\u5B8C\u5584\u5B57\u5178Table"),u(!0)},Jt=({row:r,cellValue:o},u)=>{r.isQuery!==1&&u(!0),(r.queryShowType==="sel_tree"||r.queryShowType==="next_source")&&o===""&&u(!1,"\u8BF7\u5B8C\u5584\u5B57\u5178Code"),u(!0)},Yt=({row:r,cellValue:o},u)=>{r.isQuery!==1&&u(!0),r.queryShowType==="sel_tree"&&o===""&&u(!1,"\u8BF7\u5B8C\u5584\u5B57\u5178Text"),u(!0)},jt=({row:r,cellValue:o},u)=>{if((r.queryShowType==="next_region_select"||r.queryShowType==="next_search_tabs"||r.queryShowType==="next_like_input_search"||r.queryShowType==="next_tree_select"||r.queryShowType==="next_source"||r.queryShowType==="next_custom_select")&&r.isQuery===1)if(o==="")u(!1,"\u8BF7\u5B8C\u5584\u6269\u5C55\u53C2\u6570");else try{JSON.parse(o.replace(/\s*/g,"")),u(!0)}catch(h){u(!1,"\u6269\u5C55\u53C2\u6570\u683C\u5F0F\u914D\u7F6E\u6709\u8BEF")}u(!0)},Ut=({row:r,cellValue:o},u)=>{r.isQuery!==1&&u(!0),o?((o<1||o>24)&&u(!1,"\u6805\u683C\u6570\u53EA\u80FD\u662F1-24\u7684\u6574\u6570"),u(!0)):u(!1,"\u6805\u683C\u6570\u4E0D\u80FD\u4E3A\u7A7A")},Kt=({row:r,cellValue:o},u)=>{const h=Ht.getIsFixedSearchLabelWidth;r.isQuery!==1&&u(!0),h==="Y"&&!o&&o!==0&&u(!1,"\u56FA\u5B9Alabel\u6A21\u5F0F\uFF0Clabel\u5BBD\u5EA6\u4E0D\u80FD\u4E3A\u7A7A"),u(!0)},K=m([{title:"\u5B57\u6BB5\u540D\u79F0",key:"dbFieldName",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",disabled:!0},{title:"\u9875\u9762\u540D\u79F0",key:"dbFieldTxt",type:n.input,placeholder:"\u8BF7\u8F93\u5165${title}",disabled:!0},{title:"\u63A7\u4EF6\u7C7B\u578B",key:"queryShowType",type:n.select,placeholder:"\u8BF7\u9009\u62E9${title}",options:At,defaultValue:"text"},{title:"\u6805\u683C\u6570",key:"searchSpanVal",type:n.inputNumber,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{handler:Ut}]},{title:"label\u5BBD\u5EA6",key:"searchLabelwidth",type:n.inputNumber,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{handler:Kt}]},{title:"\u6392\u5E8F\u53F7",key:"searchSortNumber",type:n.inputNumber,placeholder:"\u8BF7\u8F93\u5165${title}"},{title:"\u6269\u5C55\u53C2\u6570",key:"searchExtendJson",type:n.textarea,titleHelp:{icon:"vxe-icon--question",message:"\u7ED1\u5B9A\u7EC4\u4EF6\u6269\u5C55\u53C2\u6570\uFF0C\u89C1vue3JBoot\u524D\u7AEF\u6587\u6863\uFF01"},placeholder:"\u53EA\u80FD\u914D\u7F6EJSON\u5BF9\u8C61",validateRules:[{handler:jt}]},{title:"\u5B57\u5178Table",key:"queryDictTable",type:n.input,titleHelp:{icon:"vxe-icon--question",message:"\u5173\u8054\u7684\u8868\u540D"},validateRules:[{handler:Wt}]},{title:"\u5B57\u5178Code",key:"queryDictField",type:n.input,titleHelp:{icon:"vxe-icon--question",message:"\u5173\u8054\u7684\u8868\u5B57\u6BB5"},validateRules:[{handler:Jt}]},{title:"\u5B57\u5178Text",key:"queryDictText",type:n.input,titleHelp:{icon:"vxe-icon--question",message:"\u5173\u8054\u7684\u8868\u7FFB\u8BD1\u5B57\u6BB5"},validateRules:[{handler:Yt}]},{title:"\u9ED8\u8BA4\u503C",key:"queryDefVal",type:n.input},{title:"\u662F\u5426\u67E5\u8BE2",key:"isQuery",type:n.checkbox,customValue:[1,0],defaultChecked:!1},{title:"\u67E5\u8BE2\u7C7B\u578B",key:"queryMode",type:n.select,placeholder:"\u8BF7\u9009\u62E9${title}",validateRules:[{required:!0,message:"\u8BF7\u9009\u62E9${title}"}],options:[{title:"\u666E\u901A\u67E5\u8BE2",value:"single"},{title:"\u8303\u56F4\u67E5\u8BE2",value:"group"}],defaultValue:"single"}]);var Qt=`<!-- \u751F\u6210\u4EE3\u7801\u4E0D\u5141\u8BB8\u4FEE\u6539 -->\r
<template>\r
  <div>\r
    <!--\u9876\u90E8\u63D2\u69FD\u7EC4\u4EF6-->\r
    <component :is="topComponent" ref="topRef" />\r
    <!--\u5F15\u7528\u8868\u683C-->\r
    <BasicTable @register="registerTable" :rowSelection="rowSelection">\r
      <!--\u63D2\u69FD:table\u6807\u9898-->\r
      <template #tableTitle>\r
        <template v-for="(btn, idx) in getTitleAction()">\r
          <template v-if="btn.btnType === 'import'">\r
            <j-upload-button type="primary" :disabled="btn.disabled === true"\r
              v-if="btn.ifShowMethod ? btn.ifShowMethod() : btn.ifShow !== false" :preIcon="btn.preIcon"\r
              @click="btn.onClick">\r
              {{ btn.label }}\r
            </j-upload-button>\r
          </template>\r
          <template v-else>\r
            <a-button type="primary" :disabled="btn.disabled === true" v-if="btn.ifShow !== false" :preIcon="btn.preIcon"\r
              @click="btn.onClick" :loading="btn.methods === 'onExportXls' ? titleBtnLoading : false">\r
              {{ btn.label }}\r
            </a-button>\r
          </template>\r
        </template>\r
      </template>\r
      <!--\u64CD\u4F5C\u680F-->\r
      <template #action="{ record }">\r
        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)" />\r
      </template>\r
      <!--\u5B57\u6BB5\u56DE\u663E\u63D2\u69FD-->\r
      <template #htmlSlot="{ text }">\r
        <div v-html="text"></div>\r
      </template>\r
      <template #fileSlot="{ text }">\r
        <span v-if="!text" style="font-size: 12px;font-style: italic;">\u65E0\u6587\u4EF6</span>\r
        <a-button v-else :ghost="true" type="primary" preIcon="ant-design:download-outlined" size="small"\r
          @click="downloadFile(text)">\u4E0B\u8F7D</a-button>\r
      </template>\r
      <template #flowSlot="{ record }">\r
        <a-tag :color="calcAudit(record)">{{ calcAuditMsg(record) }}</a-tag>\r
      </template>\r
    </BasicTable>\r
    <!-- \u5E95\u90E8\u63D2\u69FD -->\r
    <component :is="bottomComponent" ref="bottomRef" />\r
    <!-- \u8868\u5355\u533A\u57DF -->\r
    <FmRecApplyModal @register="registerModal" @success="handleSuccess"></FmRecApplyModal>\r
    <!-- \u5DE5\u4F5C\u6D41 -->\r
    <FmRecApplyAuditModal @register="registerAuditModal" @success="handleSuccess"></FmRecApplyAuditModal>\r
  </div>\r
</template>\r
<script lang="ts" name="fmRecApply-fmRecApply" setup>\r
import { ref, computed, unref, toRaw, h, onActivated } from 'vue';\r
import { BasicTable, useTable, TableAction } from '/@/components/Table';\r
import { usePermission } from '/@/hooks/web/usePermission';\r
import { useModal } from '/@/components/Modal';\r
import { useListPage } from '/@/hooks/system/useListPage'\r
import { searchFormLabelCol } from '/@/next/const/onlineNew';\r
import FmRecApplyModal from './components/FmRecApplyModal.vue'\r
import { Modal } from 'ant-design-vue';\r
import FmRecApplyAuditModal from './components/FmRecApplyAuditModal.vue'\r
import { columns, searchFormSchema } from './FmRecApply.data';\r
import { useRouter, useRoute } from 'vue-router';\r
import { list, deleteOne, batchDelete, getImportUrl, getExportUrl, getDeploy, getJudgmentReturn, getShowCurFlow, getTerminate } from './FmRecApply.api';\r
import { merge } from 'lodash-es';\r
import { downloadByUrl } from '/@/utils/file/download';\r
import { getFileAccessHttpUrl } from '/@/utils/common/compUtils';\r
import { useGlobSetting } from '/@/hooks/setting';\r
import { getToken } from '/@/utils/auth';\r
const { apiUrl = '' } = useGlobSetting();\r
const token = getToken();\r
const mixinMethod = import.meta.globEager('./fmRecApplyMixin.ts');\r
\r
const bottomComponent = ref<any>(null)\r
const topComponent = ref<any>(null)\r
const topRef = ref(null)\r
const bottomRef = ref(null)\r
const titleBtnLoading = ref(false)\r
\r
//\u6309\u94AE\u6743\u9650\u95EE\u9898\r
const { hasPermission } = usePermission();\r
\r
const props = defineProps({\r
  query: { type: Object, default: {} },\r
});\r
const excludeSearchFields = ['receiveDate', 'checkDate'];\r
const titleBtns = ref<any[]>([\r
  { label: '\u65B0\u589E', methods: 'handleAdd', preIcon: "ant-design:plus-outlined", ifShowMethod: 'handleAddShow' },\r
  { label: '\u5BFC\u51FA', methods: 'onExportXls', ifShowMethod: 'handleExportShow' },\r
  // { label: '\u5BFC\u5165', methods: 'onImportXls', preIcon: "ant-design:import-outlined", btnType: 'import'  ,ifShowMethod: 'handleImportShow'}\r
]);\r
// table \u6807\u9898\u64CD\u4F5C\u680F\u6309\u94AE\r
const actionBtns = ref<any[]>([{ label: '\u7F16\u8F91', methods: 'handleEdit', ifShowMethod: 'handleEditFlowShow' }\r
  , { label: '\u53D1\u8D77\u5BA1\u6279', popConfirm: { title: '\u662F\u5426\u786E\u8BA4\u63D0\u4EA4\u6D41\u7A0B\u5417\uFF1F', methods: 'handleDeploy' }, ifShowMethod: 'handleDeployShow' }\r
  , { label: '\u5F53\u524D\u6D41\u7A0B', methods: 'handleShowCurFlow', ifShowMethod: 'handleShowCurFlowShow' }\r
]);\r
// table \u64CD\u4F5C\u680F\u5E73\u94FA\u6309\u94AE\r
const dropDownActionBtns = ref<any[]>([\r
  { label: '\u8BE6\u60C5', methods: 'handleDetail', ifShowMethod: 'handleDetailShow' },\r
  { label: '\u5BA1\u6838', methods: 'handleAudit', ifShowMethod: 'handleAuditShow' },\r
  { label: '\u7EC8\u5BA1\u9A73\u56DE', popConfirm: { title: '\u662F\u5426\u786E\u8BA4\u5BA1\u6838\u9A73\u56DE\u5417\uFF1F', methods: 'handleJudgmentReturn' }, ifShowMethod: 'handleJudgmentReturnShow' },\r
  //{ label: '\u6D41\u7A0B\u7EC8\u6B62', popConfirm: { title: '\u662F\u5426\u786E\u8BA4\u7EC8\u6B62\u6D41\u7A0B\u5417\uFF1F', methods: 'handleTerminate' },ifShowMethod: 'handleTerminateShow'},\r
  { label: '\u5220\u9664', popConfirm: { title: '\u662F\u5426\u786E\u8BA4\u5220\u9664\u5417\uFF1F', methods: 'handleDelete' }, ifShowMethod: 'handleFlowDeleteShow' },\r
\r
  { label: '\u53D6\u6D88\u6536\u6B3E', methods: 'cancelCollectAmount', ifShowMethod: 'cancelCollectAmountShow' }, { label: '\u6838\u9500', methods: 'writeOff', ifShowMethod: 'writeOffShow' },\r
  { label: '\u91CD\u65B0\u63A8\u9001', methods: 'handleRepush', ifShowMethod: 'handleRepushShow' },\r
]);  // table \u64CD\u4F5C\u680F\u66F4\u591A\u6309\u94AE\r
\r
const methods: Recordable = {\r
  handleAdd: function () {\r
    openModal(true, {\r
      action: 'add'\r
    });\r
  },\r
  handleEdit: function (record: Recordable) {\r
    openModal(true, {\r
      record,\r
      action: 'editor'\r
    });\r
  },\r
  // \u6743\u9650\u65B9\u6CD5\r
  cancelCollectAmountShow: function (record: Recordable) {\r
    return hasPermission('fmRecApply:cancelCollectAmount');\r
  },\r
  writeOffShow: function (record: Recordable) {\r
    return hasPermission('fmRecApply:writeOff');\r
  },\r
  handleAddShow: function (record: Recordable) {\r
    return hasPermission('fmRecApply:add');\r
  },\r
  handleEditShow: function (record: Recordable) {\r
    return hasPermission('fmRecApply:edit');\r
  },\r
  handleDeleteShow: function (record: Recordable) {\r
    return hasPermission('fmRecApply:del');\r
  },\r
  handleBatchDeleteShow: function (record: Recordable) {\r
    return hasPermission('fmRecApply:del');\r
  },\r
  handleDetailShow: function (record: Recordable) {\r
    return hasPermission('fmRecApply:detail');\r
  },\r
  handleExportShow: function (record: Recordable) {\r
    return hasPermission('fmRecApply:export');\r
  },\r
  handleImportShow: function (record: Recordable) {\r
    return hasPermission('fmRecApply:import');\r
  },\r
  handleAudit: function (record) {\r
    openAuditModal(true, {\r
      action: 'audit',\r
      record\r
    })\r
  },\r
  handleAuditShow: function (record: Recordable) {\r
    return (record.audit == 1);\r
  },\r
  handleDeployShow: function (record: Recordable) {\r
    return (record.exEdit && (record.state == 'start' || record.state == 'reject'));\r
  },\r
  handleJudgmentReturnShow: function (record: Recordable) {\r
    return record.state == 'end' && hasPermission('fmRecApply:judgmentReturn');\r
  },\r
  handleTerminateShow: function (record: Recordable) {\r
    return record.state == 'review' && hasPermission('fmRecApply:terminate');\r
  },\r
  // \u6D41\u7A0B\u662F\u5426\u53EF\u7F16\u8F91\r
  handleEditFlowShow(record) {\r
    return record.exEdit && (record.state == 'start' || record.state == 'reject');\r
  },\r
  handleFlowDeleteShow(record) {\r
    return record.exEdit && (record.state == 'start' || record.state == 'reject') && hasPermission('fmRecApply:del');\r
  },\r
  handleShowCurFlow: function (record: Recordable) {\r
    Modal.info({\r
      title: '\u5F53\u524D\u6D41\u7A0B',\r
      width: '80%',\r
      icon: () => h('span'),\r
      closable: true,\r
      content: () => h('iframe', { src: apiUrl + getShowCurFlow + record.orderId + '&token=' + token, width: '100%', height: '600px' }),\r
    })\r
  },\r
  handleDeploy: async function (record: Recordable) {\r
    await getDeploy({ "id": record.id, "taskId": record.taskId });\r
    reload();\r
  },\r
  handleJudgmentReturn: async function (record: Recordable) {\r
    let params = [{ "id": record.id, "taskId": null, "orderId": record.orderId, "reason": "\u7EC8\u5BA1\u9A73\u56DE", "displayName": "end" }]\r
    await getJudgmentReturn(params);\r
    reload();\r
  },\r
  handleTerminate: async function (record: Recordable) {\r
    let params = [{ "id": record.id, "taskId": null, "orderId": record.orderId, "reason": "\u7EC8\u6B62\u6D41\u7A0B", "displayName": "end" }]\r
    await getTerminate(params);\r
    reload();\r
  },\r
  /**\r
   * \u6279\u91CF\u5220\u9664\u4E8B\u4EF6\r
   */\r
  batchHandleDelete: async function () {\r
    await batchDelete({ ids: selectedRowKeys.value }, handleSuccess);\r
  },\r
  handleDetail: function (record: Recordable) {\r
    openModal(true, {\r
      record,\r
      action: 'detail'\r
    });\r
  },\r
  handleDelete: async function (record) {\r
    await deleteOne({ id: record.id }, handleSuccess);\r
  },\r
};\r
\r
const router = useRouter();\r
const route = useRoute();\r
const { currentRoute } = router;\r
//\u6CE8\u518Cmodel\r
const [registerModal, { openModal }] = useModal();\r
const [registerAuditModal, { openModal: openAuditModal }] = useModal();\r
// \u7F13\u5B58\u8FDB\u5165\u65F6\u5237\u65B0\u9875\u9762\r
onActivated(() => {\r
  reload();\r
})\r
//\u6CE8\u518Ctable\u6570\u636E\r
const { prefixCls, tableContext, onExportXls, onImportXls } = useListPage({\r
  tableProps: {\r
    title: '\u6536\u6B3E\u7533\u8BF7',\r
    api: list,\r
    columns,\r
    canResize: true,\r
    beforeFetch: (form) => {\r
      const formExp = getForm();\r
      const query = merge({}, (unref(currentRoute).query || {}));\r
      let values = formExp.getFieldsValue() || {};\r
      Object.keys(values).map(key => {\r
        if (!values[key]) {\r
          values[key] = ''\r
        } else if (Array.isArray(values[key])) {\r
          values[key] = values[key].join(',')\r
        }\r
      });\r
      const propsQuery = props.query || {};\r
      const _form = merge(query, form, values, propsQuery);\r
      Object.assign(form, _form);\r
      Object.keys(form).map(key => {\r
        for (let i = 0; i < excludeSearchFields.length; i++) {\r
          form[excludeSearchFields[i]] = undefined\r
        }\r
        if (form[key] === '' || form[key] === null) {\r
          form[key] = undefined\r
        }\r
      })\r
      return form\r
    },\r
    useSearchForm: !!searchFormSchema.length,\r
    pagination: undefined,\r
    formConfig: {\r
      schemas: searchFormSchema,\r
      autoSubmitOnEnter: true,\r
      actionColOptions: {\r
        span: 6,\r
        style: { textAlign: 'left', paddingLeft: '10px' }\r
      },\r
      labelCol: searchFormLabelCol,\r
      wrapperCol: {},\r
      baseColProps: null,\r
      showAdvancedButton: searchFormSchema.length <= 4 ? false : true,\r
      autoAdvancedCol: 4,\r
      autoAdvancedLine: 99,\r
      alwaysShowLines: 99,\r
      searchActionColIndexValue: 0,\r
      searchActionColIndexesModel: 'N',\r
      fieldMapToNumber: [\r
      ],\r
      fieldMapToTime: [\r
        ['receiveDate', ['receiveDate_begin', 'receiveDate_end'], 'YYYY-MM-DD HH:mm:ss'],\r
        ['checkDate', ['checkDate_begin', 'checkDate_end'], 'YYYY-MM-DD HH:mm:ss'],\r
      ],\r
    },\r
    actionColumn: {\r
      fixed: 'right',\r
      width: 240,\r
    },\r
  },\r
  exportConfig: {\r
    name: "\u6536\u6B3E\u7533\u8BF7",\r
    url: getExportUrl,\r
    params: props.query ? props.query : {}\r
  },\r
  importConfig: {\r
    url: getImportUrl,\r
    success: handleSuccess\r
  },\r
})\r
\r
methods.onExportXls = async () => {\r
  titleBtnLoading.value = true;\r
  await onExportXls().catch(_ => (titleBtnLoading.value = false));\r
  titleBtnLoading.value = false;\r
};\r
methods.onImportXls = onImportXls;\r
const [registerTable, tableMethods, selections] = tableContext;\r
const { reload, getForm } = tableMethods;\r
const { rowSelection, selectedRowKeys } = selections\r
function calcAudit(record) {\r
  if (record.state == 'end') {\r
    return "green";\r
  }\r
  if (record.audit == 1) {\r
    return "red";\r
  } else {\r
    return "blue";\r
  }\r
}\r
function calcAuditMsg(record) {\r
  if (record.state == 'start') {\r
    return "\u8349\u7A3F";\r
  } else if (record.state == 'reject') {\r
    return "\u8349\u7A3F\uFF08\u9A73\u56DE\uFF09";\r
  } else if (record.state == 'end') {\r
    return "\u5DF2\u7ED3\u675F";\r
  }\r
  if (record.audit == 1) {\r
    return "\u9700\u5BA1\u6279";\r
  } else {\r
    return "\u5BA1\u6279\u4E2D";\r
  }\r
}\r
/**\r
  * \u6279\u91CF\u4E0B\u8F7D\u4E8B\u4EF6\r
  */\r
function downloadFile(filePath) {\r
  if (filePath) {\r
    const filePathList = filePath.split(',');\r
    filePathList.map(path => {\r
      downloadByUrl({ url: getFileAccessHttpUrl(path) });\r
    })\r
  }\r
}\r
\r
/**\r
 * \u6210\u529F\u56DE\u8C03\r
 */\r
function handleSuccess() {\r
  (selectedRowKeys.value = []) && reload();\r
}\r
/**\r
   * \u6807\u9898\u64CD\u4F5C\u680F\r
   */\r
function getTitleAction() {\r
  return unref(titleBtns).map(item => {\r
    const _item = toRaw(item)\r
    const method = _item.methods\r
    const ifShowMethod = _item.ifShowMethod\r
    _item.ifShow = ifShowMethod && methods[ifShowMethod] ? methods[ifShowMethod]() : _item.ifShow === true\r
    _item.onClick = () => {\r
      methods[method] && methods[method]()\r
    }\r
    return _item\r
  })\r
}\r
/**\r
   * \u64CD\u4F5C\u680F\r
 */\r
function getTableAction(record) {\r
  return unref(actionBtns).map(item => {\r
    const _item = toRaw(item)\r
    const method = _item.methods\r
    const popConfirm = merge({}, (_item.popConfirm || {}))\r
    const ifShowMethod = _item.ifShowMethod\r
    _item.ifShow = ifShowMethod && methods[ifShowMethod] ? methods[ifShowMethod](record) : true\r
    if (popConfirm.methods) {\r
      popConfirm.confirm = methods[popConfirm.methods] && methods[popConfirm.methods].bind(null, record)\r
      _item.popConfirm = popConfirm\r
    } else if (method) {\r
      _item.onClick = methods[method] && methods[method].bind(null, record)\r
    }\r
    return _item\r
  })\r
}\r
/**\r
 * \u4E0B\u62C9\u64CD\u4F5C\u680F\r
 */\r
function getDropDownAction(record) {\r
  return unref(dropDownActionBtns).map(item => {\r
    const _item = toRaw(item)\r
    const method = _item.methods\r
    const popConfirm = merge({}, (_item.popConfirm || {}))\r
    const ifShowMethod = _item.ifShowMethod\r
    _item.ifShow = ifShowMethod && methods[ifShowMethod] ? methods[ifShowMethod](record) : true\r
    if (popConfirm.methods) {\r
      popConfirm.confirm = methods[popConfirm.methods] && methods[popConfirm.methods].bind(null, record)\r
      _item.popConfirm = popConfirm\r
    } else if (method) {\r
      _item.onClick = methods[method] && methods[method].bind(null, record)\r
    }\r
    return _item\r
  })\r
}\r
mixinMethod['./fmRecApplyMixin.ts'] && mixinMethod['./fmRecApplyMixin.ts'].default({\r
  methods,\r
  actionBtns,\r
  dropDownActionBtns,\r
  titleBtns,\r
  tableMethods,\r
  selections,\r
  router,\r
  bottomComponent,\r
  topComponent,\r
  topRef,\r
  bottomRef,\r
  titleBtnLoading,\r
  props\r
})\r
defineExpose({\r
  methods,\r
  actionBtns,\r
  dropDownActionBtns,\r
  titleBtns,\r
  tableMethods,\r
  selections,\r
  router,\r
  bottomComponent,\r
  topComponent,\r
  topRef,\r
  bottomRef,\r
  titleBtnLoading\r
})\r
<\/script>\r
<style scoped></style>\r
`;const zt={style:{float:"left","margin-right":"10px"}},Xt=I("\u751F\u6210\u6570\u636E>>"),Gt=I("\u4FDD\u5B58\u5E76\u9884\u89C8"),Zt=I("\u65B0\u589E"),er=v("span",null,"\u66F4\u591A\u914D\u7F6E",-1),tr=I(" \u9875\u9762\u5C5E\u6027 "),rr=v("span",null,"\u66F4\u591A\u914D\u7F6E",-1),ur=I(" \u67E5\u8BE2\u914D\u7F6E "),lr=v("span",null,"\xA0\xA0\xA0\xA0\xA0",-1),or=dt({__name:"index",emits:["register","success"],setup(r,{emit:o}){const{createMessage:u}=we(),h={dbFieldName:[]},f=m(!0),w=m(""),b=m(300),y=m(""),F=m(!1);let T=0;const A=m("databaseProperties"),R=m(),L=m(),H=m(),W=m(),J=m(),Y=m(),G=It(),Te=he({btn:["remove","clearSelection"],slots:["prefix","suffix"]});let c=he({tabsDataSource:[],indexesDataSource:[]}),N={tabsDataSource:[],indexesDataSource:[]},D={},Ae=document.documentElement.clientHeight||document.body.clientHeight;b.value=Ae-380;const[Ee,Z]=ye({schemas:[{label:"",field:"pageEnhancement",component:"JCodeEditor",componentProps:{height:60+s(b)+"px",fullScreen:!0},colProps:{span:12},itemProps:{labelCol:{xs:0,sm:0},wrapperCol:{xs:24,sm:24},colon:!0},ifShow:()=>s(F)},{label:"",field:"pageEnhancementDemo",component:"JCodeEditor",componentProps:{height:60+s(b)+"px",fullScreen:!0,disabled:!0},colProps:{span:12},itemProps:{labelCol:{xs:0,sm:0},wrapperCol:{xs:24,sm:24},colon:!0},ifShow:()=>s(F)}],showActionButtonGroup:!1}),[ke,Re]=fe(),[Ne,ee]=fe(),[_e,{resetFields:Me,setFieldsValue:te,validate:qe,getFieldsValue:Ie}]=ye({labelCol:{},labelWidth:100,schemas:Et,showActionButtonGroup:!1}),[Le,{setModalProps:V,closeModal:Ve,changeLoading:g}]=ct(e=>S(this,null,function*(){F.value=!0,y.value="",yield Me(),V({confirmLoading:!1,minHeight:80}),f.value=!!(e!=null&&e.isUpdate),A.value="databaseProperties",s(f)?(D=e.record,se(D),w.value=e.record.id,yield te(k({},e.record)),setTimeout(()=>{const t={headId:e.record.id};g(!0),Rt(t).then(l=>{c.tabsDataSource=[...l],N.tabsDataSource=[...l],g(!1)}).catch(l=>{g(!1)}),Nt(t).then(l=>{c.indexesDataSource=[...l],N.indexesDataSource=[...l]})},50)):(c.tabsDataSource=[...Se],c.indexesDataSource.length=0,D={useSearchForm:"Y",searchFormTemplate:"",isFixedSearchLabelWidth:"N",searchAutoAdvancedCol:3,searchActionColSpanVal:4,searchActionColIndexesModel:"N",searchActionColIndexValue:"",formTemplate:"",isFixedFormLabelWidth:"N",scroll:1,isPage:"Y",isTree:"N",isCheckbox:"N"}),$(()=>{Z.setFieldsValue({pageEnhancementDemo:Qt})})})),Pe=x(()=>s(f)?"\u7F16\u8F91":"\u65B0\u589E"),$e=x(()=>{const e=Be.value.map(t=>t.key);return c.tabsDataSource.map(t=>{var i;let l={};for(let a=0;a<e.length;a++)l[e[a]]=(i=t[e[a]])!=null?i:"";return l})}),Oe=x(()=>{const e=U.value.map(t=>t.key);return c.tabsDataSource.map(t=>{var i;let l={};for(let a=0;a<e.length;a++)l[e[a]]=(i=t[e[a]])!=null?i:"";return l})}),He=x(()=>{const e=xe.value.map(t=>t.key);return c.tabsDataSource.map(t=>{var i;let l={};for(let a=0;a<e.length;a++)l[e[a]]=(i=t[e[a]])!=null?i:"";return l})}),We=x(()=>{const e=Ce.value.map(t=>t.key);return c.tabsDataSource.map(t=>{var i;let l={};for(let a=0;a<e.length;a++)l[e[a]]=(i=t[e[a]])!=null?i:"";return l})}),re=x(()=>{const e=De.value.map(t=>t.key);return c.indexesDataSource.map(t=>{var i;let l={};for(let a=0;a<e.length;a++)l[e[a]]=(i=t[e[a]])!=null?i:"";return l})}),Je=x(()=>{const e=K.value.map(t=>t.key);return c.tabsDataSource.map(t=>{var i;let l={};for(let a=0;a<e.length;a++)l[e[a]]=(i=t[e[a]])!=null?i:"";return l})}),Ye=x(()=>De.value.map(e=>(e.key==="indexField"&&(e.options=c.tabsDataSource.map(t=>({title:t.dbFieldName,value:t.dbFieldName}))),e)));function je(){return S(this,null,function*(){s(y)?(g(!0),_t(s(y)).then(e=>S(this,null,function*(){const{head:t,indexs:l,fields:i}=e;yield te(k({},t)),c.tabsDataSource=[...i],c.indexesDataSource=[...l],g(!1)})).catch(e=>{g(!1)})):u.warning("\u8BF7\u5148\u9009\u62E9\u6570\u636E")})}function Ue(){c.tabsDataSource=c.tabsDataSource.map((e,t)=>O(e,R.value.getTableData()[t],{id:s(f)?e.id:void 0})),$(()=>{T++;const e=k({},Se[1]);e.dbFieldName="",e.dbFieldTxt="",e.isShowList=1,e.isShowForm=1,e.id=T,c.tabsDataSource.push(e)})}function Ke({deleteRows:e}){c.tabsDataSource=c.tabsDataSource.filter(t=>e.every(l=>l.id!==t.id))}function _({oldIndex:e,newIndex:t}){ue(c.tabsDataSource,t,e),ue(N.tabsDataSource,t,e)}function ue(e,t,l){const i=e[t];e[t]=e[l],e[l]=i}function Qe(){const e=N.tabsDataSource.map(l=>l.id),t=c.tabsDataSource.map(l=>l.id);return s(f)?e.filter(l=>l&&t.indexOf(l)===-1):[]}function ze(){const e=N.indexesDataSource.map(l=>l.id),t=c.indexesDataSource.map(l=>l.id);return s(f)?e.filter(l=>l&&t.indexOf(l)===-1):[]}function le(e){return R.value.getTableData().map((t,l)=>{var a;const i=e==="pageProperties"?(a=L.value.getTableData()[l])==null?void 0:a.dbFieldTxt:t==null?void 0:t.dbFieldTxt;return O({},t,R.value.getTableData()[l],L.value.getTableData()[l],H.value.getTableData()[l],W.value.getTableData()[l],Y.value.getTableData()[l],{id:Object.prototype.toString.call(t.id)==="[object String]"&&t.id.indexOf("row_")===-1?t.id:"",dbFieldName:t.dbFieldName,dbFieldTxt:i})})}function oe(){return J.value.getTableData().map((e,t)=>O(e,{id:s(f)?re.value[t].id:void 0}))}function Xe(e){c.tabsDataSource=le(e),c.indexesDataSource=oe()}function E(e){e!==A.value&&(A.value=e,setTimeout(()=>{ne()},500))}function Ge(){return S(this,null,function*(){return F.value=!1,Promise.resolve})}function Ze(){return S(this,null,function*(){ae(!0,e=>{const{values:t}=e,{head:l,exSync:i}=t;window.testDataStr=Z.getFieldsValue().pageEnhancement,i===!0?qt(l.id,()=>{ee.openModal(!0,e)}):ee.openModal(!0,e)})})}function ne(){return S(this,null,function*(){ae(!1,e=>{o("success",e),$(()=>{F.value=!1,Ve()})})})}function ae(e=!1,t){return S(this,null,function*(){try{let l=yield qe(),i=yield et();V({confirmLoading:!0}),g(!0),yield Mt(Object.assign({head:pe(k(k({},D),l),{id:w.value}),deleteFieldIds:Qe(),deleteIndexIds:ze()},i),f.value,{isReturnNativeResponse:e}).then(a=>{const{data:P}=a,{result:j}=P;g(!1),V({confirmLoading:!1}),t&&t({isUpdate:s(f),values:j})}).catch(()=>{g(!1),V({confirmLoading:!1})})}finally{}})}function et(){return S(this,null,function*(){let e;return e=yield R.value.validateTable(),e?(E("databaseProperties"),Promise.reject(null)):(e=yield L.value.validateTable(),e?(E("pageProperties"),Promise.reject(null)):(e=yield H.value.validateTable(),e?(E("checkField"),Promise.reject(null)):(e=yield W.value.validateTable(),e?(E("foreign"),Promise.reject(null)):(e=yield J.value.validateTable(),e?(E("indexes"),Promise.reject(null)):(e=yield Y.value.validateTable(),e?(E("searchConfig"),Promise.reject(null)):Promise.resolve({indexs:oe(),fields:le()}))))))})}function ie(){Re.openModal(!0,D)}function tt(e){const t=Ie();D=O({},t,e),se(D)}function se(e){U.value.map(t=>{t.key==="formLabelwidth"?t.visible=e.isFixedFormLabelWidth==="Y":t.visible=!0}),K.value.map(t=>{e.useSearchForm==="Y"?t.key==="searchLabelwidth"?t.visible=e.isFixedSearchLabelWidth==="Y":t.visible=!0:t.key==="dbFieldName"||t.key==="dbFieldTxt"?t.visible=!0:t.visible=!1}),setTimeout(()=>{const t=e.searchFormTemplate?24/e.searchFormTemplate:24,l=e.formTemplate?24/e.formTemplate:24;c.tabsDataSource.map(i=>{e.formTemplate&&(i.spanVal=l),e.searchFormTemplate&&(i.searchSpanVal=t),e.isFixedSearchLabelWidth==="Y"&&e.searchLabelWidthBatch&&(i.searchLabelwidth=e.searchLabelWidthBatch),e.isFixedFormLabelWidth==="Y"&&e.formLabelWidthBatch&&(i.formLabelwidth=e.formLabelWidthBatch)}),e.formTemplate=null,e.searchFormTemplate=null,e.searchLabelWidthBatch=void 0,e.formLabelWidthBatch=void 0,G.setIsFixedFormLabelWidth(e.isFixedFormLabelWidth),G.setIsFixedSearchLabelWidth(e.isFixedSearchLabelWidth)},100)}return pt(A,(e,t)=>{$(()=>{Xe(t)})}),(e,t)=>{const l=q("a-button"),i=q("JVxeTable"),a=q("a-tab-pane"),P=q("a-tooltip"),j=q("a-tabs");return mt(),ht(yt,null,[d(s(gt),bt(e.$attrs,{onRegister:s(Le),title:s(Pe),closeFunc:Ge,onOk:ne}),{insertFooter:p(()=>[v("div",zt,[d(xt,{apiUrl:"/onlForm/onlFormHead/list",method:"get",labelKey:"tableTxt",valueKey:"id",isPagination:"true",style:{"text-align":"left",width:"200px"},searchKey:"tableTxt",searchType:"like",allowClear:!0,value:y.value,"onUpdate:value":t[0]||(t[0]=M=>y.value=M)},null,8,["value"])]),d(l,{style:{float:"left"},type:"dashed",onClick:je},{default:p(()=>[Xt]),_:1}),d(l,{style:{"margin-right":"20px"},type:"primary",onClick:Ze},{default:p(()=>[Gt]),_:1})]),default:p(()=>[ft(v("div",null,[d(s(be),{onRegister:s(_e)},null,8,["onRegister"]),d(j,{activeKey:A.value,"onUpdate:activeKey":t[5]||(t[5]=M=>A.value=M)},{default:p(()=>[d(a,{tab:"\u6570\u636E\u5E93\u5C5E\u6027",key:"databaseProperties",forceRender:!0},{default:p(()=>[d(i,{ref_key:"databasePropertiesRef",ref:R,toolbar:"",rowNumber:"",dragSort:"",rowSelection:"",stripe:"",height:b.value,disabledRows:h,dataSource:s($e),columns:s(Be),toolbarConfig:Te,onRemoved:Ke,onDragged:_},{idNullSlot:p(()=>[]),toolbarPrefix:p(()=>[d(l,{type:"primary",preIcon:"ant-design:plus",onClick:Ue},{default:p(()=>[Zt]),_:1})]),_:1},8,["height","dataSource","columns","toolbarConfig"])]),_:1}),d(a,{key:"pageProperties",forceRender:!0},{tab:p(()=>[d(P,{placement:"top"},{title:p(()=>[er]),default:p(()=>[d(s(ge),{onClick:t[1]||(t[1]=M=>ie()),class:"config-icon"})]),_:1}),tr]),default:p(()=>[d(i,{ref_key:"pagePropertiesRef",ref:L,rowNumber:"",dragSort:"",stripe:"",border:"outer",maxHeight:60+b.value,disabledRows:h,dataSource:s(Oe),columns:s(U),onDragged:_},null,8,["maxHeight","dataSource","columns"])]),_:1}),d(a,{tab:"\u6821\u9A8C\u5B57\u6BB5",key:"checkField",forceRender:!0},{default:p(()=>[d(i,{ref_key:"checkFieldRef",ref:H,rowNumber:"",dragSort:"",stripe:"",maxHeight:60+b.value,disabledRows:h,dataSource:s(He),columns:s(xe),onDragged:_},null,8,["maxHeight","dataSource","columns"])]),_:1}),d(a,{tab:"\u5916\u952E",key:"foreignKey",forceRender:!0},{default:p(()=>[d(i,{ref_key:"foreignKeyRef",ref:W,rowNumber:"",dragSort:"",stripe:"",maxHeight:60+b.value,disabledRows:h,dataSource:s(We),columns:s(Ce),onDragged:_},null,8,["maxHeight","dataSource","columns"])]),_:1}),d(a,{tab:"\u7D22\u5F15",key:"indexes",forceRender:!0},{default:p(()=>[d(i,{ref_key:"indexesRef",ref:J,toolbar:"",rowNumber:"",dragSort:"",stripe:"",maxHeight:60+b.value,dataSource:s(re),columns:s(Ye)},null,8,["maxHeight","dataSource","columns"])]),_:1}),d(a,{key:"searchConfig",forceRender:!0},{tab:p(()=>[d(P,{placement:"top"},{title:p(()=>[rr]),default:p(()=>[d(s(ge),{onClick:t[2]||(t[2]=M=>ie()),class:"config-icon"})]),_:1}),ur]),default:p(()=>[d(i,{ref_key:"searchConfigRef",ref:Y,rowNumber:"",dragSort:"",stripe:"",maxHeight:60+b.value,disabledRows:h,dataSource:s(Je),columns:s(K),onDragged:_},null,8,["maxHeight","dataSource","columns"])]),_:1}),d(a,{tab:"\u9875\u9762\u589E\u5F3A",key:"pageEnhancement",forceRender:!0},{default:p(()=>[d(s(be),{onRegister:s(Ee)},null,8,["onRegister"])]),_:1}),d(a,{disabled:""},{tab:p(()=>[v("a",{onClick:t[3]||(t[3]=Fe(()=>{},["stop"])),target:"_blank",href:"https://docs.qq.com/doc/DRGhHQXF4Z0htTW9P?&u=6a621f13943d47c78d9d877aecad8c48"},"vue3JBoot\u524D\u7AEF\u6587\u6863"),lr,v("a",{onClick:t[4]||(t[4]=Fe(()=>{},["stop"])),target:"_blank",href:"https://docs.qq.com/doc/DUHhXb0RFWWVCa2RX"},"vue3JBoot\u540E\u7AEF\u6587\u6863")]),_:1})]),_:1},8,["activeKey"])],512),[[Ft,F.value]])]),_:1},16,["onRegister","title"]),d(St,{onRegister:s(ke),onSuccess:tt},null,8,["onRegister"]),d(Bt,{onRegister:s(Ne)},null,8,["onRegister"])],64)}}});var Dr=Object.freeze(Object.defineProperty({__proto__:null,default:or},Symbol.toStringTag,{value:"Module"}));export{or as _,qt as a,Cr as b,gr as c,xr as d,Dr as i,Br as l,Sr as s};
