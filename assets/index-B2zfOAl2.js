(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const kh=()=>{};var pl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=function(i){const e=[];let t=0;for(let a=0;a<i.length;a++){let n=i.charCodeAt(a);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(i.charCodeAt(++a)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},Mh=function(i){const e=[];let t=0,a=0;for(;t<i.length;){const n=i[t++];if(n<128)e[a++]=String.fromCharCode(n);else if(n>191&&n<224){const s=i[t++];e[a++]=String.fromCharCode((n&31)<<6|s&63)}else if(n>239&&n<365){const s=i[t++],o=i[t++],c=i[t++],l=((n&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(l&1023))}else{const s=i[t++],o=i[t++];e[a++]=String.fromCharCode((n&15)<<12|(s&63)<<6|o&63)}}return e.join("")},od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<i.length;n+=3){const s=i[n],o=n+1<i.length,c=o?i[n+1]:0,l=n+2<i.length,d=l?i[n+2]:0,h=s>>2,f=(s&3)<<4|c>>4;let g=(c&15)<<2|d>>6,b=d&63;l||(b=64,o||(g=64)),a.push(t[h],t[f],t[g],t[b])}return a.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(rd(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Mh(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<i.length;){const s=t[i.charAt(n++)],c=n<i.length?t[i.charAt(n)]:0;++n;const d=n<i.length?t[i.charAt(n)]:64;++n;const f=n<i.length?t[i.charAt(n)]:64;if(++n,s==null||c==null||d==null||f==null)throw new Uh;const g=s<<2|c>>4;if(a.push(g),d!==64){const b=c<<4&240|d>>2;if(a.push(b),f!==64){const _=d<<6&192|f;a.push(_)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Uh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dh=function(i){const e=rd(i);return od.encodeByteArray(e,!0)},jn=function(i){return Dh(i).replace(/\./g,"")},cd=function(i){try{return od.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lh=()=>Vh().__FIREBASE_DEFAULTS__,Nh=()=>{if(typeof process>"u"||typeof pl>"u")return;const i=pl.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Oh=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cd(i[1]);return e&&JSON.parse(e)},fs=()=>{try{return kh()||Lh()||Nh()||Oh()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ld=i=>{var e,t;return(t=(e=fs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Fh=i=>{const e=ld(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),a]:[e.substring(0,t),a]},ud=()=>{var i;return(i=fs())===null||i===void 0?void 0:i.config},dd=i=>{var e;return(e=fs())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function md(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Gh(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},a=e||"demo-project",n=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:n,exp:n+3600,auth_time:n,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[jn(JSON.stringify(t)),jn(JSON.stringify(o)),""].join(".")}const qa={};function $h(){const i={prod:[],emulator:[]};for(const e of Object.keys(qa))qa[e]?i.emulator.push(e):i.prod.push(e);return i}function jh(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let fl=!1;function hd(i,e){if(typeof window>"u"||typeof document>"u"||!zi(window.location.host)||qa[i]===e||qa[i]||fl)return;qa[i]=e;function t(g){return`__firebase__banner__${g}`}const a="__firebase__banner",s=$h().prod.length>0;function o(){const g=document.getElementById(a);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,b){g.setAttribute("width","24"),g.setAttribute("id",b),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{fl=!0,o()},g}function h(g,b){g.setAttribute("id",b),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function f(){const g=jh(a),b=t("text"),_=document.getElementById(b)||document.createElement("span"),w=t("learnmore"),q=document.getElementById(w)||document.createElement("a"),U=t("preprendIcon"),N=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const O=g.element;c(O),h(q,w);const J=d();l(N,U),O.append(N,_,q,J),document.body.appendChild(O)}s?(_.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function zh(){var i;const e=(i=fs())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wh(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Kh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qh(){const i=Re();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Xh(){return!zh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yh(){try{return typeof indexedDB=="object"}catch{return!1}}function Zh(){return new Promise((i,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(a),i(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var s;e(((s=n.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="FirebaseError";class _t extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=ep,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],o=s?tp(s,a):"Error",c=`${this.serviceName}: ${o} (${n}).`;return new _t(n,c,a)}}function tp(i,e){return i.replace(ip,(t,a)=>{const n=e[a];return n!=null?String(n):`<${a}?>`})}const ip=/\{\$([^}]+)}/g;function ap(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function $t(i,e){if(i===e)return!0;const t=Object.keys(i),a=Object.keys(e);for(const n of t){if(!a.includes(n))return!1;const s=i[n],o=e[n];if(gl(s)&&gl(o)){if(!$t(s,o))return!1}else if(s!==o)return!1}for(const n of a)if(!t.includes(n))return!1;return!0}function gl(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(i){const e=[];for(const[t,a]of Object.entries(i))Array.isArray(a)?a.forEach(n=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Aa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[n,s]=a.split("=");e[decodeURIComponent(n)]=decodeURIComponent(s)}}),e}function Ca(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function np(i,e){const t=new sp(i,e);return t.subscribe.bind(t)}class sp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let n;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");rp(e,["next","error","complete"])?n=e:n={next:e,error:t,complete:a},n.next===void 0&&(n.next=hr),n.error===void 0&&(n.error=hr),n.complete===void 0&&(n.complete=hr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rp(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function hr(){}/**
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
 */function he(i){return i&&i._delegate?i._delegate:i}class mi{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const oi="[DEFAULT]";/**
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
 */class op{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new Bh;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&a.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lp(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:n});a.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);a===c&&o.resolve(n)}return n}onInit(e,t){var a;const n=this.normalizeInstanceIdentifier(t),s=(a=this.onInitCallbacks.get(n))!==null&&a!==void 0?a:new Set;s.add(e),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&e(o,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const n of a)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:cp(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cp(i){return i===oi?void 0:i}function lp(i){return i.instantiationMode==="EAGER"}/**
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
 */class up{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new op(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(K||(K={}));const dp={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},mp=K.INFO,hp={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},pp=(i,e,...t)=>{if(e<i.logLevel)return;const a=new Date().toISOString(),n=hp[e];if(n)console[n](`[${a}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uo{constructor(e){this.name=e,this._logLevel=mp,this._logHandler=pp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const fp=(i,e)=>e.some(t=>i instanceof t);let vl,bl;function gp(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return bl||(bl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pd=new WeakMap,Pr=new WeakMap,fd=new WeakMap,pr=new WeakMap,mo=new WeakMap;function bp(i){const e=new Promise((t,a)=>{const n=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{t(Nt(i.result)),n()},o=()=>{a(i.error),n()};i.addEventListener("success",s),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pd.set(t,i)}).catch(()=>{}),mo.set(e,i),e}function yp(i){if(Pr.has(i))return;const e=new Promise((t,a)=>{const n=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{t(),n()},o=()=>{a(i.error||new DOMException("AbortError","AbortError")),n()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});Pr.set(i,e)}let Rr={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Pr.get(i);if(e==="objectStoreNames")return i.objectStoreNames||fd.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Ep(i){Rr=i(Rr)}function Ap(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=i.call(fr(this),e,...t);return fd.set(a,e.sort?e.sort():[e]),Nt(a)}:vp().includes(i)?function(...e){return i.apply(fr(this),e),Nt(pd.get(this))}:function(...e){return Nt(i.apply(fr(this),e))}}function Cp(i){return typeof i=="function"?Ap(i):(i instanceof IDBTransaction&&yp(i),fp(i,gp())?new Proxy(i,Rr):i)}function Nt(i){if(i instanceof IDBRequest)return bp(i);if(pr.has(i))return pr.get(i);const e=Cp(i);return e!==i&&(pr.set(i,e),mo.set(e,i)),e}const fr=i=>mo.get(i);function Sp(i,e,{blocked:t,upgrade:a,blocking:n,terminated:s}={}){const o=indexedDB.open(i,e),c=Nt(o);return a&&o.addEventListener("upgradeneeded",l=>{a(Nt(o.result),l.oldVersion,l.newVersion,Nt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),n&&l.addEventListener("versionchange",d=>n(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Tp=["get","getKey","getAll","getAllKeys","count"],_p=["put","add","delete","clear"],gr=new Map;function yl(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(gr.get(e))return gr.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,n=_p.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(n||Tp.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,n?"readwrite":"readonly");let d=l.store;return a&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),n&&l.done]))[0]};return gr.set(e,s),s}Ep(i=>({...i,get:(e,t,a)=>yl(e,t)||i.get(e,t,a),has:(e,t)=>!!yl(e,t)||i.has(e,t)}));/**
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
 */class Ip{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qp(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function qp(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kr="@firebase/app",El="0.13.2";/**
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
 */const yt=new uo("@firebase/app"),xp="@firebase/app-compat",wp="@firebase/analytics-compat",Pp="@firebase/analytics",Rp="@firebase/app-check-compat",kp="@firebase/app-check",Mp="@firebase/auth",Up="@firebase/auth-compat",Dp="@firebase/database",Vp="@firebase/data-connect",Lp="@firebase/database-compat",Np="@firebase/functions",Op="@firebase/functions-compat",Fp="@firebase/installations",Bp="@firebase/installations-compat",Gp="@firebase/messaging",$p="@firebase/messaging-compat",jp="@firebase/performance",Hp="@firebase/performance-compat",zp="@firebase/remote-config",Jp="@firebase/remote-config-compat",Wp="@firebase/storage",Kp="@firebase/storage-compat",Qp="@firebase/firestore",Xp="@firebase/ai",Yp="@firebase/firestore-compat",Zp="firebase",ef="11.10.0";/**
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
 */const Mr="[DEFAULT]",tf={[kr]:"fire-core",[xp]:"fire-core-compat",[Pp]:"fire-analytics",[wp]:"fire-analytics-compat",[kp]:"fire-app-check",[Rp]:"fire-app-check-compat",[Mp]:"fire-auth",[Up]:"fire-auth-compat",[Dp]:"fire-rtdb",[Vp]:"fire-data-connect",[Lp]:"fire-rtdb-compat",[Np]:"fire-fn",[Op]:"fire-fn-compat",[Fp]:"fire-iid",[Bp]:"fire-iid-compat",[Gp]:"fire-fcm",[$p]:"fire-fcm-compat",[jp]:"fire-perf",[Hp]:"fire-perf-compat",[zp]:"fire-rc",[Jp]:"fire-rc-compat",[Wp]:"fire-gcs",[Kp]:"fire-gcs-compat",[Qp]:"fire-fst",[Yp]:"fire-fst-compat",[Xp]:"fire-vertex","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
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
 */const Hn=new Map,af=new Map,Ur=new Map;function Al(i,e){try{i.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Vi(i){const e=i.name;if(Ur.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Ur.set(e,i);for(const t of Hn.values())Al(t,i);for(const t of af.values())Al(t,i);return!0}function ho(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Ge(i){return i==null?!1:i.settings!==void 0}/**
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
 */const nf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new $a("app","Firebase",nf);/**
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
 */class sf{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new mi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Ji=ef;function gd(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const a=Object.assign({name:Mr,automaticDataCollectionEnabled:!0},e),n=a.name;if(typeof n!="string"||!n)throw Ot.create("bad-app-name",{appName:String(n)});if(t||(t=ud()),!t)throw Ot.create("no-options");const s=Hn.get(n);if(s){if($t(t,s.options)&&$t(a,s.config))return s;throw Ot.create("duplicate-app",{appName:n})}const o=new up(n);for(const l of Ur.values())o.addComponent(l);const c=new sf(t,a,o);return Hn.set(n,c),c}function vd(i=Mr){const e=Hn.get(i);if(!e&&i===Mr&&ud())return gd();if(!e)throw Ot.create("no-app",{appName:i});return e}function Ft(i,e,t){var a;let n=(a=tf[i])!==null&&a!==void 0?a:i;t&&(n+=`-${t}`);const s=n.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${n}" with version "${e}":`];s&&c.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(c.join(" "));return}Vi(new mi(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const rf="firebase-heartbeat-database",of=1,Ua="firebase-heartbeat-store";let vr=null;function bd(){return vr||(vr=Sp(rf,of,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ua)}catch(t){console.warn(t)}}}}).catch(i=>{throw Ot.create("idb-open",{originalErrorMessage:i.message})})),vr}async function cf(i){try{const t=(await bd()).transaction(Ua),a=await t.objectStore(Ua).get(yd(i));return await t.done,a}catch(e){if(e instanceof _t)yt.warn(e.message);else{const t=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(t.message)}}}async function Cl(i,e){try{const a=(await bd()).transaction(Ua,"readwrite");await a.objectStore(Ua).put(e,yd(i)),await a.done}catch(t){if(t instanceof _t)yt.warn(t.message);else{const a=Ot.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yt.warn(a.message)}}}function yd(i){return`${i.name}!${i.options.appId}`}/**
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
 */const lf=1024,uf=30;class df{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hf(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>uf){const o=pf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){yt.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sl(),{heartbeatsToSend:a,unsentEntries:n}=mf(this._heartbeatsCache.heartbeats),s=jn(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return yt.warn(t),""}}}function Sl(){return new Date().toISOString().substring(0,10)}function mf(i,e=lf){const t=[];let a=i.slice();for(const n of i){const s=t.find(o=>o.agent===n.agent);if(s){if(s.dates.push(n.date),Tl(t)>e){s.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Tl(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class hf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yh()?Zh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Tl(i){return jn(JSON.stringify({version:2,heartbeats:i})).length}function pf(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let a=1;a<i.length;a++)i[a].date<t&&(t=i[a].date,e=a);return e}/**
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
 */function ff(i){Vi(new mi("platform-logger",e=>new Ip(e),"PRIVATE")),Vi(new mi("heartbeat",e=>new df(e),"PRIVATE")),Ft(kr,El,i),Ft(kr,El,"esm2017"),Ft("fire-js","")}ff("");function po(i,e){var t={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&e.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(i);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(i,a[n])&&(t[a[n]]=i[a[n]]);return t}function Ed(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gf=Ed,Ad=new $a("auth","Firebase",Ed());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new uo("@firebase/auth");function vf(i,...e){zn.logLevel<=K.WARN&&zn.warn(`Auth (${Ji}): ${i}`,...e)}function Rn(i,...e){zn.logLevel<=K.ERROR&&zn.error(`Auth (${Ji}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(i,...e){throw go(i,...e)}function Ye(i,...e){return go(i,...e)}function fo(i,e,t){const a=Object.assign(Object.assign({},gf()),{[e]:t});return new $a("auth","Firebase",a).create(e,{appName:i.name})}function vt(i){return fo(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bf(i,e,t){const a=t;if(!(e instanceof a))throw a.name!==e.constructor.name&&ze(i,"argument-error"),fo(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function go(i,...e){if(typeof i!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(t,...a)}return Ad.create(i,...e)}function B(i,e,...t){if(!i)throw go(e,...t)}function ft(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Rn(e),new Error(e)}function Et(i,e){i||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function yf(){return _l()==="http:"||_l()==="https:"}function _l(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yf()||Wh()||"connection"in navigator)?navigator.onLine:!0}function Af(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,Et(t>e,"Short delay should be less than long delay!"),this.isMobile=Hh()||Kh()}get(){return Ef()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(i,e){Et(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Tf=new Ha(3e4,6e4);function Xt(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function It(i,e,t,a,n={}){return Sd(i,n,async()=>{let s={},o={};a&&(e==="GET"?o=a:s={body:JSON.stringify(a)});const c=ja(Object.assign({key:i.config.apiKey},o)).slice(1),l=await i._getAdditionalHeaders();l["Content-Type"]="application/json",i.languageCode&&(l["X-Firebase-Locale"]=i.languageCode);const d=Object.assign({method:e,headers:l},s);return Jh()||(d.referrerPolicy="no-referrer"),i.emulatorConfig&&zi(i.emulatorConfig.host)&&(d.credentials="include"),Cd.fetch()(await Td(i,i.config.apiHost,t,c),d)})}async function Sd(i,e,t){i._canInitEmulator=!1;const a=Object.assign(Object.assign({},Cf),e);try{const n=new If(i),s=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Tn(i,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tn(i,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tn(i,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tn(i,"user-disabled",o);const h=a[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw fo(i,h,d);ze(i,h)}}catch(n){if(n instanceof _t)throw n;ze(i,"network-request-failed",{message:String(n)})}}async function za(i,e,t,a,n={}){const s=await It(i,e,t,a,n);return"mfaPendingCredential"in s&&ze(i,"multi-factor-auth-required",{_serverResponse:s}),s}async function Td(i,e,t,a){const n=`${e}${t}?${a}`,s=i,o=s.config.emulator?vo(i.config,n):`${i.config.apiScheme}://${n}`;return Sf.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function _f(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class If{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(Ye(this.auth,"network-request-failed")),Tf.get())})}}function Tn(i,e,t){const a={appName:i.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const n=Ye(i,e,a);return n.customData._tokenResponse=t,n}function Il(i){return i!==void 0&&i.enterprise!==void 0}class qf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _f(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xf(i,e){return It(i,"GET","/v2/recaptchaConfig",Xt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(i,e){return It(i,"POST","/v1/accounts:delete",e)}async function Jn(i,e){return It(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pf(i,e=!1){const t=he(i),a=await t.getIdToken(e),n=bo(a);B(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const s=typeof n.firebase=="object"?n.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:n,token:a,authTime:xa(br(n.auth_time)),issuedAtTime:xa(br(n.iat)),expirationTime:xa(br(n.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function br(i){return Number(i)*1e3}function bo(i){const[e,t,a]=i.split(".");if(e===void 0||t===void 0||a===void 0)return Rn("JWT malformed, contained fewer than 3 sections"),null;try{const n=cd(t);return n?JSON.parse(n):(Rn("Failed to decode base64 JWT payload"),null)}catch(n){return Rn("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function ql(i){const e=bo(i);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(i,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof _t&&Rf(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function Rf({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const n=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xa(this.lastLoginAt),this.creationTime=xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wn(i){var e;const t=i.auth,a=await i.getIdToken(),n=await Li(i,Jn(t,{idToken:a}));B(n==null?void 0:n.users.length,t,"internal-error");const s=n.users[0];i._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_d(s.providerUserInfo):[],c=Uf(i.providerData,o),l=i.isAnonymous,d=!(i.email&&s.passwordHash)&&!(c!=null&&c.length),h=l?d:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Vr(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(i,f)}async function Mf(i){const e=he(i);await Wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uf(i,e){return[...i.filter(a=>!e.some(n=>n.providerId===a.providerId)),...e]}function _d(i){return i.map(e=>{var{providerId:t}=e,a=po(e,["providerId"]);return{providerId:t,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(i,e){const t=await Sd(i,{},async()=>{const a=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:s}=i.config,o=await Td(i,n,"/v1/token",`key=${s}`),c=await i._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:a};return i.emulatorConfig&&zi(i.emulatorConfig.host)&&(l.credentials="include"),Cd.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vf(i,e){return It(i,"POST","/v2/accounts:revokeToken",Xt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ql(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=ql(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:n,expiresIn:s}=await Df(e,t);this.updateTokensAndExpiration(a,n,Number(s))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:n,expirationTime:s}=t,o=new Ri;return a&&(B(typeof a=="string","internal-error",{appName:e}),o.refreshToken=a),n&&(B(typeof n=="string","internal-error",{appName:e}),o.accessToken=n),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(i,e){B(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Qe{constructor(e){var{uid:t,auth:a,stsTokenManager:n}=e,s=po(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=a,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Li(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pf(this,e)}reload(){return Mf(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await Wn(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(vt(this.auth));const e=await this.getIdToken();return await Li(this,wf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var a,n,s,o,c,l,d,h;const f=(a=t.displayName)!==null&&a!==void 0?a:void 0,g=(n=t.email)!==null&&n!==void 0?n:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(c=t.tenantId)!==null&&c!==void 0?c:void 0,q=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,U=(d=t.createdAt)!==null&&d!==void 0?d:void 0,N=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:J,isAnonymous:X,providerData:j,stsTokenManager:C}=t;B(O&&C,e,"internal-error");const v=Ri.fromJSON(this.name,C);B(typeof O=="string",e,"internal-error"),kt(f,e.name),kt(g,e.name),B(typeof J=="boolean",e,"internal-error"),B(typeof X=="boolean",e,"internal-error"),kt(b,e.name),kt(_,e.name),kt(w,e.name),kt(q,e.name),kt(U,e.name),kt(N,e.name);const y=new Qe({uid:O,auth:e,email:g,emailVerified:J,displayName:f,isAnonymous:X,photoURL:_,phoneNumber:b,tenantId:w,stsTokenManager:v,createdAt:U,lastLoginAt:N});return j&&Array.isArray(j)&&(y.providerData=j.map(A=>Object.assign({},A))),q&&(y._redirectEventId=q),y}static async _fromIdTokenResponse(e,t,a=!1){const n=new Ri;n.updateFromServerResponse(t);const s=new Qe({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:a});return await Wn(s),s}static async _fromGetAccountInfoResponse(e,t,a){const n=t.users[0];B(n.localId!==void 0,"internal-error");const s=n.providerUserInfo!==void 0?_d(n.providerUserInfo):[],o=!(n.email&&n.passwordHash)&&!(s!=null&&s.length),c=new Ri;c.updateFromIdToken(a);const l=new Qe({uid:n.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new Vr(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map;function gt(i){Et(i instanceof Function,"Expected a class definition");let e=xl.get(i);return e?(Et(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,xl.set(i,e),e)}/**
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
 */class Id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Id.type="NONE";const wl=Id;/**
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
 */function kn(i,e,t){return`firebase:${i}:${e}:${t}`}class ki{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:n,name:s}=this.auth;this.fullUserKey=kn(this.userKey,n.apiKey,s),this.fullPersistenceKey=kn("persistence",n.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Jn(this.auth,{idToken:e}).catch(()=>{});return t?Qe._fromGetAccountInfoResponse(this.auth,t,e):null}return Qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new ki(gt(wl),e,a);const n=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=n[0]||gt(wl);const o=kn(a,e.config.apiKey,e.name);let c=null;for(const d of t)try{const h=await d._get(o);if(h){let f;if(typeof h=="string"){const g=await Jn(e,{idToken:h}).catch(()=>{});if(!g)break;f=await Qe._fromGetAccountInfoResponse(e,g,h)}else f=Qe._fromJSON(e,h);d!==s&&(c=f),s=d;break}}catch{}const l=n.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ki(s,e,a):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new ki(s,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kd(e))return"Blackberry";if(Md(e))return"Webos";if(xd(e))return"Safari";if((e.includes("chrome/")||wd(e))&&!e.includes("edge/"))return"Chrome";if(Rd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(t);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function qd(i=Re()){return/firefox\//i.test(i)}function xd(i=Re()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wd(i=Re()){return/crios\//i.test(i)}function Pd(i=Re()){return/iemobile/i.test(i)}function Rd(i=Re()){return/android/i.test(i)}function kd(i=Re()){return/blackberry/i.test(i)}function Md(i=Re()){return/webos/i.test(i)}function yo(i=Re()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Lf(i=Re()){var e;return yo(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nf(){return Qh()&&document.documentMode===10}function Ud(i=Re()){return yo(i)||Rd(i)||Md(i)||kd(i)||/windows phone/i.test(i)||Pd(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(i,e=[]){let t;switch(i){case"Browser":t=Pl(Re());break;case"Worker":t=`${Pl(Re())}-${i}`;break;default:t=i}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ji}/${a}`}/**
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
 */class Of{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});a.onAbort=t,this.queue.push(a);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function Ff(i,e={}){return It(i,"GET","/v2/passwordPolicy",Xt(i,e))}/**
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
 */const Bf=6;class Gf{constructor(e){var t,a,n,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Bf,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,a,n,s,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(a=l.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(n=l.containsLowercaseLetter)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let a;for(let n=0;n<e.length;n++)a=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,n,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,a,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rl(this),this.idTokenSubscription=new Rl(this),this.beforeStateQueue=new Of(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ad,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var a,n,s;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),(a=this._resolvePersistenceManagerAvailable)===null||a===void 0||a.call(this),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Jn(this,{idToken:e}),a=await Qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(a)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let n=a,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(n=l.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Af()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(vt(this));const t=e?he(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ff(this),t=new Gf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(a.tenantId=this.tenantId),await Vf(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,n){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,a,n);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(t["X-Firebase-Client"]=a);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Yt(i){return he(i)}class Rl{constructor(e){this.auth=e,this.observer=null,this.addObserver=np(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jf(i){gs=i}function Vd(i){return gs.loadJS(i)}function Hf(){return gs.recaptchaEnterpriseScript}function zf(){return gs.gapiScript}function Jf(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Wf{constructor(){this.enterprise=new Kf}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Kf{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Qf="recaptcha-enterprise",Ld="NO_RECAPTCHA";class Xf{constructor(e){this.type=Qf,this.auth=Yt(e)}async verify(e="verify",t=!1){async function a(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{xf(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new qf(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function n(s,o,c){const l=window.grecaptcha;Il(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Ld)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wf().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{a(this.auth).then(c=>{if(!t&&Il(window.grecaptcha))n(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Hf();l.length!==0&&(l+=c),Vd(l).then(()=>{n(c,s,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function kl(i,e,t,a=!1,n=!1){const s=new Xf(i);let o;if(n)o=Ld;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return a?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Lr(i,e,t,a,n){var s;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await kl(i,e,t,t==="getOobCode");return a(i,o)}else return a(i,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await kl(i,e,t,t==="getOobCode");return a(i,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(i,e){const t=ho(i,"auth");if(t.isInitialized()){const n=t.getImmediate(),s=t.getOptions();if($t(s,e??{}))return n;ze(n,"already-initialized")}return t.initialize({options:e})}function Zf(i,e){const t=(e==null?void 0:e.persistence)||[],a=(Array.isArray(t)?t:[t]).map(gt);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function eg(i,e,t){const a=Yt(i);B(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const n=!1,s=Nd(e),{host:o,port:c}=tg(e),l=c===null?"":`:${c}`,d={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!a._canInitEmulator){B(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),B($t(d,a.config.emulator)&&$t(h,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=d,a.emulatorConfig=h,a.settings.appVerificationDisabledForTesting=!0,zi(o)?(md(`${s}//${o}${l}`),hd("Auth",!0)):ig()}function Nd(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function tg(i){const e=Nd(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(a);if(n){const s=n[1];return{host:s,port:Ml(a.substr(s.length+1))}}else{const[s,o]=a.split(":");return{host:s,port:Ml(o)}}}function Ml(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function ig(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function ag(i,e){return It(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(i,e){return za(i,"POST","/v1/accounts:signInWithPassword",Xt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(i,e){return za(i,"POST","/v1/accounts:signInWithEmailLink",Xt(i,e))}async function rg(i,e){return za(i,"POST","/v1/accounts:signInWithEmailLink",Xt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends Eo{constructor(e,t,a,n=null){super("password",a),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Da(e,t,"password")}static _fromEmailAndCode(e,t,a=null){return new Da(e,t,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lr(e,t,"signInWithPassword",ng);case"emailLink":return sg(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const a={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lr(e,a,"signUpPassword",ag);case"emailLink":return rg(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(i,e){return za(i,"POST","/v1/accounts:signInWithIdp",Xt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="http://localhost";class hi extends Eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:n}=t,s=po(t,["providerId","signInMethod"]);if(!a||!n)return null;const o=new hi(a,n);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Mi(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,Mi(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mi(e,t)}buildRequest(){const e={requestUri:og,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ja(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lg(i){const e=Aa(Ca(i)).link,t=e?Aa(Ca(e)).deep_link_id:null,a=Aa(Ca(i)).deep_link_id;return(a?Aa(Ca(a)).link:null)||a||t||e||i}class Ao{constructor(e){var t,a,n,s,o,c;const l=Aa(Ca(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(a=l.oobCode)!==null&&a!==void 0?a:null,f=cg((n=l.mode)!==null&&n!==void 0?n:null);B(d&&h&&f,"argument-error"),this.apiKey=d,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=lg(e);try{return new Ao(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.providerId=Wi.PROVIDER_ID}static credential(e,t){return Da._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const a=Ao.parseLink(t);return B(a,"argument-error"),Da._fromEmailAndCode(e,a.code,a.tenantId)}}Wi.PROVIDER_ID="password";Wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ja extends Co{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Ja{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return pt.credential(t,a)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Ja{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Ja{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return Dt.credential(t,a)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(i,e){return za(i,"POST","/v1/accounts:signUp",Xt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,n=!1){const s=await Qe._fromIdTokenResponse(e,a,n),o=Ul(a);return new pi({user:s,providerId:o,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const n=Ul(a);return new pi({user:e,providerId:n,_tokenResponse:a,operationType:t})}}function Ul(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends _t{constructor(e,t,a,n){var s;super(t.code,t.message),this.operationType=a,this.user=n,Object.setPrototypeOf(this,Kn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,n){return new Kn(e,t,a,n)}}function Od(i,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kn._fromErrorAndOperation(i,s,e,a):s})}async function dg(i,e,t=!1){const a=await Li(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return pi._forOperation(i,"link",a)}/**
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
 */async function mg(i,e,t=!1){const{auth:a}=i;if(Ge(a.app))return Promise.reject(vt(a));const n="reauthenticate";try{const s=await Li(i,Od(a,n,e,i),t);B(s.idToken,a,"internal-error");const o=bo(s.idToken);B(o,a,"internal-error");const{sub:c}=o;return B(i.uid===c,a,"user-mismatch"),pi._forOperation(i,n,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ze(a,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd(i,e,t=!1){if(Ge(i.app))return Promise.reject(vt(i));const a="signIn",n=await Od(i,a,e),s=await pi._fromIdTokenResponse(i,a,n);return t||await i._updateCurrentUser(s.user),s}async function hg(i,e){return Fd(Yt(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(i){const e=Yt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pg(i,e,t){if(Ge(i.app))return Promise.reject(vt(i));const a=Yt(i),o=await Lr(a,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ug).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bd(i),l}),c=await pi._fromIdTokenResponse(a,"signIn",o);return await a._updateCurrentUser(c.user),c}function fg(i,e,t){return Ge(i.app)?Promise.reject(vt(i)):hg(he(i),Wi.credential(e,t)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Bd(i),a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(i,e){return It(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const a=he(i),s={idToken:await a.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Li(a,gg(a.auth,s));a.displayName=o.displayName||null,a.photoURL=o.photoUrl||null;const c=a.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=a.displayName,c.photoURL=a.photoURL),await a._updateTokensIfNecessary(o)}function bg(i,e,t,a){return he(i).onIdTokenChanged(e,t,a)}function yg(i,e,t){return he(i).beforeAuthStateChanged(e,t)}function Eg(i,e,t,a){return he(i).onAuthStateChanged(e,t,a)}function Ag(i){return he(i).signOut()}const Qn="__sak";/**
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
 */class Gd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qn,"1"),this.storage.removeItem(Qn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=1e3,Sg=10;class $d extends Gd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ud(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),n=this.localCache[t];a!==n&&e(t,n,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const a=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const o=this.storage.getItem(a);!t&&this.localCache[a]===o||this.notifyListeners(a,o)},s=this.storage.getItem(a);Nf()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Sg):n()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},Cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$d.type="LOCAL";const Tg=$d;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends Gd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jd.type="SESSION";const Hd=jd;/**
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
 */function _g(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const a=new vs(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:n,data:s}=t.data,o=this.handlersMap[n];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:n});const c=Array.from(o).map(async d=>d(t.origin,s)),l=await _g(c);t.ports[0].postMessage({status:"done",eventId:a,eventType:n,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(i="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class Ig{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const d=So("",20);n.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},a);o={messageChannel:n,onMessage(f){const g=f;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(g.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),n.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[n.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function qg(i){it().location.href=i}/**
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
 */function zd(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function xg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wg(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Pg(){return zd()?self:null}/**
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
 */const Jd="firebaseLocalStorageDb",Rg=1,Xn="firebaseLocalStorage",Wd="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bs(i,e){return i.transaction([Xn],e?"readwrite":"readonly").objectStore(Xn)}function kg(){const i=indexedDB.deleteDatabase(Jd);return new Wa(i).toPromise()}function Nr(){const i=indexedDB.open(Jd,Rg);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(Xn,{keyPath:Wd})}catch(n){t(n)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(Xn)?e(a):(a.close(),await kg(),e(await Nr()))})})}async function Dl(i,e,t){const a=bs(i,!0).put({[Wd]:e,value:t});return new Wa(a).toPromise()}async function Mg(i,e){const t=bs(i,!1).get(e),a=await new Wa(t).toPromise();return a===void 0?null:a.value}function Vl(i,e){const t=bs(i,!0).delete(e);return new Wa(t).toPromise()}const Ug=800,Dg=3;class Kd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>Dg)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(Pg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xg(),!this.activeServiceWorker)return;this.sender=new Ig(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((t=a[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nr();return await Dl(e,Qn,"1"),await Vl(e,Qn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>Dl(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>Mg(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const s=bs(n,!1).getAll();return new Wa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;if(e.length!==0)for(const{fbase_key:n,value:s}of e)a.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(s)&&(this.notifyListeners(n,s),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!a.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kd.type="LOCAL";const Vg=Kd;new Ha(3e4,6e4);/**
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
 */function Qd(i,e){return e?gt(e):(B(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class To extends Eo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lg(i){return Fd(i.auth,new To(i),i.bypassAuthState)}function Ng(i){const{auth:e,user:t}=i;return B(t,e,"internal-error"),mg(t,new To(i),i.bypassAuthState)}async function Og(i){const{auth:e,user:t}=i;return B(t,e,"internal-error"),dg(t,new To(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t,a,n,s=!1){this.auth=e,this.resolver=a,this.user=n,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:n,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:a,tenantId:s||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lg;case"linkViaPopup":case"linkViaRedirect":return Og;case"reauthViaPopup":case"reauthViaRedirect":return Ng;default:ze(this.auth,"internal-error")}}resolve(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Ha(2e3,1e4);async function Bg(i,e,t){if(Ge(i.app))return Promise.reject(Ye(i,"operation-not-supported-in-this-environment"));const a=Yt(i);bf(i,e,Co);const n=Qd(a,t);return new ci(a,"signInViaPopup",e,n).executeNotNull()}class ci extends Xd{constructor(e,t,a,n,s){super(e,t,n,s),this.provider=a,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const e=So();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;if(!((a=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fg.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="pendingRedirect",Mn=new Map;class $g extends Xd{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=Mn.get(this.auth._key());if(!e){try{const a=await jg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}Mn.set(this.auth._key(),e)}return this.bypassAuthState||Mn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jg(i,e){const t=Jg(e),a=zg(i);if(!await a._isAvailable())return!1;const n=await a._get(t)==="true";return await a._remove(t),n}function Hg(i,e){Mn.set(i._key(),e)}function zg(i){return gt(i._redirectPersistence)}function Jg(i){return kn(Gg,i.config.apiKey,i.name)}async function Wg(i,e,t=!1){if(Ge(i.app))return Promise.reject(vt(i));const a=Yt(i),n=Qd(a,e),o=await new $g(a,n,t).execute();return o&&!t&&(delete o.user._redirectEventId,await a._persistUserIfCurrent(o.user),await a._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=10*60*1e3;class Qg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!Yd(e)){const n=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ll(e))}saveEventToCache(e){this.cachedEventUids.add(Ll(e)),this.lastProcessedEventTime=Date.now()}}function Ll(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Yd({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xg(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yd(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(i,e={}){return It(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e2=/^https?/;async function t2(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Yg(i);for(const t of e)try{if(i2(t))return}catch{}ze(i,"unauthorized-domain")}function i2(i){const e=Dr(),{protocol:t,hostname:a}=new URL(e);if(i.startsWith("chrome-extension://")){const o=new URL(i);return o.hostname===""&&a===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===a}if(!e2.test(t))return!1;if(Zg.test(i))return a===i;const n=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(a)}/**
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
 */const a2=new Ha(3e4,6e4);function Nl(){const i=it().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function n2(i){return new Promise((e,t)=>{var a,n,s;function o(){Nl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nl(),t(Ye(i,"network-request-failed"))},timeout:a2.get()})}if(!((n=(a=it().gapi)===null||a===void 0?void 0:a.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((s=it().gapi)===null||s===void 0)&&s.load)o();else{const c=Jf("iframefcb");return it()[c]=()=>{gapi.load?o():t(Ye(i,"network-request-failed"))},Vd(`${zf()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Un=null,e})}let Un=null;function s2(i){return Un=Un||n2(i),Un}/**
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
 */const r2=new Ha(5e3,15e3),o2="__/auth/iframe",c2="emulator/auth/iframe",l2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d2(i){const e=i.config;B(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?vo(e,c2):`https://${i.config.authDomain}/${o2}`,a={apiKey:e.apiKey,appName:i.name,v:Ji},n=u2.get(i.config.apiHost);n&&(a.eid=n);const s=i._getFrameworks();return s.length&&(a.fw=s.join(",")),`${t}?${ja(a).slice(1)}`}async function m2(i){const e=await s2(i),t=it().gapi;return B(t,i,"internal-error"),e.open({where:document.body,url:d2(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l2,dontclear:!0},a=>new Promise(async(n,s)=>{await a.restyle({setHideOnLeave:!1});const o=Ye(i,"network-request-failed"),c=it().setTimeout(()=>{s(o)},r2.get());function l(){it().clearTimeout(c),n(a)}a.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const h2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p2=500,f2=600,g2="_blank",v2="http://localhost";class Ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b2(i,e,t,a=p2,n=f2){const s=Math.max((window.screen.availHeight-n)/2,0).toString(),o=Math.max((window.screen.availWidth-a)/2,0).toString();let c="";const l=Object.assign(Object.assign({},h2),{width:a.toString(),height:n.toString(),top:s,left:o}),d=Re().toLowerCase();t&&(c=wd(d)?g2:t),qd(d)&&(e=e||v2,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[b,_])=>`${g}${b}=${_},`,"");if(Lf(d)&&c!=="_self")return y2(e||"",c),new Ol(null);const f=window.open(e||"",c,h);B(f,i,"popup-blocked");try{f.focus()}catch{}return new Ol(f)}function y2(i,e){const t=document.createElement("a");t.href=i,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
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
 */const E2="__/auth/handler",A2="emulator/auth/handler",C2=encodeURIComponent("fac");async function Fl(i,e,t,a,n,s){B(i.config.authDomain,i,"auth-domain-config-required"),B(i.config.apiKey,i,"invalid-api-key");const o={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:a,v:Ji,eventId:n};if(e instanceof Co){e.setDefaultLanguage(i.languageCode),o.providerId=e.providerId||"",ap(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ja){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}i.tenantId&&(o.tid=i.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await i._getAppCheckToken(),d=l?`#${C2}=${encodeURIComponent(l)}`:"";return`${S2(i)}?${ja(c).slice(1)}${d}`}function S2({config:i}){return i.emulator?vo(i,A2):`https://${i.authDomain}/${E2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="webStorageSupport";class T2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hd,this._completeRedirectFn=Wg,this._overrideRedirectResult=Hg}async _openPopup(e,t,a,n){var s;Et((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Fl(e,t,a,Dr(),n);return b2(e,o,So())}async _openRedirect(e,t,a,n){await this._originValidation(e);const s=await Fl(e,t,a,Dr(),n);return qg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:s}=this.eventManagers[t];return n?Promise.resolve(n):(Et(s,"If manager is not set, promise should be"),s)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await m2(e),a=new Qg(e);return t.register("authEvent",n=>(B(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:a.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yr,{type:yr},n=>{var s;const o=(s=n==null?void 0:n[0])===null||s===void 0?void 0:s[yr];o!==void 0&&t(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=t2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ud()||xd()||yo()}}const _2=T2;var Bl="@firebase/auth",Gl="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function x2(i){Vi(new mi("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=a.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:a.name});const l={apiKey:o,authDomain:c,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dd(i)},d=new $f(a,n,s,l);return Zf(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),Vi(new mi("auth-internal",e=>{const t=Yt(e.getProvider("auth").getImmediate());return(a=>new I2(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Bl,Gl,q2(i)),Ft(Bl,Gl,"esm2017")}/**
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
 */const w2=5*60,P2=dd("authIdTokenMaxAge")||w2;let $l=null;const R2=i=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>P2)return;const n=t==null?void 0:t.token;$l!==n&&($l=n,await fetch(i,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function k2(i=vd()){const e=ho(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Yf(i,{popupRedirectResolver:_2,persistence:[Vg,Tg,Hd]}),a=dd("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(a,location.origin);if(location.origin===s.origin){const o=R2(s.toString());yg(t,o,()=>o(t.currentUser)),bg(t,c=>o(c))}}const n=ld("auth");return n&&eg(t,`http://${n}`),t}function M2(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}jf({loadJS(i){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=e,a.onerror=n=>{const s=Ye("internal-error");s.customData=n,t(s)},a.type="text/javascript",a.charset="UTF-8",M2().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});x2("Browser");var U2="firebase",D2="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(U2,D2,"app");var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bt,Zd;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,v){function y(){}y.prototype=v.prototype,C.D=v.prototype,C.prototype=new y,C.prototype.constructor=C,C.C=function(A,S,I){for(var E=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)E[ct-2]=arguments[ct];return v.prototype[S].apply(A,E)}}function t(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,t),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function n(C,v,y){y||(y=0);var A=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)A[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)A[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=C.g[0],y=C.g[1],S=C.g[2];var I=C.g[3],E=v+(I^y&(S^I))+A[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=I+(S^v&(y^S))+A[1]+3905402710&4294967295,I=v+(E<<12&4294967295|E>>>20),E=S+(y^I&(v^y))+A[2]+606105819&4294967295,S=I+(E<<17&4294967295|E>>>15),E=y+(v^S&(I^v))+A[3]+3250441966&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(I^y&(S^I))+A[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(S^v&(y^S))+A[5]+1200080426&4294967295,I=v+(E<<12&4294967295|E>>>20),E=S+(y^I&(v^y))+A[6]+2821735955&4294967295,S=I+(E<<17&4294967295|E>>>15),E=y+(v^S&(I^v))+A[7]+4249261313&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(I^y&(S^I))+A[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(S^v&(y^S))+A[9]+2336552879&4294967295,I=v+(E<<12&4294967295|E>>>20),E=S+(y^I&(v^y))+A[10]+4294925233&4294967295,S=I+(E<<17&4294967295|E>>>15),E=y+(v^S&(I^v))+A[11]+2304563134&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(I^y&(S^I))+A[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(S^v&(y^S))+A[13]+4254626195&4294967295,I=v+(E<<12&4294967295|E>>>20),E=S+(y^I&(v^y))+A[14]+2792965006&4294967295,S=I+(E<<17&4294967295|E>>>15),E=y+(v^S&(I^v))+A[15]+1236535329&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(S^I&(y^S))+A[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^S&(v^y))+A[6]+3225465664&4294967295,I=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(I^v))+A[11]+643717713&4294967295,S=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(S^I))+A[0]+3921069994&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(S^I&(y^S))+A[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^S&(v^y))+A[10]+38016083&4294967295,I=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(I^v))+A[15]+3634488961&4294967295,S=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(S^I))+A[4]+3889429448&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(S^I&(y^S))+A[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^S&(v^y))+A[14]+3275163606&4294967295,I=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(I^v))+A[3]+4107603335&4294967295,S=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(S^I))+A[8]+1163531501&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(S^I&(y^S))+A[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^S&(v^y))+A[2]+4243563512&4294967295,I=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(I^v))+A[7]+1735328473&4294967295,S=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(S^I))+A[12]+2368359562&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(y^S^I)+A[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^S)+A[8]+2272392833&4294967295,I=v+(E<<11&4294967295|E>>>21),E=S+(I^v^y)+A[11]+1839030562&4294967295,S=I+(E<<16&4294967295|E>>>16),E=y+(S^I^v)+A[14]+4259657740&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(y^S^I)+A[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^S)+A[4]+1272893353&4294967295,I=v+(E<<11&4294967295|E>>>21),E=S+(I^v^y)+A[7]+4139469664&4294967295,S=I+(E<<16&4294967295|E>>>16),E=y+(S^I^v)+A[10]+3200236656&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(y^S^I)+A[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^S)+A[0]+3936430074&4294967295,I=v+(E<<11&4294967295|E>>>21),E=S+(I^v^y)+A[3]+3572445317&4294967295,S=I+(E<<16&4294967295|E>>>16),E=y+(S^I^v)+A[6]+76029189&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(y^S^I)+A[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^S)+A[12]+3873151461&4294967295,I=v+(E<<11&4294967295|E>>>21),E=S+(I^v^y)+A[15]+530742520&4294967295,S=I+(E<<16&4294967295|E>>>16),E=y+(S^I^v)+A[2]+3299628645&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(S^(y|~I))+A[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~S))+A[7]+1126891415&4294967295,I=v+(E<<10&4294967295|E>>>22),E=S+(v^(I|~y))+A[14]+2878612391&4294967295,S=I+(E<<15&4294967295|E>>>17),E=y+(I^(S|~v))+A[5]+4237533241&4294967295,y=S+(E<<21&4294967295|E>>>11),E=v+(S^(y|~I))+A[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~S))+A[3]+2399980690&4294967295,I=v+(E<<10&4294967295|E>>>22),E=S+(v^(I|~y))+A[10]+4293915773&4294967295,S=I+(E<<15&4294967295|E>>>17),E=y+(I^(S|~v))+A[1]+2240044497&4294967295,y=S+(E<<21&4294967295|E>>>11),E=v+(S^(y|~I))+A[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~S))+A[15]+4264355552&4294967295,I=v+(E<<10&4294967295|E>>>22),E=S+(v^(I|~y))+A[6]+2734768916&4294967295,S=I+(E<<15&4294967295|E>>>17),E=y+(I^(S|~v))+A[13]+1309151649&4294967295,y=S+(E<<21&4294967295|E>>>11),E=v+(S^(y|~I))+A[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~S))+A[11]+3174756917&4294967295,I=v+(E<<10&4294967295|E>>>22),E=S+(v^(I|~y))+A[2]+718787259&4294967295,S=I+(E<<15&4294967295|E>>>17),E=y+(I^(S|~v))+A[9]+3951481745&4294967295,C.g[0]=C.g[0]+v&4294967295,C.g[1]=C.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,C.g[2]=C.g[2]+S&4294967295,C.g[3]=C.g[3]+I&4294967295}a.prototype.u=function(C,v){v===void 0&&(v=C.length);for(var y=v-this.blockSize,A=this.B,S=this.h,I=0;I<v;){if(S==0)for(;I<=y;)n(this,C,I),I+=this.blockSize;if(typeof C=="string"){for(;I<v;)if(A[S++]=C.charCodeAt(I++),S==this.blockSize){n(this,A),S=0;break}}else for(;I<v;)if(A[S++]=C[I++],S==this.blockSize){n(this,A),S=0;break}}this.h=S,this.o+=v},a.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var v=1;v<C.length-8;++v)C[v]=0;var y=8*this.o;for(v=C.length-8;v<C.length;++v)C[v]=y&255,y/=256;for(this.u(C),C=Array(16),v=y=0;4>v;++v)for(var A=0;32>A;A+=8)C[y++]=this.g[v]>>>A&255;return C};function s(C,v){var y=c;return Object.prototype.hasOwnProperty.call(y,C)?y[C]:y[C]=v(C)}function o(C,v){this.h=v;for(var y=[],A=!0,S=C.length-1;0<=S;S--){var I=C[S]|0;A&&I==v||(y[S]=I,A=!1)}this.g=y}var c={};function l(C){return-128<=C&&128>C?s(C,function(v){return new o([v|0],0>v?-1:0)}):new o([C|0],0>C?-1:0)}function d(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return q(d(-C));for(var v=[],y=1,A=0;C>=y;A++)v[A]=C/y|0,y*=4294967296;return new o(v,0)}function h(C,v){if(C.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C.charAt(0)=="-")return q(h(C.substring(1),v));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(v,8)),A=f,S=0;S<C.length;S+=8){var I=Math.min(8,C.length-S),E=parseInt(C.substring(S,S+I),v);8>I?(I=d(Math.pow(v,I)),A=A.j(I).add(d(E))):(A=A.j(y),A=A.add(d(E)))}return A}var f=l(0),g=l(1),b=l(16777216);i=o.prototype,i.m=function(){if(w(this))return-q(this).m();for(var C=0,v=1,y=0;y<this.g.length;y++){var A=this.i(y);C+=(0<=A?A:4294967296+A)*v,v*=4294967296}return C},i.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(_(this))return"0";if(w(this))return"-"+q(this).toString(C);for(var v=d(Math.pow(C,6)),y=this,A="";;){var S=J(y,v).g;y=U(y,S.j(v));var I=((0<y.g.length?y.g[0]:y.h)>>>0).toString(C);if(y=S,_(y))return I+A;for(;6>I.length;)I="0"+I;A=I+A}},i.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function _(C){if(C.h!=0)return!1;for(var v=0;v<C.g.length;v++)if(C.g[v]!=0)return!1;return!0}function w(C){return C.h==-1}i.l=function(C){return C=U(this,C),w(C)?-1:_(C)?0:1};function q(C){for(var v=C.g.length,y=[],A=0;A<v;A++)y[A]=~C.g[A];return new o(y,~C.h).add(g)}i.abs=function(){return w(this)?q(this):this},i.add=function(C){for(var v=Math.max(this.g.length,C.g.length),y=[],A=0,S=0;S<=v;S++){var I=A+(this.i(S)&65535)+(C.i(S)&65535),E=(I>>>16)+(this.i(S)>>>16)+(C.i(S)>>>16);A=E>>>16,I&=65535,E&=65535,y[S]=E<<16|I}return new o(y,y[y.length-1]&-2147483648?-1:0)};function U(C,v){return C.add(q(v))}i.j=function(C){if(_(this)||_(C))return f;if(w(this))return w(C)?q(this).j(q(C)):q(q(this).j(C));if(w(C))return q(this.j(q(C)));if(0>this.l(b)&&0>C.l(b))return d(this.m()*C.m());for(var v=this.g.length+C.g.length,y=[],A=0;A<2*v;A++)y[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<C.g.length;S++){var I=this.i(A)>>>16,E=this.i(A)&65535,ct=C.i(S)>>>16,aa=C.i(S)&65535;y[2*A+2*S]+=E*aa,N(y,2*A+2*S),y[2*A+2*S+1]+=I*aa,N(y,2*A+2*S+1),y[2*A+2*S+1]+=E*ct,N(y,2*A+2*S+1),y[2*A+2*S+2]+=I*ct,N(y,2*A+2*S+2)}for(A=0;A<v;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=v;A<2*v;A++)y[A]=0;return new o(y,0)};function N(C,v){for(;(C[v]&65535)!=C[v];)C[v+1]+=C[v]>>>16,C[v]&=65535,v++}function O(C,v){this.g=C,this.h=v}function J(C,v){if(_(v))throw Error("division by zero");if(_(C))return new O(f,f);if(w(C))return v=J(q(C),v),new O(q(v.g),q(v.h));if(w(v))return v=J(C,q(v)),new O(q(v.g),v.h);if(30<C.g.length){if(w(C)||w(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,A=v;0>=A.l(C);)y=X(y),A=X(A);var S=j(y,1),I=j(A,1);for(A=j(A,2),y=j(y,2);!_(A);){var E=I.add(A);0>=E.l(C)&&(S=S.add(y),I=E),A=j(A,1),y=j(y,1)}return v=U(C,S.j(v)),new O(S,v)}for(S=f;0<=C.l(v);){for(y=Math.max(1,Math.floor(C.m()/v.m())),A=Math.ceil(Math.log(y)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),I=d(y),E=I.j(v);w(E)||0<E.l(C);)y-=A,I=d(y),E=I.j(v);_(I)&&(I=g),S=S.add(I),C=U(C,E)}return new O(S,C)}i.A=function(C){return J(this,C).h},i.and=function(C){for(var v=Math.max(this.g.length,C.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)&C.i(A);return new o(y,this.h&C.h)},i.or=function(C){for(var v=Math.max(this.g.length,C.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)|C.i(A);return new o(y,this.h|C.h)},i.xor=function(C){for(var v=Math.max(this.g.length,C.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)^C.i(A);return new o(y,this.h^C.h)};function X(C){for(var v=C.g.length+1,y=[],A=0;A<v;A++)y[A]=C.i(A)<<1|C.i(A-1)>>>31;return new o(y,C.h)}function j(C,v){var y=v>>5;v%=32;for(var A=C.g.length-y,S=[],I=0;I<A;I++)S[I]=0<v?C.i(I+y)>>>v|C.i(I+y+1)<<32-v:C.i(I+y);return new o(S,C.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,Zd=a,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,Bt=o}).apply(typeof jl<"u"?jl:typeof self<"u"?self:typeof window<"u"?window:{});var _n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var em,Sa,tm,Dn,Or,im,am,nm;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,u,m){return r==Array.prototype||r==Object.prototype||(r[u]=m.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof _n=="object"&&_n];for(var u=0;u<r.length;++u){var m=r[u];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var a=t(this);function n(r,u){if(u)e:{var m=a;r=r.split(".");for(var p=0;p<r.length-1;p++){var T=r[p];if(!(T in m))break e;m=m[T]}r=r[r.length-1],p=m[r],u=u(p),u!=p&&u!=null&&e(m,r,{configurable:!0,writable:!0,value:u})}}function s(r,u){r instanceof String&&(r+="");var m=0,p=!1,T={next:function(){if(!p&&m<r.length){var x=m++;return{value:u(x,r[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}n("Array.prototype.values",function(r){return r||function(){return s(this,function(u,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(r){var u=typeof r;return u=u!="object"?u:r?Array.isArray(r)?"array":u:"null",u=="array"||u=="object"&&typeof r.length=="number"}function d(r){var u=typeof r;return u=="object"&&r!=null||u=="function"}function h(r,u,m){return r.call.apply(r.bind,arguments)}function f(r,u,m){if(!r)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),r.apply(u,T)}}return function(){return r.apply(u,arguments)}}function g(r,u,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function b(r,u){var m=Array.prototype.slice.call(arguments,1);return function(){var p=m.slice();return p.push.apply(p,arguments),r.apply(this,p)}}function _(r,u){function m(){}m.prototype=u.prototype,r.aa=u.prototype,r.prototype=new m,r.prototype.constructor=r,r.Qb=function(p,T,x){for(var M=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)M[ie-2]=arguments[ie];return u.prototype[T].apply(p,M)}}function w(r){const u=r.length;if(0<u){const m=Array(u);for(let p=0;p<u;p++)m[p]=r[p];return m}return[]}function q(r,u){for(let m=1;m<arguments.length;m++){const p=arguments[m];if(l(p)){const T=r.length||0,x=p.length||0;r.length=T+x;for(let M=0;M<x;M++)r[T+M]=p[M]}else r.push(p)}}class U{constructor(u,m){this.i=u,this.j=m,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(r){return/^[\s\xa0]*$/.test(r)}function O(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function J(r){return J[" "](r),r}J[" "]=function(){};var X=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function j(r,u,m){for(const p in r)u.call(m,r[p],p,r)}function C(r,u){for(const m in r)u.call(void 0,r[m],m,r)}function v(r){const u={};for(const m in r)u[m]=r[m];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(r,u){let m,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(m in p)r[m]=p[m];for(let x=0;x<y.length;x++)m=y[x],Object.prototype.hasOwnProperty.call(p,m)&&(r[m]=p[m])}}function S(r){var u=1;r=r.split(":");const m=[];for(;0<u&&r.length;)m.push(r.shift()),u--;return r.length&&m.push(r.join(":")),m}function I(r){c.setTimeout(()=>{throw r},0)}function E(){var r=$s;let u=null;return r.g&&(u=r.g,r.g=r.g.next,r.g||(r.h=null),u.next=null),u}class ct{constructor(){this.h=this.g=null}add(u,m){const p=aa.get();p.set(u,m),this.h?this.h.next=p:this.g=p,this.h=p}}var aa=new U(()=>new X0,r=>r.reset());class X0{constructor(){this.next=this.g=this.h=null}set(u,m){this.h=u,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let na,sa=!1,$s=new ct,pc=()=>{const r=c.Promise.resolve(void 0);na=()=>{r.then(Y0)}};var Y0=()=>{for(var r;r=E();){try{r.h.call(r.g)}catch(m){I(m)}var u=aa;u.j(r),100>u.h&&(u.h++,r.next=u.g,u.g=r)}sa=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(r,u){this.type=r,this.g=this.target=u,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Z0=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,u=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const m=()=>{};c.addEventListener("test",m,u),c.removeEventListener("test",m,u)}catch{}return r}();function ra(r,u){if(Te.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var m=this.type=r.type,p=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=u,u=r.relatedTarget){if(X){e:{try{J(u.nodeName);var T=!0;break e}catch{}T=!1}T||(u=null)}}else m=="mouseover"?u=r.fromElement:m=="mouseout"&&(u=r.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:eh[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&ra.aa.h.call(this)}}_(ra,Te);var eh={2:"touch",3:"pen",4:"mouse"};ra.prototype.h=function(){ra.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),th=0;function ih(r,u,m,p,T){this.listener=r,this.proxy=null,this.src=u,this.type=m,this.capture=!!p,this.ha=T,this.key=++th,this.da=this.fa=!1}function rn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function on(r){this.src=r,this.g={},this.h=0}on.prototype.add=function(r,u,m,p,T){var x=r.toString();r=this.g[x],r||(r=this.g[x]=[],this.h++);var M=Hs(r,u,p,T);return-1<M?(u=r[M],m||(u.fa=!1)):(u=new ih(u,this.src,x,!!p,T),u.fa=m,r.push(u)),u};function js(r,u){var m=u.type;if(m in r.g){var p=r.g[m],T=Array.prototype.indexOf.call(p,u,void 0),x;(x=0<=T)&&Array.prototype.splice.call(p,T,1),x&&(rn(u),r.g[m].length==0&&(delete r.g[m],r.h--))}}function Hs(r,u,m,p){for(var T=0;T<r.length;++T){var x=r[T];if(!x.da&&x.listener==u&&x.capture==!!m&&x.ha==p)return T}return-1}var zs="closure_lm_"+(1e6*Math.random()|0),Js={};function fc(r,u,m,p,T){if(Array.isArray(u)){for(var x=0;x<u.length;x++)fc(r,u[x],m,p,T);return null}return m=bc(m),r&&r[sn]?r.K(u,m,d(p)?!!p.capture:!1,T):ah(r,u,m,!1,p,T)}function ah(r,u,m,p,T,x){if(!u)throw Error("Invalid event type");var M=d(T)?!!T.capture:!!T,ie=Ks(r);if(ie||(r[zs]=ie=new on(r)),m=ie.add(u,m,p,M,x),m.proxy)return m;if(p=nh(),m.proxy=p,p.src=r,p.listener=m,r.addEventListener)Z0||(T=M),T===void 0&&(T=!1),r.addEventListener(u.toString(),p,T);else if(r.attachEvent)r.attachEvent(vc(u.toString()),p);else if(r.addListener&&r.removeListener)r.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return m}function nh(){function r(m){return u.call(r.src,r.listener,m)}const u=sh;return r}function gc(r,u,m,p,T){if(Array.isArray(u))for(var x=0;x<u.length;x++)gc(r,u[x],m,p,T);else p=d(p)?!!p.capture:!!p,m=bc(m),r&&r[sn]?(r=r.i,u=String(u).toString(),u in r.g&&(x=r.g[u],m=Hs(x,m,p,T),-1<m&&(rn(x[m]),Array.prototype.splice.call(x,m,1),x.length==0&&(delete r.g[u],r.h--)))):r&&(r=Ks(r))&&(u=r.g[u.toString()],r=-1,u&&(r=Hs(u,m,p,T)),(m=-1<r?u[r]:null)&&Ws(m))}function Ws(r){if(typeof r!="number"&&r&&!r.da){var u=r.src;if(u&&u[sn])js(u.i,r);else{var m=r.type,p=r.proxy;u.removeEventListener?u.removeEventListener(m,p,r.capture):u.detachEvent?u.detachEvent(vc(m),p):u.addListener&&u.removeListener&&u.removeListener(p),(m=Ks(u))?(js(m,r),m.h==0&&(m.src=null,u[zs]=null)):rn(r)}}}function vc(r){return r in Js?Js[r]:Js[r]="on"+r}function sh(r,u){if(r.da)r=!0;else{u=new ra(u,this);var m=r.listener,p=r.ha||r.src;r.fa&&Ws(r),r=m.call(p,u)}return r}function Ks(r){return r=r[zs],r instanceof on?r:null}var Qs="__closure_events_fn_"+(1e9*Math.random()>>>0);function bc(r){return typeof r=="function"?r:(r[Qs]||(r[Qs]=function(u){return r.handleEvent(u)}),r[Qs])}function _e(){xt.call(this),this.i=new on(this),this.M=this,this.F=null}_(_e,xt),_e.prototype[sn]=!0,_e.prototype.removeEventListener=function(r,u,m,p){gc(this,r,u,m,p)};function ke(r,u){var m,p=r.F;if(p)for(m=[];p;p=p.F)m.push(p);if(r=r.M,p=u.type||u,typeof u=="string")u=new Te(u,r);else if(u instanceof Te)u.target=u.target||r;else{var T=u;u=new Te(p,r),A(u,T)}if(T=!0,m)for(var x=m.length-1;0<=x;x--){var M=u.g=m[x];T=cn(M,p,!0,u)&&T}if(M=u.g=r,T=cn(M,p,!0,u)&&T,T=cn(M,p,!1,u)&&T,m)for(x=0;x<m.length;x++)M=u.g=m[x],T=cn(M,p,!1,u)&&T}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var r=this.i,u;for(u in r.g){for(var m=r.g[u],p=0;p<m.length;p++)rn(m[p]);delete r.g[u],r.h--}}this.F=null},_e.prototype.K=function(r,u,m,p){return this.i.add(String(r),u,!1,m,p)},_e.prototype.L=function(r,u,m,p){return this.i.add(String(r),u,!0,m,p)};function cn(r,u,m,p){if(u=r.i.g[String(u)],!u)return!0;u=u.concat();for(var T=!0,x=0;x<u.length;++x){var M=u[x];if(M&&!M.da&&M.capture==m){var ie=M.listener,ye=M.ha||M.src;M.fa&&js(r.i,M),T=ie.call(ye,p)!==!1&&T}}return T&&!p.defaultPrevented}function yc(r,u,m){if(typeof r=="function")m&&(r=g(r,m));else if(r&&typeof r.handleEvent=="function")r=g(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(r,u||0)}function Ec(r){r.g=yc(()=>{r.g=null,r.i&&(r.i=!1,Ec(r))},r.l);const u=r.h;r.h=null,r.m.apply(null,u)}class rh extends xt{constructor(u,m){super(),this.m=u,this.l=m,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ec(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oa(r){xt.call(this),this.h=r,this.g={}}_(oa,xt);var Ac=[];function Cc(r){j(r.g,function(u,m){this.g.hasOwnProperty(m)&&Ws(u)},r),r.g={}}oa.prototype.N=function(){oa.aa.N.call(this),Cc(this)},oa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xs=c.JSON.stringify,oh=c.JSON.parse,ch=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function Ys(){}Ys.prototype.h=null;function Sc(r){return r.h||(r.h=r.i())}function Tc(){}var ca={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zs(){Te.call(this,"d")}_(Zs,Te);function er(){Te.call(this,"c")}_(er,Te);var ai={},_c=null;function ln(){return _c=_c||new _e}ai.La="serverreachability";function Ic(r){Te.call(this,ai.La,r)}_(Ic,Te);function la(r){const u=ln();ke(u,new Ic(u))}ai.STAT_EVENT="statevent";function qc(r,u){Te.call(this,ai.STAT_EVENT,r),this.stat=u}_(qc,Te);function Me(r){const u=ln();ke(u,new qc(u,r))}ai.Ma="timingevent";function xc(r,u){Te.call(this,ai.Ma,r),this.size=u}_(xc,Te);function ua(r,u){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},u)}function da(){this.g=!0}da.prototype.xa=function(){this.g=!1};function lh(r,u,m,p,T,x){r.info(function(){if(r.g)if(x)for(var M="",ie=x.split("&"),ye=0;ye<ie.length;ye++){var Z=ie[ye].split("=");if(1<Z.length){var Ie=Z[0];Z=Z[1];var qe=Ie.split("_");M=2<=qe.length&&qe[1]=="type"?M+(Ie+"="+Z+"&"):M+(Ie+"=redacted&")}}else M=null;else M=x;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+u+`
`+m+`
`+M})}function uh(r,u,m,p,T,x,M){r.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+u+`
`+m+`
`+x+" "+M})}function Ai(r,u,m,p){r.info(function(){return"XMLHTTP TEXT ("+u+"): "+mh(r,m)+(p?" "+p:"")})}function dh(r,u){r.info(function(){return"TIMEOUT: "+u})}da.prototype.info=function(){};function mh(r,u){if(!r.g)return u;if(!u)return null;try{var m=JSON.parse(u);if(m){for(r=0;r<m.length;r++)if(Array.isArray(m[r])){var p=m[r];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var x=T[0];if(x!="noop"&&x!="stop"&&x!="close")for(var M=1;M<T.length;M++)T[M]=""}}}}return Xs(m)}catch{return u}}var un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tr;function dn(){}_(dn,Ys),dn.prototype.g=function(){return new XMLHttpRequest},dn.prototype.i=function(){return{}},tr=new dn;function wt(r,u,m,p){this.j=r,this.i=u,this.l=m,this.R=p||1,this.U=new oa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pc}function Pc(){this.i=null,this.g="",this.h=!1}var Rc={},ir={};function ar(r,u,m){r.L=1,r.v=fn(lt(u)),r.m=m,r.P=!0,kc(r,null)}function kc(r,u){r.F=Date.now(),mn(r),r.A=lt(r.v);var m=r.A,p=r.R;Array.isArray(p)||(p=[String(p)]),zc(m.i,"t",p),r.C=0,m=r.j.J,r.h=new Pc,r.g=ul(r.j,m?u:null,!r.m),0<r.O&&(r.M=new rh(g(r.Y,r,r.g),r.O)),u=r.U,m=r.g,p=r.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ac[0]=T.toString()),T=Ac);for(var x=0;x<T.length;x++){var M=fc(m,T[x],p||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=r.H?v(r.H):{},r.m?(r.u||(r.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,u)):(r.u="GET",r.g.ea(r.A,r.u,null,u)),la(),lh(r.i,r.u,r.A,r.l,r.R,r.m)}wt.prototype.ca=function(r){r=r.target;const u=this.M;u&&ut(r)==3?u.j():this.Y(r)},wt.prototype.Y=function(r){try{if(r==this.g)e:{const qe=ut(this.g);var u=this.g.Ba();const Ti=this.g.Z();if(!(3>qe)&&(qe!=3||this.g&&(this.h.h||this.g.oa()||Zc(this.g)))){this.J||qe!=4||u==7||(u==8||0>=Ti?la(3):la(2)),nr(this);var m=this.g.Z();this.X=m;t:if(Mc(this)){var p=Zc(this.g);r="";var T=p.length,x=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),ma(this);var M="";break t}this.h.i=new c.TextDecoder}for(u=0;u<T;u++)this.h.h=!0,r+=this.h.i.decode(p[u],{stream:!(x&&u==T-1)});p.length=0,this.h.g+=r,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=m==200,uh(this.i,this.u,this.A,this.l,this.R,qe,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,ye=this.g;if((ie=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(ie)){var Z=ie;break t}}Z=null}if(m=Z)Ai(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sr(this,m);else{this.o=!1,this.s=3,Me(12),ni(this),ma(this);break e}}if(this.P){m=!0;let We;for(;!this.J&&this.C<M.length;)if(We=hh(this,M),We==ir){qe==4&&(this.s=4,Me(14),m=!1),Ai(this.i,this.l,null,"[Incomplete Response]");break}else if(We==Rc){this.s=4,Me(15),Ai(this.i,this.l,M,"[Invalid Chunk]"),m=!1;break}else Ai(this.i,this.l,We,null),sr(this,We);if(Mc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qe!=4||M.length!=0||this.h.h||(this.s=1,Me(16),m=!1),this.o=this.o&&m,!m)Ai(this.i,this.l,M,"[Invalid Chunked Response]"),ni(this),ma(this);else if(0<M.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),dr(Ie),Ie.M=!0,Me(11))}}else Ai(this.i,this.l,M,null),sr(this,M);qe==4&&ni(this),this.o&&!this.J&&(qe==4?rl(this.j,this):(this.o=!1,mn(this)))}else Ph(this.g),m==400&&0<M.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),ni(this),ma(this)}}}catch{}finally{}};function Mc(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function hh(r,u){var m=r.C,p=u.indexOf(`
`,m);return p==-1?ir:(m=Number(u.substring(m,p)),isNaN(m)?Rc:(p+=1,p+m>u.length?ir:(u=u.slice(p,p+m),r.C=p+m,u)))}wt.prototype.cancel=function(){this.J=!0,ni(this)};function mn(r){r.S=Date.now()+r.I,Uc(r,r.I)}function Uc(r,u){if(r.B!=null)throw Error("WatchDog timer not null");r.B=ua(g(r.ba,r),u)}function nr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}wt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(dh(this.i,this.A),this.L!=2&&(la(),Me(17)),ni(this),this.s=2,ma(this)):Uc(this,this.S-r)};function ma(r){r.j.G==0||r.J||rl(r.j,r)}function ni(r){nr(r);var u=r.M;u&&typeof u.ma=="function"&&u.ma(),r.M=null,Cc(r.U),r.g&&(u=r.g,r.g=null,u.abort(),u.ma())}function sr(r,u){try{var m=r.j;if(m.G!=0&&(m.g==r||rr(m.h,r))){if(!r.K&&rr(m.h,r)&&m.G==3){try{var p=m.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<r.F)An(m),yn(m);else break e;ur(m),Me(18)}}else m.za=T[1],0<m.za-m.T&&37500>T[2]&&m.F&&m.v==0&&!m.C&&(m.C=ua(g(m.Za,m),6e3));if(1>=Lc(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ri(m,11)}else if((r.K||m.g==r)&&An(m),!N(u))for(T=m.Da.g.parse(u),u=0;u<T.length;u++){let Z=T[u];if(m.T=Z[0],Z=Z[1],m.G==2)if(Z[0]=="c"){m.K=Z[1],m.ia=Z[2];const Ie=Z[3];Ie!=null&&(m.la=Ie,m.j.info("VER="+m.la));const qe=Z[4];qe!=null&&(m.Aa=qe,m.j.info("SVER="+m.Aa));const Ti=Z[5];Ti!=null&&typeof Ti=="number"&&0<Ti&&(p=1.5*Ti,m.L=p,m.j.info("backChannelRequestTimeoutMs_="+p)),p=m;const We=r.g;if(We){const Sn=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sn){var x=p.h;x.g||Sn.indexOf("spdy")==-1&&Sn.indexOf("quic")==-1&&Sn.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(or(x,x.h),x.h=null))}if(p.D){const mr=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;mr&&(p.ya=mr,ne(p.I,p.D,mr))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-r.F,m.j.info("Handshake RTT: "+m.R+"ms")),p=m;var M=r;if(p.qa=ll(p,p.J?p.ia:null,p.W),M.K){Nc(p.h,M);var ie=M,ye=p.L;ye&&(ie.I=ye),ie.B&&(nr(ie),mn(ie)),p.g=M}else nl(p);0<m.i.length&&En(m)}else Z[0]!="stop"&&Z[0]!="close"||ri(m,7);else m.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?ri(m,7):lr(m):Z[0]!="noop"&&m.l&&m.l.ta(Z),m.v=0)}}la(4)}catch{}}var ph=class{constructor(r,u){this.g=r,this.map=u}};function Dc(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vc(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Lc(r){return r.h?1:r.g?r.g.size:0}function rr(r,u){return r.h?r.h==u:r.g?r.g.has(u):!1}function or(r,u){r.g?r.g.add(u):r.h=u}function Nc(r,u){r.h&&r.h==u?r.h=null:r.g&&r.g.has(u)&&r.g.delete(u)}Dc.prototype.cancel=function(){if(this.i=Oc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Oc(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let u=r.i;for(const m of r.g.values())u=u.concat(m.D);return u}return w(r.i)}function fh(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(l(r)){for(var u=[],m=r.length,p=0;p<m;p++)u.push(r[p]);return u}u=[],m=0;for(p in r)u[m++]=r[p];return u}function gh(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(l(r)||typeof r=="string"){var u=[];r=r.length;for(var m=0;m<r;m++)u.push(m);return u}u=[],m=0;for(const p in r)u[m++]=p;return u}}}function Fc(r,u){if(r.forEach&&typeof r.forEach=="function")r.forEach(u,void 0);else if(l(r)||typeof r=="string")Array.prototype.forEach.call(r,u,void 0);else for(var m=gh(r),p=fh(r),T=p.length,x=0;x<T;x++)u.call(void 0,p[x],m&&m[x],r)}var Bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vh(r,u){if(r){r=r.split("&");for(var m=0;m<r.length;m++){var p=r[m].indexOf("="),T=null;if(0<=p){var x=r[m].substring(0,p);T=r[m].substring(p+1)}else x=r[m];u(x,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function si(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof si){this.h=r.h,hn(this,r.j),this.o=r.o,this.g=r.g,pn(this,r.s),this.l=r.l;var u=r.i,m=new fa;m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),Gc(this,m),this.m=r.m}else r&&(u=String(r).match(Bc))?(this.h=!1,hn(this,u[1]||"",!0),this.o=ha(u[2]||""),this.g=ha(u[3]||"",!0),pn(this,u[4]),this.l=ha(u[5]||"",!0),Gc(this,u[6]||"",!0),this.m=ha(u[7]||"")):(this.h=!1,this.i=new fa(null,this.h))}si.prototype.toString=function(){var r=[],u=this.j;u&&r.push(pa(u,$c,!0),":");var m=this.g;return(m||u=="file")&&(r.push("//"),(u=this.o)&&r.push(pa(u,$c,!0),"@"),r.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&r.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&r.push("/"),r.push(pa(m,m.charAt(0)=="/"?Eh:yh,!0))),(m=this.i.toString())&&r.push("?",m),(m=this.m)&&r.push("#",pa(m,Ch)),r.join("")};function lt(r){return new si(r)}function hn(r,u,m){r.j=m?ha(u,!0):u,r.j&&(r.j=r.j.replace(/:$/,""))}function pn(r,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);r.s=u}else r.s=null}function Gc(r,u,m){u instanceof fa?(r.i=u,Sh(r.i,r.h)):(m||(u=pa(u,Ah)),r.i=new fa(u,r.h))}function ne(r,u,m){r.i.set(u,m)}function fn(r){return ne(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function ha(r,u){return r?u?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function pa(r,u,m){return typeof r=="string"?(r=encodeURI(r).replace(u,bh),m&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function bh(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var $c=/[#\/\?@]/g,yh=/[#\?:]/g,Eh=/[#\?]/g,Ah=/[#\?@]/g,Ch=/#/g;function fa(r,u){this.h=this.g=null,this.i=r||null,this.j=!!u}function Pt(r){r.g||(r.g=new Map,r.h=0,r.i&&vh(r.i,function(u,m){r.add(decodeURIComponent(u.replace(/\+/g," ")),m)}))}i=fa.prototype,i.add=function(r,u){Pt(this),this.i=null,r=Ci(this,r);var m=this.g.get(r);return m||this.g.set(r,m=[]),m.push(u),this.h+=1,this};function jc(r,u){Pt(r),u=Ci(r,u),r.g.has(u)&&(r.i=null,r.h-=r.g.get(u).length,r.g.delete(u))}function Hc(r,u){return Pt(r),u=Ci(r,u),r.g.has(u)}i.forEach=function(r,u){Pt(this),this.g.forEach(function(m,p){m.forEach(function(T){r.call(u,T,p,this)},this)},this)},i.na=function(){Pt(this);const r=Array.from(this.g.values()),u=Array.from(this.g.keys()),m=[];for(let p=0;p<u.length;p++){const T=r[p];for(let x=0;x<T.length;x++)m.push(u[p])}return m},i.V=function(r){Pt(this);let u=[];if(typeof r=="string")Hc(this,r)&&(u=u.concat(this.g.get(Ci(this,r))));else{r=Array.from(this.g.values());for(let m=0;m<r.length;m++)u=u.concat(r[m])}return u},i.set=function(r,u){return Pt(this),this.i=null,r=Ci(this,r),Hc(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[u]),this.h+=1,this},i.get=function(r,u){return r?(r=this.V(r),0<r.length?String(r[0]):u):u};function zc(r,u,m){jc(r,u),0<m.length&&(r.i=null,r.g.set(Ci(r,u),w(m)),r.h+=m.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],u=Array.from(this.g.keys());for(var m=0;m<u.length;m++){var p=u[m];const x=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var T=x;M[p]!==""&&(T+="="+encodeURIComponent(String(M[p]))),r.push(T)}}return this.i=r.join("&")};function Ci(r,u){return u=String(u),r.j&&(u=u.toLowerCase()),u}function Sh(r,u){u&&!r.j&&(Pt(r),r.i=null,r.g.forEach(function(m,p){var T=p.toLowerCase();p!=T&&(jc(this,p),zc(this,T,m))},r)),r.j=u}function Th(r,u){const m=new da;if(c.Image){const p=new Image;p.onload=b(Rt,m,"TestLoadImage: loaded",!0,u,p),p.onerror=b(Rt,m,"TestLoadImage: error",!1,u,p),p.onabort=b(Rt,m,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(Rt,m,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=r}else u(!1)}function _h(r,u){const m=new da,p=new AbortController,T=setTimeout(()=>{p.abort(),Rt(m,"TestPingServer: timeout",!1,u)},1e4);fetch(r,{signal:p.signal}).then(x=>{clearTimeout(T),x.ok?Rt(m,"TestPingServer: ok",!0,u):Rt(m,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),Rt(m,"TestPingServer: error",!1,u)})}function Rt(r,u,m,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(m)}catch{}}function Ih(){this.g=new ch}function qh(r,u,m){const p=m||"";try{Fc(r,function(T,x){let M=T;d(T)&&(M=Xs(T)),u.push(p+x+"="+encodeURIComponent(M))})}catch(T){throw u.push(p+"type="+encodeURIComponent("_badmap")),T}}function gn(r){this.l=r.Ub||null,this.j=r.eb||!1}_(gn,Ys),gn.prototype.g=function(){return new vn(this.l,this.j)},gn.prototype.i=function(r){return function(){return r}}({});function vn(r,u){_e.call(this),this.D=r,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(vn,_e),i=vn.prototype,i.open=function(r,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=u,this.readyState=1,va(this)},i.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(u.body=r),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ga(this)),this.readyState=0},i.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,va(this)),this.g&&(this.readyState=3,va(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jc(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jc(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}i.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var u=r.value?r.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!r.done}))&&(this.response=this.responseText+=u)}r.done?ga(this):va(this),this.readyState==3&&Jc(this)}},i.Ra=function(r){this.g&&(this.response=this.responseText=r,ga(this))},i.Qa=function(r){this.g&&(this.response=r,ga(this))},i.ga=function(){this.g&&ga(this)};function ga(r){r.readyState=4,r.l=null,r.j=null,r.v=null,va(r)}i.setRequestHeader=function(r,u){this.u.append(r,u)},i.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],u=this.h.entries();for(var m=u.next();!m.done;)m=m.value,r.push(m[0]+": "+m[1]),m=u.next();return r.join(`\r
`)};function va(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Wc(r){let u="";return j(r,function(m,p){u+=p,u+=":",u+=m,u+=`\r
`}),u}function cr(r,u,m){e:{for(p in m){var p=!1;break e}p=!0}p||(m=Wc(m),typeof r=="string"?m!=null&&encodeURIComponent(String(m)):ne(r,u,m))}function oe(r){_e.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(oe,_e);var xh=/^https?$/i,wh=["POST","PUT"];i=oe.prototype,i.Ha=function(r){this.J=r},i.ea=function(r,u,m,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);u=u?u.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tr.g(),this.v=this.o?Sc(this.o):Sc(tr),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(r),!0),this.B=!1}catch(x){Kc(this,x);return}if(r=m||"",m=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)m.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())m.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(m.keys()).find(x=>x.toLowerCase()=="content-type"),T=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(wh,u,void 0))||p||T||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,M]of m)this.g.setRequestHeader(x,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yc(this),this.u=!0,this.g.send(r),this.u=!1}catch(x){Kc(this,x)}};function Kc(r,u){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=u,r.m=5,Qc(r),bn(r)}function Qc(r){r.A||(r.A=!0,ke(r,"complete"),ke(r,"error"))}i.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,ke(this,"complete"),ke(this,"abort"),bn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),oe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Xc(this):this.bb())},i.bb=function(){Xc(this)};function Xc(r){if(r.h&&typeof o<"u"&&(!r.v[1]||ut(r)!=4||r.Z()!=2)){if(r.u&&ut(r)==4)yc(r.Ea,0,r);else if(ke(r,"readystatechange"),ut(r)==4){r.h=!1;try{const M=r.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var m;if(!(m=u)){var p;if(p=M===0){var T=String(r.D).match(Bc)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),p=!xh.test(T?T.toLowerCase():"")}m=p}if(m)ke(r,"complete"),ke(r,"success");else{r.m=6;try{var x=2<ut(r)?r.g.statusText:""}catch{x=""}r.l=x+" ["+r.Z()+"]",Qc(r)}}finally{bn(r)}}}}function bn(r,u){if(r.g){Yc(r);const m=r.g,p=r.v[0]?()=>{}:null;r.g=null,r.v=null,u||ke(r,"ready");try{m.onreadystatechange=p}catch{}}}function Yc(r){r.I&&(c.clearTimeout(r.I),r.I=null)}i.isActive=function(){return!!this.g};function ut(r){return r.g?r.g.readyState:0}i.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(r){if(this.g){var u=this.g.responseText;return r&&u.indexOf(r)==0&&(u=u.substring(r.length)),oh(u)}};function Zc(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Ph(r){const u={};r=(r.g&&2<=ut(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<r.length;p++){if(N(r[p]))continue;var m=S(r[p]);const T=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const x=u[T]||[];u[T]=x,x.push(m)}C(u,function(p){return p.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ba(r,u,m){return m&&m.internalChannelParams&&m.internalChannelParams[r]||u}function el(r){this.Aa=0,this.i=[],this.j=new da,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ba("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ba("baseRetryDelayMs",5e3,r),this.cb=ba("retryDelaySeedMs",1e4,r),this.Wa=ba("forwardChannelMaxRetries",2,r),this.wa=ba("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Dc(r&&r.concurrentRequestLimit),this.Da=new Ih,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=el.prototype,i.la=8,i.G=1,i.connect=function(r,u,m,p){Me(0),this.W=r,this.H=u||{},m&&p!==void 0&&(this.H.OSID=m,this.H.OAID=p),this.F=this.X,this.I=ll(this,null,this.W),En(this)};function lr(r){if(tl(r),r.G==3){var u=r.U++,m=lt(r.I);if(ne(m,"SID",r.K),ne(m,"RID",u),ne(m,"TYPE","terminate"),ya(r,m),u=new wt(r,r.j,u),u.L=2,u.v=fn(lt(m)),m=!1,c.navigator&&c.navigator.sendBeacon)try{m=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!m&&c.Image&&(new Image().src=u.v,m=!0),m||(u.g=ul(u.j,null),u.g.ea(u.v)),u.F=Date.now(),mn(u)}cl(r)}function yn(r){r.g&&(dr(r),r.g.cancel(),r.g=null)}function tl(r){yn(r),r.u&&(c.clearTimeout(r.u),r.u=null),An(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function En(r){if(!Vc(r.h)&&!r.s){r.s=!0;var u=r.Ga;na||pc(),sa||(na(),sa=!0),$s.add(u,r),r.B=0}}function Rh(r,u){return Lc(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=u.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=ua(g(r.Ga,r,u),ol(r,r.B)),r.B++,!0)}i.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const T=new wt(this,this.j,r);let x=this.o;if(this.S&&(x?(x=v(x),A(x,this.S)):x=this.S),this.m!==null||this.O||(T.H=x,x=null),this.P)e:{for(var u=0,m=0;m<this.i.length;m++){t:{var p=this.i[m];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=m;break e}if(u===4096||m===this.i.length-1){u=m+1;break e}}u=1e3}else u=1e3;u=al(this,T,u),m=lt(this.I),ne(m,"RID",r),ne(m,"CVER",22),this.D&&ne(m,"X-HTTP-Session-Id",this.D),ya(this,m),x&&(this.O?u="headers="+encodeURIComponent(String(Wc(x)))+"&"+u:this.m&&cr(m,this.m,x)),or(this.h,T),this.Ua&&ne(m,"TYPE","init"),this.P?(ne(m,"$req",u),ne(m,"SID","null"),T.T=!0,ar(T,m,null)):ar(T,m,u),this.G=2}}else this.G==3&&(r?il(this,r):this.i.length==0||Vc(this.h)||il(this))};function il(r,u){var m;u?m=u.l:m=r.U++;const p=lt(r.I);ne(p,"SID",r.K),ne(p,"RID",m),ne(p,"AID",r.T),ya(r,p),r.m&&r.o&&cr(p,r.m,r.o),m=new wt(r,r.j,m,r.B+1),r.m===null&&(m.H=r.o),u&&(r.i=u.D.concat(r.i)),u=al(r,m,1e3),m.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),or(r.h,m),ar(m,p,u)}function ya(r,u){r.H&&j(r.H,function(m,p){ne(u,p,m)}),r.l&&Fc({},function(m,p){ne(u,p,m)})}function al(r,u,m){m=Math.min(r.i.length,m);var p=r.l?g(r.l.Na,r.l,r):null;e:{var T=r.i;let x=-1;for(;;){const M=["count="+m];x==-1?0<m?(x=T[0].g,M.push("ofs="+x)):x=0:M.push("ofs="+x);let ie=!0;for(let ye=0;ye<m;ye++){let Z=T[ye].g;const Ie=T[ye].map;if(Z-=x,0>Z)x=Math.max(0,T[ye].g-100),ie=!1;else try{qh(Ie,M,"req"+Z+"_")}catch{p&&p(Ie)}}if(ie){p=M.join("&");break e}}}return r=r.i.splice(0,m),u.D=r,p}function nl(r){if(!r.g&&!r.u){r.Y=1;var u=r.Fa;na||pc(),sa||(na(),sa=!0),$s.add(u,r),r.v=0}}function ur(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=ua(g(r.Fa,r),ol(r,r.v)),r.v++,!0)}i.Fa=function(){if(this.u=null,sl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=ua(g(this.ab,this),r)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),yn(this),sl(this))};function dr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function sl(r){r.g=new wt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var u=lt(r.qa);ne(u,"RID","rpc"),ne(u,"SID",r.K),ne(u,"AID",r.T),ne(u,"CI",r.F?"0":"1"),!r.F&&r.ja&&ne(u,"TO",r.ja),ne(u,"TYPE","xmlhttp"),ya(r,u),r.m&&r.o&&cr(u,r.m,r.o),r.L&&(r.g.I=r.L);var m=r.g;r=r.ia,m.L=1,m.v=fn(lt(u)),m.m=null,m.P=!0,kc(m,r)}i.Za=function(){this.C!=null&&(this.C=null,yn(this),ur(this),Me(19))};function An(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function rl(r,u){var m=null;if(r.g==u){An(r),dr(r),r.g=null;var p=2}else if(rr(r.h,u))m=u.D,Nc(r.h,u),p=1;else return;if(r.G!=0){if(u.o)if(p==1){m=u.m?u.m.length:0,u=Date.now()-u.F;var T=r.B;p=ln(),ke(p,new xc(p,m)),En(r)}else nl(r);else if(T=u.s,T==3||T==0&&0<u.X||!(p==1&&Rh(r,u)||p==2&&ur(r)))switch(m&&0<m.length&&(u=r.h,u.i=u.i.concat(m)),T){case 1:ri(r,5);break;case 4:ri(r,10);break;case 3:ri(r,6);break;default:ri(r,2)}}}function ol(r,u){let m=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(m*=2),m*u}function ri(r,u){if(r.j.info("Error code "+u),u==2){var m=g(r.fb,r),p=r.Xa;const T=!p;p=new si(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hn(p,"https"),fn(p),T?Th(p.toString(),m):_h(p.toString(),m)}else Me(2);r.G=0,r.l&&r.l.sa(u),cl(r),tl(r)}i.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function cl(r){if(r.G=0,r.ka=[],r.l){const u=Oc(r.h);(u.length!=0||r.i.length!=0)&&(q(r.ka,u),q(r.ka,r.i),r.h.i.length=0,w(r.i),r.i.length=0),r.l.ra()}}function ll(r,u,m){var p=m instanceof si?lt(m):new si(m);if(p.g!="")u&&(p.g=u+"."+p.g),pn(p,p.s);else{var T=c.location;p=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;var x=new si(null);p&&hn(x,p),u&&(x.g=u),T&&pn(x,T),m&&(x.l=m),p=x}return m=r.D,u=r.ya,m&&u&&ne(p,m,u),ne(p,"VER",r.la),ya(r,p),p}function ul(r,u,m){if(u&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=r.Ca&&!r.pa?new oe(new gn({eb:m})):new oe(r.pa),u.Ha(r.J),u}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function dl(){}i=dl.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Cn(){}Cn.prototype.g=function(r,u){return new Oe(r,u)};function Oe(r,u){_e.call(this),this.g=new el(u),this.l=r,this.h=u&&u.messageUrlParams||null,r=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(r?r["X-WebChannel-Content-Type"]=u.messageContentType:r={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(r?r["X-WebChannel-Client-Profile"]=u.va:r={"X-WebChannel-Client-Profile":u.va}),this.g.S=r,(r=u&&u.Sb)&&!N(r)&&(this.g.m=r),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!N(u)&&(this.g.D=u,r=this.h,r!==null&&u in r&&(r=this.h,u in r&&delete r[u])),this.j=new Si(this)}_(Oe,_e),Oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){lr(this.g)},Oe.prototype.o=function(r){var u=this.g;if(typeof r=="string"){var m={};m.__data__=r,r=m}else this.u&&(m={},m.__data__=Xs(r),r=m);u.i.push(new ph(u.Ya++,r)),u.G==3&&En(u)},Oe.prototype.N=function(){this.g.l=null,delete this.j,lr(this.g),delete this.g,Oe.aa.N.call(this)};function ml(r){Zs.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var u=r.__sm__;if(u){e:{for(const m in u){r=m;break e}r=void 0}(this.i=r)&&(r=this.i,u=u!==null&&r in u?u[r]:void 0),this.data=u}else this.data=r}_(ml,Zs);function hl(){er.call(this),this.status=1}_(hl,er);function Si(r){this.g=r}_(Si,dl),Si.prototype.ua=function(){ke(this.g,"a")},Si.prototype.ta=function(r){ke(this.g,new ml(r))},Si.prototype.sa=function(r){ke(this.g,new hl)},Si.prototype.ra=function(){ke(this.g,"b")},Cn.prototype.createWebChannel=Cn.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,nm=function(){return new Cn},am=function(){return ln()},im=ai,Or={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},un.NO_ERROR=0,un.TIMEOUT=8,un.HTTP_ERROR=6,Dn=un,wc.COMPLETE="complete",tm=wc,Tc.EventType=ca,ca.OPEN="a",ca.CLOSE="b",ca.ERROR="c",ca.MESSAGE="d",_e.prototype.listen=_e.prototype.K,Sa=Tc,oe.prototype.listenOnce=oe.prototype.L,oe.prototype.getLastError=oe.prototype.Ka,oe.prototype.getLastErrorCode=oe.prototype.Ba,oe.prototype.getStatus=oe.prototype.Z,oe.prototype.getResponseJson=oe.prototype.Oa,oe.prototype.getResponseText=oe.prototype.oa,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Ha,em=oe}).apply(typeof _n<"u"?_n:typeof self<"u"?self:typeof window<"u"?window:{});const Hl="@firebase/firestore",zl="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new uo("@firebase/firestore");function Ii(){return fi.logLevel}function V(i,...e){if(fi.logLevel<=K.DEBUG){const t=e.map(_o);fi.debug(`Firestore (${Ki}): ${i}`,...t)}}function At(i,...e){if(fi.logLevel<=K.ERROR){const t=e.map(_o);fi.error(`Firestore (${Ki}): ${i}`,...t)}}function jt(i,...e){if(fi.logLevel<=K.WARN){const t=e.map(_o);fi.warn(`Firestore (${Ki}): ${i}`,...t)}}function _o(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(i,e,t){let a="Unexpected state";typeof e=="string"?a=e:t=e,sm(i,a,t)}function sm(i,e,t){let a=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{a+=" CONTEXT: "+JSON.stringify(t)}catch{a+=" CONTEXT: "+t}throw At(a),new Error(a)}function ee(i,e,t,a){let n="Unexpected state";typeof t=="string"?n=t:a=t,i||sm(e,n,a)}function z(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class L2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class N2{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0,42304);let a=this.i;const n=l=>this.i!==a?(a=this.i,t(l)):Promise.resolve();let s=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bt,e.enqueueRetryable(()=>n(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await n(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(a=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(ee(typeof a.accessToken=="string",31837,{l:a}),new rm(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string",2055,{h:e}),new we(e)}}class O2{constructor(e,t,a){this.P=e,this.T=t,this.I=a,this.type="FirstParty",this.user=we.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class F2{constructor(e,t,a){this.P=e,this.T=t,this.I=a}getToken(){return Promise.resolve(new O2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ee(this.o===void 0,3512);const a=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>a(s))};const n=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>n(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?n(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Jl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let a=0;a<i;a++)t[a]=Math.floor(256*Math.random());return t}/**
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
 */function om(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const n=G2(40);for(let s=0;s<n.length;++s)a.length<20&&n[s]<t&&(a+=e.charAt(n[s]%62))}return a}}function W(i,e){return i<e?-1:i>e?1:0}function Fr(i,e){let t=0;for(;t<i.length&&t<e.length;){const a=i.codePointAt(t),n=e.codePointAt(t);if(a!==n){if(a<128&&n<128)return W(a,n);{const s=om(),o=$2(s.encode(Wl(i,t)),s.encode(Wl(e,t)));return o!==0?o:W(a,n)}}t+=a>65535?2:1}return W(i.length,e.length)}function Wl(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function $2(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return W(i[t],e[t]);return W(i.length,e.length)}function Ni(i,e,t){return i.length===e.length&&i.every((a,n)=>t(a,e[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="__name__";class tt{constructor(e,t,a){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),a===void 0?a=e.length-t:a>e.length-t&&G(1746,{length:a,range:e.length-t}),this.segments=e,this.offset=t,this.len=a}get length(){return this.len}isEqual(e){return tt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tt?e.forEach(a=>{t.push(a)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,a=this.limit();t<a;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const a=Math.min(e.length,t.length);for(let n=0;n<a;n++){const s=tt.compareSegments(e.get(n),t.get(n));if(s!==0)return s}return W(e.length,t.length)}static compareSegments(e,t){const a=tt.isNumericId(e),n=tt.isNumericId(t);return a&&!n?-1:!a&&n?1:a&&n?tt.extractNumericId(e).compare(tt.extractNumericId(t)):Fr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Bt.fromString(e.substring(4,e.length-2))}}class ae extends tt{construct(e,t,a){return new ae(e,t,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const a of e){if(a.indexOf("//")>=0)throw new D(P.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);t.push(...a.split("/").filter(n=>n.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const j2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends tt{construct(e,t,a){return new Ce(e,t,a)}static isValidIdentifier(e){return j2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kl}static keyField(){return new Ce([Kl])}static fromServerFormat(e){const t=[];let a="",n=0;const s=()=>{if(a.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(a),a=""};let o=!1;for(;n<e.length;){const c=e[n];if(c==="\\"){if(n+1===e.length)throw new D(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[n+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=l,n+=2}else c==="`"?(o=!o,n++):c!=="."||o?(a+=c,n++):(s(),n++)}if(s(),o)throw new D(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(t)}static emptyPath(){return new Ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ae.fromString(e))}static fromName(e){return new F(ae.fromString(e).popFirst(5))}static empty(){return new F(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(i,e,t){if(!t)throw new D(P.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function H2(i,e,t,a){if(e===!0&&a===!0)throw new D(P.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Ql(i){if(!F.isDocumentKey(i))throw new D(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Xl(i){if(F.isDocumentKey(i))throw new D(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function lm(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ys(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":G(12329,{type:typeof i})}function Ne(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new D(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ys(i);throw new D(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ka(i,e){if(!lm(i))throw new D(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const a in e)if(e[a]){const n=e[a].typeString,s="value"in e[a]?{value:e[a].value}:void 0;if(!(a in i)){t=`JSON missing required field: '${a}'`;break}const o=i[a];if(n&&typeof o!==n){t=`JSON field '${a}' must be a ${n}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${a}' field to equal '${s.value}'`;break}}if(t)throw new D(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=-62135596800,Zl=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),a=Math.floor((e-1e3*t)*Zl);return new se(t,a)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yl)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zl}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ka(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:me("string",se._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new se(0,0))}static max(){return new H(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Va=-1;function z2(i,e){const t=i.toTimestamp().seconds,a=i.toTimestamp().nanoseconds+1,n=H.fromTimestamp(a===1e9?new se(t+1,0):new se(t,a));return new Ht(n,F.empty(),e)}function J2(i){return new Ht(i.readTime,i.key,Va)}class Ht{constructor(e,t,a){this.readTime=e,this.documentKey=t,this.largestBatchId=a}static min(){return new Ht(H.min(),F.empty(),Va)}static max(){return new Ht(H.max(),F.empty(),Va)}}function W2(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(i.documentKey,e.documentKey),t!==0?t:W(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(i){if(i.code!==P.FAILED_PRECONDITION||i.message!==K2)throw i;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((a,n)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(a,n)},this.catchCallback=s=>{this.wrapFailure(t,s).next(a,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,a)=>{t(e)})}static reject(e){return new R((t,a)=>{a(e)})}static waitFor(e){return new R((t,a)=>{let n=0,s=0,o=!1;e.forEach(c=>{++n,c.next(()=>{++s,o&&s===n&&t()},l=>a(l))}),o=!0,s===n&&t()})}static or(e){let t=R.resolve(!1);for(const a of e)t=t.next(n=>n?R.resolve(n):a());return t}static forEach(e,t){const a=[];return e.forEach((n,s)=>{a.push(t.call(this,n,s))}),this.waitFor(a)}static mapArray(e,t){return new R((a,n)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const d=l;t(e[d]).next(h=>{o[d]=h,++c,c===s&&a(o)},h=>n(h))}})}static doWhile(e,t){return new R((a,n)=>{const s=()=>{e()===!0?t().next(()=>{s()},n):a()};s()})}}function X2(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xi(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=a=>this._e(a),this.ae=a=>t.writeSequenceNumber(a))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Es.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=-1;function As(i){return i==null}function Yn(i){return i===0&&1/i==-1/0}function Y2(i){return typeof i=="number"&&Number.isInteger(i)&&!Yn(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="";function Z2(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=eu(e)),e=ev(i.get(t),e);return eu(e)}function ev(i,e){let t=e;const a=i.length;for(let n=0;n<a;n++){const s=i.charAt(n);switch(s){case"\0":t+="";break;case um:t+="";break;default:t+=s}}return t}function eu(i){return i+um+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Zt(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function dm(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const a=this.comparator(e,t.key);if(a===0)return t.value;a<0?t=t.left:a>0&&(t=t.right)}return null}indexOf(e){let t=0,a=this.root;for(;!a.isEmpty();){const n=this.comparator(e,a.key);if(n===0)return t+a.left.size;n<0?a=a.left:(t+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,a)=>(e(t,a),!1))}toString(){const e=[];return this.inorderTraversal((t,a)=>(e.push(`${t}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new In(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new In(this.root,e,this.comparator,!1)}getReverseIterator(){return new In(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new In(this.root,e,this.comparator,!0)}}class In{constructor(e,t,a,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?a(e.key,t):1,t&&n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,a,n,s){this.key=e,this.value=t,this.color=a??Ee.RED,this.left=n??Ee.EMPTY,this.right=s??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,a,n,s){return new Ee(e??this.key,t??this.value,a??this.color,n??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let n=this;const s=a(e,n.key);return n=s<0?n.copy(null,null,null,n.left.insert(e,t,a),null):s===0?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,a)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let a,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),t(e,n.key)===0){if(n.right.isEmpty())return Ee.EMPTY;a=n.right.min(),n=n.copy(a.key,a.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,a,n,s){return this}insert(e,t,a){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,a)=>(e(t),!1))}forEachInRange(e,t){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const n=a.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let a;for(a=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iu(this.data.getIterator())}getIteratorFrom(e){return new iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(a=>{t=t.add(a)}),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),a=e.data.getIterator();for(;t.hasNext();){const n=t.getNext().key,s=a.getNext().key;if(this.comparator(n,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new $e([])}unionWith(e){let t=new ge(Ce.comparator);for(const a of this.fields)t=t.add(a);for(const a of e)t=t.add(a);return new $e(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(t,a)=>t.isEqual(a))}}/**
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
 */class mm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mm("Invalid base64 string: "+s):s}}(e);return new Se(t)}static fromUint8Array(e){const t=function(n){let s="";for(let o=0;o<n.length;++o)s+=String.fromCharCode(n[o]);return s}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const tv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(i){if(ee(!!i,39018),typeof i=="string"){let e=0;const t=tv.exec(i);if(ee(!!t,46558,{timestamp:i}),t[1]){let n=t[1];n=(n+"000000000").substr(0,9),e=Number(n)}const a=new Date(i);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:le(i.seconds),nanos:le(i.nanos)}}function le(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Jt(i){return typeof i=="string"?Se.fromBase64String(i):Se.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="server_timestamp",pm="__type__",fm="__previous_value__",gm="__local_write_time__";function xo(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[pm])===null||t===void 0?void 0:t.stringValue)===hm}function Cs(i){const e=i.mapValue.fields[fm];return xo(e)?Cs(e):e}function La(i){const e=zt(i.mapValue.fields[gm].timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,a,n,s,o,c,l,d,h){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=n,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=h}}const Zn="(default)";class Na{constructor(e,t){this.projectId=e,this.database=t||Zn}static empty(){return new Na("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(e){return e instanceof Na&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="__type__",av="__max__",qn={mapValue:{}},bm="__vector__",es="value";function Wt(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?xo(i)?4:sv(i)?9007199254740991:nv(i)?10:11:G(28295,{value:i})}function ot(i,e){if(i===e)return!0;const t=Wt(i);if(t!==Wt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return La(i).isEqual(La(e));case 3:return function(n,s){if(typeof n.timestampValue=="string"&&typeof s.timestampValue=="string"&&n.timestampValue.length===s.timestampValue.length)return n.timestampValue===s.timestampValue;const o=zt(n.timestampValue),c=zt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(n,s){return Jt(n.bytesValue).isEqual(Jt(s.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(n,s){return le(n.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(n.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(i,e);case 2:return function(n,s){if("integerValue"in n&&"integerValue"in s)return le(n.integerValue)===le(s.integerValue);if("doubleValue"in n&&"doubleValue"in s){const o=le(n.doubleValue),c=le(s.doubleValue);return o===c?Yn(o)===Yn(c):isNaN(o)&&isNaN(c)}return!1}(i,e);case 9:return Ni(i.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(n,s){const o=n.mapValue.fields||{},c=s.mapValue.fields||{};if(tu(o)!==tu(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!ot(o[l],c[l])))return!1;return!0}(i,e);default:return G(52216,{left:i})}}function Oa(i,e){return(i.values||[]).find(t=>ot(t,e))!==void 0}function Oi(i,e){if(i===e)return 0;const t=Wt(i),a=Wt(e);if(t!==a)return W(t,a);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(i.booleanValue,e.booleanValue);case 2:return function(s,o){const c=le(s.integerValue||s.doubleValue),l=le(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(i,e);case 3:return au(i.timestampValue,e.timestampValue);case 4:return au(La(i),La(e));case 5:return Fr(i.stringValue,e.stringValue);case 6:return function(s,o){const c=Jt(s),l=Jt(o);return c.compareTo(l)}(i.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const h=W(c[d],l[d]);if(h!==0)return h}return W(c.length,l.length)}(i.referenceValue,e.referenceValue);case 8:return function(s,o){const c=W(le(s.latitude),le(o.latitude));return c!==0?c:W(le(s.longitude),le(o.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return nu(i.arrayValue,e.arrayValue);case 10:return function(s,o){var c,l,d,h;const f=s.fields||{},g=o.fields||{},b=(c=f[es])===null||c===void 0?void 0:c.arrayValue,_=(l=g[es])===null||l===void 0?void 0:l.arrayValue,w=W(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return w!==0?w:nu(b,_)}(i.mapValue,e.mapValue);case 11:return function(s,o){if(s===qn.mapValue&&o===qn.mapValue)return 0;if(s===qn.mapValue)return 1;if(o===qn.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),d=o.fields||{},h=Object.keys(d);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const g=Fr(l[f],h[f]);if(g!==0)return g;const b=Oi(c[l[f]],d[h[f]]);if(b!==0)return b}return W(l.length,h.length)}(i.mapValue,e.mapValue);default:throw G(23264,{le:t})}}function au(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return W(i,e);const t=zt(i),a=zt(e),n=W(t.seconds,a.seconds);return n!==0?n:W(t.nanos,a.nanos)}function nu(i,e){const t=i.values||[],a=e.values||[];for(let n=0;n<t.length&&n<a.length;++n){const s=Oi(t[n],a[n]);if(s)return s}return W(t.length,a.length)}function Fi(i){return Br(i)}function Br(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const a=zt(t);return`time(${a.seconds},${a.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Jt(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return F.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let a="[",n=!0;for(const s of t.values||[])n?n=!1:a+=",",a+=Br(s);return a+"]"}(i.arrayValue):"mapValue"in i?function(t){const a=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const o of a)s?s=!1:n+=",",n+=`${o}:${Br(t.fields[o])}`;return n+"}"}(i.mapValue):G(61005,{value:i})}function Vn(i){switch(Wt(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cs(i);return e?16+Vn(e):16;case 5:return 2*i.stringValue.length;case 6:return Jt(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((n,s)=>n+Vn(s),0)}(i.arrayValue);case 10:case 11:return function(a){let n=0;return Zt(a.fields,(s,o)=>{n+=s.length+Vn(o)}),n}(i.mapValue);default:throw G(13486,{value:i})}}function su(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Gr(i){return!!i&&"integerValue"in i}function wo(i){return!!i&&"arrayValue"in i}function ru(i){return!!i&&"nullValue"in i}function ou(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Ln(i){return!!i&&"mapValue"in i}function nv(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[vm])===null||t===void 0?void 0:t.stringValue)===bm}function wa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Zt(i.mapValue.fields,(t,a)=>e.mapValue.fields[t]=wa(a)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function sv(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===av}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let a=0;a<e.length-1;++a)if(t=(t.mapValue.fields||{})[e.get(a)],!Ln(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wa(t)}setAll(e){let t=Ce.emptyPath(),a={},n=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,a,n),a={},n=[],t=c.popLast()}o?a[c.lastSegment()]=wa(o):n.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,a,n)}delete(e){const t=this.field(e.popLast());Ln(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let a=0;a<e.length;++a){let n=t.mapValue.fields[e.get(a)];Ln(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(a)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,a){Zt(t,(n,s)=>e[n]=s);for(const n of a)delete e[n]}clone(){return new Ve(wa(this.value))}}function ym(i){const e=[];return Zt(i.fields,(t,a)=>{const n=new Ce([t]);if(Ln(a)){const s=ym(a.mapValue).fields;if(s.length===0)e.push(n);else for(const o of s)e.push(n.child(o))}else e.push(n)}),new $e(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,a,n,s,o,c){this.key=e,this.documentType=t,this.version=a,this.readTime=n,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Pe(e,0,H.min(),H.min(),H.min(),Ve.empty(),0)}static newFoundDocument(e,t,a,n){return new Pe(e,1,t,H.min(),a,n,0)}static newNoDocument(e,t){return new Pe(e,2,t,H.min(),H.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,H.min(),H.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ts{constructor(e,t){this.position=e,this.inclusive=t}}function cu(i,e,t){let a=0;for(let n=0;n<i.position.length;n++){const s=e[n],o=i.position[n];if(s.field.isKeyField()?a=F.comparator(F.fromName(o.referenceValue),t.key):a=Oi(o,t.data.field(s.field)),s.dir==="desc"&&(a*=-1),a!==0)break}return a}function lu(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ot(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class is{constructor(e,t="asc"){this.field=e,this.dir=t}}function rv(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Em{}class de extends Em{constructor(e,t,a){super(),this.field=e,this.op=t,this.value=a}static create(e,t,a){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,a):new cv(e,t,a):t==="array-contains"?new dv(e,a):t==="in"?new mv(e,a):t==="not-in"?new hv(e,a):t==="array-contains-any"?new pv(e,a):new de(e,t,a)}static createKeyFieldInFilter(e,t,a){return t==="in"?new lv(e,a):new uv(e,a)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Oi(t,this.value)):t!==null&&Wt(this.value)===Wt(t)&&this.matchesComparison(Oi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends Em{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ze(e,t)}matches(e){return Am(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Am(i){return i.op==="and"}function Cm(i){return ov(i)&&Am(i)}function ov(i){for(const e of i.filters)if(e instanceof Ze)return!1;return!0}function $r(i){if(i instanceof de)return i.field.canonicalString()+i.op.toString()+Fi(i.value);if(Cm(i))return i.filters.map(e=>$r(e)).join(",");{const e=i.filters.map(t=>$r(t)).join(",");return`${i.op}(${e})`}}function Sm(i,e){return i instanceof de?function(a,n){return n instanceof de&&a.op===n.op&&a.field.isEqual(n.field)&&ot(a.value,n.value)}(i,e):i instanceof Ze?function(a,n){return n instanceof Ze&&a.op===n.op&&a.filters.length===n.filters.length?a.filters.reduce((s,o,c)=>s&&Sm(o,n.filters[c]),!0):!1}(i,e):void G(19439)}function Tm(i){return i instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${Fi(t.value)}`}(i):i instanceof Ze?function(t){return t.op.toString()+" {"+t.getFilters().map(Tm).join(" ,")+"}"}(i):"Filter"}class cv extends de{constructor(e,t,a){super(e,t,a),this.key=F.fromName(a.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class lv extends de{constructor(e,t){super(e,"in",t),this.keys=_m("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uv extends de{constructor(e,t){super(e,"not-in",t),this.keys=_m("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function _m(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(a=>F.fromName(a.referenceValue))}class dv extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wo(t)&&Oa(t.arrayValue,this.value)}}class mv extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oa(this.value.arrayValue,t)}}class hv extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Oa(this.value.arrayValue,t)}}class pv extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(a=>Oa(this.value.arrayValue,a))}}/**
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
 */class fv{constructor(e,t=null,a=[],n=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=a,this.filters=n,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}}function uu(i,e=null,t=[],a=[],n=null,s=null,o=null){return new fv(i,e,t,a,n,s,o)}function Po(i){const e=z(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(a=>$r(a)).join(","),t+="|ob:",t+=e.orderBy.map(a=>function(s){return s.field.canonicalString()+s.dir}(a)).join(","),As(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(a=>Fi(a)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(a=>Fi(a)).join(",")),e.Pe=t}return e.Pe}function Ro(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!rv(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Sm(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!lu(i.startAt,e.startAt)&&lu(i.endAt,e.endAt)}function jr(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t=null,a=[],n=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=a,this.filters=n,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function gv(i,e,t,a,n,s,o,c){return new Qa(i,e,t,a,n,s,o,c)}function Ss(i){return new Qa(i)}function du(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Im(i){return i.collectionGroup!==null}function Pa(i){const e=z(i);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ge(Ce.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new is(s,a))}),t.has(Ce.keyField().canonicalString())||e.Te.push(new is(Ce.keyField(),a))}return e.Te}function at(i){const e=z(i);return e.Ie||(e.Ie=vv(e,Pa(i))),e.Ie}function vv(i,e){if(i.limitType==="F")return uu(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(n=>{const s=n.dir==="desc"?"asc":"desc";return new is(n.field,s)});const t=i.endAt?new ts(i.endAt.position,i.endAt.inclusive):null,a=i.startAt?new ts(i.startAt.position,i.startAt.inclusive):null;return uu(i.path,i.collectionGroup,e,i.filters,i.limit,t,a)}}function Hr(i,e){const t=i.filters.concat([e]);return new Qa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function zr(i,e,t){return new Qa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Ts(i,e){return Ro(at(i),at(e))&&i.limitType===e.limitType}function qm(i){return`${Po(at(i))}|lt:${i.limitType}`}function qi(i){return`Query(target=${function(t){let a=t.path.canonicalString();return t.collectionGroup!==null&&(a+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(a+=`, filters: [${t.filters.map(n=>Tm(n)).join(", ")}]`),As(t.limit)||(a+=", limit: "+t.limit),t.orderBy.length>0&&(a+=`, orderBy: [${t.orderBy.map(n=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(n)).join(", ")}]`),t.startAt&&(a+=", startAt: ",a+=t.startAt.inclusive?"b:":"a:",a+=t.startAt.position.map(n=>Fi(n)).join(",")),t.endAt&&(a+=", endAt: ",a+=t.endAt.inclusive?"a:":"b:",a+=t.endAt.position.map(n=>Fi(n)).join(",")),`Target(${a})`}(at(i))}; limitType=${i.limitType})`}function _s(i,e){return e.isFoundDocument()&&function(a,n){const s=n.key.path;return a.collectionGroup!==null?n.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(s):F.isDocumentKey(a.path)?a.path.isEqual(s):a.path.isImmediateParentOf(s)}(i,e)&&function(a,n){for(const s of Pa(a))if(!s.field.isKeyField()&&n.data.field(s.field)===null)return!1;return!0}(i,e)&&function(a,n){for(const s of a.filters)if(!s.matches(n))return!1;return!0}(i,e)&&function(a,n){return!(a.startAt&&!function(o,c,l){const d=cu(o,c,l);return o.inclusive?d<=0:d<0}(a.startAt,Pa(a),n)||a.endAt&&!function(o,c,l){const d=cu(o,c,l);return o.inclusive?d>=0:d>0}(a.endAt,Pa(a),n))}(i,e)}function bv(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function xm(i){return(e,t)=>{let a=!1;for(const n of Pa(i)){const s=yv(n,e,t);if(s!==0)return s;a=a||n.field.isKeyField()}return 0}}function yv(i,e,t){const a=i.field.isKeyField()?F.comparator(e.key,t.key):function(s,o,c){const l=o.data.field(s),d=c.data.field(s);return l!==null&&d!==null?Oi(l,d):G(42886)}(i.field,e,t);switch(i.dir){case"asc":return a;case"desc":return-1*a;default:return G(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a!==void 0){for(const[n,s]of a)if(this.equalsFn(n,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const a=this.mapKeyFn(e),n=this.inner[a];if(n===void 0)return this.inner[a]=[[e,t]],void this.innerSize++;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return void(n[s]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a===void 0)return!1;for(let n=0;n<a.length;n++)if(this.equalsFn(a[n][0],e))return a.length===1?delete this.inner[t]:a.splice(n,1),this.innerSize--,!0;return!1}forEach(e){Zt(this.inner,(t,a)=>{for(const[n,s]of a)e(n,s)})}isEmpty(){return dm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=new re(F.comparator);function Ct(){return Ev}const wm=new re(F.comparator);function Ta(...i){let e=wm;for(const t of i)e=e.insert(t.key,t);return e}function Pm(i){let e=wm;return i.forEach((t,a)=>e=e.insert(t,a.overlayedDocument)),e}function li(){return Ra()}function Rm(){return Ra()}function Ra(){return new vi(i=>i.toString(),(i,e)=>i.isEqual(e))}const Av=new re(F.comparator),Cv=new ge(F.comparator);function Q(...i){let e=Cv;for(const t of i)e=e.add(t);return e}const Sv=new ge(W);function Tv(){return Sv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yn(e)?"-0":e}}function km(i){return{integerValue:""+i}}function _v(i,e){return Y2(e)?km(e):ko(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this._=void 0}}function Iv(i,e,t){return i instanceof Fa?function(n,s){const o={fields:{[pm]:{stringValue:hm},[gm]:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return s&&xo(s)&&(s=Cs(s)),s&&(o.fields[fm]=s),{mapValue:o}}(t,e):i instanceof Bi?Um(i,e):i instanceof Ba?Dm(i,e):function(n,s){const o=Mm(n,s),c=mu(o)+mu(n.Ee);return Gr(o)&&Gr(n.Ee)?km(c):ko(n.serializer,c)}(i,e)}function qv(i,e,t){return i instanceof Bi?Um(i,e):i instanceof Ba?Dm(i,e):t}function Mm(i,e){return i instanceof as?function(a){return Gr(a)||function(s){return!!s&&"doubleValue"in s}(a)}(e)?e:{integerValue:0}:null}class Fa extends Is{}class Bi extends Is{constructor(e){super(),this.elements=e}}function Um(i,e){const t=Vm(e);for(const a of i.elements)t.some(n=>ot(n,a))||t.push(a);return{arrayValue:{values:t}}}class Ba extends Is{constructor(e){super(),this.elements=e}}function Dm(i,e){let t=Vm(e);for(const a of i.elements)t=t.filter(n=>!ot(n,a));return{arrayValue:{values:t}}}class as extends Is{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function mu(i){return le(i.integerValue||i.doubleValue)}function Vm(i){return wo(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t){this.field=e,this.transform=t}}function xv(i,e){return i.field.isEqual(e.field)&&function(a,n){return a instanceof Bi&&n instanceof Bi||a instanceof Ba&&n instanceof Ba?Ni(a.elements,n.elements,ot):a instanceof as&&n instanceof as?ot(a.Ee,n.Ee):a instanceof Fa&&n instanceof Fa}(i.transform,e.transform)}class wv{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nn(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class qs{}function Nm(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Mo(i.key,He.none()):new Xa(i.key,i.data,He.none());{const t=i.data,a=Ve.empty();let n=new ge(Ce.comparator);for(let s of e.fields)if(!n.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?a.delete(s):a.set(s,o),n=n.add(s)}return new ei(i.key,a,new $e(n.toArray()),He.none())}}function Pv(i,e,t){i instanceof Xa?function(n,s,o){const c=n.value.clone(),l=pu(n.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(i,e,t):i instanceof ei?function(n,s,o){if(!Nn(n.precondition,s))return void s.convertToUnknownDocument(o.version);const c=pu(n.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Om(n)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,e,t):function(n,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ka(i,e,t,a){return i instanceof Xa?function(s,o,c,l){if(!Nn(s.precondition,o))return c;const d=s.value.clone(),h=fu(s.fieldTransforms,l,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(i,e,t,a):i instanceof ei?function(s,o,c,l){if(!Nn(s.precondition,o))return c;const d=fu(s.fieldTransforms,l,o),h=o.data;return h.setAll(Om(s)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(i,e,t,a):function(s,o,c){return Nn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(i,e,t)}function Rv(i,e){let t=null;for(const a of i.fieldTransforms){const n=e.data.field(a.field),s=Mm(a.transform,n||null);s!=null&&(t===null&&(t=Ve.empty()),t.set(a.field,s))}return t||null}function hu(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(a,n){return a===void 0&&n===void 0||!(!a||!n)&&Ni(a,n,(s,o)=>xv(s,o))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Xa extends qs{constructor(e,t,a,n=[]){super(),this.key=e,this.value=t,this.precondition=a,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class ei extends qs{constructor(e,t,a,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=a,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Om(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const a=i.data.field(t);e.set(t,a)}}),e}function pu(i,e,t){const a=new Map;ee(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let n=0;n<t.length;n++){const s=i[n],o=s.transform,c=e.data.field(s.field);a.set(s.field,qv(o,c,t[n]))}return a}function fu(i,e,t){const a=new Map;for(const n of i){const s=n.transform,o=t.data.field(n.field);a.set(n.field,Iv(s,o,e))}return a}class Mo extends qs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kv extends qs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,t,a,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=a,this.mutations=n}applyToRemoteDocument(e,t){const a=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const s=this.mutations[n];s.key.isEqual(e.key)&&Pv(s,e,a[n])}}applyToLocalView(e,t){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(t=ka(a,e,t,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(t=ka(a,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const a=Rm();return this.mutations.forEach(n=>{const s=e.get(n.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(n.key)?null:c;const l=Nm(o,c);l!==null&&a.set(n.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),a}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(t,a)=>hu(t,a))&&Ni(this.baseMutations,e.baseMutations,(t,a)=>hu(t,a))}}class Uo{constructor(e,t,a,n){this.batch=e,this.commitVersion=t,this.mutationResults=a,this.docVersions=n}static from(e,t,a){ee(e.mutations.length===a.length,58842,{Ve:e.mutations.length,me:a.length});let n=function(){return Av}();const s=e.mutations;for(let o=0;o<s.length;o++)n=n.insert(s[o].key,a[o].version);return new Uo(e,t,a,n)}}/**
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
 */class Uv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Y;function Vv(i){switch(i){case P.OK:return G(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return G(15467,{code:i})}}function Fm(i){if(i===void 0)return At("GRPC error has no .code"),P.UNKNOWN;switch(i){case ue.OK:return P.OK;case ue.CANCELLED:return P.CANCELLED;case ue.UNKNOWN:return P.UNKNOWN;case ue.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ue.INTERNAL:return P.INTERNAL;case ue.UNAVAILABLE:return P.UNAVAILABLE;case ue.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ue.NOT_FOUND:return P.NOT_FOUND;case ue.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ue.ABORTED:return P.ABORTED;case ue.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ue.DATA_LOSS:return P.DATA_LOSS;default:return G(39323,{code:i})}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Lv=new Bt([4294967295,4294967295],0);function gu(i){const e=om().encode(i),t=new Zd;return t.update(e),new Uint8Array(t.digest())}function vu(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),a=e.getUint32(4,!0),n=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Bt([t,a],0),new Bt([n,s],0)]}class Do{constructor(e,t,a){if(this.bitmap=e,this.padding=t,this.hashCount=a,t<0||t>=8)throw new _a(`Invalid padding: ${t}`);if(a<0)throw new _a(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${a}`);if(e.length===0&&t!==0)throw new _a(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Bt.fromNumber(this.fe)}pe(e,t,a){let n=e.add(t.multiply(Bt.fromNumber(a)));return n.compare(Lv)===1&&(n=new Bt([n.getBits(0),n.getBits(1)],0)),n.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=gu(e),[a,n]=vu(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(a,n,s);if(!this.ye(o))return!1}return!0}static create(e,t,a){const n=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Do(s,n,t);return a.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;const t=gu(e),[a,n]=vu(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(a,n,s);this.we(o)}}we(e){const t=Math.floor(e/8),a=e%8;this.bitmap[t]|=1<<a}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,a,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=a,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,a){const n=new Map;return n.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,t,a)),new xs(H.min(),n,new re(W),Ct(),Q())}}class Ya{constructor(e,t,a,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=a,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,a){return new Ya(a,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,a,n){this.Se=e,this.removedTargetIds=t,this.key=a,this.be=n}}class Bm{constructor(e,t){this.targetId=e,this.De=t}}class Gm{constructor(e,t,a=Se.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=a,this.cause=n}}class bu{constructor(){this.ve=0,this.Ce=yu(),this.Fe=Se.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Q(),t=Q(),a=Q();return this.Ce.forEach((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:a=a.add(n);break;default:G(38017,{changeType:s})}}),new Ya(this.Fe,this.Me,e,t,a)}ke(){this.xe=!1,this.Ce=yu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ee(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Nv{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ct(),this.je=xn(),this.Je=xn(),this.He=new re(W)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const a=this.tt(t);switch(e.state){case 0:this.nt(t)&&a.Be(e.resumeToken);break;case 1:a.Ue(),a.Oe||a.ke(),a.Be(e.resumeToken);break;case 2:a.Ue(),a.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(a.Ke(),a.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),a.Be(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((a,n)=>{this.nt(n)&&t(n)})}it(e){const t=e.targetId,a=e.De.count,n=this.st(t);if(n){const s=n.target;if(jr(s))if(a===0){const o=new F(s.path);this.Xe(t,o,Pe.newNoDocument(o,H.min()))}else ee(a===1,20013,{expectedCount:a});else{const o=this.ot(t);if(o!==a){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:a="",padding:n=0},hashCount:s=0}=t;let o,c;try{o=Jt(a).toUint8Array()}catch(l){if(l instanceof mm)return jt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Do(o,n,s)}catch(l){return jt(l instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,a){return t.De.count===a-this.ht(e,t.targetId)?0:2}ht(e,t){const a=this.We.getRemoteKeysForTarget(t);let n=0;return a.forEach(s=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),n++)}),n}Pt(e){const t=new Map;this.Ge.forEach((s,o)=>{const c=this.st(o);if(c){if(s.current&&jr(c.target)){const l=new F(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,Pe.newNoDocument(l,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let a=Q();this.Je.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{const d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(a=a.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const n=new xs(e,t,this.He,this.ze,a);return this.ze=Ct(),this.je=xn(),this.Je=xn(),this.He=new re(W),n}Ze(e,t){if(!this.nt(e))return;const a=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,a),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,a){if(!this.nt(e))return;const n=this.tt(e);this.It(e,t)?n.qe(t,1):n.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),a&&(this.ze=this.ze.insert(t,a))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new bu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ge(W),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ge(W),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new bu),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function xn(){return new re(F.comparator)}function yu(){return new re(F.comparator)}const Ov={asc:"ASCENDING",desc:"DESCENDING"},Fv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bv={and:"AND",or:"OR"};class Gv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jr(i,e){return i.useProto3Json||As(e)?e:{value:e}}function ns(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $m(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function $v(i,e){return ns(i,e.toTimestamp())}function nt(i){return ee(!!i,49232),H.fromTimestamp(function(t){const a=zt(t);return new se(a.seconds,a.nanos)}(i))}function Vo(i,e){return Wr(i,e).canonicalString()}function Wr(i,e){const t=function(n){return new ae(["projects",n.projectId,"databases",n.database])}(i).child("documents");return e===void 0?t:t.child(e)}function jm(i){const e=ae.fromString(i);return ee(Km(e),10190,{key:e.toString()}),e}function Kr(i,e){return Vo(i.databaseId,e.path)}function Er(i,e){const t=jm(e);if(t.get(1)!==i.databaseId.projectId)throw new D(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new D(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new F(zm(t))}function Hm(i,e){return Vo(i.databaseId,e)}function jv(i){const e=jm(i);return e.length===4?ae.emptyPath():zm(e)}function Qr(i){return new ae(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function zm(i){return ee(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Eu(i,e,t){return{name:Kr(i,e),fields:t.value.mapValue.fields}}function Hv(i,e){let t;if("targetChange"in e){e.targetChange;const a=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),n=e.targetChange.targetIds||[],s=function(d,h){return d.useProto3Json?(ee(h===void 0||typeof h=="string",58123),Se.fromBase64String(h||"")):(ee(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Se.fromUint8Array(h||new Uint8Array))}(i,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const h=d.code===void 0?P.UNKNOWN:Fm(d.code);return new D(h,d.message||"")}(o);t=new Gm(a,n,s,c||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const n=Er(i,a.document.name),s=nt(a.document.updateTime),o=a.document.createTime?nt(a.document.createTime):H.min(),c=new Ve({mapValue:{fields:a.document.fields}}),l=Pe.newFoundDocument(n,s,o,c),d=a.targetIds||[],h=a.removedTargetIds||[];t=new On(d,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const n=Er(i,a.document),s=a.readTime?nt(a.readTime):H.min(),o=Pe.newNoDocument(n,s),c=a.removedTargetIds||[];t=new On([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const n=Er(i,a.document),s=a.removedTargetIds||[];t=new On([],s,n,null)}else{if(!("filter"in e))return G(11601,{At:e});{e.filter;const a=e.filter;a.targetId;const{count:n=0,unchangedNames:s}=a,o=new Dv(n,s),c=a.targetId;t=new Bm(c,o)}}return t}function zv(i,e){let t;if(e instanceof Xa)t={update:Eu(i,e.key,e.value)};else if(e instanceof Mo)t={delete:Kr(i,e.key)};else if(e instanceof ei)t={update:Eu(i,e.key,e.data),updateMask:tb(e.fieldMask)};else{if(!(e instanceof kv))return G(16599,{Rt:e.type});t={verify:Kr(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(a=>function(s,o){const c=o.transform;if(c instanceof Fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ba)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof as)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw G(20930,{transform:o.transform})}(0,a))),e.precondition.isNone||(t.currentDocument=function(n,s){return s.updateTime!==void 0?{updateTime:$v(n,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(i,e.precondition)),t}function Jv(i,e){return i&&i.length>0?(ee(e!==void 0,14353),i.map(t=>function(n,s){let o=n.updateTime?nt(n.updateTime):nt(s);return o.isEqual(H.min())&&(o=nt(s)),new wv(o,n.transformResults||[])}(t,e))):[]}function Wv(i,e){return{documents:[Hm(i,e.path)]}}function Kv(i,e){const t={structuredQuery:{}},a=e.path;let n;e.collectionGroup!==null?(n=a,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n=a.popLast(),t.structuredQuery.from=[{collectionId:a.lastSegment()}]),t.parent=Hm(i,n);const s=function(d){if(d.length!==0)return Wm(Ze.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(h=>function(g){return{field:xi(g.field),direction:Yv(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Jr(i,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:n}}function Qv(i){let e=jv(i.parent);const t=i.structuredQuery,a=t.from?t.from.length:0;let n=null;if(a>0){ee(a===1,65062);const h=t.from[0];h.allDescendants?n=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(f){const g=Jm(f);return g instanceof Ze&&Cm(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(_){return new is(wi(_.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(f){let g;return g=typeof f=="object"?f.value:f,As(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(f){const g=!!f.before,b=f.values||[];return new ts(b,g)}(t.startAt));let d=null;return t.endAt&&(d=function(f){const g=!f.before,b=f.values||[];return new ts(b,g)}(t.endAt)),gv(e,n,o,s,c,"F",l,d)}function Xv(i,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:n})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jm(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const a=wi(t.unaryFilter.field);return de.create(a,"==",{doubleValue:NaN});case"IS_NULL":const n=wi(t.unaryFilter.field);return de.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wi(t.unaryFilter.field);return de.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wi(t.unaryFilter.field);return de.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(i):i.fieldFilter!==void 0?function(t){return de.create(wi(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Ze.create(t.compositeFilter.filters.map(a=>Jm(a)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(t.compositeFilter.op))}(i):G(30097,{filter:i})}function Yv(i){return Ov[i]}function Zv(i){return Fv[i]}function eb(i){return Bv[i]}function xi(i){return{fieldPath:i.canonicalString()}}function wi(i){return Ce.fromServerFormat(i.fieldPath)}function Wm(i){return i instanceof de?function(t){if(t.op==="=="){if(ou(t.value))return{unaryFilter:{field:xi(t.field),op:"IS_NAN"}};if(ru(t.value))return{unaryFilter:{field:xi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ou(t.value))return{unaryFilter:{field:xi(t.field),op:"IS_NOT_NAN"}};if(ru(t.value))return{unaryFilter:{field:xi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(t.field),op:Zv(t.op),value:t.value}}}(i):i instanceof Ze?function(t){const a=t.getFilters().map(n=>Wm(n));return a.length===1?a[0]:{compositeFilter:{op:eb(t.op),filters:a}}}(i):G(54877,{filter:i})}function tb(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Km(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,a,n,s=H.min(),o=H.min(),c=Se.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=a,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.gt=e}}function ab(i){const e=Qv({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?zr(e,e.limit,"L"):e}/**
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
 */class nb{constructor(){this.Dn=new sb}addToCollectionParentIndex(e,t){return this.Dn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Ht.min())}updateCollectionGroup(e,t,a){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class sb{constructor(){this.index={}}add(e){const t=e.lastSegment(),a=e.popLast(),n=this.index[t]||new ge(ae.comparator),s=!n.has(a);return this.index[t]=n.add(a),s}has(e){const t=e.lastSegment(),a=e.popLast(),n=this.index[t];return n&&n.has(a)}getEntries(e){return(this.index[e]||new ge(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qm=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(Qm,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Gi(0)}static ur(){return new Gi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="LruGarbageCollector",rb=1048576;function Su([i,e],[t,a]){const n=W(i,t);return n===0?W(e,a):n}class ob{constructor(e){this.Tr=e,this.buffer=new ge(Su),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const a=this.buffer.last();Su(t,a)<0&&(this.buffer=this.buffer.delete(a).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cb{constructor(e,t,a){this.garbageCollector=e,this.asyncQueue=t,this.localStore=a,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){V(Cu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xi(t)?V(Cu,"Ignoring IndexedDB error during garbage collection: ",t):await Qi(t)}await this.Rr(3e5)})}}class lb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(a=>Math.floor(t/100*a))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Es.ue);const a=new ob(t);return this.Vr.forEachTarget(e,n=>a.Er(n.sequenceNumber)).next(()=>this.Vr.gr(e,n=>a.Er(n))).next(()=>a.maxValue)}removeTargets(e,t,a){return this.Vr.removeTargets(e,t,a)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Au)):this.getCacheSize(e).next(a=>a<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Au):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let a,n,s,o,c,l,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),n=this.params.maximumSequenceNumbersToCollect):n=f,o=Date.now(),this.nthSequenceNumber(e,n))).next(f=>(a=f,c=Date.now(),this.removeTargets(e,a,t))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,a))).next(f=>(d=Date.now(),Ii()<=K.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${n} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${f} documents in `+(d-l)+`ms
Total Duration: ${d-h}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:s,documentsRemoved:f})))}}function ub(i,e){return new lb(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.changes=new vi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const a=this.changes.get(t);return a!==void 0?R.resolve(a):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class mb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,t,a,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=a,this.indexManager=n}getDocument(e,t){let a=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(a=n,this.remoteDocumentCache.getEntry(e,t))).next(n=>(a!==null&&ka(a.mutation,n,$e.empty(),se.now()),n))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(a=>this.getLocalViewOfDocuments(e,a,Q()).next(()=>a))}getLocalViewOfDocuments(e,t,a=Q()){const n=li();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,a).next(s=>{let o=Ta();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const a=li();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,Q()))}populateOverlays(e,t,a){const n=[];return a.forEach(s=>{t.has(s)||n.push(s)}),this.documentOverlayCache.getOverlays(e,n).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,a,n){let s=Ct();const o=Ra(),c=function(){return Ra()}();return t.forEach((l,d)=>{const h=a.get(d.key);n.has(d.key)&&(h===void 0||h.mutation instanceof ei)?s=s.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),ka(h.mutation,d,h.mutation.getFieldMask(),se.now())):o.set(d.key,$e.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,h)=>o.set(d,h)),t.forEach((d,h)=>{var f;return c.set(d,new mb(h,(f=o.get(d))!==null&&f!==void 0?f:null))}),c))}recalculateAndSaveOverlays(e,t){const a=Ra();let n=new re((o,c)=>o-c),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let h=a.get(l)||$e.empty();h=c.applyToLocalView(d,h),a.set(l,h);const f=(n.get(c.batchId)||Q()).add(l);n=n.insert(c.batchId,f)})}).next(()=>{const o=[],c=n.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,h=l.value,f=Rm();h.forEach(g=>{if(!s.has(g)){const b=Nm(t.get(g),a.get(g));b!==null&&f.set(g,b),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,f))}return R.waitFor(o)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,t,a,n){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Im(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,a,n):this.getDocumentsMatchingCollectionQuery(e,t,a,n)}getNextDocuments(e,t,a,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,a,n).next(s=>{const o=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,a.largestBatchId,n-s.size):R.resolve(li());let c=Va,l=s;return o.next(d=>R.forEach(d,(h,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),s.get(h)?R.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,Q())).next(h=>({batchId:c,changes:Pm(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(a=>{let n=Ta();return a.isFoundDocument()&&(n=n.insert(a.key,a)),n})}getDocumentsMatchingCollectionGroupQuery(e,t,a,n){const s=t.collectionGroup;let o=Ta();return this.indexManager.getCollectionParents(e,s).next(c=>R.forEach(c,l=>{const d=function(f,g){return new Qa(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,a,n).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,a,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,a.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,a,s,n))).next(o=>{s.forEach((l,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,Pe.newInvalidDocument(h)))});let c=Ta();return o.forEach((l,d)=>{const h=s.get(l);h!==void 0&&ka(h.mutation,d,$e.empty(),se.now()),_s(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return R.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(n){return{id:n.id,version:n.version,createTime:nt(n.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(n){return{name:n.name,query:ab(n.bundledQuery),readTime:nt(n.readTime)}}(t)),R.resolve()}}/**
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
 */class fb{constructor(){this.overlays=new re(F.comparator),this.kr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const a=li();return R.forEach(t,n=>this.getOverlay(e,n).next(s=>{s!==null&&a.set(n,s)})).next(()=>a)}saveOverlays(e,t,a){return a.forEach((n,s)=>{this.wt(e,t,s)}),R.resolve()}removeOverlaysForBatchId(e,t,a){const n=this.kr.get(a);return n!==void 0&&(n.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(a)),R.resolve()}getOverlaysForCollection(e,t,a){const n=li(),s=t.length+1,o=new F(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>a&&n.set(l.getKey(),l)}return R.resolve(n)}getOverlaysForCollectionGroup(e,t,a,n){let s=new re((d,h)=>d-h);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>a){let h=s.get(d.largestBatchId);h===null&&(h=li(),s=s.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const c=li(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,h)=>c.set(d,h)),!(c.size()>=n)););return R.resolve(c)}wt(e,t,a){const n=this.overlays.get(a.key);if(n!==null){const o=this.kr.get(n.largestBatchId).delete(a.key);this.kr.set(n.largestBatchId,o)}this.overlays=this.overlays.insert(a.key,new Uv(t,a));let s=this.kr.get(t);s===void 0&&(s=Q(),this.kr.set(t,s)),this.kr.set(t,s.add(a.key))}}/**
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
 */class gb{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.qr=new ge(be.Qr),this.$r=new ge(be.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const a=new be(e,t);this.qr=this.qr.add(a),this.$r=this.$r.add(a)}Kr(e,t){e.forEach(a=>this.addReference(a,t))}removeReference(e,t){this.Wr(new be(e,t))}Gr(e,t){e.forEach(a=>this.removeReference(a,t))}zr(e){const t=new F(new ae([])),a=new be(t,e),n=new be(t,e+1),s=[];return this.$r.forEachInRange([a,n],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new F(new ae([])),a=new be(t,e),n=new be(t,e+1);let s=Q();return this.$r.forEachInRange([a,n],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new be(e,0),a=this.qr.firstAfterOrEqual(t);return a!==null&&e.isEqual(a.key)}}class be{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return F.comparator(e.key,t.key)||W(e.Hr,t.Hr)}static Ur(e,t){return W(e.Hr,t.Hr)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ge(be.Qr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,a,n){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mv(s,t,a,n);this.mutationQueue.push(o);for(const c of n)this.Yr=this.Yr.add(new be(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const a=t+1,n=this.Xr(a),s=n<0?0:n;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?qo:this.er-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const a=new be(t,0),n=new be(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([a,n],o=>{const c=this.Zr(o.Hr);s.push(c)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new ge(W);return t.forEach(n=>{const s=new be(n,0),o=new be(n,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],c=>{a=a.add(c.Hr)})}),R.resolve(this.ei(a))}getAllMutationBatchesAffectingQuery(e,t){const a=t.path,n=a.length+1;let s=a;F.isDocumentKey(s)||(s=s.child(""));const o=new be(new F(s),0);let c=new ge(W);return this.Yr.forEachWhile(l=>{const d=l.key.path;return!!a.isPrefixOf(d)&&(d.length===n&&(c=c.add(l.Hr)),!0)},o),R.resolve(this.ei(c))}ei(e){const t=[];return e.forEach(a=>{const n=this.Zr(a);n!==null&&t.push(n)}),t}removeMutationBatch(e,t){ee(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Yr;return R.forEach(t.mutations,n=>{const s=new be(n.key,t.batchId);return a=a.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Yr=a})}rr(e){}containsKey(e,t){const a=new be(t,0),n=this.Yr.firstAfterOrEqual(a);return R.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.ni=e,this.docs=function(){return new re(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const a=t.key,n=this.docs.get(a),s=n?n.size:0,o=this.ni(t);return this.docs=this.docs.insert(a,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const a=this.docs.get(t);return R.resolve(a?a.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let a=Ct();return t.forEach(n=>{const s=this.docs.get(n);a=a.insert(n,s?s.document.mutableCopy():Pe.newInvalidDocument(n))}),R.resolve(a)}getDocumentsMatchingQuery(e,t,a,n){let s=Ct();const o=t.path,c=new F(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:h}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||W2(J2(h),a)<=0||(n.has(h.key)||_s(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,t,a,n){G(9500)}ri(e,t){return R.forEach(this.docs,a=>t(a))}newChangeBuffer(e){return new yb(this)}getSize(e){return R.resolve(this.size)}}class yb extends db{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((a,n)=>{n.isValidDocument()?t.push(this.Or.addEntry(e,n)):this.Or.removeEntry(a)}),R.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.persistence=e,this.ii=new vi(t=>Po(t),Ro),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.si=0,this.oi=new Lo,this.targetCount=0,this._i=Gi.ar()}forEachTarget(e,t){return this.ii.forEach((a,n)=>t(n)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,a){return a&&(this.lastRemoteSnapshotVersion=a),t>this.si&&(this.si=t),R.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Gi(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.hr(t),R.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,a){let n=0;const s=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=t&&a.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),n++)}),R.waitFor(s).next(()=>n)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const a=this.ii.get(t)||null;return R.resolve(a)}addMatchingKeys(e,t,a){return this.oi.Kr(t,a),R.resolve()}removeMatchingKeys(e,t,a){this.oi.Gr(t,a);const n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(o=>{s.push(n.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const a=this.oi.Jr(t);return R.resolve(a)}containsKey(e,t){return R.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t){this.ai={},this.overlays={},this.ui=new Es(0),this.ci=!1,this.ci=!0,this.li=new gb,this.referenceDelegate=e(this),this.hi=new Eb(this),this.indexManager=new nb,this.remoteDocumentCache=function(n){return new bb(n)}(a=>this.referenceDelegate.Pi(a)),this.serializer=new ib(t),this.Ti=new pb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let a=this.ai[e.toKey()];return a||(a=new vb(t,this.referenceDelegate),this.ai[e.toKey()]=a),a}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,a){V("MemoryPersistence","Starting transaction:",e);const n=new Ab(this.ui.next());return this.referenceDelegate.Ii(),a(n).next(s=>this.referenceDelegate.di(n).next(()=>s)).toPromise().then(s=>(n.raiseOnCommittedEvent(),s))}Ei(e,t){return R.or(Object.values(this.ai).map(a=>()=>a.containsKey(e,t)))}}class Ab extends Q2{constructor(e){super(),this.currentSequenceNumber=e}}class No{constructor(e){this.persistence=e,this.Ai=new Lo,this.Ri=null}static Vi(e){return new No(e)}get mi(){if(this.Ri)return this.Ri;throw G(60996)}addReference(e,t,a){return this.Ai.addReference(a,t),this.mi.delete(a.toString()),R.resolve()}removeReference(e,t,a){return this.Ai.removeReference(a,t),this.mi.add(a.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(n=>this.mi.add(n.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,t.targetId).next(n=>{n.forEach(s=>this.mi.add(s.toString()))}).next(()=>a.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.mi,a=>{const n=F.fromPath(a);return this.fi(e,n).next(s=>{s||t.removeEntry(n,H.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(a=>{a?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return R.or([()=>R.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ss{constructor(e,t){this.persistence=e,this.gi=new vi(a=>Z2(a.path),(a,n)=>a.isEqual(n)),this.garbageCollector=ub(this,t)}static Vi(e,t){return new ss(e,t)}Ii(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(a=>t.next(n=>a+n))}yr(e){let t=0;return this.gr(e,a=>{t++}).next(()=>t)}gr(e,t){return R.forEach(this.gi,(a,n)=>this.Sr(e,a,n).next(s=>s?R.resolve():t(n)))}removeTargets(e,t,a){return this.persistence.getTargetCache().removeTargets(e,t,a)}removeOrphanedDocuments(e,t){let a=0;const n=this.persistence.getRemoteDocumentCache(),s=n.newChangeBuffer();return n.ri(e,o=>this.Sr(e,o,t).next(c=>{c||(a++,s.removeEntry(o,H.min()))})).next(()=>s.apply(e)).next(()=>a)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const a=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,t,a){return this.gi.set(a,e.currentSequenceNumber),R.resolve()}removeReference(e,t,a){return this.gi.set(a,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),R.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vn(e.data.value)),t}Sr(e,t,a){return R.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const n=this.gi.get(t);return R.resolve(n!==void 0&&n>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,a,n){this.targetId=e,this.fromCache=t,this.Is=a,this.ds=n}static Es(e,t){let a=Q(),n=Q();for(const s of t.docChanges)switch(s.type){case 0:a=a.add(s.doc.key);break;case 1:n=n.add(s.doc.key)}return new Oo(e,t.fromCache,a,n)}}/**
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
 */class Cb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Sb{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Xh()?8:X2(Re())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,a,n){const s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,n,a).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Cb;return this.ws(e,t,o).next(c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)})}).next(()=>s.result)}Ss(e,t,a,n){return a.documentReadCount<this.Vs?(Ii()<=K.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",qi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(Ii()<=K.DEBUG&&V("QueryEngine","Query:",qi(t),"scans",a.documentReadCount,"local documents and returns",n,"documents as results."),a.documentReadCount>this.fs*n?(Ii()<=K.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",qi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,at(t))):R.resolve())}ps(e,t){if(du(t))return R.resolve(null);let a=at(t);return this.indexManager.getIndexType(e,a).next(n=>n===0?null:(t.limit!==null&&n===1&&(t=zr(t,null,"F"),a=at(t)),this.indexManager.getDocumentsMatchingTarget(e,a).next(s=>{const o=Q(...s);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,a).next(l=>{const d=this.bs(t,c);return this.Ds(t,d,o,l.readTime)?this.ps(e,zr(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,a,n){return du(t)||n.isEqual(H.min())?R.resolve(null):this.gs.getDocuments(e,a).next(s=>{const o=this.bs(t,s);return this.Ds(t,o,a,n)?R.resolve(null):(Ii()<=K.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),qi(t)),this.vs(e,o,t,z2(n,Va)).next(c=>c))})}bs(e,t){let a=new ge(xm(e));return t.forEach((n,s)=>{_s(e,s)&&(a=a.add(s))}),a}Ds(e,t,a,n){if(e.limit===null)return!1;if(a.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}ws(e,t,a){return Ii()<=K.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",qi(t)),this.gs.getDocumentsMatchingQuery(e,t,Ht.min(),a)}vs(e,t,a,n){return this.gs.getDocumentsMatchingQuery(e,a,n).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="LocalStore",Tb=3e8;class _b{constructor(e,t,a,n){this.persistence=e,this.Cs=t,this.serializer=n,this.Fs=new re(W),this.Ms=new vi(s=>Po(s),Ro),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(a)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Ib(i,e,t,a){return new _b(i,e,t,a)}async function Ym(i,e){const t=z(i);return await t.persistence.runTransaction("Handle user change","readonly",a=>{let n;return t.mutationQueue.getAllMutationBatches(a).next(s=>(n=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(a))).next(s=>{const o=[],c=[];let l=Q();for(const d of n){o.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}for(const d of s){c.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(a,l).next(d=>({Bs:d,removedBatchIds:o,addedBatchIds:c}))})})}function qb(i,e){const t=z(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const n=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,l,d,h){const f=d.batch,g=f.keys();let b=R.resolve();return g.forEach(_=>{b=b.next(()=>h.getEntry(l,_)).next(w=>{const q=d.docVersions.get(_);ee(q!==null,48541),w.version.compareTo(q)<0&&(f.applyToRemoteDocument(w,d),w.isValidDocument()&&(w.setReadTime(d.commitVersion),h.addEntry(w)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(l,f))}(t,a,e,s).next(()=>s.apply(a)).next(()=>t.mutationQueue.performConsistencyCheck(a)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(a,n,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(c){let l=Q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(a,n))})}function Zm(i){const e=z(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function xb(i,e){const t=z(i),a=e.snapshotVersion;let n=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});n=t.Fs;const c=[];e.targetChanges.forEach((h,f)=>{const g=n.get(f);if(!g)return;c.push(t.hi.removeMatchingKeys(s,h.removedDocuments,f).next(()=>t.hi.addMatchingKeys(s,h.addedDocuments,f)));let b=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?b=b.withResumeToken(Se.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):h.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(h.resumeToken,a)),n=n.insert(f,b),function(w,q,U){return w.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=Tb?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(g,b,h)&&c.push(t.hi.updateTargetData(s,b))});let l=Ct(),d=Q();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),c.push(wb(s,o,e.documentUpdates).next(h=>{l=h.Ls,d=h.ks})),!a.isEqual(H.min())){const h=t.hi.getLastRemoteSnapshotVersion(s).next(f=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,a));c.push(h)}return R.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Fs=n,s))}function wb(i,e,t){let a=Q(),n=Q();return t.forEach(s=>a=a.add(s)),e.getEntries(i,a).next(s=>{let o=Ct();return t.forEach((c,l)=>{const d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(n=n.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V(Fo,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ls:o,ks:n}})}function Pb(i,e){const t=z(i);return t.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=qo),t.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}function Rb(i,e){const t=z(i);return t.persistence.runTransaction("Allocate target","readwrite",a=>{let n;return t.hi.getTargetData(a,e).next(s=>s?(n=s,R.resolve(n)):t.hi.allocateTargetId(a).next(o=>(n=new Lt(e,o,"TargetPurposeListen",a.currentSequenceNumber),t.hi.addTargetData(a,n).next(()=>n))))}).then(a=>{const n=t.Fs.get(a.targetId);return(n===null||a.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(a.targetId,a),t.Ms.set(e,a.targetId)),a})}async function Xr(i,e,t){const a=z(i),n=a.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await a.persistence.runTransaction("Release target",s,o=>a.persistence.referenceDelegate.removeTarget(o,n))}catch(o){if(!Xi(o))throw o;V(Fo,`Failed to update sequence numbers for target ${e}: ${o}`)}a.Fs=a.Fs.remove(e),a.Ms.delete(n.target)}function Tu(i,e,t){const a=z(i);let n=H.min(),s=Q();return a.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,h){const f=z(l),g=f.Ms.get(h);return g!==void 0?R.resolve(f.Fs.get(g)):f.hi.getTargetData(d,h)}(a,o,at(e)).next(c=>{if(c)return n=c.lastLimboFreeSnapshotVersion,a.hi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>a.Cs.getDocumentsMatchingQuery(o,e,t?n:H.min(),t?s:Q())).next(c=>(kb(a,bv(e),c),{documents:c,qs:s})))}function kb(i,e,t){let a=i.xs.get(e)||H.min();t.forEach((n,s)=>{s.readTime.compareTo(a)>0&&(a=s.readTime)}),i.xs.set(e,a)}class _u{constructor(){this.activeTargetIds=Tv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mb{constructor(){this.Fo=new _u,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,a){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,a){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new _u,Promise.resolve()}handleUserChange(e,t,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ub{xo(e){}shutdown(){}}/**
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
 */const Iu="ConnectivityMonitor";class qu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V(Iu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){V(Iu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wn=null;function Yr(){return wn===null?wn=function(){return 268435456+Math.round(2147483648*Math.random())}():wn++,"0x"+wn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="RestConnection",Db={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Vb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${a}/databases/${n}`,this.Ko=this.databaseId.database===Zn?`project_id=${a}`:`project_id=${a}&database_id=${n}`}Wo(e,t,a,n,s){const o=Yr(),c=this.Go(e,t.toUriEncodedString());V(Ar,`Sending RPC '${e}' ${o}:`,c,a);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,n,s);const{host:d}=new URL(c),h=zi(d);return this.jo(e,c,l,a,h).then(f=>(V(Ar,`Received RPC '${e}' ${o}: `,f),f),f=>{throw jt(Ar,`RPC '${e}' ${o} failed with error: `,f,"url: ",c,"request:",a),f})}Jo(e,t,a,n,s,o){return this.Wo(e,t,a,n,s)}zo(e,t,a){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ki}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((n,s)=>e[s]=n),a&&a.headers.forEach((n,s)=>e[s]=n)}Go(e,t){const a=Db[e];return`${this.$o}/v1/${t}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="WebChannelConnection";class Nb extends Vb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,a,n,s){const o=Yr();return new Promise((c,l)=>{const d=new em;d.setWithCredentials(!0),d.listenOnce(tm.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Dn.NO_ERROR:const f=d.getResponseJson();V(xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),c(f);break;case Dn.TIMEOUT:V(xe,`RPC '${e}' ${o} timed out`),l(new D(P.DEADLINE_EXCEEDED,"Request time out"));break;case Dn.HTTP_ERROR:const g=d.getStatus();if(V(xe,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const _=b==null?void 0:b.error;if(_&&_.status&&_.message){const w=function(U){const N=U.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(N)>=0?N:P.UNKNOWN}(_.status);l(new D(w,_.message))}else l(new D(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new D(P.UNAVAILABLE,"Connection failed."));break;default:G(9055,{c_:e,streamId:o,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{V(xe,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(n);V(xe,`RPC '${e}' ${o} sending request:`,n),d.send(t,"POST",h,a,15)})}P_(e,t,a){const n=Yr(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nm(),c=am(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,a),l.encodeInitMessageHeaders=!0;const h=s.join("");V(xe,`Creating RPC '${e}' stream ${n}: ${h}`,l);const f=o.createWebChannel(h,l);this.T_(f);let g=!1,b=!1;const _=new Lb({Ho:q=>{b?V(xe,`Not sending because RPC '${e}' stream ${n} is closed:`,q):(g||(V(xe,`Opening RPC '${e}' stream ${n} transport.`),f.open(),g=!0),V(xe,`RPC '${e}' stream ${n} sending:`,q),f.send(q))},Yo:()=>f.close()}),w=(q,U,N)=>{q.listen(U,O=>{try{N(O)}catch(J){setTimeout(()=>{throw J},0)}})};return w(f,Sa.EventType.OPEN,()=>{b||(V(xe,`RPC '${e}' stream ${n} transport opened.`),_.s_())}),w(f,Sa.EventType.CLOSE,()=>{b||(b=!0,V(xe,`RPC '${e}' stream ${n} transport closed`),_.__(),this.I_(f))}),w(f,Sa.EventType.ERROR,q=>{b||(b=!0,jt(xe,`RPC '${e}' stream ${n} transport errored. Name:`,q.name,"Message:",q.message),_.__(new D(P.UNAVAILABLE,"The operation could not be completed")))}),w(f,Sa.EventType.MESSAGE,q=>{var U;if(!b){const N=q.data[0];ee(!!N,16349);const O=N,J=(O==null?void 0:O.error)||((U=O[0])===null||U===void 0?void 0:U.error);if(J){V(xe,`RPC '${e}' stream ${n} received error:`,J);const X=J.status;let j=function(y){const A=ue[y];if(A!==void 0)return Fm(A)}(X),C=J.message;j===void 0&&(j=P.INTERNAL,C="Unknown error status: "+X+" with message "+J.message),b=!0,_.__(new D(j,C)),f.close()}else V(xe,`RPC '${e}' stream ${n} received:`,N),_.a_(N)}}),w(c,im.STAT_EVENT,q=>{q.stat===Or.PROXY?V(xe,`RPC '${e}' stream ${n} detected buffering proxy`):q.stat===Or.NOPROXY&&V(xe,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{_.o_()},0),_}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Cr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(i){return new Gv(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t,a=1e3,n=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=a,this.E_=n,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),a=Math.max(0,Date.now()-this.m_),n=Math.max(0,t-a);n>0&&V("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,n,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="PersistentStream";class t0{constructor(e,t,a,n,s,o,c,l){this.Fi=e,this.w_=a,this.S_=n,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new e0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(At(t.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,n])=>{this.b_===t&&this.W_(a,n)},a=>{e(()=>{const n=new D(P.UNKNOWN,"Fetching auth token failed: "+a.message);return this.G_(n)})})}W_(e,t){const a=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{a(()=>this.listener.Zo())}),this.stream.e_(()=>{a(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(n=>{a(()=>this.G_(n))}),this.stream.onMessage(n=>{a(()=>++this.C_==1?this.j_(n):this.onNext(n))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return V(xu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(V(xu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ob extends t0{constructor(e,t,a,n,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,a,n,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Hv(this.serializer,e),a=function(s){if(!("targetChange"in s))return H.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?nt(o.readTime):H.min()}(e);return this.listener.J_(t,a)}H_(e){const t={};t.database=Qr(this.serializer),t.addTarget=function(s,o){let c;const l=o.target;if(c=jr(l)?{documents:Wv(s,l)}:{query:Kv(s,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=$m(s,o.resumeToken);const d=Jr(s,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=ns(s,o.snapshotVersion.toTimestamp());const d=Jr(s,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const a=Xv(this.serializer,e);a&&(t.labels=a),this.k_(t)}Y_(e){const t={};t.database=Qr(this.serializer),t.removeTarget=e,this.k_(t)}}class Fb extends t0{constructor(e,t,a,n,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,a,n,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Jv(e.writeResults,e.commitTime),a=nt(e.commitTime);return this.listener.ta(a,t)}na(){const e={};e.database=Qr(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(a=>zv(this.serializer,a))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{}class Gb extends Bb{constructor(e,t,a,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=a,this.serializer=n,this.ra=!1}ia(){if(this.ra)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,a,n){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Wr(t,a),n,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(P.UNKNOWN,s.toString())})}Jo(e,t,a,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,Wr(t,a),n,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(P.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class $b{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(At(t),this._a=!1):V("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="RemoteStore";class jb{constructor(e,t,a,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=a,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{a.enqueueAndForget(async()=>{bi(this)&&(V(gi,"Restarting streams for network reachability change."),await async function(l){const d=z(l);d.Ia.add(4),await Za(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ps(d)}(this))})}),this.Aa=new $b(a,n)}}async function Ps(i){if(bi(i))for(const e of i.da)await e(!0)}async function Za(i){for(const e of i.da)await e(!1)}function i0(i,e){const t=z(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),jo(t)?$o(t):Yi(t).x_()&&Go(t,e))}function Bo(i,e){const t=z(i),a=Yi(t);t.Ta.delete(e),a.x_()&&a0(t,e),t.Ta.size===0&&(a.x_()?a.B_():bi(t)&&t.Aa.set("Unknown"))}function Go(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yi(i).H_(e)}function a0(i,e){i.Ra.$e(e),Yi(i).Y_(e)}function $o(i){i.Ra=new Nv({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Yi(i).start(),i.Aa.aa()}function jo(i){return bi(i)&&!Yi(i).M_()&&i.Ta.size>0}function bi(i){return z(i).Ia.size===0}function n0(i){i.Ra=void 0}async function Hb(i){i.Aa.set("Online")}async function zb(i){i.Ta.forEach((e,t)=>{Go(i,e)})}async function Jb(i,e){n0(i),jo(i)?(i.Aa.la(e),$o(i)):i.Aa.set("Unknown")}async function Wb(i,e,t){if(i.Aa.set("Online"),e instanceof Gm&&e.state===2&&e.cause)try{await async function(n,s){const o=s.cause;for(const c of s.targetIds)n.Ta.has(c)&&(await n.remoteSyncer.rejectListen(c,o),n.Ta.delete(c),n.Ra.removeTarget(c))}(i,e)}catch(a){V(gi,"Failed to remove targets %s: %s ",e.targetIds.join(","),a),await rs(i,a)}else if(e instanceof On?i.Ra.Ye(e):e instanceof Bm?i.Ra.it(e):i.Ra.et(e),!t.isEqual(H.min()))try{const a=await Zm(i.localStore);t.compareTo(a)>=0&&await function(s,o){const c=s.Ra.Pt(o);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ta.get(d);h&&s.Ta.set(d,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,d)=>{const h=s.Ta.get(l);if(!h)return;s.Ta.set(l,h.withResumeToken(Se.EMPTY_BYTE_STRING,h.snapshotVersion)),a0(s,l);const f=new Lt(h.target,l,d,h.sequenceNumber);Go(s,f)}),s.remoteSyncer.applyRemoteEvent(c)}(i,t)}catch(a){V(gi,"Failed to raise snapshot:",a),await rs(i,a)}}async function rs(i,e,t){if(!Xi(e))throw e;i.Ia.add(1),await Za(i),i.Aa.set("Offline"),t||(t=()=>Zm(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{V(gi,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await Ps(i)})}function s0(i,e){return e().catch(t=>rs(i,t,e))}async function Rs(i){const e=z(i),t=Kt(e);let a=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:qo;for(;Kb(e);)try{const n=await Pb(e.localStore,a);if(n===null){e.Pa.length===0&&t.B_();break}a=n.batchId,Qb(e,n)}catch(n){await rs(e,n)}r0(e)&&o0(e)}function Kb(i){return bi(i)&&i.Pa.length<10}function Qb(i,e){i.Pa.push(e);const t=Kt(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function r0(i){return bi(i)&&!Kt(i).M_()&&i.Pa.length>0}function o0(i){Kt(i).start()}async function Xb(i){Kt(i).na()}async function Yb(i){const e=Kt(i);for(const t of i.Pa)e.X_(t.mutations)}async function Zb(i,e,t){const a=i.Pa.shift(),n=Uo.from(a,e,t);await s0(i,()=>i.remoteSyncer.applySuccessfulWrite(n)),await Rs(i)}async function ey(i,e){e&&Kt(i).Z_&&await async function(a,n){if(function(o){return Vv(o)&&o!==P.ABORTED}(n.code)){const s=a.Pa.shift();Kt(a).N_(),await s0(a,()=>a.remoteSyncer.rejectFailedWrite(s.batchId,n)),await Rs(a)}}(i,e),r0(i)&&o0(i)}async function wu(i,e){const t=z(i);t.asyncQueue.verifyOperationInProgress(),V(gi,"RemoteStore received new credentials");const a=bi(t);t.Ia.add(3),await Za(t),a&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ps(t)}async function ty(i,e){const t=z(i);e?(t.Ia.delete(2),await Ps(t)):e||(t.Ia.add(2),await Za(t),t.Aa.set("Unknown"))}function Yi(i){return i.Va||(i.Va=function(t,a,n){const s=z(t);return s.ia(),new Ob(a,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(i.datastore,i.asyncQueue,{Zo:Hb.bind(null,i),e_:zb.bind(null,i),n_:Jb.bind(null,i),J_:Wb.bind(null,i)}),i.da.push(async e=>{e?(i.Va.N_(),jo(i)?$o(i):i.Aa.set("Unknown")):(await i.Va.stop(),n0(i))})),i.Va}function Kt(i){return i.ma||(i.ma=function(t,a,n){const s=z(t);return s.ia(),new Fb(a,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:Xb.bind(null,i),n_:ey.bind(null,i),ea:Yb.bind(null,i),ta:Zb.bind(null,i)}),i.da.push(async e=>{e?(i.ma.N_(),await Rs(i)):(await i.ma.stop(),i.Pa.length>0&&(V(gi,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,a,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=n,this.removalCallback=s,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,a,n,s){const o=Date.now()+a,c=new Ho(e,t,o,n,s);return c.start(a),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zo(i,e){if(At("AsyncQueue",`${e}: ${i}`),Xi(i))return new D(P.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{static emptySet(e){return new Ui(e.comparator)}constructor(e){this.comparator=e?(t,a)=>e(t,a)||F.comparator(t.key,a.key):(t,a)=>F.comparator(t.key,a.key),this.keyedMap=Ta(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,a)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ui)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;t.hasNext();){const n=t.getNext().key,s=a.getNext().key;if(!n.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const a=new Ui;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=t,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.fa=new re(F.comparator)}track(e){const t=e.doc.key,a=this.fa.get(t);a?e.type!==0&&a.type===3?this.fa=this.fa.insert(t,e):e.type===3&&a.type!==1?this.fa=this.fa.insert(t,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.fa=this.fa.remove(t):e.type===1&&a.type===2?this.fa=this.fa.insert(t,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):G(63341,{At:e,ga:a}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,a)=>{e.push(a)}),e}}class $i{constructor(e,t,a,n,s,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=a,this.docChanges=n,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,a,n,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new $i(e,t,Ui.emptySet(t),o,a,n,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ts(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,a=e.docChanges;if(t.length!==a.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==a[n].type||!t[n].doc.isEqual(a[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class ay{constructor(){this.queries=Ru(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,a){const n=z(t),s=n.queries;n.queries=Ru(),s.forEach((o,c)=>{for(const l of c.wa)l.onError(a)})})(this,new D(P.ABORTED,"Firestore shutting down"))}}function Ru(){return new vi(i=>qm(i),Ts)}async function Jo(i,e){const t=z(i);let a=3;const n=e.query;let s=t.queries.get(n);s?!s.Sa()&&e.ba()&&(a=2):(s=new iy,a=e.ba()?0:1);try{switch(a){case 0:s.ya=await t.onListen(n,!0);break;case 1:s.ya=await t.onListen(n,!1);break;case 2:await t.onFirstRemoteStoreListen(n)}}catch(o){const c=zo(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(c)}t.queries.set(n,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Ko(t)}async function Wo(i,e){const t=z(i),a=e.query;let n=3;const s=t.queries.get(a);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?n=e.ba()?0:1:!s.Sa()&&e.ba()&&(n=2))}switch(n){case 0:return t.queries.delete(a),t.onUnlisten(a,!0);case 1:return t.queries.delete(a),t.onUnlisten(a,!1);case 2:return t.onLastRemoteStoreUnlisten(a);default:return}}function ny(i,e){const t=z(i);let a=!1;for(const n of e){const s=n.query,o=t.queries.get(s);if(o){for(const c of o.wa)c.Ca(n)&&(a=!0);o.ya=n}}a&&Ko(t)}function sy(i,e,t){const a=z(i),n=a.queries.get(e);if(n)for(const s of n.wa)s.onError(t);a.queries.delete(e)}function Ko(i){i.Da.forEach(e=>{e.next()})}var Zr,ku;(ku=Zr||(Zr={})).Fa="default",ku.Cache="cache";class Qo{constructor(e,t,a){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=a||{}}Ca(e){if(!this.options.includeMetadataChanges){const a=[];for(const n of e.docChanges)n.type!==3&&a.push(n);e=new $i(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const a=t!=="Offline";return(!this.options.ka||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=$i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Zr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.key=e}}class l0{constructor(e){this.key=e}}class ry{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Q(),this.mutatedKeys=Q(),this.Xa=xm(e),this.eu=new Ui(this.Xa)}get tu(){return this.Ha}nu(e,t){const a=t?t.ru:new Pu,n=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=n,c=!1;const l=this.query.limitType==="F"&&n.size===this.query.limit?n.last():null,d=this.query.limitType==="L"&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((h,f)=>{const g=n.get(h),b=_s(this.query,f)?f:null,_=!!g&&this.mutatedKeys.has(g.key),w=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let q=!1;g&&b?g.data.isEqual(b.data)?_!==w&&(a.track({type:3,doc:b}),q=!0):this.iu(g,b)||(a.track({type:2,doc:b}),q=!0,(l&&this.Xa(b,l)>0||d&&this.Xa(b,d)<0)&&(c=!0)):!g&&b?(a.track({type:0,doc:b}),q=!0):g&&!b&&(a.track({type:1,doc:g}),q=!0,(l||d)&&(c=!0)),q&&(b?(o=o.add(b),s=w?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),a.track({type:1,doc:h})}return{eu:o,ru:a,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,a,n){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,f)=>function(b,_){const w=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{At:q})}};return w(b)-w(_)}(h.type,f.type)||this.Xa(h.doc,f.doc)),this.su(a),n=n!=null&&n;const c=t&&!n?this.ou():[],l=this.Za.size===0&&this.current&&!n?1:0,d=l!==this.Ya;return this.Ya=l,o.length!==0||d?{snapshot:new $i(this.query,e.eu,s,o,e.mutatedKeys,l===0,d,!1,!!a&&a.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Pu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Q(),this.eu.forEach(a=>{this.au(a.key)&&(this.Za=this.Za.add(a.key))});const t=[];return e.forEach(a=>{this.Za.has(a)||t.push(new l0(a))}),this.Za.forEach(a=>{e.has(a)||t.push(new c0(a))}),t}uu(e){this.Ha=e.qs,this.Za=Q();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return $i.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Xo="SyncEngine";class oy{constructor(e,t,a){this.query=e,this.targetId=t,this.view=a}}class cy{constructor(e){this.key=e,this.lu=!1}}class ly{constructor(e,t,a,n,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=a,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new vi(c=>qm(c),Ts),this.Tu=new Map,this.Iu=new Set,this.du=new re(F.comparator),this.Eu=new Map,this.Au=new Lo,this.Ru={},this.Vu=new Map,this.mu=Gi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function uy(i,e,t=!0){const a=f0(i);let n;const s=a.Pu.get(e);return s?(a.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.cu()):n=await u0(a,e,t,!0),n}async function dy(i,e){const t=f0(i);await u0(t,e,!0,!1)}async function u0(i,e,t,a){const n=await Rb(i.localStore,at(e)),s=n.targetId,o=i.sharedClientState.addLocalQueryTarget(s,t);let c;return a&&(c=await my(i,e,s,o==="current",n.resumeToken)),i.isPrimaryClient&&t&&i0(i.remoteStore,n),c}async function my(i,e,t,a,n){i.gu=(f,g,b)=>async function(w,q,U,N){let O=q.view.nu(U);O.Ds&&(O=await Tu(w.localStore,q.query,!1).then(({documents:C})=>q.view.nu(C,O)));const J=N&&N.targetChanges.get(q.targetId),X=N&&N.targetMismatches.get(q.targetId)!=null,j=q.view.applyChanges(O,w.isPrimaryClient,J,X);return Uu(w,q.targetId,j._u),j.snapshot}(i,f,g,b);const s=await Tu(i.localStore,e,!0),o=new ry(e,s.qs),c=o.nu(s.documents),l=Ya.createSynthesizedTargetChangeForCurrentChange(t,a&&i.onlineState!=="Offline",n),d=o.applyChanges(c,i.isPrimaryClient,l);Uu(i,t,d._u);const h=new oy(e,t,o);return i.Pu.set(e,h),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),d.snapshot}async function hy(i,e,t){const a=z(i),n=a.Pu.get(e),s=a.Tu.get(n.targetId);if(s.length>1)return a.Tu.set(n.targetId,s.filter(o=>!Ts(o,e))),void a.Pu.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(n.targetId),a.sharedClientState.isActiveQueryTarget(n.targetId)||await Xr(a.localStore,n.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(n.targetId),t&&Bo(a.remoteStore,n.targetId),eo(a,n.targetId)}).catch(Qi)):(eo(a,n.targetId),await Xr(a.localStore,n.targetId,!0))}async function py(i,e){const t=z(i),a=t.Pu.get(e),n=t.Tu.get(a.targetId);t.isPrimaryClient&&n.length===1&&(t.sharedClientState.removeLocalQueryTarget(a.targetId),Bo(t.remoteStore,a.targetId))}async function fy(i,e,t){const a=Cy(i);try{const n=await function(o,c){const l=z(o),d=se.now(),h=c.reduce((b,_)=>b.add(_.key),Q());let f,g;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let _=Ct(),w=Q();return l.Os.getEntries(b,h).next(q=>{_=q,_.forEach((U,N)=>{N.isValidDocument()||(w=w.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,_)).next(q=>{f=q;const U=[];for(const N of c){const O=Rv(N,f.get(N.key).overlayedDocument);O!=null&&U.push(new ei(N.key,O,ym(O.value.mapValue),He.exists(!0)))}return l.mutationQueue.addMutationBatch(b,d,U,c)}).next(q=>{g=q;const U=q.applyToLocalDocumentSet(f,w);return l.documentOverlayCache.saveOverlays(b,q.batchId,U)})}).then(()=>({batchId:g.batchId,changes:Pm(f)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(n.batchId),function(o,c,l){let d=o.Ru[o.currentUser.toKey()];d||(d=new re(W)),d=d.insert(c,l),o.Ru[o.currentUser.toKey()]=d}(a,n.batchId,t),await en(a,n.changes),await Rs(a.remoteStore)}catch(n){const s=zo(n,"Failed to persist write");t.reject(s)}}async function d0(i,e){const t=z(i);try{const a=await xb(t.localStore,e);e.targetChanges.forEach((n,s)=>{const o=t.Eu.get(s);o&&(ee(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1,22616),n.addedDocuments.size>0?o.lu=!0:n.modifiedDocuments.size>0?ee(o.lu,14607):n.removedDocuments.size>0&&(ee(o.lu,42227),o.lu=!1))}),await en(t,a,e)}catch(a){await Qi(a)}}function Mu(i,e,t){const a=z(i);if(a.isPrimaryClient&&t===0||!a.isPrimaryClient&&t===1){const n=[];a.Pu.forEach((s,o)=>{const c=o.view.va(e);c.snapshot&&n.push(c.snapshot)}),function(o,c){const l=z(o);l.onlineState=c;let d=!1;l.queries.forEach((h,f)=>{for(const g of f.wa)g.va(c)&&(d=!0)}),d&&Ko(l)}(a.eventManager,e),n.length&&a.hu.J_(n),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function gy(i,e,t){const a=z(i);a.sharedClientState.updateQueryState(e,"rejected",t);const n=a.Eu.get(e),s=n&&n.key;if(s){let o=new re(F.comparator);o=o.insert(s,Pe.newNoDocument(s,H.min()));const c=Q().add(s),l=new xs(H.min(),new Map,new re(W),o,c);await d0(a,l),a.du=a.du.remove(s),a.Eu.delete(e),Yo(a)}else await Xr(a.localStore,e,!1).then(()=>eo(a,e,t)).catch(Qi)}async function vy(i,e){const t=z(i),a=e.batch.batchId;try{const n=await qb(t.localStore,e);h0(t,a,null),m0(t,a),t.sharedClientState.updateMutationState(a,"acknowledged"),await en(t,n)}catch(n){await Qi(n)}}async function by(i,e,t){const a=z(i);try{const n=await function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return l.mutationQueue.lookupMutationBatch(d,c).next(f=>(ee(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(d,f))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>l.localDocuments.getDocuments(d,h))})}(a.localStore,e);h0(a,e,t),m0(a,e),a.sharedClientState.updateMutationState(e,"rejected",t),await en(a,n)}catch(n){await Qi(n)}}function m0(i,e){(i.Vu.get(e)||[]).forEach(t=>{t.resolve()}),i.Vu.delete(e)}function h0(i,e,t){const a=z(i);let n=a.Ru[a.currentUser.toKey()];if(n){const s=n.get(e);s&&(t?s.reject(t):s.resolve(),n=n.remove(e)),a.Ru[a.currentUser.toKey()]=n}}function eo(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const a of i.Tu.get(e))i.Pu.delete(a),t&&i.hu.pu(a,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach(a=>{i.Au.containsKey(a)||p0(i,a)})}function p0(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Bo(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),Yo(i))}function Uu(i,e,t){for(const a of t)a instanceof c0?(i.Au.addReference(a.key,e),yy(i,a)):a instanceof l0?(V(Xo,"Document no longer in limbo: "+a.key),i.Au.removeReference(a.key,e),i.Au.containsKey(a.key)||p0(i,a.key)):G(19791,{yu:a})}function yy(i,e){const t=e.key,a=t.path.canonicalString();i.du.get(t)||i.Iu.has(a)||(V(Xo,"New document in limbo: "+t),i.Iu.add(a),Yo(i))}function Yo(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new F(ae.fromString(e)),a=i.mu.next();i.Eu.set(a,new cy(t)),i.du=i.du.insert(t,a),i0(i.remoteStore,new Lt(at(Ss(t.path)),a,"TargetPurposeLimboResolution",Es.ue))}}async function en(i,e,t){const a=z(i),n=[],s=[],o=[];a.Pu.isEmpty()||(a.Pu.forEach((c,l)=>{o.push(a.gu(l,e,t).then(d=>{var h;if((d||t)&&a.isPrimaryClient){const f=d?!d.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;a.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(d){n.push(d);const f=Oo.Es(l.targetId,d);s.push(f)}}))}),await Promise.all(o),a.hu.J_(n),await async function(l,d){const h=z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>R.forEach(d,g=>R.forEach(g.Is,b=>h.persistence.referenceDelegate.addReference(f,g.targetId,b)).next(()=>R.forEach(g.ds,b=>h.persistence.referenceDelegate.removeReference(f,g.targetId,b)))))}catch(f){if(!Xi(f))throw f;V(Fo,"Failed to update sequence numbers: "+f)}for(const f of d){const g=f.targetId;if(!f.fromCache){const b=h.Fs.get(g),_=b.snapshotVersion,w=b.withLastLimboFreeSnapshotVersion(_);h.Fs=h.Fs.insert(g,w)}}}(a.localStore,s))}async function Ey(i,e){const t=z(i);if(!t.currentUser.isEqual(e)){V(Xo,"User change. New user:",e.toKey());const a=await Ym(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(c=>{c.forEach(l=>{l.reject(new D(P.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await en(t,a.Bs)}}function Ay(i,e){const t=z(i),a=t.Eu.get(e);if(a&&a.lu)return Q().add(a.key);{let n=Q();const s=t.Tu.get(e);if(!s)return n;for(const o of s){const c=t.Pu.get(o);n=n.unionWith(c.view.tu)}return n}}function f0(i){const e=z(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=d0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ay.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gy.bind(null,e),e.hu.J_=ny.bind(null,e.eventManager),e.hu.pu=sy.bind(null,e.eventManager),e}function Cy(i){const e=z(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=by.bind(null,e),e}class os{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ws(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Ib(this.persistence,new Sb,e.initialUser,this.serializer)}Du(e){return new Xm(No.Vi,this.serializer)}bu(e){return new Mb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}os.provider={build:()=>new os};class Sy extends os{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ee(this.persistence.referenceDelegate instanceof ss,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new cb(a,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new Xm(a=>ss.Vi(a,t),this.serializer)}}class to{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Mu(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ey.bind(null,this.syncEngine),await ty(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ay}()}createDatastore(e){const t=ws(e.databaseInfo.databaseId),a=function(s){return new Nb(s)}(e.databaseInfo);return function(s,o,c,l){return new Gb(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,a,t)}createRemoteStore(e){return function(a,n,s,o,c){return new jb(a,n,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Mu(this.syncEngine,t,0),function(){return qu.C()?new qu:new Ub}())}createSyncEngine(e,t){return function(n,s,o,c,l,d,h){const f=new ly(n,s,o,c,l,d);return h&&(f.fu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(n){const s=z(n);V(gi,"RemoteStore shutting down."),s.Ia.add(5),await Za(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}to.provider={build:()=>new to};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):At("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="FirestoreClient";class Ty{constructor(e,t,a,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this.databaseInfo=n,this.user=we.UNAUTHENTICATED,this.clientId=Io.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(a,async o=>{V(Qt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(a,o=>(V(Qt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const a=zo(t,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function Sr(i,e){i.asyncQueue.verifyOperationInProgress(),V(Qt,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let a=t.initialUser;i.setCredentialChangeListener(async n=>{a.isEqual(n)||(await Ym(e.localStore,n),a=n)}),e.persistence.setDatabaseDeletedListener(()=>{jt("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then(()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(n=>{jt("Terminating Firestore due to IndexedDb database deletion failed",n)})}),i._offlineComponents=e}async function Du(i,e){i.asyncQueue.verifyOperationInProgress();const t=await _y(i);V(Qt,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(a=>wu(e.remoteStore,a)),i.setAppCheckTokenChangeListener((a,n)=>wu(e.remoteStore,n)),i._onlineComponents=e}async function _y(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){V(Qt,"Using user provided OfflineComponentProvider");try{await Sr(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}(t))throw t;jt("Error using user provided cache. Falling back to memory cache: "+t),await Sr(i,new os)}}else V(Qt,"Using default OfflineComponentProvider"),await Sr(i,new Sy(void 0));return i._offlineComponents}async function g0(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(V(Qt,"Using user provided OnlineComponentProvider"),await Du(i,i._uninitializedComponentsProvider._online)):(V(Qt,"Using default OnlineComponentProvider"),await Du(i,new to))),i._onlineComponents}function Iy(i){return g0(i).then(e=>e.syncEngine)}async function cs(i){const e=await g0(i),t=e.eventManager;return t.onListen=uy.bind(null,e.syncEngine),t.onUnlisten=hy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=py.bind(null,e.syncEngine),t}function qy(i,e,t={}){const a=new bt;return i.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,d){const h=new Zo({next:g=>{h.Ou(),o.enqueueAndForget(()=>Wo(s,f));const b=g.docs.has(c);!b&&g.fromCache?d.reject(new D(P.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&g.fromCache&&l&&l.source==="server"?d.reject(new D(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),f=new Qo(Ss(c.path),h,{includeMetadataChanges:!0,ka:!0});return Jo(s,f)}(await cs(i),i.asyncQueue,e,t,a)),a.promise}function xy(i,e,t={}){const a=new bt;return i.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,d){const h=new Zo({next:g=>{h.Ou(),o.enqueueAndForget(()=>Wo(s,f)),g.fromCache&&l.source==="server"?d.reject(new D(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),f=new Qo(c,h,{includeMetadataChanges:!0,ka:!0});return Jo(s,f)}(await cs(i),i.asyncQueue,e,t,a)),a.promise}/**
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
 */function v0(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="firestore.googleapis.com",Lu=!0;class Nu{constructor(e){var t,a;if(e.host===void 0){if(e.ssl!==void 0)throw new D(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=b0,this.ssl=Lu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Lu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rb)throw new D(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}H2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v0((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,n){return a.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ks{constructor(e,t,a,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new V2;switch(a.type){case"firstParty":return new F2(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new D(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const a=Vu.get(t);a&&(V("ComponentProvider","Removing Datastore"),Vu.delete(t),a.terminate())}(this),Promise.resolve()}}function wy(i,e,t,a={}){var n;i=Ne(i,ks);const s=zi(e),o=i._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:i._getEmulatorOptions()}),l=`${e}:${t}`;s&&(md(`https://${l}`),hd("Firestore",!0)),o.host!==b0&&o.host!==l&&jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:l,ssl:s,emulatorOptions:a});if(!$t(d,c)&&(i._setSettings(d),a.mockUserToken)){let h,f;if(typeof a.mockUserToken=="string")h=a.mockUserToken,f=we.MOCK_USER;else{h=Gh(a.mockUserToken,(n=i._app)===null||n===void 0?void 0:n.options.projectId);const g=a.mockUserToken.sub||a.mockUserToken.user_id;if(!g)throw new D(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new we(g)}i._authCredentials=new L2(new rm(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,a){this.converter=t,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new yi(this.firestore,e,this._query)}}class ce{constructor(e,t,a){this.converter=t,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,a){if(Ka(t,ce._jsonSchema))return new ce(e,a||null,new F(ae.fromString(t.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:me("string",ce._jsonSchemaVersion),referencePath:me("string")};class Gt extends yi{constructor(e,t,a){super(e,t,Ss(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new F(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function Je(i,e,...t){if(i=he(i),cm("collection","path",e),i instanceof ks){const a=ae.fromString(e,...t);return Xl(a),new Gt(i,null,a)}{if(!(i instanceof ce||i instanceof Gt))throw new D(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(ae.fromString(e,...t));return Xl(a),new Gt(i.firestore,null,a)}}function qt(i,e,...t){if(i=he(i),arguments.length===1&&(e=Io.newId()),cm("doc","path",e),i instanceof ks){const a=ae.fromString(e,...t);return Ql(a),new ce(i,null,new F(a))}{if(!(i instanceof ce||i instanceof Gt))throw new D(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(ae.fromString(e,...t));return Ql(a),new ce(i.firestore,i instanceof Gt?i.converter:null,new F(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="AsyncQueue";class Fu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new e0(this,"async_queue_retry"),this.oc=()=>{const a=Cr();a&&V(Ou,"Visibility state changed to "+a.visibilityState),this.F_.y_()},this._c=e;const t=Cr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Cr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new bt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Xi(e))throw e;V(Ou,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(a=>{throw this.tc=a,this.nc=!1,At("INTERNAL UNHANDLED ERROR: ",Bu(a)),a}).then(a=>(this.nc=!1,a))));return this._c=t,t}enqueueAfterDelay(e,t,a){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const n=Ho.createAndSchedule(this,e,t,a,s=>this.lc(s));return this.ec.push(n),n}ac(){this.tc&&G(47125,{hc:Bu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,a)=>t.targetTimeMs-a.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Bu(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(i){return function(t,a){if(typeof t!="object"||t===null)return!1;const n=t;for(const s of a)if(s in n&&typeof n[s]=="function")return!0;return!1}(i,["next","error","complete"])}class St extends ks{constructor(e,t,a,n){super(e,t,a,n),this.type="firestore",this._queue=new Fu,this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fu(e),this._firestoreClient=void 0,await e}}}function Py(i,e){const t=typeof i=="object"?i:vd(),a=typeof i=="string"?i:Zn,n=ho(t,"firestore").getImmediate({identifier:a});if(!n._initialized){const s=Fh("firestore");s&&wy(n,...s)}return n}function Ms(i){if(i._terminated)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Ry(i),i._firestoreClient}function Ry(i){var e,t,a;const n=i._freezeSettings(),s=function(c,l,d,h){return new iv(c,l,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,v0(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,n);i._componentsProvider||!((t=n.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((a=n.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(i._componentsProvider={_offline:n.localCache._offlineComponentProvider,_online:n.localCache._onlineComponentProvider}),i._firestoreClient=new Ty(i._authCredentials,i._appCheckCredentials,i._queue,s,i._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(Se.fromBase64String(e))}catch(t){throw new D(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ka(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:me("string",je._jsonSchemaVersion),bytes:me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:st._jsonSchemaVersion}}static fromJSON(e){if(Ka(e,st._jsonSchema))return new st(e.latitude,e.longitude)}}st._jsonSchemaVersion="firestore/geoPoint/1.0",st._jsonSchema={type:me("string",st._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
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
 */class rt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(a,n){if(a.length!==n.length)return!1;for(let s=0;s<a.length;++s)if(a[s]!==n[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:rt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ka(e,rt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new rt(e.vectorValues);throw new D(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rt._jsonSchemaVersion="firestore/vectorValue/1.0",rt._jsonSchema={type:me("string",rt._jsonSchemaVersion),vectorValues:me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=/^__.*__$/;class My{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xa(e,this.data,t,this.fieldTransforms)}}class y0{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return new ei(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function E0(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ec:i})}}class Ds{constructor(e,t,a,n,s,o){this.settings=e,this.databaseId=t,this.serializer=a,this.ignoreUndefinedProperties=n,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ds(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const a=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.Rc({path:a,mc:!1});return n.fc(e),n}gc(e){var t;const a=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.Rc({path:a,mc:!1});return n.Ac(),n}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ls(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(E0(this.Ec)&&ky.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Uy{constructor(e,t,a){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=a||ws(e)}Dc(e,t,a,n=!1){return new Ds({Ec:e,methodName:t,bc:a,path:Ce.emptyPath(),mc:!1,Sc:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vs(i){const e=i._freezeSettings(),t=ws(i._databaseId);return new Uy(i._databaseId,!!e.ignoreUndefinedProperties,t)}function A0(i,e,t,a,n,s={}){const o=i.Dc(s.merge||s.mergeFields?2:0,e,t,n);ic("Data must be an object, but it was:",o,a);const c=C0(a,o);let l,d;if(s.merge)l=new $e(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const g=io(e,f,t);if(!o.contains(g))throw new D(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);T0(h,g)||h.push(g)}l=new $e(h),d=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,d=o.fieldTransforms;return new My(new Ve(c),l,d)}class Ls extends tn{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ls}}function Dy(i,e,t){return new Ds({Ec:3,bc:e.settings.bc,methodName:i._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ec extends tn{_toFieldTransform(e){return new Lm(e.path,new Fa)}isEqual(e){return e instanceof ec}}class tc extends tn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Dy(this,e,!0),a=this.vc.map(s=>Zi(s,t)),n=new Bi(a);return new Lm(e.path,n)}isEqual(e){return e instanceof tc&&$t(this.vc,e.vc)}}function Vy(i,e,t,a){const n=i.Dc(1,e,t);ic("Data must be an object, but it was:",n,a);const s=[],o=Ve.empty();Zt(a,(l,d)=>{const h=ac(e,l,t);d=he(d);const f=n.gc(h);if(d instanceof Ls)s.push(h);else{const g=Zi(d,f);g!=null&&(s.push(h),o.set(h,g))}});const c=new $e(s);return new y0(o,c,n.fieldTransforms)}function Ly(i,e,t,a,n,s){const o=i.Dc(1,e,t),c=[io(e,a,t)],l=[n];if(s.length%2!=0)throw new D(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)c.push(io(e,s[g])),l.push(s[g+1]);const d=[],h=Ve.empty();for(let g=c.length-1;g>=0;--g)if(!T0(d,c[g])){const b=c[g];let _=l[g];_=he(_);const w=o.gc(b);if(_ instanceof Ls)d.push(b);else{const q=Zi(_,w);q!=null&&(d.push(b),h.set(b,q))}}const f=new $e(d);return new y0(h,f,o.fieldTransforms)}function Ny(i,e,t,a=!1){return Zi(t,i.Dc(a?4:3,e))}function Zi(i,e){if(S0(i=he(i)))return ic("Unsupported field value:",e,i),C0(i,e);if(i instanceof tn)return function(a,n){if(!E0(n.Ec))throw n.wc(`${a._methodName}() can only be used with update() and set()`);if(!n.path)throw n.wc(`${a._methodName}() is not currently supported inside arrays`);const s=a._toFieldTransform(n);s&&n.fieldTransforms.push(s)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(a,n){const s=[];let o=0;for(const c of a){let l=Zi(c,n.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(i,e)}return function(a,n){if((a=he(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return _v(n.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const s=se.fromDate(a);return{timestampValue:ns(n.serializer,s)}}if(a instanceof se){const s=new se(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:ns(n.serializer,s)}}if(a instanceof st)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof je)return{bytesValue:$m(n.serializer,a._byteString)};if(a instanceof ce){const s=n.databaseId,o=a.firestore._databaseId;if(!o.isEqual(s))throw n.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Vo(a.firestore._databaseId||n.databaseId,a._key.path)}}if(a instanceof rt)return function(o,c){return{mapValue:{fields:{[vm]:{stringValue:bm},[es]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return ko(c.serializer,d)})}}}}}}(a,n);throw n.wc(`Unsupported field value: ${ys(a)}`)}(i,e)}function C0(i,e){const t={};return dm(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zt(i,(a,n)=>{const s=Zi(n,e.Vc(a));s!=null&&(t[a]=s)}),{mapValue:{fields:t}}}function S0(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof se||i instanceof st||i instanceof je||i instanceof ce||i instanceof tn||i instanceof rt)}function ic(i,e,t){if(!S0(t)||!lm(t)){const a=ys(t);throw a==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+a)}}function io(i,e,t){if((e=he(e))instanceof Us)return e._internalPath;if(typeof e=="string")return ac(i,e);throw ls("Field path arguments must be of type string or ",i,!1,void 0,t)}const Oy=new RegExp("[~\\*/\\[\\]]");function ac(i,e,t){if(e.search(Oy)>=0)throw ls(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Us(...e.split("."))._internalPath}catch{throw ls(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function ls(i,e,t,a,n){const s=a&&!a.isEmpty(),o=n!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${a}`),o&&(l+=` in document ${n}`),l+=")"),new D(P.INVALID_ARGUMENT,c+i+l)}function T0(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t,a,n,s){this._firestore=e,this._userDataWriter=t,this._key=a,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(nc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fy extends _0{data(){return super.data()}}function nc(i,e){return typeof e=="string"?ac(i,e):e instanceof Us?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new D(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sc{}class By extends sc{}function ti(i,e,...t){let a=[];e instanceof sc&&a.push(e),a=a.concat(t),function(s){const o=s.filter(l=>l instanceof rc).length,c=s.filter(l=>l instanceof Ns).length;if(o>1||o>0&&c>0)throw new D(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a);for(const n of a)i=n._apply(i);return i}class Ns extends By{constructor(e,t,a){super(),this._field=e,this._op=t,this._value=a,this.type="where"}static _create(e,t,a){return new Ns(e,t,a)}_apply(e){const t=this._parse(e);return q0(e._query,t),new yi(e.firestore,e.converter,Hr(e._query,t))}_parse(e){const t=Vs(e.firestore);return function(s,o,c,l,d,h,f){let g;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new D(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){ju(f,h);const _=[];for(const w of f)_.push($u(l,s,w));g={arrayValue:{values:_}}}else g=$u(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||ju(f,h),g=Ny(c,o,f,h==="in"||h==="not-in");return de.create(d,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tt(i,e,t){const a=e,n=nc("where",i);return Ns._create(n,a,t)}class rc extends sc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rc(e,t)}_parse(e){const t=this._queryConstraints.map(a=>a._parse(e)).filter(a=>a.getFilters().length>0);return t.length===1?t[0]:Ze.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(n,s){let o=n;const c=s.getFlattenedFilters();for(const l of c)q0(o,l),o=Hr(o,l)}(e._query,t),new yi(e.firestore,e.converter,Hr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $u(i,e,t){if(typeof(t=he(t))=="string"){if(t==="")throw new D(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Im(e)&&t.indexOf("/")!==-1)throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const a=e.path.child(ae.fromString(t));if(!F.isDocumentKey(a))throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return su(i,new F(a))}if(t instanceof ce)return su(i,t._key);throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ys(t)}.`)}function ju(i,e){if(!Array.isArray(i)||i.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function q0(i,e){const t=function(n,s){for(const o of n)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(i.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Gy{convertValue(e,t="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const a={};return Zt(e,(n,s)=>{a[n]=this.convertValue(s,t)}),a}convertVectorValue(e){var t,a,n;const s=(n=(a=(t=e.fields)===null||t===void 0?void 0:t[es].arrayValue)===null||a===void 0?void 0:a.values)===null||n===void 0?void 0:n.map(o=>le(o.doubleValue));return new rt(s)}convertGeoPoint(e){return new st(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(a=>this.convertValue(a,t))}convertServerTimestamp(e,t){switch(t){case"previous":const a=Cs(e);return a==null?null:this.convertValue(a,t);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const t=zt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const a=ae.fromString(e);ee(Km(a),9688,{name:e});const n=new Na(a.get(1),a.get(3)),s=new F(a.popFirst(5));return n.isEqual(t)||At(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(i,e,t){let a;return a=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,a}class Ia{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ui extends _0{constructor(e,t,a,n,s,o){super(e,t,a,n,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const a=this._document.data.field(nc("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ui._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ui._jsonSchemaVersion="firestore/documentSnapshot/1.0",ui._jsonSchema={type:me("string",ui._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class Fn extends ui{data(e={}){return super.data(e)}}class di{constructor(e,t,a,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new Ia(n.hasPendingWrites,n.fromCache),this.query=a}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(a=>{e.call(t,new Fn(this._firestore,this._userDataWriter,a.key,a,new Ia(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,s){if(n._snapshot.oldDocs.isEmpty()){let o=0;return n._snapshot.docChanges.map(c=>{const l=new Fn(n._firestore,n._userDataWriter,c.doc.key,c.doc,new Ia(n._snapshot.mutatedKeys.has(c.doc.key),n._snapshot.fromCache),n.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new Fn(n._firestore,n._userDataWriter,c.doc.key,c.doc,new Ia(n._snapshot.mutatedKeys.has(c.doc.key),n._snapshot.fromCache),n.query.converter);let d=-1,h=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:$y(c.type),doc:l,oldIndex:d,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=di._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Io.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],a=[],n=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),a.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),n.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $y(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(i){i=Ne(i,ce);const e=Ne(i.firestore,St);return qy(Ms(e),i._key).then(t=>P0(e,i,t))}di._jsonSchemaVersion="firestore/querySnapshot/1.0",di._jsonSchema={type:me("string",di._jsonSchemaVersion),bundleSource:me("string","QuerySnapshot"),bundleName:me("string"),bundle:me("string")};class cc extends Gy{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}function Ei(i){i=Ne(i,yi);const e=Ne(i.firestore,St),t=Ms(e),a=new cc(e);return I0(i._query),xy(t,i._query).then(n=>new di(e,a,i,n))}function w0(i,e,t){i=Ne(i,ce);const a=Ne(i.firestore,St),n=x0(i.converter,e,t);return Fs(a,[A0(Vs(a),"setDoc",i._key,n,i.converter!==null,t).toMutation(i._key,He.none())])}function lc(i,e,t,...a){i=Ne(i,ce);const n=Ne(i.firestore,St),s=Vs(n);let o;return o=typeof(e=he(e))=="string"||e instanceof Us?Ly(s,"updateDoc",i._key,e,t,a):Vy(s,"updateDoc",i._key,e),Fs(n,[o.toMutation(i._key,He.exists(!0))])}function jy(i){return Fs(Ne(i.firestore,St),[new Mo(i._key,He.none())])}function Os(i,e){const t=Ne(i.firestore,St),a=qt(i),n=x0(i.converter,e);return Fs(t,[A0(Vs(i.firestore),"addDoc",a._key,n,i.converter!==null,{}).toMutation(a._key,He.exists(!1))]).then(()=>a)}function Hy(i,...e){var t,a,n;i=he(i);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Gu(e[o])||(s=e[o++]);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Gu(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(a=f.error)===null||a===void 0?void 0:a.bind(f),e[o+2]=(n=f.complete)===null||n===void 0?void 0:n.bind(f)}let l,d,h;if(i instanceof ce)d=Ne(i.firestore,St),h=Ss(i._key.path),l={next:f=>{e[o]&&e[o](P0(d,i,f))},error:e[o+1],complete:e[o+2]};else{const f=Ne(i,yi);d=Ne(f.firestore,St),h=f._query;const g=new cc(d);l={next:b=>{e[o]&&e[o](new di(d,g,f,b))},error:e[o+1],complete:e[o+2]},I0(i._query)}return function(g,b,_,w){const q=new Zo(w),U=new Qo(b,q,_);return g.asyncQueue.enqueueAndForget(async()=>Jo(await cs(g),U)),()=>{q.Ou(),g.asyncQueue.enqueueAndForget(async()=>Wo(await cs(g),U))}}(Ms(d),h,c,l)}function Fs(i,e){return function(a,n){const s=new bt;return a.asyncQueue.enqueueAndForget(async()=>fy(await Iy(a),n,s)),s.promise}(Ms(i),e)}function P0(i,e,t){const a=t.docs.get(e._key),n=new cc(i);return new ui(i,n,e._key,a,new Ia(t.hasPendingWrites,t.fromCache),e.converter)}function ji(){return new ec("serverTimestamp")}function ao(...i){return new tc("arrayUnion",i)}(function(e,t=!0){(function(n){Ki=n})(Ji),Vi(new mi("firestore",(a,{instanceIdentifier:n,options:s})=>{const o=a.getProvider("app").getImmediate(),c=new St(new N2(a.getProvider("auth-internal")),new B2(o,a.getProvider("app-check-internal")),function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Na(d.options.projectId,h)}(o,n),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ft(Hl,zl,e),Ft(Hl,zl,"esm2017")})();const zy={apiKey:"AIzaSyC-NphT5yoEBjG2r0IrQJrJSb5K5AYbEMc",authDomain:"flow-docent-app.firebaseapp.com",projectId:"flow-docent-app",storageBucket:"flow-docent-app.firebasestorage.app",messagingSenderId:"254132663644",appId:"1:254132663644:web:de97eb7ed43da37c297d99"},R0=gd(zy),pe=Py(R0),an=k2(R0);async function uc(i){const e=await oc(qt(pe,"users",i));return e.exists()?{id:e.id,...e.data()}:null}async function ea(i,e){await w0(qt(pe,"users",i),e,{merge:!0})}function Jy(){const i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>i[Math.floor(Math.random()*i.length)]).join("")}async function Wy(i,e,t){let a,n=!0;for(;n;){a=Jy();const o=ti(Je(pe,"classes"),Tt("codi","==",a));n=!(await Ei(o)).empty}const s=await Os(Je(pe,"classes"),{codi:a,nom:t,professorId:i,professorNom:e,alumnes:[],createdAt:ji()});return await ea(i,{classesCreades:ao(s.id)}),{id:s.id,codi:a,nom:t}}async function Ky(i){const e=ti(Je(pe,"classes"),Tt("codi","==",i.toUpperCase().trim())),t=await Ei(e);if(t.empty)return null;const a=t.docs[0];return{id:a.id,...a.data()}}async function Qy(i,e){await lc(qt(pe,"classes",i),{alumnes:ao(e)}),await ea(e.uid,{classesUnides:ao(i)})}async function k0(i){const e=await oc(qt(pe,"classes",i));return e.exists()?{id:e.id,...e.data()}:null}async function M0(i){const e=ti(Je(pe,"classes"),Tt("professorId","==",i));return(await Ei(e)).docs.map(a=>({id:a.id,...a.data()}))}async function Xy(i){return i!=null&&i.length?(await Promise.all(i.map(t=>k0(t)))).filter(Boolean):[]}async function Yy(i){return{id:(await Os(Je(pe,"tasques"),{...i,createdAt:ji()})).id,...i}}async function U0(i){const e=ti(Je(pe,"tasques"),Tt("classeId","==",i));return(await Ei(e)).docs.map(a=>({id:a.id,...a.data()})).sort((a,n)=>{var c,l,d,h;const s=((l=(c=a.createdAt)==null?void 0:c.toMillis)==null?void 0:l.call(c))||0;return(((h=(d=n.createdAt)==null?void 0:d.toMillis)==null?void 0:h.call(d))||0)-s})}async function Zy(i){await jy(qt(pe,"tasques",i))}async function e1(i){const e=ti(Je(pe,"lliuraments"),Tt("tasqueId","==",i.tasqueId),Tt("alumneId","==",i.alumneId)),t=await Ei(e);return t.empty?{id:(await Os(Je(pe,"lliuraments"),{...i,nota:null,comentariProf:"",dataEnviat:ji()})).id,...i}:(await lc(t.docs[0].ref,{...i,updatedAt:ji()}),{id:t.docs[0].id,...i})}async function t1(i){const e=ti(Je(pe,"lliuraments"),Tt("tasqueId","==",i));return(await Ei(e)).docs.map(a=>({id:a.id,...a.data()}))}async function i1(i){const e=ti(Je(pe,"lliuraments"),Tt("alumneId","==",i));return(await Ei(e)).docs.map(a=>({id:a.id,...a.data()}))}async function a1(i,e,t){await lc(qt(pe,"lliuraments",i),{nota:parseFloat(e),comentariProf:t,qualificatAt:ji()})}async function D0(i){const e=await oc(qt(pe,"cami",i));return e.exists()?e.data():{}}async function n1(i,e,t){await w0(qt(pe,"cami",i),{[e]:t},{merge:!0})}async function Tr(i,e,t,a,n){return(await Os(Je(pe,"messages"),{classeId:i,alumneId:e,alumneNom:t,tipus:a,contingut:n,createdAt:ji()})).id}function s1(i,e){const t=ti(Je(pe,"messages"),Tt("classeId","==",i));return Hy(t,a=>{const n=a.docs.map(s=>{var o;return{id:s.id,...s.data(),time:((o=s.data().createdAt)==null?void 0:o.toMillis())||Date.now()}}).sort((s,o)=>s.time-o.time);e(n)},a=>{console.error("Firebase listen error:",a),alert("Hi ha un problema intentant llegir els missatges de Firebase. Revisa les 'Rules' del teu projecte Firebase. L'error és: "+a.message)})}let Xe=null,Ae=null;const r1=new pt;function fe(){return Xe}function ii(){return Ae}function o1(){return(Ae==null?void 0:Ae.rol)||null}function Bs(){return o1()==="professor"}function c1(i,e){return new Promise(t=>{Eg(an,async a=>{a?(Xe=a,Ae=await uc(a.uid),Ae?(i(Xe,Ae),t(Ae)):(Xe=a,Ae=null,t(null))):(Xe=null,Ae=null,e(),t(null))})})}async function l1(i,e,t,a){const n=await pg(an,e,t);await vg(n.user,{displayName:i});const s={nom:i,email:e,rol:a,classeActiva:null,classesCreades:[],classesUnides:[]};return await ea(n.user.uid,s),Xe=n.user,Ae=s,{user:n.user,profile:s}}async function u1(i,e){const t=await fg(an,i,e);return Xe=t.user,Ae=await uc(t.user.uid),{user:t.user,profile:Ae}}async function d1(i=null){const t=(await Bg(an,r1)).user;Xe=t;let a=await uc(t.uid);if(!a){if(!i)throw new Error("ROL_NEEDED");a={nom:t.displayName||t.email.split("@")[0],email:t.email,rol:i,classeActiva:null,classesCreades:[],classesUnides:[]},await ea(t.uid,a)}return Ae=a,{user:t,profile:a}}async function m1(i){if(!Xe)throw new Error("No hi ha sessió activa");const e={...Ae,rol:i};return await ea(Xe.uid,e),Ae=e,e}async function h1(){await Ag(an),Xe=null,Ae=null}function k(i=""){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function V0(i="",e=""){return(i[0]||"")+(e[0]||"")}function p1(){return new Date().toLocaleDateString("ca-ES",{day:"numeric",month:"long",year:"numeric"})}function Gs(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Hu(i){const e=parseFloat(i.min)||0,t=parseFloat(i.max)||100,n=((parseFloat(i.value)||0)-e)/(t-e)*100;i.style.setProperty("--pct",`${n}%`)}function f1(i,e){i.innerHTML=g1(),v1(i,e)}function g1(){return`
    <div class="auth-wrap">
      <div class="auth-card">
        <!-- Brand -->
        <div class="auth-brand">
          <div class="auth-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" stroke="none"/>
            </svg>
          </div>
          <h1 class="auth-title">Orientació Acadèmica</h1>
          <p class="auth-subtitle">Plataforma de referència per a estudiants i docents · Olot</p>
        </div>

        <!-- Rol selector -->
        <div class="auth-step" id="auth-step-rol">
          <p class="auth-step-label">Qui ets?</p>
          <div class="rol-grid">
            <button class="rol-card" data-rol="professor">
              <div class="rol-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span class="rol-card-name">Sóc docent</span>
              <span class="rol-card-desc">Gestiono classes, publico tasques i segueixo l'alumnat</span>
            </button>
            <button class="rol-card" data-rol="alumne">
              <div class="rol-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <span class="rol-card-name">Sóc alumne/a</span>
              <span class="rol-card-desc">M'uneixo a una classe i faig el seguiment del meu camí</span>
            </button>
          </div>
        </div>

        <!-- Auth form -->
        <div class="auth-step" id="auth-step-form" style="display:none;">
          <div class="auth-tabs">
            <button class="auth-tab active" id="tab-login">Accedeix</button>
            <button class="auth-tab" id="tab-register">Registra't</button>
          </div>

          <!-- Login form -->
          <div id="auth-form-login">
            <div class="auth-google-btn" id="auth-btn-google">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continua amb Google
            </div>
            <div class="auth-divider"><span>o</span></div>
            <div class="form-group mb-3">
              <label class="form-label" for="login-email">Correu electrònic</label>
              <input class="form-input" id="login-email" type="email" autocomplete="email" placeholder="nom@escola.cat" />
            </div>
            <div class="form-group mb-4">
              <label class="form-label" for="login-password">Contrasenya</label>
              <input class="form-input" id="login-password" type="password" autocomplete="current-password" placeholder="••••••••" />
            </div>
            <button class="btn btn--primary w-full" id="auth-btn-login">Accedir</button>
          </div>

          <!-- Register form -->
          <div id="auth-form-register" style="display:none;">
            <div class="auth-google-btn" id="auth-btn-google-reg">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continua amb Google
            </div>
            <div class="auth-divider"><span>o</span></div>
            <div class="form-group mb-3">
              <label class="form-label" for="reg-nom">Nom i cognoms</label>
              <input class="form-input" id="reg-nom" type="text" autocomplete="name" placeholder="Maria Garcia..." />
            </div>
            <div class="form-group mb-3">
              <label class="form-label" for="reg-email">Correu electrònic</label>
              <input class="form-input" id="reg-email" type="email" autocomplete="email" placeholder="nom@escola.cat" />
            </div>
            <div class="form-group mb-4">
              <label class="form-label" for="reg-password">Contrasenya (mínim 6 caràcters)</label>
              <input class="form-input" id="reg-password" type="password" autocomplete="new-password" placeholder="••••••••" />
            </div>
            <button class="btn btn--primary w-full" id="auth-btn-register">Crear compte</button>
          </div>

          <p id="auth-error" class="auth-error" style="display:none;"></p>
        </div>

        <div class="auth-back-row" id="auth-back-row" style="display:none;">
          <button class="btn btn--ghost btn--sm" id="auth-btn-back">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Torna enrere
          </button>
        </div>
      </div>
    </div>`}function v1(i,e){var n,s,o,c,l,d,h;let t=null;i.querySelectorAll(".rol-card").forEach(f=>{f.addEventListener("click",()=>{t=f.dataset.rol,i.querySelectorAll(".rol-card").forEach(g=>g.classList.remove("active")),f.classList.add("active"),i.querySelector("#auth-step-rol").style.display="none",i.querySelector("#auth-step-form").style.display="",i.querySelector("#auth-back-row").style.display=""})}),(n=i.querySelector("#tab-login"))==null||n.addEventListener("click",()=>{i.querySelector("#tab-login").classList.add("active"),i.querySelector("#tab-register").classList.remove("active"),i.querySelector("#auth-form-login").style.display="",i.querySelector("#auth-form-register").style.display="none",_r(i)}),(s=i.querySelector("#tab-register"))==null||s.addEventListener("click",()=>{i.querySelector("#tab-register").classList.add("active"),i.querySelector("#tab-login").classList.remove("active"),i.querySelector("#auth-form-login").style.display="none",i.querySelector("#auth-form-register").style.display="",_r(i)}),(o=i.querySelector("#auth-btn-back"))==null||o.addEventListener("click",()=>{i.querySelector("#auth-step-rol").style.display="",i.querySelector("#auth-step-form").style.display="none",i.querySelector("#auth-back-row").style.display="none",t=null,_r(i)}),(c=i.querySelector("#auth-btn-login"))==null||c.addEventListener("click",async()=>{var b,_,w;const f=(_=(b=i.querySelector("#login-email"))==null?void 0:b.value)==null?void 0:_.trim(),g=(w=i.querySelector("#login-password"))==null?void 0:w.value;if(!f||!g){dt(i,"Omple tots els camps.");return}try{_i(i,!0);const{profile:q}=await u1(f,g);if(!q){dt(i,"No s'ha trobat el perfil. Contacta amb el teu centre.");return}e(q)}catch(q){dt(i,Ir(q))}finally{_i(i,!1)}}),(l=i.querySelector("#auth-btn-register"))==null||l.addEventListener("click",async()=>{var _,w,q,U,N;const f=(w=(_=i.querySelector("#reg-nom"))==null?void 0:_.value)==null?void 0:w.trim(),g=(U=(q=i.querySelector("#reg-email"))==null?void 0:q.value)==null?void 0:U.trim(),b=(N=i.querySelector("#reg-password"))==null?void 0:N.value;if(!f||!g||!b){dt(i,"Omple tots els camps.");return}if(!t){dt(i,"Torna enrere i selecciona el teu rol.");return}if(b.length<6){dt(i,"La contrasenya ha de tenir almenys 6 caràcters.");return}try{_i(i,!0);const{profile:O}=await l1(f,g,b,t);e(O)}catch(O){dt(i,Ir(O))}finally{_i(i,!1)}});const a=async(f,g)=>{try{_i(f,!0);const{profile:b}=await d1(g||t);e(b)}catch(b){b.message==="ROL_NEEDED"?dt(f,"Selecciona primer si ets docent o alumne/a."):dt(f,Ir(b))}finally{_i(f,!1)}};(d=i.querySelector("#auth-btn-google"))==null||d.addEventListener("click",()=>a(i,t)),(h=i.querySelector("#auth-btn-google-reg"))==null||h.addEventListener("click",()=>a(i,t))}function dt(i,e){const t=i.querySelector("#auth-error");t&&(t.textContent=e,t.style.display="")}function _r(i){const e=i.querySelector("#auth-error");e&&(e.style.display="none")}function _i(i,e){i.querySelectorAll(".btn--primary, .auth-google-btn").forEach(t=>{t.disabled=e,t.style.opacity=e?"0.6":""})}function Ir(i){return{"auth/user-not-found":"No existeix cap compte amb aquest correu.","auth/wrong-password":"Contrasenya incorrecta.","auth/email-already-in-use":"Aquest correu ja té un compte. Prova a accedir.","auth/invalid-email":"El format del correu no és vàlid.","auth/weak-password":"La contrasenya és massa feble (mínim 6 caràcters).","auth/too-many-requests":"Massa intents fallits. Espera uns minuts i torna a provar.","auth/popup-closed-by-user":"Has tancat la finestra de Google. Torna a provar.","auth/invalid-credential":"Les credencials no són vàlides. Comprova correu i contrasenya."}[i.code]||`Error: ${i.message}`}const ta={eso:{id:"eso",label:"ESO",sublabel:"4t curs",color:"#4f8ef7",info:{titol:"Educació Secundària Obligatòria (ESO)",descripcio:"L'ESO és l'etapa obligatòria fins als 16 anys. En acabar, tens diverses opcions acadèmiques i professionals que s'adapten a les teves capacitats i interessos.",durada:"4 anys (fins els 16)",sortides:["Batxillerat","Cicles — Grau Mitjà","PTT / PFI","Treballar"],notaMinima:null,salari:null}},batxillerat:{id:"batxillerat",label:"Batxillerat",sublabel:"2 anys",color:"#8b7cf8",info:{titol:"Batxillerat",descripcio:"Etapa postobligatòria de 2 anys que prepara per a la universitat (via selectivitat). Existeixen tres modalitats a Olot. Requereix constància i motivació acadèmica.",durada:"2 anys",sortides:["Selectivitat (PAU)","Cicles — Grau Superior","Món laboral"],notaMinima:5,salari:null,modalitats:["Ciències i Tecnologia","Humanitats i Ciències Socials","Batxillerat d'Arts"]}},cicles:{id:"cicles",label:"Cicles d'Olot",sublabel:"FP a Olot",color:"#2dd4bf",info:{titol:"Cicles Formatius a Olot",descripcio:"La Formació Professional (FP) a Olot ofereix cicles de Grau Mitjà i Grau Superior en àmbits molt diversos. És un camí pràctic, orientat a l'ocupació, amb molt bona inserció laboral.",durada:"2 anys per cicle",sortides:["Treballar","Grau Superior","Universitat (algunes opcions)"],notaMinima:4,salari:null}},grauMitja:{id:"grauMitja",label:"Grau mitjà",sublabel:"FP nivell 3",color:"#2dd4bf",info:{titol:"Cicle Formatiu de Grau Mitjà",descripcio:"El Grau Mitjà és el primer nivell de la Formació Professional. Té una durada de 2 anys (inclou FCT — pràctiques en empresa). Permet accedir directament al món laboral o continuar cap al Grau Superior.",durada:"2 anys + pràctiques (FCT)",sortides:["Treballar","Grau Superior (mateix àmbit)","Batxillerat (en alguns casos)"],notaMinima:4,salari:"18.000–24.000 € bruts/any inicials"}},grauSuperior:{id:"grauSuperior",label:"Grau superior",sublabel:"FP nivell 5",color:"#4f8ef7",info:{titol:"Cicle Formatiu de Grau Superior",descripcio:"El Grau Superior és el segon nivell de la FP. Permet accedir-hi des del Batxillerat o des d'un Grau Mitjà del mateix àmbit. Inclou pràctiques (FCT) i és equivalent a nivell 5 del Marc Europeu de Qualificacions.",durada:"2 anys + pràctiques (FCT)",sortides:["Treballar (llocs de responsabilitat)","Universitat (convalidació de crèdits)","Màster professional"],notaMinima:5,salari:"22.000–32.000 € bruts/any inicials"}},pttPfi:{id:"pttPfi",label:"PTT / PFI",sublabel:"Transició i inserció",color:"#fbbf24",info:{titol:"PTT (Programa de Transició al Treball) / PFI (Programa de Formació i Inserció)",descripcio:"Programes pensats per a joves que han acabat l'ESO però necessiten un suport addicional per entrar al mercat laboral o per orientar-se cap a altres estudis. Combinen formació bàsica professional amb orientació laboral.",durada:"1 any",sortides:["Treballar","Cicles — Grau Mitjà","Preparació per a proves d'accés"],notaMinima:null,salari:null}},treballar:{id:"treballar",label:"Treballar",sublabel:"Món laboral",color:"#f472b6",info:{titol:"Incorporació al món laboral",descripcio:"Algunes persones opten per incorporar-se directament al mercat laboral en acabar l'ESO. És una opció vàlida, però és recomanable tenir almenys algun certificat professional o el Graduat en ESO per facilitar l'accés i la progressió.",durada:"—",sortides:["Formació contínua","Certificats de professionalitat","Tornar als estudis més endavant"],notaMinima:null,salari:"16.000–20.000 € bruts/any inicials (sense qualificació)"}},selectivitat:{id:"selectivitat",label:"Selectivitat",sublabel:"PAU",color:"#a78bfa",info:{titol:"Selectivitat — Proves d'Accés a la Universitat (PAU)",descripcio:"Les PAU (o selectivitat) són les proves que es fan en acabar el Batxillerat per accedir a la universitat. La nota final és la mitjana del batxillerat (60%) + nota de les proves (40%). Pots millorar nota amb matèries de fase específica.",durada:"Juny / setembre (exàmens)",sortides:["Universitat / Grau universitari"],notaMinima:5,salari:null}},universitat:{id:"universitat",label:"Universitat / Grau",sublabel:"4 anys",color:"#f59e0b",info:{titol:"Universitat — Grau Universitari",descripcio:"El grau universitari és la primera titulació universitària. Té una durada de 4 anys (240 crèdits ECTS). S'accedeix via selectivitat o, en alguns casos, via Grau Superior amb convalidació de crèdits.",durada:"4 anys (o més)",sortides:["Món laboral (titulació superior)","Màster universitari","Doctorat"],notaMinima:5,salari:"24.000–45.000 € bruts/any inicials (molt variable per àmbit)"}}},zu=[{id:"batx-univ",nom:"Batxillerat → Universitat",color:"#8b7cf8",perfil:["academic","ciencies","lletres","arts","universitat"],explicacio:"Camí acadèmic clàssic. Idoni per a qui vol estudiar una carrera universitària.",ruta:["eso","batxillerat","selectivitat","universitat"]},{id:"batx-gs",nom:"Batxillerat → Grau Superior",color:"#4f8ef7",perfil:["academic","tecnologia","practic"],explicacio:"Combina la solidesa del Batxillerat amb la professionalització d'un Grau Superior.",ruta:["eso","batxillerat","grauSuperior","treballar"]},{id:"gm-gs",nom:"Grau Mitjà → Grau Superior",color:"#2dd4bf",perfil:["practic","tecnologia","hands-on"],explicacio:"Camí professional progressiu. Molt bon accés al mercat laboral amb alta qualificació.",ruta:["eso","cicles","grauMitja","grauSuperior","treballar"]},{id:"gm-treball",nom:"Grau Mitjà → Treballar",color:"#f472b6",perfil:["practic","immediat","hands-on"],explicacio:"Formació professional directa i inserció ràpida al mercat laboral. Molt efectiu.",ruta:["eso","cicles","grauMitja","treballar"]},{id:"pfi-gm",nom:"PTT/PFI → Grau Mitjà",color:"#fbbf24",perfil:["suport","reorientacio","practica"],explicacio:"Per a qui necessita un acompanyament addicional abans d'entrar a un cicle formatiu.",ruta:["eso","pttPfi","grauMitja","treballar"]},{id:"eso-treballar",nom:"Treballar directament",color:"#f59e0b",perfil:["immediat","economic","practic"],explicacio:"Incorporació directa al mon laboral. Recomanable combinar-ho amb certificats professionals.",ruta:["eso","treballar"]}],b1=[{paraules:["universitat","carrera","medicina","dret","enginyeria","arquitectura","psicologia","farmacia"],perfils:["academic","universitat"],recorreguts:["batx-univ"]},{paraules:["ciencies","fisica","quimica","mates","matematiques","biologia","tecnologia","programacio","informatica"],perfils:["ciencies","tecnologia","academic"],recorreguts:["batx-univ","batx-gs"]},{paraules:["art","dibuix","disseny","moda","fotografia","animacio","creative","creatiu","creativa","musica","teatre","dansa"],perfils:["arts"],recorreguts:["batx-univ","gm-gs"]},{paraules:["practic","practica","praques","feina","treballar","treball","aviat","rapid","diner","sou","empresa"],perfils:["practic","immediat"],recorreguts:["gm-treball","gm-gs"]},{paraules:["cuina","restaurant","hostaleria","turisme","cuiner","pastisseria"],perfils:["practic","hands-on"],recorreguts:["gm-gs","gm-treball"]},{paraules:["sanitari","sanitat","infermer","infermeria","metge","salut","cures","ajudar","persones","social"],perfils:["practic","academic"],recorreguts:["batx-univ","gm-gs"]},{paraules:["esport","educacio","mestre","professor","nen","nens","monitors"],perfils:["academic","practic"],recorreguts:["batx-univ","gm-gs"]},{paraules:["no se","no sap","dubt","confus","confusa","perdut","perduda","suport","ajuda"],perfils:["suport","reorientacio"],recorreguts:["pfi-gm","gm-treball"]}],et=[{id:"bosc-de-la-coma",nom:"Institut Bosc de la Coma",adreca:"Carrer dels Caputxins, 104, 17800 Olot",coordenades:[42.1727,2.4763],color:"#4f8ef7",colorHex:"#4f8ef7",web:"https://agora.xtec.cat/iesbosccoma/",descripcio:"Institut públic d'Olot amb àmplia oferta de batxillerat i cicles formatius. Referent de la zona en formació professional. Molt ben valorat per la seva diversitat d'oferta i acompanyament a l'alumnat.",batxillerats:[{nom:"Humanitats i Ciències Socials",assignatures:["Història de la Filosofia","Història de l'Art","Història","Economia","Grec","Llatí","Literatura Catalana","Literatura Castellana","Matemàtiques Aplicades a les CC. Socials","Anglès"]},{nom:"Ciències i Tecnologia",assignatures:["Matemàtiques","Física","Química","Biologia","Geologia","Tecnologia Industrial","Electrotècnia","Ciències de la Terra","Anglès"]}],cicles:[{nom:"Gestió Administrativa",tipus:"Grau Mitjà",familia:"Administració i gestió",durada:"2000 h",prova:!0},{nom:"Cures Auxiliars d'Infermeria",tipus:"Grau Mitjà",familia:"Sanitat",durada:"2000 h",prova:!0},{nom:"Transport i Logística",tipus:"Grau Mitjà",familia:"Transport i manteniment",durada:"2000 h",prova:!1},{nom:"Activitats Comercials",tipus:"Grau Mitjà",familia:"Comerç i màrqueting",durada:"2000 h",prova:!1},{nom:"Administració i Finances",tipus:"Grau Superior",familia:"Administració i gestió",durada:"2000 h",prova:!0},{nom:"Integració Social",tipus:"Grau Superior",familia:"Serveis socioculturals i a la comunitat",durada:"2000 h",prova:!0},{nom:"Educació Infantil",tipus:"Grau Superior",familia:"Serveis socioculturals i a la comunitat",durada:"2000 h",prova:!0}]},{id:"la-garrotxa",nom:"Institut La Garrotxa",adreca:"Avinguda de les Tries, 26, 17800 Olot",coordenades:[42.1859,2.4741],color:"#8b7cf8",colorHex:"#8b7cf8",web:"https://agora.xtec.cat/ieslagarrotxa/",descripcio:"Centre especialitzat en batxillerat científic i cicles del sector tecnològic i industrial. Excel·lent en formació tècnica i reconegut per la seva vocació STEM.",batxillerats:[{nom:"Ciències i Tecnologia",assignatures:["Matemàtiques","Física","Química","Biologia","Tecnologia Industrial","Electrotècnia","Ciències de la Terra","Dibuix Tècnic","Anglès"]},{nom:"Humanitats i Ciències Socials",assignatures:["Llengua Catalana","Llengua Castellana","Anglès","Història","Filosofia","Economia","Matemàtiques Aplicades a les CC. Socials"]}],cicles:[{nom:"Instal·lació i Manteniment Electromecànic",tipus:"Grau Mitjà",familia:"Electricitat i electrònica",durada:"2000 h",prova:!1},{nom:"Equipaments i Instal·lacions Domòtiques",tipus:"Grau Mitjà",familia:"Edificació i obra civil",durada:"2000 h",prova:!1},{nom:"Producció en Indústries d'Arts Gràfiques",tipus:"Grau Mitjà",familia:"Arts gràfiques",durada:"2000 h",prova:!1},{nom:"Sistemes de Telecomunicació i Informàtics",tipus:"Grau Superior",familia:"Electricitat i electrònica",durada:"2000 h",prova:!1},{nom:"Prevenció de Riscos Professionals",tipus:"Grau Superior",familia:"Seguretat i medi ambient",durada:"2000 h",prova:!1},{nom:"Mecatrònica Industrial",tipus:"Grau Superior",familia:"Fabricació mecànica",durada:"2000 h",prova:!1}]},{id:"escola-art",nom:"Escola d'Art d'Olot",adreca:"Carrer del Bisbe Lorenzana, 12, 17800 Olot",coordenades:[42.1815,2.4842],color:"#f472b6",colorHex:"#f472b6",web:"https://escoladartolot.cat/",descripcio:"Centre especialitzat en arts plàstiques i disseny. Únic al territori de la Garrotxa. Altament recomanat per a perfils creatius i artístics. Ambient molt inspirador.",batxillerats:[{nom:"Batxillerat d'Arts",assignatures:["Dibuix Artístic I i II","Dibuix Tècnic I i II","Volum","Fonaments de les Arts I i II","Imatge i So","Cultura Audiovisual","Disseny","Arts Escèniques","Taller d'Arts Plàstiques i Disseny"]}],cicles:[{nom:"Il·lustració",tipus:"Grau Superior",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0},{nom:"Disseny Gràfic",tipus:"Grau Superior",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0},{nom:"Animació",tipus:"Grau Superior",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0},{nom:"Fotografia",tipus:"Grau Mitjà",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0},{nom:"Arts Aplicades a la Indumentària",tipus:"Grau Mitjà",familia:"Arts plàstiques i disseny",durada:"2000 h",prova:!0}]},{id:"montsacopa",nom:"Institut Montsacopa",adreca:"Carrer de la Roureda, 1, 17800 Olot",coordenades:[42.1882,2.482],color:"#2dd4bf",colorHex:"#2dd4bf",web:"https://agora.xtec.cat/iesmontsacopa/",descripcio:"Institut públic amb oferta de batxillerat i cicles de l'àmbit sanitari, social i de l'hostaleria. Excel·lent acompanyament tutorial i clima de centre molt positiu.",batxillerats:[{nom:"Humanitats i Ciències Socials",assignatures:["Llatí I i II","Grec I i II","Història de la Filosofia","Economia","Literatura Catalana","Literatura Castellana","Matemàtiques Aplicades a les CC. Socials","Anglès"]},{nom:"Ciències i Tecnologia",assignatures:["Biologia","Química","Física","Matemàtiques","Ciències de la Terra","Anglès"]}],cicles:[{nom:"Farmàcia i Parafarmàcia",tipus:"Grau Mitjà",familia:"Sanitat",durada:"2000 h",prova:!0},{nom:"Atenció a Persones en Situació de Dependència",tipus:"Grau Mitjà",familia:"Serveis socioculturals i a la comunitat",durada:"2000 h",prova:!1},{nom:"Cuina i Gastronomia",tipus:"Grau Mitjà",familia:"Hostaleria i turisme",durada:"2000 h",prova:!1},{nom:"Dietètica",tipus:"Grau Superior",familia:"Sanitat",durada:"2000 h",prova:!0},{nom:"Salut Ambiental",tipus:"Grau Superior",familia:"Sanitat",durada:"2000 h",prova:!1},{nom:"Direcció de Cuina",tipus:"Grau Superior",familia:"Hostaleria i turisme",durada:"2000 h",prova:!1},{nom:"Guia, Informació i Assistència Turística",tipus:"Grau Superior",familia:"Hostaleria i turisme",durada:"2000 h",prova:!1}]}],$={ORIENTADOR_CHAT:"ornt_chat",OPCIONS_GENERADES:"ornt_opcions",OPCIO_SEL:"ornt_opcio_sel",RECORREGUTS:"ornt_recorreguts",STUDENTS:"ornt_students",STUDENT_ACTIVE:"ornt_student_active",PISSARRA_ITEMS:"ornt_pissarra",PISSARRA_PREGUNTA:"ornt_piss_q",MAPA_TIPUS:"ornt_mapa_tipus",MAPA_OPCIO:"ornt_mapa_opcio",MAPA_CENTRE:"ornt_mapa_centre",PLANNER_ITEMS:"ornt_planner"};function ve(i,e=null){try{const t=localStorage.getItem(i);return t!==null?JSON.parse(t):e}catch{return e}}function te(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}}const mt=140,Bn=46,y1=4,us={eso:{cx:410,cy:55},batxillerat:{cx:175,cy:165},grauMitja:{cx:410,cy:165},pttPfi:{cx:645,cy:165},selectivitat:{cx:175,cy:290},grauSuperior:{cx:410,cy:290},treballar:{cx:730,cy:227},universitat:{cx:290,cy:400},master:{cx:290,cy:510}};ta.master={id:"master",label:"Màster / Postgrau",sublabel:"Especialització",color:"#f59e0b",info:{titol:"Màster universitari",descripcio:"Especialització després del Grau. Molt valorat en el sector.",sortides:["Treballar professional","Doctorat"]}};function Ju(i){const e=us[i];return{x:e.cx-mt/2,y:e.cy-Bn/2}}function Wu(i){return us[i]||{cx:0,cy:0}}let Hi=[],Di=null;function E1(i){i.innerHTML=A1(),T1(i),D1(i)}function A1(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          ${Ea("map")}
        </span>
        Itineraris acadèmics
      </h1>
      <p class="section-subtitle">Explora els camins possibles després de l'ESO a Olot. Fes clic als nodes per veure detalls.</p>
    </div>

    <div class="it-layout">
      <!-- Column A: Diagram + Info -->
      <div class="it-main">

        <!-- Diagram -->
        <div class="glass-card mb-6 card-accent-top" style="padding:var(--s4)">
          <div class="diagram-wrap">
            ${S1()}
          </div>
        </div>

        <!-- Info panel -->
        <div class="glass-card it-info-panel" id="it-info-panel">
          <p class="text-secondary text-sm">Fes clic a qualsevol node del diagrama per veure informació detallada sobre aquella via.</p>
        </div>

        <!-- Subtria -->
        <div id="it-subtria" style="display:none; margin-top:var(--s6);"></div>

        <!-- Opcions generades -->
        <div id="it-opcions-bloc" class="glass-card" style="display:none; margin-top:var(--s6);">
          <h3 class="font-bold mb-4" style="font-size:1rem; color:var(--t-1);">Opcions recomanades</h3>
          <div id="it-opcions-list"></div>
          <div class="divider"></div>
          <div class="resum-docent" id="it-resum-docent" style="display:none;"></div>
        </div>
      </div>

      <!-- Column B: Orientador -->
      <aside class="it-sidebar">
        <div class="glass-card card-accent-top">
          <div class="orientador-header">
            <div class="orientador-avatar" aria-hidden="true">${Ea("chat")}</div>
            <div>
              <div class="orientador-name">Orientador local</div>
              <div class="orientador-role">Anàlisi de perfil · Sense connexió externa</div>
            </div>
          </div>

          <div class="chat-history" id="it-chat-history" aria-live="polite" aria-label="Historial de missatges"></div>

          <div class="form-group mb-4">
            <label class="form-label" for="it-input">Descriu els teus interessos i preferències</label>
            <textarea class="form-textarea" id="it-input" rows="4"
              placeholder="Per exemple: m'agrada molt la informàtica, prefereixo algo pràctic, m'encanta crear coses i dissenyar, no m'agrada molt llegir..."></textarea>
          </div>

          <div class="flex gap-2 mb-4">
            <button class="btn btn--primary flex-1" id="it-btn-generar">
              ${Ea("spark")} Genera opcions
            </button>
            <button class="btn btn--ghost btn--sm btn--icon" id="it-btn-reset" title="Reiniciar conversa" aria-label="Reiniciar">
              ${Ea("refresh")}
            </button>
          </div>

          <div class="divider"></div>

          <div class="form-group mb-3">
            <label class="form-label" for="it-nom-recorregut">Nom del recorregut</label>
            <input class="form-input" id="it-nom-recorregut" type="text" placeholder="El meu camí" />
          </div>
          <button class="btn btn--secondary w-full" id="it-btn-desar">
            ${Ea("save")} Desa recorregut seleccionat
          </button>
          <p id="it-desar-hint" class="text-xs text-muted mt-2" style="display:none;text-align:center;">Selecciona primer una de les opcions generades.</p>
        </div>
      </aside>
    </div>
  `}function C1(i,e,t,a,n="vertical"){if(Math.abs(i-t)<2)return`M${i},${e} L${t},${a}`;if(Math.abs(e-a)<2)return`M${i},${e} L${t},${a}`;const o=(e+a)/2,c=(i+t)/2,l=t>i?1:-1,d=a>e?1:-1;return n==="vertical"?`M${i},${e} L${i},${o-4*d} Q${i},${o} ${i+4*l},${o} L${t-4*l},${o} Q${t},${o} ${t},${o+4*d} L${t},${a}`:`M${i},${e} L${c-4*l},${e} Q${c},${e} ${c},${e+4*d} L${c},${a-4*d} Q${c},${a} ${c+4*l},${a} L${t},${a}`}function S1(){const a=[{id:"e-eso-bat",from:"eso",to:"batxillerat",style:"main",ori:"vertical"},{id:"e-eso-gm",from:"eso",to:"grauMitja",style:"main",ori:"vertical"},{id:"e-eso-pfi",from:"eso",to:"pttPfi",style:"alt",ori:"vertical"},{id:"e-eso-trb",from:"eso",to:"treballar",style:"side",ori:"horizontal",attachment:"right"},{id:"e-bat-sel",from:"batxillerat",to:"selectivitat",style:"main",ori:"vertical"},{id:"e-bat-gs",from:"batxillerat",to:"grauSuperior",style:"alt",ori:"horizontal"},{id:"e-pfi-gm",from:"pttPfi",to:"grauMitja",style:"main",ori:"horizontal",attachment:"left"},{id:"e-gm-gs",from:"grauMitja",to:"grauSuperior",style:"main",ori:"vertical"},{id:"e-gm-trb",from:"grauMitja",to:"treballar",style:"side",ori:"horizontal",attachment:"right"},{id:"e-sel-uni",from:"selectivitat",to:"universitat",style:"main",ori:"horizontal"},{id:"e-gs-uni",from:"grauSuperior",to:"universitat",style:"alt",ori:"vertical"},{id:"e-gs-trb",from:"grauSuperior",to:"treballar",style:"side",ori:"horizontal",attachment:"right"},{id:"e-uni-mas",from:"universitat",to:"master",style:"main",ori:"vertical"},{id:"e-uni-trb",from:"universitat",to:"treballar",style:"side",ori:"horizontal",attachment:"right"},{id:"e-mas-trb",from:"master",to:"treballar",style:"side",ori:"horizontal",attachment:"right"}].map(c=>{const l=Wu(c.from),d=Wu(c.to),h=Ju(c.from),f=Ju(c.to);let g,b,_,w;if(c.attachment==="right"){if(g=h.x+mt,b=l.cy,_=d.cx,w=f.y,c.to==="treballar"){_=h.x+mt+20,w=l.cy;const X=us.treballar.cx;return`<g class="diagram-edge-group"><path class="diagram-edge" d="${`M${g},${b} L${X},${b} L${X},${f.y}`}" stroke="${{main:"#6b7fbe",side:"#8b7cf8",alt:"#4f8ef7"}[c.style]}" stroke-opacity="0.4" fill="none" marker-end="url(#arrowhead-${c.style})"/></g>`}}else c.attachment==="left"?(g=h.x,b=l.cy,_=f.x+mt,w=d.cy):c.ori==="vertical"?(g=l.cx,b=h.y+Bn,_=d.cx,w=f.y):(g=h.x+mt,b=l.cy,_=f.x,w=d.cy,l.cy<d.cy&&Math.abs(l.cx-d.cx)>mt&&(w=f.y),l.cx>d.cx&&(g=h.x,_=f.x+mt));const q=C1(g,b,_,w,c.ori),N={main:"#6b7fbe",side:"#8b7cf8",alt:"#4f8ef7"}[c.style]||"#6b7fbe",J={main:"0.6",side:"0.4",alt:"0.5"}[c.style]||"0.5";return`
      <g class="diagram-edge-group" data-edge-id="${c.id}">
        <path class="diagram-edge" id="${c.id}"
          d="${q}" stroke="${N}" stroke-opacity="${J}" fill="none"
          stroke-linejoin="round"
          marker-end="url(#arrowhead-${c.style})"/>
      </g>`}).join(""),n=Object.entries(us).map(([c,l])=>{const d=ta[c];if(!d)return"";const h=l.cx-mt/2,f=l.cy-Bn/2,b=["eso","grauMitja","grauSuperior","universitat"].includes(c)?2:1.5;return`
      <g class="diagram-node" data-node="${c}"
         role="button" tabindex="0"
         aria-label="${k(d.label)}">
        <!-- Main rect, sense efectes -->
        <rect class="node-rect" id="nr-${c}"
          x="${h}" y="${f}" width="${mt}" height="${Bn}" rx="${y1}"
          fill="${d.color}15" stroke="${d.color}" stroke-opacity="0.85" stroke-width="${b}"/>
        <!-- Label principal -->
        <text class="node-label" x="${l.cx}" y="${l.cy-2}"
          text-anchor="middle" fill="#fff" font-weight="600" font-size="13">${k(d.label)}</text>
        <!-- Sublabel -->
        ${d.sublabel?`<text class="node-sublabel" x="${l.cx}" y="${l.cy+13}"
          text-anchor="middle" fill="#a1a1aa" font-size="10">${k(d.sublabel)}</text>`:""}
      </g>`}).join(""),o=[{col:"#6b7fbe",label:"Camí principal"},{col:"#4f8ef7",label:"Via alternativa"},{col:"#8b7cf8",label:"Sortida laboral"}].map((c,l)=>`
    <g transform="translate(${10+l*140}, 0)">
      <line x1="0" y1="6" x2="18" y2="6" stroke="${c.col}" stroke-width="1.5" opacity="0.7"/>
      <polygon points="16,3 22,6 16,9" fill="${c.col}" opacity="0.7"/>
      <text x="26" y="10" class="legend-text">${k(c.label)}</text>
    </g>`).join("");return`
    <svg class="diagram-svg" viewBox="0 0 840 600"
         xmlns="http://www.w3.org/2000/svg"
         aria-label="Diagrama d'itineraris acadèmics després de l'ESO">
      <defs>
        <!-- Arrowheads per a cada estil -->
        <marker id="arrowhead-main" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#6b7fbe" opacity="0.75"/>
        </marker>
        <marker id="arrowhead-alt" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#4f8ef7" opacity="0.75"/>
        </marker>
        <marker id="arrowhead-side" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#8b7cf8" opacity="0.65"/>
        </marker>
        <marker id="arrowhead-main-hi" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#6b7fbe"/>
        </marker>
        <marker id="arrowhead-alt-hi" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#4f8ef7"/>
        </marker>
        <marker id="arrowhead-side-hi" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#8b7cf8"/>
        </marker>
        <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Edges -->
      <g class="diagram-edges">${a}</g>

      <!-- Nodes -->
      <g class="diagram-nodes">${n}</g>

      <!-- Legend -->
      <g transform="translate(20, 572)">${o}</g>
    </svg>`}function T1(i){var e,t,a;i.querySelectorAll(".diagram-node").forEach(n=>{n.addEventListener("click",()=>Ku(n.dataset.node,i)),n.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),Ku(n.dataset.node,i))})}),(e=i.querySelector("#it-btn-generar"))==null||e.addEventListener("click",()=>R1(i)),(t=i.querySelector("#it-btn-reset"))==null||t.addEventListener("click",()=>U1(i)),(a=i.querySelector("#it-btn-desar"))==null||a.addEventListener("click",()=>M1(i))}function Ku(i,e){const t=ta[i];if(!t)return;e.querySelectorAll(".node-rect").forEach(n=>{n.removeAttribute("filter"),n.style.strokeWidth=""});const a=e.querySelector(`#nr-${i}`);a&&(a.setAttribute("filter","url(#node-glow)"),a.style.strokeWidth="2.5"),_1(t,e),I1(i,e)}function _1(i,e){const t=i.info,a=e.querySelector("#it-info-panel");if(!a)return;const n=(t.sortides||[]).map(c=>`<span class="badge badge--blue">${k(c)}</span>`).join(""),s=[];t.durada&&s.push(["Durada",t.durada]),t.notaMinima&&s.push(["Nota mínima orientativa",`${t.notaMinima.toFixed(1)}`]),t.salari&&s.push(["Salari orientatiu inicial",t.salari]);const o=s.map(([c,l])=>`
    <div class="metric-item">
      <span class="metric-value">${k(l)}</span>
      <div class="metric-label">${k(c)}</div>
    </div>`).join("");a.innerHTML=`
    <div class="flex items-center gap-3 mb-4">
      <div style="width:5px;height:36px;border-radius:3px;background:${i.color};flex-shrink:0;"></div>
      <h2 class="it-info-title">${k(t.titol)}</h2>
    </div>
    <p class="it-info-desc">${k(t.descripcio)}</p>
    ${n?`<div class="flex flex-wrap gap-2 mb-4">${n}</div>`:""}
    ${o?`<div class="metric-grid">${o}</div>`:""}`}function I1(i,e){const t=e.querySelector("#it-subtria");t&&(i==="batxillerat"?(q1(t),t.style.display=""):["grauMitja","grauSuperior"].includes(i)?(w1(t,i),t.style.display=""):(t.style.display="none",t.innerHTML=""))}function q1(i,e){const t=et.filter(a=>{var n;return(n=a.batxillerats)==null?void 0:n.length});i.innerHTML=`
    <div class="glass-card">
      <h3 class="font-bold mb-5" style="color:var(--t-1);">Modalitats de Batxillerat a Olot</h3>
      ${t.map(a=>`
        <div class="centre-block mb-5">
          <div class="centre-block-header">
            <div class="centre-dot" style="background:${a.color};"></div>
            <h4 class="font-semibold" style="color:${a.color}; font-size:var(--fz-sm);">${k(a.nom)}</h4>
          </div>
          <div class="subtria-grid">
            ${a.batxillerats.map(n=>`
              <div class="subtria-card" data-centre="${a.id}" data-bat="${k(n.nom)}" tabindex="0"
                   style="--card-color:${a.color};">
                <span class="subtria-card-title">${k(n.nom)}</span>
              </div>`).join("")}
          </div>
        </div>`).join("")}
      <div id="it-bat-detail" style="display:none;"></div>
    </div>`,i.querySelectorAll(".subtria-card").forEach(a=>{const n=()=>{i.querySelectorAll(".subtria-card").forEach(s=>s.classList.remove("active")),a.classList.add("active"),x1(i,a.dataset.centre,a.dataset.bat)};a.addEventListener("click",n),a.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&n()})})}function x1(i,e,t){const a=et.find(c=>c.id===e),n=a==null?void 0:a.batxillerats.find(c=>c.nom===t);if(!n||!a)return;const s=(n.assignatures||[]).map(c=>`<span class="badge badge--violet">${k(c)}</span>`).join(""),o=i.querySelector("#it-bat-detail");o&&(o.style.display="",o.innerHTML=`
    <div class="sub-detail-card" style="border-color:${a.color}33;">
      <h4 class="font-semibold mb-2" style="color:${a.color};">${k(n.nom)} — ${k(a.nom)}</h4>
      <p class="text-sm text-secondary mb-3">${k(a.descripcio)}</p>
      <div class="flex flex-wrap gap-2">${s}</div>
    </div>`)}function w1(i,e,t){const a=e==="grauSuperior"?"Grau Superior":"Grau Mitjà",n=e==="grauSuperior"?"Cicles de Grau Superior a Olot":"Cicles de Grau Mitjà a Olot";i.innerHTML=`
    <div class="glass-card">
      <h3 class="font-bold mb-5" style="color:var(--t-1);">${k(n)}</h3>
      ${et.map(s=>{const o=s.cicles.filter(c=>c.tipus===a);return o.length?`
          <div class="centre-block mb-5">
            <div class="centre-block-header">
              <div class="centre-dot" style="background:${s.color};"></div>
              <h4 class="font-semibold" style="color:${s.color}; font-size:var(--fz-sm);">${k(s.nom)}</h4>
            </div>
            <div class="subtria-grid">
              ${o.map(c=>`
                <div class="subtria-card" data-centre="${s.id}" data-cicle="${k(c.nom)}" tabindex="0"
                     style="--card-color:${s.color};">
                  <span class="subtria-card-title">${k(c.nom)}</span>
                  <span class="subtria-card-meta">${k(c.familia)}</span>
                </div>`).join("")}
            </div>
          </div>`:""}).join("")}
      <div id="it-cicle-detail" style="display:none;"></div>
    </div>`,i.querySelectorAll(".subtria-card").forEach(s=>{const o=()=>{i.querySelectorAll(".subtria-card").forEach(c=>c.classList.remove("active")),s.classList.add("active"),P1(i,s.dataset.centre,s.dataset.cicle)};s.addEventListener("click",o),s.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&o()})})}function P1(i,e,t){const a=et.find(o=>o.id===e),n=a==null?void 0:a.cicles.find(o=>o.nom===t);if(!n||!a)return;const s=i.querySelector("#it-cicle-detail");s&&(s.style.display="",s.innerHTML=`
    <div class="sub-detail-card" style="border-color:${a.color}33;">
      <h4 class="font-semibold mb-2" style="color:${a.color};">${k(n.nom)}</h4>
      <div class="flex gap-2 flex-wrap mb-3">
        <span class="badge badge--teal">${k(n.tipus)}</span>
        <span class="badge badge--violet">${k(n.familia)}</span>
        <span class="badge badge--blue">${k(a.nom)}</span>
        ${n.durada?`<span class="badge badge--amber">${k(n.durada)}</span>`:""}
      </div>
      <p class="text-sm text-secondary mb-2">${k(a.descripcio)}</p>
      <p class="text-xs text-muted">${k(a.adreca)} · Inclou FCT (pràctiques en empresa)</p>
      ${n.prova?`<p class="text-xs text-muted mt-1">Pot requerir prova d'accés o curs de preparació</p>`:""}
    </div>`)}function R1(i){var s;const e=i.querySelector("#it-input"),t=(s=e==null?void 0:e.value)==null?void 0:s.trim();if(!t){e==null||e.focus();return}Qu(i,t,"user");const a=k1(t);Hi=a,Di=null;const n=`Perfil detectat: "${t.slice(0,80)}${t.length>80?"...":""}". Recomanacions: ${a.map(o=>o.nom).join(", ")}.`;Qu(i,`He analitzat el teu perfil. Aquí tens ${a.length} camins adaptats als teus interessos.`,"system"),L0(i,a,n),te($.OPCIONS_GENERADES,a),te($.OPCIO_SEL,null)}function k1(i){const e=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[.,!?;:'"]/g," "),t=e.split(/\s+/).filter(g=>g.length>2);let a={academic:0,practic:0,creatiu:0,social:0,tec:0,rapid:0,incert:0};const n={academic:["universitat","carrera","medicina","dret","enginyeria","arquitectura","psicologia","farmacia","biologia","ciencies","fisica","quimica","mates","matematiques","estudiar","llibres","llegir","investigar"],practic:["practic","practica","taller","manipular","crear","construir","feina","treballar","ofici","hands","fer","practiques"],creatiu:["art","dibuix","dibujar","disseny","moda","fotografia","animacio","creative","creatiu","creativa","musica","teatre","dansa","pintura","il·lustracio","illustracio","estetic"],social:["ajudar","persones","gent","infants","nens","vells","cures","social","serveis","educacio","mestre","professor","sanitari","infermer","infermeria","psicolog"],tec:["informatica","programar","programacio","ordinador","tecnologia","xarxes","sistemes","dades","software","hardware","robot","electronics","electrica","electro","mecanica"],rapid:["aviat","rapid","ja","inmediata","feina","diner","sou","independencia","economic","autonomia","treballar","no estudiar","no mes estudis"],incert:["no se","no sap","dubt","confus","confosa","perdut","perduda","suport","ajuda","orientacio","no tinc clar","no saber"]};for(const[g,b]of Object.entries(n)){for(const _ of b)e.includes(_)&&(a[g]+=2);for(const _ of t)b.some(w=>w.includes(_)&&_.length>3)&&(a[g]+=.5)}const s=Object.entries(a).sort((g,b)=>b[1]-g[1]),o=s[0][0],c=s[1][0],l={academic:["batx-univ","batx-gs","gm-gs"],creatiu:["batx-univ","gm-gs","gm-treball"],tec:["batx-gs","gm-gs","batx-univ"],social:["batx-univ","gm-gs","gm-treball"],practic:["gm-treball","gm-gs","pfi-gm"],rapid:["gm-treball","pfi-gm","eso-treballar"],incert:["pfi-gm","gm-treball","gm-gs"]},d=l[o]||l.incert,h={"batx-univ":{academic:"Tens un perfil clarament acadèmic. El Batxillerat és el millor punkt de partida cap a la universitat.",creatiu:"El Batxillerat d'Arts a l'Escola d'Art d'Olot és perfecte per a tu. Combina creativitat amb accés a la universitat per estudiar arts, disseny o arquitectura.",social:"Amb el teu interès per les persones, el Batxillerat (Humanitats o Ciències) et portarà cap a carreres com Psicologia, Educació Social o Infermeria.",tec:"Batxillerat de Ciències i Tecnologia, l'accés natural per a Enginyeria Informàtica o Enginyeria Industrial."},"batx-gs":{tec:"El Batxillerat científic + Grau Superior tècnic és una combinació molt potent i ben valorada al mercat laboral.",academic:"Una bona opció si vols sòlida formació acadèmica i professional sense passar per la universitat completa."},"gm-gs":{practic:"Grau Mitjà primer i Grau Superior després: progressió professional clara, amb molta pràctica i inserció laboral molt bona.",tec:"Cicles tècnics (instal·lació, mecatrònica, informàtica): molt pràctics i amb alta demanda laboral.",creatiu:"Cicles d'arts plàstiques o disseny a l'Escola d'Art d'Olot: il·lustració, disseny gràfic, animació.",social:"Grau Mitjà d'Atenció a Persones o Auxiliar d'Infermeria, i après Grau Superior d'Integració Social o Dietètica."},"gm-treball":{practic:"Cicle de Grau Mitjà + inserció laboral directa. Alta taxa d'ocupació, pràctiques en empresa incloses.",rapid:"La via més ràpida per tenir una qualificació professional reconeguda i trobar feina en 2 anys."},"pfi-gm":{incert:"Comença pel PTT/PFI per clarificar preferències i guanyar confiança. Després podàs saltar a qualsevol Grau Mitjà.",rapid:"El PTT/PFI és un any de transició que facilita l'accés a un Grau Mitjà adaptat als teus interessos."},"eso-treballar":{rapid:"Incorporació directa al mon laboral. Recomanem combinar-ho amb certificats de professionalitat per progressar."}},f=d.slice(0,3).map(g=>{var w,q;const b=zu.find(U=>U.id===g);if(!b)return null;const _=((w=h[g])==null?void 0:w[o])||((q=h[g])==null?void 0:q[c])||b.explicacio;return{...b,explicacio:_}}).filter(Boolean);return f.length>=2?f:zu.slice(0,3)}function L0(i,e,t){const a=i.querySelector("#it-opcions-bloc"),n=i.querySelector("#it-opcions-list"),s=i.querySelector("#it-resum-docent");!a||!n||!s||(a.style.display="",n.innerHTML="",e.forEach((o,c)=>{const l=(o.ruta||[]).map(h=>{const f=ta[h];return`<span class="opcio-step">${k((f==null?void 0:f.label)||h)}</span>`}).join(""),d=document.createElement("div");d.className="opcio-card",d.dataset.idx=c,d.style.cssText=`border-color:${o.color}33; --op-color:${o.color};`,d.innerHTML=`
      <div class="opcio-name">
        <span class="opcio-dot" style="background:${o.color};box-shadow:0 0 6px ${o.color}88;"></span>
        <span>${k(o.nom)}</span>
      </div>
      <p class="opcio-why">${k(o.explicacio)}</p>
      <div class="opcio-path">${l}</div>`,d.addEventListener("click",()=>N0(i,c)),n.appendChild(d)}),s.style.display="",s.innerHTML=`<strong>Resum per al docent:</strong>&nbsp;${k(t)}`)}function N0(i,e){Di=e;const t=Hi[e];if(!t)return;i.querySelectorAll(".opcio-card").forEach((n,s)=>{n.classList.toggle("selected",s===e)}),O0(i,t.ruta,t.color),te($.OPCIO_SEL,e);const a=i.querySelector("#it-desar-hint");a&&(a.style.display="none")}function O0(i,e=[],t){i.querySelectorAll(".diagram-edge").forEach(a=>{a.style.strokeOpacity="",a.style.stroke=""}),i.querySelectorAll(".node-rect").forEach(a=>{a.removeAttribute("filter")});for(let a=0;a<e.length-1;a++){const n=e[a],s=e[a+1];i.querySelector(`.diagram-edge[d*="${n}"]`),i.querySelectorAll(".diagram-edge").forEach(o=>{const c=o.closest(".diagram-edge-group");if(!c)return;const l=c.dataset.edgeId||"",d=n.replace("grauMitja","gm").replace("grauSuperior","gs").replace("batxillerat","bat").replace("selectivitat","sel").replace("universitat","uni").replace("pttPfi","pfi").replace("treballar","trb"),h=s.replace("grauMitja","gm").replace("grauSuperior","gs").replace("batxillerat","bat").replace("selectivitat","sel").replace("universitat","uni").replace("pttPfi","pfi").replace("treballar","trb");l.includes(d)&&l.includes(h)&&(o.style.stroke=t,o.style.strokeOpacity="0.95",o.style.strokeWidth="2.5")}),[n,s].forEach(o=>{const c=i.querySelector(`#nr-${o}`);c&&c.setAttribute("filter","url(#node-glow)")})}}function Qu(i,e,t){const a=i.querySelector("#it-chat-history");if(!a)return;const n=ve($.ORIENTADOR_CHAT,[]);n.push({role:t,text:e,ts:Date.now()}),n.length>40&&n.splice(0,n.length-40),te($.ORIENTADOR_CHAT,n);const s=document.createElement("div");s.className=`chat-msg chat-msg--${t}`,s.textContent=e,a.appendChild(s),a.scrollTop=a.scrollHeight}function M1(i){var o,c,l;const e=i.querySelector("#it-desar-hint");if(Di===null||!Hi[Di]){e&&(e.style.display="");return}const t=(c=(o=i.querySelector("#it-nom-recorregut"))==null?void 0:o.value)==null?void 0:c.trim();if(!t){(l=i.querySelector("#it-nom-recorregut"))==null||l.focus();return}const a=Hi[Di],n=ve($.RECORREGUTS,[]);n.push({id:Gs(),nom:t,base:a.id,nomBase:a.nom,explicacio:a.explicacio,ruta:a.ruta,color:a.color,data:new Date().toLocaleDateString("ca-ES")}),te($.RECORREGUTS,n);const s=i.querySelector("#it-btn-desar");if(s){const d=s.innerHTML;s.textContent="Desat correctament",s.disabled=!0,setTimeout(()=>{s.innerHTML=d,s.disabled=!1},2200)}e&&(e.style.display="none")}function U1(i){Hi=[],Di=null;const e=i.querySelector("#it-chat-history"),t=i.querySelector("#it-input"),a=i.querySelector("#it-opcions-bloc"),n=i.querySelector("#it-info-panel"),s=i.querySelector("#it-subtria");e&&(e.innerHTML=""),t&&(t.value=""),a&&(a.style.display="none"),s&&(s.style.display="none",s.innerHTML=""),n&&(n.innerHTML='<p class="text-secondary text-sm">Fes clic a qualsevol node del diagrama per veure informació detallada sobre aquella via.</p>'),i.querySelectorAll(".diagram-edge").forEach(o=>{o.style.stroke="",o.style.strokeOpacity="",o.style.strokeWidth=""}),i.querySelectorAll(".node-rect").forEach(o=>o.removeAttribute("filter")),te($.ORIENTADOR_CHAT,[]),te($.OPCIONS_GENERADES,[]),te($.OPCIO_SEL,null)}function D1(i){const e=ve($.ORIENTADOR_CHAT,[]),t=i.querySelector("#it-chat-history");t&&e.length&&(e.forEach(n=>{const s=document.createElement("div");s.className=`chat-msg chat-msg--${n.role}`,s.textContent=n.text,t.appendChild(s)}),t.scrollTop=t.scrollHeight);const a=ve($.OPCIONS_GENERADES,[]);if(a.length){Hi=a;const n=ve($.OPCIO_SEL,null);L0(i,a,""),n!==null&&N0(i,n)}}function V1(i){document.querySelectorAll(".app-section").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".nav-btn").forEach(t=>t.classList.toggle("active",t.dataset.section==="itineraris"));const e=document.querySelector("#section-itineraris");e&&(e.classList.add("active"),setTimeout(()=>O0(e,i.ruta,i.color),100))}function Ea(i){return{map:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>',chat:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>'}[i]||""}const L1=[{id:"pol",nom:"Pol",cognom:"García",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"toni",nom:"Toni",cognom:"Martínez",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"maria",nom:"Maria",cognom:"Puig",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"jana",nom:"Jana",cognom:"Oliveras",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"marc",nom:"Marc",cognom:"Codina",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"anna",nom:"Anna",cognom:"Soler",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"carles",nom:"Carles",cognom:"Vilar",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"laia",nom:"Laia",cognom:"Roca",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"jordi",nom:"Jordi",cognom:"Mas",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"nuria",nom:"Núria",cognom:"Borrós",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"guillem",nom:"Guillem",cognom:"Cornella",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},{id:"marta",nom:"Marta",cognom:"Castellà",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""}];function dc(i){if(!i)return"sense definir";const e=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.includes("batxillerat")||e.includes("batx")?"batxillerat":e.includes("cicle")||e.includes("grau mitja")||e.includes("grau superior")||e.includes("cfgm")||e.includes("cfgs")||e.includes("gm")||e.includes("gs")?"cicles":e.includes("ptt")||e.includes("pfi")||e.includes("transicio")||e.includes("insercio")?"ptt":e.includes("treballar")||e.includes("treball")||e.includes("feina")?"treballar":"sense definir"}const qr={"batxillerat ciencies i tecnologia":5,"batxillerat humanitats i ciencies socials":5,"batxillerat d'arts":5,"batxillerat arts":5,"ciencies i tecnologia":5,"humanitats i ciencies socials":5,"gestio administrativa":5,"cures auxiliars d'infermeria":6,"transport i logistica":4,"activitats comercials":4,"installacio i manteniment electromecanico":4,"equipaments i installacions domestiques":4,"produccio en industries d'arts grafiques":4.5,"farmacia i parafarmacia":5.5,"atencio a persones en situacio de dependencia":4,"cuina i gastronomia":4.5,fotografia:6,"arts aplicades a la indumentaria":5,"administracio i finances":6,"integracio social":7,"educacio infantil":6.5,"sistemes de telecomunicacio i informatics":6,"prevencio de riscos professionals":5.5,"mecatronica industrial":6,"il·lustracio":7,"il.lustracio":7,illustracio:7,"disseny grafic":7,animacio:7.5,dietetica:6.5,"salut ambiental":6,"direccio de cuina":6,"guia informacio i assistencia turistica":5.5,ptt:4,pfi:4,"programa de transicio al treball":4,"programa de formacio i insercio":4};function N1(i){if(!i)return null;const e=O1(i);if(qr[e]!==void 0)return qr[e];for(const[t,a]of Object.entries(qr))if(e.includes(t)||t.includes(e))return a;return null}function O1(i){return i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/['''`]/g,"'").replace(/\s+/g," ").trim()}let Le=[],Ma=null;async function F1(i){const e=ii();Bs()?await B1(i,e):$1(i,e)}async function B1(i,e){var n;let t=[];const a=e==null?void 0:e.classeActiva;if(a)try{const s=await k0(a);t=(s==null?void 0:s.alumnes)||[]}catch{}if(t.length){const s=ve($.STUDENTS,[]);Le=t.map(o=>s.find(l=>l.id===o.uid||l.nom===o.nom)||{id:o.uid||o.nom,nom:o.nom,cognom:"",email:o.email||"",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""})}else{const s=ve($.STUDENTS,null);Le=s&&s.length?s:L1.map(o=>({...o}))}te($.STUDENTS,Le),Ma=ve($.STUDENT_ACTIVE,((n=Le[0])==null?void 0:n.id)||null),i.innerHTML=G1(a),F0(i),B0(i),Ma&&no(i,Ma)}function G1(i){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </span>
        Alumnat
      </h1>
      <p class="section-subtitle">${i?"Alumnes inscrits a la teva classe activa.":"No tens cap classe activa. Ves a Classes per crear-ne una."}</p>
    </div>
    <div class="noms-layout">
      <aside>
        <div class="glass-card mb-4 card-accent-top">
          <h2 class="font-semibold text-xs text-muted mb-3" style="text-transform:uppercase;letter-spacing:.06em;">Alumnes</h2>
          <div class="student-list" id="noms-list" role="list"></div>
        </div>
        <div class="glass-card" id="noms-stats">
          <h2 class="font-semibold text-xs text-muted mb-4" style="text-transform:uppercase;letter-spacing:.06em;">Distribució de la classe</h2>
          <div class="stats-grid" id="stats-grid"></div>
        </div>
      </aside>
      <div>
        <div class="glass-card card-accent-top" id="noms-ficha">
          <p class="text-secondary text-sm">Selecciona un alumne o alumna per veure o editar la seva fitxa.</p>
        </div>
      </div>
    </div>`}function $1(i,e){var s,o,c;if(!e){i.innerHTML='<p class="text-muted text-sm">Sessió no iniciada.</p>';return}const t=e.nom||((s=fe())==null?void 0:s.displayName)||"Alumne",a=ve($.STUDENTS,[]);let n=a.find(l=>{var d;return l.id===((d=fe())==null?void 0:d.uid)});n||(n={id:((o=fe())==null?void 0:o.uid)||t,nom:t,cognom:"",email:((c=fe())==null?void 0:c.email)||"",itinerariPreferit:"",cicleModalitat:"",notaTall:"",observacions:""},a.push(n),te($.STUDENTS,a)),i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        </span>
        La meva fitxa
      </h1>
      <p class="section-subtitle">Les teves dades personals d'orientació. Guardades localment al teu dispositiu.</p>
    </div>
    <div class="glass-card card-accent-top" id="noms-ficha"></div>`,mc(i,n,!0)}function F0(i){const e=i.querySelector("#noms-list");e&&(e.innerHTML=Le.length?Le.map(t=>{const a=dc(t.itinerariPreferit),n=G0(a);return`
          <div class="student-item ${t.id===Ma?"active":""}"
               data-id="${t.id}" role="listitem" tabindex="0">
            <div class="student-avatar" style="background:${n};">${k(V0(t.nom,t.cognom))}</div>
            <div>
              <div class="student-name">${k(t.nom)} ${k(t.cognom)}</div>
              <div class="student-tag">${$0(a)}</div>
            </div>
          </div>`}).join(""):'<p class="text-xs text-muted">Encara no hi ha alumnes inscrits. Comparteix el codi de la classe.</p>',e.querySelectorAll(".student-item").forEach(t=>{t.addEventListener("click",()=>no(i,t.dataset.id)),t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&no(i,t.dataset.id)})}))}function no(i,e){Ma=e,te($.STUDENT_ACTIVE,e);const t=Le.find(a=>a.id===e);t&&(i.querySelectorAll(".student-item").forEach(a=>a.classList.toggle("active",a.dataset.id===e)),mc(i,t,!1))}function mc(i,e,t=!1){var l,d;const a=i.querySelector("#noms-ficha");if(!a)return;const n=N1(e.cicleModalitat||e.itinerariPreferit),s=n!==null?`<div class="nota-hint nota-hint--found">Nota de tall detectada: <strong>${n.toFixed(1)}</strong></div>`:e.cicleModalitat?`<div class="nota-hint nota-hint--notfound">No s'ha trobat nota de tall orientativa per a aquesta opció.</div>`:"",o=dc(e.itinerariPreferit),c=G0(o);a.innerHTML=`
    <div class="flex items-center gap-4 mb-6">
      <div class="student-avatar" style="width:52px;height:52px;font-size:1.1rem;border-radius:var(--r2);background:${c};">
        ${k(V0(e.nom,e.cognom))}
      </div>
      <div>
        <h2 class="font-bold" style="font-size:var(--fz-xl);">${k(e.nom)} ${k(e.cognom)}</h2>
        <span class="badge badge--violet" style="margin-top:4px;display:inline-block;">${$0(o)}</span>
      </div>
    </div>
    <div class="student-edit-grid mb-6">
      <div class="form-group">
        <label class="form-label" for="noms-itinerari">Itinerari preferit</label>
        <input class="form-input" id="noms-itinerari" type="text"
          value="${k(e.itinerariPreferit)}"
          placeholder="Batxillerat Ciències, Grau Mitjà Cuina…" ${t&&Bs(),""} />
      </div>
      <div class="form-group">
        <label class="form-label" for="noms-cicle">Cicle / Modalitat concreta</label>
        <input class="form-input" id="noms-cicle" type="text"
          value="${k(e.cicleModalitat)}"
          placeholder="Gestió Administrativa, Il·lustració…" />
      </div>
      <div class="form-group">
        <label class="form-label" for="noms-nota">Nota de tall orientativa</label>
        <input class="form-input" id="noms-nota" type="text"
          value="${k(e.notaTall)}"
          placeholder="p. ex. 6.5" />
        ${s}
      </div>
      <div class="form-group">
        <label class="form-label" for="noms-obs">Observacions</label>
        <input class="form-input" id="noms-obs" type="text"
          value="${k(e.observacions)}"
          placeholder="Notes privades…" />
      </div>
    </div>
    <div class="flex gap-3 mb-6">
      <button class="btn btn--primary" id="noms-btn-desar">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Desa canvis
      </button>
    </div>
    <div class="divider"></div>
    <div class="mt-4">
      <h3 class="font-semibold mb-2" style="font-size:var(--fz-sm);color:var(--t-1);">Orientació ràpida</h3>
      <p class="text-xs text-muted mb-3">Descripció del perfil → orientació argumentada (sense IA externa).</p>
      <div class="form-group mb-3">
        <textarea class="form-textarea" id="noms-ai-input" rows="2"
          placeholder="Ex: Li agrada molt la sanitat, és molt empàtic, vol treballar amb persones…"></textarea>
      </div>
      <button class="btn btn--secondary btn--sm mb-4" id="noms-btn-orientar">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Genera orientació
      </button>
      <div id="noms-ai-result" class="resum-docent" style="display:none;"></div>
    </div>`,(l=a.querySelector("#noms-btn-desar"))==null||l.addEventListener("click",()=>{var f,g,b,_,w,q,U,N;e.itinerariPreferit=((g=(f=a.querySelector("#noms-itinerari"))==null?void 0:f.value)==null?void 0:g.trim())||"",e.cicleModalitat=((_=(b=a.querySelector("#noms-cicle"))==null?void 0:b.value)==null?void 0:_.trim())||"",e.notaTall=((q=(w=a.querySelector("#noms-nota"))==null?void 0:w.value)==null?void 0:q.trim())||"",e.observacions=((N=(U=a.querySelector("#noms-obs"))==null?void 0:U.value)==null?void 0:N.trim())||"";const h=Le.findIndex(O=>O.id===e.id);h!==-1?Le[h]=e:Le.push(e),te($.STUDENTS,Le),t||(F0(i),B0(i)),mc(i,e,t)}),(d=a.querySelector("#noms-btn-orientar"))==null||d.addEventListener("click",()=>{var g,b;const h=((b=(g=a.querySelector("#noms-ai-input"))==null?void 0:g.value)==null?void 0:b.trim())||"",f=a.querySelector("#noms-ai-result");!h||!f||(f.style.display="",f.innerHTML=`<strong>Orientació:</strong> ${k(j1(h))}`)})}function B0(i){const e=i.querySelector("#stats-grid");if(!e)return;const t={batxillerat:0,cicles:0,ptt:0,treballar:0,"sense definir":0};Le.forEach(s=>{const o=dc(s.itinerariPreferit);t[o]=(t[o]||0)+1});const a={batxillerat:"#7c68e8",cicles:"#1ea882",ptt:"#e09d2a",treballar:"#c4507e","sense definir":"#4a5280"},n={batxillerat:"Batxillerat",cicles:"Cicles FP",ptt:"PTT/PFI",treballar:"Treballar","sense definir":"Sense definir"};e.innerHTML=Object.entries(t).map(([s,o])=>`
    <div class="metric-item">
      <span class="metric-value" style="color:${a[s]};">${o}</span>
      <div class="metric-label">${n[s]||s}</div>
      <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${Le.length?(o/Le.length*100).toFixed(0):0}%;background:${a[s]};"></div></div>
    </div>`).join("")}function j1(i){const e=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=new Set;return b1.forEach(a=>{a.paraules.some(n=>e.includes(n))&&a.perfils.forEach(n=>t.add(n))}),t.has("universitat")||t.has("ciencies")||t.has("academic")?"El perfil descrit s'orienta cap al Batxillerat i la Universitat. Caldria potenciar les assignatures de ciències si el projecte és una carrera científica o sanitària.":t.has("arts")?"El perfil creatiu és dominant. El Batxillerat d'Arts a l'Escola d'Art d'Olot o un Cicle de Grau Mitjà/Superior en Disseny, Il·lustració o Animació encaixen molt bé.":t.has("practic")||t.has("hands-on")?"Un Cicle Formatiu de Grau Mitjà és una excel·lent opció: formació pràctica de qualitat, pràctiques en empresa (FCT) i alta inserció laboral. Pot continuar cap al Grau Superior si ho decideix.":t.has("suport")||t.has("reorientacio")?"Considereu un PTT/PFI com a any de transició, o un Grau Mitjà en un àmbit que desperte interès. L'acompanyament tutorial és fonamental en aquest perfil.":"Per a concretar l'orientació caldria una entrevista individual. Es recomana explorar conjuntament la via acadèmica (Batxillerat) i la professional (Cicles Formatius), per detectar motivacions i expectatives."}function G0(i){return{batxillerat:"#7c68e8",cicles:"#1ea882",ptt:"#e09d2a",treballar:"#c4507e","sense definir":"#4e5878"}[i]||"#4a7fd4"}function $0(i=""){return i.charAt(0).toUpperCase()+i.slice(1)}const Pi=[{emoji:"🎯",text:"Si poguessis aprendre qualsevol cosa durant un any sense preocupar-te per la feina ni els diners, ¿Que faries?"},{emoji:"💼",text:"Descriu la teva feina ideal en 3 paraules."},{emoji:"🌍",text:"Si poguessis treballar en qualsevol lloc del món, ¿On aniràs i per que?"},{emoji:"🤔",text:"¿Quina és la decisió més difícil que has pres fins ara?"},{emoji:"⭐",text:"¿En quina cosa ets bo o bona que et costa explicar a les persones?"},{emoji:"🚀",text:"¿Quina professió et faria llevar amb ganes cada dia?"},{emoji:"📚",text:"Si haguessis d'ensenyar alguna cosa als altres, ¿Que ensenyaries?"},{emoji:"💰",text:"¿Faries una feina que t'encanta però que paga poc, o una que et resulta indiferent però paga bé?"},{emoji:"🎨",text:"¿Prefereixes treballar sol o en equip? ¿Per que?"},{emoji:"🔬",text:"¿Quin invent o descoberta voldries que existís però no existeix?"},{emoji:"🏆",text:"¿Quin és el teu major assoliment fins ara, estudiant o personal?"},{emoji:"🌱",text:"¿Cóm t'imagines als 25 anys? ¿Que estàs fent?"},{emoji:"💡",text:"¿Quina és la millor idea que has tingut i mai has pogut portar a la pràctica?"},{emoji:"🤝",text:"¿Prefereixes un treball on ajudes persones directament o un treball on crees coses?"},{emoji:"🎭",text:"¿Quines assignatures t'agraden i per que? ¿Les que s'assemblen a la teva vida ideal?"},{emoji:"🏗️",text:"Si montessis la teva pròpia empresa, ¿De que tractaria?"},{emoji:"📱",text:"¿La tecnologia és part central de la teva vida ideal o és una eina que fas servir quan cal?"},{emoji:"🌅",text:"¿Prefereixes rutina i certesa, o canvi i aventura en la teva futura feina?"}],H1=[{emoji:"🗺️",titol:"El diagrama del meu futur",descripcio:"Cada alumne/a dibuixa el seu camí possible després de l'ESO en un full i el comparteix amb la classe. El docent recull les tendències al mapa col·lectiu."},{emoji:"🎲",titol:"Roda de perfils",descripcio:"El docent mostra perfils ficticis d'alumnat i la classe decideix quin itinerari els recomanaria. Estimula la reflexió sense pressió personal."},{emoji:"💬",titol:"Mur de preguntes",descripcio:"Cada alumne/a escriu en un post-it la seva pregunta sobre el futur. Les preguntes s'agrupen per temes i es responen en grup o amb professionals invitats."},{emoji:"⚡",titol:"Debat ràpid: Estudis vs. Treball",descripcio:"Dos equips defensen posicions oposades durant 10 minuts. Fomenta argumentació i empatia amb punts de vista diferents."},{emoji:"🎤",titol:"1 minut per convèncer",descripcio:"Cada alumne/a té 1 minut per convèncer la resta que el seu itinerari escollit és el millor. Dinàmica ràpida i divertida."},{emoji:"🔍",titol:"Detectiu de professions",descripcio:"Donades 5 pistes sobre una professió (sou, estudis, tasques, sortides), l'alumnat ha d'endevinar de quina professió es tracta."},{emoji:"🎯",titol:"Semàfor d'opcions",descripcio:"Cada alumne/a valora cada opció (batxillerat, FP, treballar) amb un color: verd=interessant, groc=dubtes, vermell=no per mi. Es fa una posada en comú visual."},{emoji:"📊",titol:"Enquesta de classe en temps real",descripcio:"El docent llança preguntes sobre preferències i es fa un recompte en directe per veure la distribució d'interessos del grup."}];let Vt=null,Ke=[],ht=0;function z1(i){Ke=ve($.PISSARRA_ITEMS,[]),ht=ve($.PISSARRA_PREGUNTA,0),Vt=Pi[ht]||Pi[0],i.innerHTML=J1(),so(i),ds(i),W1(i),K1(i)}function J1(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </span>
        Pissarra de dinàmiques
      </h1>
      <p class="section-subtitle">Eina interactiva per dinamitzar sessions d'orientació a l'aula</p>
    </div>

    <div class="pissarra-layout">
      <div>
        <!-- Pregunta -->
        <div class="glass-card question-card card-accent-top mb-6">
          <span class="question-icon" id="pissarra-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--violet-l)">
              <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </span>
          <p class="question-text" id="pissarra-pregunta-text">Carregant pregunta…</p>
          <div class="flex gap-3 justify-center mb-6">
            <button class="btn btn--ghost btn--sm" id="pissarra-btn-nova">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg>
              Següent pregunta
            </button>
            <button class="btn btn--ghost btn--sm" id="pissarra-btn-aleatoria">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
              Aleatòria
            </button>
          </div>
          <div class="form-group" style="max-width:460px;margin:0 auto;">
            <label class="form-label" for="pissarra-resposta">La teva resposta</label>
            <textarea class="form-textarea" id="pissarra-resposta" rows="3"
              placeholder="Escriu la teva resposta aquí…"></textarea>
          </div>
          <div class="flex gap-3 justify-center mt-4">
            <button class="btn btn--primary" id="pissarra-btn-desar">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Penja a la pissarra
            </button>
          </div>
        </div>

        <!-- Pissarra items -->
        <div class="glass-card">
          <div class="flex justify-between items-center mb-4">
            <h2 class="font-semibold text-sm" style="color:var(--t-1);">
              Pissarra — <span id="pissarra-count">0</span> entrades
            </h2>
            <button class="btn btn--danger btn--sm" id="pissarra-btn-buidar">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
              Buidar
            </button>
          </div>
          <div class="pissarra-items" id="pissarra-items" role="list"></div>
        </div>
      </div>

      <!-- Sidebar: Idees de dinàmica -->
      <aside>
        <div class="glass-card card-accent-top">
          <h2 class="font-semibold mb-4" style="font-size:var(--fz-sm); color:var(--t-1);">Idees de dinàmica d'aula</h2>
          <div class="ideas-grid" id="pissarra-idees"></div>
        </div>
      </aside>
    </div>
  `}function so(i){const e=i.querySelector("#pissarra-pregunta-text");e&&Vt&&(e.textContent=Vt.text)}function ds(i){const e=i.querySelector("#pissarra-items"),t=i.querySelector("#pissarra-count");if(e){if(t&&(t.textContent=Ke.length),!Ke.length){e.innerHTML='<p class="text-muted text-xs" style="padding:var(--s4);">La pissarra és buida. Afegiu respostes per veure-les aquí.</p>';return}e.innerHTML=Ke.map(a=>`
    <div class="pissarra-item" data-id="${a.id}" role="listitem">
      <div class="pissarra-item-text">
        <span class="text-xs text-muted" style="display:block;margin-bottom:3px;">${k(a.pregunta.slice(0,60))}…</span>
        ${k(a.resposta)}
      </div>
      <button class="btn btn--icon btn--sm" data-delete="${a.id}" title="Eliminar" aria-label="Eliminar resposta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>`).join(""),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",()=>{Ke=Ke.filter(n=>n.id!==a.dataset.delete),te($.PISSARRA_ITEMS,Ke),ds(i)})})}}const Xu=['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M10 12h4"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>'];function W1(i){const e=i.querySelector("#pissarra-idees");e&&(e.innerHTML=H1.map((t,a)=>`
    <div class="idea-item">
      <div class="idea-icon" style="color:var(--violet-l);">${Xu[a%Xu.length]}</div>
      <div>
        <div class="idea-title">${k(t.titol)}</div>
        <div class="idea-desc">${k(t.descripcio)}</div>
      </div>
    </div>`).join(""))}function K1(i){var e,t,a,n;(e=i.querySelector("#pissarra-btn-nova"))==null||e.addEventListener("click",()=>{ht=(ht+1)%Pi.length,Vt=Pi[ht],te($.PISSARRA_PREGUNTA,ht),so(i);const s=i.querySelector("#pissarra-icon");s&&(s.style.animation="none",s.offsetHeight,s.style.animation="")}),(t=i.querySelector("#pissarra-btn-aleatoria"))==null||t.addEventListener("click",()=>{ht=Math.floor(Math.random()*Pi.length),Vt=Pi[ht],te($.PISSARRA_PREGUNTA,ht),so(i)}),(a=i.querySelector("#pissarra-btn-desar"))==null||a.addEventListener("click",()=>{var c;const s=i.querySelector("#pissarra-resposta"),o=(c=s==null?void 0:s.value)==null?void 0:c.trim();if(!o){s==null||s.focus();return}Ke.push({id:Gs(),pregunta:(Vt==null?void 0:Vt.text)||"",resposta:o,ts:Date.now()}),te($.PISSARRA_ITEMS,Ke),s.value="",ds(i)}),(n=i.querySelector("#pissarra-btn-buidar"))==null||n.addEventListener("click",()=>{confirm("Estàs segur/a? S'eliminaran totes les entrades de la pissarra.")&&(Ke=[],te($.PISSARRA_ITEMS,Ke),ds(i))})}function Q1(i){i.innerHTML=X1(),j0(i)}function X1(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        </span>
        Recorreguts guardats
      </h1>
      <p class="section-subtitle">Recorreguts personalitzats desats des de la secció Itineraris</p>
    </div>
    <div id="recorreguts-grid" class="recorreguts-grid"></div>`}function j0(i){const e=i.querySelector("#recorreguts-grid");if(!e)return;const t=ve($.RECORREGUTS,[]);if(!t.length){e.innerHTML=`
      <div class="glass-card card-accent-top" style="grid-column:1/-1;text-align:center;padding:var(--s12);">
        <div style="width:56px;height:56px;margin:0 auto var(--s4);border-radius:var(--r2);background:var(--bg-card);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="var(--t-3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
        </div>
        <h3 class="font-semibold mb-2" style="color:var(--t-1);">Cap recorregut desat</h3>
        <p class="text-muted text-sm">Genera opcions a la secció <strong style="color:var(--t-2);">Itineraris</strong>, selecciona-ne una i anomena-la per desar-la aquí.</p>
      </div>`;return}e.innerHTML=t.map(a=>{const n=(a.ruta||[]).map(s=>{const o=ta[s];return`<span class="recorregut-step">${k((o==null?void 0:o.label)||s)}</span>`}).join("");return`
      <div class="glass-card recorregut-card" style="border-top:2px solid ${k(a.color||"var(--blue)")};padding-top:calc(var(--s6) + 2px);">
        <div>
          <div class="recorregut-name">${k(a.nom)}</div>
          <div class="text-xs text-muted mb-2">${k(a.data||"")} · ${k(a.nomBase||"")}</div>
        </div>
        <p class="recorregut-why">${k(a.explicacio||"")}</p>
        <div class="recorregut-path">${n}</div>
        <div class="recorregut-actions">
          <button class="btn btn--primary btn--sm" data-veure="${a.id}">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Veure al diagrama
          </button>
          <button class="btn btn--danger btn--sm" data-delete="${a.id}">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
            Eliminar
          </button>
        </div>
      </div>`}).join(""),e.querySelectorAll("[data-veure]").forEach(a=>{a.addEventListener("click",()=>{const n=ve($.RECORREGUTS,[]).find(s=>s.id===a.dataset.veure);n&&V1(n)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",()=>{if(!confirm("Vols eliminar aquest recorregut?"))return;const n=ve($.RECORREGUTS,[]).filter(s=>s.id!==a.dataset.delete);te($.RECORREGUTS,n),j0(i)})})}let Ue=null,Be={};function Y1(i){i.innerHTML=eE(),ms(i,ve($.MAPA_TIPUS,"batxillerat")),sE(i)}function Z1(i){if(!i)return;Ue?setTimeout(()=>Ue.invalidateSize(),200):tE(i);const e=ve($.MAPA_TIPUS,"batxillerat"),t=i.querySelector("#mapa-tipus");t&&(t.value=e,ms(i,e));const a=i.querySelector("#mapa-opcio"),n=ve($.MAPA_OPCIO,"");a&&n&&(a.value=n);const s=ve($.MAPA_CENTRE,null);s&&ia(i,s)}function eE(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </span>
        Mapa de centres
      </h1>
      <p class="section-subtitle">Localitza i compara els centres educatius d'Olot sobre el mapa</p>
    </div>

    <div class="mapa-layout">
      <aside>
        <div class="glass-card mb-4 card-accent-top">
          <h2 class="font-semibold text-sm mb-4" style="color:var(--t-1);">Cerca per estudi</h2>
          <div class="form-group mb-3">
            <label class="form-label" for="mapa-tipus">Tipus d'estudi</label>
            <select class="form-select" id="mapa-tipus">
              <option value="batxillerat">Batxillerat</option>
              <option value="cicles">Cicles Formatius</option>
            </select>
          </div>
          <div class="form-group mb-4">
            <label class="form-label" for="mapa-opcio">Opció concreta</label>
            <select class="form-select" id="mapa-opcio">
              <option value="">— Totes les opcions —</option>
            </select>
          </div>
          <div class="flex gap-2">
            <button class="btn btn--primary flex-1" id="mapa-btn-cercar">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Cerca
            </button>
            <button class="btn btn--ghost btn--sm btn--icon" id="mapa-btn-reset" title="Reinicia" aria-label="Reinicia cerca">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg>
            </button>
          </div>
          <div id="mapa-resum" class="text-xs text-muted mt-3" style="display:none;"></div>
        </div>

        <div class="glass-card mb-4">
          <h2 class="font-semibold text-sm mb-3" style="color:var(--t-1);">Centres</h2>
          <div class="ranking-list" id="mapa-ranking">
            <p class="text-muted text-xs">Fes una cerca per veure el ranking de centres.</p>
          </div>
        </div>

        <div class="glass-card" id="mapa-centre-info" style="display:none;">
          <h2 class="font-semibold text-sm mb-3" style="color:var(--t-1);">Informació del centre</h2>
          <div id="mapa-centre-detail"></div>
        </div>
      </aside>

      <div>
        <div id="leaflet-map"></div>
        <p class="text-xs text-muted mt-2 text-center" style="opacity:0.7;">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-2px;margin-right:2px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Avís: Les ubicacions en aquest mapa són aproximades i poden no ser completament exactes.
        </p>
      </div>
    </div>`}function tE(i){if(!window.L){console.warn("[mapa] Leaflet no disponible");return}const e=i.querySelector("#leaflet-map");e&&(Ue=L.map(e,{zoomControl:!0,scrollWheelZoom:!0}),Ue.setView([42.182,2.487],15),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',maxZoom:19}).addTo(Ue),et.forEach(t=>{const a=hc(t,!1);Be[t.id]=a,a.addTo(Ue),a.bindTooltip(`<strong>${t.nom}</strong>`,{permanent:!1,direction:"top"}),a.on("click",()=>{te($.MAPA_CENTRE,t.id),ia(i,t.id),nn(t.id,i)})}),setTimeout(()=>Ue.invalidateSize(),350))}function hc(i,e){const t=e?18:13;return L.marker(i.coordenades,{icon:L.divIcon({className:"",html:`<div style="width:${t}px;height:${t}px;background:${i.color};border:2.5px solid rgba(255,255,255,.85);border-radius:50%;box-shadow:0 2px 10px rgba(0,0,0,.55),0 0 0 ${e?5:0}px ${i.color}44;transition:all .2s;"></div>`,iconSize:[t,t],iconAnchor:[t/2,t/2]}),title:i.nom})}function nn(i,e){et.forEach(t=>{Be[t.id]&&(Be[t.id].remove(),Be[t.id]=hc(t,t.id===i),Be[t.id].addTo(Ue),Be[t.id].bindTooltip(`<strong>${t.nom}</strong>`,{permanent:!1,direction:"top"}),Be[t.id].on("click",()=>{te($.MAPA_CENTRE,t.id),ia(e,t.id),nn(t.id,e)}))})}function ms(i,e){const t=i.querySelector("#mapa-opcio");if(!t)return;t.innerHTML='<option value="">— Totes les opcions —</option>';const a=new Set;et.forEach(n=>{const s=e==="batxillerat"?n.batxillerats:n.cicles;s==null||s.forEach(o=>{if(!a.has(o.nom)){a.add(o.nom);const c=document.createElement("option");c.value=c.textContent=o.nom,t.appendChild(c)}})})}function iE(i){var s,o,c;const e=((s=i.querySelector("#mapa-tipus"))==null?void 0:s.value)||"batxillerat",t=((o=i.querySelector("#mapa-opcio"))==null?void 0:o.value)||"";te($.MAPA_TIPUS,e),te($.MAPA_OPCIO,t);const a=et.map(l=>({centre:l,punts:aE(l,e,t)})).sort((l,d)=>d.punts-l.punts);nE(i,a);const n=i.querySelector("#mapa-resum");if(n&&(n.style.display="",n.textContent=t?`"${t}" (${e}) — ${a.filter(l=>l.punts>0).length} centres rellevants`:`Mostrant tots els centres de ${e==="batxillerat"?"Batxillerat":"Cicles Formatius"}`),((c=a[0])==null?void 0:c.punts)>0&&Ue){const l=a[0].centre;Ue.setView(l.coordenades,16,{animate:!0}),nn(l.id,i),te($.MAPA_CENTRE,l.id),ia(i,l.id)}}function aE(i,e,t){const a=e==="batxillerat"?i.batxillerats:i.cicles;return t?a!=null&&a.some(n=>n.nom===t)?100:a!=null&&a.some(n=>{const s=t.toLowerCase(),o=n.nom.toLowerCase();return s.split(" ").some(c=>c.length>3&&o.includes(c))})?45:a!=null&&a.length?8:0:a!=null&&a.length?50:0}function nE(i,e){const t=i.querySelector("#mapa-ranking");t&&(t.innerHTML=e.map((a,n)=>`
    <div class="ranking-item" data-centre="${a.centre.id}" role="button" tabindex="0">
      <div class="ranking-pos">${n+1}</div>
      <div style="flex:1;min-width:0;">
        <div class="text-xs truncate" style="color:${a.centre.color}; font-weight:600;">${k(a.centre.nom)}</div>
        <div class="ranking-bar" style="margin-top:4px;"><div class="ranking-bar-fill" style="width:${a.punts}%;background:${a.centre.color};"></div></div>
      </div>
      <div class="ranking-score">${a.punts}</div>
    </div>`).join(""),t.querySelectorAll(".ranking-item").forEach(a=>{const n=()=>{const s=et.find(o=>o.id===a.dataset.centre);s&&(te($.MAPA_CENTRE,s.id),ia(i,s.id),nn(s.id,i),Ue&&Ue.setView(s.coordenades,16,{animate:!0}))};a.addEventListener("click",n),a.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&n()})}))}function ia(i,e){var c,l;const t=et.find(d=>d.id===e);if(!t)return;const a=i.querySelector("#mapa-centre-info"),n=i.querySelector("#mapa-centre-detail");if(!a||!n)return;a.style.display="";const s=((c=t.batxillerats)==null?void 0:c.map(d=>`<li class="text-xs text-muted" style="margin-bottom:2px;">· ${k(d.nom)}</li>`).join(""))||"",o=((l=t.cicles)==null?void 0:l.map(d=>`<li class="text-xs text-muted" style="margin-bottom:2px;">· ${k(d.nom)} <span style="color:var(--t-3);">(${k(d.tipus)})</span></li>`).join(""))||"";n.innerHTML=`
    <div style="border-left:3px solid ${t.color};padding-left:var(--s3);margin-bottom:var(--s4);">
      <div class="font-semibold" style="color:${t.color}; font-size:var(--fz-sm);">${k(t.nom)}</div>
      <div class="text-xs text-muted">${k(t.adreca)}</div>
    </div>
    <p class="text-xs text-secondary mb-4" style="line-height:1.6;">${k(t.descripcio)}</p>
    ${s?`<div class="mb-3"><div class="text-xs font-semibold mb-1" style="color:var(--t-2);">Batxillerat</div><ul>${s}</ul></div>`:""}
    ${o?`<div><div class="text-xs font-semibold mb-1" style="color:var(--t-2);">Cicles Formatius</div><ul>${o}</ul></div>`:""}
    ${t.web?`<div class="mt-4"><a href="${k(t.web)}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost btn--sm" style="font-size:var(--fz-2xs);"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> Web del centre</a></div>`:""}`}function sE(i){var e,t,a;(e=i.querySelector("#mapa-tipus"))==null||e.addEventListener("change",n=>ms(i,n.target.value)),(t=i.querySelector("#mapa-btn-cercar"))==null||t.addEventListener("click",()=>iE(i)),(a=i.querySelector("#mapa-btn-reset"))==null||a.addEventListener("click",()=>{const n=i.querySelector("#mapa-tipus");n&&(n.value="batxillerat",ms(i,"batxillerat"));const s=i.querySelector("#mapa-opcio");s&&(s.value="");const o=i.querySelector("#mapa-resum");o&&(o.style.display="none");const c=i.querySelector("#mapa-ranking");c&&(c.innerHTML='<p class="text-muted text-xs">Fes una cerca per veure el ranking de centres.</p>');const l=i.querySelector("#mapa-centre-info");l&&(l.style.display="none"),Ue&&(Ue.setView([42.182,2.487],15,{animate:!0}),et.forEach(d=>{Be[d.id]&&(Be[d.id].remove(),Be[d.id]=hc(d,!1),Be[d.id].addTo(Ue),Be[d.id].bindTooltip(`<strong>${d.nom}</strong>`,{permanent:!1,direction:"top"}),Be[d.id].on("click",()=>{te($.MAPA_CENTRE,d.id),ia(document.querySelector("#section-mapa"),d.id),nn(d.id,document.querySelector("#section-mapa"))}))}))})}const Gn={batxillerat:{nom:"Batxillerat",durada:"2 anys (+ Selectivitat si s'opta per la universitat)",estil:"Acadèmic i teòric. Matèries curriculars en grups-classe",continuitat:"Selectivitat (PAU) → Universitat | Grau Superior (accés directe)",salari:"Depèn completament de la titulació universitària posterior",perfil:"Bon rendiment acadèmic, motivació per estudiar a la universitat, curiositat intel·lectual",avantatges:"Accés directe a totes les titulacions universitàries; molt valorat en entorns acadèmics",inconvenients:"Menys pràctic i orientat a l'ofici; 2 anys fins a selectivitat; sense inserció laboral directa"},"grau-mitja":{nom:"Cicle de Grau Mitjà (FP)",durada:"2.000 hores ~2 anys, inclou FCT (pràctiques en empresa)",estil:"Professional i pràctic. Aprenentatge basat en competències reals d'ofici",continuitat:"Inserció laboral | Grau Superior de la mateixa família (sin prova)",salari:"18.000 – 24.000 €/any de sortida (variable per sector)",perfil:"Preferència pel treball manual i pràctic; vol treballar aviat; interès per un ofici concret",avantatges:"Alta taxa d'inserció laboral; pràctiques en empresa incloses; accessible des de l'ESO",inconvenients:"Accés a universitat requereix proves addicionals; menys reconeixement social en alguns sectors"},"grau-superior":{nom:"Cicle de Grau Superior (FP)",durada:"2.000 hores ~2 anys, inclou FCT (pràctiques en empresa)",estil:"Professional avançat: combina teoria especialitzada i pràctica intensiva",continuitat:"Càrrecs de responsabilitat | Universitat amb convalidació parcial de crèdits",salari:"22.000 – 35.000 €/any de sortida (molt variable per família professional)",perfil:"Vol qualificació professional alta; perfil tècnic; bon rendiment o experiència laboral prèvia",avantatges:"Alta demanda al mercat; convalidació universitària; formació molt específica i reconeguda",inconvenients:"Requereix Batxillerat o Grau Mitjà de la mateixa família; selecció pot ser competitiva"},"ptt-pfi":{nom:"PTT / PFI (Transició al Treball)",durada:"1 any escolar, orientació professional inclosa",estil:"Orientació, iniciació professional, adaptació al món laboral",continuitat:"Grau Mitjà (mateixa família) | Treballs amb perfil bàsic",salari:"16.000 – 18.000 €/any (sense qualificació FP completa)",perfil:"Alumnat que necessita un any addicional de maduresa i orientació professional",avantatges:"Ritme adaptat; acompanyament personalitzat; molt bon orientació per triar Grau Mitjà",inconvenients:"No és una titulació FP homologada; posicions laborals molt limitades fins a assolir el GM"},treballar:{nom:"Incorporació directa al món laboral",durada:"Immediata (no requereix formació addicional)",estil:"Aprenentatge al lloc de treball; formació contínua informal",continuitat:"Certificats de professionalitat; FP per a majors de 18 anys; progressió interna",salari:"16.000 – 20.000 €/any (sense qualificació específica)",perfil:"Necessitat econòmica immediata; motivació laboral molt clara i decidida",avantatges:"Ingressos immediats; experiència real des del primer dia; autonomia",inconvenients:"Sense titulació formal; progressió professional limitada; accés restringit a certs sectors"}};function rE(i){i.innerHTML=oE(),cE(i)}function oE(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
        </span>
        Comparador de camins
      </h1>
      <p class="section-subtitle">Compara dues opcions acadèmiques o professionals cara a cara</p>
    </div>

    <div class="glass-card mb-6">
      <div class="flex gap-4 items-end flex-wrap">
        <div class="form-group" style="flex:1;min-width:180px;">
          <label class="form-label" for="comp-a">Opció A</label>
          <select class="form-select" id="comp-a">${Object.entries(Gn).map(([e,t])=>`<option value="${e}">${k(t.nom)}</option>`).join("")}</select>
        </div>
        <div style="font-size:var(--fz-xl);padding-bottom:.2rem;font-weight:var(--fw-7);color:var(--t-3);">vs</div>
        <div class="form-group" style="flex:1;min-width:180px;">
          <label class="form-label" for="comp-b">Opció B</label>
          <select class="form-select" id="comp-b"></select>
        </div>
        <button class="btn btn--primary" id="comp-btn-comparar">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
          Comparar
        </button>
      </div>
    </div>

    <div id="comp-resultat" style="display:none;">
      <div class="comparador-grid">
        <div class="glass-card compare-card compare-card--a" id="comp-card-a"></div>
        <div class="glass-card compare-card compare-card--b" id="comp-card-b"></div>
      </div>
    </div>`}function cE(i){var n;const e=i.querySelector("#comp-a"),t=i.querySelector("#comp-b");function a(){const s=e==null?void 0:e.value;t.innerHTML=Object.entries(Gn).filter(([o])=>o!==s).map(([o,c])=>`<option value="${o}">${k(c.nom)}</option>`).join("")}a(),e==null||e.addEventListener("change",a),(n=i.querySelector("#comp-btn-comparar"))==null||n.addEventListener("click",()=>{const s=e==null?void 0:e.value,o=t==null?void 0:t.value;if(!s||!o)return;const c=i.querySelector("#comp-resultat");c&&(c.style.display=""),Yu(i.querySelector("#comp-card-a"),Gn[s],"#5b8ef0"),Yu(i.querySelector("#comp-card-b"),Gn[o],"#e8619a")})}function Yu(i,e,t){if(!i||!e)return;const a=[["Durada",e.durada],["Estil d'aprenentatge",e.estil],["Continuïtat possible",e.continuitat],["Salari orientatiu",e.salari],["Perfil recomanat",e.perfil],["Avantatges",e.avantatges],["Inconvenients",e.inconvenients]];i.innerHTML=`
    <div class="compare-header" style="color:${t};">${k(e.nom)}</div>
    ${a.map(([n,s])=>`
      <div class="compare-row">
        <div class="compare-key">${k(n)}</div>
        <div class="compare-val">${k(s)}</div>
      </div>`).join("")}`}const ro=[{id:"pratic",label:"M'agrada el treball pràctic i manual",min:0,max:10,step:1,def:5},{id:"creatiu",label:"Tinc un perfil creatiu (art, disseny…)",min:0,max:10,step:1,def:5},{id:"tec",label:"M'interessa la tecnologia i la informàtica",min:0,max:10,step:1,def:5},{id:"social",label:"M'agrada treballar amb persones i ajudar",min:0,max:10,step:1,def:5},{id:"continuar",label:"Vull continuar estudiant durant molts anys",min:0,max:10,step:1,def:5}];function lE(i){i.innerHTML=uE(),dE(i)}function uE(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
        </span>
        Simulador de decisió
      </h1>
      <p class="section-subtitle">Ajusta els controls per obtenir una recomanació personalitzada basada en el teu perfil</p>
    </div>
    <div class="simulador-layout">
      <div class="glass-card card-accent-top mb-6">
        <h2 class="font-semibold mb-6" style="color:var(--t-1); font-size:var(--fz-sm);">Defineix el teu perfil:</h2>
        ${ro.map(e=>`
    <div class="slider-group">
      <div class="slider-header">
        <label class="slider-label" for="sim-${e.id}">${k(e.label)}</label>
        <span class="slider-value" id="sim-val-${e.id}">${e.def}</span>
      </div>
      <input type="range" id="sim-${e.id}"
        min="${e.min}" max="${e.max}" step="${e.step}" value="${e.def}"
        aria-label="${k(e.label)}" />
    </div>`).join("")}
        <div class="flex justify-center mt-8">
          <button class="btn btn--primary btn--lg" id="sim-btn-calcular">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Calcula la meva opció
          </button>
        </div>
      </div>
      <div id="sim-resultat" style="display:none;">
        <div class="glass-card result-card card-accent-top" id="sim-result-card"></div>
      </div>
    </div>`}function dE(i){var e;ro.forEach(t=>{const a=i.querySelector(`#sim-${t.id}`),n=i.querySelector(`#sim-val-${t.id}`);!a||!n||(Hu(a),a.addEventListener("input",()=>{n.textContent=a.value,Hu(a)}))}),(e=i.querySelector("#sim-btn-calcular"))==null||e.addEventListener("click",()=>{const t={};ro.forEach(a=>{var n;t[a.id]=parseInt(((n=i.querySelector(`#sim-${a.id}`))==null?void 0:n.value)||a.def,10)}),mE(i,t)})}function mE(i,e){const t=i.querySelector("#sim-resultat"),a=i.querySelector("#sim-result-card");if(!t||!a)return;t.style.display="";const n=pE(e);a.innerHTML=`
    <div class="result-icon" style="color:${n.color};" aria-hidden="true">${n.icon}</div>
    <div class="result-title">${k(n.nom)}</div>
    <p class="result-reason">${k(n.motiu)}</p>
    <div class="mt-6 flex flex-wrap gap-2" style="justify-content:center;">
      ${n.tags.map(s=>`<span class="badge badge--blue">${k(s)}</span>`).join("")}
    </div>`,t.scrollIntoView({behavior:"smooth",block:"nearest"})}const hE={batxillerat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',grauSuperior:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',grauMitja:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>',arts:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>',pttPfi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'};function pE(i){const{pratic:e,creatiu:t,tec:a,social:n,continuar:s}=i,o={batxillerat:s*1.6+(10-e)*.5+a*.3+n*.2,grauSuperior:e*.7+a*1.2+s*.6+n*.5,grauMitja:e*1.6+(10-s)*.9+a*.4,arts:t*2+(10-s)*.25+e*.3,pttPfi:(10-s)*.7+e*.8+(10-a)*.2+(10-t)*.1},c=Object.entries(o).sort((d,h)=>h[1]-d[1])[0][0];return{...{batxillerat:{nom:"Batxillerat",color:"var(--violet-l)",motiu:"Tens un perfil acadèmic marcat i vols continuar estudiant. El Batxillerat és el millor punt de partida, especialment si t'interessen Ciències, Humanitats o Arts. T'obrirà les portes de la Universitat i del Grau Superior.",tags:["Batxillerat","Universitat","Selectivitat (PAU)"]},grauSuperior:{nom:"Grau Superior de FP",color:"var(--blue-l)",motiu:"Barreges bé la visió tècnica amb el component pràctic. Un Grau Superior t'ofereix formació professional d'alt nivell, pràctiques reals en empresa i la possibilitat d'accedir a la universitat amb convalidació de crèdits.",tags:["Grau Superior","FP","Alta qualificació"]},grauMitja:{nom:"Grau Mitjà de FP",color:"var(--teal)",motiu:"Prefereixes aprendre fent coses reals. Un Grau Mitjà és l'opció ideal: formació pràctica d'alta qualitat, pràctiques en empresa incloses i molt bona inserció laboral. Sempre podràs continuar cap al Grau Superior si vols avançar.",tags:["Grau Mitjà","FP","Pràctiques FCT"]},arts:{nom:"Cicles d'Arts i Disseny",color:"var(--rose)",motiu:"El teu perfil creatiu és clarament dominant. Considera el Batxillerat d'Arts a l'Escola d'Art d'Olot o un Grau Mitjà / Superior en Il·lustració, Disseny Gràfic, Animació o Fotografia. Entorns molt estimulants per a perfils artístics.",tags:["Escola d'Art d'Olot","Disseny Gràfic","Il·lustració","Animació"]},pttPfi:{nom:"PTT / PFI — Transició al Treball",color:"var(--amber)",motiu:"Un any de transició pot ser el millor inici. El PTT/PFI t'acompanya en la definició del teu camí, guanya confiança i orientació professional real. Després podràs accedir a qualsevol Grau Mitjà amb molt millor base.",tags:["PTT","PFI","Orientació","Inserció laboral"]}}[c],icon:hE[c]}}const fE=["Mirar les jornades de portes obertes dels centres","Parlar amb la família sobre les opcions","Visitar l'Institut Bosc de la Coma","Visitar l'Institut La Garrotxa","Visitar l'Escola d'Art d'Olot","Visitar l'Institut Montsacopa","Decidir entre Batxillerat i Cicles Formatius","Consultar les notes de tall orientatives","Fer la preinscripció al centre escollit","Parlar amb l'orientador/a del centre actual","Investigar sortides professionals de l'opció escollida","Preguntar a antics alumnes sobre la seva experiència"];let Fe=[];function gE(i){Fe=ve($.PLANNER_ITEMS,[]),i.innerHTML=vE(),Ga(i),bE(i),yE(i)}function vE(){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </span>
        Planner d'orientació
      </h1>
      <p class="section-subtitle">Organitza els passos del procés d'orientació en una línia temporal personal</p>
    </div>

    <div class="planner-layout">
      <div class="glass-card card-accent-top mb-6">
        <h2 class="font-semibold mb-4" style="font-size:var(--fz-sm); color:var(--t-1);">Afegir un nou pas</h2>
        <div class="planner-add">
          <div class="form-group flex-1">
            <input class="form-input" id="planner-input" type="text"
              placeholder="Descriu el pas… ex: Visitar el centre, parlar amb orientadora…" />
          </div>
          <button class="btn btn--primary" id="planner-btn-afegir">Afegir</button>
        </div>
        <div>
          <p class="form-label mb-2">O afegeix un pas suggerit:</p>
          <div class="chip-group" id="planner-chips"></div>
        </div>
      </div>

      <div class="glass-card">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-semibold text-sm" style="color:var(--t-1);">
            El teu pla — <span id="planner-count">0</span> passos
          </h2>
          <button class="btn btn--danger btn--sm" id="planner-btn-buidar">
            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
            Buidar
          </button>
        </div>
        <div class="planner-timeline" id="planner-timeline"></div>
      </div>
    </div>`}function Ga(i){const e=i.querySelector("#planner-timeline"),t=i.querySelector("#planner-count");if(e){if(t&&(t.textContent=Fe.length),!Fe.length){e.innerHTML=`<p class="text-muted text-sm" style="padding:var(--s4) var(--s8);">Cap pas afegit encara. Comença definint el primer pas del teu pla d'orientació.</p>`;return}e.innerHTML=Fe.map(a=>`
    <div class="planner-item ${a.completat?"planner-completed":""}" data-id="${a.id}">
      <div class="planner-dot"></div>
      <div class="planner-content">
        <div class="flex justify-between items-start gap-3">
          <div class="flex-1">
            <div class="planner-text">${k(a.text)}</div>
            <div class="planner-date">${k(a.data)}</div>
          </div>
          <div class="flex gap-2" style="flex-shrink:0;">
            <button class="btn btn--icon btn--sm" data-toggle="${a.id}"
              title="${a.completat?"Marca com a pendent":"Marca com a completat"}"
              aria-label="${a.completat?"Descompletar":"Completar"}">
              ${a.completat?'<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg>':'<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'}
            </button>
            <button class="btn btn--icon btn--sm btn--danger" data-delete="${a.id}"
              title="Eliminar" aria-label="Eliminar pas">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>`).join(""),e.querySelectorAll("[data-toggle]").forEach(a=>{a.addEventListener("click",()=>{const n=Fe.find(s=>s.id===a.dataset.toggle);n&&(n.completat=!n.completat,te($.PLANNER_ITEMS,Fe),Ga(i))})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",()=>{Fe=Fe.filter(n=>n.id!==a.dataset.delete),te($.PLANNER_ITEMS,Fe),Ga(i)})})}}function bE(i){const e=i.querySelector("#planner-chips");e&&(e.innerHTML=fE.map(t=>`<button class="chip" data-pas="${k(t)}">${k(t)}</button>`).join(""),e.querySelectorAll(".chip").forEach(t=>{t.addEventListener("click",()=>oo(i,t.dataset.pas))}))}function oo(i,e){e!=null&&e.trim()&&(Fe.push({id:Gs(),text:e.trim(),data:p1(),completat:!1}),te($.PLANNER_ITEMS,Fe),Ga(i))}function yE(i){var t,a;const e=i.querySelector("#planner-input");(t=i.querySelector("#planner-btn-afegir"))==null||t.addEventListener("click",()=>{var s;const n=(s=e==null?void 0:e.value)==null?void 0:s.trim();n&&(oo(i,n),e.value="")}),e==null||e.addEventListener("keydown",n=>{var s;if(n.key==="Enter"){const o=(s=e.value)==null?void 0:s.trim();o&&(oo(i,o),e.value="")}}),(a=i.querySelector("#planner-btn-buidar"))==null||a.addEventListener("click",()=>{confirm("Estàs segur/a? S'eliminaran tots els passos del planner.")&&(Fe=[],te($.PLANNER_ITEMS,Fe),Ga(i))})}async function EE(i){i.innerHTML='<div class="loading-state">Carregant classes…</div>';const e=ii();if(e)if(Bs()){const t=await M0(fe().uid);AE(i,t)}else{const t=await Xy(e.classesUnides||[]);CE(i,t,e)}}function AE(i,e){var a;const t=e.map(n=>Zu(n)).join("");i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
        </span>
        Les meves classes
      </h1>
      <p class="section-subtitle">Crea i gestiona les teves classes. Cada classe té un codi d'invitació únic.</p>
    </div>

    <div class="glass-card card-accent-top mb-6">
      <h2 class="font-semibold mb-4" style="color:var(--t-1);font-size:var(--fz-sm);">Crear nova classe</h2>
      <div class="flex gap-3 items-end">
        <div class="form-group flex-1">
          <label class="form-label" for="classe-nom">Nom de la classe</label>
          <input class="form-input" id="classe-nom" type="text" placeholder="Ex: 4t ESO B — Orientació 2025" />
        </div>
        <button class="btn btn--primary" id="btn-crear-classe">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Crear classe
        </button>
      </div>
      <p id="classe-error" class="text-xs" style="color:var(--rose);display:none;margin-top:var(--s2);"></p>
    </div>

    <div class="classes-grid" id="classes-grid">
      ${t||`<div class="text-muted text-sm" style="padding:var(--s4);">Encara no has creat cap classe. Crea la primera per obtenir el codi d'invitació.</div>`}
    </div>`,(a=i.querySelector("#btn-crear-classe"))==null||a.addEventListener("click",async()=>{var s,o;const n=(o=(s=i.querySelector("#classe-nom"))==null?void 0:s.value)==null?void 0:o.trim();if(!n){td(i,"Escriu un nom per a la classe.");return}try{i.querySelector("#btn-crear-classe").disabled=!0;const c=ii().nom||fe().displayName||fe().email||"Docent",l=await Wy(fe().uid,c,n),d=i.querySelector("#classes-grid");if(d){const h=document.createElement("div");h.innerHTML=Zu(l),d.prepend(h.firstElementChild)}i.querySelector("#classe-nom").value="",i.querySelector("#classe-error").style.display="none"}catch(c){td(i,`Error: ${c.message}`)}finally{i.querySelector("#btn-crear-classe").disabled=!1}})}function Zu(i){return`
    <div class="glass-card classe-card card-accent-top" data-id="${i.id}">
      <div class="classe-card-header">
        <div>
          <div class="classe-card-name">${k(i.nom)}</div>
          <div class="text-xs text-muted">${(i.alumnes||[]).length} alumnes inscrits</div>
        </div>
        <div class="codi-badge" title="Codi d'invitació per als alumnes">
          <span class="codi-label">Codi</span>
          <span class="codi-val">${k(i.codi)}</span>
        </div>
      </div>
      <div class="alumnes-mini-list">
        ${(i.alumnes||[]).length===0?`<p class="text-xs text-muted">Encara no hi ha alumnes. Comparteix el codi per a que s'uneixin.</p>`:(i.alumnes||[]).map(e=>`
              <div class="alumne-mini-item">
                <div class="alumne-mini-avatar" style="background:${TE(e.nom)}">${SE(e.nom)}</div>
                <span class="text-xs">${k(e.nom)}</span>
              </div>`).join("")}
      </div>
    </div>`}function CE(i,e,t){var n;const a=t.classeActiva;i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </span>
        La meva classe
      </h1>
      <p class="section-subtitle">Uneix-te a una classe amb el codi que et faciliti el teu docent.</p>
    </div>

    <div class="glass-card card-accent-top mb-6">
      <h2 class="font-semibold mb-4" style="color:var(--t-1);font-size:var(--fz-sm);">Unir-se a una classe</h2>
      <div class="flex gap-3 items-end">
        <div class="form-group flex-1">
          <label class="form-label" for="codi-input">Codi de la classe (6 caràcters)</label>
          <input class="form-input" id="codi-input" type="text" maxlength="6"
            style="text-transform:uppercase;letter-spacing:.18em;font-weight:700;font-size:1.1rem;"
            placeholder="EX: AB3K7X" />
        </div>
        <button class="btn btn--primary" id="btn-unirse">Unir-me</button>
      </div>
      <p id="codi-error" class="text-xs" style="color:var(--rose);display:none;margin-top:var(--s2);"></p>
    </div>

    <div id="classes-alumne" class="classes-grid">
      ${e.map(s=>ed(s,a)).join("")||`<div class="text-muted text-sm" style="padding:var(--s4);">Encara no pertanys a cap classe. Entra el codi que t'ha facilitat el teu docent.</div>`}
    </div>`,(n=i.querySelector("#btn-unirse"))==null||n.addEventListener("click",async()=>{var c,l,d,h;const s=(l=(c=i.querySelector("#codi-input"))==null?void 0:c.value)==null?void 0:l.trim().toUpperCase(),o=i.querySelector("#codi-error");if(!s||s.length<6){xr(o,"El codi ha de tenir 6 caràcters.");return}try{i.querySelector("#btn-unirse").disabled=!0;const f=await Ky(s);if(!f){xr(o,"No s'ha trobat cap classe amb aquest codi. Comprova que sigui correcte.");return}const g=ii().nom||fe().displayName||((d=fe().email)==null?void 0:d.split("@")[0])||"Alumne/a",b=fe().email||"Sense correu",_={uid:fe().uid,nom:g,email:b};(h=f.alumnes)!=null&&h.some(q=>q.uid===_.uid)||await Qy(f.id,_),await ea(fe().uid,{classeActiva:f.id});const w=i.querySelector("#classes-alumne");if(w){const q=document.createElement("div");q.innerHTML=ed(f,f.id),w.prepend(q.firstElementChild)}i.querySelector("#codi-input").value="",o&&(o.style.display="none")}catch(f){xr(o,`Error: ${f.message}`)}finally{i.querySelector("#btn-unirse").disabled=!1}})}function ed(i,e){const t=i.id===e;return`
    <div class="glass-card classe-card ${t?"classe-activa":""}" data-id="${i.id}">
      <div class="classe-card-header">
        <div>
          <div class="classe-card-name">${k(i.nom)}</div>
          <div class="text-xs text-muted">Docent: ${k(i.professorNom)} · ${(i.alumnes||[]).length} alumnes</div>
        </div>
        ${t?'<span class="badge badge--green">Activa</span>':""}
      </div>
    </div>`}function td(i,e){const t=i.querySelector("#classe-error");t&&(t.textContent=e,t.style.display="")}function xr(i,e){i&&(i.textContent=e,i.style.display="")}function SE(i=""){return i.split(" ").slice(0,2).map(e=>e[0]||"").join("").toUpperCase()}function TE(i=""){const e=["#4a7fd4","#7c68e8","#1ea882","#c4507e","#e09d2a","#3b9ec4"];let t=0;for(const a of i)t=(t*31+a.charCodeAt(0))%e.length;return e[Math.abs(t)%e.length]}async function _E(i){i.innerHTML='<div class="loading-state">Carregant tasques…</div>';const e=ii();if(!e){i.innerHTML='<p class="text-muted text-sm">Inicia sessió primer.</p>';return}if(Bs()){const t=await M0(fe().uid);if(!t.length){id(i,"professor");return}const a=t.some(n=>n.id===e.classeActiva)?e.classeActiva:t[0].id;await IE(i,t,a)}else{const t=e.classeActiva;if(!t){id(i,"alumne");return}await z0(i,t)}}function id(i,e){i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        </span>
        Tasques
      </h1>
    </div>
    <div class="glass-card" style="text-align:center;padding:var(--s12);">
      <p class="text-secondary">Has de pertànyer a una classe per veure les tasques.</p>
      <p class="text-muted text-sm mt-4">Ves a la secció <strong>Classes</strong> per ${e==="professor"?"crear una classe":"unir-te a una classe"}.</p>
    </div>`}async function IE(i,e,t){var f;let a=t;i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        </span>
        Publicar tasques
      </h1>
      <p class="section-subtitle">Dissenya activitats (text, documents, quiz) per aules específiques.</p>
    </div>

    <!-- Selector de classe -->
    <div class="glass-card mb-5 flex items-center gap-3">
      <label class="form-label mb-0" style="white-space:nowrap;">Classe activa:</label>
      <select class="form-input w-full" id="t-classe-sel">
        ${e.map(g=>`<option value="${g.id}" ${g.id===a?"selected":""}>${k(g.nom)}</option>`).join("")}
      </select>
    </div>

    <!-- Crear tasca -->
    <div class="glass-card card-accent-top mb-6">
      <h2 class="font-semibold mb-4" style="font-size:var(--fz-sm);color:var(--t-1);">📝 Crear nova tasca</h2>
      
      <div class="form-group mb-3">
        <label class="form-label" for="t-titol">Títol de la tasca</label>
        <input class="form-input" id="t-titol" type="text" placeholder="Ex: Investigació sobre GM de Sanitat…" />
      </div>

      <div class="student-edit-grid mb-3">
        <div class="form-group">
          <label class="form-label" for="t-limit">Data límit (opcional)</label>
          <input class="form-input" id="t-limit" type="date" />
        </div>
        <div class="form-group">
          <label class="form-label" for="t-tipus">Format que han de lliurar els alumnes</label>
          <select class="form-input" id="t-tipus">
            <option value="text">Document de Text (Lliure)</option>
            <option value="fitxer">Pujar un Fitxer (Imatge, PDF, etc)</option>
            <option value="quiz">Qüestionari tipus test (Quiz)</option>
          </select>
        </div>
      </div>

      <div class="form-group mb-4">
        <label class="form-label" for="t-desc">Descripció i material adjunt</label>
        <textarea class="form-textarea" id="t-desc" rows="4"
          placeholder="Escriu les instruccions detallades. Pots afegir-hi enllaços a vídeos o articles aquí."></textarea>
      </div>

      <!-- Zona dinàmica (per quiz principalment) -->
      <div id="t-zona-dinamica" style="display:none; margin-bottom:var(--s4); padding:var(--s4); border-radius:var(--r2); background:rgba(255,255,255,0.03); border:1px solid var(--border);">
        <h3 class="font-semibold text-sm mb-3">Preguntes del test</h3>
        <div id="quiz-preguntes-llista" class="flex flex-col gap-3"></div>
        <button class="btn btn--secondary btn--sm mt-3" id="btn-add-pregunta">+ Afegir pregunta</button>
      </div>

      <button class="btn btn--primary" id="btn-publicar-tasca">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Publicar tasca
      </button>
      <p id="t-error" class="text-xs" style="color:var(--rose);display:none;margin-top:var(--s2);"></p>
    </div>

    <!-- Llista de tasques -->
    <div id="tasques-llista" class="tasques-grid"></div>`;let n=[];const s=i.querySelector("#t-classe-sel");s&&s.addEventListener("change",async g=>{a=g.target.value,await h(a)});const o=i.querySelector("#t-tipus"),c=i.querySelector("#t-zona-dinamica");o&&o.addEventListener("change",g=>{c.style.display=g.target.value==="quiz"?"block":"none"});const l=i.querySelector("#btn-add-pregunta"),d=i.querySelector("#quiz-preguntes-llista");l&&l.addEventListener("click",()=>{const g=Gs();n.push({id:g,titol:"",opcions:["","",""],correcte:0}),H0(d,n)});const h=async g=>{const b=i.querySelector("#tasques-llista");b.innerHTML='<div class="loading-state">...</div>';const _=await U0(g);qE(b,_)};await h(a),(f=i.querySelector("#btn-publicar-tasca"))==null||f.addEventListener("click",async()=>{var U,N,O,J,X;const g=(N=(U=i.querySelector("#t-titol"))==null?void 0:U.value)==null?void 0:N.trim(),b=(J=(O=i.querySelector("#t-desc"))==null?void 0:O.value)==null?void 0:J.trim(),_=(X=i.querySelector("#t-limit"))==null?void 0:X.value,w=o==null?void 0:o.value,q=i.querySelector("#t-error");if(!g||!b){q&&(q.textContent="El títol i la descripció són obligatoris.",q.style.display="");return}if(w==="quiz"){if(!n.length){q&&(q.textContent="Afegeix al menys una pregunta al test.",q.style.display="");return}for(const j of n)if(!j.titol.trim()){q&&(q.textContent="Totes les preguntes han de tenir un enunciat.",q.style.display="");return}}try{i.querySelector("#btn-publicar-tasca").disabled=!0,await Yy({classeId:a,titol:g,desc:b,tipus:w,limit:_||null,quiz:w==="quiz"?n:null,professorId:fe().uid}),i.querySelector("#t-titol").value="",i.querySelector("#t-desc").value="",i.querySelector("#t-limit").value="",o&&(o.value="text"),c.style.display="none",q&&(q.style.display="none"),n=[],d&&(d.innerHTML=""),await h(a)}catch(j){q&&(q.textContent=`Error: ${j.message}`,q.style.display="")}finally{i.querySelector("#btn-publicar-tasca").disabled=!1}})}function H0(i,e){i.innerHTML=e.map((t,a)=>`
    <div class="glass-card card-accent-top p-3" style="--card-color:var(--violet);">
      <div class="flex justify-between items-center mb-2">
        <span class="text-xs font-bold text-violet-l">Pregunta ${a+1}</span>
        <button class="btn btn--danger btn--sm" data-rem-q="${t.id}" style="padding:4px 8px;">Esborrar</button>
      </div>
      <input type="text" class="form-input text-sm mb-2" data-q-tit="${t.id}" value="${k(t.titol)}" placeholder="Enunciat de la pregunta" />
      <div class="flex flex-col gap-1">
        ${t.opcions.map((n,s)=>`
          <div class="flex items-center gap-2">
            <input type="radio" name="corr-${t.id}" value="${s}" ${t.correcte===s?"checked":""} title="Marcar com a resposta correcta">
            <input type="text" class="form-input text-xs flex-1" data-q-opt="${t.id}-${s}" value="${k(n)}" placeholder="Opció ${s+1}" />
          </div>
        `).join("")}
      </div>
    </div>
  `).join(""),e.forEach(t=>{var a,n;(a=i.querySelector(`[data-q-tit="${t.id}"]`))==null||a.addEventListener("input",s=>t.titol=s.target.value),t.opcions.forEach((s,o)=>{var c;(c=i.querySelector(`[data-q-opt="${t.id}-${o}"]`))==null||c.addEventListener("input",l=>{t.opcions[o]=l.target.value})}),i.querySelectorAll(`input[name="corr-${t.id}"]`).forEach(s=>{s.addEventListener("change",o=>t.correcte=parseInt(o.target.value))}),(n=i.querySelector(`[data-rem-q="${t.id}"]`))==null||n.addEventListener("click",()=>{e.splice(e.findIndex(s=>s.id===t.id),1),H0(i,e)})})}async function qE(i,e){var t;if(i){if(!e.length){i.innerHTML='<p class="text-muted text-sm">Aquesta classe no té cap tasca publicada.</p>';return}i.innerHTML="";for(const a of e){const n=await t1(a.id),s=n.filter(d=>d.nota!==null&&d.nota!==void 0);n.filter(d=>d.nota===null||d.nota===void 0);const o=s.length?(s.reduce((d,h)=>d+h.nota,0)/s.length).toFixed(1):null,c=a.tipus==="quiz"?"Test (Quiz)":a.tipus==="fitxer"?"Entrega de fitxer":"Text lliure",l=document.createElement("div");l.className="glass-card tasca-card card-accent-top",l.innerHTML=`
      <div class="tasca-card-header">
        <div>
          <div class="tasca-card-titol flex gap-2 items-center">
            ${k(a.titol)}
            <span class="badge badge--violet" style="font-size:0.6rem;">${c}</span>
          </div>
          ${a.limit?`<div class="text-xs text-muted mt-1">Data límit: ${k(a.limit)}</div>`:""}
        </div>
        <div class="flex gap-2 items-center">
          ${o!==null?`<span class="badge badge--green">Mitja: ${o}</span>`:""}
          <span class="badge badge--blue">${n.length} lliur.</span>
          <button class="btn btn--danger btn--sm" data-delete="${a.id}" title="Eliminar tasca">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
          </button>
        </div>
      </div>
      <p class="text-sm text-secondary mb-3">${k(a.desc)}</p>

      <!-- Lliuraments -->
      <div class="lliuraments-zona">
        ${n.length?n.map(d=>{let h="";return a.tipus==="quiz"&&d.respostesQuiz?h=`<div class="p-3 bg-black/20 rounded border border-border mt-2">
                  <p class="text-xs font-semibold text-blue-l mb-2">Respostes (${d.respostesQuiz.filter(g=>g.correcte).length} encerts de ${d.respostesQuiz.length}):</p>
                  <ul class="text-xs text-secondary list-disc ml-4">
                    ${d.respostesQuiz.map(g=>`<li>
                      ${k(g.preg)}<br>
                      <span style="color:${g.correcte?"var(--green-l)":"var(--rose-l)"}">
                        ↪ ${k(g.resp)} ${g.correcte?"(Correcte)":"(Incorrecte)"}
                      </span>
                    </li>`).join("")}
                  </ul>
                </div>`:a.tipus==="fitxer"&&d.adjunt?h=`<div class="mt-2"><img src="${d.adjunt}" class="lliurament-img" alt="Fitxer alumne" /></div>`:a.tipus==="text"&&d.textData&&(h=`<div class="mt-2 text-sm text-secondary bg-black/20 p-3 rounded border border-border" style="white-space:pre-wrap;">${k(d.textData)}</div>`),`
                <div class="lliurament-item" id="ll-${d.id}">
                  <div class="lliurament-header">
                    <span class="font-semibold text-sm">${k(d.alumneNom)}</span>
                    ${d.nota!==null&&d.nota!==void 0?`<span class="badge badge--${d.nota>=5?"green":"rose"}">${d.nota} / 10</span>`:'<span class="badge badge--amber">Sense qualificar</span>'}
                  </div>
                  ${h}
                  <div class="nota-zona flex flex-wrap gap-2 items-center mt-3 pt-3 border-t border-border">
                    <input type="number" min="0" max="10" step="0.5"
                      class="form-input" style="width:70px;padding:6px 10px;"
                      value="${d.nota??""}" placeholder="Nota" data-id="${d.id}" />
                    <input type="text" class="form-input" style="flex:1;min-width:140px;padding:6px 10px;"
                      value="${k(d.comentariProf||"")}" placeholder="Comentari docent…" data-com="${d.id}" />
                    <button class="btn btn--primary btn--sm" data-qualificar="${d.id}">Qualificar</button>
                  </div>
                </div>`}).join(""):'<p class="text-muted text-xs">Cap alumne ha lliurat aquesta tasca encara.</p>'}
      </div>`,(t=l.querySelector(`[data-delete="${a.id}"]`))==null||t.addEventListener("click",async()=>{confirm("Vols eliminar aquesta tasca i tots els seus lliuraments? Aquesta acció és irreversible.")&&(await Zy(a.id),l.remove())}),l.querySelectorAll("[data-qualificar]").forEach(d=>{d.addEventListener("click",async()=>{var w;const h=d.dataset.qualificar,f=l.querySelector(`[data-id="${h}"]`),g=l.querySelector(`[data-com="${h}"]`),b=parseFloat(f==null?void 0:f.value);if(isNaN(b)||b<0||b>10){alert("La nota ha de ser numèrica entre 0 i 10.");return}await a1(h,b,((w=g==null?void 0:g.value)==null?void 0:w.trim())||""),d.textContent="Fet!",d.disabled=!0,setTimeout(()=>{d.textContent="Qualificar",d.disabled=!1},2e3);const _=l.querySelector(`#ll-${h} .lliurament-header span:last-child`);_&&(_.className=`badge badge--${b>=5?"green":"rose"}`,_.textContent=`${b} / 10`)})}),i.appendChild(l)}}}async function z0(i,e){const t=fe().uid,a=await U0(e),n=await i1(t),s=n.map(l=>l.nota).filter(l=>l!=null),o=s.length?(s.reduce((l,d)=>l+d,0)/s.length).toFixed(1):null;i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </span>
        Les meves tasques
      </h1>
      <p class="section-subtitle">${s.length?`${s.length} tasques qualificades · Nota mitjana global: <strong>${o} / 10</strong>`:"Resol i lliura el que et demana el docent."}</p>
    </div>

    ${o!==null?`
    <div class="glass-card card-accent-top mb-6 text-center">
      <div style="font-size:3rem;font-weight:800;background:var(--grad-h);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${o}</div>
      <p class="text-secondary text-sm">Nota mitja actual de classe</p>
    </div>`:""}

    <div class="tasques-grid" id="tasques-alumne"></div>`;const c=i.querySelector("#tasques-alumne");if(!a.length){c.innerHTML='<p class="text-muted text-sm glass-card">Sense tasques publicades.</p>';return}a.forEach(l=>{var g;const d=n.find(b=>b.tasqueId===l.id),h=`
      <div class="tasca-card-titol flex items-center gap-2">
        ${k(l.titol)}
        <span class="badge badge--violet" style="font-size:0.6rem;">${l.tipus==="quiz"?"Test":l.tipus==="fitxer"?"Fitxer":"Document"}</span>
      </div>`,f=document.createElement("div");f.className="glass-card tasca-card card-accent-top",f.innerHTML=`
      <div class="tasca-card-header">
        <div>
          ${h}
          ${l.limit?`<div class="text-xs text-muted mt-1">Data límit: ${k(l.limit)}</div>`:""}
        </div>
        ${(d==null?void 0:d.nota)!==null&&(d==null?void 0:d.nota)!==void 0?`<span class="badge badge--${d.nota>=5?"green":"rose"}">${d.nota} / 10</span>`:d?'<span class="badge badge--amber">Lliurat, pendent nota</span>':'<span class="badge badge--violet">Per lliurar</span>'}
      </div>
      <div class="text-sm text-secondary mb-4 p-3 bg-black/10 rounded border border-border" style="white-space:pre-wrap;">${k(l.desc)}</div>
      
      ${d!=null&&d.comentariProf?`<div class="comentari-prof"><strong>Feedback Docent:</strong><br>${k(d.comentariProf)}</div>`:""}

      ${d?`
        <div class="lliurat-ok flex gap-3 items-center border border-green/20 bg-green/5 p-3 rounded">
          <svg width="20" height="20" stroke="var(--green-l)" fill="none" viewBox="0 0 24 24"><path stroke-width="2" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline stroke-width="2" points="22 4 12 14.01 9 11.01"/></svg>
          <span class="text-sm font-semibold text-green-l">Tasca lliurada correctament.</span>
        </div>
      `:xE(l)}
    `,d||(g=f.querySelector(`[data-lliurar="${l.id}"]`))==null||g.addEventListener("click",async()=>{var w,q,U,N,O,J;const b=f.querySelector(`[data-lliurar="${l.id}"]`),_=f.querySelector(`.arr-${l.id}`);_.style.display="none";try{let X={tasqueId:l.id,classeId:e,alumneId:t,alumneNom:ii().nom||((w=fe().email)==null?void 0:w.split("@")[0])||"Alumne/a"};if(l.tipus==="text"){const j=(U=(q=f.querySelector(`#val-${l.id}`))==null?void 0:q.value)==null?void 0:U.trim();if(!j)throw new Error("Escriu la teva resposta.");X.textData=j}else if(l.tipus==="fitxer"){const j=(O=(N=f.querySelector(`#val-${l.id}`))==null?void 0:N.files)==null?void 0:O[0];if(!j)throw new Error("Adjunta un fitxer.");if(j.size>2*1024*1024)throw new Error("Fitxer massa gran (màx 2MB).");X.adjunt=await wE(j)}else if(l.tipus==="quiz"){const j=[];let C=!1;if((l.quiz||[]).forEach(v=>{const y=f.querySelector(`input[name="ans-${v.id}"]:checked`);if(!y)C=!0;else{const A=parseInt(y.value);j.push({preg:v.titol,resp:v.opcions[A],correcte:v.correcte===A})}}),C||j.length<(((J=l.quiz)==null?void 0:J.length)||0))throw new Error("Respon totes les preguntes.");X.respostesQuiz=j}b.disabled=!0,b.textContent="Enviant...",await e1(X),await z0(i,e)}catch(X){_.textContent=X.message,_.style.display="",b.disabled=!1,b.textContent="Enviar lliurament"}}),c.appendChild(f)})}function xE(i){let e="";return i.tipus==="text"?e=`
      <div class="form-group mb-3">
        <label class="form-label text-xs">Això és un document de text. Escriu aquí la teva entrega:</label>
        <textarea class="form-textarea" rows="4" id="val-${i.id}" placeholder="Escriu i desenvolupa la tasca..."></textarea>
      </div>`:i.tipus==="fitxer"?e=`
      <div class="form-group mb-3">
        <label class="form-label text-xs">Afegeix una captura de pantalla, foto o PDF (Màx 2MB):</label>
        <input type="file" class="form-input" id="val-${i.id}" accept="image/*,application/pdf" style="padding:8px;" />
      </div>`:i.tipus==="quiz"&&(e=`<div class="mb-4">${(i.quiz||[]).map((a,n)=>`
      <div class="mb-4">
        <span class="block text-sm font-semibold mb-2">${n+1}. ${k(a.titol)}</span>
        ${a.opcions.map((s,o)=>s.trim()?`
          <label class="flex items-center gap-2 mb-1 px-3 py-2 border border-border rounded bg-black/10 cursor-pointer hover:bg-black/20 text-sm">
            <input type="radio" name="ans-${a.id}" value="${o}">
            ${k(s)}
          </label>
        `:"").join("")}
      </div>
    `).join("")}</div>`),`
    <div class="lliurament-form pt-4 border-t border-border mt-2">
      ${e}
      <button class="btn btn--primary" data-lliurar="${i.id}">Enviar lliurament</button>
      <p class="arr-${i.id} text-xs text-rose-l mt-2" style="display:none;"></p>
    </div>
  `}function wE(i){return new Promise((e,t)=>{const a=new FileReader;a.onload=()=>e(a.result),a.onerror=t,a.readAsDataURL(i)})}const co={eso:{id:"eso",nom:"ESO",nivell:0,desc:"Educació Secundària Obligatòria (12–16 anys). La base de tota la formació posterior.",seguits:["batxillerat","grauMitja","pttPfi","treballar"]},batxillerat:{id:"batxillerat",nom:"Batxillerat",nivell:1,desc:"2 anys. Via acadèmica que dona accés a la Selectivitat (PAU) i a la Universitat. Modalitats: Ciències, Humanitats/Socials, Arts.",seguits:["selectivitat","grauSuperior"]},grauMitja:{id:"grauMitja",nom:"Grau Mitjà (FP)",nivell:1,desc:"Cicle Formatiu de Grau Mitjà. 2 anys (~2.000h). Formació professional pràctica amb pràctiques en empresa (FCT). Accés directe des de l'ESO.",seguits:["grauSuperior","treballar"]},pttPfi:{id:"pttPfi",nom:"PTT / PFI",nivell:1,desc:"Programa de Transició al Treball o Programes de Formació i Inserció. 1 any. Via d'orientació i acompanyament professional per a qui necessita un any addicional de suport.",seguits:["grauMitja","treballar"]},treballar:{id:"treballar",nom:"Treballar directament",nivell:1,desc:"Incorporació directa al mercat laboral. Sense titulació FP, amb possibilitat d'obtenir certificats de professionalitat i formació contínua. Possible des de l'ESO, el Grau Mitjà o el Grau Superior.",seguits:["formacioContínua","certProfessionalitat"]},selectivitat:{id:"selectivitat",nom:"Selectivitat (PAU)",nivell:2,desc:"Proves d'Accés a la Universitat. Es fan al juny i setembre. La nota final (Batx. + PAU) determina l'accés a cada carrera.",seguits:["universitat","grauSuperior"]},grauSuperior:{id:"grauSuperior",nom:"Grau Superior (FP)",nivell:2,desc:"Cicle Formatiu de Grau Superior. 2 anys (~2.000h). Alta qualificació professional, pràctiques en empresa i accés a la universitat amb convalidació de crèdits.",seguits:["universitat","treballar","mestreFP"]},universitat:{id:"universitat",nom:"Universitat",nivell:3,desc:"Grau universitari (3–5 anys). Accés per PAU o per Grau Superior (convalidació). Titulació de Grau o equivalent.",seguits:["master","treballar"]},formacioContínua:{id:"formacioContínua",nom:"Formació Contínua",nivell:2,desc:"Cursos de formació per a treballadors en actiu. Finançats per FOAP/SEPE. Permeten actualitzar competències i accedir a millors posicions.",seguits:[]},certProfessionalitat:{id:"certProfessionalitat",nom:"Certificat de Professionalitat",nivell:2,desc:"Titulació oficial que acredita competències professionals específiques. Expedit pel Servei Públic d'Ocupació i reconegut a tot l'Estat.",seguits:["grauMitja"]},mestreFP:{id:"mestreFP",nom:"Especialització FP",nivell:3,desc:"Cursos d'especialització de FP (6 mesos). Formació avançada en àmbits com la ciberseguretat, la intel·ligència artificial, la indústria 4.0, etc.",seguits:["treballar"]},master:{id:"master",nom:"Màster / Postgrau",nivell:4,desc:"Formació universitària de postgrau. 1–2 anys. Especialització professional o investigació (Màster Universitari reconegut per l'ANECA).",seguits:["doctorat"]},doctorat:{id:"doctorat",nom:"Doctorat",nivell:5,desc:"Màxim nivell d'estudis. 3–5 anys de recerca. Accés a posicions d'investigació i docència universitària.",seguits:[]}},lo={0:"#4a7fd4",1:"#7c68e8",2:"#1ea882",3:"#c4507e",4:"#e09d2a",5:"#6b7fbe"};async function PE(i){var a;i.innerHTML='<div class="loading-state">Carregant el teu camí…</div>';const e=(a=fe())==null?void 0:a.uid,t=e?await D0(e):{};i.innerHTML=RE(t),kE(i,t)}function RE(i){return`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
        </span>
        Camí acadèmic
      </h1>
      <p class="section-subtitle">Selecciona les etapes que has completat o estàs cursant. Veuràs totes les teves opcions a continuació.</p>
    </div>

    <div class="cami-layout">
      <!-- Arbre d'etapes -->
      <div class="cami-tree" id="cami-tree">
        ${J0(i)}
      </div>

      <!-- Panel d'opcions -->
      <aside>
        <div class="glass-card card-accent-top" id="cami-opcions-panel">
          <p class="text-secondary text-sm">Selecciona una etapa per veure la informació detallada i totes les opcions disponibles a continuació.</p>
        </div>
      </aside>
    </div>`}function J0(i){return Object.values(co).map(e=>{const t=i[e.id]||"pendent",a=lo[e.nivell]||"#4a7fd4";return`
      <div class="cami-node cami-node--${t} cami-nivell-${e.nivell}"
           data-id="${e.id}" tabindex="0" role="button"
           aria-label="${k(e.nom)} — ${k(t)}"
           style="--node-color:${a};">
        <div class="cami-node-indicator">
          ${t==="completat"?'<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>':t==="en_curs"?'<div class="cami-pulse"></div>':""}
        </div>
        <div class="cami-node-body">
          <div class="cami-node-nom">${k(e.nom)}</div>
          <div class="cami-node-status">${t==="completat"?"Completat":t==="en_curs"?"En curs":"Pendent"}</div>
        </div>
      </div>`}).join("")}function kE(i,e){const t=i.querySelector("#cami-tree"),a=i.querySelector("#cami-opcions-panel");t==null||t.querySelectorAll(".cami-node").forEach(n=>{const s=()=>{t.querySelectorAll(".cami-node").forEach(l=>l.classList.remove("selected")),n.classList.add("selected");const o=n.dataset.id,c=e[o]||"pendent";hs(a,o,c,e,i)};n.addEventListener("click",s),n.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&s()})})}function hs(i,e,t,a,n){const s=co[e];if(!i||!s)return;const o=lo[s.nivell]||"#4a7fd4",c=s.seguits.map(l=>co[l]).filter(Boolean);i.innerHTML=`
    <div style="border-left:3px solid ${o};padding-left:var(--s3);margin-bottom:var(--s5);">
      <div class="font-bold" style="color:${o};font-size:var(--fz-lg);">${k(s.nom)}</div>
      <div class="text-xs text-muted">Nivell ${s.nivell}</div>
    </div>
    <p class="text-sm text-secondary mb-6" style="line-height:1.7;">${k(s.desc)}</p>

    <!-- Botons d'estat -->
    <div class="cami-estat-btns mb-6">
      <div class="form-label mb-2">Marca el teu estat:</div>
      <div class="flex gap-2 flex-wrap">
        ${["pendent","en_curs","completat"].map(l=>`
          <button class="estat-btn ${t===l?"active":""}" data-estat="${l}"
            style="${t===l?`background:${o}22;border-color:${o};color:${o};`:""}">
            ${l==="pendent"?"Pendent":l==="en_curs"?"En curs":"Completat"}
          </button>`).join("")}
      </div>
    </div>

    <!-- Opcions posteriors -->
    ${c.length?`
    <div class="font-semibold text-sm mb-3" style="color:var(--t-1);">Opcions disponibles a continuació:</div>
    <div class="opcions-posteriors">
      ${c.map(l=>{const d=lo[l.nivell]||"#4a7fd4",h=a[l.id]||"pendent";return`
          <div class="opcio-posterior" data-goto="${l.id}" tabindex="0" role="button"
               style="border-left:2px solid ${d}33;">
            <div style="color:${d};font-weight:600;font-size:var(--fz-sm);">${k(l.nom)}</div>
            <div class="text-xs text-muted">${k(l.desc.slice(0,90))}…</div>
            <span class="badge badge--${h==="completat"?"green":h==="en_curs"?"violet":"blue"}" style="margin-top:6px;">
              ${h==="completat"?"Completat":h==="en_curs"?"En curs":"Explorar"}
            </span>
          </div>`}).join("")}
    </div>`:'<p class="text-muted text-sm">Aquesta és una fita terminal del teu camí acadèmic.</p>'}`,i.querySelectorAll(".estat-btn").forEach(l=>{l.addEventListener("click",async()=>{var g;const d=l.dataset.estat;a[e]=d;const h=(g=fe())==null?void 0:g.uid;h&&await n1(h,e,d);const f=n.querySelector("#cami-tree");f&&(f.innerHTML=J0(a)),ME(f,i,a,n),hs(i,e,d,a,n)})}),i.querySelectorAll(".opcio-posterior").forEach(l=>{const d=()=>{const h=l.dataset.goto,f=n.querySelector("#cami-tree"),g=f==null?void 0:f.querySelector(`[data-id="${h}"]`);g&&(f.querySelectorAll(".cami-node").forEach(b=>b.classList.remove("selected")),g.classList.add("selected"),g.scrollIntoView({behavior:"smooth",block:"center"}),hs(i,h,a[h]||"pendent",a,n))};l.addEventListener("click",d),l.addEventListener("keydown",h=>{(h.key==="Enter"||h.key===" ")&&d()})})}function ME(i,e,t,a){i==null||i.querySelectorAll(".cami-node").forEach(n=>{const s=()=>{i.querySelectorAll(".cami-node").forEach(o=>o.classList.remove("selected")),n.classList.add("selected"),hs(e,n.dataset.id,t[n.dataset.id]||"pendent",t,a)};n.addEventListener("click",s),n.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&s()})})}const Pn=[{key:"analisiMusical",nom:"Anàlisi Musical"},{key:"artsEscentiques",nom:"Arts Escèniques"},{key:"biologia",nom:"Biologia"},{key:"cienciesGenerals",nom:"Ciències Generals"},{key:"cantCoralTecnicaVocal",nom:"Cant i Coral Tècnica Vocal"},{key:"dibuixArtistic",nom:"Dibuix Artístic"},{key:"dibuixTecnic",nom:"Dibuix Tècnic"},{key:"dibuixTecnicArts",nom:"Dibuix Tècnic Aplicat a les Arts – Disseny Tècnic aplicat a les Arts"},{key:"disseny",nom:"Disseny"},{key:"fisica",nom:"Física"},{key:"fonamentsArts",nom:"Fonaments de les Arts (Fonaments Artístics)"},{key:"funcionamentEmpresa",nom:"Funcionament de l'Empresa (Economia de l'Empresa)"},{key:"geografia",nom:"Geografia"},{key:"cienciesAmbientals",nom:"Ciències Ambientals i Geologia (Ciències Ambientals – Terra i Medi Ambient)"},{key:"historiaMusica",nom:"Història de la Dansa i de la Música"},{key:"historiaArt",nom:"Història de l'Art"},{key:"literaturaCastellana",nom:"Literatura Castellana"},{key:"literaturaCatalana",nom:"Literatura Catalana"},{key:"literaturaDramatica",nom:"Literatura Dramàtica"},{key:"grec",nom:"Llengua i Cultura Greques (Grec)"},{key:"llati",nom:"Llengua i Cultura Llatines (Llatí)"},{key:"matematiques",nom:"Matemàtiques"},{key:"matematiquesCSS",nom:"Matemàtiques Aplicades a les CCSS"},{key:"movimentsCulturals",nom:"Moviments culturals i artístics"},{key:"quimica",nom:"Química"},{key:"tecniquesExpressioGrafica",nom:"Tècniques d'Expressió Graficoplàstica"},{key:"tecnologiaEnginyeria",nom:"Tecnologia i Enginyeria (Tecnologia Industrial)"}],UE=[{codi:"41029",nom:`Administració d'Empreses i Gestió de la Innovació "Tecnocampus"`,universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41036",nom:`Administració d'Empreses i Gestió de la Innovació "Tecnocampus" (Docència en Anglès)`,universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41041",nom:`Administració d'Empreses i Gestió de la Innovació / Màrqueting i Comunitats Digitals "Tecnocampus" (Simultaneïtat)`,universitat:"UPF",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"41035",nom:`Administració d'Empreses i Gestió de la Innovació / Turisme i Gestió del Lleure "Tecnocampus" (Simultaneïtat)`,universitat:"UPF",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,1",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"11033",nom:"Administració i Direcció d'Empreses",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21014",nom:"Administració i Direcció d'Empreses",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21099",nom:"Administració i Direcció d'Empreses (Docència en Anglès)",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61077",nom:`Administració i Direcció d'Empreses i Transformació de Negocis "Centre Universitari EAE"`,universitat:"UdL",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41008",nom:"Administració i Direcció d'Empreses",universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61003",nom:"Administració i Direcció d'Empreses",universitat:"UdL",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61069",nom:"Administració i Direcció d'Empreses (Igualada)",universitat:"UdL",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81003",nom:"Administració i Direcció d'Empreses",universitat:"UdG",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71002",nom:"Administració i Direcció d'Empreses (Reus)",universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71004",nom:"Administració i Direcció d'Empreses (Tortosa)",universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71063",nom:`Administració i Direcció d'Empreses "IGEMA"`,universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"91003",nom:"Administració i Direcció d'Empreses",universitat:"UVic-UCC",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"91042",nom:"Administració i Direcció d'Empreses (Campus Manresa)",universitat:"UVic-UCC",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"11064",nom:"Administració i Direcció d'Empreses / Dret (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21098",nom:"Administració i Direcció d'Empreses / Dret (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61035",nom:"Administració i Direcció d'Empreses / Dret (Simultaneïtat)",universitat:"UdL",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81053",nom:"Administració i Direcció d'Empreses / Dret (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71055",nom:"Administració i Direcció d'Empreses / Dret (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81052",nom:"Administració i Direcció d'Empreses / Economia (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41034",nom:"Administració i Direcció d'Empreses - Economia / Dret (Agrupació de Simultaneïtat)",universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61070",nom:"Administració i Direcció d'Empreses / Enginyeria en Organització Industrial i Logística (simultaneïtat)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"81046",nom:"Administració i Direcció d'Empreses / Enginyeria en Tecnologies Industrials (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{biologia:"0,2",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61036",nom:"Administració i Direcció d'Empreses / Enginyeria Informàtica (Simultaneïtat)",universitat:"UdL",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71053",nom:"Administració i Direcció d'Empreses / Finances i Comptabilitat (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71079",nom:`Administració i Direcció d'Empreses / Màrqueting "ESIC" (simultaneïtat) Reus / Barcelona`,universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71080",nom:`Administració i Direcció d'Empreses / Màrqueting "ESIC" (simultaneïtat) Tortosa / Barcelona`,universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"11066",nom:"Administració i Direcció d'Empreses / Matemàtiques (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11095",nom:"Administració i Direcció d'Empreses / Química (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"11090",nom:"Administració i Direcció d'Empreses / Sociologia (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,2"}},{codi:"61053",nom:"Administració i Direcció d'Empreses / Turisme (Simultaneïtat)",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71003",nom:"Anglès",universitat:"URV",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2"}},{codi:"71049",nom:"Antropologia i Evolució Humana (Virtual o Semipresencial)",universitat:"URV/UOC",branca:"AH",p:{geografia:"0,2",historiaMusica:"0,1",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2"}},{codi:"11001",nom:"Antropologia Social i Cultural",universitat:"UB",branca:"CSJ",p:{geografia:"0,2",historiaMusica:"0,1",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21152",nom:"Antropologia Social i Cultural",universitat:"UAB",branca:"CSJ",p:{geografia:"0,2",historiaMusica:"0,1",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"11029",nom:"Arqueologia",universitat:"UB",branca:"AH",p:{fonamentsArts:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21146",nom:"Arqueologia",universitat:"UAB",branca:"AH",p:{fonamentsArts:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2"}},{codi:"11096",nom:"Arqueologia / Història (Simultaneïtat)",universitat:"UB",branca:"AH",p:{fonamentsArts:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"71087",nom:"Arquitectura, Estudis d'",universitat:"URV",branca:"EA",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",geografia:"0,1",cienciesAmbientals:"0,1",historiaArt:"0,2",matematiques:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"31078",nom:"Arquitectura, Estudis d' (Barcelona)",universitat:"UPC",branca:"EA",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",geografia:"0,1",cienciesAmbientals:"0,1",historiaArt:"0,2",matematiques:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"31079",nom:"Arquitectura, Estudis d' (Sant Cugat del Vallès)",universitat:"UPC",branca:"EA",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",geografia:"0,1",cienciesAmbientals:"0,1",historiaArt:"0,2",matematiques:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"81057",nom:"Arquitectura, Estudis d'",universitat:"UdG",branca:"EA",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",geografia:"0,1",cienciesAmbientals:"0,1",historiaArt:"0,2",matematiques:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"31016",nom:"Arquitectura Tècnica i Edificació",universitat:"UPC",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",historiaArt:"0,1",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"61016",nom:"Arquitectura Tècnica i Edificació",universitat:"UdL",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",historiaArt:"0,1",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"81020",nom:"Arquitectura Tècnica i Edificació",universitat:"UdG",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",historiaArt:"0,1",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"81065",nom:"Arquitectura Tècnica i Edificació (Semipresencial)",universitat:"UdG",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",historiaArt:"0,1",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"81045",nom:'Arts Escèniques "ERAM"',universitat:"UdG",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fonamentsArts:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"21020",nom:'Arts i Disseny "Massana"',universitat:"UAB",branca:"AH",p:{analisiMusical:"0,1",artsEscentiques:"0,1",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",historiaArt:"0,2",literaturaCastellana:"0,1",literaturaCatalana:"0,1",llati:"0,2",matematiques:"0,1",matematiquesCSS:"0,1",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"91063",nom:"Audiologia General",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2"}},{codi:"11099",nom:"Belles Arts",universitat:"UB",branca:"AH",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"91059",nom:'Belles Arts "BAU"',universitat:"UVic-UCC",branca:"AH",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"91917",nom:"Bioinformàtica (Docència en Anglès)",universitat:"UPC/UB//UAB/UPF",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11002",nom:"Biologia",universitat:"UB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21009",nom:"Biologia",universitat:"UAB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"81006",nom:"Biologia",universitat:"UdG",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"91018",nom:"Biologia",universitat:"UVic-UCC",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21008",nom:"Biologia Ambiental",universitat:"UAB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"81047",nom:"Biologia / Biotecnologia (Simultaneïtat)",universitat:"UdG",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"81048",nom:"Biologia / Ciències Ambientals (Simultaneïtat)",universitat:"UdG",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"91058",nom:"Biomedicina",universitat:"UVic-UCC",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11003",nom:"Bioquímica",universitat:"UB",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21011",nom:"Bioquímica",universitat:"UAB",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"71005",nom:"Bioquímica i Biologia Molecular",universitat:"URV",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"71054",nom:"Bioquímica i Biologia Molecular / Biotecnologia (Simultaneïtat)",universitat:"URV",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11004",nom:"Biotecnologia",universitat:"UB",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21012",nom:"Biotecnologia",universitat:"UAB",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"61005",nom:"Biotecnologia",universitat:"UdL",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"81007",nom:"Biotecnologia",universitat:"UdG",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"71006",nom:"Biotecnologia",universitat:"URV",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"91004",nom:"Biotecnologia",universitat:"UVic-UCC",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"81047",nom:"Biotecnologia / Biologia (Simultaneïtat)",universitat:"UdG",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"71054",nom:"Biotecnologia / Bioquímica i Biologia Molecular (Simultaneïtat)",universitat:"URV",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"71056",nom:"Biotecnologia / Enginyeria Informàtica (Simultaneïtat)",universitat:"URV",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11109",nom:"Ciberseguretat - ENTI",universitat:"UB",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31089",nom:"Ciència i Enginyeria de Dades",universitat:"UPC",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,1"}},{codi:"61040",nom:"Ciència i Producció Animal / Veterinària (Simultaneïtat)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11054",nom:"Ciència i Tecnologia dels Aliments",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21021",nom:"Ciència i Tecnologia dels Aliments",universitat:"UAB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"61008",nom:"Ciència i Tecnologia dels Aliments",universitat:"UdL",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21013",nom:"Ciència Política i Gestió Pública",universitat:"UAB",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21104",nom:"Ciència Política i Gestió Pública / Dret (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21125",nom:"Ciència Política i Gestió Pública / Sociologia (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,2"}},{codi:"21137",nom:"Ciència, Tecnologia i Humanitats",universitat:"UAB/UAM//UC3M",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,1",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21131",nom:"Ciències",universitat:"UAB/UAM//UC3M",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",matematiquesCSS:"0,1",quimica:"0,2"}},{codi:"11005",nom:"Ciències Ambientals",universitat:"UB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21147",nom:"Ciències Ambientals",universitat:"UAB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"81008",nom:"Ciències Ambientals",universitat:"UdG",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"81048",nom:"Ciències Ambientals / Biologia (Simultaneïtat)",universitat:"UdG",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21151",nom:"Ciències Ambientals / Geologia (Simultaneïtat)",universitat:"UAB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11006",nom:"Ciències Biomèdiques",universitat:"UB",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21010",nom:"Ciències Biomèdiques",universitat:"UAB",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"41071",nom:"Ciències Biomèdiques",universitat:"UPF",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"61004",nom:"Ciències Biomèdiques",universitat:"UdL",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11113",nom:'Ciències Culinàries i Gastronòmiques "CETT"',universitat:"UB",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21117",nom:"Ciències de l'Antiguitat",universitat:"UAB",branca:"AH",p:{fonamentsArts:"0,2",historiaArt:"0,2",literaturaCastellana:"0,1",literaturaCatalana:"0,1",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"11007",nom:"Ciències de l'Activitat Física i de l'Esport",universitat:"UB",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,1",quimica:"0,2"}},{codi:"41038",nom:`Ciències de l'Activitat Física i de l'Esport "Tecnocampus"`,universitat:"UPF",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,1",quimica:"0,2"}},{codi:"61007",nom:"Ciències de l'Activitat Física i de l'Esport",universitat:"UdL",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,1",quimica:"0,2"}},{codi:"61071",nom:"Ciències de l'Activitat Física i de l'Esport (La Seu d'Urgell)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,1",quimica:"0,2"}},{codi:"81082",nom:`Ciències de l'Activitat Física i de l'Esport "EUSES"`,universitat:"UdG",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,1",quimica:"0,2"}},{codi:"71086",nom:`Ciències de l'Activitat Física i de l'Esport "EUSES"`,universitat:"URV",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,1",quimica:"0,2"}},{codi:"91001",nom:"Ciències de l'Activitat Física i de l'Esport",universitat:"UVic-UCC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,1",quimica:"0,2"}},{codi:"61038",nom:"Ciències de l'Activitat Física i de l'Esport / Educació Primària (Simultaneïtat)",universitat:"UdL",branca:"CS",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"91055",nom:"Ciències de l'Activitat Física i de l'Esport / Educació Primària (Menció en Educació Física) (Simultaneïtat)",universitat:"UVic-UCC",branca:"CS",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"41037",nom:`Ciències de l'Activitat Física i de l'Esport / Fisioteràpia "Tecnocampus" (Simultaneïtat)`,universitat:"UPF",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61039",nom:"Ciències de l'Activitat Física i de l'Esport / Fisioteràpia (Simultaneïtat)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81086",nom:`Ciències de l'Activitat Física i de l'Esport / Fisioteràpia "EUSES" (simultaneïtat)`,universitat:"UdG",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71088",nom:`Ciències de l'Activitat Física i de l'Esport / Fisioteràpia "EUSES" (simultaneïtat)`,universitat:"URV",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"11077",nom:"Ciències del Mar",universitat:"UB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"41009",nom:"Ciències Empresarials - Management",universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"31096",nom:"Ciències i Tecnologies del Mar",universitat:"UPC",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11008",nom:"Ciències Polítiques i de l'Administració",universitat:"UB",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"41010",nom:"Ciències Polítiques i de l'Administració",universitat:"UPF",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81010",nom:"Ciències Polítiques i de l'Administració",universitat:"UdG",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"11065",nom:"Ciències Polítiques i de l'Administració / Dret (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81054",nom:"Ciències Polítiques i de l'Administració / Dret (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"11105",nom:'Cinematografia "ESCAC"',universitat:"UB",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"21084",nom:"Comptabilitat i Finances",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81011",nom:"Comptabilitat i Finances",universitat:"UdG",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"11097",nom:"Comunicació Audiovisual",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"21085",nom:"Comunicació Audiovisual",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"41002",nom:"Comunicació Audiovisual",universitat:"UPF",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"71007",nom:"Comunicació Audiovisual",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"91006",nom:"Comunicació Audiovisual",universitat:"UVic-UCC",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"81005",nom:'Comunicació Audiovisual i Multimèdia "ERAM"',universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",historiaArt:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"81067",nom:'Comunicació Audiovisual i Multimèdia "ERAM" (docència en anglès)',universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",historiaArt:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11098",nom:"Comunicació Audiovisual / Gestió d'Informació i Documentació Digital (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,1",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,1",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,2"}},{codi:"81068",nom:"Comunicació Cultural",universitat:"UdG",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21121",nom:"Comunicació de les Organitzacions",universitat:"UAB",branca:"CSJ",p:{cienciesGenerals:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",funcionamentEmpresa:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",matematiquesCSS:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"21126",nom:"Comunicació Interactiva",universitat:"UAB",branca:"CSJ",p:{cienciesGenerals:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",historiaArt:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11117",nom:"Comunicació i Indústries Culturals",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cantCoralTecnicaVocal:"0,1",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"61009",nom:"Comunicació i Periodisme Audiovisuals",universitat:"UdL",branca:"AH",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,1",cantCoralTecnicaVocal:"0,1",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"61042",nom:"Conservació de la Natura / Enginyeria Forestal (Simultaneïtat)",universitat:"UdL",branca:"C",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11100",nom:"Conservació - Restauració de Béns Culturals",universitat:"UB",branca:"AH",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"11010",nom:"Criminologia",universitat:"UB",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21068",nom:"Criminologia",universitat:"UAB",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81013",nom:"Criminologia",universitat:"UdG",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"91050",nom:'Criminologia "ESERP"',universitat:"UVic-UCC",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21108",nom:"Criminologia / Dret (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81056",nom:"Criminologia / Dret (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"41011",nom:"Criminologia i Polítiques Públiques de Prevenció",universitat:"UPF",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"41043",nom:"Criminologia i Polítiques Públiques de Prevenció / Dret (Simultaneïtat)",universitat:"UPF",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81083",nom:"Direcció d'Empreses Hoteleres i Gastronòmiques",universitat:"UdG",branca:"CSJ",p:{biologia:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,1"}},{codi:"21107",nom:"Direcció Hotelera",universitat:"UAB",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",disseny:"0,1",fisica:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1"}},{codi:"11114",nom:'Direcció Hotelera Internacional "CETT"',universitat:"UB",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",disseny:"0,1",fisica:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1"}},{codi:"71085",nom:`Direcció i Gestió d'Empreses en l'Àmbit Digital "ESIC"`,universitat:"URV",branca:"CSJ",p:{biologia:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11110",nom:'Direcció i Gestió Gastronòmica "Barcelona Culinary Hub"',universitat:"UB",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",cienciesAmbientals:"0,1",matematiques:"0,1",matematiquesCSS:"0,1",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11101",nom:"Disseny",universitat:"UB",branca:"AH",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",llati:"0,2",matematiques:"0,1",matematiquesCSS:"0,1",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21015",nom:'Disseny "EINA"',universitat:"UAB",branca:"AH",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",llati:"0,2",matematiques:"0,1",matematiquesCSS:"0,1",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"91056",nom:'Disseny i Innovació "Elisava"',universitat:"UVic-UCC",branca:"AH",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",llati:"0,2",matematiques:"0,1",matematiquesCSS:"0,1",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"91007",nom:'Disseny "BAU"',universitat:"UVic-UCC",branca:"AH",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",llati:"0,2",matematiques:"0,1",matematiquesCSS:"0,1",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11107",nom:'Disseny, Animació i Art Digital per a Videojocs i Jocs Aplicats "ENTI"',universitat:"UB",branca:"AH",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",historiaArt:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"31122",nom:"Disseny, Animació i Art Digital",universitat:"UPC",branca:"AH",p:{artsEscentiques:"0,1",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",literaturaCastellana:"0,1",literaturaCatalana:"0,1",matematiques:"0,1",matematiquesCSS:"0,1",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"31121",nom:"Disseny Digital i Tecnologies Multimèdia",universitat:"UPC",branca:"EA",p:{cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61064",nom:"Disseny Digital i Tecnologies Creatives",universitat:"UdL",branca:"EA",p:{cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"41045",nom:'Disseny i Producció de Videojocs "Tecnocampus"',universitat:"UPF",branca:"CSJ",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",matematiques:"0,1",matematiquesCSS:"0,1",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"41052",nom:`Disseny i Producció de Videojocs / Enginyeria Informàtica de Gestió i Sistemes d'Informació "Tecnocampus" (Simultaneïtat)`,universitat:"UPF",branca:"CSJ",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",matematiques:"0,2",matematiquesCSS:"0,1",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11106",nom:'Disseny i Desenvolupament de Videojocs i Jocs Aplicats "ENTI"',universitat:"UB",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31074",nom:"Disseny i Desenvolupament de Videojocs (Campus Terrassa)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31083",nom:"Disseny i Desenvolupament de Videojocs (Docència en Anglès) (Campus Barcelona)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81059",nom:"Disseny i Desenvolupament de Videojocs",universitat:"UdG",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"91921",nom:'Disseny per als Sistemes Alimentaris "ELISAVA-CETT"',universitat:"UVic-UCC/UB",branca:"AH",p:{biologia:"0,1",cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",historiaArt:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11012",nom:"Dret",universitat:"UB",branca:"CSJ",p:{funcionamentEmpresa:"0,2",geografia:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21086",nom:"Dret",universitat:"UAB",branca:"CSJ",p:{funcionamentEmpresa:"0,2",geografia:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"41013",nom:"Dret",universitat:"UPF",branca:"CSJ",p:{funcionamentEmpresa:"0,2",geografia:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"61010",nom:"Dret",universitat:"UdL",branca:"CSJ",p:{funcionamentEmpresa:"0,2",geografia:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81015",nom:"Dret",universitat:"UdG",branca:"CSJ",p:{funcionamentEmpresa:"0,2",geografia:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"71008",nom:"Dret",universitat:"URV",branca:"CSJ",p:{funcionamentEmpresa:"0,2",geografia:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"91053",nom:'Dret "ESERP"',universitat:"UVic-UCC",branca:"CSJ",p:{funcionamentEmpresa:"0,2",geografia:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"11064",nom:"Dret / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21098",nom:"Dret / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61035",nom:"Dret / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UdL",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81053",nom:"Dret / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71055",nom:"Dret / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41034",nom:"Dret / Administració i Direcció d'Empreses - Economia (Agrupació de Simultaneïtat)",universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21104",nom:"Dret / Ciència Política i Gestió Pública (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"11065",nom:"Dret / Ciències Polítiques i de l'Administració (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81054",nom:"Dret / Ciències Polítiques i de l'Administració (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21108",nom:"Dret / Criminologia (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81056",nom:"Dret / Criminologia (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"41043",nom:"Dret / Criminologia i Polítiques Públiques de Prevenció (Simultaneïtat)",universitat:"UPF",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21145",nom:"Dret / Relacions Internacionals (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21109",nom:"Dret / Relacions Laborals (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"71083",nom:"Dret / Relacions Laborals i Recursos Humans (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"11103",nom:"Economia",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21070",nom:"Economia",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21110",nom:"Economia (Docència en Anglès)",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41014",nom:"Economia",universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81016",nom:"Economia",universitat:"UdG",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71009",nom:"Economia",universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81052",nom:"Economia / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41034",nom:"Economia - Administració i Direcció d'Empreses / Dret (Agrupació de Simultaneïtat)",universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"91922",nom:"Economia / Estadística (Simultaneïtat)",universitat:"UB/UPC",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81069",nom:"Economia / Filosofia (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,2",cienciesGenerals:"0,1",cantCoralTecnicaVocal:"0,1",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"21167",nom:"Economia / Matemàtica Computacional i Analítica de Dades (simultaneïtat)",universitat:"UAB",branca:"CSJ/C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11013",nom:"Educació Infantil",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"21016",nom:"Educació Infantil",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"61011",nom:"Educació Infantil",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"81017",nom:"Educació Infantil",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71010",nom:"Educació Infantil",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71029",nom:"Educació Infantil (Tortosa)",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71034",nom:"Educació Infantil (El Vendrell)",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"91008",nom:"Educació Infantil",universitat:"UVic-UCC",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"91038",nom:"Educació Infantil (Campus Manresa)",universitat:"UVic-UCC",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"11072",nom:"Educació Infantil / Educació Primària (5 anys) (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"21111",nom:"Educació Infantil / Educació Primària (5 anys) (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"61037",nom:"Educació Infantil / Educació Primària (5 anys) (Simultaneïtat)",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"81049",nom:"Educació Infantil / Educació Primària (5 anys) (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71050",nom:"Educació Infantil / Educació Primària (5 anys) (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71076",nom:"Educació Infantil / Educació Primària (5 anys) (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"91030",nom:"Educació Infantil / Educació Primària (Menció en Llengua Anglesa) (5 anys) (Simultaneïtat)",universitat:"UVic-UCC",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"11014",nom:"Educació Primària",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"21018",nom:"Educació Primària",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"21102",nom:"Educació Primària (Docència en Anglès)",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"61072",nom:"Educació Primària (modalitat bilingüe)",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"61073",nom:"Educació Primària (modalitat dual)",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"81018",nom:"Educació Primària",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71011",nom:"Educació Primària",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71033",nom:"Educació Primària",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"91009",nom:"Educació Primària",universitat:"UVic-UCC",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"91030",nom:"Educació Primària / Educació Infantil (Menció en Llengua Anglesa) (5 anys) (Simultaneïtat)",universitat:"UVic-UCC",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"61038",nom:"Educació Primària / Ciències de l'Activitat Física i de l'Esport (Simultaneïtat)",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"91055",nom:"Educació Primària (Menció en Educació Física) / Ciències de l'Activitat Física i de l'Esport (Simultaneïtat)",universitat:"UVic-UCC",branca:"CS",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"11072",nom:"Educació Primària / Educació Infantil (5 anys) (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"21111",nom:"Educació Primària / Educació Infantil (5 anys) (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"61037",nom:"Educació Primària / Educació Infantil (5 anys) (Simultaneïtat)",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"81049",nom:"Educació Primària / Educació Infantil (5 anys) (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71050",nom:"Educació Primària / Educació Infantil (5 anys) (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"71076",nom:"Educació Primària / Educació Infantil (5 anys) (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",fisica:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"11015",nom:"Educació Social",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaMusica:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"21019",nom:"Educació Social",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaMusica:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"61013",nom:"Educació Social",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaMusica:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"81019",nom:"Educació Social",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaMusica:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"71012",nom:"Educació Social",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaMusica:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"91010",nom:"Educació Social",universitat:"UVic-UCC",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaMusica:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"11073",nom:"Empresa Internacional (Docència en Anglès)",universitat:"UB",branca:"CSJ",p:{biologia:"0,1",fisica:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1"}},{codi:"21087",nom:"Empresa i Tecnologia",universitat:"UAB",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,1",fisica:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31125",nom:'Empresa, Innovació i Tecnologia "EUNCET" (Campus 22@) (semipresencial)',universitat:"UPC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31126",nom:'Empresa, Innovació i Tecnologia "EUNCET" (Campus 22@)',universitat:"UPC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31127",nom:'Empresa, Innovació i Tecnologia "EUNCET" (Campus Terrassa) (semipresencial)',universitat:"UPC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31128",nom:'Empresa, Innovació i Tecnologia "EUNCET" (Campus Terrassa)',universitat:"UPC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31136",nom:`Empresa, Innovació i Tecnologia / Gestió i Digitalització en l'Esport "EUNCET" (Campus Can Dragó + Campus 22@) (presencial) (simultaneïtat)`,universitat:"UPC",branca:"CSJ/CS",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31129",nom:'Empresa, Innovació i Tecnologia / Màrqueting, Innovació i Tecnologia "EUNCET" (Campus 22@) (presencial) (simultaneïtat)',universitat:"UPC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31130",nom:'Empresa, Innovació i Tecnologia / Màrqueting, Innovació i Tecnologia "EUNCET" (Campus Terrassa) (presencial) (simultaneïtat)',universitat:"UPC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61006",nom:"Enginyeria Agrària i Alimentària",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81032",nom:"Enginyeria Agroalimentària",universitat:"UdG",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31004",nom:"Enginyeria Alimentària",universitat:"UPC",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31100",nom:"Enginyeria Ambiental",universitat:"UPC",branca:"EA",p:{biologia:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"41072",nom:"Enginyeria Audiovisual Computacional",universitat:"UPF",branca:"EA",p:{fisica:"0,2",matematiques:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11059",nom:"Enginyeria Biomèdica",universitat:"UB",branca:"EA",p:{biologia:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31051",nom:"Enginyeria Biomèdica",universitat:"UPC",branca:"EA",p:{biologia:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"41067",nom:"Enginyeria Biomèdica",universitat:"UPF",branca:"EA",p:{biologia:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81063",nom:"Enginyeria Biomèdica",universitat:"UdG",branca:"EA",p:{biologia:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71064",nom:"Enginyeria Biomèdica",universitat:"URV",branca:"EA",p:{biologia:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71070",nom:"Enginyeria Biomèdica / Enginyeria de Sistemes i Serveis de Telecomunicacions (Simultaneïtat)",universitat:"URV",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31103",nom:"Enginyeria Civil",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31113",nom:"Enginyeria Civil, Grau en + Màster Universitari en Enginyeria de Camins, Canals i Ports (PARS: Enginyer/a de Camins, Canals i Ports)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31091",nom:"Enginyeria d'Automoció (Campus Manresa)",universitat:"UPC",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21132",nom:`Enginyeria d'Automoció "EU Salesiana de Sarrià"`,universitat:"UAB",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71061",nom:"Enginyeria de Bioprocessos Alimentaris",universitat:"URV",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31097",nom:"Enginyeria de Ciències Agronòmiques",universitat:"UPC",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21118",nom:"Enginyeria de Dades",universitat:"UAB",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"91057",nom:'Enginyeria de Disseny Industrial "Elisava"',universitat:"UVic-UCC",branca:"EA",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",matematiquesCSS:"0,1",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31006",nom:"Enginyeria de Disseny Industrial i Desenvolupament del Producte (Vilanova i la Geltrú)",universitat:"UPC",branca:"EA",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31022",nom:"Enginyeria de Disseny Industrial i Desenvolupament del Producte (Terrassa)",universitat:"UPC",branca:"EA",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"91051",nom:"Enginyeria de l'Automoció",universitat:"UVic-UCC",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31052",nom:"Enginyeria de l'Energia",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61061",nom:"Enginyeria de l'Energia i Sostenibilitat / Enginyeria en Electrònica Industrial i Automàtica / Enginyeria Mecànica (Agrupació)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"61075",nom:"Enginyeria de l'Energia i Sostenibilitat / Enginyeria en Electrònica Industrial i Automàtica / Enginyeria Mecànica (agrupació) Grau en + Màster Universitari en Enginyeria Industrial (PARS: Enginyer/a Industrial)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"61065",nom:"Enginyeria de l'Energia i Sostenibilitat / Enginyeria Mecànica (Simultaneïtat)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"11060",nom:"Enginyeria de Materials",universitat:"UB",branca:"EA",p:{fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31025",nom:"Enginyeria de Materials",universitat:"UPC",branca:"EA",p:{fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31104",nom:"Eng. de Recursos Minerals i el seu Reciclatge / Eng. Electrònica, Industrial i Automàtica / Eng. Mecànica / Eng. Química (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31123",nom:"Enginyeria de Satèlꞏlits",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31084",nom:"Enginyeria de Sistemes Aeroespacials",universitat:"UPC",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31085",nom:"Eng. de Sistemes Aeroespacials / Eng. de Sistemes de Telecomunicació - Eng. Telemàtica (Agrupació de Simultaneïtat)",universitat:"UPC",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31010",nom:"Enginyeria de Sistemes Audiovisuals",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31011",nom:"Enginyeria de Sistemes Biològics",universitat:"UPC",branca:"EA",p:{biologia:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21115",nom:"Enginyeria de Sistemes de Telecomunicació / Enginyeria Electrònica de Telecomunicació (Agrupació)",universitat:"UAB",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31076",nom:"Enginyeria Telemàtica / Enginyeria de Sistemes de Telecomunicació (inclou xarxes i Internet) (agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31077",nom:"Enginyeria de Sistemes de Telecomunicació / Enginyeria Telemàtica (Inclou Xarxes i Internet) (Febrer) (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31085",nom:"Eng. de Sistemes de Telecomunicació - Eng. Telemàtica / Eng. de Sistemes Aeroespacials (Agrupació de Simultaneïtat)",universitat:"UPC",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21105",nom:"Enginyeria de Sistemes de Telecomunicació / Enginyeria Informàtica (Simultaneïtat)",universitat:"UAB",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71042",nom:"Enginyeria de Sistemes i Serveis de Telecomunicacions",universitat:"URV",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"71070",nom:"Enginyeria de Sistemes i Serveis de Telecomunicacions / Enginyeria Biomèdica (Simultaneïtat)",universitat:"URV",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31065",nom:"Enginyeria de Sistemes TIC (Àmbit d'Informàtica i Comunicacions)",universitat:"UPC",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31015",nom:"Eng. de Tecnologia i Disseny Tèxtil / Eng. Elèctrica / Eng. Electrònica Industrial i Automàtica / Eng. Mecànica / Eng. Química (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31086",nom:"Enginyeria de Tecnologies i Serveis de Telecomunicació (especialitats en Telecomunicació, Audiovisuals, i Telemàtica, que inclou xarxes i internet)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31111",nom:"Enginyeria de Tecnologies i Serveis de Telecomunicació (especialitats en Telecomunicació, Audiovisuals, i Telemàtica, que inclou xarxes i internet). Grau en + Màster Universitari en Enginyeria de Telecomunicació (PARS: Enginyeria de Telecomunicació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"41068",nom:"Enginyeria de Xarxes de Telecomunicació",universitat:"UPF",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"41057",nom:`Eng. d'Organització Industrial / Eng. Electrònica Industrial i Automàtica / Eng. Mecànica "Tecnocampus" (Agrupació)`,universitat:"UPF",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31053",nom:"Enginyeria Elèctrica",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81040",nom:"Enginyeria Elèctrica",universitat:"UdG",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71037",nom:"Enginyeria Elèctrica",universitat:"URV",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81050",nom:"Eng. Elèctrica / Eng. Electrònica, Industrial i Automàtica (Simultaneïtat)",universitat:"UdG",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71058",nom:"Eng. Elèctrica / Eng. Electrònica, Industrial i Automàtica (Simultaneïtat)",universitat:"URV",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31124",nom:"Eng. Elèctrica i Sistemes Ferroviaris / Eng. Electrònica, Industrial i Automàtica / Eng. Mecànica (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31015",nom:"Eng. Elèctrica / Eng. de Tecnologia i Disseny Tèxtil / Eng. Electrònica Industrial i Automàtica / Eng. Mecànica / Eng. Química (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11017",nom:"Enginyeria Electrònica de Telecomunicació",universitat:"UB",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31099",nom:"Enginyeria Electrònica de Telecomunicació",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"21115",nom:"Enginyeria Electrònica de Telecomunicació / Enginyeria de Sistemes de Telecomunicació (Agrupació)",universitat:"UAB",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"21106",nom:"Enginyeria Electrònica de Telecomunicació / Enginyeria Informàtica (Simultaneïtat)",universitat:"UAB",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21025",nom:'Enginyeria Electrònica Industrial i Automàtica "EU Salesiana de Sarrià"',universitat:"UAB",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31054",nom:"Enginyeria Electrònica Industrial i Automàtica",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81021",nom:"Enginyeria Electrònica Industrial i Automàtica",universitat:"UdG",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71038",nom:"Enginyeria Electrònica Industrial i Automàtica",universitat:"URV",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"41057",nom:`Eng. Electrònica Industrial i Automàtica / Eng. d'Organització Industrial / Eng. Mecànica "Tecnocampus" (Agrupació)`,universitat:"UPF",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61075",nom:"Enginyeria en Electrònica Industrial i Automàtica / Enginyeria de l'Energia i Sostenibilitat / Enginyeria Mecànica (agrupació) Grau en + Màster Universitari en Enginyeria Industrial (PARS: Enginyer/a Industrial)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"81050",nom:"Eng. Electrònica, Industrial i Automàtica / Eng. Elèctrica (Simultaneïtat)",universitat:"UdG",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71058",nom:"Eng. Electrònica, Industrial i Automàtica / Eng. Elèctrica (Simultaneïtat)",universitat:"URV",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31124",nom:"Eng. Electrònica, Industrial i Automàtica / Eng. Elèctrica i Sistemes Ferroviaris / Eng. Mecànica (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31015",nom:"Eng. Electrònica Industrial i Automàtica / Eng. de Tecnologia i Disseny Tèxtil / Eng. Elèctrica / Eng. Mecànica / Eng. Química (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21112",nom:'Enginyeria Electrònica Industrial i Automàtica / Enginyeria Mecànica "EU Salesiana de Sarrià" (simultaneïtat)',universitat:"UAB",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31104",nom:"Eng. Electrònica, Industrial i Automàtica / Eng. Mecànica / Eng. Química / Eng. de Recursos Minerals i el seu Reciclatge (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61061",nom:"Enginyeria en Electrònica Industrial i Automàtica / Enginyeria Mecànica / Enginyeria de l'Energia i Sostenibilitat (agrupació)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"21127",nom:'Enginyeria en Energies Renovables i Eficiència Energètica "EU Salesiana de Sarrià"',universitat:"UAB",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31087",nom:"Enginyeria en Geoinformació i Geomàtica",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2"}},{codi:"21022",nom:'Enginyeria en Organització Industrial "EU Salesiana de Sarrià"',universitat:"UAB",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61070",nom:"Enginyeria en Organització Industrial i Logística / Administració i Direcció d'Empreses (simultaneïtat)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"61060",nom:"Enginyeria en Organització Industrial i Logística / Enginyeria Química (Agrupació)",universitat:"UdL",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31049",nom:"Enginyeria en Sistemes i Tecnologia Naval",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31112",nom:"Enginyeria en Tecnologies Aeroespacials, Grau en + Màster Universitari en Enginyeria Aeronàutica (PARS: Enginyer/a Aeronàutic/a)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81088",nom:"Enginyeria en Tecnologies Industrials, Grau en + Màster Universitari en Enginyeria Industrial (PARS: Enginyer/a en Tecnologies Industrials)",universitat:"UdG",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81046",nom:"Enginyeria en Tecnologies Industrials / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UdG",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31114",nom:"Enginyeria en Tecnologies Industrials, Grau en + Màster Universitari en Enginyeria Industrial (PARS: Enginyer/a Industrial)) (Terrassa)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31115",nom:"Enginyeria en Tecnologies Industrials, Grau en + Màster Universitari en Enginyeria Industrial (PARS: Enginyer/a Industrial) (Barcelona)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31031",nom:"Enginyeria en Vehicles Aeroespacials",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31067",nom:"Enginyeria Física",universitat:"UPC",branca:"EA",p:{fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"61014",nom:"Enginyeria Forestal",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61042",nom:"Enginyeria Forestal / Conservació de la Natura (Simultaneïtat)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11018",nom:"Enginyeria Informàtica",universitat:"UB",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21071",nom:"Enginyeria Informàtica",universitat:"UAB",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31037",nom:"Enginyeria Informàtica (Vilanova i la Geltrú)",universitat:"UPC",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31059",nom:"Enginyeria Informàtica (Barcelona)",universitat:"UPC",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"41069",nom:"Enginyeria en Informàtica",universitat:"UPF",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61015",nom:"Enginyeria Informàtica",universitat:"UdL",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61074",nom:"Enginyeria Informàtica",universitat:"UdL",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81042",nom:"Enginyeria Informàtica",universitat:"UdG",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71039",nom:"Enginyeria Informàtica",universitat:"URV",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31116",nom:"Enginyeria Informàtica, Grau en + Màster Universitari en Enginyeria Informàtica (PARS: Enginyer/a Informàtic/a)",universitat:"UPC",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61076",nom:"Enginyeria Informàtica, Grau en + Màster Universitari en Enginyeria Informàtica (PARS: Enginyer/a Informàtic/a)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"41047",nom:`Eng. Informàtica de Gestió i Sistemes d'Informació "Tecnocampus"`,universitat:"UPF",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"41052",nom:`Enginyeria Informàtica de Gestió i Sistemes d'Informació / Disseny i Producció de Videojocs "Tecnocampus" (Simultaneïtat)`,universitat:"UPF",branca:"CSJ",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",matematiques:"0,2",matematiquesCSS:"0,1",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61036",nom:"Enginyeria Informàtica / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71056",nom:"Enginyeria Informàtica / Biotecnologia (Simultaneïtat)",universitat:"URV",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21106",nom:"Enginyeria Informàtica / Enginyeria Electrònica de Telecomunicació (Simultaneïtat)",universitat:"UAB",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21105",nom:"Enginyeria Informàtica / Enginyeria de Sistemes de Telecomunicació (Simultaneïtat)",universitat:"UAB",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11016",nom:"Enginyeria Informàtica / Matemàtiques (Simultaneïtat)",universitat:"UB",branca:"EA",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"41070",nom:"Enginyeria Matemàtica en Ciència de Dades",universitat:"UPF",branca:"EA",p:{cienciesGenerals:"0,1",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"71081",nom:"Enginyeria Matemàtica i Física",universitat:"URV",branca:"EA",p:{biologia:"0,1",cienciesGenerals:"0,1",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21026",nom:'Enginyeria Mecànica "EU Salesiana de Sarrià"',universitat:"UAB",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31027",nom:"Enginyeria Mecànica",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81022",nom:"Enginyeria Mecànica",universitat:"UdG",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71040",nom:"Enginyeria Mecànica",universitat:"URV",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61065",nom:"Enginyeria Mecànica / Enginyeria de l'Energia i Sostenibilitat (Simultaneïtat)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"61075",nom:"Enginyeria Mecànica / Enginyeria de l'Energia i Sostenibilitat / Enginyeria en Electrònica Industrial i Automàtica / (agrupació) Grau en + Màster Universitari en Enginyeria Industrial (PARS: Enginyer/a Industrial)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"21112",nom:'Enginyeria Mecànica / Enginyeria Electrònica Industrial i Automàtica "EU Salesiana de Sarrià" (simultaneïtat)',universitat:"UAB",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31104",nom:"Eng. Mecànica / Eng. Electrònica, Industrial i Automàtica / Eng. Química / Eng. de Recursos Minerals i el seu Reciclatge (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"41057",nom:`Eng. Mecànica / Eng. d'Organització Industrial / Eng. Electrònica Industrial i Automàtica "Tecnocampus" (Agrupació)`,universitat:"UPF",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31124",nom:"Eng. Mecànica / Eng. Electrònica, Industrial i Automàtica / Eng. Elèctrica i Sistemes Ferroviaris (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31015",nom:"Eng. Mecànica / Eng. Electrònica Industrial i Automàtica / Eng. de Tecnologia i Disseny Tèxtil / Eng. Elèctrica / Eng. Química (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61061",nom:"Enginyeria Mecànica / Enginyeria de l'Energia i Sostenibilitat / Enginyeria en Electrònica Industrial i Automàtica (Agrupació)",universitat:"UdL",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"91011",nom:"Enginyeria Mecatrònica",universitat:"UVic-UCC",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"11019",nom:"Enginyeria Química",universitat:"UB",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21090",nom:"Enginyeria Química",universitat:"UAB",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31055",nom:"Enginyeria Química",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81023",nom:"Enginyeria Química",universitat:"UdG",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71041",nom:"Enginyeria Química",universitat:"URV",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31015",nom:"Eng. Química / Eng. Elèctrica / Eng. Electrònica Industrial i Automàtica / Eng. de Tecnologia i Disseny Tèxtil / Eng. Mecànica (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31104",nom:"Eng. Química / Eng. Electrònica, Industrial i Automàtica / Eng. Mecànica / Eng. de Recursos Minerals i el seu Reciclatge (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"61060",nom:"Enginyeria Química / Enginyeria en Organització Industrial i Logística (Agrupació)",universitat:"UdL",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31076",nom:"Eng. Telemàtica (Inclou Xarxes i Internet) / Eng. de Sistemes de Telecomunicació (Agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31077",nom:"Enginyeria Telemàtica / Enginyeria de Sistemes de Telecomunicació (inclou xarxes i Internet) (febrer) (agrupació)",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,1",fisica:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31085",nom:"Eng. Telemàtica - Eng. de Sistemes de Telecomunicació / Eng. de Sistemes Aeroespacials (Agrupació de Simultaneïtat)",universitat:"UPC",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71013",nom:"Enologia",universitat:"URV",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",quimica:"0,2"}},{codi:"91920",nom:"Estadística",universitat:"UB/UPC",branca:"CSJ",p:{biologia:"0,2",funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21128",nom:"Estadística Aplicada",universitat:"UAB",branca:"C",p:{biologia:"0,2",funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"91922",nom:"Estadística / Economia (Simultaneïtat)",universitat:"UB/UPC",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21129",nom:"Estadística Aplicada / Sociologia (Simultaneïtat)",universitat:"UAB",branca:"C- CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,2"}},{codi:"11021",nom:"Estudis Anglesos (Docència en Anglès)",universitat:"UB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21135",nom:"Estudis Anglesos",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"61054",nom:"Estudis Anglesos",universitat:"UdL",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"61051",nom:"Estudis Anglesos / Llengües Aplicades i Traducció (Simultaneïtat)",universitat:"UdL",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2"}},{codi:"11094",nom:"Estudis Àrabs i Hebreus",universitat:"UB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2"}},{codi:"21140",nom:"Estudis d'Anglès i Català",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21141",nom:"Estudis d'Anglès i de Clàssiques",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21142",nom:"Estudis d'Anglès i Espanyol",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21143",nom:"Estudis d'Anglès i Francès",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21030",nom:"Estudis d'Àsia Oriental -Japonès-",universitat:"UAB",branca:"AH",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2",matematiquesCSS:"0,1",movimentsCulturals:"0,1"}},{codi:"21067",nom:"Estudis d'Àsia Oriental -Xinès-",universitat:"UAB",branca:"AH",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2",matematiquesCSS:"0,1",movimentsCulturals:"0,1"}},{codi:"21144",nom:"Estudis de Català i Espanyol",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21133",nom:"Estudis d'Espanyol i Xinès: Llengua, Literatura i Cultura",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"41065",nom:"Estudis Globals",universitat:"UPF",branca:"CSJ",p:{biologia:"0,1",dibuixArtistic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,2",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,1"}},{codi:"81084",nom:"Estudis Globals / Global Studies (docència en Anglès)",universitat:"UdG",branca:"CSJ",p:{biologia:"0,1",dibuixArtistic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,2",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,1"}},{codi:"91062",nom:"Estudis Globals / Global Studies (docència en Anglès)",universitat:"UVic-UCC",branca:"CSJ",p:{biologia:"0,1",dibuixArtistic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,2",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,1"}},{codi:"81085",nom:"Estudis Globals / Global Studies (docència en Anglès) / Turisme (simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,1",cienciesGenerals:"0,2",dibuixArtistic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,1",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,1"}},{codi:"41022",nom:"Estudis Internacionals d'Economia i Empresa - International Business Economics (docència en Anglès)",universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"11023",nom:"Estudis Literaris",universitat:"UB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21148",nom:"Estudis Socioculturals de Gènere",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",historiaArt:"0,1",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,1",llati:"0,1",matematiquesCSS:"0,2",movimentsCulturals:"0,1",tecniquesExpressioGrafica:"0,2"}},{codi:"11024",nom:"Farmàcia",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11075",nom:"Farmàcia / Nutrició Humana i Dietètica (Simultaneïtat)",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11025",nom:"Filologia Catalana",universitat:"UB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"81070",nom:"Filologia Catalana",universitat:"UdG",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21134",nom:"Filologia Catalana: Estudis de Literatura i Lingüística",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"81080",nom:"Filologia Catalana / Filologia Hispànica (simultaneïtat)",universitat:"UdG",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"61055",nom:"Filologia Catalana i Estudis Occitans",universitat:"UdL",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"61058",nom:"Filologia Catalana i Estudis Occitans / Llengües Aplicades i Traducció (Simultaneïtat)",universitat:"UdL",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2"}},{codi:"11026",nom:"Filologia Clàssica",universitat:"UB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"11027",nom:"Filologia Hispànica",universitat:"UB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"61079",nom:"Filologia Hispànica",universitat:"UdL",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"81071",nom:"Filologia Hispànica",universitat:"UdG",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"81080",nom:"Filologia Hispànica / Filologia Catalana (simultaneïtat)",universitat:"UdG",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"61080",nom:"Filologia Hispànica / Llengües Aplicades i Traducció (Simultaneïtat)",universitat:"UdL",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"11061",nom:"Filosofia",universitat:"UB",branca:"AH",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,1",cantCoralTecnicaVocal:"0,1",fonamentsArts:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"21032",nom:"Filosofia",universitat:"UAB",branca:"AH",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,1",cantCoralTecnicaVocal:"0,1",fonamentsArts:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"81072",nom:"Filosofia",universitat:"UdG",branca:"AH",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,1",cantCoralTecnicaVocal:"0,1",fonamentsArts:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"81069",nom:"Filosofia / Economia (Simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,2",cienciesGenerals:"0,1",cantCoralTecnicaVocal:"0,1",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"41042",nom:"Filosofia, Política i Economia",universitat:"UPF/UAB//UAM/UC3M",branca:"CSJ",p:{fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"71014",nom:"Finances i Comptabilitat",universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71053",nom:"Finances i Comptabilitat / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"11030",nom:"Física",universitat:"UB",branca:"C",p:{biologia:"0,1",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21168",nom:"Física",universitat:"UAB",branca:"C",p:{biologia:"0,1",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11020",nom:"Física / Matemàtiques (Simultaneïtat)",universitat:"UB",branca:"C",p:{biologia:"0,1",cienciesGenerals:"0,1",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21169",nom:"Física / Matemàtiques (Simultaneïtat)",universitat:"UAB",branca:"C",p:{biologia:"0,1",cienciesGenerals:"0,1",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21170",nom:"Física / Química (Simultaneïtat)",universitat:"UAB",branca:"C",p:{biologia:"0,1",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21095",nom:"Fisioteràpia",universitat:"UAB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21033",nom:'Fisioteràpia "Gimbernat"',universitat:"UAB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"41055",nom:'Fisioteràpia "Tecnocampus"',universitat:"UPF",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"61019",nom:"Fisioteràpia",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81087",nom:'Fisioteràpia "EUSES"',universitat:"UdG",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"71043",nom:"Fisioteràpia (Reus)",universitat:"URV",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"71048",nom:"Fisioteràpia (Tortosa)",universitat:"URV",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"91012",nom:"Fisioteràpia",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"91041",nom:"Fisioteràpia (Campus Manresa)",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"91918",nom:"Fisioteràpia (Docència en Anglès) (Només per a estudiants espanyols o estrangers amb residència)",universitat:"UdG/UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"91919",nom:"Fisioteràpia (docència en Anglès) (només per a estudiants sense nacionalitat espanyola ni residència a l'Estat Espanyol)",universitat:"UdG/UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"61039",nom:"Fisioteràpia / Ciències de l'Activitat Física i de l'Esport (Simultaneïtat)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81086",nom:`Fisioteràpia / Ciències de l'Activitat Física i de l'Esport "EUSES" (simultaneïtat)`,universitat:"UdG",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71088",nom:`Fisioteràpia / Ciències de l'Activitat Física i de l'Esport "EUSES" (simultaneïtat)`,universitat:"URV",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41037",nom:`Fisioteràpia / Ciències de l'Activitat Física i de l'Esport "Tecnocampus" (simultaneïtat)`,universitat:"UPF",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaMusica:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61044",nom:"Fisioteràpia / Infermeria (Simultaneïtat)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61057",nom:"Fisioteràpia / Nutrició Humana i Dietètica (Simultaneïtat)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21035",nom:"Genètica",universitat:"UAB",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11108",nom:"Geografia i Canvi Global",universitat:"UB",branca:"CSJ",p:{biologia:"0,1",dibuixArtistic:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,1",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"61026",nom:"Geografia",universitat:"UdL",branca:"AH",p:{biologia:"0,1",dibuixArtistic:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,1",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"71015",nom:"Geografia, Anàlisi Territorial i Sostenibilitat",universitat:"URV",branca:"CSJ",p:{biologia:"0,1",dibuixArtistic:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,1",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"21124",nom:"Geografia, Medi Ambient i Planificació Territorial",universitat:"UAB",branca:"CSJ",p:{biologia:"0,1",dibuixArtistic:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,1",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"81073",nom:"Geografia, Territori i Medi Ambient",universitat:"UdG",branca:"AH",p:{biologia:"0,1",dibuixArtistic:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,1",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"81076",nom:"Geografia, Territori i Medi Ambient / Turisme (simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,1",cienciesGenerals:"0,2",dibuixArtistic:"0,1",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"11032",nom:"Geologia",universitat:"UB",branca:"C",p:{biologia:"0,1",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21037",nom:"Geologia",universitat:"UAB",branca:"C",p:{biologia:"0,1",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21151",nom:"Geologia / Ciències Ambientals (Simultaneïtat)",universitat:"UAB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21038",nom:"Gestió Aeronàutica",universitat:"UAB",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,1",dibuixArtistic:"0,1",dibuixTecnic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,1",tecniquesExpressioGrafica:"0,1"}},{codi:"21149",nom:"Gestió de Ciutats Intelꞏligents i Sostenibles",universitat:"UAB",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"91060",nom:"Gestió de la Societat Digital (Campus Manresa)",universitat:"UVic-UCC",branca:"CSJ",p:{biologia:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"11091",nom:"Gestió d'Informació i Documentació Digital",universitat:"UB",branca:"CSJ",p:{biologia:"0,1",dibuixArtistic:"0,1",dibuixTecnic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,1",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,1",cienciesAmbientals:"0,1",historiaArt:"0,1",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,1",matematiquesCSS:"0,1",movimentsCulturals:"0,1",quimica:"0,1",tecniquesExpressioGrafica:"0,1"}},{codi:"11098",nom:"Gestió d'Informació i Documentació Digital / Comunicació Audiovisual (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,1",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,1",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,2"}},{codi:"71068",nom:"Gestió en Turisme i Hoteleria",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,2",literaturaCastellana:"0,1",literaturaCatalana:"0,1",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"11052",nom:"Gestió i Administració Pública",universitat:"UB",branca:"CSJ",p:{biologia:"0,1",fisica:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31135",nom:`Gestió i Digitalització en l'Esport "EUNCET"`,universitat:"UPC",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,1",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,1"}},{codi:"31136",nom:`Gestió i Digitalització en l'Esport / Empresa, Innovació i Tecnologia "EUNCET" (Campus Can Dragó + Campus 22@) (presencial) (simultaneïtat)`,universitat:"UPC",branca:"CS/CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"31137",nom:`Gestió i Digitalització en l'Esport / Màrqueting, Innovació i Tecnologia "EUNCET" (Campus Can Dragó + Campus 22@) (simultaneïtat)`,universitat:"UPC",branca:"CS/CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"41050",nom:"Grau Obert, Programa de (Agrupació)",universitat:"UPF",branca:"AH-CSJ-CS-EA",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11118",nom:"Grau obert en Turisme, Negoci Digital i Innovació en Turisme, Direcció Hotelera Internacional i Màrqueting, Esdeveniments i Entreteniment (agrupació d’estudis)",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,1",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11035",nom:"Història",universitat:"UB",branca:"AH",p:{fonamentsArts:"0,2",geografia:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"21040",nom:"Història",universitat:"UAB",branca:"AH",p:{fonamentsArts:"0,2",geografia:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"61028",nom:"Història",universitat:"UdL",branca:"AH",p:{fonamentsArts:"0,2",geografia:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"71077",nom:"Història",universitat:"URV",branca:"AH",p:{fonamentsArts:"0,2",geografia:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"81074",nom:"Història",universitat:"UdG",branca:"AH",p:{fonamentsArts:"0,2",geografia:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"11096",nom:"Història / Arqueologia (Simultaneïtat)",universitat:"UB",branca:"AH",p:{fonamentsArts:"0,2",geografia:"0,1",cienciesAmbientals:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"11104",nom:"Història / Història de l'Art (Simultaneïtat)",universitat:"UB",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",geografia:"0,1",historiaMusica:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"81078",nom:"Història / Història de l'Art (simultaneïtat)",universitat:"UdG",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",geografia:"0,1",historiaMusica:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"11034",nom:"Història de l'Art",universitat:"UB",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",geografia:"0,1",historiaMusica:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"21039",nom:"Història de l'Art",universitat:"UAB",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",geografia:"0,1",historiaMusica:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"81075",nom:"Història de l'Art",universitat:"UdG",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",geografia:"0,1",historiaMusica:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"11104",nom:"Història de l'Art / Història (Simultaneïtat)",universitat:"UB",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",geografia:"0,1",historiaMusica:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"81078",nom:"Història de l'Art / Història (Simultaneïtat)",universitat:"UdG",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",geografia:"0,1",historiaMusica:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"71078",nom:"Història de l'Art i Arqueologia",universitat:"URV",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",geografia:"0,1",historiaMusica:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"61081",nom:"Història de l'Art i Gestió del Patrimoni Artístic",universitat:"UdL",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",geografia:"0,1",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"21138",nom:"Història, Política i Economia Contemporànies",universitat:"UAB",branca:"CSJ",p:{funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,1",literaturaCastellana:"0,1",literaturaCatalana:"0,1",grec:"0,1",llati:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"21101",nom:"Humanitats",universitat:"UAB",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",geografia:"0,2",historiaMusica:"0,1",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,1"}},{codi:"41003",nom:"Humanitats",universitat:"UPF",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",geografia:"0,2",historiaMusica:"0,1",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,1"}},{codi:"11037",nom:"Infermeria (Campus Bellvitge)",universitat:"UB",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"11081",nom:"Infermeria (Campus Clínic)",universitat:"UB",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21044",nom:"Infermeria",universitat:"UAB",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21041",nom:"Infermeria EUIT de Terrassa",universitat:"UAB",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21042",nom:'Infermeria "Gimbernat"',universitat:"UAB",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21043",nom:'Infermeria "Sant Pau"',universitat:"UAB",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41021",nom:`Infermeria "Escola Superior d'Infermeria del Mar"`,universitat:"UPF",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41031",nom:'Infermeria "Tecnocampus"',universitat:"UPF",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61029",nom:"Infermeria",universitat:"UdL",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61046",nom:"Infermeria (Igualada)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61082",nom:"Infermeria (Tremp)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"81066",nom:"Infermeria",universitat:"UdG",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71016",nom:"Infermeria",universitat:"URV",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71028",nom:"Infermeria (Tortosa)",universitat:"URV",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71032",nom:"Infermeria (El Vendrell)",universitat:"URV",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71084",nom:"Infermeria (Vilafranca del Penedès)",universitat:"URV",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"91013",nom:"Infermeria",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"91043",nom:"Infermeria (Campus Manresa)",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"91064",nom:'Infermeria "Sant Joan de Déu"',universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61044",nom:"Infermeria / Fisioteràpia (Simultaneïtat)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21046",nom:"Informàtica i Serveis",universitat:"UAB",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"81058",nom:"Innovació i Seguretat Alimentària",universitat:"UdG",branca:"EA",p:{biologia:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31106",nom:"Intelꞏligència Artificial",universitat:"UPC",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"21139",nom:"Intelꞏligència Artificial / Artificial Intelligence (docència en anglès)",universitat:"UAB",branca:"EA",p:{biologia:"0,2",dibuixTecnic:"0,1",fisica:"0,2",funcionamentEmpresa:"0,1",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"10120",nom:"Investigació Privada (Títol propi, no oficial)",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,2",cantCoralTecnicaVocal:"0,1",dibuixArtistic:"0,2",dibuixTecnic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,2",literaturaCastellana:"0,1",literaturaCatalana:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,1"}},{codi:"11039",nom:"Lingüística",universitat:"UB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2"}},{codi:"71072",nom:"Llengua i Literatura Catalanes",universitat:"URV",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"21136",nom:"Llengua i Literatura Espanyoles",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"71073",nom:"Llengua i Literatura Hispàniques",universitat:"URV",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2"}},{codi:"41023",nom:"Llengües Aplicades",universitat:"UPF",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2"}},{codi:"41054",nom:"Llengües Aplicades / Traducció i Interpretació - Anglès - (Simultaneïtat)",universitat:"UPF",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2"}},{codi:"61051",nom:"Llengües Aplicades i Traducció / Estudis Anglesos (Simultaneïtat)",universitat:"UdL",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2"}},{codi:"61058",nom:"Llengües Aplicades i Traducció / Filologia Catalana i Estudis Occitans (Simultaneïtat)",universitat:"UdL",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2"}},{codi:"61080",nom:"Llengües Aplicades i Traducció / Filologia Hispànica (Simultaneïtat)",universitat:"UdL",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2"}},{codi:"11040",nom:"Llengües i Literatures Modernes",universitat:"UB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2"}},{codi:"11082",nom:"Llengües Romàniques i les seves Literatures",universitat:"UB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2"}},{codi:"81064",nom:'Logística Empresarial "Mediterrani"',universitat:"UdG",branca:"CSJ",p:{funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"41048",nom:'Logística i Negocis Marítims "Tecnocampus"',universitat:"UPF",branca:"CSJ",p:{funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21048",nom:"Logopèdia",universitat:"UAB",branca:"CS",p:{biologia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81051",nom:'Màrqueting "Mediterrani"',universitat:"UdG",branca:"CSJ",p:{funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"71062",nom:'Màrqueting "ESIC"',universitat:"URV",branca:"CSJ",p:{funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"71074",nom:'Màrqueting "ESIC" (Docència en Anglès)',universitat:"URV",branca:"CSJ",p:{funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"81062",nom:'Màrqueting / Turisme "Mediterrani" (Simultaneïtat)',universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"71079",nom:`Màrqueting / Administració i Direcció d'Empreses "ESIC" (simultaneïtat) Reus / Barcelona`,universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"71080",nom:`Màrqueting / Administració i Direcció d'Empreses "ESIC" (simultaneïtat) Tortosa / Barcelona`,universitat:"URV",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"61078",nom:'Màrqueting i Comunicació Digital "Centre Universitari EAE"',universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"31132",nom:'Màrqueting, Innovació i Tecnologia "EUNCET" (Campus 22@)',universitat:"UPC",branca:"CSJ",p:{dibuixTecnicArts:"0,1",disseny:"0,1",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31131",nom:'Màrqueting, Innovació i Tecnologia "EUNCET" (Campus 22@) (semipresencial)',universitat:"UPC",branca:"CSJ",p:{dibuixTecnicArts:"0,1",disseny:"0,1",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31134",nom:'Màrqueting, Innovació i Tecnologia "EUNCET" (Campus Terrassa)',universitat:"UPC",branca:"CSJ",p:{dibuixTecnicArts:"0,1",disseny:"0,1",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31133",nom:'Màrqueting, Innovació i Tecnologia "EUNCET" (Campus Terrassa) (semipresencial)',universitat:"UPC",branca:"CSJ",p:{dibuixTecnicArts:"0,1",disseny:"0,1",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31129",nom:'Màrqueting, Innovació i Tecnologia / Empresa, Innovació i Tecnologia "EUNCET" (Campus 22@) (presencial)',universitat:"UPC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31130",nom:'Màrqueting, Innovació i Tecnologia / Empresa, Innovació i Tecnologia "EUNCET" (Campus Terrassa) (presencial) (simultaneïtat)',universitat:"UPC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"31137",nom:`Màrqueting, Innovació i Tecnologia / Gestió i Digitalització en l'Esport "EUNCET" (Campus Can Dragó + Campus 22@) (simultaneïtat)`,universitat:"UPC",branca:"CSJ",p:{biologia:"0,2",cienciesGenerals:"0,2",dibuixTecnic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"91032",nom:"Màrqueting i Comunicació Empresarial",universitat:"UVic-UCC",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",funcionamentEmpresa:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"41039",nom:'Màrqueting i Comunitats Digitals "Tecnocampus"',universitat:"UPF",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"41041",nom:`Màrqueting i Comunitats Digitals / Administració d'Empreses i Gestió de la Innovació "Tecnocampus" (Simultaneïtat)`,universitat:"UPF",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",biologia:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"41062",nom:'Màrqueting i Comunitats Digitals / Turisme i Gestió del Lleure "Tecnocampus" (simultaneïtat)',universitat:"UPF",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"11115",nom:'Màrqueting, Esdeveniments i Entreteniment "CETT"',universitat:"UB",branca:"CSJ",p:{cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"21122",nom:"Matemàtica Computacional i Analítica de Dades",universitat:"UAB",branca:"C",p:{biologia:"0,1",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,1"}},{codi:"21167",nom:"Matemàtica Computacional i Analítica de Dades / Economia (simultaneïtat)",universitat:"UAB",branca:"CSJ/C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11041",nom:"Matemàtiques",universitat:"UB",branca:"C",p:{biologia:"0,1",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,1"}},{codi:"21003",nom:"Matemàtiques",universitat:"UAB",branca:"C",p:{biologia:"0,1",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,1"}},{codi:"31040",nom:"Matemàtiques",universitat:"UPC",branca:"EA",p:{biologia:"0,1",cienciesGenerals:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,1"}},{codi:"11066",nom:"Matemàtiques / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11016",nom:"Matemàtiques / Enginyeria Informàtica (Simultaneïtat)",universitat:"UB",branca:"C",p:{biologia:"0,2",cienciesGenerals:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,1",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11020",nom:"Matemàtiques / Física (Simultaneïtat)",universitat:"UB",branca:"C",p:{biologia:"0,1",cienciesGenerals:"0,1",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21169",nom:"Matemàtiques / Física (Simultaneïtat)",universitat:"UAB",branca:"C",p:{biologia:"0,1",cienciesGenerals:"0,1",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"11083",nom:"Medicina (Campus Bellvitge)",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"11043",nom:"Medicina (Campus Clínic)",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"21079",nom:"Medicina",universitat:"UAB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"41058",nom:"Medicina",universitat:"UPF",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"61030",nom:"Medicina",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"81001",nom:"Medicina",universitat:"UdG",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"71019",nom:"Medicina",universitat:"URV",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"91054",nom:"Medicina",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"21050",nom:"Microbiologia",universitat:"UAB",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"41049",nom:'Mitjans Audiovisuals "Tecnocampus"',universitat:"UPF",branca:"CSJ",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"81079",nom:'Moda "ERAM"',universitat:"UdG",branca:"AH",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cantCoralTecnicaVocal:"0,1",dibuixArtistic:"0,2",dibuixTecnic:"0,1",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",historiaArt:"0,2",llati:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"91029",nom:"Multimèdia. Aplicacions i Videojocs",universitat:"UVic-UCC",branca:"EA",p:{dibuixArtistic:"0,2",dibuixTecnic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,1",historiaArt:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21051",nom:"Musicologia",universitat:"UAB",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",fonamentsArts:"0,2",historiaMusica:"0,2",historiaArt:"0,2",literaturaCastellana:"0,1",literaturaCatalana:"0,1",literaturaDramatica:"0,2",grec:"0,2",llati:"0,2",movimentsCulturals:"0,2"}},{codi:"21150",nom:"Nanociència i Nanotecnologia",universitat:"UAB",branca:"C",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"31045",nom:"Nàutica i Transport Marítim",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11102",nom:'Negoci Digital i Innovació en Turisme "CETT"',universitat:"UB",branca:"CSJ",p:{dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11112",nom:'Negoci Digital i Innovació en Turisme / Turisme "CETT" (simultaneïtat)',universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"41024",nom:'Negocis i Màrqueting Internacionals - Bachelor in International Business and Marketing "ESCI"',universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"41063",nom:'Negocis i Màrqueting Internacionals - Bachelor in International Business and Marketing "ESCI" (docència en anglès)',universitat:"UPF",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"11062",nom:"Nutrició Humana i Dietètica",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,1",quimica:"0,2"}},{codi:"41061",nom:'Nutrició Humana i Dietètica "Tecnocampus"',universitat:"UPF",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,1",quimica:"0,2"}},{codi:"61031",nom:"Nutrició Humana i Dietètica",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,1",quimica:"0,2"}},{codi:"81081",nom:'Nutrició Humana i Dietètica "EUSES"',universitat:"UdG",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,1",quimica:"0,2"}},{codi:"71044",nom:"Nutrició Humana i Dietètica",universitat:"URV",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,1",quimica:"0,2"}},{codi:"91021",nom:"Nutrició Humana i Dietètica",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,1",quimica:"0,2"}},{codi:"11075",nom:"Nutrició Humana i Dietètica / Farmàcia (Simultaneïtat)",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"61057",nom:"Nutrició Humana i Dietètica / Fisioteràpia (Simultaneïtat)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",matematiquesCSS:"0'2",quimica:"0,2"}},{codi:"11044",nom:"Odontologia",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"91061",nom:"Odontologia (Campus Medicina, Vic)",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"31105",nom:"Òptica i Optometria",universitat:"UPC",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"31098",nom:"Paisatgisme",universitat:"UPC",branca:"EA",p:{biologia:"0,2",dibuixArtistic:"0,2",dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",matematiques:"0,2",movimentsCulturals:"0,2"}},{codi:"11045",nom:"Pedagogia",universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,1",funcionamentEmpresa:"0,1",geografia:"0,2",historiaMusica:"0,1",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"21052",nom:"Pedagogia",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,1",funcionamentEmpresa:"0,1",geografia:"0,2",historiaMusica:"0,1",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"81043",nom:"Pedagogia",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,1",funcionamentEmpresa:"0,1",geografia:"0,2",historiaMusica:"0,1",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"71020",nom:"Pedagogia",universitat:"URV",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,1",funcionamentEmpresa:"0,1",geografia:"0,2",historiaMusica:"0,1",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"21096",nom:"Periodisme",universitat:"UAB",branca:"CSJ",p:{cienciesGenerals:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"41025",nom:"Periodisme",universitat:"UPF",branca:"CSJ",p:{cienciesGenerals:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71021",nom:"Periodisme",universitat:"URV",branca:"CSJ",p:{cienciesGenerals:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"91014",nom:"Periodisme",universitat:"UVic-UCC",branca:"CSJ",p:{cienciesGenerals:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"71045",nom:"Pilot d'Aviació Comercial i Operacions Aèries",universitat:"URV",branca:"EA",p:{biologia:"0,1",dibuixTecnic:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"11046",nom:"Podologia",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"91045",nom:"Podologia (Campus Manresa)",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",fisica:"0,2",quimica:"0,2"}},{codi:"21054",nom:"Prevenció i Seguretat Integral",universitat:"UAB",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21113",nom:"Prevenció i Seguretat Integral (En Xarxa)",universitat:"UAB",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"11111",nom:"Producció de Música i So per a la Indústria de l'Entreteniment",universitat:"UB",branca:"AH",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cantCoralTecnicaVocal:"0,2",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",historiaArt:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",tecniquesExpressioGrafica:"0,1",tecnologiaEnginyeria:"0,1"}},{codi:"11047",nom:"Psicologia",universitat:"UB",branca:"CS",p:{biologia:"0,2",fisica:"0,1",funcionamentEmpresa:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1"}},{codi:"21081",nom:"Psicologia",universitat:"UAB",branca:"CS",p:{biologia:"0,2",fisica:"0,1",funcionamentEmpresa:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1"}},{codi:"61020",nom:"Psicologia",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,1",funcionamentEmpresa:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1"}},{codi:"81033",nom:"Psicologia",universitat:"UdG",branca:"CS",p:{biologia:"0,2",fisica:"0,1",funcionamentEmpresa:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1"}},{codi:"71022",nom:"Psicologia",universitat:"URV",branca:"CS",p:{biologia:"0,2",fisica:"0,1",funcionamentEmpresa:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1"}},{codi:"91022",nom:"Psicologia",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",fisica:"0,1",funcionamentEmpresa:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,1"}},{codi:"11093",nom:'Publicitat, Relacions Públiques i Màrqueting "ESRP"',universitat:"UB",branca:"CSJ",p:{cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"21097",nom:"Publicitat i Relacions Públiques",universitat:"UAB",branca:"CSJ",p:{cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"41004",nom:"Publicitat i Relacions Públiques",universitat:"UPF",branca:"CSJ",p:{cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"81002",nom:"Publicitat i Relacions Públiques",universitat:"UdG",branca:"CSJ",p:{cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"71023",nom:"Publicitat i Relacions Públiques",universitat:"URV",branca:"CSJ",p:{cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"91015",nom:"Publicitat i Relacions Públiques",universitat:"UVic-UCC",branca:"CSJ",p:{cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"81077",nom:"Publicitat i Relacions Públiques / Turisme (simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"11049",nom:"Química",universitat:"UB",branca:"C",p:{fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"21082",nom:"Química",universitat:"UAB",branca:"C",p:{fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"81034",nom:"Química",universitat:"UdG",branca:"C",p:{fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"71024",nom:"Química",universitat:"URV",branca:"C",p:{fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"71066",nom:"Química (Docència en Anglès)",universitat:"URV",branca:"C",p:{fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"11095",nom:"Química / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",quimica:"0,2"}},{codi:"21170",nom:"Química / Física (Simultaneïtat)",universitat:"UAB",branca:"C",p:{biologia:"0,1",dibuixTecnic:"0,1",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,1"}},{codi:"21123",nom:"Relacions Internacionals",universitat:"UAB",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"21145",nom:"Relacions Internacionals / Dret (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2"}},{codi:"11116",nom:"Relacions Laborals i Recursos Humans",universitat:"UB",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"21055",nom:"Relacions Laborals",universitat:"UAB",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"41026",nom:"Relacions Laborals",universitat:"UPF",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"21109",nom:"Relacions Laborals / Dret (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"71082",nom:"Relacions Laborals i Recursos Humans",universitat:"URV",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"61033",nom:"Relacions Laborals i Recursos Humans",universitat:"UdL",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"71083",nom:"Relacions Laborals i Recursos Humans / Dret (Simultaneïtat)",universitat:"URV",branca:"CSJ",p:{biologia:"0,1",cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1"}},{codi:"11076",nom:"Seguretat",universitat:"UB",branca:"CSJ",p:{biologia:"0,1",fisica:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,1",grec:"0,1",llati:"0,1",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,1",tecnologiaEnginyeria:"0,2"}},{codi:"11063",nom:"Sociologia",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,2"}},{codi:"21056",nom:"Sociologia",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,2"}},{codi:"11090",nom:"Sociologia / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,2"}},{codi:"21125",nom:"Sociologia / Ciència Política i Gestió Pública (Simultaneïtat)",universitat:"UAB",branca:"CSJ",p:{biologia:"0,2",fisica:"0,2",fonamentsArts:"0,1",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,2"}},{codi:"21129",nom:"Sociologia / Estadística Aplicada (Simultaneïtat)",universitat:"UAB",branca:"C- CSJ",p:{biologia:"0,2",fisica:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaArt:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,1",quimica:"0,2"}},{codi:"91915",nom:"Tecnologies Industrials amb Anàlisi Econòmica, Grau en + Màster Universitari en Enginyeria Industrial (PARS: Enginyer/a Industrial amb Anàlisi Econòmica) (docència en Anglès)",universitat:"UPC / UPF",branca:"EA",p:{fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"31038",nom:"Tecnologies Marines",universitat:"UPC",branca:"EA",p:{dibuixTecnic:"0,2",fisica:"0,2",cienciesAmbientals:"0,1",matematiques:"0,2",quimica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21057",nom:"Teràpia Ocupacional EUIT de Terrassa",universitat:"UAB",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"91016",nom:"Teràpia Ocupacional (presencial / semipresencial)",universitat:"UVic-UCC",branca:"CS",p:{biologia:"0,2",cienciesGenerals:"0,2",fonamentsArts:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"21058",nom:"Traducció i Interpretació - Alemany",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2"}},{codi:"41040",nom:"Traducció i Interpretació - Alemany / Francès / Llengua de Signes Catalana -",universitat:"UPF",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2"}},{codi:"21064",nom:"Traducció i Interpretació - Anglès",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2"}},{codi:"41006",nom:"Traducció i Interpretació - Anglès",universitat:"UPF",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2"}},{codi:"41054",nom:"Traducció i Interpretació - Anglès - / Llengües Aplicades (Simultaneïtat)",universitat:"UPF",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2",matematiquesCSS:"0,2"}},{codi:"21065",nom:"Traducció i Interpretació - Francès",universitat:"UAB",branca:"AH",p:{literaturaCastellana:"0,2",literaturaCatalana:"0,2",literaturaDramatica:"0,1",grec:"0,2",llati:"0,2"}},{codi:"11051",nom:"Treball Social",universitat:"UB",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"61034",nom:"Treball Social",universitat:"UdL",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"81044",nom:"Treball Social",universitat:"UdG",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"71026",nom:"Treball Social",universitat:"URV",branca:"CSJ",p:{cienciesGenerals:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"11011",nom:'Turisme "CETT"',universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"11086",nom:'Turisme "CETT" (Docència en Anglès)',universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"21059",nom:"Turisme",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"21114",nom:"Turisme (Docència en Anglès)",universitat:"UAB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"61021",nom:"Turisme",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"81039",nom:"Turisme",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"81036",nom:'Turisme "Euroaula"',universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"81038",nom:'Turisme "Mediterrani"',universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"61053",nom:"Turisme / Administració i Direcció d'Empreses (Simultaneïtat)",universitat:"UdL",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,2",cienciesGenerals:"0,2",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"81085",nom:"Turisme / Estudis Globals / Global Studies (docència en Anglès) (simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,1",cienciesGenerals:"0,2",dibuixArtistic:"0,1",dibuixTecnicArts:"0,1",disseny:"0,1",fisica:"0,1",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,1",tecniquesExpressioGrafica:"0,1"}},{codi:"81076",nom:"Turisme / Geografia, Territori i Medi Ambient (simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,1",cienciesGenerals:"0,2",dibuixArtistic:"0,1",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",cienciesAmbientals:"0,2",historiaMusica:"0,1",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"81062",nom:'Turisme / Màrqueting "Mediterrani" (Simultaneïtat)',universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2"}},{codi:"11112",nom:'Turisme / Negoci Digital i Innovació en Turisme "CETT" (simultaneïtat)',universitat:"UB",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2",tecnologiaEnginyeria:"0,2"}},{codi:"81077",nom:"Turisme / Publicitat i Relacions Públiques (simultaneïtat)",universitat:"UdG",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",cienciesGenerals:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",literaturaCastellana:"0,2",literaturaCatalana:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"41035",nom:`Turisme i Gestió del Lleure / Administració d'Empreses i Gestió de la Innovació "Tecnocampus" (Simultaneïtat)`,universitat:"UPF",branca:"CSJ",p:{analisiMusical:"0,1",artsEscentiques:"0,1",biologia:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,1",fisica:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",quimica:"0,2"}},{codi:"41062",nom:'Turisme i Gestió del Lleure / Màrqueting i Comunitats Digitals "Tecnocampus" (simultaneïtat)',universitat:"UPF",branca:"CSJ",p:{analisiMusical:"0,2",artsEscentiques:"0,2",cienciesGenerals:"0,2",cantCoralTecnicaVocal:"0,2",dibuixArtistic:"0,2",dibuixTecnicArts:"0,2",disseny:"0,2",fonamentsArts:"0,2",funcionamentEmpresa:"0,2",geografia:"0,2",historiaArt:"0,2",grec:"0,2",llati:"0,2",matematiques:"0,2",matematiquesCSS:"0,2",movimentsCulturals:"0,2",tecniquesExpressioGrafica:"0,2"}},{codi:"21083",nom:"Veterinària",universitat:"UAB",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}},{codi:"61040",nom:"Veterinària / Ciència i Producció Animal (Simultaneïtat)",universitat:"UdL",branca:"CS",p:{biologia:"0,2",fisica:"0,2",matematiques:"0,2",quimica:"0,2"}}],ad=[{id:"AH",label:"Arts i Humanitats",color:"#e07a9e"},{id:"C",label:"Ciències",color:"#3dc7a0"},{id:"CS",label:"Ciències de la Salut",color:"#7ba8e8"},{id:"CSJ",label:"Ciències Socials i Jurídiques",color:"#e8b97b"},{id:"EA",label:"Enginyeria i Arquitectura",color:"#a493f5"}],DE=["UB","UAB","UPC","UPF","UdG","UdL","URV","UVic-UCC","URL","UOC","UdA"];function VE(i){let e="",t="",a="",n="";i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </span>
        Ponderacions 2027
      </h1>
      <p class="section-subtitle">Ponderació de les matèries de modalitat de 2n de batxillerat per a l'accés a la universitat a la preinscripció universitària a Catalunya</p>
    </div>

    <!-- Filtres -->
    <div class="pond-filters glass-card" style="margin-bottom:var(--s5);">
      <div class="pond-filters-grid">
        <div class="form-group">
          <label class="form-label">Cerca estudi</label>
          <input id="pond-search" class="form-input" type="text" placeholder="Nom del grau o codi..." autocomplete="off">
        </div>
        <div class="form-group">
          <label class="form-label">Branca</label>
          <select id="pond-branca" class="form-select">
            <option value="">Totes les branques</option>
            ${ad.map(b=>`<option value="${b.id}">${b.id} — ${b.label}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Universitat</label>
          <select id="pond-uni" class="form-select">
            <option value="">Totes les universitats</option>
            ${DE.map(b=>`<option value="${b}">${b}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Matèria</label>
          <select id="pond-materia" class="form-select">
            <option value="">Totes les matèries</option>
            ${Pn.map(b=>`<option value="${b.key}">${b.nom}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="pond-filter-info">
        <span id="pond-count" class="badge badge--blue">664 estudis</span>
        <span id="pond-legend" class="pond-legend-row">
          <span class="pond-pill pond-pill--02">0,2</span><span class="pond-legend-txt">Alta ponderació</span>
          <span class="pond-pill pond-pill--01">0,1</span><span class="pond-legend-txt">Ponderació mitja</span>
        </span>
      </div>
    </div>

    <!-- Taula -->
    <div class="pond-table-wrap glass-card">
      <div id="pond-table-scroll" class="pond-table-scroll">
        <table class="pond-table" id="pond-table">
          <thead>
            <tr class="pond-thead-row">
              <th class="pond-th pond-th--sticky pond-th--codi">Codi</th>
              <th class="pond-th pond-th--sticky pond-th--nom">Grau / Estudi</th>
              <th class="pond-th pond-th--sticky pond-th--uni">Universitat</th>
              <th class="pond-th pond-th--sticky pond-th--branca">Branca</th>
              ${Pn.map(b=>`<th class="pond-th pond-th--subject" title="${b.nom}">${b.nom.replace(/\(.*?\)/g,"").trim().split(" ").slice(0,3).join(" ")}</th>`).join("")}
            </tr>
          </thead>
          <tbody id="pond-tbody"></tbody>
        </table>
      </div>
    </div>
  `;const s=i.querySelector("#pond-search"),o=i.querySelector("#pond-branca"),c=i.querySelector("#pond-uni"),l=i.querySelector("#pond-materia"),d=i.querySelector("#pond-count"),h=i.querySelector("#pond-tbody");function f(b){var _;return((_=ad.find(w=>w.id===b))==null?void 0:_.color)||"#7ba8e8"}function g(){const b=e.toLowerCase(),_=UE.filter(q=>!(b&&!q.nom.toLowerCase().includes(b)&&!q.codi.includes(b)||t&&q.branca!==t||a&&q.universitat!==a||n&&!q.p[n]));d.textContent=`${_.length} estudis`;const w=_.map(q=>{const U=Pn.map(O=>{const J=q.p[O.key];return J==="0,2"?'<td class="pond-td pond-td--02">0,2</td>':J==="0,1"?'<td class="pond-td pond-td--01">0,1</td>':'<td class="pond-td"></td>'}).join(""),N=f(q.branca);return`
        <tr class="pond-row">
          <td class="pond-td pond-td--codi">${q.codi}</td>
          <td class="pond-td pond-td--nom">${q.nom}</td>
          <td class="pond-td pond-td--uni"><span class="badge" style="background:rgba(74,127,212,.12);color:var(--blue-l);border:1px solid rgba(74,127,212,.2)">${q.universitat}</span></td>
          <td class="pond-td pond-td--branca"><span class="badge" style="background:color-mix(in srgb,${N} 12%,transparent);color:${N};border:1px solid color-mix(in srgb,${N} 30%,transparent)">${q.branca}</span></td>
          ${U}
        </tr>`}).join("");h.innerHTML=w||`<tr><td colspan="${4+Pn.length}" class="pond-empty">Cap resultat amb els filtres actuals</td></tr>`}s.addEventListener("input",()=>{e=s.value,g()}),o.addEventListener("change",()=>{t=o.value,g()}),c.addEventListener("change",()=>{a=c.value,g()}),l.addEventListener("change",()=>{n=l.value,g()}),g()}const W0=[{codi:"41035",nom:`Administració d'Empreses i Gestió de la Innovació / Turisme i Gestió del Lleure "Tecnocampus" (simultaneïtat) (Mataró)`,universitat:"UPF",notaJuny:"5,000",notaSetembre:"5,166",nota25:"5,000",notaTitulats:"5,000"},{codi:"71063",nom:`Administració i Direcció d'Empreses "IGEMA" (Barcelona)`,universitat:"URV",notaJuny:"5,000",notaSetembre:"5,456",nota25:"5,000",notaTitulats:"5,000"},{codi:"91003",nom:"Administració i Direcció d'Empreses (Vic)",universitat:"UVic-UCC",notaJuny:"8,014",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"71080",nom:`Administració i Direcció d'Empreses / Màrqueting "ESIC" (simultaneïtat) (Tortosa / Barcelona)`,universitat:"URV",notaJuny:"7,250",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"61077",nom:`Administració i Direcció d'Empreses i Transformació de Negocis "Centre Universitari EAE" (Barcelona)`,universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,042",nota25:"5,000",notaTitulats:"5,000"},{codi:"71049",nom:"Antropologia i Evolució Humana (virtual o semipresencial) (Tarragona)",universitat:"URV / UOC",notaJuny:"5,000",notaSetembre:"5,338",nota25:"6,188",notaTitulats:"5,000"},{codi:"11001",nom:"Antropologia Social i Cultural (Barcelona)",universitat:"UB",notaJuny:"6,400",notaSetembre:"",nota25:"5,000",notaTitulats:"7,480"},{codi:"21152",nom:"Antropologia Social i Cultural (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,590",nota25:"5,000",notaTitulats:"7,480"},{codi:"11029",nom:"Arqueologia (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"5,338",nota25:"5,000",notaTitulats:"5,000"},{codi:"21146",nom:"Arqueologia (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,096",nota25:"5,000",notaTitulats:"7,890"},{codi:"81045",nom:'Arts Escèniques "ERAM" (Salt)',universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"21020",nom:'Arts i Disseny "Massana" (Barcelona)',universitat:"UAB",notaJuny:"5,000",notaSetembre:"6,334",nota25:"5,000",notaTitulats:"5,000"},{codi:"91063",nom:"Audiologia General (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,194",nota25:"5,000",notaTitulats:"5,000"},{codi:"91059",nom:'Belles Arts "BAU" (Barcelona)',universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"6,632",nota25:"5,000",notaTitulats:"7,150"},{codi:"21137",nom:"Ciència, Tecnologia i Humanitats (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"8,358",notaSetembre:"",nota25:"5,000",notaTitulats:"7,180"},{codi:"21131",nom:"Ciències (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"6,680",nota25:"5,907",notaTitulats:"5,000"},{codi:"81008",nom:"Ciències Ambientals (Girona)",universitat:"UdG",notaJuny:"8,233",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"11113",nom:'Ciències Culinàries i Gastronòmiques "CETT" (Barcelona)',universitat:"UB",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"71086",nom:`Ciències de l'Activitat Física i de l'Esport "EUSES" (Amposta)`,universitat:"URV",notaJuny:"6,174",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"21117",nom:"Ciències de l'Antiguitat (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"6,154",nota25:"5,000",notaTitulats:"6,440"},{codi:"91006",nom:"Comunicació Audiovisual (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"6,900",nota25:"5,000",notaTitulats:"5,000"},{codi:"81005",nom:'Comunicació Audiovisual i Multimèdia "ERAM" (Salt)',universitat:"UdG",notaJuny:"5,000",notaSetembre:"8,922",nota25:"5,000",notaTitulats:"5,000"},{codi:"81067",nom:'Comunicació Audiovisual i Multimèdia "ERAM" (docència en Anglès) (Salt)',universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"81068",nom:"Comunicació Cultural (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"7,856",nota25:"5,000",notaTitulats:"5,000"},{codi:"61009",nom:"Comunicació i Periodisme Audiovisuals (Lleida)",universitat:"UdL",notaJuny:"7,826",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"91050",nom:'Criminologia "ESERP" (Barcelona)',universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,248",nota25:"5,000",notaTitulats:"5,000"},{codi:"81083",nom:"Direcció d'Empreses Hoteleres i Gastronòmiques (Sant Pol de Mar)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,910",nota25:"5,000",notaTitulats:"5,000"},{codi:"21107",nom:"Direcció Hotelera (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,278",nota25:"5,000",notaTitulats:"5,000"},{codi:"11114",nom:'Direcció Hotelera Internacional "CETT" (Barcelona)',universitat:"UB",notaJuny:"5,000",notaSetembre:"5,236",nota25:"5,000",notaTitulats:"5,000"},{codi:"71085",nom:`Direcció i Gestió d'Empreses en l'Àmbit Digital "ESIC" (Barcelona)`,universitat:"URV",notaJuny:"5,000",notaSetembre:"6,752",nota25:"5,000",notaTitulats:"5,000"},{codi:"11110",nom:`Direcció i Gestió Gastronòmica "Barcelona Culinary Hub" (L'Hospitalet de Llobregat)`,universitat:"UB",notaJuny:"5,000",notaSetembre:"5,566",nota25:"5,000",notaTitulats:"5,000"},{codi:"91007",nom:'Disseny "BAU" (Barcelona)',universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,634",nota25:"5,000",notaTitulats:"5,000"},{codi:"21015",nom:'Disseny "Eina" (Barcelona)',universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,634",nota25:"5,000",notaTitulats:"5,000"},{codi:"31121",nom:"Disseny Digital i Tecnologies Multimèdia (Terrassa)",universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,234",nota25:"5,000",notaTitulats:"5,000"},{codi:"31083",nom:"Disseny i Desenvolupament de Videojocs (docència en Anglès) (Campus Barcelona) (Barcelona / Terrassa)",universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"31074",nom:"Disseny i Desenvolupament de Videojocs (Campus Terrassa) (Barcelona / Terrassa)",universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,380",nota25:"5,000",notaTitulats:"5,000"},{codi:"11106",nom:'Disseny i Desenvolupament de Videojocs i Jocs Aplicats "ENTI" (Barcelona)',universitat:"UB",notaJuny:"5,000",notaSetembre:"6,840",nota25:"5,000",notaTitulats:"5,000"},{codi:"91056",nom:'Disseny i Innovació "ELISAVA" (Barcelona)',universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,532",nota25:"5,000",notaTitulats:"5,000"},{codi:"41045",nom:'Disseny i Producció de Videojocs "Tecnocampus" (Mataró)',universitat:"UPF",notaJuny:"5,000",notaSetembre:"5,926",nota25:"5,000",notaTitulats:"5,000"},{codi:"41052",nom:`Disseny i Producció de Videojocs / Enginyeria Informàtica de Gestió i Sistemes d'Informació "Tecnocampus" (simultaneïtat) (Mataró)`,universitat:"UPF",notaJuny:"5,000",notaSetembre:"7,554",nota25:"5,000",notaTitulats:"5,000"},{codi:"91053",nom:'Dret "ESERP" (Barcelona)',universitat:"UVic-UCC",notaJuny:"5,342",notaSetembre:"",nota25:"5,000",notaTitulats:"8,870"},{codi:"61011",nom:"Educació Infantil (Lleida)",universitat:"UdL",notaJuny:"6,136",notaSetembre:"",nota25:"5,000",notaTitulats:"7,900"},{codi:"71029",nom:"Educació Infantil (Tortosa)",universitat:"URV",notaJuny:"5,000",notaSetembre:"8,488",nota25:"5,000",notaTitulats:"5,000"},{codi:"91008",nom:"Educació Infantil (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"9,078",nota25:"5,000",notaTitulats:"5,000"},{codi:"91010",nom:"Educació Social (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,082",nota25:"5,000",notaTitulats:"7,300"},{codi:"31126",nom:'Empresa, Innovació i Tecnologia "EUNCET" (Campus 22@) (presencial) (Barcelona)',universitat:"UPC",notaJuny:"5,514",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"31125",nom:'Empresa, Innovació i Tecnologia "EUNCET" (Campus 22@) (semipresencial) (Barcelona)',universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,122",nota25:"5,000",notaTitulats:"5,000"},{codi:"31128",nom:'Empresa, Innovació i Tecnologia "EUNCET" (Campus Terrassa) (presencial) (Terrassa)',universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,546",nota25:"5,000",notaTitulats:"5,000"},{codi:"31127",nom:'Empresa, Innovació i Tecnologia "EUNCET" (Campus Terrassa) (semipresencial) (Terrassa)',universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"31136",nom:`Empresa, Innovació i Tecnologia / Gestió i Digitalització en l'Esport "EUNCET" (Campus Can Dragó + Campus 22@) (presencial) (simultaneïtat) (Barcelona)`,universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,298",nota25:"5,000",notaTitulats:"5,000"},{codi:"31129",nom:'Empresa, Innovació i Tecnologia / Màrqueting, Innovació i Tecnologia "EUNCET" (Campus 22@) (presencial) (simultaneïtat) (Barcelona)',universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,390",nota25:"5,000",notaTitulats:"5,000"},{codi:"31130",nom:'Empresa, Innovació i Tecnologia / Màrqueting, Innovació i Tecnologia "EUNCET" (Campus Terrassa) (presencial) (simultaneïtat) (Terrassa)',universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,220",nota25:"5,000",notaTitulats:"5,000"},{codi:"21132",nom:`Enginyeria d'Automoció "EU Salesiana de Sarrià" (Barcelona)`,universitat:"UAB",notaJuny:"9,790",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"91057",nom:'Enginyeria de Disseny Industrial "ELISAVA" (Barcelona)',universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,500",nota25:"5,000",notaTitulats:"5,000"},{codi:"21025",nom:'Enginyeria Electrònica Industrial i Automàtica "EU Salesiana de Sarrià" (Barcelona)',universitat:"UAB",notaJuny:"9,926",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"21112",nom:'Enginyeria Electrònica Industrial i Automàtica / Enginyeria Mecànica "EU Salesiana de Sarrià" (simultaneïtat) (Barcelona)',universitat:"UAB",notaJuny:"11,384",notaSetembre:"",nota25:"5,000",notaTitulats:"6,380"},{codi:"21127",nom:'Enginyeria en Energies Renovables i Eficiència Energètica "EU Salesiana de Sarrià" (Barcelona)',universitat:"UAB",notaJuny:"9,672",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"21135",nom:"Estudis Anglesos (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"6,040",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"61054",nom:"Estudis Anglesos (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,290",nota25:"5,000",notaTitulats:"5,900"},{codi:"11094",nom:"Estudis Àrabs i Hebreus (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"6,910",nota25:"5,000",notaTitulats:"5,780"},{codi:"21140",nom:"Estudis d'Anglès i Català (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,382",nota25:"5,000",notaTitulats:"5,000"},{codi:"21141",nom:"Estudis d'Anglès i de Clàssiques (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,718",nota25:"5,000",notaTitulats:"5,000"},{codi:"21142",nom:"Estudis d'Anglès i Espanyol (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"6,040",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"21143",nom:"Estudis d'Anglès i Francès (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"8,537",nota25:"5,000",notaTitulats:"5,000"},{codi:"21030",nom:"Estudis d'Àsia Oriental -Japonès- (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"8,138",notaSetembre:"",nota25:"6,125",notaTitulats:"5,000"},{codi:"21067",nom:"Estudis d'Àsia Oriental -Xinès- (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"7,082",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"21133",nom:"Estudis d'Espanyol i Xinès: Llengua, Literatura i Cultura (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"6,960",nota25:"5,000",notaTitulats:"7,800"},{codi:"21144",nom:"Estudis de Català i Espanyol (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,070",nota25:"5,000",notaTitulats:"5,000"},{codi:"91062",nom:"Estudis Globals / Global Studies (docència en Anglès) (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,342",nota25:"5,000",notaTitulats:"5,000"},{codi:"21148",nom:"Estudis Socioculturals de Gènere (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"11023",nom:"Estudis Literaris (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"5,686",nota25:"6,063",notaTitulats:"5,000"},{codi:"81070",nom:"Filologia Catalana (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,806",nota25:"5,000",notaTitulats:"5,000"},{codi:"21134",nom:"Filologia Catalana: Estudis de Literatura i Lingüística (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,030",nota25:"5,000",notaTitulats:"5,000"},{codi:"61055",nom:"Filologia Catalana i Estudis Occitans (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"61058",nom:"Filologia Catalana i Estudis Occitans / Llengües Aplicades i Traducció (simultaneïtat) (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"81071",nom:"Filologia Hispànica (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,126",nota25:"5,000",notaTitulats:"7,090"},{codi:"61079",nom:"Filologia Hispànica (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,266",nota25:"5,000",notaTitulats:"5,000"},{codi:"61080",nom:"Filologia Hispànica / Llengües Aplicades i Traducció (simultaneïtat) (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,959",nota25:"5,000",notaTitulats:"5,000"},{codi:"11061",nom:"Filosofia (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"5,126",nota25:"7,125",notaTitulats:"5,000"},{codi:"21032",nom:"Filosofia (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,148",nota25:"8,438",notaTitulats:"8,860"},{codi:"81072",nom:"Filosofia (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"8,078",nota25:"5,000",notaTitulats:"5,000"},{codi:"61026",nom:"Geografia (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,286",nota25:"5,000",notaTitulats:"6,870"},{codi:"71015",nom:"Geografia, Anàlisi Territorial i Sostenibilitat (Vila-Seca)",universitat:"URV",notaJuny:"5,000",notaSetembre:"5,430",nota25:"5,000",notaTitulats:"5,000"},{codi:"21124",nom:"Geografia, Medi Ambient i Planificació Territorial (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"8,554",nota25:"5,000",notaTitulats:"5,000"},{codi:"81073",nom:"Geografia, Territori i Medi Ambient (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,150",nota25:"5,000",notaTitulats:"5,000"},{codi:"21037",nom:"Geologia (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,832",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"91060",nom:"Gestió de la Societat Digital (Campus Manresa) (Manresa)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,828",nota25:"5,000",notaTitulats:"5,000"},{codi:"71068",nom:"Gestió en Turisme i Hoteleria (Vila-Seca)",universitat:"URV",notaJuny:"5,000",notaSetembre:"5,274",nota25:"5,000",notaTitulats:"5,000"},{codi:"31135",nom:`Gestió i Digitalització en l'Esport "EUNCET" (Campus Can Dragó) (Barcelona)`,universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,320",nota25:"5,000",notaTitulats:"5,000"},{codi:"31137",nom:`Gestió i Digitalització en l'Esport / Màrqueting, Innovació i Tecnologia "EUNCET" (Campus Can Dragó + Campus 22@) (presencial) (simultaneïtat) (Barcelona)`,universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,238",nota25:"5,000",notaTitulats:"5,000"},{codi:"11118",nom:'Grau obert "CETT" (Direcció Hotelera Internacional / Màrqueting, Esdeveniments i Entreteniment / Negoci Digital i Innovació en Turisme / Turisme) (agrupació) (Barcelona)',universitat:"UB",notaJuny:"5,000",notaSetembre:"5,512",nota25:"5,000",notaTitulats:"5,000"},{codi:"11035",nom:"Història (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"5,140",nota25:"7,750",notaTitulats:"5,000"},{codi:"21040",nom:"Història (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,020",nota25:"5,000",notaTitulats:"5,000"},{codi:"81074",nom:"Història (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,038",nota25:"5,000",notaTitulats:"5,000"},{codi:"61028",nom:"Història (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,486",nota25:"5,250",notaTitulats:"5,000"},{codi:"71077",nom:"Història (Tarragona)",universitat:"URV",notaJuny:"6,446",notaSetembre:"",nota25:"5,000",notaTitulats:"5,000"},{codi:"11034",nom:"Història de l'Art (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"5,265",nota25:"5,000",notaTitulats:"7,200"},{codi:"21039",nom:"Història de l'Art (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"6,058",nota25:"5,000",notaTitulats:"5,000"},{codi:"81075",nom:"Història de l'Art (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"6,112",nota25:"5,000",notaTitulats:"5,000"},{codi:"61081",nom:"Història de l'Art i Gestió del Patrimoni Artístic (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,320",nota25:"5,000",notaTitulats:"5,000"},{codi:"41003",nom:"Humanitats (Barcelona)",universitat:"UPF",notaJuny:"5,000",notaSetembre:"5,178",nota25:"5,000",notaTitulats:"5,000"},{codi:"21101",nom:"Humanitats (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"6,148",nota25:"5,000",notaTitulats:"5,000"},{codi:"21046",nom:"Informàtica i Serveis (Sant Cugat del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,004",nota25:"5,000",notaTitulats:"5,000"},{codi:"81058",nom:"Innovació i Seguretat Alimentària (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,568",nota25:"5,000",notaTitulats:"7,492"},{codi:"10120",nom:"Investigació Privada (títol propi, no oficial) (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"5,270",nota25:"5,000",notaTitulats:"5,000"},{codi:"11039",nom:"Lingüística (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"5,244",nota25:"5,000",notaTitulats:"5,000"},{codi:"71072",nom:"Llengua i Literatura Catalanes (Tarragona)",universitat:"URV",notaJuny:"5,000",notaSetembre:"5,294",nota25:"5,000",notaTitulats:"5,000"},{codi:"21136",nom:"Llengua i Literatura Espanyoles (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,486",nota25:"5,000",notaTitulats:"5,000"},{codi:"71073",nom:"Llengua i Literatura Hispàniques (Tarragona)",universitat:"URV",notaJuny:"5,000",notaSetembre:"5,070",nota25:"5,000",notaTitulats:"5,000"},{codi:"41023",nom:"Llengües Aplicades (Barcelona)",universitat:"UPF",notaJuny:"5,000",notaSetembre:"5,262",nota25:"5,000",notaTitulats:"5,000"},{codi:"11040",nom:"Llengües i Literatures Modernes (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"5,686",nota25:"5,000",notaTitulats:"5,000"},{codi:"11082",nom:"Llengües Romàniques i les seves Literatures (Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"6,526",nota25:"5,000",notaTitulats:"5,000"},{codi:"81064",nom:'Logística Empresarial "Mediterrani" (Barcelona)',universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"71062",nom:'Màrqueting "ESIC" (Barcelona)',universitat:"URV",notaJuny:"5,000",notaSetembre:"5,096",nota25:"5,000",notaTitulats:"5,000"},{codi:"71074",nom:'Màrqueting "ESIC" (docència en Anglès) (Barcelona)',universitat:"URV",notaJuny:"5,000",notaSetembre:"5,392",nota25:"5,000",notaTitulats:"5,000"},{codi:"61078",nom:'Màrqueting i Comunicació Digital "Centre Universitari EAE" (Barcelona)',universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,180",nota25:"5,000",notaTitulats:"5,000"},{codi:"91032",nom:"Màrqueting i Comunicació Empresarial (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,042",nota25:"5,000",notaTitulats:"5,000"},{codi:"41062",nom:'Màrqueting i Comunitats Digitals / Turisme i Gestió del Lleure "Tecnocampus" (simultaneïtat) (Mataró)',universitat:"UPF",notaJuny:"5,000",notaSetembre:"5,166",nota25:"5,000",notaTitulats:"5,000"},{codi:"11115",nom:'Màrqueting, Esdeveniments i Entreteniment "CETT" (Barcelona)',universitat:"UB",notaJuny:"5,000",notaSetembre:"5,364",nota25:"5,000",notaTitulats:"5,000"},{codi:"31132",nom:'Màrqueting, Innovació i Tecnologia "EUNCET" (Campus 22@) (presencial) (Barcelona)',universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,948",nota25:"5,000",notaTitulats:"5,000"},{codi:"31131",nom:'Màrqueting, Innovació i Tecnologia "EUNCET" (Campus 22@) (semipresencial) (Barcelona)',universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,198",nota25:"5,000",notaTitulats:"5,000"},{codi:"31134",nom:'Màrqueting, Innovació i Tecnologia "EUNCET" (Campus Terrassa) (presencial) (Terrassa)',universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,494",nota25:"5,000",notaTitulats:"5,000"},{codi:"31133",nom:'Màrqueting, Innovació i Tecnologia "EUNCET" (Campus Terrassa) (semipresencial) (Terrassa)',universitat:"UPC",notaJuny:"5,000",notaSetembre:"5,264",nota25:"5,000",notaTitulats:"5,000"},{codi:"41049",nom:'Mitjans Audiovisuals "Tecnocampus" (Mataró)',universitat:"UPF",notaJuny:"5,000",notaSetembre:"5,088",nota25:"5,000",notaTitulats:"5,000"},{codi:"81079",nom:'Moda "ERAM" (Girona / Salt)',universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,276",nota25:"5,000",notaTitulats:"5,000"},{codi:"91029",nom:"Multimèdia. Aplicacions i Videojocs (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"21051",nom:"Musicologia (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,158",nota25:"5,000",notaTitulats:"7,710"},{codi:"11102",nom:'Negoci Digital i Innovació en Turisme "CETT" (Barcelona)',universitat:"UB",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"11112",nom:"(Barcelona)",universitat:"UB",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"41061",nom:'Nutrició Humana i Dietètica "Tecnocampus" (Mataró)',universitat:"UPF",notaJuny:"5,000",notaSetembre:"5,050",nota25:"5,000",notaTitulats:"5,000"},{codi:"81081",nom:'Nutrició Humana i Dietètica "EUSES" (Salt)',universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,086",nota25:"5,000",notaTitulats:"5,000"},{codi:"91021",nom:"Nutrició Humana i Dietètica (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,160",nota25:"5,000",notaTitulats:"8,330"},{codi:"91014",nom:"Periodisme (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,520",nota25:"5,000",notaTitulats:"5,000"},{codi:"91045",nom:"Podologia (Campus Manresa) (Manresa)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,250",nota25:"5,000",notaTitulats:"8,210"},{codi:"11111",nom:`Producció de Música i So per a la Indústria de l'Entreteniment "ENTI" (Barcelona)`,universitat:"UB",notaJuny:"5,000",notaSetembre:"6,476",nota25:"5,000",notaTitulats:"5,000"},{codi:"91015",nom:"Publicitat i Relacions Públiques (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,268",nota25:"5,000",notaTitulats:"5,000"},{codi:"61033",nom:"Relacions Laborals i Recursos Humans (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,116",nota25:"5,000",notaTitulats:"5,000"},{codi:"21057",nom:"Teràpia Ocupacional EUIT de Terrassa (Terrassa)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,978",nota25:"5,000",notaTitulats:"5,000"},{codi:"91016",nom:"Teràpia Ocupacional (presencial / semipresencial) (Vic)",universitat:"UVic-UCC",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"21058",nom:"Traducció i Interpretació -Alemany- (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,324",nota25:"6,250",notaTitulats:"5,000"},{codi:"41040",nom:"Traducció i Interpretació -Alemany / Francès / Llengua de Signes Catalana- (Barcelona)",universitat:"UPF",notaJuny:"5,000",notaSetembre:"5,506",nota25:"5,000",notaTitulats:"5,000"},{codi:"21065",nom:"Traducció i Interpretació -Francès- (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"6,576",nota25:"5,000",notaTitulats:"5,000"},{codi:"11011",nom:'Turisme "CETT" (Barcelona)',universitat:"UB",notaJuny:"5,000",notaSetembre:"5,182",nota25:"5,000",notaTitulats:"5,000"},{codi:"11086",nom:'Turisme "CETT" (docència en Anglès) (Barcelona)',universitat:"UB",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"81036",nom:'Turisme "Euroaula" (Barcelona)',universitat:"UdG",notaJuny:"5,000",notaSetembre:"6,901",nota25:"5,000",notaTitulats:"5,000"},{codi:"81038",nom:'Turisme "Mediterrani" (Barcelona)',universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,000",nota25:"5,000",notaTitulats:"5,000"},{codi:"21059",nom:"Turisme (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,540",nota25:"5,000",notaTitulats:"5,000"},{codi:"21114",nom:"Turisme (docència en Anglès) (Cerdanyola del Vallès)",universitat:"UAB",notaJuny:"5,000",notaSetembre:"5,700",nota25:"5,000",notaTitulats:"5,000"},{codi:"81039",nom:"Turisme (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,505",nota25:"5,000",notaTitulats:"5,000"},{codi:"61021",nom:"Turisme (Lleida)",universitat:"UdL",notaJuny:"5,000",notaSetembre:"5,484",nota25:"5,000",notaTitulats:"5,000"},{codi:"81076",nom:"Turisme / Geografia, Territori i Medi Ambient (simultaneïtat) (Girona)",universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,505",nota25:"5,000",notaTitulats:"5,000"},{codi:"81062",nom:'Turisme / Màrqueting "Mediterrani" (simultaneïtat) (Barcelona)',universitat:"UdG",notaJuny:"5,000",notaSetembre:"5,282",nota25:"5,000",notaTitulats:"5,000"}],LE=[...new Set(W0.map(i=>i.universitat).filter(Boolean))].sort();function NE(i){let e="",t="";i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        </span>
        Notes de Tall · Setembre 2025
      </h1>
      <p class="section-subtitle">5a assignació — Setembre 2025 (23/10/25) · Ordre alfabètic per centre d'estudi · Estudis de Grau i Títols Propis</p>
    </div>

    <!-- Avís -->
    <div class="nt-avis glass-card" style="margin-bottom:var(--s5);border-left:3px solid var(--amber);padding:var(--s4) var(--s5);">
      <div style="display:flex;gap:var(--s3);align-items:flex-start;">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--amber-l)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;flex-shrink:0;margin-top:2px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <div>
          <div style="font-size:var(--fz-xs);font-weight:var(--fw-6);color:var(--amber-l);margin-bottom:3px;">Aclariments importants</div>
          <div style="font-size:var(--fz-xs);color:var(--t-2);line-height:1.7;">
            La nota de tall correspon a la del darrer estudiant que ha obtingut plaça en un determinat centre. No obstant, cal tenir en compte que no es tracta d'una nota prefixada, sinó que pot variar en funció de les places disponibles en cada centre i el nombre d'estudiants que les sol·liciten en preinscripció.
            <br>Les places de la convocatòria de setembre s'assignen en primer lloc als estudiants amb nota d'admissió obtinguda a la convocatòria de juny de 2025 o en convocatòries d'anys anteriors i, en segon lloc, als estudiants amb nota d'admissió obtinguda a la convocatòria de setembre de 2025.
            <br>Si la casella de "Nota de tall - setembre any en curs" està en blanc, significa que no ha accedit cap estudiant amb nota d'admissió de setembre 2025.
          </div>
        </div>
      </div>
    </div>

    <!-- Filtres -->
    <div class="nt-filters glass-card" style="margin-bottom:var(--s5);">
      <div class="pond-filters-grid">
        <div class="form-group">
          <label class="form-label">Cerca estudi</label>
          <input id="nt-search" class="form-input" type="text" placeholder="Nom del grau, codi o ciutat..." autocomplete="off">
        </div>
        <div class="form-group">
          <label class="form-label">Universitat</label>
          <select id="nt-uni" class="form-select">
            <option value="">Totes les universitats</option>
            ${LE.map(f=>`<option value="${f}">${f}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Ordenar per</label>
          <select id="nt-sort" class="form-select">
            <option value="nom">Nom (A-Z)</option>
            <option value="notaJuny-desc">Nota juny (major a menor)</option>
            <option value="notaJuny-asc">Nota juny (menor a major)</option>
            <option value="notaSetembre-desc">Nota setembre (major a menor)</option>
            <option value="notaSetembre-asc">Nota setembre (menor a major)</option>
          </select>
        </div>
      </div>
      <div class="pond-filter-info">
        <span id="nt-count" class="badge badge--teal">152 estudis</span>
        <span class="nt-legend">
          <span class="nt-nota-max" style="background:rgba(30,168,130,.18);color:var(--teal-l);padding:2px 8px;border-radius:var(--r-pill);font-size:.6rem;font-weight:600;">≥ 12,000</span> Molt alta demanda
          <span class="nt-nota-mid" style="background:rgba(74,127,212,.15);color:var(--blue-l);padding:2px 8px;border-radius:var(--r-pill);font-size:.6rem;font-weight:600;margin-left:8px;">5,000 – 11,999</span> Accés variable
        </span>
      </div>
    </div>

    <!-- Taula -->
    <div class="pond-table-wrap glass-card">
      <div class="nt-table-scroll">
        <table class="pond-table nt-table" id="nt-table">
          <thead>
            <tr class="pond-thead-row">
              <th class="pond-th pond-th--sticky nt-th--codi">Codi</th>
              <th class="pond-th pond-th--sticky nt-th--nom">Nom del centre d'estudi</th>
              <th class="pond-th pond-th--sticky nt-th--uni">Universitat</th>
              <th class="pond-th nt-th--nota">Nota de tall<br><span style="font-weight:400;font-size:.6rem;opacity:.7">Juny i anys anteriors</span></th>
              <th class="pond-th nt-th--nota">Nota de tall<br><span style="font-weight:400;font-size:.6rem;opacity:.7">Setembre any en curs</span></th>
              <th class="pond-th nt-th--nota">Més grans de 25 anys<br><span style="font-weight:400;font-size:.6rem;opacity:.7">Via 9</span></th>
              <th class="pond-th nt-th--nota">Titulats universitaris<br><span style="font-weight:400;font-size:.6rem;opacity:.7">Via 2</span></th>
            </tr>
          </thead>
          <tbody id="nt-tbody"></tbody>
        </table>
      </div>
    </div>
  `;const a=i.querySelector("#nt-search"),n=i.querySelector("#nt-uni"),s=i.querySelector("#nt-sort"),o=i.querySelector("#nt-count"),c=i.querySelector("#nt-tbody");function l(f){if(!f||f==="")return"";const g=parseFloat(f.replace(",","."));return isNaN(g)?"":g>=12?"nt-nota--alta":g>=10?"nt-nota--mig-alta":g>=7?"nt-nota--mig":g>5?"nt-nota--baixa":"nt-nota--entrada"}function d(f){return!f||f.trim()===""?'<span style="color:var(--t-3);font-size:var(--fz-xs)">—</span>':`<span class="nt-nota-badge ${l(f)}">${f}</span>`}function h(){const f=e.toLowerCase();let g=W0.filter(w=>!(f&&!w.nom.toLowerCase().includes(f)&&!w.codi.includes(f)||t&&w.universitat!==t));const b=s.value;if(b==="nom")g.sort((w,q)=>w.nom.localeCompare(q.nom));else if(b.startsWith("notaJuny")){const w=b.endsWith("desc")?-1:1;g.sort((q,U)=>{const N=parseFloat((q.notaJuny||"0").replace(",",".")),O=parseFloat((U.notaJuny||"0").replace(",","."));return(N-O)*w})}else if(b.startsWith("notaSetembre")){const w=b.endsWith("desc")?-1:1;g.sort((q,U)=>{const N=parseFloat((q.notaSetembre||q.notaJuny||"0").replace(",",".")),O=parseFloat((U.notaSetembre||U.notaJuny||"0").replace(",","."));return(N-O)*w})}o.textContent=`${g.length} estudis`;const _=g.map(w=>`
      <tr class="pond-row">
        <td class="pond-td nt-td--codi">${w.codi}</td>
        <td class="pond-td nt-td--nom">${w.nom}</td>
        <td class="pond-td nt-td--uni"><span class="badge" style="background:rgba(74,127,212,.12);color:var(--blue-l);border:1px solid rgba(74,127,212,.2)">${w.universitat}</span></td>
        <td class="pond-td nt-td--nota">${d(w.notaJuny)}</td>
        <td class="pond-td nt-td--nota">${d(w.notaSetembre)}</td>
        <td class="pond-td nt-td--nota">${d(w.nota25)}</td>
        <td class="pond-td nt-td--nota">${d(w.notaTitulats)}</td>
      </tr>`).join("");c.innerHTML=_||'<tr><td colspan="7" class="pond-empty">Cap resultat amb els filtres actuals</td></tr>'}a.addEventListener("input",()=>{e=a.value,h()}),n.addEventListener("change",()=>{t=n.value,h()}),s.addEventListener("change",()=>h()),h()}const OE=[{familia:"Activitats físiques i esportives",cicles:["Guia en el Medi Natural i de Temps de Lleure","Guia en el Medi Natural i de Temps de Lleure, perfil professional d'Estacions d'Esquí"]},{familia:"Administració i gestió",cicles:["Gestió Administrativa","Gestió Administrativa, perfil professional Àmbit Jurídic","Gestió Administrativa, perfil professional Àmbit Sanitari"]},{familia:"Agrària",cicles:["Activitats Eqüestres","Aprofitament i Conservació del Medi Natural","Jardineria i Floristeria","Producció Agroecològica","Producció Agroecològica, perfil professional de Producció Agrícola Ecològica","Producció Agropecuària","Producció Agropecuària, perfil professional de Producció Agrícola","Producció Agropecuària, perfil professional de Producció Ramadera"]},{familia:"Arts gràfiques",cicles:["Impressió Gràfica","Impressió Gràfica, perfil professional en 'Converting'","Postimpressió i Acabats Gràfics","Preimpressió Digital"]},{familia:"Comerç i màrqueting",cicles:["Activitats Comercials","Activitats Comercials, perfil professional Logística","Activitats Comercials, perfil professional Productes Frescos","Comercialització de Productes Alimentaris"]},{familia:"Edificació i obra civil",cicles:["Construcció","Obres d'Interior, Decoració i Rehabilitació"]},{familia:"Electricitat i electrònica",cicles:["Instal·lacions Elèctriques i Automàtiques","Instal·lacions de Telecomunicacions"]},{familia:"Energia i aigua",cicles:["Xarxes i Estacions de Tractament d'Aigües"]},{familia:"Fabricació mecànica",cicles:["Mecanització","Mecanització, perfil professional de Manteniment i Reparació en Rellotgeria","Soldadura i Caldereria"]},{familia:"Fusta, moble i suro",cicles:["Fusteria i Moble","Instal·lació i Moblament"]},{familia:"Hoteleria i turisme",cicles:["Cuina i Gastronomia","Serveis en Restauració"]},{familia:"Imatge i so",cicles:["Vídeo, Discjòquei i So"]},{familia:"Imatge personal",cicles:["Estètica i Bellesa","Perruqueria i Cosmètica Capil·lar"]},{familia:"Indústries alimentàries",cicles:["Elaboració de Productes Alimentaris","Forneria, Pastisseria i Confiteria","Olis d'Oliva i Vins"]},{familia:"Indústries extractives",cicles:["Excavacions i Sondatges","Excavacions i Sondatges, perfil professional d'Operacions de Maquinària de Construcció","Pedra Natural"]},{familia:"Informàtica i comunicacions",cicles:["Sistemes Microinformàtics i Xarxes"]},{familia:"Instal·lació i manteniment",cicles:["Instal·lacions Frigorífiques i de Climatització","Instal·lacions de Producció de Calor","Manteniment Electromecànic"]},{familia:"Maritimopesquera",cicles:["Cultius Aqüícoles","Manteniment i Control de la Maquinària de Vaixells i Embarcacions","Navegació i Pesca de Litoral","Operacions de Subaqüística i Hiperbàriques"]},{familia:"Química",cicles:["Operacions de Laboratori","Planta Química","Planta Química, perfil professional Productes Farmacèutics i Cosmètics"]},{familia:"Sanitat",cicles:["Cures Auxiliars d'Infermeria","Emergències Sanitàries","Farmàcia i Parafarmàcia"]},{familia:"Seguretat i medi ambient",cicles:["Emergències i Protecció Civil","Sanitat Ambiental Aplicada","Seguretat","Seguretat, perfil professional de Vigilància subaquàtica i hiperbàrica"]},{familia:"Serveis socioculturals i a la comunitat",cicles:["Atenció a Persones en Situació de Dependència","Serveis Funeraris"]},{familia:"Tèxtil, confecció i pell",cicles:["Confecció i Moda","Fabricació i Ennobliment de Productes Tèxtils","Reparació de Calçat i Marroquineria"]},{familia:"Transport i manteniment de vehicles",cicles:["Carrosseria","Conducció de Vehicles de Transport per Carretera","Electromecànica de Maquinària","Electromecànica de Vehicles Automòbils","Electromecànica de Vehicles Automòbils, perfil professional de Vehícles pesants","Manteniment d'Altres Mitjans de Transport, perfil professional Embarcacions d'esbarjo","Manteniment d'Altres Mitjans de Transport, perfil professional Material rodant ferroviari","Manteniment d'Estructures d'Aeronaus","Manteniment Aeromecànic d'Avions amb Motor de Pistó"]}],FE=[{familia:"Activitats físiques i esportives",cicles:["Condicionament Físic","Ensenyament i Animació Socioesportiva"]},{familia:"Administració i gestió",cicles:["Administració i Finances","Administració i Finances, perfil professional Gestor d'Assegurances","Assistència a la Direcció"]},{familia:"Agrària",cicles:["Gestió Forestal i del Medi Natural","Paisatgisme i Medi Rural","Paisatgisme i Medi Rural, perfil professional Gestió Agropecuària","Paisatgisme i Medi Rural, perfil professional d'Agroecologia i Acció Climàtica","Ramaderia i Assistència en Sanitat Animal"]},{familia:"Arts gràfiques",cicles:["Disseny i Edició de Publicacions Impreses i Multimèdia","Disseny i Gestió de la Producció Gràfica"]},{familia:"Comerç i màrqueting",cicles:["Comerç Internacional","Gestió de Vendes i Espais Comercials","Màrqueting i Publicitat","Màrqueting i Publicitat, perfil professional Enològic","Transport i Logística"]},{familia:"Edificació i obra civil",cicles:["Organització i Control d'Obres de Construcció","Projectes d'Edificació","Projectes d'Edificació, perfil professional Rehabilitació i Restauració","Projectes d'Obra Civil"]},{familia:"Electricitat i electrònica",cicles:["Automatització i Robòtica Industrial","Electromedicina Clínica","Manteniment Electrònic","Mecatrònica Industrial","Sistemes Electrotècnics i Automatitzats","Sistemes Electrotècnics i Automatitzats, perfil professional d'Instal·lacions Elèctriques i Comunicacions del Vaixell","Sistemes de Telecomunicacions i Informàtics"]},{familia:"Energia i aigua",cicles:["Eficiència Energètica i Energia Solar Tèrmica","Energies Renovables","Gestió de l'Aigua"]},{familia:"Fabricació mecànica",cicles:["Construccions Metàl·liques","Disseny en Fabricació Mecànica","Disseny en Fabricació Mecànica, perfil professional Desenvolupament Virtual de l'Automòbil","Programació de la Producció en Emmotllament de Metalls i Polímers","Programació de la Producció en Fabricació Mecànica","Programació de la Producció en Fabricació Mecànica, perfil professional en Motlles i Matrius","Òptica d'Ullera"]},{familia:"Fusta, moble i suro",cicles:["Disseny i Moblament","Disseny i Moblament, perfil professional de Construccions Efímeres i Decorats"]},{familia:"Hoteleria i turisme",cicles:["Agències de Viatges i Gestió d'Esdeveniments","Direcció de Cuina","Direcció de Serveis en Restauració","Gestió d'Allotjaments Turístics","Guia, Informació i Assistències Turístiques","Guia, Informació i Assistències Turístiques, perfil professional Enoturisme"]},{familia:"Imatge i so",cicles:["Animacions en 3D, Jocs i Entorns Interactius","Animacions en 3D, Jocs i Entorns Interactius, perfil prof. Mons Virtuals, Realitat Augmentada i 'Gamificació'","Il·luminació, Captació i Tractament d'Imatge","Producció d'Audiovisuals i Espectacles","Realització de Projectes d'Audiovisuals i Espectacles","So per a Audiovisuals i Espectacles"]},{familia:"Imatge personal",cicles:["Assessoria d'Imatge Personal i Corporativa","Caracterització i Maquillatge Professional","Estilisme i Direcció de Perruqueria","Estètica Integral i Benestar","Termalisme i Benestar"]},{familia:"Indústries alimentàries",cicles:["Processos i Qualitat en Indústries Alimentàries","Vitivinicultura"]},{familia:"Informàtica i comunicacions",cicles:["Administració de Sistemes Informàtics en Xarxa","Administració de Sistemes Informàtics en Xarxa, perfil professional Ciberseguretat","Desenvolupament d'Aplicacions Multiplataforma","Desenvolupament d'Aplicacions Multiplataforma, perfil professional Informàtica Aplicada a la Logística","Desenvolupament d'Aplicacions Multiplataforma, perfil professional Videojocs i Oci Digital","Desenvolupament d'Aplicacions Web","Desenvolupament d'Aplicacions Web, perfil professional Bioinformàtica"]},{familia:"Instal·lació i manteniment",cicles:["Desenvolupament de Projectes d'Instal·lacions Tèrmiques i de Fluids","Manteniment d'Instal·lacions Tèrmiques i de Fluids","Mecatrònica Industrial"]},{familia:"Maritimopesquera",cicles:["Aqüicultura","Organització del Manteniment de la Maquinària de Vaixells i Embarcacions","Transport Marítim i Pesca d'Altura"]},{familia:"Química",cicles:["Fabricació de Productes Farmacèutics, Biotecnològics i Afins","Laboratori d'Anàlisi i Control de Qualitat","Química Industrial"]},{familia:"Sanitat",cicles:["Anatomia Patològica i Citodiagnòstic","Audiologia Protètica","Dietètica","Dietètica, perfil professional Alimentació Equilibrada i Col·lectiva","Dietètica, perfil professional Nutrició Esportiva","Documentació i Administració Sanitàries","Higiene Bucodental","Imatge per al Diagnòstic i Medicina Nuclear","Laboratori Clínic i Biomèdic","Ortopròtesi i Productes de Suport","Pròtesis Dentals","Radioteràpia i Dosimetria"]},{familia:"Seguretat i medi ambient",cicles:["Coordinació d'Emergències i Protecció Civil","Educació i Control Ambiental","Prevenció de riscos professionals","Química i Salut Ambiental"]},{familia:"Serveis socioculturals i a la comunitat",cicles:["Animació Sociocultural i Turística","Educació Infantil","Formació per a la Mobilitat Segura i Sostenible","Integració Social","Mediació Comunicativa","Promoció de la Igualtat de Gènere"]},{familia:"Tèxtil, confecció i pell",cicles:["Disseny Tècnic en Tèxtil i Pell","Patronatge i Moda","Vestuari a Mida i d'Espectacles"]},{familia:"Transport i manteniment de vehicles",cicles:["Automoció","Manteniment Aeromecànic d'Avions amb Motor de Pistó","Manteniment Aeromecànic d'Avions amb Motor de Turbina","Manteniment Aeromecànic d'Helicòpters amb Motor de Pistó (Previsió)","Manteniment Aeromecànic d'Helicòpters amb Motor de Turbina (Previsió)","Manteniment de Sistemes Electrònics i d'Aviònica d'Aeronaus"]}];function BE(i){let e="CFGM";const t=()=>{let a=`
      <div class="section-header">
        <h1 class="section-title">
          <span class="section-title-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </span>
          Famílies Formació Professional
        </h1>
        <p class="section-subtitle">Explora les famílies professionals i els seus respectius cicles formatius.</p>
      </div>

      <div class="auth-tabs" style="margin-bottom: var(--s6); justify-content: flex-start; max-width: 400px;">
        <button class="auth-tab ${e==="CFGM"?"active":""}" data-mode="CFGM">Cicles Grau Mitjà (CFGM)</button>
        <button class="auth-tab ${e==="CFGS"?"active":""}" data-mode="CFGS">Cicles Grau Superior (CFGS)</button>
      </div>

      <div class="families-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--s5);">
    `;(e==="CFGM"?OE:FE).forEach(c=>{a+=`
        <div class="glass-card family-card" style="padding: var(--s5); display: flex; flex-direction: column; gap: var(--s3); transition: transform 0.2s ease;">
          <h3 style="font-size: var(--fz-md); font-weight: var(--fw-7); border-bottom: 1px solid var(--border); padding-bottom: var(--s2); margin: 0; color: var(--blue-l);">
            ${c.familia}
          </h3>
          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--s2); flex: 1;">
      `,c.cicles.forEach(l=>{a+=`
            <li style="font-size: var(--fz-sm); color: var(--t-2); display: flex; align-items: flex-start; gap: var(--s2); line-height: 1.4;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px; color: var(--violet);"><polyline points="9 18 15 12 9 6"/></svg>
              ${l}
            </li>
        `}),a+=`
          </ul>
        </div>
      `}),a+="</div>",i.innerHTML=a,i.querySelectorAll(".family-card").forEach(c=>{c.addEventListener("mouseenter",()=>c.style.transform="translateY(-3px)"),c.addEventListener("mouseleave",()=>c.style.transform="translateY(0)")}),i.querySelectorAll(".auth-tab").forEach(c=>{c.addEventListener("click",l=>{e=l.target.dataset.mode,t()})})};t()}function GE(i){const e={comunes:"border-left: 3px solid #3b82f6; background: rgba(59, 130, 246, 0.05);",mod_ob:"border-left: 3px solid #ef4444; background: rgba(239, 68, 68, 0.05);",mod_op:"border-left: 3px solid #10b981; background: rgba(16, 185, 129, 0.05);",espec:"border-left: 3px solid #f59e0b; background: rgba(245, 158, 11, 0.05);"},t='<span style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-bottom: 2px; display: inline-block;">COMUNES</span>',a='<span style="background: rgba(239, 68, 68, 0.15); color: #f87171; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-bottom: 2px; display: inline-block;">MODALITAT (Troncal)</span>',n='<span style="background: rgba(16, 185, 129, 0.15); color: #34d399; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-bottom: 2px; display: inline-block;">MODALITAT (Escollir)</span>',s='<span style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-bottom: 2px; display: inline-block;">ESPECÍFIQUES / OPTATIVES</span>',o=`
    <li>Llengua Catalana i Literatura I i II</li>
    <li>Llengua Castellana i Literatura I i II</li>
    <li>Llengua Estrangera I i II (Anglès, Francès...)</li>
    <li>Educació Física (1r) / Filosofia (1r)</li>
    <li>Història de la Filosofia (2n) / Història d'Espanya i Cat (2n)</li>
  `,c=`
    <li>Segona Llengua Estrangera (Francès, Alemany...)</li>
    <li>Psicologia / Sociologia / Programació i Computació</li>
    <li>Reptes Científics / Creació Literària / Funcionament d'Empresa</li>
    <li>+ <strong>Treball de Recerca (TDR)</strong> Obligatori</li>
  `;i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
        </span>
        Batxillerats Al Detall
      </h1>
      <p class="section-subtitle">Explicació rigorosa, codificada per colors sobre l'estructura real dels estudis.</p>
    </div>

    <div style="display: flex; flex-direction: column; gap: var(--s6);">

      <!-- ARTS -->
      <div class="glass-card" style="padding: 0; overflow: hidden; border-top: 4px solid #e07a9e;">
        <div style="padding: var(--s5); background: rgba(224, 122, 158, 0.1); display: flex; align-items: center; justify-content: space-between;">
           <h2 style="font-size: var(--fz-xl); color: #e07a9e; margin: 0;">Batxillerat d'Arts</h2>
        </div>
        <div style="padding: var(--s5); display: flex; flex-direction: column; gap: var(--s4);">
          
          <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.comunes}">
            ${t}
            <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2); column-count: 2; column-gap: 2rem;">
              ${o}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--s4);">
            <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.mod_ob}">
              ${a}
              <p style="font-size: 12px; color: var(--t-3); margin-bottom: 5px;">Es fa obligatòriament per pertànyer a aquesta modalitat segons la via.</p>
              <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2);">
                <li><strong>Via Plàstica:</strong> Dibuix Artístic (I i II)</li>
                <li><strong>Via Escènica:</strong> Anàlisi Musical (I i II) o Arts Escèniques (I i II)</li>
              </ul>
            </div>
            
            <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.mod_op}">
              ${n}
              <p style="font-size: 12px; color: var(--t-3); margin-bottom: 5px;">S'han d'escollir 2 matèries més d'aquesta llista.</p>
              <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2);">
                <li>Dibuix Tècnic Aplicat / Volum</li>
                <li>Cultura Audiovisual / Fonaments Art</li>
                <li>Cor i Tècnica / Llenguatge i Pràctica Musical</li>
                <li>Disseny / Història de l'Art</li>
              </ul>
            </div>
          </div>

          <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.espec}">
            ${s}
             <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2); column-count: 2; column-gap: 2rem;">
              ${c}
            </ul>
          </div>

        </div>
      </div>

      <!-- CIENCIES -->
      <div class="glass-card" style="padding: 0; overflow: hidden; border-top: 4px solid #3dc7a0;">
        <div style="padding: var(--s5); background: rgba(61, 199, 160, 0.1); display: flex; align-items: center; justify-content: space-between;">
           <h2 style="font-size: var(--fz-xl); color: #3dc7a0; margin: 0;">Ciències i Tecnologia</h2>
        </div>
        <div style="padding: var(--s5); display: flex; flex-direction: column; gap: var(--s4);">
          
          <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.comunes}">
            ${t}
            <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2); column-count: 2; column-gap: 2rem;">
              ${o}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--s4);">
            <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.mod_ob}">
              ${a}
              <p style="font-size: 12px; color: var(--t-3); margin-bottom: 5px;">Troncal totalment obligatòria.</p>
              <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2);">
                <li>Matemàtiques I i II</li>
              </ul>
            </div>
            
            <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.mod_op}">
              ${n}
              <p style="font-size: 12px; color: var(--t-3); margin-bottom: 5px;">S'han d'escollir 2 matèries més d'aquesta llista.</p>
              <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2);">
                <li>Biologia / Geologia i Medi Ambient</li>
                <li>Física / Química</li>
                <li>Dibuix Tècnic I i II</li>
                <li>Tecnologia i Enginyeria I i II</li>
              </ul>
            </div>
          </div>

          <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.espec}">
            ${s}
             <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2); column-count: 2; column-gap: 2rem;">
              <li>Biologia Humana / Robòtica / Programació</li>
              ${c}
            </ul>
          </div>

        </div>
      </div>

      <!-- Humanitats / Socials -->
      <div class="glass-card" style="padding: 0; overflow: hidden; border-top: 4px solid #e8b97b;">
        <div style="padding: var(--s5); background: rgba(232, 185, 123, 0.1); display: flex; align-items: center; justify-content: space-between;">
           <h2 style="font-size: var(--fz-xl); color: #e8b97b; margin: 0;">Humanitats i Ciències Socials</h2>
        </div>
        <div style="padding: var(--s5); display: flex; flex-direction: column; gap: var(--s4);">
          
          <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.comunes}">
            ${t}
            <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2); column-count: 2; column-gap: 2rem;">
              ${o}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--s4);">
            <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.mod_ob}">
              ${a}
              <p style="font-size: 12px; color: var(--t-3); margin-bottom: 5px;">Depèn de la tria de via:</p>
              <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2);">
                <li><strong>Via Humanitats:</strong> Llatí I i II</li>
                <li><strong>Via Socials:</strong> Matemàtiques Aplicades CC. Socials I i II</li>
              </ul>
            </div>
            
            <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.mod_op}">
              ${n}
              <p style="font-size: 12px; color: var(--t-3); margin-bottom: 5px;">S'han d'escollir 2 matèries més d'aquesta llista.</p>
              <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2);">
                <li>Grec I i II / Història de l'Art</li>
                <li>Literatura Universal / Geografía</li>
                <li>Economia / Empresa i Models de Negoci</li>
                <li>Funcionament de l'Empresa (2n)</li>
              </ul>
            </div>
          </div>

          <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.espec}">
            ${s}
             <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2); column-count: 2; column-gap: 2rem;">
              <li>Món Clàssic / Màrqueting / Sociologia</li>
              ${c}
            </ul>
          </div>

        </div>
      </div>

       <!-- General -->
      <div class="glass-card" style="padding: 0; overflow: hidden; border-top: 4px solid #a493f5;">
        <div style="padding: var(--s5); background: rgba(164, 147, 245, 0.1); display: flex; align-items: center; justify-content: space-between;">
           <h2 style="font-size: var(--fz-xl); color: #a493f5; margin: 0;">Batxillerat General</h2>
        </div>
        <div style="padding: var(--s5); display: flex; flex-direction: column; gap: var(--s4);">
          
          <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.comunes}">
            ${t}
            <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2); column-count: 2; column-gap: 2rem;">
              ${o}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--s4);">
            <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.mod_ob}">
              ${a}
              <p style="font-size: 12px; color: var(--t-3); margin-bottom: 5px;">Molt transversal.</p>
              <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2);">
                <li><strong>1r Batxillerat:</strong> Matemàtiques Generals</li>
                <li><strong>2n Batxillerat:</strong> Ciències Generals</li>
              </ul>
            </div>
            
            <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.mod_op}">
              ${n}
              <p style="font-size: 12px; color: var(--t-3); margin-bottom: 5px;">Diferent a la resta, permès triar de les altres modalitats.</p>
              <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2);">
                <li>Economia, Emprenedoria i Activitat Empresarial</li>
                <li>Moviments Culturals i Artístics</li>
                <li><em>O bé agafar directament assignatures restants d'Arts, CCSS o Ciències, barrejant.</em></li>
              </ul>
            </div>
          </div>

          <div style="padding: var(--s3) var(--s4); border-radius: var(--r2); ${e.espec}">
            ${s}
             <ul style="margin: 0; padding-left: 1.2rem; font-size: var(--fz-sm); color: var(--t-2); column-count: 2; column-gap: 2rem;">
              ${c}
            </ul>
          </div>

        </div>
      </div>

    </div>
  `}function $E(i){i.innerHTML=`
    <div class="section-header">
      <h1 class="section-title">
        <span class="section-title-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
            <line x1="8" y1="6" x2="16" y2="6"/>
            <line x1="16" y1="14" x2="16" y2="14"/>
            <line x1="8" y1="18" x2="16" y2="18"/>
            <line x1="8" y1="14" x2="8" y2="14"/>
            <line x1="12" y1="14" x2="12" y2="14"/>
            <line x1="8" y1="10" x2="8.01" y2="10"/>
            <line x1="12" y1="10" x2="12.01" y2="10"/>
            <line x1="16" y1="10" x2="16.01" y2="10"/>
          </svg>
        </span>
        Calculadora Selectivitat / PAU
      </h1>
      <p class="section-subtitle">Introdueix les teves notes i simula la teva Nota d'Admissió Final (Ponderada sobre 14).</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--s6);">
      
      <!-- Controls -->
      <div style="display: flex; flex-direction: column; gap: var(--s4);">
        
        <!-- Batxillerat -->
        <div class="glass-card" style="padding: var(--s5);">
          <h3 style="font-size: var(--fz-md); color: var(--blue-l); margin-bottom: var(--s4);">1. Etapa de Batxillerat</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--s3); margin-bottom: var(--s4);">
            <div class="form-group">
              <label class="form-label">Nota 1r Any</label>
              <input class="form-input" id="calc-batx1" type="number" min="0" max="10" step="0.1" placeholder="Ex: 7.5">
            </div>
            <div class="form-group">
              <label class="form-label">Nota 2n Any</label>
              <input class="form-input" id="calc-batx2" type="number" min="0" max="10" step="0.1" placeholder="Ex: 8.2">
            </div>
          </div>
        </div>

        <!-- Fase General -->
        <div class="glass-card" style="padding: var(--s5);">
          <h3 style="font-size: var(--fz-md); color: var(--blue-l); margin-bottom: var(--s4);">2. Fase General PAU</h3>
          <p style="font-size: var(--fz-xs); color: var(--t-3); margin-bottom: var(--s3);">Català, Castellà, Estrangera, Història i Matèria Troncal.</p>
          <div class="form-group">
            <label class="form-label">Nota Mitjana Fase General</label>
            <input class="form-input" id="calc-fgen" type="number" min="0" max="10" step="0.1" placeholder="Ex: 6.8">
          </div>
        </div>

        <!-- Fase Específica -->
        <div class="glass-card" style="padding: var(--s5);">
          <h3 style="font-size: var(--fz-md); color: var(--blue-l); margin-bottom: var(--s4);">3. Fase Específica (Optatives)</h3>
          <p style="font-size: var(--fz-xs); color: var(--t-3); margin-bottom: var(--s3);">Les optatives pugen nota NOMÉS si treus un 5 o més. Pots triar si ponderen per 0.1 o 0.2.</p>
          
          <div style="display: flex; gap: var(--s3); margin-bottom: var(--s4);">
            <div class="form-group" style="flex: 2;">
              <label class="form-label">Optativa 1 (Nota)</label>
              <input class="form-input" id="calc-opt1" type="number" min="0" max="10" step="0.1" placeholder="0 - 10">
            </div>
            <div class="form-group" style="flex: 1;">
              <label class="form-label">Pondera</label>
              <select class="form-select" id="calc-pond1">
                <option value="0.2">x0.2</option>
                <option value="0.1">x0.1</option>
              </select>
            </div>
          </div>

          <div style="display: flex; gap: var(--s3);">
            <div class="form-group" style="flex: 2;">
              <label class="form-label">Optativa 2 (Nota)</label>
              <input class="form-input" id="calc-opt2" type="number" min="0" max="10" step="0.1" placeholder="0 - 10">
            </div>
            <div class="form-group" style="flex: 1;">
              <label class="form-label">Pondera</label>
              <select class="form-select" id="calc-pond2">
                <option value="0.2">x0.2</option>
                <option value="0.1">x0.1</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Resultats Visuals -->
      <div style="display: flex; flex-direction: column; gap: var(--s4);">
        <div class="glass-card" style="padding: var(--s6); flex: 1; display: flex; flex-direction: column; justify-content: center; background: rgba(74,127,212,.05); border-color: rgba(74,127,212,.2); position: relative; overflow: hidden;">
          
          <div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: rgba(74,127,212,0.1); border-radius: 50%; filter: blur(40px);"></div>

          <h2 style="font-size: var(--fz-xl); margin-bottom: var(--s6); text-align: center; color: var(--t-1);">Resultats Acadèmics</h2>
          
          <div style="display: flex; justify-content: space-between; margin-bottom: var(--s2); font-size: var(--fz-sm);">
            <span style="color: var(--t-2);">Mitjana Batxillerat:</span>
            <span id="res-batx" style="font-weight: var(--fw-7); color: var(--t-1);">--</span>
          </div>
          
          <div style="display: flex; justify-content: space-between; margin-bottom: var(--s2); font-size: var(--fz-sm);">
            <span style="color: var(--t-2);">Nota d'Accés (Fase Gen + Batx):</span>
            <span id="res-acc" style="font-weight: var(--fw-7); color: var(--t-1);">-- / 10</span>
          </div>

          <div style="height: 1px; background: rgba(255,255,255,.1); margin: var(--s4) 0;"></div>

          <div style="display: flex; justify-content: space-between; margin-bottom: var(--s2); font-size: var(--fz-sm);">
            <span style="color: var(--t-2);">Suma Optativa 1 (+):</span>
            <span id="res-op1" style="font-weight: var(--fw-7); color: var(--teal-l);">0.00</span>
          </div>
          
          <div style="display: flex; justify-content: space-between; margin-bottom: var(--s6); font-size: var(--fz-sm);">
            <span style="color: var(--t-2);">Suma Optativa 2 (+):</span>
            <span id="res-op2" style="font-weight: var(--fw-7); color: var(--teal-l);">0.00</span>
          </div>

          <div style="text-align: center; margin-top: auto; padding: var(--s5); background: var(--bg-1); border-radius: var(--r3); border: 2px solid rgba(74,127,212,.3); box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
            <div style="font-size: var(--fz-sm); color: var(--t-3); margin-bottom: var(--s2); text-transform: uppercase; letter-spacing: 1px;">Suma Definitiva d'Admissió</div>
            <div id="res-final" style="font-size: 3.5rem; font-weight: var(--fw-8); color: var(--blue-l); letter-spacing: -1px; font-variant-numeric: tabular-nums; text-shadow: 0 2px 10px rgba(74,127,212,0.3);">
               0.000
            </div>
            <div style="font-size: var(--fz-xs); color: var(--t-3); margin-top: var(--s2);">Sobre 14.000 punts</div>
          </div>

        </div>
      </div>
    </div>
  `;const e=i.querySelector("#calc-batx1"),t=i.querySelector("#calc-batx2"),a=i.querySelector("#calc-fgen"),n=i.querySelector("#calc-opt1"),s=i.querySelector("#calc-pond1"),o=i.querySelector("#calc-opt2"),c=i.querySelector("#calc-pond2"),l=i.querySelector("#res-batx"),d=i.querySelector("#res-acc"),h=i.querySelector("#res-op1"),f=i.querySelector("#res-op2"),g=i.querySelector("#res-final"),b=()=>{let _=parseFloat(e.value),w=parseFloat(t.value),q=parseFloat(a.value),U=parseFloat(n.value),N=parseFloat(s.value),O=parseFloat(o.value),J=parseFloat(c.value),X=0,j=0,C=0;isNaN(_)||(C+=_,j++),isNaN(w)||(C+=w,j++),j>0&&(X=C/j);let v=X;isNaN(q)||(v=X*.6+q*.4);let y=0,A=0;!isNaN(U)&&U>=5&&(y=U*N),!isNaN(O)&&O>=5&&(A=O*J);let S=v+y+A;S>14&&(S=14),l.textContent=X>0?X.toFixed(2):"--",d.textContent=v>0?v.toFixed(2):"-- / 10",h.textContent=y>0?"+"+y.toFixed(2):"0.00",f.textContent=A>0?"+"+A.toFixed(2):"0.00",g.textContent=S>0?S.toFixed(3):"0.000"};[e,t,a,n,s,o,c].forEach(_=>{_.addEventListener("input",b)})}function jE(i){let e=null,t=[],a=!1;const n=ii();if(!n){i.innerHTML='<div style="padding: 2rem; color: var(--red); text-align: center;">Cal iniciar sessió per accedir al xat.</div>';return}const s=n.classeActiva||"global_room";i.innerHTML=`
    <div class="section-header" style="margin-bottom: var(--s3);">
      <h1 class="section-title">
        <span class="section-title-icon" style="background: var(--blue);">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </span>
        Xat Virtual d'Orientació
      </h1>
      <p class="section-subtitle">Comparteix els teus dubtes, camins i notes de veu amb els teus companys.</p>
    </div>

    <!-- UI Xat estret i vertical com mòbil -->
    <div style="display: flex; justify-content: center;">
      <div style="width: 100%; max-width: 600px; display: flex; flex-direction: column; height: 65vh; min-height: 400px; max-height: 700px; background: var(--bg-1); border: 1px solid var(--border); border-radius: var(--r4); overflow: hidden; box-shadow: var(--sh-md);">
        
        <!-- Header del xat pròpiament -->
        <div style="padding: var(--s3) var(--s4); background: rgba(0,0,0,0.2); border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: var(--s3);">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--violet); display: flex; align-items: center; justify-content: center; font-weight: bold; color: white;">#</div>
          <div>
            <div style="font-size: var(--fz-sm); font-weight: var(--fw-7); color: var(--t-1);">Sala: ${s==="global_room"?"Global":"La meva aula"}</div>
            <div style="font-size: 10px; color: var(--t-3);">Connectat com a ${n.nom}</div>
          </div>
        </div>

        <!-- Missatges -->
        <div id="xat-messages" style="flex: 1; padding: var(--s4); overflow-y: auto; display: flex; flex-direction: column; gap: var(--s4); background: url('data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.03)"/></svg>'); scroll-behavior: smooth;">
          <div style="text-align: center; color: var(--t-3); font-size: var(--fz-xs); margin-top: 2rem;">Cercant missatges...</div>
        </div>

        <!-- Input Area molt bonica -->
        <div style="padding: var(--s3); background: rgba(0,0,0,0.15); border-top: 1px solid var(--border); display: flex; gap: var(--s2); align-items: center;">
          
          <button id="btn-share-cami" class="btn btn--secondary" title="Compartir el meu Camí" style="background: rgba(255,255,255,0.1); border: none; border-radius: 50%; width: 40px; height: 40px; padding: 0; display: flex; align-items: center; justify-content: center; color: var(--amber-l);">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> 
          </button>

          <input type="text" id="xat-input" style="flex: 1; border-radius: 20px; padding: 10px 15px; border: 1px solid var(--border); background: var(--bg-1); color: var(--t-1); outline: none; font-size: var(--fz-sm);" placeholder="Escriu missatge..." autocomplete="off">
          
          <button id="btn-record-audio" title="Gravar Nota de Veu" style="cursor: pointer; border: none; background: transparent; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: var(--t-3); transition: 0.2s;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
          </button>

          <button id="btn-send-txt" style="cursor: pointer; border: none; border-radius: 50%; width: 40px; height: 40px; background: var(--blue-d); color: white; display: flex; align-items: center; justify-content: center; transition: 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>

        </div>
      </div>
    </div>
  `;const o=i.querySelector("#xat-messages"),c=i.querySelector("#xat-input"),l=i.querySelector("#btn-send-txt"),d=i.querySelector("#btn-share-cami"),h=i.querySelector("#btn-record-audio");function f(b){if(b.length===0){o.innerHTML='<div style="text-align: center; color: var(--t-3); font-size: var(--fz-xs); margin-top: 2rem;">Encara no hi ha cap missatge. Sigues el primer!</div>';return}o.innerHTML=b.map(_=>{const w=_.alumneId===n.uid||_.alumneNom===n.nom,q=_.alumneNom?_.alumneNom.charAt(0).toUpperCase():"?";let U="";if(_.tipus==="text")U=`<p style="margin: 0; line-height: 1.4; word-break: break-word;">${_.contingut}</p>`;else if(_.tipus==="audio")U=`
          <div style="display: flex; flex-direction: column; gap: 4px; min-width: 200px;">
            <div style="font-size: 10px; opacity: 0.7; margin-bottom: 2px;">▶️ Nota de veu</div>
            <!-- Custom CSS styles makes audio tag fit nicely -->
            <audio controls src="${_.contingut}" style="width: 100%; height: 35px; outline: none;"></audio>
          </div>
        `;else if(_.tipus==="cami"){let J;try{J=JSON.parse(_.contingut)}catch{J={}}const X=Object.keys(J).filter(C=>J[C]==="completat"||J[C]==="en_curs");let j="";X.length?j=X.map(C=>{const v=ta[C];return`<span style="display: inline-block; padding: 3px 8px; border-radius: 12px; background: rgba(0,0,0,.2); font-size: 11px; flex-shrink: 0; margin-top: 4px; border: 1px solid rgba(255,255,255,0.1);">${v?v.label:C}</span>`}).join(" "):j='<span style="font-size: 11px; opacity: 0.6;">Sense etapes afegides</span>',U=`
          <div style="min-width: 200px; padding: var(--s2); border-radius: var(--r2); background: rgba(0,0,0,.15); border: 1px solid rgba(255,255,255,.05); box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);">
            <div style="font-weight: 600; font-size: 12px; margin-bottom: 6px; color: ${w?"#fff":"var(--amber-l)"}; display: flex; align-items: center; gap: 5px;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              Camí de ${_.alumneNom}
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">${j}</div>
          </div>
        `}const N=new Date(_.time),O=("0"+N.getHours()).slice(-2)+":"+("0"+N.getMinutes()).slice(-2);return w?`
          <div style="display: flex; gap: 8px; align-self: flex-end; max-width: 85%;">
            <div style="display: flex; flex-direction: column; align-items: flex-end;">
              <div style="
                background: linear-gradient(135deg, var(--blue-l), var(--blue-d));
                color: white;
                padding: 10px 14px;
                border-radius: 18px;
                border-bottom-right-radius: 4px;
                font-size: var(--fz-sm);
                box-shadow: 0 3px 6px rgba(0,0,0,0.15);
              ">
                ${U}
              </div>
              <span style="font-size: 9px; color: var(--t-3); margin-top: 4px;">${O}</span>
            </div>
          </div>
        `:`
          <div style="display: flex; gap: 8px; align-self: flex-start; max-width: 85%;">
            <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--bg-3); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; color: var(--t-2); flex-shrink: 0; margin-top: 5px;">
              ${q}
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-start;">
              <span style="font-size: 10px; color: var(--t-2); font-weight: 600; margin-bottom: 3px; margin-left: 2px;">${_.alumneNom}</span>
              <div style="
                background: var(--bg-2);
                border: 1px solid var(--border);
                color: var(--t-1);
                padding: 10px 14px;
                border-radius: 18px;
                border-bottom-left-radius: 4px;
                font-size: var(--fz-sm);
                box-shadow: 0 3px 6px rgba(0,0,0,0.1);
              ">
                ${U}
              </div>
              <span style="font-size: 9px; color: var(--t-3); margin-top: 4px;">${O}</span>
            </div>
          </div>
        `}).join(""),o.scrollTop=o.scrollHeight}s1(s,b=>{f(b)});async function g(){const b=c.value.trim();if(b){c.value="",l.style.transform="scale(0.9)",setTimeout(()=>l.style.transform="scale(1)",150);try{await Tr(s,n.uid||"anon",n.nom||"Anònim","text",b)}catch(_){console.error(_),alert("Error en enviar el missatge (Firestore): "+_.message+'\\n\\nAssegurat que les regles de Firebase (Rules) permeten read/write a la col·lecció "messages".')}}}l.addEventListener("click",g),c.addEventListener("keypress",b=>{b.key==="Enter"&&g()}),d.addEventListener("click",async()=>{if(!n.uid)return alert("Sessió incompleta.");d.style.transform="scale(0.9)";try{const b=await D0(n.uid);await Tr(s,n.uid,n.nom||"Anònim","cami",JSON.stringify(b))}catch(b){console.error(b),alert("Error enviant el camí: "+b.message+'\\n\\nAssegurat que les regles de Firebase permeten escriure a "messages".')}setTimeout(()=>d.style.transform="scale(1)",150)}),h.addEventListener("click",async()=>{if(a)e&&e.state!=="inactive"&&e.stop(),a=!1,h.style.color="var(--t-3)",h.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>';else try{const b=await navigator.mediaDevices.getUserMedia({audio:!0});e=new MediaRecorder(b,{mimeType:"audio/webm"}),t=[],e.ondataavailable=_=>{_.data&&_.data.size>0&&t.push(_.data)},e.onstop=async()=>{const _=new Blob(t,{type:"audio/webm"}),w=new FileReader;w.readAsDataURL(_),w.onloadend=async()=>{const q=w.result;if(b.getTracks().forEach(U=>U.stop()),t.length>0)try{await Tr(s,n.uid||"anon",n.nom||"Anònim","audio",q)}catch(U){console.error(U),alert("Error enviant lactual àudio (Firestore): "+U.message)}}},e.start(250),a=!0,h.style.color="var(--red-l)",h.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2" ry="2"/></svg>'}catch(b){alert("Permís de micròfon denegat o error ("+b.message+")")}})}const $n=document.getElementById("auth-screen"),K0=document.getElementById("app"),ps=new Set;function wr(i){document.querySelectorAll(".nav-btn[data-section]").forEach(t=>t.classList.toggle("active",t.dataset.section===i)),document.querySelectorAll(".app-section").forEach(t=>t.classList.toggle("active",t.id===`section-${i}`));const e=document.getElementById(`section-${i}`);if(e){if(!ps.has(i))switch(ps.add(i),i){case"itineraris":E1(e);break;case"cami":PE(e);break;case"noms":F1(e);break;case"pissarra":z1(e);break;case"recorreguts":Q1(e);break;case"mapa":Y1(e);break;case"comparador":rE(e);break;case"simulador":lE(e);break;case"batxillerat":GE(e);break;case"calculadora":$E(e);break;case"xat":jE(e);break;case"planner":gE(e);break;case"classes":EE(e);break;case"tasques":_E(e);break;case"ponderacions":VE(e);break;case"notestall":NE(e);break;case"families":BE(e);break}i==="mapa"&&Z1(e)}}function nd(i){const e=document.getElementById("user-name"),t=document.getElementById("user-rol"),a=document.getElementById("user-avatar"),n=document.getElementById("brand-subtitle"),s=document.getElementById("btn-switch-rol"),o=(i==null?void 0:i.rol)==="professor"?"Docent":(i==null?void 0:i.rol)==="alumne"?"Alumne/a":"—",c=(i==null?void 0:i.rol)==="professor"?"alumne":"professor",l=(i==null?void 0:i.rol)==="professor"?"Mode alumne":"Mode docent";e&&(e.textContent=(i==null?void 0:i.nom)||"—"),t&&(t.textContent=o),n&&(n.textContent=`Olot · ${o}`),a&&(a.textContent=((i==null?void 0:i.nom)||"?")[0].toUpperCase()),s&&(s.title=`Canviar a ${l}`,s.dataset.newRol=c,s.innerHTML=`
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
        <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
      ${l}`)}function sd(i,e){var n,s,o,c;(n=document.getElementById("app-modal"))==null||n.remove();const t=document.createElement("div");t.id="app-modal",t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="modal-box">
      <p class="modal-msg">${i}</p>
      <div class="modal-actions">
        <button class="btn btn--ghost" id="modal-cancel">Cancel·lar</button>
        <button class="btn btn--danger" id="modal-confirm">Confirmar</button>
      </div>
    </div>`,document.body.appendChild(t);const a=()=>t.remove();(s=t.querySelector("#modal-cancel"))==null||s.addEventListener("click",a),(o=t.querySelector(".modal-backdrop"))==null||o.addEventListener("click",a),(c=t.querySelector("#modal-confirm"))==null||c.addEventListener("click",()=>{a(),e()}),setTimeout(()=>{var l;return(l=t.querySelector("#modal-confirm"))==null?void 0:l.focus()},50)}function Q0(i){var e,t;$n.style.display="none",K0.style.display="",nd(i),document.querySelectorAll(".nav-btn[data-section]").forEach(a=>{a.addEventListener("click",()=>wr(a.dataset.section))}),wr("itineraris"),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",()=>{sd("Vols tancar la sessió?",async()=>{await h1()})}),(t=document.getElementById("btn-switch-rol"))==null||t.addEventListener("click",async a=>{const n=a.currentTarget.dataset.newRol;if(!n)return;sd(`Canviar a ${n==="professor"?"mode docent":"mode alumne"}?`,async()=>{try{await m1(n);const o=ii();ps.clear(),nd(o),wr("itineraris")}catch(o){console.error("Error canviant rol:",o)}})})}function HE(){$n.innerHTML="",$n.style.display="",K0.style.display="none",ps.clear(),f1($n,i=>Q0(i))}c1((i,e)=>{Q0(e)},()=>{HE()});
