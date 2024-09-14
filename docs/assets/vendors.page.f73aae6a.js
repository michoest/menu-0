import{v as et,w as zt,x as Mt,y as It,f as Yt,z as Gt,A as gt,q as Ae,p as Je,o as De,B as Jt,j as Zt,k as el,l as tl,m as ll,n as ul,Q as yt}from"./QInput.d880d797.js";import{c as nl,d as al,a as ol,b as il}from"./store.fb019443.js";import{Q as bt}from"./QPage.0a54b52e.js";import{c as tt,ct as rl,cs as sl,a as f,cv as cl,h as V,Q as ze,cw as dl,R as fl,s as oe,g as lt,B as vl,r as R,x as ge,cb as ml,b6 as Sl,y as hl,z as gl,o as Ot,M as Z,b7 as yl,bc as bl,cc as We,q as _e,k as wl,cf as Se,m as Vl,n as Cl,i as kl,cu as pl,j as xl,G as he,aG as wt,J as O,I as H,K as Vt,H as He,av as Ct,aN as kt,bh as _l,c0 as Xe,L as ql,aH as Ye,b_ as pt}from"./index.28afdb71.js";import{n as xt,Q as Al}from"./QMenu.5f0665fe.js";import{Q as zl,a as Ml}from"./QDialog.badd9486.js";import{r as Ze}from"./rtl.276c3f1b.js";import"./axios.ab682c6b.js";import"./notify.2c47ca2c.js";import"./scroll.c1af5b4d.js";var Il=tt({name:"QField",inheritAttrs:!1,props:{...et,tag:{type:String,default:"label"}},emits:zt,setup(){return Mt(It({tagProp:!0}))}});const Ol={xs:8,sm:10,md:14,lg:20,xl:24};var Bl=tt({name:"QChip",props:{...nl,...rl,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:s,emit:i}){const{proxy:{$q:v}}=lt(),p=al(e,v),o=sl(e,Ol),M=f(()=>e.selected===!0||e.icon!==void 0),b=f(()=>e.selected===!0?e.iconSelected||v.iconSet.chip.selected:e.icon),h=f(()=>e.iconRemove||v.iconSet.chip.remove),A=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),r=f(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(A.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(p.value===!0?" q-chip--dark q-dark":"")}),m=f(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},N={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||v.lang.label.remove};return{chip:d,remove:N}});function S(d){d.keyCode===13&&k(d)}function k(d){e.disable||(i("update:selected",!e.selected),i("click",d))}function x(d){(d.keyCode===void 0||d.keyCode===13)&&(oe(d),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function P(){const d=[];A.value===!0&&d.push(V("div",{class:"q-focus-helper"})),M.value===!0&&d.push(V(ze,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const N=e.label!==void 0?[V("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(V("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},dl(s.default,N))),e.iconRight&&d.push(V(ze,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(V(ze,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...m.value.remove,onClick:x,onKeyup:x})),d}return()=>{if(e.modelValue===!1)return;const d={class:r.value,style:o.value};return A.value===!0&&Object.assign(d,m.value.chip,{onClick:k,onKeyup:S}),cl("div",d,P(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[fl,e.ripple]])}}});const j=1e3,Fl=["start","center","end","start-force","center-force","end-force"],Bt=Array.prototype.filter,Rl=window.getComputedStyle(document.body).overflowAnchor===void 0?vl:function(e,s){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];Bt.call(i,p=>p.dataset&&p.dataset.qVsAnchor!==void 0).forEach(p=>{delete p.dataset.qVsAnchor});const v=i[s];v&&v.dataset&&(v.dataset.qVsAnchor="")}))};function ye(e,s){return e+s}function Ge(e,s,i,v,p,o,M,b){const h=e===window?document.scrollingElement||document.documentElement:e,A=p===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-M-b,scrollMaxSize:0,offsetStart:-M,offsetEnd:-b};if(p===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=h.scrollLeft,r.scrollViewSize+=h.clientWidth),r.scrollMaxSize=h.scrollWidth,o===!0&&(r.scrollStart=(Ze===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=h.scrollTop,r.scrollViewSize+=h.clientHeight),r.scrollMaxSize=h.scrollHeight),i!==null)for(let m=i.previousElementSibling;m!==null;m=m.previousElementSibling)m.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=m[A]);if(v!==null)for(let m=v.nextElementSibling;m!==null;m=m.nextElementSibling)m.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=m[A]);if(s!==e){const m=h.getBoundingClientRect(),S=s.getBoundingClientRect();p===!0?(r.offsetStart+=S.left-m.left,r.offsetEnd-=S.width):(r.offsetStart+=S.top-m.top,r.offsetEnd-=S.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function _t(e,s,i,v){s==="end"&&(s=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(v===!0&&(s=(Ze===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):i===!0?(v===!0&&(s=(Ze===!0?e.scrollWidth-e.offsetWidth:0)-s),e.scrollLeft=s):e.scrollTop=s}function qe(e,s,i,v){if(i>=v)return 0;const p=s.length,o=Math.floor(i/j),M=Math.floor((v-1)/j)+1;let b=e.slice(o,M).reduce(ye,0);return i%j!==0&&(b-=s.slice(o*j,i).reduce(ye,0)),v%j!==0&&v!==p&&(b-=s.slice(v,M*j).reduce(ye,0)),b}const Tl={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},qt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Tl};function El({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:i,virtualScrollItemSizeComputed:v}){const p=lt(),{props:o,emit:M,proxy:b}=p,{$q:h}=b;let A,r,m,S=[],k;const x=R(0),P=R(0),d=R({}),N=R(null),Y=R(null),D=R(null),B=R({from:0,to:0}),Me=f(()=>o.tableColspan!==void 0?o.tableColspan:100);v===void 0&&(v=f(()=>o.virtualScrollItemSize));const F=f(()=>v.value+";"+o.virtualScrollHorizontal),G=f(()=>F.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);ge(G,()=>{U()}),ge(F,ee);function ee(){ie(r,!0)}function be(l){ie(l===void 0?r:l)}function te(l,a){const g=s();if(g==null||g.nodeType===8)return;const z=Ge(g,i(),N.value,Y.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);m!==z.scrollViewSize&&U(z.scrollViewSize),Q(g,z,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Fl.indexOf(a)!==-1?a:r!==-1&&l>r?"end":"start")}function Ie(){const l=s();if(l==null||l.nodeType===8)return;const a=Ge(l,i(),N.value,Y.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),g=e.value-1,z=a.scrollMaxSize-a.offsetStart-a.offsetEnd-P.value;if(A===a.scrollStart)return;if(a.scrollMaxSize<=0){Q(l,a,0,0);return}m!==a.scrollViewSize&&U(a.scrollViewSize),we(B.value.from);const T=Math.floor(a.scrollMaxSize-Math.max(a.scrollViewSize,a.offsetEnd)-Math.min(k[g],a.scrollViewSize/2));if(T>0&&Math.ceil(a.scrollStart)>=T){Q(l,a,g,a.scrollMaxSize-a.offsetEnd-S.reduce(ye,0));return}let C=0,w=a.scrollStart-a.offsetStart,E=w;if(w<=z&&w+a.scrollViewSize>=x.value)w-=x.value,C=B.value.from,E=w;else for(let y=0;w>=S[y]&&C<g;y++)w-=S[y],C+=j;for(;w>0&&C<g;)w-=k[C],w>-a.scrollViewSize?(C++,E=w):E=k[C]+w;Q(l,a,C,E)}function Q(l,a,g,z,T){const C=typeof T=="string"&&T.indexOf("-force")!==-1,w=C===!0?T.replace("-force",""):T,E=w!==void 0?w:"start";let y=Math.max(0,g-d.value[E]),K=y+d.value.total;K>e.value&&(K=e.value,y=Math.max(0,K-d.value.total)),A=a.scrollStart;const J=y!==B.value.from||K!==B.value.to;if(J===!1&&w===void 0){Ve(g);return}const{activeElement:Be}=document,W=D.value;J===!0&&W!==null&&W!==Be&&W.contains(Be)===!0&&(W.addEventListener("focusout",Oe),setTimeout(()=>{W!==null&&W.removeEventListener("focusout",Oe)})),Rl(W,g-y);const Fe=w!==void 0?k.slice(y,g).reduce(ye,0):0;if(J===!0){const le=K>=B.value.from&&y<=B.value.to?B.value.to:K;B.value={from:y,to:le},x.value=qe(S,k,0,y),P.value=qe(S,k,K,e.value),requestAnimationFrame(()=>{B.value.to!==K&&A===a.scrollStart&&(B.value={from:B.value.from,to:K},P.value=qe(S,k,K,e.value))})}requestAnimationFrame(()=>{if(A!==a.scrollStart)return;J===!0&&we(y);const le=k.slice(y,g).reduce(ye,0),ue=le+a.offsetStart+x.value,Re=ue+k[g];let ke=ue+z;if(w!==void 0){const Ne=le-Fe,pe=a.scrollStart+Ne;ke=C!==!0&&pe<ue&&Re<pe+a.scrollViewSize?pe:w==="end"?Re-a.scrollViewSize:ue-(w==="start"?0:Math.round((a.scrollViewSize-k[g])/2))}A=ke,_t(l,ke,o.virtualScrollHorizontal,h.lang.rtl),Ve(g)})}function we(l){const a=D.value;if(a){const g=Bt.call(a.children,y=>y.classList&&y.classList.contains("q-virtual-scroll--skip")===!1),z=g.length,T=o.virtualScrollHorizontal===!0?y=>y.getBoundingClientRect().width:y=>y.offsetHeight;let C=l,w,E;for(let y=0;y<z;){for(w=T(g[y]),y++;y<z&&g[y].classList.contains("q-virtual-scroll--with-prev")===!0;)w+=T(g[y]),y++;E=w-k[C],E!==0&&(k[C]+=E,S[Math.floor(C/j)]+=E),C++}}}function Oe(){D.value!==null&&D.value!==void 0&&D.value.focus()}function ie(l,a){const g=1*v.value;(a===!0||Array.isArray(k)===!1)&&(k=[]);const z=k.length;k.length=e.value;for(let C=e.value-1;C>=z;C--)k[C]=g;const T=Math.floor((e.value-1)/j);S=[];for(let C=0;C<=T;C++){let w=0;const E=Math.min((C+1)*j,e.value);for(let y=C*j;y<E;y++)w+=k[y];S.push(w)}r=-1,A=void 0,x.value=qe(S,k,0,B.value.from),P.value=qe(S,k,B.value.to,e.value),l>=0?(we(B.value.from),Z(()=>{te(l)})):re()}function U(l){if(l===void 0&&typeof window!="undefined"){const w=s();w!=null&&w.nodeType!==8&&(l=Ge(w,i(),N.value,Y.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}m=l;const a=parseFloat(o.virtualScrollSliceRatioBefore)||0,g=parseFloat(o.virtualScrollSliceRatioAfter)||0,z=1+a+g,T=l===void 0||l<=0?1:Math.ceil(l/v.value),C=Math.max(1,T,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/z));d.value={total:Math.ceil(C*z),start:Math.ceil(C*a),center:Math.ceil(C*(.5+a)),end:Math.ceil(C*(1+a)),view:T}}function Pe(l,a){const g=o.virtualScrollHorizontal===!0?"width":"height",z={["--q-virtual-scroll-item-"+g]:v.value+"px"};return[l==="tbody"?V(l,{class:"q-virtual-scroll__padding",key:"before",ref:N},[V("tr",[V("td",{style:{[g]:`${x.value}px`,...z},colspan:Me.value})])]):V(l,{class:"q-virtual-scroll__padding",key:"before",ref:N,style:{[g]:`${x.value}px`,...z}}),V(l,{class:"q-virtual-scroll__content",key:"content",ref:D,tabindex:-1},a.flat()),l==="tbody"?V(l,{class:"q-virtual-scroll__padding",key:"after",ref:Y},[V("tr",[V("td",{style:{[g]:`${P.value}px`,...z},colspan:Me.value})])]):V(l,{class:"q-virtual-scroll__padding",key:"after",ref:Y,style:{[g]:`${P.value}px`,...z}})]}function Ve(l){r!==l&&(o.onVirtualScroll!==void 0&&M("virtualScroll",{index:l,from:B.value.from,to:B.value.to-1,direction:l<r?"decrease":"increase",ref:b}),r=l)}U();const re=ml(Ie,h.platform.is.ios===!0?120:35);Sl(()=>{U()});let Ce=!1;return hl(()=>{Ce=!0}),gl(()=>{if(Ce!==!0)return;const l=s();A!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?_t(l,A,o.virtualScrollHorizontal,h.lang.rtl):te(r)}),Ot(()=>{re.cancel()}),Object.assign(b,{scrollTo:te,reset:ee,refresh:be}),{virtualScrollSliceRange:B,virtualScrollSliceSizeComputed:d,setVirtualScrollSize:U,onVirtualScrollEvt:re,localResetVirtualScroll:ie,padVirtualScroll:Pe,scrollTo:te,reset:ee,refresh:be}}const At=e=>["add","add-unique","toggle"].includes(e),Ll=".*+?^${}()|[]\\",Hl=Object.keys(et);var Dl=tt({name:"QSelect",inheritAttrs:!1,props:{...qt,...Yt,...et,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:At},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:qt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...zt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:s,emit:i}){const{proxy:v}=lt(),{$q:p}=v,o=R(!1),M=R(!1),b=R(-1),h=R(""),A=R(!1),r=R(!1);let m=null,S=null,k,x,P,d=null,N,Y,D,B;const Me=R(null),F=R(null),G=R(null),ee=R(null),be=R(null),te=Gt(e),Ie=Jt(ft),Q=f(()=>Array.isArray(e.options)?e.options.length:0),we=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Oe,virtualScrollSliceSizeComputed:ie,localResetVirtualScroll:U,padVirtualScroll:Pe,onVirtualScrollEvt:Ve,scrollTo:re,setVirtualScrollSize:Ce}=El({virtualScrollLength:Q,getVirtualScrollTarget:Et,getVirtualScrollEl:ct,virtualScrollItemSizeComputed:we}),l=It(),a=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&k!==void 0?k:[],c=n.map(q=>Tt(q,u));return e.modelValue===null&&t===!0?c.filter(q=>q!==null):c}return n}),g=f(()=>{const t={};return Hl.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),z=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),T=f(()=>gt(a.value)),C=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||a.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),w=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),E=f(()=>Q.value===0),y=f(()=>a.value.map(t=>$.value(t)).join(", ")),K=f(()=>e.displayValue!==void 0?e.displayValue:y.value),J=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Be=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||a.value.some(J.value))),W=f(()=>l.focused.value===!0?e.tabindex:-1),Fe=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return b.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${b.value}`),t}),le=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ue=f(()=>a.value.map((t,n)=>({index:n,opt:t,html:J.value(t),selected:!0,removeAtIndex:Rt,toggleOption:ne,tabindex:W.value}))),Re=f(()=>{if(Q.value===0)return[];const{from:t,to:n}=Oe.value;return e.options.slice(t,n).map((u,c)=>{const q=se.value(u)===!0,_=$e(u)===!0,L=t+c,I={clickable:!0,active:_,activeClass:pe.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:z.value,role:"option","aria-selected":_===!0?"true":"false",id:`${l.targetUid.value}_${L}`,onClick:()=>{ne(u)}};return q!==!0&&(b.value===L&&(I.focused=!0),p.platform.is.desktop===!0&&(I.onMousemove=()=>{o.value===!0&&ce(L)})),{index:L,opt:u,html:J.value(u),label:$.value(u),selected:I.active,focused:I.focused,toggleOption:ne,setOptionIndex:ce,itemProps:I}})}),ke=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:p.iconSet.arrow.dropdown),Ne=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),pe=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),X=f(()=>Ke(e.optionValue,"value")),$=f(()=>Ke(e.optionLabel,"label")),se=f(()=>Ke(e.optionDisable,"disable")),Te=f(()=>a.value.map(t=>X.value(t))),Ft=f(()=>{const t={onInput:ft,onChange:Ie,onKeydown:st,onKeyup:it,onKeypress:rt,onFocus:at,onClick(n){x===!0&&Se(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Ie,t});ge(a,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(M.value!==!0&&o.value!==!0||T.value!==!0)&&(P!==!0&&me(),(M.value===!0||o.value===!0)&&de(""))},{immediate:!0}),ge(()=>e.fillInput,me),ge(o,je),ge(Q,Xt);function ut(t){return e.emitValue===!0?X.value(t):t}function Qe(t){if(t!==-1&&t<a.value.length)if(e.multiple===!0){const n=e.modelValue.slice();i("remove",{index:t,value:n.splice(t,1)[0]}),i("update:modelValue",n)}else i("update:modelValue",null)}function Rt(t){Qe(t),l.focus()}function nt(t,n){const u=ut(t);if(e.multiple!==!0){e.fillInput===!0&&xe($.value(t),!0,!0),i("update:modelValue",u);return}if(a.value.length===0){i("add",{index:0,value:u}),i("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&$e(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const c=e.modelValue.slice();i("add",{index:c.length,value:u}),c.push(u),i("update:modelValue",c)}function ne(t,n){if(l.editable.value!==!0||t===void 0||se.value(t)===!0)return;const u=X.value(t);if(e.multiple!==!0){n!==!0&&(xe(e.fillInput===!0?$.value(t):"",!0,!0),ae()),F.value!==null&&F.value.focus(),(a.value.length===0||_e(X.value(a.value[0]),u)!==!0)&&i("update:modelValue",e.emitValue===!0?u:t);return}if((x!==!0||A.value===!0)&&l.focus(),at(),a.value.length===0){const _=e.emitValue===!0?u:t;i("add",{index:0,value:_}),i("update:modelValue",e.multiple===!0?[_]:_);return}const c=e.modelValue.slice(),q=Te.value.findIndex(_=>_e(_,u));if(q!==-1)i("remove",{index:q,value:c.splice(q,1)[0]});else{if(e.maxValues!==void 0&&c.length>=e.maxValues)return;const _=e.emitValue===!0?u:t;i("add",{index:c.length,value:_}),c.push(_)}i("update:modelValue",c)}function ce(t){if(p.platform.is.desktop!==!0)return;const n=t!==-1&&t<Q.value?t:-1;b.value!==n&&(b.value=n)}function Ee(t=1,n){if(o.value===!0){let u=b.value;do u=xt(u+t,-1,Q.value-1);while(u!==-1&&u!==b.value&&se.value(e.options[u])===!0);b.value!==u&&(ce(u),re(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Le(u>=0?$.value(e.options[u]):N,!0))}}function Tt(t,n){const u=c=>_e(X.value(c),t);return e.options.find(u)||n.find(u)||t}function Ke(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:c=>c!==null&&typeof c=="object"&&u in c?c[u]:c}function $e(t){const n=X.value(t);return Te.value.find(u=>_e(u,n))!==void 0}function at(t){e.useInput===!0&&F.value!==null&&(t===void 0||F.value===t.target&&t.target.value===y.value)&&F.value.select()}function ot(t){wl(t,27)===!0&&o.value===!0&&(Se(t),ae(),me()),i("keyup",t)}function it(t){const{value:n}=t.target;if(t.keyCode!==void 0){ot(t);return}if(t.target.value="",m!==null&&(clearTimeout(m),m=null),S!==null&&(clearTimeout(S),S=null),me(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),c=_=>{const L=e.options.find(I=>_.value(I).toLocaleLowerCase()===u);return L===void 0?!1:(a.value.indexOf(L)===-1?ne(L):ae(),!0)},q=_=>{c(X)!==!0&&(c($)===!0||_===!0||de(n,!0,()=>q(!0)))};q()}else l.clearValue(t)}function rt(t){i("keypress",t)}function st(t){if(i("keydown",t),Vl(t)===!0)return;const n=h.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(b.value!==-1||n===!0);if(t.keyCode===27){We(t);return}if(t.keyCode===9&&u===!1){fe();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&o.value===!1){oe(t),ve();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Qe(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(oe(t),b.value=-1,Ee(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ie.value!==void 0&&(oe(t),b.value=Math.max(-1,Math.min(Q.value,b.value+(t.keyCode===33?-1:1)*ie.value.view)),Ee(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(oe(t),Ee(t.keyCode===38?-1:1,e.multiple));const c=Q.value;if((D===void 0||B<Date.now())&&(D=""),c>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||D.length!==0)){o.value!==!0&&ve(t);const q=t.key.toLocaleLowerCase(),_=D.length===1&&D[0]===q;B=Date.now()+1500,_===!1&&(oe(t),D+=q);const L=new RegExp("^"+D.split("").map(Ue=>Ll.indexOf(Ue)!==-1?"\\"+Ue:Ue).join(".*"),"i");let I=b.value;if(_===!0||I<0||L.test($.value(e.options[I]))!==!0)do I=xt(I+1,-1,c-1);while(I!==b.value&&(se.value(e.options[I])===!0||L.test($.value(e.options[I]))!==!0));b.value!==I&&Z(()=>{ce(I),re(I),I>=0&&e.useInput===!0&&e.fillInput===!0&&Le($.value(e.options[I]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||D!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&oe(t),b.value!==-1&&b.value<c){ne(e.options[b.value]);return}if(n===!0){const q=(_,L)=>{if(L){if(At(L)!==!0)return}else L=e.newValueMode;if(xe("",e.multiple!==!0,!0),_==null)return;(L==="toggle"?ne:nt)(_,L==="add-unique"),e.multiple!==!0&&(F.value!==null&&F.value.focus(),ae())};if(e.onNewValue!==void 0?i("newValue",h.value,q):q(h.value),e.multiple!==!0)return}o.value===!0?fe():l.innerLoading.value!==!0&&ve()}}function ct(){return x===!0?be.value:G.value!==null&&G.value.contentEl!==null?G.value.contentEl:void 0}function Et(){return ct()}function Lt(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?ue.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?ue.value.map((t,n)=>V(Bl,{key:"option-"+n,removable:l.editable.value===!0&&se.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:W.value,onRemove(){t.removeAtIndex(n)}},()=>V("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[V("span",{[Be.value===!0?"innerHTML":"textContent"]:K.value})]}function dt(){if(E.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:h.value}):void 0;const t=s.option!==void 0?s.option:u=>V(De,{key:u.index,...u.itemProps},()=>V(Ae,()=>V(Je,()=>V("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=Pe("div",Re.value.map(t));return s["before-options"]!==void 0&&(n=s["before-options"]().concat(n)),Cl(s["after-options"],n)}function Ht(t,n){const u=n===!0?{...Fe.value,...l.splitAttrs.attributes.value}:void 0,c={ref:n===!0?F:void 0,key:"i_t",class:C.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Ft.value};return t!==!0&&x===!0&&(Array.isArray(c.class)===!0?c.class=[...c.class,"no-pointer-events"]:c.class+=" no-pointer-events"),V("input",c)}function ft(t){m!==null&&(clearTimeout(m),m=null),S!==null&&(clearTimeout(S),S=null),!(t&&t.target&&t.target.qComposing===!0)&&(Le(t.target.value||""),P=!0,N=h.value,l.focused.value!==!0&&(x!==!0||A.value===!0)&&l.focus(),e.onFilter!==void 0&&(m=setTimeout(()=>{m=null,de(h.value)},e.inputDebounce)))}function Le(t,n){h.value!==t&&(h.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?i("inputValue",t):S=setTimeout(()=>{S=null,i("inputValue",t)},e.inputDebounce))}function xe(t,n,u){P=u!==!0,e.useInput===!0&&(Le(t,!0),(n===!0||u!==!0)&&(N=t),n!==!0&&de(t))}function de(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?i("filterAbort"):(l.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&a.value.length!==0&&P!==!0&&t===$.value(a.value[0])&&(t="");const c=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);d!==null&&clearTimeout(d),d=c,i("filter",t,(q,_)=>{(n===!0||l.focused.value===!0)&&d===c&&(clearTimeout(d),typeof q=="function"&&q(),r.value=!1,Z(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?o.value===!0&&ae():o.value===!0?je(!0):o.value=!0),typeof _=="function"&&Z(()=>{_(v)}),typeof u=="function"&&Z(()=>{u(v)})}))},()=>{l.focused.value===!0&&d===c&&(clearTimeout(d),l.innerLoading.value=!1,r.value=!1),o.value===!0&&(o.value=!1)})}function Dt(){return V(Al,{ref:G,class:w.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&E.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:z.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Ne.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...le.value,onScrollPassive:Ve,onBeforeShow:mt,onBeforeHide:Pt,onShow:Nt},dt)}function Pt(t){St(t),fe()}function Nt(){Ce()}function Qt(t){Se(t),F.value!==null&&F.value.focus(),A.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Kt(t){Se(t),Z(()=>{A.value=!1})}function $t(){const t=[V(Il,{class:`col-auto ${l.fieldClass.value}`,...g.value,for:l.targetUid.value,dark:z.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:h.value.length!==0,...l.splitAttrs.listeners.value,onFocus:Qt,onBlur:Kt},{...s,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(V("div",{ref:be,class:w.value+" scroll",style:e.popupContentStyle,...le.value,onClick:We,onScrollPassive:Ve},dt())),V(zl,{ref:ee,modelValue:M.value,position:e.useInput===!0?"top":void 0,transitionShow:Y,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:mt,onBeforeHide:jt,onHide:Ut,onShow:Wt},()=>V("div",{class:"q-select__dialog"+(z.value===!0?" q-select__dialog--dark q-dark":"")+(A.value===!0?" q-select__dialog--focused":"")},t))}function jt(t){St(t),ee.value!==null&&ee.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Ut(t){ae(),l.focused.value===!1&&i("blur",t),me()}function Wt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&F.value!==null&&F.value!==t&&F.value.focus(),Ce()}function fe(){M.value!==!0&&(b.value=-1,o.value===!0&&(o.value=!1),l.focused.value===!1&&(d!==null&&(clearTimeout(d),d=null),l.innerLoading.value===!0&&(i("filterAbort"),l.innerLoading.value=!1,r.value=!1)))}function ve(t){l.editable.value===!0&&(x===!0?(l.onControlFocusin(t),M.value=!0,Z(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?de(h.value):(E.value!==!0||s["no-option"]!==void 0)&&(o.value=!0))}function ae(){M.value=!1,fe()}function me(){e.useInput===!0&&xe(e.multiple!==!0&&e.fillInput===!0&&a.value.length!==0&&$.value(a.value[0])||"",!0,!0)}function je(t){let n=-1;if(t===!0){if(a.value.length!==0){const u=X.value(a.value[0]);n=e.options.findIndex(c=>_e(X.value(c),u))}U(n)}ce(n)}function Xt(t,n){o.value===!0&&l.innerLoading.value===!1&&(U(-1,!0),Z(()=>{o.value===!0&&l.innerLoading.value===!1&&(t>n?U():je(!0))}))}function vt(){M.value===!1&&G.value!==null&&G.value.updatePosition()}function mt(t){t!==void 0&&Se(t),i("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function St(t){t!==void 0&&Se(t),i("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function ht(){x=p.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||E.value===!1:!0),Y=p.platform.is.ios===!0&&x===!0&&e.useInput===!0?"fade":e.transitionShow}return yl(ht),bl(vt),ht(),Ot(()=>{m!==null&&clearTimeout(m),S!==null&&clearTimeout(S)}),Object.assign(v,{showPopup:ve,hidePopup:ae,removeAtIndex:Qe,add:nt,toggleOption:ne,getOptionIndex:()=>b.value,setOptionIndex:ce,moveOptionSelection:Ee,filter:de,updateMenuPosition:vt,updateInputValue:xe,isOptionSelected:$e,getEmittingOptionValue:ut,isOptionDisabled:(...t)=>se.value.apply(null,t)===!0,getOptionValue:(...t)=>X.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:a,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Me,targetRef:F,hasValue:T,showPopup:ve,floatingLabel:f(()=>e.hideSelected!==!0&&T.value===!0||typeof h.value=="number"||h.value.length!==0||gt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(M.value===!0||E.value!==!0||s["no-option"]!==void 0))return x===!0?$t():Dt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{me(),fe()})},onClick(t){if(We(t),x!==!0&&o.value===!0){fe(),F.value!==null&&F.value.focus();return}ve(t)}},getControl:t=>{const n=Lt(),u=t===!0||M.value!==!0||x!==!0;if(e.useInput===!0)n.push(Ht(t,u));else if(l.editable.value===!0){const q=u===!0?Fe.value:void 0;n.push(V("input",{ref:u===!0?F:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:K.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...q,onKeydown:st,onKeyup:ot,onKeypress:rt})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(V("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:it}))}if(te.value!==void 0&&e.disable!==!0&&Te.value.length!==0){const q=Te.value.map(_=>V("option",{value:_,selected:!0}));n.push(V("select",{class:"hidden",name:te.value,multiple:e.multiple},q))}const c=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return V("div",{class:"q-field__native row items-center",...c,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[V(ze,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:ke.value})]:null}),Mt(l)}});const Pl={class:"row q-col-gutter-sm items-center"},Nl={class:"col-6"},Ql={class:"col-6"},eu=Object.assign({name:"VendorsPage"},{__name:"vendors.page",setup(e){const s=kl("notify");pl();const i=R(""),v=ol(),p=R([]),o=["Markt (K\xE4se)","Markt (Metzger)","Markt (M\xFCsetand)","Markt (Rischk\xE4setand)","Markt (Toffeltand)","Markt (Zeit f\xFCr Rot)","Mazon","Natura","Nette","Online","We","We (Obst & M\xFCse)","We (Milchdukts)","We (K\xE4se)","We (Tr\xE4nks)","Kelhuhnladen","Nerladen"].sort();xl(async()=>{await v.fetchMenu(),p.value=v.menu.ingredients.toSorted((r,m)=>r.name.localeCompare(m.name))});const M=f(()=>i.value?p.value.filter(r=>JSON.stringify(r).toLowerCase().includes(i.value.toLowerCase())):p.value),b=()=>{p.value.push({name:"",vendor:""})},h=r=>{p.value.splice(r,1)},A=async()=>{await v.saveVendors(p.value)&&s("Vendors updated!")};return(r,m)=>(he(),wt(Ct,null,[O(Zt,{class:"q-my-sm bg-white text-primary"},{default:H(()=>[O(el,null,{default:H(()=>[O(tl,{class:"text-center text-weight-bold"},{default:H(()=>[kt(" Vendors ")]),_:1})]),_:1}),O(il)]),_:1}),Vt(v).status=="loading"?(he(),He(bt,{key:0,class:"flex flex-center"},{default:H(()=>[O(ll,{color:"primary",size:"xl"})]),_:1})):(he(),He(bt,{key:1},{default:H(()=>[p.value.length>0?(he(),He(ul,{key:0,class:"q-pt-md"},{default:H(()=>[O(De,{class:"flex justify-center"},{default:H(()=>[O(yt,{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=S=>i.value=S),standout:"",rounded:"",dense:"",clearable:"",placeholder:"Suchen",style:{width:"60%","min-width":"300px"}},{prepend:H(()=>[O(ze,{name:"search"})]),_:1},8,["modelValue"])]),_:1}),(he(!0),wt(Ct,null,_l(M.value,(S,k)=>(he(),He(De,{key:S},{default:H(()=>[O(Ae,null,{default:H(()=>[O(Je,null,{default:H(()=>[Ye("div",Pl,[Ye("div",Nl,[O(yt,{modelValue:S.name,"onUpdate:modelValue":x=>S.name=x,dense:"",onKeyup:pt(A,["enter"])},null,8,["modelValue","onUpdate:modelValue"])]),Ye("div",Ql,[O(Dl,{modelValue:S.vendor,"onUpdate:modelValue":x=>S.vendor=x,options:Vt(o),dense:"",onKeyup:pt(A,["enter"])},null,8,["modelValue","onUpdate:modelValue","options"])])])]),_:2},1024)]),_:2},1024),O(Ae,{side:""},{default:H(()=>[O(Xe,{flat:"",dense:"",round:"",color:"negative",icon:"delete_outline",onClick:x=>h(k)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128)),O(De,{clickable:"",onClick:b},{default:H(()=>[O(Ae,{side:"",top:""},{default:H(()=>[O(Xe,{size:"12px",flat:"",dense:"",round:"",color:"primary",icon:"add_circle_outline"})]),_:1}),O(Ae,null,{default:H(()=>[O(Je,null,{default:H(()=>[kt("Add ingredient...")]),_:1})]),_:1})]),_:1})]),_:1})):ql("",!0),O(Ml,{position:"bottom",offset:[0,-28],style:{"z-index":"6000"}},{default:H(()=>[O(Xe,{fab:"",icon:"cloud_upload",color:"accent",onClick:A})]),_:1})]),_:1}))],64))}});export{eu as default};
