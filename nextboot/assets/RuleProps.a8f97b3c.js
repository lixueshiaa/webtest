import{c}from"./index.621d2b74.js";import{u as $}from"./useFormDesignState.05bb439b.js";import{a1 as f,a as i,F as x,fa as _,I as Z,b6 as I,z as g,U as F,o,i as s,k as z,G as n,N,a9 as P,p as t,l as H,n as J,f3 as h,J as k}from"./index.9eb451d3.js";import{A as w}from"./index.5df19bc8.js";const b=i({name:"RuleProps",components:{Form:x,FormItem:_,AutoComplete:w,Input:Z,Icon:I},setup(){const{formConfig:u}=$(),l=()=>{var a;h(u.value.currentItem.rules)||(u.value.currentItem.rules=[]),(a=u.value.currentItem.rules)==null||a.push({pattern:"",message:""})},d=a=>{var r;c(u.value.currentItem.rules,a),((r=u.value.currentItem.rules)==null?void 0:r.length)===0&&delete u.value.currentItem.rules},A=g([{value:"/^(?:(?:\\+|00)86)?1[3-9]\\d{9}$/",text:"\u624B\u673A\u53F7\u7801"},{value:"/^((ht|f)tps?:\\/\\/)?[\\w-]+(\\.[\\w-]+)+:\\d{1,5}\\/?$/",text:"\u7F51\u5740\u5E26\u7AEF\u53E3\u53F7"},{value:"/^(((ht|f)tps?):\\/\\/)?[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&:/~+#-\\(\\)]*[\\w@?^=%&/~+#-\\(\\)])?$/",text:"\u7F51\u5740\u5E26\u53C2\u6570"},{value:"/^[0-9A-HJ-NPQRTUWXY]{2}\\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/",text:"\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801"},{value:"/^(s[hz]|S[HZ])(000[\\d]{3}|002[\\d]{3}|300[\\d]{3}|600[\\d]{3}|60[\\d]{4})$/",text:"\u80A1\u7968\u4EE3\u7801"},{value:"/^([a-f\\d]{32}|[A-F\\d]{32})$/",text:"md5\u683C\u5F0F\uFF0832\u4F4D\uFF09"},{value:"/^[a-f\\d]{4}(?:[a-f\\d]{4}-){4}[a-f\\d]{12}$/i",text:"GUID/UUID"},{value:"/^\\d+(?:\\.\\d+){2}$/",text:"\u7248\u672C\u53F7\uFF08x.y.z\uFF09\u683C\u5F0F"},{value:"/^https?:\\/\\/(.+\\/)+.+(\\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i",text:"\u89C6\u9891\u94FE\u63A5\u5730\u5740"},{value:"/^https?:\\/\\/(.+\\/)+.+(\\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i",text:"\u56FE\u7247\u94FE\u63A5\u5730\u5740"},{value:"/^-?\\d+(,\\d{3})*(\\.\\d{1,2})?$/",text:"\u6570\u5B57/\u8D27\u5E01\u91D1\u989D\uFF08\u652F\u6301\u8D1F\u6570\u3001\u5343\u5206\u4F4D\u5206\u9694\u7B26\uFF09"},{value:"/(?:^[1-9]([0-9]+)?(?:\\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\\.[0-9](?:[0-9])?$)/",text:"\u6570\u5B57/\u8D27\u5E01\u91D1\u989D"},{value:"/^[1-9]\\d{9,29}$/",text:"\u94F6\u884C\u5361\u53F7"},{value:"/^(?:[\u4E00-\u9FA5\xB7]{2,16})$/",text:"\u4E2D\u6587\u59D3\u540D"},{value:"/(^[a-zA-Z][a-zA-Z\\s]{0,20}[a-zA-Z]$)/",text:"\u82F1\u6587\u59D3\u540D"},{value:"/^[\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743C\u4F7F\u9886][A-HJ-NP-Z](?:((\\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9\u6302\u5B66\u8B66\u6E2F\u6FB3])$/",text:"\u8F66\u724C\u53F7(\u65B0\u80FD\u6E90)"},{value:"/^[\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743C\u4F7F\u9886][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9\u6302\u5B66\u8B66\u6E2F\u6FB3]$/",text:"\u8F66\u724C\u53F7(\u975E\u65B0\u80FD\u6E90)"},{value:"/^[\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743C\u4F7F\u9886][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9\u6302\u5B66\u8B66\u6E2F\u6FB3]$/",text:"\u8F66\u724C\u53F7(\u65B0\u80FD\u6E90+\u975E\u65B0\u80FD\u6E90)"},{value:'/^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/',text:"email(\u90AE\u7BB1)"},{value:"/^(?:(?:\\d{3}-)?\\d{8}|^(?:\\d{4}-)?\\d{7,8})(?:-\\d+)?$/",text:"\u5EA7\u673A"},{value:"/^[1-9]\\d{5}(?:18|19|20)\\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\\d|30|31)\\d{3}[\\dXx]$/",text:"\u8EAB\u4EFD\u8BC1\u53F7"},{value:"/(^[EeKkGgDdSsPpHh]\\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\\d{7}$)/",text:"\u62A4\u7167"},{value:"/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/",text:"\u4E2D\u6587\u6C49\u5B57"},{value:"/^\\d+\\.\\d+$/",text:"\u5C0F\u6570"},{value:"/^\\d{1,}$/",text:"\u6570\u5B57"},{value:"/^[1-9][0-9]{4,10}$/",text:"qq\u53F7"},{value:"/^[A-Za-z0-9]+$/",text:"\u6570\u5B57\u5B57\u6BCD\u7EC4\u5408"},{value:"/^[a-zA-Z]+$/",text:"\u82F1\u6587\u5B57\u6BCD"},{value:"/^[a-z]+$/",text:"\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD"},{value:"/^[A-Z]+$/",text:"\u5927\u5199\u82F1\u6587\u5B57\u6BCD"},{value:"/^[a-zA-Z0-9_-]{4,16}$/",text:"\u7528\u6237\u540D\u6821\u9A8C\uFF0C4\u523016\u4F4D\uFF08\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u4E0B\u5212\u7EBF\uFF0C\u51CF\u53F7\uFF09"},{value:"/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/",text:"16\u8FDB\u5236\u989C\u8272"},{value:"/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/",text:"\u5FAE\u4FE1\u53F7"},{value:"/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\\d{4}$/",text:"\u90AE\u653F\u7F16\u7801(\u4E2D\u56FD)"},{value:"/^[^A-Za-z]*$/",text:"\u4E0D\u80FD\u5305\u542B\u5B57\u6BCD"},{value:"/^\\+?[1-9]\\d*$/",text:"\u6B63\u6574\u6570\uFF0C\u4E0D\u5305\u542B0"},{value:"/^-[1-9]\\d*$/",text:"\u8D1F\u6574\u6570\uFF0C\u4E0D\u5305\u542B0"},{value:"/^-?[0-9]\\d*$/",text:"\u6574\u6570"},{value:"/^(-?\\d+)(\\.\\d+)?$/",text:"\u6D6E\u70B9\u6570"},{value:"/^[A-Za-z0-9\u4E00-\u9FA5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/",text:"email(\u652F\u6301\u4E2D\u6587\u90AE\u7BB1)"}]);return{addRules:l,removeRule:d,formConfig:u,patternDataSource:A}}}),R={class:"rule-props-content"},U=k(" \u6DFB\u52A0\u6B63\u5219 ");function S(u,l,d,A,a,r){const C=F("Icon"),p=F("AutoComplete"),B=F("FormItem"),v=F("Input"),m=F("Form");return o(),s("div",R,[u.formConfig.currentItem&&u.formConfig.currentItem.rules?(o(),z(m,{key:0},{default:n(()=>[(o(!0),s(N,null,P(u.formConfig.currentItem.rules,(e,E)=>(o(),s("div",{key:E,class:"rule-props-item"},[t(C,{icon:"ant-design:close-circle-filled",class:"rule-props-item-close",onClick:D=>u.removeRule(E)},null,8,["onClick"]),t(B,{label:"\u6B63\u5219",labelCol:{span:6},wrapperCol:{span:16}},{default:n(()=>[t(p,{value:e.pattern,"onUpdate:value":D=>e.pattern=D,placeholder:"\u8BF7\u8F93\u5165\u6B63\u5219\u8868\u8FBE\u5F0F",dataSource:u.patternDataSource},null,8,["value","onUpdate:value","dataSource"])]),_:2},1024),t(B,{label:"\u6587\u6848",labelCol:{span:6},wrapperCol:{span:16}},{default:n(()=>[t(v,{value:e.message,"onUpdate:value":D=>e.message=D,placeholder:"\u8BF7\u8F93\u5165\u63D0\u793A\u6587\u6848"},null,8,["value","onUpdate:value"])]),_:2},1024)]))),128))]),_:1})):H("",!0),J("a",{onClick:l[0]||(l[0]=(...e)=>u.addRules&&u.addRules(...e))},[t(C,{icon:"ant-design:file-add-outlined"}),U])])}var G=f(b,[["render",S],["__scopeId","data-v-73bf6b64"]]);export{G as default};
