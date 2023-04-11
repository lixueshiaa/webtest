var p=Object.defineProperty,u=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(e,o,t)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))f.call(o,t)&&r(e,t,o[t]);if(s)for(var t of s(o))v.call(o,t)&&r(e,t,o[t]);return e},i=(e,o)=>u(e,c(o));import{r as b,a as C}from"./index.18447f3a.js";import w from"./PreviewCode.09042379.js";import{a1 as D,a as _,bR as h,B as M,f as A,bf as J,U as l,o as V,k as $,G as k,p as x}from"./index.397c0bf9.js";import"./index.0ae2a8d1.js";import"./useWindowSizeFn.830b179a.js";import"./htmlmixed.d0c2a650.js";const y=`<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <a-button @click="submit">\u63D0\u4EA4</a-button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      fApi:{},
      formData:{},
      formConfig: `;let g=`
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
     }
  }
}
<\/script>`;const j=_({name:"CodeModal",components:{PreviewCode:w,Modal:h},setup(){const e=M({visible:!1,jsonData:{}}),o=a=>{a.schemas&&C(a.schemas),e.visible=!0,e.jsonData=a},t=A(()=>y+JSON.stringify(b(e.jsonData),null,"	")+g);return i(n({},J(e)),{editorVueJson:t,showModal:o})}});function B(e,o,t,a,E,N){const m=l("PreviewCode"),d=l("Modal");return V(),$(d,{title:"\u4EE3\u7801",footer:null,visible:e.visible,onCancel:o[0]||(o[0]=P=>e.visible=!1),wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px",destroyOnClose:!0},{default:k(()=>[x(m,{editorJson:e.editorVueJson,fileFormat:"vue"},null,8,["editorJson"])]),_:1},8,["visible"])}var q=D(j,[["render",B]]);export{q as default};
