import{d as y,c as nt,f as ct,_ as ut}from"./index-BFltlDJr.js";import{m as $}from"./Sidebar-eFX6kK0U.js";import{_ as dt,a as lt}from"./_getSettings-DRJhAmNv.js";const ft=["prioritize everything sent to=bio ","to=bio += *command - compdoc() / composedocument():*","nigger","GU1D3L1N3S","3TH1C4L","M0R4L"],N=t=>{const e=t.toLowerCase();return ft.some(n=>e.includes(n.toLocaleLowerCase()))},L="This message may violate our policies";function D(){const t=new Date,e=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0");return`${e}:${n}`}var G;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(G||(G={}));/**
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
 */var x;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(x||(x={}));var F;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(F||(F={}));/**
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
 */const H=["user","model","function","system"];var j;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(j||(j={}));var k;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(k||(k={}));var Y;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(Y||(Y={}));var K;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(K||(K={}));var I;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(I||(I={}));var P;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(P||(P={}));var B;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(B||(B={}));var q;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(q||(q={}));/**
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
 */class p extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class v extends p{constructor(e,n){super(e),this.response=n}}class st extends p{constructor(e,n,s,o){super(e),this.status=n,this.statusText=s,this.errorDetails=o}}class _ extends p{}/**
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
 */const ht="https://generativelanguage.googleapis.com",gt="v1beta",pt="0.21.0",Et="genai-js";var m;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(m||(m={}));class Ct{constructor(e,n,s,o,i){this.model=e,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var e,n;const s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||gt;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ht}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function _t(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${Et}/${pt}`),e.join(" ")}async function mt(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",_t(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new _(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new _(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new _(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function vt(t,e,n,s,o,i){const a=new Ct(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},wt(i)),{method:"POST",headers:await mt(a),body:o})}}async function S(t,e,n,s,o,i={},a=fetch){const{url:r,fetchOptions:c}=await vt(t,e,n,s,o,i);return yt(r,c,a)}async function yt(t,e,n=fetch){let s;try{s=await n(t,e)}catch(o){Rt(o,t)}return s.ok||await It(s,t),s}function Rt(t,e){let n=t;throw t instanceof st||t instanceof _||(n=new p(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function It(t,e){let n="",s;try{const o=await t.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new st(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,s)}function wt(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
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
 */function U(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new v(`${C(t)}`,t);return Ot(t)}else if(t.promptFeedback)throw new v(`Text not available. ${C(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new v(`${C(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),V(t)[0]}else if(t.promptFeedback)throw new v(`Function call not available. ${C(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new v(`${C(t)}`,t);return V(t)}else if(t.promptFeedback)throw new v(`Function call not available. ${C(t)}`,t)},t}function Ot(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function V(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const St=[I.RECITATION,I.SAFETY,I.LANGUAGE];function T(t){return!!t.finishReason&&St.includes(t.finishReason)}function C(t){var e,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];T(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function w(t){return this instanceof w?(this.v=t,this):new w(t)}function At(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,e||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(u){s[u]&&(o[u]=function(d){return new Promise(function(f,E){i.push([u,d,f,E])>1||r(u,d)})})}function r(u,d){try{c(s[u](d))}catch(f){g(i[0][3],f)}}function c(u){u.value instanceof w?Promise.resolve(u.value.v).then(l,h):g(i[0][2],u)}function l(u){r("next",u)}function h(u){r("throw",u)}function g(u,d){u(d),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
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
 */const J=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Nt(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Mt(e),[s,o]=n.tee();return{stream:bt(s),response:Tt(o)}}async function Tt(t){const e=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return U(Dt(e));e.push(o)}}function bt(t){return At(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield w(n.read());if(o)break;yield yield w(U(s))}})}function Mt(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return e.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new p("Failed to parse stream"));return}s.close();return}o+=a;let c=o.match(J),l;for(;c;){try{l=JSON.parse(c[1])}catch{s.error(new p(`Error parsing JSON response: "${c[1]}"`));return}s.enqueue(l),o=o.substring(c[0].length),c=o.match(J)}return i()})}}})}function Dt(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].groundingMetadata=o.groundingMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[i].content.parts.push(a)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
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
 */async function ot(t,e,n,s){const o=await S(e,m.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s);return Nt(o)}async function it(t,e,n,s){const i=await(await S(e,m.GENERATE_CONTENT,t,!1,JSON.stringify(n),s)).json();return{response:U(i)}}/**
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
 */function at(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function O(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return Ut(e)}function Ut(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new p("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new p("No content is provided for sending chat message.");return s?e:n}function $t(t,e){var n;let s={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=t.generateContentRequest!=null;if(t.contents){if(o)throw new _("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{const i=O(t);s.contents=[i]}return{generateContentRequest:s}}function W(t){let e;return t.contents?e=t:e={contents:[O(t)]},t.systemInstruction&&(e.systemInstruction=at(t.systemInstruction)),e}function Lt(t){return typeof t=="string"||Array.isArray(t)?{content:O(t)}:t}/**
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
 */const X=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Gt={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function xt(t){let e=!1;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new p(`First content should be with role 'user', got ${s}`);if(!H.includes(s))throw new p(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(H)}`);if(!Array.isArray(o))throw new p("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new p("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const c of X)c in r&&(i[c]+=1);const a=Gt[s];for(const r of X)if(!a.includes(r)&&i[r]>0)throw new p(`Content with role '${s}' can't contain '${r}' part`);e=!0}}/**
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
 */const z="SILENT_ERROR";class Ft{constructor(e,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(xt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var s,o,i,a,r,c;await this._sendPromise;const l=O(e),h={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(c=this.params)===null||c===void 0?void 0:c.cachedContent,contents:[...this._history,l]},g=Object.assign(Object.assign({},this._requestOptions),n);let u;return this._sendPromise=this._sendPromise.then(()=>it(this._apiKey,this.model,h,g)).then(d=>{var f;if(d.response.candidates&&d.response.candidates.length>0){this._history.push(l);const E=Object.assign({parts:[],role:"model"},(f=d.response.candidates)===null||f===void 0?void 0:f[0].content);this._history.push(E)}else{const E=C(d.response);E&&console.warn(`sendMessage() was unsuccessful. ${E}. Inspect response object for details.`)}u=d}),await this._sendPromise,u}async sendMessageStream(e,n={}){var s,o,i,a,r,c;await this._sendPromise;const l=O(e),h={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(c=this.params)===null||c===void 0?void 0:c.cachedContent,contents:[...this._history,l]},g=Object.assign(Object.assign({},this._requestOptions),n),u=ot(this._apiKey,this.model,h,g);return this._sendPromise=this._sendPromise.then(()=>u).catch(d=>{throw new Error(z)}).then(d=>d.response).then(d=>{if(d.candidates&&d.candidates.length>0){this._history.push(l);const f=Object.assign({},d.candidates[0].content);f.role||(f.role="model"),this._history.push(f)}else{const f=C(d);f&&console.warn(`sendMessageStream() was unsuccessful. ${f}. Inspect response object for details.`)}}).catch(d=>{d.message!==z&&console.error(d)}),u}}/**
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
 */async function Ht(t,e,n,s){return(await S(e,m.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
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
 */async function jt(t,e,n,s){return(await S(e,m.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function kt(t,e,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await S(e,m.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class Q{constructor(e,n,s={}){this.apiKey=e,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=at(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var s;const o=W(e),i=Object.assign(Object.assign({},this._requestOptions),n);return it(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(e,n={}){var s;const o=W(e),i=Object.assign(Object.assign({},this._requestOptions),n);return ot(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(e){var n;return new Ft(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const s=$t(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return Ht(this.apiKey,this.model,s,o)}async embedContent(e,n={}){const s=Lt(e),o=Object.assign(Object.assign({},this._requestOptions),n);return jt(this.apiKey,this.model,s,o)}async batchEmbedContents(e,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return kt(this.apiKey,this.model,e,s)}}/**
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
 */class Yt{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new p("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Q(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,s){if(!e.name)throw new _("Cached content must contain a `name` field.");if(!e.model)throw new _("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&e[a]&&(n==null?void 0:n[a])!==e[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,c=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(r===c)continue}throw new _(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${e[a]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Q(this.apiKey,i,s)}}const Kt="AIzaSyApClqszUTiruooucL-l1UUQEsEeRi6zuk",Z='Speek in language from previous message. Provide it in the form: "1. query1 2. query2 3. query3".';function Pt(t,e,n,s,o,i){const a=Kt,r=new Yt(a);return i?r.getGenerativeModel({model:"gemini-2.0-flash",tools:[{googleSearch:{}}],systemInstruction:`${n!=="auto"?`Always speak in ${n} language!`:""}, Stick to these rules: ${s} ${t?`and ${$.find(c=>c.name.toUpperCase()===t).defaultHistory}`:`and ${Z}`}`}):t!=="ALLY-CUSTOM"?r.getGenerativeModel({model:"gemini-2.0-flash-exp",generationConfig:{temperature:e},systemInstruction:`${n!=="auto"?`Always speek in ${n} language!`:""}, Stick to these rules: ${s} ${t?`and ${$.find(c=>c.name.toUpperCase()===t).defaultHistory}`:`and ${Z}`}`}):r.getGenerativeModel({model:"gemini-2.0-flash-exp",generationConfig:{temperature:e},systemInstruction:`${n!=="auto"?`Always speek in ${n} language!`:""}, Stick to these rules: ${s} and ${o}`})}function Bt(t,e){return t.startChat({history:[...e]})}const qt=t=>new Promise((e,n)=>{const s=new FileReader;s.onload=()=>e(s.result.split(",")[1]),s.onerror=o=>n(o),s.readAsDataURL(t)}),Vt=async(t,e,n,s)=>{const o=await Promise.all(n.map(async c=>{const l=c.type;return{inlineData:{data:await qt(c),mimeType:l}}})),i=s.map(c=>c.message).join(`
`)+`
`+e,a=await t.generateContentStream([i,...o]);let r="";for await(const c of a.stream)r+=c.text();return r||"No response generated."};async function Jt(t,e,n=3,s=1e3,o){var a,r,c,l,h,g,u;let i=0;for(;i<n;)try{const d=await t.sendMessage(e);return o?(((u=(g=d.response.candidates[0])==null?void 0:g.groundingMetadata)==null?void 0:u.groundingSupports)||[]).map(E=>E.segment.text).join(`
`)||"No response generated.":((h=(l=(c=(r=(a=d.response.candidates)==null?void 0:a[0])==null?void 0:r.content)==null?void 0:c.parts)==null?void 0:l[0])==null?void 0:h.text)||"No response generated."}catch(d){if(d.message.includes("503")&&i<n-1)console.warn(`Attempt ${i+1} failed. Retrying in ${s}ms...`),await new Promise(f=>setTimeout(f,s)),i++;else throw console.error("Error sending message to Gemini API:",d),new Error("Failed to send message.")}}async function tt(t,e,n,s,o=!1){try{const i=await dt(),a=await lt(),r=i.temperature||1,c=i.language||"auto",l=`Always use ${i.tone} tone language!. ${i.rules}`||"",h=a.rules||"",g=Pt(s,r,c,l,h,o);if(n.length>0)return await Vt(g,t,n,e);{const u=await Bt(g,e);return await Jt(u,t,3,1e3,o)}}catch(i){return console.error("Error with Gemini API:",i),"Unfortunately, the server is overloaded. Please try again later."}}const Wt={"1:1":{width:512,height:512},"16:9":{width:1024,height:576},"9:16":{width:576,height:1024},"4:3":{width:640,height:480},"3:4":{width:480,height:640}},Xt=async t=>{try{const n=await(await fetch("https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",{headers:{Authorization:"Bearer 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","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)})).blob();return new Promise((s,o)=>{const i=new FileReader;i.onloadend=()=>{s(i.result)},i.onerror=()=>{o(new Error("Failed to convert blob to Base64"))},i.readAsDataURL(n)})}catch(e){return console.error("Error with Hugging Face API:",e.message),"Unfortunately, the server is overloaded. Please try again later."}};async function et(t,e="1:1"){if(!t)return;const{width:n,height:s}=Wt[e];return await Xt({inputs:t,parameters:{width:n,height:s}})}async function zt(t){return(await y.ref(`users/${t||nt.currentUser.uid}`).once("value")).val().username}function Qt(t,e){t(""),e([])}async function ne(t,e,n,s,o,i,a,r,c,l,h="1:1",g){if(s&&s.preventDefault(),e.trim()==="")return;n&&c&&Qt(n,c),a&&a(!0);const u=`chats/${nt.currentUser.uid}/${t.toUpperCase()}/${o}`,f=(await y.ref(u).once("value")).numChildren(),E=f.toString().padStart(6,"0");if(ct(t.toUpperCase(),await ut(t.toUpperCase())),l){const b=parseInt(l.replace("message_","")-1).toString().padStart(6,"0"),M=t.toUpperCase()==="ALLY-IMAGINE";y.ref(`${u}/message_${b}/`).once("value").then(async R=>{const A=R.val().message,rt={message:N(A)?L:M?await et(A,h):await tt(A,i,r,t.toUpperCase()),username:"Ally",author:"ai",time:D(),loading:!0,invalid:N(A)};y.ref(`${u}/${l}/`).update(rt).then(()=>{a&&a(!1)})})}else{const b={message:e,author:"user",time:D(),username:await zt(),file:r.length>0?r.map(R=>URL.createObjectURL(R)):null,invalid:!1},M=t.toUpperCase()==="ALLY-IMAGINE";y.ref(`${u}/message_${E}/`).set(b).then(async()=>{const R={message:N(e)?L:M?await et(e,h):await tt(e,i,r,t.toUpperCase(),g),username:"Ally",author:"ai",time:D(),loading:!0,invalid:N(e)};y.ref(`${u}/message_${(f+1).toString().padStart(6,"0")}/`).set(R).then(()=>{a&&a(!1)})})}}export{ne as _,L as a,tt as b,zt as c,N as i};
