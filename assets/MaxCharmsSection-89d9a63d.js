import{e as T,f as _,j as i,a as M,c as w,r as h,m as Q,g as O,w as P,I as X,A as Z,i as ee,u as ne,o as te,b as oe,D as se,H as ae,F as ie,k as ce,B as k}from"./index-1bc83ae7.js";import{c as le,a as re,T as ue}from"./chunk-OEQDSMWZ-47880cf7.js";import{C as de}from"./chunk-VFYM6BU6-913ab32a.js";import{u as me}from"./chunk-ENIANY67-e1e67542.js";var[xe,E]=T({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[he,F]=T({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[fe,Me,pe,ve]=le(),G=_(function(n,o){const{getButtonProps:s}=F(),r=s(n,o),t={display:"flex",alignItems:"center",width:"100%",outline:0,...E().button};return i.jsx(M.button,{...r,className:w("chakra-accordion__button",n.className),__css:t})});G.displayName="AccordionButton";function be(e){const{onChange:n,defaultIndex:o,index:s,allowMultiple:r,allowToggle:l,...t}=e;Ae(e),Ce(e);const x=pe(),[m,c]=h.useState(-1);h.useEffect(()=>()=>{c(-1)},[]);const[a,u]=re({value:s,defaultValue(){return r?o??[]:o??-1},onChange:n});return{index:a,setIndex:u,htmlProps:t,getAccordionItemProps:d=>{let g=!1;return d!==null&&(g=Array.isArray(a)?a.includes(d):a===d),{isOpen:g,onChange:v=>{if(d!==null)if(r&&Array.isArray(a)){const j=v?a.concat(d):a.filter(S=>S!==d);u(j)}else v?u(d):l&&u(-1)}}},focusedIndex:m,setFocusedIndex:c,descendants:x}}var[ge,$]=T({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function ye(e){const{isDisabled:n,isFocusable:o,id:s,...r}=e,{getAccordionItemProps:l,setFocusedIndex:t}=$(),x=h.useRef(null),m=h.useId(),c=s??m,a=`accordion-button-${c}`,u=`accordion-panel-${c}`;we(e);const{register:f,index:d,descendants:g}=ve({disabled:n&&!o}),{isOpen:p,onChange:v}=l(d===-1?null:d);je({isOpen:p,isDisabled:n});const j=()=>{v==null||v(!0)},S=()=>{v==null||v(!1)},B=h.useCallback(()=>{v==null||v(!p),t(d)},[d,t,p,v]),R=h.useCallback(N=>{const A={ArrowDown:()=>{const b=g.nextEnabled(d);b==null||b.node.focus()},ArrowUp:()=>{const b=g.prevEnabled(d);b==null||b.node.focus()},Home:()=>{const b=g.firstEnabled();b==null||b.node.focus()},End:()=>{const b=g.lastEnabled();b==null||b.node.focus()}}[N.key];A&&(N.preventDefault(),A(N))},[g,d]),H=h.useCallback(()=>{t(d)},[t,d]),V=h.useCallback(function(y={},A=null){return{...y,type:"button",ref:Q(f,x,A),id:a,disabled:!!n,"aria-expanded":!!p,"aria-controls":u,onClick:O(y.onClick,B),onFocus:O(y.onFocus,H),onKeyDown:O(y.onKeyDown,R)}},[a,n,p,B,H,R,u,f]),J=h.useCallback(function(y={},A=null){return{...y,ref:A,role:"region",id:u,"aria-labelledby":a,hidden:!p}},[a,p,u]);return{isOpen:p,isDisabled:n,isFocusable:o,onOpen:j,onClose:S,getButtonProps:V,getPanelProps:J,htmlProps:r}}function Ae(e){const n=e.index||e.defaultIndex,o=n!=null&&!Array.isArray(n)&&e.allowMultiple;P({condition:!!o,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})}function Ce(e){P({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function we(e){P({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function je(e){P({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function K(e){const{isOpen:n,isDisabled:o}=F(),{reduceMotion:s}=$(),r=w("chakra-accordion__icon",e.className),l=E(),t={opacity:o?.4:1,transform:n?"rotate(-180deg)":void 0,transition:s?void 0:"transform 0.2s",transformOrigin:"center",...l.icon};return i.jsx(X,{viewBox:"0 0 24 24","aria-hidden":!0,className:r,__css:t,...e,children:i.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}K.displayName="AccordionIcon";var L=_(function(n,o){const{children:s,className:r}=n,{htmlProps:l,...t}=ye(n),m={...E().container,overflowAnchor:"none"},c=h.useMemo(()=>t,[t]);return i.jsx(he,{value:c,children:i.jsx(M.div,{ref:o,...l,className:w("chakra-accordion__item",r),__css:m,children:typeof s=="function"?s({isExpanded:!!t.isOpen,isDisabled:!!t.isDisabled}):s})})});L.displayName="AccordionItem";var D={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},W={enter:(e,n)=>({...e,delay:typeof n=="number"?n:n==null?void 0:n.enter}),exit:(e,n)=>({...e,delay:typeof n=="number"?n:n==null?void 0:n.exit})},Se=e=>e!=null&&parseInt(e.toString(),10)>0,z={exit:{height:{duration:.2,ease:D.ease},opacity:{duration:.3,ease:D.ease}},enter:{height:{duration:.3,ease:D.ease},opacity:{duration:.4,ease:D.ease}}},Ne={exit:({animateOpacity:e,startingHeight:n,transition:o,transitionEnd:s,delay:r})=>{var l;return{...e&&{opacity:Se(n)?1:0},height:n,transitionEnd:s==null?void 0:s.exit,transition:(l=o==null?void 0:o.exit)!=null?l:W.exit(z.exit,r)}},enter:({animateOpacity:e,endingHeight:n,transition:o,transitionEnd:s,delay:r})=>{var l;return{...e&&{opacity:1},height:n,transitionEnd:s==null?void 0:s.enter,transition:(l=o==null?void 0:o.enter)!=null?l:W.enter(z.enter,r)}}},U=h.forwardRef((e,n)=>{const{in:o,unmountOnExit:s,animateOpacity:r=!0,startingHeight:l=0,endingHeight:t="auto",style:x,className:m,transition:c,transitionEnd:a,...u}=e,[f,d]=h.useState(!1);h.useEffect(()=>{const S=setTimeout(()=>{d(!0)});return()=>clearTimeout(S)},[]),P({condition:Number(l)>0&&!!s,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const g=parseFloat(l.toString())>0,p={startingHeight:l,endingHeight:t,animateOpacity:r,transition:f?c:{enter:{duration:0}},transitionEnd:{enter:a==null?void 0:a.enter,exit:s?a==null?void 0:a.exit:{...a==null?void 0:a.exit,display:g?"block":"none"}}},v=s?o:!0,j=o||s?"enter":"exit";return i.jsx(Z,{initial:!1,custom:p,children:v&&i.jsx(ee.div,{ref:n,...u,className:w("chakra-collapse",m),style:{overflow:"hidden",display:"block",...x},custom:p,variants:Ne,initial:s?"exit":!1,animate:j,exit:"exit"})})});U.displayName="Collapse";var Y=_(function(n,o){const{className:s,motionProps:r,...l}=n,{reduceMotion:t}=$(),{getPanelProps:x,isOpen:m}=F(),c=x(l,o),a=w("chakra-accordion__panel",s),u=E();t||delete c.hidden;const f=i.jsx(M.div,{...c,__css:u.panel,className:a});return t?f:i.jsx(U,{in:m,...r,children:f})});Y.displayName="AccordionPanel";var q=_(function({children:n,reduceMotion:o,...s},r){const l=ne("Accordion",s),t=te(s),{htmlProps:x,descendants:m,...c}=be(t),a=h.useMemo(()=>({...c,reduceMotion:!!o}),[c,o]);return i.jsx(fe,{value:m,children:i.jsx(ge,{value:a,children:i.jsx(xe,{value:l,children:i.jsx(M.div,{ref:r,...x,className:w("chakra-accordion",s.className),__css:l.root,children:n})})})})});q.displayName="Accordion";const C={quest:[34,32,104,105,33,96,84,138],item:[60,58,88,87,90,89],battleSurvival:[64,65,66,35,36,57,40,93,59,112,114,132,135,121],Resistance:[61,62,63,76,108,118],parameterChange:[1,56],battleElemSpecial:[13,14,15,16,17,18,21,20,19,41,81,42,124,134,141],battleAttack:[6,8,10,38,39,7,11,130,37,91,103,4,106,5,3,9,2,30,31,45,113,115,116,117,125,127,128,131,120,119,136,145,137,139,140],battleSwordsman:[22,23,12,26,85,25,107,46],battleGunner:[48,50,49,24,27,47,53,52,51,54,55,126],setSkill:[100,101,102]},I={1:[3,2],2:[4,3],3:[3,2],4:[4,3],5:[3,2],6:[3,2],7:[3,2],8:[3,2],9:[5,4],10:[3,2],11:[3,2],12:[3,2],13:[5,3],14:[5,3],15:[5,3],16:[5,3],17:[5,3],18:[3,3],19:[3,2],20:[3,2],21:[3,2],22:[4,3],23:[3,2],24:[3,2],25:[3,2],26:[3,2],27:[3,2],30:[3,2],31:[3,2],32:[3,2],33:[5,4],34:[3,2],35:[5,4],36:[3,2],37:[3,2],38:[3,2],39:[3,2],40:[3,2],41:[3,2],42:[3,3],45:[3,2],46:[2,1],47:[2,1],48:[3,2],49:[3,2],50:[3,2],51:[3,2],52:[3,2],53:[3,2],54:[3,2],55:[3,2],56:[7,6],57:[3,3],58:[3,3],59:[3,3],60:[3,3],61:[5,4],62:[3,3],63:[3,3],64:[3,3],65:[5,4],66:[3,2],76:[3,3],81:[3,2],84:[3,2],85:[3,2],87:[3,2],88:[3,3],89:[5,4],90:[3,3],91:[4,3],93:[3,3],96:[3,3],100:[4,3],101:[4,3],102:[4,3],103:[4,3],104:[3,3],105:[3,3],106:[3,2],107:[3,2],108:[4,3],112:[3,2],113:[2,1],114:[3,2],115:[3,2],116:[3,2],117:[3,2],118:[5,4],119:[3,2],120:[3,2],121:[3,2],124:[3,2],125:[3,2],126:[2,1],127:[3,2],128:[3,2],130:[3,2],131:[3,2],132:[2,1],134:[3,2],135:[2,1],136:[3,2],137:[2,1],138:[3,2],139:[3,2],140:[3,2],141:[3,2],145:[3,2]},Pe=["4,1,1","3,3,1","2,2,2"],Ee=()=>{const{t:e}=oe(),n=me(),[o,s]=h.useState([]),[r,l]=h.useState("");return i.jsxs(i.Fragment,{children:[i.jsx(se,{my:10}),i.jsx(ae,{as:"h2",size:"lg",mb:5,children:e("layout.maxCharms")}),i.jsx(q,{allowMultiple:!0,mb:5,children:Object.keys(C).map(t=>{const x=C[t].every(c=>o.includes(c)),m=!x&&C[t].some(c=>o.includes(c));return i.jsxs(L,{children:[i.jsxs(ie,{as:"h3",children:[i.jsx(de,{colorScheme:"cyan",isChecked:x,isIndeterminate:m,mr:2,onChange:c=>{c.stopPropagation(),s(a=>(x?a.filter(u=>!C[t].includes(u)):[...a,...C[t].filter(u=>!a.includes(u))]).sort((u,f)=>u-f)),l("")}}),i.jsxs(G,{children:[i.jsx(ce,{as:"span",flexGrow:"1",textAlign:"left",children:e(`category.${t}`)}),i.jsx(K,{})]})]}),i.jsx(Y,{pb:4,children:C[t].map(c=>{const a=o.includes(c);return i.jsx(k,{colorScheme:"cyan",size:"sm",borderWidth:1,variant:a?"solid":"outline",mr:3,mb:3,onClick:()=>{s(u=>(a?u.filter(f=>f!==c):[...u,c]).sort((f,d)=>f-d)),l("")},children:e(`skill.${c}`)},c)})})]},t)})}),i.jsx(k,{colorScheme:o.length<2?"gray":"blue",mb:5,mr:3,onClick:()=>l(o.map((t,x)=>o.map((m,c)=>x===c||I[t][0]===I[t][1]?[]:Pe.map(a=>`${e(`skill.${t}`)},${I[t][0]},${e(`skill.${m}`)},${I[m][1]},${a}`)).filter(m=>m.length)).flat(3).join(`
`)),children:e("layout.convert")}),i.jsx(k,{colorScheme:"red",variant:"outline",mb:5,onClick:()=>{s([]),l("")},children:e("layout.clear")}),i.jsx(ue,{h:"3xs",isReadOnly:!0,value:r,mb:5,onFocus:t=>t.target.select()}),i.jsx(k,{colorScheme:"green",onClick:()=>{navigator.clipboard.writeText(r),n({title:"Copied",status:"success",duration:3e3,isClosable:!0})},children:e("layout.copy")})]})};export{Ee as default};