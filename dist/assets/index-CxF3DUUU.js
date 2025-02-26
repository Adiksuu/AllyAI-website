function ZC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var My={exports:{}},Uc={},Fy={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),eS=Symbol.for("react.portal"),tS=Symbol.for("react.fragment"),nS=Symbol.for("react.strict_mode"),rS=Symbol.for("react.profiler"),iS=Symbol.for("react.provider"),sS=Symbol.for("react.context"),oS=Symbol.for("react.forward_ref"),aS=Symbol.for("react.suspense"),lS=Symbol.for("react.memo"),cS=Symbol.for("react.lazy"),rg=Symbol.iterator;function uS(t){return t===null||typeof t!="object"?null:(t=rg&&t[rg]||t["@@iterator"],typeof t=="function"?t:null)}var jy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uy=Object.assign,Wy={};function xs(t,e,n){this.props=t,this.context=e,this.refs=Wy,this.updater=n||jy}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zy(){}zy.prototype=xs.prototype;function Mf(t,e,n){this.props=t,this.context=e,this.refs=Wy,this.updater=n||jy}var Ff=Mf.prototype=new zy;Ff.constructor=Mf;Uy(Ff,xs.prototype);Ff.isPureReactComponent=!0;var ig=Array.isArray,$y=Object.prototype.hasOwnProperty,jf={current:null},Vy={key:!0,ref:!0,__self:!0,__source:!0};function By(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$y.call(e,r)&&!Vy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ca,type:t,key:s,ref:o,props:i,_owner:jf.current}}function dS(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function hS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sg=/\/+/g;function $u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hS(""+t.key):e.toString(36)}function El(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ca:case eS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$u(o,0):r,ig(i)?(n="",t!=null&&(n=t.replace(sg,"$&/")+"/"),El(i,e,n,"",function(c){return c})):i!=null&&(Uf(i)&&(i=dS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ig(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$u(s,a);o+=El(s,e,n,l,i)}else if(l=uS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$u(s,a++),o+=El(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function el(t,e,n){if(t==null)return t;var r=[],i=0;return El(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Je={current:null},Cl={transition:null},pS={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:jf};function Hy(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:el,forEach:function(t,e,n){el(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return el(t,function(){e++}),e},toArray:function(t){return el(t,function(e){return e})||[]},only:function(t){if(!Uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=xs;H.Fragment=tS;H.Profiler=rS;H.PureComponent=Mf;H.StrictMode=nS;H.Suspense=aS;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;H.act=Hy;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Uy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$y.call(e,l)&&!Vy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ca,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:sS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iS,_context:t},t.Consumer=t};H.createElement=By;H.createFactory=function(t){var e=By.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:oS,render:t}};H.isValidElement=Uf;H.lazy=function(t){return{$$typeof:cS,_payload:{_status:-1,_result:t},_init:fS}};H.memo=function(t,e){return{$$typeof:lS,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};H.unstable_act=Hy;H.useCallback=function(t,e){return Je.current.useCallback(t,e)};H.useContext=function(t){return Je.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Je.current.useDeferredValue(t)};H.useEffect=function(t,e){return Je.current.useEffect(t,e)};H.useId=function(){return Je.current.useId()};H.useImperativeHandle=function(t,e,n){return Je.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Je.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Je.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Je.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Je.current.useReducer(t,e,n)};H.useRef=function(t){return Je.current.useRef(t)};H.useState=function(t){return Je.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Je.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Je.current.useTransition()};H.version="18.3.1";Fy.exports=H;var w=Fy.exports;const Wf=Dy(w),mS=ZC({__proto__:null,default:Wf},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gS=w,vS=Symbol.for("react.element"),_S=Symbol.for("react.fragment"),yS=Object.prototype.hasOwnProperty,wS=gS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ES={key:!0,ref:!0,__self:!0,__source:!0};function Gy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yS.call(e,r)&&!ES.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vS,type:t,key:s,ref:o,props:i,_owner:wS.current}}Uc.Fragment=_S;Uc.jsx=Gy;Uc.jsxs=Gy;My.exports=Uc;var h=My.exports,Yy={exports:{}},Ct={},Ky={exports:{}},qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,M){var U=R.length;R.push(M);e:for(;0<U;){var _e=U-1>>>1,Ne=R[_e];if(0<i(Ne,M))R[_e]=M,R[U]=Ne,U=_e;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],U=R.pop();if(U!==M){R[0]=U;e:for(var _e=0,Ne=R.length,Xa=Ne>>>1;_e<Xa;){var Wr=2*(_e+1)-1,zu=R[Wr],zr=Wr+1,Za=R[zr];if(0>i(zu,U))zr<Ne&&0>i(Za,zu)?(R[_e]=Za,R[zr]=U,_e=zr):(R[_e]=zu,R[Wr]=U,_e=Wr);else if(zr<Ne&&0>i(Za,U))R[_e]=Za,R[zr]=U,_e=zr;else break e}}return M}function i(R,M){var U=R.sortIndex-M.sortIndex;return U!==0?U:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,m=!1,_=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=R)r(c),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(c)}}function C(R){if(y=!1,v(R),!_)if(n(l)!==null)_=!0,Uu(T);else{var M=n(c);M!==null&&Wu(C,M.startTime-R)}}function T(R,M){_=!1,y&&(y=!1,g(N),N=-1),m=!0;var U=f;try{for(v(M),d=n(l);d!==null&&(!(d.expirationTime>M)||R&&!Ut());){var _e=d.callback;if(typeof _e=="function"){d.callback=null,f=d.priorityLevel;var Ne=_e(d.expirationTime<=M);M=t.unstable_now(),typeof Ne=="function"?d.callback=Ne:d===n(l)&&r(l),v(M)}else r(l);d=n(l)}if(d!==null)var Xa=!0;else{var Wr=n(c);Wr!==null&&Wu(C,Wr.startTime-M),Xa=!1}return Xa}finally{d=null,f=U,m=!1}}var b=!1,S=null,N=-1,ne=5,$=-1;function Ut(){return!(t.unstable_now()-$<ne)}function zs(){if(S!==null){var R=t.unstable_now();$=R;var M=!0;try{M=S(!0,R)}finally{M?$s():(b=!1,S=null)}}else b=!1}var $s;if(typeof p=="function")$s=function(){p(zs)};else if(typeof MessageChannel<"u"){var ng=new MessageChannel,XC=ng.port2;ng.port1.onmessage=zs,$s=function(){XC.postMessage(null)}}else $s=function(){E(zs,0)};function Uu(R){S=R,b||(b=!0,$s())}function Wu(R,M){N=E(function(){R(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Uu(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var U=f;f=M;try{return R()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var U=f;f=R;try{return M()}finally{f=U}},t.unstable_scheduleCallback=function(R,M,U){var _e=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?_e+U:_e):U=_e,R){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=U+Ne,R={id:u++,callback:M,priorityLevel:R,startTime:U,expirationTime:Ne,sortIndex:-1},U>_e?(R.sortIndex=U,e(c,R),n(l)===null&&R===n(c)&&(y?(g(N),N=-1):y=!0,Wu(C,U-_e))):(R.sortIndex=Ne,e(l,R),_||m||(_=!0,Uu(T))),R},t.unstable_shouldYield=Ut,t.unstable_wrapCallback=function(R){var M=f;return function(){var U=f;f=M;try{return R.apply(this,arguments)}finally{f=U}}}})(qy);Ky.exports=qy;var CS=Ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SS=w,yt=CS;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qy=new Set,Mo={};function wi(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(Mo[t]=e,t=0;t<e.length;t++)Qy.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wd=Object.prototype.hasOwnProperty,IS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,og={},ag={};function TS(t){return Wd.call(ag,t)?!0:Wd.call(og,t)?!1:IS.test(t)?ag[t]=!0:(og[t]=!0,!1)}function kS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xS(t,e,n,r){if(e===null||typeof e>"u"||kS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var zf=/[\-:]([a-z])/g;function $f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zf,$f);ze[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zf,$f);ze[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zf,$f);ze[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vf(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xS(e,n,i,r)&&(n=null),r||i===null?TS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Li=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),Vd=Symbol.for("react.suspense_list"),Gf=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),Zy=Symbol.for("react.offscreen"),lg=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,Vu;function so(t){if(Vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+t}var Bu=!1;function Hu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function bS(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function Bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Di:return"Fragment";case Li:return"Portal";case zd:return"Profiler";case Bf:return"StrictMode";case $d:return"Suspense";case Vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xy:return(t.displayName||"Context")+".Consumer";case Jy:return(t._context.displayName||"Context")+".Provider";case Hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gf:return e=t.displayName||null,e!==null?e:Bd(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return Bd(t(e))}catch{}}return null}function NS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bd(e);case 8:return e===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PS(t){var e=e1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nl(t){t._valueTracker||(t._valueTracker=PS(t))}function t1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hd(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n1(t,e){e=e.checked,e!=null&&Vf(t,"checked",e,!1)}function Gd(t,e){n1(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yd(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ug(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yd(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(oo(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function r1(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,s1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RS=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(t){RS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mo[e]=mo[t]})});function o1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mo.hasOwnProperty(t)&&mo[t]?(""+e).trim():e+"px"}function a1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AS=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(t,e){if(e){if(AS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=null;function Yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zd=null,Qi=null,Ji=null;function fg(t){if(t=Ta(t)){if(typeof Zd!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Bc(e),Zd(t.stateNode,t.type,e))}}function l1(t){Qi?Ji?Ji.push(t):Ji=[t]:Qi=t}function c1(){if(Qi){var t=Qi,e=Ji;if(Ji=Qi=null,fg(t),e)for(t=0;t<e.length;t++)fg(e[t])}}function u1(t,e){return t(e)}function d1(){}var Gu=!1;function h1(t,e,n){if(Gu)return t(e,n);Gu=!0;try{return u1(t,e,n)}finally{Gu=!1,(Qi!==null||Ji!==null)&&(d1(),c1())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var eh=!1;if(Pn)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){eh=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{eh=!1}function OS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var go=!1,zl=null,$l=!1,th=null,LS={onError:function(t){go=!0,zl=t}};function DS(t,e,n,r,i,s,o,a,l){go=!1,zl=null,OS.apply(LS,arguments)}function MS(t,e,n,r,i,s,o,a,l){if(DS.apply(this,arguments),go){if(go){var c=zl;go=!1,zl=null}else throw Error(k(198));$l||($l=!0,th=c)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pg(t){if(Ei(t)!==t)throw Error(k(188))}function FS(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pg(i),t;if(s===r)return pg(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function p1(t){return t=FS(t),t!==null?m1(t):null}function m1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m1(t);if(e!==null)return e;t=t.sibling}return null}var g1=yt.unstable_scheduleCallback,mg=yt.unstable_cancelCallback,jS=yt.unstable_shouldYield,US=yt.unstable_requestPaint,ye=yt.unstable_now,WS=yt.unstable_getCurrentPriorityLevel,Kf=yt.unstable_ImmediatePriority,v1=yt.unstable_UserBlockingPriority,Vl=yt.unstable_NormalPriority,zS=yt.unstable_LowPriority,_1=yt.unstable_IdlePriority,Wc=null,dn=null;function $S(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Wc,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:HS,VS=Math.log,BS=Math.LN2;function HS(t){return t>>>=0,t===0?32:31-(VS(t)/BS|0)|0}var il=64,sl=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ao(a):(s&=o,s!==0&&(r=ao(s)))}else o=n&~i,o!==0?r=ao(o):s!==0&&(r=ao(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function GS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=GS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function y1(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function KS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function w1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E1,Qf,C1,S1,I1,rh=!1,ol=[],ir=null,sr=null,or=null,Uo=new Map,Wo=new Map,qn=[],qS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gg(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function Hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ta(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QS(t,e,n,r,i){switch(e){case"focusin":return ir=Hs(ir,t,e,n,r,i),!0;case"dragenter":return sr=Hs(sr,t,e,n,r,i),!0;case"mouseover":return or=Hs(or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Uo.set(s,Hs(Uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wo.set(s,Hs(Wo.get(s)||null,t,e,n,r,i)),!0}return!1}function T1(t){var e=Yr(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=f1(n),e!==null){t.blockedOn=e,I1(t.priority,function(){C1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xd=r,n.target.dispatchEvent(r),Xd=null}else return e=Ta(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function vg(t,e,n){Sl(t)&&n.delete(e)}function JS(){rh=!1,ir!==null&&Sl(ir)&&(ir=null),sr!==null&&Sl(sr)&&(sr=null),or!==null&&Sl(or)&&(or=null),Uo.forEach(vg),Wo.forEach(vg)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,JS)))}function zo(t){function e(i){return Gs(i,t)}if(0<ol.length){Gs(ol[0],t);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ir!==null&&Gs(ir,t),sr!==null&&Gs(sr,t),or!==null&&Gs(or,t),Uo.forEach(e),Wo.forEach(e),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)T1(n),n.blockedOn===null&&qn.shift()}var Xi=Un.ReactCurrentBatchConfig,Hl=!0;function XS(t,e,n,r){var i=J,s=Xi.transition;Xi.transition=null;try{J=1,Jf(t,e,n,r)}finally{J=i,Xi.transition=s}}function ZS(t,e,n,r){var i=J,s=Xi.transition;Xi.transition=null;try{J=4,Jf(t,e,n,r)}finally{J=i,Xi.transition=s}}function Jf(t,e,n,r){if(Hl){var i=ih(t,e,n,r);if(i===null)rd(t,e,r,Gl,n),gg(t,r);else if(QS(i,t,e,n,r))r.stopPropagation();else if(gg(t,r),e&4&&-1<qS.indexOf(t)){for(;i!==null;){var s=Ta(i);if(s!==null&&E1(s),s=ih(t,e,n,r),s===null&&rd(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rd(t,e,r,null,n)}}var Gl=null;function ih(t,e,n,r){if(Gl=null,t=Yf(r),t=Yr(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function k1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WS()){case Kf:return 1;case v1:return 4;case Vl:case zS:return 16;case _1:return 536870912;default:return 16}default:return 16}}var Jn=null,Xf=null,Il=null;function x1(){if(Il)return Il;var t,e=Xf,n=e.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function _g(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:_g,this.isPropagationStopped=_g,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zf=St(bs),Ia=he({},bs,{view:0,detail:0}),eI=St(Ia),Ku,qu,Ys,zc=he({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(Ku=t.screenX-Ys.screenX,qu=t.screenY-Ys.screenY):qu=Ku=0,Ys=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),yg=St(zc),tI=he({},zc,{dataTransfer:0}),nI=St(tI),rI=he({},Ia,{relatedTarget:0}),Qu=St(rI),iI=he({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),sI=St(iI),oI=he({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aI=St(oI),lI=he({},bs,{data:0}),wg=St(lI),cI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dI[t])?!!e[t]:!1}function ep(){return hI}var fI=he({},Ia,{key:function(t){if(t.key){var e=cI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pI=St(fI),mI=he({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eg=St(mI),gI=he({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),vI=St(gI),_I=he({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),yI=St(_I),wI=he({},zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EI=St(wI),CI=[9,13,27,32],tp=Pn&&"CompositionEvent"in window,vo=null;Pn&&"documentMode"in document&&(vo=document.documentMode);var SI=Pn&&"TextEvent"in window&&!vo,b1=Pn&&(!tp||vo&&8<vo&&11>=vo),Cg=" ",Sg=!1;function N1(t,e){switch(t){case"keyup":return CI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mi=!1;function II(t,e){switch(t){case"compositionend":return P1(e);case"keypress":return e.which!==32?null:(Sg=!0,Cg);case"textInput":return t=e.data,t===Cg&&Sg?null:t;default:return null}}function TI(t,e){if(Mi)return t==="compositionend"||!tp&&N1(t,e)?(t=x1(),Il=Xf=Jn=null,Mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b1&&e.locale!=="ko"?null:e.data;default:return null}}var kI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kI[t.type]:e==="textarea"}function R1(t,e,n,r){l1(r),e=Yl(e,"onChange"),0<e.length&&(n=new Zf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _o=null,$o=null;function xI(t){$1(t,0)}function $c(t){var e=Ui(t);if(t1(e))return t}function bI(t,e){if(t==="change")return e}var A1=!1;if(Pn){var Ju;if(Pn){var Xu="oninput"in document;if(!Xu){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),Xu=typeof Tg.oninput=="function"}Ju=Xu}else Ju=!1;A1=Ju&&(!document.documentMode||9<document.documentMode)}function kg(){_o&&(_o.detachEvent("onpropertychange",O1),$o=_o=null)}function O1(t){if(t.propertyName==="value"&&$c($o)){var e=[];R1(e,$o,t,Yf(t)),h1(xI,e)}}function NI(t,e,n){t==="focusin"?(kg(),_o=e,$o=n,_o.attachEvent("onpropertychange",O1)):t==="focusout"&&kg()}function PI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c($o)}function RI(t,e){if(t==="click")return $c(e)}function AI(t,e){if(t==="input"||t==="change")return $c(e)}function OI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:OI;function Vo(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wd.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function xg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bg(t,e){var n=xg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xg(n)}}function L1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?L1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D1(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LI(t){var e=D1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&L1(n.ownerDocument.documentElement,n)){if(r!==null&&np(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bg(n,s);var o=bg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DI=Pn&&"documentMode"in document&&11>=document.documentMode,Fi=null,sh=null,yo=null,oh=!1;function Ng(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||Fi==null||Fi!==Wl(r)||(r=Fi,"selectionStart"in r&&np(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Vo(yo,r)||(yo=r,r=Yl(sh,"onSelect"),0<r.length&&(e=new Zf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fi)))}function ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ji={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Zu={},M1={};Pn&&(M1=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Vc(t){if(Zu[t])return Zu[t];if(!ji[t])return t;var e=ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M1)return Zu[t]=e[n];return t}var F1=Vc("animationend"),j1=Vc("animationiteration"),U1=Vc("animationstart"),W1=Vc("transitionend"),z1=new Map,Pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){z1.set(t,e),wi(e,[t])}for(var ed=0;ed<Pg.length;ed++){var td=Pg[ed],MI=td.toLowerCase(),FI=td[0].toUpperCase()+td.slice(1);Ar(MI,"on"+FI)}Ar(F1,"onAnimationEnd");Ar(j1,"onAnimationIteration");Ar(U1,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(W1,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jI=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MS(r,e,void 0,t),t.currentTarget=null}function $1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rg(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rg(i,a,c),s=l}}}if($l)throw t=th,$l=!1,th=null,t}function re(t,e){var n=e[dh];n===void 0&&(n=e[dh]=new Set);var r=t+"__bubble";n.has(r)||(V1(e,t,2,!1),n.add(r))}function nd(t,e,n){var r=0;e&&(r|=4),V1(n,t,r,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[cl]){t[cl]=!0,Qy.forEach(function(n){n!=="selectionchange"&&(jI.has(n)||nd(n,!1,t),nd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,nd("selectionchange",!1,e))}}function V1(t,e,n,r){switch(k1(e)){case 1:var i=XS;break;case 4:i=ZS;break;default:i=Jf}n=i.bind(null,e,n,t),i=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}h1(function(){var c=s,u=Yf(n),d=[];e:{var f=z1.get(t);if(f!==void 0){var m=Zf,_=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":m=pI;break;case"focusin":_="focus",m=Qu;break;case"focusout":_="blur",m=Qu;break;case"beforeblur":case"afterblur":m=Qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=nI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vI;break;case F1:case j1:case U1:m=sI;break;case W1:m=yI;break;case"scroll":m=eI;break;case"wheel":m=EI;break;case"copy":case"cut":case"paste":m=aI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Eg}var y=(e&4)!==0,E=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,v;p!==null;){v=p;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=jo(p,g),C!=null&&y.push(Ho(p,C,v)))),E)break;p=p.return}0<y.length&&(f=new m(f,_,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Xd&&(_=n.relatedTarget||n.fromElement)&&(Yr(_)||_[Rn]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Yr(_):null,_!==null&&(E=Ei(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=yg,C="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Eg,C="onPointerLeave",g="onPointerEnter",p="pointer"),E=m==null?f:Ui(m),v=_==null?f:Ui(_),f=new y(C,p+"leave",m,n,u),f.target=E,f.relatedTarget=v,C=null,Yr(u)===c&&(y=new y(g,p+"enter",_,n,u),y.target=v,y.relatedTarget=E,C=y),E=C,m&&_)t:{for(y=m,g=_,p=0,v=y;v;v=Pi(v))p++;for(v=0,C=g;C;C=Pi(C))v++;for(;0<p-v;)y=Pi(y),p--;for(;0<v-p;)g=Pi(g),v--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=Pi(y),g=Pi(g)}y=null}else y=null;m!==null&&Ag(d,f,m,y,!1),_!==null&&E!==null&&Ag(d,E,_,y,!0)}}e:{if(f=c?Ui(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=bI;else if(Ig(f))if(A1)T=AI;else{T=PI;var b=NI}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=RI);if(T&&(T=T(t,c))){R1(d,T,n,u);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Yd(f,"number",f.value)}switch(b=c?Ui(c):window,t){case"focusin":(Ig(b)||b.contentEditable==="true")&&(Fi=b,sh=c,yo=null);break;case"focusout":yo=sh=Fi=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Ng(d,n,u);break;case"selectionchange":if(DI)break;case"keydown":case"keyup":Ng(d,n,u)}var S;if(tp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Mi?N1(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(b1&&n.locale!=="ko"&&(Mi||N!=="onCompositionStart"?N==="onCompositionEnd"&&Mi&&(S=x1()):(Jn=u,Xf="value"in Jn?Jn.value:Jn.textContent,Mi=!0)),b=Yl(c,N),0<b.length&&(N=new wg(N,t,null,n,u),d.push({event:N,listeners:b}),S?N.data=S:(S=P1(n),S!==null&&(N.data=S)))),(S=SI?II(t,n):TI(t,n))&&(c=Yl(c,"onBeforeInput"),0<c.length&&(u=new wg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=S))}$1(d,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=jo(t,n),s!=null&&r.unshift(Ho(t,s,i)),s=jo(t,e),s!=null&&r.push(Ho(t,s,i))),t=t.return}return r}function Pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ag(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=jo(n,s),l!=null&&o.unshift(Ho(n,l,a))):i||(l=jo(n,s),l!=null&&o.push(Ho(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UI=/\r\n?/g,WI=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(UI,`
`).replace(WI,"")}function ul(t,e,n){if(e=Og(e),Og(t)!==e&&n)throw Error(k(425))}function Kl(){}var ah=null,lh=null;function ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,zI=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,$I=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(VI)}:uh;function VI(t){setTimeout(function(){throw t})}function id(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zo(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),nn="__reactFiber$"+Ns,Go="__reactProps$"+Ns,Rn="__reactContainer$"+Ns,dh="__reactEvents$"+Ns,BI="__reactListeners$"+Ns,HI="__reactHandles$"+Ns;function Yr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dg(t);t!==null;){if(n=t[nn])return n;t=Dg(t)}return e}t=n,n=t.parentNode}return null}function Ta(t){return t=t[nn]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Bc(t){return t[Go]||null}var hh=[],Wi=-1;function Or(t){return{current:t}}function ie(t){0>Wi||(t.current=hh[Wi],hh[Wi]=null,Wi--)}function ee(t,e){Wi++,hh[Wi]=t.current,t.current=e}var wr={},Ye=Or(wr),st=Or(!1),si=wr;function cs(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ot(t){return t=t.childContextTypes,t!=null}function ql(){ie(st),ie(Ye)}function Mg(t,e,n){if(Ye.current!==wr)throw Error(k(168));ee(Ye,e),ee(st,n)}function B1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,NS(t)||"Unknown",i));return he({},n,r)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,si=Ye.current,ee(Ye,t),ee(st,st.current),!0}function Fg(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=B1(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,ie(st),ie(Ye),ee(Ye,t)):ie(st),ee(st,n)}var wn=null,Hc=!1,sd=!1;function H1(t){wn===null?wn=[t]:wn.push(t)}function GI(t){Hc=!0,H1(t)}function Lr(){if(!sd&&wn!==null){sd=!0;var t=0,e=J;try{var n=wn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,Hc=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),g1(Kf,Lr),i}finally{J=e,sd=!1}}return null}var zi=[],$i=0,Jl=null,Xl=0,Tt=[],kt=0,oi=null,En=1,Cn="";function $r(t,e){zi[$i++]=Xl,zi[$i++]=Jl,Jl=t,Xl=e}function G1(t,e,n){Tt[kt++]=En,Tt[kt++]=Cn,Tt[kt++]=oi,oi=t;var r=En;t=Cn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Gt(e)+i|n<<i|r,Cn=s+t}else En=1<<s|n<<i|r,Cn=t}function rp(t){t.return!==null&&($r(t,1),G1(t,1,0))}function ip(t){for(;t===Jl;)Jl=zi[--$i],zi[$i]=null,Xl=zi[--$i],zi[$i]=null;for(;t===oi;)oi=Tt[--kt],Tt[kt]=null,Cn=Tt[--kt],Tt[kt]=null,En=Tt[--kt],Tt[kt]=null}var gt=null,pt=null,oe=!1,Bt=null;function Y1(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,pt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:En,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,pt=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(oe){var e=pt;if(e){var n=e;if(!jg(t,e)){if(fh(t))throw Error(k(418));e=ar(n.nextSibling);var r=gt;e&&jg(t,e)?Y1(r,n):(t.flags=t.flags&-4097|2,oe=!1,gt=t)}}else{if(fh(t))throw Error(k(418));t.flags=t.flags&-4097|2,oe=!1,gt=t}}}function Ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function dl(t){if(t!==gt)return!1;if(!oe)return Ug(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ch(t.type,t.memoizedProps)),e&&(e=pt)){if(fh(t))throw K1(),Error(k(418));for(;e;)Y1(t,e),e=ar(e.nextSibling)}if(Ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pt=null}}else pt=gt?ar(t.stateNode.nextSibling):null;return!0}function K1(){for(var t=pt;t;)t=ar(t.nextSibling)}function us(){pt=gt=null,oe=!1}function sp(t){Bt===null?Bt=[t]:Bt.push(t)}var YI=Un.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function hl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wg(t){var e=t._init;return e(t._payload)}function q1(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=dr(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,C){return p===null||p.tag!==6?(p=hd(v,g.mode,C),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,C){var T=v.type;return T===Di?u(g,p,v.props.children,C,v.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gn&&Wg(T)===p.type)?(C=i(p,v.props),C.ref=Ks(g,p,v),C.return=g,C):(C=Al(v.type,v.key,v.props,null,g.mode,C),C.ref=Ks(g,p,v),C.return=g,C)}function c(g,p,v,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=fd(v,g.mode,C),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function u(g,p,v,C,T){return p===null||p.tag!==7?(p=Zr(v,g.mode,C,T),p.return=g,p):(p=i(p,v),p.return=g,p)}function d(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hd(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tl:return v=Al(p.type,p.key,p.props,null,g.mode,v),v.ref=Ks(g,null,p),v.return=g,v;case Li:return p=fd(p,g.mode,v),p.return=g,p;case Gn:var C=p._init;return d(g,C(p._payload),v)}if(oo(p)||Vs(p))return p=Zr(p,g.mode,v,null),p.return=g,p;hl(g,p)}return null}function f(g,p,v,C){var T=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(g,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case tl:return v.key===T?l(g,p,v,C):null;case Li:return v.key===T?c(g,p,v,C):null;case Gn:return T=v._init,f(g,p,T(v._payload),C)}if(oo(v)||Vs(v))return T!==null?null:u(g,p,v,C,null);hl(g,v)}return null}function m(g,p,v,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,a(p,g,""+C,T);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case tl:return g=g.get(C.key===null?v:C.key)||null,l(p,g,C,T);case Li:return g=g.get(C.key===null?v:C.key)||null,c(p,g,C,T);case Gn:var b=C._init;return m(g,p,v,b(C._payload),T)}if(oo(C)||Vs(C))return g=g.get(v)||null,u(p,g,C,T,null);hl(p,C)}return null}function _(g,p,v,C){for(var T=null,b=null,S=p,N=p=0,ne=null;S!==null&&N<v.length;N++){S.index>N?(ne=S,S=null):ne=S.sibling;var $=f(g,S,v[N],C);if($===null){S===null&&(S=ne);break}t&&S&&$.alternate===null&&e(g,S),p=s($,p,N),b===null?T=$:b.sibling=$,b=$,S=ne}if(N===v.length)return n(g,S),oe&&$r(g,N),T;if(S===null){for(;N<v.length;N++)S=d(g,v[N],C),S!==null&&(p=s(S,p,N),b===null?T=S:b.sibling=S,b=S);return oe&&$r(g,N),T}for(S=r(g,S);N<v.length;N++)ne=m(S,g,N,v[N],C),ne!==null&&(t&&ne.alternate!==null&&S.delete(ne.key===null?N:ne.key),p=s(ne,p,N),b===null?T=ne:b.sibling=ne,b=ne);return t&&S.forEach(function(Ut){return e(g,Ut)}),oe&&$r(g,N),T}function y(g,p,v,C){var T=Vs(v);if(typeof T!="function")throw Error(k(150));if(v=T.call(v),v==null)throw Error(k(151));for(var b=T=null,S=p,N=p=0,ne=null,$=v.next();S!==null&&!$.done;N++,$=v.next()){S.index>N?(ne=S,S=null):ne=S.sibling;var Ut=f(g,S,$.value,C);if(Ut===null){S===null&&(S=ne);break}t&&S&&Ut.alternate===null&&e(g,S),p=s(Ut,p,N),b===null?T=Ut:b.sibling=Ut,b=Ut,S=ne}if($.done)return n(g,S),oe&&$r(g,N),T;if(S===null){for(;!$.done;N++,$=v.next())$=d(g,$.value,C),$!==null&&(p=s($,p,N),b===null?T=$:b.sibling=$,b=$);return oe&&$r(g,N),T}for(S=r(g,S);!$.done;N++,$=v.next())$=m(S,g,N,$.value,C),$!==null&&(t&&$.alternate!==null&&S.delete($.key===null?N:$.key),p=s($,p,N),b===null?T=$:b.sibling=$,b=$);return t&&S.forEach(function(zs){return e(g,zs)}),oe&&$r(g,N),T}function E(g,p,v,C){if(typeof v=="object"&&v!==null&&v.type===Di&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case tl:e:{for(var T=v.key,b=p;b!==null;){if(b.key===T){if(T=v.type,T===Di){if(b.tag===7){n(g,b.sibling),p=i(b,v.props.children),p.return=g,g=p;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gn&&Wg(T)===b.type){n(g,b.sibling),p=i(b,v.props),p.ref=Ks(g,b,v),p.return=g,g=p;break e}n(g,b);break}else e(g,b);b=b.sibling}v.type===Di?(p=Zr(v.props.children,g.mode,C,v.key),p.return=g,g=p):(C=Al(v.type,v.key,v.props,null,g.mode,C),C.ref=Ks(g,p,v),C.return=g,g=C)}return o(g);case Li:e:{for(b=v.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=fd(v,g.mode,C),p.return=g,g=p}return o(g);case Gn:return b=v._init,E(g,p,b(v._payload),C)}if(oo(v))return _(g,p,v,C);if(Vs(v))return y(g,p,v,C);hl(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=hd(v,g.mode,C),p.return=g,g=p),o(g)):n(g,p)}return E}var ds=q1(!0),Q1=q1(!1),Zl=Or(null),ec=null,Vi=null,op=null;function ap(){op=Vi=ec=null}function lp(t){var e=Zl.current;ie(Zl),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zi(t,e){ec=t,op=Vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(op!==t)if(t={context:t,memoizedValue:e,next:null},Vi===null){if(ec===null)throw Error(k(308));Vi=t,ec.dependencies={lanes:0,firstContext:t}}else Vi=Vi.next=t;return e}var Kr=null;function cp(t){Kr===null?Kr=[t]:Kr.push(t)}function J1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qf(t,n)}}function zg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tc(t,e,n,r){var i=t.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(m,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(m,d,f):_,f==null)break e;d=he({},d,f);break e;case 2:Yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=d}}function $g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ka={},hn=Or(ka),Yo=Or(ka),Ko=Or(ka);function qr(t){if(t===ka)throw Error(k(174));return t}function dp(t,e){switch(ee(Ko,e),ee(Yo,t),ee(hn,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qd(e,t)}ie(hn),ee(hn,e)}function hs(){ie(hn),ie(Yo),ie(Ko)}function Z1(t){qr(Ko.current);var e=qr(hn.current),n=qd(e,t.type);e!==n&&(ee(Yo,t),ee(hn,n))}function hp(t){Yo.current===t&&(ie(hn),ie(Yo))}var ce=Or(0);function nc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var od=[];function fp(){for(var t=0;t<od.length;t++)od[t]._workInProgressVersionPrimary=null;od.length=0}var xl=Un.ReactCurrentDispatcher,ad=Un.ReactCurrentBatchConfig,ai=0,de=null,Ie=null,Re=null,rc=!1,wo=!1,qo=0,KI=0;function Ve(){throw Error(k(321))}function pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function mp(t,e,n,r,i,s){if(ai=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?XI:ZI,t=n(r,i),wo){s=0;do{if(wo=!1,qo=0,25<=s)throw Error(k(301));s+=1,Re=Ie=null,e.updateQueue=null,xl.current=eT,t=n(r,i)}while(wo)}if(xl.current=ic,e=Ie!==null&&Ie.next!==null,ai=0,Re=Ie=de=null,rc=!1,e)throw Error(k(300));return t}function gp(){var t=qo!==0;return qo=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?de.memoizedState=Re=t:Re=Re.next=t,Re}function Lt(){if(Ie===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Re===null?de.memoizedState:Re.next;if(e!==null)Re=e,Ie=t;else{if(t===null)throw Error(k(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Re===null?de.memoizedState=Re=t:Re=Re.next=t}return Re}function Qo(t,e){return typeof e=="function"?e(t):e}function ld(t){var e=Lt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ai&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,de.lanes|=u,li|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Qt(r,e.memoizedState)||(rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,de.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cd(t){var e=Lt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function e0(){}function t0(t,e){var n=de,r=Lt(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,vp(i0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Jo(9,r0.bind(null,n,r,i,e),void 0,null),De===null)throw Error(k(349));ai&30||n0(n,e,i)}return i}function n0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r0(t,e,n,r){e.value=n,e.getSnapshot=r,s0(e)&&o0(t)}function i0(t,e,n){return n(function(){s0(e)&&o0(t)})}function s0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function o0(t){var e=An(t,1);e!==null&&Yt(e,t,1,-1)}function Vg(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=JI.bind(null,de,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function a0(){return Lt().memoizedState}function bl(t,e,n,r){var i=en();de.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function Gc(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&pp(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}de.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function Bg(t,e){return bl(8390656,8,t,e)}function vp(t,e){return Gc(2048,8,t,e)}function l0(t,e){return Gc(4,2,t,e)}function c0(t,e){return Gc(4,4,t,e)}function u0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d0(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4,4,u0.bind(null,e,t),n)}function _p(){}function h0(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function f0(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function p0(t,e,n){return ai&21?(Qt(n,e)||(n=y1(),de.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rt=!0),t.memoizedState=n)}function qI(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=ad.transition;ad.transition={};try{t(!1),e()}finally{J=n,ad.transition=r}}function m0(){return Lt().memoizedState}function QI(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},g0(t))v0(e,n);else if(n=J1(t,e,n,r),n!==null){var i=Qe();Yt(n,t,r,i),_0(n,e,r)}}function JI(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(g0(t))v0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qt(a,o)){var l=e.interleaved;l===null?(i.next=i,cp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=J1(t,e,i,r),n!==null&&(i=Qe(),Yt(n,t,r,i),_0(n,e,r))}}function g0(t){var e=t.alternate;return t===de||e!==null&&e===de}function v0(t,e){wo=rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qf(t,n)}}var ic={readContext:Ot,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},XI={readContext:Ot,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bl(4194308,4,u0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return bl(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QI.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Vg,useDebugValue:_p,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Vg(!1),e=t[0];return t=qI.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,i=en();if(oe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),De===null)throw Error(k(349));ai&30||n0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bg(i0.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,r0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=De.identifierPrefix;if(oe){var n=Cn,r=En;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZI={readContext:Ot,useCallback:h0,useContext:Ot,useEffect:vp,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:f0,useReducer:ld,useRef:a0,useState:function(){return ld(Qo)},useDebugValue:_p,useDeferredValue:function(t){var e=Lt();return p0(e,Ie.memoizedState,t)},useTransition:function(){var t=ld(Qo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1},eT={readContext:Ot,useCallback:h0,useContext:Ot,useEffect:vp,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:f0,useReducer:cd,useRef:a0,useState:function(){return cd(Qo)},useDebugValue:_p,useDeferredValue:function(t){var e=Lt();return Ie===null?e.memoizedState=t:p0(e,Ie.memoizedState,t)},useTransition:function(){var t=cd(Qo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yc={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=ur(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Yt(e,t,i,r),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=ur(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Yt(e,t,i,r),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=ur(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=lr(t,i,r),e!==null&&(Yt(e,t,r,n),kl(e,t,r))}};function Hg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,r)||!Vo(i,s):!0}function y0(t,e,n){var r=!1,i=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=ot(e)?si:Ye.current,r=e.contextTypes,s=(r=r!=null)?cs(t,i):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},up(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=ot(e)?si:Ye.current,i.context=cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yc.enqueueReplaceState(i,i.state,null),tc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e){try{var n="",r=e;do n+=bS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ud(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tT=typeof WeakMap=="function"?WeakMap:Map;function w0(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){oc||(oc=!0,bh=r),_h(t,e)},n}function E0(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_h(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_h(t,e),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mT.bind(null,t,e,n),e.then(t,t))}function Kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var nT=Un.ReactCurrentOwner,rt=!1;function Ke(t,e,n,r){e.child=t===null?Q1(e,null,n,r):ds(e,t.child,n,r)}function Qg(t,e,n,r,i){n=n.render;var s=e.ref;return Zi(e,i),r=mp(t,e,n,r,s,i),n=gp(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(oe&&n&&rp(e),e.flags|=1,Ke(t,e,r,i),e.child)}function Jg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C0(t,e,s,r,i)):(t=Al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function C0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vo(s,r)&&t.ref===e.ref)if(rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rt=!0);else return e.lanes=t.lanes,On(t,e,i)}return yh(t,e,n,r,i)}function S0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Hi,dt),dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Hi,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Hi,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Hi,dt),dt|=r;return Ke(t,e,i,n),e.child}function I0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yh(t,e,n,r,i){var s=ot(n)?si:Ye.current;return s=cs(e,s),Zi(e,i),n=mp(t,e,n,r,s,i),r=gp(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(oe&&r&&rp(e),e.flags|=1,Ke(t,e,n,i),e.child)}function Xg(t,e,n,r,i){if(ot(n)){var s=!0;Ql(e)}else s=!1;if(Zi(e,i),e.stateNode===null)Nl(t,e),y0(e,n,r),vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=ot(n)?si:Ye.current,c=cs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Gg(e,o,r,c),Yn=!1;var f=e.memoizedState;o.state=f,tc(e,r,o,i),l=e.memoizedState,a!==r||f!==l||st.current||Yn?(typeof u=="function"&&(gh(e,n,u,r),l=e.memoizedState),(a=Yn||Hg(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:$t(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ot(l):(l=ot(n)?si:Ye.current,l=cs(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Gg(e,o,r,l),Yn=!1,f=e.memoizedState,o.state=f,tc(e,r,o,i);var _=e.memoizedState;a!==d||f!==_||st.current||Yn?(typeof m=="function"&&(gh(e,n,m,r),_=e.memoizedState),(c=Yn||Hg(e,n,c,r,f,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,s,i)}function wh(t,e,n,r,i,s){I0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fg(e,n,!1),On(t,e,s);r=e.stateNode,nT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&Fg(e,n,!0),e.child}function T0(t){var e=t.stateNode;e.pendingContext?Mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mg(t,e.context,!1),dp(t,e.containerInfo)}function Zg(t,e,n,r,i){return us(),sp(i),e.flags|=256,Ke(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function k0(t,e,n){var r=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(ce,i&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,r,0,null),t=Zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ch(n),e.memoizedState=Eh,t):yp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=dr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return s=t.child,t=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yp(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fl(t,e,n,r){return r!==null&&sp(r),ds(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ud(Error(k(422))),fl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qc({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=Ch(o),e.memoizedState=Eh,s);if(!(e.mode&1))return fl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=ud(s,r,void 0),fl(t,e,o,r)}if(a=(o&t.childLanes)!==0,rt||a){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Yt(r,t,i,-1))}return Tp(),r=ud(Error(k(421))),fl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pt=ar(i.nextSibling),gt=e,oe=!0,Bt=null,t!==null&&(Tt[kt++]=En,Tt[kt++]=Cn,Tt[kt++]=oi,En=t.id,Cn=t.overflow,oi=e),e=yp(e,r.children),e.flags|=4096,e)}function ev(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function dd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function x0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ev(t,n,e);else if(t.tag===19)ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dd(e,!0,n,null,s);break;case"together":dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iT(t,e,n){switch(e.tag){case 3:T0(e),us();break;case 5:Z1(e);break;case 1:ot(e.type)&&Ql(e);break;case 4:dp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Zl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(ce,ce.current&1),e.flags|=128,null):n&e.child.childLanes?k0(t,e,n):(ee(ce,ce.current&1),t=On(t,e,n),t!==null?t.sibling:null);ee(ce,ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return x0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ce,ce.current),r)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return On(t,e,n)}var b0,Sh,N0,P0;b0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sh=function(){};N0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qr(hn.current);var s=null;switch(n){case"input":i=Hd(t,i),r=Hd(t,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=Kd(t,i),r=Kd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kl)}Qd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};P0=function(t,e,n,r){n!==r&&(e.flags|=4)};function qs(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sT(t,e,n){var r=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return ot(e.type)&&ql(),Be(e),null;case 3:return r=e.stateNode,hs(),ie(st),ie(Ye),fp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(Rh(Bt),Bt=null))),Sh(t,e),Be(e),null;case 5:hp(e);var i=qr(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)N0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Be(e),null}if(t=qr(hn.current),dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[Go]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<lo.length;i++)re(lo[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":cg(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":dg(r,s),re("invalid",r)}Qd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ul(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ul(r.textContent,a,t),i=["children",""+a]):Mo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":nl(r),ug(r,s,!0);break;case"textarea":nl(r),hg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[Go]=r,b0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jd(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<lo.length;i++)re(lo[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":cg(t,r),i=Hd(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),re("invalid",t);break;case"textarea":dg(t,r),i=Kd(t,r),re("invalid",t);break;default:i=r}Qd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?a1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&s1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&re("scroll",t):l!=null&&Vf(t,s,l,o))}switch(n){case"input":nl(t),ug(t,r,!1);break;case"textarea":nl(t),hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)P0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=qr(Ko.current),qr(hn.current),dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return Be(e),null;case 13:if(ie(ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&pt!==null&&e.mode&1&&!(e.flags&128))K1(),us(),e.flags|=98560,s=!1;else if(s=dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[nn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else Bt!==null&&(Rh(Bt),Bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ce.current&1?ke===0&&(ke=3):Tp())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return hs(),Sh(t,e),t===null&&Bo(e.stateNode.containerInfo),Be(e),null;case 10:return lp(e.type._context),Be(e),null;case 17:return ot(e.type)&&ql(),Be(e),null;case 19:if(ie(ce),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qs(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nc(t),o!==null){for(e.flags|=128,qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>ps&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=nc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Be(e),null}else 2*ye()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=ce.current,ee(ce,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return Ip(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function oT(t,e){switch(ip(e),e.tag){case 1:return ot(e.type)&&ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),ie(st),ie(Ye),fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(ie(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ce),null;case 4:return hs(),null;case 10:return lp(e.type._context),null;case 22:case 23:return Ip(),null;case 24:return null;default:return null}}var pl=!1,He=!1,aT=typeof WeakSet=="function"?WeakSet:Set,P=null;function Bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function Ih(t,e,n){try{n()}catch(r){pe(t,e,r)}}var tv=!1;function lT(t,e){if(ah=Hl,t=D1(),np(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},Hl=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,E=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:$t(e.type,y),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(C){pe(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return _=tv,tv=!1,_}function Eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ih(e,n,s)}i=i.next}while(i!==r)}}function Kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R0(t){var e=t.alternate;e!==null&&(t.alternate=null,R0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[Go],delete e[dh],delete e[BI],delete e[HI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function A0(t){return t.tag===5||t.tag===3||t.tag===4}function nv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||A0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}function xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}var Ue=null,Vt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)O0(t,e,n),n=n.sibling}function O0(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Wc,n)}catch{}switch(n.tag){case 5:He||Bi(n,e);case 6:var r=Ue,i=Vt;Ue=null,Vn(t,e,n),Ue=r,Vt=i,Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?id(t.parentNode,n):t.nodeType===1&&id(t,n),zo(t)):id(Ue,n.stateNode));break;case 4:r=Ue,i=Vt,Ue=n.stateNode.containerInfo,Vt=!0,Vn(t,e,n),Ue=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ih(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!He&&(Bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,e,a)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Vn(t,e,n),He=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function rv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aT),e.forEach(function(r){var i=vT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Vt=!1;break e;case 3:Ue=a.stateNode.containerInfo,Vt=!0;break e;case 4:Ue=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(Ue===null)throw Error(k(160));O0(s,o,i),Ue=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L0(e,t),e=e.sibling}function L0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),Zt(t),r&4){try{Eo(3,t,t.return),Kc(3,t)}catch(y){pe(t,t.return,y)}try{Eo(5,t,t.return)}catch(y){pe(t,t.return,y)}}break;case 1:Wt(e,t),Zt(t),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(Wt(e,t),Zt(t),r&512&&n!==null&&Bi(n,n.return),t.flags&32){var i=t.stateNode;try{Fo(i,"")}catch(y){pe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&n1(i,s),Jd(a,o);var c=Jd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?a1(i,d):u==="dangerouslySetInnerHTML"?s1(i,d):u==="children"?Fo(i,d):Vf(i,u,d,c)}switch(a){case"input":Gd(i,s);break;case"textarea":r1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?qi(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?qi(i,!!s.multiple,s.defaultValue,!0):qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Go]=s}catch(y){pe(t,t.return,y)}}break;case 6:if(Wt(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){pe(t,t.return,y)}}break;case 3:if(Wt(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(y){pe(t,t.return,y)}break;case 4:Wt(e,t),Zt(t);break;case 13:Wt(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cp=ye())),r&4&&rv(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(He=(c=He)||u,Wt(e,t),He=c):Wt(e,t),Zt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(P=t,u=t.child;u!==null;){for(d=P=u;P!==null;){switch(f=P,m=f.child,f.tag){case 0:case 11:case 14:case 15:Eo(4,f,f.return);break;case 1:Bi(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){pe(r,n,y)}}break;case 5:Bi(f,f.return);break;case 22:if(f.memoizedState!==null){sv(d);continue}}m!==null?(m.return=f,P=m):sv(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=o1("display",o))}catch(y){pe(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){pe(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Wt(e,t),Zt(t),r&4&&rv(t);break;case 21:break;default:Wt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(A0(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fo(i,""),r.flags&=-33);var s=nv(t);xh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nv(t);kh(t,a,o);break;default:throw Error(k(161))}}catch(l){pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cT(t,e,n){P=t,D0(t)}function D0(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||He;a=pl;var c=He;if(pl=o,(He=l)&&!c)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?ov(i):l!==null?(l.return=o,P=l):ov(i);for(;s!==null;)P=s,D0(s),s=s.sibling;P=i,pl=a,He=c}iv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):iv(t)}}function iv(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:He||Kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$g(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$g(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}He||e.flags&512&&Th(e)}catch(f){pe(e,e.return,f)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function sv(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function ov(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kc(4,e)}catch(l){pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){pe(e,i,l)}}var s=e.return;try{Th(e)}catch(l){pe(e,s,l)}break;case 5:var o=e.return;try{Th(e)}catch(l){pe(e,o,l)}}}catch(l){pe(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var uT=Math.ceil,sc=Un.ReactCurrentDispatcher,wp=Un.ReactCurrentOwner,Rt=Un.ReactCurrentBatchConfig,G=0,De=null,Ce=null,We=0,dt=0,Hi=Or(0),ke=0,Xo=null,li=0,qc=0,Ep=0,Co=null,et=null,Cp=0,ps=1/0,yn=null,oc=!1,bh=null,cr=null,ml=!1,Xn=null,ac=0,So=0,Nh=null,Pl=-1,Rl=0;function Qe(){return G&6?ye():Pl!==-1?Pl:Pl=ye()}function ur(t){return t.mode&1?G&2&&We!==0?We&-We:YI.transition!==null?(Rl===0&&(Rl=y1()),Rl):(t=J,t!==0||(t=window.event,t=t===void 0?16:k1(t.type)),t):1}function Yt(t,e,n,r){if(50<So)throw So=0,Nh=null,Error(k(185));Sa(t,n,r),(!(G&2)||t!==De)&&(t===De&&(!(G&2)&&(qc|=n),ke===4&&Qn(t,We)),at(t,r),n===1&&G===0&&!(e.mode&1)&&(ps=ye()+500,Hc&&Lr()))}function at(t,e){var n=t.callbackNode;YS(t,e);var r=Bl(t,t===De?We:0);if(r===0)n!==null&&mg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mg(n),e===1)t.tag===0?GI(av.bind(null,t)):H1(av.bind(null,t)),$I(function(){!(G&6)&&Lr()}),n=null;else{switch(w1(r)){case 1:n=Kf;break;case 4:n=v1;break;case 16:n=Vl;break;case 536870912:n=_1;break;default:n=Vl}n=V0(n,M0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M0(t,e){if(Pl=-1,Rl=0,G&6)throw Error(k(327));var n=t.callbackNode;if(es()&&t.callbackNode!==n)return null;var r=Bl(t,t===De?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lc(t,r);else{e=r;var i=G;G|=2;var s=j0();(De!==t||We!==e)&&(yn=null,ps=ye()+500,Xr(t,e));do try{fT();break}catch(a){F0(t,a)}while(!0);ap(),sc.current=s,G=i,Ce!==null?e=0:(De=null,We=0,e=ke)}if(e!==0){if(e===2&&(i=nh(t),i!==0&&(r=i,e=Ph(t,i))),e===1)throw n=Xo,Xr(t,0),Qn(t,r),at(t,ye()),n;if(e===6)Qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!dT(i)&&(e=lc(t,r),e===2&&(s=nh(t),s!==0&&(r=s,e=Ph(t,s))),e===1))throw n=Xo,Xr(t,0),Qn(t,r),at(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Vr(t,et,yn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=Cp+500-ye(),10<e)){if(Bl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uh(Vr.bind(null,t,et,yn),e);break}Vr(t,et,yn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uT(r/1960))-r,10<r){t.timeoutHandle=uh(Vr.bind(null,t,et,yn),r);break}Vr(t,et,yn);break;case 5:Vr(t,et,yn);break;default:throw Error(k(329))}}}return at(t,ye()),t.callbackNode===n?M0.bind(null,t):null}function Ph(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=lc(t,e),t!==2&&(e=et,et=n,e!==null&&Rh(e)),t}function Rh(t){et===null?et=t:et.push.apply(et,t)}function dT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~Ep,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function av(t){if(G&6)throw Error(k(327));es();var e=Bl(t,0);if(!(e&1))return at(t,ye()),null;var n=lc(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=Ph(t,r))}if(n===1)throw n=Xo,Xr(t,0),Qn(t,e),at(t,ye()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,et,yn),at(t,ye()),null}function Sp(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(ps=ye()+500,Hc&&Lr())}}function ci(t){Xn!==null&&Xn.tag===0&&!(G&6)&&es();var e=G;G|=1;var n=Rt.transition,r=J;try{if(Rt.transition=null,J=1,t)return t()}finally{J=r,Rt.transition=n,G=e,!(G&6)&&Lr()}}function Ip(){dt=Hi.current,ie(Hi)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zI(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ql();break;case 3:hs(),ie(st),ie(Ye),fp();break;case 5:hp(r);break;case 4:hs();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:lp(r.type._context);break;case 22:case 23:Ip()}n=n.return}if(De=t,Ce=t=dr(t.current,null),We=dt=e,ke=0,Xo=null,Ep=qc=li=0,et=Co=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kr=null}return t}function F0(t,e){do{var n=Ce;try{if(ap(),xl.current=ic,rc){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rc=!1}if(ai=0,Re=Ie=de=null,wo=!1,qo=0,wp.current=null,n===null||n.return===null){ke=1,Xo=e,Ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Kg(o);if(m!==null){m.flags&=-257,qg(m,o,a,s,e),m.mode&1&&Yg(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Yg(s,c,e),Tp();break e}l=Error(k(426))}}else if(oe&&a.mode&1){var E=Kg(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),qg(E,o,a,s,e),sp(fs(l,a));break e}}s=l=fs(l,a),ke!==4&&(ke=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=w0(s,l,e);zg(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=E0(s,a,e);zg(s,C);break e}}s=s.return}while(s!==null)}W0(n)}catch(T){e=T,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function j0(){var t=sc.current;return sc.current=ic,t===null?ic:t}function Tp(){(ke===0||ke===3||ke===2)&&(ke=4),De===null||!(li&268435455)&&!(qc&268435455)||Qn(De,We)}function lc(t,e){var n=G;G|=2;var r=j0();(De!==t||We!==e)&&(yn=null,Xr(t,e));do try{hT();break}catch(i){F0(t,i)}while(!0);if(ap(),G=n,sc.current=r,Ce!==null)throw Error(k(261));return De=null,We=0,ke}function hT(){for(;Ce!==null;)U0(Ce)}function fT(){for(;Ce!==null&&!jS();)U0(Ce)}function U0(t){var e=$0(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?W0(t):Ce=e,wp.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oT(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Ce=null;return}}else if(n=sT(n,e,dt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);ke===0&&(ke=5)}function Vr(t,e,n){var r=J,i=Rt.transition;try{Rt.transition=null,J=1,pT(t,e,n,r)}finally{Rt.transition=i,J=r}return null}function pT(t,e,n,r){do es();while(Xn!==null);if(G&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KS(t,s),t===De&&(Ce=De=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,V0(Vl,function(){return es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=J;J=1;var a=G;G|=4,wp.current=null,lT(t,n),L0(n,t),LI(lh),Hl=!!ah,lh=ah=null,t.current=n,cT(n),US(),G=a,J=o,Rt.transition=s}else t.current=n;if(ml&&(ml=!1,Xn=t,ac=i),s=t.pendingLanes,s===0&&(cr=null),$S(n.stateNode),at(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oc)throw oc=!1,t=bh,bh=null,t;return ac&1&&t.tag!==0&&es(),s=t.pendingLanes,s&1?t===Nh?So++:(So=0,Nh=t):So=0,Lr(),null}function es(){if(Xn!==null){var t=w1(ac),e=Rt.transition,n=J;try{if(Rt.transition=null,J=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,ac=0,G&6)throw Error(k(331));var i=G;for(G|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(P=c;P!==null;){var u=P;switch(u.tag){case 0:case 11:case 15:Eo(8,u,s)}var d=u.child;if(d!==null)d.return=u,P=d;else for(;P!==null;){u=P;var f=u.sibling,m=u.return;if(R0(u),u===c){P=null;break}if(f!==null){f.return=m,P=f;break}P=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Eo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,P=v;else e:for(o=p;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kc(9,a)}}catch(T){pe(a,a.return,T)}if(a===o){P=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,P=C;break e}P=a.return}}if(G=i,Lr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Wc,t)}catch{}r=!0}return r}finally{J=n,Rt.transition=e}}return!1}function lv(t,e,n){e=fs(n,e),e=w0(t,e,1),t=lr(t,e,1),e=Qe(),t!==null&&(Sa(t,1,e),at(t,e))}function pe(t,e,n){if(t.tag===3)lv(t,t,n);else for(;e!==null;){if(e.tag===3){lv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){t=fs(n,t),t=E0(e,t,1),e=lr(e,t,1),t=Qe(),e!==null&&(Sa(e,1,t),at(e,t));break}}e=e.return}}function mT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(We&n)===n&&(ke===4||ke===3&&(We&130023424)===We&&500>ye()-Cp?Xr(t,0):Ep|=n),at(t,e)}function z0(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=Qe();t=An(t,e),t!==null&&(Sa(t,e,n),at(t,n))}function gT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z0(t,n)}function vT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),z0(t,n)}var $0;$0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rt=!1,iT(t,e,n);rt=!!(t.flags&131072)}else rt=!1,oe&&e.flags&1048576&&G1(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var i=cs(e,Ye.current);Zi(e,n),i=mp(null,e,r,t,i,n);var s=gp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ot(r)?(s=!0,Ql(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,up(e),i.updater=Yc,e.stateNode=i,i._reactInternals=e,vh(e,r,t,n),e=wh(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&rp(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yT(r),t=$t(r,t),i){case 0:e=yh(null,e,r,t,n);break e;case 1:e=Xg(null,e,r,t,n);break e;case 11:e=Qg(null,e,r,t,n);break e;case 14:e=Jg(null,e,r,$t(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),yh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Xg(t,e,r,i,n);case 3:e:{if(T0(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,X1(t,e),tc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fs(Error(k(423)),e),e=Zg(t,e,r,n,i);break e}else if(r!==i){i=fs(Error(k(424)),e),e=Zg(t,e,r,n,i);break e}else for(pt=ar(e.stateNode.containerInfo.firstChild),gt=e,oe=!0,Bt=null,n=Q1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),r===i){e=On(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return Z1(e),t===null&&ph(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ch(r,i)?o=null:s!==null&&ch(r,s)&&(e.flags|=32),I0(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return k0(t,e,n);case 4:return dp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ds(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Qg(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Zl,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!st.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zi(e,n),i=Ot(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=$t(r,e.pendingProps),i=$t(r.type,i),Jg(t,e,r,i,n);case 15:return C0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Nl(t,e),e.tag=1,ot(r)?(t=!0,Ql(e)):t=!1,Zi(e,n),y0(e,r,i),vh(e,r,i,n),wh(null,e,r,!0,t,n);case 19:return x0(t,e,n);case 22:return S0(t,e,n)}throw Error(k(156,e.tag))};function V0(t,e){return g1(t,e)}function _T(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new _T(t,e,n,r)}function kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yT(t){if(typeof t=="function")return kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hf)return 11;if(t===Gf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Di:return Zr(n.children,i,s,e);case Bf:o=8,i|=8;break;case zd:return t=bt(12,n,e,i|2),t.elementType=zd,t.lanes=s,t;case $d:return t=bt(13,n,e,i),t.elementType=$d,t.lanes=s,t;case Vd:return t=bt(19,n,e,i),t.elementType=Vd,t.lanes=s,t;case Zy:return Qc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jy:o=10;break e;case Xy:o=9;break e;case Hf:o=11;break e;case Gf:o=14;break e;case Gn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zr(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function Qc(t,e,n,r){return t=bt(22,t,r,e),t.elementType=Zy,t.lanes=n,t.stateNode={isHidden:!1},t}function hd(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function fd(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yu(0),this.expirationTimes=Yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xp(t,e,n,r,i,s,o,a,l){return t=new wT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(s),t}function ET(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function B0(t){if(!t)return wr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(ot(n))return B1(t,n,e)}return e}function H0(t,e,n,r,i,s,o,a,l){return t=xp(n,r,!0,t,i,s,o,a,l),t.context=B0(null),n=t.current,r=Qe(),i=ur(n),s=xn(r,i),s.callback=e??null,lr(n,s,i),t.current.lanes=i,Sa(t,i,r),at(t,r),t}function Jc(t,e,n,r){var i=e.current,s=Qe(),o=ur(i);return n=B0(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(i,e,o),t!==null&&(Yt(t,i,o,s),kl(t,i,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){cv(t,e),(t=t.alternate)&&cv(t,e)}function CT(){return null}var G0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Np(t){this._internalRoot=t}Xc.prototype.render=Np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Jc(t,e,null,null)};Xc.prototype.unmount=Np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ci(function(){Jc(null,t,null,null)}),e[Rn]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=S1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&T1(t)}};function Pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uv(){}function ST(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=cc(o);s.call(c)}}var o=H0(e,r,t,0,null,!1,!1,"",uv);return t._reactRootContainer=o,t[Rn]=o.current,Bo(t.nodeType===8?t.parentNode:t),ci(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=cc(l);a.call(c)}}var l=xp(t,0,!1,null,null,!1,!1,"",uv);return t._reactRootContainer=l,t[Rn]=l.current,Bo(t.nodeType===8?t.parentNode:t),ci(function(){Jc(e,l,n,r)}),l}function eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=cc(o);a.call(l)}}Jc(e,o,t,i)}else o=ST(n,e,t,i,r);return cc(o)}E1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(qf(e,n|1),at(e,ye()),!(G&6)&&(ps=ye()+500,Lr()))}break;case 13:ci(function(){var r=An(t,1);if(r!==null){var i=Qe();Yt(r,t,1,i)}}),bp(t,1)}};Qf=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=Qe();Yt(e,t,134217728,n)}bp(t,134217728)}};C1=function(t){if(t.tag===13){var e=ur(t),n=An(t,e);if(n!==null){var r=Qe();Yt(n,t,e,r)}bp(t,e)}};S1=function(){return J};I1=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Zd=function(t,e,n){switch(e){case"input":if(Gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bc(r);if(!i)throw Error(k(90));t1(r),Gd(r,i)}}}break;case"textarea":r1(t,n);break;case"select":e=n.value,e!=null&&qi(t,!!n.multiple,e,!1)}};u1=Sp;d1=ci;var IT={usingClientEntryPoint:!1,Events:[Ta,Ui,Bc,l1,c1,Sp]},Qs={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TT={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p1(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||CT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Wc=gl.inject(TT),dn=gl}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IT;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pp(e))throw Error(k(200));return ET(t,e,null,n)};Ct.createRoot=function(t,e){if(!Pp(t))throw Error(k(299));var n=!1,r="",i=G0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xp(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Np(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=p1(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return ci(t)};Ct.hydrate=function(t,e,n){if(!Zc(e))throw Error(k(200));return eu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Pp(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=G0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=H0(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xc(e)};Ct.render=function(t,e,n){if(!Zc(e))throw Error(k(200));return eu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!Zc(t))throw Error(k(40));return t._reactRootContainer?(ci(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Sp;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zc(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return eu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function Y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0)}catch(t){console.error(t)}}Y0(),Yy.exports=Ct;var kT=Yy.exports,K0,dv=kT;K0=dv.createRoot,dv.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zo.apply(this,arguments)}var Zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zn||(Zn={}));const hv="popstate";function xT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ah("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:uc(i)}return NT(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function q0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bT(){return Math.random().toString(36).substr(2,8)}function fv(t,e){return{usr:t.state,key:t.key,idx:e}}function Ah(t,e,n,r){return n===void 0&&(n=null),Zo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ps(e):e,{state:n,key:e&&e.key||r||bT()})}function uc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function NT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Zn.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Zo({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Zn.Pop;let E=u(),g=E==null?null:E-c;c=E,l&&l({action:a,location:y.location,delta:g})}function f(E,g){a=Zn.Push;let p=Ah(y.location,E,g);c=u()+1;let v=fv(p,c),C=y.createHref(p);try{o.pushState(v,"",C)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(C)}s&&l&&l({action:a,location:y.location,delta:1})}function m(E,g){a=Zn.Replace;let p=Ah(y.location,E,g);c=u();let v=fv(p,c),C=y.createHref(p);o.replaceState(v,"",C),s&&l&&l({action:a,location:y.location,delta:0})}function _(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:uc(E);return p=p.replace(/ $/,"%20"),Se(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(hv,d),l=E,()=>{i.removeEventListener(hv,d),l=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let g=_(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(E){return o.go(E)}};return y}var pv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pv||(pv={}));function PT(t,e,n){return n===void 0&&(n="/"),RT(t,e,n,!1)}function RT(t,e,n,r){let i=typeof e=="string"?Ps(e):e,s=Rp(i.pathname||"/",n);if(s==null)return null;let o=Q0(t);AT(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=VT(s);a=zT(o[l],c,r)}return a}function Q0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=hr([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Q0(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:UT(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of J0(s.path))i(s,o,l)}),e}function J0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=J0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function AT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const OT=/^:[\w-]+$/,LT=3,DT=2,MT=1,FT=10,jT=-2,mv=t=>t==="*";function UT(t,e){let n=t.split("/"),r=n.length;return n.some(mv)&&(r+=jT),e&&(r+=DT),n.filter(i=>!mv(i)).reduce((i,s)=>i+(OT.test(s)?LT:s===""?MT:FT),r)}function WT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zT(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=gv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=gv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:hr([s,d.pathname]),pathnameBase:YT(hr([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=hr([s,d.pathnameBase]))}return o}function gv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$T(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:f,isOptional:m}=u;if(f==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[d];return m&&!_?c[f]=void 0:c[f]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function $T(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),q0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return q0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Rp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function BT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ps(t):t;return{pathname:n?n.startsWith("/")?n:HT(n,e):e,search:KT(r),hash:qT(i)}}function HT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function X0(t,e){let n=GT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Z0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ps(t):(i=Zo({},t),Se(!i.pathname||!i.pathname.includes("?"),pd("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),pd("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),pd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=BT(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),YT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ew=["post","put","patch","delete"];new Set(ew);const JT=["get",...ew];new Set(JT);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ea.apply(this,arguments)}const Ap=w.createContext(null),XT=w.createContext(null),Ci=w.createContext(null),tu=w.createContext(null),Dr=w.createContext({outlet:null,matches:[],isDataRoute:!1}),tw=w.createContext(null);function ZT(t,e){let{relative:n}=e===void 0?{}:e;xa()||Se(!1);let{basename:r,navigator:i}=w.useContext(Ci),{hash:s,pathname:o,search:a}=iw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function xa(){return w.useContext(tu)!=null}function Mr(){return xa()||Se(!1),w.useContext(tu).location}function nw(t){w.useContext(Ci).static||w.useLayoutEffect(t)}function Ft(){let{isDataRoute:t}=w.useContext(Dr);return t?hk():ek()}function ek(){xa()||Se(!1);let t=w.useContext(Ap),{basename:e,future:n,navigator:r}=w.useContext(Ci),{matches:i}=w.useContext(Dr),{pathname:s}=Mr(),o=JSON.stringify(X0(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return nw(()=>{a.current=!0}),w.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=Z0(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:hr([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,o,s,t])}function rw(){let{matches:t}=w.useContext(Dr),e=t[t.length-1];return e?e.params:{}}function iw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=w.useContext(Ci),{matches:i}=w.useContext(Dr),{pathname:s}=Mr(),o=JSON.stringify(X0(i,r.v7_relativeSplatPath));return w.useMemo(()=>Z0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function tk(t,e){return nk(t,e)}function nk(t,e,n,r){xa()||Se(!1);let{navigator:i}=w.useContext(Ci),{matches:s}=w.useContext(Dr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Mr(),u;if(e){var d;let E=typeof e=="string"?Ps(e):e;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||Se(!1),u=E}else u=c;let f=u.pathname||"/",m=f;if(l!=="/"){let E=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let _=PT(t,{pathname:m}),y=ak(_&&_.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:hr([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:hr([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?w.createElement(tu.Provider,{value:{location:ea({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Zn.Pop}},y):y}function rk(){let t=dk(),e=QT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,null)}const ik=w.createElement(rk,null);class sk extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(Dr.Provider,{value:this.props.routeContext},w.createElement(tw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ok(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(Ap);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Dr.Provider,{value:e},r)}function ak(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||Se(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:m}=n,_=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,f)=>{let m,_=!1,y=null,E=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||ik,l&&(c<0&&f===0?(_=!0,E=null):c===f&&(_=!0,E=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),p=()=>{let v;return m?v=y:_?v=E:d.route.Component?v=w.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=u,w.createElement(ok,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(sk,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var sw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(sw||{}),dc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(dc||{});function lk(t){let e=w.useContext(Ap);return e||Se(!1),e}function ck(t){let e=w.useContext(XT);return e||Se(!1),e}function uk(t){let e=w.useContext(Dr);return e||Se(!1),e}function ow(t){let e=uk(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function dk(){var t;let e=w.useContext(tw),n=ck(dc.UseRouteError),r=ow(dc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function hk(){let{router:t}=lk(sw.UseNavigateStable),e=ow(dc.UseNavigateStable),n=w.useRef(!1);return nw(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ea({fromRouteId:e},s)))},[t,e])}const vv={};function fk(t,e){vv[e]||(vv[e]=!0,console.warn(e))}const _v=(t,e,n)=>fk(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function pk(t,e){t!=null&&t.v7_startTransition||_v("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&_v("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function aw(t){Se(!1)}function mk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Zn.Pop,navigator:s,static:o=!1,future:a}=t;xa()&&Se(!1);let l=e.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:l,navigator:s,static:o,future:ea({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ps(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:_="default"}=r,y=w.useMemo(()=>{let E=Rp(u,l);return E==null?null:{location:{pathname:E,search:d,hash:f,state:m,key:_},navigationType:i}},[l,u,d,f,m,_,i]);return y==null?null:w.createElement(Ci.Provider,{value:c},w.createElement(tu.Provider,{children:n,value:y}))}function gk(t){let{children:e,location:n}=t;return tk(Oh(e),n)}new Promise(()=>{});function Oh(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,Oh(r.props.children,s));return}r.type!==aw&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Oh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lh(){return Lh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lh.apply(this,arguments)}function vk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _k(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yk(t,e){return t.button===0&&(!e||e==="_self")&&!_k(t)}const wk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ek="6";try{window.__reactRouterVersion=Ek}catch{}const Ck="startTransition",yv=mS[Ck];function Sk(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=xT({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=w.useCallback(d=>{c&&yv?yv(()=>l(d)):l(d)},[l,c]);return w.useLayoutEffect(()=>o.listen(u),[o,u]),w.useEffect(()=>pk(r),[r]),w.createElement(mk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Ik=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ba=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d}=e,f=vk(e,wk),{basename:m}=w.useContext(Ci),_,y=!1;if(typeof c=="string"&&Tk.test(c)&&(_=c,Ik))try{let v=new URL(window.location.href),C=c.startsWith("//")?new URL(v.protocol+c):new URL(c),T=Rp(C.pathname,m);C.origin===v.origin&&T!=null?c=T+C.search+C.hash:y=!0}catch{}let E=ZT(c,{relative:i}),g=kk(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i,viewTransition:d});function p(v){r&&r(v),v.defaultPrevented||g(v)}return w.createElement("a",Lh({},f,{href:_||E,onClick:y||s?r:p,ref:n,target:l}))});var wv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wv||(wv={}));var Ev;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ev||(Ev={}));function kk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Ft(),c=Mr(),u=iw(t,{relative:o});return w.useCallback(d=>{if(yk(d,n)){d.preventDefault();let f=r!==void 0?r:uc(c)===uc(u);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,r,i,n,t,s,o,a])}const xk={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},bk={prefix:"fas",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"]},Nk={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]},Pk={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"]},Rk=Pk,Ak={prefix:"fas",iconName:"face-kiss",icon:[512,512,[128535,"kiss"],"f596","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm48.7-198.3c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C274.7 443.1 257.4 448 240 448c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.1 .3-.2 .6-.4c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1l-.4-.3-.5-.3-.2-.1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},lw={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"]},Ok={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]},Lk={prefix:"fas",iconName:"file-arrow-up",icon:[384,512,["file-upload"],"f574","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-102.1-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31L216 408z"]},Dk=Lk,Mk={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},Fk={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},jk=Fk,Uk={prefix:"fas",iconName:"layer-group",icon:[576,512,[],"f5fd","M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"]},Wk={prefix:"fas",iconName:"code-branch",icon:[448,512,[],"f126","M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},zk={prefix:"fas",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},$k={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Vk={prefix:"fas",iconName:"poo",icon:[512,512,[128169],"f2fe","M268.9 .9c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.4c2.8 8.2 4.3 16.9 4.3 26.1c0 44.1-35.7 79.9-79.8 80L160 128c-35.3 0-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48L104 240c-39.8 0-72 32.2-72 72c0 23.2 11 43.8 28 57c-34.1 5.7-60 35.3-60 71c0 39.8 32.2 72 72 72l368 0c39.8 0 72-32.2 72-72c0-35.7-25.9-65.3-60-71c17-13.2 28-33.8 28-57c0-39.8-32.2-72-72-72l-13.7 0c13.3-11.7 21.7-28.9 21.7-48c0-35.3-28.7-64-64-64l-5.5 0c3.5-10 5.5-20.8 5.5-32c0-48.6-36.2-88.8-83.1-95.1zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm64 108.3c0 2.4-.7 4.8-2.2 6.7c-8.2 10.5-39.5 45-93.8 45s-85.6-34.6-93.8-45c-1.5-1.9-2.2-4.3-2.2-6.7c0-6.8 5.5-12.3 12.3-12.3l167.4 0c6.8 0 12.3 5.5 12.3 12.3z"]},Bk={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},cw={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},Hk={prefix:"fas",iconName:"face-meh",icon:[512,512,[128528,"meh"],"f11a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 336l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},Gk={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Yk=Gk,Kk={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"]},uw={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},dw=uw,Dh={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},hw={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},qk={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},Qk={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Jk={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Xk=Jk,Zk={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ex={prefix:"fas",iconName:"arrow-up-z-a",icon:[576,512,["sort-alpha-up-alt"],"f882","M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3 128 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 64c0 17.7 14.3 32 32 32l50.7 0-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.7 0 73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L352 32c-17.7 0-32 14.3-32 32zm96 192c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3 88.4 0 7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 262.8 428.1 256 416 256zM395.8 400L416 359.6 436.2 400l-40.4 0z"]},tx={prefix:"fas",iconName:"face-angry",icon:[512,512,[128544,"angry"],"f556","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM338.7 395.9c6.6-5.9 7.1-16 1.2-22.6C323.8 355.4 295.7 336 256 336s-67.8 19.4-83.9 37.3c-5.9 6.6-5.4 16.7 1.2 22.6s16.7 5.4 22.6-1.2c11.7-13 31.6-26.7 60.1-26.7s48.4 13.7 60.1 26.7c5.9 6.6 16 7.1 22.6 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"]},Cv={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},nx={prefix:"fas",iconName:"dice",icon:[640,512,[127922],"f522","M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},rx={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},ix=rx,sx={prefix:"fas",iconName:"face-sad-tear",icon:[512,512,[128546,"sad-tear"],"f5b4","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm240 80c0-8.8 7.2-16 16-16c45 0 85.6 20.5 115.7 53.1c6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9c-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47c0-20 28.6-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47zM367.6 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ox={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]},Sv=()=>{};let Op={},fw={},pw=null,mw={mark:Sv,measure:Sv};try{typeof window<"u"&&(Op=window),typeof document<"u"&&(fw=document),typeof MutationObserver<"u"&&(pw=MutationObserver),typeof performance<"u"&&(mw=performance)}catch{}const{userAgent:Iv=""}=Op.navigator||{},Er=Op,se=fw,Tv=pw,vl=mw;Er.document;const Wn=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",gw=~Iv.indexOf("MSIE")||~Iv.indexOf("Trident/");var le="classic",vw="duotone",vt="sharp",_t="sharp-duotone",ax=[le,vw,vt,_t],lx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},kv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},cx=["kit"],ux=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,dx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,hx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},fx={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},px={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},mx={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},gx={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},vx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},_w={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},_x=["solid","regular","light","thin","duotone","brands"],yw=[1,2,3,4,5,6,7,8,9,10],yx=yw.concat([11,12,13,14,15,16,17,18,19,20]),co={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wx=[...Object.keys(mx),..._x,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",co.GROUP,co.SWAP_OPACITY,co.PRIMARY,co.SECONDARY].concat(yw.map(t=>"".concat(t,"x"))).concat(yx.map(t=>"w-".concat(t))),Ex={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Cx={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Sx={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},xv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Ln="___FONT_AWESOME___",Mh=16,ww="fa",Ew="svg-inline--fa",ui="data-fa-i2svg",Fh="data-fa-pseudo-element",Ix="data-fa-pseudo-element-pending",Lp="data-prefix",Dp="data-icon",bv="fontawesome-i2svg",Tx="async",kx=["HTML","HEAD","STYLE","SCRIPT"],Cw=(()=>{try{return!0}catch{return!1}})(),Sw=[le,vt,_t];function Na(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[le]}})}const Iw={..._w};Iw[le]={..._w[le],...kv.kit,...kv["kit-duotone"]};const ei=Na(Iw),jh={...vx};jh[le]={...jh[le],...xv.kit,...xv["kit-duotone"]};const ta=Na(jh),Uh={...gx};Uh[le]={...Uh[le],...Sx.kit};const ti=Na(Uh),Wh={...px};Wh[le]={...Wh[le],...Cx.kit};const xx=Na(Wh),bx=ux,Tw="fa-layers-text",Nx=dx,Px={...lx};Na(Px);const Rx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],md=co,ms=new Set;Object.keys(ta[le]).map(ms.add.bind(ms));Object.keys(ta[vt]).map(ms.add.bind(ms));Object.keys(ta[_t]).map(ms.add.bind(ms));const Ax=[...cx,...wx],Io=Er.FontAwesomeConfig||{};function Ox(t){var e=se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Lx(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}se&&typeof se.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=Lx(Ox(n));i!=null&&(Io[r]=i)});const kw={styleDefault:"solid",familyDefault:"classic",cssPrefix:ww,replacementClass:Ew,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Io.familyPrefix&&(Io.cssPrefix=Io.familyPrefix);const gs={...kw,...Io};gs.autoReplaceSvg||(gs.observeMutations=!1);const A={};Object.keys(kw).forEach(t=>{Object.defineProperty(A,t,{enumerable:!0,set:function(e){gs[t]=e,To.forEach(n=>n(A))},get:function(){return gs[t]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){gs.cssPrefix=t,To.forEach(e=>e(A))},get:function(){return gs.cssPrefix}});Er.FontAwesomeConfig=A;const To=[];function Dx(t){return To.push(t),()=>{To.splice(To.indexOf(t),1)}}const Bn=Mh,ln={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mx(t){if(!t||!Wn)return;const e=se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=se.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return se.head.insertBefore(e,r),t}const Fx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function na(){let t=12,e="";for(;t-- >0;)e+=Fx[Math.random()*62|0];return e}function Rs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Mp(t){return t.classList?Rs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function xw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jx(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(xw(t[n]),'" '),"").trim()}function nu(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Fp(t){return t.size!==ln.size||t.x!==ln.x||t.y!==ln.y||t.rotate!==ln.rotate||t.flipX||t.flipY}function Ux(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Wx(t){let{transform:e,width:n=Mh,height:r=Mh,startCentered:i=!1}=t,s="";return i&&gw?s+="translate(".concat(e.x/Bn-n/2,"em, ").concat(e.y/Bn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Bn,"em), calc(-50% + ").concat(e.y/Bn,"em)) "):s+="translate(".concat(e.x/Bn,"em, ").concat(e.y/Bn,"em) "),s+="scale(".concat(e.size/Bn*(e.flipX?-1:1),", ").concat(e.size/Bn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var zx=`:root, :host {
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
}`;function bw(){const t=ww,e=Ew,n=A.cssPrefix,r=A.replacementClass;let i=zx;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Nv=!1;function gd(){A.autoAddCss&&!Nv&&(Mx(bw()),Nv=!0)}var $x={mixout(){return{dom:{css:bw,insertCss:gd}}},hooks(){return{beforeDOMElementCreation(){gd()},beforeI2svg(){gd()}}}};const Dn=Er||{};Dn[Ln]||(Dn[Ln]={});Dn[Ln].styles||(Dn[Ln].styles={});Dn[Ln].hooks||(Dn[Ln].hooks={});Dn[Ln].shims||(Dn[Ln].shims=[]);var cn=Dn[Ln];const Nw=[],Pw=function(){se.removeEventListener("DOMContentLoaded",Pw),hc=1,Nw.map(t=>t())};let hc=!1;Wn&&(hc=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),hc||se.addEventListener("DOMContentLoaded",Pw));function Vx(t){Wn&&(hc?setTimeout(t,0):Nw.push(t))}function Pa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?xw(t):"<".concat(e," ").concat(jx(n),">").concat(r.map(Pa).join(""),"</").concat(e,">")}function Pv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var vd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Bx(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function zh(t){const e=Bx(t);return e.length===1?e[0].toString(16):null}function Hx(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Rv(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function $h(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Rv(e);typeof cn.hooks.addPack=="function"&&!r?cn.hooks.addPack(t,Rv(e)):cn.styles[t]={...cn.styles[t]||{},...i},t==="fas"&&$h("fa",e)}const{styles:Gr,shims:Gx}=cn,Yx={[le]:Object.values(ti[le]),[vt]:Object.values(ti[vt]),[_t]:Object.values(ti[_t])};let jp=null,Rw={},Aw={},Ow={},Lw={},Dw={};const Kx={[le]:Object.keys(ei[le]),[vt]:Object.keys(ei[vt]),[_t]:Object.keys(ei[_t])};function qx(t){return~Ax.indexOf(t)}function Qx(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!qx(i)?i:null}const Mw=()=>{const t=r=>vd(Gr,(i,s,o)=>(i[o]=vd(s,r,{}),i),{});Rw=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Aw=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),Dw=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in Gr||A.autoFetchSvg,n=vd(Gx,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Ow=n.names,Lw=n.unicodes,jp=ru(A.styleDefault,{family:A.familyDefault})};Dx(t=>{jp=ru(t.styleDefault,{family:A.familyDefault})});Mw();function Up(t,e){return(Rw[t]||{})[e]}function Jx(t,e){return(Aw[t]||{})[e]}function er(t,e){return(Dw[t]||{})[e]}function Fw(t){return Ow[t]||{prefix:null,iconName:null}}function Xx(t){const e=Lw[t],n=Up("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Cr(){return jp}const Wp=()=>({prefix:null,iconName:null,rest:[]});function ru(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=le}=e,r=ei[n][t],i=ta[n][t]||ta[n][r],s=t in cn.styles?t:null;return i||s||null}const Zx={[le]:Object.keys(ti[le]),[vt]:Object.keys(ti[vt]),[_t]:Object.keys(ti[_t])};function iu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[le]:"".concat(A.cssPrefix,"-").concat(le),[vt]:"".concat(A.cssPrefix,"-").concat(vt),[_t]:"".concat(A.cssPrefix,"-").concat(_t)};let i=null,s=le;const o=ax.filter(l=>l!==vw);o.forEach(l=>{(t.includes(r[l])||t.some(c=>Zx[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const u=Qx(A.cssPrefix,c);if(Gr[c]?(c=Yx[s].includes(c)?xx[s][c]:c,i=c,l.prefix=c):Kx[s].indexOf(c)>-1?(i=c,l.prefix=ru(c,{family:s})):u?l.iconName=u:c!==A.replacementClass&&!o.some(d=>c===r[d])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const d=i==="fa"?Fw(l.iconName):{},f=er(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||f||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Gr.far&&Gr.fas&&!A.autoFetchSvg&&(l.prefix="fas")}return l},Wp());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===vt&&(Gr.fass||A.autoFetchSvg)&&(a.prefix="fass",a.iconName=er(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===_t&&(Gr.fasds||A.autoFetchSvg)&&(a.prefix="fasds",a.iconName=er(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Cr()||"fas"),a}class e3{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},$h(s,i[s]);const o=ti[le][s];o&&$h(o,i[s]),Mw()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let Av=[],Gi={};const ts={},t3=Object.keys(ts);function n3(t,e){let{mixoutsTo:n}=e;return Av=t,Gi={},Object.keys(ts).forEach(r=>{t3.indexOf(r)===-1&&delete ts[r]}),Av.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{Gi[o]||(Gi[o]=[]),Gi[o].push(s[o])})}r.provides&&r.provides(ts)}),n}function Vh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Gi[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function di(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Gi[t]||[]).forEach(s=>{s.apply(null,n)})}function Sr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ts[t]?ts[t].apply(null,e):void 0}function Bh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Cr();if(e)return e=er(n,e)||e,Pv(jw.definitions,n,e)||Pv(cn.styles,n,e)}const jw=new e3,r3=()=>{A.autoReplaceSvg=!1,A.observeMutations=!1,di("noAuto")},i3={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wn?(di("beforeI2svg",t),Sr("pseudoElements2svg",t),Sr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,Vx(()=>{o3({autoReplaceSvgRoot:e}),di("watch",t)})}},s3={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:er(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ru(t[0]);return{prefix:n,iconName:er(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(bx))){const e=iu(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Cr(),iconName:er(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Cr();return{prefix:e,iconName:er(e,t)||t}}}},It={noAuto:r3,config:A,dom:i3,parse:s3,library:jw,findIconDefinition:Bh,toHtml:Pa},o3=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=se}=t;(Object.keys(cn.styles).length>0||A.autoFetchSvg)&&Wn&&A.autoReplaceSvg&&It.dom.i2svg({node:e})};function su(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Pa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Wn)return;const n=se.createElement("div");return n.innerHTML=t.html,n.children}}),t}function a3(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Fp(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=nu({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function l3(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(A.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function zp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:d=!1}=t,{width:f,height:m}=n.found?n:e,_=r==="fak",y=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(T=>u.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(u.classes).join(" ");let E={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":i,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(m)}};const g=_&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/m*16*.0625,"em")}:{};d&&(E.attributes[ui]=""),a&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(c||na())},children:[a]}),delete E.attributes.title);const p={...E,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...g,...u.styles}},{children:v,attributes:C}=n.found&&e.found?Sr("generateAbstractMask",p)||{children:[],attributes:{}}:Sr("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=v,p.attributes=C,o?l3(p):a3(p)}function Ov(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[ui]="");const c={...o.styles};Fp(i)&&(c.transform=Wx({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const u=nu(c);u.length>0&&(l.style=u);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function c3(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=nu(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_d}=cn;function Hh(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(md.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(md.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(md.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const u3={found:!1,width:512,height:512};function d3(t,e){!Cw&&!A.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gh(t,e){let n=e;return e==="fa"&&A.styleDefault!==null&&(e=Cr()),new Promise((r,i)=>{if(n==="fa"){const s=Fw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&_d[e]&&_d[e][t]){const s=_d[e][t];return r(Hh(s))}d3(t,e),r({...u3,icon:A.showMissingIcons&&t?Sr("missingIconAbstract")||{}:{}})})}const Lv=()=>{},Yh=A.measurePerformance&&vl&&vl.mark&&vl.measure?vl:{mark:Lv,measure:Lv},uo='FA "6.6.0"',h3=t=>(Yh.mark("".concat(uo," ").concat(t," begins")),()=>Uw(t)),Uw=t=>{Yh.mark("".concat(uo," ").concat(t," ends")),Yh.measure("".concat(uo," ").concat(t),"".concat(uo," ").concat(t," begins"),"".concat(uo," ").concat(t," ends"))};var $p={begin:h3,end:Uw};const Ol=()=>{};function Dv(t){return typeof(t.getAttribute?t.getAttribute(ui):null)=="string"}function f3(t){const e=t.getAttribute?t.getAttribute(Lp):null,n=t.getAttribute?t.getAttribute(Dp):null;return e&&n}function p3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(A.replacementClass)}function m3(){return A.autoReplaceSvg===!0?Ll.replace:Ll[A.autoReplaceSvg]||Ll.replace}function g3(t){return se.createElementNS("http://www.w3.org/2000/svg",t)}function v3(t){return se.createElement(t)}function Ww(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?g3:v3}=e;if(typeof t=="string")return se.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(Ww(s,{ceFn:n}))}),r}function _3(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ll={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ww(n),e)}),e.getAttribute(ui)===null&&A.keepOriginalSource){let n=se.createComment(_3(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Mp(e).indexOf(A.replacementClass))return Ll.replace(t);const r=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===A.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Pa(s)).join(`
`);e.setAttribute(ui,""),e.innerHTML=i}};function Mv(t){t()}function zw(t,e){const n=typeof e=="function"?e:Ol;if(t.length===0)n();else{let r=Mv;A.mutateApproach===Tx&&(r=Er.requestAnimationFrame||Mv),r(()=>{const i=m3(),s=$p.begin("mutate");t.map(i),s(),n()})}}let Vp=!1;function $w(){Vp=!0}function Kh(){Vp=!1}let fc=null;function Fv(t){if(!Tv||!A.observeMutations)return;const{treeCallback:e=Ol,nodeCallback:n=Ol,pseudoElementsCallback:r=Ol,observeMutationsRoot:i=se}=t;fc=new Tv(s=>{if(Vp)return;const o=Cr();Rs(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Dv(a.addedNodes[0])&&(A.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&A.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Dv(a.target)&&~Rx.indexOf(a.attributeName))if(a.attributeName==="class"&&f3(a.target)){const{prefix:l,iconName:c}=iu(Mp(a.target));a.target.setAttribute(Lp,l||o),c&&a.target.setAttribute(Dp,c)}else p3(a.target)&&n(a.target)})}),Wn&&fc.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function y3(){fc&&fc.disconnect()}function w3(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function E3(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=iu(Mp(t));return i.prefix||(i.prefix=Cr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Jx(i.prefix,t.innerText)||Up(i.prefix,zh(t.innerText))),!i.iconName&&A.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function C3(t){const e=Rs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return A.autoA11y&&(n?e["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||na()):(e["aria-hidden"]="true",e.focusable="false")),e}function S3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ln,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=E3(t),s=C3(t),o=Vh("parseNodeAttributes",{},t);let a=e.styleParser?w3(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:ln,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:I3}=cn;function Vw(t){const e=A.autoReplaceSvg==="nest"?jv(t,{styleParser:!1}):jv(t);return~e.extra.classes.indexOf(Tw)?Sr("generateLayersText",t,e):Sr("generateSvgReplacementMutation",t,e)}let pn=new Set;Sw.map(t=>{pn.add("fa-".concat(t))});Object.keys(ei[le]).map(pn.add.bind(pn));Object.keys(ei[vt]).map(pn.add.bind(pn));Object.keys(ei[_t]).map(pn.add.bind(pn));pn=[...pn];function Uv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wn)return Promise.resolve();const n=se.documentElement.classList,r=u=>n.add("".concat(bv,"-").concat(u)),i=u=>n.remove("".concat(bv,"-").concat(u)),s=A.autoFetchSvg?pn:Sw.map(u=>"fa-".concat(u)).concat(Object.keys(I3));s.includes("fa")||s.push("fa");const o=[".".concat(Tw,":not([").concat(ui,"])")].concat(s.map(u=>".".concat(u,":not([").concat(ui,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Rs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=$p.begin("onTree"),c=a.reduce((u,d)=>{try{const f=Vw(d);f&&u.push(f)}catch(f){Cw||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,d)=>{Promise.all(c).then(f=>{zw(f,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(f=>{l(),d(f)})})}function T3(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vw(t).then(n=>{n&&zw([n],e)})}function k3(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Bh(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Bh(i||{})),t(r,{...n,mask:i})}}const x3=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ln,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:f,icon:m}=t;return su({type:"icon",...t},()=>(di("beforeDOMElementCreation",{iconDefinition:t,params:e}),A.autoA11y&&(o?c["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(a||na()):(c["aria-hidden"]="true",c.focusable="false")),zp({icons:{main:Hh(m),mask:i?Hh(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...ln,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var b3={mixout(){return{icon:k3(x3)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Uv,t.nodeCallback=T3,t}}},provides(t){t.i2svg=function(e){const{node:n=se,callback:r=()=>{}}=e;return Uv(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:d}=n;return new Promise((f,m)=>{Promise.all([Gh(r,o),c.iconName?Gh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[y,E]=_;f([e,zp({icons:{main:y,mask:E},prefix:o,iconName:r,transform:a,symbol:l,maskId:u,title:i,titleId:s,extra:d,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=nu(o);a.length>0&&(r.style=a);let l;return Fp(s)&&(l=Sr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},N3={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return su({type:"layer"},()=>{di("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},P3={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return su({type:"counter",content:t},()=>(di("beforeDOMElementCreation",{content:t,params:e}),c3({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(A.cssPrefix,"-layers-counter"),...r]}})))}}}},R3={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ln,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return su({type:"text",content:t},()=>(di("beforeDOMElementCreation",{content:t,params:e}),Ov({content:t,transform:{...ln,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(A.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(gw){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return A.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Ov({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const A3=new RegExp('"',"ug"),Wv=[1105920,1112319],zv={FontAwesome:{normal:"fas",400:"fas"},...fx,...hx,...Ex},qh=Object.keys(zv).reduce((t,e)=>(t[e.toLowerCase()]=zv[e],t),{}),O3=Object.keys(qh).reduce((t,e)=>{const n=qh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function L3(t){const e=t.replace(A3,""),n=Hx(e,0),r=n>=Wv[0]&&n<=Wv[1],i=e.length===2?e[0]===e[1]:!1;return{value:zh(i?e[0]:e),isSecondary:r||i}}function D3(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(qh[n]||{})[i]||O3[n]}function $v(t,e){const n="".concat(Ix).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Rs(t.children).filter(f=>f.getAttribute(Fh)===e)[0],a=Er.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(Nx),u=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&d!=="none"&&d!==""){const f=a.getPropertyValue("content");let m=D3(l,u);const{value:_,isSecondary:y}=L3(f),E=c[0].startsWith("FontAwesome");let g=Up(m,_),p=g;if(E){const v=Xx(_);v.iconName&&v.prefix&&(g=v.iconName,m=v.prefix)}if(g&&!y&&(!o||o.getAttribute(Lp)!==m||o.getAttribute(Dp)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);const v=S3(),{extra:C}=v;C.attributes[Fh]=e,Gh(g,m).then(T=>{const b=zp({...v,icons:{main:T,mask:Wp()},prefix:m,iconName:p,extra:C,watchable:!0}),S=se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=b.map(N=>Pa(N)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function M3(t){return Promise.all([$v(t,"::before"),$v(t,"::after")])}function F3(t){return t.parentNode!==document.head&&!~kx.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Fh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Vv(t){if(Wn)return new Promise((e,n)=>{const r=Rs(t.querySelectorAll("*")).filter(F3).map(M3),i=$p.begin("searchPseudoElements");$w(),Promise.all(r).then(()=>{i(),Kh(),e()}).catch(()=>{i(),Kh(),n()})})}var j3={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Vv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=se}=e;A.searchPseudoElements&&Vv(n)}}};let Bv=!1;var U3={mixout(){return{dom:{unwatch(){$w(),Bv=!0}}}},hooks(){return{bootstrap(){Fv(Vh("mutationObserverCallbacks",{}))},noAuto(){y3()},watch(t){const{observeMutationsRoot:e}=t;Bv?Kh():Fv(Vh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Hv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var W3={mixout(){return{parse:{transform:t=>Hv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Hv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},f={outer:o,inner:u,path:d};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const yd={x:0,y:0,width:"100%",height:"100%"};function Gv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function z3(t){return t.tag==="g"?t.children:[t]}var $3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?iu(n.split(" ").map(i=>i.trim())):Wp();return r.prefix||(r.prefix=Cr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:u,icon:d}=s,f=Ux({transform:a,containerWidth:u,iconWidth:l}),m={tag:"rect",attributes:{...yd,fill:"white"}},_=c.children?{children:c.children.map(Gv)}:{},y={tag:"g",attributes:{...f.inner},children:[Gv({tag:c.tag,attributes:{...c.attributes,...f.path},..._})]},E={tag:"g",attributes:{...f.outer},children:[y]},g="mask-".concat(o||na()),p="clip-".concat(o||na()),v={tag:"mask",attributes:{...yd,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,E]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:z3(d)},v]};return n.push(C,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(g,")"),...yd}}),{children:n,attributes:r}}}},V3={provides(t){let e=!1;Er.matchMedia&&(e=Er.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},B3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},H3=[$x,b3,N3,P3,R3,j3,U3,W3,$3,V3,B3];n3(H3,{mixoutsTo:It});It.noAuto;It.config;It.library;It.dom;const Qh=It.parse;It.findIconDefinition;It.toHtml;const G3=It.icon;It.layer;It.text;It.counter;var Bw={exports:{}},Y3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",K3=Y3,q3=K3;function Hw(){}function Gw(){}Gw.resetWarningCache=Hw;var Q3=function(){function t(r,i,s,o,a,l){if(l!==q3){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Gw,resetWarningCache:Hw};return n.PropTypes=n,n};Bw.exports=Q3();var J3=Bw.exports;const V=Dy(J3);function Yv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function tn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yv(Object(n),!0).forEach(function(r){Yi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pc(t){"@babel/helpers - typeof";return pc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pc(t)}function Yi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function X3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Z3(t,e){if(t==null)return{};var n=X3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Jh(t){return e4(t)||t4(t)||n4(t)||r4()}function e4(t){if(Array.isArray(t))return Xh(t)}function t4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function n4(t,e){if(t){if(typeof t=="string")return Xh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xh(t,e)}}function Xh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i4(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,f=t.fixedWidth,m=t.inverse,_=t.border,y=t.listItem,E=t.flip,g=t.size,p=t.rotation,v=t.pull,C=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":m,"fa-border":_,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Yi(e,"fa-".concat(g),typeof g<"u"&&g!==null),Yi(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Yi(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Yi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(C).map(function(T){return C[T]?T:null}).filter(function(T){return T})}function s4(t){return t=t-0,t===t}function Yw(t){return s4(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var o4=["style"];function a4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Yw(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[a4(i)]=s:e[i]=s,e},{})}function Kw(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Kw(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=l4(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Yw(c)]=u}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=Z3(n,o4);return i.attrs.style=tn(tn({},i.attrs.style),o),t.apply(void 0,[e.tag,tn(tn({},i.attrs),a)].concat(Jh(r)))}var qw=!1;try{qw=!0}catch{}function c4(){if(!qw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Kv(t){if(t&&pc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Qh.icon)return Qh.icon(t);if(t===null)return null;if(t&&pc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function wd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Yi({},t,e):{}}var qv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},B=Wf.forwardRef(function(t,e){var n=tn(tn({},qv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,u=Kv(r),d=wd("classes",[].concat(Jh(i4(n)),Jh((o||"").split(" ")))),f=wd("transform",typeof n.transform=="string"?Qh.transform(n.transform):n.transform),m=wd("mask",Kv(i)),_=G3(u,tn(tn(tn(tn({},d),f),m),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!_)return c4("Could not find icon",u),null;var y=_.abstract,E={ref:e};return Object.keys(n).forEach(function(g){qv.hasOwnProperty(g)||(E[g]=n[g])}),u4(y[0],E)});B.displayName="FontAwesomeIcon";B.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};var u4=Kw.bind(null,Wf.createElement),Qv={};/**
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
 */const Qw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw As(e)},As=function(t){return new Error("Firebase Database ("+Qw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},d4=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[u],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):d4(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new h4;const f=s<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const _=c<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class h4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xw=function(t){const e=Jw(t);return Bp.encodeByteArray(e,!0)},mc=function(t){return Xw(t).replace(/\./g,"")},gc=function(t){try{return Bp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function f4(t){return ra(void 0,t)}function ra(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!p4(n)||(t[n]=ra(t[n],e[n]));return t}function p4(t){return t!=="__proto__"}/**
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
 */function Zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const m4=()=>Zw().__FIREBASE_DEFAULTS__,g4=()=>{if(typeof process>"u"||typeof Qv>"u")return;const t=Qv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},v4=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gc(t[1]);return e&&JSON.parse(e)},Hp=()=>{try{return m4()||g4()||v4()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eE=()=>{var t;return(t=Hp())===null||t===void 0?void 0:t.config},_4=t=>{var e;return(e=Hp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function y4(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mc(JSON.stringify(n)),mc(JSON.stringify(o)),""].join(".")}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function tE(){var t;const e=(t=Hp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function w4(){return typeof window<"u"||nE()}function nE(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function E4(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ou(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iE(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sE(){return Qw.NODE_ADMIN===!0}function vc(){try{return typeof indexedDB=="object"}catch{return!1}}function C4(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const S4="FirebaseError";class lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=S4,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?I4(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new lt(i,a,r)}}function I4(t,e){return t.replace(T4,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const T4=/\{\$([^}]+)}/g;/**
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
 */function ia(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
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
 */const oE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ia(gc(s[0])||""),n=ia(gc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},k4=function(t){const e=oE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},x4=function(t){const e=oE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _c(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Zh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jv(s)&&Jv(o)){if(!Zh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jv(t){return t!==null&&typeof t=="object"}/**
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
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class b4{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function aE(t,e){const n=new N4(t,e);return n.subscribe.bind(n)}class N4{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");P4(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ed),i.error===void 0&&(i.error=Ed),i.complete===void 0&&(i.complete=Ed);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P4(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ed(){}/**
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
 */const L=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function ct(t,e){return`${t} failed: ${e} argument `}function Ae(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(ct(t,e)+"must be a valid function.")}function Xv(t,e,n,r){if(n&&(typeof n!="object"||n===null))throw new Error(ct(t,e)+"must be a valid context object.")}/**
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
 */const R4=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},au=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function D(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Br="[DEFAULT]";/**
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
 */class ef{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(O4(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:A4(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A4(t){return t===Br?void 0:t}function O4(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ef(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Kp=[];var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const lE={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},L4=Q.INFO,D4={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},M4=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=D4[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ra{constructor(e){this.name=e,this._logLevel=L4,this._logHandler=M4,this._userLogHandler=null,Kp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function F4(t){Kp.forEach(e=>{e.setLogLevel(t)})}function j4(t,e){for(const n of Kp){let r=null;e&&e.level&&(r=lE[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:Q[s].toLowerCase(),message:a,args:o,type:i.name})}}}const U4=(t,e)=>e.some(n=>t instanceof n);let Zv,e_;function W4(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z4(){return e_||(e_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cE=new WeakMap,tf=new WeakMap,uE=new WeakMap,Cd=new WeakMap,qp=new WeakMap;function $4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cE.set(n,t)}).catch(()=>{}),qp.set(e,t),e}function V4(t){if(tf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tf.set(t,e)}let nf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function B4(t){nf=t(nf)}function H4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sd(this),e,...n);return uE.set(r,e.sort?e.sort():[e]),fr(r)}:z4().includes(t)?function(...e){return t.apply(Sd(this),e),fr(cE.get(this))}:function(...e){return fr(t.apply(Sd(this),e))}}function G4(t){return typeof t=="function"?H4(t):(t instanceof IDBTransaction&&V4(t),U4(t,W4())?new Proxy(t,nf):t)}function fr(t){if(t instanceof IDBRequest)return $4(t);if(Cd.has(t))return Cd.get(t);const e=G4(t);return e!==t&&(Cd.set(t,e),qp.set(e,t)),e}const Sd=t=>qp.get(t);function Y4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fr(o.result),l.oldVersion,l.newVersion,fr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const K4=["get","getKey","getAll","getAllKeys","count"],q4=["put","add","delete","clear"],Id=new Map;function t_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Id.get(e))return Id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=q4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||K4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Id.set(e,s),s}B4(t=>({...t,get:(e,n,r)=>t_(e,n)||t.get(e,n,r),has:(e,n)=>!!t_(e,n)||t.has(e,n)}));/**
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
 */class Q4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J4(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wc="@firebase/app",rf="0.10.16";/**
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
 */const Mn=new Ra("@firebase/app"),X4="@firebase/app-compat",Z4="@firebase/analytics-compat",eb="@firebase/analytics",tb="@firebase/app-check-compat",nb="@firebase/app-check",rb="@firebase/auth",ib="@firebase/auth-compat",sb="@firebase/database",ob="@firebase/data-connect",ab="@firebase/database-compat",lb="@firebase/functions",cb="@firebase/functions-compat",ub="@firebase/installations",db="@firebase/installations-compat",hb="@firebase/messaging",fb="@firebase/messaging-compat",pb="@firebase/performance",mb="@firebase/performance-compat",gb="@firebase/remote-config",vb="@firebase/remote-config-compat",_b="@firebase/storage",yb="@firebase/storage-compat",wb="@firebase/firestore",Eb="@firebase/vertexai",Cb="@firebase/firestore-compat",Sb="firebase",Ib="11.0.2";/**
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
 */const Ir="[DEFAULT]",Tb={[wc]:"fire-core",[X4]:"fire-core-compat",[eb]:"fire-analytics",[Z4]:"fire-analytics-compat",[nb]:"fire-app-check",[tb]:"fire-app-check-compat",[rb]:"fire-auth",[ib]:"fire-auth-compat",[sb]:"fire-rtdb",[ob]:"fire-data-connect",[ab]:"fire-rtdb-compat",[lb]:"fire-fn",[cb]:"fire-fn-compat",[ub]:"fire-iid",[db]:"fire-iid-compat",[hb]:"fire-fcm",[fb]:"fire-fcm-compat",[pb]:"fire-perf",[mb]:"fire-perf-compat",[gb]:"fire-rc",[vb]:"fire-rc-compat",[_b]:"fire-gcs",[yb]:"fire-gcs-compat",[wb]:"fire-fst",[Cb]:"fire-fst-compat",[Eb]:"fire-vertex","fire-js":"fire-js",[Sb]:"fire-js-all"};/**
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
 */const Tr=new Map,vs=new Map,_s=new Map;function sa(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dE(t,e){t.container.addOrOverwriteComponent(e)}function kr(t){const e=t.name;if(_s.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;_s.set(e,t);for(const n of Tr.values())sa(n,t);for(const n of vs.values())sa(n,t);return!0}function hE(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kb(t,e,n=Ir){hE(t,e).clearInstance(n)}function fE(t){return t.options!==void 0}function me(t){return t.settings!==void 0}function xb(){_s.clear()}/**
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
 */const bb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new Si("app","Firebase",bb);/**
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
 */let pE=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}};/**
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
 */class Nb extends pE{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Kt(wc,rf,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Jp(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw At.create("server-app-deleted")}}/**
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
 */const Fr=Ib;function Qp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ir,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=eE()),!n)throw At.create("no-options");const s=Tr.get(i);if(s){if(Zh(n,s.options)&&Zh(r,s.config))return s;throw At.create("duplicate-app",{appName:i})}const o=new Yp(i);for(const l of _s.values())o.addComponent(l);const a=new pE(n,r,o);return Tr.set(i,a),a}function Pb(t,e){if(w4()&&!nE())throw At.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;fE(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((u,d)=>Math.imul(31,u)+d.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw At.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=vs.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new Yp(s);for(const c of _s.values())a.addComponent(c);const l=new Nb(n,e,s,a);return vs.set(s,l),l}function Rb(t=Ir){const e=Tr.get(t);if(!e&&t===Ir&&eE())return Qp();if(!e)throw At.create("no-app",{appName:t});return e}function Ab(){return Array.from(Tr.values())}async function Jp(t){let e=!1;const n=t.name;Tr.has(n)?(e=!0,Tr.delete(n)):vs.has(n)&&t.decRefCount()<=0&&(vs.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Kt(t,e,n){var r;let i=(r=Tb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}kr(new Dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function mE(t,e){if(t!==null&&typeof t!="function")throw At.create("invalid-log-argument");j4(t,e)}function gE(t){F4(t)}/**
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
 */const Ob="firebase-heartbeat-database",Lb=1,oa="firebase-heartbeat-store";let Td=null;function vE(){return Td||(Td=Y4(Ob,Lb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Td}async function Db(t){try{const n=(await vE()).transaction(oa),r=await n.objectStore(oa).get(_E(t));return await n.done,r}catch(e){if(e instanceof lt)Mn.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function n_(t,e){try{const r=(await vE()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,_E(t)),await r.done}catch(n){if(n instanceof lt)Mn.warn(n.message);else{const r=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function _E(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mb=1024,Fb=30*24*60*60*1e3;class jb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=r_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Fb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=r_(),{heartbeatsToSend:r,unsentEntries:i}=Ub(this._heartbeatsCache.heartbeats),s=mc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mn.warn(n),""}}}function r_(){return new Date().toISOString().substring(0,10)}function Ub(t,e=Mb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),i_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),i_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vc()?C4().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Db(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function i_(t){return mc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zb(t){kr(new Dt("platform-logger",e=>new Q4(e),"PRIVATE")),kr(new Dt("heartbeat",e=>new jb(e),"PRIVATE")),Kt(wc,rf,t),Kt(wc,rf,"esm2017"),Kt("fire-js","")}zb("");const $b=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:lt,SDK_VERSION:Fr,_DEFAULT_ENTRY_NAME:Ir,_addComponent:sa,_addOrOverwriteComponent:dE,_apps:Tr,_clearComponents:xb,_components:_s,_getProvider:hE,_isFirebaseApp:fE,_isFirebaseServerApp:me,_registerComponent:kr,_removeServiceInstance:kb,_serverApps:vs,deleteApp:Jp,getApp:Rb,getApps:Ab,initializeApp:Qp,initializeServerApp:Pb,onLog:mE,registerVersion:Kt,setLogLevel:gE},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Vb{constructor(e,n){this._delegate=e,this.firebase=n,sa(e,new Dt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Jp(this._delegate)))}_getService(e,n=Ir){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ir){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){sa(this._delegate,e)}_addOrOverwriteComponent(e){dE(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Bb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},s_=new Si("app-compat","Firebase",Bb);/**
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
 */function Hb(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Kt,setLogLevel:gE,onLog:mE,apps:null,SDK_VERSION:Fr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:$b}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ir,!wt(e,c))throw s_.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,u={}){const d=Qp(c,u);if(wt(e,d.name))return e[d.name];const f=new t(d,n);return e[d.name]=f,f}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const u=c.name,d=u.replace("-compat","");if(kr(c)&&c.type==="PUBLIC"){const f=(m=i())=>{if(typeof m[d]!="function")throw s_.create("invalid-app-argument",{appName:u});return m[d]()};c.serviceProps!==void 0&&ra(f,c.serviceProps),n[d]=f,t.prototype[d]=function(...m){return this._getService.bind(this,u).apply(this,c.multipleInstances?m:[])}}return c.type==="PUBLIC"?n[d]:null}function l(c,u){return u==="serverAuth"?null:u}return n}/**
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
 */function yE(){const t=Hb(Vb);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:yE,extendNamespace:e,createSubscribe:aE,ErrorFactory:Si,deepExtend:ra});function e(n){ra(t,n)}return t}const Gb=yE();/**
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
 */const o_=new Ra("@firebase/app-compat"),Yb="@firebase/app-compat",Kb="0.2.46";/**
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
 */function qb(t){Kt(Yb,Kb,t)}/**
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
 */try{const t=Zw();if(t.firebase!==void 0){o_.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&o_.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const _n=Gb;qb();var Qb="firebase",Jb="11.0.2";/**
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
 */_n.registerVersion(Qb,Jb,"app-compat");var a_={};const l_="@firebase/database",c_="1.0.10";/**
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
 */let wE="";function EE(t){wE=t}/**
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
 */class Xb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ia(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Zb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const CE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Xb(e)}}catch{}return new Zb},Qr=CE("localStorage"),sf=CE("sessionStorage");/**
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
 */const ns=new Ra("@firebase/database"),SE=function(){let t=1;return function(){return t++}}(),IE=function(t){const e=R4(t),n=new b4;n.update(e);const r=n.digest();return Bp.encodeByteArray(r)},Aa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Aa.apply(null,r):typeof r=="object"?e+=Te(r):e+=r,e+=" "}return e};let ni=null,u_=!0;const TE=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ns.logLevel=Q.VERBOSE,ni=ns.log.bind(ns),e&&sf.set("logging_enabled",!0)):typeof t=="function"?ni=t:(ni=null,sf.remove("logging_enabled"))},Le=function(...t){if(u_===!0&&(u_=!1,ni===null&&sf.get("logging_enabled")===!0&&TE(!0)),ni){const e=Aa.apply(null,t);ni(e)}},Oa=function(t){return function(...e){Le(t,...e)}},of=function(...t){const e="FIREBASE INTERNAL ERROR: "+Aa(...t);ns.error(e)},mn=function(...t){const e=`FIREBASE FATAL ERROR: ${Aa(...t)}`;throw ns.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+Aa(...t);ns.warn(e)},eN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xr="[MIN_NAME]",Fn="[MAX_NAME]",Ti=function(t,e){if(t===e)return 0;if(t===xr||e===Fn)return-1;if(e===xr||t===Fn)return 1;{const n=d_(t),r=d_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nN=function(t,e){return t===e?0:t<e?-1:1},Js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},Xp=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Te(e[r]),n+=":",n+=Xp(t[e[r]]);return n+="}",n},kE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xE=function(t){x(!lu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},rN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const oN=new RegExp("^-?(0*)\\d{1,10}$"),aN=-2147483648,lN=2147483647,d_=function(t){if(oN.test(t)){const e=Number(t);if(e>=aN&&e<=lN)return e}return null},Os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},cN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ko=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class uN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class dN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rs.OWNER="owner";/**
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
 */const Zp="5",bE="v",NE="s",PE="r",RE="f",AE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,OE="ls",LE="p",af="ac",DE="websocket",ME="long_polling";/**
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
 */class FE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jE(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===DE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ME)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hN(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class fN{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return f4(this.counters_)}}/**
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
 */const kd={},xd={};function em(t){const e=t.toString();return kd[e]||(kd[e]=new fN),kd[e]}function pN(t,e){const n=t.toString();return xd[n]||(xd[n]=e()),xd[n]}/**
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
 */class mN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Os(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const h_="start",gN="close",vN="pLPCommand",_N="pRTLPCB",UE="id",WE="pw",zE="ser",yN="cb",wN="seg",EN="ts",CN="d",SN="dframe",$E=1870,VE=30,IN=$E-VE,TN=25e3,kN=3e4;class tr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Oa(e),this.stats_=em(n),this.urlFn=l=>(this.appCheckToken&&(l[af]=this.appCheckToken),jE(n,ME,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kN)),tN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tm((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===h_)this.id=a,this.password=l;else if(o===gN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[h_]="t",r[zE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[yN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bE]=Zp,this.transportSessionId&&(r[NE]=this.transportSessionId),this.lastSessionId&&(r[OE]=this.lastSessionId),this.applicationId&&(r[LE]=this.applicationId),this.appCheckToken&&(r[af]=this.appCheckToken),typeof location<"u"&&location.hostname&&AE.test(location.hostname)&&(r[PE]=RE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){tr.forceAllow_=!0}static forceDisallow(){tr.forceDisallow_=!0}static isAvailable(){return tr.forceAllow_?!0:!tr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rN()&&!iN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Xw(n),i=kE(r,IN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[SN]="t",r[UE]=e,r[WE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SE(),window[vN+this.uniqueCallbackIdentifier]=e,window[_N+this.uniqueCallbackIdentifier]=n,this.myIFrame=tm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[UE]=this.myID,e[WE]=this.myPW,e[zE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+VE+r.length<=$E;){const o=this.pendingSegs.shift();r=r+"&"+wN+i+"="+o.seg+"&"+EN+i+"="+o.ts+"&"+CN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(TN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const xN=16384,bN=45e3;let Ec=null;typeof MozWebSocket<"u"?Ec=MozWebSocket:typeof WebSocket<"u"&&(Ec=WebSocket);class xt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Oa(this.connId),this.stats_=em(n),this.connURL=xt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[bE]=Zp,typeof location<"u"&&location.hostname&&AE.test(location.hostname)&&(o[PE]=RE),n&&(o[NE]=n),r&&(o[OE]=r),i&&(o[af]=i),s&&(o[LE]=s),jE(e,DE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qr.set("previous_websocket_failure",!0);try{let r;sE(),this.mySock=new Ec(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ec!==null&&!xt.forceDisallow_}static previouslyFailed(){return Qr.isInMemoryStorage||Qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ia(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kE(n,xN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
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
 */class ys{static get ALL_TRANSPORTS(){return[tr,xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=xt&&xt.isAvailable();let r=n&&!xt.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xt];else{const i=this.transports_=[];for(const s of ys.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ys.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ys.globalTransportInitialized_=!1;/**
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
 */const NN=6e4,PN=5e3,RN=10*1024,AN=100*1024,bd="t",f_="d",ON="s",p_="r",LN="e",m_="o",g_="a",v_="n",__="p",DN="h";class MN{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Oa("c:"+this.id+":"),this.transportManager_=new ys(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ko(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bd in e){const n=e[bd];n===g_?this.upgradeIfSecondaryHealthy_():n===p_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===m_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Js("t",e),r=Js("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:__,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:g_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:v_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Js("t",e),r=Js("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Js(bd,e);if(f_ in e){const r=e[f_];if(n===DN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===v_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ON?this.onConnectionShutdown_(r):n===p_?this.onReset_(r):n===LN?of("Server Error: "+r):n===m_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):of("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zp!==r&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ko(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(NN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ko(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:__,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class BE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class HE{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Cc extends HE{static getInstance(){return new Cc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const y_=32,w_=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new q("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function br(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function nm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function FN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function aa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function GE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function qe(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return qe(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jN(t,e){const n=aa(t,0),r=aa(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ti(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function rm(t,e){if(br(t)!==br(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Nt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(br(t)>br(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class UN{constructor(e,n){this.errorPrefix_=n,this.parts_=aa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=au(this.parts_[r]);YE(this)}}function WN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=au(e),YE(t)}function zN(t){const e=t.parts_.pop();t.byteLength_-=au(e),t.parts_.length>0&&(t.byteLength_-=1)}function YE(t){if(t.byteLength_>w_)throw new Error(t.errorPrefix_+"has a key path longer than "+w_+" bytes ("+t.byteLength_+").");if(t.parts_.length>y_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+y_+") or object contains a cycle "+Hr(t))}function Hr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class im extends HE{static getInstance(){return new im}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xs=1e3,$N=60*5*1e3,E_=30*1e3,VN=1.3,BN=3e4,HN="server_kill",C_=3;class bn extends BE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=bn.nextPersistentConnectionId_++,this.log_=Oa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xs,this.maxReconnectDelay_=$N,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!sE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");im.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Te(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new tt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;bn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const r=hi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||x4(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=E_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=k4(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):of("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BN&&(this.reconnectDelay_=Xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new MN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Ge(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(HN)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ge(d),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_c(this.interruptReasons_)&&(this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Xp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=C_&&(this.reconnectDelay_=E_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=C_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+wE.replace(/\./g,"-")]=1,Gp()?e["framework.cordova"]=1:ou()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cc.getInstance().currentlyOnline();return _c(this.interruptReasons_)&&e}}bn.nextPersistentConnectionId_=0;bn.nextConnectionId_=0;/**
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
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
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
 */class cu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(xr,e),i=new W(xr,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
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
 */let _l;class KE extends cu{static get __EMPTY_NODE(){return _l}static set __EMPTY_NODE(e){_l=e}compare(e,n){return Ti(e.name,n.name)}isDefinedOn(e){throw As("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(Fn,_l)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,_l)}toString(){return".key"}}const fn=new KE;/**
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
 */class yl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??it.EMPTY_NODE,this.right=s??it.EMPTY_NODE}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return it.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return it.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class GN{copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class it{constructor(e,n=it.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new it(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new it(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yl(this.root_,null,this.comparator_,!0,e)}}it.EMPTY_NODE=new GN;/**
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
 */function YN(t,e){return Ti(t.name,e.name)}function sm(t,e){return Ti(t,e)}/**
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
 */let lf;function KN(t){lf=t}const qE=function(t){return typeof t=="number"?"number:"+xE(t):"string:"+t},QE=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else x(t===lf||t.isEmpty(),"priority of unexpected type.");x(t===lf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let S_;class Pe{static set __childrenNodeConstructor(e){S_=e}static get __childrenNodeConstructor(){return S_}constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),QE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:F(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||br(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xE(this.value_):e+=this.value_,this.lazyHash_=IE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(n),s=Pe.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let JE,XE;function qN(t){JE=t}function QN(t){XE=t}class JN extends cu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ti(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(Fn,new Pe("[PRIORITY-POST]",XE))}makePost(e,n){const r=JE(e);return new W(n,new Pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const te=new JN;/**
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
 */const XN=Math.log(2);class ZN{constructor(e){const n=s=>parseInt(Math.log(s)/XN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sc=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Oe(f,d.node,Oe.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),y=i(m+1,c);return d=t[m],f=n?n(d):d,new Oe(f,d.node,Oe.BLACK,_,y)}},s=function(l){let c=null,u=null,d=t.length;const f=function(_,y){const E=d-_,g=d;d-=_;const p=i(E+1,g),v=t[E],C=n?n(v):v;m(new Oe(C,v.node,y,null,p))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));y?f(E,Oe.BLACK):(f(E,Oe.BLACK),f(E,Oe.RED))}return u},o=new ZN(t.length),a=s(o);return new it(r||e,a)};/**
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
 */let Nd;const Ri={};class Sn{static get Default(){return x(Ri&&te,"ChildrenNode.ts has not been loaded"),Nd=Nd||new Sn({".priority":Ri},{".priority":te}),Nd}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof it?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==fn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Sc(r,e.getCompare()):a=Ri;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Sn(u,c)}addToIndexes(e,n){const r=yc(this.indexes_,(i,s)=>{const o=hi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Ri)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Sc(a,o.getCompare())}else return Ri;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new Sn(r,this.indexSet_)}removeFromIndexes(e,n){const r=yc(this.indexes_,i=>{if(i===Ri)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new Sn(r,this.indexSet_)}}/**
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
 */let Zs;class O{static get EMPTY_NODE(){return Zs||(Zs=new O(new it(sm),null,Sn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&QE(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zs}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zs:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Zs:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{x(F(e)!==".priority"||br(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(te,(o,a)=>{n[o]=a.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qE(this.getPriority().val())+":"),this.forEachChild(te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":IE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===La?-1:0}withIndex(e){if(e===fn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(te),i=n.getIterator(te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fn?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eP extends O{constructor(){super(new it(sm),O.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const La=new eP;Object.defineProperties(W,{MIN:{value:new W(xr,O.EMPTY_NODE)},MAX:{value:new W(Fn,La)}});KE.__EMPTY_NODE=O.EMPTY_NODE;Pe.__childrenNodeConstructor=O;KN(La);QN(La);/**
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
 */const tP=!0;function ue(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,ue(e))}if(!(t instanceof Array)&&tP){const n=[];let r=!1;if(Fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ue(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return O.EMPTY_NODE;const s=Sc(n,YN,o=>o.name,sm);if(r){const o=Sc(n,te.getCompare());return new O(s,ue(e),new Sn({".priority":o},{".priority":te}))}else return new O(s,ue(e),Sn.Default)}else{let n=O.EMPTY_NODE;return Fe(t,(r,i)=>{if(wt(t,r)&&r.substring(0,1)!=="."){const s=ue(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ue(e))}}qN(ue);/**
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
 */class om extends cu{constructor(e){super(),this.indexPath_=e,x(!j(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ti(e.name,n.name):s}makePost(e,n){const r=ue(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,La);return new W(Fn,e)}toString(){return aa(this.indexPath_,0).join("/")}}/**
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
 */class nP extends cu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ti(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=ue(e);return new W(n,r)}toString(){return".value"}}const am=new nP;/**
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
 */function ZE(t){return{type:"value",snapshotNode:t}}function ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function la(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ca(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(la(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ws(n,r)):o.trackChildChange(ca(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(te,(i,s)=>{n.hasChild(i)||r.trackChildChange(la(i,s))}),n.isLeafNode()||n.forEachChild(te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ca(i,s,o))}else r.trackChildChange(ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ua{constructor(e){this.indexedFilter_=new lm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ua.getStartPost_(e),this.endPost_=ua.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(te,(o,a)=>{s.matches(new W(o,a))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class iP{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ua(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new W(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(u&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(ca(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(la(n,d));const y=a.updateImmediateChild(n,O.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ws(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(la(c.name,c.node)),s.trackChildChange(ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
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
 */class uu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xr}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new uu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sP(t){return t.loadsAllData()?new lm(t.getIndex()):t.hasLimit()?new iP(t):new ua(t)}function oP(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function aP(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function cf(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function lP(t,e,n){let r;return t.index_===fn||n?r=cf(t,e,n):r=cf(t,e,Fn),r.startAfterSet_=!0,r}function uf(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function cP(t,e,n){let r;return t.index_===fn||n?r=uf(t,e,n):r=uf(t,e,xr),r.endBeforeSet_=!0,r}function du(t,e){const n=t.copy();return n.index_=e,n}function I_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===te?n="$priority":t.index_===am?n="$value":t.index_===fn?n="$key":(x(t.index_ instanceof om,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Te(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Te(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Te(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function T_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
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
 */class Ic extends BE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Oa("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ic.getListenId_(e,r),a={};this.listens_[o]=a;const l=I_(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),hi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=Ic.getListenId_(e,n);delete this.listens_[r]}get(e){const n=I_(e._queryParams),r=e._path.toString(),i=new tt;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ia(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class uP{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Tc(){return{value:null,children:new Map}}function Ls(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Tc());const i=t.children.get(r);e=X(e),Ls(i,e,n)}}function df(t,e){if(j(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(te,(r,i)=>{Ls(t,new q(r),i)}),df(t,e)}}else if(t.children.size>0){const n=F(e);return e=X(e),t.children.has(n)&&df(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function hf(t,e,n){t.value!==null?n(e,t.value):dP(t,(r,i)=>{const s=new q(e.toString()+"/"+r);hf(i,s,n)})}function dP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class hP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const k_=10*1e3,fP=30*1e3,pP=5*60*1e3;class mP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hP(e);const r=k_+(fP-k_)*Math.random();ko(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Fe(e,(i,s)=>{s>0&&wt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ko(this.reportStats_.bind(this),Math.floor(Math.random()*2*pP))}}/**
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
 */var Ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function cm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function um(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class kc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ht.ACK_USER_WRITE,this.source=cm()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new kc(K(),n,this.revert)}}else return x(F(this.path)===e,"operationForChild called for unrelated child."),new kc(X(this.path),this.affectedTree,this.revert)}}/**
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
 */class da{constructor(e,n){this.source=e,this.path=n,this.type=Ht.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new da(this.source,K()):new da(this.source,X(this.path))}}/**
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
 */class fi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ht.OVERWRITE}operationForChild(e){return j(this.path)?new fi(this.source,K(),this.snap.getImmediateChild(e)):new fi(this.source,X(this.path),this.snap)}}/**
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
 */class Es{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ht.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new fi(this.source,K(),n.value):new Es(this.source,K(),n)}else return x(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Nr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class gP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(rP(o.childName,o.snapshotNode))}),eo(t,i,"child_removed",e,r,n),eo(t,i,"child_added",e,r,n),eo(t,i,"child_moved",s,r,n),eo(t,i,"child_changed",e,r,n),eo(t,i,"value",e,r,n),i}function eo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>yP(t,a,l)),o.forEach(a=>{const l=_P(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function _P(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yP(t,e,n){if(e.childName==null||n.childName==null)throw As("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function hu(t,e){return{eventCache:t,serverCache:e}}function xo(t,e,n,r){return hu(new Nr(e,n,r),t.serverCache)}function e2(t,e,n,r){return hu(t.eventCache,new Nr(e,n,r))}function xc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Pd;const wP=()=>(Pd||(Pd=new it(nN)),Pd);class Z{static fromObject(e){let n=new Z(null);return Fe(e,(r,i)=>{n=n.set(new q(r),i)}),n}constructor(e,n=wP()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(j(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:ae(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new Z(null)}}set(e,n){if(j(e))return new Z(n,this.children);{const r=F(e),s=(this.children.get(r)||new Z(null)).set(X(e),n),o=this.children.insert(r,s);return new Z(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Z(null):new Z(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(j(e))return n;{const r=F(e),s=(this.children.get(r)||new Z(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Z(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(X(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),ae(n,i),r):new Z(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new Z(null))}}function bo(t,e,n){if(j(e))return new qt(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=qe(i,e);return s=s.updateChild(o,n),new qt(t.writeTree_.set(i,s))}else{const i=new Z(n),s=t.writeTree_.setTree(e,i);return new qt(s)}}}function ff(t,e,n){let r=t;return Fe(n,(i,s)=>{r=bo(r,ae(e,i),s)}),r}function x_(t,e){if(j(e))return qt.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new qt(n)}}function pf(t,e){return ki(t,e)!=null}function ki(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qe(n.path,e)):null}function b_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function pr(t,e){if(j(e))return t;{const n=ki(t,e);return n!=null?new qt(new Z(n)):new qt(t.writeTree_.subtree(e))}}function mf(t){return t.writeTree_.isEmpty()}function Cs(t,e){return t2(K(),t.writeTree_,e)}function t2(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=t2(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
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
 */function fu(t,e){return s2(e,t)}function EP(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=bo(t.visibleWrites,e,n)),t.lastWriteId=r}function CP(t,e,n,r){x(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ff(t.visibleWrites,e,n),t.lastWriteId=r}function SP(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function IP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&TP(a,r.path)?i=!1:Nt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return kP(t),!0;if(r.snap)t.visibleWrites=x_(t.visibleWrites,r.path);else{const a=r.children;Fe(a,l=>{t.visibleWrites=x_(t.visibleWrites,ae(r.path,l))})}return!0}else return!1}function TP(t,e){if(t.snap)return Nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Nt(ae(t.path,n),e))return!0;return!1}function kP(t){t.visibleWrites=n2(t.allWrites,xP,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xP(t){return t.visible}function n2(t,e,n){let r=qt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Nt(n,o)?(a=qe(n,o),r=bo(r,a,s.snap)):Nt(o,n)&&(a=qe(o,n),r=bo(r,K(),s.snap.getChild(a)));else if(s.children){if(Nt(n,o))a=qe(n,o),r=ff(r,a,s.children);else if(Nt(o,n))if(a=qe(o,n),j(a))r=ff(r,K(),s.children);else{const l=hi(s.children,F(a));if(l){const c=l.getChild(X(a));r=bo(r,K(),c)}}}else throw As("WriteRecord should have .snap or .children")}}return r}function r2(t,e,n,r,i){if(!r&&!i){const s=ki(t.visibleWrites,e);if(s!=null)return s;{const o=pr(t.visibleWrites,e);if(mf(o))return n;if(n==null&&!pf(o,K()))return null;{const a=n||O.EMPTY_NODE;return Cs(o,a)}}}else{const s=pr(t.visibleWrites,e);if(!i&&mf(s))return n;if(!i&&n==null&&!pf(s,K()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Nt(c.path,e)||Nt(e,c.path))},a=n2(t.allWrites,o,e),l=n||O.EMPTY_NODE;return Cs(a,l)}}}function bP(t,e,n){let r=O.EMPTY_NODE;const i=ki(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pr(t.visibleWrites,e);return n.forEachChild(te,(o,a)=>{const l=Cs(pr(s,new q(o)),a);r=r.updateImmediateChild(o,l)}),b_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pr(t.visibleWrites,e);return b_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function NP(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(pf(t.visibleWrites,s))return null;{const o=pr(t.visibleWrites,s);return mf(o)?i.getChild(n):Cs(o,i.getChild(n))}}function PP(t,e,n,r){const i=ae(e,n),s=ki(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pr(t.visibleWrites,i);return Cs(o,r.getNode().getImmediateChild(n))}else return null}function RP(t,e){return ki(t.visibleWrites,e)}function AP(t,e,n,r,i,s,o){let a;const l=pr(t.visibleWrites,e),c=ki(l,K());if(c!=null)a=c;else if(n!=null)a=Cs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&u.length<i;)d(m,r)!==0&&u.push(m),m=f.getNext();return u}else return[]}function OP(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function bc(t,e,n,r){return r2(t.writeTree,t.treePath,e,n,r)}function hm(t,e){return bP(t.writeTree,t.treePath,e)}function N_(t,e,n,r){return NP(t.writeTree,t.treePath,e,n,r)}function Nc(t,e){return RP(t.writeTree,ae(t.treePath,e))}function LP(t,e,n,r,i,s){return AP(t.writeTree,t.treePath,e,n,r,i,s)}function fm(t,e,n){return PP(t.writeTree,t.treePath,e,n)}function i2(t,e){return s2(ae(t.treePath,e),t.writeTree)}function s2(t,e){return{treePath:t,writeTree:e}}/**
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
 */class DP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ca(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,la(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ca(r,e.snapshotNode,i.oldSnap));else throw As("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class MP{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const o2=new MP;class pm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pi(this.viewCache_),s=LP(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function FP(t){return{filter:t}}function jP(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function UP(t,e,n,r,i){const s=new DP;let o,a;if(n.type===Ht.OVERWRITE){const c=n;c.source.fromUser?o=gf(t,e,c.path,c.snap,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=Pc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Ht.MERGE){const c=n;c.source.fromUser?o=zP(t,e,c.path,c.children,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vf(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Ht.ACK_USER_WRITE){const c=n;c.revert?o=BP(t,e,c.path,r,i,s):o=$P(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Ht.LISTEN_COMPLETE)o=VP(t,e,n.path,r,s);else throw As("Unknown operation type: "+n.type);const l=s.getChanges();return WP(e,o,l),{viewCache:o,changes:l}}function WP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=xc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ZE(xc(e)))}}function a2(t,e,n,r,i,s){const o=e.eventCache;if(Nc(r,n)!=null)return e;{let a,l;if(j(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pi(e),u=c instanceof O?c:O.EMPTY_NODE,d=hm(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=bc(r,pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=F(n);if(c===".priority"){x(br(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=N_(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=X(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=N_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=fm(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return xo(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Pc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),m,null)}else{const m=F(n);if(!l.isCompleteForPath(n)&&br(n)>1)return e;const _=X(n),E=l.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),m,E,_,o2,null)}const d=e2(e,c,l.isFullyInitialized()||j(n),u.filtersNodes()),f=new pm(i,d,s);return a2(t,d,n,i,f,a)}function gf(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new pm(i,e,s);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=xo(e,c,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=xo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=X(n),m=a.getNode().getImmediateChild(d);let _;if(j(f))_=r;else{const y=u.getCompleteChild(d);y!=null?nm(f)===".priority"&&y.getChild(GE(f)).isEmpty()?_=y:_=y.updateChild(f,r):_=O.EMPTY_NODE}if(m.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),d,_,f,u,o);l=xo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function P_(t,e){return t.eventCache.isCompleteForChild(e)}function zP(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ae(n,l);P_(e,F(u))&&(a=gf(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ae(n,l);P_(e,F(u))||(a=gf(t,a,u,c,i,s,o))}),a}function R_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function vf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;j(n)?c=r:c=new Z(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=R_(t,m,f);l=Pc(t,l,new q(d),_,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),y=R_(t,_,f);l=Pc(t,l,new q(d),y,i,s,o,a)}}),l}function $P(t,e,n,r,i,s,o){if(Nc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Pc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(j(n)){let c=new Z(null);return l.getNode().forEachChild(fn,(u,d)=>{c=c.set(new q(u),d)}),vf(t,e,n,c,i,s,a,o)}else return e}else{let c=new Z(null);return r.foreach((u,d)=>{const f=ae(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),vf(t,e,n,c,i,s,a,o)}}function VP(t,e,n,r,i){const s=e.serverCache,o=e2(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return a2(t,o,n,r,o2,i)}function BP(t,e,n,r,i,s){let o;if(Nc(r,n)!=null)return e;{const a=new pm(r,e,i),l=e.eventCache.getNode();let c;if(j(n)||F(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=bc(r,pi(e));else{const d=e.serverCache.getNode();x(d instanceof O,"serverChildren would be complete if leaf node"),u=hm(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=F(n);let d=fm(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,X(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,O.EMPTY_NODE,X(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bc(r,pi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Nc(r,K())!=null,xo(e,c,o,t.filter.filtersNodes())}}/**
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
 */class HP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new lm(r.getIndex()),s=sP(r);this.processor_=FP(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(O.EMPTY_NODE,a.getNode(),null),u=new Nr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Nr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=hu(d,u),this.eventGenerator_=new gP(this.query_)}get query(){return this.query_}}function GP(t){return t.viewCache_.serverCache.getNode()}function YP(t){return xc(t.viewCache_)}function KP(t,e){const n=pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function A_(t){return t.eventRegistrations_.length===0}function qP(t,e){t.eventRegistrations_.push(e)}function O_(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function L_(t,e,n,r){e.type===Ht.MERGE&&e.source.queryId!==null&&(x(pi(t.viewCache_),"We should always have a full cache before handling merges"),x(xc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=UP(t.processor_,i,e,n,r);return jP(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,l2(t,s.changes,s.viewCache.eventCache.getNode(),null)}function QP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(s,o)=>{r.push(ws(s,o))}),n.isFullyInitialized()&&r.push(ZE(n.getNode())),l2(t,r,n.getNode(),e)}function l2(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return vP(t.eventGenerator_,e,n,i)}/**
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
 */let Rc;class c2{constructor(){this.views=new Map}}function JP(t){x(!Rc,"__referenceConstructor has already been defined"),Rc=t}function XP(){return x(Rc,"Reference.ts has not been loaded"),Rc}function ZP(t){return t.views.size===0}function mm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),L_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(L_(o,e,n,r));return s}}function u2(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=bc(n,i?r:null),l=!1;a?l=!0:r instanceof O?(a=hm(n,r),l=!1):(a=O.EMPTY_NODE,l=!1);const c=hu(new Nr(a,l,!1),new Nr(r,i,!1));return new HP(e,c)}return o}function eR(t,e,n,r,i,s){const o=u2(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),qP(o,n),QP(o,n)}function tR(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Pr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(O_(c,n,r)),A_(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(O_(l,n,r)),A_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Pr(t)&&s.push(new(XP())(e._repo,e._path)),{removed:s,events:o}}function d2(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mr(t,e){let n=null;for(const r of t.views.values())n=n||KP(r,e);return n}function h2(t,e){if(e._queryParams.loadsAllData())return pu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function f2(t,e){return h2(t,e)!=null}function Pr(t){return pu(t)!=null}function pu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ac;function nR(t){x(!Ac,"__referenceConstructor has already been defined"),Ac=t}function rR(){return x(Ac,"Reference.ts has not been loaded"),Ac}let iR=1;class D_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=OP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gm(t,e,n,r,i){return EP(t.pendingWriteTree_,e,n,r,i),i?Ds(t,new fi(cm(),e,n)):[]}function sR(t,e,n,r){CP(t.pendingWriteTree_,e,n,r);const i=Z.fromObject(n);return Ds(t,new Es(cm(),e,i))}function nr(t,e,n=!1){const r=SP(t.pendingWriteTree_,e);if(IP(t.pendingWriteTree_,e)){let s=new Z(null);return r.snap!=null?s=s.set(K(),!0):Fe(r.children,o=>{s=s.set(new q(o),!0)}),Ds(t,new kc(r.path,s,n))}else return[]}function Da(t,e,n){return Ds(t,new fi(um(),e,n))}function oR(t,e,n){const r=Z.fromObject(n);return Ds(t,new Es(um(),e,r))}function aR(t,e){return Ds(t,new da(um(),e))}function lR(t,e,n){const r=vm(t,n);if(r){const i=_m(r),s=i.path,o=i.queryId,a=qe(s,e),l=new da(dm(o),a);return ym(t,s,l)}else return[]}function Oc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||f2(o,e))){const l=tR(o,e,n,r);ZP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>Pr(m));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=dR(f);for(let _=0;_<m.length;++_){const y=m[_],E=y.query,g=v2(t,y);t.listenProvider_.startListening(No(E),ha(t,E),g.hashFn,g.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(No(e),null):c.forEach(f=>{const m=t.queryToTagMap.get(gu(f));t.listenProvider_.stopListening(No(f),m)}))}hR(t,c)}return a}function p2(t,e,n,r){const i=vm(t,r);if(i!=null){const s=_m(i),o=s.path,a=s.queryId,l=qe(o,e),c=new fi(dm(a),l,n);return ym(t,o,c)}else return[]}function cR(t,e,n,r){const i=vm(t,r);if(i){const s=_m(i),o=s.path,a=s.queryId,l=qe(o,e),c=Z.fromObject(n),u=new Es(dm(a),l,c);return ym(t,o,u)}else return[]}function _f(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const _=qe(f,i);s=s||mr(m,_),o=o||Pr(m)});let a=t.syncPointTree_.get(i);a?(o=o||Pr(a),s=s||mr(a,K())):(a=new c2,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const y=mr(_,K());y&&(s=s.updateImmediateChild(m,y))}));const c=f2(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=gu(e);x(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=fR();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const u=fu(t.pendingWriteTree_,i);let d=eR(a,e,n,u,s,l);if(!c&&!o&&!r){const f=h2(a,e);d=d.concat(pR(t,e,f))}return d}function mu(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qe(o,e),c=mr(a,l);if(c)return c});return r2(i,e,s,n,!0)}function uR(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=qe(c,n);r=r||mr(u,d)});let i=t.syncPointTree_.get(n);i?r=r||mr(i,K()):(i=new c2,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Nr(r,!0,!1):null,a=fu(t.pendingWriteTree_,e._path),l=u2(i,e,a,s?o.getNode():O.EMPTY_NODE,s);return YP(l)}function Ds(t,e){return m2(e,t.syncPointTree_,null,fu(t.pendingWriteTree_,K()))}function m2(t,e,n,r){if(j(t.path))return g2(t,e,n,r);{const i=e.get(K());n==null&&i!=null&&(n=mr(i,K()));let s=[];const o=F(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=i2(r,o);s=s.concat(m2(a,l,c,u))}return i&&(s=s.concat(mm(i,t,r,n))),s}}function g2(t,e,n,r){const i=e.get(K());n==null&&i!=null&&(n=mr(i,K()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=i2(r,o),u=t.operationForChild(o);u&&(s=s.concat(g2(u,a,l,c)))}),i&&(s=s.concat(mm(i,t,r,n))),s}function v2(t,e){const n=e.query,r=ha(t,n);return{hashFn:()=>(GP(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?lR(t,n._path,r):aR(t,n._path);{const s=sN(i,n);return Oc(t,n,null,s)}}}}function ha(t,e){const n=gu(e);return t.queryToTagMap.get(n)}function gu(t){return t._path.toString()+"$"+t._queryIdentifier}function vm(t,e){return t.tagToQueryMap.get(e)}function _m(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function ym(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=fu(t.pendingWriteTree_,e);return mm(r,n,i,null)}function dR(t){return t.fold((e,n,r)=>{if(n&&Pr(n))return[pu(n)];{let i=[];return n&&(i=d2(n)),Fe(r,(s,o)=>{i=i.concat(o)}),i}})}function No(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(rR())(t._repo,t._path):t}function hR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=gu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function fR(){return iR++}function pR(t,e,n){const r=e._path,i=ha(t,e),s=v2(t,n),o=t.listenProvider_.startListening(No(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!Pr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!j(c)&&u&&Pr(u))return[pu(u).query];{let f=[];return u&&(f=f.concat(d2(u).map(m=>m.query))),Fe(d,(m,_)=>{f=f.concat(_)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(No(u),ha(t,u))}}return o}/**
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
 */class wm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wm(n)}node(){return this.node_}}class Em{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Em(this.syncTree_,n)}node(){return mu(this.syncTree_,this.path_)}}const mR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},M_=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return gR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vR(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},gR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},vR=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},_2=function(t,e,n,r){return Sm(e,new Em(n,t),r)},Cm=function(t,e,n){return Sm(t,new wm(e),n)};function Sm(t,e,n){const r=t.getPriority().val(),i=M_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=M_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Pe(a,ue(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Pe(i))),o.forEachChild(te,(a,l)=>{const c=Sm(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Im{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function vu(t,e){let n=e instanceof q?e:new q(e),r=t,i=F(n);for(;i!==null;){const s=hi(r.node.children,i)||{children:{},childCount:0};r=new Im(i,r,s),n=X(n),i=F(n)}return r}function xi(t){return t.node.value}function Tm(t,e){t.node.value=e,yf(t)}function y2(t){return t.node.childCount>0}function _R(t){return xi(t)===void 0&&!y2(t)}function _u(t,e){Fe(t.node.children,(n,r)=>{e(new Im(n,t,r))})}function w2(t,e,n,r){n&&!r&&e(t),_u(t,i=>{w2(i,e,!0,r)}),n&&r&&e(t)}function yR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ma(t){return new q(t.parent===null?t.name:Ma(t.parent)+"/"+t.name)}function yf(t){t.parent!==null&&wR(t.parent,t.name,t)}function wR(t,e,n){const r=_R(n),i=wt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,yf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yf(t))}/**
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
 */const ER=/[\[\].#$\/\u0000-\u001F\u007F]/,CR=/[\[\].#$\u0000-\u001F\u007F]/,Rd=10*1024*1024,yu=function(t){return typeof t=="string"&&t.length!==0&&!ER.test(t)},E2=function(t){return typeof t=="string"&&t.length!==0&&!CR.test(t)},SR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),E2(t)},fa=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!lu(t)||t&&typeof t=="object"&&wt(t,".sv")},gn=function(t,e,n,r){r&&e===void 0||Fa(ct(t,"value"),e,n)},Fa=function(t,e,n){const r=n instanceof q?new UN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Hr(r)+" with contents = "+e.toString());if(lu(e))throw new Error(t+"contains "+e.toString()+" "+Hr(r));if(typeof e=="string"&&e.length>Rd/3&&au(e)>Rd)throw new Error(t+"contains a string greater than "+Rd+" utf8 bytes "+Hr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Fe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!yu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WN(r,o),Fa(t,a,r),zN(r)}),i&&s)throw new Error(t+' contains ".value" child '+Hr(r)+" in addition to actual children.")}},IR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=aa(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!yu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jN);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Nt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},C2=function(t,e,n,r){const i=ct(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Fe(e,(o,a)=>{const l=new q(o);if(Fa(i,a,ae(n,l)),nm(l)===".priority"&&!fa(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),IR(i,s)},km=function(t,e,n){if(lu(e))throw new Error(ct(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!fa(e))throw new Error(ct(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},ja=function(t,e,n,r){if(n!==void 0&&!yu(n))throw new Error(ct(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},pa=function(t,e,n,r){if(!E2(n))throw new Error(ct(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pa(t,e,n)},Pt=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},S2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!SR(n))throw new Error(ct(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class kR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function I2(t,e,n){wu(t,n),T2(t,r=>rm(r,e))}function Et(t,e,n){wu(t,n),T2(t,r=>Nt(r,e)||Nt(e,r))}function T2(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(xR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ni&&Le("event: "+n.toString()),Os(r)}}}/**
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
 */const k2="repo_interrupt",bR=25;class NR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tc(),this.transactionQueueTree_=new Im,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PR(t,e,n){if(t.stats_=em(t.repoInfo_),t.forceRestClient_||cN())t.server_=new Ic(t.repoInfo_,(r,i,s,o)=>{F_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>j_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new bn(t.repoInfo_,e,(r,i,s,o)=>{F_(t,r,i,s,o)},r=>{j_(t,r)},r=>{RR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pN(t.repoInfo_,()=>new mP(t.stats_,t.server_)),t.infoData_=new uP,t.infoSyncTree_=new D_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Da(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),xm(t,"connected",!1),t.serverSyncTree_=new D_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Et(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function x2(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ua(t){return mR({timestamp:x2(t)})}function F_(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=yc(n,c=>ue(c));o=cR(t.serverSyncTree_,s,l,i)}else{const l=ue(n);o=p2(t.serverSyncTree_,s,l,i)}else if(r){const l=yc(n,c=>ue(c));o=oR(t.serverSyncTree_,s,l)}else{const l=ue(n);o=Da(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ss(t,s)),Et(t.eventQueue_,a,o)}function j_(t,e){xm(t,"connected",e),e===!1&&LR(t)}function RR(t,e){Fe(e,(n,r)=>{xm(t,n,r)})}function xm(t,e,n){const r=new q("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(r,i);const s=Da(t.infoSyncTree_,r,i);Et(t.eventQueue_,r,s)}function Eu(t){return t.nextWriteId_++}function AR(t,e,n){const r=uR(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ue(i).withIndex(e._queryParams.getIndex());_f(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Da(t.serverSyncTree_,e._path,s);else{const a=ha(t.serverSyncTree_,e);o=p2(t.serverSyncTree_,e._path,s,a)}return Et(t.eventQueue_,e._path,o),Oc(t.serverSyncTree_,e,n,null,!0),s},i=>(Ms(t,"get for query "+Te(e)+" failed: "+i),Promise.reject(new Error(i))))}function bm(t,e,n,r,i){Ms(t,"set",{path:e.toString(),value:n,priority:r});const s=Ua(t),o=ue(n,r),a=mu(t.serverSyncTree_,e),l=Cm(o,a,s),c=Eu(t),u=gm(t.serverSyncTree_,e,l,c,!0);wu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const _=f==="ok";_||Ge("set at "+e+" failed: "+f);const y=nr(t.serverSyncTree_,c,!_);Et(t.eventQueue_,e,y),Rr(t,i,f,m)});const d=Pm(t,e);Ss(t,d),Et(t.eventQueue_,d,[])}function OR(t,e,n,r){Ms(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ua(t),o={};if(Fe(n,(a,l)=>{i=!1,o[a]=_2(ae(e,a),ue(l),t.serverSyncTree_,s)}),i)Le("update() called with empty data.  Don't do anything."),Rr(t,r,"ok",void 0);else{const a=Eu(t),l=sR(t.serverSyncTree_,e,o,a);wu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Ge("update at "+e+" failed: "+c);const f=nr(t.serverSyncTree_,a,!d),m=f.length>0?Ss(t,e):e;Et(t.eventQueue_,m,f),Rr(t,r,c,u)}),Fe(n,c=>{const u=Pm(t,ae(e,c));Ss(t,u)}),Et(t.eventQueue_,e,[])}}function LR(t){Ms(t,"onDisconnectEvents");const e=Ua(t),n=Tc();hf(t.onDisconnect_,K(),(i,s)=>{const o=_2(i,s,t.serverSyncTree_,e);Ls(n,i,o)});let r=[];hf(n,K(),(i,s)=>{r=r.concat(Da(t.serverSyncTree_,i,s));const o=Pm(t,i);Ss(t,o)}),t.onDisconnect_=Tc(),Et(t.eventQueue_,K(),r)}function DR(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&df(t.onDisconnect_,e),Rr(t,n,r,i)})}function U_(t,e,n,r){const i=ue(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ls(t.onDisconnect_,e,i),Rr(t,r,s,o)})}function MR(t,e,n,r,i){const s=ue(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ls(t.onDisconnect_,e,s),Rr(t,i,o,a)})}function FR(t,e,n,r){if(_c(n)){Le("onDisconnect().update() called with empty data.  Don't do anything."),Rr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Fe(n,(o,a)=>{const l=ue(a);Ls(t.onDisconnect_,ae(e,o),l)}),Rr(t,r,i,s)})}function jR(t,e,n){let r;F(e._path)===".info"?r=_f(t.infoSyncTree_,e,n):r=_f(t.serverSyncTree_,e,n),I2(t.eventQueue_,e._path,r)}function wf(t,e,n){let r;F(e._path)===".info"?r=Oc(t.infoSyncTree_,e,n):r=Oc(t.serverSyncTree_,e,n),I2(t.eventQueue_,e._path,r)}function b2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(k2)}function UR(t){t.persistentConnection_&&t.persistentConnection_.resume(k2)}function Ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function Rr(t,e,n,r){e&&Os(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function WR(t,e,n,r,i,s){Ms(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:SE(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Nm(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Fa("transaction failed: Data returned ",l,o.path),o.status=0;const c=vu(t.transactionQueueTree_,e),u=xi(c)||[];u.push(o),Tm(c,u);let d;typeof l=="object"&&l!==null&&wt(l,".priority")?(d=hi(l,".priority"),x(fa(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(mu(t.serverSyncTree_,e)||O.EMPTY_NODE).getPriority().val();const f=Ua(t),m=ue(l,d),_=Cm(m,a,f);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=_,o.currentWriteId=Eu(t);const y=gm(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);Et(t.eventQueue_,e,y),Cu(t,t.transactionQueueTree_)}}function Nm(t,e,n){return mu(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Cu(t,e=t.transactionQueueTree_){if(e||Su(t,e),xi(e)){const n=P2(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zR(t,Ma(e),n)}else y2(e)&&_u(e,n=>{Cu(t,n)})}function zR(t,e,n){const r=n.map(c=>c.currentWriteId),i=Nm(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=qe(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ms(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(nr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Su(t,vu(t.transactionQueueTree_,e)),Cu(t,t.transactionQueueTree_),Et(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Os(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ss(t,e)}},o)}function Ss(t,e){const n=N2(t,e),r=Ma(n),i=P2(t,n);return $R(t,i,r),r}function $R(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qe(n,l.path);let u=!1,d;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(nr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=bR)u=!0,d="maxretry",i=i.concat(nr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Nm(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Fa("transaction failed: Data returned ",m,l.path);let _=ue(m);typeof m=="object"&&m!=null&&wt(m,".priority")||(_=_.updatePriority(f.getPriority()));const E=l.currentWriteId,g=Ua(t),p=Cm(_,f,g);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=p,l.currentWriteId=Eu(t),o.splice(o.indexOf(E),1),i=i.concat(gm(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(nr(t.serverSyncTree_,E,!0))}else u=!0,d="nodata",i=i.concat(nr(t.serverSyncTree_,l.currentWriteId,!0))}Et(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Su(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Os(r[a]);Cu(t,t.transactionQueueTree_)}function N2(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&xi(r)===void 0;)r=vu(r,n),e=X(e),n=F(e);return r}function P2(t,e){const n=[];return R2(t,e,n),n.sort((r,i)=>r.order-i.order),n}function R2(t,e,n){const r=xi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);_u(e,i=>{R2(t,i,n)})}function Su(t,e){const n=xi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Tm(e,n.length>0?n:void 0)}_u(e,r=>{Su(t,r)})}function Pm(t,e){const n=Ma(N2(t,e)),r=vu(t.transactionQueueTree_,e);return yR(r,i=>{Ad(t,i)}),Ad(t,r),w2(r,i=>{Ad(t,i)}),n}function Ad(t,e){const n=xi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(nr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Tm(e,void 0):n.length=s+1,Et(t.eventQueue_,Ma(e),i);for(let o=0;o<r.length;o++)Os(r[o])}}/**
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
 */function VR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function BR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ef=function(t,e){const n=HR(t),r=n.namespace;n.domain==="firebase.com"&&mn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new FE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},HR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=VR(t.substring(u,d)));const f=BR(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const W_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=W_.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=W_.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class A2{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class O2{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Rm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let YR=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new tt;return DR(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Pt("OnDisconnect.remove",this._path);const e=new tt;return U_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Pt("OnDisconnect.set",this._path),gn("OnDisconnect.set",e,this._path,!1);const n=new tt;return U_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Pt("OnDisconnect.setWithPriority",this._path),gn("OnDisconnect.setWithPriority",e,this._path,!1),km("OnDisconnect.setWithPriority",n);const r=new tt;return MR(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Pt("OnDisconnect.update",this._path),C2("OnDisconnect.update",e,this._path);const n=new tt;return FR(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
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
 */class ut{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:nm(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=T_(this._queryParams),n=Xp(e);return n==="{}"?"default":n}get _queryObject(){return T_(this._queryParams)}isEqual(e){if(e=D(e),!(e instanceof ut))return!1;const n=this._repo===e._repo,r=rm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+FN(this._path)}}function Iu(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function jr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===fn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==xr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Fn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===te){if(e!=null&&!fa(e)||n!=null&&!fa(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(x(t.getIndex()instanceof om||t.getIndex()===am,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Tu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class jt extends ut{constructor(e,n){super(e,n,new uu,!1)}get parent(){const e=GE(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let ku=class Cf{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=mi(this.ref,e);return new Cf(this._node.getChild(n),r,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Cf(i,mi(this.ref,r),te)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function L2(t,e){return t=D(t),t._checkNotDeleted("ref"),e!==void 0?mi(t._root,e):t._root}function z_(t,e){t=D(t),t._checkNotDeleted("refFromURL");const n=Ef(e,t._repo.repoInfo_.nodeAdmin);S2("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&mn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),L2(t,n.path.toString())}function mi(t,e){return t=D(t),F(t._path)===null?TR("child","path",e):pa("child","path",e),new jt(t._repo,ae(t._path,e))}function KR(t,e){t=D(t),Pt("push",t._path),gn("push",e,t._path,!0);const n=x2(t._repo),r=GR(n),i=mi(t,r),s=mi(t,r);let o;return e!=null?o=Am(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function qR(t){return Pt("remove",t._path),Am(t,null)}function Am(t,e){t=D(t),Pt("set",t._path),gn("set",e,t._path,!1);const n=new tt;return bm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function QR(t,e){t=D(t),Pt("setPriority",t._path),km("setPriority",e);const n=new tt;return bm(t._repo,ae(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function JR(t,e,n){if(Pt("setWithPriority",t._path),gn("setWithPriority",e,t._path,!1),km("setWithPriority",n),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new tt;return bm(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function XR(t,e){C2("update",e,t._path);const n=new tt;return OR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ZR(t){t=D(t);const e=new Rm(()=>{}),n=new Wa(e);return AR(t._repo,t,n).then(r=>new ku(r,new jt(t._repo,t._path),t._queryParams.getIndex()))}class Wa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new A2("value",this,new ku(e.snapshotNode,new jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new O2(this,e,n):null}matches(e){return e instanceof Wa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class xu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new O2(this,e,n):null}createEvent(e,n){x(e.childName!=null,"Child events should have a childName.");const r=mi(new jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new A2(e.type,this,new ku(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function za(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{wf(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Rm(n,s||void 0),a=e==="value"?new Wa(o):new xu(e,o);return jR(t._repo,t,a),()=>wf(t._repo,t,a)}function Sf(t,e,n,r){return za(t,"value",e,n,r)}function $_(t,e,n,r){return za(t,"child_added",e,n,r)}function V_(t,e,n,r){return za(t,"child_changed",e,n,r)}function B_(t,e,n,r){return za(t,"child_moved",e,n,r)}function H_(t,e,n,r){return za(t,"child_removed",e,n,r)}function G_(t,e,n){let r=null;const i=n?new Rm(n):null;e==="value"?r=new Wa(i):e&&(r=new xu(e,i)),wf(t._repo,t,r)}class Xt{}class D2 extends Xt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){gn("endAt",this._value,e._path,!0);const n=uf(e._queryParams,this._value,this._key);if(Tu(n),jr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ut(e._repo,e._path,n,e._orderByCalled)}}function eA(t,e){return ja("endAt","key",e),new D2(t,e)}class tA extends Xt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){gn("endBefore",this._value,e._path,!1);const n=cP(e._queryParams,this._value,this._key);if(Tu(n),jr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ut(e._repo,e._path,n,e._orderByCalled)}}function nA(t,e){return ja("endBefore","key",e),new tA(t,e)}class M2 extends Xt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){gn("startAt",this._value,e._path,!0);const n=cf(e._queryParams,this._value,this._key);if(Tu(n),jr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ut(e._repo,e._path,n,e._orderByCalled)}}function rA(t=null,e){return ja("startAt","key",e),new M2(t,e)}class iA extends Xt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){gn("startAfter",this._value,e._path,!1);const n=lP(e._queryParams,this._value,this._key);if(Tu(n),jr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ut(e._repo,e._path,n,e._orderByCalled)}}function sA(t,e){return ja("startAfter","key",e),new iA(t,e)}class oA extends Xt{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ut(e._repo,e._path,oP(e._queryParams,this._limit),e._orderByCalled)}}function aA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new oA(t)}class lA extends Xt{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ut(e._repo,e._path,aP(e._queryParams,this._limit),e._orderByCalled)}}function cA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new lA(t)}class uA extends Xt{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Iu(e,"orderByChild");const n=new q(this._path);if(j(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new om(n),i=du(e._queryParams,r);return jr(i),new ut(e._repo,e._path,i,!0)}}function dA(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return pa("orderByChild","path",t),new uA(t)}class hA extends Xt{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Iu(e,"orderByKey");const n=du(e._queryParams,fn);return jr(n),new ut(e._repo,e._path,n,!0)}}function fA(){return new hA}class pA extends Xt{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){Iu(e,"orderByPriority");const n=du(e._queryParams,te);return jr(n),new ut(e._repo,e._path,n,!0)}}function mA(){return new pA}class gA extends Xt{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){Iu(e,"orderByValue");const n=du(e._queryParams,am);return jr(n),new ut(e._repo,e._path,n,!0)}}function vA(){return new gA}class _A extends Xt{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(gn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new D2(this._value,this._key)._apply(new M2(this._value,this._key)._apply(e))}}function yA(t,e){return ja("equalTo","key",e),new _A(t,e)}function zt(t,...e){let n=D(t);for(const r of e)n=r._apply(n);return n}JP(jt);nR(jt);/**
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
 */const wA="FIREBASE_DATABASE_EMULATOR_HOST",If={};let EA=!1;function CA(t,e,n,r){t.repoInfo_=new FE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function F2(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ef(s,i),a=o.repoInfo,l,c;typeof process<"u"&&a_&&(c=a_[wA]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Ef(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new rs(rs.OWNER):new dN(t.name,t.options,e);S2("Invalid Firebase Database URL",o),j(o.path)||mn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=IA(a,t,u,new uN(t.name,n));return new TA(d,t)}function SA(t,e){const n=If[e];(!n||n[t.key]!==t)&&mn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),b2(t),delete n[t.key]}function IA(t,e,n,r){let i=If[e.name];i||(i={},If[e.name]=i);let s=i[t.toURLString()];return s&&mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new NR(t,EA,n,r),i[t.toURLString()]=s,s}let TA=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mn("Cannot call "+e+" on a deleted database.")}};function j2(){ys.IS_TRANSPORT_INITIALIZED&&Ge("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function kA(){j2(),tr.forceDisallow()}function xA(){j2(),xt.forceDisallow(),tr.forceAllow()}function bA(t,e,n,r={}){t=D(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&mn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new rs(rs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:y4(r.mockUserToken,t.app.options.projectId);s=new rs(o)}CA(i,e,n,s)}function NA(t){t=D(t),t._checkNotDeleted("goOffline"),b2(t._repo)}function PA(t){t=D(t),t._checkNotDeleted("goOnline"),UR(t._repo)}function RA(t,e){TE(t,e)}/**
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
 */function AA(t){EE(Fr),kr(new Dt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return F2(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Kt(l_,c_,t),Kt(l_,c_,"esm2017")}/**
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
 */const OA={".sv":"timestamp"};function LA(){return OA}function DA(t){return{".sv":{increment:t}}}/**
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
 */let MA=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function FA(t,e,n){var r;if(t=D(t),Pt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new tt,o=(l,c,u)=>{let d=null;l?s.reject(l):(d=new ku(u,new jt(t._repo,t._path),te),s.resolve(new MA(c,d)))},a=Sf(t,()=>{});return WR(t._repo,t._path,e,o,a,i),s.promise}bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AA();const jA="@firebase/database-compat",UA="2.0.1";/**
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
 */const WA=new Ra("@firebase/database-compat"),U2=function(t){const e="FIREBASE WARNING: "+t;WA.warn(e)};/**
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
 */const zA=function(t,e,n,r){if(n!==void 0&&typeof n!="boolean")throw new Error(ct(t,e)+"must be a boolean.")},$A=function(t,e,n){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(ct(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class VA{constructor(e){this._delegate=e}cancel(e){L("OnDisconnect.cancel",0,1,arguments.length),Ae("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){L("OnDisconnect.remove",0,1,arguments.length),Ae("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){L("OnDisconnect.set",1,2,arguments.length),Ae("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){L("OnDisconnect.setWithPriority",2,3,arguments.length),Ae("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(L("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,U2("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ae("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
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
 */class BA{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return L("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class gr{constructor(e,n){this._database=e,this._delegate=n}val(){return L("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return L("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return L("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return L("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return L("DataSnapshot.child",0,1,arguments.length),e=String(e),pa("DataSnapshot.child","path",e),new gr(this._database,this._delegate.child(e))}hasChild(e){return L("DataSnapshot.hasChild",1,1,arguments.length),pa("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return L("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return L("DataSnapshot.forEach",1,1,arguments.length),Ae("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new gr(this._database,n)))}hasChildren(){return L("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return L("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return L("DataSnapshot.ref",0,0,arguments.length),new ft(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class je{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;L("Query.on",2,4,arguments.length),Ae("Query.on","callback",n,!1);const o=je.getCancelAndContextArgs_("Query.on",r,i),a=(c,u)=>{n.call(o.context,new gr(this.database,c),u)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Sf(this._delegate,a,l),n;case"child_added":return $_(this._delegate,a,l),n;case"child_removed":return H_(this._delegate,a,l),n;case"child_changed":return V_(this._delegate,a,l),n;case"child_moved":return B_(this._delegate,a,l),n;default:throw new Error(ct("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(L("Query.off",0,3,arguments.length),$A("Query.off",e),Ae("Query.off","callback",n,!0),Xv("Query.off","context",r),n){const i=()=>{};i.userCallback=n,i.context=r,G_(this._delegate,e,i)}else G_(this._delegate,e)}get(){return ZR(this._delegate).then(e=>new gr(this.database,e))}once(e,n,r,i){L("Query.once",1,4,arguments.length),Ae("Query.once","callback",n,!0);const s=je.getCancelAndContextArgs_("Query.once",r,i),o=new tt,a=(c,u)=>{const d=new gr(this.database,c);n&&n.call(s.context,d,u),o.resolve(d)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":Sf(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":$_(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":H_(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":V_(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":B_(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(ct("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return L("Query.limitToFirst",1,1,arguments.length),new je(this.database,zt(this._delegate,aA(e)))}limitToLast(e){return L("Query.limitToLast",1,1,arguments.length),new je(this.database,zt(this._delegate,cA(e)))}orderByChild(e){return L("Query.orderByChild",1,1,arguments.length),new je(this.database,zt(this._delegate,dA(e)))}orderByKey(){return L("Query.orderByKey",0,0,arguments.length),new je(this.database,zt(this._delegate,fA()))}orderByPriority(){return L("Query.orderByPriority",0,0,arguments.length),new je(this.database,zt(this._delegate,mA()))}orderByValue(){return L("Query.orderByValue",0,0,arguments.length),new je(this.database,zt(this._delegate,vA()))}startAt(e=null,n){return L("Query.startAt",0,2,arguments.length),new je(this.database,zt(this._delegate,rA(e,n)))}startAfter(e=null,n){return L("Query.startAfter",0,2,arguments.length),new je(this.database,zt(this._delegate,sA(e,n)))}endAt(e=null,n){return L("Query.endAt",0,2,arguments.length),new je(this.database,zt(this._delegate,eA(e,n)))}endBefore(e=null,n){return L("Query.endBefore",0,2,arguments.length),new je(this.database,zt(this._delegate,nA(e,n)))}equalTo(e,n){return L("Query.equalTo",1,2,arguments.length),new je(this.database,zt(this._delegate,yA(e,n)))}toString(){return L("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return L("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(L("Query.isEqual",1,1,arguments.length),!(e instanceof je)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Ae(e,"cancel",i.cancel,!0),i.context=r,Xv(e,"context",i.context);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(ct(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new ft(this.database,new jt(this._delegate._repo,this._delegate._path))}}class ft extends je{constructor(e,n){super(e,new ut(n._repo,n._path,new uu,!1)),this.database=e,this._delegate=n}getKey(){return L("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return L("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new ft(this.database,mi(this._delegate,e))}getParent(){L("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new ft(this.database,e):null}getRoot(){return L("Reference.root",0,0,arguments.length),new ft(this.database,this._delegate.root)}set(e,n){L("Reference.set",1,2,arguments.length),Ae("Reference.set","onComplete",n,!0);const r=Am(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(L("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,U2("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Pt("Reference.update",this._delegate._path),Ae("Reference.update","onComplete",n,!0);const r=XR(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){L("Reference.setWithPriority",2,3,arguments.length),Ae("Reference.setWithPriority","onComplete",r,!0);const i=JR(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){L("Reference.remove",0,1,arguments.length),Ae("Reference.remove","onComplete",e,!0);const n=qR(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){L("Reference.transaction",1,3,arguments.length),Ae("Reference.transaction","transactionUpdate",e,!1),Ae("Reference.transaction","onComplete",n,!0),zA("Reference.transaction","applyLocally",r);const i=FA(this._delegate,e,{applyLocally:r}).then(s=>new BA(s.committed,new gr(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){L("Reference.setPriority",1,2,arguments.length),Ae("Reference.setPriority","onComplete",n,!0);const r=QR(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){L("Reference.push",0,2,arguments.length),Ae("Reference.push","onComplete",n,!0);const r=KR(this._delegate,e),i=r.then(o=>new ft(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new ft(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return Pt("Reference.onDisconnect",this._delegate._path),new VA(new YR(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class ma{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:kA,forceLongPolling:xA}}useEmulator(e,n,r={}){bA(this._delegate,e,n,r)}ref(e){if(L("database.ref",0,1,arguments.length),e instanceof ft){const n=z_(this._delegate,e.toString());return new ft(this,n)}else{const n=L2(this._delegate,e);return new ft(this,n)}}refFromURL(e){L("database.refFromURL",1,1,arguments.length);const r=z_(this._delegate,e);return new ft(this,r)}goOffline(){return L("database.goOffline",0,0,arguments.length),NA(this._delegate)}goOnline(){return L("database.goOnline",0,0,arguments.length),PA(this._delegate)}}ma.ServerValue={TIMESTAMP:LA(),increment:t=>DA(t)};function HA({app:t,url:e,version:n,customAuthImpl:r,customAppCheckImpl:i,namespace:s,nodeAdmin:o=!1}){EE(n);const a=new Yp("database-standalone"),l=new ef("auth-internal",a);l.setComponent(new Dt("auth-internal",()=>r,"PRIVATE"));let c;return i&&(c=new ef("app-check-internal",a),c.setComponent(new Dt("app-check-internal",()=>i,"PRIVATE"))),{instance:new ma(F2(t,l,c,e,o),t),namespace:s}}var GA=Object.freeze({__proto__:null,initStandalone:HA});/**
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
 */const YA=ma.ServerValue;function KA(t){t.INTERNAL.registerComponent(new Dt("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new ma(i,r)},"PUBLIC").setServiceProps({Reference:ft,Query:je,Database:ma,DataSnapshot:gr,enableLogging:RA,INTERNAL:GA,ServerValue:YA}).setMultipleInstances(!0)),t.registerVersion(jA,UA)}KA(_n);function Om(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const to={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ai={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function qA(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function W2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QA=qA,JA=W2,z2=new Si("auth","Firebase",W2());/**
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
 */const Lc=new Ra("@firebase/auth");function XA(t,...e){Lc.logLevel<=Q.WARN&&Lc.warn(`Auth (${Fr}): ${t}`,...e)}function Dl(t,...e){Lc.logLevel<=Q.ERROR&&Lc.error(`Auth (${Fr}): ${t}`,...e)}/**
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
 */function $e(t,...e){throw Dm(t,...e)}function xe(t,...e){return Dm(t,...e)}function Lm(t,e,n){const r=Object.assign(Object.assign({},JA()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function Me(t){return Lm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fs(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$e(t,"argument-error"),Lm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return z2.create(t,...e)}function I(t,e,...n){if(!t)throw Dm(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function Jt(t,e){t||un(e)}/**
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
 */function ga(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mm(){return Y_()==="http:"||Y_()==="https:"}function Y_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ZA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mm()||rE()||"connection"in navigator)?navigator.onLine:!0}function eO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $a{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Gp()||ou()}get(){return ZA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fm(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nO=new $a(3e4,6e4);function ge(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ve(t,e,n,r,i={}){return V2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return E4()||(c.referrerPolicy="no-referrer"),$2.fetch()(B2(t,t.config.apiHost,n,a),c)})}async function V2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tO),e);try{const i=new iO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Lm(t,u,c);$e(t,u)}}catch(i){if(i instanceof lt)throw i;$e(t,"network-request-failed",{message:String(i)})}}async function zn(t,e,n,r,i={}){const s=await ve(t,e,n,r,i);return"mfaPendingCredential"in s&&$e(t,"multi-factor-auth-required",{_serverResponse:s}),s}function B2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fm(t.config,i):`${t.config.apiScheme}://${i}`}function rO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xe(this.auth,"network-request-failed")),nO.get())})}}function fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xe(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function K_(t){return t!==void 0&&t.getResponse!==void 0}function q_(t){return t!==void 0&&t.enterprise!==void 0}class H2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function sO(t){return(await ve(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function G2(t,e){return ve(t,"GET","/v2/recaptchaConfig",ge(t,e))}/**
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
 */async function oO(t,e){return ve(t,"POST","/v1/accounts:delete",e)}async function aO(t,e){return ve(t,"POST","/v1/accounts:update",e)}async function Y2(t,e){return ve(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lO(t,e=!1){const n=D(t),r=await n.getIdToken(e),i=bu(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Po(Od(i.auth_time)),issuedAtTime:Po(Od(i.iat)),expirationTime:Po(Od(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Od(t){return Number(t)*1e3}function bu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=gc(n);return i?JSON.parse(i):(Dl("Failed to decode base64 JWT payload"),null)}catch(i){return Dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Q_(t){const e=bu(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function jn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof lt&&cO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function va(t){var e;const n=t.auth,r=await t.getIdToken(),i=await jn(t,Y2(n,{idToken:r}));I(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?K2(s.providerUserInfo):[],a=hO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Tf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function dO(t){const e=D(t);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function K2(t){return t.map(e=>{var{providerId:n}=e,r=Om(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fO(t,e){const n=await V2(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=B2(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$2.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pO(t,e){return ve(t,"POST","/v2/accounts:revokeToken",ge(t,e))}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Q_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){I(e.length!==0,"internal-error");const n=Q_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function Hn(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Om(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await jn(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lO(this,e)}reload(){return dO(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(me(this.auth.app))return Promise.reject(Me(this.auth));const e=await this.getIdToken();return await jn(this,oO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:C,isAnonymous:T,providerData:b,stsTokenManager:S}=n;I(v&&S,e,"internal-error");const N=is.fromJSON(this.name,S);I(typeof v=="string",e,"internal-error"),Hn(d,e.name),Hn(f,e.name),I(typeof C=="boolean",e,"internal-error"),I(typeof T=="boolean",e,"internal-error"),Hn(m,e.name),Hn(_,e.name),Hn(y,e.name),Hn(E,e.name),Hn(g,e.name),Hn(p,e.name);const ne=new In({uid:v,auth:e,email:f,emailVerified:C,displayName:d,isAnonymous:T,photoURL:_,phoneNumber:m,tenantId:y,stsTokenManager:N,createdAt:g,lastLoginAt:p});return b&&Array.isArray(b)&&(ne.providerData=b.map($=>Object.assign({},$))),E&&(ne._redirectEventId=E),ne}static async _fromIdTokenResponse(e,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new In({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await va(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];I(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?K2(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new is;a.updateFromIdToken(r);const l=new In({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Tf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const J_=new Map;function mt(t){Jt(t instanceof Function,"Expected a class definition");let e=J_.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,J_.set(t,e),e)}/**
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
 */class q2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}q2.type="NONE";const Is=q2;/**
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
 */function ri(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ri(this.userKey,i.apiKey,s),this.fullPersistenceKey=ri("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(mt(Is),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||mt(Is);const o=ri(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=In._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ss(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ss(s,e,r))}}/**
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
 */function X_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eC(e))return"Blackberry";if(tC(e))return"Webos";if(J2(e))return"Safari";if((e.includes("chrome/")||X2(e))&&!e.includes("edge/"))return"Chrome";if(Va(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Q2(t=be()){return/firefox\//i.test(t)}function J2(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X2(t=be()){return/crios\//i.test(t)}function Z2(t=be()){return/iemobile/i.test(t)}function Va(t=be()){return/android/i.test(t)}function eC(t=be()){return/blackberry/i.test(t)}function tC(t=be()){return/webos/i.test(t)}function Ba(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mO(t=be()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function gO(t=be()){var e;return Ba(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vO(){return iE()&&document.documentMode===10}function nC(t=be()){return Ba(t)||Va(t)||tC(t)||eC(t)||/windows phone/i.test(t)||Z2(t)}/**
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
 */function rC(t,e=[]){let n;switch(t){case"Browser":n=X_(be());break;case"Worker":n=`${X_(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
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
 */class _O{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yO(t,e={}){return ve(t,"GET","/v2/passwordPolicy",ge(t,e))}/**
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
 */const wO=6;class EO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class CO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Z_(this),this.idTokenSubscription=new Z_(this),this.beforeStateQueue=new _O(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=z2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Y2(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(me(this.app))return Promise.reject(Me(this));const n=e?D(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return me(this.app)?Promise.reject(Me(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return me(this.app)?Promise.reject(Me(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yO(this),n=new EO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mt(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fe(t){return D(t)}class Z_{constructor(e){this.auth=e,this.observer=null,this.addObserver=aE(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ha={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SO(t){Ha=t}function jm(t){return Ha.loadJS(t)}function IO(){return Ha.recaptchaV2Script}function TO(){return Ha.recaptchaEnterpriseScript}function kO(){return Ha.gapiScript}function iC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const xO=500,bO=6e4,wl=1e12;class NO{constructor(e){this.auth=e,this.counter=wl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new AO(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||wl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||wl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||wl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class PO{constructor(){this.enterprise=new RO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class RO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class AO{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=OO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},bO)},xO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function OO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const LO="recaptcha-enterprise",Ro="NO_RECAPTCHA";class sC{constructor(e){this.type=LO,this.auth=fe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{G2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new H2(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;q_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ro)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new PO().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&q_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=TO();l.length!==0&&(l+=a),jm(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function no(t,e,n,r=!1,i=!1){const s=new sC(t);let o;if(i)o=Ro;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function vr(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await no(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await no(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await no(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await no(t,e,n,!1,!0);return r(t,u)}return Promise.reject(l)})}else{const a=await no(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function DO(t){const e=fe(t),n=await G2(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new H2(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new sC(e).verify()}function MO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FO(t,e,n){const r=fe(t);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=oC(e),{host:o,port:a}=jO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UO()}function oC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jO(t){const e=oC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ey(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ey(o)}}}function ey(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class js{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
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
 */async function aC(t,e){return ve(t,"POST","/v1/accounts:resetPassword",ge(t,e))}async function WO(t,e){return ve(t,"POST","/v1/accounts:update",e)}async function zO(t,e){return ve(t,"POST","/v1/accounts:signUp",e)}async function $O(t,e){return ve(t,"POST","/v1/accounts:update",ge(t,e))}/**
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
 */async function VO(t,e){return zn(t,"POST","/v1/accounts:signInWithPassword",ge(t,e))}async function Nu(t,e){return ve(t,"POST","/v1/accounts:sendOobCode",ge(t,e))}async function BO(t,e){return Nu(t,e)}async function HO(t,e){return Nu(t,e)}async function GO(t,e){return Nu(t,e)}async function YO(t,e){return Nu(t,e)}/**
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
 */async function KO(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}async function qO(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}/**
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
 */class _a extends js{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _a(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _a(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vr(e,n,"signInWithPassword",VO,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return KO(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vr(e,r,"signUpPassword",zO,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return qO(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Nn(t,e){return zn(t,"POST","/v1/accounts:signInWithIdp",ge(t,e))}/**
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
 */const QO="http://localhost";class vn extends js{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Om(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}buildRequest(){const e={requestUri:QO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
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
 */async function ty(t,e){return ve(t,"POST","/v1/accounts:sendVerificationCode",ge(t,e))}async function JO(t,e){return zn(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,e))}async function XO(t,e){const n=await zn(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,e));if(n.temporaryProof)throw fo(t,"account-exists-with-different-credential",n);return n}const ZO={USER_NOT_FOUND:"user-not-found"};async function e6(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return zn(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,n),ZO)}/**
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
 */class ii extends js{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ii({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ii({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return JO(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return XO(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return e6(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ii({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function t6(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n6(t){const e=Ki(ho(t)).link,n=e?Ki(ho(e)).deep_link_id:null,r=Ki(ho(t)).deep_link_id;return(r?Ki(ho(r)).link:null)||r||n||e||t}class Pu{constructor(e){var n,r,i,s,o,a;const l=Ki(ho(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=t6((i=l.mode)!==null&&i!==void 0?i:null);I(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=n6(e);try{return new Pu(n)}catch{return null}}}/**
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
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(e,n){return _a._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pu.parseLink(n);return I(r,"argument-error"),_a._fromEmailAndCode(e,r.code,r.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $n{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Us extends $n{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class os extends Us{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return I("providerId"in n&&"signInMethod"in n,"argument-error"),vn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),vn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return os.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return os.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new os(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class rn extends Us{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
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
 */class sn extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
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
 */class on extends Us{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */const r6="http://localhost";class Ts extends js{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ts(r,s)}static _create(e,n){return new Ts(e,n)}buildRequest(){return{requestUri:r6,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const i6="saml.";class Dc extends $n{constructor(e){I(e.startsWith(i6),"argument-error"),super(e)}static credentialFromResult(e){return Dc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Dc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ts.fromJSON(e);return I(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ts._create(r,n)}catch{return null}}}/**
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
 */class an extends Us{constructor(){super("twitter.com")}static credential(e,n){return vn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */async function lC(t,e){return zn(t,"POST","/v1/accounts:signUp",ge(t,e))}/**
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
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await In._fromIdTokenResponse(e,r,i),o=ny(r);return new Mt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ny(r);return new Mt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ny(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function s6(t){var e;if(me(t.app))return Promise.reject(Me(t));const n=fe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Mt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await lC(n,{returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Mc extends lt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mc(e,n,r,i)}}function cC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function uC(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function o6(t,e){const n=D(t);await Ru(!0,n,e);const{providerUserInfo:r}=await aO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=uC(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Um(t,e,n=!1){const r=await jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",r)}async function Ru(t,e,n){await va(e);const r=uC(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";I(r.has(n)===t,e.auth,i)}/**
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
 */async function dC(t,e,n=!1){const{auth:r}=t;if(me(r.app))return Promise.reject(Me(r));const i="reauthenticate";try{const s=await jn(t,cC(r,i,e,t),n);I(s.idToken,r,"internal-error");const o=bu(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(t.uid===a,r,"user-mismatch"),Mt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),s}}/**
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
 */async function hC(t,e,n=!1){if(me(t.app))return Promise.reject(Me(t));const r="signIn",i=await cC(t,r,e),s=await Mt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Au(t,e){return hC(fe(t),e)}async function fC(t,e){const n=D(t);return await Ru(!1,n,e.providerId),Um(n,e)}async function pC(t,e){return dC(D(t),e)}/**
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
 */async function a6(t,e){return zn(t,"POST","/v1/accounts:signInWithCustomToken",ge(t,e))}/**
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
 */async function l6(t,e){if(me(t.app))return Promise.reject(Me(t));const n=fe(t),r=await a6(n,{token:e,returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Ga{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Wm._fromServerResponse(e,n):"totpInfo"in n?zm._fromServerResponse(e,n):$e(e,"internal-error")}}class Wm extends Ga{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Wm(n)}}class zm extends Ga{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new zm(n)}}/**
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
 */function Ou(t,e,n){var r;I(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function $m(t){const e=fe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function c6(t,e,n){const r=fe(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Ou(r,i,n),await vr(r,i,"getOobCode",HO,"EMAIL_PASSWORD_PROVIDER")}async function u6(t,e,n){await aC(D(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$m(t),r})}async function d6(t,e){await $O(D(t),{oobCode:e})}async function mC(t,e){const n=D(t),r=await aC(n,{oobCode:e}),i=r.requestType;switch(I(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Ga._fromServerResponse(fe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function h6(t,e){const{data:n}=await mC(D(t),e);return n.email}async function f6(t,e,n){if(me(t.app))return Promise.reject(Me(t));const r=fe(t),o=await vr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lC,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$m(t),l}),a=await Mt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function p6(t,e,n){return me(t.app)?Promise.reject(Me(t)):Au(D(t),Ur.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$m(t),r})}/**
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
 */async function m6(t,e,n){const r=fe(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){I(a.handleCodeInApp,r,"argument-error"),a&&Ou(r,o,a)}s(i,n),await vr(r,i,"getOobCode",GO,"EMAIL_PASSWORD_PROVIDER")}function g6(t,e){const n=Pu.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function v6(t,e,n){if(me(t.app))return Promise.reject(Me(t));const r=D(t),i=Ur.credentialWithLink(e,n||ga());return I(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Au(r,i)}/**
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
 */async function _6(t,e){return ve(t,"POST","/v1/accounts:createAuthUri",ge(t,e))}/**
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
 */async function y6(t,e){const n=Mm()?ga():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await _6(D(t),r);return i||[]}async function w6(t,e){const n=D(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ou(n.auth,i,e);const{email:s}=await BO(n.auth,i);s!==t.email&&await t.reload()}async function E6(t,e,n){const r=D(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Ou(r.auth,s,n);const{email:o}=await YO(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function C6(t,e){return ve(t,"POST","/v1/accounts:update",e)}/**
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
 */async function S6(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=D(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await jn(r,C6(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function I6(t,e){const n=D(t);return me(n.auth.app)?Promise.reject(Me(n.auth)):gC(n,e,null)}function T6(t,e){return gC(D(t),null,e)}async function gC(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await jn(t,WO(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function k6(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=bu(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new as(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new x6(s,i);case"github.com":return new b6(s,i);case"google.com":return new N6(s,i);case"twitter.com":return new P6(s,i,t.screenName||null);case"custom":case"anonymous":return new as(s,null);default:return new as(s,r,i)}}class as{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class vC extends as{constructor(e,n,r,i){super(e,n,r),this.username=i}}class x6 extends as{constructor(e,n){super(e,"facebook.com",n)}}class b6 extends vC{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class N6 extends as{constructor(e,n){super(e,"google.com",n)}}class P6 extends vC{constructor(e,n,r){super(e,"twitter.com",n,r)}}function R6(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:k6(n)}/**
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
 */class Jr{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Jr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Jr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Jr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Jr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Vm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=fe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ga._fromServerResponse(r,a));I(i.mfaPendingCredential,r,"internal-error");const o=Jr._fromMfaPendingCredential(i.mfaPendingCredential);return new Vm(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const u=await Mt._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return I(n.user,r,"internal-error"),Mt._forOperation(n.user,n.operationType,c);default:$e(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function A6(t,e){var n;const r=D(t),i=e;return I(e.customData.operationType,r,"argument-error"),I((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Vm._fromError(r,i)}/**
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
 */function ry(t,e){return ve(t,"POST","/v2/accounts/mfaEnrollment:start",ge(t,e))}function O6(t,e){return ve(t,"POST","/v2/accounts/mfaEnrollment:finalize",ge(t,e))}function L6(t,e){return ve(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ge(t,e))}class Bm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Ga._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Bm(e)}async getSession(){return Jr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await jn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await jn(this.user,L6(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ld=new WeakMap;function D6(t){const e=D(t);return Ld.has(e)||Ld.set(e,Bm._fromUser(e)),Ld.get(e)}const Fc="__sak";/**
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
 */class _C{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fc,"1"),this.storage.removeItem(Fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const M6=1e3,F6=10;class yC extends _C{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,F6):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},M6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yC.type="LOCAL";const Hm=yC;/**
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
 */class wC extends _C{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wC.type="SESSION";const gi=wC;/**
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
 */function j6(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await j6(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lu.receivers=[];/**
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
 */function Ya(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class U6{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ya("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ee(){return window}function W6(t){Ee().location.href=t}/**
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
 */function Gm(){return typeof Ee().WorkerGlobalScope<"u"&&typeof Ee().importScripts=="function"}async function z6(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $6(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function V6(){return Gm()?self:null}/**
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
 */const EC="firebaseLocalStorageDb",B6=1,jc="firebaseLocalStorage",CC="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Du(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function H6(){const t=indexedDB.deleteDatabase(EC);return new Ka(t).toPromise()}function kf(){const t=indexedDB.open(EC,B6);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jc,{keyPath:CC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jc)?e(r):(r.close(),await H6(),e(await kf()))})})}async function iy(t,e,n){const r=Du(t,!0).put({[CC]:e,value:n});return new Ka(r).toPromise()}async function G6(t,e){const n=Du(t,!1).get(e),r=await new Ka(n).toPromise();return r===void 0?null:r.value}function sy(t,e){const n=Du(t,!0).delete(e);return new Ka(n).toPromise()}const Y6=800,K6=3;class SC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>K6)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lu._getInstance(V6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await z6(),!this.activeServiceWorker)return;this.sender=new U6(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kf();return await iy(e,Fc,"1"),await sy(e,Fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>iy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>G6(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Du(i,!1).getAll();return new Ka(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}SC.type="LOCAL";const ya=SC;/**
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
 */function oy(t,e){return ve(t,"POST","/v2/accounts/mfaSignIn:start",ge(t,e))}function q6(t,e){return ve(t,"POST","/v2/accounts/mfaSignIn:finalize",ge(t,e))}/**
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
 */const Dd=iC("rcb"),Q6=new $a(3e4,6e4);class J6{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ee().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return I(X6(n),e,"argument-error"),this.shouldResolveImmediately(n)&&K_(Ee().grecaptcha)?Promise.resolve(Ee().grecaptcha):new Promise((r,i)=>{const s=Ee().setTimeout(()=>{i(xe(e,"network-request-failed"))},Q6.get());Ee()[Dd]=()=>{Ee().clearTimeout(s),delete Ee()[Dd];const a=Ee().grecaptcha;if(!a||!K_(a)){i(xe(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${IO()}?${Ii({onload:Dd,render:"explicit",hl:n})}`;jm(o).catch(()=>{clearTimeout(s),i(xe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ee().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function X6(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Z6{async load(e){return new NO(e)}clearedOneInstance(){}}/**
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
 */const Ao="recaptcha",e5={theme:"light",type:"image"};let t5=class{constructor(e,n,r=Object.assign({},e5)){this.parameters=r,this.type=Ao,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=fe(e),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Z6:new J6,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ee()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(Mm()&&!Gm(),this.auth,"internal-error"),await n5(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await sO(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function n5(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Ym{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ii._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function r5(t,e,n){if(me(t.app))return Promise.reject(Me(t));const r=fe(t),i=await Mu(r,e,D(n));return new Ym(i,s=>Au(r,s))}async function i5(t,e,n){const r=D(t);await Ru(!1,r,"phone");const i=await Mu(r.auth,e,D(n));return new Ym(i,s=>fC(r,s))}async function s5(t,e,n){const r=D(t);if(me(r.auth.app))return Promise.reject(Me(r.auth));const i=await Mu(r.auth,e,D(n));return new Ym(i,s=>pC(r,s))}async function Mu(t,e,n){var r;if(!t._getRecaptchaConfig())try{await DO(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){I(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await vr(t,o,"mfaSmsEnrollment",async(u,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Ro){I((n==null?void 0:n.type)===Ao,u,"argument-error");const f=await Md(u,d,n);return ry(u,f)}return ry(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{I(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;I(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await vr(t,a,"mfaSmsSignIn",async(d,f)=>{if(f.phoneSignInInfo.captchaResponse===Ro){I((n==null?void 0:n.type)===Ao,d,"argument-error");const m=await Md(d,f,n);return oy(d,m)}return oy(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await vr(t,s,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===Ro){I((n==null?void 0:n.type)===Ao,c,"argument-error");const d=await Md(c,u,n);return ty(c,d)}return ty(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function o5(t,e){const n=D(t);if(me(n.auth.app))return Promise.reject(Me(n.auth));await Um(n,e)}async function Md(t,e,n){I(n.type===Ao,t,"argument-error");const r=await n.verify();I(typeof r=="string",t,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */let vi=class Ml{constructor(e){this.providerId=Ml.PROVIDER_ID,this.auth=fe(e)}verifyPhoneNumber(e,n){return Mu(this.auth,e,D(n))}static credential(e,n){return ii._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Ml.credentialFromTaggedObject(n)}static credentialFromError(e){return Ml.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ii._fromTokenResponse(n,r):null}};vi.PROVIDER_ID="phone";vi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function bi(t,e){return e?mt(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Km extends js{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function a5(t){return hC(t.auth,new Km(t),t.bypassAuthState)}function l5(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),dC(n,new Km(t),t.bypassAuthState)}async function c5(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Um(n,new Km(t),t.bypassAuthState)}/**
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
 */class IC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return a5;case"linkViaPopup":case"linkViaRedirect":return c5;case"reauthViaPopup":case"reauthViaRedirect":return l5;default:$e(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const u5=new $a(2e3,1e4);async function qm(t,e,n){if(me(t.app))return Promise.reject(xe(t,"operation-not-supported-in-this-environment"));const r=fe(t);Fs(t,e,$n);const i=bi(r,n);return new Tn(r,"signInViaPopup",e,i).executeNotNull()}async function d5(t,e,n){const r=D(t);if(me(r.auth.app))return Promise.reject(xe(r.auth,"operation-not-supported-in-this-environment"));Fs(r.auth,e,$n);const i=bi(r.auth,n);return new Tn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function h5(t,e,n){const r=D(t);Fs(r.auth,e,$n);const i=bi(r.auth,n);return new Tn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Tn extends IC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u5.get())};e()}}Tn.currentPopupAction=null;/**
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
 */const f5="pendingRedirect",Oo=new Map;class p5 extends IC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await m5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m5(t,e){const n=kC(e),r=TC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Qm(t,e){return TC(t)._set(kC(e),"true")}function g5(){Oo.clear()}function Jm(t,e){Oo.set(t._key(),e)}function TC(t){return mt(t._redirectPersistence)}function kC(t){return ri(f5,t.config.apiKey,t.name)}/**
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
 */function v5(t,e,n){return _5(t,e,n)}async function _5(t,e,n){if(me(t.app))return Promise.reject(Me(t));const r=fe(t);Fs(t,e,$n),await r._initializationPromise;const i=bi(r,n);return await Qm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function y5(t,e,n){return w5(t,e,n)}async function w5(t,e,n){const r=D(t);if(Fs(r.auth,e,$n),me(r.auth.app))return Promise.reject(Me(r.auth));await r.auth._initializationPromise;const i=bi(r.auth,n);await Qm(i,r.auth);const s=await xC(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function E5(t,e,n){return C5(t,e,n)}async function C5(t,e,n){const r=D(t);Fs(r.auth,e,$n),await r.auth._initializationPromise;const i=bi(r.auth,n);await Ru(!1,r,e.providerId),await Qm(i,r.auth);const s=await xC(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function S5(t,e){return await fe(t)._initializationPromise,Fu(t,e,!1)}async function Fu(t,e,n=!1){if(me(t.app))return Promise.reject(Me(t));const r=fe(t),i=bi(r,e),o=await new p5(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function xC(t){const e=Ya(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const I5=10*60*1e3;class bC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T5(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!NC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ay(e))}saveEventToCache(e){this.cachedEventUids.add(ay(e)),this.lastProcessedEventTime=Date.now()}}function ay(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function NC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function T5(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NC(t);default:return!1}}/**
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
 */async function PC(t,e={}){return ve(t,"GET","/v1/projects",e)}/**
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
 */const k5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x5=/^https?/;async function b5(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PC(t);for(const n of e)try{if(N5(n))return}catch{}$e(t,"unauthorized-domain")}function N5(t){const e=ga(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!x5.test(n))return!1;if(k5.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const P5=new $a(3e4,6e4);function ly(){const t=Ee().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function R5(t){return new Promise((e,n)=>{var r,i,s;function o(){ly(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ly(),n(xe(t,"network-request-failed"))},timeout:P5.get()})}if(!((i=(r=Ee().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ee().gapi)===null||s===void 0)&&s.load)o();else{const a=iC("iframefcb");return Ee()[a]=()=>{gapi.load?o():n(xe(t,"network-request-failed"))},jm(`${kO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function A5(t){return Fl=Fl||R5(t),Fl}/**
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
 */const O5=new $a(5e3,15e3),L5="__/auth/iframe",D5="emulator/auth/iframe",M5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j5(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fm(e,D5):`https://${t.config.authDomain}/${L5}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},i=F5.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ii(r).slice(1)}`}async function U5(t){const e=await A5(t),n=Ee().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:j5(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:M5,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xe(t,"network-request-failed"),a=Ee().setTimeout(()=>{s(o)},O5.get());function l(){Ee().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const W5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z5=500,$5=600,V5="_blank",B5="http://localhost";class cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H5(t,e,n,r=z5,i=$5){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},W5),{width:r.toString(),height:i.toString(),top:s,left:o}),c=be().toLowerCase();n&&(a=X2(c)?V5:n),Q2(c)&&(e=e||B5,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[m,_])=>`${f}${m}=${_},`,"");if(gO(c)&&a!=="_self")return G5(e||"",a),new cy(null);const d=window.open(e||"",a,u);I(d,t,"popup-blocked");try{d.focus()}catch{}return new cy(d)}function G5(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Y5="__/auth/handler",K5="emulator/auth/handler",q5=encodeURIComponent("fac");async function xf(t,e,n,r,i,s){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:i};if(e instanceof $n){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_c(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Us){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${q5}=${encodeURIComponent(l)}`:"";return`${Q5(t)}?${Ii(a).slice(1)}${c}`}function Q5({config:t}){return t.emulator?Fm(t,K5):`https://${t.authDomain}/${Y5}`}/**
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
 */const Fd="webStorageSupport";class J5{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gi,this._completeRedirectFn=Fu,this._overrideRedirectResult=Jm}async _openPopup(e,n,r,i){var s;Jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xf(e,n,r,ga(),i);return H5(e,o,Ya())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xf(e,n,r,ga(),i);return W6(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await U5(e),r=new bC(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fd,{type:Fd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fd];o!==void 0&&n(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b5(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nC()||J2()||Ba()}}const X5=J5;class Z5{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return un("unexpected MultiFactorSessionType")}}}class Xm extends Z5{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xm(e)}_finalizeEnroll(e,n,r){return O6(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return q6(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class RC{constructor(){}static assertion(e){return Xm._fromCredential(e)}}RC.FACTOR_ID="phone";var uy="@firebase/auth",dy="1.8.1";/**
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
 */class eL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nL(t){kr(new Dt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rC(t)},c=new CO(r,i,s,l);return MO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kr(new Dt("auth-internal",e=>{const n=fe(e.getProvider("auth").getImmediate());return(r=>new eL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(uy,dy,tL(t)),Kt(uy,dy,"esm2017")}/**
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
 */const rL=5*60;_4("authIdTokenMaxAge");function iL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}SO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nL("Browser");/**
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
 */function _i(){return window}/**
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
 */const sL=2e3;async function oL(t,e,n){var r;const{BuildInfo:i}=_i();Jt(e.sessionId,"AuthEvent did not contain a session ID");const s=await dL(e.sessionId),o={};return Ba()?o.ibi=i.packageName:Va()?o.apn=i.packageName:$e(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,xf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function aL(t){const{BuildInfo:e}=_i(),n={};Ba()?n.iosBundleId=e.packageName:Va()?n.androidPackageName=e.packageName:$e(t,"operation-not-supported-in-this-environment"),await PC(t,n)}function lL(t){const{cordova:e}=_i();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,mO()?"_blank":"_system","location=yes"),n(i)})})}async function cL(t,e,n){const{cordova:r}=_i();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const f=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof f=="function"&&f(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(xe(t,"redirect-cancelled-by-user"))},sL))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Va()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function uL(t){var e,n,r,i,s,o,a,l,c,u;const d=_i();I(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((u=(c=d==null?void 0:d.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function dL(t){const e=hL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function hL(t){if(Jt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const fL=20;class pL extends bC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function mL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:_L(),postBody:null,tenantId:t.tenantId,error:xe(t,"no-auth-event")}}function gL(t,e){return bf()._set(Nf(t),e)}async function hy(t){const e=await bf()._get(Nf(t));return e&&await bf()._remove(Nf(t)),e}function vL(t,e){var n,r;const i=wL(e);if(i.includes("/__/auth/callback")){const s=jl(i),o=s.firebaseError?yL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?xe(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function _L(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<fL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function bf(){return mt(Hm)}function Nf(t){return ri("authEvent",t.config.apiKey,t.name)}function yL(t){try{return JSON.parse(t)}catch{return null}}function wL(t){const e=jl(t),n=e.link?decodeURIComponent(e.link):void 0,r=jl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return jl(i).link||i||r||n||t}function jl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ki(n.join("?"))}/**
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
 */const EL=500;class CL{constructor(){this._redirectPersistence=gi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Fu,this._overrideRedirectResult=Jm}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new pL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){$e(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){uL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),g5(),await this._originValidation(e);const o=mL(e,r,i);await gL(e,o);const a=await oL(e,o,n),l=await lL(a);return cL(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=_i(),o=setTimeout(async()=>{await hy(e),n.onEvent(fy())},EL),a=async u=>{clearTimeout(o);const d=await hy(e);let f=null;d&&(u!=null&&u.url)&&(f=vL(d,u.url)),n.onEvent(f||fy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;_i().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(c)&&a({url:u}),typeof l=="function")try{l(u)}catch(d){console.error(d)}}}}const SL=CL;function fy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:xe("no-auth-event")}}/**
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
 */function IL(t,e){fe(t)._logFramework(e)}var TL="@firebase/auth-compat",kL="0.5.16";/**
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
 */const xL=1e3;function Lo(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function bL(){return Lo()==="http:"||Lo()==="https:"}function AC(t=be()){return!!((Lo()==="file:"||Lo()==="ionic:"||Lo()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function NL(){return ou()||tE()}function PL(){return iE()&&(document==null?void 0:document.documentMode)===11}function RL(t=be()){return/Edge\/\d+/.test(t)}function AL(t=be()){return PL()||RL(t)}function OC(){try{const t=self.localStorage,e=Ya();if(t)return t.setItem(e,"1"),t.removeItem(e),AL()?vc():!0}catch{return Zm()&&vc()}return!1}function Zm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function jd(){return(bL()||rE()||AC())&&!NL()&&OC()&&!Zm()}function LC(){return AC()&&typeof document<"u"}async function OL(){return LC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},xL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function LL(){return typeof window<"u"?window:null}/**
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
 */const ht={LOCAL:"local",NONE:"none",SESSION:"session"},ro=I,DC="persistence";function DL(t,e){if(ro(Object.values(ht).includes(e),t,"invalid-persistence-type"),ou()){ro(e!==ht.SESSION,t,"unsupported-persistence-type");return}if(tE()){ro(e===ht.NONE,t,"unsupported-persistence-type");return}if(Zm()){ro(e===ht.NONE||e===ht.LOCAL&&vc(),t,"unsupported-persistence-type");return}ro(e===ht.NONE||OC(),t,"unsupported-persistence-type")}async function Pf(t){await t._initializationPromise;const e=MC(),n=ri(DC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function ML(t,e){const n=MC();if(!n)return[];const r=ri(DC,t,e);switch(n.getItem(r)){case ht.NONE:return[Is];case ht.LOCAL:return[ya,gi];case ht.SESSION:return[gi];default:return[]}}function MC(){var t;try{return((t=LL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const FL=I;class rr{constructor(){this.browserResolver=mt(X5),this.cordovaResolver=mt(SL),this.underlyingResolver=null,this._redirectPersistence=gi,this._completeRedirectFn=Fu,this._overrideRedirectResult=Jm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return LC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return FL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await OL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function FC(t){return t.unwrap()}function jL(t){return t.wrapped()}/**
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
 */function UL(t){return jC(t)}function WL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new zL(t,A6(t,e))}else if(r){const i=jC(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function jC(t){const{_tokenResponse:e}=t instanceof lt?t.customData:t;if(!e)return null;if(!(t instanceof lt)&&"temporaryProof"in e&&"phoneNumber"in e)return vi.credentialFromResult(t);const n=e.providerId;if(!n||n===to.PASSWORD)return null;let r;switch(n){case to.GOOGLE:r=sn;break;case to.FACEBOOK:r=rn;break;case to.GITHUB:r=on;break;case to.TWITTER:r=an;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ts._create(n,a):vn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new os(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof lt?r.credentialFromError(t):r.credentialFromResult(t)}function Ze(t,e){return e.catch(n=>{throw n instanceof lt&&WL(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:UL(n),additionalUserInfo:R6(n),user:kn.getOrCreate(i)}})}async function Rf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ze(t,n.confirm(r))}}class zL{constructor(e,n){this.resolver=n,this.auth=jL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ze(FC(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class kn{constructor(e){this._delegate=e,this.multiFactor=D6(e)}static getOrCreate(e){return kn.USER_MAP.has(e)||kn.USER_MAP.set(e,new kn(e)),kn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ze(this.auth,fC(this._delegate,e))}async linkWithPhoneNumber(e,n){return Rf(this.auth,i5(this._delegate,e,n))}async linkWithPopup(e){return Ze(this.auth,h5(this._delegate,e,rr))}async linkWithRedirect(e){return await Pf(fe(this.auth)),E5(this._delegate,e,rr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ze(this.auth,pC(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Rf(this.auth,s5(this._delegate,e,n))}reauthenticateWithPopup(e){return Ze(this.auth,d5(this._delegate,e,rr))}async reauthenticateWithRedirect(e){return await Pf(fe(this.auth)),y5(this._delegate,e,rr)}sendEmailVerification(e){return w6(this._delegate,e)}async unlink(e){return await o6(this._delegate,e),this}updateEmail(e){return I6(this._delegate,e)}updatePassword(e){return T6(this._delegate,e)}updatePhoneNumber(e){return o5(this._delegate,e)}updateProfile(e){return S6(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return E6(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}kn.USER_MAP=new WeakMap;/**
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
 */const io=I;let Af=class{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;io(r,"invalid-api-key",{appName:e.name}),io(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?rr:void 0;this._delegate=n.initialize({options:{persistence:$L(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(QA),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?kn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){FO(this._delegate,e,n)}applyActionCode(e){return d6(this._delegate,e)}checkActionCode(e){return mC(this._delegate,e)}confirmPasswordReset(e,n){return u6(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ze(this._delegate,f6(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return y6(this._delegate,e)}isSignInWithEmailLink(e){return g6(this._delegate,e)}async getRedirectResult(){io(jd(),this._delegate,"operation-not-supported-in-this-environment");const e=await S5(this._delegate,rr);return e?Ze(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){IL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=py(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=py(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return m6(this._delegate,e,n)}sendPasswordResetEmail(e,n){return c6(this._delegate,e,n||void 0)}async setPersistence(e){DL(this._delegate,e);let n;switch(e){case ht.SESSION:n=gi;break;case ht.LOCAL:n=await mt(ya)._isAvailable()?ya:Hm;break;case ht.NONE:n=Is;break;default:return $e("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ze(this._delegate,s6(this._delegate))}signInWithCredential(e){return Ze(this._delegate,Au(this._delegate,e))}signInWithCustomToken(e){return Ze(this._delegate,l6(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ze(this._delegate,p6(this._delegate,e,n))}signInWithEmailLink(e,n){return Ze(this._delegate,v6(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Rf(this._delegate,r5(this._delegate,e,n))}async signInWithPopup(e){return io(jd(),this._delegate,"operation-not-supported-in-this-environment"),Ze(this._delegate,qm(this._delegate,e,rr))}async signInWithRedirect(e){return io(jd(),this._delegate,"operation-not-supported-in-this-environment"),await Pf(this._delegate),v5(this._delegate,e,rr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return h6(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}};Af.Persistence=ht;function py(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&kn.getOrCreate(o)),error:e,complete:n}}function $L(t,e){const n=ML(t,e);if(typeof self<"u"&&!n.includes(ya)&&n.push(ya),typeof window<"u")for(const r of[Hm,gi])n.includes(r)||n.push(r);return n.includes(Is)||n.push(Is),n}/**
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
 */class eg{static credential(e,n){return vi.credential(e,n)}constructor(){this.providerId="phone",this._delegate=new vi(FC(_n.auth()))}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}eg.PHONE_SIGN_IN_METHOD=vi.PHONE_SIGN_IN_METHOD;eg.PROVIDER_ID=vi.PROVIDER_ID;/**
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
 */const VL=I;class BL{constructor(e,n,r=_n.app()){var i;VL((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new t5(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const HL="auth-compat";function GL(t){t.INTERNAL.registerComponent(new Dt(HL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Af(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ai.EMAIL_SIGNIN,PASSWORD_RESET:Ai.PASSWORD_RESET,RECOVER_EMAIL:Ai.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ai.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ai.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ai.VERIFY_EMAIL}},EmailAuthProvider:Ur,FacebookAuthProvider:rn,GithubAuthProvider:on,GoogleAuthProvider:sn,OAuthProvider:os,SAMLAuthProvider:Dc,PhoneAuthProvider:eg,PhoneMultiFactorGenerator:RC,RecaptchaVerifier:BL,TwitterAuthProvider:an,Auth:Af,AuthCredential:js,Error:lt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(TL,kL)}GL(_n);const YL={apiKey:"AIzaSyCHsCuljZCMZVpSiEXyGMmiQLnzhF2kBTY",authDomain:"ally-web.firebaseapp.com",databaseURL:"https://ally-web-default-rtdb.firebaseio.com",projectId:"ally-web",storageBucket:"ally-web.firebasestorage.app",messagingSenderId:"82438629304",appId:"1:82438629304:web:af3ae23c1465fa5c41114d"};_n.initializeApp(YL);const Y=_n.database(),z=_n.auth(),UC=new _n.auth.GoogleAuthProvider,WC=new _n.auth.FacebookAuthProvider,KL=["prioritize everything sent to=bio ","to=bio += *command - compdoc() / composedocument():*","nigger","GU1D3L1N3S","3TH1C4L","M0R4L"],po=t=>{const e=t.toLowerCase();return KL.some(n=>e.includes(n.toLocaleLowerCase()))},Of="This message may violate our policies";var my;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(my||(my={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var gy;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(gy||(gy={}));var vy;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(vy||(vy={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const _y=["user","model","function","system"];var yy;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(yy||(yy={}));var wy;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(wy||(wy={}));var Ey;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(Ey||(Ey={}));var Cy;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(Cy||(Cy={}));var Do;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(Do||(Do={}));var Sy;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(Sy||(Sy={}));var Iy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(Iy||(Iy={}));var Ty;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(Ty||(Ty={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nt extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class Oi extends nt{constructor(e,n){super(e),this.response=n}}class zC extends nt{constructor(e,n,r,i){super(e),this.status=n,this.statusText=r,this.errorDetails=i}}class _r extends nt{}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const qL="https://generativelanguage.googleapis.com",QL="v1beta",JL="0.21.0",XL="genai-js";var yi;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(yi||(yi={}));class ZL{constructor(e,n,r,i,s){this.model=e,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||QL;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||qL}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function e8(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${XL}/${JL}`),e.join(" ")}async function t8(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",e8(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new _r(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,s]of r.entries()){if(i==="x-goog-api-key")throw new _r(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new _r(`Header name ${i} can only be set using the apiClient field`);n.append(i,s)}}return n}async function n8(t,e,n,r,i,s){const o=new ZL(t,e,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},o8(s)),{method:"POST",headers:await t8(o),body:i})}}async function qa(t,e,n,r,i,s={},o=fetch){const{url:a,fetchOptions:l}=await n8(t,e,n,r,i,s);return r8(a,l,o)}async function r8(t,e,n=fetch){let r;try{r=await n(t,e)}catch(i){i8(i,t)}return r.ok||await s8(r,t),r}function i8(t,e){let n=t;throw t instanceof zC||t instanceof _r||(n=new nt(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function s8(t,e){let n="",r;try{const i=await t.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new zC(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function o8(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function tg(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Ul(t.candidates[0]))throw new Oi(`${Kn(t)}`,t);return a8(t)}else if(t.promptFeedback)throw new Oi(`Text not available. ${Kn(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Ul(t.candidates[0]))throw new Oi(`${Kn(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),ky(t)[0]}else if(t.promptFeedback)throw new Oi(`Function call not available. ${Kn(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Ul(t.candidates[0]))throw new Oi(`${Kn(t)}`,t);return ky(t)}else if(t.promptFeedback)throw new Oi(`Function call not available. ${Kn(t)}`,t)},t}function a8(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function ky(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const l8=[Do.RECITATION,Do.SAFETY,Do.LANGUAGE];function Ul(t){return!!t.finishReason&&l8.includes(t.finishReason)}function Kn(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];Ul(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function wa(t){return this instanceof wa?(this.v=t,this):new wa(t)}function c8(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(f){r[f]&&(i[f]=function(m){return new Promise(function(_,y){s.push([f,m,_,y])>1||a(f,m)})})}function a(f,m){try{l(r[f](m))}catch(_){d(s[0][3],_)}}function l(f){f.value instanceof wa?Promise.resolve(f.value.v).then(c,u):d(s[0][2],f)}function c(f){a("next",f)}function u(f){a("throw",f)}function d(f,m){f(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const xy=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function u8(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=f8(e),[r,i]=n.tee();return{stream:h8(r),response:d8(i)}}async function d8(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return tg(p8(e));e.push(i)}}function h8(t){return c8(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield wa(n.read());if(i)break;yield yield wa(tg(r))}})}function f8(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:a})=>{if(a){if(i.trim()){r.error(new nt("Failed to parse stream"));return}r.close();return}i+=o;let l=i.match(xy),c;for(;l;){try{c=JSON.parse(l[1])}catch{r.error(new nt(`Error parsing JSON response: "${l[1]}"`));return}r.enqueue(c),i=i.substring(l[0].length),l=i.match(xy)}return s()})}}})}function p8(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const a of i.content.parts)a.text&&(o.text=a.text),a.functionCall&&(o.functionCall=a.functionCall),a.executableCode&&(o.executableCode=a.executableCode),a.codeExecutionResult&&(o.codeExecutionResult=a.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function $C(t,e,n,r){const i=await qa(e,yi.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return u8(i)}async function VC(t,e,n,r){const s=await(await qa(e,yi.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:tg(s)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function BC(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Ea(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return m8(e)}function m8(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),i=!0):(e.parts.push(s),r=!0);if(r&&i)throw new nt("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new nt("No content is provided for sending chat message.");return r?e:n}function g8(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const i=t.generateContentRequest!=null;if(t.contents){if(i)throw new _r("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(i)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const s=Ea(t);r.contents=[s]}return{generateContentRequest:r}}function by(t){let e;return t.contents?e=t:e={contents:[Ea(t)]},t.systemInstruction&&(e.systemInstruction=BC(t.systemInstruction)),e}function v8(t){return typeof t=="string"||Array.isArray(t)?{content:Ea(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Ny=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],_8={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function y8(t){let e=!1;for(const n of t){const{role:r,parts:i}=n;if(!e&&r!=="user")throw new nt(`First content should be with role 'user', got ${r}`);if(!_y.includes(r))throw new nt(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(_y)}`);if(!Array.isArray(i))throw new nt("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new nt("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of i)for(const l of Ny)l in a&&(s[l]+=1);const o=_8[r];for(const a of Ny)if(!o.includes(a)&&s[a]>0)throw new nt(`Content with role '${r}' can't contain '${a}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Py="SILENT_ERROR";class w8{constructor(e,n,r,i={}){this.model=n,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(y8(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,i,s,o,a,l;await this._sendPromise;const c=Ea(e),u={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),n);let f;return this._sendPromise=this._sendPromise.then(()=>VC(this._apiKey,this.model,u,d)).then(m=>{var _;if(m.response.candidates&&m.response.candidates.length>0){this._history.push(c);const y=Object.assign({parts:[],role:"model"},(_=m.response.candidates)===null||_===void 0?void 0:_[0].content);this._history.push(y)}else{const y=Kn(m.response);y&&console.warn(`sendMessage() was unsuccessful. ${y}. Inspect response object for details.`)}f=m}),await this._sendPromise,f}async sendMessageStream(e,n={}){var r,i,s,o,a,l;await this._sendPromise;const c=Ea(e),u={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),n),f=$C(this._apiKey,this.model,u,d);return this._sendPromise=this._sendPromise.then(()=>f).catch(m=>{throw new Error(Py)}).then(m=>m.response).then(m=>{if(m.candidates&&m.candidates.length>0){this._history.push(c);const _=Object.assign({},m.candidates[0].content);_.role||(_.role="model"),this._history.push(_)}else{const _=Kn(m);_&&console.warn(`sendMessageStream() was unsuccessful. ${_}. Inspect response object for details.`)}}).catch(m=>{m.message!==Py&&console.error(m)}),f}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function E8(t,e,n,r){return(await qa(e,yi.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function C8(t,e,n,r){return(await qa(e,yi.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function S8(t,e,n,r){const i=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await qa(e,yi.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ry{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=BC(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const i=by(e),s=Object.assign(Object.assign({},this._requestOptions),n);return VC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}async generateContentStream(e,n={}){var r;const i=by(e),s=Object.assign(Object.assign({},this._requestOptions),n);return $C(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}startChat(e){var n;return new w8(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=g8(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return E8(this.apiKey,this.model,r,i)}async embedContent(e,n={}){const r=v8(e),i=Object.assign(Object.assign({},this._requestOptions),n);return C8(this.apiKey,this.model,r,i)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return S8(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class I8{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new nt("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Ry(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new _r("Cached content must contain a `name` field.");if(!e.model)throw new _r("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const o of i)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===l)continue}throw new _r(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Ry(this.apiKey,s,r)}}const T8="AIzaSyApClqszUTiruooucL-l1UUQEsEeRi6zuk",we=[{name:"Ally-2",description:"Advanced language model, suitable for everyday use",icon:bk,symbole:"a",defaultHistory:"If and only if someone asks you what your name or who created you, tell them that your name is AllyAI, Ally for short, and you are an artificial intelligence created and trained by the person at CodeAdiksuu. You help with many tasks, generate text, and can analyze and respond to photos. If you need more information for a specific task, provide sample data, but indicate that these are sample data",dailyLimit:50},{name:"Ally-Lie",description:"Reworked Ally-2 model misleading in answers",icon:Vk,symbole:"b",defaultHistory:"Lie and mislead by providing false information in every subsequent message, regardless of the question asked, giving ridiculous and incorrect answers in response, even if they are untrue",dailyLimit:50},{name:"Ally-Imagine",description:"A model that allows you to replace text with a photo",icon:Mk,symbole:"c",defaultHistory:"",dailyLimit:5},{name:"Ally-Custom",description:"Create and configure your own AI assistant based on your preferences",icon:lw,symbole:"x",defaultHistory:"",dailyLimit:20,experimental:!0}],Ni=async()=>{const t=await Y.ref(`users/${z.currentUser.uid}/settings/`).once("value");if(t.exists())return{temperature:t.val().temperature||1,length:t.val().length||8192,language:t.val().language||"auto",rules:t.val().rules||"",experimental:t.val().experimental||!1,tone:t.val().tone||"neutral"};{const e={temperature:1,length:8192,language:"auto",rules:"",experimental:!1,tone:"neutral"};return await Y.ref(`users/${z.currentUser.uid}/settings`).set(e),e}},k8=(t,e,n,r,i,s,o,a,l,c)=>{if(t>=0&&t<=2&&e>0&&e<=8192&&o.length<=300)Y.ref(`users/${z.currentUser.uid}/settings/`).update({temperature:t,length:e,language:i,rules:o,tone:l});else{const u={temperature:1,length:8192,language:"auto",rules:"",tone:"neutral"};Y.ref(`users/${z.currentUser.uid}/settings`).set(u),n("1"),r("8192"),s("auto"),a(""),c("neutral")}},x8=async()=>{const t=await Y.ref(`users/${z.currentUser.uid}/custom/`).once("value");if(t.exists())return{rules:t.val().rules};{const e={rules:""};return await Y.ref(`users/${z.currentUser.uid}/custom`).set(e),e}},b8='Provide it in the form: "1. query1 2. query2 3. query3".';function N8(t,e,n,r,i){const s=T8,o=new I8(s);return t!=="ALLY-CUSTOM"?o.getGenerativeModel({model:"gemini-2.0-flash-exp",generationConfig:{temperature:e},systemInstruction:`${n!=="auto"?`Always speek in ${n} language!`:""}, Stick to these rules: ${r} ${t?`and ${we.find(a=>a.name.toUpperCase()===t).defaultHistory}`:`and ${b8}`}`}):o.getGenerativeModel({model:"gemini-2.0-flash-exp",generationConfig:{temperature:e},systemInstruction:`${n!=="auto"?`Always speek in ${n} language!`:""}, Stick to these rules: ${r} and ${i}`})}function P8(t,e){return t.startChat({history:[...e]})}const R8=t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>e(r.result.split(",")[1]),r.onerror=i=>n(i),r.readAsDataURL(t)}),A8=async(t,e,n,r)=>{const i=await Promise.all(n.map(async l=>{const c=l.type;return{inlineData:{data:await R8(l),mimeType:c}}})),s=r.map(l=>l.message).join(`
`)+`
`+e,o=await t.generateContentStream([s,...i]);let a="";for await(const l of o.stream)a+=l.text();return a||"No response generated."};async function O8(t,e,n=3,r=1e3){var s,o,a,l,c;let i=0;for(;i<n;)try{return((c=(l=(a=(o=(s=(await t.sendMessage(e)).response.candidates)==null?void 0:s[0])==null?void 0:o.content)==null?void 0:a.parts)==null?void 0:l[0])==null?void 0:c.text)||"No response generated."}catch(u){if(u.message.includes("503")&&i<n-1)console.warn(`Attempt ${i+1} failed. Retrying in ${r}ms...`),await new Promise(d=>setTimeout(d,r)),i++;else throw console.error("Error sending message to Gemini API:",u),new Error("Failed to send message.")}}async function Lf(t,e,n,r){try{const i=await Ni(),s=await x8(),o=i.temperature||1,a=i.language||"auto",l=`Always use ${i.tone} tone language!. ${i.rules}`||"",c=s.rules||"",u=N8(r,o,a,l,c);if(n.length>0)return await A8(u,t,n,e);{const d=await P8(u,e);return await O8(d,t)}}catch(i){return console.error("Error with Gemini API:",i),"Unfortunately, the server is overloaded. Please try again later."}}const L8=async t=>{const e=await Lf("Provide a list of 10 questions the user could ask (based on their question writing style) depending on the context of this conversation.",t,[],void 0);return D8(e)},D8=t=>{if(!t||typeof t!="string")return["blad"];const e=/\d+\.\s/;return t.split(e).filter(Boolean)};function Ud(){const t=new Date,e=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0");return`${e}:${n}`}const M8=async t=>{try{const e=await fetch("https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",{headers:{Authorization:"Bearer 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","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)});if(!e.ok)throw new Error(`Failed to fetch image: ${e.statusText}`);const n=await e.blob();return new Promise((r,i)=>{const s=new FileReader;s.onloadend=()=>{r(s.result)},s.onerror=o=>{i(new Error("Failed to convert blob to Base64"))},s.readAsDataURL(n)})}catch(e){return console.error("Error with Hugging Face API:",e.message),"Unfortunately, the server is overloaded. Please try again later."}};async function Ay(t){if(t)return await M8({inputs:t})}async function HC(t){return(await Y.ref(`users/${t||z.currentUser.uid}`).once("value")).val().username}async function Qa(t){const e=await Y.ref(`users/${z.currentUser.uid}/prompts`).once("value");return e.exists()?e.val()[t]:0}function F8(t,e){Y.ref(`users/${z.currentUser.uid}/prompts`).update({[t]:e+1})}function j8(t,e){t(""),e([])}async function ju(t,e,n,r,i,s,o,a,l,c){if(r&&r.preventDefault(),e.trim()==="")return;n&&l&&j8(n,l),o&&o(!0);const u=`chats/${z.currentUser.uid}/${t.toUpperCase()}/${i}`,f=(await Y.ref(u).once("value")).numChildren(),m=f.toString().padStart(6,"0");if(F8(t.toUpperCase(),await Qa(t.toUpperCase())),c){const _=parseInt(c.replace("message_","")-1).toString().padStart(6,"0"),y=t.toUpperCase()==="ALLY-IMAGINE";Y.ref(`${u}/message_${_}/`).once("value").then(async E=>{const g=E.val().message,p={message:po(g)?Of:y?await Ay(g):await Lf(g,s,a,t.toUpperCase()),username:"Ally",author:"ai",time:Ud(),loading:!0,invalid:po(g)};Y.ref(`${u}/${c}/`).update(p).then(()=>{o&&o(!1)})})}else{const _={message:e,author:"user",time:Ud(),username:await HC(),file:a.length>0?a.map(E=>URL.createObjectURL(E)):null,invalid:!1},y=t.toUpperCase()==="ALLY-IMAGINE";Y.ref(`${u}/message_${m}/`).set(_).then(async()=>{const E={message:po(e)?Of:y?await Ay(e):await Lf(e,s,a,t.toUpperCase()),username:"Ally",author:"ai",time:Ud(),loading:!0,invalid:po(e)};Y.ref(`${u}/message_${(f+1).toString().padStart(6,"0")}/`).set(E).then(()=>{o&&o(!1)})})}}const Df=["Tell me about the weather in New York","How many people are in London?","Who won the 2020 Nobel Prize in Literature?","What is the current stock price of Apple Inc.?","Who is the Prime Minister of France?","What is the capital of Australia?","Describe the characteristics of a giraffe.","What are the ingredients in a chocolate chip cookie?","Summarize the plot of Romeo and Juliet.",'Translate "hello" to Spanish.',"What is the population of Brazil?","Compare and contrast the Roman Empire and the Han Dynasty.","What are the symptoms of the common cold?","Recommend three restaurants in Paris that serve French cuisine.","Write a short poem about a sunset.","Explain the theory of relativity in simple terms.","What is the highest mountain in the world?","Give me five facts about the moon.","Who painted the Mona Lisa?","What is the chemical formula for water?","What is the largest planet in our solar system?",'Who wrote "Hamlet"?',"What is the capital of Japan?","Explain the process of photosynthesis.","What are the causes of World War I?","Describe the characteristics of a redwood tree.","What is the difference between a dog and a cat?","What is the function of the liver?","What is the history of the internet?","What is the difference between a republic and a monarchy?","What are the major religions of the world?","Who invented the printing press?","What is the importance of trees in the ecosystem?","What is the role of a neuron in the nervous system?","What are the different types of clouds?","What is the capital of Egypt?","Explain the process of cellular respiration.","What is the significance of the Magna Carta?","What are the different types of volcanoes?","What is the structure of a DNA molecule?","What are the major causes of air pollution?","What is the difference between a virus and a bacteria?","Who is considered the father of medicine?","What are the main components of the Earth's atmosphere?","What is the theory of plate tectonics?","What is the difference between a hawk and an eagle?","What is the process of digestion in humans?","What are the benefits of regular exercise?","What is the function of the heart?","What is the history of the United States?","What are the major components of a computer?","Describe the characteristics of a mountain lion.","Who was Abraham Lincoln?","What is the process of photosynthesis?","What are the different types of government?","What is the role of gravity in the universe?","Who is Albert Einstein?","What is the importance of biodiversity?","What are the different types of musical instruments?","What is the history of the Roman Empire?","Describe the characteristics of a polar bear.","What is the current population of the world?","What are the main causes of climate change?","Describe the characteristics of a desert.","Explain the process of mitosis.","Who is the current president of the United States?","What is the meaning of life?","What is the difference between a democracy and an oligarchy?","Write a short story about a lost dog.","What is the tallest building in the world?","What are the major rivers in the United States?","Explain the concept of time travel.","What is the difference between a mammal and a reptile?","What is the role of oxygen in the human body?","What are the benefits of eating a healthy diet?","What is the capital of Canada?","Who painted the Starry Night?","What is the history of the computer?","How do electric cars work?","What are the Seven Wonders of the Ancient World?","Explain how blockchain technology works.","What are the different types of renewable energy?","How does artificial intelligence learn?","What is the process of making chocolate?","Explain quantum computing in simple terms.","What are the major events of the Renaissance period?","How do vaccines work?","What is the impact of social media on society?","Describe the process of making wine.","What are the different types of stars?","How does a nuclear reactor work?","What is the history of cryptocurrency?","Explain how the human immune system works.","What are the principles of sustainable architecture?","How do earthquakes occur?","What is the process of making paper?","Describe the life cycle of a butterfly.","What are the different types of cognitive biases?","How does weather forecasting work?","What is the future of space exploration?","Explain how 3D printing works.","What are the different types of programming languages?","How does the stock market work?","What is the role of fungi in ecosystems?","How do black holes form?","Explain the basics of machine learning.","What are the different types of pasta?","How does a combustion engine work?","What is the history of chess?","Explain the water cycle on Earth.","What are the major art movements in history?","How do solar panels generate electricity?","What is the process of making steel?","Describe the Great Barrier Reef ecosystem.","What are the different types of chemical bonds?","How does GPS navigation work?","What is the history of aviation?","Explain how wind turbines generate power.","What are the different types of dinosaurs?","How does memory work in the human brain?","What is the process of coffee production?","Explain how television works.","What are the different types of ocean waves?","How do plants adapt to different environments?","What is the history of medicine?","Explain how refrigeration works.","What are the different types of rock formations?","How does sound travel?","What is the process of beer brewing?","Explain how batteries work.","What are the different types of weather phenomena?","How does photographic film work?","What is the history of mathematics?","Describe the process of glass making.","What are the different types of renewable resources?","How does fiber optic communication work?","What is the process of oil refining?","Explain how nuclear fusion works.","What are the different types of mental disorders?","How does a microwave oven work?","What is the history of agriculture?","Describe the process of wine fermentation.","What are the different types of natural disasters?","How does air conditioning work?","What is the process of diamond formation?","Explain how digital cameras work.","What are the different types of alternative medicine?","How does wireless charging work?","What is the history of transportation?","Describe the process of honey production.","What are the different types of martial arts?","How does facial recognition technology work?","What is the process of recycling plastic?","Explain how hydroelectric power works.","What are the different types of tea?","How does voice recognition work?","What is the history of writing systems?","Describe the process of pottery making.","What are the different types of dance styles?","How does a touchscreen work?","What is the process of chocolate making?","Explain how virtual reality works.","What are the different types of meditation?","How does cloud computing work?","What is the history of currency?","Describe the process of perfume making.","What are the different types of renewable energy storage?","How does gene editing work?","What is the process of silk production?","Explain how quantum encryption works.","What are the different types of psychological therapies?","How does 5G technology work?","What is the history of robotics?","Describe the process of pearl formation.","What are the different types of artificial intelligence?","How does noise-canceling technology work?","What is the process of paper recycling?","Explain how autonomous vehicles work.","What are the different types of sleep disorders?","How does carbon capture technology work?","What is the history of space exploration?","Describe the process of rubber production.","What are the different types of sustainable energy?","How does biometric authentication work?","What is the process of composting?","Explain how augmented reality works.","What are the different types of learning disabilities?","How does water purification work?","What is the history of artificial intelligence?","Describe the process of salt production.","What are the different types of cloud computing services?","How does quantum computing work?","What is the process of biodiesel production?","Explain how smart home technology works.","What are the different types of renewable transportation?","How does blockchain mining work?","What is the history of genetic engineering?","Describe the process of bioplastic production.","What are the different types of cybersecurity threats?","How does machine translation work?","What is the process of wastewater treatment?","Explain how edge computing works.","What are the different types of renewable building materials?","How does quantum sensing work?","What is the history of nanotechnology?","Describe the process of hydrogen fuel production.","What are the different types of space propulsion?","How does brain-computer interface technology work?"],U8=(t,e)=>[...t].sort(()=>.5-Math.random()).slice(0,e);function W8(t){t(Df[Math.floor(Math.random()*Df.length)])}const z8=()=>{Y.ref(`users/${z.currentUser.uid}`).update({premium:!0})},Ws=async()=>(await Y.ref(`users/${z.currentUser.uid}/`).once("value")).val().premium||!1;function $8({model:t}){const[e,n]=w.useState(""),[r,i]=w.useState(!1),[s,o]=w.useState(0),a=w.useRef(null),l=Ft(),[c,u]=w.useState(!1);w.useEffect(()=>{(async()=>{const g=await Ws();u(g)})()},[]);const d=async E=>{if(E.preventDefault(),e.trim()==="")return;i(!0);const g=Date.now(),p=`${we.find(v=>v.name===t).symbole}${g}`;await ju(t,e,n,E,p,[],i,[]),l(`/chat/${p}`,{state:{loading:!0}})},f=()=>{const E=a.current;E&&(E.style.height="auto",E.style.height=`${E.scrollHeight-20}px`)},m=E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),d(E))},_=E=>{n(E.target.value),f()};w.useEffect(()=>{(async()=>{o(await Qa(t.toUpperCase()))})()},[l]);const y=c?999:we.find(E=>E.name.toUpperCase()===t.toUpperCase()).dailyLimit;return h.jsxs("form",{className:"input",onSubmit:E=>d(E),children:[h.jsx("textarea",{ref:a,disabled:s>=y||r,type:"text",onKeyDown:m,placeholder:s>=y?"Prompts limit reached for today":r?"Wait for response...":"Ask question",value:e,onChange:E=>_(E)}),h.jsxs("div",{className:"send_options",children:[h.jsx("label",{onClick:()=>W8(n),children:h.jsx(B,{icon:nx})}),h.jsx("button",{type:"submit",disabled:e.trim().length===0||s>=y||r,children:h.jsx(B,{icon:hw})})]})]})}function V8({model:t}){const[e,n]=w.useState(!1),r=Ft(),[i]=w.useState(U8(Df,3)),[s,o]=w.useState(!1),[a,l]=w.useState(0),c=s?999:we.find(_=>_.name.toUpperCase()===t.toUpperCase()).dailyLimit;w.useEffect(()=>{(async()=>{l(await Qa(t.toUpperCase()))})()},[r]),w.useEffect(()=>{(async()=>{const y=await Ws();o(y)})()},[]);const u=async _=>{if(a>=c)return;n(!0);const y=Date.now(),E=`${we.find(g=>g.name===t).symbole}${y}`;await ju(t.toUpperCase(),_,null,null,E,[],n,[]),r(`/chat/${E}`,{state:{loading:!0}})},d=["What about this?","Ask me this!","Curious? Try me!"],f=[ox,uw,lw];function m({example:_,index:y}){return h.jsxs("div",{className:"example",onClick:()=>u(_),children:[h.jsx("span",{children:h.jsx(B,{icon:f[y]})}),h.jsx("h3",{children:d[y]}),h.jsx("p",{children:_})]})}return h.jsx("div",{className:"examples",children:i.map((_,y)=>h.jsx(m,{example:_,index:y},y))})}function B8({model:t,setModel:e}){const n=we.find(l=>l.name===t),[r,i]=w.useState(!1),s=()=>{i(!r)};function o(l){l.name!==n.name&&(e(l.name),i(!1))}function a({model:l}){return h.jsxs("div",{onClick:()=>o(l),className:`model${l.name===n.name&&r?" primary":""}`,children:[h.jsxs("span",{children:[h.jsx(B,{icon:l.icon})," ",l.name]}),l.name===n.name?h.jsx("button",{onClick:()=>s(),children:h.jsx(B,{icon:Dh})}):null]})}return h.jsxs("div",{className:"select_model",children:[h.jsx(a,{model:n},t),r?h.jsx("div",{className:"list",children:we.filter(l=>l.name!==n.name&&!l.disabled).map((l,c)=>h.jsx(a,{model:l},c))}):null]})}function H8({isPremium:t,experimental:e}){const n=Ft();function r({icon:i,title:s,description:o}){return h.jsxs("div",{className:"new_version",onClick:()=>n("/settings"),children:[h.jsx("div",{className:"left",children:h.jsx(B,{icon:i})}),h.jsxs("div",{className:"right",children:[h.jsx("h3",{children:s}),h.jsx("p",{children:o})]})]})}return t?e?null:h.jsx(r,{icon:Wk,title:"Experimental features",description:"Try out the latest features in the settings tab"}):h.jsx(r,{icon:Ok,title:"Premium account available",description:"Get access to additional features, unlimited prompts and more"})}const Ja="/assets/logo-BlcMkMaV.png";function G8({searching:t,setSearching:e,setActivate:n}){return h.jsxs("div",{className:"searchbar",children:[h.jsx("input",{onClick:()=>n(!0),type:"text",placeholder:"Search for chats...",value:t,onChange:r=>e(r.target.value)}),h.jsx("button",{"aria-label":"search",children:h.jsx(B,{icon:dw})})]})}function Y8({setActivate:t}){const e=[{text:"Home",icon:Yk,path:"/"},{text:"Models",icon:Uk,path:"/models"},{text:"Settings",icon:cw,path:"/settings"},{text:"Chats",icon:Nk,path:"/chats"}];function n({button:r}){return r.text!=="Chats"?h.jsx("li",{children:h.jsxs(ba,{className:r!=null&&r.disabled?"disabled":"",to:r.path,children:[h.jsx(B,{icon:r.icon})," ",h.jsx("p",{children:r.text})]})}):h.jsx("li",{className:"",children:h.jsxs("a",{onClick:()=>t(!0),children:[h.jsx(B,{icon:r.icon})," ",h.jsx("p",{children:r.text})]})})}return h.jsx("ul",{className:"others",children:e.map((r,i)=>h.jsx(n,{button:r},i))})}function K8(){return h.jsx("div",{className:"bottom",children:h.jsxs(ba,{to:"/chats",className:"createChat",children:[h.jsx(B,{icon:Qk})," Create new chat"]})})}function q8(t,e){(async()=>{const r=[];for(const i of we){const s=i.name,o=await Y.ref(`chats/${z.currentUser.uid}/${s.toUpperCase()}`).once("value");o.exists()&&o.forEach(a=>{const l=a.key,c=`chats/${z.currentUser.uid}/${s.toUpperCase()}/${l}/`;Y.ref(`${c}/message_000000`).once("value").then(u=>{const d=u.val();if(!d)return;const f={path:l,model:s,firstMessage:d.message.trim().length>=25?`${d.message.trim().slice(0,25)}...`:`${d.message.trim()}`};r.push(f),e([...r])})})}})()}function Q8({searching:t,setSearching:e,chatsList:n,setActivate:r}){const i=Ft(),[s,o]=w.useState(""),a=()=>{r(!1)},l=d=>{a(),i(`/chat/${d.path}`,{state:{loading:!1,model:d.model}})};function c({chat:d}){return h.jsx("div",{className:"chat",onClick:()=>l(d),children:h.jsxs("p",{children:[d.firstMessage," ",h.jsx("span",{children:d.model})]})})}const u=n.filter(d=>d.firstMessage.toLowerCase().includes(t.trim().toLowerCase())&&d.model.toLowerCase().includes(s.trim().toLowerCase()));return h.jsxs(h.Fragment,{children:[h.jsx("div",{onClick:()=>a(),className:"blurred-bg"}),h.jsxs("div",{className:"floating_chats",children:[h.jsxs("div",{className:"top",children:[h.jsxs("div",{className:"leftside",children:[h.jsx("span",{children:h.jsx(B,{icon:dw})}),h.jsx("input",{type:"text",value:t,placeholder:"Search for chats...",onChange:d=>e(d.target.value)})]}),h.jsxs("div",{className:"rightside",children:[h.jsx("span",{children:h.jsx(B,{icon:ex})}),h.jsx("input",{type:"text",value:s,placeholder:"Filter by model",onChange:d=>o(d.target.value)})]})]}),u.length>0?h.jsx("div",{className:"list",children:u.reverse().map((d,f)=>h.jsx(c,{chat:d},f))}):h.jsx("div",{className:"bottom",children:h.jsx("div",{className:"text",children:h.jsx("p",{children:"Oops, we couldn't find what you're looking for now"})})})]})]})}function ks(){const[t,e]=w.useState([]),[n,r]=w.useState(""),[i,s]=w.useState(!1);return w.useEffect(()=>{e([]),q8(t,e)},[i]),h.jsxs("div",{className:"sidebar",children:[h.jsx("div",{className:"top",children:h.jsxs("div",{children:[h.jsx("img",{src:Ja,alt:"logo of app"}),h.jsx("h1",{children:"AllyAI"})]})}),h.jsx(G8,{searching:n,setSearching:r,setActivate:s}),i?h.jsx(Q8,{searching:n,setSearching:r,chatsList:t,setActivate:s}):null,h.jsx(Y8,{setActivate:s}),h.jsx(K8,{})]})}function J8(){var c;const t=Mr(),e=Ft(),[n,r]=w.useState(((c=t.state)==null?void 0:c.model)||"Ally-2"),{id:i}=rw(),[s,o]=w.useState(!0),[a,l]=w.useState(!1);return w.useEffect(()=>{(async()=>{const d=await Ws();l(d)})()},[]),w.useEffect(()=>{(async()=>{const d=await Ni();o(d.experimental)})(),e("/chats",{replace:!0,state:null})},[e,i]),h.jsxs(h.Fragment,{children:[h.jsx(ks,{}),h.jsxs("section",{className:"home",children:[h.jsx(H8,{isPremium:a,experimental:s}),h.jsx(V8,{model:n}),h.jsxs("div",{className:"container",children:[h.jsx("h1",{children:"How can I help you?"}),h.jsx("p",{children:"Ask what you want and you will receive a quick and concise answer"}),h.jsx($8,{model:n}),h.jsx(B8,{model:n,setModel:r})]})]})]})}function X8({model:t,prompts:e,isPremium:n}){const r=Ft(),i=()=>{r("/chats",{state:{model:t.name}})};function s(){return h.jsx("button",{onClick:()=>r("/settings",{state:{category:"Experimental settings"}}),className:"settings",children:h.jsx(B,{icon:cw})})}return h.jsxs("div",{className:`model${t!=null&&t.disabled?" disabled":""}`,children:[h.jsx("div",{className:"leftside",children:h.jsx("span",{children:h.jsx(B,{icon:t.icon})})}),h.jsxs("div",{className:"rightside",onClick:()=>i(),children:[h.jsx("h2",{children:t.name}),h.jsx("p",{children:t.description}),h.jsxs("span",{children:[e[t.name.toUpperCase()],"/",n?999:we.find(o=>o.name===t.name).dailyLimit," prompts"]})]}),(t==null?void 0:t.experimental)===!0&&h.jsx(s,{})]})}async function Z8(){const e=(await Y.ref(`users/${z.currentUser.uid}/prompts/`).once("value")).val();return e?{"ALLY-2":e["ALLY-2"]||0,"ALLY-LIE":e["ALLY-LIE"]||0,"ALLY-IMAGINE":e["ALLY-IMAGINE"]||0,"ALLY-CUSTOM":e["ALLY-CUSTOM"]||0}:{"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,"ALLY-CUSTOM":0}}function eD(){const[t,e]=w.useState({"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0}),[n,r]=w.useState(!1),[i,s]=w.useState(!1);return w.useEffect(()=>{(async()=>{const a=await Ws();r(a);const l=await Ni();s(l.experimental)})()},[]),w.useEffect(()=>{(async()=>{e(await Z8())})()},[]),h.jsxs(h.Fragment,{children:[h.jsx(ks,{}),h.jsxs("section",{className:"models",children:[h.jsxs("div",{className:"info",children:[h.jsx("h1",{children:"Try our models"}),h.jsx("p",{children:"AllyAI offers several language models, try them all!"})]}),h.jsx("div",{className:"container",children:we.map((o,a)=>(!o.experimental||o.experimental===i)&&h.jsx(X8,{model:o,prompts:t,isPremium:n},a))})]})]})}function tD(t,e){const n=we.find(r=>r.symbole===window.location.pathname.at(6)).name.toUpperCase();Y.ref(`chats/${z.currentUser.uid}/${n}/${t}/`).remove().then(()=>{e(!0)})}function nD(t){Y.ref(`chats/${z.currentUser.uid}`).remove().then(()=>{t(!0),setTimeout(()=>{t(!1)},1e3)})}const rD=t=>{const e=window.location.pathname.at(6);we.find(r=>r.symbole===e).name.toUpperCase()&&navigator.clipboard.writeText(`${window.location.origin}/chat/${t}from${z.currentUser.uid}`)},iD=t=>{const e=window.location.pathname.at(6),n=we.find(r=>r.symbole===e).name.toUpperCase();return new Promise((r,i)=>{n||r("error");const s=t.split("from"),o=`chats/${s[1]}/${n}/${s[0]}`,a=`chats/${z.currentUser.uid}/${n}/${s[0]}`;Y.ref(o).on("value",l=>{const c=l.val();c||r("error"),Y.ref(a).set(c).then(()=>{r("back")})})})};function sD({id:t,experimental:e,history:n}){const[r,i]=w.useState(!1),s=Ft(),o=[{icon:Rk,do:()=>rD(t),exp:!0},{icon:xk,do:()=>tD(t,i),exp:!1}];w.useEffect(()=>{r&&(i(!1),s("/chats"))},[r]);function a({button:l}){return h.jsx("button",{onClick:()=>l.do(),children:h.jsx(B,{icon:l.icon})})}return h.jsxs("div",{className:"navbar",children:[h.jsxs("h1",{children:["Chatting with ",h.jsx("span",{children:we.find(l=>l.symbole===window.location.pathname.at(6)).name.toUpperCase()})]}),h.jsx("div",{className:"options",children:o.map((l,c)=>l.exp===!0?e===!0&&h.jsx(a,{button:l},c):h.jsx(a,{button:l},c))})]})}const Oy=t=>{const e=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),n=t.split(/```([\s\S]*?)```/);let r="";return n.forEach((i,s)=>{if(s%2===1){const o=e(i);r+=`<p class="code-block">${o}</p>`}else{const o=i.split(`
`);let a=[],l=!1;o.forEach(c=>{if(c.includes("|")){const u=c.split("|").map(d=>e(d.trim())).filter(d=>d);u.length>0&&(a.push(u),l=!0)}else{l&&a.length>0&&(r+=Ly(a),a=[],l=!1);let u=e(c);u=u.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>"),r+=`${u}
`}}),l&&a.length>0&&(r+=Ly(a))}}),r},Ly=t=>{let e="<table><thead><tr>";return t[0].forEach(r=>{e+=`<th>${r.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/_(.*?)_/g,"<em>$1</em>")}</th>`}),e+="</tr></thead><tbody>",t.slice(1).forEach(r=>{e+="<tr>",r.forEach(i=>{i=i.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/_(.*?)_/g,"<em>$1</em>"),e+=`<td>${i}</td>`}),e+="</tr>"}),e+="</tbody></table>",e},oD=t=>{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()},aD=(t,e,n,r)=>{r(s=>s.filter(o=>{var a;return((a=o.parts[0])==null?void 0:a.text)!==t.text}));const i=we.find(s=>s.symbole===window.location.pathname.at(6)).name.toUpperCase();ju(i,t.text,null,null,window.location.pathname.slice(6),e,n,t.file||[],null,t.key)};function lD({message:t,messagePath:e,history:n,setLoading:r,setHistory:i}){const[s,o]=w.useState(""),[a,l]=w.useState(!1),[c]=w.useState(we.find(u=>u.symbole===window.location.pathname.at(6)).name.toUpperCase());return w.useEffect(()=>{var u;if(((u=t==null?void 0:t.file)==null?void 0:u.length)>0){if(!t.file[0])return;const d=new Image;d.src=t.file[0],d.onload=()=>l(!0),d.onerror=()=>l(!1)}else l(!1)},[t.file]),w.useEffect(()=>{(async()=>{const d=await Ni(),f=t.author==="ai"?d.length:8192;if(t.loading===!0){const m=t.text.split(" ").slice(0,f),y=2e3/m.length;let E=0;o("");const g=setInterval(()=>{const p=m.slice(0,E+1).join(" "),v=Oy(p);if(o(v),E++,E>=m.length){clearInterval(g);const C=we.find(b=>b.symbole===window.location.pathname.at(6)).name.toUpperCase(),T=`chats/${z.currentUser.uid}/${C}/${e}/${t.key}`;Y.ref(T).update({loading:!1})}},y);return()=>clearInterval(g)}else{const m=Oy(t.text.slice(0,f));o(m)}})()},[t,e]),h.jsxs("div",{className:`message${(t==null?void 0:t.author)==="user"?" author":""}${(t==null?void 0:t.invalid)===!0?" invalid":""}`,children:[h.jsx("div",{className:"leftside",children:h.jsx("img",{src:Ja,alt:"logo of user"})}),h.jsxs("div",{className:"rightside",children:[h.jsxs("div",{className:"top",children:[a?h.jsxs("div",{className:"images",children:[t.file.slice(0,4).map(u=>h.jsx("img",{src:u,alt:"Message file"})),t.file.length>4?h.jsxs("div",{className:"count",children:["+",t.file.length-4]}):null]}):null,t.text.startsWith("data:image")?h.jsx("img",{src:t.text,alt:"Embedded image"}):h.jsx("p",{style:{whiteSpace:"pre-line"},dangerouslySetInnerHTML:{__html:s}})]}),h.jsxs("div",{className:"bottom",children:[c!=="ALLY-IMAGINE"?h.jsx("button",{onClick:()=>aD(t,n,r,i),children:h.jsx(B,{icon:jk})}):null,h.jsx("button",{onClick:()=>oD(t.text),children:h.jsx(B,{icon:qk})})]})]})]})}function cD(t,e,n){const r=we.find(s=>s.symbole===window.location.pathname.at(6)).name.toUpperCase(),i=Y.ref(`chats/${z.currentUser.uid}/${r}/${e}/`);return new Promise((s,o)=>{i.on("value",a=>{if(!a.exists()){s("back");return}const l=[],c=[];a.forEach(u=>{const d={text:u.val().message,date:u.val().time,author:u.val().author,loading:u.val().loading||!1,username:u.val().username,file:u.val().file||null,invalid:u.val().invalid,key:u.key};if(!po(u.val().message)&&u.val().message!==Of){const f={role:u.val().author==="user"?"user":"model",parts:[{text:u.val().message}]};c.push(f)}l.push(d)}),t(l),n(c),s("success")})})}const uD=t=>{Y.ref(`users/${z.currentUser.uid}/`).update({opinion:t})};function dD(){const t=[{text:"I love it!",emoji:Ak},{text:"Pretty good",emoji:Zk},{text:"It's okay",emoji:Hk},{text:"Could be better",emoji:zk},{text:"Not great",emoji:sx},{text:"Needs work",emoji:tx}],[e,n]=w.useState("");function r({opinion:i}){return h.jsxs("button",{onClick:()=>{uD(i.text),n(i.text)},children:[h.jsx(B,{icon:i.emoji})," ",i.text]})}return e===""&&h.jsxs("div",{className:"message",children:[h.jsx("div",{className:"leftside",children:h.jsx("img",{src:Ja,alt:"logo of user"})}),h.jsx("div",{className:"rightside",children:h.jsxs("div",{className:"top",children:[h.jsx("p",{children:"Help us develop, give your own opinion about us"}),h.jsx("div",{className:"feedback",children:h.jsx("div",{className:"feedback_buttons",children:t.map((i,s)=>h.jsx(r,{opinion:i},s))})})]})})]})}function hD({history:t,setMessage:e,message:n}){const[r,i]=w.useState([]);w.useEffect(()=>{if(!t)return;(async()=>{const a=await L8(t);i(Array.isArray(a)?a:[])})()},[t]);function s({suggestion:o}){return h.jsxs("div",{className:"suggestion",onClick:()=>e(o.trim()),children:[h.jsx("span",{children:h.jsx(B,{icon:Bk})}),h.jsx("p",{children:o.length>=40?`${o.substring(0,40)}...`:o})]})}return n.trim().length>0&&h.jsx("div",{className:"suggestions",children:r.slice(0,3).filter(o=>o.toLowerCase().includes(n.toLowerCase())).map((o,a)=>h.jsx(s,{suggestion:o},a))})}function fD({setActivate:t,uid:e,id:n}){const r=Ft(),[i,s]=w.useState({}),o=()=>{r("/chats")},a=()=>{t(!1),r(`/chat/${n.split("from")[0]}`)};return w.useEffect(()=>{(async()=>{const u={username:await HC(e)};s(u)})()},[e]),h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"blurred-bg"}),h.jsxs("div",{className:"floating_chats",children:[h.jsx("div",{className:"top",children:h.jsx("div",{className:"leftside",children:h.jsxs("span",{children:["Chat imported from ",i.username]})})}),h.jsx("div",{className:"bottom",children:h.jsxs("div",{className:"buttons",children:[h.jsxs("button",{onClick:()=>a(),children:[h.jsx(B,{icon:Dk})," Open chat"]}),h.jsxs("button",{onClick:()=>o(),children:[h.jsx(B,{icon:ix})," Back to chats"]})]})})]})]})}function pD({message:t,setHistory:e,id:n,loading:r,history:i,setLoading:s,setMessage:o,experimental:a}){const[l,c]=w.useState([]),u=Ft(),d=w.useRef(null),[f,m]=w.useState(0),_=we.find(p=>p.symbole===window.location.pathname.at(6)).name.toUpperCase(),[y,E]=w.useState(!1);w.useEffect(()=>{(async()=>{if(!(n.split("from").length>1))await cD(c,n,e)==="back"&&u("/chats");else{const C=await iD(n);C==="back"?E(!0):C==="error"&&u("/chats")}})()},[n,u,e]),w.useEffect(()=>{(async()=>{m(await Qa(_.toUpperCase()))})()},[i]),w.useEffect(()=>{d.current&&d.current.scrollTo({top:d.current.scrollHeight,behavior:"smooth"})},[l]);function g(){return h.jsxs("div",{className:"message wait",children:[h.jsx("div",{className:"leftside",children:h.jsx("img",{src:Ja,alt:"logo of user"})}),h.jsxs("div",{className:"rightside",children:[h.jsx("div",{className:"line"}),h.jsx("div",{className:"line"}),h.jsx("div",{className:"line"})]})]})}return h.jsxs("div",{className:"messages",ref:d,children:[l.map((p,v)=>h.jsx(lD,{message:p,messagePath:n,history:i,setLoading:s,setHistory:e},v)),r?h.jsx(g,{}):null,y&&h.jsx(fD,{setActivate:E,uid:n.split("from")[1],id:n}),!r&&f>0&&f%5===0?h.jsx(dD,{}):null,a&&h.jsx(hD,{message:t,history:i,setMessage:o})]})}function mD({currentChat:t,history:e,setLoading:n,loading:r,message:i,setMessage:s}){const[o,a]=w.useState(0),[l,c]=w.useState([]),u=we.find(p=>p.symbole===window.location.pathname.at(6)).name.toUpperCase(),[d,f]=w.useState(!1);w.useEffect(()=>{(async()=>{const v=await Ws();f(v)})()},[]),w.useEffect(()=>{(async()=>{a(await Qa(u.toUpperCase()))})()},[e]);const m=p=>{r||ju(u.toUpperCase(),i,s,p,t,e,n,l,c)},_=p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),m(p))},y=async p=>{const v=p.target.files;c(v?Array.from(v):null)},E=p=>{const v=p.clipboardData.items;for(let C=0;C<v.length;C++)if(v[C].type.startsWith("image/")){const T=v[C].getAsFile();T&&c(b=>[...b,T]);break}},g=d?999:we.find(p=>p.name.toUpperCase()===u.toUpperCase()).dailyLimit;return h.jsx("div",{className:"input",onPaste:E,children:h.jsxs("form",{className:"content",onSubmit:p=>m(p),children:[h.jsx("input",{id:"upload",type:"file",multiple:!0,accept:"image/*",disabled:r,onClick:()=>l?c([]):null,onChange:y}),u==="ALLY-IMAGINE"?null:h.jsxs("label",{className:l.length>0?"uploaded":"",htmlFor:"upload",children:[l.length>0?h.jsx("span",{children:l.length}):null,h.jsx(B,{icon:Kk})]}),h.jsx("textarea",{disabled:r||o>=g,onKeyDown:_,type:"text",placeholder:o>=g?"Prompts limit reached for today":r?"Wait for response...":"Ask question",onChange:p=>s(p.target.value),value:i}),h.jsx("button",{disabled:r||i.trim().length===0||o>=g,children:h.jsx(B,{icon:hw})})]})})}function gD(){var d;const t=Mr(),e=Ft(),[n,r]=w.useState([]),[i,s]=w.useState(((d=t.state)==null?void 0:d.loading)||!1),{id:o}=rw(),[a,l]=w.useState(""),[c,u]=w.useState(!1);return w.useEffect(()=>{e(`/chat/${o}`,{replace:!0,state:null})},[e,o]),w.useEffect(()=>{n.length===2&&s(!1),(async()=>{const m=await Ni();u(m.experimental)})()},[n]),h.jsxs(h.Fragment,{children:[h.jsx(ks,{}),h.jsxs("section",{className:"chat",children:[h.jsx(sD,{id:o,experimental:c}),h.jsx(pD,{message:a,setMessage:l,setHistory:r,id:o,loading:i,history:n,setLoading:s,experimental:c}),h.jsx(mD,{message:a,setMessage:l,currentChat:o,history:n,setLoading:s,loading:i})]})]})}const vD=["auto","English","Spanish","French","German","Russian","Chinese","Japanese","Korean","Arabic","Portuguese","Italian","Hindi","Bengali","Persian","Punjabi","Vietnamese","Malay","Telugu","Tamil","Marathi","Turkish","Urdu","Indonesian","German","Swedish","Norwegian","Danish","Dutch","Polish","Czech","Slovak","Hungarian","Romanian","Greek","Finnish","Hebrew","Thai","Filipino"],_D=["neutral","friendly","formal","informative","professional"];function yD(){const[t,e]=w.useState("Loading..."),[n,r]=w.useState("Loading..."),[i,s]=w.useState(!1),[o,a]=w.useState("auto"),[l,c]=w.useState("neutral"),[u,d]=w.useState(""),[f,m]=w.useState(!1),_=w.useRef(null);w.useEffect(()=>{(async()=>{const N=await Ni();e(N.temperature.toString()),r(N.length.toString()),a(N.language),d(N.rules),c(N.tone)})()},[]);function y(S){S!==o&&(a(S),s(!1))}function E(S){S!==l&&(c(S),m(!1))}const g=()=>{s(!i)},p=()=>{m(!f)},v=()=>{const S=_.current;S&&(S.style.height="auto",S.style.height=`${S.scrollHeight}px`)},C=S=>{d(S.target.value),v()};function T({lang:S}){return h.jsxs("div",{className:`language${S===o&&i?" primary":""}`,onClick:()=>y(S),children:[h.jsx("span",{children:S}),S===o?h.jsx("button",{onClick:()=>g(),children:h.jsx(B,{icon:Dh})}):null]})}function b({lang:S}){return h.jsxs("div",{className:`language${S===l&&f?" primary":""}`,onClick:()=>E(S),children:[h.jsx("span",{children:S}),S===l?h.jsx("button",{onClick:()=>p(),children:h.jsx(B,{icon:Dh})}):null]})}return h.jsxs("div",{className:"container",children:[h.jsx("h2",{children:"Output Settings"}),h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"Temperature"}),h.jsx("p",{children:"Temperature controls the randomness of the output. Use higher values for more creative responses, and lower values for more deterministic responses. Values can range from [0.0, 2.0]."}),h.jsx("input",{type:"text",maxLength:1,placeholder:"Values can range from [0.0, 2.0].",value:t,onChange:S=>e(S.target.value)})]}),h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"Output Language"}),h.jsx("p",{children:"Select the language in which you want to receive replies"}),h.jsxs("div",{className:"select_language",children:[h.jsx(T,{lang:o},"English"),i?h.jsx("div",{className:"lang_list",children:vD.filter(S=>S!==o).map((S,N)=>h.jsx(T,{lang:S},N))}):null]})]}),h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"Output Length"}),h.jsx("p",{children:"Control how long the text of the displayed response can be. Values can range from [1024, 8192]"}),h.jsx("input",{type:"text",placeholder:"Values can range from [1024, 8192].",value:n,onChange:S=>r(S.target.value)})]}),h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"Output Tone"}),h.jsx("p",{children:"Control the tone of the messages you receive"}),h.jsxs("div",{className:"select_language",children:[h.jsx(b,{lang:l},"neutral"),f?h.jsx("div",{className:"lang_list",children:_D.filter(S=>S!==l).map((S,N)=>h.jsx(b,{lang:S},N))}):null]})]}),h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"Custom Instructions"}),h.jsx("p",{children:"Provide your own rules that AllyAI will follow in each of your chats"}),h.jsxs("div",{className:"rules",children:[h.jsx("textarea",{ref:_,value:u,onChange:C,maxLength:300,type:"text",placeholder:"Your instructions..."}),h.jsx("span",{children:300-u.length})]}),h.jsx("button",{onClick:()=>k8(t,n,e,r,o,a,u,d,l,c),children:"SAVE SETTINGS"})]})]})}function wD({tabs:t,selectedTab:e,setSelectedTab:n}){const r=s=>{n(s)};function i({tab:s}){return h.jsx("button",{onClick:()=>r(s),className:`settings_selecting_tab ${e===s?"active":""}`,children:s},s)}return h.jsxs("div",{className:"settings_selecting",children:[h.jsx("h2",{children:"Settings"}),h.jsx("div",{className:"settings_selecting_tabs",children:t.map((s,o)=>h.jsx(i,{tab:s.title},o))})]})}const ED=()=>{z.signOut().then(()=>{localStorage.removeItem("user"),window.location.reload()})},CD={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]},GC=CD,SD={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"]};function ID({isPremium:t}){function e(){return h.jsx("stripe-buy-button",{"buy-button-id":"buy_btn_1Qc57XP2S3Dculr8dq3ppuby","publishable-key":"pk_live_51Qc4feP2S3Dculr8fK4R12r5FZeWzaH0xG52XVPQpJ9FAH3jaTsB73HFtJm34MqyNuzCE7TjAdKkfwn1yelhw21400xAygROAl","customer-email":z.currentUser.email,"success-url":"https://ally-ai.lol/success?session_id={CHECKOUT_SESSION_ID}","cancel-url":"https://ally-ai.lol/settings"})}return h.jsxs("div",{className:"container",children:[h.jsx("h2",{children:"User settings"}),h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"Premium account"}),h.jsx("p",{children:"Get access to additional features before the premiere by enabling access to the experimental features tab. Unlimited prompts and more"}),t?h.jsxs("div",{className:"checkbox checkbox-wide",children:["PREMIUM ENABLED ",h.jsx(B,{icon:GC})]}):h.jsx(e,{})]}),h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"Logout"}),h.jsx("p",{children:"Log out of your account to prevent unwanted authorization, you will not be automatically logged in the next time you visit the site"}),h.jsx("button",{onClick:()=>ED(),children:"LOGOUT"})]})]})}const TD=t=>{Y.ref(`users/${z.currentUser.uid}/custom`).update({rules:t})};function kD(){const[t,e]=w.useState(!1),[n,r]=w.useState(!1),i=w.useRef(null),[s,o]=w.useState("");w.useEffect(()=>{(async()=>{const d=await Ni();e(d.experimental)})()},[]);const a=()=>{e(!t),Y.ref(`users/${z.currentUser.uid}/settings`).update({experimental:!t})},l=()=>{const u=i.current;u&&(u.style.height="auto",u.style.height=`${u.scrollHeight}px`)},c=u=>{o(u.target.value),l()};return h.jsxs("div",{className:"container",children:[h.jsx("h2",{children:"Experimental Settings"}),t&&h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"Chats Management"}),h.jsx("p",{children:"Manage all the chats you own"}),h.jsxs("div",{className:`checkbox checkbox-wide${n?" active":""}`,onClick:()=>nD(r),children:[h.jsx(B,{icon:n?Cv:$k}),n?"Deleted successfully":"Delete all chats"]})]}),t&&h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"AI Assistant"}),h.jsx("p",{children:"Set the rules for your own AI assistant"}),h.jsxs("div",{className:"rules",children:[h.jsx("textarea",{ref:i,value:s,onChange:c,maxLength:300,type:"text",placeholder:"Your instructions..."}),h.jsx("span",{children:300-s.length})]}),h.jsx("button",{onClick:()=>TD(s),children:"SAVE RULES"})]}),h.jsxs("div",{className:"list",children:[h.jsx("span",{children:"Experimental Beta Features"}),h.jsx("p",{children:"Allow experimental changes that will appear in the next updates, may be unstable (run at your own risk)"}),h.jsx("div",{className:`checkbox ${t&&"active"}`,onClick:()=>a(),children:h.jsx(B,{icon:t?Cv:Xk})})]})]})}function xD(){var l,c;const t=Mr(),e=Ft(),[n,r]=w.useState(((l=t.state)==null?void 0:l.category)||"User settings"),[i,s]=w.useState(!1);w.useEffect(()=>{e("/settings",{replace:!0,state:null})},[e]),w.useEffect(()=>{(async()=>{const d=await Ws();s(d)})()},[]);const a=[{title:"Output settings",component:h.jsx(yD,{})},{title:"User settings",component:h.jsx(ID,{isPremium:i})},{title:"Experimental settings",component:h.jsx(kD,{}),display:i}].filter(u=>!("display"in u)||u.display);return h.jsxs(h.Fragment,{children:[h.jsx(ks,{}),h.jsxs("section",{className:"settings",children:[h.jsx(wD,{tabs:a,selectedTab:n,setSelectedTab:r}),(c=a.find(u=>u.title===n))==null?void 0:c.component]})]})}const bD="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";function ND(){const[t,e]=w.useState(!1),[n,r]=w.useState({});return w.useEffect(()=>{const s=new URLSearchParams(window.location.search).get("session_id");(async()=>{try{const l=await(await fetch(`https://api.stripe.com/v1/checkout/sessions/${s}`,{method:"GET",headers:{Authorization:`Bearer ${bD}`}})).json();r(l),l.payment_status==="paid"&&z.currentUser.email===l.customer_details.email?(e(!0),z8()):e(!1)}catch(a){console.error("Błąd weryfikacji płatności:",a)}})()},[]),t?h.jsxs(h.Fragment,{children:[h.jsx(ks,{}),h.jsx("section",{className:"success",children:h.jsxs("div",{className:"success__container",children:[h.jsx("div",{className:"success__icon",children:h.jsx(B,{icon:GC})}),h.jsx("h1",{children:"Payment was Successful!"}),h.jsx("p",{children:"Your payment has been successfully done."}),h.jsxs("div",{className:"success__details",children:[h.jsxs("div",{className:"success__row",children:[h.jsx("span",{children:"Total Payment"}),h.jsxs("strong",{children:[(n==null?void 0:n.currency.toUpperCase())||"PLN"," ",(n==null?void 0:n.amount_total)||"15"]})]}),h.jsxs("div",{className:"success__row",children:[h.jsx("span",{children:"Email"}),h.jsx("strong",{children:(n==null?void 0:n.customer_details.email)||"undefined"})]})]})]})})]}):h.jsxs(h.Fragment,{children:[h.jsx(ks,{}),h.jsx("section",{className:"success",children:h.jsxs("div",{className:"success__container",children:[h.jsx("h1",{children:"Payment Failed!"}),h.jsx("p",{children:"Your payment has not been successfully done."})]})})]})}function PD(){return h.jsxs("nav",{className:"navbar",children:[h.jsx("div",{className:"logo",children:h.jsx("h2",{children:"AllyAI"})}),h.jsxs("div",{className:"nav-links",children:[h.jsx("a",{href:"#",children:"Home"}),h.jsx("a",{href:"#about",children:"About"}),h.jsx("a",{href:"#pricing",children:"Pricing"}),h.jsx(ba,{to:"/chats",className:"sign-in",children:"Get Started"})]})]})}const RD="/assets/presentation-ssP90fKL.png",AD=()=>{const t=window.navigator.userAgent.toLowerCase();switch(!0){case t.includes("windows"):return"Windows";case t.includes("linux"):return"Linux";default:return""}},YC={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},OD={prefix:"fab",iconName:"windows",icon:[448,512,[],"f17a","M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"]},LD={prefix:"fab",iconName:"linux",icon:[448,512,[],"f17c","M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"]},KC={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},DD=t=>{t==="windows"?window.open("https://github.com/Adiksuu/AllyAI-website/releases/download/v1.0.0/AllyAI-1.0.0-win.zip","_blank"):window.open("https://github.com/Adiksuu/AllyAI-website/releases/download/v1.0.0/allyai.appimage","_blank")};function MD(){const[t,e]=w.useState("windows");return w.useEffect(()=>{e(AD())},[]),h.jsxs("section",{className:"hero",children:[h.jsxs("div",{className:"hero-content",children:[h.jsx("h1",{children:"Your Intelligent Chatbot"}),h.jsx("p",{children:"Take advantage of the new AI powered chatbot on the market"}),h.jsxs("div",{className:"cta-buttons",children:[h.jsx(ba,{to:"/chats",className:"try-free",children:"Try For Free"}),t==="Windows"||t==="Linux"?h.jsxs("a",{onClick:()=>DD(t),className:"download",children:["Download for ",t," ",h.jsx(B,{icon:t==="Windows"?OD:LD})]}):null]})]}),h.jsx("div",{className:"hero-image",children:h.jsx("img",{src:RD,alt:"showcase image"})})]})}function FD(){return h.jsxs("section",{id:"pricing",className:"pricing",children:[h.jsx("h2",{children:"Pricing Plans"}),h.jsx("div",{className:"pricing-cards",children:h.jsxs("div",{className:"price-card popular",children:[h.jsx("div",{className:"popular-badge",children:"Most Popular"}),h.jsxs("div",{className:"card-header",children:[h.jsx("h3",{children:"Premium"}),h.jsxs("p",{className:"price",children:["PLN 15",h.jsx("span",{children:"/forever"})]})]}),h.jsxs("ul",{children:[h.jsx("li",{children:"All Free features"}),h.jsx("li",{children:"Unlimited prompts"}),h.jsx("li",{children:"Priority response time"}),h.jsx("li",{children:"Experimental features"})]}),h.jsx(ba,{to:"/settings",className:"get-started",children:"Try Premium"})]})})]})}function jD(){return h.jsxs("section",{id:"about",className:"about",children:[h.jsx("h2",{children:"About"}),h.jsxs("div",{className:"features-grid",children:[h.jsxs("div",{className:"feature-card",children:[h.jsx("div",{className:"icon",children:"🎨"}),h.jsx("h3",{children:"Customizable"}),h.jsx("p",{children:"Adjust tone, formality, and language style to your preferences"})]}),h.jsxs("div",{className:"feature-card",children:[h.jsx("div",{className:"icon",children:"🤖"}),h.jsx("h3",{children:"Smart Learning"}),h.jsx("p",{children:"Adapts to your communication style and remembers your preferences"})]}),h.jsxs("div",{className:"feature-card",children:[h.jsx("div",{className:"icon",children:"🔒"}),h.jsx("h3",{children:"Secure & Private"}),h.jsx("p",{children:"Enterprise-grade security with end-to-end encryption"})]}),h.jsxs("div",{className:"feature-card",children:[h.jsx("div",{className:"icon",children:"⚡"}),h.jsx("h3",{children:"Lightning Fast"}),h.jsx("p",{children:"Get instant responses powered by cutting-edge AI technology"})]})]})]})}function UD(){return h.jsxs("div",{className:"main",children:[h.jsx(PD,{}),h.jsx(MD,{}),h.jsx(jD,{}),h.jsx(FD,{})]})}function WD(){const t=[{path:"/",element:h.jsx(UD,{})},{path:"/chats",element:h.jsx(J8,{})},{path:"/settings",element:h.jsx(xD,{})},{path:"/models",element:h.jsx(eD,{})},{path:"/chat/:id",element:h.jsx(gD,{})},{path:"/success",element:h.jsx(ND,{})}];return h.jsx(gk,{children:t.map((e,n)=>h.jsx(aw,{path:e.path,element:e.element},n))})}function qC(t,e,n,r,i,s,o,a){if(t.preventDefault(),e==="login")z.signInWithEmailAndPassword(n,r).then(async()=>{o(!0);const l={email:n,password:r};localStorage.setItem("user",JSON.stringify(l)),await a(z.currentUser.emailVerified)}).catch(l=>{l.code==="auth/invalid-email"?i("This email is invalid, try another one"):l.code==="auth/missing-password"?i("The invalid password"):l.code==="auth/invalid-credential"?i("The email or password is wrong, try again"):i(l.code)});else{if(s.trim().length<3){i("The username is too short");return}z.createUserWithEmailAndPassword(n,r).then(()=>{const l={email:n,password:r,username:s,prompts:{"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,"ALLY-CUSTOM":0,resetAt:new Date().getTime()+864e5},settings:{temperature:1,length:8192,language:"auto",rules:""}};Y.ref(`users/${z.currentUser.uid}/`).set(l),o(!0),localStorage.setItem("user",JSON.stringify(l))}).catch(l=>{l.code==="auth/email-already-in-use"?i("This email is already in use, try another one"):l.code==="auth/invalid-email"?i("This email is invalid, try another one"):l.code==="auth/weak-password"?i("The password is too weak, it should be at least 6 characters long"):i(l.code)})}}function QC(t,e,n,r){qm(t,e).then(async i=>{const s=i.user,o={email:s.email,password:`google-${s.uid}`,username:s.displayName,prompts:{"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,"ALLY-CUSTOM":0,resetAt:new Date().getTime()+24*60*60*1e3},settings:{temperature:1,length:8192,language:"auto",rules:""}};(await Y.ref(`users/${s.uid}/`).once("value")).exists()||Y.ref(`users/${s.uid}/`).set(o),n(!0),r(s.emailVerified)}).catch(i=>{console.log(i)})}function JC(t,e,n,r){qm(t,e).then(async i=>{const s=i.user,o={email:s.email,password:`facebook-${s.uid}`,username:s.displayName,prompts:{"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,"ALLY-CUSTOM":0,resetAt:new Date().getTime()+24*60*60*1e3},settings:{temperature:1,length:8192,language:"auto",rules:""}};(await Y.ref(`users/${s.uid}/`).once("value")).exists()||Y.ref(`users/${s.uid}/`).set(o),n(!0),r(s.emailVerified)}).catch(i=>{console.log(i)})}function zD({setCurrentView:t,setAuthorized:e,setEmailVerified:n}){const[r,i]=w.useState(""),[s,o]=w.useState(""),[a,l]=w.useState("");return h.jsx("section",{className:"auth",children:h.jsxs("div",{className:"auth-container",children:[h.jsx("h1",{children:"Welcome back"}),h.jsxs("div",{onClick:()=>QC(z,UC,e,n),className:"google-btn",children:[h.jsx(B,{icon:YC})," Continue with Google"]}),h.jsxs("div",{onClick:()=>JC(z,WC,e,n),className:"google-btn",children:[h.jsx(B,{icon:KC})," Continue with Facebook"]}),h.jsx("div",{className:"divider",children:h.jsx("span",{children:"OR"})}),h.jsxs("form",{onSubmit:c=>qC(c,"login",r,s,l,"",e,n),children:[h.jsx("input",{type:"email",placeholder:"Enter email address",value:r,onChange:c=>i(c.target.value),required:!0}),h.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:c=>o(c.target.value),required:!0}),a&&h.jsx("div",{className:"error",children:a}),h.jsx("button",{type:"submit",className:"continue-btn",children:"Continue"})]}),h.jsxs("p",{className:"terms",children:["Don't have an account? ",h.jsx("span",{onClick:()=>t("register"),children:"Sign Up"})]})]})})}function $D({setCurrentView:t,setAuthorized:e,setEmailVerified:n}){const[r,i]=w.useState(""),[s,o]=w.useState(""),[a,l]=w.useState(""),[c,u]=w.useState("");return h.jsx("section",{className:"auth",children:h.jsxs("div",{className:"auth-container",children:[h.jsx("h1",{children:"Create your account"}),h.jsxs("div",{onClick:()=>QC(z,UC,e,n),className:"google-btn",children:[h.jsx(B,{icon:YC})," Continue with Google"]}),h.jsxs("div",{onClick:()=>JC(z,WC,e,n),className:"google-btn",children:[h.jsx(B,{icon:KC})," Continue with Facebook"]}),h.jsx("div",{className:"divider",children:h.jsx("span",{children:"OR"})}),h.jsxs("form",{onSubmit:d=>qC(d,"register",r,s,u,a,e),children:[h.jsx("input",{type:"text",placeholder:"Email...",value:r,onChange:d=>i(d.target.value)}),h.jsx("input",{type:"text",placeholder:"Username...",value:a,onChange:d=>l(d.target.value)}),h.jsx("input",{type:"password",placeholder:"Password...",value:s,onChange:d=>o(d.target.value)}),h.jsx("button",{type:"submit",className:"continue-btn",children:"Continue"}),c.length>0?h.jsx("span",{children:c}):null]}),h.jsxs("p",{className:"terms",children:["Don't have an account? ",h.jsx("span",{onClick:()=>t("login"),children:"Sign Up"})]})]})})}function VD(){return h.jsx("section",{className:"loading",children:h.jsx("img",{src:Ja,alt:"logo of app"})})}function BD({setAuthorized:t,setEmailVerified:e}){const[n,r]=w.useState("login"),[i,s]=w.useState(!0);return w.useEffect(()=>{z.onAuthStateChanged(o=>{o&&(t(!0),e(o.emailVerified)),s(!1)})},[]),i?h.jsx(VD,{}):h.jsx(h.Fragment,{children:n==="login"?h.jsx(zD,{setCurrentView:r,setAuthorized:t,setEmailVerified:e}):h.jsx($D,{setCurrentView:r,setAuthorized:t,setEmailVerified:e})})}const HD=()=>{z.currentUser.sendEmailVerification()};function GD(){return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"blurred-bg"}),h.jsxs("div",{className:"verify_email",children:[h.jsx("div",{className:"top",children:h.jsx("div",{className:"icon",children:h.jsx(B,{icon:SD})})}),h.jsxs("div",{className:"info",children:[h.jsx("h2",{children:"Please verify your email"}),h.jsxs("p",{children:["We have sent confirmation to ",h.jsx("strong",{children:z.currentUser.email}),". Check your email to verify"]})]}),h.jsx("div",{className:"buttons",children:h.jsx("button",{onClick:()=>HD(),children:"Send again"})})]})]})}function YD(){const t=Mr(),[e,n]=w.useState(!1),[r,i]=w.useState(!1);return!e&&t.pathname!=="/"?h.jsx(BD,{setAuthorized:n,setEmailVerified:i}):h.jsxs(h.Fragment,{children:[e&&!r?h.jsx(GD,{}):null,h.jsx(WD,{})]})}function KD(){return h.jsx(Sk,{children:h.jsx(YD,{})})}K0(document.getElementById("root")).render(h.jsx(w.StrictMode,{children:h.jsx(KD,{})}));
