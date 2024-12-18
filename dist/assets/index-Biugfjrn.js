function UI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ny(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Py={exports:{}},Dc={},by={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),jI=Symbol.for("react.portal"),WI=Symbol.for("react.fragment"),zI=Symbol.for("react.strict_mode"),BI=Symbol.for("react.profiler"),VI=Symbol.for("react.provider"),$I=Symbol.for("react.context"),HI=Symbol.for("react.forward_ref"),GI=Symbol.for("react.suspense"),YI=Symbol.for("react.memo"),KI=Symbol.for("react.lazy"),Qm=Symbol.iterator;function qI(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var Ay={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,Oy={};function Ss(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||Ay}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ly(){}Ly.prototype=Ss.prototype;function Pf(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||Ay}var bf=Pf.prototype=new Ly;bf.constructor=Pf;xy(bf,Ss.prototype);bf.isPureReactComponent=!0;var Jm=Array.isArray,Dy=Object.prototype.hasOwnProperty,Af={current:null},My={key:!0,ref:!0,__self:!0,__source:!0};function Fy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dy.call(e,r)&&!My.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wa,type:t,key:s,ref:o,props:i,_owner:Af.current}}function QI(t,e){return{$$typeof:wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===wa}function JI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xm=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JI(""+t.key):e.toString(36)}function vl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wa:case jI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Uu(o,0):r,Jm(i)?(n="",t!=null&&(n=t.replace(Xm,"$&/")+"/"),vl(i,e,n,"",function(c){return c})):i!=null&&(xf(i)&&(i=QI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Uu(s,a);o+=vl(s,e,n,l,i)}else if(l=qI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Uu(s,a++),o+=vl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var r=[],i=0;return vl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function XI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Je={current:null},_l={transition:null},ZI={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:_l,ReactCurrentOwner:Af};function Uy(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=Ss;V.Fragment=WI;V.Profiler=BI;V.PureComponent=Pf;V.StrictMode=zI;V.Suspense=GI;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZI;V.act=Uy;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Af.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dy.call(e,l)&&!My.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:wa,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:$I,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VI,_context:t},t.Consumer=t};V.createElement=Fy;V.createFactory=function(t){var e=Fy.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:HI,render:t}};V.isValidElement=xf;V.lazy=function(t){return{$$typeof:KI,_payload:{_status:-1,_result:t},_init:XI}};V.memo=function(t,e){return{$$typeof:YI,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};V.unstable_act=Uy;V.useCallback=function(t,e){return Je.current.useCallback(t,e)};V.useContext=function(t){return Je.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Je.current.useDeferredValue(t)};V.useEffect=function(t,e){return Je.current.useEffect(t,e)};V.useId=function(){return Je.current.useId()};V.useImperativeHandle=function(t,e,n){return Je.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Je.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Je.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Je.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Je.current.useReducer(t,e,n)};V.useRef=function(t){return Je.current.useRef(t)};V.useState=function(t){return Je.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Je.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Je.current.useTransition()};V.version="18.3.1";by.exports=V;var E=by.exports;const Of=Ny(E),eS=UI({__proto__:null,default:Of},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=E,nS=Symbol.for("react.element"),rS=Symbol.for("react.fragment"),iS=Object.prototype.hasOwnProperty,sS=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oS={key:!0,ref:!0,__self:!0,__source:!0};function jy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iS.call(e,r)&&!oS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nS,type:t,key:s,ref:o,props:i,_owner:sS.current}}Dc.Fragment=rS;Dc.jsx=jy;Dc.jsxs=jy;Py.exports=Dc;var m=Py.exports,Wy={exports:{}},Ct={},zy={exports:{}},By={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,M){var j=b.length;b.push(M);e:for(;0<j;){var ve=j-1>>>1,Ne=b[ve];if(0<i(Ne,M))b[ve]=M,b[j]=Ne,j=ve;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var M=b[0],j=b.pop();if(j!==M){b[0]=j;e:for(var ve=0,Ne=b.length,Ka=Ne>>>1;ve<Ka;){var jr=2*(ve+1)-1,Fu=b[jr],Wr=jr+1,qa=b[Wr];if(0>i(Fu,j))Wr<Ne&&0>i(qa,Fu)?(b[ve]=qa,b[Wr]=j,ve=Wr):(b[ve]=Fu,b[jr]=j,ve=jr);else if(Wr<Ne&&0>i(qa,j))b[ve]=qa,b[Wr]=j,ve=Wr;else break e}}return M}function i(b,M){var j=b.sortIndex-M.sortIndex;return j!==0?j:b.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,f=!1,_=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=b)r(c),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(c)}}function C(b){if(w=!1,v(b),!_)if(n(l)!==null)_=!0,Du(k);else{var M=n(c);M!==null&&Mu(C,M.startTime-b)}}function k(b,M){_=!1,w&&(w=!1,g(x),x=-1),f=!0;var j=h;try{for(v(M),d=n(l);d!==null&&(!(d.expirationTime>M)||b&&!Ut());){var ve=d.callback;if(typeof ve=="function"){d.callback=null,h=d.priorityLevel;var Ne=ve(d.expirationTime<=M);M=t.unstable_now(),typeof Ne=="function"?d.callback=Ne:d===n(l)&&r(l),v(M)}else r(l);d=n(l)}if(d!==null)var Ka=!0;else{var jr=n(c);jr!==null&&Mu(C,jr.startTime-M),Ka=!1}return Ka}finally{d=null,h=j,f=!1}}var N=!1,P=null,x=-1,ee=5,z=-1;function Ut(){return!(t.unstable_now()-z<ee)}function Us(){if(P!==null){var b=t.unstable_now();z=b;var M=!0;try{M=P(!0,b)}finally{M?js():(N=!1,P=null)}}else N=!1}var js;if(typeof p=="function")js=function(){p(Us)};else if(typeof MessageChannel<"u"){var qm=new MessageChannel,FI=qm.port2;qm.port1.onmessage=Us,js=function(){FI.postMessage(null)}}else js=function(){y(Us,0)};function Du(b){P=b,N||(N=!0,js())}function Mu(b,M){x=y(function(){b(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){_||f||(_=!0,Du(k))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var j=h;h=M;try{return b()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,M){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var j=h;h=b;try{return M()}finally{h=j}},t.unstable_scheduleCallback=function(b,M,j){var ve=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ve+j:ve):j=ve,b){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=j+Ne,b={id:u++,callback:M,priorityLevel:b,startTime:j,expirationTime:Ne,sortIndex:-1},j>ve?(b.sortIndex=j,e(c,b),n(l)===null&&b===n(c)&&(w?(g(x),x=-1):w=!0,Mu(C,j-ve))):(b.sortIndex=Ne,e(l,b),_||f||(_=!0,Du(k))),b},t.unstable_shouldYield=Ut,t.unstable_wrapCallback=function(b){var M=h;return function(){var j=h;h=M;try{return b.apply(this,arguments)}finally{h=j}}}})(By);zy.exports=By;var aS=zy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=E,yt=aS;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vy=new Set,Oo={};function yi(t,e){os(t,e),os(t+"Capture",e)}function os(t,e){for(Oo[t]=e,t=0;t<e.length;t++)Vy.add(e[t])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Md=Object.prototype.hasOwnProperty,cS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zm={},eg={};function uS(t){return Md.call(eg,t)?!0:Md.call(Zm,t)?!1:cS.test(t)?eg[t]=!0:(Zm[t]=!0,!1)}function dS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hS(t,e,n,r){if(e===null||typeof e>"u"||dS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lf=/[\-:]([a-z])/g;function Df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lf,Df);ze[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lf,Df);ze[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lf,Df);ze[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mf(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hS(e,n,i,r)&&(n=null),r||i===null?uS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),xi=Symbol.for("react.portal"),Oi=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),jd=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),Gy=Symbol.for("react.offscreen"),tg=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=tg&&t[tg]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,ju;function no(t){if(ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||""}return`
`+ju+t}var Wu=!1;function zu(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?no(t):""}function fS(t){switch(t.tag){case 5:return no(t.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return t=zu(t.type,!1),t;case 11:return t=zu(t.type.render,!1),t;case 1:return t=zu(t.type,!0),t;default:return""}}function Wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Oi:return"Fragment";case xi:return"Portal";case Fd:return"Profiler";case Ff:return"StrictMode";case Ud:return"Suspense";case jd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hy:return(t.displayName||"Context")+".Consumer";case $y:return(t._context.displayName||"Context")+".Provider";case Uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:Wd(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return Wd(t(e))}catch{}}return null}function pS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wd(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mS(t){var e=Yy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=mS(t))}function Ky(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Yy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zd(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ng(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qy(t,e){e=e.checked,e!=null&&Mf(t,"checked",e,!1)}function Bd(t,e){qy(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vd(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vd(t,e,n){(e!=="number"||Ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function Yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(ro(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function Qy(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,Xy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gS=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){gS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function Zy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function e0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vS=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gd(t,e){if(e){if(vS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Yd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=null;function Wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qd=null,Ki=null,qi=null;function og(t){if(t=Ia(t)){if(typeof qd!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Wc(e),qd(t.stateNode,t.type,e))}}function t0(t){Ki?qi?qi.push(t):qi=[t]:Ki=t}function n0(){if(Ki){var t=Ki,e=qi;if(qi=Ki=null,og(t),e)for(t=0;t<e.length;t++)og(e[t])}}function r0(t,e){return t(e)}function i0(){}var Bu=!1;function s0(t,e,n){if(Bu)return t(e,n);Bu=!0;try{return r0(t,e,n)}finally{Bu=!1,(Ki!==null||qi!==null)&&(i0(),n0())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var r=Wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Qd=!1;if(Nn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Qd=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Qd=!1}function _S(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var fo=!1,Fl=null,Ul=!1,Jd=null,yS={onError:function(t){fo=!0,Fl=t}};function wS(t,e,n,r,i,s,o,a,l){fo=!1,Fl=null,_S.apply(yS,arguments)}function ES(t,e,n,r,i,s,o,a,l){if(wS.apply(this,arguments),fo){if(fo){var c=Fl;fo=!1,Fl=null}else throw Error(S(198));Ul||(Ul=!0,Jd=c)}}function wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ag(t){if(wi(t)!==t)throw Error(S(188))}function CS(t){var e=t.alternate;if(!e){if(e=wi(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ag(i),t;if(s===r)return ag(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function a0(t){return t=CS(t),t!==null?l0(t):null}function l0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l0(t);if(e!==null)return e;t=t.sibling}return null}var c0=yt.unstable_scheduleCallback,lg=yt.unstable_cancelCallback,IS=yt.unstable_shouldYield,SS=yt.unstable_requestPaint,_e=yt.unstable_now,TS=yt.unstable_getCurrentPriorityLevel,zf=yt.unstable_ImmediatePriority,u0=yt.unstable_UserBlockingPriority,jl=yt.unstable_NormalPriority,kS=yt.unstable_LowPriority,d0=yt.unstable_IdlePriority,Mc=null,un=null;function RS(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Mc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:bS,NS=Math.log,PS=Math.LN2;function bS(t){return t>>>=0,t===0?32:31-(NS(t)/PS|0)|0}var el=64,tl=4194304;function io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=io(a):(s&=o,s!==0&&(r=io(s)))}else o=n&~i,o!==0?r=io(o):s!==0&&(r=io(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function AS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=AS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function OS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function f0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p0,Vf,m0,g0,v0,Zd=!1,nl=[],rr=null,ir=null,sr=null,Mo=new Map,Fo=new Map,Kn=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cg(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function Bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ia(e),e!==null&&Vf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DS(t,e,n,r,i){switch(e){case"focusin":return rr=Bs(rr,t,e,n,r,i),!0;case"dragenter":return ir=Bs(ir,t,e,n,r,i),!0;case"mouseover":return sr=Bs(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mo.set(s,Bs(Mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fo.set(s,Bs(Fo.get(s)||null,t,e,n,r,i)),!0}return!1}function _0(t){var e=Gr(t.target);if(e!==null){var n=wi(e);if(n!==null){if(e=n.tag,e===13){if(e=o0(n),e!==null){t.blockedOn=e,v0(t.priority,function(){m0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kd=r,n.target.dispatchEvent(r),Kd=null}else return e=Ia(n),e!==null&&Vf(e),t.blockedOn=n,!1;e.shift()}return!0}function ug(t,e,n){yl(t)&&n.delete(e)}function MS(){Zd=!1,rr!==null&&yl(rr)&&(rr=null),ir!==null&&yl(ir)&&(ir=null),sr!==null&&yl(sr)&&(sr=null),Mo.forEach(ug),Fo.forEach(ug)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Zd||(Zd=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,MS)))}function Uo(t){function e(i){return Vs(i,t)}if(0<nl.length){Vs(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Vs(rr,t),ir!==null&&Vs(ir,t),sr!==null&&Vs(sr,t),Mo.forEach(e),Fo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)_0(n),n.blockedOn===null&&Kn.shift()}var Qi=Fn.ReactCurrentBatchConfig,zl=!0;function FS(t,e,n,r){var i=K,s=Qi.transition;Qi.transition=null;try{K=1,$f(t,e,n,r)}finally{K=i,Qi.transition=s}}function US(t,e,n,r){var i=K,s=Qi.transition;Qi.transition=null;try{K=4,$f(t,e,n,r)}finally{K=i,Qi.transition=s}}function $f(t,e,n,r){if(zl){var i=eh(t,e,n,r);if(i===null)Zu(t,e,r,Bl,n),cg(t,r);else if(DS(i,t,e,n,r))r.stopPropagation();else if(cg(t,r),e&4&&-1<LS.indexOf(t)){for(;i!==null;){var s=Ia(i);if(s!==null&&p0(s),s=eh(t,e,n,r),s===null&&Zu(t,e,r,Bl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zu(t,e,r,null,n)}}var Bl=null;function eh(t,e,n,r){if(Bl=null,t=Wf(r),t=Gr(t),t!==null)if(e=wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bl=t,null}function y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TS()){case zf:return 1;case u0:return 4;case jl:case kS:return 16;case d0:return 536870912;default:return 16}default:return 16}}var Qn=null,Hf=null,wl=null;function w0(){if(wl)return wl;var t,e=Hf,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wl=i.slice(t,1<r?1-r:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function dg(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:dg,this.isPropagationStopped=dg,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=It(Ts),Ca=de({},Ts,{view:0,detail:0}),jS=It(Ca),$u,Hu,$s,Fc=de({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?($u=t.screenX-$s.screenX,Hu=t.screenY-$s.screenY):Hu=$u=0,$s=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),hg=It(Fc),WS=de({},Fc,{dataTransfer:0}),zS=It(WS),BS=de({},Ca,{relatedTarget:0}),Gu=It(BS),VS=de({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),$S=It(VS),HS=de({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GS=It(HS),YS=de({},Ts,{data:0}),fg=It(YS),KS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QS[t])?!!e[t]:!1}function Yf(){return JS}var XS=de({},Ca,{key:function(t){if(t.key){var e=KS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yf,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZS=It(XS),eT=de({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pg=It(eT),tT=de({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yf}),nT=It(tT),rT=de({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),iT=It(rT),sT=de({},Fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oT=It(sT),aT=[9,13,27,32],Kf=Nn&&"CompositionEvent"in window,po=null;Nn&&"documentMode"in document&&(po=document.documentMode);var lT=Nn&&"TextEvent"in window&&!po,E0=Nn&&(!Kf||po&&8<po&&11>=po),mg=" ",gg=!1;function C0(t,e){switch(t){case"keyup":return aT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function cT(t,e){switch(t){case"compositionend":return I0(e);case"keypress":return e.which!==32?null:(gg=!0,mg);case"textInput":return t=e.data,t===mg&&gg?null:t;default:return null}}function uT(t,e){if(Li)return t==="compositionend"||!Kf&&C0(t,e)?(t=w0(),wl=Hf=Qn=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E0&&e.locale!=="ko"?null:e.data;default:return null}}var dT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dT[t.type]:e==="textarea"}function S0(t,e,n,r){t0(r),e=Vl(e,"onChange"),0<e.length&&(n=new Gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,jo=null;function hT(t){D0(t,0)}function Uc(t){var e=Fi(t);if(Ky(e))return t}function fT(t,e){if(t==="change")return e}var T0=!1;if(Nn){var Yu;if(Nn){var Ku="oninput"in document;if(!Ku){var _g=document.createElement("div");_g.setAttribute("oninput","return;"),Ku=typeof _g.oninput=="function"}Yu=Ku}else Yu=!1;T0=Yu&&(!document.documentMode||9<document.documentMode)}function yg(){mo&&(mo.detachEvent("onpropertychange",k0),jo=mo=null)}function k0(t){if(t.propertyName==="value"&&Uc(jo)){var e=[];S0(e,jo,t,Wf(t)),s0(hT,e)}}function pT(t,e,n){t==="focusin"?(yg(),mo=e,jo=n,mo.attachEvent("onpropertychange",k0)):t==="focusout"&&yg()}function mT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(jo)}function gT(t,e){if(t==="click")return Uc(e)}function vT(t,e){if(t==="input"||t==="change")return Uc(e)}function _T(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:_T;function Wo(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Md.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function wg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eg(t,e){var n=wg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wg(n)}}function R0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N0(){for(var t=window,e=Ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ml(t.document)}return e}function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yT(t){var e=N0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R0(n.ownerDocument.documentElement,n)){if(r!==null&&qf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Eg(n,s);var o=Eg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wT=Nn&&"documentMode"in document&&11>=document.documentMode,Di=null,th=null,go=null,nh=!1;function Cg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||Di==null||Di!==Ml(r)||(r=Di,"selectionStart"in r&&qf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&Wo(go,r)||(go=r,r=Vl(th,"onSelect"),0<r.length&&(e=new Gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Di)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mi={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},qu={},P0={};Nn&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function jc(t){if(qu[t])return qu[t];if(!Mi[t])return t;var e=Mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P0)return qu[t]=e[n];return t}var b0=jc("animationend"),A0=jc("animationiteration"),x0=jc("animationstart"),O0=jc("transitionend"),L0=new Map,Ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){L0.set(t,e),yi(e,[t])}for(var Qu=0;Qu<Ig.length;Qu++){var Ju=Ig[Qu],ET=Ju.toLowerCase(),CT=Ju[0].toUpperCase()+Ju.slice(1);Ar(ET,"on"+CT)}Ar(b0,"onAnimationEnd");Ar(A0,"onAnimationIteration");Ar(x0,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(O0,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IT=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ES(r,e,void 0,t),t.currentTarget=null}function D0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Sg(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Sg(i,a,c),s=l}}}if(Ul)throw t=Jd,Ul=!1,Jd=null,t}function te(t,e){var n=e[ah];n===void 0&&(n=e[ah]=new Set);var r=t+"__bubble";n.has(r)||(M0(e,t,2,!1),n.add(r))}function Xu(t,e,n){var r=0;e&&(r|=4),M0(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[sl]){t[sl]=!0,Vy.forEach(function(n){n!=="selectionchange"&&(IT.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Xu("selectionchange",!1,e))}}function M0(t,e,n,r){switch(y0(e)){case 1:var i=FS;break;case 4:i=US;break;default:i=$f}n=i.bind(null,e,n,t),i=void 0,!Qd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}s0(function(){var c=s,u=Wf(n),d=[];e:{var h=L0.get(t);if(h!==void 0){var f=Gf,_=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":f=ZS;break;case"focusin":_="focus",f=Gu;break;case"focusout":_="blur",f=Gu;break;case"beforeblur":case"afterblur":f=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=zS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=nT;break;case b0:case A0:case x0:f=$S;break;case O0:f=iT;break;case"scroll":f=jS;break;case"wheel":f=oT;break;case"copy":case"cut":case"paste":f=GS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=pg}var w=(e&4)!==0,y=!w&&t==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var p=c,v;p!==null;){v=p;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=Do(p,g),C!=null&&w.push(Bo(p,C,v)))),y)break;p=p.return}0<w.length&&(h=new f(h,_,null,n,u),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==Kd&&(_=n.relatedTarget||n.fromElement)&&(Gr(_)||_[Pn]))break e;if((f||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,f?(_=n.relatedTarget||n.toElement,f=c,_=_?Gr(_):null,_!==null&&(y=wi(_),_!==y||_.tag!==5&&_.tag!==6)&&(_=null)):(f=null,_=c),f!==_)){if(w=hg,C="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=pg,C="onPointerLeave",g="onPointerEnter",p="pointer"),y=f==null?h:Fi(f),v=_==null?h:Fi(_),h=new w(C,p+"leave",f,n,u),h.target=y,h.relatedTarget=v,C=null,Gr(u)===c&&(w=new w(g,p+"enter",_,n,u),w.target=v,w.relatedTarget=y,C=w),y=C,f&&_)t:{for(w=f,g=_,p=0,v=w;v;v=Ni(v))p++;for(v=0,C=g;C;C=Ni(C))v++;for(;0<p-v;)w=Ni(w),p--;for(;0<v-p;)g=Ni(g),v--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Ni(w),g=Ni(g)}w=null}else w=null;f!==null&&Tg(d,h,f,w,!1),_!==null&&y!==null&&Tg(d,y,_,w,!0)}}e:{if(h=c?Fi(c):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var k=fT;else if(vg(h))if(T0)k=vT;else{k=mT;var N=pT}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=gT);if(k&&(k=k(t,c))){S0(d,k,n,u);break e}N&&N(t,h,c),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Vd(h,"number",h.value)}switch(N=c?Fi(c):window,t){case"focusin":(vg(N)||N.contentEditable==="true")&&(Di=N,th=c,go=null);break;case"focusout":go=th=Di=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,Cg(d,n,u);break;case"selectionchange":if(wT)break;case"keydown":case"keyup":Cg(d,n,u)}var P;if(Kf)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Li?C0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(E0&&n.locale!=="ko"&&(Li||x!=="onCompositionStart"?x==="onCompositionEnd"&&Li&&(P=w0()):(Qn=u,Hf="value"in Qn?Qn.value:Qn.textContent,Li=!0)),N=Vl(c,x),0<N.length&&(x=new fg(x,t,null,n,u),d.push({event:x,listeners:N}),P?x.data=P:(P=I0(n),P!==null&&(x.data=P)))),(P=lT?cT(t,n):uT(t,n))&&(c=Vl(c,"onBeforeInput"),0<c.length&&(u=new fg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=P))}D0(d,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Do(t,n),s!=null&&r.unshift(Bo(t,s,i)),s=Do(t,e),s!=null&&r.push(Bo(t,s,i))),t=t.return}return r}function Ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Do(n,s),l!=null&&o.unshift(Bo(n,l,a))):i||(l=Do(n,s),l!=null&&o.push(Bo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ST=/\r\n?/g,TT=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(ST,`
`).replace(TT,"")}function ol(t,e,n){if(e=kg(e),kg(t)!==e&&n)throw Error(S(425))}function $l(){}var rh=null,ih=null;function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,kT=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,RT=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(t){return Rg.resolve(null).then(t).catch(NT)}:oh;function NT(t){setTimeout(function(){throw t})}function ed(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ng(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),tn="__reactFiber$"+ks,Vo="__reactProps$"+ks,Pn="__reactContainer$"+ks,ah="__reactEvents$"+ks,PT="__reactListeners$"+ks,bT="__reactHandles$"+ks;function Gr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ng(t);t!==null;){if(n=t[tn])return n;t=Ng(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[tn]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Wc(t){return t[Vo]||null}var lh=[],Ui=-1;function xr(t){return{current:t}}function ne(t){0>Ui||(t.current=lh[Ui],lh[Ui]=null,Ui--)}function X(t,e){Ui++,lh[Ui]=t.current,t.current=e}var yr={},Ye=xr(yr),st=xr(!1),ii=yr;function as(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ot(t){return t=t.childContextTypes,t!=null}function Hl(){ne(st),ne(Ye)}function Pg(t,e,n){if(Ye.current!==yr)throw Error(S(168));X(Ye,e),X(st,n)}function F0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,pS(t)||"Unknown",i));return de({},n,r)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,ii=Ye.current,X(Ye,t),X(st,st.current),!0}function bg(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=F0(t,e,ii),r.__reactInternalMemoizedMergedChildContext=t,ne(st),ne(Ye),X(Ye,t)):ne(st),X(st,n)}var _n=null,zc=!1,td=!1;function U0(t){_n===null?_n=[t]:_n.push(t)}function AT(t){zc=!0,U0(t)}function Or(){if(!td&&_n!==null){td=!0;var t=0,e=K;try{var n=_n;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,zc=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),c0(zf,Or),i}finally{K=e,td=!1}}return null}var ji=[],Wi=0,Yl=null,Kl=0,Tt=[],kt=0,si=null,yn=1,wn="";function zr(t,e){ji[Wi++]=Kl,ji[Wi++]=Yl,Yl=t,Kl=e}function j0(t,e,n){Tt[kt++]=yn,Tt[kt++]=wn,Tt[kt++]=si,si=t;var r=yn;t=wn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yn=1<<32-Ht(e)+i|n<<i|r,wn=s+t}else yn=1<<s|n<<i|r,wn=t}function Qf(t){t.return!==null&&(zr(t,1),j0(t,1,0))}function Jf(t){for(;t===Yl;)Yl=ji[--Wi],ji[Wi]=null,Kl=ji[--Wi],ji[Wi]=null;for(;t===si;)si=Tt[--kt],Tt[kt]=null,wn=Tt[--kt],Tt[kt]=null,yn=Tt[--kt],Tt[kt]=null}var gt=null,pt=null,ie=!1,Vt=null;function W0(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ag(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,pt=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=si!==null?{id:yn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,pt=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uh(t){if(ie){var e=pt;if(e){var n=e;if(!Ag(t,e)){if(ch(t))throw Error(S(418));e=or(n.nextSibling);var r=gt;e&&Ag(t,e)?W0(r,n):(t.flags=t.flags&-4097|2,ie=!1,gt=t)}}else{if(ch(t))throw Error(S(418));t.flags=t.flags&-4097|2,ie=!1,gt=t}}}function xg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function al(t){if(t!==gt)return!1;if(!ie)return xg(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sh(t.type,t.memoizedProps)),e&&(e=pt)){if(ch(t))throw z0(),Error(S(418));for(;e;)W0(t,e),e=or(e.nextSibling)}if(xg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pt=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pt=null}}else pt=gt?or(t.stateNode.nextSibling):null;return!0}function z0(){for(var t=pt;t;)t=or(t.nextSibling)}function ls(){pt=gt=null,ie=!1}function Xf(t){Vt===null?Vt=[t]:Vt.push(t)}var xT=Fn.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Og(t){var e=t._init;return e(t._payload)}function B0(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=ur(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,C){return p===null||p.tag!==6?(p=ld(v,g.mode,C),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,C){var k=v.type;return k===Oi?u(g,p,v.props.children,C,v.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Hn&&Og(k)===p.type)?(C=i(p,v.props),C.ref=Hs(g,p,v),C.return=g,C):(C=Nl(v.type,v.key,v.props,null,g.mode,C),C.ref=Hs(g,p,v),C.return=g,C)}function c(g,p,v,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=cd(v,g.mode,C),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function u(g,p,v,C,k){return p===null||p.tag!==7?(p=Xr(v,g.mode,C,k),p.return=g,p):(p=i(p,v),p.return=g,p)}function d(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ld(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ja:return v=Nl(p.type,p.key,p.props,null,g.mode,v),v.ref=Hs(g,null,p),v.return=g,v;case xi:return p=cd(p,g.mode,v),p.return=g,p;case Hn:var C=p._init;return d(g,C(p._payload),v)}if(ro(p)||Ws(p))return p=Xr(p,g.mode,v,null),p.return=g,p;ll(g,p)}return null}function h(g,p,v,C){var k=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(g,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ja:return v.key===k?l(g,p,v,C):null;case xi:return v.key===k?c(g,p,v,C):null;case Hn:return k=v._init,h(g,p,k(v._payload),C)}if(ro(v)||Ws(v))return k!==null?null:u(g,p,v,C,null);ll(g,v)}return null}function f(g,p,v,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,a(p,g,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ja:return g=g.get(C.key===null?v:C.key)||null,l(p,g,C,k);case xi:return g=g.get(C.key===null?v:C.key)||null,c(p,g,C,k);case Hn:var N=C._init;return f(g,p,v,N(C._payload),k)}if(ro(C)||Ws(C))return g=g.get(v)||null,u(p,g,C,k,null);ll(p,C)}return null}function _(g,p,v,C){for(var k=null,N=null,P=p,x=p=0,ee=null;P!==null&&x<v.length;x++){P.index>x?(ee=P,P=null):ee=P.sibling;var z=h(g,P,v[x],C);if(z===null){P===null&&(P=ee);break}t&&P&&z.alternate===null&&e(g,P),p=s(z,p,x),N===null?k=z:N.sibling=z,N=z,P=ee}if(x===v.length)return n(g,P),ie&&zr(g,x),k;if(P===null){for(;x<v.length;x++)P=d(g,v[x],C),P!==null&&(p=s(P,p,x),N===null?k=P:N.sibling=P,N=P);return ie&&zr(g,x),k}for(P=r(g,P);x<v.length;x++)ee=f(P,g,x,v[x],C),ee!==null&&(t&&ee.alternate!==null&&P.delete(ee.key===null?x:ee.key),p=s(ee,p,x),N===null?k=ee:N.sibling=ee,N=ee);return t&&P.forEach(function(Ut){return e(g,Ut)}),ie&&zr(g,x),k}function w(g,p,v,C){var k=Ws(v);if(typeof k!="function")throw Error(S(150));if(v=k.call(v),v==null)throw Error(S(151));for(var N=k=null,P=p,x=p=0,ee=null,z=v.next();P!==null&&!z.done;x++,z=v.next()){P.index>x?(ee=P,P=null):ee=P.sibling;var Ut=h(g,P,z.value,C);if(Ut===null){P===null&&(P=ee);break}t&&P&&Ut.alternate===null&&e(g,P),p=s(Ut,p,x),N===null?k=Ut:N.sibling=Ut,N=Ut,P=ee}if(z.done)return n(g,P),ie&&zr(g,x),k;if(P===null){for(;!z.done;x++,z=v.next())z=d(g,z.value,C),z!==null&&(p=s(z,p,x),N===null?k=z:N.sibling=z,N=z);return ie&&zr(g,x),k}for(P=r(g,P);!z.done;x++,z=v.next())z=f(P,g,x,z.value,C),z!==null&&(t&&z.alternate!==null&&P.delete(z.key===null?x:z.key),p=s(z,p,x),N===null?k=z:N.sibling=z,N=z);return t&&P.forEach(function(Us){return e(g,Us)}),ie&&zr(g,x),k}function y(g,p,v,C){if(typeof v=="object"&&v!==null&&v.type===Oi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ja:e:{for(var k=v.key,N=p;N!==null;){if(N.key===k){if(k=v.type,k===Oi){if(N.tag===7){n(g,N.sibling),p=i(N,v.props.children),p.return=g,g=p;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Hn&&Og(k)===N.type){n(g,N.sibling),p=i(N,v.props),p.ref=Hs(g,N,v),p.return=g,g=p;break e}n(g,N);break}else e(g,N);N=N.sibling}v.type===Oi?(p=Xr(v.props.children,g.mode,C,v.key),p.return=g,g=p):(C=Nl(v.type,v.key,v.props,null,g.mode,C),C.ref=Hs(g,p,v),C.return=g,g=C)}return o(g);case xi:e:{for(N=v.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=cd(v,g.mode,C),p.return=g,g=p}return o(g);case Hn:return N=v._init,y(g,p,N(v._payload),C)}if(ro(v))return _(g,p,v,C);if(Ws(v))return w(g,p,v,C);ll(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=ld(v,g.mode,C),p.return=g,g=p),o(g)):n(g,p)}return y}var cs=B0(!0),V0=B0(!1),ql=xr(null),Ql=null,zi=null,Zf=null;function ep(){Zf=zi=Ql=null}function tp(t){var e=ql.current;ne(ql),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ji(t,e){Ql=t,Zf=zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(Zf!==t)if(t={context:t,memoizedValue:e,next:null},zi===null){if(Ql===null)throw Error(S(308));zi=t,Ql.dependencies={lanes:0,firstContext:t}}else zi=zi.next=t;return e}var Yr=null;function np(t){Yr===null?Yr=[t]:Yr.push(t)}function $0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,np(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,np(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bf(t,n)}}function Lg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jl(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(h=e,f=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(f,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(f,d,h):_,h==null)break e;d=de({},d,h);break e;case 2:Gn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=f,l=d):u=u.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ai|=o,t.lanes=o,t.memoizedState=d}}function Dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Sa={},dn=xr(Sa),$o=xr(Sa),Ho=xr(Sa);function Kr(t){if(t===Sa)throw Error(S(174));return t}function ip(t,e){switch(X(Ho,e),X($o,t),X(dn,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hd(e,t)}ne(dn),X(dn,e)}function us(){ne(dn),ne($o),ne(Ho)}function G0(t){Kr(Ho.current);var e=Kr(dn.current),n=Hd(e,t.type);e!==n&&(X($o,t),X(dn,n))}function sp(t){$o.current===t&&(ne(dn),ne($o))}var ae=xr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function op(){for(var t=0;t<nd.length;t++)nd[t]._workInProgressVersionPrimary=null;nd.length=0}var Il=Fn.ReactCurrentDispatcher,rd=Fn.ReactCurrentBatchConfig,oi=0,ue=null,Ie=null,be=null,Zl=!1,vo=!1,Go=0,OT=0;function Ve(){throw Error(S(321))}function ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function lp(t,e,n,r,i,s){if(oi=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?FT:UT,t=n(r,i),vo){s=0;do{if(vo=!1,Go=0,25<=s)throw Error(S(301));s+=1,be=Ie=null,e.updateQueue=null,Il.current=jT,t=n(r,i)}while(vo)}if(Il.current=ec,e=Ie!==null&&Ie.next!==null,oi=0,be=Ie=ue=null,Zl=!1,e)throw Error(S(300));return t}function cp(){var t=Go!==0;return Go=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ue.memoizedState=be=t:be=be.next=t,be}function Lt(){if(Ie===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=be===null?ue.memoizedState:be.next;if(e!==null)be=e,Ie=t;else{if(t===null)throw Error(S(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},be===null?ue.memoizedState=be=t:be=be.next=t}return be}function Yo(t,e){return typeof e=="function"?e(t):e}function id(t){var e=Lt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((oi&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ue.lanes|=u,ai|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,qt(r,e.memoizedState)||(rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sd(t){var e=Lt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Y0(){}function K0(t,e){var n=ue,r=Lt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,up(J0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Ko(9,Q0.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(S(349));oi&30||q0(n,e,i)}return i}function q0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q0(t,e,n,r){e.value=n,e.getSnapshot=r,X0(e)&&Z0(t)}function J0(t,e,n){return n(function(){X0(e)&&Z0(t)})}function X0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function Z0(t){var e=bn(t,1);e!==null&&Gt(e,t,1,-1)}function Mg(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=MT.bind(null,ue,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function e1(){return Lt().memoizedState}function Sl(t,e,n,r){var i=Zt();ue.flags|=t,i.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function Bc(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&ap(r,o.deps)){i.memoizedState=Ko(e,n,s,r);return}}ue.flags|=t,i.memoizedState=Ko(1|e,n,s,r)}function Fg(t,e){return Sl(8390656,8,t,e)}function up(t,e){return Bc(2048,8,t,e)}function t1(t,e){return Bc(4,2,t,e)}function n1(t,e){return Bc(4,4,t,e)}function r1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i1(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,r1.bind(null,e,t),n)}function dp(){}function s1(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function o1(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function a1(t,e,n){return oi&21?(qt(n,e)||(n=h0(),ue.lanes|=n,ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rt=!0),t.memoizedState=n)}function LT(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=rd.transition;rd.transition={};try{t(!1),e()}finally{K=n,rd.transition=r}}function l1(){return Lt().memoizedState}function DT(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c1(t))u1(e,n);else if(n=$0(t,e,n,r),n!==null){var i=Qe();Gt(n,t,r,i),d1(n,e,r)}}function MT(t,e,n){var r=cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c1(t))u1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,qt(a,o)){var l=e.interleaved;l===null?(i.next=i,np(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=$0(t,e,i,r),n!==null&&(i=Qe(),Gt(n,t,r,i),d1(n,e,r))}}function c1(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function u1(t,e){vo=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bf(t,n)}}var ec={readContext:Ot,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},FT={readContext:Ot,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Fg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,r1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DT.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:Mg,useDebugValue:dp,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Mg(!1),e=t[0];return t=LT.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Zt();if(ie){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Le===null)throw Error(S(349));oi&30||q0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Fg(J0.bind(null,r,s,t),[t]),r.flags|=2048,Ko(9,Q0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=Le.identifierPrefix;if(ie){var n=wn,r=yn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UT={readContext:Ot,useCallback:s1,useContext:Ot,useEffect:up,useImperativeHandle:i1,useInsertionEffect:t1,useLayoutEffect:n1,useMemo:o1,useReducer:id,useRef:e1,useState:function(){return id(Yo)},useDebugValue:dp,useDeferredValue:function(t){var e=Lt();return a1(e,Ie.memoizedState,t)},useTransition:function(){var t=id(Yo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:K0,useId:l1,unstable_isNewReconciler:!1},jT={readContext:Ot,useCallback:s1,useContext:Ot,useEffect:up,useImperativeHandle:i1,useInsertionEffect:t1,useLayoutEffect:n1,useMemo:o1,useReducer:sd,useRef:e1,useState:function(){return sd(Yo)},useDebugValue:dp,useDeferredValue:function(t){var e=Lt();return Ie===null?e.memoizedState=t:a1(e,Ie.memoizedState,t)},useTransition:function(){var t=sd(Yo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:K0,useId:l1,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vc={isMounted:function(t){return(t=t._reactInternals)?wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=cr(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Gt(e,t,i,r),Cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=cr(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Gt(e,t,i,r),Cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=cr(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Gt(e,t,r,n),Cl(e,t,r))}};function Ug(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,r)||!Wo(i,s):!0}function h1(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=ot(e)?ii:Ye.current,r=e.contextTypes,s=(r=r!=null)?as(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=ot(e)?ii:Ye.current,i.context=as(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vc.enqueueReplaceState(i,i.state,null),Jl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ds(t,e){try{var n="",r=e;do n+=fS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WT=typeof WeakMap=="function"?WeakMap:Map;function f1(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nc||(nc=!0,Sh=r),ph(t,e)},n}function p1(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ph(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new WT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ek.bind(null,t,e,n),e.then(t,t))}function zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var zT=Fn.ReactCurrentOwner,rt=!1;function Ke(t,e,n,r){e.child=t===null?V0(e,null,n,r):cs(e,t.child,n,r)}function Vg(t,e,n,r,i){n=n.render;var s=e.ref;return Ji(e,i),r=lp(t,e,n,r,s,i),n=cp(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ie&&n&&Qf(e),e.flags|=1,Ke(t,e,r,i),e.child)}function $g(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,m1(t,e,s,r,i)):(t=Nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function m1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wo(s,r)&&t.ref===e.ref)if(rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rt=!0);else return e.lanes=t.lanes,An(t,e,i)}return mh(t,e,n,r,i)}function g1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Vi,dt),dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Vi,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Vi,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Vi,dt),dt|=r;return Ke(t,e,i,n),e.child}function v1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,r,i){var s=ot(n)?ii:Ye.current;return s=as(e,s),Ji(e,i),n=lp(t,e,n,r,s,i),r=cp(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ie&&r&&Qf(e),e.flags|=1,Ke(t,e,n,i),e.child)}function Hg(t,e,n,r,i){if(ot(n)){var s=!0;Gl(e)}else s=!1;if(Ji(e,i),e.stateNode===null)Tl(t,e),h1(e,n,r),fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=ot(n)?ii:Ye.current,c=as(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&jg(e,o,r,c),Gn=!1;var h=e.memoizedState;o.state=h,Jl(e,r,o,i),l=e.memoizedState,a!==r||h!==l||st.current||Gn?(typeof u=="function"&&(hh(e,n,u,r),l=e.memoizedState),(a=Gn||Ug(e,n,a,r,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zt(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ot(l):(l=ot(n)?ii:Ye.current,l=as(e,l));var f=n.getDerivedStateFromProps;(u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&jg(e,o,r,l),Gn=!1,h=e.memoizedState,o.state=h,Jl(e,r,o,i);var _=e.memoizedState;a!==d||h!==_||st.current||Gn?(typeof f=="function"&&(hh(e,n,f,r),_=e.memoizedState),(c=Gn||Ug(e,n,c,r,h,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return gh(t,e,n,r,s,i)}function gh(t,e,n,r,i,s){v1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&bg(e,n,!1),An(t,e,s);r=e.stateNode,zT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cs(e,t.child,null,s),e.child=cs(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&bg(e,n,!0),e.child}function _1(t){var e=t.stateNode;e.pendingContext?Pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pg(t,e.context,!1),ip(t,e.containerInfo)}function Gg(t,e,n,r,i){return ls(),Xf(i),e.flags|=256,Ke(t,e,n,r),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function _h(t){return{baseLanes:t,cachePool:null,transitions:null}}function y1(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(ae,i&1),t===null)return uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,r,0,null),t=Xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_h(n),e.memoizedState=vh,t):hp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return BT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vh,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hp(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,r){return r!==null&&Xf(r),cs(e,t.child,null,n),t=hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=od(Error(S(422))),cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gc({mode:"visible",children:r.children},i,0,null),s=Xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&cs(e,t.child,null,o),e.child.memoizedState=_h(o),e.memoizedState=vh,s);if(!(e.mode&1))return cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=od(s,r,void 0),cl(t,e,o,r)}if(a=(o&t.childLanes)!==0,rt||a){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Gt(r,t,i,-1))}return _p(),r=od(Error(S(421))),cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pt=or(i.nextSibling),gt=e,ie=!0,Vt=null,t!==null&&(Tt[kt++]=yn,Tt[kt++]=wn,Tt[kt++]=si,yn=t.id,wn=t.overflow,si=e),e=hp(e,r.children),e.flags|=4096,e)}function Yg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dh(t.return,e,n)}function ad(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function w1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yg(t,n,e);else if(t.tag===19)Yg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ad(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ad(e,!0,n,null,s);break;case"together":ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VT(t,e,n){switch(e.tag){case 3:_1(e),ls();break;case 5:G0(e);break;case 1:ot(e.type)&&Gl(e);break;case 4:ip(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(ql,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?y1(t,e,n):(X(ae,ae.current&1),t=An(t,e,n),t!==null?t.sibling:null);X(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return w1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,g1(t,e,n)}return An(t,e,n)}var E1,yh,C1,I1;E1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yh=function(){};C1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(dn.current);var s=null;switch(n){case"input":i=zd(t,i),r=zd(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=$d(t,i),r=$d(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}Gd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gs(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $T(t,e,n){var r=e.pendingProps;switch(Jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return ot(e.type)&&Hl(),$e(e),null;case 3:return r=e.stateNode,us(),ne(st),ne(Ye),op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vt!==null&&(Rh(Vt),Vt=null))),yh(t,e),$e(e),null;case 5:sp(e);var i=Kr(Ho.current);if(n=e.type,t!==null&&e.stateNode!=null)C1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return $e(e),null}if(t=Kr(dn.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[Vo]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<so.length;i++)te(so[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":ng(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":ig(r,s),te("invalid",r)}Gd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",""+a]):Oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Xa(r),rg(r,s,!0);break;case"textarea":Xa(r),sg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[Vo]=r,E1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yd(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<so.length;i++)te(so[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":ng(t,r),i=zd(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),te("invalid",t);break;case"textarea":ig(t,r),i=$d(t,r),te("invalid",t);break;default:i=r}Gd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?e0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(t,l):typeof l=="number"&&Lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&Mf(t,s,l,o))}switch(n){case"input":Xa(t),rg(t,r,!1);break;case"textarea":Xa(t),sg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)I1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Kr(Ho.current),Kr(dn.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return $e(e),null;case 13:if(ne(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&pt!==null&&e.mode&1&&!(e.flags&128))z0(),ls(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[tn]=e}else ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else Vt!==null&&(Rh(Vt),Vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?Te===0&&(Te=3):_p())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return us(),yh(t,e),t===null&&zo(e.stateNode.containerInfo),$e(e),null;case 10:return tp(e.type._context),$e(e),null;case 17:return ot(e.type)&&Hl(),$e(e),null;case 19:if(ne(ae),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Gs(s,!1);else{if(Te!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,Gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&_e()>hs&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Xl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return $e(e),null}else 2*_e()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_e(),e.sibling=null,n=ae.current,X(ae,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return vp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function HT(t,e){switch(Jf(e),e.tag){case 1:return ot(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),ne(st),ne(Ye),op(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sp(e),null;case 13:if(ne(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(ae),null;case 4:return us(),null;case 10:return tp(e.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var ul=!1,He=!1,GT=typeof WeakSet=="function"?WeakSet:Set,R=null;function Bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function wh(t,e,n){try{n()}catch(r){fe(t,e,r)}}var Kg=!1;function YT(t,e){if(rh=zl,t=N0(),qf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++u===r&&(l=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},zl=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,y=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:zt(e.type,w),y);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(C){fe(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return _=Kg,Kg=!1,_}function _o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wh(e,n,s)}i=i.next}while(i!==r)}}function $c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S1(t){var e=t.alternate;e!==null&&(t.alternate=null,S1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[Vo],delete e[ah],delete e[PT],delete e[bT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T1(t){return t.tag===5||t.tag===3||t.tag===4}function qg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}var je=null,Bt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)k1(t,e,n),n=n.sibling}function k1(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Mc,n)}catch{}switch(n.tag){case 5:He||Bi(n,e);case 6:var r=je,i=Bt;je=null,Bn(t,e,n),je=r,Bt=i,je!==null&&(Bt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Bt?(t=je,n=n.stateNode,t.nodeType===8?ed(t.parentNode,n):t.nodeType===1&&ed(t,n),Uo(t)):ed(je,n.stateNode));break;case 4:r=je,i=Bt,je=n.stateNode.containerInfo,Bt=!0,Bn(t,e,n),je=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wh(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!He&&(Bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Bn(t,e,n),He=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function Qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GT),e.forEach(function(r){var i=nk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,Bt=!1;break e;case 3:je=a.stateNode.containerInfo,Bt=!0;break e;case 4:je=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(je===null)throw Error(S(160));k1(s,o,i),je=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){fe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R1(e,t),e=e.sibling}function R1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(e,t),Xt(t),r&4){try{_o(3,t,t.return),$c(3,t)}catch(w){fe(t,t.return,w)}try{_o(5,t,t.return)}catch(w){fe(t,t.return,w)}}break;case 1:jt(e,t),Xt(t),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(jt(e,t),Xt(t),r&512&&n!==null&&Bi(n,n.return),t.flags&32){var i=t.stateNode;try{Lo(i,"")}catch(w){fe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qy(i,s),Yd(a,o);var c=Yd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?e0(i,d):u==="dangerouslySetInnerHTML"?Xy(i,d):u==="children"?Lo(i,d):Mf(i,u,d,c)}switch(a){case"input":Bd(i,s);break;case"textarea":Qy(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Yi(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?Yi(i,!!s.multiple,s.defaultValue,!0):Yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vo]=s}catch(w){fe(t,t.return,w)}}break;case 6:if(jt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){fe(t,t.return,w)}}break;case 3:if(jt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(w){fe(t,t.return,w)}break;case 4:jt(e,t),Xt(t);break;case 13:jt(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mp=_e())),r&4&&Qg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(He=(c=He)||u,jt(e,t),He=c):jt(e,t),Xt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(R=t,u=t.child;u!==null;){for(d=R=u;R!==null;){switch(h=R,f=h.child,h.tag){case 0:case 11:case 14:case 15:_o(4,h,h.return);break;case 1:Bi(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){fe(r,n,w)}}break;case 5:Bi(h,h.return);break;case 22:if(h.memoizedState!==null){Xg(d);continue}}f!==null?(f.return=h,R=f):Xg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zy("display",o))}catch(w){fe(t,t.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){fe(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:jt(e,t),Xt(t),r&4&&Qg(t);break;case 21:break;default:jt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T1(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lo(i,""),r.flags&=-33);var s=qg(t);Ih(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=qg(t);Ch(t,a,o);break;default:throw Error(S(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KT(t,e,n){R=t,N1(t)}function N1(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ul;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||He;a=ul;var c=He;if(ul=o,(He=l)&&!c)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?Zg(i):l!==null?(l.return=o,R=l):Zg(i);for(;s!==null;)R=s,N1(s),s=s.sibling;R=i,ul=a,He=c}Jg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Jg(t)}}function Jg(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:He||$c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Uo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}He||e.flags&512&&Eh(e)}catch(h){fe(e,e.return,h)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Xg(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Zg(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$c(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){fe(e,i,l)}}var s=e.return;try{Eh(e)}catch(l){fe(e,s,l)}break;case 5:var o=e.return;try{Eh(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var qT=Math.ceil,tc=Fn.ReactCurrentDispatcher,fp=Fn.ReactCurrentOwner,At=Fn.ReactCurrentBatchConfig,$=0,Le=null,we=null,We=0,dt=0,Vi=xr(0),Te=0,qo=null,ai=0,Hc=0,pp=0,yo=null,et=null,mp=0,hs=1/0,vn=null,nc=!1,Sh=null,lr=null,dl=!1,Jn=null,rc=0,wo=0,Th=null,kl=-1,Rl=0;function Qe(){return $&6?_e():kl!==-1?kl:kl=_e()}function cr(t){return t.mode&1?$&2&&We!==0?We&-We:xT.transition!==null?(Rl===0&&(Rl=h0()),Rl):(t=K,t!==0||(t=window.event,t=t===void 0?16:y0(t.type)),t):1}function Gt(t,e,n,r){if(50<wo)throw wo=0,Th=null,Error(S(185));Ea(t,n,r),(!($&2)||t!==Le)&&(t===Le&&(!($&2)&&(Hc|=n),Te===4&&qn(t,We)),at(t,r),n===1&&$===0&&!(e.mode&1)&&(hs=_e()+500,zc&&Or()))}function at(t,e){var n=t.callbackNode;xS(t,e);var r=Wl(t,t===Le?We:0);if(r===0)n!==null&&lg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lg(n),e===1)t.tag===0?AT(ev.bind(null,t)):U0(ev.bind(null,t)),RT(function(){!($&6)&&Or()}),n=null;else{switch(f0(r)){case 1:n=zf;break;case 4:n=u0;break;case 16:n=jl;break;case 536870912:n=d0;break;default:n=jl}n=M1(n,P1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function P1(t,e){if(kl=-1,Rl=0,$&6)throw Error(S(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=Wl(t,t===Le?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ic(t,r);else{e=r;var i=$;$|=2;var s=A1();(Le!==t||We!==e)&&(vn=null,hs=_e()+500,Jr(t,e));do try{XT();break}catch(a){b1(t,a)}while(!0);ep(),tc.current=s,$=i,we!==null?e=0:(Le=null,We=0,e=Te)}if(e!==0){if(e===2&&(i=Xd(t),i!==0&&(r=i,e=kh(t,i))),e===1)throw n=qo,Jr(t,0),qn(t,r),at(t,_e()),n;if(e===6)qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!QT(i)&&(e=ic(t,r),e===2&&(s=Xd(t),s!==0&&(r=s,e=kh(t,s))),e===1))throw n=qo,Jr(t,0),qn(t,r),at(t,_e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Br(t,et,vn);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=mp+500-_e(),10<e)){if(Wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=oh(Br.bind(null,t,et,vn),e);break}Br(t,et,vn);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qT(r/1960))-r,10<r){t.timeoutHandle=oh(Br.bind(null,t,et,vn),r);break}Br(t,et,vn);break;case 5:Br(t,et,vn);break;default:throw Error(S(329))}}}return at(t,_e()),t.callbackNode===n?P1.bind(null,t):null}function kh(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=ic(t,e),t!==2&&(e=et,et=n,e!==null&&Rh(e)),t}function Rh(t){et===null?et=t:et.push.apply(et,t)}function QT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~pp,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function ev(t){if($&6)throw Error(S(327));Xi();var e=Wl(t,0);if(!(e&1))return at(t,_e()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var r=Xd(t);r!==0&&(e=r,n=kh(t,r))}if(n===1)throw n=qo,Jr(t,0),qn(t,e),at(t,_e()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,et,vn),at(t,_e()),null}function gp(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(hs=_e()+500,zc&&Or())}}function li(t){Jn!==null&&Jn.tag===0&&!($&6)&&Xi();var e=$;$|=1;var n=At.transition,r=K;try{if(At.transition=null,K=1,t)return t()}finally{K=r,At.transition=n,$=e,!($&6)&&Or()}}function vp(){dt=Vi.current,ne(Vi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kT(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Jf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hl();break;case 3:us(),ne(st),ne(Ye),op();break;case 5:sp(r);break;case 4:us();break;case 13:ne(ae);break;case 19:ne(ae);break;case 10:tp(r.type._context);break;case 22:case 23:vp()}n=n.return}if(Le=t,we=t=ur(t.current,null),We=dt=e,Te=0,qo=null,pp=Hc=ai=0,et=yo=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yr=null}return t}function b1(t,e){do{var n=we;try{if(ep(),Il.current=ec,Zl){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zl=!1}if(oi=0,be=Ie=ue=null,vo=!1,Go=0,fp.current=null,n===null||n.return===null){Te=1,qo=e,we=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=zg(o);if(f!==null){f.flags&=-257,Bg(f,o,a,s,e),f.mode&1&&Wg(s,c,e),e=f,l=c;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){Wg(s,c,e),_p();break e}l=Error(S(426))}}else if(ie&&a.mode&1){var y=zg(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Bg(y,o,a,s,e),Xf(ds(l,a));break e}}s=l=ds(l,a),Te!==4&&(Te=2),yo===null?yo=[s]:yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=f1(s,l,e);Lg(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=p1(s,a,e);Lg(s,C);break e}}s=s.return}while(s!==null)}O1(n)}catch(k){e=k,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function A1(){var t=tc.current;return tc.current=ec,t===null?ec:t}function _p(){(Te===0||Te===3||Te===2)&&(Te=4),Le===null||!(ai&268435455)&&!(Hc&268435455)||qn(Le,We)}function ic(t,e){var n=$;$|=2;var r=A1();(Le!==t||We!==e)&&(vn=null,Jr(t,e));do try{JT();break}catch(i){b1(t,i)}while(!0);if(ep(),$=n,tc.current=r,we!==null)throw Error(S(261));return Le=null,We=0,Te}function JT(){for(;we!==null;)x1(we)}function XT(){for(;we!==null&&!IS();)x1(we)}function x1(t){var e=D1(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?O1(t):we=e,fp.current=null}function O1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HT(n,e),n!==null){n.flags&=32767,we=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Te=6,we=null;return}}else if(n=$T(n,e,dt),n!==null){we=n;return}if(e=e.sibling,e!==null){we=e;return}we=e=t}while(e!==null);Te===0&&(Te=5)}function Br(t,e,n){var r=K,i=At.transition;try{At.transition=null,K=1,ZT(t,e,n,r)}finally{At.transition=i,K=r}return null}function ZT(t,e,n,r){do Xi();while(Jn!==null);if($&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(OS(t,s),t===Le&&(we=Le=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,M1(jl,function(){return Xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var o=K;K=1;var a=$;$|=4,fp.current=null,YT(t,n),R1(n,t),yT(ih),zl=!!rh,ih=rh=null,t.current=n,KT(n),SS(),$=a,K=o,At.transition=s}else t.current=n;if(dl&&(dl=!1,Jn=t,rc=i),s=t.pendingLanes,s===0&&(lr=null),RS(n.stateNode),at(t,_e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nc)throw nc=!1,t=Sh,Sh=null,t;return rc&1&&t.tag!==0&&Xi(),s=t.pendingLanes,s&1?t===Th?wo++:(wo=0,Th=t):wo=0,Or(),null}function Xi(){if(Jn!==null){var t=f0(rc),e=At.transition,n=K;try{if(At.transition=null,K=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,rc=0,$&6)throw Error(S(331));var i=$;for($|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(R=c;R!==null;){var u=R;switch(u.tag){case 0:case 11:case 15:_o(8,u,s)}var d=u.child;if(d!==null)d.return=u,R=d;else for(;R!==null;){u=R;var h=u.sibling,f=u.return;if(S1(u),u===c){R=null;break}if(h!==null){h.return=f,R=h;break}R=f}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var y=w.sibling;w.sibling=null,w=y}while(w!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,R=g;break e}R=s.return}}var p=t.current;for(R=p;R!==null;){o=R;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,R=v;else e:for(o=p;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$c(9,a)}}catch(k){fe(a,a.return,k)}if(a===o){R=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,R=C;break e}R=a.return}}if($=i,Or(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Mc,t)}catch{}r=!0}return r}finally{K=n,At.transition=e}}return!1}function tv(t,e,n){e=ds(n,e),e=f1(t,e,1),t=ar(t,e,1),e=Qe(),t!==null&&(Ea(t,1,e),at(t,e))}function fe(t,e,n){if(t.tag===3)tv(t,t,n);else for(;e!==null;){if(e.tag===3){tv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=ds(n,t),t=p1(e,t,1),e=ar(e,t,1),t=Qe(),e!==null&&(Ea(e,1,t),at(e,t));break}}e=e.return}}function ek(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(We&n)===n&&(Te===4||Te===3&&(We&130023424)===We&&500>_e()-mp?Jr(t,0):pp|=n),at(t,e)}function L1(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=Qe();t=bn(t,e),t!==null&&(Ea(t,e,n),at(t,n))}function tk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L1(t,n)}function nk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),L1(t,n)}var D1;D1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rt=!1,VT(t,e,n);rt=!!(t.flags&131072)}else rt=!1,ie&&e.flags&1048576&&j0(e,Kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tl(t,e),t=e.pendingProps;var i=as(e,Ye.current);Ji(e,n),i=lp(null,e,r,t,i,n);var s=cp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ot(r)?(s=!0,Gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rp(e),i.updater=Vc,e.stateNode=i,i._reactInternals=e,fh(e,r,t,n),e=gh(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Qf(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ik(r),t=zt(r,t),i){case 0:e=mh(null,e,r,t,n);break e;case 1:e=Hg(null,e,r,t,n);break e;case 11:e=Vg(null,e,r,t,n);break e;case 14:e=$g(null,e,r,zt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Hg(t,e,r,i,n);case 3:e:{if(_1(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,H0(t,e),Jl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ds(Error(S(423)),e),e=Gg(t,e,r,n,i);break e}else if(r!==i){i=ds(Error(S(424)),e),e=Gg(t,e,r,n,i);break e}else for(pt=or(e.stateNode.containerInfo.firstChild),gt=e,ie=!0,Vt=null,n=V0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),r===i){e=An(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return G0(e),t===null&&uh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,sh(r,i)?o=null:s!==null&&sh(r,s)&&(e.flags|=32),v1(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&uh(e),null;case 13:return y1(t,e,n);case 4:return ip(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cs(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Vg(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(ql,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!st.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ji(e,n),i=Ot(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),$g(t,e,r,i,n);case 15:return m1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Tl(t,e),e.tag=1,ot(r)?(t=!0,Gl(e)):t=!1,Ji(e,n),h1(e,r,i),fh(e,r,i,n),gh(null,e,r,!0,t,n);case 19:return w1(t,e,n);case 22:return g1(t,e,n)}throw Error(S(156,e.tag))};function M1(t,e){return c0(t,e)}function rk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new rk(t,e,n,r)}function yp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ik(t){if(typeof t=="function")return yp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uf)return 11;if(t===jf)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Oi:return Xr(n.children,i,s,e);case Ff:o=8,i|=8;break;case Fd:return t=Nt(12,n,e,i|2),t.elementType=Fd,t.lanes=s,t;case Ud:return t=Nt(13,n,e,i),t.elementType=Ud,t.lanes=s,t;case jd:return t=Nt(19,n,e,i),t.elementType=jd,t.lanes=s,t;case Gy:return Gc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $y:o=10;break e;case Hy:o=9;break e;case Uf:o=11;break e;case jf:o=14;break e;case Hn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Gy,t.lanes=n,t.stateNode={isHidden:!1},t}function ld(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function cd(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wp(t,e,n,r,i,s,o,a,l){return t=new sk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(s),t}function ok(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function F1(t){if(!t)return yr;t=t._reactInternals;e:{if(wi(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(ot(n))return F0(t,n,e)}return e}function U1(t,e,n,r,i,s,o,a,l){return t=wp(n,r,!0,t,i,s,o,a,l),t.context=F1(null),n=t.current,r=Qe(),i=cr(n),s=Tn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,Ea(t,i,r),at(t,r),t}function Yc(t,e,n,r){var i=e.current,s=Qe(),o=cr(i);return n=F1(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Gt(t,i,o,s),Cl(t,i,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ep(t,e){nv(t,e),(t=t.alternate)&&nv(t,e)}function ak(){return null}var j1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}Kc.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Yc(t,e,null,null)};Kc.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;li(function(){Yc(null,t,null,null)}),e[Pn]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=g0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&_0(t)}};function Ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rv(){}function lk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=sc(o);s.call(c)}}var o=U1(e,r,t,0,null,!1,!1,"",rv);return t._reactRootContainer=o,t[Pn]=o.current,zo(t.nodeType===8?t.parentNode:t),li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=sc(l);a.call(c)}}var l=wp(t,0,!1,null,null,!1,!1,"",rv);return t._reactRootContainer=l,t[Pn]=l.current,zo(t.nodeType===8?t.parentNode:t),li(function(){Yc(e,l,n,r)}),l}function Qc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=sc(o);a.call(l)}}Yc(e,o,t,i)}else o=lk(n,e,t,i,r);return sc(o)}p0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=io(e.pendingLanes);n!==0&&(Bf(e,n|1),at(e,_e()),!($&6)&&(hs=_e()+500,Or()))}break;case 13:li(function(){var r=bn(t,1);if(r!==null){var i=Qe();Gt(r,t,1,i)}}),Ep(t,1)}};Vf=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=Qe();Gt(e,t,134217728,n)}Ep(t,134217728)}};m0=function(t){if(t.tag===13){var e=cr(t),n=bn(t,e);if(n!==null){var r=Qe();Gt(n,t,e,r)}Ep(t,e)}};g0=function(){return K};v0=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};qd=function(t,e,n){switch(e){case"input":if(Bd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wc(r);if(!i)throw Error(S(90));Ky(r),Bd(r,i)}}}break;case"textarea":Qy(t,n);break;case"select":e=n.value,e!=null&&Yi(t,!!n.multiple,e,!1)}};r0=gp;i0=li;var ck={usingClientEntryPoint:!1,Events:[Ia,Fi,Wc,t0,n0,gp]},Ys={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uk={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||ak,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Mc=hl.inject(uk),un=hl}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ck;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(e))throw Error(S(200));return ok(t,e,null,n)};Ct.createRoot=function(t,e){if(!Ip(t))throw Error(S(299));var n=!1,r="",i=j1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wp(t,1,!1,null,null,n,!1,r,i),t[Pn]=e.current,zo(t.nodeType===8?t.parentNode:t),new Cp(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=a0(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return li(t)};Ct.hydrate=function(t,e,n){if(!qc(e))throw Error(S(200));return Qc(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Ip(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=j1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=U1(e,null,t,1,n??null,i,!1,s,o),t[Pn]=e.current,zo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kc(e)};Ct.render=function(t,e,n){if(!qc(e))throw Error(S(200));return Qc(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!qc(t))throw Error(S(40));return t._reactRootContainer?(li(function(){Qc(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};Ct.unstable_batchedUpdates=gp;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!qc(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Qc(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function W1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W1)}catch(t){console.error(t)}}W1(),Wy.exports=Ct;var dk=Wy.exports,z1,iv=dk;z1=iv.createRoot,iv.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));const sv="popstate";function hk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Nh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:oc(i)}return pk(e,n,null,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function B1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fk(){return Math.random().toString(36).substr(2,8)}function ov(t,e){return{usr:t.state,key:t.key,idx:e}}function Nh(t,e,n,r){return n===void 0&&(n=null),Qo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Rs(e):e,{state:n,key:e&&e.key||r||fk()})}function oc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Rs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function pk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xn.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Qo({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Xn.Pop;let y=u(),g=y==null?null:y-c;c=y,l&&l({action:a,location:w.location,delta:g})}function h(y,g){a=Xn.Push;let p=Nh(w.location,y,g);c=u()+1;let v=ov(p,c),C=w.createHref(p);try{o.pushState(v,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(C)}s&&l&&l({action:a,location:w.location,delta:1})}function f(y,g){a=Xn.Replace;let p=Nh(w.location,y,g);c=u();let v=ov(p,c),C=w.createHref(p);o.replaceState(v,"",C),s&&l&&l({action:a,location:w.location,delta:0})}function _(y){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof y=="string"?y:oc(y);return p=p.replace(/ $/,"%20"),Ee(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return a},get location(){return t(i,o)},listen(y){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(sv,d),l=y,()=>{i.removeEventListener(sv,d),l=null}},createHref(y){return e(i,y)},createURL:_,encodeLocation(y){let g=_(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:f,go(y){return o.go(y)}};return w}var av;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(av||(av={}));function mk(t,e,n){return n===void 0&&(n="/"),gk(t,e,n,!1)}function gk(t,e,n,r){let i=typeof e=="string"?Rs(e):e,s=Sp(i.pathname||"/",n);if(s==null)return null;let o=V1(t);vk(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Nk(s);a=kk(o[l],c,r)}return a}function V1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=dr([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),V1(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Sk(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of $1(s.path))i(s,o,l)}),e}function $1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function vk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Tk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _k=/^:[\w-]+$/,yk=3,wk=2,Ek=1,Ck=10,Ik=-2,lv=t=>t==="*";function Sk(t,e){let n=t.split("/"),r=n.length;return n.some(lv)&&(r+=Ik),e&&(r+=wk),n.filter(i=>!lv(i)).reduce((i,s)=>i+(_k.test(s)?yk:s===""?Ek:Ck),r)}function Tk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kk(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=cv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=cv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:dr([s,d.pathname]),pathnameBase:xk(dr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=dr([s,d.pathnameBase]))}return o}function cv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Rk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:h,isOptional:f}=u;if(h==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const _=a[d];return f&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Rk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),B1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Nk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return B1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Pk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Rs(t):t;return{pathname:n?n.startsWith("/")?n:bk(n,e):e,search:Ok(r),hash:Lk(i)}}function bk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ud(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ak(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function H1(t,e){let n=Ak(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function G1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Rs(t):(i=Qo({},t),Ee(!i.pathname||!i.pathname.includes("?"),ud("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),ud("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),ud("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=Pk(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const dr=t=>t.join("/").replace(/\/\/+/g,"/"),xk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ok=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Lk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Dk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Y1=["post","put","patch","delete"];new Set(Y1);const Mk=["get",...Y1];new Set(Mk);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}const Tp=E.createContext(null),Fk=E.createContext(null),Ei=E.createContext(null),Jc=E.createContext(null),Lr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),K1=E.createContext(null);function Uk(t,e){let{relative:n}=e===void 0?{}:e;Ta()||Ee(!1);let{basename:r,navigator:i}=E.useContext(Ei),{hash:s,pathname:o,search:a}=J1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ta(){return E.useContext(Jc)!=null}function Ns(){return Ta()||Ee(!1),E.useContext(Jc).location}function q1(t){E.useContext(Ei).static||E.useLayoutEffect(t)}function Un(){let{isDataRoute:t}=E.useContext(Lr);return t?Jk():jk()}function jk(){Ta()||Ee(!1);let t=E.useContext(Tp),{basename:e,future:n,navigator:r}=E.useContext(Ei),{matches:i}=E.useContext(Lr),{pathname:s}=Ns(),o=JSON.stringify(H1(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return q1(()=>{a.current=!0}),E.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=G1(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:dr([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,o,s,t])}function Q1(){let{matches:t}=E.useContext(Lr),e=t[t.length-1];return e?e.params:{}}function J1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(Ei),{matches:i}=E.useContext(Lr),{pathname:s}=Ns(),o=JSON.stringify(H1(i,r.v7_relativeSplatPath));return E.useMemo(()=>G1(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Wk(t,e){return zk(t,e)}function zk(t,e,n,r){Ta()||Ee(!1);let{navigator:i}=E.useContext(Ei),{matches:s}=E.useContext(Lr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Ns(),u;if(e){var d;let y=typeof e=="string"?Rs(e):e;l==="/"||(d=y.pathname)!=null&&d.startsWith(l)||Ee(!1),u=y}else u=c;let h=u.pathname||"/",f=h;if(l!=="/"){let y=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(y.length).join("/")}let _=mk(t,{pathname:f}),w=Gk(_&&_.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:dr([l,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:dr([l,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&w?E.createElement(Jc.Provider,{value:{location:Jo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xn.Pop}},w):w}function Bk(){let t=Qk(),e=Dk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const Vk=E.createElement(Bk,null);class $k extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(Lr.Provider,{value:this.props.routeContext},E.createElement(K1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hk(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Tp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Lr.Provider,{value:e},r)}function Gk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||Ee(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:f}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let f,_=!1,w=null,y=null;n&&(f=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||Vk,l&&(c<0&&h===0?(_=!0,y=null):c===h&&(_=!0,y=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,h+1)),p=()=>{let v;return f?v=w:_?v=y:d.route.Component?v=E.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=u,E.createElement(Hk,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?E.createElement($k,{location:n.location,revalidation:n.revalidation,component:w,error:f,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var X1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(X1||{}),ac=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ac||{});function Yk(t){let e=E.useContext(Tp);return e||Ee(!1),e}function Kk(t){let e=E.useContext(Fk);return e||Ee(!1),e}function qk(t){let e=E.useContext(Lr);return e||Ee(!1),e}function Z1(t){let e=qk(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function Qk(){var t;let e=E.useContext(K1),n=Kk(ac.UseRouteError),r=Z1(ac.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Jk(){let{router:t}=Yk(X1.UseNavigateStable),e=Z1(ac.UseNavigateStable),n=E.useRef(!1);return q1(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Jo({fromRouteId:e},s)))},[t,e])}const uv={};function Xk(t,e){uv[e]||(uv[e]=!0,console.warn(e))}const dv=(t,e,n)=>Xk(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function Zk(t,e){t!=null&&t.v7_startTransition||dv("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&dv("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function ew(t){Ee(!1)}function e2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1,future:a}=t;Ta()&&Ee(!1);let l=e.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:l,navigator:s,static:o,future:Jo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Rs(r));let{pathname:u="/",search:d="",hash:h="",state:f=null,key:_="default"}=r,w=E.useMemo(()=>{let y=Sp(u,l);return y==null?null:{location:{pathname:y,search:d,hash:h,state:f,key:_},navigationType:i}},[l,u,d,h,f,_,i]);return w==null?null:E.createElement(Ei.Provider,{value:c},E.createElement(Jc.Provider,{children:n,value:w}))}function t2(t){let{children:e,location:n}=t;return Wk(Ph(e),n)}new Promise(()=>{});function Ph(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Ph(r.props.children,s));return}r.type!==ew&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ph(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bh(){return bh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bh.apply(this,arguments)}function n2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function r2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function i2(t,e){return t.button===0&&(!e||e==="_self")&&!r2(t)}const s2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],o2="6";try{window.__reactRouterVersion=o2}catch{}const a2="startTransition",hv=eS[a2];function l2(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=hk({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=E.useCallback(d=>{c&&hv?hv(()=>l(d)):l(d)},[l,c]);return E.useLayoutEffect(()=>o.listen(u),[o,u]),E.useEffect(()=>Zk(r),[r]),E.createElement(e2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const c2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",u2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tw=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d}=e,h=n2(e,s2),{basename:f}=E.useContext(Ei),_,w=!1;if(typeof c=="string"&&u2.test(c)&&(_=c,c2))try{let v=new URL(window.location.href),C=c.startsWith("//")?new URL(v.protocol+c):new URL(c),k=Sp(C.pathname,f);C.origin===v.origin&&k!=null?c=k+C.search+C.hash:w=!0}catch{}let y=Uk(c,{relative:i}),g=d2(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i,viewTransition:d});function p(v){r&&r(v),v.defaultPrevented||g(v)}return E.createElement("a",bh({},h,{href:_||y,onClick:w||s?r:p,ref:n,target:l}))});var fv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(fv||(fv={}));var pv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pv||(pv={}));function d2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Un(),c=Ns(),u=J1(t,{relative:o});return E.useCallback(d=>{if(i2(d,n)){d.preventDefault();let h=r!==void 0?r:oc(c)===oc(u);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,r,i,n,t,s,o,a])}const h2={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},f2={prefix:"fas",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"]},p2={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]},m2={prefix:"fas",iconName:"face-kiss",icon:[512,512,[128535,"kiss"],"f596","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm48.7-198.3c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C274.7 443.1 257.4 448 240 448c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.1 .3-.2 .6-.4c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1l-.4-.3-.5-.3-.2-.1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},g2={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"]},v2={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},_2={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},y2=_2,w2={prefix:"fas",iconName:"layer-group",icon:[576,512,[],"f5fd","M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"]},E2={prefix:"fas",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},C2={prefix:"fas",iconName:"poo",icon:[512,512,[128169],"f2fe","M268.9 .9c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.4c2.8 8.2 4.3 16.9 4.3 26.1c0 44.1-35.7 79.9-79.8 80L160 128c-35.3 0-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48L104 240c-39.8 0-72 32.2-72 72c0 23.2 11 43.8 28 57c-34.1 5.7-60 35.3-60 71c0 39.8 32.2 72 72 72l368 0c39.8 0 72-32.2 72-72c0-35.7-25.9-65.3-60-71c17-13.2 28-33.8 28-57c0-39.8-32.2-72-72-72l-13.7 0c13.3-11.7 21.7-28.9 21.7-48c0-35.3-28.7-64-64-64l-5.5 0c3.5-10 5.5-20.8 5.5-32c0-48.6-36.2-88.8-83.1-95.1zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm64 108.3c0 2.4-.7 4.8-2.2 6.7c-8.2 10.5-39.5 45-93.8 45s-85.6-34.6-93.8-45c-1.5-1.9-2.2-4.3-2.2-6.7c0-6.8 5.5-12.3 12.3-12.3l167.4 0c6.8 0 12.3 5.5 12.3 12.3z"]},I2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},S2={prefix:"fas",iconName:"face-meh",icon:[512,512,[128528,"meh"],"f11a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 336l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},T2={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"]},nw={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},rw=nw,iw={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},k2={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},R2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},N2={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},P2={prefix:"fas",iconName:"face-angry",icon:[512,512,[128544,"angry"],"f556","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM338.7 395.9c6.6-5.9 7.1-16 1.2-22.6C323.8 355.4 295.7 336 256 336s-67.8 19.4-83.9 37.3c-5.9 6.6-5.4 16.7 1.2 22.6s16.7 5.4 22.6-1.2c11.7-13 31.6-26.7 60.1-26.7s48.4 13.7 60.1 26.7c5.9 6.6 16 7.1 22.6 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"]},sw={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},b2={prefix:"fas",iconName:"face-sad-tear",icon:[512,512,[128546,"sad-tear"],"f5b4","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm240 80c0-8.8 7.2-16 16-16c45 0 85.6 20.5 115.7 53.1c6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9c-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47c0-20 28.6-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47zM367.6 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},A2={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]},mv=()=>{};let kp={},ow={},aw=null,lw={mark:mv,measure:mv};try{typeof window<"u"&&(kp=window),typeof document<"u"&&(ow=document),typeof MutationObserver<"u"&&(aw=MutationObserver),typeof performance<"u"&&(lw=performance)}catch{}const{userAgent:gv=""}=kp.navigator||{},wr=kp,re=ow,vv=aw,fl=lw;wr.document;const jn=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",cw=~gv.indexOf("MSIE")||~gv.indexOf("Trident/");var oe="classic",uw="duotone",vt="sharp",_t="sharp-duotone",x2=[oe,uw,vt,_t],O2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},_v={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},L2=["kit"],D2=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,M2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,F2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},U2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},j2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},W2={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},z2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},B2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},dw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},V2=["solid","regular","light","thin","duotone","brands"],hw=[1,2,3,4,5,6,7,8,9,10],$2=hw.concat([11,12,13,14,15,16,17,18,19,20]),oo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},H2=[...Object.keys(W2),...V2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oo.GROUP,oo.SWAP_OPACITY,oo.PRIMARY,oo.SECONDARY].concat(hw.map(t=>"".concat(t,"x"))).concat($2.map(t=>"w-".concat(t))),G2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Y2={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},K2={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},yv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const xn="___FONT_AWESOME___",Ah=16,fw="fa",pw="svg-inline--fa",ci="data-fa-i2svg",xh="data-fa-pseudo-element",q2="data-fa-pseudo-element-pending",Rp="data-prefix",Np="data-icon",wv="fontawesome-i2svg",Q2="async",J2=["HTML","HEAD","STYLE","SCRIPT"],mw=(()=>{try{return!0}catch{return!1}})(),gw=[oe,vt,_t];function ka(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[oe]}})}const vw={...dw};vw[oe]={...dw[oe],..._v.kit,..._v["kit-duotone"]};const Zr=ka(vw),Oh={...B2};Oh[oe]={...Oh[oe],...yv.kit,...yv["kit-duotone"]};const Xo=ka(Oh),Lh={...z2};Lh[oe]={...Lh[oe],...K2.kit};const ei=ka(Lh),Dh={...j2};Dh[oe]={...Dh[oe],...Y2.kit};const X2=ka(Dh),Z2=D2,_w="fa-layers-text",eR=M2,tR={...O2};ka(tR);const nR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dd=oo,fs=new Set;Object.keys(Xo[oe]).map(fs.add.bind(fs));Object.keys(Xo[vt]).map(fs.add.bind(fs));Object.keys(Xo[_t]).map(fs.add.bind(fs));const rR=[...L2,...H2],Eo=wr.FontAwesomeConfig||{};function iR(t){var e=re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}re&&typeof re.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=sR(iR(n));i!=null&&(Eo[r]=i)});const yw={styleDefault:"solid",familyDefault:"classic",cssPrefix:fw,replacementClass:pw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Eo.familyPrefix&&(Eo.cssPrefix=Eo.familyPrefix);const ps={...yw,...Eo};ps.autoReplaceSvg||(ps.observeMutations=!1);const A={};Object.keys(yw).forEach(t=>{Object.defineProperty(A,t,{enumerable:!0,set:function(e){ps[t]=e,Co.forEach(n=>n(A))},get:function(){return ps[t]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){ps.cssPrefix=t,Co.forEach(e=>e(A))},get:function(){return ps.cssPrefix}});wr.FontAwesomeConfig=A;const Co=[];function oR(t){return Co.push(t),()=>{Co.splice(Co.indexOf(t),1)}}const Vn=Ah,an={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aR(t){if(!t||!jn)return;const e=re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=re.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return re.head.insertBefore(e,r),t}const lR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zo(){let t=12,e="";for(;t-- >0;)e+=lR[Math.random()*62|0];return e}function Ps(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Pp(t){return t.classList?Ps(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ww(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cR(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ww(t[n]),'" '),"").trim()}function Xc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function bp(t){return t.size!==an.size||t.x!==an.x||t.y!==an.y||t.rotate!==an.rotate||t.flipX||t.flipY}function uR(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function dR(t){let{transform:e,width:n=Ah,height:r=Ah,startCentered:i=!1}=t,s="";return i&&cw?s+="translate(".concat(e.x/Vn-n/2,"em, ").concat(e.y/Vn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Vn,"em), calc(-50% + ").concat(e.y/Vn,"em)) "):s+="translate(".concat(e.x/Vn,"em, ").concat(e.y/Vn,"em) "),s+="scale(".concat(e.size/Vn*(e.flipX?-1:1),", ").concat(e.size/Vn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var hR=`:root, :host {
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
}`;function Ew(){const t=fw,e=pw,n=A.cssPrefix,r=A.replacementClass;let i=hR;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Ev=!1;function hd(){A.autoAddCss&&!Ev&&(aR(Ew()),Ev=!0)}var fR={mixout(){return{dom:{css:Ew,insertCss:hd}}},hooks(){return{beforeDOMElementCreation(){hd()},beforeI2svg(){hd()}}}};const On=wr||{};On[xn]||(On[xn]={});On[xn].styles||(On[xn].styles={});On[xn].hooks||(On[xn].hooks={});On[xn].shims||(On[xn].shims=[]);var ln=On[xn];const Cw=[],Iw=function(){re.removeEventListener("DOMContentLoaded",Iw),lc=1,Cw.map(t=>t())};let lc=!1;jn&&(lc=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),lc||re.addEventListener("DOMContentLoaded",Iw));function pR(t){jn&&(lc?setTimeout(t,0):Cw.push(t))}function Ra(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?ww(t):"<".concat(e," ").concat(cR(n),">").concat(r.map(Ra).join(""),"</").concat(e,">")}function Cv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var fd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function mR(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Mh(t){const e=mR(t);return e.length===1?e[0].toString(16):null}function gR(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Iv(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Fh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Iv(e);typeof ln.hooks.addPack=="function"&&!r?ln.hooks.addPack(t,Iv(e)):ln.styles[t]={...ln.styles[t]||{},...i},t==="fas"&&Fh("fa",e)}const{styles:Hr,shims:vR}=ln,_R={[oe]:Object.values(ei[oe]),[vt]:Object.values(ei[vt]),[_t]:Object.values(ei[_t])};let Ap=null,Sw={},Tw={},kw={},Rw={},Nw={};const yR={[oe]:Object.keys(Zr[oe]),[vt]:Object.keys(Zr[vt]),[_t]:Object.keys(Zr[_t])};function wR(t){return~rR.indexOf(t)}function ER(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!wR(i)?i:null}const Pw=()=>{const t=r=>fd(Hr,(i,s,o)=>(i[o]=fd(s,r,{}),i),{});Sw=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Tw=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),Nw=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in Hr||A.autoFetchSvg,n=fd(vR,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});kw=n.names,Rw=n.unicodes,Ap=Zc(A.styleDefault,{family:A.familyDefault})};oR(t=>{Ap=Zc(t.styleDefault,{family:A.familyDefault})});Pw();function xp(t,e){return(Sw[t]||{})[e]}function CR(t,e){return(Tw[t]||{})[e]}function Zn(t,e){return(Nw[t]||{})[e]}function bw(t){return kw[t]||{prefix:null,iconName:null}}function IR(t){const e=Rw[t],n=xp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Er(){return Ap}const Op=()=>({prefix:null,iconName:null,rest:[]});function Zc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=oe}=e,r=Zr[n][t],i=Xo[n][t]||Xo[n][r],s=t in ln.styles?t:null;return i||s||null}const SR={[oe]:Object.keys(ei[oe]),[vt]:Object.keys(ei[vt]),[_t]:Object.keys(ei[_t])};function eu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[oe]:"".concat(A.cssPrefix,"-").concat(oe),[vt]:"".concat(A.cssPrefix,"-").concat(vt),[_t]:"".concat(A.cssPrefix,"-").concat(_t)};let i=null,s=oe;const o=x2.filter(l=>l!==uw);o.forEach(l=>{(t.includes(r[l])||t.some(c=>SR[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const u=ER(A.cssPrefix,c);if(Hr[c]?(c=_R[s].includes(c)?X2[s][c]:c,i=c,l.prefix=c):yR[s].indexOf(c)>-1?(i=c,l.prefix=Zc(c,{family:s})):u?l.iconName=u:c!==A.replacementClass&&!o.some(d=>c===r[d])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const d=i==="fa"?bw(l.iconName):{},h=Zn(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||h||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Hr.far&&Hr.fas&&!A.autoFetchSvg&&(l.prefix="fas")}return l},Op());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===vt&&(Hr.fass||A.autoFetchSvg)&&(a.prefix="fass",a.iconName=Zn(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===_t&&(Hr.fasds||A.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Zn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Er()||"fas"),a}class TR{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Fh(s,i[s]);const o=ei[oe][s];o&&Fh(o,i[s]),Pw()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let Sv=[],$i={};const Zi={},kR=Object.keys(Zi);function RR(t,e){let{mixoutsTo:n}=e;return Sv=t,$i={},Object.keys(Zi).forEach(r=>{kR.indexOf(r)===-1&&delete Zi[r]}),Sv.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{$i[o]||($i[o]=[]),$i[o].push(s[o])})}r.provides&&r.provides(Zi)}),n}function Uh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return($i[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ui(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];($i[t]||[]).forEach(s=>{s.apply(null,n)})}function Cr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Zi[t]?Zi[t].apply(null,e):void 0}function jh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Er();if(e)return e=Zn(n,e)||e,Cv(Aw.definitions,n,e)||Cv(ln.styles,n,e)}const Aw=new TR,NR=()=>{A.autoReplaceSvg=!1,A.observeMutations=!1,ui("noAuto")},PR={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jn?(ui("beforeI2svg",t),Cr("pseudoElements2svg",t),Cr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,pR(()=>{AR({autoReplaceSvgRoot:e}),ui("watch",t)})}},bR={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Zn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Zc(t[0]);return{prefix:n,iconName:Zn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(Z2))){const e=eu(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Er(),iconName:Zn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Er();return{prefix:e,iconName:Zn(e,t)||t}}}},St={noAuto:NR,config:A,dom:PR,parse:bR,library:Aw,findIconDefinition:jh,toHtml:Ra},AR=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=re}=t;(Object.keys(ln.styles).length>0||A.autoFetchSvg)&&jn&&A.autoReplaceSvg&&St.dom.i2svg({node:e})};function tu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ra(n))}}),Object.defineProperty(t,"node",{get:function(){if(!jn)return;const n=re.createElement("div");return n.innerHTML=t.html,n.children}}),t}function xR(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(bp(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=Xc({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function OR(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(A.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Lp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:d=!1}=t,{width:h,height:f}=n.found?n:e,_=r==="fak",w=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(k=>u.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(u.classes).join(" ");let y={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":i,class:w,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(f)}};const g=_&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/f*16*.0625,"em")}:{};d&&(y.attributes[ci]=""),a&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Zo())},children:[a]}),delete y.attributes.title);const p={...y,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...g,...u.styles}},{children:v,attributes:C}=n.found&&e.found?Cr("generateAbstractMask",p)||{children:[],attributes:{}}:Cr("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=v,p.attributes=C,o?OR(p):xR(p)}function Tv(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[ci]="");const c={...o.styles};bp(i)&&(c.transform=dR({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const u=Xc(c);u.length>0&&(l.style=u);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function LR(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Xc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:pd}=ln;function Wh(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(dd.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(dd.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(dd.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const DR={found:!1,width:512,height:512};function MR(t,e){!mw&&!A.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function zh(t,e){let n=e;return e==="fa"&&A.styleDefault!==null&&(e=Er()),new Promise((r,i)=>{if(n==="fa"){const s=bw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&pd[e]&&pd[e][t]){const s=pd[e][t];return r(Wh(s))}MR(t,e),r({...DR,icon:A.showMissingIcons&&t?Cr("missingIconAbstract")||{}:{}})})}const kv=()=>{},Bh=A.measurePerformance&&fl&&fl.mark&&fl.measure?fl:{mark:kv,measure:kv},ao='FA "6.6.0"',FR=t=>(Bh.mark("".concat(ao," ").concat(t," begins")),()=>xw(t)),xw=t=>{Bh.mark("".concat(ao," ").concat(t," ends")),Bh.measure("".concat(ao," ").concat(t),"".concat(ao," ").concat(t," begins"),"".concat(ao," ").concat(t," ends"))};var Dp={begin:FR,end:xw};const Pl=()=>{};function Rv(t){return typeof(t.getAttribute?t.getAttribute(ci):null)=="string"}function UR(t){const e=t.getAttribute?t.getAttribute(Rp):null,n=t.getAttribute?t.getAttribute(Np):null;return e&&n}function jR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(A.replacementClass)}function WR(){return A.autoReplaceSvg===!0?bl.replace:bl[A.autoReplaceSvg]||bl.replace}function zR(t){return re.createElementNS("http://www.w3.org/2000/svg",t)}function BR(t){return re.createElement(t)}function Ow(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?zR:BR}=e;if(typeof t=="string")return re.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(Ow(s,{ceFn:n}))}),r}function VR(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const bl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ow(n),e)}),e.getAttribute(ci)===null&&A.keepOriginalSource){let n=re.createComment(VR(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Pp(e).indexOf(A.replacementClass))return bl.replace(t);const r=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===A.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Ra(s)).join(`
`);e.setAttribute(ci,""),e.innerHTML=i}};function Nv(t){t()}function Lw(t,e){const n=typeof e=="function"?e:Pl;if(t.length===0)n();else{let r=Nv;A.mutateApproach===Q2&&(r=wr.requestAnimationFrame||Nv),r(()=>{const i=WR(),s=Dp.begin("mutate");t.map(i),s(),n()})}}let Mp=!1;function Dw(){Mp=!0}function Vh(){Mp=!1}let cc=null;function Pv(t){if(!vv||!A.observeMutations)return;const{treeCallback:e=Pl,nodeCallback:n=Pl,pseudoElementsCallback:r=Pl,observeMutationsRoot:i=re}=t;cc=new vv(s=>{if(Mp)return;const o=Er();Ps(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Rv(a.addedNodes[0])&&(A.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&A.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Rv(a.target)&&~nR.indexOf(a.attributeName))if(a.attributeName==="class"&&UR(a.target)){const{prefix:l,iconName:c}=eu(Pp(a.target));a.target.setAttribute(Rp,l||o),c&&a.target.setAttribute(Np,c)}else jR(a.target)&&n(a.target)})}),jn&&cc.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function $R(){cc&&cc.disconnect()}function HR(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function GR(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=eu(Pp(t));return i.prefix||(i.prefix=Er()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=CR(i.prefix,t.innerText)||xp(i.prefix,Mh(t.innerText))),!i.iconName&&A.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function YR(t){const e=Ps(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return A.autoA11y&&(n?e["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||Zo()):(e["aria-hidden"]="true",e.focusable="false")),e}function KR(){return{iconName:null,title:null,titleId:null,prefix:null,transform:an,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=GR(t),s=YR(t),o=Uh("parseNodeAttributes",{},t);let a=e.styleParser?HR(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:an,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:qR}=ln;function Mw(t){const e=A.autoReplaceSvg==="nest"?bv(t,{styleParser:!1}):bv(t);return~e.extra.classes.indexOf(_w)?Cr("generateLayersText",t,e):Cr("generateSvgReplacementMutation",t,e)}let fn=new Set;gw.map(t=>{fn.add("fa-".concat(t))});Object.keys(Zr[oe]).map(fn.add.bind(fn));Object.keys(Zr[vt]).map(fn.add.bind(fn));Object.keys(Zr[_t]).map(fn.add.bind(fn));fn=[...fn];function Av(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jn)return Promise.resolve();const n=re.documentElement.classList,r=u=>n.add("".concat(wv,"-").concat(u)),i=u=>n.remove("".concat(wv,"-").concat(u)),s=A.autoFetchSvg?fn:gw.map(u=>"fa-".concat(u)).concat(Object.keys(qR));s.includes("fa")||s.push("fa");const o=[".".concat(_w,":not([").concat(ci,"])")].concat(s.map(u=>".".concat(u,":not([").concat(ci,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ps(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=Dp.begin("onTree"),c=a.reduce((u,d)=>{try{const h=Mw(d);h&&u.push(h)}catch(h){mw||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,d)=>{Promise.all(c).then(h=>{Lw(h,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(h=>{l(),d(h)})})}function QR(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mw(t).then(n=>{n&&Lw([n],e)})}function JR(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:jh(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:jh(i||{})),t(r,{...n,mask:i})}}const XR=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=an,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:h,icon:f}=t;return tu({type:"icon",...t},()=>(ui("beforeDOMElementCreation",{iconDefinition:t,params:e}),A.autoA11y&&(o?c["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(a||Zo()):(c["aria-hidden"]="true",c.focusable="false")),Lp({icons:{main:Wh(f),mask:i?Wh(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:h,transform:{...an,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var ZR={mixout(){return{icon:JR(XR)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Av,t.nodeCallback=QR,t}}},provides(t){t.i2svg=function(e){const{node:n=re,callback:r=()=>{}}=e;return Av(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:d}=n;return new Promise((h,f)=>{Promise.all([zh(r,o),c.iconName?zh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[w,y]=_;h([e,Lp({icons:{main:w,mask:y},prefix:o,iconName:r,transform:a,symbol:l,maskId:u,title:i,titleId:s,extra:d,watchable:!0})])}).catch(f)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Xc(o);a.length>0&&(r.style=a);let l;return bp(s)&&(l=Cr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},eN={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return tu({type:"layer"},()=>{ui("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},tN={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return tu({type:"counter",content:t},()=>(ui("beforeDOMElementCreation",{content:t,params:e}),LR({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(A.cssPrefix,"-layers-counter"),...r]}})))}}}},nN={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=an,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return tu({type:"text",content:t},()=>(ui("beforeDOMElementCreation",{content:t,params:e}),Tv({content:t,transform:{...an,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(A.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(cw){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return A.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Tv({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const rN=new RegExp('"',"ug"),xv=[1105920,1112319],Ov={FontAwesome:{normal:"fas",400:"fas"},...U2,...F2,...G2},$h=Object.keys(Ov).reduce((t,e)=>(t[e.toLowerCase()]=Ov[e],t),{}),iN=Object.keys($h).reduce((t,e)=>{const n=$h[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function sN(t){const e=t.replace(rN,""),n=gR(e,0),r=n>=xv[0]&&n<=xv[1],i=e.length===2?e[0]===e[1]:!1;return{value:Mh(i?e[0]:e),isSecondary:r||i}}function oN(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return($h[n]||{})[i]||iN[n]}function Lv(t,e){const n="".concat(q2).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Ps(t.children).filter(h=>h.getAttribute(xh)===e)[0],a=wr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(eR),u=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&d!=="none"&&d!==""){const h=a.getPropertyValue("content");let f=oN(l,u);const{value:_,isSecondary:w}=sN(h),y=c[0].startsWith("FontAwesome");let g=xp(f,_),p=g;if(y){const v=IR(_);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!w&&(!o||o.getAttribute(Rp)!==f||o.getAttribute(Np)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);const v=KR(),{extra:C}=v;C.attributes[xh]=e,zh(g,f).then(k=>{const N=Lp({...v,icons:{main:k,mask:Op()},prefix:f,iconName:p,extra:C,watchable:!0}),P=re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=N.map(x=>Ra(x)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function aN(t){return Promise.all([Lv(t,"::before"),Lv(t,"::after")])}function lN(t){return t.parentNode!==document.head&&!~J2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(xh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Dv(t){if(jn)return new Promise((e,n)=>{const r=Ps(t.querySelectorAll("*")).filter(lN).map(aN),i=Dp.begin("searchPseudoElements");Dw(),Promise.all(r).then(()=>{i(),Vh(),e()}).catch(()=>{i(),Vh(),n()})})}var cN={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Dv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=re}=e;A.searchPseudoElements&&Dv(n)}}};let Mv=!1;var uN={mixout(){return{dom:{unwatch(){Dw(),Mv=!0}}}},hooks(){return{bootstrap(){Pv(Uh("mutationObserverCallbacks",{}))},noAuto(){$R()},watch(t){const{observeMutationsRoot:e}=t;Mv?Vh():Pv(Uh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Fv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var dN={mixout(){return{parse:{transform:t=>Fv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Fv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},h={outer:o,inner:u,path:d};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const md={x:0,y:0,width:"100%",height:"100%"};function Uv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function hN(t){return t.tag==="g"?t.children:[t]}var fN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?eu(n.split(" ").map(i=>i.trim())):Op();return r.prefix||(r.prefix=Er()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:u,icon:d}=s,h=uR({transform:a,containerWidth:u,iconWidth:l}),f={tag:"rect",attributes:{...md,fill:"white"}},_=c.children?{children:c.children.map(Uv)}:{},w={tag:"g",attributes:{...h.inner},children:[Uv({tag:c.tag,attributes:{...c.attributes,...h.path},..._})]},y={tag:"g",attributes:{...h.outer},children:[w]},g="mask-".concat(o||Zo()),p="clip-".concat(o||Zo()),v={tag:"mask",attributes:{...md,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[f,y]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:hN(d)},v]};return n.push(C,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(g,")"),...md}}),{children:n,attributes:r}}}},pN={provides(t){let e=!1;wr.matchMedia&&(e=wr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},mN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},gN=[fR,ZR,eN,tN,nN,cN,uN,dN,fN,pN,mN];RR(gN,{mixoutsTo:St});St.noAuto;St.config;St.library;St.dom;const Hh=St.parse;St.findIconDefinition;St.toHtml;const vN=St.icon;St.layer;St.text;St.counter;var Fw={exports:{}},_N="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",yN=_N,wN=yN;function Uw(){}function jw(){}jw.resetWarningCache=Uw;var EN=function(){function t(r,i,s,o,a,l){if(l!==wN){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:jw,resetWarningCache:Uw};return n.PropTypes=n,n};Fw.exports=EN();var CN=Fw.exports;const B=Ny(CN);function jv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function en(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jv(Object(n),!0).forEach(function(r){Hi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uc(t){"@babel/helpers - typeof";return uc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uc(t)}function Hi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function IN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function SN(t,e){if(t==null)return{};var n=IN(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Gh(t){return TN(t)||kN(t)||RN(t)||NN()}function TN(t){if(Array.isArray(t))return Yh(t)}function kN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function RN(t,e){if(t){if(typeof t=="string")return Yh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yh(t,e)}}function Yh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function NN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PN(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,h=t.fixedWidth,f=t.inverse,_=t.border,w=t.listItem,y=t.flip,g=t.size,p=t.rotation,v=t.pull,C=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":h,"fa-inverse":f,"fa-border":_,"fa-li":w,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},Hi(e,"fa-".concat(g),typeof g<"u"&&g!==null),Hi(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Hi(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Hi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(C).map(function(k){return C[k]?k:null}).filter(function(k){return k})}function bN(t){return t=t-0,t===t}function Ww(t){return bN(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var AN=["style"];function xN(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ON(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Ww(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[xN(i)]=s:e[i]=s,e},{})}function zw(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return zw(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=ON(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Ww(c)]=u}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=SN(n,AN);return i.attrs.style=en(en({},i.attrs.style),o),t.apply(void 0,[e.tag,en(en({},i.attrs),a)].concat(Gh(r)))}var Bw=!1;try{Bw=!0}catch{}function LN(){if(!Bw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Wv(t){if(t&&uc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Hh.icon)return Hh.icon(t);if(t===null)return null;if(t&&uc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function gd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Hi({},t,e):{}}var zv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ce=Of.forwardRef(function(t,e){var n=en(en({},zv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,u=Wv(r),d=gd("classes",[].concat(Gh(PN(n)),Gh((o||"").split(" ")))),h=gd("transform",typeof n.transform=="string"?Hh.transform(n.transform):n.transform),f=gd("mask",Wv(i)),_=vN(u,en(en(en(en({},d),h),f),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!_)return LN("Could not find icon",u),null;var w=_.abstract,y={ref:e};return Object.keys(n).forEach(function(g){zv.hasOwnProperty(g)||(y[g]=n[g])}),DN(w[0],y)});Ce.displayName="FontAwesomeIcon";Ce.propTypes={beat:B.bool,border:B.bool,beatFade:B.bool,bounce:B.bool,className:B.string,fade:B.bool,flash:B.bool,mask:B.oneOfType([B.object,B.array,B.string]),maskId:B.string,fixedWidth:B.bool,inverse:B.bool,flip:B.oneOf([!0,!1,"horizontal","vertical","both"]),icon:B.oneOfType([B.object,B.array,B.string]),listItem:B.bool,pull:B.oneOf(["right","left"]),pulse:B.bool,rotation:B.oneOf([0,90,180,270]),shake:B.bool,size:B.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B.bool,spinPulse:B.bool,spinReverse:B.bool,symbol:B.oneOfType([B.bool,B.string]),title:B.string,titleId:B.string,transform:B.oneOfType([B.string,B.object]),swapOpacity:B.bool};var DN=zw.bind(null,Of.createElement),Bv={};/**
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
 */const Vw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw bs(e)},bs=function(t){return new Error("Firebase Database ("+Vw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const $w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),r.push(n[u],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new FN;const h=s<<2|a>>4;if(r.push(h),c!==64){const f=a<<4&240|c>>2;if(r.push(f),d!==64){const _=c<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hw=function(t){const e=$w(t);return Fp.encodeByteArray(e,!0)},dc=function(t){return Hw(t).replace(/\./g,"")},hc=function(t){try{return Fp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function UN(t){return ea(void 0,t)}function ea(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!jN(n)||(t[n]=ea(t[n],e[n]));return t}function jN(t){return t!=="__proto__"}/**
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
 */function Gw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WN=()=>Gw().__FIREBASE_DEFAULTS__,zN=()=>{if(typeof process>"u"||typeof Bv>"u")return;const t=Bv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hc(t[1]);return e&&JSON.parse(e)},Up=()=>{try{return WN()||zN()||BN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yw=()=>{var t;return(t=Up())===null||t===void 0?void 0:t.config},VN=t=>{var e;return(e=Up())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function $N(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dc(JSON.stringify(n)),dc(JSON.stringify(o)),""].join(".")}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Kw(){var t;const e=(t=Up())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HN(){return typeof window<"u"||qw()}function qw(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function GN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jw(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xw(){return Vw.NODE_ADMIN===!0}function fc(){try{return typeof indexedDB=="object"}catch{return!1}}function YN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const KN="FirebaseError";class lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KN,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new lt(i,a,r)}}function qN(t,e){return t.replace(QN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QN=/\{\$([^}]+)}/g;/**
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
 */function ta(t){return JSON.parse(t)}function Se(t){return JSON.stringify(t)}/**
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
 */const Zw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ta(hc(s[0])||""),n=ta(hc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},JN=function(t){const e=Zw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XN=function(t){const e=Zw(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function di(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Kh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vv(s)&&Vv(o)){if(!Kh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vv(t){return t!==null&&typeof t=="object"}/**
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
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class ZN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function eE(t,e){const n=new eP(t,e);return n.subscribe.bind(n)}class eP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vd),i.error===void 0&&(i.error=vd),i.complete===void 0&&(i.complete=vd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vd(){}/**
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
 */const L=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function ct(t,e){return`${t} failed: ${e} argument `}function Ae(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(ct(t,e)+"must be a valid function.")}function $v(t,e,n,r){if(n&&(typeof n!="object"||n===null))throw new Error(ct(t,e)+"must be a valid context object.")}/**
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
 */const nP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ru=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Vr="[DEFAULT]";/**
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
 */class qh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iP(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rP(t){return t===Vr?void 0:t}function iP(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const zp=[];var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const tE={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},sP=Y.INFO,oP={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},aP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Na{constructor(e){this.name=e,this._logLevel=sP,this._logHandler=aP,this._userLogHandler=null,zp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}function lP(t){zp.forEach(e=>{e.setLogLevel(t)})}function cP(t,e){for(const n of zp){let r=null;e&&e.level&&(r=tE[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:Y[s].toLowerCase(),message:a,args:o,type:i.name})}}}const uP=(t,e)=>e.some(n=>t instanceof n);let Hv,Gv;function dP(){return Hv||(Hv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hP(){return Gv||(Gv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nE=new WeakMap,Qh=new WeakMap,rE=new WeakMap,_d=new WeakMap,Bp=new WeakMap;function fP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nE.set(n,t)}).catch(()=>{}),Bp.set(e,t),e}function pP(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mP(t){Jh=t(Jh)}function gP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yd(this),e,...n);return rE.set(r,e.sort?e.sort():[e]),hr(r)}:hP().includes(t)?function(...e){return t.apply(yd(this),e),hr(nE.get(this))}:function(...e){return hr(t.apply(yd(this),e))}}function vP(t){return typeof t=="function"?gP(t):(t instanceof IDBTransaction&&pP(t),uP(t,dP())?new Proxy(t,Jh):t)}function hr(t){if(t instanceof IDBRequest)return fP(t);if(_d.has(t))return _d.get(t);const e=vP(t);return e!==t&&(_d.set(t,e),Bp.set(e,t)),e}const yd=t=>Bp.get(t);function _P(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yP=["get","getKey","getAll","getAllKeys","count"],wP=["put","add","delete","clear"],wd=new Map;function Yv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wd.get(e))return wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return wd.set(e,s),s}mP(t=>({...t,get:(e,n,r)=>Yv(e,n)||t.get(e,n,r),has:(e,n)=>!!Yv(e,n)||t.has(e,n)}));/**
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
 */class EP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gc="@firebase/app",Xh="0.10.16";/**
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
 */const Ln=new Na("@firebase/app"),IP="@firebase/app-compat",SP="@firebase/analytics-compat",TP="@firebase/analytics",kP="@firebase/app-check-compat",RP="@firebase/app-check",NP="@firebase/auth",PP="@firebase/auth-compat",bP="@firebase/database",AP="@firebase/data-connect",xP="@firebase/database-compat",OP="@firebase/functions",LP="@firebase/functions-compat",DP="@firebase/installations",MP="@firebase/installations-compat",FP="@firebase/messaging",UP="@firebase/messaging-compat",jP="@firebase/performance",WP="@firebase/performance-compat",zP="@firebase/remote-config",BP="@firebase/remote-config-compat",VP="@firebase/storage",$P="@firebase/storage-compat",HP="@firebase/firestore",GP="@firebase/vertexai",YP="@firebase/firestore-compat",KP="firebase",qP="11.0.2";/**
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
 */const Ir="[DEFAULT]",QP={[gc]:"fire-core",[IP]:"fire-core-compat",[TP]:"fire-analytics",[SP]:"fire-analytics-compat",[RP]:"fire-app-check",[kP]:"fire-app-check-compat",[NP]:"fire-auth",[PP]:"fire-auth-compat",[bP]:"fire-rtdb",[AP]:"fire-data-connect",[xP]:"fire-rtdb-compat",[OP]:"fire-fn",[LP]:"fire-fn-compat",[DP]:"fire-iid",[MP]:"fire-iid-compat",[FP]:"fire-fcm",[UP]:"fire-fcm-compat",[jP]:"fire-perf",[WP]:"fire-perf-compat",[zP]:"fire-rc",[BP]:"fire-rc-compat",[VP]:"fire-gcs",[$P]:"fire-gcs-compat",[HP]:"fire-fst",[YP]:"fire-fst-compat",[GP]:"fire-vertex","fire-js":"fire-js",[KP]:"fire-js-all"};/**
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
 */const Sr=new Map,ms=new Map,gs=new Map;function na(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function iE(t,e){t.container.addOrOverwriteComponent(e)}function Tr(t){const e=t.name;if(gs.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;gs.set(e,t);for(const n of Sr.values())na(n,t);for(const n of ms.values())na(n,t);return!0}function sE(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function JP(t,e,n=Ir){sE(t,e).clearInstance(n)}function oE(t){return t.options!==void 0}function pe(t){return t.settings!==void 0}function XP(){gs.clear()}/**
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
 */const ZP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new Ci("app","Firebase",ZP);/**
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
 */let aE=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}};/**
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
 */class eb extends aE{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Yt(gc,Xh,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){$p(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw xt.create("server-app-deleted")}}/**
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
 */const Dr=qP;function Vp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ir,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(n||(n=Yw()),!n)throw xt.create("no-options");const s=Sr.get(i);if(s){if(Kh(n,s.options)&&Kh(r,s.config))return s;throw xt.create("duplicate-app",{appName:i})}const o=new Wp(i);for(const l of gs.values())o.addComponent(l);const a=new aE(n,r,o);return Sr.set(i,a),a}function tb(t,e){if(HN()&&!qw())throw xt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;oE(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((u,d)=>Math.imul(31,u)+d.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw xt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=ms.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new Wp(s);for(const c of gs.values())a.addComponent(c);const l=new eb(n,e,s,a);return ms.set(s,l),l}function nb(t=Ir){const e=Sr.get(t);if(!e&&t===Ir&&Yw())return Vp();if(!e)throw xt.create("no-app",{appName:t});return e}function rb(){return Array.from(Sr.values())}async function $p(t){let e=!1;const n=t.name;Sr.has(n)?(e=!0,Sr.delete(n)):ms.has(n)&&t.decRefCount()<=0&&(ms.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Yt(t,e,n){var r;let i=(r=QP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(a.join(" "));return}Tr(new Dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function lE(t,e){if(t!==null&&typeof t!="function")throw xt.create("invalid-log-argument");cP(t,e)}function cE(t){lP(t)}/**
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
 */const ib="firebase-heartbeat-database",sb=1,ra="firebase-heartbeat-store";let Ed=null;function uE(){return Ed||(Ed=_P(ib,sb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ra)}catch(n){console.warn(n)}}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),Ed}async function ob(t){try{const n=(await uE()).transaction(ra),r=await n.objectStore(ra).get(dE(t));return await n.done,r}catch(e){if(e instanceof lt)Ln.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Kv(t,e){try{const r=(await uE()).transaction(ra,"readwrite");await r.objectStore(ra).put(e,dE(t)),await r.done}catch(n){if(n instanceof lt)Ln.warn(n.message);else{const r=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function dE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ab=1024,lb=30*24*60*60*1e3;class cb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new db(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=lb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qv(),{heartbeatsToSend:r,unsentEntries:i}=ub(this._heartbeatsCache.heartbeats),s=dc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function qv(){return new Date().toISOString().substring(0,10)}function ub(t,e=ab){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class db{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fc()?YN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ob(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qv(t){return dc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hb(t){Tr(new Dt("platform-logger",e=>new EP(e),"PRIVATE")),Tr(new Dt("heartbeat",e=>new cb(e),"PRIVATE")),Yt(gc,Xh,t),Yt(gc,Xh,"esm2017"),Yt("fire-js","")}hb("");const fb=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:lt,SDK_VERSION:Dr,_DEFAULT_ENTRY_NAME:Ir,_addComponent:na,_addOrOverwriteComponent:iE,_apps:Sr,_clearComponents:XP,_components:gs,_getProvider:sE,_isFirebaseApp:oE,_isFirebaseServerApp:pe,_registerComponent:Tr,_removeServiceInstance:JP,_serverApps:ms,deleteApp:$p,getApp:nb,getApps:rb,initializeApp:Vp,initializeServerApp:tb,onLog:lE,registerVersion:Yt,setLogLevel:cE},Symbol.toStringTag,{value:"Module"}));/**
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
 */class pb{constructor(e,n){this._delegate=e,this.firebase=n,na(e,new Dt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),$p(this._delegate)))}_getService(e,n=Ir){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ir){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){na(this._delegate,e)}_addOrOverwriteComponent(e){iE(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const mb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Jv=new Ci("app-compat","Firebase",mb);/**
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
 */function gb(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Yt,setLogLevel:cE,onLog:lE,apps:null,SDK_VERSION:Dr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:fb}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ir,!wt(e,c))throw Jv.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,u={}){const d=Vp(c,u);if(wt(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const u=c.name,d=u.replace("-compat","");if(Tr(c)&&c.type==="PUBLIC"){const h=(f=i())=>{if(typeof f[d]!="function")throw Jv.create("invalid-app-argument",{appName:u});return f[d]()};c.serviceProps!==void 0&&ea(h,c.serviceProps),n[d]=h,t.prototype[d]=function(...f){return this._getService.bind(this,u).apply(this,c.multipleInstances?f:[])}}return c.type==="PUBLIC"?n[d]:null}function l(c,u){return u==="serverAuth"?null:u}return n}/**
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
 */function hE(){const t=gb(pb);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:hE,extendNamespace:e,createSubscribe:eE,ErrorFactory:Ci,deepExtend:ea});function e(n){ea(t,n)}return t}const vb=hE();/**
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
 */const Xv=new Na("@firebase/app-compat"),_b="@firebase/app-compat",yb="0.2.46";/**
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
 */function wb(t){Yt(_b,yb,t)}/**
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
 */try{const t=Gw();if(t.firebase!==void 0){Xv.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Xv.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Mr=vb;wb();var Eb="firebase",Cb="11.0.2";/**
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
 */Mr.registerVersion(Eb,Cb,"app-compat");var Zv={};const e_="@firebase/database",t_="1.0.10";/**
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
 */let fE="";function pE(t){fE=t}/**
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
 */class Ib{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ta(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Sb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const mE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ib(e)}}catch{}return new Sb},qr=mE("localStorage"),Zh=mE("sessionStorage");/**
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
 */const es=new Na("@firebase/database"),gE=function(){let t=1;return function(){return t++}}(),vE=function(t){const e=nP(t),n=new ZN;n.update(e);const r=n.digest();return Fp.encodeByteArray(r)},Pa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Pa.apply(null,r):typeof r=="object"?e+=Se(r):e+=r,e+=" "}return e};let ti=null,n_=!0;const _E=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(es.logLevel=Y.VERBOSE,ti=es.log.bind(es),e&&Zh.set("logging_enabled",!0)):typeof t=="function"?ti=t:(ti=null,Zh.remove("logging_enabled"))},Oe=function(...t){if(n_===!0&&(n_=!1,ti===null&&Zh.get("logging_enabled")===!0&&_E(!0)),ti){const e=Pa.apply(null,t);ti(e)}},ba=function(t){return function(...e){Oe(t,...e)}},ef=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pa(...t);es.error(e)},pn=function(...t){const e=`FIREBASE FATAL ERROR: ${Pa(...t)}`;throw es.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+Pa(...t);es.warn(e)},Tb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},kr="[MIN_NAME]",Dn="[MAX_NAME]",Si=function(t,e){if(t===e)return 0;if(t===kr||e===Dn)return-1;if(e===kr||t===Dn)return 1;{const n=r_(t),r=r_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Rb=function(t,e){return t===e?0:t<e?-1:1},Ks=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Se(e))},Hp=function(t){if(typeof t!="object"||t===null)return Se(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Se(e[r]),n+=":",n+=Hp(t[e[r]]);return n+="}",n},yE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wE=function(t){T(!iu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Nb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Pb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Ab=new RegExp("^-?(0*)\\d{1,10}$"),xb=-2147483648,Ob=2147483647,r_=function(t){if(Ab.test(t)){const e=Number(t);if(e>=xb&&e<=Ob)return e}return null},As=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},Lb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Io=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Db{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Mb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class ts{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ts.OWNER="owner";/**
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
 */const Gp="5",EE="v",CE="s",IE="r",SE="f",TE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kE="ls",RE="p",tf="ac",NE="websocket",PE="long_polling";/**
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
 */class bE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Fb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function AE(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===NE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===PE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fb(t)&&(n.ns=t.namespace);const i=[];return Me(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Ub{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return UN(this.counters_)}}/**
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
 */const Cd={},Id={};function Yp(t){const e=t.toString();return Cd[e]||(Cd[e]=new Ub),Cd[e]}function jb(t,e){const n=t.toString();return Id[n]||(Id[n]=e()),Id[n]}/**
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
 */class Wb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&As(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const i_="start",zb="close",Bb="pLPCommand",Vb="pRTLPCB",xE="id",OE="pw",LE="ser",$b="cb",Hb="seg",Gb="ts",Yb="d",Kb="dframe",DE=1870,ME=30,qb=DE-ME,Qb=25e3,Jb=3e4;class er{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ba(e),this.stats_=Yp(n),this.urlFn=l=>(this.appCheckToken&&(l[tf]=this.appCheckToken),AE(n,PE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Wb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Jb)),kb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kp((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===i_)this.id=a,this.password=l;else if(o===zb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[i_]="t",r[LE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$b]=this.scriptTagHolder.uniqueCallbackIdentifier),r[EE]=Gp,this.transportSessionId&&(r[CE]=this.transportSessionId),this.lastSessionId&&(r[kE]=this.lastSessionId),this.applicationId&&(r[RE]=this.applicationId),this.appCheckToken&&(r[tf]=this.appCheckToken),typeof location<"u"&&location.hostname&&TE.test(location.hostname)&&(r[IE]=SE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){er.forceAllow_=!0}static forceDisallow(){er.forceDisallow_=!0}static isAvailable(){return er.forceAllow_?!0:!er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Nb()&&!Pb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hw(n),i=yE(r,qb);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Kb]="t",r[xE]=e,r[OE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Se(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gE(),window[Bb+this.uniqueCallbackIdentifier]=e,window[Vb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Oe("frame writing exception"),a.stack&&Oe(a.stack),Oe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Oe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xE]=this.myID,e[OE]=this.myPW,e[LE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ME+r.length<=DE;){const o=this.pendingSegs.shift();r=r+"&"+Hb+i+"="+o.seg+"&"+Gb+i+"="+o.ts+"&"+Yb+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Qb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Xb=16384,Zb=45e3;let vc=null;typeof MozWebSocket<"u"?vc=MozWebSocket:typeof WebSocket<"u"&&(vc=WebSocket);class Rt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ba(this.connId),this.stats_=Yp(n),this.connURL=Rt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[EE]=Gp,typeof location<"u"&&location.hostname&&TE.test(location.hostname)&&(o[IE]=SE),n&&(o[CE]=n),r&&(o[kE]=r),i&&(o[tf]=i),s&&(o[RE]=s),AE(e,NE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qr.set("previous_websocket_failure",!0);try{let r;Xw(),this.mySock=new vc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vc!==null&&!Rt.forceDisallow_}static previouslyFailed(){return qr.isInMemoryStorage||qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ta(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yE(n,Xb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Zb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2;Rt.healthyTimeout=3e4;/**
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
 */class vs{static get ALL_TRANSPORTS(){return[er,Rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Rt&&Rt.isAvailable();let r=n&&!Rt.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Rt];else{const i=this.transports_=[];for(const s of vs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);vs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vs.globalTransportInitialized_=!1;/**
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
 */const eA=6e4,tA=5e3,nA=10*1024,rA=100*1024,Sd="t",s_="d",iA="s",o_="r",sA="e",a_="o",l_="a",c_="n",u_="p",oA="h";class aA{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ba("c:"+this.id+":"),this.transportManager_=new vs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Io(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sd in e){const n=e[Sd];n===l_?this.upgradeIfSecondaryHealthy_():n===o_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===a_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ks("t",e),r=Ks("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:u_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:l_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:c_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ks("t",e),r=Ks("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ks(Sd,e);if(s_ in e){const r=e[s_];if(n===oA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===c_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iA?this.onConnectionShutdown_(r):n===o_?this.onReset_(r):n===sA?ef("Server Error: "+r):n===a_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ef("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gp!==r&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Io(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Io(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:u_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class FE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class UE{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class _c extends UE{static getInstance(){return new _c}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const d_=32,h_=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new G("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rr(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function qp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ia(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function qe(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return qe(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cA(t,e){const n=ia(t,0),r=ia(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Si(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Qp(t,e){if(Rr(t)!==Rr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Rr(t)>Rr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class uA{constructor(e,n){this.errorPrefix_=n,this.parts_=ia(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ru(this.parts_[r]);WE(this)}}function dA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ru(e),WE(t)}function hA(t){const e=t.parts_.pop();t.byteLength_-=ru(e),t.parts_.length>0&&(t.byteLength_-=1)}function WE(t){if(t.byteLength_>h_)throw new Error(t.errorPrefix_+"has a key path longer than "+h_+" bytes ("+t.byteLength_+").");if(t.parts_.length>d_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+d_+") or object contains a cycle "+$r(t))}function $r(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Jp extends UE{static getInstance(){return new Jp}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const qs=1e3,fA=60*5*1e3,f_=30*1e3,pA=1.3,mA=3e4,gA="server_kill",p_=3;class kn extends FE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=kn.nextPersistentConnectionId_++,this.log_=ba("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qs,this.maxReconnectDelay_=fA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Xw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_c.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Se(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new tt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;kn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const r=di(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=f_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=JN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ef("Unrecognized action received from server: "+Se(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mA&&(this.reconnectDelay_=qs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+kn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Oe("getToken() completed but was canceled"):(Oe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new aA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{Ge(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(gA)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ge(d),l())}}}interrupt(e){Oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pc(this.interruptReasons_)&&(this.reconnectDelay_=qs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Hp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Oe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=p_&&(this.reconnectDelay_=f_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Oe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=p_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fE.replace(/\./g,"-")]=1,jp()?e["framework.cordova"]=1:nu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_c.getInstance().currentlyOnline();return pc(this.interruptReasons_)&&e}}kn.nextPersistentConnectionId_=0;kn.nextConnectionId_=0;/**
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
 */class su{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(kr,e),i=new W(kr,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
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
 */let pl;class zE extends su{static get __EMPTY_NODE(){return pl}static set __EMPTY_NODE(e){pl=e}compare(e,n){return Si(e.name,n.name)}isDefinedOn(e){throw bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(Dn,pl)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,pl)}toString(){return".key"}}const hn=new zE;/**
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
 */class ml{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??it.EMPTY_NODE,this.right=s??it.EMPTY_NODE}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return it.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return it.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class vA{copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class it{constructor(e,n=it.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new it(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new it(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ml(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ml(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ml(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ml(this.root_,null,this.comparator_,!0,e)}}it.EMPTY_NODE=new vA;/**
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
 */function _A(t,e){return Si(t.name,e.name)}function Xp(t,e){return Si(t,e)}/**
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
 */let nf;function yA(t){nf=t}const BE=function(t){return typeof t=="number"?"number:"+wE(t):"string:"+t},VE=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else T(t===nf||t.isEmpty(),"priority of unexpected type.");T(t===nf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let m_;class Pe{static set __childrenNodeConstructor(e){m_=e}static get __childrenNodeConstructor(){return m_}constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),VE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Rr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+BE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wE(this.value_):e+=this.value_,this.lazyHash_=vE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(n),s=Pe.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let $E,HE;function wA(t){$E=t}function EA(t){HE=t}class CA extends su{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Si(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(Dn,new Pe("[PRIORITY-POST]",HE))}makePost(e,n){const r=$E(e);return new W(n,new Pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new CA;/**
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
 */const IA=Math.log(2);class SA{constructor(e){const n=s=>parseInt(Math.log(s)/IA,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yc=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new xe(h,d.node,xe.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=i(l,f),w=i(f+1,c);return d=t[f],h=n?n(d):d,new xe(h,d.node,xe.BLACK,_,w)}},s=function(l){let c=null,u=null,d=t.length;const h=function(_,w){const y=d-_,g=d;d-=_;const p=i(y+1,g),v=t[y],C=n?n(v):v;f(new xe(C,v.node,w,null,p))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),y=Math.pow(2,l.count-(_+1));w?h(y,xe.BLACK):(h(y,xe.BLACK),h(y,xe.RED))}return u},o=new SA(t.length),a=s(o);return new it(r||e,a)};/**
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
 */let Td;const Pi={};class En{static get Default(){return T(Pi&&Z,"ChildrenNode.ts has not been loaded"),Td=Td||new En({".priority":Pi},{".priority":Z}),Td}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof it?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=yc(r,e.getCompare()):a=Pi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new En(u,c)}addToIndexes(e,n){const r=mc(this.indexes_,(i,s)=>{const o=di(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===Pi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),yc(a,o.getCompare())}else return Pi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new En(r,this.indexSet_)}removeFromIndexes(e,n){const r=mc(this.indexes_,i=>{if(i===Pi)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new En(r,this.indexSet_)}}/**
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
 */let Qs;class O{static get EMPTY_NODE(){return Qs||(Qs=new O(new it(Xp),null,En.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&VE(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qs}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qs:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Qs:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{T(F(e)!==".priority"||Rr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,a)=>{n[o]=a.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+BE(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Aa?-1:0}withIndex(e){if(e===hn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hn?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class TA extends O{constructor(){super(new it(Xp),O.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Aa=new TA;Object.defineProperties(W,{MIN:{value:new W(kr,O.EMPTY_NODE)},MAX:{value:new W(Dn,Aa)}});zE.__EMPTY_NODE=O.EMPTY_NODE;Pe.__childrenNodeConstructor=O;yA(Aa);EA(Aa);/**
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
 */const kA=!0;function le(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,le(e))}if(!(t instanceof Array)&&kA){const n=[];let r=!1;if(Me(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=le(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return O.EMPTY_NODE;const s=yc(n,_A,o=>o.name,Xp);if(r){const o=yc(n,Z.getCompare());return new O(s,le(e),new En({".priority":o},{".priority":Z}))}else return new O(s,le(e),En.Default)}else{let n=O.EMPTY_NODE;return Me(t,(r,i)=>{if(wt(t,r)&&r.substring(0,1)!=="."){const s=le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(le(e))}}wA(le);/**
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
 */class Zp extends su{constructor(e){super(),this.indexPath_=e,T(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Si(e.name,n.name):s}makePost(e,n){const r=le(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Aa);return new W(Dn,e)}toString(){return ia(this.indexPath_,0).join("/")}}/**
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
 */class RA extends su{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Si(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=le(e);return new W(n,r)}toString(){return".value"}}const em=new RA;/**
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
 */function GE(t){return{type:"value",snapshotNode:t}}function _s(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function oa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function NA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class tm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(sa(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_s(n,r)):o.trackChildChange(oa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(sa(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(oa(i,s,o))}else r.trackChildChange(_s(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class aa{constructor(e){this.indexedFilter_=new tm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=aa.getStartPost_(e),this.endPost_=aa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,a)=>{s.matches(new W(o,a))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class PA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new aa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new W(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(oa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(sa(n,d));const w=a.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(_s(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(sa(c.name,c.node)),s.trackChildChange(_s(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
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
 */class ou{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kr}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new ou;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bA(t){return t.loadsAllData()?new tm(t.getIndex()):t.hasLimit()?new PA(t):new aa(t)}function AA(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function xA(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function rf(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function OA(t,e,n){let r;return t.index_===hn||n?r=rf(t,e,n):r=rf(t,e,Dn),r.startAfterSet_=!0,r}function sf(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function LA(t,e,n){let r;return t.index_===hn||n?r=sf(t,e,n):r=sf(t,e,kr),r.endBeforeSet_=!0,r}function au(t,e){const n=t.copy();return n.index_=e,n}function g_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===em?n="$value":t.index_===hn?n="$key":(T(t.index_ instanceof Zp,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Se(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Se(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Se(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Se(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Se(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function v_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
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
 */class wc extends FE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ba("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=wc.getListenId_(e,r),a={};this.listens_[o]=a;const l=g_(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),di(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=wc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=g_(e._queryParams),r=e._path.toString(),i=new tt;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ta(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class DA{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ec(){return{value:null,children:new Map}}function xs(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Ec());const i=t.children.get(r);e=q(e),xs(i,e,n)}}function of(t,e){if(U(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Z,(r,i)=>{xs(t,new G(r),i)}),of(t,e)}}else if(t.children.size>0){const n=F(e);return e=q(e),t.children.has(n)&&of(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function af(t,e,n){t.value!==null?n(e,t.value):MA(t,(r,i)=>{const s=new G(e.toString()+"/"+r);af(i,s,n)})}function MA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class FA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const __=10*1e3,UA=30*1e3,jA=5*60*1e3;class WA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FA(e);const r=__+(UA-__)*Math.random();Io(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Me(e,(i,s)=>{s>0&&wt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Io(this.reportStats_.bind(this),Math.floor(Math.random()*2*jA))}}/**
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
 */var $t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($t||($t={}));function nm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function im(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Cc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=$t.ACK_USER_WRITE,this.source=nm()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Cc(H(),n,this.revert)}}else return T(F(this.path)===e,"operationForChild called for unrelated child."),new Cc(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class la{constructor(e,n){this.source=e,this.path=n,this.type=$t.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new la(this.source,H()):new la(this.source,q(this.path))}}/**
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
 */class hi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=$t.OVERWRITE}operationForChild(e){return U(this.path)?new hi(this.source,H(),this.snap.getImmediateChild(e)):new hi(this.source,q(this.path),this.snap)}}/**
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
 */class ys{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=$t.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new hi(this.source,H(),n.value):new ys(this.source,H(),n)}else return T(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ys(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Nr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function BA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(NA(o.childName,o.snapshotNode))}),Js(t,i,"child_removed",e,r,n),Js(t,i,"child_added",e,r,n),Js(t,i,"child_moved",s,r,n),Js(t,i,"child_changed",e,r,n),Js(t,i,"value",e,r,n),i}function Js(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>$A(t,a,l)),o.forEach(a=>{const l=VA(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function VA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $A(t,e,n){if(e.childName==null||n.childName==null)throw bs("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function lu(t,e){return{eventCache:t,serverCache:e}}function So(t,e,n,r){return lu(new Nr(e,n,r),t.serverCache)}function YE(t,e,n,r){return lu(t.eventCache,new Nr(e,n,r))}function Ic(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let kd;const HA=()=>(kd||(kd=new it(Rb)),kd);class J{static fromObject(e){let n=new J(null);return Me(e,(r,i)=>{n=n.set(new G(r),i)}),n}constructor(e,n=HA()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:se(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new J(null)}}set(e,n){if(U(e))return new J(n,this.children);{const r=F(e),s=(this.children.get(r)||new J(null)).set(q(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new J(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(q(e),se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),se(n,i),r):new J(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Kt{constructor(e){this.writeTree_=e}static empty(){return new Kt(new J(null))}}function To(t,e,n){if(U(e))return new Kt(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=qe(i,e);return s=s.updateChild(o,n),new Kt(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new Kt(s)}}}function lf(t,e,n){let r=t;return Me(n,(i,s)=>{r=To(r,se(e,i),s)}),r}function y_(t,e){if(U(e))return Kt.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Kt(n)}}function cf(t,e){return Ti(t,e)!=null}function Ti(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qe(n.path,e)):null}function w_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function fr(t,e){if(U(e))return t;{const n=Ti(t,e);return n!=null?new Kt(new J(n)):new Kt(t.writeTree_.subtree(e))}}function uf(t){return t.writeTree_.isEmpty()}function ws(t,e){return KE(H(),t.writeTree_,e)}function KE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=KE(se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(se(t,".priority"),r)),n}}/**
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
 */function cu(t,e){return XE(e,t)}function GA(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=To(t.visibleWrites,e,n)),t.lastWriteId=r}function YA(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=lf(t.visibleWrites,e,n),t.lastWriteId=r}function KA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function qA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&QA(a,r.path)?i=!1:Pt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return JA(t),!0;if(r.snap)t.visibleWrites=y_(t.visibleWrites,r.path);else{const a=r.children;Me(a,l=>{t.visibleWrites=y_(t.visibleWrites,se(r.path,l))})}return!0}else return!1}function QA(t,e){if(t.snap)return Pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pt(se(t.path,n),e))return!0;return!1}function JA(t){t.visibleWrites=qE(t.allWrites,XA,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function XA(t){return t.visible}function qE(t,e,n){let r=Kt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Pt(n,o)?(a=qe(n,o),r=To(r,a,s.snap)):Pt(o,n)&&(a=qe(o,n),r=To(r,H(),s.snap.getChild(a)));else if(s.children){if(Pt(n,o))a=qe(n,o),r=lf(r,a,s.children);else if(Pt(o,n))if(a=qe(o,n),U(a))r=lf(r,H(),s.children);else{const l=di(s.children,F(a));if(l){const c=l.getChild(q(a));r=To(r,H(),c)}}}else throw bs("WriteRecord should have .snap or .children")}}return r}function QE(t,e,n,r,i){if(!r&&!i){const s=Ti(t.visibleWrites,e);if(s!=null)return s;{const o=fr(t.visibleWrites,e);if(uf(o))return n;if(n==null&&!cf(o,H()))return null;{const a=n||O.EMPTY_NODE;return ws(o,a)}}}else{const s=fr(t.visibleWrites,e);if(!i&&uf(s))return n;if(!i&&n==null&&!cf(s,H()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Pt(c.path,e)||Pt(e,c.path))},a=qE(t.allWrites,o,e),l=n||O.EMPTY_NODE;return ws(a,l)}}}function ZA(t,e,n){let r=O.EMPTY_NODE;const i=Ti(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fr(t.visibleWrites,e);return n.forEachChild(Z,(o,a)=>{const l=ws(fr(s,new G(o)),a);r=r.updateImmediateChild(o,l)}),w_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fr(t.visibleWrites,e);return w_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ex(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,n);if(cf(t.visibleWrites,s))return null;{const o=fr(t.visibleWrites,s);return uf(o)?i.getChild(n):ws(o,i.getChild(n))}}function tx(t,e,n,r){const i=se(e,n),s=Ti(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fr(t.visibleWrites,i);return ws(o,r.getNode().getImmediateChild(n))}else return null}function nx(t,e){return Ti(t.visibleWrites,e)}function rx(t,e,n,r,i,s,o){let a;const l=fr(t.visibleWrites,e),c=Ti(l,H());if(c!=null)a=c;else if(n!=null)a=ws(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&u.length<i;)d(f,r)!==0&&u.push(f),f=h.getNext();return u}else return[]}function ix(){return{visibleWrites:Kt.empty(),allWrites:[],lastWriteId:-1}}function Sc(t,e,n,r){return QE(t.writeTree,t.treePath,e,n,r)}function sm(t,e){return ZA(t.writeTree,t.treePath,e)}function E_(t,e,n,r){return ex(t.writeTree,t.treePath,e,n,r)}function Tc(t,e){return nx(t.writeTree,se(t.treePath,e))}function sx(t,e,n,r,i,s){return rx(t.writeTree,t.treePath,e,n,r,i,s)}function om(t,e,n){return tx(t.writeTree,t.treePath,e,n)}function JE(t,e){return XE(se(t.treePath,e),t.writeTree)}function XE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ox{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,oa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,sa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,_s(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,oa(r,e.snapshotNode,i.oldSnap));else throw bs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ax{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ZE=new ax;class am{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return om(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fi(this.viewCache_),s=sx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function lx(t){return{filter:t}}function cx(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ux(t,e,n,r,i){const s=new ox;let o,a;if(n.type===$t.OVERWRITE){const c=n;c.source.fromUser?o=df(t,e,c.path,c.snap,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=kc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===$t.MERGE){const c=n;c.source.fromUser?o=hx(t,e,c.path,c.children,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=hf(t,e,c.path,c.children,r,i,a,s))}else if(n.type===$t.ACK_USER_WRITE){const c=n;c.revert?o=mx(t,e,c.path,r,i,s):o=fx(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===$t.LISTEN_COMPLETE)o=px(t,e,n.path,r,s);else throw bs("Unknown operation type: "+n.type);const l=s.getChanges();return dx(e,o,l),{viewCache:o,changes:l}}function dx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ic(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(GE(Ic(e)))}}function eC(t,e,n,r,i,s){const o=e.eventCache;if(Tc(r,n)!=null)return e;{let a,l;if(U(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=fi(e),u=c instanceof O?c:O.EMPTY_NODE,d=sm(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Sc(r,fi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=F(n);if(c===".priority"){T(Rr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=E_(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=q(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=E_(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=om(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return So(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function kc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(U(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),f,null)}else{const f=F(n);if(!l.isCompleteForPath(n)&&Rr(n)>1)return e;const _=q(n),y=l.getNode().getImmediateChild(f).updateChild(_,r);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,_,ZE,null)}const d=YE(e,c,l.isFullyInitialized()||U(n),u.filtersNodes()),h=new am(i,d,s);return eC(t,d,n,i,h,a)}function df(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new am(i,e,s);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=So(e,c,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=So(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=q(n),f=a.getNode().getImmediateChild(d);let _;if(U(h))_=r;else{const w=u.getCompleteChild(d);w!=null?qp(h)===".priority"&&w.getChild(jE(h)).isEmpty()?_=w:_=w.updateChild(h,r):_=O.EMPTY_NODE}if(f.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=So(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function C_(t,e){return t.eventCache.isCompleteForChild(e)}function hx(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=se(n,l);C_(e,F(u))&&(a=df(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=se(n,l);C_(e,F(u))||(a=df(t,a,u,c,i,s,o))}),a}function I_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function hf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(n)?c=r:c=new J(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),_=I_(t,f,h);l=kc(t,l,new G(d),_,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const _=e.serverCache.getNode().getImmediateChild(d),w=I_(t,_,h);l=kc(t,l,new G(d),w,i,s,o,a)}}),l}function fx(t,e,n,r,i,s,o){if(Tc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return kc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(U(n)){let c=new J(null);return l.getNode().forEachChild(hn,(u,d)=>{c=c.set(new G(u),d)}),hf(t,e,n,c,i,s,a,o)}else return e}else{let c=new J(null);return r.foreach((u,d)=>{const h=se(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),hf(t,e,n,c,i,s,a,o)}}function px(t,e,n,r,i){const s=e.serverCache,o=YE(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return eC(t,o,n,r,ZE,i)}function mx(t,e,n,r,i,s){let o;if(Tc(r,n)!=null)return e;{const a=new am(r,e,i),l=e.eventCache.getNode();let c;if(U(n)||F(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Sc(r,fi(e));else{const d=e.serverCache.getNode();T(d instanceof O,"serverChildren would be complete if leaf node"),u=sm(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=F(n);let d=om(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,q(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,O.EMPTY_NODE,q(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sc(r,fi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Tc(r,H())!=null,So(e,c,o,t.filter.filtersNodes())}}/**
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
 */class gx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new tm(r.getIndex()),s=bA(r);this.processor_=lx(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(O.EMPTY_NODE,a.getNode(),null),u=new Nr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Nr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=lu(d,u),this.eventGenerator_=new zA(this.query_)}get query(){return this.query_}}function vx(t){return t.viewCache_.serverCache.getNode()}function _x(t){return Ic(t.viewCache_)}function yx(t,e){const n=fi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function S_(t){return t.eventRegistrations_.length===0}function wx(t,e){t.eventRegistrations_.push(e)}function T_(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function k_(t,e,n,r){e.type===$t.MERGE&&e.source.queryId!==null&&(T(fi(t.viewCache_),"We should always have a full cache before handling merges"),T(Ic(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ux(t.processor_,i,e,n,r);return cx(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,tC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ex(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push(_s(s,o))}),n.isFullyInitialized()&&r.push(GE(n.getNode())),tC(t,r,n.getNode(),e)}function tC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return BA(t.eventGenerator_,e,n,i)}/**
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
 */let Rc;class nC{constructor(){this.views=new Map}}function Cx(t){T(!Rc,"__referenceConstructor has already been defined"),Rc=t}function Ix(){return T(Rc,"Reference.ts has not been loaded"),Rc}function Sx(t){return t.views.size===0}function lm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),k_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(k_(o,e,n,r));return s}}function rC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Sc(n,i?r:null),l=!1;a?l=!0:r instanceof O?(a=sm(n,r),l=!1):(a=O.EMPTY_NODE,l=!1);const c=lu(new Nr(a,l,!1),new Nr(r,i,!1));return new gx(e,c)}return o}function Tx(t,e,n,r,i,s){const o=rC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wx(o,n),Ex(o,n)}function kx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Pr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(T_(c,n,r)),S_(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(T_(l,n,r)),S_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Pr(t)&&s.push(new(Ix())(e._repo,e._path)),{removed:s,events:o}}function iC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pr(t,e){let n=null;for(const r of t.views.values())n=n||yx(r,e);return n}function sC(t,e){if(e._queryParams.loadsAllData())return uu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function oC(t,e){return sC(t,e)!=null}function Pr(t){return uu(t)!=null}function uu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Nc;function Rx(t){T(!Nc,"__referenceConstructor has already been defined"),Nc=t}function Nx(){return T(Nc,"Reference.ts has not been loaded"),Nc}let Px=1;class R_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=ix(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cm(t,e,n,r,i){return GA(t.pendingWriteTree_,e,n,r,i),i?Os(t,new hi(nm(),e,n)):[]}function bx(t,e,n,r){YA(t.pendingWriteTree_,e,n,r);const i=J.fromObject(n);return Os(t,new ys(nm(),e,i))}function tr(t,e,n=!1){const r=KA(t.pendingWriteTree_,e);if(qA(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(H(),!0):Me(r.children,o=>{s=s.set(new G(o),!0)}),Os(t,new Cc(r.path,s,n))}else return[]}function xa(t,e,n){return Os(t,new hi(rm(),e,n))}function Ax(t,e,n){const r=J.fromObject(n);return Os(t,new ys(rm(),e,r))}function xx(t,e){return Os(t,new la(rm(),e))}function Ox(t,e,n){const r=um(t,n);if(r){const i=dm(r),s=i.path,o=i.queryId,a=qe(s,e),l=new la(im(o),a);return hm(t,s,l)}else return[]}function Pc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||oC(o,e))){const l=kx(o,e,n,r);Sx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,f)=>Pr(f));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=Mx(h);for(let _=0;_<f.length;++_){const w=f[_],y=w.query,g=uC(t,w);t.listenProvider_.startListening(ko(y),ca(t,y),g.hashFn,g.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(ko(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(hu(h));t.listenProvider_.stopListening(ko(h),f)}))}Fx(t,c)}return a}function aC(t,e,n,r){const i=um(t,r);if(i!=null){const s=dm(i),o=s.path,a=s.queryId,l=qe(o,e),c=new hi(im(a),l,n);return hm(t,o,c)}else return[]}function Lx(t,e,n,r){const i=um(t,r);if(i){const s=dm(i),o=s.path,a=s.queryId,l=qe(o,e),c=J.fromObject(n),u=new ys(im(a),l,c);return hm(t,o,u)}else return[]}function ff(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const _=qe(h,i);s=s||pr(f,_),o=o||Pr(f)});let a=t.syncPointTree_.get(i);a?(o=o||Pr(a),s=s||pr(a,H())):(a=new nC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,_)=>{const w=pr(_,H());w&&(s=s.updateImmediateChild(f,w))}));const c=oC(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=hu(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Ux();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=cu(t.pendingWriteTree_,i);let d=Tx(a,e,n,u,s,l);if(!c&&!o&&!r){const h=sC(a,e);d=d.concat(jx(t,e,h))}return d}function du(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qe(o,e),c=pr(a,l);if(c)return c});return QE(i,e,s,n,!0)}function Dx(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=qe(c,n);r=r||pr(u,d)});let i=t.syncPointTree_.get(n);i?r=r||pr(i,H()):(i=new nC,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Nr(r,!0,!1):null,a=cu(t.pendingWriteTree_,e._path),l=rC(i,e,a,s?o.getNode():O.EMPTY_NODE,s);return _x(l)}function Os(t,e){return lC(e,t.syncPointTree_,null,cu(t.pendingWriteTree_,H()))}function lC(t,e,n,r){if(U(t.path))return cC(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=pr(i,H()));let s=[];const o=F(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=JE(r,o);s=s.concat(lC(a,l,c,u))}return i&&(s=s.concat(lm(i,t,r,n))),s}}function cC(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=pr(i,H()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=JE(r,o),u=t.operationForChild(o);u&&(s=s.concat(cC(u,a,l,c)))}),i&&(s=s.concat(lm(i,t,r,n))),s}function uC(t,e){const n=e.query,r=ca(t,n);return{hashFn:()=>(vx(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Ox(t,n._path,r):xx(t,n._path);{const s=bb(i,n);return Pc(t,n,null,s)}}}}function ca(t,e){const n=hu(e);return t.queryToTagMap.get(n)}function hu(t){return t._path.toString()+"$"+t._queryIdentifier}function um(t,e){return t.tagToQueryMap.get(e)}function dm(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function hm(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=cu(t.pendingWriteTree_,e);return lm(r,n,i,null)}function Mx(t){return t.fold((e,n,r)=>{if(n&&Pr(n))return[uu(n)];{let i=[];return n&&(i=iC(n)),Me(r,(s,o)=>{i=i.concat(o)}),i}})}function ko(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Nx())(t._repo,t._path):t}function Fx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=hu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Ux(){return Px++}function jx(t,e,n){const r=e._path,i=ca(t,e),s=uC(t,n),o=t.listenProvider_.startListening(ko(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!Pr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!U(c)&&u&&Pr(u))return[uu(u).query];{let h=[];return u&&(h=h.concat(iC(u).map(f=>f.query))),Me(d,(f,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ko(u),ca(t,u))}}return o}/**
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
 */class fm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fm(n)}node(){return this.node_}}class pm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new pm(this.syncTree_,n)}node(){return du(this.syncTree_,this.path_)}}const Wx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},N_=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return zx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Bx(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},zx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Bx=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},dC=function(t,e,n,r){return gm(e,new pm(n,t),r)},mm=function(t,e,n){return gm(t,new fm(e),n)};function gm(t,e,n){const r=t.getPriority().val(),i=N_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=N_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Pe(a,le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Pe(i))),o.forEachChild(Z,(a,l)=>{const c=gm(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class vm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fu(t,e){let n=e instanceof G?e:new G(e),r=t,i=F(n);for(;i!==null;){const s=di(r.node.children,i)||{children:{},childCount:0};r=new vm(i,r,s),n=q(n),i=F(n)}return r}function ki(t){return t.node.value}function _m(t,e){t.node.value=e,pf(t)}function hC(t){return t.node.childCount>0}function Vx(t){return ki(t)===void 0&&!hC(t)}function pu(t,e){Me(t.node.children,(n,r)=>{e(new vm(n,t,r))})}function fC(t,e,n,r){n&&!r&&e(t),pu(t,i=>{fC(i,e,!0,r)}),n&&r&&e(t)}function $x(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Oa(t){return new G(t.parent===null?t.name:Oa(t.parent)+"/"+t.name)}function pf(t){t.parent!==null&&Hx(t.parent,t.name,t)}function Hx(t,e,n){const r=Vx(n),i=wt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,pf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,pf(t))}/**
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
 */const Gx=/[\[\].#$\/\u0000-\u001F\u007F]/,Yx=/[\[\].#$\u0000-\u001F\u007F]/,Rd=10*1024*1024,mu=function(t){return typeof t=="string"&&t.length!==0&&!Gx.test(t)},pC=function(t){return typeof t=="string"&&t.length!==0&&!Yx.test(t)},Kx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pC(t)},ua=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!iu(t)||t&&typeof t=="object"&&wt(t,".sv")},mn=function(t,e,n,r){r&&e===void 0||La(ct(t,"value"),e,n)},La=function(t,e,n){const r=n instanceof G?new uA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$r(r));if(typeof e=="function")throw new Error(t+"contains a function "+$r(r)+" with contents = "+e.toString());if(iu(e))throw new Error(t+"contains "+e.toString()+" "+$r(r));if(typeof e=="string"&&e.length>Rd/3&&ru(e)>Rd)throw new Error(t+"contains a string greater than "+Rd+" utf8 bytes "+$r(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Me(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!mu(o)))throw new Error(t+" contains an invalid key ("+o+") "+$r(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dA(r,o),La(t,a,r),hA(r)}),i&&s)throw new Error(t+' contains ".value" child '+$r(r)+" in addition to actual children.")}},qx=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ia(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!mu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(cA);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Pt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},mC=function(t,e,n,r){const i=ct(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Me(e,(o,a)=>{const l=new G(o);if(La(i,a,se(n,l)),qp(l)===".priority"&&!ua(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),qx(i,s)},ym=function(t,e,n){if(iu(e))throw new Error(ct(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ua(e))throw new Error(ct(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Da=function(t,e,n,r){if(n!==void 0&&!mu(n))throw new Error(ct(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},da=function(t,e,n,r){if(!pC(n))throw new Error(ct(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),da(t,e,n)},bt=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},gC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Kx(n))throw new Error(ct(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Jx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Qp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function vC(t,e,n){gu(t,n),_C(t,r=>Qp(r,e))}function Et(t,e,n){gu(t,n),_C(t,r=>Pt(r,e)||Pt(e,r))}function _C(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Xx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Xx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ti&&Oe("event: "+n.toString()),As(r)}}}/**
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
 */const yC="repo_interrupt",Zx=25;class eO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ec(),this.transactionQueueTree_=new vm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tO(t,e,n){if(t.stats_=Yp(t.repoInfo_),t.forceRestClient_||Lb())t.server_=new wc(t.repoInfo_,(r,i,s,o)=>{P_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>b_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new kn(t.repoInfo_,e,(r,i,s,o)=>{P_(t,r,i,s,o)},r=>{b_(t,r)},r=>{nO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=jb(t.repoInfo_,()=>new WA(t.stats_,t.server_)),t.infoData_=new DA,t.infoSyncTree_=new R_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=xa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wm(t,"connected",!1),t.serverSyncTree_=new R_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Et(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function wC(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ma(t){return Wx({timestamp:wC(t)})}function P_(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=mc(n,c=>le(c));o=Lx(t.serverSyncTree_,s,l,i)}else{const l=le(n);o=aC(t.serverSyncTree_,s,l,i)}else if(r){const l=mc(n,c=>le(c));o=Ax(t.serverSyncTree_,s,l)}else{const l=le(n);o=xa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Es(t,s)),Et(t.eventQueue_,a,o)}function b_(t,e){wm(t,"connected",e),e===!1&&sO(t)}function nO(t,e){Me(e,(n,r)=>{wm(t,n,r)})}function wm(t,e,n){const r=new G("/.info/"+e),i=le(n);t.infoData_.updateSnapshot(r,i);const s=xa(t.infoSyncTree_,r,i);Et(t.eventQueue_,r,s)}function vu(t){return t.nextWriteId_++}function rO(t,e,n){const r=Dx(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=le(i).withIndex(e._queryParams.getIndex());ff(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=xa(t.serverSyncTree_,e._path,s);else{const a=ca(t.serverSyncTree_,e);o=aC(t.serverSyncTree_,e._path,s,a)}return Et(t.eventQueue_,e._path,o),Pc(t.serverSyncTree_,e,n,null,!0),s},i=>(Ls(t,"get for query "+Se(e)+" failed: "+i),Promise.reject(new Error(i))))}function Em(t,e,n,r,i){Ls(t,"set",{path:e.toString(),value:n,priority:r});const s=Ma(t),o=le(n,r),a=du(t.serverSyncTree_,e),l=mm(o,a,s),c=vu(t),u=cm(t.serverSyncTree_,e,l,c,!0);gu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const _=h==="ok";_||Ge("set at "+e+" failed: "+h);const w=tr(t.serverSyncTree_,c,!_);Et(t.eventQueue_,e,w),br(t,i,h,f)});const d=Im(t,e);Es(t,d),Et(t.eventQueue_,d,[])}function iO(t,e,n,r){Ls(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ma(t),o={};if(Me(n,(a,l)=>{i=!1,o[a]=dC(se(e,a),le(l),t.serverSyncTree_,s)}),i)Oe("update() called with empty data.  Don't do anything."),br(t,r,"ok",void 0);else{const a=vu(t),l=bx(t.serverSyncTree_,e,o,a);gu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Ge("update at "+e+" failed: "+c);const h=tr(t.serverSyncTree_,a,!d),f=h.length>0?Es(t,e):e;Et(t.eventQueue_,f,h),br(t,r,c,u)}),Me(n,c=>{const u=Im(t,se(e,c));Es(t,u)}),Et(t.eventQueue_,e,[])}}function sO(t){Ls(t,"onDisconnectEvents");const e=Ma(t),n=Ec();af(t.onDisconnect_,H(),(i,s)=>{const o=dC(i,s,t.serverSyncTree_,e);xs(n,i,o)});let r=[];af(n,H(),(i,s)=>{r=r.concat(xa(t.serverSyncTree_,i,s));const o=Im(t,i);Es(t,o)}),t.onDisconnect_=Ec(),Et(t.eventQueue_,H(),r)}function oO(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&of(t.onDisconnect_,e),br(t,n,r,i)})}function A_(t,e,n,r){const i=le(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&xs(t.onDisconnect_,e,i),br(t,r,s,o)})}function aO(t,e,n,r,i){const s=le(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&xs(t.onDisconnect_,e,s),br(t,i,o,a)})}function lO(t,e,n,r){if(pc(n)){Oe("onDisconnect().update() called with empty data.  Don't do anything."),br(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Me(n,(o,a)=>{const l=le(a);xs(t.onDisconnect_,se(e,o),l)}),br(t,r,i,s)})}function cO(t,e,n){let r;F(e._path)===".info"?r=ff(t.infoSyncTree_,e,n):r=ff(t.serverSyncTree_,e,n),vC(t.eventQueue_,e._path,r)}function mf(t,e,n){let r;F(e._path)===".info"?r=Pc(t.infoSyncTree_,e,n):r=Pc(t.serverSyncTree_,e,n),vC(t.eventQueue_,e._path,r)}function EC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yC)}function uO(t){t.persistentConnection_&&t.persistentConnection_.resume(yC)}function Ls(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Oe(n,...e)}function br(t,e,n,r){e&&As(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function dO(t,e,n,r,i,s){Ls(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:gE(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Cm(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{La("transaction failed: Data returned ",l,o.path),o.status=0;const c=fu(t.transactionQueueTree_,e),u=ki(c)||[];u.push(o),_m(c,u);let d;typeof l=="object"&&l!==null&&wt(l,".priority")?(d=di(l,".priority"),T(ua(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(du(t.serverSyncTree_,e)||O.EMPTY_NODE).getPriority().val();const h=Ma(t),f=le(l,d),_=mm(f,a,h);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=_,o.currentWriteId=vu(t);const w=cm(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);Et(t.eventQueue_,e,w),_u(t,t.transactionQueueTree_)}}function Cm(t,e,n){return du(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function _u(t,e=t.transactionQueueTree_){if(e||yu(t,e),ki(e)){const n=IC(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hO(t,Oa(e),n)}else hC(e)&&pu(e,n=>{_u(t,n)})}function hO(t,e,n){const r=n.map(c=>c.currentWriteId),i=Cm(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=qe(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ls(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(tr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();yu(t,fu(t.transactionQueueTree_,e)),_u(t,t.transactionQueueTree_),Et(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)As(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Es(t,e)}},o)}function Es(t,e){const n=CC(t,e),r=Oa(n),i=IC(t,n);return fO(t,i,r),r}function fO(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qe(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(tr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Zx)u=!0,d="maxretry",i=i.concat(tr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Cm(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){La("transaction failed: Data returned ",f,l.path);let _=le(f);typeof f=="object"&&f!=null&&wt(f,".priority")||(_=_.updatePriority(h.getPriority()));const y=l.currentWriteId,g=Ma(t),p=mm(_,h,g);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=p,l.currentWriteId=vu(t),o.splice(o.indexOf(y),1),i=i.concat(cm(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(tr(t.serverSyncTree_,y,!0))}else u=!0,d="nodata",i=i.concat(tr(t.serverSyncTree_,l.currentWriteId,!0))}Et(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}yu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)As(r[a]);_u(t,t.transactionQueueTree_)}function CC(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&ki(r)===void 0;)r=fu(r,n),e=q(e),n=F(e);return r}function IC(t,e){const n=[];return SC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function SC(t,e,n){const r=ki(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);pu(e,i=>{SC(t,i,n)})}function yu(t,e){const n=ki(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,_m(e,n.length>0?n:void 0)}pu(e,r=>{yu(t,r)})}function Im(t,e){const n=Oa(CC(t,e)),r=fu(t.transactionQueueTree_,e);return $x(r,i=>{Nd(t,i)}),Nd(t,r),fC(r,i=>{Nd(t,i)}),n}function Nd(t,e){const n=ki(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(tr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?_m(e,void 0):n.length=s+1,Et(t.eventQueue_,Oa(e),i);for(let o=0;o<r.length;o++)As(r[o])}}/**
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
 */function pO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function mO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const gf=function(t,e){const n=gO(t),r=n.namespace;n.domain==="firebase.com"&&pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Tb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},gO=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=pO(t.substring(u,d)));const h=mO(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const x_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",vO=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=x_.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=x_.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class TC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class kC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Sm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let _O=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new tt;return oO(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){bt("OnDisconnect.remove",this._path);const e=new tt;return A_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){bt("OnDisconnect.set",this._path),mn("OnDisconnect.set",e,this._path,!1);const n=new tt;return A_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){bt("OnDisconnect.setWithPriority",this._path),mn("OnDisconnect.setWithPriority",e,this._path,!1),ym("OnDisconnect.setWithPriority",n);const r=new tt;return aO(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){bt("OnDisconnect.update",this._path),mC("OnDisconnect.update",e,this._path);const n=new tt;return lO(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
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
 */class ut{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:qp(this._path)}get ref(){return new Ft(this._repo,this._path)}get _queryIdentifier(){const e=v_(this._queryParams),n=Hp(e);return n==="{}"?"default":n}get _queryObject(){return v_(this._queryParams)}isEqual(e){if(e=D(e),!(e instanceof ut))return!1;const n=this._repo===e._repo,r=Qp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+lA(this._path)}}function wu(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Fr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===hn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==kr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Dn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Z){if(e!=null&&!ua(e)||n!=null&&!ua(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof Zp||t.getIndex()===em,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Eu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ft extends ut{constructor(e,n){super(e,n,new ou,!1)}get parent(){const e=jE(this._path);return e===null?null:new Ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Cu=class vf{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=pi(this.ref,e);return new vf(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new vf(i,pi(this.ref,r),Z)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function RC(t,e){return t=D(t),t._checkNotDeleted("ref"),e!==void 0?pi(t._root,e):t._root}function O_(t,e){t=D(t),t._checkNotDeleted("refFromURL");const n=gf(e,t._repo.repoInfo_.nodeAdmin);gC("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&pn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),RC(t,n.path.toString())}function pi(t,e){return t=D(t),F(t._path)===null?Qx("child","path",e):da("child","path",e),new Ft(t._repo,se(t._path,e))}function yO(t,e){t=D(t),bt("push",t._path),mn("push",e,t._path,!0);const n=wC(t._repo),r=vO(n),i=pi(t,r),s=pi(t,r);let o;return e!=null?o=Tm(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function wO(t){return bt("remove",t._path),Tm(t,null)}function Tm(t,e){t=D(t),bt("set",t._path),mn("set",e,t._path,!1);const n=new tt;return Em(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function EO(t,e){t=D(t),bt("setPriority",t._path),ym("setPriority",e);const n=new tt;return Em(t._repo,se(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function CO(t,e,n){if(bt("setWithPriority",t._path),mn("setWithPriority",e,t._path,!1),ym("setWithPriority",n),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new tt;return Em(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function IO(t,e){mC("update",e,t._path);const n=new tt;return iO(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function SO(t){t=D(t);const e=new Sm(()=>{}),n=new Fa(e);return rO(t._repo,t,n).then(r=>new Cu(r,new Ft(t._repo,t._path),t._queryParams.getIndex()))}class Fa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new TC("value",this,new Cu(e.snapshotNode,new Ft(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new kC(this,e,n):null}matches(e){return e instanceof Fa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Iu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new kC(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const r=pi(new Ft(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new TC(e.type,this,new Cu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Iu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ua(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{mf(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Sm(n,s||void 0),a=e==="value"?new Fa(o):new Iu(e,o);return cO(t._repo,t,a),()=>mf(t._repo,t,a)}function _f(t,e,n,r){return Ua(t,"value",e,n,r)}function L_(t,e,n,r){return Ua(t,"child_added",e,n,r)}function D_(t,e,n,r){return Ua(t,"child_changed",e,n,r)}function M_(t,e,n,r){return Ua(t,"child_moved",e,n,r)}function F_(t,e,n,r){return Ua(t,"child_removed",e,n,r)}function U_(t,e,n){let r=null;const i=n?new Sm(n):null;e==="value"?r=new Fa(i):e&&(r=new Iu(e,i)),mf(t._repo,t,r)}class Jt{}class NC extends Jt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){mn("endAt",this._value,e._path,!0);const n=sf(e._queryParams,this._value,this._key);if(Eu(n),Fr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ut(e._repo,e._path,n,e._orderByCalled)}}function TO(t,e){return Da("endAt","key",e),new NC(t,e)}class kO extends Jt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){mn("endBefore",this._value,e._path,!1);const n=LA(e._queryParams,this._value,this._key);if(Eu(n),Fr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ut(e._repo,e._path,n,e._orderByCalled)}}function RO(t,e){return Da("endBefore","key",e),new kO(t,e)}class PC extends Jt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){mn("startAt",this._value,e._path,!0);const n=rf(e._queryParams,this._value,this._key);if(Eu(n),Fr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ut(e._repo,e._path,n,e._orderByCalled)}}function NO(t=null,e){return Da("startAt","key",e),new PC(t,e)}class PO extends Jt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){mn("startAfter",this._value,e._path,!1);const n=OA(e._queryParams,this._value,this._key);if(Eu(n),Fr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ut(e._repo,e._path,n,e._orderByCalled)}}function bO(t,e){return Da("startAfter","key",e),new PO(t,e)}class AO extends Jt{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ut(e._repo,e._path,AA(e._queryParams,this._limit),e._orderByCalled)}}function xO(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new AO(t)}class OO extends Jt{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ut(e._repo,e._path,xA(e._queryParams,this._limit),e._orderByCalled)}}function LO(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new OO(t)}class DO extends Jt{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){wu(e,"orderByChild");const n=new G(this._path);if(U(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Zp(n),i=au(e._queryParams,r);return Fr(i),new ut(e._repo,e._path,i,!0)}}function MO(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return da("orderByChild","path",t),new DO(t)}class FO extends Jt{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){wu(e,"orderByKey");const n=au(e._queryParams,hn);return Fr(n),new ut(e._repo,e._path,n,!0)}}function UO(){return new FO}class jO extends Jt{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){wu(e,"orderByPriority");const n=au(e._queryParams,Z);return Fr(n),new ut(e._repo,e._path,n,!0)}}function WO(){return new jO}class zO extends Jt{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){wu(e,"orderByValue");const n=au(e._queryParams,em);return Fr(n),new ut(e._repo,e._path,n,!0)}}function BO(){return new zO}class VO extends Jt{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(mn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new NC(this._value,this._key)._apply(new PC(this._value,this._key)._apply(e))}}function $O(t,e){return Da("equalTo","key",e),new VO(t,e)}function Wt(t,...e){let n=D(t);for(const r of e)n=r._apply(n);return n}Cx(Ft);Rx(Ft);/**
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
 */const HO="FIREBASE_DATABASE_EMULATOR_HOST",yf={};let GO=!1;function YO(t,e,n,r){t.repoInfo_=new bE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function bC(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Oe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gf(s,i),a=o.repoInfo,l,c;typeof process<"u"&&Zv&&(c=Zv[HO]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=gf(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ts(ts.OWNER):new Mb(t.name,t.options,e);gC("Invalid Firebase Database URL",o),U(o.path)||pn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=qO(a,t,u,new Db(t.name,n));return new QO(d,t)}function KO(t,e){const n=yf[e];(!n||n[t.key]!==t)&&pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),EC(t),delete n[t.key]}function qO(t,e,n,r){let i=yf[e.name];i||(i={},yf[e.name]=i);let s=i[t.toURLString()];return s&&pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new eO(t,GO,n,r),i[t.toURLString()]=s,s}let QO=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ft(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pn("Cannot call "+e+" on a deleted database.")}};function AC(){vs.IS_TRANSPORT_INITIALIZED&&Ge("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function JO(){AC(),er.forceDisallow()}function XO(){AC(),Rt.forceDisallow(),er.forceAllow()}function ZO(t,e,n,r={}){t=D(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&pn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ts(ts.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:$N(r.mockUserToken,t.app.options.projectId);s=new ts(o)}YO(i,e,n,s)}function eL(t){t=D(t),t._checkNotDeleted("goOffline"),EC(t._repo)}function tL(t){t=D(t),t._checkNotDeleted("goOnline"),uO(t._repo)}function nL(t,e){_E(t,e)}/**
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
 */function rL(t){pE(Dr),Tr(new Dt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return bC(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Yt(e_,t_,t),Yt(e_,t_,"esm2017")}/**
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
 */const iL={".sv":"timestamp"};function sL(){return iL}function oL(t){return{".sv":{increment:t}}}/**
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
 */let aL=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function lL(t,e,n){var r;if(t=D(t),bt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new tt,o=(l,c,u)=>{let d=null;l?s.reject(l):(d=new Cu(u,new Ft(t._repo,t._path),Z),s.resolve(new aL(c,d)))},a=_f(t,()=>{});return dO(t._repo,t._path,e,o,a,i),s.promise}kn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};kn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rL();const cL="@firebase/database-compat",uL="2.0.1";/**
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
 */const dL=new Na("@firebase/database-compat"),xC=function(t){const e="FIREBASE WARNING: "+t;dL.warn(e)};/**
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
 */const hL=function(t,e,n,r){if(n!==void 0&&typeof n!="boolean")throw new Error(ct(t,e)+"must be a boolean.")},fL=function(t,e,n){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(ct(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class pL{constructor(e){this._delegate=e}cancel(e){L("OnDisconnect.cancel",0,1,arguments.length),Ae("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){L("OnDisconnect.remove",0,1,arguments.length),Ae("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){L("OnDisconnect.set",1,2,arguments.length),Ae("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){L("OnDisconnect.setWithPriority",2,3,arguments.length),Ae("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(L("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,xC("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ae("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
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
 */class mL{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return L("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class mr{constructor(e,n){this._database=e,this._delegate=n}val(){return L("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return L("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return L("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return L("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return L("DataSnapshot.child",0,1,arguments.length),e=String(e),da("DataSnapshot.child","path",e),new mr(this._database,this._delegate.child(e))}hasChild(e){return L("DataSnapshot.hasChild",1,1,arguments.length),da("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return L("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return L("DataSnapshot.forEach",1,1,arguments.length),Ae("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new mr(this._database,n)))}hasChildren(){return L("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return L("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return L("DataSnapshot.ref",0,0,arguments.length),new ft(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Ue{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;L("Query.on",2,4,arguments.length),Ae("Query.on","callback",n,!1);const o=Ue.getCancelAndContextArgs_("Query.on",r,i),a=(c,u)=>{n.call(o.context,new mr(this.database,c),u)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return _f(this._delegate,a,l),n;case"child_added":return L_(this._delegate,a,l),n;case"child_removed":return F_(this._delegate,a,l),n;case"child_changed":return D_(this._delegate,a,l),n;case"child_moved":return M_(this._delegate,a,l),n;default:throw new Error(ct("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(L("Query.off",0,3,arguments.length),fL("Query.off",e),Ae("Query.off","callback",n,!0),$v("Query.off","context",r),n){const i=()=>{};i.userCallback=n,i.context=r,U_(this._delegate,e,i)}else U_(this._delegate,e)}get(){return SO(this._delegate).then(e=>new mr(this.database,e))}once(e,n,r,i){L("Query.once",1,4,arguments.length),Ae("Query.once","callback",n,!0);const s=Ue.getCancelAndContextArgs_("Query.once",r,i),o=new tt,a=(c,u)=>{const d=new mr(this.database,c);n&&n.call(s.context,d,u),o.resolve(d)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":_f(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":L_(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":F_(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":D_(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":M_(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(ct("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return L("Query.limitToFirst",1,1,arguments.length),new Ue(this.database,Wt(this._delegate,xO(e)))}limitToLast(e){return L("Query.limitToLast",1,1,arguments.length),new Ue(this.database,Wt(this._delegate,LO(e)))}orderByChild(e){return L("Query.orderByChild",1,1,arguments.length),new Ue(this.database,Wt(this._delegate,MO(e)))}orderByKey(){return L("Query.orderByKey",0,0,arguments.length),new Ue(this.database,Wt(this._delegate,UO()))}orderByPriority(){return L("Query.orderByPriority",0,0,arguments.length),new Ue(this.database,Wt(this._delegate,WO()))}orderByValue(){return L("Query.orderByValue",0,0,arguments.length),new Ue(this.database,Wt(this._delegate,BO()))}startAt(e=null,n){return L("Query.startAt",0,2,arguments.length),new Ue(this.database,Wt(this._delegate,NO(e,n)))}startAfter(e=null,n){return L("Query.startAfter",0,2,arguments.length),new Ue(this.database,Wt(this._delegate,bO(e,n)))}endAt(e=null,n){return L("Query.endAt",0,2,arguments.length),new Ue(this.database,Wt(this._delegate,TO(e,n)))}endBefore(e=null,n){return L("Query.endBefore",0,2,arguments.length),new Ue(this.database,Wt(this._delegate,RO(e,n)))}equalTo(e,n){return L("Query.equalTo",1,2,arguments.length),new Ue(this.database,Wt(this._delegate,$O(e,n)))}toString(){return L("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return L("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(L("Query.isEqual",1,1,arguments.length),!(e instanceof Ue)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Ae(e,"cancel",i.cancel,!0),i.context=r,$v(e,"context",i.context);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(ct(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new ft(this.database,new Ft(this._delegate._repo,this._delegate._path))}}class ft extends Ue{constructor(e,n){super(e,new ut(n._repo,n._path,new ou,!1)),this.database=e,this._delegate=n}getKey(){return L("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return L("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new ft(this.database,pi(this._delegate,e))}getParent(){L("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new ft(this.database,e):null}getRoot(){return L("Reference.root",0,0,arguments.length),new ft(this.database,this._delegate.root)}set(e,n){L("Reference.set",1,2,arguments.length),Ae("Reference.set","onComplete",n,!0);const r=Tm(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(L("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,xC("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}bt("Reference.update",this._delegate._path),Ae("Reference.update","onComplete",n,!0);const r=IO(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){L("Reference.setWithPriority",2,3,arguments.length),Ae("Reference.setWithPriority","onComplete",r,!0);const i=CO(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){L("Reference.remove",0,1,arguments.length),Ae("Reference.remove","onComplete",e,!0);const n=wO(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){L("Reference.transaction",1,3,arguments.length),Ae("Reference.transaction","transactionUpdate",e,!1),Ae("Reference.transaction","onComplete",n,!0),hL("Reference.transaction","applyLocally",r);const i=lL(this._delegate,e,{applyLocally:r}).then(s=>new mL(s.committed,new mr(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){L("Reference.setPriority",1,2,arguments.length),Ae("Reference.setPriority","onComplete",n,!0);const r=EO(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){L("Reference.push",0,2,arguments.length),Ae("Reference.push","onComplete",n,!0);const r=yO(this._delegate,e),i=r.then(o=>new ft(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new ft(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return bt("Reference.onDisconnect",this._delegate._path),new pL(new _O(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class ha{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:JO,forceLongPolling:XO}}useEmulator(e,n,r={}){ZO(this._delegate,e,n,r)}ref(e){if(L("database.ref",0,1,arguments.length),e instanceof ft){const n=O_(this._delegate,e.toString());return new ft(this,n)}else{const n=RC(this._delegate,e);return new ft(this,n)}}refFromURL(e){L("database.refFromURL",1,1,arguments.length);const r=O_(this._delegate,e);return new ft(this,r)}goOffline(){return L("database.goOffline",0,0,arguments.length),eL(this._delegate)}goOnline(){return L("database.goOnline",0,0,arguments.length),tL(this._delegate)}}ha.ServerValue={TIMESTAMP:sL(),increment:t=>oL(t)};function gL({app:t,url:e,version:n,customAuthImpl:r,customAppCheckImpl:i,namespace:s,nodeAdmin:o=!1}){pE(n);const a=new Wp("database-standalone"),l=new qh("auth-internal",a);l.setComponent(new Dt("auth-internal",()=>r,"PRIVATE"));let c;return i&&(c=new qh("app-check-internal",a),c.setComponent(new Dt("app-check-internal",()=>i,"PRIVATE"))),{instance:new ha(bC(t,l,c,e,o),t),namespace:s}}var vL=Object.freeze({__proto__:null,initStandalone:gL});/**
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
 */const _L=ha.ServerValue;function yL(t){t.INTERNAL.registerComponent(new Dt("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new ha(i,r)},"PUBLIC").setServiceProps({Reference:ft,Query:Ue,Database:ha,DataSnapshot:mr,enableLogging:nL,INTERNAL:vL,ServerValue:_L}).setMultipleInstances(!0)),t.registerVersion(cL,uL)}yL(Mr);function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Xs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},bi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function wL(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function OC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EL=wL,CL=OC,LC=new Ci("auth","Firebase",OC());/**
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
 */const bc=new Na("@firebase/auth");function IL(t,...e){bc.logLevel<=Y.WARN&&bc.warn(`Auth (${Dr}): ${t}`,...e)}function Al(t,...e){bc.logLevel<=Y.ERROR&&bc.error(`Auth (${Dr}): ${t}`,...e)}/**
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
 */function Be(t,...e){throw Nm(t,...e)}function ke(t,...e){return Nm(t,...e)}function Rm(t,e,n){const r=Object.assign(Object.assign({},CL()),{[e]:n});return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function De(t){return Rm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ds(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Be(t,"argument-error"),Rm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return LC.create(t,...e)}function I(t,e,...n){if(!t)throw Nm(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Al(e),new Error(e)}function Qt(t,e){t||cn(e)}/**
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
 */function fa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pm(){return j_()==="http:"||j_()==="https:"}function j_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function SL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pm()||Qw()||"connection"in navigator)?navigator.onLine:!0}function TL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=jp()||nu()}get(){return SL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bm(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class DC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RL=new ja(3e4,6e4);function me(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ge(t,e,n,r,i={}){return MC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return GN()||(c.referrerPolicy="no-referrer"),DC.fetch()(FC(t,t.config.apiHost,n,a),c)})}async function MC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kL),e);try{const i=new PL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw co(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw co(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw co(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rm(t,u,c);Be(t,u)}}catch(i){if(i instanceof lt)throw i;Be(t,"network-request-failed",{message:String(i)})}}async function Wn(t,e,n,r,i={}){const s=await ge(t,e,n,r,i);return"mfaPendingCredential"in s&&Be(t,"multi-factor-auth-required",{_serverResponse:s}),s}function FC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bm(t.config,i):`${t.config.apiScheme}://${i}`}function NL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PL{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ke(this.auth,"network-request-failed")),RL.get())})}}function co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ke(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function W_(t){return t!==void 0&&t.getResponse!==void 0}function z_(t){return t!==void 0&&t.enterprise!==void 0}class UC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function bL(t){return(await ge(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function jC(t,e){return ge(t,"GET","/v2/recaptchaConfig",me(t,e))}/**
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
 */async function AL(t,e){return ge(t,"POST","/v1/accounts:delete",e)}async function xL(t,e){return ge(t,"POST","/v1/accounts:update",e)}async function WC(t,e){return ge(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OL(t,e=!1){const n=D(t),r=await n.getIdToken(e),i=Su(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ro(Pd(i.auth_time)),issuedAtTime:Ro(Pd(i.iat)),expirationTime:Ro(Pd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pd(t){return Number(t)*1e3}function Su(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Al("JWT malformed, contained fewer than 3 sections"),null;try{const i=hc(n);return i?JSON.parse(i):(Al("Failed to decode base64 JWT payload"),null)}catch(i){return Al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function B_(t){const e=Su(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof lt&&LL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mn(t,WC(n,{idToken:r}));I(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?zC(s.providerUserInfo):[],a=FL(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function ML(t){const e=D(t);await pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zC(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function UL(t,e){const n=await MC(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=FC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",DC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jL(t,e){return ge(t,"POST","/v2/accounts:revokeToken",me(t,e))}/**
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
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):B_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){I(e.length!==0,"internal-error");const n=B_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await UL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ns;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function $n(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mn(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OL(this,e)}reload(){return ML(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(De(this.auth));const e=await this.getIdToken();return await Mn(this,AL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:C,isAnonymous:k,providerData:N,stsTokenManager:P}=n;I(v&&P,e,"internal-error");const x=ns.fromJSON(this.name,P);I(typeof v=="string",e,"internal-error"),$n(d,e.name),$n(h,e.name),I(typeof C=="boolean",e,"internal-error"),I(typeof k=="boolean",e,"internal-error"),$n(f,e.name),$n(_,e.name),$n(w,e.name),$n(y,e.name),$n(g,e.name),$n(p,e.name);const ee=new Cn({uid:v,auth:e,email:h,emailVerified:C,displayName:d,isAnonymous:k,photoURL:_,phoneNumber:f,tenantId:w,stsTokenManager:x,createdAt:g,lastLoginAt:p});return N&&Array.isArray(N)&&(ee.providerData=N.map(z=>Object.assign({},z))),y&&(ee._redirectEventId=y),ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new ns;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];I(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?zC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ns;a.updateFromIdToken(r);const l=new Cn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const V_=new Map;function mt(t){Qt(t instanceof Function,"Expected a class definition");let e=V_.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,V_.set(t,e),e)}/**
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
 */class BC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}BC.type="NONE";const Cs=BC;/**
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
 */function ni(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ni(this.userKey,i.apiKey,s),this.fullPersistenceKey=ni("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rs(mt(Cs),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||mt(Cs);const o=ni(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Cn._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new rs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new rs(s,e,r))}}/**
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
 */function $_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(GC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YC(e))return"Blackberry";if(KC(e))return"Webos";if($C(e))return"Safari";if((e.includes("chrome/")||HC(e))&&!e.includes("edge/"))return"Chrome";if(Wa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VC(t=Re()){return/firefox\//i.test(t)}function $C(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HC(t=Re()){return/crios\//i.test(t)}function GC(t=Re()){return/iemobile/i.test(t)}function Wa(t=Re()){return/android/i.test(t)}function YC(t=Re()){return/blackberry/i.test(t)}function KC(t=Re()){return/webos/i.test(t)}function za(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WL(t=Re()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function zL(t=Re()){var e;return za(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BL(){return Jw()&&document.documentMode===10}function qC(t=Re()){return za(t)||Wa(t)||KC(t)||YC(t)||/windows phone/i.test(t)||GC(t)}/**
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
 */function QC(t,e=[]){let n;switch(t){case"Browser":n=$_(Re());break;case"Worker":n=`${$_(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class VL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $L(t,e={}){return ge(t,"GET","/v2/passwordPolicy",me(t,e))}/**
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
 */const HL=6;class GL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class YL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new H_(this),this.idTokenSubscription=new H_(this),this.beforeStateQueue=new VL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=LC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await WC(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pe(this.app))return Promise.reject(De(this));const n=e?D(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(De(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pe(this.app)?Promise.reject(De(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $L(this),n=new GL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mt(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=QC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function he(t){return D(t)}class H_{constructor(e){this.auth=e,this.observer=null,this.addObserver=eE(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ba={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KL(t){Ba=t}function Am(t){return Ba.loadJS(t)}function qL(){return Ba.recaptchaV2Script}function QL(){return Ba.recaptchaEnterpriseScript}function JL(){return Ba.gapiScript}function JC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const XL=500,ZL=6e4,gl=1e12;class e3{constructor(e){this.auth=e,this.counter=gl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new r3(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||gl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||gl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||gl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class t3{constructor(){this.enterprise=new n3}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class n3{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class r3{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=i3(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},ZL)},XL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function i3(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const s3="recaptcha-enterprise",No="NO_RECAPTCHA";class XC{constructor(e){this.type=s3,this.auth=he(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new UC(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;z_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(No)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new t3().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&z_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=QL();l.length!==0&&(l+=a),Am(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Zs(t,e,n,r=!1,i=!1){const s=new XC(t);let o;if(i)o=No;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function gr(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zs(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Zs(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Zs(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await Zs(t,e,n,!1,!0);return r(t,u)}return Promise.reject(l)})}else{const a=await Zs(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function o3(t){const e=he(t),n=await jC(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new UC(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new XC(e).verify()}function a3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function l3(t,e,n){const r=he(t);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ZC(e),{host:o,port:a}=c3(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||u3()}function ZC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function c3(t){const e=ZC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:G_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:G_(o)}}}function G_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function u3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ms{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}/**
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
 */async function eI(t,e){return ge(t,"POST","/v1/accounts:resetPassword",me(t,e))}async function d3(t,e){return ge(t,"POST","/v1/accounts:update",e)}async function h3(t,e){return ge(t,"POST","/v1/accounts:signUp",e)}async function f3(t,e){return ge(t,"POST","/v1/accounts:update",me(t,e))}/**
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
 */async function p3(t,e){return Wn(t,"POST","/v1/accounts:signInWithPassword",me(t,e))}async function Tu(t,e){return ge(t,"POST","/v1/accounts:sendOobCode",me(t,e))}async function m3(t,e){return Tu(t,e)}async function g3(t,e){return Tu(t,e)}async function v3(t,e){return Tu(t,e)}async function _3(t,e){return Tu(t,e)}/**
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
 */async function y3(t,e){return Wn(t,"POST","/v1/accounts:signInWithEmailLink",me(t,e))}async function w3(t,e){return Wn(t,"POST","/v1/accounts:signInWithEmailLink",me(t,e))}/**
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
 */class ma extends Ms{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gr(e,n,"signInWithPassword",p3,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return y3(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gr(e,r,"signUpPassword",h3,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return w3(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rn(t,e){return Wn(t,"POST","/v1/accounts:signInWithIdp",me(t,e))}/**
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
 */const E3="http://localhost";class gn extends Ms{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rn(e,n)}buildRequest(){const e={requestUri:E3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
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
 */async function Y_(t,e){return ge(t,"POST","/v1/accounts:sendVerificationCode",me(t,e))}async function C3(t,e){return Wn(t,"POST","/v1/accounts:signInWithPhoneNumber",me(t,e))}async function I3(t,e){const n=await Wn(t,"POST","/v1/accounts:signInWithPhoneNumber",me(t,e));if(n.temporaryProof)throw co(t,"account-exists-with-different-credential",n);return n}const S3={USER_NOT_FOUND:"user-not-found"};async function T3(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Wn(t,"POST","/v1/accounts:signInWithPhoneNumber",me(t,n),S3)}/**
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
 */class ri extends Ms{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ri({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ri({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return C3(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return I3(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return T3(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ri({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function k3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function R3(t){const e=Gi(lo(t)).link,n=e?Gi(lo(e)).deep_link_id:null,r=Gi(lo(t)).deep_link_id;return(r?Gi(lo(r)).link:null)||r||n||e||t}class ku{constructor(e){var n,r,i,s,o,a;const l=Gi(lo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=k3((i=l.mode)!==null&&i!==void 0?i:null);I(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=R3(e);try{return new ku(n)}catch{return null}}}/**
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
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(e,n){return ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ku.parseLink(n);return I(r,"argument-error"),ma._fromEmailAndCode(e,r.code,r.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fs extends zn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class is extends Fs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return I("providerId"in n&&"signInMethod"in n,"argument-error"),gn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),gn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return is.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return is.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new is(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class nn extends Fs{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
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
 */class rn extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
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
 */class sn extends Fs{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */const N3="http://localhost";class Is extends Ms{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Is(r,s)}static _create(e,n){return new Is(e,n)}buildRequest(){return{requestUri:N3,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const P3="saml.";class Ac extends zn{constructor(e){I(e.startsWith(P3),"argument-error"),super(e)}static credentialFromResult(e){return Ac.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ac.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Is.fromJSON(e);return I(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Is._create(r,n)}catch{return null}}}/**
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
 */class on extends Fs{constructor(){super("twitter.com")}static credential(e,n){return gn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
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
 */async function tI(t,e){return Wn(t,"POST","/v1/accounts:signUp",me(t,e))}/**
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
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=K_(r);return new Mt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=K_(r);return new Mt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function K_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function b3(t){var e;if(pe(t.app))return Promise.reject(De(t));const n=he(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Mt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await tI(n,{returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class xc extends lt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xc(e,n,r,i)}}function nI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function rI(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function A3(t,e){const n=D(t);await Ru(!0,n,e);const{providerUserInfo:r}=await xL(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=rI(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function xm(t,e,n=!1){const r=await Mn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",r)}async function Ru(t,e,n){await pa(e);const r=rI(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";I(r.has(n)===t,e.auth,i)}/**
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
 */async function iI(t,e,n=!1){const{auth:r}=t;if(pe(r.app))return Promise.reject(De(r));const i="reauthenticate";try{const s=await Mn(t,nI(r,i,e,t),n);I(s.idToken,r,"internal-error");const o=Su(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(t.uid===a,r,"user-mismatch"),Mt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),s}}/**
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
 */async function sI(t,e,n=!1){if(pe(t.app))return Promise.reject(De(t));const r="signIn",i=await nI(t,r,e),s=await Mt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Nu(t,e){return sI(he(t),e)}async function oI(t,e){const n=D(t);return await Ru(!1,n,e.providerId),xm(n,e)}async function aI(t,e){return iI(D(t),e)}/**
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
 */async function x3(t,e){return Wn(t,"POST","/v1/accounts:signInWithCustomToken",me(t,e))}/**
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
 */async function O3(t,e){if(pe(t.app))return Promise.reject(De(t));const n=he(t),r=await x3(n,{token:e,returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Va{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Om._fromServerResponse(e,n):"totpInfo"in n?Lm._fromServerResponse(e,n):Be(e,"internal-error")}}class Om extends Va{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Om(n)}}class Lm extends Va{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Lm(n)}}/**
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
 */function Pu(t,e,n){var r;I(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Dm(t){const e=he(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function L3(t,e,n){const r=he(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Pu(r,i,n),await gr(r,i,"getOobCode",g3,"EMAIL_PASSWORD_PROVIDER")}async function D3(t,e,n){await eI(D(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dm(t),r})}async function M3(t,e){await f3(D(t),{oobCode:e})}async function lI(t,e){const n=D(t),r=await eI(n,{oobCode:e}),i=r.requestType;switch(I(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Va._fromServerResponse(he(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function F3(t,e){const{data:n}=await lI(D(t),e);return n.email}async function U3(t,e,n){if(pe(t.app))return Promise.reject(De(t));const r=he(t),o=await gr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tI,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Dm(t),l}),a=await Mt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function j3(t,e,n){return pe(t.app)?Promise.reject(De(t)):Nu(D(t),Ur.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dm(t),r})}/**
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
 */async function W3(t,e,n){const r=he(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){I(a.handleCodeInApp,r,"argument-error"),a&&Pu(r,o,a)}s(i,n),await gr(r,i,"getOobCode",v3,"EMAIL_PASSWORD_PROVIDER")}function z3(t,e){const n=ku.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function B3(t,e,n){if(pe(t.app))return Promise.reject(De(t));const r=D(t),i=Ur.credentialWithLink(e,n||fa());return I(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Nu(r,i)}/**
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
 */async function V3(t,e){return ge(t,"POST","/v1/accounts:createAuthUri",me(t,e))}/**
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
 */async function $3(t,e){const n=Pm()?fa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await V3(D(t),r);return i||[]}async function H3(t,e){const n=D(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Pu(n.auth,i,e);const{email:s}=await m3(n.auth,i);s!==t.email&&await t.reload()}async function G3(t,e,n){const r=D(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Pu(r.auth,s,n);const{email:o}=await _3(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function Y3(t,e){return ge(t,"POST","/v1/accounts:update",e)}/**
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
 */async function K3(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=D(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Mn(r,Y3(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function q3(t,e){const n=D(t);return pe(n.auth.app)?Promise.reject(De(n.auth)):cI(n,e,null)}function Q3(t,e){return cI(D(t),null,e)}async function cI(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Mn(t,d3(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function J3(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Su(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ss(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new X3(s,i);case"github.com":return new Z3(s,i);case"google.com":return new e4(s,i);case"twitter.com":return new t4(s,i,t.screenName||null);case"custom":case"anonymous":return new ss(s,null);default:return new ss(s,r,i)}}class ss{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class uI extends ss{constructor(e,n,r,i){super(e,n,r),this.username=i}}class X3 extends ss{constructor(e,n){super(e,"facebook.com",n)}}class Z3 extends uI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class e4 extends ss{constructor(e,n){super(e,"google.com",n)}}class t4 extends uI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function n4(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:J3(n)}/**
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
 */class Qr{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Qr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Qr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Qr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Qr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Mm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=he(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Va._fromServerResponse(r,a));I(i.mfaPendingCredential,r,"internal-error");const o=Qr._fromMfaPendingCredential(i.mfaPendingCredential);return new Mm(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const u=await Mt._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return I(n.user,r,"internal-error"),Mt._forOperation(n.user,n.operationType,c);default:Be(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function r4(t,e){var n;const r=D(t),i=e;return I(e.customData.operationType,r,"argument-error"),I((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Mm._fromError(r,i)}/**
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
 */function q_(t,e){return ge(t,"POST","/v2/accounts/mfaEnrollment:start",me(t,e))}function i4(t,e){return ge(t,"POST","/v2/accounts/mfaEnrollment:finalize",me(t,e))}function s4(t,e){return ge(t,"POST","/v2/accounts/mfaEnrollment:withdraw",me(t,e))}class Fm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Va._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Fm(e)}async getSession(){return Qr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Mn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Mn(this.user,s4(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const bd=new WeakMap;function o4(t){const e=D(t);return bd.has(e)||bd.set(e,Fm._fromUser(e)),bd.get(e)}const Oc="__sak";/**
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
 */class dI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oc,"1"),this.storage.removeItem(Oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const a4=1e3,l4=10;class hI extends dI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);BL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,l4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},a4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hI.type="LOCAL";const Um=hI;/**
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
 */class fI extends dI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fI.type="SESSION";const mi=fI;/**
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
 */function c4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await c4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bu.receivers=[];/**
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
 */function $a(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class u4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=$a("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ye(){return window}function d4(t){ye().location.href=t}/**
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
 */function jm(){return typeof ye().WorkerGlobalScope<"u"&&typeof ye().importScripts=="function"}async function h4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function p4(){return jm()?self:null}/**
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
 */const pI="firebaseLocalStorageDb",m4=1,Lc="firebaseLocalStorage",mI="fbase_key";class Ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Au(t,e){return t.transaction([Lc],e?"readwrite":"readonly").objectStore(Lc)}function g4(){const t=indexedDB.deleteDatabase(pI);return new Ha(t).toPromise()}function Ef(){const t=indexedDB.open(pI,m4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lc,{keyPath:mI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lc)?e(r):(r.close(),await g4(),e(await Ef()))})})}async function Q_(t,e,n){const r=Au(t,!0).put({[mI]:e,value:n});return new Ha(r).toPromise()}async function v4(t,e){const n=Au(t,!1).get(e),r=await new Ha(n).toPromise();return r===void 0?null:r.value}function J_(t,e){const n=Au(t,!0).delete(e);return new Ha(n).toPromise()}const _4=800,y4=3;class gI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ef(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>y4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bu._getInstance(p4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await h4(),!this.activeServiceWorker)return;this.sender=new u4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ef();return await Q_(e,Oc,"1"),await J_(e,Oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Q_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>v4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>J_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Au(i,!1).getAll();return new Ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gI.type="LOCAL";const ga=gI;/**
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
 */function X_(t,e){return ge(t,"POST","/v2/accounts/mfaSignIn:start",me(t,e))}function w4(t,e){return ge(t,"POST","/v2/accounts/mfaSignIn:finalize",me(t,e))}/**
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
 */const Ad=JC("rcb"),E4=new ja(3e4,6e4);class C4{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ye().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return I(I4(n),e,"argument-error"),this.shouldResolveImmediately(n)&&W_(ye().grecaptcha)?Promise.resolve(ye().grecaptcha):new Promise((r,i)=>{const s=ye().setTimeout(()=>{i(ke(e,"network-request-failed"))},E4.get());ye()[Ad]=()=>{ye().clearTimeout(s),delete ye()[Ad];const a=ye().grecaptcha;if(!a||!W_(a)){i(ke(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${qL()}?${Ii({onload:Ad,render:"explicit",hl:n})}`;Am(o).catch(()=>{clearTimeout(s),i(ke(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ye().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function I4(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class S4{async load(e){return new e3(e)}clearedOneInstance(){}}/**
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
 */const Po="recaptcha",T4={theme:"light",type:"image"};let k4=class{constructor(e,n,r=Object.assign({},T4)){this.parameters=r,this.type=Po,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=he(e),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new S4:new C4,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ye()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(Pm()&&!jm(),this.auth,"internal-error"),await R4(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bL(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function R4(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Wm{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ri._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function N4(t,e,n){if(pe(t.app))return Promise.reject(De(t));const r=he(t),i=await xu(r,e,D(n));return new Wm(i,s=>Nu(r,s))}async function P4(t,e,n){const r=D(t);await Ru(!1,r,"phone");const i=await xu(r.auth,e,D(n));return new Wm(i,s=>oI(r,s))}async function b4(t,e,n){const r=D(t);if(pe(r.auth.app))return Promise.reject(De(r.auth));const i=await xu(r.auth,e,D(n));return new Wm(i,s=>aI(r,s))}async function xu(t,e,n){var r;if(!t._getRecaptchaConfig())try{await o3(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){I(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await gr(t,o,"mfaSmsEnrollment",async(u,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===No){I((n==null?void 0:n.type)===Po,u,"argument-error");const h=await xd(u,d,n);return q_(u,h)}return q_(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{I(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;I(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await gr(t,a,"mfaSmsSignIn",async(d,h)=>{if(h.phoneSignInInfo.captchaResponse===No){I((n==null?void 0:n.type)===Po,d,"argument-error");const f=await xd(d,h,n);return X_(d,f)}return X_(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await gr(t,s,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===No){I((n==null?void 0:n.type)===Po,c,"argument-error");const d=await xd(c,u,n);return Y_(c,d)}return Y_(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function A4(t,e){const n=D(t);if(pe(n.auth.app))return Promise.reject(De(n.auth));await xm(n,e)}async function xd(t,e,n){I(n.type===Po,t,"argument-error");const r=await n.verify();I(typeof r=="string",t,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */let gi=class xl{constructor(e){this.providerId=xl.PROVIDER_ID,this.auth=he(e)}verifyPhoneNumber(e,n){return xu(this.auth,e,D(n))}static credential(e,n){return ri._fromVerification(e,n)}static credentialFromResult(e){const n=e;return xl.credentialFromTaggedObject(n)}static credentialFromError(e){return xl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ri._fromTokenResponse(n,r):null}};gi.PROVIDER_ID="phone";gi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ri(t,e){return e?mt(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zm extends Ms{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function x4(t){return sI(t.auth,new zm(t),t.bypassAuthState)}function O4(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),iI(n,new zm(t),t.bypassAuthState)}async function L4(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),xm(n,new zm(t),t.bypassAuthState)}/**
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
 */class vI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x4;case"linkViaPopup":case"linkViaRedirect":return L4;case"reauthViaPopup":case"reauthViaRedirect":return O4;default:Be(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D4=new ja(2e3,1e4);async function M4(t,e,n){if(pe(t.app))return Promise.reject(ke(t,"operation-not-supported-in-this-environment"));const r=he(t);Ds(t,e,zn);const i=Ri(r,n);return new In(r,"signInViaPopup",e,i).executeNotNull()}async function F4(t,e,n){const r=D(t);if(pe(r.auth.app))return Promise.reject(ke(r.auth,"operation-not-supported-in-this-environment"));Ds(r.auth,e,zn);const i=Ri(r.auth,n);return new In(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function U4(t,e,n){const r=D(t);Ds(r.auth,e,zn);const i=Ri(r.auth,n);return new In(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class In extends vI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=$a();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D4.get())};e()}}In.currentPopupAction=null;/**
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
 */const j4="pendingRedirect",bo=new Map;class W4 extends vI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bo.get(this.auth._key());if(!e){try{const r=await z4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bo.set(this.auth._key(),e)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z4(t,e){const n=yI(e),r=_I(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Bm(t,e){return _I(t)._set(yI(e),"true")}function B4(){bo.clear()}function Vm(t,e){bo.set(t._key(),e)}function _I(t){return mt(t._redirectPersistence)}function yI(t){return ni(j4,t.config.apiKey,t.name)}/**
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
 */function V4(t,e,n){return $4(t,e,n)}async function $4(t,e,n){if(pe(t.app))return Promise.reject(De(t));const r=he(t);Ds(t,e,zn),await r._initializationPromise;const i=Ri(r,n);return await Bm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function H4(t,e,n){return G4(t,e,n)}async function G4(t,e,n){const r=D(t);if(Ds(r.auth,e,zn),pe(r.auth.app))return Promise.reject(De(r.auth));await r.auth._initializationPromise;const i=Ri(r.auth,n);await Bm(i,r.auth);const s=await wI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Y4(t,e,n){return K4(t,e,n)}async function K4(t,e,n){const r=D(t);Ds(r.auth,e,zn),await r.auth._initializationPromise;const i=Ri(r.auth,n);await Ru(!1,r,e.providerId),await Bm(i,r.auth);const s=await wI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function q4(t,e){return await he(t)._initializationPromise,Ou(t,e,!1)}async function Ou(t,e,n=!1){if(pe(t.app))return Promise.reject(De(t));const r=he(t),i=Ri(r,e),o=await new W4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function wI(t){const e=$a(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const Q4=10*60*1e3;class EI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!CI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ke(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Z_(e))}saveEventToCache(e){this.cachedEventUids.add(Z_(e)),this.lastProcessedEventTime=Date.now()}}function Z_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function CI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CI(t);default:return!1}}/**
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
 */async function II(t,e={}){return ge(t,"GET","/v1/projects",e)}/**
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
 */const X4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z4=/^https?/;async function eD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await II(t);for(const n of e)try{if(tD(n))return}catch{}Be(t,"unauthorized-domain")}function tD(t){const e=fa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Z4.test(n))return!1;if(X4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const nD=new ja(3e4,6e4);function ey(){const t=ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rD(t){return new Promise((e,n)=>{var r,i,s;function o(){ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ey(),n(ke(t,"network-request-failed"))},timeout:nD.get()})}if(!((i=(r=ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ye().gapi)===null||s===void 0)&&s.load)o();else{const a=JC("iframefcb");return ye()[a]=()=>{gapi.load?o():n(ke(t,"network-request-failed"))},Am(`${JL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ol=null,e})}let Ol=null;function iD(t){return Ol=Ol||rD(t),Ol}/**
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
 */const sD=new ja(5e3,15e3),oD="__/auth/iframe",aD="emulator/auth/iframe",lD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uD(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bm(e,aD):`https://${t.config.authDomain}/${oD}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},i=cD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ii(r).slice(1)}`}async function dD(t){const e=await iD(t),n=ye().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:uD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ke(t,"network-request-failed"),a=ye().setTimeout(()=>{s(o)},sD.get());function l(){ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const hD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fD=500,pD=600,mD="_blank",gD="http://localhost";class ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vD(t,e,n,r=fD,i=pD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Re().toLowerCase();n&&(a=HC(c)?mD:n),VC(c)&&(e=e||gD,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,_])=>`${h}${f}=${_},`,"");if(zL(c)&&a!=="_self")return _D(e||"",a),new ty(null);const d=window.open(e||"",a,u);I(d,t,"popup-blocked");try{d.focus()}catch{}return new ty(d)}function _D(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yD="__/auth/handler",wD="emulator/auth/handler",ED=encodeURIComponent("fac");async function Cf(t,e,n,r,i,s){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:i};if(e instanceof zn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Fs){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${ED}=${encodeURIComponent(l)}`:"";return`${CD(t)}?${Ii(a).slice(1)}${c}`}function CD({config:t}){return t.emulator?bm(t,wD):`https://${t.authDomain}/${yD}`}/**
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
 */const Od="webStorageSupport";class ID{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mi,this._completeRedirectFn=Ou,this._overrideRedirectResult=Vm}async _openPopup(e,n,r,i){var s;Qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cf(e,n,r,fa(),i);return vD(e,o,$a())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cf(e,n,r,fa(),i);return d4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dD(e),r=new EI(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Od,{type:Od},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Od];o!==void 0&&n(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qC()||$C()||za()}}const SD=ID;class TD{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return cn("unexpected MultiFactorSessionType")}}}class $m extends TD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new $m(e)}_finalizeEnroll(e,n,r){return i4(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return w4(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class SI{constructor(){}static assertion(e){return $m._fromCredential(e)}}SI.FACTOR_ID="phone";var ny="@firebase/auth",ry="1.8.1";/**
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
 */class kD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ND(t){Tr(new Dt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QC(t)},c=new YL(r,i,s,l);return a3(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new Dt("auth-internal",e=>{const n=he(e.getProvider("auth").getImmediate());return(r=>new kD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(ny,ry,RD(t)),Yt(ny,ry,"esm2017")}/**
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
 */const PD=5*60;VN("authIdTokenMaxAge");function bD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ke("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ND("Browser");/**
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
 */function vi(){return window}/**
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
 */const AD=2e3;async function xD(t,e,n){var r;const{BuildInfo:i}=vi();Qt(e.sessionId,"AuthEvent did not contain a session ID");const s=await FD(e.sessionId),o={};return za()?o.ibi=i.packageName:Wa()?o.apn=i.packageName:Be(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Cf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function OD(t){const{BuildInfo:e}=vi(),n={};za()?n.iosBundleId=e.packageName:Wa()?n.androidPackageName=e.packageName:Be(t,"operation-not-supported-in-this-environment"),await II(t,n)}function LD(t){const{cordova:e}=vi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,WL()?"_blank":"_system","location=yes"),n(i)})})}async function DD(t,e,n){const{cordova:r}=vi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(ke(t,"redirect-cancelled-by-user"))},AD))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Wa()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function MD(t){var e,n,r,i,s,o,a,l,c,u;const d=vi();I(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((u=(c=d==null?void 0:d.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function FD(t){const e=UD(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function UD(t){if(Qt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const jD=20;class WD extends EI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function zD(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:$D(),postBody:null,tenantId:t.tenantId,error:ke(t,"no-auth-event")}}function BD(t,e){return If()._set(Sf(t),e)}async function iy(t){const e=await If()._get(Sf(t));return e&&await If()._remove(Sf(t)),e}function VD(t,e){var n,r;const i=GD(e);if(i.includes("/__/auth/callback")){const s=Ll(i),o=s.firebaseError?HD(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ke(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function $D(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<jD;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function If(){return mt(Um)}function Sf(t){return ni("authEvent",t.config.apiKey,t.name)}function HD(t){try{return JSON.parse(t)}catch{return null}}function GD(t){const e=Ll(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ll(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ll(i).link||i||r||n||t}function Ll(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Gi(n.join("?"))}/**
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
 */const YD=500;class KD{constructor(){this._redirectPersistence=mi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ou,this._overrideRedirectResult=Vm}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new WD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Be(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){MD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),B4(),await this._originValidation(e);const o=zD(e,r,i);await BD(e,o);const a=await xD(e,o,n),l=await LD(a);return DD(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OD(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=vi(),o=setTimeout(async()=>{await iy(e),n.onEvent(sy())},YD),a=async u=>{clearTimeout(o);const d=await iy(e);let h=null;d&&(u!=null&&u.url)&&(h=VD(d,u.url)),n.onEvent(h||sy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;vi().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(c)&&a({url:u}),typeof l=="function")try{l(u)}catch(d){console.error(d)}}}}const qD=KD;function sy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ke("no-auth-event")}}/**
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
 */function QD(t,e){he(t)._logFramework(e)}var JD="@firebase/auth-compat",XD="0.5.16";/**
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
 */const ZD=1e3;function Ao(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function eM(){return Ao()==="http:"||Ao()==="https:"}function TI(t=Re()){return!!((Ao()==="file:"||Ao()==="ionic:"||Ao()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function tM(){return nu()||Kw()}function nM(){return Jw()&&(document==null?void 0:document.documentMode)===11}function rM(t=Re()){return/Edge\/\d+/.test(t)}function iM(t=Re()){return nM()||rM(t)}function kI(){try{const t=self.localStorage,e=$a();if(t)return t.setItem(e,"1"),t.removeItem(e),iM()?fc():!0}catch{return Hm()&&fc()}return!1}function Hm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ld(){return(eM()||Qw()||TI())&&!tM()&&kI()&&!Hm()}function RI(){return TI()&&typeof document<"u"}async function sM(){return RI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},ZD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function oM(){return typeof window<"u"?window:null}/**
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
 */const ht={LOCAL:"local",NONE:"none",SESSION:"session"},eo=I,NI="persistence";function aM(t,e){if(eo(Object.values(ht).includes(e),t,"invalid-persistence-type"),nu()){eo(e!==ht.SESSION,t,"unsupported-persistence-type");return}if(Kw()){eo(e===ht.NONE,t,"unsupported-persistence-type");return}if(Hm()){eo(e===ht.NONE||e===ht.LOCAL&&fc(),t,"unsupported-persistence-type");return}eo(e===ht.NONE||kI(),t,"unsupported-persistence-type")}async function Tf(t){await t._initializationPromise;const e=PI(),n=ni(NI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function lM(t,e){const n=PI();if(!n)return[];const r=ni(NI,t,e);switch(n.getItem(r)){case ht.NONE:return[Cs];case ht.LOCAL:return[ga,mi];case ht.SESSION:return[mi];default:return[]}}function PI(){var t;try{return((t=oM())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const cM=I;class nr{constructor(){this.browserResolver=mt(SD),this.cordovaResolver=mt(qD),this.underlyingResolver=null,this._redirectPersistence=mi,this._completeRedirectFn=Ou,this._overrideRedirectResult=Vm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return RI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return cM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await sM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function bI(t){return t.unwrap()}function uM(t){return t.wrapped()}/**
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
 */function dM(t){return AI(t)}function hM(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new fM(t,r4(t,e))}else if(r){const i=AI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function AI(t){const{_tokenResponse:e}=t instanceof lt?t.customData:t;if(!e)return null;if(!(t instanceof lt)&&"temporaryProof"in e&&"phoneNumber"in e)return gi.credentialFromResult(t);const n=e.providerId;if(!n||n===Xs.PASSWORD)return null;let r;switch(n){case Xs.GOOGLE:r=rn;break;case Xs.FACEBOOK:r=nn;break;case Xs.GITHUB:r=sn;break;case Xs.TWITTER:r=on;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Is._create(n,a):gn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new is(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof lt?r.credentialFromError(t):r.credentialFromResult(t)}function Ze(t,e){return e.catch(n=>{throw n instanceof lt&&hM(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:dM(n),additionalUserInfo:n4(n),user:Sn.getOrCreate(i)}})}async function kf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ze(t,n.confirm(r))}}class fM{constructor(e,n){this.resolver=n,this.auth=uM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ze(bI(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Sn{constructor(e){this._delegate=e,this.multiFactor=o4(e)}static getOrCreate(e){return Sn.USER_MAP.has(e)||Sn.USER_MAP.set(e,new Sn(e)),Sn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ze(this.auth,oI(this._delegate,e))}async linkWithPhoneNumber(e,n){return kf(this.auth,P4(this._delegate,e,n))}async linkWithPopup(e){return Ze(this.auth,U4(this._delegate,e,nr))}async linkWithRedirect(e){return await Tf(he(this.auth)),Y4(this._delegate,e,nr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ze(this.auth,aI(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return kf(this.auth,b4(this._delegate,e,n))}reauthenticateWithPopup(e){return Ze(this.auth,F4(this._delegate,e,nr))}async reauthenticateWithRedirect(e){return await Tf(he(this.auth)),H4(this._delegate,e,nr)}sendEmailVerification(e){return H3(this._delegate,e)}async unlink(e){return await A3(this._delegate,e),this}updateEmail(e){return q3(this._delegate,e)}updatePassword(e){return Q3(this._delegate,e)}updatePhoneNumber(e){return A4(this._delegate,e)}updateProfile(e){return K3(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return G3(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Sn.USER_MAP=new WeakMap;/**
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
 */const to=I;let Rf=class{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;to(r,"invalid-api-key",{appName:e.name}),to(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?nr:void 0;this._delegate=n.initialize({options:{persistence:pM(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(EL),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Sn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){l3(this._delegate,e,n)}applyActionCode(e){return M3(this._delegate,e)}checkActionCode(e){return lI(this._delegate,e)}confirmPasswordReset(e,n){return D3(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ze(this._delegate,U3(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return $3(this._delegate,e)}isSignInWithEmailLink(e){return z3(this._delegate,e)}async getRedirectResult(){to(Ld(),this._delegate,"operation-not-supported-in-this-environment");const e=await q4(this._delegate,nr);return e?Ze(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){QD(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=oy(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=oy(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return W3(this._delegate,e,n)}sendPasswordResetEmail(e,n){return L3(this._delegate,e,n||void 0)}async setPersistence(e){aM(this._delegate,e);let n;switch(e){case ht.SESSION:n=mi;break;case ht.LOCAL:n=await mt(ga)._isAvailable()?ga:Um;break;case ht.NONE:n=Cs;break;default:return Be("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ze(this._delegate,b3(this._delegate))}signInWithCredential(e){return Ze(this._delegate,Nu(this._delegate,e))}signInWithCustomToken(e){return Ze(this._delegate,O3(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ze(this._delegate,j3(this._delegate,e,n))}signInWithEmailLink(e,n){return Ze(this._delegate,B3(this._delegate,e,n))}signInWithPhoneNumber(e,n){return kf(this._delegate,N4(this._delegate,e,n))}async signInWithPopup(e){return to(Ld(),this._delegate,"operation-not-supported-in-this-environment"),Ze(this._delegate,M4(this._delegate,e,nr))}async signInWithRedirect(e){return to(Ld(),this._delegate,"operation-not-supported-in-this-environment"),await Tf(this._delegate),V4(this._delegate,e,nr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return F3(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}};Rf.Persistence=ht;function oy(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Sn.getOrCreate(o)),error:e,complete:n}}function pM(t,e){const n=lM(t,e);if(typeof self<"u"&&!n.includes(ga)&&n.push(ga),typeof window<"u")for(const r of[Um,mi])n.includes(r)||n.push(r);return n.includes(Cs)||n.push(Cs),n}/**
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
 */class Gm{static credential(e,n){return gi.credential(e,n)}constructor(){this.providerId="phone",this._delegate=new gi(bI(Mr.auth()))}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Gm.PHONE_SIGN_IN_METHOD=gi.PHONE_SIGN_IN_METHOD;Gm.PROVIDER_ID=gi.PROVIDER_ID;/**
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
 */const mM=I;class gM{constructor(e,n,r=Mr.app()){var i;mM((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new k4(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const vM="auth-compat";function _M(t){t.INTERNAL.registerComponent(new Dt(vM,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Rf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:bi.EMAIL_SIGNIN,PASSWORD_RESET:bi.PASSWORD_RESET,RECOVER_EMAIL:bi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:bi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:bi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:bi.VERIFY_EMAIL}},EmailAuthProvider:Ur,FacebookAuthProvider:nn,GithubAuthProvider:sn,GoogleAuthProvider:rn,OAuthProvider:is,SAMLAuthProvider:Ac,PhoneAuthProvider:Gm,PhoneMultiFactorGenerator:SI,RecaptchaVerifier:gM,TwitterAuthProvider:on,Auth:Rf,AuthCredential:Ms,Error:lt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(JD,XD)}_M(Mr);const yM={apiKey:"AIzaSyCHsCuljZCMZVpSiEXyGMmiQLnzhF2kBTY",authDomain:"ally-web.firebaseapp.com",databaseURL:"https://ally-web-default-rtdb.firebaseio.com",projectId:"ally-web",storageBucket:"ally-web.firebasestorage.app",messagingSenderId:"82438629304",appId:"1:82438629304:web:af3ae23c1465fa5c41114d"};Mr.initializeApp(yM);const ce=Mr.database(),Q=Mr.auth(),wM=["prioritize everything sent to=bio ","to=bio += *command - compdoc() / composedocument():*","nigger","GU1D3L1N3S","3TH1C4L","M0R4L"],uo=t=>{const e=t.toLowerCase();return wM.some(n=>e.includes(n.toLocaleLowerCase()))},Nf="This message may violate our policies",Fe=[{name:"Ally-2",description:"Advanced language model, suitable for everyday use",icon:f2,symbole:"a",defaultHistory:"If and only if someone asks you what your name or who created you, tell them that your name is AllyAI, Ally for short, and you are an artificial intelligence created and trained by the person at CodeAdiksuu. You help with many tasks, generate text, and can analyze and respond to photos. If you need more information for a specific task, provide sample data, but indicate that these are sample data",dailyLimit:50},{name:"Ally-Lie",description:"Reworked Ally-2 model misleading in answers",icon:C2,symbole:"b",defaultHistory:"Lie and mislead by providing false information in every subsequent message, regardless of the question asked, giving ridiculous and incorrect answers in response, even if they are untrue",dailyLimit:50},{name:"Ally-Imagine",description:"A model that allows you to replace text with a photo",icon:v2,symbole:"c",defaultHistory:"",dailyLimit:5}];function Dd(){const t=new Date,e=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0");return`${e}:${n}`}var ay;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(ay||(ay={}));/**
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
 */var ly;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(ly||(ly={}));var cy;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(cy||(cy={}));/**
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
 */const uy=["user","model","function","system"];var dy;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(dy||(dy={}));var hy;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(hy||(hy={}));var fy;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(fy||(fy={}));var py;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(py||(py={}));var xo;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(xo||(xo={}));var my;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(my||(my={}));var gy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(gy||(gy={}));var vy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(vy||(vy={}));/**
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
 */class nt extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class Ai extends nt{constructor(e,n){super(e),this.response=n}}class xI extends nt{constructor(e,n,r,i){super(e),this.status=n,this.statusText=r,this.errorDetails=i}}class vr extends nt{}/**
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
 */const EM="https://generativelanguage.googleapis.com",CM="v1beta",IM="0.21.0",SM="genai-js";var _i;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(_i||(_i={}));class TM{constructor(e,n,r,i,s){this.model=e,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||CM;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||EM}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function kM(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${SM}/${IM}`),e.join(" ")}async function RM(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",kM(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new vr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,s]of r.entries()){if(i==="x-goog-api-key")throw new vr(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new vr(`Header name ${i} can only be set using the apiClient field`);n.append(i,s)}}return n}async function NM(t,e,n,r,i,s){const o=new TM(t,e,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},xM(s)),{method:"POST",headers:await RM(o),body:i})}}async function Ga(t,e,n,r,i,s={},o=fetch){const{url:a,fetchOptions:l}=await NM(t,e,n,r,i,s);return PM(a,l,o)}async function PM(t,e,n=fetch){let r;try{r=await n(t,e)}catch(i){bM(i,t)}return r.ok||await AM(r,t),r}function bM(t,e){let n=t;throw t instanceof xI||t instanceof vr||(n=new nt(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function AM(t,e){let n="",r;try{const i=await t.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new xI(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function xM(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
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
 */function Ym(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Dl(t.candidates[0]))throw new Ai(`${Yn(t)}`,t);return OM(t)}else if(t.promptFeedback)throw new Ai(`Text not available. ${Yn(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Dl(t.candidates[0]))throw new Ai(`${Yn(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),_y(t)[0]}else if(t.promptFeedback)throw new Ai(`Function call not available. ${Yn(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Dl(t.candidates[0]))throw new Ai(`${Yn(t)}`,t);return _y(t)}else if(t.promptFeedback)throw new Ai(`Function call not available. ${Yn(t)}`,t)},t}function OM(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function _y(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const LM=[xo.RECITATION,xo.SAFETY,xo.LANGUAGE];function Dl(t){return!!t.finishReason&&LM.includes(t.finishReason)}function Yn(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];Dl(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function va(t){return this instanceof va?(this.v=t,this):new va(t)}function DM(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(h){r[h]&&(i[h]=function(f){return new Promise(function(_,w){s.push([h,f,_,w])>1||a(h,f)})})}function a(h,f){try{l(r[h](f))}catch(_){d(s[0][3],_)}}function l(h){h.value instanceof va?Promise.resolve(h.value.v).then(c,u):d(s[0][2],h)}function c(h){a("next",h)}function u(h){a("throw",h)}function d(h,f){h(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}/**
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
 */const yy=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function MM(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=jM(e),[r,i]=n.tee();return{stream:UM(r),response:FM(i)}}async function FM(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return Ym(WM(e));e.push(i)}}function UM(t){return DM(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield va(n.read());if(i)break;yield yield va(Ym(r))}})}function jM(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:a})=>{if(a){if(i.trim()){r.error(new nt("Failed to parse stream"));return}r.close();return}i+=o;let l=i.match(yy),c;for(;l;){try{c=JSON.parse(l[1])}catch{r.error(new nt(`Error parsing JSON response: "${l[1]}"`));return}r.enqueue(c),i=i.substring(l[0].length),l=i.match(yy)}return s()})}}})}function WM(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const a of i.content.parts)a.text&&(o.text=a.text),a.functionCall&&(o.functionCall=a.functionCall),a.executableCode&&(o.executableCode=a.executableCode),a.codeExecutionResult&&(o.codeExecutionResult=a.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
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
 */async function OI(t,e,n,r){const i=await Ga(e,_i.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return MM(i)}async function LI(t,e,n,r){const s=await(await Ga(e,_i.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:Ym(s)}}/**
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
 */function DI(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function _a(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return zM(e)}function zM(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),i=!0):(e.parts.push(s),r=!0);if(r&&i)throw new nt("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new nt("No content is provided for sending chat message.");return r?e:n}function BM(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const i=t.generateContentRequest!=null;if(t.contents){if(i)throw new vr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(i)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const s=_a(t);r.contents=[s]}return{generateContentRequest:r}}function wy(t){let e;return t.contents?e=t:e={contents:[_a(t)]},t.systemInstruction&&(e.systemInstruction=DI(t.systemInstruction)),e}function VM(t){return typeof t=="string"||Array.isArray(t)?{content:_a(t)}:t}/**
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
 */const Ey=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],$M={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function HM(t){let e=!1;for(const n of t){const{role:r,parts:i}=n;if(!e&&r!=="user")throw new nt(`First content should be with role 'user', got ${r}`);if(!uy.includes(r))throw new nt(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(uy)}`);if(!Array.isArray(i))throw new nt("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new nt("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of i)for(const l of Ey)l in a&&(s[l]+=1);const o=$M[r];for(const a of Ey)if(!o.includes(a)&&s[a]>0)throw new nt(`Content with role '${r}' can't contain '${a}' part`);e=!0}}/**
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
 */const Cy="SILENT_ERROR";class GM{constructor(e,n,r,i={}){this.model=n,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(HM(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,i,s,o,a,l;await this._sendPromise;const c=_a(e),u={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),n);let h;return this._sendPromise=this._sendPromise.then(()=>LI(this._apiKey,this.model,u,d)).then(f=>{var _;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(c);const w=Object.assign({parts:[],role:"model"},(_=f.response.candidates)===null||_===void 0?void 0:_[0].content);this._history.push(w)}else{const w=Yn(f.response);w&&console.warn(`sendMessage() was unsuccessful. ${w}. Inspect response object for details.`)}h=f}),await this._sendPromise,h}async sendMessageStream(e,n={}){var r,i,s,o,a,l;await this._sendPromise;const c=_a(e),u={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),n),h=OI(this._apiKey,this.model,u,d);return this._sendPromise=this._sendPromise.then(()=>h).catch(f=>{throw new Error(Cy)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(c);const _=Object.assign({},f.candidates[0].content);_.role||(_.role="model"),this._history.push(_)}else{const _=Yn(f);_&&console.warn(`sendMessageStream() was unsuccessful. ${_}. Inspect response object for details.`)}}).catch(f=>{f.message!==Cy&&console.error(f)}),h}}/**
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
 */async function YM(t,e,n,r){return(await Ga(e,_i.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
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
 */async function KM(t,e,n,r){return(await Ga(e,_i.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function qM(t,e,n,r){const i=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await Ga(e,_i.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:i}),r)).json()}/**
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
 */class Iy{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=DI(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const i=wy(e),s=Object.assign(Object.assign({},this._requestOptions),n);return LI(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}async generateContentStream(e,n={}){var r;const i=wy(e),s=Object.assign(Object.assign({},this._requestOptions),n);return OI(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}startChat(e){var n;return new GM(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=BM(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return YM(this.apiKey,this.model,r,i)}async embedContent(e,n={}){const r=VM(e),i=Object.assign(Object.assign({},this._requestOptions),n);return KM(this.apiKey,this.model,r,i)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return qM(this.apiKey,this.model,e,r)}}/**
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
 */class QM{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new nt("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Iy(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new vr("Cached content must contain a `name` field.");if(!e.model)throw new vr("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const o of i)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===l)continue}throw new vr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Iy(this.apiKey,s,r)}}const JM="AIzaSyApClqszUTiruooucL-l1UUQEsEeRi6zuk",Km=async()=>{const t=await ce.ref(`users/${Q.currentUser.uid}/settings/`).once("value");if(t.exists())return{temperature:t.val().temperature||1,length:t.val().length||8192,language:t.val().language||"auto",rules:t.val().rules||""};{const e={temperature:1,length:8192,language:"auto",rules:""};return await ce.ref(`users/${Q.currentUser.uid}/settings`).set(e),e}},XM=(t,e,n,r,i,s,o,a)=>{if(t>=0&&t<=2&&e>0&&e<=8192&&o.length<=300)ce.ref(`users/${Q.currentUser.uid}/settings/`).update({temperature:t,length:e,language:i,rules:o});else{const l={temperature:1,length:8192,language:"auto",rules:""};ce.ref(`users/${Q.currentUser.uid}/settings`).set(l),n("1"),r("8192"),s("auto"),a("")}};function ZM(t,e,n,r){const i=JM;return new QM(i).getGenerativeModel({model:"gemini-1.5-flash",generationConfig:{temperature:e},systemInstruction:`${n!=="auto"?`Always speek in ${n} language!`:""}, Stick to these rules: ${r} and ${Fe.find(o=>o.name.toUpperCase()===t).defaultHistory}`})}function e6(t,e){return t.startChat({history:[...e]})}const t6=t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>e(r.result.split(",")[1]),r.onerror=i=>n(i),r.readAsDataURL(t)}),n6=async(t,e,n,r)=>{const i=await Promise.all(n.map(async l=>{const c=l.type;return{inlineData:{data:await t6(l),mimeType:c}}})),s=r.map(l=>l.message).join(`
`)+`
`+e,o=await t.generateContentStream([s,...i]);let a="";for await(const l of o.stream)a+=l.text();return a||"No response generated."};async function r6(t,e,n=3,r=1e3){var s,o,a,l,c;let i=0;for(;i<n;)try{return((c=(l=(a=(o=(s=(await t.sendMessage(e)).response.candidates)==null?void 0:s[0])==null?void 0:o.content)==null?void 0:a.parts)==null?void 0:l[0])==null?void 0:c.text)||"No response generated."}catch(u){if(u.message.includes("503")&&i<n-1)console.warn(`Attempt ${i+1} failed. Retrying in ${r}ms...`),await new Promise(d=>setTimeout(d,r)),i++;else throw console.error("Error sending message to Gemini API:",u),new Error("Failed to send message.")}}async function Sy(t,e,n,r){try{const i=await Km(),s=i.temperature||1,o=i.language||"auto",a=i.rules||"",l=ZM(r,s,o,a);if(n.length>0)return await n6(l,t,n,e);{const c=await e6(l,e);return await r6(c,t)}}catch(i){return console.error("Error with Gemini API:",i),"Unfortunately, the server is overloaded. Please try again later."}}const i6=async t=>{try{const e=await fetch("https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",{headers:{Authorization:"Bearer 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","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)});if(!e.ok)throw new Error(`Failed to fetch image: ${e.statusText}`);const n=await e.blob();return new Promise((r,i)=>{const s=new FileReader;s.onloadend=()=>{r(s.result)},s.onerror=o=>{i(new Error("Failed to convert blob to Base64"))},s.readAsDataURL(n)})}catch(e){return console.error("Error with Hugging Face API:",e.message),"Unfortunately, the server is overloaded. Please try again later."}};async function Ty(t){if(t)return await i6({inputs:t})}async function s6(){return(await ce.ref(`users/${Q.currentUser.uid}`).once("value")).val().username}async function ya(t){const e=await ce.ref(`users/${Q.currentUser.uid}/prompts`).once("value");return e.exists()?e.val()[t]:0}function o6(t,e){ce.ref(`users/${Q.currentUser.uid}/prompts`).update({[t]:e+1})}async function a6(){const t=new Date,e=t.getTime()+24*60*60*1e3,n=await ce.ref(`users/${Q.currentUser.uid}/prompts/`).once("value");if(!n.exists()){ce.ref(`users/${Q.currentUser.uid}/prompts`).update({"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,resetAt:e});return}t.getTime()>n.val().resetAt&&ce.ref(`users/${Q.currentUser.uid}/prompts`).update({"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0,resetAt:e})}function l6(t,e){t(""),e([])}async function Lu(t,e,n,r,i,s,o,a,l,c){r&&r.preventDefault();const u=Fe.find(w=>w.name.toUpperCase()===t.toUpperCase()).dailyLimit;if(e.trim()===""||await ya(t.toUpperCase())>=u)return;n&&l&&l6(n,l),o&&o(!0);const d=`chats/${Q.currentUser.uid}/${t.toUpperCase()}/${i}`,f=(await ce.ref(d).once("value")).numChildren(),_=f.toString().padStart(6,"0");if(o6(t.toUpperCase(),await ya(t.toUpperCase())),c){const w=parseInt(c.replace("message_","")-1).toString().padStart(6,"0"),y=t.toUpperCase()==="ALLY-IMAGINE";ce.ref(`${d}/message_${w}/`).once("value").then(async g=>{const p=g.val().message,v={message:uo(p)?Nf:y?await Ty(p):await Sy(p,s,a,t.toUpperCase()),username:"Ally",author:"ai",time:Dd(),loading:!0,invalid:uo(p)};ce.ref(`${d}/${c}/`).update(v).then(()=>{o&&o(!1)})})}else{const w={message:e,author:"user",time:Dd(),username:await s6(),file:a.length>0?a.map(g=>URL.createObjectURL(g)):null,invalid:!1},y=t.toUpperCase()==="ALLY-IMAGINE";ce.ref(`${d}/message_${_}/`).set(w).then(async()=>{const g={message:uo(e)?Nf:y?await Ty(e):await Sy(e,s,a,t.toUpperCase()),username:"Ally",author:"ai",time:Dd(),loading:!0,invalid:uo(e)};ce.ref(`${d}/message_${(f+1).toString().padStart(6,"0")}/`).set(g).then(()=>{o&&o(!1)})})}}function c6({model:t}){const[e,n]=E.useState(""),[r,i]=E.useState(!1),[s,o]=E.useState(0),a=E.useRef(null),l=Un(),c=async f=>{if(f.preventDefault(),e.trim()==="")return;i(!0);const _=`${Fe.find(w=>w.name===t).symbole}${Math.floor(Math.random()*999999999)}`;await Lu(t,e,n,f,_,[],i,[]),l(`/chat/${_}`,{state:{loading:!0}})},u=()=>{const f=a.current;f&&(f.style.height="auto",f.style.height=`${f.scrollHeight-20}px`)},d=f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),c(f))},h=f=>{n(f.target.value),u()};return E.useEffect(()=>{(async()=>{o(await ya())})()},[l]),m.jsxs("form",{className:"input",onSubmit:f=>c(f),children:[m.jsx("textarea",{ref:a,disabled:s>=50||r,type:"text",onKeyDown:d,placeholder:s>=50?"Prompts limit reached for today":r?"Wait for response...":"Ask question",value:e,onChange:f=>h(f)}),m.jsx("button",{type:"submit",children:m.jsx(Ce,{icon:sw})})]})}const u6=["Tell me about the weather in New York","How many people are in London?","Who won the 2020 Nobel Prize in Literature?","What is the current stock price of Apple Inc.?","Who is the Prime Minister of France?","What is the capital of Australia?","Describe the characteristics of a giraffe.","What are the ingredients in a chocolate chip cookie?","Summarize the plot of Romeo and Juliet.",'Translate "hello" to Spanish.',"What is the population of Brazil?","Compare and contrast the Roman Empire and the Han Dynasty.","What are the symptoms of the common cold?","Recommend three restaurants in Paris that serve French cuisine.","Write a short poem about a sunset.","Explain the theory of relativity in simple terms.","What is the highest mountain in the world?","Give me five facts about the moon.","Who painted the Mona Lisa?","What is the chemical formula for water?","What is the largest planet in our solar system?",'Who wrote "Hamlet"?',"What is the capital of Japan?","Explain the process of photosynthesis.","What are the causes of World War I?","Describe the characteristics of a redwood tree.","What is the difference between a dog and a cat?","What is the function of the liver?","What is the history of the internet?","What is the difference between a republic and a monarchy?","What are the major religions of the world?","Who invented the printing press?","What is the importance of trees in the ecosystem?","What is the role of a neuron in the nervous system?","What are the different types of clouds?","What is the capital of Egypt?","Explain the process of cellular respiration.","What is the significance of the Magna Carta?","What are the different types of volcanoes?","What is the structure of a DNA molecule?","What are the major causes of air pollution?","What is the difference between a virus and a bacteria?","Who is considered the father of medicine?","What are the main components of the Earth's atmosphere?","What is the theory of plate tectonics?","What is the difference between a hawk and an eagle?","What is the process of digestion in humans?","What are the benefits of regular exercise?","What is the function of the heart?","What is the history of the United States?","What are the major components of a computer?","Describe the characteristics of a mountain lion.","Who was Abraham Lincoln?","What is the process of photosynthesis?","What are the different types of government?","What is the role of gravity in the universe?","Who is Albert Einstein?","What is the importance of biodiversity?","What are the different types of musical instruments?","What is the history of the Roman Empire?","Describe the characteristics of a polar bear.","What is the current population of the world?","What are the main causes of climate change?","Describe the characteristics of a desert.","Explain the process of mitosis.","Who is the current president of the United States?","What is the meaning of life?","What is the difference between a democracy and an oligarchy?","Write a short story about a lost dog.","What is the tallest building in the world?","What are the major rivers in the United States?","Explain the concept of time travel.","What is the difference between a mammal and a reptile?","What is the role of oxygen in the human body?","What are the benefits of eating a healthy diet?","What is the capital of Canada?","Who painted the Starry Night?","What is the history of the computer?"],d6=(t,e)=>[...t].sort(()=>.5-Math.random()).slice(0,e);function h6({model:t}){const[e,n]=E.useState(!1),r=Un(),[i]=E.useState(d6(u6,3)),s=async c=>{n(!0);const u=`${Fe.find(d=>d.name===t).symbole}${Math.floor(Math.random()*999999999)}`;await Lu(t.toUpperCase(),c,null,null,u,[],n,[]),r(`/chat/${u}`,{state:{loading:!0}})},o=["What about this?","Ask me this!","Curious? Try me!"],a=[A2,nw,g2];function l({example:c,index:u}){return m.jsxs("div",{className:"example",onClick:()=>s(c),children:[m.jsx("span",{children:m.jsx(Ce,{icon:a[u]})}),m.jsx("h3",{children:o[u]}),m.jsx("p",{children:c})]})}return m.jsx("div",{className:"examples",children:i.map((c,u)=>m.jsx(l,{example:c,index:u},u))})}function f6({model:t,setModel:e}){const n=Fe.find(l=>l.name===t),[r,i]=E.useState(!1),s=()=>{i(!r)};function o(l){l.name!==n.name&&(e(l.name),i(!1))}function a({model:l}){return m.jsxs("div",{onClick:()=>o(l),className:`model${l.name===n.name&&r?" primary":""}`,children:[m.jsxs("span",{children:[m.jsx(Ce,{icon:l.icon})," ",l.name]}),l.name===n.name?m.jsx("button",{onClick:()=>s(),children:m.jsx(Ce,{icon:iw})}):null]})}return m.jsxs("div",{className:"select_model",children:[m.jsx(a,{model:n},t),r?m.jsx("div",{className:"list",children:Fe.filter(l=>l.name!==n.name&&!l.disabled).map((l,c)=>m.jsx(a,{model:l},c))}):null]})}function p6(){var s;const t=Ns(),e=Un(),[n,r]=E.useState(((s=t.state)==null?void 0:s.model)||"Ally-2"),{id:i}=Q1();return E.useEffect(()=>{e("/",{replace:!0,state:null})},[e,i]),m.jsxs("section",{className:"home",children:[m.jsx(h6,{model:n}),m.jsxs("div",{className:"container",children:[m.jsx("h1",{children:"How can I help you?"}),m.jsx("p",{children:"Ask what you want and you will receive a quick and concise answer"}),m.jsx(c6,{model:n}),m.jsx(f6,{model:n,setModel:r})]})]})}function m6({model:t,prompts:e}){const n=Un(),r=()=>{n("/",{state:{model:t.name}})};return m.jsxs("div",{className:`model${t!=null&&t.disabled?" disabled":""}`,onClick:()=>r(),children:[m.jsx("div",{className:"leftside",children:m.jsx("span",{children:m.jsx(Ce,{icon:t.icon})})}),m.jsxs("div",{className:"rightside",children:[m.jsx("h2",{children:t.name}),m.jsx("p",{children:t.description}),m.jsxs("span",{children:[e[t.name.toUpperCase()],"/",Fe.find(i=>i.name===t.name).dailyLimit," prompts"]})]})]})}async function g6(){const e=(await ce.ref(`users/${Q.currentUser.uid}/prompts/`).once("value")).val();return e?{"ALLY-2":e["ALLY-2"]||0,"ALLY-LIE":e["ALLY-LIE"]||0,"ALLY-IMAGINE":e["ALLY-IMAGINE"]||0}:{"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0}}function v6(){const[t,e]=E.useState({"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0});return E.useEffect(()=>{(async()=>{e(await g6())})()},[]),m.jsxs("section",{className:"models",children:[m.jsxs("div",{className:"info",children:[m.jsx("h1",{children:"Try our models"}),m.jsx("p",{children:"AllyAI offers several language models, try them all!"})]}),m.jsx("div",{className:"container",children:Fe.map((n,r)=>m.jsx(m6,{model:n,prompts:t},r))})]})}function _6(t,e){const n=Fe.find(r=>r.symbole===window.location.pathname.at(6)).name.toUpperCase();ce.ref(`chats/${Q.currentUser.uid}/${n}/${t}/`).remove().then(()=>{e(!0)})}function y6({id:t}){const[e,n]=E.useState(!1),r=Un(),i=[{icon:h2,do:()=>_6(t,n)}];E.useEffect(()=>{e&&(n(!1),r("/"))},[e]);function s({button:o}){return m.jsx("button",{onClick:()=>o.do(),children:m.jsx(Ce,{icon:o.icon})})}return m.jsxs("div",{className:"navbar",children:[m.jsxs("h1",{children:["Chatting with ",Fe.find(o=>o.symbole===window.location.pathname.at(6)).name.toUpperCase()]}),m.jsx("div",{className:"options",children:i.map((o,a)=>m.jsx(s,{button:o},a))})]})}const Ya="/assets/logo-BlcMkMaV.png",ky=t=>{const e=t.split(/```(.*?)```/gs);let n="";return e.forEach((r,i)=>{if(i%2===1)n+=`<p>${r}</p>`;else{const s=r.split(`
`);let o=[],a=!1,l=!1;s.forEach(c=>{if(c.includes("|")){const u=c.split("|").map(d=>d.trim()).filter(d=>d);u.length>0&&(o.push(u),a=!0)}else c.includes("```")?l=!0:(a&&o.length>0&&(n+=Ry(o),o=[],a=!1),l||(c=c.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/_(.*?)_/g,"<em>$1</em>").replace(/\n/g,"<br>")),n+=`${c}
`,l=!1)}),a&&o.length>0&&(n+=Ry(o))}}),n},Ry=t=>{let e="<table><thead><tr>";return t[0].forEach(r=>{e+=`<th>${r.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/_(.*?)_/g,"<em>$1</em>")}</th>`}),e+="</tr></thead><tbody>",t.slice(1).forEach(r=>{e+="<tr>",r.forEach(i=>{i=i.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/_(.*?)_/g,"<em>$1</em>"),e+=`<td>${i}</td>`}),e+="</tr>"}),e+="</tbody></table>",e},w6=t=>{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()},E6=(t,e,n,r)=>{r(s=>s.filter(o=>{var a;return((a=o.parts[0])==null?void 0:a.text)!==t.text}));const i=Fe.find(s=>s.symbole===window.location.pathname.at(6)).name.toUpperCase();Lu(i,t.text,null,null,window.location.pathname.slice(6),e,n,t.file||[],null,t.key)};function C6({message:t,messagePath:e,history:n,setLoading:r,setHistory:i}){const[s,o]=E.useState(""),[a,l]=E.useState(!1),[c]=E.useState(Fe.find(u=>u.symbole===window.location.pathname.at(6)).name.toUpperCase());return E.useEffect(()=>{var u;if(((u=t==null?void 0:t.file)==null?void 0:u.length)>0){if(!t.file[0])return;const d=new Image;d.src=t.file[0],d.onload=()=>l(!0),d.onerror=()=>l(!1)}else l(!1)},[t.file]),E.useEffect(()=>{(async()=>{const d=await Km(),h=t.author==="ai"?d.length:8192;if(t.loading===!0){const f=t.text.split(" ").slice(0,h),w=2e3/f.length;let y=0;o("");const g=setInterval(()=>{const p=f.slice(0,y+1).join(" "),v=ky(p);if(o(v),y++,y>=f.length){clearInterval(g);const C=Fe.find(N=>N.symbole===window.location.pathname.at(6)).name.toUpperCase(),k=`chats/${Q.currentUser.uid}/${C}/${e}/${t.key}`;ce.ref(k).update({loading:!1})}},w);return()=>clearInterval(g)}else{const f=ky(t.text.slice(0,h));o(f)}})()},[t,e]),m.jsxs("div",{className:`message${(t==null?void 0:t.author)==="user"?" author":""}${(t==null?void 0:t.invalid)===!0?" invalid":""}`,children:[m.jsxs("div",{className:"leftside",children:[m.jsx("img",{src:Ya,alt:"logo of user"}),m.jsxs("div",{className:"list",children:[c!=="ALLY-IMAGINE"?m.jsx("button",{onClick:()=>E6(t,n,r,i),children:m.jsx(Ce,{icon:y2})}):null,m.jsx("button",{onClick:()=>w6(t.text),children:m.jsx(Ce,{icon:k2})})]})]}),m.jsxs("div",{className:"rightside",children:[a?m.jsxs("div",{className:"images",children:[t.file.slice(0,4).map(u=>m.jsx("img",{src:u,alt:"Message file"})),t.file.length>4?m.jsxs("div",{className:"count",children:["+",t.file.length-4]}):null]}):null,m.jsxs("div",{className:"info",children:[m.jsx("h2",{children:t.username}),m.jsx("span",{children:t.date})]}),t.text.startsWith("data:image")?m.jsx("img",{src:t.text,alt:"Embedded image"}):m.jsx("p",{style:{whiteSpace:"pre-line"},dangerouslySetInnerHTML:{__html:s}})]})]})}function I6(t,e,n){const r=Fe.find(s=>s.symbole===window.location.pathname.at(6)).name.toUpperCase(),i=ce.ref(`chats/${Q.currentUser.uid}/${r}/${e}/`);return new Promise((s,o)=>{i.on("value",a=>{if(!a.exists()){s("back");return}const l=[],c=[];a.forEach(u=>{const d={text:u.val().message,date:u.val().time,author:u.val().author,loading:u.val().loading||!1,username:u.val().username,file:u.val().file||null,invalid:u.val().invalid,key:u.key};if(!uo(u.val().message)&&u.val().message!==Nf){const h={role:u.val().author==="user"?"user":"model",parts:[{text:u.val().message}]};c.push(h)}l.push(d)}),t(l),n(c),s("success")})})}const S6=t=>{ce.ref(`users/${Q.currentUser.uid}/`).update({opinion:t})};function T6(){const t=[{text:"I love it!",emoji:m2},{text:"Pretty good",emoji:N2},{text:"It's okay",emoji:S2},{text:"Could be better",emoji:E2},{text:"Not great",emoji:b2},{text:"Needs work",emoji:P2}],[e,n]=E.useState("");function r({opinion:i}){return m.jsxs("button",{onClick:()=>{S6(i.text),n(i.text)},children:[m.jsx(Ce,{icon:i.emoji})," ",i.text]})}return e===""&&m.jsxs("div",{className:"message",children:[m.jsx("div",{className:"leftside",children:m.jsx("img",{src:Ya,alt:"logo of user"})}),m.jsxs("div",{className:"rightside",children:[m.jsxs("div",{className:"info",children:[m.jsx("h2",{children:"Ally"}),m.jsx("span",{children:"17:40"})]}),m.jsx("p",{children:"Help us develop, give your own opinion about us"}),m.jsx("div",{className:"feedback",children:m.jsx("div",{className:"feedback_buttons",children:t.map((i,s)=>m.jsx(r,{opinion:i},s))})})]})]})}function k6({setHistory:t,id:e,loading:n,history:r,setLoading:i}){const[s,o]=E.useState([]),a=Un(),l=E.useRef(null),[c,u]=E.useState(0),d=Fe.find(f=>f.symbole===window.location.pathname.at(6)).name.toUpperCase();E.useEffect(()=>{(async()=>{await I6(o,e,t)==="back"&&a("/")})()},[e,a,t]),E.useEffect(()=>{(async()=>{u(await ya(d.toUpperCase()))})()},[r]),E.useEffect(()=>{l.current&&l.current.scrollTo({top:l.current.scrollHeight,behavior:"smooth"})},[s]);function h(){return m.jsxs("div",{className:"message wait",children:[m.jsx("div",{className:"leftside",children:m.jsx("img",{src:Ya,alt:"logo of user"})}),m.jsxs("div",{className:"rightside",children:[m.jsx("div",{className:"line"}),m.jsx("div",{className:"line"}),m.jsx("div",{className:"line"})]})]})}return m.jsxs("div",{className:"messages",ref:l,children:[s.map((f,_)=>m.jsx(C6,{message:f,messagePath:e,history:r,setLoading:i,setHistory:t},_)),n?m.jsx(h,{}):null,!n&&c>0&&c%5===0?m.jsx(T6,{}):null]})}function R6({currentChat:t,history:e,setLoading:n,loading:r}){const[i,s]=E.useState(""),[o,a]=E.useState(0),[l,c]=E.useState([]),u=Fe.find(y=>y.symbole===window.location.pathname.at(6)).name.toUpperCase();E.useEffect(()=>{(async()=>{a(await ya(u.toUpperCase()))})()},[e]);const d=y=>{r||Lu(u.toUpperCase(),i,s,y,t,e,n,l,c)},h=y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),d(y))},f=async y=>{const g=y.target.files;c(g?Array.from(g):null)},_=y=>{const g=y.clipboardData.items;for(let p=0;p<g.length;p++)if(g[p].type.startsWith("image/")){const v=g[p].getAsFile();v&&c(C=>[...C,v]);break}},w=Fe.find(y=>y.name.toUpperCase()===u.toUpperCase()).dailyLimit;return m.jsx("div",{className:"input",onPaste:_,children:m.jsxs("form",{className:"content",onSubmit:y=>d(y),children:[m.jsx("input",{id:"upload",type:"file",multiple:!0,accept:"image/*",disabled:r,onClick:()=>l?c([]):null,onChange:f}),u==="ALLY-IMAGINE"?null:m.jsxs("label",{className:l.length>0?"uploaded":"",htmlFor:"upload",children:[l.length>0?m.jsx("span",{children:l.length}):null,m.jsx(Ce,{icon:T2})]}),m.jsx("textarea",{disabled:r||o>=w,onKeyDown:h,type:"text",placeholder:o>=w?"Prompts limit reached for today":r?"Wait for response...":"Ask question",onChange:y=>s(y.target.value),value:i}),m.jsx("button",{disabled:r,children:m.jsx(Ce,{icon:sw})})]})})}function N6(){var a;const t=Ns(),e=Un(),[n,r]=E.useState([]),[i,s]=E.useState(((a=t.state)==null?void 0:a.loading)||!1),{id:o}=Q1();return E.useEffect(()=>{e(`/chat/${o}`,{replace:!0,state:null})},[e,o]),E.useEffect(()=>{n.length===2&&s(!1)},[n]),m.jsxs("section",{className:"chat",children:[m.jsx(y6,{id:o}),m.jsx(k6,{setHistory:r,id:o,loading:i,history:n,setLoading:s}),m.jsx(R6,{currentChat:o,history:n,setLoading:s,loading:i})]})}const P6=["auto","English","Spanish","French","German","Russian","Chinese","Japanese","Korean","Arabic","Portuguese","Italian","Hindi","Bengali","Persian","Punjabi","Vietnamese","Malay","Telugu","Tamil","Marathi","Turkish","Urdu","Indonesian","German","Swedish","Norwegian","Danish","Dutch","Polish","Czech","Slovak","Hungarian","Romanian","Greek","Finnish","Hebrew","Thai","Filipino"];function b6(){const[t,e]=E.useState("Loading..."),[n,r]=E.useState("Loading..."),[i,s]=E.useState(!1),[o,a]=E.useState("auto"),[l,c]=E.useState(""),u=E.useRef(null);E.useEffect(()=>{(async()=>{const g=await Km();e(g.temperature.toString()),r(g.length.toString()),a(g.language),c(g.rules)})()},[]);function d(y){y!==o&&(a(y),s(!1))}const h=()=>{s(!i)},f=()=>{const y=u.current;y&&(y.style.height="auto",y.style.height=`${y.scrollHeight}px`)},_=y=>{c(y.target.value),f()};function w({lang:y}){return m.jsxs("div",{className:`language${y===o&&i?" primary":""}`,onClick:()=>d(y),children:[m.jsx("span",{children:y}),y===o?m.jsx("button",{onClick:()=>h(),children:m.jsx(Ce,{icon:iw})}):null]})}return m.jsxs("div",{className:"container",children:[m.jsx("h2",{children:"Output Settings"}),m.jsxs("div",{className:"list",children:[m.jsx("span",{children:"Temperature"}),m.jsx("p",{children:"temperature controls the randomness of the output. Use higher values for more creative responses, and lower values for more deterministic responses. Values can range from [0.0, 2.0]."}),m.jsx("input",{type:"text",maxLength:1,placeholder:"Values can range from [0.0, 2.0].",value:t,onChange:y=>e(y.target.value)})]}),m.jsxs("div",{className:"list",children:[m.jsx("span",{children:"Output Language"}),m.jsx("p",{children:"Select the language in which you want to receive replies"}),m.jsxs("div",{className:"select_language",children:[m.jsx(w,{lang:o},"English"),i?m.jsx("div",{className:"lang_list",children:P6.filter(y=>y!==o).map((y,g)=>m.jsx(w,{lang:y},g))}):null]})]}),m.jsxs("div",{className:"list",children:[m.jsx("span",{children:"Output Length"}),m.jsx("p",{children:"Control how long the text of the displayed response can be. Values can range from [1024, 8192]"}),m.jsx("input",{type:"text",placeholder:"Values can range from [1024, 8192].",value:n,onChange:y=>r(y.target.value)})]}),m.jsxs("div",{className:"list",children:[m.jsx("span",{children:"Custom Instructions"}),m.jsx("p",{children:"Provide your own rules that AllyAI will follow in each of your chats"}),m.jsxs("div",{className:"rules",children:[m.jsx("textarea",{ref:u,value:l,onChange:_,maxLength:300,type:"text",placeholder:"Your instructions..."}),m.jsx("span",{children:300-l.length})]}),m.jsx("button",{onClick:()=>XM(t,n,e,r,o,a,l,c),children:"SAVE SETTINGS"})]})]})}const A6=()=>{Q.signOut().then(()=>{localStorage.removeItem("user"),window.location.reload()})};function x6(){return m.jsxs("div",{className:"container",children:[m.jsx("h2",{children:"User settings"}),m.jsxs("div",{className:"list",children:[m.jsx("span",{children:"Logout"}),m.jsx("p",{children:"Log out of your account to prevent unwanted authorization."}),m.jsx("button",{onClick:()=>A6(),children:"LOGOUT"})]})]})}function O6(){return m.jsxs("section",{className:"settings",children:[m.jsx(b6,{}),m.jsx(x6,{})]})}function L6(){const t=[{path:"/",element:m.jsx(p6,{})},{path:"/settings",element:m.jsx(O6,{})},{path:"/models",element:m.jsx(v6,{})},{path:"/chat/:id",element:m.jsx(N6,{})}];return m.jsx(t2,{children:t.map((e,n)=>m.jsx(ew,{path:e.path,element:e.element},n))})}function D6({searching:t,setSearching:e,setActivate:n}){return m.jsxs("div",{className:"searchbar",children:[m.jsx("input",{onClick:()=>n(!0),type:"text",placeholder:"Search for chats...",value:t,onChange:r=>e(r.target.value)}),m.jsx("button",{"aria-label":"search",children:m.jsx(Ce,{icon:rw})})]})}function M6({setActivate:t}){const e=[{text:"Models",icon:w2,path:"/models"},{text:"Settings",icon:I2,path:"/settings"},{text:"Chats",icon:p2,path:"/chats"}];function n({button:r}){return r.text!=="Chats"?m.jsx("li",{children:m.jsxs(tw,{className:r!=null&&r.disabled?"disabled":"",to:r.path,children:[m.jsx(Ce,{icon:r.icon})," ",m.jsx("p",{children:r.text})]})}):m.jsx("li",{className:"",children:m.jsxs("a",{onClick:()=>t(!0),children:[m.jsx(Ce,{icon:r.icon})," ",m.jsx("p",{children:r.text})]})})}return m.jsx("ul",{className:"others",children:e.map((r,i)=>m.jsx(n,{button:r},i))})}function F6(){return m.jsx("div",{className:"bottom",children:m.jsxs(tw,{to:"/",className:"createChat",children:[m.jsx(Ce,{icon:R2})," Create new chat"]})})}function U6(t,e){(async()=>{const r=[];for(const i of Fe){const s=i.name,o=await ce.ref(`chats/${Q.currentUser.uid}/${s.toUpperCase()}`).once("value");o.exists()&&o.forEach(a=>{const l=a.key,c=`chats/${Q.currentUser.uid}/${s.toUpperCase()}/${l}/`;ce.ref(`${c}/message_000000`).once("value").then(u=>{const d=u.val(),h={path:l,model:s,firstMessage:d.message.trim().length>=25?`${d.message.trim().slice(0,25)}...`:`${d.message.trim()}`};r.push(h),e([...r])})})}})()}function j6({searching:t,setSearching:e,chatsList:n,setActivate:r}){const i=Un(),s=()=>{r(!1)},o=l=>{s(),i(`/chat/${l.path}`,{state:{loading:!1,model:l.model}})};function a({chat:l}){return m.jsx("div",{className:"chat",onClick:()=>o(l),children:m.jsx("p",{children:l.firstMessage})})}return m.jsxs(m.Fragment,{children:[m.jsx("div",{onClick:()=>s(),className:"blurred-bg"}),m.jsxs("div",{className:"floating_chats",children:[m.jsxs("div",{className:"top",children:[m.jsx("span",{children:m.jsx(Ce,{icon:rw})}),m.jsx("input",{type:"text",value:t,placeholder:"Search for chats...",onChange:l=>e(l.target.value)})]}),m.jsx("div",{className:"list",children:n.filter(l=>l.firstMessage.toLowerCase().includes(t.trim().toLowerCase())).map((l,c)=>m.jsx(a,{chat:l},c))})]})]})}function W6(){const[t,e]=E.useState([]),[n,r]=E.useState(""),[i,s]=E.useState(!1);return E.useEffect(()=>{e([]),U6(t,e)},[i]),m.jsxs("div",{className:"sidebar",children:[m.jsx("div",{className:"top",children:m.jsxs("div",{children:[m.jsx("img",{src:Ya,alt:"logo of app"}),m.jsx("h1",{children:"AllyAI"})]})}),m.jsx(D6,{searching:n,setSearching:r,setActivate:s}),i?m.jsx(j6,{searching:n,setSearching:r,chatsList:t,setActivate:s}):null,m.jsx(M6,{setActivate:s}),m.jsx(F6,{})]})}function MI(t,e,n,r,i,s,o,a){if(t.preventDefault(),e==="login")Q.signInWithEmailAndPassword(n,r).then(async()=>{o(!0);const l={email:n,password:r};localStorage.setItem("user",JSON.stringify(l)),await a(Q.currentUser.emailVerified)}).catch(l=>{l.code==="auth/invalid-email"?i("This email is invalid, try another one"):l.code==="auth/missing-password"?i("The invalid password"):l.code==="auth/invalid-credential"?i("The email or password is wrong, try again"):i(l.code)});else{if(s.trim().length<3){i("The username is too short");return}Q.createUserWithEmailAndPassword(n,r).then(()=>{const l={email:n,password:r,username:s,prompts:{"ALLY-2":0,"ALLY-LIE":0,"ALLY-IMAGINE":0},settings:{temperature:1,length:8192,language:"auto",rules:""}};ce.ref(`users/${Q.currentUser.uid}/`).set(l),o(!0),localStorage.setItem("user",JSON.stringify(l))}).catch(l=>{l.code==="auth/email-already-in-use"?i("This email is already in use, try another one"):l.code==="auth/invalid-email"?i("This email is invalid, try another one"):l.code==="auth/weak-password"?i("The password is too weak, it should be at least 6 characters long"):i(l.code)})}}function z6({setCurrentView:t,setAuthorized:e,setEmailVerified:n}){const[r,i]=E.useState(""),[s,o]=E.useState(""),[a,l]=E.useState("");return m.jsx("section",{className:"auth",children:m.jsxs("div",{className:"auth-container",children:[m.jsxs("div",{className:"auth-left",children:[m.jsx("h2",{children:"Sign In"}),m.jsxs("form",{onSubmit:c=>MI(c,"login",r,s,l,"",e,n),children:[m.jsxs("div",{className:"input-group",children:[m.jsx("label",{children:"EMAIL"}),m.jsx("input",{type:"text",placeholder:"Email...",value:r,onChange:c=>i(c.target.value)})]}),m.jsxs("div",{className:"input-group",children:[m.jsx("label",{children:"PASSWORD"}),m.jsx("input",{type:"password",placeholder:"Password...",value:s,onChange:c=>o(c.target.value)})]}),m.jsx("button",{type:"submit",className:"btn-signin",children:"Sign In"}),a.length>0?m.jsx("span",{children:a}):null]})]}),m.jsxs("div",{className:"auth-right",children:[m.jsx("h2",{children:"Welcome back!"}),m.jsx("p",{children:"Don't have an account?"}),m.jsx("button",{className:"btn-signup",onClick:()=>t("register"),children:"Sign Up"})]})]})})}function B6({setCurrentView:t,setAuthorized:e}){const[n,r]=E.useState(""),[i,s]=E.useState(""),[o,a]=E.useState(""),[l,c]=E.useState("");return m.jsx("section",{className:"auth",children:m.jsxs("div",{className:"auth-container",children:[m.jsxs("div",{className:"auth-left",children:[m.jsx("h2",{children:"Sign Up"}),m.jsxs("form",{onSubmit:u=>MI(u,"register",n,i,c,o,e),children:[m.jsxs("div",{className:"input-group",children:[m.jsx("label",{children:"EMAIL"}),m.jsx("input",{type:"text",placeholder:"Email...",value:n,onChange:u=>r(u.target.value)})]}),m.jsxs("div",{className:"input-group",children:[m.jsx("label",{children:"USERNAME"}),m.jsx("input",{type:"text",placeholder:"Username...",value:o,onChange:u=>a(u.target.value)})]}),m.jsxs("div",{className:"input-group",children:[m.jsx("label",{children:"PASSWORD"}),m.jsx("input",{type:"password",placeholder:"Password...",value:i,onChange:u=>s(u.target.value)})]}),m.jsx("button",{type:"submit",className:"btn-signin",children:"Sign Up"}),l.length>0?m.jsx("span",{children:l}):null]})]}),m.jsxs("div",{className:"auth-right",children:[m.jsx("h2",{children:"Create an account"}),m.jsx("p",{children:"Don't have an account?"}),m.jsx("button",{className:"btn-signup",onClick:()=>t("login"),children:"Sign In"})]})]})})}function V6(){return m.jsx("section",{className:"loading",children:m.jsx("img",{src:Ya,alt:"logo of app"})})}function $6({setAuthorized:t,setEmailVerified:e}){const[n,r]=E.useState("login"),[i]=E.useState(localStorage.getItem("user")),[s,o]=E.useState(!0);return E.useEffect(()=>{if(!i){o(!1);return}const a=JSON.parse(i);Q.signInWithEmailAndPassword(a.email,a.password).then(async()=>{t(!0),e(Q.currentUser.emailVerified),await a6(),o(!1)})},[i]),s?m.jsx(V6,{}):m.jsx(m.Fragment,{children:n==="login"?m.jsx(z6,{setCurrentView:r,setAuthorized:t,setEmailVerified:e}):m.jsx(B6,{setCurrentView:r,setAuthorized:t})})}const H6={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"]},G6=()=>{Q.currentUser.sendEmailVerification()};function Y6(){return m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"blurred-bg"}),m.jsxs("div",{className:"verify_email",children:[m.jsx("div",{className:"top",children:m.jsx("div",{className:"icon",children:m.jsx(Ce,{icon:H6})})}),m.jsxs("div",{className:"info",children:[m.jsx("h2",{children:"Please verify your email"}),m.jsxs("p",{children:["We have sent confirmation to ",m.jsx("strong",{children:Q.currentUser.email}),". Check your email to verify"]})]}),m.jsx("div",{className:"buttons",children:m.jsx("button",{onClick:()=>G6(),children:"Send again"})})]})]})}function K6(){const[t,e]=E.useState(!1),[n,r]=E.useState(!1);return t?m.jsx(m.Fragment,{children:m.jsxs(l2,{children:[m.jsx(W6,{}),n?null:m.jsx(Y6,{}),m.jsx(L6,{})]})}):m.jsx($6,{setAuthorized:e,setEmailVerified:r})}z1(document.getElementById("root")).render(m.jsx(E.StrictMode,{children:m.jsx(K6,{})}));