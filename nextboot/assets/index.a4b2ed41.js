var ot=Object.defineProperty,at=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var st=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var I=(t,e,o)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,j=(t,e)=>{for(var o in e||(e={}))st.call(e,o)&&I(t,o,e[o]);if(G)for(var o of G(e))it.call(e,o)&&I(t,o,e[o]);return t},L=(t,e)=>at(t,nt(e));var V=(t,e,o)=>new Promise((i,d)=>{var C=u=>{try{g(o.next(u))}catch(p){d(p)}},f=u=>{try{g(o.throw(u))}catch(p){d(p)}},g=u=>u.done?i(u.value):Promise.resolve(u.value).then(C,f);g((o=o.apply(t,e)).next())});import{p as s,s as lt,a0 as K,a as X,bN as R,dZ as A,bc as U,b as J,z as N,f as k,X as rt,a1 as Z,aE as ct,j as B,U as r,o as m,k as b,G as l,i as E,a9 as Y,a2 as pt,n as P,J as O,t as T,l as D,N as M,r as Q,B as x,bn as tt,eE as dt,d6 as mt,dC as W,e9 as gt,y as yt,u as Ft,bj as ft,C as vt,ad as Et,ak as Ct}from"./index.6cf4d174.js";import"./index.5f5b90b9.js";import{T as bt}from"./index.410f2d77.js";import{T as _t}from"./Title.29d26cf3.js";import Dt from"./DetailModal.b9424082.js";import Bt from"./DynamicNotice.6b34ab3d.js";import"./index.f8f2ddf0.js";import{r as ht}from"./mynews.api.fc2b67e2.js";import"./EditOutlined.ebbc06a3.js";import"./CopyOutlined.dabd5b4b.js";import"./BasicModal.45214da2.js";import"./useWindowSizeFn.99e468e7.js";var At={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"},kt=At;function H(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(d){return Object.getOwnPropertyDescriptor(o,d).enumerable}))),i.forEach(function(d){wt(t,d,o[d])})}return t}function wt(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var z=function(e,o){var i=H({},e,o.attrs);return s(lt,H({},i,{icon:kt}),null)};z.displayName="BellOutlined";z.inheritAttrs=!1;var St=z,et=(t=>(t.L="L",t.M="M",t.H="H",t))(et||{});const Nt=[{key:"1",name:"\u901A\u77E5",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u81EA\u52A8\u663E\u793A\u7701\u7565\u53F7\uFF0C\u672C\u4F8B\u4E2D\u6807\u9898\u884C\u6570\u5DF2\u8BBE\u4E3A1\u884C\uFF0C\u5982\u679C\u5185\u5BB9\u8D85\u8FC71\u884C\u5C06\u81EA\u52A8\u622A\u65AD\u5E76\u652F\u6301tooltip\u663E\u793A\u5B8C\u6574\u6807\u9898\u3002",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2017-08-07",type:"1"}],count:0},{key:"2",name:"\u7CFB\u7EDF\u6D88\u606F",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",description:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6731\u504F\u53F3 \u56DE\u590D\u4E86\u4F60",description:"\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6807\u9898",description:"\u8BF7\u5C06\u9F20\u6807\u79FB\u52A8\u5230\u6B64\u5904\uFF0C\u4EE5\u4FBF\u6D4B\u8BD5\u8D85\u957F\u7684\u6D88\u606F\u5728\u6B64\u5904\u5C06\u5982\u4F55\u5904\u7406\u3002\u672C\u4F8B\u4E2D\u8BBE\u7F6E\u7684\u63CF\u8FF0\u6700\u5927\u884C\u6570\u4E3A2\uFF0C\u8D85\u8FC72\u884C\u7684\u63CF\u8FF0\u5185\u5BB9\u5C06\u88AB\u7701\u7565\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7tooltip\u67E5\u770B\u5B8C\u6574\u5185\u5BB9",datetime:"2017-08-07",type:"2",clickClose:!0}],count:0}],Tt=t=>K.get({url:"/sys/annountCement/listByUser",params:t}),Ot=(t,e)=>K.put({url:"/sys/sysAnnouncementSend/editByAnntIdAndUserId",params:j({anntId:t},e)});const jt=X({components:{[R.name]:R,[A.name]:A,[A.Item.name]:A.Item,AListItemMeta:A.Item.Meta,ATypographyParagraph:_t.Paragraph,[U.name]:U,Time:bt},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:1},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(t,{emit:e}){const{prefixCls:o}=J("header-notify-list"),i=N(t.currentPage||1),d=k(()=>{const{pageSize:u,list:p}=t;if(u===!1)return[];let F=ct(u)?u:5;return p.slice(F*(B(i)-1),F*B(i))});rt(()=>t.currentPage,u=>{i.value=u});const C=k(()=>!!t.onTitleClick),f=k(()=>{const{list:u,pageSize:p}=t;return p>0&&u&&u.length>p?{total:u.length,pageSize:p,current:B(i),onChange(F){i.value=F,e("update:currentPage",F)}}:!1});function g(u){t.onTitleClick&&t.onTitleClick(u)}return{prefixCls:o,getPagination:f,getData:d,handleTitleClick:g,isTitleClickable:C,PriorityTypes:et}}}),Pt={class:"title"},Mt={key:0,class:"extra"},$t={key:2},zt={key:0,class:"description"},Gt={class:"datetime"};function It(t,e,o,i,d,C){const f=r("a-typography-paragraph"),g=r("a-tag"),u=r("a-avatar"),p=r("Icon"),F=r("Time"),v=r("a-list-item-meta"),_=r("a-list-item"),h=r("a-list");return m(),b(h,{class:Q(t.prefixCls),pagination:t.getPagination},{default:l(()=>[(m(!0),E(M,null,Y(t.getData,n=>(m(),b(_,{key:n.id,class:"list-item",onClick:w=>t.handleTitleClick(n),style:pt({cursor:t.isTitleClickable?"pointer":""})},{default:l(()=>[s(v,null,{title:l(()=>[P("div",Pt,[s(f,{style:{width:"100%","margin-bottom":"0 !important"},delete:!!n.titleDelete,ellipsis:t.$props.titleRows&&t.$props.titleRows>0?{rows:t.$props.titleRows,tooltip:!!n.title}:!1,content:n.title},null,8,["delete","ellipsis","content"]),n.extra?(m(),E("div",Mt,[s(g,{class:"tag",color:n.color},{default:l(()=>[O(T(n.extra),1)]),_:2},1032,["color"])])):D("",!0)])]),avatar:l(()=>[n.avatar?(m(),b(u,{key:0,class:"avatar",src:n.avatar},null,8,["src"])):n.priority?(m(),E(M,{key:1},[n.priority===t.PriorityTypes.L?(m(),b(u,{key:0,class:"avatar priority-L",title:"\u4E00\u822C\u6D88\u606F"},{icon:l(()=>[s(p,{icon:"entypo:info"})]),_:1})):D("",!0),n.priority===t.PriorityTypes.M?(m(),b(u,{key:1,class:"avatar priority-M",title:"\u91CD\u8981\u6D88\u606F"},{icon:l(()=>[s(p,{icon:"bi:exclamation-lg"})]),_:1})):D("",!0),n.priority===t.PriorityTypes.H?(m(),b(u,{key:2,class:"avatar priority-H",title:"\u7D27\u6025\u6D88\u606F"},{icon:l(()=>[s(p,{icon:"ant-design:warning-filled"})]),_:1})):D("",!0)],64)):(m(),E("span",$t,T(n.avatar),1))]),description:l(()=>[P("div",null,[n.description?(m(),E("div",zt,[s(f,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:t.$props.descRows&&t.$props.descRows>0?{rows:t.$props.descRows,tooltip:!!n.description}:!1,content:n.description},null,8,["ellipsis","content"])])):D("",!0),P("div",Gt,[s(F,{value:n.datetime,title:n.datetime},null,8,["value","title"])])])]),_:2},1024)]),_:2},1032,["onClick","style"]))),128))]),_:1},8,["class","pagination"])}var Lt=Z(jt,[["render",It],["__scopeId","data-v-38a0ffe3"]]);const q=x({server:"",sendValue:"",recordList:[]}),S=N(),$=new Map;function Vt(t){if(!B(qt)){q.server=t,tt(),S.value=dt(q.server,{autoReconnect:!0,heartbeat:!1}),S.value.open();const e=B(S.value.ws);e&&(e.onopen=Rt,e.onclose=Ut,e.onerror=Wt,e.onmessage=Ht)}}function Rt(){console.log("[WebSocket] \u8FDE\u63A5\u6210\u529F")}function Ut(t){console.log("[WebSocket] \u8FDE\u63A5\u65AD\u5F00\uFF1A",t)}function Wt(t){console.log("[WebSocket] \u8FDE\u63A5\u53D1\u751F\u9519\u8BEF: ",t)}function Ht(t){if(t.data!=="ping"){console.debug("[WebSocket] -----\u63A5\u6536\u6D88\u606F-------",t.data);try{const e=JSON.parse(t.data);for(const o of $.keys())try{o(e)}catch(i){console.error(i)}}catch(e){console.error("[WebSocket] data\u89E3\u6790\u5931\u8D25\uFF1A",e)}}}const qt=k(()=>{var t;return((t=S.value)==null?void 0:t.status.value)==="OPEN"});function Kt(t){$.has(t)||(typeof t=="function"?$.set(t,null):console.debug("[WebSocket] \u6DFB\u52A0 WebSocket \u6D88\u606F\u76D1\u542C\u5931\u8D25\uFF1A\u4F20\u5165\u7684\u53C2\u6570\u4E0D\u662F\u4E00\u4E2A\u65B9\u6CD5"))}const Xt=X({components:{Popover:mt,BellOutlined:St,Tabs:W,TabPane:W.TabPane,Badge:gt,NoticeList:Lt,DetailModal:Dt,DynamicNotice:Bt},setup(){const{prefixCls:t}=J("header-notify"),e=Ct(),o=yt(),i=Ft(),d=x({path:"",formData:{}}),[C,f]=ft(),g=N(!1),u=N(Nt);u.value[0].list=[],u.value[1].list=[],u.value[0].count=0,u.value[1].count=0,vt(()=>{h()});const p=k(()=>{let a=0;for(let c=0;c<u.value.length;c++)a+=u.value[c].count;return a});function F(a){return L(j({},a),{title:a.titile,description:a.msgAbstract,datetime:a.sendTime})}function v(){return V(this,null,function*(){try{let{anntMsgList:a,sysMsgList:c,anntMsgTotal:y,sysMsgTotal:ut}=yield Tt({pageSize:5});u.value[0].list=a.map(F),u.value[1].list=c.map(F),u.value[0].count=y,u.value[1].count=ut}catch(a){console.warn("\u7CFB\u7EDF\u6D88\u606F\u901A\u77E5\u5F02\u5E38\uFF1A",a)}})}v();function _(a){var c;try{Ot(a.id),v()}catch(y){console.error(y)}a.openType==="component"?(d.path=a.openPage,d.formData={id:a.busId},(c=e.refs.dynamicNoticeRef)==null||c.detail(a.openPage)):f.openModal(!0,{record:a,isUpdate:!0}),g.value=!1}function h(){let a=B(o.getUserInfo).id;tt();let c="";new RegExp("^((ht|f)tps?):\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+([\\w\\-.,@?^=%&:\\/~+#]*[\\w\\-@?^=%&\\/~+#])?$").test(i.domainUrl)?c=i.domainUrl:c=location.origin+i.domainUrl,c=(c==null?void 0:c.replace("https://","wss://").replace("http://","ws://"))+"/websocket/"+a,Vt(c),Kt(n)}function n(a){(a.cmd==="topic"||a.cmd==="user")&&v()}function w(){g.value=!1,ht({},v)}return{prefixCls:t,listData:u,count:p,onNoticeClick:_,onEmptyNotify:w,numberStyle:{},popoverVisible:g,registerDetail:C,dynamicNoticeProps:d}}}),Jt={key:0},Zt=O("\u6E05\u7A7A\u6D88\u606F"),Yt=O("\u67E5\u770B\u66F4\u591A");function Qt(t,e,o,i,d,C){const f=r("BellOutlined"),g=r("Badge"),u=r("NoticeList"),p=r("TabPane"),F=r("Tabs"),v=r("a-button"),_=r("a-col"),h=r("router-link"),n=r("a-row"),w=r("Popover"),a=r("DynamicNotice"),c=r("DetailModal");return m(),E("div",{class:Q(t.prefixCls)},[s(w,{visible:t.popoverVisible,"onUpdate:visible":e[1]||(e[1]=y=>t.popoverVisible=y),title:"",trigger:"click",overlayClassName:`${t.prefixCls}__overlay`},{content:l(()=>[s(F,null,{default:l(()=>[(m(!0),E(M,null,Y(t.listData,y=>(m(),b(p,{key:y.key},{tab:l(()=>[O(T(y.name)+" ",1),y.list.length!==0?(m(),E("span",Jt,"("+T(y.count)+")",1)):D("",!0)]),default:l(()=>[s(u,{list:y.list,onTitleClick:t.onNoticeClick},null,8,["list","onTitleClick"])]),_:2},1024))),128))]),_:1}),s(n,{class:"bottom-buttons"},{default:l(()=>[s(_,{span:t.count===0?0:12},{default:l(()=>[s(v,{onClick:t.onEmptyNotify,type:"dashed",block:""},{default:l(()=>[Zt]),_:1},8,["onClick"])]),_:1},8,["span"]),s(_,{span:t.count===0?24:12},{default:l(()=>[s(v,{onClick:e[0]||(e[0]=y=>t.popoverVisible=!1),type:"dashed",block:""},{default:l(()=>[s(h,{to:"/monitor/mynews"},{default:l(()=>[Yt]),_:1})]),_:1})]),_:1},8,["span"])]),_:1})]),default:l(()=>[s(g,{count:t.count,overflowCount:9,offset:[-4,10],numberStyle:t.numberStyle},{default:l(()=>[s(f)]),_:1},8,["count","numberStyle"])]),_:1},8,["visible","overlayClassName"]),s(a,Et({ref:"dynamicNoticeRef"},t.dynamicNoticeProps),null,16),s(c,{onRegister:t.registerDetail},null,8,["onRegister"])],2)}var de=Z(Xt,[["render",Qt]]);export{de as default};
