(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const vo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},iu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},wo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,h=r>>2,l=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[h],n[l],n[d],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):iu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||l==null)throw new ru;const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const E=u<<6&192|l;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ru extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ou=function(e){const t=vo(e);return wo.encodeByteArray(t,!0)},yn=function(e){return ou(e).replace(/\./g,"")},au=function(e){try{return wo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function cu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uu=()=>cu().__FIREBASE_DEFAULTS__,hu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},lu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&au(e[1]);return t&&JSON.parse(t)},Eo=()=>{try{return uu()||hu()||lu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},du=e=>{var t,n;return(n=(t=Eo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},fu=e=>{const t=du(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},pu=()=>{var e;return(e=Eo())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function mu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[yn(JSON.stringify(n)),yn(JSON.stringify(o)),a].join(".")}function yu(){try{return typeof indexedDB=="object"}catch{return!1}}function vu(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="FirebaseError";class ce extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=wu,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Eu(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ce(i,a,s)}}function Eu(e,t){return e.replace(Tu,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Tu=/\{\$([^}]+)}/g;function Cs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(ur(r)&&ur(o)){if(!Cs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ur(e){return e!==null&&typeof e=="object"}/**
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
 */function Lt(e){return e&&e._delegate?e._delegate:e}class Ce{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class Iu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new gu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bu(t))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Dt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Dt){return this.instances.has(t)}getOptions(t=Dt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Au(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Dt){return this.component?this.component.multipleInstances?t:Dt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Au(e){return e===Dt?void 0:e}function bu(e){return e.instantiationMode==="EAGER"}/**
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
 */class Su{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Iu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const Cu={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},_u=D.INFO,Du={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Nu=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Du[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Io{constructor(t){this.name=t,this._logLevel=_u,this._logHandler=Nu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const ku=(e,t)=>t.some(n=>e instanceof n);let hr,lr;function xu(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ru(){return lr||(lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ao=new WeakMap,_s=new WeakMap,bo=new WeakMap,ls=new WeakMap,oi=new WeakMap;function Mu(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(yt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ao.set(n,e)}).catch(()=>{}),oi.set(t,e),t}function Ou(e){if(_s.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});_s.set(e,t)}let Ds={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return _s.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Lu(e){Ds=e(Ds)}function $u(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ds(this),t,...n);return bo.set(s,t.sort?t.sort():[t]),yt(s)}:Ru().includes(e)?function(...t){return e.apply(ds(this),t),yt(Ao.get(this))}:function(...t){return yt(e.apply(ds(this),t))}}function Fu(e){return typeof e=="function"?$u(e):(e instanceof IDBTransaction&&Ou(e),ku(e,xu())?new Proxy(e,Ds):e)}function yt(e){if(e instanceof IDBRequest)return Mu(e);if(ls.has(e))return ls.get(e);const t=Fu(e);return t!==e&&(ls.set(e,t),oi.set(t,e)),t}const ds=e=>oi.get(e);function Pu(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=yt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(yt(o.result),c.oldVersion,c.newVersion,yt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Vu=["get","getKey","getAll","getAllKeys","count"],Uu=["put","add","delete","clear"],fs=new Map;function dr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fs.get(t))return fs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Uu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Vu.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return fs.set(t,r),r}Lu(e=>({...e,get:(t,n,s)=>dr(t,n)||e.get(t,n,s),has:(t,n)=>!!dr(t,n)||e.has(t,n)}));/**
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
 */class Bu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function qu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ns="@firebase/app",fr="0.9.4";/**
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
 */const $t=new Io("@firebase/app"),ju="@firebase/app-compat",Hu="@firebase/analytics-compat",Ku="@firebase/analytics",Gu="@firebase/app-check-compat",zu="@firebase/app-check",Qu="@firebase/auth",Wu="@firebase/auth-compat",Xu="@firebase/database",Yu="@firebase/database-compat",Ju="@firebase/functions",Zu="@firebase/functions-compat",th="@firebase/installations",eh="@firebase/installations-compat",nh="@firebase/messaging",sh="@firebase/messaging-compat",ih="@firebase/performance",rh="@firebase/performance-compat",oh="@firebase/remote-config",ah="@firebase/remote-config-compat",ch="@firebase/storage",uh="@firebase/storage-compat",hh="@firebase/firestore",lh="@firebase/firestore-compat",dh="firebase",fh="9.17.2";/**
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
 */const ks="[DEFAULT]",ph={[Ns]:"fire-core",[ju]:"fire-core-compat",[Ku]:"fire-analytics",[Hu]:"fire-analytics-compat",[zu]:"fire-app-check",[Gu]:"fire-app-check-compat",[Qu]:"fire-auth",[Wu]:"fire-auth-compat",[Xu]:"fire-rtdb",[Yu]:"fire-rtdb-compat",[Ju]:"fire-fn",[Zu]:"fire-fn-compat",[th]:"fire-iid",[eh]:"fire-iid-compat",[nh]:"fire-fcm",[sh]:"fire-fcm-compat",[ih]:"fire-perf",[rh]:"fire-perf-compat",[oh]:"fire-rc",[ah]:"fire-rc-compat",[ch]:"fire-gcs",[uh]:"fire-gcs-compat",[hh]:"fire-fst",[lh]:"fire-fst-compat","fire-js":"fire-js",[dh]:"fire-js-all"};/**
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
 */const vn=new Map,xs=new Map;function gh(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wn(e){const t=e.name;if(xs.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;xs.set(t,e);for(const n of vn.values())gh(n,e);return!0}function mh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const yh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new To("app","Firebase",yh);/**
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
 */class vh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ce("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const wh=fh;function So(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ks,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(n||(n=pu()),!n)throw vt.create("no-options");const r=vn.get(i);if(r){if(Cs(n,r.options)&&Cs(s,r.config))return r;throw vt.create("duplicate-app",{appName:i})}const o=new Su(i);for(const c of xs.values())o.addComponent(c);const a=new vh(n,s,o);return vn.set(i,a),a}function Eh(e=ks){const t=vn.get(e);if(!t&&e===ks)return So();if(!t)throw vt.create("no-app",{appName:e});return t}function Gt(e,t,n){var s;let i=(s=ph[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}wn(new Ce(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Th="firebase-heartbeat-database",Ih=1,_e="firebase-heartbeat-store";let ps=null;function Co(){return ps||(ps=Pu(Th,Ih,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch(e=>{throw vt.create("idb-open",{originalErrorMessage:e.message})})),ps}async function Ah(e){try{return(await Co()).transaction(_e).objectStore(_e).get(_o(e))}catch(t){if(t instanceof ce)$t.warn(t.message);else{const n=vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function pr(e,t){try{const s=(await Co()).transaction(_e,"readwrite");return await s.objectStore(_e).put(t,_o(e)),s.done}catch(n){if(n instanceof ce)$t.warn(n.message);else{const s=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(s.message)}}}function _o(e){return`${e.name}!${e.options.appId}`}/**
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
 */const bh=1024,Sh=30*24*60*60*1e3;class Ch{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Sh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gr(),{heartbeatsToSend:n,unsentEntries:s}=_h(this._heartbeatsCache.heartbeats),i=yn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gr(){return new Date().toISOString().substring(0,10)}function _h(e,t=bh){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),mr(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Dh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yu()?vu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ah(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function mr(e){return yn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Nh(e){wn(new Ce("platform-logger",t=>new Bu(t),"PRIVATE")),wn(new Ce("heartbeat",t=>new Ch(t),"PRIVATE")),Gt(Ns,fr,e),Gt(Ns,fr,"esm2017"),Gt("fire-js","")}Nh("");var kh="firebase",xh="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(kh,xh,"app");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gs;const En=window,Yt=En.trustedTypes,yr=Yt?Yt.createPolicy("lit-html",{createHTML:e=>e}):void 0,mt=`lit$${(Math.random()+"").slice(9)}$`,Do="?"+mt,Rh=`<${Do}>`,Jt=document,De=(e="")=>Jt.createComment(e),Ne=e=>e===null||typeof e!="object"&&typeof e!="function",No=Array.isArray,Mh=e=>No(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vr=/-->/g,wr=/>/g,_t=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Er=/'/g,Tr=/"/g,ko=/^(?:script|style|textarea|title)$/i,Oh=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Rs=Oh(1),ke=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Ir=new WeakMap,zt=Jt.createTreeWalker(Jt,129,null,!1),Lh=(e,t)=>{const n=e.length-1,s=[];let i,r=t===2?"<svg>":"",o=me;for(let c=0;c<n;c++){const u=e[c];let h,l,d=-1,g=0;for(;g<u.length&&(o.lastIndex=g,l=o.exec(u),l!==null);)g=o.lastIndex,o===me?l[1]==="!--"?o=vr:l[1]!==void 0?o=wr:l[2]!==void 0?(ko.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=_t):l[3]!==void 0&&(o=_t):o===_t?l[0]===">"?(o=i??me,d=-1):l[1]===void 0?d=-2:(d=o.lastIndex-l[2].length,h=l[1],o=l[3]===void 0?_t:l[3]==='"'?Tr:Er):o===Tr||o===Er?o=_t:o===vr||o===wr?o=me:(o=_t,i=void 0);const E=o===_t&&e[c+1].startsWith("/>")?" ":"";r+=o===me?u+Rh:d>=0?(s.push(h),u.slice(0,d)+"$lit$"+u.slice(d)+mt+E):u+mt+(d===-2?(s.push(void 0),c):E)}const a=r+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yr!==void 0?yr.createHTML(a):a,s]};let Ms=class xo{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let r=0,o=0;const a=t.length-1,c=this.parts,[u,h]=Lh(t,n);if(this.el=xo.createElement(u,s),zt.currentNode=this.el.content,n===2){const l=this.el.content,d=l.firstChild;d.remove(),l.append(...d.childNodes)}for(;(i=zt.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const l=[];for(const d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(mt)){const g=h[o++];if(l.push(d),g!==void 0){const E=i.getAttribute(g.toLowerCase()+"$lit$").split(mt),A=/([.?@])?(.*)/.exec(g);c.push({type:1,index:r,name:A[2],strings:E,ctor:A[1]==="."?Fh:A[1]==="?"?Vh:A[1]==="@"?Uh:$n})}else c.push({type:6,index:r})}for(const d of l)i.removeAttribute(d)}if(ko.test(i.tagName)){const l=i.textContent.split(mt),d=l.length-1;if(d>0){i.textContent=Yt?Yt.emptyScript:"";for(let g=0;g<d;g++)i.append(l[g],De()),zt.nextNode(),c.push({type:2,index:++r});i.append(l[d],De())}}}else if(i.nodeType===8)if(i.data===Do)c.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(mt,l+1))!==-1;)c.push({type:7,index:r}),l+=mt.length-1}r++}}static createElement(t,n){const s=Jt.createElement("template");return s.innerHTML=t,s}};function Zt(e,t,n=e,s){var i,r,o,a;if(t===ke)return t;let c=s!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[s]:n._$Cl;const u=Ne(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==u&&((r=c==null?void 0:c._$AO)===null||r===void 0||r.call(c,!1),u===void 0?c=void 0:(c=new u(e),c._$AT(e,n,s)),s!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[s]=c:n._$Cl=c),c!==void 0&&(t=Zt(e,c._$AS(e,t.values),c,s)),t}let $h=class{constructor(t,n){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var n;const{el:{content:s},parts:i}=this._$AD,r=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:Jt).importNode(s,!0);zt.currentNode=r;let o=zt.nextNode(),a=0,c=0,u=i[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new ai(o,o.nextSibling,this,t):u.type===1?h=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(h=new Bh(o,this,t)),this.u.push(h),u=i[++c]}a!==(u==null?void 0:u.index)&&(o=zt.nextNode(),a++)}return r}p(t){let n=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}},ai=class Ro{constructor(t,n,s,i){var r;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cm=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Zt(this,t,n),Ne(t)?t===q||t==null||t===""?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==ke&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mh(t)?this.k(t):this.g(t)}O(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==q&&Ne(this._$AH)?this._$AA.nextSibling.data=t:this.T(Jt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ms.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.p(s);else{const o=new $h(r,this),a=o.v(this.options);o.p(s),this.T(a),this._$AH=o}}_$AC(t){let n=Ir.get(t.strings);return n===void 0&&Ir.set(t.strings,n=new Ms(t)),n}k(t){No(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const r of t)i===n.length?n.push(s=new Ro(this.O(De()),this.O(De()),this,this.options)):s=n[i],s._$AI(r),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cm=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}},$n=class{constructor(t,n,s,i,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=Zt(this,t,n,0),o=!Ne(t)||t!==this._$AH&&t!==ke,o&&(this._$AH=t);else{const a=t;let c,u;for(t=r[0],c=0;c<r.length-1;c++)u=Zt(this,a[s+c],n,c),u===ke&&(u=this._$AH[c]),o||(o=!Ne(u)||u!==this._$AH[c]),u===q?t=q:t!==q&&(t+=(u??"")+r[c+1]),this._$AH[c]=u}o&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Fh=class extends $n{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}};const Ph=Yt?Yt.emptyScript:"";let Vh=class extends $n{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,Ph):this.element.removeAttribute(this.name)}},Uh=class extends $n{constructor(t,n,s,i,r){super(t,n,s,i,r),this.type=5}_$AI(t,n=this){var s;if((t=(s=Zt(this,t,n,0))!==null&&s!==void 0?s:q)===ke)return;const i=this._$AH,r=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,s;typeof this._$AH=="function"?this._$AH.call((s=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},Bh=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Zt(this,t)}};const Ar=En.litHtmlPolyfillSupport;Ar==null||Ar(Ms,ai),((gs=En.litHtmlVersions)!==null&&gs!==void 0?gs:En.litHtmlVersions=[]).push("2.6.1");const Fn=(e,t,n)=>{var s,i;const r=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new ai(t.insertBefore(De(),a),a,void 0,n??{})}return o._$AI(e),o};var qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,ci=ci||{},I=qh||self;function Tn(){}function Pn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function je(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function jh(e){return Object.prototype.hasOwnProperty.call(e,ms)&&e[ms]||(e[ms]=++Hh)}var ms="closure_uid_"+(1e9*Math.random()>>>0),Hh=0;function Kh(e,t,n){return e.call.apply(e.bind,arguments)}function Gh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Y(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=Kh:Y=Gh,Y.apply(null,arguments)}function an(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function G(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function bt(){this.s=this.s,this.o=this.o}var zh=0;bt.prototype.s=!1;bt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zh!=0)&&jh(this)};bt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ui(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function br(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Pn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function J(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var Qh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",Tn,t),I.removeEventListener("test",Tn,t)}catch{}return e}();function In(e){return/^[\s\xa0]*$/.test(e)}var Sr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ys(e,t){return e<t?-1:e>t?1:0}function Vn(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function at(e){return Vn().indexOf(e)!=-1}function hi(e){return hi[" "](e),e}hi[" "]=Tn;function Wh(e){var t=Jh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Xh=at("Opera"),te=at("Trident")||at("MSIE"),Oo=at("Edge"),Os=Oo||te,Lo=at("Gecko")&&!(Vn().toLowerCase().indexOf("webkit")!=-1&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),Yh=Vn().toLowerCase().indexOf("webkit")!=-1&&!at("Edge");function $o(){var e=I.document;return e?e.documentMode:void 0}var An;t:{var vs="",ws=function(){var e=Vn();if(Lo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Oo)return/Edge\/([\d\.]+)/.exec(e);if(te)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Yh)return/WebKit\/(\S+)/.exec(e);if(Xh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ws&&(vs=ws?ws[1]:""),te){var Es=$o();if(Es!=null&&Es>parseFloat(vs)){An=String(Es);break t}}An=vs}var Jh={};function Zh(){return Wh(function(){let e=0;const t=Sr(String(An)).split("."),n=Sr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=ys(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ys(i[2].length==0,r[2].length==0)||ys(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Ls;if(I.document&&te){var Cr=$o();Ls=Cr||parseInt(An,10)||void 0}else Ls=void 0;var tl=Ls;function xe(e,t){if(J.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Lo){t:{try{hi(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:el[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xe.X.h.call(this)}}G(xe,J);var el={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var He="closure_listenable_"+(1e6*Math.random()|0),nl=0;function sl(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++nl,this.ba=this.ea=!1}function Un(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function li(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Fo(e){const t={};for(const n in e)t[n]=e[n];return t}const _r="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Po(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<_r.length;r++)n=_r[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Bn(e){this.src=e,this.g={},this.h=0}Bn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Fs(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new sl(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function $s(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Mo(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Un(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Fs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var di="closure_lm_"+(1e6*Math.random()|0),Ts={};function Vo(e,t,n,s,i){if(s&&s.once)return Bo(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Vo(e,t[r],n,s,i);return null}return n=gi(n),e&&e[He]?e.N(t,n,je(s)?!!s.capture:!!s,i):Uo(e,t,n,!1,s,i)}function Uo(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=je(i)?!!i.capture:!!i,a=pi(e);if(a||(e[di]=a=new Bn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=il(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Qh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(jo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function il(){function e(n){return t.call(e.src,e.listener,n)}const t=rl;return e}function Bo(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Bo(e,t[r],n,s,i);return null}return n=gi(n),e&&e[He]?e.O(t,n,je(s)?!!s.capture:!!s,i):Uo(e,t,n,!0,s,i)}function qo(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)qo(e,t[r],n,s,i);else s=je(s)?!!s.capture:!!s,n=gi(n),e&&e[He]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Fs(r,n,s,i),-1<n&&(Un(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=pi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Fs(t,n,s,i)),(n=-1<e?t[e]:null)&&fi(n))}function fi(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[He])$s(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(jo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=pi(t))?($s(n,e),n.h==0&&(n.src=null,t[di]=null)):Un(e)}}}function jo(e){return e in Ts?Ts[e]:Ts[e]="on"+e}function rl(e,t){if(e.ba)e=!0;else{t=new xe(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&fi(e),e=n.call(s,t)}return e}function pi(e){return e=e[di],e instanceof Bn?e:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function gi(e){return typeof e=="function"?e:(e[Is]||(e[Is]=function(t){return e.handleEvent(t)}),e[Is])}function j(){bt.call(this),this.i=new Bn(this),this.P=this,this.I=null}G(j,bt);j.prototype[He]=!0;j.prototype.removeEventListener=function(e,t,n,s){qo(this,e,t,n,s)};function K(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new J(t,e);else if(t instanceof J)t.target=t.target||e;else{var i=t;t=new J(s,e),Po(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=cn(o,s,!0,t)&&i}if(o=t.g=e,i=cn(o,s,!0,t)&&i,i=cn(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=cn(o,s,!1,t)&&i}j.prototype.M=function(){if(j.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Un(n[s]);delete e.g[t],e.h--}}this.I=null};j.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};j.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function cn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&$s(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var mi=I.JSON.stringify;function ol(){var e=Go;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class al{constructor(){this.h=this.g=null}add(t,n){const s=Ho.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ho=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new cl,e=>e.reset());class cl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ul(e){I.setTimeout(()=>{throw e},0)}function Ko(e,t){Ps||hl(),Vs||(Ps(),Vs=!0),Go.add(e,t)}var Ps;function hl(){var e=I.Promise.resolve(void 0);Ps=function(){e.then(ll)}}var Vs=!1,Go=new al;function ll(){for(var e;e=ol();){try{e.h.call(e.g)}catch(n){ul(n)}var t=Ho;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Vs=!1}function qn(e,t){j.call(this),this.h=e||1,this.g=t||I,this.j=Y(this.lb,this),this.l=Date.now()}G(qn,j);y=qn.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),K(this,"tick"),this.ca&&(yi(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yi(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}y.M=function(){qn.X.M.call(this),yi(this),delete this.g};function vi(e,t,n){if(typeof e=="function")n&&(e=Y(e,n));else if(e&&typeof e.handleEvent=="function")e=Y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function zo(e){e.g=vi(()=>{e.g=null,e.i&&(e.i=!1,zo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class dl extends bt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zo(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Re(e){bt.call(this),this.h=e,this.g={}}G(Re,bt);var Dr=[];function Qo(e,t,n,s){Array.isArray(n)||(n&&(Dr[0]=n.toString()),n=Dr);for(var i=0;i<n.length;i++){var r=Vo(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Wo(e){li(e.g,function(t,n){this.g.hasOwnProperty(n)&&fi(t)},e),e.g={}}Re.prototype.M=function(){Re.X.M.call(this),Wo(this)};Re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jn(){this.g=!0}jn.prototype.Aa=function(){this.g=!1};function fl(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function pl(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Kt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ml(e,n)+(s?" "+s:"")})}function gl(e,t){e.info(function(){return"TIMEOUT: "+t})}jn.prototype.info=function(){};function ml(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return mi(n)}catch{return t}}var Vt={},Nr=null;function Hn(){return Nr=Nr||new j}Vt.Pa="serverreachability";function Xo(e){J.call(this,Vt.Pa,e)}G(Xo,J);function Me(e){const t=Hn();K(t,new Xo(t))}Vt.STAT_EVENT="statevent";function Yo(e,t){J.call(this,Vt.STAT_EVENT,e),this.stat=t}G(Yo,J);function tt(e){const t=Hn();K(t,new Yo(t,e))}Vt.Qa="timingevent";function Jo(e,t){J.call(this,Vt.Qa,e),this.size=t}G(Jo,J);function Ke(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Kn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Zo={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wi(){}wi.prototype.h=null;function kr(e){return e.h||(e.h=e.i())}function ta(){}var Ge={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ei(){J.call(this,"d")}G(Ei,J);function Ti(){J.call(this,"c")}G(Ti,J);var Us;function Gn(){}G(Gn,wi);Gn.prototype.g=function(){return new XMLHttpRequest};Gn.prototype.i=function(){return{}};Us=new Gn;function ze(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Re(this),this.O=yl,e=Os?125:void 0,this.T=new qn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ea}function ea(){this.i=null,this.g="",this.h=!1}var yl=45e3,Bs={},bn={};y=ze.prototype;y.setTimeout=function(e){this.O=e};function qs(e,t,n){e.K=1,e.v=Qn(dt(t)),e.s=n,e.P=!0,na(e,null)}function na(e,t){e.F=Date.now(),Qe(e),e.A=dt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),ha(n.i,"t",s),e.C=0,n=e.l.H,e.h=new ea,e.g=xa(e.l,n?t:null,!e.s),0<e.N&&(e.L=new dl(Y(e.La,e,e.g),e.N)),Qo(e.S,e.g,"readystatechange",e.ib),t=e.H?Fo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Me(),fl(e.j,e.u,e.A,e.m,e.U,e.s)}y.ib=function(e){e=e.target;const t=this.L;t&&ht(e)==3?t.l():this.La(e)};y.La=function(e){try{if(e==this.g)t:{const h=ht(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||Os||this.g&&(this.h.h||this.g.fa()||Or(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?Me(3):Me(2)),zn(this);var n=this.g.aa();this.Y=n;e:if(sa(this)){var s=Or(this.g);e="";var i=s.length,r=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),Ie(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,pl(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!In(a)){var u=a;break e}}u=null}if(n=u)Kt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,js(this,n);else{this.i=!1,this.o=3,tt(12),Nt(this),Ie(this);break t}}this.P?(ia(this,h,o),Os&&this.i&&h==3&&(Qo(this.S,this.T,"tick",this.hb),this.T.start())):(Kt(this.j,this.m,o,null),js(this,o)),h==4&&Nt(this),this.i&&!this.I&&(h==4?_a(this.l,this):(this.i=!1,Qe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Nt(this),Ie(this)}}}catch{}finally{}};function sa(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function ia(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=vl(e,n),i==bn){t==4&&(e.o=4,tt(14),s=!1),Kt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Bs){e.o=4,tt(15),Kt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Kt(e.j,e.m,i,null),js(e,i);sa(e)&&i!=bn&&i!=Bs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Di(t),t.K=!0,tt(11))):(Kt(e.j,e.m,n,"[Invalid Chunked Response]"),Nt(e),Ie(e))}y.hb=function(){if(this.g){var e=ht(this.g),t=this.g.fa();this.C<t.length&&(zn(this),ia(this,e,t),this.i&&e!=4&&Qe(this))}};function vl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?bn:(n=Number(t.substring(n,s)),isNaN(n)?Bs:(s+=1,s+n>t.length?bn:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.I=!0,Nt(this)};function Qe(e){e.V=Date.now()+e.O,ra(e,e.O)}function ra(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ke(Y(e.gb,e),t)}function zn(e){e.B&&(I.clearTimeout(e.B),e.B=null)}y.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(gl(this.j,this.A),this.K!=2&&(Me(),tt(17)),Nt(this),this.o=2,Ie(this)):ra(this,this.V-e)};function Ie(e){e.l.G==0||e.I||_a(e.l,e)}function Nt(e){zn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,yi(e.T),Wo(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function js(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Hs(n.h,e))){if(!e.J&&Hs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)_n(n),Yn(n);else break t;_i(n),tt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ke(Y(n.cb,n),6e3));if(1>=fa(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else kt(n,11)}else if((e.J||n.g==e)&&_n(n),!In(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=u[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var r=s.h;r.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ii(r,r.h),r.h=null))}if(s.D){const A=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.za=A,M(s.F,s.D,A))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=ka(s,s.H?s.ka:null,s.V),o.J){pa(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(zn(a),Qe(a)),s.g=o}else Sa(s);0<n.i.length&&Jn(n)}else u[0]!="stop"&&u[0]!="close"||kt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kt(n,7):Ci(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Me(4)}catch{}}function wl(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Pn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function El(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Pn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function oa(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Pn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=El(e),s=wl(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var aa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tl(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Rt){this.h=t!==void 0?t:e.h,Sn(this,e.j),this.s=e.s,this.g=e.g,Cn(this,e.m),this.l=e.l,t=e.i;var n=new Oe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xr(this,n),this.o=e.o}else e&&(n=String(e).match(aa))?(this.h=!!t,Sn(this,n[1]||"",!0),this.s=ve(n[2]||""),this.g=ve(n[3]||"",!0),Cn(this,n[4]),this.l=ve(n[5]||"",!0),xr(this,n[6]||"",!0),this.o=ve(n[7]||"")):(this.h=!!t,this.i=new Oe(null,this.h))}Rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(we(t,Rr,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(we(t,Rr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(we(n,n.charAt(0)=="/"?bl:Al,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",we(n,Cl)),e.join("")};function dt(e){return new Rt(e)}function Sn(e,t,n){e.j=n?ve(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Cn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xr(e,t,n){t instanceof Oe?(e.i=t,_l(e.i,e.h)):(n||(t=we(t,Sl)),e.i=new Oe(t,e.h))}function M(e,t,n){e.i.set(t,n)}function Qn(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ve(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function we(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Il),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Il(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Rr=/[#\/\?@]/g,Al=/[#\?:]/g,bl=/[#\?]/g,Sl=/[#\?@]/g,Cl=/#/g;function Oe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function St(e){e.g||(e.g=new Map,e.h=0,e.i&&Tl(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Oe.prototype;y.add=function(e,t){St(this),this.i=null,e=ue(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ca(e,t){St(e),t=ue(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ua(e,t){return St(e),t=ue(e,t),e.g.has(t)}y.forEach=function(e,t){St(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};y.oa=function(){St(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};y.W=function(e){St(this);let t=[];if(typeof e=="string")ua(this,e)&&(t=t.concat(this.g.get(ue(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return St(this),this.i=null,e=ue(this,e),ua(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function ha(e,t,n){ca(e,t),0<n.length&&(e.i=null,e.g.set(ue(e,t),ui(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function ue(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function _l(e,t){t&&!e.j&&(St(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(ca(this,s),ha(this,i,n))},e)),e.j=t}var Dl=class{constructor(t,n){this.h=t,this.g=n}};function la(e){this.l=e||Nl,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Nl=10;function da(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function fa(e){return e.h?1:e.g?e.g.size:0}function Hs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ii(e,t){e.g?e.g.add(t):e.h=t}function pa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}la.prototype.cancel=function(){if(this.i=ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ga(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ui(e.i)}function Ai(){}Ai.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};Ai.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function kl(){this.g=new Ai}function xl(e,t,n){const s=n||"";try{oa(e,function(i,r){let o=i;je(i)&&(o=mi(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Rl(e,t){const n=new jn;if(I.Image){const s=new Image;s.onload=an(un,n,s,"TestLoadImage: loaded",!0,t),s.onerror=an(un,n,s,"TestLoadImage: error",!1,t),s.onabort=an(un,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=an(un,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function un(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function We(e){this.l=e.ac||null,this.j=e.jb||!1}G(We,wi);We.prototype.g=function(){return new Wn(this.l,this.j)};We.prototype.i=function(e){return function(){return e}}({});function Wn(e,t){j.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=bi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Wn,j);var bi=0;y=Wn.prototype;y.open=function(e,t){if(this.readyState!=bi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Le(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=bi};y.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Le(this)),this.g&&(this.readyState=3,Le(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ma(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function ma(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}y.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Xe(this):Le(this),this.readyState==3&&ma(this)}};y.Va=function(e){this.g&&(this.response=this.responseText=e,Xe(this))};y.Ua=function(e){this.g&&(this.response=e,Xe(this))};y.ga=function(){this.g&&Xe(this)};function Xe(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Le(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Le(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Ml=I.JSON.parse;function O(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ya,this.K=this.L=!1}G(O,j);var ya="",Ol=/^https?$/i,Ll=["POST","PUT"];y=O.prototype;y.Ka=function(e){this.L=e};y.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Us.g(),this.C=this.u?kr(this.u):kr(Us),this.g.onreadystatechange=Y(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Mr(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=I.FormData&&e instanceof I.FormData,!(0<=Mo(Ll,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ea(this),0<this.B&&((this.K=$l(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.qa,this)):this.A=vi(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Mr(this,r)}};function $l(e){return te&&Zh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.qa=function(){typeof ci<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function Mr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,va(e),Xn(e)}function va(e){e.D||(e.D=!0,K(e,"complete"),K(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),Xn(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),O.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?wa(this):this.fb())};y.fb=function(){wa(this)};function wa(e){if(e.h&&typeof ci<"u"&&(!e.C[1]||ht(e)!=4||e.aa()!=2)){if(e.v&&ht(e)==4)vi(e.Ha,0,e);else if(K(e,"readystatechange"),ht(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(aa)[1]||null;if(!i&&I.self&&I.self.location){var r=I.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ol.test(i?i.toLowerCase():"")}n=s}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var o=2<ht(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",va(e)}}finally{Xn(e)}}}}function Xn(e,t){if(e.g){Ea(e);const n=e.g,s=e.C[0]?Tn:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ea(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function ht(e){return e.g?e.g.readyState:0}y.aa=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Ml(t)}};function Or(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ya:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ta(e){let t="";return li(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Si(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Ta(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function ye(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ia(e){this.Ca=0,this.i=[],this.j=new jn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ye("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ye("baseRetryDelayMs",5e3,e),this.bb=ye("retryDelaySeedMs",1e4,e),this.$a=ye("forwardChannelMaxRetries",2,e),this.ta=ye("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new la(e&&e.concurrentRequestLimit),this.Fa=new kl,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=Ia.prototype;y.ma=8;y.G=1;function Ci(e){if(Aa(e),e.G==3){var t=e.U++,n=dt(e.F);M(n,"SID",e.I),M(n,"RID",t),M(n,"TYPE","terminate"),Ye(e,n),t=new ze(e,e.j,t,void 0),t.K=2,t.v=Qn(dt(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=xa(t.l,null),t.g.da(t.v)),t.F=Date.now(),Qe(t)}Na(e)}function Yn(e){e.g&&(Di(e),e.g.cancel(),e.g=null)}function Aa(e){Yn(e),e.u&&(I.clearTimeout(e.u),e.u=null),_n(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function Jn(e){da(e.h)||e.m||(e.m=!0,Ko(e.Ja,e),e.C=0)}function Fl(e,t){return fa(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ke(Y(e.Ja,e,t),Da(e,e.C)),e.C++,!0)}y.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ze(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Fo(r),Po(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ba(this,i,t),n=dt(this.F),M(n,"RID",e),M(n,"CVER",22),this.D&&M(n,"X-HTTP-Session-Id",this.D),Ye(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Ta(r)))+"&"+t:this.o&&Si(n,this.o,r)),Ii(this.h,i),this.Ya&&M(n,"TYPE","init"),this.O?(M(n,"$req",t),M(n,"SID","null"),i.Z=!0,qs(i,n,null)):qs(i,n,t),this.G=2}}else this.G==3&&(e?Lr(this,e):this.i.length==0||da(this.h)||Lr(this))};function Lr(e,t){var n;t?n=t.m:n=e.U++;const s=dt(e.F);M(s,"SID",e.I),M(s,"RID",n),M(s,"AID",e.T),Ye(e,s),e.o&&e.s&&Si(s,e.o,e.s),n=new ze(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ba(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Ii(e.h,n),qs(n,s,t)}function Ye(e,t){e.ia&&li(e.ia,function(n,s){M(t,s,n)}),e.l&&oa({},function(n,s){M(t,s,n)})}function ba(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Y(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const h=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{xl(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Sa(e){e.g||e.u||(e.Z=1,Ko(e.Ia,e),e.A=0)}function _i(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ke(Y(e.Ia,e),Da(e,e.A)),e.A++,!0)}y.Ia=function(){if(this.u=null,Ca(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ke(Y(this.eb,this),e)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tt(10),Yn(this),Ca(this))};function Di(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Ca(e){e.g=new ze(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=dt(e.sa);M(t,"RID","rpc"),M(t,"SID",e.I),M(t,"CI",e.L?"0":"1"),M(t,"AID",e.T),M(t,"TYPE","xmlhttp"),Ye(e,t),e.o&&e.s&&Si(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Qn(dt(t)),n.s=null,n.P=!0,na(n,e)}y.cb=function(){this.v!=null&&(this.v=null,Yn(this),_i(this),tt(19))};function _n(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function _a(e,t){var n=null;if(e.g==t){_n(e),Di(e),e.g=null;var s=2}else if(Hs(e.h,t))n=t.D,pa(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=Hn(),K(s,new Jo(s,n)),Jn(e)}else Sa(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&Fl(e,t)||s==2&&_i(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:kt(e,5);break;case 4:kt(e,10);break;case 3:kt(e,6);break;default:kt(e,2)}}}function Da(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function kt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Y(e.kb,e);n||(n=new Rt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Sn(n,"https"),Qn(n)),Rl(n.toString(),s)}else tt(2);e.G=0,e.l&&e.l.va(t),Na(e),Aa(e)}y.kb=function(e){e?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Na(e){if(e.G=0,e.la=[],e.l){const t=ga(e.h);(t.length!=0||e.i.length!=0)&&(br(e.la,t),br(e.la,e.i),e.h.i.length=0,ui(e.i),e.i.length=0),e.l.ua()}}function ka(e,t,n){var s=n instanceof Rt?dt(n):new Rt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Cn(s,s.m);else{var i=I.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Rt(null,void 0);s&&Sn(r,s),t&&(r.g=t),i&&Cn(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&M(s,n,t),M(s,"VER",e.ma),Ye(e,s),s}function xa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new O(new We({jb:!0})):new O(e.ra),t.Ka(e.H),t}function Ra(){}y=Ra.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function Dn(){if(te&&!(10<=Number(tl)))throw Error("Environmental error: no available transport.")}Dn.prototype.g=function(e,t){return new st(e,t)};function st(e,t){j.call(this),this.g=new Ia(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!In(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!In(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new he(this)}G(st,j);st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ka(e,null,e.V),Jn(e)};st.prototype.close=function(){Ci(this.g)};st.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=mi(e),e=n);t.i.push(new Dl(t.ab++,e)),t.G==3&&Jn(t)};st.prototype.M=function(){this.g.l=null,delete this.j,Ci(this.g),delete this.g,st.X.M.call(this)};function Ma(e){Ei.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(Ma,Ei);function Oa(){Ti.call(this),this.status=1}G(Oa,Ti);function he(e){this.g=e}G(he,Ra);he.prototype.xa=function(){K(this.g,"a")};he.prototype.wa=function(e){K(this.g,new Ma(e))};he.prototype.va=function(e){K(this.g,new Oa)};he.prototype.ua=function(){K(this.g,"b")};Dn.prototype.createWebChannel=Dn.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;Kn.NO_ERROR=0;Kn.TIMEOUT=8;Kn.HTTP_ERROR=6;Zo.COMPLETE="complete";ta.EventType=Ge;Ge.OPEN="a";Ge.CLOSE="b";Ge.ERROR="c";Ge.MESSAGE="d";j.prototype.listen=j.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.Oa;O.prototype.getLastErrorCode=O.prototype.Ea;O.prototype.getStatus=O.prototype.aa;O.prototype.getResponseJson=O.prototype.Sa;O.prototype.getResponseText=O.prototype.fa;O.prototype.send=O.prototype.da;O.prototype.setWithCredentials=O.prototype.Ka;var Pl=function(){return new Dn},Vl=function(){return Hn()},As=Kn,Ul=Zo,Bl=Vt,$r={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ql=We,hn=ta,jl=O;const Fr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let le="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Io("@firebase/firestore");function Pr(){return Ft.logLevel}function v(e,...t){if(Ft.logLevel<=D.DEBUG){const n=t.map(Ni);Ft.debug(`Firestore (${le}): ${e}`,...n)}}function ft(e,...t){if(Ft.logLevel<=D.ERROR){const n=t.map(Ni);Ft.error(`Firestore (${le}): ${e}`,...n)}}function Ks(e,...t){if(Ft.logLevel<=D.WARN){const n=t.map(Ni);Ft.warn(`Firestore (${le}): ${e}`,...n)}}function Ni(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${le}) INTERNAL ASSERTION FAILED: `+e;throw ft(t),new Error(t)}function x(e,t){e||T()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends ce{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Q.UNAUTHENTICATED))}shutdown(){}}class Kl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gl{constructor(t){this.t=t,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new wt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new wt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(x(typeof s.accessToken=="string"),new La(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return x(t===null||typeof t=="string"),new Q(t)}}class zl{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(x(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ql{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new zl(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xl{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(x(typeof n.token=="string"),this.A=n.token,new Wl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Yl(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function ee(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new m(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new m(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new m(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new m(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new P(0,0))}static max(){return new b(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return $e.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof $e?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class R extends $e{construct(t,n,s){return new R(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new m(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new R(n)}static emptyPath(){return new R([])}}const Jl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X extends $e{construct(t,n,s){return new X(t,n,s)}static isValidIdentifier(t){return Jl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new X(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new m(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new m(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new m(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new m(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new X(n)}static emptyPath(){return new X([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(R.fromString(t))}static fromName(t){return new w(R.fromString(t).popFirst(5))}static empty(){return new w(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&R.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return R.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new R(t.slice()))}}function Zl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=b.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new Tt(i,w.empty(),t)}function td(e){return new Tt(e.readTime,e.key,-1)}class Tt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Tt(b.min(),w.empty(),-1)}static max(){return new Tt(b.max(),w.empty(),-1)}}function ed(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==nd)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new p((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new p((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Ze(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class ki{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}ki.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Fe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Fe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Fe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function de(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Fa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e){return e==null}function Nn(e){return e===0&&1/e==-1/0}function rd(e){return typeof e=="number"&&Number.isInteger(e)&&!Nn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new od("Invalid base64 string: "+i):i}}(t);return new Z(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new Z(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Z.EMPTY_BYTE_STRING=new Z("");const ad=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(e){if(x(!!e),typeof e=="string"){let t=0;const n=ad.exec(e);if(x(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:$(e.seconds),nanos:$(e.nanos)}}function $(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ne(e){return typeof e=="string"?Z.fromBase64String(e):Z.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Va(e){const t=e.mapValue.fields.__previous_value__;return Pa(t)?Va(t):t}function Pe(e){const t=It(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pa(e)?4:cd(e)?9007199254740991:10:T()}function ut(e,t){if(e===t)return!0;const n=Pt(e);if(n!==Pt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Pe(e).isEqual(Pe(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=It(s.timestampValue),o=It(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ne(s.bytesValue).isEqual(ne(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return $(s.geoPointValue.latitude)===$(i.geoPointValue.latitude)&&$(s.geoPointValue.longitude)===$(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $(s.integerValue)===$(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=$(s.doubleValue),o=$(i.doubleValue);return r===o?Nn(r)===Nn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return ee(e.arrayValue.values||[],t.arrayValue.values||[],ut);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Vr(r)!==Vr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ut(r[a],o[a])))return!1;return!0}(e,t);default:return T()}}function Ve(e,t){return(e.values||[]).find(n=>ut(n,t))!==void 0}function se(e,t){if(e===t)return 0;const n=Pt(e),s=Pt(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=$(i.integerValue||i.doubleValue),a=$(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ur(e.timestampValue,t.timestampValue);case 4:return Ur(Pe(e),Pe(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(i,r){const o=ne(i),a=ne(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=N($(i.latitude),$(r.latitude));return o!==0?o:N($(i.longitude),$(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=se(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===ln.mapValue&&r===ln.mapValue)return 0;if(i===ln.mapValue)return 1;if(r===ln.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=N(a[h],u[h]);if(l!==0)return l;const d=se(o[a[h]],c[u[h]]);if(d!==0)return d}return N(a.length,u.length)}(e.mapValue,t.mapValue);default:throw T()}}function Ur(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=It(e),s=It(t),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function ie(e){return Gs(e)}function Gs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=It(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ne(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Gs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Gs(s.fields[a])}`;return r+"}"}(e.mapValue):T();var t,n}function Br(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function zs(e){return!!e&&"integerValue"in e}function xi(e){return!!e&&"arrayValue"in e}function qr(e){return!!e&&"nullValue"in e}function jr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function fn(e){return!!e&&"mapValue"in e}function Ae(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return de(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ae(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ae(e.arrayValue.values[n]);return t}return Object.assign({},e)}function cd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kn{constructor(t,n){this.position=t,this.inclusive=n}}function Hr(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=se(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kr(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ut(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ua{}class F extends Ua{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new hd(t,n,s):n==="array-contains"?new fd(t,s):n==="in"?new pd(t,s):n==="not-in"?new gd(t,s):n==="array-contains-any"?new md(t,s):new F(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new ld(t,s):new dd(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(se(n,this.value)):n!==null&&Pt(this.value)===Pt(n)&&this.matchesComparison(se(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ot extends Ua{constructor(t,n){super(),this.filters=t,this.op=n,this.ft=null}static create(t,n){return new ot(t,n)}matches(t){return Ba(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt(n=>n.isInequality());return t!==null?t.field:null}dt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Ba(e){return e.op==="and"}function qa(e){return ud(e)&&Ba(e)}function ud(e){for(const t of e.filters)if(t instanceof ot)return!1;return!0}function Qs(e){if(e instanceof F)return e.field.canonicalString()+e.op.toString()+ie(e.value);if(qa(e))return e.filters.map(t=>Qs(t)).join(",");{const t=e.filters.map(n=>Qs(n)).join(",");return`${e.op}(${t})`}}function ja(e,t){return e instanceof F?function(n,s){return s instanceof F&&n.op===s.op&&n.field.isEqual(s.field)&&ut(n.value,s.value)}(e,t):e instanceof ot?function(n,s){return s instanceof ot&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ja(r,s.filters[o]),!0):!1}(e,t):void T()}function Ha(e){return e instanceof F?function(t){return`${t.field.canonicalString()} ${t.op} ${ie(t.value)}`}(e):e instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(Ha).join(" ,")+"}"}(e):"Filter"}class hd extends F{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class ld extends F{constructor(t,n){super(t,"in",n),this.keys=Ka("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class dd extends F{constructor(t,n){super(t,"not-in",n),this.keys=Ka("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ka(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class fd extends F{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return xi(n)&&Ve(n.arrayValue,this.value)}}class pd extends F{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ve(this.value.arrayValue,n)}}class gd extends F{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ve(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ve(this.value.arrayValue,n)}}class md extends F{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!xi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ve(this.value.arrayValue,s))}}/**
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
 */class Qt{constructor(t,n="asc"){this.field=t,this.dir=n}}function yd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){this.comparator=t,this.root=n||H.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,H.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,H.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new dn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new dn(this.root,t,this.comparator,!1)}getReverseIterator(){return new dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new dn(this.root,t,this.comparator,!0)}}class dn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class H{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??H.RED,this.left=i??H.EMPTY,this.right=r??H.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new H(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return H.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,i){return this}insert(e,t,n){return new H(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gr(this.data.getIterator())}getIteratorFrom(t){return new Gr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof V)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new V(this.comparator);return n.data=t,n}}class Gr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.fields=t,t.sort(X.comparator)}static empty(){return new rt([])}unionWith(t){let n=new V(X.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new rt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ee(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.value=t}static empty(){return new it({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!fn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ae(n)}setAll(t){let n=X.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ae(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());fn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ut(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];fn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){de(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new it(Ae(this.value))}}function Ga(e){const t=[];return de(e.fields,(n,s)=>{const i=new X([n]);if(fn(s)){const r=Ga(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new W(t,0,b.min(),b.min(),b.min(),it.empty(),0)}static newFoundDocument(t,n,s,i){return new W(t,1,n,b.min(),s,i,0)}static newNoDocument(t,n){return new W(t,2,n,b.min(),b.min(),it.empty(),0)}static newUnknownDocument(t,n){return new W(t,3,n,b.min(),b.min(),it.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof W&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vd{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function zr(e,t=null,n=[],s=[],i=null,r=null,o=null){return new vd(e,t,n,s,i,r,o)}function Ri(e){const t=S(e);if(t._t===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Qs(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Zn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ie(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ie(s)).join(",")),t._t=n}return t._t}function Mi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!yd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ja(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Kr(e.startAt,t.startAt)&&Kr(e.endAt,t.endAt)}function Ws(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function wd(e,t,n,s,i,r,o,a){return new fe(e,t,n,s,i,r,o,a)}function Oi(e){return new fe(e)}function Qr(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Li(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ts(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function za(e){return e.collectionGroup!==null}function Wt(e){const t=S(e);if(t.wt===null){t.wt=[];const n=ts(t),s=Li(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new Qt(n)),t.wt.push(new Qt(X.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Qt(X.keyField(),r))}}}return t.wt}function pt(e){const t=S(e);if(!t.gt)if(t.limitType==="F")t.gt=zr(t.path,t.collectionGroup,Wt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Wt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Qt(r.field,o))}const s=t.endAt?new kn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new kn(t.startAt.position,t.startAt.inclusive):null;t.gt=zr(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.gt}function Xs(e,t){t.getFirstInequalityField(),ts(e);const n=e.filters.concat([t]);return new fe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ys(e,t,n){return new fe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function es(e,t){return Mi(pt(e),pt(t))&&e.limitType===t.limitType}function Qa(e){return`${Ri(pt(e))}|lt:${e.limitType}`}function Js(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Ha(s)).join(", ")}]`),Zn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ie(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ie(s)).join(",")),`Target(${n})`}(pt(e))}; limitType=${e.limitType})`}function ns(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Wt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Hr(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Wt(n),s)||n.endAt&&!function(i,r,o){const a=Hr(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Wt(n),s))}(e,t)}function Ed(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Wa(e){return(t,n)=>{let s=!1;for(const i of Wt(e)){const r=Td(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Td(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?se(a,c):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nn(t)?"-0":t}}function Ya(e){return{integerValue:""+e}}function Id(e,t){return rd(t)?Ya(t):Xa(e,t)}/**
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
 */class ss{constructor(){this._=void 0}}function Ad(e,t,n){return e instanceof xn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Ue?Za(e,t):e instanceof Be?tc(e,t):function(s,i){const r=Ja(s,i),o=Wr(r)+Wr(s.It);return zs(r)&&zs(s.It)?Ya(o):Xa(s.Tt,o)}(e,t)}function bd(e,t,n){return e instanceof Ue?Za(e,t):e instanceof Be?tc(e,t):n}function Ja(e,t){return e instanceof Rn?zs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class xn extends ss{}class Ue extends ss{constructor(t){super(),this.elements=t}}function Za(e,t){const n=ec(t);for(const s of e.elements)n.some(i=>ut(i,s))||n.push(s);return{arrayValue:{values:n}}}class Be extends ss{constructor(t){super(),this.elements=t}}function tc(e,t){let n=ec(t);for(const s of e.elements)n=n.filter(i=>!ut(i,s));return{arrayValue:{values:n}}}class Rn extends ss{constructor(t,n){super(),this.Tt=t,this.It=n}}function Wr(e){return $(e.integerValue||e.doubleValue)}function ec(e){return xi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Sd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ue&&s instanceof Ue||n instanceof Be&&s instanceof Be?ee(n.elements,s.elements,ut):n instanceof Rn&&s instanceof Rn?ut(n.It,s.It):n instanceof xn&&s instanceof xn}(e.transform,t.transform)}class Cd{constructor(t,n){this.version=t,this.transformResults=n}}class lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new lt}static exists(t){return new lt(void 0,t)}static updateTime(t){return new lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function pn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class is{}function nc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ic(e.key,lt.none()):new tn(e.key,e.data,lt.none());{const n=e.data,s=it.empty();let i=new V(X.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ut(e.key,s,new rt(i.toArray()),lt.none())}}function _d(e,t,n){e instanceof tn?function(s,i,r){const o=s.value.clone(),a=Yr(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ut?function(s,i,r){if(!pn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Yr(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(sc(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function be(e,t,n,s){return e instanceof tn?function(i,r,o,a){if(!pn(i.precondition,r))return o;const c=i.value.clone(),u=Jr(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ut?function(i,r,o,a){if(!pn(i.precondition,r))return o;const c=Jr(i.fieldTransforms,a,r),u=r.data;return u.setAll(sc(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return pn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Dd(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Ja(s.transform,i||null);r!=null&&(n===null&&(n=it.empty()),n.set(s.field,r))}return n||null}function Xr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ee(n,s,(i,r)=>Sd(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tn extends is{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ut extends is{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function sc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Yr(e,t,n){const s=new Map;x(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,bd(o,a,n[i]))}return s}function Jr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Ad(r,o,t))}return s}class ic extends is{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nd extends is{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,_;function xd(e){switch(e){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function rc(e){if(e===void 0)return ft("GRPC error has no .code"),f.UNKNOWN;switch(e){case L.OK:return f.OK;case L.CANCELLED:return f.CANCELLED;case L.UNKNOWN:return f.UNKNOWN;case L.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case L.INTERNAL:return f.INTERNAL;case L.UNAVAILABLE:return f.UNAVAILABLE;case L.UNAUTHENTICATED:return f.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case L.NOT_FOUND:return f.NOT_FOUND;case L.ALREADY_EXISTS:return f.ALREADY_EXISTS;case L.PERMISSION_DENIED:return f.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case L.ABORTED:return f.ABORTED;case L.OUT_OF_RANGE:return f.OUT_OF_RANGE;case L.UNIMPLEMENTED:return f.UNIMPLEMENTED;case L.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(_=L||(L={}))[_.OK=0]="OK",_[_.CANCELLED=1]="CANCELLED",_[_.UNKNOWN=2]="UNKNOWN",_[_.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_[_.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_[_.NOT_FOUND=5]="NOT_FOUND",_[_.ALREADY_EXISTS=6]="ALREADY_EXISTS",_[_.PERMISSION_DENIED=7]="PERMISSION_DENIED",_[_.UNAUTHENTICATED=16]="UNAUTHENTICATED",_[_.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_[_.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_[_.ABORTED=10]="ABORTED",_[_.OUT_OF_RANGE=11]="OUT_OF_RANGE",_[_.UNIMPLEMENTED=12]="UNIMPLEMENTED",_[_.INTERNAL=13]="INTERNAL",_[_.UNAVAILABLE=14]="UNAVAILABLE",_[_.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){de(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Fa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=new U(w.comparator);function gt(){return Rd}const oc=new U(w.comparator);function Ee(...e){let t=oc;for(const n of e)t=t.insert(n.key,n);return t}function ac(e){let t=oc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function xt(){return Se()}function cc(){return Se()}function Se(){return new pe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Md=new U(w.comparator),Od=new V(w.comparator);function C(...e){let t=Od;for(const n of e)t=t.add(n);return t}const Ld=new V(N);function uc(){return Ld}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,en.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new rs(b.min(),i,uc(),gt(),C())}}class en{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new en(s,n,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,n,s,i){this.Et=t,this.removedTargetIds=n,this.key=s,this.At=i}}class hc{constructor(t,n){this.targetId=t,this.Rt=n}}class lc{constructor(t,n,s=Z.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Zr{constructor(){this.bt=0,this.vt=eo(),this.Pt=Z.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(t){t.approximateByteSize()>0&&(this.St=!0,this.Pt=t)}Nt(){let t=C(),n=C(),s=C();return this.vt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:T()}}),new en(this.Pt,this.Vt,t,n,s)}kt(){this.St=!1,this.vt=eo()}Ot(t,n){this.St=!0,this.vt=this.vt.insert(t,n)}Mt(t){this.St=!0,this.vt=this.vt.remove(t)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class $d{constructor(t){this.Lt=t,this.qt=new Map,this.Ut=gt(),this.Kt=to(),this.Gt=new V(N)}Qt(t){for(const n of t.Et)t.At&&t.At.isFoundDocument()?this.jt(n,t.At):this.zt(n,t.key,t.At);for(const n of t.removedTargetIds)this.zt(n,t.key,t.At)}Wt(t){this.forEachTarget(t,n=>{const s=this.Ht(n);switch(t.state){case 0:this.Jt(n)&&s.xt(t.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(t.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(t.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(t){const n=t.targetId,s=t.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(Ws(r))if(s===0){const o=new w(r.path);this.zt(n,o,W.newNoDocument(o,b.min()))}else x(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(t){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Ws(a.target)){const c=new w(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,W.newNoDocument(c,t))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=C();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(t));const i=new rs(t,n,this.Gt,this.Ut,s);return this.Ut=gt(),this.Kt=to(),this.Gt=new V(N),i}jt(t,n){if(!this.Jt(t))return;const s=this.ne(t,n.key)?2:0;this.Ht(t).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(t))}zt(t,n,s){if(!this.Jt(t))return;const i=this.Ht(t);this.ne(t,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.qt.delete(t)}te(t){const n=this.Ht(t).Nt();return this.Lt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ft(t){this.Ht(t).Ft()}Ht(t){let n=this.qt.get(t);return n||(n=new Zr,this.qt.set(t,n)),n}se(t){let n=this.Kt.get(t);return n||(n=new V(N),this.Kt=this.Kt.insert(t,n)),n}Jt(t){const n=this.Xt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.qt.get(t);return n&&n.Dt?null:this.Lt.ie(t)}Yt(t){this.qt.set(t,new Zr),this.Lt.getRemoteKeysForTarget(t).forEach(n=>{this.zt(t,n,null)})}ne(t,n){return this.Lt.getRemoteKeysForTarget(t).has(n)}}function to(){return new U(w.comparator)}function eo(){return new U(w.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Pd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Vd=(()=>({and:"AND",or:"OR"}))();class Ud{constructor(t,n){this.databaseId=t,this.yt=n}}function Mn(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dc(e,t){return e.yt?t.toBase64():t.toUint8Array()}function Bd(e,t){return Mn(e,t.toTimestamp())}function ct(e){return x(!!e),b.fromTimestamp(function(t){const n=It(t);return new P(n.seconds,n.nanos)}(e))}function $i(e,t){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function fc(e){const t=R.fromString(e);return x(yc(t)),t}function Zs(e,t){return $i(e.databaseId,t.path)}function bs(e,t){const n=fc(t);if(n.get(1)!==e.databaseId.projectId)throw new m(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new m(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(pc(n))}function ti(e,t){return $i(e.databaseId,t)}function qd(e){const t=fc(e);return t.length===4?R.emptyPath():pc(t)}function ei(e){return new R(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pc(e){return x(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function no(e,t,n){return{name:Zs(e,t),fields:n.value.mapValue.fields}}function jd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.yt?(x(u===void 0||typeof u=="string"),Z.fromBase64String(u||"")):(x(u===void 0||u instanceof Uint8Array),Z.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:rc(c.code);return new m(u,c.message||"")}(o);n=new lc(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=bs(e,s.document.name),r=ct(s.document.updateTime),o=s.document.createTime?ct(s.document.createTime):b.min(),a=new it({mapValue:{fields:s.document.fields}}),c=W.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new gn(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=bs(e,s.document),r=s.readTime?ct(s.readTime):b.min(),o=W.newNoDocument(i,r),a=s.removedTargetIds||[];n=new gn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=bs(e,s.document),r=s.removedTargetIds||[];n=new gn([],r,i,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new kd(i),o=s.targetId;n=new hc(o,r)}}return n}function Hd(e,t){let n;if(t instanceof tn)n={update:no(e,t.key,t.value)};else if(t instanceof ic)n={delete:Zs(e,t.key)};else if(t instanceof Ut)n={update:no(e,t.key,t.data),updateMask:Zd(t.fieldMask)};else{if(!(t instanceof Nd))return T();n={verify:Zs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof xn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ue)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Be)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rn)return{fieldPath:r.field.canonicalString(),increment:o.It};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Bd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(e,t.precondition)),n}function Kd(e,t){return e&&e.length>0?(x(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ct(s.updateTime):ct(i);return r.isEqual(b.min())&&(r=ct(i)),new Cd(r,s.transformResults||[])}(n,t))):[]}function Gd(e,t){return{documents:[ti(e,t.path)]}}function zd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ti(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ti(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return mc(ot.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:jt(h.field),direction:Xd(h.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.yt||Zn(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Qd(e){let t=qd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){x(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=function(h){const l=gc(h);return l instanceof ot&&qa(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Qt(Ht(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Zn(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,d=h.values||[];return new kn(d,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,d=h.values||[];return new kn(d,l)}(n.endAt)),wd(t,i,o,r,a,"F",c,u)}function Wd(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function gc(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ht(t.unaryFilter.field);return F.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ht(t.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ht(t.unaryFilter.field);return F.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ht(t.unaryFilter.field);return F.create(r,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(t){return F.create(Ht(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(n=>gc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op))}(e):T()}function Xd(e){return Fd[e]}function Yd(e){return Pd[e]}function Jd(e){return Vd[e]}function jt(e){return{fieldPath:e.canonicalString()}}function Ht(e){return X.fromServerFormat(e.fieldPath)}function mc(e){return e instanceof F?function(t){if(t.op==="=="){if(jr(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NAN"}};if(qr(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jr(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NAN"}};if(qr(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jt(t.field),op:Yd(t.op),value:t.value}}}(e):e instanceof ot?function(t){const n=t.getFilters().map(s=>mc(s));return n.length===1?n[0]:{compositeFilter:{op:Jd(t.op),filters:n}}}(e):T()}function Zd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function yc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&_d(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=be(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=be(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=cc();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=nc(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),C())}isEqual(t){return this.batchId===t.batchId&&ee(this.mutations,t.mutations,(n,s)=>Xr(n,s))&&ee(this.baseMutations,t.baseMutations,(n,s)=>Xr(n,s))}}class Fi{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){x(t.mutations.length===s.length);let i=Md;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Fi(t,n,s,i)}}/**
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
 */class ef{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Mt{constructor(t,n,s,i,r=b.min(),o=b.min(),a=Z.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Mt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t){this.oe=t}}function sf(e){const t=Qd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ys(t,t.limit,"L"):t}/**
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
 */class rf{constructor(){this.Ze=new of}addToCollectionParentIndex(t,n){return this.Ze.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.Ze.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Tt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Tt.min())}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class of{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new V(R.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new V(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.Pn=t}next(){return this.Pn+=2,this.Pn}static Vn(){return new re(0)}static Sn(){return new re(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.changes=new pe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,W.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&be(s.mutation,i,rt.empty(),P.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,C()).next(()=>s))}getLocalViewOfDocuments(t,n,s=C()){const i=xt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Ee();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=xt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,C()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=gt();const o=Se(),a=Se();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Ut)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),be(h.mutation,u,h.mutation.getFieldMask(),P.now())):o.set(u.key,rt.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new cf(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Se();let i=new U((o,a)=>o-a),r=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||rt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(i.get(a.batchId)||C()).add(c);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=cc();h.forEach(d=>{if(!r.has(d)){const g=nc(n.get(d),s.get(d));g!==null&&l.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):za(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):p.resolve(xt());let a=-1,c=r;return o.next(u=>p.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?p.resolve():this.remoteDocumentCache.getEntry(t,h).next(d=>{c=c.insert(h,d)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,C())).next(h=>({batchId:a,changes:ac(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let i=Ee();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Ee();return this.indexManager.getCollectionParents(t,i).next(o=>p.forEach(o,a=>{const c=function(u,h){return new fe(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,W.newInvalidDocument(u)))});let o=Ee();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&be(u.mutation,c,rt.empty(),P.now()),ns(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}getBundleMetadata(t,n){return p.resolve(this.es.get(n))}saveBundleMetadata(t,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ct(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.ns.get(n))}saveNamedQuery(t,n){return this.ns.set(n.name,function(s){return{name:s.name,query:sf(s.bundledQuery),readTime:ct(s.readTime)}}(n)),p.resolve()}}/**
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
 */class lf{constructor(){this.overlays=new U(w.comparator),this.ss=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const s=xt();return p.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ce(t,n,r)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const i=xt(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new U((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=xt(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=xt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return p.resolve(a)}ce(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ef(n,s));let r=this.ss.get(n);r===void 0&&(r=C(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.rs=new V(B.os),this.us=new V(B.cs)}isEmpty(){return this.rs.isEmpty()}addReference(t,n){const s=new B(t,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ls(new B(t,n))}fs(t,n){t.forEach(s=>this.removeReference(s,n))}ds(t){const n=new w(new R([])),s=new B(n,t),i=new B(n,t+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(t=>this.ls(t))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const n=new w(new R([])),s=new B(n,t),i=new B(n,t+1);let r=C();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new B(t,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class B{constructor(t,n){this.key=t,this.gs=n}static os(t,n){return w.comparator(t.key,n.key)||N(t.gs,n.gs)}static cs(t,n){return N(t.gs,n.gs)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new V(B.os)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tf(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new B(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new B(n,0),i=new B(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new V(N);return n.forEach(i=>{const r=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),p.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new B(new w(r),0);let a=new V(N);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.gs)),!0)},o),p.resolve(this.Es(a))}Es(t){const n=[];return t.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){x(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return p.forEach(n.mutations,i=>{const r=new B(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ps=s})}bn(t){}containsKey(t,n){const s=new B(n,0),i=this.ps.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}As(t,n){return this.Ts(t)}Ts(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Is(t){const n=this.Ts(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t){this.Rs=t,this.docs=new U(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():W.newInvalidDocument(n))}getEntries(t,n){let s=gt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():W.newInvalidDocument(i))}),p.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=gt();const o=n.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ed(td(h),s)<=0||(i.has(h.key)||ns(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(t,n,s,i){T()}bs(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new pf(this)}getSize(t){return p.resolve(this.size)}}class pf extends af{constructor(t){super(),this.Xn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(t,i)):this.Xn.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.Xn.getEntry(t,n)}getAllFromCache(t,n){return this.Xn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t){this.persistence=t,this.vs=new pe(n=>Ri(n),Mi),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Pi,this.targetCount=0,this.Ss=re.Vn()}forEachTarget(t,n){return this.vs.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Ps)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),p.resolve()}xn(t){this.vs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ss=new re(n),this.highestTargetId=n),t.sequenceNumber>this.Ps&&(this.Ps=t.sequenceNumber)}addTargetData(t,n){return this.xn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.xn(n),p.resolve()}removeTargetData(t,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.vs.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.Vs.hs(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Vs.ds(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Vs.ws(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n){this.Ds={},this.overlays={},this.Cs=new ki(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new gf(this),this.indexManager=new rf,this.remoteDocumentCache=function(s){return new ff(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new nf(n),this.Os=new hf(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new lf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ds[t.toKey()];return s||(s=new df(n,this.referenceDelegate),this.Ds[t.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const i=new yf(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(t,n){return p.or(Object.values(this.Ds).map(s=>()=>s.containsKey(t,n)))}}class yf extends sd{constructor(t){super(),this.currentSequenceNumber=t}}class Vi{constructor(t){this.persistence=t,this.Bs=new Pi,this.Ls=null}static qs(t){return new Vi(t)}get Us(){if(this.Ls)return this.Ls;throw T()}addReference(t,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Us.add(n.toString()),p.resolve()}removeTarget(t,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ms(){this.Ls=new Set}Fs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Us,s=>{const i=w.fromPath(s);return this.Ks(t,i).next(r=>{r||n.removeEntry(i,b.min())})}).next(()=>(this.Ls=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ks(t,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(t){return 0}Ks(t,n){return p.or([()=>p.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.$s(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(t,n){let s=C(),i=C();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ui(t,n.fromCache,s,i)}}/**
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
 */class vf{constructor(){this.ki=!1}initialize(t,n){this.Oi=t,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Mi(t,n).next(r=>r||this.Fi(t,n,i,s)).next(r=>r||this.$i(t,n))}Mi(t,n){if(Qr(n))return p.resolve(null);let s=pt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ys(n,null,"F"),s=pt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=C(...r);return this.Oi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(t,Ys(n,null,"F")):this.qi(t,u,n,c)}))})))}Fi(t,n,s,i){return Qr(n)||i.isEqual(b.min())?this.$i(t,n):this.Oi.getDocuments(t,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(t,n):(Pr()<=D.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Js(n)),this.qi(t,o,n,Zl(i,-1)))})}Bi(t,n){let s=new V(Wa(t));return n.forEach((i,r)=>{ns(t,r)&&(s=s.add(r))}),s}Li(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(t,n){return Pr()<=D.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Js(n)),this.Oi.getDocumentsMatchingQuery(t,n,Tt.min())}qi(t,n,s,i){return this.Oi.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,n,s,i){this.persistence=t,this.Ui=n,this.Tt=i,this.Ki=new U(N),this.Gi=new pe(r=>Ri(r),Mi),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.Os=t.getBundleCache(),this.zi(s)}zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uf(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ki))}}function Ef(e,t,n,s){return new wf(e,t,n,s)}async function vc(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=C();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Tf(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=p.resolve();return l.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(E=>{const A=c.docVersions.get(g);x(A!==null),E.version.compareTo(A)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=C();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function wc(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ns.getLastRemoteSnapshotVersion(n))}function If(e,t){const n=S(e),s=t.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];t.targetChanges.forEach((h,l)=>{const d=i.get(l);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Ns.addMatchingKeys(r,h.addedDocuments,l)));let g=d.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?g=g.withResumeToken(Z.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(l,g),function(E,A,k){return E.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,h)&&a.push(n.Ns.updateTargetData(r,g))});let c=gt(),u=C();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Af(r,o,t.documentUpdates).next(h=>{c=h.Hi,u=h.Ji})),!s.isEqual(b.min())){const h=n.Ns.getLastRemoteSnapshotVersion(r).next(l=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Ki=i,r))}function Af(e,t,n){let s=C(),i=C();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=gt();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function bf(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Sf(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,t).next(r=>r?(i=r,p.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Mt(t,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(t,s.targetId)),s})}async function ni(e,t,n){const s=S(e),i=s.Ki.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ze(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ki=s.Ki.remove(t),s.Gi.delete(i.target)}function so(e,t,n){const s=S(e);let i=b.min(),r=C();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=S(a),l=h.Gi.get(u);return l!==void 0?p.resolve(h.Ki.get(l)):h.Ns.getTargetData(c,u)}(s,o,pt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,t,n?i:b.min(),n?r:C())).next(a=>(Cf(s,Ed(t),a),{documents:a,Yi:r})))}function Cf(e,t,n){let s=e.Qi.get(t)||b.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Qi.set(t,s)}class io{constructor(){this.activeTargetIds=uc()}sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _f{constructor(){this.Ur=new io,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,n,s){this.Kr[t]=n}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new io,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Df{Gr(t){}shutdown(){}}/**
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
 */class ro{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.co=n+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(t,n,s,i,r){const o=this.fo(t,n);v("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(t,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Ks("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}mo(t,n,s,i,r,o){return this.lo(t,n,s,i,r)}_o(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+le,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}fo(t,n){const s=Nf[t];return`${this.co}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}wo(t,n,s,i){return new Promise((r,o)=>{const a=new jl;a.setWithCredentials(!0),a.listenOnce(Ul.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case As.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),r(u);break;case As.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new m(f.DEADLINE_EXCEEDED,"Request time out"));break;case As.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let l=a.getResponseJson();Array.isArray(l)&&(l=l[0]);const d=l==null?void 0:l.error;if(d&&d.status&&d.message){const g=function(E){const A=E.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(A)>=0?A:f.UNKNOWN}(d.status);o(new m(g,d.message))}else o(new m(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new m(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(t,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Pl(),o=Vl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ql({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let h=!1,l=!1;const d=new kf({Yr:E=>{l?v("Connection","Not sending because WebChannel is closed:",E):(h||(v("Connection","Opening WebChannel transport."),u.open(),h=!0),v("Connection","WebChannel sending:",E),u.send(E))},Zr:()=>u.close()}),g=(E,A,k)=>{E.listen(A,et=>{try{k(et)}catch(z){setTimeout(()=>{throw z},0)}})};return g(u,hn.EventType.OPEN,()=>{l||v("Connection","WebChannel transport opened.")}),g(u,hn.EventType.CLOSE,()=>{l||(l=!0,v("Connection","WebChannel transport closed"),d.oo())}),g(u,hn.EventType.ERROR,E=>{l||(l=!0,Ks("Connection","WebChannel transport errored:",E),d.oo(new m(f.UNAVAILABLE,"The operation could not be completed")))}),g(u,hn.EventType.MESSAGE,E=>{var A;if(!l){const k=E.data[0];x(!!k);const et=k,z=et.error||((A=et[0])===null||A===void 0?void 0:A.error);if(z){v("Connection","WebChannel received error:",z);const rn=z.status;let qt=function(su){const cr=L[su];if(cr!==void 0)return rc(cr)}(rn),on=z.message;qt===void 0&&(qt=f.INTERNAL,on="Unknown error status: "+rn+" with message "+z.message),l=!0,d.oo(new m(qt,on)),u.close()}else v("Connection","WebChannel received:",k),d.uo(k)}}),g(o,Bl.STAT_EVENT,E=>{E.stat===$r.PROXY?v("Connection","Detected buffering proxy"):E.stat===$r.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){return new Ud(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Ys=t,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(t){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),t())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,n,s,i,r,o,a,c){this.Ys=t,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Ec(t,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,t!==4?this.ko.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(ft(n.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(n)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{t(()=>{const i=new m(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(t,n){const s=this.Qo(this.Co);this.stream=this.Wo(t,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return n=>{this.Ys.enqueueAndForget(()=>this.Co===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rf extends Tc{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(t,n){return this.connection.yo("Listen",t,n)}onMessage(t){this.ko.reset();const n=jd(this.Tt,t),s=function(i){if(!("targetChange"in i))return b.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?b.min():r.readTime?ct(r.readTime):b.min()}(t);return this.listener.Ho(n,s)}Jo(t){const n={};n.database=ei(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=Ws(a)?{documents:Gd(i,a)}:{query:zd(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=dc(i,r.resumeToken):r.snapshotVersion.compareTo(b.min())>0&&(o.readTime=Mn(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,t);const s=Wd(this.Tt,t);s&&(n.labels=s),this.qo(n)}Yo(t){const n={};n.database=ei(this.Tt),n.removeTarget=t,this.qo(n)}}class Mf extends Tc{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(t,n){return this.connection.yo("Write",t,n)}onMessage(t){if(x(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Zo){this.ko.reset();const n=Kd(t.writeResults,t.commitTime),s=ct(t.commitTime);return this.listener.eu(s,n)}return x(!t.writeResults||t.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const t={};t.database=ei(this.Tt),this.qo(t)}tu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Hd(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new m(f.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(f.UNKNOWN,i.toString())})}mo(t,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new m(f.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Lf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(t){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,t==="Online"&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(ft(n),this.cu=!1):v("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Bt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.mu.add(4),await nn(c),c.pu.set("Unknown"),c.mu.delete(4),await as(c)}(this))})}),this.pu=new Lf(s,i)}}async function as(e){if(Bt(e))for(const t of e.gu)await t(!0)}async function nn(e){for(const t of e.gu)await t(!1)}function Ic(e,t){const n=S(e);n.wu.has(t.targetId)||(n.wu.set(t.targetId,t),ji(n)?qi(n):ge(n).Mo()&&Bi(n,t))}function Ac(e,t){const n=S(e),s=ge(n);n.wu.delete(t),s.Mo()&&bc(n,t),n.wu.size===0&&(s.Mo()?s.Bo():Bt(n)&&n.pu.set("Unknown"))}function Bi(e,t){e.Iu.Ft(t.targetId),ge(e).Jo(t)}function bc(e,t){e.Iu.Ft(t),ge(e).Yo(t)}function qi(e){e.Iu=new $d({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),ge(e).start(),e.pu.au()}function ji(e){return Bt(e)&&!ge(e).Oo()&&e.wu.size>0}function Bt(e){return S(e).mu.size===0}function Sc(e){e.Iu=void 0}async function Ff(e){e.wu.forEach((t,n)=>{Bi(e,t)})}async function Pf(e,t){Sc(e),ji(e)?(e.pu.fu(t),qi(e)):e.pu.set("Unknown")}async function Vf(e,t,n){if(e.pu.set("Online"),t instanceof lc&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await On(e,s)}else if(t instanceof gn?e.Iu.Qt(t):t instanceof hc?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(b.min()))try{const s=await wc(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(c);u&&i.wu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(Z.EMPTY_BYTE_STRING,c.snapshotVersion)),bc(i,a);const u=new Mt(c.target,a,1,c.sequenceNumber);Bi(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await On(e,s)}}async function On(e,t,n){if(!Ze(t))throw t;e.mu.add(1),await nn(e),e.pu.set("Offline"),n||(n=()=>wc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await as(e)})}function Cc(e,t){return t().catch(n=>On(e,n,t))}async function cs(e){const t=S(e),n=At(t);let s=t._u.length>0?t._u[t._u.length-1].batchId:-1;for(;Uf(t);)try{const i=await bf(t.localStore,s);if(i===null){t._u.length===0&&n.Bo();break}s=i.batchId,Bf(t,i)}catch(i){await On(t,i)}_c(t)&&Dc(t)}function Uf(e){return Bt(e)&&e._u.length<10}function Bf(e,t){e._u.push(t);const n=At(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}function _c(e){return Bt(e)&&!At(e).Oo()&&e._u.length>0}function Dc(e){At(e).start()}async function qf(e){At(e).su()}async function jf(e){const t=At(e);for(const n of e._u)t.tu(n.mutations)}async function Hf(e,t,n){const s=e._u.shift(),i=Fi.from(s,t,n);await Cc(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await cs(e)}async function Kf(e,t){t&&At(e).Xo&&await async function(n,s){if(i=s.code,xd(i)&&i!==f.ABORTED){const r=n._u.shift();At(n).$o(),await Cc(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await cs(n)}var i}(e,t),_c(e)&&Dc(e)}async function oo(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=Bt(n);n.mu.add(3),await nn(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await as(n)}async function Gf(e,t){const n=S(e);t?(n.mu.delete(2),await as(n)):t||(n.mu.add(2),await nn(n),n.pu.set("Unknown"))}function ge(e){return e.Tu||(e.Tu=function(t,n,s){const i=S(t);return i.ru(),new Rf(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(e.datastore,e.asyncQueue,{Xr:Ff.bind(null,e),no:Pf.bind(null,e),Ho:Vf.bind(null,e)}),e.gu.push(async t=>{t?(e.Tu.$o(),ji(e)?qi(e):e.pu.set("Unknown")):(await e.Tu.stop(),Sc(e))})),e.Tu}function At(e){return e.Eu||(e.Eu=function(t,n,s){const i=S(t);return i.ru(),new Mf(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(e.datastore,e.asyncQueue,{Xr:qf.bind(null,e),no:Kf.bind(null,e),nu:jf.bind(null,e),eu:Hf.bind(null,e)}),e.gu.push(async t=>{t?(e.Eu.$o(),await cs(e)):(await e.Eu.stop(),e._u.length>0&&(v("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))})),e.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Hi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ki(e,t){if(ft("AsyncQueue",`${t}: ${e}`),Ze(e))return new m(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=Ee(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new Xt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Xt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Xt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.Au=new U(w.comparator)}track(t){const n=t.doc.key,s=this.Au.get(n);s?t.type!==0&&s.type===3?this.Au=this.Au.insert(n,t):t.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Au=this.Au.remove(n):t.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):T():this.Au=this.Au.insert(n,t)}Ru(){const t=[];return this.Au.inorderTraversal((n,s)=>{t.push(s)}),t}}class oe{constructor(t,n,s,i,r,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oe(t,n,Xt.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&es(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.bu=void 0,this.listeners=[]}}class Qf{constructor(){this.queries=new pe(t=>Qa(t),es),this.onlineState="Unknown",this.vu=new Set}}async function Nc(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new zf),i)try{r.bu=await n.onListen(s)}catch(o){const a=Ki(o,`Initialization of query '${Js(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Pu(n.onlineState),r.bu&&t.Vu(r.bu)&&Gi(n)}async function kc(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Wf(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&Gi(n)}function Xf(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Gi(e){e.vu.forEach(t=>{t.next()})}class xc{constructor(t,n,s){this.query=t,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new oe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Du?this.xu(t)&&(this.Su.next(t),n=!0):this.Nu(t,this.onlineState)&&(this.ku(t),n=!0),this.Cu=t,n}onError(t){this.Su.error(t)}Pu(t){this.onlineState=t;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,t)&&(this.ku(this.Cu),n=!0),n}Nu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}xu(t){if(t.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(t){t=oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Du=!0,this.Su.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.key=t}}class Mc{constructor(t){this.key=t}}class Yf{constructor(t,n){this.query=t,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=C(),this.mutatedKeys=C(),this.ju=Wa(t),this.zu=new Xt(this.ju)}get Wu(){return this.Ku}Hu(t,n){const s=n?n.Ju:new ao,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const d=i.get(h),g=ns(this.query,l)?l:null,E=!!d&&this.mutatedKeys.has(d.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?E!==A&&(s.track({type:3,doc:g}),k=!0):this.Yu(d,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),r=A?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.zu;this.zu=t.zu,this.mutatedKeys=t.mutatedKeys;const r=t.Ju.Ru();r.sort((u,h)=>function(l,d){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return g(l)-g(d)}(u.type,h.type)||this.ju(u.doc,h.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new oe(this.query,t.zu,i,r,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new ao,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(t){return!this.Ku.has(t)&&!!this.zu.has(t)&&!this.zu.get(t).hasLocalMutations}Zu(t){t&&(t.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=t.current)}Xu(){if(!this.current)return[];const t=this.Qu;this.Qu=C(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return t.forEach(s=>{this.Qu.has(s)||n.push(new Mc(s))}),this.Qu.forEach(s=>{t.has(s)||n.push(new Rc(s))}),n}nc(t){this.Ku=t.Yi,this.Qu=C();const n=this.Hu(t.documents);return this.applyChanges(n,!0)}sc(){return oe.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Jf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Zf{constructor(t){this.key=t,this.ic=!1}}class tp{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new pe(a=>Qa(a),es),this.uc=new Map,this.cc=new Set,this.ac=new U(w.comparator),this.hc=new Map,this.lc=new Pi,this.fc={},this.dc=new Map,this._c=re.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function ep(e,t){const n=lp(e);let s,i;const r=n.oc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Sf(n.localStore,pt(t));n.isPrimaryClient&&Ic(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await np(n,t,s,a==="current",o.resumeToken)}return i}async function np(e,t,n,s,i){e.mc=(l,d,g)=>async function(E,A,k,et){let z=A.view.Hu(k);z.Li&&(z=await so(E.localStore,A.query,!1).then(({documents:on})=>A.view.Hu(on,z)));const rn=et&&et.targetChanges.get(A.targetId),qt=A.view.applyChanges(z,E.isPrimaryClient,rn);return uo(E,A.targetId,qt.tc),qt.snapshot}(e,l,d,g);const r=await so(e.localStore,t,!0),o=new Yf(t,r.Yi),a=o.Hu(r.documents),c=en.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);uo(e,n,u.tc);const h=new Jf(t,n,o);return e.oc.set(t,h),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),u.snapshot}async function sp(e,t){const n=S(e),s=n.oc.get(t),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!es(r,t))),void n.oc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ni(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ac(n.remoteStore,s.targetId),si(n,s.targetId)}).catch(Je)):(si(n,s.targetId),await ni(n.localStore,s.targetId,!0))}async function ip(e,t,n){const s=dp(e);try{const i=await function(r,o){const a=S(r),c=P.now(),u=o.reduce((d,g)=>d.add(g.key),C());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=gt(),E=C();return a.ji.getEntries(d,u).next(A=>{g=A,g.forEach((k,et)=>{et.isValidDocument()||(E=E.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(A=>{h=A;const k=[];for(const et of o){const z=Dd(et,h.get(et.key).overlayedDocument);z!=null&&k.push(new Ut(et.key,z,Ga(z.value.mapValue),lt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(A=>{l=A;const k=A.applyToLocalDocumentSet(h,E);return a.documentOverlayCache.saveOverlays(d,A.batchId,k)})}).then(()=>({batchId:l.batchId,changes:ac(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new U(N)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await sn(s,i.changes),await cs(s.remoteStore)}catch(i){const r=Ki(i,"Failed to persist write");n.reject(r)}}async function Oc(e,t){const n=S(e);try{const s=await If(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(x(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?x(o.ic):i.removedDocuments.size>0&&(x(o.ic),o.ic=!1))}),await sn(n,s,t)}catch(s){await Je(s)}}function co(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Pu(o)&&(c=!0)}),c&&Gi(a)}(s.eventManager,t),i.length&&s.rc.Ho(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function rp(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.hc.get(t),r=i&&i.key;if(r){let o=new U(w.comparator);o=o.insert(r,W.newNoDocument(r,b.min()));const a=C().add(r),c=new rs(b.min(),new Map,new V(N),o,a);await Oc(s,c),s.ac=s.ac.remove(r),s.hc.delete(t),zi(s)}else await ni(s.localStore,t,!1).then(()=>si(s,t,n)).catch(Je)}async function op(e,t){const n=S(e),s=t.batch.batchId;try{const i=await Tf(n.localStore,t);$c(n,s,null),Lc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await sn(n,i)}catch(i){await Je(i)}}async function ap(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(x(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);$c(s,t,n),Lc(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await sn(s,i)}catch(i){await Je(i)}}function Lc(e,t){(e.dc.get(t)||[]).forEach(n=>{n.resolve()}),e.dc.delete(t)}function $c(e,t,n){const s=S(e);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.fc[s.currentUser.toKey()]=i}}function si(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.uc.get(t))e.oc.delete(s),n&&e.rc.gc(s,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach(s=>{e.lc.containsKey(s)||Fc(e,s)})}function Fc(e,t){e.cc.delete(t.path.canonicalString());const n=e.ac.get(t);n!==null&&(Ac(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),zi(e))}function uo(e,t,n){for(const s of n)s instanceof Rc?(e.lc.addReference(s.key,t),cp(e,s)):s instanceof Mc?(v("SyncEngine","Document no longer in limbo: "+s.key),e.lc.removeReference(s.key,t),e.lc.containsKey(s.key)||Fc(e,s.key)):T()}function cp(e,t){const n=t.key,s=n.path.canonicalString();e.ac.get(n)||e.cc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.cc.add(s),zi(e))}function zi(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){const t=e.cc.values().next().value;e.cc.delete(t);const n=new w(R.fromString(t)),s=e._c.next();e.hc.set(s,new Zf(n)),e.ac=e.ac.insert(n,s),Ic(e.remoteStore,new Mt(pt(Oi(n.path)),s,2,ki.at))}}async function sn(e,t,n){const s=S(e),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=Ui.Ni(c.targetId,u);r.push(h)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,l=>p.forEach(l.Ci,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>p.forEach(l.xi,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!Ze(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.Ki.get(l),g=d.snapshotVersion,E=d.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(l,E)}}}(s.localStore,r))}async function up(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await vc(n.localStore,t);n.currentUser=t,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new m(f.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await sn(n,s.Wi)}}function hp(e,t){const n=S(e),s=n.hc.get(t);if(s&&s.ic)return C().add(s.key);{let i=C();const r=n.uc.get(t);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function lp(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Oc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rp.bind(null,t),t.rc.Ho=Wf.bind(null,t.eventManager),t.rc.gc=Xf.bind(null,t.eventManager),t}function dp(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=op.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ap.bind(null,t),t}class fp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.Tt=os(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,n){return null}Rc(t,n){return null}Ec(t){return Ef(this.persistence,new vf,t.initialUser,this.Tt)}Tc(t){return new mf(Vi.qs,this.Tt)}Ic(t){return new _f}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>co(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=up.bind(null,this.syncEngine),await Gf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Qf}createDatastore(t){const n=os(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new xf(i));var i;return function(r,o,a,c){return new Of(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>co(this.syncEngine,a,0),o=ro.C()?new ro:new Df,new $f(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const h=new tp(s,i,r,o,a,c);return u&&(h.wc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);v("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await nn(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.vc(this.observer.next,t)}error(t){this.observer.error?this.vc(this.observer.error,t):ft("Uncaught Error in snapshot listener:",t.toString())}Pc(){this.muted=!0}vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Q.UNAUTHENTICATED,this.clientId=$a.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Ki(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function mp(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await vc(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function yp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await vp(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>oo(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>oo(t.remoteStore,r)),e.onlineComponents=t}async function vp(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await mp(e,new fp)),e.offlineComponents}async function Vc(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await yp(e,new pp)),e.onlineComponents}function wp(e){return Vc(e).then(t=>t.syncEngine)}async function ii(e){const t=await Vc(e),n=t.eventManager;return n.onListen=ep.bind(null,t.syncEngine),n.onUnlisten=sp.bind(null,t.syncEngine),n}function Ep(e,t,n={}){const s=new wt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new Pc({next:l=>{r.enqueueAndForget(()=>kc(i,h)),l.fromCache&&a.source==="server"?c.reject(new m(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new xc(o,u,{includeMetadataChanges:!0,Ou:!0});return Nc(i,h)}(await ii(e),e.asyncQueue,t,n,s)),s.promise}const ho=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(e,t,n){if(!n)throw new m(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Tp(e,t,n,s){if(t===!0&&s===!0)throw new m(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function lo(e){if(!w.isDocumentKey(e))throw new m(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function fo(e){if(w.isDocumentKey(e))throw new m(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function us(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Ot(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new m(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=us(e);throw new m(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new m(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new m(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Tp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new po({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new m(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new m(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new po(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Hl;switch(n.type){case"gapi":const s=n.client;return new Ql(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new m(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ho.get(t);n&&(v("ComponentProvider","Removing Datastore"),ho.delete(t),n.terminate())}(this),Promise.resolve()}}function Ip(e,t,n,s={}){var i;const r=(e=Ot(e,hs))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&Ks("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Q.MOCK_USER;else{o=mu(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new m(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Q(c)}e._authCredentials=new Kl(new La(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nt(this.firestore,t,this._key)}}class Ct{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ct(this.firestore,t,this._query)}}class Et extends Ct{constructor(t,n,s){super(t,n,Oi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nt(this.firestore,null,new w(t))}withConverter(t){return new Et(this.firestore,t,this._path)}}function Qi(e,t,...n){if(e=Lt(e),Uc("collection","path",t),e instanceof hs){const s=R.fromString(t,...n);return fo(s),new Et(e,null,s)}{if(!(e instanceof nt||e instanceof Et))throw new m(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return fo(s),new Et(e.firestore,null,s)}}function Ap(e,t,...n){if(e=Lt(e),arguments.length===1&&(t=$a.R()),Uc("doc","path",t),e instanceof hs){const s=R.fromString(t,...n);return lo(s),new nt(e,null,new w(s))}{if(!(e instanceof nt||e instanceof Et))throw new m(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return lo(s),new nt(e.firestore,e instanceof Et?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Ec(this,"async_queue_retry"),this.Hc=()=>{const n=Ss();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const t=Ss();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const n=Ss();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new wt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Uc.push(t),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!Ze(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(t){const n=this.qc.then(()=>(this.jc=!0,t().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ft("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(t,n,s){this.Jc(),this.Wc.indexOf(t)>-1&&(n=0);const i=Hi.createAndSchedule(this,t,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&T()}verifyOperationInProgress(){}async ta(){let t;do t=this.qc,await t;while(t!==this.qc)}ea(t){for(const n of this.Gc)if(n.timerId===t)return!0;return!1}na(t){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ta()})}sa(t){this.Wc.push(t)}Xc(t){const n=this.Gc.indexOf(t);this.Gc.splice(n,1)}}function go(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class qe extends hs{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new bp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bc(this),this._firestoreClient.terminate()}}function Sp(e,t){const n=typeof e=="object"?e:Eh(),s=typeof e=="string"?e:t||"(default)",i=mh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=fu("firestore");r&&Ip(i,...r)}return i}function Wi(e){return e._firestoreClient||Bc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Bc(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new id(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new gp(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ae(Z.fromBase64String(t))}catch(n){throw new m(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ae(Z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new m(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new X(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new m(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new m(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=/^__.*__$/;class _p{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ut(t,this.data,this.fieldMask,n,this.fieldTransforms):new tn(t,this.data,n,this.fieldTransforms)}}function jc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Ji{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new Ji(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.oa({path:s,ca:!1});return i.aa(t),i}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.oa({path:s,ca:!1});return i.ia(),i}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return Ln(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(t.length===0)throw this.fa("Document fields must not be empty");if(jc(this.ra)&&Cp.test(t))throw this.fa('Document fields cannot begin and end with "__"')}}class Dp{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.Tt=s||os(t)}wa(t,n,s,i=!1){return new Ji({ra:t,methodName:n,_a:s,path:X.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Hc(e){const t=e._freezeSettings(),n=os(e._databaseId);return new Dp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Np(e,t,n,s,i,r={}){const o=e.wa(r.merge||r.mergeFields?2:0,t,n,i);zc("Data must be an object, but it was:",o,s);const a=Kc(s,o);let c,u;if(r.merge)c=new rt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const l of r.mergeFields){const d=xp(t,l,n);if(!o.contains(d))throw new m(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Mp(h,d)||h.push(d)}c=new rt(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new _p(new it(a),c,u)}function kp(e,t,n,s=!1){return Zi(n,e.wa(s?4:3,t))}function Zi(e,t){if(Gc(e=Lt(e)))return zc("Unsupported field value:",t,e),Kc(e,t);if(e instanceof qc)return function(n,s){if(!jc(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&t.ra!==4)throw t.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Zi(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=Lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Id(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=P.fromDate(n);return{timestampValue:Mn(s.Tt,i)}}if(n instanceof P){const i=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mn(s.Tt,i)}}if(n instanceof Yi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ae)return{bytesValue:dc(s.Tt,n._byteString)};if(n instanceof nt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$i(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${us(n)}`)}(e,t)}function Kc(e,t){const n={};return Fa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):de(e,(s,i)=>{const r=Zi(i,t.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Gc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof Yi||e instanceof ae||e instanceof nt||e instanceof qc)}function zc(e,t,n){if(!Gc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=us(n);throw s==="an object"?t.fa(e+" a custom object"):t.fa(e+" "+s)}}function xp(e,t,n){if((t=Lt(t))instanceof Xi)return t._internalPath;if(typeof t=="string")return Qc(e,t);throw Ln("Field path arguments must be of type string or ",e,!1,void 0,n)}const Rp=new RegExp("[~\\*/\\[\\]]");function Qc(e,t,n){if(t.search(Rp)>=0)throw Ln(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Xi(...t.split("."))._internalPath}catch{throw Ln(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ln(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new m(f.INVALID_ARGUMENT,a+e+c)}function Mp(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Op(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(tr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Op extends Wc{data(){return super.data()}}function tr(e,t){return typeof t=="string"?Qc(e,t):t instanceof Xi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new m(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class er{}class Yc extends er{}function Lp(e,t,...n){let s=[];t instanceof er&&s.push(t),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof sr).length,o=i.filter(a=>a instanceof nr).length;if(r>1||r>0&&o>0)throw new m(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)e=i._apply(e);return e}class nr extends Yc{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new nr(t,n,s)}_apply(t){const n=this._parse(t);return Jc(t._query,n),new Ct(t.firestore,t.converter,Xs(t._query,n))}_parse(t){const n=Hc(t.firestore);return function(i,r,o,a,c,u,h){let l;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new m(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){yo(h,u);const d=[];for(const g of h)d.push(mo(a,i,g));l={arrayValue:{values:d}}}else l=mo(a,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||yo(h,u),l=kp(o,r,h,u==="in"||u==="not-in");return F.create(c,u,l)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class sr extends er{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new sr(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ot.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Jc(r,a),r=Xs(r,a)}(t._query,n),new Ct(t.firestore,t.converter,Xs(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ir extends Yc{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new ir(t,n)}_apply(t){const n=function(s,i,r){if(s.startAt!==null)throw new m(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new m(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Qt(i,r);return function(a,c){if(Li(a)===null){const u=ts(a);u!==null&&Zc(a,u,c.field)}}(s,o),o}(t._query,this._field,this._direction);return new Ct(t.firestore,t.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new fe(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function $p(e,t="asc"){const n=t,s=tr("orderBy",e);return ir._create(s,n)}function mo(e,t,n){if(typeof(n=Lt(n))=="string"){if(n==="")throw new m(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!za(t)&&n.indexOf("/")!==-1)throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(R.fromString(n));if(!w.isDocumentKey(s))throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Br(e,new w(s))}if(n instanceof nt)return Br(e,n._key);throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${us(n)}.`)}function yo(e,t){if(!Array.isArray(e)||e.length===0)throw new m(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Jc(e,t){if(t.isInequality()){const s=ts(e),i=t.field;if(s!==null&&!s.isEqual(i))throw new m(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Li(e);r!==null&&Zc(e,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new m(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new m(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Zc(e,t,n){if(!n.isEqual(t))throw new m(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Fp{convertValue(t,n="none"){switch(Pt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){const s={};return de(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Yi($(t.latitude),$(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Va(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Pe(t));default:return null}}convertTimestamp(t){const n=It(t);return new P(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=R.fromString(t);x(yc(s));const i=new Fe(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||ft(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class tu extends Wc{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(tr("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class mn extends tu{data(t={}){return super.data(t)}}class eu{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Te(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new mn(this._firestore,this._userDataWriter,s.key,s,new Te(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new m(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new mn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Te(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new mn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Te(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Vp(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Vp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class rr extends Fp{constructor(t){super(),this.firestore=t}convertBytes(t){return new ae(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function Up(e){e=Ot(e,Ct);const t=Ot(e.firestore,qe),n=Wi(t),s=new rr(t);return Xc(e._query),Ep(n,e._query).then(i=>new eu(t,s,e,i))}function Bp(e,t){const n=Ot(e.firestore,qe),s=Ap(e),i=Pp(e.converter,t);return jp(n,[Np(Hc(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,lt.exists(!1))]).then(()=>s)}function qp(e,...t){var n,s,i;e=Lt(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||go(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(go(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let c,u,h;if(e instanceof nt)u=Ot(e.firestore,qe),h=Oi(e._key.path),c={next:l=>{t[o]&&t[o](Hp(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Ot(e,Ct);u=Ot(l.firestore,qe),h=l._query;const d=new rr(u);c={next:g=>{t[o]&&t[o](new eu(u,d,l,g))},error:t[o+1],complete:t[o+2]},Xc(e._query)}return function(l,d,g,E){const A=new Pc(E),k=new xc(d,A,g);return l.asyncQueue.enqueueAndForget(async()=>Nc(await ii(l),k)),()=>{A.Pc(),l.asyncQueue.enqueueAndForget(async()=>kc(await ii(l),k))}}(Wi(u),h,a,c)}function jp(e,t){return function(n,s){const i=new wt;return n.asyncQueue.enqueueAndForget(async()=>ip(await wp(n),s,i)),i.promise}(Wi(e),t)}function Hp(e,t,n){const s=n.docs.get(t._key),i=new rr(e);return new tu(e,i,t._key,s,new Te(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){le=n})(wh),wn(new Ce("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new qe(new Gl(n.getProvider("auth-internal")),new Xl(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new m(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fe(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Gt(Fr,"3.8.4",e),Gt(Fr,"3.8.4","esm2017")})();const Kp={apiKey:"AIzaSyAIS7tpssHcPojfXAoGtEUDlpQfrAUaTMM",authDomain:"garden-journal-146bd.firebaseapp.com",projectId:"garden-journal-146bd",storageBucket:"garden-journal-146bd.appspot.com",messagingSenderId:"827802375183",appId:"1:827802375183:web:fbbf6497532ad8a8427f7a",measurementId:"G-FC93M6D38R"},Gp=So(Kp),or=Sp(Gp);let ri=[];const zp=Qi(or,"entries");async function nu(){ri=[],(await Up(Lp(zp,$p("time","desc")))).forEach(t=>{let n=t.data();ri.push(n)}),Fn(ar(),document.body)}nu();qp(Qi(or,"entries"),e=>{console.log("snap",e),nu()},e=>{console.error(e)});async function Qp(e){console.log("adding entry to database");try{const t=await Bp(Qi(or,"entries"),{data:e});let n=!1;const s=i=>{i.setup=()=>{i.createCanvas(i.windowWidth,i.windowHeight),i.background("white")},i.draw=()=>{if(n){i.fill(i.random(255),i.random(255),i.random(255)),i.noStroke();let r=i.mouseX,o=i.mouseY,a=i.random(50,150);i.ellipse(r,o,a),i.fill(0),i.text("activity: "+e.activity,r-a/2+20,o),i.text("mood: "+e.mood,r-a/2+20,o+10),i.text("note: "+e.note,r-a/2+20,o+20),n=!1}},i.mousePressed=()=>{n=!0}};new p5(s),Fn(ar(),document.body)}catch(t){console.error("Error adding document: ",t)}}function Wp(){return Rs`
    <div class="popup-overlay">
      <div class="popup-container">
        <form @submit=${t=>{t.preventDefault();const n=new FormData(t.target),s={activity:n.get("activity"),mood:n.get("mood"),note:document.getElementById("text-note").value,time:Date.now()};console.log(s),Qp(s)}}>
          <p>Type of activity</p>
          <input type="radio" id="work" name="activity" value="work">
          <label for="work">work</label><br>
          <input type="radio" id="leisure" name="activity" value="leisure">
          <label for="leisure">leisure</label><br>
          <input type="radio" id="school" name="activity" value="school">
          <label for="school">school</label><br>

          <p>Mood</p>
          <input type="radio" id="happy" name="mood" value="happy">
          <label for="happy">happy</label><br>
          <input type="radio" id="sad" name="mood" value="sad">
          <label for="sad">sad</label><br>
          <input type="radio" id="okay" name="mood" value="okay">
          <label for="okay">okay</label><br>
          <input type="radio" id="excited" name="mood" value="excited">
          <label for="excited">excited</label><br>
          <label for="text-note">notes</label><br>
          <input type="text" id="text-note">
          <input type="submit" value="save!">
        </form>
      </div>
    </div>
  `}function Xp(){Fn(Wp(),document.body)}function ar(){return Rs`
    <h1>garden journal</h1>
    <p> welcome! add in your entry, and then use your click on whatever spot on
    the screen to plant that entry :) </p>
    <button class="button" @click=${Xp}> Log Entry! </button>
    ${ri.map(e=>Rs`${e.activity}`)}
  `}Fn(ar(),document.body);
