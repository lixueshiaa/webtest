var _=(d,u,a)=>new Promise((r,e)=>{var f=t=>{try{l(a.next(t))}catch(s){e(s)}},c=t=>{try{l(a.throw(t))}catch(s){e(s)}},l=t=>t.done?r(t.value):Promise.resolve(t.value).then(f,c);l((a=a.apply(d,u)).next())});import{a as w,z as g,B as y,C as x,bG as R,U as m,o as C,k as D,G as p,p as i}from"./index.9eb451d3.js";import{J as E}from"./JDictSelectTag.3b1f5a5e.js";import"./useFormItem.b38dda7e.js";const M=w({__name:"changeStatus",props:{data:{type:Object},dialogVisible:{type:Boolean,default:!0}},emits:["finish","cancel"],setup(d,{emit:u}){const a=d,r=g([]),e=y({status:"",sysRemark:""}),f=y({status:[{required:!0,message:"\u8BF7\u9009\u62E9\u89E3\u51B3\u72B6\u6001",trigger:"change"}]}),c=g(),l=()=>_(this,null,function*(){c.value.validate().then(()=>{u("finish",e)})}),t=()=>{u("cancel")};return x(()=>_(this,null,function*(){const s=yield R("feedbackResolutionStatus");r.value=s.filter(o=>o.value!=="1")})),(s,o)=>{var b;const v=m("a-form-item"),B=m("a-textarea"),k=m("a-form"),h=m("LowModal");return C(),D(h,{visible:a.dialogVisible,"onUpdate:visible":o[2]||(o[2]=n=>a.dialogVisible=n),width:"80%",title:(b=a.data)==null?void 0:b.dialogTitle,onFinish:l,onCancel:t},{default:p(()=>[i(k,{ref_key:"formRef",ref:c,model:e,rules:f,"label-col":{style:{width:"150px"}},"wrapper-col":{span:18}},{default:p(()=>[i(v,{label:"\u89E3\u51B3\u72B6\u6001",name:"status"},{default:p(()=>[i(E,{value:e.status,"onUpdate:value":o[0]||(o[0]=n=>e.status=n),options:r.value,type:"radio"},null,8,["value","options"])]),_:1}),i(v,{label:"\u5907\u6CE8",name:"sysRemark"},{default:p(()=>[i(B,{value:e.sysRemark,"onUpdate:value":o[1]||(o[1]=n=>e.sysRemark=n),placeholder:"\u8BF7\u8F93\u5165",maxlength:500},null,8,["value"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["visible","title"])}}});export{M as default};
