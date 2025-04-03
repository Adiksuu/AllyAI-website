const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Q8vNCZVI.js","assets/index-BtAHqjqB.js","assets/_sendMessage-B-9jfVuV.js","assets/Sidebar-eFX6kK0U.js","assets/_getSettings-DRJhAmNv.js","assets/_upgradeAccount-CtbiBU6f.js","assets/Models-UdFfj9QV.js","assets/Chat-BCod4W-y.js","assets/_handleDelete-wUc0V8YD.js","assets/Settings-CDNEPAx1.js","assets/_unlockTheme-DqE_uakg.js","assets/Success-BOILK_r-.js","assets/Main-BUEEMGIR.js","assets/Event-3fv1a69q.js"])))=>i.map(i=>d[i]);
function JI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var F4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hv={exports:{}},Ic={},Gv={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),XI=Symbol.for("react.portal"),ZI=Symbol.for("react.fragment"),eS=Symbol.for("react.strict_mode"),tS=Symbol.for("react.profiler"),nS=Symbol.for("react.provider"),rS=Symbol.for("react.context"),iS=Symbol.for("react.forward_ref"),sS=Symbol.for("react.suspense"),oS=Symbol.for("react.memo"),aS=Symbol.for("react.lazy"),Om=Symbol.iterator;function lS(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var Yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kv=Object.assign,qv={};function ys(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||Yv}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qv(){}Qv.prototype=ys.prototype;function hh(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||Yv}var ph=hh.prototype=new Qv;ph.constructor=hh;Kv(ph,ys.prototype);ph.isPureReactComponent=!0;var xm=Array.isArray,Jv=Object.prototype.hasOwnProperty,mh={current:null},Xv={key:!0,ref:!0,__self:!0,__source:!0};function Zv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jv.call(e,r)&&!Xv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ua,type:t,key:s,ref:o,props:i,_owner:mh.current}}function cS(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function uS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lm=/\/+/g;function Cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uS(""+t.key):e.toString(36)}function sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case XI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cu(o,0):r,xm(i)?(n="",t!=null&&(n=t.replace(Lm,"$&/")+"/"),sl(i,e,n,"",function(c){return c})):i!=null&&(gh(i)&&(i=cS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",xm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Cu(s,a);o+=sl(s,e,n,l,i)}else if(l=lS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Cu(s,a++),o+=sl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var r=[],i=0;return sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function dS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ke={current:null},ol={transition:null},fS={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:ol,ReactCurrentOwner:mh};function ey(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=ys;B.Fragment=ZI;B.Profiler=tS;B.PureComponent=hh;B.StrictMode=eS;B.Suspense=sS;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fS;B.act=ey;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Kv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jv.call(e,l)&&!Xv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ua,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:rS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nS,_context:t},t.Consumer=t};B.createElement=Zv;B.createFactory=function(t){var e=Zv.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:iS,render:t}};B.isValidElement=gh;B.lazy=function(t){return{$$typeof:aS,_payload:{_status:-1,_result:t},_init:dS}};B.memo=function(t,e){return{$$typeof:oS,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};B.unstable_act=ey;B.useCallback=function(t,e){return Ke.current.useCallback(t,e)};B.useContext=function(t){return Ke.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Ke.current.useDeferredValue(t)};B.useEffect=function(t,e){return Ke.current.useEffect(t,e)};B.useId=function(){return Ke.current.useId()};B.useImperativeHandle=function(t,e,n){return Ke.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Ke.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Ke.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Ke.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Ke.current.useReducer(t,e,n)};B.useRef=function(t){return Ke.current.useRef(t)};B.useState=function(t){return Ke.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Ke.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Ke.current.useTransition()};B.version="18.3.1";Gv.exports=B;var T=Gv.exports;const mn=$v(T),hS=JI({__proto__:null,default:mn},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pS=T,mS=Symbol.for("react.element"),gS=Symbol.for("react.fragment"),_S=Object.prototype.hasOwnProperty,vS=pS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yS={key:!0,ref:!0,__self:!0,__source:!0};function ty(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_S.call(e,r)&&!yS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mS,type:t,key:s,ref:o,props:i,_owner:vS.current}}Ic.Fragment=gS;Ic.jsx=ty;Ic.jsxs=ty;Hv.exports=Ic;var k=Hv.exports,ny={exports:{}},yt={},ry={exports:{}},iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,M){var z=N.length;N.push(M);e:for(;0<z;){var me=z-1>>>1,Te=N[me];if(0<i(Te,M))N[me]=M,N[z]=Te,z=me;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],z=N.pop();if(z!==M){N[0]=z;e:for(var me=0,Te=N.length,Ma=Te>>>1;me<Ma;){var Dr=2*(me+1)-1,Su=N[Dr],Mr=Dr+1,Fa=N[Mr];if(0>i(Su,z))Mr<Te&&0>i(Fa,Su)?(N[me]=Fa,N[Mr]=z,me=Mr):(N[me]=Su,N[Dr]=z,me=Dr);else if(Mr<Te&&0>i(Fa,z))N[me]=Fa,N[Mr]=z,me=Mr;else break e}}return M}function i(N,M){var z=N.sortIndex-M.sortIndex;return z!==0?z:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,f=3,g=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=N)r(c),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(c)}}function y(N){if(v=!1,m(N),!_)if(n(l)!==null)_=!0,Eu(C);else{var M=n(c);M!==null&&Iu(y,M.startTime-N)}}function C(N,M){_=!1,v&&(v=!1,p(O),O=-1),g=!0;var z=f;try{for(m(M),u=n(l);u!==null&&(!(u.expirationTime>M)||N&&!Dt());){var me=u.callback;if(typeof me=="function"){u.callback=null,f=u.priorityLevel;var Te=me(u.expirationTime<=M);M=t.unstable_now(),typeof Te=="function"?u.callback=Te:u===n(l)&&r(l),m(M)}else r(l);u=n(l)}if(u!==null)var Ma=!0;else{var Dr=n(c);Dr!==null&&Iu(y,Dr.startTime-M),Ma=!1}return Ma}finally{u=null,f=z,g=!1}}var b=!1,R=null,O=-1,Z=5,W=-1;function Dt(){return!(t.unstable_now()-W<Z)}function xs(){if(R!==null){var N=t.unstable_now();W=N;var M=!0;try{M=R(!0,N)}finally{M?Ls():(b=!1,R=null)}}else b=!1}var Ls;if(typeof h=="function")Ls=function(){h(xs)};else if(typeof MessageChannel<"u"){var Am=new MessageChannel,QI=Am.port2;Am.port1.onmessage=xs,Ls=function(){QI.postMessage(null)}}else Ls=function(){w(xs,0)};function Eu(N){R=N,b||(b=!0,Ls())}function Iu(N,M){O=w(function(){N(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Eu(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var z=f;f=M;try{return N()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=f;f=N;try{return M()}finally{f=z}},t.unstable_scheduleCallback=function(N,M,z){var me=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?me+z:me):z=me,N){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=z+Te,N={id:d++,callback:M,priorityLevel:N,startTime:z,expirationTime:Te,sortIndex:-1},z>me?(N.sortIndex=z,e(c,N),n(l)===null&&N===n(c)&&(v?(p(O),O=-1):v=!0,Iu(y,z-me))):(N.sortIndex=Te,e(l,N),_||g||(_=!0,Eu(C))),N},t.unstable_shouldYield=Dt,t.unstable_wrapCallback=function(N){var M=f;return function(){var z=f;f=M;try{return N.apply(this,arguments)}finally{f=z}}}})(iy);ry.exports=iy;var wS=ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ES=T,gt=wS;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sy=new Set,ko={};function mi(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(ko[t]=e,t=0;t<e.length;t++)sy.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,IS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Mm={};function SS(t){return Ed.call(Mm,t)?!0:Ed.call(Dm,t)?!1:IS.test(t)?Mm[t]=!0:(Dm[t]=!0,!1)}function CS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TS(t,e,n,r){if(e===null||typeof e>"u"||CS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var _h=/[\-:]([a-z])/g;function vh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_h,vh);Fe[e]=new qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_h,vh);Fe[e]=new qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_h,vh);Fe[e]=new qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new qe(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function yh(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TS(e,n,i,r)&&(n=null),r||i===null?SS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=ES.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),oy=Symbol.for("react.provider"),ay=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Cd=Symbol.for("react.suspense_list"),Ih=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),ly=Symbol.for("react.offscreen"),Fm=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,Tu;function Js(t){if(Tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tu=e&&e[1]||""}return`
`+Tu+t}var ku=!1;function Pu(t,e){if(!t||ku)return"";ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function kS(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=Pu(t.type,!1),t;case 11:return t=Pu(t.type.render,!1),t;case 1:return t=Pu(t.type,!0),t;default:return""}}function Td(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case Pi:return"Portal";case Id:return"Profiler";case wh:return"StrictMode";case Sd:return"Suspense";case Cd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ay:return(t.displayName||"Context")+".Consumer";case oy:return(t._context.displayName||"Context")+".Provider";case Eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ih:return e=t.displayName||null,e!==null?e:Td(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return Td(t(e))}catch{}}return null}function PS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Td(e);case 8:return e===wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RS(t){var e=cy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=RS(t))}function uy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kd(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dy(t,e){e=e.checked,e!=null&&yh(t,"checked",e,!1)}function Pd(t,e){dy(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Xs(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function fy(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,py=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NS=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){NS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function my(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function gy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=my(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bS=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ad(t,e){if(e){if(bS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function Sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ld=null,Bi=null,$i=null;function Vm(t){if(t=ha(t)){if(typeof Ld!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Pc(e),Ld(t.stateNode,t.type,e))}}function _y(t){Bi?$i?$i.push(t):$i=[t]:Bi=t}function vy(){if(Bi){var t=Bi,e=$i;if($i=Bi=null,Vm(t),e)for(t=0;t<e.length;t++)Vm(e[t])}}function yy(t,e){return t(e)}function wy(){}var Ru=!1;function Ey(t,e,n){if(Ru)return t(e,n);Ru=!0;try{return yy(t,e,n)}finally{Ru=!1,(Bi!==null||$i!==null)&&(wy(),vy())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Pc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Dd=!1;if(Rn)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{Dd=!1}function AS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var oo=!1,Cl=null,Tl=!1,Md=null,OS={onError:function(t){oo=!0,Cl=t}};function xS(t,e,n,r,i,s,o,a,l){oo=!1,Cl=null,AS.apply(OS,arguments)}function LS(t,e,n,r,i,s,o,a,l){if(xS.apply(this,arguments),oo){if(oo){var c=Cl;oo=!1,Cl=null}else throw Error(I(198));Tl||(Tl=!0,Md=c)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Iy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bm(t){if(gi(t)!==t)throw Error(I(188))}function DS(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bm(i),t;if(s===r)return Bm(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Sy(t){return t=DS(t),t!==null?Cy(t):null}function Cy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cy(t);if(e!==null)return e;t=t.sibling}return null}var Ty=gt.unstable_scheduleCallback,$m=gt.unstable_cancelCallback,MS=gt.unstable_shouldYield,FS=gt.unstable_requestPaint,ge=gt.unstable_now,US=gt.unstable_getCurrentPriorityLevel,Ch=gt.unstable_ImmediatePriority,ky=gt.unstable_UserBlockingPriority,kl=gt.unstable_NormalPriority,zS=gt.unstable_LowPriority,Py=gt.unstable_IdlePriority,Sc=null,an=null;function jS(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Sc,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:BS,WS=Math.log,VS=Math.LN2;function BS(t){return t>>>=0,t===0?32:31-(WS(t)/VS|0)|0}var Va=64,Ba=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Zs(a):(s&=o,s!==0&&(r=Zs(s)))}else o=n&~i,o!==0?r=Zs(o):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vt(e),i=1<<n,r|=t[n],e&=~i;return r}function $S(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$S(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ry(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vt(e),t[e]=n}function GS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Th(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function Ny(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var by,kh,Ay,Oy,xy,Ud=!1,$a=[],tr=null,nr=null,rr=null,No=new Map,bo=new Map,Gn=[],YS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function Fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ha(e),e!==null&&kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function KS(t,e,n,r,i){switch(e){case"focusin":return tr=Fs(tr,t,e,n,r,i),!0;case"dragenter":return nr=Fs(nr,t,e,n,r,i),!0;case"mouseover":return rr=Fs(rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return No.set(s,Fs(No.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bo.set(s,Fs(bo.get(s)||null,t,e,n,r,i)),!0}return!1}function Ly(t){var e=Vr(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=Iy(n),e!==null){t.blockedOn=e,xy(t.priority,function(){Ay(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xd=r,n.target.dispatchEvent(r),xd=null}else return e=ha(n),e!==null&&kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){al(t)&&n.delete(e)}function qS(){Ud=!1,tr!==null&&al(tr)&&(tr=null),nr!==null&&al(nr)&&(nr=null),rr!==null&&al(rr)&&(rr=null),No.forEach(Gm),bo.forEach(Gm)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,Ud||(Ud=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,qS)))}function Ao(t){function e(i){return Us(i,t)}if(0<$a.length){Us($a[0],t);for(var n=1;n<$a.length;n++){var r=$a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&Us(tr,t),nr!==null&&Us(nr,t),rr!==null&&Us(rr,t),No.forEach(e),bo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Ly(n),n.blockedOn===null&&Gn.shift()}var Hi=Fn.ReactCurrentBatchConfig,Rl=!0;function QS(t,e,n,r){var i=K,s=Hi.transition;Hi.transition=null;try{K=1,Ph(t,e,n,r)}finally{K=i,Hi.transition=s}}function JS(t,e,n,r){var i=K,s=Hi.transition;Hi.transition=null;try{K=4,Ph(t,e,n,r)}finally{K=i,Hi.transition=s}}function Ph(t,e,n,r){if(Rl){var i=zd(t,e,n,r);if(i===null)zu(t,e,r,Nl,n),Hm(t,r);else if(KS(i,t,e,n,r))r.stopPropagation();else if(Hm(t,r),e&4&&-1<YS.indexOf(t)){for(;i!==null;){var s=ha(i);if(s!==null&&by(s),s=zd(t,e,n,r),s===null&&zu(t,e,r,Nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zu(t,e,r,null,n)}}var Nl=null;function zd(t,e,n,r){if(Nl=null,t=Sh(r),t=Vr(t),t!==null)if(e=gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Iy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function Dy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(US()){case Ch:return 1;case ky:return 4;case kl:case zS:return 16;case Py:return 536870912;default:return 16}default:return 16}}var Kn=null,Rh=null,ll=null;function My(){if(ll)return ll;var t,e=Rh,n=e.length,r,i="value"in Kn?Kn.value:Kn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ll=i.slice(t,1<r?1-r:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ha(){return!0}function Ym(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ha:Ym,this.isPropagationStopped=Ym,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nh=wt(ws),fa=ce({},ws,{view:0,detail:0}),XS=wt(fa),bu,Au,zs,Cc=ce({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(bu=t.screenX-zs.screenX,Au=t.screenY-zs.screenY):Au=bu=0,zs=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),Km=wt(Cc),ZS=ce({},Cc,{dataTransfer:0}),eC=wt(ZS),tC=ce({},fa,{relatedTarget:0}),Ou=wt(tC),nC=ce({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),rC=wt(nC),iC=ce({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sC=wt(iC),oC=ce({},ws,{data:0}),qm=wt(oC),aC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cC[t])?!!e[t]:!1}function bh(){return uC}var dC=ce({},fa,{key:function(t){if(t.key){var e=aC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bh,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fC=wt(dC),hC=ce({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=wt(hC),pC=ce({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bh}),mC=wt(pC),gC=ce({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),_C=wt(gC),vC=ce({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yC=wt(vC),wC=[9,13,27,32],Ah=Rn&&"CompositionEvent"in window,ao=null;Rn&&"documentMode"in document&&(ao=document.documentMode);var EC=Rn&&"TextEvent"in window&&!ao,Fy=Rn&&(!Ah||ao&&8<ao&&11>=ao),Jm=" ",Xm=!1;function Uy(t,e){switch(t){case"keyup":return wC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function IC(t,e){switch(t){case"compositionend":return zy(e);case"keypress":return e.which!==32?null:(Xm=!0,Jm);case"textInput":return t=e.data,t===Jm&&Xm?null:t;default:return null}}function SC(t,e){if(Ni)return t==="compositionend"||!Ah&&Uy(t,e)?(t=My(),ll=Rh=Kn=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fy&&e.locale!=="ko"?null:e.data;default:return null}}var CC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CC[t.type]:e==="textarea"}function jy(t,e,n,r){_y(r),e=bl(e,"onChange"),0<e.length&&(n=new Nh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var lo=null,Oo=null;function TC(t){Jy(t,0)}function Tc(t){var e=Oi(t);if(uy(e))return t}function kC(t,e){if(t==="change")return e}var Wy=!1;if(Rn){var xu;if(Rn){var Lu="oninput"in document;if(!Lu){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),Lu=typeof eg.oninput=="function"}xu=Lu}else xu=!1;Wy=xu&&(!document.documentMode||9<document.documentMode)}function tg(){lo&&(lo.detachEvent("onpropertychange",Vy),Oo=lo=null)}function Vy(t){if(t.propertyName==="value"&&Tc(Oo)){var e=[];jy(e,Oo,t,Sh(t)),Ey(TC,e)}}function PC(t,e,n){t==="focusin"?(tg(),lo=e,Oo=n,lo.attachEvent("onpropertychange",Vy)):t==="focusout"&&tg()}function RC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tc(Oo)}function NC(t,e){if(t==="click")return Tc(e)}function bC(t,e){if(t==="input"||t==="change")return Tc(e)}function AC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:AC;function xo(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ed.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rg(t,e){var n=ng(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ng(n)}}function By(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?By(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $y(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OC(t){var e=$y(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&By(n.ownerDocument.documentElement,n)){if(r!==null&&Oh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rg(n,s);var o=rg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xC=Rn&&"documentMode"in document&&11>=document.documentMode,bi=null,jd=null,co=null,Wd=!1;function ig(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wd||bi==null||bi!==Sl(r)||(r=bi,"selectionStart"in r&&Oh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&xo(co,r)||(co=r,r=bl(jd,"onSelect"),0<r.length&&(e=new Nh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ai={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Du={},Hy={};Rn&&(Hy=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function kc(t){if(Du[t])return Du[t];if(!Ai[t])return t;var e=Ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hy)return Du[t]=e[n];return t}var Gy=kc("animationend"),Yy=kc("animationiteration"),Ky=kc("animationstart"),qy=kc("transitionend"),Qy=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){Qy.set(t,e),mi(e,[t])}for(var Mu=0;Mu<sg.length;Mu++){var Fu=sg[Mu],LC=Fu.toLowerCase(),DC=Fu[0].toUpperCase()+Fu.slice(1);Rr(LC,"on"+DC)}Rr(Gy,"onAnimationEnd");Rr(Yy,"onAnimationIteration");Rr(Ky,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(qy,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MC=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function og(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LS(r,e,void 0,t),t.currentTarget=null}function Jy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;og(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;og(i,a,c),s=l}}}if(Tl)throw t=Md,Tl=!1,Md=null,t}function ee(t,e){var n=e[Gd];n===void 0&&(n=e[Gd]=new Set);var r=t+"__bubble";n.has(r)||(Xy(e,t,2,!1),n.add(r))}function Uu(t,e,n){var r=0;e&&(r|=4),Xy(n,t,r,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[Ya]){t[Ya]=!0,sy.forEach(function(n){n!=="selectionchange"&&(MC.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,Uu("selectionchange",!1,e))}}function Xy(t,e,n,r){switch(Dy(e)){case 1:var i=QS;break;case 4:i=JS;break;default:i=Ph}n=i.bind(null,e,n,t),i=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ey(function(){var c=s,d=Sh(n),u=[];e:{var f=Qy.get(t);if(f!==void 0){var g=Nh,_=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":g=fC;break;case"focusin":_="focus",g=Ou;break;case"focusout":_="blur",g=Ou;break;case"beforeblur":case"afterblur":g=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=eC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mC;break;case Gy:case Yy:case Ky:g=rC;break;case qy:g=_C;break;case"scroll":g=XS;break;case"wheel":g=yC;break;case"copy":case"cut":case"paste":g=sC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qm}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var h=c,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Ro(h,p),y!=null&&v.push(Do(h,y,m)))),w)break;h=h.return}0<v.length&&(f=new g(f,_,null,n,d),u.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==xd&&(_=n.relatedTarget||n.fromElement)&&(Vr(_)||_[Nn]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?Vr(_):null,_!==null&&(w=gi(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(v=Km,y="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qm,y="onPointerLeave",p="onPointerEnter",h="pointer"),w=g==null?f:Oi(g),m=_==null?f:Oi(_),f=new v(y,h+"leave",g,n,d),f.target=w,f.relatedTarget=m,y=null,Vr(d)===c&&(v=new v(p,h+"enter",_,n,d),v.target=m,v.relatedTarget=w,y=v),w=y,g&&_)t:{for(v=g,p=_,h=0,m=v;m;m=Ci(m))h++;for(m=0,y=p;y;y=Ci(y))m++;for(;0<h-m;)v=Ci(v),h--;for(;0<m-h;)p=Ci(p),m--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=Ci(v),p=Ci(p)}v=null}else v=null;g!==null&&ag(u,f,g,v,!1),_!==null&&w!==null&&ag(u,w,_,v,!0)}}e:{if(f=c?Oi(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=kC;else if(Zm(f))if(Wy)C=bC;else{C=RC;var b=PC}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=NC);if(C&&(C=C(t,c))){jy(u,C,n,d);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Rd(f,"number",f.value)}switch(b=c?Oi(c):window,t){case"focusin":(Zm(b)||b.contentEditable==="true")&&(bi=b,jd=c,co=null);break;case"focusout":co=jd=bi=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,ig(u,n,d);break;case"selectionchange":if(xC)break;case"keydown":case"keyup":ig(u,n,d)}var R;if(Ah)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ni?Uy(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Fy&&n.locale!=="ko"&&(Ni||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ni&&(R=My()):(Kn=d,Rh="value"in Kn?Kn.value:Kn.textContent,Ni=!0)),b=bl(c,O),0<b.length&&(O=new qm(O,t,null,n,d),u.push({event:O,listeners:b}),R?O.data=R:(R=zy(n),R!==null&&(O.data=R)))),(R=EC?IC(t,n):SC(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(d=new qm("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=R))}Jy(u,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(Do(t,s,i)),s=Ro(t,e),s!=null&&r.push(Do(t,s,i))),t=t.return}return r}function Ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ag(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ro(n,s),l!=null&&o.unshift(Do(n,l,a))):i||(l=Ro(n,s),l!=null&&o.push(Do(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FC=/\r\n?/g,UC=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(FC,`
`).replace(UC,"")}function Ka(t,e,n){if(e=lg(e),lg(t)!==e&&n)throw Error(I(425))}function Al(){}var Vd=null,Bd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,zC=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,jC=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(WC)}:Hd;function WC(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Es,Mo="__reactProps$"+Es,Nn="__reactContainer$"+Es,Gd="__reactEvents$"+Es,VC="__reactListeners$"+Es,BC="__reactHandles$"+Es;function Vr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ug(t);t!==null;){if(n=t[Xt])return n;t=ug(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[Xt]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Pc(t){return t[Mo]||null}var Yd=[],xi=-1;function Nr(t){return{current:t}}function te(t){0>xi||(t.current=Yd[xi],Yd[xi]=null,xi--)}function J(t,e){xi++,Yd[xi]=t.current,t.current=e}var gr={},$e=Nr(gr),tt=Nr(!1),ei=gr;function ns(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function Ol(){te(tt),te($e)}function dg(t,e,n){if($e.current!==gr)throw Error(I(168));J($e,e),J(tt,n)}function Zy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,PS(t)||"Unknown",i));return ce({},n,r)}function xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,ei=$e.current,J($e,t),J(tt,tt.current),!0}function fg(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Zy(t,e,ei),r.__reactInternalMemoizedMergedChildContext=t,te(tt),te($e),J($e,t)):te(tt),J(tt,n)}var vn=null,Rc=!1,Wu=!1;function e0(t){vn===null?vn=[t]:vn.push(t)}function $C(t){Rc=!0,e0(t)}function br(){if(!Wu&&vn!==null){Wu=!0;var t=0,e=K;try{var n=vn;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,Rc=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),Ty(Ch,br),i}finally{K=e,Wu=!1}}return null}var Li=[],Di=0,Ll=null,Dl=0,It=[],St=0,ti=null,yn=1,wn="";function Fr(t,e){Li[Di++]=Dl,Li[Di++]=Ll,Ll=t,Dl=e}function t0(t,e,n){It[St++]=yn,It[St++]=wn,It[St++]=ti,ti=t;var r=yn;t=wn;var i=32-Vt(r)-1;r&=~(1<<i),n+=1;var s=32-Vt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yn=1<<32-Vt(e)+i|n<<i|r,wn=s+t}else yn=1<<s|n<<i|r,wn=t}function xh(t){t.return!==null&&(Fr(t,1),t0(t,1,0))}function Lh(t){for(;t===Ll;)Ll=Li[--Di],Li[Di]=null,Dl=Li[--Di],Li[Di]=null;for(;t===ti;)ti=It[--St],It[St]=null,wn=It[--St],It[St]=null,yn=It[--St],It[St]=null}var ft=null,ut=null,re=!1,jt=null;function n0(t,e){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,ut=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ti!==null?{id:yn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,ut=null,!0):!1;default:return!1}}function Kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qd(t){if(re){var e=ut;if(e){var n=e;if(!hg(t,e)){if(Kd(t))throw Error(I(418));e=ir(n.nextSibling);var r=ft;e&&hg(t,e)?n0(r,n):(t.flags=t.flags&-4097|2,re=!1,ft=t)}}else{if(Kd(t))throw Error(I(418));t.flags=t.flags&-4097|2,re=!1,ft=t}}}function pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function qa(t){if(t!==ft)return!1;if(!re)return pg(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=ut)){if(Kd(t))throw r0(),Error(I(418));for(;e;)n0(t,e),e=ir(e.nextSibling)}if(pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ut=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ut=null}}else ut=ft?ir(t.stateNode.nextSibling):null;return!0}function r0(){for(var t=ut;t;)t=ir(t.nextSibling)}function rs(){ut=ft=null,re=!1}function Dh(t){jt===null?jt=[t]:jt.push(t)}var HC=Fn.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mg(t){var e=t._init;return e(t._payload)}function i0(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=lr(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,y){return h===null||h.tag!==6?(h=Ku(m,p.mode,y),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,y){var C=m.type;return C===Ri?d(p,h,m.props.children,y,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$n&&mg(C)===h.type)?(y=i(h,m.props),y.ref=js(p,h,m),y.return=p,y):(y=gl(m.type,m.key,m.props,null,p.mode,y),y.ref=js(p,h,m),y.return=p,y)}function c(p,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=qu(m,p.mode,y),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function d(p,h,m,y,C){return h===null||h.tag!==7?(h=Kr(m,p.mode,y,C),h.return=p,h):(h=i(h,m),h.return=p,h)}function u(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ku(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case za:return m=gl(h.type,h.key,h.props,null,p.mode,m),m.ref=js(p,null,h),m.return=p,m;case Pi:return h=qu(h,p.mode,m),h.return=p,h;case $n:var y=h._init;return u(p,y(h._payload),m)}if(Xs(h)||Ds(h))return h=Kr(h,p.mode,m,null),h.return=p,h;Qa(p,h)}return null}function f(p,h,m,y){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(p,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case za:return m.key===C?l(p,h,m,y):null;case Pi:return m.key===C?c(p,h,m,y):null;case $n:return C=m._init,f(p,h,C(m._payload),y)}if(Xs(m)||Ds(m))return C!==null?null:d(p,h,m,y,null);Qa(p,m)}return null}function g(p,h,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(h,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case za:return p=p.get(y.key===null?m:y.key)||null,l(h,p,y,C);case Pi:return p=p.get(y.key===null?m:y.key)||null,c(h,p,y,C);case $n:var b=y._init;return g(p,h,m,b(y._payload),C)}if(Xs(y)||Ds(y))return p=p.get(m)||null,d(h,p,y,C,null);Qa(h,y)}return null}function _(p,h,m,y){for(var C=null,b=null,R=h,O=h=0,Z=null;R!==null&&O<m.length;O++){R.index>O?(Z=R,R=null):Z=R.sibling;var W=f(p,R,m[O],y);if(W===null){R===null&&(R=Z);break}t&&R&&W.alternate===null&&e(p,R),h=s(W,h,O),b===null?C=W:b.sibling=W,b=W,R=Z}if(O===m.length)return n(p,R),re&&Fr(p,O),C;if(R===null){for(;O<m.length;O++)R=u(p,m[O],y),R!==null&&(h=s(R,h,O),b===null?C=R:b.sibling=R,b=R);return re&&Fr(p,O),C}for(R=r(p,R);O<m.length;O++)Z=g(R,p,O,m[O],y),Z!==null&&(t&&Z.alternate!==null&&R.delete(Z.key===null?O:Z.key),h=s(Z,h,O),b===null?C=Z:b.sibling=Z,b=Z);return t&&R.forEach(function(Dt){return e(p,Dt)}),re&&Fr(p,O),C}function v(p,h,m,y){var C=Ds(m);if(typeof C!="function")throw Error(I(150));if(m=C.call(m),m==null)throw Error(I(151));for(var b=C=null,R=h,O=h=0,Z=null,W=m.next();R!==null&&!W.done;O++,W=m.next()){R.index>O?(Z=R,R=null):Z=R.sibling;var Dt=f(p,R,W.value,y);if(Dt===null){R===null&&(R=Z);break}t&&R&&Dt.alternate===null&&e(p,R),h=s(Dt,h,O),b===null?C=Dt:b.sibling=Dt,b=Dt,R=Z}if(W.done)return n(p,R),re&&Fr(p,O),C;if(R===null){for(;!W.done;O++,W=m.next())W=u(p,W.value,y),W!==null&&(h=s(W,h,O),b===null?C=W:b.sibling=W,b=W);return re&&Fr(p,O),C}for(R=r(p,R);!W.done;O++,W=m.next())W=g(R,p,O,W.value,y),W!==null&&(t&&W.alternate!==null&&R.delete(W.key===null?O:W.key),h=s(W,h,O),b===null?C=W:b.sibling=W,b=W);return t&&R.forEach(function(xs){return e(p,xs)}),re&&Fr(p,O),C}function w(p,h,m,y){if(typeof m=="object"&&m!==null&&m.type===Ri&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case za:e:{for(var C=m.key,b=h;b!==null;){if(b.key===C){if(C=m.type,C===Ri){if(b.tag===7){n(p,b.sibling),h=i(b,m.props.children),h.return=p,p=h;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$n&&mg(C)===b.type){n(p,b.sibling),h=i(b,m.props),h.ref=js(p,b,m),h.return=p,p=h;break e}n(p,b);break}else e(p,b);b=b.sibling}m.type===Ri?(h=Kr(m.props.children,p.mode,y,m.key),h.return=p,p=h):(y=gl(m.type,m.key,m.props,null,p.mode,y),y.ref=js(p,h,m),y.return=p,p=y)}return o(p);case Pi:e:{for(b=m.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=qu(m,p.mode,y),h.return=p,p=h}return o(p);case $n:return b=m._init,w(p,h,b(m._payload),y)}if(Xs(m))return _(p,h,m,y);if(Ds(m))return v(p,h,m,y);Qa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Ku(m,p.mode,y),h.return=p,p=h),o(p)):n(p,h)}return w}var is=i0(!0),s0=i0(!1),Ml=Nr(null),Fl=null,Mi=null,Mh=null;function Fh(){Mh=Mi=Fl=null}function Uh(t){var e=Ml.current;te(Ml),t._currentValue=e}function Qd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){Fl=t,Mh=Mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(Mh!==t)if(t={context:t,memoizedValue:e,next:null},Mi===null){if(Fl===null)throw Error(I(308));Mi=t,Fl.dependencies={lanes:0,firstContext:t}}else Mi=Mi.next=t;return e}var Br=null;function zh(t){Br===null?Br=[t]:Br.push(t)}function o0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zh(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,zh(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Th(t,n)}}function gg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(f=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){u=_.call(g,u,f);break e}u=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(g,u,f):_,f==null)break e;u=ce({},u,f);break e;case 2:Hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=u):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ri|=o,t.lanes=o,t.memoizedState=u}}function _g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var pa={},ln=Nr(pa),Fo=Nr(pa),Uo=Nr(pa);function $r(t){if(t===pa)throw Error(I(174));return t}function Wh(t,e){switch(J(Uo,e),J(Fo,t),J(ln,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bd(e,t)}te(ln),J(ln,e)}function ss(){te(ln),te(Fo),te(Uo)}function l0(t){$r(Uo.current);var e=$r(ln.current),n=bd(e,t.type);e!==n&&(J(Fo,t),J(ln,n))}function Vh(t){Fo.current===t&&(te(ln),te(Fo))}var oe=Nr(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function Bh(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var dl=Fn.ReactCurrentDispatcher,Bu=Fn.ReactCurrentBatchConfig,ni=0,le=null,we=null,Pe=null,jl=!1,uo=!1,zo=0,GC=0;function ze(){throw Error(I(321))}function $h(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Hh(t,e,n,r,i,s){if(ni=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?QC:JC,t=n(r,i),uo){s=0;do{if(uo=!1,zo=0,25<=s)throw Error(I(301));s+=1,Pe=we=null,e.updateQueue=null,dl.current=XC,t=n(r,i)}while(uo)}if(dl.current=Wl,e=we!==null&&we.next!==null,ni=0,Pe=we=le=null,jl=!1,e)throw Error(I(300));return t}function Gh(){var t=zo!==0;return zo=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?le.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function At(){if(we===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=Pe===null?le.memoizedState:Pe.next;if(e!==null)Pe=e,we=t;else{if(t===null)throw Error(I(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Pe===null?le.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function jo(t,e){return typeof e=="function"?e(t):e}function $u(t){var e=At(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=we,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ni&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,le.lanes|=d,ri|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Gt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hu(t){var e=At(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function c0(){}function u0(t,e){var n=le,r=At(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,Yh(h0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Wo(9,f0.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(I(349));ni&30||d0(n,e,i)}return i}function d0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f0(t,e,n,r){e.value=n,e.getSnapshot=r,p0(e)&&m0(t)}function h0(t,e,n){return n(function(){p0(e)&&m0(t)})}function p0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function m0(t){var e=bn(t,1);e!==null&&Bt(e,t,1,-1)}function vg(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},e.queue=t,t=t.dispatch=qC.bind(null,le,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function g0(){return At().memoizedState}function fl(t,e,n,r){var i=Qt();le.flags|=t,i.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function Nc(t,e,n,r){var i=At();r=r===void 0?null:r;var s=void 0;if(we!==null){var o=we.memoizedState;if(s=o.destroy,r!==null&&$h(r,o.deps)){i.memoizedState=Wo(e,n,s,r);return}}le.flags|=t,i.memoizedState=Wo(1|e,n,s,r)}function yg(t,e){return fl(8390656,8,t,e)}function Yh(t,e){return Nc(2048,8,t,e)}function _0(t,e){return Nc(4,2,t,e)}function v0(t,e){return Nc(4,4,t,e)}function y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w0(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,y0.bind(null,e,t),n)}function Kh(){}function E0(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$h(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function I0(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$h(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function S0(t,e,n){return ni&21?(Gt(n,e)||(n=Ry(),le.lanes|=n,ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function YC(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=Bu.transition;Bu.transition={};try{t(!1),e()}finally{K=n,Bu.transition=r}}function C0(){return At().memoizedState}function KC(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},T0(t))k0(e,n);else if(n=o0(t,e,n,r),n!==null){var i=Ye();Bt(n,t,r,i),P0(n,e,r)}}function qC(t,e,n){var r=ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(T0(t))k0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gt(a,o)){var l=e.interleaved;l===null?(i.next=i,zh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=o0(t,e,i,r),n!==null&&(i=Ye(),Bt(n,t,r,i),P0(n,e,r))}}function T0(t){var e=t.alternate;return t===le||e!==null&&e===le}function k0(t,e){uo=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Th(t,n)}}var Wl={readContext:bt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},QC={readContext:bt,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=KC.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:vg,useDebugValue:Kh,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=vg(!1),e=t[0];return t=YC.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Qt();if(re){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Ae===null)throw Error(I(349));ni&30||d0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yg(h0.bind(null,r,s,t),[t]),r.flags|=2048,Wo(9,f0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Ae.identifierPrefix;if(re){var n=wn,r=yn;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JC={readContext:bt,useCallback:E0,useContext:bt,useEffect:Yh,useImperativeHandle:w0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:I0,useReducer:$u,useRef:g0,useState:function(){return $u(jo)},useDebugValue:Kh,useDeferredValue:function(t){var e=At();return S0(e,we.memoizedState,t)},useTransition:function(){var t=$u(jo)[0],e=At().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:u0,useId:C0,unstable_isNewReconciler:!1},XC={readContext:bt,useCallback:E0,useContext:bt,useEffect:Yh,useImperativeHandle:w0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:I0,useReducer:Hu,useRef:g0,useState:function(){return Hu(jo)},useDebugValue:Kh,useDeferredValue:function(t){var e=At();return we===null?e.memoizedState=t:S0(e,we.memoizedState,t)},useTransition:function(){var t=Hu(jo)[0],e=At().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:u0,useId:C0,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bc={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=ar(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(Bt(e,t,i,r),ul(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=ar(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(Bt(e,t,i,r),ul(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=ar(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=sr(t,i,r),e!==null&&(Bt(e,t,r,n),ul(e,t,r))}};function wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,r)||!xo(i,s):!0}function R0(t,e,n){var r=!1,i=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=nt(e)?ei:$e.current,r=e.contextTypes,s=(r=r!=null)?ns(t,i):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Eg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bc.enqueueReplaceState(e,e.state,null)}function Xd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},jh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=nt(e)?ei:$e.current,i.context=ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bc.enqueueReplaceState(i,i.state,null),Ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function os(t,e){try{var n="",r=e;do n+=kS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZC=typeof WeakMap=="function"?WeakMap:Map;function N0(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bl||(Bl=!0,uf=r),Zd(t,e)},n}function b0(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zd(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hT.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var eT=Fn.ReactCurrentOwner,Ze=!1;function He(t,e,n,r){e.child=t===null?s0(e,null,n,r):is(e,t.child,n,r)}function Tg(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=Hh(t,e,n,r,s,i),n=Gh(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(re&&n&&xh(e),e.flags|=1,He(t,e,r,i),e.child)}function kg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A0(t,e,s,r,i)):(t=gl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function A0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xo(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,An(t,e,i)}return ef(t,e,n,r,i)}function O0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Ui,at),at|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Ui,at),at|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(Ui,at),at|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Ui,at),at|=r;return He(t,e,i,n),e.child}function x0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ef(t,e,n,r,i){var s=nt(n)?ei:$e.current;return s=ns(e,s),Gi(e,i),n=Hh(t,e,n,r,s,i),r=Gh(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(re&&r&&xh(e),e.flags|=1,He(t,e,n,i),e.child)}function Pg(t,e,n,r,i){if(nt(n)){var s=!0;xl(e)}else s=!1;if(Gi(e,i),e.stateNode===null)hl(t,e),R0(e,n,r),Xd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bt(c):(c=nt(n)?ei:$e.current,c=ns(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Eg(e,o,r,c),Hn=!1;var f=e.memoizedState;o.state=f,Ul(e,r,o,i),l=e.memoizedState,a!==r||f!==l||tt.current||Hn?(typeof d=="function"&&(Jd(e,n,d,r),l=e.memoizedState),(a=Hn||wg(e,n,a,r,f,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ut(e.type,a),o.props=c,u=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bt(l):(l=nt(n)?ei:$e.current,l=ns(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||f!==l)&&Eg(e,o,r,l),Hn=!1,f=e.memoizedState,o.state=f,Ul(e,r,o,i);var _=e.memoizedState;a!==u||f!==_||tt.current||Hn?(typeof g=="function"&&(Jd(e,n,g,r),_=e.memoizedState),(c=Hn||wg(e,n,c,r,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return tf(t,e,n,r,s,i)}function tf(t,e,n,r,i,s){x0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fg(e,n,!1),An(t,e,s);r=e.stateNode,eT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=is(e,t.child,null,s),e.child=is(e,null,a,s)):He(t,e,a,s),e.memoizedState=r.state,i&&fg(e,n,!0),e.child}function L0(t){var e=t.stateNode;e.pendingContext?dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dg(t,e.context,!1),Wh(t,e.containerInfo)}function Rg(t,e,n,r,i){return rs(),Dh(i),e.flags|=256,He(t,e,n,r),e.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function D0(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(oe,i&1),t===null)return qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xc(o,r,0,null),t=Kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rf(n),e.memoizedState=nf,t):qh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=lr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nf,r}return s=t.child,t=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qh(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,r){return r!==null&&Dh(r),is(e,t.child,null,n),t=qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gu(Error(I(422))),Ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xc({mode:"visible",children:r.children},i,0,null),s=Kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&is(e,t.child,null,o),e.child.memoizedState=rf(o),e.memoizedState=nf,s);if(!(e.mode&1))return Ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Gu(s,r,void 0),Ja(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ze||a){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Bt(r,t,i,-1))}return tp(),r=Gu(Error(I(421))),Ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ut=ir(i.nextSibling),ft=e,re=!0,jt=null,t!==null&&(It[St++]=yn,It[St++]=wn,It[St++]=ti,yn=t.id,wn=t.overflow,ti=e),e=qh(e,r.children),e.flags|=4096,e)}function Ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qd(t.return,e,n)}function Yu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function M0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(He(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,n,e);else if(t.tag===19)Ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yu(e,!0,n,null,s);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nT(t,e,n){switch(e.tag){case 3:L0(e),rs();break;case 5:l0(e);break;case 1:nt(e.type)&&xl(e);break;case 4:Wh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?D0(t,e,n):(J(oe,oe.current&1),t=An(t,e,n),t!==null?t.sibling:null);J(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return M0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,O0(t,e,n)}return An(t,e,n)}var F0,sf,U0,z0;F0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sf=function(){};U0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(ln.current);var s=null;switch(n){case"input":i=kd(t,i),r=kd(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=Nd(t,i),r=Nd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Al)}Ad(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};z0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ws(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rT(t,e,n){var r=e.pendingProps;switch(Lh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(e),null;case 1:return nt(e.type)&&Ol(),je(e),null;case 3:return r=e.stateNode,ss(),te(tt),te($e),Bh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(hf(jt),jt=null))),sf(t,e),je(e),null;case 5:Vh(e);var i=$r(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)U0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return je(e),null}if(t=$r(ln.current),qa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)ee(eo[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Um(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":jm(r,s),ee("invalid",r)}Ad(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ka(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ka(r.textContent,a,t),i=["children",""+a]):ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":ja(r),zm(r,s,!0);break;case"textarea":ja(r),Wm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[Mo]=r,F0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Od(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)ee(eo[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Um(t,r),i=kd(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ee("invalid",t);break;case"textarea":jm(t,r),i=Nd(t,r),ee("invalid",t);break;default:i=r}Ad(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&py(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Po(t,l):typeof l=="number"&&Po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&yh(t,s,l,o))}switch(n){case"input":ja(t),zm(t,r,!1);break;case"textarea":ja(t),Wm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return je(e),null;case 6:if(t&&e.stateNode!=null)z0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=$r(Uo.current),$r(ln.current),qa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:Ka(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return je(e),null;case 13:if(te(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&ut!==null&&e.mode&1&&!(e.flags&128))r0(),rs(),e.flags|=98560,s=!1;else if(s=qa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Xt]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;je(e),s=!1}else jt!==null&&(hf(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?Ie===0&&(Ie=3):tp())),e.updateQueue!==null&&(e.flags|=4),je(e),null);case 4:return ss(),sf(t,e),t===null&&Lo(e.stateNode.containerInfo),je(e),null;case 10:return Uh(e.type._context),je(e),null;case 17:return nt(e.type)&&Ol(),je(e),null;case 19:if(te(oe),s=e.memoizedState,s===null)return je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ws(s,!1);else{if(Ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zl(t),o!==null){for(e.flags|=128,Ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>as&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=zl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return je(e),null}else 2*ge()-s.renderingStartTime>as&&n!==1073741824&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,n=oe.current,J(oe,r?n&1|2:n&1),e):(je(e),null);case 22:case 23:return ep(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?at&1073741824&&(je(e),e.subtreeFlags&6&&(e.flags|=8192)):je(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function iT(t,e){switch(Lh(e),e.tag){case 1:return nt(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ss(),te(tt),te($e),Bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vh(e),null;case 13:if(te(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(oe),null;case 4:return ss(),null;case 10:return Uh(e.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var Xa=!1,We=!1,sT=typeof WeakSet=="function"?WeakSet:Set,P=null;function Fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function of(t,e,n){try{n()}catch(r){de(t,e,r)}}var bg=!1;function oT(t,e){if(Vd=Rl,t=$y(),Oh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,f=null;t:for(;;){for(var g;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)f=u,u=g;for(;;){if(u===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(g=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},Rl=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ut(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(y){de(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return _=bg,bg=!1,_}function fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&of(e,n,s)}i=i.next}while(i!==r)}}function Ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j0(t){var e=t.alternate;e!==null&&(t.alternate=null,j0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[Mo],delete e[Gd],delete e[VC],delete e[BC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W0(t){return t.tag===5||t.tag===3||t.tag===4}function Ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(r!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}function cf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}var De=null,zt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)V0(t,e,n),n=n.sibling}function V0(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Sc,n)}catch{}switch(n.tag){case 5:We||Fi(n,e);case 6:var r=De,i=zt;De=null,Wn(t,e,n),De=r,zt=i,De!==null&&(zt?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(zt?(t=De,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),Ao(t)):ju(De,n.stateNode));break;case 4:r=De,i=zt,De=n.stateNode.containerInfo,zt=!0,Wn(t,e,n),De=r,zt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&of(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!We&&(Fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Wn(t,e,n),We=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sT),e.forEach(function(r){var i=mT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,zt=!1;break e;case 3:De=a.stateNode.containerInfo,zt=!0;break e;case 4:De=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if(De===null)throw Error(I(160));V0(s,o,i),De=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){de(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B0(e,t),e=e.sibling}function B0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),qt(t),r&4){try{fo(3,t,t.return),Ac(3,t)}catch(v){de(t,t.return,v)}try{fo(5,t,t.return)}catch(v){de(t,t.return,v)}}break;case 1:Mt(e,t),qt(t),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(Mt(e,t),qt(t),r&512&&n!==null&&Fi(n,n.return),t.flags&32){var i=t.stateNode;try{Po(i,"")}catch(v){de(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dy(i,s),Od(a,o);var c=Od(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?gy(i,u):d==="dangerouslySetInnerHTML"?py(i,u):d==="children"?Po(i,u):yh(i,d,u,c)}switch(a){case"input":Pd(i,s);break;case"textarea":fy(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Vi(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mo]=s}catch(v){de(t,t.return,v)}}break;case 6:if(Mt(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){de(t,t.return,v)}}break;case 3:if(Mt(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(v){de(t,t.return,v)}break;case 4:Mt(e,t),qt(t);break;case 13:Mt(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xh=ge())),r&4&&Og(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(We=(c=We)||d,Mt(e,t),We=c):Mt(e,t),qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(P=t,d=t.child;d!==null;){for(u=P=d;P!==null;){switch(f=P,g=f.child,f.tag){case 0:case 11:case 14:case 15:fo(4,f,f.return);break;case 1:Fi(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){de(r,n,v)}}break;case 5:Fi(f,f.return);break;case 22:if(f.memoizedState!==null){Lg(u);continue}}g!==null?(g.return=f,P=g):Lg(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=my("display",o))}catch(v){de(t,t.return,v)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(v){de(t,t.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Mt(e,t),qt(t),r&4&&Og(t);break;case 21:break;default:Mt(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W0(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Po(i,""),r.flags&=-33);var s=Ag(t);cf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ag(t);lf(t,a,o);break;default:throw Error(I(161))}}catch(l){de(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aT(t,e,n){P=t,$0(t)}function $0(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||We;a=Xa;var c=We;if(Xa=o,(We=l)&&!c)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Dg(i):l!==null?(l.return=o,P=l):Dg(i);for(;s!==null;)P=s,$0(s),s=s.sibling;P=i,Xa=a,We=c}xg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):xg(t)}}function xg(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||Ac(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_g(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_g(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Ao(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}We||e.flags&512&&af(e)}catch(f){de(e,e.return,f)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Lg(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Dg(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ac(4,e)}catch(l){de(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){de(e,i,l)}}var s=e.return;try{af(e)}catch(l){de(e,s,l)}break;case 5:var o=e.return;try{af(e)}catch(l){de(e,o,l)}}}catch(l){de(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var lT=Math.ceil,Vl=Fn.ReactCurrentDispatcher,Qh=Fn.ReactCurrentOwner,Rt=Fn.ReactCurrentBatchConfig,$=0,Ae=null,ve=null,Me=0,at=0,Ui=Nr(0),Ie=0,Vo=null,ri=0,Oc=0,Jh=0,ho=null,Je=null,Xh=0,as=1/0,_n=null,Bl=!1,uf=null,or=null,Za=!1,qn=null,$l=0,po=0,df=null,pl=-1,ml=0;function Ye(){return $&6?ge():pl!==-1?pl:pl=ge()}function ar(t){return t.mode&1?$&2&&Me!==0?Me&-Me:HC.transition!==null?(ml===0&&(ml=Ry()),ml):(t=K,t!==0||(t=window.event,t=t===void 0?16:Dy(t.type)),t):1}function Bt(t,e,n,r){if(50<po)throw po=0,df=null,Error(I(185));da(t,n,r),(!($&2)||t!==Ae)&&(t===Ae&&(!($&2)&&(Oc|=n),Ie===4&&Yn(t,Me)),rt(t,r),n===1&&$===0&&!(e.mode&1)&&(as=ge()+500,Rc&&br()))}function rt(t,e){var n=t.callbackNode;HS(t,e);var r=Pl(t,t===Ae?Me:0);if(r===0)n!==null&&$m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$m(n),e===1)t.tag===0?$C(Mg.bind(null,t)):e0(Mg.bind(null,t)),jC(function(){!($&6)&&br()}),n=null;else{switch(Ny(r)){case 1:n=Ch;break;case 4:n=ky;break;case 16:n=kl;break;case 536870912:n=Py;break;default:n=kl}n=X0(n,H0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function H0(t,e){if(pl=-1,ml=0,$&6)throw Error(I(327));var n=t.callbackNode;if(Yi()&&t.callbackNode!==n)return null;var r=Pl(t,t===Ae?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hl(t,r);else{e=r;var i=$;$|=2;var s=Y0();(Ae!==t||Me!==e)&&(_n=null,as=ge()+500,Yr(t,e));do try{dT();break}catch(a){G0(t,a)}while(!0);Fh(),Vl.current=s,$=i,ve!==null?e=0:(Ae=null,Me=0,e=Ie)}if(e!==0){if(e===2&&(i=Fd(t),i!==0&&(r=i,e=ff(t,i))),e===1)throw n=Vo,Yr(t,0),Yn(t,r),rt(t,ge()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!cT(i)&&(e=Hl(t,r),e===2&&(s=Fd(t),s!==0&&(r=s,e=ff(t,s))),e===1))throw n=Vo,Yr(t,0),Yn(t,r),rt(t,ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Ur(t,Je,_n);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=Xh+500-ge(),10<e)){if(Pl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hd(Ur.bind(null,t,Je,_n),e);break}Ur(t,Je,_n);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Vt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lT(r/1960))-r,10<r){t.timeoutHandle=Hd(Ur.bind(null,t,Je,_n),r);break}Ur(t,Je,_n);break;case 5:Ur(t,Je,_n);break;default:throw Error(I(329))}}}return rt(t,ge()),t.callbackNode===n?H0.bind(null,t):null}function ff(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=Hl(t,e),t!==2&&(e=Je,Je=n,e!==null&&hf(e)),t}function hf(t){Je===null?Je=t:Je.push.apply(Je,t)}function cT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~Jh,e&=~Oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vt(e),r=1<<n;t[n]=-1,e&=~r}}function Mg(t){if($&6)throw Error(I(327));Yi();var e=Pl(t,0);if(!(e&1))return rt(t,ge()),null;var n=Hl(t,e);if(t.tag!==0&&n===2){var r=Fd(t);r!==0&&(e=r,n=ff(t,r))}if(n===1)throw n=Vo,Yr(t,0),Yn(t,e),rt(t,ge()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,Je,_n),rt(t,ge()),null}function Zh(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(as=ge()+500,Rc&&br())}}function ii(t){qn!==null&&qn.tag===0&&!($&6)&&Yi();var e=$;$|=1;var n=Rt.transition,r=K;try{if(Rt.transition=null,K=1,t)return t()}finally{K=r,Rt.transition=n,$=e,!($&6)&&br()}}function ep(){at=Ui.current,te(Ui)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zC(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Lh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ol();break;case 3:ss(),te(tt),te($e),Bh();break;case 5:Vh(r);break;case 4:ss();break;case 13:te(oe);break;case 19:te(oe);break;case 10:Uh(r.type._context);break;case 22:case 23:ep()}n=n.return}if(Ae=t,ve=t=lr(t.current,null),Me=at=e,Ie=0,Vo=null,Jh=Oc=ri=0,Je=ho=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function G0(t,e){do{var n=ve;try{if(Fh(),dl.current=Wl,jl){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jl=!1}if(ni=0,Pe=we=le=null,uo=!1,zo=0,Qh.current=null,n===null||n.return===null){Ie=1,Vo=e,ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Sg(o);if(g!==null){g.flags&=-257,Cg(g,o,a,s,e),g.mode&1&&Ig(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Ig(s,c,e),tp();break e}l=Error(I(426))}}else if(re&&a.mode&1){var w=Sg(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Cg(w,o,a,s,e),Dh(os(l,a));break e}}s=l=os(l,a),Ie!==4&&(Ie=2),ho===null?ho=[s]:ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=N0(s,l,e);gg(s,p);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(or===null||!or.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=b0(s,a,e);gg(s,y);break e}}s=s.return}while(s!==null)}q0(n)}catch(C){e=C,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Y0(){var t=Vl.current;return Vl.current=Wl,t===null?Wl:t}function tp(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ae===null||!(ri&268435455)&&!(Oc&268435455)||Yn(Ae,Me)}function Hl(t,e){var n=$;$|=2;var r=Y0();(Ae!==t||Me!==e)&&(_n=null,Yr(t,e));do try{uT();break}catch(i){G0(t,i)}while(!0);if(Fh(),$=n,Vl.current=r,ve!==null)throw Error(I(261));return Ae=null,Me=0,Ie}function uT(){for(;ve!==null;)K0(ve)}function dT(){for(;ve!==null&&!MS();)K0(ve)}function K0(t){var e=J0(t.alternate,t,at);t.memoizedProps=t.pendingProps,e===null?q0(t):ve=e,Qh.current=null}function q0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iT(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ie=6,ve=null;return}}else if(n=rT(n,e,at),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);Ie===0&&(Ie=5)}function Ur(t,e,n){var r=K,i=Rt.transition;try{Rt.transition=null,K=1,fT(t,e,n,r)}finally{Rt.transition=i,K=r}return null}function fT(t,e,n,r){do Yi();while(qn!==null);if($&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GS(t,s),t===Ae&&(ve=Ae=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,X0(kl,function(){return Yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=K;K=1;var a=$;$|=4,Qh.current=null,oT(t,n),B0(n,t),OC(Bd),Rl=!!Vd,Bd=Vd=null,t.current=n,aT(n),FS(),$=a,K=o,Rt.transition=s}else t.current=n;if(Za&&(Za=!1,qn=t,$l=i),s=t.pendingLanes,s===0&&(or=null),jS(n.stateNode),rt(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bl)throw Bl=!1,t=uf,uf=null,t;return $l&1&&t.tag!==0&&Yi(),s=t.pendingLanes,s&1?t===df?po++:(po=0,df=t):po=0,br(),null}function Yi(){if(qn!==null){var t=Ny($l),e=Rt.transition,n=K;try{if(Rt.transition=null,K=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,$l=0,$&6)throw Error(I(331));var i=$;for($|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var u=d.child;if(u!==null)u.return=d,P=u;else for(;P!==null;){d=P;var f=d.sibling,g=d.return;if(j0(d),d===c){P=null;break}if(f!==null){f.return=g,P=f;break}P=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var h=t.current;for(P=h;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,P=m;else e:for(o=h;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ac(9,a)}}catch(C){de(a,a.return,C)}if(a===o){P=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,P=y;break e}P=a.return}}if($=i,br(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Sc,t)}catch{}r=!0}return r}finally{K=n,Rt.transition=e}}return!1}function Fg(t,e,n){e=os(n,e),e=N0(t,e,1),t=sr(t,e,1),e=Ye(),t!==null&&(da(t,1,e),rt(t,e))}function de(t,e,n){if(t.tag===3)Fg(t,t,n);else for(;e!==null;){if(e.tag===3){Fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=os(n,t),t=b0(e,t,1),e=sr(e,t,1),t=Ye(),e!==null&&(da(e,1,t),rt(e,t));break}}e=e.return}}function hT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(Me&n)===n&&(Ie===4||Ie===3&&(Me&130023424)===Me&&500>ge()-Xh?Yr(t,0):Jh|=n),rt(t,e)}function Q0(t,e){e===0&&(t.mode&1?(e=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):e=1);var n=Ye();t=bn(t,e),t!==null&&(da(t,e,n),rt(t,n))}function pT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q0(t,n)}function mT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Q0(t,n)}var J0;J0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,nT(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,re&&e.flags&1048576&&t0(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hl(t,e),t=e.pendingProps;var i=ns(e,$e.current);Gi(e,n),i=Hh(null,e,r,t,i,n);var s=Gh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,xl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jh(e),i.updater=bc,e.stateNode=i,i._reactInternals=e,Xd(e,r,t,n),e=tf(null,e,r,!0,s,n)):(e.tag=0,re&&s&&xh(e),He(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_T(r),t=Ut(r,t),i){case 0:e=ef(null,e,r,t,n);break e;case 1:e=Pg(null,e,r,t,n);break e;case 11:e=Tg(null,e,r,t,n);break e;case 14:e=kg(null,e,r,Ut(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),ef(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Pg(t,e,r,i,n);case 3:e:{if(L0(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a0(t,e),Ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=os(Error(I(423)),e),e=Rg(t,e,r,n,i);break e}else if(r!==i){i=os(Error(I(424)),e),e=Rg(t,e,r,n,i);break e}else for(ut=ir(e.stateNode.containerInfo.firstChild),ft=e,re=!0,jt=null,n=s0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===i){e=An(t,e,n);break e}He(t,e,r,n)}e=e.child}return e;case 5:return l0(e),t===null&&qd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,$d(r,i)?o=null:s!==null&&$d(r,s)&&(e.flags|=32),x0(t,e),He(t,e,o,n),e.child;case 6:return t===null&&qd(e),null;case 13:return D0(t,e,n);case 4:return Wh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=is(e,null,r,n):He(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Tg(t,e,r,i,n);case 7:return He(t,e,e.pendingProps,n),e.child;case 8:return He(t,e,e.pendingProps.children,n),e.child;case 12:return He(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(Ml,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!tt.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}He(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=bt(i),r=r(i),e.flags|=1,He(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),kg(t,e,r,i,n);case 15:return A0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),hl(t,e),e.tag=1,nt(r)?(t=!0,xl(e)):t=!1,Gi(e,n),R0(e,r,i),Xd(e,r,i,n),tf(null,e,r,!0,t,n);case 19:return M0(t,e,n);case 22:return O0(t,e,n)}throw Error(I(156,e.tag))};function X0(t,e){return Ty(t,e)}function gT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,n,r){return new gT(t,e,n,r)}function np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _T(t){if(typeof t=="function")return np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eh)return 11;if(t===Ih)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return Kr(n.children,i,s,e);case wh:o=8,i|=8;break;case Id:return t=Tt(12,n,e,i|2),t.elementType=Id,t.lanes=s,t;case Sd:return t=Tt(13,n,e,i),t.elementType=Sd,t.lanes=s,t;case Cd:return t=Tt(19,n,e,i),t.elementType=Cd,t.lanes=s,t;case ly:return xc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oy:o=10;break e;case ay:o=9;break e;case Eh:o=11;break e;case Ih:o=14;break e;case $n:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kr(t,e,n,r){return t=Tt(7,t,r,e),t.lanes=n,t}function xc(t,e,n,r){return t=Tt(22,t,r,e),t.elementType=ly,t.lanes=n,t.stateNode={isHidden:!1},t}function Ku(t,e,n){return t=Tt(6,t,null,e),t.lanes=n,t}function qu(t,e,n){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rp(t,e,n,r,i,s,o,a,l){return t=new vT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(s),t}function yT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Z0(t){if(!t)return gr;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(nt(n))return Zy(t,n,e)}return e}function ew(t,e,n,r,i,s,o,a,l){return t=rp(n,r,!0,t,i,s,o,a,l),t.context=Z0(null),n=t.current,r=Ye(),i=ar(n),s=Tn(r,i),s.callback=e??null,sr(n,s,i),t.current.lanes=i,da(t,i,r),rt(t,r),t}function Lc(t,e,n,r){var i=e.current,s=Ye(),o=ar(i);return n=Z0(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sr(i,e,o),t!==null&&(Bt(t,i,o,s),ul(t,i,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ip(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function wT(){return null}var tw=typeof reportError=="function"?reportError:function(t){console.error(t)};function sp(t){this._internalRoot=t}Dc.prototype.render=sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Lc(t,e,null,null)};Dc.prototype.unmount=sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ii(function(){Lc(null,t,null,null)}),e[Nn]=null}};function Dc(t){this._internalRoot=t}Dc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Oy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&Ly(t)}};function op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function ET(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Gl(o);s.call(c)}}var o=ew(e,r,t,0,null,!1,!1,"",zg);return t._reactRootContainer=o,t[Nn]=o.current,Lo(t.nodeType===8?t.parentNode:t),ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Gl(l);a.call(c)}}var l=rp(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=l,t[Nn]=l.current,Lo(t.nodeType===8?t.parentNode:t),ii(function(){Lc(e,l,n,r)}),l}function Fc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Gl(o);a.call(l)}}Lc(e,o,t,i)}else o=ET(n,e,t,i,r);return Gl(o)}by=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(Th(e,n|1),rt(e,ge()),!($&6)&&(as=ge()+500,br()))}break;case 13:ii(function(){var r=bn(t,1);if(r!==null){var i=Ye();Bt(r,t,1,i)}}),ip(t,1)}};kh=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=Ye();Bt(e,t,134217728,n)}ip(t,134217728)}};Ay=function(t){if(t.tag===13){var e=ar(t),n=bn(t,e);if(n!==null){var r=Ye();Bt(n,t,e,r)}ip(t,e)}};Oy=function(){return K};xy=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};Ld=function(t,e,n){switch(e){case"input":if(Pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pc(r);if(!i)throw Error(I(90));uy(r),Pd(r,i)}}}break;case"textarea":fy(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};yy=Zh;wy=ii;var IT={usingClientEntryPoint:!1,Events:[ha,Oi,Pc,_y,vy,Zh]},Vs={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ST={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sy(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||wT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Sc=el.inject(ST),an=el}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IT;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(e))throw Error(I(200));return yT(t,e,null,n)};yt.createRoot=function(t,e){if(!op(t))throw Error(I(299));var n=!1,r="",i=tw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rp(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,Lo(t.nodeType===8?t.parentNode:t),new sp(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Sy(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return ii(t)};yt.hydrate=function(t,e,n){if(!Mc(e))throw Error(I(200));return Fc(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!op(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ew(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,Lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Dc(e)};yt.render=function(t,e,n){if(!Mc(e))throw Error(I(200));return Fc(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!Mc(t))throw Error(I(40));return t._reactRootContainer?(ii(function(){Fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};yt.unstable_batchedUpdates=Zh;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mc(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Fc(t,e,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function nw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nw)}catch(t){console.error(t)}}nw(),ny.exports=yt;var CT=ny.exports,rw,jg=CT;rw=jg.createRoot,jg.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bo.apply(this,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const Wg="popstate";function TT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return pf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Yl(i)}return PT(e,n,null,t)}function ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function iw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kT(){return Math.random().toString(36).substr(2,8)}function Vg(t,e){return{usr:t.state,key:t.key,idx:e}}function pf(t,e,n,r){return n===void 0&&(n=null),Bo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Is(e):e,{state:n,key:e&&e.key||r||kT()})}function Yl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qn.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Bo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function u(){a=Qn.Pop;let w=d(),p=w==null?null:w-c;c=w,l&&l({action:a,location:v.location,delta:p})}function f(w,p){a=Qn.Push;let h=pf(v.location,w,p);c=d()+1;let m=Vg(h,c),y=v.createHref(h);try{o.pushState(m,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(y)}s&&l&&l({action:a,location:v.location,delta:1})}function g(w,p){a=Qn.Replace;let h=pf(v.location,w,p);c=d();let m=Vg(h,c),y=v.createHref(h);o.replaceState(m,"",y),s&&l&&l({action:a,location:v.location,delta:0})}function _(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:Yl(w);return h=h.replace(/ $/,"%20"),ye(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Wg,u),l=w,()=>{i.removeEventListener(Wg,u),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let p=_(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(w){return o.go(w)}};return v}var Bg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Bg||(Bg={}));function RT(t,e,n){return n===void 0&&(n="/"),NT(t,e,n,!1)}function NT(t,e,n,r){let i=typeof e=="string"?Is(e):e,s=ap(i.pathname||"/",n);if(s==null)return null;let o=sw(t);bT(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=WT(s);a=zT(o[l],c,r)}return a}function sw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=cr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:FT(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ow(s.path))i(s,o,l)}),e}function ow(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ow(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function bT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:UT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AT=/^:[\w-]+$/,OT=3,xT=2,LT=1,DT=10,MT=-2,$g=t=>t==="*";function FT(t,e){let n=t.split("/"),r=n.length;return n.some($g)&&(r+=MT),e&&(r+=xT),n.filter(i=>!$g(i)).reduce((i,s)=>i+(AT.test(s)?OT:s===""?LT:DT),r)}function UT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zT(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",u=Hg({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Hg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:cr([s,u.pathname]),pathnameBase:HT(cr([s,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(s=cr([s,u.pathnameBase]))}return o}function Hg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:f,isOptional:g}=d;if(f==="*"){let v=a[u]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=a[u];return g&&!_?c[f]=void 0:c[f]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function jT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),iw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return iw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ap(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function VT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Is(t):t;return{pathname:n?n.startsWith("/")?n:BT(n,e):e,search:GT(r),hash:YT(i)}}function BT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $T(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function aw(t,e){let n=$T(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Is(t):(i=Bo({},t),ye(!i.pathname||!i.pathname.includes("?"),Qu("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),Qu("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),Qu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let u=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),u-=1;i.pathname=f.join("/")}a=u>=0?e[u]:"/"}let l=VT(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),HT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function KT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cw=["post","put","patch","delete"];new Set(cw);const qT=["get",...cw];new Set(qT);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$o.apply(this,arguments)}const lp=T.createContext(null),QT=T.createContext(null),_i=T.createContext(null),Uc=T.createContext(null),Ar=T.createContext({outlet:null,matches:[],isDataRoute:!1}),uw=T.createContext(null);function JT(t,e){let{relative:n}=e===void 0?{}:e;ma()||ye(!1);let{basename:r,navigator:i}=T.useContext(_i),{hash:s,pathname:o,search:a}=fw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:cr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ma(){return T.useContext(Uc)!=null}function Ss(){return ma()||ye(!1),T.useContext(Uc).location}function dw(t){T.useContext(_i).static||T.useLayoutEffect(t)}function XT(){let{isDataRoute:t}=T.useContext(Ar);return t?dk():ZT()}function ZT(){ma()||ye(!1);let t=T.useContext(lp),{basename:e,future:n,navigator:r}=T.useContext(_i),{matches:i}=T.useContext(Ar),{pathname:s}=Ss(),o=JSON.stringify(aw(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return dw(()=>{a.current=!0}),T.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=lw(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:cr([e,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[e,r,o,s,t])}function U4(){let{matches:t}=T.useContext(Ar),e=t[t.length-1];return e?e.params:{}}function fw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(_i),{matches:i}=T.useContext(Ar),{pathname:s}=Ss(),o=JSON.stringify(aw(i,r.v7_relativeSplatPath));return T.useMemo(()=>lw(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function ek(t,e){return tk(t,e)}function tk(t,e,n,r){ma()||ye(!1);let{navigator:i}=T.useContext(_i),{matches:s}=T.useContext(Ar),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Ss(),d;if(e){var u;let w=typeof e=="string"?Is(e):e;l==="/"||(u=w.pathname)!=null&&u.startsWith(l)||ye(!1),d=w}else d=c;let f=d.pathname||"/",g=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let _=RT(t,{pathname:g}),v=ok(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:cr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:cr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?T.createElement(Uc.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qn.Pop}},v):v}function nk(){let t=uk(),e=KT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const rk=T.createElement(nk,null);class ik extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(Ar.Provider,{value:this.props.routeContext},T.createElement(uw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sk(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(lp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Ar.Provider,{value:e},r)}function ok(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);d>=0||ye(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:f,errors:g}=n,_=u.route.loader&&f[u.route.id]===void 0&&(!g||g[u.route.id]===void 0);if(u.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,f)=>{let g,_=!1,v=null,w=null;n&&(g=a&&u.route.id?a[u.route.id]:void 0,v=u.route.errorElement||rk,l&&(c<0&&f===0?(_=!0,w=null):c===f&&(_=!0,w=u.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,f+1)),h=()=>{let m;return g?m=v:_?m=w:u.route.Component?m=T.createElement(u.route.Component,null):u.route.element?m=u.route.element:m=d,T.createElement(sk,{match:u,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?T.createElement(ik,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var hw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(hw||{}),Kl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Kl||{});function ak(t){let e=T.useContext(lp);return e||ye(!1),e}function lk(t){let e=T.useContext(QT);return e||ye(!1),e}function ck(t){let e=T.useContext(Ar);return e||ye(!1),e}function pw(t){let e=ck(),n=e.matches[e.matches.length-1];return n.route.id||ye(!1),n.route.id}function uk(){var t;let e=T.useContext(uw),n=lk(Kl.UseRouteError),r=pw(Kl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function dk(){let{router:t}=ak(hw.UseNavigateStable),e=pw(Kl.UseNavigateStable),n=T.useRef(!1);return dw(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,$o({fromRouteId:e},s)))},[t,e])}const Gg={};function fk(t,e){Gg[e]||(Gg[e]=!0,console.warn(e))}const Yg=(t,e,n)=>fk(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function hk(t,e){t!=null&&t.v7_startTransition||Yg("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&Yg("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function mw(t){ye(!1)}function pk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1,future:a}=t;ma()&&ye(!1);let l=e.replace(/^\/*/,"/"),c=T.useMemo(()=>({basename:l,navigator:s,static:o,future:$o({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Is(r));let{pathname:d="/",search:u="",hash:f="",state:g=null,key:_="default"}=r,v=T.useMemo(()=>{let w=ap(d,l);return w==null?null:{location:{pathname:w,search:u,hash:f,state:g,key:_},navigationType:i}},[l,d,u,f,g,_,i]);return v==null?null:T.createElement(_i.Provider,{value:c},T.createElement(Uc.Provider,{children:n,value:v}))}function mk(t){let{children:e,location:n}=t;return ek(mf(e),n)}new Promise(()=>{});function mf(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,mf(r.props.children,s));return}r.type!==mw&&ye(!1),!r.props.index||!r.props.children||ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gf(){return gf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gf.apply(this,arguments)}function gk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _k(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vk(t,e){return t.button===0&&(!e||e==="_self")&&!_k(t)}const yk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wk="6";try{window.__reactRouterVersion=wk}catch{}const Ek="startTransition",Kg=hS[Ek];function Ik(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=TT({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=T.useCallback(u=>{c&&Kg?Kg(()=>l(u)):l(u)},[l,c]);return T.useLayoutEffect(()=>o.listen(d),[o,d]),T.useEffect(()=>hk(r),[r]),T.createElement(pk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Sk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ck=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z4=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:u}=e,f=gk(e,yk),{basename:g}=T.useContext(_i),_,v=!1;if(typeof c=="string"&&Ck.test(c)&&(_=c,Sk))try{let m=new URL(window.location.href),y=c.startsWith("//")?new URL(m.protocol+c):new URL(c),C=ap(y.pathname,g);y.origin===m.origin&&C!=null?c=C+y.search+y.hash:v=!0}catch{}let w=JT(c,{relative:i}),p=Tk(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:u});function h(m){r&&r(m),m.defaultPrevented||p(m)}return T.createElement("a",gf({},f,{href:_||w,onClick:v||s?r:h,ref:n,target:l}))});var qg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(qg||(qg={}));var Qg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qg||(Qg={}));function Tk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=XT(),c=Ss(),d=fw(t,{relative:o});return T.useCallback(u=>{if(vk(u,n)){u.preventDefault();let f=r!==void 0?r:Yl(c)===Yl(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,r,i,n,t,s,o,a])}const kk="modulepreload",Pk=function(t){return"/"+t},Jg={},ht=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=Pk(l),l in Jg)return;Jg[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":kk,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((f,g)=>{u.addEventListener("load",f),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Rk="/assets/logo-DiYiW-XA.png";function gw(){return k.jsx("section",{className:"loading",children:k.jsx("img",{src:Rk,alt:"logo of app",loading:"lazy"})})}const Nk=mn.lazy(()=>ht(()=>import("./Home-Q8vNCZVI.js"),__vite__mapDeps([0,1,2,3,4,5]))),bk=mn.lazy(()=>ht(()=>import("./Models-UdFfj9QV.js"),__vite__mapDeps([6,3,1,5,4]))),Ak=mn.lazy(()=>ht(()=>import("./Chat-BCod4W-y.js"),__vite__mapDeps([7,1,8,3,4,2,5]))),Ok=mn.lazy(()=>ht(()=>import("./Settings-CDNEPAx1.js"),__vite__mapDeps([9,4,1,3,10,8,5]))),xk=mn.lazy(()=>ht(()=>import("./Success-BOILK_r-.js"),__vite__mapDeps([11,5,3,1]))),Lk=mn.lazy(()=>ht(()=>import("./Main-BUEEMGIR.js"),__vite__mapDeps([12,1]))),Dk=mn.lazy(()=>ht(()=>import("./Event-3fv1a69q.js"),__vite__mapDeps([13,3,1,10])));function Mk(){const t=[{path:"/",element:k.jsx(Lk,{})},{path:"/chats",element:k.jsx(Nk,{})},{path:"/settings",element:k.jsx(Ok,{})},{path:"/models",element:k.jsx(bk,{})},{path:"/chat/:id",element:k.jsx(Ak,{})},{path:"/success",element:k.jsx(xk,{})},{path:"/event",element:k.jsx(Dk,{})}];return k.jsx(T.Suspense,{fallback:k.jsx(gw,{}),children:k.jsx(mk,{children:t.map((e,n)=>k.jsx(mw,{path:e.path,element:e.element},n))})})}var Xg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Cs(e)},Cs=function(t){return new Error("Firebase Database ("+_w.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),r.push(n[d],n[u],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new Uk;const f=s<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),u!==64){const _=c<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Uk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yw=function(t){const e=vw(t);return cp.encodeByteArray(e,!0)},ql=function(t){return yw(t).replace(/\./g,"")},Ql=function(t){try{return cp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){return Ho(void 0,t)}function Ho(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!jk(n)||(t[n]=Ho(t[n],e[n]));return t}function jk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=()=>ww().__FIREBASE_DEFAULTS__,Vk=()=>{if(typeof process>"u"||typeof Xg>"u")return;const t=Xg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ql(t[1]);return e&&JSON.parse(e)},up=()=>{try{return Wk()||Vk()||Bk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ew=()=>{var t;return(t=up())===null||t===void 0?void 0:t.config},$k=t=>{var e;return(e=up())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ql(JSON.stringify(n)),ql(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Iw(){var t;const e=(t=up())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gk(){return typeof window<"u"||Sw()}function Sw(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Yk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tw(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kw(){return _w.NODE_ADMIN===!0}function Jl(){try{return typeof indexedDB=="object"}catch{return!1}}function Kk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="FirebaseError";class it extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qk,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Qk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new it(i,a,r)}}function Qk(t,e){return t.replace(Jk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Jk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Go(Ql(s[0])||""),n=Go(Ql(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Xk=function(t){const e=Pw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Zk=function(t){const e=Pw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _f(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zg(s)&&Zg(o)){if(!_f(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function to(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Rw(t,e){const n=new tP(t,e);return n.subscribe.bind(n)}class tP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ju),i.error===void 0&&(i.error=Ju),i.complete===void 0&&(i.complete=Ju);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ju(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function st(t,e){return`${t} failed: ${e} argument `}function Re(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(st(t,e)+"must be a valid function.")}function e_(t,e,n,r){if(n&&(typeof n!="object"||n===null))throw new Error(st(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xe;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sP(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iP(t){return t===zr?void 0:t}function sP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=[];var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Nw={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},oP=Y.INFO,aP={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},lP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ga{constructor(e){this.name=e,this._logLevel=oP,this._logHandler=lP,this._userLogHandler=null,hp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}function cP(t){hp.forEach(e=>{e.setLogLevel(t)})}function uP(t,e){for(const n of hp){let r=null;e&&e.level&&(r=Nw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:Y[s].toLowerCase(),message:a,args:o,type:i.name})}}}const dP=(t,e)=>e.some(n=>t instanceof n);let t_,n_;function fP(){return t_||(t_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hP(){return n_||(n_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bw=new WeakMap,yf=new WeakMap,Aw=new WeakMap,Xu=new WeakMap,pp=new WeakMap;function pP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bw.set(n,t)}).catch(()=>{}),pp.set(e,t),e}function mP(t){if(yf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yf.set(t,e)}let wf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Aw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gP(t){wf=t(wf)}function _P(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zu(this),e,...n);return Aw.set(r,e.sort?e.sort():[e]),ur(r)}:hP().includes(t)?function(...e){return t.apply(Zu(this),e),ur(bw.get(this))}:function(...e){return ur(t.apply(Zu(this),e))}}function vP(t){return typeof t=="function"?_P(t):(t instanceof IDBTransaction&&mP(t),dP(t,fP())?new Proxy(t,wf):t)}function ur(t){if(t instanceof IDBRequest)return pP(t);if(Xu.has(t))return Xu.get(t);const e=vP(t);return e!==t&&(Xu.set(t,e),pp.set(e,t)),e}const Zu=t=>pp.get(t);function yP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wP=["get","getKey","getAll","getAllKeys","count"],EP=["put","add","delete","clear"],ed=new Map;function r_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ed.get(e))return ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=EP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ed.set(e,s),s}gP(t=>({...t,get:(e,n,r)=>r_(e,n)||t.get(e,n,r),has:(e,n)=>!!r_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ec="@firebase/app",Ef="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new ga("@firebase/app"),CP="@firebase/app-compat",TP="@firebase/analytics-compat",kP="@firebase/analytics",PP="@firebase/app-check-compat",RP="@firebase/app-check",NP="@firebase/auth",bP="@firebase/auth-compat",AP="@firebase/database",OP="@firebase/data-connect",xP="@firebase/database-compat",LP="@firebase/functions",DP="@firebase/functions-compat",MP="@firebase/installations",FP="@firebase/installations-compat",UP="@firebase/messaging",zP="@firebase/messaging-compat",jP="@firebase/performance",WP="@firebase/performance-compat",VP="@firebase/remote-config",BP="@firebase/remote-config-compat",$P="@firebase/storage",HP="@firebase/storage-compat",GP="@firebase/firestore",YP="@firebase/vertexai",KP="@firebase/firestore-compat",qP="firebase",QP="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]",JP={[ec]:"fire-core",[CP]:"fire-core-compat",[kP]:"fire-analytics",[TP]:"fire-analytics-compat",[RP]:"fire-app-check",[PP]:"fire-app-check-compat",[NP]:"fire-auth",[bP]:"fire-auth-compat",[AP]:"fire-rtdb",[OP]:"fire-data-connect",[xP]:"fire-rtdb-compat",[LP]:"fire-fn",[DP]:"fire-fn-compat",[MP]:"fire-iid",[FP]:"fire-iid-compat",[UP]:"fire-fcm",[zP]:"fire-fcm-compat",[jP]:"fire-perf",[WP]:"fire-perf-compat",[VP]:"fire-rc",[BP]:"fire-rc-compat",[$P]:"fire-gcs",[HP]:"fire-gcs-compat",[GP]:"fire-fst",[KP]:"fire-fst-compat",[YP]:"fire-vertex","fire-js":"fire-js",[qP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map,ls=new Map,cs=new Map;function Yo(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ow(t,e){t.container.addOrOverwriteComponent(e)}function yr(t){const e=t.name;if(cs.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;cs.set(e,t);for(const n of vr.values())Yo(n,t);for(const n of ls.values())Yo(n,t);return!0}function xw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function XP(t,e,n=_r){xw(t,e).clearInstance(n)}function Lw(t){return t.options!==void 0}function fe(t){return t.settings!==void 0}function ZP(){cs.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new vi("app","Firebase",eR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR extends Dw{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,$t(ec,Ef,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){gp(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Nt.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=QP;function mp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_r,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=Ew()),!n)throw Nt.create("no-options");const s=vr.get(i);if(s){if(_f(n,s.options)&&_f(r,s.config))return s;throw Nt.create("duplicate-app",{appName:i})}const o=new fp(i);for(const l of cs.values())o.addComponent(l);const a=new Dw(n,r,o);return vr.set(i,a),a}function nR(t,e){if(Gk()&&!Sw())throw Nt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;Lw(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,u)=>Math.imul(31,d)+u.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Nt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=ls.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new fp(s);for(const c of cs.values())a.addComponent(c);const l=new tR(n,e,s,a);return ls.set(s,l),l}function rR(t=_r){const e=vr.get(t);if(!e&&t===_r&&Ew())return mp();if(!e)throw Nt.create("no-app",{appName:t});return e}function iR(){return Array.from(vr.values())}async function gp(t){let e=!1;const n=t.name;vr.has(n)?(e=!0,vr.delete(n)):ls.has(n)&&t.decRefCount()<=0&&(ls.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function $t(t,e,n){var r;let i=(r=JP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(a.join(" "));return}yr(new Ot(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Mw(t,e){if(t!==null&&typeof t!="function")throw Nt.create("invalid-log-argument");uP(t,e)}function Fw(t){cP(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="firebase-heartbeat-database",oR=1,Ko="firebase-heartbeat-store";let td=null;function Uw(){return td||(td=yP(sR,oR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),td}async function aR(t){try{const n=(await Uw()).transaction(Ko),r=await n.objectStore(Ko).get(zw(t));return await n.done,r}catch(e){if(e instanceof it)On.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function i_(t,e){try{const r=(await Uw()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,zw(t)),await r.done}catch(n){if(n instanceof it)On.warn(n.message);else{const r=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function zw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=1024,cR=30*24*60*60*1e3;class uR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=s_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=cR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=s_(),{heartbeatsToSend:r,unsentEntries:i}=dR(this._heartbeatsCache.heartbeats),s=ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return On.warn(n),""}}}function s_(){return new Date().toISOString().substring(0,10)}function dR(t,e=lR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),o_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),o_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jl()?Kk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return i_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return i_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function o_(t){return ql(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){yr(new Ot("platform-logger",e=>new IP(e),"PRIVATE")),yr(new Ot("heartbeat",e=>new uR(e),"PRIVATE")),$t(ec,Ef,t),$t(ec,Ef,"esm2017"),$t("fire-js","")}hR("");const pR=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:it,SDK_VERSION:Or,_DEFAULT_ENTRY_NAME:_r,_addComponent:Yo,_addOrOverwriteComponent:Ow,_apps:vr,_clearComponents:ZP,_components:cs,_getProvider:xw,_isFirebaseApp:Lw,_isFirebaseServerApp:fe,_registerComponent:yr,_removeServiceInstance:XP,_serverApps:ls,deleteApp:gp,getApp:rR,getApps:iR,initializeApp:mp,initializeServerApp:nR,onLog:Mw,registerVersion:$t,setLogLevel:Fw},Symbol.toStringTag,{value:"Module"}));function _p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Bs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ti={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function jw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gR=mR,_R=jw,Ww=new vi("auth","Firebase",jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new ga("@firebase/auth");function vR(t,...e){tc.logLevel<=Y.WARN&&tc.warn(`Auth (${Or}): ${t}`,...e)}function _l(t,...e){tc.logLevel<=Y.ERROR&&tc.error(`Auth (${Or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){throw yp(t,...e)}function Se(t,...e){return yp(t,...e)}function vp(t,e,n){const r=Object.assign(Object.assign({},_R()),{[e]:n});return new vi("auth","Firebase",r).create(e,{appName:t.name})}function Oe(t){return vp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ts(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ue(t,"argument-error"),vp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ww.create(t,...e)}function E(t,e,...n){if(!t)throw yp(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _l(e),new Error(e)}function Yt(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wp(){return a_()==="http:"||a_()==="https:"}function a_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wp()||Cw()||"connection"in navigator)?navigator.onLine:!0}function wR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=dp()||zc()}get(){return yR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new _a(3e4,6e4);function he(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pe(t,e,n,r,i={}){return Bw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return Yk()||(c.referrerPolicy="no-referrer"),Vw.fetch()($w(t,t.config.apiHost,n,a),c)})}async function Bw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ER),e);try{const i=new CR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw no(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw vp(t,d,c);Ue(t,d)}}catch(i){if(i instanceof it)throw i;Ue(t,"network-request-failed",{message:String(i)})}}async function Un(t,e,n,r,i={}){const s=await pe(t,e,n,r,i);return"mfaPendingCredential"in s&&Ue(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $w(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ep(t.config,i):`${t.config.apiScheme}://${i}`}function SR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Se(this.auth,"network-request-failed")),IR.get())})}}function no(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Se(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t){return t!==void 0&&t.getResponse!==void 0}function c_(t){return t!==void 0&&t.enterprise!==void 0}class Hw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t){return(await pe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Gw(t,e){return pe(t,"GET","/v2/recaptchaConfig",he(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e){return pe(t,"POST","/v1/accounts:delete",e)}async function PR(t,e){return pe(t,"POST","/v1/accounts:update",e)}async function Yw(t,e){return pe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RR(t,e=!1){const n=D(t),r=await n.getIdToken(e),i=Wc(r);E(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo(nd(i.auth_time)),issuedAtTime:mo(nd(i.iat)),expirationTime:mo(nd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nd(t){return Number(t)*1e3}function Wc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _l("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ql(n);return i?JSON.parse(i):(_l("Failed to decode base64 JWT payload"),null)}catch(i){return _l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function u_(t){const e=Wc(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof it&&NR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xn(t,Yw(n,{idToken:r}));E(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Kw(s.providerUserInfo):[],a=OR(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new If(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function AR(t){const e=D(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kw(t){return t.map(e=>{var{providerId:n}=e,r=_p(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e){const n=await Bw(t,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$w(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LR(t,e){return pe(t,"POST","/v2/accounts:revokeToken",he(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):u_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){E(e.length!==0,"internal-error");const n=u_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(E(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(E(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new If(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xn(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RR(this,e)}reload(){return AR(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fe(this.auth.app))return Promise.reject(Oe(this.auth));const e=await this.getIdToken();return await xn(this,kR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(c=n.createdAt)!==null&&c!==void 0?c:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:C,providerData:b,stsTokenManager:R}=n;E(m&&R,e,"internal-error");const O=Ki.fromJSON(this.name,R);E(typeof m=="string",e,"internal-error"),Vn(u,e.name),Vn(f,e.name),E(typeof y=="boolean",e,"internal-error"),E(typeof C=="boolean",e,"internal-error"),Vn(g,e.name),Vn(_,e.name),Vn(v,e.name),Vn(w,e.name),Vn(p,e.name),Vn(h,e.name);const Z=new En({uid:m,auth:e,email:f,emailVerified:y,displayName:u,isAnonymous:C,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:h});return b&&Array.isArray(b)&&(Z.providerData=b.map(W=>Object.assign({},W))),w&&(Z._redirectEventId=w),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new En({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];E(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Kw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ki;a.updateFromIdToken(r);const l=new En({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new If(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new Map;function dt(t){Yt(t instanceof Function,"Expected a class definition");let e=d_.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,d_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qw.type="NONE";const us=qw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qr(this.userKey,i.apiKey,s),this.fullPersistenceKey=qr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qi(dt(us),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||dt(us);const o=qr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=En._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new qi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eE(e))return"Blackberry";if(tE(e))return"Webos";if(Jw(e))return"Safari";if((e.includes("chrome/")||Xw(e))&&!e.includes("edge/"))return"Chrome";if(va(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qw(t=Ce()){return/firefox\//i.test(t)}function Jw(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xw(t=Ce()){return/crios\//i.test(t)}function Zw(t=Ce()){return/iemobile/i.test(t)}function va(t=Ce()){return/android/i.test(t)}function eE(t=Ce()){return/blackberry/i.test(t)}function tE(t=Ce()){return/webos/i.test(t)}function ya(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DR(t=Ce()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function MR(t=Ce()){var e;return ya(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FR(){return Tw()&&document.documentMode===10}function nE(t=Ce()){return ya(t)||va(t)||tE(t)||eE(t)||/windows phone/i.test(t)||Zw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t,e=[]){let n;switch(t){case"Browser":n=f_(Ce());break;case"Worker":n=`${f_(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zR(t,e={}){return pe(t,"GET","/v2/passwordPolicy",he(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=6;class WR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new h_(this),this.idTokenSubscription=new h_(this),this.beforeStateQueue=new UR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ww,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Yw(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fe(this.app))return Promise.reject(Oe(this));const n=e?D(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fe(this.app)?Promise.reject(Oe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fe(this.app)?Promise.reject(Oe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zR(this),n=new WR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ue(t){return D(t)}class h_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rw(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BR(t){wa=t}function Ip(t){return wa.loadJS(t)}function $R(){return wa.recaptchaV2Script}function HR(){return wa.recaptchaEnterpriseScript}function GR(){return wa.gapiScript}function iE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=500,KR=6e4,tl=1e12;class qR{constructor(e){this.auth=e,this.counter=tl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new XR(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||tl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||tl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||tl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class QR{constructor(){this.enterprise=new JR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class JR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class XR{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;E(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ZR(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},KR)},YR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ZR(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const eN="recaptcha-enterprise",go="NO_RECAPTCHA";class sE{constructor(e){this.type=eN,this.auth=ue(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Gw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Hw(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;c_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(go)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QR().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&c_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=HR();l.length!==0&&(l+=a),Ip(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $s(t,e,n,r=!1,i=!1){const s=new sE(t);let o;if(i)o=go;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function dr(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await $s(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await $s(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await $s(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await $s(t,e,n,!1,!0);return r(t,d)}return Promise.reject(l)})}else{const a=await $s(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function tN(t){const e=ue(t),n=await Gw(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Hw(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new sE(e).verify()}function nN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rN(t,e,n){const r=ue(t);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=oE(e),{host:o,port:a}=iN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sN()}function oE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iN(t){const e=oE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:p_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:p_(o)}}}function p_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(t,e){return pe(t,"POST","/v1/accounts:resetPassword",he(t,e))}async function oN(t,e){return pe(t,"POST","/v1/accounts:update",e)}async function aN(t,e){return pe(t,"POST","/v1/accounts:signUp",e)}async function lN(t,e){return pe(t,"POST","/v1/accounts:update",he(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(t,e){return Un(t,"POST","/v1/accounts:signInWithPassword",he(t,e))}async function Vc(t,e){return pe(t,"POST","/v1/accounts:sendOobCode",he(t,e))}async function uN(t,e){return Vc(t,e)}async function dN(t,e){return Vc(t,e)}async function fN(t,e){return Vc(t,e)}async function hN(t,e){return Vc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",he(t,e))}async function mN(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",he(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends ks{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dr(e,n,"signInWithPassword",cN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return pN(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dr(e,r,"signUpPassword",aN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return mN(e,{idToken:n,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t,e){return Un(t,"POST","/v1/accounts:signInWithIdp",he(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN="http://localhost";class dn extends ks{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_p(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return kn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kn(e,n)}buildRequest(){const e={requestUri:gN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(t,e){return pe(t,"POST","/v1/accounts:sendVerificationCode",he(t,e))}async function _N(t,e){return Un(t,"POST","/v1/accounts:signInWithPhoneNumber",he(t,e))}async function vN(t,e){const n=await Un(t,"POST","/v1/accounts:signInWithPhoneNumber",he(t,e));if(n.temporaryProof)throw no(t,"account-exists-with-different-credential",n);return n}const yN={USER_NOT_FOUND:"user-not-found"};async function wN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Un(t,"POST","/v1/accounts:signInWithPhoneNumber",he(t,n),yN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends ks{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Qr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Qr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return _N(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return vN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return wN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Qr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IN(t){const e=zi(to(t)).link,n=e?zi(to(e)).deep_link_id:null,r=zi(to(t)).deep_link_id;return(r?zi(to(r)).link:null)||r||n||e||t}class Bc{constructor(e){var n,r,i,s,o,a;const l=zi(to(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=EN((i=l.mode)!==null&&i!==void 0?i:null);E(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=IN(e);try{return new Bc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.providerId=xr.PROVIDER_ID}static credential(e,n){return Jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bc.parseLink(n);return E(r,"argument-error"),Jo._fromEmailAndCode(e,r.code,r.tenantId)}}xr.PROVIDER_ID="password";xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends zn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Qi extends Ps{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return E("providerId"in n&&"signInMethod"in n,"argument-error"),dn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),dn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Qi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Qi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Qi(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ps{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ps{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="http://localhost";class ds extends ks{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return kn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ds(r,s)}static _create(e,n){return new ds(e,n)}buildRequest(){return{requestUri:SN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="saml.";class nc extends zn{constructor(e){E(e.startsWith(CN),"argument-error"),super(e)}static credentialFromResult(e){return nc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return nc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ds.fromJSON(e);return E(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ds._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ps{constructor(){super("twitter.com")}static credential(e,n){return dn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(t,e){return Un(t,"POST","/v1/accounts:signUp",he(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=g_(r);return new xt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=g_(r);return new xt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function g_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(t){var e;if(fe(t.app))return Promise.reject(Oe(t));const n=ue(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new xt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await lE(n,{returnSecureToken:!0}),i=await xt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends it{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rc(e,n,r,i)}}function cE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(t,e){const n=D(t);await $c(!0,n,e);const{providerUserInfo:r}=await PR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=uE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Sp(t,e,n=!1){const r=await xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xt._forOperation(t,"link",r)}async function $c(t,e,n){await Qo(e);const r=uE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";E(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(t,e,n=!1){const{auth:r}=t;if(fe(r.app))return Promise.reject(Oe(r));const i="reauthenticate";try{const s=await xn(t,cE(r,i,e,t),n);E(s.idToken,r,"internal-error");const o=Wc(s.idToken);E(o,r,"internal-error");const{sub:a}=o;return E(t.uid===a,r,"user-mismatch"),xt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e,n=!1){if(fe(t.app))return Promise.reject(Oe(t));const r="signIn",i=await cE(t,r,e),s=await xt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Hc(t,e){return fE(ue(t),e)}async function hE(t,e){const n=D(t);return await $c(!1,n,e.providerId),Sp(n,e)}async function pE(t,e){return dE(D(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){return Un(t,"POST","/v1/accounts:signInWithCustomToken",he(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e){if(fe(t.app))return Promise.reject(Oe(t));const n=ue(t),r=await PN(n,{token:e,returnSecureToken:!0}),i=await xt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Cp._fromServerResponse(e,n):"totpInfo"in n?Tp._fromServerResponse(e,n):Ue(e,"internal-error")}}class Cp extends Ea{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Cp(n)}}class Tp extends Ea{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Tp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t,e,n){var r;E(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),E(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(t){const e=ue(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NN(t,e,n){const r=ue(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Gc(r,i,n),await dr(r,i,"getOobCode",dN,"EMAIL_PASSWORD_PROVIDER")}async function bN(t,e,n){await aE(D(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kp(t),r})}async function AN(t,e){await lN(D(t),{oobCode:e})}async function mE(t,e){const n=D(t),r=await aE(n,{oobCode:e}),i=r.requestType;switch(E(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(r.mfaInfo,n,"internal-error");default:E(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Ea._fromServerResponse(ue(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function ON(t,e){const{data:n}=await mE(D(t),e);return n.email}async function xN(t,e,n){if(fe(t.app))return Promise.reject(Oe(t));const r=ue(t),o=await dr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lE,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&kp(t),l}),a=await xt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function LN(t,e,n){return fe(t.app)?Promise.reject(Oe(t)):Hc(D(t),xr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kp(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e,n){const r=ue(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){E(a.handleCodeInApp,r,"argument-error"),a&&Gc(r,o,a)}s(i,n),await dr(r,i,"getOobCode",fN,"EMAIL_PASSWORD_PROVIDER")}function MN(t,e){const n=Bc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function FN(t,e,n){if(fe(t.app))return Promise.reject(Oe(t));const r=D(t),i=xr.credentialWithLink(e,n||qo());return E(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Hc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(t,e){return pe(t,"POST","/v1/accounts:createAuthUri",he(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e){const n=wp()?qo():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await UN(D(t),r);return i||[]}async function jN(t,e){const n=D(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Gc(n.auth,i,e);const{email:s}=await uN(n.auth,i);s!==t.email&&await t.reload()}async function WN(t,e,n){const r=D(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Gc(r.auth,s,n);const{email:o}=await hN(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e){return pe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=D(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await xn(r,VN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $N(t,e){const n=D(t);return fe(n.auth.app)?Promise.reject(Oe(n.auth)):gE(n,e,null)}function HN(t,e){return gE(D(t),null,e)}async function gE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await xn(t,oN(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Wc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ji(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new YN(s,i);case"github.com":return new KN(s,i);case"google.com":return new qN(s,i);case"twitter.com":return new QN(s,i,t.screenName||null);case"custom":case"anonymous":return new Ji(s,null);default:return new Ji(s,r,i)}}class Ji{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class _E extends Ji{constructor(e,n,r,i){super(e,n,r),this.username=i}}class YN extends Ji{constructor(e,n){super(e,"facebook.com",n)}}class KN extends _E{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class qN extends Ji{constructor(e,n){super(e,"google.com",n)}}class QN extends _E{constructor(e,n,r){super(e,"twitter.com",n,r)}}function JN(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:GN(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Hr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Hr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Hr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Hr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ue(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ea._fromServerResponse(r,a));E(i.mfaPendingCredential,r,"internal-error");const o=Hr._fromMfaPendingCredential(i.mfaPendingCredential);return new Pp(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await xt._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return E(n.user,r,"internal-error"),xt._forOperation(n.user,n.operationType,c);default:Ue(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function XN(t,e){var n;const r=D(t),i=e;return E(e.customData.operationType,r,"argument-error"),E((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Pp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e){return pe(t,"POST","/v2/accounts/mfaEnrollment:start",he(t,e))}function ZN(t,e){return pe(t,"POST","/v2/accounts/mfaEnrollment:finalize",he(t,e))}function eb(t,e){return pe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",he(t,e))}class Rp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Ea._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Rp(e)}async getSession(){return Hr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await xn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await xn(this.user,eb(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const rd=new WeakMap;function tb(t){const e=D(t);return rd.has(e)||rd.set(e,Rp._fromUser(e)),rd.get(e)}const ic="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ic,"1"),this.storage.removeItem(ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=1e3,rb=10;class yE extends vE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yE.type="LOCAL";const Np=yE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE extends vE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wE.type="SESSION";const oi=wE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await ib(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ia("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return window}function ob(t){_e().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){return typeof _e().WorkerGlobalScope<"u"&&typeof _e().importScripts=="function"}async function ab(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cb(){return bp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="firebaseLocalStorageDb",ub=1,sc="firebaseLocalStorage",IE="fbase_key";class Sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kc(t,e){return t.transaction([sc],e?"readwrite":"readonly").objectStore(sc)}function db(){const t=indexedDB.deleteDatabase(EE);return new Sa(t).toPromise()}function Sf(){const t=indexedDB.open(EE,ub);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sc,{keyPath:IE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sc)?e(r):(r.close(),await db(),e(await Sf()))})})}async function v_(t,e,n){const r=Kc(t,!0).put({[IE]:e,value:n});return new Sa(r).toPromise()}async function fb(t,e){const n=Kc(t,!1).get(e),r=await new Sa(n).toPromise();return r===void 0?null:r.value}function y_(t,e){const n=Kc(t,!0).delete(e);return new Sa(n).toPromise()}const hb=800,pb=3;class SE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(cb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ab(),!this.activeServiceWorker)return;this.sender=new sb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sf();return await v_(e,ic,"1"),await y_(e,ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>v_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>y_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kc(i,!1).getAll();return new Sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}SE.type="LOCAL";const Xo=SE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e){return pe(t,"POST","/v2/accounts/mfaSignIn:start",he(t,e))}function mb(t,e){return pe(t,"POST","/v2/accounts/mfaSignIn:finalize",he(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=iE("rcb"),gb=new _a(3e4,6e4);class _b{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=_e().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return E(vb(n),e,"argument-error"),this.shouldResolveImmediately(n)&&l_(_e().grecaptcha)?Promise.resolve(_e().grecaptcha):new Promise((r,i)=>{const s=_e().setTimeout(()=>{i(Se(e,"network-request-failed"))},gb.get());_e()[id]=()=>{_e().clearTimeout(s),delete _e()[id];const a=_e().grecaptcha;if(!a||!l_(a)){i(Se(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const u=l(c,d);return this.counter++,u},this.hostLanguage=n,r(a)};const o=`${$R()}?${yi({onload:id,render:"explicit",hl:n})}`;Ip(o).catch(()=>{clearTimeout(s),i(Se(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=_e().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function vb(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class yb{async load(e){return new qR(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="recaptcha",wb={theme:"light",type:"image"};let Eb=class{constructor(e,n,r=Object.assign({},wb)){this.parameters=r,this.type=_o,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ue(e),this.isInvisible=this.parameters.size==="invisible",E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;E(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new yb:new _b,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=_e()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(wp()&&!bp(),this.auth,"internal-error"),await Ib(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await TR(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Ib(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Qr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Sb(t,e,n){if(fe(t.app))return Promise.reject(Oe(t));const r=ue(t),i=await qc(r,e,D(n));return new Ap(i,s=>Hc(r,s))}async function Cb(t,e,n){const r=D(t);await $c(!1,r,"phone");const i=await qc(r.auth,e,D(n));return new Ap(i,s=>hE(r,s))}async function Tb(t,e,n){const r=D(t);if(fe(r.auth.app))return Promise.reject(Oe(r.auth));const i=await qc(r.auth,e,D(n));return new Ap(i,s=>pE(r,s))}async function qc(t,e,n){var r;if(!t._getRecaptchaConfig())try{await tN(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){E(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await dr(t,o,"mfaSmsEnrollment",async(d,u)=>{if(u.phoneEnrollmentInfo.captchaResponse===go){E((n==null?void 0:n.type)===_o,d,"argument-error");const f=await sd(d,u,n);return __(d,f)}return __(d,u)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{E(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;E(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await dr(t,a,"mfaSmsSignIn",async(u,f)=>{if(f.phoneSignInInfo.captchaResponse===go){E((n==null?void 0:n.type)===_o,u,"argument-error");const g=await sd(u,f,n);return w_(u,g)}return w_(u,f)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await dr(t,s,"sendVerificationCode",async(c,d)=>{if(d.captchaResponse===go){E((n==null?void 0:n.type)===_o,c,"argument-error");const u=await sd(c,d,n);return m_(c,u)}return m_(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function kb(t,e){const n=D(t);if(fe(n.auth.app))return Promise.reject(Oe(n.auth));await Sp(n,e)}async function sd(t,e,n){E(n.type===_o,t,"argument-error");const r=await n.verify();E(typeof r=="string",t,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai=class vl{constructor(e){this.providerId=vl.PROVIDER_ID,this.auth=ue(e)}verifyPhoneNumber(e,n){return qc(this.auth,e,D(n))}static credential(e,n){return Qr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return vl.credentialFromTaggedObject(n)}static credentialFromError(e){return vl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Qr._fromTokenResponse(n,r):null}};ai.PROVIDER_ID="phone";ai.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t,e){return e?dt(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends ks{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pb(t){return fE(t.auth,new Op(t),t.bypassAuthState)}function Rb(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),dE(n,new Op(t),t.bypassAuthState)}async function Nb(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),Sp(n,new Op(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pb;case"linkViaPopup":case"linkViaRedirect":return Nb;case"reauthViaPopup":case"reauthViaRedirect":return Rb;default:Ue(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new _a(2e3,1e4);async function xp(t,e,n){if(fe(t.app))return Promise.reject(Se(t,"operation-not-supported-in-this-environment"));const r=ue(t);Ts(t,e,zn);const i=wi(r,n);return new In(r,"signInViaPopup",e,i).executeNotNull()}async function Ab(t,e,n){const r=D(t);if(fe(r.auth.app))return Promise.reject(Se(r.auth,"operation-not-supported-in-this-environment"));Ts(r.auth,e,zn);const i=wi(r.auth,n);return new In(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Ob(t,e,n){const r=D(t);Ts(r.auth,e,zn);const i=wi(r.auth,n);return new In(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class In extends CE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bb.get())};e()}}In.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="pendingRedirect",vo=new Map;class Lb extends CE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await Db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Db(t,e){const n=kE(e),r=TE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Lp(t,e){return TE(t)._set(kE(e),"true")}function Mb(){vo.clear()}function Dp(t,e){vo.set(t._key(),e)}function TE(t){return dt(t._redirectPersistence)}function kE(t){return qr(xb,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t,e,n){return Ub(t,e,n)}async function Ub(t,e,n){if(fe(t.app))return Promise.reject(Oe(t));const r=ue(t);Ts(t,e,zn),await r._initializationPromise;const i=wi(r,n);return await Lp(i,r),i._openRedirect(r,e,"signInViaRedirect")}function zb(t,e,n){return jb(t,e,n)}async function jb(t,e,n){const r=D(t);if(Ts(r.auth,e,zn),fe(r.auth.app))return Promise.reject(Oe(r.auth));await r.auth._initializationPromise;const i=wi(r.auth,n);await Lp(i,r.auth);const s=await PE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Wb(t,e,n){return Vb(t,e,n)}async function Vb(t,e,n){const r=D(t);Ts(r.auth,e,zn),await r.auth._initializationPromise;const i=wi(r.auth,n);await $c(!1,r,e.providerId),await Lp(i,r.auth);const s=await PE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Bb(t,e){return await ue(t)._initializationPromise,Qc(t,e,!1)}async function Qc(t,e,n=!1){if(fe(t.app))return Promise.reject(Oe(t));const r=ue(t),i=wi(r,e),o=await new Lb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function PE(t){const e=Ia(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=10*60*1e3;class RE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!NE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Se(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$b&&this.cachedEventUids.clear(),this.cachedEventUids.has(E_(e))}saveEventToCache(e){this.cachedEventUids.add(E_(e)),this.lastProcessedEventTime=Date.now()}}function E_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function NE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(t,e={}){return pe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yb=/^https?/;async function Kb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bE(t);for(const n of e)try{if(qb(n))return}catch{}Ue(t,"unauthorized-domain")}function qb(t){const e=qo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Yb.test(n))return!1;if(Gb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new _a(3e4,6e4);function I_(){const t=_e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jb(t){return new Promise((e,n)=>{var r,i,s;function o(){I_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{I_(),n(Se(t,"network-request-failed"))},timeout:Qb.get()})}if(!((i=(r=_e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_e().gapi)===null||s===void 0)&&s.load)o();else{const a=iE("iframefcb");return _e()[a]=()=>{gapi.load?o():n(Se(t,"network-request-failed"))},Ip(`${GR()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw yl=null,e})}let yl=null;function Xb(t){return yl=yl||Jb(t),yl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new _a(5e3,15e3),eA="__/auth/iframe",tA="emulator/auth/iframe",nA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iA(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ep(e,tA):`https://${t.config.authDomain}/${eA}`,r={apiKey:e.apiKey,appName:t.name,v:Or},i=rA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yi(r).slice(1)}`}async function sA(t){const e=await Xb(t),n=_e().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:iA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Se(t,"network-request-failed"),a=_e().setTimeout(()=>{s(o)},Zb.get());function l(){_e().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aA=500,lA=600,cA="_blank",uA="http://localhost";class S_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dA(t,e,n,r=aA,i=lA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oA),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ce().toLowerCase();n&&(a=Xw(c)?cA:n),Qw(c)&&(e=e||uA,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,_])=>`${f}${g}=${_},`,"");if(MR(c)&&a!=="_self")return fA(e||"",a),new S_(null);const u=window.open(e||"",a,d);E(u,t,"popup-blocked");try{u.focus()}catch{}return new S_(u)}function fA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="__/auth/handler",pA="emulator/auth/handler",mA=encodeURIComponent("fac");async function Cf(t,e,n,r,i,s){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:i};if(e instanceof zn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof Ps){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${mA}=${encodeURIComponent(l)}`:"";return`${gA(t)}?${yi(a).slice(1)}${c}`}function gA({config:t}){return t.emulator?Ep(t,pA):`https://${t.authDomain}/${hA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="webStorageSupport";class _A{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oi,this._completeRedirectFn=Qc,this._overrideRedirectResult=Dp}async _openPopup(e,n,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cf(e,n,r,qo(),i);return dA(e,o,Ia())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cf(e,n,r,qo(),i);return ob(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sA(e),r=new RE(e);return n.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(od,{type:od},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[od];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nE()||Jw()||ya()}}const vA=_A;class yA{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return rn("unexpected MultiFactorSessionType")}}}class Mp extends yA{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mp(e)}_finalizeEnroll(e,n,r){return ZN(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return mb(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class AE{constructor(){}static assertion(e){return Mp._fromCredential(e)}}AE.FACTOR_ID="phone";var C_="@firebase/auth",T_="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IA(t){yr(new Ot("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rE(t)},c=new VR(r,i,s,l);return nN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yr(new Ot("auth-internal",e=>{const n=ue(e.getProvider("auth").getImmediate());return(r=>new wA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(C_,T_,EA(t)),$t(C_,T_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=5*60;$k("authIdTokenMaxAge");function CA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Se("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IA("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n){this._delegate=e,this.firebase=n,Yo(e,new Ot("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),gp(this._delegate)))}_getService(e,n=_r){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=_r){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Yo(this._delegate,e)}_addOrOverwriteComponent(e){Ow(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},k_=new vi("app-compat","Firebase",kA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:$t,setLogLevel:Fw,onLog:Mw,apps:null,SDK_VERSION:Or,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:pR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||_r,!_t(e,c))throw k_.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const u=mp(c,d);if(_t(e,u.name))return e[u.name];const f=new t(u,n);return e[u.name]=f,f}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,u=d.replace("-compat","");if(yr(c)&&c.type==="PUBLIC"){const f=(g=i())=>{if(typeof g[u]!="function")throw k_.create("invalid-app-argument",{appName:d});return g[u]()};c.serviceProps!==void 0&&Ho(f,c.serviceProps),n[u]=f,t.prototype[u]=function(...g){return this._getService.bind(this,d).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[u]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(){const t=PA(TA);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:OE,extendNamespace:e,createSubscribe:Rw,ErrorFactory:vi,deepExtend:Ho});function e(n){Ho(t,n)}return t}const RA=OE();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new ga("@firebase/app-compat"),NA="@firebase/app-compat",bA="0.2.46";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t){$t(NA,bA,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const t=ww();if(t.firebase!==void 0){P_.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&P_.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const gn=RA;AA();var OA="firebase",xA="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.registerVersion(OA,xA,"app-compat");var R_={};const N_="@firebase/database",b_="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xE="";function LE(t){xE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Go(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LA(e)}}catch{}return new DA},Gr=DE("localStorage"),Tf=DE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new ga("@firebase/database"),ME=function(){let t=1;return function(){return t++}}(),FE=function(t){const e=rP(t),n=new eP;n.update(e);const r=n.digest();return cp.encodeByteArray(r)},Ca=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ca.apply(null,r):typeof r=="object"?e+=Ee(r):e+=r,e+=" "}return e};let Jr=null,A_=!0;const UE=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xi.logLevel=Y.VERBOSE,Jr=Xi.log.bind(Xi),e&&Tf.set("logging_enabled",!0)):typeof t=="function"?Jr=t:(Jr=null,Tf.remove("logging_enabled"))},be=function(...t){if(A_===!0&&(A_=!1,Jr===null&&Tf.get("logging_enabled")===!0&&UE(!0)),Jr){const e=Ca.apply(null,t);Jr(e)}},Ta=function(t){return function(...e){be(t,...e)}},kf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ca(...t);Xi.error(e)},fn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ca(...t)}`;throw Xi.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+Ca(...t);Xi.warn(e)},MA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},FA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wr="[MIN_NAME]",Ln="[MAX_NAME]",Ei=function(t,e){if(t===e)return 0;if(t===wr||e===Ln)return-1;if(e===wr||t===Ln)return 1;{const n=O_(t),r=O_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},UA=function(t,e){return t===e?0:t<e?-1:1},Hs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},Fp=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ee(e[r]),n+=":",n+=Fp(t[e[r]]);return n+="}",n},zE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jE=function(t){S(!Jc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},zA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function WA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const VA=new RegExp("^-?(0*)\\d{1,10}$"),BA=-2147483648,$A=2147483647,O_=function(t){if(VA.test(t)){const e=Number(t);if(e>=BA&&e<=$A)return e}return null},Rs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},HA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Zi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="5",WE="v",VE="s",BE="r",$E="f",HE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,GE="ls",YE="p",Pf="ac",KE="websocket",qE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function KA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function JE(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===KE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);KA(t)&&(n.ns=t.namespace);const i=[];return xe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.counters_={}}incrementCounter(e,n=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={},ld={};function zp(t){const e=t.toString();return ad[e]||(ad[e]=new qA),ad[e]}function QA(t,e){const n=t.toString();return ld[n]||(ld[n]=e()),ld[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Rs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="start",XA="close",ZA="pLPCommand",eO="pRTLPCB",XE="id",ZE="pw",e1="ser",tO="cb",nO="seg",rO="ts",iO="d",sO="dframe",t1=1870,n1=30,oO=t1-n1,aO=25e3,lO=3e4;class Jn{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ta(e),this.stats_=zp(n),this.urlFn=l=>(this.appCheckToken&&(l[Pf]=this.appCheckToken),JE(n,qE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new JA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lO)),FA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jp((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===x_)this.id=a,this.password=l;else if(o===XA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[x_]="t",r[e1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[tO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[WE]=Up,this.transportSessionId&&(r[VE]=this.transportSessionId),this.lastSessionId&&(r[GE]=this.lastSessionId),this.applicationId&&(r[YE]=this.applicationId),this.appCheckToken&&(r[Pf]=this.appCheckToken),typeof location<"u"&&location.hostname&&HE.test(location.hostname)&&(r[BE]=$E);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jn.forceAllow_=!0}static forceDisallow(){Jn.forceDisallow_=!0}static isAvailable(){return Jn.forceAllow_?!0:!Jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zA()&&!jA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yw(n),i=zE(r,oO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[sO]="t",r[XE]=e,r[ZE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ME(),window[ZA+this.uniqueCallbackIdentifier]=e,window[eO+this.uniqueCallbackIdentifier]=n,this.myIFrame=jp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[XE]=this.myID,e[ZE]=this.myPW,e[e1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+n1+r.length<=t1;){const o=this.pendingSegs.shift();r=r+"&"+nO+i+"="+o.seg+"&"+rO+i+"="+o.ts+"&"+iO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(aO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=16384,uO=45e3;let oc=null;typeof MozWebSocket<"u"?oc=MozWebSocket:typeof WebSocket<"u"&&(oc=WebSocket);class Ct{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ta(this.connId),this.stats_=zp(n),this.connURL=Ct.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[WE]=Up,typeof location<"u"&&location.hostname&&HE.test(location.hostname)&&(o[BE]=$E),n&&(o[VE]=n),r&&(o[GE]=r),i&&(o[Pf]=i),s&&(o[YE]=s),JE(e,KE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gr.set("previous_websocket_failure",!0);try{let r;kw(),this.mySock=new oc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&oc!==null&&!Ct.forceDisallow_}static previouslyFailed(){return Gr.isInMemoryStorage||Gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Go(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zE(n,cO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{static get ALL_TRANSPORTS(){return[Jn,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ct&&Ct.isAvailable();let r=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ct];else{const i=this.transports_=[];for(const s of fs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=6e4,fO=5e3,hO=10*1024,pO=100*1024,cd="t",L_="d",mO="s",D_="r",gO="e",M_="o",F_="a",U_="n",z_="p",_O="h";class vO{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ta("c:"+this.id+":"),this.transportManager_=new fs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=yo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cd in e){const n=e[cd];n===F_?this.upgradeIfSecondaryHealthy_():n===D_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===M_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Hs("t",e),r=Hs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:z_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:F_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:U_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Hs("t",e),r=Hs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Hs(cd,e);if(L_ in e){const r=e[L_];if(n===_O){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===U_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mO?this.onConnectionShutdown_(r):n===D_?this.onReset_(r):n===gO?kf("Server Error: "+r):n===M_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Up!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),yo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:z_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends i1{static getInstance(){return new ac}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=32,W_=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new G("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Er(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Wp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function s1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Ge(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function wO(t,e){const n=Zo(t,0),r=Zo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ei(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Vp(t,e){if(Er(t)!==Er(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function kt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Er(t)>Er(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class EO{constructor(e,n){this.errorPrefix_=n,this.parts_=Zo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jc(this.parts_[r]);o1(this)}}function IO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jc(e),o1(t)}function SO(t){const e=t.parts_.pop();t.byteLength_-=jc(e),t.parts_.length>0&&(t.byteLength_-=1)}function o1(t){if(t.byteLength_>W_)throw new Error(t.errorPrefix_+"has a key path longer than "+W_+" bytes ("+t.byteLength_+").");if(t.parts_.length>j_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+j_+") or object contains a cycle "+jr(t))}function jr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends i1{static getInstance(){return new Bp}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=1e3,CO=60*5*1e3,V_=30*1e3,TO=1.3,kO=3e4,PO="server_kill",B_=3;class Pn extends r1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pn.nextPersistentConnectionId_++,this.log_=Ta("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gs,this.maxReconnectDelay_=CO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!kw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ac.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ee(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Xe,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Pn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_t(e,"w")){const r=si(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=V_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Xk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kf("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kO&&(this.reconnectDelay_=Gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new vO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Be(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(PO)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Be(u),l())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xl(this.interruptReasons_)&&(this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Fp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=B_&&(this.reconnectDelay_=V_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=B_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xE.replace(/\./g,"-")]=1,dp()?e["framework.cordova"]=1:zc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ac.getInstance().currentlyOnline();return Xl(this.interruptReasons_)&&e}}Pn.nextPersistentConnectionId_=0;Pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(wr,e),i=new j(wr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl;class a1 extends Xc{static get __EMPTY_NODE(){return nl}static set __EMPTY_NODE(e){nl=e}compare(e,n){return Ei(e.name,n.name)}isDefinedOn(e){throw Cs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Ln,nl)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,nl)}toString(){return".key"}}const cn=new a1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??et.EMPTY_NODE,this.right=s??et.EMPTY_NODE}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return et.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class RO{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rl(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new RO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t,e){return Ei(t.name,e.name)}function $p(t,e){return Ei(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rf;function bO(t){Rf=t}const l1=function(t){return typeof t=="number"?"number:"+jE(t):"string:"+t},c1=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else S(t===Rf||t.isEmpty(),"priority of unexpected type.");S(t===Rf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $_;class ke{static set __childrenNodeConstructor(e){$_=e}static get __childrenNodeConstructor(){return $_}constructor(e,n=ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),c1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+l1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jE(this.value_):e+=this.value_,this.lazyHash_=FE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ke.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ke.VALUE_TYPE_ORDER.indexOf(n),s=ke.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u1,d1;function AO(t){u1=t}function OO(t){d1=t}class xO extends Xc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ei(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Ln,new ke("[PRIORITY-POST]",d1))}makePost(e,n){const r=u1(e);return new j(n,new ke("[PRIORITY-POST]",r))}toString(){return".priority"}}const X=new xO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO=Math.log(2);class DO{constructor(e){const n=s=>parseInt(Math.log(s)/LO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const lc=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,f;if(d===0)return null;if(d===1)return u=t[l],f=n?n(u):u,new Ne(f,u.node,Ne.BLACK,null,null);{const g=parseInt(d/2,10)+l,_=i(l,g),v=i(g+1,c);return u=t[g],f=n?n(u):u,new Ne(f,u.node,Ne.BLACK,_,v)}},s=function(l){let c=null,d=null,u=t.length;const f=function(_,v){const w=u-_,p=u;u-=_;const h=i(w+1,p),m=t[w],y=n?n(m):m;g(new Ne(y,m.node,v,null,h))},g=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(_+1));v?f(w,Ne.BLACK):(f(w,Ne.BLACK),f(w,Ne.RED))}return d},o=new DO(t.length),a=s(o);return new et(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ud;const ki={};class Sn{static get Default(){return S(ki&&X,"ChildrenNode.ts has not been loaded"),ud=ud||new Sn({".priority":ki},{".priority":X}),ud}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,n){S(e!==cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=lc(r,e.getCompare()):a=ki;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Sn(d,c)}addToIndexes(e,n){const r=Zl(this.indexes_,(i,s)=>{const o=si(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===ki)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),lc(a,o.getCompare())}else return ki;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new Sn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Zl(this.indexes_,i=>{if(i===ki)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Sn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys;class x{static get EMPTY_NODE(){return Ys||(Ys=new x(new et($p),null,Sn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&c1(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ys}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ys:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ys:this.priorityNode_;return new x(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{S(F(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(X,(o,a)=>{n[o]=a.val(e),r++,s&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+l1(this.getPriority().val())+":"),this.forEachChild(X,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":FE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ka?-1:0}withIndex(e){if(e===cn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(X),i=n.getIterator(X);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cn?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MO extends x{constructor(){super(new et($p),x.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const ka=new MO;Object.defineProperties(j,{MIN:{value:new j(wr,x.EMPTY_NODE)},MAX:{value:new j(Ln,ka)}});a1.__EMPTY_NODE=x.EMPTY_NODE;ke.__childrenNodeConstructor=x;bO(ka);OO(ka);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=!0;function ae(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ke(n,ae(e))}if(!(t instanceof Array)&&FO){const n=[];let r=!1;if(xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ae(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return x.EMPTY_NODE;const s=lc(n,NO,o=>o.name,$p);if(r){const o=lc(n,X.getCompare());return new x(s,ae(e),new Sn({".priority":o},{".priority":X}))}else return new x(s,ae(e),Sn.Default)}else{let n=x.EMPTY_NODE;return xe(t,(r,i)=>{if(_t(t,r)&&r.substring(0,1)!=="."){const s=ae(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ae(e))}}AO(ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp extends Xc{constructor(e){super(),this.indexPath_=e,S(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ei(e.name,n.name):s}makePost(e,n){const r=ae(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,ka);return new j(Ln,e)}toString(){return Zo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO extends Xc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ei(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=ae(e);return new j(n,r)}toString(){return".value"}}const Gp=new UO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t){return{type:"value",snapshotNode:t}}function hs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ea(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ta(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function zO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ea(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(hs(n,r)):o.trackChildChange(ta(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(X,(i,s)=>{n.hasChild(i)||r.trackChildChange(ea(i,s))}),n.isLeafNode()||n.forEachChild(X,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ta(i,s,o))}else r.trackChildChange(hs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.indexedFilter_=new Yp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=na.getStartPost_(e),this.endPost_=na.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const s=this;return n.forEachChild(X,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new na(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,g)=>u(g,f)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new j(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ta(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ea(n,u));const v=a.updateImmediateChild(n,x.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(hs(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ea(c.name,c.node)),s.trackChildChange(hs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=X}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===X}copy(){const e=new Zc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WO(t){return t.loadsAllData()?new Yp(t.getIndex()):t.hasLimit()?new jO(t):new na(t)}function VO(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function BO(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Nf(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function $O(t,e,n){let r;return t.index_===cn||n?r=Nf(t,e,n):r=Nf(t,e,Ln),r.startAfterSet_=!0,r}function bf(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function HO(t,e,n){let r;return t.index_===cn||n?r=bf(t,e,n):r=bf(t,e,wr),r.endBeforeSet_=!0,r}function eu(t,e){const n=t.copy();return n.index_=e,n}function H_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===X?n="$priority":t.index_===Gp?n="$value":t.index_===cn?n="$key":(S(t.index_ instanceof Hp,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ee(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ee(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ee(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function G_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==X&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends r1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ta("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=cc.getListenId_(e,r),a={};this.listens_[o]=a;const l=H_(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),si(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=cc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=H_(e._queryParams),r=e._path.toString(),i=new Xe;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Go(a.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(){return{value:null,children:new Map}}function Ns(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,uc());const i=t.children.get(r);e=q(e),Ns(i,e,n)}}function Af(t,e){if(U(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(X,(r,i)=>{Ns(t,new G(r),i)}),Af(t,e)}}else if(t.children.size>0){const n=F(e);return e=q(e),t.children.has(n)&&Af(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Of(t,e,n){t.value!==null?n(e,t.value):YO(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Of(i,s,n)})}function YO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=10*1e3,qO=30*1e3,QO=5*60*1e3;class JO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new KO(e);const r=Y_+(qO-Y_)*Math.random();yo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;xe(e,(i,s)=>{s>0&&_t(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),yo(this.reportStats_.bind(this),Math.floor(Math.random()*2*QO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wt||(Wt={}));function Kp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Wt.ACK_USER_WRITE,this.source=Kp()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new dc(H(),n,this.revert)}}else return S(F(this.path)===e,"operationForChild called for unrelated child."),new dc(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.source=e,this.path=n,this.type=Wt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new ra(this.source,H()):new ra(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Wt.OVERWRITE}operationForChild(e){return U(this.path)?new li(this.source,H(),this.snap.getImmediateChild(e)):new li(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Wt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new li(this.source,H(),n.value):new ps(this.source,H(),n)}else return S(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZO(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(zO(o.childName,o.snapshotNode))}),Ks(t,i,"child_removed",e,r,n),Ks(t,i,"child_added",e,r,n),Ks(t,i,"child_moved",s,r,n),Ks(t,i,"child_changed",e,r,n),Ks(t,i,"value",e,r,n),i}function Ks(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>tx(t,a,l)),o.forEach(a=>{const l=ex(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ex(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tx(t,e,n){if(e.childName==null||n.childName==null)throw Cs("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e){return{eventCache:t,serverCache:e}}function wo(t,e,n,r){return tu(new Ir(e,n,r),t.serverCache)}function h1(t,e,n,r){return tu(t.eventCache,new Ir(e,n,r))}function fc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;const nx=()=>(dd||(dd=new et(UA)),dd);class Q{static fromObject(e){let n=new Q(null);return xe(e,(r,i)=>{n=n.set(new G(r),i)}),n}constructor(e,n=nx()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:ie(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new Q(null)}}set(e,n){if(U(e))return new Q(n,this.children);{const r=F(e),s=(this.children.get(r)||new Q(null)).set(q(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new Q(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(q(e),ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),ie(n,i),r):new Q(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.writeTree_=e}static empty(){return new Ht(new Q(null))}}function Eo(t,e,n){if(U(e))return new Ht(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ge(i,e);return s=s.updateChild(o,n),new Ht(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new Ht(s)}}}function xf(t,e,n){let r=t;return xe(n,(i,s)=>{r=Eo(r,ie(e,i),s)}),r}function K_(t,e){if(U(e))return Ht.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new Ht(n)}}function Lf(t,e){return Ii(t,e)!=null}function Ii(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function q_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(X,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function fr(t,e){if(U(e))return t;{const n=Ii(t,e);return n!=null?new Ht(new Q(n)):new Ht(t.writeTree_.subtree(e))}}function Df(t){return t.writeTree_.isEmpty()}function ms(t,e){return p1(H(),t.writeTree_,e)}function p1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=p1(ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ie(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e){return v1(e,t)}function rx(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Eo(t.visibleWrites,e,n)),t.lastWriteId=r}function ix(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=xf(t.visibleWrites,e,n),t.lastWriteId=r}function sx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ox(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ax(a,r.path)?i=!1:kt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return lx(t),!0;if(r.snap)t.visibleWrites=K_(t.visibleWrites,r.path);else{const a=r.children;xe(a,l=>{t.visibleWrites=K_(t.visibleWrites,ie(r.path,l))})}return!0}else return!1}function ax(t,e){if(t.snap)return kt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&kt(ie(t.path,n),e))return!0;return!1}function lx(t){t.visibleWrites=m1(t.allWrites,cx,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cx(t){return t.visible}function m1(t,e,n){let r=Ht.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)kt(n,o)?(a=Ge(n,o),r=Eo(r,a,s.snap)):kt(o,n)&&(a=Ge(o,n),r=Eo(r,H(),s.snap.getChild(a)));else if(s.children){if(kt(n,o))a=Ge(n,o),r=xf(r,a,s.children);else if(kt(o,n))if(a=Ge(o,n),U(a))r=xf(r,H(),s.children);else{const l=si(s.children,F(a));if(l){const c=l.getChild(q(a));r=Eo(r,H(),c)}}}else throw Cs("WriteRecord should have .snap or .children")}}return r}function g1(t,e,n,r,i){if(!r&&!i){const s=Ii(t.visibleWrites,e);if(s!=null)return s;{const o=fr(t.visibleWrites,e);if(Df(o))return n;if(n==null&&!Lf(o,H()))return null;{const a=n||x.EMPTY_NODE;return ms(o,a)}}}else{const s=fr(t.visibleWrites,e);if(!i&&Df(s))return n;if(!i&&n==null&&!Lf(s,H()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(kt(c.path,e)||kt(e,c.path))},a=m1(t.allWrites,o,e),l=n||x.EMPTY_NODE;return ms(a,l)}}}function ux(t,e,n){let r=x.EMPTY_NODE;const i=Ii(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(X,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fr(t.visibleWrites,e);return n.forEachChild(X,(o,a)=>{const l=ms(fr(s,new G(o)),a);r=r.updateImmediateChild(o,l)}),q_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fr(t.visibleWrites,e);return q_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dx(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ie(e,n);if(Lf(t.visibleWrites,s))return null;{const o=fr(t.visibleWrites,s);return Df(o)?i.getChild(n):ms(o,i.getChild(n))}}function fx(t,e,n,r){const i=ie(e,n),s=Ii(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fr(t.visibleWrites,i);return ms(o,r.getNode().getImmediateChild(n))}else return null}function hx(t,e){return Ii(t.visibleWrites,e)}function px(t,e,n,r,i,s,o){let a;const l=fr(t.visibleWrites,e),c=Ii(l,H());if(c!=null)a=c;else if(n!=null)a=ms(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&d.length<i;)u(g,r)!==0&&d.push(g),g=f.getNext();return d}else return[]}function mx(){return{visibleWrites:Ht.empty(),allWrites:[],lastWriteId:-1}}function hc(t,e,n,r){return g1(t.writeTree,t.treePath,e,n,r)}function Jp(t,e){return ux(t.writeTree,t.treePath,e)}function Q_(t,e,n,r){return dx(t.writeTree,t.treePath,e,n,r)}function pc(t,e){return hx(t.writeTree,ie(t.treePath,e))}function gx(t,e,n,r,i,s){return px(t.writeTree,t.treePath,e,n,r,i,s)}function Xp(t,e,n){return fx(t.writeTree,t.treePath,e,n)}function _1(t,e){return v1(ie(t.treePath,e),t.writeTree)}function v1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ta(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ea(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,hs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ta(r,e.snapshotNode,i.oldSnap));else throw Cs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const y1=new vx;class Zp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ir(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ci(this.viewCache_),s=gx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){return{filter:t}}function wx(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ex(t,e,n,r,i){const s=new _x;let o,a;if(n.type===Wt.OVERWRITE){const c=n;c.source.fromUser?o=Mf(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=mc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Wt.MERGE){const c=n;c.source.fromUser?o=Sx(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ff(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Wt.ACK_USER_WRITE){const c=n;c.revert?o=kx(t,e,c.path,r,i,s):o=Cx(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Wt.LISTEN_COMPLETE)o=Tx(t,e,n.path,r,s);else throw Cs("Unknown operation type: "+n.type);const l=s.getChanges();return Ix(e,o,l),{viewCache:o,changes:l}}function Ix(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=fc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(f1(fc(e)))}}function w1(t,e,n,r,i,s){const o=e.eventCache;if(pc(r,n)!=null)return e;{let a,l;if(U(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ci(e),d=c instanceof x?c:x.EMPTY_NODE,u=Jp(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=hc(r,ci(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=F(n);if(c===".priority"){S(Er(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Q_(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=q(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Q_(r,n,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(d,f):u=o.getNode().getImmediateChild(c)}else u=Xp(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return wo(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function mc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),g,null)}else{const g=F(n);if(!l.isCompleteForPath(n)&&Er(n)>1)return e;const _=q(n),w=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?c=d.updatePriority(l.getNode(),w):c=d.updateChild(l.getNode(),g,w,_,y1,null)}const u=h1(e,c,l.isFullyInitialized()||U(n),d.filtersNodes()),f=new Zp(i,u,s);return w1(t,u,n,i,f,a)}function Mf(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Zp(i,e,s);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=wo(e,c,!0,t.filter.filtersNodes());else{const u=F(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=wo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=q(n),g=a.getNode().getImmediateChild(u);let _;if(U(f))_=r;else{const v=d.getCompleteChild(u);v!=null?Wp(f)===".priority"&&v.getChild(s1(f)).isEmpty()?_=v:_=v.updateChild(f,r):_=x.EMPTY_NODE}if(g.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),u,_,f,d,o);l=wo(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function J_(t,e){return t.eventCache.isCompleteForChild(e)}function Sx(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=ie(n,l);J_(e,F(d))&&(a=Mf(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=ie(n,l);J_(e,F(d))||(a=Mf(t,a,d,c,i,s,o))}),a}function X_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ff(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(n)?c=r:c=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),_=X_(t,g,f);l=mc(t,l,new G(u),_,i,s,o,a)}}),c.children.inorderTraversal((u,f)=>{const g=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!g){const _=e.serverCache.getNode().getImmediateChild(u),v=X_(t,_,f);l=mc(t,l,new G(u),v,i,s,o,a)}}),l}function Cx(t,e,n,r,i,s,o){if(pc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return mc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(U(n)){let c=new Q(null);return l.getNode().forEachChild(cn,(d,u)=>{c=c.set(new G(d),u)}),Ff(t,e,n,c,i,s,a,o)}else return e}else{let c=new Q(null);return r.foreach((d,u)=>{const f=ie(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Ff(t,e,n,c,i,s,a,o)}}function Tx(t,e,n,r,i){const s=e.serverCache,o=h1(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return w1(t,o,n,r,y1,i)}function kx(t,e,n,r,i,s){let o;if(pc(r,n)!=null)return e;{const a=new Zp(r,e,i),l=e.eventCache.getNode();let c;if(U(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=hc(r,ci(e));else{const u=e.serverCache.getNode();S(u instanceof x,"serverChildren would be complete if leaf node"),d=Jp(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=F(n);let u=Xp(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,q(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,x.EMPTY_NODE,q(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hc(r,ci(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||pc(r,H())!=null,wo(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Yp(r.getIndex()),s=WO(r);this.processor_=yx(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(x.EMPTY_NODE,a.getNode(),null),d=new Ir(l,o.isFullyInitialized(),i.filtersNodes()),u=new Ir(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=tu(u,d),this.eventGenerator_=new XO(this.query_)}get query(){return this.query_}}function Rx(t){return t.viewCache_.serverCache.getNode()}function Nx(t){return fc(t.viewCache_)}function bx(t,e){const n=ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Z_(t){return t.eventRegistrations_.length===0}function Ax(t,e){t.eventRegistrations_.push(e)}function ev(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function tv(t,e,n,r){e.type===Wt.MERGE&&e.source.queryId!==null&&(S(ci(t.viewCache_),"We should always have a full cache before handling merges"),S(fc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Ex(t.processor_,i,e,n,r);return wx(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,E1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ox(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(X,(s,o)=>{r.push(hs(s,o))}),n.isFullyInitialized()&&r.push(f1(n.getNode())),E1(t,r,n.getNode(),e)}function E1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ZO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;class I1{constructor(){this.views=new Map}}function xx(t){S(!gc,"__referenceConstructor has already been defined"),gc=t}function Lx(){return S(gc,"Reference.ts has not been loaded"),gc}function Dx(t){return t.views.size===0}function em(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),tv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(tv(o,e,n,r));return s}}function S1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=hc(n,i?r:null),l=!1;a?l=!0:r instanceof x?(a=Jp(n,r),l=!1):(a=x.EMPTY_NODE,l=!1);const c=tu(new Ir(a,l,!1),new Ir(r,i,!1));return new Px(e,c)}return o}function Mx(t,e,n,r,i,s){const o=S1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ax(o,n),Ox(o,n)}function Fx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Sr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(ev(c,n,r)),Z_(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(ev(l,n,r)),Z_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Sr(t)&&s.push(new(Lx())(e._repo,e._path)),{removed:s,events:o}}function C1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hr(t,e){let n=null;for(const r of t.views.values())n=n||bx(r,e);return n}function T1(t,e){if(e._queryParams.loadsAllData())return ru(t);{const r=e._queryIdentifier;return t.views.get(r)}}function k1(t,e){return T1(t,e)!=null}function Sr(t){return ru(t)!=null}function ru(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c;function Ux(t){S(!_c,"__referenceConstructor has already been defined"),_c=t}function zx(){return S(_c,"Reference.ts has not been loaded"),_c}let jx=1;class nv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=mx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tm(t,e,n,r,i){return rx(t.pendingWriteTree_,e,n,r,i),i?bs(t,new li(Kp(),e,n)):[]}function Wx(t,e,n,r){ix(t.pendingWriteTree_,e,n,r);const i=Q.fromObject(n);return bs(t,new ps(Kp(),e,i))}function Xn(t,e,n=!1){const r=sx(t.pendingWriteTree_,e);if(ox(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(H(),!0):xe(r.children,o=>{s=s.set(new G(o),!0)}),bs(t,new dc(r.path,s,n))}else return[]}function Pa(t,e,n){return bs(t,new li(qp(),e,n))}function Vx(t,e,n){const r=Q.fromObject(n);return bs(t,new ps(qp(),e,r))}function Bx(t,e){return bs(t,new ra(qp(),e))}function $x(t,e,n){const r=nm(t,n);if(r){const i=rm(r),s=i.path,o=i.queryId,a=Ge(s,e),l=new ra(Qp(o),a);return im(t,s,l)}else return[]}function vc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||k1(o,e))){const l=Fx(o,e,n,r);Dx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(f,g)=>Sr(g));if(d&&!u){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=Yx(f);for(let _=0;_<g.length;++_){const v=g[_],w=v.query,p=b1(t,v);t.listenProvider_.startListening(Io(w),ia(t,w),p.hashFn,p.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Io(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(su(f));t.listenProvider_.stopListening(Io(f),g)}))}Kx(t,c)}return a}function P1(t,e,n,r){const i=nm(t,r);if(i!=null){const s=rm(i),o=s.path,a=s.queryId,l=Ge(o,e),c=new li(Qp(a),l,n);return im(t,o,c)}else return[]}function Hx(t,e,n,r){const i=nm(t,r);if(i){const s=rm(i),o=s.path,a=s.queryId,l=Ge(o,e),c=Q.fromObject(n),d=new ps(Qp(a),l,c);return im(t,o,d)}else return[]}function Uf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const _=Ge(f,i);s=s||hr(g,_),o=o||Sr(g)});let a=t.syncPointTree_.get(i);a?(o=o||Sr(a),s=s||hr(a,H())):(a=new I1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=hr(_,H());v&&(s=s.updateImmediateChild(g,v))}));const c=k1(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=su(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=qx();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const d=nu(t.pendingWriteTree_,i);let u=Mx(a,e,n,d,s,l);if(!c&&!o&&!r){const f=T1(a,e);u=u.concat(Qx(t,e,f))}return u}function iu(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ge(o,e),c=hr(a,l);if(c)return c});return g1(i,e,s,n,!0)}function Gx(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Ge(c,n);r=r||hr(d,u)});let i=t.syncPointTree_.get(n);i?r=r||hr(i,H()):(i=new I1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ir(r,!0,!1):null,a=nu(t.pendingWriteTree_,e._path),l=S1(i,e,a,s?o.getNode():x.EMPTY_NODE,s);return Nx(l)}function bs(t,e){return R1(e,t.syncPointTree_,null,nu(t.pendingWriteTree_,H()))}function R1(t,e,n,r){if(U(t.path))return N1(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=hr(i,H()));let s=[];const o=F(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=_1(r,o);s=s.concat(R1(a,l,c,d))}return i&&(s=s.concat(em(i,t,r,n))),s}}function N1(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=hr(i,H()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=_1(r,o),d=t.operationForChild(o);d&&(s=s.concat(N1(d,a,l,c)))}),i&&(s=s.concat(em(i,t,r,n))),s}function b1(t,e){const n=e.query,r=ia(t,n);return{hashFn:()=>(Rx(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?$x(t,n._path,r):Bx(t,n._path);{const s=WA(i,n);return vc(t,n,null,s)}}}}function ia(t,e){const n=su(e);return t.queryToTagMap.get(n)}function su(t){return t._path.toString()+"$"+t._queryIdentifier}function nm(t,e){return t.tagToQueryMap.get(e)}function rm(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function im(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=nu(t.pendingWriteTree_,e);return em(r,n,i,null)}function Yx(t){return t.fold((e,n,r)=>{if(n&&Sr(n))return[ru(n)];{let i=[];return n&&(i=C1(n)),xe(r,(s,o)=>{i=i.concat(o)}),i}})}function Io(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zx())(t._repo,t._path):t}function Kx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=su(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function qx(){return jx++}function Qx(t,e,n){const r=e._path,i=ia(t,e),s=b1(t,n),o=t.listenProvider_.startListening(Io(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)S(!Sr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!U(c)&&d&&Sr(d))return[ru(d).query];{let f=[];return d&&(f=f.concat(C1(d).map(g=>g.query))),xe(u,(g,_)=>{f=f.concat(_)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Io(d),ia(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sm(n)}node(){return this.node_}}class om{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new om(this.syncTree_,n)}node(){return iu(this.syncTree_,this.path_)}}const Jx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rv=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Xx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Zx(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Xx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},Zx=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},A1=function(t,e,n,r){return lm(e,new om(n,t),r)},am=function(t,e,n){return lm(t,new sm(e),n)};function lm(t,e,n){const r=t.getPriority().val(),i=rv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=rv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ke(a,ae(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ke(i))),o.forEachChild(X,(a,l)=>{const c=lm(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ou(t,e){let n=e instanceof G?e:new G(e),r=t,i=F(n);for(;i!==null;){const s=si(r.node.children,i)||{children:{},childCount:0};r=new cm(i,r,s),n=q(n),i=F(n)}return r}function Si(t){return t.node.value}function um(t,e){t.node.value=e,zf(t)}function O1(t){return t.node.childCount>0}function eL(t){return Si(t)===void 0&&!O1(t)}function au(t,e){xe(t.node.children,(n,r)=>{e(new cm(n,t,r))})}function x1(t,e,n,r){n&&!r&&e(t),au(t,i=>{x1(i,e,!0,r)}),n&&r&&e(t)}function tL(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ra(t){return new G(t.parent===null?t.name:Ra(t.parent)+"/"+t.name)}function zf(t){t.parent!==null&&nL(t.parent,t.name,t)}function nL(t,e,n){const r=eL(n),i=_t(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,zf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=/[\[\].#$\/\u0000-\u001F\u007F]/,iL=/[\[\].#$\u0000-\u001F\u007F]/,fd=10*1024*1024,lu=function(t){return typeof t=="string"&&t.length!==0&&!rL.test(t)},L1=function(t){return typeof t=="string"&&t.length!==0&&!iL.test(t)},sL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),L1(t)},sa=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Jc(t)||t&&typeof t=="object"&&_t(t,".sv")},hn=function(t,e,n,r){r&&e===void 0||Na(st(t,"value"),e,n)},Na=function(t,e,n){const r=n instanceof G?new EO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jr(r));if(typeof e=="function")throw new Error(t+"contains a function "+jr(r)+" with contents = "+e.toString());if(Jc(e))throw new Error(t+"contains "+e.toString()+" "+jr(r));if(typeof e=="string"&&e.length>fd/3&&jc(e)>fd)throw new Error(t+"contains a string greater than "+fd+" utf8 bytes "+jr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!lu(o)))throw new Error(t+" contains an invalid key ("+o+") "+jr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IO(r,o),Na(t,a,r),SO(r)}),i&&s)throw new Error(t+' contains ".value" child '+jr(r)+" in addition to actual children.")}},oL=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Zo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!lu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(wO);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&kt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},D1=function(t,e,n,r){const i=st(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];xe(e,(o,a)=>{const l=new G(o);if(Na(i,a,ie(n,l)),Wp(l)===".priority"&&!sa(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),oL(i,s)},dm=function(t,e,n){if(Jc(e))throw new Error(st(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!sa(e))throw new Error(st(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},ba=function(t,e,n,r){if(n!==void 0&&!lu(n))throw new Error(st(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},oa=function(t,e,n,r){if(!L1(n))throw new Error(st(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oa(t,e,n)},Pt=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},M1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sL(n))throw new Error(st(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Vp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function F1(t,e,n){cu(t,n),U1(t,r=>Vp(r,e))}function vt(t,e,n){cu(t,n),U1(t,r=>kt(r,e)||kt(e,r))}function U1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(cL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Jr&&be("event: "+n.toString()),Rs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="repo_interrupt",uL=25;class dL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=uc(),this.transactionQueueTree_=new cm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fL(t,e,n){if(t.stats_=zp(t.repoInfo_),t.forceRestClient_||HA())t.server_=new cc(t.repoInfo_,(r,i,s,o)=>{iv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pn(t.repoInfo_,e,(r,i,s,o)=>{iv(t,r,i,s,o)},r=>{sv(t,r)},r=>{hL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=QA(t.repoInfo_,()=>new JO(t.stats_,t.server_)),t.infoData_=new GO,t.infoSyncTree_=new nv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Pa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fm(t,"connected",!1),t.serverSyncTree_=new nv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);vt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function j1(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Aa(t){return Jx({timestamp:j1(t)})}function iv(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Zl(n,c=>ae(c));o=Hx(t.serverSyncTree_,s,l,i)}else{const l=ae(n);o=P1(t.serverSyncTree_,s,l,i)}else if(r){const l=Zl(n,c=>ae(c));o=Vx(t.serverSyncTree_,s,l)}else{const l=ae(n);o=Pa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=gs(t,s)),vt(t.eventQueue_,a,o)}function sv(t,e){fm(t,"connected",e),e===!1&&gL(t)}function hL(t,e){xe(e,(n,r)=>{fm(t,n,r)})}function fm(t,e,n){const r=new G("/.info/"+e),i=ae(n);t.infoData_.updateSnapshot(r,i);const s=Pa(t.infoSyncTree_,r,i);vt(t.eventQueue_,r,s)}function uu(t){return t.nextWriteId_++}function pL(t,e,n){const r=Gx(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ae(i).withIndex(e._queryParams.getIndex());Uf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Pa(t.serverSyncTree_,e._path,s);else{const a=ia(t.serverSyncTree_,e);o=P1(t.serverSyncTree_,e._path,s,a)}return vt(t.eventQueue_,e._path,o),vc(t.serverSyncTree_,e,n,null,!0),s},i=>(As(t,"get for query "+Ee(e)+" failed: "+i),Promise.reject(new Error(i))))}function hm(t,e,n,r,i){As(t,"set",{path:e.toString(),value:n,priority:r});const s=Aa(t),o=ae(n,r),a=iu(t.serverSyncTree_,e),l=am(o,a,s),c=uu(t),d=tm(t.serverSyncTree_,e,l,c,!0);cu(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const _=f==="ok";_||Be("set at "+e+" failed: "+f);const v=Xn(t.serverSyncTree_,c,!_);vt(t.eventQueue_,e,v),Cr(t,i,f,g)});const u=mm(t,e);gs(t,u),vt(t.eventQueue_,u,[])}function mL(t,e,n,r){As(t,"update",{path:e.toString(),value:n});let i=!0;const s=Aa(t),o={};if(xe(n,(a,l)=>{i=!1,o[a]=A1(ie(e,a),ae(l),t.serverSyncTree_,s)}),i)be("update() called with empty data.  Don't do anything."),Cr(t,r,"ok",void 0);else{const a=uu(t),l=Wx(t.serverSyncTree_,e,o,a);cu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||Be("update at "+e+" failed: "+c);const f=Xn(t.serverSyncTree_,a,!u),g=f.length>0?gs(t,e):e;vt(t.eventQueue_,g,f),Cr(t,r,c,d)}),xe(n,c=>{const d=mm(t,ie(e,c));gs(t,d)}),vt(t.eventQueue_,e,[])}}function gL(t){As(t,"onDisconnectEvents");const e=Aa(t),n=uc();Of(t.onDisconnect_,H(),(i,s)=>{const o=A1(i,s,t.serverSyncTree_,e);Ns(n,i,o)});let r=[];Of(n,H(),(i,s)=>{r=r.concat(Pa(t.serverSyncTree_,i,s));const o=mm(t,i);gs(t,o)}),t.onDisconnect_=uc(),vt(t.eventQueue_,H(),r)}function _L(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Af(t.onDisconnect_,e),Cr(t,n,r,i)})}function ov(t,e,n,r){const i=ae(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ns(t.onDisconnect_,e,i),Cr(t,r,s,o)})}function vL(t,e,n,r,i){const s=ae(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ns(t.onDisconnect_,e,s),Cr(t,i,o,a)})}function yL(t,e,n,r){if(Xl(n)){be("onDisconnect().update() called with empty data.  Don't do anything."),Cr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&xe(n,(o,a)=>{const l=ae(a);Ns(t.onDisconnect_,ie(e,o),l)}),Cr(t,r,i,s)})}function wL(t,e,n){let r;F(e._path)===".info"?r=Uf(t.infoSyncTree_,e,n):r=Uf(t.serverSyncTree_,e,n),F1(t.eventQueue_,e._path,r)}function jf(t,e,n){let r;F(e._path)===".info"?r=vc(t.infoSyncTree_,e,n):r=vc(t.serverSyncTree_,e,n),F1(t.eventQueue_,e._path,r)}function W1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(z1)}function EL(t){t.persistentConnection_&&t.persistentConnection_.resume(z1)}function As(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function Cr(t,e,n,r){e&&Rs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function IL(t,e,n,r,i,s){As(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:ME(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=pm(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Na("transaction failed: Data returned ",l,o.path),o.status=0;const c=ou(t.transactionQueueTree_,e),d=Si(c)||[];d.push(o),um(c,d);let u;typeof l=="object"&&l!==null&&_t(l,".priority")?(u=si(l,".priority"),S(sa(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(iu(t.serverSyncTree_,e)||x.EMPTY_NODE).getPriority().val();const f=Aa(t),g=ae(l,u),_=am(g,a,f);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=_,o.currentWriteId=uu(t);const v=tm(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);vt(t.eventQueue_,e,v),du(t,t.transactionQueueTree_)}}function pm(t,e,n){return iu(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function du(t,e=t.transactionQueueTree_){if(e||fu(t,e),Si(e)){const n=B1(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&SL(t,Ra(e),n)}else O1(e)&&au(e,n=>{du(t,n)})}function SL(t,e,n){const r=n.map(c=>c.currentWriteId),i=pm(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Ge(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{As(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Xn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();fu(t,ou(t.transactionQueueTree_,e)),du(t,t.transactionQueueTree_),vt(t.eventQueue_,e,d);for(let f=0;f<u.length;f++)Rs(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Be("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}gs(t,e)}},o)}function gs(t,e){const n=V1(t,e),r=Ra(n),i=B1(t,n);return CL(t,i,r),r}function CL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ge(n,l.path);let d=!1,u;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Xn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=uL)d=!0,u="maxretry",i=i.concat(Xn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=pm(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Na("transaction failed: Data returned ",g,l.path);let _=ae(g);typeof g=="object"&&g!=null&&_t(g,".priority")||(_=_.updatePriority(f.getPriority()));const w=l.currentWriteId,p=Aa(t),h=am(_,f,p);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=h,l.currentWriteId=uu(t),o.splice(o.indexOf(w),1),i=i.concat(tm(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Xn(t.serverSyncTree_,w,!0))}else d=!0,u="nodata",i=i.concat(Xn(t.serverSyncTree_,l.currentWriteId,!0))}vt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}fu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Rs(r[a]);du(t,t.transactionQueueTree_)}function V1(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Si(r)===void 0;)r=ou(r,n),e=q(e),n=F(e);return r}function B1(t,e){const n=[];return $1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $1(t,e,n){const r=Si(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);au(e,i=>{$1(t,i,n)})}function fu(t,e){const n=Si(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,um(e,n.length>0?n:void 0)}au(e,r=>{fu(t,r)})}function mm(t,e){const n=Ra(V1(t,e)),r=ou(t.transactionQueueTree_,e);return tL(r,i=>{hd(t,i)}),hd(t,r),x1(r,i=>{hd(t,i)}),n}function hd(t,e){const n=Si(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?um(e,void 0):n.length=s+1,vt(t.eventQueue_,Ra(e),i);for(let o=0;o<r.length;o++)Rs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wf=function(t,e){const n=PL(t),r=n.namespace;n.domain==="firebase.com"&&fn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||MA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new QE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},PL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=TL(t.substring(d,u)));const f=kL(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",RL=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=av.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=av.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class G1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NL=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Xe;return _L(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Pt("OnDisconnect.remove",this._path);const e=new Xe;return ov(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Pt("OnDisconnect.set",this._path),hn("OnDisconnect.set",e,this._path,!1);const n=new Xe;return ov(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Pt("OnDisconnect.setWithPriority",this._path),hn("OnDisconnect.setWithPriority",e,this._path,!1),dm("OnDisconnect.setWithPriority",n);const r=new Xe;return vL(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Pt("OnDisconnect.update",this._path),D1("OnDisconnect.update",e,this._path);const n=new Xe;return yL(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Wp(this._path)}get ref(){return new Lt(this._repo,this._path)}get _queryIdentifier(){const e=G_(this._queryParams),n=Fp(e);return n==="{}"?"default":n}get _queryObject(){return G_(this._queryParams)}isEqual(e){if(e=D(e),!(e instanceof ot))return!1;const n=this._repo===e._repo,r=Vp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+yO(this._path)}}function hu(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Lr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===cn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==wr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Ln)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===X){if(e!=null&&!sa(e)||n!=null&&!sa(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(t.getIndex()instanceof Hp||t.getIndex()===Gp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function pu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Lt extends ot{constructor(e,n){super(e,n,new Zc,!1)}get parent(){const e=s1(this._path);return e===null?null:new Lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let mu=class Vf{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=ui(this.ref,e);return new Vf(this._node.getChild(n),r,X)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Vf(i,ui(this.ref,r),X)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function Y1(t,e){return t=D(t),t._checkNotDeleted("ref"),e!==void 0?ui(t._root,e):t._root}function lv(t,e){t=D(t),t._checkNotDeleted("refFromURL");const n=Wf(e,t._repo.repoInfo_.nodeAdmin);M1("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&fn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),Y1(t,n.path.toString())}function ui(t,e){return t=D(t),F(t._path)===null?aL("child","path",e):oa("child","path",e),new Lt(t._repo,ie(t._path,e))}function bL(t,e){t=D(t),Pt("push",t._path),hn("push",e,t._path,!0);const n=j1(t._repo),r=RL(n),i=ui(t,r),s=ui(t,r);let o;return e!=null?o=_m(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function AL(t){return Pt("remove",t._path),_m(t,null)}function _m(t,e){t=D(t),Pt("set",t._path),hn("set",e,t._path,!1);const n=new Xe;return hm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function OL(t,e){t=D(t),Pt("setPriority",t._path),dm("setPriority",e);const n=new Xe;return hm(t._repo,ie(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function xL(t,e,n){if(Pt("setWithPriority",t._path),hn("setWithPriority",e,t._path,!1),dm("setWithPriority",n),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new Xe;return hm(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function LL(t,e){D1("update",e,t._path);const n=new Xe;return mL(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function DL(t){t=D(t);const e=new gm(()=>{}),n=new Oa(e);return pL(t._repo,t,n).then(r=>new mu(r,new Lt(t._repo,t._path),t._queryParams.getIndex()))}class Oa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new H1("value",this,new mu(e.snapshotNode,new Lt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new G1(this,e,n):null}matches(e){return e instanceof Oa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class gu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new G1(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=ui(new Lt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new H1(e.type,this,new mu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof gu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function xa(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{jf(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new gm(n,s||void 0),a=e==="value"?new Oa(o):new gu(e,o);return wL(t._repo,t,a),()=>jf(t._repo,t,a)}function Bf(t,e,n,r){return xa(t,"value",e,n,r)}function cv(t,e,n,r){return xa(t,"child_added",e,n,r)}function uv(t,e,n,r){return xa(t,"child_changed",e,n,r)}function dv(t,e,n,r){return xa(t,"child_moved",e,n,r)}function fv(t,e,n,r){return xa(t,"child_removed",e,n,r)}function hv(t,e,n){let r=null;const i=n?new gm(n):null;e==="value"?r=new Oa(i):e&&(r=new gu(e,i)),jf(t._repo,t,r)}class Kt{}class K1 extends Kt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){hn("endAt",this._value,e._path,!0);const n=bf(e._queryParams,this._value,this._key);if(pu(n),Lr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ot(e._repo,e._path,n,e._orderByCalled)}}function ML(t,e){return ba("endAt","key",e),new K1(t,e)}class FL extends Kt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){hn("endBefore",this._value,e._path,!1);const n=HO(e._queryParams,this._value,this._key);if(pu(n),Lr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ot(e._repo,e._path,n,e._orderByCalled)}}function UL(t,e){return ba("endBefore","key",e),new FL(t,e)}class q1 extends Kt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){hn("startAt",this._value,e._path,!0);const n=Nf(e._queryParams,this._value,this._key);if(pu(n),Lr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ot(e._repo,e._path,n,e._orderByCalled)}}function zL(t=null,e){return ba("startAt","key",e),new q1(t,e)}class jL extends Kt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){hn("startAfter",this._value,e._path,!1);const n=$O(e._queryParams,this._value,this._key);if(pu(n),Lr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ot(e._repo,e._path,n,e._orderByCalled)}}function WL(t,e){return ba("startAfter","key",e),new jL(t,e)}class VL extends Kt{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ot(e._repo,e._path,VO(e._queryParams,this._limit),e._orderByCalled)}}function BL(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new VL(t)}class $L extends Kt{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ot(e._repo,e._path,BO(e._queryParams,this._limit),e._orderByCalled)}}function HL(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new $L(t)}class GL extends Kt{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){hu(e,"orderByChild");const n=new G(this._path);if(U(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Hp(n),i=eu(e._queryParams,r);return Lr(i),new ot(e._repo,e._path,i,!0)}}function YL(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return oa("orderByChild","path",t),new GL(t)}class KL extends Kt{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){hu(e,"orderByKey");const n=eu(e._queryParams,cn);return Lr(n),new ot(e._repo,e._path,n,!0)}}function qL(){return new KL}class QL extends Kt{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){hu(e,"orderByPriority");const n=eu(e._queryParams,X);return Lr(n),new ot(e._repo,e._path,n,!0)}}function JL(){return new QL}class XL extends Kt{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){hu(e,"orderByValue");const n=eu(e._queryParams,Gp);return Lr(n),new ot(e._repo,e._path,n,!0)}}function ZL(){return new XL}class e2 extends Kt{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(hn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new K1(this._value,this._key)._apply(new q1(this._value,this._key)._apply(e))}}function t2(t,e){return ba("equalTo","key",e),new e2(t,e)}function Ft(t,...e){let n=D(t);for(const r of e)n=r._apply(n);return n}xx(Lt);Ux(Lt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2="FIREBASE_DATABASE_EMULATOR_HOST",$f={};let r2=!1;function i2(t,e,n,r){t.repoInfo_=new QE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Q1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||fn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wf(s,i),a=o.repoInfo,l,c;typeof process<"u"&&R_&&(c=R_[n2]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Wf(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Zi(Zi.OWNER):new YA(t.name,t.options,e);M1("Invalid Firebase Database URL",o),U(o.path)||fn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=o2(a,t,d,new GA(t.name,n));return new a2(u,t)}function s2(t,e){const n=$f[e];(!n||n[t.key]!==t)&&fn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),W1(t),delete n[t.key]}function o2(t,e,n,r){let i=$f[e.name];i||(i={},$f[e.name]=i);let s=i[t.toURLString()];return s&&fn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new dL(t,r2,n,r),i[t.toURLString()]=s,s}let a2=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lt(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(s2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fn("Cannot call "+e+" on a deleted database.")}};function J1(){fs.IS_TRANSPORT_INITIALIZED&&Be("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function l2(){J1(),Jn.forceDisallow()}function c2(){J1(),Ct.forceDisallow(),Jn.forceAllow()}function u2(t,e,n,r={}){t=D(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&fn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&fn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zi(Zi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Hk(r.mockUserToken,t.app.options.projectId);s=new Zi(o)}i2(i,e,n,s)}function d2(t){t=D(t),t._checkNotDeleted("goOffline"),W1(t._repo)}function f2(t){t=D(t),t._checkNotDeleted("goOnline"),EL(t._repo)}function h2(t,e){UE(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){LE(Or),yr(new Ot("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Q1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),$t(N_,b_,t),$t(N_,b_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2={".sv":"timestamp"};function g2(){return m2}function _2(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v2=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function y2(t,e,n){var r;if(t=D(t),Pt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new Xe,o=(l,c,d)=>{let u=null;l?s.reject(l):(u=new mu(d,new Lt(t._repo,t._path),X),s.resolve(new v2(c,u)))},a=Bf(t,()=>{});return IL(t._repo,t._path,e,o,a,i),s.promise}Pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};p2();const w2="@firebase/database-compat",E2="2.0.1";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=new ga("@firebase/database-compat"),X1=function(t){const e="FIREBASE WARNING: "+t;I2.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=function(t,e,n,r){if(n!==void 0&&typeof n!="boolean")throw new Error(st(t,e)+"must be a boolean.")},C2=function(t,e,n){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(st(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this._delegate=e}cancel(e){L("OnDisconnect.cancel",0,1,arguments.length),Re("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){L("OnDisconnect.remove",0,1,arguments.length),Re("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){L("OnDisconnect.set",1,2,arguments.length),Re("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){L("OnDisconnect.setWithPriority",2,3,arguments.length),Re("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(L("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,X1("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Re("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return L("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this._database=e,this._delegate=n}val(){return L("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return L("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return L("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return L("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return L("DataSnapshot.child",0,1,arguments.length),e=String(e),oa("DataSnapshot.child","path",e),new pr(this._database,this._delegate.child(e))}hasChild(e){return L("DataSnapshot.hasChild",1,1,arguments.length),oa("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return L("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return L("DataSnapshot.forEach",1,1,arguments.length),Re("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new pr(this._database,n)))}hasChildren(){return L("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return L("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return L("DataSnapshot.ref",0,0,arguments.length),new ct(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Le{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;L("Query.on",2,4,arguments.length),Re("Query.on","callback",n,!1);const o=Le.getCancelAndContextArgs_("Query.on",r,i),a=(c,d)=>{n.call(o.context,new pr(this.database,c),d)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Bf(this._delegate,a,l),n;case"child_added":return cv(this._delegate,a,l),n;case"child_removed":return fv(this._delegate,a,l),n;case"child_changed":return uv(this._delegate,a,l),n;case"child_moved":return dv(this._delegate,a,l),n;default:throw new Error(st("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(L("Query.off",0,3,arguments.length),C2("Query.off",e),Re("Query.off","callback",n,!0),e_("Query.off","context",r),n){const i=()=>{};i.userCallback=n,i.context=r,hv(this._delegate,e,i)}else hv(this._delegate,e)}get(){return DL(this._delegate).then(e=>new pr(this.database,e))}once(e,n,r,i){L("Query.once",1,4,arguments.length),Re("Query.once","callback",n,!0);const s=Le.getCancelAndContextArgs_("Query.once",r,i),o=new Xe,a=(c,d)=>{const u=new pr(this.database,c);n&&n.call(s.context,u,d),o.resolve(u)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":Bf(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":cv(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":fv(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":uv(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":dv(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(st("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return L("Query.limitToFirst",1,1,arguments.length),new Le(this.database,Ft(this._delegate,BL(e)))}limitToLast(e){return L("Query.limitToLast",1,1,arguments.length),new Le(this.database,Ft(this._delegate,HL(e)))}orderByChild(e){return L("Query.orderByChild",1,1,arguments.length),new Le(this.database,Ft(this._delegate,YL(e)))}orderByKey(){return L("Query.orderByKey",0,0,arguments.length),new Le(this.database,Ft(this._delegate,qL()))}orderByPriority(){return L("Query.orderByPriority",0,0,arguments.length),new Le(this.database,Ft(this._delegate,JL()))}orderByValue(){return L("Query.orderByValue",0,0,arguments.length),new Le(this.database,Ft(this._delegate,ZL()))}startAt(e=null,n){return L("Query.startAt",0,2,arguments.length),new Le(this.database,Ft(this._delegate,zL(e,n)))}startAfter(e=null,n){return L("Query.startAfter",0,2,arguments.length),new Le(this.database,Ft(this._delegate,WL(e,n)))}endAt(e=null,n){return L("Query.endAt",0,2,arguments.length),new Le(this.database,Ft(this._delegate,ML(e,n)))}endBefore(e=null,n){return L("Query.endBefore",0,2,arguments.length),new Le(this.database,Ft(this._delegate,UL(e,n)))}equalTo(e,n){return L("Query.equalTo",1,2,arguments.length),new Le(this.database,Ft(this._delegate,t2(e,n)))}toString(){return L("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return L("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(L("Query.isEqual",1,1,arguments.length),!(e instanceof Le)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Re(e,"cancel",i.cancel,!0),i.context=r,e_(e,"context",i.context);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(st(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new ct(this.database,new Lt(this._delegate._repo,this._delegate._path))}}class ct extends Le{constructor(e,n){super(e,new ot(n._repo,n._path,new Zc,!1)),this.database=e,this._delegate=n}getKey(){return L("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return L("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new ct(this.database,ui(this._delegate,e))}getParent(){L("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new ct(this.database,e):null}getRoot(){return L("Reference.root",0,0,arguments.length),new ct(this.database,this._delegate.root)}set(e,n){L("Reference.set",1,2,arguments.length),Re("Reference.set","onComplete",n,!0);const r=_m(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(L("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,X1("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Pt("Reference.update",this._delegate._path),Re("Reference.update","onComplete",n,!0);const r=LL(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){L("Reference.setWithPriority",2,3,arguments.length),Re("Reference.setWithPriority","onComplete",r,!0);const i=xL(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){L("Reference.remove",0,1,arguments.length),Re("Reference.remove","onComplete",e,!0);const n=AL(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){L("Reference.transaction",1,3,arguments.length),Re("Reference.transaction","transactionUpdate",e,!1),Re("Reference.transaction","onComplete",n,!0),S2("Reference.transaction","applyLocally",r);const i=y2(this._delegate,e,{applyLocally:r}).then(s=>new k2(s.committed,new pr(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){L("Reference.setPriority",1,2,arguments.length),Re("Reference.setPriority","onComplete",n,!0);const r=OL(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){L("Reference.push",0,2,arguments.length),Re("Reference.push","onComplete",n,!0);const r=bL(this._delegate,e),i=r.then(o=>new ct(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new ct(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return Pt("Reference.onDisconnect",this._delegate._path),new T2(new NL(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:l2,forceLongPolling:c2}}useEmulator(e,n,r={}){u2(this._delegate,e,n,r)}ref(e){if(L("database.ref",0,1,arguments.length),e instanceof ct){const n=lv(this._delegate,e.toString());return new ct(this,n)}else{const n=Y1(this._delegate,e);return new ct(this,n)}}refFromURL(e){L("database.refFromURL",1,1,arguments.length);const r=lv(this._delegate,e);return new ct(this,r)}goOffline(){return L("database.goOffline",0,0,arguments.length),d2(this._delegate)}goOnline(){return L("database.goOnline",0,0,arguments.length),f2(this._delegate)}}aa.ServerValue={TIMESTAMP:g2(),increment:t=>_2(t)};function P2({app:t,url:e,version:n,customAuthImpl:r,customAppCheckImpl:i,namespace:s,nodeAdmin:o=!1}){LE(n);const a=new fp("database-standalone"),l=new vf("auth-internal",a);l.setComponent(new Ot("auth-internal",()=>r,"PRIVATE"));let c;return i&&(c=new vf("app-check-internal",a),c.setComponent(new Ot("app-check-internal",()=>i,"PRIVATE"))),{instance:new aa(Q1(t,l,c,e,o),t),namespace:s}}var R2=Object.freeze({__proto__:null,initStandalone:P2});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=aa.ServerValue;function b2(t){t.INTERNAL.registerComponent(new Ot("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new aa(i,r)},"PUBLIC").setServiceProps({Reference:ct,Query:Le,Database:aa,DataSnapshot:pr,enableLogging:h2,INTERNAL:R2,ServerValue:N2}).setMultipleInstances(!0)),t.registerVersion(w2,E2)}b2(gn);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=2e3;async function O2(t,e,n){var r;const{BuildInfo:i}=di();Yt(e.sessionId,"AuthEvent did not contain a session ID");const s=await F2(e.sessionId),o={};return ya()?o.ibi=i.packageName:va()?o.apn=i.packageName:Ue(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Cf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function x2(t){const{BuildInfo:e}=di(),n={};ya()?n.iosBundleId=e.packageName:va()?n.androidPackageName=e.packageName:Ue(t,"operation-not-supported-in-this-environment"),await bE(t,n)}function L2(t){const{cordova:e}=di();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,DR()?"_blank":"_system","location=yes"),n(i)})})}async function D2(t,e,n){const{cordova:r}=di();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var u;s();const f=(u=r.plugins.browsertab)===null||u===void 0?void 0:u.close;typeof f=="function"&&f(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Se(t,"redirect-cancelled-by-user"))},A2))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),va()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function M2(t){var e,n,r,i,s,o,a,l,c,d;const u=di();E(typeof((e=u==null?void 0:u.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),E(typeof((n=u==null?void 0:u.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),E(typeof((s=(i=(r=u==null?void 0:u.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((l=(a=(o=u==null?void 0:u.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((d=(c=u==null?void 0:u.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function F2(t){const e=U2(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function U2(t){if(Yt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=20;class j2 extends RE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function W2(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:$2(),postBody:null,tenantId:t.tenantId,error:Se(t,"no-auth-event")}}function V2(t,e){return Hf()._set(Gf(t),e)}async function pv(t){const e=await Hf()._get(Gf(t));return e&&await Hf()._remove(Gf(t)),e}function B2(t,e){var n,r;const i=G2(e);if(i.includes("/__/auth/callback")){const s=wl(i),o=s.firebaseError?H2(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Se(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function $2(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<z2;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Hf(){return dt(Np)}function Gf(t){return qr("authEvent",t.config.apiKey,t.name)}function H2(t){try{return JSON.parse(t)}catch{return null}}function G2(t){const e=wl(t),n=e.link?decodeURIComponent(e.link):void 0,r=wl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return wl(i).link||i||r||n||t}function wl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return zi(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=500;class K2{constructor(){this._redirectPersistence=oi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Qc,this._overrideRedirectResult=Dp}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new j2(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ue(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){M2(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Mb(),await this._originValidation(e);const o=W2(e,r,i);await V2(e,o);const a=await O2(e,o,n),l=await L2(a);return D2(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x2(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=di(),o=setTimeout(async()=>{await pv(e),n.onEvent(mv())},Y2),a=async d=>{clearTimeout(o);const u=await pv(e);let f=null;u&&(d!=null&&d.url)&&(f=B2(u,d.url)),n.onEvent(f||mv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;di().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(u){console.error(u)}}}}const q2=K2;function mv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Se("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t,e){ue(t)._logFramework(e)}var J2="@firebase/auth-compat",X2="0.5.16";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=1e3;function So(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function eD(){return So()==="http:"||So()==="https:"}function Z1(t=Ce()){return!!((So()==="file:"||So()==="ionic:"||So()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function tD(){return zc()||Iw()}function nD(){return Tw()&&(document==null?void 0:document.documentMode)===11}function rD(t=Ce()){return/Edge\/\d+/.test(t)}function iD(t=Ce()){return nD()||rD(t)}function eI(){try{const t=self.localStorage,e=Ia();if(t)return t.setItem(e,"1"),t.removeItem(e),iD()?Jl():!0}catch{return vm()&&Jl()}return!1}function vm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function pd(){return(eD()||Cw()||Z1())&&!tD()&&eI()&&!vm()}function tI(){return Z1()&&typeof document<"u"}async function sD(){return tI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Z2);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function oD(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt={LOCAL:"local",NONE:"none",SESSION:"session"},qs=E,nI="persistence";function aD(t,e){if(qs(Object.values(lt).includes(e),t,"invalid-persistence-type"),zc()){qs(e!==lt.SESSION,t,"unsupported-persistence-type");return}if(Iw()){qs(e===lt.NONE,t,"unsupported-persistence-type");return}if(vm()){qs(e===lt.NONE||e===lt.LOCAL&&Jl(),t,"unsupported-persistence-type");return}qs(e===lt.NONE||eI(),t,"unsupported-persistence-type")}async function Yf(t){await t._initializationPromise;const e=rI(),n=qr(nI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function lD(t,e){const n=rI();if(!n)return[];const r=qr(nI,t,e);switch(n.getItem(r)){case lt.NONE:return[us];case lt.LOCAL:return[Xo,oi];case lt.SESSION:return[oi];default:return[]}}function rI(){var t;try{return((t=oD())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=E;class Zn{constructor(){this.browserResolver=dt(vA),this.cordovaResolver=dt(q2),this.underlyingResolver=null,this._redirectPersistence=oi,this._completeRedirectFn=Qc,this._overrideRedirectResult=Dp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return tI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return cD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await sD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){return t.unwrap()}function uD(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t){return sI(t)}function fD(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new hD(t,XN(t,e))}else if(r){const i=sI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function sI(t){const{_tokenResponse:e}=t instanceof it?t.customData:t;if(!e)return null;if(!(t instanceof it)&&"temporaryProof"in e&&"phoneNumber"in e)return ai.credentialFromResult(t);const n=e.providerId;if(!n||n===Bs.PASSWORD)return null;let r;switch(n){case Bs.GOOGLE:r=en;break;case Bs.FACEBOOK:r=Zt;break;case Bs.GITHUB:r=tn;break;case Bs.TWITTER:r=nn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ds._create(n,a):dn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Qi(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof it?r.credentialFromError(t):r.credentialFromResult(t)}function Qe(t,e){return e.catch(n=>{throw n instanceof it&&fD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:dD(n),additionalUserInfo:JN(n),user:Cn.getOrCreate(i)}})}async function Kf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Qe(t,n.confirm(r))}}class hD{constructor(e,n){this.resolver=n,this.auth=uD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Qe(iI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._delegate=e,this.multiFactor=tb(e)}static getOrCreate(e){return Cn.USER_MAP.has(e)||Cn.USER_MAP.set(e,new Cn(e)),Cn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Qe(this.auth,hE(this._delegate,e))}async linkWithPhoneNumber(e,n){return Kf(this.auth,Cb(this._delegate,e,n))}async linkWithPopup(e){return Qe(this.auth,Ob(this._delegate,e,Zn))}async linkWithRedirect(e){return await Yf(ue(this.auth)),Wb(this._delegate,e,Zn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Qe(this.auth,pE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Kf(this.auth,Tb(this._delegate,e,n))}reauthenticateWithPopup(e){return Qe(this.auth,Ab(this._delegate,e,Zn))}async reauthenticateWithRedirect(e){return await Yf(ue(this.auth)),zb(this._delegate,e,Zn)}sendEmailVerification(e){return jN(this._delegate,e)}async unlink(e){return await kN(this._delegate,e),this}updateEmail(e){return $N(this._delegate,e)}updatePassword(e){return HN(this._delegate,e)}updatePhoneNumber(e){return kb(this._delegate,e)}updateProfile(e){return BN(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return WN(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Cn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=E;let qf=class{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Qs(r,"invalid-api-key",{appName:e.name}),Qs(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Zn:void 0;this._delegate=n.initialize({options:{persistence:pD(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(gR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Cn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){rN(this._delegate,e,n)}applyActionCode(e){return AN(this._delegate,e)}checkActionCode(e){return mE(this._delegate,e)}confirmPasswordReset(e,n){return bN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Qe(this._delegate,xN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return zN(this._delegate,e)}isSignInWithEmailLink(e){return MN(this._delegate,e)}async getRedirectResult(){Qs(pd(),this._delegate,"operation-not-supported-in-this-environment");const e=await Bb(this._delegate,Zn);return e?Qe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Q2(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=gv(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=gv(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return DN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return NN(this._delegate,e,n||void 0)}async setPersistence(e){aD(this._delegate,e);let n;switch(e){case lt.SESSION:n=oi;break;case lt.LOCAL:n=await dt(Xo)._isAvailable()?Xo:Np;break;case lt.NONE:n=us;break;default:return Ue("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Qe(this._delegate,TN(this._delegate))}signInWithCredential(e){return Qe(this._delegate,Hc(this._delegate,e))}signInWithCustomToken(e){return Qe(this._delegate,RN(this._delegate,e))}signInWithEmailAndPassword(e,n){return Qe(this._delegate,LN(this._delegate,e,n))}signInWithEmailLink(e,n){return Qe(this._delegate,FN(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Kf(this._delegate,Sb(this._delegate,e,n))}async signInWithPopup(e){return Qs(pd(),this._delegate,"operation-not-supported-in-this-environment"),Qe(this._delegate,xp(this._delegate,e,Zn))}async signInWithRedirect(e){return Qs(pd(),this._delegate,"operation-not-supported-in-this-environment"),await Yf(this._delegate),Fb(this._delegate,e,Zn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ON(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}};qf.Persistence=lt;function gv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Cn.getOrCreate(o)),error:e,complete:n}}function pD(t,e){const n=lD(t,e);if(typeof self<"u"&&!n.includes(Xo)&&n.push(Xo),typeof window<"u")for(const r of[Np,oi])n.includes(r)||n.push(r);return n.includes(us)||n.push(us),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{static credential(e,n){return ai.credential(e,n)}constructor(){this.providerId="phone",this._delegate=new ai(iI(gn.auth()))}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ym.PHONE_SIGN_IN_METHOD=ai.PHONE_SIGN_IN_METHOD;ym.PROVIDER_ID=ai.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=E;class gD{constructor(e,n,r=gn.app()){var i;mD((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Eb(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="auth-compat";function vD(t){t.INTERNAL.registerComponent(new Ot(_D,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new qf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ti.EMAIL_SIGNIN,PASSWORD_RESET:Ti.PASSWORD_RESET,RECOVER_EMAIL:Ti.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ti.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ti.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ti.VERIFY_EMAIL}},EmailAuthProvider:xr,FacebookAuthProvider:Zt,GithubAuthProvider:tn,GoogleAuthProvider:en,OAuthProvider:Qi,SAMLAuthProvider:nc,PhoneAuthProvider:ym,PhoneMultiFactorGenerator:AE,RecaptchaVerifier:gD,TwitterAuthProvider:nn,Auth:qf,AuthCredential:ks,Error:it}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(J2,X2)}vD(gn);const yD={apiKey:"AIzaSyCHsCuljZCMZVpSiEXyGMmiQLnzhF2kBTY",authDomain:"ally-web.firebaseapp.com",databaseURL:"https://ally-web-default-rtdb.firebaseio.com",projectId:"ally-web",storageBucket:"ally-web.firebasestorage.app",messagingSenderId:"82438629304",appId:"1:82438629304:web:af3ae23c1465fa5c41114d"};gn.initializeApp(yD);const un=gn.database(),Ve=gn.auth(),oI=new gn.auth.GoogleAuthProvider,aI=new gn.auth.FacebookAuthProvider;function lI(t,e,n,r,i,s,o,a){if(t.preventDefault(),e==="login")Ve.signInWithEmailAndPassword(n,r).then(async()=>{o(!0);const l={email:n,password:r};localStorage.setItem("user",JSON.stringify(l)),await a(Ve.currentUser.emailVerified)}).catch(l=>{l.code==="auth/invalid-email"?i("This email is invalid, try another one"):l.code==="auth/missing-password"?i("The invalid password"):l.code==="auth/invalid-credential"?i("The email or password is wrong, try again"):i(l.code)});else{if(s.trim().length<3){i("The username is too short");return}Ve.createUserWithEmailAndPassword(n,r).then(()=>{const l={email:n,password:r,username:s,prompts:{"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,"ALLY-CUSTOM":0,resetAt:new Date().getTime()+864e5},settings:{temperature:1,length:16384,language:"auto",rules:""}};un.ref(`users/${Ve.currentUser.uid}/`).set(l),o(!0),localStorage.setItem("user",JSON.stringify(l))}).catch(l=>{l.code==="auth/email-already-in-use"?i("This email is already in use, try another one"):l.code==="auth/invalid-email"?i("This email is invalid, try another one"):l.code==="auth/weak-password"?i("The password is too weak, it should be at least 6 characters long"):i(l.code)})}}function cI(t,e,n,r){xp(t,e).then(async i=>{const s=i.user,o={email:s.email,password:`google-${s.uid}`,username:s.displayName,prompts:{"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,"ALLY-CUSTOM":0,resetAt:new Date().getTime()+24*60*60*1e3},settings:{temperature:1,length:16384,language:"auto",rules:""}};(await un.ref(`users/${s.uid}/`).once("value")).exists()||un.ref(`users/${s.uid}/`).set(o),n(!0),r(s.emailVerified)}).catch(i=>{console.log(i)})}function uI(t,e,n,r){xp(t,e).then(async i=>{const s=i.user,o={email:s.email,password:`facebook-${s.uid}`,username:s.displayName,prompts:{"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,"ALLY-CUSTOM":0,resetAt:new Date().getTime()+24*60*60*1e3},settings:{temperature:1,length:16384,language:"auto",rules:""}};(await un.ref(`users/${s.uid}/`).once("value")).exists()||un.ref(`users/${s.uid}/`).set(o),n(!0),r(s.emailVerified)}).catch(i=>{console.log(i)})}const _v=()=>{};let wm={},dI={},fI=null,hI={mark:_v,measure:_v};try{typeof window<"u"&&(wm=window),typeof document<"u"&&(dI=document),typeof MutationObserver<"u"&&(fI=MutationObserver),typeof performance<"u"&&(hI=performance)}catch{}const{userAgent:vv=""}=wm.navigator||{},Tr=wm,ne=dI,yv=fI,il=hI;Tr.document;const jn=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",pI=~vv.indexOf("MSIE")||~vv.indexOf("Trident/");var se="classic",mI="duotone",pt="sharp",mt="sharp-duotone",wD=[se,mI,pt,mt],ED={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},wv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ID=["kit"],SD=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,CD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,TD={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},kD={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},PD={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},RD={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ND={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},bD={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},gI={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},AD=["solid","regular","light","thin","duotone","brands"],_I=[1,2,3,4,5,6,7,8,9,10],OD=_I.concat([11,12,13,14,15,16,17,18,19,20]),ro={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xD=[...Object.keys(RD),...AD,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ro.GROUP,ro.SWAP_OPACITY,ro.PRIMARY,ro.SECONDARY].concat(_I.map(t=>"".concat(t,"x"))).concat(OD.map(t=>"w-".concat(t))),LD={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},DD={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},MD={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ev={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Dn="___FONT_AWESOME___",Qf=16,vI="fa",yI="svg-inline--fa",fi="data-fa-i2svg",Jf="data-fa-pseudo-element",FD="data-fa-pseudo-element-pending",Em="data-prefix",Im="data-icon",Iv="fontawesome-i2svg",UD="async",zD=["HTML","HEAD","STYLE","SCRIPT"],wI=(()=>{try{return!0}catch{return!1}})(),EI=[se,pt,mt];function La(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[se]}})}const II={...gI};II[se]={...gI[se],...wv.kit,...wv["kit-duotone"]};const Xr=La(II),Xf={...bD};Xf[se]={...Xf[se],...Ev.kit,...Ev["kit-duotone"]};const la=La(Xf),Zf={...ND};Zf[se]={...Zf[se],...MD.kit};const Zr=La(Zf),eh={...PD};eh[se]={...eh[se],...DD.kit};const jD=La(eh),WD=SD,SI="fa-layers-text",VD=CD,BD={...ED};La(BD);const $D=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],md=ro,_s=new Set;Object.keys(la[se]).map(_s.add.bind(_s));Object.keys(la[pt]).map(_s.add.bind(_s));Object.keys(la[mt]).map(_s.add.bind(_s));const HD=[...ID,...xD],Co=Tr.FontAwesomeConfig||{};function GD(t){var e=ne.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function YD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ne&&typeof ne.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=YD(GD(n));i!=null&&(Co[r]=i)});const CI={styleDefault:"solid",familyDefault:"classic",cssPrefix:vI,replacementClass:yI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Co.familyPrefix&&(Co.cssPrefix=Co.familyPrefix);const vs={...CI,...Co};vs.autoReplaceSvg||(vs.observeMutations=!1);const A={};Object.keys(CI).forEach(t=>{Object.defineProperty(A,t,{enumerable:!0,set:function(e){vs[t]=e,To.forEach(n=>n(A))},get:function(){return vs[t]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){vs.cssPrefix=t,To.forEach(e=>e(A))},get:function(){return vs.cssPrefix}});Tr.FontAwesomeConfig=A;const To=[];function KD(t){return To.push(t),()=>{To.splice(To.indexOf(t),1)}}const Bn=Qf,sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qD(t){if(!t||!jn)return;const e=ne.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ne.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ne.head.insertBefore(e,r),t}const QD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ca(){let t=12,e="";for(;t-- >0;)e+=QD[Math.random()*62|0];return e}function Os(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Sm(t){return t.classList?Os(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function TI(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function JD(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(TI(t[n]),'" '),"").trim()}function _u(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Cm(t){return t.size!==sn.size||t.x!==sn.x||t.y!==sn.y||t.rotate!==sn.rotate||t.flipX||t.flipY}function XD(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function ZD(t){let{transform:e,width:n=Qf,height:r=Qf,startCentered:i=!1}=t,s="";return i&&pI?s+="translate(".concat(e.x/Bn-n/2,"em, ").concat(e.y/Bn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Bn,"em), calc(-50% + ").concat(e.y/Bn,"em)) "):s+="translate(".concat(e.x/Bn,"em, ").concat(e.y/Bn,"em) "),s+="scale(".concat(e.size/Bn*(e.flipX?-1:1),", ").concat(e.size/Bn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var eM=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function kI(){const t=vI,e=yI,n=A.cssPrefix,r=A.replacementClass;let i=eM;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Sv=!1;function gd(){A.autoAddCss&&!Sv&&(qD(kI()),Sv=!0)}var tM={mixout(){return{dom:{css:kI,insertCss:gd}}},hooks(){return{beforeDOMElementCreation(){gd()},beforeI2svg(){gd()}}}};const Mn=Tr||{};Mn[Dn]||(Mn[Dn]={});Mn[Dn].styles||(Mn[Dn].styles={});Mn[Dn].hooks||(Mn[Dn].hooks={});Mn[Dn].shims||(Mn[Dn].shims=[]);var on=Mn[Dn];const PI=[],RI=function(){ne.removeEventListener("DOMContentLoaded",RI),yc=1,PI.map(t=>t())};let yc=!1;jn&&(yc=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),yc||ne.addEventListener("DOMContentLoaded",RI));function nM(t){jn&&(yc?setTimeout(t,0):PI.push(t))}function Da(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?TI(t):"<".concat(e," ").concat(JD(n),">").concat(r.map(Da).join(""),"</").concat(e,">")}function Cv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _d=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,d;for(r===void 0?(l=1,d=e[s[0]]):(l=0,d=r);l<o;l++)c=s[l],d=a(d,e[c],c,e);return d};function rM(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function th(t){const e=rM(t);return e.length===1?e[0].toString(16):null}function iM(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Tv(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function nh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Tv(e);typeof on.hooks.addPack=="function"&&!r?on.hooks.addPack(t,Tv(e)):on.styles[t]={...on.styles[t]||{},...i},t==="fas"&&nh("fa",e)}const{styles:Wr,shims:sM}=on,oM={[se]:Object.values(Zr[se]),[pt]:Object.values(Zr[pt]),[mt]:Object.values(Zr[mt])};let Tm=null,NI={},bI={},AI={},OI={},xI={};const aM={[se]:Object.keys(Xr[se]),[pt]:Object.keys(Xr[pt]),[mt]:Object.keys(Xr[mt])};function lM(t){return~HD.indexOf(t)}function cM(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!lM(i)?i:null}const LI=()=>{const t=r=>_d(Wr,(i,s,o)=>(i[o]=_d(s,r,{}),i),{});NI=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),bI=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),xI=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in Wr||A.autoFetchSvg,n=_d(sM,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});AI=n.names,OI=n.unicodes,Tm=vu(A.styleDefault,{family:A.familyDefault})};KD(t=>{Tm=vu(t.styleDefault,{family:A.familyDefault})});LI();function km(t,e){return(NI[t]||{})[e]}function uM(t,e){return(bI[t]||{})[e]}function er(t,e){return(xI[t]||{})[e]}function DI(t){return AI[t]||{prefix:null,iconName:null}}function dM(t){const e=OI[t],n=km("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function kr(){return Tm}const Pm=()=>({prefix:null,iconName:null,rest:[]});function vu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=se}=e,r=Xr[n][t],i=la[n][t]||la[n][r],s=t in on.styles?t:null;return i||s||null}const fM={[se]:Object.keys(Zr[se]),[pt]:Object.keys(Zr[pt]),[mt]:Object.keys(Zr[mt])};function yu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[se]:"".concat(A.cssPrefix,"-").concat(se),[pt]:"".concat(A.cssPrefix,"-").concat(pt),[mt]:"".concat(A.cssPrefix,"-").concat(mt)};let i=null,s=se;const o=wD.filter(l=>l!==mI);o.forEach(l=>{(t.includes(r[l])||t.some(c=>fM[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const d=cM(A.cssPrefix,c);if(Wr[c]?(c=oM[s].includes(c)?jD[s][c]:c,i=c,l.prefix=c):aM[s].indexOf(c)>-1?(i=c,l.prefix=vu(c,{family:s})):d?l.iconName=d:c!==A.replacementClass&&!o.some(u=>c===r[u])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const u=i==="fa"?DI(l.iconName):{},f=er(l.prefix,l.iconName);u.prefix&&(i=null),l.iconName=u.iconName||f||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!Wr.far&&Wr.fas&&!A.autoFetchSvg&&(l.prefix="fas")}return l},Pm());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===pt&&(Wr.fass||A.autoFetchSvg)&&(a.prefix="fass",a.iconName=er(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===mt&&(Wr.fasds||A.autoFetchSvg)&&(a.prefix="fasds",a.iconName=er(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=kr()||"fas"),a}class hM{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},nh(s,i[s]);const o=Zr[se][s];o&&nh(o,i[s]),LI()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let kv=[],ji={};const es={},pM=Object.keys(es);function mM(t,e){let{mixoutsTo:n}=e;return kv=t,ji={},Object.keys(es).forEach(r=>{pM.indexOf(r)===-1&&delete es[r]}),kv.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ji[o]||(ji[o]=[]),ji[o].push(s[o])})}r.provides&&r.provides(es)}),n}function rh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ji[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function hi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ji[t]||[]).forEach(s=>{s.apply(null,n)})}function Pr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return es[t]?es[t].apply(null,e):void 0}function ih(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||kr();if(e)return e=er(n,e)||e,Cv(MI.definitions,n,e)||Cv(on.styles,n,e)}const MI=new hM,gM=()=>{A.autoReplaceSvg=!1,A.observeMutations=!1,hi("noAuto")},_M={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jn?(hi("beforeI2svg",t),Pr("pseudoElements2svg",t),Pr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,nM(()=>{yM({autoReplaceSvgRoot:e}),hi("watch",t)})}},vM={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:er(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=vu(t[0]);return{prefix:n,iconName:er(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(WD))){const e=yu(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||kr(),iconName:er(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=kr();return{prefix:e,iconName:er(e,t)||t}}}},Et={noAuto:gM,config:A,dom:_M,parse:vM,library:MI,findIconDefinition:ih,toHtml:Da},yM=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ne}=t;(Object.keys(on.styles).length>0||A.autoFetchSvg)&&jn&&A.autoReplaceSvg&&Et.dom.i2svg({node:e})};function wu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Da(n))}}),Object.defineProperty(t,"node",{get:function(){if(!jn)return;const n=ne.createElement("div");return n.innerHTML=t.html,n.children}}),t}function wM(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Cm(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=_u({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function EM(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(A.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Rm(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:d,watchable:u=!1}=t,{width:f,height:g}=n.found?n:e,_=r==="fak",v=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(C=>d.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(d.classes).join(" ");let w={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:v,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(g)}};const p=_&&!~d.classes.indexOf("fa-fw")?{width:"".concat(f/g*16*.0625,"em")}:{};u&&(w.attributes[fi]=""),a&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||ca())},children:[a]}),delete w.attributes.title);const h={...w,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...p,...d.styles}},{children:m,attributes:y}=n.found&&e.found?Pr("generateAbstractMask",h)||{children:[],attributes:{}}:Pr("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=m,h.attributes=y,o?EM(h):wM(h)}function Pv(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[fi]="");const c={...o.styles};Cm(i)&&(c.transform=ZD({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=_u(c);d.length>0&&(l.style=d);const u=[];return u.push({tag:"span",attributes:l,children:[e]}),s&&u.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),u}function IM(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=_u(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:vd}=on;function sh(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(md.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(md.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(md.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const SM={found:!1,width:512,height:512};function CM(t,e){!wI&&!A.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function oh(t,e){let n=e;return e==="fa"&&A.styleDefault!==null&&(e=kr()),new Promise((r,i)=>{if(n==="fa"){const s=DI(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&vd[e]&&vd[e][t]){const s=vd[e][t];return r(sh(s))}CM(t,e),r({...SM,icon:A.showMissingIcons&&t?Pr("missingIconAbstract")||{}:{}})})}const Rv=()=>{},ah=A.measurePerformance&&il&&il.mark&&il.measure?il:{mark:Rv,measure:Rv},io='FA "6.6.0"',TM=t=>(ah.mark("".concat(io," ").concat(t," begins")),()=>FI(t)),FI=t=>{ah.mark("".concat(io," ").concat(t," ends")),ah.measure("".concat(io," ").concat(t),"".concat(io," ").concat(t," begins"),"".concat(io," ").concat(t," ends"))};var Nm={begin:TM,end:FI};const El=()=>{};function Nv(t){return typeof(t.getAttribute?t.getAttribute(fi):null)=="string"}function kM(t){const e=t.getAttribute?t.getAttribute(Em):null,n=t.getAttribute?t.getAttribute(Im):null;return e&&n}function PM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(A.replacementClass)}function RM(){return A.autoReplaceSvg===!0?Il.replace:Il[A.autoReplaceSvg]||Il.replace}function NM(t){return ne.createElementNS("http://www.w3.org/2000/svg",t)}function bM(t){return ne.createElement(t)}function UI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?NM:bM}=e;if(typeof t=="string")return ne.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(UI(s,{ceFn:n}))}),r}function AM(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Il={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(UI(n),e)}),e.getAttribute(fi)===null&&A.keepOriginalSource){let n=ne.createComment(AM(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Sm(e).indexOf(A.replacementClass))return Il.replace(t);const r=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===A.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Da(s)).join(`
`);e.setAttribute(fi,""),e.innerHTML=i}};function bv(t){t()}function zI(t,e){const n=typeof e=="function"?e:El;if(t.length===0)n();else{let r=bv;A.mutateApproach===UD&&(r=Tr.requestAnimationFrame||bv),r(()=>{const i=RM(),s=Nm.begin("mutate");t.map(i),s(),n()})}}let bm=!1;function jI(){bm=!0}function lh(){bm=!1}let wc=null;function Av(t){if(!yv||!A.observeMutations)return;const{treeCallback:e=El,nodeCallback:n=El,pseudoElementsCallback:r=El,observeMutationsRoot:i=ne}=t;wc=new yv(s=>{if(bm)return;const o=kr();Os(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Nv(a.addedNodes[0])&&(A.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&A.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Nv(a.target)&&~$D.indexOf(a.attributeName))if(a.attributeName==="class"&&kM(a.target)){const{prefix:l,iconName:c}=yu(Sm(a.target));a.target.setAttribute(Em,l||o),c&&a.target.setAttribute(Im,c)}else PM(a.target)&&n(a.target)})}),jn&&wc.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function OM(){wc&&wc.disconnect()}function xM(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function LM(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=yu(Sm(t));return i.prefix||(i.prefix=kr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=uM(i.prefix,t.innerText)||km(i.prefix,th(t.innerText))),!i.iconName&&A.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function DM(t){const e=Os(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return A.autoA11y&&(n?e["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||ca()):(e["aria-hidden"]="true",e.focusable="false")),e}function MM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ov(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=LM(t),s=DM(t),o=rh("parseNodeAttributes",{},t);let a=e.styleParser?xM(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:FM}=on;function WI(t){const e=A.autoReplaceSvg==="nest"?Ov(t,{styleParser:!1}):Ov(t);return~e.extra.classes.indexOf(SI)?Pr("generateLayersText",t,e):Pr("generateSvgReplacementMutation",t,e)}let pn=new Set;EI.map(t=>{pn.add("fa-".concat(t))});Object.keys(Xr[se]).map(pn.add.bind(pn));Object.keys(Xr[pt]).map(pn.add.bind(pn));Object.keys(Xr[mt]).map(pn.add.bind(pn));pn=[...pn];function xv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jn)return Promise.resolve();const n=ne.documentElement.classList,r=d=>n.add("".concat(Iv,"-").concat(d)),i=d=>n.remove("".concat(Iv,"-").concat(d)),s=A.autoFetchSvg?pn:EI.map(d=>"fa-".concat(d)).concat(Object.keys(FM));s.includes("fa")||s.push("fa");const o=[".".concat(SI,":not([").concat(fi,"])")].concat(s.map(d=>".".concat(d,":not([").concat(fi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Os(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=Nm.begin("onTree"),c=a.reduce((d,u)=>{try{const f=WI(u);f&&d.push(f)}catch(f){wI||f.name==="MissingIcon"&&console.error(f)}return d},[]);return new Promise((d,u)=>{Promise.all(c).then(f=>{zI(f,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),d()})}).catch(f=>{l(),u(f)})})}function UM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;WI(t).then(n=>{n&&zI([n],e)})}function zM(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:ih(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:ih(i||{})),t(r,{...n,mask:i})}}const jM=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=sn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:u,iconName:f,icon:g}=t;return wu({type:"icon",...t},()=>(hi("beforeDOMElementCreation",{iconDefinition:t,params:e}),A.autoA11y&&(o?c["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(a||ca()):(c["aria-hidden"]="true",c.focusable="false")),Rm({icons:{main:sh(g),mask:i?sh(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:f,transform:{...sn,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:d,classes:l}})))};var WM={mixout(){return{icon:zM(jM)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=xv,t.nodeCallback=UM,t}}},provides(t){t.i2svg=function(e){const{node:n=ne,callback:r=()=>{}}=e;return xv(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:d,extra:u}=n;return new Promise((f,g)=>{Promise.all([oh(r,o),c.iconName?oh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[v,w]=_;f([e,Rm({icons:{main:v,mask:w},prefix:o,iconName:r,transform:a,symbol:l,maskId:d,title:i,titleId:s,extra:u,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=_u(o);a.length>0&&(r.style=a);let l;return Cm(s)&&(l=Pr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},VM={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return wu({type:"layer"},()=>{hi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},BM={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return wu({type:"counter",content:t},()=>(hi("beforeDOMElementCreation",{content:t,params:e}),IM({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(A.cssPrefix,"-layers-counter"),...r]}})))}}}},$M={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=sn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return wu({type:"text",content:t},()=>(hi("beforeDOMElementCreation",{content:t,params:e}),Pv({content:t,transform:{...sn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(A.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(pI){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return A.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Pv({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const HM=new RegExp('"',"ug"),Lv=[1105920,1112319],Dv={FontAwesome:{normal:"fas",400:"fas"},...kD,...TD,...LD},ch=Object.keys(Dv).reduce((t,e)=>(t[e.toLowerCase()]=Dv[e],t),{}),GM=Object.keys(ch).reduce((t,e)=>{const n=ch[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function YM(t){const e=t.replace(HM,""),n=iM(e,0),r=n>=Lv[0]&&n<=Lv[1],i=e.length===2?e[0]===e[1]:!1;return{value:th(i?e[0]:e),isSecondary:r||i}}function KM(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(ch[n]||{})[i]||GM[n]}function Mv(t,e){const n="".concat(FD).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Os(t.children).filter(f=>f.getAttribute(Jf)===e)[0],a=Tr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(VD),d=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){const f=a.getPropertyValue("content");let g=KM(l,d);const{value:_,isSecondary:v}=YM(f),w=c[0].startsWith("FontAwesome");let p=km(g,_),h=p;if(w){const m=dM(_);m.iconName&&m.prefix&&(p=m.iconName,g=m.prefix)}if(p&&!v&&(!o||o.getAttribute(Em)!==g||o.getAttribute(Im)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);const m=MM(),{extra:y}=m;y.attributes[Jf]=e,oh(p,g).then(C=>{const b=Rm({...m,icons:{main:C,mask:Pm()},prefix:g,iconName:h,extra:y,watchable:!0}),R=ne.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=b.map(O=>Da(O)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function qM(t){return Promise.all([Mv(t,"::before"),Mv(t,"::after")])}function QM(t){return t.parentNode!==document.head&&!~zD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Jf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fv(t){if(jn)return new Promise((e,n)=>{const r=Os(t.querySelectorAll("*")).filter(QM).map(qM),i=Nm.begin("searchPseudoElements");jI(),Promise.all(r).then(()=>{i(),lh(),e()}).catch(()=>{i(),lh(),n()})})}var JM={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Fv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ne}=e;A.searchPseudoElements&&Fv(n)}}};let Uv=!1;var XM={mixout(){return{dom:{unwatch(){jI(),Uv=!0}}}},hooks(){return{bootstrap(){Av(rh("mutationObserverCallbacks",{}))},noAuto(){OM()},watch(t){const{observeMutationsRoot:e}=t;Uv?lh():Av(rh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const zv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var ZM={mixout(){return{parse:{transform:t=>zv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=zv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(l," ").concat(c)},u={transform:"translate(".concat(s/2*-1," -256)")},f={outer:o,inner:d,path:u};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const yd={x:0,y:0,width:"100%",height:"100%"};function jv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function e4(t){return t.tag==="g"?t.children:[t]}var t4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?yu(n.split(" ").map(i=>i.trim())):Pm();return r.prefix||(r.prefix=kr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:d,icon:u}=s,f=XD({transform:a,containerWidth:d,iconWidth:l}),g={tag:"rect",attributes:{...yd,fill:"white"}},_=c.children?{children:c.children.map(jv)}:{},v={tag:"g",attributes:{...f.inner},children:[jv({tag:c.tag,attributes:{...c.attributes,...f.path},..._})]},w={tag:"g",attributes:{...f.outer},children:[v]},p="mask-".concat(o||ca()),h="clip-".concat(o||ca()),m={tag:"mask",attributes:{...yd,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,w]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:e4(u)},m]};return n.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...yd}}),{children:n,attributes:r}}}},n4={provides(t){let e=!1;Tr.matchMedia&&(e=Tr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},r4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},i4=[tM,WM,VM,BM,$M,JM,XM,ZM,t4,n4,r4];mM(i4,{mixoutsTo:Et});Et.noAuto;Et.config;Et.library;Et.dom;const uh=Et.parse;Et.findIconDefinition;Et.toHtml;const s4=Et.icon;Et.layer;Et.text;Et.counter;var VI={exports:{}},o4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",a4=o4,l4=a4;function BI(){}function $I(){}$I.resetWarningCache=BI;var c4=function(){function t(r,i,s,o,a,l){if(l!==l4){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:$I,resetWarningCache:BI};return n.PropTypes=n,n};VI.exports=c4();var u4=VI.exports;const V=$v(u4);function Wv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wv(Object(n),!0).forEach(function(r){Wi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ec(t){"@babel/helpers - typeof";return Ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ec(t)}function Wi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function f4(t,e){if(t==null)return{};var n=d4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function dh(t){return h4(t)||p4(t)||m4(t)||g4()}function h4(t){if(Array.isArray(t))return fh(t)}function p4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function m4(t,e){if(t){if(typeof t=="string")return fh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fh(t,e)}}function fh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _4(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,d=t.spinReverse,u=t.pulse,f=t.fixedWidth,g=t.inverse,_=t.border,v=t.listItem,w=t.flip,p=t.size,h=t.rotation,m=t.pull,y=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":f,"fa-inverse":g,"fa-border":_,"fa-li":v,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Wi(e,"fa-".concat(p),typeof p<"u"&&p!==null),Wi(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Wi(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Wi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map(function(C){return y[C]?C:null}).filter(function(C){return C})}function v4(t){return t=t-0,t===t}function HI(t){return v4(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var y4=["style"];function w4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function E4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=HI(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[w4(i)]=s:e[i]=s,e},{})}function GI(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return GI(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.attrs.className=d,delete e.attributes.class;break;case"style":l.attrs.style=E4(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=d:l.attrs[HI(c)]=d}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=f4(n,y4);return i.attrs.style=Jt(Jt({},i.attrs.style),o),t.apply(void 0,[e.tag,Jt(Jt({},i.attrs),a)].concat(dh(r)))}var YI=!1;try{YI=!0}catch{}function I4(){if(!YI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Vv(t){if(t&&Ec(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(uh.icon)return uh.icon(t);if(t===null)return null;if(t&&Ec(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function wd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Wi({},t,e):{}}var Bv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},pi=mn.forwardRef(function(t,e){var n=Jt(Jt({},Bv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,d=Vv(r),u=wd("classes",[].concat(dh(_4(n)),dh((o||"").split(" ")))),f=wd("transform",typeof n.transform=="string"?uh.transform(n.transform):n.transform),g=wd("mask",Vv(i)),_=s4(d,Jt(Jt(Jt(Jt({},u),f),g),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!_)return I4("Could not find icon",d),null;var v=_.abstract,w={ref:e};return Object.keys(n).forEach(function(p){Bv.hasOwnProperty(p)||(w[p]=n[p])}),S4(v[0],w)});pi.displayName="FontAwesomeIcon";pi.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};var S4=GI.bind(null,mn.createElement);const KI={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},G4={prefix:"fab",iconName:"windows",icon:[448,512,[],"f17a","M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"]},Y4={prefix:"fab",iconName:"linux",icon:[448,512,[],"f17c","M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"]},qI={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};function C4({setCurrentView:t,setAuthorized:e,setEmailVerified:n}){const[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState("");return k.jsx("section",{className:"auth",children:k.jsxs("div",{className:"auth-container",children:[k.jsx("h1",{children:"Welcome back"}),k.jsxs("div",{onClick:()=>cI(Ve,oI,e,n),className:"google-btn",children:[k.jsx(pi,{icon:KI})," Continue with Google"]}),k.jsxs("div",{onClick:()=>uI(Ve,aI,e,n),className:"google-btn",children:[k.jsx(pi,{icon:qI})," Continue with Facebook"]}),k.jsx("div",{className:"divider",children:k.jsx("span",{children:"OR"})}),k.jsxs("form",{onSubmit:c=>lI(c,"login",r,s,l,"",e,n),children:[k.jsx("input",{type:"email",placeholder:"Enter email address",value:r,onChange:c=>i(c.target.value),required:!0}),k.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:c=>o(c.target.value),required:!0}),a&&k.jsx("div",{className:"error",children:a}),k.jsx("button",{type:"submit",className:"continue-btn",children:"Continue"})]}),k.jsxs("p",{className:"terms",children:["Don't have an account? ",k.jsx("span",{onClick:()=>t("register"),children:"Sign Up"})]})]})})}function T4({setCurrentView:t,setAuthorized:e,setEmailVerified:n}){const[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(""),[c,d]=T.useState("");return k.jsx("section",{className:"auth",children:k.jsxs("div",{className:"auth-container",children:[k.jsx("h1",{children:"Create your account"}),k.jsxs("div",{onClick:()=>cI(Ve,oI,e,n),className:"google-btn",children:[k.jsx(pi,{icon:KI})," Continue with Google"]}),k.jsxs("div",{onClick:()=>uI(Ve,aI,e,n),className:"google-btn",children:[k.jsx(pi,{icon:qI})," Continue with Facebook"]}),k.jsx("div",{className:"divider",children:k.jsx("span",{children:"OR"})}),k.jsxs("form",{onSubmit:u=>lI(u,"register",r,s,d,a,e),children:[k.jsx("input",{type:"text",placeholder:"Email...",value:r,onChange:u=>i(u.target.value)}),k.jsx("input",{type:"text",placeholder:"Username...",value:a,onChange:u=>l(u.target.value)}),k.jsx("input",{type:"password",placeholder:"Password...",value:s,onChange:u=>o(u.target.value)}),k.jsx("button",{type:"submit",className:"continue-btn",children:"Continue"}),c.length>0?k.jsx("span",{children:c}):null]}),k.jsxs("p",{className:"terms",children:["Don't have an account? ",k.jsx("span",{onClick:()=>t("login"),children:"Sign Up"})]})]})})}async function K4(t){const e=await un.ref(`users/${Ve.currentUser.uid}/prompts`).once("value");return e.exists()?e.val()[t]:0}function q4(t,e){un.ref(`users/${Ve.currentUser.uid}/prompts`).update({[t]:e+1})}async function k4(){const t=new Date,e=t.getTime()+24*60*60*1e3,n=await un.ref(`users/${Ve.currentUser.uid}/prompts/`).once("value");if(!n.exists()){un.ref(`users/${Ve.currentUser.uid}/prompts`).update({"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,"ALLY-CUSTOM":0,resetAt:e});return}t.getTime()>n.val().resetAt&&un.ref(`users/${Ve.currentUser.uid}/prompts`).update({"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,"ALLY-CUSTOM":0,resetAt:e})}function P4({setAuthorized:t,setEmailVerified:e}){const[n,r]=T.useState("login"),[i,s]=T.useState(!0);return T.useEffect(()=>{Ve.onAuthStateChanged(o=>{o?(t(!0),e(o.emailVerified),s(!1),k4()):s(!1)})},[]),i?k.jsx(gw,{}):k.jsx(k.Fragment,{children:n==="login"?k.jsx(C4,{setCurrentView:r,setAuthorized:t,setEmailVerified:e}):k.jsx(T4,{setCurrentView:r,setAuthorized:t,setEmailVerified:e})})}const R4={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]},Q4=R4,N4={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"]},b4=()=>{Ve.currentUser.sendEmailVerification()};function A4(){return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"blurred-bg"}),k.jsxs("div",{className:"verify_email",children:[k.jsx("div",{className:"top",children:k.jsx("div",{className:"icon",children:k.jsx(pi,{icon:N4})})}),k.jsxs("div",{className:"info",children:[k.jsx("h2",{children:"Please verify your email"}),k.jsxs("p",{children:["We have sent confirmation to ",k.jsx("strong",{children:Ve.currentUser.email}),". Check your email to verify"]})]}),k.jsx("div",{className:"buttons",children:k.jsx("button",{onClick:()=>b4(),children:"Send again"})})]})]})}const O4=async()=>{let t=[];try{const e=Object.assign({"/src/plugins/chatSuggestions.js":()=>ht(()=>import("./chatSuggestions-DB_I0ft3.js"),[]),"/src/plugins/fakeMessage.js":()=>ht(()=>import("./fakeMessage-BX_LglkU.js"),[]),"/src/plugins/premiumSidebar.js":()=>ht(()=>import("./premiumSidebar-D0wP4BxN.js"),[])});for(const n in e)if(e.hasOwnProperty(n))try{const i=(await e[n]()).default;if(!i||typeof i!="object")continue;const{name:s,version:o,description:a,runPathname:l,executePlugin:c}=i;if(c&&typeof c=="function")t.push(i);else{const d=`Plugin ${n} does not export a correct configuration.`,u={name:s,version:o,description:a,runPathname:l,executePlugin:c,error:d};t.push(u)}}catch{}}catch(e){console.error("Błąd podczas ładowania/wykonywania pluginów:",e)}return t},x4=t=>JSON.parse(localStorage.getItem("plugins")||"[]").includes(t),L4=()=>{const t=Ss();T.useEffect(()=>{(async()=>{try{const n=Object.assign({"/src/plugins/chatSuggestions.js":()=>ht(()=>import("./chatSuggestions-DB_I0ft3.js"),[]),"/src/plugins/fakeMessage.js":()=>ht(()=>import("./fakeMessage-BX_LglkU.js"),[]),"/src/plugins/premiumSidebar.js":()=>ht(()=>import("./premiumSidebar-D0wP4BxN.js"),[])});O4();for(const r in n)if(n.hasOwnProperty(r))try{const s=(await n[r]()).default;if(!s||typeof s!="object")continue;const{name:o,runPathname:a,executePlugin:l}=s;(!a||a===""||t.pathname.includes(a))&&l&&typeof l=="function"&&x4(o)&&l()}catch{}}catch(n){console.error("Błąd podczas ładowania/wykonywania pluginów:",n)}})()},[t.pathname])};function D4(){const t=Ss(),[e,n]=T.useState(!1),[r,i]=T.useState(!1);return!e&&t.pathname!=="/"?k.jsx(P4,{setAuthorized:n,setEmailVerified:i}):k.jsxs(k.Fragment,{children:[e&&!r?k.jsx(A4,{}):null,k.jsx(Mk,{})]})}function M4(){return k.jsxs(Ik,{children:[k.jsx(D4,{}),k.jsx(L4,{})]})}rw(document.getElementById("root")).render(k.jsx(T.StrictMode,{children:k.jsx(M4,{})}));export{pi as F,z4 as L,mn as R,K4 as _,Ss as a,U4 as b,Ve as c,un as d,F4 as e,q4 as f,$v as g,Q4 as h,O4 as i,k as j,G4 as k,Rk as l,Y4 as m,T as r,XT as u};
