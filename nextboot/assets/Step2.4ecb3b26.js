var f=(p,r,s)=>new Promise((c,i)=>{var _=e=>{try{t(s.next(e))}catch(n){i(n)}},u=e=>{try{t(s.throw(e))}catch(n){i(n)}},t=e=>e.done?c(e.value):Promise.resolve(e.value).then(_,u);t((s=s.apply(p,r)).next())});import{B as v}from"./BasicForm.d1b5a4f4.js";import"./componentMap.6942b0b6.js";import{u as E}from"./useForm.26fd4105.js";import"./RadioButtonGroup.6d9641c3.js";import{a as h,be as B,L as D,dR as d,a1 as b,U as a,o as g,i as x,p as o,G as m,J as l}from"./index.9eb451d3.js";import"./JDictSelectTag.3b1f5a5e.js";import"./JUpload.38683df0.js";import{step2Schemas as C}from"./data.80eca3ac.js";import"./FormItem.vue_vue_type_script_lang.1dbd23cc.js";import"./index.9788db2e.js";import"./BasicModal.a7306b6e.js";import"./useWindowSizeFn.ed181042.js";import"./index.5df19bc8.js";import"./useFormItem.b38dda7e.js";import"./download.de7e8375.js";import"./base64Conver.bb012c73.js";import"./index.509a06e4.js";import"./index.dd61c578.js";import"./useCountdown.71e244f9.js";import"./api.632a718d.js";import"./props.d56cca40.js";import"./Tree.vue_vue_type_style_index_0_lang.1f840683.js";import"./useContextMenu.27080093.js";import"./index.e63dfd63.js";import"./onMountedOrActivated.bab7e2a6.js";import"./index.c61598b5.js";import"./htmlmixed.95cdf531.js";import"./vue.e841ff5e.js";import"./depart.api.03e31315.js";import"./index.5fc45d81.js";import"./EditOutlined.1cd3ad58.js";import"./functional.8b995981.js";const y=h({components:{BasicForm:v,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(p,{emit:r}){const[s,{validate:c,setProps:i}]=E({labelWidth:120,schemas:C,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:u});function _(){return f(this,null,function*(){r("prev")})}function u(){return f(this,null,function*(){try{const t=yield c();i({submitButtonOptions:{loading:!0}}),setTimeout(()=>{i({submitButtonOptions:{loading:!1}}),r("next",t)},1500)}catch(t){}})}return{register:s}}}),A={class:"step2"},O=l(" ant-design@alipay.com "),R=l(" test@example.com "),S=l(" Jeecg "),$=l(" 500\u5143 ");function w(p,r,s,c,i,_){const u=a("a-alert"),t=a("a-descriptions-item"),e=a("a-descriptions"),n=a("a-divider"),F=a("BasicForm");return g(),x("div",A,[o(u,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),o(e,{column:1,class:"mt-5"},{default:m(()=>[o(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:m(()=>[O]),_:1}),o(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:m(()=>[R]),_:1}),o(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:m(()=>[S]),_:1}),o(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:m(()=>[$]),_:1})]),_:1}),o(n),o(F,{onRegister:p.register},null,8,["onRegister"])])}var _t=b(y,[["render",w],["__scopeId","data-v-1a75dc20"]]);export{_t as default};
