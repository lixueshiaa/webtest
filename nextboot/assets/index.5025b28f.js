var $=Object.defineProperty,B=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(i,e,t)=>e in i?$(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,E=(i,e)=>{for(var t in e||(e={}))v.call(e,t)&&w(i,t,e[t]);if(F)for(var t of F(e))M.call(e,t)&&w(i,t,e[t]);return i},T=(i,e)=>B(i,O(e));var C=(i,e,t)=>new Promise((m,c)=>{var d=n=>{try{l(t.next(n))}catch(u){c(u)}},f=n=>{try{l(t.throw(n))}catch(u){c(u)}},l=n=>n.done?m(n.value):Promise.resolve(n.value).then(d,f);l((t=t.apply(i,e)).next())});import{B as N}from"./BasicTable.0e5ec17a.js";import{T as R}from"./componentMap.b6eed178.js";import"./TableImg.e5f75c12.js";import{u as D}from"./useTable.cd2ffd0a.js";import{a0 as x,a as A,u as j,bn as P,f as y,U,o as V,i as G,p as r,G as a,j as p,J as I,T as H}from"./index.397c0bf9.js";import"./BasicForm.3d2570da.js";import"./FormItem.vue_vue_type_script_lang.17542945.js";import"./index.7ab28a2b.js";import"./BasicModal.1ff6964e.js";import"./useWindowSizeFn.830b179a.js";import"./useForm.871d18c5.js";import"./RadioButtonGroup.c6ce22c0.js";import"./useFormItem.3d0c36d5.js";import"./JDictSelectTag.67e5d4c9.js";import"./JUpload.9a731a32.js";import"./api.2a8d49a5.js";import"./functional.540b215d.js";import"./index.a7c60aee.js";import"./onMountedOrActivated.752d8da8.js";import"./useContentViewHeight.4e4c24ce.js";import"./FormOutlined.94f2e463.js";import"./useSortable.e015d2cb.js";import"./index.1ddf0867.js";import"./download.2b828441.js";import"./base64Conver.bb012c73.js";import"./index.4874795c.js";import"./index.de31474f.js";import"./useCountdown.31522075.js";import"./props.12587afd.js";import"./Tree.vue_vue_type_style_index_0_lang.3391c5ca.js";import"./useContextMenu.7724d5f8.js";import"./index.a1e3eaae.js";import"./index.efede30e.js";import"./htmlmixed.d0c2a650.js";import"./vue.651b9432.js";import"./depart.api.d716bbdd.js";import"./index.4e16446b.js";import"./EditOutlined.91a9672d.js";const L=[{title:"\u6587\u4EF6\u540D\u79F0",dataIndex:"fileName",width:120},{title:"\u6587\u4EF6\u5730\u5740",dataIndex:"url",width:100}],J=[{label:"\u6587\u4EF6\u540D\u79F0",field:"fileName",component:"Input",colProps:{span:6}},{label:"\u6587\u4EF6\u5730\u5740",field:"url",component:"Input",colProps:{span:6}}],K="/sys/oss/file/upload",W="/sys/upload/uploadMinio",X=i=>x.get({url:"/sys/oss/file/list",params:i}),q=(i,e)=>x.delete({url:"/sys/oss/file/delete",params:i},{joinParamsToUrl:!0}).then(()=>{e()}),z=I("OSS\u6587\u4EF6\u4E0A\u4F20"),Q=I("MINIO\u6587\u4EF6\u4E0A\u4F20"),Y=A({name:"system-ossfile"}),De=A(T(E({},Y),{setup(i){const{createMessage:e}=H(),t=j(),m={"X-Access-Token":P()},[c,{reload:d}]=D({api:X,rowKey:"id",columns:L,formConfig:{labelWidth:120,schemas:J,autoSubmitOnEnter:!0},striped:!0,useSearchForm:!0,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},beforeFetch:o=>Object.assign({column:"createTime",order:"desc"},o),actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),f=y(()=>`${t.uploadUrl}${K}`),l=y(()=>`${t.uploadUrl}${W}`);function n(o){if(o&&o.url){console.log("glob.onlineUrl",t.viewUrl);let s=`${t.viewUrl}?url=`+encodeURIComponent(o.url);window.open(s,"_blank")}}function u(o){return C(this,null,function*(){yield q({id:o.id},d)})}function g(o){var s=o.type;if(s==="image"){if(s.indexOf("image")<0)return e.warning("\u8BF7\u4E0A\u4F20\u56FE\u7247"),!1}else if(s==="file"&&s.indexOf("image")>=0)return e.warning("\u8BF7\u4E0A\u4F20\u6587\u4EF6"),!1;return!0}function b(o){o.file.status==="done"?o.file.response.success?(d(),e.success(`${o.file.name} \u4E0A\u4F20\u6210\u529F!`)):e.error(`${o.file.response.message}`):o.file.status==="error"&&e.error(`${o.file.response.message}`)}function S(o){return[{label:"\u9884\u89C8",onClick:n.bind(null,o)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:u.bind(null,o)}}]}return(o,s)=>{const h=U("a-button"),_=U("a-upload");return V(),G("div",null,[r(p(N),{onRegister:p(c)},{tableTitle:a(()=>[r(_,{name:"file",showUploadList:!1,action:p(f),headers:m,beforeUpload:g,onChange:b},{default:a(()=>[r(h,{type:"primary",preIcon:"ant-design:upload-outlined"},{default:a(()=>[z]),_:1})]),_:1},8,["action"]),r(_,{name:"file",showUploadList:!1,action:p(l),headers:m,beforeUpload:g,onChange:b},{default:a(()=>[r(h,{type:"primary",preIcon:"ant-design:upload-outlined"},{default:a(()=>[Q]),_:1})]),_:1},8,["action"])]),action:a(({record:k})=>[r(p(R),{actions:S(k)},null,8,["actions"])]),_:1},8,["onRegister"])])}}}));export{De as default};
