import{a1 as k,a as b,dz as h,dc as v,b as R,dv as M,y as T,cn as A,U as u,o as O,i as x,p as a,G as d,J as p,t as g,r as $,c as j,ez as z,j as S,dA as f,g3 as B,g4 as F,T as N}from"./index.0c676cb0.js";import{C as P}from"./CopyOutlined.86fab0c5.js";const w=b({name:"SettingFooter",components:{CopyOutlined:P,RedoOutlined:h},setup(){const e=v(),{prefixCls:c}=R("setting-footer"),{t:o}=j(),{createSuccessModal:l,createMessage:r}=N(),i=M(),n=T(),t=A();function C(){const{isSuccessRef:s}=z(JSON.stringify(S(t.getProjectConfig),null,2));S(s)&&l({title:o("layout.setting.operatingTitle"),content:o("layout.setting.operatingContent")})}function _(){try{t.setProjectConfig(f);const{colorWeak:s,grayMode:y}=f;B(s),F(y),r.success(o("layout.setting.resetSuccess"))}catch(s){r.error(s)}}function m(){localStorage.clear(),t.resetAllState(),e.resetState(),i.resetState(),n.resetState(),location.reload()}return{prefixCls:c,t:o,handleCopy:C,handleResetSetting:_,handleClearAndRedo:m}}});function D(e,c,o,l,r,i){const n=u("RedoOutlined"),t=u("a-button");return O(),x("div",{class:$(e.prefixCls)},[a(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:d(()=>[a(n,{class:"mr-2"}),p(" "+g(e.t("common.resetText")),1)]),_:1},8,["onClick"]),a(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:d(()=>[a(n,{class:"mr-2"}),p(" "+g(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var J=k(w,[["render",D],["__scopeId","data-v-c00542c8"]]);export{J as default};
