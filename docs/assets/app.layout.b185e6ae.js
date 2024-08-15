import{c as j,i as ye,e as H,l as we,p as Te,a as h,h as T,d as ut,g as Q,t as Qe,r as C,o as W,f as X,w as st,s as Be,j as ct,k as dt,m as ft,n as I,q as Ce,u as Oe,v as be,x as ge,y as xe,z as vt,A as ee,B as ht,C as mt,D as bt,E as ce,F as de,G as te,H as K,I as Ae,J as Ie}from"./index.274522c1.js";import{h as De,a as Se}from"./render.23090be3.js";import{R as gt,u as yt,a as wt,v as We,c as Ee,g as Tt}from"./Ripple.ee529b59.js";import{Q as le}from"./QIcon.37a2465d.js";var Ct=j({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:l}}=Q(),t=ye(we,H);if(t===H)return console.error("QPageContainer needs to be child of QLayout"),H;Te(ut,!0);const n=h(()=>{const v={};return t.header.space===!0&&(v.paddingTop=`${t.header.size}px`),t.right.space===!0&&(v[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(v.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(v[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),v});return()=>T("div",{class:"q-page-container",style:n.value},De(u.default))}});let fe,ne=0;const P=new Array(256);for(let e=0;e<256;e++)P[e]=(e+256).toString(16).substring(1);const xt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return u=>{const l=new Uint8Array(u);return e.getRandomValues(l),l}}return u=>{const l=[];for(let t=u;t>0;t--)l.push(Math.floor(Math.random()*256));return l}})(),Me=4096;function St(){(fe===void 0||ne+16>Me)&&(ne=0,fe=xt(Me));const e=Array.prototype.slice.call(fe,ne,ne+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,P[e[0]]+P[e[1]]+P[e[2]]+P[e[3]]+"-"+P[e[4]]+P[e[5]]+"-"+P[e[6]]+P[e[7]]+"-"+P[e[8]]+P[e[9]]+"-"+P[e[10]]+P[e[11]]+P[e[12]]+P[e[13]]+P[e[14]]+P[e[15]]}let qt=0;const Lt=["click","keydown"],Rt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${qt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function _t(e,u,l,t){const n=ye(Qe,H);if(n===H)return console.error("QTab/QRouteTab component needs to be child of QTabs"),H;const{proxy:v}=Q(),g=C(null),_=C(null),m=C(null),f=h(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),q=h(()=>n.currentModel.value===e.name),k=h(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(q.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(t!==void 0?t.linkClass.value:"")),$=h(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=h(()=>e.disable===!0||n.hasFocus.value===!0||q.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function p(s,a){if(a!==!0&&g.value!==null&&g.value.focus(),e.disable===!0){t!==void 0&&t.hasRouterLink.value===!0&&Be(s);return}if(t===void 0){n.updateModel({name:e.name}),l("click",s);return}if(t.hasRouterLink.value===!0){const i=(d={})=>{let R;const A=d.to===void 0||ft(d.to,e.to)===!0?n.avoidRouteWatcher=St():null;return t.navigateToRouterLink(s,{...d,returnRouterError:!0}).catch(F=>{R=F}).then(F=>{if(A===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,R===void 0&&(F===void 0||F.message!==void 0&&F.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),d.returnRouterError===!0)return R!==void 0?Promise.reject(R):F})};l("click",s,i),s.defaultPrevented!==!0&&i();return}l("click",s)}function L(s){ct(s,[13,32])?p(s,!0):dt(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&n.onKbdNavigate(s.keyCode,v.$el)===!0&&Be(s),l("keydown",s)}function B(){const s=n.tabProps.value.narrowIndicator,a=[],i=T("div",{ref:m,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&a.push(T(le,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&a.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&a.push(e.alertIcon!==void 0?T(le,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&a.push(i);const d=[T("div",{class:"q-focus-helper",tabindex:-1,ref:g}),T("div",{class:$.value},Se(u.default,a))];return s===!1&&d.push(i),d}const E={name:h(()=>e.name),rootRef:_,tabIndicatorRef:m,routeData:t};W(()=>{n.unregisterTab(E)}),X(()=>{n.registerTab(E)});function M(s,a){const i={ref:_,class:k.value,tabindex:w.value,role:"tab","aria-selected":q.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:p,onKeydown:L,...a};return st(T(s,i,B()),[[gt,f.value]])}return{renderTab:M,$tabs:n}}var ve=j({name:"QRouteTab",props:{...yt,...Rt},emits:Lt,setup(e,{slots:u,emit:l}){const t=wt({useDisableForRouterLinkProps:!1}),{renderTab:n,$tabs:v}=_t(e,u,l,{exact:h(()=>e.exact),...t});return I(()=>`${e.name} | ${e.exact} | ${(t.resolvedLink.value||{}).href}`,()=>{v.verifyRouteModel()}),()=>n(t.linkTag.value,t.linkAttrs.value)}});function pt(){const e=C(!Ce.value);return e.value===!1&&X(()=>{e.value=!0}),{isHydrated:e}}const je=typeof ResizeObserver!="undefined",Fe=je===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ie=j({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let l=null,t,n={width:-1,height:-1};function v(m){m===!0||e.debounce===0||e.debounce==="0"?g():l===null&&(l=setTimeout(g,e.debounce))}function g(){if(l!==null&&(clearTimeout(l),l=null),t){const{offsetWidth:m,offsetHeight:f}=t;(m!==n.width||f!==n.height)&&(n={width:m,height:f},u("resize",n))}}const{proxy:_}=Q();if(_.trigger=v,je===!0){let m;const f=q=>{t=_.$el.parentNode,t?(m=new ResizeObserver(v),m.observe(t),g()):q!==!0&&be(()=>{f(!0)})};return X(()=>{f()}),W(()=>{l!==null&&clearTimeout(l),m!==void 0&&(m.disconnect!==void 0?m.disconnect():t&&m.unobserve(t))}),Oe}else{let q=function(){l!==null&&(clearTimeout(l),l=null),f!==void 0&&(f.removeEventListener!==void 0&&f.removeEventListener("resize",v,ge.passive),f=void 0)},k=function(){q(),t&&t.contentDocument&&(f=t.contentDocument.defaultView,f.addEventListener("resize",v,ge.passive),g())};const{isHydrated:m}=pt();let f;return X(()=>{be(()=>{t=_.$el,t&&k()})}),W(q),()=>{if(m.value===!0)return T("object",{class:"q--avoid-card-border",style:Fe.style,tabindex:-1,type:"text/html",data:Fe.url,"aria-hidden":"true",onLoad:k})}}}});function he(){let e;const u=Q();function l(){e=void 0}return xe(l),W(l),{removeTick:l,registerTick(t){e=t,be(()=>{e===t&&(We(u)===!1&&e(),e=void 0)})}}}function Ve(){let e=null;const u=Q();function l(){e!==null&&(clearTimeout(e),e=null)}return xe(l),W(l),{removeTimeout:l,registerTimeout(t,n){l(),We(u)===!1&&(e=setTimeout(()=>{e=null,t()},n))}}}let Ne=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const u=document.createElement("div");Object.assign(u.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(u),e.scrollLeft=-1e3,Ne=e.scrollLeft>=0,e.remove()}function Pt(e,u,l){const t=l===!0?["left","right"]:["top","bottom"];return`absolute-${u===!0?t[0]:t[1]}${e?` text-${e}`:""}`}const kt=["left","center","right","justify"];var $t=j({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>kt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:u,emit:l}){const{proxy:t}=Q(),{$q:n}=t,{registerTick:v}=he(),{registerTick:g}=he(),{registerTick:_}=he(),{registerTimeout:m,removeTimeout:f}=Ve(),{registerTimeout:q,removeTimeout:k}=Ve(),$=C(null),w=C(null),p=C(e.modelValue),L=C(!1),B=C(!0),E=C(!1),M=C(!1),s=[],a=C(0),i=C(!1);let d=null,R=null,A;const F=h(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Pt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ue=h(()=>{const o=a.value,r=p.value;for(let c=0;c<o;c++)if(s[c].name.value===r)return!0;return!1}),Ke=h(()=>`q-tabs__content--align-${L.value===!0?"left":M.value===!0?"justify":e.align}`),Xe=h(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ge=h(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ke.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),G=h(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Y=h(()=>e.vertical!==!0&&n.lang.rtl===!0),re=h(()=>Ne===!1&&Y.value===!0);I(Y,U),I(()=>e.modelValue,o=>{ae({name:o,setCurrent:!0,skipEmit:!0})}),I(()=>e.outsideArrows,J);function ae({name:o,setCurrent:r,skipEmit:c}){p.value!==o&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",o),(r===!0||e["onUpdate:modelValue"]===void 0)&&(Ye(p.value,o),p.value=o))}function J(){v(()=>{qe({width:$.value.offsetWidth,height:$.value.offsetHeight})})}function qe(o){if(G.value===void 0||w.value===null)return;const r=o[G.value.container],c=Math.min(w.value[G.value.scroll],Array.prototype.reduce.call(w.value.children,(S,y)=>S+(y[G.value.content]||0),0)),x=r>0&&c>r;L.value=x,x===!0&&g(U),M.value=r<parseInt(e.breakpoint,10)}function Ye(o,r){const c=o!=null&&o!==""?s.find(S=>S.name.value===o):null,x=r!=null&&r!==""?s.find(S=>S.name.value===r):null;if(c&&x){const S=c.tabIndicatorRef.value,y=x.tabIndicatorRef.value;d!==null&&(clearTimeout(d),d=null),S.style.transition="none",S.style.transform="none",y.style.transition="none",y.style.transform="none";const b=S.getBoundingClientRect(),z=y.getBoundingClientRect();y.style.transform=e.vertical===!0?`translate3d(0,${b.top-z.top}px,0) scale3d(1,${z.height?b.height/z.height:1},1)`:`translate3d(${b.left-z.left}px,0,0) scale3d(${z.width?b.width/z.width:1},1,1)`,_(()=>{d=setTimeout(()=>{d=null,y.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",y.style.transform="none"},70)})}x&&L.value===!0&&N(x.rootRef.value)}function N(o){const{left:r,width:c,top:x,height:S}=w.value.getBoundingClientRect(),y=o.getBoundingClientRect();let b=e.vertical===!0?y.top-x:y.left-r;if(b<0){w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(b),U();return}b+=e.vertical===!0?y.height-S:y.width-c,b>0&&(w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(b),U())}function U(){const o=w.value;if(o===null)return;const r=o.getBoundingClientRect(),c=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);Y.value===!0?(B.value=Math.ceil(c+r.width)<o.scrollWidth-1,E.value=c>0):(B.value=c>0,E.value=e.vertical===!0?Math.ceil(c+r.height)<o.scrollHeight:Math.ceil(c+r.width)<o.scrollWidth)}function Le(o){R!==null&&clearInterval(R),R=setInterval(()=>{et(o)===!0&&O()},5)}function Re(){Le(re.value===!0?Number.MAX_SAFE_INTEGER:0)}function _e(){Le(re.value===!0?0:Number.MAX_SAFE_INTEGER)}function O(){R!==null&&(clearInterval(R),R=null)}function Je(o,r){const c=Array.prototype.filter.call(w.value.children,z=>z===r||z.matches&&z.matches(".q-tab.q-focusable")===!0),x=c.length;if(x===0)return;if(o===36)return N(c[0]),c[0].focus(),!0;if(o===35)return N(c[x-1]),c[x-1].focus(),!0;const S=o===(e.vertical===!0?38:37),y=o===(e.vertical===!0?40:39),b=S===!0?-1:y===!0?1:void 0;if(b!==void 0){const z=Y.value===!0?-1:1,V=c.indexOf(r)+b*z;return V>=0&&V<x&&(N(c[V]),c[V].focus({preventScroll:!0})),!0}}const Ze=h(()=>re.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,r)=>{o.scrollLeft=-r}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,r)=>{o.scrollTop=r}}:{get:o=>o.scrollLeft,set:(o,r)=>{o.scrollLeft=r}});function et(o){const r=w.value,{get:c,set:x}=Ze.value;let S=!1,y=c(r);const b=o<y?-1:1;return y+=b*5,y<0?(S=!0,y=0):(b===-1&&y<=o||b===1&&y>=o)&&(S=!0,y=o),x(r,y),U(),S}function pe(o,r){for(const c in o)if(o[c]!==r[c])return!1;return!0}function tt(){let o=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const c=s.filter(b=>b.routeData!==void 0&&b.routeData.hasRouterLink.value===!0),{hash:x,query:S}=t.$route,y=Object.keys(S).length;for(const b of c){const z=b.routeData.exact.value===!0;if(b.routeData[z===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:V,query:ue,matched:rt,href:at}=b.routeData.resolvedLink.value,se=Object.keys(ue).length;if(z===!0){if(V!==x||se!==y||pe(S,ue)===!1)continue;o=b.name.value;break}if(V!==""&&V!==x||se!==0&&pe(ue,S)===!1)continue;const D={matchedLen:rt.length,queryDiff:y-se,hrefLen:at.length-V.length};if(D.matchedLen>r.matchedLen){o=b.name.value,r=D;continue}else if(D.matchedLen!==r.matchedLen)continue;if(D.queryDiff<r.queryDiff)o=b.name.value,r=D;else if(D.queryDiff!==r.queryDiff)continue;D.hrefLen>r.hrefLen&&(o=b.name.value,r=D)}o===null&&s.some(b=>b.routeData===void 0&&b.name.value===p.value)===!0||ae({name:o,setCurrent:!0})}function nt(o){if(f(),i.value!==!0&&$.value!==null&&o.target&&typeof o.target.closest=="function"){const r=o.target.closest(".q-tab");r&&$.value.contains(r)===!0&&(i.value=!0,L.value===!0&&N(r))}}function ot(){m(()=>{i.value=!1},30)}function Z(){ke.avoidRouteWatcher===!1?q(tt):k()}function Pe(){if(A===void 0){const o=I(()=>t.$route.fullPath,Z);A=()=>{o(),A=void 0}}}function lt(o){s.push(o),a.value++,J(),o.routeData===void 0||t.$route===void 0?q(()=>{if(L.value===!0){const r=p.value,c=r!=null&&r!==""?s.find(x=>x.name.value===r):null;c&&N(c.rootRef.value)}}):(Pe(),o.routeData.hasRouterLink.value===!0&&Z())}function it(o){s.splice(s.indexOf(o),1),a.value--,J(),A!==void 0&&o.routeData!==void 0&&(s.every(r=>r.routeData===void 0)===!0&&A(),Z())}const ke={currentModel:p,tabProps:F,hasFocus:i,hasActiveTab:Ue,registerTab:lt,unregisterTab:it,verifyRouteModel:Z,updateModel:ae,onKbdNavigate:Je,avoidRouteWatcher:!1};Te(Qe,ke);function $e(){d!==null&&clearTimeout(d),O(),A!==void 0&&A()}let ze;return W($e),xe(()=>{ze=A!==void 0,$e()}),vt(()=>{ze===!0&&Pe(),J()}),()=>T("div",{ref:$,class:Xe.value,role:"tablist",onFocusin:nt,onFocusout:ot},[T(ie,{onResize:qe}),T("div",{ref:w,class:Ge.value,onScroll:U},De(u.default)),T(le,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(B.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Re,onTouchstartPassive:Re,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O}),T(le,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:_e,onTouchstartPassive:_e,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O})])}}),zt=j({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:l}){const{proxy:{$q:t}}=Q(),n=ye(we,H);if(n===H)return console.error("QFooter needs to be child of QLayout"),H;const v=C(parseInt(e.heightHint,10)),g=C(!0),_=C(Ce.value===!0||n.isContainer.value===!0?0:window.innerHeight),m=h(()=>e.reveal===!0||n.view.value.indexOf("F")!==-1||t.platform.is.ios&&n.isContainer.value===!0),f=h(()=>n.isContainer.value===!0?n.containerHeight.value:_.value),q=h(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return g.value===!0?v.value:0;const i=n.scroll.value.position+f.value+v.value-n.height.value;return i>0?i:0}),k=h(()=>e.modelValue!==!0||m.value===!0&&g.value!==!0),$=h(()=>e.modelValue===!0&&k.value===!0&&e.reveal===!0),w=h(()=>"q-footer q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(k.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(m.value!==!0?" hidden":""):"")),p=h(()=>{const i=n.rows.value.bottom,d={};return i[0]==="l"&&n.left.space===!0&&(d[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),i[2]==="r"&&n.right.space===!0&&(d[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),d});function L(i,d){n.update("footer",i,d)}function B(i,d){i.value!==d&&(i.value=d)}function E({height:i}){B(v,i),L("size",i)}function M(){if(e.reveal!==!0)return;const{direction:i,position:d,inflectionPoint:R}=n.scroll.value;B(g,i==="up"||d-R<100||n.height.value-f.value-d-v.value<300)}function s(i){$.value===!0&&B(g,!0),l("focusin",i)}I(()=>e.modelValue,i=>{L("space",i),B(g,!0),n.animate()}),I(q,i=>{L("offset",i)}),I(()=>e.reveal,i=>{i===!1&&B(g,e.modelValue)}),I(g,i=>{n.animate(),l("reveal",i)}),I([v,n.scroll,n.height],M),I(()=>t.screen.height,i=>{n.isContainer.value!==!0&&B(_,i)});const a={};return n.instances.footer=a,e.modelValue===!0&&L("size",v.value),L("space",e.modelValue),L("offset",q.value),W(()=>{n.instances.footer===a&&(n.instances.footer=void 0,L("size",0),L("offset",0),L("space",!1))}),()=>{const i=Se(u.default,[T(ie,{debounce:0,onResize:E})]);return e.elevated===!0&&i.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),T("footer",{class:w.value,style:p.value,onFocusin:s},i)}}});const Bt=[Element,String],At=[null,document,document.body,document.scrollingElement,document.documentElement];function It(e,u){let l=Tt(u);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return At.includes(l)?window:l}function Et(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Mt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let oe;function me(){if(oe!==void 0)return oe;const e=document.createElement("p"),u=document.createElement("div");Ee(e,{width:"100%",height:"200px"}),Ee(u,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),u.appendChild(e),document.body.appendChild(u);const l=e.offsetWidth;u.style.overflow="scroll";let t=e.offsetWidth;return l===t&&(t=u.clientWidth),u.remove(),oe=l-t,oe}const{passive:He}=ge,Ft=["both","horizontal","vertical"];var Vt=j({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ft.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Bt},emits:["scroll"],setup(e,{emit:u}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,v;I(()=>e.scrollTarget,()=>{m(),_()});function g(){t!==null&&t();const k=Math.max(0,Et(n)),$=Mt(n),w={top:k-l.position.top,left:$-l.position.left};if(e.axis==="vertical"&&w.top===0||e.axis==="horizontal"&&w.left===0)return;const p=Math.abs(w.top)>=Math.abs(w.left)?w.top<0?"up":"down":w.left<0?"left":"right";l.position={top:k,left:$},l.directionChanged=l.direction!==p,l.delta=w,l.directionChanged===!0&&(l.direction=p,l.inflectionPoint=l.position),u("scroll",{...l})}function _(){n=It(v,e.scrollTarget),n.addEventListener("scroll",f,He),f(!0)}function m(){n!==void 0&&(n.removeEventListener("scroll",f,He),n=void 0)}function f(k){if(k===!0||e.debounce===0||e.debounce==="0")g();else if(t===null){const[$,w]=e.debounce?[setTimeout(g,e.debounce),clearTimeout]:[requestAnimationFrame(g),cancelAnimationFrame];t=()=>{w($),t=null}}}const{proxy:q}=Q();return I(()=>q.$q.lang.rtl,g),X(()=>{v=q.$el.parentNode,_()}),W(()=>{t!==null&&t(),m()}),Object.assign(q,{trigger:f,getPosition:()=>l}),Oe}}),Ht=j({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:l}){const{proxy:{$q:t}}=Q(),n=C(null),v=C(t.screen.height),g=C(e.container===!0?0:t.screen.width),_=C({position:0,direction:"down",inflectionPoint:0}),m=C(0),f=C(Ce.value===!0?0:me()),q=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=h(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),$=h(()=>f.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${f.value}px`}:null),w=h(()=>f.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${f.value}px`,width:`calc(100% + ${f.value}px)`}:null);function p(a){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};_.value=i,e.onScroll!==void 0&&l("scroll",i)}}function L(a){const{height:i,width:d}=a;let R=!1;v.value!==i&&(R=!0,v.value=i,e.onScrollHeight!==void 0&&l("scrollHeight",i),E()),g.value!==d&&(R=!0,g.value=d),R===!0&&e.onResize!==void 0&&l("resize",a)}function B({height:a}){m.value!==a&&(m.value=a,E())}function E(){if(e.container===!0){const a=v.value>m.value?me():0;f.value!==a&&(f.value=a)}}let M=null;const s={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:n,height:v,containerHeight:m,scrollbarWidth:f,totalWidth:h(()=>g.value+f.value),rows:h(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:_,animate(){M!==null?clearTimeout(M):document.body.classList.add("q-body--layout-animate"),M=setTimeout(()=>{M=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,i,d){s[a][i]=d}};if(Te(we,s),me()>0){let d=function(){a=null,i.classList.remove("hide-scrollbar")},R=function(){if(a===null){if(i.scrollHeight>t.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(d,300)},A=function(F){a!==null&&F==="remove"&&(clearTimeout(a),d()),window[`${F}EventListener`]("resize",R)},a=null;const i=document.body;I(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),ht(()=>{A("remove")})}return()=>{const a=Se(u.default,[T(Vt,{onScroll:p}),T(ie,{onResize:L})]),i=T("div",{class:q.value,style:k.value,ref:e.container===!0?void 0:n,tabindex:-1},a);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:n},[T(ie,{onResize:B}),T("div",{class:"absolute-full",style:$.value},[T("div",{class:"scroll",style:w.value},[i])])]):i}}});const Qt=mt("store",()=>{const e=C("ro\xDFes");function u(t){e.value=t}function l(){e.value=null}return{user:e,setUser:u,clearUser:l}}),Nt=Object.assign({name:"AppLayout"},{__name:"app.layout",setup(e){const u=C("menu"),l=Qt();return(t,n)=>{const v=bt("router-view");return ce(),de(Ht,{view:"lHh Lpr lFf"},{default:te(()=>[K(Ct,null,{default:te(()=>[K(v)]),_:1}),K(zt,{class:"bg-white text-primary"},{default:te(()=>[K($t,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=g=>u.value=g),align:"justify"},{default:te(()=>[Ae(l).user?(ce(),de(ve,{key:0,name:"menu",icon:"restaurant_menu",label:"Menu",to:"/menu"})):Ie("",!0),Ae(l).user?(ce(),de(ve,{key:1,name:"list",icon:"list",label:"List",to:"/list"})):Ie("",!0),K(ve,{name:"settings",icon:"settings",label:"Settings",to:"/settings"})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});export{Nt as default};
