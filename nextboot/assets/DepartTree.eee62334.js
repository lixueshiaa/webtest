var _=(h,p,l)=>new Promise((r,n)=>{var d=t=>{try{c(l.next(t))}catch(u){n(u)}},i=t=>{try{c(l.throw(t))}catch(u){n(u)}},c=t=>t.done?r(t.value):Promise.resolve(t.value).then(d,i);c((l=l.apply(h,p)).next())});import{a as C,b4 as N,z as o,U as E,o as f,i as g,p as S,G as P,j as s,N as b,k as x,l as F,an as k,T as M}from"./index.d537950e.js";import{_ as j}from"./Tree.vue_vue_type_style_index_0_lang.b76a1360.js";import{q,s as L}from"./depart.user.api.f4af898c.js";import"./useContextMenu.7a70fb68.js";const R={class:"bg-white m-4 mr-0 overflow-hidden"},W=C({__name:"DepartTree",emits:["select"],setup(h,{emit:p}){N("prefixCls");const{createMessage:l}=M();let r=o(!1),n=o([]),d=o([]),i=o([]),c=o(!0),t=o("2"),u=o(!1);function v(){r.value=!0,n.value=[],q().then(e=>{e.success?Array.isArray(e.result)&&(n.value=e.result,t.value=e.message,w()):l.warning(e.message)}).finally(()=>r.value=!1)}v();function w(){let e=[];n.value.forEach((a,m)=>{a.children&&a.children.length>0&&e.push(a.key),m===0&&y(a.id,a)}),e.length>0&&(D(),d.value=e)}function D(){return _(this,null,function*(){yield k(),u.value=!0,yield k(),u.value=!1})}function y(e,a){i.value=[e],a&&p("select",a)}function T(e){e?(r.value=!0,L({keyWord:e,myDeptSearch:"1"}).then(a=>{Array.isArray(a)?n.value=a:(l.warning("\u672A\u67E5\u8BE2\u5230\u90E8\u95E8\u4FE1\u606F"),n.value=[])}).finally(()=>r.value=!1)):v()}function A(e,a){e.length>0&&i.value[0]!==e[0]?y(e[0],a.selectedNodes[0].props):y(i.value[0])}function B(e){d.value=e,c.value=!1}return(e,a)=>{const m=E("a-empty"),K=E("a-spin");return f(),g("div",R,[S(K,{spinning:s(r)},{default:P(()=>[s(t)==="2"?(f(),g(b,{key:0},[s(u)?F("",!0):(f(),x(s(j),{key:0,title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",showLine:"",checkStrictly:!0,clickRowToExpand:!1,treeData:s(n),selectedKeys:s(i),expandedKeys:s(d),autoExpandParent:s(c),onSelect:A,onExpand:B,onSearch:T},null,8,["treeData","selectedKeys","expandedKeys","autoExpandParent"]))],64)):(f(),x(m,{key:1,description:"\u666E\u901A\u5458\u5DE5\u65E0\u6B64\u6743\u9650"}))]),_:1},8,["spinning"])])}}});export{W as default};
