"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("atom"),t=require("path"),r=require("fs"),n=require("util"),i=require("crypto");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(t),a=o(n),l=o(i);const{promisify:c}=a.default,u=c(l.default.randomBytes),d="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~".split(""),f="0123456789".split(""),g="CDEHKMPRTUWXY012458".split(""),p="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".split(""),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=[void 0,"hex","base64","url-safe","numeric","distinguishable","ascii-printable","alphanumeric"],m=(e,t)=>({length:r,type:n,characters:i})=>{if(!(r>=0&&Number.isFinite(r)))throw new TypeError("Expected a `length` to be a non-negative finite number");if(void 0!==n&&void 0!==i)throw new TypeError("Expected either `type` or `characters`");if(void 0!==i&&"string"!=typeof i)throw new TypeError("Expected `characters` to be string");if(!b.includes(n))throw new TypeError(`Unknown type: ${n}`);if(void 0===n&&void 0===i&&(n="hex"),"hex"===n||void 0===n&&void 0===i)return t(Math.ceil(.5*r),"hex",r);if("base64"===n)return t(Math.ceil(.75*r),"base64",r);if("url-safe"===n)return e(r,d);if("numeric"===n)return e(r,f);if("distinguishable"===n)return e(r,g);if("ascii-printable"===n)return e(r,p);if("alphanumeric"===n)return e(r,h);if(0===i.length)throw new TypeError("Expected `characters` string length to be greater than or equal to 1");if(i.length>65536)throw new TypeError("Expected `characters` string length to be less or equal to 65536");return e(r,i.split(""))};var w=m(((e,t)=>{const r=t.length,n=Math.floor(65536/r)*r-1,i=2*Math.ceil(1.1*e);let o="",s=0;for(;s<e;){const a=l.default.randomBytes(i);let c=0;for(;c<i&&s<e;){const e=a.readUInt16LE(c);c+=2,e>n||(o+=t[e%r],s++)}}return o}),((e,t,r)=>l.default.randomBytes(e).toString(t).slice(0,r))),y=m((async(e,t)=>{const r=t.length,n=Math.floor(65536/r)*r-1,i=2*Math.ceil(1.1*e);let o="",s=0;for(;s<e;){const a=await u(i);let l=0;for(;l<i&&s<e;){const e=a.readUInt16LE(l);l+=2,e>n||(o+=t[e%r],s++)}}return o}),(async(e,t,r)=>(await u(e)).toString(t).slice(0,r)));w.async=y;const v=Object.freeze({enableSemanticRules:!1,rulesDirectory:"",fixOnSave:!1,ignoreTypings:!1,useLocalTslint:!0,useGlobalTslint:!1,globalNodePath:""}),{stat:k}=r.promises,T=["source.ts","source.tsx"],x=new Set,I={...v};function E(){return new Promise((e=>{const t=window.requestIdleCallback((()=>{x.delete(t),e(!0)}));x.add(t)}))}const S=new e.CompositeDisposable,C=new class{constructor(){this.workerInstance=null}isRunning(){return Boolean(this.workerInstance)}startWorker(t){this.workerInstance||(this.workerInstance=new e.Task(require.resolve("./worker.js")),this.workerInstance.start(t))}terminateWorker(){this.workerInstance&&(this.workerInstance.terminate(),this.workerInstance=null)}changeConfig(e,t){this.workerInstance&&this.workerInstance.send({messageType:"config",message:{key:e,value:t}})}async requestJob(e,t){if(null===this.workerInstance)throw new Error("Worker hasn't started");const r=await w.async({length:10});return new Promise(((n,i)=>{if(null===this.workerInstance)throw new Error("Worker hasn't started");const o=this.workerInstance.on("task:error",((...e)=>{const t=new Error(e[0]);[,t.stack]=e,i(t)})),s=this.workerInstance.on(r,(e=>{o.dispose(),s.dispose(),n(e)}));try{this.workerInstance.send({messageType:"job",message:{emitKey:r,jobType:e,content:t.getText(),filePath:t.getPath()}})}catch(e){i(e)}}))}};exports.activate=function(){const e=window.requestIdleCallback((()=>{x.delete(e),require("atom-package-deps").install("linter-tslint")}));x.add(e),S.add(atom.config.observe("linter-tslint.rulesDirectory",(async e=>{if(e&&s.default.isAbsolute(e)){const t=await k(e);t&&t.isDirectory()&&(I.rulesDirectory=e,C.changeConfig("rulesDirectory",e))}})),atom.config.observe("linter-tslint.useLocalTslint",(e=>{I.useLocalTslint=e,C.changeConfig("useLocalTslint",e)})),atom.config.observe("linter-tslint.enableSemanticRules",(e=>{I.enableSemanticRules=e,C.changeConfig("enableSemanticRules",e)})),atom.config.observe("linter-tslint.useGlobalTslint",(e=>{I.useGlobalTslint=e,C.changeConfig("useGlobalTslint",e)})),atom.config.observe("linter-tslint.globalNodePath",(e=>{I.globalNodePath=e,C.changeConfig("globalNodePath",e)})),atom.config.observe("linter-tslint.ignoreTypings",(e=>{I.ignoreTypings=e})),atom.workspace.observeTextEditors((e=>{e.getRootScopeDescriptor().getScopesArray().some((e=>T.includes(e)))&&(atom.views.getView(e).classList.add("linter-tslint-compatible-editor"),e.onDidSave((async()=>{atom.config.get("linter-tslint.fixOnSave")&&(C.isRunning()||await E(),await C.requestJob("fix",e))})))})),atom.commands.add("atom-text-editor.linter-tslint-compatible-editor",{"linter-tslint:fix-file":async()=>{const e=atom.workspace.getActiveTextEditor();if(!e||e.isModified())return void atom.notifications.addError("Linter-TSLint: Please save before fixing");const t=e.getCursorBufferPosition();try{const r=await C.requestJob("fix",e),n=r&&0===r.length?"Linter-TSLint: Fix complete.":"Linter-TSLint: Fix attempt complete, but linting errors remain.";atom.notifications.addSuccess(n)}catch(e){atom.notifications.addWarning(e.message)}finally{e.setCursorBufferPosition(t)}}}));const t=window.requestIdleCallback((()=>{C.startWorker(I),x.delete(t)}));x.add(t)},exports.config={enableSemanticRules:{type:"boolean",title:"Enable semantic rules",description:"Allow passing a TypeScript program object to the linter. May negatively affect performance. See this page for details: https://palantir.github.io/tslint/usage/type-checking/",default:!1,order:1},rulesDirectory:{type:"string",title:"Custom rules directory (absolute path)",default:"",order:2},fixOnSave:{title:"Fix errors on save",description:"Have tslint attempt to fix some errors automatically when saving the file.",type:"boolean",default:!1,order:3},ignoreTypings:{type:"boolean",title:"Ignore typings files (.d.ts)",default:!1,order:4},useLocalTslint:{type:"boolean",title:"Try to use the project's local tslint package, if it exists",default:!0,order:5},useGlobalTslint:{type:"boolean",title:"Use the global tslint install",description:"If enabled, the global tslint installation will be used as a fallback, instead of the version packaged with linter-tslint.",default:!1,order:6},globalNodePath:{type:"string",title:"Global node installation path",description:"The location of your global npm install. (Will default to `npm get prefix`.)",default:"",order:7}},exports.deactivate=function(){x.forEach((e=>window.cancelIdleCallback(e))),x.clear(),S.dispose(),C.terminateWorker()},exports.provideLinter=function(){return{name:"TSLint",grammarScopes:T,scope:"file",lintsOnChange:!0,lint:async e=>{var t;if(I.ignoreTypings&&(null!==(t=e.getPath())&&void 0!==t?t:"").toLowerCase().endsWith(".d.ts"))return[];C.isRunning()||await E();const r=e.getText(),n=await C.requestJob("lint",e);return e.getText()!==r?null:n}}};
//# sourceMappingURL=main.js.map