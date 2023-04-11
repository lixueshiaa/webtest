var F=Object.defineProperty,y=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var h=(e,o,s)=>o in e?F(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,p=(e,o)=>{for(var s in o||(o={}))I.call(o,s)&&h(e,s,o[s]);if(_)for(var s of _(o))M.call(o,s)&&h(e,s,o[s]);return e},c=(e,o)=>y(e,E(o));import{u as B}from"./useFormDesignState.e3d1405e.js";import{f as D,g as J}from"./index.18447f3a.js";import{C as U,M as g}from"./index.0ae2a8d1.js";import{a1 as j,a as k,bd as S,bR as w,B as O,bf as N,U as r,o as x,k as T,G as n,p as l,n as C,J as i,T as $,bP as R,bQ as V}from"./index.397c0bf9.js";import"./useWindowSizeFn.830b179a.js";import"./htmlmixed.d0c2a650.js";const A=k({name:"ImportJsonModal",components:{CodeEditor:U,Upload:S,Modal:w},setup(){const{createMessage:e}=$(),o=O({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "\u8F93\u5165\u6846",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:s}=B(),d=()=>{o.visible=!1},m=()=>{o.visible=!0},u=()=>{try{const a=JSON.parse(o.json);a.schemas&&D(a.schemas,t=>{J(t)}),s.setFormConfig(c(p({},a),{activeKey:1,currentItem:{component:""}})),d(),e.success("\u5BFC\u5165\u6210\u529F")}catch(a){e.error("\u5BFC\u5165\u5931\u8D25\uFF0C\u6570\u636E\u683C\u5F0F\u4E0D\u5BF9")}};return c(p({handleImportJson:u,beforeUpload:a=>{const t=new FileReader;return t.readAsText(a),t.onload=function(){o.json=this.result,u()},!1},handleCancel:d,showModal:m},N(o)),{MODE:g})}}),K=e=>(R("data-v-0e337f59"),e=e(),V(),e),L=K(()=>C("p",{class:"hint-box"},"\u5BFC\u5165\u683C\u5F0F\u5982\u4E0B:",-1)),z={class:"v-json-box"},G=i("\u53D6\u6D88"),P=i("\u5BFC\u5165json\u6587\u4EF6"),Q=i("\u786E\u5B9A");function W(e,o,s,d,m,u){const f=r("CodeEditor"),a=r("a-button"),t=r("Upload"),b=r("Modal");return x(),T(b,{title:"JSON\u6570\u636E",visible:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"\u5173\u95ED",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(a,{onClick:e.handleCancel},{default:n(()=>[G]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(a,{type:"primary"},{default:n(()=>[P]),_:1})]),_:1},8,["beforeUpload"]),l(a,{type:"primary",onClick:e.handleImportJson},{default:n(()=>[Q]),_:1},8,["onClick"])]),default:n(()=>[L,C("div",z,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=v=>e.json=v),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["visible","onOk","onCancel"])}var se=j(A,[["render",W],["__scopeId","data-v-0e337f59"]]);export{se as default};
