"use strict";var e=require("fs"),t=require("path"),n=require("child_process");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t),i=r(n),s={__example:"https://github.com/<user>/<repo>/blob/master/docs/RULENAME.md"};var a=function(e){const t=e.split("/");if(1===t.length)return{found:!0,uri:`https://palantir.github.io/tslint/rules/${e}`};const n=t[0],r=t[1],o=s[n];return o?{found:!0,uri:o.replace("RULENAME",r)}:{found:!1,uri:"https://github.com/Xapphire13/tslint-rule-documentation/blob/master/CONTRIBUTING.md"}},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var l="[object GeneratorFunction]",c=/^\[object .+?Constructor\]$/,f="object"==typeof u&&u&&u.Object===Object&&u,p="object"==typeof self&&self&&self.Object===Object&&self,h=f||p||Function("return this")();function d(e,t){return!!(e?e.length:0)&&function(e,t,n){if(t!=t)return function(e,t,n,r){var o=e.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,_,n);var r=n-1,o=e.length;for(;++r<o;)if(e[r]===t)return r;return-1}(e,t,0)>-1}function v(e,t,n){for(var r=-1,o=e?e.length:0;++r<o;)if(n(t,e[r]))return!0;return!1}function _(e){return e!=e}function y(e,t){return e.has(t)}function g(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}var m,b=Array.prototype,w=Function.prototype,E=Object.prototype,S=h["__core-js_shared__"],P=(m=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"",A=w.toString,T=E.hasOwnProperty,L=E.toString,C=RegExp("^"+A.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),O=b.splice,x=D(h,"Map"),H=D(h,"Set"),j=D(Object,"create");function N(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function $(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function R(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function k(e){var t=-1,n=e?e.length:0;for(this.__data__=new R;++t<n;)this.add(e[t])}function K(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function U(e){return!(!M(e)||(t=e,P&&P in t))&&(function(e){var t=M(e)?L.call(e):"";return"[object Function]"==t||t==l}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?C:c).test(function(e){if(null!=e){try{return A.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}N.prototype.clear=function(){this.__data__=j?j(null):{}},N.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},N.prototype.get=function(e){var t=this.__data__;if(j){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return T.call(t,e)?t[e]:void 0},N.prototype.has=function(e){var t=this.__data__;return j?void 0!==t[e]:T.call(t,e)},N.prototype.set=function(e,t){return this.__data__[e]=j&&void 0===t?"__lodash_hash_undefined__":t,this},$.prototype.clear=function(){this.__data__=[]},$.prototype.delete=function(e){var t=this.__data__,n=K(t,e);return!(n<0)&&(n==t.length-1?t.pop():O.call(t,n,1),!0)},$.prototype.get=function(e){var t=this.__data__,n=K(t,e);return n<0?void 0:t[n][1]},$.prototype.has=function(e){return K(this.__data__,e)>-1},$.prototype.set=function(e,t){var n=this.__data__,r=K(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},R.prototype.clear=function(){this.__data__={hash:new N,map:new(x||$),string:new N}},R.prototype.delete=function(e){return q(this,e).delete(e)},R.prototype.get=function(e){return q(this,e).get(e)},R.prototype.has=function(e){return q(this,e).has(e)},R.prototype.set=function(e,t){return q(this,e).set(e,t),this},k.prototype.add=k.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},k.prototype.has=function(e){return this.__data__.has(e)};var F=H&&1/g(new H([,-0]))[1]==1/0?function(e){return new H(e)}:function(){};function q(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function D(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return U(n)?n:void 0}function M(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var Y,z=function(e){return e&&e.length?function(e,t,n){var r=-1,o=d,i=e.length,s=!0,a=[],u=a;if(n)s=!1,o=v;else if(i>=200){var l=t?null:F(e);if(l)return g(l);s=!1,o=y,u=new k}else u=t?[]:a;e:for(;++r<i;){var c=e[r],f=t?t(c):c;if(c=n||0!==c?c:0,s&&f==f){for(var p=u.length;p--;)if(u[p]===f)continue e;t&&u.push(f),a.push(c)}else o(u,f,n)||(u!==a&&u.push(f),a.push(c))}return a}(e):[]},W=function(e){var t={exports:{}};return e(t,t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.CACHE_KEY=t.KNOWN_SHELLS=void 0,t.identifyEnvironment=function(){var e=u(),t=e.command,n=e.parameters,r=e.options;return r.timeout=4e3,(0,i.default.spawnSync)(t,n,r).stdout.toString().split("\0")},t.identifyEnvironmentAsync=function(){return new Promise((function(e,t){var n=u(),r=n.command,o=n.parameters,s=n.options,a=(0,i.default.spawn)(r,o,s),l=[],c=setTimeout((function(){a.kill(),t(new Error("Process execution timed out"))}),4e3);a.stdout.on("data",(function(e){l.push(e)})),a.on("close",(function(){clearTimeout(c),e(l.join("").split("\0"))})),a.on("error",(function(e){t(e)}))}))},t.parse=function(e){var t={},n=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var a=i.value,u=a.indexOf("=");if(-1!==u){var l=a.slice(0,u),c=a.slice(u+1);t[l]=c}}}catch(e){r=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}return t},t.applySugar=function(e){var t=process.env.PATH?process.env.PATH.split(":"):[];if(e.PATH){var o=!0,i=!1,s=void 0;try{for(var u,l=e.PATH.split(":")[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var c=u.value;c&&-1===t.indexOf(c)&&t.push(c)}}catch(e){i=!0,s=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw s}}}var f=!0,p=!1,h=void 0;try{for(var d,v=a[Symbol.iterator]();!(f=(d=v.next()).done);f=!0){var _=d.value;-1===t.indexOf(_)&&(t=[_].concat(t))}}catch(e){p=!0,h=e}finally{try{!f&&v.return&&v.return()}finally{if(p)throw h}}e.USER||(process.env.USER?e.USER=process.env.USER:e.HOME&&(e.USER=n.default.basename(e.HOME)));return e.PATH=(0,r.default)(t).join(":"),e.PWD=process.cwd(),e.OLDPWD=e.PWD,e},t.getCommand=u;var n=s(o.default),r=s(z);function s(e){return e&&e.__esModule?e:{default:e}}var a=["/bin","/sbin","/usr/bin","/usr/sbin","/usr/local/bin","/usr/local/sbin"];function u(){var e='import os;print(\\"\\0\\".join(map(\\"=\\".join, dict(os.environ).items()))+\\"\\0\\")',t='python -c "'+e+'"||python3 -c "'+e+'"||env|sed -n -e "s/^\\([A-Za-z_][A-Za-z0-9_]*\\)=.*/\\1/p"|while read name;do [ "$name" != "_" -a -n "$(eval "printf \\"%s\\" \\"\\${$name+x}\\"")" ]&&value="$(eval "printf \\"%s\\" \\"\\${$name}\\"")"&&printf "%s=%s\\0" "$name" "$value";done;exit;',r="sh -c '"+t+"';exit;",o=process.env.SHELL||"sh",i=["-c",r],s=n.default.basename(o);return"bash"===s?i=["-c","source ~/.bashrc;source ~/.bash_profile;"+t]:"zsh"===s?i=["-c","source ~/.zshrc;"+t]:"fish"===s?i=["-c","source ~/.config/fish/config.fish;"+r]:"sh"!==s&&"ksh"!==s||(i=["-c",t]),{command:o,parameters:i,options:{encoding:"utf8"}}}t.KNOWN_SHELLS=["zsh","bash","fish"],t.CACHE_KEY="__STEELBRAIN_CONSISTENT_ENV_V1",t.assign=Object.assign||function(e,t){for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}})),I=(Y=o.default)&&Y.__esModule?Y:{default:Y};var G=function(){if("win32"===process.platform||!process.env.SHELL)return(0,W.assign)({},process.env);if(u[W.CACHE_KEY])return(0,W.assign)({},u[W.CACHE_KEY]);var e=I.default.basename(process.env.SHELL);if(-1===W.KNOWN_SHELLS.indexOf(e))return(0,W.assign)({},process.env);try{var t=(0,W.applySugar)((0,W.parse)((0,W.identifyEnvironment)()));return u[W.CACHE_KEY]=t,t}catch(e){return console.error("[consistent-env] Unable to determine environment",e),(0,W.assign)({},process.env)}};let B;G.async=function(){return new Promise((function(e){if("win32"!==process.platform&&process.env.SHELL)if(u[W.CACHE_KEY])e((0,W.assign)({},u[W.CACHE_KEY]));else{var t=I.default.basename(process.env.SHELL);-1===W.KNOWN_SHELLS.indexOf(t)?e((0,W.assign)({},process.env)):e((0,W.identifyEnvironmentAsync)().then(W.parse).then(W.applySugar).then((function(e){return u[W.CACHE_KEY]=e,e})))}else e((0,W.assign)({},process.env))})).catch((function(e){return console.error("[consistent-env] Unable to determine environment",e),(0,W.assign)({},process.env)}))};var V=function(){return"win32"===process.platform?process.env.PATH||process.env.Path:(B||(B=G),B().PATH||"")};V.async=function(){return"win32"===process.platform?Promise.resolve(process.env.PATH||process.env.Path):(B||(B=G),B.async().then((function(e){return e.PATH||""})))};const Z=Object.freeze({enableSemanticRules:!1,rulesDirectory:"",fixOnSave:!1,ignoreTypings:!1,useLocalTslint:!0,useGlobalTslint:!1,globalNodePath:""}),{stat:X}=e.promises;process.title="linter-tslint worker";const J=new Map,Q={...Z};let ee,te;function ne(e,t){const n=t||e;return new Promise((t=>{te||(te=require("resolve")),te("tslint",{basedir:n},((n,r,o)=>{let i;!n&&o&&/^3|4|5|6\./.test(o.version)&&(i=o.version.startsWith("3")?function(e){function t(e){this.options=e,this.results={}}return Object.assign(t,e),t.prototype={...e.prototype,lint(t,n,r){const o={...this.options,configuration:r},i=new e(t,n,o);this.results=i.lint()},getResult(){return this.results}},t}(require("loophole").allowUnsafeNewFunction((()=>require(r)))):require("loophole").allowUnsafeNewFunction((()=>require(r).Linter)),J.set(e,i)),t(i)}))}))}async function re(e){const t=o.default.dirname(e);if(J.has(t))return J.get(t);if(Q.useLocalTslint){const e=await ne(t);if(e)return e}if(ee)return J.set(t,ee),ee;if(Q.useGlobalTslint){if(Q.globalNodePath){const e=await ne(t,Q.globalNodePath);if(e)return ee=e,e}let e;try{e=await new Promise(((e,t)=>{const n="win32"===process.platform?"npm.cmd":"npm";i.default.exec(`${n} get prefix`,{env:{...process.env,PATH:V()}},((n,r,o)=>{n||o?t(n||new Error(o)):e(r.trim())}))}))}catch(e){console.warn(`Attempted to load global tslint, but "npm get prefix" failed. Falling back to the packaged version of tslint. You can specify your prefix manually in the settings or linter-tslint config file. If your prefix is specified in the settings, make sure that it is correct.\n\nThe error message encountered was:\n\n${e.message}`)}if(e){const n=await ne(t,e);if(n)return ee=n,n;console.warn(`Unable to find global installation of tslint at ${e}. Falling back to the packaged version of tslint. If you have not done so, install tslint by running "npm install -g tslint" from the command line.`)}}return ee=require("tslint").Linter,J.set(t,ee),ee}function oe(e){const t=e.ruleSeverity.toLowerCase();return["info","warning","error"].includes(t)?t:"warning"}async function ie(e,t,n){if(null==t)return null;let r;try{const i=await re(t),s=i.findConfigurationPath(null,t),a=i.loadConfigurationFromPath(s);let u,{rulesDirectory:l}=a;if(l&&s){const e=o.default.dirname(s);Array.isArray(l)||(l=[l]),l=l.map((t=>o.default.isAbsolute(t)?t:o.default.join(e,t))),Q.rulesDirectory&&l.push(Q.rulesDirectory)}Q.enableSemanticRules&&s&&(u=await async function(e,t){let n;const r=o.default.dirname(t),i=o.default.resolve(r,"tsconfig.json");try{(await X(i)).isFile()&&(n=e.createProgram(i,r))}catch(e){}return n}(i,s));const c=new i({formatter:"json",rulesDirectory:l,...n},u);c.lint(t,e,a),r=c.getResult()}catch(e){console.error(e.message,e.stack),r={errorCount:0,warningCount:0,failures:[],format:"",output:""}}return r.failureCount||r.errorCount||r.warningCount||r.infoCount?r.failures.map((e=>{const t=a(e.getRuleName()),n=e.getStartPosition().getLineAndCharacter(),r=e.getEndPosition().getLineAndCharacter();return{severity:oe(e),excerpt:`${e.getFailure()} (${e.getRuleName()})`,url:t.uri,location:{file:o.default.normalize(e.getFileName()),position:[[n.line,n.character],[r.line,r.character]]}}})):[]}module.exports=async function(e){Q.useLocalTslint=e.useLocalTslint,Q.enableSemanticRules=e.enableSemanticRules,Q.useGlobalTslint=e.useGlobalTslint,Q.globalNodePath=e.globalNodePath,process.on("message",(async e=>{if("config"===e.messageType)Q[e.message.key]=e.message.value,"useLocalTslint"===e.message.key&&J.clear();else{const{emitKey:t,jobType:n,content:r,filePath:o}=e.message,i="fix"===n?{fix:!0}:{fix:!1},s=await ie(r,o,i);emit(t,s)}}))};
//# sourceMappingURL=worker.js.map
