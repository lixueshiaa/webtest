var ce=Object.defineProperty;var F=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var w=(e,t,_)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:_}):e[t]=_,H=(e,t)=>{for(var _ in t||(t={}))Ae.call(t,_)&&w(e,_,t[_]);if(F)for(var _ of F(t))Ne.call(t,_)&&w(e,_,t[_]);return e};import{B as Re,u as Ie}from"./index.cd36df4e.js";import{bl as l,bm as u,dx as f,fZ as x,f_ as h,f$ as O,cX as D,cY as A,g0 as X,c as $,dq as C,cn as V,g1 as Y,g2 as v,cx as Q,g3 as De,g4 as pe,g5 as Ce,g6 as Le,a as j,dD as de,c_ as Ue,f as fe,p as n,j as i,L as g,m as he,ad as ye,N as y,g7 as be,g8 as Be,g9 as Ge,a1 as We,b6 as Pe,U as k,o as me,i as Fe}from"./index.9eb451d3.js";import{u as we}from"./index.54889d3e.js";import{u as He}from"./index.4d444d22.js";const xe=l(()=>u(()=>import("./TypePicker.5ae16f90.js"),["assets/TypePicker.5ae16f90.js","assets/TypePicker.d0eac2cb.css","assets/index.9eb451d3.js","assets/index.e4e4276c.css"])),b=l(()=>u(()=>import("./ThemeColorPicker.524b18e8.js"),["assets/ThemeColorPicker.524b18e8.js","assets/ThemeColorPicker.777c5d34.css","assets/index.9eb451d3.js","assets/index.e4e4276c.css","assets/index.cd36df4e.js","assets/index.a8aed5d1.css","assets/index.54889d3e.js","assets/index.9fdbc348.css","assets/BasicModal.a7306b6e.js","assets/BasicModal.775d7efe.css","assets/useWindowSizeFn.ed181042.js","assets/LoginSelect.f15ae7fe.js","assets/LoginSelect.422c94b1.css","assets/index.9788db2e.js","assets/index.2c969e9f.css","assets/index.4d444d22.js","assets/index.ee68660b.css","assets/index.4ed9b2fb.js","assets/index.6cce9c65.css","assets/useContentViewHeight.0d594355.js","assets/useSortable.043e591f.js","assets/lock.dc5acb4d.js"])),Xe=l(()=>u(()=>import("./SettingFooter.50a7ced8.js"),["assets/SettingFooter.50a7ced8.js","assets/SettingFooter.2c5d9fda.css","assets/index.9eb451d3.js","assets/index.e4e4276c.css","assets/CopyOutlined.50a5a248.js"])),E=l(()=>u(()=>import("./SwitchItem.f74aefc2.js"),["assets/SwitchItem.f74aefc2.js","assets/SwitchItem.c411fef0.css","assets/index.9eb451d3.js","assets/index.e4e4276c.css","assets/index.cd36df4e.js","assets/index.a8aed5d1.css","assets/index.54889d3e.js","assets/index.9fdbc348.css","assets/BasicModal.a7306b6e.js","assets/BasicModal.775d7efe.css","assets/useWindowSizeFn.ed181042.js","assets/LoginSelect.f15ae7fe.js","assets/LoginSelect.422c94b1.css","assets/index.9788db2e.js","assets/index.2c969e9f.css","assets/index.4d444d22.js","assets/index.ee68660b.css","assets/index.4ed9b2fb.js","assets/index.6cce9c65.css","assets/useContentViewHeight.0d594355.js","assets/useSortable.043e591f.js","assets/lock.dc5acb4d.js"])),p=l(()=>u(()=>import("./SelectItem.cd697638.js"),["assets/SelectItem.cd697638.js","assets/SelectItem.2f5cb231.css","assets/index.9eb451d3.js","assets/index.e4e4276c.css","assets/index.cd36df4e.js","assets/index.a8aed5d1.css","assets/index.54889d3e.js","assets/index.9fdbc348.css","assets/BasicModal.a7306b6e.js","assets/BasicModal.775d7efe.css","assets/useWindowSizeFn.ed181042.js","assets/LoginSelect.f15ae7fe.js","assets/LoginSelect.422c94b1.css","assets/index.9788db2e.js","assets/index.2c969e9f.css","assets/index.4d444d22.js","assets/index.ee68660b.css","assets/index.4ed9b2fb.js","assets/index.6cce9c65.css","assets/useContentViewHeight.0d594355.js","assets/useSortable.043e591f.js","assets/lock.dc5acb4d.js"])),K=l(()=>u(()=>import("./InputNumberItem.a5aae162.js"),["assets/InputNumberItem.a5aae162.js","assets/InputNumberItem.d682a4f6.css","assets/index.9eb451d3.js","assets/index.e4e4276c.css","assets/index.cd36df4e.js","assets/index.a8aed5d1.css","assets/index.54889d3e.js","assets/index.9fdbc348.css","assets/BasicModal.a7306b6e.js","assets/BasicModal.775d7efe.css","assets/useWindowSizeFn.ed181042.js","assets/LoginSelect.f15ae7fe.js","assets/LoginSelect.422c94b1.css","assets/index.9788db2e.js","assets/index.2c969e9f.css","assets/index.4d444d22.js","assets/index.ee68660b.css","assets/index.4ed9b2fb.js","assets/index.6cce9c65.css","assets/useContentViewHeight.0d594355.js","assets/useSortable.043e591f.js","assets/lock.dc5acb4d.js"])),{t:r}=$();var o=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.TABS_THEME=25]="TABS_THEME",e[e.LOCK_TIME=26]="LOCK_TIME",e[e.FULL_CONTENT=27]="FULL_CONTENT",e[e.CONTENT_MODE=28]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=29]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=30]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=31]="GRAY_MODE",e[e.COLOR_WEAK=32]="COLOR_WEAK",e[e.SHOW_LOGO=33]="SHOW_LOGO",e[e.SHOW_FOOTER=34]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=35]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=36]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=37]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=38]="OPEN_ROUTE_TRANSITION",e))(o||{});const ke=[{value:f.SMOOTH,label:r("layout.setting.tabsThemeSmooth")},{value:f.CARD,label:r("layout.setting.tabsThemeCard")},{value:f.SIMPLE,label:r("layout.setting.tabsThemeSimple")}],Ke=[{value:x.FULL,label:r("layout.setting.contentModeFull")},{value:x.FIXED,label:r("layout.setting.contentModeFixed")}],$e=[{value:h.CENTER,label:r("layout.setting.topMenuAlignRight")},{value:h.START,label:r("layout.setting.topMenuAlignLeft")},{value:h.END,label:r("layout.setting.topMenuAlignCenter")}],Ve=e=>[{value:C.NONE,label:r("layout.setting.menuTriggerNone")},{value:C.FOOTER,label:r("layout.setting.menuTriggerBottom")},...e?[]:[{value:C.HEADER,label:r("layout.setting.menuTriggerTop")}]];[O.ZOOM_FADE,O.FADE,O.ZOOM_OUT,O.FADE_SIDE,O.FADE_BOTTOM,O.FADE_SCALE].map(e=>({label:e,value:e}));const Ye=[{title:r("layout.setting.menuTypeSidebar"),mode:D.INLINE,type:A.SIDEBAR},{title:r("layout.setting.menuTypeMix"),mode:D.INLINE,type:A.MIX},{title:r("layout.setting.menuTypeTopMenu"),mode:D.HORIZONTAL,type:A.TOP_MENU},{title:r("layout.setting.menuTypeMixSidebar"),mode:D.INLINE,type:A.MIX_SIDEBAR}];X.HOVER,r("layout.setting.triggerHover"),X.CLICK,r("layout.setting.triggerClick");function ve(e,t){const _=V(),a=Qe(e,t);_.setProjectConfig(a),e===o.CHANGE_THEME&&(Y(),v())}function Qe(e,t){const _=V(),{getThemeColor:a,getDarkMode:N}=Q();switch(e){case o.CHANGE_LAYOUT:const{mode:L,type:R,split:M}=t;return{menuSetting:H({mode:L,type:R,collapsed:!1,show:!0,hidden:!1},M===void 0?{split:M}:{})};case o.CHANGE_THEME_COLOR:return a.value===t?{}:(Le(t),{themeColor:t});case o.CHANGE_THEME:return N.value===t?{}:(Ce(t),{});case o.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case o.MENU_ACCORDION:return{menuSetting:{accordion:t}};case o.MENU_TRIGGER:return{menuSetting:{trigger:t}};case o.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case o.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case o.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case o.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case o.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case o.MENU_THEME:return v(t),{menuSetting:{bgColor:t}};case o.MENU_SPLIT:return{menuSetting:{split:t}};case o.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case o.MENU_FIXED:return{menuSetting:{fixed:t}};case o.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case o.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case o.OPEN_PAGE_LOADING:return _.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case o.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case o.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case o.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case o.LOCK_TIME:return{lockTime:t};case o.FULL_CONTENT:return{fullContent:t};case o.CONTENT_MODE:return{contentMode:t};case o.SHOW_BREADCRUMB:return{showBreadCrumb:t};case o.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case o.GRAY_MODE:return pe(t),{grayMode:t};case o.SHOW_FOOTER:return{showFooter:t};case o.COLOR_WEAK:return De(t),{colorWeak:t};case o.SHOW_LOGO:return{showLogo:t};case o.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case o.TABS_SHOW:return{multiTabsSetting:{show:t}};case o.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case o.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case o.TABS_THEME:return{multiTabsSetting:{theme:t}};case o.HEADER_THEME:return Y(t),{headerSetting:{bgColor:t}};case o.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case o.HEADER_FIXED:return{headerSetting:{fixed:t}};case o.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}const{t:s}=$();var je=j({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:_,getShowFooter:a,getShowBreadCrumb:N,getShowBreadCrumbIcon:L,getShowLogo:R,getFullContent:M,getColorWeak:d,getGrayMode:Z,getLockTime:z,getShowDarkModeToggle:B,getThemeColor:q}=Q();de();const{getIsHorizontal:G,getShowMenu:J,getMenuType:W,getTrigger:ee,getCollapsedShowTitle:te,getMenuFixed:Je,getCollapsed:oe,getCanDrag:ie,getTopMenuAlign:ne,getAccordion:et,getMenuWidth:se,getMenuBgColor:_e,getIsTopMenu:re,getSplit:I,getIsMixSidebar:U,getCloseMixSidebarOnChange:tt,getMixSideTrigger:ot,getMixSideFixed:it}=Ue(),{getShowHeader:P,getFixed:nt,getHeaderBgColor:Ee,getShowSearch:st}=we(),{getShowMultipleTab:ge,getShowQuick:_t,getShowRedo:rt,getShowFold:Et,getTabsTheme:ae}=He(),c=fe(()=>i(J)&&!i(G));function Se(){return n(y,null,[n(xe,{menuTypeList:Ye,handler:S=>{ve(o.CHANGE_LAYOUT,{mode:S.mode,type:S.type,split:i(G)?!1:void 0})},def:i(W)},null)])}function Te(){return n(b,{colorList:be,def:i(Ee),event:o.HEADER_THEME},null)}function Oe(){return n(b,{colorList:Be,def:i(_e),event:o.MENU_THEME},null)}function le(){return n(b,{colorList:Ge,def:i(q),event:o.CHANGE_THEME_COLOR},null)}function ue(){let S=i(ee);const m=Ve(i(I));return m.some(T=>T.value===S)||(S=C.FOOTER),n(y,null,[n(E,{title:s("layout.setting.splitMenu"),event:o.MENU_SPLIT,def:i(I),disabled:!i(c)||i(W)!==A.MIX},null),n(p,{title:s("layout.setting.tabsTheme"),event:o.TABS_THEME,def:i(ae),options:ke},null),n(p,{title:s("layout.setting.topMenuLayout"),event:o.MENU_TOP_ALIGN,def:i(ne),options:$e,disabled:!i(P)||i(I)||!i(re)&&!i(I)||i(U)},null),n(p,{title:s("layout.setting.menuCollapseButton"),event:o.MENU_TRIGGER,def:S,options:m,disabled:!i(c)||i(U)},null),n(p,{title:s("layout.setting.contentMode"),event:o.CONTENT_MODE,def:i(_),options:Ke},null),n(K,{title:s("layout.setting.autoScreenLock"),min:0,event:o.LOCK_TIME,defaultValue:i(z),formatter:T=>parseInt(T)===0?`0(${s("layout.setting.notAutoScreenLock")})`:`${T}${s("layout.setting.minute")}`},null),n(K,{title:s("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:o.MENU_WIDTH,disabled:!i(c),defaultValue:i(se),formatter:T=>`${parseInt(T)}px`},null)])}function Me(){return n(y,null,[n(E,{title:s("layout.setting.menuDrag"),event:o.MENU_HAS_DRAG,def:i(ie),disabled:!i(c)},null),n(E,{title:s("layout.setting.collapseMenuDisplayName"),event:o.MENU_COLLAPSED_SHOW_TITLE,def:i(te),disabled:!i(c)||!i(oe)||i(U)},null),n(E,{title:s("layout.setting.tabs"),event:o.TABS_SHOW,def:i(ge)},null),n(E,{title:s("layout.setting.breadcrumb"),event:o.SHOW_BREADCRUMB,def:i(N),disabled:!i(P)},null),n(E,{title:s("layout.setting.footer"),event:o.SHOW_FOOTER,def:i(a)},null),n(E,{title:s("layout.setting.grayMode"),event:o.GRAY_MODE,def:i(Z)},null),n(E,{title:s("layout.setting.colorWeak"),event:o.COLOR_WEAK,def:i(d)},null)])}return()=>n(Re,ye(t,{title:s("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"}),{default:()=>[i(B)&&n(g,null,{default:()=>s("layout.setting.darkMode")}),i(B)&&n(he,{class:"mx-auto"},null),n(g,null,{default:()=>s("layout.setting.navMode")}),Se(),n(g,null,{default:()=>s("layout.setting.sysTheme")}),le(),n(g,null,{default:()=>s("layout.setting.headerTheme")}),Te(),n(g,null,{default:()=>s("layout.setting.sidebarTheme")}),Oe(),n(g,null,{default:()=>s("layout.setting.interfaceFunction")}),ue(),Me(),n(g,null,null),n(Xe,null,null)]})}});const Ze=j({name:"SettingButton",components:{SettingDrawer:je,Icon:Pe},setup(){const[e,{openDrawer:t}]=Ie();return{register:e,openDrawer:t}}});function ze(e,t,_,a,N,L){const R=k("Icon"),M=k("SettingDrawer");return me(),Fe("div",{onClick:t[0]||(t[0]=d=>e.openDrawer(!0))},[n(R,{icon:"ion:settings-outline"}),n(M,{onRegister:e.register},null,8,["onRegister"])])}var qe=We(Ze,[["render",ze]]),ut=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"}));export{ve as b,ut as i};
