var g=Object.defineProperty;var _=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var S=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))A.call(t,o)&&S(e,o,t[o]);if(_)for(var o of _(t))k.call(t,o)&&S(e,o,t[o]);return e};import{a1 as x,a as D,eM as u,z as R,B as y,bf as $,U as p,o as i,k as a,G as v,n as h,p as r,D as s,E as m,l as B}from"./index.6cf4d174.js";import w from"./Step1.b87fb33b.js";import V from"./Step2.042cc559.js";import W from"./Step3.d176fb4c.js";import{P as b}from"./index.28df25ce.js";import"./BasicForm.74bae903.js";import"./FormItem.vue_vue_type_script_lang.0f2a80c5.js";import"./componentMap.bdddb878.js";import"./index.e9415cf9.js";import"./useFormItem.ed1b0f05.js";import"./RadioButtonGroup.e396598a.js";import"./index.f8f2ddf0.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";import"./download.61ffebe5.js";import"./base64Conver.bb012c73.js";import"./index.260e697f.js";import"./index.10fcd82b.js";import"./useCountdown.5a1a5b16.js";import"./api.4a4df057.js";import"./props.932becef.js";import"./JDictSelectTag.77cd1e49.js";import"./Tree.vue_vue_type_style_index_0_lang.dd81644b.js";import"./useContextMenu.988cb2d7.js";import"./index.d3e30781.js";import"./onMountedOrActivated.c1705977.js";import"./index.f170d56c.js";import"./htmlmixed.9b0e93d2.js";import"./vue.94c7f829.js";import"./depart.api.cb5ba1c2.js";import"./JUpload.a8971a82.js";import"./functional.4d9308b0.js";import"./index.410f2d77.js";import"./EditOutlined.ebbc06a3.js";import"./useForm.0a8b633b.js";import"./data.80eca3ac.js";import"./useContentViewHeight.183e9878.js";const z=D({name:"FormStepPage",components:{Step1:w,Step2:V,Step3:W,PageWrapper:b,[u.name]:u,[u.Step.name]:u.Step},setup(){const e=R(0),t=y({initSetp2:!1,initSetp3:!1});function o(n){e.value++,t.initSetp2=!0,console.log(n)}function c(){e.value--}function l(n){e.value++,t.initSetp3=!0,console.log(n)}function d(){e.value=0,t.initSetp2=!1,t.initSetp3=!1}return f({current:e,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},$(t))}}),G={class:"step-form-form"},I={class:"mt-5"};function M(e,t,o,c,l,d){const n=p("a-step"),F=p("a-steps"),C=p("Step1"),N=p("Step2"),E=p("Step3"),P=p("PageWrapper");return i(),a(P,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",content:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",contentClass:"p-4"},{default:v(()=>[h("div",G,[r(F,{current:e.current},{default:v(()=>[r(n,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),r(n,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),r(n,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),h("div",I,[s(r(C,{onNext:e.handleStep1Next},null,8,["onNext"]),[[m,e.current===0]]),e.initSetp2?s((i(),a(N,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[m,e.current===1]]):B("",!0),e.initSetp3?s((i(),a(E,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[m,e.current===2]]):B("",!0)])]),_:1})}var ge=x(z,[["render",M],["__scopeId","data-v-e720d3a8"]]);export{ge as default};